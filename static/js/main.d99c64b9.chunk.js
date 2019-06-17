(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports=n(25)},18:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),i=(n(18),n(1)),l=n.n(i),u=n(2),s=n(8),m=n(9),h=n(12),p=n(10),d=n(3),f=n(11),v=function(e){return r.a.createElement("div",{className:"title-container"},r.a.createElement("h1",null,"Weather App"),r.a.createElement("select",{onChange:e.getTempUnits},r.a.createElement("option",{value:"c"},"\xb0C"),r.a.createElement("option",{value:"f"},"\xb0F")))},y=function(e){return r.a.createElement("form",{className:"form-container",onSubmit:e.loadWeather},r.a.createElement("input",{type:"text",name:"city",placeholder:"City"}),r.a.createElement("input",{type:"text",name:"country",placeholder:"Country"}),r.a.createElement("button",null,"Get Weather"))},w=function(e){return r.a.createElement("div",null,e.city&&e.country&&r.a.createElement("h1",null,e.city,", ",e.country," Forecast")&&r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",{className:"table-headers"},r.a.createElement("th",null,"TIME"),r.a.createElement("th",null,"CONDITION"),r.a.createElement("th",null,"TEMP"),r.a.createElement("th",null,"HUMIDITY"),r.a.createElement("th",null,"WIND"))),r.a.createElement("tbody",null,e.weatherData.list.map(function(e,t){return r.a.createElement("tr",{className:"table-rows",key:t},r.a.createElement("td",null,(n=e.dt_txt,r.a.createElement("div",null,r.a.createElement("label",null,new Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric"}).format(new Date(n))),r.a.createElement("br",null),r.a.createElement("label",null,new Intl.DateTimeFormat("en-US",{weekday:"short"}).format(new Date(n)))))),r.a.createElement("td",null,function(e){var t="http://openweathermap.org/img/w/".concat(e.icon,".png");return r.a.createElement("img",{src:t,alt:"Weather icon",title:e.description})}(e.weather[0])),r.a.createElement("td",null,e.main.temp,r.a.createElement("sup",null,"o")),r.a.createElement("td",null,e.main.humidity),r.a.createElement("td",null,e.wind.speed));var n}))),e.error&&r.a.createElement("p",{className:"weather_error"},e.error))},E=(n(20),"c0c1c6434e513470b3d0d37a0fb06524"),g={c:"metric",f:"imperial"},b=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(h.a)(this,Object(p.a)(t).call(this,e))).showPosition=function(){var e=Object(u.a)(l.a.mark(function e(t){var a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=6;break}return n.setState({latitude:t.coords.latitude,longitude:t.coords.longitude}),e.next=4,n.retrieveWeatherWithPosition();case 4:a=e.sent,n.setState({city:a.city.name,country:a.city.country,weatherData:a,error:""});case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.getTempUnits=function(e){e.preventDefault(),n.setState({unit:g[e.target.value],error:""})},n.retrieveWeather=function(){var e=Object(u.a)(l.a.mark(function e(t,a){var r,c;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.openweathermap.org/data/2.5/forecast?q=".concat(t,",").concat(a,"&units=").concat(n.state.unit,"&appid=").concat(E));case 2:return r=e.sent,e.next=5,r.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),n.retrieveWeatherWithPosition=Object(u.a)(l.a.mark(function e(){var t,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.openweathermap.org/data/2.5/forecast?lat=".concat(n.state.latitude,"&lon=").concat(n.state.longitude,"&units=").concat(n.state.unit,"&appid=").concat(E));case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}},e)})),n.getWeather=function(){var e=Object(u.a)(l.a.mark(function e(t){var a,r,c;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=t.target.elements.city.value,r=t.target.elements.country.value,e.next=5,n.retrieveWeather(a,r);case 5:c=e.sent,a&&r?n.setState({city:c.city.name,country:c.city.country,weatherData:c,error:""}):n.setState({error:"Please enter both city and country"});case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.state={latitude:void 0,longitude:void 0,unit:"metric",city:void 0,country:void 0,weatherData:{},error:void 0},n.getTempUnits=n.getTempUnits.bind(Object(d.a)(n)),n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){navigator.geolocation?navigator.geolocation.getCurrentPosition(this.showPosition):this.setState({error:"Couldn't retrieve your location. Please enter both city and country"})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v,{getTempUnits:this.getTempUnits}),r.a.createElement(y,{loadWeather:this.getWeather}),r.a.createElement(w,{city:this.state.city,country:this.state.country,weatherData:this.state.weatherData,error:this.state.error}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(23),n(24);o.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,1,2]]]);
//# sourceMappingURL=main.d99c64b9.chunk.js.map