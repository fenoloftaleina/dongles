// Compiled by ClojureScript 1.10.520 {}
goog.provide('dongles.mesh');
goog.require('cljs.core');
dongles.mesh.n = (5);
dongles.mesh.faces = ((4) * dongles.mesh.n);
dongles.mesh.m = ((dongles.mesh.faces * (6)) * (3));
dongles.mesh.geometry = (new THREE.BufferGeometry());
dongles.mesh.vertices = (new Float32Array(dongles.mesh.m));
dongles.mesh.colors = (new Float32Array(dongles.mesh.m));
dongles.mesh.position_attribute = (new THREE.BufferAttribute(dongles.mesh.vertices,(3)));
dongles.mesh.position_attribute.dynamic = true;
dongles.mesh.color_attribute = (new THREE.BufferAttribute(dongles.mesh.colors,(3)));
dongles.mesh.color_attribute.dynamic = true;
dongles.mesh.geometry.addAttribute("position",dongles.mesh.position_attribute);
dongles.mesh.geometry.addAttribute("color",dongles.mesh.color_attribute);
dongles.mesh.mesh = (new THREE.Mesh(dongles.mesh.geometry,(new THREE.MeshPhongMaterial(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"color","color",1011675173),(16777215),new cljs.core.Keyword(null,"specular","specular",1475677228),(16777215),new cljs.core.Keyword(null,"shininess","shininess",-509323286),(350),new cljs.core.Keyword(null,"side","side",389652279),THREE.DoubleSide,new cljs.core.Keyword(null,"vertexColors","vertexColors",-1991725867),THREE.VertexColors], null))))));
dongles.mesh.mesh.rotation.y = -0.9;
dongles.mesh.set3 = (function dongles$mesh$set3(out,start,in$){
var n__4607__auto__ = (3);
var i = (0);
while(true){
if((i < n__4607__auto__)){
(out[(start + i)] = cljs.core.nth.call(null,in$,i));

var G__36430 = (i + (1));
i = G__36430;
continue;
} else {
return null;
}
break;
}
});
dongles.mesh.prepare = (function dongles$mesh$prepare(){
var add_face_36459 = (function (i,vs4x3,cs2x3){
var seq__36431_36461 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null,(0),(6)),cljs.core.concat.call(null,cljs.core.take.call(null,(3),vs4x3),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,vs4x3,(1)),cljs.core.nth.call(null,vs4x3,(3)),cljs.core.nth.call(null,vs4x3,(2))], null))));
var chunk__36432_36462 = null;
var count__36433_36463 = (0);
var i__36434_36464 = (0);
while(true){
if((i__36434_36464 < count__36433_36463)){
var vec__36441_36465 = cljs.core._nth.call(null,chunk__36432_36462,i__36434_36464);
var j_36466 = cljs.core.nth.call(null,vec__36441_36465,(0),null);
var v_36467 = cljs.core.nth.call(null,vec__36441_36465,(1),null);
dongles.mesh.set3.call(null,dongles.mesh.vertices,(i + (j_36466 * (3))),v_36467);


var G__36468 = seq__36431_36461;
var G__36469 = chunk__36432_36462;
var G__36470 = count__36433_36463;
var G__36471 = (i__36434_36464 + (1));
seq__36431_36461 = G__36468;
chunk__36432_36462 = G__36469;
count__36433_36463 = G__36470;
i__36434_36464 = G__36471;
continue;
} else {
var temp__5720__auto___36472 = cljs.core.seq.call(null,seq__36431_36461);
if(temp__5720__auto___36472){
var seq__36431_36473__$1 = temp__5720__auto___36472;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36431_36473__$1)){
var c__4550__auto___36474 = cljs.core.chunk_first.call(null,seq__36431_36473__$1);
var G__36475 = cljs.core.chunk_rest.call(null,seq__36431_36473__$1);
var G__36476 = c__4550__auto___36474;
var G__36477 = cljs.core.count.call(null,c__4550__auto___36474);
var G__36478 = (0);
seq__36431_36461 = G__36475;
chunk__36432_36462 = G__36476;
count__36433_36463 = G__36477;
i__36434_36464 = G__36478;
continue;
} else {
var vec__36444_36479 = cljs.core.first.call(null,seq__36431_36473__$1);
var j_36480 = cljs.core.nth.call(null,vec__36444_36479,(0),null);
var v_36481 = cljs.core.nth.call(null,vec__36444_36479,(1),null);
dongles.mesh.set3.call(null,dongles.mesh.vertices,(i + (j_36480 * (3))),v_36481);


var G__36482 = cljs.core.next.call(null,seq__36431_36473__$1);
var G__36483 = null;
var G__36484 = (0);
var G__36485 = (0);
seq__36431_36461 = G__36482;
chunk__36432_36462 = G__36483;
count__36433_36463 = G__36484;
i__36434_36464 = G__36485;
continue;
}
} else {
}
}
break;
}

var seq__36447_36486 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3),(9)], null));
var chunk__36448_36487 = null;
var count__36449_36488 = (0);
var i__36450_36489 = (0);
while(true){
if((i__36450_36489 < count__36449_36488)){
var j_36490 = cljs.core._nth.call(null,chunk__36448_36487,i__36450_36489);
dongles.mesh.set3.call(null,dongles.mesh.colors,(i + j_36490),cljs.core.first.call(null,cs2x3));


var G__36491 = seq__36447_36486;
var G__36492 = chunk__36448_36487;
var G__36493 = count__36449_36488;
var G__36494 = (i__36450_36489 + (1));
seq__36447_36486 = G__36491;
chunk__36448_36487 = G__36492;
count__36449_36488 = G__36493;
i__36450_36489 = G__36494;
continue;
} else {
var temp__5720__auto___36495 = cljs.core.seq.call(null,seq__36447_36486);
if(temp__5720__auto___36495){
var seq__36447_36496__$1 = temp__5720__auto___36495;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36447_36496__$1)){
var c__4550__auto___36497 = cljs.core.chunk_first.call(null,seq__36447_36496__$1);
var G__36498 = cljs.core.chunk_rest.call(null,seq__36447_36496__$1);
var G__36499 = c__4550__auto___36497;
var G__36500 = cljs.core.count.call(null,c__4550__auto___36497);
var G__36501 = (0);
seq__36447_36486 = G__36498;
chunk__36448_36487 = G__36499;
count__36449_36488 = G__36500;
i__36450_36489 = G__36501;
continue;
} else {
var j_36502 = cljs.core.first.call(null,seq__36447_36496__$1);
dongles.mesh.set3.call(null,dongles.mesh.colors,(i + j_36502),cljs.core.first.call(null,cs2x3));


var G__36503 = cljs.core.next.call(null,seq__36447_36496__$1);
var G__36504 = null;
var G__36505 = (0);
var G__36506 = (0);
seq__36447_36486 = G__36503;
chunk__36448_36487 = G__36504;
count__36449_36488 = G__36505;
i__36450_36489 = G__36506;
continue;
}
} else {
}
}
break;
}

var seq__36451 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(12),(15)], null));
var chunk__36452 = null;
var count__36453 = (0);
var i__36454 = (0);
while(true){
if((i__36454 < count__36453)){
var j = cljs.core._nth.call(null,chunk__36452,i__36454);
dongles.mesh.set3.call(null,dongles.mesh.colors,(i + j),cljs.core.last.call(null,cs2x3));


var G__36507 = seq__36451;
var G__36508 = chunk__36452;
var G__36509 = count__36453;
var G__36510 = (i__36454 + (1));
seq__36451 = G__36507;
chunk__36452 = G__36508;
count__36453 = G__36509;
i__36454 = G__36510;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__36451);
if(temp__5720__auto__){
var seq__36451__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36451__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__36451__$1);
var G__36511 = cljs.core.chunk_rest.call(null,seq__36451__$1);
var G__36512 = c__4550__auto__;
var G__36513 = cljs.core.count.call(null,c__4550__auto__);
var G__36514 = (0);
seq__36451 = G__36511;
chunk__36452 = G__36512;
count__36453 = G__36513;
i__36454 = G__36514;
continue;
} else {
var j = cljs.core.first.call(null,seq__36451__$1);
dongles.mesh.set3.call(null,dongles.mesh.colors,(i + j),cljs.core.last.call(null,cs2x3));


var G__36515 = cljs.core.next.call(null,seq__36451__$1);
var G__36516 = null;
var G__36517 = (0);
var G__36518 = (0);
seq__36451 = G__36515;
chunk__36452 = G__36516;
count__36453 = G__36517;
i__36454 = G__36518;
continue;
}
} else {
return null;
}
}
break;
}
});
var add_cubey_36460 = ((function (add_face_36459){
return (function (i,vs_bottom4x3,vs_top4x3,cs2x3){
var n__4607__auto__ = (4);
var j = (0);
while(true){
if((j < n__4607__auto__)){
add_face_36459.call(null,(i + ((j * (6)) * (3))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,vs_bottom4x3,j),cljs.core.nth.call(null,vs_bottom4x3,cljs.core.mod.call(null,(j + (1)),(4))),cljs.core.nth.call(null,vs_top4x3,j),cljs.core.nth.call(null,vs_top4x3,cljs.core.mod.call(null,(j + (1)),(4)))], null),cs2x3);

var G__36519 = (j + (1));
j = G__36519;
continue;
} else {
return null;
}
break;
}
});})(add_face_36459))
;
var n__4607__auto___36520 = dongles.mesh.n;
var i_36521 = (0);
while(true){
if((i_36521 < n__4607__auto___36520)){
var a_36522 = (i_36521 * (6));
var pos_36523 = ((function (i_36521,a_36522,n__4607__auto___36520,add_face_36459,add_cubey_36460){
return (function (p__36455){
var vec__36456 = p__36455;
var x = cljs.core.nth.call(null,vec__36456,(0),null);
var y = cljs.core.nth.call(null,vec__36456,(1),null);
var z = cljs.core.nth.call(null,vec__36456,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + cljs.core.rand_int.call(null,(3))),(y + a_36522),(z * (2))], null);
});})(i_36521,a_36522,n__4607__auto___36520,add_face_36459,add_cubey_36460))
;
add_cubey_36460.call(null,(((i_36521 * (4)) * (6)) * (3)),cljs.core.mapv.call(null,pos_36523,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-3),(-3),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(-3),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(-3),(-3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-3),(-3),(-3)], null)], null)),cljs.core.mapv.call(null,pos_36523,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-3),(3),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3),(-3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-3),(3),(-3)], null)], null)),(function (){var tfn = ((function (i_36521,a_36522,pos_36523,n__4607__auto___36520,add_face_36459,add_cubey_36460){
return (function (shift){
return ((function (i_36521,a_36522,pos_36523,n__4607__auto___36520,add_face_36459,add_cubey_36460){
return (function (from,to){
return (from + (((i_36521 + shift) / dongles.mesh.n) * (to - from)));
});
;})(i_36521,a_36522,pos_36523,n__4607__auto___36520,add_face_36459,add_cubey_36460))
});})(i_36521,a_36522,pos_36523,n__4607__auto___36520,add_face_36459,add_cubey_36460))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.call(null,tfn.call(null,(0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.5,0.5], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,0.3,0.6], null)),cljs.core.mapv.call(null,tfn.call(null,(1)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.5,0.5], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,0.3,0.6], null))], null);
})());

var G__36524 = (i_36521 + (1));
i_36521 = G__36524;
continue;
} else {
}
break;
}

dongles.mesh.position_attribute.needsUpdate = true;

dongles.mesh.color_attribute.needsUpdate = true;

dongles.mesh.geometry.computeVertexNormals();

dongles.mesh.geometry.computeBoundingSphere();

return dongles.mesh.mesh;
});

//# sourceMappingURL=mesh.js.map?rel=1562605191723
