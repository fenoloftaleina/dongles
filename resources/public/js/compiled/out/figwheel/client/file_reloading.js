// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4131__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27899_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27899_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__27900 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__27901 = null;
var count__27902 = (0);
var i__27903 = (0);
while(true){
if((i__27903 < count__27902)){
var n = cljs.core._nth.call(null,chunk__27901,i__27903);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__27904 = seq__27900;
var G__27905 = chunk__27901;
var G__27906 = count__27902;
var G__27907 = (i__27903 + (1));
seq__27900 = G__27904;
chunk__27901 = G__27905;
count__27902 = G__27906;
i__27903 = G__27907;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__27900);
if(temp__5720__auto__){
var seq__27900__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27900__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__27900__$1);
var G__27908 = cljs.core.chunk_rest.call(null,seq__27900__$1);
var G__27909 = c__4550__auto__;
var G__27910 = cljs.core.count.call(null,c__4550__auto__);
var G__27911 = (0);
seq__27900 = G__27908;
chunk__27901 = G__27909;
count__27902 = G__27910;
i__27903 = G__27911;
continue;
} else {
var n = cljs.core.first.call(null,seq__27900__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__27912 = cljs.core.next.call(null,seq__27900__$1);
var G__27913 = null;
var G__27914 = (0);
var G__27915 = (0);
seq__27900 = G__27912;
chunk__27901 = G__27913;
count__27902 = G__27914;
i__27903 = G__27915;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__27916){
var vec__27917 = p__27916;
var _ = cljs.core.nth.call(null,vec__27917,(0),null);
var v = cljs.core.nth.call(null,vec__27917,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__27920){
var vec__27921 = p__27920;
var k = cljs.core.nth.call(null,vec__27921,(0),null);
var v = cljs.core.nth.call(null,vec__27921,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__27933_27941 = cljs.core.seq.call(null,deps);
var chunk__27934_27942 = null;
var count__27935_27943 = (0);
var i__27936_27944 = (0);
while(true){
if((i__27936_27944 < count__27935_27943)){
var dep_27945 = cljs.core._nth.call(null,chunk__27934_27942,i__27936_27944);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_27945;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_27945));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_27945,(depth + (1)),state);
} else {
}


var G__27946 = seq__27933_27941;
var G__27947 = chunk__27934_27942;
var G__27948 = count__27935_27943;
var G__27949 = (i__27936_27944 + (1));
seq__27933_27941 = G__27946;
chunk__27934_27942 = G__27947;
count__27935_27943 = G__27948;
i__27936_27944 = G__27949;
continue;
} else {
var temp__5720__auto___27950 = cljs.core.seq.call(null,seq__27933_27941);
if(temp__5720__auto___27950){
var seq__27933_27951__$1 = temp__5720__auto___27950;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27933_27951__$1)){
var c__4550__auto___27952 = cljs.core.chunk_first.call(null,seq__27933_27951__$1);
var G__27953 = cljs.core.chunk_rest.call(null,seq__27933_27951__$1);
var G__27954 = c__4550__auto___27952;
var G__27955 = cljs.core.count.call(null,c__4550__auto___27952);
var G__27956 = (0);
seq__27933_27941 = G__27953;
chunk__27934_27942 = G__27954;
count__27935_27943 = G__27955;
i__27936_27944 = G__27956;
continue;
} else {
var dep_27957 = cljs.core.first.call(null,seq__27933_27951__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_27957;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_27957));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_27957,(depth + (1)),state);
} else {
}


var G__27958 = cljs.core.next.call(null,seq__27933_27951__$1);
var G__27959 = null;
var G__27960 = (0);
var G__27961 = (0);
seq__27933_27941 = G__27958;
chunk__27934_27942 = G__27959;
count__27935_27943 = G__27960;
i__27936_27944 = G__27961;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27937){
var vec__27938 = p__27937;
var seq__27939 = cljs.core.seq.call(null,vec__27938);
var first__27940 = cljs.core.first.call(null,seq__27939);
var seq__27939__$1 = cljs.core.next.call(null,seq__27939);
var x = first__27940;
var xs = seq__27939__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__27938,seq__27939,first__27940,seq__27939__$1,x,xs,get_deps__$1){
return (function (p1__27924_SHARP_){
return clojure.set.difference.call(null,p1__27924_SHARP_,x);
});})(vec__27938,seq__27939,first__27940,seq__27939__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__27962 = cljs.core.seq.call(null,provides);
var chunk__27963 = null;
var count__27964 = (0);
var i__27965 = (0);
while(true){
if((i__27965 < count__27964)){
var prov = cljs.core._nth.call(null,chunk__27963,i__27965);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27974_27982 = cljs.core.seq.call(null,requires);
var chunk__27975_27983 = null;
var count__27976_27984 = (0);
var i__27977_27985 = (0);
while(true){
if((i__27977_27985 < count__27976_27984)){
var req_27986 = cljs.core._nth.call(null,chunk__27975_27983,i__27977_27985);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27986,prov);


var G__27987 = seq__27974_27982;
var G__27988 = chunk__27975_27983;
var G__27989 = count__27976_27984;
var G__27990 = (i__27977_27985 + (1));
seq__27974_27982 = G__27987;
chunk__27975_27983 = G__27988;
count__27976_27984 = G__27989;
i__27977_27985 = G__27990;
continue;
} else {
var temp__5720__auto___27991 = cljs.core.seq.call(null,seq__27974_27982);
if(temp__5720__auto___27991){
var seq__27974_27992__$1 = temp__5720__auto___27991;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27974_27992__$1)){
var c__4550__auto___27993 = cljs.core.chunk_first.call(null,seq__27974_27992__$1);
var G__27994 = cljs.core.chunk_rest.call(null,seq__27974_27992__$1);
var G__27995 = c__4550__auto___27993;
var G__27996 = cljs.core.count.call(null,c__4550__auto___27993);
var G__27997 = (0);
seq__27974_27982 = G__27994;
chunk__27975_27983 = G__27995;
count__27976_27984 = G__27996;
i__27977_27985 = G__27997;
continue;
} else {
var req_27998 = cljs.core.first.call(null,seq__27974_27992__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27998,prov);


var G__27999 = cljs.core.next.call(null,seq__27974_27992__$1);
var G__28000 = null;
var G__28001 = (0);
var G__28002 = (0);
seq__27974_27982 = G__27999;
chunk__27975_27983 = G__28000;
count__27976_27984 = G__28001;
i__27977_27985 = G__28002;
continue;
}
} else {
}
}
break;
}


var G__28003 = seq__27962;
var G__28004 = chunk__27963;
var G__28005 = count__27964;
var G__28006 = (i__27965 + (1));
seq__27962 = G__28003;
chunk__27963 = G__28004;
count__27964 = G__28005;
i__27965 = G__28006;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__27962);
if(temp__5720__auto__){
var seq__27962__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27962__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__27962__$1);
var G__28007 = cljs.core.chunk_rest.call(null,seq__27962__$1);
var G__28008 = c__4550__auto__;
var G__28009 = cljs.core.count.call(null,c__4550__auto__);
var G__28010 = (0);
seq__27962 = G__28007;
chunk__27963 = G__28008;
count__27964 = G__28009;
i__27965 = G__28010;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27962__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27978_28011 = cljs.core.seq.call(null,requires);
var chunk__27979_28012 = null;
var count__27980_28013 = (0);
var i__27981_28014 = (0);
while(true){
if((i__27981_28014 < count__27980_28013)){
var req_28015 = cljs.core._nth.call(null,chunk__27979_28012,i__27981_28014);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28015,prov);


var G__28016 = seq__27978_28011;
var G__28017 = chunk__27979_28012;
var G__28018 = count__27980_28013;
var G__28019 = (i__27981_28014 + (1));
seq__27978_28011 = G__28016;
chunk__27979_28012 = G__28017;
count__27980_28013 = G__28018;
i__27981_28014 = G__28019;
continue;
} else {
var temp__5720__auto___28020__$1 = cljs.core.seq.call(null,seq__27978_28011);
if(temp__5720__auto___28020__$1){
var seq__27978_28021__$1 = temp__5720__auto___28020__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27978_28021__$1)){
var c__4550__auto___28022 = cljs.core.chunk_first.call(null,seq__27978_28021__$1);
var G__28023 = cljs.core.chunk_rest.call(null,seq__27978_28021__$1);
var G__28024 = c__4550__auto___28022;
var G__28025 = cljs.core.count.call(null,c__4550__auto___28022);
var G__28026 = (0);
seq__27978_28011 = G__28023;
chunk__27979_28012 = G__28024;
count__27980_28013 = G__28025;
i__27981_28014 = G__28026;
continue;
} else {
var req_28027 = cljs.core.first.call(null,seq__27978_28021__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28027,prov);


var G__28028 = cljs.core.next.call(null,seq__27978_28021__$1);
var G__28029 = null;
var G__28030 = (0);
var G__28031 = (0);
seq__27978_28011 = G__28028;
chunk__27979_28012 = G__28029;
count__27980_28013 = G__28030;
i__27981_28014 = G__28031;
continue;
}
} else {
}
}
break;
}


var G__28032 = cljs.core.next.call(null,seq__27962__$1);
var G__28033 = null;
var G__28034 = (0);
var G__28035 = (0);
seq__27962 = G__28032;
chunk__27963 = G__28033;
count__27964 = G__28034;
i__27965 = G__28035;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__28036_28040 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28037_28041 = null;
var count__28038_28042 = (0);
var i__28039_28043 = (0);
while(true){
if((i__28039_28043 < count__28038_28042)){
var ns_28044 = cljs.core._nth.call(null,chunk__28037_28041,i__28039_28043);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28044);


var G__28045 = seq__28036_28040;
var G__28046 = chunk__28037_28041;
var G__28047 = count__28038_28042;
var G__28048 = (i__28039_28043 + (1));
seq__28036_28040 = G__28045;
chunk__28037_28041 = G__28046;
count__28038_28042 = G__28047;
i__28039_28043 = G__28048;
continue;
} else {
var temp__5720__auto___28049 = cljs.core.seq.call(null,seq__28036_28040);
if(temp__5720__auto___28049){
var seq__28036_28050__$1 = temp__5720__auto___28049;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28036_28050__$1)){
var c__4550__auto___28051 = cljs.core.chunk_first.call(null,seq__28036_28050__$1);
var G__28052 = cljs.core.chunk_rest.call(null,seq__28036_28050__$1);
var G__28053 = c__4550__auto___28051;
var G__28054 = cljs.core.count.call(null,c__4550__auto___28051);
var G__28055 = (0);
seq__28036_28040 = G__28052;
chunk__28037_28041 = G__28053;
count__28038_28042 = G__28054;
i__28039_28043 = G__28055;
continue;
} else {
var ns_28056 = cljs.core.first.call(null,seq__28036_28050__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28056);


var G__28057 = cljs.core.next.call(null,seq__28036_28050__$1);
var G__28058 = null;
var G__28059 = (0);
var G__28060 = (0);
seq__28036_28040 = G__28057;
chunk__28037_28041 = G__28058;
count__28038_28042 = G__28059;
i__28039_28043 = G__28060;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4131__auto__ = goog.require__;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__28061__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28061 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28062__i = 0, G__28062__a = new Array(arguments.length -  0);
while (G__28062__i < G__28062__a.length) {G__28062__a[G__28062__i] = arguments[G__28062__i + 0]; ++G__28062__i;}
  args = new cljs.core.IndexedSeq(G__28062__a,0,null);
} 
return G__28061__delegate.call(this,args);};
G__28061.cljs$lang$maxFixedArity = 0;
G__28061.cljs$lang$applyTo = (function (arglist__28063){
var args = cljs.core.seq(arglist__28063);
return G__28061__delegate(args);
});
G__28061.cljs$core$IFn$_invoke$arity$variadic = G__28061__delegate;
return G__28061;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__28064_SHARP_,p2__28065_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28064_SHARP_)),p2__28065_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__28066_SHARP_,p2__28067_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28066_SHARP_),p2__28067_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__28068 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__28068.addCallback(((function (G__28068){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__28068))
);

G__28068.addErrback(((function (G__28068){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__28068))
);

return G__28068;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e28069){if((e28069 instanceof Error)){
var e = e28069;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28069;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e28070){if((e28070 instanceof Error)){
var e = e28070;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28070;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28071 = cljs.core._EQ_;
var expr__28072 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28071.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28072))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__28071.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28072))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__28071.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__28072))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__28071,expr__28072){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__28071,expr__28072))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28074,callback){
var map__28075 = p__28074;
var map__28075__$1 = (((((!((map__28075 == null))))?(((((map__28075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28075):map__28075);
var file_msg = map__28075__$1;
var request_url = cljs.core.get.call(null,map__28075__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__28075,map__28075__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28075,map__28075__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__25785__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25785__auto__){
return (function (){
var f__25786__auto__ = (function (){var switch__25690__auto__ = ((function (c__25785__auto__){
return (function (state_28113){
var state_val_28114 = (state_28113[(1)]);
if((state_val_28114 === (7))){
var inst_28109 = (state_28113[(2)]);
var state_28113__$1 = state_28113;
var statearr_28115_28141 = state_28113__$1;
(statearr_28115_28141[(2)] = inst_28109);

(statearr_28115_28141[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28114 === (1))){
var state_28113__$1 = state_28113;
var statearr_28116_28142 = state_28113__$1;
(statearr_28116_28142[(2)] = null);

(statearr_28116_28142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28114 === (4))){
var inst_28079 = (state_28113[(7)]);
var inst_28079__$1 = (state_28113[(2)]);
var state_28113__$1 = (function (){var statearr_28117 = state_28113;
(statearr_28117[(7)] = inst_28079__$1);

return statearr_28117;
})();
if(cljs.core.truth_(inst_28079__$1)){
var statearr_28118_28143 = state_28113__$1;
(statearr_28118_28143[(1)] = (5));

} else {
var statearr_28119_28144 = state_28113__$1;
(statearr_28119_28144[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28114 === (15))){
var inst_28092 = (state_28113[(8)]);
var inst_28094 = (state_28113[(9)]);
var inst_28096 = inst_28094.call(null,inst_28092);
var state_28113__$1 = state_28113;
var statearr_28120_28145 = state_28113__$1;
(statearr_28120_28145[(2)] = inst_28096);

(statearr_28120_28145[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28114 === (13))){
var inst_28103 = (state_28113[(2)]);
var state_28113__$1 = state_28113;
var statearr_28121_28146 = state_28113__$1;
(statearr_28121_28146[(2)] = inst_28103);

(statearr_28121_28146[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28114 === (6))){
var state_28113__$1 = state_28113;
var statearr_28122_28147 = state_28113__$1;
(statearr_28122_28147[(2)] = null);

(statearr_28122_28147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28114 === (17))){
var inst_28100 = (state_28113[(2)]);
var state_28113__$1 = state_28113;
var statearr_28123_28148 = state_28113__$1;
(statearr_28123_28148[(2)] = inst_28100);

(statearr_28123_28148[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28114 === (3))){
var inst_28111 = (state_28113[(2)]);
var state_28113__$1 = state_28113;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28113__$1,inst_28111);
} else {
if((state_val_28114 === (12))){
var state_28113__$1 = state_28113;
var statearr_28124_28149 = state_28113__$1;
(statearr_28124_28149[(2)] = null);

(statearr_28124_28149[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28114 === (2))){
var state_28113__$1 = state_28113;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28113__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28114 === (11))){
var inst_28084 = (state_28113[(10)]);
var inst_28090 = figwheel.client.file_reloading.blocking_load.call(null,inst_28084);
var state_28113__$1 = state_28113;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28113__$1,(14),inst_28090);
} else {
if((state_val_28114 === (9))){
var inst_28084 = (state_28113[(10)]);
var state_28113__$1 = state_28113;
if(cljs.core.truth_(inst_28084)){
var statearr_28125_28150 = state_28113__$1;
(statearr_28125_28150[(1)] = (11));

} else {
var statearr_28126_28151 = state_28113__$1;
(statearr_28126_28151[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28114 === (5))){
var inst_28085 = (state_28113[(11)]);
var inst_28079 = (state_28113[(7)]);
var inst_28084 = cljs.core.nth.call(null,inst_28079,(0),null);
var inst_28085__$1 = cljs.core.nth.call(null,inst_28079,(1),null);
var state_28113__$1 = (function (){var statearr_28127 = state_28113;
(statearr_28127[(10)] = inst_28084);

(statearr_28127[(11)] = inst_28085__$1);

return statearr_28127;
})();
if(cljs.core.truth_(inst_28085__$1)){
var statearr_28128_28152 = state_28113__$1;
(statearr_28128_28152[(1)] = (8));

} else {
var statearr_28129_28153 = state_28113__$1;
(statearr_28129_28153[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28114 === (14))){
var inst_28084 = (state_28113[(10)]);
var inst_28094 = (state_28113[(9)]);
var inst_28092 = (state_28113[(2)]);
var inst_28093 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28094__$1 = cljs.core.get.call(null,inst_28093,inst_28084);
var state_28113__$1 = (function (){var statearr_28130 = state_28113;
(statearr_28130[(8)] = inst_28092);

(statearr_28130[(9)] = inst_28094__$1);

return statearr_28130;
})();
if(cljs.core.truth_(inst_28094__$1)){
var statearr_28131_28154 = state_28113__$1;
(statearr_28131_28154[(1)] = (15));

} else {
var statearr_28132_28155 = state_28113__$1;
(statearr_28132_28155[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28114 === (16))){
var inst_28092 = (state_28113[(8)]);
var inst_28098 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28092);
var state_28113__$1 = state_28113;
var statearr_28133_28156 = state_28113__$1;
(statearr_28133_28156[(2)] = inst_28098);

(statearr_28133_28156[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28114 === (10))){
var inst_28105 = (state_28113[(2)]);
var state_28113__$1 = (function (){var statearr_28134 = state_28113;
(statearr_28134[(12)] = inst_28105);

return statearr_28134;
})();
var statearr_28135_28157 = state_28113__$1;
(statearr_28135_28157[(2)] = null);

(statearr_28135_28157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28114 === (8))){
var inst_28085 = (state_28113[(11)]);
var inst_28087 = eval(inst_28085);
var state_28113__$1 = state_28113;
var statearr_28136_28158 = state_28113__$1;
(statearr_28136_28158[(2)] = inst_28087);

(statearr_28136_28158[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25785__auto__))
;
return ((function (switch__25690__auto__,c__25785__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__25691__auto__ = null;
var figwheel$client$file_reloading$state_machine__25691__auto____0 = (function (){
var statearr_28137 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28137[(0)] = figwheel$client$file_reloading$state_machine__25691__auto__);

(statearr_28137[(1)] = (1));

return statearr_28137;
});
var figwheel$client$file_reloading$state_machine__25691__auto____1 = (function (state_28113){
while(true){
var ret_value__25692__auto__ = (function (){try{while(true){
var result__25693__auto__ = switch__25690__auto__.call(null,state_28113);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25693__auto__;
}
break;
}
}catch (e28138){if((e28138 instanceof Object)){
var ex__25694__auto__ = e28138;
var statearr_28139_28159 = state_28113;
(statearr_28139_28159[(5)] = ex__25694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28113);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28160 = state_28113;
state_28113 = G__28160;
continue;
} else {
return ret_value__25692__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__25691__auto__ = function(state_28113){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__25691__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__25691__auto____1.call(this,state_28113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__25691__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__25691__auto____0;
figwheel$client$file_reloading$state_machine__25691__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__25691__auto____1;
return figwheel$client$file_reloading$state_machine__25691__auto__;
})()
;})(switch__25690__auto__,c__25785__auto__))
})();
var state__25787__auto__ = (function (){var statearr_28140 = f__25786__auto__.call(null);
(statearr_28140[(6)] = c__25785__auto__);

return statearr_28140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25787__auto__);
});})(c__25785__auto__))
);

return c__25785__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__28162 = arguments.length;
switch (G__28162) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28164,callback){
var map__28165 = p__28164;
var map__28165__$1 = (((((!((map__28165 == null))))?(((((map__28165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28165):map__28165);
var file_msg = map__28165__$1;
var namespace = cljs.core.get.call(null,map__28165__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__28165,map__28165__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__28165,map__28165__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__28167){
var map__28168 = p__28167;
var map__28168__$1 = (((((!((map__28168 == null))))?(((((map__28168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28168):map__28168);
var file_msg = map__28168__$1;
var namespace = cljs.core.get.call(null,map__28168__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28170){
var map__28171 = p__28170;
var map__28171__$1 = (((((!((map__28171 == null))))?(((((map__28171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28171):map__28171);
var file_msg = map__28171__$1;
var namespace = cljs.core.get.call(null,map__28171__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4120__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4120__auto__){
var or__4131__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4120__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28173,callback){
var map__28174 = p__28173;
var map__28174__$1 = (((((!((map__28174 == null))))?(((((map__28174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28174):map__28174);
var file_msg = map__28174__$1;
var request_url = cljs.core.get.call(null,map__28174__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28174__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__25785__auto___28224 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25785__auto___28224,out){
return (function (){
var f__25786__auto__ = (function (){var switch__25690__auto__ = ((function (c__25785__auto___28224,out){
return (function (state_28209){
var state_val_28210 = (state_28209[(1)]);
if((state_val_28210 === (1))){
var inst_28183 = cljs.core.seq.call(null,files);
var inst_28184 = cljs.core.first.call(null,inst_28183);
var inst_28185 = cljs.core.next.call(null,inst_28183);
var inst_28186 = files;
var state_28209__$1 = (function (){var statearr_28211 = state_28209;
(statearr_28211[(7)] = inst_28185);

(statearr_28211[(8)] = inst_28186);

(statearr_28211[(9)] = inst_28184);

return statearr_28211;
})();
var statearr_28212_28225 = state_28209__$1;
(statearr_28212_28225[(2)] = null);

(statearr_28212_28225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28210 === (2))){
var inst_28186 = (state_28209[(8)]);
var inst_28192 = (state_28209[(10)]);
var inst_28191 = cljs.core.seq.call(null,inst_28186);
var inst_28192__$1 = cljs.core.first.call(null,inst_28191);
var inst_28193 = cljs.core.next.call(null,inst_28191);
var inst_28194 = (inst_28192__$1 == null);
var inst_28195 = cljs.core.not.call(null,inst_28194);
var state_28209__$1 = (function (){var statearr_28213 = state_28209;
(statearr_28213[(11)] = inst_28193);

(statearr_28213[(10)] = inst_28192__$1);

return statearr_28213;
})();
if(inst_28195){
var statearr_28214_28226 = state_28209__$1;
(statearr_28214_28226[(1)] = (4));

} else {
var statearr_28215_28227 = state_28209__$1;
(statearr_28215_28227[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28210 === (3))){
var inst_28207 = (state_28209[(2)]);
var state_28209__$1 = state_28209;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28209__$1,inst_28207);
} else {
if((state_val_28210 === (4))){
var inst_28192 = (state_28209[(10)]);
var inst_28197 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28192);
var state_28209__$1 = state_28209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28209__$1,(7),inst_28197);
} else {
if((state_val_28210 === (5))){
var inst_28203 = cljs.core.async.close_BANG_.call(null,out);
var state_28209__$1 = state_28209;
var statearr_28216_28228 = state_28209__$1;
(statearr_28216_28228[(2)] = inst_28203);

(statearr_28216_28228[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28210 === (6))){
var inst_28205 = (state_28209[(2)]);
var state_28209__$1 = state_28209;
var statearr_28217_28229 = state_28209__$1;
(statearr_28217_28229[(2)] = inst_28205);

(statearr_28217_28229[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28210 === (7))){
var inst_28193 = (state_28209[(11)]);
var inst_28199 = (state_28209[(2)]);
var inst_28200 = cljs.core.async.put_BANG_.call(null,out,inst_28199);
var inst_28186 = inst_28193;
var state_28209__$1 = (function (){var statearr_28218 = state_28209;
(statearr_28218[(8)] = inst_28186);

(statearr_28218[(12)] = inst_28200);

return statearr_28218;
})();
var statearr_28219_28230 = state_28209__$1;
(statearr_28219_28230[(2)] = null);

(statearr_28219_28230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__25785__auto___28224,out))
;
return ((function (switch__25690__auto__,c__25785__auto___28224,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25691__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25691__auto____0 = (function (){
var statearr_28220 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28220[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25691__auto__);

(statearr_28220[(1)] = (1));

return statearr_28220;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25691__auto____1 = (function (state_28209){
while(true){
var ret_value__25692__auto__ = (function (){try{while(true){
var result__25693__auto__ = switch__25690__auto__.call(null,state_28209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25693__auto__;
}
break;
}
}catch (e28221){if((e28221 instanceof Object)){
var ex__25694__auto__ = e28221;
var statearr_28222_28231 = state_28209;
(statearr_28222_28231[(5)] = ex__25694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28221;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28232 = state_28209;
state_28209 = G__28232;
continue;
} else {
return ret_value__25692__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25691__auto__ = function(state_28209){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25691__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25691__auto____1.call(this,state_28209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25691__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25691__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25691__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25691__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25691__auto__;
})()
;})(switch__25690__auto__,c__25785__auto___28224,out))
})();
var state__25787__auto__ = (function (){var statearr_28223 = f__25786__auto__.call(null);
(statearr_28223[(6)] = c__25785__auto___28224);

return statearr_28223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25787__auto__);
});})(c__25785__auto___28224,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28233,opts){
var map__28234 = p__28233;
var map__28234__$1 = (((((!((map__28234 == null))))?(((((map__28234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28234):map__28234);
var eval_body = cljs.core.get.call(null,map__28234__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28234__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4120__auto__ = eval_body;
if(cljs.core.truth_(and__4120__auto__)){
return typeof eval_body === 'string';
} else {
return and__4120__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e28236){var e = e28236;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__28237_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28237_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5718__auto__)){
var file_msg = temp__5718__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__28238){
var vec__28239 = p__28238;
var k = cljs.core.nth.call(null,vec__28239,(0),null);
var v = cljs.core.nth.call(null,vec__28239,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28242){
var vec__28243 = p__28242;
var k = cljs.core.nth.call(null,vec__28243,(0),null);
var v = cljs.core.nth.call(null,vec__28243,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28249,p__28250){
var map__28251 = p__28249;
var map__28251__$1 = (((((!((map__28251 == null))))?(((((map__28251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28251):map__28251);
var opts = map__28251__$1;
var before_jsload = cljs.core.get.call(null,map__28251__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28251__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28251__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28252 = p__28250;
var map__28252__$1 = (((((!((map__28252 == null))))?(((((map__28252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28252):map__28252);
var msg = map__28252__$1;
var files = cljs.core.get.call(null,map__28252__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28252__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28252__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__25785__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25785__auto__,map__28251,map__28251__$1,opts,before_jsload,on_jsload,reload_dependents,map__28252,map__28252__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__25786__auto__ = (function (){var switch__25690__auto__ = ((function (c__25785__auto__,map__28251,map__28251__$1,opts,before_jsload,on_jsload,reload_dependents,map__28252,map__28252__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_28406){
var state_val_28407 = (state_28406[(1)]);
if((state_val_28407 === (7))){
var inst_28268 = (state_28406[(7)]);
var inst_28269 = (state_28406[(8)]);
var inst_28267 = (state_28406[(9)]);
var inst_28266 = (state_28406[(10)]);
var inst_28274 = cljs.core._nth.call(null,inst_28267,inst_28269);
var inst_28275 = figwheel.client.file_reloading.eval_body.call(null,inst_28274,opts);
var inst_28276 = (inst_28269 + (1));
var tmp28408 = inst_28268;
var tmp28409 = inst_28267;
var tmp28410 = inst_28266;
var inst_28266__$1 = tmp28410;
var inst_28267__$1 = tmp28409;
var inst_28268__$1 = tmp28408;
var inst_28269__$1 = inst_28276;
var state_28406__$1 = (function (){var statearr_28411 = state_28406;
(statearr_28411[(7)] = inst_28268__$1);

(statearr_28411[(8)] = inst_28269__$1);

(statearr_28411[(9)] = inst_28267__$1);

(statearr_28411[(11)] = inst_28275);

(statearr_28411[(10)] = inst_28266__$1);

return statearr_28411;
})();
var statearr_28412_28495 = state_28406__$1;
(statearr_28412_28495[(2)] = null);

(statearr_28412_28495[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (20))){
var inst_28309 = (state_28406[(12)]);
var inst_28317 = figwheel.client.file_reloading.sort_files.call(null,inst_28309);
var state_28406__$1 = state_28406;
var statearr_28413_28496 = state_28406__$1;
(statearr_28413_28496[(2)] = inst_28317);

(statearr_28413_28496[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (27))){
var state_28406__$1 = state_28406;
var statearr_28414_28497 = state_28406__$1;
(statearr_28414_28497[(2)] = null);

(statearr_28414_28497[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (1))){
var inst_28258 = (state_28406[(13)]);
var inst_28255 = before_jsload.call(null,files);
var inst_28256 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28257 = (function (){return ((function (inst_28258,inst_28255,inst_28256,state_val_28407,c__25785__auto__,map__28251,map__28251__$1,opts,before_jsload,on_jsload,reload_dependents,map__28252,map__28252__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28246_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28246_SHARP_);
});
;})(inst_28258,inst_28255,inst_28256,state_val_28407,c__25785__auto__,map__28251,map__28251__$1,opts,before_jsload,on_jsload,reload_dependents,map__28252,map__28252__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28258__$1 = cljs.core.filter.call(null,inst_28257,files);
var inst_28259 = cljs.core.not_empty.call(null,inst_28258__$1);
var state_28406__$1 = (function (){var statearr_28415 = state_28406;
(statearr_28415[(13)] = inst_28258__$1);

(statearr_28415[(14)] = inst_28256);

(statearr_28415[(15)] = inst_28255);

return statearr_28415;
})();
if(cljs.core.truth_(inst_28259)){
var statearr_28416_28498 = state_28406__$1;
(statearr_28416_28498[(1)] = (2));

} else {
var statearr_28417_28499 = state_28406__$1;
(statearr_28417_28499[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (24))){
var state_28406__$1 = state_28406;
var statearr_28418_28500 = state_28406__$1;
(statearr_28418_28500[(2)] = null);

(statearr_28418_28500[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (39))){
var inst_28359 = (state_28406[(16)]);
var state_28406__$1 = state_28406;
var statearr_28419_28501 = state_28406__$1;
(statearr_28419_28501[(2)] = inst_28359);

(statearr_28419_28501[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (46))){
var inst_28401 = (state_28406[(2)]);
var state_28406__$1 = state_28406;
var statearr_28420_28502 = state_28406__$1;
(statearr_28420_28502[(2)] = inst_28401);

(statearr_28420_28502[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (4))){
var inst_28303 = (state_28406[(2)]);
var inst_28304 = cljs.core.List.EMPTY;
var inst_28305 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_28304);
var inst_28306 = (function (){return ((function (inst_28303,inst_28304,inst_28305,state_val_28407,c__25785__auto__,map__28251,map__28251__$1,opts,before_jsload,on_jsload,reload_dependents,map__28252,map__28252__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28247_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28247_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28247_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__28247_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_28303,inst_28304,inst_28305,state_val_28407,c__25785__auto__,map__28251,map__28251__$1,opts,before_jsload,on_jsload,reload_dependents,map__28252,map__28252__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28307 = cljs.core.filter.call(null,inst_28306,files);
var inst_28308 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_28309 = cljs.core.concat.call(null,inst_28307,inst_28308);
var state_28406__$1 = (function (){var statearr_28421 = state_28406;
(statearr_28421[(17)] = inst_28303);

(statearr_28421[(18)] = inst_28305);

(statearr_28421[(12)] = inst_28309);

return statearr_28421;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_28422_28503 = state_28406__$1;
(statearr_28422_28503[(1)] = (16));

} else {
var statearr_28423_28504 = state_28406__$1;
(statearr_28423_28504[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (15))){
var inst_28293 = (state_28406[(2)]);
var state_28406__$1 = state_28406;
var statearr_28424_28505 = state_28406__$1;
(statearr_28424_28505[(2)] = inst_28293);

(statearr_28424_28505[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (21))){
var inst_28319 = (state_28406[(19)]);
var inst_28319__$1 = (state_28406[(2)]);
var inst_28320 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28319__$1);
var state_28406__$1 = (function (){var statearr_28425 = state_28406;
(statearr_28425[(19)] = inst_28319__$1);

return statearr_28425;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28406__$1,(22),inst_28320);
} else {
if((state_val_28407 === (31))){
var inst_28404 = (state_28406[(2)]);
var state_28406__$1 = state_28406;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28406__$1,inst_28404);
} else {
if((state_val_28407 === (32))){
var inst_28359 = (state_28406[(16)]);
var inst_28364 = inst_28359.cljs$lang$protocol_mask$partition0$;
var inst_28365 = (inst_28364 & (64));
var inst_28366 = inst_28359.cljs$core$ISeq$;
var inst_28367 = (cljs.core.PROTOCOL_SENTINEL === inst_28366);
var inst_28368 = ((inst_28365) || (inst_28367));
var state_28406__$1 = state_28406;
if(cljs.core.truth_(inst_28368)){
var statearr_28426_28506 = state_28406__$1;
(statearr_28426_28506[(1)] = (35));

} else {
var statearr_28427_28507 = state_28406__$1;
(statearr_28427_28507[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (40))){
var inst_28381 = (state_28406[(20)]);
var inst_28380 = (state_28406[(2)]);
var inst_28381__$1 = cljs.core.get.call(null,inst_28380,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28382 = cljs.core.get.call(null,inst_28380,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28383 = cljs.core.not_empty.call(null,inst_28381__$1);
var state_28406__$1 = (function (){var statearr_28428 = state_28406;
(statearr_28428[(21)] = inst_28382);

(statearr_28428[(20)] = inst_28381__$1);

return statearr_28428;
})();
if(cljs.core.truth_(inst_28383)){
var statearr_28429_28508 = state_28406__$1;
(statearr_28429_28508[(1)] = (41));

} else {
var statearr_28430_28509 = state_28406__$1;
(statearr_28430_28509[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (33))){
var state_28406__$1 = state_28406;
var statearr_28431_28510 = state_28406__$1;
(statearr_28431_28510[(2)] = false);

(statearr_28431_28510[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (13))){
var inst_28279 = (state_28406[(22)]);
var inst_28283 = cljs.core.chunk_first.call(null,inst_28279);
var inst_28284 = cljs.core.chunk_rest.call(null,inst_28279);
var inst_28285 = cljs.core.count.call(null,inst_28283);
var inst_28266 = inst_28284;
var inst_28267 = inst_28283;
var inst_28268 = inst_28285;
var inst_28269 = (0);
var state_28406__$1 = (function (){var statearr_28432 = state_28406;
(statearr_28432[(7)] = inst_28268);

(statearr_28432[(8)] = inst_28269);

(statearr_28432[(9)] = inst_28267);

(statearr_28432[(10)] = inst_28266);

return statearr_28432;
})();
var statearr_28433_28511 = state_28406__$1;
(statearr_28433_28511[(2)] = null);

(statearr_28433_28511[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (22))){
var inst_28327 = (state_28406[(23)]);
var inst_28323 = (state_28406[(24)]);
var inst_28322 = (state_28406[(25)]);
var inst_28319 = (state_28406[(19)]);
var inst_28322__$1 = (state_28406[(2)]);
var inst_28323__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28322__$1);
var inst_28324 = (function (){var all_files = inst_28319;
var res_SINGLEQUOTE_ = inst_28322__$1;
var res = inst_28323__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_28327,inst_28323,inst_28322,inst_28319,inst_28322__$1,inst_28323__$1,state_val_28407,c__25785__auto__,map__28251,map__28251__$1,opts,before_jsload,on_jsload,reload_dependents,map__28252,map__28252__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28248_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28248_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_28327,inst_28323,inst_28322,inst_28319,inst_28322__$1,inst_28323__$1,state_val_28407,c__25785__auto__,map__28251,map__28251__$1,opts,before_jsload,on_jsload,reload_dependents,map__28252,map__28252__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28325 = cljs.core.filter.call(null,inst_28324,inst_28322__$1);
var inst_28326 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_28327__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28326);
var inst_28328 = cljs.core.not_empty.call(null,inst_28327__$1);
var state_28406__$1 = (function (){var statearr_28434 = state_28406;
(statearr_28434[(23)] = inst_28327__$1);

(statearr_28434[(24)] = inst_28323__$1);

(statearr_28434[(25)] = inst_28322__$1);

(statearr_28434[(26)] = inst_28325);

return statearr_28434;
})();
if(cljs.core.truth_(inst_28328)){
var statearr_28435_28512 = state_28406__$1;
(statearr_28435_28512[(1)] = (23));

} else {
var statearr_28436_28513 = state_28406__$1;
(statearr_28436_28513[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (36))){
var state_28406__$1 = state_28406;
var statearr_28437_28514 = state_28406__$1;
(statearr_28437_28514[(2)] = false);

(statearr_28437_28514[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (41))){
var inst_28381 = (state_28406[(20)]);
var inst_28385 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_28386 = cljs.core.map.call(null,inst_28385,inst_28381);
var inst_28387 = cljs.core.pr_str.call(null,inst_28386);
var inst_28388 = ["figwheel-no-load meta-data: ",inst_28387].join('');
var inst_28389 = figwheel.client.utils.log.call(null,inst_28388);
var state_28406__$1 = state_28406;
var statearr_28438_28515 = state_28406__$1;
(statearr_28438_28515[(2)] = inst_28389);

(statearr_28438_28515[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (43))){
var inst_28382 = (state_28406[(21)]);
var inst_28392 = (state_28406[(2)]);
var inst_28393 = cljs.core.not_empty.call(null,inst_28382);
var state_28406__$1 = (function (){var statearr_28439 = state_28406;
(statearr_28439[(27)] = inst_28392);

return statearr_28439;
})();
if(cljs.core.truth_(inst_28393)){
var statearr_28440_28516 = state_28406__$1;
(statearr_28440_28516[(1)] = (44));

} else {
var statearr_28441_28517 = state_28406__$1;
(statearr_28441_28517[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (29))){
var inst_28327 = (state_28406[(23)]);
var inst_28323 = (state_28406[(24)]);
var inst_28322 = (state_28406[(25)]);
var inst_28325 = (state_28406[(26)]);
var inst_28319 = (state_28406[(19)]);
var inst_28359 = (state_28406[(16)]);
var inst_28355 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28358 = (function (){var all_files = inst_28319;
var res_SINGLEQUOTE_ = inst_28322;
var res = inst_28323;
var files_not_loaded = inst_28325;
var dependencies_that_loaded = inst_28327;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28327,inst_28323,inst_28322,inst_28325,inst_28319,inst_28359,inst_28355,state_val_28407,c__25785__auto__,map__28251,map__28251__$1,opts,before_jsload,on_jsload,reload_dependents,map__28252,map__28252__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28357){
var map__28442 = p__28357;
var map__28442__$1 = (((((!((map__28442 == null))))?(((((map__28442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28442.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28442):map__28442);
var namespace = cljs.core.get.call(null,map__28442__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28327,inst_28323,inst_28322,inst_28325,inst_28319,inst_28359,inst_28355,state_val_28407,c__25785__auto__,map__28251,map__28251__$1,opts,before_jsload,on_jsload,reload_dependents,map__28252,map__28252__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28359__$1 = cljs.core.group_by.call(null,inst_28358,inst_28325);
var inst_28361 = (inst_28359__$1 == null);
var inst_28362 = cljs.core.not.call(null,inst_28361);
var state_28406__$1 = (function (){var statearr_28444 = state_28406;
(statearr_28444[(28)] = inst_28355);

(statearr_28444[(16)] = inst_28359__$1);

return statearr_28444;
})();
if(inst_28362){
var statearr_28445_28518 = state_28406__$1;
(statearr_28445_28518[(1)] = (32));

} else {
var statearr_28446_28519 = state_28406__$1;
(statearr_28446_28519[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (44))){
var inst_28382 = (state_28406[(21)]);
var inst_28395 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28382);
var inst_28396 = cljs.core.pr_str.call(null,inst_28395);
var inst_28397 = ["not required: ",inst_28396].join('');
var inst_28398 = figwheel.client.utils.log.call(null,inst_28397);
var state_28406__$1 = state_28406;
var statearr_28447_28520 = state_28406__$1;
(statearr_28447_28520[(2)] = inst_28398);

(statearr_28447_28520[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (6))){
var inst_28300 = (state_28406[(2)]);
var state_28406__$1 = state_28406;
var statearr_28448_28521 = state_28406__$1;
(statearr_28448_28521[(2)] = inst_28300);

(statearr_28448_28521[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (28))){
var inst_28325 = (state_28406[(26)]);
var inst_28352 = (state_28406[(2)]);
var inst_28353 = cljs.core.not_empty.call(null,inst_28325);
var state_28406__$1 = (function (){var statearr_28449 = state_28406;
(statearr_28449[(29)] = inst_28352);

return statearr_28449;
})();
if(cljs.core.truth_(inst_28353)){
var statearr_28450_28522 = state_28406__$1;
(statearr_28450_28522[(1)] = (29));

} else {
var statearr_28451_28523 = state_28406__$1;
(statearr_28451_28523[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (25))){
var inst_28323 = (state_28406[(24)]);
var inst_28339 = (state_28406[(2)]);
var inst_28340 = cljs.core.not_empty.call(null,inst_28323);
var state_28406__$1 = (function (){var statearr_28452 = state_28406;
(statearr_28452[(30)] = inst_28339);

return statearr_28452;
})();
if(cljs.core.truth_(inst_28340)){
var statearr_28453_28524 = state_28406__$1;
(statearr_28453_28524[(1)] = (26));

} else {
var statearr_28454_28525 = state_28406__$1;
(statearr_28454_28525[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (34))){
var inst_28375 = (state_28406[(2)]);
var state_28406__$1 = state_28406;
if(cljs.core.truth_(inst_28375)){
var statearr_28455_28526 = state_28406__$1;
(statearr_28455_28526[(1)] = (38));

} else {
var statearr_28456_28527 = state_28406__$1;
(statearr_28456_28527[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (17))){
var state_28406__$1 = state_28406;
var statearr_28457_28528 = state_28406__$1;
(statearr_28457_28528[(2)] = recompile_dependents);

(statearr_28457_28528[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (3))){
var state_28406__$1 = state_28406;
var statearr_28458_28529 = state_28406__$1;
(statearr_28458_28529[(2)] = null);

(statearr_28458_28529[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (12))){
var inst_28296 = (state_28406[(2)]);
var state_28406__$1 = state_28406;
var statearr_28459_28530 = state_28406__$1;
(statearr_28459_28530[(2)] = inst_28296);

(statearr_28459_28530[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (2))){
var inst_28258 = (state_28406[(13)]);
var inst_28265 = cljs.core.seq.call(null,inst_28258);
var inst_28266 = inst_28265;
var inst_28267 = null;
var inst_28268 = (0);
var inst_28269 = (0);
var state_28406__$1 = (function (){var statearr_28460 = state_28406;
(statearr_28460[(7)] = inst_28268);

(statearr_28460[(8)] = inst_28269);

(statearr_28460[(9)] = inst_28267);

(statearr_28460[(10)] = inst_28266);

return statearr_28460;
})();
var statearr_28461_28531 = state_28406__$1;
(statearr_28461_28531[(2)] = null);

(statearr_28461_28531[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (23))){
var inst_28327 = (state_28406[(23)]);
var inst_28323 = (state_28406[(24)]);
var inst_28322 = (state_28406[(25)]);
var inst_28325 = (state_28406[(26)]);
var inst_28319 = (state_28406[(19)]);
var inst_28330 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28332 = (function (){var all_files = inst_28319;
var res_SINGLEQUOTE_ = inst_28322;
var res = inst_28323;
var files_not_loaded = inst_28325;
var dependencies_that_loaded = inst_28327;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28327,inst_28323,inst_28322,inst_28325,inst_28319,inst_28330,state_val_28407,c__25785__auto__,map__28251,map__28251__$1,opts,before_jsload,on_jsload,reload_dependents,map__28252,map__28252__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28331){
var map__28462 = p__28331;
var map__28462__$1 = (((((!((map__28462 == null))))?(((((map__28462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28462.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28462):map__28462);
var request_url = cljs.core.get.call(null,map__28462__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28327,inst_28323,inst_28322,inst_28325,inst_28319,inst_28330,state_val_28407,c__25785__auto__,map__28251,map__28251__$1,opts,before_jsload,on_jsload,reload_dependents,map__28252,map__28252__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28333 = cljs.core.reverse.call(null,inst_28327);
var inst_28334 = cljs.core.map.call(null,inst_28332,inst_28333);
var inst_28335 = cljs.core.pr_str.call(null,inst_28334);
var inst_28336 = figwheel.client.utils.log.call(null,inst_28335);
var state_28406__$1 = (function (){var statearr_28464 = state_28406;
(statearr_28464[(31)] = inst_28330);

return statearr_28464;
})();
var statearr_28465_28532 = state_28406__$1;
(statearr_28465_28532[(2)] = inst_28336);

(statearr_28465_28532[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (35))){
var state_28406__$1 = state_28406;
var statearr_28466_28533 = state_28406__$1;
(statearr_28466_28533[(2)] = true);

(statearr_28466_28533[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (19))){
var inst_28309 = (state_28406[(12)]);
var inst_28315 = figwheel.client.file_reloading.expand_files.call(null,inst_28309);
var state_28406__$1 = state_28406;
var statearr_28467_28534 = state_28406__$1;
(statearr_28467_28534[(2)] = inst_28315);

(statearr_28467_28534[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (11))){
var state_28406__$1 = state_28406;
var statearr_28468_28535 = state_28406__$1;
(statearr_28468_28535[(2)] = null);

(statearr_28468_28535[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (9))){
var inst_28298 = (state_28406[(2)]);
var state_28406__$1 = state_28406;
var statearr_28469_28536 = state_28406__$1;
(statearr_28469_28536[(2)] = inst_28298);

(statearr_28469_28536[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (5))){
var inst_28268 = (state_28406[(7)]);
var inst_28269 = (state_28406[(8)]);
var inst_28271 = (inst_28269 < inst_28268);
var inst_28272 = inst_28271;
var state_28406__$1 = state_28406;
if(cljs.core.truth_(inst_28272)){
var statearr_28470_28537 = state_28406__$1;
(statearr_28470_28537[(1)] = (7));

} else {
var statearr_28471_28538 = state_28406__$1;
(statearr_28471_28538[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (14))){
var inst_28279 = (state_28406[(22)]);
var inst_28288 = cljs.core.first.call(null,inst_28279);
var inst_28289 = figwheel.client.file_reloading.eval_body.call(null,inst_28288,opts);
var inst_28290 = cljs.core.next.call(null,inst_28279);
var inst_28266 = inst_28290;
var inst_28267 = null;
var inst_28268 = (0);
var inst_28269 = (0);
var state_28406__$1 = (function (){var statearr_28472 = state_28406;
(statearr_28472[(7)] = inst_28268);

(statearr_28472[(8)] = inst_28269);

(statearr_28472[(9)] = inst_28267);

(statearr_28472[(32)] = inst_28289);

(statearr_28472[(10)] = inst_28266);

return statearr_28472;
})();
var statearr_28473_28539 = state_28406__$1;
(statearr_28473_28539[(2)] = null);

(statearr_28473_28539[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (45))){
var state_28406__$1 = state_28406;
var statearr_28474_28540 = state_28406__$1;
(statearr_28474_28540[(2)] = null);

(statearr_28474_28540[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (26))){
var inst_28327 = (state_28406[(23)]);
var inst_28323 = (state_28406[(24)]);
var inst_28322 = (state_28406[(25)]);
var inst_28325 = (state_28406[(26)]);
var inst_28319 = (state_28406[(19)]);
var inst_28342 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28344 = (function (){var all_files = inst_28319;
var res_SINGLEQUOTE_ = inst_28322;
var res = inst_28323;
var files_not_loaded = inst_28325;
var dependencies_that_loaded = inst_28327;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28327,inst_28323,inst_28322,inst_28325,inst_28319,inst_28342,state_val_28407,c__25785__auto__,map__28251,map__28251__$1,opts,before_jsload,on_jsload,reload_dependents,map__28252,map__28252__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28343){
var map__28475 = p__28343;
var map__28475__$1 = (((((!((map__28475 == null))))?(((((map__28475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28475):map__28475);
var namespace = cljs.core.get.call(null,map__28475__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28475__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28327,inst_28323,inst_28322,inst_28325,inst_28319,inst_28342,state_val_28407,c__25785__auto__,map__28251,map__28251__$1,opts,before_jsload,on_jsload,reload_dependents,map__28252,map__28252__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28345 = cljs.core.map.call(null,inst_28344,inst_28323);
var inst_28346 = cljs.core.pr_str.call(null,inst_28345);
var inst_28347 = figwheel.client.utils.log.call(null,inst_28346);
var inst_28348 = (function (){var all_files = inst_28319;
var res_SINGLEQUOTE_ = inst_28322;
var res = inst_28323;
var files_not_loaded = inst_28325;
var dependencies_that_loaded = inst_28327;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28327,inst_28323,inst_28322,inst_28325,inst_28319,inst_28342,inst_28344,inst_28345,inst_28346,inst_28347,state_val_28407,c__25785__auto__,map__28251,map__28251__$1,opts,before_jsload,on_jsload,reload_dependents,map__28252,map__28252__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28327,inst_28323,inst_28322,inst_28325,inst_28319,inst_28342,inst_28344,inst_28345,inst_28346,inst_28347,state_val_28407,c__25785__auto__,map__28251,map__28251__$1,opts,before_jsload,on_jsload,reload_dependents,map__28252,map__28252__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28349 = setTimeout(inst_28348,(10));
var state_28406__$1 = (function (){var statearr_28477 = state_28406;
(statearr_28477[(33)] = inst_28342);

(statearr_28477[(34)] = inst_28347);

return statearr_28477;
})();
var statearr_28478_28541 = state_28406__$1;
(statearr_28478_28541[(2)] = inst_28349);

(statearr_28478_28541[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (16))){
var state_28406__$1 = state_28406;
var statearr_28479_28542 = state_28406__$1;
(statearr_28479_28542[(2)] = reload_dependents);

(statearr_28479_28542[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (38))){
var inst_28359 = (state_28406[(16)]);
var inst_28377 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28359);
var state_28406__$1 = state_28406;
var statearr_28480_28543 = state_28406__$1;
(statearr_28480_28543[(2)] = inst_28377);

(statearr_28480_28543[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (30))){
var state_28406__$1 = state_28406;
var statearr_28481_28544 = state_28406__$1;
(statearr_28481_28544[(2)] = null);

(statearr_28481_28544[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (10))){
var inst_28279 = (state_28406[(22)]);
var inst_28281 = cljs.core.chunked_seq_QMARK_.call(null,inst_28279);
var state_28406__$1 = state_28406;
if(inst_28281){
var statearr_28482_28545 = state_28406__$1;
(statearr_28482_28545[(1)] = (13));

} else {
var statearr_28483_28546 = state_28406__$1;
(statearr_28483_28546[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (18))){
var inst_28313 = (state_28406[(2)]);
var state_28406__$1 = state_28406;
if(cljs.core.truth_(inst_28313)){
var statearr_28484_28547 = state_28406__$1;
(statearr_28484_28547[(1)] = (19));

} else {
var statearr_28485_28548 = state_28406__$1;
(statearr_28485_28548[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (42))){
var state_28406__$1 = state_28406;
var statearr_28486_28549 = state_28406__$1;
(statearr_28486_28549[(2)] = null);

(statearr_28486_28549[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (37))){
var inst_28372 = (state_28406[(2)]);
var state_28406__$1 = state_28406;
var statearr_28487_28550 = state_28406__$1;
(statearr_28487_28550[(2)] = inst_28372);

(statearr_28487_28550[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (8))){
var inst_28279 = (state_28406[(22)]);
var inst_28266 = (state_28406[(10)]);
var inst_28279__$1 = cljs.core.seq.call(null,inst_28266);
var state_28406__$1 = (function (){var statearr_28488 = state_28406;
(statearr_28488[(22)] = inst_28279__$1);

return statearr_28488;
})();
if(inst_28279__$1){
var statearr_28489_28551 = state_28406__$1;
(statearr_28489_28551[(1)] = (10));

} else {
var statearr_28490_28552 = state_28406__$1;
(statearr_28490_28552[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25785__auto__,map__28251,map__28251__$1,opts,before_jsload,on_jsload,reload_dependents,map__28252,map__28252__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__25690__auto__,c__25785__auto__,map__28251,map__28251__$1,opts,before_jsload,on_jsload,reload_dependents,map__28252,map__28252__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25691__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25691__auto____0 = (function (){
var statearr_28491 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28491[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__25691__auto__);

(statearr_28491[(1)] = (1));

return statearr_28491;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25691__auto____1 = (function (state_28406){
while(true){
var ret_value__25692__auto__ = (function (){try{while(true){
var result__25693__auto__ = switch__25690__auto__.call(null,state_28406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25693__auto__;
}
break;
}
}catch (e28492){if((e28492 instanceof Object)){
var ex__25694__auto__ = e28492;
var statearr_28493_28553 = state_28406;
(statearr_28493_28553[(5)] = ex__25694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28554 = state_28406;
state_28406 = G__28554;
continue;
} else {
return ret_value__25692__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__25691__auto__ = function(state_28406){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25691__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25691__auto____1.call(this,state_28406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__25691__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25691__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__25691__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25691__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25691__auto__;
})()
;})(switch__25690__auto__,c__25785__auto__,map__28251,map__28251__$1,opts,before_jsload,on_jsload,reload_dependents,map__28252,map__28252__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__25787__auto__ = (function (){var statearr_28494 = f__25786__auto__.call(null);
(statearr_28494[(6)] = c__25785__auto__);

return statearr_28494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25787__auto__);
});})(c__25785__auto__,map__28251,map__28251__$1,opts,before_jsload,on_jsload,reload_dependents,map__28252,map__28252__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__25785__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28557,link){
var map__28558 = p__28557;
var map__28558__$1 = (((((!((map__28558 == null))))?(((((map__28558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28558):map__28558);
var file = cljs.core.get.call(null,map__28558__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5720__auto__,map__28558,map__28558__$1,file){
return (function (p1__28555_SHARP_,p2__28556_SHARP_){
if(cljs.core._EQ_.call(null,p1__28555_SHARP_,p2__28556_SHARP_)){
return p1__28555_SHARP_;
} else {
return false;
}
});})(link_href,temp__5720__auto__,map__28558,map__28558__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28561){
var map__28562 = p__28561;
var map__28562__$1 = (((((!((map__28562 == null))))?(((((map__28562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28562.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28562):map__28562);
var match_length = cljs.core.get.call(null,map__28562__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28562__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28560_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28560_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5720__auto__)){
var res = temp__5720__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__28564_SHARP_,p2__28565_SHARP_){
return cljs.core.assoc.call(null,p1__28564_SHARP_,cljs.core.get.call(null,p2__28565_SHARP_,key),p2__28565_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5718__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5718__auto__)){
var link = temp__5718__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5718__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5718__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_28566 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_28566);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_28566);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28567,p__28568){
var map__28569 = p__28567;
var map__28569__$1 = (((((!((map__28569 == null))))?(((((map__28569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28569):map__28569);
var on_cssload = cljs.core.get.call(null,map__28569__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__28570 = p__28568;
var map__28570__$1 = (((((!((map__28570 == null))))?(((((map__28570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28570):map__28570);
var files_msg = map__28570__$1;
var files = cljs.core.get.call(null,map__28570__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5720__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5720__auto__)){
var f_datas = temp__5720__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1562604886142
