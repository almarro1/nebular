(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{"4Ssn":function(l,n,t){"use strict";var e=t("CcnG");t("S+eJ"),t.d(n,"d",function(){return u}),t.d(n,"h",function(){return o}),t.d(n,"a",function(){return i}),t.d(n,"e",function(){return s}),t.d(n,"c",function(){return r}),t.d(n,"g",function(){return a}),t.d(n,"b",function(){return c}),t.d(n,"f",function(){return b});var u=e.vb({encapsulation:2,styles:[],data:{}});function o(l){return e.Rb(0,[e.Gb(null,0)],null,null)}var i=e.vb({encapsulation:2,styles:[],data:{}});function s(l){return e.Rb(0,[e.Gb(null,0)],null,null)}var r=e.vb({encapsulation:2,styles:[],data:{}});function a(l){return e.Rb(0,[e.Gb(null,0)],null,null)}var c=e.vb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}"]],data:{}});function b(l){return e.Rb(0,[e.Gb(null,0),e.Gb(null,1),e.Gb(null,2),e.Gb(null,3)],null,null)}},c2hK:function(l,n,t){"use strict";t.r(n);var e=t("CcnG"),u=function(){return function(){}}(),o=t("pMnS"),i=t("7s4d"),s=["body{height:30rem}[_nghost-%COMP%]{display:block;margin:0 auto;max-width:50rem}.nb-spinner-container[_ngcontent-%COMP%]{-webkit-box-flex:1;-ms-flex:1 0 4rem;flex:1 0 4rem}"],r=t("aJCS"),a=t("jXul"),c=function(){return function(){this.label="Loading"}}(),b=e.vb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block}.title-placeholder[_ngcontent-%COMP%]{height:1.8rem;margin-bottom:.5rem;width:80%}.text-placeholder[_ngcontent-%COMP%]{height:4rem;margin-bottom:1rem}.link-placeholder[_ngcontent-%COMP%]{height:1.25rem;width:5rem}.nb-theme-default   [_nghost-%COMP%]   [class$=placeholder][_ngcontent-%COMP%]{background:#e4e9f2}.nb-theme-dark   [_nghost-%COMP%]   [class$=placeholder][_ngcontent-%COMP%]{background:#101426}.nb-theme-cosmic   [_nghost-%COMP%]   [class$=placeholder][_ngcontent-%COMP%]{background:#13132b}.nb-theme-corporate   [_nghost-%COMP%]   [class$=placeholder][_ngcontent-%COMP%]{background:#e4e9f2}"]],data:{}});function h(l){return e.Rb(0,[(l()(),e.xb(0,0,null,null,0,"div",[["class","title-placeholder"]],null,null,null,null,null)),(l()(),e.xb(1,0,null,null,0,"div",[["class","text-placeholder"]],null,null,null,null,null)),(l()(),e.xb(2,0,null,null,0,"div",[["class","link-placeholder"]],null,null,null,null,null))],null,null)}var d=t("67Y/"),p=t("vubp"),g=function(){function l(l){this.http=l}return l.prototype.load=function(l,n){var t=(l-1)%7*n;return this.http.get("assets/data/news.json").pipe(Object(d.a)(function(l){return l.splice(t,n)}),Object(p.a)(1500))},l}(),m=function(){return function(){}}(),f=e.vb({encapsulation:2,styles:[],data:{}});function w(l){return e.Rb(0,[(l()(),e.xb(0,0,null,null,6,"article",[],null,null,null,null,null)),(l()(),e.xb(1,0,null,null,1,"h2",[["class","h5"]],null,null,null,null,null)),(l()(),e.Pb(2,null,["",""])),(l()(),e.xb(3,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Pb(4,null,["",""])),(l()(),e.xb(5,0,null,null,1,"a",[],[[1,"href",4]],null,null,null,null)),(l()(),e.Pb(-1,null,["Read full article"]))],null,function(l,n){var t=n.component;l(n,2,0,t.post.title),l(n,4,0,t.post.text),l(n,5,0,t.post.link)})}var H=t("4Ssn"),x=t("S+eJ"),y=t("66B6"),v=t("eBxF"),P=t("kztb"),S=t("V+dw"),T=t("Ip0R"),O=t("t/Na"),z=t("dEwP"),N=t("t9fZ"),C=t("Qgas");function R(l,n,t){return 0===t?[n]:(l.push(n),l)}var F=function(){function l(l,n,t,e,u,o,i){this.newsService=l,this.router=n,this.route=t,this.scrollService=e,this.layoutService=u,this.platformId=o,this.window=i,this.news=[],this.topPlaceholders=[],this.bottomPlaceholders=[],this.pageSize=10,this.loadingNext=!1,this.loadingPrevious=!1,Object(T.C)(this.platformId)&&this.window.history.scrollRestoration&&(this.initialScrollRestoration=i.history.scrollRestoration,history.scrollRestoration="manual")}return l.prototype.ngOnInit=function(){var l=this.route.snapshot.queryParams.page;this.startPage=l?Number.parseInt(l,10):100,this.pageToLoadNext=this.startPage},l.prototype.ngOnDestroy=function(){this.initialScrollRestoration&&(this.window.history.scrollRestoration=this.initialScrollRestoration)},l.prototype.updateUrl=function(l){this.router.navigate(["."],{queryParams:{page:l},replaceUrl:!0,relativeTo:this.route,queryParamsHandling:"merge"})},l.prototype.loadPrevious=function(){var l=this;this.loadingPrevious||1===this.startPage||(this.loadingPrevious=!0,this.topPlaceholders=new Array(this.pageSize),this.restoreScrollPosition(),this.startPage--,this.newsService.load(this.startPage,this.pageSize).subscribe(function(n){var t;l.topPlaceholders=[],(t=l.news).unshift.apply(t,n),l.loadingPrevious=!1},function(n){return l.startPage++}))},l.prototype.loadNext=function(){var l=this;this.loadingNext||(this.loadingNext=!0,this.bottomPlaceholders=new Array(this.pageSize),this.newsService.load(this.pageToLoadNext,this.pageSize).subscribe(function(n){var t;l.bottomPlaceholders=[],(t=l.news).push.apply(t,n),l.loadingNext=!1,l.pageToLoadNext++}))},l.prototype.restoreScrollPosition=function(){var l=this;Object(z.a)(this.layoutService.getDimensions(),this.scrollService.getPosition(),this.listItems.changes.pipe(Object(N.a)(1)),this.layoutService.getDimensions(),this.scrollService.getPosition()).pipe(Object(C.a)(R,[])).subscribe(function(n){var t=n[4].y,e=n[3].scrollHeight-n[0].scrollHeight;n[1].y+e!==t&&l.scrollService.scrollTo(null,t+e)})},l}(),A=t("ZYCi"),I=t("MGne"),k=e.vb({encapsulation:0,styles:[s],data:{}});function M(l){return e.Rb(0,[(l()(),e.xb(0,0,[[2,0],[1,0]],null,3,"nb-list-item",[],[[1,"role",0]],null,null,r.d,r.b)),e.wb(1,49152,[[3,4]],0,a.b,[],null,null),(l()(),e.xb(2,0,null,0,1,"nb-news-post-placeholder",[],[[1,"aria-label",0]],null,null,h,b)),e.wb(3,49152,null,0,c,[],null,null)],null,function(l,n){l(n,0,0,e.Hb(n,1).role),l(n,2,0,e.Hb(n,3).label)})}function L(l){return e.Rb(0,[(l()(),e.xb(0,0,[[2,0],[1,0]],null,3,"nb-list-item",[],[[1,"role",0]],null,null,r.d,r.b)),e.wb(1,49152,[[3,4]],0,a.b,[],null,null),(l()(),e.xb(2,0,null,0,1,"nb-news-post",[],null,null,null,w,f)),e.wb(3,49152,null,0,m,[],{post:[0,"post"]},null)],function(l,n){l(n,3,0,n.context.$implicit)},function(l,n){l(n,0,0,e.Hb(n,1).role)})}function _(l){return e.Rb(0,[(l()(),e.xb(0,0,[[2,0],[1,0]],null,3,"nb-list-item",[],[[1,"role",0]],null,null,r.d,r.b)),e.wb(1,49152,[[3,4]],0,a.b,[],null,null),(l()(),e.xb(2,0,null,0,1,"nb-news-post-placeholder",[],[[1,"aria-label",0]],null,null,h,b)),e.wb(3,49152,null,0,c,[],null,null)],null,function(l,n){l(n,0,0,e.Hb(n,1).role),l(n,2,0,e.Hb(n,3).label)})}function j(l){return e.Rb(0,[e.Nb(671088640,1,{listItems:1}),(l()(),e.xb(1,0,null,null,13,"nb-card",[],[[2,"size-tiny",null],[2,"size-small",null],[2,"size-medium",null],[2,"size-large",null],[2,"size-giant",null],[2,"status-primary",null],[2,"status-info",null],[2,"status-success",null],[2,"status-warning",null],[2,"status-danger",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null]],null,null,H.f,H.b)),e.wb(2,49152,null,0,x.b,[],null,null),(l()(),e.xb(3,0,null,2,11,"nb-list",[["listenWindowScroll",""],["nbInfiniteList",""],["nbListPageTracker",""]],[[1,"role",0]],[[null,"topThreshold"],[null,"bottomThreshold"],[null,"pageChange"],[null,"scroll"]],function(l,n,t){var u=!0,o=l.component;return"scroll"===n&&(u=!1!==e.Hb(l,7).onElementScroll()&&u),"topThreshold"===n&&(u=!1!==o.loadPrevious()&&u),"bottomThreshold"===n&&(u=!1!==o.loadNext()&&u),"pageChange"===n&&(u=!1!==o.updateUrl(t)&&u),u},r.c,r.a)),e.wb(4,49152,null,0,a.a,[],null,null),e.wb(5,4341760,null,1,y.a,[],{pageSize:[0,"pageSize"],startPage:[1,"startPage"]},{pageChange:"pageChange"}),e.Nb(603979776,2,{listItems:1}),e.wb(7,4341760,null,1,v.a,[e.k,P.a,S.a],{threshold:[0,"threshold"],listenWindowScroll:[1,"listenWindowScroll"]},{bottomThreshold:"bottomThreshold",topThreshold:"topThreshold"}),e.Nb(603979776,3,{listItems:1}),(l()(),e.mb(16777216,null,0,1,null,M)),e.wb(10,278528,null,0,T.m,[e.T,e.P,e.u],{ngForOf:[0,"ngForOf"]},null),(l()(),e.mb(16777216,null,0,1,null,L)),e.wb(12,278528,null,0,T.m,[e.T,e.P,e.u],{ngForOf:[0,"ngForOf"]},null),(l()(),e.mb(16777216,null,0,1,null,_)),e.wb(14,278528,null,0,T.m,[e.T,e.P,e.u],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var t=n.component;l(n,5,0,t.pageSize,t.startPage),l(n,7,0,500,""),l(n,10,0,t.topPlaceholders),l(n,12,0,t.news),l(n,14,0,t.bottomPlaceholders)},function(l,n){l(n,1,1,[e.Hb(n,2).tiny,e.Hb(n,2).small,e.Hb(n,2).medium,e.Hb(n,2).large,e.Hb(n,2).giant,e.Hb(n,2).primary,e.Hb(n,2).info,e.Hb(n,2).success,e.Hb(n,2).warning,e.Hb(n,2).danger,e.Hb(n,2).hasAccent,e.Hb(n,2).primaryAccent,e.Hb(n,2).infoAccent,e.Hb(n,2).successAccent,e.Hb(n,2).warningAccent,e.Hb(n,2).dangerAccent]),l(n,3,0,e.Hb(n,4).role)})}function W(l){return e.Rb(0,[(l()(),e.xb(0,0,null,null,2,"ng-component",[],null,null,null,j,k)),e.Mb(512,null,g,g,[O.c]),e.wb(2,245760,null,0,F,[g,A.l,A.a,P.a,S.a,e.D,I.f],null,null)],function(l,n){l(n,2,0)},null)}var E=e.tb("ng-component",F,W,{},{},[]),G=function(){function l(l){this.newsService=l,this.firstCard={news:[],placeholders:[],loading:!1,pageToLoadNext:1},this.secondCard={news:[],placeholders:[],loading:!1,pageToLoadNext:1},this.pageSize=10}return l.prototype.loadNext=function(l){l.loading||(l.loading=!0,l.placeholders=new Array(this.pageSize),this.newsService.load(l.pageToLoadNext,this.pageSize).subscribe(function(n){var t;l.placeholders=[],(t=l.news).push.apply(t,n),l.loading=!1,l.pageToLoadNext++}))},l}(),$=e.vb({encapsulation:0,styles:[s,["[_nghost-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex}nb-card[_ngcontent-%COMP%]{-webkit-box-flex:1;-ms-flex:1 1 45%;flex:1 1 45%;margin:0 2.5%}nb-card.own-scroll[_ngcontent-%COMP%]{height:30rem}"]],data:{}});function q(l){return e.Rb(0,[(l()(),e.xb(0,0,null,null,3,"nb-list-item",[],[[1,"role",0]],null,null,r.d,r.b)),e.wb(1,49152,[[1,4]],0,a.b,[],null,null),(l()(),e.xb(2,0,null,0,1,"nb-news-post",[],null,null,null,w,f)),e.wb(3,49152,null,0,m,[],{post:[0,"post"]},null)],function(l,n){l(n,3,0,n.context.$implicit)},function(l,n){l(n,0,0,e.Hb(n,1).role)})}function D(l){return e.Rb(0,[(l()(),e.xb(0,0,null,null,3,"nb-list-item",[],[[1,"role",0]],null,null,r.d,r.b)),e.wb(1,49152,[[1,4]],0,a.b,[],null,null),(l()(),e.xb(2,0,null,0,1,"nb-news-post-placeholder",[],[[1,"aria-label",0]],null,null,h,b)),e.wb(3,49152,null,0,c,[],null,null)],null,function(l,n){l(n,0,0,e.Hb(n,1).role),l(n,2,0,e.Hb(n,3).label)})}function J(l){return e.Rb(0,[(l()(),e.xb(0,0,null,null,3,"nb-list-item",[],[[1,"role",0]],null,null,r.d,r.b)),e.wb(1,49152,[[2,4]],0,a.b,[],null,null),(l()(),e.xb(2,0,null,0,1,"nb-news-post",[],null,null,null,w,f)),e.wb(3,49152,null,0,m,[],{post:[0,"post"]},null)],function(l,n){l(n,3,0,n.context.$implicit)},function(l,n){l(n,0,0,e.Hb(n,1).role)})}function U(l){return e.Rb(0,[(l()(),e.xb(0,0,null,null,3,"nb-list-item",[],[[1,"role",0]],null,null,r.d,r.b)),e.wb(1,49152,[[2,4]],0,a.b,[],null,null),(l()(),e.xb(2,0,null,0,1,"nb-news-post-placeholder",[],[[1,"aria-label",0]],null,null,h,b)),e.wb(3,49152,null,0,c,[],null,null)],null,function(l,n){l(n,0,0,e.Hb(n,1).role),l(n,2,0,e.Hb(n,3).label)})}function V(l){return e.Rb(0,[(l()(),e.xb(0,0,null,null,12,"nb-card",[["class","own-scroll"]],[[2,"size-tiny",null],[2,"size-small",null],[2,"size-medium",null],[2,"size-large",null],[2,"size-giant",null],[2,"status-primary",null],[2,"status-info",null],[2,"status-success",null],[2,"status-warning",null],[2,"status-danger",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null]],null,null,H.f,H.b)),e.wb(1,49152,null,0,x.b,[],null,null),(l()(),e.xb(2,0,null,0,2,"nb-card-header",[],null,null,null,H.h,H.d)),e.wb(3,49152,null,0,x.d,[],null,null),(l()(),e.Pb(-1,0,[" Own scroll "])),(l()(),e.xb(5,0,null,2,7,"nb-list",[["nbInfiniteList",""]],[[1,"role",0]],[[null,"bottomThreshold"],[null,"scroll"]],function(l,n,t){var u=!0,o=l.component;return"scroll"===n&&(u=!1!==e.Hb(l,7).onElementScroll()&&u),"bottomThreshold"===n&&(u=!1!==o.loadNext(o.firstCard)&&u),u},r.c,r.a)),e.wb(6,49152,null,0,a.a,[],null,null),e.wb(7,4341760,null,1,v.a,[e.k,P.a,S.a],{threshold:[0,"threshold"]},{bottomThreshold:"bottomThreshold"}),e.Nb(603979776,1,{listItems:1}),(l()(),e.mb(16777216,null,0,1,null,q)),e.wb(10,278528,null,0,T.m,[e.T,e.P,e.u],{ngForOf:[0,"ngForOf"]},null),(l()(),e.mb(16777216,null,0,1,null,D)),e.wb(12,278528,null,0,T.m,[e.T,e.P,e.u],{ngForOf:[0,"ngForOf"]},null),(l()(),e.xb(13,0,null,null,12,"nb-card",[],[[2,"size-tiny",null],[2,"size-small",null],[2,"size-medium",null],[2,"size-large",null],[2,"size-giant",null],[2,"status-primary",null],[2,"status-info",null],[2,"status-success",null],[2,"status-warning",null],[2,"status-danger",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null]],null,null,H.f,H.b)),e.wb(14,49152,null,0,x.b,[],null,null),(l()(),e.xb(15,0,null,0,2,"nb-card-header",[],null,null,null,H.h,H.d)),e.wb(16,49152,null,0,x.d,[],null,null),(l()(),e.Pb(-1,0,[" Window scroll "])),(l()(),e.xb(18,0,null,2,7,"nb-list",[["listenWindowScroll",""],["nbInfiniteList",""]],[[1,"role",0]],[[null,"bottomThreshold"],[null,"scroll"]],function(l,n,t){var u=!0,o=l.component;return"scroll"===n&&(u=!1!==e.Hb(l,20).onElementScroll()&&u),"bottomThreshold"===n&&(u=!1!==o.loadNext(o.secondCard)&&u),u},r.c,r.a)),e.wb(19,49152,null,0,a.a,[],null,null),e.wb(20,4341760,null,1,v.a,[e.k,P.a,S.a],{threshold:[0,"threshold"],listenWindowScroll:[1,"listenWindowScroll"]},{bottomThreshold:"bottomThreshold"}),e.Nb(603979776,2,{listItems:1}),(l()(),e.mb(16777216,null,0,1,null,J)),e.wb(23,278528,null,0,T.m,[e.T,e.P,e.u],{ngForOf:[0,"ngForOf"]},null),(l()(),e.mb(16777216,null,0,1,null,U)),e.wb(25,278528,null,0,T.m,[e.T,e.P,e.u],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var t=n.component;l(n,7,0,500),l(n,10,0,t.firstCard.news),l(n,12,0,t.firstCard.placeholders),l(n,20,0,500,""),l(n,23,0,t.secondCard.news),l(n,25,0,t.secondCard.placeholders)},function(l,n){l(n,0,1,[e.Hb(n,1).tiny,e.Hb(n,1).small,e.Hb(n,1).medium,e.Hb(n,1).large,e.Hb(n,1).giant,e.Hb(n,1).primary,e.Hb(n,1).info,e.Hb(n,1).success,e.Hb(n,1).warning,e.Hb(n,1).danger,e.Hb(n,1).hasAccent,e.Hb(n,1).primaryAccent,e.Hb(n,1).infoAccent,e.Hb(n,1).successAccent,e.Hb(n,1).warningAccent,e.Hb(n,1).dangerAccent]),l(n,5,0,e.Hb(n,6).role),l(n,13,1,[e.Hb(n,14).tiny,e.Hb(n,14).small,e.Hb(n,14).medium,e.Hb(n,14).large,e.Hb(n,14).giant,e.Hb(n,14).primary,e.Hb(n,14).info,e.Hb(n,14).success,e.Hb(n,14).warning,e.Hb(n,14).danger,e.Hb(n,14).hasAccent,e.Hb(n,14).primaryAccent,e.Hb(n,14).infoAccent,e.Hb(n,14).successAccent,e.Hb(n,14).warningAccent,e.Hb(n,14).dangerAccent]),l(n,18,0,e.Hb(n,19).role)})}function Y(l){return e.Rb(0,[(l()(),e.xb(0,0,null,null,2,"ng-component",[],null,null,null,V,$)),e.Mb(512,null,g,g,[O.c]),e.wb(2,49152,null,0,G,[g],null,null)],null,null)}var B=e.tb("ng-component",G,Y,{},{},[]),K=function(){function l(l){this.newsService=l,this.news=[],this.placeholders=[],this.pageSize=10,this.pageToLoadNext=1,this.loading=!1}return l.prototype.loadNext=function(){var l=this;this.loading||(this.loading=!0,this.placeholders=new Array(this.pageSize),this.newsService.load(this.pageToLoadNext,this.pageSize).subscribe(function(n){var t;l.placeholders=[],(t=l.news).push.apply(t,n),l.loading=!1,l.pageToLoadNext++}))},l}(),Q=e.vb({encapsulation:0,styles:[s],data:{}});function Z(l){return e.Rb(0,[(l()(),e.xb(0,0,null,null,3,"nb-list-item",[],[[1,"role",0]],null,null,r.d,r.b)),e.wb(1,49152,[[1,4]],0,a.b,[],null,null),(l()(),e.xb(2,0,null,0,1,"nb-news-post",[],null,null,null,w,f)),e.wb(3,49152,null,0,m,[],{post:[0,"post"]},null)],function(l,n){l(n,3,0,n.context.$implicit)},function(l,n){l(n,0,0,e.Hb(n,1).role)})}function X(l){return e.Rb(0,[(l()(),e.xb(0,0,null,null,3,"nb-list-item",[],[[1,"role",0]],null,null,r.d,r.b)),e.wb(1,49152,[[1,4]],0,a.b,[],null,null),(l()(),e.xb(2,0,null,0,1,"nb-news-post-placeholder",[],[[1,"aria-label",0]],null,null,h,b)),e.wb(3,49152,null,0,c,[],null,null)],null,function(l,n){l(n,0,0,e.Hb(n,1).role),l(n,2,0,e.Hb(n,3).label)})}function ll(l){return e.Rb(0,[(l()(),e.xb(0,0,null,null,9,"nb-card",[],[[2,"size-tiny",null],[2,"size-small",null],[2,"size-medium",null],[2,"size-large",null],[2,"size-giant",null],[2,"status-primary",null],[2,"status-info",null],[2,"status-success",null],[2,"status-warning",null],[2,"status-danger",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null]],null,null,H.f,H.b)),e.wb(1,49152,null,0,x.b,[],null,null),(l()(),e.xb(2,0,null,2,7,"nb-list",[["listenWindowScroll",""],["nbInfiniteList",""]],[[1,"role",0]],[[null,"bottomThreshold"],[null,"scroll"]],function(l,n,t){var u=!0,o=l.component;return"scroll"===n&&(u=!1!==e.Hb(l,4).onElementScroll()&&u),"bottomThreshold"===n&&(u=!1!==o.loadNext()&&u),u},r.c,r.a)),e.wb(3,49152,null,0,a.a,[],null,null),e.wb(4,4341760,null,1,v.a,[e.k,P.a,S.a],{threshold:[0,"threshold"],listenWindowScroll:[1,"listenWindowScroll"]},{bottomThreshold:"bottomThreshold"}),e.Nb(603979776,1,{listItems:1}),(l()(),e.mb(16777216,null,0,1,null,Z)),e.wb(7,278528,null,0,T.m,[e.T,e.P,e.u],{ngForOf:[0,"ngForOf"]},null),(l()(),e.mb(16777216,null,0,1,null,X)),e.wb(9,278528,null,0,T.m,[e.T,e.P,e.u],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var t=n.component;l(n,4,0,500,""),l(n,7,0,t.news),l(n,9,0,t.placeholders)},function(l,n){l(n,0,1,[e.Hb(n,1).tiny,e.Hb(n,1).small,e.Hb(n,1).medium,e.Hb(n,1).large,e.Hb(n,1).giant,e.Hb(n,1).primary,e.Hb(n,1).info,e.Hb(n,1).success,e.Hb(n,1).warning,e.Hb(n,1).danger,e.Hb(n,1).hasAccent,e.Hb(n,1).primaryAccent,e.Hb(n,1).infoAccent,e.Hb(n,1).successAccent,e.Hb(n,1).warningAccent,e.Hb(n,1).dangerAccent]),l(n,2,0,e.Hb(n,3).role)})}function nl(l){return e.Rb(0,[(l()(),e.xb(0,0,null,null,2,"ng-component",[],null,null,null,ll,Q)),e.Mb(512,null,g,g,[O.c]),e.wb(2,49152,null,0,K,[g],null,null)],null,null)}var tl=e.tb("ng-component",K,nl,{},{},[]),el=t("1Ei1"),ul=t("VnD/"),ol=function(){function l(l,n,t,e,u,o){this.newsService=l,this.router=n,this.route=t,this.scrollService=e,this.platformId=u,this.window=o,this.news=[],this.placeholders=[],this.pageSize=10,this.loadingNext=!1,this.loadingPrevious=!1,Object(T.C)(this.platformId)&&this.window.history.scrollRestoration&&(this.initialScrollRestoration=o.history.scrollRestoration,history.scrollRestoration="manual")}return l.prototype.ngOnInit=function(){var l=this.route.snapshot.queryParams.page;this.startPage=l?Number.parseInt(l,10):1,this.pageToLoadNext=this.startPage},l.prototype.ngOnDestroy=function(){this.initialScrollRestoration&&(this.window.history.scrollRestoration=this.initialScrollRestoration)},l.prototype.updateUrl=function(l){this.router.navigate(["."],{queryParams:{page:l},replaceUrl:!0,relativeTo:this.route,queryParamsHandling:"merge"})},l.prototype.loadPrevious=function(){var l=this;this.loadingPrevious||1===this.startPage||(this.loadingPrevious=!0,this.newsService.load(this.startPage-1,this.pageSize).subscribe(function(n){var t;(t=l.news).unshift.apply(t,n),l.loadingPrevious=!1,l.restoreScrollPosition(),l.startPage--}))},l.prototype.loadNext=function(){var l=this;this.loadingNext||(this.loadingNext=!0,this.placeholders=new Array(this.pageSize),this.newsService.load(this.pageToLoadNext,this.pageSize).subscribe(function(n){var t;l.placeholders=[],(t=l.news).push.apply(t,n),l.loadingNext=!1,l.pageToLoadNext++}))},l.prototype.restoreScrollPosition=function(){var l=this,n=this.listItems.length>0?this.listItems.first.nativeElement:null;this.listItems.changes.pipe(Object(d.a)(function(){return l.listItems.first.nativeElement}),Object(ul.a)(function(l){return l!==n}),Object(N.a)(1)).subscribe(function(){for(var t,e,u,o,i=0,s=0,r=l.listItems.toArray();s<r.length;s++){var a=r[s].nativeElement;if(a===n)break;i+=(e=void 0,e=l.window.getComputedStyle(t=a),u=parseInt(e.getPropertyValue("margin-top"),10),o=parseInt(e.getPropertyValue("margin-bottom"),10),t.offsetHeight+u+o)}l.scrollService.scrollTo(null,i)})},l}(),il=e.vb({encapsulation:0,styles:[s],data:{}});function sl(l){return e.Rb(0,[(l()(),e.xb(0,0,[[2,0],[1,0]],null,3,"nb-list-item",[],[[1,"role",0]],null,null,r.d,r.b)),e.wb(1,49152,[[3,4]],0,a.b,[],null,null),(l()(),e.xb(2,0,null,0,1,"nb-news-post",[],null,null,null,w,f)),e.wb(3,49152,null,0,m,[],{post:[0,"post"]},null)],function(l,n){l(n,3,0,n.context.$implicit)},function(l,n){l(n,0,0,e.Hb(n,1).role)})}function rl(l){return e.Rb(0,[(l()(),e.xb(0,0,[[2,0],[1,0]],null,3,"nb-list-item",[],[[1,"role",0]],null,null,r.d,r.b)),e.wb(1,49152,[[3,4]],0,a.b,[],null,null),(l()(),e.xb(2,0,null,0,1,"nb-news-post-placeholder",[],[[1,"aria-label",0]],null,null,h,b)),e.wb(3,49152,null,0,c,[],null,null)],null,function(l,n){l(n,0,0,e.Hb(n,1).role),l(n,2,0,e.Hb(n,3).label)})}function al(l){return e.Rb(0,[e.Nb(671088640,1,{listItems:1}),(l()(),e.xb(1,0,null,null,13,"nb-card",[],[[2,"size-tiny",null],[2,"size-small",null],[2,"size-medium",null],[2,"size-large",null],[2,"size-giant",null],[2,"status-primary",null],[2,"status-info",null],[2,"status-success",null],[2,"status-warning",null],[2,"status-danger",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null]],null,null,H.f,H.b)),e.wb(2,49152,null,0,x.b,[],null,null),(l()(),e.xb(3,16777216,null,2,1,"div",[],[[2,"nb-spinner-container",null]],null,null,null,null)),e.wb(4,81920,null,0,el.a,[e.T,e.j,e.G,e.k],{nbSpinner:[0,"nbSpinner"]},null),(l()(),e.xb(5,0,null,2,9,"nb-list",[["listenWindowScroll",""],["nbInfiniteList",""],["nbListPageTracker",""]],[[1,"role",0]],[[null,"topThreshold"],[null,"bottomThreshold"],[null,"pageChange"],[null,"scroll"]],function(l,n,t){var u=!0,o=l.component;return"scroll"===n&&(u=!1!==e.Hb(l,9).onElementScroll()&&u),"topThreshold"===n&&(u=!1!==o.loadPrevious()&&u),"bottomThreshold"===n&&(u=!1!==o.loadNext()&&u),"pageChange"===n&&(u=!1!==o.updateUrl(t)&&u),u},r.c,r.a)),e.wb(6,49152,null,0,a.a,[],null,null),e.wb(7,4341760,null,1,y.a,[],{pageSize:[0,"pageSize"],startPage:[1,"startPage"]},{pageChange:"pageChange"}),e.Nb(603979776,2,{listItems:1}),e.wb(9,4341760,null,1,v.a,[e.k,P.a,S.a],{threshold:[0,"threshold"],listenWindowScroll:[1,"listenWindowScroll"]},{bottomThreshold:"bottomThreshold",topThreshold:"topThreshold"}),e.Nb(603979776,3,{listItems:1}),(l()(),e.mb(16777216,null,0,1,null,sl)),e.wb(12,278528,null,0,T.m,[e.T,e.P,e.u],{ngForOf:[0,"ngForOf"]},null),(l()(),e.mb(16777216,null,0,1,null,rl)),e.wb(14,278528,null,0,T.m,[e.T,e.P,e.u],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var t=n.component;l(n,4,0,t.loadingPrevious),l(n,7,0,t.pageSize,t.startPage),l(n,9,0,500,""),l(n,12,0,t.news),l(n,14,0,t.placeholders)},function(l,n){l(n,1,1,[e.Hb(n,2).tiny,e.Hb(n,2).small,e.Hb(n,2).medium,e.Hb(n,2).large,e.Hb(n,2).giant,e.Hb(n,2).primary,e.Hb(n,2).info,e.Hb(n,2).success,e.Hb(n,2).warning,e.Hb(n,2).danger,e.Hb(n,2).hasAccent,e.Hb(n,2).primaryAccent,e.Hb(n,2).infoAccent,e.Hb(n,2).successAccent,e.Hb(n,2).warningAccent,e.Hb(n,2).dangerAccent]),l(n,3,0,e.Hb(n,4).isSpinnerExist),l(n,5,0,e.Hb(n,6).role)})}function cl(l){return e.Rb(0,[(l()(),e.xb(0,0,null,null,2,"ng-component",[],null,null,null,al,il)),e.Mb(512,null,g,g,[O.c]),e.wb(2,245760,null,0,ol,[g,A.l,A.a,P.a,e.D,I.f],null,null)],function(l,n){l(n,2,0)},null)}var bl=e.tb("ng-component",ol,cl,{},{},[]),hl=t("gIcY"),dl=t("n81q"),pl=t("i6JN"),gl=t("IVq4"),ml=t("NFr4"),fl=t("0AKQ"),wl=t("YNTD"),Hl=function(){return function(){}}();t.d(n,"InfiniteListModuleNgFactory",function(){return xl});var xl=e.ub(u,[],function(l){return e.Eb([e.Fb(512,e.j,e.gb,[[8,[o.a,i.a,E,B,tl,bl]],[3,e.j],e.z]),e.Fb(4608,T.p,T.o,[e.w,[2,T.H]]),e.Fb(4608,hl.z,hl.z,[]),e.Fb(1073742336,T.c,T.c,[]),e.Fb(1073742336,dl.a,dl.a,[]),e.Fb(1073742336,hl.y,hl.y,[]),e.Fb(1073742336,hl.i,hl.i,[]),e.Fb(1073742336,A.p,A.p,[[2,A.u],[2,A.l]]),e.Fb(1073742336,pl.a,pl.a,[]),e.Fb(1073742336,gl.a,gl.a,[ml.a]),e.Fb(1073742336,fl.a,fl.a,[]),e.Fb(1073742336,wl.a,wl.a,[]),e.Fb(1073742336,Hl,Hl,[]),e.Fb(1073742336,u,u,[]),e.Fb(1024,A.j,function(){return[[{path:"infinite-list-placeholders.component",component:F},{path:"infinite-list-scroll-modes.component",component:G},{path:"infinite-list-showcase.component",component:K},{path:"infinite-news-list.component",component:ol}]]},[])])})}}]);