(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{361:function(e,t,n){var r=n(45),o=n(362);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},i=(r(o,a),o.locals?o.locals:{});e.exports=i},362:function(e,t,n){(t=n(46)(!1)).push([e.i,"form.new {\n    display: flex;\n    flex-direction: column;\n\tfont-family:verdana;\n\tfont-size:16px;\n    color:#142170;\t\n}\n\nform.new input, \nform.new select {\n    display: flex;\n    flex: 1;\n\tborder-radius:5px;\n    background:white;\n\tfont-size:16px;\n    margin: 8px;\n\tpadding:8px;\n\tborder: 1px solid gray;\n}\n\nform.new div.buttons {\n    display: flex;\n    flex: 1;\n    flex-direction: row;\n    align-content: center;\n}\n\nform.new div.buttons div {\n    display: flex;\n    flex: 1;\n    margin-top:25px;\n}\n\nform.new div.buttons div a,\nform.new div.buttons div button {\n    margin: auto;\n}\n\nform.new button {\n    font-size:16px;\n    background-color: #61dafb;\n\tborder-radius:5px;\n    color: white;\n    padding: 8px;\n    width: 100px;\n}",""]),e.exports=t},397:function(e,t,n){"use strict";n.r(t);var r=n(5),o=n.n(r),a=n(91),i=n(127),c=n(401),u=n(402);n(361);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){w(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?d(e):t}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(g,e);var t,n,r,l,p=(t=g,function(){var e,n=b(t);if(h()){var r=b(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return y(this,e)});function g(){var e;f(this,g);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return w(d(e=p.call.apply(p,[this].concat(n))),"state",{templates:[]}),e}return n=g,(r=[{key:"componentDidMount",value:function(){this.fetchTemplates(this.props.category)}},{key:"componentDidUpdate",value:function(e){this.props.category!==e.category&&this.fetchTemplates(this.props.category)}},{key:"fetchTemplates",value:function(e){var t=this;a.c(e).then((function(e){return t.setState({templates:e})}))}},{key:"changeTemplate",value:function(e){this.setState({preview:s({},this.state.preview,{template:e})})}},{key:"changeTop",value:function(e){this.setState({preview:s({},this.state.preview,{top:e})})}},{key:"changeBottom",value:function(e){this.setState({preview:s({},this.state.preview,{bottom:e})})}},{key:"save",value:function(){var e=this;a.d(this.props.category,this.state.preview.template,this.state.preview.top,this.state.preview.bottom).then((function(){return e.props.reloadMemes()}))}},{key:"render",value:function(){var e=this;return o.a.createElement("form",{className:"new"},o.a.createElement("select",{placeholder:"Template",required:!0,onChange:function(t){return e.changeTemplate(t.target.value)}},this.state.templates.map((function(e,t){return o.a.createElement("option",{key:t,value:e.fullPath},e.fileName)}))),o.a.createElement(c.a,{id:"outlined-basic",variant:"outlined",label:"Top",placeholder:"Top",required:!0,onChange:function(t){return e.changeTop(t.target.value)}}),o.a.createElement(c.a,{id:"outlined-basic",variant:"outlined",label:"Bottom",placeholder:"Bottom",required:!0,onChange:function(t){return e.changeBottom(t.target.value)}}),this.state.preview&&o.a.createElement(i.a,{meme:this.state.preview,update:new Date}),o.a.createElement("div",{className:"buttons"},o.a.createElement("div",null,o.a.createElement("a",{href:"/"},"Cancel")),o.a.createElement("div",null,o.a.createElement(u.a,{variant:"contained",color:"primary",onClick:function(){return e.save()}},"Save"))))}}])&&m(n.prototype,r),l&&m(n,l),g}(r.Component);t.default=g}}]);