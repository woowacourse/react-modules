import{j as d}from"./jsx-runtime-D_zvdyIk.js";import{r as oe}from"./index-D4lIrffr.js";import{w as z,e as b,u as O,a as pe}from"./index-1KxDNpb5.js";function Ue(e){if(e.sheet)return e.sheet;for(var n=0;n<document.styleSheets.length;n++)if(document.styleSheets[n].ownerNode===e)return document.styleSheets[n]}function Xe(e){var n=document.createElement("style");return n.setAttribute("data-emotion",e.key),e.nonce!==void 0&&n.setAttribute("nonce",e.nonce),n.appendChild(document.createTextNode("")),n.setAttribute("data-s",""),n}var Je=function(){function e(t){var r=this;this._insertTag=function(a){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(a,o),r.tags.push(a)},this.isSpeedy=t.speedy===void 0?!0:t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var n=e.prototype;return n.hydrate=function(r){r.forEach(this._insertTag)},n.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Xe(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var o=Ue(a);try{o.insertRule(r,o.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(r));this.ctr++},n.flush=function(){this.tags.forEach(function(r){var a;return(a=r.parentNode)==null?void 0:a.removeChild(r)}),this.tags=[],this.ctr=0},e}(),B="-ms-",re="-moz-",f="-webkit-",He="comm",he="rule",me="decl",Qe="@import",Ie="@keyframes",en="@layer",nn=Math.abs,se=String.fromCharCode,tn=Object.assign;function rn(e,n){return v(e,0)^45?(((n<<2^v(e,0))<<2^v(e,1))<<2^v(e,2))<<2^v(e,3):0}function Le(e){return e.trim()}function an(e,n){return(e=n.exec(e))?e[0]:e}function p(e,n,t){return e.replace(n,t)}function de(e,n){return e.indexOf(n)}function v(e,n){return e.charCodeAt(n)|0}function L(e,n,t){return e.slice(n,t)}function A(e){return e.length}function ge(e){return e.length}function Z(e,n){return n.push(e),e}function on(e,n){return e.map(n).join("")}var ie=1,W=1,Ge=0,k=0,x=0,q="";function ce(e,n,t,r,a,o,i){return{value:e,root:n,parent:t,type:r,props:a,children:o,line:ie,column:W,length:i,return:""}}function I(e,n){return tn(ce("",null,null,"",null,null,0),e,{length:-e.length},n)}function sn(){return x}function cn(){return x=k>0?v(q,--k):0,W--,x===10&&(W=1,ie--),x}function R(){return x=k<Ge?v(q,k++):0,W++,x===10&&(W=1,ie++),x}function M(){return v(q,k)}function ee(){return k}function V(e,n){return L(q,e,n)}function G(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ze(e){return ie=W=1,Ge=A(q=e),k=0,[]}function Ve(e){return q="",e}function ne(e){return Le(V(k-1,fe(e===91?e+2:e===40?e+1:e)))}function un(e){for(;(x=M())&&x<33;)R();return G(e)>2||G(x)>3?"":" "}function ln(e,n){for(;--n&&R()&&!(x<48||x>102||x>57&&x<65||x>70&&x<97););return V(e,ee()+(n<6&&M()==32&&R()==32))}function fe(e){for(;R();)switch(x){case e:return k;case 34:case 39:e!==34&&e!==39&&fe(x);break;case 40:e===41&&fe(e);break;case 92:R();break}return k}function dn(e,n){for(;R()&&e+x!==57;)if(e+x===84&&M()===47)break;return"/*"+V(n,k-1)+"*"+se(e===47?e:R())}function fn(e){for(;!G(M());)R();return V(e,k)}function pn(e){return Ve(te("",null,null,null,[""],e=ze(e),0,[0],e))}function te(e,n,t,r,a,o,i,s,c){for(var l=0,u=0,h=i,S=0,T=0,E=0,g=1,C=1,y=1,w=0,$="",Y=a,N=o,j=r,m=$;C;)switch(E=w,w=R()){case 40:if(E!=108&&v(m,h-1)==58){de(m+=p(ne(w),"&","&\f"),"&\f")!=-1&&(y=-1);break}case 34:case 39:case 91:m+=ne(w);break;case 9:case 10:case 13:case 32:m+=un(E);break;case 92:m+=ln(ee()-1,7);continue;case 47:switch(M()){case 42:case 47:Z(hn(dn(R(),ee()),n,t),c);break;default:m+="/"}break;case 123*g:s[l++]=A(m)*y;case 125*g:case 59:case 0:switch(w){case 0:case 125:C=0;case 59+u:y==-1&&(m=p(m,/\f/g,"")),T>0&&A(m)-h&&Z(T>32?xe(m+";",r,t,h-1):xe(p(m," ","")+";",r,t,h-2),c);break;case 59:m+=";";default:if(Z(j=ye(m,n,t,l,u,a,s,$,Y=[],N=[],h),o),w===123)if(u===0)te(m,n,j,j,Y,o,h,s,N);else switch(S===99&&v(m,3)===110?100:S){case 100:case 108:case 109:case 115:te(e,j,j,r&&Z(ye(e,j,j,0,0,a,s,$,a,Y=[],h),N),a,N,h,s,r?Y:N);break;default:te(m,j,j,j,[""],N,0,s,N)}}l=u=T=0,g=y=1,$=m="",h=i;break;case 58:h=1+A(m),T=E;default:if(g<1){if(w==123)--g;else if(w==125&&g++==0&&cn()==125)continue}switch(m+=se(w),w*g){case 38:y=u>0?1:(m+="\f",-1);break;case 44:s[l++]=(A(m)-1)*y,y=1;break;case 64:M()===45&&(m+=ne(R())),S=M(),u=h=A($=m+=fn(ee())),w++;break;case 45:E===45&&A(m)==2&&(g=0)}}return o}function ye(e,n,t,r,a,o,i,s,c,l,u){for(var h=a-1,S=a===0?o:[""],T=ge(S),E=0,g=0,C=0;E<r;++E)for(var y=0,w=L(e,h+1,h=nn(g=i[E])),$=e;y<T;++y)($=Le(g>0?S[y]+" "+w:p(w,/&\f/g,S[y])))&&(c[C++]=$);return ce(e,n,t,a===0?he:s,c,l,u)}function hn(e,n,t){return ce(e,n,t,He,se(sn()),L(e,2,-2),0)}function xe(e,n,t,r){return ce(e,n,t,me,L(e,0,r),L(e,r+1,-1),r)}function F(e,n){for(var t="",r=ge(e),a=0;a<r;a++)t+=n(e[a],a,e,n)||"";return t}function mn(e,n,t,r){switch(e.type){case en:if(e.children.length)break;case Qe:case me:return e.return=e.return||e.value;case He:return"";case Ie:return e.return=e.value+"{"+F(e.children,r)+"}";case he:e.value=e.props.join(",")}return A(t=F(e.children,r))?e.return=e.value+"{"+t+"}":""}function gn(e){var n=ge(e);return function(t,r,a,o){for(var i="",s=0;s<n;s++)i+=e[s](t,r,a,o)||"";return i}}function yn(e){return function(n){n.root||(n=n.return)&&e(n)}}function xn(e){var n=Object.create(null);return function(t){return n[t]===void 0&&(n[t]=e(t)),n[t]}}var bn=function(n,t,r){for(var a=0,o=0;a=o,o=M(),a===38&&o===12&&(t[r]=1),!G(o);)R();return V(n,k)},vn=function(n,t){var r=-1,a=44;do switch(G(a)){case 0:a===38&&M()===12&&(t[r]=1),n[r]+=bn(k-1,t,r);break;case 2:n[r]+=ne(a);break;case 4:if(a===44){n[++r]=M()===58?"&\f":"",t[r]=n[r].length;break}default:n[r]+=se(a)}while(a=R());return n},wn=function(n,t){return Ve(vn(ze(n),t))},be=new WeakMap,Bn=function(n){if(!(n.type!=="rule"||!n.parent||n.length<1)){for(var t=n.value,r=n.parent,a=n.column===r.column&&n.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(n.props.length===1&&t.charCodeAt(0)!==58&&!be.get(r))&&!a){be.set(n,!0);for(var o=[],i=wn(t,o),s=r.props,c=0,l=0;c<i.length;c++)for(var u=0;u<s.length;u++,l++)n.props[l]=o[c]?i[c].replace(/&\f/g,s[u]):s[u]+" "+i[c]}}},Cn=function(n){if(n.type==="decl"){var t=n.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(n.return="",n.value="")}};function Ke(e,n){switch(rn(e,n)){case 5103:return f+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return f+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return f+e+re+e+B+e+e;case 6828:case 4268:return f+e+B+e+e;case 6165:return f+e+B+"flex-"+e+e;case 5187:return f+e+p(e,/(\w+).+(:[^]+)/,f+"box-$1$2"+B+"flex-$1$2")+e;case 5443:return f+e+B+"flex-item-"+p(e,/flex-|-self/,"")+e;case 4675:return f+e+B+"flex-line-pack"+p(e,/align-content|flex-|-self/,"")+e;case 5548:return f+e+B+p(e,"shrink","negative")+e;case 5292:return f+e+B+p(e,"basis","preferred-size")+e;case 6060:return f+"box-"+p(e,"-grow","")+f+e+B+p(e,"grow","positive")+e;case 4554:return f+p(e,/([^-])(transform)/g,"$1"+f+"$2")+e;case 6187:return p(p(p(e,/(zoom-|grab)/,f+"$1"),/(image-set)/,f+"$1"),e,"")+e;case 5495:case 3959:return p(e,/(image-set\([^]*)/,f+"$1$`$1");case 4968:return p(p(e,/(.+:)(flex-)?(.*)/,f+"box-pack:$3"+B+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+f+e+e;case 4095:case 3583:case 4068:case 2532:return p(e,/(.+)-inline(.+)/,f+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(A(e)-1-n>6)switch(v(e,n+1)){case 109:if(v(e,n+4)!==45)break;case 102:return p(e,/(.+:)(.+)-([^]+)/,"$1"+f+"$2-$3$1"+re+(v(e,n+3)==108?"$3":"$2-$3"))+e;case 115:return~de(e,"stretch")?Ke(p(e,"stretch","fill-available"),n)+e:e}break;case 4949:if(v(e,n+1)!==115)break;case 6444:switch(v(e,A(e)-3-(~de(e,"!important")&&10))){case 107:return p(e,":",":"+f)+e;case 101:return p(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+f+(v(e,14)===45?"inline-":"")+"box$3$1"+f+"$2$3$1"+B+"$2box$3")+e}break;case 5936:switch(v(e,n+11)){case 114:return f+e+B+p(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return f+e+B+p(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return f+e+B+p(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return f+e+B+e+e}return e}var kn=function(n,t,r,a){if(n.length>-1&&!n.return)switch(n.type){case me:n.return=Ke(n.value,n.length);break;case Ie:return F([I(n,{value:p(n.value,"@","@"+f)})],a);case he:if(n.length)return on(n.props,function(o){switch(an(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return F([I(n,{props:[p(o,/:(read-\w+)/,":"+re+"$1")]})],a);case"::placeholder":return F([I(n,{props:[p(o,/:(plac\w+)/,":"+f+"input-$1")]}),I(n,{props:[p(o,/:(plac\w+)/,":"+re+"$1")]}),I(n,{props:[p(o,/:(plac\w+)/,B+"input-$1")]})],a)}return""})}},En=[kn],Rn=function(n){var t=n.key;if(t==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(g){var C=g.getAttribute("data-emotion");C.indexOf(" ")!==-1&&(document.head.appendChild(g),g.setAttribute("data-s",""))})}var a=n.stylisPlugins||En,o={},i,s=[];i=n.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(g){for(var C=g.getAttribute("data-emotion").split(" "),y=1;y<C.length;y++)o[C[y]]=!0;s.push(g)});var c,l=[Bn,Cn];{var u,h=[mn,yn(function(g){u.insert(g)})],S=gn(l.concat(a,h)),T=function(C){return F(pn(C),S)};c=function(C,y,w,$){u=w,T(C?C+"{"+y.styles+"}":y.styles),$&&(E.inserted[y.name]=!0)}}var E={key:t,sheet:new Je({key:t,container:i,nonce:n.nonce,speedy:n.speedy,prepend:n.prepend,insertionPoint:n.insertionPoint}),nonce:n.nonce,inserted:o,registered:{},insert:c};return E.sheet.hydrate(s),E};function Sn(e){for(var n=0,t,r=0,a=e.length;a>=4;++r,a-=4)t=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,n=(t&65535)*1540483477+((t>>>16)*59797<<16)^(n&65535)*1540483477+((n>>>16)*59797<<16);switch(a){case 3:n^=(e.charCodeAt(r+2)&255)<<16;case 2:n^=(e.charCodeAt(r+1)&255)<<8;case 1:n^=e.charCodeAt(r)&255,n=(n&65535)*1540483477+((n>>>16)*59797<<16)}return n^=n>>>13,n=(n&65535)*1540483477+((n>>>16)*59797<<16),((n^n>>>15)>>>0).toString(36)}var $n={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},jn=/[A-Z]|^ms/g,An=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Ye=function(n){return n.charCodeAt(1)===45},ve=function(n){return n!=null&&typeof n!="boolean"},ue=xn(function(e){return Ye(e)?e:e.replace(jn,"-$&").toLowerCase()}),we=function(n,t){switch(n){case"animation":case"animationName":if(typeof t=="string")return t.replace(An,function(r,a,o){return P={name:a,styles:o,next:P},a})}return $n[n]!==1&&!Ye(n)&&typeof t=="number"&&t!==0?t+"px":t};function ae(e,n,t){if(t==null)return"";var r=t;if(r.__emotion_styles!==void 0)return r;switch(typeof t){case"boolean":return"";case"object":{var a=t;if(a.anim===1)return P={name:a.name,styles:a.styles,next:P},a.name;var o=t;if(o.styles!==void 0){var i=o.next;if(i!==void 0)for(;i!==void 0;)P={name:i.name,styles:i.styles,next:P},i=i.next;var s=o.styles+";";return s}return Mn(e,n,t)}}var c=t;if(n==null)return c;var l=n[c];return l!==void 0?l:c}function Mn(e,n,t){var r="";if(Array.isArray(t))for(var a=0;a<t.length;a++)r+=ae(e,n,t[a])+";";else for(var o in t){var i=t[o];if(typeof i!="object"){var s=i;n!=null&&n[s]!==void 0?r+=o+"{"+n[s]+"}":ve(s)&&(r+=ue(o)+":"+we(o,s)+";")}else if(Array.isArray(i)&&typeof i[0]=="string"&&(n==null||n[i[0]]===void 0))for(var c=0;c<i.length;c++)ve(i[c])&&(r+=ue(o)+":"+we(o,i[c])+";");else{var l=ae(e,n,i);switch(o){case"animation":case"animationName":{r+=ue(o)+":"+l+";";break}default:r+=o+"{"+l+"}"}}}return r}var Be=/label:\s*([^\s;{]+)\s*(;|$)/g,P;function le(e,n,t){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,a="";P=void 0;var o=e[0];if(o==null||o.raw===void 0)r=!1,a+=ae(t,n,o);else{var i=o;a+=i[0]}for(var s=1;s<e.length;s++)if(a+=ae(t,n,e[s]),r){var c=o;a+=c[s]}Be.lastIndex=0;for(var l="",u;(u=Be.exec(a))!==null;)l+="-"+u[1];var h=Sn(a)+l;return{name:h,styles:a,next:P}}function Ze(e,n,t){var r="";return t.split(" ").forEach(function(a){e[a]!==void 0?n.push(e[a]+";"):a&&(r+=a+" ")}),r}var Dn=function(n,t,r){var a=n.key+"-"+t.name;n.registered[a]===void 0&&(n.registered[a]=t.styles)},Tn=function(n,t,r){Dn(n,t);var a=n.key+"-"+t.name;if(n.inserted[t.name]===void 0){var o=t;do n.insert(t===o?"."+a:"",o,n.sheet,!0),o=o.next;while(o!==void 0)}};function Ce(e,n){if(e.inserted[n.name]===void 0)return e.insert("",n,e.sheet,!0)}function ke(e,n,t){var r=[],a=Ze(e,r,t);return r.length<2?t:a+n(r)}var Pn=function(n){var t=Rn(n);t.sheet.speedy=function(s){this.isSpeedy=s},t.compat=!0;var r=function(){for(var c=arguments.length,l=new Array(c),u=0;u<c;u++)l[u]=arguments[u];var h=le(l,t.registered,void 0);return Tn(t,h),t.key+"-"+h.name},a=function(){for(var c=arguments.length,l=new Array(c),u=0;u<c;u++)l[u]=arguments[u];var h=le(l,t.registered),S="animation-"+h.name;return Ce(t,{name:h.name,styles:"@keyframes "+S+"{"+h.styles+"}"}),S},o=function(){for(var c=arguments.length,l=new Array(c),u=0;u<c;u++)l[u]=arguments[u];var h=le(l,t.registered);Ce(t,h)},i=function(){for(var c=arguments.length,l=new Array(c),u=0;u<c;u++)l[u]=arguments[u];return ke(t.registered,r,On(l))};return{css:r,cx:i,injectGlobal:o,keyframes:a,hydrate:function(c){c.forEach(function(l){t.inserted[l]=!0})},flush:function(){t.registered={},t.inserted={},t.sheet.flush()},sheet:t.sheet,cache:t,getRegisteredStyles:Ze.bind(null,t.registered),merge:ke.bind(null,t.registered,r)}},On=function e(n){for(var t="",r=0;r<n.length;r++){var a=n[r];if(a!=null){var o=void 0;switch(typeof a){case"boolean":break;case"object":{if(Array.isArray(a))o=e(a);else{o="";for(var i in a)a[i]&&i&&(o&&(o+=" "),o+=i)}break}default:o=a}o&&(t&&(t+=" "),t+=o)}}return t},Nn=Pn({key:"css"}),H=Nn.css;const Fn=H`
  width: 100dvw;
  height: 100dvh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 0;
  left: 0;
  top: 0;
`,Wn=e=>H`
  background-color: white;
  padding: 20px;
  width: ${e==="center"?"100%":"100dvw"};
  min-width: ${e==="center"&&"300px"};
  max-width: ${e==="center"&&"80dvw"};
  border-radius: ${e==="center"?"8px":"8px 8px 0 0"};
  position: ${e==="bottom"&&"absolute"};
  bottom: ${e==="bottom"&&"0"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`,qn=H`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`,Hn=H`
  all: unset;
  width: 32px;
  height: 32px;
  cursor: pointer;
  border-radius: 50%;
  font-size: 16px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  &:focus {
    outline: none;
  }
`,In=H`
  width: 100%;
  padding: 10px 0;
`,Ln=H`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
`,_e=oe.createContext(void 0),D=({children:e,isOpen:n,onAfterOpen:t,onClose:r,position:a="center"})=>{const o=s=>{s.key==="Escape"&&r()},i=s=>{s.target===s.currentTarget&&r()};return oe.useEffect(()=>(n&&t&&t(),window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)}),[n]),n?d.jsx(_e.Provider,{value:{onClose:r,position:a},children:d.jsx("div",{className:Fn,onClick:i,"aria-label":"modal-backdrop",children:d.jsx("div",{className:Wn(a),role:"dialog","aria-modal":"true","aria-labelledby":"modal-title",children:e})})}):null},Gn=({title:e,showCloseButton:n=!0})=>{const t=oe.useContext(_e);if(!t)throw new Error("Modal.Header는 반드시 Modal 컴포넌트 내부에서 사용해야 합니다.");const{onClose:r}=t;return d.jsxs("section",{className:qn,children:[e&&d.jsx("h2",{id:"modal-title",children:e}),n&&d.jsx("button",{className:Hn,onClick:r,children:"X"})]})},zn=({children:e})=>d.jsx("section",{className:In,children:e}),Vn=({children:e})=>d.jsx("section",{className:Ln,children:e});D.Header=Gn;D.Content=zn;D.Footer=Vn;D.__docgenInfo={description:"",methods:[{name:"Header",docblock:null,modifiers:["static"],params:[{name:"{ title, showCloseButton = true }: ModalHeaderProps",optional:!1,type:{name:"ModalHeaderProps",alias:"ModalHeaderProps"}}],returns:null},{name:"Content",docblock:null,modifiers:["static"],params:[{name:"{ children }: ModalContentProps",optional:!1,type:{name:"ModalContentProps",alias:"ModalContentProps"}}],returns:null},{name:"Footer",docblock:null,modifiers:["static"],params:[{name:"{ children }: ModalFooterProps",optional:!1,type:{name:"ModalFooterProps",alias:"ModalFooterProps"}}],returns:null}],displayName:"Modal",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},isOpen:{required:!0,tsType:{name:"boolean"},description:""},position:{required:!1,tsType:{name:"union",raw:"'center' | 'bottom'",elements:[{name:"literal",value:"'center'"},{name:"literal",value:"'bottom'"}]},description:"",defaultValue:{value:"'center'",computed:!1}},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onAfterOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Kn=()=>{const[e,n]=oe.useState(!1);return{isOpen:e,handleOpen:()=>{n(!0)},handleClose:()=>{n(!1)}}},Un={title:"Modal",component:D,args:{position:"center",title:"모달 제목"}},K=e=>{const{isOpen:n,handleOpen:t,handleClose:r}=Kn(),a=()=>{alert("동의하고 저장하기 버튼 클릭"),r()},o=()=>{console.log("열기 버튼 클릭")},i=()=>d.jsxs("div",{children:[d.jsx("p",{children:"모달 내용입니다."}),d.jsx("p",{children:"모달 내용입니다."}),d.jsx("p",{children:"모달 내용입니다."}),d.jsx("p",{children:"모달 내용입니다."})]}),s=()=>d.jsxs(d.Fragment,{children:[d.jsx("button",{onClick:r,children:"닫기"}),d.jsx("button",{onClick:a,children:"동의하고 저장하기"})]});return d.jsxs(d.Fragment,{children:[d.jsx("h1",{children:"Modal Component"}),d.jsx("button",{onClick:t,children:"열기"}),d.jsxs(D,{...e,isOpen:n,onAfterOpen:o,onClose:r,children:[d.jsx(D.Header,{title:e.title,showCloseButton:e.showCloseButton}),d.jsx(D.Content,{children:d.jsx(i,{})}),d.jsx(D.Footer,{children:d.jsx(s,{})})]})]})},_={render:e=>d.jsx(K,{...e}),play:async({canvasElement:e})=>{const n=z(e),t=n.getByRole("button",{name:"열기"});b(t).toBeDefined(),O.click(t);const r=await n.findByText("모달 제목");b(r).toBeDefined();const a=await n.findAllByText("모달 내용입니다.");b(a).toBeDefined()}},U={args:{position:"center",showCloseButton:!0},render:e=>d.jsx(K,{...e}),play:async({canvasElement:e})=>{const n=z(e),t=n.getByRole("button",{name:"열기"});b(t).toBeDefined(),O.click(t);const r=await n.findByRole("dialog",{name:"모달 제목"});b(r).toBeDefined();const a=n.getByRole("button",{name:"닫기"});b(a).toBeDefined();const o=n.getByRole("button",{name:"동의하고 저장하기"});b(o).toBeDefined(),O.click(o),await pe(()=>{b(n.queryByRole("dialog",{name:"모달 제목"})).toBeNull()})}},X={args:{position:"bottom",showCloseButton:!0},render:e=>d.jsx(K,{...e}),play:async({canvasElement:e})=>{const n=z(e),t=n.getByRole("button",{name:"열기"});b(t).toBeDefined(),O.click(t);const r=await n.findByRole("dialog",{name:"모달 제목"});b(r).toBeDefined(),b(r).toHaveStyle({position:"absolute",bottom:"0"})}},J={args:{position:"center"},render:e=>d.jsx(K,{...e}),play:async({canvasElement:e})=>{const n=z(e),t=n.getByRole("button",{name:"열기"});b(t).toBeDefined(),O.click(t);const r=await n.findByRole("dialog",{name:"모달 제목"});b(r).toBeDefined(),await O.keyboard("{Escape}"),await pe(()=>{b(n.queryByRole("dialog",{name:"모달 제목"})).toBeNull()})}},Q={args:{position:"center"},render:e=>d.jsx(K,{...e}),play:async({canvasElement:e})=>{const n=z(e),t=n.getByRole("button",{name:"열기"});b(t).toBeDefined(),O.click(t);const r=await n.findByRole("dialog",{name:"모달 제목"});b(r).toBeDefined();const a=await n.findByLabelText("modal-backdrop");b(a).toBeDefined(),O.click(a),await pe(()=>{b(n.queryByRole("dialog",{name:"모달 제목"})).toBeNull()})}};var Ee,Re,Se;_.parameters={..._.parameters,docs:{...(Ee=_.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: args => <Wrapper {...args} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByRole('button', {
      name: '열기'
    });
    expect(openButton).toBeDefined();
    userEvent.click(openButton);
    const title = await canvas.findByText('모달 제목');
    expect(title).toBeDefined();
    const content = await canvas.findAllByText('모달 내용입니다.');
    expect(content).toBeDefined();
  }
}`,...(Se=(Re=_.parameters)==null?void 0:Re.docs)==null?void 0:Se.source}}};var $e,je,Ae;U.parameters={...U.parameters,docs:{...($e=U.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  args: {
    position: 'center',
    showCloseButton: true
  },
  render: args => <Wrapper {...args} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByRole('button', {
      name: '열기'
    });
    expect(openButton).toBeDefined();
    userEvent.click(openButton);
    const modal = await canvas.findByRole('dialog', {
      name: '모달 제목'
    });
    expect(modal).toBeDefined();
    const closeButton = canvas.getByRole('button', {
      name: '닫기'
    });
    expect(closeButton).toBeDefined();
    const confirmButton = canvas.getByRole('button', {
      name: '동의하고 저장하기'
    });
    expect(confirmButton).toBeDefined();
    userEvent.click(confirmButton);
    await waitFor(() => {
      expect(canvas.queryByRole('dialog', {
        name: '모달 제목'
      })).toBeNull();
    });
  }
}`,...(Ae=(je=U.parameters)==null?void 0:je.docs)==null?void 0:Ae.source}}};var Me,De,Te;X.parameters={...X.parameters,docs:{...(Me=X.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {
    position: 'bottom',
    showCloseButton: true
  },
  render: args => <Wrapper {...args} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByRole('button', {
      name: '열기'
    });
    expect(openButton).toBeDefined();
    userEvent.click(openButton);
    const modal = await canvas.findByRole('dialog', {
      name: '모달 제목'
    });
    expect(modal).toBeDefined();
    expect(modal).toHaveStyle({
      position: 'absolute',
      bottom: '0'
    });
  }
}`,...(Te=(De=X.parameters)==null?void 0:De.docs)==null?void 0:Te.source}}};var Pe,Oe,Ne;J.parameters={...J.parameters,docs:{...(Pe=J.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  args: {
    position: 'center'
  },
  render: args => <Wrapper {...args} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByRole('button', {
      name: '열기'
    });
    expect(openButton).toBeDefined();
    userEvent.click(openButton);
    const modal = await canvas.findByRole('dialog', {
      name: '모달 제목'
    });
    expect(modal).toBeDefined();
    await userEvent.keyboard('{Escape}');
    await waitFor(() => {
      expect(canvas.queryByRole('dialog', {
        name: '모달 제목'
      })).toBeNull();
    });
  }
}`,...(Ne=(Oe=J.parameters)==null?void 0:Oe.docs)==null?void 0:Ne.source}}};var Fe,We,qe;Q.parameters={...Q.parameters,docs:{...(Fe=Q.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  args: {
    position: 'center'
  },
  render: args => <Wrapper {...args} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByRole('button', {
      name: '열기'
    });
    expect(openButton).toBeDefined();
    userEvent.click(openButton);
    const modal = await canvas.findByRole('dialog', {
      name: '모달 제목'
    });
    expect(modal).toBeDefined();
    const backdrop = await canvas.findByLabelText('modal-backdrop');
    expect(backdrop).toBeDefined();
    userEvent.click(backdrop);
    await waitFor(() => {
      expect(canvas.queryByRole('dialog', {
        name: '모달 제목'
      })).toBeNull();
    });
  }
}`,...(qe=(We=Q.parameters)==null?void 0:We.docs)==null?void 0:qe.source}}};const Xn=["Default","CenterWithAction","Bottom","ESCClose","BackdropClose"];export{Q as BackdropClose,X as Bottom,U as CenterWithAction,_ as Default,J as ESCClose,Xn as __namedExportsOrder,Un as default};
