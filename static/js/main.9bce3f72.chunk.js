(this.webpackJsonpanketa=this.webpackJsonpanketa||[]).push([[0],{112:function(t,e,n){},121:function(t,e,n){},122:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(41),s=n(3),a="ADD-MESSAGE",o={contacts:[{id:1,name:"Hector Barbossa"},{id:2,name:"Joshamee Gibbs"},{id:3,name:"Elizabeth Swann"},{id:4,name:"Will Turner"}],messages:[{id:1,message:"For sure, you have to be lost to find a place that can't be found, elseways everyone would know where it was."},{id:2,message:"I'm sorry, Jack. But we've reached the end of the horizon."},{id:3,message:"You like pain? Try wearing a corset!"},{id:4,message:"No cause is lost if there is but one fool left to fight for it."}],lastMessageId:4},c=function(t){return{type:a,messageBody:t}};e.b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case a:return t.lastMessageId+=1,Object(s.a)(Object(s.a)({},t),{},{messages:[].concat(Object(r.a)(t.messages),[{id:t.lastMessageId,message:e.messageBody}])});default:return t}}},163:function(t,e,n){},165:function(t,e,n){},166:function(t,e,n){},167:function(t,e,n){},265:function(t,e,n){},266:function(t,e,n){},285:function(t,e,n){},286:function(t,e,n){},287:function(t,e,n){},288:function(t,e,n){},289:function(t,e,n){"use strict";n.r(e);var r=n(0),s=n(1),a=n.n(s),o=n(61),c=n.n(o),i=n(26),u=n(27),l=n(29),f=n(28),j=n(9),p=n(11),d=n(12),b=n(13),h=(n(163),function(){return Object(r.jsxs)("nav",{className:"mainNav",children:[Object(r.jsxs)(b.b,{to:"./profile",className:"profile",children:[Object(r.jsx)("img",{src:"https://www.flaticon.com/premium-icon/icons/svg/3106/3106921.svg",className:"avatarIcon",alt:"avatar"}),Object(r.jsx)("p",{className:"profileName",children:"Jack Sparrow"})]}),Object(r.jsxs)("ul",{className:"mainNavLinks",children:[Object(r.jsx)("li",{children:Object(r.jsx)(b.b,{to:"/posts",children:"My posts"})}),Object(r.jsx)("li",{children:Object(r.jsx)(b.b,{to:"/contacts",children:"Contacts"})}),Object(r.jsx)("li",{children:Object(r.jsx)(b.b,{to:"/messages",children:"Messages"})}),Object(r.jsx)("li",{children:Object(r.jsx)(b.b,{to:"/users",children:"Users"})})]})]})}),O=n(3),m=n(41),g="ADD-POST",v="DELETE-POST",x={postsData:[{id:1,icon:"https://www.flaticon.com/svg/static/icons/svg/2910/2910914.svg",content:"This is the day you will always remember as the day you almost caught Captain Jack Sparrow.",likesCount:100},{id:2,icon:"https://www.flaticon.com/svg/static/icons/svg/2910/2910816.svg",content:"The problem is not the problem. The problem is your attitude about the problem.",likesCount:10},{id:3,icon:"https://www.flaticon.com/svg/static/icons/svg/2476/2476190.svg",content:"Crazy people don't know they're crazy. I know I'm crazy, therefore I'm not crazy, isn't that crazy?",likesCount:25},{id:4,icon:"https://www.flaticon.com/svg/static/icons/svg/2910/2910914.svg",content:"Not all treasure\u2019s silver and gold, mate.",likesCount:123}],newPostId:5},w=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,e=arguments.length>1?arguments[1]:void 0,n=function(){var n={id:t.newPostId,icon:"https://www.flaticon.com/svg/static/icons/svg/2910/2910914.svg",content:e.PostData,likesCount:0};return Object(O.a)(Object(O.a)({},t),{},{postsData:[].concat(Object(m.a)(t.postsData),[n]),newPostId:t.newPostId+1})};switch(e.type){case g:return n();case v:return Object(O.a)(Object(O.a)({},t),{},{postsData:t.postsData.filter((function(t){return t.id!==e.postId}))});default:return t}},k=(n(165),function(t){var e=t.icon,n=t.content,s=t.likes;return Object(r.jsxs)("div",{className:"post",children:[Object(r.jsx)("img",{src:e,className:"postIcon",alt:"lamp"}),Object(r.jsx)("p",{className:"postContent",children:n}),Object(r.jsxs)("div",{className:"likes",children:[Object(r.jsx)("img",{src:"https://www.flaticon.com/svg/static/icons/svg/833/833472.svg",className:"likeIcon",alt:"like"}),Object(r.jsx)("p",{className:"likesCount",children:s})]})]})}),C=(n(166),n(84)),y=n(123),N=n(45),S=n(62),I=Object(N.a)(10),P=Object(y.a)({form:"post"})((function(t){return Object(r.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(r.jsx)(C.a,{name:"post",component:S.b,className:"newContentArea",placeholder:"type your text here..",validate:[N.b,I]}),Object(r.jsx)("button",{type:"submit",className:"addBtn",children:"Add post"})]})})),T=a.a.memo((function(t){var e=t.addPost,n=t.posts;return Object(r.jsxs)("section",{className:"postsSection",children:[n.postsData.map((function(t){return Object(r.jsx)(k,{icon:t.icon,content:t.content,likes:t.likesCount},t.id)})),Object(r.jsx)("section",{className:"addSection",children:Object(r.jsx)(P,{onSubmit:function(t){e(t.post)}})})]})})),A=Object(d.b)((function(t){return{posts:t.posts}}),(function(t){return{addPost:function(e){t(function(t){return{type:g,PostData:t}}(e))}}}))(T),U=(n(265),n(112),n(266),n.p+"static/media/loader.f7f2549a.svg"),E=function(){return Object(r.jsx)("div",{className:"loaderWrapper",children:Object(r.jsx)("img",{src:U,alt:"loader"})})},L=n(52),z=function(t){var e=Object(s.useState)(!1),n=Object(L.a)(e,2),a=n[0],o=n[1],c=Object(s.useState)(t.status),i=Object(L.a)(c,2),u=i[0],l=i[1];Object(s.useEffect)((function(){l(t.status)}),[t.status]);return Object(r.jsx)("section",{children:a?Object(r.jsx)("input",{autoFocus:!0,onChange:function(t){return l(t.currentTarget.value)},onBlur:function(){return o(!a),void t.updateStatus(u)},type:"text",value:u}):Object(r.jsx)("span",{onDoubleClick:function(){return o(!a)},children:t.status||"no status"})})},D=function(t){var e=t.profile,n=t.status,s=t.updateStatus;return e?Object(r.jsxs)("section",{className:"profileSection",children:[Object(r.jsxs)("div",{className:"profileBadge",children:[e.photos.large?Object(r.jsx)("img",{src:e.photos.large,className:"profileAvatar",alt:"avatar"}):Object(r.jsx)("i",{className:"fas fa-user-circle"}),Object(r.jsx)("span",{children:e.fullName})]}),Object(r.jsx)(z,{status:n,updateStatus:s}),Object(r.jsxs)("section",{className:"profileInfo",children:[Object(r.jsx)("i",{className:e.lookingForAJob&&"fas fa-search jobLooking",children:Object(r.jsx)("span",{className:"jobDescription",children:e.lookingForAJobDescription})}),Object(r.jsx)("div",{className:"profileContacts",children:Object.keys(e.contacts).map((function(t,e){return Object(r.jsx)("span",{children:t})}))})]})]}):Object(r.jsx)(E,{})},F=function(t){var e=t.profile,n=t.status,s=t.updateStatus;return Object(r.jsxs)("div",{className:"profilePage",children:[Object(r.jsx)(D,{profile:e,status:n,updateStatus:s}),Object(r.jsx)(A,{})]})},M=n(10),G=n.n(M),R=n(19),J=n(127).create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"6458bf48-3c96-48bd-95f0-7672ad9f038f"}}),B={getProfile:function(t){return console.warn("Obsolete method. Please, profileAPI object."),W.getProfile(t)},getUsers:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return J.get("users?page=".concat(t,"&count=").concat(e)).then((function(t){return t.data}))},follow:function(t){return J.post("follow/".concat(t)).then((function(t){return t.data}))},unfollow:function(t){return J.delete("follow/".concat(t)).then((function(t){return t.data}))}},W={getProfile:function(t){return J.get("profile/".concat(t))},getUserStatus:function(t){return J.get("profile/status/".concat(t))},updateUserStatus:function(t){return J.put("profile/status",{status:t})}},H=function(){return J.get("auth/me")},Y=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return J.post("auth/login",{email:t,password:e,rememberMe:n})},q=function(){return J.delete("auth/login")},K="SET-USER-PROFILE",Z="SET-STATUS",_={profile:null,status:""},Q=function(t){return{type:Z,status:t}},V=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case K:return Object(O.a)(Object(O.a)({},t),{},{profile:e.profile});case Z:return Object(O.a)(Object(O.a)({},t),{},{status:e.status});default:return t}},X=function(t){Object(l.a)(n,t);var e=Object(f.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authUserId)||this.props.history.push("/login"),this.props.getUserProfileThunkCr(t),this.props.getUserStatusThunkCr(t)}},{key:"render",value:function(){return Object(r.jsx)(F,Object(O.a)(Object(O.a)({},this.props),{},{profile:this.props.profile,isAuth:this.props.isAuth,status:this.props.status,updateStatus:this.props.updateUserStatusThunkCr}))}}]),n}(a.a.Component),$=Object(j.d)(Object(d.b)((function(t){return{profile:t.profile.profile,status:t.profile.status,authUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfileThunkCr:function(t){return function(){var e=Object(R.a)(G.a.mark((function e(n){var r;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.getProfile(t);case 2:r=e.sent,n((s=r.data,{type:K,profile:s}));case 4:case"end":return e.stop()}var s}),e)})));return function(t){return e.apply(this,arguments)}}()},getUserStatusThunkCr:function(t){return function(){var e=Object(R.a)(G.a.mark((function e(n){var r;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.getUserStatus(t);case 2:r=e.sent,n(Q(r.data));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},updateUserStatusThunkCr:function(t){return function(){var e=Object(R.a)(G.a.mark((function e(n){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.updateUserStatus(t);case 2:0===e.sent.data.resultCode&&n(Q(t));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}),p.f)(X),tt=function(){return Object(r.jsx)("div",{className:"Contacts",children:"My contacts"})},et=(n(121),n(285),function(t){for(var e=t.totalItemsAmount,n=t.setSize,a=t.currentPage,o=t.onPageChanged,c=Math.ceil(e/n),i=Object(s.useState)(1),u=Object(L.a)(i,2),l=u[0],f=u[1],j=(l-1)*n+1,p=l*n,d=[],b=1;b<=c;b++)d.push(b);return Object(r.jsxs)("div",{className:"pagesNumbers",children:[l>1&&Object(r.jsx)("button",{onClick:function(){return f(l-1)},className:"fas fa-arrow-left btnArrow"}),d.filter((function(t){return t>=j&&t<=p})).map((function(t){return Object(r.jsx)("span",{className:" pagesNumber ".concat(a===t&&"selectedPage"),onClick:function(){o(t)},children:t},t)})),c>l&&Object(r.jsx)("button",{onClick:function(){return f(l+1)},className:"fas fa-arrow-right btnArrow"})]})}),nt=n.p+"static/media/user.10a93f10.svg",rt=function(t){var e=t.user,n=t.followingInProgress,s=t.unfollowThunkCreator,a=t.followThunkCreator;return Object(r.jsxs)("div",{className:"userCard",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)(b.b,{to:"/profile/"+e.id,children:Object(r.jsx)("img",{src:e.photos.small||nt,className:"userAvatar",alt:"avatar"})}),e.followed?Object(r.jsx)("button",{disabled:n.some((function(t){return t===e.id})),onClick:function(){s(e.id)},children:"UnFollow"}):Object(r.jsx)("button",{disabled:n.some((function(t){return t===e.id})),onClick:function(){a(e.id)},children:"Follow"})]}),Object(r.jsx)("div",{className:"mainInfo",children:Object(r.jsx)("span",{children:e.name})}),Object(r.jsx)("div",{className:"secondaryInfo",children:Object(r.jsx)("span",{children:e.status})})]},e.id)},st=function(t){var e=t.currentPage,n=t.onPageChanged,s=t.totalUsersCount,a=t.pageSize,o=t.users,c=t.followingInProgress,i=t.unfollowThunkCreator,u=t.followThunkCreator;return Object(r.jsxs)("section",{className:"users",children:[Object(r.jsx)(et,{totalItemsAmount:s,setSize:a,currentPage:e,onPageChanged:n}),o.map((function(t){return Object(r.jsx)(rt,{user:t,followingInProgress:c,unfollowThunkCreator:i,followThunkCreator:u},t.id)}))]})},at=function(t,e,n,r){return t.map((function(t){return t[n]===e?Object(O.a)(Object(O.a)({},t),r):t}))},ot="FOLLOW",ct="UNFOLLOW",it="SET-USERS",ut="SET-CURRENT-PAGE",lt="USERS-COUNT",ft="TOGGLE-IS-LOADING",jt="TOGGLE-IS-FOLLOWING-PROGRESS",pt={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isLoading:!0,followingInProgress:[]},dt=function(t){return{type:ot,userId:t}},bt=function(t){return{type:ct,userId:t}},ht=function(t){return{type:ft,isLoading:t}},Ot=function(t,e){return{type:jt,isFetching:t,userId:e}},mt=function(){var t=Object(R.a)(G.a.mark((function t(e,n,r,s){return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(Ot(!0,n)),t.next=3,r(n);case 3:0===t.sent.resultCode&&e(s(n)),e(Ot(!1,n));case 6:case"end":return t.stop()}}),t)})));return function(e,n,r,s){return t.apply(this,arguments)}}(),gt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case ot:return Object(O.a)(Object(O.a)({},t),{},{users:at(t.users,e.userId,"id",{followed:!0})});case ct:return Object(O.a)(Object(O.a)({},t),{},{users:at(t.users,e.userId,"id",{followed:!1})});case it:return Object(O.a)(Object(O.a)({},t),{},{users:e.users});case ut:return Object(O.a)(Object(O.a)({},t),{},{currentPage:e.currentPage});case lt:return Object(O.a)(Object(O.a)({},t),{},{totalUsersCount:e.usersCount});case ft:return Object(O.a)(Object(O.a)({},t),{},{isLoading:e.isLoading});case jt:return Object(O.a)(Object(O.a)({},t),{},{followingInProgress:e.isFetching?[].concat(Object(m.a)(t.followingInProgress),[e.userId]):t.followingInProgress.filter((function(t){return t!==e.userId}))});default:return t}},vt=n(128),xt=function(t){return t.users.pageSize},wt=function(t){return t.users.totalUsersCount},kt=function(t){return t.users.currentPage},Ct=function(t){return t.users.isLoading},yt=function(t){return t.users.followingInProgress},Nt=Object(vt.a)((function(t){return t.users.users}),(function(t){return t.filter((function(t){return!0}))})),St=function(t){Object(l.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(i.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(t=e.call.apply(e,[this].concat(s))).onPageChanged=function(e){var n=t.props,r=n.getUsersThunkCreator,s=n.pageSize,a=n.setCurrentPage;r(e,s),a(e)},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this.props;(0,t.getUsersThunkCreator)(t.currentPage,t.pageSize)}},{key:"render",value:function(){return Object(r.jsxs)(r.Fragment,{children:[this.props.isLoading&&Object(r.jsx)(E,{}),Object(r.jsx)(st,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress,followThunkCreator:this.props.followThunkCreator,unfollowThunkCreator:this.props.unfollowThunkCreator})]})}}]),n}(a.a.Component),It=Object(j.d)(Object(d.b)((function(t){return{users:Nt(t),pageSize:xt(t),totalUsersCount:wt(t),currentPage:kt(t),isLoading:Ct(t),followingInProgress:yt(t)}}),{follow:dt,unfollow:bt,setCurrentPage:function(t){return{type:ut,currentPage:t}},toggleIsFollowingProgress:Ot,getUsersThunkCreator:function(t,e){return function(){var n=Object(R.a)(G.a.mark((function n(r){var s;return G.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(ht(!0)),n.next=3,B.getUsers(t,e);case 3:s=n.sent,r(ht(!1)),r((o=s.items,{type:it,users:o})),r((a=s.totalCount,{type:lt,usersCount:a}));case 7:case"end":return n.stop()}var a,o}),n)})));return function(t){return n.apply(this,arguments)}}()},followThunkCreator:function(t){return function(){var e=Object(R.a)(G.a.mark((function e(n){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:mt(n,t,B.follow.bind(B),dt);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},unfollowThunkCreator:function(t){return function(){var e=Object(R.a)(G.a.mark((function e(n){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:mt(n,t,B.unfollow.bind(B),bt);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(St),Pt=(n(286),function(t){return Object(r.jsxs)("header",{className:"mainHeader",children:[Object(r.jsx)("i",{className:"fas fa-stream",children:Object(r.jsx)("span",{className:"logoName",children:"Anketa"})}),Object(r.jsx)("section",{className:"authSection",children:t.isAuth?Object(r.jsxs)("div",{className:"loginHeader",children:[t.login,Object(r.jsx)("button",{onClick:t.logoutThunkCr,children:"Log out"})]}):Object(r.jsx)(b.b,{to:"/login",className:"loginLink",children:"Login"})})]})}),Tt=n(36),At="anketa/auth/SET-USER-DATA",Ut={usedId:null,email:null,login:null,isAuth:!1},Et=function(t,e,n,r){return{type:At,payload:{userId:t,email:e,login:n,isAuth:r}}},Lt=function(){return function(){var t=Object(R.a)(G.a.mark((function t(e){var n,r,s,a,o;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H();case 2:0===(n=t.sent).data.resultCode&&(r=n.data.data,s=r.id,a=r.email,o=r.login,e(Et(s,a,o,!0)));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},zt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ut,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case At:return Object(O.a)(Object(O.a)({},t),e.payload);default:return t}},Dt=function(t){Object(l.a)(n,t);var e=Object(f.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(r.jsx)(Pt,Object(O.a)({},this.props))}}]),n}(a.a.Component),Ft=Object(d.b)((function(t){return{isAuth:t.auth.isAuth,login:t.auth.login}}),{logoutThunkCr:function(){return function(){var t=Object(R.a)(G.a.mark((function t(e){return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,q();case 2:0===t.sent.data.resultCode&&e(Et(null,null,null,!1));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(Dt),Mt=(n(287),Object(y.a)({form:"login"})((function(t){var e=t.handleSubmit,n=t.error;return Object(r.jsxs)("form",{onSubmit:e,className:"loginForm",children:[Object(r.jsx)(C.a,{placeholder:"Email",name:"email",component:S.a,validate:[N.b]}),Object(r.jsx)(C.a,{placeholder:"Password",name:"password",component:"input",type:"password"}),Object(r.jsxs)("div",{className:"rememberCheck",children:[Object(r.jsx)(C.a,{component:"input",name:"rememberMe",type:"checkbox"}),Object(r.jsx)("p",{children:"remember me"})]}),Object(r.jsx)("button",{type:"submit",children:"Login"}),n&&Object(r.jsx)("div",{className:"loginFormError",children:n})]})}))),Gt=Object(d.b)((function(t){return{isAuth:t.auth.isAuth}}),{loginThunkCr:function(t,e,n){return function(){var r=Object(R.a)(G.a.mark((function r(s){var a,o;return G.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Y(t,e,n);case 2:0===(a=r.sent).data.resultCode?s(Lt()):(o=a.data.messages.length>0?a.data.messages[0]:"indefinited error",s(Object(Tt.a)("login",{_error:o})));case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()}})((function(t){return t.isAuth?Object(r.jsx)(p.a,{to:"/profile"}):Object(r.jsxs)("section",{className:"loginSection",children:[Object(r.jsx)("h1",{children:"Login"}),Object(r.jsx)(Mt,{onSubmit:function(e){t.loginThunkCr(e.email,e.password,e.rememberMe)}})]})})),Rt="SET-INITIALIZED",Jt={initialized:!1},Bt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Jt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case Rt:return Object(O.a)(Object(O.a)({},t),{},{initialized:!0});default:return t}},Wt=(n(288),Object(s.lazy)((function(){return n.e(3).then(n.bind(null,291))}))),Ht=function(t){Object(l.a)(n,t);var e=Object(f.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeAppThunkCr()}},{key:"render",value:function(){return this.props.initialized?Object(r.jsxs)("div",{className:"App",children:[Object(r.jsxs)("div",{className:"menuWrapper",children:[Object(r.jsx)(Ft,{}),Object(r.jsx)(h,{})]}),Object(r.jsxs)("div",{className:"contentWrapper",children:[Object(r.jsx)(p.b,{path:"/profile/:userId?",render:function(){return Object(r.jsx)($,{})}}),Object(r.jsx)(p.b,{path:"/posts",render:function(){return Object(r.jsx)(A,{})}}),Object(r.jsx)(p.b,{path:"/contacts",render:function(){return Object(r.jsx)(tt,{})}}),Object(r.jsx)(p.b,{path:"/messages",render:(t=Wt,function(e){return Object(r.jsxs)(s.Suspense,{fallback:Object(r.jsx)(E,{}),children:[Object(r.jsx)(t,Object(O.a)({},e)),";"]})})}),Object(r.jsx)(p.b,{path:"/users",render:function(){return Object(r.jsx)(It,{})}}),Object(r.jsx)(p.b,{path:"/login",render:function(){return Object(r.jsx)(Gt,{})}})]})]}):Object(r.jsx)(E,{});var t}}]),n}(a.a.Component),Yt=Object(j.d)(p.f,Object(d.b)((function(t){return{initialized:t.app.initialized}}),{initializeAppThunkCr:function(){return function(t){var e=t(Lt());Promise.all([e]).then((function(){t({type:Rt})}))}}}))(Ht),qt=n(122),Kt="UPDATE-INFO",Zt={name:"Jack",secondName:"Sparrow",sex:"male",familySituation:"single",age:"35",homeTown:"Sea",avatar:"https://www.flaticon.com/premium-icon/icons/svg/3106/3106921.svg",status:"Why Is The Rum Always Gone?"},_t=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Zt,e=arguments.length>1?arguments[1]:void 0,n=function(e){return Object(O.a)(Object(O.a)({},t),{},{profileInfo:e})};switch(e.type){case Kt:return n(e.profileInfo);default:return t}},Qt=n(129),Vt=n(124),Xt=Object(j.c)({app:Bt,form:Vt.a,auth:zt,profileInfo:_t,profile:V,posts:w,dialogs:qt.b,users:gt}),$t=Object(j.e)(Xt,Object(j.a)(Qt.a));c.a.render(Object(r.jsx)(b.a,{children:Object(r.jsx)(d.a,{store:$t,children:Object(r.jsx)(Yt,{})})}),document.getElementById("root"))},45:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return s}));var r=function(t){if(!t)return"Field is required"},s=function(t){return function(e){if(e&&e.length>t)return"Max length is ".concat(t," symbols")}}},62:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return c}));var r=n(3),s=n(90),a=n(0),o=(n(1),n(84),n(167),function(t){var e=t.input,n=t.meta,o=n.touched,c=n.error,i=Object(s.a)(t,["input","meta"]);return Object(a.jsxs)("div",{className:"formControl ".concat(o&&c&&"error"),children:[Object(a.jsx)("textarea",Object(r.a)(Object(r.a)({},e),i)),o&&c&&Object(a.jsx)("span",{children:c})]})}),c=function(t){var e=t.input,n=t.meta,o=n.touched,c=n.error,i=Object(s.a)(t,["input","meta"]);return Object(a.jsxs)("div",{className:"formControl ".concat(o&&c&&"error"),children:[Object(a.jsx)("input",Object(r.a)(Object(r.a)({},e),i)),o&&c&&Object(a.jsx)("span",{children:c})]})}}},[[289,1,2]]]);
//# sourceMappingURL=main.9bce3f72.chunk.js.map