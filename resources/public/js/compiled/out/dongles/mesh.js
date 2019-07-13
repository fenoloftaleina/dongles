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
dongles.mesh.mesh = (new THREE.Mesh(dongles.mesh.geometry,(new THREE.MeshPhongMaterial(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"color","color",1011675173),(16777215),new cljs.core.Keyword(null,"specular","specular",1475677228),(16777215),new cljs.core.Keyword(null,"shininess","shininess",-509323286),(5),new cljs.core.Keyword(null,"side","side",389652279),THREE.DoubleSide,new cljs.core.Keyword(null,"vertexColors","vertexColors",-1991725867),THREE.VertexColors], null))))));
dongles.mesh.mesh.rotation.y = -0.9;
dongles.mesh.set3 = (function dongles$mesh$set3(out,start,in$){
var n__4607__auto__ = (3);
var i = (0);
while(true){
if((i < n__4607__auto__)){
(out[(start + i)] = cljs.core.nth.call(null,in$,i));

var G__54789 = (i + (1));
i = G__54789;
continue;
} else {
return null;
}
break;
}
});
dongles.mesh.v3 = (function dongles$mesh$v3(p__54790){
var vec__54791 = p__54790;
var x = cljs.core.nth.call(null,vec__54791,(0),null);
var y = cljs.core.nth.call(null,vec__54791,(1),null);
var z = cljs.core.nth.call(null,vec__54791,(2),null);
return (new THREE.Vector3(x,y,z));
});
dongles.mesh.v3__GT_arr = (function dongles$mesh$v3__GT_arr(v){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v.x,v.y,v.z], null);
});
dongles.mesh.prepare = (function dongles$mesh$prepare(var_args){
var args__4736__auto__ = [];
var len__4730__auto___54848 = arguments.length;
var i__4731__auto___54849 = (0);
while(true){
if((i__4731__auto___54849 < len__4730__auto___54848)){
args__4736__auto__.push((arguments[i__4731__auto___54849]));

var G__54850 = (i__4731__auto___54849 + (1));
i__4731__auto___54849 = G__54850;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return dongles.mesh.prepare.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

dongles.mesh.prepare.cljs$core$IFn$_invoke$arity$variadic = (function (t,p__54796){
var vec__54797 = p__54796;
var state = cljs.core.nth.call(null,vec__54797,(0),null);
var add_face_54851 = ((function (vec__54797,state){
return (function (i,vs4x3,cs2x3){
var seq__54800_54853 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null,(0),(6)),cljs.core.concat.call(null,cljs.core.take.call(null,(3),vs4x3),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,vs4x3,(1)),cljs.core.nth.call(null,vs4x3,(3)),cljs.core.nth.call(null,vs4x3,(2))], null))));
var chunk__54801_54854 = null;
var count__54802_54855 = (0);
var i__54803_54856 = (0);
while(true){
if((i__54803_54856 < count__54802_54855)){
var vec__54810_54857 = cljs.core._nth.call(null,chunk__54801_54854,i__54803_54856);
var j_54858 = cljs.core.nth.call(null,vec__54810_54857,(0),null);
var v_54859 = cljs.core.nth.call(null,vec__54810_54857,(1),null);
dongles.mesh.set3.call(null,dongles.mesh.vertices,(i + (j_54858 * (3))),v_54859);


var G__54860 = seq__54800_54853;
var G__54861 = chunk__54801_54854;
var G__54862 = count__54802_54855;
var G__54863 = (i__54803_54856 + (1));
seq__54800_54853 = G__54860;
chunk__54801_54854 = G__54861;
count__54802_54855 = G__54862;
i__54803_54856 = G__54863;
continue;
} else {
var temp__5720__auto___54864 = cljs.core.seq.call(null,seq__54800_54853);
if(temp__5720__auto___54864){
var seq__54800_54865__$1 = temp__5720__auto___54864;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54800_54865__$1)){
var c__4550__auto___54866 = cljs.core.chunk_first.call(null,seq__54800_54865__$1);
var G__54867 = cljs.core.chunk_rest.call(null,seq__54800_54865__$1);
var G__54868 = c__4550__auto___54866;
var G__54869 = cljs.core.count.call(null,c__4550__auto___54866);
var G__54870 = (0);
seq__54800_54853 = G__54867;
chunk__54801_54854 = G__54868;
count__54802_54855 = G__54869;
i__54803_54856 = G__54870;
continue;
} else {
var vec__54813_54871 = cljs.core.first.call(null,seq__54800_54865__$1);
var j_54872 = cljs.core.nth.call(null,vec__54813_54871,(0),null);
var v_54873 = cljs.core.nth.call(null,vec__54813_54871,(1),null);
dongles.mesh.set3.call(null,dongles.mesh.vertices,(i + (j_54872 * (3))),v_54873);


var G__54874 = cljs.core.next.call(null,seq__54800_54865__$1);
var G__54875 = null;
var G__54876 = (0);
var G__54877 = (0);
seq__54800_54853 = G__54874;
chunk__54801_54854 = G__54875;
count__54802_54855 = G__54876;
i__54803_54856 = G__54877;
continue;
}
} else {
}
}
break;
}

var first_face_normal_54878 = dongles.mesh.v3.call(null,cljs.core.nth.call(null,vs4x3,(1))).sub(dongles.mesh.v3.call(null,cljs.core.nth.call(null,vs4x3,(0)))).cross(dongles.mesh.v3.call(null,cljs.core.nth.call(null,vs4x3,(2))).sub(dongles.mesh.v3.call(null,cljs.core.nth.call(null,vs4x3,(0))))).normalize();
var second_face_normal_54879 = dongles.mesh.v3.call(null,cljs.core.nth.call(null,vs4x3,(3))).sub(dongles.mesh.v3.call(null,cljs.core.nth.call(null,vs4x3,(1)))).cross(dongles.mesh.v3.call(null,cljs.core.nth.call(null,vs4x3,(2))).sub(dongles.mesh.v3.call(null,cljs.core.nth.call(null,vs4x3,(1))))).normalize();
var between_normal_54880 = (new THREE.Vector3((0),(0),(0))).addVectors(first_face_normal_54878,second_face_normal_54879).divideScalar((2)).normalize();
var seq__54816_54881 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null,(0),(6)),cljs.core.map.call(null,dongles.mesh.v3__GT_arr,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [first_face_normal_54878,between_normal_54880,between_normal_54880,between_normal_54880,second_face_normal_54879,between_normal_54880], null))));
var chunk__54817_54882 = null;
var count__54818_54883 = (0);
var i__54819_54884 = (0);
while(true){
if((i__54819_54884 < count__54818_54883)){
var vec__54826_54885 = cljs.core._nth.call(null,chunk__54817_54882,i__54819_54884);
var j_54886 = cljs.core.nth.call(null,vec__54826_54885,(0),null);
var v_54887 = cljs.core.nth.call(null,vec__54826_54885,(1),null);
dongles.mesh.set3.call(null,dongles.mesh.normals,(i + (j_54886 * (3))),v_54887);


var G__54888 = seq__54816_54881;
var G__54889 = chunk__54817_54882;
var G__54890 = count__54818_54883;
var G__54891 = (i__54819_54884 + (1));
seq__54816_54881 = G__54888;
chunk__54817_54882 = G__54889;
count__54818_54883 = G__54890;
i__54819_54884 = G__54891;
continue;
} else {
var temp__5720__auto___54892 = cljs.core.seq.call(null,seq__54816_54881);
if(temp__5720__auto___54892){
var seq__54816_54893__$1 = temp__5720__auto___54892;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54816_54893__$1)){
var c__4550__auto___54894 = cljs.core.chunk_first.call(null,seq__54816_54893__$1);
var G__54895 = cljs.core.chunk_rest.call(null,seq__54816_54893__$1);
var G__54896 = c__4550__auto___54894;
var G__54897 = cljs.core.count.call(null,c__4550__auto___54894);
var G__54898 = (0);
seq__54816_54881 = G__54895;
chunk__54817_54882 = G__54896;
count__54818_54883 = G__54897;
i__54819_54884 = G__54898;
continue;
} else {
var vec__54829_54899 = cljs.core.first.call(null,seq__54816_54893__$1);
var j_54900 = cljs.core.nth.call(null,vec__54829_54899,(0),null);
var v_54901 = cljs.core.nth.call(null,vec__54829_54899,(1),null);
dongles.mesh.set3.call(null,dongles.mesh.normals,(i + (j_54900 * (3))),v_54901);


var G__54902 = cljs.core.next.call(null,seq__54816_54893__$1);
var G__54903 = null;
var G__54904 = (0);
var G__54905 = (0);
seq__54816_54881 = G__54902;
chunk__54817_54882 = G__54903;
count__54818_54883 = G__54904;
i__54819_54884 = G__54905;
continue;
}
} else {
}
}
break;
}

var seq__54832_54906 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3),(9)], null));
var chunk__54833_54907 = null;
var count__54834_54908 = (0);
var i__54835_54909 = (0);
while(true){
if((i__54835_54909 < count__54834_54908)){
var j_54910 = cljs.core._nth.call(null,chunk__54833_54907,i__54835_54909);
dongles.mesh.set3.call(null,dongles.mesh.colors,(i + j_54910),cljs.core.first.call(null,cs2x3));


var G__54911 = seq__54832_54906;
var G__54912 = chunk__54833_54907;
var G__54913 = count__54834_54908;
var G__54914 = (i__54835_54909 + (1));
seq__54832_54906 = G__54911;
chunk__54833_54907 = G__54912;
count__54834_54908 = G__54913;
i__54835_54909 = G__54914;
continue;
} else {
var temp__5720__auto___54915 = cljs.core.seq.call(null,seq__54832_54906);
if(temp__5720__auto___54915){
var seq__54832_54916__$1 = temp__5720__auto___54915;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54832_54916__$1)){
var c__4550__auto___54917 = cljs.core.chunk_first.call(null,seq__54832_54916__$1);
var G__54918 = cljs.core.chunk_rest.call(null,seq__54832_54916__$1);
var G__54919 = c__4550__auto___54917;
var G__54920 = cljs.core.count.call(null,c__4550__auto___54917);
var G__54921 = (0);
seq__54832_54906 = G__54918;
chunk__54833_54907 = G__54919;
count__54834_54908 = G__54920;
i__54835_54909 = G__54921;
continue;
} else {
var j_54922 = cljs.core.first.call(null,seq__54832_54916__$1);
dongles.mesh.set3.call(null,dongles.mesh.colors,(i + j_54922),cljs.core.first.call(null,cs2x3));


var G__54923 = cljs.core.next.call(null,seq__54832_54916__$1);
var G__54924 = null;
var G__54925 = (0);
var G__54926 = (0);
seq__54832_54906 = G__54923;
chunk__54833_54907 = G__54924;
count__54834_54908 = G__54925;
i__54835_54909 = G__54926;
continue;
}
} else {
}
}
break;
}

var seq__54836 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(12),(15)], null));
var chunk__54837 = null;
var count__54838 = (0);
var i__54839 = (0);
while(true){
if((i__54839 < count__54838)){
var j = cljs.core._nth.call(null,chunk__54837,i__54839);
dongles.mesh.set3.call(null,dongles.mesh.colors,(i + j),cljs.core.last.call(null,cs2x3));


var G__54927 = seq__54836;
var G__54928 = chunk__54837;
var G__54929 = count__54838;
var G__54930 = (i__54839 + (1));
seq__54836 = G__54927;
chunk__54837 = G__54928;
count__54838 = G__54929;
i__54839 = G__54930;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__54836);
if(temp__5720__auto__){
var seq__54836__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54836__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__54836__$1);
var G__54931 = cljs.core.chunk_rest.call(null,seq__54836__$1);
var G__54932 = c__4550__auto__;
var G__54933 = cljs.core.count.call(null,c__4550__auto__);
var G__54934 = (0);
seq__54836 = G__54931;
chunk__54837 = G__54932;
count__54838 = G__54933;
i__54839 = G__54934;
continue;
} else {
var j = cljs.core.first.call(null,seq__54836__$1);
dongles.mesh.set3.call(null,dongles.mesh.colors,(i + j),cljs.core.last.call(null,cs2x3));


var G__54935 = cljs.core.next.call(null,seq__54836__$1);
var G__54936 = null;
var G__54937 = (0);
var G__54938 = (0);
seq__54836 = G__54935;
chunk__54837 = G__54936;
count__54838 = G__54937;
i__54839 = G__54938;
continue;
}
} else {
return null;
}
}
break;
}
});})(vec__54797,state))
;
var add_cubey_54852 = ((function (add_face_54851,vec__54797,state){
return (function (i,p__54840,cs2x3){
var vec__54841 = p__54840;
var vs_bottom4x3 = cljs.core.nth.call(null,vec__54841,(0),null);
var vs_top4x3 = cljs.core.nth.call(null,vec__54841,(1),null);
var n__4607__auto___54939 = (4);
var j_54940 = (0);
while(true){
if((j_54940 < n__4607__auto___54939)){
add_face_54851.call(null,(i + ((j_54940 * (6)) * (3))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,vs_bottom4x3,j_54940),cljs.core.nth.call(null,vs_bottom4x3,cljs.core.mod.call(null,(j_54940 + (1)),(4))),cljs.core.nth.call(null,vs_top4x3,j_54940),cljs.core.nth.call(null,vs_top4x3,cljs.core.mod.call(null,(j_54940 + (1)),(4)))], null),cs2x3);

var G__54941 = (j_54940 + (1));
j_54940 = G__54941;
continue;
} else {
}
break;
}

add_face_54851.call(null,(i + (((4) * (6)) * (3))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,vs_bottom4x3,(2)),cljs.core.nth.call(null,vs_bottom4x3,(3)),cljs.core.nth.call(null,vs_bottom4x3,(1)),cljs.core.nth.call(null,vs_bottom4x3,(0))], null),cs2x3);

return add_face_54851.call(null,(i + (((5) * (6)) * (3))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,vs_top4x3,(2)),cljs.core.nth.call(null,vs_top4x3,(3)),cljs.core.nth.call(null,vs_top4x3,(1)),cljs.core.nth.call(null,vs_top4x3,(0))], null),cs2x3);
});})(add_face_54851,vec__54797,state))
;
var n__4607__auto___54942 = dongles.mesh.n;
var i_54943 = (0);
while(true){
if((i_54943 < n__4607__auto___54942)){
var a_54944 = (i_54943 * 6.3);
var pos_54945 = ((function (i_54943,a_54944,n__4607__auto___54942,add_face_54851,add_cubey_54852,vec__54797,state){
return (function (j,p__54844){
var vec__54845 = p__54844;
var x = cljs.core.nth.call(null,vec__54845,(0),null);
var y = cljs.core.nth.call(null,vec__54845,(1),null);
var z = cljs.core.nth.call(null,vec__54845,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (THREE.Math.clamp(((t - new cljs.core.Keyword(null,"x-incs-start","x-incs-start",-884262934).cljs$core$IFn$_invoke$arity$1(state)) / new cljs.core.Keyword(null,"x-incs-duration","x-incs-duration",1496693748).cljs$core$IFn$_invoke$arity$1(state)),(0),(1)) * cljs.core.nth.call(null,new cljs.core.Keyword(null,"x-incs","x-incs",1657352393).cljs$core$IFn$_invoke$arity$1(state),((i_54943 * (8)) + j)))),(y + a_54944),(z * (2))], null);
});})(i_54943,a_54944,n__4607__auto___54942,add_face_54851,add_cubey_54852,vec__54797,state))
;
add_cubey_54852.call(null,(((i_54943 * (6)) * (6)) * (3)),cljs.core.partition.call(null,(4),cljs.core.map_indexed.call(null,pos_54945,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-3),(-3),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(-3),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(-3),(-3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-3),(-3),(-3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-3),(3),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3),(-3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-3),(3),(-3)], null)], null))),(function (){var tfn = ((function (i_54943,a_54944,pos_54945,n__4607__auto___54942,add_face_54851,add_cubey_54852,vec__54797,state){
return (function (shift){
return ((function (i_54943,a_54944,pos_54945,n__4607__auto___54942,add_face_54851,add_cubey_54852,vec__54797,state){
return (function (from,to){
return (from + (((i_54943 + shift) / dongles.mesh.n) * (to - from)));
});
;})(i_54943,a_54944,pos_54945,n__4607__auto___54942,add_face_54851,add_cubey_54852,vec__54797,state))
});})(i_54943,a_54944,pos_54945,n__4607__auto___54942,add_face_54851,add_cubey_54852,vec__54797,state))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.call(null,tfn.call(null,(0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.5,0.5], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,0.3,0.6], null)),cljs.core.mapv.call(null,tfn.call(null,(1)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.5,0.5], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,0.3,0.6], null))], null);
})());

var G__54946 = (i_54943 + (1));
i_54943 = G__54946;
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
dongles.mesh.prepare.cljs$lang$applyTo = (function (seq54794){
var G__54795 = cljs.core.first.call(null,seq54794);
var seq54794__$1 = cljs.core.next.call(null,seq54794);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54795,seq54794__$1);
});


//# sourceMappingURL=mesh.js.map?rel=1563044229388
