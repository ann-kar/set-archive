(this.webpackJsonpset=this.webpackJsonpset||[]).push([[0],[,,,,,,,,,,,,function(t,e,s){},function(t,e,s){},function(t,e,s){},,function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){"use strict";s.r(e);var n=s(1),a=s.n(n),i=s(7),r=s.n(i),c=(s(12),s(13),s(2)),o=s(3),l=s(5),u=s(4),d=(s(14),s(0)),h=function(t){Object(l.a)(s,t);var e=Object(u.a)(s);function s(){var t;Object(c.a)(this,s);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={newGame:!1,results:!1,rules:!1,position:!0},t.newGame=function(){t.setState((function(t){return{newGame:!t.newGame,rules:!1,results:!1}}))},t.rules=function(){t.setState((function(t){return{rules:!t.rules,newGame:!1,results:!1}}))},t.results=function(){t.setState((function(t){return{results:!t.results,newGame:!1,rules:!1}}))},t}return Object(o.a)(s,[{key:"componentDidUpdate",value:function(t,e){for(var s=this.state,n=s.newGame,a=s.results,i=s.rules,r=0,c=["newGame","results","rules"];r<c.length;r++){var o=c[r];this.state[o]!==e[o]&&(this.state[o]?this.setState({position:!1}):i||n||a||this.setState({position:!0}))}}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"Main",children:[this.state.newGame&&Object(d.jsx)(x,{}),this.state.results&&Object(d.jsx)(y,{}),this.state.rules&&Object(d.jsx)(k,{}),Object(d.jsx)(j,{newGame:this.newGame,results:this.results,rules:this.rules,position:this.state.position})]})}}]),s}(a.a.Component);s(16),s(17);var f=function(t){var e,s;s=t.position?"center":"right";var n={id10:["newGame","new game"],id11:["results","results"],id12:["rules","rules"]};return Object.keys(n).find((function(e){return e===t.id}))&&(e=Object(d.jsx)("button",{className:"button ".concat(s),onClick:t[n[t.id][0]],children:n[t.id][1]})),Object(d.jsx)("div",{className:"MenuCard ".concat(s),id:t.id,children:e||"SET"})},j=function(t){Object(l.a)(s,t);var e=Object(u.a)(s);function s(){return Object(c.a)(this,s),e.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){var t=this;return Object(d.jsxs)("nav",{className:"Menu",children:[Array(9).fill("x").map((function(e,s){return Object(d.jsx)(f,{id:"id"+s,position:t.props.position},s)})),Object(d.jsx)(f,{position:this.props.position,id:"id10",newGame:this.props.newGame}),Object(d.jsx)(f,{position:this.props.position,id:"id11",results:this.props.results}),Object(d.jsx)(f,{position:this.props.position,id:"id12",rules:this.props.rules})]})}}]),s}(a.a.Component),m=(s(18),s(19),function(t){return Object(d.jsx)("button",{className:"CheckButton",onClick:t.checkButton,children:"check for sets"})}),p=(s(20),function(t){Object(l.a)(s,t);var e=Object(u.a)(s);function s(){var t;Object(c.a)(this,s);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={inactiveClass:!0,activeClass:!1,highlightClass:!1},t}return Object(o.a)(s,[{key:"componentDidUpdate",value:function(t,e){var s=this.props,n=s.active,a=s.id;n.length||this.state.inactiveClass?3===n.length&&n.find((function(t){return t===a}))&&!this.state.highlightClass?this.setState({highlightClass:!0,activeClass:!1,inactiveClass:!1}):n.find((function(t){return t===a}))?this.state.activeClass||this.setState({activeClass:!0,inactiveClass:!1}):n.find((function(t){return t!==a}))&&(this.state.inactiveClass||this.setState({activeClass:!1,inactiveClass:!0})):this.setState({inactiveClass:!0,activeClass:!1,highlightClass:!1})}},{key:"render",value:function(){var t=this.props.id;return t?Object(d.jsx)("div",{className:"GameCard \n            ".concat(!!this.state.activeClass&&"active"," \n            ").concat(!!this.state.inactiveClass&&"inactive","\n            ").concat(!!this.state.highlightClass&&"highlight"," "),id:t,onClick:this.props.cardClickHandler,children:Array(parseInt(t[3])+1).fill("x").map((function(e,s){return Object(d.jsx)(b,{id:t},s)}))}):Object(d.jsx)("div",{})}}]),s}(a.a.Component));s(21);var v=function(){return Object(d.jsx)("svg",{className:"SVG",width:"0",height:"0",children:Object(d.jsxs)("defs",{children:[Object(d.jsxs)("pattern",{id:"pattern-red",width:"30",height:"30",patternUnits:"userSpaceOnUse",patternTransform:"rotate(0 50 50)",children:[Object(d.jsx)("rect",{width:"15",height:"30",x:"0",y:"0",className:"red fill"}),Object(d.jsx)("rect",{width:"15",height:"30",x:"15",y:"0",fill:"white"})]}),Object(d.jsxs)("pattern",{id:"pattern-green",width:"30",height:"30",patternUnits:"userSpaceOnUse",patternTransform:"rotate(0 50 50)",children:[Object(d.jsx)("rect",{width:"15",height:"30",x:"0",y:"0",className:"green fill"}),Object(d.jsx)("rect",{width:"15",height:"30",x:"15",y:"0",fill:"white"})]}),Object(d.jsxs)("pattern",{id:"pattern-violet",width:"30",height:"30",patternUnits:"userSpaceOnUse",patternTransform:"rotate(0 50 50)",children:[Object(d.jsx)("rect",{width:"15",height:"30",x:"0",y:"0",className:"violet fill"}),Object(d.jsx)("rect",{width:"15",height:"30",x:"15",y:"0",fill:"white"})]})]})})},b=(s(22),function(t){Object(l.a)(s,t);var e=Object(u.a)(s);function s(){var t;Object(c.a)(this,s);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={classes:""},t.setClasses=function(){var e=["green","red","violet"][t.props.id[0]]+" "+["diamond","squiggle","stadium"][t.props.id[1]]+" "+["blank","full","gradient"][t.props.id[2]];t.setState({classes:e})},t}return Object(o.a)(s,[{key:"componentDidMount",value:function(){this.setClasses()}},{key:"componentDidUpdate",value:function(t){this.props.id!==t.id&&this.setClasses()}},{key:"render",value:function(){return Object(d.jsx)("svg",{className:"Symbol",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 480 640","data-id":this.props.id,children:Object(d.jsx)("path",{className:this.state.classes,"data-id":this.props.id})})}}]),s}(a.a.Component)),O=(s(23),function(t){Object(l.a)(s,t);var e=Object(u.a)(s);function s(){var t;Object(c.a)(this,s);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={minutes:0,seconds:0,centiseconds:0,message:!1,isOn:!0},t.stopTimer=function(){clearInterval(t.timerID),t.state.isOn&&t.setState({isOn:!1})},t.addSecsAndMins=function(){t.state.centiseconds>=99&&t.setState({centiseconds:0,seconds:t.state.seconds+1}),t.state.seconds>=60&&t.setState({seconds:0,minutes:t.state.minutes+1})},t.hideMessage=function(){t.messageTimeout=setTimeout((function(){return t.setState({message:!1})}),500)},t}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var t=this;this.timerID=setInterval((function(){return t.setState({centiseconds:t.state.centiseconds+1},t.addSecsAndMins)}),10)}},{key:"componentDidUpdate",value:function(t){var e=this;this.props.win&&this.stopTimer(),t.extraSecs!==this.props.extraSecs&&this.state.isOn&&this.setState({seconds:this.state.seconds+3,message:!0},(function(){return e.hideMessage()}))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID),clearInterval(this.messageTimeout)}},{key:"render",value:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"Timer",onClick:this.stopTimer,children:Object(d.jsx)("div",{className:"Timer__display",children:"".concat(this.state.minutes.toString().padStart(2,"0")," : \n                          ").concat(this.state.seconds.toString().padStart(2,"0")," : \n                          ").concat(this.state.centiseconds.toString().padStart(2,"0"))})}),this.state.message?Object(d.jsx)("div",{className:"Timer__message",children:" + 3 seconds"}):null]})}}]),s}(a.a.Component)),g=(s(24),function(t){Object(l.a)(s,t);var e=Object(u.a)(s);function s(){return Object(c.a)(this,s),e.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"Victory fade-in",children:Object(d.jsx)("h2",{className:"Victory__text",children:"you've found them all!"})})}}]),s}(a.a.Component)),x=function(t){Object(l.a)(s,t);var e=Object(u.a)(s);function s(){var t;Object(c.a)(this,s);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={deck:[],active:[],win:!1,extraSecs:0},t.generateDeck=function(){for(var t=[],e=["0","1","2"],s=0;s<3;s++)for(var n=0;n<3;n++)for(var a=0;a<3;a++)for(var i=0;i<3;i++)t.push(e[s]+e[n]+e[a]+e[i]);return t},t.threeCardsHighlighted=function(){t.checkIfSet(t.state.active)?t.generateNewCards():setTimeout((function(){return t.setState({active:[]})}),500)},t.checkIfSet=function(t){return t.map((function(t){return Number(t)})).reduce((function(t,e){return t+e})).toString().split("").every((function(t){return t%3===0}))},t.checkAllCards=function(){for(var e=!1,s=[],n=Object.keys(t.state).filter((function(t){return"card"===t.slice(0,4)})).filter((function(e){return t.state[e]})).map((function(e){return t.state[e]})),a=[],i=0;i<n.length;i++)for(var r=i+1;r<n.length;r++)for(var c=r+1;c<n.length;c++)a.push([n[i],n[r],n[c]]);for(var o=0,l=a;o<l.length;o++){var u=l[o];if(t.checkIfSet(u)){s=u,e=!0;break}}return[e,s]},t.generateNewCards=function(){for(var e={},s=t.state.deck,n="",a=[],i=0;i<3;i++)a.push(t.getKeyByValue(t.state,t.state.active[i]));if(a.every((function(t){return parseInt(t.substring(4))>12})))for(var r=0;r<3;r++)s.length?(n=s[t.randomNum(s)],s=s.filter((function(t){return t!==n})),e[a[r]]=n):(n=void 0,e[a[r]]=n);else for(var c=0;c<3;c++)parseInt(a[c].substring(4))<=12?(n=s[t.randomNum(s)],e[a[c]]=n,s=s.filter((function(t){return t!==n}))):(n=void 0,e[a[c]]=n);e.deck=s,e.active=[],setTimeout((function(){return t.setState(e,(function(){s.length||t.deckEmpty()}))}),500)},t.generateExtraCards=function(){var e={},s=t.state.deck,n=[];n=Object.keys(t.state).some((function(t){return parseInt(t.slice(4,6))>=13}))?["card16","card17","card18"]:["card13","card14","card15"];for(var a=function(a){var i=void 0;s.length?(i=s[t.randomNum(s)],e[n[a]]=i,s=s.filter((function(t){return t!==i}))):(i=void 0,e[n[a]]=i)},i=0;i<3;i++)a(i);e.deck=s,e.active=[],setTimeout((function(){return t.setState(e,(function(){s.length||t.deckEmpty()}))}),500)},t.deckEmpty=function(){t.checkAllCards()[0]||t.setState({win:!0})},t.checkButton=function(){var e=t.checkAllCards(),s=e[0],n=e[1];s?t.setState({active:n,extraSecs:t.state.extraSecs+3},(function(){return t.generateNewCards()})):t.state.deck.length?t.generateExtraCards():t.setState({win:!0})},t.cardClickHandler=function(e){if(!t.state.win){var s=t.state.active,n=s.findIndex((function(t){return t===e.target.id}));n<0?s.push(e.target.id):s.splice(n,1),3===s.length?t.setState({active:s},(function(){return t.threeCardsHighlighted()})):t.setState({active:s})}},t.randomNum=function(t){return Math.floor(Math.random()*t.length)},t.getKeyByValue=function(t,e){return Object.keys(t).find((function(s){return t[s]===e}))},t}return Object(o.a)(s,[{key:"componentDidMount",value:function(){for(var t=this,e=this.generateDeck(),s={},n=function(n){var a=e[t.randomNum(e)];s["card"+n]=a,e=e.filter((function(t){return t!==a}))},a=1;a<=12;a++)n(a);s.deck=e,this.setState(s)}},{key:"render",value:function(){var t=this,e=Array(18).fill("0");return Object.keys(this.state).some((function(t){return"card"===t.slice(0,4)}))&&(e=e.map((function(e,s){return Object(d.jsx)(p,{id:t.state["card".concat(s+1)],active:t.state.active,cardClickHandler:t.cardClickHandler},"key".concat(s))}))),Object(d.jsxs)("div",{className:"NewGame fade-in",children:[Object(d.jsx)(v,{}),e,this.state.win?Object(d.jsx)(g,{}):Object(d.jsx)(m,{checkButton:this.checkButton}),Object(d.jsx)(O,{win:this.state.win,extraSecs:this.state.extraSecs})]})}}]),s}(a.a.Component);s(25);var y=function(){return Object(d.jsx)("div",{className:"Results fade-in",children:"to be updated"})};s(26);var k=function(){return Object(d.jsx)("div",{className:"Rules fade-in",children:Object(d.jsxs)("ol",{className:"Rules__list",children:[Object(d.jsx)("li",{className:"Rules__list__item",children:"The deck includes 81 cards, each having 4 distinct parameters (color, shading, shape, and number of elements)."}),Object(d.jsx)("li",{className:"Rules__list__item",children:"Each card appears on the board only once. At the beginning of the game, there are 12 cards on the board."}),Object(d.jsx)("li",{className:"Rules__list__item",children:"The goal is to find *sets* of three cards that simultaneously have:"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{className:"Rules__list__item",children:"the same colour or all different colours"}),Object(d.jsx)("li",{className:"Rules__list__item",children:"the same shape or all different shapes"}),Object(d.jsx)("li",{className:"Rules__list__item",children:"the same shading or all different shadings"}),Object(d.jsx)("li",{className:"Rules__list__item",children:"the same number of elements or all different numbers of elements."})]}),Object(d.jsx)("li",{className:"Rules__list__item",children:"Be as fast as you can (in the original game, you need to find sets faster than your opponent)."}),Object(d.jsx)("li",{className:"Rules__list__item",children:'If there are no sets on the board, you can click on the "check for sets" button to display three additional cards.'}),Object(d.jsx)("li",{className:"Rules__list__item",children:"When you pair the extra cards to make a set, they will not be replaced with new cards - the goal is to always have a total of 12 cards on the board."}),Object(d.jsx)("li",{className:"Rules__list__item",children:"If you click on the button and it turns out that you missed a set that was already on the board, 3 additional seconds will be added to your final score."})]})})};var w=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(h,{})})};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(w,{})}),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.9df7ccf9.chunk.js.map