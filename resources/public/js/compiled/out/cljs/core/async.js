// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__25845 = arguments.length;
switch (G__25845) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25846 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25846 = (function (f,blockable,meta25847){
this.f = f;
this.blockable = blockable;
this.meta25847 = meta25847;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25848,meta25847__$1){
var self__ = this;
var _25848__$1 = this;
return (new cljs.core.async.t_cljs$core$async25846(self__.f,self__.blockable,meta25847__$1));
});

cljs.core.async.t_cljs$core$async25846.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25848){
var self__ = this;
var _25848__$1 = this;
return self__.meta25847;
});

cljs.core.async.t_cljs$core$async25846.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25846.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25846.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async25846.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async25846.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta25847","meta25847",420713292,null)], null);
});

cljs.core.async.t_cljs$core$async25846.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25846.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25846";

cljs.core.async.t_cljs$core$async25846.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25846");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25846.
 */
cljs.core.async.__GT_t_cljs$core$async25846 = (function cljs$core$async$__GT_t_cljs$core$async25846(f__$1,blockable__$1,meta25847){
return (new cljs.core.async.t_cljs$core$async25846(f__$1,blockable__$1,meta25847));
});

}

return (new cljs.core.async.t_cljs$core$async25846(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__25852 = arguments.length;
switch (G__25852) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__25855 = arguments.length;
switch (G__25855) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__25858 = arguments.length;
switch (G__25858) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_25860 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25860);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25860,ret){
return (function (){
return fn1.call(null,val_25860);
});})(val_25860,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__25862 = arguments.length;
switch (G__25862) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5718__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___25864 = n;
var x_25865 = (0);
while(true){
if((x_25865 < n__4607__auto___25864)){
(a[x_25865] = x_25865);

var G__25866 = (x_25865 + (1));
x_25865 = G__25866;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25867 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25867 = (function (flag,meta25868){
this.flag = flag;
this.meta25868 = meta25868;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25867.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25869,meta25868__$1){
var self__ = this;
var _25869__$1 = this;
return (new cljs.core.async.t_cljs$core$async25867(self__.flag,meta25868__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async25867.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25869){
var self__ = this;
var _25869__$1 = this;
return self__.meta25868;
});})(flag))
;

cljs.core.async.t_cljs$core$async25867.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25867.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async25867.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25867.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25867.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25868","meta25868",-1560652737,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async25867.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25867.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25867";

cljs.core.async.t_cljs$core$async25867.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25867");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25867.
 */
cljs.core.async.__GT_t_cljs$core$async25867 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async25867(flag__$1,meta25868){
return (new cljs.core.async.t_cljs$core$async25867(flag__$1,meta25868));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async25867(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25870 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25870 = (function (flag,cb,meta25871){
this.flag = flag;
this.cb = cb;
this.meta25871 = meta25871;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25870.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25872,meta25871__$1){
var self__ = this;
var _25872__$1 = this;
return (new cljs.core.async.t_cljs$core$async25870(self__.flag,self__.cb,meta25871__$1));
});

cljs.core.async.t_cljs$core$async25870.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25872){
var self__ = this;
var _25872__$1 = this;
return self__.meta25871;
});

cljs.core.async.t_cljs$core$async25870.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25870.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async25870.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25870.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async25870.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25871","meta25871",-1726947999,null)], null);
});

cljs.core.async.t_cljs$core$async25870.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25870.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25870";

cljs.core.async.t_cljs$core$async25870.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25870");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25870.
 */
cljs.core.async.__GT_t_cljs$core$async25870 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async25870(flag__$1,cb__$1,meta25871){
return (new cljs.core.async.t_cljs$core$async25870(flag__$1,cb__$1,meta25871));
});

}

return (new cljs.core.async.t_cljs$core$async25870(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25873_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25873_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25874_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25874_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__25875 = (i + (1));
i = G__25875;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25881 = arguments.length;
var i__4731__auto___25882 = (0);
while(true){
if((i__4731__auto___25882 < len__4730__auto___25881)){
args__4736__auto__.push((arguments[i__4731__auto___25882]));

var G__25883 = (i__4731__auto___25882 + (1));
i__4731__auto___25882 = G__25883;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25878){
var map__25879 = p__25878;
var map__25879__$1 = (((((!((map__25879 == null))))?(((((map__25879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25879):map__25879);
var opts = map__25879__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25876){
var G__25877 = cljs.core.first.call(null,seq25876);
var seq25876__$1 = cljs.core.next.call(null,seq25876);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25877,seq25876__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__25885 = arguments.length;
switch (G__25885) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__25785__auto___25931 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25785__auto___25931){
return (function (){
var f__25786__auto__ = (function (){var switch__25690__auto__ = ((function (c__25785__auto___25931){
return (function (state_25909){
var state_val_25910 = (state_25909[(1)]);
if((state_val_25910 === (7))){
var inst_25905 = (state_25909[(2)]);
var state_25909__$1 = state_25909;
var statearr_25911_25932 = state_25909__$1;
(statearr_25911_25932[(2)] = inst_25905);

(statearr_25911_25932[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25910 === (1))){
var state_25909__$1 = state_25909;
var statearr_25912_25933 = state_25909__$1;
(statearr_25912_25933[(2)] = null);

(statearr_25912_25933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25910 === (4))){
var inst_25888 = (state_25909[(7)]);
var inst_25888__$1 = (state_25909[(2)]);
var inst_25889 = (inst_25888__$1 == null);
var state_25909__$1 = (function (){var statearr_25913 = state_25909;
(statearr_25913[(7)] = inst_25888__$1);

return statearr_25913;
})();
if(cljs.core.truth_(inst_25889)){
var statearr_25914_25934 = state_25909__$1;
(statearr_25914_25934[(1)] = (5));

} else {
var statearr_25915_25935 = state_25909__$1;
(statearr_25915_25935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25910 === (13))){
var state_25909__$1 = state_25909;
var statearr_25916_25936 = state_25909__$1;
(statearr_25916_25936[(2)] = null);

(statearr_25916_25936[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25910 === (6))){
var inst_25888 = (state_25909[(7)]);
var state_25909__$1 = state_25909;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25909__$1,(11),to,inst_25888);
} else {
if((state_val_25910 === (3))){
var inst_25907 = (state_25909[(2)]);
var state_25909__$1 = state_25909;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25909__$1,inst_25907);
} else {
if((state_val_25910 === (12))){
var state_25909__$1 = state_25909;
var statearr_25917_25937 = state_25909__$1;
(statearr_25917_25937[(2)] = null);

(statearr_25917_25937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25910 === (2))){
var state_25909__$1 = state_25909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25909__$1,(4),from);
} else {
if((state_val_25910 === (11))){
var inst_25898 = (state_25909[(2)]);
var state_25909__$1 = state_25909;
if(cljs.core.truth_(inst_25898)){
var statearr_25918_25938 = state_25909__$1;
(statearr_25918_25938[(1)] = (12));

} else {
var statearr_25919_25939 = state_25909__$1;
(statearr_25919_25939[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25910 === (9))){
var state_25909__$1 = state_25909;
var statearr_25920_25940 = state_25909__$1;
(statearr_25920_25940[(2)] = null);

(statearr_25920_25940[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25910 === (5))){
var state_25909__$1 = state_25909;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25921_25941 = state_25909__$1;
(statearr_25921_25941[(1)] = (8));

} else {
var statearr_25922_25942 = state_25909__$1;
(statearr_25922_25942[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25910 === (14))){
var inst_25903 = (state_25909[(2)]);
var state_25909__$1 = state_25909;
var statearr_25923_25943 = state_25909__$1;
(statearr_25923_25943[(2)] = inst_25903);

(statearr_25923_25943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25910 === (10))){
var inst_25895 = (state_25909[(2)]);
var state_25909__$1 = state_25909;
var statearr_25924_25944 = state_25909__$1;
(statearr_25924_25944[(2)] = inst_25895);

(statearr_25924_25944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25910 === (8))){
var inst_25892 = cljs.core.async.close_BANG_.call(null,to);
var state_25909__$1 = state_25909;
var statearr_25925_25945 = state_25909__$1;
(statearr_25925_25945[(2)] = inst_25892);

(statearr_25925_25945[(1)] = (10));


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
});})(c__25785__auto___25931))
;
return ((function (switch__25690__auto__,c__25785__auto___25931){
return (function() {
var cljs$core$async$state_machine__25691__auto__ = null;
var cljs$core$async$state_machine__25691__auto____0 = (function (){
var statearr_25926 = [null,null,null,null,null,null,null,null];
(statearr_25926[(0)] = cljs$core$async$state_machine__25691__auto__);

(statearr_25926[(1)] = (1));

return statearr_25926;
});
var cljs$core$async$state_machine__25691__auto____1 = (function (state_25909){
while(true){
var ret_value__25692__auto__ = (function (){try{while(true){
var result__25693__auto__ = switch__25690__auto__.call(null,state_25909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25693__auto__;
}
break;
}
}catch (e25927){if((e25927 instanceof Object)){
var ex__25694__auto__ = e25927;
var statearr_25928_25946 = state_25909;
(statearr_25928_25946[(5)] = ex__25694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25927;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25947 = state_25909;
state_25909 = G__25947;
continue;
} else {
return ret_value__25692__auto__;
}
break;
}
});
cljs$core$async$state_machine__25691__auto__ = function(state_25909){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25691__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25691__auto____1.call(this,state_25909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25691__auto____0;
cljs$core$async$state_machine__25691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25691__auto____1;
return cljs$core$async$state_machine__25691__auto__;
})()
;})(switch__25690__auto__,c__25785__auto___25931))
})();
var state__25787__auto__ = (function (){var statearr_25929 = f__25786__auto__.call(null);
(statearr_25929[(6)] = c__25785__auto___25931);

return statearr_25929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25787__auto__);
});})(c__25785__auto___25931))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__25948){
var vec__25949 = p__25948;
var v = cljs.core.nth.call(null,vec__25949,(0),null);
var p = cljs.core.nth.call(null,vec__25949,(1),null);
var job = vec__25949;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__25785__auto___26120 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25785__auto___26120,res,vec__25949,v,p,job,jobs,results){
return (function (){
var f__25786__auto__ = (function (){var switch__25690__auto__ = ((function (c__25785__auto___26120,res,vec__25949,v,p,job,jobs,results){
return (function (state_25956){
var state_val_25957 = (state_25956[(1)]);
if((state_val_25957 === (1))){
var state_25956__$1 = state_25956;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25956__$1,(2),res,v);
} else {
if((state_val_25957 === (2))){
var inst_25953 = (state_25956[(2)]);
var inst_25954 = cljs.core.async.close_BANG_.call(null,res);
var state_25956__$1 = (function (){var statearr_25958 = state_25956;
(statearr_25958[(7)] = inst_25953);

return statearr_25958;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25956__$1,inst_25954);
} else {
return null;
}
}
});})(c__25785__auto___26120,res,vec__25949,v,p,job,jobs,results))
;
return ((function (switch__25690__auto__,c__25785__auto___26120,res,vec__25949,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25691__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25691__auto____0 = (function (){
var statearr_25959 = [null,null,null,null,null,null,null,null];
(statearr_25959[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25691__auto__);

(statearr_25959[(1)] = (1));

return statearr_25959;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25691__auto____1 = (function (state_25956){
while(true){
var ret_value__25692__auto__ = (function (){try{while(true){
var result__25693__auto__ = switch__25690__auto__.call(null,state_25956);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25693__auto__;
}
break;
}
}catch (e25960){if((e25960 instanceof Object)){
var ex__25694__auto__ = e25960;
var statearr_25961_26121 = state_25956;
(statearr_25961_26121[(5)] = ex__25694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25960;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26122 = state_25956;
state_25956 = G__26122;
continue;
} else {
return ret_value__25692__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25691__auto__ = function(state_25956){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25691__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25691__auto____1.call(this,state_25956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25691__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25691__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25691__auto__;
})()
;})(switch__25690__auto__,c__25785__auto___26120,res,vec__25949,v,p,job,jobs,results))
})();
var state__25787__auto__ = (function (){var statearr_25962 = f__25786__auto__.call(null);
(statearr_25962[(6)] = c__25785__auto___26120);

return statearr_25962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25787__auto__);
});})(c__25785__auto___26120,res,vec__25949,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25963){
var vec__25964 = p__25963;
var v = cljs.core.nth.call(null,vec__25964,(0),null);
var p = cljs.core.nth.call(null,vec__25964,(1),null);
var job = vec__25964;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___26123 = n;
var __26124 = (0);
while(true){
if((__26124 < n__4607__auto___26123)){
var G__25967_26125 = type;
var G__25967_26126__$1 = (((G__25967_26125 instanceof cljs.core.Keyword))?G__25967_26125.fqn:null);
switch (G__25967_26126__$1) {
case "compute":
var c__25785__auto___26128 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26124,c__25785__auto___26128,G__25967_26125,G__25967_26126__$1,n__4607__auto___26123,jobs,results,process,async){
return (function (){
var f__25786__auto__ = (function (){var switch__25690__auto__ = ((function (__26124,c__25785__auto___26128,G__25967_26125,G__25967_26126__$1,n__4607__auto___26123,jobs,results,process,async){
return (function (state_25980){
var state_val_25981 = (state_25980[(1)]);
if((state_val_25981 === (1))){
var state_25980__$1 = state_25980;
var statearr_25982_26129 = state_25980__$1;
(statearr_25982_26129[(2)] = null);

(statearr_25982_26129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25981 === (2))){
var state_25980__$1 = state_25980;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25980__$1,(4),jobs);
} else {
if((state_val_25981 === (3))){
var inst_25978 = (state_25980[(2)]);
var state_25980__$1 = state_25980;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25980__$1,inst_25978);
} else {
if((state_val_25981 === (4))){
var inst_25970 = (state_25980[(2)]);
var inst_25971 = process.call(null,inst_25970);
var state_25980__$1 = state_25980;
if(cljs.core.truth_(inst_25971)){
var statearr_25983_26130 = state_25980__$1;
(statearr_25983_26130[(1)] = (5));

} else {
var statearr_25984_26131 = state_25980__$1;
(statearr_25984_26131[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25981 === (5))){
var state_25980__$1 = state_25980;
var statearr_25985_26132 = state_25980__$1;
(statearr_25985_26132[(2)] = null);

(statearr_25985_26132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25981 === (6))){
var state_25980__$1 = state_25980;
var statearr_25986_26133 = state_25980__$1;
(statearr_25986_26133[(2)] = null);

(statearr_25986_26133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25981 === (7))){
var inst_25976 = (state_25980[(2)]);
var state_25980__$1 = state_25980;
var statearr_25987_26134 = state_25980__$1;
(statearr_25987_26134[(2)] = inst_25976);

(statearr_25987_26134[(1)] = (3));


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
});})(__26124,c__25785__auto___26128,G__25967_26125,G__25967_26126__$1,n__4607__auto___26123,jobs,results,process,async))
;
return ((function (__26124,switch__25690__auto__,c__25785__auto___26128,G__25967_26125,G__25967_26126__$1,n__4607__auto___26123,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25691__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25691__auto____0 = (function (){
var statearr_25988 = [null,null,null,null,null,null,null];
(statearr_25988[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25691__auto__);

(statearr_25988[(1)] = (1));

return statearr_25988;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25691__auto____1 = (function (state_25980){
while(true){
var ret_value__25692__auto__ = (function (){try{while(true){
var result__25693__auto__ = switch__25690__auto__.call(null,state_25980);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25693__auto__;
}
break;
}
}catch (e25989){if((e25989 instanceof Object)){
var ex__25694__auto__ = e25989;
var statearr_25990_26135 = state_25980;
(statearr_25990_26135[(5)] = ex__25694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26136 = state_25980;
state_25980 = G__26136;
continue;
} else {
return ret_value__25692__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25691__auto__ = function(state_25980){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25691__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25691__auto____1.call(this,state_25980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25691__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25691__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25691__auto__;
})()
;})(__26124,switch__25690__auto__,c__25785__auto___26128,G__25967_26125,G__25967_26126__$1,n__4607__auto___26123,jobs,results,process,async))
})();
var state__25787__auto__ = (function (){var statearr_25991 = f__25786__auto__.call(null);
(statearr_25991[(6)] = c__25785__auto___26128);

return statearr_25991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25787__auto__);
});})(__26124,c__25785__auto___26128,G__25967_26125,G__25967_26126__$1,n__4607__auto___26123,jobs,results,process,async))
);


break;
case "async":
var c__25785__auto___26137 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26124,c__25785__auto___26137,G__25967_26125,G__25967_26126__$1,n__4607__auto___26123,jobs,results,process,async){
return (function (){
var f__25786__auto__ = (function (){var switch__25690__auto__ = ((function (__26124,c__25785__auto___26137,G__25967_26125,G__25967_26126__$1,n__4607__auto___26123,jobs,results,process,async){
return (function (state_26004){
var state_val_26005 = (state_26004[(1)]);
if((state_val_26005 === (1))){
var state_26004__$1 = state_26004;
var statearr_26006_26138 = state_26004__$1;
(statearr_26006_26138[(2)] = null);

(statearr_26006_26138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26005 === (2))){
var state_26004__$1 = state_26004;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26004__$1,(4),jobs);
} else {
if((state_val_26005 === (3))){
var inst_26002 = (state_26004[(2)]);
var state_26004__$1 = state_26004;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26004__$1,inst_26002);
} else {
if((state_val_26005 === (4))){
var inst_25994 = (state_26004[(2)]);
var inst_25995 = async.call(null,inst_25994);
var state_26004__$1 = state_26004;
if(cljs.core.truth_(inst_25995)){
var statearr_26007_26139 = state_26004__$1;
(statearr_26007_26139[(1)] = (5));

} else {
var statearr_26008_26140 = state_26004__$1;
(statearr_26008_26140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26005 === (5))){
var state_26004__$1 = state_26004;
var statearr_26009_26141 = state_26004__$1;
(statearr_26009_26141[(2)] = null);

(statearr_26009_26141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26005 === (6))){
var state_26004__$1 = state_26004;
var statearr_26010_26142 = state_26004__$1;
(statearr_26010_26142[(2)] = null);

(statearr_26010_26142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26005 === (7))){
var inst_26000 = (state_26004[(2)]);
var state_26004__$1 = state_26004;
var statearr_26011_26143 = state_26004__$1;
(statearr_26011_26143[(2)] = inst_26000);

(statearr_26011_26143[(1)] = (3));


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
});})(__26124,c__25785__auto___26137,G__25967_26125,G__25967_26126__$1,n__4607__auto___26123,jobs,results,process,async))
;
return ((function (__26124,switch__25690__auto__,c__25785__auto___26137,G__25967_26125,G__25967_26126__$1,n__4607__auto___26123,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25691__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25691__auto____0 = (function (){
var statearr_26012 = [null,null,null,null,null,null,null];
(statearr_26012[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25691__auto__);

(statearr_26012[(1)] = (1));

return statearr_26012;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25691__auto____1 = (function (state_26004){
while(true){
var ret_value__25692__auto__ = (function (){try{while(true){
var result__25693__auto__ = switch__25690__auto__.call(null,state_26004);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25693__auto__;
}
break;
}
}catch (e26013){if((e26013 instanceof Object)){
var ex__25694__auto__ = e26013;
var statearr_26014_26144 = state_26004;
(statearr_26014_26144[(5)] = ex__25694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26145 = state_26004;
state_26004 = G__26145;
continue;
} else {
return ret_value__25692__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25691__auto__ = function(state_26004){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25691__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25691__auto____1.call(this,state_26004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25691__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25691__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25691__auto__;
})()
;})(__26124,switch__25690__auto__,c__25785__auto___26137,G__25967_26125,G__25967_26126__$1,n__4607__auto___26123,jobs,results,process,async))
})();
var state__25787__auto__ = (function (){var statearr_26015 = f__25786__auto__.call(null);
(statearr_26015[(6)] = c__25785__auto___26137);

return statearr_26015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25787__auto__);
});})(__26124,c__25785__auto___26137,G__25967_26125,G__25967_26126__$1,n__4607__auto___26123,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25967_26126__$1)].join('')));

}

var G__26146 = (__26124 + (1));
__26124 = G__26146;
continue;
} else {
}
break;
}

var c__25785__auto___26147 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25785__auto___26147,jobs,results,process,async){
return (function (){
var f__25786__auto__ = (function (){var switch__25690__auto__ = ((function (c__25785__auto___26147,jobs,results,process,async){
return (function (state_26037){
var state_val_26038 = (state_26037[(1)]);
if((state_val_26038 === (7))){
var inst_26033 = (state_26037[(2)]);
var state_26037__$1 = state_26037;
var statearr_26039_26148 = state_26037__$1;
(statearr_26039_26148[(2)] = inst_26033);

(statearr_26039_26148[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26038 === (1))){
var state_26037__$1 = state_26037;
var statearr_26040_26149 = state_26037__$1;
(statearr_26040_26149[(2)] = null);

(statearr_26040_26149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26038 === (4))){
var inst_26018 = (state_26037[(7)]);
var inst_26018__$1 = (state_26037[(2)]);
var inst_26019 = (inst_26018__$1 == null);
var state_26037__$1 = (function (){var statearr_26041 = state_26037;
(statearr_26041[(7)] = inst_26018__$1);

return statearr_26041;
})();
if(cljs.core.truth_(inst_26019)){
var statearr_26042_26150 = state_26037__$1;
(statearr_26042_26150[(1)] = (5));

} else {
var statearr_26043_26151 = state_26037__$1;
(statearr_26043_26151[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26038 === (6))){
var inst_26018 = (state_26037[(7)]);
var inst_26023 = (state_26037[(8)]);
var inst_26023__$1 = cljs.core.async.chan.call(null,(1));
var inst_26024 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26025 = [inst_26018,inst_26023__$1];
var inst_26026 = (new cljs.core.PersistentVector(null,2,(5),inst_26024,inst_26025,null));
var state_26037__$1 = (function (){var statearr_26044 = state_26037;
(statearr_26044[(8)] = inst_26023__$1);

return statearr_26044;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26037__$1,(8),jobs,inst_26026);
} else {
if((state_val_26038 === (3))){
var inst_26035 = (state_26037[(2)]);
var state_26037__$1 = state_26037;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26037__$1,inst_26035);
} else {
if((state_val_26038 === (2))){
var state_26037__$1 = state_26037;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26037__$1,(4),from);
} else {
if((state_val_26038 === (9))){
var inst_26030 = (state_26037[(2)]);
var state_26037__$1 = (function (){var statearr_26045 = state_26037;
(statearr_26045[(9)] = inst_26030);

return statearr_26045;
})();
var statearr_26046_26152 = state_26037__$1;
(statearr_26046_26152[(2)] = null);

(statearr_26046_26152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26038 === (5))){
var inst_26021 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26037__$1 = state_26037;
var statearr_26047_26153 = state_26037__$1;
(statearr_26047_26153[(2)] = inst_26021);

(statearr_26047_26153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26038 === (8))){
var inst_26023 = (state_26037[(8)]);
var inst_26028 = (state_26037[(2)]);
var state_26037__$1 = (function (){var statearr_26048 = state_26037;
(statearr_26048[(10)] = inst_26028);

return statearr_26048;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26037__$1,(9),results,inst_26023);
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
});})(c__25785__auto___26147,jobs,results,process,async))
;
return ((function (switch__25690__auto__,c__25785__auto___26147,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25691__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25691__auto____0 = (function (){
var statearr_26049 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26049[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25691__auto__);

(statearr_26049[(1)] = (1));

return statearr_26049;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25691__auto____1 = (function (state_26037){
while(true){
var ret_value__25692__auto__ = (function (){try{while(true){
var result__25693__auto__ = switch__25690__auto__.call(null,state_26037);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25693__auto__;
}
break;
}
}catch (e26050){if((e26050 instanceof Object)){
var ex__25694__auto__ = e26050;
var statearr_26051_26154 = state_26037;
(statearr_26051_26154[(5)] = ex__25694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26037);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26050;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26155 = state_26037;
state_26037 = G__26155;
continue;
} else {
return ret_value__25692__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25691__auto__ = function(state_26037){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25691__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25691__auto____1.call(this,state_26037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25691__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25691__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25691__auto__;
})()
;})(switch__25690__auto__,c__25785__auto___26147,jobs,results,process,async))
})();
var state__25787__auto__ = (function (){var statearr_26052 = f__25786__auto__.call(null);
(statearr_26052[(6)] = c__25785__auto___26147);

return statearr_26052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25787__auto__);
});})(c__25785__auto___26147,jobs,results,process,async))
);


var c__25785__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25785__auto__,jobs,results,process,async){
return (function (){
var f__25786__auto__ = (function (){var switch__25690__auto__ = ((function (c__25785__auto__,jobs,results,process,async){
return (function (state_26090){
var state_val_26091 = (state_26090[(1)]);
if((state_val_26091 === (7))){
var inst_26086 = (state_26090[(2)]);
var state_26090__$1 = state_26090;
var statearr_26092_26156 = state_26090__$1;
(statearr_26092_26156[(2)] = inst_26086);

(statearr_26092_26156[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26091 === (20))){
var state_26090__$1 = state_26090;
var statearr_26093_26157 = state_26090__$1;
(statearr_26093_26157[(2)] = null);

(statearr_26093_26157[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26091 === (1))){
var state_26090__$1 = state_26090;
var statearr_26094_26158 = state_26090__$1;
(statearr_26094_26158[(2)] = null);

(statearr_26094_26158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26091 === (4))){
var inst_26055 = (state_26090[(7)]);
var inst_26055__$1 = (state_26090[(2)]);
var inst_26056 = (inst_26055__$1 == null);
var state_26090__$1 = (function (){var statearr_26095 = state_26090;
(statearr_26095[(7)] = inst_26055__$1);

return statearr_26095;
})();
if(cljs.core.truth_(inst_26056)){
var statearr_26096_26159 = state_26090__$1;
(statearr_26096_26159[(1)] = (5));

} else {
var statearr_26097_26160 = state_26090__$1;
(statearr_26097_26160[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26091 === (15))){
var inst_26068 = (state_26090[(8)]);
var state_26090__$1 = state_26090;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26090__$1,(18),to,inst_26068);
} else {
if((state_val_26091 === (21))){
var inst_26081 = (state_26090[(2)]);
var state_26090__$1 = state_26090;
var statearr_26098_26161 = state_26090__$1;
(statearr_26098_26161[(2)] = inst_26081);

(statearr_26098_26161[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26091 === (13))){
var inst_26083 = (state_26090[(2)]);
var state_26090__$1 = (function (){var statearr_26099 = state_26090;
(statearr_26099[(9)] = inst_26083);

return statearr_26099;
})();
var statearr_26100_26162 = state_26090__$1;
(statearr_26100_26162[(2)] = null);

(statearr_26100_26162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26091 === (6))){
var inst_26055 = (state_26090[(7)]);
var state_26090__$1 = state_26090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26090__$1,(11),inst_26055);
} else {
if((state_val_26091 === (17))){
var inst_26076 = (state_26090[(2)]);
var state_26090__$1 = state_26090;
if(cljs.core.truth_(inst_26076)){
var statearr_26101_26163 = state_26090__$1;
(statearr_26101_26163[(1)] = (19));

} else {
var statearr_26102_26164 = state_26090__$1;
(statearr_26102_26164[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26091 === (3))){
var inst_26088 = (state_26090[(2)]);
var state_26090__$1 = state_26090;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26090__$1,inst_26088);
} else {
if((state_val_26091 === (12))){
var inst_26065 = (state_26090[(10)]);
var state_26090__$1 = state_26090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26090__$1,(14),inst_26065);
} else {
if((state_val_26091 === (2))){
var state_26090__$1 = state_26090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26090__$1,(4),results);
} else {
if((state_val_26091 === (19))){
var state_26090__$1 = state_26090;
var statearr_26103_26165 = state_26090__$1;
(statearr_26103_26165[(2)] = null);

(statearr_26103_26165[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26091 === (11))){
var inst_26065 = (state_26090[(2)]);
var state_26090__$1 = (function (){var statearr_26104 = state_26090;
(statearr_26104[(10)] = inst_26065);

return statearr_26104;
})();
var statearr_26105_26166 = state_26090__$1;
(statearr_26105_26166[(2)] = null);

(statearr_26105_26166[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26091 === (9))){
var state_26090__$1 = state_26090;
var statearr_26106_26167 = state_26090__$1;
(statearr_26106_26167[(2)] = null);

(statearr_26106_26167[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26091 === (5))){
var state_26090__$1 = state_26090;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26107_26168 = state_26090__$1;
(statearr_26107_26168[(1)] = (8));

} else {
var statearr_26108_26169 = state_26090__$1;
(statearr_26108_26169[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26091 === (14))){
var inst_26068 = (state_26090[(8)]);
var inst_26070 = (state_26090[(11)]);
var inst_26068__$1 = (state_26090[(2)]);
var inst_26069 = (inst_26068__$1 == null);
var inst_26070__$1 = cljs.core.not.call(null,inst_26069);
var state_26090__$1 = (function (){var statearr_26109 = state_26090;
(statearr_26109[(8)] = inst_26068__$1);

(statearr_26109[(11)] = inst_26070__$1);

return statearr_26109;
})();
if(inst_26070__$1){
var statearr_26110_26170 = state_26090__$1;
(statearr_26110_26170[(1)] = (15));

} else {
var statearr_26111_26171 = state_26090__$1;
(statearr_26111_26171[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26091 === (16))){
var inst_26070 = (state_26090[(11)]);
var state_26090__$1 = state_26090;
var statearr_26112_26172 = state_26090__$1;
(statearr_26112_26172[(2)] = inst_26070);

(statearr_26112_26172[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26091 === (10))){
var inst_26062 = (state_26090[(2)]);
var state_26090__$1 = state_26090;
var statearr_26113_26173 = state_26090__$1;
(statearr_26113_26173[(2)] = inst_26062);

(statearr_26113_26173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26091 === (18))){
var inst_26073 = (state_26090[(2)]);
var state_26090__$1 = state_26090;
var statearr_26114_26174 = state_26090__$1;
(statearr_26114_26174[(2)] = inst_26073);

(statearr_26114_26174[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26091 === (8))){
var inst_26059 = cljs.core.async.close_BANG_.call(null,to);
var state_26090__$1 = state_26090;
var statearr_26115_26175 = state_26090__$1;
(statearr_26115_26175[(2)] = inst_26059);

(statearr_26115_26175[(1)] = (10));


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
});})(c__25785__auto__,jobs,results,process,async))
;
return ((function (switch__25690__auto__,c__25785__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25691__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25691__auto____0 = (function (){
var statearr_26116 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26116[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25691__auto__);

(statearr_26116[(1)] = (1));

return statearr_26116;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25691__auto____1 = (function (state_26090){
while(true){
var ret_value__25692__auto__ = (function (){try{while(true){
var result__25693__auto__ = switch__25690__auto__.call(null,state_26090);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25693__auto__;
}
break;
}
}catch (e26117){if((e26117 instanceof Object)){
var ex__25694__auto__ = e26117;
var statearr_26118_26176 = state_26090;
(statearr_26118_26176[(5)] = ex__25694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26117;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26177 = state_26090;
state_26090 = G__26177;
continue;
} else {
return ret_value__25692__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25691__auto__ = function(state_26090){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25691__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25691__auto____1.call(this,state_26090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25691__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25691__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25691__auto__;
})()
;})(switch__25690__auto__,c__25785__auto__,jobs,results,process,async))
})();
var state__25787__auto__ = (function (){var statearr_26119 = f__25786__auto__.call(null);
(statearr_26119[(6)] = c__25785__auto__);

return statearr_26119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25787__auto__);
});})(c__25785__auto__,jobs,results,process,async))
);

return c__25785__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__26179 = arguments.length;
switch (G__26179) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__26182 = arguments.length;
switch (G__26182) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__26185 = arguments.length;
switch (G__26185) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__25785__auto___26234 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25785__auto___26234,tc,fc){
return (function (){
var f__25786__auto__ = (function (){var switch__25690__auto__ = ((function (c__25785__auto___26234,tc,fc){
return (function (state_26211){
var state_val_26212 = (state_26211[(1)]);
if((state_val_26212 === (7))){
var inst_26207 = (state_26211[(2)]);
var state_26211__$1 = state_26211;
var statearr_26213_26235 = state_26211__$1;
(statearr_26213_26235[(2)] = inst_26207);

(statearr_26213_26235[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26212 === (1))){
var state_26211__$1 = state_26211;
var statearr_26214_26236 = state_26211__$1;
(statearr_26214_26236[(2)] = null);

(statearr_26214_26236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26212 === (4))){
var inst_26188 = (state_26211[(7)]);
var inst_26188__$1 = (state_26211[(2)]);
var inst_26189 = (inst_26188__$1 == null);
var state_26211__$1 = (function (){var statearr_26215 = state_26211;
(statearr_26215[(7)] = inst_26188__$1);

return statearr_26215;
})();
if(cljs.core.truth_(inst_26189)){
var statearr_26216_26237 = state_26211__$1;
(statearr_26216_26237[(1)] = (5));

} else {
var statearr_26217_26238 = state_26211__$1;
(statearr_26217_26238[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26212 === (13))){
var state_26211__$1 = state_26211;
var statearr_26218_26239 = state_26211__$1;
(statearr_26218_26239[(2)] = null);

(statearr_26218_26239[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26212 === (6))){
var inst_26188 = (state_26211[(7)]);
var inst_26194 = p.call(null,inst_26188);
var state_26211__$1 = state_26211;
if(cljs.core.truth_(inst_26194)){
var statearr_26219_26240 = state_26211__$1;
(statearr_26219_26240[(1)] = (9));

} else {
var statearr_26220_26241 = state_26211__$1;
(statearr_26220_26241[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26212 === (3))){
var inst_26209 = (state_26211[(2)]);
var state_26211__$1 = state_26211;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26211__$1,inst_26209);
} else {
if((state_val_26212 === (12))){
var state_26211__$1 = state_26211;
var statearr_26221_26242 = state_26211__$1;
(statearr_26221_26242[(2)] = null);

(statearr_26221_26242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26212 === (2))){
var state_26211__$1 = state_26211;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26211__$1,(4),ch);
} else {
if((state_val_26212 === (11))){
var inst_26188 = (state_26211[(7)]);
var inst_26198 = (state_26211[(2)]);
var state_26211__$1 = state_26211;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26211__$1,(8),inst_26198,inst_26188);
} else {
if((state_val_26212 === (9))){
var state_26211__$1 = state_26211;
var statearr_26222_26243 = state_26211__$1;
(statearr_26222_26243[(2)] = tc);

(statearr_26222_26243[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26212 === (5))){
var inst_26191 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26192 = cljs.core.async.close_BANG_.call(null,fc);
var state_26211__$1 = (function (){var statearr_26223 = state_26211;
(statearr_26223[(8)] = inst_26191);

return statearr_26223;
})();
var statearr_26224_26244 = state_26211__$1;
(statearr_26224_26244[(2)] = inst_26192);

(statearr_26224_26244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26212 === (14))){
var inst_26205 = (state_26211[(2)]);
var state_26211__$1 = state_26211;
var statearr_26225_26245 = state_26211__$1;
(statearr_26225_26245[(2)] = inst_26205);

(statearr_26225_26245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26212 === (10))){
var state_26211__$1 = state_26211;
var statearr_26226_26246 = state_26211__$1;
(statearr_26226_26246[(2)] = fc);

(statearr_26226_26246[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26212 === (8))){
var inst_26200 = (state_26211[(2)]);
var state_26211__$1 = state_26211;
if(cljs.core.truth_(inst_26200)){
var statearr_26227_26247 = state_26211__$1;
(statearr_26227_26247[(1)] = (12));

} else {
var statearr_26228_26248 = state_26211__$1;
(statearr_26228_26248[(1)] = (13));

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
});})(c__25785__auto___26234,tc,fc))
;
return ((function (switch__25690__auto__,c__25785__auto___26234,tc,fc){
return (function() {
var cljs$core$async$state_machine__25691__auto__ = null;
var cljs$core$async$state_machine__25691__auto____0 = (function (){
var statearr_26229 = [null,null,null,null,null,null,null,null,null];
(statearr_26229[(0)] = cljs$core$async$state_machine__25691__auto__);

(statearr_26229[(1)] = (1));

return statearr_26229;
});
var cljs$core$async$state_machine__25691__auto____1 = (function (state_26211){
while(true){
var ret_value__25692__auto__ = (function (){try{while(true){
var result__25693__auto__ = switch__25690__auto__.call(null,state_26211);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25693__auto__;
}
break;
}
}catch (e26230){if((e26230 instanceof Object)){
var ex__25694__auto__ = e26230;
var statearr_26231_26249 = state_26211;
(statearr_26231_26249[(5)] = ex__25694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26250 = state_26211;
state_26211 = G__26250;
continue;
} else {
return ret_value__25692__auto__;
}
break;
}
});
cljs$core$async$state_machine__25691__auto__ = function(state_26211){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25691__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25691__auto____1.call(this,state_26211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25691__auto____0;
cljs$core$async$state_machine__25691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25691__auto____1;
return cljs$core$async$state_machine__25691__auto__;
})()
;})(switch__25690__auto__,c__25785__auto___26234,tc,fc))
})();
var state__25787__auto__ = (function (){var statearr_26232 = f__25786__auto__.call(null);
(statearr_26232[(6)] = c__25785__auto___26234);

return statearr_26232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25787__auto__);
});})(c__25785__auto___26234,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__25785__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25785__auto__){
return (function (){
var f__25786__auto__ = (function (){var switch__25690__auto__ = ((function (c__25785__auto__){
return (function (state_26271){
var state_val_26272 = (state_26271[(1)]);
if((state_val_26272 === (7))){
var inst_26267 = (state_26271[(2)]);
var state_26271__$1 = state_26271;
var statearr_26273_26291 = state_26271__$1;
(statearr_26273_26291[(2)] = inst_26267);

(statearr_26273_26291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26272 === (1))){
var inst_26251 = init;
var state_26271__$1 = (function (){var statearr_26274 = state_26271;
(statearr_26274[(7)] = inst_26251);

return statearr_26274;
})();
var statearr_26275_26292 = state_26271__$1;
(statearr_26275_26292[(2)] = null);

(statearr_26275_26292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26272 === (4))){
var inst_26254 = (state_26271[(8)]);
var inst_26254__$1 = (state_26271[(2)]);
var inst_26255 = (inst_26254__$1 == null);
var state_26271__$1 = (function (){var statearr_26276 = state_26271;
(statearr_26276[(8)] = inst_26254__$1);

return statearr_26276;
})();
if(cljs.core.truth_(inst_26255)){
var statearr_26277_26293 = state_26271__$1;
(statearr_26277_26293[(1)] = (5));

} else {
var statearr_26278_26294 = state_26271__$1;
(statearr_26278_26294[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26272 === (6))){
var inst_26254 = (state_26271[(8)]);
var inst_26258 = (state_26271[(9)]);
var inst_26251 = (state_26271[(7)]);
var inst_26258__$1 = f.call(null,inst_26251,inst_26254);
var inst_26259 = cljs.core.reduced_QMARK_.call(null,inst_26258__$1);
var state_26271__$1 = (function (){var statearr_26279 = state_26271;
(statearr_26279[(9)] = inst_26258__$1);

return statearr_26279;
})();
if(inst_26259){
var statearr_26280_26295 = state_26271__$1;
(statearr_26280_26295[(1)] = (8));

} else {
var statearr_26281_26296 = state_26271__$1;
(statearr_26281_26296[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26272 === (3))){
var inst_26269 = (state_26271[(2)]);
var state_26271__$1 = state_26271;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26271__$1,inst_26269);
} else {
if((state_val_26272 === (2))){
var state_26271__$1 = state_26271;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26271__$1,(4),ch);
} else {
if((state_val_26272 === (9))){
var inst_26258 = (state_26271[(9)]);
var inst_26251 = inst_26258;
var state_26271__$1 = (function (){var statearr_26282 = state_26271;
(statearr_26282[(7)] = inst_26251);

return statearr_26282;
})();
var statearr_26283_26297 = state_26271__$1;
(statearr_26283_26297[(2)] = null);

(statearr_26283_26297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26272 === (5))){
var inst_26251 = (state_26271[(7)]);
var state_26271__$1 = state_26271;
var statearr_26284_26298 = state_26271__$1;
(statearr_26284_26298[(2)] = inst_26251);

(statearr_26284_26298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26272 === (10))){
var inst_26265 = (state_26271[(2)]);
var state_26271__$1 = state_26271;
var statearr_26285_26299 = state_26271__$1;
(statearr_26285_26299[(2)] = inst_26265);

(statearr_26285_26299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26272 === (8))){
var inst_26258 = (state_26271[(9)]);
var inst_26261 = cljs.core.deref.call(null,inst_26258);
var state_26271__$1 = state_26271;
var statearr_26286_26300 = state_26271__$1;
(statearr_26286_26300[(2)] = inst_26261);

(statearr_26286_26300[(1)] = (10));


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
});})(c__25785__auto__))
;
return ((function (switch__25690__auto__,c__25785__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__25691__auto__ = null;
var cljs$core$async$reduce_$_state_machine__25691__auto____0 = (function (){
var statearr_26287 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26287[(0)] = cljs$core$async$reduce_$_state_machine__25691__auto__);

(statearr_26287[(1)] = (1));

return statearr_26287;
});
var cljs$core$async$reduce_$_state_machine__25691__auto____1 = (function (state_26271){
while(true){
var ret_value__25692__auto__ = (function (){try{while(true){
var result__25693__auto__ = switch__25690__auto__.call(null,state_26271);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25693__auto__;
}
break;
}
}catch (e26288){if((e26288 instanceof Object)){
var ex__25694__auto__ = e26288;
var statearr_26289_26301 = state_26271;
(statearr_26289_26301[(5)] = ex__25694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26271);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26288;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26302 = state_26271;
state_26271 = G__26302;
continue;
} else {
return ret_value__25692__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__25691__auto__ = function(state_26271){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__25691__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__25691__auto____1.call(this,state_26271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__25691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__25691__auto____0;
cljs$core$async$reduce_$_state_machine__25691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__25691__auto____1;
return cljs$core$async$reduce_$_state_machine__25691__auto__;
})()
;})(switch__25690__auto__,c__25785__auto__))
})();
var state__25787__auto__ = (function (){var statearr_26290 = f__25786__auto__.call(null);
(statearr_26290[(6)] = c__25785__auto__);

return statearr_26290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25787__auto__);
});})(c__25785__auto__))
);

return c__25785__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__25785__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25785__auto__,f__$1){
return (function (){
var f__25786__auto__ = (function (){var switch__25690__auto__ = ((function (c__25785__auto__,f__$1){
return (function (state_26308){
var state_val_26309 = (state_26308[(1)]);
if((state_val_26309 === (1))){
var inst_26303 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_26308__$1 = state_26308;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26308__$1,(2),inst_26303);
} else {
if((state_val_26309 === (2))){
var inst_26305 = (state_26308[(2)]);
var inst_26306 = f__$1.call(null,inst_26305);
var state_26308__$1 = state_26308;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26308__$1,inst_26306);
} else {
return null;
}
}
});})(c__25785__auto__,f__$1))
;
return ((function (switch__25690__auto__,c__25785__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__25691__auto__ = null;
var cljs$core$async$transduce_$_state_machine__25691__auto____0 = (function (){
var statearr_26310 = [null,null,null,null,null,null,null];
(statearr_26310[(0)] = cljs$core$async$transduce_$_state_machine__25691__auto__);

(statearr_26310[(1)] = (1));

return statearr_26310;
});
var cljs$core$async$transduce_$_state_machine__25691__auto____1 = (function (state_26308){
while(true){
var ret_value__25692__auto__ = (function (){try{while(true){
var result__25693__auto__ = switch__25690__auto__.call(null,state_26308);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25693__auto__;
}
break;
}
}catch (e26311){if((e26311 instanceof Object)){
var ex__25694__auto__ = e26311;
var statearr_26312_26314 = state_26308;
(statearr_26312_26314[(5)] = ex__25694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26308);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26315 = state_26308;
state_26308 = G__26315;
continue;
} else {
return ret_value__25692__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__25691__auto__ = function(state_26308){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__25691__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__25691__auto____1.call(this,state_26308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__25691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__25691__auto____0;
cljs$core$async$transduce_$_state_machine__25691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__25691__auto____1;
return cljs$core$async$transduce_$_state_machine__25691__auto__;
})()
;})(switch__25690__auto__,c__25785__auto__,f__$1))
})();
var state__25787__auto__ = (function (){var statearr_26313 = f__25786__auto__.call(null);
(statearr_26313[(6)] = c__25785__auto__);

return statearr_26313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25787__auto__);
});})(c__25785__auto__,f__$1))
);

return c__25785__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__26317 = arguments.length;
switch (G__26317) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__25785__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25785__auto__){
return (function (){
var f__25786__auto__ = (function (){var switch__25690__auto__ = ((function (c__25785__auto__){
return (function (state_26342){
var state_val_26343 = (state_26342[(1)]);
if((state_val_26343 === (7))){
var inst_26324 = (state_26342[(2)]);
var state_26342__$1 = state_26342;
var statearr_26344_26365 = state_26342__$1;
(statearr_26344_26365[(2)] = inst_26324);

(statearr_26344_26365[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26343 === (1))){
var inst_26318 = cljs.core.seq.call(null,coll);
var inst_26319 = inst_26318;
var state_26342__$1 = (function (){var statearr_26345 = state_26342;
(statearr_26345[(7)] = inst_26319);

return statearr_26345;
})();
var statearr_26346_26366 = state_26342__$1;
(statearr_26346_26366[(2)] = null);

(statearr_26346_26366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26343 === (4))){
var inst_26319 = (state_26342[(7)]);
var inst_26322 = cljs.core.first.call(null,inst_26319);
var state_26342__$1 = state_26342;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26342__$1,(7),ch,inst_26322);
} else {
if((state_val_26343 === (13))){
var inst_26336 = (state_26342[(2)]);
var state_26342__$1 = state_26342;
var statearr_26347_26367 = state_26342__$1;
(statearr_26347_26367[(2)] = inst_26336);

(statearr_26347_26367[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26343 === (6))){
var inst_26327 = (state_26342[(2)]);
var state_26342__$1 = state_26342;
if(cljs.core.truth_(inst_26327)){
var statearr_26348_26368 = state_26342__$1;
(statearr_26348_26368[(1)] = (8));

} else {
var statearr_26349_26369 = state_26342__$1;
(statearr_26349_26369[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26343 === (3))){
var inst_26340 = (state_26342[(2)]);
var state_26342__$1 = state_26342;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26342__$1,inst_26340);
} else {
if((state_val_26343 === (12))){
var state_26342__$1 = state_26342;
var statearr_26350_26370 = state_26342__$1;
(statearr_26350_26370[(2)] = null);

(statearr_26350_26370[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26343 === (2))){
var inst_26319 = (state_26342[(7)]);
var state_26342__$1 = state_26342;
if(cljs.core.truth_(inst_26319)){
var statearr_26351_26371 = state_26342__$1;
(statearr_26351_26371[(1)] = (4));

} else {
var statearr_26352_26372 = state_26342__$1;
(statearr_26352_26372[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26343 === (11))){
var inst_26333 = cljs.core.async.close_BANG_.call(null,ch);
var state_26342__$1 = state_26342;
var statearr_26353_26373 = state_26342__$1;
(statearr_26353_26373[(2)] = inst_26333);

(statearr_26353_26373[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26343 === (9))){
var state_26342__$1 = state_26342;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26354_26374 = state_26342__$1;
(statearr_26354_26374[(1)] = (11));

} else {
var statearr_26355_26375 = state_26342__$1;
(statearr_26355_26375[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26343 === (5))){
var inst_26319 = (state_26342[(7)]);
var state_26342__$1 = state_26342;
var statearr_26356_26376 = state_26342__$1;
(statearr_26356_26376[(2)] = inst_26319);

(statearr_26356_26376[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26343 === (10))){
var inst_26338 = (state_26342[(2)]);
var state_26342__$1 = state_26342;
var statearr_26357_26377 = state_26342__$1;
(statearr_26357_26377[(2)] = inst_26338);

(statearr_26357_26377[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26343 === (8))){
var inst_26319 = (state_26342[(7)]);
var inst_26329 = cljs.core.next.call(null,inst_26319);
var inst_26319__$1 = inst_26329;
var state_26342__$1 = (function (){var statearr_26358 = state_26342;
(statearr_26358[(7)] = inst_26319__$1);

return statearr_26358;
})();
var statearr_26359_26378 = state_26342__$1;
(statearr_26359_26378[(2)] = null);

(statearr_26359_26378[(1)] = (2));


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
});})(c__25785__auto__))
;
return ((function (switch__25690__auto__,c__25785__auto__){
return (function() {
var cljs$core$async$state_machine__25691__auto__ = null;
var cljs$core$async$state_machine__25691__auto____0 = (function (){
var statearr_26360 = [null,null,null,null,null,null,null,null];
(statearr_26360[(0)] = cljs$core$async$state_machine__25691__auto__);

(statearr_26360[(1)] = (1));

return statearr_26360;
});
var cljs$core$async$state_machine__25691__auto____1 = (function (state_26342){
while(true){
var ret_value__25692__auto__ = (function (){try{while(true){
var result__25693__auto__ = switch__25690__auto__.call(null,state_26342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25693__auto__;
}
break;
}
}catch (e26361){if((e26361 instanceof Object)){
var ex__25694__auto__ = e26361;
var statearr_26362_26379 = state_26342;
(statearr_26362_26379[(5)] = ex__25694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26361;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26380 = state_26342;
state_26342 = G__26380;
continue;
} else {
return ret_value__25692__auto__;
}
break;
}
});
cljs$core$async$state_machine__25691__auto__ = function(state_26342){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25691__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25691__auto____1.call(this,state_26342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25691__auto____0;
cljs$core$async$state_machine__25691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25691__auto____1;
return cljs$core$async$state_machine__25691__auto__;
})()
;})(switch__25690__auto__,c__25785__auto__))
})();
var state__25787__auto__ = (function (){var statearr_26363 = f__25786__auto__.call(null);
(statearr_26363[(6)] = c__25785__auto__);

return statearr_26363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25787__auto__);
});})(c__25785__auto__))
);

return c__25785__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26381 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26381 = (function (ch,cs,meta26382){
this.ch = ch;
this.cs = cs;
this.meta26382 = meta26382;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26383,meta26382__$1){
var self__ = this;
var _26383__$1 = this;
return (new cljs.core.async.t_cljs$core$async26381(self__.ch,self__.cs,meta26382__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async26381.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26383){
var self__ = this;
var _26383__$1 = this;
return self__.meta26382;
});})(cs))
;

cljs.core.async.t_cljs$core$async26381.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26381.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async26381.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26381.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26381.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26381.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26381.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta26382","meta26382",-81596300,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async26381.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26381.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26381";

cljs.core.async.t_cljs$core$async26381.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26381");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26381.
 */
cljs.core.async.__GT_t_cljs$core$async26381 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async26381(ch__$1,cs__$1,meta26382){
return (new cljs.core.async.t_cljs$core$async26381(ch__$1,cs__$1,meta26382));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async26381(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__25785__auto___26603 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25785__auto___26603,cs,m,dchan,dctr,done){
return (function (){
var f__25786__auto__ = (function (){var switch__25690__auto__ = ((function (c__25785__auto___26603,cs,m,dchan,dctr,done){
return (function (state_26518){
var state_val_26519 = (state_26518[(1)]);
if((state_val_26519 === (7))){
var inst_26514 = (state_26518[(2)]);
var state_26518__$1 = state_26518;
var statearr_26520_26604 = state_26518__$1;
(statearr_26520_26604[(2)] = inst_26514);

(statearr_26520_26604[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26519 === (20))){
var inst_26417 = (state_26518[(7)]);
var inst_26429 = cljs.core.first.call(null,inst_26417);
var inst_26430 = cljs.core.nth.call(null,inst_26429,(0),null);
var inst_26431 = cljs.core.nth.call(null,inst_26429,(1),null);
var state_26518__$1 = (function (){var statearr_26521 = state_26518;
(statearr_26521[(8)] = inst_26430);

return statearr_26521;
})();
if(cljs.core.truth_(inst_26431)){
var statearr_26522_26605 = state_26518__$1;
(statearr_26522_26605[(1)] = (22));

} else {
var statearr_26523_26606 = state_26518__$1;
(statearr_26523_26606[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26519 === (27))){
var inst_26386 = (state_26518[(9)]);
var inst_26461 = (state_26518[(10)]);
var inst_26466 = (state_26518[(11)]);
var inst_26459 = (state_26518[(12)]);
var inst_26466__$1 = cljs.core._nth.call(null,inst_26459,inst_26461);
var inst_26467 = cljs.core.async.put_BANG_.call(null,inst_26466__$1,inst_26386,done);
var state_26518__$1 = (function (){var statearr_26524 = state_26518;
(statearr_26524[(11)] = inst_26466__$1);

return statearr_26524;
})();
if(cljs.core.truth_(inst_26467)){
var statearr_26525_26607 = state_26518__$1;
(statearr_26525_26607[(1)] = (30));

} else {
var statearr_26526_26608 = state_26518__$1;
(statearr_26526_26608[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26519 === (1))){
var state_26518__$1 = state_26518;
var statearr_26527_26609 = state_26518__$1;
(statearr_26527_26609[(2)] = null);

(statearr_26527_26609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26519 === (24))){
var inst_26417 = (state_26518[(7)]);
var inst_26436 = (state_26518[(2)]);
var inst_26437 = cljs.core.next.call(null,inst_26417);
var inst_26395 = inst_26437;
var inst_26396 = null;
var inst_26397 = (0);
var inst_26398 = (0);
var state_26518__$1 = (function (){var statearr_26528 = state_26518;
(statearr_26528[(13)] = inst_26398);

(statearr_26528[(14)] = inst_26397);

(statearr_26528[(15)] = inst_26396);

(statearr_26528[(16)] = inst_26436);

(statearr_26528[(17)] = inst_26395);

return statearr_26528;
})();
var statearr_26529_26610 = state_26518__$1;
(statearr_26529_26610[(2)] = null);

(statearr_26529_26610[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26519 === (39))){
var state_26518__$1 = state_26518;
var statearr_26533_26611 = state_26518__$1;
(statearr_26533_26611[(2)] = null);

(statearr_26533_26611[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26519 === (4))){
var inst_26386 = (state_26518[(9)]);
var inst_26386__$1 = (state_26518[(2)]);
var inst_26387 = (inst_26386__$1 == null);
var state_26518__$1 = (function (){var statearr_26534 = state_26518;
(statearr_26534[(9)] = inst_26386__$1);

return statearr_26534;
})();
if(cljs.core.truth_(inst_26387)){
var statearr_26535_26612 = state_26518__$1;
(statearr_26535_26612[(1)] = (5));

} else {
var statearr_26536_26613 = state_26518__$1;
(statearr_26536_26613[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26519 === (15))){
var inst_26398 = (state_26518[(13)]);
var inst_26397 = (state_26518[(14)]);
var inst_26396 = (state_26518[(15)]);
var inst_26395 = (state_26518[(17)]);
var inst_26413 = (state_26518[(2)]);
var inst_26414 = (inst_26398 + (1));
var tmp26530 = inst_26397;
var tmp26531 = inst_26396;
var tmp26532 = inst_26395;
var inst_26395__$1 = tmp26532;
var inst_26396__$1 = tmp26531;
var inst_26397__$1 = tmp26530;
var inst_26398__$1 = inst_26414;
var state_26518__$1 = (function (){var statearr_26537 = state_26518;
(statearr_26537[(13)] = inst_26398__$1);

(statearr_26537[(18)] = inst_26413);

(statearr_26537[(14)] = inst_26397__$1);

(statearr_26537[(15)] = inst_26396__$1);

(statearr_26537[(17)] = inst_26395__$1);

return statearr_26537;
})();
var statearr_26538_26614 = state_26518__$1;
(statearr_26538_26614[(2)] = null);

(statearr_26538_26614[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26519 === (21))){
var inst_26440 = (state_26518[(2)]);
var state_26518__$1 = state_26518;
var statearr_26542_26615 = state_26518__$1;
(statearr_26542_26615[(2)] = inst_26440);

(statearr_26542_26615[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26519 === (31))){
var inst_26466 = (state_26518[(11)]);
var inst_26470 = done.call(null,null);
var inst_26471 = cljs.core.async.untap_STAR_.call(null,m,inst_26466);
var state_26518__$1 = (function (){var statearr_26543 = state_26518;
(statearr_26543[(19)] = inst_26470);

return statearr_26543;
})();
var statearr_26544_26616 = state_26518__$1;
(statearr_26544_26616[(2)] = inst_26471);

(statearr_26544_26616[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26519 === (32))){
var inst_26460 = (state_26518[(20)]);
var inst_26461 = (state_26518[(10)]);
var inst_26458 = (state_26518[(21)]);
var inst_26459 = (state_26518[(12)]);
var inst_26473 = (state_26518[(2)]);
var inst_26474 = (inst_26461 + (1));
var tmp26539 = inst_26460;
var tmp26540 = inst_26458;
var tmp26541 = inst_26459;
var inst_26458__$1 = tmp26540;
var inst_26459__$1 = tmp26541;
var inst_26460__$1 = tmp26539;
var inst_26461__$1 = inst_26474;
var state_26518__$1 = (function (){var statearr_26545 = state_26518;
(statearr_26545[(20)] = inst_26460__$1);

(statearr_26545[(22)] = inst_26473);

(statearr_26545[(10)] = inst_26461__$1);

(statearr_26545[(21)] = inst_26458__$1);

(statearr_26545[(12)] = inst_26459__$1);

return statearr_26545;
})();
var statearr_26546_26617 = state_26518__$1;
(statearr_26546_26617[(2)] = null);

(statearr_26546_26617[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26519 === (40))){
var inst_26486 = (state_26518[(23)]);
var inst_26490 = done.call(null,null);
var inst_26491 = cljs.core.async.untap_STAR_.call(null,m,inst_26486);
var state_26518__$1 = (function (){var statearr_26547 = state_26518;
(statearr_26547[(24)] = inst_26490);

return statearr_26547;
})();
var statearr_26548_26618 = state_26518__$1;
(statearr_26548_26618[(2)] = inst_26491);

(statearr_26548_26618[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26519 === (33))){
var inst_26477 = (state_26518[(25)]);
var inst_26479 = cljs.core.chunked_seq_QMARK_.call(null,inst_26477);
var state_26518__$1 = state_26518;
if(inst_26479){
var statearr_26549_26619 = state_26518__$1;
(statearr_26549_26619[(1)] = (36));

} else {
var statearr_26550_26620 = state_26518__$1;
(statearr_26550_26620[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26519 === (13))){
var inst_26407 = (state_26518[(26)]);
var inst_26410 = cljs.core.async.close_BANG_.call(null,inst_26407);
var state_26518__$1 = state_26518;
var statearr_26551_26621 = state_26518__$1;
(statearr_26551_26621[(2)] = inst_26410);

(statearr_26551_26621[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26519 === (22))){
var inst_26430 = (state_26518[(8)]);
var inst_26433 = cljs.core.async.close_BANG_.call(null,inst_26430);
var state_26518__$1 = state_26518;
var statearr_26552_26622 = state_26518__$1;
(statearr_26552_26622[(2)] = inst_26433);

(statearr_26552_26622[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26519 === (36))){
var inst_26477 = (state_26518[(25)]);
var inst_26481 = cljs.core.chunk_first.call(null,inst_26477);
var inst_26482 = cljs.core.chunk_rest.call(null,inst_26477);
var inst_26483 = cljs.core.count.call(null,inst_26481);
var inst_26458 = inst_26482;
var inst_26459 = inst_26481;
var inst_26460 = inst_26483;
var inst_26461 = (0);
var state_26518__$1 = (function (){var statearr_26553 = state_26518;
(statearr_26553[(20)] = inst_26460);

(statearr_26553[(10)] = inst_26461);

(statearr_26553[(21)] = inst_26458);

(statearr_26553[(12)] = inst_26459);

return statearr_26553;
})();
var statearr_26554_26623 = state_26518__$1;
(statearr_26554_26623[(2)] = null);

(statearr_26554_26623[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26519 === (41))){
var inst_26477 = (state_26518[(25)]);
var inst_26493 = (state_26518[(2)]);
var inst_26494 = cljs.core.next.call(null,inst_26477);
var inst_26458 = inst_26494;
var inst_26459 = null;
var inst_26460 = (0);
var inst_26461 = (0);
var state_26518__$1 = (function (){var statearr_26555 = state_26518;
(statearr_26555[(20)] = inst_26460);

(statearr_26555[(27)] = inst_26493);

(statearr_26555[(10)] = inst_26461);

(statearr_26555[(21)] = inst_26458);

(statearr_26555[(12)] = inst_26459);

return statearr_26555;
})();
var statearr_26556_26624 = state_26518__$1;
(statearr_26556_26624[(2)] = null);

(statearr_26556_26624[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26519 === (43))){
var state_26518__$1 = state_26518;
var statearr_26557_26625 = state_26518__$1;
(statearr_26557_26625[(2)] = null);

(statearr_26557_26625[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26519 === (29))){
var inst_26502 = (state_26518[(2)]);
var state_26518__$1 = state_26518;
var statearr_26558_26626 = state_26518__$1;
(statearr_26558_26626[(2)] = inst_26502);

(statearr_26558_26626[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26519 === (44))){
var inst_26511 = (state_26518[(2)]);
var state_26518__$1 = (function (){var statearr_26559 = state_26518;
(statearr_26559[(28)] = inst_26511);

return statearr_26559;
})();
var statearr_26560_26627 = state_26518__$1;
(statearr_26560_26627[(2)] = null);

(statearr_26560_26627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26519 === (6))){
var inst_26450 = (state_26518[(29)]);
var inst_26449 = cljs.core.deref.call(null,cs);
var inst_26450__$1 = cljs.core.keys.call(null,inst_26449);
var inst_26451 = cljs.core.count.call(null,inst_26450__$1);
var inst_26452 = cljs.core.reset_BANG_.call(null,dctr,inst_26451);
var inst_26457 = cljs.core.seq.call(null,inst_26450__$1);
var inst_26458 = inst_26457;
var inst_26459 = null;
var inst_26460 = (0);
var inst_26461 = (0);
var state_26518__$1 = (function (){var statearr_26561 = state_26518;
(statearr_26561[(20)] = inst_26460);

(statearr_26561[(29)] = inst_26450__$1);

(statearr_26561[(10)] = inst_26461);

(statearr_26561[(21)] = inst_26458);

(statearr_26561[(12)] = inst_26459);

(statearr_26561[(30)] = inst_26452);

return statearr_26561;
})();
var statearr_26562_26628 = state_26518__$1;
(statearr_26562_26628[(2)] = null);

(statearr_26562_26628[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26519 === (28))){
var inst_26477 = (state_26518[(25)]);
var inst_26458 = (state_26518[(21)]);
var inst_26477__$1 = cljs.core.seq.call(null,inst_26458);
var state_26518__$1 = (function (){var statearr_26563 = state_26518;
(statearr_26563[(25)] = inst_26477__$1);

return statearr_26563;
})();
if(inst_26477__$1){
var statearr_26564_26629 = state_26518__$1;
(statearr_26564_26629[(1)] = (33));

} else {
var statearr_26565_26630 = state_26518__$1;
(statearr_26565_26630[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26519 === (25))){
var inst_26460 = (state_26518[(20)]);
var inst_26461 = (state_26518[(10)]);
var inst_26463 = (inst_26461 < inst_26460);
var inst_26464 = inst_26463;
var state_26518__$1 = state_26518;
if(cljs.core.truth_(inst_26464)){
var statearr_26566_26631 = state_26518__$1;
(statearr_26566_26631[(1)] = (27));

} else {
var statearr_26567_26632 = state_26518__$1;
(statearr_26567_26632[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26519 === (34))){
var state_26518__$1 = state_26518;
var statearr_26568_26633 = state_26518__$1;
(statearr_26568_26633[(2)] = null);

(statearr_26568_26633[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26519 === (17))){
var state_26518__$1 = state_26518;
var statearr_26569_26634 = state_26518__$1;
(statearr_26569_26634[(2)] = null);

(statearr_26569_26634[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26519 === (3))){
var inst_26516 = (state_26518[(2)]);
var state_26518__$1 = state_26518;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26518__$1,inst_26516);
} else {
if((state_val_26519 === (12))){
var inst_26445 = (state_26518[(2)]);
var state_26518__$1 = state_26518;
var statearr_26570_26635 = state_26518__$1;
(statearr_26570_26635[(2)] = inst_26445);

(statearr_26570_26635[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26519 === (2))){
var state_26518__$1 = state_26518;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26518__$1,(4),ch);
} else {
if((state_val_26519 === (23))){
var state_26518__$1 = state_26518;
var statearr_26571_26636 = state_26518__$1;
(statearr_26571_26636[(2)] = null);

(statearr_26571_26636[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26519 === (35))){
var inst_26500 = (state_26518[(2)]);
var state_26518__$1 = state_26518;
var statearr_26572_26637 = state_26518__$1;
(statearr_26572_26637[(2)] = inst_26500);

(statearr_26572_26637[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26519 === (19))){
var inst_26417 = (state_26518[(7)]);
var inst_26421 = cljs.core.chunk_first.call(null,inst_26417);
var inst_26422 = cljs.core.chunk_rest.call(null,inst_26417);
var inst_26423 = cljs.core.count.call(null,inst_26421);
var inst_26395 = inst_26422;
var inst_26396 = inst_26421;
var inst_26397 = inst_26423;
var inst_26398 = (0);
var state_26518__$1 = (function (){var statearr_26573 = state_26518;
(statearr_26573[(13)] = inst_26398);

(statearr_26573[(14)] = inst_26397);

(statearr_26573[(15)] = inst_26396);

(statearr_26573[(17)] = inst_26395);

return statearr_26573;
})();
var statearr_26574_26638 = state_26518__$1;
(statearr_26574_26638[(2)] = null);

(statearr_26574_26638[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26519 === (11))){
var inst_26395 = (state_26518[(17)]);
var inst_26417 = (state_26518[(7)]);
var inst_26417__$1 = cljs.core.seq.call(null,inst_26395);
var state_26518__$1 = (function (){var statearr_26575 = state_26518;
(statearr_26575[(7)] = inst_26417__$1);

return statearr_26575;
})();
if(inst_26417__$1){
var statearr_26576_26639 = state_26518__$1;
(statearr_26576_26639[(1)] = (16));

} else {
var statearr_26577_26640 = state_26518__$1;
(statearr_26577_26640[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26519 === (9))){
var inst_26447 = (state_26518[(2)]);
var state_26518__$1 = state_26518;
var statearr_26578_26641 = state_26518__$1;
(statearr_26578_26641[(2)] = inst_26447);

(statearr_26578_26641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26519 === (5))){
var inst_26393 = cljs.core.deref.call(null,cs);
var inst_26394 = cljs.core.seq.call(null,inst_26393);
var inst_26395 = inst_26394;
var inst_26396 = null;
var inst_26397 = (0);
var inst_26398 = (0);
var state_26518__$1 = (function (){var statearr_26579 = state_26518;
(statearr_26579[(13)] = inst_26398);

(statearr_26579[(14)] = inst_26397);

(statearr_26579[(15)] = inst_26396);

(statearr_26579[(17)] = inst_26395);

return statearr_26579;
})();
var statearr_26580_26642 = state_26518__$1;
(statearr_26580_26642[(2)] = null);

(statearr_26580_26642[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26519 === (14))){
var state_26518__$1 = state_26518;
var statearr_26581_26643 = state_26518__$1;
(statearr_26581_26643[(2)] = null);

(statearr_26581_26643[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26519 === (45))){
var inst_26508 = (state_26518[(2)]);
var state_26518__$1 = state_26518;
var statearr_26582_26644 = state_26518__$1;
(statearr_26582_26644[(2)] = inst_26508);

(statearr_26582_26644[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26519 === (26))){
var inst_26450 = (state_26518[(29)]);
var inst_26504 = (state_26518[(2)]);
var inst_26505 = cljs.core.seq.call(null,inst_26450);
var state_26518__$1 = (function (){var statearr_26583 = state_26518;
(statearr_26583[(31)] = inst_26504);

return statearr_26583;
})();
if(inst_26505){
var statearr_26584_26645 = state_26518__$1;
(statearr_26584_26645[(1)] = (42));

} else {
var statearr_26585_26646 = state_26518__$1;
(statearr_26585_26646[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26519 === (16))){
var inst_26417 = (state_26518[(7)]);
var inst_26419 = cljs.core.chunked_seq_QMARK_.call(null,inst_26417);
var state_26518__$1 = state_26518;
if(inst_26419){
var statearr_26586_26647 = state_26518__$1;
(statearr_26586_26647[(1)] = (19));

} else {
var statearr_26587_26648 = state_26518__$1;
(statearr_26587_26648[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26519 === (38))){
var inst_26497 = (state_26518[(2)]);
var state_26518__$1 = state_26518;
var statearr_26588_26649 = state_26518__$1;
(statearr_26588_26649[(2)] = inst_26497);

(statearr_26588_26649[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26519 === (30))){
var state_26518__$1 = state_26518;
var statearr_26589_26650 = state_26518__$1;
(statearr_26589_26650[(2)] = null);

(statearr_26589_26650[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26519 === (10))){
var inst_26398 = (state_26518[(13)]);
var inst_26396 = (state_26518[(15)]);
var inst_26406 = cljs.core._nth.call(null,inst_26396,inst_26398);
var inst_26407 = cljs.core.nth.call(null,inst_26406,(0),null);
var inst_26408 = cljs.core.nth.call(null,inst_26406,(1),null);
var state_26518__$1 = (function (){var statearr_26590 = state_26518;
(statearr_26590[(26)] = inst_26407);

return statearr_26590;
})();
if(cljs.core.truth_(inst_26408)){
var statearr_26591_26651 = state_26518__$1;
(statearr_26591_26651[(1)] = (13));

} else {
var statearr_26592_26652 = state_26518__$1;
(statearr_26592_26652[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26519 === (18))){
var inst_26443 = (state_26518[(2)]);
var state_26518__$1 = state_26518;
var statearr_26593_26653 = state_26518__$1;
(statearr_26593_26653[(2)] = inst_26443);

(statearr_26593_26653[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26519 === (42))){
var state_26518__$1 = state_26518;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26518__$1,(45),dchan);
} else {
if((state_val_26519 === (37))){
var inst_26477 = (state_26518[(25)]);
var inst_26386 = (state_26518[(9)]);
var inst_26486 = (state_26518[(23)]);
var inst_26486__$1 = cljs.core.first.call(null,inst_26477);
var inst_26487 = cljs.core.async.put_BANG_.call(null,inst_26486__$1,inst_26386,done);
var state_26518__$1 = (function (){var statearr_26594 = state_26518;
(statearr_26594[(23)] = inst_26486__$1);

return statearr_26594;
})();
if(cljs.core.truth_(inst_26487)){
var statearr_26595_26654 = state_26518__$1;
(statearr_26595_26654[(1)] = (39));

} else {
var statearr_26596_26655 = state_26518__$1;
(statearr_26596_26655[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26519 === (8))){
var inst_26398 = (state_26518[(13)]);
var inst_26397 = (state_26518[(14)]);
var inst_26400 = (inst_26398 < inst_26397);
var inst_26401 = inst_26400;
var state_26518__$1 = state_26518;
if(cljs.core.truth_(inst_26401)){
var statearr_26597_26656 = state_26518__$1;
(statearr_26597_26656[(1)] = (10));

} else {
var statearr_26598_26657 = state_26518__$1;
(statearr_26598_26657[(1)] = (11));

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
});})(c__25785__auto___26603,cs,m,dchan,dctr,done))
;
return ((function (switch__25690__auto__,c__25785__auto___26603,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__25691__auto__ = null;
var cljs$core$async$mult_$_state_machine__25691__auto____0 = (function (){
var statearr_26599 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26599[(0)] = cljs$core$async$mult_$_state_machine__25691__auto__);

(statearr_26599[(1)] = (1));

return statearr_26599;
});
var cljs$core$async$mult_$_state_machine__25691__auto____1 = (function (state_26518){
while(true){
var ret_value__25692__auto__ = (function (){try{while(true){
var result__25693__auto__ = switch__25690__auto__.call(null,state_26518);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25693__auto__;
}
break;
}
}catch (e26600){if((e26600 instanceof Object)){
var ex__25694__auto__ = e26600;
var statearr_26601_26658 = state_26518;
(statearr_26601_26658[(5)] = ex__25694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26600;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26659 = state_26518;
state_26518 = G__26659;
continue;
} else {
return ret_value__25692__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__25691__auto__ = function(state_26518){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__25691__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__25691__auto____1.call(this,state_26518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__25691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__25691__auto____0;
cljs$core$async$mult_$_state_machine__25691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__25691__auto____1;
return cljs$core$async$mult_$_state_machine__25691__auto__;
})()
;})(switch__25690__auto__,c__25785__auto___26603,cs,m,dchan,dctr,done))
})();
var state__25787__auto__ = (function (){var statearr_26602 = f__25786__auto__.call(null);
(statearr_26602[(6)] = c__25785__auto___26603);

return statearr_26602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25787__auto__);
});})(c__25785__auto___26603,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__26661 = arguments.length;
switch (G__26661) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26673 = arguments.length;
var i__4731__auto___26674 = (0);
while(true){
if((i__4731__auto___26674 < len__4730__auto___26673)){
args__4736__auto__.push((arguments[i__4731__auto___26674]));

var G__26675 = (i__4731__auto___26674 + (1));
i__4731__auto___26674 = G__26675;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26667){
var map__26668 = p__26667;
var map__26668__$1 = (((((!((map__26668 == null))))?(((((map__26668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26668):map__26668);
var opts = map__26668__$1;
var statearr_26670_26676 = state;
(statearr_26670_26676[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__26668,map__26668__$1,opts){
return (function (val){
var statearr_26671_26677 = state;
(statearr_26671_26677[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26668,map__26668__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_26672_26678 = state;
(statearr_26672_26678[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26663){
var G__26664 = cljs.core.first.call(null,seq26663);
var seq26663__$1 = cljs.core.next.call(null,seq26663);
var G__26665 = cljs.core.first.call(null,seq26663__$1);
var seq26663__$2 = cljs.core.next.call(null,seq26663__$1);
var G__26666 = cljs.core.first.call(null,seq26663__$2);
var seq26663__$3 = cljs.core.next.call(null,seq26663__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26664,G__26665,G__26666,seq26663__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26679 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26679 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26680){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta26680 = meta26680;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26679.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26681,meta26680__$1){
var self__ = this;
var _26681__$1 = this;
return (new cljs.core.async.t_cljs$core$async26679(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26680__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26679.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26681){
var self__ = this;
var _26681__$1 = this;
return self__.meta26680;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26679.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26679.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26679.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26679.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26679.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26679.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26679.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26679.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26679.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta26680","meta26680",1098609927,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26679.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26679.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26679";

cljs.core.async.t_cljs$core$async26679.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26679");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26679.
 */
cljs.core.async.__GT_t_cljs$core$async26679 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async26679(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26680){
return (new cljs.core.async.t_cljs$core$async26679(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26680));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async26679(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25785__auto___26843 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25785__auto___26843,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__25786__auto__ = (function (){var switch__25690__auto__ = ((function (c__25785__auto___26843,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26783){
var state_val_26784 = (state_26783[(1)]);
if((state_val_26784 === (7))){
var inst_26698 = (state_26783[(2)]);
var state_26783__$1 = state_26783;
var statearr_26785_26844 = state_26783__$1;
(statearr_26785_26844[(2)] = inst_26698);

(statearr_26785_26844[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26784 === (20))){
var inst_26710 = (state_26783[(7)]);
var state_26783__$1 = state_26783;
var statearr_26786_26845 = state_26783__$1;
(statearr_26786_26845[(2)] = inst_26710);

(statearr_26786_26845[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26784 === (27))){
var state_26783__$1 = state_26783;
var statearr_26787_26846 = state_26783__$1;
(statearr_26787_26846[(2)] = null);

(statearr_26787_26846[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26784 === (1))){
var inst_26685 = (state_26783[(8)]);
var inst_26685__$1 = calc_state.call(null);
var inst_26687 = (inst_26685__$1 == null);
var inst_26688 = cljs.core.not.call(null,inst_26687);
var state_26783__$1 = (function (){var statearr_26788 = state_26783;
(statearr_26788[(8)] = inst_26685__$1);

return statearr_26788;
})();
if(inst_26688){
var statearr_26789_26847 = state_26783__$1;
(statearr_26789_26847[(1)] = (2));

} else {
var statearr_26790_26848 = state_26783__$1;
(statearr_26790_26848[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26784 === (24))){
var inst_26743 = (state_26783[(9)]);
var inst_26734 = (state_26783[(10)]);
var inst_26757 = (state_26783[(11)]);
var inst_26757__$1 = inst_26734.call(null,inst_26743);
var state_26783__$1 = (function (){var statearr_26791 = state_26783;
(statearr_26791[(11)] = inst_26757__$1);

return statearr_26791;
})();
if(cljs.core.truth_(inst_26757__$1)){
var statearr_26792_26849 = state_26783__$1;
(statearr_26792_26849[(1)] = (29));

} else {
var statearr_26793_26850 = state_26783__$1;
(statearr_26793_26850[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26784 === (4))){
var inst_26701 = (state_26783[(2)]);
var state_26783__$1 = state_26783;
if(cljs.core.truth_(inst_26701)){
var statearr_26794_26851 = state_26783__$1;
(statearr_26794_26851[(1)] = (8));

} else {
var statearr_26795_26852 = state_26783__$1;
(statearr_26795_26852[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26784 === (15))){
var inst_26728 = (state_26783[(2)]);
var state_26783__$1 = state_26783;
if(cljs.core.truth_(inst_26728)){
var statearr_26796_26853 = state_26783__$1;
(statearr_26796_26853[(1)] = (19));

} else {
var statearr_26797_26854 = state_26783__$1;
(statearr_26797_26854[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26784 === (21))){
var inst_26733 = (state_26783[(12)]);
var inst_26733__$1 = (state_26783[(2)]);
var inst_26734 = cljs.core.get.call(null,inst_26733__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26735 = cljs.core.get.call(null,inst_26733__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26736 = cljs.core.get.call(null,inst_26733__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26783__$1 = (function (){var statearr_26798 = state_26783;
(statearr_26798[(13)] = inst_26735);

(statearr_26798[(12)] = inst_26733__$1);

(statearr_26798[(10)] = inst_26734);

return statearr_26798;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26783__$1,(22),inst_26736);
} else {
if((state_val_26784 === (31))){
var inst_26765 = (state_26783[(2)]);
var state_26783__$1 = state_26783;
if(cljs.core.truth_(inst_26765)){
var statearr_26799_26855 = state_26783__$1;
(statearr_26799_26855[(1)] = (32));

} else {
var statearr_26800_26856 = state_26783__$1;
(statearr_26800_26856[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26784 === (32))){
var inst_26742 = (state_26783[(14)]);
var state_26783__$1 = state_26783;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26783__$1,(35),out,inst_26742);
} else {
if((state_val_26784 === (33))){
var inst_26733 = (state_26783[(12)]);
var inst_26710 = inst_26733;
var state_26783__$1 = (function (){var statearr_26801 = state_26783;
(statearr_26801[(7)] = inst_26710);

return statearr_26801;
})();
var statearr_26802_26857 = state_26783__$1;
(statearr_26802_26857[(2)] = null);

(statearr_26802_26857[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26784 === (13))){
var inst_26710 = (state_26783[(7)]);
var inst_26717 = inst_26710.cljs$lang$protocol_mask$partition0$;
var inst_26718 = (inst_26717 & (64));
var inst_26719 = inst_26710.cljs$core$ISeq$;
var inst_26720 = (cljs.core.PROTOCOL_SENTINEL === inst_26719);
var inst_26721 = ((inst_26718) || (inst_26720));
var state_26783__$1 = state_26783;
if(cljs.core.truth_(inst_26721)){
var statearr_26803_26858 = state_26783__$1;
(statearr_26803_26858[(1)] = (16));

} else {
var statearr_26804_26859 = state_26783__$1;
(statearr_26804_26859[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26784 === (22))){
var inst_26743 = (state_26783[(9)]);
var inst_26742 = (state_26783[(14)]);
var inst_26741 = (state_26783[(2)]);
var inst_26742__$1 = cljs.core.nth.call(null,inst_26741,(0),null);
var inst_26743__$1 = cljs.core.nth.call(null,inst_26741,(1),null);
var inst_26744 = (inst_26742__$1 == null);
var inst_26745 = cljs.core._EQ_.call(null,inst_26743__$1,change);
var inst_26746 = ((inst_26744) || (inst_26745));
var state_26783__$1 = (function (){var statearr_26805 = state_26783;
(statearr_26805[(9)] = inst_26743__$1);

(statearr_26805[(14)] = inst_26742__$1);

return statearr_26805;
})();
if(cljs.core.truth_(inst_26746)){
var statearr_26806_26860 = state_26783__$1;
(statearr_26806_26860[(1)] = (23));

} else {
var statearr_26807_26861 = state_26783__$1;
(statearr_26807_26861[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26784 === (36))){
var inst_26733 = (state_26783[(12)]);
var inst_26710 = inst_26733;
var state_26783__$1 = (function (){var statearr_26808 = state_26783;
(statearr_26808[(7)] = inst_26710);

return statearr_26808;
})();
var statearr_26809_26862 = state_26783__$1;
(statearr_26809_26862[(2)] = null);

(statearr_26809_26862[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26784 === (29))){
var inst_26757 = (state_26783[(11)]);
var state_26783__$1 = state_26783;
var statearr_26810_26863 = state_26783__$1;
(statearr_26810_26863[(2)] = inst_26757);

(statearr_26810_26863[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26784 === (6))){
var state_26783__$1 = state_26783;
var statearr_26811_26864 = state_26783__$1;
(statearr_26811_26864[(2)] = false);

(statearr_26811_26864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26784 === (28))){
var inst_26753 = (state_26783[(2)]);
var inst_26754 = calc_state.call(null);
var inst_26710 = inst_26754;
var state_26783__$1 = (function (){var statearr_26812 = state_26783;
(statearr_26812[(7)] = inst_26710);

(statearr_26812[(15)] = inst_26753);

return statearr_26812;
})();
var statearr_26813_26865 = state_26783__$1;
(statearr_26813_26865[(2)] = null);

(statearr_26813_26865[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26784 === (25))){
var inst_26779 = (state_26783[(2)]);
var state_26783__$1 = state_26783;
var statearr_26814_26866 = state_26783__$1;
(statearr_26814_26866[(2)] = inst_26779);

(statearr_26814_26866[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26784 === (34))){
var inst_26777 = (state_26783[(2)]);
var state_26783__$1 = state_26783;
var statearr_26815_26867 = state_26783__$1;
(statearr_26815_26867[(2)] = inst_26777);

(statearr_26815_26867[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26784 === (17))){
var state_26783__$1 = state_26783;
var statearr_26816_26868 = state_26783__$1;
(statearr_26816_26868[(2)] = false);

(statearr_26816_26868[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26784 === (3))){
var state_26783__$1 = state_26783;
var statearr_26817_26869 = state_26783__$1;
(statearr_26817_26869[(2)] = false);

(statearr_26817_26869[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26784 === (12))){
var inst_26781 = (state_26783[(2)]);
var state_26783__$1 = state_26783;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26783__$1,inst_26781);
} else {
if((state_val_26784 === (2))){
var inst_26685 = (state_26783[(8)]);
var inst_26690 = inst_26685.cljs$lang$protocol_mask$partition0$;
var inst_26691 = (inst_26690 & (64));
var inst_26692 = inst_26685.cljs$core$ISeq$;
var inst_26693 = (cljs.core.PROTOCOL_SENTINEL === inst_26692);
var inst_26694 = ((inst_26691) || (inst_26693));
var state_26783__$1 = state_26783;
if(cljs.core.truth_(inst_26694)){
var statearr_26818_26870 = state_26783__$1;
(statearr_26818_26870[(1)] = (5));

} else {
var statearr_26819_26871 = state_26783__$1;
(statearr_26819_26871[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26784 === (23))){
var inst_26742 = (state_26783[(14)]);
var inst_26748 = (inst_26742 == null);
var state_26783__$1 = state_26783;
if(cljs.core.truth_(inst_26748)){
var statearr_26820_26872 = state_26783__$1;
(statearr_26820_26872[(1)] = (26));

} else {
var statearr_26821_26873 = state_26783__$1;
(statearr_26821_26873[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26784 === (35))){
var inst_26768 = (state_26783[(2)]);
var state_26783__$1 = state_26783;
if(cljs.core.truth_(inst_26768)){
var statearr_26822_26874 = state_26783__$1;
(statearr_26822_26874[(1)] = (36));

} else {
var statearr_26823_26875 = state_26783__$1;
(statearr_26823_26875[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26784 === (19))){
var inst_26710 = (state_26783[(7)]);
var inst_26730 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26710);
var state_26783__$1 = state_26783;
var statearr_26824_26876 = state_26783__$1;
(statearr_26824_26876[(2)] = inst_26730);

(statearr_26824_26876[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26784 === (11))){
var inst_26710 = (state_26783[(7)]);
var inst_26714 = (inst_26710 == null);
var inst_26715 = cljs.core.not.call(null,inst_26714);
var state_26783__$1 = state_26783;
if(inst_26715){
var statearr_26825_26877 = state_26783__$1;
(statearr_26825_26877[(1)] = (13));

} else {
var statearr_26826_26878 = state_26783__$1;
(statearr_26826_26878[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26784 === (9))){
var inst_26685 = (state_26783[(8)]);
var state_26783__$1 = state_26783;
var statearr_26827_26879 = state_26783__$1;
(statearr_26827_26879[(2)] = inst_26685);

(statearr_26827_26879[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26784 === (5))){
var state_26783__$1 = state_26783;
var statearr_26828_26880 = state_26783__$1;
(statearr_26828_26880[(2)] = true);

(statearr_26828_26880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26784 === (14))){
var state_26783__$1 = state_26783;
var statearr_26829_26881 = state_26783__$1;
(statearr_26829_26881[(2)] = false);

(statearr_26829_26881[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26784 === (26))){
var inst_26743 = (state_26783[(9)]);
var inst_26750 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26743);
var state_26783__$1 = state_26783;
var statearr_26830_26882 = state_26783__$1;
(statearr_26830_26882[(2)] = inst_26750);

(statearr_26830_26882[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26784 === (16))){
var state_26783__$1 = state_26783;
var statearr_26831_26883 = state_26783__$1;
(statearr_26831_26883[(2)] = true);

(statearr_26831_26883[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26784 === (38))){
var inst_26773 = (state_26783[(2)]);
var state_26783__$1 = state_26783;
var statearr_26832_26884 = state_26783__$1;
(statearr_26832_26884[(2)] = inst_26773);

(statearr_26832_26884[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26784 === (30))){
var inst_26743 = (state_26783[(9)]);
var inst_26735 = (state_26783[(13)]);
var inst_26734 = (state_26783[(10)]);
var inst_26760 = cljs.core.empty_QMARK_.call(null,inst_26734);
var inst_26761 = inst_26735.call(null,inst_26743);
var inst_26762 = cljs.core.not.call(null,inst_26761);
var inst_26763 = ((inst_26760) && (inst_26762));
var state_26783__$1 = state_26783;
var statearr_26833_26885 = state_26783__$1;
(statearr_26833_26885[(2)] = inst_26763);

(statearr_26833_26885[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26784 === (10))){
var inst_26685 = (state_26783[(8)]);
var inst_26706 = (state_26783[(2)]);
var inst_26707 = cljs.core.get.call(null,inst_26706,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26708 = cljs.core.get.call(null,inst_26706,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26709 = cljs.core.get.call(null,inst_26706,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26710 = inst_26685;
var state_26783__$1 = (function (){var statearr_26834 = state_26783;
(statearr_26834[(7)] = inst_26710);

(statearr_26834[(16)] = inst_26708);

(statearr_26834[(17)] = inst_26709);

(statearr_26834[(18)] = inst_26707);

return statearr_26834;
})();
var statearr_26835_26886 = state_26783__$1;
(statearr_26835_26886[(2)] = null);

(statearr_26835_26886[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26784 === (18))){
var inst_26725 = (state_26783[(2)]);
var state_26783__$1 = state_26783;
var statearr_26836_26887 = state_26783__$1;
(statearr_26836_26887[(2)] = inst_26725);

(statearr_26836_26887[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26784 === (37))){
var state_26783__$1 = state_26783;
var statearr_26837_26888 = state_26783__$1;
(statearr_26837_26888[(2)] = null);

(statearr_26837_26888[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26784 === (8))){
var inst_26685 = (state_26783[(8)]);
var inst_26703 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26685);
var state_26783__$1 = state_26783;
var statearr_26838_26889 = state_26783__$1;
(statearr_26838_26889[(2)] = inst_26703);

(statearr_26838_26889[(1)] = (10));


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
});})(c__25785__auto___26843,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__25690__auto__,c__25785__auto___26843,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__25691__auto__ = null;
var cljs$core$async$mix_$_state_machine__25691__auto____0 = (function (){
var statearr_26839 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26839[(0)] = cljs$core$async$mix_$_state_machine__25691__auto__);

(statearr_26839[(1)] = (1));

return statearr_26839;
});
var cljs$core$async$mix_$_state_machine__25691__auto____1 = (function (state_26783){
while(true){
var ret_value__25692__auto__ = (function (){try{while(true){
var result__25693__auto__ = switch__25690__auto__.call(null,state_26783);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25693__auto__;
}
break;
}
}catch (e26840){if((e26840 instanceof Object)){
var ex__25694__auto__ = e26840;
var statearr_26841_26890 = state_26783;
(statearr_26841_26890[(5)] = ex__25694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26783);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26840;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26891 = state_26783;
state_26783 = G__26891;
continue;
} else {
return ret_value__25692__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__25691__auto__ = function(state_26783){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__25691__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__25691__auto____1.call(this,state_26783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__25691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__25691__auto____0;
cljs$core$async$mix_$_state_machine__25691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__25691__auto____1;
return cljs$core$async$mix_$_state_machine__25691__auto__;
})()
;})(switch__25690__auto__,c__25785__auto___26843,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__25787__auto__ = (function (){var statearr_26842 = f__25786__auto__.call(null);
(statearr_26842[(6)] = c__25785__auto___26843);

return statearr_26842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25787__auto__);
});})(c__25785__auto___26843,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__26893 = arguments.length;
switch (G__26893) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__26897 = arguments.length;
switch (G__26897) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__26895_SHARP_){
if(cljs.core.truth_(p1__26895_SHARP_.call(null,topic))){
return p1__26895_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26895_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26898 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26898 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26899){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26899 = meta26899;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26898.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26900,meta26899__$1){
var self__ = this;
var _26900__$1 = this;
return (new cljs.core.async.t_cljs$core$async26898(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26899__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26898.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26900){
var self__ = this;
var _26900__$1 = this;
return self__.meta26899;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26898.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26898.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26898.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26898.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26898.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26898.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26898.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26898.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26899","meta26899",248798319,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26898.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26898.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26898";

cljs.core.async.t_cljs$core$async26898.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26898");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26898.
 */
cljs.core.async.__GT_t_cljs$core$async26898 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26898(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26899){
return (new cljs.core.async.t_cljs$core$async26898(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26899));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26898(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25785__auto___27018 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25785__auto___27018,mults,ensure_mult,p){
return (function (){
var f__25786__auto__ = (function (){var switch__25690__auto__ = ((function (c__25785__auto___27018,mults,ensure_mult,p){
return (function (state_26972){
var state_val_26973 = (state_26972[(1)]);
if((state_val_26973 === (7))){
var inst_26968 = (state_26972[(2)]);
var state_26972__$1 = state_26972;
var statearr_26974_27019 = state_26972__$1;
(statearr_26974_27019[(2)] = inst_26968);

(statearr_26974_27019[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26973 === (20))){
var state_26972__$1 = state_26972;
var statearr_26975_27020 = state_26972__$1;
(statearr_26975_27020[(2)] = null);

(statearr_26975_27020[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26973 === (1))){
var state_26972__$1 = state_26972;
var statearr_26976_27021 = state_26972__$1;
(statearr_26976_27021[(2)] = null);

(statearr_26976_27021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26973 === (24))){
var inst_26951 = (state_26972[(7)]);
var inst_26960 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26951);
var state_26972__$1 = state_26972;
var statearr_26977_27022 = state_26972__$1;
(statearr_26977_27022[(2)] = inst_26960);

(statearr_26977_27022[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26973 === (4))){
var inst_26903 = (state_26972[(8)]);
var inst_26903__$1 = (state_26972[(2)]);
var inst_26904 = (inst_26903__$1 == null);
var state_26972__$1 = (function (){var statearr_26978 = state_26972;
(statearr_26978[(8)] = inst_26903__$1);

return statearr_26978;
})();
if(cljs.core.truth_(inst_26904)){
var statearr_26979_27023 = state_26972__$1;
(statearr_26979_27023[(1)] = (5));

} else {
var statearr_26980_27024 = state_26972__$1;
(statearr_26980_27024[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26973 === (15))){
var inst_26945 = (state_26972[(2)]);
var state_26972__$1 = state_26972;
var statearr_26981_27025 = state_26972__$1;
(statearr_26981_27025[(2)] = inst_26945);

(statearr_26981_27025[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26973 === (21))){
var inst_26965 = (state_26972[(2)]);
var state_26972__$1 = (function (){var statearr_26982 = state_26972;
(statearr_26982[(9)] = inst_26965);

return statearr_26982;
})();
var statearr_26983_27026 = state_26972__$1;
(statearr_26983_27026[(2)] = null);

(statearr_26983_27026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26973 === (13))){
var inst_26927 = (state_26972[(10)]);
var inst_26929 = cljs.core.chunked_seq_QMARK_.call(null,inst_26927);
var state_26972__$1 = state_26972;
if(inst_26929){
var statearr_26984_27027 = state_26972__$1;
(statearr_26984_27027[(1)] = (16));

} else {
var statearr_26985_27028 = state_26972__$1;
(statearr_26985_27028[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26973 === (22))){
var inst_26957 = (state_26972[(2)]);
var state_26972__$1 = state_26972;
if(cljs.core.truth_(inst_26957)){
var statearr_26986_27029 = state_26972__$1;
(statearr_26986_27029[(1)] = (23));

} else {
var statearr_26987_27030 = state_26972__$1;
(statearr_26987_27030[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26973 === (6))){
var inst_26903 = (state_26972[(8)]);
var inst_26951 = (state_26972[(7)]);
var inst_26953 = (state_26972[(11)]);
var inst_26951__$1 = topic_fn.call(null,inst_26903);
var inst_26952 = cljs.core.deref.call(null,mults);
var inst_26953__$1 = cljs.core.get.call(null,inst_26952,inst_26951__$1);
var state_26972__$1 = (function (){var statearr_26988 = state_26972;
(statearr_26988[(7)] = inst_26951__$1);

(statearr_26988[(11)] = inst_26953__$1);

return statearr_26988;
})();
if(cljs.core.truth_(inst_26953__$1)){
var statearr_26989_27031 = state_26972__$1;
(statearr_26989_27031[(1)] = (19));

} else {
var statearr_26990_27032 = state_26972__$1;
(statearr_26990_27032[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26973 === (25))){
var inst_26962 = (state_26972[(2)]);
var state_26972__$1 = state_26972;
var statearr_26991_27033 = state_26972__$1;
(statearr_26991_27033[(2)] = inst_26962);

(statearr_26991_27033[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26973 === (17))){
var inst_26927 = (state_26972[(10)]);
var inst_26936 = cljs.core.first.call(null,inst_26927);
var inst_26937 = cljs.core.async.muxch_STAR_.call(null,inst_26936);
var inst_26938 = cljs.core.async.close_BANG_.call(null,inst_26937);
var inst_26939 = cljs.core.next.call(null,inst_26927);
var inst_26913 = inst_26939;
var inst_26914 = null;
var inst_26915 = (0);
var inst_26916 = (0);
var state_26972__$1 = (function (){var statearr_26992 = state_26972;
(statearr_26992[(12)] = inst_26916);

(statearr_26992[(13)] = inst_26914);

(statearr_26992[(14)] = inst_26938);

(statearr_26992[(15)] = inst_26913);

(statearr_26992[(16)] = inst_26915);

return statearr_26992;
})();
var statearr_26993_27034 = state_26972__$1;
(statearr_26993_27034[(2)] = null);

(statearr_26993_27034[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26973 === (3))){
var inst_26970 = (state_26972[(2)]);
var state_26972__$1 = state_26972;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26972__$1,inst_26970);
} else {
if((state_val_26973 === (12))){
var inst_26947 = (state_26972[(2)]);
var state_26972__$1 = state_26972;
var statearr_26994_27035 = state_26972__$1;
(statearr_26994_27035[(2)] = inst_26947);

(statearr_26994_27035[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26973 === (2))){
var state_26972__$1 = state_26972;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26972__$1,(4),ch);
} else {
if((state_val_26973 === (23))){
var state_26972__$1 = state_26972;
var statearr_26995_27036 = state_26972__$1;
(statearr_26995_27036[(2)] = null);

(statearr_26995_27036[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26973 === (19))){
var inst_26903 = (state_26972[(8)]);
var inst_26953 = (state_26972[(11)]);
var inst_26955 = cljs.core.async.muxch_STAR_.call(null,inst_26953);
var state_26972__$1 = state_26972;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26972__$1,(22),inst_26955,inst_26903);
} else {
if((state_val_26973 === (11))){
var inst_26927 = (state_26972[(10)]);
var inst_26913 = (state_26972[(15)]);
var inst_26927__$1 = cljs.core.seq.call(null,inst_26913);
var state_26972__$1 = (function (){var statearr_26996 = state_26972;
(statearr_26996[(10)] = inst_26927__$1);

return statearr_26996;
})();
if(inst_26927__$1){
var statearr_26997_27037 = state_26972__$1;
(statearr_26997_27037[(1)] = (13));

} else {
var statearr_26998_27038 = state_26972__$1;
(statearr_26998_27038[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26973 === (9))){
var inst_26949 = (state_26972[(2)]);
var state_26972__$1 = state_26972;
var statearr_26999_27039 = state_26972__$1;
(statearr_26999_27039[(2)] = inst_26949);

(statearr_26999_27039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26973 === (5))){
var inst_26910 = cljs.core.deref.call(null,mults);
var inst_26911 = cljs.core.vals.call(null,inst_26910);
var inst_26912 = cljs.core.seq.call(null,inst_26911);
var inst_26913 = inst_26912;
var inst_26914 = null;
var inst_26915 = (0);
var inst_26916 = (0);
var state_26972__$1 = (function (){var statearr_27000 = state_26972;
(statearr_27000[(12)] = inst_26916);

(statearr_27000[(13)] = inst_26914);

(statearr_27000[(15)] = inst_26913);

(statearr_27000[(16)] = inst_26915);

return statearr_27000;
})();
var statearr_27001_27040 = state_26972__$1;
(statearr_27001_27040[(2)] = null);

(statearr_27001_27040[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26973 === (14))){
var state_26972__$1 = state_26972;
var statearr_27005_27041 = state_26972__$1;
(statearr_27005_27041[(2)] = null);

(statearr_27005_27041[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26973 === (16))){
var inst_26927 = (state_26972[(10)]);
var inst_26931 = cljs.core.chunk_first.call(null,inst_26927);
var inst_26932 = cljs.core.chunk_rest.call(null,inst_26927);
var inst_26933 = cljs.core.count.call(null,inst_26931);
var inst_26913 = inst_26932;
var inst_26914 = inst_26931;
var inst_26915 = inst_26933;
var inst_26916 = (0);
var state_26972__$1 = (function (){var statearr_27006 = state_26972;
(statearr_27006[(12)] = inst_26916);

(statearr_27006[(13)] = inst_26914);

(statearr_27006[(15)] = inst_26913);

(statearr_27006[(16)] = inst_26915);

return statearr_27006;
})();
var statearr_27007_27042 = state_26972__$1;
(statearr_27007_27042[(2)] = null);

(statearr_27007_27042[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26973 === (10))){
var inst_26916 = (state_26972[(12)]);
var inst_26914 = (state_26972[(13)]);
var inst_26913 = (state_26972[(15)]);
var inst_26915 = (state_26972[(16)]);
var inst_26921 = cljs.core._nth.call(null,inst_26914,inst_26916);
var inst_26922 = cljs.core.async.muxch_STAR_.call(null,inst_26921);
var inst_26923 = cljs.core.async.close_BANG_.call(null,inst_26922);
var inst_26924 = (inst_26916 + (1));
var tmp27002 = inst_26914;
var tmp27003 = inst_26913;
var tmp27004 = inst_26915;
var inst_26913__$1 = tmp27003;
var inst_26914__$1 = tmp27002;
var inst_26915__$1 = tmp27004;
var inst_26916__$1 = inst_26924;
var state_26972__$1 = (function (){var statearr_27008 = state_26972;
(statearr_27008[(12)] = inst_26916__$1);

(statearr_27008[(13)] = inst_26914__$1);

(statearr_27008[(15)] = inst_26913__$1);

(statearr_27008[(17)] = inst_26923);

(statearr_27008[(16)] = inst_26915__$1);

return statearr_27008;
})();
var statearr_27009_27043 = state_26972__$1;
(statearr_27009_27043[(2)] = null);

(statearr_27009_27043[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26973 === (18))){
var inst_26942 = (state_26972[(2)]);
var state_26972__$1 = state_26972;
var statearr_27010_27044 = state_26972__$1;
(statearr_27010_27044[(2)] = inst_26942);

(statearr_27010_27044[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26973 === (8))){
var inst_26916 = (state_26972[(12)]);
var inst_26915 = (state_26972[(16)]);
var inst_26918 = (inst_26916 < inst_26915);
var inst_26919 = inst_26918;
var state_26972__$1 = state_26972;
if(cljs.core.truth_(inst_26919)){
var statearr_27011_27045 = state_26972__$1;
(statearr_27011_27045[(1)] = (10));

} else {
var statearr_27012_27046 = state_26972__$1;
(statearr_27012_27046[(1)] = (11));

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
});})(c__25785__auto___27018,mults,ensure_mult,p))
;
return ((function (switch__25690__auto__,c__25785__auto___27018,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__25691__auto__ = null;
var cljs$core$async$state_machine__25691__auto____0 = (function (){
var statearr_27013 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27013[(0)] = cljs$core$async$state_machine__25691__auto__);

(statearr_27013[(1)] = (1));

return statearr_27013;
});
var cljs$core$async$state_machine__25691__auto____1 = (function (state_26972){
while(true){
var ret_value__25692__auto__ = (function (){try{while(true){
var result__25693__auto__ = switch__25690__auto__.call(null,state_26972);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25693__auto__;
}
break;
}
}catch (e27014){if((e27014 instanceof Object)){
var ex__25694__auto__ = e27014;
var statearr_27015_27047 = state_26972;
(statearr_27015_27047[(5)] = ex__25694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26972);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27048 = state_26972;
state_26972 = G__27048;
continue;
} else {
return ret_value__25692__auto__;
}
break;
}
});
cljs$core$async$state_machine__25691__auto__ = function(state_26972){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25691__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25691__auto____1.call(this,state_26972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25691__auto____0;
cljs$core$async$state_machine__25691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25691__auto____1;
return cljs$core$async$state_machine__25691__auto__;
})()
;})(switch__25690__auto__,c__25785__auto___27018,mults,ensure_mult,p))
})();
var state__25787__auto__ = (function (){var statearr_27016 = f__25786__auto__.call(null);
(statearr_27016[(6)] = c__25785__auto___27018);

return statearr_27016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25787__auto__);
});})(c__25785__auto___27018,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__27050 = arguments.length;
switch (G__27050) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__27053 = arguments.length;
switch (G__27053) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__27056 = arguments.length;
switch (G__27056) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__25785__auto___27123 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25785__auto___27123,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__25786__auto__ = (function (){var switch__25690__auto__ = ((function (c__25785__auto___27123,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27095){
var state_val_27096 = (state_27095[(1)]);
if((state_val_27096 === (7))){
var state_27095__$1 = state_27095;
var statearr_27097_27124 = state_27095__$1;
(statearr_27097_27124[(2)] = null);

(statearr_27097_27124[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (1))){
var state_27095__$1 = state_27095;
var statearr_27098_27125 = state_27095__$1;
(statearr_27098_27125[(2)] = null);

(statearr_27098_27125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (4))){
var inst_27059 = (state_27095[(7)]);
var inst_27061 = (inst_27059 < cnt);
var state_27095__$1 = state_27095;
if(cljs.core.truth_(inst_27061)){
var statearr_27099_27126 = state_27095__$1;
(statearr_27099_27126[(1)] = (6));

} else {
var statearr_27100_27127 = state_27095__$1;
(statearr_27100_27127[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (15))){
var inst_27091 = (state_27095[(2)]);
var state_27095__$1 = state_27095;
var statearr_27101_27128 = state_27095__$1;
(statearr_27101_27128[(2)] = inst_27091);

(statearr_27101_27128[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (13))){
var inst_27084 = cljs.core.async.close_BANG_.call(null,out);
var state_27095__$1 = state_27095;
var statearr_27102_27129 = state_27095__$1;
(statearr_27102_27129[(2)] = inst_27084);

(statearr_27102_27129[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (6))){
var state_27095__$1 = state_27095;
var statearr_27103_27130 = state_27095__$1;
(statearr_27103_27130[(2)] = null);

(statearr_27103_27130[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (3))){
var inst_27093 = (state_27095[(2)]);
var state_27095__$1 = state_27095;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27095__$1,inst_27093);
} else {
if((state_val_27096 === (12))){
var inst_27081 = (state_27095[(8)]);
var inst_27081__$1 = (state_27095[(2)]);
var inst_27082 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27081__$1);
var state_27095__$1 = (function (){var statearr_27104 = state_27095;
(statearr_27104[(8)] = inst_27081__$1);

return statearr_27104;
})();
if(cljs.core.truth_(inst_27082)){
var statearr_27105_27131 = state_27095__$1;
(statearr_27105_27131[(1)] = (13));

} else {
var statearr_27106_27132 = state_27095__$1;
(statearr_27106_27132[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (2))){
var inst_27058 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27059 = (0);
var state_27095__$1 = (function (){var statearr_27107 = state_27095;
(statearr_27107[(9)] = inst_27058);

(statearr_27107[(7)] = inst_27059);

return statearr_27107;
})();
var statearr_27108_27133 = state_27095__$1;
(statearr_27108_27133[(2)] = null);

(statearr_27108_27133[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (11))){
var inst_27059 = (state_27095[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27095,(10),Object,null,(9));
var inst_27068 = chs__$1.call(null,inst_27059);
var inst_27069 = done.call(null,inst_27059);
var inst_27070 = cljs.core.async.take_BANG_.call(null,inst_27068,inst_27069);
var state_27095__$1 = state_27095;
var statearr_27109_27134 = state_27095__$1;
(statearr_27109_27134[(2)] = inst_27070);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27095__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (9))){
var inst_27059 = (state_27095[(7)]);
var inst_27072 = (state_27095[(2)]);
var inst_27073 = (inst_27059 + (1));
var inst_27059__$1 = inst_27073;
var state_27095__$1 = (function (){var statearr_27110 = state_27095;
(statearr_27110[(7)] = inst_27059__$1);

(statearr_27110[(10)] = inst_27072);

return statearr_27110;
})();
var statearr_27111_27135 = state_27095__$1;
(statearr_27111_27135[(2)] = null);

(statearr_27111_27135[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (5))){
var inst_27079 = (state_27095[(2)]);
var state_27095__$1 = (function (){var statearr_27112 = state_27095;
(statearr_27112[(11)] = inst_27079);

return statearr_27112;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27095__$1,(12),dchan);
} else {
if((state_val_27096 === (14))){
var inst_27081 = (state_27095[(8)]);
var inst_27086 = cljs.core.apply.call(null,f,inst_27081);
var state_27095__$1 = state_27095;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27095__$1,(16),out,inst_27086);
} else {
if((state_val_27096 === (16))){
var inst_27088 = (state_27095[(2)]);
var state_27095__$1 = (function (){var statearr_27113 = state_27095;
(statearr_27113[(12)] = inst_27088);

return statearr_27113;
})();
var statearr_27114_27136 = state_27095__$1;
(statearr_27114_27136[(2)] = null);

(statearr_27114_27136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (10))){
var inst_27063 = (state_27095[(2)]);
var inst_27064 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27095__$1 = (function (){var statearr_27115 = state_27095;
(statearr_27115[(13)] = inst_27063);

return statearr_27115;
})();
var statearr_27116_27137 = state_27095__$1;
(statearr_27116_27137[(2)] = inst_27064);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27095__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (8))){
var inst_27077 = (state_27095[(2)]);
var state_27095__$1 = state_27095;
var statearr_27117_27138 = state_27095__$1;
(statearr_27117_27138[(2)] = inst_27077);

(statearr_27117_27138[(1)] = (5));


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
});})(c__25785__auto___27123,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__25690__auto__,c__25785__auto___27123,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__25691__auto__ = null;
var cljs$core$async$state_machine__25691__auto____0 = (function (){
var statearr_27118 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27118[(0)] = cljs$core$async$state_machine__25691__auto__);

(statearr_27118[(1)] = (1));

return statearr_27118;
});
var cljs$core$async$state_machine__25691__auto____1 = (function (state_27095){
while(true){
var ret_value__25692__auto__ = (function (){try{while(true){
var result__25693__auto__ = switch__25690__auto__.call(null,state_27095);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25693__auto__;
}
break;
}
}catch (e27119){if((e27119 instanceof Object)){
var ex__25694__auto__ = e27119;
var statearr_27120_27139 = state_27095;
(statearr_27120_27139[(5)] = ex__25694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27095);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27119;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27140 = state_27095;
state_27095 = G__27140;
continue;
} else {
return ret_value__25692__auto__;
}
break;
}
});
cljs$core$async$state_machine__25691__auto__ = function(state_27095){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25691__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25691__auto____1.call(this,state_27095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25691__auto____0;
cljs$core$async$state_machine__25691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25691__auto____1;
return cljs$core$async$state_machine__25691__auto__;
})()
;})(switch__25690__auto__,c__25785__auto___27123,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__25787__auto__ = (function (){var statearr_27121 = f__25786__auto__.call(null);
(statearr_27121[(6)] = c__25785__auto___27123);

return statearr_27121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25787__auto__);
});})(c__25785__auto___27123,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__27143 = arguments.length;
switch (G__27143) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25785__auto___27197 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25785__auto___27197,out){
return (function (){
var f__25786__auto__ = (function (){var switch__25690__auto__ = ((function (c__25785__auto___27197,out){
return (function (state_27175){
var state_val_27176 = (state_27175[(1)]);
if((state_val_27176 === (7))){
var inst_27155 = (state_27175[(7)]);
var inst_27154 = (state_27175[(8)]);
var inst_27154__$1 = (state_27175[(2)]);
var inst_27155__$1 = cljs.core.nth.call(null,inst_27154__$1,(0),null);
var inst_27156 = cljs.core.nth.call(null,inst_27154__$1,(1),null);
var inst_27157 = (inst_27155__$1 == null);
var state_27175__$1 = (function (){var statearr_27177 = state_27175;
(statearr_27177[(7)] = inst_27155__$1);

(statearr_27177[(8)] = inst_27154__$1);

(statearr_27177[(9)] = inst_27156);

return statearr_27177;
})();
if(cljs.core.truth_(inst_27157)){
var statearr_27178_27198 = state_27175__$1;
(statearr_27178_27198[(1)] = (8));

} else {
var statearr_27179_27199 = state_27175__$1;
(statearr_27179_27199[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27176 === (1))){
var inst_27144 = cljs.core.vec.call(null,chs);
var inst_27145 = inst_27144;
var state_27175__$1 = (function (){var statearr_27180 = state_27175;
(statearr_27180[(10)] = inst_27145);

return statearr_27180;
})();
var statearr_27181_27200 = state_27175__$1;
(statearr_27181_27200[(2)] = null);

(statearr_27181_27200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27176 === (4))){
var inst_27145 = (state_27175[(10)]);
var state_27175__$1 = state_27175;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27175__$1,(7),inst_27145);
} else {
if((state_val_27176 === (6))){
var inst_27171 = (state_27175[(2)]);
var state_27175__$1 = state_27175;
var statearr_27182_27201 = state_27175__$1;
(statearr_27182_27201[(2)] = inst_27171);

(statearr_27182_27201[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27176 === (3))){
var inst_27173 = (state_27175[(2)]);
var state_27175__$1 = state_27175;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27175__$1,inst_27173);
} else {
if((state_val_27176 === (2))){
var inst_27145 = (state_27175[(10)]);
var inst_27147 = cljs.core.count.call(null,inst_27145);
var inst_27148 = (inst_27147 > (0));
var state_27175__$1 = state_27175;
if(cljs.core.truth_(inst_27148)){
var statearr_27184_27202 = state_27175__$1;
(statearr_27184_27202[(1)] = (4));

} else {
var statearr_27185_27203 = state_27175__$1;
(statearr_27185_27203[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27176 === (11))){
var inst_27145 = (state_27175[(10)]);
var inst_27164 = (state_27175[(2)]);
var tmp27183 = inst_27145;
var inst_27145__$1 = tmp27183;
var state_27175__$1 = (function (){var statearr_27186 = state_27175;
(statearr_27186[(11)] = inst_27164);

(statearr_27186[(10)] = inst_27145__$1);

return statearr_27186;
})();
var statearr_27187_27204 = state_27175__$1;
(statearr_27187_27204[(2)] = null);

(statearr_27187_27204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27176 === (9))){
var inst_27155 = (state_27175[(7)]);
var state_27175__$1 = state_27175;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27175__$1,(11),out,inst_27155);
} else {
if((state_val_27176 === (5))){
var inst_27169 = cljs.core.async.close_BANG_.call(null,out);
var state_27175__$1 = state_27175;
var statearr_27188_27205 = state_27175__$1;
(statearr_27188_27205[(2)] = inst_27169);

(statearr_27188_27205[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27176 === (10))){
var inst_27167 = (state_27175[(2)]);
var state_27175__$1 = state_27175;
var statearr_27189_27206 = state_27175__$1;
(statearr_27189_27206[(2)] = inst_27167);

(statearr_27189_27206[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27176 === (8))){
var inst_27155 = (state_27175[(7)]);
var inst_27145 = (state_27175[(10)]);
var inst_27154 = (state_27175[(8)]);
var inst_27156 = (state_27175[(9)]);
var inst_27159 = (function (){var cs = inst_27145;
var vec__27150 = inst_27154;
var v = inst_27155;
var c = inst_27156;
return ((function (cs,vec__27150,v,c,inst_27155,inst_27145,inst_27154,inst_27156,state_val_27176,c__25785__auto___27197,out){
return (function (p1__27141_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27141_SHARP_);
});
;})(cs,vec__27150,v,c,inst_27155,inst_27145,inst_27154,inst_27156,state_val_27176,c__25785__auto___27197,out))
})();
var inst_27160 = cljs.core.filterv.call(null,inst_27159,inst_27145);
var inst_27145__$1 = inst_27160;
var state_27175__$1 = (function (){var statearr_27190 = state_27175;
(statearr_27190[(10)] = inst_27145__$1);

return statearr_27190;
})();
var statearr_27191_27207 = state_27175__$1;
(statearr_27191_27207[(2)] = null);

(statearr_27191_27207[(1)] = (2));


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
});})(c__25785__auto___27197,out))
;
return ((function (switch__25690__auto__,c__25785__auto___27197,out){
return (function() {
var cljs$core$async$state_machine__25691__auto__ = null;
var cljs$core$async$state_machine__25691__auto____0 = (function (){
var statearr_27192 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27192[(0)] = cljs$core$async$state_machine__25691__auto__);

(statearr_27192[(1)] = (1));

return statearr_27192;
});
var cljs$core$async$state_machine__25691__auto____1 = (function (state_27175){
while(true){
var ret_value__25692__auto__ = (function (){try{while(true){
var result__25693__auto__ = switch__25690__auto__.call(null,state_27175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25693__auto__;
}
break;
}
}catch (e27193){if((e27193 instanceof Object)){
var ex__25694__auto__ = e27193;
var statearr_27194_27208 = state_27175;
(statearr_27194_27208[(5)] = ex__25694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27193;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27209 = state_27175;
state_27175 = G__27209;
continue;
} else {
return ret_value__25692__auto__;
}
break;
}
});
cljs$core$async$state_machine__25691__auto__ = function(state_27175){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25691__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25691__auto____1.call(this,state_27175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25691__auto____0;
cljs$core$async$state_machine__25691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25691__auto____1;
return cljs$core$async$state_machine__25691__auto__;
})()
;})(switch__25690__auto__,c__25785__auto___27197,out))
})();
var state__25787__auto__ = (function (){var statearr_27195 = f__25786__auto__.call(null);
(statearr_27195[(6)] = c__25785__auto___27197);

return statearr_27195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25787__auto__);
});})(c__25785__auto___27197,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__27211 = arguments.length;
switch (G__27211) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25785__auto___27256 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25785__auto___27256,out){
return (function (){
var f__25786__auto__ = (function (){var switch__25690__auto__ = ((function (c__25785__auto___27256,out){
return (function (state_27235){
var state_val_27236 = (state_27235[(1)]);
if((state_val_27236 === (7))){
var inst_27217 = (state_27235[(7)]);
var inst_27217__$1 = (state_27235[(2)]);
var inst_27218 = (inst_27217__$1 == null);
var inst_27219 = cljs.core.not.call(null,inst_27218);
var state_27235__$1 = (function (){var statearr_27237 = state_27235;
(statearr_27237[(7)] = inst_27217__$1);

return statearr_27237;
})();
if(inst_27219){
var statearr_27238_27257 = state_27235__$1;
(statearr_27238_27257[(1)] = (8));

} else {
var statearr_27239_27258 = state_27235__$1;
(statearr_27239_27258[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27236 === (1))){
var inst_27212 = (0);
var state_27235__$1 = (function (){var statearr_27240 = state_27235;
(statearr_27240[(8)] = inst_27212);

return statearr_27240;
})();
var statearr_27241_27259 = state_27235__$1;
(statearr_27241_27259[(2)] = null);

(statearr_27241_27259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27236 === (4))){
var state_27235__$1 = state_27235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27235__$1,(7),ch);
} else {
if((state_val_27236 === (6))){
var inst_27230 = (state_27235[(2)]);
var state_27235__$1 = state_27235;
var statearr_27242_27260 = state_27235__$1;
(statearr_27242_27260[(2)] = inst_27230);

(statearr_27242_27260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27236 === (3))){
var inst_27232 = (state_27235[(2)]);
var inst_27233 = cljs.core.async.close_BANG_.call(null,out);
var state_27235__$1 = (function (){var statearr_27243 = state_27235;
(statearr_27243[(9)] = inst_27232);

return statearr_27243;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27235__$1,inst_27233);
} else {
if((state_val_27236 === (2))){
var inst_27212 = (state_27235[(8)]);
var inst_27214 = (inst_27212 < n);
var state_27235__$1 = state_27235;
if(cljs.core.truth_(inst_27214)){
var statearr_27244_27261 = state_27235__$1;
(statearr_27244_27261[(1)] = (4));

} else {
var statearr_27245_27262 = state_27235__$1;
(statearr_27245_27262[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27236 === (11))){
var inst_27212 = (state_27235[(8)]);
var inst_27222 = (state_27235[(2)]);
var inst_27223 = (inst_27212 + (1));
var inst_27212__$1 = inst_27223;
var state_27235__$1 = (function (){var statearr_27246 = state_27235;
(statearr_27246[(8)] = inst_27212__$1);

(statearr_27246[(10)] = inst_27222);

return statearr_27246;
})();
var statearr_27247_27263 = state_27235__$1;
(statearr_27247_27263[(2)] = null);

(statearr_27247_27263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27236 === (9))){
var state_27235__$1 = state_27235;
var statearr_27248_27264 = state_27235__$1;
(statearr_27248_27264[(2)] = null);

(statearr_27248_27264[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27236 === (5))){
var state_27235__$1 = state_27235;
var statearr_27249_27265 = state_27235__$1;
(statearr_27249_27265[(2)] = null);

(statearr_27249_27265[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27236 === (10))){
var inst_27227 = (state_27235[(2)]);
var state_27235__$1 = state_27235;
var statearr_27250_27266 = state_27235__$1;
(statearr_27250_27266[(2)] = inst_27227);

(statearr_27250_27266[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27236 === (8))){
var inst_27217 = (state_27235[(7)]);
var state_27235__$1 = state_27235;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27235__$1,(11),out,inst_27217);
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
});})(c__25785__auto___27256,out))
;
return ((function (switch__25690__auto__,c__25785__auto___27256,out){
return (function() {
var cljs$core$async$state_machine__25691__auto__ = null;
var cljs$core$async$state_machine__25691__auto____0 = (function (){
var statearr_27251 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27251[(0)] = cljs$core$async$state_machine__25691__auto__);

(statearr_27251[(1)] = (1));

return statearr_27251;
});
var cljs$core$async$state_machine__25691__auto____1 = (function (state_27235){
while(true){
var ret_value__25692__auto__ = (function (){try{while(true){
var result__25693__auto__ = switch__25690__auto__.call(null,state_27235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25693__auto__;
}
break;
}
}catch (e27252){if((e27252 instanceof Object)){
var ex__25694__auto__ = e27252;
var statearr_27253_27267 = state_27235;
(statearr_27253_27267[(5)] = ex__25694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27252;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27268 = state_27235;
state_27235 = G__27268;
continue;
} else {
return ret_value__25692__auto__;
}
break;
}
});
cljs$core$async$state_machine__25691__auto__ = function(state_27235){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25691__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25691__auto____1.call(this,state_27235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25691__auto____0;
cljs$core$async$state_machine__25691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25691__auto____1;
return cljs$core$async$state_machine__25691__auto__;
})()
;})(switch__25690__auto__,c__25785__auto___27256,out))
})();
var state__25787__auto__ = (function (){var statearr_27254 = f__25786__auto__.call(null);
(statearr_27254[(6)] = c__25785__auto___27256);

return statearr_27254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25787__auto__);
});})(c__25785__auto___27256,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27270 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27270 = (function (f,ch,meta27271){
this.f = f;
this.ch = ch;
this.meta27271 = meta27271;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27270.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27272,meta27271__$1){
var self__ = this;
var _27272__$1 = this;
return (new cljs.core.async.t_cljs$core$async27270(self__.f,self__.ch,meta27271__$1));
});

cljs.core.async.t_cljs$core$async27270.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27272){
var self__ = this;
var _27272__$1 = this;
return self__.meta27271;
});

cljs.core.async.t_cljs$core$async27270.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27270.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27270.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27270.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27270.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27273 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27273 = (function (f,ch,meta27271,_,fn1,meta27274){
this.f = f;
this.ch = ch;
this.meta27271 = meta27271;
this._ = _;
this.fn1 = fn1;
this.meta27274 = meta27274;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27273.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27275,meta27274__$1){
var self__ = this;
var _27275__$1 = this;
return (new cljs.core.async.t_cljs$core$async27273(self__.f,self__.ch,self__.meta27271,self__._,self__.fn1,meta27274__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async27273.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27275){
var self__ = this;
var _27275__$1 = this;
return self__.meta27274;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27273.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27273.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27273.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27273.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27269_SHARP_){
return f1.call(null,(((p1__27269_SHARP_ == null))?null:self__.f.call(null,p1__27269_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async27273.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27271","meta27271",-647264749,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async27270","cljs.core.async/t_cljs$core$async27270",-1321150497,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27274","meta27274",-1491732646,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27273.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27273.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27273";

cljs.core.async.t_cljs$core$async27273.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27273");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27273.
 */
cljs.core.async.__GT_t_cljs$core$async27273 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27273(f__$1,ch__$1,meta27271__$1,___$2,fn1__$1,meta27274){
return (new cljs.core.async.t_cljs$core$async27273(f__$1,ch__$1,meta27271__$1,___$2,fn1__$1,meta27274));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async27273(self__.f,self__.ch,self__.meta27271,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async27270.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27270.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async27270.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27271","meta27271",-647264749,null)], null);
});

cljs.core.async.t_cljs$core$async27270.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27270.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27270";

cljs.core.async.t_cljs$core$async27270.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27270");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27270.
 */
cljs.core.async.__GT_t_cljs$core$async27270 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27270(f__$1,ch__$1,meta27271){
return (new cljs.core.async.t_cljs$core$async27270(f__$1,ch__$1,meta27271));
});

}

return (new cljs.core.async.t_cljs$core$async27270(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27276 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27276 = (function (f,ch,meta27277){
this.f = f;
this.ch = ch;
this.meta27277 = meta27277;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27276.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27278,meta27277__$1){
var self__ = this;
var _27278__$1 = this;
return (new cljs.core.async.t_cljs$core$async27276(self__.f,self__.ch,meta27277__$1));
});

cljs.core.async.t_cljs$core$async27276.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27278){
var self__ = this;
var _27278__$1 = this;
return self__.meta27277;
});

cljs.core.async.t_cljs$core$async27276.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27276.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27276.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27276.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27276.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27276.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async27276.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27277","meta27277",1790003528,null)], null);
});

cljs.core.async.t_cljs$core$async27276.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27276.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27276";

cljs.core.async.t_cljs$core$async27276.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27276");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27276.
 */
cljs.core.async.__GT_t_cljs$core$async27276 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async27276(f__$1,ch__$1,meta27277){
return (new cljs.core.async.t_cljs$core$async27276(f__$1,ch__$1,meta27277));
});

}

return (new cljs.core.async.t_cljs$core$async27276(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27279 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27279 = (function (p,ch,meta27280){
this.p = p;
this.ch = ch;
this.meta27280 = meta27280;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27281,meta27280__$1){
var self__ = this;
var _27281__$1 = this;
return (new cljs.core.async.t_cljs$core$async27279(self__.p,self__.ch,meta27280__$1));
});

cljs.core.async.t_cljs$core$async27279.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27281){
var self__ = this;
var _27281__$1 = this;
return self__.meta27280;
});

cljs.core.async.t_cljs$core$async27279.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27279.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27279.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27279.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27279.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27279.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27279.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async27279.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27280","meta27280",-576532153,null)], null);
});

cljs.core.async.t_cljs$core$async27279.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27279.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27279";

cljs.core.async.t_cljs$core$async27279.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27279");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27279.
 */
cljs.core.async.__GT_t_cljs$core$async27279 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async27279(p__$1,ch__$1,meta27280){
return (new cljs.core.async.t_cljs$core$async27279(p__$1,ch__$1,meta27280));
});

}

return (new cljs.core.async.t_cljs$core$async27279(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__27283 = arguments.length;
switch (G__27283) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25785__auto___27323 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25785__auto___27323,out){
return (function (){
var f__25786__auto__ = (function (){var switch__25690__auto__ = ((function (c__25785__auto___27323,out){
return (function (state_27304){
var state_val_27305 = (state_27304[(1)]);
if((state_val_27305 === (7))){
var inst_27300 = (state_27304[(2)]);
var state_27304__$1 = state_27304;
var statearr_27306_27324 = state_27304__$1;
(statearr_27306_27324[(2)] = inst_27300);

(statearr_27306_27324[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27305 === (1))){
var state_27304__$1 = state_27304;
var statearr_27307_27325 = state_27304__$1;
(statearr_27307_27325[(2)] = null);

(statearr_27307_27325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27305 === (4))){
var inst_27286 = (state_27304[(7)]);
var inst_27286__$1 = (state_27304[(2)]);
var inst_27287 = (inst_27286__$1 == null);
var state_27304__$1 = (function (){var statearr_27308 = state_27304;
(statearr_27308[(7)] = inst_27286__$1);

return statearr_27308;
})();
if(cljs.core.truth_(inst_27287)){
var statearr_27309_27326 = state_27304__$1;
(statearr_27309_27326[(1)] = (5));

} else {
var statearr_27310_27327 = state_27304__$1;
(statearr_27310_27327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27305 === (6))){
var inst_27286 = (state_27304[(7)]);
var inst_27291 = p.call(null,inst_27286);
var state_27304__$1 = state_27304;
if(cljs.core.truth_(inst_27291)){
var statearr_27311_27328 = state_27304__$1;
(statearr_27311_27328[(1)] = (8));

} else {
var statearr_27312_27329 = state_27304__$1;
(statearr_27312_27329[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27305 === (3))){
var inst_27302 = (state_27304[(2)]);
var state_27304__$1 = state_27304;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27304__$1,inst_27302);
} else {
if((state_val_27305 === (2))){
var state_27304__$1 = state_27304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27304__$1,(4),ch);
} else {
if((state_val_27305 === (11))){
var inst_27294 = (state_27304[(2)]);
var state_27304__$1 = state_27304;
var statearr_27313_27330 = state_27304__$1;
(statearr_27313_27330[(2)] = inst_27294);

(statearr_27313_27330[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27305 === (9))){
var state_27304__$1 = state_27304;
var statearr_27314_27331 = state_27304__$1;
(statearr_27314_27331[(2)] = null);

(statearr_27314_27331[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27305 === (5))){
var inst_27289 = cljs.core.async.close_BANG_.call(null,out);
var state_27304__$1 = state_27304;
var statearr_27315_27332 = state_27304__$1;
(statearr_27315_27332[(2)] = inst_27289);

(statearr_27315_27332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27305 === (10))){
var inst_27297 = (state_27304[(2)]);
var state_27304__$1 = (function (){var statearr_27316 = state_27304;
(statearr_27316[(8)] = inst_27297);

return statearr_27316;
})();
var statearr_27317_27333 = state_27304__$1;
(statearr_27317_27333[(2)] = null);

(statearr_27317_27333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27305 === (8))){
var inst_27286 = (state_27304[(7)]);
var state_27304__$1 = state_27304;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27304__$1,(11),out,inst_27286);
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
});})(c__25785__auto___27323,out))
;
return ((function (switch__25690__auto__,c__25785__auto___27323,out){
return (function() {
var cljs$core$async$state_machine__25691__auto__ = null;
var cljs$core$async$state_machine__25691__auto____0 = (function (){
var statearr_27318 = [null,null,null,null,null,null,null,null,null];
(statearr_27318[(0)] = cljs$core$async$state_machine__25691__auto__);

(statearr_27318[(1)] = (1));

return statearr_27318;
});
var cljs$core$async$state_machine__25691__auto____1 = (function (state_27304){
while(true){
var ret_value__25692__auto__ = (function (){try{while(true){
var result__25693__auto__ = switch__25690__auto__.call(null,state_27304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25693__auto__;
}
break;
}
}catch (e27319){if((e27319 instanceof Object)){
var ex__25694__auto__ = e27319;
var statearr_27320_27334 = state_27304;
(statearr_27320_27334[(5)] = ex__25694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27319;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27335 = state_27304;
state_27304 = G__27335;
continue;
} else {
return ret_value__25692__auto__;
}
break;
}
});
cljs$core$async$state_machine__25691__auto__ = function(state_27304){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25691__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25691__auto____1.call(this,state_27304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25691__auto____0;
cljs$core$async$state_machine__25691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25691__auto____1;
return cljs$core$async$state_machine__25691__auto__;
})()
;})(switch__25690__auto__,c__25785__auto___27323,out))
})();
var state__25787__auto__ = (function (){var statearr_27321 = f__25786__auto__.call(null);
(statearr_27321[(6)] = c__25785__auto___27323);

return statearr_27321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25787__auto__);
});})(c__25785__auto___27323,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__27337 = arguments.length;
switch (G__27337) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__25785__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25785__auto__){
return (function (){
var f__25786__auto__ = (function (){var switch__25690__auto__ = ((function (c__25785__auto__){
return (function (state_27400){
var state_val_27401 = (state_27400[(1)]);
if((state_val_27401 === (7))){
var inst_27396 = (state_27400[(2)]);
var state_27400__$1 = state_27400;
var statearr_27402_27440 = state_27400__$1;
(statearr_27402_27440[(2)] = inst_27396);

(statearr_27402_27440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27401 === (20))){
var inst_27366 = (state_27400[(7)]);
var inst_27377 = (state_27400[(2)]);
var inst_27378 = cljs.core.next.call(null,inst_27366);
var inst_27352 = inst_27378;
var inst_27353 = null;
var inst_27354 = (0);
var inst_27355 = (0);
var state_27400__$1 = (function (){var statearr_27403 = state_27400;
(statearr_27403[(8)] = inst_27352);

(statearr_27403[(9)] = inst_27355);

(statearr_27403[(10)] = inst_27353);

(statearr_27403[(11)] = inst_27354);

(statearr_27403[(12)] = inst_27377);

return statearr_27403;
})();
var statearr_27404_27441 = state_27400__$1;
(statearr_27404_27441[(2)] = null);

(statearr_27404_27441[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27401 === (1))){
var state_27400__$1 = state_27400;
var statearr_27405_27442 = state_27400__$1;
(statearr_27405_27442[(2)] = null);

(statearr_27405_27442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27401 === (4))){
var inst_27341 = (state_27400[(13)]);
var inst_27341__$1 = (state_27400[(2)]);
var inst_27342 = (inst_27341__$1 == null);
var state_27400__$1 = (function (){var statearr_27406 = state_27400;
(statearr_27406[(13)] = inst_27341__$1);

return statearr_27406;
})();
if(cljs.core.truth_(inst_27342)){
var statearr_27407_27443 = state_27400__$1;
(statearr_27407_27443[(1)] = (5));

} else {
var statearr_27408_27444 = state_27400__$1;
(statearr_27408_27444[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27401 === (15))){
var state_27400__$1 = state_27400;
var statearr_27412_27445 = state_27400__$1;
(statearr_27412_27445[(2)] = null);

(statearr_27412_27445[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27401 === (21))){
var state_27400__$1 = state_27400;
var statearr_27413_27446 = state_27400__$1;
(statearr_27413_27446[(2)] = null);

(statearr_27413_27446[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27401 === (13))){
var inst_27352 = (state_27400[(8)]);
var inst_27355 = (state_27400[(9)]);
var inst_27353 = (state_27400[(10)]);
var inst_27354 = (state_27400[(11)]);
var inst_27362 = (state_27400[(2)]);
var inst_27363 = (inst_27355 + (1));
var tmp27409 = inst_27352;
var tmp27410 = inst_27353;
var tmp27411 = inst_27354;
var inst_27352__$1 = tmp27409;
var inst_27353__$1 = tmp27410;
var inst_27354__$1 = tmp27411;
var inst_27355__$1 = inst_27363;
var state_27400__$1 = (function (){var statearr_27414 = state_27400;
(statearr_27414[(8)] = inst_27352__$1);

(statearr_27414[(9)] = inst_27355__$1);

(statearr_27414[(10)] = inst_27353__$1);

(statearr_27414[(14)] = inst_27362);

(statearr_27414[(11)] = inst_27354__$1);

return statearr_27414;
})();
var statearr_27415_27447 = state_27400__$1;
(statearr_27415_27447[(2)] = null);

(statearr_27415_27447[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27401 === (22))){
var state_27400__$1 = state_27400;
var statearr_27416_27448 = state_27400__$1;
(statearr_27416_27448[(2)] = null);

(statearr_27416_27448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27401 === (6))){
var inst_27341 = (state_27400[(13)]);
var inst_27350 = f.call(null,inst_27341);
var inst_27351 = cljs.core.seq.call(null,inst_27350);
var inst_27352 = inst_27351;
var inst_27353 = null;
var inst_27354 = (0);
var inst_27355 = (0);
var state_27400__$1 = (function (){var statearr_27417 = state_27400;
(statearr_27417[(8)] = inst_27352);

(statearr_27417[(9)] = inst_27355);

(statearr_27417[(10)] = inst_27353);

(statearr_27417[(11)] = inst_27354);

return statearr_27417;
})();
var statearr_27418_27449 = state_27400__$1;
(statearr_27418_27449[(2)] = null);

(statearr_27418_27449[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27401 === (17))){
var inst_27366 = (state_27400[(7)]);
var inst_27370 = cljs.core.chunk_first.call(null,inst_27366);
var inst_27371 = cljs.core.chunk_rest.call(null,inst_27366);
var inst_27372 = cljs.core.count.call(null,inst_27370);
var inst_27352 = inst_27371;
var inst_27353 = inst_27370;
var inst_27354 = inst_27372;
var inst_27355 = (0);
var state_27400__$1 = (function (){var statearr_27419 = state_27400;
(statearr_27419[(8)] = inst_27352);

(statearr_27419[(9)] = inst_27355);

(statearr_27419[(10)] = inst_27353);

(statearr_27419[(11)] = inst_27354);

return statearr_27419;
})();
var statearr_27420_27450 = state_27400__$1;
(statearr_27420_27450[(2)] = null);

(statearr_27420_27450[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27401 === (3))){
var inst_27398 = (state_27400[(2)]);
var state_27400__$1 = state_27400;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27400__$1,inst_27398);
} else {
if((state_val_27401 === (12))){
var inst_27386 = (state_27400[(2)]);
var state_27400__$1 = state_27400;
var statearr_27421_27451 = state_27400__$1;
(statearr_27421_27451[(2)] = inst_27386);

(statearr_27421_27451[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27401 === (2))){
var state_27400__$1 = state_27400;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27400__$1,(4),in$);
} else {
if((state_val_27401 === (23))){
var inst_27394 = (state_27400[(2)]);
var state_27400__$1 = state_27400;
var statearr_27422_27452 = state_27400__$1;
(statearr_27422_27452[(2)] = inst_27394);

(statearr_27422_27452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27401 === (19))){
var inst_27381 = (state_27400[(2)]);
var state_27400__$1 = state_27400;
var statearr_27423_27453 = state_27400__$1;
(statearr_27423_27453[(2)] = inst_27381);

(statearr_27423_27453[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27401 === (11))){
var inst_27352 = (state_27400[(8)]);
var inst_27366 = (state_27400[(7)]);
var inst_27366__$1 = cljs.core.seq.call(null,inst_27352);
var state_27400__$1 = (function (){var statearr_27424 = state_27400;
(statearr_27424[(7)] = inst_27366__$1);

return statearr_27424;
})();
if(inst_27366__$1){
var statearr_27425_27454 = state_27400__$1;
(statearr_27425_27454[(1)] = (14));

} else {
var statearr_27426_27455 = state_27400__$1;
(statearr_27426_27455[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27401 === (9))){
var inst_27388 = (state_27400[(2)]);
var inst_27389 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27400__$1 = (function (){var statearr_27427 = state_27400;
(statearr_27427[(15)] = inst_27388);

return statearr_27427;
})();
if(cljs.core.truth_(inst_27389)){
var statearr_27428_27456 = state_27400__$1;
(statearr_27428_27456[(1)] = (21));

} else {
var statearr_27429_27457 = state_27400__$1;
(statearr_27429_27457[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27401 === (5))){
var inst_27344 = cljs.core.async.close_BANG_.call(null,out);
var state_27400__$1 = state_27400;
var statearr_27430_27458 = state_27400__$1;
(statearr_27430_27458[(2)] = inst_27344);

(statearr_27430_27458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27401 === (14))){
var inst_27366 = (state_27400[(7)]);
var inst_27368 = cljs.core.chunked_seq_QMARK_.call(null,inst_27366);
var state_27400__$1 = state_27400;
if(inst_27368){
var statearr_27431_27459 = state_27400__$1;
(statearr_27431_27459[(1)] = (17));

} else {
var statearr_27432_27460 = state_27400__$1;
(statearr_27432_27460[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27401 === (16))){
var inst_27384 = (state_27400[(2)]);
var state_27400__$1 = state_27400;
var statearr_27433_27461 = state_27400__$1;
(statearr_27433_27461[(2)] = inst_27384);

(statearr_27433_27461[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27401 === (10))){
var inst_27355 = (state_27400[(9)]);
var inst_27353 = (state_27400[(10)]);
var inst_27360 = cljs.core._nth.call(null,inst_27353,inst_27355);
var state_27400__$1 = state_27400;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27400__$1,(13),out,inst_27360);
} else {
if((state_val_27401 === (18))){
var inst_27366 = (state_27400[(7)]);
var inst_27375 = cljs.core.first.call(null,inst_27366);
var state_27400__$1 = state_27400;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27400__$1,(20),out,inst_27375);
} else {
if((state_val_27401 === (8))){
var inst_27355 = (state_27400[(9)]);
var inst_27354 = (state_27400[(11)]);
var inst_27357 = (inst_27355 < inst_27354);
var inst_27358 = inst_27357;
var state_27400__$1 = state_27400;
if(cljs.core.truth_(inst_27358)){
var statearr_27434_27462 = state_27400__$1;
(statearr_27434_27462[(1)] = (10));

} else {
var statearr_27435_27463 = state_27400__$1;
(statearr_27435_27463[(1)] = (11));

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
});})(c__25785__auto__))
;
return ((function (switch__25690__auto__,c__25785__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__25691__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__25691__auto____0 = (function (){
var statearr_27436 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27436[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__25691__auto__);

(statearr_27436[(1)] = (1));

return statearr_27436;
});
var cljs$core$async$mapcat_STAR__$_state_machine__25691__auto____1 = (function (state_27400){
while(true){
var ret_value__25692__auto__ = (function (){try{while(true){
var result__25693__auto__ = switch__25690__auto__.call(null,state_27400);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25693__auto__;
}
break;
}
}catch (e27437){if((e27437 instanceof Object)){
var ex__25694__auto__ = e27437;
var statearr_27438_27464 = state_27400;
(statearr_27438_27464[(5)] = ex__25694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27437;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27465 = state_27400;
state_27400 = G__27465;
continue;
} else {
return ret_value__25692__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__25691__auto__ = function(state_27400){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__25691__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__25691__auto____1.call(this,state_27400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__25691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__25691__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__25691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__25691__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__25691__auto__;
})()
;})(switch__25690__auto__,c__25785__auto__))
})();
var state__25787__auto__ = (function (){var statearr_27439 = f__25786__auto__.call(null);
(statearr_27439[(6)] = c__25785__auto__);

return statearr_27439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25787__auto__);
});})(c__25785__auto__))
);

return c__25785__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__27467 = arguments.length;
switch (G__27467) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__27470 = arguments.length;
switch (G__27470) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__27473 = arguments.length;
switch (G__27473) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25785__auto___27520 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25785__auto___27520,out){
return (function (){
var f__25786__auto__ = (function (){var switch__25690__auto__ = ((function (c__25785__auto___27520,out){
return (function (state_27497){
var state_val_27498 = (state_27497[(1)]);
if((state_val_27498 === (7))){
var inst_27492 = (state_27497[(2)]);
var state_27497__$1 = state_27497;
var statearr_27499_27521 = state_27497__$1;
(statearr_27499_27521[(2)] = inst_27492);

(statearr_27499_27521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27498 === (1))){
var inst_27474 = null;
var state_27497__$1 = (function (){var statearr_27500 = state_27497;
(statearr_27500[(7)] = inst_27474);

return statearr_27500;
})();
var statearr_27501_27522 = state_27497__$1;
(statearr_27501_27522[(2)] = null);

(statearr_27501_27522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27498 === (4))){
var inst_27477 = (state_27497[(8)]);
var inst_27477__$1 = (state_27497[(2)]);
var inst_27478 = (inst_27477__$1 == null);
var inst_27479 = cljs.core.not.call(null,inst_27478);
var state_27497__$1 = (function (){var statearr_27502 = state_27497;
(statearr_27502[(8)] = inst_27477__$1);

return statearr_27502;
})();
if(inst_27479){
var statearr_27503_27523 = state_27497__$1;
(statearr_27503_27523[(1)] = (5));

} else {
var statearr_27504_27524 = state_27497__$1;
(statearr_27504_27524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27498 === (6))){
var state_27497__$1 = state_27497;
var statearr_27505_27525 = state_27497__$1;
(statearr_27505_27525[(2)] = null);

(statearr_27505_27525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27498 === (3))){
var inst_27494 = (state_27497[(2)]);
var inst_27495 = cljs.core.async.close_BANG_.call(null,out);
var state_27497__$1 = (function (){var statearr_27506 = state_27497;
(statearr_27506[(9)] = inst_27494);

return statearr_27506;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27497__$1,inst_27495);
} else {
if((state_val_27498 === (2))){
var state_27497__$1 = state_27497;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27497__$1,(4),ch);
} else {
if((state_val_27498 === (11))){
var inst_27477 = (state_27497[(8)]);
var inst_27486 = (state_27497[(2)]);
var inst_27474 = inst_27477;
var state_27497__$1 = (function (){var statearr_27507 = state_27497;
(statearr_27507[(7)] = inst_27474);

(statearr_27507[(10)] = inst_27486);

return statearr_27507;
})();
var statearr_27508_27526 = state_27497__$1;
(statearr_27508_27526[(2)] = null);

(statearr_27508_27526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27498 === (9))){
var inst_27477 = (state_27497[(8)]);
var state_27497__$1 = state_27497;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27497__$1,(11),out,inst_27477);
} else {
if((state_val_27498 === (5))){
var inst_27474 = (state_27497[(7)]);
var inst_27477 = (state_27497[(8)]);
var inst_27481 = cljs.core._EQ_.call(null,inst_27477,inst_27474);
var state_27497__$1 = state_27497;
if(inst_27481){
var statearr_27510_27527 = state_27497__$1;
(statearr_27510_27527[(1)] = (8));

} else {
var statearr_27511_27528 = state_27497__$1;
(statearr_27511_27528[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27498 === (10))){
var inst_27489 = (state_27497[(2)]);
var state_27497__$1 = state_27497;
var statearr_27512_27529 = state_27497__$1;
(statearr_27512_27529[(2)] = inst_27489);

(statearr_27512_27529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27498 === (8))){
var inst_27474 = (state_27497[(7)]);
var tmp27509 = inst_27474;
var inst_27474__$1 = tmp27509;
var state_27497__$1 = (function (){var statearr_27513 = state_27497;
(statearr_27513[(7)] = inst_27474__$1);

return statearr_27513;
})();
var statearr_27514_27530 = state_27497__$1;
(statearr_27514_27530[(2)] = null);

(statearr_27514_27530[(1)] = (2));


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
});})(c__25785__auto___27520,out))
;
return ((function (switch__25690__auto__,c__25785__auto___27520,out){
return (function() {
var cljs$core$async$state_machine__25691__auto__ = null;
var cljs$core$async$state_machine__25691__auto____0 = (function (){
var statearr_27515 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27515[(0)] = cljs$core$async$state_machine__25691__auto__);

(statearr_27515[(1)] = (1));

return statearr_27515;
});
var cljs$core$async$state_machine__25691__auto____1 = (function (state_27497){
while(true){
var ret_value__25692__auto__ = (function (){try{while(true){
var result__25693__auto__ = switch__25690__auto__.call(null,state_27497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25693__auto__;
}
break;
}
}catch (e27516){if((e27516 instanceof Object)){
var ex__25694__auto__ = e27516;
var statearr_27517_27531 = state_27497;
(statearr_27517_27531[(5)] = ex__25694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27516;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27532 = state_27497;
state_27497 = G__27532;
continue;
} else {
return ret_value__25692__auto__;
}
break;
}
});
cljs$core$async$state_machine__25691__auto__ = function(state_27497){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25691__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25691__auto____1.call(this,state_27497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25691__auto____0;
cljs$core$async$state_machine__25691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25691__auto____1;
return cljs$core$async$state_machine__25691__auto__;
})()
;})(switch__25690__auto__,c__25785__auto___27520,out))
})();
var state__25787__auto__ = (function (){var statearr_27518 = f__25786__auto__.call(null);
(statearr_27518[(6)] = c__25785__auto___27520);

return statearr_27518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25787__auto__);
});})(c__25785__auto___27520,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__27534 = arguments.length;
switch (G__27534) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25785__auto___27600 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25785__auto___27600,out){
return (function (){
var f__25786__auto__ = (function (){var switch__25690__auto__ = ((function (c__25785__auto___27600,out){
return (function (state_27572){
var state_val_27573 = (state_27572[(1)]);
if((state_val_27573 === (7))){
var inst_27568 = (state_27572[(2)]);
var state_27572__$1 = state_27572;
var statearr_27574_27601 = state_27572__$1;
(statearr_27574_27601[(2)] = inst_27568);

(statearr_27574_27601[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27573 === (1))){
var inst_27535 = (new Array(n));
var inst_27536 = inst_27535;
var inst_27537 = (0);
var state_27572__$1 = (function (){var statearr_27575 = state_27572;
(statearr_27575[(7)] = inst_27537);

(statearr_27575[(8)] = inst_27536);

return statearr_27575;
})();
var statearr_27576_27602 = state_27572__$1;
(statearr_27576_27602[(2)] = null);

(statearr_27576_27602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27573 === (4))){
var inst_27540 = (state_27572[(9)]);
var inst_27540__$1 = (state_27572[(2)]);
var inst_27541 = (inst_27540__$1 == null);
var inst_27542 = cljs.core.not.call(null,inst_27541);
var state_27572__$1 = (function (){var statearr_27577 = state_27572;
(statearr_27577[(9)] = inst_27540__$1);

return statearr_27577;
})();
if(inst_27542){
var statearr_27578_27603 = state_27572__$1;
(statearr_27578_27603[(1)] = (5));

} else {
var statearr_27579_27604 = state_27572__$1;
(statearr_27579_27604[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27573 === (15))){
var inst_27562 = (state_27572[(2)]);
var state_27572__$1 = state_27572;
var statearr_27580_27605 = state_27572__$1;
(statearr_27580_27605[(2)] = inst_27562);

(statearr_27580_27605[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27573 === (13))){
var state_27572__$1 = state_27572;
var statearr_27581_27606 = state_27572__$1;
(statearr_27581_27606[(2)] = null);

(statearr_27581_27606[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27573 === (6))){
var inst_27537 = (state_27572[(7)]);
var inst_27558 = (inst_27537 > (0));
var state_27572__$1 = state_27572;
if(cljs.core.truth_(inst_27558)){
var statearr_27582_27607 = state_27572__$1;
(statearr_27582_27607[(1)] = (12));

} else {
var statearr_27583_27608 = state_27572__$1;
(statearr_27583_27608[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27573 === (3))){
var inst_27570 = (state_27572[(2)]);
var state_27572__$1 = state_27572;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27572__$1,inst_27570);
} else {
if((state_val_27573 === (12))){
var inst_27536 = (state_27572[(8)]);
var inst_27560 = cljs.core.vec.call(null,inst_27536);
var state_27572__$1 = state_27572;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27572__$1,(15),out,inst_27560);
} else {
if((state_val_27573 === (2))){
var state_27572__$1 = state_27572;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27572__$1,(4),ch);
} else {
if((state_val_27573 === (11))){
var inst_27552 = (state_27572[(2)]);
var inst_27553 = (new Array(n));
var inst_27536 = inst_27553;
var inst_27537 = (0);
var state_27572__$1 = (function (){var statearr_27584 = state_27572;
(statearr_27584[(10)] = inst_27552);

(statearr_27584[(7)] = inst_27537);

(statearr_27584[(8)] = inst_27536);

return statearr_27584;
})();
var statearr_27585_27609 = state_27572__$1;
(statearr_27585_27609[(2)] = null);

(statearr_27585_27609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27573 === (9))){
var inst_27536 = (state_27572[(8)]);
var inst_27550 = cljs.core.vec.call(null,inst_27536);
var state_27572__$1 = state_27572;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27572__$1,(11),out,inst_27550);
} else {
if((state_val_27573 === (5))){
var inst_27540 = (state_27572[(9)]);
var inst_27537 = (state_27572[(7)]);
var inst_27545 = (state_27572[(11)]);
var inst_27536 = (state_27572[(8)]);
var inst_27544 = (inst_27536[inst_27537] = inst_27540);
var inst_27545__$1 = (inst_27537 + (1));
var inst_27546 = (inst_27545__$1 < n);
var state_27572__$1 = (function (){var statearr_27586 = state_27572;
(statearr_27586[(12)] = inst_27544);

(statearr_27586[(11)] = inst_27545__$1);

return statearr_27586;
})();
if(cljs.core.truth_(inst_27546)){
var statearr_27587_27610 = state_27572__$1;
(statearr_27587_27610[(1)] = (8));

} else {
var statearr_27588_27611 = state_27572__$1;
(statearr_27588_27611[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27573 === (14))){
var inst_27565 = (state_27572[(2)]);
var inst_27566 = cljs.core.async.close_BANG_.call(null,out);
var state_27572__$1 = (function (){var statearr_27590 = state_27572;
(statearr_27590[(13)] = inst_27565);

return statearr_27590;
})();
var statearr_27591_27612 = state_27572__$1;
(statearr_27591_27612[(2)] = inst_27566);

(statearr_27591_27612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27573 === (10))){
var inst_27556 = (state_27572[(2)]);
var state_27572__$1 = state_27572;
var statearr_27592_27613 = state_27572__$1;
(statearr_27592_27613[(2)] = inst_27556);

(statearr_27592_27613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27573 === (8))){
var inst_27545 = (state_27572[(11)]);
var inst_27536 = (state_27572[(8)]);
var tmp27589 = inst_27536;
var inst_27536__$1 = tmp27589;
var inst_27537 = inst_27545;
var state_27572__$1 = (function (){var statearr_27593 = state_27572;
(statearr_27593[(7)] = inst_27537);

(statearr_27593[(8)] = inst_27536__$1);

return statearr_27593;
})();
var statearr_27594_27614 = state_27572__$1;
(statearr_27594_27614[(2)] = null);

(statearr_27594_27614[(1)] = (2));


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
});})(c__25785__auto___27600,out))
;
return ((function (switch__25690__auto__,c__25785__auto___27600,out){
return (function() {
var cljs$core$async$state_machine__25691__auto__ = null;
var cljs$core$async$state_machine__25691__auto____0 = (function (){
var statearr_27595 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27595[(0)] = cljs$core$async$state_machine__25691__auto__);

(statearr_27595[(1)] = (1));

return statearr_27595;
});
var cljs$core$async$state_machine__25691__auto____1 = (function (state_27572){
while(true){
var ret_value__25692__auto__ = (function (){try{while(true){
var result__25693__auto__ = switch__25690__auto__.call(null,state_27572);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25693__auto__;
}
break;
}
}catch (e27596){if((e27596 instanceof Object)){
var ex__25694__auto__ = e27596;
var statearr_27597_27615 = state_27572;
(statearr_27597_27615[(5)] = ex__25694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27572);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27596;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27616 = state_27572;
state_27572 = G__27616;
continue;
} else {
return ret_value__25692__auto__;
}
break;
}
});
cljs$core$async$state_machine__25691__auto__ = function(state_27572){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25691__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25691__auto____1.call(this,state_27572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25691__auto____0;
cljs$core$async$state_machine__25691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25691__auto____1;
return cljs$core$async$state_machine__25691__auto__;
})()
;})(switch__25690__auto__,c__25785__auto___27600,out))
})();
var state__25787__auto__ = (function (){var statearr_27598 = f__25786__auto__.call(null);
(statearr_27598[(6)] = c__25785__auto___27600);

return statearr_27598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25787__auto__);
});})(c__25785__auto___27600,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__27618 = arguments.length;
switch (G__27618) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25785__auto___27688 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25785__auto___27688,out){
return (function (){
var f__25786__auto__ = (function (){var switch__25690__auto__ = ((function (c__25785__auto___27688,out){
return (function (state_27660){
var state_val_27661 = (state_27660[(1)]);
if((state_val_27661 === (7))){
var inst_27656 = (state_27660[(2)]);
var state_27660__$1 = state_27660;
var statearr_27662_27689 = state_27660__$1;
(statearr_27662_27689[(2)] = inst_27656);

(statearr_27662_27689[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27661 === (1))){
var inst_27619 = [];
var inst_27620 = inst_27619;
var inst_27621 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27660__$1 = (function (){var statearr_27663 = state_27660;
(statearr_27663[(7)] = inst_27620);

(statearr_27663[(8)] = inst_27621);

return statearr_27663;
})();
var statearr_27664_27690 = state_27660__$1;
(statearr_27664_27690[(2)] = null);

(statearr_27664_27690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27661 === (4))){
var inst_27624 = (state_27660[(9)]);
var inst_27624__$1 = (state_27660[(2)]);
var inst_27625 = (inst_27624__$1 == null);
var inst_27626 = cljs.core.not.call(null,inst_27625);
var state_27660__$1 = (function (){var statearr_27665 = state_27660;
(statearr_27665[(9)] = inst_27624__$1);

return statearr_27665;
})();
if(inst_27626){
var statearr_27666_27691 = state_27660__$1;
(statearr_27666_27691[(1)] = (5));

} else {
var statearr_27667_27692 = state_27660__$1;
(statearr_27667_27692[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27661 === (15))){
var inst_27650 = (state_27660[(2)]);
var state_27660__$1 = state_27660;
var statearr_27668_27693 = state_27660__$1;
(statearr_27668_27693[(2)] = inst_27650);

(statearr_27668_27693[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27661 === (13))){
var state_27660__$1 = state_27660;
var statearr_27669_27694 = state_27660__$1;
(statearr_27669_27694[(2)] = null);

(statearr_27669_27694[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27661 === (6))){
var inst_27620 = (state_27660[(7)]);
var inst_27645 = inst_27620.length;
var inst_27646 = (inst_27645 > (0));
var state_27660__$1 = state_27660;
if(cljs.core.truth_(inst_27646)){
var statearr_27670_27695 = state_27660__$1;
(statearr_27670_27695[(1)] = (12));

} else {
var statearr_27671_27696 = state_27660__$1;
(statearr_27671_27696[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27661 === (3))){
var inst_27658 = (state_27660[(2)]);
var state_27660__$1 = state_27660;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27660__$1,inst_27658);
} else {
if((state_val_27661 === (12))){
var inst_27620 = (state_27660[(7)]);
var inst_27648 = cljs.core.vec.call(null,inst_27620);
var state_27660__$1 = state_27660;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27660__$1,(15),out,inst_27648);
} else {
if((state_val_27661 === (2))){
var state_27660__$1 = state_27660;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27660__$1,(4),ch);
} else {
if((state_val_27661 === (11))){
var inst_27624 = (state_27660[(9)]);
var inst_27628 = (state_27660[(10)]);
var inst_27638 = (state_27660[(2)]);
var inst_27639 = [];
var inst_27640 = inst_27639.push(inst_27624);
var inst_27620 = inst_27639;
var inst_27621 = inst_27628;
var state_27660__$1 = (function (){var statearr_27672 = state_27660;
(statearr_27672[(11)] = inst_27640);

(statearr_27672[(7)] = inst_27620);

(statearr_27672[(8)] = inst_27621);

(statearr_27672[(12)] = inst_27638);

return statearr_27672;
})();
var statearr_27673_27697 = state_27660__$1;
(statearr_27673_27697[(2)] = null);

(statearr_27673_27697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27661 === (9))){
var inst_27620 = (state_27660[(7)]);
var inst_27636 = cljs.core.vec.call(null,inst_27620);
var state_27660__$1 = state_27660;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27660__$1,(11),out,inst_27636);
} else {
if((state_val_27661 === (5))){
var inst_27624 = (state_27660[(9)]);
var inst_27628 = (state_27660[(10)]);
var inst_27621 = (state_27660[(8)]);
var inst_27628__$1 = f.call(null,inst_27624);
var inst_27629 = cljs.core._EQ_.call(null,inst_27628__$1,inst_27621);
var inst_27630 = cljs.core.keyword_identical_QMARK_.call(null,inst_27621,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27631 = ((inst_27629) || (inst_27630));
var state_27660__$1 = (function (){var statearr_27674 = state_27660;
(statearr_27674[(10)] = inst_27628__$1);

return statearr_27674;
})();
if(cljs.core.truth_(inst_27631)){
var statearr_27675_27698 = state_27660__$1;
(statearr_27675_27698[(1)] = (8));

} else {
var statearr_27676_27699 = state_27660__$1;
(statearr_27676_27699[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27661 === (14))){
var inst_27653 = (state_27660[(2)]);
var inst_27654 = cljs.core.async.close_BANG_.call(null,out);
var state_27660__$1 = (function (){var statearr_27678 = state_27660;
(statearr_27678[(13)] = inst_27653);

return statearr_27678;
})();
var statearr_27679_27700 = state_27660__$1;
(statearr_27679_27700[(2)] = inst_27654);

(statearr_27679_27700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27661 === (10))){
var inst_27643 = (state_27660[(2)]);
var state_27660__$1 = state_27660;
var statearr_27680_27701 = state_27660__$1;
(statearr_27680_27701[(2)] = inst_27643);

(statearr_27680_27701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27661 === (8))){
var inst_27624 = (state_27660[(9)]);
var inst_27628 = (state_27660[(10)]);
var inst_27620 = (state_27660[(7)]);
var inst_27633 = inst_27620.push(inst_27624);
var tmp27677 = inst_27620;
var inst_27620__$1 = tmp27677;
var inst_27621 = inst_27628;
var state_27660__$1 = (function (){var statearr_27681 = state_27660;
(statearr_27681[(14)] = inst_27633);

(statearr_27681[(7)] = inst_27620__$1);

(statearr_27681[(8)] = inst_27621);

return statearr_27681;
})();
var statearr_27682_27702 = state_27660__$1;
(statearr_27682_27702[(2)] = null);

(statearr_27682_27702[(1)] = (2));


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
});})(c__25785__auto___27688,out))
;
return ((function (switch__25690__auto__,c__25785__auto___27688,out){
return (function() {
var cljs$core$async$state_machine__25691__auto__ = null;
var cljs$core$async$state_machine__25691__auto____0 = (function (){
var statearr_27683 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27683[(0)] = cljs$core$async$state_machine__25691__auto__);

(statearr_27683[(1)] = (1));

return statearr_27683;
});
var cljs$core$async$state_machine__25691__auto____1 = (function (state_27660){
while(true){
var ret_value__25692__auto__ = (function (){try{while(true){
var result__25693__auto__ = switch__25690__auto__.call(null,state_27660);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25693__auto__;
}
break;
}
}catch (e27684){if((e27684 instanceof Object)){
var ex__25694__auto__ = e27684;
var statearr_27685_27703 = state_27660;
(statearr_27685_27703[(5)] = ex__25694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27684;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27704 = state_27660;
state_27660 = G__27704;
continue;
} else {
return ret_value__25692__auto__;
}
break;
}
});
cljs$core$async$state_machine__25691__auto__ = function(state_27660){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25691__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25691__auto____1.call(this,state_27660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25691__auto____0;
cljs$core$async$state_machine__25691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25691__auto____1;
return cljs$core$async$state_machine__25691__auto__;
})()
;})(switch__25690__auto__,c__25785__auto___27688,out))
})();
var state__25787__auto__ = (function (){var statearr_27686 = f__25786__auto__.call(null);
(statearr_27686[(6)] = c__25785__auto___27688);

return statearr_27686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25787__auto__);
});})(c__25785__auto___27688,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1562604885216
