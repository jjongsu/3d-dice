import{i as R}from"./Dice-DzJ2bHf6.js";import"./index-DXR6nIA7.js";var I=Object.defineProperty,w=(o,e,i)=>e in o?I(o,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[e]=i,m=(o,e,i)=>(w(o,typeof e!="symbol"?e+"":e,i),i),f=(o,e,i)=>{if(!e.has(o))throw TypeError("Cannot "+i)},t=(o,e,i)=>(f(o,e,"read from private field"),e.get(o)),h=(o,e,i)=>{if(e.has(o))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(o):e.set(o,i)},r=(o,e,i,a)=>(f(o,e,"write to private field"),e.set(o,i),i),c=(o,e,i,a)=>({set _(s){r(o,e,s)},get _(){return t(o,e)}}),g,n,p,l,u,v;class C{constructor(e){m(this,"config"),h(this,g,void 0),m(this,"initialized",!1),h(this,n,{}),h(this,p,0),h(this,l,0),h(this,u,[]),h(this,v,void 0),m(this,"noop",()=>{}),this.onInitComplete=e.onInitComplete||this.noop,this.onThemeLoaded=e.onThemeLoaded||this.noop,this.onRollResult=e.onRollResult||this.noop,this.onRollComplete=e.onRollComplete||this.noop,this.onDieRemoved=e.onDieRemoved||this.noop,this.initialized=this.initScene(e)}async initScene(e){this.config=e.options,this.onInitComplete()}resize(){}loadTheme(){return Promise.resolve()}updateConfig(e){Object.assign(this.config,e)}addNonDie(e){console.log("die",e),clearTimeout(t(this,v));const{id:i,value:a,...s}=e,d={id:i,value:a,config:s};t(this,n)[i]=d,t(this,u).push(setTimeout(()=>{this.handleAsleep(d)},c(this,p)._++*this.config.delay)),r(this,v,setTimeout(()=>{this.onRollComplete()},500))}add(e){console.log("add die"),this.addNonDie(e)}remove(e){console.log("remove die");const i=t(this,n)[e.id];i.hasOwnProperty("d10Instance")&&(delete t(this,n)[i.d10Instance.id],c(this,l)._--),delete t(this,n)[e.id],c(this,l)._--,this.onDieRemoved(e.rollId)}clear(){!Object.keys(t(this,n)).length&&!t(this,l)||(t(this,u).forEach(e=>clearTimeout(e)),Object.values(t(this,n)).forEach(e=>{e.mesh&&e.mesh.dispose()}),r(this,n,{}),r(this,p,0),r(this,l,0))}async handleAsleep(e){var i,a;if(e.asleep=!0,await R.getRollResult(e),e.d10Instance||e.dieParent){if((i=e==null?void 0:e.d10Instance)!=null&&i.asleep||(a=e==null?void 0:e.dieParent)!=null&&a.asleep){const s=e.config.sides===100?e:e.dieParent,d=e.config.sides===10?e:e.d10Instance;d.value===0&&s.value===0?s.value=100:s.value=s.value+d.value,this.onRollResult({rollId:s.config.rollId,value:s.value})}}else e.config.sides===10&&e.value===0&&(e.value=10),this.onRollResult({rollId:e.config.rollId,value:e.value});c(this,l)._++}}g=new WeakMap,n=new WeakMap,p=new WeakMap,l=new WeakMap,u=new WeakMap,v=new WeakMap;export{C as default};