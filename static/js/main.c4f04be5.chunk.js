(this.webpackJsonpbasic=this.webpackJsonpbasic||[]).push([[0],{18:function(e,t,a){e.exports=a(39)},23:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(16),s=a.n(i),c=a(9),o=a(4),l=a(5),u=a(7),d=a(6),m=a(8);function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(a,!0).forEach((function(t){Object(c.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var h=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleUserFormChange=function(e){var t=e.target,r=t.name,n=t.value;a.setState({user:p({},a.state.user,Object(c.a)({},r,n))})},a.handleCreateUserSubmit=function(e){a.props.addNewUser(e),a.setState(a.intialState)},a.state={user:{username:"",email:""}},a.intialState=a.state,a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("form",null,n.a.createElement("input",{className:"form-input",type:"text",name:"username",placeholder:"enter your Name",value:this.state.user.username,onChange:this.handleUserFormChange}),n.a.createElement("input",{className:"form-input",type:"email",name:"email",value:this.state.user.email,placeholder:"enter your email",onChange:this.handleUserFormChange}),n.a.createElement("input",{className:"form-button bg-green",type:"button",value:"Add New User",onClick:this.handleCreateUserSubmit.bind(this,this.state.user)})))}}]),t}(r.Component);function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function O(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(a,!0).forEach((function(t){Object(c.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleCancelEdit=function(){a.props.handleEditMode(!1)},a.handleEditUserSubmit=function(){var e=a.state.editUserData;a.props.editUserSubmit(e),console.log("edituser"+JSON.stringify(e))},a.handleEditUserChange=function(e){e.preventDefault();var t=e.target,r=t.name,n=t.value;a.setState({editUserData:O({},a.state.editUserData,Object(c.a)({},r,n))})},a.user=a.props.user,a.state={editUserData:{username:a.user.username,email:a.user.email}},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("form",{style:{backgroundcolor:"white"}},n.a.createElement("input",{className:"form-input",type:"text",placeholder:"username",name:"username",value:this.state.editUserData.username,onChange:this.handleEditUserChange}),n.a.createElement("input",{className:"form-input",type:"text",placeholder:"email",name:"email",value:this.state.editUserData.email,onChange:this.handleEditUserChange}),n.a.createElement("input",{className:"form-button bg-blue color-white",type:"button",value:"submit",onClick:this.handleEditUserSubmit.bind(this)}),n.a.createElement("input",{className:"form-button bg-blue color-white",type:"button",value:"cancel",onClick:this.handleCancelEdit})))}}]),t}(r.Component),y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleDeleteUser=function(e){a.props.deleteUser(e)},a.handleEditUser=function(){a.setState({editMode:!0})},a.handleEditMode=function(e){a.setState({editMode:e})},a.editUserSubmit=function(e){a.props.editUserSubmit(e),a.setState({editMode:!1})},a.state={editMode:!1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.state.editMode?n.a.createElement("div",null,n.a.createElement(v,{handleEditMode:this.handleEditMode,user:this.props.user,editUserSubmit:this.editUserSubmit})):n.a.createElement("div",{key:this.props.user.id},n.a.createElement("div",{className:"div-table-row"},n.a.createElement("div",{className:"div-table-col"},this.props.user.username),n.a.createElement("div",{className:"div-table-col"},this.props.user.email),n.a.createElement("div",{className:"div-table-col"},n.a.createElement("input",{className:"button",type:"button",value:"Delete",onClick:this.handleDeleteUser.bind(this,this.props.user)}),n.a.createElement("input",{className:"button",type:"button",value:"Edit",onClick:this.handleEditUser.bind(this,this.props.user)}))))}}]),t}(r.Component),g=(a(23),a(17).initializeApp({apiKey:"AIzaSyDPKUcFr3n4Z9Pizg7k_8-JfneqmRa8d_k",authDomain:"react-firebase-crud-77b82.firebaseapp.com",databaseURL:"https://react-firebase-crud-77b82.firebaseio.com",projectId:"react-firebase-crud-77b82",storageBucket:"react-firebase-crud-77b82.appspot.com",messagingSenderId:"114968668029",appId:"1:114968668029:web:eee016823689c930518e14",measurementId:"G-NG89WF12T0"}));function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).componentDidMount=function(){g.database().ref().child("user").on("value",(function(e){var t=[];e.forEach((function(e){t.push({id:e.key,email:e.val().email,username:e.val().username})})),a.setState(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(a,!0).forEach((function(t){Object(c.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a.state.getUsers,{getUsers:t}))}))},a.editUserSubmit=function(e,t){g.database().ref().child("user/"+t).set(e),console.log("dwhich user is being edited"+JSON.stringify(e.firstName)),console.log("dwhich user id"+JSON.stringify(t))},a.deleteUser=function(e){g.database().ref().child("user/"+e.id).remove()},a.addNewUser=function(e){g.database().ref().child("user").push(e)},a.state={getUsers:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"wrapper"},n.a.createElement(h,{addNewUser:this.addNewUser}),n.a.createElement("div",null,n.a.createElement("div",{className:"div-table"},n.a.createElement("div",{className:"div-table-row"},n.a.createElement("div",{className:"div-table-col"},"name"),n.a.createElement("div",{className:"div-table-col"},"email"),n.a.createElement("div",{className:"div-table-col"},"action"))),this.state.getUsers.map((function(t){return n.a.createElement("div",{key:t.id},n.a.createElement(y,{user:t,deleteUser:e.deleteUser,editUserSubmit:e.editUserSubmit}))}))))}}]),t}(r.Component);s.a.render(n.a.createElement(E,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.c4f04be5.chunk.js.map