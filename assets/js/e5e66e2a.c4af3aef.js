"use strict";(self.webpackChunkclarity_cec_1=self.webpackChunkclarity_cec_1||[]).push([[9946],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(a),h=n,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||i;return a?r.createElement(m,o(o({ref:t},d),{},{components:a})):r.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8809:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=a(7462),n=(a(7294),a(3905)),i=(a(8209),a(4996));const o={id:"cc1_core_software",title:"Core Software",sidebar_label:"Core Software",sidebar_position:6.2},l=void 0,s={unversionedId:"cadenza1/Software/cc1_core_software",id:"cadenza1/Software/cc1_core_software",title:"Core Software",description:"The code is provided as a Clarity_Cadenza GitHub repository containing individual Python tools and a complete baseline system.",source:"@site/docs/cadenza1/Software/cc1_core_software.md",sourceDirName:"cadenza1/Software",slug:"/cadenza1/Software/cc1_core_software",permalink:"/docs/cadenza1/Software/cc1_core_software",draft:!1,tags:[],version:"current",sidebarPosition:6.2,frontMatter:{id:"cc1_core_software",title:"Core Software",sidebar_label:"Core Software",sidebar_position:6.2},sidebar:"tutorialSidebar_cad1",previous:{title:"Baseline",permalink:"/docs/cadenza1/Software/cc1_baseline"},next:{title:"Additional tools",permalink:"/docs/cadenza1/Software/cc1_additional_tools"}},c={},d=[{value:"1. Task 1: Headphones",id:"1-task-1-headphones",level:2},{value:"1.1 Baseline Demixer",id:"11-baseline-demixer",level:3},{value:"2. Task 2: Car stereo",id:"2-task-2-car-stereo",level:2},{value:"2.1 Car acoustics model",id:"21-car-acoustics-model",level:3},{value:"3. HAAQI Speech Intelligibility model",id:"3-haaqi-speech-intelligibility-model",level:2},{value:"4. References",id:"4-references",level:2}],p={toc:d},u="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The code is provided as a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/claritychallenge/clarity"},"Clarity_Cadenza GitHub repository")," containing individual Python tools and a complete baseline system. "),(0,n.kt)("h2",{id:"1-task-1-headphones"},"1. Task 1: Headphones"),(0,n.kt)("p",null,"The key elements of the task1 baseline system are the:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Baseline demixer"),(0,n.kt)("li",{parentName:"ul"},"HAAQI music quality model.")),(0,n.kt)("h3",{id:"11-baseline-demixer"},"1.1 Baseline Demixer"),(0,n.kt)("p",null,"The demixing stage simply takes the out-of-the-box Hybrid ",(0,n.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2111.03600"},"Demucs")," music source\nseparation model to obtain stereo VDBO stems. This model is publicly available in the\n",(0,n.kt)("a",{parentName:"p",href:"https://pytorch.org/audio/main/generated/torchaudio.pipelines.HDEMUCS_HIGH_MUSDB.html#torchaudio.pipelines.HDEMUCS_HIGH_MUSDB"},"TorchAudio library"),".\nThen, it applies a NAL-R ","[1]"," and compression procedure to each stem to personalize the output."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Inputs: Stereo songs and Listeners characteristics. \nOutput: 8 stems (left and right VDBO stems) for each song-listener. \n        And 1 remixed signal for listener panel. \n")),(0,n.kt)("h2",{id:"2-task-2-car-stereo"},"2. Task 2: Car stereo"),(0,n.kt)("p",null,"The key elements of the task2 baseline system are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Car acoustics model"),(0,n.kt)("li",{parentName:"ul"},"HAAQI music quality model")),(0,n.kt)("h3",{id:"21-car-acoustics-model"},"2.1 Car acoustics model"),(0,n.kt)("figure",{id:"fig10"},(0,n.kt)("img",{width:"800",src:(0,i.Z)("/img/car_acoustics.png")}),(0,n.kt)("figcaption",null,"Figure 1, The Car Acoustics Model.")),(0,n.kt)("p",null,"The scene metadata contains several parameters that is used by the car scene metadata. "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Using the car parameters, a car noise signal is generated. For details of the Car Noise generator, see\n",(0,n.kt)("a",{parentName:"li",href:"/docs/cadenza1/Software/cc1_additional_tools"},"additional tools"),". This signal is added with anechoic HRTFs\nat the front microphone of the Hearing Aid (HA)."),(0,n.kt)("li",{parentName:"ol"},"Using the head rotation angle, the model adds car HRTFs at the front microphone of the HA to the enhanced music."),(0,n.kt)("li",{parentName:"ol"},"These two signal are then added together at a given SNR at the front microphone of the HA."),(0,n.kt)("li",{parentName:"ol"},"The resulting signal is pass through a fixed HA composed of a simple NAL-R amplification."),(0,n.kt)("li",{parentName:"ol"},"The HA output is the signal use for evaluation.")),(0,n.kt)("h2",{id:"3-haaqi-speech-intelligibility-model"},"3. HAAQI Speech Intelligibility model"),(0,n.kt)("p",null,"This is a python implementation of the Hearing Aid Audio Quality Index (HAAQI) model which is used for objective estimation.\nThis will be used in the stage 1 evaluation of entrants (see ",(0,n.kt)("a",{parentName:"p",href:"/docs/cadenza1/Take%20part/cc1_rules#stage-1-objective-evaluation"},"Rules"),")."),(0,n.kt)("p",null,"Note that HAAQI is not a binaural metric, instead, each channel must be processed separately. We average the left and right\nscores to produce a final overall score."),(0,n.kt)("p",null,"The reference signals for HAAQI are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Task 1 Headphone. The original left and right channels of the music tracks."),(0,n.kt)("li",{parentName:"ul"},"Task 2 Car. The references are the left and right signals at the ear canal of a listener auditioning the music over a stereo set-up of two loudspeakers, in an anechoic room.")),(0,n.kt)("h2",{id:"4-references"},"4. References"),(0,n.kt)("a",{name:"refs"}),(0,n.kt)("p",null,"[1]",' Byrne, Denis, and Harvey Dillon. "The National Acoustic Laboratories\'(NAL) new procedure for selecting the gain and frequency response of a hearing aid." Ear and hearing 7.4 (1986): 257-265.'))}h.isMDXComponent=!0},8209:(e,t,a)=>{a(7294)}}]);