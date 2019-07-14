// Compiled by ClojureScript 1.10.520 {}
goog.provide('dongles.mesh');
goog.require('cljs.core');
dongles.mesh.debug = (function dongles$mesh$debug(msg){
return document.getElementById("debug").innerHTML = msg;
});
var ret__4776__auto___105730 = (function (){
dongles.mesh.tm = (function dongles$mesh$tm(var_args){
var args__4736__auto__ = [];
var len__4730__auto___105731 = arguments.length;
var i__4731__auto___105732 = (0);
while(true){
if((i__4731__auto___105732 < len__4730__auto___105731)){
args__4736__auto__.push((arguments[i__4731__auto___105732]));

var G__105733 = (i__4731__auto___105732 + (1));
i__4731__auto___105732 = G__105733;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return dongles.mesh.tm.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

dongles.mesh.tm.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("dongles.mesh","debug","dongles.mesh/debug",-646965784,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","with-out-str","cljs.core/with-out-str",-538618510,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","time","cljs.core/time",-333131220,null),null,(1),null)),body))),null,(1),null))))),null,(1),null)))));
});

dongles.mesh.tm.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
dongles.mesh.tm.cljs$lang$applyTo = (function (seq105727){
var G__105728 = cljs.core.first.call(null,seq105727);
var seq105727__$1 = cljs.core.next.call(null,seq105727);
var G__105729 = cljs.core.first.call(null,seq105727__$1);
var seq105727__$2 = cljs.core.next.call(null,seq105727__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__105728,G__105729,seq105727__$2);
});

return null;
})()
;
dongles.mesh.tm.cljs$lang$macro = true;

dongles.mesh.n = (3000);
dongles.mesh.h = 0.01;
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
dongles.mesh.set3 = (function dongles$mesh$set3(out,start,p__105734){
var vec__105735 = p__105734;
var in0 = cljs.core.nth.call(null,vec__105735,(0),null);
var in1 = cljs.core.nth.call(null,vec__105735,(1),null);
var in2 = cljs.core.nth.call(null,vec__105735,(2),null);
var in$ = vec__105735;
(out[start] = in0);

(out[(start + (1))] = in1);

return (out[(start + (2))] = in2);
});
dongles.mesh.v3 = (function dongles$mesh$v3(p__105738){
var vec__105739 = p__105738;
var x = cljs.core.nth.call(null,vec__105739,(0),null);
var y = cljs.core.nth.call(null,vec__105739,(1),null);
var z = cljs.core.nth.call(null,vec__105739,(2),null);
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
dongles.mesh.cube_vs4x3s = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dongles.mesh._hh,dongles.mesh._hh,dongles.mesh.hh], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dongles.mesh.hh,dongles.mesh._hh,dongles.mesh.hh], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dongles.mesh.hh,dongles.mesh._hh,dongles.mesh._hh], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dongles.mesh._hh,dongles.mesh._hh,dongles.mesh._hh], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dongles.mesh._hh,dongles.mesh.hh,dongles.mesh.hh], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dongles.mesh.hh,dongles.mesh.hh,dongles.mesh.hh], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dongles.mesh.hh,dongles.mesh.hh,dongles.mesh._hh], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dongles.mesh._hh,dongles.mesh.hh,dongles.mesh._hh], null)], null);
dongles.mesh.prepare = (function dongles$mesh$prepare(var_args){
var args__4736__auto__ = [];
var len__4730__auto___105776 = arguments.length;
var i__4731__auto___105777 = (0);
while(true){
if((i__4731__auto___105777 < len__4730__auto___105776)){
args__4736__auto__.push((arguments[i__4731__auto___105777]));

var G__105778 = (i__4731__auto___105777 + (1));
i__4731__auto___105777 = G__105778;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return dongles.mesh.prepare.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

dongles.mesh.prepare.cljs$core$IFn$_invoke$arity$variadic = (function (t,p__105744){
var vec__105745 = p__105744;
var state = cljs.core.nth.call(null,vec__105745,(0),null);
var add_face_105779 = ((function (vec__105745,state){
return (function (i,p__105748,cs2x3){
var vec__105749 = p__105748;
var vs0 = cljs.core.nth.call(null,vec__105749,(0),null);
var vs1 = cljs.core.nth.call(null,vec__105749,(1),null);
var vs2 = cljs.core.nth.call(null,vec__105749,(2),null);
var vs3 = cljs.core.nth.call(null,vec__105749,(3),null);
var vs4x3 = vec__105749;
dongles.mesh.set3.call(null,dongles.mesh.vertices,(i + (0)),vs0);

dongles.mesh.set3.call(null,dongles.mesh.vertices,(i + (3)),vs1);

dongles.mesh.set3.call(null,dongles.mesh.vertices,(i + (6)),vs2);

dongles.mesh.set3.call(null,dongles.mesh.vertices,(i + (9)),vs1);

dongles.mesh.set3.call(null,dongles.mesh.vertices,(i + (12)),vs3);

dongles.mesh.set3.call(null,dongles.mesh.vertices,(i + (15)),vs2);

var first_face_normal_105781 = dongles.mesh.v3.call(null,cljs.core.nth.call(null,vs4x3,(1))).sub(dongles.mesh.v3.call(null,cljs.core.nth.call(null,vs4x3,(0)))).cross(dongles.mesh.v3.call(null,cljs.core.nth.call(null,vs4x3,(2))).sub(dongles.mesh.v3.call(null,cljs.core.nth.call(null,vs4x3,(0))))).normalize();
var second_face_normal_105782 = dongles.mesh.v3.call(null,cljs.core.nth.call(null,vs4x3,(3))).sub(dongles.mesh.v3.call(null,cljs.core.nth.call(null,vs4x3,(1)))).cross(dongles.mesh.v3.call(null,cljs.core.nth.call(null,vs4x3,(2))).sub(dongles.mesh.v3.call(null,cljs.core.nth.call(null,vs4x3,(1))))).normalize();
var between_normal_105783 = (new THREE.Vector3((0),(0),(0))).addVectors(first_face_normal_105781,second_face_normal_105782).divideScalar((2)).normalize();
var seq__105752_105784 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null,(0),(6)),cljs.core.map.call(null,dongles.mesh.v3__GT_arr,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [first_face_normal_105781,between_normal_105783,between_normal_105783,between_normal_105783,second_face_normal_105782,between_normal_105783], null))));
var chunk__105753_105785 = null;
var count__105754_105786 = (0);
var i__105755_105787 = (0);
while(true){
if((i__105755_105787 < count__105754_105786)){
var vec__105762_105788 = cljs.core._nth.call(null,chunk__105753_105785,i__105755_105787);
var j_105789 = cljs.core.nth.call(null,vec__105762_105788,(0),null);
var v_105790 = cljs.core.nth.call(null,vec__105762_105788,(1),null);
dongles.mesh.set3.call(null,dongles.mesh.normals,(i + (j_105789 * (3))),v_105790);


var G__105791 = seq__105752_105784;
var G__105792 = chunk__105753_105785;
var G__105793 = count__105754_105786;
var G__105794 = (i__105755_105787 + (1));
seq__105752_105784 = G__105791;
chunk__105753_105785 = G__105792;
count__105754_105786 = G__105793;
i__105755_105787 = G__105794;
continue;
} else {
var temp__5720__auto___105795 = cljs.core.seq.call(null,seq__105752_105784);
if(temp__5720__auto___105795){
var seq__105752_105796__$1 = temp__5720__auto___105795;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__105752_105796__$1)){
var c__4550__auto___105797 = cljs.core.chunk_first.call(null,seq__105752_105796__$1);
var G__105798 = cljs.core.chunk_rest.call(null,seq__105752_105796__$1);
var G__105799 = c__4550__auto___105797;
var G__105800 = cljs.core.count.call(null,c__4550__auto___105797);
var G__105801 = (0);
seq__105752_105784 = G__105798;
chunk__105753_105785 = G__105799;
count__105754_105786 = G__105800;
i__105755_105787 = G__105801;
continue;
} else {
var vec__105765_105802 = cljs.core.first.call(null,seq__105752_105796__$1);
var j_105803 = cljs.core.nth.call(null,vec__105765_105802,(0),null);
var v_105804 = cljs.core.nth.call(null,vec__105765_105802,(1),null);
dongles.mesh.set3.call(null,dongles.mesh.normals,(i + (j_105803 * (3))),v_105804);


var G__105805 = cljs.core.next.call(null,seq__105752_105796__$1);
var G__105806 = null;
var G__105807 = (0);
var G__105808 = (0);
seq__105752_105784 = G__105805;
chunk__105753_105785 = G__105806;
count__105754_105786 = G__105807;
i__105755_105787 = G__105808;
continue;
}
} else {
}
}
break;
}

var f_105809 = cljs.core.first.call(null,cs2x3);
var n__4607__auto___105810 = (3);
var j_105811 = (0);
while(true){
if((j_105811 < n__4607__auto___105810)){
dongles.mesh.set3.call(null,dongles.mesh.colors,(i + (j_105811 * (3))),f_105809);

var G__105812 = (j_105811 + (1));
j_105811 = G__105812;
continue;
} else {
}
break;
}

var l = cljs.core.last.call(null,cs2x3);
dongles.mesh.set3.call(null,dongles.mesh.colors,(i + (6)),l);

dongles.mesh.set3.call(null,dongles.mesh.colors,(i + (12)),l);

return dongles.mesh.set3.call(null,dongles.mesh.colors,(i + (15)),l);
});})(vec__105745,state))
;
var add_cubey_105780 = ((function (add_face_105779,vec__105745,state){
return (function (i,p__105768,cs2x3){
var vec__105769 = p__105768;
var vs_bottom4x3 = cljs.core.nth.call(null,vec__105769,(0),null);
var vs_top4x3 = cljs.core.nth.call(null,vec__105769,(1),null);
var n__4607__auto___105813 = (4);
var j_105814 = (0);
while(true){
if((j_105814 < n__4607__auto___105813)){
add_face_105779.call(null,(i + ((j_105814 * (6)) * (3))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,vs_bottom4x3,j_105814),cljs.core.nth.call(null,vs_bottom4x3,cljs.core.mod.call(null,(j_105814 + (1)),(4))),cljs.core.nth.call(null,vs_top4x3,j_105814),cljs.core.nth.call(null,vs_top4x3,cljs.core.mod.call(null,(j_105814 + (1)),(4)))], null),cs2x3);

var G__105815 = (j_105814 + (1));
j_105814 = G__105815;
continue;
} else {
}
break;
}

add_face_105779.call(null,(i + (((4) * (6)) * (3))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,vs_bottom4x3,(2)),cljs.core.nth.call(null,vs_bottom4x3,(3)),cljs.core.nth.call(null,vs_bottom4x3,(1)),cljs.core.nth.call(null,vs_bottom4x3,(0))], null),cs2x3);

return add_face_105779.call(null,(i + (((5) * (6)) * (3))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,vs_top4x3,(2)),cljs.core.nth.call(null,vs_top4x3,(3)),cljs.core.nth.call(null,vs_top4x3,(1)),cljs.core.nth.call(null,vs_top4x3,(0))], null),cs2x3);
});})(add_face_105779,vec__105745,state))
;
var n__4607__auto___105816 = dongles.mesh.n;
var i_105817 = (0);
while(true){
if((i_105817 < n__4607__auto___105816)){
var a_105818 = (i_105817 * (dongles.mesh.h + 0.0));
var pos_105819 = ((function (i_105817,a_105818,n__4607__auto___105816,add_face_105779,add_cubey_105780,vec__105745,state){
return (function (j,p__105772){
var vec__105773 = p__105772;
var x = cljs.core.nth.call(null,vec__105773,(0),null);
var y = cljs.core.nth.call(null,vec__105773,(1),null);
var z = cljs.core.nth.call(null,vec__105773,(2),null);
var ny = (y + (i_105817 * dongles.mesh.h));
var nx = (x + ((3) * dongles.mesh.sin.call(null,(ny * 0.3))));
var nz = (z * (10));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx,ny,nz], null);
});})(i_105817,a_105818,n__4607__auto___105816,add_face_105779,add_cubey_105780,vec__105745,state))
;
add_cubey_105780.call(null,(((i_105817 * (6)) * (6)) * (3)),cljs.core.partition.call(null,(4),cljs.core.map_indexed.call(null,pos_105819,dongles.mesh.cube_vs4x3s)),(function (){var tfn = ((function (i_105817,a_105818,pos_105819,n__4607__auto___105816,add_face_105779,add_cubey_105780,vec__105745,state){
return (function (shift){
return ((function (i_105817,a_105818,pos_105819,n__4607__auto___105816,add_face_105779,add_cubey_105780,vec__105745,state){
return (function (from,to){
return (from + (((i_105817 + shift) / dongles.mesh.n) * (to - from)));
});
;})(i_105817,a_105818,pos_105819,n__4607__auto___105816,add_face_105779,add_cubey_105780,vec__105745,state))
});})(i_105817,a_105818,pos_105819,n__4607__auto___105816,add_face_105779,add_cubey_105780,vec__105745,state))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.call(null,tfn.call(null,(0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.5,0.5], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,0.3,0.6], null)),cljs.core.mapv.call(null,tfn.call(null,(1)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.5,0.5], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,0.3,0.6], null))], null);
})());

var G__105820 = (i_105817 + (1));
i_105817 = G__105820;
continue;
} else {
}
break;
}

dongles.mesh.position_attribute.needsUpdate = true;

dongles.mesh.normal_attribute.needsUpdate = true;

dongles.mesh.color_attribute.needsUpdate = true;

return dongles.mesh.mesh;
});

dongles.mesh.prepare.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
dongles.mesh.prepare.cljs$lang$applyTo = (function (seq105742){
var G__105743 = cljs.core.first.call(null,seq105742);
var seq105742__$1 = cljs.core.next.call(null,seq105742);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__105743,seq105742__$1);
});


//# sourceMappingURL=mesh.js.map?rel=1563106520129
