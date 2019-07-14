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

var seq__90615_90619 = cljs.core.seq.call(null,lights);
var chunk__90616_90620 = null;
var count__90617_90621 = (0);
var i__90618_90622 = (0);
while(true){
if((i__90618_90622 < count__90617_90621)){
var light_90623 = cljs.core._nth.call(null,chunk__90616_90620,i__90618_90622);
scene.add(light_90623);


var G__90624 = seq__90615_90619;
var G__90625 = chunk__90616_90620;
var G__90626 = count__90617_90621;
var G__90627 = (i__90618_90622 + (1));
seq__90615_90619 = G__90624;
chunk__90616_90620 = G__90625;
count__90617_90621 = G__90626;
i__90618_90622 = G__90627;
continue;
} else {
var temp__5720__auto___90628 = cljs.core.seq.call(null,seq__90615_90619);
if(temp__5720__auto___90628){
var seq__90615_90629__$1 = temp__5720__auto___90628;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__90615_90629__$1)){
var c__4550__auto___90630 = cljs.core.chunk_first.call(null,seq__90615_90629__$1);
var G__90631 = cljs.core.chunk_rest.call(null,seq__90615_90629__$1);
var G__90632 = c__4550__auto___90630;
var G__90633 = cljs.core.count.call(null,c__4550__auto___90630);
var G__90634 = (0);
seq__90615_90619 = G__90631;
chunk__90616_90620 = G__90632;
count__90617_90621 = G__90633;
i__90618_90622 = G__90634;
continue;
} else {
var light_90635 = cljs.core.first.call(null,seq__90615_90629__$1);
scene.add(light_90635);


var G__90636 = cljs.core.next.call(null,seq__90615_90629__$1);
var G__90637 = null;
var G__90638 = (0);
var G__90639 = (0);
seq__90615_90619 = G__90636;
chunk__90616_90620 = G__90637;
count__90617_90621 = G__90638;
i__90618_90622 = G__90639;
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
return (function (p1__90640_SHARP_){
return cljs.core.assoc.call(null,p1__90640_SHARP_,new cljs.core.Keyword(null,"renderer","renderer",336841071),renderer,new cljs.core.Keyword(null,"stopper","stopper",-304934685),((function (scene,camera,renderer,lights,running){
return (function (){
return cljs.core.reset_BANG_.call(null,running,false);
});})(scene,camera,renderer,lights,running))
);
});})(scene,camera,renderer,lights,running))
);
}
});
dongles.core.teardown_app = (function dongles$core$teardown_app(){
var temp__5720__auto___90641 = new cljs.core.Keyword(null,"stopper","stopper",-304934685).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dongles.core.state));
if(cljs.core.truth_(temp__5720__auto___90641)){
var stopper_90642 = temp__5720__auto___90641;
stopper_90642.call(null);
} else {
}

var temp__5720__auto___90643 = new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dongles.core.state));
if(cljs.core.truth_(temp__5720__auto___90643)){
var renderer_90644 = temp__5720__auto___90643;
document.body.removeChild(renderer_90644.domElement);
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

//# sourceMappingURL=core.js.map?rel=1563102560211
