function humaneDate(a,b){function h(a,b){var c=.1;return a>=b&&a<=b*(1+c)?b:a}var c={ago:"Ago",from:"From Now",now:"Just Now",minute:"Minute",minutes:"Minutes",hour:"Hour",hours:"Hours",day:"Day",days:"Days",week:"Week",weeks:"Weeks",month:"Month",months:"Months",year:"Year",years:"Years"},d=[[60,c.now],[3600,c.minute,c.minutes,60],[86400,c.hour,c.hours,3600],[604800,c.day,c.days,86400],[2628e3,c.week,c.weeks,604800],[31536e3,c.month,c.months,2628e3],[Infinity,c.year,c.years,31536e3]],e=typeof a=="string",a=e?new Date((""+a).replace(/-/g,"/").replace(/[TZ]/g," ")):a,b=b||new Date,f=(b-a+(b.getTimezoneOffset()-(e?0:a.getTimezoneOffset()))*6e4)/1e3,g;f<0?(f=Math.abs(f),g=" "+c.from):g=" "+c.ago;for(var i=0,j=d[0];d[i];j=d[++i])if(f<j[0]){if(i===0)return j[1];var k=Math.ceil(h(f,j[3])/j[3]);return k+" "+(k!=1?j[2]:j[1])+(i>0?g:"")}}(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;d=c.pop();)a[d]=a[d]||b})(window.console=window.console||{}),function(){var a=this,b=a._,c={},d=Array.prototype,e=Object.prototype,f=Function.prototype,g=d.slice,h=d.unshift,i=e.toString,j=e.hasOwnProperty,k=d.forEach,l=d.map,m=d.reduce,n=d.reduceRight,o=d.filter,p=d.every,q=d.some,r=d.indexOf,s=d.lastIndexOf,t=Array.isArray,u=Object.keys,v=f.bind,w=function(a){return new B(a)};typeof module!="undefined"&&module.exports?(module.exports=w,w._=w):a._=w,w.VERSION="1.1.7";var x=w.each=w.forEach=function(a,b,d){if(a==null)return;if(k&&a.forEach===k)a.forEach(b,d);else if(a.length===+a.length){for(var e=0,f=a.length;e<f;e++)if(e in a&&b.call(d,a[e],e,a)===c)return}else for(var g in a)if(j.call(a,g)&&b.call(d,a[g],g,a)===c)return};w.map=function(a,b,c){var d=[];return a==null?d:l&&a.map===l?a.map(b,c):(x(a,function(a,e,f){d[d.length]=b.call(c,a,e,f)}),d)},w.reduce=w.foldl=w.inject=function(a,b,c,d){var e=c!==void 0;a==null&&(a=[]);if(m&&a.reduce===m)return d&&(b=w.bind(b,d)),e?a.reduce(b,c):a.reduce(b);x(a,function(a,f,g){e?c=b.call(d,c,a,f,g):(c=a,e=!0)});if(!e)throw new TypeError("Reduce of empty array with no initial value");return c},w.reduceRight=w.foldr=function(a,b,c,d){a==null&&(a=[]);if(n&&a.reduceRight===n)return d&&(b=w.bind(b,d)),c!==void 0?a.reduceRight(b,c):a.reduceRight(b);var e=(w.isArray(a)?a.slice():w.toArray(a)).reverse();return w.reduce(e,b,c,d)},w.find=w.detect=function(a,b,c){var d;return y(a,function(a,e,f){if(b.call(c,a,e,f))return d=a,!0}),d},w.filter=w.select=function(a,b,c){var d=[];return a==null?d:o&&a.filter===o?a.filter(b,c):(x(a,function(a,e,f){b.call(c,a,e,f)&&(d[d.length]=a)}),d)},w.reject=function(a,b,c){var d=[];return a==null?d:(x(a,function(a,e,f){b.call(c,a,e,f)||(d[d.length]=a)}),d)},w.every=w.all=function(a,b,d){var e=!0;return a==null?e:p&&a.every===p?a.every(b,d):(x(a,function(a,f,g){if(!(e=e&&b.call(d,a,f,g)))return c}),e)};var y=w.some=w.any=function(a,b,d){b=b||w.identity;var e=!1;return a==null?e:q&&a.some===q?a.some(b,d):(x(a,function(a,f,g){if(e|=b.call(d,a,f,g))return c}),!!e)};w.include=w.contains=function(a,b){var c=!1;return a==null?c:r&&a.indexOf===r?a.indexOf(b)!=-1:(y(a,function(a){if(c=a===b)return!0}),c)},w.invoke=function(a,b){var c=g.call(arguments,2);return w.map(a,function(a){return(b.call?b||a:a[b]).apply(a,c)})},w.pluck=function(a,b){return w.map(a,function(a){return a[b]})},w.max=function(a,b,c){if(!b&&w.isArray(a))return Math.max.apply(Math,a);var d={computed:-Infinity};return x(a,function(a,e,f){var g=b?b.call(c,a,e,f):a;g>=d.computed&&(d={value:a,computed:g})}),d.value},w.min=function(a,b,c){if(!b&&w.isArray(a))return Math.min.apply(Math,a);var d={computed:Infinity};return x(a,function(a,e,f){var g=b?b.call(c,a,e,f):a;g<d.computed&&(d={value:a,computed:g})}),d.value},w.sortBy=function(a,b,c){return w.pluck(w.map(a,function(a,d,e){return{value:a,criteria:b.call(c,a,d,e)}}).sort(function(a,b){var c=a.criteria,d=b.criteria;return c<d?-1:c>d?1:0}),"value")},w.groupBy=function(a,b){var c={};return x(a,function(a,d){var e=b(a,d);(c[e]||(c[e]=[])).push(a)}),c},w.sortedIndex=function(a,b,c){c||(c=w.identity);var d=0,e=a.length;while(d<e){var f=d+e>>1;c(a[f])<c(b)?d=f+1:e=f}return d},w.toArray=function(a){return a?a.toArray?a.toArray():w.isArray(a)?g.call(a):w.isArguments(a)?g.call(a):w.values(a):[]},w.size=function(a){return w.toArray(a).length},w.first=w.head=function(a,b,c){return b!=null&&!c?g.call(a,0,b):a[0]},w.rest=w.tail=function(a,b,c){return g.call(a,b==null||c?1:b)},w.last=function(a){return a[a.length-1]},w.compact=function(a){return w.filter(a,function(a){return!!a})},w.flatten=function(a){return w.reduce(a,function(a,b){return w.isArray(b)?a.concat(w.flatten(b)):(a[a.length]=b,a)},[])},w.without=function(a){return w.difference(a,g.call(arguments,1))},w.uniq=w.unique=function(a,b){return w.reduce(a,function(a,c,d){if(0==d||(b===!0?w.last(a)!=c:!w.include(a,c)))a[a.length]=c;return a},[])},w.union=function(){return w.uniq(w.flatten(arguments))},w.intersection=w.intersect=function(a){var b=g.call(arguments,1);return w.filter(w.uniq(a),function(a){return w.every(b,function(b){return w.indexOf(b,a)>=0})})},w.difference=function(a,b){return w.filter(a,function(a){return!w.include(b,a)})},w.zip=function(){var a=g.call(arguments),b=w.max(w.pluck(a,"length")),c=new Array(b);for(var d=0;d<b;d++)c[d]=w.pluck(a,""+d);return c},w.indexOf=function(a,b,c){if(a==null)return-1;var d,e;if(c)return d=w.sortedIndex(a,b),a[d]===b?d:-1;if(r&&a.indexOf===r)return a.indexOf(b);for(d=0,e=a.length;d<e;d++)if(a[d]===b)return d;return-1},w.lastIndexOf=function(a,b){if(a==null)return-1;if(s&&a.lastIndexOf===s)return a.lastIndexOf(b);var c=a.length;while(c--)if(a[c]===b)return c;return-1},w.range=function(a,b,c){arguments.length<=1&&(b=a||0,a=0),c=arguments[2]||1;var d=Math.max(Math.ceil((b-a)/c),0),e=0,f=new Array(d);while(e<d)f[e++]=a,a+=c;return f},w.bind=function(a,b){if(a.bind===v&&v)return v.apply(a,g.call(arguments,1));var c=g.call(arguments,2);return function(){return a.apply(b,c.concat(g.call(arguments)))}},w.bindAll=function(a){var b=g.call(arguments,1);return b.length==0&&(b=w.functions(a)),x(b,function(b){a[b]=w.bind(a[b],a)}),a},w.memoize=function(a,b){var c={};return b||(b=w.identity),function(){var d=b.apply(this,arguments);return j.call(c,d)?c[d]:c[d]=a.apply(this,arguments)}},w.delay=function(a,b){var c=g.call(arguments,2);return setTimeout(function(){return a.apply(a,c)},b)},w.defer=function(a){return w.delay.apply(w,[a,1].concat(g.call(arguments,1)))};var z=function(a,b,c){var d;return function(){var e=this,f=arguments,g=function(){d=null,a.apply(e,f)};c&&clearTimeout(d);if(c||!d)d=setTimeout(g,b)}};w.throttle=function(a,b){return z(a,b,!1)},w.debounce=function(a,b){return z(a,b,!0)},w.once=function(a){var b=!1,c;return function(){return b?c:(b=!0,c=a.apply(this,arguments))}},w.wrap=function(a,b){return function(){var c=[a].concat(g.call(arguments));return b.apply(this,c)}},w.compose=function(){var a=g.call(arguments);return function(){var b=g.call(arguments);for(var c=a.length-1;c>=0;c--)b=[a[c].apply(this,b)];return b[0]}},w.after=function(a,b){return function(){if(--a<1)return b.apply(this,arguments)}},w.keys=u||function(a){if(a!==Object(a))throw new TypeError("Invalid object");var b=[];for(var c in a)j.call(a,c)&&(b[b.length]=c);return b},w.values=function(a){return w.map(a,w.identity)},w.functions=w.methods=function(a){var b=[];for(var c in a)w.isFunction(a[c])&&b.push(c);return b.sort()},w.extend=function(a){return x(g.call(arguments,1),function(b){for(var c in b)b[c]!==void 0&&(a[c]=b[c])}),a},w.defaults=function(a){return x(g.call(arguments,1),function(b){for(var c in b)a[c]==null&&(a[c]=b[c])}),a},w.clone=function(a){return w.isArray(a)?a.slice():w.extend({},a)},w.tap=function(a,b){return b(a),a},w.isEqual=function(a,b){if(a===b)return!0;var c=typeof a,d=typeof b;if(c!=d)return!1;if(a==b)return!0;if(!a&&b||a&&!b)return!1;a._chain&&(a=a._wrapped),b._chain&&(b=b._wrapped);if(a.isEqual)return a.isEqual(b);if(b.isEqual)return b.isEqual(a);if(w.isDate(a)&&w.isDate(b))return a.getTime()===b.getTime();if(w.isNaN(a)&&w.isNaN(b))return!1;if(w.isRegExp(a)&&w.isRegExp(b))return a.source===b.source&&a.global===b.global&&a.ignoreCase===b.ignoreCase&&a.multiline===b.multiline;if(c!=="object")return!1;if(a.length&&a.length!==b.length)return!1;var e=w.keys(a),f=w.keys(b);if(e.length!=f.length)return!1;for(var g in a)if(!(g in b)||!w.isEqual(a[g],b[g]))return!1;return!0},w.isEmpty=function(a){if(w.isArray(a)||w.isString(a))return a.length===0;for(var b in a)if(j.call(a,b))return!1;return!0},w.isElement=function(a){return!!a&&a.nodeType==1},w.isArray=t||function(a){return i.call(a)==="[object Array]"},w.isObject=function(a){return a===Object(a)},w.isArguments=function(a){return!!a&&!!j.call(a,"callee")},w.isFunction=function(a){return!!(a&&a.constructor&&a.call&&a.apply)},w.isString=function(a){return!!(a===""||a&&a.charCodeAt&&a.substr)},w.isNumber=function(a){return!!(a===0||a&&a.toExponential&&a.toFixed)},w.isNaN=function(a){return a!==a},w.isBoolean=function(a){return a===!0||a===!1},w.isDate=function(a){return!!(a&&a.getTimezoneOffset&&a.setUTCFullYear)},w.isRegExp=function(a){return!(!(a&&a.test&&a.exec)||!a.ignoreCase&&a.ignoreCase!==!1)},w.isNull=function(a){return a===null},w.isUndefined=function(a){return a===void 0},w.noConflict=function(){return a._=b,this},w.identity=function(a){return a},w.times=function(a,b,c){for(var d=0;d<a;d++)b.call(c,d)},w.mixin=function(a){x(w.functions(a),function(b){D(b,w[b]=a[b])})};var A=0;w.uniqueId=function(a){var b=A++;return a?a+b:b},w.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g},w.template=function(a,b){var c=w.templateSettings,d="var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('"+a.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(c.interpolate,function(a,b){return"',"+b.replace(/\\'/g,"'")+",'"}).replace(c.evaluate||null,function(a,b){return"');"+b.replace(/\\'/g,"'").replace(/[\r\n\t]/g," ")+"__p.push('"}).replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/\t/g,"\\t")+"');}return __p.join('');",e=new Function("obj",d);return b?e(b):e};var B=function(a){this._wrapped=a};w.prototype=B.prototype;var C=function(a,b){return b?w(a).chain():a},D=function(a,b){B.prototype[a]=function(){var a=g.call(arguments);return h.call(a,this._wrapped),C(b.apply(w,a),this._chain)}};w.mixin(w),x(["pop","push","reverse","shift","sort","splice","unshift"],function(a){var b=d[a];B.prototype[a]=function(){return b.apply(this._wrapped,arguments),C(this._wrapped,this._chain)}}),x(["concat","join","slice"],function(a){var b=d[a];B.prototype[a]=function(){return C(b.apply(this._wrapped,arguments),this._chain)}}),B.prototype.chain=function(){return this._chain=!0,this},B.prototype.value=function(){return this._wrapped}}(),function(){var a=this,b=a.Backbone,c;typeof exports!="undefined"?c=exports:c=a.Backbone={},c.VERSION="0.5.3";var d=a._;!d&&typeof require!="undefined"&&(d=require("underscore")._);var e=a.jQuery||a.Zepto;c.noConflict=function(){return a.Backbone=b,this},c.emulateHTTP=!1,c.emulateJSON=!1,c.Events={bind:function(a,b,c){var d=this._callbacks||(this._callbacks={}),e=d[a]||(d[a]=[]);return e.push([b,c]),this},unbind:function(a,b){var c;if(!a)this._callbacks={};else if(c=this._callbacks)if(!b)c[a]=[];else{var d=c[a];if(!d)return this;for(var e=0,f=d.length;e<f;e++)if(d[e]&&b===d[e][0]){d[e]=null;break}}return this},trigger:function(a){var b,c,d,e,f,g=2;if(!(c=this._callbacks))return this;while(g--){d=g?a:"all";if(b=c[d])for(var h=0,i=b.length;h<i;h++)(e=b[h])?(f=g?Array.prototype.slice.call(arguments,1):arguments,e[0].apply(e[1]||this,f)):(b.splice(h,1),h--,i--)}return this}},c.Model=function(a,b){var c;a||(a={});if(c=this.defaults)d.isFunction(c)&&(c=c.call(this)),a=d.extend({},c,a);this.attributes={},this._escapedAttributes={},this.cid=d.uniqueId("c"),this.set(a,{silent:!0}),this._changed=!1,this._previousAttributes=d.clone(this.attributes),b&&b.collection&&(this.collection=b.collection),this.initialize(a,b)},d.extend(c.Model.prototype,c.Events,{_previousAttributes:null,_changed:!1,idAttribute:"id",initialize:function(){},toJSON:function(){return d.clone(this.attributes)},get:function(a){return this.attributes[a]},escape:function(a){var b;if(b=this._escapedAttributes[a])return b;var c=this.attributes[a];return this._escapedAttributes[a]=w(c==null?"":""+c)},has:function(a){return this.attributes[a]!=null},set:function(a,b){b||(b={});if(!a)return this;a.attributes&&(a=a.attributes);var c=this.attributes,e=this._escapedAttributes;if(!b.silent&&this.validate&&!this._performValidation(a,b))return!1;this.idAttribute in a&&(this.id=a[this.idAttribute]);var f=this._changing;this._changing=!0;for(var g in a){var h=a[g];d.isEqual(c[g],h)||(c[g]=h,delete e[g],this._changed=!0,b.silent||this.trigger("change:"+g,this,h,b))}return!f&&!b.silent&&this._changed&&this.change(b),this._changing=!1,this},unset:function(a,b){if(a in this.attributes){b||(b={});var c=this.attributes[a],d={};return d[a]=void 0,!b.silent&&this.validate&&!this._performValidation(d,b)?!1:(delete this.attributes[a],delete this._escapedAttributes[a],a==this.idAttribute&&delete this.id,this._changed=!0,b.silent||(this.trigger("change:"+a,this,void 0,b),this.change(b)),this)}return this},clear:function(a){a||(a={});var b,c=this.attributes,d={};for(b in c)d[b]=void 0;if(!a.silent&&this.validate&&!this._performValidation(d,a))return!1;this.attributes={},this._escapedAttributes={},this._changed=!0;if(!a.silent){for(b in c)this.trigger("change:"+b,this,void 0,a);this.change(a)}return this},fetch:function(a){a||(a={});var b=this,d=a.success;return a.success=function(c,e,f){if(!b.set(b.parse(c,f),a))return!1;d&&d(b,c)},a.error=v(a.error,b,a),(this.sync||c.sync).call(this,"read",this,a)},save:function(a,b){b||(b={});if(a&&!this.set(a,b))return!1;var d=this,e=b.success;b.success=function(a,c,f){if(!d.set(d.parse(a,f),b))return!1;e&&e(d,a,f)},b.error=v(b.error,d,b);var f=this.isNew()?"create":"update";return(this.sync||c.sync).call(this,f,this,b)},destroy:function(a){a||(a={});if(this.isNew())return this.trigger("destroy",this,this.collection,a);var b=this,d=a.success;return a.success=function(c){b.trigger("destroy",b,b.collection,a),d&&d(b,c)},a.error=v(a.error,b,a),(this.sync||c.sync).call(this,"delete",this,a)},url:function(){var a=t(this.collection)||this.urlRoot||u();return this.isNew()?a:a+(a.charAt(a.length-1)=="/"?"":"/")+encodeURIComponent(this.id)},parse:function(a,b){return a},clone:function(){return new this.constructor(this)},isNew:function(){return this.id==null},change:function(a){this.trigger("change",this,a),this._previousAttributes=d.clone(this.attributes),this._changed=!1},hasChanged:function(a){return a?this._previousAttributes[a]!=this.attributes[a]:this._changed},changedAttributes:function(a){a||(a=this.attributes);var b=this._previousAttributes,c=!1;for(var e in a)d.isEqual(b[e],a[e])||(c=c||{},c[e]=a[e]);return c},previous:function(a){return!a||!this._previousAttributes?null:this._previousAttributes[a]},previousAttributes:function(){return d.clone(this._previousAttributes)},_performValidation:function(a,b){var c=this.validate(a);return c?(b.error?b.error(this,c,b):this.trigger("error",this,c,b),!1):!0}}),c.Collection=function(a,b){b||(b={}),b.comparator&&(this.comparator=b.comparator),d.bindAll(this,"_onModelEvent","_removeReference"),this._reset(),a&&this.reset(a,{silent:!0}),this.initialize.apply(this,arguments)},d.extend(c.Collection.prototype,c.Events,{model:c.Model,initialize:function(){},toJSON:function(){return this.map(function(a){return a.toJSON()})},add:function(a,b){if(d.isArray(a))for(var c=0,e=a.length;c<e;c++)this._add(a[c],b);else this._add(a,b);return this},remove:function(a,b){if(d.isArray(a))for(var c=0,e=a.length;c<e;c++)this._remove(a[c],b);else this._remove(a,b);return this},get:function(a){return a==null?null:this._byId[a.id!=null?a.id:a]},getByCid:function(a){return a&&this._byCid[a.cid||a]},at:function(a){return this.models[a]},sort:function(a){a||(a={});if(!this.comparator)throw new Error("Cannot sort a set without a comparator");return this.models=this.sortBy(this.comparator),a.silent||this.trigger("reset",this,a),this},pluck:function(a){return d.map(this.models,function(b){return b.get(a)})},reset:function(a,b){return a||(a=[]),b||(b={}),this.each(this._removeReference),this._reset(),this.add(a,{silent:!0}),b.silent||this.trigger("reset",this,b),this},fetch:function(a){a||(a={});var b=this,d=a.success;return a.success=function(c,e,f){b[a.add?"add":"reset"](b.parse(c,f),a),d&&d(b,c)},a.error=v(a.error,b,a),(this.sync||c.sync).call(this,"read",this,a)},create:function(a,b){var c=this;b||(b={}),a=this._prepareModel(a,b);if(!a)return!1;var d=b.success;return b.success=function(a,e,f){c.add(a,b),d&&d(a,e,f)},a.save(null,b),a},parse:function(a,b){return a},chain:function(){return d(this.models).chain()},_reset:function(a){this.length=0,this.models=[],this._byId={},this._byCid={}},_prepareModel:function(a,b){if(a instanceof c.Model)a.collection||(a.collection=this);else{var d=a;a=new this.model(d,{collection:this}),a.validate&&!a._performValidation(d,b)&&(a=!1)}return a},_add:function(a,b){b||(b={}),a=this._prepareModel(a,b);if(!a)return!1;var c=this.getByCid(a);if(c)throw new Error(["Can't add the same model to a set twice",c.id]);this._byId[a.id]=a,this._byCid[a.cid]=a;var d=b.at!=null?b.at:this.comparator?this.sortedIndex(a,this.comparator):this.length;return this.models.splice(d,0,a),a.bind("all",this._onModelEvent),this.length++,b.silent||a.trigger("add",a,this,b),a},_remove:function(a,b){return b||(b={}),a=this.getByCid(a)||this.get(a),a?(delete this._byId[a.id],delete this._byCid[a.cid],this.models.splice(this.indexOf(a),1),this.length--,b.silent||a.trigger("remove",a,this,b),this._removeReference(a),a):null},_removeReference:function(a){this==a.collection&&delete a.collection,a.unbind("all",this._onModelEvent)},_onModelEvent:function(a,b,c,d){if(a!="add"&&a!="remove"||c==this)a=="destroy"&&this._remove(b,d),b&&a==="change:"+b.idAttribute&&(delete this._byId[b.previous(b.idAttribute)],this._byId[b.id]=b),this.trigger.apply(this,arguments);else return}});var f=["forEach","each","map","reduce","reduceRight","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","sortBy","sortedIndex","toArray","size","first","rest","last","without","indexOf","lastIndexOf","isEmpty","groupBy"];d.each(f,function(a){c.Collection.prototype[a]=function(){return d[a].apply(d,[this.models].concat(d.toArray(arguments)))}}),c.Router=function(a){a||(a={}),a.routes&&(this.routes=a.routes),this._bindRoutes(),this.initialize.apply(this,arguments)};var g=/:([\w\d]+)/g,h=/\*([\w\d]+)/g,i=/[-[\]{}()+?.,\\^$|#\s]/g;d.extend(c.Router.prototype,c.Events,{initialize:function(){},route:function(a,b,e){c.history||(c.history=new c.History),d.isRegExp(a)||(a=this._routeToRegExp(a)),c.history.route(a,d.bind(function(c){var d=this._extractParameters(a,c);e.apply(this,d),this.trigger.apply(this,["route:"+b].concat(d))},this))},navigate:function(a,b){c.history.navigate(a,b)},_bindRoutes:function(){if(!this.routes)return;var a=[];for(var b in this.routes)a.unshift([b,this.routes[b]]);for(var c=0,d=a.length;c<d;c++)this.route(a[c][0],a[c][1],this[a[c][1]])},_routeToRegExp:function(a){return a=a.replace(i,"\\$&").replace(g,"([^/]*)").replace(h,"(.*?)"),new RegExp("^"+a+"$")},_extractParameters:function(a,b){return a.exec(b).slice(1)}}),c.History=function(){this.handlers=[],d.bindAll(this,"checkUrl")};var j=/^#*/,k=/msie [\w.]+/,l=!1;d.extend(c.History.prototype,{interval:50,getFragment:function(a,b){if(a==null)if(this._hasPushState||b){a=window.location.pathname;var c=window.location.search;c&&(a+=c),a.indexOf(this.options.root)==0&&(a=a.substr(this.options.root.length))}else a=window.location.hash;return decodeURIComponent(a.replace(j,""))},start:function(a){if(l)throw new Error("Backbone.history has already been started");this.options=d.extend({},{root:"/"},this.options,a),this._wantsPushState=!!this.options.pushState,this._hasPushState=!!(this.options.pushState&&window.history&&window.history.pushState);var b=this.getFragment(),c=document.documentMode,f=k.exec(navigator.userAgent.toLowerCase())&&(!c||c<=7);f&&(this.iframe=e('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow,this.navigate(b)),this._hasPushState?e(window).bind("popstate",this.checkUrl):"onhashchange"in window&&!f?e(window).bind("hashchange",this.checkUrl):setInterval(this.checkUrl,this.interval),this.fragment=b,l=!0;var g=window.location,h=g.pathname==this.options.root;if(this._wantsPushState&&!this._hasPushState&&!h)return this.fragment=this.getFragment(null,!0),window.location.replace(this.options.root+"#"+this.fragment),!0;this._wantsPushState&&this._hasPushState&&h&&g.hash&&(this.fragment=g.hash.replace(j,""),window.history.replaceState({},document.title,g.protocol+"//"+g.host+this.options.root+this.fragment));if(!this.options.silent)return this.loadUrl()},route:function(a,b){this.handlers.unshift({route:a,callback:b})},checkUrl:function(a){var b=this.getFragment();b==this.fragment&&this.iframe&&(b=this.getFragment(this.iframe.location.hash));if(b==this.fragment||b==decodeURIComponent(this.fragment))return!1;this.iframe&&this.navigate(b),this.loadUrl()||this.loadUrl(window.location.hash)},loadUrl:function(a){var b=this.fragment=this.getFragment(a),c=d.any(this.handlers,function(a){if(a.route.test(b))return a.callback(b),!0});return c},navigate:function(a,b){var c=(a||"").replace(j,"");if(this.fragment==c||this.fragment==decodeURIComponent(c))return;if(this._hasPushState){var d=window.location;c.indexOf(this.options.root)!=0&&(c=this.options.root+c),this.fragment=c,window.history.pushState({},document.title,d.protocol+"//"+d.host+c)}else window.location.hash=this.fragment=c,this.iframe&&c!=this.getFragment(this.iframe.location.hash)&&(this.iframe.document.open().close(),this.iframe.location.hash=c);b&&this.loadUrl(a)}}),c.View=function(a){this.cid=d.uniqueId("view"),this._configure(a||{}),this._ensureElement(),this.delegateEvents(),this.initialize.apply(this,arguments)};var m=function(a){return e(a,this.el)},n=/^(\S+)\s*(.*)$/,o=["model","collection","el","id","attributes","className","tagName"];d.extend(c.View.prototype,c.Events,{tagName:"div",$:m,initialize:function(){},render:function(){return this},remove:function(){return e(this.el).remove(),this},make:function(a,b,c){var d=document.createElement(a);return b&&e(d).attr(b),c&&e(d).html(c),d},delegateEvents:function(a){if(!a&&!(a=this.events))return;d.isFunction(a)&&(a=a.call(this)),e(this.el).unbind(".delegateEvents"+this.cid);for(var b in a){var c=this[a[b]];if(!c)throw new Error('Event "'+a[b]+'" does not exist');var f=b.match(n),g=f[1],h=f[2];c=d.bind(c,this),g+=".delegateEvents"+this.cid,h===""&&e(this.el).bind(g,c)}},_configure:function(a){this.options&&(a=d.extend({},this.options,a));for(var b=0,c=o.length;b<c;b++){var e=o[b];a[e]&&(this[e]=a[e])}this.options=a},_ensureElement:function(){if(!this.el){var a=this.attributes||{};this.id&&(a.id=this.id),this.className&&(a["class"]=this.className),this.el=this.make(this.tagName,a)}else d.isString(this.el)&&(this.el=e(this.el).get(0))}});var p=function(a,b){var c=s(this,a,b);return c.extend=this.extend,c};c.Model.extend=c.Collection.extend=c.Router.extend=c.View.extend=p;var q={create:"POST",update:"PUT","delete":"DELETE",read:"GET"};c.sync=function(a,b,f){var g=q[a],h=d.extend({type:g,dataType:"json"},f);return h.url||(h.url=t(b)||u()),!h.data&&b&&(a=="create"||a=="update")&&(h.contentType="application/json",h.data=JSON.stringify(b.toJSON())),c.emulateJSON&&(h.contentType="application/x-www-form-urlencoded",h.data=h.data?{model:h.data}:{}),c.emulateHTTP&&(g==="PUT"||g==="DELETE")&&(c.emulateJSON&&(h.data._method=g),h.type="POST",h.beforeSend=function(a){a.setRequestHeader("X-HTTP-Method-Override",g)}),h.type!=="GET"&&!c.emulateJSON&&(h.processData=!1),e.ajax(h)};var r=function(){},s=function(a,b,c){var e;return b&&b.hasOwnProperty("constructor")?e=b.constructor:e=function(){return a.apply(this,arguments)},d.extend(e,a),r.prototype=a.prototype,e.prototype=new r,b&&d.extend(e.prototype,b),c&&d.extend(e,c),e.prototype.constructor=e,e.__super__=a.prototype,e},t=function(a){return!a||!a.url?null:d.isFunction(a.url)?a.url():a.url},u=function(){throw new Error('A "url" property or function must be specified')},v=function(a,b,c){return function(d){a?a(b,d,c):b.trigger("error",b,d,c)}},w=function(a){return a.replace(/&(?!\w+;|#\d+;|#x[\da-f]+;)/gi,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;")}}.call(this),typeof jQuery!="undefined"&&(jQuery.fn.humaneDates=function(){return this.each(function(){var a=jQuery(this),b=humaneDate(a.attr("title"));b&&a.html()!=b&&a.html(b)})}),function(){if(!this.require){var a={},b={},c=function(f,g){var h=b[f],i=d(g,f),j;if(h)return h;if(!(j=a[i]||a[i=d(i,"./index")]))throw"module '"+f+"' not found";h={id:f,exports:{}};try{return b[f]=h.exports,j(h.exports,function(a){return c(a,e(i))},h),b[f]=h.exports}catch(k){throw delete b[f],k}},d=function(a,b){var c=[],d,e;/^\.\.?(\/|$)/.test(b)?d=[a,b].join("/").split("/"):d=b.split("/");for(var f=0,g=d.length;f<g;f++)e=d[f],e==".."?c.pop():e!="."&&e!=""&&c.push(e);return c.join("/")},e=function(a){return a.split("/").slice(0,-1).join("/")};this.require=function(a){return c(a,"")},this.require.define=function(b){for(var c in b)a[c]=b[c]}}return this.require.define}.call(this)({"collections/chats":function(a,b,c){(function(){var c,d=Object.prototype.hasOwnProperty,e=function(a,b){function e(){this.constructor=a}for(var c in b)d.call(b,c)&&(a[c]=b[c]);return e.prototype=b.prototype,a.prototype=new e,a.__super__=b.prototype,a};c=b("models/chat").Chat,a.Chats=function(){function a(){a.__super__.constructor.apply(this,arguments)}return e(a,Backbone.Collection),a.prototype.model=c,a.prototype.url="http://localhost:3000/chats",a}()}).call(this)},"collections/users":function(a,b,c){(function(){var c,d=function(a,b){return function(){return a.apply(b,arguments)}},e=Object.prototype.hasOwnProperty,f=function(a,b){function d(){this.constructor=a}for(var c in b)e.call(b,c)&&(a[c]=b[c]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a};c=b("models/user").User,a.Users=function(){function a(){this.connected=d(this.connected,this),this.currentUserUID=d(this.currentUserUID,this),a.__super__.constructor.apply(this,arguments)}return f(a,Backbone.Collection),a.prototype.model=c,a.prototype.url="http://localhost:3000/Users",a.prototype.currentUserUID=function(){return this.currentUser.get("uid")},a.prototype.connected=function(){return this.filter(function(a){return a.get("connected")===!0})},a}()}).call(this)},main:function(a,b,c){(function(){var a,c,d,e,f,g,h,i;window.app={},app.routers={},app.models={},app.collections={},app.views={},f=b("routers/main_router").MainRouter,e=b("views/home_view").HomeView,d=b("views/chats_view").ChatsView,a=b("models/chat").Chat,g=b("models/user").User,c=b("collections/chats").Chats,h=b("collections/users").Users,$(document).ready(function(){return app.initialize=function(){app.routers.main=new f,app.models.chat=a,app.models.user=g,app.collections.users=new h,app.collections.users.reset(Drupal.settings.chatroom.group.users),app.collections.chats=new c,app.collections.chats.reset(Drupal.settings.chatroom.group.chats),app.views.home=new e({el:"#main-content"});if(Backbone.history.getFragment()==="")return app.routers.main.navigate("home",!0)},app.initialize(),Backbone.history.start(),window.socket=io.connect(Drupal.settings.chatroom.nodejs_url),socket.on("connect",function(){return app.collections.users.currentUser=app.collections.users.get(Drupal.settings.chatroom.currentUser),socket.emit("auth",GetCookie("rediskey"))}),socket.on("set uid",function(a){return Drupal.settings.chatroom.currentUser=a}),socket.on("set group",function(a){return Drupal.settings.chatroom.group.nid=a}),socket.on("chat",function(b){var c;return parseInt(b.uid)!==Drupal.settings.chatroom.currentUser&&b.uid!==Drupal.settings.chatroom.currentUser&&i(b.uid,b.body),c=new a(b),app.collections.chats.add(c)}),socket.on("join",function(a){var b,c,d,e;e=[];for(c=0,d=a.length;c<d;c++)b=a[c],b=parseInt(b),e.push(app.collections.users.get(b).set({connected:!0}));return e}),socket.on("leave",function(a){return app.collections.users.get(a).set({connected:!1})}),socket.on("add groupie",function(a){var b;return b=new app.models.user(a),app.collections.users.add(b)}),socket.on("rem groupie",function(a){return app.collections.users.remove(parseInt(a.uid))})}),window.SetCookie=function(a,b){var c;return document.cookie=a+"="+escape(b),c=new Date,c.setMonth(c.getMonth()+1),document.cookie+="; expires="+c.toUTCString()},window.GetCookie=function(a){var b,c,d,e;b=document.cookie.split("; ");for(d=0,e=b.length;0<=e?d<=e:d>=e;0<=e?d++:d--){c=b[d].split("=");if(a===c[0])return unescape(c[1])}return null},window.ISODateString=function(a){var b,c;return c=function(a){return a<10?"0"+a:a},b=a.getUTCFullYear()+"-",b+=c(a.getUTCMonth()+1)+"-",b+=c(a.getUTCDate())+"T",b+=c(a.getUTCHours())+":",b+=c(a.getUTCMinutes())+":",b+=c(a.getUTCSeconds())+"Z",b},i=function(a,b){var c,d;return typeof titleTimeOut!="undefined"&&titleTimeOut!==null&&(clearInterval(titleTimeOut),document.title=oldTitle),d=app.collections.users.get(a),c=d.get("name")+' said "'+b+'"',window.oldTitle=document.title,window.titleTimeOut=setInterval(function(){return document.title===c?document.title=oldTitle:document.title=c},1e3),window.onmousemove=function(){return clearInterval(titleTimeOut),document.title=oldTitle,window.onmousemove=null}}}).call(this)},"models/chat":function(a,b,c){(function(){var b=Object.prototype.hasOwnProperty,c=function(a,c){function e(){this.constructor=a}for(var d in c)b.call(c,d)&&(a[d]=c[d]);return e.prototype=c.prototype,a.prototype=new e,a.__super__=c.prototype,a};a.Chat=function(){function a(){a.__super__.constructor.apply(this,arguments)}return c(a,Backbone.Model),a.prototype.defaults={uid:1,body:"",date:""},a}()}).call(this)},"models/user":function(a,b,c){(function(){var b=Object.prototype.hasOwnProperty,c=function(a,c){function e(){this.constructor=a}for(var d in c)b.call(c,d)&&(a[d]=c[d]);return e.prototype=c.prototype,a.prototype=new e,a.__super__=c.prototype,a};a.User=function(){function a(){a.__super__.constructor.apply(this,arguments)}return c(a,Backbone.Model),a.prototype.defaults={name:"",pic:"",connected:!1},a.prototype.initialize=function(){var a,b;return b=this.get("name").split(" "),a=b.slice(0,1)[0].split("")[0],a+=". "+b.pop(),this.set({shortname:a})},a}()}).call(this)},"routers/main_router":function(a,b,c){(function(){var b=Object.prototype.hasOwnProperty,c=function(a,c){function e(){this.constructor=a}for(var d in c)b.call(c,d)&&(a[d]=c[d]);return e.prototype=c.prototype,a.prototype=new e,a.__super__=c.prototype,a};a.MainRouter=function(){function a(){a.__super__.constructor.apply(this,arguments)}return c(a,Backbone.Router),a.prototype.routes={home:"home"},a.prototype.home=function(){return app.views.home.render()},a}()}).call(this)},"templates/chats":function(a,b,c){c.exports=function(a){a||(a={});var b=[],c=function(a){var c=b,d;return b=[],a.call(this),d=b.join(""),b=c,e(d)},d=function(a){return a&&a.ecoSafe?a:typeof a!="undefined"&&a!=null?g(a):""},e,f=a.safe,g=a.escape;return e=a.safe=function(a){if(a&&a.ecoSafe)return a;if(typeof a=="undefined"||a==null)a="";var b=new String(a);return b.ecoSafe=!0,b},g||(g=a.escape=function(a){return(""+a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}),function(){(function(){b.push('<ul></ul>\n<input class="enter-chat" placeholder="Say something" type="text" />\n')}).call(this)}.call(a),a.safe=f,a.escape=g,b.join("")}},"templates/home":function(a,b,c){c.exports=function(a){a||(a={});var b=[],c=function(a){var c=b,d;return b=[],a.call(this),d=b.join(""),b=c,e(d)},d=function(a){return a&&a.ecoSafe?a:typeof a!="undefined"&&a!=null?g(a):""},e,f=a.safe,g=a.escape;return e=a.safe=function(a){if(a&&a.ecoSafe)return a;if(typeof a=="undefined"||a==null)a="";var b=new String(a);return b.ecoSafe=!0,b},g||(g=a.escape=function(a){return(""+a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}),function(){(function(){}).call(this)}.call(a),a.safe=f,a.escape=g,b.join("")}},"templates/message":function(a,b,c){c.exports=function(a){a||(a={});var b=[],c=function(a){var c=b,d;return b=[],a.call(this),d=b.join(""),b=c,e(d)},d=function(a){return a&&a.ecoSafe?a:typeof a!="undefined"&&a!=null?g(a):""},e,f=a.safe,g=a.escape;return e=a.safe=function(a){if(a&&a.ecoSafe)return a;if(typeof a=="undefined"||a==null)a="";var b=new String(a);return b.ecoSafe=!0,b},g||(g=a.escape=function(a){return(""+a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}),function(){(function(){b.push(this.model.get("html")),b.push('\n<span class="humaneDate" title="'),b.push(d(this.model.get("date"))),b.push('">'),b.push(d(this.model.get("date"))),b.push("</span>\n")}).call(this)}.call(a),a.safe=f,a.escape=g,b.join("")}},"templates/user":function(a,b,c){c.exports=function(a){a||(a={});var b=[],c=function(a){var c=b,d;return b=[],a.call(this),d=b.join(""),b=c,e(d)},d=function(a){return a&&a.ecoSafe?a:typeof a!="undefined"&&a!=null?g(a):""},e,f=a.safe,g=a.escape;return e=a.safe=function(a){if(a&&a.ecoSafe)return a;if(typeof a=="undefined"||a==null)a="";var b=new String(a);return b.ecoSafe=!0,b},g||(g=a.escape=function(a){return(""+a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}),function(){(function(){b.push(this.user.get("pic")),b.push("\n")}).call(this)}.call(a),a.safe=f,a.escape=g,b.join("")}},"templates/userContainer":function(a,b,c){c.exports=function(a){a||(a={});var b=[],c=function(a){var c=b,d;return b=[],a.call(this),d=b.join(""),b=c,e(d)},d=function(a){return a&&a.ecoSafe?a:typeof a!="undefined"&&a!=null?g(a):""},e,f=a.safe,g=a.escape;return e=a.safe=function(a){if(a&&a.ecoSafe)return a;if(typeof a=="undefined"||a==null)a="";var b=new String(a);return b.ecoSafe=!0,b},g||(g=a.escape=function(a){return(""+a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}),function(){(function(){b.push("<li class='user-container'>\n  <div class='user'>\n    "),b.push(this.user.get("pic")),b.push('\n    <span class="name">'),b.push(d(this.user.get("shortname"))),b.push('</span>\n  </div>\n  <div class="chat-messages"></div>\n  <div style="clear:both"></div>\n</li>\n')}).call(this)}.call(a),a.safe=f,a.escape=g,b.join("")}},"views/chat_view":function(a,b,c){(function(){var c,d=function(a,b){return function(){return a.apply(b,arguments)}},e=Object.prototype.hasOwnProperty,f=function(a,b){function d(){this.constructor=a}for(var c in b)e.call(b,c)&&(a[c]=b[c]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a};c=b("templates/message"),a.ChatView=function(){function a(){this.render=d(this.render,this),a.__super__.constructor.apply(this,arguments)}return f(a,Backbone.View),a.prototype.className="chat-message",a.prototype.render=function(){var a,b,d,e;return b=this.model.get("date"),e=b.split("."),this.model.set({date:e[0]+"Z"}),a=this.model.get("body"),d=a.replace(/\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\((?:[^\s()<>]+|(\(?:[^\s()<>]+\)))*\))+(?:\((?:[^\s()<>]+|(?:\(?:[^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/i,'<a href="$1">$1</a>'),d=d.replace(/\*\*(.+)\*\*/,"<em>$1</em>"),d=d.replace(/\*(.+)\*/,"<strong>$1</strong>"),this.model.set({html:d}),$(this.el).html(c({model:this.model})),this.$(".humaneDate").humaneDates(),this},a}()}).call(this)},"views/chats_view":function(a,b,c){(function(){var c,d,e,f,g=function(a,b){return function(){return a.apply(b,arguments)}},h=Object.prototype.hasOwnProperty,i=function(a,b){function d(){this.constructor=a}for(var c in b)h.call(b,c)&&(a[c]=b[c]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a};c=b("collections/chats").Chats,d=b("views/chat_view").ChatView,e=b("templates/chats"),f=b("templates/userContainer"),a.ChatsView=function(){function b(){this.sendChat=g(this.sendChat,this),this.addOne=g(this.addOne,this),this.render=g(this.render,this),b.__super__.constructor.apply(this,arguments)}var a;return i(b,Backbone.View),b.prototype.id="chats",a=0,b.prototype.initialize=function(){return this.collection.bind("add",this.addOne),this.collection.bind("reset",this.render)},b.prototype.render=function(){return $(this.el).html(e()),this.$(".enter-chat").bind("keypress",g(function(a){return this.sendChat(a)},this)),this.collection.each(g(function(a){return this.addOne(a)},this)),setInterval(function(){return $("span.humaneDate").humaneDates()},5e3),this},b.prototype.addOne=function(a){var b,c;return c=new d({model:a}),b=app.collections.users.get(a.get("uid")),a.get("uid")!==this.lastUserContainer&&(this.$("ul").append(f({user:b})),this.lastUserContainer=b.id),this.$(".chat-messages").filter(":last").append(c.render().el),this},b.prototype.sendChat=function(a){var b,c;if(a.keyCode!==13)return;if($(a.target).val()==="")return;return b=new Date,c="",typeof b.toISOString=="function"?c=b.toISOString():c=ISODateString(b),socket.emit("chat",{date:c,body:$(a.target).val()}),$(a.target).val("")},b}()}).call(this)},"views/connected_view":function(a,b,c){(function(){var c,d,e=function(a,b){return function(){return a.apply(b,arguments)}},f=Object.prototype.hasOwnProperty,g=function(a,b){function d(){this.constructor=a}for(var c in b)f.call(b,c)&&(a[c]=b[c]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a};c=b("collections/users").Users,d=b("templates/user"),a.ConnectedView=function(){function a(){this.render=e(this.render,this),a.__super__.constructor.apply(this,arguments)}return g(a,Backbone.View),a.prototype.initialize=function(){return this.el=$("#boxes-box-chatroom_connected"),this.collection.bind("change:connected",this.render),this.collection.bind("reset",this.render)},a.prototype.render=function(){var a,b,c,e,f;$(this.el).empty(),$(this.el).append("<h2>Connected ("+this.collection.connected().length+")</h2>"),e=this.collection.connected(),f=[];for(b=0,c=e.length;b<c;b++)a=e[b],f.push($(this.el).append(d({user:a})));return f},a}()}).call(this)},"views/home_view":function(a,b,c){(function(){var c,d,e,f=Object.prototype.hasOwnProperty,g=function(a,b){function d(){this.constructor=a}for(var c in b)f.call(b,c)&&(a[c]=b[c]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a};e=b("templates/home"),c=b("views/chats_view").ChatsView,d=b("views/connected_view").ConnectedView,a.HomeView=function(){function a(){a.__super__.constructor.apply(this,arguments)}return g(a,Backbone.View),a.prototype.id="home-view",a.prototype.render=function(){var a,b;return $(this.el).html(e({name:Drupal.settings.chatroom.group.name})),a=new c({collection:app.collections.chats}),$(this.el).append(a.render().el),b=new d({collection:app.collections.users}),b.render(),this},a}()}).call(this)}})