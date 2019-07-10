(ns dongles.mesh
  ;; (:require three)
  )

(defn debug [msg]
  (set! (.-innerHTML (js/document.getElementById "debug")) msg))

(def n 5)
(def faces (* 6 n))
(def m (* faces 6 3))
(def geometry (js/THREE.BufferGeometry.))
(def vertices (js/Float32Array. m))
(def colors (js/Float32Array. m))
(def position-attribute (js/THREE.BufferAttribute. vertices 3))
(set! (.-dynamic position-attribute) true)
(def color-attribute (js/THREE.BufferAttribute. colors 3))
(set! (.-dynamic color-attribute) true)

(.addAttribute geometry "position" position-attribute)
(.addAttribute geometry "color" color-attribute)

(def mesh
  (js/THREE.Mesh.
    geometry
    (js/THREE.MeshPhongMaterial.
      (clj->js
        {:color 0xffffff
         :specular 0xffffff
         :shininess 350
         :side js/THREE.DoubleSide
         :vertexColors js/THREE.VertexColors}))))

(set! (.. mesh -rotation -y) -0.9)

(defn set3 [out start in]
  (dotimes [i 3]
    (aset out
          (+ start i)
          (nth in i))))

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
               [-3 3 3]
               [3 3 3]]
              [[0 0.5 0.5]
               [0.5 0.3 0.6]]
              )

    #_(add-cubey 0
               [[-3 -3 3]
                [3 -3 3]
                [3 -3 -3]
                [-3 -3 -3]]
               [[-3 3 3]
                [3 3 3]
                [3 3 -3]
                [-3 3 -3]]
               [[0 0.5 0.5]
                [0.5 0.3 0.6]]
               )

    (dotimes [i n]
      (let [a (* i 6.3)
            pos (fn [j [x y z]]
                  [(+ x (* (js/THREE.Math.clamp
                             (/ (- t (:x-incs-start state))
                                (float (:x-incs-duration state)))
                             0
                             1)
                           (nth (:x-incs state) (+ (* i 8) j))))
                   (+ y a)
                   (* z 2)])]
        (add-cubey (* i 6 6 3)
                   (partition
                     4
                     (map-indexed
                       pos
                       [[-3 -3 3]
                        [3 -3 3]
                        [3 -3 -3]
                        [-3 -3 -3]
                        [-3 3 3]
                        [3 3 3]
                        [3 3 -3]
                        [-3 3 -3]]))
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
    (set! (.-needsUpdate color-attribute) true)

    ;; (.setIndex geometry
    ;;            (js/THREE.BufferAttribute.
    ;;              (js/Float32Array.
    ;;                [0 1 2 1 3 2])
    ;;              1))

    (.computeVertexNormals geometry)
    (.computeBoundingSphere geometry)

    )
mesh
)
