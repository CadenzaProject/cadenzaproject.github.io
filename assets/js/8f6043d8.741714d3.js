"use strict";(self.webpackChunkclarity_cec_1=self.webpackChunkclarity_cec_1||[]).push([[5218],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>f});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),d=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=d(e.components);return n.createElement(l.Provider,{value:a},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(t),p=r,f=u["".concat(l,".").concat(p)]||u[p]||m[p]||i;return t?n.createElement(f,o(o({ref:a},c),{},{components:t})):n.createElement(f,o({ref:a},c))}));function f(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=p;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=t[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2788:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=t(7462),r=(t(7294),t(3905));t(8209),t(4996);const i={id:"cc1_data_listener",title:"Listener metadata",sidebar_label:"Listener data",sidebar_position:5.3},o=void 0,s={unversionedId:"cadenza1/Data/cc1_data_listener",id:"cadenza1/Data/cc1_data_listener",title:"Listener metadata",description:"The same listener data is used for Task 1 and 2. We have provided metadata characterising the hearing abilities of the listeners, so the audio signals you",source:"@site/docs/cadenza1/Data/cc1_data_listener.md",sourceDirName:"cadenza1/Data",slug:"/cadenza1/Data/cc1_data_listener",permalink:"/docs/cadenza1/Data/cc1_data_listener",draft:!1,tags:[],version:"current",sidebarPosition:5.3,frontMatter:{id:"cc1_data_listener",title:"Listener metadata",sidebar_label:"Listener data",sidebar_position:5.3},sidebar:"tutorialSidebar_cad1",previous:{title:"Task2 car",permalink:"/docs/cadenza1/Data/cc1_data_overview_car"},next:{title:"Listening tests",permalink:"/docs/cadenza1/Data/cc1_listening_tests"}},l={},d=[{value:"Data file formats and naming conventions",id:"data-file-formats-and-naming-conventions",level:2}],c={toc:d},u="wrapper";function m(e){let{components:a,...t}=e;return(0,r.kt)(u,(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The same listener data is used for Task 1 and 2. We have provided metadata characterising the hearing abilities of the listeners, so the audio signals you\ngenerate can be individualised. The same types of data are available for training and development. More on ",(0,r.kt)("a",{parentName:"p",href:"../../learning_resources/Hearing_impairment/edu_HI_general"},"hearing loss")," and ",(0,r.kt)("a",{parentName:"p",href:"../../learning_resources/Hearing_impairment/edu_measuring_HI"},"how it is measured"),"."),(0,r.kt)("p",null,"For training, we will use the same 83 ",(0,r.kt)("a",{parentName:"p",href:"../../learning_resources/Hearing_impairment/edu_measuring_HI"},"audiograms")," from the ",(0,r.kt)("a",{parentName:"p",href:"https://claritychallenge.org/"},"Clarity project"),"."),(0,r.kt)("p",null,"We constructed a new set of listeners to separate the training from the development listeners.\nThe development ",(0,r.kt)("a",{parentName:"p",href:"../../learning_resources/Hearing_impairment/edu_measuring_HI"},"audiograms")," are a filtered, pseudo-random, selection from the\nvon Gablenz and Holube (2019) dataset (",(0,r.kt)("a",{parentName:"p",href:"https://zenodo.org/record/4995261#.Y_3O1HbP2Hu"},"https://zenodo.org/record/4995261#.Y_3O1HbP2Hu"),").\nWe first filtered the audiograms to better-ear 4-frequency hearing loss between 25 and 60 dB.\nThen, we divided the data into BEA bands of 20-29, 30-39, 40-49 and 50-59 dB, and randomly chose from each\nband the necessary number of audiograms to give the same distribution per band as in\nthe original Clarity dataset (namely 11, 37, 34 and 18). This gave an unequal male:female distribution\n(63 to 37), so 13 males were then randomly selected and replaced by females with the same BEA.\nOf the 100 audiograms, only 50 (25 per gender) were randomly selected to be part of the development set."),(0,r.kt)("p",null,"A panel of hearing-aided listeners will be recruited for evaluation. They will be experienced bilateral\nhearing-aid users: they use two hearing aids but the hearing loss may be asymmetrical. The average pure\ntone air-conduction hearing loss will be between 25 and about 60 dB in the better ear."),(0,r.kt)("p",null,"The quantification of the listeners' hearing is done with left and right pure tone air-conduction audiograms.\nThese measure the threshold at which people can hear a pure-tone sound. ",(0,r.kt)("a",{parentName:"p",href:"/docs/learning_resources/Hearing_impairment/edu_measuring_HI#audiograms"},"More information"),"."),(0,r.kt)("h2",{id:"data-file-formats-and-naming-conventions"},"Data file formats and naming conventions"),(0,r.kt)("p",null,"Audiograms data is stored in a JSON file per dataset with the following format."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "L0001": {\n        "name": "L0001",\n        "audiogram_cfs": [250, 500, 1000, 2000, 3000, 4000, 6000, 8000],\n        "audiogram_levels_l": [10, 10, 20, 30, 40, 55, 55, 60],\n        "audiogram_levels_r": [ ... ],\n    },\n    "L0002": {\n        ...\n    },\n    ...\n}\n')))}m.isMDXComponent=!0},8209:(e,a,t)=>{t(7294)}}]);