(window.webpackJsonppms_ui=window.webpackJsonppms_ui||[]).push([[0],{59:function(e,t,a){e.exports=a(98)},70:function(e,t,a){},98:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(15),c=a.n(o),s=a(16),l=a(7),u=a(36),i=a(51),d=a.n(i),p=a(52),m=a(53),h=a(20);function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var P={editObject:void 0};var E=Object(l.c)({storedState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"EDIT_PRODUCT":return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(a,!0).forEach((function(t){Object(h.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{editObject:t.payload});default:return e}}}),b={key:"root",storage:d.a},y=Object(u.a)(b,E),g=Object(l.d)(y,Object(l.a)(p.a,m.logger)),v=(Object(u.b)(g),g),O=(a(70),a(21)),j=a(22),T=a(25),w=a(23),D=a(26),C=a(105),N=a(100),S=a(56),L=a(101),k=a(104),x=(a(31),a(18)),I=a.n(x),_="saveProduct",A="fetchProducts",B="deleteProduct",G="editProduct";function U(e){return console.log(e),function(t){return function(e){var t="/".concat(_);return console.log(t),I()({method:"POST",url:t.trim(),data:e,headers:{"Content-Type":"application/json; charset=utf-8"}})}(e).then((function(e){return console.log(e.data),e.data}))}}function M(){return function(e){return function(){var e="/".concat(A);return I()({method:"GET",url:e.trim(),headers:{"Content-Type":"application/json; charset=utf-8"}})}().then((function(e){return console.log(e.data),e.data}))}}function R(e){return console.log(e),function(t){return function(e){var t="/".concat(B,"/").concat(e);return I()({method:"Patch",url:t.trim(),headers:{"Content-Type":"application/json; charset=utf-8"}})}(e).then((function(e){return M()(t).then((function(t){return console.log(t),[t,e]}))}))}}function F(e){return{type:"EDIT_PRODUCT",payload:e}}function J(e){return console.log(e),function(t){return function(e){var t="/".concat(G,"/").concat(e.id);return I()({method:"PUT",url:t.trim(),data:e,headers:{"Content-Type":"application/json; charset=utf-8"}})}(e).then((function(e){return console.log(e.data),t(function(e){return{type:"EDIT_PRODUCT",payload:e}}(void 0)),e.data}))}}var K=a(12),q=function(e){function t(e){var a;return Object(O.a)(this,t),(a=Object(T.a)(this,Object(w.a)(t).call(this,e))).inputChange=function(e){a.setState(Object(h.a)({},e.target.name,e.target.value))},a.setShow=function(e){a.setState({showToast:e})},a.submitForm=function(){var e=a.state,t=e.productName,r=e.productDescription,n=e.productPrice;if(t)if(n)if(n=Number(n),a.props.editList){var o=a.props.editList._id;a.props.editProductDetails({id:o,productName:t,productDescription:r,productPrice:n}).then((function(e){console.log("sssd"+e),console.log(e),a.setState({message:"Product : ".concat(e.productName," editted successfully "),showToast:!0,toastType:"success",redirect:!0})}))}else a.props.registerProduct({productName:t,productDescription:r,productPrice:n}).then((function(e){console.log("sssd"+e),console.log(e),a.setState({message:"Product : ".concat(e.productName," registered successfully "),showToast:!0,toastType:"success",redirect:!0})}));else a.setState({message:"Product price can't be empty ",showToast:!0,toastType:"error"});else a.setState({message:"Product name can't be empty ",showToast:!0,toastType:"error"})},a.state={productName:"",productDescription:"",productPrice:"",message:"",showToast:!1,toastType:"",redirect:!1,productDetails:"Add Product Details"},a}return Object(D.a)(t,e),Object(j.a)(t,[{key:"componentDidMount",value:function(){if(console.log(this.props.editList),this.props.editList){console.log("dfdf");var e=this.props.editList,t=e.productName,a=e.productDescription,r=e.productPrice;this.setState({productDetails:"Edit Product Details",productName:t,productDescription:a,productPrice:r})}}},{key:"render",value:function(){var e=this;return this.state.redirect?n.a.createElement(K.a,{push:!0,to:"/prodList"}):n.a.createElement("div",{className:"product-body"},n.a.createElement("h3",null,this.state.productDetails),n.a.createElement(C.a,null,n.a.createElement(C.a.Group,{as:N.a,controlId:"formPlaintextEmail"},n.a.createElement(C.a.Label,{column:!0,sm:"3"},"Product Name"),n.a.createElement(S.a,{sm:"9"},n.a.createElement(C.a.Control,{type:"text",name:"productName",value:this.state.productName,onChange:function(t){return e.inputChange(t)},placeholder:"Product name"}))),n.a.createElement(C.a.Group,{as:N.a,controlId:"formPlaintextPassword"},n.a.createElement(C.a.Label,{column:!0,sm:"3"},"Product Description"),n.a.createElement(S.a,{sm:"9"},n.a.createElement(C.a.Control,{name:"productDescription",value:this.state.productDescription,onChange:function(t){return e.inputChange(t)},as:"textarea",rows:"3"}))),n.a.createElement(C.a.Group,{as:N.a,controlId:"formPlaintextEmail"},n.a.createElement(C.a.Label,{column:!0,sm:"3"},"Product Price"),n.a.createElement(S.a,{sm:"9"},n.a.createElement(C.a.Control,{type:"number",name:"productPrice",value:this.state.productPrice,onChange:function(t){return e.inputChange(t)},placeholder:"Product Price"}))),n.a.createElement(L.a,{variant:"primary",onClick:this.submitForm},"Submit")),n.a.createElement(k.a,{onClose:function(){return e.setShow(!1)},show:this.state.showToast,delay:3e3,className:"toast "+this.state.toastType,autohide:!0},n.a.createElement(k.a.Body,null,this.state.message)))}}]),t}(r.Component);var z=Object(s.b)((function(e){return{editList:e.storedState.editObject}}),(function(e){return Object(l.b)({registerProduct:U,editProductDetails:J},e)}))(q),H=a(103),Q=a(13);var V=function(){return n.a.createElement("header",null,n.a.createElement("nav",{className:"header-container"},n.a.createElement("h2",{className:"top-heading"},"Product Management System"),n.a.createElement(H.a,{variant:"tabs",defaultActiveKey:"/"},n.a.createElement(H.a.Item,null,n.a.createElement(Q.b,{to:"/",activeClassName:"selected",exact:!0},"Add Product")),n.a.createElement(H.a.Item,null,n.a.createElement(Q.b,{to:"/prodList",activeClassName:"selected"},"Product List")))))},W=a(102),X=function(e){function t(e){var a;return Object(O.a)(this,t),(a=Object(T.a)(this,Object(w.a)(t).call(this,e))).setShow=function(e){a.setState({showToast:e})},a.editProduct=function(e){a.props.editProduct(e),a.setState({redirect:!0})},a.filterTable=function(e){var t=a.state.product.filter((function(t){return-1!==t.productName.toLowerCase().indexOf(e.target.value.toLowerCase())}));a.setState({filterProduct:t})},a.state={showToast:!1,toastType:"",product:[],filterProduct:[],redirect:!1},a}return Object(D.a)(t,e),Object(j.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.fetchAllProducts().then((function(t){e.setState({product:t,filterProduct:t})}))}},{key:"deleteProduct",value:function(e){var t=this;this.props.deleteSelectedProduct(e).then((function(e){console.log(e),t.setState({showToast:!0,toastType:"success",message:"Product : ".concat(e[1].data.productName," deleted successfully"),product:e[0],filterProduct:e[0]})}))}},{key:"render",value:function(){var e,t=this;return console.log(this.state.filterProduct.length),this.state.redirect?n.a.createElement(K.a,{push:!0,to:"/"}):(e=this.state.filterProduct.length>0?this.state.filterProduct.map((function(e,a){return n.a.createElement("tr",{key:e._id},n.a.createElement("td",null,a+1),n.a.createElement("td",null,e.productName),n.a.createElement("td",null,e.productDescription),n.a.createElement("td",null,e.productPrice),n.a.createElement("td",{onClick:function(){return t.editProduct(e)}},n.a.createElement("i",{className:"fa fa-edit"})),n.a.createElement("td",{onClick:function(){return t.deleteProduct(e._id)}},n.a.createElement("i",{className:"fa fa-trash"})))})):n.a.createElement("tr",null,n.a.createElement("td",null,"Product list is empty")),n.a.createElement("div",{className:"table-content"},n.a.createElement("input",{className:"input-search",type:"text",onChange:function(e){return t.filterTable(e)},placeholder:"Search By Product Name..."}),n.a.createElement(W.a,{responsive:!0},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"#"),n.a.createElement("th",null,"Product Name"),n.a.createElement("th",null,"Product Description"),n.a.createElement("th",null,"Product Price"),n.a.createElement("th",null,"Edit"),n.a.createElement("th",null,"Delete"))),n.a.createElement("tbody",null,e)),n.a.createElement(k.a,{onClose:function(){return t.setShow(!1)},show:this.state.showToast,delay:3e3,className:"toast "+this.state.toastType,autohide:!0},n.a.createElement(k.a.Body,null,this.state.message))))}}]),t}(r.Component);var Y=Object(s.b)((function(e){return console.log(e),{state:e}}),(function(e){return Object(l.b)({fetchAllProducts:M,deleteSelectedProduct:R,editProduct:F},e)}))(X);var Z=function(){return n.a.createElement("div",{className:"app-container"},n.a.createElement(Q.a,null,n.a.createElement(V,null),n.a.createElement(K.d,null,n.a.createElement(K.b,{exact:!0,path:"/"},n.a.createElement(z,null)),n.a.createElement(K.b,{path:"/prodList"},n.a.createElement(Y,null)))))};c.a.render(n.a.createElement(s.a,{store:v},n.a.createElement(Z,null)),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.75d50c1b.chunk.js.map