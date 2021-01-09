// https://lib.presenta.cc v0.1.13 - BSD-3-Clause License - Copyright 2021 Fabio Franchino
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Presenta = factory());
}(this, (function () { 'use strict';

  var version = "0.1.13";

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

  var css_248z = ".presenta *{box-sizing:border-box}.presenta{position:relative;--presenta-pw:960;--presenta-w:960px;--presenta-h:540px;--presenta-vp:960;--presenta-fz:1;--presenta-p:calc(var(--presenta-pw)/var(--presenta-vp))}.presenta h1,.presenta h2,.presenta h3,.presenta h4,.presenta h5,.presenta h6,.presenta p{line-height:inherit;border:inherit}";
  styleInject(css_248z);

  var css_248z$1 = ":root{--colorBack:#fff;--colorFore:#000;--colorAccent:#444;--colorAlt:#ddd}";
  styleInject(css_248z$1);

  var css_248z$2 = ".colors__bn,.colors__bn .colorVar__main,.presenta .colors__bn.colorVar__main{--colorBack:#fff;--colorFore:#000;--colorAccent:#444;--colorAlt:#ddd}.colors__bn .colorVar__sec,.presenta .colors__bn.colorVar__sec{--colorBack:#000;--colorFore:#fff;--colorAccent:#999;--colorAlt:#ccc}.colors__bn .colorVar__alt,.presenta .colors__bn.colorVar__alt{--colorBack:#444;--colorFore:#fff;--colorAccent:#fff;--colorAlt:#ccc}";
  styleInject(css_248z$2);

  var css_248z$3 = ".colors__adele,.colors__adele .colorVar__main,.presenta .colors__adele.colorVar__main{--colorBack:#000;--colorFore:#fff;--colorAccent:#eeff2e;--colorAlt:#de1318}.colors__adele .colorVar__sec,.presenta .colors__adele.colorVar__sec{--colorBack:#eeff2e;--colorFore:#000;--colorAccent:#de1318;--colorAlt:#fff}.colors__adele .colorVar__alt,.presenta .colors__adele.colorVar__alt{--colorBack:#de1318;--colorFore:#eeff2e;--colorAccent:#fff;--colorAlt:#000}";
  styleInject(css_248z$3);

  var css_248z$4 = ".colors__belle,.colors__belle .colorVar__main,.presenta .colors__belle.colorVar__main{--colorBack:#a9dbd5;--colorFore:#000;--colorAccent:#fff;--colorAlt:#38999d}.colors__belle .colorVar__sec,.presenta .colors__belle.colorVar__sec{--colorBack:#000;--colorFore:#a9dbd5;--colorAccent:#fff;--colorAlt:#38999d}.colors__belle .colorVar__alt,.presenta .colors__belle.colorVar__alt{--colorBack:#fff;--colorFore:#38999d;--colorAccent:#a9dbd5;--colorAlt:#000}";
  styleInject(css_248z$4);

  var css_248z$5 = ".colors__cati,.colors__cati .colorVar__main,.presenta .colors__cati.colorVar__main{--colorBack:#e5ff9d;--colorFore:#1c003f;--colorAccent:#69567c;--colorAlt:#fff}.colors__cati .colorVar__sec,.presenta .colors__cati.colorVar__sec{--colorBack:#1c003f;--colorFore:#fff;--colorAccent:#e5ff9d;--colorAlt:#69567c}.colors__cati .colorVar__alt,.presenta .colors__cati.colorVar__alt{--colorBack:#69567c;--colorFore:#e5ff9d;--colorAccent:#fff;--colorAlt:#1c003f}";
  styleInject(css_248z$5);

  var css_248z$6 = ".colors__dania,.colors__dania .colorVar__main,.presenta .colors__dania.colorVar__main{--colorBack:#d0caa9;--colorFore:#30302f;--colorAccent:#ec4a25;--colorAlt:#fff}.colors__dania .colorVar__sec,.presenta .colors__dania.colorVar__sec{--colorBack:#30302f;--colorFore:#d0caa9;--colorAccent:#ec4a25;--colorAlt:#fff}.colors__dania .colorVar__alt,.presenta .colors__dania.colorVar__alt{--colorBack:#ec4a25;--colorFore:#fff;--colorAccent:#d0caa9;--colorAlt:#30302f}";
  styleInject(css_248z$6);

  var css_248z$7 = ".colors__elane,.colors__elane .colorVar__main,.presenta .colors__elane.colorVar__main{--colorBack:#3b7bc3;--colorFore:#f9fb45;--colorAccent:#fff;--colorAlt:#000}.colors__elane .colorVar__sec,.presenta .colors__elane.colorVar__sec{--colorBack:#000;--colorFore:#f9fb45;--colorAccent:#fff;--colorAlt:#3b7bc3}.colors__elane .colorVar__alt,.presenta .colors__elane.colorVar__alt{--colorBack:#f9fb45;--colorFore:#000;--colorAccent:#3b7bc3;--colorAlt:#fff}";
  styleInject(css_248z$7);

  var css_248z$8 = ".colors__flo,.colors__flo .colorVar__main,.presenta .colors__flo.colorVar__main{--colorBack:#ebded1;--colorFore:#0a47d1;--colorAccent:#fb4138;--colorAlt:#fff}.colors__flo .colorVar__sec,.presenta .colors__flo.colorVar__sec{--colorBack:#0a47d1;--colorFore:#ebded1;--colorAccent:#fff;--colorAlt:#fb4138}.colors__flo .colorVar__alt,.presenta .colors__flo.colorVar__alt{--colorBack:#fb4138;--colorFore:#fff;--colorAccent:#ebded1;--colorAlt:#0a47d1}";
  styleInject(css_248z$8);

  var css_248z$9 = ".colors__gina,.colors__gina .colorVar__main,.presenta .colors__gina.colorVar__main{--colorBack:#322067;--colorFore:#feb8ba;--colorAccent:#449eaf;--colorAlt:#fff}.colors__gina .colorVar__sec,.presenta .colors__gina.colorVar__sec{--colorBack:#feb8ba;--colorFore:#322067;--colorAccent:#fff;--colorAlt:#449eaf}.colors__gina .colorVar__alt,.presenta .colors__gina.colorVar__alt{--colorBack:#fff;--colorFore:#322067;--colorAccent:#449eaf;--colorAlt:#feb8ba}";
  styleInject(css_248z$9);

  var css_248z$a = ".colors__hedy,.colors__hedy .colorVar__main,.presenta .colors__hedy.colorVar__main{--colorBack:#f9ffb1;--colorFore:#072020;--colorAccent:#ec4225;--colorAlt:#9eb0bb}.colors__hedy .colorVar__sec,.presenta .colors__hedy.colorVar__sec{--colorBack:#072020;--colorFore:#f9ffb1;--colorAccent:#ec4225;--colorAlt:#9eb0bb}.colors__hedy .colorVar__alt,.presenta .colors__hedy.colorVar__alt{--colorBack:#ec4225;--colorFore:#f9ffb1;--colorAccent:#c5dbe9;--colorAlt:#072020}";
  styleInject(css_248z$a);

  var css_248z$b = ".colors__irma,.colors__irma .colorVar__main,.presenta .colors__irma.colorVar__main{--colorBack:#ffe600;--colorFore:#000;--colorAccent:#ff6400;--colorAlt:#fff}.colors__irma .colorVar__sec,.presenta .colors__irma.colorVar__sec{--colorBack:#000;--colorFore:#ffe600;--colorAccent:#fff;--colorAlt:#ff6400}.colors__irma .colorVar__alt,.presenta .colors__irma.colorVar__alt{--colorBack:#ff6400;--colorFore:#fff;--colorAccent:#ffe600;--colorAlt:#000}";
  styleInject(css_248z$b);

  var css_248z$c = ".colors__red,.colors__red .colorVar__main,.presenta .colors__red.colorVar__main{--colorBack:#fff;--colorFore:#fc0d1b;--colorAccent:#000;--colorAlt:#eee}.colors__red .colorVar__sec,.presenta .colors__red.colorVar__sec{--colorBack:#fc0d1b;--colorFore:#fff;--colorAccent:#000;--colorAlt:#eee}.colors__red .colorVar__alt,.presenta .colors__red.colorVar__alt{--colorBack:#eee;--colorFore:#000;--colorAccent:#fc0d1b;--colorAlt:#fff}";
  styleInject(css_248z$c);

  var css_248z$d = ".colors__blue,.colors__blue .colorVar__main,.presenta .colors__blue.colorVar__main{--colorBack:#fff;--colorFore:#0b24fb;--colorAccent:#000;--colorAlt:#eee}.colors__blue .colorVar__sec,.presenta .colors__blue.colorVar__sec{--colorBack:#0b24fb;--colorFore:#fff;--colorAccent:#b5bcff;--colorAlt:#eee}.colors__blue .colorVar__alt,.presenta .colors__blue.colorVar__alt{--colorBack:#eee;--colorFore:#000;--colorAccent:#0b24fb;--colorAlt:#fff}";
  styleInject(css_248z$d);

  const colors = ['bn', 'blue', 'red', 'adele', 'belle', 'cati', 'dania', 'elane', 'flo', 'gina', 'hedy', 'irma'];
  const colorvars = ['main', 'sec', 'alt'];

  var css_248z$e = ":root{--fontHeading:Georgia,\"Times New Roman\",Times,serif;--fontText:\"Trebuchet MS\",\"Lucida Sans Unicode\",\"Lucida Grande\",\"Lucida Sans\",Arial,sans-serif}";
  styleInject(css_248z$e);

  var css_248z$f = "@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Roboto+Mono:ital,wght@0,400;0,700;1,400&display=swap\");.fonts__cardinal{--fontHeading:\"Roboto Mono\",monospace;--fontText:\"Montserrat\",sans-serif}";
  styleInject(css_248z$f);

  var css_248z$g = "@import url(\"https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Work+Sans&display=swap\");.fonts__corvid{--fontHeading:\"Work Sans\",sans-serif;--fontText:\"Playfair Display\",serif}";
  styleInject(css_248z$g);

  var css_248z$h = "@import url(\"https://fonts.googleapis.com/css2?family=Roboto+Slab&family=Carrois+Gothic+SC&display=swap\");.fonts__creeper{--fontHeading:\"Roboto Slab\",serif;--fontText:\"Carrois Gothic SC\",sans-serif}";
  styleInject(css_248z$h);

  var css_248z$i = "@import url(\"https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Open+Sans&display=swap\");.fonts__duck{--fontHeading:\"Amatic SC\",cursive;--fontText:\"Open Sans\",sans-serif}.fonts__duck h1,.fonts__duck h2,.fonts__duck h3{font-size:3rem}";
  styleInject(css_248z$i);

  var css_248z$j = "@import url(\"https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat&display=swap\");.fonts__finch{--fontHeading:\"Bebas Neue\",cursive;--fontText:\"Montserrat\",sans-serif}";
  styleInject(css_248z$j);

  var css_248z$k = "@import url(\"https://fonts.googleapis.com/css2?family=Anton&family=Lato&display=swap\");.fonts__flow{--fontHeading:\"Anton\",cursive;--fontText:\"Lato\",sans-serif}";
  styleInject(css_248z$k);

  var css_248z$l = "@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@400;900&display=swap\");.fonts__goose{--fontHeading:\"Inter\",cursive;--fontText:\"Inter\",sans-serif}";
  styleInject(css_248z$l);

  var css_248z$m = "@import url(\"https://fonts.googleapis.com/css2?family=Montserrat&family=Staatliches&display=swap\");.fonts__heron{--fontHeading:\"Staatliches\",cursive;--fontText:\"Montserrat\",sans-serif}.fonts__heron h1,.fonts__heron h2,.fonts__heron h3,.fonts__heron h4,.fonts__heron h5,.fonts__heron h6{line-height:90%}";
  styleInject(css_248z$m);

  const fonts = ['cardinal', 'corvid', 'creeper', 'duck', 'finch', 'flow', 'goose', 'heron'];

  var css_248z$n = ".transition__fadeIn .p-scene-enter-transition{transition:opacity .75s cubic-bezier(.2,.8,.05,.95)}.transition__fadeIn .to-right.p-scene-enter-start{opacity:0;transform:translate(0)}.transition__fadeIn .to-right.p-scene-enter-end{opacity:1}.transition__fadeIn .to-left.p-scene-enter-start{opacity:0;transform:translate(0)}.transition__fadeIn .to-left.p-scene-enter-end{opacity:1}";
  styleInject(css_248z$n);

  var css_248z$o = ".transition__hSlide .p-scene-enter-transition{transition:transform .75s cubic-bezier(.87,0,.13,1)}.transition__hSlide .to-right.p-scene-enter-start{transform:translateX(100%)}.transition__hSlide .to-right.p-scene-enter-end{transform:translateX(0)}.transition__hSlide .to-left.p-scene-enter-start{transform:translateX(-100%)}.transition__hSlide .to-left.p-scene-enter-end{transform:translateX(0)}.transition__hSlide .p-scene-leave-transition{transition:transform .75s cubic-bezier(.87,0,.13,1)}.transition__hSlide .to-right.p-scene-leave-start{transform:translateX(0)}.transition__hSlide .to-right.p-scene-leave-end{transform:translateX(-100%)}.transition__hSlide .to-left.p-scene-leave-start{transform:translateX(0)}.transition__hSlide .to-left.p-scene-leave-end{transform:translateX(100%)}";
  styleInject(css_248z$o);

  var css_248z$p = ".transition__vSlide .p-scene-enter-transition{transition:transform .75s cubic-bezier(.87,0,.13,1)}.transition__vSlide .to-right.p-scene-enter-start{transform:translateY(100%)}.transition__vSlide .to-right.p-scene-enter-end{transform:translateY(0)}.transition__vSlide .to-left.p-scene-enter-start{transform:translateY(-100%)}.transition__vSlide .to-left.p-scene-enter-end{transform:translateY(0)}.transition__vSlide .p-scene-leave-transition{transition:transform .75s cubic-bezier(.87,0,.13,1)}.transition__vSlide .to-right.p-scene-leave-start{transform:translateY(0)}.transition__vSlide .to-right.p-scene-leave-end{transform:translateY(-100%)}.transition__vSlide .to-left.p-scene-leave-start{transform:translateY(0)}.transition__vSlide .to-left.p-scene-leave-end{transform:translateY(100%)}";
  styleInject(css_248z$p);

  var css_248z$q = ".transition__slideOver .p-scene-enter-transition{transition:all .75s cubic-bezier(.2,.8,.05,.95)}.transition__slideOver .p-scene-enter-start{transform:translateY(-150%)}.transition__slideOver .p-scene-enter-end{transform:translateY(0)}.transition__slideOver .p-scene-leave-transition{transition:all .75s cubic-bezier(.2,.8,.05,.95)}.transition__slideOver .p-scene-leave-start{transform:scale(1)}.transition__slideOver .p-scene-leave-end{transform:scale(.5)}";
  styleInject(css_248z$q);

  const transitions = ['fadeIn', 'hSlide', 'vSlide', 'slideOver'];

  var css_248z$r = ":root{--scenePadding:0;--sceneBackColor:none}.sceneVar__a{--scenePadding:0.5rem}.sceneVar__a,.sceneVar__b{--sceneBackColor:var(--colorFore)}.sceneVar__b{--scenePadding:2rem}.sceneVar__c{--scenePadding:3.5rem}.sceneVar__c,.sceneVar__d{--sceneBackColor:var(--colorFore)}.sceneVar__d{--scenePadding:0 4rem 4rem 0}.sceneVar__e{--scenePadding:4rem 0rem 4rem 0rem;--sceneBackColor:var(--colorFore)}";
  styleInject(css_248z$r);

  const scenevars = ['a', 'b', 'c', 'd', 'e'];

  var css_248z$s = ":root{--blockWeight:1;--blockPadding:0;--blockOpacity:1;--blockBlend:unset}.blockVar__a{--blockPadding:0.5rem}.blockVar__b{--blockPadding:1.5rem}.blockVar__c{--blockPadding:3rem}.blockVar__d{--blockPadding:0 3rem 3rem 0}.blockVar__e{--blockPadding:2rem 0rem 2rem 0rem}.blockVar__f{--blockPadding:1rem 0rem 3rem 0rem}";
  styleInject(css_248z$s);

  const blockvars = ['a', 'b', 'c'];

  var css_248z$t = ".layout{display:flex}.layout>div{height:100%}.landscape .layout{flex-direction:row}.portrait .layout{flex-direction:column}.layout__cols .layout{display:flex;flex-direction:row}.layout__cols .layout>div{height:100%}.layout__rows .layout{display:flex;flex-direction:column}.layout__rows .layout>div{width:100%}.layout__stack .layout{position:relative}.layout__stack .layout>div{position:absolute;top:0;left:0;width:100%;height:100%}.layout__stack .layout>div:not(:first-child){background:none}.layout__stack .layout>div:first-child:after{content:\"\";position:absolute;left:0;top:0;width:100%;height:100%;background-color:var(--colorBack);opacity:.7}.layout__pile .layout{position:relative}.layout__pile .layout>div{position:absolute;top:0;left:0;width:100%;height:100%;background:none}.layout__head .layout{display:flex;flex-direction:column}.layout__head .layout>div{width:100%}.layout__head .layout>div:last-child{flex:5}.layout__foot .layout{display:flex;flex-direction:column}.layout__foot .layout>div{width:100%}.layout__foot .layout>div:first-child{flex:5}.layout__left .layout{display:flex;flex-direction:row}.layout__left .layout>div{width:100%}.layout__left .layout>div:first-child{flex:2}.layout__right .layout{display:flex;flex-direction:row}.layout__right .layout>div{width:100%}.layout__right .layout>div:last-child{flex:2}";
  styleInject(css_248z$t);

  const layouts = ['cols', 'rows', 'head', 'foot', 'left', 'right', 'stack', 'pile'];

  var globals = {
    colors,
    fonts,
    transitions,
    scenevars,
    colorvars,
    blockvars,
    layouts
  };

  const autoplay = function (rootElement, router, ctrlConfig, projectConfig) {
    let timer = null;
    const defdelay = typeof ctrlConfig === 'number' ? ctrlConfig : 4000;

    const runTime = delay => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        router.next();
      }, delay);
    };

    router.on('indexChanged', evt => {
      const cScene = projectConfig.scenes[evt.currentIndex];
      const delay = cScene.autoplay || defdelay;
      runTime(delay);
    });
    router.on('stepChanged', evt => {
      const cScene = projectConfig.scenes[evt.currentIndex];
      const delay = cScene.autoplay || defdelay;
      runTime(delay);
    });
  };

  const keyboard = function (rootElement, router, ctrlConfig, projectConfig) {
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

  var css_248z$u = ":root{--arrowsOpacity:.5;--arrowsVerticalPosition:center;--arrowsHorizontalPosition:space-between;--arrowsPadding:10px}.style_arrows__2J_-T{position:absolute;top:0;left:0;width:100%;height:100%;z-index:100;transition:opacity .35s}.style_inner__1f-jA{width:100%;height:100%;display:flex;justify-content:var(--arrowsHorizontalPosition);color:var(--colorFore)}.style_direction__3lnqi .style_inner__1f-jA{flex-direction:column}.style_left__199CL,.style_right__2Bn_p{height:100%;display:flex;align-items:var(--arrowsVerticalPosition);justify-content:center;cursor:pointer;padding:var(--arrowsPadding);pointer-events:all}.style_vertical__2l0YR .style_left__199CL,.style_vertical__2l0YR .style_right__2Bn_p{height:unset}.style_ui__1jWCU{width:24px;height:24px;transition:background-color .3s ease-in-out;pointer-events:none}.style_ui__1jWCU circle{stroke:none;fill:var(--colorBack);opacity:var(--arrowsOpacity)}.style_hide__4RZI1{opacity:0}";
  var css = {"arrows":"style_arrows__2J_-T","inner":"style_inner__1f-jA","direction":"style_direction__3lnqi","left":"style_left__199CL","right":"style_right__2Bn_p","vertical":"style_vertical__2l0YR","ui":"style_ui__1jWCU","hide":"style_hide__4RZI1"};
  styleInject(css_248z$u);

  const select = selector => {
    return typeof selector === 'string' ? document.querySelector(selector) : selector;
  };

  var prps = ['containerPaddingTop', 'containerPaddingLeft', 'containerPaddingRight', 'containerPaddingBottom', 'colorBack', 'colorFore', 'colorAccent', 'colorAlt', 'fontText', 'fontHeading', 'scenePadding', 'sceneBackColor', 'blockPadding', 'blockWeight', 'blockOpacity', 'blockBlend'];

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
      prpType.forEach(c => {
        if (prps.indexOf(c) === -1) prps.push(c);
      });
    } else {
      if (prps.indexOf(prpType) === -1) prps.push(prpType);
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
      clsType.forEach(c => {
        if (globprop.indexOf(c) === -1) globprop.push(c);
      });
    } else {
      if (globprop.indexOf(clsType) === -1) globprop.push(clsType);
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
    let orient = 'landscape';

    if (w < h) {
      orient = 'portrait';
    }

    par.classList.add(orient);
    config._orientation = orient;
    par.style.setProperty('--presenta-fz', 1 / (100 / scale));
  };

  const event = (name, detail) => {
    const prop = {
      bubbles: true,
      detail
    };
    return new CustomEvent(name, prop);
  };

  const md5 = s => s.split('').reduce((a, b) => {
    a = (a << 5) - a + b.charCodeAt(0);
    return a & a;
  }, 0);

  const uid = chunk => {
    return 'uid' + md5(JSON.stringify(chunk));
  };

  const io = {};
  var utils = {
    select,
    props,
    addProp,
    globs,
    addGlob,
    uid,
    div,
    fit,
    event,
    io
  };

  var leftArrow = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-arrow-left-circle\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"12 8 8 12 12 16\"></polyline><line x1=\"16\" y1=\"12\" x2=\"8\" y2=\"12\"></line></svg>";

  var rightArrow = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-arrow-right-circle\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"12 16 16 12 12 8\"></polyline><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line></svg>";

  var upArrow = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-arrow-up-circle\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"16 12 12 8 8 12\"></polyline><line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"8\"></line></svg>";

  var downArrow = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-arrow-down-circle\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"8 12 12 16 16 12\"></polyline><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"16\"></line></svg>";

  utils.addProp(['arrowsOpacity', 'arrowsVerticalPosition', 'arrowsHorizontalPosition', 'arrowsPadding']);

  const arrows = function (rootElement, router, ctrlConfig, projectConfig) {
    let timer = null;
    let numInteraction = 0;
    const vertical = ctrlConfig === 'vertical' ? css.vertical : '';
    const firstArrow = vertical ? upArrow : leftArrow;
    const lastArrow = vertical ? downArrow : rightArrow;
    const child = utils.div(`<div class="${css.arrows} ${vertical}"></div>`);
    const inner = utils.div(`<div class="${css.inner}"></div>`);
    const left = utils.div(`<div id="evt_trg_ctrl_arrow_left" class="${css.left}">
    <div class="${css.ui}">${firstArrow}</div>
  </div>`);
    inner.appendChild(left);
    const right = utils.div(`<div id="evt_trg_ctrl_arrow_right" class="${css.right}">
    <div class="${css.ui}">${lastArrow}</div>
  </div>`);
    inner.appendChild(right);
    child.appendChild(inner);
    rootElement.appendChild(child);
    left.addEventListener('click', e => {
      router.prev();
      scheduleForHide();
    });
    right.addEventListener('click', e => {
      router.next();
      scheduleForHide();
    });

    const setMouseMove = () => {
      numInteraction++;

      if (numInteraction === 2) {
        rootElement.parentNode.addEventListener('mousemove', e => {
          scheduleForHide();
        });
      }
    };

    const changed = e => {
      setMouseMove();
      left.style.visibility = 'visible';
      right.style.visibility = 'visible';
      if (e.isFirst) left.style.visibility = 'hidden';
      if (e.isLast && e.totalSteps === e.currentStep) right.style.visibility = 'hidden';
    };

    router.on('stepChanged', e => {
      changed(e);
    });
    router.on('indexChanged', e => {
      changed(e);
    });
    router.on('inited', e => {
      changed(e);
    });

    const scheduleForHide = () => {
      clearTimeout(timer);
      child.classList.remove(css.hide);
      timer = setTimeout(() => {
        child.classList.add(css.hide);
      }, 1500);
    }; // scheduleForHide()


    this._el = child;
  };

  var css_248z$v = ".style_black__3Nszx{width:100%;height:100%;position:absolute;top:0;left:0;background-color:#000;opacity:0;pointer-events:none;transition:opacity .5s cubic-bezier(.8,.2,.2,.8);z-index:999999}";
  var css$1 = {"black":"style_black__3Nszx"};
  styleInject(css_248z$v);

  const black = function (rootElement, router, ctrlConfig, projectConfig) {
    let visible = false;
    const child = utils.div(`<div class="${css$1.black}"></div>`);
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
    router.on('toggleFullscreen', toggle);
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

  const preloads = [];

  const preload = function (rootElement, router, ctrlConfig, projectConfig) {};

  preload.run = projectConfig => {
    return new Promise((resolve, reject) => {
      let len = 0;
      let cnt = 0;
      projectConfig.scenes.forEach(s => {
        s.blocks.forEach(b => {
          const blk = preloads.find(d => d.type === b.type);

          if (blk) {
            const addLink = (url, type) => {
              setTimeout(() => {
                const preloadLink = document.createElement('link');
                preloadLink.href = url;
                preloadLink.rel = 'preload';
                preloadLink.as = type;
                document.head.appendChild(preloadLink);
                cnt++;
                if (cnt === len) resolve();
              }, len);
            };

            len++;
            addLink(b[blk.field], blk.as);
          }
        });
      });
      if (len === 0) resolve();
    });
  };

  const addPreload = ob => {
    preloads.push(ob);
  };

  utils.io.addPreload = addPreload;

  var css_248z$w = ":root{--progressbarHeight:5px;--progressbarBottom:initial}.style_progressbar__37EFM{--progressbarColor:var(--colorFore);width:100%;height:100%;pointer-events:none}.style_bar__3nLkk{width:0;height:var(--progressbarHeight);position:absolute;bottom:var(--progressbarBottom);left:0;background-color:var(--progressbarColor);transition:width .5s cubic-bezier(.8,.2,.2,.8)}";
  var css$2 = {"progressbar":"style_progressbar__37EFM","bar":"style_bar__3nLkk"};
  styleInject(css_248z$w);

  utils.addProp(['progressbarHeight', 'progressbarBottom', 'progressbarColor']);

  const progressbar = function (rootElement, router, ctrlConfig, projectConfig) {
    const child = utils.div(`<div class="${css$2.progressbar}"></div>`);
    const bar = utils.div(`<div class="${css$2.bar}"></div>`);
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

  var css_248z$x = ".pagenumPosition__tl{--pagenumFlexAlign:flex-start;--pagenumFlexJustify:flex-start}.pagenumPosition__tc{--pagenumFlexAlign:flex-start;--pagenumFlexJustify:center}.pagenumPosition__tr{--pagenumFlexAlign:flex-start;--pagenumFlexJustify:flex-end}.pagenumPosition__cl{--pagenumFlexAlign:center;--pagenumFlexJustify:flex-start}.pagenumPosition__cc{--pagenumFlexAlign:center;--pagenumFlexJustify:center}.pagenumPosition__cr{--pagenumFlexAlign:center;--pagenumFlexJustify:flex-end}.pagenumPosition__bl{--pagenumFlexAlign:flex-end;--pagenumFlexJustify:flex-start}.pagenumPosition__bc{--pagenumFlexAlign:flex-end;--pagenumFlexJustify:center}.pagenumPosition__br{--pagenumFlexAlign:flex-end;--pagenumFlexJustify:flex-end}";
  styleInject(css_248z$x);

  var css_248z$y = ":root{--pagenumTextAlign:right;--pagenumPadding:5px;--pagenumFontSize:10px;--pagenumBackColor:none;--pagenumFont:var(--fontText);--pagenumFlexAlign:flex-end;--pagenumFlexJustify:flex-end}.style_pagenum__1OmQh{width:100%;height:100%;position:absolute;top:0;left:0;padding:var(--containerPaddingTop) var(--containerPaddingRight) var(--containerPaddingBottom) var(--containerPaddingLeft);pointer-events:none}.style_inner__1w_O1{width:100%;height:100%;padding:var(--pagenumPadding);display:flex;align-items:var(--pagenumFlexAlign);justify-content:var(--pagenumFlexJustify)}.style_content__3u2tr{text-align:var(--pagenumTextAlign);padding:var(--pagenumInnerPadding);font-size:var(--pagenumFontSize);color:var(--pagenumColor);font-family:var(--pagenumFont);background-color:var(--pagenumBackColor);border:var(--pagenumBorder);border-radius:var(--pagenumBorderRadius);transition:all .3s ease-in-out}";
  var css$3 = {"pagenum":"style_pagenum__1OmQh","inner":"style_inner__1w_O1","content":"style_content__3u2tr"};
  styleInject(css_248z$y);

  utils.addProp(['pagenumTextAlign', 'pagenumPadding', 'pagenumInnerPadding', 'pagenumFontSize', 'pagenumFont', 'pagenumBackColor', 'pagenumColor', 'pagenumBorder', 'pagenumBorderRadius', 'pagenumFlexAlign', 'pagenumFlexJustify']);
  utils.addGlob(['pagenumPosition']);

  const pagenum = function (rootElement, router, ctrlConfig, projectConfig) {
    const child = utils.div(`<div class="${css$3.pagenum}"></div>`);
    const inner = utils.div(`<div class="${css$3.inner}"></div>`);
    const content = utils.div(`<div class="${css$3.content}"></div>`);
    inner.appendChild(content);
    child.appendChild(inner);
    rootElement.appendChild(child);
    const template = typeof ctrlConfig === 'string' ? ctrlConfig : '%s / %S';
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
      router.goto(0); // router.notify('nextIndex')
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

  const hidden = function (rootElement, router, ctrlConfig, projectConfig) {
    const scenesToRemove = [];
    const scenes = projectConfig.scenes;
    scenes.forEach((scene, i) => {
      const blocks = scene.blocks;
      const blocksToRemove = [];

      if (scene.hidden) {
        scenesToRemove.push(i);
      } else {
        blocks.forEach((block, j) => {
          if (block.hidden) blocksToRemove.push(j);
        });
      }

      for (var j = blocks.length - 1; j >= 0; j--) {
        if (blocksToRemove.indexOf(j) >= 0) blocks.splice(j, 1);
      }
    });

    for (var i = scenes.length - 1; i >= 0; i--) {
      if (scenesToRemove.indexOf(i) >= 0) scenes.splice(i, 1);
    }
  };

  var css_248z$z = ".style_limitswitch__3g8Lq{pointer-events:none;opacity:0;background-color:var(--colorAccent);width:100%;height:100%;position:absolute;top:0;left:0}.style_signalSet__GRA42{opacity:.75}.style_signalOut__2qd5k{transition:opacity .35s ease-out;opacity:0}";
  var css$4 = {"limitswitch":"style_limitswitch__3g8Lq","signalSet":"style_signalSet__GRA42","signalOut":"style_signalOut__2qd5k"};
  styleInject(css_248z$z);

  const limitswitch = function (rootElement, router, ctrlConfig, projectConfig) {
    let timer1;
    let timer2;
    const child = utils.div(`<div class="${css$4.limitswitch}"></div>`);
    rootElement.appendChild(child);

    const signal = () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      child.classList.remove(css$4.signalSet, css$4.signalOut);
      child.classList.add(css$4.signalSet);
      timer1 = setTimeout(() => {
        child.classList.add(css$4.signalOut);
      }, 16);
      timer2 = setTimeout(() => {
        child.classList.remove(css$4.signalSet, css$4.signalOut);
      }, 350);
    };

    router.on('begin', e => {
      signal();
    });
    router.on('end', e => {
      signal();
    });
  };

  var css_248z$A = ".style_sync__2HAFR{width:100%;height:100%;position:absolute;top:0;left:0;pointer-events:none}";
  var css$5 = {"sync":"style_sync__2HAFR"};
  styleInject(css_248z$A);

  const sync = function (rootElement, router, ctrlConfig, projectConfig) {
    if (!window.BroadcastChannel) {
      console.log('[sync controller] disabled due browser incompatibility');
      return false;
    }

    const bus = new BroadcastChannel('presenta.sync');
    const child = utils.div(`<div class="${css$5.sync}"></div>`);
    rootElement.appendChild(child);

    bus.onmessage = e => {
      const ev = e.data;
      const name = ev.name;
      const props = ev.props;

      if (name.indexOf('key') === 0) {
        const evt = {
          key: props.key
        };
        rootElement.parentNode.dispatchEvent(new KeyboardEvent(name, evt));
      }

      if (name.indexOf('mouse') === 0 || name.indexOf('click') === 0) {
        const evt = {
          x: props.x,
          y: props.y
        };
        const uid = props.uuid;
        const el = uid ? rootElement.parentNode.querySelector('#' + uid) : rootElement.parentNode;
        const sendEl = el || rootElement.parentNode;
        sendEl.dispatchEvent(new MouseEvent(name, evt));
      }
    };

    const sendKey = (name, e) => {
      const ob = {
        key: e.key,
        type: e.type
      };
      if (e.isTrusted) bus.postMessage({
        name,
        props: ob
      });
    };

    const sendMouse = (name, e) => {
      console.log(e.target, e.currentTarget);
      const target = e.target;
      const uuid = target ? target.getAttribute('id') : null;
      const ob = {
        uuid,
        type: e.type,
        x: e.clientX,
        y: e.clientY
      };
      if (e.isTrusted) bus.postMessage({
        name,
        props: ob
      });
    };

    rootElement.parentNode.addEventListener('keydown', e => {
      sendKey('keydown', e);
    });
    rootElement.parentNode.addEventListener('keyup', e => {
      sendKey('keyup', e);
    });
    rootElement.parentNode.addEventListener('click', e => {
      sendMouse('click', e);
    });
  };

  const rsync = function (rootElement, router, ctrlConfig, projectConfig) {
    if (!window.BroadcastChannel) {
      console.log('rsync controller is disabled because browser incompatibility');
      return false;
    }

    const bus = new BroadcastChannel('presenta.rsync');
    let isReceiver = false;

    const send = (name, e) => {
      if (!isReceiver) bus.postMessage({
        name,
        props: e
      });
      isReceiver = false;
    };

    router.on('next', e => {
      send('next', e);
    });
    router.on('prev', e => {
      send('prev', e);
    });
    router.on('goto', e => {
      send('goto', e);
    });

    bus.onmessage = e => {
      const ev = e.data;
      const name = ev.name;
      const props = ev.props;
      isReceiver = true;

      switch (name) {
        case 'next':
          router.next();
          break;

        case 'prev':
          router.prev();
          break;

        case 'goto':
          router.goto(props.currentIndex);
          break;
      }
    };
  };

  const caches = [];

  const cache = function (rootElement, router, ctrlConfig, projectConfig) {};

  const addCache = ob => {
    caches.push(ob);
  };

  utils.io.addCache = addCache;

  cache.run = projectConfig => {
    return new Promise((resolve, reject) => {
      let len = 0;
      let cnt = 0;

      const checkBlock = block => {
        const isSet = caches.find(d => d.type === block.type);
        if (isSet && block[isSet.field]) blocks.push(block);
      };

      const blocks = [];
      projectConfig.scenes.forEach(scene => {
        scene.blocks.forEach(block => {
          checkBlock(block);
          if (block.type === 'group') block.blocks.forEach(suBlock => checkBlock(suBlock));
        });
      });
      if (blocks.length === 0) resolve();
      blocks.forEach(block => {
        const f = block => {
          fetch(block.url).then(data => {
            data.text().then(data => {
              block._cache = data;
              cnt++;
              if (cnt === len) resolve();
            });
          }).catch(err => {
            cnt++;
            block._cache = err + ': ' + block.url;
            if (cnt === len) resolve();
          });
        };

        len++;
        f(block);
      });
    });
  };

  const inferHTML = (ob, base) => {
    const parser = new DOMParser();
    const dom = parser.parseFromString(ob.text, 'text/html').body;
    const images = dom.querySelectorAll('img');
    const imagesArr = Array.from(images);
    imagesArr.forEach(img => {
      const src = img.getAttribute('src');
      var r = new RegExp('^(?:[a-z]+:)?//', 'i');

      if (!r.test(src)) {
        img.src = base + src;
      }
    });
    ob.text = dom.innerHTML;
  };

  const infer = (ob, field, base) => {
    const val = ob[field];

    if (val && base) {
      var r = new RegExp('^(?:[a-z]+:)?//', 'i');

      if (!r.test(val)) {
        ob[field] = base + val;
      }
    }
  };

  const baseurls = [];

  const baseurl = function (rootElement, router, ctrlConfig, projectConfig) {};

  const inferBlock = (block, base) => {
    const blk = baseurls.find(d => d.type === block.type);

    if (blk) {
      if (blk.html) {
        inferHTML(block, base);
      } else {
        infer(block, blk.field, base);
      }
    }
  };

  baseurl.run = (config, pconf) => {
    return new Promise((resolve, reject) => {
      const base = pconf;
      config.scenes.forEach(scene => {
        scene.blocks.forEach(block => {
          const blks = block.type === 'group' ? block.blocks : [block];
          blks.forEach(block => {
            inferBlock(block, base);
          });
        });
      });
      resolve();
    });
  };

  const addBaseurl = ob => {
    baseurls.push(ob);
  };

  utils.io.addBaseurl = addBaseurl;

  var css_248z$B = ".brandPosition__tl{--brandFlexAlign:flex-start;--brandFlexJustify:flex-start}.brandPosition__tc{--brandFlexAlign:flex-start;--brandFlexJustify:center}.brandPosition__tr{--brandFlexAlign:flex-start;--brandFlexJustify:flex-end}.brandPosition__cl{--brandFlexAlign:center;--brandFlexJustify:flex-start}.brandPosition__cc{--brandFlexAlign:center;--brandFlexJustify:center}.brandPosition__cr{--brandFlexAlign:center;--brandFlexJustify:flex-end}.brandPosition__bl{--brandFlexAlign:flex-end;--brandFlexJustify:flex-start}.brandPosition__bc{--brandFlexAlign:flex-end;--brandFlexJustify:center}.brandPosition__br{--brandFlexAlign:flex-end;--brandFlexJustify:flex-end}.brandDirection__horizontal{--brandDirection:row;--brandIconMargin:0 3px}.brandDirection__vertical{--brandDirection:column;--brandIconMargin:3px 0}";
  styleInject(css_248z$B);

  var css_248z$C = ":root{--brandPadding:0;--brandBackColor:none;--brandFlexAlign:flex-start;--brandFlexJustify:flex-start}.style_brand__3UVOs{width:100%;height:100%;position:absolute;top:0;left:0;z-index:200;padding:var(--containerPaddingTop) var(--containerPaddingRight) var(--containerPaddingBottom) var(--containerPaddingLeft);pointer-events:none;transition:opacity .35s}.style_inner__e7SIS{width:100%;height:100%;display:flex;align-items:var(--brandFlexAlign);justify-content:var(--brandFlexJustify);padding:var(--brandPadding)}.style_content__3ybq1{padding:var(--brandInnerPadding);color:var(--brandColor);background-color:var(--brandBackColor);border:var(--brandBorder);border-radius:var(--brandBorderRadius);pointer-events:all}.style_hide__3EO9o{opacity:0}";
  var css$6 = {"brand":"style_brand__3UVOs","inner":"style_inner__e7SIS","content":"style_content__3ybq1","hide":"style_hide__3EO9o"};
  styleInject(css_248z$C);

  utils.addProp(['brandPadding', 'brandInnerPadding', 'brandBackColor', 'brandColor', 'brandBorder', 'brandBorderRadius', 'brandFlexAlign', 'brandFlexJustify']);
  utils.addGlob(['brandPosition']);

  const brand = function (rootElement, router, ctrlConfig, projectConfig) {
    let timer = null;
    const child = utils.div(`<div class="${css$6.brand}"></div>`);
    const inner = utils.div(`<div class="${css$6.inner}"></div>`);
    const content = utils.div(`<div class="${css$6.content}"></div>`);
    inner.appendChild(content);
    child.appendChild(inner);
    rootElement.appendChild(child);
    this._el = child;
    content.innerHTML = ctrlConfig.source;
    rootElement.parentNode.addEventListener('mousemove', e => {
      scheduleForHide();
    });

    const scheduleForHide = () => {
      clearTimeout(timer);
      child.classList.remove(css$6.hide);
      timer = setTimeout(() => {
        child.classList.add(css$6.hide);
      }, 3000);
    };
  };

  const fonts$1 = function (rootElement, router, ctrlConfig, projectConfig) {};

  const addLink = url => {
    setTimeout(() => {
      const preloadLink = document.createElement('link');
      preloadLink.href = url;
      preloadLink.rel = 'stylesheet';
      preloadLink.type = 'text/css';
      document.head.appendChild(preloadLink);
    });
  };

  fonts$1.run = (projectConfig, ctrlConfig) => {
    return new Promise((resolve, reject) => {
      const t = ctrlConfig.text;
      const h = ctrlConfig.heading;
      const wrap = projectConfig._root;

      if (t) {
        addLink(t.url);
        wrap.style.setProperty('--fontText', t.name);
      }

      if (h) {
        addLink(h.url);
        wrap.style.setProperty('--fontHeading', h.name);
      }

      resolve();
    });
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
    hidecursor,
    hidden,
    limitswitch,
    sync,
    rsync,
    cache,
    baseurl,
    brand,
    fonts: fonts$1
  };

  const add = (type, module, override) => {
    if (controllers[type]) {
      return console.warn(`controller io ${type} already defined`);
    }

    if (override && controllers[type]) {
      console.warn(`controller type ${type} was overriden`);
    }

    controllers[type] = module;
  };

  var css_248z$D = ".style_stepItem__1Iv29{transition:opacity 1.33s cubic-bezier(.19,1,.22,1),transform 1.33s cubic-bezier(.19,1,.22,1);transform-origin:center}.style_fadeIn__1qNon{opacity:0!important}.style_zoomOut__FobL2{opacity:0!important;transform:scale(1.3)!important}.style_zoomIn__3R2ad{opacity:0!important;transform:scale(.7)!important}.style_slideUp__2aPxJ{opacity:0!important;transform:translateY(40px)!important}.style_slideDown__3Wu--{opacity:0!important;transform:translateY(-40px)!important}";
  var css$7 = {"stepItem":"style_stepItem__1Iv29","fadeIn":"style_fadeIn__1qNon","zoomOut":"style_zoomOut__FobL2","zoomIn":"style_zoomIn__3R2ad","slideUp":"style_slideUp__2aPxJ","slideDown":"style_slideDown__3Wu--"};
  styleInject(css_248z$D);

  const validTrans = ['fadeIn', 'zoomOut', 'zoomIn', 'slideUp', 'slideDown'];
  const validModes = ['sequential', 'match'];

  const parseSettings = cnf => {
    let tag = null;
    let trans = null;
    let mode = null;
    let out = null;

    if (typeof cnf === 'string') {
      tag = cnf;
    }

    if (typeof cnf === 'object') {
      tag = cnf.selector;
      trans = cnf.transition;
      mode = cnf.mode;
      out = cnf.out;
    }

    return {
      tag,
      trans,
      mode,
      out
    };
  };

  const steps = function (sceneElement, modConfig, sceneConfig) {
    if (sceneConfig._mode !== 'present') return;
    const modSett = parseSettings(modConfig);
    let defTag = modSett.tag || '.step';
    const defOut = modSett.out || false;
    let defTrans = modSett.trans || validTrans[0];
    const defMode = modSett.mode || validModes[0];
    const sceneSett = parseSettings(sceneConfig.steps);
    let sceneMode = sceneSett.mode || sceneSett.tag || defMode;
    if (validModes.indexOf(sceneMode) === -1) sceneMode = validModes[0];
    defTag = sceneSett.tag || defTag;
    defTrans = sceneSett.trans || defTrans;
    let index = 0;
    const allElems = {};
    const blocks = sceneConfig.blocks.filter(b => !(b.hasOwnProperty('steps') && !b.steps));
    let prevEls = null;
    blocks.forEach(b => {
      const blockEl = b._el;
      const sett = parseSettings(b.steps);
      const tag = sett.tag || defTag;
      const out = sett.out || defOut;
      let trans = sett.trans || defTrans;
      if (validTrans.indexOf(trans) === -1) trans = validTrans[0];
      const tags = tag.split(',');
      const blockStepElements = [];
      tags.forEach(tg => {
        const isSingle = tg.indexOf('#') >= 0;
        const query = isSingle ? 'querySelector' : 'querySelectorAll';
        const select = blockEl[query](tg);

        if (isSingle) {
          blockStepElements.push({
            selector: tg,
            els: select ? [select] : []
          });
        } else {
          const elms = Array.from(select);
          elms.sort((a, b) => {
            return a.dataset.order - b.dataset.order;
          });
          blockStepElements.push({
            selector: tg,
            els: elms
          });
        }
      });

      if (sceneMode === 'sequential') {
        blockStepElements.forEach(ob => {
          const els = ob.els;
          els.forEach(el => {
            el.classList.add(css$7.stepItem, css$7[trans]);
            const id = {
              sandbox: 'steps',
              index,
              trans,
              out,
              els: [el]
            };

            sceneConfig._steps.push(id);

            index++;
          });
        });
      }

      if (sceneMode === 'match') {
        blockStepElements.forEach(ob => {
          const sel = ob.selector;
          const els = ob.els;

          if (!allElems[sel]) {
            allElems[sel] = {
              arr: els,
              trans,
              outs: [out]
            };
          } else {
            allElems[sel].arr = allElems[sel].arr.concat(els);
            allElems[sel].outs.push(out);
          }
        });
      } // end blocks

    }); // routine only for match mode

    for (const k in allElems) {
      const trans = allElems[k].trans;
      const outs = allElems[k].outs;
      allElems[k].arr.forEach(el => el.classList.add(css$7.stepItem, css$7[trans]));
      const id = {
        sandbox: 'steps',
        index,
        trans,
        outs: outs,
        out: outs.find(d => d === true),
        els: allElems[k].arr
      };

      sceneConfig._steps.push(id);

      index++;
    }

    this.stepForward = step => {
      if (step.sandbox === 'steps') {
        if (prevEls) {
          prevEls.forEach((el, i) => {
            const out = step.outs ? step.outs[i] : step.out;
            if (out) el.classList.add(css$7[step.trans]);
          });
          prevEls = null;
        }

        const els = step.els;
        els.forEach(el => el.classList.remove(css$7[step.trans]));

        if (step.out) {
          prevEls = els;
        }
      }
    };
  };

  const modules = {
    steps
  };

  const add$1 = (type, module, override) => {
    if (!override && modules[type]) {
      return console.warn(`module type ${type} already defined`);
    }

    if (override && modules[type]) {
      console.warn(`module type ${type} was overriden`);
    }

    modules[type] = module;
  };

  var css_248z$E = ".style_debug__1-XHT{width:100%;height:100%;display:flex;align-items:center;justify-content:center}.style_debug__1-XHT svg{width:100%;height:100%;pointer-events:none}";
  var css$8 = {"debug":"style_debug__1-XHT"};
  styleInject(css_248z$E);

  const debug = function (el, config) {
    const that = this;
    return new Promise((resolve, reject) => {
      // config._sceneConfig._steps.push(1)
      const child = utils.div(`<div class="${css$8.debug}" id="evt_trg_uid_block_debug_${config._index}">
    <svg preserveAspectRatio="none" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      
      <g class="sstep" data-order="3">
        <rect width="50" height="150" fill="var(--colorFore)"/>
        <rect x="50" width="50" height="150" fill="var(--colorBack)"/>
        <rect x="100" width="50" height="150" fill="var(--colorAccent)"/>
        <rect x="150" width="50" height="150" fill="var(--colorAlt)"/>
      </g>

      <g class="sstep" data-order="2">
        <rect y="150" width="200" height="32" fill="var(--colorBack)"/>
        <text fill="var(--colorFore)" xml:space="preserve" style="white-space: pre" font-family="var(--fontHeading)" font-size="12" letter-spacing="0em"><tspan x="3" y="170.102">fontHeading</tspan></text>
        <text fill="var(--colorFore)" xml:space="preserve" style="white-space: pre" font-family="var(--fontText)" font-size="12" letter-spacing="0em"><tspan x="102" y="170.102">fontText</tspan></text>
      </g>    

      <g class="sstep" data-order="1">
        <rect y="182" width="50" height="18" fill="var(--colorAlt)"/>
        <rect x="50" y="182" width="50" height="18" fill="var(--colorAccent)"/>
        <rect x="100" y="182" width="50" height="18" fill="var(--colorBack)"/>
        <rect x="150" y="182" width="50" height="18" fill="var(--colorFore)"/>
      </g>

    </svg>
  </div>`);

      that.beforeDestroy = () => {
        config._rootElement.removeEventListener('keyup', key);

        child.removeEventListener('click', click);
      };

      el.appendChild(child);

      const key = e => {
        console.log(e);
      };

      const click = e => {
        console.log(e);
      };

      config._rootElement.addEventListener('keyup', key);

      child.addEventListener('click', click);
      resolve(that);
    });
  };

  var css_248z$F = ".textVar__title{--textPadding:3rem;--textAlign:center;--textListAlign:center;--textFlexAlign:center;--textFlexJustify:center;--textSize:2.5rem}.textVar__text{--textAlign:left;--textListAlign:left;--textFlexJustify:flex-start;--textSize:1rem}.textVar__section,.textVar__text{--textPadding:2rem;--textFlexAlign:flex-start}.textVar__section{--textAlign:right;--textListAlign:right;--textFlexJustify:flex-end;--textSize:2rem}.textVar__mention{--textAlign:left;--textListAlign:left;--textFlexJustify:flex-start;--textSize:1.5rem}.textVar__mention,.textVar__suggest{--textPadding:2rem;--textFlexAlign:flex-end}.textVar__suggest{--textAlign:center;--textListAlign:center;--textFlexJustify:center;--textSize:0.8rem}.textStyle__a{--textboxpadding:0;--textboxbackcolor:var(--colorFore);--textboxradius:0;--textboxborder:0;--textboxshadow:0 0 0 var(--colorAccent);--textboxcolor:var(--colorBack)}";
  styleInject(css_248z$F);

  var css_248z$G = ":root{--textPadding:0;--textAlign:center;--textListAlign:left;--textFlexAlign:center;--textFlexJustify:center;--textSize:1rem;--textWidth:auto}.style_text__3T1cl{width:100%;height:100%;position:relative;color:var(--colorFore)}.style_promise__1-2R_{visibility:hidden}.style_inner__11UJC{position:relative;width:100%;height:100%}.style_pretext__cLjqD{display:flex;width:100%;height:100%;align-items:var(--textFlexAlign);justify-content:var(--textFlexJustify)}.style_textbox__1Vb-V{padding:var(--textboxpadding);text-align:var(--textAlign);font-size:var(--textSize);color:var(--textboxcolor);--backmark:var(--colorAccent);--foremark:var(--colorBack);--textaccentcolor:var(--colorAccent);font-family:var(--fontText);width:var(--textWidth)}.style_itext__jz90o{border:var(--textboxborder) solid var(--colorAccent);padding:var(--textPadding);border-radius:var(--textboxradius);box-shadow:var(--textboxshadow);background-color:var(--textboxbackcolor)}.style_itext__jz90o img{-o-object-fit:contain;object-fit:contain;height:4em;vertical-align:middle}.style_itext__jz90o mark{background-color:var(--backmark);color:var(--foremark);padding:.5rem;display:inline-block}.style_itext__jz90o high{color:var(--textaccentcolor)}.style_itext__jz90o bord{border:8px solid var(--backmark);padding:0 .5rem}.style_itext__jz90o a{color:var(--textaccentcolor);text-decoration:underline}.style_itext__jz90o blockquote{font-size:2em;font-weight:400;font-style:italic}.style_itext__jz90o blockquote,.style_itext__jz90o h1,.style_itext__jz90o h2,.style_itext__jz90o h3,.style_itext__jz90o h4,.style_itext__jz90o h5,.style_itext__jz90o h6,.style_itext__jz90o p,.style_itext__jz90o ul{margin:0}.style_itext__jz90o h1 b,.style_itext__jz90o h1 strong,.style_itext__jz90o h2 b,.style_itext__jz90o h2 strong,.style_itext__jz90o h3 b,.style_itext__jz90o h3 strong,.style_itext__jz90o h4 b,.style_itext__jz90o h4 strong,.style_itext__jz90o h5 b,.style_itext__jz90o h5 strong,.style_itext__jz90o h6 b,.style_itext__jz90o h6 strong{color:var(--textaccentcolor)}.style_itext__jz90o ol,.style_itext__jz90o ul{font-size:1.5em;line-height:1.1em;text-align:var(--textListAlign);margin:0;list-style-type:none;counter-reset:li;padding:.5rem 0}.style_itext__jz90o li{list-style-position:inside;margin-bottom:2px;padding:.25em .25em .25em .8em}.style_itext__jz90o ul li:before{content:\"\\2013\";display:inline-block;width:.8em;margin-left:-.8em}.style_itext__jz90o ol li:before{counter-increment:li;content:\".\" counter(li);display:inline-block;width:1.1em;margin-left:-1.3em;margin-right:.2em;text-align:right;direction:rtl}.style_itext__jz90o li p{display:inline}.style_itext__jz90o code,.style_itext__jz90o pre{text-align:left;margin:0}.style_itext__jz90o h1,.style_itext__jz90o h2,.style_itext__jz90o h3,.style_itext__jz90o h4,.style_itext__jz90o h5,.style_itext__jz90o h6{font-family:var(--fontHeading);padding:.5rem 0}.style_itext__jz90o h1{font-size:2em}.style_itext__jz90o h2{font-size:1.5em}.style_itext__jz90o h3{font-size:1.17em}.style_itext__jz90o h4{font-size:1em}.style_itext__jz90o h5{font-size:.83em}.style_itext__jz90o h6{font-size:.67em}.style_itext__jz90o p{padding:.5rem 0}.style_itext__jz90o hr{border:1px solid var(--colorFore);margin:.5rem 0}.style_itext__jz90o h1:first-child,.style_itext__jz90o h1:last-child,.style_itext__jz90o h2:first-child,.style_itext__jz90o h2:last-child,.style_itext__jz90o h3:first-child,.style_itext__jz90o h3:last-child{padding:0}.style_itext__jz90o table{width:100%}.style_itext__jz90o tr{padding:0}.style_itext__jz90o td,.style_itext__jz90o th{padding:.5rem;border-bottom:1px solid var(--colorFore)}.style_itext__jz90o small{font-size:.6em}";
  var css$9 = {"text":"style_text__3T1cl","promise":"style_promise__1-2R_","inner":"style_inner__11UJC","pretext":"style_pretext__cLjqD","textbox":"style_textbox__1Vb-V","itext":"style_itext__jz90o"};
  styleInject(css_248z$G);

  const text = function (el, config) {
    const that = this;
    return new Promise((resolve, reject) => {
      const html = config.text || '';
      let sizefactor = 1;

      if (config.responsive && config._portrait) {
        sizefactor = 2;
      }

      let defsize = 1;
      const varSize = {
        title: 2.5,
        text: 1,
        section: 2,
        mention: 1.5,
        suggest: 0.8
      };
      if (config.textVar) defsize = varSize[config.textVar];
      let fsize = config.scale || defsize * sizefactor;
      const child = utils.div(`<div class="c ${css$9.text} ${css$9.promise}">
    <div class="${css$9.inner}">
      <div class="pretext ${css$9.pretext}">
        <div class="${css$9.textbox}">
          <div class="textContent ${css$9.itext} ${css$9.fadein}">
            ${html}
          </div>
        </div>
      </div>
    </div>
  </div>`);
      el.appendChild(child); // if there are images, let's exploit the alt attribute if contains a number
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
        const mel = child.querySelector('.' + css$9.inner);
        const mbox = mel.getBoundingClientRect();
        const el = child.querySelector('.' + css$9.textbox);
        const bbox = el.getBoundingClientRect();

        if (parseInt(mbox.width) < parseInt(bbox.width) || parseInt(mbox.height) < parseInt(bbox.height)) {
          fsize -= 0.1;
          return compute();
        } else {
          setTimeout(() => {
            child.classList.remove(css$9.promise);
            resolve(that);
          });
        }
      };

      setTimeout(compute);
    });
  };

  text.init = () => {
    utils.addGlob(['textVar', 'textStyle']);
    utils.addProp(['textPadding', 'textAlign', 'textFlexAlign', 'textFlexJustify', 'textWidth']);
    if (utils.io.addBaseurl) utils.io.addBaseurl({
      type: 'text',
      html: true
    });
    if (utils.io.addMarkdown) utils.io.addMarkdown({
      type: 'text',
      field: 'text'
    });
  };

  var css_248z$H = ":root{--embedPadding:0;--embedBackcolor:none;--embedPosterSize:cover;--embedPosterPosition:center}.style_inner__3WOWs{padding:var(--embedPadding);position:relative}.style_frame__28PUh{background-color:var(--embedBackcolor);position:relative}.style_embed__2Pre2,.style_frame__28PUh,.style_inner__3WOWs{width:100%;height:100%}.style_frame__28PUh>iframe{width:100%;height:100%;border:none}.style_loading__1w7wc{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:var(--colorFore);font-family:var(--fontText);background-color:var(--colorBack)}.style_loading__1w7wc mark{background-color:var(--colorAccent);color:var(--colorBack)}.style_blockmouse__3bXSl,.style_poster__1TOx3{position:absolute;top:0;left:0;width:100%;height:100%}.style_poster__1TOx3{background-color:var(--colorBack)}.style_poster__1TOx3 img{width:100%;height:100%;-o-object-fit:var(--embedPosterSize);object-fit:var(--embedPosterSize);-o-object-position:var(--embedPosterPosition);object-position:var(--embedPosterPosition)}";
  var css$a = {"inner":"style_inner__3WOWs","frame":"style_frame__28PUh","embed":"style_embed__2Pre2","loading":"style_loading__1w7wc","blockmouse":"style_blockmouse__3bXSl","poster":"style_poster__1TOx3"};
  styleInject(css_248z$H);

  const iframePrimaryDomain = str => {
    if (!str) return '';
    const reg = new RegExp('src="(.*)', 'gim');
    const url = reg.exec(str);
    const dom = url[1].match(/http(s?):\/\/([\w]+\.){1}([\w]+\.?)+/gim);
    return dom && dom.length > 0 ? dom[0] : null;
  };

  const embed = function (el, config) {
    const previewMode = config._mode === 'preview';
    const presentMode = config._mode === 'present';
    let iframe = null;

    if (config.url) {
      iframe = `<iframe src="${config.url}"></iframe>`;
    }

    if (config.code) {
      iframe = config.code;
    }

    const name = iframePrimaryDomain(iframe);
    const msg = name ? `Embed from <mark>${name}</mark>` : 'Embed resource';
    const coverFrame = `<div class="cover ${css$a.loading}"><h1>${msg}</h1></div>`;
    const blockPointer = config.blockPointer ? `<div class='${css$a.blockmouse}' />` : '';
    const posterFrame = config.poster ? `<div class="${css$a.poster}"><img src="${config.poster}" /></div>` : '';
    const child = utils.div(`<div class="c ${css$a.embed}">
    <div class="${css$a.inner}">
        <div class="${css$a.frame}">${iframe}</div>
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
        child.querySelector('.' + css$a.loading).style.display = 'none';
        if (posterFrame) child.querySelector('.' + css$a.poster).style.display = 'none';
      });
    }
  };

  embed.init = () => {
    utils.addProp(['embedPadding', 'embedBackcolor', 'embedPosterSize', 'embedPosterPosition']);
  };

  var css_248z$I = ":root{--imagePadding:0;--imageBorder:none;--imageShadow:none;--imageSize:cover;--imagePosition:center;--imageWidth:100%;--imageHeight:100%}.style_image__1fZIQ,.style_inner__3tyMU{width:100%;height:100%}.style_inner__3tyMU{display:flex}.style_preimg__2ypvx{flex:1;padding:var(--imagePadding);display:flex;align-items:center;justify-content:center}.style_preimg__2ypvx img{width:var(--imageWidth);height:var(--imageHeight);border:var(--imageBorder);box-shadow:var(--imageShadow);-o-object-fit:var(--imageSize);object-fit:var(--imageSize);-o-object-position:var(--imagePosition);object-position:var(--imagePosition)}";
  var css$b = {"image":"style_image__1fZIQ","inner":"style_inner__3tyMU","preimg":"style_preimg__2ypvx"};
  styleInject(css_248z$I);

  var css_248z$J = ".imageStyle__solid{--imageWidth:auto;--imageHeight:auto}";
  styleInject(css_248z$J);

  const image = function (el, config) {
    const url = config.url;
    const step = config.step ? 'step' : '';
    const imageschunk = `<div class="presentablock__image ${css$b.preimg}">
        <img src="${url}" />
      </div>`;
    const child = utils.div(`<div class="${css$b.image} ${step}">
    <div class="imagesContainer ${css$b.inner}">
        ${imageschunk}
    </div>
  </div>`);

    this.beforeDestroy = () => {};

    el.appendChild(child);
  };

  image.init = () => {
    utils.addGlob(['imageStyle']);
    utils.addProp(['imagePadding', 'imageBorder', 'imageShadow', 'imageSize', 'imagePosition', 'imageWidth', 'imageHeight']);
    if (utils.io.addPreload) utils.io.addPreload({
      type: 'image',
      field: 'url',
      as: 'image'
    });
    if (utils.io.addBaseurl) utils.io.addBaseurl({
      type: 'image',
      field: 'url'
    });
  };

  var css_248z$K = ":root{--videoSize:cover;--videoPosition:center}.style_video__1qbdJ{width:100%;height:100%;display:flex;align-items:center;justify-content:center}.style_video__1qbdJ video{width:100%;height:100%;-o-object-fit:var(--videoSize);object-fit:var(--videoSize);-o-object-position:var(--videoPosition);object-position:var(--videoPosition);pointer-events:none}";
  var css$c = {"video":"style_video__1qbdJ"};
  styleInject(css_248z$K);

  const video = function (el, config) {
    const previewMode = config._mode === 'preview';
    const presentMode = config._mode === 'present';
    const poster = config.poster ? `poster=${config.poster}` : '';
    const loop = config.loop ? 'loop' : '';
    const muted = config.muted ? 'muted' : '';
    const autoplay = config.autoplay && presentMode ? 'autoplay' : '';
    const src = config.url ? `src=${config.url}` : '';
    const child = utils.div(`<div class="${css$c.video}" id="evt_trg_uid_block_video_${config._index}">
    <video ${poster} ${src} ${loop} ${autoplay} ${muted}></video>
  </div>`);

    this.beforeDestroy = () => {
      config._rootElement.removeEventListener('keyup', setKeyListener);

      child.removeEventListener('click', toggleVideo);
    };

    el.appendChild(child);
    let video;
    let isPlaying = config.autoplay;

    const toggleVideo = e => {
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

      if (e.key === 'r') {
        if (video) {
          video.currentTime = 0;
        }
      }

      if (e.key === 'm') {
        if (video) {
          video.volume = !video.volume ? 1 : 0;
        }
      }

      if (e.key === '+') {
        if (video) {
          video.volume += 0.1;
        }
      }

      if (e.key === '-') {
        if (video) {
          video.volume -= -0.1;
        }
      }
    };

    if (presentMode) {
      config._rootElement.addEventListener('keyup', setKeyListener);

      child.addEventListener('click', toggleVideo); // was child
    }
  };
  /*
  prevent body scroll
  window.addEventListener("keydown", function(e) {
      // space and arrow keys
      if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
          e.preventDefault();
      }
  }, false);
  */


  video.init = () => {
    utils.addProp(['videoSize', 'videoPosition']);
    if (utils.io.addPreload) utils.io.addPreload({
      type: 'video',
      field: 'url',
      as: 'video'
    });
    if (utils.io.addBaseurl) utils.io.addBaseurl({
      type: 'video',
      field: 'url'
    });
  };

  var css_248z$L = ".solidVar__a{--solidColor:#000}.solidVar__a,.solidVar__b{--solidOpacity:.7;--solidBlend:none}.solidVar__b{--solidColor:#fff}.solidVar__c{--solidColor:var(--colorBack);--solidOpacity:1;--solidBlend:multiply}";
  styleInject(css_248z$L);

  var css_248z$M = ":root{--solidOpacity:1;--solidBlend:none;--solidColor:var(--colorAccent)}.style_solid__wiwvr{width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--solidColor);opacity:var(--solidOpacity);mix-blend-mode:var(--solidBlend)}";
  var css$d = {"solid":"style_solid__wiwvr"};
  styleInject(css_248z$M);

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
    const child = utils.div(`<div class="${css$d.solid}"></div>`);

    this.beforeDestroy = () => {};

    el.appendChild(child);
  };

  var css_248z$N = ":root{--svgPadding:0}.style_inner__AjKjt,.style_svg__2xfFu{width:100%;height:100%}.style_inner__AjKjt{padding:var(--svgPadding)}.style_svg__2xfFu svg{width:100%;height:100%}";
  var css$e = {"svg":"style_svg__2xfFu","inner":"style_inner__AjKjt"};
  styleInject(css_248z$N);

  const svg = function (el, config) {
    const svg = config._cache || config.code;
    if (!svg) return console.log('[block svg]', 'The svg is not present');
    const child = utils.div(`<div class="c ${css$e.svg}">
        <div class="${css$e.inner}">
            ${svg}
        </div>
    </div>`);
    el.appendChild(child);

    this.beforeDestroy = () => {};
  };

  svg.init = () => {
    utils.addProp(['svgPadding']);
    if (utils.io.addCache) utils.io.addCache({
      type: 'svg',
      field: 'url'
    });
    if (utils.io.addBaseurl) utils.io.addBaseurl({
      type: 'svg',
      field: 'url'
    });
  };

  const blocks = {
    debug,
    text,
    embed,
    image,
    video,
    solid,
    svg
  };

  const add$2 = (type, module, override) => {
    if (blocks[type]) {
      return console.warn(`block type ${type} already defined`);
    }

    if (override && blocks[type]) {
      console.warn(`block type ${type} was overriden`);
    }

    blocks[type] = module;
  };

  var css_248z$O = ".splash_splash__3mb9V{width:100%;height:100%;background-color:var(--colorBack);color:var(--colorFore);display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:var(--fontHead)}.splash_spinner__3jef_{display:flex;animation:splash_spin__Dy8Lf 2s linear infinite}@keyframes splash_spin__Dy8Lf{to{transform:rotate(1turn)}}";
  var css$f = {"splash":"splash_splash__3mb9V","spinner":"splash_spinner__3jef_","spin":"splash_spin__Dy8Lf"};
  styleInject(css_248z$O);

  var loader = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-loader\"><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"6\"></line><line x1=\"12\" y1=\"18\" x2=\"12\" y2=\"22\"></line><line x1=\"4.93\" y1=\"4.93\" x2=\"7.76\" y2=\"7.76\"></line><line x1=\"16.24\" y1=\"16.24\" x2=\"19.07\" y2=\"19.07\"></line><line x1=\"2\" y1=\"12\" x2=\"6\" y2=\"12\"></line><line x1=\"18\" y1=\"12\" x2=\"22\" y2=\"12\"></line><line x1=\"4.93\" y1=\"19.07\" x2=\"7.76\" y2=\"16.24\"></line><line x1=\"16.24\" y1=\"7.76\" x2=\"19.07\" y2=\"4.93\"></line></svg>";

  const Splash = function (rootElement, projectConfig) {
    /*
        Let's check and fix the wrapper size
    */
    const size = getComputedStyle(rootElement);
    let w = +size.width.split('px')[0];
    let h = +size.height.split('px')[0];

    if (w < 50) {
      w = 360;
      rootElement.style.width = `${w}px`;
    }

    if (h < 50) {
      h = 200;
      if (projectConfig) h = w / projectConfig.aspect;
      rootElement.style.height = `${h}px`;
    }

    const label = projectConfig.loading || '';
    const child = utils.div(`<div class="${css$f.splash}">
    <div class="${css$f.spinner}">${loader}</div>
    ${label}
  </div>`);
    rootElement.appendChild(child);
    utils.globs(child, projectConfig);

    this.destroy = () => {
      rootElement.removeChild(child);
    };
  };

  var css_248z$P = ":root{--containerPaddingTop:0;--containerPaddingLeft:0;--containerPaddingRight:0;--containerPaddingBottom:0}.container_mainwrapper__zelcO{width:100%;height:100%;position:relative;overflow:hidden;outline:none}.container_superContainer__2mwZX{padding:var(--containerPaddingTop) var(--containerPaddingRight) var(--containerPaddingBottom) var(--containerPaddingLeft)}.container_container__3kBNh,.container_superContainer__2mwZX{width:100%;height:100%;position:relative;overflow:hidden}.container_container__3kBNh>div{position:absolute;top:0;left:0}";
  var css$g = {"mainwrapper":"container_mainwrapper__zelcO","superContainer":"container_superContainer__2mwZX","container":"container_container__3kBNh"};
  styleInject(css_248z$P);

  var css_248z$Q = ".router_router__2r4NQ{width:100%;height:100%;position:absolute;top:0;left:0;pointer-events:none}.router_router__2r4NQ>div{padding:var(--containerPaddingTop) var(--containerPaddingRight) var(--containerPaddingBottom) var(--containerPaddingLeft)}.router_router__2r4NQ>div.router_ignorePad__4q1nG{padding:0}";
  var css$h = {"router":"router_router__2r4NQ","ignorePad":"router_ignorePad__4q1nG"};
  styleInject(css_248z$Q);

  const Router = function (rootElement, projectConfig) {
    const child = utils.div(`<div class="controller ${css$h.router}"></div>`);
    rootElement.appendChild(child);
    const scenes = projectConfig.scenes;

    const numScenes = () => scenes.length - 1;

    const listeners = {};
    const registeredIO = {};
    let currentIndex = 0;
    let currentStep = 0;

    const numSteps = () => {
      return scenes[currentIndex] && scenes[currentIndex]._steps ? scenes[currentIndex]._steps.length : 0;
    };

    const updateRouterWrapper = () => {
      const sceneConfig = scenes[currentIndex];
      child.classList.remove(...child.classList);
      child.classList.add('controller', css$h.router);
      child.style = null;
      utils.globs(child, sceneConfig);
      utils.props(child, sceneConfig);
    };

    this.next = () => {
      if (currentStep === numSteps()) {
        this.nextIndex();
      } else {
        currentStep++;
        notify('stepChanged');
      }

      notify('next');
    };

    this.prev = () => {
      this.prevIndex();
      notify('prev');
    };

    this.nextIndex = () => {
      if (currentIndex < numScenes()) {
        currentIndex++;
        currentStep = 0;
        notify(['nextIndex', 'indexChanged']);
      } else {
        currentIndex = numScenes();
        currentStep = numSteps();
        notify('end');
      } // setNumSteps()

    };

    this.prevIndex = () => {
      if (currentIndex > 0) {
        currentIndex--;
        currentStep = 0;
        notify(['prevIndex', 'indexChanged']);
      } else {
        currentIndex = 0;
        currentStep = 0;
        notify('begin');
      } // setNumSteps()

    };

    this.goto = v => {
      const dir = currentIndex > v ? 'prevIndex' : 'nextIndex';
      currentIndex = v < numScenes() ? v : numScenes();
      currentStep = 0;
      notify(['goto', dir, 'indexChanged']);
    };

    const notify = evt => {
      const evts = Array.isArray(evt) ? evt : [evt];
      evts.forEach(ev => {
        if (ev === 'indexChanged') updateRouterWrapper();

        if (listeners[ev]) {
          listeners[ev].forEach(clb => {
            clb({
              name: ev,
              currentIndex,
              currentStep,
              totalScenes: this.totalScenes(),
              totalSteps: numSteps(),
              isFirst: this.isFirst(),
              isLast: this.isLast()
            });
          });
        }
      });
    };

    const dispatch = (name, params) => {
      if (listeners[name]) {
        listeners[name].forEach(clb => {
          clb(params);
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

    this.totalScenes = () => numScenes() + 1;

    this.totalSteps = () => numSteps();

    this.currentIndex = () => currentIndex;

    this.currentStep = () => currentStep;

    this.isFirst = () => currentIndex === 0;

    this.isLast = () => currentIndex === numScenes();

    this.setCurrentIndex = idx => currentIndex = idx;

    this.setCurrentStep = stp => currentStep = stp;

    this.controllers = registeredIO;
    this.dispatch = dispatch;

    if (projectConfig.controllers) {
      for (const k in projectConfig.controllers) {
        const modConfig = projectConfig.controllers[k];
        const Mod = controllers[k];
        if (!Mod) console.log(`Controller "${k}" not found. Maybe you forgot to include it.`);

        if (modConfig && Mod) {
          const md = new Mod(child, this, modConfig, projectConfig);
          registeredIO[k] = md;

          if (modConfig.ignorePad) {
            if (md._el) {
              md._el.classList.add(css$h.ignorePad);
            } else {
              console.warn(`Controller ${k} uses ignorePad but _el is undefined`);
            }
          }
        }
      }
    }

    notify('indexChanged');
    setTimeout(() => {
      notify('init');
      setTimeout(() => {
        notify('inited');
      });
    });
  };

  var css_248z$R = ":root{--scenePadding:0}.scene_sceneContainer__IgSpB{width:100%;height:100%;display:flex;align-items:center;justify-content:center;position:relative}.scene_scene__3uvTl{--presenta-sw:calc(var(--presenta-w)/var(--presenta-p)/var(--presenta-fz));--presenta-sh:calc(var(--presenta-h)/var(--presenta-p)/var(--presenta-fz));--presenta-scal:calc(var(--presenta-pw)/var(--presenta-p)/var(--presenta-pw)/var(--presenta-fz));width:var(--presenta-sw);height:var(--presenta-sh);font-family:serif}.scene_promise__24VCP{visibility:hidden}.scene_wrapper__3yr1k{width:var(--presenta-w);height:var(--presenta-h);transform:scale(1);transform:scale(var(--presenta-scal));transform-origin:top left;overflow:hidden;padding:var(--scenePadding);background-color:var(--sceneBackColor)}.scene_noResize__M8OwW.scene_scene__3uvTl{width:100%;height:100%}.scene_noResize__M8OwW .scene_wrapper__3yr1k{width:100%;height:100%;transform:scale(1)}.scene_content__1rJf0{width:100%;height:100%;display:flex;flex-direction:column;overflow:hidden}.scene_fcontainer__1E_0g{top:0;left:0;width:100%;height:100%;position:absolute;pointer-events:none}.scene_viewport__3uNLS{width:100%;height:100%;position:relative;flex:1;overflow:hidden;display:flex;flex-direction:row}.scene_viewport__3uNLS>div{height:100%}";
  var css$i = {"sceneContainer":"scene_sceneContainer__IgSpB","scene":"scene_scene__3uvTl","promise":"scene_promise__24VCP","wrapper":"scene_wrapper__3yr1k","noResize":"scene_noResize__M8OwW","content":"scene_content__1rJf0","fcontainer":"scene_fcontainer__1E_0g","viewport":"scene_viewport__3uNLS"};
  styleInject(css_248z$R);

  var css_248z$S = ".block_block__BWbaZ{background:var(--colorBack);width:100%;height:100%;flex:1;flex:var(--blockWeight);overflow:hidden;position:relative}.block_inner__3LS6s{width:100%;height:100%;padding:var(--blockPadding);opacity:var(--blockOpacity);mix-blend-mode:var(--blockBlend)}.block_bdecoration__3KJh-,.block_inner__3LS6s{top:0;left:0;width:100%;height:100%;position:absolute}.block_fdecoration__12tBw{pointer-events:none}";
  var css$j = {"block":"block_block__BWbaZ","inner":"block_inner__3LS6s","bdecoration":"block_bdecoration__3KJh-","fdecoration":"block_fdecoration__12tBw"};
  styleInject(css_248z$S);

  const Block = function (blocksElement, blockConfig) {
    const that = this;
    return new Promise((resolve, reject) => {
      that.type = blockConfig.type;
      that.index = blockConfig._index;
      var blockInstance = null;

      if (!that.type) {
        return console.warn('No `type` field found in block ' + that.index);
      }

      const customSelector = blockConfig.id && blockConfig.id.indexOf('#') === 0 ? `id="${blockConfig.id.replace('#', '')}"` : '';
      const child = utils.div(`<div class="block ${css$j.block} b b${that.index}">
    <div class="backDecoration ${css$j.bdecoration}"></div>
    <div ${customSelector} class="blockContainer ${css$j.inner}"></div>
    <div class="frontDecoration ${css$j.fdecoration}"></div>
  </div>`);
      utils.globs(child, blockConfig);
      utils.props(child, blockConfig);
      const blockContainer = child.querySelector('.blockContainer');

      if (!blocks[that.type]) {
        console.log(`block "${that.type}" not found`);
      } else {
        const prom = new blocks[that.type](blockContainer, blockConfig);
        Promise.all([prom]).then(data => {
          blockInstance = data[0];
          resolve(that);
        });
      }

      that.beforeDestroy = () => {
        if (blockInstance && blockInstance.beforeDestroy) blockInstance.beforeDestroy();
      };

      that.stepForward = (step, index) => {
        if (blockInstance.stepForward) blockInstance.stepForward(step, index);
      };

      that.destroy = () => {
        if (blockInstance && blockInstance.destroy) blockInstance.destroy();
      };

      blocksElement.appendChild(child);
      blockConfig._el = child;
    });
  };

  const Transition = wrapper => {
    const functor = function (wrapper) {
      this.clear = prefix => {
        wrapper.classList.remove(prefix);
        return this;
      };

      this.init = prefix => {
        wrapper.classList.add(prefix, 'p-scene-enter-transition', 'p-scene-enter-start');
        return this;
      };

      this.start = prefix => {
        setTimeout(() => {
          wrapper.classList.remove('p-scene-enter-start');
          wrapper.classList.add('p-scene-enter-end');
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

  const Scene = function (cont, sceneConfig, projectConfig, rootElement) {
    const that = this;
    return new Promise((resolve, reject) => {
      let blocks = [];
      const modInstances = [];
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

          if (!sceneConfig.modules.hasOwnProperty(k)) {
            sceneConfig.modules[k] = projectConfig.modules[k];
          }
        }
      }
      /*
      Check if transition has been defined at project level or scene level
      */


      const hasTransition = sceneConfig.transition || projectConfig.transition;
      /*
      Create the wrapper template
      */

      let currentStep = 0;
      sceneConfig._steps = [];
      const steps = sceneConfig._steps;
      const noResize = sceneConfig.noResize || projectConfig.noResize ? css$i.noResize : '';
      const child = utils.div(`<div 
      class="s ${css$i.sceneContainer}">
      <div class="sceneObject ${css$i.scene} ${noResize}">
        <div class="${css$i.wrapper}">
            <div class="${css$i.content}">
                <div class="layout blocksContainer ${css$i.viewport}"></div>
                <div class="frontContainer ${css$i.fcontainer}"></div>
            </div>
        </div>
      </div>
  </div>`);
      utils.globs(child, sceneConfig);
      utils.props(child, sceneConfig);
      sceneConfig._el = child;
      sceneConfig._rootElement = rootElement;
      sceneConfig._mode = projectConfig.mode;
      /*
      Init blocks if any
      */

      const cblocks = sceneConfig.blocks;
      const blockPromises = [];
      cblocks.forEach((blockConfig, i) => {
        blockConfig._index = i;
        blockConfig._portrait = projectConfig._orientation === 'portrait';
        blockConfig._mode = projectConfig.mode;
        blockConfig._rootElement = rootElement;
        blockConfig._sceneConfig = sceneConfig;
        const blocksContainer = child.querySelector('.blocksContainer');
        blockPromises.push(new Block(blocksContainer, blockConfig));
      });

      const initModules = () => {
        if (sceneConfig.modules) {
          for (const k in sceneConfig.modules) {
            const modConfig = sceneConfig.modules[k];
            const Mod = modules[k];
            if (!Mod) console.log(`Module "${k}" not found. Maybe you forgot to include it.`);

            if (Mod) {
              if (modConfig) {
                const mod = new Mod(child.querySelector(`.${css$i.content}`), modConfig, sceneConfig);
                modInstances.push(mod);
              }
            }
          }
        }
      };

      const initTransition = () => {
        if (hasTransition) {
          const wrap = child.querySelector('.sceneObject');
          const dir = sceneConfig._presentatransdir === 'backward' ? 'to-left' : 'to-right';
          Transition(wrap).init(dir);
        }
      };

      const startTransition = () => {
        if (hasTransition) {
          const wrap = child.querySelector('.sceneObject');
          Transition(wrap).start();
          setTimeout(() => {
            Transition(wrap).swap();
          }, projectConfig._transitionDestroyDelay);
        }
      };
      /*
      Public method called by the container to init the destroy phase
      */


      that.destroyAfter = _t => {
        if (hasTransition) {
          const wrap = child.querySelector('.sceneObject');
          const odir = sceneConfig._presentatransdir === 'backward' ? 'to-right' : 'to-left';
          const ndir = sceneConfig._presentatransdir === 'backward' ? 'to-left' : 'to-right';
          Transition(wrap).clear(odir).end(ndir);
        }

        const t = _t || 0;
        modInstances.forEach(mod => {
          if (mod.beforeDestroy) mod.beforeDestroy();
        });
        blocks.forEach(block => {
          if (block.beforeDestroy) block.beforeDestroy();
        });
        setTimeout(() => {
          that.destroy();
          child.parentNode.removeChild(child);
        }, t);
      };
      /*
      Public method called by the container move forward the step progress
      */


      that.stepForward = () => {
        if (currentStep < steps.length) {
          const stepData = steps[currentStep];
          modInstances.forEach(mod => {
            if (mod.stepForward) mod.stepForward(stepData, currentStep);
          });
          blocks.forEach(block => {
            if (block.stepForward) block.stepForward(stepData, currentStep);
          });
          currentStep++;
        }
      };
      /*
      Immediate destroy for garbage collection
      */


      that.destroy = () => {
        modInstances.forEach(mod => {
          if (mod.destroy) mod.destroy();
        });
        blocks.forEach(block => {
          if (block.destroy) block.destroy();
        });
      };

      that.sceneConfig = sceneConfig;
      cont.appendChild(child);
      initTransition();
      initModules();
      Promise.all(blockPromises).then(data => {
        blocks = data;
        startTransition();
        resolve(that);
      });
    });
  };

  const Container = function (rootElement, projectConfig) {
    /*
      Init the wrapper
    */
    rootElement.classList.add('presenta');
    const child = utils.div(`<div class="${css$g.mainwrapper}"></div>`);
    child.setAttribute('tabindex', '0');
    utils.globs(child, projectConfig);
    utils.props(child, projectConfig);
    rootElement.appendChild(child);
    let perPage = projectConfig.perPage ? parseInt(projectConfig.perPage) : 1;
    if (perPage < 1) perPage = 1;
    /*
      Init the container
    */

    const supercont = utils.div(`<div class="b ${css$g.superContainer}"></div>`);
    const cont = utils.div(`<div class="a ${css$g.container}"></div>`);
    child.appendChild(supercont);
    supercont.appendChild(cont);
    const scenes = projectConfig.scenes;
    var currentScenes = [];

    const swapScenes = (index, dir) => {
      const sceneProms = [];

      for (let i = 0; i < perPage; ++i) {
        const idx = index + i;

        if (idx < scenes.length) {
          const sceneConfig = scenes[idx];
          sceneConfig._presentatransdir = dir;
          sceneConfig._router = router;
          sceneProms.push(new Scene(cont, sceneConfig, projectConfig, child));
        }
      }

      Promise.all(sceneProms).then(data => {
        currentScenes.forEach(s => {
          s.sceneConfig._presentatransdir = dir;
          s.destroyAfter(projectConfig._transitionDestroyDelay);
        });

        if (perPage > 1) {
          data.forEach((s, i) => {
            const div = s.sceneConfig._el;
            const w = 100 / perPage + '%';
            const l = 100 / perPage * i + '%';
            div.style.width = w;
            div.style.left = l;
          });
        }

        currentScenes = data;
      });
    };
    /*
      Init the router
    */


    const router = new Router(child, projectConfig);
    router.on('nextIndex', evt => {
      swapScenes(evt.currentIndex, 'foreward');
    });
    router.on('prevIndex', evt => {
      swapScenes(evt.currentIndex, 'backward');
    });
    router.on('stepChanged', evt => {
      currentScenes.forEach(s => {
        s.stepForward();
      });
    });
    router.on('init', evt => {
      swapScenes(evt.currentIndex, 'foreward');
    });

    if (window.ResizeObserver) {
      const resizeObserver = new ResizeObserver(entries => {
        utils.fit(cont, projectConfig, rootElement);
      });
      resizeObserver.observe(child);
    }

    utils.fit(cont, projectConfig, rootElement);

    this.destroy = () => {
      currentScenes.forEach(s => {
        s.destroy();
      });
    };

    this.router = router;
    this.config = projectConfig;
  };

  const installed = {};
  const listeners = [];
  let loading = false;

  const Install = function (config) {
    return new Promise((resolve, reject) => {
      let len = 0;
      let cnt = 0;
      if (config.length === 0) resolve();
      config.forEach(s => {
        const addSource = url => {
          setTimeout(() => {
            const newScript = document.createElement('script');

            newScript.onerror = err => {
              console.log('[Plugin error]', err);
              cnt++;

              if (cnt === len) {
                resolve();
                listeners.forEach(p => {
                  p.resolve();
                });
                loading = false;
              }
            };

            newScript.onload = ldr => {
              console.log('[Plugin loaded]');
              cnt++;

              if (cnt === len) {
                resolve();
                listeners.forEach(res => {
                  res();
                });
                loading = false;
              }
            };

            document.body.appendChild(newScript);
            newScript.src = url;
          }, len);
        };

        const addNotifier = url => {
          listeners.push(resolve);
          cnt++;
        };

        len++;

        if (!installed[s.url]) {
          loading = true;
          addSource(s.url);
          installed[s.url] = s;
        } else {
          if (loading) {
            addNotifier(s.url);
          } else {
            resolve();
          }
        } // if (len === 0) resolve()

      });
    });
  };

  var css_248z$T = ".style_group__2AqP-,.style_group__2AqP->div{width:100%;height:100%;position:relative}.style_gblock__3SGer{background:none}";
  var css$k = {"group":"style_group__2AqP-","gblock":"style_gblock__3SGer"};
  styleInject(css_248z$T);

  const group = function (el, config) {
    const blocks = config.blocks;
    const instBlocks = [];
    const child = utils.div(`<div class="${css$k.group}">
    <div class="layout"></div>
  </div>`); // u.globs(child, config)
    // u.props(child, config)

    const cont = child.querySelector('.layout');
    blocks.forEach((blockConfig, i) => {
      blockConfig.index = i;
      instBlocks.push(new Block(cont, blockConfig));

      blockConfig._el.classList.add(css$k.gblock);
    });
    el.appendChild(child);
  };

  group.init = () => {// u.addGlob(['layout'])
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
        fullscreen: true,
        hidden: true,
        limitswitch: true,
        cache: true
      },
      modules: {
        steps: true
      },
      plugins: [],
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

  const plugInit = (all, plugs, store) => {
    const activeKeys = Object.keys(plugs);
    activeKeys.forEach(k => {
      const p = all[k];
      if (p && p.init) p.init(plugs[k]);
      store.push({
        plugin: p,
        conf: plugs[k],
        key: k
      });
    });
  };

  var pluginsInit = (config => {
    const plugins = [];
    plugInit(controllers, config.controllers, plugins);
    plugInit(modules, config.modules, plugins);
    const blocksKeysArr = [];
    config.scenes.forEach(s => {
      s.blocks.forEach(b => {
        if (blocksKeysArr.indexOf(b.type) === -1) blocksKeysArr.push(b.type);
      });
    });
    const blocksKeys = [];
    blocksKeysArr.forEach(d => blocksKeys[d] = true);
    plugInit(blocks, blocksKeys, plugins);
    const all = [];
    plugins.forEach(plug => {
      const p = plug.plugin;
      const c = plug.conf;

      if (p && p.run) {
        all.push(p.run(config, c));
      }
    });
    return all;
  });

  var validate = (config => {
    const err = [];

    if (config.version) {
      err.push({
        message: 'Config version is different from Library version'
      });
    }

    if (!config.scenes) {
      err.push({
        hard: true,
        message: 'No `scenes` array found'
      });
    }

    config.scenes.forEach((s, i) => {
      if (!s.blocks) {
        err.push({
          hard: true,
          message: `No 'blocks' array in scene ${i} found`
        });
      }
    });

    if (config.scenes.length === 0) {
      err.push({
        hard: true,
        message: '`scenes` is empty'
      });
    }

    return err;
  });

  const Presenta = function (el, config) {
    if (!el || !config) return console.log('Missing required parameters, wrapper or config.');
    const hasErr = validate(config);
    const isBlocking = hasErr.filter(d => d.hard);

    if (isBlocking.length > 0) {
      return new Promise((resolve, reject) => {
        reject(hasErr);
      });
    }

    if (hasErr.length > 0) hasErr.forEach(e => console.warn(e.message));
    defaults(config);
    const root = utils.select(el);
    config._root = root;
    const splash = new Splash(root, config);
    return new Promise((resolve, reject) => {
      new Install(config.plugins).then(() => {
        const all = pluginsInit(config);
        Promise.all(all).then(values => {
          resolve(new Container(root, config));
          splash.destroy();
        });
      });
    });
  };

  add$2('group', group); // this to avoid circular dependencies warning, since removed implicit inclusion in block types

  Presenta.version = version;
  Presenta.colors = globals.colors;
  Presenta.fonts = globals.fonts;
  Presenta.transitions = globals.transitions;
  Presenta.layouts = globals.layouts;
  Presenta.colorvars = globals.colorvars;
  Presenta.scenevars = globals.scenevars;
  Presenta.addBlock = add$2;
  Presenta.addController = add;
  Presenta.addModule = add$1;
  Presenta.intalled = {
    controllers,
    modules,
    blocks
  };
  Presenta.addGlob = utils.addGlob;
  Presenta.addProp = utils.addProp;
  Presenta.io = utils.io;

  Presenta.use = plugin => {
    plugin.install(Presenta);
  };

  return Presenta;

})));
