(window["webpackJsonpreact-burger-builder"]=window["webpackJsonpreact-burger-builder"]||[]).push([[5],{102:function(e,n,r){},106:function(e,n,r){"use strict";r.r(n);var t=r(4),a=r(5),i=r(7),o=r(6),c=r(8),u=r(0),s=r.n(u),d=(r(102),function(e){var n=[];for(var r in e.ingredients)n.push({name:r,amount:e.ingredients[r]});var t=n.map(function(e){return s.a.createElement("span",{style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid #ccc",padding:"5px"},key:e.name}," ",e.name," (",e.amount,")")});return s.a.createElement("div",{className:"Order"},s.a.createElement("p",null,"Ingredients: ",t),s.a.createElement("p",null,"Price: ",s.a.createElement("strong",null,"GBP ",Number.parseFloat(e.price).toFixed(2))))}),l=r(20),p=r(15),m=r(16),b=r(36),f=r(35),h=function(e){function n(){return Object(t.a)(this,n),Object(i.a)(this,Object(o.a)(n).apply(this,arguments))}return Object(c.a)(n,e),Object(a.a)(n,[{key:"componentDidMount",value:function(){this.props.onFetchOrders(this.props.token,this.props.userId)}},{key:"render",value:function(){var e=s.a.createElement(f.a,null);return this.props.loading||(e=this.props.orders.map(function(e){return s.a.createElement(d,{key:e.id,ingredients:e.ingredients,price:e.price})})),s.a.createElement("div",null,e)}}]),n}(u.Component);n.default=Object(p.b)(function(e){return{orders:e.order.orders,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}},function(e){return{onFetchOrders:function(n,r){return e(m.d(n,r))}}})(Object(b.a)(h,l.a))}}]);
//# sourceMappingURL=5.3208ba6d.chunk.js.map