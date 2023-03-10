import { Matrix4 as xe, Vector3 as Ne, Quaternion as qt, Scene as kt, WebGLRenderer as oi, sRGBEncoding as ui, PerspectiveCamera as li, Group as $t } from "three";
import { I as pi, g as Ut, c as Gt, b as Dt, e as z, d as mi, f as Kt, h as ci, i as di, j as hi, k as fi, l as yi, m as Jt, n as gi, o as Qt, p as bi, q as Ni, r as wi, s as Ti, t as Si, u as vi, v as Oi, w as _i, x as Ai, y as w, z as y, A as N, B as we, D as Y, E as Qe, F as B, G as O, H as ue, J as le, K as X, L as It, M as de, N as Ei, O as Xt, P as ce, Q as G, R as q, S as M, T as ie, U as Te, V as Zt, W as Yt, X as Mt, Y as es, Z as ts, _ as v, $ as pe, a0 as ss, a1 as as, a2 as me, a3 as Z, a4 as Ct, a5 as rs, a6 as te, a7 as ns, a8 as is, a9 as ki, aa as Xe, ab as Ze, ac as se, ad as ze, ae as Ye, af as Me, ag as os, ah as us, ai as et, aj as tt, ak as $i, al as V, am as oe, an as st, ao as at, ap as Di, aq as ls, ar as ps, as as ms, at as Ii, au as U, av as Ci, aw as rt, ax as xi, ay as zi, az as Li, aA as Fi, aB as Pi, aC as Vi, aD as Le, aE as Fe, aF as Ri, aG as ji, aH as Bi, aI as Hi, aJ as Wi, aK as qi, aL as Ui, aM as Gi, aN as Ki, aO as Ji, aP as Qi, aQ as Xi, aR as Zi, aS as Yi, aT as Mi, aU as eo, aV as to, aW as so, aX as ao, aY as ro, aZ as no, a_ as io, a$ as oo, b0 as uo, b1 as lo, b2 as po, b3 as mo, b4 as co, b5 as ho, b6 as nt, b7 as cs, b8 as fo, b9 as yo, ba as go, bb as bo, bc as No, bd as wo, be as To, bf as So, bg as vo, bh as Oo, bi as _o, bj as Ao, bk as Eo, bl as ko, bm as $o, bn as Do, bo as Io, bp as Co, bq as xo, br as zo, bs as Lo, bt as Fo, bu as Po, bv as Vo, bw as Ro, bx as jo, by as Bo, bz as Ho, bA as Wo, bB as qo, bC as Uo, bD as Go, bE as Ko, bF as Jo, bG as Qo, bH as Xo, bI as Zo, bJ as Yo, bK as Mo, bL as eu, bM as tu, bN as su, bO as au, bP as ru, bQ as nu, bR as iu, bS as ou, bT as uu, bU as lu, bV as pu, bW as mu, bX as cu, bY as du, bZ as hu, b_ as fu, b$ as yu, c0 as it, c1 as gu, c2 as bu, c3 as Nu, c4 as wu, c5 as Tu, c6 as Su, c7 as vu, c8 as Ou, c9 as _u, ca as Au, cb as Eu, cc as ku, cd as $u, ce as Du, cf as Iu, cg as Cu, ch as xu, ci as zu, cj as Lu, ck as ot, cl as ut, cm as Fu, cn as Pu, co as Vu, cp as Ru, cq as ju, cr as Bu, cs as Hu, ct as Wu, cu as lt, cv as F, cw as ds, cx as hs, cy as fs, cz as ys, cA as gs, cB as bs, cC as Ns, cD as ws, cE as Ts, cF as Ss, cG as vs, cH as Os, cI as _s, cJ as As, cK as Es, cL as ks, cM as $s, cN as Ds, cO as Is, cP as Cs, cQ as xs, cR as zs, cS as Ls, cT as Fs, cU as Ps, cV as Vs, cW as Rs, cX as js, cY as Bs, cZ as Hs, c_ as Ws, c$ as qs, d0 as Us, d1 as Gs, d2 as Ks, d3 as Js, d4 as Qs, d5 as Xs, d6 as Zs, d7 as Ys, d8 as Ms, d9 as ea, da as ta, db as sa, dc as aa, dd as ra, de as na, df as ia, dg as oa, dh as ua, di as pt, dj as la, dk as pa, dl as ma, dm as ca, dn as da, dp as ha, dq as fa, dr as ya, ds as ga, dt as ba, du as mt, dv as Na, dw as wa, dx as Ta, dy as Sa, dz as va, dA as Oa, dB as _a, dC as Aa, dD as Ea, dE as ka, dF as $a, dG as Da, dH as Ia, dI as Ca, dJ as xa, dK as za, dL as La, dM as Fa, dN as Pa, dO as Va, dP as Ra, dQ as ja, dR as Ba, dS as Ha, dT as Wa, dU as qa, dV as Ua, dW as Ga, dX as Ka, dY as Ja, dZ as Qa, d_ as Xa, d$ as Za, e0 as Ya, e1 as Ma, e2 as er, e3 as tr, e4 as sr, e5 as ar, e6 as rr, e7 as nr, e8 as ir, e9 as or, ea as ur, eb as lr, ec as pr, ed as mr, ee as cr, ef as dr, eg as hr, eh as fr, ei as yr, ej as gr, ek as br, el as Nr, em as wr, en as Tr, eo as Sr, ep as vr, eq as Or, er as _r, es as Ar, et as Er, eu as kr, ev as $r, ew as ee, ex as Dr, ey as Ir, ez as Cr, eA as xr, eB as zr, eC as ct, eD as Se, eE as Lr, eF as Fr, eG as Pr, eH as Vr, eI as Rr, eJ as jr, eK as ae, eL as Br, eM as Hr, eN as Wr, eO as qr, eP as H, eQ as C, eR as ve, eS as dt, eT as Ee, eU as qu, eV as Ur, eW as Uu, eX as Gr, eY as Kr, eZ as Gu, e_ as Ku, e$ as Jr, f0 as Ju, f1 as Qu, f2 as Xu, f3 as Zu, f4 as Yu, f5 as Mu, f6 as el, f7 as tl, f8 as sl, f9 as al, fa as rl, fb as nl, fc as il, fd as ol, fe as ul, ff as ll, fg as pl, fh as ml, fi as cl, fj as dl, fk as hl, fl, fm as yl, fn as gl, fo as bl, fp as Nl, fq as wl, fr as Tl, fs as Sl, ft as vl, fu as Ol, fv as _l, fw as Al, fx as El, fy as kl, fz as $l, fA as Dl, fB as Il, fC as Cl, fD as xl, fE as zl, fF as Ll, fG as Fl, fH as Pl, fI as Vl, fJ as Rl, fK as jl, fL as Bl, fM as Hl, fN as Wl, fO as ql, fP as Ul, fQ as Gl, fR as Kl, fS as Jl, fT as Ql, fU as Xl, fV as Zl, fW as Yl, fX as Ml, fY as ep, fZ as tp, f_ as sp, f$ as ap, g0 as rp, g1 as np, g2 as ip, g3 as op, g4 as up, g5 as lp, g6 as pp, g7 as mp, g8 as cp, g9 as dp, ga as hp, gb as fp, gc as yp, gd as gp, ge as bp, gf as Np, gg as wp, gh as Tp, gi as Sp, gj as vp, gk as Op, gl as _p, gm as Ap, gn as Ep, go as kp, gp as $p, gq as Dp, gr as Ip, gs as Cp, gt as xp, gu as zp, gv as Lp, gw as Fp, gx as Pp, gy as Vp, gz as Rp, gA as jp, gB as Bp, gC as Hp, gD as Wp, gE as qp, gF as Up, gG as Gp, gH as Kp, gI as Jp, gJ as Qp, gK as Xp, gL as Zp, gM as Yp, gN as Mp, gO as em, gP as tm, gQ as sm, gR as am, gS as rm, gT as nm, gU as im, gV as om, gW as um, gX as lm, gY as pm, gZ as mm, g_ as cm, g$ as dm, h0 as hm, h1 as fm, h2 as ym, h3 as gm, h4 as bm, h5 as Nm, h6 as wm, h7 as Tm, h8 as Sm, h9 as vm, ha as Om, hb as _m, hc as Am, hd as Em, he as km, hf as $m, hg as Dm, hh as Im, hi as Cm, hj as xm, hk as zm, hl as Lm, hm as Fm, hn as Pm, ho as Vm, hp as Rm, hq as jm, hr as Bm, hs as Hm, ht as Wm, hu as qm, hv as Um, hw as Gm, hx as Km, hy as Jm, hz as Qm, hA as Xm, hB as Zm, hC as Ym, hD as Mm, hE as ec, hF as tc, hG as sc, hH as ac, hI as rc, hJ as nc, hK as ic, hL as oc, hM as uc, hN as lc, hO as pc, hP as mc, hQ as cc, hR as dc, hS as hc, hT as fc, hU as yc, hV as gc, hW as bc, hX as Nc, hY as wc, hZ as Tc, h_ as Sc, h$ as vc, i0 as Oc, i1 as _c, i2 as Ac, i3 as Ec, i4 as kc, i5 as $c, i6 as Dc, i7 as Ic, i8 as Cc, i9 as xc, ia as zc, ib as Lc, ic as Fc, id as Pc, ie as Vc, ig as Rc, ih as jc, ii as Bc, ij as Hc, ik as Wc, il as qc, im as Uc, io as Gc, ip as Kc, iq as Jc, ir as Qc, is as Xc, it as Zc, iu as Yc, iv as Mc, iw as ed, ix as td, iy as sd, iz as ad, iA as rd, C as nd } from "./controller-939e6d85.js";
import { CSS3DRenderer as id } from "three/addons/renderers/CSS3DRenderer.js";
import { U as od } from "./ui-56ede774.js";
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const ud = "model", ld = ".json", pd = ".weights.bin";
function xt(s) {
  return new Promise((e) => setTimeout(e)).then(s);
}
class K {
  constructor(e) {
    if (!z().getBool("IS_BROWSER"))
      throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");
    e.startsWith(K.URL_SCHEME) && (e = e.slice(K.URL_SCHEME.length)), (e == null || e.length === 0) && (e = ud), this.modelJsonFileName = e + ld, this.weightDataFileName = e + pd;
  }
  async save(e) {
    if (typeof document > "u")
      throw new Error("Browser downloads are not supported in this environment since `document` is not present");
    const t = window.URL.createObjectURL(new Blob([e.weightData], { type: "application/octet-stream" }));
    if (e.modelTopology instanceof ArrayBuffer)
      throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");
    {
      const a = [{
        paths: ["./" + this.weightDataFileName],
        weights: e.weightSpecs
      }], r = mi(e, a), n = window.URL.createObjectURL(new Blob([JSON.stringify(r)], { type: "application/json" })), o = this.modelJsonAnchor == null ? document.createElement("a") : this.modelJsonAnchor;
      if (o.download = this.modelJsonFileName, o.href = n, await xt(() => o.dispatchEvent(new MouseEvent("click"))), e.weightData != null) {
        const u = this.weightDataAnchor == null ? document.createElement("a") : this.weightDataAnchor;
        u.download = this.weightDataFileName, u.href = t, await xt(() => u.dispatchEvent(new MouseEvent("click")));
      }
      return { modelArtifactsInfo: Kt(e) };
    }
  }
}
K.URL_SCHEME = "downloads://";
class md {
  constructor(e) {
    if (e == null || e.length < 1)
      throw new Error(`When calling browserFiles, at least 1 file is required, but received ${e}`);
    this.jsonFile = e[0], this.weightsFiles = e.slice(1);
  }
  async load() {
    return new Promise((e, t) => {
      const a = new FileReader();
      a.onload = (r) => {
        const n = JSON.parse(r.target.result), o = n.modelTopology;
        if (o == null) {
          t(new Error(`modelTopology field is missing from file ${this.jsonFile.name}`));
          return;
        }
        if (n.weightsManifest == null) {
          t(new Error(`weightManifest field is missing from file ${this.jsonFile.name}`));
          return;
        }
        if (this.weightsFiles.length === 0) {
          e({ modelTopology: o });
          return;
        }
        const l = Ut(n, (m) => this.loadWeights(m));
        e(l);
      }, a.onerror = (r) => t(`Failed to read model topology and weights manifest JSON from file '${this.jsonFile.name}'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`), a.readAsText(this.jsonFile);
    });
  }
  loadWeights(e) {
    const t = [], a = [];
    for (const o of e)
      t.push(...o.weights), a.push(...o.paths);
    const r = this.checkManifestAndWeightFiles(e), n = a.map((o) => this.loadWeightsFile(o, r[o]));
    return Promise.all(n).then((o) => [t, Gt(o)]);
  }
  loadWeightsFile(e, t) {
    return new Promise((a, r) => {
      const n = new FileReader();
      n.onload = (o) => {
        const u = o.target.result;
        a(u);
      }, n.onerror = (o) => r(`Failed to weights data from file of path '${e}'.`), n.readAsArrayBuffer(t);
    });
  }
  /**
   * Check the compatibility between weights manifest and weight files.
   */
  checkManifestAndWeightFiles(e) {
    const t = [], a = this.weightsFiles.map((n) => Dt(n.name)), r = {};
    for (const n of e)
      n.paths.forEach((o) => {
        const u = Dt(o);
        if (t.indexOf(u) !== -1)
          throw new Error(`Duplicate file basename found in weights manifest: '${u}'`);
        if (t.push(u), a.indexOf(u) === -1)
          throw new Error(`Weight file with basename '${u}' is not provided.`);
        r[o] = this.weightsFiles[a.indexOf(u)];
      });
    if (t.length !== this.weightsFiles.length)
      throw new Error(`Mismatch in the number of files in weights manifest (${t.length}) and the number of weight files provided (${this.weightsFiles.length}).`);
    return r;
  }
}
const cd = (s) => z().getBool("IS_BROWSER") && !Array.isArray(s) && s.startsWith(K.URL_SCHEME) ? dd(s.slice(K.URL_SCHEME.length)) : null;
pi.registerSaveRouter(cd);
function dd(s = "model") {
  return new K(s);
}
function hd(s) {
  return new md(s);
}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class De {
  constructor(e) {
    this.modelArtifacts = e;
  }
  load() {
    return this.modelArtifacts;
  }
}
class Qr {
  constructor(e) {
    this.saveHandler = e;
  }
  save(e) {
    return this.saveHandler(e);
  }
}
class fd {
  constructor(e) {
    e.load && (this.load = () => Promise.resolve(e.load())), e.save && (this.save = (t) => Promise.resolve(e.save(t)));
  }
}
function yd(s, e, t, a) {
  const r = arguments;
  return new fd(Oe(...r));
}
function Oe(s, e, t, a) {
  return arguments.length === 1 ? s.modelTopology != null || s.weightSpecs != null ? new De(s) : (console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."), new De({ modelTopology: s })) : (console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."), new De({
    modelTopology: s,
    weightSpecs: e,
    weightData: t,
    trainingConfig: a
  }));
}
function gd(s) {
  return new Qr(s);
}
function bd(s) {
  return new Qr(s);
}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const ht = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  browserFiles: hd,
  browserHTTPRequest: ci,
  concatenateArrayBuffers: Gt,
  copyModel: di,
  decodeWeights: hi,
  encodeWeights: fi,
  fromMemory: yd,
  fromMemorySync: Oe,
  getLoadHandlers: yi,
  getModelArtifactsForJSON: Ut,
  getModelArtifactsForJSONSync: Jt,
  getModelArtifactsInfoForJSON: Kt,
  getSaveHandlers: gi,
  getWeightSpecs: Qt,
  http: bi,
  isHTTPScheme: Ni,
  listModels: wi,
  loadWeights: Ti,
  moveModel: Si,
  registerLoadRouter: vi,
  registerSaveRouter: Oi,
  removeModel: _i,
  weightsLoaderFactory: Ai,
  withSaveHandler: gd,
  withSaveHandlerSync: bd
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Nd(s, e, t) {
  const a = y(s, "labels", "confusionMatrix"), r = y(e, "predictions", "confusionMatrix");
  N(t == null || t > 0 && Number.isInteger(t), () => `If provided, numClasses must be a positive integer, but got ${t}`), N(a.rank === 1, () => `Expected the rank of labels to be 1, but got ${a.rank}`), N(r.rank === 1, () => `Expected the rank of predictions to be 1, but got ${r.rank}`), N(a.shape[0] === r.shape[0], () => `Mismatch in the number of examples: ${a.shape[0]} vs. ${r.shape[0]}. Labels and predictions should have the same number of elements.`), N(t > 0 && Number.isInteger(t), () => `numClasses is required to be a positive integer, but got ${t}`);
  const n = we(Y(a, "int32"), t), o = we(Y(r, "int32"), t), u = Qe(n), l = B(u, o);
  return Y(l, "int32");
}
const wd = w({ confusionMatrix_: Nd });
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Td = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  confusionMatrix: wd
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Sd = 1e-3, Xr = 0.1;
function vd(s, e, t) {
  return t == null && (t = ft()), Pe(s, e, (a, r) => yt(a, r, t));
}
function ft() {
  return O.backend.floatPrecision() === 32 ? Sd : Xr;
}
function Pe(s, e, t) {
  let a = !0;
  if ((X(s) || X(e)) && (a = !1), X(s) && X(e) && (a = !0), a) {
    const o = s.constructor.name, u = e.constructor.name;
    if (o !== u)
      throw new Error(`Arrays are of different type. Actual: ${o}. Expected: ${u}`);
  }
  if (Array.isArray(s) && Array.isArray(e)) {
    const o = ue(s), u = ue(e);
    if (!le(o, u))
      throw new Error(`Arrays have different shapes. Actual: [${o}]. Expected: [${u}]`);
  }
  const r = X(s) ? s : It(s), n = X(e) ? e : It(e);
  if (r.length !== n.length)
    throw new Error(`Arrays have different lengths actual: ${r.length} vs expected: ${n.length}.
Actual:   ${r}.
Expected: ${n}.`);
  for (let o = 0; o < n.length; ++o) {
    const u = r[o], l = n[o];
    if (!t(u, l))
      throw new Error(`Arrays differ: actual[${o}] = ${u}, expected[${o}] = ${l}.
Actual:   ${r}.
Expected: ${n}.`);
  }
  typeof expect < "u" && expect().nothing();
}
function Od(s, e) {
  s().then(() => e.fail(), () => e()), typeof expect < "u" && expect().nothing();
}
function _d(s, e) {
  const t = typeof e == "string" || typeof e == "number" || typeof e == "boolean" ? [e] : e;
  return de(s) || de(s[0]) || de(e) || de(e[0]) ? Pe(s, t, (a, r) => a == r) : Pe(s, e, (a, r) => yt(a, r, 0));
}
function Ad(s, e, t) {
  if (t == null && (t = ft()), !yt(s, e, t))
    throw new Error(`Numbers differ: actual === ${s}, expected === ${e}`);
  typeof expect < "u" && expect().nothing();
}
function yt(s, e, t) {
  return !isFinite(s) && !isFinite(e) ? !0 : !(isNaN(s) || isNaN(e) || Math.abs(s - e) > t);
}
function Ed(s, e, t) {
  for (let a = 0; a < s.length; a++)
    if (s[a] < e || s[a] > t)
      throw new Error(`Value out of range:${s[a]} low: ${e}, high: ${t}`);
}
function kd(s, e) {
  const t = new Float32Array(s), a = new Float32Array(e);
  if (t.length !== a.length)
    throw new Error(`Expected ArrayBuffer to be of length ${a.length}, but it was ${t.length}`);
  for (let r = 0; r < a.length; r++)
    if (t[r] !== a[r])
      throw new Error(`Expected ArrayBuffer value at ${r} to be ${a[r]} but got ${t[r]} instead`);
}
function Zr(s) {
  for (let e = 0; e < s.length; e++) {
    const t = s[e];
    Array.isArray(t) ? Zr(t) : s[e] = Ei(t);
  }
  return s;
}
function $d(s) {
  const e = document.createElement("video");
  return "playsInline" in e && (e.playsInline = !0), e.muted = !0, e.loop = !0, e.style.position = "fixed", e.style.left = "0px", e.style.top = "0px", e.preload = "auto", e.appendChild(s), new Promise((t) => {
    e.addEventListener("loadeddata", (a) => t(e)), e.load();
  });
}
async function Dd(s) {
  await s.play(), "requestVideoFrameCallback" in s && await new Promise((e) => {
    s.requestVideoFrameCallback(e);
  });
}
const Id = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TEST_EPSILON_FLOAT16: Xr,
  createVideoElement: $d,
  encodeStrings: Zr,
  expectArrayBuffersEqual: kd,
  expectArraysClose: vd,
  expectArraysEqual: _d,
  expectNumbersClose: Ad,
  expectPromiseToFail: Od,
  expectValuesInRange: Ed,
  play: Dd,
  testEpsilon: ft
}, Symbol.toStringTag, { value: "Module" }));
/** @license See the LICENSE file. */
const Yr = "3.21.0";
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Cd(s) {
  N(Array.isArray(s), () => "The argument passed to tf.addN() must be a list of tensors"), N(s.length >= 1, () => `Must pass at least one tensor to tf.addN(), but got ${s.length}`);
  const e = s.map((r, n) => y(r, `tensors${n}`, "addN")), t = e[0];
  e.forEach((r) => {
    if (r.dtype !== t.dtype)
      throw new Error("All tensors passed to tf.addN() must have the same dtype");
  }), e.forEach((r) => {
    if (!le(r.shape, t.shape))
      throw new Error("All tensors passed to tf.addN() must have the same shape");
  });
  const a = e;
  return O.runKernel(Xt, a);
}
const Mr = w({ addN_: Cd });
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function xd(s, e, t, a, r, n) {
  const o = y(s, "forgetBias", "basicLSTMCell"), u = y(e, "lstmKernel", "basicLSTMCell"), l = y(t, "lstmBias", "basicLSTMCell"), m = y(a, "data", "basicLSTMCell"), p = y(r, "c", "basicLSTMCell"), c = y(n, "h", "basicLSTMCell"), d = ce([m, c], 1), h = B(d, u), b = G(h, l), f = b.shape[0], g = b.shape[1] / 4, S = [f, g], k = q(b, [0, 0], S), T = q(b, [0, g], S), W = q(b, [0, g * 2], S), A = q(b, [0, g * 3], S), $ = G(M(ie(k), Te(T)), M(p, ie(G(o, W)))), L = M(Te($), ie(A));
  return [$, L];
}
const en = w({ basicLSTMCell_: xd });
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function zd(s, e) {
  const t = y(s, "s0", "broadcastArgs", "int32"), a = y(e, "s1", "broadcastArgs", "int32");
  if (t.rank !== 1)
    throw new Error(`broadcastArgs(): first input must be a vector (rank=1). Has rank ${t.rank}`);
  if (a.rank !== 1)
    throw new Error(`broadcastArgs(): second input must be a vector (rank=1). Has rank ${a.rank}`);
  const r = { s0: t, s1: a };
  return O.runKernel(Zt, r);
}
const tn = w({ broadcastArgs_: zd });
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ld(s, e, t, a = !1) {
  const r = y(s, "x", "denseBincount"), n = y(e, "weights", "denseBincount");
  N(r.dtype === "int32", () => `Error in denseBincount: input dtype must be int32, but got ${r.dtype}`), N(r.rank <= 2, () => `Error in denseBincount: input must be at most rank 2, but got rank ${r.rank}.`), N(t >= 0, () => `size must be non-negative, but got ${t}.`), N(n.size === r.size || n.size === 0, () => `Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${r.shape}, weights shape: ${n.shape}.`);
  const o = { x: r, weights: n }, u = { size: t, binaryOutput: a };
  return O.runKernel(Yt, o, u);
}
const sn = w({ denseBincount_: Ld });
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Fd(s) {
  const t = { x: y(s, "x", "diag") };
  return O.runKernel(Mt, t);
}
const an = w({ diag_: Fd });
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Pd(s, ...e) {
  const t = e.map((r, n) => y(r, `tensors${n}`, "einsum")), a = { equation: s };
  return O.runKernel(es, t, a);
}
const rn = w({ einsum_: Pd });
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function nn(s, e, t) {
  if (t <= 0)
    throw new Error("The number of values should be positive.");
  const a = { start: s, stop: e, num: t };
  return O.runKernel(ts, {}, a);
}
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const he = 2147483648;
function Vd(s, e, t = "left") {
  const a = y(s, "sortedSequence", "searchSorted"), r = y(e, "values", "searchSorted"), n = a.shape[a.shape.length - 1], o = r.shape[r.shape.length - 1], u = v(a, [-1, n]), l = v(r, [-1, o]);
  if (u.rank < 2)
    throw new Error("Sorted input argument must be at least 2-dimensional");
  if (u.shape[0] !== l.shape[0])
    throw new Error("Leading dimension of 'sortedSequence' and 'values' must match.");
  if (pe(l.shape) >= he)
    throw new Error(`values tensor size must less than ${he}`);
  if (u.shape[1] >= he)
    throw new Error(`trailing dim_size must less than ${he} for int32 output type, was ${u.shape[1]}`);
  const m = {
    sortedSequence: u,
    values: l
  }, p = { side: t };
  return O.runKernel(ss, m, p);
}
const ke = w({ searchSorted_: Vd });
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function on(s, e) {
  return ke(s, e, "left");
}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Rd(s, e, t, a, r = !1) {
  const o = { x: y(s, "x", "maxPoolWithArgmax") }, u = { filterSize: e, strides: t, pad: a, includeBatchInIndex: r }, l = O.runKernel(as, o, u);
  return { result: l[0], indexes: l[1] };
}
const un = w({ maxPoolWithArgmax_: Rd });
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ln(s, e, { indexing: t = "xy" } = {}) {
  if (t !== "xy" && t !== "ij")
    throw new TypeError(`${t} is not a valid third argument to meshgrid`);
  if (s === void 0)
    return [];
  let a = y(s, "x", "meshgrid", s instanceof me ? s.dtype : "float32");
  if (e === void 0)
    return [a];
  let r = y(e, "y", "meshgrid", e instanceof me ? e.dtype : "float32");
  const n = pe(a.shape), o = pe(r.shape);
  return t === "xy" ? (a = v(a, [1, -1]), r = v(r, [-1, 1]), [
    B(Z([o, 1], a.dtype), a),
    B(r, Z([1, n], r.dtype))
  ]) : (a = v(a, [-1, 1]), r = v(r, [1, -1]), [
    B(a, Z([1, o], a.dtype)),
    B(Z([n, 1], r.dtype), r)
  ]);
}
function jd(s, e, t, a) {
  const r = y(e, "data", "multiRNNCell"), n = Ct(t, "c", "multiRNNCell"), o = Ct(a, "h", "multiRNNCell");
  let u = r;
  const l = [];
  for (let c = 0; c < s.length; c++) {
    const d = s[c](u, n[c], o[c]);
    l.push(d[0]), l.push(d[1]), u = d[1];
  }
  const m = [], p = [];
  for (let c = 0; c < l.length; c += 2)
    m.push(l[c]), p.push(l[c + 1]);
  return [m, p];
}
const pn = w({ multiRNNCell_: jd });
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Bd(s, e, t, a = !1) {
  const r = y(s, "logits", "multinomial"), n = r.size, o = r.rank;
  if (n < 2)
    throw new Error(`Error in multinomial: you need at least 2 outcomes, but got ${n}.`);
  if (o > 2)
    throw new Error(`Rank of probabilities must be 1 or 2, but is ${o}`);
  t = t || Math.random();
  const l = { logits: o === 1 ? v(r, [1, -1]) : r }, m = { numSamples: e, seed: t, normalized: a }, p = O.runKernel(rs, l, m);
  return o === 1 ? v(p, [p.size]) : p;
}
const mn = w({ multinomial_: Bd });
function Hd(s, e) {
  const t = y(s, "v1", "outerProduct"), a = y(e, "v2", "outerProduct");
  N(t.rank === 1 && a.rank === 1, () => `Error in outerProduct: inputs must be rank 1, but got ranks ${t.rank} and ${a.rank}.`);
  const r = v(t, [-1, 1]), n = v(a, [1, -1]);
  return B(r, n);
}
const cn = w({ outerProduct_: Hd });
function Wd(s, e, t = 0) {
  return N(e.length === 2, () => "Invalid number of paddings. Must be length of 2."), te(s, [e], t);
}
const dn = w({ pad1d_: Wd });
function qd(s, e, t = 0) {
  return N(e.length === 2 && e[0].length === 2 && e[1].length === 2, () => "Invalid number of paddings. Must be length of 2 each."), te(s, e, t);
}
const hn = w({ pad2d_: qd });
function Ud(s, e, t = 0) {
  return N(e.length === 3 && e[0].length === 2 && e[1].length === 2 && e[2].length === 2, () => "Invalid number of paddings. Must be length of 2 each."), te(s, e, t);
}
const fn = w({ pad3d_: Ud });
function Gd(s, e, t = 0) {
  return N(e.length === 4 && e[0].length === 2 && e[1].length === 2 && e[2].length === 2 && e[3].length === 2, () => "Invalid number of paddings. Must be length of 2 each."), te(s, e, t);
}
const yn = w({ pad4d_: Gd });
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Kd(s, e, t, a) {
  const r = s.map((p, c) => y(p, `tensors${c}`, "raggedGather", "int32")), n = y(e, "paramsDenseValues", "raggedGather"), o = y(t, "indices", "raggedGather", "int32"), u = {
    paramsNestedSplits: r,
    paramsDenseValues: n,
    indices: o
  }, l = { outputRaggedRank: a }, m = O.runKernel(ns, u, l);
  return {
    outputNestedSplits: m.slice(0, m.length - 1),
    outputDenseValues: m[m.length - 1]
  };
}
const gn = w({ raggedGather_: Kd });
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Jd(s, e, t, a, r) {
  const n = y(s, "shape", "raggedTensorToTensor", "int32"), o = y(e, "values", "raggedTensorToTensor"), u = y(t, "defaultValue", "raggedTensorToTensor", o.dtype), l = a.map((c, d) => y(c, `tensors${d}`, "raggedTensorToTensor", "int32")), m = {
    shape: n,
    values: o,
    defaultValue: u,
    rowPartitionTensors: l
  }, p = { rowPartitionTypes: r };
  return O.runKernel(is, m, p);
}
const bn = w({ raggedTensorToTensor_: Jd });
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Qd(s, e, t) {
  const a = pe(s);
  let r = null;
  if (t == null || t === "float32")
    r = new Float32Array(a);
  else if (t === "int32")
    r = new Int32Array(a);
  else if (t === "bool")
    r = new Uint8Array(a);
  else
    throw new Error(`Unknown data type ${t}`);
  for (let n = 0; n < a; n++)
    r[n] = e();
  return O.makeTensor(r, s, t);
}
const Nn = w({ rand_: Qd });
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Xd(s, e, t = 1, a = "float32", r) {
  if (t == null && (t = 1), a == null && (a = "float32"), a !== "float32" && a !== "int32")
    throw new Error(`Unsupported data type ${a}`);
  const n = new ki(e, t, a, r), o = Xe(s, a);
  for (let u = 0; u < o.values.length; u++)
    o.values[u] = n.nextValue();
  return o.toTensor();
}
const wn = w({ randomGamma_: Xd });
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Zd(s, e, t) {
  if (e != null && e === "bool")
    throw new Error(`Unsupported data type ${e}`);
  return Ze(s, 0, 1, e, t);
}
const Tn = w({ randomStandardNormal_: Zd });
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Yd(s) {
  const e = y(s, "x", "reverse");
  return N(e.rank === 1, () => `Error in reverse1D: x must be rank 1 but got rank ${e.rank}.`), se(e, 0);
}
const Sn = w({ reverse1d_: Yd });
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Md(s, e) {
  const t = y(s, "x", "reverse");
  return N(t.rank === 2, () => `Error in reverse2D: x must be rank 2 but got rank ${t.rank}.`), se(t, e);
}
const vn = w({ reverse2d_: Md });
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function eh(s, e) {
  const t = y(s, "x", "reverse");
  return N(t.rank === 3, () => `Error in reverse3D: x must be rank 3 but got rank ${t.rank}.`), se(t, e);
}
const On = w({ reverse3d_: eh });
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function th(s, e) {
  const t = y(s, "x", "reverse");
  return N(t.rank === 4, () => `Error in reverse4D: x must be rank 4 but got rank ${t.rank}.`), se(t, e);
}
const _n = w({ reverse4d_: th });
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
async function sh(s, e) {
  const t = y(s, "x", "setdiff1d"), a = y(e, "y", "setdiff1d");
  N(t.dtype === a.dtype, () => `x and y should have the same dtype, but got x (${t.dtype}) and y (${a.dtype}).`), N(t.rank === 1, () => `x should be 1D tensor, but got x (${t.shape}).`), N(a.rank === 1, () => `y should be 1D tensor, but got y (${a.shape}).`);
  const r = await t.data(), n = await a.data(), o = new Set(n);
  let u = 0;
  for (let p = 0; p < r.length; p++)
    o.has(r[p]) || u++;
  const l = new ze([u], t.dtype), m = new ze([u], "int32");
  for (let p = 0, c = 0; p < r.length; p++)
    o.has(r[p]) || (l.values[c] = r[p], m.values[c] = p, c++);
  return [l.toTensor(), m.toTensor()];
}
const An = sh;
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function En(s, e, t) {
  if (Ye(s), e != null && e.length !== 4)
    throw new Error("tensor4d() requires shape to have four numbers");
  const a = ue(s, t);
  if (a.length !== 4 && a.length !== 1)
    throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");
  if (a.length === 1 && e == null)
    throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");
  return Me(s, e, a, t);
}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function kn(s, e, t) {
  if (Ye(s), e != null && e.length !== 5)
    throw new Error("tensor5d() requires shape to have five numbers");
  const a = ue(s, t);
  if (a.length !== 5 && a.length !== 1)
    throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");
  if (a.length === 1 && e == null)
    throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");
  return Me(s, e, a, t);
}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function $n(s, e, t) {
  if (Ye(s), e != null && e.length !== 6)
    throw new Error("tensor6d() requires shape to have six numbers");
  const a = ue(s, t);
  if (a.length !== 6 && a.length !== 1)
    throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");
  if (a.length === 1 && e == null)
    throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");
  return e = e || a, Me(s, e, a, t);
}
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Dn(s, e) {
  return ke(s, e, "right");
}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
async function ah(s) {
  const e = y(s, "condition", "whereAsync", "bool"), t = await e.data(), a = os(e.shape, t);
  return s !== e && e.dispose(), a;
}
const gt = ah;
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
async function rh(s, e, t) {
  const a = y(s, "tensor", "boolMask"), r = y(e, "mask", "boolMask", "bool"), n = t ?? 0, o = r.rank, u = a.shape;
  N(o > 0, () => "mask cannot be scalar"), us(u.slice(n, n + o), r.shape, "mask's shape must match the first K dimensions of tensor's shape,");
  let l = 1;
  for (let f = n; f < n + o; f++)
    l *= u[f];
  const m = u.slice(0, n).concat([l], u.slice(n + o)), p = v(a, m), c = v(r, [-1]), d = await gt(c), h = et(d, [1]), b = tt(p, h, n);
  return s !== a && a.dispose(), e !== r && r.dispose(), h.dispose(), p.dispose(), c.dispose(), d.dispose(), b;
}
const In = rh;
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function nh(s, e, t, a, r = !0) {
  const n = y(s, "v", "movingAverage"), o = y(e, "x", "movingAverage"), u = y(t, "decay", "movingAverage");
  $i(n, o), N(le(n.shape, o.shape), () => "Shape mismatch in v and x");
  const l = V(1), m = oe(l, u);
  let p = M(oe(o, n), m);
  if (r) {
    N(a != null, () => "When using zeroDebias: true, step is required.");
    const c = y(a, "step", "movingAverage");
    p = st(p, oe(l, at(u, c)));
  }
  return G(n, p);
}
const Cn = w({ movingAverage_: nh });
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ih(s, e, t) {
  const a = y(s, "indices", "scatterND", "int32"), r = y(e, "updates", "scatterND");
  Di(r, a, t);
  const n = { indices: a, updates: r }, o = { shape: t };
  return O.runKernel(ls, n, o);
}
const xn = w({ scatterND_: ih });
function oh(s, e, t, a) {
  if (s.dtype !== "int32")
    throw new Error(`tf.sparseToDense() expects the indices to be int32 type, but the dtype was ${s.dtype}.`);
  if (s.rank > 2)
    throw new Error(`sparseIndices should be a scalar, vector, or matrix, but got shape ${s.shape}.`);
  const r = s.rank > 0 ? s.shape[0] : 1, n = s.rank > 1 ? s.shape[1] : 1;
  if (t.length !== n)
    throw new Error(`outputShape has incorrect number of elements:, ${t.length}, should be: ${n}.`);
  const o = e.size;
  if (!(e.rank === 0 || e.rank === 1 && o === r))
    throw new Error(`sparseValues has incorrect shape ${e.shape}, should be [] or [${r}]`);
  if (e.dtype !== a.dtype)
    throw new Error("sparseValues.dtype must match defaultValues.dtype");
}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function uh(s, e, t, a = 0) {
  const r = y(s, "sparseIndices", "sparseToDense", "int32"), n = y(e, "sparseValues", "sparseToDense", "string_or_numeric"), o = y(a, "defaultValue", "sparseToDense", n.dtype);
  oh(r, n, t, o);
  const u = {
    sparseIndices: r,
    sparseValues: n,
    defaultValue: o
  }, l = { outputShape: t };
  return O.runKernel(ps, u, l);
}
const zn = w({ sparseToDense_: uh });
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function lh(s, e) {
  const t = y(e, "indices", "gatherND", "int32"), r = { params: y(s, "x", "gatherND", "string_or_numeric"), indices: t };
  return O.runKernel(ms, r);
}
const Ln = w({ gatherND_: lh });
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
async function ph(s, e, t = 1) {
  const a = y(s, "predictions", "inTopK"), r = y(e, "targets", "inTopK");
  N(a.rank > 1, () => `inTopK() expects the predictions to be of rank 2 or higher, but got ${a.rank}`), N(a.rank - 1 === r.rank, () => `predictions rank should be 1 larger than targets rank, but got predictions rank ${a.rank} and targets rank ${r.rank}`), us(a.shape.slice(0, a.shape.length - 1), r.shape, "predictions's shape should be align with the targets' shape, except the last dimension.");
  const n = a.shape[a.shape.length - 1];
  N(t > 0 && t <= n, () => `'k' passed to inTopK() must be > 0 && <= the predictions last dimension (${n}), but got ${t}`);
  const o = await a.data(), u = await r.data(), [l, m] = [o.length / n, n], p = Ii("bool", l);
  for (let c = 0; c < l; c++) {
    const d = c * m, h = o.subarray(d, d + m), b = [];
    for (let f = 0; f < h.length; f++)
      b.push({ value: h[f], index: f });
    b.sort((f, g) => g.value - f.value), p[c] = 0;
    for (let f = 0; f < t; f++)
      if (b[f].index === u[c]) {
        p[c] = 1;
        break;
      }
  }
  return s !== a && a.dispose(), e !== r && r.dispose(), U(p, r.shape, "bool");
}
const Fn = ph;
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function mh({ x: s, filter: e, strides: t, pad: a, dataFormat: r = "NHWC", dilations: n = [1, 1], dimRoundingMode: o, bias: u, activation: l = "linear", preluActivationWeights: m, leakyreluAlpha: p }) {
  if (Ci(O.state.gradientDepth, l) === !1) {
    let A = rt(s, e, t, a, r, n, o);
    return u != null && (A = G(A, u)), xi(A, l, m, p);
  }
  const c = y(s, "x", "depthwiseConv2d", "float32"), d = y(e, "filter", "depthwiseConv2d", "float32");
  let h = c, b = !1;
  c.rank === 3 && (b = !0, h = v(c, [1, c.shape[0], c.shape[1], c.shape[2]])), N(h.rank === 4, () => `Error in fused depthwiseConv2d: input must be rank 4, but got rank ${h.rank}.`), N(d.rank === 4, () => `Error in fused depthwiseConv2d: filter must be rank 4, but got rank ${d.rank}.`), N(h.shape[3] === d.shape[2], () => `Error in fused depthwiseConv2d: number of input channels (${h.shape[3]}) must match the inChannels dimension in filter ${d.shape[2]}.`), n == null && (n = [1, 1]), N(zi(t, n), () => `Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides ${t} and dilations '${n}'`), Li("fused depthwiseConv2d", a, o);
  const f = Fi(
    h.shape,
    d.shape,
    t,
    n,
    a,
    o,
    !0
    /* depthwise */
  );
  let g;
  u != null && (g = y(u, "bias", "fused conv2d"), [g] = Pi(g, c), Vi(f.outShape, g.shape));
  let S;
  m != null && (S = y(m, "prelu weights", "fused depthwiseConv2d"));
  const k = (A, $) => {
    N(Ri(n), () => `Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '${n}'`);
    const [L, Q, x, R] = $, $e = ji(A, x, l), At = Bi(Q.shape, $e, L, t, a, n, o), Et = Hi(Q, $e, L.shape, t, a, n, o);
    if (R != null) {
      const ii = Wi(g, $e);
      return [At, Et, ii];
    }
    return [At, Et];
  }, T = {
    x: h,
    filter: d,
    bias: g,
    preluActivationWeights: S
  }, W = {
    strides: t,
    pad: a,
    dataFormat: r,
    dilations: n,
    dimRoundingMode: o,
    activation: l,
    leakyreluAlpha: p
  };
  return u == null ? Le(($, L, Q) => {
    let x = O.runKernel(Fe, T, W);
    return Q([L, $, x]), b && (x = v(x, [x.shape[1], x.shape[2], x.shape[3]])), { value: x, gradFunc: k };
  })(h, d) : Le(($, L, Q, x) => {
    let R = O.runKernel(Fe, T, W);
    return x([L, $, R, Q]), b && (R = v(R, [R.shape[1], R.shape[2], R.shape[3]])), { value: R, gradFunc: k };
  })(h, d, g);
}
const ch = w({ fusedDepthwiseConv2d_: mh });
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Pn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  conv2d: qi,
  depthwiseConv2d: ch,
  matMul: Ui
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const dh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  nonMaxSuppressionV3Impl: Gi,
  nonMaxSuppressionV4Impl: Ki,
  nonMaxSuppressionV5Impl: Ji,
  whereImpl: os
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
function hh(s) {
  return new Qi(s);
}
function fh(s) {
  return new Xi(s);
}
function yh() {
  return new Zi();
}
function gh(s) {
  return new Yi(s);
}
const bh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  maxNorm: hh,
  minMaxNorm: gh,
  nonNeg: yh,
  unitNorm: fh
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
function Nh() {
  return new Mi();
}
function wh() {
  return new eo();
}
function Th(s) {
  return new to(s);
}
function Sh(s) {
  return new so(s);
}
function vh(s) {
  return new ao(s);
}
function Oh(s) {
  return new ro(s);
}
function _h(s) {
  return new no(s);
}
function Ah(s) {
  return new io(s);
}
function Eh(s) {
  return new oo(s);
}
function kh(s) {
  return new uo(s);
}
function $h(s) {
  return new lo(s);
}
function Dh(s) {
  return new po(s);
}
function Ih(s) {
  return new mo(s);
}
function Ch(s) {
  return new co(s);
}
function xh(s) {
  return new ho(s);
}
const zh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  constant: Th,
  glorotNormal: kh,
  glorotUniform: Eh,
  heNormal: $h,
  heUniform: Dh,
  identity: _h,
  leCunNormal: Ih,
  leCunUniform: Ch,
  ones: wh,
  orthogonal: xh,
  randomNormal: vh,
  randomUniform: Sh,
  truncatedNormal: Oh,
  varianceScaling: Ah,
  zeros: Nh
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
function Lh(s) {
  return new nt(s);
}
function Fh(s) {
  return new cs(s);
}
function Ph(s, e) {
  return e == null && (e = {}), fo(s, e);
}
function Vn(s) {
  return yo(s);
}
function Vh(s, e) {
  go.registerCallbackConstructor(s, e);
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
function Rh(s) {
  return new bo(s);
}
function jh(s) {
  return new No(s);
}
function Bh(s) {
  return new wo(s);
}
function Hh(s) {
  return new To(s);
}
function Wh(s) {
  return new So(s);
}
function qh(s) {
  return new vo(s);
}
function Uh(s) {
  return new Oo(s);
}
function Gh(s) {
  return new _o(s);
}
function Kh(s) {
  return new Ao(s);
}
function Jh(s) {
  return new Eo(s);
}
function Qh(s) {
  return new ko(s);
}
function Xh(s) {
  return new $o(s);
}
function Zh(s) {
  return new Do(s);
}
function Yh(s) {
  return new Io(s);
}
function Mh(s) {
  return new Co(s);
}
function ef(s) {
  return new xo(s);
}
function tf(s) {
  return new zo(s);
}
function sf(s) {
  return new Lo(s);
}
function af(s) {
  return new Fo(s);
}
function rf(s) {
  return new Po(s);
}
function nf(s) {
  return new Vo(s);
}
function of(s) {
  return new Ro(s);
}
function uf(s) {
  return new jo(s);
}
function lf(s) {
  return new Bo(s);
}
function pf(s) {
  return new Ho(s);
}
function mf(s) {
  return new Wo(s);
}
function cf(s) {
  return new qo(s);
}
function df(s) {
  return new Uo(s);
}
function hf(s) {
  return new Go(s);
}
function ff(s) {
  return new Ko(s);
}
function yf(s) {
  return new Jo(s);
}
function gf(s) {
  return new Qo(s);
}
function bf(s) {
  return new Xo(s);
}
function Nf(s) {
  return new Zo(s);
}
function wf(s) {
  return new Yo(s);
}
function bt(s) {
  return new Mo(s);
}
function Tf(s) {
  return bt(s);
}
function Sf(s) {
  return bt(s);
}
function Nt(s) {
  return new eu(s);
}
function vf(s) {
  return Nt(s);
}
function Of(s) {
  return Nt(s);
}
function wt(s) {
  return new tu(s);
}
function _f(s) {
  return wt(s);
}
function Af(s) {
  return wt(s);
}
function Ef(s) {
  return new su(s);
}
function kf(s) {
  return new au(s);
}
function Rn(s) {
  return new ru(s);
}
function jn(s) {
  return new nu(s);
}
function Bn(s) {
  return new iu(s);
}
function Hn(s) {
  return new ou(s);
}
function $f(s) {
  return new uu(s);
}
function Df(s) {
  return new lu(s);
}
function If(s) {
  return new pu(s);
}
function Cf(s) {
  return new mu(s);
}
function xf(s) {
  return new cu(s);
}
function zf(s) {
  return new du(s);
}
function Lf(s) {
  return new hu(s);
}
function Ff(s) {
  return new fu(s);
}
function Pf(s) {
  return new yu(s);
}
function Vf(s) {
  return new it(s);
}
function Rf(s) {
  return new gu(s);
}
function jf(s) {
  return new bu(s);
}
function Bf(s) {
  return new Nu(s);
}
const Hf = Rn, Wf = jn, qf = Bn, Uf = Hn;
function Gf(s) {
  return new wu(s);
}
function Kf(s) {
  return new Tu(s);
}
function Jf(s) {
  return new Su(s);
}
function Qf(s) {
  return new vu(s);
}
function Xf(s) {
  return new Ou(s);
}
const Zf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Layer: _u,
  RNN: it,
  RNNCell: Au,
  activation: tf,
  add: mf,
  alphaDropout: Jf,
  average: cf,
  averagePooling1d: bt,
  averagePooling2d: Nt,
  averagePooling3d: wt,
  avgPool1d: Tf,
  avgPool2d: vf,
  avgPool3d: _f,
  avgPooling1d: Sf,
  avgPooling2d: Of,
  avgPooling3d: Af,
  batchNormalization: bf,
  bidirectional: jf,
  concatenate: df,
  conv1d: Gh,
  conv2d: Kh,
  conv2dTranspose: Jh,
  conv3d: Qh,
  conv3dTranspose: Xh,
  convLstm2d: Ff,
  convLstm2dCell: Pf,
  cropping2D: Yh,
  dense: sf,
  depthwiseConv2d: ef,
  dot: gf,
  dropout: af,
  elu: jh,
  embedding: pf,
  flatten: nf,
  gaussianDropout: Kf,
  gaussianNoise: Gf,
  globalAveragePooling1d: Ef,
  globalAveragePooling2d: kf,
  globalMaxPool1d: Hf,
  globalMaxPool2d: Wf,
  globalMaxPooling1d: Rn,
  globalMaxPooling2d: jn,
  gru: Df,
  gruCell: If,
  input: Vn,
  inputLayer: Rh,
  layerNormalization: Nf,
  leakyReLU: Hh,
  lstm: Cf,
  lstmCell: xf,
  masking: Qf,
  maxPool1d: qf,
  maxPool2d: Uf,
  maxPooling1d: Bn,
  maxPooling2d: Hn,
  maxPooling3d: $f,
  maximum: hf,
  minimum: ff,
  multiply: yf,
  permute: lf,
  prelu: Wh,
  reLU: Bh,
  repeatVector: of,
  rescaling: Xf,
  reshape: uf,
  rnn: Vf,
  separableConv2d: Zh,
  simpleRNN: zf,
  simpleRNNCell: Lf,
  softmax: qh,
  spatialDropout1d: rf,
  stackedRNNCells: Rf,
  thresholdedReLU: Uh,
  timeDistributed: Bf,
  upSampling2d: Mh,
  zeroPadding2d: wf
}, Symbol.toStringTag, { value: "Module" }));
function Yf(s, e) {
  return Eu(s, e);
}
function Mf(s, e) {
  return ku(s, e);
}
function ey(s, e) {
  return $u(s, e);
}
function ty(s, e) {
  return Du(s, e);
}
function sy(s, e) {
  return Iu(s, e);
}
function ay(s, e) {
  return Cu(s, e);
}
function ry(s, e) {
  return xu(s, e);
}
function ny(s, e) {
  return zu(s, e);
}
function iy(s, e) {
  return Lu(s, e);
}
function oy(s, e) {
  return ot(s, e);
}
function uy(s, e) {
  return ot(s, e);
}
function ly(s, e) {
  return ot(s, e);
}
function py(s, e) {
  return ut(s, e);
}
function my(s, e) {
  return ut(s, e);
}
function cy(s, e) {
  return ut(s, e);
}
const dy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MAPE: uy,
  MSE: my,
  binaryAccuracy: Yf,
  binaryCrossentropy: Mf,
  categoricalAccuracy: ty,
  categoricalCrossentropy: sy,
  cosineProximity: ny,
  mape: ly,
  meanAbsoluteError: iy,
  meanAbsolutePercentageError: oy,
  meanSquaredError: py,
  mse: cy,
  precision: ay,
  recall: ry,
  sparseCategoricalAccuracy: ey
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
const hy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  modelFromJSON: Fu
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
function fy(s) {
  return new Pu(s);
}
function yy(s) {
  return Vu(s);
}
function gy(s) {
  return Ru(s);
}
const by = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  l1: yy,
  l1l2: fy,
  l2: gy
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
class Wn extends ju {
  constructor() {
    super(...arguments), this.model = null;
  }
  setModel(e) {
    if (!(e instanceof nt))
      throw new Error("model must be a LayersModel, not some other Container");
    this.model = e;
  }
}
function fe(s, e) {
  return s < e;
}
function zt(s, e) {
  return s > e;
}
class qn extends Wn {
  constructor(e) {
    if (super(), e == null && (e = {}), e.restoreBestWeights)
      throw new Bu("restoreBestWeights = True is not implemented in EarlyStopping yet.");
    this.monitor = e.monitor || "val_loss", this.minDelta = Math.abs(e.minDelta || 0), this.patience = e.patience || 0, this.verbose = e.verbose || 0, this.mode = e.mode || "auto", this.baseline = e.baseline, ["auto", "min", "max"].indexOf(this.mode) === -1 && (console.warn(`EarlyStopping mode '${this.mode}' is invalid. Falling back to mode 'auto'.`), this.mode = "auto"), this.mode === "min" ? this.monitorFunc = fe : this.mode === "max" ? this.monitorFunc = zt : this.monitor.indexOf("acc") !== -1 ? this.monitorFunc = zt : this.monitorFunc = fe, this.monitorFunc === fe && (this.minDelta *= -1);
  }
  async onTrainBegin(e) {
    this.wait = 0, this.stoppedEpoch = 0, this.baseline != null ? this.best = this.baseline : this.best = this.monitorFunc === fe ? 1 / 0 : -1 / 0;
  }
  async onEpochEnd(e, t) {
    await Hu(t);
    const a = this.getMonitorValue(t);
    a != null && (this.monitorFunc(a - this.minDelta, this.best) ? (this.best = a, this.wait = 0) : (this.wait++, this.wait >= this.patience && (this.stoppedEpoch = e, this.model.stopTraining = !0)));
  }
  async onTrainEnd(e) {
    this.stoppedEpoch > 0 && this.verbose && console.log(`Epoch ${this.stoppedEpoch}: early stopping.`);
  }
  getMonitorValue(e) {
    e == null && (e = {});
    const t = e[this.monitor];
    return t == null && console.warn(`Metric for EarlyStopping ${this.monitor} is not available. Available metrics are: ${Object.keys(e)}`), t;
  }
}
function Ny(s) {
  return new qn(s);
}
const wy = { earlyStopping: Ny };
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Tt = {};
function Ty(s, e) {
  const t = {
    tfOpName: s,
    category: "custom",
    inputs: [],
    attrs: [],
    customExecutor: e
  };
  Tt[s] = t;
}
function Un(s) {
  return Tt[s];
}
function Sy(s) {
  delete Tt[s];
}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function i(s, e, t, a, r) {
  const n = e.inputParams[s];
  if (n && n.inputIndexStart !== void 0) {
    const u = n.inputIndexStart, l = n.inputIndexEnd === 0 ? void 0 : n.inputIndexEnd === void 0 ? u + 1 : n.inputIndexEnd;
    if (n.type === "tensor")
      return E(e.inputNames[n.inputIndexStart], t, a, r);
    if (n.type === "tensors")
      return e.inputNames.slice(u, l).map((d) => E(d, t, a, r));
    const m = E(e.inputNames.slice(u)[0], t, a, r), p = m.dataSync();
    return n.type === "number" ? p[0] : Wu(m.shape, p);
  }
  const o = e.attrParams[s];
  return o && o.value;
}
function E(s, e, t, a) {
  const [r, n] = D(s);
  if (a != null) {
    const u = a.getHashTableHandleByName(r);
    if (u != null)
      return u;
  }
  const o = t.currentContextIds.find((u) => !!e[_e(r, u)]);
  return o !== void 0 ? e[_e(r, o)][n] : void 0;
}
function vy(s, e, t) {
  return e[_e(s, t.currentContextId)];
}
function P(s, e) {
  const [t, a, r] = D(s);
  return [
    _e(t, e && e.currentContextId),
    a,
    r
  ];
}
function _e(s, e) {
  return e ? `${s}-${e}` : s;
}
function D(s) {
  const e = s.split(":");
  if (e.length === 1)
    return [s, 0, void 0];
  const t = e[0], a = e.length === 3 ? e[1] : void 0, r = Number(e[e.length - 1]);
  return [t, r, a];
}
function be(s, e, t) {
  let a = i("pad", s, e, t);
  if (a === "explicit") {
    a = i("explicitPaddings", s, e, t);
    const r = [[0, 0], [0, 0], [0, 0], [0, 0]];
    for (let n = 0; n < 4; n++)
      r[n][0] = a[n * 2], r[n][1] = a[n * 2 + 1];
    return r;
  }
  return a;
}
function j(s) {
  return s.kept ? s : lt(s);
}
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Oy = [
  {
    tfOpName: "Add",
    category: "arithmetic",
    inputs: [
      {
        start: 0,
        name: "a",
        type: "tensor"
      },
      {
        start: 1,
        name: "b",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "AddV2",
    category: "arithmetic",
    inputs: [
      {
        start: 0,
        name: "a",
        type: "tensor"
      },
      {
        start: 1,
        name: "b",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "AddN",
    category: "arithmetic",
    inputs: [
      {
        start: 0,
        end: 0,
        name: "tensors",
        type: "tensors"
      }
    ]
  },
  {
    tfOpName: "BiasAdd",
    category: "arithmetic",
    inputs: [
      {
        start: 0,
        name: "a",
        type: "tensor"
      },
      {
        start: 1,
        name: "b",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      },
      {
        tfName: "data_format",
        name: "dataFormat",
        type: "string",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Sub",
    category: "arithmetic",
    inputs: [
      {
        start: 0,
        name: "a",
        type: "tensor"
      },
      {
        start: 1,
        name: "b",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "RealDiv",
    category: "arithmetic",
    inputs: [
      {
        start: 0,
        name: "a",
        type: "tensor"
      },
      {
        start: 1,
        name: "b",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Div",
    category: "arithmetic",
    inputs: [
      {
        start: 0,
        name: "a",
        type: "tensor"
      },
      {
        start: 1,
        name: "b",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "DivNoNan",
    category: "arithmetic",
    inputs: [
      {
        start: 0,
        name: "a",
        type: "tensor"
      },
      {
        start: 1,
        name: "b",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "FloorDiv",
    category: "arithmetic",
    inputs: [
      {
        start: 0,
        name: "a",
        type: "tensor"
      },
      {
        start: 1,
        name: "b",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Mul",
    category: "arithmetic",
    inputs: [
      {
        start: 0,
        name: "a",
        type: "tensor"
      },
      {
        start: 1,
        name: "b",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Maximum",
    category: "arithmetic",
    inputs: [
      {
        start: 0,
        name: "a",
        type: "tensor"
      },
      {
        start: 1,
        name: "b",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Minimum",
    category: "arithmetic",
    inputs: [
      {
        start: 0,
        name: "a",
        type: "tensor"
      },
      {
        start: 1,
        name: "b",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Pow",
    category: "arithmetic",
    inputs: [
      {
        start: 0,
        name: "a",
        type: "tensor"
      },
      {
        start: 1,
        name: "b",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "SquaredDifference",
    category: "arithmetic",
    inputs: [
      {
        start: 0,
        name: "a",
        type: "tensor"
      },
      {
        start: 1,
        name: "b",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Mod",
    category: "arithmetic",
    inputs: [
      {
        start: 0,
        name: "a",
        type: "tensor"
      },
      {
        start: 1,
        name: "b",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "FloorMod",
    category: "arithmetic",
    inputs: [
      {
        start: 0,
        name: "a",
        type: "tensor"
      },
      {
        start: 1,
        name: "b",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  }
], _y = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  json: Oy
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Ay = [
  {
    tfOpName: "Abs",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Acos",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Asin",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Atan",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Atan2",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "y",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Ceil",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "ClipByValue",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "clipValueMin",
        type: "number"
      },
      {
        start: 2,
        name: "clipValueMax",
        type: "number"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Complex",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "real",
        type: "tensor"
      },
      {
        start: 1,
        name: "imag",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "ComplexAbs",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Cos",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Cosh",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Elu",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Exp",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Floor",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Log",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Imag",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      },
      {
        tfName: "Tout",
        name: "outputType",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Neg",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Real",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      },
      {
        tfName: "Tout",
        name: "outputType",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Prelu",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "alpha",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Relu",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Relu6",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Selu",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Sigmoid",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Sin",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Sinh",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Sqrt",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Rsqrt",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Square",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Tan",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Tanh",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Sign",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Round",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Expm1",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Log1p",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Reciprocal",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Softplus",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Asinh",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Acosh",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Atanh",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Erf",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Prod",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "axes",
        type: "number[]"
      }
    ],
    attrs: [
      {
        tfName: "keep_dims",
        name: "keepDims",
        type: "bool",
        notSupported: !0
      },
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "LeakyRelu",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "alpha",
        name: "alpha",
        type: "number",
        defaultValue: 0.2
      },
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "IsNan",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  }
], Ey = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  json: Ay
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const ky = [
  {
    tfOpName: "EmptyTensorList",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "elementShape",
        type: "shape"
      },
      {
        start: 1,
        name: "maxNumElements",
        type: "number"
      }
    ],
    attrs: [
      {
        tfName: "element_dtype",
        name: "elementDType",
        type: "dtype"
      }
    ]
  },
  {
    tfOpName: "LoopCond",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "pred",
        type: "tensor"
      }
    ]
  },
  {
    tfOpName: "Switch",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "data",
        type: "tensor"
      },
      {
        start: 1,
        name: "pred",
        type: "tensor"
      }
    ]
  },
  {
    tfOpName: "Merge",
    category: "control",
    inputs: [
      {
        start: 0,
        end: 0,
        name: "tensors",
        type: "tensors"
      }
    ]
  },
  {
    tfOpName: "Enter",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "tensor",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      },
      {
        tfName: "frame_name",
        name: "frameName",
        type: "string"
      },
      {
        tfName: "is_constant",
        name: "isConstant",
        type: "bool"
      }
    ]
  },
  {
    tfOpName: "Exit",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "tensor",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "NextIteration",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "tensor",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "TensorArrayV3",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "size",
        type: "number"
      }
    ],
    attrs: [
      {
        tfName: "dtype",
        name: "dtype",
        type: "dtype"
      },
      {
        tfName: "element_shape",
        name: "elementShape",
        type: "shape"
      },
      {
        tfName: "dynamic_size",
        name: "dynamicSize",
        type: "bool"
      },
      {
        tfName: "clear_after_read",
        name: "clearAfterRead",
        type: "bool"
      },
      {
        tfName: "identical_element_shapes",
        name: "identicalElementShapes",
        type: "bool"
      },
      {
        tfName: "tensor_array_name",
        name: "name",
        type: "string"
      }
    ]
  },
  {
    tfOpName: "TensorArrayWriteV3",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "tensorArrayId",
        type: "tensor"
      },
      {
        start: 1,
        name: "index",
        type: "number"
      },
      {
        start: 2,
        name: "tensor",
        type: "tensor"
      },
      {
        start: 3,
        name: "flowIn",
        type: "number"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "TensorArrayReadV3",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "tensorArrayId",
        type: "tensor"
      },
      {
        start: 1,
        name: "index",
        type: "number"
      },
      {
        start: 2,
        name: "flowIn",
        type: "number"
      }
    ],
    attrs: [
      {
        tfName: "dtype",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "TensorArrayGatherV3",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "tensorArrayId",
        type: "tensor"
      },
      {
        start: 1,
        name: "indices",
        type: "number[]"
      },
      {
        start: 2,
        name: "flowIn",
        type: "number"
      }
    ],
    attrs: [
      {
        tfName: "dtype",
        name: "dtype",
        type: "dtype"
      },
      {
        tfName: "element_shape",
        name: "elementShape",
        type: "shape"
      }
    ]
  },
  {
    tfOpName: "TensorArrayScatterV3",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "tensorArrayId",
        type: "tensor"
      },
      {
        start: 1,
        name: "indices",
        type: "number[]"
      },
      {
        start: 2,
        name: "tensor",
        type: "tensor"
      },
      {
        start: 3,
        name: "flowIn",
        type: "number"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype"
      }
    ]
  },
  {
    tfOpName: "TensorArrayConcatV3",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "tensorArrayId",
        type: "tensor"
      },
      {
        start: 1,
        name: "flowIn",
        type: "number"
      }
    ],
    attrs: [
      {
        tfName: "dtype",
        name: "dtype",
        type: "dtype"
      },
      {
        tfName: "element_shape_except0",
        name: "elementShapeExcept0",
        type: "shape",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "TensorArraySplitV3",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "tensorArrayId",
        type: "tensor"
      },
      {
        start: 1,
        name: "tensor",
        type: "tensor"
      },
      {
        start: 2,
        name: "lengths",
        type: "number[]"
      },
      {
        start: 3,
        name: "flowIn",
        type: "number"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype"
      }
    ]
  },
  {
    tfOpName: "TensorArraySizeV3",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "tensorArrayId",
        type: "tensor"
      },
      {
        start: 1,
        name: "flowIn",
        type: "number"
      }
    ]
  },
  {
    tfOpName: "TensorArrayCloseV3",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "tensorArrayId",
        type: "tensor"
      }
    ]
  },
  {
    tfOpName: "StatelessIf",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "cond",
        type: "tensor"
      },
      {
        start: 1,
        end: 0,
        name: "args",
        type: "tensors"
      }
    ],
    attrs: [
      {
        tfName: "then_branch",
        name: "thenBranch",
        type: "func"
      },
      {
        tfName: "else_branch",
        name: "elseBranch",
        type: "func"
      }
    ]
  },
  {
    tfOpName: "If",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "cond",
        type: "tensor"
      },
      {
        start: 1,
        end: 0,
        name: "args",
        type: "tensors"
      }
    ],
    attrs: [
      {
        tfName: "then_branch",
        name: "thenBranch",
        type: "func"
      },
      {
        tfName: "else_branch",
        name: "elseBranch",
        type: "func"
      }
    ]
  },
  {
    tfOpName: "StatelessWhile",
    category: "control",
    inputs: [
      {
        start: 0,
        end: 0,
        name: "args",
        type: "tensors"
      }
    ],
    attrs: [
      {
        tfName: "cond",
        name: "cond",
        type: "func"
      },
      {
        tfName: "body",
        name: "body",
        type: "func"
      }
    ]
  },
  {
    tfOpName: "While",
    category: "control",
    inputs: [
      {
        start: 0,
        end: 0,
        name: "args",
        type: "tensors"
      }
    ],
    attrs: [
      {
        tfName: "cond",
        name: "cond",
        type: "func"
      },
      {
        tfName: "body",
        name: "body",
        type: "func"
      }
    ]
  },
  {
    tfOpName: "TensorListScatter",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "tensor",
        type: "tensor"
      },
      {
        start: 1,
        name: "indices",
        type: "number[]"
      },
      {
        start: 2,
        name: "elementShape",
        type: "shape"
      }
    ],
    attrs: [
      {
        tfName: "element_dtype",
        name: "elementDType",
        type: "dtype"
      }
    ]
  },
  {
    tfOpName: "TensorListScatterV2",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "tensor",
        type: "tensor"
      },
      {
        start: 1,
        name: "indices",
        type: "number[]"
      },
      {
        start: 2,
        name: "elementShape",
        type: "shape"
      },
      {
        start: 3,
        name: "numElements",
        type: "number"
      }
    ],
    attrs: [
      {
        tfName: "element_dtype",
        name: "elementDType",
        type: "dtype"
      }
    ]
  },
  {
    tfOpName: "TensorListGather",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "tensorListId",
        type: "tensor"
      },
      {
        start: 1,
        name: "indices",
        type: "number[]"
      },
      {
        start: 2,
        name: "elementShape",
        type: "shape"
      }
    ],
    attrs: [
      {
        tfName: "element_dtype",
        name: "elementDType",
        type: "dtype"
      }
    ]
  },
  {
    tfOpName: "TensorListGetItem",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "tensorListId",
        type: "tensor"
      },
      {
        start: 1,
        name: "index",
        type: "number"
      },
      {
        start: 2,
        name: "elementShape",
        type: "shape"
      }
    ],
    attrs: [
      {
        tfName: "element_dtype",
        name: "elementDType",
        type: "dtype"
      }
    ]
  },
  {
    tfOpName: "TensorListSetItem",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "tensorListId",
        type: "tensor"
      },
      {
        start: 1,
        name: "index",
        type: "number"
      },
      {
        start: 2,
        name: "tensor",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "element_dtype",
        name: "elementDType",
        type: "dtype"
      }
    ]
  },
  {
    tfOpName: "TensorListReserve",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "elementShape",
        type: "shape"
      },
      {
        start: 1,
        name: "numElements",
        type: "number"
      }
    ],
    attrs: [
      {
        tfName: "element_dtype",
        name: "elementDType",
        type: "dtype"
      }
    ]
  },
  {
    tfOpName: "TensorListFromTensor",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "tensor",
        type: "tensor"
      },
      {
        start: 1,
        name: "elementShape",
        type: "shape"
      }
    ],
    attrs: [
      {
        tfName: "element_dtype",
        name: "elementDType",
        type: "dtype"
      }
    ]
  },
  {
    tfOpName: "TensorListStack",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "tensorListId",
        type: "tensor"
      },
      {
        start: 1,
        name: "elementShape",
        type: "shape"
      }
    ],
    attrs: [
      {
        tfName: "element_dtype",
        name: "elementDType",
        type: "dtype"
      },
      {
        tfName: "num_elements",
        name: "numElements",
        type: "dtype"
      }
    ]
  },
  {
    tfOpName: "TensorListSplit",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "tensor",
        type: "tensor"
      },
      {
        start: 1,
        name: "elementShape",
        type: "shape"
      },
      {
        start: 2,
        name: "lengths",
        type: "number[]"
      }
    ],
    attrs: [
      {
        tfName: "element_dtype",
        name: "elementDType",
        type: "dtype"
      }
    ]
  },
  {
    tfOpName: "TensorListConcat",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "tensorListId",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "element_shape",
        name: "elementShape",
        type: "shape"
      },
      {
        tfName: "element_dtype",
        name: "elementDType",
        type: "dtype"
      }
    ]
  },
  {
    tfOpName: "TensorListConcatV2",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "tensorListId",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "element_shape",
        name: "elementShape",
        type: "shape"
      },
      {
        tfName: "element_dtype",
        name: "elementDType",
        type: "dtype"
      }
    ]
  },
  {
    tfOpName: "TensorListPopBack",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "tensorListId",
        type: "tensor"
      },
      {
        start: 1,
        name: "elementShape",
        type: "shape"
      }
    ],
    attrs: [
      {
        tfName: "element_dtype",
        name: "elementDType",
        type: "dtype"
      }
    ]
  },
  {
    tfOpName: "TensorListPushBack",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "tensorListId",
        type: "tensor"
      },
      {
        start: 1,
        name: "tensor",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "element_dtype",
        name: "elementDType",
        type: "dtype"
      }
    ]
  },
  {
    tfOpName: "TensorListLength",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "tensorListId",
        type: "tensor"
      }
    ]
  },
  {
    tfOpName: "TensorListResize",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "tensorListId",
        type: "tensor"
      },
      {
        start: 1,
        name: "size",
        type: "number"
      }
    ]
  }
], $y = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  json: ky
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Dy = [
  {
    tfOpName: "AvgPool",
    category: "convolution",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "strides",
        name: "strides",
        type: "number[]"
      },
      {
        tfName: "padding",
        name: "pad",
        type: "string"
      },
      {
        tfName: "data_format",
        name: "dataFormat",
        type: "string",
        notSupported: !0
      },
      {
        tfName: "ksize",
        name: "kernelSize",
        type: "number[]"
      },
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "MaxPool",
    category: "convolution",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "strides",
        name: "strides",
        type: "number[]"
      },
      {
        tfName: "padding",
        name: "pad",
        type: "string"
      },
      {
        tfName: "data_format",
        name: "dataFormat",
        type: "string",
        notSupported: !0
      },
      {
        tfName: "ksize",
        name: "kernelSize",
        type: "number[]"
      },
      {
        tfName: "explicit_paddings",
        name: "explicitPaddings",
        type: "number[]",
        defaultValue: [],
        notSupported: !0
      },
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "MaxPoolWithArgmax",
    category: "convolution",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "strides",
        name: "strides",
        type: "number[]"
      },
      {
        tfName: "padding",
        name: "pad",
        type: "string"
      },
      {
        tfName: "ksize",
        name: "kernelSize",
        type: "number[]"
      },
      {
        tfName: "include_batch_in_index",
        name: "includeBatchInIndex",
        type: "bool"
      },
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "AvgPool3D",
    category: "convolution",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "strides",
        name: "strides",
        type: "number[]"
      },
      {
        tfName: "padding",
        name: "pad",
        type: "string"
      },
      {
        tfName: "data_format",
        name: "dataFormat",
        type: "string",
        notSupported: !0
      },
      {
        tfName: "ksize",
        name: "kernelSize",
        type: "number[]"
      },
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "MaxPool3D",
    category: "convolution",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "strides",
        name: "strides",
        type: "number[]"
      },
      {
        tfName: "padding",
        name: "pad",
        type: "string"
      },
      {
        tfName: "data_format",
        name: "dataFormat",
        type: "string",
        notSupported: !0
      },
      {
        tfName: "ksize",
        name: "kernelSize",
        type: "number[]"
      },
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Conv1D",
    category: "convolution",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "filter",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "stride",
        name: "stride",
        type: "number"
      },
      {
        tfName: "padding",
        name: "pad",
        type: "string"
      },
      {
        tfName: "data_format",
        name: "dataFormat",
        type: "string",
        defaultValue: "NWC"
      },
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      },
      {
        tfName: "dilation",
        name: "dilation",
        type: "number",
        defaultValue: 1
      }
    ]
  },
  {
    tfOpName: "Conv2D",
    category: "convolution",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "filter",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      },
      {
        tfName: "strides",
        name: "strides",
        type: "number[]"
      },
      {
        tfName: "padding",
        name: "pad",
        type: "string"
      },
      {
        tfName: "useCudnnOnGpu",
        name: "useCudnnOnGpu",
        type: "bool"
      },
      {
        tfName: "data_format",
        name: "dataFormat",
        type: "string",
        defaultValue: "NHWC"
      },
      {
        tfName: "explicit_paddings",
        name: "explicitPaddings",
        type: "number[]",
        defaultValue: []
      },
      {
        tfName: "dilations",
        name: "dilations",
        type: "number[]"
      }
    ]
  },
  {
    tfOpName: "_FusedConv2D",
    category: "convolution",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "filter",
        type: "tensor"
      },
      {
        start: 2,
        end: 0,
        name: "args",
        type: "tensors"
      }
    ],
    attrs: [
      {
        tfName: "num_args",
        name: "numArgs",
        type: "number"
      },
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      },
      {
        tfName: "strides",
        name: "strides",
        type: "number[]"
      },
      {
        tfName: "padding",
        name: "pad",
        type: "string"
      },
      {
        tfName: "explicit_paddings",
        name: "explicitPaddings",
        type: "number[]",
        defaultValue: []
      },
      {
        tfName: "use_cudnn_on_gpu",
        name: "useCudnnOnGpu",
        type: "bool",
        defaultValue: !0
      },
      {
        tfName: "data_format",
        name: "dataFormat",
        type: "string",
        defaultValue: "NHWC"
      },
      {
        tfName: "dilations",
        name: "dilations",
        type: "number[]",
        defaultValue: [
          1,
          1,
          1,
          1
        ]
      },
      {
        tfName: "fused_ops",
        name: "fusedOps",
        type: "string[]",
        defaultValue: []
      },
      {
        tfName: "epsilon",
        name: "epsilon",
        type: "number",
        defaultValue: 1e-4
      },
      {
        tfName: "leakyrelu_alpha",
        name: "leakyreluAlpha",
        type: "number",
        defaultValue: 0.2
      }
    ]
  },
  {
    tfOpName: "Conv2DBackpropInput",
    category: "convolution",
    inputs: [
      {
        start: 2,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "filter",
        type: "tensor"
      },
      {
        start: 0,
        name: "outputShape",
        type: "number[]"
      }
    ],
    attrs: [
      {
        tfName: "strides",
        name: "strides",
        type: "number[]"
      },
      {
        tfName: "padding",
        name: "pad",
        type: "string"
      },
      {
        tfName: "data_format",
        name: "dataFormat",
        type: "string",
        notSupported: !0
      },
      {
        tfName: "explicit_paddings",
        name: "explicitPaddings",
        type: "number[]",
        defaultValue: []
      },
      {
        tfName: "dilations",
        name: "dilations",
        type: "number[]",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "DepthwiseConv2d",
    category: "convolution",
    inputs: [
      {
        start: 0,
        name: "input",
        type: "tensor"
      },
      {
        start: 1,
        name: "filter",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "strides",
        name: "strides",
        type: "number[]"
      },
      {
        tfName: "padding",
        name: "pad",
        type: "string"
      },
      {
        tfName: "data_format",
        name: "dataFormat",
        type: "string",
        defaultValue: "NHWC"
      },
      {
        tfName: "explicit_paddings",
        name: "explicitPaddings",
        type: "number[]",
        defaultValue: []
      },
      {
        tfName: "dilations",
        name: "dilations",
        type: "number[]"
      }
    ]
  },
  {
    tfOpName: "DepthwiseConv2dNative",
    category: "convolution",
    inputs: [
      {
        start: 0,
        name: "input",
        type: "tensor"
      },
      {
        start: 1,
        name: "filter",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "strides",
        name: "strides",
        type: "number[]"
      },
      {
        tfName: "padding",
        name: "pad",
        type: "string"
      },
      {
        tfName: "data_format",
        name: "dataFormat",
        type: "string",
        defaultValue: "NHWC"
      },
      {
        tfName: "explicit_paddings",
        name: "explicitPaddings",
        type: "number[]",
        defaultValue: []
      },
      {
        tfName: "dilations",
        name: "dilations",
        type: "number[]"
      }
    ]
  },
  {
    tfOpName: "FusedDepthwiseConv2dNative",
    category: "convolution",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "filter",
        type: "tensor"
      },
      {
        start: 2,
        end: 0,
        name: "args",
        type: "tensors"
      }
    ],
    attrs: [
      {
        tfName: "num_args",
        name: "numArgs",
        type: "number"
      },
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      },
      {
        tfName: "strides",
        name: "strides",
        type: "number[]"
      },
      {
        tfName: "padding",
        name: "pad",
        type: "string"
      },
      {
        tfName: "data_format",
        name: "dataFormat",
        type: "string",
        defaultValue: "NHWC"
      },
      {
        tfName: "dilations",
        name: "dilations",
        type: "number[]",
        defaultValue: [
          1,
          1,
          1,
          1
        ]
      },
      {
        tfName: "fused_ops",
        name: "fusedOps",
        type: "string[]",
        defaultValue: []
      },
      {
        tfName: "explicit_paddings",
        name: "explicitPaddings",
        type: "number[]",
        defaultValue: []
      }
    ]
  },
  {
    tfOpName: "Conv3D",
    category: "convolution",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "filter",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "strides",
        name: "strides",
        type: "number[]"
      },
      {
        tfName: "padding",
        name: "pad",
        type: "string"
      },
      {
        tfName: "data_format",
        name: "dataFormat",
        type: "string",
        defaultValue: "NHWC"
      },
      {
        tfName: "dilations",
        name: "dilations",
        type: "number[]"
      }
    ]
  },
  {
    tfOpName: "Dilation2D",
    category: "convolution",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "filter",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "strides",
        name: "strides",
        type: "number[]"
      },
      {
        tfName: "rates",
        name: "dilations",
        type: "number[]"
      },
      {
        tfName: "padding",
        name: "pad",
        type: "string"
      }
    ]
  }
], Iy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  json: Dy
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Cy = [
  {
    tfOpName: "Fill",
    category: "creation",
    inputs: [
      {
        start: 0,
        name: "shape",
        type: "number[]"
      },
      {
        start: 1,
        name: "value",
        type: "number"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype"
      }
    ]
  },
  {
    tfOpName: "LinSpace",
    category: "creation",
    inputs: [
      {
        start: 0,
        name: "start",
        type: "number"
      },
      {
        start: 1,
        name: "stop",
        type: "number"
      },
      {
        start: 2,
        name: "num",
        type: "number"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "OneHot",
    category: "creation",
    inputs: [
      {
        start: 0,
        name: "indices",
        type: "tensor"
      },
      {
        start: 1,
        name: "depth",
        type: "number"
      },
      {
        start: 2,
        name: "onValue",
        type: "number",
        defaultValue: 1
      },
      {
        start: 3,
        name: "offValue",
        type: "number",
        defaultValue: 0
      }
    ],
    attrs: [
      {
        tfName: "axis",
        name: "axis",
        type: "number",
        notSupported: !0
      },
      {
        tfName: "T",
        name: "dtype",
        type: "dtype"
      }
    ]
  },
  {
    tfOpName: "Ones",
    category: "creation",
    inputs: [
      {
        start: 0,
        name: "shape",
        type: "number[]"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype"
      }
    ]
  },
  {
    tfOpName: "OnesLike",
    category: "creation",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "dtype",
        name: "dtype",
        type: "dtype"
      }
    ]
  },
  {
    tfOpName: "RandomStandardNormal",
    category: "creation",
    inputs: [
      {
        start: 0,
        name: "shape",
        type: "number[]"
      }
    ],
    attrs: [
      {
        tfName: "seed",
        name: "seed",
        type: "number",
        defaultValue: 0
      },
      {
        tfName: "seed2",
        name: "seed2",
        type: "number",
        defaultValue: 0,
        notSupported: !0
      },
      {
        tfName: "dtype",
        name: "dtype",
        type: "dtype"
      },
      {
        tfName: "T",
        name: "T",
        type: "number",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "RandomUniform",
    category: "creation",
    inputs: [
      {
        start: 0,
        name: "shape",
        type: "number[]"
      }
    ],
    attrs: [
      {
        tfName: "minval",
        name: "minval",
        type: "number",
        defaultValue: 0
      },
      {
        tfName: "maxval",
        name: "maxval",
        type: "number",
        defaultValue: 1
      },
      {
        tfName: "dtype",
        name: "dtype",
        type: "dtype"
      },
      {
        tfName: "seed",
        name: "seed",
        type: "number",
        defaultValue: 0
      },
      {
        tfName: "seed2",
        name: "seed2",
        type: "number",
        defaultValue: 0,
        notSupported: !0
      },
      {
        tfName: "T",
        name: "T",
        type: "number",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Range",
    category: "creation",
    inputs: [
      {
        start: 0,
        name: "start",
        type: "number"
      },
      {
        start: 1,
        name: "stop",
        type: "number"
      },
      {
        start: 2,
        name: "step",
        type: "number",
        defaultValue: 0
      }
    ],
    attrs: [
      {
        tfName: "Tidx",
        name: "dtype",
        type: "dtype"
      }
    ]
  },
  {
    tfOpName: "TruncatedNormal",
    category: "creation",
    inputs: [
      {
        start: 0,
        name: "shape",
        type: "number[]"
      }
    ],
    attrs: [
      {
        tfName: "means",
        name: "mean",
        type: "number",
        defaultValue: 0
      },
      {
        tfName: "stddev",
        name: "stdDev",
        type: "number",
        defaultValue: 1
      },
      {
        tfName: "seed",
        name: "seed",
        type: "number"
      },
      {
        tfName: "seed2",
        name: "seed2",
        type: "number",
        defaultValue: 0,
        notSupported: !0
      },
      {
        tfName: "dtype",
        name: "dtype",
        type: "dtype"
      },
      {
        tfName: "T",
        name: "T",
        type: "number",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Zeros",
    category: "creation",
    inputs: [
      {
        start: 0,
        name: "shape",
        type: "number[]"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype"
      }
    ]
  },
  {
    tfOpName: "ZerosLike",
    category: "creation",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype"
      }
    ]
  },
  {
    tfOpName: "Multinomial",
    category: "creation",
    inputs: [
      {
        start: 0,
        name: "logits",
        type: "tensor"
      },
      {
        start: 1,
        name: "numSamples",
        type: "number"
      }
    ],
    attrs: [
      {
        tfName: "seed",
        name: "seed",
        type: "number"
      },
      {
        tfName: "seed2",
        name: "seed2",
        type: "number"
      },
      {
        tfName: "T",
        name: "dtype",
        type: "dtype"
      },
      {
        tfName: "output_dtype",
        name: "output_dtype",
        type: "dtype"
      }
    ]
  }
], xy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  json: Cy
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const zy = [
  {
    tfOpName: "NonMaxSuppressionV2",
    category: "dynamic",
    inputs: [
      {
        start: 0,
        name: "boxes",
        type: "tensor"
      },
      {
        start: 1,
        name: "scores",
        type: "tensor"
      },
      {
        start: 2,
        name: "maxOutputSize",
        type: "number"
      },
      {
        start: 3,
        name: "iouThreshold",
        type: "number"
      }
    ]
  },
  {
    tfOpName: "NonMaxSuppressionV3",
    category: "dynamic",
    inputs: [
      {
        start: 0,
        name: "boxes",
        type: "tensor"
      },
      {
        start: 1,
        name: "scores",
        type: "tensor"
      },
      {
        start: 2,
        name: "maxOutputSize",
        type: "number"
      },
      {
        start: 3,
        name: "iouThreshold",
        type: "number"
      },
      {
        start: 4,
        name: "scoreThreshold",
        type: "number"
      }
    ]
  },
  {
    tfOpName: "NonMaxSuppressionV4",
    category: "dynamic",
    inputs: [
      {
        start: 0,
        name: "boxes",
        type: "tensor"
      },
      {
        start: 1,
        name: "scores",
        type: "tensor"
      },
      {
        start: 2,
        name: "maxOutputSize",
        type: "number"
      },
      {
        start: 3,
        name: "iouThreshold",
        type: "number"
      },
      {
        start: 4,
        name: "scoreThreshold",
        type: "number"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      },
      {
        tfName: "T_threshold",
        name: "threshold",
        type: "dtype",
        notSupported: !0
      },
      {
        tfName: "pad_to_max_output_size",
        name: "padToMaxOutputSize",
        type: "bool"
      }
    ]
  },
  {
    tfOpName: "NonMaxSuppressionV5",
    category: "dynamic",
    inputs: [
      {
        start: 0,
        name: "boxes",
        type: "tensor"
      },
      {
        start: 1,
        name: "scores",
        type: "tensor"
      },
      {
        start: 2,
        name: "maxOutputSize",
        type: "number"
      },
      {
        start: 3,
        name: "iouThreshold",
        type: "number"
      },
      {
        start: 4,
        name: "scoreThreshold",
        type: "number"
      },
      {
        start: 5,
        name: "softNmsSigma",
        type: "number"
      }
    ]
  },
  {
    tfOpName: "Where",
    category: "dynamic",
    inputs: [
      {
        start: 0,
        name: "condition",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "ListDiff",
    category: "dynamic",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "y",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  }
], Ly = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  json: zy
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Fy = [
  {
    tfOpName: "LowerBound",
    category: "evaluation",
    inputs: [
      {
        start: 0,
        name: "sortedSequence",
        type: "tensor"
      },
      {
        start: 1,
        name: "values",
        type: "tensor"
      }
    ]
  },
  {
    tfOpName: "TopKV2",
    category: "evaluation",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "k",
        type: "number"
      }
    ],
    attrs: [
      {
        tfName: "sorted",
        name: "sorted",
        type: "bool"
      }
    ]
  },
  {
    tfOpName: "UpperBound",
    category: "evaluation",
    inputs: [
      {
        start: 0,
        name: "sortedSequence",
        type: "tensor"
      },
      {
        start: 1,
        name: "values",
        type: "tensor"
      }
    ]
  },
  {
    tfOpName: "Unique",
    category: "evaluation",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ]
  },
  {
    tfOpName: "UniqueV2",
    category: "evaluation",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "axis",
        type: "number"
      }
    ]
  }
], Py = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  json: Fy
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Vy = [
  {
    tfOpName: "PlaceholderWithDefault",
    category: "graph",
    inputs: [
      {
        start: 0,
        name: "default",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "shape",
        name: "shape",
        type: "shape"
      },
      {
        tfName: "dtype",
        name: "dtype",
        type: "dtype"
      }
    ]
  },
  {
    tfOpName: "Placeholder",
    category: "graph",
    attrs: [
      {
        tfName: "shape",
        name: "shape",
        type: "shape"
      },
      {
        tfName: "dtype",
        name: "dtype",
        type: "dtype"
      }
    ]
  },
  {
    tfOpName: "Const",
    category: "graph"
  },
  {
    tfOpName: "Identity",
    category: "graph",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ]
  },
  {
    tfOpName: "IdentityN",
    category: "graph",
    inputs: [
      {
        start: 0,
        end: 0,
        name: "x",
        type: "tensors"
      }
    ]
  },
  {
    tfOpName: "Snapshot",
    category: "graph",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ]
  },
  {
    tfOpName: "Rank",
    category: "graph",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ]
  },
  {
    tfOpName: "Size",
    category: "graph",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ]
  },
  {
    tfOpName: "Shape",
    category: "graph",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ]
  },
  {
    tfOpName: "ShapeN",
    category: "graph",
    inputs: [
      {
        start: 0,
        end: 0,
        name: "x",
        type: "tensors"
      }
    ]
  },
  {
    tfOpName: "Print",
    category: "graph",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "data",
        type: "tensors"
      }
    ],
    attrs: [
      {
        tfName: "message",
        name: "message",
        type: "string"
      },
      {
        tfName: "first_n",
        name: "firstN",
        type: "number",
        notSupported: !0
      },
      {
        tfName: "summarize",
        name: "summarize",
        type: "number",
        defaultValue: 3
      }
    ]
  },
  {
    tfOpName: "NoOp",
    category: "graph",
    inputs: []
  },
  {
    tfOpName: "StopGradient",
    category: "graph",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ]
  },
  {
    tfOpName: "FakeQuantWithMinMaxVars",
    category: "graph",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "min",
        name: "min",
        type: "number"
      },
      {
        tfName: "max",
        name: "max",
        type: "number"
      }
    ]
  }
], Ry = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  json: Vy
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const jy = [
  {
    tfOpName: "HashTable",
    category: "hash_table",
    inputs: [],
    attrs: [
      {
        tfName: "shared_name",
        name: "sharedName",
        type: "string"
      },
      {
        tfName: "use_node_name_sharing",
        name: "useNodeNameSharing",
        type: "bool"
      },
      {
        tfName: "key_dtype",
        name: "keyDType",
        type: "dtype"
      },
      {
        tfName: "value_dtype",
        name: "valueDType",
        type: "dtype"
      }
    ]
  },
  {
    tfOpName: "HashTableV2",
    category: "hash_table",
    inputs: [],
    attrs: [
      {
        tfName: "shared_name",
        name: "sharedName",
        type: "string"
      },
      {
        tfName: "use_node_name_sharing",
        name: "useNodeNameSharing",
        type: "bool"
      },
      {
        tfName: "key_dtype",
        name: "keyDType",
        type: "dtype"
      },
      {
        tfName: "value_dtype",
        name: "valueDType",
        type: "dtype"
      }
    ]
  },
  {
    tfOpName: "LookupTableImport",
    category: "hash_table",
    inputs: [
      {
        start: 0,
        name: "tableHandle",
        type: "tensor"
      },
      {
        start: 1,
        name: "keys",
        type: "tensor"
      },
      {
        start: 2,
        name: "values",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "Tin",
        name: "tIn",
        type: "dtype",
        notSupported: !0
      },
      {
        tfName: "Tout",
        name: "tOut",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "LookupTableImportV2",
    category: "hash_table",
    inputs: [
      {
        start: 0,
        name: "tableHandle",
        type: "tensor"
      },
      {
        start: 1,
        name: "keys",
        type: "tensor"
      },
      {
        start: 2,
        name: "values",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "Tin",
        name: "tIn",
        type: "dtype",
        notSupported: !0
      },
      {
        tfName: "Tout",
        name: "tOut",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "LookupTableFind",
    category: "hash_table",
    inputs: [
      {
        start: 0,
        name: "tableHandle",
        type: "tensor"
      },
      {
        start: 1,
        name: "keys",
        type: "tensor"
      },
      {
        start: 2,
        name: "defaultValue",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "Tin",
        name: "tIn",
        type: "dtype",
        notSupported: !0
      },
      {
        tfName: "Tout",
        name: "tOut",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "LookupTableFindV2",
    category: "hash_table",
    inputs: [
      {
        start: 0,
        name: "tableHandle",
        type: "tensor"
      },
      {
        start: 1,
        name: "keys",
        type: "tensor"
      },
      {
        start: 2,
        name: "defaultValue",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "Tin",
        name: "tIn",
        type: "dtype",
        notSupported: !0
      },
      {
        tfName: "Tout",
        name: "tOut",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "LookupTableSize",
    category: "hash_table",
    inputs: [
      {
        start: 0,
        name: "tableHandle",
        type: "tensor"
      }
    ]
  },
  {
    tfOpName: "LookupTableSizeV2",
    category: "hash_table",
    inputs: [
      {
        start: 0,
        name: "tableHandle",
        type: "tensor"
      }
    ]
  }
], By = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  json: jy
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Hy = [
  {
    tfOpName: "ResizeBilinear",
    category: "image",
    inputs: [
      {
        start: 0,
        name: "images",
        type: "tensor"
      },
      {
        start: 1,
        name: "size",
        type: "number[]"
      }
    ],
    attrs: [
      {
        tfName: "align_corners",
        name: "alignCorners",
        type: "bool"
      },
      {
        tfName: "half_pixel_centers",
        name: "halfPixelCenters",
        type: "bool"
      },
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "ResizeNearestNeighbor",
    category: "image",
    inputs: [
      {
        start: 0,
        name: "images",
        type: "tensor"
      },
      {
        start: 1,
        name: "size",
        type: "number[]"
      }
    ],
    attrs: [
      {
        tfName: "align_corners",
        name: "alignCorners",
        type: "bool"
      },
      {
        tfName: "half_pixel_centers",
        name: "halfPixelCenters",
        type: "bool"
      },
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "CropAndResize",
    category: "image",
    inputs: [
      {
        start: 0,
        name: "image",
        type: "tensor"
      },
      {
        start: 1,
        name: "boxes",
        type: "tensor"
      },
      {
        start: 2,
        name: "boxInd",
        type: "tensor"
      },
      {
        start: 3,
        name: "cropSize",
        type: "number[]"
      }
    ],
    attrs: [
      {
        tfName: "method",
        name: "method",
        type: "string"
      },
      {
        tfName: "extrapolation_value",
        name: "extrapolationValue",
        type: "number"
      }
    ]
  },
  {
    tfOpName: "ImageProjectiveTransformV3",
    category: "image",
    inputs: [
      {
        start: 0,
        name: "images",
        type: "tensor"
      },
      {
        start: 1,
        name: "transforms",
        type: "tensor"
      },
      {
        start: 2,
        name: "outputShape",
        type: "number[]"
      },
      {
        start: 3,
        name: "fillValue",
        type: "number"
      }
    ],
    attrs: [
      {
        tfName: "interpolation",
        name: "interpolation",
        type: "string"
      },
      {
        tfName: "fill_mode",
        name: "fillMode",
        type: "string"
      }
    ]
  }
], Wy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  json: Hy
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const qy = [
  {
    tfOpName: "Equal",
    category: "logical",
    inputs: [
      {
        start: 0,
        name: "a",
        type: "tensor"
      },
      {
        start: 1,
        name: "b",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "NotEqual",
    category: "logical",
    inputs: [
      {
        start: 0,
        name: "a",
        type: "tensor"
      },
      {
        start: 1,
        name: "b",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Greater",
    category: "logical",
    inputs: [
      {
        start: 0,
        name: "a",
        type: "tensor"
      },
      {
        start: 1,
        name: "b",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "GreaterEqual",
    category: "logical",
    inputs: [
      {
        start: 0,
        name: "a",
        type: "tensor"
      },
      {
        start: 1,
        name: "b",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Less",
    category: "logical",
    inputs: [
      {
        start: 0,
        name: "a",
        type: "tensor"
      },
      {
        start: 1,
        name: "b",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "LessEqual",
    category: "logical",
    inputs: [
      {
        start: 0,
        name: "a",
        type: "tensor"
      },
      {
        start: 1,
        name: "b",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "LogicalAnd",
    category: "logical",
    inputs: [
      {
        start: 0,
        name: "a",
        type: "tensor"
      },
      {
        start: 1,
        name: "b",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "LogicalNot",
    category: "logical",
    inputs: [
      {
        start: 0,
        name: "a",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "LogicalOr",
    category: "logical",
    inputs: [
      {
        start: 0,
        name: "a",
        type: "tensor"
      },
      {
        start: 1,
        name: "b",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Select",
    category: "logical",
    inputs: [
      {
        start: 0,
        name: "condition",
        type: "tensor"
      },
      {
        start: 1,
        name: "a",
        type: "tensor"
      },
      {
        start: 2,
        name: "b",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "SelectV2",
    category: "logical",
    inputs: [
      {
        start: 0,
        name: "condition",
        type: "tensor"
      },
      {
        start: 1,
        name: "a",
        type: "tensor"
      },
      {
        start: 2,
        name: "b",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  }
], Uy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  json: qy
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Gy = [
  {
    tfOpName: "_FusedMatMul",
    category: "matrices",
    inputs: [
      {
        start: 0,
        name: "a",
        type: "tensor"
      },
      {
        start: 1,
        name: "b",
        type: "tensor"
      },
      {
        start: 2,
        end: 0,
        name: "args",
        type: "tensors"
      }
    ],
    attrs: [
      {
        tfName: "num_args",
        name: "numArgs",
        type: "number"
      },
      {
        tfName: "fused_ops",
        name: "fusedOps",
        type: "string[]",
        defaultValue: []
      },
      {
        tfName: "epsilon",
        name: "epsilon",
        type: "number",
        defaultValue: 1e-4
      },
      {
        tfName: "transpose_a",
        name: "transposeA",
        type: "bool",
        defaultValue: !1
      },
      {
        tfName: "transpose_b",
        name: "transposeB",
        type: "bool",
        defaultValue: !1
      },
      {
        tfName: "leakyrelu_alpha",
        name: "leakyreluAlpha",
        type: "number",
        defaultValue: 0.2
      },
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "MatMul",
    category: "matrices",
    inputs: [
      {
        start: 0,
        name: "a",
        type: "tensor"
      },
      {
        start: 1,
        name: "b",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "transpose_a",
        name: "transposeA",
        type: "bool",
        defaultValue: !1
      },
      {
        tfName: "transpose_b",
        name: "transposeB",
        type: "bool",
        defaultValue: !1
      },
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "BatchMatMul",
    category: "matrices",
    inputs: [
      {
        start: 0,
        name: "a",
        type: "tensor"
      },
      {
        start: 1,
        name: "b",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "adj_x",
        name: "transposeA",
        type: "bool",
        defaultValue: !1
      },
      {
        tfName: "adj_y",
        name: "transposeB",
        type: "bool",
        defaultValue: !1
      },
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "BatchMatMulV2",
    category: "matrices",
    inputs: [
      {
        start: 0,
        name: "a",
        type: "tensor"
      },
      {
        start: 1,
        name: "b",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "adj_x",
        name: "transposeA",
        type: "bool",
        defaultValue: !1
      },
      {
        tfName: "adj_y",
        name: "transposeB",
        type: "bool",
        defaultValue: !1
      },
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Transpose",
    category: "matrices",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "perm",
        type: "number[]"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Einsum",
    category: "matrices",
    inputs: [
      {
        start: 0,
        end: 0,
        name: "tensors",
        type: "tensors"
      }
    ],
    attrs: [
      {
        tfName: "equation",
        name: "equation",
        type: "string"
      },
      {
        tfName: "N",
        name: "n",
        type: "number",
        defaultValue: 2
      },
      {
        tfName: "T",
        name: "dtype",
        type: "dtype"
      }
    ]
  }
], Ky = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  json: Gy
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Jy = [
  {
    tfOpName: "EuclideanNorm",
    category: "normalization",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "axis",
        type: "number[]"
      }
    ],
    attrs: [
      {
        tfName: "keep_dims",
        name: "keepDims",
        type: "bool",
        defaultValue: !1
      }
    ]
  },
  {
    tfOpName: "FusedBatchNorm",
    category: "normalization",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "scale",
        type: "tensor"
      },
      {
        start: 2,
        name: "offset",
        type: "tensor"
      },
      {
        start: 3,
        name: "mean",
        type: "tensor"
      },
      {
        start: 4,
        name: "variance",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "epsilon",
        name: "epsilon",
        type: "number",
        defaultValue: 1e-3
      },
      {
        tfName: "data_format",
        name: "dataFormat",
        type: "string",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "FusedBatchNormV2",
    category: "normalization",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "scale",
        type: "tensor"
      },
      {
        start: 2,
        name: "offset",
        type: "tensor"
      },
      {
        start: 3,
        name: "mean",
        type: "tensor"
      },
      {
        start: 4,
        name: "variance",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "epsilon",
        name: "epsilon",
        type: "number",
        defaultValue: 1e-3
      },
      {
        tfName: "data_format",
        name: "dataFormat",
        type: "string",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "FusedBatchNormV3",
    category: "normalization",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "scale",
        type: "tensor"
      },
      {
        start: 2,
        name: "offset",
        type: "tensor"
      },
      {
        start: 3,
        name: "mean",
        type: "tensor"
      },
      {
        start: 4,
        name: "variance",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "epsilon",
        name: "epsilon",
        type: "number",
        defaultValue: 1e-3
      },
      {
        tfName: "data_format",
        name: "dataFormat",
        type: "string",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "LRN",
    category: "normalization",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "depth_radius",
        name: "radius",
        type: "number",
        defaultValue: 5
      },
      {
        tfName: "bias",
        name: "bias",
        type: "number",
        defaultValue: 1
      },
      {
        tfName: "alpha",
        name: "alpha",
        type: "number",
        defaultValue: 1
      },
      {
        tfName: "beta",
        name: "beta",
        type: "number",
        defaultValue: 0.5
      }
    ]
  },
  {
    tfOpName: "Softmax",
    category: "normalization",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ]
  },
  {
    tfOpName: "LogSoftmax",
    category: "normalization",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ]
  },
  {
    tfOpName: "SparseToDense",
    category: "normalization",
    inputs: [
      {
        start: 0,
        name: "sparseIndices",
        type: "tensor"
      },
      {
        start: 1,
        name: "outputShape",
        type: "number[]"
      },
      {
        start: 2,
        name: "sparseValues",
        type: "tensor"
      },
      {
        start: 3,
        name: "defaultValue",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "validate_indices",
        name: "validateIndices",
        type: "bool",
        defaultValue: !0,
        notSupported: !0
      }
    ]
  }
], Qy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  json: Jy
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Xy = [
  {
    tfOpName: "Bincount",
    category: "reduction",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "size",
        type: "number"
      },
      {
        start: 2,
        name: "weights",
        type: "tensor"
      }
    ]
  },
  {
    tfOpName: "DenseBincount",
    category: "reduction",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "size",
        type: "number"
      },
      {
        start: 2,
        name: "weights",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "binary_output",
        name: "binaryOutput",
        type: "bool"
      }
    ]
  },
  {
    tfOpName: "Max",
    category: "reduction",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "axis",
        type: "number[]"
      }
    ],
    attrs: [
      {
        tfName: "keep_dims",
        name: "keepDims",
        type: "bool"
      }
    ]
  },
  {
    tfOpName: "Mean",
    category: "reduction",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "axis",
        type: "number[]"
      }
    ],
    attrs: [
      {
        tfName: "keep_dims",
        name: "keepDims",
        type: "bool"
      }
    ]
  },
  {
    tfOpName: "Min",
    category: "reduction",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "axis",
        type: "number[]"
      }
    ],
    attrs: [
      {
        tfName: "keep_dims",
        name: "keepDims",
        type: "bool"
      }
    ]
  },
  {
    tfOpName: "Sum",
    category: "reduction",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "axis",
        type: "number[]"
      }
    ],
    attrs: [
      {
        tfName: "keep_dims",
        name: "keepDims",
        type: "bool"
      }
    ]
  },
  {
    tfOpName: "All",
    category: "reduction",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "axis",
        type: "number[]"
      }
    ],
    attrs: [
      {
        tfName: "keep_dims",
        name: "keepDims",
        type: "bool"
      }
    ]
  },
  {
    tfOpName: "Any",
    category: "reduction",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "axis",
        type: "number[]"
      }
    ],
    attrs: [
      {
        tfName: "keep_dims",
        name: "keepDims",
        type: "bool"
      }
    ]
  },
  {
    tfOpName: "ArgMax",
    category: "reduction",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "axis",
        type: "number"
      }
    ]
  },
  {
    tfOpName: "ArgMin",
    category: "reduction",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "axis",
        type: "number"
      }
    ]
  },
  {
    tfOpName: "Prod",
    category: "reduction",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "axis",
        type: "number[]"
      }
    ],
    attrs: [
      {
        tfName: "keep_dims",
        name: "keepDims",
        type: "bool"
      }
    ]
  },
  {
    tfOpName: "Cumprod",
    category: "reduction",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "axis",
        type: "number"
      }
    ],
    attrs: [
      {
        tfName: "exclusive",
        name: "exclusive",
        type: "bool"
      },
      {
        tfName: "reverse",
        name: "reverse",
        type: "bool"
      }
    ]
  },
  {
    tfOpName: "Cumsum",
    category: "reduction",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "axis",
        type: "number"
      }
    ],
    attrs: [
      {
        tfName: "exclusive",
        name: "exclusive",
        type: "bool"
      },
      {
        tfName: "reverse",
        name: "reverse",
        type: "bool"
      }
    ]
  }
], Zy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  json: Xy
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Yy = [
  {
    tfOpName: "ConcatV2",
    category: "slice_join",
    inputs: [
      {
        start: 0,
        end: -1,
        name: "tensors",
        type: "tensors"
      },
      {
        start: -1,
        name: "axis",
        type: "number"
      }
    ],
    attrs: [
      {
        tfName: "N",
        name: "n",
        type: "number",
        defaultValue: 2
      }
    ]
  },
  {
    tfOpName: "Concat",
    category: "slice_join",
    inputs: [
      {
        start: 1,
        end: 0,
        name: "tensors",
        type: "tensors"
      },
      {
        start: 0,
        name: "axis",
        type: "number"
      }
    ],
    attrs: [
      {
        tfName: "N",
        name: "n",
        type: "number",
        defaultValue: 2
      }
    ]
  },
  {
    tfOpName: "GatherV2",
    category: "slice_join",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "indices",
        type: "tensor"
      },
      {
        start: 2,
        name: "axis",
        type: "number",
        defaultValue: 0
      }
    ],
    attrs: [
      {
        tfName: "batch_dims",
        name: "batchDims",
        type: "number",
        defaultValue: 0
      }
    ]
  },
  {
    tfOpName: "Gather",
    category: "slice_join",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "indices",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "validate_indices",
        name: "validateIndices",
        type: "bool",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Reverse",
    category: "slice_join",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "dims",
        type: "bool[]"
      }
    ]
  },
  {
    tfOpName: "ReverseV2",
    category: "slice_join",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "axis",
        type: "number[]"
      }
    ]
  },
  {
    tfOpName: "Slice",
    category: "slice_join",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "begin",
        type: "number[]"
      },
      {
        start: 2,
        name: "size",
        type: "number[]"
      }
    ]
  },
  {
    tfOpName: "StridedSlice",
    category: "slice_join",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "begin",
        type: "number[]"
      },
      {
        start: 2,
        name: "end",
        type: "number[]"
      },
      {
        start: 3,
        name: "strides",
        type: "number[]"
      }
    ],
    attrs: [
      {
        tfName: "begin_mask",
        name: "beginMask",
        type: "number",
        defaultValue: 0
      },
      {
        tfName: "end_mask",
        name: "endMask",
        type: "number",
        defaultValue: 0
      },
      {
        tfName: "new_axis_mask",
        name: "newAxisMask",
        type: "number",
        defaultValue: 0
      },
      {
        tfName: "ellipsis_mask",
        name: "ellipsisMask",
        type: "number",
        defaultValue: 0
      },
      {
        tfName: "shrink_axis_mask",
        name: "shrinkAxisMask",
        type: "number",
        defaultValue: 0
      }
    ]
  },
  {
    tfOpName: "Pack",
    category: "slice_join",
    inputs: [
      {
        start: 0,
        end: 0,
        name: "tensors",
        type: "tensors"
      }
    ],
    attrs: [
      {
        tfName: "axis",
        name: "axis",
        type: "number",
        defaultValue: 0
      }
    ]
  },
  {
    tfOpName: "Unpack",
    category: "slice_join",
    inputs: [
      {
        start: 0,
        name: "tensor",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "axis",
        name: "axis",
        type: "number",
        defaultValue: 0
      },
      {
        tfName: "num",
        name: "num",
        type: "number",
        defaultValue: 0,
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Tile",
    category: "slice_join",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "reps",
        type: "number[]"
      }
    ]
  },
  {
    tfOpName: "Split",
    category: "slice_join",
    inputs: [
      {
        start: 0,
        name: "axis",
        type: "number",
        defaultValue: 0
      },
      {
        start: 1,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "num_split",
        name: "numOrSizeSplits",
        type: "number",
        defaultValue: 1
      }
    ]
  },
  {
    tfOpName: "SplitV",
    category: "slice_join",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "numOrSizeSplits",
        type: "number[]"
      },
      {
        start: 2,
        name: "axis",
        type: "number",
        defaultValue: 0
      }
    ]
  },
  {
    tfOpName: "ScatterNd",
    category: "slice_join",
    inputs: [
      {
        start: 0,
        name: "indices",
        type: "tensor"
      },
      {
        start: 1,
        name: "values",
        type: "tensor"
      },
      {
        start: 2,
        name: "shape",
        type: "number[]"
      }
    ]
  },
  {
    tfOpName: "GatherNd",
    category: "slice_join",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "indices",
        type: "tensor"
      }
    ]
  },
  {
    tfOpName: "SparseToDense",
    category: "slice_join",
    inputs: [
      {
        start: 0,
        name: "sparseIndices",
        type: "tensor"
      },
      {
        start: 1,
        name: "outputShape",
        type: "number[]"
      },
      {
        start: 2,
        name: "sparseValues",
        type: "tensor"
      },
      {
        start: 3,
        name: "defaultValue",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "validate_indices",
        name: "validateIndices",
        type: "bool",
        defaultValue: !1,
        notSupported: !0
      }
    ]
  }
], My = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  json: Yy
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const eg = [
  {
    tfOpName: "SparseFillEmptyRows",
    category: "sparse",
    inputs: [
      {
        start: 0,
        name: "indices",
        type: "tensor"
      },
      {
        start: 1,
        name: "values",
        type: "tensor"
      },
      {
        start: 2,
        name: "denseShape",
        type: "tensor"
      },
      {
        start: 3,
        name: "defaultValue",
        type: "tensor"
      }
    ]
  },
  {
    tfOpName: "SparseReshape",
    category: "sparse",
    inputs: [
      {
        start: 0,
        name: "inputIndices",
        type: "tensor"
      },
      {
        start: 1,
        name: "inputShape",
        type: "tensor"
      },
      {
        start: 2,
        name: "newShape",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "SparseSegmentMean",
    category: "sparse",
    inputs: [
      {
        start: 0,
        name: "data",
        type: "tensor"
      },
      {
        start: 1,
        name: "indices",
        type: "tensor"
      },
      {
        start: 2,
        name: "segmentIds",
        type: "tensor"
      }
    ]
  },
  {
    tfOpName: "SparseSegmentSum",
    category: "sparse",
    inputs: [
      {
        start: 0,
        name: "data",
        type: "tensor"
      },
      {
        start: 1,
        name: "indices",
        type: "tensor"
      },
      {
        start: 2,
        name: "segmentIds",
        type: "tensor"
      }
    ]
  }
], tg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  json: eg
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const sg = [
  {
    tfOpName: "FFT",
    category: "spectral",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ]
  },
  {
    tfOpName: "IFFT",
    category: "spectral",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ]
  },
  {
    tfOpName: "RFFT",
    category: "spectral",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "fft_length",
        type: "number",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "IRFFT",
    category: "spectral",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "fft_length",
        type: "number",
        notSupported: !0
      }
    ]
  }
], ag = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  json: sg
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const rg = [
  {
    tfOpName: "StringNGrams",
    category: "string",
    inputs: [
      {
        start: 0,
        name: "data",
        type: "tensor"
      },
      {
        start: 1,
        name: "dataSplits",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "separator",
        name: "separator",
        type: "string"
      },
      {
        tfName: "ngram_widths",
        name: "nGramWidths",
        type: "number[]"
      },
      {
        tfName: "left_pad",
        name: "leftPad",
        type: "string"
      },
      {
        tfName: "right_pad",
        name: "rightPad",
        type: "string"
      },
      {
        tfName: "pad_width",
        name: "padWidth",
        type: "number"
      },
      {
        tfName: "preserve_short_sequences",
        name: "preserveShortSequences",
        type: "bool"
      }
    ],
    outputs: [
      "ngrams",
      "ngrams_splits"
    ]
  },
  {
    tfOpName: "StringSplit",
    category: "string",
    inputs: [
      {
        start: 0,
        name: "input",
        type: "tensor"
      },
      {
        start: 1,
        name: "delimiter",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "skip_empty",
        name: "skipEmpty",
        type: "bool"
      }
    ],
    outputs: [
      "indices",
      "values",
      "shape"
    ]
  },
  {
    tfOpName: "StringToHashBucketFast",
    category: "string",
    inputs: [
      {
        start: 0,
        name: "input",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "num_buckets",
        name: "numBuckets",
        type: "number"
      }
    ]
  }
], ng = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  json: rg
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const ig = [
  {
    tfOpName: "Cast",
    category: "transformation",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "SrcT",
        name: "sdtype",
        type: "dtype",
        notSupported: !0
      },
      {
        tfName: "DstT",
        name: "dtype",
        type: "dtype"
      }
    ]
  },
  {
    tfOpName: "ExpandDims",
    category: "transformation",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "axis",
        type: "number"
      }
    ]
  },
  {
    tfOpName: "MirrorPad",
    category: "transformation",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "padding",
        type: "number[]"
      }
    ],
    attrs: [
      {
        tfName: "mode",
        name: "mode",
        type: "string"
      }
    ]
  },
  {
    tfOpName: "Pad",
    category: "transformation",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "padding",
        type: "number[]"
      }
    ],
    attrs: [
      {
        tfName: "constant_value",
        name: "constantValue",
        type: "number",
        defaultValue: 0
      }
    ]
  },
  {
    tfOpName: "PadV2",
    category: "transformation",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "padding",
        type: "number[]"
      },
      {
        start: 2,
        name: "constantValue",
        type: "number",
        defaultValue: 0
      }
    ]
  },
  {
    tfOpName: "Reshape",
    category: "transformation",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "shape",
        type: "number[]"
      }
    ]
  },
  {
    tfOpName: "Squeeze",
    category: "transformation",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "axis",
        tfDeprecatedName: "squeeze_dims",
        name: "axis",
        type: "number[]"
      }
    ]
  },
  {
    tfOpName: "SpaceToBatchND",
    category: "transformation",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "blockShape",
        type: "number[]"
      },
      {
        start: 2,
        name: "paddings",
        type: "number[]"
      }
    ]
  },
  {
    tfOpName: "BatchToSpaceND",
    category: "transformation",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "blockShape",
        type: "number[]"
      },
      {
        start: 2,
        name: "crops",
        type: "number[]"
      }
    ]
  },
  {
    tfOpName: "DepthToSpace",
    category: "transformation",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "block_size",
        name: "blockSize",
        type: "number"
      },
      {
        tfName: "data_format",
        name: "dataFormat",
        type: "string"
      }
    ]
  },
  {
    tfOpName: "BroadcastTo",
    category: "transformation",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "shape",
        type: "number[]"
      }
    ],
    attrs: []
  },
  {
    tfOpName: "BroadcastArgs",
    category: "transformation",
    inputs: [
      {
        start: 0,
        name: "s0",
        type: "tensor"
      },
      {
        start: 1,
        name: "s1",
        type: "tensor"
      }
    ],
    attrs: []
  }
], og = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  json: ig
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Lt {
  // Singleton instance for the mapper
  static get Instance() {
    return this._instance || (this._instance = new this());
  }
  // Loads the op mapping from the JSON file.
  constructor() {
    const e = [
      _y,
      Ey,
      $y,
      Iy,
      xy,
      Ly,
      Py,
      Ry,
      By,
      Wy,
      Uy,
      Ky,
      Qy,
      Zy,
      My,
      tg,
      ag,
      ng,
      og
    ], t = [].concat(...e.map((a) => a.json));
    this.opMappers = t.reduce((a, r) => (a[r.tfOpName] = r, a), {});
  }
  // Converts the model inference graph from Tensorflow GraphDef to local
  // representation for TensorFlow.js API
  transformGraph(e, t = {}) {
    const a = e.node, r = [], n = [], o = [], u = a.reduce((f, g) => (f[g.name] = this.mapNode(g), g.op.startsWith("Placeholder") ? r.push(f[g.name]) : g.op === "Const" ? n.push(f[g.name]) : (g.input == null || g.input.length === 0) && o.push(f[g.name]), f), {});
    let l = [];
    const m = [];
    let p = {}, c = {};
    t != null && (p = this.mapSignatureEntries(t.inputs), c = this.mapSignatureEntries(t.outputs));
    const d = Object.keys(u);
    d.forEach((f) => {
      const g = u[f];
      g.inputNames.forEach((S, k) => {
        const [T, , W] = P(S), A = u[T];
        if (A.outputs != null) {
          const $ = A.outputs.indexOf(W);
          if ($ !== -1) {
            const L = `${T}:${$}`;
            g.inputNames[k] = L;
          }
        }
        g.inputs.push(A), A.children.push(g);
      });
    }), Object.keys(c).length === 0 ? d.forEach((f) => {
      const g = u[f];
      g.children.length === 0 && m.push(g);
    }) : Object.keys(c).forEach((f) => {
      const [g] = P(f), S = u[g];
      S != null && (S.signatureKey = c[f], m.push(S));
    }), Object.keys(p).length > 0 ? Object.keys(p).forEach((f) => {
      const [g] = P(f), S = u[g];
      S && (S.signatureKey = p[f], l.push(S));
    }) : l = r;
    let h = {};
    e.library != null && e.library.function != null && (h = e.library.function.reduce((f, g) => (f[g.signature.name] = this.mapFunction(g), f), {}));
    const b = { nodes: u, inputs: l, outputs: m, weights: n, placeholders: r, signature: t, functions: h };
    return o.length > 0 && (b.initNodes = o), b;
  }
  mapSignatureEntries(e) {
    return Object.keys(e || {}).reduce((t, a) => (t[e[a].name] = a, t), {});
  }
  mapNode(e) {
    const t = Un(e.op) || this.opMappers[e.op] || {};
    e.attr == null && (e.attr = {});
    const a = {
      name: e.name,
      op: e.op,
      category: t.category,
      inputNames: (e.input || []).map((r) => r.startsWith("^") ? r.slice(1) : r),
      inputs: [],
      children: [],
      inputParams: {},
      attrParams: {},
      rawAttrs: e.attr,
      outputs: t.outputs
    };
    return t.inputs != null && (a.inputParams = t.inputs.reduce((r, n) => (r[n.name] = {
      type: n.type,
      inputIndexStart: n.start,
      inputIndexEnd: n.end
    }, r), {})), t.attrs != null && (a.attrParams = t.attrs.reduce((r, n) => {
      const o = n.type;
      let u;
      switch (n.type) {
        case "string":
          u = Ve(e.attr, n.tfName, n.defaultValue), u === void 0 && n.tfDeprecatedName && (u = Ve(e.attr, n.tfDeprecatedName, n.defaultValue));
          break;
        case "string[]":
          u = Ue(e.attr, n.tfName, n.defaultValue), u === void 0 && n.tfDeprecatedName && (u = Ue(e.attr, n.tfDeprecatedName, n.defaultValue));
          break;
        case "number":
          u = je(e.attr, n.tfName, n.defaultValue || 0), u === void 0 && n.tfDeprecatedName && (u = je(e.attr, n.tfDeprecatedName, n.defaultValue));
          break;
        case "number[]":
          u = qe(e.attr, n.tfName, n.defaultValue), u === void 0 && n.tfDeprecatedName && (u = qe(e.attr, n.tfDeprecatedName, n.defaultValue));
          break;
        case "bool":
          u = Re(e.attr, n.tfName, n.defaultValue), u === void 0 && n.tfDeprecatedName && (u = Re(e.attr, n.tfDeprecatedName, n.defaultValue));
          break;
        case "bool[]":
          u = Ke(e.attr, n.tfName, n.defaultValue), u === void 0 && n.tfDeprecatedName && (u = Ke(e.attr, n.tfDeprecatedName, n.defaultValue));
          break;
        case "shape":
          u = We(e.attr, n.tfName, n.defaultValue), u === void 0 && n.tfDeprecatedName && (u = We(e.attr, n.tfDeprecatedName, n.defaultValue));
          break;
        case "shape[]":
          u = Ge(e.attr, n.tfName, n.defaultValue), u === void 0 && n.tfDeprecatedName && (u = Ge(e.attr, n.tfDeprecatedName, n.defaultValue));
          break;
        case "dtype":
          u = Be(e.attr, n.tfName, n.defaultValue), u === void 0 && n.tfDeprecatedName && (u = Be(e.attr, n.tfDeprecatedName, n.defaultValue));
          break;
        case "dtype[]":
          u = He(e.attr, n.tfName, n.defaultValue), u === void 0 && n.tfDeprecatedName && (u = He(e.attr, n.tfDeprecatedName, n.defaultValue));
          break;
        case "func":
          u = Ft(e.attr, n.tfName, n.defaultValue), u === void 0 && n.tfDeprecatedName && (u = Ft(e.attr, n.tfDeprecatedName, n.defaultValue));
          break;
        case "tensor":
        case "tensors":
          break;
        default:
          throw new Error(`Unsupported param type: ${n.type} for op: ${e.op}`);
      }
      return r[n.name] = { value: u, type: o }, r;
    }, {})), a;
  }
  // map the TFunctionDef to TFJS graph object
  mapFunction(e) {
    const t = e.nodeDef, a = [], r = [];
    let n = {};
    t != null && (n = t.reduce((c, d) => (c[d.name] = this.mapNode(d), d.op === "Const" && r.push(c[d.name]), c), {}));
    const o = [], u = [];
    e.signature.inputArg.forEach((c) => {
      const [d] = P(c.name), h = {
        name: d,
        op: "Placeholder",
        inputs: [],
        inputNames: [],
        category: "graph",
        inputParams: {},
        attrParams: { dtype: { value: St(c.type), type: "dtype" } },
        children: []
      };
      h.signatureKey = c.name, o.push(h), n[d] = h;
    }), Object.keys(n).forEach((c) => {
      const d = n[c];
      d.inputNames.forEach((h, b) => {
        const [f, , g] = P(h), S = n[f];
        if (S.outputs != null) {
          const k = S.outputs.indexOf(g);
          if (k !== -1) {
            const T = `${f}:${k}`;
            d.inputNames[b] = T;
          }
        }
        d.inputs.push(S), S.children.push(d);
      });
    });
    const m = e.ret;
    e.signature.outputArg.forEach((c) => {
      const [d, h] = P(m[c.name]), b = n[d];
      b != null && (b.defaultOutput = h, u.push(b));
    });
    const p = this.mapArgsToSignature(e);
    return { nodes: n, inputs: o, outputs: u, weights: r, placeholders: a, signature: p };
  }
  mapArgsToSignature(e) {
    return {
      methodName: e.signature.name,
      inputs: e.signature.inputArg.reduce((t, a) => (t[a.name] = this.mapArgToTensorInfo(a), t), {}),
      outputs: e.signature.outputArg.reduce((t, a) => (t[a.name] = this.mapArgToTensorInfo(a, e.ret), t), {})
    };
  }
  mapArgToTensorInfo(e, t) {
    let a = e.name;
    return t != null && (a = t[a]), { name: a, dtype: e.type };
  }
}
function ug(s) {
  const e = z().global;
  if (typeof e.atob < "u")
    return e.atob(s);
  if (typeof Buffer < "u")
    return new Buffer(s, "base64").toString();
  throw new Error("Unable to decode base64 in this environment. Missing built-in atob() or Buffer()");
}
function Gn(s, e) {
  const t = Array.isArray(s) ? String.fromCharCode.apply(null, s) : ug(s);
  return e ? t : t.toLowerCase();
}
function Ve(s, e, t, a = !1) {
  const r = s[e];
  return r != null ? Gn(r.s, a) : t;
}
function Re(s, e, t) {
  const a = s[e];
  return a ? a.b : t;
}
function je(s, e, t) {
  const a = s[e] || {}, r = a.i != null ? a.i : a.f != null ? a.f : t;
  return typeof r == "number" ? r : parseInt(r, 10);
}
function St(s) {
  switch (typeof s == "string" && (s = F[s]), s) {
    case F.DT_FLOAT:
    case F.DT_HALF:
      return "float32";
    case F.DT_INT32:
    case F.DT_INT64:
    case F.DT_INT8:
    case F.DT_UINT8:
      return "int32";
    case F.DT_BOOL:
      return "bool";
    case F.DT_DOUBLE:
      return "float32";
    case F.DT_STRING:
      return "string";
    default:
      return null;
  }
}
function Ft(s, e, t) {
  const a = s[e];
  return a && a.func ? a.func.name : t;
}
function Be(s, e, t) {
  const a = s[e];
  return a && a.type ? St(a.type) : t;
}
function He(s, e, t) {
  const a = s[e];
  return a && a.list && a.list.type ? a.list.type.map((r) => St(r)) : t;
}
function Kn(s) {
  if (!s.unknownRank)
    return s.dim != null ? s.dim.map((e) => typeof e.size == "number" ? e.size : parseInt(e.size, 10)) : [];
}
function We(s, e, t) {
  const a = s[e];
  return a && a.shape ? Kn(a.shape) : t;
}
function qe(s, e, t) {
  const a = s[e];
  return a ? ((a.list.f && a.list.f.length ? a.list.f : a.list.i) || []).map((r) => typeof r == "number" ? r : parseInt(r, 10)) : t;
}
function Ue(s, e, t, a = !1) {
  const r = s[e];
  return r && r.list && r.list.s ? r.list.s.map((n) => Gn(n, a)) : t;
}
function Ge(s, e, t) {
  const a = s[e];
  return a && a.list && a.list.shape ? a.list.shape.map((r) => Kn(r)) : t;
}
function Ke(s, e, t) {
  const a = s[e];
  return a && a.list && a.list.b ? a.list.b : t;
}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class lg {
  constructor(e, t, a) {
    this.node = e, this.tensorMap = t, this.context = a, this.inputs = [], this.attrs = {}, this.inputs = e.inputNames.map((r) => this.getInput(r)), e.rawAttrs != null && (this.attrs = Object.keys(e.rawAttrs).reduce((r, n) => (r[n] = this.getAttr(n), r), {}));
  }
  /**
   * Return the value of the attribute or input param.
   * @param name String: name of attribute or input param.
   */
  getInput(e) {
    return E(e, this.tensorMap, this.context);
  }
  /**
   * Return the value of the attribute or input param.
   * @param name String: name of attribute or input param.
   */
  getAttr(e, t) {
    const a = this.node.rawAttrs[e];
    if (a.tensor != null)
      return E(e, this.tensorMap, this.context);
    if (a.i != null || a.f != null)
      return je(this.node.rawAttrs, e, t);
    if (a.s != null)
      return Ve(this.node.rawAttrs, e, t);
    if (a.b != null)
      return Re(this.node.rawAttrs, e, t);
    if (a.shape != null)
      return We(this.node.rawAttrs, e, t);
    if (a.type != null)
      return Be(this.node.rawAttrs, e, t);
    if (a.list != null) {
      if (a.list.i != null || a.list.f != null)
        return qe(this.node.rawAttrs, e, t);
      if (a.list.s != null)
        return Ue(this.node.rawAttrs, e, t);
      if (a.list.shape != null)
        return Ge(this.node.rawAttrs, e, t);
      if (a.list.b != null)
        return Ke(this.node.rawAttrs, e, t);
      if (a.list.type != null)
        return He(this.node.rawAttrs, e, t);
    }
    return t;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const _ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  OP_SCOPE_SUFFIX: ds,
  abs: hs,
  acos: fs,
  acosh: ys,
  add: G,
  addN: Mr,
  all: gs,
  any: bs,
  argMax: Ns,
  argMin: ws,
  asin: Ts,
  asinh: Ss,
  atan: vs,
  atan2: Os,
  atanh: _s,
  avgPool: As,
  avgPool3d: Es,
  basicLSTMCell: en,
  batchNorm: ks,
  batchNorm2d: $s,
  batchNorm3d: Ds,
  batchNorm4d: Is,
  batchToSpaceND: Cs,
  bincount: xs,
  booleanMaskAsync: In,
  broadcastArgs: tn,
  broadcastTo: zs,
  buffer: Xe,
  cast: Y,
  ceil: Ls,
  clipByValue: Fs,
  clone: lt,
  complex: Ps,
  concat: ce,
  concat1d: Vs,
  concat2d: Rs,
  concat3d: js,
  concat4d: Bs,
  conv1d: Hs,
  conv2d: Ws,
  conv2dTranspose: qs,
  conv3d: Us,
  conv3dTranspose: Gs,
  cos: Ks,
  cosh: Js,
  cosineWindow: Qs,
  cumprod: Xs,
  cumsum: Zs,
  denseBincount: sn,
  depthToSpace: Ys,
  depthwiseConv2d: rt,
  diag: an,
  dilation2d: Ms,
  div: st,
  divNoNan: ea,
  dot: ta,
  dropout: sa,
  einsum: rn,
  elu: aa,
  enclosingPowerOfTwo: ra,
  equal: na,
  erf: ia,
  euclideanNorm: oa,
  exp: ua,
  expandDims: pt,
  expm1: la,
  eye: pa,
  fft: ma,
  fill: ca,
  floor: da,
  floorDiv: ha,
  fused: Pn,
  gather: tt,
  gatherND: Ln,
  greater: fa,
  greaterEqual: ya,
  ifft: ga,
  imag: ba,
  image: mt,
  inTopKAsync: Fn,
  irfft: Na,
  isFinite: wa,
  isInf: Ta,
  isNaN: Sa,
  leakyRelu: va,
  less: Oa,
  lessEqual: _a,
  linalg: Aa,
  linspace: nn,
  localResponseNormalization: Ea,
  log: ka,
  log1p: $a,
  logSigmoid: Da,
  logSoftmax: Ia,
  logSumExp: Ca,
  logicalAnd: xa,
  logicalNot: za,
  logicalOr: La,
  logicalXor: Fa,
  losses: Pa,
  lowerBound: on,
  matMul: B,
  max: Va,
  maxPool: Ra,
  maxPool3d: ja,
  maxPoolWithArgmax: un,
  maximum: Ba,
  mean: Ha,
  meshgrid: ln,
  min: Wa,
  minimum: qa,
  mirrorPad: Ua,
  mod: Ga,
  moments: Ka,
  movingAverage: Cn,
  mul: M,
  multiRNNCell: pn,
  multinomial: mn,
  neg: Ja,
  norm: Qa,
  notEqual: Xa,
  oneHot: we,
  ones: Z,
  onesLike: Za,
  op: w,
  outerProduct: cn,
  pad: te,
  pad1d: dn,
  pad2d: hn,
  pad3d: fn,
  pad4d: yn,
  pool: Ya,
  pow: at,
  prelu: Ma,
  print: er,
  prod: tr,
  raggedGather: gn,
  raggedTensorToTensor: bn,
  rand: Nn,
  randomGamma: wn,
  randomNormal: Ze,
  randomStandardNormal: Tn,
  randomUniform: sr,
  range: ar,
  real: rr,
  reciprocal: nr,
  relu: ir,
  relu6: or,
  reshape: v,
  reverse: se,
  reverse1d: Sn,
  reverse2d: vn,
  reverse3d: On,
  reverse4d: _n,
  rfft: ur,
  round: lr,
  rsqrt: pr,
  scalar: V,
  scatterND: xn,
  searchSorted: ke,
  selu: mr,
  separableConv2d: cr,
  setdiff1dAsync: An,
  sigmoid: ie,
  sign: dr,
  signal: hr,
  sin: fr,
  sinh: yr,
  slice: q,
  slice1d: gr,
  slice2d: br,
  slice3d: Nr,
  slice4d: wr,
  softmax: Tr,
  softplus: Sr,
  spaceToBatchND: vr,
  sparse: Or,
  sparseToDense: zn,
  spectral: _r,
  split: Ar,
  sqrt: Er,
  square: kr,
  squaredDifference: $r,
  squeeze: et,
  stack: ee,
  step: Dr,
  stridedSlice: Ir,
  string: Cr,
  sub: oe,
  sum: xr,
  tan: zr,
  tanh: Te,
  tensor: U,
  tensor1d: ct,
  tensor2d: Se,
  tensor3d: Lr,
  tensor4d: En,
  tensor5d: kn,
  tensor6d: $n,
  tile: Fr,
  topk: Pr,
  transpose: Qe,
  truncatedNormal: Vr,
  unique: Rr,
  unsortedSegmentSum: jr,
  unstack: ae,
  upperBound: Dn,
  variable: Br,
  where: Hr,
  whereAsync: gt,
  zeros: Wr,
  zerosLike: qr
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const pg = (s, e, t, a = _) => {
  switch (s.op) {
    case "BiasAdd":
    case "AddV2":
    case "Add":
      return [a.add(i("a", s, e, t), i("b", s, e, t))];
    case "AddN":
      return [a.addN(i("tensors", s, e, t))];
    case "FloorMod":
    case "Mod":
      return [a.mod(i("a", s, e, t), i("b", s, e, t))];
    case "Mul":
      return [a.mul(i("a", s, e, t), i("b", s, e, t))];
    case "RealDiv":
    case "Div":
      return [a.div(i("a", s, e, t), i("b", s, e, t))];
    case "DivNoNan":
      return [a.divNoNan(i("a", s, e, t), i("b", s, e, t))];
    case "FloorDiv":
      return [a.floorDiv(i("a", s, e, t), i("b", s, e, t))];
    case "Sub":
      return [a.sub(i("a", s, e, t), i("b", s, e, t))];
    case "Minimum":
      return [a.minimum(i("a", s, e, t), i("b", s, e, t))];
    case "Maximum":
      return [a.maximum(i("a", s, e, t), i("b", s, e, t))];
    case "Pow":
      return [a.pow(i("a", s, e, t), i("b", s, e, t))];
    case "SquaredDifference":
      return [a.squaredDifference(i("a", s, e, t), i("b", s, e, t))];
    default:
      throw TypeError(`Node type ${s.op} is not implemented`);
  }
};
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const mg = (s, e, t, a = _) => {
  switch (s.op) {
    case "Abs":
    case "ComplexAbs":
      return [a.abs(i("x", s, e, t))];
    case "Acos":
      return [a.acos(i("x", s, e, t))];
    case "Acosh":
      return [a.acosh(i("x", s, e, t))];
    case "Asin":
      return [a.asin(i("x", s, e, t))];
    case "Asinh":
      return [a.asinh(i("x", s, e, t))];
    case "Atan":
      return [a.atan(i("x", s, e, t))];
    case "Atan2":
      return [a.atan2(i("x", s, e, t), i("y", s, e, t))];
    case "Atanh":
      return [a.atanh(i("x", s, e, t))];
    case "Ceil":
      return [a.ceil(i("x", s, e, t))];
    case "Complex":
      return [a.complex(i("real", s, e, t), i("imag", s, e, t))];
    case "Cos":
      return [a.cos(i("x", s, e, t))];
    case "Cosh":
      return [a.cosh(i("x", s, e, t))];
    case "Elu":
      return [a.elu(i("x", s, e, t))];
    case "Erf":
      return [a.erf(i("x", s, e, t))];
    case "Exp":
      return [a.exp(i("x", s, e, t))];
    case "Expm1":
      return [a.expm1(i("x", s, e, t))];
    case "Floor":
      return [a.floor(i("x", s, e, t))];
    case "Log":
      return [a.log(i("x", s, e, t))];
    case "Log1p":
      return [a.log1p(i("x", s, e, t))];
    case "Imag":
      return [a.imag(i("x", s, e, t))];
    case "Neg":
      return [a.neg(i("x", s, e, t))];
    case "Reciprocal":
      return [a.reciprocal(i("x", s, e, t))];
    case "Real":
      return [a.real(i("x", s, e, t))];
    case "Relu":
      return [a.relu(i("x", s, e, t))];
    case "Round":
      return [a.round(i("x", s, e, t))];
    case "Selu":
      return [a.selu(i("x", s, e, t))];
    case "Sigmoid":
      return [a.sigmoid(i("x", s, e, t))];
    case "Sin":
      return [a.sin(i("x", s, e, t))];
    case "Sign":
      return [a.sign(i("x", s, e, t))];
    case "Sinh":
      return [a.sinh(i("x", s, e, t))];
    case "Softplus":
      return [a.softplus(i("x", s, e, t))];
    case "Sqrt":
      return [a.sqrt(i("x", s, e, t))];
    case "Square":
      return [a.square(i("x", s, e, t))];
    case "Tanh":
      return [a.tanh(i("x", s, e, t))];
    case "Tan":
      return [a.tan(i("x", s, e, t))];
    case "ClipByValue":
      return [a.clipByValue(i("x", s, e, t), i("clipValueMin", s, e, t), i("clipValueMax", s, e, t))];
    case "Relu6":
      return [a.relu6(i("x", s, e, t))];
    case "Rsqrt":
      return [a.rsqrt(E(s.inputNames[0], e, t))];
    case "Prod":
      return [a.prod(i("x", s, e, t), i("axes", s, e, t))];
    case "LeakyRelu":
      return [a.leakyRelu(i("x", s, e, t), i("alpha", s, e, t))];
    case "Prelu":
      return [a.prelu(i("x", s, e, t), i("alpha", s, e, t))];
    case "IsNan":
      return [a.isNaN(E(s.inputNames[0], e, t))];
    default:
      throw TypeError(`Node type ${s.op} is not implemented`);
  }
};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function I(s, e, t = "") {
  if (!(typeof s == "number" || typeof e == "number")) {
    N(s.length === e.length, () => t + ` Shapes ${s} and ${e} must match`);
    for (let a = 0; a < s.length; a++) {
      const r = s[a], n = e[a];
      N(r < 0 || n < 0 || r === n, () => t + ` Shapes ${s} and ${e} must match`);
    }
  }
}
function Pt(s) {
  return !(typeof s == "number" || s.some((e) => e < 0));
}
function re(s, e, t) {
  let a = Je(s, t);
  const r = !Pt(a);
  if (r && e.length === 0)
    throw new Error(`Tried to calculate elements of an empty list with non-fully-defined elementShape: ${a}`);
  if (r && e.forEach((n) => {
    a = Je(n.shape, a);
  }), !Pt(a))
    throw new Error(`Non-fully-defined elementShape: ${a}`);
  return a;
}
function Je(s, e) {
  if (typeof s == "number")
    return e;
  if (typeof e == "number")
    return s;
  if (s.length !== e.length)
    throw new Error(`Incompatible ranks during merge: ${s} vs. ${e}`);
  const t = [];
  for (let a = 0; a < s.length; ++a) {
    const r = s[a], n = e[a];
    if (r >= 0 && n >= 0 && r !== n)
      throw new Error(`Incompatible shape during merge: ${s} vs. ${e}`);
    t[a] = r >= 0 ? r : n;
  }
  return t;
}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class cg {
  constructor(e, t, a, r, n, o, u) {
    this.name = e, this.dtype = t, this.maxSize = a, this.elementShape = r, this.identicalElementShapes = n, this.dynamicSize = o, this.clearAfterRead = u, this.tensors = [], this.closed_ = !1, this.idTensor = V(0), H(this.idTensor);
  }
  get id() {
    return this.idTensor.id;
  }
  get closed() {
    return this.closed_;
  }
  /**
   * Dispose the tensors and idTensor and mark the TensoryArray as closed.
   */
  clearAndClose(e) {
    this.tensors.forEach((t) => {
      (e == null || !e.has(t.tensor.id)) && t.tensor.dispose();
    }), this.tensors = [], this.closed_ = !0, this.idTensor.dispose();
  }
  size() {
    return this.tensors.length;
  }
  /**
   * Read the value at location index in the TensorArray.
   * @param index Number the index to read from.
   */
  read(e) {
    if (this.closed_)
      throw new Error(`TensorArray ${this.name} has already been closed.`);
    if (e < 0 || e >= this.size())
      throw new Error(`Tried to read from index ${e}, but array size is: ${this.size()}`);
    const t = this.tensors[e];
    if (t.cleared)
      throw new Error(`TensorArray ${this.name}: Could not read index ${e} twice because it was cleared after a previous read (perhaps try setting clear_after_read = false?).`);
    return this.clearAfterRead && (t.cleared = !0), t.read = !0, t.tensor;
  }
  /**
   * Helper method to read multiple tensors from the specified indices.
   */
  readMany(e) {
    return e.map((t) => this.read(t));
  }
  /**
   * Write value into the index of the TensorArray.
   * @param index number the index to write to.
   * @param tensor
   */
  write(e, t) {
    if (this.closed_)
      throw new Error(`TensorArray ${this.name} has already been closed.`);
    if (e < 0 || !this.dynamicSize && e >= this.maxSize)
      throw new Error(`Tried to write to index ${e}, but array is not resizeable and size is: ${this.maxSize}`);
    const a = this.tensors[e] || {};
    if (t.dtype !== this.dtype)
      throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e},
          because the value dtype is ${t.dtype}, but TensorArray dtype is ${this.dtype}.`);
    if (this.size() === 0 && (this.elementShape == null || this.elementShape.length === 0) && (this.elementShape = t.shape), I(this.elementShape, t.shape, `TensorArray ${this.name}: Could not write to TensorArray index ${e}.`), a.read)
      throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e}, because it has already been read.`);
    if (a.written)
      throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e}, because it has already been written.`);
    a.tensor = t, H(t), a.written = !0, this.tensors[e] = a;
  }
  /**
   * Helper method to write multiple tensors to the specified indices.
   */
  writeMany(e, t) {
    if (e.length !== t.length)
      throw new Error(`TensorArray ${this.name}: could not write multiple tensors,because the index size: ${e.length} is not the same as tensors size: ${t.length}.`);
    e.forEach((a, r) => this.write(a, t[r]));
  }
  /**
   * Return selected values in the TensorArray as a packed Tensor. All of
   * selected values must have been written and their shapes must all match.
   * @param [indices] number[] Optional. Taking values in [0, max_value). If the
   *    TensorArray is not dynamic, max_value=size(). If not specified returns
   *    all tensors in the original order.
   * @param [dtype]
   */
  gather(e, t) {
    if (t && t !== this.dtype)
      throw new Error(`TensorArray dtype is ${this.dtype} but gather requested dtype ${t}`);
    if (e)
      e = e.slice(0, this.size());
    else {
      e = [];
      for (let r = 0; r < this.size(); r++)
        e.push(r);
    }
    if (e.length === 0)
      return U([], [0].concat(this.elementShape));
    const a = this.readMany(e);
    return I(this.elementShape, a[0].shape, "TensorArray shape mismatch: "), ee(a, 0);
  }
  /**
   * Return the values in the TensorArray as a concatenated Tensor.
   */
  concat(e) {
    if (e && e !== this.dtype)
      throw new Error(`TensorArray dtype is ${this.dtype} but concat requested dtype ${e}`);
    if (this.size() === 0)
      return U([], [0].concat(this.elementShape));
    const t = [];
    for (let r = 0; r < this.size(); r++)
      t.push(r);
    const a = this.readMany(t);
    return I(this.elementShape, a[0].shape, `TensorArray shape mismatch: tensor array shape (${this.elementShape}) vs first tensor shape (${a[0].shape})`), ce(a, 0);
  }
  /**
   * Scatter the values of a Tensor in specific indices of a TensorArray.
   * @param indices nummber[] values in [0, max_value). If the
   *    TensorArray is not dynamic, max_value=size().
   * @param tensor Tensor input tensor.
   */
  scatter(e, t) {
    if (t.dtype !== this.dtype)
      throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${t.dtype}`);
    if (e.length !== t.shape[0])
      throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${e.length} vs. ${t.shape[0]}`);
    const a = Math.max(...e);
    if (!this.dynamicSize && a >= this.maxSize)
      throw new Error(`Max index must be < array size (${a}  vs. ${this.maxSize})`);
    this.writeMany(e, ae(t, 0));
  }
  /**
   * Split the values of a Tensor into the TensorArray.
   * @param length number[] with the lengths to use when splitting value along
   *    its first dimension.
   * @param tensor Tensor, the tensor to split.
   */
  split(e, t) {
    if (t.dtype !== this.dtype)
      throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${t.dtype}`);
    let a = 0;
    const r = e.map((l) => (a += l, a));
    if (a !== t.shape[0])
      throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${a}, and tensor's shape is: ${t.shape}`);
    if (!this.dynamicSize && e.length !== this.maxSize)
      throw new Error(`TensorArray's size is not equal to the size of lengths (${this.maxSize} vs. ${e.length}), and the TensorArray is not marked as dynamically resizeable`);
    const n = a === 0 ? 0 : t.size / a, o = [];
    C(() => {
      t = v(t, [1, a, n]);
      for (let l = 0; l < e.length; ++l) {
        const p = [0, l === 0 ? 0 : r[l - 1], 0], c = [1, e[l], n];
        o[l] = v(q(t, p, c), this.elementShape);
      }
      return o;
    });
    const u = [];
    for (let l = 0; l < e.length; l++)
      u[l] = l;
    this.writeMany(u, o);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class J {
  /**
   *
   * @param tensors list of tensors
   * @param elementShape shape of each tensor, this can be a single number (any
   * shape is allowed) or partial shape (dim = -1).
   * @param elementDtype data type of each tensor
   * @param maxNumElements The maximum allowed size of `tensors`. Defaults to -1
   *   meaning that the size of `tensors` is unbounded.
   */
  constructor(e, t, a, r = -1) {
    this.tensors = e, this.elementShape = t, this.elementDtype = a, e != null && e.forEach((n) => {
      if (a !== n.dtype)
        throw new Error(`Invalid data types; op elements ${a}, but list elements ${n.dtype}`);
      I(t, n.shape, "TensorList shape mismatch: "), H(n);
    }), this.idTensor = V(0), this.maxNumElements = r, H(this.idTensor);
  }
  get id() {
    return this.idTensor.id;
  }
  /**
   * Get a new TensorList containing a copy of the underlying tensor container.
   */
  copy() {
    return new J([...this.tensors], this.elementShape, this.elementDtype);
  }
  /**
   * Dispose the tensors and idTensor and clear the tensor list.
   */
  clearAndClose(e) {
    this.tensors.forEach((t) => {
      (e == null || !e.has(t.id)) && t.dispose();
    }), this.tensors.length = 0, this.idTensor.dispose();
  }
  /**
   * The size of the tensors in the tensor list.
   */
  size() {
    return this.tensors.length;
  }
  /**
   * Return a tensor that stacks a list of rank-R tf.Tensors into one rank-(R+1)
   * tf.Tensor.
   * @param elementShape shape of each tensor
   * @param elementDtype data type of each tensor
   * @param numElements the number of elements to stack
   */
  stack(e, t, a = -1) {
    if (t !== this.elementDtype)
      throw new Error(`Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`);
    if (a !== -1 && this.tensors.length !== a)
      throw new Error(`Operation expected a list with ${a} elements but got a list with ${this.tensors.length} elements.`);
    I(e, this.elementShape, "TensorList shape mismatch: ");
    const r = re(this.elementShape, this.tensors, e);
    return C(() => {
      const n = this.tensors.map((o) => v(o, r));
      return ee(n, 0);
    });
  }
  /**
   * Pop a tensor from the end of the list.
   * @param elementShape shape of the tensor
   * @param elementDtype data type of the tensor
   */
  popBack(e, t) {
    if (t !== this.elementDtype)
      throw new Error(`Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`);
    if (this.size() === 0)
      throw new Error("Trying to pop from an empty list.");
    const a = re(this.elementShape, this.tensors, e), r = this.tensors.pop();
    return r.kept = !1, I(r.shape, e, "TensorList shape mismatch: "), v(r, a);
  }
  /**
   * Push a tensor to the end of the list.
   * @param tensor Tensor to be pushed.
   */
  pushBack(e) {
    if (e.dtype !== this.elementDtype)
      throw new Error(`Invalid data types; op elements ${e.dtype}, but list elements ${this.elementDtype}`);
    if (I(e.shape, this.elementShape, "TensorList shape mismatch: "), this.maxNumElements === this.size())
      throw new Error("Trying to push element into a full list.");
    H(e), this.tensors.push(e);
  }
  /**
   * Update the size of the list.
   * @param size the new size of the list.
   */
  resize(e) {
    if (e < 0)
      throw new Error(`TensorListResize expects size to be non-negative. Got: ${e}`);
    if (this.maxNumElements !== -1 && e > this.maxNumElements)
      throw new Error(`TensorListResize input size ${e} is greater maxNumElement ${this.maxNumElements}.`);
    const t = new J([], this.elementShape, this.elementDtype, this.maxNumElements);
    t.tensors.length = e;
    for (let a = 0; a < Math.min(this.tensors.length, e); ++a)
      t.tensors[a] = this.tensors[a];
    return t;
  }
  /**
   * Retrieve the element at the provided index
   * @param elementShape shape of the tensor
   * @param elementDtype dtype of the tensor
   * @param elementIndex index of the tensor
   */
  getItem(e, t, a) {
    if (a !== this.elementDtype)
      throw new Error(`Invalid data types; op elements ${a}, but list elements ${this.elementDtype}`);
    if (e < 0 || e > this.tensors.length)
      throw new Error(`Trying to access element ${e} in a list with ${this.tensors.length} elements.`);
    if (this.tensors[e] == null)
      throw new Error(`element at index ${e} is null.`);
    I(this.tensors[e].shape, t, "TensorList shape mismatch: ");
    const r = re(this.elementShape, this.tensors, t);
    return v(this.tensors[e], r);
  }
  /**
   * Set the tensor at the index
   * @param elementIndex index of the tensor
   * @param tensor the tensor to be inserted into the list
   */
  setItem(e, t) {
    if (t.dtype !== this.elementDtype)
      throw new Error(`Invalid data types; op elements ${t.dtype}, but list elements ${this.elementDtype}`);
    if (e < 0 || this.maxNumElements !== -1 && e >= this.maxNumElements)
      throw new Error(`Trying to set element ${e} in a list with max ${this.maxNumElements} elements.`);
    I(this.elementShape, t.shape, "TensorList shape mismatch: "), H(t), this.tensors[e] != null && (this.tensors[e].kept = !1), this.tensors[e] = t;
  }
  /**
   * Return selected values in the TensorList as a stacked Tensor. All of
   * selected values must have been written and their shapes must all match.
   * @param indices indices of tensors to gather
   * @param elementDtype output tensor dtype
   * @param elementShape output tensor element shape
   */
  gather(e, t, a) {
    if (t !== this.elementDtype)
      throw new Error(`Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`);
    I(this.elementShape, a, "TensorList shape mismatch: "), e = e.slice(0, this.size());
    const r = re(this.elementShape, this.tensors, a);
    return e.length === 0 ? U([], [0].concat(r)) : C(() => {
      const n = e.map((o) => v(this.tensors[o], r));
      return ee(n, 0);
    });
  }
  /**
   * Return the values in the TensorList as a concatenated Tensor.
   * @param elementDtype output tensor dtype
   * @param elementShape output tensor element shape
   */
  concat(e, t) {
    if (e && e !== this.elementDtype)
      throw new Error(`TensorList dtype is ${this.elementDtype} but concat requested dtype ${e}`);
    I(this.elementShape, t, "TensorList shape mismatch: ");
    const a = re(this.elementShape, this.tensors, t);
    return this.size() === 0 ? U([], [0].concat(a)) : C(() => {
      const r = this.tensors.map((n) => v(n, a));
      return ce(r, 0);
    });
  }
}
function dg(s, e, t) {
  const a = s.dtype;
  if (s.shape.length < 1)
    throw new Error(`Tensor must be at least a vector, but saw shape: ${s.shape}`);
  if (s.dtype !== t)
    throw new Error(`Invalid data types; op elements ${s.dtype}, but list elements ${t}`);
  const r = s.shape.slice(1);
  I(r, e, "TensorList shape mismatch: ");
  const n = ae(s);
  return new J(n, e, a);
}
function hg(s, e, t, a) {
  return new J([], s, e, a);
}
function fg(s, e, t, a) {
  if (e.length !== s.shape[0])
    throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${e.length} vs. ${s.shape[0]}`);
  const r = Math.max(...e);
  if (a != null && a !== -1 && r >= a)
    throw new Error(`Max index must be < array size (${r}  vs. ${a})`);
  const n = new J([], t, s.dtype, a), o = ae(s, 0);
  return e.forEach((u, l) => {
    n.setItem(u, o[l]);
  }), n;
}
function yg(s, e, t) {
  let a = 0;
  const r = e.map((p) => (a += p, a));
  if (a !== s.shape[0])
    throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${a}, and tensor's shape is: ${s.shape}`);
  const n = s.shape.slice(1), o = Je(n, t), u = a === 0 ? 0 : s.size / a, l = C(() => {
    const p = [];
    s = v(s, [1, a, u]);
    for (let c = 0; c < e.length; ++c) {
      const h = [0, c === 0 ? 0 : r[c - 1], 0], b = [1, e[c], u];
      p[c] = v(q(s, h, b), o);
    }
    return s.dispose(), p;
  }), m = new J([], t, s.dtype, e.length);
  for (let p = 0; p < l.length; p++)
    m.setItem(p, l[p]);
  return m;
}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const gg = async (s, e, t) => {
  switch (s.op) {
    case "If":
    case "StatelessIf": {
      const a = i("thenBranch", s, e, t), r = i("elseBranch", s, e, t), n = i("cond", s, e, t), o = i("args", s, e, t);
      return (await n.data())[0] ? t.functionMap[a].executeFunctionAsync(o, t.tensorArrayMap, t.tensorListMap) : t.functionMap[r].executeFunctionAsync(o, t.tensorArrayMap, t.tensorListMap);
    }
    case "While":
    case "StatelessWhile": {
      const a = i("body", s, e, t), r = i("cond", s, e, t), n = i("args", s, e, t), o = await t.functionMap[r].executeFunctionAsync(n, t.tensorArrayMap, t.tensorListMap), u = n.map((p) => p.id);
      let l = await o[0].data();
      o.forEach((p) => {
        !p.kept && u.indexOf(p.id) === -1 && p.dispose();
      });
      let m = n;
      for (; l[0]; ) {
        const p = m;
        m = await t.functionMap[a].executeFunctionAsync(m, t.tensorArrayMap, t.tensorListMap);
        const c = m.map((h) => h.id);
        p.forEach((h) => {
          !h.kept && u.indexOf(h.id) === -1 && c.indexOf(h.id) === -1 && h.dispose();
        });
        const d = await t.functionMap[r].executeFunctionAsync(m, t.tensorArrayMap, t.tensorListMap);
        l = await d[0].data(), d.forEach((h) => {
          !h.kept && u.indexOf(h.id) === -1 && c.indexOf(h.id) === -1 && h.dispose();
        });
      }
      return m;
    }
    case "LoopCond": {
      const a = i("pred", s, e, t);
      return [j(a)];
    }
    case "Switch": {
      const a = i("pred", s, e, t);
      let r = i("data", s, e, t);
      return r.kept || (r = j(r)), (await a.data())[0] ? [void 0, r] : [r, void 0];
    }
    case "Merge": {
      const a = s.inputNames.find((r) => E(r, e, t) !== void 0);
      if (a) {
        const r = E(a, e, t);
        return [j(r)];
      }
      return;
    }
    case "Enter": {
      const a = i("frameName", s, e, t), r = i("tensor", s, e, t);
      return t.enterFrame(a), [j(r)];
    }
    case "Exit": {
      const a = i("tensor", s, e, t);
      return t.exitFrame(), [j(a)];
    }
    case "NextIteration": {
      const a = i("tensor", s, e, t);
      return t.nextIteration(), [j(a)];
    }
    case "TensorArrayV3": {
      const a = i("size", s, e, t), r = i("dtype", s, e, t), n = i("elementShape", s, e, t), o = i("dynamicSize", s, e, t), u = i("clearAfterRead", s, e, t), l = i("identicalElementShapes", s, e, t), m = i("name", s, e, t), p = new cg(m, r, a, n, l, o, u);
      return t.addTensorArray(p), [p.idTensor, V(1)];
    }
    case "TensorArrayWriteV3": {
      const a = i("tensorArrayId", s, e, t), r = i("index", s, e, t), n = i("tensor", s, e, t), o = t.getTensorArray(a.id);
      return o.write(r, n), [o.idTensor];
    }
    case "TensorArrayReadV3": {
      const a = i("tensorArrayId", s, e, t), r = i("index", s, e, t);
      return [t.getTensorArray(a.id).read(r)];
    }
    case "TensorArrayGatherV3": {
      const a = i("tensorArrayId", s, e, t), r = i("indices", s, e, t), n = i("dtype", s, e, t);
      return [t.getTensorArray(a.id).gather(r, n)];
    }
    case "TensorArrayScatterV3": {
      const a = i("tensorArrayId", s, e, t), r = i("indices", s, e, t), n = i("tensor", s, e, t), o = t.getTensorArray(a.id);
      return o.scatter(r, n), [o.idTensor];
    }
    case "TensorArrayConcatV3": {
      const a = i("tensorArrayId", s, e, t), r = t.getTensorArray(a.id), n = i("dtype", s, e, t);
      return [r.concat(n)];
    }
    case "TensorArraySplitV3": {
      const a = i("tensorArrayId", s, e, t), r = i("tensor", s, e, t), n = i("lengths", s, e, t), o = t.getTensorArray(a.id);
      return o.split(n, r), [o.idTensor];
    }
    case "TensorArraySizeV3": {
      const a = i("tensorArrayId", s, e, t), r = t.getTensorArray(a.id);
      return [V(r.size(), "int32")];
    }
    case "TensorArrayCloseV3": {
      const a = i("tensorArrayId", s, e, t), r = t.getTensorArray(a.id);
      return r.clearAndClose(), [r.idTensor];
    }
    case "TensorListSetItem": {
      const a = i("tensorListId", s, e, t), r = i("index", s, e, t), n = i("tensor", s, e, t), o = t.getTensorList(a.id);
      return o.setItem(r, n), [o.idTensor];
    }
    case "TensorListGetItem": {
      const a = i("tensorListId", s, e, t), r = i("index", s, e, t), n = i("elementShape", s, e, t), o = i("elementDType", s, e, t);
      return [t.getTensorList(a.id).getItem(r, n, o)];
    }
    case "TensorListScatterV2":
    case "TensorListScatter": {
      const a = i("indices", s, e, t), r = i("tensor", s, e, t), n = i("elementShape", s, e, t), o = i("numElements", s, e, t), u = fg(r, a, n, o);
      return t.addTensorList(u), [u.idTensor];
    }
    case "TensorListReserve":
    case "EmptyTensorList": {
      const a = i("elementShape", s, e, t), r = i("elementDType", s, e, t);
      let n;
      s.op === "TensorListReserve" ? n = "numElements" : n = "maxNumElements";
      const o = i(n, s, e, t), u = s.op === "TensorListReserve" ? -1 : o, l = hg(a, r, o, u);
      return t.addTensorList(l), [l.idTensor];
    }
    case "TensorListGather": {
      const a = i("tensorListId", s, e, t), r = i("indices", s, e, t), n = i("elementShape", s, e, t), o = i("elementDType", s, e, t);
      return [t.getTensorList(a.id).gather(r, o, n)];
    }
    case "TensorListStack": {
      const a = i("tensorListId", s, e, t), r = i("elementShape", s, e, t), n = i("elementDType", s, e, t), o = i("numElements", s, e, t);
      return [t.getTensorList(a.id).stack(r, n, o)];
    }
    case "TensorListFromTensor": {
      const a = i("tensor", s, e, t), r = i("elementShape", s, e, t), n = i("elementDType", s, e, t), o = dg(a, r, n);
      return t.addTensorList(o), [o.idTensor];
    }
    case "TensorListConcat":
    case "TensorListConcatV2": {
      const a = i("tensorListId", s, e, t), r = t.getTensorList(a.id), n = i("dtype", s, e, t), o = i("elementShape", s, e, t);
      return [r.concat(n, o)];
    }
    case "TensorListPushBack": {
      const a = i("tensorListId", s, e, t), r = i("tensor", s, e, t), n = t.getTensorList(a.id);
      return n.pushBack(r), [n.idTensor];
    }
    case "TensorListPopBack": {
      const a = i("tensorListId", s, e, t), r = i("elementShape", s, e, t), n = i("elementDType", s, e, t);
      return [t.getTensorList(a.id).popBack(r, n)];
    }
    case "TensorListSplit": {
      const a = i("tensor", s, e, t), r = i("elementShape", s, e, t), n = i("lengths", s, e, t), o = yg(a, n, r);
      return t.addTensorList(o), [o.idTensor];
    }
    case "TensorListLength": {
      const a = i("tensorListId", s, e, t), r = t.getTensorList(a.id);
      return [V(r.size(), "int32")];
    }
    case "TensorListResize": {
      const a = i("tensorListId", s, e, t), r = i("size", s, e, t), o = t.getTensorList(a.id).resize(r);
      return t.addTensorList(o), [o.idTensor];
    }
    default:
      throw TypeError(`Node type ${s.op} is not implemented`);
  }
};
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Vt(s, e, t) {
  const [a, r] = i("fusedOps", s, e, t), n = a === "biasadd", o = !n, u = r === "prelu", l = a === "fusedbatchnorm", m = i("numArgs", s, e, t);
  if (n) {
    if (u && m !== 2)
      throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd and Prelu must have two extra arguments: bias and alpha.");
    if (!u && n && m !== 1)
      throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd must have one extra argument: bias.");
  }
  if (l)
    throw new Error("FusedConv2d and DepthwiseConv2d with FusedBatchNorm is not supported");
  const p = i("strides", s, e, t), c = be(s, e, t), d = i("dataFormat", s, e, t).toUpperCase(), h = i("dilations", s, e, t);
  let [b, f] = i("args", s, e, t);
  o && (f = b, b = void 0);
  const g = i("leakyreluAlpha", s, e, t);
  return {
    stride: p,
    pad: c,
    dataFormat: d,
    dilations: h,
    biasArg: b,
    preluArg: f,
    activationFunc: r,
    leakyreluAlpha: g
  };
}
const bg = (s, e, t, a = _) => {
  switch (s.op) {
    case "Conv1D": {
      const r = i("stride", s, e, t), n = i("pad", s, e, t), o = i("dataFormat", s, e, t).toUpperCase(), u = i("dilation", s, e, t);
      return [a.conv1d(i("x", s, e, t), i("filter", s, e, t), r, n, o, u)];
    }
    case "Conv2D": {
      const r = i("strides", s, e, t), n = be(s, e, t), o = i("dataFormat", s, e, t).toUpperCase(), u = i("dilations", s, e, t);
      return [a.conv2d(i("x", s, e, t), i("filter", s, e, t), [r[1], r[2]], n, o, [u[1], u[2]])];
    }
    case "_FusedConv2D": {
      const { stride: r, pad: n, dataFormat: o, dilations: u, biasArg: l, preluArg: m, activationFunc: p, leakyreluAlpha: c } = Vt(s, e, t);
      return [a.fused.conv2d({
        x: i("x", s, e, t),
        filter: i("filter", s, e, t),
        strides: [r[1], r[2]],
        pad: n,
        dataFormat: o,
        dilations: [u[1], u[2]],
        bias: l,
        activation: p,
        preluActivationWeights: m,
        leakyreluAlpha: c
      })];
    }
    case "FusedDepthwiseConv2dNative": {
      const { stride: r, pad: n, dataFormat: o, dilations: u, biasArg: l, preluArg: m, activationFunc: p, leakyreluAlpha: c } = Vt(s, e, t);
      return [a.fused.depthwiseConv2d({
        x: i("x", s, e, t),
        filter: i("filter", s, e, t),
        strides: [r[1], r[2]],
        pad: n,
        dataFormat: o,
        dilations: [u[1], u[2]],
        bias: l,
        activation: p,
        preluActivationWeights: m,
        leakyreluAlpha: c
      })];
    }
    case "Conv2DBackpropInput":
    case "Conv2dTranspose": {
      const r = i("outputShape", s, e, t), n = i("strides", s, e, t), o = be(s, e, t);
      return [a.conv2dTranspose(i("x", s, e, t), i("filter", s, e, t), r, [n[1], n[2]], o)];
    }
    case "DepthwiseConv2dNative":
    case "DepthwiseConv2d": {
      const r = i("strides", s, e, t), n = be(s, e, t), o = i("dilations", s, e, t), u = i("dataFormat", s, e, t).toUpperCase();
      return [a.depthwiseConv2d(i("input", s, e, t), i("filter", s, e, t), [r[1], r[2]], n, u, [o[1], o[2]])];
    }
    case "Conv3D": {
      const r = i("strides", s, e, t), n = i("pad", s, e, t), o = i("dataFormat", s, e, t).toUpperCase(), u = i("dilations", s, e, t);
      return [a.conv3d(i("x", s, e, t), i("filter", s, e, t), [r[1], r[2], r[3]], n, o, [u[1], u[2], u[3]])];
    }
    case "AvgPool": {
      const r = i("strides", s, e, t), n = i("pad", s, e, t), o = i("kernelSize", s, e, t);
      return [a.avgPool(i("x", s, e, t), [o[1], o[2]], [r[1], r[2]], n)];
    }
    case "MaxPool": {
      const r = i("strides", s, e, t), n = i("pad", s, e, t), o = i("kernelSize", s, e, t);
      return [a.maxPool(i("x", s, e, t), [o[1], o[2]], [r[1], r[2]], n)];
    }
    case "MaxPoolWithArgmax": {
      const r = i("strides", s, e, t), n = i("pad", s, e, t), o = i("kernelSize", s, e, t), u = i("includeBatchInIndex", s, e, t), { result: l, indexes: m } = a.maxPoolWithArgmax(i("x", s, e, t), [o[1], o[2]], [r[1], r[2]], n, u);
      return [l, m];
    }
    case "AvgPool3D": {
      const r = i("strides", s, e, t), n = i("pad", s, e, t), o = i("kernelSize", s, e, t);
      return [a.avgPool3d(i("x", s, e, t), [o[1], o[2], o[3]], [r[1], r[2], r[3]], n)];
    }
    case "MaxPool3D": {
      const r = i("strides", s, e, t), n = i("pad", s, e, t), o = i("kernelSize", s, e, t);
      return [a.maxPool3d(i("x", s, e, t), [o[1], o[2], o[3]], [r[1], r[2], r[3]], n)];
    }
    case "Dilation2D": {
      const r = i("strides", s, e, t), n = i("pad", s, e, t), o = i("dilations", s, e, t), u = r[1], l = r[2], m = o[1], p = o[2];
      return [a.dilation2d(
        i("x", s, e, t),
        i("filter", s, e, t),
        [u, l],
        n,
        [m, p],
        "NHWC"
        /* dataFormat */
      )];
    }
    default:
      throw TypeError(`Node type ${s.op} is not implemented`);
  }
};
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Ng = (s, e, t, a = _) => {
  switch (s.op) {
    case "Fill": {
      const r = i("shape", s, e, t), n = i("dtype", s, e, t), o = i("value", s, e, t);
      return [a.fill(r, o, n)];
    }
    case "LinSpace": {
      const r = i("start", s, e, t), n = i("stop", s, e, t), o = i("num", s, e, t);
      return [a.linspace(r, n, o)];
    }
    case "Multinomial": {
      const r = i("logits", s, e, t), n = i("numSamples", s, e, t), o = i("seed", s, e, t);
      return [a.multinomial(r, n, o)];
    }
    case "OneHot": {
      const r = i("indices", s, e, t), n = i("depth", s, e, t), o = i("onValue", s, e, t), u = i("offValue", s, e, t), l = i("dtype", s, e, t);
      return [a.oneHot(r, n, o, u, l)];
    }
    case "Ones":
      return [a.ones(i("shape", s, e, t), i("dtype", s, e, t))];
    case "OnesLike":
      return [a.onesLike(i("x", s, e, t))];
    case "RandomStandardNormal":
      return [a.randomStandardNormal(i("shape", s, e, t), i("dtype", s, e, t), i("seed", s, e, t))];
    case "RandomUniform":
      return [a.randomUniform(
        // tslint:disable-next-line:no-any
        i("shape", s, e, t),
        i("minval", s, e, t),
        i("maxval", s, e, t),
        i("dtype", s, e, t)
      )];
    case "Range": {
      const r = i("start", s, e, t), n = i("stop", s, e, t), o = i("step", s, e, t);
      return [a.range(r, n, o, i("dtype", s, e, t))];
    }
    case "TruncatedNormal": {
      const r = i("shape", s, e, t), n = i("mean", s, e, t), o = i("stdDev", s, e, t), u = i("seed", s, e, t);
      return [a.truncatedNormal(r, n, o, i("dtype", s, e, t), u)];
    }
    case "Zeros":
      return [a.zeros(i("shape", s, e, t), i("dtype", s, e, t))];
    case "ZerosLike":
      return [a.zerosLike(i("x", s, e, t))];
    default:
      throw TypeError(`Node type ${s.op} is not implemented`);
  }
};
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ie(s, e, t) {
  const a = i("boxes", s, e, t), r = i("scores", s, e, t), n = i("maxOutputSize", s, e, t), o = i("iouThreshold", s, e, t), u = i("scoreThreshold", s, e, t), l = i("softNmsSigma", s, e, t);
  return {
    boxes: a,
    scores: r,
    maxOutputSize: n,
    iouThreshold: o,
    scoreThreshold: u,
    softNmsSigma: l
  };
}
const wg = async (s, e, t, a, r = _) => {
  switch (s.op) {
    case "NonMaxSuppressionV5": {
      const { boxes: n, scores: o, maxOutputSize: u, iouThreshold: l, scoreThreshold: m, softNmsSigma: p } = Ie(s, e, t), c = await r.image.nonMaxSuppressionWithScoreAsync(n, o, u, l, m, p);
      return [c.selectedIndices, c.selectedScores];
    }
    case "NonMaxSuppressionV4": {
      const { boxes: n, scores: o, maxOutputSize: u, iouThreshold: l, scoreThreshold: m } = Ie(s, e, t), p = i("padToMaxOutputSize", s, e, t), c = await r.image.nonMaxSuppressionPaddedAsync(n, o, u, l, m, p);
      return [c.selectedIndices, c.validOutputs];
    }
    case "NonMaxSuppressionV3":
    case "NonMaxSuppressionV2": {
      const { boxes: n, scores: o, maxOutputSize: u, iouThreshold: l, scoreThreshold: m } = Ie(s, e, t);
      return [await r.image.nonMaxSuppressionAsync(n, o, u, l, m)];
    }
    case "Where": {
      const n = r.cast(i("condition", s, e, t), "bool"), o = [await r.whereAsync(n)];
      return n.dispose(), o;
    }
    case "ListDiff":
      return r.setdiff1dAsync(i("x", s, e, t), i("y", s, e, t));
    default:
      throw TypeError(`Node type ${s.op} is not implemented`);
  }
};
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Tg = (s, e, t, a = _) => {
  switch (s.op) {
    case "LowerBound": {
      const r = i("sortedSequence", s, e, t), n = i("values", s, e, t);
      return [a.lowerBound(r, n)];
    }
    case "TopKV2": {
      const r = i("x", s, e, t), n = i("k", s, e, t), o = i("sorted", s, e, t), u = a.topk(r, n, o);
      return [u.values, u.indices];
    }
    case "UpperBound": {
      const r = i("sortedSequence", s, e, t), n = i("values", s, e, t);
      return [a.upperBound(r, n)];
    }
    case "Unique": {
      const r = i("x", s, e, t), n = a.unique(r);
      return [n.values, n.indices];
    }
    case "UniqueV2": {
      const r = i("x", s, e, t), n = i("axis", s, e, t), o = a.unique(r, n);
      return [o.values, o.indices];
    }
    default:
      throw TypeError(`Node type ${s.op} is not implemented`);
  }
};
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Sg = (s, e, t, a = _) => {
  switch (s.op) {
    case "Const":
      return e[s.name];
    case "PlaceholderWithDefault":
      const r = i("default", s, e, t);
      return [E(s.name, e, t) || r];
    case "Placeholder":
      return [E(s.name, e, t)];
    case "Identity":
    case "StopGradient":
    case "FakeQuantWithMinMaxVars": {
      const p = i("x", s, e, t);
      return [j(p)];
    }
    case "IdentityN":
      return i("x", s, e, t).map((p) => j(p));
    case "Snapshot":
      const n = i("x", s, e, t);
      return [j(n)];
    case "Shape":
      return [a.tensor1d(i("x", s, e, t).shape, "int32")];
    case "ShapeN":
      return i("x", s, e, t).map((p) => a.tensor1d(p.shape));
    case "Size":
      return [a.scalar(i("x", s, e, t).size, "int32")];
    case "Rank":
      return [a.scalar(i("x", s, e, t).rank, "int32")];
    case "NoOp":
      return [a.scalar(1)];
    case "Print":
      const o = i("x", s, e, t), u = i("data", s, e, t), l = i("message", s, e, t), m = i("summarize", s, e, t);
      console.warn("The graph has a tf.print() operation,usually used for debugging, which slows down performance."), console.log(l);
      for (let p = 0; p < u.length; p++)
        console.log(Array.prototype.slice.call(u[p].dataSync()).slice(0, m));
      return [o];
    default:
      throw TypeError(`Node type ${s.op} is not implemented`);
  }
};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class vg {
  /**
   * Constructor of HashTable. Creates a hash table.
   *
   * @param keyDType `dtype` of the table keys.
   * @param valueDType `dtype` of the table values.
   */
  constructor(e, t) {
    this.keyDType = e, this.valueDType = t, this.handle = V(0), this.tensorMap = /* @__PURE__ */ new Map(), H(this.handle);
  }
  get id() {
    return this.handle.id;
  }
  /**
   * Dispose the tensors and handle and clear the hashtable.
   */
  clearAndClose() {
    this.tensorMap.forEach((e) => e.dispose()), this.tensorMap.clear(), this.handle.dispose();
  }
  /**
   * The number of items in the hash table.
   */
  size() {
    return this.tensorMap.size;
  }
  /**
   * The number of items in the hash table as a rank-0 tensor.
   */
  tensorSize() {
    return V(this.size(), "int32");
  }
  /**
   * Replaces the contents of the table with the specified keys and values.
   * @param keys Keys to store in the hashtable.
   * @param values Values to store in the hashtable.
   */
  async import(e, t) {
    this.checkKeyAndValueTensor(e, t);
    const a = await e.data();
    return this.tensorMap.forEach((r) => r.dispose()), this.tensorMap.clear(), C(() => {
      const r = ae(t), n = a.length, o = r.length;
      N(n === o, () => `The number of elements doesn't match, keys has ${n} elements, the values has ${o} elements.`);
      for (let u = 0; u < n; u++) {
        const l = a[u], m = r[u];
        H(m), this.tensorMap.set(l, m);
      }
      return this.handle;
    });
  }
  /**
   * Looks up keys in a hash table, outputs the corresponding values.
   *
   * Performs batch lookups, for every element in the key tensor, `find`
   * stacks the corresponding value into the return tensor.
   *
   * If an element is not present in the table, the given `defaultValue` is
   * used.
   *
   * @param keys Keys to look up. Must have the same type as the keys of the
   *     table.
   * @param defaultValue The scalar `defaultValue` is the value output for keys
   *     not present in the table. It must also be of the same type as the
   *     table values.
   */
  async find(e, t) {
    this.checkKeyAndValueTensor(e, t);
    const a = await e.data();
    return C(() => {
      const r = [];
      for (let n = 0; n < a.length; n++) {
        const o = a[n], u = this.findWithDefault(o, t);
        r.push(u);
      }
      return ee(r);
    });
  }
  // tslint:disable-next-line: no-any
  findWithDefault(e, t) {
    const a = this.tensorMap.get(e);
    return a ?? t;
  }
  checkKeyAndValueTensor(e, t) {
    if (e.dtype !== this.keyDType)
      throw new Error(`Expect key dtype ${this.keyDType}, but got ${e.dtype}`);
    if (t.dtype !== this.valueDType)
      throw new Error(`Expect value dtype ${this.valueDType}, but got ${t.dtype}`);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Og = async (s, e, t, a) => {
  switch (s.op) {
    case "HashTable":
    case "HashTableV2": {
      const r = i("keyDType", s, e, t), n = i("valueDType", s, e, t), o = new vg(r, n);
      return a.addHashTable(s.name, o), [o.handle];
    }
    case "LookupTableImport":
    case "LookupTableImportV2": {
      const r = i("tableHandle", s, e, t, a), n = i("keys", s, e, t), o = i("values", s, e, t);
      return [await a.getHashTableById(r.id).import(n, o)];
    }
    case "LookupTableFind":
    case "LookupTableFindV2": {
      const r = i("tableHandle", s, e, t, a), n = i("keys", s, e, t), o = i("defaultValue", s, e, t);
      return [await a.getHashTableById(r.id).find(n, o)];
    }
    case "LookupTableSize":
    case "LookupTableSizeV2": {
      const r = i("tableHandle", s, e, t, a);
      return [a.getHashTableById(r.id).tensorSize()];
    }
    default:
      throw TypeError(`Node type ${s.op} is not implemented`);
  }
};
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const _g = (s, e, t, a = _) => {
  switch (s.op) {
    case "ResizeBilinear": {
      const r = i("images", s, e, t), n = i("size", s, e, t), o = i("alignCorners", s, e, t), u = i("halfPixelCenters", s, e, t);
      return [a.image.resizeBilinear(r, [n[0], n[1]], o, u)];
    }
    case "ResizeNearestNeighbor": {
      const r = i("images", s, e, t), n = i("size", s, e, t), o = i("alignCorners", s, e, t), u = i("halfPixelCenters", s, e, t);
      return [a.image.resizeNearestNeighbor(r, [n[0], n[1]], o, u)];
    }
    case "CropAndResize": {
      const r = i("image", s, e, t), n = i("boxes", s, e, t), o = i("boxInd", s, e, t), u = i("cropSize", s, e, t), l = i("method", s, e, t), m = i("extrapolationValue", s, e, t);
      return [a.image.cropAndResize(r, n, o, u, l, m)];
    }
    case "ImageProjectiveTransformV3": {
      const r = i("images", s, e, t), n = i("transforms", s, e, t), o = i("outputShape", s, e, t), u = i("fillValue", s, e, t), l = i("interpolation", s, e, t), m = i("fillMode", s, e, t);
      return [a.image.transform(r, n, l.toLowerCase(), m.toLowerCase(), u, o)];
    }
    default:
      throw TypeError(`Node type ${s.op} is not implemented`);
  }
};
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Ag = (s, e, t, a = _) => {
  switch (s.op) {
    case "Equal":
      return [a.equal(i("a", s, e, t), i("b", s, e, t))];
    case "NotEqual":
      return [a.notEqual(i("a", s, e, t), i("b", s, e, t))];
    case "Greater":
      return [a.greater(i("a", s, e, t), i("b", s, e, t))];
    case "GreaterEqual":
      return [a.greaterEqual(i("a", s, e, t), i("b", s, e, t))];
    case "Less":
      return [a.less(i("a", s, e, t), i("b", s, e, t))];
    case "LessEqual":
      return [a.lessEqual(i("a", s, e, t), i("b", s, e, t))];
    case "LogicalAnd":
      return [a.logicalAnd(i("a", s, e, t), i("b", s, e, t))];
    case "LogicalNot":
      return [a.logicalNot(i("a", s, e, t))];
    case "LogicalOr":
      return [a.logicalOr(i("a", s, e, t), i("b", s, e, t))];
    case "Select":
    case "SelectV2":
      return [a.where(i("condition", s, e, t), i("a", s, e, t), i("b", s, e, t))];
    default:
      throw TypeError(`Node type ${s.op} is not implemented`);
  }
};
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Eg = (s, e, t, a = _) => {
  switch (s.op) {
    case "BatchMatMul":
    case "BatchMatMulV2":
    case "MatMul":
      return [a.matMul(i("a", s, e, t), i("b", s, e, t), i("transposeA", s, e, t), i("transposeB", s, e, t))];
    case "Einsum":
      return [a.einsum(i("equation", s, e, t), ...i("tensors", s, e, t))];
    case "Transpose":
      return [a.transpose(i("x", s, e, t), i("perm", s, e, t))];
    case "_FusedMatMul":
      const [r, n] = i("fusedOps", s, e, t), o = r === "biasadd", u = n === "prelu", l = i("numArgs", s, e, t), m = i("leakyreluAlpha", s, e, t);
      if (o) {
        if (u && l !== 2)
          throw new Error("Fused MatMul with BiasAdd and Prelu must have two extra arguments: bias and alpha.");
        if (!u && l !== 1)
          throw new Error("Fused MatMul with BiasAdd must have one extra argument: bias.");
      }
      const [p, c] = i("args", s, e, t);
      return [a.fused.matMul({
        a: i("a", s, e, t),
        b: i("b", s, e, t),
        transposeA: i("transposeA", s, e, t),
        transposeB: i("transposeB", s, e, t),
        bias: p,
        activation: n,
        preluActivationWeights: c,
        leakyreluAlpha: m
      })];
    default:
      throw TypeError(`Node type ${s.op} is not implemented`);
  }
};
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const kg = (s, e, t, a = _) => {
  switch (s.op) {
    case "EuclideanNorm":
      return [a.euclideanNorm(i("x", s, e, t), i("axis", s, e, t), i("keepDims", s, e, t))];
    case "FusedBatchNorm":
    case "FusedBatchNormV2":
      return [a.batchNorm(i("x", s, e, t), i("mean", s, e, t), i("variance", s, e, t), i("offset", s, e, t), i("scale", s, e, t), i("epsilon", s, e, t))];
    case "FusedBatchNormV3":
      return [a.batchNorm(i("x", s, e, t), i("mean", s, e, t), i("variance", s, e, t), i("offset", s, e, t), i("scale", s, e, t), i("epsilon", s, e, t))];
    case "LRN":
      return [a.localResponseNormalization(i("x", s, e, t), i("radius", s, e, t), i("bias", s, e, t), i("alpha", s, e, t), i("beta", s, e, t))];
    case "Softmax":
      return [a.softmax(i("x", s, e, t))];
    case "LogSoftmax":
      return [a.logSoftmax(i("x", s, e, t))];
    case "SparseToDense":
      return [a.sparseToDense(i("sparseIndices", s, e, t), i("outputShape", s, e, t), i("sparseValues", s, e, t), i("defaultValue", s, e, t))];
    default:
      throw TypeError(`Node type ${s.op} is not implemented`);
  }
};
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const $g = (s, e, t, a = _) => {
  switch (s.op) {
    case "Max": {
      const u = i("axis", s, e, t), l = i("keepDims", s, e, t);
      return [a.max(i("x", s, e, t), u, l)];
    }
    case "Mean": {
      const u = i("axis", s, e, t), l = i("keepDims", s, e, t);
      return [a.mean(i("x", s, e, t), u, l)];
    }
    case "Min": {
      const u = i("axis", s, e, t), l = i("keepDims", s, e, t);
      return [a.min(i("x", s, e, t), u, l)];
    }
    case "Sum": {
      const u = i("axis", s, e, t), l = i("keepDims", s, e, t);
      return [a.sum(i("x", s, e, t), u, l)];
    }
    case "All": {
      const u = i("axis", s, e, t), l = i("keepDims", s, e, t);
      return [a.all(i("x", s, e, t), u, l)];
    }
    case "Any": {
      const u = i("axis", s, e, t), l = i("keepDims", s, e, t);
      return [a.any(i("x", s, e, t), u, l)];
    }
    case "ArgMax": {
      const u = i("axis", s, e, t);
      return [a.argMax(i("x", s, e, t), u)];
    }
    case "ArgMin": {
      const u = i("axis", s, e, t);
      return [a.argMin(i("x", s, e, t), u)];
    }
    case "Prod": {
      const u = i("axis", s, e, t), l = i("keepDims", s, e, t);
      return [a.prod(i("x", s, e, t), u, l)];
    }
    case "Cumprod": {
      const u = i("axis", s, e, t), l = i("exclusive", s, e, t), m = i("reverse", s, e, t);
      return [a.cumprod(i("x", s, e, t), u, l, m)];
    }
    case "Cumsum": {
      const u = i("axis", s, e, t), l = i("exclusive", s, e, t), m = i("reverse", s, e, t);
      return [a.cumsum(i("x", s, e, t), u, l, m)];
    }
    case "Bincount":
      const r = i("x", s, e, t), n = i("weights", s, e, t), o = i("size", s, e, t);
      return [a.bincount(r, n, o)];
    case "DenseBincount": {
      const u = i("x", s, e, t), l = i("weights", s, e, t), m = i("size", s, e, t), p = i("binaryOutput", s, e, t);
      return [a.denseBincount(u, l, m, p)];
    }
    default:
      throw TypeError(`Node type ${s.op} is not implemented`);
  }
};
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Dg = (s, e, t, a = _) => {
  switch (s.op) {
    case "ConcatV2":
    case "Concat": {
      const r = i("n", s, e, t), n = i("axis", s, e, t);
      let o = i("tensors", s, e, t);
      return o = o.slice(0, r), [a.concat(o, n)];
    }
    case "Gather": {
      const r = i("x", s, e, t), n = i("indices", s, e, t);
      return [a.gather(r, a.cast(n, "int32"), 0)];
    }
    case "GatherV2": {
      const r = i("axis", s, e, t), n = i("batchDims", s, e, t), o = i("x", s, e, t), u = i("indices", s, e, t);
      return [a.gather(o, a.cast(u, "int32"), r, n)];
    }
    case "Reverse": {
      const r = i("dims", s, e, t), n = [];
      for (let u = 0; u < r.length; u++)
        r[u] && n.push(u);
      const o = i("x", s, e, t);
      return [a.reverse(o, n)];
    }
    case "ReverseV2": {
      const r = i("axis", s, e, t), n = i("x", s, e, t);
      return [a.reverse(n, r)];
    }
    case "Slice": {
      const r = i("begin", s, e, t), n = i("size", s, e, t);
      return [a.slice(i("x", s, e, t), r, n)];
    }
    case "StridedSlice": {
      const r = i("begin", s, e, t), n = i("end", s, e, t), o = i("strides", s, e, t), u = i("beginMask", s, e, t), l = i("endMask", s, e, t), m = i("ellipsisMask", s, e, t), p = i("newAxisMask", s, e, t), c = i("shrinkAxisMask", s, e, t), d = i("x", s, e, t);
      return [a.stridedSlice(d, r, n, o, u, l, m, p, c)];
    }
    case "Pack":
      return C(() => {
        const r = i("axis", s, e, t), n = i("tensors", s, e, t), o = n[0].shape, u = a.squeeze(n[0]).shape, l = n.map((m) => {
          const p = le(m.shape, o);
          if (!p && !le(a.squeeze(m).shape, u))
            throw new Error("the input tensors shape does not match");
          return p ? m : a.reshape(m, o);
        });
        return [a.stack(l, r)];
      });
    case "Unpack": {
      const r = i("axis", s, e, t), n = i("tensor", s, e, t);
      return a.unstack(n, r);
    }
    case "Tile": {
      const r = i("reps", s, e, t);
      return [a.tile(i("x", s, e, t), r)];
    }
    case "Split":
    case "SplitV": {
      const r = i("axis", s, e, t), n = i("numOrSizeSplits", s, e, t), o = i("x", s, e, t);
      return a.split(o, n, r);
    }
    case "ScatterNd": {
      const r = i("indices", s, e, t), n = i("values", s, e, t), o = i("shape", s, e, t);
      return [a.scatterND(r, n, o)];
    }
    case "GatherNd": {
      const r = i("x", s, e, t), n = i("indices", s, e, t);
      return [a.gatherND(r, n)];
    }
    case "SparseToDense": {
      const r = i("sparseIndices", s, e, t), n = i("outputShape", s, e, t), o = i("sparseValues", s, e, t), u = i("defaultValue", s, e, t);
      return [a.sparseToDense(r, o, n, o.dtype === u.dtype ? u : a.cast(u, o.dtype))];
    }
    default:
      throw TypeError(`Node type ${s.op} is not implemented`);
  }
};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Ig = (s, e, t, a = _) => {
  switch (s.op) {
    case "SparseFillEmptyRows": {
      const { outputIndices: r, outputValues: n, emptyRowIndicator: o, reverseIndexMap: u } = a.sparse.sparseFillEmptyRows(i("indices", s, e, t), i("values", s, e, t), i("denseShape", s, e, t), i("defaultValue", s, e, t));
      return [
        r,
        n,
        o,
        u
      ];
    }
    case "SparseReshape": {
      const { outputIndices: r, outputShape: n } = a.sparse.sparseReshape(i("inputIndices", s, e, t), i("inputShape", s, e, t), i("newShape", s, e, t));
      return [r, n];
    }
    case "SparseSegmentMean":
      return [a.sparse.sparseSegmentMean(i("data", s, e, t), i("indices", s, e, t), i("segmentIds", s, e, t))];
    case "SparseSegmentSum":
      return [a.sparse.sparseSegmentSum(i("data", s, e, t), i("indices", s, e, t), i("segmentIds", s, e, t))];
    default:
      throw TypeError(`Node type ${s.op} is not implemented`);
  }
};
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Cg = (s, e, t, a = _) => {
  switch (s.op) {
    case "FFT":
      return [a.fft(i("x", s, e, t))];
    case "IFFT":
      return [a.ifft(i("x", s, e, t))];
    case "RFFT":
      return [a.rfft(i("x", s, e, t))];
    case "IRFFT":
      return [a.irfft(i("x", s, e, t))];
    default:
      throw TypeError(`Node type ${s.op} is not implemented`);
  }
};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const xg = (s, e, t, a = _) => {
  switch (s.op) {
    case "StringNGrams": {
      const { nGrams: r, nGramsSplits: n } = a.string.stringNGrams(i("data", s, e, t), i("dataSplits", s, e, t), i("separator", s, e, t), i("nGramWidths", s, e, t), i("leftPad", s, e, t), i("rightPad", s, e, t), i("padWidth", s, e, t), i("preserveShortSequences", s, e, t));
      return [r, n];
    }
    case "StringSplit": {
      const { indices: r, values: n, shape: o } = a.string.stringSplit(i("input", s, e, t), i("delimiter", s, e, t), i("skipEmpty", s, e, t));
      return [r, n, o];
    }
    case "StringToHashBucketFast":
      return [a.string.stringToHashBucketFast(i("input", s, e, t), i("numBuckets", s, e, t))];
    default:
      throw TypeError(`Node type ${s.op} is not implemented`);
  }
};
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const zg = (s, e, t, a = _) => {
  switch (s.op) {
    case "Cast":
      return [a.cast(i("x", s, e, t), i("dtype", s, e, t))];
    case "ExpandDims": {
      const r = i("axis", s, e, t);
      return [a.expandDims(i("x", s, e, t), r)];
    }
    case "Squeeze": {
      const r = i("axis", s, e, t);
      return [a.squeeze(i("x", s, e, t), r)];
    }
    case "Reshape":
      return [a.reshape(i("x", s, e, t), i("shape", s, e, t))];
    case "MirrorPad":
      return [a.mirrorPad(i("x", s, e, t), i("padding", s, e, t), i("mode", s, e, t))];
    case "PadV2":
    case "Pad":
      return [a.pad(i("x", s, e, t), i("padding", s, e, t), i("constantValue", s, e, t))];
    case "SpaceToBatchND": {
      const r = i("blockShape", s, e, t), n = i("paddings", s, e, t);
      return [a.spaceToBatchND(i("x", s, e, t), r, n)];
    }
    case "BatchToSpaceND": {
      const r = i("blockShape", s, e, t), n = i("crops", s, e, t);
      return [a.batchToSpaceND(i("x", s, e, t), r, n)];
    }
    case "DepthToSpace": {
      const r = i("blockSize", s, e, t), n = i("dataFormat", s, e, t).toUpperCase();
      return [a.depthToSpace(i("x", s, e, t), r, n)];
    }
    case "BroadcastTo":
      return [a.broadcastTo(i("x", s, e, t), i("shape", s, e, t))];
    case "BroadcastArgs":
      return [a.broadcastArgs(i("s0", s, e, t), i("s1", s, e, t))];
    default:
      throw TypeError(`Node type ${s.op} is not implemented`);
  }
};
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Rt(s, e, t, a, r = C) {
  const n = ((o, u, l) => {
    switch (o.category) {
      case "arithmetic":
        return r(() => pg(o, u, l));
      case "basic_math":
        return r(() => mg(o, u, l));
      case "control":
        return gg(o, u, l);
      case "convolution":
        return r(() => bg(o, u, l));
      case "creation":
        return r(() => Ng(o, u, l));
      case "dynamic":
        return wg(o, u, l);
      case "evaluation":
        return r(() => Tg(o, u, l));
      case "image":
        return r(() => _g(o, u, l));
      case "graph":
        return r(() => Sg(o, u, l));
      case "logical":
        return r(() => Ag(o, u, l));
      case "matrices":
        return r(() => Eg(o, u, l));
      case "normalization":
        return r(() => kg(o, u, l));
      case "reduction":
        return r(() => $g(o, u, l));
      case "slice_join":
        return r(() => Dg(o, u, l));
      case "sparse":
        return r(() => Ig(o, u, l));
      case "spectral":
        return r(() => Cg(o, u, l));
      case "string":
        return r(() => xg(o, u, l));
      case "transformation":
        return r(() => zg(o, u, l));
      case "hash_table":
        return Og(o, u, l, a);
      case "custom":
        const m = Un(o.op);
        if (m && m.customExecutor)
          return m.customExecutor(new lg(o, u, l));
        throw TypeError(`Custom op ${o.op} is not registered.`);
      default:
        throw TypeError(`Unknown op '${o.op}'. File an issue at https://github.com/tensorflow/tfjs/issues so we can add it, or register a custom execution with tf.registerOp()`);
    }
  })(s, e, t);
  return ve(n) ? n.then((o) => [].concat(o)) : [].concat(n);
}
class jt {
  constructor(e = {}, t = {}, a = {}, r = {}) {
    this.weightMap = e, this.tensorArrayMap = t, this.tensorListMap = a, this.functionMap = r, this.rootContext = { id: 0, frameName: "", iterationId: 0 }, this.contexts = [this.rootContext], this.lastId = 0, this.generateCurrentContextIds();
  }
  newFrame(e, t) {
    return { id: e, frameName: t, iterationId: 0 };
  }
  /**
   * Set the current context
   * @param contexts: ExecutionContextInfo[] the current path of execution
   * frames
   */
  set currentContext(e) {
    this.contexts !== e && (this.contexts = e, this.generateCurrentContextIds());
  }
  get currentContext() {
    return this.contexts;
  }
  /**
   * Returns the current context in string format.
   */
  get currentContextId() {
    return this._currentContextIds[0];
  }
  /**
   * Returns the current context and all parent contexts in string format.
   * This allow access to the nodes in the current and parent frames.
   */
  get currentContextIds() {
    return this._currentContextIds;
  }
  generateCurrentContextIds() {
    const e = [];
    for (let t = 0; t < this.contexts.length - 1; t++) {
      const a = this.contexts.slice(0, this.contexts.length - t);
      e.push(this.contextIdforContexts(a));
    }
    e.push(""), this._currentContextIds = e;
  }
  contextIdforContexts(e) {
    return e ? e.map((t) => t.id === 0 && t.iterationId === 0 ? "" : `${t.frameName}-${t.iterationId}`).join("/") : "";
  }
  /**
   * Enter a new frame, a new context is pushed on the current context list.
   * @param frameId new frame id
   */
  enterFrame(e) {
    this.contexts && (this.lastId++, this.contexts = this.contexts.slice(), this.contexts.push(this.newFrame(this.lastId, e)), this._currentContextIds.unshift(this.contextIdforContexts(this.contexts)));
  }
  /**
   * Exit the current frame, the last context is removed from the current
   * context list.
   */
  exitFrame() {
    if (this.contexts && this.contexts.length > 1)
      this.contexts = this.contexts.slice(), this.contexts.splice(-1), this.currentContextIds.shift();
    else
      throw new Error("Cannot exit frame, the context is empty");
  }
  /**
   * Enter the next iteration of a loop, the iteration id of last context is
   * increased.
   */
  nextIteration() {
    if (this.contexts && this.contexts.length > 0) {
      this.contexts = this.contexts.slice(), this.lastId++;
      const e = Object.assign({}, this.contexts[this.contexts.length - 1]);
      e.iterationId += 1, e.id = this.lastId, this.contexts.splice(-1, 1, e), this._currentContextIds.splice(0, 1, this.contextIdforContexts(this.contexts));
    } else
      throw new Error("Cannot increase frame iteration, the context is empty");
  }
  getWeight(e) {
    return this.weightMap[e];
  }
  addTensorArray(e) {
    this.tensorArrayMap[e.id] = e;
  }
  getTensorArray(e) {
    return this.tensorArrayMap[e];
  }
  addTensorList(e) {
    this.tensorListMap[e.id] = e;
  }
  getTensorList(e) {
    return this.tensorListMap[e];
  }
  dispose(e) {
    for (const t in this.tensorArrayMap)
      this.tensorArrayMap[t].clearAndClose(e);
    for (const t in this.tensorListMap)
      this.tensorListMap[t].clearAndClose(e);
  }
}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Bt(s, e, t, a) {
  const r = /* @__PURE__ */ new Set(), n = [];
  let o = null, u = null;
  const l = /* @__PURE__ */ new Set(), m = Object.keys(s).map((d) => D(d)[0]);
  let p = [];
  a != null && (p = a.map((d) => D(d.name)[0]));
  const c = [...e];
  for (; c.length > 0; ) {
    const d = c.pop();
    if ((Jn(d) || Rg(d) || jg(d)) && o == null && (o = d, u = o.children.map((h) => h.name).filter((h) => r.has(h))), r.add(d.name), t[d.name] == null && m.indexOf(d.name) === -1 && p.indexOf(d.name) === -1) {
      if (d.inputs.length === 0) {
        n.push(d.name);
        continue;
      }
      d.inputs.forEach((h) => {
        l.has(h.name) || (l.add(h.name), c.push(h));
      });
    }
  }
  return { inputs: s, outputs: e, usedNodes: r, missingInputs: n, dynamicNode: o, syncInputs: u };
}
function Lg(s, e, t) {
  const { usedNodes: a, inputs: r } = t, n = [], o = Object.keys(r).map((p) => D(p)[0]).map((p) => s.nodes[p]), u = s.initNodes;
  o.forEach((p) => {
    a.has(p.name) && n.push(p);
  }), s.weights.forEach((p) => {
    a.has(p.name) && n.push(p);
  }), u != null && u.forEach((p) => {
    a.has(p.name) && n.push(p);
  });
  const l = /* @__PURE__ */ new Set(), m = [];
  for (; n.length > 0; ) {
    const p = n.pop();
    l.add(p.name), e[p.name] || m.push(p), p.children.forEach((c) => {
      !l.has(c.name) && a.has(c.name) && c.inputs.every((d) => l.has(d.name)) && n.push(c);
    });
  }
  return m;
}
const Fg = [
  "Switch",
  "Merge",
  "Enter",
  "Exit",
  "NextIteration",
  "StatelessIf",
  "StatelessWhile",
  "if",
  "While"
], Pg = [
  "NonMaxSuppressionV2",
  "NonMaxSuppressionV3",
  "NonMaxSuppressionV5",
  "Where"
], Vg = [
  "HashTable",
  "HashTableV2",
  "LookupTableImport",
  "LookupTableImportV2",
  "LookupTableFind",
  "LookupTableFindV2",
  "LookupTableSize",
  "LookupTableSizeV2"
];
function Jn(s) {
  return Fg.indexOf(s.op) >= 0;
}
function Rg(s) {
  return Pg.indexOf(s.op) >= 0;
}
function jg(s) {
  return Vg.indexOf(s.op) >= 0;
}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Ae {
  /**
   *
   * @param graph Graph the model or function graph to be executed.
   * @param parent When building function exector you need to set the parent
   * executor. Since the weights and function executor maps are set at parant
   * level, that function executor can access the function maps and weight maps
   * through the parent.
   */
  constructor(e, t) {
    this.graph = e, this.parent = t, this.compiledMap = /* @__PURE__ */ new Map(), this._weightMap = {}, this.SEPERATOR = ",", this._functions = {}, this._functionExecutorMap = {}, this.intermediateTensors = {}, this.keepTensorForDebug = !1, this._outputs = e.outputs, this._inputs = e.inputs, this._initNodes = e.initNodes, this._signature = e.signature, this._functions = e.functions, e.functions != null && Object.keys(e.functions).forEach((a) => {
      this._functionExecutorMap[a] = new Ae(e.functions[a], this);
    });
  }
  get weightIds() {
    return this.parent ? this.parent.weightIds : this._weightIds;
  }
  get functionExecutorMap() {
    return this.parent ? this.parent.functionExecutorMap : this._functionExecutorMap;
  }
  get weightMap() {
    return this.parent ? this.parent.weightMap : this._weightMap;
  }
  set weightMap(e) {
    const t = Object.keys(e).map((a) => e[a].map((r) => r.id));
    this._weightIds = [].concat(...t), this._weightMap = e;
  }
  /**
   * Set `ResourceManager` shared by executors of a model.
   * @param resourceManager: `ResourceManager` of the `GraphModel`.
   */
  set resourceManager(e) {
    this._resourceManager = e;
  }
  get inputs() {
    return this._inputs.map((e) => ({
      name: e.name,
      shape: e.attrParams.shape ? e.attrParams.shape.value : void 0,
      dtype: e.attrParams.dtype ? e.attrParams.dtype.value : void 0
    }));
  }
  get outputs() {
    return this._outputs.map((e) => ({
      name: e.name,
      shape: e.attrParams.shape ? e.attrParams.shape.value : void 0,
      dtype: e.attrParams.dtype ? e.attrParams.dtype.value : void 0
    }));
  }
  get inputNodes() {
    return this._inputs.map((e) => e.signatureKey || e.name);
  }
  get outputNodes() {
    return this._outputs.map((e) => {
      const t = e.signatureKey || e.name;
      return e.defaultOutput ? `${t}:${e.defaultOutput}` : t;
    });
  }
  get functions() {
    return Object.keys(this._functions).reduce((e, t) => (e[t] = this._functions[t].signature, e), {});
  }
  getCompilationKey(e, t) {
    const a = e.map((n) => n.name).sort(), r = t.map((n) => n.name).sort();
    return a.join(this.SEPERATOR) + "--" + r.join(this.SEPERATOR);
  }
  /**
   * Compiles the inference graph and returns the minimal set of nodes that are
   * required for execution, in the correct execution order.
   */
  compile(e, t) {
    const a = Bt(e, t, this.weightMap, this._initNodes), { missingInputs: r, dynamicNode: n, syncInputs: o } = a;
    if (n != null)
      throw new Error(`This execution contains the node '${n.name}', which has the dynamic op '${n.op}'. Please use model.executeAsync() instead. Alternatively, to avoid the dynamic ops, specify the inputs [${o}]`);
    if (r.length > 0) {
      const u = t.map((m) => m.name), l = Object.keys(e);
      throw new Error(`Cannot compute the outputs [${u}] from the provided inputs [${l}]. Missing the following inputs: [${r}]`);
    }
    return Lg(this.graph, this.weightMap, a);
  }
  /**
   * Executes the inference for given input tensors.
   * @param inputs Tensor map for the model inputs, keyed by the input node
   * names.
   * @param outputs Optional. output node name from the Tensorflow model, if
   * no outputs are specified, the default outputs of the model would be used.
   * You can inspect intermediate nodes of the model by adding them to the
   * outputs array.
   */
  execute(e, t) {
    e = this.mapInputs(e);
    const a = Object.keys(e).sort();
    this.checkInputs(e), this.checkInputShapeAndType(e), t = this.mapOutputs(t), this.checkOutputs(t);
    const r = a.map((c) => this.graph.nodes[D(c)[0]]), n = t.map((c) => D(c)[0]);
    let o = n.map((c) => this.graph.nodes[c]);
    this.resetIntermediateTensors(), o.length === 0 && (o = this._outputs);
    const u = this.getCompilationKey(r, o);
    let l = this.compiledMap.get(u);
    l == null && (l = this.compile(e, o), this.compiledMap.set(u, l));
    const m = {}, p = {};
    return C(() => {
      const c = new jt(this.weightMap, m, p, this.functionExecutorMap), d = Object.assign({}, this.weightMap);
      Object.keys(e).forEach((f) => {
        const [g, S] = D(f), k = [];
        k[S] = e[f], d[g] = k;
      });
      const h = this.getFrozenTensorIds(d), b = {};
      for (let f = 0; f < l.length; f++) {
        const g = l[f];
        if (!d[g.name]) {
          const S = Rt(g, d, c, this._resourceManager);
          if (ve(S))
            throw new Error(`The execution of the op '${g.op}' returned a promise. Please use model.executeAsync() instead.`);
          d[g.name] = S, this.checkTensorForDisposal(g.name, g, d, c, h, n, b);
        }
      }
      return this.parent == null && c.dispose(h), t.map((f) => E(f, d, c));
    });
  }
  getFrozenTensorIds(e) {
    const t = [].concat.apply([], Object.keys(e).map((a) => e[a]).map((a) => a.map((r) => r.id)));
    return new Set(t);
  }
  checkTensorForDisposal(e, t, a, r, n, o, u) {
    t.category === "control" || o.indexOf(e) !== -1 || (a[e].forEach((l) => {
      l != null && (u[l.id] = (u[l.id] || 0) + t.children.length);
    }), t.inputs.forEach((l) => {
      if (l.category !== "control") {
        const m = vy(l.name, a, r);
        m != null && m.forEach((p) => {
          if (p && !p.kept && !n.has(p.id)) {
            const c = u[p.id];
            if (c === 1) {
              if (!this.keepTensorForDebug)
                p.dispose();
              else {
                const [d, h] = P(t.name, r);
                this.intermediateTensors[d] ? this.intermediateTensors[d][h] = p : (this.intermediateTensors[d] = [], this.intermediateTensors[d][h] = p);
              }
              delete u[p.id];
            } else
              c != null && u[p.id]--;
          }
        });
      }
    }));
  }
  /**
   * Executes the inference for given input tensors in Async fashion.
   * @param inputs Tensor map for the model inputs, keyed by the input node
   * names.
   * @param outputs output node name from the Tensorflow model, if no outputs
   * are specified, the default outputs of the model would be used. You can
   * inspect intermediate nodes of the model by adding them to the outputs
   * array.
   */
  async executeAsync(e, t) {
    return this._executeAsync(e, t);
  }
  disposeIntermediateTensors() {
    this.intermediateTensors && (Object.keys(this.intermediateTensors).forEach((e) => this.intermediateTensors[e].forEach((t) => t.dispose())), this.disposeTensorsMap());
  }
  disposeTensorsMap() {
    this.tensorsMap && Object.keys(this.tensorsMap).forEach((e) => {
      this.tensorsMap[e].forEach((a) => {
        a && !a.kept && !a.isDisposed && !this.keepIds.has(a.id) && a.dispose();
      });
    });
  }
  getIntermediateTensors() {
    return this.tensorsMap;
  }
  resetIntermediateTensors() {
    for (const e in this.intermediateTensors)
      this.intermediateTensors[e].forEach((t) => t.dispose()), delete this.intermediateTensors[e];
  }
  /**
   * Executes the inference for given input tensors in Async fashion.
   * @param inputs Tensor map for the model inputs, keyed by the input node
   * names.
   * @param outputs Optional. output node name from the Tensorflow model,
   * if no outputs are specified, the default outputs of the model would be
   * used. You can inspect intermediate nodes of the model by adding them to the
   * outputs array.
   * @param isFunctionExecution Optional. Flag for executing a function.
   * @param tensorArrayMap Optional, global TensorArray map by id. Used for
   * function execution.
   * @param tensorArrayMap Optinal global TensorList map by id. Used for
   * function execution.
   */
  async _executeAsync(e, t, a = !1, r = {}, n = {}) {
    a || (e = this.mapInputs(e), this.checkInputs(e), this.checkInputShapeAndType(e), t = this.mapOutputs(t), this.checkOutputs(t));
    try {
      this.keepTensorForDebug = z().getBool("KEEP_INTERMEDIATE_TENSORS");
    } catch (p) {
      console.warn(p.message);
    }
    this.resetIntermediateTensors();
    const o = new jt(this.weightMap, r, n, this.functionExecutorMap);
    this.tensorsMap = await this.executeWithControlFlow(e, o, t, a);
    const u = t.map((p) => E(p, this.tensorsMap, o)), l = u.map((p) => p.id), m = Object.keys(e).map((p) => e[p].id);
    return this.keepIds = /* @__PURE__ */ new Set([...l, ...m, ...this.weightIds]), this.keepTensorForDebug || this.disposeTensorsMap(), this.parent == null && o.dispose(this.keepIds), u;
  }
  async executeFunctionAsync(e, t, a) {
    const r = e.reduce((n, o, u) => (n[this.inputs[u].name] = o, n), {});
    return this._executeAsync(r, this.outputNodes, !0, t, a);
  }
  /**
   * When there are control flow nodes in the graph, the graph execution use
   * ExecutionContext to keep track of the frames and loop iterators.
   * @param inputs placeholder tensors for the graph.
   * @param context the execution context object for current execution.
   * @param outputNames Optional. output node name from the Tensorflow model,
   * if no outputs are specified, the default outputs of the model would be
   * used. You can inspect intermediate nodes of the model by adding them to the
   * outputs array.
   * @param isFunctionExecution Flag for executing a function.
   */
  async executeWithControlFlow(e, t, a, r) {
    const n = Object.keys(e), o = n.map((T) => this.graph.nodes[D(T)[0]]), u = a.map((T) => D(T)[0]);
    let l = u.map((T) => this.graph.nodes[T]);
    l.length === 0 && (l = this._outputs);
    const { usedNodes: m, missingInputs: p, dynamicNode: c, syncInputs: d } = Bt(e, l, this.weightMap, this._initNodes), h = [
      ...o,
      ...this.graph.weights,
      ...this._initNodes || []
    ].map((T) => ({ node: T, contexts: t.currentContext })), b = Object.assign({}, this.weightMap);
    Object.keys(e).forEach((T) => {
      const [W, A] = D(T), $ = [];
      $[A] = e[T], b[W] = $;
    });
    const f = {}, g = this.getFrozenTensorIds(b), S = {};
    for (; h.length > 0; ) {
      const T = this.processStack(o, h, t, b, S, g, u, f, m);
      await Promise.all(T);
    }
    c == null && !r && console.warn("This model execution did not contain any nodes with control flow or dynamic output shapes. You can use model.execute() instead.");
    const k = l.filter((T) => !Jn(T) && !E(T.name, b, t)).map((T) => T.name);
    if (k.length > 0) {
      let T = "";
      throw c != null && (T = `Alternatively, to avoid the dynamic ops, use model.execute() and specify the inputs [${d}]`), new Error(`Cannot compute the outputs [${k}] from the provided inputs [${n}]. Consider providing the following inputs: [${p}]. ${T}`);
    }
    return b;
  }
  processStack(e, t, a, r, n, o, u, l, m) {
    const p = [];
    for (; t.length > 0; ) {
      const c = t.pop();
      a.currentContext = c.contexts;
      let d = "";
      if (c.node.op === "Enter" && i("isConstant", c.node, r, a) && ([d] = P(c.node.name, a)), r[c.node.name] == null) {
        const h = Rt(c.node, r, a, this._resourceManager);
        d || ([d] = P(c.node.name, a));
        const b = a.currentContext;
        ve(h) ? p.push(h.then((f) => (r[d] = f, a.currentContext = b, this.checkTensorForDisposal(d, c.node, r, a, o, u, l), this.processChildNodes(c.node, t, a, r, n, m), f))) : (r[d] = h, this.checkTensorForDisposal(d, c.node, r, a, o, u, l), this.processChildNodes(c.node, t, a, r, n, m));
      } else
        this.processChildNodes(c.node, t, a, r, n, m);
    }
    return p;
  }
  processChildNodes(e, t, a, r, n, o) {
    e.children.forEach((u) => {
      const [l] = P(u.name, a);
      n[l] || !o.has(u.name) || (u.op === "Merge" ? u.inputNames.some((m) => !!E(m, r, a)) && (n[l] = !0, t.push({ contexts: a.currentContext, node: u })) : u.inputNames.every((m) => !!E(m, r, a)) && (n[l] = !0, t.push({ contexts: a.currentContext, node: u })));
    });
  }
  /**
   * Releases the memory used by the weight tensors.
   */
  dispose() {
    Object.keys(this.weightMap).forEach((e) => this.weightMap[e].forEach((t) => t.dispose()));
  }
  checkInputShapeAndType(e) {
    Object.keys(e).forEach((t) => {
      const a = e[t], [r] = D(t), n = this.graph.nodes[r];
      if (n.attrParams.shape && n.attrParams.shape.value) {
        const o = n.attrParams.shape.value, u = o.length === a.shape.length && a.shape.every((l, m) => o[m] === -1 || o[m] === l);
        N(u, () => `The shape of dict['${n.name}'] provided in model.execute(dict) must be [${o}], but was [${a.shape}]`);
      }
      n.attrParams.dtype && n.attrParams.dtype.value && N(a.dtype === n.attrParams.dtype.value, () => `The dtype of dict['${n.name}'] provided in model.execute(dict) must be ${n.attrParams.dtype.value}, but was ${a.dtype}`);
    });
  }
  mapInputs(e) {
    const t = {};
    for (const a in e)
      if (this._signature != null && this._signature.inputs != null && this._signature.inputs[a] != null) {
        const r = this._signature.inputs[a];
        t[r.name] = e[a];
      } else
        t[a] = e[a];
    return t;
  }
  checkInputs(e) {
    const t = Object.keys(e).filter((a) => {
      const [r] = D(a);
      return this.graph.nodes[r] == null;
    });
    if (t.length > 0)
      throw new Error(`The dict provided in model.execute(dict) has keys: [${t}] that are not part of graph`);
  }
  mapOutputs(e) {
    return e.map((t) => this._signature != null && this._signature.outputs != null && this._signature.outputs[t] != null ? this._signature.outputs[t].name : t, {});
  }
  checkOutputs(e) {
    e.forEach((t) => {
      const [a] = D(t);
      if (!this.graph.nodes[a])
        throw new Error(`The output '${t}' is not found in the graph`);
    });
  }
}
class Bg {
  constructor(e = {}, t = {}) {
    this.hashTableNameToHandle = e, this.hashTableMap = t;
  }
  /**
   * Register a `HashTable` in the resource manager.
   *
   * The `HashTable` can be retrieved by `resourceManager.getHashTableById`,
   * where id is the table handle tensor's id.
   *
   * @param name Op node name that creates the `HashTable`.
   * @param hashTable The `HashTable` to be added to resource manager.
   */
  addHashTable(e, t) {
    this.hashTableNameToHandle[e] = t.handle, this.hashTableMap[t.id] = t;
  }
  /**
   * Get the table handle by node name.
   * @param name Op node name that creates the `HashTable`. This name is also
   *     used in the inputs list of lookup and import `HashTable` ops.
   */
  getHashTableHandleByName(e) {
    return this.hashTableNameToHandle[e];
  }
  /**
   * Get the actual `HashTable` by its handle tensor's id.
   * @param id The id of the handle tensor.
   */
  getHashTableById(e) {
    return this.hashTableMap[e];
  }
  /**
   * Dispose `ResourceManager`, including its hashTables and tensors in them.
   */
  dispose() {
    for (const e in this.hashTableMap)
      this.hashTableMap[e].clearAndClose(), delete this.hashTableMap[e];
    for (const e in this.hashTableNameToHandle)
      this.hashTableNameToHandle[e].dispose(), delete this.hashTableNameToHandle[e];
  }
}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Hg = "?tfjs-format=file", Wg = "model.json";
class vt {
  /**
   * @param modelUrl url for the model, or an `io.IOHandler`.
   * @param weightManifestUrl url for the weight file generated by
   * scripts/convert.py script.
   * @param requestOption options for Request, which allows to send credentials
   * and custom headers.
   * @param onProgress Optional, progress callback function, fired periodically
   * before the load is completed.
   */
  constructor(e, t = {}, a = ht) {
    this.modelUrl = e, this.loadOptions = t, this.version = "n/a", this.io = a, t == null && (this.loadOptions = {}), this.resourceManager = new Bg();
  }
  // Returns the version information for the tensorflow model GraphDef.
  get modelVersion() {
    return this.version;
  }
  get inputNodes() {
    return this.executor.inputNodes;
  }
  get outputNodes() {
    return this.executor.outputNodes;
  }
  get inputs() {
    return this.executor.inputs;
  }
  get outputs() {
    return this.executor.outputs;
  }
  get weights() {
    return this.executor.weightMap;
  }
  get metadata() {
    return this.artifacts.userDefinedMetadata;
  }
  get modelSignature() {
    return this.signature;
  }
  get modelStructuredOutputKeys() {
    return this.structuredOutputKeys;
  }
  findIOHandler() {
    const e = this.modelUrl;
    if (e.load != null)
      this.handler = e;
    else if (this.loadOptions.requestInit != null)
      this.handler = this.io.browserHTTPRequest(e, this.loadOptions);
    else {
      const t = this.io.getLoadHandlers(e, this.loadOptions);
      if (t.length === 0)
        t.push(this.io.browserHTTPRequest(e, this.loadOptions));
      else if (t.length > 1)
        throw new Error(`Found more than one (${t.length}) load handlers for URL '${[e]}'`);
      this.handler = t[0];
    }
  }
  /**
   * Loads the model and weight files, construct the in memory weight map and
   * compile the inference graph.
   */
  load() {
    if (this.findIOHandler(), this.handler.load == null)
      throw new Error("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");
    const e = this.handler.load();
    return ve(e) ? e.then((t) => this.loadSync(t)) : this.loadSync(e);
  }
  /**
   * Synchronously construct the in memory weight map and
   * compile the inference graph. Also initialize hashtable if any.
   *
   * @doc {heading: 'Models', subheading: 'Classes', ignoreCI: true}
   */
  loadSync(e) {
    this.artifacts = e;
    const t = this.artifacts.modelTopology;
    let a = this.artifacts.signature;
    if (this.artifacts.userDefinedMetadata != null) {
      const n = this.artifacts.userDefinedMetadata;
      n.signature != null && (a = n.signature), n.structuredOutputKeys != null && (this.structuredOutputKeys = n.structuredOutputKeys);
    }
    this.signature = a, this.version = `${t.versions.producer}.${t.versions.minConsumer}`;
    const r = this.io.decodeWeights(this.artifacts.weightData, this.artifacts.weightSpecs);
    if (this.executor = new Ae(Lt.Instance.transformGraph(t, this.signature)), this.executor.weightMap = this.convertTensorMapToTensorsMap(r), this.executor.resourceManager = this.resourceManager, e.modelInitializer != null && e.modelInitializer.node != null) {
      const n = Lt.Instance.transformGraph(e.modelInitializer);
      this.initializer = new Ae(n), this.initializer.weightMap = this.executor.weightMap, this.initializer.resourceManager = this.resourceManager, this.initializer.executeAsync({}, []);
    }
    return !0;
  }
  /**
   * Save the configuration and/or weights of the GraphModel.
   *
   * An `IOHandler` is an object that has a `save` method of the proper
   * signature defined. The `save` method manages the storing or
   * transmission of serialized data ("artifacts") that represent the
   * model's topology and weights onto or via a specific medium, such as
   * file downloads, local storage, IndexedDB in the web browser and HTTP
   * requests to a server. TensorFlow.js provides `IOHandler`
   * implementations for a number of frequently used saving mediums, such as
   * `tf.io.browserDownloads` and `tf.io.browserLocalStorage`. See `tf.io`
   * for more details.
   *
   * This method also allows you to refer to certain types of `IOHandler`s
   * as URL-like string shortcuts, such as 'localstorage://' and
   * 'indexeddb://'.
   *
   * Example 1: Save `model`'s topology and weights to browser [local
   * storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage);
   * then load it back.
   *
   * ```js
   * const modelUrl =
   *    'https://storage.googleapis.com/tfjs-models/savedmodel/mobilenet_v2_1.0_224/model.json';
   * const model = await tf.loadGraphModel(modelUrl);
   * const zeros = tf.zeros([1, 224, 224, 3]);
   * model.predict(zeros).print();
   *
   * const saveResults = await model.save('localstorage://my-model-1');
   *
   * const loadedModel = await tf.loadGraphModel('localstorage://my-model-1');
   * console.log('Prediction from loaded model:');
   * model.predict(zeros).print();
   * ```
   *
   * @param handlerOrURL An instance of `IOHandler` or a URL-like,
   * scheme-based string shortcut for `IOHandler`.
   * @param config Options for saving the model.
   * @returns A `Promise` of `SaveResult`, which summarizes the result of
   * the saving, such as byte sizes of the saved artifacts for the model's
   *   topology and weight values.
   *
   * @doc {heading: 'Models', subheading: 'Classes', ignoreCI: true}
   */
  async save(e, t) {
    if (typeof e == "string") {
      const a = this.io.getSaveHandlers(e);
      if (a.length === 0)
        throw new Error(`Cannot find any save handlers for URL '${e}'`);
      if (a.length > 1)
        throw new Error(`Found more than one (${a.length}) save handlers for URL '${e}'`);
      e = a[0];
    }
    if (e.save == null)
      throw new Error("GraphModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");
    return e.save(this.artifacts);
  }
  /**
   * Execute the inference for the input tensors.
   *
   * @param input The input tensors, when there is single input for the model,
   * inputs param should be a `tf.Tensor`. For models with mutliple inputs,
   * inputs params should be in either `tf.Tensor`[] if the input order is
   * fixed, or otherwise NamedTensorMap format.
   *
   * For model with multiple inputs, we recommend you use NamedTensorMap as the
   * input type, if you use `tf.Tensor`[], the order of the array needs to
   * follow the
   * order of inputNodes array. @see {@link GraphModel.inputNodes}
   *
   * You can also feed any intermediate nodes using the NamedTensorMap as the
   * input type. For example, given the graph
   *    InputNode => Intermediate => OutputNode,
   * you can execute the subgraph Intermediate => OutputNode by calling
   *    model.execute('IntermediateNode' : tf.tensor(...));
   *
   * This is useful for models that uses tf.dynamic_rnn, where the intermediate
   * state needs to be fed manually.
   *
   * For batch inference execution, the tensors for each input need to be
   * concatenated together. For example with mobilenet, the required input shape
   * is [1, 244, 244, 3], which represents the [batch, height, width, channel].
   * If we are provide a batched data of 100 images, the input tensor should be
   * in the shape of [100, 244, 244, 3].
   *
   * @param config Prediction configuration for specifying the batch size.
   * Currently the batch size option is ignored for graph model.
   *
   * @returns Inference result tensors. If the model is converted and it
   * originally had structured_outputs in tensorflow, then a NamedTensorMap
   * will be returned matching the structured_outputs. If no structured_outputs
   * are present, the output will be single `tf.Tensor` if the model has single
   * output node, otherwise Tensor[].
   *
   * @doc {heading: 'Models', subheading: 'Classes'}
   */
  predict(e, t) {
    const a = this.execute(e, this.outputNodes);
    if (this.structuredOutputKeys) {
      const r = a instanceof me ? [a] : a, n = {};
      return r.forEach((o, u) => n[this.structuredOutputKeys[u]] = o), n;
    }
    return a;
  }
  normalizeInputs(e) {
    if (!(e instanceof me) && !Array.isArray(e))
      return e;
    if (e = Array.isArray(e) ? e : [e], e.length !== this.inputNodes.length)
      throw new Error(`Input tensor count mismatch,the graph model has ${this.inputNodes.length} placeholders, while there are ${e.length} input tensors.`);
    return this.inputNodes.reduce((t, a, r) => (t[a] = e[r], t), {});
  }
  normalizeOutputs(e) {
    return e = e || this.outputNodes, Array.isArray(e) ? e : [e];
  }
  /**
   * Executes inference for the model for given input tensors.
   * @param inputs tensor, tensor array or tensor map of the inputs for the
   * model, keyed by the input node names.
   * @param outputs output node name from the TensorFlow model, if no
   * outputs are specified, the default outputs of the model would be used.
   * You can inspect intermediate nodes of the model by adding them to the
   * outputs array.
   *
   * @returns A single tensor if provided with a single output or no outputs
   * are provided and there is only one default output, otherwise return a
   * tensor array. The order of the tensor array is the same as the outputs
   * if provided, otherwise the order of outputNodes attribute of the model.
   *
   * @doc {heading: 'Models', subheading: 'Classes'}
   */
  execute(e, t) {
    e = this.normalizeInputs(e), t = this.normalizeOutputs(t);
    const a = this.executor.execute(e, t);
    return a.length > 1 ? a : a[0];
  }
  /**
   * Executes inference for the model for given input tensors in async
   * fashion, use this method when your model contains control flow ops.
   * @param inputs tensor, tensor array or tensor map of the inputs for the
   * model, keyed by the input node names.
   * @param outputs output node name from the TensorFlow model, if no outputs
   * are specified, the default outputs of the model would be used. You can
   * inspect intermediate nodes of the model by adding them to the outputs
   * array.
   *
   * @returns A Promise of single tensor if provided with a single output or
   * no outputs are provided and there is only one default output, otherwise
   * return a tensor map.
   *
   * @doc {heading: 'Models', subheading: 'Classes'}
   */
  async executeAsync(e, t) {
    e = this.normalizeInputs(e), t = this.normalizeOutputs(t);
    const a = await this.executor.executeAsync(e, t);
    return a.length > 1 ? a : a[0];
  }
  /**
   * Get intermediate tensors for model debugging mode (flag
   * KEEP_INTERMEDIATE_TENSORS is true).
   *
   * @doc {heading: 'Models', subheading: 'Classes'}
   */
  getIntermediateTensors() {
    return this.executor.getIntermediateTensors();
  }
  /**
   * Dispose intermediate tensors for model debugging mode (flag
   * KEEP_INTERMEDIATE_TENSORS is true).
   *
   * @doc {heading: 'Models', subheading: 'Classes'}
   */
  disposeIntermediateTensors() {
    this.executor.disposeIntermediateTensors();
  }
  convertTensorMapToTensorsMap(e) {
    return Object.keys(e).reduce((t, a) => (t[a] = [e[a]], t), {});
  }
  /**
   * Releases the memory used by the weight tensors and resourceManager.
   *
   * @doc {heading: 'Models', subheading: 'Classes'}
   */
  dispose() {
    this.executor.dispose(), this.initializer && this.initializer.dispose(), this.resourceManager.dispose();
  }
}
async function qg(s, e = {}, t = ht) {
  if (s == null)
    throw new Error("modelUrl in loadGraphModel() cannot be null. Please provide a url or an IOHandler that loads the model");
  e == null && (e = {}), e.fromTFHub && typeof s == "string" && (s = Gg(s));
  const a = new vt(s, e, t);
  return await a.load(), a;
}
function Ug(s) {
  if (s == null)
    throw new Error("modelUrl in loadGraphModelSync() cannot be null. Please provide model artifacts or an IOHandler that loads the model");
  let e;
  if (s instanceof Array) {
    const [a, r] = s;
    if (!a)
      throw new Error("modelJSON must be the first element of the array");
    if (!r || !(r instanceof ArrayBuffer))
      throw new Error("An ArrayBuffer of weights must be the second element of the array");
    if (!("modelTopology" in a))
      throw new Error("Model JSON is missing 'modelTopology'");
    if (!("weightsManifest" in a))
      throw new Error("Model JSON is missing 'weightsManifest'");
    const n = Qt(a.weightsManifest), o = Jt(a, n, r);
    e = Oe(o);
  } else if ("load" in s)
    e = s;
  else if ("modelTopology" in s && "weightSpecs" in s && "weightData" in s)
    e = Oe(s);
  else
    throw new Error("Unknown model format");
  const t = new vt(e);
  return t.load(), t;
}
function Gg(s) {
  return s.endsWith("/") || (s = s + "/"), `${s}${Wg}${Hg}`;
}
/** @license See the LICENSE file. */
const Qn = "3.21.0";
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */
class Xn extends dt {
  /**
   * Create a `TextLineDataset`.
   *
   * @param input A `DataSource` providing a chunked, UTF8-encoded byte stream.
   */
  constructor(e) {
    super(), this.input = e;
  }
  async iterator() {
    return (await this.input.iterator()).decodeUTF8().split(`
`).map((r) => (r.endsWith("\r") && (r = r.slice(0, -1)), r));
  }
}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */
const ye = '"', ne = Symbol("out"), Ht = Symbol("field"), ge = Symbol("quote"), Ce = Symbol("quoteafterquote"), Wt = Symbol("quoteinquote");
class Zn extends dt {
  /**
   * Create a `CSVDataset`.
   *
   * @param input A `DataSource` providing a chunked, UTF8-encoded byte stream.
   * @param csvConfig (Optional) A CSVConfig object that contains configurations
   *     of reading and decoding from CSV file(s).
   *
   *     hasHeader: (Optional) A boolean value that indicates whether the first
   *     row of provided CSV file is a header line with column names, and should
   *     not be included in the data. Defaults to `true`.
   *
   *     columnNames: (Optional) A list of strings that corresponds to
   *     the CSV column names, in order. If provided, it ignores the column
   *     names inferred from the header row. If not provided, infers the column
   *     names from the first row of the records. If hasHeader is false and
   *     columnNames is not provided, this method throws an error.
   *
   *     columnConfigs: (Optional) A dictionary whose key is column names, value
   *     is an object stating if this column is required, column's data type,
   *     default value, and if this column is label. If provided, keys must
   *     correspond to names provided in columnNames or inferred from the file
   *     header lines. If isLabel is true any column, returns an array of two
   *     items: the first item is a dict of features key/value pairs, the second
   *     item is a dict of labels key/value pairs. If no feature is marked as
   *     label, returns a dict of features only.
   *
   *     configuredColumnsOnly (Optional) If true, only columns provided in
   *     columnConfigs will be parsed and provided during iteration.
   *
   *     delimiter (Optional) The string used to parse each line of the input
   *     file. Defaults to `,`.
   */
  constructor(e, t) {
    super(), this.input = e, this.hasHeader = !0, this.fullColumnNames = null, this.columnNamesValidated = !1, this.columnConfigs = null, this.configuredColumnsOnly = !1, this.delimiter = ",", this.delimWhitespace = !1, this.base = new Xn(e), t || (t = {}), this.hasHeader = t.hasHeader !== !1, this.fullColumnNames = t.columnNames, this.columnConfigs = t.columnConfigs, this.configuredColumnsOnly = t.configuredColumnsOnly, t.delimWhitespace ? (N(t.delimiter == null, () => "Delimiter should not be provided when delimWhitespace is true."), this.delimWhitespace = !0, this.delimiter = " ") : this.delimiter = t.delimiter ? t.delimiter : ",";
  }
  /**
   * Returns column names of the csv dataset. If `configuredColumnsOnly` is
   * true, return column names in `columnConfigs`. If `configuredColumnsOnly` is
   * false and `columnNames` is provided, `columnNames`. If
   * `configuredColumnsOnly` is false and `columnNames` is not provided, return
   * all column names parsed from the csv file. For example usage please go to
   * `tf.data.csv`.
   *
   * @doc {heading: 'Data', subheading: 'Classes'}
   */
  async columnNames() {
    return this.columnNamesValidated || await this.setColumnNames(), this.configuredColumnsOnly ? Object.keys(this.columnConfigs) : this.fullColumnNames;
  }
  /* 1) If `columnNames` is provided as string[], use this string[] as output
   * keys in corresponding order. The length must match the number of inferred
   * columns if `hasHeader` is true .
   * 2) If `columnNames` is not provided, parse header line as `columnNames` if
   * hasHeader is true. If `hasHeader` is false, throw an error.
   * 3) If `columnConfigs` is provided, all the keys in `columnConfigs` must
   * exist in parsed `columnNames`.
   */
  async setColumnNames() {
    const e = await this.maybeReadHeaderLine();
    if (!this.fullColumnNames && !e)
      throw new Error("Column names must be provided if there is no header line.");
    this.fullColumnNames && e && N(e.length === this.fullColumnNames.length, () => "The length of provided columnNames (" + this.fullColumnNames.length.toString() + ") does not match the length of the header line read from file (" + e.length.toString() + ")."), this.fullColumnNames || (this.fullColumnNames = e);
    const t = this.fullColumnNames.reduce((r, n) => (r[n] = r[n] + 1 || 1, r), {}), a = Object.keys(t).filter((r) => t[r] > 1);
    if (N(a.length === 0, () => "Duplicate column names found: " + a.toString()), this.columnConfigs) {
      for (const r of Object.keys(this.columnConfigs))
        if (this.fullColumnNames.indexOf(r) === -1)
          throw new Error('The key "' + r + '" provided in columnConfigs does not match any of the column names (' + this.fullColumnNames.toString() + ").");
    }
    this.columnNamesValidated = !0;
  }
  async maybeReadHeaderLine() {
    if (this.hasHeader) {
      const t = await (await this.base.iterator()).next();
      if (t.done)
        throw new Error("No data was found for CSV parsing.");
      const a = t.value;
      return this.parseRow(a, !1);
    } else
      return null;
  }
  async iterator() {
    this.columnNamesValidated || await this.setColumnNames();
    let e = await this.base.iterator();
    return this.hasHeader && (e = e.skip(1)), e.map((t) => this.makeDataElement(t));
  }
  makeDataElement(e) {
    const t = this.parseRow(e), a = {}, r = {};
    for (let n = 0; n < this.fullColumnNames.length; n++) {
      const o = this.fullColumnNames[n], u = this.columnConfigs ? this.columnConfigs[o] : null;
      if (!(this.configuredColumnsOnly && !u)) {
        const l = t[n];
        let m = null;
        if (l === "")
          if (u && u.default !== void 0)
            m = u.default;
          else {
            if (u && (u.required || u.isLabel))
              throw new Error(`Required column ${o} is empty in this line: ${e}`);
            m = void 0;
          }
        else {
          const p = Number(l);
          if (isNaN(p))
            u && u.dtype === "bool" ? m = this.getBoolean(l) : m = l;
          else if (!u || !u.dtype)
            m = p;
          else
            switch (u.dtype) {
              case "float32":
                m = p;
                break;
              case "int32":
                m = Math.floor(p);
                break;
              case "bool":
                m = this.getBoolean(l);
                break;
              default:
                m = p;
            }
        }
        u && u.isLabel ? r[o] = m : a[o] = m;
      }
    }
    return Object.keys(r).length === 0 ? a : { xs: a, ys: r };
  }
  getBoolean(e) {
    return e === "1" || e.toLowerCase() === "true" ? 1 : 0;
  }
  // adapted from https://beta.observablehq.com/@mbostock/streaming-csv
  parseRow(e, t = !0) {
    const a = [];
    let r = 0;
    const n = e.length;
    let o = ne;
    for (let u = 0; u < n; u++)
      switch (o) {
        case ne:
          switch (e.charAt(u)) {
            case ye:
              r = u + 1, o = ge;
              break;
            case this.delimiter:
              if (r = u + 1, this.delimiter === " " && this.delimWhitespace)
                break;
              a.push(""), o = ne;
              break;
            default:
              o = Ht, r = u;
              break;
          }
          break;
        case Ht:
          switch (e.charAt(u)) {
            case this.delimiter:
              a.push(e.substring(r, u)), o = ne, r = u + 1;
              break;
          }
          break;
        case ge:
          switch (e.charAt(u)) {
            case ye:
              o = Ce;
              break;
          }
          break;
        case Ce:
          switch (e.charAt(u)) {
            case this.delimiter:
              a.push(e.substring(r, u - 1)), o = ne, r = u + 1;
              break;
            case ye:
              o = ge;
              break;
            default:
              o = Wt;
              break;
          }
          break;
        case Wt:
          switch (e.charAt(u)) {
            case ye:
              o = ge;
              break;
          }
          break;
      }
    if (o === Ce ? a.push(e.substring(r, n - 1)) : a.push(e.substring(r)), t && a.length !== this.fullColumnNames.length)
      throw new Error(`Invalid row in csv file. Should have ${this.fullColumnNames.length} elements in a row, but got ${a}`);
    return a;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */
class Ot extends Ee {
  constructor(e) {
    super(), this.microphoneConfig = e, this.isClosed = !1, this.fftSize = e.fftSize || 1024;
    const t = Math.log2(this.fftSize);
    if (this.fftSize < 0 || t < 4 || t > 14 || !Number.isInteger(t))
      throw new Error(`Invalid fftSize: it must be a power of 2 between 2 to 4 and 2 to 14, but got ${this.fftSize}`);
    if (this.numFrames = e.numFramesPerSpectrogram || 43, this.sampleRateHz = e.sampleRateHz, this.columnTruncateLength = e.columnTruncateLength || this.fftSize, this.audioTrackConstraints = e.audioTrackConstraints, this.smoothingTimeConstant = e.smoothingTimeConstant || 0, this.includeSpectrogram = e.includeSpectrogram !== !1, this.includeWaveform = e.includeWaveform === !0, !this.includeSpectrogram && !this.includeWaveform)
      throw new Error("Both includeSpectrogram and includeWaveform are false. At least one type of data should be returned.");
  }
  summary() {
    return "microphone";
  }
  // Construct a MicrophoneIterator and start the audio stream.
  static async create(e = {}) {
    if (!z().get("IS_BROWSER"))
      throw new Error("microphone API is only supported in browser environment.");
    const t = new Ot(e);
    return await t.start(), t;
  }
  // Start the audio stream and FFT.
  async start() {
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({
        audio: this.audioTrackConstraints == null ? !0 : this.audioTrackConstraints,
        video: !1
      });
    } catch (a) {
      throw new Error(`Error thrown while initializing video stream: ${a.message}`);
    }
    if (!this.stream)
      throw new Error("Could not obtain audio from microphone.");
    const e = (
      // tslint:disable-next-line:no-any
      window.AudioContext || window.webkitAudioContext
    );
    if (this.audioContext = new e(), !this.sampleRateHz)
      this.sampleRateHz = this.audioContext.sampleRate;
    else if (this.audioContext.sampleRate !== this.sampleRateHz)
      throw new Error(`Mismatch in sampling rate: Expected: ${this.sampleRateHz}; Actual: ${this.audioContext.sampleRate}`);
    const t = this.audioContext.createMediaStreamSource(this.stream);
    this.analyser = this.audioContext.createAnalyser(), this.analyser.fftSize = this.fftSize * 2, this.analyser.smoothingTimeConstant = this.smoothingTimeConstant, t.connect(this.analyser), this.freqData = new Float32Array(this.fftSize), this.timeData = new Float32Array(this.fftSize);
  }
  async next() {
    if (this.isClosed)
      return { value: null, done: !0 };
    let e, t;
    const a = await this.getAudioData();
    if (this.includeSpectrogram) {
      const r = this.flattenQueue(a.freqDataQueue);
      e = this.getTensorFromAudioDataArray(r, [this.numFrames, this.columnTruncateLength, 1]);
    }
    if (this.includeWaveform) {
      const r = this.flattenQueue(a.timeDataQueue);
      t = this.getTensorFromAudioDataArray(r, [this.numFrames * this.fftSize, 1]);
    }
    return {
      value: { spectrogram: e, waveform: t },
      done: !1
    };
  }
  // Capture one result from the audio stream, and extract the value from
  // iterator.next() result.
  async capture() {
    return (await this.next()).value;
  }
  async getAudioData() {
    const e = [], t = [];
    let a = 0;
    return new Promise((r) => {
      const n = setInterval(() => {
        this.includeSpectrogram && (this.analyser.getFloatFrequencyData(this.freqData), this.freqData[0] === -1 / 0 && r({ freqDataQueue: e, timeDataQueue: t }), e.push(this.freqData.slice(0, this.columnTruncateLength))), this.includeWaveform && (this.analyser.getFloatTimeDomainData(this.timeData), t.push(this.timeData.slice())), ++a === this.numFrames && (clearInterval(n), r({ freqDataQueue: e, timeDataQueue: t }));
      }, this.fftSize / this.sampleRateHz * 1e3);
    });
  }
  // Stop the audio stream and pause the iterator.
  stop() {
    this.isClosed || (this.isClosed = !0, this.analyser.disconnect(), this.audioContext.close(), this.stream != null && this.stream.getTracks().length > 0 && this.stream.getTracks()[0].stop());
  }
  // Override toArray() function to prevent collecting.
  toArray() {
    throw new Error("Can not convert infinite audio stream to array.");
  }
  // Return audio sampling rate in Hz
  getSampleRate() {
    return this.sampleRateHz;
  }
  flattenQueue(e) {
    const t = e[0].length, a = new Float32Array(e.length * t);
    return e.forEach((r, n) => a.set(r, n * t)), a;
  }
  getTensorFromAudioDataArray(e, t) {
    const a = new Float32Array(pe(t));
    return a.set(e, a.length - e.length), U(a, t);
  }
}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */
class _t extends Ee {
  constructor(e, t) {
    if (super(), this.webcamVideoElement = e, this.webcamConfig = t, this.isClosed = !0, this.resize = !1, this.needToResize())
      if (this.resize = !0, this.cropSize = [this.webcamConfig.resizeHeight, this.webcamConfig.resizeWidth], this.cropBoxInd = ct([0], "int32"), this.webcamConfig.centerCrop) {
        const a = this.webcamConfig.resizeWidth * 1 / this.webcamVideoElement.width, r = this.webcamConfig.resizeHeight * 1 / this.webcamVideoElement.height, n = (1 - a) / 2, o = (1 - r) / 2, u = n + a, l = r + o;
        this.cropBox = Se([o, n, l, u], [1, 4]);
      } else
        this.cropBox = Se([0, 0, 1, 1], [1, 4]);
  }
  summary() {
    return "webcam";
  }
  // Construct a WebcamIterator and start it's video stream.
  static async create(e, t = {}) {
    if (!z().get("IS_BROWSER"))
      throw new Error("tf.data.webcam is only supported in browser environment.");
    if (!e) {
      if (e = document.createElement("video"), !t.resizeWidth || !t.resizeHeight)
        throw new Error("Please provide webcam video element, or resizeWidth and resizeHeight to create a hidden video element.");
      e.width = t.resizeWidth, e.height = t.resizeHeight;
    }
    const a = new _t(e, t);
    return await a.start(), a;
  }
  // Async function to start video stream.
  async start() {
    this.webcamConfig.facingMode && N(this.webcamConfig.facingMode === "user" || this.webcamConfig.facingMode === "environment", () => `Invalid webcam facing mode: ${this.webcamConfig.facingMode}. Please provide 'user' or 'environment'`);
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({
        video: {
          deviceId: this.webcamConfig.deviceId,
          facingMode: this.webcamConfig.facingMode ? this.webcamConfig.facingMode : "user",
          width: this.webcamVideoElement.width,
          height: this.webcamVideoElement.height
        }
      });
    } catch (e) {
      throw e.message = `Error thrown while initializing video stream: ${e.message}`, e;
    }
    if (!this.stream)
      throw new Error("Could not obtain video from webcam.");
    try {
      this.webcamVideoElement.srcObject = this.stream;
    } catch (e) {
      console.log(e), this.webcamVideoElement.src = window.URL.createObjectURL(this.stream);
    }
    return this.webcamVideoElement.play(), this.isClosed = !1, new Promise((e) => {
      this.webcamVideoElement.onloadedmetadata = () => {
        e();
      };
    });
  }
  async next() {
    if (this.isClosed)
      return { value: null, done: !0 };
    let e;
    try {
      e = qu(this.webcamVideoElement);
    } catch (t) {
      throw new Error(`Error thrown converting video to pixels: ${JSON.stringify(t)}`);
    }
    if (this.resize)
      try {
        return { value: this.cropAndResizeFrame(e), done: !1 };
      } catch (t) {
        throw new Error(`Error thrown cropping the video: ${t.message}`);
      } finally {
        e.dispose();
      }
    else
      return { value: e, done: !1 };
  }
  needToResize() {
    return !!(this.webcamConfig.resizeWidth && this.webcamConfig.resizeHeight && (this.webcamVideoElement.width !== this.webcamConfig.resizeWidth || this.webcamVideoElement.height !== this.webcamConfig.resizeHeight));
  }
  // Cropping and resizing each frame based on config
  cropAndResizeFrame(e) {
    return C(() => {
      const t = pt(Y(e, "float32"), 0);
      let a;
      a = mt.cropAndResize(t, this.cropBox, this.cropBoxInd, this.cropSize, "bilinear");
      const r = a.shape;
      return v(a, r.slice(1));
    });
  }
  // Capture one frame from the video stream, and extract the value from
  // iterator.next() result.
  async capture() {
    return (await this.next()).value;
  }
  // Stop the video stream and pause webcam iterator.
  stop() {
    this.stream.getTracks().forEach((t) => t.stop());
    try {
      this.webcamVideoElement.srcObject = null;
    } catch (t) {
      console.log(t), this.webcamVideoElement.src = null;
    }
    this.isClosed = !0;
  }
  // Override toArray() function to prevent collecting.
  toArray() {
    throw new Error("Can not convert infinite video stream to array.");
  }
}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */
class Yn {
}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */
class Mn extends Ee {
  /**
   * Splits a string stream on a given separator.
   *
   * It is assumed that the incoming chunk boundaries have no semantic meaning,
   * so conceptually the incoming stream is treated simply as the concatenation
   * of its elements.
   *
   * The outgoing stream provides chunks corresponding to the results of the
   * standard string split() operation (even if such a chunk spanned incoming
   * chunks).  The separators are not included.
   *
   * A typical usage is to split a text file (represented as a stream with
   * arbitrary chunk boundaries) into lines.
   *
   * @param upstream A readable stream of strings that can be treated as
   *   concatenated.
   * @param separator A character to split on.
   */
  split(e) {
    return new Kg(this, e);
  }
}
class Kg extends Mn {
  constructor(e, t) {
    super(), this.upstream = e, this.impl = new Jg(e, t);
  }
  summary() {
    return this.impl.summary();
  }
  async next() {
    return this.impl.next();
  }
}
class Jg extends Ur {
  constructor(e, t) {
    super(), this.upstream = e, this.separator = t, this.carryover = "";
  }
  summary() {
    return `${this.upstream.summary()} -> Split('${this.separator}')`;
  }
  async pump() {
    const e = await this.upstream.next();
    if (e.done)
      return this.carryover === "" ? !1 : (this.outputQueue.push(this.carryover), this.carryover = "", !0);
    const t = e.value.split(this.separator);
    t[0] = this.carryover + t[0];
    for (const a of t.slice(0, -1))
      this.outputQueue.push(a);
    return this.carryover = t[t.length - 1], !0;
  }
}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */
class Qg extends Ee {
  /**
   * Decode a stream of UTF8-encoded byte arrays to a stream of strings.
   *
   * The byte arrays producetd from the ByteChunkIterator on which this is
   * called will be interpreted as concatenated.  No assumptions are made about
   * the boundaries of the incoming chunks, so a multi-byte UTF8 encoding of a
   * character may span the boundary between chunks.  This naturally happens,
   * for instance, when reading fixed-size byte arrays from a file.
   */
  decodeUTF8() {
    return new Xg(this);
  }
}
class Xg extends Mn {
  constructor(e) {
    super(), this.upstream = e, this.impl = new Zg(e);
  }
  summary() {
    return this.impl.summary();
  }
  async next() {
    return this.impl.next();
  }
}
class Zg extends Ur {
  constructor(e) {
    if (super(), this.upstream = e, z().get("IS_BROWSER"))
      this.decoder = new TextDecoder("utf-8");
    else {
      const { StringDecoder: t } = require("string_decoder");
      this.decoder = new t("utf8");
    }
  }
  summary() {
    return `${this.upstream.summary()} -> Utf8`;
  }
  async pump() {
    const e = await this.upstream.next();
    let t;
    if (e.done)
      return !1;
    t = e.value;
    let a;
    return z().get("IS_BROWSER") ? a = this.decoder.decode(t, { stream: !0 }) : a = this.decoder.write(Buffer.from(t.buffer)), this.outputQueue.push(a), !0;
  }
}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */
class ei extends Qg {
  constructor(e, t = {}) {
    super(), this.file = e, this.options = t, N(e instanceof Uint8Array || (z().get("IS_BROWSER") ? e instanceof File || e instanceof Blob : !1), () => "FileChunkIterator only supports File, Blob and Uint8Array right now."), this.offset = t.offset || 0, this.chunkSize = t.chunkSize || 1024 * 1024;
  }
  summary() {
    return `FileChunks ${this.file}`;
  }
  async next() {
    return this.offset >= (this.file instanceof Uint8Array ? this.file.byteLength : this.file.size) ? { value: null, done: !0 } : { value: await new Promise((t, a) => {
      const r = this.offset + this.chunkSize;
      if (this.file instanceof Uint8Array)
        t(new Uint8Array(this.file.slice(this.offset, r)));
      else {
        const n = new FileReader();
        n.onload = (u) => {
          let l = n.result;
          if (l instanceof ArrayBuffer && (l = new Uint8Array(l)), !(l instanceof Uint8Array))
            return a(new TypeError("FileReader returned unknown type."));
          t(l);
        }, n.onabort = (u) => a(new Error("Aborted")), n.onerror = (u) => a(new Error(u.type));
        const o = this.file.slice(this.offset, r);
        n.readAsArrayBuffer(o);
      }
      this.offset = r;
    }), done: !1 };
  }
}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */
async function Yg(s, e = {}, t) {
  let a, r;
  typeof s == "string" ? a = s : (a = s.url, r = Mg(s));
  const n = await (t || Uu)(a, r);
  if (n.ok) {
    const o = new Uint8Array(await n.arrayBuffer());
    return new ei(o, e);
  } else
    throw new Error(n.statusText);
}
const Mg = (s) => ({
  method: s.method,
  headers: s.headers,
  body: s.body,
  mode: s.mode,
  credentials: s.credentials,
  cache: s.cache,
  redirect: s.redirect,
  referrer: s.referrer,
  integrity: s.integrity
});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */
function ti(s) {
  return typeof s == "string" && s.slice(0, 7) === "file://";
}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */
class si extends Yn {
  /**
   * Create a `FileDataSource`.
   *
   * @param input Local file path, or `File`/`Blob`/`Uint8Array` object to
   *     read. Local file only works in node environment.
   * @param options Options passed to the underlying `FileChunkIterator`s,
   *   such as {chunksize: 1024}.
   */
  constructor(e, t = {}) {
    super(), this.input = e, this.options = t;
  }
  async iterator() {
    if (ti(this.input) && z().get("IS_NODE")) {
      const e = require("fs");
      this.input = e.readFileSync(this.input.slice(7));
    }
    return new ei(this.input, this.options);
  }
}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */
class ai extends Yn {
  /**
   * Create a `URLDataSource`.
   *
   * @param url A source URL string, or a `Request` object.
   * @param options Options passed to the underlying `FileChunkIterator`s,
   *   such as {chunksize: 1024}.
   */
  constructor(e, t = {}) {
    super(), this.url = e, this.fileOptions = t;
  }
  // TODO(soergel): provide appropriate caching options.  Currently this
  // will download the URL anew for each call to iterator().  Since we have
  // to treat the downloaded file as a blob/buffer anyway, we may as well retain
  // it-- but that raises GC issues.  Also we may want a persistent disk cache.
  async iterator() {
    return ti(this.url) ? new si(this.url, this.fileOptions).iterator() : Yg(this.url, this.fileOptions);
  }
}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */
function eb(s, e = {}) {
  return new Zn(new ai(s), e);
}
function tb(s) {
  const e = Gr(s);
  return Kr(async () => e);
}
function sb(s) {
  return Kr(async () => {
    const e = await s();
    return Gr(() => e.next());
  });
}
async function ab(s, e) {
  return _t.create(s, e);
}
async function rb(s) {
  return Ot.create(s);
}
/** @license See the LICENSE file. */
const ri = "3.21.0";
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const nb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CSVDataset: Zn,
  Dataset: dt,
  FileDataSource: si,
  TextLineDataset: Xn,
  URLDataSource: ai,
  array: Gu,
  csv: eb,
  func: tb,
  generator: sb,
  microphone: rb,
  version_data: ri,
  webcam: ab,
  zip: Ku
}, Symbol.toStringTag, { value: "Module" }));
/** @license See the LICENSE file. */
const ib = "3.21.0";
/** @license See the LICENSE file. */
const ob = "3.21.0";
/** @license See the LICENSE file. */
const ub = "3.21.0";
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const lb = {
  "tfjs-core": Yr,
  "tfjs-backend-cpu": ib,
  "tfjs-backend-webgl": ob,
  "tfjs-data": ri,
  "tfjs-layers": Jr,
  "tfjs-converter": Qn,
  tfjs: ub
}, pb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Abs: Ju,
  Acos: Qu,
  Acosh: Xu,
  AdadeltaOptimizer: Zu,
  AdagradOptimizer: Yu,
  AdamOptimizer: Mu,
  AdamaxOptimizer: el,
  Add: tl,
  AddN: Xt,
  All: sl,
  Any: al,
  ArgMax: rl,
  ArgMin: nl,
  Asin: il,
  Asinh: ol,
  Atan: ul,
  Atan2: ll,
  Atanh: pl,
  AvgPool: ml,
  AvgPool3D: cl,
  AvgPool3DGrad: dl,
  AvgPoolGrad: hl,
  BatchMatMul: fl,
  BatchToSpaceND: yl,
  Bincount: gl,
  BroadcastArgs: Zt,
  BroadcastTo: bl,
  Callback: Wn,
  CallbackList: Nl,
  Cast: wl,
  Ceil: Tl,
  ClipByValue: Sl,
  Complex: vl,
  ComplexAbs: Ol,
  Concat: _l,
  Conv2D: Al,
  Conv2DBackpropFilter: El,
  Conv2DBackpropInput: kl,
  Conv3D: $l,
  Conv3DBackpropFilterV2: Dl,
  Conv3DBackpropInputV2: Il,
  Cos: Cl,
  Cosh: xl,
  CropAndResize: zl,
  Cumprod: Ll,
  Cumsum: Fl,
  CustomCallback: Pl,
  DataStorage: Vl,
  DenseBincount: Yt,
  DepthToSpace: Rl,
  DepthwiseConv2dNative: jl,
  DepthwiseConv2dNativeBackpropFilter: Bl,
  DepthwiseConv2dNativeBackpropInput: Hl,
  Diag: Mt,
  Dilation2D: Wl,
  Dilation2DBackpropFilter: ql,
  Dilation2DBackpropInput: Ul,
  get ENV() {
    return Gl;
  },
  EarlyStopping: qn,
  Einsum: es,
  Elu: Kl,
  EluGrad: Jl,
  Environment: Ql,
  Equal: Xl,
  Erf: Zl,
  Exp: Yl,
  ExpandDims: Ml,
  Expm1: ep,
  FFT: tp,
  Fill: sp,
  FlipLeftRight: ap,
  Floor: rp,
  FloorDiv: np,
  FromPixels: ip,
  FusedBatchNorm: op,
  FusedConv2D: up,
  FusedDepthwiseConv2D: Fe,
  GatherNd: ms,
  GatherV2: lp,
  GraphModel: vt,
  Greater: pp,
  GreaterEqual: mp,
  History: cp,
  IFFT: dp,
  Identity: hp,
  Imag: fp,
  InputSpec: yp,
  IsFinite: gp,
  IsInf: bp,
  IsNan: Np,
  KernelBackend: wp,
  LRN: Tp,
  LRNGrad: Sp,
  LayerVariable: vp,
  LayersModel: nt,
  LeakyRelu: Op,
  Less: _p,
  LessEqual: Ap,
  LinSpace: ts,
  Log: Ep,
  Log1p: kp,
  LogSoftmax: $p,
  LogicalAnd: Dp,
  LogicalNot: Ip,
  LogicalOr: Cp,
  LogicalXor: xp,
  LowerBound: zp,
  Max: Lp,
  MaxPool: Fp,
  MaxPool3D: Pp,
  MaxPool3DGrad: Vp,
  MaxPoolGrad: Rp,
  MaxPoolWithArgmax: as,
  Maximum: jp,
  Mean: Bp,
  Min: Hp,
  Minimum: Wp,
  MirrorPad: qp,
  Mod: Up,
  MomentumOptimizer: Gp,
  Multinomial: rs,
  Multiply: Kp,
  Neg: Jp,
  NonMaxSuppressionV3: Qp,
  NonMaxSuppressionV4: Xp,
  NonMaxSuppressionV5: Zp,
  NotEqual: Yp,
  OP_SCOPE_SUFFIX: ds,
  OneHot: Mp,
  OnesLike: em,
  Optimizer: tm,
  OptimizerConstructors: sm,
  Pack: am,
  PadV2: rm,
  Pool: nm,
  Pow: im,
  Prelu: om,
  Prod: um,
  RMSPropOptimizer: lm,
  RNN: it,
  RaggedGather: ns,
  RaggedTensorToTensor: is,
  Range: pm,
  get Rank() {
    return mm;
  },
  Real: cm,
  RealDiv: dm,
  Reciprocal: hm,
  get Reduction() {
    return fm;
  },
  Relu: ym,
  Relu6: gm,
  Reshape: bm,
  ResizeBilinear: Nm,
  ResizeBilinearGrad: wm,
  ResizeNearestNeighbor: Tm,
  ResizeNearestNeighborGrad: Sm,
  Reverse: vm,
  RotateWithOffset: Om,
  Round: _m,
  Rsqrt: Am,
  SGDOptimizer: Em,
  ScatterNd: ls,
  SearchSorted: ss,
  Select: km,
  Selu: $m,
  Sequential: cs,
  Sigmoid: Dm,
  Sign: Im,
  Sin: Cm,
  Sinh: xm,
  Slice: zm,
  Softmax: Lm,
  Softplus: Fm,
  SpaceToBatchND: Pm,
  SparseFillEmptyRows: Vm,
  SparseReshape: Rm,
  SparseSegmentMean: jm,
  SparseSegmentSum: Bm,
  SparseToDense: ps,
  SplitV: Hm,
  Sqrt: Wm,
  Square: qm,
  SquaredDifference: Um,
  Step: Gm,
  StridedSlice: Km,
  StringNGrams: Jm,
  StringSplit: Qm,
  StringToHashBucketFast: Xm,
  Sub: Zm,
  Sum: Ym,
  SymbolicTensor: Mm,
  Tan: ec,
  Tanh: tc,
  Tensor: me,
  TensorBuffer: ze,
  Tile: sc,
  TopK: ac,
  Transform: rc,
  Transpose: nc,
  Unique: ic,
  Unpack: oc,
  UnsortedSegmentSum: uc,
  UpperBound: lc,
  Variable: pc,
  ZerosLike: mc,
  _FusedMatMul: cc,
  abs: hs,
  acos: fs,
  acosh: ys,
  add: G,
  addN: Mr,
  all: gs,
  any: bs,
  argMax: Ns,
  argMin: ws,
  asin: Ts,
  asinh: Ss,
  atan: vs,
  atan2: Os,
  atanh: _s,
  avgPool: As,
  avgPool3d: Es,
  backend: dc,
  backend_util: hc,
  basicLSTMCell: en,
  batchNorm: ks,
  batchNorm2d: $s,
  batchNorm3d: Ds,
  batchNorm4d: Is,
  batchToSpaceND: Cs,
  bincount: xs,
  booleanMaskAsync: In,
  broadcastArgs: tn,
  broadcastTo: zs,
  broadcast_util: fc,
  browser: yc,
  buffer: Xe,
  callbacks: wy,
  cast: Y,
  ceil: Ls,
  clipByValue: Fs,
  clone: lt,
  complex: Ps,
  concat: ce,
  concat1d: Vs,
  concat2d: Rs,
  concat3d: js,
  concat4d: Bs,
  constraints: bh,
  conv1d: Hs,
  conv2d: Ws,
  conv2dTranspose: qs,
  conv3d: Us,
  conv3dTranspose: Gs,
  copyRegisteredKernels: gc,
  cos: Ks,
  cosh: Js,
  cosineWindow: Qs,
  cumprod: Xs,
  cumsum: Zs,
  customGrad: Le,
  data: nb,
  denseBincount: sn,
  deprecationWarn: bc,
  depthToSpace: Ys,
  depthwiseConv2d: rt,
  deregisterOp: Sy,
  device_util: Nc,
  diag: an,
  dilation2d: Ms,
  disableDeprecationWarnings: wc,
  dispose: Tc,
  disposeVariables: Sc,
  div: st,
  divNoNan: ea,
  dot: ta,
  dropout: sa,
  einsum: rn,
  elu: aa,
  enableDebugMode: vc,
  enableProdMode: Oc,
  enclosingPowerOfTwo: ra,
  engine: _c,
  env: z,
  equal: na,
  erf: ia,
  euclideanNorm: oa,
  exp: ua,
  expandDims: pt,
  expm1: la,
  eye: pa,
  fft: ma,
  fill: ca,
  findBackend: Ac,
  findBackendFactory: Ec,
  floor: da,
  floorDiv: ha,
  fused: Pn,
  gather: tt,
  gatherND: Ln,
  gather_util: kc,
  getBackend: $c,
  getGradient: Dc,
  getKernel: Ic,
  getKernelsForBackend: Cc,
  grad: xc,
  grads: zc,
  greater: fa,
  greaterEqual: ya,
  ifft: ga,
  imag: ba,
  image: mt,
  inTopKAsync: Fn,
  initializers: zh,
  input: Vn,
  io: ht,
  irfft: Na,
  isFinite: wa,
  isInf: Ta,
  isNaN: Sa,
  keep: H,
  kernel_impls: dh,
  layers: Zf,
  leakyRelu: va,
  less: Oa,
  lessEqual: _a,
  linalg: Aa,
  linspace: nn,
  loadGraphModel: qg,
  loadGraphModelSync: Ug,
  loadLayersModel: Ph,
  localResponseNormalization: Ea,
  log: ka,
  log1p: $a,
  logSigmoid: Da,
  logSoftmax: Ia,
  logSumExp: Ca,
  logicalAnd: xa,
  logicalNot: za,
  logicalOr: La,
  logicalXor: Fa,
  losses: Pa,
  lowerBound: on,
  matMul: B,
  math: Td,
  max: Va,
  maxPool: Ra,
  maxPool3d: ja,
  maxPoolWithArgmax: un,
  maximum: Ba,
  mean: Ha,
  memory: Lc,
  meshgrid: ln,
  metrics: dy,
  min: Wa,
  minimum: qa,
  mirrorPad: Ua,
  mod: Ga,
  model: Lh,
  models: hy,
  moments: Ka,
  movingAverage: Cn,
  mul: M,
  multiRNNCell: pn,
  multinomial: mn,
  neg: Ja,
  nextFrame: Fc,
  norm: Qa,
  notEqual: Xa,
  oneHot: we,
  ones: Z,
  onesLike: Za,
  op: w,
  outerProduct: cn,
  pad: te,
  pad1d: dn,
  pad2d: hn,
  pad3d: fn,
  pad4d: yn,
  pool: Ya,
  pow: at,
  prelu: Ma,
  print: er,
  prod: tr,
  profile: Pc,
  raggedGather: gn,
  raggedTensorToTensor: bn,
  rand: Nn,
  randomGamma: wn,
  randomNormal: Ze,
  randomStandardNormal: Tn,
  randomUniform: sr,
  range: ar,
  ready: Vc,
  real: rr,
  reciprocal: nr,
  registerBackend: Rc,
  registerCallbackConstructor: Vh,
  registerGradient: jc,
  registerKernel: Bc,
  registerOp: Ty,
  regularizers: by,
  relu: ir,
  relu6: or,
  removeBackend: Hc,
  reshape: v,
  reverse: se,
  reverse1d: Sn,
  reverse2d: vn,
  reverse3d: On,
  reverse4d: _n,
  rfft: ur,
  round: lr,
  rsqrt: pr,
  scalar: V,
  scatterND: xn,
  scatter_util: Wc,
  searchSorted: ke,
  selu: mr,
  separableConv2d: cr,
  sequential: Fh,
  serialization: qc,
  setBackend: Uc,
  setPlatform: Gc,
  setdiff1dAsync: An,
  sigmoid: ie,
  sign: dr,
  signal: hr,
  sin: fr,
  sinh: yr,
  slice: q,
  slice1d: gr,
  slice2d: br,
  slice3d: Nr,
  slice4d: wr,
  slice_util: Kc,
  softmax: Tr,
  softplus: Sr,
  spaceToBatchND: vr,
  sparse: Or,
  sparseToDense: zn,
  spectral: _r,
  split: Ar,
  sqrt: Er,
  square: kr,
  squaredDifference: $r,
  squeeze: et,
  stack: ee,
  step: Dr,
  stridedSlice: Ir,
  string: Cr,
  sub: oe,
  sum: xr,
  sumOutType: Jc,
  tan: zr,
  tanh: Te,
  tensor: U,
  tensor1d: ct,
  tensor2d: Se,
  tensor3d: Lr,
  tensor4d: En,
  tensor5d: kn,
  tensor6d: $n,
  tensor_util: Qc,
  test_util: Id,
  tidy: C,
  tile: Fr,
  time: Xc,
  topk: Pr,
  train: Zc,
  transpose: Qe,
  truncatedNormal: Vr,
  unique: Rr,
  unregisterGradient: Yc,
  unregisterKernel: Mc,
  unsortedSegmentSum: jr,
  unstack: ae,
  upcastType: ed,
  upperBound: Dn,
  util: td,
  valueAndGrad: sd,
  valueAndGrads: ad,
  variable: Br,
  variableGrads: rd,
  version: lb,
  version_converter: Qn,
  version_core: Yr,
  version_layers: Jr,
  where: Hr,
  whereAsync: gt,
  zeros: Wr,
  zerosLike: qr
}, Symbol.toStringTag, { value: "Module" })), ni = new xe();
ni.compose(new Ne(), new qt(), new Ne(1e-3, 1e-3, 1e-3));
class mb {
  constructor({
    container: e,
    imageTargetSrc: t,
    maxTrack: a,
    uiLoading: r = "yes",
    uiScanning: n = "yes",
    uiError: o = "yes",
    filterMinCF: u = null,
    filterBeta: l = null,
    warmupTolerance: m = null,
    missTolerance: p = null
  }) {
    this.container = e, this.imageTargetSrc = t, this.maxTrack = a, this.filterMinCF = u, this.filterBeta = l, this.warmupTolerance = m, this.missTolerance = p, this.ui = new od({ uiLoading: r, uiScanning: n, uiError: o }), this.scene = new kt(), this.cssScene = new kt(), this.renderer = new oi({ antialias: !0, alpha: !0 }), this.cssRenderer = new id({ antialias: !0 }), this.renderer.outputEncoding = ui, this.renderer.setPixelRatio(window.devicePixelRatio), this.camera = new li(), this.anchors = [], this.renderer.domElement.style.position = "absolute", this.cssRenderer.domElement.style.position = "absolute", this.container.appendChild(this.renderer.domElement), this.container.appendChild(this.cssRenderer.domElement), window.addEventListener("resize", this.resize.bind(this));
  }
  async start() {
    this.ui.showLoading(), await this._startVideo(), await this._startAR();
  }
  stop() {
    this.controller.stopProcessVideo(), this.video.srcObject.getTracks().forEach(function(t) {
      t.stop();
    }), this.video.remove();
  }
  addAnchor(e) {
    const t = new $t();
    t.visible = !1, t.matrixAutoUpdate = !1;
    const a = { group: t, targetIndex: e, onTargetFound: null, onTargetLost: null, onTargetUpdate: null, css: !1, visible: !1 };
    return this.anchors.push(a), this.scene.add(t), a;
  }
  addCSSAnchor(e) {
    const t = new $t();
    t.visible = !1, t.matrixAutoUpdate = !1;
    const a = { group: t, targetIndex: e, onTargetFound: null, onTargetLost: null, onTargetUpdate: null, css: !0, visible: !1 };
    return this.anchors.push(a), this.cssScene.add(t), a;
  }
  _startVideo() {
    return new Promise((e, t) => {
      if (this.video = document.createElement("video"), this.video.setAttribute("autoplay", ""), this.video.setAttribute("muted", ""), this.video.setAttribute("playsinline", ""), this.video.style.position = "absolute", this.video.style.top = "0px", this.video.style.left = "0px", this.video.style.zIndex = "-2", this.container.appendChild(this.video), !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        this.ui.showCompatibility(), t();
        return;
      }
      navigator.mediaDevices.getUserMedia({
        audio: !1,
        video: {
          facingMode: "environment"
        }
      }).then((a) => {
        this.video.addEventListener("loadedmetadata", () => {
          this.video.setAttribute("width", this.video.videoWidth), this.video.setAttribute("height", this.video.videoHeight), e();
        }), this.video.srcObject = a;
      }).catch((a) => {
        console.log("getUserMedia error", a), t();
      });
    });
  }
  _startAR() {
    return new Promise(async (e, t) => {
      const a = this.video;
      this.container, this.controller = new nd({
        inputWidth: a.videoWidth,
        inputHeight: a.videoHeight,
        filterMinCF: this.filterMinCF,
        filterBeta: this.filterBeta,
        warmupTolerance: this.warmupTolerance,
        missTolerance: this.missTolerance,
        maxTrack: this.maxTrack,
        onUpdate: (n) => {
          if (n.type === "updateMatrix") {
            const { targetIndex: o, worldMatrix: u } = n;
            for (let m = 0; m < this.anchors.length; m++)
              if (this.anchors[m].targetIndex === o) {
                if (this.anchors[m].css ? this.anchors[m].group.children.forEach((p) => {
                  p.element.style.visibility = u === null ? "hidden" : "visible";
                }) : this.anchors[m].group.visible = u !== null, u !== null) {
                  let p = new xe();
                  p.elements = [...u], p.multiply(this.postMatrixs[o]), this.anchors[m].css && p.multiply(ni), this.anchors[m].group.matrix = p;
                }
                this.anchors[m].visible && u === null && (this.anchors[m].visible = !1, this.anchors[m].onTargetLost && this.anchors[m].onTargetLost()), !this.anchors[m].visible && u !== null && (this.anchors[m].visible = !0, this.anchors[m].onTargetFound && this.anchors[m].onTargetFound()), this.anchors[m].onTargetUpdate && this.anchors[m].onTargetUpdate();
              }
            this.anchors.reduce((m, p) => m || p.visible, !1) ? this.ui.hideScanning() : this.ui.showScanning();
          }
        }
      }), this.resize();
      const { dimensions: r } = await this.controller.addImageTargets(this.imageTargetSrc);
      this.postMatrixs = [];
      for (let n = 0; n < r.length; n++) {
        const o = new Ne(), u = new qt(), l = new Ne(), [m, p] = r[n];
        o.x = m / 2, o.y = m / 2 + (p - m) / 2, l.x = m, l.y = m, l.z = m;
        const c = new xe();
        c.compose(o, u, l), this.postMatrixs.push(c);
      }
      await this.controller.dummyRun(this.video), this.ui.hideLoading(), this.ui.showScanning(), this.controller.processVideo(this.video), e();
    });
  }
  resize() {
    const { renderer: e, cssRenderer: t, camera: a, container: r, video: n } = this;
    if (!n)
      return;
    let o, u;
    const l = n.videoWidth / n.videoHeight, m = r.clientWidth / r.clientHeight;
    l > m ? (u = r.clientHeight, o = u * l) : (o = r.clientWidth, u = o / l);
    const p = this.controller.getProjectionMatrix(), c = 2 * Math.atan(1 / p[5] / u * r.clientHeight) * 180 / Math.PI, d = p[14] / (p[10] - 1), h = p[14] / (p[10] + 1);
    p[5] / p[0], a.fov = c, a.near = d, a.far = h, a.aspect = r.clientWidth / r.clientHeight, a.updateProjectionMatrix(), n.style.top = -(u - r.clientHeight) / 2 + "px", n.style.left = -(o - r.clientWidth) / 2 + "px", n.style.width = o + "px", n.style.height = u + "px";
    const b = e.domElement, f = t.domElement;
    b.style.position = "absolute", b.style.left = 0, b.style.top = 0, b.style.width = r.clientWidth + "px", b.style.height = r.clientHeight + "px", f.style.position = "absolute", f.style.left = 0, f.style.top = 0, f.style.width = r.clientWidth + "px", f.style.height = r.clientHeight + "px", e.setSize(r.clientWidth, r.clientHeight), t.setSize(r.clientWidth, r.clientHeight);
  }
}
window.MINDAR || (window.MINDAR = {});
window.MINDAR.IMAGE || (window.MINDAR.IMAGE = {});
window.MINDAR.IMAGE.MindARThree = mb;
window.MINDAR.IMAGE.tf = pb;
export {
  mb as MindARThree
};
