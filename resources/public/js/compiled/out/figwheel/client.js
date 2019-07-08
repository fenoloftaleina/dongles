// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.19";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e29776){if((e29776 instanceof Error)){
var e = e29776;
return "Error: Unable to stringify";
} else {
throw e29776;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__29779 = arguments.length;
switch (G__29779) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__29777_SHARP_){
if(typeof p1__29777_SHARP_ === 'string'){
return p1__29777_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__29777_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___29782 = arguments.length;
var i__4731__auto___29783 = (0);
while(true){
if((i__4731__auto___29783 < len__4730__auto___29782)){
args__4736__auto__.push((arguments[i__4731__auto___29783]));

var G__29784 = (i__4731__auto___29783 + (1));
i__4731__auto___29783 = G__29784;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq29781){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29781));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___29786 = arguments.length;
var i__4731__auto___29787 = (0);
while(true){
if((i__4731__auto___29787 < len__4730__auto___29786)){
args__4736__auto__.push((arguments[i__4731__auto___29787]));

var G__29788 = (i__4731__auto___29787 + (1));
i__4731__auto___29787 = G__29788;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq29785){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29785));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__29789){
var map__29790 = p__29789;
var map__29790__$1 = (((((!((map__29790 == null))))?(((((map__29790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29790):map__29790);
var message = cljs.core.get.call(null,map__29790__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__29790__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4131__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4120__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4120__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4120__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__25785__auto___29869 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25785__auto___29869,ch){
return (function (){
var f__25786__auto__ = (function (){var switch__25690__auto__ = ((function (c__25785__auto___29869,ch){
return (function (state_29841){
var state_val_29842 = (state_29841[(1)]);
if((state_val_29842 === (7))){
var inst_29837 = (state_29841[(2)]);
var state_29841__$1 = state_29841;
var statearr_29843_29870 = state_29841__$1;
(statearr_29843_29870[(2)] = inst_29837);

(statearr_29843_29870[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29842 === (1))){
var state_29841__$1 = state_29841;
var statearr_29844_29871 = state_29841__$1;
(statearr_29844_29871[(2)] = null);

(statearr_29844_29871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29842 === (4))){
var inst_29794 = (state_29841[(7)]);
var inst_29794__$1 = (state_29841[(2)]);
var state_29841__$1 = (function (){var statearr_29845 = state_29841;
(statearr_29845[(7)] = inst_29794__$1);

return statearr_29845;
})();
if(cljs.core.truth_(inst_29794__$1)){
var statearr_29846_29872 = state_29841__$1;
(statearr_29846_29872[(1)] = (5));

} else {
var statearr_29847_29873 = state_29841__$1;
(statearr_29847_29873[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29842 === (15))){
var inst_29801 = (state_29841[(8)]);
var inst_29816 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29801);
var inst_29817 = cljs.core.first.call(null,inst_29816);
var inst_29818 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29817);
var inst_29819 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29818)].join('');
var inst_29820 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_29819);
var state_29841__$1 = state_29841;
var statearr_29848_29874 = state_29841__$1;
(statearr_29848_29874[(2)] = inst_29820);

(statearr_29848_29874[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29842 === (13))){
var inst_29825 = (state_29841[(2)]);
var state_29841__$1 = state_29841;
var statearr_29849_29875 = state_29841__$1;
(statearr_29849_29875[(2)] = inst_29825);

(statearr_29849_29875[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29842 === (6))){
var state_29841__$1 = state_29841;
var statearr_29850_29876 = state_29841__$1;
(statearr_29850_29876[(2)] = null);

(statearr_29850_29876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29842 === (17))){
var inst_29823 = (state_29841[(2)]);
var state_29841__$1 = state_29841;
var statearr_29851_29877 = state_29841__$1;
(statearr_29851_29877[(2)] = inst_29823);

(statearr_29851_29877[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29842 === (3))){
var inst_29839 = (state_29841[(2)]);
var state_29841__$1 = state_29841;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29841__$1,inst_29839);
} else {
if((state_val_29842 === (12))){
var inst_29800 = (state_29841[(9)]);
var inst_29814 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29800,opts);
var state_29841__$1 = state_29841;
if(inst_29814){
var statearr_29852_29878 = state_29841__$1;
(statearr_29852_29878[(1)] = (15));

} else {
var statearr_29853_29879 = state_29841__$1;
(statearr_29853_29879[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29842 === (2))){
var state_29841__$1 = state_29841;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29841__$1,(4),ch);
} else {
if((state_val_29842 === (11))){
var inst_29801 = (state_29841[(8)]);
var inst_29806 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29807 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29801);
var inst_29808 = cljs.core.async.timeout.call(null,(1000));
var inst_29809 = [inst_29807,inst_29808];
var inst_29810 = (new cljs.core.PersistentVector(null,2,(5),inst_29806,inst_29809,null));
var state_29841__$1 = state_29841;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29841__$1,(14),inst_29810);
} else {
if((state_val_29842 === (9))){
var inst_29801 = (state_29841[(8)]);
var inst_29827 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_29828 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29801);
var inst_29829 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29828);
var inst_29830 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29829)].join('');
var inst_29831 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_29830);
var state_29841__$1 = (function (){var statearr_29854 = state_29841;
(statearr_29854[(10)] = inst_29827);

return statearr_29854;
})();
var statearr_29855_29880 = state_29841__$1;
(statearr_29855_29880[(2)] = inst_29831);

(statearr_29855_29880[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29842 === (5))){
var inst_29794 = (state_29841[(7)]);
var inst_29796 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29797 = (new cljs.core.PersistentArrayMap(null,2,inst_29796,null));
var inst_29798 = (new cljs.core.PersistentHashSet(null,inst_29797,null));
var inst_29799 = figwheel.client.focus_msgs.call(null,inst_29798,inst_29794);
var inst_29800 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29799);
var inst_29801 = cljs.core.first.call(null,inst_29799);
var inst_29802 = figwheel.client.autoload_QMARK_.call(null);
var state_29841__$1 = (function (){var statearr_29856 = state_29841;
(statearr_29856[(9)] = inst_29800);

(statearr_29856[(8)] = inst_29801);

return statearr_29856;
})();
if(cljs.core.truth_(inst_29802)){
var statearr_29857_29881 = state_29841__$1;
(statearr_29857_29881[(1)] = (8));

} else {
var statearr_29858_29882 = state_29841__$1;
(statearr_29858_29882[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29842 === (14))){
var inst_29812 = (state_29841[(2)]);
var state_29841__$1 = state_29841;
var statearr_29859_29883 = state_29841__$1;
(statearr_29859_29883[(2)] = inst_29812);

(statearr_29859_29883[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29842 === (16))){
var state_29841__$1 = state_29841;
var statearr_29860_29884 = state_29841__$1;
(statearr_29860_29884[(2)] = null);

(statearr_29860_29884[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29842 === (10))){
var inst_29833 = (state_29841[(2)]);
var state_29841__$1 = (function (){var statearr_29861 = state_29841;
(statearr_29861[(11)] = inst_29833);

return statearr_29861;
})();
var statearr_29862_29885 = state_29841__$1;
(statearr_29862_29885[(2)] = null);

(statearr_29862_29885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29842 === (8))){
var inst_29800 = (state_29841[(9)]);
var inst_29804 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29800,opts);
var state_29841__$1 = state_29841;
if(cljs.core.truth_(inst_29804)){
var statearr_29863_29886 = state_29841__$1;
(statearr_29863_29886[(1)] = (11));

} else {
var statearr_29864_29887 = state_29841__$1;
(statearr_29864_29887[(1)] = (12));

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
});})(c__25785__auto___29869,ch))
;
return ((function (switch__25690__auto__,c__25785__auto___29869,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__25691__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__25691__auto____0 = (function (){
var statearr_29865 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29865[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__25691__auto__);

(statearr_29865[(1)] = (1));

return statearr_29865;
});
var figwheel$client$file_reloader_plugin_$_state_machine__25691__auto____1 = (function (state_29841){
while(true){
var ret_value__25692__auto__ = (function (){try{while(true){
var result__25693__auto__ = switch__25690__auto__.call(null,state_29841);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25693__auto__;
}
break;
}
}catch (e29866){if((e29866 instanceof Object)){
var ex__25694__auto__ = e29866;
var statearr_29867_29888 = state_29841;
(statearr_29867_29888[(5)] = ex__25694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29841);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29866;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29889 = state_29841;
state_29841 = G__29889;
continue;
} else {
return ret_value__25692__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__25691__auto__ = function(state_29841){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__25691__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__25691__auto____1.call(this,state_29841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__25691__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__25691__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__25691__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__25691__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__25691__auto__;
})()
;})(switch__25690__auto__,c__25785__auto___29869,ch))
})();
var state__25787__auto__ = (function (){var statearr_29868 = f__25786__auto__.call(null);
(statearr_29868[(6)] = c__25785__auto___29869);

return statearr_29868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25787__auto__);
});})(c__25785__auto___29869,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29890_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29890_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_29896 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_29896){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29892 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29893 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29894 = true;
var _STAR_print_fn_STAR__temp_val__29895 = ((function (_STAR_print_newline_STAR__orig_val__29892,_STAR_print_fn_STAR__orig_val__29893,_STAR_print_newline_STAR__temp_val__29894,sb,base_path_29896){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__29892,_STAR_print_fn_STAR__orig_val__29893,_STAR_print_newline_STAR__temp_val__29894,sb,base_path_29896))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29894;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29895;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29893;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29892;
}}catch (e29891){if((e29891 instanceof Error)){
var e = e29891;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29896], null));
} else {
var e = e29891;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_29896))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__29897){
var map__29898 = p__29897;
var map__29898__$1 = (((((!((map__29898 == null))))?(((((map__29898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29898):map__29898);
var opts = map__29898__$1;
var build_id = cljs.core.get.call(null,map__29898__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__29898,map__29898__$1,opts,build_id){
return (function (p__29900){
var vec__29901 = p__29900;
var seq__29902 = cljs.core.seq.call(null,vec__29901);
var first__29903 = cljs.core.first.call(null,seq__29902);
var seq__29902__$1 = cljs.core.next.call(null,seq__29902);
var map__29904 = first__29903;
var map__29904__$1 = (((((!((map__29904 == null))))?(((((map__29904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29904.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29904):map__29904);
var msg = map__29904__$1;
var msg_name = cljs.core.get.call(null,map__29904__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29902__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__29901,seq__29902,first__29903,seq__29902__$1,map__29904,map__29904__$1,msg,msg_name,_,map__29898,map__29898__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__29901,seq__29902,first__29903,seq__29902__$1,map__29904,map__29904__$1,msg,msg_name,_,map__29898,map__29898__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__29898,map__29898__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__29906){
var vec__29907 = p__29906;
var seq__29908 = cljs.core.seq.call(null,vec__29907);
var first__29909 = cljs.core.first.call(null,seq__29908);
var seq__29908__$1 = cljs.core.next.call(null,seq__29908);
var map__29910 = first__29909;
var map__29910__$1 = (((((!((map__29910 == null))))?(((((map__29910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29910.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29910):map__29910);
var msg = map__29910__$1;
var msg_name = cljs.core.get.call(null,map__29910__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29908__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__29912){
var map__29913 = p__29912;
var map__29913__$1 = (((((!((map__29913 == null))))?(((((map__29913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29913.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29913):map__29913);
var on_compile_warning = cljs.core.get.call(null,map__29913__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__29913__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__29913,map__29913__$1,on_compile_warning,on_compile_fail){
return (function (p__29915){
var vec__29916 = p__29915;
var seq__29917 = cljs.core.seq.call(null,vec__29916);
var first__29918 = cljs.core.first.call(null,seq__29917);
var seq__29917__$1 = cljs.core.next.call(null,seq__29917);
var map__29919 = first__29918;
var map__29919__$1 = (((((!((map__29919 == null))))?(((((map__29919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29919):map__29919);
var msg = map__29919__$1;
var msg_name = cljs.core.get.call(null,map__29919__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29917__$1;
var pred__29921 = cljs.core._EQ_;
var expr__29922 = msg_name;
if(cljs.core.truth_(pred__29921.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29922))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29921.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29922))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__29913,map__29913__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__25785__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25785__auto__,msg_hist,msg_names,msg){
return (function (){
var f__25786__auto__ = (function (){var switch__25690__auto__ = ((function (c__25785__auto__,msg_hist,msg_names,msg){
return (function (state_30011){
var state_val_30012 = (state_30011[(1)]);
if((state_val_30012 === (7))){
var inst_29931 = (state_30011[(2)]);
var state_30011__$1 = state_30011;
if(cljs.core.truth_(inst_29931)){
var statearr_30013_30060 = state_30011__$1;
(statearr_30013_30060[(1)] = (8));

} else {
var statearr_30014_30061 = state_30011__$1;
(statearr_30014_30061[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30012 === (20))){
var inst_30005 = (state_30011[(2)]);
var state_30011__$1 = state_30011;
var statearr_30015_30062 = state_30011__$1;
(statearr_30015_30062[(2)] = inst_30005);

(statearr_30015_30062[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30012 === (27))){
var inst_30001 = (state_30011[(2)]);
var state_30011__$1 = state_30011;
var statearr_30016_30063 = state_30011__$1;
(statearr_30016_30063[(2)] = inst_30001);

(statearr_30016_30063[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30012 === (1))){
var inst_29924 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30011__$1 = state_30011;
if(cljs.core.truth_(inst_29924)){
var statearr_30017_30064 = state_30011__$1;
(statearr_30017_30064[(1)] = (2));

} else {
var statearr_30018_30065 = state_30011__$1;
(statearr_30018_30065[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30012 === (24))){
var inst_30003 = (state_30011[(2)]);
var state_30011__$1 = state_30011;
var statearr_30019_30066 = state_30011__$1;
(statearr_30019_30066[(2)] = inst_30003);

(statearr_30019_30066[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30012 === (4))){
var inst_30009 = (state_30011[(2)]);
var state_30011__$1 = state_30011;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30011__$1,inst_30009);
} else {
if((state_val_30012 === (15))){
var inst_30007 = (state_30011[(2)]);
var state_30011__$1 = state_30011;
var statearr_30020_30067 = state_30011__$1;
(statearr_30020_30067[(2)] = inst_30007);

(statearr_30020_30067[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30012 === (21))){
var inst_29960 = (state_30011[(2)]);
var inst_29961 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29962 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29961);
var state_30011__$1 = (function (){var statearr_30021 = state_30011;
(statearr_30021[(7)] = inst_29960);

return statearr_30021;
})();
var statearr_30022_30068 = state_30011__$1;
(statearr_30022_30068[(2)] = inst_29962);

(statearr_30022_30068[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30012 === (31))){
var inst_29990 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30011__$1 = state_30011;
if(inst_29990){
var statearr_30023_30069 = state_30011__$1;
(statearr_30023_30069[(1)] = (34));

} else {
var statearr_30024_30070 = state_30011__$1;
(statearr_30024_30070[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30012 === (32))){
var inst_29999 = (state_30011[(2)]);
var state_30011__$1 = state_30011;
var statearr_30025_30071 = state_30011__$1;
(statearr_30025_30071[(2)] = inst_29999);

(statearr_30025_30071[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30012 === (33))){
var inst_29986 = (state_30011[(2)]);
var inst_29987 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29988 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29987);
var state_30011__$1 = (function (){var statearr_30026 = state_30011;
(statearr_30026[(8)] = inst_29986);

return statearr_30026;
})();
var statearr_30027_30072 = state_30011__$1;
(statearr_30027_30072[(2)] = inst_29988);

(statearr_30027_30072[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30012 === (13))){
var inst_29945 = figwheel.client.heads_up.clear.call(null);
var state_30011__$1 = state_30011;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30011__$1,(16),inst_29945);
} else {
if((state_val_30012 === (22))){
var inst_29966 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29967 = figwheel.client.heads_up.append_warning_message.call(null,inst_29966);
var state_30011__$1 = state_30011;
var statearr_30028_30073 = state_30011__$1;
(statearr_30028_30073[(2)] = inst_29967);

(statearr_30028_30073[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30012 === (36))){
var inst_29997 = (state_30011[(2)]);
var state_30011__$1 = state_30011;
var statearr_30029_30074 = state_30011__$1;
(statearr_30029_30074[(2)] = inst_29997);

(statearr_30029_30074[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30012 === (29))){
var inst_29977 = (state_30011[(2)]);
var inst_29978 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29979 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29978);
var state_30011__$1 = (function (){var statearr_30030 = state_30011;
(statearr_30030[(9)] = inst_29977);

return statearr_30030;
})();
var statearr_30031_30075 = state_30011__$1;
(statearr_30031_30075[(2)] = inst_29979);

(statearr_30031_30075[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30012 === (6))){
var inst_29926 = (state_30011[(10)]);
var state_30011__$1 = state_30011;
var statearr_30032_30076 = state_30011__$1;
(statearr_30032_30076[(2)] = inst_29926);

(statearr_30032_30076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30012 === (28))){
var inst_29973 = (state_30011[(2)]);
var inst_29974 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29975 = figwheel.client.heads_up.display_warning.call(null,inst_29974);
var state_30011__$1 = (function (){var statearr_30033 = state_30011;
(statearr_30033[(11)] = inst_29973);

return statearr_30033;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30011__$1,(29),inst_29975);
} else {
if((state_val_30012 === (25))){
var inst_29971 = figwheel.client.heads_up.clear.call(null);
var state_30011__$1 = state_30011;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30011__$1,(28),inst_29971);
} else {
if((state_val_30012 === (34))){
var inst_29992 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30011__$1 = state_30011;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30011__$1,(37),inst_29992);
} else {
if((state_val_30012 === (17))){
var inst_29951 = (state_30011[(2)]);
var inst_29952 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29953 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29952);
var state_30011__$1 = (function (){var statearr_30034 = state_30011;
(statearr_30034[(12)] = inst_29951);

return statearr_30034;
})();
var statearr_30035_30077 = state_30011__$1;
(statearr_30035_30077[(2)] = inst_29953);

(statearr_30035_30077[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30012 === (3))){
var inst_29943 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30011__$1 = state_30011;
if(inst_29943){
var statearr_30036_30078 = state_30011__$1;
(statearr_30036_30078[(1)] = (13));

} else {
var statearr_30037_30079 = state_30011__$1;
(statearr_30037_30079[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30012 === (12))){
var inst_29939 = (state_30011[(2)]);
var state_30011__$1 = state_30011;
var statearr_30038_30080 = state_30011__$1;
(statearr_30038_30080[(2)] = inst_29939);

(statearr_30038_30080[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30012 === (2))){
var inst_29926 = (state_30011[(10)]);
var inst_29926__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_30011__$1 = (function (){var statearr_30039 = state_30011;
(statearr_30039[(10)] = inst_29926__$1);

return statearr_30039;
})();
if(cljs.core.truth_(inst_29926__$1)){
var statearr_30040_30081 = state_30011__$1;
(statearr_30040_30081[(1)] = (5));

} else {
var statearr_30041_30082 = state_30011__$1;
(statearr_30041_30082[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30012 === (23))){
var inst_29969 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30011__$1 = state_30011;
if(inst_29969){
var statearr_30042_30083 = state_30011__$1;
(statearr_30042_30083[(1)] = (25));

} else {
var statearr_30043_30084 = state_30011__$1;
(statearr_30043_30084[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30012 === (35))){
var state_30011__$1 = state_30011;
var statearr_30044_30085 = state_30011__$1;
(statearr_30044_30085[(2)] = null);

(statearr_30044_30085[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30012 === (19))){
var inst_29964 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30011__$1 = state_30011;
if(inst_29964){
var statearr_30045_30086 = state_30011__$1;
(statearr_30045_30086[(1)] = (22));

} else {
var statearr_30046_30087 = state_30011__$1;
(statearr_30046_30087[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30012 === (11))){
var inst_29935 = (state_30011[(2)]);
var state_30011__$1 = state_30011;
var statearr_30047_30088 = state_30011__$1;
(statearr_30047_30088[(2)] = inst_29935);

(statearr_30047_30088[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30012 === (9))){
var inst_29937 = figwheel.client.heads_up.clear.call(null);
var state_30011__$1 = state_30011;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30011__$1,(12),inst_29937);
} else {
if((state_val_30012 === (5))){
var inst_29928 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30011__$1 = state_30011;
var statearr_30048_30089 = state_30011__$1;
(statearr_30048_30089[(2)] = inst_29928);

(statearr_30048_30089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30012 === (14))){
var inst_29955 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30011__$1 = state_30011;
if(inst_29955){
var statearr_30049_30090 = state_30011__$1;
(statearr_30049_30090[(1)] = (18));

} else {
var statearr_30050_30091 = state_30011__$1;
(statearr_30050_30091[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30012 === (26))){
var inst_29981 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30011__$1 = state_30011;
if(inst_29981){
var statearr_30051_30092 = state_30011__$1;
(statearr_30051_30092[(1)] = (30));

} else {
var statearr_30052_30093 = state_30011__$1;
(statearr_30052_30093[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30012 === (16))){
var inst_29947 = (state_30011[(2)]);
var inst_29948 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29949 = figwheel.client.heads_up.display_exception.call(null,inst_29948);
var state_30011__$1 = (function (){var statearr_30053 = state_30011;
(statearr_30053[(13)] = inst_29947);

return statearr_30053;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30011__$1,(17),inst_29949);
} else {
if((state_val_30012 === (30))){
var inst_29983 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29984 = figwheel.client.heads_up.display_warning.call(null,inst_29983);
var state_30011__$1 = state_30011;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30011__$1,(33),inst_29984);
} else {
if((state_val_30012 === (10))){
var inst_29941 = (state_30011[(2)]);
var state_30011__$1 = state_30011;
var statearr_30054_30094 = state_30011__$1;
(statearr_30054_30094[(2)] = inst_29941);

(statearr_30054_30094[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30012 === (18))){
var inst_29957 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29958 = figwheel.client.heads_up.display_exception.call(null,inst_29957);
var state_30011__$1 = state_30011;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30011__$1,(21),inst_29958);
} else {
if((state_val_30012 === (37))){
var inst_29994 = (state_30011[(2)]);
var state_30011__$1 = state_30011;
var statearr_30055_30095 = state_30011__$1;
(statearr_30055_30095[(2)] = inst_29994);

(statearr_30055_30095[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30012 === (8))){
var inst_29933 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30011__$1 = state_30011;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30011__$1,(11),inst_29933);
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
});})(c__25785__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__25690__auto__,c__25785__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25691__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25691__auto____0 = (function (){
var statearr_30056 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30056[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25691__auto__);

(statearr_30056[(1)] = (1));

return statearr_30056;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25691__auto____1 = (function (state_30011){
while(true){
var ret_value__25692__auto__ = (function (){try{while(true){
var result__25693__auto__ = switch__25690__auto__.call(null,state_30011);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25693__auto__;
}
break;
}
}catch (e30057){if((e30057 instanceof Object)){
var ex__25694__auto__ = e30057;
var statearr_30058_30096 = state_30011;
(statearr_30058_30096[(5)] = ex__25694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30011);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30057;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30097 = state_30011;
state_30011 = G__30097;
continue;
} else {
return ret_value__25692__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25691__auto__ = function(state_30011){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25691__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25691__auto____1.call(this,state_30011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25691__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25691__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25691__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25691__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25691__auto__;
})()
;})(switch__25690__auto__,c__25785__auto__,msg_hist,msg_names,msg))
})();
var state__25787__auto__ = (function (){var statearr_30059 = f__25786__auto__.call(null);
(statearr_30059[(6)] = c__25785__auto__);

return statearr_30059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25787__auto__);
});})(c__25785__auto__,msg_hist,msg_names,msg))
);

return c__25785__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__25785__auto___30126 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25785__auto___30126,ch){
return (function (){
var f__25786__auto__ = (function (){var switch__25690__auto__ = ((function (c__25785__auto___30126,ch){
return (function (state_30112){
var state_val_30113 = (state_30112[(1)]);
if((state_val_30113 === (1))){
var state_30112__$1 = state_30112;
var statearr_30114_30127 = state_30112__$1;
(statearr_30114_30127[(2)] = null);

(statearr_30114_30127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30113 === (2))){
var state_30112__$1 = state_30112;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30112__$1,(4),ch);
} else {
if((state_val_30113 === (3))){
var inst_30110 = (state_30112[(2)]);
var state_30112__$1 = state_30112;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30112__$1,inst_30110);
} else {
if((state_val_30113 === (4))){
var inst_30100 = (state_30112[(7)]);
var inst_30100__$1 = (state_30112[(2)]);
var state_30112__$1 = (function (){var statearr_30115 = state_30112;
(statearr_30115[(7)] = inst_30100__$1);

return statearr_30115;
})();
if(cljs.core.truth_(inst_30100__$1)){
var statearr_30116_30128 = state_30112__$1;
(statearr_30116_30128[(1)] = (5));

} else {
var statearr_30117_30129 = state_30112__$1;
(statearr_30117_30129[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30113 === (5))){
var inst_30100 = (state_30112[(7)]);
var inst_30102 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30100);
var state_30112__$1 = state_30112;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30112__$1,(8),inst_30102);
} else {
if((state_val_30113 === (6))){
var state_30112__$1 = state_30112;
var statearr_30118_30130 = state_30112__$1;
(statearr_30118_30130[(2)] = null);

(statearr_30118_30130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30113 === (7))){
var inst_30108 = (state_30112[(2)]);
var state_30112__$1 = state_30112;
var statearr_30119_30131 = state_30112__$1;
(statearr_30119_30131[(2)] = inst_30108);

(statearr_30119_30131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30113 === (8))){
var inst_30104 = (state_30112[(2)]);
var state_30112__$1 = (function (){var statearr_30120 = state_30112;
(statearr_30120[(8)] = inst_30104);

return statearr_30120;
})();
var statearr_30121_30132 = state_30112__$1;
(statearr_30121_30132[(2)] = null);

(statearr_30121_30132[(1)] = (2));


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
});})(c__25785__auto___30126,ch))
;
return ((function (switch__25690__auto__,c__25785__auto___30126,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__25691__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__25691__auto____0 = (function (){
var statearr_30122 = [null,null,null,null,null,null,null,null,null];
(statearr_30122[(0)] = figwheel$client$heads_up_plugin_$_state_machine__25691__auto__);

(statearr_30122[(1)] = (1));

return statearr_30122;
});
var figwheel$client$heads_up_plugin_$_state_machine__25691__auto____1 = (function (state_30112){
while(true){
var ret_value__25692__auto__ = (function (){try{while(true){
var result__25693__auto__ = switch__25690__auto__.call(null,state_30112);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25693__auto__;
}
break;
}
}catch (e30123){if((e30123 instanceof Object)){
var ex__25694__auto__ = e30123;
var statearr_30124_30133 = state_30112;
(statearr_30124_30133[(5)] = ex__25694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30112);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30123;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30134 = state_30112;
state_30112 = G__30134;
continue;
} else {
return ret_value__25692__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__25691__auto__ = function(state_30112){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__25691__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__25691__auto____1.call(this,state_30112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__25691__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__25691__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__25691__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__25691__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__25691__auto__;
})()
;})(switch__25690__auto__,c__25785__auto___30126,ch))
})();
var state__25787__auto__ = (function (){var statearr_30125 = f__25786__auto__.call(null);
(statearr_30125[(6)] = c__25785__auto___30126);

return statearr_30125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25787__auto__);
});})(c__25785__auto___30126,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__25785__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25785__auto__){
return (function (){
var f__25786__auto__ = (function (){var switch__25690__auto__ = ((function (c__25785__auto__){
return (function (state_30140){
var state_val_30141 = (state_30140[(1)]);
if((state_val_30141 === (1))){
var inst_30135 = cljs.core.async.timeout.call(null,(3000));
var state_30140__$1 = state_30140;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30140__$1,(2),inst_30135);
} else {
if((state_val_30141 === (2))){
var inst_30137 = (state_30140[(2)]);
var inst_30138 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30140__$1 = (function (){var statearr_30142 = state_30140;
(statearr_30142[(7)] = inst_30137);

return statearr_30142;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30140__$1,inst_30138);
} else {
return null;
}
}
});})(c__25785__auto__))
;
return ((function (switch__25690__auto__,c__25785__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__25691__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__25691__auto____0 = (function (){
var statearr_30143 = [null,null,null,null,null,null,null,null];
(statearr_30143[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__25691__auto__);

(statearr_30143[(1)] = (1));

return statearr_30143;
});
var figwheel$client$enforce_project_plugin_$_state_machine__25691__auto____1 = (function (state_30140){
while(true){
var ret_value__25692__auto__ = (function (){try{while(true){
var result__25693__auto__ = switch__25690__auto__.call(null,state_30140);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25693__auto__;
}
break;
}
}catch (e30144){if((e30144 instanceof Object)){
var ex__25694__auto__ = e30144;
var statearr_30145_30147 = state_30140;
(statearr_30145_30147[(5)] = ex__25694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30140);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30144;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30148 = state_30140;
state_30140 = G__30148;
continue;
} else {
return ret_value__25692__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__25691__auto__ = function(state_30140){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__25691__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__25691__auto____1.call(this,state_30140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__25691__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__25691__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__25691__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__25691__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__25691__auto__;
})()
;})(switch__25690__auto__,c__25785__auto__))
})();
var state__25787__auto__ = (function (){var statearr_30146 = f__25786__auto__.call(null);
(statearr_30146[(6)] = c__25785__auto__);

return statearr_30146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25787__auto__);
});})(c__25785__auto__))
);

return c__25785__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5720__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5720__auto__)){
var figwheel_version = temp__5720__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__25785__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25785__auto__,figwheel_version,temp__5720__auto__){
return (function (){
var f__25786__auto__ = (function (){var switch__25690__auto__ = ((function (c__25785__auto__,figwheel_version,temp__5720__auto__){
return (function (state_30155){
var state_val_30156 = (state_30155[(1)]);
if((state_val_30156 === (1))){
var inst_30149 = cljs.core.async.timeout.call(null,(2000));
var state_30155__$1 = state_30155;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30155__$1,(2),inst_30149);
} else {
if((state_val_30156 === (2))){
var inst_30151 = (state_30155[(2)]);
var inst_30152 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_30153 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_30152);
var state_30155__$1 = (function (){var statearr_30157 = state_30155;
(statearr_30157[(7)] = inst_30151);

return statearr_30157;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30155__$1,inst_30153);
} else {
return null;
}
}
});})(c__25785__auto__,figwheel_version,temp__5720__auto__))
;
return ((function (switch__25690__auto__,c__25785__auto__,figwheel_version,temp__5720__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25691__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25691__auto____0 = (function (){
var statearr_30158 = [null,null,null,null,null,null,null,null];
(statearr_30158[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25691__auto__);

(statearr_30158[(1)] = (1));

return statearr_30158;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25691__auto____1 = (function (state_30155){
while(true){
var ret_value__25692__auto__ = (function (){try{while(true){
var result__25693__auto__ = switch__25690__auto__.call(null,state_30155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25693__auto__;
}
break;
}
}catch (e30159){if((e30159 instanceof Object)){
var ex__25694__auto__ = e30159;
var statearr_30160_30162 = state_30155;
(statearr_30160_30162[(5)] = ex__25694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30159;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30163 = state_30155;
state_30155 = G__30163;
continue;
} else {
return ret_value__25692__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25691__auto__ = function(state_30155){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25691__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25691__auto____1.call(this,state_30155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25691__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25691__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25691__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25691__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25691__auto__;
})()
;})(switch__25690__auto__,c__25785__auto__,figwheel_version,temp__5720__auto__))
})();
var state__25787__auto__ = (function (){var statearr_30161 = f__25786__auto__.call(null);
(statearr_30161[(6)] = c__25785__auto__);

return statearr_30161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25787__auto__);
});})(c__25785__auto__,figwheel_version,temp__5720__auto__))
);

return c__25785__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__30164){
var map__30165 = p__30164;
var map__30165__$1 = (((((!((map__30165 == null))))?(((((map__30165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30165):map__30165);
var file = cljs.core.get.call(null,map__30165__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__30165__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__30165__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__30167 = "";
var G__30167__$1 = (cljs.core.truth_(file)?[G__30167,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__30167);
var G__30167__$2 = (cljs.core.truth_(line)?[G__30167__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__30167__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__30167__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__30167__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30168){
var map__30169 = p__30168;
var map__30169__$1 = (((((!((map__30169 == null))))?(((((map__30169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30169):map__30169);
var ed = map__30169__$1;
var exception_data = cljs.core.get.call(null,map__30169__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__30169__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_30172 = (function (){var G__30171 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30171)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__30171;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_30172);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30173){
var map__30174 = p__30173;
var map__30174__$1 = (((((!((map__30174 == null))))?(((((map__30174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30174):map__30174);
var w = map__30174__$1;
var message = cljs.core.get.call(null,map__30174__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4120__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__30176 = cljs.core.seq.call(null,plugins);
var chunk__30177 = null;
var count__30178 = (0);
var i__30179 = (0);
while(true){
if((i__30179 < count__30178)){
var vec__30186 = cljs.core._nth.call(null,chunk__30177,i__30179);
var k = cljs.core.nth.call(null,vec__30186,(0),null);
var plugin = cljs.core.nth.call(null,vec__30186,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30192 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30176,chunk__30177,count__30178,i__30179,pl_30192,vec__30186,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30192.call(null,msg_hist);
});})(seq__30176,chunk__30177,count__30178,i__30179,pl_30192,vec__30186,k,plugin))
);
} else {
}


var G__30193 = seq__30176;
var G__30194 = chunk__30177;
var G__30195 = count__30178;
var G__30196 = (i__30179 + (1));
seq__30176 = G__30193;
chunk__30177 = G__30194;
count__30178 = G__30195;
i__30179 = G__30196;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__30176);
if(temp__5720__auto__){
var seq__30176__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30176__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__30176__$1);
var G__30197 = cljs.core.chunk_rest.call(null,seq__30176__$1);
var G__30198 = c__4550__auto__;
var G__30199 = cljs.core.count.call(null,c__4550__auto__);
var G__30200 = (0);
seq__30176 = G__30197;
chunk__30177 = G__30198;
count__30178 = G__30199;
i__30179 = G__30200;
continue;
} else {
var vec__30189 = cljs.core.first.call(null,seq__30176__$1);
var k = cljs.core.nth.call(null,vec__30189,(0),null);
var plugin = cljs.core.nth.call(null,vec__30189,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30201 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30176,chunk__30177,count__30178,i__30179,pl_30201,vec__30189,k,plugin,seq__30176__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30201.call(null,msg_hist);
});})(seq__30176,chunk__30177,count__30178,i__30179,pl_30201,vec__30189,k,plugin,seq__30176__$1,temp__5720__auto__))
);
} else {
}


var G__30202 = cljs.core.next.call(null,seq__30176__$1);
var G__30203 = null;
var G__30204 = (0);
var G__30205 = (0);
seq__30176 = G__30202;
chunk__30177 = G__30203;
count__30178 = G__30204;
i__30179 = G__30205;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__30207 = arguments.length;
switch (G__30207) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__30208_30213 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__30209_30214 = null;
var count__30210_30215 = (0);
var i__30211_30216 = (0);
while(true){
if((i__30211_30216 < count__30210_30215)){
var msg_30217 = cljs.core._nth.call(null,chunk__30209_30214,i__30211_30216);
figwheel.client.socket.handle_incoming_message.call(null,msg_30217);


var G__30218 = seq__30208_30213;
var G__30219 = chunk__30209_30214;
var G__30220 = count__30210_30215;
var G__30221 = (i__30211_30216 + (1));
seq__30208_30213 = G__30218;
chunk__30209_30214 = G__30219;
count__30210_30215 = G__30220;
i__30211_30216 = G__30221;
continue;
} else {
var temp__5720__auto___30222 = cljs.core.seq.call(null,seq__30208_30213);
if(temp__5720__auto___30222){
var seq__30208_30223__$1 = temp__5720__auto___30222;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30208_30223__$1)){
var c__4550__auto___30224 = cljs.core.chunk_first.call(null,seq__30208_30223__$1);
var G__30225 = cljs.core.chunk_rest.call(null,seq__30208_30223__$1);
var G__30226 = c__4550__auto___30224;
var G__30227 = cljs.core.count.call(null,c__4550__auto___30224);
var G__30228 = (0);
seq__30208_30213 = G__30225;
chunk__30209_30214 = G__30226;
count__30210_30215 = G__30227;
i__30211_30216 = G__30228;
continue;
} else {
var msg_30229 = cljs.core.first.call(null,seq__30208_30223__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_30229);


var G__30230 = cljs.core.next.call(null,seq__30208_30223__$1);
var G__30231 = null;
var G__30232 = (0);
var G__30233 = (0);
seq__30208_30213 = G__30230;
chunk__30209_30214 = G__30231;
count__30210_30215 = G__30232;
i__30211_30216 = G__30233;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4736__auto__ = [];
var len__4730__auto___30238 = arguments.length;
var i__4731__auto___30239 = (0);
while(true){
if((i__4731__auto___30239 < len__4730__auto___30238)){
args__4736__auto__.push((arguments[i__4731__auto___30239]));

var G__30240 = (i__4731__auto___30239 + (1));
i__4731__auto___30239 = G__30240;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30235){
var map__30236 = p__30235;
var map__30236__$1 = (((((!((map__30236 == null))))?(((((map__30236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30236):map__30236);
var opts = map__30236__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30234){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30234));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e30241){if((e30241 instanceof Error)){
var e = e30241;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e30241;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__30242){
var map__30243 = p__30242;
var map__30243__$1 = (((((!((map__30243 == null))))?(((((map__30243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30243):map__30243);
var msg_name = cljs.core.get.call(null,map__30243__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1562604888172
