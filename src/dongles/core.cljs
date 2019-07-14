(ns dongles.core
    (:require
      ;; [figwheel.client :as fw]
              ;; three
              ;; stats
              [dongles.mesh :as mesh]))

(enable-console-print!)

(defonce state (atom {:c 0}))

(defn init-stats []
  (when-not (:stats @state)
    (let [stats (js/Stats.)]
      (set! (.. stats -domElement -style -position) "absolute")
      (set! (.. stats -domElement -style -left) "0px")
      (set! (.. stats -domElement -style -bottom) "0px")
      (.appendChild (.-body js/document) (.-domElement stats))
      (swap! state assoc :stats stats))))

(defn teardown-stats []
  (when-let [stats (:stats @state)]
    (.removeChild (.-body js/document) (.-domElement stats))
    (swap! state dissoc :stats)))

(defn set-pos [cube x y z]
  (set! (.. cube -position -x) x)
  (set! (.. cube -position -y) y)
  (set! (.. cube -position -z) z)
  cube)

(defn prepared-camera []
  (let [camera (js/THREE.PerspectiveCamera.
                 45
                 (/ (.-innerWidth js/window) (.-innerHeight js/window))
                 0.1
                 1000)]
    (set-pos camera 0 12 50)
    ;; (set-pos camera 20 10 50)
    ;; (set-pos camera -15 5 40)

    camera))

(defn prepared-renderer []
  (let [renderer (js/THREE.WebGLRenderer. (clj->js {:alpha true
                                                    :antialias true}))]
    (set! (.-xxid renderer)
          (:c (swap! state update :c inc)))
    (.setSize renderer (.-innerWidth js/window) (.-innerHeight js/window))
    (.appendChild (.-body js/document) (.-domElement renderer))

    renderer))

(defn prepared-lights [scene]
  (let [lights [
                (js/THREE.AmbientLight. 0x444444)
                (js/THREE.DirectionalLight. 0xffffff 0.5)
                (js/THREE.DirectionalLight. 0xffffff 1)
                ]]
    (.set (.-position (nth lights 1)) 2 10 1)
    (.set (.-position (nth lights 2)) -5 3 8)
    (doseq [light lights]
      (.add scene light))

    lights))

(defn init []
  (when-not (:renderer @state)
    (let [scene (js/THREE.Scene.)
          camera (prepared-camera)
          renderer (prepared-renderer)
          lights (prepared-lights scene)
          running (atom true)]

      ;; (js/THREE.OrbitControls. camera (.-domElement renderer))

      (.add scene (mesh/prepare 0))

      (letfn [(animate [i]
                (when @running (js/requestAnimationFrame animate (+ 1 i)))

                (when (< (mod (* i 300) 50) 1.0)
                  (swap! state assoc
                         :x-incs (repeatedly
                                   (* 8 mesh/n)
                                   #(rand-int 3))
                         :x-incs-start i
                         :x-incs-duration 200.0))

                ;; (mesh/prepare i @state)

                (dotimes [j 10]
                  (aset mesh/vertices (rand-int mesh/m) (rand-int (* mesh/hh mesh/n))))
                (set! (.-needsUpdate mesh/position-attribute) true)

                (.render renderer scene camera)
                (when-let [stats (:stats @state)] (.update stats)))]
        (animate 0)
        (swap! state #(assoc %
                                 :renderer renderer
                                 :stopper (fn [] (reset! running false))))))))

(defn teardown-app []
  (when-let [stopper (:stopper @state)] (stopper))
  (when-let [renderer (:renderer @state)]
    (.removeChild (.-body js/document) (.-domElement renderer)))
  (swap! state dissoc :stopper :renderer))

;; This confuses me: since we so a ^:figwheel-always, I don't see what purpose
;; fw/start serves here; perhaps these machinery should be decoupled a bit.

;; (fw/start {
;;   :on-jsload (fn []
               (teardown-app)
               (teardown-stats)

               (init)
               (init-stats)
;; )})

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
