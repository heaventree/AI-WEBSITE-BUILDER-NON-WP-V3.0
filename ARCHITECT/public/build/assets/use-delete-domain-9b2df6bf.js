import{ct as T,cu as F,cv as I,cw as C,cx as k,r as p,cy as M,bT as L,e as y,ao as $,j as z,v as A,a as q,ai as U,b as _,t as D,d as K,g as H,q as O,s as V}from"./main-78369d74.js";import{r as G,f as S,B as J,d as W,b as X}from"./blank-page-skeleton-9a989fe2.js";var Y=class extends T{constructor(e,t){super(e,t)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e,t){super.setOptions({...e,behavior:F()},t)}getOptimisticResult(e){return e.behavior=F(),super.getOptimisticResult(e)}fetchNextPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"forward"}}})}fetchPreviousPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"backward"}}})}createResult(e,t){var h,c,f,d;const{state:r}=e,n=super.createResult(e,t),{isFetching:a,isRefetching:s}=n,o=a&&((c=(h=r.fetchMeta)==null?void 0:h.fetchMore)==null?void 0:c.direction)==="forward",l=a&&((d=(f=r.fetchMeta)==null?void 0:f.fetchMore)==null?void 0:d.direction)==="backward";return{...n,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:I(t,r.data),hasPreviousPage:C(t,r.data),isFetchingNextPage:o,isFetchingPreviousPage:l,isRefetching:s&&!o&&!l}}};function Z(e,t){return k(e,Y,t)}function ee(e){return"next_cursor"in e?e.next_cursor!=null:"last_page"in e?e.current_page<e.last_page:"next_page"in e?e.next_page!=null:e.data.length>0&&e.data.length>=e.per_page}function te({queryKey:e,defaultOrderDir:t,defaultOrderBy:r,queryParams:n},a,s=""){return a.orderBy||(a.orderBy=r),a.orderDir||(a.orderDir=t),[...e,a,s,n]}function re(e){var x,b,w,Q;const{initialPage:t,endpoint:r,defaultOrderBy:n,defaultOrderDir:a,queryParams:s,paginate:o,transformResponse:l,willSortOrFilter:h=!1}=e,[c,f]=p.useState(""),[d,B]=p.useState({orderBy:n,orderDir:a}),m=te(e,d,c),E=p.useRef(M(m)).current,u=Z({placeholderData:h?L:void 0,queryKey:m,queryFn:({pageParam:i,signal:P})=>{const v={...s,perPage:(t==null?void 0:t.per_page)||(s==null?void 0:s.perPage),query:(s==null?void 0:s.query)??c,paginate:o,...d};return o==="cursor"?v.cursor=i:v.page=i||1,ae(r,v,l,P)},initialPageParam:o==="cursor"?"":1,getNextPageParam:i=>ee(i.pagination)?"next_cursor"in i.pagination?i.pagination.next_cursor:i.pagination.current_page+1:null,initialData:()=>{if(!(!t||M(m)!==E))return{pageParams:[void 0,1],pages:[{pagination:t}]}}}),N=p.useMemo(()=>{var i;return((i=u.data)==null?void 0:i.pages.flatMap(P=>P.pagination.data))||[]},[(x=u.data)==null?void 0:x.pages]),g=(b=u.data)==null?void 0:b.pages[0].pagination,R=g&&"total"in g&&g.total?g.total:null;return{...u,items:N,totalItems:R,noResults:((Q=(w=u.data)==null?void 0:w.pages)==null?void 0:Q[0].pagination.data.length)===0,isReloading:u.isFetching&&!u.isFetchingNextPage&&u.isPlaceholderData,sortDescriptor:d,setSortDescriptor:B,searchQuery:c,setSearchQuery:f}}async function ae(e,t,r,n){return t.query&&await new Promise(a=>setTimeout(a,300)),y.get(e,{params:t,signal:t.query?n:void 0}).then(a=>r?r(a.data):a.data)}const de=$(z.jsx("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreVertOutlined"),le=""+new URL("website-builder-2fb98cdd.svg",import.meta.url).href;function he(e){return re({queryKey:["templates",e],endpoint:"templates",paginate:"simple",willSortOrFilter:!0,queryParams:e})}function fe(e,t=!1){return A({queryKey:["templates",`${e}`,t],queryFn:()=>j(e)})}function j(e,t=!1){return y.get(`templates/${e}`,{params:{loadPages:t}}).then(r=>r.data)}function ge(e){const{trans:t}=q(),r=U();return _({mutationFn:n=>se(n),onSuccess:async()=>{G(),await r.invalidateQueries({queryKey:["projects"]}),D(t(K("Site created")))},onError:n=>H(n,e)})}async function se({name:e,templateName:t,userId:r,published:n}){const a={name:e,templateName:t,pages:[],userId:r,published:n};if(t)try{const s=await O.fetchQuery({queryKey:["templates",t,!0],queryFn:()=>j(t,!0)});a.pages=ie(s.template)}catch(s){return Promise.reject(s)}else a.pages=ne();return y.post("projects",a).then(s=>s.data)}function ne(){return[{name:"index",html:S(J)}]}function ie(e){return e.pages.map(t=>({name:t.name,html:S(t.html,e)}))}const pe=""+new URL("world-ea41c34b.svg",import.meta.url).href;function ye(){const{trans:e}=q();return _({mutationFn:t=>ue(t),onSuccess:(t,r)=>{D.positive(e(K("“:domain” removed",{values:{domain:W(r.domain.host)}}))),O.invalidateQueries({queryKey:X("custom-domain")})},onError:t=>V(t)})}function ue({domain:e}){return y.delete(`custom-domain/${e.id}`).then(t=>t.data)}export{de as M,ge as a,le as b,he as c,ye as d,fe as e,ee as h,re as u,pe as w};
//# sourceMappingURL=use-delete-domain-9b2df6bf.js.map
