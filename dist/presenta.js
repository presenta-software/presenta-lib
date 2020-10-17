// https://lib.presenta.cc v0.0.36 Copyright 2020 Fabio Franchino
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Presenta = factory());
}(this, (function () { 'use strict';

  var version = "0.0.36";

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = ".presenta *{box-sizing:border-box}.presenta{position:relative;--presenta-pw:960;--presenta-w:960px;--presenta-h:540px;--presenta-vp:960;--presenta-fz:1;--presenta-p:calc(var(--presenta-pw)/var(--presenta-vp))}";
  styleInject(css_248z);

  var css_248z$1 = ".colorVar__a,:root{--colorBack:#fff;--colorFore:#000;--colorAccent:#444;--colorAlt:#ddd}.colorVar__b{--colorBack:#000;--colorAccent:#999}.colorVar__b,.colorVar__c{--colorFore:#fff;--colorAlt:#ccc}.colorVar__c{--colorBack:#444;--colorAccent:#fff}";
  styleInject(css_248z$1);

  var css_248z$2 = ".colors__a,.colors__a.colorVar__a,.colors__a .colorVar__a{--colorBack:#000;--colorFore:#fff;--colorAccent:#eeff2e;--colorAlt:#de1318}.colors__a.colorVar__b,.colors__a .colorVar__b{--colorBack:#eeff2e;--colorFore:#000;--colorAccent:#de1318;--colorAlt:#fff}.colors__a.colorVar__c,.colors__a .colorVar__c{--colorBack:#de1318;--colorFore:#eeff2e;--colorAccent:#fff;--colorAlt:#000}";
  styleInject(css_248z$2);

  var css_248z$3 = ".colors__b,.colors__b.colorVar__a,.colors__b .colorVar__a{--colorBack:#a9dbd5;--colorFore:#000;--colorAccent:#fff;--colorAlt:#38999d}.colors__b.colorVar__b,.colors__b .colorVar__b{--colorBack:#000;--colorFore:#a9dbd5;--colorAccent:#fff;--colorAlt:#38999d}.colors__b.colorVar__c,.colors__b .colorVar__c{--colorBack:#fff;--colorFore:#38999d;--colorAccent:#a9dbd5;--colorAlt:#000}";
  styleInject(css_248z$3);

  var css_248z$4 = ".colors__c,.colors__c.colorVar__a,.colors__c .colorVar__a{--colorBack:#e5ff9d;--colorFore:#1c003f;--colorAccent:#69567c;--colorAlt:#fff}.colors__c.colorVar__b,.colors__c .colorVar__b{--colorBack:#1c003f;--colorFore:#fff;--colorAccent:#e5ff9d;--colorAlt:#69567c}.colors__c.colorVar__c,.colors__c .colorVar__c{--colorBack:#69567c;--colorFore:#e5ff9d;--colorAccent:#fff;--colorAlt:#1c003f}";
  styleInject(css_248z$4);

  var css_248z$5 = ".colors__d,.colors__d.colorVar__a,.colors__d .colorVar__a{--colorBack:#d0caa9;--colorFore:#30302f;--colorAccent:#ec4a25;--colorAlt:#fff}.colors__d.colorVar__b,.colors__d .colorVar__b{--colorBack:#30302f;--colorFore:#d0caa9;--colorAccent:#ec4a25;--colorAlt:#fff}.colors__d.colorVar__c,.colors__d .colorVar__c{--colorBack:#ec4a25;--colorFore:#fff;--colorAccent:#d0caa9;--colorAlt:#30302f}";
  styleInject(css_248z$5);

  var css_248z$6 = ".colors__e,.colors__e.colorVar__a,.colors__e .colorVar__a{--colorBack:#3b7bc3;--colorFore:#f9fb45;--colorAccent:#fff;--colorAlt:#000}.colors__e.colorVar__b,.colors__e .colorVar__b{--colorBack:#000;--colorFore:#f9fb45;--colorAccent:#fff;--colorAlt:#3b7bc3}.colors__e.colorVar__c,.colors__e .colorVar__c{--colorBack:#f9fb45;--colorFore:#000;--colorAccent:#3b7bc3;--colorAlt:#fff}";
  styleInject(css_248z$6);

  var css_248z$7 = ".colors__f,.colors__f.colorVar__a,.colors__f .colorVar__a{--colorBack:#ebded1;--colorFore:#0a47d1;--colorAccent:#fb4138;--colorAlt:#fff}.colors__f.colorVar__b,.colors__f .colorVar__b{--colorBack:#0a47d1;--colorFore:#ebded1;--colorAccent:#fff;--colorAlt:#fb4138}.colors__f.colorVar__c,.colors__f .colorVar__c{--colorBack:#fb4138;--colorFore:#fff;--colorAccent:#ebded1;--colorAlt:#0a47d1}";
  styleInject(css_248z$7);

  var css_248z$8 = ".colors__g,.colors__g.colorVar__a,.colors__g .colorVar__a{--colorBack:#322067;--colorFore:#feb8ba;--colorAccent:#449eaf;--colorAlt:#fff}.colors__g.colorVar__b,.colors__g .colorVar__b{--colorBack:#feb8ba;--colorFore:#322067;--colorAccent:#fff;--colorAlt:#449eaf}.colors__g.colorVar__c,.colors__g .colorVar__c{--colorBack:#fff;--colorFore:#322067;--colorAccent:#449eaf;--colorAlt:#feb8ba}";
  styleInject(css_248z$8);

  var css_248z$9 = ".colors__h,.colors__h.colorVar__a,.colors__h .colorVar__a{--colorBack:#f9ffb1;--colorFore:#072020;--colorAccent:#ec4225;--colorAlt:#9eb0bb}.colors__h.colorVar__b,.colors__h .colorVar__b{--colorBack:#072020;--colorFore:#f9ffb1;--colorAccent:#ec4225;--colorAlt:#9eb0bb}.colors__h.colorVar__c,.colors__h .colorVar__c{--colorBack:#ec4225;--colorFore:#f9ffb1;--colorAccent:#c5dbe9;--colorAlt:#072020}";
  styleInject(css_248z$9);

  var css_248z$a = ".colors__i,.colors__i.colorVar__a,.colors__i .colorVar__a{--colorBack:#ffe600;--colorFore:#000;--colorAccent:#ff6400;--colorAlt:#fff}.colors__i.colorVar__b,.colors__i .colorVar__b{--colorBack:#000;--colorFore:#ffe600;--colorAccent:#fff;--colorAlt:#ff6400}.colors__i.colorVar__c,.colors__i .colorVar__c{--colorBack:#ff6400;--colorFore:#fff;--colorAccent:#ffe600;--colorAlt:#000}";
  styleInject(css_248z$a);

  const colors = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
  const colorvars = ['a', 'b', 'c'];

  var css_248z$b = ":root{--fontHeading:Georgia,\"Times New Roman\",Times,serif;--fontText:\"Trebuchet MS\",\"Lucida Sans Unicode\",\"Lucida Grande\",\"Lucida Sans\",Arial,sans-serif}";
  styleInject(css_248z$b);

  var css_248z$c = "@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Roboto+Mono:ital,wght@0,400;0,700;1,400&display=swap\");.fonts__a{--fontHeading:\"Roboto Mono\",monospace;--fontText:\"Montserrat\",sans-serif}";
  styleInject(css_248z$c);

  var css_248z$d = "@import url(\"https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Work+Sans&display=swap\");.fonts__b{--fontHeading:\"Work Sans\",sans-serif;--fontText:\"Playfair Display\",serif}";
  styleInject(css_248z$d);

  var css_248z$e = "@import url(\"https://fonts.googleapis.com/css2?family=Roboto+Slab&family=Carrois+Gothic+SC&display=swap\");.fonts__c{--fontHeading:\"Roboto Slab\",serif;--fontText:\"Carrois Gothic SC\",sans-serif}";
  styleInject(css_248z$e);

  var css_248z$f = "@import url(\"https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Open+Sans&display=swap\");.fonts__d{--fontHeading:\"Amatic SC\",cursive;--fontText:\"Open Sans\",sans-serif}.fonts__d h1,.fonts__d h2,.fonts__d h3{font-size:3rem}";
  styleInject(css_248z$f);

  var css_248z$g = "@import url(\"https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat&display=swap\");.fonts__e{--fontHeading:\"Bebas Neue\",cursive;--fontText:\"Montserrat\",sans-serif}";
  styleInject(css_248z$g);

  var css_248z$h = "@import url(\"https://fonts.googleapis.com/css2?family=Anton&family=Lato&display=swap\");.fonts__f{--fontHeading:\"Anton\",cursive;--fontText:\"Lato\",sans-serif}";
  styleInject(css_248z$h);

  var css_248z$i = "@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@400;900&display=swap\");.fonts__g{--fontHeading:\"Inter\",cursive;--fontText:\"Inter\",sans-serif}";
  styleInject(css_248z$i);

  const fonts = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

  var css_248z$j = ".transition__a .p-scene-enter-transition{transition:transform 1s cubic-bezier(1,0,0,1)}.transition__a .to-right.p-scene-enter-start{transform:translateX(100%)}.transition__a .to-right.p-scene-enter-end{transform:translateX(0)}.transition__a .to-left.p-scene-enter-start{transform:translateX(-100%)}.transition__a .to-left.p-scene-enter-end{transform:translateX(0)}.transition__a .p-scene-leave-transition{transition:transform 1s cubic-bezier(1,0,0,1)}.transition__a .to-right.p-scene-leave-start{transform:translateX(0)}.transition__a .to-right.p-scene-leave-end{transform:translateX(-100%)}.transition__a .to-left.p-scene-leave-start{transform:translateX(0)}.transition__a .to-left.p-scene-leave-end{transform:translateX(100%)}";
  styleInject(css_248z$j);

  var css_248z$k = ".transition__b .p-scene-enter-transition{opacity:0}.transition__b .p-scene-enter-ended{opacity:1}.transition__b .p-scene-enter-transition .textContent>*{transition:opacity 1s ease-out,transform 1s cubic-bezier(.2,.8,.05,.95)}.transition__b .p-scene-enter-transition .textContent>:first-child{transition-delay:1.15s}.transition__b .p-scene-enter-transition .textContent>:nth-child(2){transition-delay:1.3s}.transition__b .p-scene-enter-transition .textContent>:nth-child(3){transition-delay:1.45s}.transition__b .p-scene-enter-transition .textContent>:nth-child(4){transition-delay:1.6s}.transition__b .p-scene-enter-transition .textContent>:nth-child(5){transition-delay:1.75s}.transition__b .p-scene-enter-transition .textContent>:nth-child(6){transition-delay:1.9s}.transition__b .p-scene-enter-transition .textContent>:nth-child(7){transition-delay:2.05s}.transition__b .p-scene-enter-transition .textContent>:nth-child(8){transition-delay:2.2s}.transition__b .p-scene-enter-transition .textContent>:nth-child(9){transition-delay:2.35s}.transition__b .p-scene-enter-transition .textContent>:nth-child(10){transition-delay:2.5s}.transition__b .p-scene-enter-transition .textContent>:nth-child(11){transition-delay:2.65s}.transition__b .p-scene-enter-transition .textContent>:nth-child(12){transition-delay:2.8s}.transition__b .p-scene-enter-transition .textContent>:nth-child(13){transition-delay:2.95s}.transition__b .p-scene-enter-transition .textContent>:nth-child(14){transition-delay:3.1s}.transition__b .p-scene-enter-transition .textContent>:nth-child(15){transition-delay:3.25s}.transition__b .p-scene-enter-transition .textContent>:nth-child(16){transition-delay:3.4s}.transition__b .p-scene-enter-transition .textContent>:nth-child(17){transition-delay:3.55s}.transition__b .p-scene-enter-transition .textContent>:nth-child(18){transition-delay:3.7s}.transition__b .p-scene-enter-transition .textContent>:nth-child(19){transition-delay:3.85s}.transition__b .p-scene-enter-transition .textContent>:nth-child(20){transition-delay:4s}.transition__b .p-scene-enter-transition .blockContainer>div{transition:background-color 1s cubic-bezier(1,0,0,1);transition-delay:1s}.transition__b .p-scene-enter-start .blockContainer>div{background-color:transparent}.transition__b .p-scene-enter-start .textContent>*{opacity:0;transform:translateY(30px)}.transition__b .p-scene-enter-end .textContent>*{opacity:1;transform:translateY(0)}.transition__b .p-scene-leave-transition .textContent>*{transition:opacity .75s cubic-bezier(.165,.84,.44,1),transform .75s cubic-bezier(.165,.84,.44,1)}.transition__b .p-scene-leave-transition .textContent>:nth-child(0){transition-delay:0s}.transition__b .p-scene-leave-transition .textContent>:first-child{transition-delay:.1s}.transition__b .p-scene-leave-transition .textContent>:nth-child(2){transition-delay:.2s}.transition__b .p-scene-leave-transition .textContent>:nth-child(3){transition-delay:.3s}.transition__b .p-scene-leave-transition .textContent>:nth-child(4){transition-delay:.4s}.transition__b .p-scene-leave-transition .textContent>:nth-child(5){transition-delay:.5s}.transition__b .p-scene-leave-transition .textContent>:nth-child(6){transition-delay:.6s}.transition__b .p-scene-leave-transition .textContent>:nth-child(7){transition-delay:.7s}.transition__b .p-scene-leave-transition .textContent>:nth-child(8){transition-delay:.8s}.transition__b .p-scene-leave-transition .textContent>:nth-child(9){transition-delay:.9s}.transition__b .p-scene-leave-transition .textContent>:nth-child(10){transition-delay:1s}.transition__b .p-scene-leave-transition .textContent>:nth-child(11){transition-delay:1.1s}.transition__b .p-scene-leave-transition .textContent>:nth-child(12){transition-delay:1.2s}.transition__b .p-scene-leave-transition .textContent>:nth-child(13){transition-delay:1.3s}.transition__b .p-scene-leave-transition .textContent>:nth-child(14){transition-delay:1.4s}.transition__b .p-scene-leave-transition .textContent>:nth-child(15){transition-delay:1.5s}.transition__b .p-scene-leave-transition .textContent>:nth-child(16){transition-delay:1.6s}.transition__b .p-scene-leave-transition .textContent>:nth-child(17){transition-delay:1.7s}.transition__b .p-scene-leave-transition .textContent>:nth-child(18){transition-delay:1.8s}.transition__b .p-scene-leave-transition .textContent>:nth-child(19){transition-delay:1.9s}.transition__b .p-scene-leave-transition .textContent>:nth-child(20){transition-delay:2s}.transition__b .p-scene-leave-start .textContent>*{opacity:1;transform:scale(1)}.transition__b .p-scene-leave-end .textContent>*{opacity:0;transform:scale(.85)}";
  styleInject(css_248z$k);

  var css_248z$l = ".transition__c .p-scene-enter-transition{transition:all .75s cubic-bezier(.2,.8,.05,.95)}.transition__c .p-scene-enter-start{transform:translateY(150%)}.transition__c .p-scene-enter-end{transform:translateY(0)}.transition__c .p-scene-leave-transition{transition:all .75s cubic-bezier(.2,.8,.05,.95)}.transition__c .p-scene-leave-start{transform:scale(1)}.transition__c .p-scene-leave-end{transform:scale(.5)}";
  styleInject(css_248z$l);

  const transitions = ['a', 'b', 'c'];

  var css_248z$m = ":root{--scenePadding:0;--sceneBackColor:none}.sceneVar__a{--scenePadding:0.5rem}.sceneVar__a,.sceneVar__b{--sceneBackColor:var(--colorFore)}.sceneVar__b{--scenePadding:2rem}.sceneVar__c{--scenePadding:3.5rem}.sceneVar__c,.sceneVar__d{--sceneBackColor:var(--colorFore)}.sceneVar__d{--scenePadding:0 4rem 4rem 0}.sceneVar__e{--scenePadding:4rem 0rem 4rem 0rem;--sceneBackColor:var(--colorFore)}";
  styleInject(css_248z$m);

  const scenevars = ['a', 'b', 'c', 'd', 'e'];

  var css_248z$n = ":root{--blockWeight:1;--blockPadding:0;--blockOpacity:1;--blockBlend:unset}.blockVar__a{--blockPadding:0.5rem}.blockVar__b{--blockPadding:1.5rem}.blockVar__c{--blockPadding:3rem}.blockVar__d{--blockPadding:0 3rem 3rem 0}.blockVar__e{--blockPadding:2rem 0rem 2rem 0rem}.blockVar__f{--blockPadding:1rem 0rem 3rem 0rem}";
  styleInject(css_248z$n);

  const blockvars = ['a', 'b', 'c'];

  var css_248z$o = ".layout__a .blocksContainer{display:flex;flex-direction:row}.layout__a .blocksContainer>div{height:100%}.layout__b .blocksContainer{display:flex;flex-direction:column}.layout__b .blocksContainer>div{width:100%}.layout__c .blocksContainer{position:relative}.layout__c .blocksContainer>div{position:absolute;top:0;left:0;width:100%;height:100%}.layout__c .blocksContainer>div:not(:first-child){background:none}.layout__d .blocksContainer{display:flex;flex-direction:column}.layout__d .blocksContainer>div{width:100%}.layout__d .blocksContainer>div:last-child{flex:5}";
  styleInject(css_248z$o);

  const layouts = ['a', 'b', 'c', 'd'];

  var globals = {
    colors,
    fonts,
    transitions,
    scenevars,
    colorvars,
    blockvars,
    layouts
  };

  const select = selector => {
    return typeof selector === 'string' ? document.querySelector(selector) : selector;
  };

  var prps = ['colorBack', 'colorFore', 'colorAccent', 'colorAlt', 'scenePadding', 'sceneBackColor', 'blockPadding', 'blockWeight', 'blockOpacity', 'blockBlend'];

  const props = (wrapper, config) => {
    prps.forEach(p => {
      if (config[p]) {
        const prp = config[p];
        wrapper.style.setProperty('--' + p, prp);
      }
    });
  };

  const addProp = prpType => {
    if (Array.isArray(prpType)) {
      prps = prps.concat(prpType);
    } else {
      prps.push(prpType);
    }
  };

  var globprop = ['transition', 'colors', 'fonts', 'layout', 'colorVar', 'blockVar', 'sceneVar'];

  const globs = (wrapper, config) => {
    globprop.forEach(p => {
      if (config[p]) {
        const prp = config[p];
        wrapper.classList.add(`${p}__${prp}`);
      }
    });
  };

  const addGlob = clsType => {
    if (Array.isArray(clsType)) {
      globprop = globprop.concat(clsType);
    } else {
      globprop.push(clsType);
    }
  };

  const div = str => new DOMParser().parseFromString(str, 'text/html').body.childNodes[0];

  const fit = (el, config, par) => {
    const bbox = getComputedStyle(el);
    const cw = +bbox.width.split('px')[0];
    const ch = +bbox.height.split('px')[0];
    let aspect = config.aspect;

    if (config.adapt) {
      const currAspect = cw / ch;
      aspect = currAspect;
    }

    par.style.setProperty('--presenta-h', parseInt(960 / aspect) + 'px');
    const w = 960;
    const h = 960 / aspect;
    const scaleW = w * 100 / cw;
    const scaleH = h * 100 / ch;
    const scale = Math.max(scaleW, scaleH);
    par.style.setProperty('--presenta-fz', 1 / (100 / scale));
  };

  const event = (name, detail) => {
    const prop = {
      bubbles: true,
      detail
    };
    return new CustomEvent(name, prop);
  };

  var utils = {
    select,
    props,
    addProp,
    globs,
    addGlob,
    div,
    fit,
    event
  };

  var css_248z$p = ".container_mainwrapper__zelcO{outline:none}.container_container__3kBNh,.container_mainwrapper__zelcO{width:100%;height:100%;position:relative;overflow:hidden}.container_container__3kBNh>div{position:absolute;top:0;left:0;width:100%}";
  var css = {"mainwrapper":"container_mainwrapper__zelcO","container":"container_container__3kBNh"};
  styleInject(css_248z$p);

  var css_248z$q = ".scene_sceneContainer__IgSpB{width:100%;height:100%;display:flex;align-items:center;justify-content:center;position:relative}.scene_scene__3uvTl{--presenta-sw:calc(var(--presenta-w)/var(--presenta-p)/var(--presenta-fz));--presenta-sh:calc(var(--presenta-h)/var(--presenta-p)/var(--presenta-fz));--presenta-scal:calc(var(--presenta-pw)/var(--presenta-p)/var(--presenta-pw)/var(--presenta-fz));width:var(--presenta-sw);height:var(--presenta-sh);font-family:serif;user-select:none}.scene_wrapper__3yr1k{width:var(--presenta-w);height:var(--presenta-h);transform:scale(1);transform:scale(var(--presenta-scal));transform-origin:top left;overflow:hidden;padding:var(--scenePadding);background-color:var(--sceneBackColor)}.scene_content__1rJf0{width:100%;height:100%;display:flex;flex-direction:column;overflow:hidden}.scene_fcontainer__1E_0g{top:0;left:0;width:100%;height:100%;position:absolute;pointer-events:none}.scene_viewport__3uNLS{width:100%;height:100%;position:relative;flex:1;overflow:hidden;display:flex;flex-direction:row}.scene_viewport__3uNLS>div{height:100%}";
  var css$1 = {"sceneContainer":"scene_sceneContainer__IgSpB","scene":"scene_scene__3uvTl","wrapper":"scene_wrapper__3yr1k","content":"scene_content__1rJf0","fcontainer":"scene_fcontainer__1E_0g","viewport":"scene_viewport__3uNLS"};
  styleInject(css_248z$q);

  var css_248z$r = ".block_block__BWbaZ{background:var(--colorBack);width:100%;height:100%;flex:1;flex:var(--blockWeight);overflow:hidden;position:relative}.block_inner__3LS6s{width:100%;height:100%;padding:var(--blockPadding);opacity:var(--blockOpacity);mix-blend-mode:var(--blockBlend)}.block_bdecoration__3KJh-,.block_inner__3LS6s{top:0;left:0;width:100%;height:100%;position:absolute}.block_fdecoration__12tBw{pointer-events:none}";
  var css$2 = {"block":"block_block__BWbaZ","inner":"block_inner__3LS6s","bdecoration":"block_bdecoration__3KJh-","fdecoration":"block_fdecoration__12tBw"};
  styleInject(css_248z$r);

  var css_248z$s = ".style_debug__1-XHT{display:flex;align-items:center;justify-content:center}.style_debug__1-XHT,.style_debug__1-XHT svg{width:100%;height:100%}";
  var css$3 = {"debug":"style_debug__1-XHT"};
  styleInject(css_248z$s);

  const debug = function (_el, _config) {
    const el = utils.select(_el);
    const child = utils.div(`<div class="${css$3.debug}">
    <svg preserveAspectRatio="none" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="50" height="150" fill="var(--colorFore)"/>
      <rect x="50" width="50" height="150" fill="var(--colorBack)"/>
      <rect x="100" width="50" height="150" fill="var(--colorAccent)"/>
      <rect x="150" width="50" height="150" fill="var(--colorAlt)"/>

      <rect y="182" width="50" height="18" fill="var(--colorAlt)"/>
      <rect x="50" y="182" width="50" height="18" fill="var(--colorAccent)"/>
      <rect x="100" y="182" width="50" height="18" fill="var(--colorBack)"/>
      <rect x="150" y="182" width="50" height="18" fill="var(--colorFore)"/>

      <rect y="150" width="200" height="32" fill="var(--colorBack)"/>
      <text fill="var(--colorFore)" xml:space="preserve" style="white-space: pre" font-family="var(--fontHeading)" font-size="12" letter-spacing="0em"><tspan x="3" y="170.102">fontHeading</tspan></text>
      <text fill="var(--colorFore)" xml:space="preserve" style="white-space: pre" font-family="var(--fontText)" font-size="12" letter-spacing="0em"><tspan x="102" y="170.102">fontText</tspan></text>
    </svg>
  </div>`);

    this.beforeDestroy = () => {};

    this.stepForward = step => {};

    el.appendChild(child);
  };

  var css_248z$t = ".textVar__a{--textPadding:0rem;--textAlign:center;--textListAlign:center;--textFlexAlign:center;--textFlexJustify:center;--textSize:2.5rem}.textVar__b{--textAlign:left;--textListAlign:left;--textFlexJustify:flex-start;--textSize:1rem}.textVar__b,.textVar__c{--textPadding:2rem;--textFlexAlign:flex-start}.textVar__c{--textAlign:right;--textListAlign:right;--textFlexJustify:flex-end;--textSize:2rem}.textVar__d{--textAlign:left;--textListAlign:left;--textFlexJustify:flex-start;--textSize:1.5rem}.textVar__d,.textVar__e{--textPadding:2rem;--textFlexAlign:flex-end}.textVar__e{--textAlign:center;--textListAlign:center;--textFlexJustify:center;--textSize:0.8rem}.textStyle__a{--textboxpadding:0;--textboxbackcolor:var(--colorFore);--textboxradius:0;--textboxborder:0;--textboxshadow:0 0 0 var(--colorAccent);--textboxcolor:var(--colorBack)}";
  styleInject(css_248z$t);

  var css_248z$u = ":root{--textPadding:0;--textAlign:center;--textListAlign:left;--textFlexAlign:center;--textFlexJustify:center;--textSize:1rem}.style_text__3T1cl{color:var(--colorFore)}.style_inner__11UJC,.style_text__3T1cl{width:100%;height:100%;position:relative}.style_pretext__cLjqD{display:flex;width:100%;height:100%;align-items:var(--textFlexAlign);justify-content:var(--textFlexJustify)}.style_textbox__1Vb-V{padding:var(--textboxpadding);text-align:var(--textAlign);font-size:var(--textSize);color:var(--textboxcolor);--backmark:var(--colorAccent);--foremark:var(--colorBack);--textaccentcolor:var(--colorAccent);font-family:var(--fontText)}.style_itext__jz90o{border:var(--textboxborder) solid var(--colorAccent);padding:var(--textPadding);border-radius:var(--textboxradius);box-shadow:var(--textboxshadow);background-color:var(--textboxbackcolor)}.style_itext__jz90o img{object-fit:contain;height:4em;vertical-align:middle}.style_itext__jz90o mark{background-color:var(--backmark);color:var(--foremark);padding:0 .5rem}.style_itext__jz90o high{color:var(--textaccentcolor)}.style_itext__jz90o bord{border:8px solid var(--backmark);padding:0 .5rem}.style_itext__jz90o a{color:var(--textaccentcolor)}.style_itext__jz90o blockquote{font-size:2em;font-weight:400;font-style:italic}.style_itext__jz90o blockquote,.style_itext__jz90o h1,.style_itext__jz90o h2,.style_itext__jz90o h3,.style_itext__jz90o h4,.style_itext__jz90o h5,.style_itext__jz90o h6,.style_itext__jz90o p,.style_itext__jz90o ul{margin:0;line-height:inherit;border:inherit}.style_itext__jz90o h1 b,.style_itext__jz90o h1 strong,.style_itext__jz90o h2 b,.style_itext__jz90o h2 strong,.style_itext__jz90o h3 b,.style_itext__jz90o h3 strong,.style_itext__jz90o h4 b,.style_itext__jz90o h4 strong,.style_itext__jz90o h5 b,.style_itext__jz90o h5 strong,.style_itext__jz90o h6 b,.style_itext__jz90o h6 strong{color:var(--textaccentcolor)}.style_itext__jz90o ol,.style_itext__jz90o ul{font-size:1.5em;line-height:1.1em;text-align:var(--textListAlign);margin:0;list-style-type:none;counter-reset:li;padding:.5rem 0}.style_itext__jz90o li{list-style-position:inside;margin-bottom:2px;padding:.25em .25em .25em .8em}.style_itext__jz90o ul li:before{content:\"\\2013\";display:inline-block;width:.8em;margin-left:-.8em}.style_itext__jz90o ol li:before{counter-increment:li;content:\".\" counter(li);display:inline-block;width:1.1em;margin-left:-1.3em;margin-right:.2em;text-align:right;direction:rtl}.style_itext__jz90o li p{display:inline}.style_itext__jz90o code,.style_itext__jz90o pre{text-align:left}.style_itext__jz90o h1,.style_itext__jz90o h2,.style_itext__jz90o h3,.style_itext__jz90o h4,.style_itext__jz90o h5,.style_itext__jz90o h6{font-family:var(--fontHeading);padding:.5rem 0}.style_itext__jz90o h1{font-size:2em}.style_itext__jz90o h2{font-size:1.5em}.style_itext__jz90o h3{font-size:1.17em}.style_itext__jz90o h4{font-size:1em}.style_itext__jz90o h5{font-size:.83em}.style_itext__jz90o h6{font-size:.67em}.style_itext__jz90o p{padding:.5rem 0}.style_itext__jz90o hr{border:1px solid var(--colorFore);margin:.5rem 0}.style_itext__jz90o h1:first-child,.style_itext__jz90o h1:last-child,.style_itext__jz90o h2:first-child,.style_itext__jz90o h2:last-child,.style_itext__jz90o h3:first-child,.style_itext__jz90o h3:last-child{padding:0}.style_itext__jz90o table{width:100%}.style_itext__jz90o tr{padding:0}.style_itext__jz90o td,.style_itext__jz90o th{padding:.5rem;border-bottom:1px solid var(--colorFore)}";
  var css$4 = {"text":"style_text__3T1cl","inner":"style_inner__11UJC","pretext":"style_pretext__cLjqD","textbox":"style_textbox__1Vb-V","itext":"style_itext__jz90o"};
  styleInject(css_248z$u);

  utils.addGlob(['textVar', 'textStyle']);
  utils.addProp(['textPadding', 'textAlign']);

  const text = function (el, config) {
    const html = config.text || '';
    let defsize = 1;
    const varSize = {
      a: 2.5,
      b: 1,
      c: 2,
      d: 1.5,
      e: 0.8
    };
    if (config.textVar) defsize = varSize[config.textVar];
    let fsize = config.scale || defsize;
    const child = utils.div(`<div class="c ${css$4.text}">
    <div class="${css$4.inner}">
      <div class="pretext ${css$4.pretext}">
        <div class="${css$4.textbox}">
          <div class="textContent ${css$4.itext} ${css$4.fadein}">
            ${html}
          </div>
        </div>
      </div>
    </div>
  </div>`);
    el.appendChild(child);

    this.beforeDestroy = () => {};

    this.stepForward = () => {}; // if there are images, let's exploit the alt attribute if contains a number
    // as a scale multiplier


    let images = child.querySelectorAll('img');

    if (images) {
      images = [...images].forEach(img => {
        const a = img.getAttribute('alt');

        if (a) {
          const val = +a;
          if (val > 0) img.style.height = 4 * val + 'em';
        }
      });
    } // this is the iterative scale routine


    const compute = () => {
      child.style.setProperty('--textSize', `${fsize}rem`);
      const mel = child.querySelector('.' + css$4.inner);
      const mbox = mel.getBoundingClientRect();
      const el = child.querySelector('.' + css$4.textbox);
      const bbox = el.getBoundingClientRect();

      if (parseInt(mbox.width) < parseInt(bbox.width) || parseInt(mbox.height) < parseInt(bbox.height)) {
        fsize -= 0.1;
        return compute();
      } else {
        setTimeout(() => {
          child.querySelector('.' + css$4.inner).style.visibility = 'visible';
        });
      }
    };

    child.querySelector('.' + css$4.inner).style.visibility = 'hidden';
    setTimeout(compute);
  };

  var css_248z$v = ":root{--embedPadding:0;--embedBackcolor:none;--embedPosterSize:cover;--embedPosterPosition:center}.style_inner__3WOWs{padding:var(--embedPadding);position:relative}.style_frame__28PUh{background-color:var(--embedBackcolor);position:relative}.style_embed__2Pre2,.style_frame__28PUh,.style_inner__3WOWs{width:100%;height:100%}.style_frame__28PUh>iframe{width:100%;height:100%;border:none}.style_loading__1w7wc{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:var(--colorFore);font-family:var(--fontText);background-color:var(--colorBack)}.style_loading__1w7wc mark{background-color:var(--colorAccent);color:var(--colorBack)}.style_blockmouse__3bXSl,.style_poster__1TOx3{position:absolute;top:0;left:0;width:100%;height:100%}.style_poster__1TOx3{background-color:var(--colorBack)}.style_poster__1TOx3 img{width:100%;height:100%;object-fit:var(--embedPosterSize);object-position:var(--embedPosterPosition)}";
  var css$5 = {"inner":"style_inner__3WOWs","frame":"style_frame__28PUh","embed":"style_embed__2Pre2","loading":"style_loading__1w7wc","blockmouse":"style_blockmouse__3bXSl","poster":"style_poster__1TOx3"};
  styleInject(css_248z$v);

  utils.addProp(['embedPadding', 'embedBackcolor', 'embedPosterSize', 'embedPosterPosition']);

  const iframePrimaryDomain = str => {
    if (!str) return '';
    const reg = new RegExp('src="(.*)', 'gim');
    const url = reg.exec(str);
    const dom = url[1].match(/http(s?):\/\/([\w]+\.){1}([\w]+\.?)+/gim);
    return dom.length > 0 ? dom[0] : null;
  };

  const embed = function (el, config, rootElement, projectConfig) {
    const previewMode = projectConfig.mode === 'preview';
    const presentMode = projectConfig.mode === 'present';
    let iframe = null;

    if (config.url) {
      iframe = `<iframe src="${config.url}"></iframe>`;
    }

    if (config.code) {
      iframe = config.code;
    }

    const name = iframePrimaryDomain(iframe);
    const coverFrame = `<div class="cover ${css$5.loading}"><h1>Embed from <mark>${name}</mark></h1></div>`;
    const blockPointer = config.blockPointer ? `<div class='${css$5.blockmouse}' />` : '';
    const posterFrame = config.poster ? `<div class="${css$5.poster}"><img src="${config.poster}" /></div>` : '';
    const child = utils.div(`<div class="c ${css$5.embed}">
    <div class="${css$5.inner}">
        <div class="${css$5.frame}">${iframe}</div>
        ${coverFrame}
        ${posterFrame}
        ${blockPointer}
    </div>
  </div>`);
    el.appendChild(child);

    this.beforeDestroy = () => {};

    if (iframe && presentMode) {
      const frame = child.querySelector('iframe');
      frame.addEventListener('load', () => {
        child.querySelector('.' + css$5.loading).style.display = 'none';
        if (posterFrame) child.querySelector('.' + css$5.poster).style.display = 'none';
      });
    }
  };

  var css_248z$w = ":root{--imagePadding:0;--imageBorder:none;--imageShadow:none;--imageSize:cover;--imagePosition:center}.style_image__1fZIQ,.style_inner__3tyMU{width:100%;height:100%}.style_inner__3tyMU{display:flex}.style_preimg__2ypvx{overflow:hidden;flex:1;padding:var(--imagePadding)}.style_preimg__2ypvx img{width:100%;height:100%;border:var(--imageBorder);box-shadow:var(--imageShadow);object-fit:var(--imageSize);object-position:var(--imagePosition)}";
  var css$6 = {"image":"style_image__1fZIQ","inner":"style_inner__3tyMU","preimg":"style_preimg__2ypvx"};
  styleInject(css_248z$w);

  utils.addProp(['imagePadding', 'imageBorder', 'imageShadow', 'imageSize', 'imagePosition']);

  const image = function (el, config) {
    const url = config.url;
    const imageschunk = `<div class="presentablock__image ${css$6.preimg}">
        <img src="${url}" />
      </div>`;
    const child = utils.div(`<div class="${css$6.image}">
    <div class="imagesContainer ${css$6.inner}">
        ${imageschunk}
    </div>
  </div>`);

    this.beforeDestroy = () => {};

    this.stepForward = step => {};

    el.appendChild(child);
  };

  var css_248z$x = ":root{--videoSize:cover;--videoPosition:center}.style_video__1qbdJ{width:100%;height:100%;display:flex;align-items:center;justify-content:center}.style_video__1qbdJ video{width:100%;height:100%;object-fit:var(--videoSize);object-position:var(--videoPosition)}";
  var css$7 = {"video":"style_video__1qbdJ"};
  styleInject(css_248z$x);

  utils.addProp(['videoSize', 'videoPosition']);

  const video = function (el, config, rootElement, projectConfig) {
    const previewMode = projectConfig.mode === 'preview';
    const presentMode = projectConfig.mode === 'present';
    const poster = config.poster ? `poster=${config.poster}` : '';
    const loop = config.loop ? 'loop' : '';
    const autoplay = config.autoplay && presentMode ? 'autoplay' : '';
    const src = config.url ? `src=${config.url}` : '';
    const child = utils.div(`<div class="${css$7.video}">
    <video ${poster} ${src} ${loop} ${autoplay}></video>
  </div>`);

    this.beforeDestroy = () => {
      rootElement.removeEventListener('keyup', setKeyListener);
    };

    this.stepForward = step => {};

    el.appendChild(child);
    let video;
    let isPlaying = config.autoplay;

    const toggleVideo = () => {
      if (!video) video = child.querySelector('video');

      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }

      isPlaying = !isPlaying;
    };

    const setKeyListener = e => {
      if (e.key === ' ') {
        toggleVideo();
        e.stopPropagation();
        e.preventDefault();
      }
    };

    if (presentMode) rootElement.addEventListener('keyup', setKeyListener);
  };

  var css_248z$y = ".solidVar__a{--solidColor:#000}.solidVar__a,.solidVar__b{--solidOpacity:.7;--solidBlend:none}.solidVar__b{--solidColor:#fff}.solidVar__c{--solidColor:var(--colorBack);--solidOpacity:1;--solidBlend:multiply}";
  styleInject(css_248z$y);

  var css_248z$z = ":root{--solidOpacity:1;--solidBlend:none;--solidColor:var(--colorAccent)}.style_solid__wiwvr{width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--solidColor);opacity:var(--solidOpacity);mix-blend-mode:var(--solidBlend)}";
  var css$8 = {"solid":"style_solid__wiwvr"};
  styleInject(css_248z$z);

  /*
  {
    type: 'solid',
    solidVar: 'a',
    solidColor:'red',
    solidOpacity: 1,
    solidBlend: 'multiply'
  }
  */

  utils.addGlob('solidVar');
  utils.addProp(['solidColor', 'solidOpacity', 'solidColor']);

  const solid = function (el, config) {
    const child = utils.div(`<div class="${css$8.solid}"></div>`);

    this.beforeDestroy = () => {};

    this.stepForward = step => {};

    el.appendChild(child);
  };

  const blocks = {
    debug,
    text,
    embed,
    image,
    video,
    solid
  };

  const add = (type, module, override) => {
    if (blocks[type]) {
      return console.warn(`block type ${type} already defined`);
    }

    if (override && blocks[type]) {
      console.warn(`block type ${type} was overriden`);
    }

    blocks[type] = module;
  };

  const Block = function (blocksElement, blockConfig, rootElement, projectConfig) {
    this.type = blockConfig.type;
    this.index = blockConfig.index;
    var blockInstance = null;

    if (!this.type) {
      return console.warn('No `type` field found in block ' + this.index);
    }

    let step = 0;
    const child = utils.div(`<div class="block ${css$2.block} b b${this.index}">
    <div class="backDecoration ${css$2.bdecoration}"></div>
    <div class="blockContainer ${css$2.inner}"></div>
    <div class="frontDecoration ${css$2.fdecoration}"></div>
  </div>`);
    utils.globs(child, blockConfig);
    utils.props(child, blockConfig);
    this.el = child;
    const blockContainer = child.querySelector('.blockContainer');

    if (!blocks[this.type]) {
      console.log(`block "${this.type}" not found`);
    } else {
      blockInstance = new blocks[this.type](blockContainer, blockConfig, rootElement, projectConfig);
    }

    this.beforeDestroy = () => {
      if (blockInstance && blockInstance.beforeDestroy) blockInstance.beforeDestroy();
    };

    this.stepForward = () => {
      step++;

      if (blockInstance.stepForward) {
        blockInstance.stepForward(step);
      } else {
        console.warn(`The block "${this.type}" doesn't implement the method "stepForward" but this scene tried to use it`);
      }
    };

    this.destroy = () => {
      if (blockInstance && blockInstance.destroy) blockInstance.destroy();
    };

    blocksElement.appendChild(child);
  };

  const modules = {};

  const add$1 = (type, module, override) => {
    if (!override && modules[type]) {
      return console.warn(`module type ${type} already defined`);
    }

    if (override && modules[type]) {
      console.warn(`module type ${type} was overriden`);
    }

    modules[type] = module;
  };

  const Transition = wrapper => {
    const functor = function (wrapper) {
      this.clear = prefix => {
        wrapper.classList.remove(prefix);
        return this;
      };

      this.start = prefix => {
        wrapper.classList.add(prefix, 'p-scene-enter-transition', 'p-scene-enter-start');
        setTimeout(() => {
          wrapper.classList.add('p-scene-enter-end');
          wrapper.classList.remove('p-scene-enter-start');
        });
        return this;
      };

      this.swap = () => {
        wrapper.classList.add('p-scene-enter-ended');
        return this;
      };

      this.end = prefix => {
        wrapper.classList.remove('p-scene-enter-transition', 'p-scene-enter-end');
        wrapper.classList.add(prefix, 'p-scene-leave-transition', 'p-scene-leave-start');
        setTimeout(() => {
          wrapper.classList.add('p-scene-leave-end');
          wrapper.classList.remove('p-scene-leave-start');
        });
        return this;
      };
    };

    return new functor(wrapper);
  };

  const Scene = function (sceneConfig, projectConfig, rootElement) {
    const blocks = [];
    /*
      Let's notify the user about missing fields
    */

    if (!sceneConfig.blocks) {
      return console.warn('No `blocks` array found in scene ' + sceneConfig.index);
    }

    if (sceneConfig.blocks.length === 0) {
      console.warn('`blocks` is empty in scene ' + sceneConfig.index);
    }
    /*
      Set the module config from project settings
    */


    if (projectConfig.modules) {
      for (const k in projectConfig.modules) {
        if (!sceneConfig.hasOwnProperty('modules')) sceneConfig.modules = {};
        if (!sceneConfig.modules.hasOwnProperty(k)) sceneConfig.modules[k] = projectConfig.modules[k];
      }
    }
    /*
      Check if transition has been defined at project level or scene level
    */


    const hasTransition = projectConfig ? projectConfig.transition || sceneConfig.transition : sceneConfig.transition;
    /*
      Create the wrapper template
    */

    let currentStep = 0;
    const steps = sceneConfig.steps || [];
    const child = utils.div(`<div 
      class="s ${css$1.sceneContainer}">
      <div class="sceneObject ${css$1.scene}">
        <div class="${css$1.wrapper}">
            <div class="${css$1.content}">
                <div class="blocksContainer ${css$1.viewport}"></div>
                <div class="frontContainer ${css$1.fcontainer}"></div>
            </div>
        </div>
      </div>
  </div>`);
    utils.globs(child, sceneConfig);
    utils.props(child, sceneConfig);
    this.el = child;
    /*
      Init modules if any
    */

    if (sceneConfig.modules) {
      for (const k in sceneConfig.modules) {
        const modConfig = sceneConfig.modules[k];
        const Mod = modules[k];
        if (!Mod) console.log(`Module "${k}" not found. Maybe you forgot to include it.`);

        if (modConfig && Mod) {
          const mod = new Mod(child.querySelector(`.${css$1.content}`), modConfig, sceneConfig, projectConfig);
        }
      }
    }
    /*
      Init blocks if any
    */


    const cblocks = sceneConfig.blocks;
    cblocks.forEach((blockConfig, i) => {
      blockConfig.index = i;
      const blocksContainer = child.querySelector('.blocksContainer');
      const block = new Block(blocksContainer, blockConfig, rootElement, projectConfig);
      blocks.push(block);
    });
    /*
      Run the entering transition
    */

    if (hasTransition) {
      const wrap = this.el.querySelector('.sceneObject');
      const dir = sceneConfig._presentatransdir === 'backward' ? 'to-left' : 'to-right';
      Transition(wrap).start(dir);
      setTimeout(() => {
        Transition(wrap).swap();
      }, projectConfig._transitionDestroyDelay);
    }
    /*
      Public method called by the container to init the destroy phase
    */


    this.destroyAfter = _t => {
      /*
        Run the exiting transition
      */
      if (hasTransition) {
        const wrap = this.el.querySelector('.sceneObject');
        const odir = sceneConfig._presentatransdir === 'backward' ? 'to-right' : 'to-left';
        const ndir = sceneConfig._presentatransdir === 'backward' ? 'to-left' : 'to-right';
        Transition(wrap).clear(odir).end(ndir);
      }

      const t = _t || 0;
      blocks.forEach(block => block.beforeDestroy());
      setTimeout(() => {
        this.destroy();
        child.parentNode.removeChild(child);
      }, t);
    };
    /*
      Public method called by the container move forward the step progress
    */


    this.stepForward = () => {
      if (currentStep < steps.length) {
        const idx = steps[currentStep];
        blocks[idx].stepForward();
        currentStep++;
      }
    };
    /*
      Immediate destroy for garbage collection
    */


    this.destroy = () => {
      blocks.forEach(block => block.destroy());
    };

    this.sceneConfig = sceneConfig;
  };

  const autoplay = function (rootElement, router, ctrlConfig, projectConfig) {
    let timer = null;
    const defdelay = ctrlConfig.delay || 4000;

    const runTime = delay => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        router.next();
      }, delay);
    };

    router.on('indexChanged', evt => {
      const cScene = projectConfig.scenes[evt.currentIndex];
      const delay = cScene.autoplayDuration || defdelay;
      runTime(delay);
    });
  };

  const keyboard = function (rootElement, router, config) {
    const setKeyListener = e => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        router.next();
        e.stopPropagation();
        e.preventDefault();
      }

      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        router.prev();
        e.stopPropagation();
        e.preventDefault();
      }
    };

    rootElement.parentNode.addEventListener('keyup', setKeyListener);
  };

  var css_248z$A = ":root{--arrowsOpacity:1;--arrowsVerticalPosition:center;--arrowsHorizontalPosition:space-between;--arrowsPadding:10px}.style_arrows__2J_-T{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;transition:opacity .35s;justify-content:var(--arrowsHorizontalPosition);--arrowsColor:var(--colorFore)}.style_left__199CL,.style_right__2Bn_p{height:100%;display:flex;align-items:var(--arrowsVerticalPosition);justify-content:center;cursor:pointer;padding:var(--arrowsPadding);pointer-events:all}.style_ui__1jWCU{width:20px;height:20px;transition:background-color .3s ease-in-out;width:0;height:0;border-top:10px solid transparent;border-bottom:10px solid transparent;opacity:var(--arrowsOpacity)}.style_left__199CL .style_ui__1jWCU{border-right:10px solid var(--arrowsColor)}.style_right__2Bn_p .style_ui__1jWCU{border-left:10px solid var(--arrowsColor)}.style_arrows__2J_-T.style_hide__4RZI1{opacity:0}";
  var css$9 = {"arrows":"style_arrows__2J_-T","left":"style_left__199CL","right":"style_right__2Bn_p","ui":"style_ui__1jWCU","hide":"style_hide__4RZI1"};
  styleInject(css_248z$A);

  const arrows = function (rootElement, router, config) {
    let timer = null;
    const child = utils.div(`<div class="${css$9.arrows}"></div>`);
    const left = utils.div(`<div class="${css$9.left}"><div class="${css$9.ui}"></div></div>`);
    child.appendChild(left);
    const right = utils.div(`<div class="${css$9.right}"><div class="${css$9.ui}"></div></div>`);
    child.appendChild(right);
    rootElement.appendChild(child);
    left.addEventListener('click', e => {
      router.prev();
      scheduleForHide();
    });
    right.addEventListener('click', e => {
      router.next();
      scheduleForHide();
    });
    child.addEventListener('mousemove', e => {
      scheduleForHide();
    });
    router.on('indexChanged', e => {
      left.style.visibility = 'visible';
      right.style.visibility = 'visible';
      if (e.isFirst) left.style.visibility = 'hidden';
      if (e.isLast) right.style.visibility = 'hidden';
    });

    const scheduleForHide = () => {
      clearTimeout(timer);
      child.classList.remove(css$9.hide);
      timer = setTimeout(() => {
        child.classList.add(css$9.hide);
      }, 1500);
    };

    scheduleForHide();
  };

  var css_248z$B = ".style_black__3Nszx{width:100%;height:100%;position:absolute;top:0;left:0;background-color:#000;opacity:0;pointer-events:none;transition:opacity .5s cubic-bezier(.8,.2,.2,.8);z-index:999999}";
  var css$a = {"black":"style_black__3Nszx"};
  styleInject(css_248z$B);

  const black = function (rootElement, router, ctrlConfig, projectConfig) {
    let visible = false;
    const child = utils.div(`<div class="${css$a.black}"></div>`);
    rootElement.appendChild(child);
    const key = ctrlConfig.key || 'b';

    const setKeyListener = e => {
      if (e.key === key) {
        visible = !visible;
        child.style.opacity = visible ? 1 : 0;
        e.stopPropagation();
        e.preventDefault();
      }
    };

    rootElement.parentNode.addEventListener('keyup', setKeyListener);
  };

  const isAlreadyFullscreen = () => {
    return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  };

  const makeFullscreen = el => {
    if (el.requestFullscreen) {
      el.requestFullscreen();
    } else if (el.mozRequestFullScreen) {
      el.mozRequestFullScreen();
    } else if (el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    } else if (el.msRequestFullscreen) {
      el.msRequestFullscreen();
    }
  };

  const fullscreen = function (rootElement, router, ctrlConfig, projectConfig) {
    const key = ctrlConfig.key || 'f';
    const rootEl = rootElement.parentNode;
    const root = rootEl.parentNode;

    const toggle = () => {
      if (isAlreadyFullscreen()) {
        exitFullscreen();
      } else {
        makeFullscreen(root);
      }
    };

    const setKeyListener = e => {
      if (e.key === key) {
        toggle();
        e.stopPropagation();
        e.preventDefault();
      }
    };

    this.toggle = toggle;
    rootEl.addEventListener('keyup', setKeyListener);
  };

  const focus = function (rootElement, router, ctrlConfig, projectConfig) {
    const root = rootElement.parentNode;

    const clb = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) root.focus({
          preventScroll: true
        });
      });
    };

    const observer = new IntersectionObserver(clb);
    observer.observe(root);
  };

  const addLink = (url, type) => {
    const preloadLink = document.createElement('link');
    preloadLink.href = url;
    preloadLink.rel = 'preload';
    preloadLink.as = type;
    document.head.appendChild(preloadLink);
  };
  /*
  How to support images in text element?
  */


  const preload = function (rootElement, router, ctrlConfig, projectConfig) {
    projectConfig.scenes.forEach(s => {
      s.blocks.forEach(b => {
        if (b.type === 'image' || b.type === 'video') {
          addLink(b.url, b.type);
        }
      });
    });
  };

  var css_248z$C = ":root{--progressbarHeight:5px;--progressbarBottom:initial}.style_progressbar__37EFM{--progressbarColor:var(--colorFore);width:100%;height:100%;pointer-events:none}.style_bar__3nLkk{width:0;height:var(--progressbarHeight);position:absolute;bottom:var(--progressbarBottom);left:0;background-color:var(--progressbarColor);transition:width .5s cubic-bezier(.8,.2,.2,.8)}";
  var css$b = {"progressbar":"style_progressbar__37EFM","bar":"style_bar__3nLkk"};
  styleInject(css_248z$C);

  utils.addProp(['progressbarHeight', 'progressbarBottom']);

  const progressbar = function (rootElement, router, ctrlConfig, projectConfig) {
    const child = utils.div(`<div class="${css$b.progressbar}"></div>`);
    const bar = utils.div(`<div class="${css$b.bar}"></div>`);
    child.appendChild(bar);
    rootElement.appendChild(child);
    const totalScenes = projectConfig.scenes.length;

    const change = e => {
      const index = e.currentIndex + 1;
      const perc = index / totalScenes * 100;
      bar.style.width = perc + '%';
    };

    router.on('indexChanged', e => {
      change(e);
    });
  };

  var css_248z$D = ":root{--pagenumTextAlign:right;--pagenumPadding:5px;--pagenumFontSize:10px;--pagenumBackColor:none;--pagenumFont:var(--fontText)}.style_pagenum__1OmQh{--pagenumColor:var(--colorFore);width:100%;height:100%;position:absolute;top:0;left:0;display:flex;align-items:flex-end;pointer-events:none}.style_content__3u2tr{width:100%;text-align:var(--pagenumTextAlign);padding:var(--pagenumPadding);font-size:var(--pagenumFontSize);color:var(--pagenumColor);font-family:var(--pagenumFont);background-color:var(--pagenumBackColor);transition:all .3s ease-in-out}";
  var css$c = {"pagenum":"style_pagenum__1OmQh","content":"style_content__3u2tr"};
  styleInject(css_248z$D);

  const pagenum = function (rootElement, router, ctrlConfig, projectConfig) {
    const child = utils.div(`<div class="${css$c.pagenum}"></div>`);
    const content = utils.div(`<div class="${css$c.content}"></div>`);
    child.appendChild(content);
    rootElement.appendChild(child);
    const template = ctrlConfig.template || '%s / %S';
    const totalScenes = projectConfig.scenes.length;

    const change = e => {
      const index = e.currentIndex + 1;
      const str = template.replace(/%s/mg, index).replace(/%S/mg, totalScenes);
      content.innerHTML = str;
    };

    router.on('indexChanged', e => {
      change(e);
    });
  };

  const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const shuffle = function (rootElement, router, ctrlConfig, projectConfig) {
    shuffleArray(projectConfig.scenes);
  };

  const loop = function (rootElement, router, ctrlConfig, projectConfig) {
    router.on('end', evt => {
      router.goto(0);
      router.notify('nextIndex');
    });
  };

  const current = function (rootElement, router, ctrlConfig, projectConfig) {
    const idx = ctrlConfig && ctrlConfig > 0 && ctrlConfig < projectConfig.scenes.length ? ctrlConfig - 1 : 0;
    router.setCurrentIndex(idx);
  };

  const hidecursor = function (rootElement, router, ctrlConfig, projectConfig) {
    const root = rootElement.parentNode;
    root.style.cursor = 'none';
  };

  const controllers = {
    autoplay,
    keyboard,
    arrows,
    black,
    fullscreen,
    focus,
    preload,
    progressbar,
    pagenum,
    shuffle,
    loop,
    current,
    hidecursor
  };

  const add$2 = (type, module, override) => {
    if (controllers[type]) {
      return console.warn(`controller io ${type} already defined`);
    }

    if (override && controllers[type]) {
      console.warn(`controller type ${type} was overriden`);
    }

    controllers[type] = module;
  };

  var css_248z$E = ".router_router__2r4NQ{width:100%;height:100%;position:absolute;top:0;left:0;pointer-events:none}";
  var css$d = {"router":"router_router__2r4NQ"};
  styleInject(css_248z$E);

  const Router = function (rootElement, projectConfig) {
    const child = utils.div(`<div class="controller ${css$d.router}"></div>`);
    rootElement.appendChild(child);
    const scenes = projectConfig.scenes;
    const numScenes = scenes.length - 1;
    const listeners = {};
    const registeredIO = {};
    let currentIndex = 0;
    let currentStep = 0;
    let numSteps = 0;

    const setNumSteps = () => {
      numSteps = scenes[currentIndex] && scenes[currentIndex].steps ? scenes[currentIndex].steps.length : 0;
    };

    setNumSteps();

    const updateRouterWrapper = () => {
      const sceneConfig = scenes[currentIndex];
      child.classList.remove(...child.classList);
      child.classList.add('controller', css$d.router);
      child.style = null;
      utils.globs(child, sceneConfig);
      utils.props(child, sceneConfig);
    };

    this.next = () => {
      if (currentStep === numSteps) {
        this.nextIndex();
      } else {
        currentStep++;
        this.notify('stepChanged');
      }
    };

    this.prev = () => {
      this.prevIndex();
    };

    this.nextIndex = () => {
      if (currentIndex < numScenes) {
        currentIndex++;
        currentStep = 0;
        setNumSteps();
        this.notify('nextIndex');
        this.notify('indexChanged');
      } else {
        currentIndex = numScenes;
        currentStep = 0;
        this.notify('end');
      }
    };

    this.prevIndex = () => {
      if (currentIndex > 0) {
        currentIndex--;
        currentStep = 0;
        setNumSteps();
        this.notify('prevIndex');
        this.notify('indexChanged');
      } else {
        currentIndex = 0;
        currentStep = 0;
        this.notify('begin');
      }
    };

    this.goto = v => {
      currentIndex = v < numScenes ? v : numScenes;
      currentStep = 0;
      this.notify('nextIndex');
      this.notify('indexChanged');
    };

    this.notify = evt => {
      if (evt === 'indexChanged') updateRouterWrapper();

      if (listeners[evt]) {
        listeners[evt].forEach(clb => {
          clb({
            currentIndex,
            currentStep,
            totalScenes: this.totalScenes(),
            isFirst: currentIndex === 0,
            isLast: currentIndex === numScenes
          });
        });
      }
    };

    this.on = (evt, clb) => {
      if (!listeners[evt]) {
        listeners[evt] = [];
      }

      listeners[evt].push(clb);
    };

    this.off = (evt, clb) => {
      const index = listeners[evt].indexOf(clb);
      if (index >= 0) listeners[evt].splice(index, 1);
    };

    this.totalScenes = () => numScenes + 1;

    this.totalSteps = () => numSteps;

    this.currentIndex = () => currentIndex;

    this.currentStep = () => currentStep;

    this.setCurrentIndex = idx => currentIndex = idx;

    this.setCurrentStep = stp => currentStep = stp;

    this.controllers = registeredIO;

    if (projectConfig.controllers) {
      for (const k in projectConfig.controllers) {
        const modConfig = projectConfig.controllers[k];
        const Mod = controllers[k];
        if (!Mod) console.log(`Controller "${k}" not found. Maybe you forgot to include it.`);

        if (modConfig && Mod) {
          registeredIO[k] = new Mod(child, this, modConfig, projectConfig);
        }
      }
    }

    this.notify('indexChanged');
    setTimeout(() => this.notify('init'));
  };

  const Container = function (rootElement, projectConfig) {
    this.config = projectConfig;
    /*
        Let's check and fix the wrapper size
    */

    const size = getComputedStyle(rootElement);
    let w = +size.width.split('px')[0];
    let h = +size.height.split('px')[0];

    if (w <= 0) {
      w = 360;
      rootElement.style.width = `${w}px`;
    }

    if (h <= 0) {
      h = 200;
      if (projectConfig.aspect) h = w / projectConfig.aspect;
      rootElement.style.height = `${h}px`;
    }
    /*
      Let's notify the user about mandatory fields
    */


    if (!projectConfig.scenes) {
      return console.warn('No `scenes` array found');
    }

    if (projectConfig.scenes.length === 0) {
      console.warn('`scenes` is empty');
    }
    /*
      Init the container
    */


    rootElement.classList.add('presenta');
    const child = utils.div(`<div class="${css.mainwrapper}"></div>`);
    child.setAttribute('tabindex', '0');
    utils.globs(child, projectConfig);
    utils.props(child, projectConfig);
    rootElement.appendChild(child);
    const cont = utils.div(`<div class="a ${css.container}"></div>`);
    child.appendChild(cont);
    const scenes = projectConfig.scenes;
    var currentScene = null;

    const swapScene = (index, dir) => {
      if (currentScene) {
        currentScene.sceneConfig._presentatransdir = dir;
        currentScene.destroyAfter(projectConfig._transitionDestroyDelay);
      }

      if (scenes.length > 0) {
        const sceneConfig = scenes[index];
        sceneConfig._presentatransdir = dir;
        currentScene = new Scene(sceneConfig, projectConfig, rootElement);
        if (currentScene.el) cont.appendChild(currentScene.el);
      }
    };

    const router = new Router(child, projectConfig);
    router.on('nextIndex', evt => {
      swapScene(evt.currentIndex, 'foreward');
    });
    router.on('prevIndex', evt => {
      swapScene(evt.currentIndex, 'backward');
    });
    router.on('stepChanged', evt => {
      currentScene.stepForward();
    });
    router.on('init', evt => {
      swapScene(evt.currentIndex, 'foreward');
    });

    if (window.ResizeObserver) {
      const resizeObserver = new ResizeObserver(entries => {
        utils.fit(child, projectConfig, rootElement);
      });
      resizeObserver.observe(child);
    }

    utils.fit(child, projectConfig, rootElement);

    this.destroy = () => {
      currentScene.destroy();
    };

    this.router = router;
  };

  var defaults = (config => {
    const defaultConfig = {
      aspect: 1.6,
      adapt: true,
      mode: 'present',
      controllers: {
        keyboard: true,
        arrows: true,
        black: true,
        fullscreen: true
      },
      modules: {},
      scheme: null,
      fontkit: null,
      transition: null,
      colorvar: null,
      _transitionDestroyDelay: 1000
    };

    for (const k in defaultConfig) {
      if (!config.hasOwnProperty(k)) {
        config[k] = defaultConfig[k];
      } else {
        if (typeof defaultConfig[k] === 'object') {
          for (const h in defaultConfig[k]) {
            if (config[k] && !config[k].hasOwnProperty(h)) {
              config[k][h] = defaultConfig[k][h];
            }
          }
        }
      }
    }

    return config;
  });

  const Presenta = function (el, config) {
    defaults(config);
    return new Container(utils.select(el), config);
  };

  Presenta.version = version; // Presenta.utils = utils

  Presenta.colors = globals.colors;
  Presenta.fonts = globals.fonts;
  Presenta.transitions = globals.transitions;
  Presenta.layouts = globals.layouts;
  Presenta.colorvars = globals.colorvars;
  Presenta.scenevars = globals.scenevars; // Presenta.Scene = Scene // ??

  Presenta.addBlock = add;
  Presenta.addController = add$2;
  Presenta.addModule = add$1;
  Presenta.addGlob = utils.addGlob;
  Presenta.addProp = utils.addProp;

  Presenta.use = plugin => {
    plugin.install(Presenta);
  };

  return Presenta;

})));
