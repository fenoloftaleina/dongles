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

stats.domElement.style.top = "0px";

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
cljs.core.nth.call(null,lights,(1)).position.set((1),(10),(1));

cljs.core.nth.call(null,lights,(2)).position.set((-5),(3),(8));

var seq__41646_41650 = cljs.core.seq.call(null,lights);
var chunk__41647_41651 = null;
var count__41648_41652 = (0);
var i__41649_41653 = (0);
while(true){
if((i__41649_41653 < count__41648_41652)){
var light_41654 = cljs.core._nth.call(null,chunk__41647_41651,i__41649_41653);
scene.add(light_41654);


var G__41655 = seq__41646_41650;
var G__41656 = chunk__41647_41651;
var G__41657 = count__41648_41652;
var G__41658 = (i__41649_41653 + (1));
seq__41646_41650 = G__41655;
chunk__41647_41651 = G__41656;
count__41648_41652 = G__41657;
i__41649_41653 = G__41658;
continue;
} else {
var temp__5720__auto___41659 = cljs.core.seq.call(null,seq__41646_41650);
if(temp__5720__auto___41659){
var seq__41646_41660__$1 = temp__5720__auto___41659;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41646_41660__$1)){
var c__4550__auto___41661 = cljs.core.chunk_first.call(null,seq__41646_41660__$1);
var G__41662 = cljs.core.chunk_rest.call(null,seq__41646_41660__$1);
var G__41663 = c__4550__auto___41661;
var G__41664 = cljs.core.count.call(null,c__4550__auto___41661);
var G__41665 = (0);
seq__41646_41650 = G__41662;
chunk__41647_41651 = G__41663;
count__41648_41652 = G__41664;
i__41649_41653 = G__41665;
continue;
} else {
var light_41666 = cljs.core.first.call(null,seq__41646_41660__$1);
scene.add(light_41666);


var G__41667 = cljs.core.next.call(null,seq__41646_41660__$1);
var G__41668 = null;
var G__41669 = (0);
var G__41670 = (0);
seq__41646_41650 = G__41667;
chunk__41647_41651 = G__41668;
count__41648_41652 = G__41669;
i__41649_41653 = G__41670;
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
scene.add(dongles.mesh.prepare.call(null));

var animate = ((function (scene,camera,renderer,lights,running){
return (function dongles$core$init_$_animate(i){
if(cljs.core.truth_(cljs.core.deref.call(null,running))){
requestAnimationFrame(dongles$core$init_$_animate,((1) + i));
} else {
}

if((cljs.core.mod.call(null,(i * (1000)),5.0) < 1.0)){
dongles.mesh.prepare.call(null);
} else {
}

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
return (function (p1__41671_SHARP_){
return cljs.core.assoc.call(null,p1__41671_SHARP_,new cljs.core.Keyword(null,"renderer","renderer",336841071),renderer,new cljs.core.Keyword(null,"stopper","stopper",-304934685),((function (scene,camera,renderer,lights,running){
return (function (){
return cljs.core.reset_BANG_.call(null,running,false);
});})(scene,camera,renderer,lights,running))
);
});})(scene,camera,renderer,lights,running))
);
}
});
dongles.core.teardown_app = (function dongles$core$teardown_app(){
var temp__5720__auto___41672 = new cljs.core.Keyword(null,"stopper","stopper",-304934685).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dongles.core.state));
if(cljs.core.truth_(temp__5720__auto___41672)){
var stopper_41673 = temp__5720__auto___41672;
stopper_41673.call(null);
} else {
}

var temp__5720__auto___41674 = new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dongles.core.state));
if(cljs.core.truth_(temp__5720__auto___41674)){
var renderer_41675 = temp__5720__auto___41674;
document.body.removeChild(renderer_41675.domElement);
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

//# sourceMappingURL=core.js.map?rel=1562612688469
