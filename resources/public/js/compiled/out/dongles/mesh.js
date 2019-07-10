// Compiled by ClojureScript 1.10.520 {}
goog.provide('dongles.mesh');
goog.require('cljs.core');
dongles.mesh.debug = (function dongles$mesh$debug(msg){
return document.getElementById("debug").innerHTML = msg;
});
dongles.mesh.n = (5);
dongles.mesh.faces = ((6) * dongles.mesh.n);
dongles.mesh.m = ((dongles.mesh.faces * (6)) * (3));
dongles.mesh.geometry = (new THREE.BufferGeometry());
dongles.mesh.vertices = (new Float32Array(dongles.mesh.m));
dongles.mesh.normals = (new Float32Array(dongles.mesh.m));
dongles.mesh.colors = (new Float32Array(dongles.mesh.m));
dongles.mesh.position_attribute = (new THREE.BufferAttribute(dongles.mesh.vertices,(3)));
dongles.mesh.position_attribute.dynamic = true;
dongles.mesh.normal_attribute = (new THREE.BufferAttribute(dongles.mesh.normals,(3)));
dongles.mesh.normal_attribute.dynamic = true;
dongles.mesh.color_attribute = (new THREE.BufferAttribute(dongles.mesh.colors,(3)));
dongles.mesh.color_attribute.dynamic = true;
dongles.mesh.geometry.addAttribute("position",dongles.mesh.position_attribute);
dongles.mesh.geometry.addAttribute("normal",dongles.mesh.normal_attribute);
dongles.mesh.geometry.addAttribute("color",dongles.mesh.color_attribute);
dongles.mesh.mesh = (new THREE.Mesh(dongles.mesh.geometry,(new THREE.MeshPhongMaterial(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"color","color",1011675173),(16777215),new cljs.core.Keyword(null,"specular","specular",1475677228),(16777215),new cljs.core.Keyword(null,"shininess","shininess",-509323286),(350),new cljs.core.Keyword(null,"side","side",389652279),THREE.DoubleSide,new cljs.core.Keyword(null,"vertexColors","vertexColors",-1991725867),THREE.VertexColors], null))))));
dongles.mesh.mesh.rotation.y = -0.9;
dongles.mesh.set3 = (function dongles$mesh$set3(out,start,in$){
var n__4607__auto__ = (3);
var i = (0);
while(true){
if((i < n__4607__auto__)){
(out[(start + i)] = cljs.core.nth.call(null,in$,i));

var G__39327 = (i + (1));
i = G__39327;
continue;
} else {
return null;
}
break;
}
});
dongles.mesh.v3 = (function dongles$mesh$v3(p__39328){
var vec__39329 = p__39328;
var x = cljs.core.nth.call(null,vec__39329,(0),null);
var y = cljs.core.nth.call(null,vec__39329,(1),null);
var z = cljs.core.nth.call(null,vec__39329,(2),null);
return (new THREE.Vector3(x,y,z));
});
dongles.mesh.prepare = (function dongles$mesh$prepare(var_args){
var args__4736__auto__ = [];
var len__4730__auto___39386 = arguments.length;
var i__4731__auto___39387 = (0);
while(true){
if((i__4731__auto___39387 < len__4730__auto___39386)){
args__4736__auto__.push((arguments[i__4731__auto___39387]));

var G__39388 = (i__4731__auto___39387 + (1));
i__4731__auto___39387 = G__39388;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return dongles.mesh.prepare.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

dongles.mesh.prepare.cljs$core$IFn$_invoke$arity$variadic = (function (t,p__39334){
var vec__39335 = p__39334;
var state = cljs.core.nth.call(null,vec__39335,(0),null);
var add_face_39389 = ((function (vec__39335,state){
return (function (i,vs4x3,cs2x3){
var seq__39338_39391 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null,(0),(6)),cljs.core.concat.call(null,cljs.core.take.call(null,(3),vs4x3),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,vs4x3,(1)),cljs.core.nth.call(null,vs4x3,(3)),cljs.core.nth.call(null,vs4x3,(2))], null))));
var chunk__39339_39392 = null;
var count__39340_39393 = (0);
var i__39341_39394 = (0);
while(true){
if((i__39341_39394 < count__39340_39393)){
var vec__39348_39395 = cljs.core._nth.call(null,chunk__39339_39392,i__39341_39394);
var j_39396 = cljs.core.nth.call(null,vec__39348_39395,(0),null);
var v_39397 = cljs.core.nth.call(null,vec__39348_39395,(1),null);
dongles.mesh.set3.call(null,dongles.mesh.vertices,(i + (j_39396 * (3))),v_39397);


var G__39398 = seq__39338_39391;
var G__39399 = chunk__39339_39392;
var G__39400 = count__39340_39393;
var G__39401 = (i__39341_39394 + (1));
seq__39338_39391 = G__39398;
chunk__39339_39392 = G__39399;
count__39340_39393 = G__39400;
i__39341_39394 = G__39401;
continue;
} else {
var temp__5720__auto___39402 = cljs.core.seq.call(null,seq__39338_39391);
if(temp__5720__auto___39402){
var seq__39338_39403__$1 = temp__5720__auto___39402;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39338_39403__$1)){
var c__4550__auto___39404 = cljs.core.chunk_first.call(null,seq__39338_39403__$1);
var G__39405 = cljs.core.chunk_rest.call(null,seq__39338_39403__$1);
var G__39406 = c__4550__auto___39404;
var G__39407 = cljs.core.count.call(null,c__4550__auto___39404);
var G__39408 = (0);
seq__39338_39391 = G__39405;
chunk__39339_39392 = G__39406;
count__39340_39393 = G__39407;
i__39341_39394 = G__39408;
continue;
} else {
var vec__39351_39409 = cljs.core.first.call(null,seq__39338_39403__$1);
var j_39410 = cljs.core.nth.call(null,vec__39351_39409,(0),null);
var v_39411 = cljs.core.nth.call(null,vec__39351_39409,(1),null);
dongles.mesh.set3.call(null,dongles.mesh.vertices,(i + (j_39410 * (3))),v_39411);


var G__39412 = cljs.core.next.call(null,seq__39338_39403__$1);
var G__39413 = null;
var G__39414 = (0);
var G__39415 = (0);
seq__39338_39391 = G__39412;
chunk__39339_39392 = G__39413;
count__39340_39393 = G__39414;
i__39341_39394 = G__39415;
continue;
}
} else {
}
}
break;
}

var seq__39354_39416 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null,(0),(6)),cljs.core.concat.call(null,cljs.core.repeat.call(null,(3),(function (){var v = (new THREE.Vector3((0),(0),(0)));
var a = dongles.mesh.v3.call(null,cljs.core.nth.call(null,vs4x3,(1))).add(dongles.mesh.v3.call(null,cljs.core.nth.call(null,vs4x3,(0))).negate());
var b = dongles.mesh.v3.call(null,cljs.core.nth.call(null,vs4x3,(2))).add(dongles.mesh.v3.call(null,cljs.core.nth.call(null,vs4x3,(0))).negate());
v.crossVectors(a,b);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v.x,v.y,v.z], null);
})()),cljs.core.repeat.call(null,(3),(function (){var v = (new THREE.Vector3((0),(0),(0)));
var a = dongles.mesh.v3.call(null,cljs.core.nth.call(null,vs4x3,(3))).add(dongles.mesh.v3.call(null,cljs.core.nth.call(null,vs4x3,(1))).negate());
var b = dongles.mesh.v3.call(null,cljs.core.nth.call(null,vs4x3,(2))).add(dongles.mesh.v3.call(null,cljs.core.nth.call(null,vs4x3,(1))).negate());
v.crossVectors(a,b);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v.x,v.y,v.z], null);
})()))));
var chunk__39355_39417 = null;
var count__39356_39418 = (0);
var i__39357_39419 = (0);
while(true){
if((i__39357_39419 < count__39356_39418)){
var vec__39364_39420 = cljs.core._nth.call(null,chunk__39355_39417,i__39357_39419);
var j_39421 = cljs.core.nth.call(null,vec__39364_39420,(0),null);
var v_39422 = cljs.core.nth.call(null,vec__39364_39420,(1),null);
dongles.mesh.set3.call(null,dongles.mesh.normals,(i + (j_39421 * (3))),v_39422);


var G__39423 = seq__39354_39416;
var G__39424 = chunk__39355_39417;
var G__39425 = count__39356_39418;
var G__39426 = (i__39357_39419 + (1));
seq__39354_39416 = G__39423;
chunk__39355_39417 = G__39424;
count__39356_39418 = G__39425;
i__39357_39419 = G__39426;
continue;
} else {
var temp__5720__auto___39427 = cljs.core.seq.call(null,seq__39354_39416);
if(temp__5720__auto___39427){
var seq__39354_39428__$1 = temp__5720__auto___39427;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39354_39428__$1)){
var c__4550__auto___39429 = cljs.core.chunk_first.call(null,seq__39354_39428__$1);
var G__39430 = cljs.core.chunk_rest.call(null,seq__39354_39428__$1);
var G__39431 = c__4550__auto___39429;
var G__39432 = cljs.core.count.call(null,c__4550__auto___39429);
var G__39433 = (0);
seq__39354_39416 = G__39430;
chunk__39355_39417 = G__39431;
count__39356_39418 = G__39432;
i__39357_39419 = G__39433;
continue;
} else {
var vec__39367_39434 = cljs.core.first.call(null,seq__39354_39428__$1);
var j_39435 = cljs.core.nth.call(null,vec__39367_39434,(0),null);
var v_39436 = cljs.core.nth.call(null,vec__39367_39434,(1),null);
dongles.mesh.set3.call(null,dongles.mesh.normals,(i + (j_39435 * (3))),v_39436);


var G__39437 = cljs.core.next.call(null,seq__39354_39428__$1);
var G__39438 = null;
var G__39439 = (0);
var G__39440 = (0);
seq__39354_39416 = G__39437;
chunk__39355_39417 = G__39438;
count__39356_39418 = G__39439;
i__39357_39419 = G__39440;
continue;
}
} else {
}
}
break;
}

var seq__39370_39441 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3),(9)], null));
var chunk__39371_39442 = null;
var count__39372_39443 = (0);
var i__39373_39444 = (0);
while(true){
if((i__39373_39444 < count__39372_39443)){
var j_39445 = cljs.core._nth.call(null,chunk__39371_39442,i__39373_39444);
dongles.mesh.set3.call(null,dongles.mesh.colors,(i + j_39445),cljs.core.first.call(null,cs2x3));


var G__39446 = seq__39370_39441;
var G__39447 = chunk__39371_39442;
var G__39448 = count__39372_39443;
var G__39449 = (i__39373_39444 + (1));
seq__39370_39441 = G__39446;
chunk__39371_39442 = G__39447;
count__39372_39443 = G__39448;
i__39373_39444 = G__39449;
continue;
} else {
var temp__5720__auto___39450 = cljs.core.seq.call(null,seq__39370_39441);
if(temp__5720__auto___39450){
var seq__39370_39451__$1 = temp__5720__auto___39450;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39370_39451__$1)){
var c__4550__auto___39452 = cljs.core.chunk_first.call(null,seq__39370_39451__$1);
var G__39453 = cljs.core.chunk_rest.call(null,seq__39370_39451__$1);
var G__39454 = c__4550__auto___39452;
var G__39455 = cljs.core.count.call(null,c__4550__auto___39452);
var G__39456 = (0);
seq__39370_39441 = G__39453;
chunk__39371_39442 = G__39454;
count__39372_39443 = G__39455;
i__39373_39444 = G__39456;
continue;
} else {
var j_39457 = cljs.core.first.call(null,seq__39370_39451__$1);
dongles.mesh.set3.call(null,dongles.mesh.colors,(i + j_39457),cljs.core.first.call(null,cs2x3));


var G__39458 = cljs.core.next.call(null,seq__39370_39451__$1);
var G__39459 = null;
var G__39460 = (0);
var G__39461 = (0);
seq__39370_39441 = G__39458;
chunk__39371_39442 = G__39459;
count__39372_39443 = G__39460;
i__39373_39444 = G__39461;
continue;
}
} else {
}
}
break;
}

var seq__39374 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(12),(15)], null));
var chunk__39375 = null;
var count__39376 = (0);
var i__39377 = (0);
while(true){
if((i__39377 < count__39376)){
var j = cljs.core._nth.call(null,chunk__39375,i__39377);
dongles.mesh.set3.call(null,dongles.mesh.colors,(i + j),cljs.core.last.call(null,cs2x3));


var G__39462 = seq__39374;
var G__39463 = chunk__39375;
var G__39464 = count__39376;
var G__39465 = (i__39377 + (1));
seq__39374 = G__39462;
chunk__39375 = G__39463;
count__39376 = G__39464;
i__39377 = G__39465;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__39374);
if(temp__5720__auto__){
var seq__39374__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39374__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__39374__$1);
var G__39466 = cljs.core.chunk_rest.call(null,seq__39374__$1);
var G__39467 = c__4550__auto__;
var G__39468 = cljs.core.count.call(null,c__4550__auto__);
var G__39469 = (0);
seq__39374 = G__39466;
chunk__39375 = G__39467;
count__39376 = G__39468;
i__39377 = G__39469;
continue;
} else {
var j = cljs.core.first.call(null,seq__39374__$1);
dongles.mesh.set3.call(null,dongles.mesh.colors,(i + j),cljs.core.last.call(null,cs2x3));


var G__39470 = cljs.core.next.call(null,seq__39374__$1);
var G__39471 = null;
var G__39472 = (0);
var G__39473 = (0);
seq__39374 = G__39470;
chunk__39375 = G__39471;
count__39376 = G__39472;
i__39377 = G__39473;
continue;
}
} else {
return null;
}
}
break;
}
});})(vec__39335,state))
;
var add_cubey_39390 = ((function (add_face_39389,vec__39335,state){
return (function (i,p__39378,cs2x3){
var vec__39379 = p__39378;
var vs_bottom4x3 = cljs.core.nth.call(null,vec__39379,(0),null);
var vs_top4x3 = cljs.core.nth.call(null,vec__39379,(1),null);
var n__4607__auto___39474 = (4);
var j_39475 = (0);
while(true){
if((j_39475 < n__4607__auto___39474)){
add_face_39389.call(null,(i + ((j_39475 * (6)) * (3))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,vs_bottom4x3,j_39475),cljs.core.nth.call(null,vs_bottom4x3,cljs.core.mod.call(null,(j_39475 + (1)),(4))),cljs.core.nth.call(null,vs_top4x3,j_39475),cljs.core.nth.call(null,vs_top4x3,cljs.core.mod.call(null,(j_39475 + (1)),(4)))], null),cs2x3);

var G__39476 = (j_39475 + (1));
j_39475 = G__39476;
continue;
} else {
}
break;
}

add_face_39389.call(null,(i + (((4) * (6)) * (3))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,vs_bottom4x3,(2)),cljs.core.nth.call(null,vs_bottom4x3,(3)),cljs.core.nth.call(null,vs_bottom4x3,(1)),cljs.core.nth.call(null,vs_bottom4x3,(0))], null),cs2x3);

return add_face_39389.call(null,(i + (((5) * (6)) * (3))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,vs_top4x3,(2)),cljs.core.nth.call(null,vs_top4x3,(3)),cljs.core.nth.call(null,vs_top4x3,(1)),cljs.core.nth.call(null,vs_top4x3,(0))], null),cs2x3);
});})(add_face_39389,vec__39335,state))
;
var n__4607__auto___39477 = dongles.mesh.n;
var i_39478 = (0);
while(true){
if((i_39478 < n__4607__auto___39477)){
var a_39479 = (i_39478 * 6.3);
var pos_39480 = ((function (i_39478,a_39479,n__4607__auto___39477,add_face_39389,add_cubey_39390,vec__39335,state){
return (function (j,p__39382){
var vec__39383 = p__39382;
var x = cljs.core.nth.call(null,vec__39383,(0),null);
var y = cljs.core.nth.call(null,vec__39383,(1),null);
var z = cljs.core.nth.call(null,vec__39383,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (THREE.Math.clamp(((t - new cljs.core.Keyword(null,"x-incs-start","x-incs-start",-884262934).cljs$core$IFn$_invoke$arity$1(state)) / new cljs.core.Keyword(null,"x-incs-duration","x-incs-duration",1496693748).cljs$core$IFn$_invoke$arity$1(state)),(0),(1)) * cljs.core.nth.call(null,new cljs.core.Keyword(null,"x-incs","x-incs",1657352393).cljs$core$IFn$_invoke$arity$1(state),((i_39478 * (8)) + j)))),(y + a_39479),(z * (2))], null);
});})(i_39478,a_39479,n__4607__auto___39477,add_face_39389,add_cubey_39390,vec__39335,state))
;
add_cubey_39390.call(null,(((i_39478 * (6)) * (6)) * (3)),cljs.core.partition.call(null,(4),cljs.core.map_indexed.call(null,pos_39480,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-3),(-3),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(-3),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(-3),(-3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-3),(-3),(-3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-3),(3),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3),(-3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-3),(3),(-3)], null)], null))),(function (){var tfn = ((function (i_39478,a_39479,pos_39480,n__4607__auto___39477,add_face_39389,add_cubey_39390,vec__39335,state){
return (function (shift){
return ((function (i_39478,a_39479,pos_39480,n__4607__auto___39477,add_face_39389,add_cubey_39390,vec__39335,state){
return (function (from,to){
return (from + (((i_39478 + shift) / dongles.mesh.n) * (to - from)));
});
;})(i_39478,a_39479,pos_39480,n__4607__auto___39477,add_face_39389,add_cubey_39390,vec__39335,state))
});})(i_39478,a_39479,pos_39480,n__4607__auto___39477,add_face_39389,add_cubey_39390,vec__39335,state))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.call(null,tfn.call(null,(0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.5,0.5], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,0.3,0.6], null)),cljs.core.mapv.call(null,tfn.call(null,(1)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.5,0.5], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,0.3,0.6], null))], null);
})());

var G__39481 = (i_39478 + (1));
i_39478 = G__39481;
continue;
} else {
}
break;
}

dongles.mesh.position_attribute.needsUpdate = true;

dongles.mesh.normal_attribute.needsUpdate = true;

dongles.mesh.color_attribute.needsUpdate = true;

dongles.mesh.geometry.computeBoundingSphere();

return dongles.mesh.mesh;
});

dongles.mesh.prepare.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
dongles.mesh.prepare.cljs$lang$applyTo = (function (seq39332){
var G__39333 = cljs.core.first.call(null,seq39332);
var seq39332__$1 = cljs.core.next.call(null,seq39332);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39333,seq39332__$1);
});


//# sourceMappingURL=mesh.js.map?rel=1562795878000
