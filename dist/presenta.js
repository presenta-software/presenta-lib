// https://lib.presenta.cc v0.1.0 - BSD-3-Clause License - Copyright 2020 Fabio Franchino
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Presenta = factory());
}(this, (function () { 'use strict';

  var version = "0.1.0";

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

  var css_248z$1 = ".colorVar__main,:root{--colorBack:#fff;--colorFore:#000;--colorAccent:#444;--colorAlt:#ddd}.colorVar__sec{--colorBack:#000;--colorAccent:#999}.colorVar__alt,.colorVar__sec{--colorFore:#fff;--colorAlt:#ccc}.colorVar__alt{--colorBack:#444;--colorAccent:#fff}";
  styleInject(css_248z$1);

  var css_248z$2 = ".colors__adele,.colors__adele .colorVar__main,.presenta .colors__adele.colorVar__main{--colorBack:#000;--colorFore:#fff;--colorAccent:#eeff2e;--colorAlt:#de1318}.colors__adele .colorVar__sec,.presenta .colors__adele.colorVar__sec{--colorBack:#eeff2e;--colorFore:#000;--colorAccent:#de1318;--colorAlt:#fff}.colors__adele .colorVar__alt,.presenta .colors__adele.colorVar__alt{--colorBack:#de1318;--colorFore:#eeff2e;--colorAccent:#fff;--colorAlt:#000}";
  styleInject(css_248z$2);

  var css_248z$3 = ".colors__belle,.colors__belle .colorVar__main,.presenta .colors__belle.colorVar__main{--colorBack:#a9dbd5;--colorFore:#000;--colorAccent:#fff;--colorAlt:#38999d}.colors__belle .colorVar__sec,.presenta .colors__belle.colorVar__sec{--colorBack:#000;--colorFore:#a9dbd5;--colorAccent:#fff;--colorAlt:#38999d}.colors__belle .colorVar__alt,.presenta .colors__belle.colorVar__alt{--colorBack:#fff;--colorFore:#38999d;--colorAccent:#a9dbd5;--colorAlt:#000}";
  styleInject(css_248z$3);

  var css_248z$4 = ".colors__cati,.colors__cati .colorVar__main,.presenta .colors__cati.colorVar__main{--colorBack:#e5ff9d;--colorFore:#1c003f;--colorAccent:#69567c;--colorAlt:#fff}.colors__cati .colorVar__sec,.presenta .colors__cati.colorVar__sec{--colorBack:#1c003f;--colorFore:#fff;--colorAccent:#e5ff9d;--colorAlt:#69567c}.colors__cati .colorVar__alt,.presenta .colors__cati.colorVar__alt{--colorBack:#69567c;--colorFore:#e5ff9d;--colorAccent:#fff;--colorAlt:#1c003f}";
  styleInject(css_248z$4);

  var css_248z$5 = ".colors__dania,.colors__dania .colorVar__main,.presenta .colors__dania.colorVar__main{--colorBack:#d0caa9;--colorFore:#30302f;--colorAccent:#ec4a25;--colorAlt:#fff}.colors__dania .colorVar__sec,.presenta .colors__dania.colorVar__sec{--colorBack:#30302f;--colorFore:#d0caa9;--colorAccent:#ec4a25;--colorAlt:#fff}.colors__dania .colorVar__alt,.presenta .colors__dania.colorVar__alt{--colorBack:#ec4a25;--colorFore:#fff;--colorAccent:#d0caa9;--colorAlt:#30302f}";
  styleInject(css_248z$5);

  var css_248z$6 = ".colors__elane,.colors__elane .colorVar__main,.presenta .colors__elane.colorVar__main{--colorBack:#3b7bc3;--colorFore:#f9fb45;--colorAccent:#fff;--colorAlt:#000}.colors__elane .colorVar__sec,.presenta .colors__elane.colorVar__sec{--colorBack:#000;--colorFore:#f9fb45;--colorAccent:#fff;--colorAlt:#3b7bc3}.colors__elane .colorVar__alt,.presenta .colors__elane.colorVar__alt{--colorBack:#f9fb45;--colorFore:#000;--colorAccent:#3b7bc3;--colorAlt:#fff}";
  styleInject(css_248z$6);

  var css_248z$7 = ".colors__flo,.colors__flo .colorVar__main,.presenta .colors__flo.colorVar__main{--colorBack:#ebded1;--colorFore:#0a47d1;--colorAccent:#fb4138;--colorAlt:#fff}.colors__flo .colorVar__sec,.presenta .colors__flo.colorVar__sec{--colorBack:#0a47d1;--colorFore:#ebded1;--colorAccent:#fff;--colorAlt:#fb4138}.colors__flo .colorVar__alt,.presenta .colors__flo.colorVar__alt{--colorBack:#fb4138;--colorFore:#fff;--colorAccent:#ebded1;--colorAlt:#0a47d1}";
  styleInject(css_248z$7);

  var css_248z$8 = ".colors__gina,.colors__gina .colorVar__main,.presenta .colors__gina.colorVar__main{--colorBack:#322067;--colorFore:#feb8ba;--colorAccent:#449eaf;--colorAlt:#fff}.colors__gina .colorVar__sec,.presenta .colors__gina.colorVar__sec{--colorBack:#feb8ba;--colorFore:#322067;--colorAccent:#fff;--colorAlt:#449eaf}.colors__gina .colorVar__alt,.presenta .colors__gina.colorVar__alt{--colorBack:#fff;--colorFore:#322067;--colorAccent:#449eaf;--colorAlt:#feb8ba}";
  styleInject(css_248z$8);

  var css_248z$9 = ".colors__hedy,.colors__hedy .colorVar__main,.presenta .colors__hedy.colorVar__main{--colorBack:#f9ffb1;--colorFore:#072020;--colorAccent:#ec4225;--colorAlt:#9eb0bb}.colors__hedy .colorVar__sec,.presenta .colors__hedy.colorVar__sec{--colorBack:#072020;--colorFore:#f9ffb1;--colorAccent:#ec4225;--colorAlt:#9eb0bb}.colors__hedy .colorVar__alt,.presenta .colors__hedy.colorVar__alt{--colorBack:#ec4225;--colorFore:#f9ffb1;--colorAccent:#c5dbe9;--colorAlt:#072020}";
  styleInject(css_248z$9);

  var css_248z$a = ".colors__irma,.colors__irma .colorVar__main,.presenta .colors__irma.colorVar__main{--colorBack:#ffe600;--colorFore:#000;--colorAccent:#ff6400;--colorAlt:#fff}.colors__irma .colorVar__sec,.presenta .colors__irma.colorVar__sec{--colorBack:#000;--colorFore:#ffe600;--colorAccent:#fff;--colorAlt:#ff6400}.colors__irma .colorVar__alt,.presenta .colors__irma.colorVar__alt{--colorBack:#ff6400;--colorFore:#fff;--colorAccent:#ffe600;--colorAlt:#000}";
  styleInject(css_248z$a);

  const colors = ['adele', 'belle', 'cati', 'dania', 'elane', 'flo', 'gina', 'hedy', 'irma'];
  const colorvars = ['main', 'sec', 'alt'];

  var css_248z$b = ":root{--fontHeading:Georgia,\"Times New Roman\",Times,serif;--fontText:\"Trebuchet MS\",\"Lucida Sans Unicode\",\"Lucida Grande\",\"Lucida Sans\",Arial,sans-serif}";
  styleInject(css_248z$b);

  var css_248z$c = "@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Roboto+Mono:ital,wght@0,400;0,700;1,400&display=swap\");.fonts__cardinal{--fontHeading:\"Roboto Mono\",monospace;--fontText:\"Montserrat\",sans-serif}";
  styleInject(css_248z$c);

  var css_248z$d = "@import url(\"https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Work+Sans&display=swap\");.fonts__corvid{--fontHeading:\"Work Sans\",sans-serif;--fontText:\"Playfair Display\",serif}";
  styleInject(css_248z$d);

  var css_248z$e = "@import url(\"https://fonts.googleapis.com/css2?family=Roboto+Slab&family=Carrois+Gothic+SC&display=swap\");.fonts__creeper{--fontHeading:\"Roboto Slab\",serif;--fontText:\"Carrois Gothic SC\",sans-serif}";
  styleInject(css_248z$e);

  var css_248z$f = "@import url(\"https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Open+Sans&display=swap\");.fonts__duck{--fontHeading:\"Amatic SC\",cursive;--fontText:\"Open Sans\",sans-serif}.fonts__duck h1,.fonts__duck h2,.fonts__duck h3{font-size:3rem}";
  styleInject(css_248z$f);

  var css_248z$g = "@import url(\"https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat&display=swap\");.fonts__finch{--fontHeading:\"Bebas Neue\",cursive;--fontText:\"Montserrat\",sans-serif}";
  styleInject(css_248z$g);

  var css_248z$h = "@import url(\"https://fonts.googleapis.com/css2?family=Anton&family=Lato&display=swap\");.fonts__flow{--fontHeading:\"Anton\",cursive;--fontText:\"Lato\",sans-serif}";
  styleInject(css_248z$h);

  var css_248z$i = "@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@400;900&display=swap\");.fonts__goose{--fontHeading:\"Inter\",cursive;--fontText:\"Inter\",sans-serif}";
  styleInject(css_248z$i);

  var css_248z$j = "@import url(\"https://fonts.googleapis.com/css2?family=Montserrat&family=Staatliches&display=swap\");.fonts__heron{--fontHeading:\"Staatliches\",cursive;--fontText:\"Montserrat\",sans-serif}.fonts__heron h1,.fonts__heron h2,.fonts__heron h3,.fonts__heron h4,.fonts__heron h5,.fonts__heron h6{line-height:90%}";
  styleInject(css_248z$j);

  const fonts = ['cardinal', 'corvid', 'creeper', 'duck', 'finch', 'flow', 'goose', 'heron'];

  var css_248z$k = ".transition__fadeIn .p-scene-enter-transition{transition:opacity .75s cubic-bezier(.2,.8,.05,.95)}.transition__fadeIn .p-scene-enter-start{opacity:0}.transition__fadeIn .p-scene-enter-end{opacity:1}";
  styleInject(css_248z$k);

  var css_248z$l = ".transition__hSlide .p-scene-enter-transition{transition:transform .75s cubic-bezier(.87,0,.13,1)}.transition__hSlide .to-right.p-scene-enter-start{transform:translateX(100%)}.transition__hSlide .to-right.p-scene-enter-end{transform:translateX(0)}.transition__hSlide .to-left.p-scene-enter-start{transform:translateX(-100%)}.transition__hSlide .to-left.p-scene-enter-end{transform:translateX(0)}.transition__hSlide .p-scene-leave-transition{transition:transform .75s cubic-bezier(.87,0,.13,1)}.transition__hSlide .to-right.p-scene-leave-start{transform:translateX(0)}.transition__hSlide .to-right.p-scene-leave-end{transform:translateX(-100%)}.transition__hSlide .to-left.p-scene-leave-start{transform:translateX(0)}.transition__hSlide .to-left.p-scene-leave-end{transform:translateX(100%)}";
  styleInject(css_248z$l);

  var css_248z$m = ".transition__vSlide .p-scene-enter-transition{transition:transform .75s cubic-bezier(.87,0,.13,1)}.transition__vSlide .to-right.p-scene-enter-start{transform:translateY(100%)}.transition__vSlide .to-right.p-scene-enter-end{transform:translateY(0)}.transition__vSlide .to-left.p-scene-enter-start{transform:translateY(-100%)}.transition__vSlide .to-left.p-scene-enter-end{transform:translateY(0)}.transition__vSlide .p-scene-leave-transition{transition:transform .75s cubic-bezier(.87,0,.13,1)}.transition__vSlide .to-right.p-scene-leave-start{transform:translateY(0)}.transition__vSlide .to-right.p-scene-leave-end{transform:translateY(-100%)}.transition__vSlide .to-left.p-scene-leave-start{transform:translateY(0)}.transition__vSlide .to-left.p-scene-leave-end{transform:translateY(100%)}";
  styleInject(css_248z$m);

  var css_248z$n = ".transition__slideOver .p-scene-enter-transition{transition:all .75s cubic-bezier(.2,.8,.05,.95)}.transition__slideOver .p-scene-enter-start{transform:translateY(-150%)}.transition__slideOver .p-scene-enter-end{transform:translateY(0)}.transition__slideOver .p-scene-leave-transition{transition:all .75s cubic-bezier(.2,.8,.05,.95)}.transition__slideOver .p-scene-leave-start{transform:scale(1)}.transition__slideOver .p-scene-leave-end{transform:scale(.5)}";
  styleInject(css_248z$n);

  const transitions = ['fadeIn', 'hSlide', 'vSlide', 'slideOver'];

  var css_248z$o = ":root{--scenePadding:0;--sceneBackColor:none}.sceneVar__a{--scenePadding:0.5rem}.sceneVar__a,.sceneVar__b{--sceneBackColor:var(--colorFore)}.sceneVar__b{--scenePadding:2rem}.sceneVar__c{--scenePadding:3.5rem}.sceneVar__c,.sceneVar__d{--sceneBackColor:var(--colorFore)}.sceneVar__d{--scenePadding:0 4rem 4rem 0}.sceneVar__e{--scenePadding:4rem 0rem 4rem 0rem;--sceneBackColor:var(--colorFore)}";
  styleInject(css_248z$o);

  const scenevars = ['a', 'b', 'c', 'd', 'e'];

  var css_248z$p = ":root{--blockWeight:1;--blockPadding:0;--blockOpacity:1;--blockBlend:unset}.blockVar__a{--blockPadding:0.5rem}.blockVar__b{--blockPadding:1.5rem}.blockVar__c{--blockPadding:3rem}.blockVar__d{--blockPadding:0 3rem 3rem 0}.blockVar__e{--blockPadding:2rem 0rem 2rem 0rem}.blockVar__f{--blockPadding:1rem 0rem 3rem 0rem}";
  styleInject(css_248z$p);

  const blockvars = ['a', 'b', 'c'];

  var css_248z$q = ".layout{display:flex}.layout>div{height:100%}.landscape .layout{flex-direction:row}.portrait .layout{flex-direction:column}.layout__cols .layout{display:flex;flex-direction:row}.layout__cols .layout>div{height:100%}.layout__rows .layout{display:flex;flex-direction:column}.layout__rows .layout>div{width:100%}.layout__stack .layout{position:relative}.layout__stack .layout>div{position:absolute;top:0;left:0;width:100%;height:100%}.layout__stack .layout>div:not(:first-child){background:none}.layout__stack .layout>div:first-child:after{content:\"\";position:absolute;left:0;top:0;width:100%;height:100%;background-color:var(--colorBack);opacity:.7}.layout__pile .layout{position:relative}.layout__pile .layout>div{position:absolute;top:0;left:0;width:100%;height:100%}.layout__head .layout{display:flex;flex-direction:column}.layout__head .layout>div{width:100%}.layout__head .layout>div:last-child{flex:5}.layout__foot .layout{display:flex;flex-direction:column}.layout__foot .layout>div{width:100%}.layout__foot .layout>div:first-child{flex:5}.layout__left .layout{display:flex;flex-direction:row}.layout__left .layout>div{width:100%}.layout__left .layout>div:first-child{flex:2}.layout__right .layout{display:flex;flex-direction:row}.layout__right .layout>div{width:100%}.layout__right .layout>div:last-child{flex:2}";
  styleInject(css_248z$q);

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

  var css_248z$r = ":root{--arrowsOpacity:1;--arrowsVerticalPosition:center;--arrowsHorizontalPosition:space-between;--arrowsPadding:10px}.style_arrows__2J_-T{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;transition:opacity .35s;justify-content:var(--arrowsHorizontalPosition);--arrowsColor:var(--colorFore)}.style_left__199CL,.style_right__2Bn_p{height:100%;display:flex;align-items:var(--arrowsVerticalPosition);justify-content:center;cursor:pointer;padding:var(--arrowsPadding);pointer-events:all}.style_ui__1jWCU{width:20px;height:20px;transition:background-color .3s ease-in-out;width:0;height:0;border-top:10px solid transparent;border-bottom:10px solid transparent;opacity:var(--arrowsOpacity)}.style_left__199CL .style_ui__1jWCU{border-right:10px solid var(--arrowsColor)}.style_right__2Bn_p .style_ui__1jWCU{border-left:10px solid var(--arrowsColor)}.style_arrows__2J_-T.style_hide__4RZI1{opacity:0}";
  var css = {"arrows":"style_arrows__2J_-T","left":"style_left__199CL","right":"style_right__2Bn_p","ui":"style_ui__1jWCU","hide":"style_hide__4RZI1"};
  styleInject(css_248z$r);

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

  // import md5 from 'md5'
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

  utils.addProp(['arrowsOpacity', 'arrowsVerticalPosition', 'arrowsHorizontalPosition', 'arrowsPadding']);

  const arrows = function (rootElement, router, ctrlConfig, projectConfig) {
    let timer = null;
    let numInteraction = 0;
    const child = utils.div(`<div class="${css.arrows}"></div>`);
    const left = utils.div(`<div class="${css.left}"><div class="${css.ui}"></div></div>`);
    child.appendChild(left);
    const right = utils.div(`<div class="${css.right}"><div class="${css.ui}"></div></div>`);
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

    const setMouseMove = () => {
      numInteraction++;

      if (numInteraction === 2) {
        document.addEventListener('mousemove', e => {
          scheduleForHide();
        });
      }
    };

    router.on('indexChanged', e => {
      setMouseMove();
      left.style.visibility = 'visible';
      right.style.visibility = 'visible';
      if (e.isFirst) left.style.visibility = 'hidden';
      if (e.isLast && e.totalSteps === e.currentStep) right.style.visibility = 'hidden';
    });

    const scheduleForHide = () => {
      clearTimeout(timer);
      child.classList.remove(css.hide);
      timer = setTimeout(() => {
        child.classList.add(css.hide);
      }, 1500);
    }; // scheduleForHide()

  };

  var css_248z$s = ".style_black__3Nszx{width:100%;height:100%;position:absolute;top:0;left:0;background-color:#000;opacity:0;pointer-events:none;transition:opacity .5s cubic-bezier(.8,.2,.2,.8);z-index:999999}";
  var css$1 = {"black":"style_black__3Nszx"};
  styleInject(css_248z$s);

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

  const preloads = [];

  const preload = function (rootElement, router, ctrlConfig, projectConfig) {
    projectConfig.scenes.forEach(s => {
      s.blocks.forEach(b => {
        const blk = preloads.find(d => d.type === b.type);

        if (blk) {
          addLink(b[blk.field], blk.as);
        }
      });
    });
  };

  const addPreload = ob => {
    preloads.push(ob);
  };

  utils.io.addPreload = addPreload;

  var css_248z$t = ":root{--progressbarHeight:5px;--progressbarBottom:initial}.style_progressbar__37EFM{--progressbarColor:var(--colorFore);width:100%;height:100%;pointer-events:none}.style_bar__3nLkk{width:0;height:var(--progressbarHeight);position:absolute;bottom:var(--progressbarBottom);left:0;background-color:var(--progressbarColor);transition:width .5s cubic-bezier(.8,.2,.2,.8)}";
  var css$2 = {"progressbar":"style_progressbar__37EFM","bar":"style_bar__3nLkk"};
  styleInject(css_248z$t);

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

  var css_248z$u = ":root{--pagenumTextAlign:right;--pagenumPadding:5px;--pagenumFontSize:10px;--pagenumBackColor:none;--pagenumFont:var(--fontText)}.style_pagenum__1OmQh{--pagenumColor:var(--colorFore);width:100%;height:100%;position:absolute;top:0;left:0;display:flex;align-items:flex-end;pointer-events:none}.style_content__3u2tr{width:100%;text-align:var(--pagenumTextAlign);padding:var(--pagenumPadding);font-size:var(--pagenumFontSize);color:var(--pagenumColor);font-family:var(--pagenumFont);background-color:var(--pagenumBackColor);transition:all .3s ease-in-out}";
  var css$3 = {"pagenum":"style_pagenum__1OmQh","content":"style_content__3u2tr"};
  styleInject(css_248z$u);

  utils.addProp(['pagenumTextAlign', 'pagenumPadding', 'pagenumFontSize', 'pagenumFont']);

  const pagenum = function (rootElement, router, ctrlConfig, projectConfig) {
    const child = utils.div(`<div class="${css$3.pagenum}"></div>`);
    const content = utils.div(`<div class="${css$3.content}"></div>`);
    child.appendChild(content);
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

  var css_248z$v = ".style_limitswitch__3g8Lq{pointer-events:none;opacity:0;background-color:var(--colorAccent);width:100%;height:100%;position:absolute;top:0;left:0}.style_signalSet__GRA42{opacity:.75}.style_signalOut__2qd5k{transition:opacity .35s ease-out;opacity:0}";
  var css$4 = {"limitswitch":"style_limitswitch__3g8Lq","signalSet":"style_signalSet__GRA42","signalOut":"style_signalOut__2qd5k"};
  styleInject(css_248z$v);

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
    limitswitch
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

  var css_248z$w = ".style_step__2k6dh{transition:opacity .5s ease-in-out}.style_initState__3wzFT{opacity:0}";
  var css$5 = {"step":"style_step__2k6dh","initState":"style_initState__3wzFT"};
  styleInject(css_248z$w);

  const steps = function (sceneElement, modConfig, sceneConfig) {
    let allStepElements = [];
    let index = 0;
    sceneConfig.blocks.forEach(b => {
      const blockEl = b._el;
      const tag = typeof b.step === 'string' ? b.step : '.step';
      const blockStepElements = [].slice.call(blockEl.querySelectorAll(tag));
      blockStepElements.sort((a, b) => {
        return a.dataset.order - b.dataset.order;
      });
      blockStepElements.forEach(el => {
        el.classList.add(css$5.step, css$5.initState);
        const id = {
          sandbox: 'steps',
          index
        };

        sceneConfig._steps.push(id);

        index++;
      });
      allStepElements = allStepElements.concat(blockStepElements);
    });

    this.stepForward = step => {
      if (step.sandbox === 'steps') {
        const idx = step.index;
        const el = allStepElements[idx];
        el.classList.remove(css$5.initState);
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

  var css_248z$x = ".style_debug__1-XHT{display:flex;align-items:center;justify-content:center}.style_debug__1-XHT,.style_debug__1-XHT svg{width:100%;height:100%}";
  var css$6 = {"debug":"style_debug__1-XHT"};
  styleInject(css_248z$x);

  const debug = function (el, config) {
    sceneConfig._steps.push(1);

    const child = utils.div(`<div class="${css$6.debug}">
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

    this.beforeDestroy = () => {};

    this.stepForward = step => {};

    el.appendChild(child);
  };

  var css_248z$y = ".textVar__title{--textPadding:3rem;--textAlign:center;--textListAlign:center;--textFlexAlign:center;--textFlexJustify:center;--textSize:2.5rem}.textVar__text{--textAlign:left;--textListAlign:left;--textFlexJustify:flex-start;--textSize:1rem}.textVar__section,.textVar__text{--textPadding:2rem;--textFlexAlign:flex-start}.textVar__section{--textAlign:right;--textListAlign:right;--textFlexJustify:flex-end;--textSize:2rem}.textVar__mention{--textAlign:left;--textListAlign:left;--textFlexJustify:flex-start;--textSize:1.5rem}.textVar__mention,.textVar__suggest{--textPadding:2rem;--textFlexAlign:flex-end}.textVar__suggest{--textAlign:center;--textListAlign:center;--textFlexJustify:center;--textSize:0.8rem}.textStyle__a{--textboxpadding:0;--textboxbackcolor:var(--colorFore);--textboxradius:0;--textboxborder:0;--textboxshadow:0 0 0 var(--colorAccent);--textboxcolor:var(--colorBack)}";
  styleInject(css_248z$y);

  var css_248z$z = ":root{--textPadding:0;--textAlign:center;--textListAlign:left;--textFlexAlign:center;--textFlexJustify:center;--textSize:1rem}.style_text__3T1cl{color:var(--colorFore)}.style_inner__11UJC,.style_text__3T1cl{width:100%;height:100%;position:relative}.style_pretext__cLjqD{display:flex;width:100%;height:100%;align-items:var(--textFlexAlign);justify-content:var(--textFlexJustify)}.style_textbox__1Vb-V{padding:var(--textboxpadding);text-align:var(--textAlign);font-size:var(--textSize);color:var(--textboxcolor);--backmark:var(--colorAccent);--foremark:var(--colorBack);--textaccentcolor:var(--colorAccent);font-family:var(--fontText)}.style_itext__jz90o{border:var(--textboxborder) solid var(--colorAccent);padding:var(--textPadding);border-radius:var(--textboxradius);box-shadow:var(--textboxshadow);background-color:var(--textboxbackcolor)}.style_itext__jz90o img{object-fit:contain;height:4em;vertical-align:middle}.style_itext__jz90o mark{background-color:var(--backmark);color:var(--foremark);padding:.5rem;display:inline-block}.style_itext__jz90o high{color:var(--textaccentcolor)}.style_itext__jz90o bord{border:8px solid var(--backmark);padding:0 .5rem}.style_itext__jz90o a{color:var(--textaccentcolor);text-decoration:underline}.style_itext__jz90o blockquote{font-size:2em;font-weight:400;font-style:italic}.style_itext__jz90o blockquote,.style_itext__jz90o h1,.style_itext__jz90o h2,.style_itext__jz90o h3,.style_itext__jz90o h4,.style_itext__jz90o h5,.style_itext__jz90o h6,.style_itext__jz90o p,.style_itext__jz90o ul{margin:0}.style_itext__jz90o h1 b,.style_itext__jz90o h1 strong,.style_itext__jz90o h2 b,.style_itext__jz90o h2 strong,.style_itext__jz90o h3 b,.style_itext__jz90o h3 strong,.style_itext__jz90o h4 b,.style_itext__jz90o h4 strong,.style_itext__jz90o h5 b,.style_itext__jz90o h5 strong,.style_itext__jz90o h6 b,.style_itext__jz90o h6 strong{color:var(--textaccentcolor)}.style_itext__jz90o ol,.style_itext__jz90o ul{font-size:1.5em;line-height:1.1em;text-align:var(--textListAlign);margin:0;list-style-type:none;counter-reset:li;padding:.5rem 0}.style_itext__jz90o li{list-style-position:inside;margin-bottom:2px;padding:.25em .25em .25em .8em}.style_itext__jz90o ul li:before{content:\"\\2013\";display:inline-block;width:.8em;margin-left:-.8em}.style_itext__jz90o ol li:before{counter-increment:li;content:\".\" counter(li);display:inline-block;width:1.1em;margin-left:-1.3em;margin-right:.2em;text-align:right;direction:rtl}.style_itext__jz90o li p{display:inline}.style_itext__jz90o code,.style_itext__jz90o pre{text-align:left}.style_itext__jz90o h1,.style_itext__jz90o h2,.style_itext__jz90o h3,.style_itext__jz90o h4,.style_itext__jz90o h5,.style_itext__jz90o h6{font-family:var(--fontHeading);padding:.5rem 0}.style_itext__jz90o h1{font-size:2em}.style_itext__jz90o h2{font-size:1.5em}.style_itext__jz90o h3{font-size:1.17em}.style_itext__jz90o h4{font-size:1em}.style_itext__jz90o h5{font-size:.83em}.style_itext__jz90o h6{font-size:.67em}.style_itext__jz90o p{padding:.5rem 0}.style_itext__jz90o hr{border:1px solid var(--colorFore);margin:.5rem 0}.style_itext__jz90o h1:first-child,.style_itext__jz90o h1:last-child,.style_itext__jz90o h2:first-child,.style_itext__jz90o h2:last-child,.style_itext__jz90o h3:first-child,.style_itext__jz90o h3:last-child{padding:0}.style_itext__jz90o table{width:100%}.style_itext__jz90o tr{padding:0}.style_itext__jz90o td,.style_itext__jz90o th{padding:.5rem;border-bottom:1px solid var(--colorFore)}";
  var css$7 = {"text":"style_text__3T1cl","inner":"style_inner__11UJC","pretext":"style_pretext__cLjqD","textbox":"style_textbox__1Vb-V","itext":"style_itext__jz90o"};
  styleInject(css_248z$z);

  const text = function (el, config) {
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
    const child = utils.div(`<div class="c ${css$7.text}">
    <div class="${css$7.inner}">
      <div class="pretext ${css$7.pretext}">
        <div class="${css$7.textbox}">
          <div class="textContent ${css$7.itext} ${css$7.fadein}">
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
      const mel = child.querySelector('.' + css$7.inner);
      const mbox = mel.getBoundingClientRect();
      const el = child.querySelector('.' + css$7.textbox);
      const bbox = el.getBoundingClientRect();

      if (parseInt(mbox.width) < parseInt(bbox.width) || parseInt(mbox.height) < parseInt(bbox.height)) {
        fsize -= 0.1;
        return compute();
      } else {
        setTimeout(() => {
          child.querySelector('.' + css$7.inner).style.visibility = 'visible';
        });
      }
    };

    child.querySelector('.' + css$7.inner).style.visibility = 'hidden';
    setTimeout(compute);
  };

  text.init = () => {
    utils.addGlob(['textVar', 'textStyle']);
    utils.addProp(['textPadding', 'textAlign']);
    if (utils.io.addMarkdown) utils.io.addMarkdown({
      type: 'text',
      field: 'text'
    });
  };

  var css_248z$A = ":root{--embedPadding:0;--embedBackcolor:none;--embedPosterSize:cover;--embedPosterPosition:center}.style_inner__3WOWs{padding:var(--embedPadding);position:relative}.style_frame__28PUh{background-color:var(--embedBackcolor);position:relative}.style_embed__2Pre2,.style_frame__28PUh,.style_inner__3WOWs{width:100%;height:100%}.style_frame__28PUh>iframe{width:100%;height:100%;border:none}.style_loading__1w7wc{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:var(--colorFore);font-family:var(--fontText);background-color:var(--colorBack)}.style_loading__1w7wc mark{background-color:var(--colorAccent);color:var(--colorBack)}.style_blockmouse__3bXSl,.style_poster__1TOx3{position:absolute;top:0;left:0;width:100%;height:100%}.style_poster__1TOx3{background-color:var(--colorBack)}.style_poster__1TOx3 img{width:100%;height:100%;object-fit:var(--embedPosterSize);object-position:var(--embedPosterPosition)}";
  var css$8 = {"inner":"style_inner__3WOWs","frame":"style_frame__28PUh","embed":"style_embed__2Pre2","loading":"style_loading__1w7wc","blockmouse":"style_blockmouse__3bXSl","poster":"style_poster__1TOx3"};
  styleInject(css_248z$A);

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
    const coverFrame = `<div class="cover ${css$8.loading}"><h1>${msg}</h1></div>`;
    const blockPointer = config.blockPointer ? `<div class='${css$8.blockmouse}' />` : '';
    const posterFrame = config.poster ? `<div class="${css$8.poster}"><img src="${config.poster}" /></div>` : '';
    const child = utils.div(`<div class="c ${css$8.embed}">
    <div class="${css$8.inner}">
        <div class="${css$8.frame}">${iframe}</div>
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
        child.querySelector('.' + css$8.loading).style.display = 'none';
        if (posterFrame) child.querySelector('.' + css$8.poster).style.display = 'none';
      });
    }
  };

  embed.init = () => {
    utils.addProp(['embedPadding', 'embedBackcolor', 'embedPosterSize', 'embedPosterPosition']);
  };

  var css_248z$B = ":root{--imagePadding:0;--imageBorder:none;--imageShadow:none;--imageSize:cover;--imagePosition:center}.style_image__1fZIQ,.style_inner__3tyMU{width:100%;height:100%}.style_inner__3tyMU{display:flex}.style_preimg__2ypvx{overflow:hidden;flex:1;padding:var(--imagePadding)}.style_preimg__2ypvx img{width:100%;height:100%;border:var(--imageBorder);box-shadow:var(--imageShadow);object-fit:var(--imageSize);object-position:var(--imagePosition)}";
  var css$9 = {"image":"style_image__1fZIQ","inner":"style_inner__3tyMU","preimg":"style_preimg__2ypvx"};
  styleInject(css_248z$B);

  const image = function (el, config) {
    const url = config.url;
    const step = config.step ? 'step' : '';
    const imageschunk = `<div class="presentablock__image ${css$9.preimg}">
        <img src="${url}" />
      </div>`;
    const child = utils.div(`<div class="${css$9.image} ${step}">
    <div class="imagesContainer ${css$9.inner}">
        ${imageschunk}
    </div>
  </div>`);

    this.beforeDestroy = () => {};

    this.stepForward = step => {};

    el.appendChild(child);
  };

  image.init = () => {
    utils.addProp(['imagePadding', 'imageBorder', 'imageShadow', 'imageSize', 'imagePosition']);
    utils.io.addPreload({
      type: 'image',
      field: 'url',
      as: 'image'
    });
  };

  var css_248z$C = ":root{--videoSize:cover;--videoPosition:center}.style_video__1qbdJ{width:100%;height:100%;display:flex;align-items:center;justify-content:center}.style_video__1qbdJ video{width:100%;height:100%;object-fit:var(--videoSize);object-position:var(--videoPosition)}";
  var css$a = {"video":"style_video__1qbdJ"};
  styleInject(css_248z$C);

  const video = function (el, config) {
    const previewMode = config._mode === 'preview';
    const presentMode = config._mode === 'present';
    const poster = config.poster ? `poster=${config.poster}` : '';
    const loop = config.loop ? 'loop' : '';
    const muted = config.muted ? 'muted' : '';
    const autoplay = config.autoplay && presentMode ? 'autoplay' : '';
    const src = config.url ? `src=${config.url}` : '';
    const child = utils.div(`<div class="${css$a.video}">
    <video ${poster} ${src} ${loop} ${autoplay} ${muted}></video>
  </div>`);

    this.beforeDestroy = () => {
      config._rootElement.removeEventListener('keyup', setKeyListener);

      child.removeEventListener('click', toggleVideo);
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

    if (presentMode) {
      config._rootElement.addEventListener('keyup', setKeyListener);

      child.addEventListener('click', toggleVideo);
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
    utils.io.addPreload({
      type: 'video',
      field: 'url',
      as: 'video'
    });
  };

  var css_248z$D = ".solidVar__a{--solidColor:#000}.solidVar__a,.solidVar__b{--solidOpacity:.7;--solidBlend:none}.solidVar__b{--solidColor:#fff}.solidVar__c{--solidColor:var(--colorBack);--solidOpacity:1;--solidBlend:multiply}";
  styleInject(css_248z$D);

  var css_248z$E = ":root{--solidOpacity:1;--solidBlend:none;--solidColor:var(--colorAccent)}.style_solid__wiwvr{width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--solidColor);opacity:var(--solidOpacity);mix-blend-mode:var(--solidBlend)}";
  var css$b = {"solid":"style_solid__wiwvr"};
  styleInject(css_248z$E);

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
    const child = utils.div(`<div class="${css$b.solid}"></div>`);

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

  const add$2 = (type, module, override) => {
    if (blocks[type]) {
      return console.warn(`block type ${type} already defined`);
    }

    if (override && blocks[type]) {
      console.warn(`block type ${type} was overriden`);
    }

    blocks[type] = module;
  };

  var css_248z$F = ".container_mainwrapper__zelcO{outline:none}.container_container__3kBNh,.container_mainwrapper__zelcO{width:100%;height:100%;position:relative;overflow:hidden}.container_container__3kBNh>div{position:absolute;top:0;left:0;width:100%}";
  var css$c = {"mainwrapper":"container_mainwrapper__zelcO","container":"container_container__3kBNh"};
  styleInject(css_248z$F);

  var css_248z$G = ".router_router__2r4NQ{width:100%;height:100%;position:absolute;top:0;left:0;pointer-events:none}";
  var css$d = {"router":"router_router__2r4NQ"};
  styleInject(css_248z$G);

  const Router = function (rootElement, projectConfig) {
    const child = utils.div(`<div class="controller ${css$d.router}"></div>`);
    rootElement.appendChild(child);
    const scenes = projectConfig.scenes;

    const numScenes = () => scenes.length - 1;

    const listeners = {};
    const registeredIO = {};
    let currentIndex = 0;
    let currentStep = 0;
    let numSteps = 0;

    const setNumSteps = () => {
      numSteps = scenes[currentIndex] && scenes[currentIndex]._steps ? scenes[currentIndex]._steps.length : 0;
    }; // setNumSteps()


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
      if (currentIndex < numScenes()) {
        currentIndex++;
        currentStep = 0;
        this.notify(['nextIndex', 'indexChanged']);
      } else {
        currentIndex = numScenes();
        currentStep = 0;
        this.notify('end');
      }

      setNumSteps();
    };

    this.prevIndex = () => {
      if (currentIndex > 0) {
        currentIndex--;
        currentStep = 0;
        this.notify(['prevIndex', 'indexChanged']);
      } else {
        currentIndex = 0;
        currentStep = 0;
        this.notify('begin');
      }

      setNumSteps();
    };

    this.goto = v => {
      currentIndex = v < numScenes() ? v : numScenes();
      currentStep = 0;
      this.notify(['nextIndex', 'indexChanged']);
    };

    this.notify = evt => {
      const evts = Array.isArray(evt) ? evt : [evt];
      evts.forEach(ev => {
        if (ev === 'indexChanged') updateRouterWrapper();

        if (listeners[ev]) {
          listeners[ev].forEach(clb => {
            clb({
              currentIndex,
              currentStep,
              totalScenes: this.totalScenes(),
              totalSteps: numSteps,
              isFirst: this.isFirst(),
              isLast: this.isLast()
            });
          });
        }
      });
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

    this.totalSteps = () => numSteps;

    this.currentIndex = () => currentIndex;

    this.currentStep = () => currentStep;

    this.isFirst = () => currentIndex === 0;

    this.isLast = () => currentIndex === numScenes();

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
    setTimeout(() => {
      this.notify('init');
      setNumSteps();
    });
  };

  var css_248z$H = ".scene_sceneContainer__IgSpB{width:100%;height:100%;display:flex;align-items:center;justify-content:center;position:relative}.scene_scene__3uvTl{--presenta-sw:calc(var(--presenta-w)/var(--presenta-p)/var(--presenta-fz));--presenta-sh:calc(var(--presenta-h)/var(--presenta-p)/var(--presenta-fz));--presenta-scal:calc(var(--presenta-pw)/var(--presenta-p)/var(--presenta-pw)/var(--presenta-fz));width:var(--presenta-sw);height:var(--presenta-sh);font-family:serif;user-select:none}.scene_wrapper__3yr1k{width:var(--presenta-w);height:var(--presenta-h);transform:scale(1);transform:scale(var(--presenta-scal));transform-origin:top left;overflow:hidden;padding:var(--scenePadding);background-color:var(--sceneBackColor)}.scene_content__1rJf0{width:100%;height:100%;display:flex;flex-direction:column;overflow:hidden}.scene_fcontainer__1E_0g{top:0;left:0;width:100%;height:100%;position:absolute;pointer-events:none}.scene_viewport__3uNLS{width:100%;height:100%;position:relative;flex:1;overflow:hidden;display:flex;flex-direction:row}.scene_viewport__3uNLS>div{height:100%}";
  var css$e = {"sceneContainer":"scene_sceneContainer__IgSpB","scene":"scene_scene__3uvTl","wrapper":"scene_wrapper__3yr1k","content":"scene_content__1rJf0","fcontainer":"scene_fcontainer__1E_0g","viewport":"scene_viewport__3uNLS"};
  styleInject(css_248z$H);

  var css_248z$I = ".block_block__BWbaZ{background:var(--colorBack);width:100%;height:100%;flex:1;flex:var(--blockWeight);overflow:hidden;position:relative}.block_inner__3LS6s{width:100%;height:100%;padding:var(--blockPadding);opacity:var(--blockOpacity);mix-blend-mode:var(--blockBlend)}.block_bdecoration__3KJh-,.block_inner__3LS6s{top:0;left:0;width:100%;height:100%;position:absolute}.block_fdecoration__12tBw{pointer-events:none}";
  var css$f = {"block":"block_block__BWbaZ","inner":"block_inner__3LS6s","bdecoration":"block_bdecoration__3KJh-","fdecoration":"block_fdecoration__12tBw"};
  styleInject(css_248z$I);

  const Block = function (blocksElement, blockConfig) {
    this.type = blockConfig.type;
    this.index = blockConfig._index;
    var blockInstance = null;

    if (!this.type) {
      return console.warn('No `type` field found in block ' + this.index);
    }

    let step = 0;
    const child = utils.div(`<div class="block ${css$f.block} b b${this.index}">
    <div class="backDecoration ${css$f.bdecoration}"></div>
    <div class="blockContainer ${css$f.inner}"></div>
    <div class="frontDecoration ${css$f.fdecoration}"></div>
  </div>`);
    utils.globs(child, blockConfig);
    utils.props(child, blockConfig);
    const blockContainer = child.querySelector('.blockContainer');

    if (!blocks[this.type]) {
      console.log(`block "${this.type}" not found`);
    } else {
      blockInstance = new blocks[this.type](blockContainer, blockConfig);
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
    blockConfig._el = child;
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
    sceneConfig._steps = [];
    const steps = sceneConfig._steps;
    const child = utils.div(`<div 
      class="s ${css$e.sceneContainer}">
      <div class="sceneObject ${css$e.scene}">
        <div class="${css$e.wrapper}">
            <div class="${css$e.content}">
                <div class="layout blocksContainer ${css$e.viewport}"></div>
                <div class="frontContainer ${css$e.fcontainer}"></div>
            </div>
        </div>
      </div>
  </div>`);
    utils.globs(child, sceneConfig);
    utils.props(child, sceneConfig);
    sceneConfig._el = child;
    sceneConfig._rootElement = rootElement;
    this.el = child;
    /*
      Init blocks if any
    */

    const cblocks = sceneConfig.blocks;
    cblocks.forEach((blockConfig, i) => {
      blockConfig._index = i;
      blockConfig._portrait = projectConfig._orientation === 'portrait';
      blockConfig._mode = projectConfig.mode;
      blockConfig._rootElement = rootElement;
      const blocksContainer = child.querySelector('.blocksContainer');
      const block = new Block(blocksContainer, blockConfig);
      blocks.push(block);
    });
    /*
      Init modules if any
    */

    if (sceneConfig.modules) {
      for (const k in sceneConfig.modules) {
        const modConfig = sceneConfig.modules[k];
        const Mod = modules[k];
        if (!Mod) console.log(`Module "${k}" not found. Maybe you forgot to include it.`);

        if (Mod) {
          if (modConfig) {
            const mod = new Mod(child.querySelector(`.${css$e.content}`), modConfig, sceneConfig);
            modInstances.push(mod);
          }
        }
      }
    }
    /*
      Run the entering transition
    */


    if (hasTransition) {
      const wrap = child.querySelector('.sceneObject');
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
        this.destroy();
        child.parentNode.removeChild(child);
      }, t);
    };
    /*
      Public method called by the container move forward the step progress
    */


    this.stepForward = () => {
      if (currentStep < steps.length) {
        const stepData = steps[currentStep]; // blocks[idx].stepForward(stepData, currentStep) // need to find a way to notify a specific block

        modInstances.forEach(mod => {
          if (mod.stepForward) mod.stepForward(stepData, currentStep);
        });
        currentStep++;
      }
    };
    /*
      Immediate destroy for garbage collection
    */


    this.destroy = () => {
      modInstances.forEach(mod => {
        if (mod.destroy) mod.destroy();
      });
      blocks.forEach(block => {
        if (block.destroy) block.destroy();
      });
    };

    this.sceneConfig = sceneConfig;
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
      Init the wrapper
    */


    rootElement.classList.add('presenta');
    const child = utils.div(`<div class="${css$c.mainwrapper}"></div>`);
    child.setAttribute('tabindex', '0');
    utils.globs(child, projectConfig);
    utils.props(child, projectConfig);
    rootElement.appendChild(child);
    /*
      Init the container
    */

    const cont = utils.div(`<div class="a ${css$c.container}"></div>`);
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
    /*
      Init the router
    */


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

  var css_248z$J = ".style_group__2AqP-,.style_group__2AqP->div{width:100%;height:100%;position:relative}";
  var css$g = {"group":"style_group__2AqP-"};
  styleInject(css_248z$J);

  const group = function (el, config) {
    const blocks = config.blocks;
    const instBlocks = [];
    const child = utils.div(`<div class="${css$g.group}">
    <div class="layout"></div>
  </div>`); // u.globs(child, config)
    // u.props(child, config)

    const cont = child.querySelector('.layout');
    blocks.forEach((blockConfig, i) => {
      blockConfig.index = i;
      instBlocks.push(new Block(cont, blockConfig));
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
        limitswitch: true
      },
      modules: {
        steps: true
      },
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
    const plugins = { ...controllers,
      ...modules,
      ...blocks
    };

    for (const k in plugins) if (plugins[k].init) plugins[k].init();

    for (const k in plugins) if (plugins[k].run) plugins[k].run(config);

    return new Container(utils.select(el), config);
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
  Presenta.addGlob = utils.addGlob;
  Presenta.addProp = utils.addProp;
  Presenta.io = utils.io;

  Presenta.use = plugin => {
    plugin.install(Presenta);
  };

  return Presenta;

})));
