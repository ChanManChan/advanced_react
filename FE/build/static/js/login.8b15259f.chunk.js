(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{239:function(e,t,n){e.exports=n.p+"static/media/logo.e7c1e125.png"},269:function(e,t,n){"use strict";n.r(t);var a=n(40),r=n(47),o=n(23),i=n(103),l=n(92);function s(e,t){return{fieldName:e,value:t,type:l.b}}var c=n(0),u=n.n(c),d=n(219),p=n(220),g=n(208),h=n(209);function m(){var e=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  width: 100vw;\n"]);return m=function(){return e},e}var f=h.a.div(m()),b=function(e){var t=e.textAlign,n=e.children,a=e.marginTop,r=e.disableBackground,o=e.paddingLeftRight,i=e.padding,l=e.disableTopPadding,s=e.overflowY,c=e.height;return u.a.createElement(f,{height:c,padding:i,textAlign:t,marginTop:a,disableBackground:r,paddingLeftRight:o,disableTopPadding:l,overflowY:s},n)},v=n(238),C=n(160);var x=function(e){var t=e.children;return u.a.createElement(v.a,{container:!0,direction:"column",justify:"center",alignItems:"center",style:{height:"100vh",minWidth:"50vw"}},u.a.createElement(C.a,{variant:"elevation"},t))},w=n(210),y=n(211),j=n(214),O=n(213),E=n(268),P=n(240),S=n(260),k=n(261),A=function(e){Object(j.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(w.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.onChange=function(t){e.setState({value:t.target.value})},e.onKeyPress=function(t){13===t.which&&e.props.withSubmit&&e.props.onChangeAndSubmit(e.state.value)},e.onBlur=function(t){e.props.onChange(t)},e}return Object(y.a)(n,[{key:"componentDidMount",value:function(){this.setState({value:this.props.value})}},{key:"render",value:function(){var e=this.props,t=e.type,n=e.value,a=e.disabled,r=e.labelText,o=e.formControlClass,i=e.id,l=e.classes,s=e.width,c=e.required,d=e.multiline,p=e.error;return u.a.createElement(S.a,{style:{width:"100%"}},u.a.createElement(E.a,{margin:"none",value:this.state.value,disabled:a,onBlur:this.onBlur,multiline:d,type:t,className:o,id:i,onChange:this.onChange,onKeyPress:this.onKeyPress,label:r,style:{width:s}}),u.a.createElement(k.a,{classes:{root:l.error},required:c,htmlFor:i},!n&&p&&c?"".concat(r," is required"):""))}}]),n}(u.a.Component);A.defaultProps={width:"100%",withSubmit:!1};var R=Object(o.d)(Object(P.a)((function(){return{label:{fontSize:"16px",lineHeight:"1.33",letterSpacing:"0.4px",color:"#fff",marginLeft:"13px",marginRight:"13px"},input:{fontSize:"14px",lineHeight:"1.5",letterSpacing:"0.2px",color:"#fff",fontWeight:400,paddingLeft:"13px",paddingRight:"13px",marginTop:"0"},formControl:{marginTop:"0"},error:{color:"#f34336"},underline:{"&:before":{borderBottom:"2px solid rgba(255,255,255,1)"}}}})))(A),T=n(196);function L(){var e=Object(g.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n"]);return L=function(){return e},e}var B=h.a.div(L()),N=function(e){Object(j.a)(n,e);var t=Object(O.a)(n);function n(){return Object(w.a)(this,n),t.apply(this,arguments)}return Object(y.a)(n,[{key:"render",value:function(){var e=this.props,t=e.titleId,n=e.border,a=e.children,r=e.disabled,o=e.submit;return u.a.createElement(T.a,{border:n,disabled:r,onClick:o||function(){},variant:"contained",color:"primary"},u.a.createElement(B,null,a),t)}}]),n}(u.a.PureComponent);N.defaultProps={border:"2px solid #fff",disabled:!1};var I=N;function U(){var e=Object(g.a)(["\n  margin-top: 1%;\n  margin-bottom: 1%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"]);return U=function(){return e},e}var W=h.a.div(U()),z=function(e){Object(j.a)(n,e);var t=Object(O.a)(n);function n(){return Object(w.a)(this,n),t.apply(this,arguments)}return Object(y.a)(n,[{key:"render",value:function(){var e=this.props,t=e.handleUsernameChange,n=e.handlePasswordChange,a=e.submit,r=e.formControlClass,o=e.inputClass;e.forgotPasswordClass;return u.a.createElement(W,null,u.a.createElement(R,{id:"username",name:"username",labelText:"USERNAME",type:"text",disabled:!1,onChange:t,inputClass:o,formControlClass:r}),u.a.createElement(R,{id:"password",name:"password",labelText:"PASSWORD",type:"password",disabled:!1,onChange:n,inputClass:o,formControlClass:r}),u.a.createElement(I,{submit:a,titleId:"LOGIN",width:"100%",height:"40px",margin:"24px"}))}}]),n}(u.a.PureComponent),q=n(120),K=Object(q.a)((function(){return{loginCard:{display:"flex"},loginImage:{backgroundSize:"unset",width:"220px",height:"100%"},formControl:{minWidth:"40vh"},cardRoot:{backgroundColor:"rgba(255,255,255,0.2)"},logoLogin:{width:"115px"},logoLoginRoot:{display:"block",textAlign:"center"},forgotPasswordClass:{color:"#91BCE3",textAlign:"center",fontSize:"12px",marginTop:"5px",fontWeight:500},cardContentRoot:{textAlign:"left",paddingBottom:"0"}}})),D=Object(c.memo)((function(e){var t=e.dispatchPasswordChange,a=e.dispatchUsernameChange,r=e.dispatchAuthenticate,o=K();return u.a.createElement(b,{height:"100vh",textAlign:"center",width:"100%"},u.a.createElement(x,null,u.a.createElement(d.a,{classes:{root:o.cardRoot},className:o.loginCard},u.a.createElement(p.a,{classes:{root:o.cardContentRoot}},u.a.createElement("div",{className:o.logoLoginRoot},u.a.createElement("img",{alt:"logo",className:o.logoLogin,src:n(239)})),u.a.createElement(z,{forgotPasswordClass:o.forgotPasswordClass,handlePasswordChange:function(e){return t(e.target.value)},submit:r,handleUsernameChange:function(e){return a(e.target.value)},formControlClass:o.formControl,inputClass:o.input})))))})),H=n(55),J=Object(r.b)({loginPage:Object(i.a)()});var M=Object(a.b)(J,(function(e){return{dispatchUsernameChange:function(t){return e(s("username",t))},dispatchPasswordChange:function(t){return e(s("password",t))},dispatchAuthenticate:function(t){return e(Object(H.a)())}}}));t.default=Object(o.d)(M)(D)}}]);
//# sourceMappingURL=login.8b15259f.chunk.js.map