(this["webpackJsonpdevice-app"]=this["webpackJsonpdevice-app"]||[]).push([[0],{240:function(e,t,a){e.exports=a.p+"static/media/clound_icon.54efc303.png"},270:function(e,t,a){},434:function(e,t,a){e.exports=a.p+"static/media/connection.2d38da41.png"},443:function(e,t,a){e.exports=a(611)},448:function(e,t,a){},611:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(20),i=a.n(l),o=(a(448),a(16)),r=a(17),s=a(19),d=a(18),m=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"row",id:"header"},"Device Manager")}}]),a}(n.Component),u=a(644),v=a(96),h=a(143),p=a.n(h),f=a(232),E=a.n(f),b=a(141),g=a.n(b),N=a(142),C=a.n(N),D=a(294),O=a(354),y=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props,t=e.onClick,a=e.disable,n=void 0!==a&&a,l=e.icon,i=e.title;return c.a.createElement(c.a.Fragment,null,c.a.createElement(O.a,{title:i},c.a.createElement(D.a,{onClick:t,disabled:n},l)))}}]),a}(c.a.Component),k=(a(270),a(140)),j=a(222),S=a(376),H=a(630),I=a(633),R=a(632),T=a(631),w=a(378),M=a(377),x=a(418),B=a.n(x),L=window.location.protocol+"//"+window.location.hostname+":8181/cxf/v1";function V(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",a=arguments.length>2?arguments[2]:void 0;return B()({method:t,url:"".concat(L,"/").concat(e),data:a})}var G=a(642),A=(a(90),function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){e.preventDefault();var t=n.state.deviceHolderName;n.props.onCloseDialog();var a=n.state.deviceInfo,c=a.name,l=a.hardwareType,i=a.interfaceVersion,o=a.connectionMechanism;c&&l&&i&&o&&t?V("device","POST",{name:c,hardwareType:l,interfaceVersion:i,connectionMechanism:o,deviceHolderName:t}).then((function(e){200===e.status&&(G.a.success({message:"Success",description:"Add device successfully!"}),n.props.setNeedRefreshTabMenuState(!0),n.setState({name:"",hardwareType:"",interfaceVersion:"",connectionMechanism:""}))})).catch((function(e){G.a.error({message:"Error ",description:e.message})})):G.a.error({message:"Error ",description:"Can not insert device"})},n.onChangeDiviceInfo=function(e){var t=e.target,a=t.name,c=t.value;n.setState((function(e){return{deviceInfo:Object(j.a)({},e.deviceInfo,Object(k.a)({},a,c))}}))},n.state={open:!1,deviceInfo:{},deviceHolderName:""},n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.setState({deviceHolderName:this.props.deviceHolder})}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(H.a,{open:this.props.openDialog,onClose:this.props.onCloseDialog,"aria-labelledby":"form-dialog-title"},c.a.createElement(T.a,{id:"form-dialog-title"},"Create device"),c.a.createElement(R.a,null,c.a.createElement("form",{onSubmit:this.handleSubmit,noValidate:!0,autoComplete:"off"},c.a.createElement(S.a,{margin:"dense",id:"name",name:"name",label:"Device name",fullWidth:!0,autoFocus:!0,required:!0,onChange:this.onChangeDiviceInfo}),c.a.createElement(S.a,{margin:"dense",id:"hardwareType",name:"hardwareType",label:"Hardware type",fullWidth:!0,required:!0,onChange:this.onChangeDiviceInfo}),c.a.createElement(S.a,{margin:"dense",id:"interfaceVersion",name:"interfaceVersion",label:"Interface version",fullWidth:!0,required:!0,onChange:this.onChangeDiviceInfo}),c.a.createElement(S.a,{id:"connectionMechanism",name:"connectionMechanism",margin:"dense",select:!0,label:"Connection mechanism",onChange:this.onChangeDiviceInfo,required:!0,fullWidth:!0},[{value:"Call home"},{value:"Non Callhome"}].map((function(e){return c.a.createElement(M.a,{key:e.value,value:e.value},e.value)}))),c.a.createElement(S.a,{id:"deviceHolder",name:"deviceHolderName",margin:"dense",label:"Device holder",value:this.props.deviceHolder,required:!0,disabled:!0,fullWidth:!0}),c.a.createElement(I.a,null,c.a.createElement(w.a,{onClick:this.props.onCloseDialog,color:"primary"},"Cancel"),c.a.createElement(w.a,{variant:"contained",type:"submit",color:"primary"},"Save"))))))}}]),a}(n.Component)),F=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).handleSubmit=function(t){t.preventDefault(),e.props.handleCloseDelete();var a=e.props,n=a.history,c=a.param,l=a.title,i=a.name,o=a.deviceHolder;"devices list"===l&&e.deleteDevices(c,n),"device"===l&&e.deleteDeviceItem(i,n,o),"device holders list"===l&&e.deleteDeviceHolders()},e.deleteDevices=function(t,a){V("device?deviceHolderName=".concat(t),"DELETE",null).then((function(t){200===t.status&&(G.a.success({message:"Success",description:"Delete devices successfully!"}),e.props.setNeedRefreshTabMenuState(!0),a.push("/"))})).catch((function(e){G.a.error({message:"Error ",description:e.message})}))},e.deleteDeviceItem=function(t,a,n){V("device/".concat(t),"DELETE",null).then((function(t){200===t.status&&(G.a.success({message:"Success",description:"Delete device successfully!"}),e.props.setNeedRefreshDevice(!0),a.push("/".concat(n,"/devices")))})).catch((function(e){G.a.error({message:"Error ",description:e.message})}))},e.deleteDeviceHolders=function(){V("device-holder","DELETE",null).then((function(t){200===t.status&&(G.a.success({message:"Success",description:"Delete all device holder successfully!"}),e.props.setNeedRefreshDeviceHolderState(!0))})).catch((function(e){G.a.error({message:"Error ",description:e.message})}))},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props.openDialog;return c.a.createElement("div",null,e&&c.a.createElement(H.a,{open:this.props.openDialog,onClose:this.props.handleCloseDelete,"aria-labelledby":"form-dialog-title"},c.a.createElement(T.a,{id:"form-dialog-title"},"Delete ",this.props.title),c.a.createElement(R.a,null,c.a.createElement("form",{onSubmit:this.handleSubmit,noValidate:!0,autoComplete:"off"},c.a.createElement(v.a,{variant:"comment",gutterBottom:!0},"Are you sure you want to delete this ",this.props.title,"?"),c.a.createElement(I.a,null,c.a.createElement(w.a,{onClick:this.props.handleCloseDelete,color:"primary"},"No"),c.a.createElement(w.a,{variant:"contained",type:"submit",color:"primary"},"Yes"))))))}}]),a}(n.Component),W=a(85),q=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onClickDeleteButton=function(){n.setState({openDelete:!0})},n.onClickReloadButton=function(){console.log("perform click reload buton"),n.props.setNeedRefreshTabMenuState(!0)},n.handleClickOpen=function(){n.setState({openAdd:!0})},n.handleClose=function(){n.setState({openAdd:!1})},n.handleCloseDelete=function(){n.setState({openDelete:!1})},n.pathIconButton=[{pathName:"Breadcrumb",iconButtons:[{id:1,icon:c.a.createElement(E.a,null),disable:!1,onClick:n.handleClickOpen,title:"Create device"},{id:2,icon:c.a.createElement(g.a,null),disable:!1,onClick:n.onClickDeleteButton,title:"Delete device"},{id:3,icon:c.a.createElement(C.a,null),disable:!1,onClick:n.onClickReloadButton,title:"Refresh"}]}],n.pathList=[{name:"Device holders",color:"inherit",to:"/",onClick:n.handleClick,className:"link"},{name:n.props.param,color:"textPrimary",className:"link"}],n.handleClick=function(e){e.preventDefault(),console.info("You clicked a breadcrumb.")},n.state={openAdd:!1,openDelete:!1},n}return Object(r.a)(a,[{key:"render",value:function(){var e=this.pathList.length;return c.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-8 col-md-8 col-sm-8 path"},c.a.createElement(u.a,{separator:c.a.createElement(p.a,{fontSize:"small"}),"aria-label":"breadcrumb"},this.pathList.map((function(t,a){return e===a+1?c.a.createElement(O.a,{title:t.name},c.a.createElement(v.a,{key:a,color:t.color,className:t.className},t.name)):c.a.createElement(O.a,{title:t.name},c.a.createElement(W.b,{key:a,color:t.color,to:t.to,onClick:t.onClick,className:t.className},t.name))}))),c.a.createElement("h3",{id:"currentName"},this.props.param)),c.a.createElement("div",{className:"col-lg-4 col-md-4 col-sm-4 content-flex-end"},this.pathIconButton[0].iconButtons.map((function(e,t){return c.a.createElement(y,{key:t,icon:e.icon,disable:e.disable,onClick:e.onClick,title:e.title})})),c.a.createElement(A,{deviceHolder:this.props.param,openDialog:this.state.openAdd,onCloseDialog:this.handleClose,setNeedRefreshTabMenuState:this.props.setNeedRefreshTabMenuState}),c.a.createElement(F,{title:"devices list",param:this.props.param,history:this.props.history,deviceHolder:this.props.param,openDialog:this.state.openDelete,handleCloseDelete:this.handleCloseDelete,setNeedRefreshTabMenuState:this.props.setNeedRefreshTabMenuState}))))}}]),a}(n.Component),P=a(146),U=a(638),J=a(643),Y=a(634),z=a(233),X=a.n(z),$=a(639),_=a(640),K=a(641),Q=a(240),Z=a.n(Q),ee=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props.deviceItem,t=e.hardwareType+" "+e.interfaceVersion;return c.a.createElement("div",null,e&&c.a.createElement(W.b,{to:"/".concat(e.deviceHolderName,"/devices/").concat(e.name)},c.a.createElement($.a,{variant:"outlined",className:"cardRoot"},c.a.createElement(K.a,{className:"cardCover",image:Z.a,title:"cloud"}),c.a.createElement("div",{className:"cardDetail"},c.a.createElement(_.a,{className:"cardText"},c.a.createElement(O.a,{title:e.name},c.a.createElement(v.a,{variant:"h6",gutterBottom:!0},e.name)),c.a.createElement(O.a,{title:t},c.a.createElement(v.a,{variant:"body2",gutterBottom:!0},e.hardwareType," ",e.interfaceVersion)))))))}}]),a}(n.Component),te=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={deviceList:[],numberCard:4},n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.setState({deviceList:this.props.deviceList})}},{key:"render",value:function(){var e=this.props.deviceList,t=e&&e.length>0;return c.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12"},t&&c.a.createElement(X.a,{columns:[{field:"deviceItem",render:function(e){var t=c.a.createElement(c.a.Fragment,null," ");return e.deviceItem&&e.deviceItem.length>0&&(t=e.deviceItem.map((function(e,t){return c.a.createElement("div",{key:t,className:"col-lg-3 col-md-3 col-sm-3 pr-1 pl-1 pb-3"},c.a.createElement(ee,{deviceItem:e}))}))),c.a.createElement("div",{className:"dislay-flexbox"}," ",t," ")}}],data:[{deviceItem:e}],options:{toolbar:!1,paging:!1}}))}}]),a}(n.Component),ae=function(e,t){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e),disabled:t}},ne=function(e){var t=e.children,a=e.value,n=e.index,l=Object(P.a)(e,["children","value","index"]);return c.a.createElement("div",Object.assign({hidden:a!==n},l,{className:"tabContent"}),a===n&&c.a.createElement("div",null,t))},ce=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).getDiviceList=function(e){console.log("device: ",e),V("device/".concat(e),"GET",null).then((function(e){200===e.status&&(console.log("asssss"),n.setState({deviceList:e.data}))})).catch((function(e){G.a.error({message:"Error ",description:"aaaa "+e.message})}))},n.handleChange=function(e,t){n.setState({value:t})},n.state={value:0,deviceList:[],deviceHolder:""},n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.setState({deviceHolder:this.props.param}),this.getDiviceList(this.props.param)}},{key:"componentDidUpdate",value:function(e,t){this.props.needRefreshTabMenu&&(this.getDiviceList(this.props.param),this.props.setNeedRefreshTabMenuState(!1))}},{key:"render",value:function(){var e=this.state.deviceList,t=this.props.param;return c.a.createElement("div",{className:"row"},c.a.createElement(U.a,{position:"static",elevation:0},c.a.createElement(J.a,{value:this.state.value,onChange:this.handleChange,"aria-label":"tabs menu",indicatorColor:"primary",textColor:"primary",className:"tabHeader"},c.a.createElement(Y.a,Object.assign({className:"tabTitle",label:"DEVICES"},ae(0,!1))),c.a.createElement(Y.a,Object.assign({className:"tabTitle",label:"EXTENSIONS"},ae(1,!1))),c.a.createElement(Y.a,Object.assign({className:"tabTitle",label:"LOGGING"},ae(2,!1))))),t&&c.a.createElement(ne,{value:this.state.value,index:0},c.a.createElement(te,{param:t,deviceList:e})),c.a.createElement(ne,{value:this.state.value,index:1}),c.a.createElement(ne,{value:this.state.value,index:2}))}}]),a}(n.Component),le=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).setNeedRefreshTabMenuState=function(e){n.setState({needRefreshTabMenu:e})},n.state={needRefreshTabMenu:!1},n}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props.match.params.deviceHolder,t=this.props.history;return c.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12"},c.a.createElement("div",{className:"row",id:"tool"},c.a.createElement(q,{history:t,param:e,setNeedRefreshTabMenuState:this.setNeedRefreshTabMenuState})),c.a.createElement(ce,{param:e,needRefreshTabMenu:this.state.needRefreshTabMenu,setNeedRefreshTabMenuState:this.setNeedRefreshTabMenuState}))}}]),a}(n.Component),ie=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onClickDeleteButton=function(){n.setState({openDelete:!0})},n.onClickReloadButton=function(){n.props.setNeedRefreshDevice(!0)},n.handleCloseDelete=function(){n.setState({openDelete:!1})},n.pathIconButton=function(){return[{pathName:"Breadcrumb",iconButtons:[{id:1,icon:c.a.createElement(g.a,null),disable:!1,onClick:n.onClickDeleteButton,title:"Delete device"},{id:2,icon:c.a.createElement(C.a,null),disable:!1,onClick:n.onClickReloadButton,title:"Refresh"}]}]},n.pathList=[{name:"Device holders",color:"inherit",to:"/",onClick:n.handleClick,className:"link"},{name:n.props.deviceHolder,color:"inherit",to:"/".concat(n.props.deviceHolder,"/devices"),onClick:n.handleClick,className:"link"},{name:n.props.name,color:"textPrimary",className:"link"}],n.handleClick=function(e){e.preventDefault(),console.info("You clicked a breadcrumb.")},n.state={open:!1,openDelete:!1},n}return Object(r.a)(a,[{key:"render",value:function(){var e=this.pathIconButton()[0].iconButtons.map((function(e,t){return c.a.createElement(y,{key:t,icon:e.icon,disable:e.disable,onClick:e.onClick,title:e.title})})),t=this.pathList.length;return c.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-8 col-md-8 col-sm-8 path"},c.a.createElement(u.a,{separator:c.a.createElement(p.a,{fontSize:"small"}),"aria-label":"breadcrumb"},this.pathList.map((function(e,a){return t===a+1?c.a.createElement(O.a,{title:e.name},c.a.createElement(v.a,{key:a,color:e.color,className:e.className},e.name)):c.a.createElement(O.a,{title:e.name},c.a.createElement(W.b,{key:a,color:e.color,to:e.to,onClick:e.onClick,className:e.className},e.name))}))),c.a.createElement("h3",{id:"currentName"},this.props.name)),c.a.createElement("div",{className:"col-lg-4 col-md-4 col-sm-4 content-flex-end"},e)),c.a.createElement(F,{title:"device",history:this.props.history,name:this.props.name,deviceHolder:this.props.deviceHolder,openDialog:this.state.openDelete,handleCloseDelete:this.handleCloseDelete,setNeedRefreshDevice:this.props.setNeedRefreshDevice}))}}]),a}(n.Component),oe=a(400),re=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).changeName=function(){var e="";switch(n.props.columnName){case"hardwareType":e="hardware type";break;case"interfaceVersion":e="interface version";break;case"connectionMechanism":e="connection mechanism"}return e},n.label={hardwareType:"Hardware type",interfaceVersion:"Interface version",connectionMechanism:"Connection mechanism"},n.renderField=function(){var e=n.props.columnName,t=c.a.createElement(c.a.Fragment,null," ");if(!e)return t;switch(e){case"connectionMechanism":t=c.a.createElement(c.a.Fragment,null,c.a.createElement(S.a,{id:"connectionMechanism",select:!0,label:"Connection mechanism",name:"connectionMechanism",value:n.state.deviceInfo[e],onChange:n.onChangeDiviceInfo,required:!0,fullWidth:!0},[{value:"Call home"},{value:"Non Callhome"}].map((function(e){return c.a.createElement(M.a,{key:e.value,value:e.value},e.value)}))));break;default:t=c.a.createElement(c.a.Fragment,null,c.a.createElement(S.a,{margin:"dense",name:e,label:n.label[e],fullWidth:!0,required:!0,onChange:n.onChangeDiviceInfo,value:n.state.deviceInfo[e]}))}return t},n.handleSubmit=function(e){e.preventDefault(),n.props.onCloseDialog();var t=n.state.deviceInfo,a={name:t.name,hardwareType:t.hardwareType,interfaceVersion:t.interfaceVersion,connectionMechanism:t.connectionMechanism,deviceHolderName:t.deviceHolderName};console.log("connectionMechanism: ",a),n.validateInput(a)?G.a.error({message:"Error ",description:"Can not edit device"}):V("device/".concat(n.props.deviceInfo.name),"PUT",a).then((function(e){200===e.status&&(G.a.success({message:"Success",description:"Edit device successfully!"}),n.props.setNeedRefreshDevice(!0))})).catch((function(e){G.a.error({message:"Error ",description:e.message})}))},n.validateInput=function(e){var t=!1;return""===e.hardwareType&&(t=!0),""===e.interfaceVersion&&(t=!0),""===e.connectionMechanism&&(t=!0),t},n.onChangeDiviceInfo=function(e){var t=e.target,a=t.name,c=t.value;console.log("name: ",a),n.setState((function(e){return{deviceInfo:Object(j.a)({},e.deviceInfo,Object(k.a)({},a,c))}}))},n.state={deviceInfo:{}},n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.setState({deviceInfo:this.props.deviceInfo})}},{key:"componentDidUpdate",value:function(e,t){JSON.stringify(this.props.deviceInfo)!==JSON.stringify(e.deviceInfo)&&this.setState({deviceInfo:this.props.deviceInfo})}},{key:"render",value:function(){var e=this.renderField(),t=this.changeName();return c.a.createElement("div",null,c.a.createElement(H.a,{open:this.props.openDialog,onClose:this.props.onCloseDialog,"aria-labelledby":"form-dialog-title"},c.a.createElement(T.a,{id:"form-dialog-title"},"Edit ",t),c.a.createElement(R.a,null,c.a.createElement("form",{onSubmit:this.handleSubmit,noValidate:!0,autoComplete:"off"},e,c.a.createElement(I.a,null,c.a.createElement(w.a,{onClick:this.props.onCloseDialog,color:"primary"},"Cancel"),c.a.createElement(w.a,{variant:"contained",type:"submit",color:"primary"},"Save"))))))}}]),a}(n.Component),se=a(247),de=a.n(se),me=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleClickOpen=function(e){n.setState({open:!0,columnName:e})},n.handleClose=function(){n.setState({open:!1})},n.state={open:!1,columnName:""},n}return Object(r.a)(a,[{key:"render",value:function(){var e=this,t=this.props.deviceInfo;return c.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-3 col-md-3 col-sm-3"}),c.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6 deviceDetailCard"},c.a.createElement($.a,null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-3 col-md-3 col-sm-3 mx-auto my-auto",id:"img"},c.a.createElement(K.a,{className:"mx-auto my-auto imageCloud",image:Z.a,title:"cloud"})),c.a.createElement("div",{className:"col-lg-9 col-md-9 col-sm-9"},c.a.createElement(_.a,null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6"},c.a.createElement(v.a,{variant:"caption",gutterBottom:!0},"Device name"),c.a.createElement(v.a,{className:"deviceDetail"},t.name),c.a.createElement(v.a,{variant:"caption",gutterBottom:!0},"Hardware type"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6"},c.a.createElement(v.a,{className:"deviceDetail"},t.hardwareType)),c.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6 pen"},c.a.createElement(D.a,{onClick:function(){return e.handleClickOpen("hardwareType")}},c.a.createElement(oe.a,{position:"start"},c.a.createElement(de.a,null))))),c.a.createElement(v.a,{variant:"caption",gutterBottom:!0},"Interface version"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6"},c.a.createElement(v.a,{className:"deviceDetail"},t.interfaceVersion)),c.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6 pen"},c.a.createElement(D.a,{onClick:function(){return e.handleClickOpen("interfaceVersion")}},c.a.createElement(oe.a,{position:"start"},c.a.createElement(de.a,null)))))),c.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6"},c.a.createElement(v.a,{variant:"caption",gutterBottom:!0},"Connection mechanism"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6"},c.a.createElement(v.a,{className:"deviceDetail"},t.connectionMechanism)),c.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6 pen"},c.a.createElement(D.a,{onClick:function(){return e.handleClickOpen("connectionMechanism")}},c.a.createElement(oe.a,{position:"start"},c.a.createElement(de.a,null))))),c.a.createElement(v.a,{variant:"caption",gutterBottom:!0},"Device holder"),c.a.createElement(v.a,null,t.deviceHolderName)))))))),c.a.createElement("div",{className:"col-lg-3 col-md-3 col-sm-3"})),c.a.createElement(re,{openDialog:this.state.open,onCloseDialog:this.handleClose,deviceInfo:t,columnName:this.state.columnName,setNeedRefreshDevice:this.props.setNeedRefreshDevice}))}}]),a}(n.Component),ue=function(e,t){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e),disabled:t}},ve=function(e){var t=e.children,a=e.value,n=e.index,l=Object(P.a)(e,["children","value","index"]);return c.a.createElement("div",Object.assign({hidden:a!==n},l,{className:"tabContent"}),a===n&&c.a.createElement("div",null,t))},he=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).getDevice=function(){var e=n.props.name;V("device?name=".concat(e),"GET",null).then((function(e){200===e.status&&n.setState({deviceInfo:e.data})})).catch((function(e){G.a.error({message:"Error ",description:e.message})}))},n.handleChange=function(e,t){n.setState({value:t})},n.state={value:0,deviceInfo:""},n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.getDevice()}},{key:"componentDidUpdate",value:function(e,t){this.props.needRefreshDevice&&(this.getDevice(),this.props.setNeedRefreshDevice(!1))}},{key:"render",value:function(){var e=this.state.deviceInfo;return c.a.createElement("div",{className:"row"},c.a.createElement(U.a,{position:"static",elevation:0},c.a.createElement(J.a,{value:this.state.value,onChange:this.handleChange,className:"tabHeader",indicatorColor:"primary",textColor:"primary"},c.a.createElement(Y.a,Object.assign({className:"tabTitle",label:"DEVICE"},ue(0,!1))),c.a.createElement(Y.a,Object.assign({className:"tabTitle",label:"EXTENSIONS"},ue(1,!1))),c.a.createElement(Y.a,Object.assign({className:"tabTitle",label:"LOGGING"},ue(2,!1))))),c.a.createElement(ve,{value:this.state.value,index:0},c.a.createElement(me,{deviceInfo:e,setNeedRefreshDevice:this.props.setNeedRefreshDevice})),c.a.createElement(ve,{value:this.state.value,index:1}),c.a.createElement(ve,{value:this.state.value,index:2}))}}]),a}(n.Component),pe=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).setNeedRefreshDevice=function(e){n.setState({needRefreshDevice:e})},n.state={needRefreshDevice:!1},n}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props.match.params,t=e.deviceHolder,a=e.name,n=this.props.history;return c.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12"},c.a.createElement("div",{className:"row",id:"tool"},c.a.createElement(ie,{history:n,name:a,deviceHolder:t,setNeedRefreshDevice:this.setNeedRefreshDevice})),c.a.createElement(he,{name:a,deviceHolder:t,needRefreshDevice:this.state.needRefreshDevice,setNeedRefreshDevice:this.setNeedRefreshDevice}))}}]),a}(n.Component),fe=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){e.preventDefault();var t=n.state.deviceHolderName;""!==t?V("device-holder","POST",{deviceHolderName:t}).then((function(e){200===e.status&&(G.a.success({message:"Success",description:"Add device holder successfully!"}),n.props.setNeedRefreshDeviceHolderState(!0),n.setState({deviceHolderName:""}))})).catch((function(e){G.a.error({message:"Error ",description:e.message})})):G.a.error({message:"Error ",description:"Can not insert device holder"})},n.onChangeDiviceHolder=function(e){n.setState({deviceHolderName:e.target.value})},n.state={open:!1,deviceHolderName:""},n}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(H.a,{open:this.props.openDialog,onClose:this.props.onCloseDialog,"aria-labelledby":"form-dialog-title"},c.a.createElement(T.a,{id:"form-dialog-title"},"Create device holder"),c.a.createElement(R.a,null,c.a.createElement("form",{onSubmit:this.handleSubmit,noValidate:!0,autoComplete:"off"},c.a.createElement(S.a,{margin:"dense",id:"deviceHolderName",name:"deviceHolderName",label:"Device holder name",fullWidth:!0,autoFocus:!0,required:!0,onChange:this.onChangeDiviceHolder}),c.a.createElement(I.a,null,c.a.createElement(w.a,{onClick:this.props.onCloseDialog,color:"primary"},"Cancel"),c.a.createElement(w.a,{onClick:this.props.onCloseDialog,variant:"contained",type:"submit",color:"primary"},"Save"))))))}}]),a}(n.Component),Ee=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onClickDeleteButton=function(){n.setState({openDelete:!0})},n.onClickReloadButton=function(){console.log("perform click reload buton"),n.props.setNeedRefreshDeviceHolderState(!0)},n.handleClickOpen=function(){n.setState({openAdd:!0})},n.handleClose=function(){n.setState({openAdd:!1})},n.handleCloseDelete=function(){n.setState({openDelete:!1})},n.pathIconButton=[{pathName:"Breadcrumb",iconButtons:[{id:1,icon:c.a.createElement(E.a,null),disable:!1,onClick:n.handleClickOpen,title:"Create device holder"},{id:2,icon:c.a.createElement(g.a,null),disable:!1,onClick:n.onClickDeleteButton,title:"Delete device holder"},{id:3,icon:c.a.createElement(C.a,null),disable:!1,onClick:n.onClickReloadButton,title:"Refresh"}]}],n.handleClick=function(e){e.preventDefault(),console.info("You clicked a breadcrumb.")},n.state={openAdd:!1,openDelete:!1},n}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-8 col-md-8 col-sm-8 path"},c.a.createElement(u.a,{separator:c.a.createElement(p.a,{fontSize:"small"}),"aria-label":"breadcrumb"},c.a.createElement(O.a,{title:"Devices"},c.a.createElement(v.a,{color:"textPrimary",className:"link"},"Device holders"))),c.a.createElement("h3",{id:"currentName"},"Device holders")),c.a.createElement("div",{className:"col-lg-4 col-md-4 col-sm-4 content-flex-end"},this.pathIconButton[0].iconButtons.map((function(e,t){return c.a.createElement(y,{key:t,icon:e.icon,disable:e.disable,onClick:e.onClick,title:e.title})})),c.a.createElement(fe,{openDialog:this.state.openAdd,onCloseDialog:this.handleClose,setNeedRefreshDeviceHolderState:this.props.setNeedRefreshDeviceHolderState}),c.a.createElement(F,{title:"device holders list",openDialog:this.state.openDelete,handleCloseDelete:this.handleCloseDelete,setNeedRefreshDeviceHolderState:this.props.setNeedRefreshDeviceHolderState}))))}}]),a}(n.Component),be=a(434),ge=a.n(be),Ne=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props.deviceHolderItem;return c.a.createElement("div",null,e&&c.a.createElement(W.b,{to:"/".concat(e.deviceHolderName,"/devices")},c.a.createElement($.a,{variant:"outlined",className:"cardRoot"},c.a.createElement(K.a,{className:"cardCover",image:ge.a,title:"device holders"}),c.a.createElement("div",{className:"cardDetail"},c.a.createElement(_.a,{className:"cardText"},c.a.createElement(O.a,{title:e.deviceHolderName},c.a.createElement(v.a,{variant:"h6",gutterBottom:!0},e.deviceHolderName)),c.a.createElement(O.a,{title:"".concat(e.noOfDevices," devices")},c.a.createElement(v.a,{variant:"body2",gutterBottom:!0},e.noOfDevices," devices")))))))}}]),a}(n.Component),Ce=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={deviceHolderList:[],numberCard:4},n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.setState({deviceHolderList:this.props.deviceHolderList})}},{key:"render",value:function(){var e=this.props.deviceHolderList,t=e&&e.length>0;return c.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12"},t&&c.a.createElement(X.a,{columns:[{field:"deviceItem",render:function(e){var t=c.a.createElement(c.a.Fragment,null," ");return e.deviceHolderItem&&e.deviceHolderItem.length>0&&(t=e.deviceHolderItem.map((function(e,t){return c.a.createElement("div",{key:t,className:"col-lg-3 col-md-3 col-sm-3 pr-1 pl-1 pb-3"},c.a.createElement(Ne,{deviceHolderItem:e}))}))),c.a.createElement("div",{className:"dislay-flexbox"}," ",t," ")}}],data:[{deviceHolderItem:e}],options:{toolbar:!1,paging:!1}}))}}]),a}(n.Component),De=function(e,t){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e),disabled:t}},Oe=function(e){var t=e.children,a=e.value,n=e.index,l=Object(P.a)(e,["children","value","index"]);return c.a.createElement("div",Object.assign({hidden:a!==n},l,{className:"tabContent"}),a===n&&c.a.createElement("div",null,t))},ye=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).getDiviceHolderList=function(){V("device-holder","GET",null).then((function(e){200===e.status&&(console.log("ddddd: ",e.data),n.setState({deviceHolderList:e.data}))})).catch((function(e){G.a.error({message:"Error ",description:e.message})}))},n.handleChange=function(e,t){n.setState({value:t})},n.state={value:0,deviceHolderList:[]},n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.getDiviceHolderList()}},{key:"componentDidUpdate",value:function(e,t){this.props.needRefreshDeviceHolder&&(this.getDiviceHolderList(),this.props.setNeedRefreshDeviceHolderState(!1))}},{key:"render",value:function(){var e=this.state.deviceHolderList;return console.log("device holder list: ",e),c.a.createElement("div",{className:"row"},c.a.createElement(U.a,{position:"static",elevation:0},c.a.createElement(J.a,{value:this.state.value,onChange:this.handleChange,"aria-label":"tabs menu",indicatorColor:"primary",textColor:"primary",className:"tabHeader"},c.a.createElement(Y.a,Object.assign({className:"tabTitle",label:"DEVICE HOLDERS"},De(0,!1))),c.a.createElement(Y.a,Object.assign({className:"tabTitle",label:"EXTENSIONS"},De(1,!1))),c.a.createElement(Y.a,Object.assign({className:"tabTitle",label:"LOGGING"},De(2,!1))))),c.a.createElement(Oe,{value:this.state.value,index:0},c.a.createElement(Ce,{deviceHolderList:e})),c.a.createElement(Oe,{value:this.state.value,index:1}),c.a.createElement(Oe,{value:this.state.value,index:2}))}}]),a}(n.Component),ke=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).setNeedRefreshDeviceHolderState=function(e){n.setState({needRefreshDeviceHolder:e})},n.state={needRefreshDeviceHolder:!1},n}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12"},c.a.createElement("div",{className:"row",id:"tool"},c.a.createElement(Ee,{setNeedRefreshDeviceHolderState:this.setNeedRefreshDeviceHolderState})),c.a.createElement(ye,{needRefreshDeviceHolder:this.state.needRefreshDeviceHolder,setNeedRefreshDeviceHolderState:this.setNeedRefreshDeviceHolderState}))}}]),a}(n.Component),je=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12"},c.a.createElement("h2",null,"Page not found"))}}]),a}(n.Component),Se=a(105),He=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return G.a.config({duration:3}),c.a.createElement(W.a,null,c.a.createElement("div",{className:"container-fluid"},c.a.createElement(m,null),c.a.createElement("div",{className:"row"},c.a.createElement(Se.c,null,c.a.createElement(Se.a,{path:"/",exact:!0,component:ke}),c.a.createElement(Se.a,{path:"/:deviceHolder/devices",exact:!0,component:le}),c.a.createElement(Se.a,{path:"/:deviceHolder/devices/:name",exact:!0,component:pe}),c.a.createElement(Se.a,{component:je})))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(He,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[443,1,2]]]);
//# sourceMappingURL=main.fa6a7070.chunk.js.map