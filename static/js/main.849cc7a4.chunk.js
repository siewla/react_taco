(this.webpackJsonpreact_taco=this.webpackJsonpreact_taco||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(6),l=n.n(r),o=(n(12),n(13),n(1)),i=n(2),u=n(4),s=n(3),h=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h2",null,"Seasoning: ",this.props.taco.seasoning.name),c.a.createElement("h3",null,this.props.taco.seasoning.recipe),c.a.createElement("h2",null,"mixin: ",this.props.taco.mixin.name),c.a.createElement("h3",null,this.props.taco.mixin.recipe),c.a.createElement("h2",null,"shell: ",this.props.taco.shell.name),c.a.createElement("h3",null,this.props.taco.shell.recipe),c.a.createElement("h2",null,"condiment: ",this.props.taco.condiment.name),c.a.createElement("h3",null,this.props.taco.condiment.recipe))}}]),n}(a.Component),m=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={taco:null,baseURL:"https://taco-randomizer.herokuapp.com/random/?full-tack=true"},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch(this.state.baseURL).then((function(e){return e.json()})).then((function(t){e.setState({taco:t})}))}},{key:"render",value:function(){return null===this.state.taco?c.a.createElement("div",null,c.a.createElement("h1",null,"Loading")):c.a.createElement("div",null,c.a.createElement(h,{taco:this.state.taco}))}}]),n}(a.Component);var p=function(){return c.a.createElement("div",null,c.a.createElement(m,null))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p,null)),document.getElementById("root"))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.849cc7a4.chunk.js.map