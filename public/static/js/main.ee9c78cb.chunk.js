(window.webpackJsonppms_ui=window.webpackJsonppms_ui||[]).push([[0],{59:function(t,e,a){t.exports=a(98)},70:function(t,e,a){},98:function(t,e,a){"use strict";a.r(e);var r=a(0),n=a.n(r),o=a(15),c=a.n(o),s=a(16),l=a(7),u=a(36),i=a(51),d=a.n(i),p=a(52),m=a(53),h=a(20);function f(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}var P={editObject:void 0};var E=Object(l.c)({storedState:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"EDIT_PRODUCT":return function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?f(a,!0).forEach((function(e){Object(h.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):f(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},t,{editObject:e.payload});default:return t}}}),b={key:"root",storage:d.a},y=Object(u.a)(b,E),g=Object(l.d)(y,Object(l.a)(p.a,m.logger)),v=(Object(u.b)(g),g),O=(a(70),a(21)),j=a(22),T=a(25),w=a(23),D=a(26),C=a(105),N=a(100),S=a(56),L=a(101),k=a(104),x=(a(31),a(18)),I=a.n(x),_="http://localhost:8080",A="saveProduct",B="fetchProducts",G="deleteProduct",U="editProduct";function M(t){return console.log(t),function(e){return function(t){var e="".concat(_,"/").concat(A);return console.log(e),I()({method:"POST",url:e.trim(),data:t,headers:{"Content-Type":"application/json; charset=utf-8"}})}(t).then((function(t){return console.log(t.data),t.data}))}}function R(){return function(t){return function(){var t="".concat(_,"/").concat(B);return I()({method:"GET",url:t.trim(),headers:{"Content-Type":"application/json; charset=utf-8"}})}().then((function(t){return console.log(t.data),t.data}))}}function F(t){return console.log(t),function(e){return function(t){var e="".concat(_,"/").concat(G,"/").concat(t);return I()({method:"Patch",url:e.trim(),headers:{"Content-Type":"application/json; charset=utf-8"}})}(t).then((function(t){return R()(e).then((function(e){return console.log(e),[e,t]}))}))}}function J(t){return{type:"EDIT_PRODUCT",payload:t}}function K(t){return console.log(t),function(e){return function(t){var e="".concat(_,"/").concat(U,"/").concat(t.id);return I()({method:"PUT",url:e.trim(),data:t,headers:{"Content-Type":"application/json; charset=utf-8"}})}(t).then((function(t){return console.log(t.data),e(function(t){return{type:"EDIT_PRODUCT",payload:t}}(void 0)),t.data}))}}var q=a(12),z=function(t){function e(t){var a;return Object(O.a)(this,e),(a=Object(T.a)(this,Object(w.a)(e).call(this,t))).inputChange=function(t){a.setState(Object(h.a)({},t.target.name,t.target.value))},a.setShow=function(t){a.setState({showToast:t})},a.submitForm=function(){var t=a.state,e=t.productName,r=t.productDescription,n=t.productPrice;if(e)if(n)if(n=Number(n),a.props.editList){var o=a.props.editList._id;a.props.editProductDetails({id:o,productName:e,productDescription:r,productPrice:n}).then((function(t){console.log("sssd"+t),console.log(t),a.setState({message:"Product : ".concat(t.productName," editted successfully "),showToast:!0,toastType:"success",redirect:!0})}))}else a.props.registerProduct({productName:e,productDescription:r,productPrice:n}).then((function(t){console.log("sssd"+t),console.log(t),a.setState({message:"Product : ".concat(t.productName," registered successfully "),showToast:!0,toastType:"success",redirect:!0})}));else a.setState({message:"Product price can't be empty ",showToast:!0,toastType:"error"});else a.setState({message:"Product name can't be empty ",showToast:!0,toastType:"error"})},a.state={productName:"",productDescription:"",productPrice:"",message:"",showToast:!1,toastType:"",redirect:!1,productDetails:"Add Product Details"},a}return Object(D.a)(e,t),Object(j.a)(e,[{key:"componentDidMount",value:function(){if(console.log(this.props.editList),this.props.editList){console.log("dfdf");var t=this.props.editList,e=t.productName,a=t.productDescription,r=t.productPrice;this.setState({productDetails:"Edit Product Details",productName:e,productDescription:a,productPrice:r})}}},{key:"render",value:function(){var t=this;return this.state.redirect?n.a.createElement(q.a,{push:!0,to:"/prodList"}):n.a.createElement("div",{className:"product-body"},n.a.createElement("h3",null,this.state.productDetails),n.a.createElement(C.a,null,n.a.createElement(C.a.Group,{as:N.a,controlId:"formPlaintextEmail"},n.a.createElement(C.a.Label,{column:!0,sm:"3"},"Product Name"),n.a.createElement(S.a,{sm:"9"},n.a.createElement(C.a.Control,{type:"text",name:"productName",value:this.state.productName,onChange:function(e){return t.inputChange(e)},placeholder:"Product name"}))),n.a.createElement(C.a.Group,{as:N.a,controlId:"formPlaintextPassword"},n.a.createElement(C.a.Label,{column:!0,sm:"3"},"Product Description"),n.a.createElement(S.a,{sm:"9"},n.a.createElement(C.a.Control,{name:"productDescription",value:this.state.productDescription,onChange:function(e){return t.inputChange(e)},as:"textarea",rows:"3"}))),n.a.createElement(C.a.Group,{as:N.a,controlId:"formPlaintextEmail"},n.a.createElement(C.a.Label,{column:!0,sm:"3"},"Product Price"),n.a.createElement(S.a,{sm:"9"},n.a.createElement(C.a.Control,{type:"number",name:"productPrice",value:this.state.productPrice,onChange:function(e){return t.inputChange(e)},placeholder:"Product Price"}))),n.a.createElement(L.a,{variant:"primary",onClick:this.submitForm},"Submit")),n.a.createElement(k.a,{onClose:function(){return t.setShow(!1)},show:this.state.showToast,delay:3e3,className:"toast "+this.state.toastType,autohide:!0},n.a.createElement(k.a.Body,null,this.state.message)))}}]),e}(r.Component);var H=Object(s.b)((function(t){return{editList:t.storedState.editObject}}),(function(t){return Object(l.b)({registerProduct:M,editProductDetails:K},t)}))(z),Q=a(103),V=a(13);var W=function(){return n.a.createElement("header",null,n.a.createElement("nav",{className:"header-container"},n.a.createElement("h2",{className:"top-heading"},"Product Management System"),n.a.createElement(Q.a,{variant:"tabs",defaultActiveKey:"/"},n.a.createElement(Q.a.Item,null,n.a.createElement(V.b,{to:"/",activeClassName:"selected",exact:!0},"Add Product")),n.a.createElement(Q.a.Item,null,n.a.createElement(V.b,{to:"/prodList",activeClassName:"selected"},"Product List")))))},X=a(102),Y=function(t){function e(t){var a;return Object(O.a)(this,e),(a=Object(T.a)(this,Object(w.a)(e).call(this,t))).setShow=function(t){a.setState({showToast:t})},a.editProduct=function(t){a.props.editProduct(t),a.setState({redirect:!0})},a.filterTable=function(t){var e=a.state.product.filter((function(e){return-1!==e.productName.toLowerCase().indexOf(t.target.value.toLowerCase())}));a.setState({filterProduct:e})},a.state={showToast:!1,toastType:"",product:[],filterProduct:[],redirect:!1},a}return Object(D.a)(e,t),Object(j.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.props.fetchAllProducts().then((function(e){t.setState({product:e,filterProduct:e})}))}},{key:"deleteProduct",value:function(t){var e=this;this.props.deleteSelectedProduct(t).then((function(t){console.log(t),e.setState({showToast:!0,toastType:"success",message:"Product : ".concat(t[1].data.productName," deleted successfully"),product:t[0],filterProduct:t[0]})}))}},{key:"render",value:function(){var t,e=this;return console.log(this.state.filterProduct.length),this.state.redirect?n.a.createElement(q.a,{push:!0,to:"/"}):(t=this.state.filterProduct.length>0?this.state.filterProduct.map((function(t,a){return n.a.createElement("tr",{key:t._id},n.a.createElement("td",null,a+1),n.a.createElement("td",null,t.productName),n.a.createElement("td",null,t.productDescription),n.a.createElement("td",null,t.productPrice),n.a.createElement("td",{onClick:function(){return e.editProduct(t)}},n.a.createElement("i",{className:"fa fa-edit"})),n.a.createElement("td",{onClick:function(){return e.deleteProduct(t._id)}},n.a.createElement("i",{className:"fa fa-trash"})))})):n.a.createElement("tr",null,n.a.createElement("td",null,"Product list is empty")),n.a.createElement("div",{className:"table-content"},n.a.createElement("input",{className:"input-search",type:"text",onChange:function(t){return e.filterTable(t)},placeholder:"Search By Product Name..."}),n.a.createElement(X.a,{responsive:!0},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"#"),n.a.createElement("th",null,"Product Name"),n.a.createElement("th",null,"Product Description"),n.a.createElement("th",null,"Product Price"),n.a.createElement("th",null,"Edit"),n.a.createElement("th",null,"Delete"))),n.a.createElement("tbody",null,t)),n.a.createElement(k.a,{onClose:function(){return e.setShow(!1)},show:this.state.showToast,delay:3e3,className:"toast "+this.state.toastType,autohide:!0},n.a.createElement(k.a.Body,null,this.state.message))))}}]),e}(r.Component);var Z=Object(s.b)((function(t){return console.log(t),{state:t}}),(function(t){return Object(l.b)({fetchAllProducts:R,deleteSelectedProduct:F,editProduct:J},t)}))(Y);var $=function(){return n.a.createElement("div",{className:"app-container"},n.a.createElement(V.a,null,n.a.createElement(W,null),n.a.createElement(q.d,null,n.a.createElement(q.b,{exact:!0,path:"/"},n.a.createElement(H,null)),n.a.createElement(q.b,{path:"/prodList"},n.a.createElement(Z,null)))))};c.a.render(n.a.createElement(s.a,{store:v},n.a.createElement($,null)),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.ee9c78cb.chunk.js.map