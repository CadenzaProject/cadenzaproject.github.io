"use strict";(self.webpackChunkclarity_cec_1=self.webpackChunkclarity_cec_1||[]).push([[1536],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>k});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),o=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},m=function(e){var a=o(e.components);return n.createElement(p.Provider,{value:a},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=o(t),u=r,k=d["".concat(p,".").concat(u)]||d[u]||c[u]||i;return t?n.createElement(k,l(l({ref:a},m),{},{components:t})):n.createElement(k,l({ref:a},m))}));function k(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=u;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s[d]="string"==typeof e?e:r,l[1]=s;for(var o=2;o<i;o++)l[o]=t[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6171:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var n=t(7462),r=(t(7294),t(3905));t(8209),t(4996),t(7061);const i={id:"data_overview",title:"ICASSP 2024 Data",sidebar_label:"Data specification",sidebar_position:4.2},l=void 0,s={unversionedId:"icassp_2024/data/data_overview",id:"icassp_2024/data/data_overview",title:"ICASSP 2024 Data",description:"To obtain the data and baseline code, please see the download page.",source:"@site/docs/icassp_2024/data/icassp2024_data_overview.md",sourceDirName:"icassp_2024/data",slug:"/icassp_2024/data/data_overview",permalink:"/docs/icassp_2024/data/data_overview",draft:!1,tags:[],version:"current",sidebarPosition:4.2,frontMatter:{id:"data_overview",title:"ICASSP 2024 Data",sidebar_label:"Data specification",sidebar_position:4.2},sidebar:"tutorialSidebar_icassp2024",previous:{title:"The Challenge Data",permalink:"/docs/category/the-challenge-data-1"},next:{title:"Listener Metadata",permalink:"/docs/icassp_2024/data/data_listener"}},p={},o=[{value:"A. Training, validation and evaluation data",id:"a-training-validation-and-evaluation-data",level:2},{value:"A.1 Training data",id:"a1-training-data",level:3},{value:"A.2 Validation data",id:"a2-validation-data",level:3},{value:"A.3 Evaluation (test) set",id:"a3-evaluation-test-set",level:3},{value:"B. Training augmentation data",id:"b-training-augmentation-data",level:2},{value:"B.1 New Scenes",id:"b1-new-scenes",level:3},{value:"B.2 Augmenting tracks",id:"b2-augmenting-tracks",level:3},{value:"C. Metadata Information",id:"c-metadata-information",level:2},{value:"C.1 Listener characteristics",id:"c1-listener-characteristics",level:3},{value:"C.2 Gains",id:"c2-gains",level:3},{value:"C.3 Head and loudspeaker positions",id:"c3-head-and-loudspeaker-positions",level:3},{value:"C.4 Scenes",id:"c4-scenes",level:3},{value:"C.5 Scene-listeners",id:"c5-scene-listeners",level:3},{value:"C.6 MUSDB18-HQ",id:"c6-musdb18-hq",level:3},{value:"C.7 Signals at hearing aid microphones",id:"c7-signals-at-hearing-aid-microphones",level:3},{value:"References",id:"references",level:2}],m={toc:o},d="wrapper";function c(e){let{components:a,...t}=e;return(0,r.kt)(d,(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To obtain the data and baseline code, please see the ",(0,r.kt)("a",{parentName:"p",href:"../take_part/download"},"download page"),"."),(0,r.kt)("h2",{id:"a-training-validation-and-evaluation-data"},"A. Training, validation and evaluation data"),(0,r.kt)("p",null,"The music dataset is based on MUSDB18-HQ [",(0,r.kt)("a",{parentName:"p",href:"#refs"},"1"),"] and a subset of the OlHeaD-HRTF [",(0,r.kt)("a",{parentName:"p",href:"#refs"},"2"),"]."),(0,r.kt)("h3",{id:"a1-training-data"},"A.1 Training data"),(0,r.kt)("p",null,"The training data needs to be generated by the entrants (to reduce download size). We provide:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A mirror of the MUSDB18-HQ training split. (22 GB)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"100 songs."),(0,r.kt)("li",{parentName:"ul"},"44,100 Hz sample rate."),(0,r.kt)("li",{parentName:"ul"},"16-bit."))),(0,r.kt)("li",{parentName:"ul"},"A set of 96 HRTFs. (300 KB)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"16 subjects heads"),(0,r.kt)("li",{parentName:"ul"},"6 different loudspeaker angle positions (",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mo",{parentName:"mrow"},"\xb1")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\pm")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.66666em",verticalAlign:"-0.08333em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"\xb1")))))," 22.5",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\xb0")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\degree")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"\xb0"))))),", ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mo",{parentName:"mrow"},"\xb1")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\pm")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.66666em",verticalAlign:"-0.08333em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"\xb1")))))," 30.0",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\xb0")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\degree")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"\xb0"))))),", and ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mo",{parentName:"mrow"},"\xb1")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\pm")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.66666em",verticalAlign:"-0.08333em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"\xb1")))))," 37.5",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\xb0")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\degree")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"\xb0"))))),")"))),(0,r.kt)("li",{parentName:"ul"},"400 scenes descriptions:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The MUSDB18-HQ track for each scene."),(0,r.kt)("li",{parentName:"ul"},"4 different left/right loudspeaker angle position"))),(0,r.kt)("li",{parentName:"ul"},"A script (part of the software) to generate the training set.")),(0,r.kt)("p",null,"To generate the training set please do:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download and install PyClarity as described in ",(0,r.kt)("a",{parentName:"li",href:"../take_part/download#a-software"},"Download data and software"),"."),(0,r.kt)("li",{parentName:"ol"},"Download and extract the ",(0,r.kt)("strong",{parentName:"li"},"core")," data packages as described in ",(0,r.kt)("a",{parentName:"li",href:"../take_part/download#b-data"},"Download data and software"),". "),(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("inlineCode",{parentName:"li"},"recipes/cad_icassp_2024/generate_dataset")," directory"),(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"generate_at_mic_musdb18.py")," setting the ",(0,r.kt)("inlineCode",{parentName:"li"},"path.root")," parameter to the directory where you saved the ",(0,r.kt)("strong",{parentName:"li"},"core")," data.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python3 generate_at_mic_musdb18.py \\\n  path.root=/Volumes/cadenza_data/icassp_2024/\n")),(0,r.kt)("p",null,"The script will iterate through the scenes, generating the at the microphone (at-mic) music samples.\nThis process will create:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The directory ",(0,r.kt)("inlineCode",{parentName:"li"},".../icassp_2024/audio/at_mic_music"),", where the at-the-microphone signals will be saved (88 GB). This location can be changed by setting the ",(0,r.kt)("inlineCode",{parentName:"li"},"path.output_music_dir")," parameter."),(0,r.kt)("li",{parentName:"ul"},"The file ",(0,r.kt)("inlineCode",{parentName:"li"},".../icassp_2024/metadata/at_mic_music.train.json")," with the scenes metadata necessary to run the baseline. This location can be changed by setting the ",(0,r.kt)("inlineCode",{parentName:"li"},"path.output_music_file")," parameter.")),(0,r.kt)("h3",{id:"a2-validation-data"},"A.2 Validation data"),(0,r.kt)("p",null,"An independent validation set was constructed based on the new MoisesDB dataset [",(0,r.kt)("a",{parentName:"p",href:"#refs"},"2"),"].\nSongs from MoisesDB were randomly selected to match the number of tracks per genre in the MUSDB18-HQ test set."),(0,r.kt)("admonition",{title:"Genres",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Note that MUSDB18-HQ and MoisesDB don't share the same genres for all classes.\nWhile MUSDB18-HQ includes a compound genre, ",(0,r.kt)("em",{parentName:"p"},"Pop/Rock"),", MoisesDB distinguishes between ",(0,r.kt)("em",{parentName:"p"},"Pop")," and ",(0,r.kt)("em",{parentName:"p"},"Rock")," genres more explicitly.\nAdditionally, unlike MUSDB18-HQ, MoiseDB does not feature a ",(0,r.kt)("em",{parentName:"p"},"Heavy Metal")," class.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Genre"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Validation Set"),(0,r.kt)("th",{parentName:"tr",align:"center"},"MUSDB18 Test"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Reggae"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rap"),(0,r.kt)("td",{parentName:"tr",align:"center"},"3"),(0,r.kt)("td",{parentName:"tr",align:"center"},"3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Pop"),(0,r.kt)("td",{parentName:"tr",align:"center"},"20"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rock"),(0,r.kt)("td",{parentName:"tr",align:"center"},"21"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Pop/Rock"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"37")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Heavy Metal"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Electronic"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Total"),(0,r.kt)("td",{parentName:"tr",align:"center"},"50"),(0,r.kt)("td",{parentName:"tr",align:"center"},"50")))),(0,r.kt)("p",null,"The validation dataset is available as a downloadable package in the ",(0,r.kt)("a",{parentName:"p",href:"../take_part/download"},"download data and software")," section.\nNo data generation is required."),(0,r.kt)("p",null,"Each track was divided into several consecutive 10-second excerpts, ensuring that no silent segments were selected.\nThen, a random Head-Related Transfer Function (HRTF) was applied to each excerpt.\nThis means that two excerpts from the same track will have different pairs of HRTFs applied,\nthus requiring separation models to be robust under varying HRTF conditions and for different songs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"967 samples"),(0,r.kt)("li",{parentName:"ul"},"10-second duration"),(0,r.kt)("li",{parentName:"ul"},"44,100 Hz"),(0,r.kt)("li",{parentName:"ul"},"16-bit")),(0,r.kt)("p",null,"Note that for the validation dataset, only two listeners were assigned per scene in the scene_listeners.json file.\nFor more details about the scene_listener metadata file, please refer to section ","[C.5 Scene-listeners]","(#C.5 Scene-listeners) below. "),(0,r.kt)("h3",{id:"a3-evaluation-test-set"},"A.3 Evaluation (test) set"),(0,r.kt)("admonition",{title:"Evaluation package release",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Please, refer to the challenge ",(0,r.kt)("a",{parentName:"p",href:"../take_part/key_dates"},(0,r.kt)("strong",{parentName:"a"},"timeline"))," to know when the evaluation set will be released.")),(0,r.kt)("p",null,"The evaluation set is based in the MUSDB18-HQ test set (50 tracks).\nThe MUSDB18-HQ has the following genre distribution:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Genre"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Tracks"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Reggae"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rap"),(0,r.kt)("td",{parentName:"tr",align:"center"},"3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Pop/Rock"),(0,r.kt)("td",{parentName:"tr",align:"center"},"37")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Heavy Metal"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Electronic"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Total"),(0,r.kt)("td",{parentName:"tr",align:"center"},"50")))),(0,r.kt)("p",null,"Following the same procedure as the validation set, each track is divided into several consecutive 10-second excerpts,\nensuring that no silent segments are selected. Then, a randomly selected HRTF is applied to each excerpt. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1,085 samples"),(0,r.kt)("li",{parentName:"ul"},"10-second duration"),(0,r.kt)("li",{parentName:"ul"},"44,100 Hz"),(0,r.kt)("li",{parentName:"ul"},"16-bit")),(0,r.kt)("p",null,"Unlike the validation set, each scene in the test set should be processed for all the test listeners (53 listeners)."),(0,r.kt)("h2",{id:"b-training-augmentation-data"},"B. Training augmentation data"),(0,r.kt)("h3",{id:"b1-new-scenes"},"B.1 New Scenes"),(0,r.kt)("p",null,"You can augment the training data by generating more random training scenes.\nFor this, we provide the ",(0,r.kt)("inlineCode",{parentName:"p"},"generate_dataset/generate_train_scenes.py")," script. This script shares the ",(0,r.kt)("inlineCode",{parentName:"p"},"config.yaml")," with\n",(0,r.kt)("inlineCode",{parentName:"p"},"generate_dataset/generate_at_mic_musdb18.py")," script."),(0,r.kt)("p",null,"To generate more scenes, you need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Set the parameter ",(0,r.kt)("inlineCode",{parentName:"li"},"scene.number_scenes_per_song")," to the number of the different scenes to generate for each track. "),(0,r.kt)("li",{parentName:"ul"},"The default value of scenes per song is ",(0,r.kt)("inlineCode",{parentName:"li"},"4"),"."),(0,r.kt)("li",{parentName:"ul"},"This script uses the track name to seed the random generation. This ensures:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"a reproducible scenes' generation."),(0,r.kt)("li",{parentName:"ul"},"increasing the number of scenes per song will always result in the 4 scenes provided in the ",(0,r.kt)("strong",{parentName:"li"},"core")," package plus new scenes."))),(0,r.kt)("li",{parentName:"ul"},"Run the script as:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python3 generate_train_scenes.py \\\n  path.root=/Volumes/cadenza_data/icassp_2024/ \\\n  scene.number_scenes_per_song=<number greater than 4>\n")),(0,r.kt)("p",null,"Additionally, you can change the ",(0,r.kt)("inlineCode",{parentName:"p"},"scene_listener.number_listeners_per_scene")," parameter to set how many listeners pair with the same scene.\nBy default, this parameter is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"2"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python3 generate_train_scenes.py \\\n  path.root=/Volumes/cadenza_data/icassp_2024/ \\\n  scene_listener.number_listeners_per_scene=<number greater than 2>\n")),(0,r.kt)("admonition",{title:"Consider that ...",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Generating new scenes will not preserve the scene_id from the ",(0,r.kt)("strong",{parentName:"p"},"core")," package. This is because the id is assigned incrementally.\nHowever, this does not have any significance in the process as these scenes are used exclusively for training separation models.")),(0,r.kt)("h3",{id:"b2-augmenting-tracks"},"B.2 Augmenting tracks"),(0,r.kt)("p",null,"Teams can supplement the training data using the following resources:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bach10"),(0,r.kt)("li",{parentName:"ul"},"FMA-small"),(0,r.kt)("li",{parentName:"ul"},"MedleydB version 1 and version 2")),(0,r.kt)("p",null,"We leave the teams to decide how to use these as part of the training of their systems. The supplemental data will need HRTFs applied to them as we did for MUSDB18-HQ.\nNote, 46 songs from MedleydB version 1 are already part of the training set in MUSDB18-HQ."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"MUSDB18-HQ already contains 46 tracks from the MedleyDB version 1"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Classic Education - NightOwl"),(0,r.kt)("li",{parentName:"ul"},"Aimee Norwich - Child"),(0,r.kt)("li",{parentName:"ul"},"Alexander Ross - Goodbye Bolero"),(0,r.kt)("li",{parentName:"ul"},"Alexander Ross - Velvet Curtain"),(0,r.kt)("li",{parentName:"ul"},"Auctioneer - Our Future Faces"),(0,r.kt)("li",{parentName:"ul"},"AvaLuna - Waterduct"),(0,r.kt)("li",{parentName:"ul"},"BigTroubles - Phantom"),(0,r.kt)("li",{parentName:"ul"},"Celestial Shore - Die For Us"),(0,r.kt)("li",{parentName:"ul"},"Clara Berry And Wooldog - Air Traffic"),(0,r.kt)("li",{parentName:"ul"},"Clara Berry And Wooldog - Stella"),(0,r.kt)("li",{parentName:"ul"},"Clara Berry And Wooldog - Waltz For My Victims"),(0,r.kt)("li",{parentName:"ul"},"Creepoid - OldTree"),(0,r.kt)("li",{parentName:"ul"},"Dreamers Of The Ghetto - Heavy Love"),(0,r.kt)("li",{parentName:"ul"},"Faces On Film - Waiting For Ga"),(0,r.kt)("li",{parentName:"ul"},"Grants - PunchDrunk"),(0,r.kt)("li",{parentName:"ul"},"Helado Negro - Mitad Del Mundo"),(0,r.kt)("li",{parentName:"ul"},"Hezekiah Jones - Borrowed Heart"),(0,r.kt)("li",{parentName:"ul"},"Hop Along - Sister Cities"),(0,r.kt)("li",{parentName:"ul"},"Invisible Familiars - Disturbing Wildlife"),(0,r.kt)("li",{parentName:"ul"},"Lushlife - Toynbee Suite"),(0,r.kt)("li",{parentName:"ul"},"Matthew Entwistle - Dont You Ever"),(0,r.kt)("li",{parentName:"ul"},"Meaxic - Take A Step"),(0,r.kt)("li",{parentName:"ul"},"Meaxic - You Listen"),(0,r.kt)("li",{parentName:"ul"},"Music Delta - 80s Rock"),(0,r.kt)("li",{parentName:"ul"},"Music Delta - Beatles"),(0,r.kt)("li",{parentName:"ul"},"Music Delta - Britpop"),(0,r.kt)("li",{parentName:"ul"},"Music Delta - Country1"),(0,r.kt)("li",{parentName:"ul"},"Music Delta - Country2"),(0,r.kt)("li",{parentName:"ul"},"Music Delta - Disco"),(0,r.kt)("li",{parentName:"ul"},"Music Delta - Gospel"),(0,r.kt)("li",{parentName:"ul"},"Music Delta - Grunge"),(0,r.kt)("li",{parentName:"ul"},"Music Delta - Hendrix"),(0,r.kt)("li",{parentName:"ul"},"Music Delta - Punk"),(0,r.kt)("li",{parentName:"ul"},"Music Delta - Reggae"),(0,r.kt)("li",{parentName:"ul"},"Music Delta - Rock"),(0,r.kt)("li",{parentName:"ul"},"Music Delta - Rockabilly"),(0,r.kt)("li",{parentName:"ul"},"Night Panther - Fire"),(0,r.kt)("li",{parentName:"ul"},"Port St Willow - Stay Even"),(0,r.kt)("li",{parentName:"ul"},"Secret Mountains - High Horse"),(0,r.kt)("li",{parentName:"ul"},"Snowmine - Curfews"),(0,r.kt)("li",{parentName:"ul"},"Steven Clark - Bounty"),(0,r.kt)("li",{parentName:"ul"},"Strand Of Oaks - Spacestation"),(0,r.kt)("li",{parentName:"ul"},"Sweet Lights - You Let Me Down"),(0,r.kt)("li",{parentName:"ul"},"The Districts - Vermont"),(0,r.kt)("li",{parentName:"ul"},"The Scarlet Brand - Les Fleurs Du Mal"),(0,r.kt)("li",{parentName:"ul"},"The So So Glos - Emergency"))),(0,r.kt)("p",null,"For more information on augmenting and supplementing the music training data, please see the ",(0,r.kt)("a",{parentName:"p",href:"../take_part/rules"},"rules"),"."),(0,r.kt)("h2",{id:"c-metadata-information"},"C. Metadata Information"),(0,r.kt)("h3",{id:"c1-listener-characteristics"},"C.1 Listener characteristics"),(0,r.kt)("p",null,"We provide metadata characterising the hearing abilities of listeners so the audio signals can be personalised.\nThe quantification of the listeners' hearing is done with left and right audiograms. These measure the threshold at which people can hear a pure-tone sound.\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learning_resources/Hearing_impairment/edu_measuring_HI#audiograms"},"More information on what audiograms are and how they're measured"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For training, we provide 83 listener audiograms that were collected for the ",(0,r.kt)("a",{parentName:"li",href:"https://claritychallenge.org/"},"Clarity project"),"."),(0,r.kt)("li",{parentName:"ul"},"For validation, we constructed a new set of 50 listener audiograms from the ",(0,r.kt)("a",{parentName:"li",href:"https://zenodo.org/record/4995261#.Y_3O1HbP2Hu"},(0,r.kt)("em",{parentName:"a"},"von Gablenz and Holube (2019)"),"\ndataset"),"."),(0,r.kt)("li",{parentName:"ul"},"For evaluation, we will use a set of 52 listener audiograms use in ",(0,r.kt)("a",{parentName:"li",href:"../../cadenza1/cc1_intro"},"first Cadenza Challenges"))),(0,r.kt)("p",null,"Visit ",(0,r.kt)("a",{parentName:"p",href:"data_listener"},"Listener Metadata")," for more details."),(0,r.kt)("h3",{id:"c2-gains"},"C.2 Gains"),(0,r.kt)("p",null,"We provide metadata giving the gains to use for rebalancing the mixture. There are 1105 possible combinations created by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Choosing how many VDBO tracks have their gain altered: 1, 2, or 3."),(0,r.kt)("li",{parentName:"ul"},"Choosing the gain for those tracks: ","[-10, -6, -3, 3, 6, 10]"," dB.")),(0,r.kt)("p",null,"In the metadata, this is then reported as the gain for each of the VDBO track. The same set of gains are used for training, validation and evaluation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{   \n    ...\n    "gain_0007": {    \n        "vocals":  10, # Amplify vocals in 10 dB\n        "drums" :   0,\n        "bass"  :   0,\n        "other" :   0\n    },\n    ...\n    "gain_0138": {\n        "vocals":   0,\n        "drums" : -10, # Attenuate drums in 10 dB\n        "bass"  :   6, # Amplify bass in 6 dB\n        "other" :   0\n    },\n    ...\n    "gain_0381": {\n        "vocals":   3, # Amplify vocals in 3 dB\n        "drums" :  10, # Amplify drums in 10 dB\n        "bass"  :  -6, # Attenuate bass in 6 dB\n        "other" :   0\n    },\n    ...\n}\n')),(0,r.kt)("h3",{id:"c3-head-and-loudspeaker-positions"},"C.3 Head and loudspeaker positions"),(0,r.kt)("p",null,"We provide metadata indicating the subject head and loudspeaker positions.\nThis set corresponds to a subset of the OlHeaD-HRTF [",(0,r.kt)("a",{parentName:"p",href:"#refs"},"2"),"] dataset.\nThere are 16 subjects and 9 possible angles combinations."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Left and right HRTFs angles combination"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Angle Left"),(0,r.kt)("th",{parentName:"tr",align:null},"Angle Right"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-22.5"),(0,r.kt)("td",{parentName:"tr",align:null},"22.5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-22.5"),(0,r.kt)("td",{parentName:"tr",align:null},"30.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-22.5"),(0,r.kt)("td",{parentName:"tr",align:null},"37.5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-30.0"),(0,r.kt)("td",{parentName:"tr",align:null},"22.5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-30.0"),(0,r.kt)("td",{parentName:"tr",align:null},"30.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-30.0"),(0,r.kt)("td",{parentName:"tr",align:null},"37.5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-37.5"),(0,r.kt)("td",{parentName:"tr",align:null},"22.5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-37.5"),(0,r.kt)("td",{parentName:"tr",align:null},"30.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-37.5"),(0,r.kt)("td",{parentName:"tr",align:null},"37.5"))))),(0,r.kt)("p",null,"The data is provided in a JSON file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "hlp_0001": {\n        "subject"    : "VP_E1",\n        "left_angle" : -37.5,\n        "right_angle": 22.5,\n        "mic"        : "BTE_fr"\n    },\n    ...\n}\n')),(0,r.kt)("h3",{id:"c4-scenes"},"C.4 Scenes"),(0,r.kt)("p",null,"The scene metadata is provided in a JSON file with the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "scene_10001": {\n        "music" : "A Classic Education - NightOwl",\n        "gain"  : "gain_0639",\n        "head_loudspeaker_positions": "hlp_0056"\n    },\n    ...\n}\n')),(0,r.kt)("h3",{id:"c5-scene-listeners"},"C.5 Scene-listeners"),(0,r.kt)("p",null,"The scene-listener metadata is provided in a JSON file with the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "scene_10001": [\n        "L0066",\n        "L0057"\n    ],\n    ...\n}\n')),(0,r.kt)("h3",{id:"c6-musdb18-hq"},"C.6 MUSDB18-HQ"),(0,r.kt)("p",null,"The MUSDB18-HQ metadata is provided in a single JSON file per dataset."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "Track Name" : "A Classic Education - NightOwl",\n        "Genre"      : "Singer/Songwriter",\n        "Source"     : "MedleyDB",\n        "License"    : "CC BY-NC-SA",\n        "Split"      : "train"\n    },\n    ...\n]\n')),(0,r.kt)("h3",{id:"c7-signals-at-hearing-aid-microphones"},"C.7 Signals at hearing aid microphones"),(0,r.kt)("p",null,"The at_the_mic metadata is provided in a JSON file with the following structure.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "A Classic Education - NightOwl-hlp_0056": {\n        "Track Name" : "A Classic Education - NightOwl-hlp_0056",\n        "Split"      : "valid",\n        "Path"       : "valid/A Classic Education - NightOwl-hlp_0056"\n    },\n    ...\n}\n')),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("a",{name:"refs"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"[1]")," Rafii, Z., Liutkus, A., St\xf6ter, F.-R., Mimilakis, S. I., and Bittner, R. (2019). MUSDB18-HQ - an Uncompressed Version of MUSDB18. ","[Dataset]",". doi:10.5281/zenodo.3338373",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"[2]")," F. Denk, S.M.A. Ernst, S.D. Ewert and B. Kollmeier, (2018): Adapting hearing devices to the individual ear acoustics: Database and target response correction functions for various device styles. Trends in Hearing, vol 22, p. 1-19. DOI:10.1177/2331216518779313",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"[3]")," Pereira, I., Ara\xfajo, F., Korzeniowski, F., & Vogl, R. (2023). Moisesdb: A dataset for source separation beyond 4-stems. arXiv preprint arXiv:2307.15913"))}c.isMDXComponent=!0},8209:(e,a,t)=>{t(7294)}}]);