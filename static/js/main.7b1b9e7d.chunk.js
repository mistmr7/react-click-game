(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,img:"Images/babyDaisy.PNG",name:"Baby Daisy",clicked:!1},{id:2,img:"Images/babyluigi.PNG",name:"Baby Luigi",clicked:!1},{id:3,img:"Images/babyMario.png",name:"Baby Mario",clicked:!1},{id:4,img:"Images/babyPeach.PNG",name:"Baby Peach",clicked:!1},{id:5,img:"Images/birdo.PNG",name:"Birdo",clicked:!1},{id:6,img:"Images/bowser.jpg",name:"Bowser",clicked:!1},{id:7,img:"Images/bowserJr.PNG",name:"Bowser Jr",clicked:!1},{id:8,img:"Images/daisy.PNG",name:"Daisy",clicked:!1},{id:9,img:"Images/diddyKong.PNG",name:"Diddy Kong",clicked:!1},{id:10,img:"Images/donkeyKong.PNG",name:"Donkey Kong",clicked:!1},{id:11,img:"Images/dryBones.PNG",name:"Dry Bones",clicked:!1},{id:12,img:"Images/dryBowser.PNG",name:"Dry Bowser",clicked:!1},{id:13,img:"Images/FunkyKong.PNG",name:"Funky Kong",clicked:!1},{id:14,img:"Images/kingBoo.PNG",name:"King Boo",clicked:!1},{id:15,img:"Images/koopaTroopa.PNG",name:"Koopa Troopa",clicked:!1},{id:16,img:"Images/luigi.jpg",name:"Luigi",clicked:!1},{id:17,img:"Images/mario.jpg",name:"Mario",clicked:!1},{id:18,img:"Images/peach.PNG",name:"Peach",clicked:!1},{id:19,img:"Images/rosalina.PNG",name:"Rosalina",clicked:!1},{id:20,img:"Images/toad.jpg",name:"Toad",clicked:!1},{id:21,img:"Images/toadette.PNG",name:"Toadette",clicked:!1},{id:22,img:"Images/waluigi.PNG",name:"Waluigi",clicked:!1},{id:23,img:"Images/wario.PNG",name:"Wario",clicked:!1},{id:24,img:"Images/yoshi.PNG",name:"Yoshi",clicked:!1}]},,,function(e,a,i){e.exports=i(22)},,,,,function(e,a,i){},,function(e,a,i){},,function(e,a,i){},,function(e,a,i){},,function(e,a,i){"use strict";i.r(a);var t=i(0),n=i.n(t),c=i(8),o=i.n(c),r=(i(14),i(1)),s=i(2),m=i(4),l=i(3),d=i(5),g=(i(16),i(18),function(e){return n.a.createElement("div",{className:"card justify-content-center align-middle"},n.a.createElement("div",{className:"img-container vertical-center"},n.a.createElement("img",{alt:e.name,id:e.id,src:e.img,onClick:e.click})))}),h=i(6),u=function(e){for(var a,i,t=e.length;0!==t;)i=Math.floor(Math.random()*t),a=e[t-=1],e[t]=e[i],e[i]=a;return e},k=function(e){function a(){var e,i;Object(r.a)(this,a);for(var t=arguments.length,n=new Array(t),c=0;c<t;c++)n[c]=arguments[c];return(i=Object(m.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(n)))).state={marioKart:h,score:0,highScore:0,scores:[],chosen:[],welcomeMessage:"Click on any player to begin. Clicking any character more than once will result in a loss. Good luck!"},i.imageClickedHandler=function(e){if(-1!==i.state.chosen.indexOf(parseInt(e.target.id))){return i.setState({score:0,highScore:i.state.highScore,scores:i.state.scores,chosen:[],welcomeMessage:"Sorry, that item has already been clicked! Play again to see if you can set a new high Score!"})}i.setState(function(e){return{score:e.score+1}}),i.state.chosen.push(parseInt(e.target.id)),i.state.scores.push(i.state.score+1),i.state.highScore=Math.max.apply(null,i.state.scores),i.setState({highScore:i.state.highScore,scores:i.state.scores,chosen:i.state.chosen,marioKart:u(h),welcomeMessage:"Nice choice!"})},i}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"container"},n.a.createElement("nav",{className:"navbar navbar-dark bg-dark"},n.a.createElement("span",{className:"navbar-brand mb-0 h1"},"React-Clicky-Game"),n.a.createElement("ul",{className:"score"},n.a.createElement("li",{value:this.state.score},"Score: ",this.state.score),n.a.createElement("li",null,"High Score: ",this.state.highScore))),n.a.createElement("p",{className:"text-center"},this.state.welcomeMessage),n.a.createElement("div",{className:"row justify-content-center"},this.state.marioKart.map(function(a){return n.a.createElement(g,{id:a.id,key:a.id,img:a.img,click:e.imageClickedHandler})})))}}]),a}(t.Component),y=(i(20),function(e){function a(){return Object(r.a)(this,a),Object(m.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement(k,null)}}]),a}(t.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,2,1]]]);
//# sourceMappingURL=main.7b1b9e7d.chunk.js.map