// Compiled by ClojureScript 1.10.520 {}
goog.provide('dongles.mesh');
goog.require('cljs.core');
dongles.mesh.debug = (function dongles$mesh$debug(msg){
return document.getElementById("debug").innerHTML = msg;
});
dongles.mesh.n = (50);
dongles.mesh.h = 0.6;
dongles.mesh.hh = (dongles.mesh.h / (2));
dongles.mesh._hh = ((-1) * dongles.mesh.hh);
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
dongles.mesh.mesh = (new THREE.Mesh(dongles.mesh.geometry,(new THREE.MeshPhongMaterial(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"color","color",1011675173),(16777215),new cljs.core.Keyword(null,"specular","specular",1475677228),(16777215),new cljs.core.Keyword(null,"shininess","shininess",-509323286),(5),new cljs.core.Keyword(null,"side","side",389652279),THREE.DoubleSide,new cljs.core.Keyword(null,"vertexColors","vertexColors",-1991725867),THREE.VertexColors], null))))));
dongles.mesh.mesh.rotation.y = -0.9;
dongles.mesh.set3 = (function dongles$mesh$set3(out,start,in$){
var n__4607__auto__ = (3);
var i = (0);
while(true){
if((i < n__4607__auto__)){
(out[(start + i)] = cljs.core.nth.call(null,in$,i));

var G__90455 = (i + (1));
i = G__90455;
continue;
} else {
return null;
}
break;
}
});
dongles.mesh.v3 = (function dongles$mesh$v3(p__90456){
var vec__90457 = p__90456;
var x = cljs.core.nth.call(null,vec__90457,(0),null);
var y = cljs.core.nth.call(null,vec__90457,(1),null);
var z = cljs.core.nth.call(null,vec__90457,(2),null);
return (new THREE.Vector3(x,y,z));
});
dongles.mesh.v3__GT_arr = (function dongles$mesh$v3__GT_arr(v){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v.x,v.y,v.z], null);
});
dongles.mesh.sin = (function dongles$mesh$sin(x){
return Math.sin(x);
});
dongles.mesh.pow = (function dongles$mesh$pow(x,n){
return Math.pow(x,n);
});
dongles.mesh.sin2 = (function dongles$mesh$sin2(x){
return dongles.mesh.pow.call(null,dongles.mesh.sin.call(null,x),(2));
});
dongles.mesh.prepare = (function dongles$mesh$prepare(var_args){
var args__4736__auto__ = [];
var len__4730__auto___90514 = arguments.length;
var i__4731__auto___90515 = (0);
while(true){
if((i__4731__auto___90515 < len__4730__auto___90514)){
args__4736__auto__.push((arguments[i__4731__auto___90515]));

var G__90516 = (i__4731__auto___90515 + (1));
i__4731__auto___90515 = G__90516;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return dongles.mesh.prepare.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

dongles.mesh.prepare.cljs$core$IFn$_invoke$arity$variadic = (function (t,p__90462){
var vec__90463 = p__90462;
var state = cljs.core.nth.call(null,vec__90463,(0),null);
var add_face_90517 = ((function (vec__90463,state){
return (function (i,vs4x3,cs2x3){
var seq__90466_90519 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null,(0),(6)),cljs.core.concat.call(null,cljs.core.take.call(null,(3),vs4x3),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,vs4x3,(1)),cljs.core.nth.call(null,vs4x3,(3)),cljs.core.nth.call(null,vs4x3,(2))], null))));
var chunk__90467_90520 = null;
var count__90468_90521 = (0);
var i__90469_90522 = (0);
while(true){
if((i__90469_90522 < count__90468_90521)){
var vec__90476_90523 = cljs.core._nth.call(null,chunk__90467_90520,i__90469_90522);
var j_90524 = cljs.core.nth.call(null,vec__90476_90523,(0),null);
var v_90525 = cljs.core.nth.call(null,vec__90476_90523,(1),null);
dongles.mesh.set3.call(null,dongles.mesh.vertices,(i + (j_90524 * (3))),v_90525);


var G__90526 = seq__90466_90519;
var G__90527 = chunk__90467_90520;
var G__90528 = count__90468_90521;
var G__90529 = (i__90469_90522 + (1));
seq__90466_90519 = G__90526;
chunk__90467_90520 = G__90527;
count__90468_90521 = G__90528;
i__90469_90522 = G__90529;
continue;
} else {
var temp__5720__auto___90530 = cljs.core.seq.call(null,seq__90466_90519);
if(temp__5720__auto___90530){
var seq__90466_90531__$1 = temp__5720__auto___90530;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__90466_90531__$1)){
var c__4550__auto___90532 = cljs.core.chunk_first.call(null,seq__90466_90531__$1);
var G__90533 = cljs.core.chunk_rest.call(null,seq__90466_90531__$1);
var G__90534 = c__4550__auto___90532;
var G__90535 = cljs.core.count.call(null,c__4550__auto___90532);
var G__90536 = (0);
seq__90466_90519 = G__90533;
chunk__90467_90520 = G__90534;
count__90468_90521 = G__90535;
i__90469_90522 = G__90536;
continue;
} else {
var vec__90479_90537 = cljs.core.first.call(null,seq__90466_90531__$1);
var j_90538 = cljs.core.nth.call(null,vec__90479_90537,(0),null);
var v_90539 = cljs.core.nth.call(null,vec__90479_90537,(1),null);
dongles.mesh.set3.call(null,dongles.mesh.vertices,(i + (j_90538 * (3))),v_90539);


var G__90540 = cljs.core.next.call(null,seq__90466_90531__$1);
var G__90541 = null;
var G__90542 = (0);
var G__90543 = (0);
seq__90466_90519 = G__90540;
chunk__90467_90520 = G__90541;
count__90468_90521 = G__90542;
i__90469_90522 = G__90543;
continue;
}
} else {
}
}
break;
}

var first_face_normal_90544 = dongles.mesh.v3.call(null,cljs.core.nth.call(null,vs4x3,(1))).sub(dongles.mesh.v3.call(null,cljs.core.nth.call(null,vs4x3,(0)))).cross(dongles.mesh.v3.call(null,cljs.core.nth.call(null,vs4x3,(2))).sub(dongles.mesh.v3.call(null,cljs.core.nth.call(null,vs4x3,(0))))).normalize();
var second_face_normal_90545 = dongles.mesh.v3.call(null,cljs.core.nth.call(null,vs4x3,(3))).sub(dongles.mesh.v3.call(null,cljs.core.nth.call(null,vs4x3,(1)))).cross(dongles.mesh.v3.call(null,cljs.core.nth.call(null,vs4x3,(2))).sub(dongles.mesh.v3.call(null,cljs.core.nth.call(null,vs4x3,(1))))).normalize();
var between_normal_90546 = (new THREE.Vector3((0),(0),(0))).addVectors(first_face_normal_90544,second_face_normal_90545).divideScalar((2)).normalize();
var seq__90482_90547 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null,(0),(6)),cljs.core.map.call(null,dongles.mesh.v3__GT_arr,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [first_face_normal_90544,between_normal_90546,between_normal_90546,between_normal_90546,second_face_normal_90545,between_normal_90546], null))));
var chunk__90483_90548 = null;
var count__90484_90549 = (0);
var i__90485_90550 = (0);
while(true){
if((i__90485_90550 < count__90484_90549)){
var vec__90492_90551 = cljs.core._nth.call(null,chunk__90483_90548,i__90485_90550);
var j_90552 = cljs.core.nth.call(null,vec__90492_90551,(0),null);
var v_90553 = cljs.core.nth.call(null,vec__90492_90551,(1),null);
dongles.mesh.set3.call(null,dongles.mesh.normals,(i + (j_90552 * (3))),v_90553);


var G__90554 = seq__90482_90547;
var G__90555 = chunk__90483_90548;
var G__90556 = count__90484_90549;
var G__90557 = (i__90485_90550 + (1));
seq__90482_90547 = G__90554;
chunk__90483_90548 = G__90555;
count__90484_90549 = G__90556;
i__90485_90550 = G__90557;
continue;
} else {
var temp__5720__auto___90558 = cljs.core.seq.call(null,seq__90482_90547);
if(temp__5720__auto___90558){
var seq__90482_90559__$1 = temp__5720__auto___90558;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__90482_90559__$1)){
var c__4550__auto___90560 = cljs.core.chunk_first.call(null,seq__90482_90559__$1);
var G__90561 = cljs.core.chunk_rest.call(null,seq__90482_90559__$1);
var G__90562 = c__4550__auto___90560;
var G__90563 = cljs.core.count.call(null,c__4550__auto___90560);
var G__90564 = (0);
seq__90482_90547 = G__90561;
chunk__90483_90548 = G__90562;
count__90484_90549 = G__90563;
i__90485_90550 = G__90564;
continue;
} else {
var vec__90495_90565 = cljs.core.first.call(null,seq__90482_90559__$1);
var j_90566 = cljs.core.nth.call(null,vec__90495_90565,(0),null);
var v_90567 = cljs.core.nth.call(null,vec__90495_90565,(1),null);
dongles.mesh.set3.call(null,dongles.mesh.normals,(i + (j_90566 * (3))),v_90567);


var G__90568 = cljs.core.next.call(null,seq__90482_90559__$1);
var G__90569 = null;
var G__90570 = (0);
var G__90571 = (0);
seq__90482_90547 = G__90568;
chunk__90483_90548 = G__90569;
count__90484_90549 = G__90570;
i__90485_90550 = G__90571;
continue;
}
} else {
}
}
break;
}

var seq__90498_90572 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3),(9)], null));
var chunk__90499_90573 = null;
var count__90500_90574 = (0);
var i__90501_90575 = (0);
while(true){
if((i__90501_90575 < count__90500_90574)){
var j_90576 = cljs.core._nth.call(null,chunk__90499_90573,i__90501_90575);
dongles.mesh.set3.call(null,dongles.mesh.colors,(i + j_90576),cljs.core.first.call(null,cs2x3));


var G__90577 = seq__90498_90572;
var G__90578 = chunk__90499_90573;
var G__90579 = count__90500_90574;
var G__90580 = (i__90501_90575 + (1));
seq__90498_90572 = G__90577;
chunk__90499_90573 = G__90578;
count__90500_90574 = G__90579;
i__90501_90575 = G__90580;
continue;
} else {
var temp__5720__auto___90581 = cljs.core.seq.call(null,seq__90498_90572);
if(temp__5720__auto___90581){
var seq__90498_90582__$1 = temp__5720__auto___90581;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__90498_90582__$1)){
var c__4550__auto___90583 = cljs.core.chunk_first.call(null,seq__90498_90582__$1);
var G__90584 = cljs.core.chunk_rest.call(null,seq__90498_90582__$1);
var G__90585 = c__4550__auto___90583;
var G__90586 = cljs.core.count.call(null,c__4550__auto___90583);
var G__90587 = (0);
seq__90498_90572 = G__90584;
chunk__90499_90573 = G__90585;
count__90500_90574 = G__90586;
i__90501_90575 = G__90587;
continue;
} else {
var j_90588 = cljs.core.first.call(null,seq__90498_90582__$1);
dongles.mesh.set3.call(null,dongles.mesh.colors,(i + j_90588),cljs.core.first.call(null,cs2x3));


var G__90589 = cljs.core.next.call(null,seq__90498_90582__$1);
var G__90590 = null;
var G__90591 = (0);
var G__90592 = (0);
seq__90498_90572 = G__90589;
chunk__90499_90573 = G__90590;
count__90500_90574 = G__90591;
i__90501_90575 = G__90592;
continue;
}
} else {
}
}
break;
}

var seq__90502 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(12),(15)], null));
var chunk__90503 = null;
var count__90504 = (0);
var i__90505 = (0);
while(true){
if((i__90505 < count__90504)){
var j = cljs.core._nth.call(null,chunk__90503,i__90505);
dongles.mesh.set3.call(null,dongles.mesh.colors,(i + j),cljs.core.last.call(null,cs2x3));


var G__90593 = seq__90502;
var G__90594 = chunk__90503;
var G__90595 = count__90504;
var G__90596 = (i__90505 + (1));
seq__90502 = G__90593;
chunk__90503 = G__90594;
count__90504 = G__90595;
i__90505 = G__90596;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__90502);
if(temp__5720__auto__){
var seq__90502__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__90502__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__90502__$1);
var G__90597 = cljs.core.chunk_rest.call(null,seq__90502__$1);
var G__90598 = c__4550__auto__;
var G__90599 = cljs.core.count.call(null,c__4550__auto__);
var G__90600 = (0);
seq__90502 = G__90597;
chunk__90503 = G__90598;
count__90504 = G__90599;
i__90505 = G__90600;
continue;
} else {
var j = cljs.core.first.call(null,seq__90502__$1);
dongles.mesh.set3.call(null,dongles.mesh.colors,(i + j),cljs.core.last.call(null,cs2x3));


var G__90601 = cljs.core.next.call(null,seq__90502__$1);
var G__90602 = null;
var G__90603 = (0);
var G__90604 = (0);
seq__90502 = G__90601;
chunk__90503 = G__90602;
count__90504 = G__90603;
i__90505 = G__90604;
continue;
}
} else {
return null;
}
}
break;
}
});})(vec__90463,state))
;
var add_cubey_90518 = ((function (add_face_90517,vec__90463,state){
return (function (i,p__90506,cs2x3){
var vec__90507 = p__90506;
var vs_bottom4x3 = cljs.core.nth.call(null,vec__90507,(0),null);
var vs_top4x3 = cljs.core.nth.call(null,vec__90507,(1),null);
var n__4607__auto___90605 = (4);
var j_90606 = (0);
while(true){
if((j_90606 < n__4607__auto___90605)){
add_face_90517.call(null,(i + ((j_90606 * (6)) * (3))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,vs_bottom4x3,j_90606),cljs.core.nth.call(null,vs_bottom4x3,cljs.core.mod.call(null,(j_90606 + (1)),(4))),cljs.core.nth.call(null,vs_top4x3,j_90606),cljs.core.nth.call(null,vs_top4x3,cljs.core.mod.call(null,(j_90606 + (1)),(4)))], null),cs2x3);

var G__90607 = (j_90606 + (1));
j_90606 = G__90607;
continue;
} else {
}
break;
}

add_face_90517.call(null,(i + (((4) * (6)) * (3))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,vs_bottom4x3,(2)),cljs.core.nth.call(null,vs_bottom4x3,(3)),cljs.core.nth.call(null,vs_bottom4x3,(1)),cljs.core.nth.call(null,vs_bottom4x3,(0))], null),cs2x3);

return add_face_90517.call(null,(i + (((5) * (6)) * (3))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,vs_top4x3,(2)),cljs.core.nth.call(null,vs_top4x3,(3)),cljs.core.nth.call(null,vs_top4x3,(1)),cljs.core.nth.call(null,vs_top4x3,(0))], null),cs2x3);
});})(add_face_90517,vec__90463,state))
;
var n__4607__auto___90608 = dongles.mesh.n;
var i_90609 = (0);
while(true){
if((i_90609 < n__4607__auto___90608)){
var a_90610 = (i_90609 * (dongles.mesh.h + 0.0));
var pos_90611 = ((function (i_90609,a_90610,n__4607__auto___90608,add_face_90517,add_cubey_90518,vec__90463,state){
return (function (j,p__90510){
var vec__90511 = p__90510;
var x = cljs.core.nth.call(null,vec__90511,(0),null);
var y = cljs.core.nth.call(null,vec__90511,(1),null);
var z = cljs.core.nth.call(null,vec__90511,(2),null);
var ny = (y + a_90610);
var nz = z;
var nx = ((x + ((4.8 * dongles.mesh.sin.call(null,(ny * 0.2))) * dongles.mesh.sin.call(null,(t * 0.001)))) + ((dongles.mesh.sin2.call(null,(ny * 2.7)) * dongles.mesh.sin2.call(null,(t * 0.005))) * 0.5));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx,ny,nz], null);
});})(i_90609,a_90610,n__4607__auto___90608,add_face_90517,add_cubey_90518,vec__90463,state))
;
add_cubey_90518.call(null,(((i_90609 * (6)) * (6)) * (3)),cljs.core.partition.call(null,(4),cljs.core.map_indexed.call(null,pos_90611,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dongles.mesh._hh,dongles.mesh._hh,dongles.mesh.hh], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dongles.mesh.hh,dongles.mesh._hh,dongles.mesh.hh], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dongles.mesh.hh,dongles.mesh._hh,dongles.mesh._hh], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dongles.mesh._hh,dongles.mesh._hh,dongles.mesh._hh], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dongles.mesh._hh,dongles.mesh.hh,dongles.mesh.hh], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dongles.mesh.hh,dongles.mesh.hh,dongles.mesh.hh], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dongles.mesh.hh,dongles.mesh.hh,dongles.mesh._hh], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dongles.mesh._hh,dongles.mesh.hh,dongles.mesh._hh], null)], null))),(function (){var tfn = ((function (i_90609,a_90610,pos_90611,n__4607__auto___90608,add_face_90517,add_cubey_90518,vec__90463,state){
return (function (shift){
return ((function (i_90609,a_90610,pos_90611,n__4607__auto___90608,add_face_90517,add_cubey_90518,vec__90463,state){
return (function (from,to){
return (from + (((i_90609 + shift) / dongles.mesh.n) * (to - from)));
});
;})(i_90609,a_90610,pos_90611,n__4607__auto___90608,add_face_90517,add_cubey_90518,vec__90463,state))
});})(i_90609,a_90610,pos_90611,n__4607__auto___90608,add_face_90517,add_cubey_90518,vec__90463,state))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.call(null,tfn.call(null,(0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.5,0.5], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,0.3,0.6], null)),cljs.core.mapv.call(null,tfn.call(null,(1)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.5,0.5], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,0.3,0.6], null))], null);
})());

var G__90612 = (i_90609 + (1));
i_90609 = G__90612;
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
dongles.mesh.prepare.cljs$lang$applyTo = (function (seq90460){
var G__90461 = cljs.core.first.call(null,seq90460);
var seq90460__$1 = cljs.core.next.call(null,seq90460);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__90461,seq90460__$1);
});


//# sourceMappingURL=mesh.js.map?rel=1563102560147
