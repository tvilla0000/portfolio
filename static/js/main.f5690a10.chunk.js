(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{20:function(e,a,t){e.exports=t(33)},25:function(e,a,t){},27:function(e,a,t){},33:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),o=t(9),s=t.n(o),i=t(17),c=(t(25),t(3)),n=t.n(c),m=t(10),w=t(11),d=t(12),g=t(13),h=t(18),p=t(14),E=t(19),b=t(4),f=t.n(b),N=(t(27),function(e){function a(){var e,t;Object(d.a)(this,a);for(var l=arguments.length,r=new Array(l),o=0;o<l;o++)r[o]=arguments[o];return(t=Object(h.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:"",subject:"",message:""},t.handleChange=function(e){t.setState(Object(w.a)({},e.target.name,e.target.value))},t.handleSubmit=function(){var e=Object(m.a)(n.a.mark((function e(a){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),"template_7y3CQmN6",e.next=4,t.sendFeedback("template_7y3CQmN6",{subject_html:t.state.subject,message_html:t.state.message,from_name:t.state.name,reply_to:t.state.email});case 4:t.setState({name:"",email:"",subject:"",message:""}),document.getElementById("name").value="",document.getElementById("email").value="",document.getElementById("subject").value="",document.getElementById("message").value="";case 9:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),t}return Object(E.a)(a,e),Object(g.a)(a,[{key:"sendFeedback",value:function(e,a){window.emailjs.send("gmail",e,a).then((function(e){console.log("Email successfully sent!")})).catch((function(e){return console.error("Oh well, you failed. Here some thoughts on the error that occured:",e)}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"w3-sidebar w3-bar-block w3-small w3-hide-small w3-center",id:"myNavbar"},r.a.createElement("img",{src:"https://i.imgur.com/LpsG1Zq.jpg",alt:"smoke",style:{width:"100%"}}),r.a.createElement("a",{href:"/portfolio",className:"w3-bar-item w3-button w3-padding-large w3-black"},r.a.createElement("i",{className:"fa fa-home w3-xxlarge",style:{color:"red"}}),r.a.createElement("p",{style:{color:"red"}},"HOME")),r.a.createElement("a",{href:"#about",className:"w3-bar-item w3-button w3-padding-large w3-hover-black"},r.a.createElement("i",{className:"fa fa-user w3-xxlarge"}),r.a.createElement("p",null,"ABOUT")),r.a.createElement("a",{href:"#skills",className:"w3-bar-item w3-button w3-padding-large w3-hover-black"},r.a.createElement("i",{className:"fa fa-code w3-xxlarge"}),r.a.createElement("p",null,"SKILLS")),r.a.createElement("a",{href:"#projects",className:"w3-bar-item w3-button w3-padding-large w3-hover-black"},r.a.createElement("i",{className:"fa fa-rocket w3-xxlarge"}),r.a.createElement("p",null,"PROJECTS")),r.a.createElement("a",{href:"#contact",className:"w3-bar-item w3-button w3-padding-large w3-hover-black"},r.a.createElement("i",{className:"fa fa-envelope w3-xxlarge"}),r.a.createElement("p",null,"CONTACT")),r.a.createElement("a",{href:f.a,target:"_blank",className:"w3-bar-item w3-button w3-padding-large w3-hover-black"},r.a.createElement("i",{className:"fa fa-file-pdf-o w3-xxlarge"}),r.a.createElement("p",null,"RESUME"))),r.a.createElement("div",{className:"w3-top w3-hide-large w3-hide-medium",id:"myNavbar"},r.a.createElement("div",{className:"w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small"},r.a.createElement("a",{href:"/portfolio",className:"w3-button mobile-nav-btn",style:{width:"25% !important"}},"HOME"),r.a.createElement("a",{href:"#about",className:"w3-button mobile-nav-btn",style:{width:"25% !important"}},"ABOUT"),r.a.createElement("a",{href:"#skills",className:"w3-button mobile-nav-btn",style:{width:"25% !important"}},"SKILLS"),r.a.createElement("a",{href:"#projects",className:"w3-button mobile-nav-btn",style:{width:"25% !important"}},"PROJECTS"),r.a.createElement("a",{href:"#contact",className:"w3-button mobile-nav-btn",style:{width:"25% !important"}},"CONTACT"),r.a.createElement("a",{href:f.a,target:"_blank",className:"w3-button mobile-nav-btn",style:{width:"25% !important"}},"RESUME"))),r.a.createElement("div",{className:"w3-padding-large",id:"main"},r.a.createElement("header",{className:"w3-container w3-padding-32 w3-center w3-black",id:"home"},r.a.createElement("h1",{className:"w3-jumbo"}," Tyler Villa "),r.a.createElement("p",null,"Software Engineer"),r.a.createElement("img",{src:"https://i.imgur.com/6Dd7vZa.jpg",alt:"boy",className:"w3-image",id:"HeadShot",style:{width:"400px"}})),r.a.createElement("div",{className:"w3-content w3-justify w3-text-grey w3-padding-64",id:"about"},r.a.createElement("h2",{className:"w3-text-light-grey",style:{textShadow:"1px -2px rgb(100, 11, 11)",fontWeight:"800"}},"About Me"),r.a.createElement("hr",{style:{width:"200px"},className:"w3-opacity"}),r.a.createElement("p",{className:"bio"},"Hello There! Thanks for checking out my Portfolio! Three years of high school robotics opened a new perspective to understanding how machines work and how to comunicate to them. This new perspective developed a fascination inside me to learn how sites and applications I used daily worked and to create my own and delve into the Programming world more! Graduating out of high school, I looked to the amazing city of San Francisco to grow and expand my knowledge on the technical world! Thus, my experiences with General Assembly began. In twelve short weeks of GA's Software Engineering Immersive(SEI), I've tapped on a newly found desire to learn to code anything and everything I can! As a graduate from GA's SEI, I look to expand my base of knowledge even more through collaborative work with other developers and through vast amounts of technical problems!")),r.a.createElement("div",{className:"w3-padding-64 w3-content",id:"skills"},r.a.createElement("h2",{className:"w3-text-light-grey",style:{textShadow:"1px -2px rgb(100, 11, 11)",fontWeight:"800"}},"My Skills"),r.a.createElement("hr",{style:{width:"200px",paddingBottom:"32px"},className:"w3-opacity"}),r.a.createElement("ul",{className:"w3-wide w3-ul"},r.a.createElement("h5",{className:"w3-col w3-text-gray"},"Languages and Frameworks"),r.a.createElement("div",{className:"w3-third"},r.a.createElement("li",{className:"w3-li gray-bord-bot"}),r.a.createElement("li",{className:"w3-li w3-text-white gray-bord-bot"},r.a.createElement("img",{className:"Skills-logos",src:"https://www.geekstrick.com/wp-content/themes/geekstrick/assets/icons/javascript.svg",alt:"Javascript"}),"JavaScript"),r.a.createElement("li",{className:"w3-li w3-text-white gray-bord-bot"},r.a.createElement("img",{className:"Skills-logos",id:"react",src:"http://maxehnert.com/app/images/react.svg",alt:"React"}),"React"),r.a.createElement("li",{className:"w3-li w3-text-white add-bord-bot"},r.a.createElement("img",{className:"Skills-logos",id:"python",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png",alt:"Python"}),"Python 3"),r.a.createElement("li",{className:"w3-li hide-li"})),r.a.createElement("div",{className:"w3-third"},r.a.createElement("li",{className:"w3-li gray-bord-bot hide-li"}),r.a.createElement("li",{className:"w3-li w3-text-white add-bord-bot"},r.a.createElement("img",{className:"Skills-logos",id:"nodejs",src:"https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",alt:"Node.js"}),"Node.js"),r.a.createElement("li",{className:"w3-li w3-text-white gray-bord-bot"},r.a.createElement("img",{className:"Skills-logos",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png",alt:"HTML5"}),"HTML5"),r.a.createElement("li",{className:"w3-li w3-text-white gray-bord-bot"},r.a.createElement("img",{className:"Skills-logos",src:"https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",alt:"CSS3"}),"CSS3"),r.a.createElement("li",{className:"w3-li hide-li"})),r.a.createElement("div",{className:"w3-third"},r.a.createElement("li",{className:"w3-li gray-bord-bot hide-li"}),r.a.createElement("li",{className:"w3-li w3-text-white gray-bord-bot"},r.a.createElement("img",{className:"Skills-logos",id:"bootstrap",src:"data:image/png;base64,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",alt:"Bootstrap"}),"Bootstrap"),r.a.createElement("li",{className:"w3-li w3-text-white gray-bord-bot"},r.a.createElement("img",{className:"Skills-logos",id:"materialize",src:"https://seeklogo.com/images/M/materialize-logo-0FCAD8A6F8-seeklogo.com.png",alt:"Materialize"}),"Materialize"),r.a.createElement("li",{className:"w3-li w3-text-white gray-bord-bot"},r.a.createElement("img",{id:"vscode",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1200px-Visual_Studio_Code_1.35_icon.svg.png",alt:"VS code"}),"VS Code"),r.a.createElement("li",{className:"w3-li gray-bord-bot"}))),r.a.createElement("ul",{className:"w3-wide w3-ul"},r.a.createElement("h5",{className:"w3-col w3-text-gray"},"Server-Side and Database"),r.a.createElement("div",{className:"w3-half"},r.a.createElement("li",{className:"w3-li gray-bord-bot"}),r.a.createElement("li",{className:"w3-li w3-text-white gray-bord-bot"},r.a.createElement("img",{className:"Skills-logos",id:"nodejs",src:"https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",alt:"express"}),"Express"),r.a.createElement("li",{className:"w3-li w3-text-white gray-bord-bot"},r.a.createElement("img",{className:"Skills-logos",src:"https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",alt:"PostgreSQL"}),"PostgreSQL"),r.a.createElement("li",{className:"w3-li w3-text-white gray-bord-bot"},r.a.createElement("img",{className:"Skills-logos",id:"mongoose",src:"https://camo.githubusercontent.com/add74f91a2bcd7370ee73971140a75ad4136baf1/687474703a2f2f6d6f6e676f64622d746f6f6c732e636f6d2f696d672f6d6f6e676f6f73652e706e67",alt:"Mongoose"}),"Mongoose"),r.a.createElement("li",{className:"w3-li w3-text-white add-bord-bot"},r.a.createElement("img",{className:"Skills-logos",src:"https://cdn.iconscout.com/icon/free/png-256/mongodb-4-1175139.png",alt:"MongoDB"}),"MongoDB"),r.a.createElement("li",{className:"w3-li hide-li"})),r.a.createElement("div",{className:"w3-half"},r.a.createElement("li",{className:"w3-li gray-bord-bot hide-li"}),r.a.createElement("li",{className:"w3-li w3-text-white gray-bord-bot"},r.a.createElement("img",{className:"Skills-logos",id:"OAuth",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Oauth_logo.svg/598px-Oauth_logo.svg.png",alt:"OAuth"}),"OAuth"),r.a.createElement("li",{className:"w3-li w3-text-white gray-bord-bot"},r.a.createElement("img",{className:"Skills-logos",id:"passportjs",src:"https://cdn.glitch.com/project-avatar/0d184ee3-fd8d-4b94-acf4-b4e686e57375.png?2016-11-21T13:18:58.896Z",alt:"Passport.js"}),"Passport"),r.a.createElement("li",{className:"w3-li w3-text-white gray-bord-bot"},r.a.createElement("img",{className:"Skills-logos",id:"AWS",src:"https://cdn.worldvectorlogo.com/logos/amazon-icon-1.svg",alt:"AWS"}),"Amazon S3"),r.a.createElement("li",{className:"w3-li w3-text-white gray-bord-bot"},r.a.createElement("img",{className:"Skills-logos",id:"heroku",src:"https://icon-library.net/images/heroku-icon/heroku-icon-27.jpg",alt:"Heroku"}),"Heroku"),r.a.createElement("li",{className:"w3-li gray-bord-bot"}))),r.a.createElement("ul",{className:"w3-wide w3-ul"},r.a.createElement("h5",{className:"w3-col w3-text-gray"},"Version Control and Workflow Management"),r.a.createElement("div",{className:"w3-half"},r.a.createElement("li",{className:"w3-li gray-bord-bot"}),r.a.createElement("li",{className:"w3-li w3-text-white gray-bord-bot"},r.a.createElement("img",{className:"Skills-logos",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1024px-Git_icon.svg.png",alt:"Git"}),"Git"),r.a.createElement("li",{className:"w3-li w3-text-white gray-bord-bot"},r.a.createElement("img",{className:"Skills-logos",id:"github",src:"https://image.flaticon.com/icons/svg/25/25231.svg",alt:"Github"}),"GitHub"),r.a.createElement("li",{className:"w3-li w3-text-white add-bord-bot"},r.a.createElement("img",{className:"Skills-logos",id:"command-line",src:"https://cdn2.iconfinder.com/data/icons/computer-network-12/512/consol-512.png",alt:"Command Line"}),"Command Line"),r.a.createElement("li",{className:"w3-li hide-li"})),r.a.createElement("div",{className:"w3-half"},r.a.createElement("li",{className:"w3-li gray-bord-bot hide-li"}),r.a.createElement("li",{className:"w3-li w3-text-white gray-bord-bot"},r.a.createElement("img",{className:"Skills-logos",id:"trello",src:"https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Trello-512.png",alt:"trello"}),"Trello"),r.a.createElement("li",{className:"w3-li w3-text-white gray-bord-bot"},r.a.createElement("img",{className:"Skills-logos",src:"https://cdn.worldvectorlogo.com/logos/figma-1.svg",alt:"Figma"}),"Figma"),r.a.createElement("li",{className:"w3-li gray-bord-bot"}))),r.a.createElement("ul",{className:"w3-wide w3-ul"},r.a.createElement("h5",{className:"w3-col w3-text-gray"},"Methodologies"),r.a.createElement("div",{className:"w3-half"},r.a.createElement("li",{className:"w3-li gray-bord-bot"}),r.a.createElement("li",{className:"w3-li w3-text-white gray-bord-bot"},"MVC Pattern"),r.a.createElement("li",{className:"w3-li w3-text-white mobile-bord-bot"},"Object-Oriented Programming")),r.a.createElement("div",{className:"w3-half"},r.a.createElement("li",{className:"w3-li gray-bord-bot hide-li"}),r.a.createElement("li",{className:"w3-li w3-text-white gray-bord-bot"},"Wireframing"),r.a.createElement("li",{className:"w3-li w3-text-white gray-bord-bot"},"User Stories"),r.a.createElement("li",{className:"w3-li w3-text-white gray-bord-bot"},"Responsive Design"))),r.a.createElement("div",{className:"w3-col add-bord-top"}),r.a.createElement("div",{className:"w3-bar-block"})),r.a.createElement("div",{className:"w3-padding-64 w3-content",id:"projects"},r.a.createElement("h2",{className:"w3-text-light-grey",style:{textShadow:"1px -2px rgb(100, 11, 11)",fontWeight:"800"}},"My Projects"),r.a.createElement("hr",{style:{width:"200px"},className:"w3-opacity"}),r.a.createElement("div",{className:"w3-row-padding",style:{margin:"0 -16px"}},r.a.createElement("div",{className:"w3-half"},r.a.createElement("div",{className:"project-card"},r.a.createElement("h2",{style:{fontWeight:"700"}},"WeStream"),r.a.createElement("img",{src:"https://i.imgur.com/NeCJEHh.png",alt:"WeStream",className:"project-img"}),r.a.createElement("p",{className:"project-description"},"For my Software Engineering immersive(SEI) final project, I built WeStream!"),r.a.createElement("p",{className:"project-description"},"WeStream utilizes the power of React, while also implementing back-end services, making it a Fullstack App!"),r.a.createElement("div",{className:"project-link-ctnr"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://westream-tyler-youtube-clone.herokuapp.com/"},r.a.createElement("i",{className:"fa fa-external-link w3-hover-opacity w3-xxlarge"})),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/tvilla0000/WeStream"},r.a.createElement("i",{className:"fa fa-github w3-hover-opacity w3-xxlarge"}))))),r.a.createElement("div",{className:"w3-half"},r.a.createElement("div",{className:"project-card"},r.a.createElement("h2",{style:{fontWeight:"700"}},"Tasty"),r.a.createElement("img",{src:"https://i.imgur.com/yAn25C6.png",alt:"Tasty",className:"project-img"}),r.a.createElement("p",{className:"project-description"},"The development of Tasty was started after the introduction of Python in the Immersive!"),r.a.createElement("p",{className:"project-description"},"Tasty implemented Python and Django as a framework to create a application alike to yelp!"),r.a.createElement("div",{className:"project-link-ctnr"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://menunav.herokuapp.com/"},r.a.createElement("i",{className:"fa fa-external-link w3-hover-opacity w3-xxlarge"})),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/tvilla0000/Tasty"},r.a.createElement("i",{className:"fa fa-github w3-hover-opacity w3-xxlarge"}))))))),r.a.createElement("div",{className:"w3-padding-64 w3-content w3-text-grey",id:"contact"},r.a.createElement("h2",{className:"w3-text-light-grey",style:{textShadow:"1px -2px rgb(100, 11, 11)",fontWeight:"800"}},"Contact Me"),r.a.createElement("hr",{style:{width:"200px"},className:"w3-opacity"}),r.a.createElement("div",{className:"w3-section"},r.a.createElement("p",null,r.a.createElement("i",{className:"fa fa-map-marker fa-fw w3-text-white w3-xxlarge w3-margin-right"})," ","San Francisco, US"),r.a.createElement("p",null,r.a.createElement("i",{className:"fa fa-phone fa-fw w3-text-white w3-xxlarge w3-margin-right"})," ","Phone: \xa0 925-350-2272"),r.a.createElement("p",null,r.a.createElement("i",{className:"fa fa-envelope fa-fw w3-text-white w3-xxlarge w3-margin-right"}," ")," ","Email: \xa0"," ",r.a.createElement("a",{href:"mailto:tylervilla65@gmail.com",style:{textDecoration:"none"}},"tylervilla65@gmail.com")),r.a.createElement("p",null,r.a.createElement("i",{className:"\tfa fa-twitter fa-fw w3-text-white w3-xxlarge w3-margin-right"}),"Twitter: \xa0",r.a.createElement("a",{href:"https://twitter.com/TylerVilla11"},"Tyler Villa"))),r.a.createElement("br",null)),r.a.createElement("footer",{className:"w3-content w3-padding-32 w3-text-grey w3-xlarge"},r.a.createElement("div",{className:"w3-col w3-margin-bottom footer-link-ctnr",id:"network-links"},r.a.createElement("div",{className:"w3-third w3-center"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/tvilla0000"},r.a.createElement("i",{className:"fa fa-github w3-hover-opacity w3-jumbo"}))),r.a.createElement("div",{className:"w3-third w3-center"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/tyler-villa-61ba94190/"},r.a.createElement("i",{className:"fa fa-linkedin w3-hover-opacity w3-jumbo"}))),r.a.createElement("div",{className:"w3-third w3-center"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://profiles.generalassemb.ly/profiles/tvilla01"},r.a.createElement("i",{className:"fa fa-address-card-o w3-hover-opacity w3-jumbo"})))))))}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(i.a,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},4:function(e,a,t){e.exports=t.p+"static/media/Resume.477ad704.pdf"}},[[20,1,2]]]);
//# sourceMappingURL=main.f5690a10.chunk.js.map