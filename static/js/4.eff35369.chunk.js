(window["webpackJsonpreact-burger-builder"]=window["webpackJsonpreact-burger-builder"]||[]).push([[4],{103:function(e,t,a){},104:function(e,t,a){"use strict";a.r(t);var n=a(17),i=a(4),r=a(5),l=a(7),u=a(6),o=a(8),c=a(0),s=a.n(c),d=a(15),h=a(19),p=a(30),g=a(35),m=a(98),v=a(16),f=(a(103),a(3)),b=function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={controls:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your Email"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Password"},value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}},isSignup:!0},a.inputChangedHandler=function(e,t){var i=Object(f.b)(a.state.controls,Object(n.a)({},t,Object(f.b)(a.state.controls[t],{value:e.target.value,valid:Object(f.a)(e.target.value,a.state.controls[t].validation),touched:!0})));a.setState({controls:i})},a.submitHandler=function(e){e.preventDefault(),a.props.onAuth(a.state.controls.email.value,a.state.controls.password.value,a.state.isSignup)},a.switchAuthModeHandler=function(){a.setState(function(e){return{isSignup:!e.isSignup}})},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.buildingBurger||"/"===this.props.authRedirectPath||this.props.onSetAuthRedirectPath()}},{key:"render",value:function(){var e=this,t=[];for(var a in this.state.controls)t.push({id:a,config:this.state.controls[a]});var n=t.map(function(t){return s.a.createElement(m.a,{key:t.id,inputtype:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(a){return e.inputChangedHandler(a,t.id)}})});this.props.loading&&(n=s.a.createElement(g.a,null));var i=null;this.props.error&&(i=s.a.createElement("p",null,this.props.error.message));var r=null;return this.props.isAutheticated&&(r=s.a.createElement(h.a,{to:this.props.authRedirectPath})),s.a.createElement("div",{className:"Auth"},r,i,s.a.createElement("form",{onSubmit:this.submitHandler},n,s.a.createElement(p.a,{btnType:"Success"},"Submit")),s.a.createElement(p.a,{clicked:this.switchAuthModeHandler,btnType:"Danger"},"SWITCH TO ",this.state.isSignup?"SIGN IN":"SIGN UP"))}}]),t}(c.Component);t.default=Object(d.b)(function(e){return{loading:e.auth.loading,error:e.auth.error,isAutheticated:null!=e.auth.token,buildingBurger:e.burgerBuilder.building,authRedirectPath:e.auth.authRedirectPath}},function(e){return{onAuth:function(t,a,n){return e(v.b(t,a,n))},onSetAuthRedirectPath:function(){return e(v.j("/"))}}})(b)},98:function(e,t,a){"use strict";var n=a(0),i=a.n(n);a(99);t.a=function(e){var t=null,a=["Input"];switch(e.invalid&&e.shouldValidate&&e.touched&&a.push("Invalid"),e.inputtype){case"input":t=i.a.createElement("input",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=i.a.createElement("textarea",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=i.a.createElement("select",{className:a.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map(function(e){return i.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));break;default:t=i.a.createElement("input",Object.assign({className:a.join("")},e.elementConfig,{value:e.value,onChange:e.changed}))}return i.a.createElement("div",null,i.a.createElement("label",{className:"Label"},e.label),t)}},99:function(e,t,a){}}]);
//# sourceMappingURL=4.eff35369.chunk.js.map