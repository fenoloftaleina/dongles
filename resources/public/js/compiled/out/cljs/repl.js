// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__29429){
var map__29430 = p__29429;
var map__29430__$1 = (((((!((map__29430 == null))))?(((((map__29430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29430):map__29430);
var m = map__29430__$1;
var n = cljs.core.get.call(null,map__29430__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__29430__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29432_29464 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29433_29465 = null;
var count__29434_29466 = (0);
var i__29435_29467 = (0);
while(true){
if((i__29435_29467 < count__29434_29466)){
var f_29468 = cljs.core._nth.call(null,chunk__29433_29465,i__29435_29467);
cljs.core.println.call(null,"  ",f_29468);


var G__29469 = seq__29432_29464;
var G__29470 = chunk__29433_29465;
var G__29471 = count__29434_29466;
var G__29472 = (i__29435_29467 + (1));
seq__29432_29464 = G__29469;
chunk__29433_29465 = G__29470;
count__29434_29466 = G__29471;
i__29435_29467 = G__29472;
continue;
} else {
var temp__5720__auto___29473 = cljs.core.seq.call(null,seq__29432_29464);
if(temp__5720__auto___29473){
var seq__29432_29474__$1 = temp__5720__auto___29473;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29432_29474__$1)){
var c__4550__auto___29475 = cljs.core.chunk_first.call(null,seq__29432_29474__$1);
var G__29476 = cljs.core.chunk_rest.call(null,seq__29432_29474__$1);
var G__29477 = c__4550__auto___29475;
var G__29478 = cljs.core.count.call(null,c__4550__auto___29475);
var G__29479 = (0);
seq__29432_29464 = G__29476;
chunk__29433_29465 = G__29477;
count__29434_29466 = G__29478;
i__29435_29467 = G__29479;
continue;
} else {
var f_29480 = cljs.core.first.call(null,seq__29432_29474__$1);
cljs.core.println.call(null,"  ",f_29480);


var G__29481 = cljs.core.next.call(null,seq__29432_29474__$1);
var G__29482 = null;
var G__29483 = (0);
var G__29484 = (0);
seq__29432_29464 = G__29481;
chunk__29433_29465 = G__29482;
count__29434_29466 = G__29483;
i__29435_29467 = G__29484;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29485 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29485);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29485)))?cljs.core.second.call(null,arglists_29485):arglists_29485));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29436_29486 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29437_29487 = null;
var count__29438_29488 = (0);
var i__29439_29489 = (0);
while(true){
if((i__29439_29489 < count__29438_29488)){
var vec__29450_29490 = cljs.core._nth.call(null,chunk__29437_29487,i__29439_29489);
var name_29491 = cljs.core.nth.call(null,vec__29450_29490,(0),null);
var map__29453_29492 = cljs.core.nth.call(null,vec__29450_29490,(1),null);
var map__29453_29493__$1 = (((((!((map__29453_29492 == null))))?(((((map__29453_29492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29453_29492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29453_29492):map__29453_29492);
var doc_29494 = cljs.core.get.call(null,map__29453_29493__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29495 = cljs.core.get.call(null,map__29453_29493__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29491);

cljs.core.println.call(null," ",arglists_29495);

if(cljs.core.truth_(doc_29494)){
cljs.core.println.call(null," ",doc_29494);
} else {
}


var G__29496 = seq__29436_29486;
var G__29497 = chunk__29437_29487;
var G__29498 = count__29438_29488;
var G__29499 = (i__29439_29489 + (1));
seq__29436_29486 = G__29496;
chunk__29437_29487 = G__29497;
count__29438_29488 = G__29498;
i__29439_29489 = G__29499;
continue;
} else {
var temp__5720__auto___29500 = cljs.core.seq.call(null,seq__29436_29486);
if(temp__5720__auto___29500){
var seq__29436_29501__$1 = temp__5720__auto___29500;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29436_29501__$1)){
var c__4550__auto___29502 = cljs.core.chunk_first.call(null,seq__29436_29501__$1);
var G__29503 = cljs.core.chunk_rest.call(null,seq__29436_29501__$1);
var G__29504 = c__4550__auto___29502;
var G__29505 = cljs.core.count.call(null,c__4550__auto___29502);
var G__29506 = (0);
seq__29436_29486 = G__29503;
chunk__29437_29487 = G__29504;
count__29438_29488 = G__29505;
i__29439_29489 = G__29506;
continue;
} else {
var vec__29455_29507 = cljs.core.first.call(null,seq__29436_29501__$1);
var name_29508 = cljs.core.nth.call(null,vec__29455_29507,(0),null);
var map__29458_29509 = cljs.core.nth.call(null,vec__29455_29507,(1),null);
var map__29458_29510__$1 = (((((!((map__29458_29509 == null))))?(((((map__29458_29509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29458_29509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29458_29509):map__29458_29509);
var doc_29511 = cljs.core.get.call(null,map__29458_29510__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29512 = cljs.core.get.call(null,map__29458_29510__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29508);

cljs.core.println.call(null," ",arglists_29512);

if(cljs.core.truth_(doc_29511)){
cljs.core.println.call(null," ",doc_29511);
} else {
}


var G__29513 = cljs.core.next.call(null,seq__29436_29501__$1);
var G__29514 = null;
var G__29515 = (0);
var G__29516 = (0);
seq__29436_29486 = G__29513;
chunk__29437_29487 = G__29514;
count__29438_29488 = G__29515;
i__29439_29489 = G__29516;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__29460 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__29461 = null;
var count__29462 = (0);
var i__29463 = (0);
while(true){
if((i__29463 < count__29462)){
var role = cljs.core._nth.call(null,chunk__29461,i__29463);
var temp__5720__auto___29517__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___29517__$1)){
var spec_29518 = temp__5720__auto___29517__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29518));
} else {
}


var G__29519 = seq__29460;
var G__29520 = chunk__29461;
var G__29521 = count__29462;
var G__29522 = (i__29463 + (1));
seq__29460 = G__29519;
chunk__29461 = G__29520;
count__29462 = G__29521;
i__29463 = G__29522;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__29460);
if(temp__5720__auto____$1){
var seq__29460__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29460__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__29460__$1);
var G__29523 = cljs.core.chunk_rest.call(null,seq__29460__$1);
var G__29524 = c__4550__auto__;
var G__29525 = cljs.core.count.call(null,c__4550__auto__);
var G__29526 = (0);
seq__29460 = G__29523;
chunk__29461 = G__29524;
count__29462 = G__29525;
i__29463 = G__29526;
continue;
} else {
var role = cljs.core.first.call(null,seq__29460__$1);
var temp__5720__auto___29527__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___29527__$2)){
var spec_29528 = temp__5720__auto___29527__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29528));
} else {
}


var G__29529 = cljs.core.next.call(null,seq__29460__$1);
var G__29530 = null;
var G__29531 = (0);
var G__29532 = (0);
seq__29460 = G__29529;
chunk__29461 = G__29530;
count__29462 = G__29531;
i__29463 = G__29532;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__29533 = cljs.core.conj.call(null,via,t);
var G__29534 = cljs.core.ex_cause.call(null,t);
via = G__29533;
t = G__29534;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__29537 = datafied_throwable;
var map__29537__$1 = (((((!((map__29537 == null))))?(((((map__29537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29537):map__29537);
var via = cljs.core.get.call(null,map__29537__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__29537__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__29537__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__29538 = cljs.core.last.call(null,via);
var map__29538__$1 = (((((!((map__29538 == null))))?(((((map__29538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29538):map__29538);
var type = cljs.core.get.call(null,map__29538__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__29538__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__29538__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__29539 = data;
var map__29539__$1 = (((((!((map__29539 == null))))?(((((map__29539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29539):map__29539);
var problems = cljs.core.get.call(null,map__29539__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__29539__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__29539__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__29540 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__29540__$1 = (((((!((map__29540 == null))))?(((((map__29540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29540.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29540):map__29540);
var top_data = map__29540__$1;
var source = cljs.core.get.call(null,map__29540__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__29545 = phase;
var G__29545__$1 = (((G__29545 instanceof cljs.core.Keyword))?G__29545.fqn:null);
switch (G__29545__$1) {
case "read-source":
var map__29546 = data;
var map__29546__$1 = (((((!((map__29546 == null))))?(((((map__29546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29546):map__29546);
var line = cljs.core.get.call(null,map__29546__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__29546__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__29548 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__29548__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__29548,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__29548);
var G__29548__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__29548__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__29548__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__29548__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__29548__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__29549 = top_data;
var G__29549__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__29549,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__29549);
var G__29549__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__29549__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__29549__$1);
var G__29549__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__29549__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__29549__$2);
var G__29549__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__29549__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__29549__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__29549__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__29549__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__29550 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__29550,(0),null);
var method = cljs.core.nth.call(null,vec__29550,(1),null);
var file = cljs.core.nth.call(null,vec__29550,(2),null);
var line = cljs.core.nth.call(null,vec__29550,(3),null);
var G__29553 = top_data;
var G__29553__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__29553,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__29553);
var G__29553__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__29553__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__29553__$1);
var G__29553__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__29553__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__29553__$2);
var G__29553__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__29553__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__29553__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__29553__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__29553__$4;
}

break;
case "execution":
var vec__29554 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__29554,(0),null);
var method = cljs.core.nth.call(null,vec__29554,(1),null);
var file = cljs.core.nth.call(null,vec__29554,(2),null);
var line = cljs.core.nth.call(null,vec__29554,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__29554,source__$1,method,file,line,G__29545,G__29545__$1,map__29537,map__29537__$1,via,trace,phase,map__29538,map__29538__$1,type,message,data,map__29539,map__29539__$1,problems,fn,caller,map__29540,map__29540__$1,top_data,source){
return (function (p1__29536_SHARP_){
var or__4131__auto__ = (p1__29536_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__29536_SHARP_);
}
});})(vec__29554,source__$1,method,file,line,G__29545,G__29545__$1,map__29537,map__29537__$1,via,trace,phase,map__29538,map__29538__$1,type,message,data,map__29539,map__29539__$1,problems,fn,caller,map__29540,map__29540__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__29557 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__29557__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__29557,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__29557);
var G__29557__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__29557__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__29557__$1);
var G__29557__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__29557__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__29557__$2);
var G__29557__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__29557__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__29557__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__29557__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__29557__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29545__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__29561){
var map__29562 = p__29561;
var map__29562__$1 = (((((!((map__29562 == null))))?(((((map__29562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29562.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29562):map__29562);
var triage_data = map__29562__$1;
var phase = cljs.core.get.call(null,map__29562__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__29562__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__29562__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__29562__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__29562__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__29562__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__29562__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__29562__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__29564 = phase;
var G__29564__$1 = (((G__29564 instanceof cljs.core.Keyword))?G__29564.fqn:null);
switch (G__29564__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29565_29574 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29566_29575 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29567_29576 = true;
var _STAR_print_fn_STAR__temp_val__29568_29577 = ((function (_STAR_print_newline_STAR__orig_val__29565_29574,_STAR_print_fn_STAR__orig_val__29566_29575,_STAR_print_newline_STAR__temp_val__29567_29576,sb__4661__auto__,G__29564,G__29564__$1,loc,class_name,simple_class,cause_type,format,map__29562,map__29562__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__29565_29574,_STAR_print_fn_STAR__orig_val__29566_29575,_STAR_print_newline_STAR__temp_val__29567_29576,sb__4661__auto__,G__29564,G__29564__$1,loc,class_name,simple_class,cause_type,format,map__29562,map__29562__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29567_29576;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29568_29577;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__29565_29574,_STAR_print_fn_STAR__orig_val__29566_29575,_STAR_print_newline_STAR__temp_val__29567_29576,_STAR_print_fn_STAR__temp_val__29568_29577,sb__4661__auto__,G__29564,G__29564__$1,loc,class_name,simple_class,cause_type,format,map__29562,map__29562__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__29565_29574,_STAR_print_fn_STAR__orig_val__29566_29575,_STAR_print_newline_STAR__temp_val__29567_29576,_STAR_print_fn_STAR__temp_val__29568_29577,sb__4661__auto__,G__29564,G__29564__$1,loc,class_name,simple_class,cause_type,format,map__29562,map__29562__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__29559_SHARP_){
return cljs.core.dissoc.call(null,p1__29559_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__29565_29574,_STAR_print_fn_STAR__orig_val__29566_29575,_STAR_print_newline_STAR__temp_val__29567_29576,_STAR_print_fn_STAR__temp_val__29568_29577,sb__4661__auto__,G__29564,G__29564__$1,loc,class_name,simple_class,cause_type,format,map__29562,map__29562__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__29565_29574,_STAR_print_fn_STAR__orig_val__29566_29575,_STAR_print_newline_STAR__temp_val__29567_29576,_STAR_print_fn_STAR__temp_val__29568_29577,sb__4661__auto__,G__29564,G__29564__$1,loc,class_name,simple_class,cause_type,format,map__29562,map__29562__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29566_29575;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29565_29574;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29569_29578 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29570_29579 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29571_29580 = true;
var _STAR_print_fn_STAR__temp_val__29572_29581 = ((function (_STAR_print_newline_STAR__orig_val__29569_29578,_STAR_print_fn_STAR__orig_val__29570_29579,_STAR_print_newline_STAR__temp_val__29571_29580,sb__4661__auto__,G__29564,G__29564__$1,loc,class_name,simple_class,cause_type,format,map__29562,map__29562__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__29569_29578,_STAR_print_fn_STAR__orig_val__29570_29579,_STAR_print_newline_STAR__temp_val__29571_29580,sb__4661__auto__,G__29564,G__29564__$1,loc,class_name,simple_class,cause_type,format,map__29562,map__29562__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29571_29580;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29572_29581;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__29569_29578,_STAR_print_fn_STAR__orig_val__29570_29579,_STAR_print_newline_STAR__temp_val__29571_29580,_STAR_print_fn_STAR__temp_val__29572_29581,sb__4661__auto__,G__29564,G__29564__$1,loc,class_name,simple_class,cause_type,format,map__29562,map__29562__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__29569_29578,_STAR_print_fn_STAR__orig_val__29570_29579,_STAR_print_newline_STAR__temp_val__29571_29580,_STAR_print_fn_STAR__temp_val__29572_29581,sb__4661__auto__,G__29564,G__29564__$1,loc,class_name,simple_class,cause_type,format,map__29562,map__29562__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__29560_SHARP_){
return cljs.core.dissoc.call(null,p1__29560_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__29569_29578,_STAR_print_fn_STAR__orig_val__29570_29579,_STAR_print_newline_STAR__temp_val__29571_29580,_STAR_print_fn_STAR__temp_val__29572_29581,sb__4661__auto__,G__29564,G__29564__$1,loc,class_name,simple_class,cause_type,format,map__29562,map__29562__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__29569_29578,_STAR_print_fn_STAR__orig_val__29570_29579,_STAR_print_newline_STAR__temp_val__29571_29580,_STAR_print_fn_STAR__temp_val__29572_29581,sb__4661__auto__,G__29564,G__29564__$1,loc,class_name,simple_class,cause_type,format,map__29562,map__29562__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29570_29579;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29569_29578;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29564__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1562604887682
