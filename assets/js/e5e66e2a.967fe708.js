"use strict";(self.webpackChunkcadenza=self.webpackChunkcadenza||[]).push([[9946],{85122:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=i(85893),s=i(11151),t=i(44996);const r={id:"cc1_core_software",title:"Core Software",sidebar_label:"Core Software",sidebar_position:6.2},o=void 0,l={id:"cadenza1/Software/cc1_core_software",title:"Core Software",description:"The code is provided as a Clarity_Cadenza GitHub repository containing individual Python tools and a complete baseline system.",source:"@site/docs/cadenza1/Software/cc1_core_software.md",sourceDirName:"cadenza1/Software",slug:"/cadenza1/Software/cc1_core_software",permalink:"/docs/cadenza1/Software/cc1_core_software",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6.2,frontMatter:{id:"cc1_core_software",title:"Core Software",sidebar_label:"Core Software",sidebar_position:6.2},sidebar:"tutorialSidebar_cad1",previous:{title:"Baseline",permalink:"/docs/cadenza1/Software/cc1_baseline"},next:{title:"Additional tools",permalink:"/docs/cadenza1/Software/cc1_additional_tools"}},c={},d=[{value:"1. Task 1: Headphones",id:"1-task-1-headphones",level:2},{value:"1.1 Baseline Demixer",id:"11-baseline-demixer",level:3},{value:"2. Task 2: Car stereo",id:"2-task-2-car-stereo",level:2},{value:"2.1 Car acoustics model",id:"21-car-acoustics-model",level:3},{value:"3. HAAQI Audio Qiality model",id:"3-haaqi-audio-qiality-model",level:2},{value:"4. References",id:"4-references",level:2}];function h(e){const a={a:"a",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.p,{children:["The code is provided as a ",(0,n.jsx)(a.a,{href:"https://github.com/claritychallenge/clarity",children:"Clarity_Cadenza GitHub repository"})," containing individual Python tools and a complete baseline system."]}),"\n",(0,n.jsx)(a.h2,{id:"1-task-1-headphones",children:"1. Task 1: Headphones"}),"\n",(0,n.jsx)(a.p,{children:"The key elements of the task1 baseline system are the:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Baseline demixer"}),"\n",(0,n.jsx)(a.li,{children:"HAAQI music quality model."}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"11-baseline-demixer",children:"1.1 Baseline Demixer"}),"\n",(0,n.jsxs)(a.p,{children:["The demixing stage simply takes the out-of-the-box Hybrid ",(0,n.jsx)(a.a,{href:"https://arxiv.org/abs/2111.03600",children:"Demucs"})," music source\nseparation model to obtain stereo VDBO stems. This model is publicly available in the\n",(0,n.jsx)(a.a,{href:"https://pytorch.org/audio/main/generated/torchaudio.pipelines.HDEMUCS_HIGH_MUSDB.html#torchaudio.pipelines.HDEMUCS_HIGH_MUSDB",children:"TorchAudio library"}),".\nThen, it applies a NAL-R [1] and compression procedure to each stem to personalize the output."]}),"\n",(0,n.jsx)(a.p,{children:"Inputs: Stereo songs and Listeners characteristics.\nOutput: 8 stems (left and right VDBO stems) for each song-listener.\nAnd 1 remixed signal for listener panel."}),"\n",(0,n.jsx)(a.h2,{id:"2-task-2-car-stereo",children:"2. Task 2: Car stereo"}),"\n",(0,n.jsx)(a.p,{children:"The key elements of the task2 baseline system are:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Car acoustics model"}),"\n",(0,n.jsx)(a.li,{children:"HAAQI music quality model"}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"21-car-acoustics-model",children:"2.1 Car acoustics model"}),"\n",(0,n.jsxs)("figure",{id:"fig10",children:[(0,n.jsx)("img",{width:"800",src:(0,t.Z)("/img/car_acoustics.png")}),(0,n.jsx)("figcaption",{children:"Figure 1, The Car Acoustics Model."})]}),"\n",(0,n.jsx)(a.p,{children:"The scene metadata contains several parameters that is used by the car scene metadata."}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsxs)(a.li,{children:["Using the car parameters, a car noise signal is generated. For details of the Car Noise generator, see\n",(0,n.jsx)(a.a,{href:"/docs/cadenza1/Software/cc1_additional_tools",children:"additional tools"}),". This signal is added with anechoic HRTFs\nat the front microphone of the Hearing Aid (HA)."]}),"\n",(0,n.jsx)(a.li,{children:"Using the head rotation angle, the model adds car HRTFs at the front microphone of the HA to the enhanced music."}),"\n",(0,n.jsx)(a.li,{children:"These two signal are then added together at a given SNR at the front microphone of the HA."}),"\n",(0,n.jsx)(a.li,{children:"The resulting signal is pass through a fixed HA composed of a simple NAL-R amplification."}),"\n",(0,n.jsx)(a.li,{children:"The HA output is the signal use for evaluation."}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"3-haaqi-audio-qiality-model",children:"3. HAAQI Audio Qiality model"}),"\n",(0,n.jsxs)(a.p,{children:["This is a python implementation of the Hearing Aid Audio Quality Index (HAAQI) model which is used for objective estimation.\nThis will be used in the stage 1 evaluation of entrants (see ",(0,n.jsx)(a.a,{href:"/docs/cadenza1/Take%20part/cc1_rules#stage-1-objective-evaluation",children:"Rules"}),")."]}),"\n",(0,n.jsx)(a.p,{children:"Note that HAAQI is not a binaural metric, instead, each channel must be processed separately. We average the left and right\nscores to produce a final overall score."}),"\n",(0,n.jsx)(a.p,{children:"The reference signals for HAAQI are:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Task 1 Headphone. The original left and right channels of the music tracks."}),"\n",(0,n.jsx)(a.li,{children:"Task 2 Car. The references are the left and right signals at the ear canal of a listener auditioning the music over a stereo set-up of two loudspeakers, in an anechoic room."}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"4-references",children:"4. References"}),"\n",(0,n.jsx)("a",{name:"refs"}),"\n",(0,n.jsx)(a.p,{children:'[1] Byrne, Denis, and Harvey Dillon. "The National Acoustic Laboratories\'(NAL) new procedure for selecting the gain and frequency response of a hearing aid." Ear and hearing 7.4 (1986): 257-265.'})]})}function u(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,a,i)=>{i.d(a,{Z:()=>o,a:()=>r});var n=i(67294);const s={},t=n.createContext(s);function r(e){const a=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(t.Provider,{value:a},e.children)}}}]);