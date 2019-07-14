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

var seq__106756_106760 = cljs.core.seq.call(null,lights);
var chunk__106757_106761 = null;
var count__106758_106762 = (0);
var i__106759_106763 = (0);
while(true){
if((i__106759_106763 < count__106758_106762)){
var light_106764 = cljs.core._nth.call(null,chunk__106757_106761,i__106759_106763);
scene.add(light_106764);


var G__106765 = seq__106756_106760;
var G__106766 = chunk__106757_106761;
var G__106767 = count__106758_106762;
var G__106768 = (i__106759_106763 + (1));
seq__106756_106760 = G__106765;
chunk__106757_106761 = G__106766;
count__106758_106762 = G__106767;
i__106759_106763 = G__106768;
continue;
} else {
var temp__5720__auto___106769 = cljs.core.seq.call(null,seq__106756_106760);
if(temp__5720__auto___106769){
var seq__106756_106770__$1 = temp__5720__auto___106769;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__106756_106770__$1)){
var c__4550__auto___106771 = cljs.core.chunk_first.call(null,seq__106756_106770__$1);
var G__106772 = cljs.core.chunk_rest.call(null,seq__106756_106770__$1);
var G__106773 = c__4550__auto___106771;
var G__106774 = cljs.core.count.call(null,c__4550__auto___106771);
var G__106775 = (0);
seq__106756_106760 = G__106772;
chunk__106757_106761 = G__106773;
count__106758_106762 = G__106774;
i__106759_106763 = G__106775;
continue;
} else {
var light_106776 = cljs.core.first.call(null,seq__106756_106770__$1);
scene.add(light_106776);


var G__106777 = cljs.core.next.call(null,seq__106756_106770__$1);
var G__106778 = null;
var G__106779 = (0);
var G__106780 = (0);
seq__106756_106760 = G__106777;
chunk__106757_106761 = G__106778;
count__106758_106762 = G__106779;
i__106759_106763 = G__106780;
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

var n__4607__auto___106782 = (10);
var j_106783 = (0);
while(true){
if((j_106783 < n__4607__auto___106782)){
(dongles.mesh.vertices[cljs.core.rand_int.call(null,dongles.mesh.m)] = cljs.core.rand_int.call(null,(dongles.mesh.hh * dongles.mesh.n)));

var G__106784 = (j_106783 + (1));
j_106783 = G__106784;
continue;
} else {
}
break;
}

dongles.mesh.position_attribute.needsUpdate = true;

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
return (function (p1__106781_SHARP_){
return cljs.core.assoc.call(null,p1__106781_SHARP_,new cljs.core.Keyword(null,"renderer","renderer",336841071),renderer,new cljs.core.Keyword(null,"stopper","stopper",-304934685),((function (scene,camera,renderer,lights,running){
return (function (){
return cljs.core.reset_BANG_.call(null,running,false);
});})(scene,camera,renderer,lights,running))
);
});})(scene,camera,renderer,lights,running))
);
}
});
dongles.core.teardown_app = (function dongles$core$teardown_app(){
var temp__5720__auto___106785 = new cljs.core.Keyword(null,"stopper","stopper",-304934685).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dongles.core.state));
if(cljs.core.truth_(temp__5720__auto___106785)){
var stopper_106786 = temp__5720__auto___106785;
stopper_106786.call(null);
} else {
}

var temp__5720__auto___106787 = new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dongles.core.state));
if(cljs.core.truth_(temp__5720__auto___106787)){
var renderer_106788 = temp__5720__auto___106787;
document.body.removeChild(renderer_106788.domElement);
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

//# sourceMappingURL=core.js.map?rel=1563107678019
