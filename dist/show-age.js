/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nlet dayjs = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\")\nfunction getDays (year) {\n  let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]\n  if ((year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0)) {\n    days[1] = 29\n  }\n  return days\n}\nmodule.exports = function (birthday, options = {}) {\n    options = JSON.parse(JSON.stringify(options))\n    let now = options.now || Date.now();\n    let defaultVal = options.defaultVal || '--'\n    let IntegerAge = options.IntegerAge || 5\n    options.i18n = options.i18n || {}\n    i18n = Object.assign({\n      year: '岁',\n      month:'月',\n      days: '天',\n      hour:'小时'\n    },options.i18n)\n\n    if (dayjs(birthday).isValid() && dayjs(now).isValid()) {\n        if (dayjs(now).diff(birthday) < 0) return defaultVal\n        let obj = {}\n        let current = {\n          hour: dayjs(now).hour(),\n          date: dayjs(now).date(),\n          month: dayjs(now).month() + 1,\n          year: dayjs(now).year()\n        }\n        let birth = {\n          hour: dayjs(birthday).hour(),\n          date: dayjs(birthday).date(),\n          month: dayjs(birthday).month() + 1,\n          year: dayjs(birthday).year()\n        }\n        if (current.hour - birth.hour >= 0) {\n          obj.hour = current.hour - birth.hour\n        } else {\n          obj.hour = current.hour - birth.hour + 24\n          current.date--\n        }\n        if (current.date - birth.date >= 0) {\n          obj.date = current.date - birth.date\n        } else {\n          let days = getDays(dayjs(birthday).year())\n          obj.date = days[birth.month - 1] + current.date - birth.date\n          current.month--\n        }\n        if (current.month - birth.month >= 0) {\n          obj.month = current.month - birth.month\n        } else {\n          obj.month = current.month - birth.month + 12\n          current.year--\n        }\n        obj.year = current.year - birth.year\n        let str = ''\n        if (obj.year > IntegerAge) {\n          return obj.year + i18n.year\n        } else if (obj.year !== 0) {\n          str = obj.year + i18n.year\n        }\n        if (obj.month > 0 && obj.date > 0) return str + obj.month + i18n.month + obj.date + i18n.days\n        if (obj.date === 0 && obj.month > 0) return str + obj.month + i18n.month\n        if (obj.date > 0 && obj.month === 0) str = str + obj.date + i18n.days\n        if (obj.year === 0 && obj.month === 0 && obj.hour !== 0) {\n          str = str + obj.hour + i18n.hour\n        }\n        if (!str) str = '1' + i18n.hour\n        return str\n      } else {\n        return defaultVal\n      }\n}\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("!function(t,n){ true?module.exports=n():undefined}(this,function(){\"use strict\";var t=\"millisecond\",n=\"second\",e=\"minute\",r=\"hour\",i=\"day\",s=\"week\",u=\"month\",o=\"quarter\",a=\"year\",h=/^(\\d{4})-?(\\d{1,2})-?(\\d{0,2})[^0-9]*(\\d{1,2})?:?(\\d{1,2})?:?(\\d{1,2})?.?(\\d{1,3})?$/,f=/\\[([^\\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=function(t,n,e){var r=String(t);return!r||r.length>=n?t:\"\"+Array(n+1-r.length).join(e)+t},d={s:c,z:function(t){var n=-t.utcOffset(),e=Math.abs(n),r=Math.floor(e/60),i=e%60;return(n<=0?\"+\":\"-\")+c(r,2,\"0\")+\":\"+c(i,2,\"0\")},m:function(t,n){var e=12*(n.year()-t.year())+(n.month()-t.month()),r=t.clone().add(e,u),i=n-r<0,s=t.clone().add(e+(i?-1:1),u);return Number(-(e+(n-r)/(i?r-s:s-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:a,w:s,d:i,h:r,m:e,s:n,ms:t,Q:o}[h]||String(h||\"\").toLowerCase().replace(/s$/,\"\")},u:function(t){return void 0===t}},$={name:\"en\",weekdays:\"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday\".split(\"_\"),months:\"January_February_March_April_May_June_July_August_September_October_November_December\".split(\"_\")},l=\"en\",m={};m[l]=$;var y=function(t){return t instanceof v},M=function(t,n,e){var r;if(!t)return l;if(\"string\"==typeof t)m[t]&&(r=t),n&&(m[t]=n,r=t);else{var i=t.name;m[i]=t,r=i}return e||(l=r),r},g=function(t,n,e){if(y(t))return t.clone();var r=n?\"string\"==typeof n?{format:n,pl:e}:n:{};return r.date=t,new v(r)},D=d;D.l=M,D.i=y,D.w=function(t,n){return g(t,{locale:n.$L,utc:n.$u,$offset:n.$offset})};var v=function(){function c(t){this.$L=this.$L||M(t.locale,null,!0),this.parse(t)}var d=c.prototype;return d.parse=function(t){this.$d=function(t){var n=t.date,e=t.utc;if(null===n)return new Date(NaN);if(D.u(n))return new Date;if(n instanceof Date)return new Date(n);if(\"string\"==typeof n&&!/Z$/i.test(n)){var r=n.match(h);if(r)return e?new Date(Date.UTC(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)):new Date(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)}return new Date(n)}(t),this.init()},d.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},d.$utils=function(){return D},d.isValid=function(){return!(\"Invalid Date\"===this.$d.toString())},d.isSame=function(t,n){var e=g(t);return this.startOf(n)<=e&&e<=this.endOf(n)},d.isAfter=function(t,n){return g(t)<this.startOf(n)},d.isBefore=function(t,n){return this.endOf(n)<g(t)},d.$g=function(t,n,e){return D.u(t)?this[n]:this.set(e,t)},d.year=function(t){return this.$g(t,\"$y\",a)},d.month=function(t){return this.$g(t,\"$M\",u)},d.day=function(t){return this.$g(t,\"$W\",i)},d.date=function(t){return this.$g(t,\"$D\",\"date\")},d.hour=function(t){return this.$g(t,\"$H\",r)},d.minute=function(t){return this.$g(t,\"$m\",e)},d.second=function(t){return this.$g(t,\"$s\",n)},d.millisecond=function(n){return this.$g(n,\"$ms\",t)},d.unix=function(){return Math.floor(this.valueOf()/1e3)},d.valueOf=function(){return this.$d.getTime()},d.startOf=function(t,o){var h=this,f=!!D.u(o)||o,c=D.p(t),d=function(t,n){var e=D.w(h.$u?Date.UTC(h.$y,n,t):new Date(h.$y,n,t),h);return f?e:e.endOf(i)},$=function(t,n){return D.w(h.toDate()[t].apply(h.toDate(),(f?[0,0,0,0]:[23,59,59,999]).slice(n)),h)},l=this.$W,m=this.$M,y=this.$D,M=\"set\"+(this.$u?\"UTC\":\"\");switch(c){case a:return f?d(1,0):d(31,11);case u:return f?d(1,m):d(0,m+1);case s:var g=this.$locale().weekStart||0,v=(l<g?l+7:l)-g;return d(f?y-v:y+(6-v),m);case i:case\"date\":return $(M+\"Hours\",0);case r:return $(M+\"Minutes\",1);case e:return $(M+\"Seconds\",2);case n:return $(M+\"Milliseconds\",3);default:return this.clone()}},d.endOf=function(t){return this.startOf(t,!1)},d.$set=function(s,o){var h,f=D.p(s),c=\"set\"+(this.$u?\"UTC\":\"\"),d=(h={},h[i]=c+\"Date\",h.date=c+\"Date\",h[u]=c+\"Month\",h[a]=c+\"FullYear\",h[r]=c+\"Hours\",h[e]=c+\"Minutes\",h[n]=c+\"Seconds\",h[t]=c+\"Milliseconds\",h)[f],$=f===i?this.$D+(o-this.$W):o;if(f===u||f===a){var l=this.clone().set(\"date\",1);l.$d[d]($),l.init(),this.$d=l.set(\"date\",Math.min(this.$D,l.daysInMonth())).toDate()}else d&&this.$d[d]($);return this.init(),this},d.set=function(t,n){return this.clone().$set(t,n)},d.get=function(t){return this[D.p(t)]()},d.add=function(t,o){var h,f=this;t=Number(t);var c=D.p(o),d=function(n){var e=g(f);return D.w(e.date(e.date()+Math.round(n*t)),f)};if(c===u)return this.set(u,this.$M+t);if(c===a)return this.set(a,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(h={},h[e]=6e4,h[r]=36e5,h[n]=1e3,h)[c]||1,l=this.$d.getTime()+t*$;return D.w(l,this)},d.subtract=function(t,n){return this.add(-1*t,n)},d.format=function(t){var n=this;if(!this.isValid())return\"Invalid Date\";var e=t||\"YYYY-MM-DDTHH:mm:ssZ\",r=D.z(this),i=this.$locale(),s=this.$H,u=this.$m,o=this.$M,a=i.weekdays,h=i.months,c=function(t,r,i,s){return t&&(t[r]||t(n,e))||i[r].substr(0,s)},d=function(t){return D.s(s%12||12,t,\"0\")},$=i.meridiem||function(t,n,e){var r=t<12?\"AM\":\"PM\";return e?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:D.s(o+1,2,\"0\"),MMM:c(i.monthsShort,o,h,3),MMMM:h[o]||h(this,e),D:this.$D,DD:D.s(this.$D,2,\"0\"),d:String(this.$W),dd:c(i.weekdaysMin,this.$W,a,2),ddd:c(i.weekdaysShort,this.$W,a,3),dddd:a[this.$W],H:String(s),HH:D.s(s,2,\"0\"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:D.s(u,2,\"0\"),s:String(this.$s),ss:D.s(this.$s,2,\"0\"),SSS:D.s(this.$ms,3,\"0\"),Z:r};return e.replace(f,function(t,n){return n||l[t]||r.replace(\":\",\"\")})},d.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},d.diff=function(t,h,f){var c,d=D.p(h),$=g(t),l=6e4*($.utcOffset()-this.utcOffset()),m=this-$,y=D.m(this,$);return y=(c={},c[a]=y/12,c[u]=y,c[o]=y/3,c[s]=(m-l)/6048e5,c[i]=(m-l)/864e5,c[r]=m/36e5,c[e]=m/6e4,c[n]=m/1e3,c)[d]||m,f?y:D.a(y)},d.daysInMonth=function(){return this.endOf(u).$D},d.$locale=function(){return m[this.$L]},d.locale=function(t,n){if(!t)return this.$L;var e=this.clone(),r=M(t,n,!0);return r&&(e.$L=r),e},d.clone=function(){return D.w(this.$d,this)},d.toDate=function(){return new Date(this.valueOf())},d.toJSON=function(){return this.isValid()?this.toISOString():null},d.toISOString=function(){return this.$d.toISOString()},d.toString=function(){return this.$d.toUTCString()},c}();return g.prototype=v.prototype,g.extend=function(t,n){return t(n,v,g),g},g.locale=M,g.isDayjs=y,g.unix=function(t){return g(1e3*t)},g.en=m[l],g.Ls=m,g});\n\n\n//# sourceURL=webpack:///./node_modules/dayjs/dayjs.min.js?");

/***/ })

/******/ });