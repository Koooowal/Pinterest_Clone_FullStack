var x=e=>{throw TypeError(e)};var C=(e,t,s)=>t.has(e)||x("Cannot "+s);var i=(e,t,s)=>(C(e,t,"read from private field"),s?s.call(e):t.get(e)),b=(e,t,s)=>t.has(e)?x("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),p=(e,t,s,r)=>(C(e,t,"write to private field"),r?r.call(e,s):t.set(e,s),s),m=(e,t,s)=>(C(e,t,"access private method"),s);import{u as R,Q as q,n as U,s as k}from"./useBaseQuery-OIqdThTs.js";import{S as L,s as j,h as w,g as A,n as Q,d as B,r as f}from"./index-Bcx3K_Zg.js";var a,l,u,o,h,g,M,K,D=(K=class extends L{constructor(t,s){super();b(this,h);b(this,a);b(this,l);b(this,u);b(this,o);p(this,a,t),this.setOptions(s),this.bindMethods(),m(this,h,g).call(this)}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var r;const s=this.options;this.options=i(this,a).defaultMutationOptions(t),j(this.options,s)||i(this,a).getMutationCache().notify({type:"observerOptionsUpdated",mutation:i(this,u),observer:this}),s!=null&&s.mutationKey&&this.options.mutationKey&&w(s.mutationKey)!==w(this.options.mutationKey)?this.reset():((r=i(this,u))==null?void 0:r.state.status)==="pending"&&i(this,u).setOptions(this.options)}onUnsubscribe(){var t;this.hasListeners()||(t=i(this,u))==null||t.removeObserver(this)}onMutationUpdate(t){m(this,h,g).call(this),m(this,h,M).call(this,t)}getCurrentResult(){return i(this,l)}reset(){var t;(t=i(this,u))==null||t.removeObserver(this),p(this,u,void 0),m(this,h,g).call(this),m(this,h,M).call(this)}mutate(t,s){var r;return p(this,o,s),(r=i(this,u))==null||r.removeObserver(this),p(this,u,i(this,a).getMutationCache().build(i(this,a),this.options)),i(this,u).addObserver(this),i(this,u).execute(t)}},a=new WeakMap,l=new WeakMap,u=new WeakMap,o=new WeakMap,h=new WeakSet,g=function(){var s;const t=((s=i(this,u))==null?void 0:s.state)??A();p(this,l,{...t,isPending:t.status==="pending",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset})},M=function(t){Q.batch(()=>{var s,r,n,y,c,v,S,E;if(i(this,o)&&this.hasListeners()){const d=i(this,l).variables,O=i(this,l).context;(t==null?void 0:t.type)==="success"?((r=(s=i(this,o)).onSuccess)==null||r.call(s,t.data,d,O),(y=(n=i(this,o)).onSettled)==null||y.call(n,t.data,null,d,O)):(t==null?void 0:t.type)==="error"&&((v=(c=i(this,o)).onError)==null||v.call(c,t.error,d,O),(E=(S=i(this,o)).onSettled)==null||E.call(S,void 0,t.error,d,O))}this.listeners.forEach(d=>{d(i(this,l))})})},K);function z(e,t){return R(e,q)}function F(e,t){const s=B(),[r]=f.useState(()=>new D(s,e));f.useEffect(()=>{r.setOptions(e)},[r,e]);const n=f.useSyncExternalStore(f.useCallback(c=>r.subscribe(Q.batchCalls(c)),[r]),()=>r.getCurrentResult(),()=>r.getCurrentResult()),y=f.useCallback((c,v)=>{r.mutate(c,v).catch(U)},[r]);if(n.error&&k(r.options.throwOnError,[n.error]))throw n.error;return{...n,mutate:y,mutateAsync:n.mutate}}export{z as a,F as u};
