goog.provide('slovarish.frontend.app');
if((typeof slovarish !== 'undefined') && (typeof slovarish.frontend !== 'undefined') && (typeof slovarish.frontend.app !== 'undefined') && (typeof slovarish.frontend.app.num_batches !== 'undefined')){
} else {
slovarish.frontend.app.num_batches = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nouns","nouns",-314252558),(15),new cljs.core.Keyword(null,"verbs","verbs",-1655382772),(10),new cljs.core.Keyword(null,"adjectives","adjectives",1201932072),(8)], null);
}
if((typeof slovarish !== 'undefined') && (typeof slovarish.frontend !== 'undefined') && (typeof slovarish.frontend.app !== 'undefined') && (typeof slovarish.frontend.app.batches_loaded !== 'undefined')){
} else {
slovarish.frontend.app.batches_loaded = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Pull hashbang route from URL and navigate to target word.
 */
slovarish.frontend.app.route = (function slovarish$frontend$app$route(var_args){
var args__4870__auto__ = [];
var len__4864__auto___31376 = arguments.length;
var i__4865__auto___31377 = (0);
while(true){
if((i__4865__auto___31377 < len__4864__auto___31376)){
args__4870__auto__.push((arguments[i__4865__auto___31377]));

var G__31378 = (i__4865__auto___31377 + (1));
i__4865__auto___31377 = G__31378;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return slovarish.frontend.app.route.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(slovarish.frontend.app.route.cljs$core$IFn$_invoke$arity$variadic = (function (p__31294){
var map__31296 = p__31294;
var map__31296__$1 = cljs.core.__destructure_map(map__31296);
var push_state_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31296__$1,new cljs.core.Keyword(null,"push-state?","push-state?",-1915122392),true);
var hash = window.location.hash;
var vec__31297 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(hash,(2)),/\//);
var target_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31297,(0),null);
var raw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31297,(1),null);
var sense = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31297,(2),null);
var word = window.decodeURI(raw);
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.re_find(/^[ЁёА-я]+$/,word);
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(word,cljs.core.deref(slovarish.frontend.state.input))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((sense - (1)),cljs.core.deref(slovarish.frontend.state.which_result_QMARK_))));
} else {
return and__4251__auto__;
}
})())){
cljs.core.reset_BANG_(slovarish.frontend.state.pos,(function (){var fexpr__31304 = new cljs.core.PersistentArrayMap(null, 3, ["n",new cljs.core.Keyword(null,"noun","noun",185846460),"v",new cljs.core.Keyword(null,"verb","verb",-1492655803),"a",new cljs.core.Keyword(null,"adjective","adjective",441465450)], null);
return (fexpr__31304.cljs$core$IFn$_invoke$arity$1 ? fexpr__31304.cljs$core$IFn$_invoke$arity$1(target_pos) : fexpr__31304.call(null,target_pos));
})());

slovarish.frontend.navigation.go_to_word.cljs$core$IFn$_invoke$arity$variadic(word,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"push-state?","push-state?",-1915122392),push_state_QMARK_], 0));

return cljs.core.reset_BANG_(slovarish.frontend.state.which_result_QMARK_,(function (){var or__4253__auto__ = (function (){var G__31305 = sense;
if((G__31305 == null)){
return null;
} else {
return (G__31305 - (1));
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})());
} else {
return null;
}
}));

(slovarish.frontend.app.route.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(slovarish.frontend.app.route.cljs$lang$applyTo = (function (seq31293){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31293));
}));

slovarish.frontend.app.load_mask = (function slovarish$frontend$app$load_mask(){
if((cljs.core.deref(slovarish.frontend.app.batches_loaded) < cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(slovarish.frontend.app.num_batches)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#mask","div#mask",-1851106387),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.italic.sans","p.italic.sans",1935502801),"Your comrade-in-words as a learner of the Russian language"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"slovarish / \u0441\u043B\u043E\u0432\u0430\u0440\u0438\u0449"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.italic.sans","p.italic.sans",1935502801),"\u0421\u043B\u043E\u0432\u0430\u0440\u044C, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0442\u0430\u043A\u0436\u0435 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0432\u0430\u0448\u0438\u043C \u0442\u043E\u0432\u0430\u0440\u0438\u0449\u0435\u043C \u0432 \u0438\u0437\u0443\u0447\u0435\u043D\u0438\u0438 \u0440\u0443\u0441\u0441\u043A\u043E\u0433\u043E \u044F\u0437\u044B\u043A\u0430"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.italic","p.italic",60958886),"Loading..."], null),(cljs.core.truth_(cljs.core.re_find(/Chrome|OPR|Yandex/,navigator.userAgent))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.italic","p.italic",60958886),"For faster loading, please use Chrome, Opera, or Yandex Browser."], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max","max",61366548),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(slovarish.frontend.app.num_batches)),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(slovarish.frontend.app.batches_loaded)], null)], null)], null)], null);
} else {
return null;
}
});
slovarish.frontend.app.load_edn = (function slovarish$frontend$app$load_edn(pos,batch){
if((batch > (function (){var G__31311 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pos);
return (slovarish.frontend.app.num_batches.cljs$core$IFn$_invoke$arity$1 ? slovarish.frontend.app.num_batches.cljs$core$IFn$_invoke$arity$1(G__31311) : slovarish.frontend.app.num_batches.call(null,G__31311));
})())){
var G__31312 = pos;
switch (G__31312) {
case "nouns":
cljs.core.reset_BANG_(slovarish.frontend.data.top_2k_words,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__31313){
var vec__31314 = p__31313;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31314,(0),null);
var entries = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31314,(1),null);
return cljs.core.some((function (p1__31308_SHARP_){
return (new cljs.core.Keyword(null,"rank","rank",-1706728502).cljs$core$IFn$_invoke$arity$1(p1__31308_SHARP_) <= (2000));
}),entries);
}),cljs.core.deref(slovarish.frontend.data.all_nouns)));

return slovarish.frontend.app.route();

break;
default:
return null;

}
} else {
var batch_no = (((batch < (10)))?["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(batch)].join(''):cljs.core.str.cljs$core$IFn$_invoke$arity$1(batch));
return fetch(["edn/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pos),batch_no,".edn"].join('')).then((function (p1__31309_SHARP_){
return p1__31309_SHARP_.text();
})).then((function (p1__31310_SHARP_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3((function (){var G__31318 = pos;
switch (G__31318) {
case "nouns":
return slovarish.frontend.data.all_nouns;

break;
case "verbs":
return slovarish.frontend.data.all_verbs;

break;
case "adjectives":
return slovarish.frontend.data.all_adjectives;

break;
default:
return null;

}
})(),cljs.core.merge,cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(p1__31310_SHARP_));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(slovarish.frontend.app.batches_loaded,cljs.core.inc);

var G__31320 = pos;
var G__31321 = (batch + (1));
return (slovarish.frontend.app.load_edn.cljs$core$IFn$_invoke$arity$2 ? slovarish.frontend.app.load_edn.cljs$core$IFn$_invoke$arity$2(G__31320,G__31321) : slovarish.frontend.app.load_edn.call(null,G__31320,G__31321));
}));
}
});
slovarish.frontend.app.russian_poses = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"noun","noun",185846460),"\u0441\u0443\u0449.",new cljs.core.Keyword(null,"verb","verb",-1492655803),"\u0433\u043B\u0430\u0433\u043E\u043B",new cljs.core.Keyword(null,"adjective","adjective",441465450),"\u043F\u0440\u0438\u043B."], null);
slovarish.frontend.app.pos_button = (function slovarish$frontend$app$pos_button(which_pos){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.word-button","a.word-button",1642105003),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(slovarish.frontend.state.pos),which_pos))?"current":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var word_input = document.getElementById("word-input");
slovarish.frontend.navigation.go_to_word.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(slovarish.frontend.state.input),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"target-pos","target-pos",1907947494),which_pos], 0));

if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"verified?","verified?",863527758).cljs$core$IFn$_invoke$arity$1(slovarish.frontend.state.result);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = slovarish.frontend.state.result();
if(cljs.core.truth_(and__4251__auto__)){
var G__31323 = cljs.core.deref(slovarish.frontend.state.pos);
var fexpr__31322 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"verb","verb",-1492655803),null,new cljs.core.Keyword(null,"adjective","adjective",441465450),null], null), null);
return (fexpr__31322.cljs$core$IFn$_invoke$arity$1 ? fexpr__31322.cljs$core$IFn$_invoke$arity$1(G__31323) : fexpr__31322.call(null,G__31323));
} else {
return and__4251__auto__;
}
}
})())){
return word_input.blur();
} else {
return word_input.focus();
}
})], null),(function (){var G__31325 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__31325__$1 = (((G__31325 instanceof cljs.core.Keyword))?G__31325.fqn:null);
switch (G__31325__$1) {
case "english":
return cljs.core.name(which_pos);

break;
case "russian":
return (slovarish.frontend.app.russian_poses.cljs$core$IFn$_invoke$arity$1 ? slovarish.frontend.app.russian_poses.cljs$core$IFn$_invoke$arity$1(which_pos) : slovarish.frontend.app.russian_poses.call(null,which_pos));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31325__$1)].join('')));

}
})()], null);
});
slovarish.frontend.app.paypal_donate_button = (function slovarish$frontend$app$paypal_donate_button(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#donate-button","div#donate-button",698814135),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),"https://www.paypal.com/donate",new cljs.core.Keyword(null,"method","method",55703592),"post",new cljs.core.Keyword(null,"target","target",253001721),"_top"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"hidden",new cljs.core.Keyword(null,"name","name",1843675177),"business",new cljs.core.Keyword(null,"value","value",305978217),"633R23JJCLDF2"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"hidden",new cljs.core.Keyword(null,"name","name",1843675177),"no_recurring",new cljs.core.Keyword(null,"value","value",305978217),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"hidden",new cljs.core.Keyword(null,"name","name",1843675177),"item_name",new cljs.core.Keyword(null,"value","value",305978217),"If you find this app useful, consider contributing to my coffee fund %3A%29"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"hidden",new cljs.core.Keyword(null,"name","name",1843675177),"currency_code",new cljs.core.Keyword(null,"value","value",305978217),"USD"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"image",new cljs.core.Keyword(null,"src","src",-1651076051),"https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif",new cljs.core.Keyword(null,"border","border",1444987323),"0",new cljs.core.Keyword(null,"name","name",1843675177),"submit",new cljs.core.Keyword(null,"title","title",636505583),"PayPal - The safer, easier way to pay online!",new cljs.core.Keyword(null,"alt","alt",-3214426),"Donate with PayPal button"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"alt","alt",-3214426),"",new cljs.core.Keyword(null,"border","border",1444987323),"0",new cljs.core.Keyword(null,"src","src",-1651076051),"https://www.paypal.com/en_US/i/scr/pixel.gif",new cljs.core.Keyword(null,"width","width",-384071477),"1",new cljs.core.Keyword(null,"height","height",1025178622),"1"], null)], null)], null)], null);
});
slovarish.frontend.app.header = (function slovarish$frontend$app$header(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#header.flex","div#header.flex",-1397866935),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.toggle-container.flex.row","div.toggle-container.flex.row",1597481623),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.option","span.option",-1087496857),"\u0440\u0443"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.toggle","label.toggle",-1299806904),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"language"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"read-only","read-only",-191706886),true,new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(slovarish.frontend.state.display_language),new cljs.core.Keyword(null,"english","english",1087501909)),new cljs.core.Keyword(null,"name","name",1843675177),"language"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.slider","span.slider",-2086261021),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Change language \u2022 \u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u044F\u0437\u044B\u043A \u0441\u0430\u0439\u0442\u0430",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(slovarish.frontend.state.display_language,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(slovarish.frontend.state.display_language),new cljs.core.Keyword(null,"english","english",1087501909)))?new cljs.core.Keyword(null,"russian","russian",1887936458):new cljs.core.Keyword(null,"english","english",1087501909)));
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.option","span.option",-1087496857),"en"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#pos-buttons","div#pos-buttons",7096661),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.app.pos_button,new cljs.core.Keyword(null,"noun","noun",185846460)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.app.pos_button,new cljs.core.Keyword(null,"verb","verb",-1492655803)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.app.pos_button,new cljs.core.Keyword(null,"adjective","adjective",441465450)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.word-button.credits","a.word-button.credits",-147730510),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
goog.dom.classlist.toggle(document.getElementById("credits"),"visible");

return goog.dom.classlist.toggle(e.target,"current");
})], null),"\u00A9"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.toggle-container.flex.row","div.toggle-container.flex.row",1597481623),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.option","span.option",-1087496857),"a"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.toggle","label.toggle",-1299806904),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"stress-marks"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"read-only","read-only",-191706886),true,new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.deref(slovarish.frontend.state.show_stress_QMARK_),new cljs.core.Keyword(null,"name","name",1843675177),"stress-marks"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.slider","span.slider",-2086261021),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Show/hide stress marks \u2022 \u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C/\u0441\u0440\u043A\u044B\u0442\u044C \u0437\u043D\u0430\u043A\u0438 \u0443\u0434\u0430\u0440\u0435\u043D\u0438\u044F",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(slovarish.frontend.state.show_stress_QMARK_,(cljs.core.truth_(cljs.core.deref(slovarish.frontend.state.show_stress_QMARK_))?false:true));
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.option","span.option",-1087496857),"\u00E1"], null)], null)], null);
});
slovarish.frontend.app.word_input = (function slovarish$frontend$app$word_input(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#word-input-wrapper","div#word-input-wrapper",940770490),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (e){
return e.preventDefault();
}),new cljs.core.Keyword(null,"spell-check","spell-check",-2060352968),"off",new cljs.core.Keyword(null,"auto-capitalize","auto-capitalize",352725029),"off",new cljs.core.Keyword(null,"auto-correct","auto-correct",555552927),"off",new cljs.core.Keyword(null,"auto-complete","auto-complete",244958848),"off"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#word-input","input#word-input",182703191),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),(function (){var G__31329 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__31329__$1 = (((G__31329 instanceof cljs.core.Keyword))?G__31329.fqn:null);
switch (G__31329__$1) {
case "english":
return "enter a word";

break;
case "russian":
return "\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043B\u043E\u0432\u043E";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31329__$1)].join('')));

}
})(),new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var G__31332 = cljs.core.deref(slovarish.frontend.state.pos);
var G__31332__$1 = (((G__31332 instanceof cljs.core.Keyword))?G__31332.fqn:null);
switch (G__31332__$1) {
case "noun":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(new cljs.core.Keyword(null,"verified?","verified?",863527758).cljs$core$IFn$_invoke$arity$1(slovarish.frontend.state.result()))?null:"light"),(function (){var or__4253__auto__ = (function (){var G__31333 = slovarish.frontend.state.result();
var G__31333__$1 = (((G__31333 == null))?null:new cljs.core.Keyword(null,"gender","gender",-733930727).cljs$core$IFn$_invoke$arity$1(G__31333));
if((G__31333__$1 == null)){
return null;
} else {
return cljs.core.name(G__31333__$1);
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "default";
}
})()], null);

break;
case "verb":
if(cljs.core.seq_QMARK_(cljs.core.deref(slovarish.frontend.state.results))){
var G__31336 = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"definiteness","definiteness",-1907614985).cljs$core$IFn$_invoke$arity$1(slovarish.frontend.state.result());
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"aspect","aspect",-839905246).cljs$core$IFn$_invoke$arity$1(slovarish.frontend.state.result());
}
})();
var fexpr__31335 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"definite","definite",1037141320),"imperfective",new cljs.core.Keyword(null,"indefinite","indefinite",-1961185434),"indefinite",new cljs.core.Keyword(null,"pf","pf",1255760069),"perfective",new cljs.core.Keyword(null,"impf","impf",-1164864294),"imperfective",new cljs.core.Keyword(null,"bias","bias",-315297926),"biaspectual"], null);
return (fexpr__31335.cljs$core$IFn$_invoke$arity$1 ? fexpr__31335.cljs$core$IFn$_invoke$arity$1(G__31336) : fexpr__31335.call(null,G__31336));
} else {
return "default";
}

break;
default:
return "default";

}
})(),new cljs.core.Keyword(null,"value","value",305978217),(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(slovarish.frontend.state.pos),new cljs.core.Keyword(null,"noun","noun",185846460));
if(and__4251__auto__){
var G__31339 = slovarish.frontend.state.result();
if((G__31339 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"verified?","verified?",863527758).cljs$core$IFn$_invoke$arity$1(G__31339);
}
} else {
return and__4251__auto__;
}
})())?(function (){var or__4253__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(slovarish.frontend.state.result(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"nominative","nominative",148321668),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"text","text",-1790561697)], null));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(slovarish.frontend.state.result(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"nominative","nominative",148321668),new cljs.core.Keyword(null,"plural","plural",-881591021),new cljs.core.Keyword(null,"text","text",-1790561697)], null));
}
})():clojure.string.lower_case(cljs.core.deref(slovarish.frontend.state.input))),new cljs.core.Keyword(null,"on-keyDown","on-keyDown",893393487),(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.code,"Space")){
return e.preventDefault();
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var word = clojure.string.trim(e.target.value);
if(cljs.core.truth_(cljs.core.re_find(/^[ЁёА-я]*$/,word))){
return slovarish.frontend.navigation.go_to_word(word);
} else {
return alert((function (){var G__31342 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__31342__$1 = (((G__31342 instanceof cljs.core.Keyword))?G__31342.fqn:null);
switch (G__31342__$1) {
case "english":
return "This app only accepts Russian words as input. Please switch your keyboard to Russian and try again.";

break;
case "russian":
return "\u042D\u0442\u043E \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u0440\u0443\u0441\u0441\u043A\u0438\u0435 \u0441\u043B\u043E\u0432\u0430 \u043A\u0430\u043A \u0432\u0445\u043E\u0434. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u0435 \u044F\u0437\u044B\u043A \u043A\u043B\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u044B \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u0438\u0439 \u0438 \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u043E\u043F\u044B\u0442\u043A\u0443.";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31342__$1)].join('')));

}
})());
}
})], null)], null)], null),(((cljs.core.count(cljs.core.deref(slovarish.frontend.state.results)) >= (2)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#senses","div#senses",-1428700432),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function slovarish$frontend$app$word_input_$_iter__31343(s__31344){
return (new cljs.core.LazySeq(null,(function (){
var s__31344__$1 = s__31344;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__31344__$1);
if(temp__5753__auto__){
var s__31344__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31344__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__31344__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__31346 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__31345 = (0);
while(true){
if((i__31345 < size__4651__auto__)){
var raw_index = cljs.core._nth(c__4650__auto__,i__31345);
var i = (raw_index + (1));
cljs.core.chunk_append(b__31346,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(slovarish.frontend.state.which_result_QMARK_),raw_index))?cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sense.current","div.sense.current",1137612003),i], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["sense-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null)):cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.sense","a.sense",1028938672),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__31345,i,raw_index,c__4650__auto__,size__4651__auto__,b__31346,s__31344__$2,temp__5753__auto__){
return (function (e){
e.preventDefault();

var target = e.target.innerHTML;
cljs.core.reset_BANG_(slovarish.frontend.state.which_result_QMARK_,(target - (1)));

return slovarish.frontend.navigation.push_state();
});})(i__31345,i,raw_index,c__4650__auto__,size__4651__auto__,b__31346,s__31344__$2,temp__5753__auto__))
], null),i], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["sense-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null))));

var G__31385 = (i__31345 + (1));
i__31345 = G__31385;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31346),slovarish$frontend$app$word_input_$_iter__31343(cljs.core.chunk_rest(s__31344__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31346),null);
}
} else {
var raw_index = cljs.core.first(s__31344__$2);
var i = (raw_index + (1));
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(slovarish.frontend.state.which_result_QMARK_),raw_index))?cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sense.current","div.sense.current",1137612003),i], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["sense-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null)):cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.sense","a.sense",1028938672),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i,raw_index,s__31344__$2,temp__5753__auto__){
return (function (e){
e.preventDefault();

var target = e.target.innerHTML;
cljs.core.reset_BANG_(slovarish.frontend.state.which_result_QMARK_,(target - (1)));

return slovarish.frontend.navigation.push_state();
});})(i,raw_index,s__31344__$2,temp__5753__auto__))
], null),i], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["sense-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null))),slovarish$frontend$app$word_input_$_iter__31343(cljs.core.rest(s__31344__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(slovarish.frontend.state.results))));
})())], null):null),(cljs.core.truth_(slovarish.frontend.state.result())?(function (){var G__31347 = cljs.core.deref(slovarish.frontend.state.pos);
var G__31347__$1 = (((G__31347 instanceof cljs.core.Keyword))?G__31347.fqn:null);
switch (G__31347__$1) {
case "verb":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.verb-view-toggle-menu","div.verb-view-toggle-menu",1467913183),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"verb-view-toggle",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(slovarish.frontend.state.which_verb_forms_QMARK_),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (e){
return cljs.core.reset_BANG_(slovarish.frontend.state.which_verb_forms_QMARK_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(e.target.value));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),true], null),(function (){var G__31348 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__31348__$1 = (((G__31348 instanceof cljs.core.Keyword))?G__31348.fqn:null);
switch (G__31348__$1) {
case "english":
return "main forms";

break;
case "russian":
return "\u0433\u043B\u0430\u0432\u043D\u044B\u0435 \u0444\u043E\u0440\u043C\u044B";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31348__$1)].join('')));

}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"participles","participles",-575696638)], null),(function (){var G__31349 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__31349__$1 = (((G__31349 instanceof cljs.core.Keyword))?G__31349.fqn:null);
switch (G__31349__$1) {
case "english":
return "participles";

break;
case "russian":
return "\u043F\u0440\u0438\u0447\u0430\u0441\u0442\u0438\u044F";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31349__$1)].join('')));

}
})()], null)], null)], null);

break;
case "noun":
var gender = new cljs.core.Keyword(null,"gender","gender",-733930727).cljs$core$IFn$_invoke$arity$1(slovarish.frontend.state.result());
var gender_name = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(gender,new cljs.core.Keyword(null,"common","common",-1822281391)))?"common-gender":cljs.core.name(gender));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.icons.flex.column","div.icons.flex.column",1378587515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.icon.gender","div.icon.gender",-1011969728),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),(cljs.core.truth_(new cljs.core.Keyword(null,"verified?","verified?",863527758).cljs$core$IFn$_invoke$arity$1(slovarish.frontend.state.result()))?["This is a ",gender_name," noun."].join(''):["Based on the ending, this noun is highly likely to be a ",gender_name," noun."].join('')),new cljs.core.Keyword(null,"class","class",-2030961996),gender], null),(function (){var G__31350 = gender;
var G__31350__$1 = (((G__31350 instanceof cljs.core.Keyword))?G__31350.fqn:null);
switch (G__31350__$1) {
case "masculine":
return "\u2640";

break;
case "feminine":
return "\u2642";

break;
case "neuter":
return "\u26B2";

break;
case "common":
return "\u26A5";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31350__$1)].join('')));

}
})()], null),(cljs.core.truth_(new cljs.core.Keyword(null,"animate","animate",1850194573).cljs$core$IFn$_invoke$arity$1(slovarish.frontend.state.result()))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.icon.animacy","div.icon.animacy",1929906971),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),["This is an animate ",cljs.core.name(gender)," noun."].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),gender], null),(function (){var G__31351 = gender;
var G__31351__$1 = (((G__31351 instanceof cljs.core.Keyword))?G__31351.fqn:null);
switch (G__31351__$1) {
case "masculine":
return "\uD83D\uDC68";

break;
case "feminine":
return "\uD83D\uDC69";

break;
case "neuter":
return "\uD83D\uDC7D";

break;
case "common":
return "\uD83D\uDC6B";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31351__$1)].join('')));

}
})()], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.icon.animacy","div.icon.animacy",1929906971),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),(cljs.core.truth_(new cljs.core.Keyword(null,"verified?","verified?",863527758).cljs$core$IFn$_invoke$arity$1(slovarish.frontend.state.result()))?"This is an inanimate noun.":"Nouns not found in the Slovarish dictionary are assumed to be inanimate."),new cljs.core.Keyword(null,"class","class",-2030961996),gender], null),"\uD83E\uDD16"], null)),(cljs.core.truth_(new cljs.core.Keyword(null,"verified?","verified?",863527758).cljs$core$IFn$_invoke$arity$1(slovarish.frontend.state.result()))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.icon","div.icon",1302290135),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),gender,new cljs.core.Keyword(null,"title","title",636505583),"This noun was found in the Slovarish dictionary."], null),"\u2714\uFE0F"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.icon","div.icon",1302290135),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),gender,new cljs.core.Keyword(null,"title","title",636505583),["This noun was not found in the Slovarish dictionary. ","Results may contain inaccuracies."].join('')], null),"\u2753"], null))], null);

break;
default:
return null;

}
})():null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.gloss.render_glosses,slovarish.frontend.state.result(),(function (){var G__31352 = cljs.core.deref(slovarish.frontend.state.pos);
var G__31352__$1 = (((G__31352 instanceof cljs.core.Keyword))?G__31352.fqn:null);
switch (G__31352__$1) {
case "noun":
return new cljs.core.Keyword(null,"gender","gender",-733930727).cljs$core$IFn$_invoke$arity$1(slovarish.frontend.state.result());

break;
case "verb":
var G__31354 = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"definiteness","definiteness",-1907614985).cljs$core$IFn$_invoke$arity$1(slovarish.frontend.state.result());
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"aspect","aspect",-839905246).cljs$core$IFn$_invoke$arity$1(slovarish.frontend.state.result());
}
})();
var fexpr__31353 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"indefinite","indefinite",-1961185434),"indefinite",new cljs.core.Keyword(null,"definite","definite",1037141320),"imperfective",new cljs.core.Keyword(null,"pf","pf",1255760069),"perfective",new cljs.core.Keyword(null,"impf","impf",-1164864294),"imperfective",new cljs.core.Keyword(null,"bias","bias",-315297926),"biaspectual"], null);
return (fexpr__31353.cljs$core$IFn$_invoke$arity$1 ? fexpr__31353.cljs$core$IFn$_invoke$arity$1(G__31354) : fexpr__31353.call(null,G__31354));

break;
default:
return "default";

}
})()], null)], null);
});
slovarish.frontend.app.suggestions = (function slovarish$frontend$app$suggestions(){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(slovarish.frontend.state.pos),new cljs.core.Keyword(null,"noun","noun",185846460))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.deref(slovarish.frontend.state.input)),(2))))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#suggestions","div#suggestions",-2009430776)], null);
} else {
if((cljs.core.count(cljs.core.deref(slovarish.frontend.state.input)) < (3))){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p#get-started","p#get-started",-1735449166),(function (){var G__31356 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__31356__$1 = (((G__31356 instanceof cljs.core.Keyword))?G__31356.fqn:null);
switch (G__31356__$1) {
case "english":
return "Simply choose a part of speech and type a word in the field above to get started, or ";

break;
case "russian":
return "\u041F\u0440\u043E\u0441\u0442\u043E \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0447\u0430\u0441\u0442\u044C \u0440\u0435\u0447\u0438 \u0438 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043B\u043E\u0432\u043E \u0432 \u043F\u043E\u043B\u0435 \u043D\u0430\u0432\u0435\u0440\u0445\u0443, \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u0447\u0430\u0442\u044C, \u0438\u043B\u0438 ";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31356__$1)].join('')));

}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.press-enter-instruction","span.press-enter-instruction",26237171),(function (){var G__31357 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__31357__$1 = (((G__31357 instanceof cljs.core.Keyword))?G__31357.fqn:null);
switch (G__31357__$1) {
case "english":
return "press Enter ";

break;
case "russian":
return "\u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u0412\u0432\u043E\u0434, ";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31357__$1)].join('')));

}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.random-word-button-instruction","span.random-word-button-instruction",1588569131),(function (){var G__31358 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__31358__$1 = (((G__31358 instanceof cljs.core.Keyword))?G__31358.fqn:null);
switch (G__31358__$1) {
case "english":
return "tap the \uD83C\uDFB2 icon ";

break;
case "russian":
return "\u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u0438\u043A\u043E\u043D\u0443 \uD83C\uDFB2, ";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31358__$1)].join('')));

}
})()], null),(function (){var G__31359 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__31359__$1 = (((G__31359 instanceof cljs.core.Keyword))?G__31359.fqn:null);
switch (G__31359__$1) {
case "english":
return "to look up a random word.";

break;
case "russian":
return "\u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0441\u043B\u0443\u0447\u0430\u0439\u043D\u043E\u0435 \u0441\u043B\u043E\u0432\u043E.";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31359__$1)].join('')));

}
})()], null);
} else {
var source = (function (){var G__31360 = cljs.core.deref(slovarish.frontend.state.pos);
var G__31360__$1 = (((G__31360 instanceof cljs.core.Keyword))?G__31360.fqn:null);
switch (G__31360__$1) {
case "noun":
return cljs.core.deref(slovarish.frontend.data.all_nouns);

break;
case "verb":
return cljs.core.deref(slovarish.frontend.data.all_verbs);

break;
case "adjective":
return cljs.core.deref(slovarish.frontend.data.all_adjectives);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31360__$1)].join('')));

}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#suggestions.word-buttons","div#suggestions.word-buttons",1062115458),(function (){var temp__5757__auto__ = cljs.core.not_empty(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.count,cljs.core._LT_,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(slovarish.frontend.state.input)),"\u0441\u044F"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(slovarish.frontend.state.input)),"\u0441\u044C"].join(''),cljs.core.deref(slovarish.frontend.state.input)]),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__31355_SHARP_){
return clojure.string.starts_with_QMARK_(p1__31355_SHARP_,clojure.string.lower_case(cljs.core.deref(slovarish.frontend.state.input)));
}),cljs.core.keys(source)))));
if((temp__5757__auto__ == null)){
return null;
} else {
var predictions = temp__5757__auto__;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.italic.serif","span.italic.serif",-720224961),(function (){var G__31361 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__31361__$1 = (((G__31361 instanceof cljs.core.Keyword))?G__31361.fqn:null);
switch (G__31361__$1) {
case "english":
return "You might be looking for:\u00A0";

break;
case "russian":
return "\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u0432\u044B \u0438\u0449\u0435\u0442\u0435:\u00A0";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31361__$1)].join('')));

}
})()], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function slovarish$frontend$app$suggestions_$_iter__31362(s__31363){
return (new cljs.core.LazySeq(null,(function (){
var s__31363__$1 = s__31363;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__31363__$1);
if(temp__5753__auto__){
var s__31363__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31363__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__31363__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__31365 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__31364 = (0);
while(true){
if((i__31364 < size__4651__auto__)){
var word = cljs.core._nth(c__4650__auto__,i__31364);
cljs.core.chunk_append(b__31365,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.word-button","a.word-button",1642105003),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__31364,word,c__4650__auto__,size__4651__auto__,b__31365,s__31363__$2,temp__5753__auto__,predictions,temp__5757__auto__,source){
return (function (e){
e.preventDefault();

var word__$1 = e.target.innerHTML;
return slovarish.frontend.navigation.go_to_word(word__$1);
});})(i__31364,word,c__4650__auto__,size__4651__auto__,b__31365,s__31363__$2,temp__5753__auto__,predictions,temp__5757__auto__,source))
], null),word], null)," "], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["autosuggest-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(word)].join('')], null)));

var G__31398 = (i__31364 + (1));
i__31364 = G__31398;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31365),slovarish$frontend$app$suggestions_$_iter__31362(cljs.core.chunk_rest(s__31363__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31365),null);
}
} else {
var word = cljs.core.first(s__31363__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.word-button","a.word-button",1642105003),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (word,s__31363__$2,temp__5753__auto__,predictions,temp__5757__auto__,source){
return (function (e){
e.preventDefault();

var word__$1 = e.target.innerHTML;
return slovarish.frontend.navigation.go_to_word(word__$1);
});})(word,s__31363__$2,temp__5753__auto__,predictions,temp__5757__auto__,source))
], null),word], null)," "], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["autosuggest-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(word)].join('')], null)),slovarish$frontend$app$suggestions_$_iter__31362(cljs.core.rest(s__31363__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),predictions));
})()),(((cljs.core.count(predictions) > (5)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"..."], null):null)], null);
}
})()], null);

}
}
});
slovarish.frontend.app.legend = (function slovarish$frontend$app$legend(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#legend","div#legend",-1923867619),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),(function (){var G__31366 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__31366__$1 = (((G__31366 instanceof cljs.core.Keyword))?G__31366.fqn:null);
switch (G__31366__$1) {
case "english":
return ["key to symbols (for ",cljs.core.name(cljs.core.deref(slovarish.frontend.state.pos)),"s)"].join('');

break;
case "russian":
return ["\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0437\u043D\u0430\u043A\u043E\u0432 (\u0434\u043B\u044F ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__31370 = cljs.core.deref(slovarish.frontend.state.pos);
var fexpr__31369 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"noun","noun",185846460),"\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445",new cljs.core.Keyword(null,"verb","verb",-1492655803),"\u0433\u043B\u0430\u0433\u043E\u043B\u043E\u0432",new cljs.core.Keyword(null,"adjective","adjective",441465450),"\u043F\u0440\u0438\u043B\u0430\u0433\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0445"], null);
return (fexpr__31369.cljs$core$IFn$_invoke$arity$1 ? fexpr__31369.cljs$core$IFn$_invoke$arity$1(G__31370) : fexpr__31369.call(null,G__31370));
})()),")"].join('');

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31366__$1)].join('')));

}
})()], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(slovarish.frontend.state.display_language),new cljs.core.Keyword(null,"russian","russian",1887936458)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.italic","p.italic",60958886),"(\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u043F\u043E\u043B\u043D\u043E\u0433\u043E \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0430 \u044D\u0442\u043E\u0433\u043E \u0442\u0435\u043A\u0441\u0442\u0430 \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u0438\u0439 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442.)"], null):null),(function (){var G__31371 = cljs.core.deref(slovarish.frontend.state.pos);
var G__31371__$1 = (((G__31371 instanceof cljs.core.Keyword))?G__31371.fqn:null);
switch (G__31371__$1) {
case "noun":
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.masculine","div.word-form.masculine",-544211787),"\uD83D\uDC68"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.masculine","div.word-form.masculine",-544211787),"\u2640\uD83E\uDD16"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.feminine","div.word-form.feminine",-1941960731),"\uD83D\uDC69"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.feminine","div.word-form.feminine",-1941960731),"\u2642\uD83E\uDD16"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.neuter","div.word-form.neuter",660838331),"\uD83D\uDC7D"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.neuter","div.word-form.neuter",660838331),"\u26B2\uD83E\uDD16"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Animate and inanimate nouns by gender"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.common","div.word-form.common",1797573662),"\uD83D\uDC6B"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.common","div.word-form.common",1797573662),"\u26A5 \uD83E\uDD16"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Common gender (same form can be either m or f)"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.noun.masculine.unpredictable-stress","div.word-form.noun.masculine.unpredictable-stress",1410284450),"\u0432\u043E\u0301\u043B\u043E\u0441\u044B\u00A0\u00A0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.noun.feminine.unpredictable-stress","div.word-form.noun.feminine.unpredictable-stress",1037663372),"\u0433\u043E\u0301\u043B\u043E\u0432\u0443\u00A0\u00A0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.noun.neuter.unpredictable-stress","div.word-form.noun.neuter.unpredictable-stress",-294484822),"\u0443\u0442\u0440\u0430\u0301\u00A0\u00A0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Location of stress is different from other singular or plural forms."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.noun.irregular-form","div.word-form.noun.irregular-form",540423993),"\u0434\u043E\u043C\u0430\u0301\u00A0\u00A0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.noun.irregular-form","div.word-form.noun.irregular-form",540423993),"\u0441\u043B\u0451\u0437\u044B\u00A0\u00A0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.noun.irregular-form","div.word-form.noun.irregular-form",540423993),"\u043A\u043E\u043B\u0435\u0301\u043D\u0435\u0439\u00A0\u00A0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Form is different than expected, given the base form and gender of the noun."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.noun.masculine","div.word-form.noun.masculine",-1423722711),"\u0440\u044B\u0301\u043D",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.fleeting-vowel","span.fleeting-vowel",1494768284),"\u043E"], null),"\u043A"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.noun.feminine","div.word-form.noun.feminine",-632878748),"\u0434\u0435\u0301\u0432\u0443\u0448",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.fleeting-vowel","span.fleeting-vowel",1494768284),"\u0435"], null),"\u043A"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.noun.neuter","div.word-form.noun.neuter",2003431659),"\u044F",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.fleeting-vowel","span.fleeting-vowel",1494768284),"\u0438\u0301"], null),"\u0446"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Fleeting vowels that appear only in certain forms of the noun."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["\u2714\uFE0F Results are verified. ","Case forms for nouns appearing in OpenCorpora data are shaded according to their relative frequency."].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["\u2753 Word not found in OpenCorpora or Wiktionary data. ","Results are generated automatically and may contain inaccuracies."].join('')], null)], null);

break;
case "verb":
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.infinitive.imperfective","div.word-form.infinitive.imperfective",-1849419943),"\u23F3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.infinitive.perfective","div.word-form.infinitive.perfective",763055565),"\uD83D\uDCCC"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.infinitive.biaspectual","div.word-form.infinitive.biaspectual",213279758),"\u23F3\uD83D\uDCCC"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Imperfective/perfective/biaspectual verb"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.infinitive.indefinite","div.word-form.infinitive.indefinite",489608736),"\uD83D\uDD04"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.infinitive.definite","div.word-form.infinitive.definite",-20965789),"\u27A1\uFE0F"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Multidirectional/unidirectional verb of motion"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.word-form.present.imperfective.unpredictable-stress","span.word-form.present.imperfective.unpredictable-stress",495831590),"\u0441\u043C\u043E\u0301\u0442\u0440\u0438\u0442\u00A0\u00A0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.word-form.past.feminine.unpredictable-stress","span.word-form.past.feminine.unpredictable-stress",-1718669966),"\u0434\u0430\u043B\u0430\u0301\u00A0\u00A0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Location of stress is different from other verb forms of the same tense."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.word-form.past.masculine.irregular-form","span.word-form.past.masculine.irregular-form",1748495524),"\u043F\u043E\u0448\u0451\u043B\u00A0\u00A0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.word-form.past.masculine.irregular-form","span.word-form.past.masculine.irregular-form",1748495524),"\u043C\u043E\u0301\u0433\u00A0\u00A0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Past tense has an irregular form (only the masculine form will be marked)."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.infinitive.imperfective","div.word-form.infinitive.imperfective",-1849419943),"\u0431",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.fleeting-vowel","span.fleeting-vowel",1494768284),"\u0435"], null),"\u0440\u0443\u0301"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.infinitive.perfective","div.word-form.infinitive.perfective",763055565),"\u0432",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.fleeting-vowel","span.fleeting-vowel",1494768284),"\u043E"], null),"\u0437\u044C\u043C\u0443\u0301"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Fleeting vowels that appear only in certain forms of the verb."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\uD83D\uDD00 Has alternate past tense forms. Mouse over to see them."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\uD83D\uDCA1 Denotes a common verb whose conjugation pattern is shared by many other verbs."], null)], null);

break;
case "adjective":
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.masculine.irregular-form","div.word-form.masculine.irregular-form",-864311620),"\u0441\u0442\u0440\u043E\u0301",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.fleeting-vowel","span.fleeting-vowel",1494768284),"\u0435"], null),"\u043D"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.masculine.irregular-form","div.word-form.masculine.irregular-form",-864311620),"\u043B\u0451\u0433",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.fleeting-vowel","span.fleeting-vowel",1494768284),"\u043E"], null),"\u043A"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Masculine short form has a buffer vowel."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.short-form.feminine.unpredictable-stress","div.word-form.short-form.feminine.unpredictable-stress",332361523),"\u0440\u0435\u0434\u043A\u0430\u0301\u00A0\u00A0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.short-form.neuter.unpredictable-stress","div.word-form.short-form.neuter.unpredictable-stress",601508834),"\u0434\u0430\u043B\u0435\u043A\u043E\u0301\u00A0\u00A0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.short-form.plural.common.unpredictable-stress","div.word-form.short-form.plural.common.unpredictable-stress",-1314740432),"\u0441\u0432\u0435\u0436\u0438\u0301\u00A0\u00A0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"End-stressed non-masculine short form."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.masculine.light","div.word-form.masculine.light",-144557812),"\u0431\u043E\u043B\u044C\u0448\u043E\u0301\u0439 \uD83E\uDD16"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.masculine.light","div.word-form.masculine.light",-144557812),"\u0431\u043E\u043B\u044C\u0448\u043E\u0301\u0433\u043E \uD83D\uDC68"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Nom. = inan. acc.; gen. = anim. acc. for masculine forms."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.plural.common.light","div.word-form.plural.common.light",-227939052),"\u0431\u043E\u043B\u044C\u0448\u0438\u0301\u0435 \uD83E\uDD16"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.plural.common.light","div.word-form.plural.common.light",-227939052),"\u0431\u043E\u043B\u044C\u0448\u0438\u0301\u0445 \uD83D\uDC6B"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Nom. = inan. acc.; gen. = anim. acc. for plural forms."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\uD83D\uDD00 Has an alternate stress pattern for the short forms. Mouse over to see them."], null)], null);

break;
default:
return null;

}
})()], null);
});
slovarish.frontend.app.credits = (function slovarish$frontend$app$credits(){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#credits","div#credits",-1149036730),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"credits"], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(slovarish.frontend.state.display_language),new cljs.core.Keyword(null,"russian","russian",1887936458)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.italic","p.italic",60958886),"(\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u043F\u043E\u043B\u043D\u043E\u0433\u043E \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0430 \u044D\u0442\u043E\u0433\u043E \u0442\u0435\u043A\u0441\u0442\u0430 \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u0438\u0439 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442.)"], null):null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Word lists and frequency data are taken from ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"//opencorpora.org"], null),"OpenCorpora"], null)," and ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"//bokrcorpora.narod.ru/frqlist/frqlist-en.html"], null),"this page"], null),". Primary source for the inflection data is ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"//wiktionary.org"], null),"English Wiktionary"], null),", with ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"//github.com/georgy7/RussianNounsJS"], null),"RussianNouns.js"], null)," handling algorithmic generation of noun forms where possible."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Please note that some inaccuracies may still remain."], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Inspired by ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"//genusly.com"], null),"Genusly"], null)," and ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"//kartaslov.ru"], null),"\u041A\u0430\u0440\u0442\u0430 \u0441\u043B\u043E\u0432"], null),"."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Written with \u2764\uFE0F in Clojure and ClojureScript."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Slovarish \u00A9 2022 Justin Douglas"], null)], null);
});
slovarish.frontend.app.pick_random_word = (function slovarish$frontend$app$pick_random_word(){
var source = (function (){var G__31373 = cljs.core.deref(slovarish.frontend.state.pos);
var G__31373__$1 = (((G__31373 instanceof cljs.core.Keyword))?G__31373.fqn:null);
switch (G__31373__$1) {
case "noun":
return cljs.core.deref(slovarish.frontend.data.top_2k_words);

break;
case "verb":
return cljs.core.deref(slovarish.frontend.data.all_verbs);

break;
case "adjective":
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__31372_SHARP_){
return cljs.core.some(new cljs.core.Keyword(null,"adjective?","adjective?",-496987264),cljs.core.val(p1__31372_SHARP_));
}),cljs.core.deref(slovarish.frontend.data.all_adjectives));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31373__$1)].join('')));

}
})();
return slovarish.frontend.navigation.go_to_word(cljs.core.rand_nth(cljs.core.keys(source)));
});
slovarish.frontend.app.inflector_app = (function slovarish$frontend$app$inflector_app(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.app.load_mask], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.app.credits], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.app.paypal_donate_button], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#container","div#container",-1257349488),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#random-word-button","div#random-word-button",-1340613198),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return slovarish.frontend.app.pick_random_word();
})], null),"\u00A0\uD83C\uDFB2\u00A0"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.app.header], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.app.word_input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.app.suggestions], null),(cljs.core.truth_(slovarish.frontend.state.result())?(function (){var G__31374 = cljs.core.deref(slovarish.frontend.state.pos);
var G__31374__$1 = (((G__31374 instanceof cljs.core.Keyword))?G__31374.fqn:null);
switch (G__31374__$1) {
case "noun":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.nouns.noun_view.noun_table,slovarish.frontend.state.result()], null);

break;
case "verb":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.verbs.verb_view.verb_table,slovarish.frontend.state.result()], null);

break;
case "adjective":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.adjectives.adjective_view.adj_table,slovarish.frontend.state.result()], null);

break;
default:
return null;

}
})():new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.app.legend], null))], null)], null);
});
slovarish.frontend.app.run = (function slovarish$frontend$app$run(){
reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.app.inflector_app], null),document.getElementById("root"));

slovarish.frontend.navigation.go_to_word(cljs.core.deref(slovarish.frontend.state.input));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(slovarish.frontend.app.batches_loaded),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(slovarish.frontend.app.num_batches)))){
return slovarish.frontend.app.route();
} else {
return null;
}
});
slovarish.frontend.app.init = (function slovarish$frontend$app$init(){
slovarish.frontend.app.load_edn("nouns",(1));

slovarish.frontend.app.load_edn("verbs",(1));

slovarish.frontend.app.load_edn("adjectives",(1));

slovarish.frontend.app.run();

window.addEventListener("hashchange",(function (){
return slovarish.frontend.app.route.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"push-state?","push-state?",-1915122392),false], 0));
}));

window.addEventListener("resize",(function (){
return slovarish.frontend.navigation.toggle_gloss_arrows();
}));

return window.addEventListener("keydown",(function (e){
var G__31375 = e.code;
switch (G__31375) {
case "Escape":
return slovarish.frontend.navigation.go_to_word("");

break;
case "Enter":
return slovarish.frontend.app.pick_random_word();

break;
case "ArrowLeft":
return slovarish.frontend.navigation.prev_sense();

break;
case "ArrowRight":
return slovarish.frontend.navigation.next_sense();

break;
default:
return true;

}
}));
});

//# sourceMappingURL=slovarish.frontend.app.js.map
