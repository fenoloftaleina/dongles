// Compiled by ClojureScript 1.10.520 {}
goog.provide('dongles.mesh');
goog.require('cljs.core');
dongles.mesh.n = (5);
dongles.mesh.faces = ((6) * dongles.mesh.n);
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

var G__41547 = (i + (1));
i = G__41547;
continue;
} else {
return null;
}
break;
}
});
dongles.mesh.prepare = (function dongles$mesh$prepare(){
var add_face_41576 = (function (i,vs4x3,cs2x3){
var seq__41548_41578 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null,(0),(6)),cljs.core.concat.call(null,cljs.core.take.call(null,(3),vs4x3),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,vs4x3,(1)),cljs.core.nth.call(null,vs4x3,(3)),cljs.core.nth.call(null,vs4x3,(2))], null))));
var chunk__41549_41579 = null;
var count__41550_41580 = (0);
var i__41551_41581 = (0);
while(true){
if((i__41551_41581 < count__41550_41580)){
var vec__41558_41582 = cljs.core._nth.call(null,chunk__41549_41579,i__41551_41581);
var j_41583 = cljs.core.nth.call(null,vec__41558_41582,(0),null);
var v_41584 = cljs.core.nth.call(null,vec__41558_41582,(1),null);
dongles.mesh.set3.call(null,dongles.mesh.vertices,(i + (j_41583 * (3))),v_41584);


var G__41585 = seq__41548_41578;
var G__41586 = chunk__41549_41579;
var G__41587 = count__41550_41580;
var G__41588 = (i__41551_41581 + (1));
seq__41548_41578 = G__41585;
chunk__41549_41579 = G__41586;
count__41550_41580 = G__41587;
i__41551_41581 = G__41588;
continue;
} else {
var temp__5720__auto___41589 = cljs.core.seq.call(null,seq__41548_41578);
if(temp__5720__auto___41589){
var seq__41548_41590__$1 = temp__5720__auto___41589;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41548_41590__$1)){
var c__4550__auto___41591 = cljs.core.chunk_first.call(null,seq__41548_41590__$1);
var G__41592 = cljs.core.chunk_rest.call(null,seq__41548_41590__$1);
var G__41593 = c__4550__auto___41591;
var G__41594 = cljs.core.count.call(null,c__4550__auto___41591);
var G__41595 = (0);
seq__41548_41578 = G__41592;
chunk__41549_41579 = G__41593;
count__41550_41580 = G__41594;
i__41551_41581 = G__41595;
continue;
} else {
var vec__41561_41596 = cljs.core.first.call(null,seq__41548_41590__$1);
var j_41597 = cljs.core.nth.call(null,vec__41561_41596,(0),null);
var v_41598 = cljs.core.nth.call(null,vec__41561_41596,(1),null);
dongles.mesh.set3.call(null,dongles.mesh.vertices,(i + (j_41597 * (3))),v_41598);


var G__41599 = cljs.core.next.call(null,seq__41548_41590__$1);
var G__41600 = null;
var G__41601 = (0);
var G__41602 = (0);
seq__41548_41578 = G__41599;
chunk__41549_41579 = G__41600;
count__41550_41580 = G__41601;
i__41551_41581 = G__41602;
continue;
}
} else {
}
}
break;
}

var seq__41564_41603 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3),(9)], null));
var chunk__41565_41604 = null;
var count__41566_41605 = (0);
var i__41567_41606 = (0);
while(true){
if((i__41567_41606 < count__41566_41605)){
var j_41607 = cljs.core._nth.call(null,chunk__41565_41604,i__41567_41606);
dongles.mesh.set3.call(null,dongles.mesh.colors,(i + j_41607),cljs.core.first.call(null,cs2x3));


var G__41608 = seq__41564_41603;
var G__41609 = chunk__41565_41604;
var G__41610 = count__41566_41605;
var G__41611 = (i__41567_41606 + (1));
seq__41564_41603 = G__41608;
chunk__41565_41604 = G__41609;
count__41566_41605 = G__41610;
i__41567_41606 = G__41611;
continue;
} else {
var temp__5720__auto___41612 = cljs.core.seq.call(null,seq__41564_41603);
if(temp__5720__auto___41612){
var seq__41564_41613__$1 = temp__5720__auto___41612;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41564_41613__$1)){
var c__4550__auto___41614 = cljs.core.chunk_first.call(null,seq__41564_41613__$1);
var G__41615 = cljs.core.chunk_rest.call(null,seq__41564_41613__$1);
var G__41616 = c__4550__auto___41614;
var G__41617 = cljs.core.count.call(null,c__4550__auto___41614);
var G__41618 = (0);
seq__41564_41603 = G__41615;
chunk__41565_41604 = G__41616;
count__41566_41605 = G__41617;
i__41567_41606 = G__41618;
continue;
} else {
var j_41619 = cljs.core.first.call(null,seq__41564_41613__$1);
dongles.mesh.set3.call(null,dongles.mesh.colors,(i + j_41619),cljs.core.first.call(null,cs2x3));


var G__41620 = cljs.core.next.call(null,seq__41564_41613__$1);
var G__41621 = null;
var G__41622 = (0);
var G__41623 = (0);
seq__41564_41603 = G__41620;
chunk__41565_41604 = G__41621;
count__41566_41605 = G__41622;
i__41567_41606 = G__41623;
continue;
}
} else {
}
}
break;
}

var seq__41568 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(12),(15)], null));
var chunk__41569 = null;
var count__41570 = (0);
var i__41571 = (0);
while(true){
if((i__41571 < count__41570)){
var j = cljs.core._nth.call(null,chunk__41569,i__41571);
dongles.mesh.set3.call(null,dongles.mesh.colors,(i + j),cljs.core.last.call(null,cs2x3));


var G__41624 = seq__41568;
var G__41625 = chunk__41569;
var G__41626 = count__41570;
var G__41627 = (i__41571 + (1));
seq__41568 = G__41624;
chunk__41569 = G__41625;
count__41570 = G__41626;
i__41571 = G__41627;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__41568);
if(temp__5720__auto__){
var seq__41568__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41568__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__41568__$1);
var G__41628 = cljs.core.chunk_rest.call(null,seq__41568__$1);
var G__41629 = c__4550__auto__;
var G__41630 = cljs.core.count.call(null,c__4550__auto__);
var G__41631 = (0);
seq__41568 = G__41628;
chunk__41569 = G__41629;
count__41570 = G__41630;
i__41571 = G__41631;
continue;
} else {
var j = cljs.core.first.call(null,seq__41568__$1);
dongles.mesh.set3.call(null,dongles.mesh.colors,(i + j),cljs.core.last.call(null,cs2x3));


var G__41632 = cljs.core.next.call(null,seq__41568__$1);
var G__41633 = null;
var G__41634 = (0);
var G__41635 = (0);
seq__41568 = G__41632;
chunk__41569 = G__41633;
count__41570 = G__41634;
i__41571 = G__41635;
continue;
}
} else {
return null;
}
}
break;
}
});
var add_cubey_41577 = ((function (add_face_41576){
return (function (i,vs_bottom4x3,vs_top4x3,cs2x3){
var n__4607__auto___41636 = (4);
var j_41637 = (0);
while(true){
if((j_41637 < n__4607__auto___41636)){
add_face_41576.call(null,(i + ((j_41637 * (6)) * (3))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,vs_bottom4x3,j_41637),cljs.core.nth.call(null,vs_bottom4x3,cljs.core.mod.call(null,(j_41637 + (1)),(4))),cljs.core.nth.call(null,vs_top4x3,j_41637),cljs.core.nth.call(null,vs_top4x3,cljs.core.mod.call(null,(j_41637 + (1)),(4)))], null),cs2x3);

var G__41638 = (j_41637 + (1));
j_41637 = G__41638;
continue;
} else {
}
break;
}

add_face_41576.call(null,(i + (((4) * (6)) * (3))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,vs_bottom4x3,(2)),cljs.core.nth.call(null,vs_bottom4x3,(3)),cljs.core.nth.call(null,vs_bottom4x3,(1)),cljs.core.nth.call(null,vs_bottom4x3,(0))], null),cs2x3);

return add_face_41576.call(null,(i + (((5) * (6)) * (3))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,vs_top4x3,(2)),cljs.core.nth.call(null,vs_top4x3,(3)),cljs.core.nth.call(null,vs_top4x3,(1)),cljs.core.nth.call(null,vs_top4x3,(0))], null),cs2x3);
});})(add_face_41576))
;
var n__4607__auto___41639 = dongles.mesh.n;
var i_41640 = (0);
while(true){
if((i_41640 < n__4607__auto___41639)){
var a_41641 = (i_41640 * 6.3);
var pos_41642 = ((function (i_41640,a_41641,n__4607__auto___41639,add_face_41576,add_cubey_41577){
return (function (p__41572){
var vec__41573 = p__41572;
var x = cljs.core.nth.call(null,vec__41573,(0),null);
var y = cljs.core.nth.call(null,vec__41573,(1),null);
var z = cljs.core.nth.call(null,vec__41573,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + cljs.core.rand_int.call(null,(3))),(y + a_41641),(z * (2))], null);
});})(i_41640,a_41641,n__4607__auto___41639,add_face_41576,add_cubey_41577))
;
add_cubey_41577.call(null,(((i_41640 * (6)) * (6)) * (3)),cljs.core.mapv.call(null,pos_41642,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-3),(-3),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(-3),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(-3),(-3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-3),(-3),(-3)], null)], null)),cljs.core.mapv.call(null,pos_41642,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-3),(3),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3),(-3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-3),(3),(-3)], null)], null)),(function (){var tfn = ((function (i_41640,a_41641,pos_41642,n__4607__auto___41639,add_face_41576,add_cubey_41577){
return (function (shift){
return ((function (i_41640,a_41641,pos_41642,n__4607__auto___41639,add_face_41576,add_cubey_41577){
return (function (from,to){
return (from + (((i_41640 + shift) / dongles.mesh.n) * (to - from)));
});
;})(i_41640,a_41641,pos_41642,n__4607__auto___41639,add_face_41576,add_cubey_41577))
});})(i_41640,a_41641,pos_41642,n__4607__auto___41639,add_face_41576,add_cubey_41577))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.call(null,tfn.call(null,(0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.5,0.5], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,0.3,0.6], null)),cljs.core.mapv.call(null,tfn.call(null,(1)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.5,0.5], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,0.3,0.6], null))], null);
})());

var G__41643 = (i_41640 + (1));
i_41640 = G__41643;
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

//# sourceMappingURL=mesh.js.map?rel=1562612688420
