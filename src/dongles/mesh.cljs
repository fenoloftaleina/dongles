(ns dongles.mesh
  ;; (:require three)
  )

(defn debug [msg]
  (set! (.-innerHTML (js/document.getElementById "debug")) msg))

(def n 50)
(def h 0.6)
(def hh (/ h 2))
(def -hh (* -1 hh))
(def faces (* 6 n))
(def m (* faces 6 3))
(def geometry (js/THREE.BufferGeometry.))
(def vertices (js/Float32Array. m))
(def normals (js/Float32Array. m))
(def colors (js/Float32Array. m))
(def position-attribute (js/THREE.BufferAttribute. vertices 3))
(set! (.-dynamic position-attribute) true)
(def normal-attribute (js/THREE.BufferAttribute. normals 3))
(set! (.-dynamic normal-attribute) true)
(def color-attribute (js/THREE.BufferAttribute. colors 3))
(set! (.-dynamic color-attribute) true)

(.addAttribute geometry "position" position-attribute)
(.addAttribute geometry "normal" normal-attribute)
(.addAttribute geometry "color" color-attribute)

(def mesh
  (js/THREE.Mesh.
    geometry
    (js/THREE.MeshPhongMaterial.
      (clj->js
        {:color 0xffffff
         :specular 0xffffff
         :shininess 5
         :side js/THREE.DoubleSide
         :vertexColors js/THREE.VertexColors}))))

(set! (.. mesh -rotation -y) -0.9)

(defn set3 [out start in]
  (dotimes [i 3]
    (aset out
          (+ start i)
          (nth in i))))

(defn v3 [[x y z]]
  (js/THREE.Vector3. x y z))

(defn v3->arr [v]
  [(.-x v) (.-y v) (.-z v)])

(defn sin [x]
  (js/Math.sin x))

(defn pow [x n]
  (js/Math.pow x n))

(defn sin2 [x]
  (pow (sin x) 2))

(defn prepare [t & [state]]
  (let [add-face (fn [i vs4x3 cs2x3]
                   (doseq [[j v] (map vector
                                      (range 0 6)
                                      (concat
                                        (take 3 vs4x3)
                                        [(nth vs4x3 1)
                                         (nth vs4x3 3)
                                         (nth vs4x3 2)]))]
                     (set3 vertices (+ i (* j 3)) v))
                   (let [first-face-normal
                         (.normalize
                           (.cross
                             (.sub
                               (v3 (nth vs4x3 1))
                               (v3 (nth vs4x3 0)))
                             (.sub
                               (v3 (nth vs4x3 2))
                               (v3 (nth vs4x3 0)))))
                         second-face-normal
                         (.normalize
                           (.cross
                             (.sub
                               (v3 (nth vs4x3 3))
                               (v3 (nth vs4x3 1)))
                             (.sub
                               (v3 (nth vs4x3 2))
                               (v3 (nth vs4x3 1)))))
                         between-normal
                         (.normalize
                           (.divideScalar
                             (.addVectors
                               (js/THREE.Vector3. 0 0 0)
                               first-face-normal
                               second-face-normal)
                             2))]
                     (doseq [[j v] (map vector
                                        (range 0 6)
                                        (map
                                          v3->arr
                                          [first-face-normal
                                           between-normal
                                           between-normal
                                           between-normal
                                           second-face-normal
                                           between-normal]))]
                       (set3 normals (+ i (* j 3)) v)))
                   (doseq [j [0 3 9]]
                     (set3 colors (+ i j) (first cs2x3)))
                   (doseq [j [6 12 15]]
                     (set3 colors (+ i j) (last cs2x3))))
        add-cubey (fn [i [vs-bottom4x3 vs-top4x3] cs2x3]
                    (dotimes [j 4]
                      (add-face
                        (+ i (* j 6 3))
                        [(nth vs-bottom4x3 j)
                         (nth vs-bottom4x3 (mod (inc j) 4))
                         (nth vs-top4x3 j)
                         (nth vs-top4x3 (mod (inc j) 4))]
                        cs2x3))
                    (add-face
                      (+ i (* 4 6 3))
                      [(nth vs-bottom4x3 2)
                       (nth vs-bottom4x3 3)
                       (nth vs-bottom4x3 1)
                       (nth vs-bottom4x3 0)]
                      cs2x3)
                    (add-face
                      (+ i (* 5 6 3))
                      [(nth vs-top4x3 2)
                       (nth vs-top4x3 3)
                       (nth vs-top4x3 1)
                       (nth vs-top4x3 0)]
                      cs2x3))
        ]

    #_(add-face 0
              [[-3 -3 3]
               [3 -3 3]
               [-3 3 -3]
               [3 3 -3]]
              [[0 0.5 0.5]
               [0 0.5 0.5]
               #_[0.5 0.3 0.6]]
              )

    (dotimes [i n]
      (let [a (* i (+ h 0.0))
            pos (fn [j [x y z]]
                  (let [ny (+ y a)
                        nz z #_(+ z (- (sin (* ny 0.3))))
                        nx (+ x (* 4.8 (sin (* ny 0.2)) (sin (* t 0.001))) (* (sin2 (* ny 2.7)) (sin2 (* t 0.005)) 0.5))]
                    [#_(+ x (* (js/THREE.Math.clamp
                                 (/ (- t (:x-incs-start state))
                                    (float (:x-incs-duration state)))
                                 0
                                 1)
                               (nth (:x-incs state) (+ (* i 8) j))))
                     nx ny nz]))]
        (add-cubey (* i 6 6 3)
                   (partition
                     4
                     (map-indexed
                       pos
                       [[-hh -hh hh]
                        [hh -hh hh]
                        [hh -hh -hh]
                        [-hh -hh -hh]
                        [-hh hh hh]
                        [hh hh hh]
                        [hh hh -hh]
                        [-hh hh -hh]]))
                   (let [tfn (fn [shift]
                               (fn [from to]
                                 (+ from
                                    (* (/ (+ i shift)
                                          n)
                                       (- to from)))

                                 ))]
                     [(mapv (tfn 0) [0 0.5 0.5] [0.5 0.3 0.6])
                      (mapv (tfn 1) [0 0.5 0.5] [0.5 0.3 0.6])])
                   )))

    #_(add-face 0
              [
                [3 -3 3]
                [3 -3 -3]
                [3 3 3]
                [3 3 -3]

               ]
               [[0 0.5 0.5]
                [0.5 0.3 0.6]]
               )

    (set! (.-needsUpdate position-attribute) true)
    (set! (.-needsUpdate normal-attribute) true)
    (set! (.-needsUpdate color-attribute) true)

    ;; (.setIndex geometry
    ;;            (js/THREE.BufferAttribute.
    ;;              (js/Float32Array.
    ;;                [0 1 2 1 3 2])
    ;;              1))

    ;; (.computeVertexNormals geometry)
    (.computeBoundingSphere geometry)

    )
mesh
)
