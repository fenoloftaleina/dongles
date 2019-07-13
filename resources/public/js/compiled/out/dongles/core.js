// Compiled by ClojureScript 1.10.520 {}
goog.provide('dongles.core');
goog.require('cljs.core');
goog.require('dongles.mesh');
cljs.core.enable_console_print_BANG_.call(null);
if((typeof dongles !== 'undefined') && (typeof dongles.core !== 'undefined') && (typeof dongles.core.state !== 'undefined')){
} else {
dongles.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"c","c",-1763192079),(0)], null));
}
dongles.core.init_stats = (function dongles$core$init_stats(){
if(cljs.core.truth_(new cljs.core.Keyword(null,"stats","stats",-85643011).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dongles.core.state)))){
return null;
} else {
var stats = (new Stats());
stats.domElement.style.position = "absolute";

stats.domElement.style.left = "0px";

stats.domElement.style.bottom = "0px";

document.body.appendChild(stats.domElement);

return cljs.core.swap_BANG_.call(null,dongles.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"stats","stats",-85643011),stats);
}
});
dongles.core.teardown_stats = (function dongles$core$teardown_stats(){
var temp__5720__auto__ = new cljs.core.Keyword(null,"stats","stats",-85643011).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dongles.core.state));
if(cljs.core.truth_(temp__5720__auto__)){
var stats = temp__5720__auto__;
document.body.removeChild(stats.domElement);

return cljs.core.swap_BANG_.call(null,dongles.core.state,cljs.core.dissoc,new cljs.core.Keyword(null,"stats","stats",-85643011));
} else {
return null;
}
});
dongles.core.set_pos = (function dongles$core$set_pos(cube,x,y,z){
cube.position.x = x;

cube.position.y = y;

cube.position.z = z;

return cube;
});
dongles.core.prepared_camera = (function dongles$core$prepared_camera(){
var camera = (new THREE.PerspectiveCamera((45),(window.innerWidth / window.innerHeight),0.1,(1000)));
dongles.core.set_pos.call(null,camera,(0),(12),(50));

return camera;
});
dongles.core.prepared_renderer = (function dongles$core$prepared_renderer(){
var renderer = (new THREE.WebGLRenderer(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"alpha","alpha",-1574982441),true,new cljs.core.Keyword(null,"antialias","antialias",-2073640634),true], null))));
renderer.xxid = new cljs.core.Keyword(null,"c","c",-1763192079).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.call(null,dongles.core.state,cljs.core.update,new cljs.core.Keyword(null,"c","c",-1763192079),cljs.core.inc));

renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement);

return renderer;
});
dongles.core.prepared_lights = (function dongles$core$prepared_lights(scene){
var lights = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new THREE.AmbientLight((4473924))),(new THREE.DirectionalLight((16777215),0.5)),(new THREE.DirectionalLight((16777215),(1)))], null);
cljs.core.nth.call(null,lights,(1)).position.set((2),(10),(1));

cljs.core.nth.call(null,lights,(2)).position.set((-5),(3),(8));

var seq__54949_54953 = cljs.core.seq.call(null,lights);
var chunk__54950_54954 = null;
var count__54951_54955 = (0);
var i__54952_54956 = (0);
while(true){
if((i__54952_54956 < count__54951_54955)){
var light_54957 = cljs.core._nth.call(null,chunk__54950_54954,i__54952_54956);
scene.add(light_54957);


var G__54958 = seq__54949_54953;
var G__54959 = chunk__54950_54954;
var G__54960 = count__54951_54955;
var G__54961 = (i__54952_54956 + (1));
seq__54949_54953 = G__54958;
chunk__54950_54954 = G__54959;
count__54951_54955 = G__54960;
i__54952_54956 = G__54961;
continue;
} else {
var temp__5720__auto___54962 = cljs.core.seq.call(null,seq__54949_54953);
if(temp__5720__auto___54962){
var seq__54949_54963__$1 = temp__5720__auto___54962;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54949_54963__$1)){
var c__4550__auto___54964 = cljs.core.chunk_first.call(null,seq__54949_54963__$1);
var G__54965 = cljs.core.chunk_rest.call(null,seq__54949_54963__$1);
var G__54966 = c__4550__auto___54964;
var G__54967 = cljs.core.count.call(null,c__4550__auto___54964);
var G__54968 = (0);
seq__54949_54953 = G__54965;
chunk__54950_54954 = G__54966;
count__54951_54955 = G__54967;
i__54952_54956 = G__54968;
continue;
} else {
var light_54969 = cljs.core.first.call(null,seq__54949_54963__$1);
scene.add(light_54969);


var G__54970 = cljs.core.next.call(null,seq__54949_54963__$1);
var G__54971 = null;
var G__54972 = (0);
var G__54973 = (0);
seq__54949_54953 = G__54970;
chunk__54950_54954 = G__54971;
count__54951_54955 = G__54972;
i__54952_54956 = G__54973;
continue;
}
} else {
}
}
break;
}

return lights;
});
dongles.core.init = (function dongles$core$init(){
if(cljs.core.truth_(new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dongles.core.state)))){
return null;
} else {
var scene = (new THREE.Scene());
var camera = dongles.core.prepared_camera.call(null);
var renderer = dongles.core.prepared_renderer.call(null);
var lights = dongles.core.prepared_lights.call(null,scene);
var running = cljs.core.atom.call(null,true);
(new THREE.OrbitControls(camera,renderer.domElement));

scene.add(dongles.mesh.prepare.call(null,(0)));

var animate = ((function (scene,camera,renderer,lights,running){
return (function dongles$core$init_$_animate(i){
if(cljs.core.truth_(cljs.core.deref.call(null,running))){
requestAnimationFrame(dongles$core$init_$_animate,((1) + i));
} else {
}

if((cljs.core.mod.call(null,(i * (300)),(50)) < 1.0)){
cljs.core.swap_BANG_.call(null,dongles.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"x-incs","x-incs",1657352393),cljs.core.repeatedly.call(null,((8) * dongles.mesh.n),((function (scene,camera,renderer,lights,running){
return (function (){
return cljs.core.rand_int.call(null,(3));
});})(scene,camera,renderer,lights,running))
),new cljs.core.Keyword(null,"x-incs-start","x-incs-start",-884262934),i,new cljs.core.Keyword(null,"x-incs-duration","x-incs-duration",1496693748),200.0);
} else {
}

dongles.mesh.prepare.call(null,i,cljs.core.deref.call(null,dongles.core.state));

renderer.render(scene,camera);

var temp__5720__auto__ = new cljs.core.Keyword(null,"stats","stats",-85643011).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dongles.core.state));
if(cljs.core.truth_(temp__5720__auto__)){
var stats = temp__5720__auto__;
return stats.update();
} else {
return null;
}
});})(scene,camera,renderer,lights,running))
;
animate.call(null,(0));

return cljs.core.swap_BANG_.call(null,dongles.core.state,((function (scene,camera,renderer,lights,running){
return (function (p1__54974_SHARP_){
return cljs.core.assoc.call(null,p1__54974_SHARP_,new cljs.core.Keyword(null,"renderer","renderer",336841071),renderer,new cljs.core.Keyword(null,"stopper","stopper",-304934685),((function (scene,camera,renderer,lights,running){
return (function (){
return cljs.core.reset_BANG_.call(null,running,false);
});})(scene,camera,renderer,lights,running))
);
});})(scene,camera,renderer,lights,running))
);
}
});
dongles.core.teardown_app = (function dongles$core$teardown_app(){
var temp__5720__auto___54975 = new cljs.core.Keyword(null,"stopper","stopper",-304934685).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dongles.core.state));
if(cljs.core.truth_(temp__5720__auto___54975)){
var stopper_54976 = temp__5720__auto___54975;
stopper_54976.call(null);
} else {
}

var temp__5720__auto___54977 = new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dongles.core.state));
if(cljs.core.truth_(temp__5720__auto___54977)){
var renderer_54978 = temp__5720__auto___54977;
document.body.removeChild(renderer_54978.domElement);
} else {
}

return cljs.core.swap_BANG_.call(null,dongles.core.state,cljs.core.dissoc,new cljs.core.Keyword(null,"stopper","stopper",-304934685),new cljs.core.Keyword(null,"renderer","renderer",336841071));
});
dongles.core.teardown_app.call(null);
dongles.core.teardown_stats.call(null);
dongles.core.init.call(null);
dongles.core.init_stats.call(null);
dongles.core.on_js_reload = (function dongles$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1563044229472
