const FRAMER_SITE =
  "https://framerusercontent.com/sites/1Ns4AjdEjFZyQYEy1ehx4i";
const SHARED_LIB_URL = `${FRAMER_SITE}/shared-lib.BijRyJ7H.mjs`;

const OLD_INIT = "C=Array.isArray(t)&&t.length>0?t:uo,[w,T]=c(0)";
const NEW_INIT =
  "[C,setC]=c(()=>Array.isArray(t)&&t.length>0?t.slice():uo.slice()),[w,T]=c(0)";

const OLD_K =
  "k=(e,t)=>{he||(t.offset.x>oe&&w>0?d(()=>T(w-1)):t.offset.x<-oe&&w<C.length-1&&d(()=>T(w+1)))}";
/** Exit plays, then front card quietly moves to back. */
const NEW_K =
  "k=(e,t)=>{if(he)return;if(t.offset.x>oe&&ve.current>0){d(()=>T(ve.current-1));return}if(t.offset.x<-oe&&D.current>=1){d(()=>T(ve.current+1));let n=520;l.setTimeout(()=>{d(()=>{setC(e=>e.length<=1?e:((([t,...n])=>[...n,t])(e))),T(0)})},n)}}";

const OLD_SE =
  "Se=e=>{let t=e-w;if(e<w)return{x:0,y:E?600:800,scale:.9,opacity:0,zIndex:C.length+e+100,rotateX:15,rotateZ:0};";
/** Leave along the swipe axis (left), soft fade — no drop-down exit. */
const NEW_SE =
  "Se=e=>{let t=e-w;if(e<w)return{x:E?-520:-680,y:18,scale:.97,opacity:0,zIndex:C.length+e+100,rotateX:0,rotateZ:-10};";

const OLD_TRANS =
  "transition:i?{type:`spring`,stiffness:80,damping:20}:{type:`spring`,stiffness:x,damping:30}";
/** Exit: controlled ease. Stack settle: slightly tighter spring. */
const NEW_TRANS =
  "transition:i?{type:`tween`,duration:.48,ease:[.22,1,.36,1]}:{type:`spring`,stiffness:Math.max(x,280),damping:34,mass:.85}";

const OLD_KEY = "onButtonClick:A(t)})},t)})";
const NEW_KEY = 'onButtonClick:A(t)})},`${e.title||"card"}-${t}`)})';

export async function GET() {
  const upstream = await fetch(SHARED_LIB_URL, {
    headers: { Accept: "text/javascript,*/*" },
    cache: "no-store",
  });

  if (!upstream.ok) {
    return new Response("Failed to load Framer shared-lib", { status: 502 });
  }

  let code = await upstream.text();

  if (
    !code.includes(OLD_INIT) ||
    !code.includes(OLD_K) ||
    !code.includes(OLD_KEY) ||
    !code.includes(OLD_SE) ||
    !code.includes(OLD_TRANS)
  ) {
    return new Response(
      "Framer shared-lib shape changed; circular swipe patch skipped",
      { status: 500 },
    );
  }

  code = code
    .replace(OLD_INIT, NEW_INIT)
    .replace(OLD_K, NEW_K)
    .replace(OLD_SE, NEW_SE)
    .replace(OLD_TRANS, NEW_TRANS)
    .replace(OLD_KEY, NEW_KEY)
    .replaceAll(
      'from"./rolldown-runtime.Dh6celcD.mjs"',
      `from"${FRAMER_SITE}/rolldown-runtime.Dh6celcD.mjs"`,
    )
    .replaceAll(
      'from"./react.D20wc1Tc.mjs"',
      `from"${FRAMER_SITE}/react.D20wc1Tc.mjs"`,
    )
    .replaceAll(
      'from"./motion.B09WepHq.mjs"',
      `from"${FRAMER_SITE}/motion.B09WepHq.mjs"`,
    )
    .replaceAll(
      'from"./framer.DqknJ356.mjs"',
      `from"${FRAMER_SITE}/framer.DqknJ356.mjs"`,
    );

  return new Response(code, {
    headers: {
      "Content-Type": "text/javascript; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
