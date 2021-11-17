(this["webpackJsonptrivia-test"]=this["webpackJsonptrivia-test"]||[]).push([[0],{40:function(e,t,a){e.exports=a(58)},49:function(e,t,a){},50:function(e,t,a){},53:function(e,t,a){},55:function(e,t){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(21),s=a.n(i),o=a(22),c=a(24),l=(a(49),a(18)),u=(a(50),a(23)),d=a(3),h=a.n(d),m=a(4),p=a(5),b=a(7),v=a(6),f=a(2),y=a(8),g=function(e){function t(){return Object(m.a)(this,t),Object(b.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.value,a=e.id,n=e.onChange,i=e.dataTestId,s=e.text;return r.a.createElement("label",{htmlFor:a},s,r.a.createElement("input",{type:"text",value:t,id:a,name:a,onChange:n,"data-testid":"input-".concat(i)}))}}]),t}(n.Component),O=function(){var e,t;return h.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,h.a.awrap(fetch("https://opentdb.com/api_token.php?command=request"));case 2:return e=a.sent,a.next=5,h.a.awrap(e.json());case 5:return t=a.sent,a.abrupt("return",t);case 7:case"end":return a.stop()}}))},k=a(15),E=a(16);function j(){var e=Object(k.a)(["\n  background-color: rgba(16, 158, 16, 0.8);\n  border: black 1px solid;\n  display: flex;\n  flex-direction: column;\n  height: 50%;\n  justify-content: center;\n  text-align: center;\n  margin: auto;\n  width: 400px;\n"]);return j=function(){return e},e}var S=E.a.main(j()),x=(a(53),function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(b.a)(this,Object(v.a)(t).call(this))).state={email:"",name:""},e.handleChange=e.handleChange.bind(Object(f.a)(e)),e.validation=e.validation.bind(Object(f.a)(e)),e.saveToken=e.saveToken.bind(Object(f.a)(e)),e.handleClick=e.handleClick.bind(Object(f.a)(e)),e.handleClickConfig=e.handleClickConfig.bind(Object(f.a)(e)),e}return Object(y.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.saveToken()}},{key:"validation",value:function(){var e=this.state,t=e.email,a=e.name;return!(/\S+@\S+\.\S+/.test(t)&&a.length>=2)}},{key:"saveToken",value:function(){var e;return h.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.awrap(O());case 2:e=t.sent,localStorage.setItem("token",e.token);case 4:case"end":return t.stop()}}))}},{key:"handleClick",value:function(e){e.preventDefault(),this.props.history.push("/trivia/game");var t=this.state,a=t.name,n=t.email;localStorage.setItem("state",JSON.stringify({player:{name:a,assertions:0,score:0,gravatarEmail:n}}))}},{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(u.a)({},a,n))}},{key:"render",value:function(){var e=this.state,t=e.email,a=e.name;return r.a.createElement("div",{className:"divLogin"},r.a.createElement(S,null,r.a.createElement("h1",{className:"fs-2 font-monospace text-decoration-underline"},"TRIVIA GAME"),r.a.createElement(g,{text:"Nome: ",value:a,onChange:this.handleChange,dataTestId:"player-name",id:"name"}),r.a.createElement(g,{text:"Email: ",value:t,onChange:this.handleChange,dataTestId:"gravatar-email",id:"email"}),r.a.createElement("button",{type:"button","data-testid":"btn-play",disabled:this.validation(),onClick:this.handleClick},"Jogar")))}}]),t}(n.Component)),w=a(36),C=a.n(w);function Q(){var e=Object(k.a)(["\n  align-items: center;\n  background-color: rgba(16, 158, 16, 0.8);\n  border: black 1px solid;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  text-align: center;\n  margin: auto;\n"]);return Q=function(){return e},e}var T=E.a.header(Q()),R=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(b.a)(this,Object(v.a)(t).call(this))).state={url:""},e.getPlayerFromLocalStorage=e.getPlayerFromLocalStorage.bind(Object(f.a)(e)),e.fetchAvatar=e.fetchAvatar.bind(Object(f.a)(e)),e}return Object(y.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.getPlayerFromLocalStorage()}},{key:"getPlayerFromLocalStorage",value:function(){var e=localStorage.getItem("state"),t=JSON.parse(e).player,a=t.name,n=t.gravatarEmail,r=t.score;return this.fetchAvatar(n),{name:a,score:r}}},{key:"fetchAvatar",value:function(e){var t,a,n;return h.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t=C()(e).toString(),r.next=3,h.a.awrap(fetch("https://www.gravatar.com/avatar/".concat(t)));case 3:return a=r.sent,r.next=6,h.a.awrap(a.url);case 6:n=r.sent,this.setState({url:n});case 8:case"end":return r.stop()}}),null,this)}},{key:"render",value:function(){var e=this.state.url,t=this.getPlayerFromLocalStorage(),a=t.name,n=t.score;return r.a.createElement(T,null,r.a.createElement("img",{"data-testid":"header-profile-picture",alt:"profilePhoto",src:e}),r.a.createElement("h3",{"data-testid":"header-player-name"},a),r.a.createElement("h4",{"data-testid":"header-score"},n))}}]),t}(n.Component),I=a(12),N=function(e){var t,a;return h.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,h.a.awrap(fetch("https://opentdb.com/api.php?amount=5&token=".concat(e)));case 2:return t=n.sent,n.next=5,h.a.awrap(t.json());case 5:return a=n.sent,n.abrupt("return",a);case 7:case"end":return n.stop()}}))},U=function(e){return{type:"QUESTIONS_REQUEST_ERROR",payload:e}},P=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(b.a)(this,Object(v.a)(t).call(this))).state={idQuestion:0,isAnswered:!1,time:30,result:0,shouldRedirect:!1,player:{name:"",assertions:0,score:0,gravatarEmail:""}},e.findQuestion=e.findQuestion.bind(Object(f.a)(e)),e.renderQuestion=e.renderQuestion.bind(Object(f.a)(e)),e.handleClick=e.handleClick.bind(Object(f.a)(e)),e.updateTime=e.updateTime.bind(Object(f.a)(e)),e.pointsCal=e.pointsCal.bind(Object(f.a)(e)),e.setLocalPlayer=e.setLocalPlayer.bind(Object(f.a)(e)),e.nextQuestion=e.nextQuestion.bind(Object(f.a)(e)),e}return Object(y.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.findQuestion(),setInterval((function(){return e.updateTime()}),1e3)}},{key:"setLocalPlayer",value:function(){var e=this.state.player;localStorage.setItem("state",JSON.stringify({player:e}))}},{key:"findQuestion",value:function(){var e,t,a,n,r,i,s;return h.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return e=this.props.getQuestions,t=localStorage.getItem("token"),o.next=4,h.a.awrap(e(t));case 4:return a=o.sent,n=localStorage.getItem("state"),r=JSON.parse(n).player,i=r.name,s=r.gravatarEmail,this.setState({player:{assertions:0,score:0,name:i,gravatarEmail:s}}),o.abrupt("return",a);case 9:case"end":return o.stop()}}),null,this)}},{key:"pointsCal",value:function(e){var t=this.state,a=t.time,n=t.idQuestion,r=this.props.questions.results[n].difficulty,i=0;if("true"===e){switch(r){case"easy":i=10+1*a;break;case"medium":i=10+2*a;break;case"hard":i=10+a*Number("3");break;default:console.log("erro no switch")}this.setState((function(e){return{player:Object(I.a)({},e.player,{assertions:e.player.assertions+1})}}))}return i}},{key:"nextQuestion",value:function(){4===this.state.idQuestion&&this.setState({shouldRedirect:!0}),this.setState((function(e){return{idQuestion:e.idQuestion+1,isAnswered:!1,time:30}}))}},{key:"handleClick",value:function(e){var t=this,a=this.pointsCal(e);this.setState((function(e){return{isAnswered:!0,time:0,result:e.result+a,player:Object(I.a)({},e.player,{score:e.result+a,assertions:e.player.assertions})}}),(function(){t.setLocalPlayer()}))}},{key:"updateTime",value:function(){this.state.time>0?this.setState((function(e){return{time:e.time-1}})):this.setState({isAnswered:!0})}},{key:"renderQuestion",value:function(){var e=this,t=this.state,a=t.idQuestion,n=t.isAnswered,i=this.props.questions.results,s={border:"3px solid rgb(255, 0, 0)"},o=i[a],c=o.category,l=o.question,u=o.correct_answer,d=o.incorrect_answers,h=o.type,m=l.replace(/&quot;/gi,"").replace(/&#039;/gi,"").replace(/&eacute/gi,"").replace(/&amp/gi,"");return r.a.createElement("div",null,r.a.createElement("h4",{className:"text-decoration-underline"},c),r.a.createElement("h3",{"data-testid":"question-text"},m),"boolean"===h?r.a.createElement("button",{"data-testid":"wrong-answer-0",type:"button",disabled:n,style:n?s:null,onClick:this.handleClick},d):d.map((function(t,a){return r.a.createElement("button",{"data-testid":"wrong-answer-".concat(a),key:a,type:"button",value:t,disabled:n,style:n?s:null,onClick:e.handleClick},t)})),r.a.createElement("button",{"data-testid":"correct-answer",type:"button",disabled:n,style:n?{border:"3px solid rgb(6, 240, 15)"}:null,onClick:function(){return e.handleClick("true")}},u))}},{key:"render",value:function(){var e=this.state,t=e.isAnswered,a=e.time,n=e.shouldRedirect,i=this.props.questions.results;return n?r.a.createElement(l.a,{to:"/trivia/feedback"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"questions"},i?this.renderQuestion():null),r.a.createElement("div",{className:"timer"},"Tempo: ".concat(a)),r.a.createElement("button",{type:"button",className:"button-next","data-testid":"btn-next",style:t?null:{display:"none"},onClick:this.nextQuestion},"P\u0155oxima"))}}]),t}(n.Component),_=Object(c.b)((function(e){return{email:e.loginReducer.email,name:e.loginReducer.name,questions:e.questionsReducer.questions}}),(function(e){return{getQuestions:function(t){return e((a=t,function(e){var t;return h.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e({type:"QUESTIONS_REQUEST"}),n.prev=1,n.next=4,h.a.awrap(N(a));case 4:return t=n.sent,n.abrupt("return",e({type:"QUESTIONS_REQUEST_SUCCESS",payload:t}));case 8:return n.prev=8,n.t0=n.catch(1),n.abrupt("return",e(U(n.t0)));case 11:case"end":return n.stop()}}),null,null,[[1,8]])}));var a}}}))(P);function q(){var e=Object(k.a)(["\n  display: flex;\n  background-color: black;\n  color: white;\n  flex-direction: column;\n  min-height: 600px;\n  justify-content: center;\n  text-align: center;\n  margin: auto;\n"]);return q=function(){return e},e}var L=E.a.div(q());function A(){var e=Object(k.a)(["\n  min-height: 600px;\n  margin: auto;\n"]);return A=function(){return e},e}var F=E.a.main(A()),J=function(e){function t(){return Object(m.a)(this,t),Object(b.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(F,null,r.a.createElement(R,null),r.a.createElement(L,null,r.a.createElement(_,null)))}}]),t}(n.Component),M=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(b.a)(this,Object(v.a)(t).call(this))).handleClick=e.handleClick.bind(Object(f.a)(e)),e}return Object(y.a)(t,e),Object(p.a)(t,[{key:"handleClick",value:function(){this.props.history.push("/trivia")}},{key:"render",value:function(){var e=this.props.dataTestId;return r.a.createElement("button",{type:"button",onClick:this.handleClick,"data-testid":e},"Jogar novamente")}}]),t}(n.Component),D=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(b.a)(this,Object(v.a)(t).call(this))).state={assertions:0,score:0,text:""},e.getPlayerFromLocalStorage=e.getPlayerFromLocalStorage.bind(Object(f.a)(e)),e.feedbackRender=e.feedbackRender.bind(Object(f.a)(e)),e}return Object(y.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.getPlayerFromLocalStorage()}},{key:"getPlayerFromLocalStorage",value:function(){var e=this,t=localStorage.getItem("state"),a=JSON.parse(t).player,n=a.assertions,r=a.score;this.setState({score:r,assertions:n},(function(){return e.feedbackRender()}))}},{key:"feedbackRender",value:function(){var e=this.state.assertions;console.log(e),e<3?this.setState({text:"Podia ser melhor..."}):this.setState({text:"Mandou bem!"})}},{key:"render",value:function(){var e=this.props.history,t=this.state,a=t.text,n=t.score,i=t.assertions;return r.a.createElement("div",null,r.a.createElement(R,null),r.a.createElement("p",{"data-testid":"feedback-text"},"chegou"),r.a.createElement("div",{"data-testid":"feedback-text"},a),r.a.createElement("div",{"data-testid":"feedback-total-score"},n),r.a.createElement("div",{"data-testid":"feedback-total-question"},i),r.a.createElement(M,{history:e,dataTestId:"btn-play-again"}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W=a(14),B=a(38),K=a(39),G={email:"",name:""},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOKEN_REQUEST":return Object(I.a)({},e);case"TOKEN_REQUEST_SUCCESS":return Object(I.a)({},e,{token:t.payload});default:return e}},$={questions:[]},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"QUESTIONS_REQUEST":return Object(I.a)({},e);case"QUESTIONS_REQUEST_SUCCESS":return Object(I.a)({},e,{questions:t.payload});case"QUESTIONS_REQUEST_ERROR":return Object(I.a)({},e,{error:t.error});default:return Object(I.a)({},e)}},H=Object(W.combineReducers)({loginReducer:V,questionsReducer:z}),X=Object(W.createStore)(H,Object(B.composeWithDevTools)(Object(W.applyMiddleware)(K.a)));window.Cypress&&(window.store=X);var Y=X;a(57);s.a.render(r.a.createElement(o.a,null,r.a.createElement(c.a,{store:Y},r.a.createElement((function(){return r.a.createElement("div",{className:"App"},r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:"/trivia",component:x}),r.a.createElement(l.b,{path:"/trivia/game",component:J}),r.a.createElement(l.b,{path:"/trivia/feedback",component:D})))}),null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[40,1,2]]]);
//# sourceMappingURL=main.642b2c87.chunk.js.map