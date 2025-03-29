var ut=e=>{throw TypeError(e)};var G=(e,t,i)=>t.has(e)||ut("Cannot "+i);var s=(e,t,i)=>(G(e,t,"read from private field"),i?i.call(e):t.get(e)),f=(e,t,i)=>t.has(e)?ut("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),c=(e,t,i,r)=>(G(e,t,"write to private field"),r?r.call(e,i):t.set(e,i),i),l=(e,t,i)=>(G(e,t,"access private method"),i);import{S as St,p as lt,o as O,s as J,q as K,t as Ot,v as X,w as dt,x as Et,y as xt,z as It,A as ft,n as yt,r as I,d as Qt}from"./index-Bcx3K_Zg.js";var R,a,N,v,T,P,Q,S,V,_,L,F,U,w,j,h,z,Y,Z,tt,et,st,it,rt,mt,Rt,Vt=(Rt=class extends St{constructor(t,i){super();f(this,h);f(this,R);f(this,a);f(this,N);f(this,v);f(this,T);f(this,P);f(this,Q);f(this,S);f(this,V);f(this,_);f(this,L);f(this,F);f(this,U);f(this,w);f(this,j,new Set);this.options=i,c(this,R,t),c(this,S,null),c(this,Q,lt()),this.options.experimental_prefetchInRender||s(this,Q).reject(new Error("experimental_prefetchInRender feature flag is not enabled")),this.bindMethods(),this.setOptions(i)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(s(this,a).addObserver(this),pt(s(this,a),this.options)?l(this,h,z).call(this):this.updateResult(),l(this,h,et).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return at(s(this,a),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return at(s(this,a),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,l(this,h,st).call(this),l(this,h,it).call(this),s(this,a).removeObserver(this)}setOptions(t,i){const r=this.options,d=s(this,a);if(this.options=s(this,R).defaultQueryOptions(t),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof O(this.options.enabled,s(this,a))!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");l(this,h,rt).call(this),s(this,a).setOptions(this.options),r._defaulted&&!J(this.options,r)&&s(this,R).getQueryCache().notify({type:"observerOptionsUpdated",query:s(this,a),observer:this});const u=this.hasListeners();u&&bt(s(this,a),d,this.options,r)&&l(this,h,z).call(this),this.updateResult(i),u&&(s(this,a)!==d||O(this.options.enabled,s(this,a))!==O(r.enabled,s(this,a))||K(this.options.staleTime,s(this,a))!==K(r.staleTime,s(this,a)))&&l(this,h,Y).call(this);const n=l(this,h,Z).call(this);u&&(s(this,a)!==d||O(this.options.enabled,s(this,a))!==O(r.enabled,s(this,a))||n!==s(this,w))&&l(this,h,tt).call(this,n)}getOptimisticResult(t){const i=s(this,R).getQueryCache().build(s(this,R),t),r=this.createResult(i,t);return Tt(this,r)&&(c(this,v,r),c(this,P,this.options),c(this,T,s(this,a).state)),r}getCurrentResult(){return s(this,v)}trackResult(t,i){const r={};return Object.keys(t).forEach(d=>{Object.defineProperty(r,d,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(d),i==null||i(d),t[d])})}),r}trackProp(t){s(this,j).add(t)}getCurrentQuery(){return s(this,a)}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const i=s(this,R).defaultQueryOptions(t),r=s(this,R).getQueryCache().build(s(this,R),i);return r.fetch().then(()=>this.createResult(r,i))}fetch(t){return l(this,h,z).call(this,{...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),s(this,v)))}createResult(t,i){var ct;const r=s(this,a),d=this.options,u=s(this,v),n=s(this,T),E=s(this,P),m=t!==r?t.state:s(this,N),{state:x}=t;let o={...x},k=!1,b;if(i._optimisticResults){const g=this.hasListeners(),D=!g&&pt(t,i),M=g&&bt(t,r,i,d);(D||M)&&(o={...o,...It(x.data,t.options)}),i._optimisticResults==="isRestoring"&&(o.fetchStatus="idle")}let{error:A,errorUpdatedAt:B,status:y}=o;if(i.select&&o.data!==void 0)if(u&&o.data===(n==null?void 0:n.data)&&i.select===s(this,V))b=s(this,_);else try{c(this,V,i.select),b=i.select(o.data),b=ft(u==null?void 0:u.data,b,i),c(this,_,b),c(this,S,null)}catch(g){c(this,S,g)}else b=o.data;if(i.placeholderData!==void 0&&b===void 0&&y==="pending"){let g;if(u!=null&&u.isPlaceholderData&&i.placeholderData===(E==null?void 0:E.placeholderData))g=u.data;else if(g=typeof i.placeholderData=="function"?i.placeholderData((ct=s(this,L))==null?void 0:ct.state.data,s(this,L)):i.placeholderData,i.select&&g!==void 0)try{g=i.select(g),c(this,S,null)}catch(D){c(this,S,D)}g!==void 0&&(y="success",b=ft(u==null?void 0:u.data,g,i),k=!0)}s(this,S)&&(A=s(this,S),b=s(this,_),B=Date.now(),y="error");const H=o.fetchStatus==="fetching",$=y==="pending",q=y==="error",ht=$&&H,ot=b!==void 0,C={status:y,fetchStatus:o.fetchStatus,isPending:$,isSuccess:y==="success",isError:q,isInitialLoading:ht,isLoading:ht,data:b,dataUpdatedAt:o.dataUpdatedAt,error:A,errorUpdatedAt:B,failureCount:o.fetchFailureCount,failureReason:o.fetchFailureReason,errorUpdateCount:o.errorUpdateCount,isFetched:o.dataUpdateCount>0||o.errorUpdateCount>0,isFetchedAfterMount:o.dataUpdateCount>m.dataUpdateCount||o.errorUpdateCount>m.errorUpdateCount,isFetching:H,isRefetching:H&&!$,isLoadingError:q&&!ot,isPaused:o.fetchStatus==="paused",isPlaceholderData:k,isRefetchError:q&&ot,isStale:nt(t,i),refetch:this.refetch,promise:s(this,Q)};if(this.options.experimental_prefetchInRender){const g=W=>{C.status==="error"?W.reject(C.error):C.data!==void 0&&W.resolve(C.data)},D=()=>{const W=c(this,Q,C.promise=lt());g(W)},M=s(this,Q);switch(M.status){case"pending":t.queryHash===r.queryHash&&g(M);break;case"fulfilled":(C.status==="error"||C.data!==M.value)&&D();break;case"rejected":(C.status!=="error"||C.error!==M.reason)&&D();break}}return C}updateResult(t){const i=s(this,v),r=this.createResult(s(this,a),this.options);if(c(this,T,s(this,a).state),c(this,P,this.options),s(this,T).data!==void 0&&c(this,L,s(this,a)),J(r,i))return;c(this,v,r);const d={},u=()=>{if(!i)return!0;const{notifyOnChangeProps:n}=this.options,E=typeof n=="function"?n():n;if(E==="all"||!E&&!s(this,j).size)return!0;const p=new Set(E??s(this,j));return this.options.throwOnError&&p.add("error"),Object.keys(s(this,v)).some(m=>{const x=m;return s(this,v)[x]!==i[x]&&p.has(x)})};(t==null?void 0:t.listeners)!==!1&&u()&&(d.listeners=!0),l(this,h,mt).call(this,{...d,...t})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&l(this,h,et).call(this)}},R=new WeakMap,a=new WeakMap,N=new WeakMap,v=new WeakMap,T=new WeakMap,P=new WeakMap,Q=new WeakMap,S=new WeakMap,V=new WeakMap,_=new WeakMap,L=new WeakMap,F=new WeakMap,U=new WeakMap,w=new WeakMap,j=new WeakMap,h=new WeakSet,z=function(t){l(this,h,rt).call(this);let i=s(this,a).fetch(this.options,t);return t!=null&&t.throwOnError||(i=i.catch(Ot)),i},Y=function(){l(this,h,st).call(this);const t=K(this.options.staleTime,s(this,a));if(X||s(this,v).isStale||!dt(t))return;const r=Et(s(this,v).dataUpdatedAt,t)+1;c(this,F,setTimeout(()=>{s(this,v).isStale||this.updateResult()},r))},Z=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(s(this,a)):this.options.refetchInterval)??!1},tt=function(t){l(this,h,it).call(this),c(this,w,t),!(X||O(this.options.enabled,s(this,a))===!1||!dt(s(this,w))||s(this,w)===0)&&c(this,U,setInterval(()=>{(this.options.refetchIntervalInBackground||xt.isFocused())&&l(this,h,z).call(this)},s(this,w)))},et=function(){l(this,h,Y).call(this),l(this,h,tt).call(this,l(this,h,Z).call(this))},st=function(){s(this,F)&&(clearTimeout(s(this,F)),c(this,F,void 0))},it=function(){s(this,U)&&(clearInterval(s(this,U)),c(this,U,void 0))},rt=function(){const t=s(this,R).getQueryCache().build(s(this,R),this.options);if(t===s(this,a))return;const i=s(this,a);c(this,a,t),c(this,N,t.state),this.hasListeners()&&(i==null||i.removeObserver(this),t.addObserver(this))},mt=function(t){yt.batch(()=>{t.listeners&&this.listeners.forEach(i=>{i(s(this,v))}),s(this,R).getQueryCache().notify({query:s(this,a),type:"observerResultsUpdated"})})},Rt);function wt(e,t){return O(t.enabled,e)!==!1&&e.state.data===void 0&&!(e.state.status==="error"&&t.retryOnMount===!1)}function pt(e,t){return wt(e,t)||e.state.data!==void 0&&at(e,t,t.refetchOnMount)}function at(e,t,i){if(O(t.enabled,e)!==!1){const r=typeof i=="function"?i(e):i;return r==="always"||r!==!1&&nt(e,t)}return!1}function bt(e,t,i,r){return(e!==t||O(r.enabled,e)===!1)&&(!i.suspense||e.state.status!=="error")&&nt(e,i)}function nt(e,t){return O(t.enabled,e)!==!1&&e.isStaleByTime(K(t.staleTime,e))}function Tt(e,t){return!J(e.getCurrentResult(),t)}var Ct=I.createContext(!1),Ft=()=>I.useContext(Ct);Ct.Provider;function Ut(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}var Dt=I.createContext(Ut()),Mt=()=>I.useContext(Dt);function Pt(e,t){return typeof e=="function"?e(...t):!!e}function gt(){}var _t=(e,t)=>{(e.suspense||e.throwOnError||e.experimental_prefetchInRender)&&(t.isReset()||(e.retryOnMount=!1))},Lt=e=>{I.useEffect(()=>{e.clearReset()},[e])},jt=({result:e,errorResetBoundary:t,throwOnError:i,query:r,suspense:d})=>e.isError&&!t.isReset()&&!e.isFetching&&r&&(d&&e.data===void 0||Pt(i,[e.error,r])),kt=e=>{const t=e.staleTime;e.suspense&&(e.staleTime=typeof t=="function"?(...i)=>Math.max(t(...i),1e3):Math.max(t??1e3,1e3),typeof e.gcTime=="number"&&(e.gcTime=Math.max(e.gcTime,1e3)))},At=(e,t)=>e.isLoading&&e.isFetching&&!t,Bt=(e,t)=>(e==null?void 0:e.suspense)&&t.isPending,vt=(e,t,i)=>t.fetchOptimistic(e).catch(()=>{i.clearReset()});function Wt(e,t,i){var o,k,b,A,B;const r=Qt(),d=Ft(),u=Mt(),n=r.defaultQueryOptions(e);(k=(o=r.getDefaultOptions().queries)==null?void 0:o._experimental_beforeQuery)==null||k.call(o,n),n._optimisticResults=d?"isRestoring":"optimistic",kt(n),_t(n,u),Lt(u);const E=!r.getQueryCache().get(n.queryHash),[p]=I.useState(()=>new t(r,n)),m=p.getOptimisticResult(n),x=!d&&e.subscribed!==!1;if(I.useSyncExternalStore(I.useCallback(y=>{const H=x?p.subscribe(yt.batchCalls(y)):gt;return p.updateResult(),H},[p,x]),()=>p.getCurrentResult(),()=>p.getCurrentResult()),I.useEffect(()=>{p.setOptions(n,{listeners:!1})},[n,p]),Bt(n,m))throw vt(n,p,u);if(jt({result:m,errorResetBoundary:u,throwOnError:n.throwOnError,query:r.getQueryCache().get(n.queryHash),suspense:n.suspense}))throw m.error;if((A=(b=r.getDefaultOptions().queries)==null?void 0:b._experimental_afterQuery)==null||A.call(b,n,m),n.experimental_prefetchInRender&&!X&&At(m,d)){const y=E?vt(n,p,u):(B=r.getQueryCache().get(n.queryHash))==null?void 0:B.promise;y==null||y.catch(gt).finally(()=>{p.updateResult()})}return n.notifyOnChangeProps?m:p.trackResult(m)}export{Vt as Q,gt as n,Pt as s,Wt as u};
