// https://lib.presenta.cc v1.0.0 - BSD-3-Clause License - Copyright 2021 Fabio Franchino
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Presenta = factory());
})(this, (function () { 'use strict';

  var version = "1.0.0";

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

  var css_248z$s = ":root{--fontHeading:Georgia,\"Times New Roman\",Times,serif;--fontText:\"Trebuchet MS\",\"Lucida Sans Unicode\",\"Lucida Grande\",\"Lucida Sans\",Arial,sans-serif;--colorBack:#fff;--colorFore:#000;--colorAccent:#444;--colorAlt:#ddd;--blockWeight:1;--blockPadding:0;--blockOpacity:1;--blockBlend:unset;--scenePadding:0;--sceneColorBack:#fff}.presenta *{box-sizing:border-box}.presenta{position:relative;--presenta-pw:960;--presenta-w:960px;--presenta-h:540px;--presenta-vp:960;--presenta-fz:1;--presenta-p:calc(var(--presenta-pw)/var(--presenta-vp))}";
  styleInject(css_248z$s);

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

  var css_248z$r = ":root{--arrowsOpacity:.5;--arrowsflexAlign:center;--arrowsflexJustify:space-between;--arrowsPadding:10px;--arrowsDirection:row}.style_arrows__2J_-T{position:absolute;top:0;left:0;width:100%;height:100%;z-index:100;transition:opacity .35s}.style_inner__1f-jA{width:100%;height:100%;display:flex;flex-direction:var(--arrowsDirection);justify-content:var(--arrowsflexJustify);color:var(--colorFore)}.style_vertical__2l0YR .style_inner__1f-jA{flex-direction:column}.style_left__199CL,.style_right__2Bn_p{height:100%;display:flex;align-items:var(--arrowsflexAlign);justify-content:center;cursor:pointer;padding:var(--arrowsPadding);pointer-events:all}.style_vertical__2l0YR .style_left__199CL,.style_vertical__2l0YR .style_right__2Bn_p{height:unset}.style_ui__1jWCU{width:24px;height:24px;transition:background-color .3s ease-in-out;pointer-events:none}.style_ui__1jWCU circle{stroke:none;fill:var(--colorBack);opacity:var(--arrowsOpacity)}.style_hide__4RZI1{opacity:0}";
  var css$l = {"arrows":"style_arrows__2J_-T","inner":"style_inner__1f-jA","vertical":"style_vertical__2l0YR","left":"style_left__199CL","right":"style_right__2Bn_p","ui":"style_ui__1jWCU","hide":"style_hide__4RZI1"};
  styleInject(css_248z$r);

  const select = selector => {
    return typeof selector === 'string' ? document.querySelector(selector) : selector;
  };

  var prps = ['containerPaddingTop', 'containerPaddingLeft', 'containerPaddingRight', 'containerPaddingBottom', 'colorBack', 'colorFore', 'colorAccent', 'colorAlt', 'fontText', 'fontHeading', 'scenePadding', 'sceneBackColor', 'blockPadding', 'blockWeight', 'blockOpacity', 'blockBlend'];

  const props$7 = (wrapper, config) => {
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
    const aspect = cw / ch;
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

  const replacer = (key, value) => {
    if (key.indexOf('_') === 0) {
      return undefined;
    }

    return value;
  };

  const uid = chunk => {
    return 'uid' + md5(JSON.stringify(chunk, replacer));
  };

  const upper$1 = s => s.charAt(0).toUpperCase() + s.slice(1);

  const rawProps = (key, props, config) => {
    let prps = '';

    for (var k in config) {
      if (props.indexOf(k) >= 0) {
        prps += '--' + key + upper$1(k) + ':' + config[k] + ';';
      }
    }

    return prps;
  };

  const addFontDep = url => {
    const fontUniqueName = uid(url);
    const exists = document.querySelector('.' + fontUniqueName);
    if (exists) return fontUniqueName;
    const ext = url.split('.').pop();
    const format = ext && ext !== 'ttf' ? `format("${ext}")` : '';
    const tag = document.createElement('style');
    tag.classList.add(fontUniqueName);
    tag.innerHTML = `
  @font-face {
    font-family: "${fontUniqueName}";
    src: url("${url}") ${format};
  }`;
    document.head.appendChild(tag);
    return fontUniqueName;
  };

  const io = {};
  var utils = {
    select,
    props: props$7,
    addProp,
    globs,
    addGlob,
    uid,
    rawProps,
    addFontDep,
    div,
    fit,
    event,
    io
  };

  var leftArrow = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-arrow-left-circle\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"12 8 8 12 12 16\"></polyline><line x1=\"16\" y1=\"12\" x2=\"8\" y2=\"12\"></line></svg>";

  var rightArrow = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-arrow-right-circle\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"12 16 16 12 12 8\"></polyline><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line></svg>";

  var upArrow = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-arrow-up-circle\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"16 12 12 8 8 12\"></polyline><line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"8\"></line></svg>";

  var downArrow = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-arrow-down-circle\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"8 12 12 16 16 12\"></polyline><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"16\"></line></svg>";

  const props$6 = ['opacity', 'direction', 'flexAlign', 'flexJustify', 'padding'];
  /*
  controllers:{
    arrows: {
      opacity: 0.5,
      flexAlign: '',
      flexJustify: '',
      padding: ''
    }
  }
  */

  const arrows = function (rootElement, router, ctrlConfig, projectConfig) {
    let timer = null;
    let numInteraction = 0;
    const vertical = ctrlConfig.direction === 'vertical' ? css$l.vertical : '';
    const rawp = utils.rawProps('arrows', props$6, ctrlConfig);
    const firstArrow = vertical ? upArrow : leftArrow;
    const lastArrow = vertical ? downArrow : rightArrow;
    const child = utils.div(`<div class="${css$l.arrows} ${vertical}"></div>`);
    const inner = utils.div(`<div class="${css$l.inner}" style="${rawp}"></div>`);
    const left = utils.div(`<div id="evt_trg_ctrl_arrow_left" class="${css$l.left}">
    <div class="${css$l.ui}">${firstArrow}</div>
  </div>`);
    inner.appendChild(left);
    const right = utils.div(`<div id="evt_trg_ctrl_arrow_right" class="${css$l.right}">
    <div class="${css$l.ui}">${lastArrow}</div>
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
      child.classList.remove(css$l.hide);
      timer = setTimeout(() => {
        child.classList.add(css$l.hide);
      }, 1500);
    }; // scheduleForHide()


    this._el = child;
  };

  var css_248z$q = ".style_black__3Nszx{width:100%;height:100%;position:absolute;top:0;left:0;background-color:#000;opacity:0;pointer-events:none;transition:opacity .5s cubic-bezier(.8,.2,.2,.8);z-index:999999}";
  var css$k = {"black":"style_black__3Nszx"};
  styleInject(css_248z$q);

  const black = function (rootElement, router, ctrlConfig, projectConfig) {
    let visible = false;
    const child = utils.div(`<div class="${css$k.black}"></div>`);
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

  const DEFAULT_KEY = 'f';

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
    const key = ctrlConfig.key || DEFAULT_KEY;
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

  var css_248z$p = ":root{--progressbarHeight:5px;--progressbarBottom:initial}.style_progressbar__37EFM{--progressbarColor:var(--colorFore);width:100%;height:100%;pointer-events:none}.style_bar__3nLkk{width:0;height:var(--progressbarHeight);position:absolute;bottom:var(--progressbarBottom);left:0;background-color:var(--progressbarColor);transition:width .5s cubic-bezier(.8,.2,.2,.8)}";
  var css$j = {"progressbar":"style_progressbar__37EFM","bar":"style_bar__3nLkk"};
  styleInject(css_248z$p);

  utils.addProp(['progressbarHeight', 'progressbarBottom', 'progressbarColor']);

  const progressbar = function (rootElement, router, ctrlConfig, projectConfig) {
    if (projectConfig.mode === 'preview') return;
    const child = utils.div(`<div class="${css$j.progressbar}"></div>`);
    const bar = utils.div(`<div class="${css$j.bar}"></div>`);
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
    const idx = ctrlConfig && ctrlConfig > 0 && ctrlConfig <= projectConfig.scenes.length ? ctrlConfig - 1 : 0;
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

  var css_248z$o = ".style_limitswitch__3g8Lq{pointer-events:none;opacity:0;background-color:var(--colorAccent);width:100%;height:100%;position:absolute;top:0;left:0}.style_signalSet__GRA42{opacity:.75}.style_signalOut__2qd5k{transition:opacity .35s ease-out;opacity:0}";
  var css$i = {"limitswitch":"style_limitswitch__3g8Lq","signalSet":"style_signalSet__GRA42","signalOut":"style_signalOut__2qd5k"};
  styleInject(css_248z$o);

  const limitswitch = function (rootElement, router, ctrlConfig, projectConfig) {
    let timer1;
    let timer2;
    const child = utils.div(`<div class="${css$i.limitswitch}"></div>`);
    rootElement.appendChild(child);

    const signal = () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      child.classList.remove(css$i.signalSet, css$i.signalOut);
      child.classList.add(css$i.signalSet);
      timer1 = setTimeout(() => {
        child.classList.add(css$i.signalOut);
      }, 16);
      timer2 = setTimeout(() => {
        child.classList.remove(css$i.signalSet, css$i.signalOut);
      }, 350);
    };

    router.on('begin', e => {
      signal();
    });
    router.on('end', e => {
      signal();
    });
  };

  var css_248z$n = ".style_sync__2HAFR{width:100%;height:100%;position:absolute;top:0;left:0;pointer-events:none}";
  var css$h = {"sync":"style_sync__2HAFR"};
  styleInject(css_248z$n);

  const sync = function (rootElement, router, ctrlConfig, projectConfig) {
    if (!window.BroadcastChannel) {
      console.log('[sync controller] disabled due browser incompatibility');
      return false;
    }

    const bus = new BroadcastChannel('presenta.sync');
    const child = utils.div(`<div class="${css$h.sync}"></div>`);
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

  var css_248z$m = ".transition__fadeIn .p-scene-enter-transition{transition:opacity .75s cubic-bezier(.2,.8,.05,.95)}.transition__fadeIn .to-right.p-scene-enter-start{opacity:0;transform:translate(0)}.transition__fadeIn .to-right.p-scene-enter-end{opacity:1}.transition__fadeIn .to-left.p-scene-enter-start{opacity:0;transform:translate(0)}.transition__fadeIn .to-left.p-scene-enter-end{opacity:1}";
  styleInject(css_248z$m);

  var css_248z$l = ".transition__hSlide .p-scene-enter-transition{transition:transform .75s cubic-bezier(.87,0,.13,1)}.transition__hSlide .to-right.p-scene-enter-start{transform:translateX(100%)}.transition__hSlide .to-right.p-scene-enter-end{transform:translateX(0)}.transition__hSlide .to-left.p-scene-enter-start{transform:translateX(-100%)}.transition__hSlide .to-left.p-scene-enter-end{transform:translateX(0)}.transition__hSlide .p-scene-leave-transition{transition:transform .75s cubic-bezier(.87,0,.13,1)}.transition__hSlide .to-right.p-scene-leave-start{transform:translateX(0)}.transition__hSlide .to-right.p-scene-leave-end{transform:translateX(-100%)}.transition__hSlide .to-left.p-scene-leave-start{transform:translateX(0)}.transition__hSlide .to-left.p-scene-leave-end{transform:translateX(100%)}";
  styleInject(css_248z$l);

  var css_248z$k = ".transition__vSlide .p-scene-enter-transition{transition:transform .75s cubic-bezier(.87,0,.13,1)}.transition__vSlide .to-right.p-scene-enter-start{transform:translateY(100%)}.transition__vSlide .to-right.p-scene-enter-end{transform:translateY(0)}.transition__vSlide .to-left.p-scene-enter-start{transform:translateY(-100%)}.transition__vSlide .to-left.p-scene-enter-end{transform:translateY(0)}.transition__vSlide .p-scene-leave-transition{transition:transform .75s cubic-bezier(.87,0,.13,1)}.transition__vSlide .to-right.p-scene-leave-start{transform:translateY(0)}.transition__vSlide .to-right.p-scene-leave-end{transform:translateY(-100%)}.transition__vSlide .to-left.p-scene-leave-start{transform:translateY(0)}.transition__vSlide .to-left.p-scene-leave-end{transform:translateY(100%)}";
  styleInject(css_248z$k);

  var css_248z$j = ".transition__slideOver .p-scene-enter-transition{transition:all .75s cubic-bezier(.2,.8,.05,.95)}.transition__slideOver .p-scene-enter-start{transform:translateY(-150%)}.transition__slideOver .p-scene-enter-end{transform:translateY(0)}.transition__slideOver .p-scene-leave-transition{transition:all .75s cubic-bezier(.2,.8,.05,.95)}.transition__slideOver .p-scene-leave-start{transform:scale(1)}.transition__slideOver .p-scene-leave-end{transform:scale(.5)}";
  styleInject(css_248z$j);

  const presets = ['fadeIn', 'hSlide', 'vSlide', 'slideOver'];
  /*
  transitions: 'fadeIn'

  transitions:{
    preset: 'fadeIn'
  }
  */

  const transitions = function (rootElement, router, ctrlConfig, projectConfig) {
    if (projectConfig.mode !== 'present') return false;
    const preset = typeof ctrlConfig === 'object' ? ctrlConfig.preset : ctrlConfig;
    if (presets.indexOf(preset) >= 0) projectConfig._root.classList.add(`transition__${preset}`);
  };

  const controllers = {
    keyboard,
    arrows,
    black,
    fullscreen,
    focus,
    preload,
    progressbar,
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
    transitions
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

  var css_248z$i = ".style_stepItem__1Iv29{transition:opacity 1.33s cubic-bezier(.19,1,.22,1),transform 1.33s cubic-bezier(.19,1,.22,1);transform-origin:center}.style_fadeIn__1qNon{opacity:0!important}.style_zoomOut__FobL2{opacity:0!important;transform:scale(1.3)!important}.style_zoomIn__3R2ad{opacity:0!important;transform:scale(.7)!important}.style_slideUp__2aPxJ{opacity:0!important;transform:translateY(40px)!important}.style_slideDown__3Wu--{opacity:0!important;transform:translateY(-40px)!important}";
  var css$g = {"stepItem":"style_stepItem__1Iv29","fadeIn":"style_fadeIn__1qNon","zoomOut":"style_zoomOut__FobL2","zoomIn":"style_zoomIn__3R2ad","slideUp":"style_slideUp__2aPxJ","slideDown":"style_slideDown__3Wu--"};
  styleInject(css_248z$i);

  const validTrans$1 = ['fadeIn', 'zoomOut', 'zoomIn', 'slideUp', 'slideDown'];
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
    // we don't want to performe steps in non-presentation mode
    if (sceneConfig._mode !== 'present') return;
    if (sceneConfig.contextType !== 'scene') return;
    const modSett = parseSettings(modConfig);
    let defTag = modSett.tag || '.step';
    const defOut = modSett.out || false;
    let defTrans = modSett.trans || validTrans$1[0];
    const defMode = modSett.mode || validModes[0];
    const sceneSett = parseSettings(sceneConfig.steps);
    let sceneMode = sceneSett.mode || sceneSett.tag || defMode;
    if (validModes.indexOf(sceneMode) === -1) sceneMode = validModes[0];
    defTag = sceneSett.tag || defTag;
    defTrans = sceneSett.trans || defTrans;
    let index = 0;
    const allElems = {};
    let allFlatElems = [];
    const blocks = sceneConfig.blocks.filter(b => !(b.hasOwnProperty('steps') && !b.steps));
    let prevEls = null;
    blocks.forEach(b => {
      const blockEl = b._el;
      const sett = parseSettings(b.steps);
      const tag = sett.tag || defTag;
      const out = sett.out || defOut;
      let trans = sett.trans || defTrans;
      if (validTrans$1.indexOf(trans) === -1) trans = validTrans$1[0];
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
          allFlatElems = allFlatElems.concat(els);
          els.forEach(el => {
            el.classList.add(css$g[trans]);
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
      allElems[k].arr.forEach(el => el.classList.add(css$g[trans]));
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
    } // postponing the add of the transition class to avoid initial unwanted transition


    setTimeout(() => {
      // routine only for sequential mode
      allFlatElems.forEach(el => {
        el.classList.add(css$g.stepItem);
      }); // routine only for match mode

      for (const k in allElems) {
        allElems[k].arr.forEach(el => el.classList.add(css$g.stepItem));
      }
    }, 100);

    this.stepForward = step => {
      if (step.sandbox === 'steps') {
        if (prevEls) {
          prevEls.forEach((el, i) => {
            const out = step.outs ? step.outs[i] : step.out;
            if (out) el.classList.add(css$g[step.trans]);
          });
          prevEls = null;
        }

        const els = step.els;
        els.forEach(el => el.classList.remove(css$g[step.trans]));

        if (step.out) {
          prevEls = els;
        }
      }
    };
  };

  var css_248z$h = "[jump]{cursor:pointer}";
  styleInject(css_248z$h);

  const jump = function (sceneElement, modConfig, sceneConfig) {
    const dispose = [];
    const jumps = [...sceneElement.querySelectorAll('[jump]')];
    jumps.forEach(el => {
      const sceneNum = el.getAttribute('jump');
      const num = parseInt(sceneNum);

      if (num > 0) {
        const handler = e => {
          sceneConfig._router.goto(num - 1);
        };

        el.addEventListener('click', handler);
        dispose.push({
          el,
          handler
        });
      }
    });

    this.destroy = () => {
      dispose.forEach(o => {
        o.el.removeEventListener('click', o.handler);
      });
    };
  };

  var css_248z$g = ".noresize.sceneObject{width:100%;height:100%}.noresize.sceneObject .sceneWrapper{width:100%;height:100%;transform:scale(1)}";
  styleInject(css_248z$g);

  const noresize = function (sceneElement, modConfig, sceneConfig) {
    const noResize = !!(sceneConfig.noresize || modConfig);
    if (noResize) sceneElement.querySelector('.sceneObject').classList.add('noresize');
  };

  const colorRawList = ['back', 'fore', 'accent', 'alt'];

  const upp = s => s.charAt(0).toUpperCase() + s.slice(1);

  const colors = function (element, mod, config) {
    if (typeof mod !== 'object') return false;
    if (config.contextType === 'block') return;
    colorRawList.forEach(c => {
      const col = mod[c];
      if (col) element.style.setProperty('--color' + upp(c), mod[c]);
    });
  };

  /*
  modules:{
      fonts:{
          fontText:'.ttf',
          fontHead:'.ttf',
          fontAlt:'.ttf'
      }
  }
  */

  const fonts = function (element, mod, config) {
    if (typeof mod !== 'object') return false;
    if (config.contextType === 'block') return;
    const that = this;
    return new Promise((resolve, reject) => {
      const variants = ['Text', 'Head', 'Alt'];
      variants.forEach(v => {
        const url = mod['font' + v];

        if (url) {
          const name = utils.addFontDep(url);
          element.style.setProperty('--font' + v, name);
        }
      });
      resolve(that);
    });
  };

  fonts.runBefore = true; // const already = {}

  const props$5 = ['opacity', 'blend', 'radius', 'border', 'padding', 'background', 'color', 'clip', 'shadow'];

  const upper = s => s.charAt(0).toUpperCase() + s.slice(1);

  const applyRawProps$1 = (el, config) => {
    if (typeof config !== 'object') return false;
    props$5.forEach(c => {
      const v = config[c];
      if (v) el.style.setProperty('--block' + upper(c), v);
    });
  };

  const styles = function (element, mod, config) {
    applyRawProps$1(element, mod);
  };

  styles.runBefore = true;

  /*
  paddings: {
    css: '1rem'
  }
  */
  const paddings = function (element, mod, config) {
    const css = mod.css;

    if (css) {
      element.style.setProperty(`--${config.contextType}Padding`, css);
    }
  };

  paddings.runBefore = true;

  const autoplay = function (element, mod, config) {
    if (config._mode === 'preview') return;
    if (config.contextType === 'block') return;
    let timer = null;
    const router = config._router;
    console.log(config, router);
    let defdelay = 4000;

    switch (typeof mod) {
      case 'number':
        defdelay = mod;
        break;

      case 'string':
        defdelay = +mod;
        break;

      case 'object':
        defdelay = +mod.delay;
        break;

      default:
        defdelay = 4000;
    }

    timer = setTimeout(() => {
      router.next();
    }, defdelay);
    router.on('indexChanged', evt => {
      clearTimeout(timer);
    });
    router.on('stepChanged', evt => {
      clearTimeout(timer);
    });
  };

  const props$4 = ['top', 'left', 'width', 'height', 'angle', 'right', 'bottom', 'skew'];

  const applyRawProps = (el, config) => {
    if (typeof config !== 'object') return false;
    props$4.forEach(c => {
      const v = config[c];

      if (v) {
        // legacy
        const col = +v;

        if (col && typeof col === 'number') {
          el.style.setProperty('--' + c, col + '%');
        } else {
          el.style.setProperty('--' + c, v);
        }
      }
    });
  };

  const coords = function (element, mod, config) {
    applyRawProps(element, mod);
  };

  coords.runBefore = true;

  var css_248z$f = ".style_pagenum__1ycBY{--pagenumTextAlign:right;--pagenumPadding:.75rem;--pagenumFontSize:.9rem;--pagenumBackColor:none;--pagenumFont:var(--fontText);--pagenumColor:var(--colorFore);--pagenumFlexAlign:flex-end;--pagenumFlexJustify:flex-end;width:100%;height:100%;position:absolute;top:0;left:0;padding:var(--containerPaddingTop) var(--containerPaddingRight) var(--containerPaddingBottom) var(--containerPaddingLeft);pointer-events:none}.style_inner__AbrJj{width:100%;height:100%;padding:var(--pagenumPadding);display:flex;align-items:var(--pagenumFlexAlign);justify-content:var(--pagenumFlexJustify)}.style_content__1CXpQ{text-align:var(--pagenumTextAlign);padding:var(--pagenumInnerPadding);font-size:var(--pagenumFontSize);color:var(--pagenumColor);font-family:var(--pagenumFont);background-color:var(--pagenumBackColor);border:var(--pagenumBorder);border-radius:var(--pagenumBorderRadius);transition:all .3s ease-in-out}";
  var css$f = {"pagenum":"style_pagenum__1ycBY","inner":"style_inner__AbrJj","content":"style_content__1CXpQ"};
  styleInject(css_248z$f);

  const props$3 = ['textAlign', 'padding', 'innerPadding', 'fontSize', 'font', 'backColor', 'color', 'border', 'borderRadius', 'flexAlign', 'flexJustify'];

  const pagenum = function (element, mod, config) {
    const rawp = utils.rawProps('pagenum', props$3, mod);
    const child = utils.div(`<div class="${css$f.pagenum}"></div>`);
    const inner = utils.div(`<div class="${css$f.inner}" style="${rawp}"></div>`);
    const content = utils.div(`<div class="${css$f.content}"></div>`);
    inner.appendChild(content);
    child.appendChild(inner);
    element.querySelector('.sceneWrapper').appendChild(child);
    const template = mod.template ? mod.template : '%s / %S';
    const router = config._router;
    const curr = router.currentIndex();
    const tot = router.totalScenes();
    const index = curr + 1;
    const str = template.replace(/%s/mg, index).replace(/%S/mg, tot);
    content.innerHTML = str;
  };

  var css_248z$e = ".style_reveal__3Cs6V{--revealTextAlign:center;--revealPadding:5px;--revealFontSize:2rem;--revealFont:var(--fontText);--revealBackColor:var(--colorFore);--revealColor:var(--colorBack);--revealFlexAlign:center;--revealFlexJustify:center;width:100%;height:100%;position:absolute;top:0;left:0;pointer-events:none;transition-property:opacity,transform;transition-duration:1.33s;transition-timing-function:cubic-bezier(.19,1,.22,1)}.style_inner__3rqnR{width:100%;height:100%;padding:var(--revealPadding);background-color:var(--revealBackColor);display:flex;align-items:var(--revealFlexAlign);justify-content:var(--revealFlexJustify)}.style_content__bTAxU{text-align:var(--revealTextAlign);font-size:var(--revealFontSize);color:var(--revealColor);font-family:var(--revealFont)}.style_preview__2jDoF{opacity:.3}.style_exitSlideUp__s74jg{transform:translateY(-100%)}.style_exitFadeOut__12FkH{opacity:0}";
  var css$e = {"reveal":"style_reveal__3Cs6V","inner":"style_inner__3rqnR","content":"style_content__bTAxU","preview":"style_preview__2jDoF","exitSlideUp":"style_exitSlideUp__s74jg","exitFadeOut":"style_exitFadeOut__12FkH"};
  styleInject(css_248z$e);

  const props$2 = ['textAlign', 'padding', 'fontSize', 'font', 'backColor', 'color', 'flexAlign', 'flexJustify'];

  const reveal = function (element, mod, config) {
    let isPreview = '';
    if (config._mode === 'preview') isPreview = css$e.preview;
    const rawp = utils.rawProps('reveal', props$2, mod);

    config._steps.push({
      sandbox: 'reveal'
    });

    const text = mod.text ? mod.text : '';
    const exitEffect = mod.effect ? css$e[mod.effect] : css$e.exitSlideUp;
    const child = utils.div(`<div class="${css$e.reveal} ${isPreview}"></div>`);
    const inner = utils.div(`<div class="${css$e.inner}" style="${rawp}"></div>`);
    const content = utils.div(`<div class="${css$e.content}">${text}</div>`);
    inner.appendChild(content);
    child.appendChild(inner);
    element.querySelector('.sceneWrapper').appendChild(child);

    this.stepForward = step => {
      if (step.sandbox === 'reveal') {
        child.classList.add(exitEffect);
      }
    };
  };

  var css_248z$d = ".style_entersItem__2uGyd{transition:opacity 1.5s cubic-bezier(.19,1,.22,1),transform 1.5s cubic-bezier(.19,1,.22,1);transform-origin:center}.style_fadeIn__10W0K{opacity:0!important;transition-timing-function:ease-in-out}.style_zoomOut__1wM1b{opacity:0!important;transform:scale(1.3)!important}.style_zoomIn__38KfE{opacity:0!important;transform:scale(.7)!important}.style_slideUp__2b3jJ{opacity:0!important;transform:translateY(40px)!important}.style_slideDown__UD-oC{opacity:0!important;transform:translateY(-40px)!important}";
  var css$d = {"entersItem":"style_entersItem__2uGyd","fadeIn":"style_fadeIn__10W0K","zoomOut":"style_zoomOut__1wM1b","zoomIn":"style_zoomIn__38KfE","slideUp":"style_slideUp__2b3jJ","slideDown":"style_slideDown__UD-oC"};
  styleInject(css_248z$d);

  const validTrans = ['fadeIn', 'zoomOut', 'zoomIn', 'slideUp', 'slideDown'];

  const enters = function (element, mod, config) {
    if (config._mode !== 'present') return;
    const transition = mod.transition || validTrans[0];
    let delay = mod.delay ? parseInt(mod.delay) : 1000;

    if (mod.stagger) {
      delay = delay + 200 * config._index;
    }

    if (config.contextType === 'block') {
      const el = config._el.querySelector('.blockContainer');

      el.classList.add(css$d[transition]);
      setTimeout(() => {
        el.classList.add(css$d.entersItem);
      }, 16);
      setTimeout(() => {
        el.classList.remove(css$d[transition]);
      }, delay);
    }
  }; // enters.runBefore = true

  var css_248z$c = ".style_viewportLimit__2yPva{width:100%;height:100%;position:absolute;border:3px dashed red;pointer-events:none;visibility:hidden}";
  var css$c = {"viewportLimit":"style_viewportLimit__2yPva"};
  styleInject(css_248z$c);

  function fabricbridge(element, modConfig, config) {
    if (config.contextType === 'block') return;
    const viewport = element.querySelector('.blocksContainer');
    const limits = utils.div(`<div class="${css$c.viewportLimit}"></div>`);
    viewport.parentNode.appendChild(limits);

    const upd = e => {
      const block = config.blocks[e.index];
      const el = block._el;

      for (var k in e.coords) {
        const v = e.coords[k];
        el.style.setProperty('--' + k, v);
      }

      block.modules.coords = e.coords;
    };

    const router = config._router;
    router.on('live:block:update', upd);

    const begin = () => {
      viewport.style.overflow = 'inherit';
      limits.style.visibility = 'visible';
    };

    router.on('live:block:begin', begin);

    const end = () => {
      viewport.style.overflow = 'hidden';
      limits.style.visibility = 'hidden';
    };

    router.on('live:block:end', end);

    this.destroy = () => {
      router.off('live:block:update', upd);
      router.off('live:block:begin', begin);
      router.off('live:block:end', end);
    };
  }

  const appendScriptTag = (url, code) => {
    const ns = document.createElement('script');
    ns.setAttribute('class', 'sdpmodulescriptcontainer');
    ns.setAttribute('type', 'module');
    ns.setAttribute('async', '');
    ns.innerHTML = code;
    ns.src = url;
    document.body.appendChild(ns);
  };

  const script = function (element, mod, config) {
    if (config._mode === 'preview') return;
    if (config.contextType !== 'scene') return;
    return new Promise((resolve, reject) => {
      const blink = {};
      config.blocks.forEach(b => {
        blink[b.ukey] = b;
      });
      blink._otherParams = config.otherParams;
      window._sdpconfigobject = blink;
      window._sdpscriptexportedresult = {};

      window._sdpcallbackfunc = () => {
        console.log('_sdpcallbackfunc');
        window._sdpcallbackfunc = null;
        window._sdpconfigobject = null;
        resolve();
      }; // remove previous code modules


      const prev = [...document.querySelectorAll('.sdpmodulescriptcontainer')];
      prev.forEach(d => document.body.removeChild(d));
      let code = `
const index = ${config.index}
const exportedResult = window._sdpscriptexportedresult

const params = window._sdpconfigobject._otherParams
    `;
      config.blocks.forEach(b => {
        code += `
const ${b.ukey} = window._sdpconfigobject.${b.ukey}
`;
      });
      code += `

${mod.header}

try{

${mod.code}

}catch(err){
console.log('error in module', err)
}
export default {}`; // add the code module

      let url = URL.createObjectURL(new Blob([code], {
        type: 'application/javascript'
      }));
      appendScriptTag(url, code); // add the last module for callback

      const lastModule = `
import _sdpPrivateInput from '${url}'
window._sdpcallbackfunc()
`;
      url = URL.createObjectURL(new Blob([lastModule], {
        type: 'application/javascript'
      }));
      appendScriptTag(url, lastModule);
    });
  };

  script.runBefore = true;

  const modules = {
    coords,
    steps,
    jump,
    noresize,
    colors,
    fonts,
    styles,
    paddings,
    autoplay,
    pagenum,
    reveal,
    enters,
    fabricbridge,
    script
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

  var css_248z$b = ".style_text__3T1cl{width:100%;height:100%;position:relative;--textAlign:center;--textVertical:center;--textHorizontal:center;--textSize:1rem;--textWidth:auto;--textFont:var(--fontText);--textBackground:none;--textColor:var(--colorFore);--textPadding:0;--textInterline:inherit;--textSpacing:inherit;--textBorderTop:inherit;--textBorderLeft:inherit;--textBorderRight:inherit;--textBorderBottom:inherit;--textRadius:0;--textShadow:none;--textBlend:none;--textClamp:0}.style_promise__1-2R_{visibility:hidden}.style_inner__11UJC{position:relative;width:100%;height:100%}.style_pretext__cLjqD{display:flex;width:100%;height:100%;align-items:var(--textVertical);justify-content:var(--textHorizontal)}.style_textbox__1Vb-V{text-align:var(--textAlign);font-size:var(--textSize);font-family:var(--textFont);--backmark:var(--colorAccent);--foremark:var(--colorBack);--textaccentcolor:var(--colorAccent);width:var(--textWidth)}.style_itext__jz90o{padding:var(--textPadding);background:var(--textBackground);color:var(--textColor);line-height:var(--textInterline);letter-spacing:var(--textSpacing);border-top:var(--textBorderTop);border-left:var(--textBorderLeft);border-right:var(--textBorderRight);border-bottom:var(--textBorderBottom);border-radius:var(--textRadius);box-shadow:var(--textShadow);mix-blend-mode:var(--textBlend)}.style_itext__jz90o img{-o-object-fit:contain;object-fit:contain;height:4em;vertical-align:middle}.style_itext__jz90o mark{background-color:var(--backmark);color:var(--foremark);padding:.5rem}.style_itext__jz90o high{color:var(--textaccentcolor)}.style_itext__jz90o bord{border:8px solid var(--backmark);padding:0 .5rem}.style_itext__jz90o a{color:var(--textaccentcolor);text-decoration:underline}.style_itext__jz90o btn{background-color:var(--colorFore);color:var(--colorBack);padding:1rem 2rem;display:inline-block;border-radius:12px;overflow:hidden}.style_itext__jz90o blockquote{font-size:2em;font-weight:400;font-style:italic;font-family:var(--fontAlt)}.style_itext__jz90o blockquote,.style_itext__jz90o h1,.style_itext__jz90o h2,.style_itext__jz90o h3,.style_itext__jz90o h4,.style_itext__jz90o h5,.style_itext__jz90o h6,.style_itext__jz90o p,.style_itext__jz90o ul{margin:0}.style_itext__jz90o h1 b,.style_itext__jz90o h1 strong,.style_itext__jz90o h2 b,.style_itext__jz90o h2 strong,.style_itext__jz90o h3 b,.style_itext__jz90o h3 strong,.style_itext__jz90o h4 b,.style_itext__jz90o h4 strong,.style_itext__jz90o h5 b,.style_itext__jz90o h5 strong,.style_itext__jz90o h6 b,.style_itext__jz90o h6 strong{color:var(--textaccentcolor)}.style_itext__jz90o ol,.style_itext__jz90o ul{text-align:left;margin:0;list-style-type:none;counter-reset:li;padding:.5em 0}.style_itext__jz90o li{list-style-position:inside;margin-bottom:2px;padding:.25em .25em .25em .8em}.style_itext__jz90o ul li:before{content:\"\\2013\";display:inline-block;width:.8em;margin-left:-.8em}.style_itext__jz90o ol li:before{counter-increment:li;content:\".\" counter(li);display:inline-block;width:1.1em;margin-left:-1.3em;margin-right:.2em;text-align:right;direction:rtl}.style_itext__jz90o li p{display:inline}.style_itext__jz90o code,.style_itext__jz90o pre{text-align:left;margin:0}.style_itext__jz90o h1,.style_itext__jz90o h2,.style_itext__jz90o h3,.style_itext__jz90o h4,.style_itext__jz90o h5,.style_itext__jz90o h6{font-family:var(--fontHead);padding:.5rem 0}.style_itext__jz90o h1{font-size:2em}.style_itext__jz90o h2{font-size:1.5em}.style_itext__jz90o h3{font-size:1.17em}.style_itext__jz90o h4{font-size:1em}.style_itext__jz90o h5{font-size:.83em}.style_itext__jz90o h6{font-size:.67em}.style_itext__jz90o p{padding:.5rem 0}.style_itext__jz90o p:first-child{padding-top:0}.style_itext__jz90o p:last-child{padding-bottom:0}.style_itext__jz90o hr{border:1px solid var(--colorFore);margin:.5rem 0}.style_itext__jz90o h1:first-child,.style_itext__jz90o h1:last-child,.style_itext__jz90o h2:first-child,.style_itext__jz90o h2:last-child,.style_itext__jz90o h3:first-child,.style_itext__jz90o h3:last-child{padding:0}.style_itext__jz90o table{width:100%}.style_itext__jz90o tr{padding:0}.style_itext__jz90o td,.style_itext__jz90o th{padding:.5rem;border-bottom:1px solid var(--colorFore)}.style_itext__jz90o small{font-size:.6em}.style_marked__3bbXu span{background:var(--textAccent);color:var(--textColor)}.style_uppercase__2Fiv7{text-transform:uppercase}.style_underline__3GnC9{text-decoration:underline;-webkit-text-decoration-color:var(--textColor);text-decoration-color:var(--textColor)}.style_clamp__J1SFM{overflow:hidden;-webkit-line-clamp:var(--textClamp);display:-webkit-box;-webkit-box-orient:vertical}";
  var css$b = {"text":"style_text__3T1cl","promise":"style_promise__1-2R_","inner":"style_inner__11UJC","pretext":"style_pretext__cLjqD","textbox":"style_textbox__1Vb-V","itext":"style_itext__jz90o","marked":"style_marked__3bbXu","uppercase":"style_uppercase__2Fiv7","underline":"style_underline__3GnC9","clamp":"style_clamp__J1SFM"};
  styleInject(css_248z$b);

  const props$1 = ['background', 'color', 'accent', 'padding', 'interline', 'spacing', 'radius', 'borderTop', 'borderLeft', 'borderRight', 'borderBottom', 'shadow', 'blend', 'align', 'vertical', 'horizontal'];
  const inlinestyles = ['marked', 'uppercase', 'underline'];

  const text = function (el, config) {
    const that = this;
    return new Promise((resolve, reject) => {
      const html = config.content || '';
      if (!html) return resolve(that);
      let rawp = utils.rawProps('text', props$1, config);
      let fsize = config.scale;
      const autoscale = config.autoscale;
      let inlineStyleClasses = '';
      inlinestyles.forEach(s => {
        if (config[s]) {
          inlineStyleClasses += css$b[s] + ' ';
        }
      });

      if (config.font) {
        const name = utils.addFontDep(config.font);
        rawp += ` --textFont:${name};`;
      }

      const clamp = config.clamp;
      let clampClass = '';

      if (clamp) {
        rawp += '--textClamp: ' + clamp;
        clampClass = css$b.clamp;
      }

      const child = utils.div(`<div class="c ${css$b.text} ${css$b.promise} ${inlineStyleClasses}">
    <div style="${rawp}" class="${css$b.inner}">
      <div class="pretext ${css$b.pretext}">
        <div class="${css$b.textbox}">
          <div class="textContent ${css$b.itext} ${clampClass}">
            <span>${html}</span>
          </div>
        </div>
      </div>
    </div>
  </div>`);
      el.appendChild(child); // if there are images, let's exploit the alt attribute if contains a number
      // as a scale multiplier
      // let images = child.querySelectorAll('img')
      // if (images) {
      //   images = [...images].forEach(img => {
      //     const a = img.getAttribute('alt')
      //     if (a) {
      //       const val = +a
      //       if (val > 0) img.style.height = 4 * val + 'em'
      //     }
      //   })
      // }

      let isObserved = false;
      let isComputing = false;
      const resizeObserver = new ResizeObserver(() => {
        if (!isComputing) {
          resizeObserver.disconnect();
          compute();
        }
      }); // this is the iterative scale routine

      const compute = () => {
        child.style.setProperty('--textSize', `${fsize}rem`);
        const mel = child.querySelector('.' + css$b.inner);
        const el = child.querySelector('.' + css$b.textbox);

        if (!autoscale) {
          setTimeout(() => {
            child.classList.remove(css$b.promise);
            resolve(that);
          });
          return false;
        }

        isComputing = true;

        if (!isObserved) {
          resizeObserver.observe(el);
          isObserved = true;
        }

        const mbox = mel.getBoundingClientRect();
        const bbox = el.getBoundingClientRect();

        if (parseInt(mbox.width) < parseInt(bbox.width) || parseInt(mbox.height) < parseInt(bbox.height)) {
          fsize -= 0.05;
          return compute();
        } else {
          setTimeout(() => {
            child.classList.remove(css$b.promise);
            resolve(that);
            isComputing = false;
          });
        }
      };

      if (config.font) {
        fetch(config.font).then(res => {
          setTimeout(compute);
        });
      } else {
        setTimeout(compute);
      }

      that.destroy = () => {
        resizeObserver.disconnect();
      };
    });
  };

  var css_248z$a = ":root{--embedPadding:0;--embedBackcolor:none;--embedPosterSize:cover;--embedPosterPosition:center}.style_inner__3WOWs{padding:var(--embedPadding);position:relative}.style_frame__28PUh{background-color:var(--embedBackcolor);position:relative}.style_embed__2Pre2,.style_frame__28PUh,.style_inner__3WOWs{width:100%;height:100%}.style_frame__28PUh>iframe{width:100%;height:100%;border:none}.style_loading__1w7wc{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:var(--colorFore);font-family:var(--fontText);background-color:var(--colorBack)}.style_loading__1w7wc mark{background-color:var(--colorAccent);color:var(--colorBack)}.style_blockmouse__3bXSl,.style_poster__1TOx3{position:absolute;top:0;left:0;width:100%;height:100%}.style_poster__1TOx3{background-color:var(--colorBack)}.style_poster__1TOx3 img{width:100%;height:100%;-o-object-fit:var(--embedPosterSize);object-fit:var(--embedPosterSize);-o-object-position:var(--embedPosterPosition);object-position:var(--embedPosterPosition)}";
  var css$a = {"inner":"style_inner__3WOWs","frame":"style_frame__28PUh","embed":"style_embed__2Pre2","loading":"style_loading__1w7wc","blockmouse":"style_blockmouse__3bXSl","poster":"style_poster__1TOx3"};
  styleInject(css_248z$a);

  const iframePrimaryDomain = str => {
    if (!str) return '';
    const reg = new RegExp('src="(.*)', 'gim');
    const url = reg.exec(str);
    const dom = url[1].match(/http(s?):\/\/([\w]+\.){1}([\w]+\.?)+/gim);
    return dom && dom.length > 0 ? dom[0] : null;
  };

  const embed = function (el, config) {
    const presentMode = config._mode === 'present' || config._mode === 'print' || config.overrideMode;
    let iframe = null;

    if (config.url) {
      iframe = `<iframe src="${config.url}"></iframe>`;
    }

    if (config.code) {
      iframe = config.code;
    }

    if (!iframe) return false;
    const that = this;
    return new Promise((resolve, reject) => {
      const name = iframePrimaryDomain(iframe);
      const msg = name ? `Embed from <mark>${name}</mark>` : 'Embed resource';
      const coverFrame = `<div class="cover ${css$a.loading}"><h1>${msg}</h1></div>`;
      const blockPointer = config.blockPointer ? `<div class='${css$a.blockmouse}' />` : '';
      const posterFrame = config.poster ? `<div class="${css$a.poster}"><img src="${config.poster}" /></div>` : '';

      const done = () => {
        child.querySelector('.' + css$a.loading).style.display = 'none';
        child.querySelector('.' + css$a.poster).style.display = 'none';
        resolve(that);
      };

      const waitForReady = config.waitReady;

      if (presentMode && waitForReady) {
        console.log('waitReady');
        window.addEventListener('message', e => {
          console.log('message', e.data);

          if (e.data === 'presenta.iframe.ready') {
            done();
          }
        });
      }

      const child = utils.div(`<div class="c ${css$a.embed}">
    <div class="${css$a.inner}">
        <div class="${css$a.frame}">${iframe}</div>
        ${coverFrame}
        ${posterFrame}
        ${blockPointer}
    </div>
  </div>`);
      el.appendChild(child);

      if (presentMode) {
        const frame = child.querySelector('iframe');

        if (waitForReady) ; else {
          console.log('waitLoad');
          frame.addEventListener('load', () => {
            console.log('load');
            done();
          });
        }
      } else {
        resolve(that);
      }
    });
  };

  var css_248z$9 = ":root{--imagePosition:center;--imageFilter:none;--imageScale:1;--imageSize:cover}.style_image__1fZIQ,.style_inner__3tyMU{width:100%;height:100%}.style_inner__3tyMU{display:flex}.style_preimg__2ypvx{flex:1;display:flex;align-items:center;justify-content:center;overflow:hidden}.style_preimg__2ypvx img{width:calc(var(--imageScale)*100%);height:calc(var(--imageScale)*100%);-o-object-fit:var(--imageSize);object-fit:var(--imageSize);-o-object-position:var(--imagePosition);object-position:var(--imagePosition);filter:var(--imageFilter)}";
  var css$9 = {"image":"style_image__1fZIQ","inner":"style_inner__3tyMU","preimg":"style_preimg__2ypvx"};
  styleInject(css_248z$9);

  const props = ['scale', 'filter', 'position', 'size'];

  const image = function (el, config) {
    const url = config.url;
    if (!url) return false;
    const that = this;
    return new Promise((resolve, reject) => {
      const rawp = utils.rawProps('image', props, config);
      const imageschunk = `<div class="presentablock__image ${css$9.preimg}"></div>`;
      const child = utils.div(`<div class="${css$9.image}">
    <div style="${rawp}" class="imagesContainer ${css$9.inner}">
        ${imageschunk}
    </div>
  </div>`);
      el.appendChild(child);
      const wrapper = el.querySelector('.' + css$9.preimg);
      const img = new Image();

      img.onload = () => {
        wrapper.appendChild(img);
        resolve(that);
      };

      img.onerror = () => {
        resolve(that);
      };

      img.src = url;
    });
  };

  var css_248z$8 = ":root{--videoSize:cover;--videoPosition:center}.style_video__1qbdJ{width:100%;height:100%;display:flex;align-items:center;justify-content:center}.style_video__1qbdJ video{width:100%;height:100%;-o-object-fit:var(--videoSize);object-fit:var(--videoSize);-o-object-position:var(--videoPosition);object-position:var(--videoPosition);pointer-events:none}";
  var css$8 = {"video":"style_video__1qbdJ"};
  styleInject(css_248z$8);

  const video = function (el, config) {
    const presentMode = config._mode === 'present';
    const poster = config.poster ? `poster=${config.poster}` : '';
    const loop = config.loop ? 'loop' : '';
    const muted = config.muted ? 'muted' : '';
    const autoplay = config.autoplay && presentMode ? 'autoplay' : '';
    const src = config.url ? `src=${config.url}` : '';
    const child = utils.div(`<div class="${css$8.video}" id="evt_trg_uid_block_video_${config._index}">
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

  var css_248z$7 = ".style_inner__AjKjt,.style_svg__2xfFu,.style_svg__2xfFu svg{width:100%;height:100%}";
  var css$7 = {"svg":"style_svg__2xfFu","inner":"style_inner__AjKjt"};
  styleInject(css_248z$7);

  const svg = function (el, config) {
    const svg = config._cache || config.code;
    if (!svg) return console.log('[block svg]', 'The svg is not present');
    const aspect = config.aspect || null;
    const child = utils.div(`<div class="c ${css$7.svg}">
        <div class="${css$7.inner}">
            ${svg}
        </div>
    </div>`);
    el.appendChild(child);
    if (aspect) child.querySelector('svg').setAttribute('preserveAspectRatio', aspect);

    this.beforeDestroy = () => {};
  };

  svg.init = () => {
    if (utils.io.addCache) utils.io.addCache({
      type: 'svg',
      field: 'url'
    });
    if (utils.io.addBaseurl) utils.io.addBaseurl({
      type: 'svg',
      field: 'url'
    });
  };

  var css_248z$6 = ".style_shape__FgMb3{--shapeColor:var(--colorFore);width:100%;height:100%}.style_el__2h6ux{background:var(--shapeColor);width:100%;height:100%}.style_path__2ka5V{-webkit-clip-path:var(--shapePath);clip-path:var(--shapePath)}.style_circle__311fy{-webkit-clip-path:ellipse(50% 50% at 50% 50%);clip-path:ellipse(50% 50% at 50% 50%)}.style_triangle__1SsU5{-webkit-clip-path:polygon(50% 0,0 100%,100% 100%);clip-path:polygon(50% 0,0 100%,100% 100%)}.style_rhombus__30IVZ{-webkit-clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%);clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%)}.style_star__SnUWn{-webkit-clip-path:polygon(50% 0,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%);clip-path:polygon(50% 0,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)}";
  var css$6 = {"shape":"style_shape__FgMb3","el":"style_el__2h6ux","path":"style_path__2ka5V","circle":"style_circle__311fy","triangle":"style_triangle__1SsU5","rhombus":"style_rhombus__30IVZ","star":"style_star__SnUWn"};
  styleInject(css_248z$6);

  const shape = function (el, config) {
    const rawp = utils.rawProps('shape', ['color', 'path'], config);
    let t = config.shape || 'rect';
    if (config.path) t = 'path';
    const tEl = css$6[t];
    const child = utils.div(`<div class="${css$6.shape}">
    <div style="${rawp}" class="${css$6.el} ${tEl}"></div>
  </div>`);
    el.appendChild(child);
  };

  var css_248z$5 = ".style_line__2r6B4{--lineColor:var(--colorFore);--lineTickness:1;width:100%;height:100%;display:flex;align-items:center;justify-content:center}.style_horizontal__Q3OSl .style_el__X2-Ln{width:100%;height:var(--lineTickness)}.style_vertical__1ldIK .style_el__X2-Ln{height:100%;width:var(--lineTickness)}.style_el__X2-Ln{background:var(--lineColor)}";
  var css$5 = {"line":"style_line__2r6B4","horizontal":"style_horizontal__Q3OSl","el":"style_el__X2-Ln","vertical":"style_vertical__1ldIK"};
  styleInject(css_248z$5);

  const line = function (el, config) {
    const rawp = utils.rawProps('line', ['color', 'tickness'], config);
    const dir = config.direction || 'horizontal';
    const dircls = css$5[dir];
    const child = utils.div(`<div class="${css$5.line} ${dircls}">
    <div style="${rawp}" class="${css$5.el}"></div>
  </div>`);
    el.appendChild(child);
  };

  const blocks = {
    text,
    embed,
    image,
    video,
    svg,
    shape,
    line
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

  var css_248z$4 = ".splash_splash__3mb9V{width:100%;height:100%;background-color:var(--colorBack);color:var(--colorFore);display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:var(--fontHead)}.splash_spinner__3jef_{display:flex;animation:splash_spin__Dy8Lf 2s linear infinite}@keyframes splash_spin__Dy8Lf{to{transform:rotate(1turn)}}";
  var css$4 = {"splash":"splash_splash__3mb9V","spinner":"splash_spinner__3jef_","spin":"splash_spin__Dy8Lf"};
  styleInject(css_248z$4);

  var loader = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-loader\"><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"6\"></line><line x1=\"12\" y1=\"18\" x2=\"12\" y2=\"22\"></line><line x1=\"4.93\" y1=\"4.93\" x2=\"7.76\" y2=\"7.76\"></line><line x1=\"16.24\" y1=\"16.24\" x2=\"19.07\" y2=\"19.07\"></line><line x1=\"2\" y1=\"12\" x2=\"6\" y2=\"12\"></line><line x1=\"18\" y1=\"12\" x2=\"22\" y2=\"12\"></line><line x1=\"4.93\" y1=\"19.07\" x2=\"7.76\" y2=\"16.24\"></line><line x1=\"16.24\" y1=\"7.76\" x2=\"19.07\" y2=\"4.93\"></line></svg>";

  const Splash = function (rootElement, projectConfig) {
    const aspect = projectConfig.aspect || 1.6;
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
      h = w / aspect;
      rootElement.style.height = `${h}px`;
    }

    const label = projectConfig.loading || '';
    const child = utils.div(`<div class="${css$4.splash}">
    <div class="${css$4.spinner}">${loader}</div>
    ${label}
  </div>`);
    rootElement.appendChild(child);
    utils.globs(child, projectConfig);

    this.destroy = () => {
      rootElement.removeChild(child);
    };
  };

  var css_248z$3 = ":root{--containerPaddingTop:0;--containerPaddingLeft:0;--containerPaddingRight:0;--containerPaddingBottom:0}.container_mainwrapper__zelcO{width:100%;height:100%;position:relative;overflow:hidden;outline:none}.container_superContainer__2mwZX{padding:var(--containerPaddingTop) var(--containerPaddingRight) var(--containerPaddingBottom) var(--containerPaddingLeft)}.container_container__3kBNh,.container_superContainer__2mwZX{width:100%;height:100%;position:relative}.container_container__3kBNh>div{position:absolute;top:0;left:0}";
  var css$3 = {"mainwrapper":"container_mainwrapper__zelcO","superContainer":"container_superContainer__2mwZX","container":"container_container__3kBNh"};
  styleInject(css_248z$3);

  var css_248z$2 = ".router_router__2r4NQ{width:100%;height:100%;position:absolute;top:0;left:0;pointer-events:none}.router_router__2r4NQ>div{padding:var(--containerPaddingTop) var(--containerPaddingRight) var(--containerPaddingBottom) var(--containerPaddingLeft)}.router_router__2r4NQ>div.router_ignorePad__4q1nG{padding:0}";
  var css$2 = {"router":"router_router__2r4NQ","ignorePad":"router_ignorePad__4q1nG"};
  styleInject(css_248z$2);

  const Router = function (rootElement, projectConfig) {
    const child = utils.div(`<div class="controller ${css$2.router}"></div>`);
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
        // if (ev === 'indexChanged') updateRouterWrapper()
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

    this.destroy = () => {
      for (const k in listeners) {
        listeners[k] = null;
        delete listeners[k];
      }
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
              md._el.classList.add(css$2.ignorePad);
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

  var css_248z$1 = ".scene_sceneContainer__IgSpB{width:100%;height:100%;display:flex;align-items:center;justify-content:center;position:relative}.scene_scene__3uvTl{--presenta-sw:calc(var(--presenta-w)/var(--presenta-p)/var(--presenta-fz));--presenta-sh:calc(var(--presenta-h)/var(--presenta-p)/var(--presenta-fz));--presenta-scal:calc(var(--presenta-pw)/var(--presenta-p)/var(--presenta-pw)/var(--presenta-fz));width:var(--presenta-sw);height:var(--presenta-sh);font-family:serif;--sceneColorBack:var(--colorBack)}.scene_promise__24VCP{visibility:hidden}.scene_wrapper__3yr1k{width:var(--presenta-w);height:var(--presenta-h);transform:scale(1);transform:scale(var(--presenta-scal));transform-origin:top left;padding:var(--scenePadding);background:var(--sceneColorBack)}.scene_content__1rJf0{width:100%;height:100%;display:flex;flex-direction:column}.scene_viewport__3uNLS{width:100%;height:100%;position:relative;flex:1;overflow:hidden;display:flex;flex-direction:row}";
  var css$1 = {"sceneContainer":"scene_sceneContainer__IgSpB","scene":"scene_scene__3uvTl","promise":"scene_promise__24VCP","wrapper":"scene_wrapper__3yr1k","content":"scene_content__1rJf0","viewport":"scene_viewport__3uNLS"};
  styleInject(css_248z$1);

  var css_248z = ":root{--left:inherit;--top:inherit;--width:100%;--height:100%;--angle:0;--skew:0;--right:inherit;--bottom:inherit;--position:absolute;--radius:none}.block_block__BWbaZ{top:var(--top);left:var(--left);width:var(--width);height:var(--height);bottom:var(--bottom);right:var(--right);position:var(--position);--blockColor:var(--colorFore);--blockBorder:0;transform-origin:top left;transform:rotate(var(--angle)) skew(var(--skew))}.block_inner__3LS6s{opacity:var(--blockOpacity);mix-blend-mode:var(--blockBlend);-webkit-clip-path:var(--blockClip);clip-path:var(--blockClip);box-shadow:var(--blockShadow);overflow:hidden}.block_subinner__3Mwvc{width:100%;height:100%;background:var(--blockBackground);color:var(--blockColor);padding:var(--blockPadding);border-radius:var(--blockRadius);border-width:var(--blockBorder);border-style:solid;overflow:hidden}.block_inner__3LS6s{top:0;left:0;width:100%;height:100%;position:absolute}";
  var css = {"block":"block_block__BWbaZ","inner":"block_inner__3LS6s","subinner":"block_subinner__3Mwvc"};
  styleInject(css_248z);

  const Block = function (blocksElement, blockConfig) {
    const that = this;
    return new Promise((resolve, reject) => {
      that.type = blockConfig.aliasType || blockConfig.type;
      that.index = blockConfig._index;
      var blockInstance = null;
      const sceneConfig = blockConfig._sceneConfig || {};
      blockConfig.contextType = 'block';
      let modInstances = [];
      const modPromises = [];

      if (!that.type) {
        return console.warn('No `type` field found in block ' + that.index);
      }
      /*
      Set the module config from scene settings
      */


      if (sceneConfig.modules) {
        for (const k in sceneConfig.modules) {
          if (!blockConfig.hasOwnProperty('modules')) blockConfig.modules = {};

          if (!blockConfig.modules.hasOwnProperty(k)) {
            blockConfig.modules[k] = sceneConfig.modules[k];
          } else {
            for (const ks in sceneConfig.modules[k]) {
              if (blockConfig.modules[k] && !blockConfig.modules[k][ks]) blockConfig.modules[k][ks] = sceneConfig.modules[k][ks];
            }
          }
        }
      }

      const customSelector = blockConfig.id && blockConfig.id.indexOf('#') === 0 ? `id="${blockConfig.id.replace('#', '')}"` : '';
      const child = utils.div(`<div class="block ${css.block} b b${that.index}">
      <div ${customSelector} class="blockContainer ${css.inner}"></div>
    </div>`);
      const blockContainerWrapper = child.querySelector('.blockContainer');
      const blockContainer = utils.div(`<div class="blockInnerContainer ${css.subinner}">
    </div>`);

      const initModules = runBefore => {
        if (blockConfig.modules) {
          for (const k in blockConfig.modules) {
            const modConfig = blockConfig.modules[k];
            const Mod = modules[k];
            if (!Mod) console.log(`Module "${k}" not found in block. Maybe you forgot to include it.`);

            if (Mod) {
              if (modConfig) {
                if (Mod.runBefore === true && runBefore) {
                  new Mod(child, modConfig, blockConfig);
                } else if (!Mod.runBefore && !runBefore) {
                  const mod = new Mod(child, modConfig, blockConfig);
                  modPromises.push(mod);
                }
              }
            }
          }
        }
      };

      if (!blocks[that.type]) {
        console.log(`block "${that.type}" not found`);
        resolve(that);
      } else {
        blockContainerWrapper.appendChild(blockContainer);
        initModules(true);
        const prom = new blocks[that.type](blockContainer, blockConfig);
        Promise.all([prom]).then(data => {
          // blockContainerWrapper.appendChild(blockContainer) // this was for alpine
          blockInstance = data[0];
          initModules(false);
          Promise.all(modPromises).then(data => {
            modInstances = data;
            resolve(that);
          });
        });
      }

      that.beforeDestroy = () => {
        modInstances.forEach(mod => {
          if (mod.beforeDestroy) mod.beforeDestroy();
        });
        if (blockInstance && blockInstance.beforeDestroy) blockInstance.beforeDestroy();
      };

      that.stepForward = (step, index) => {
        if (blockInstance.stepForward) blockInstance.stepForward(step, index);
      };

      that.destroy = () => {
        if (blockInstance && blockInstance.destroy) blockInstance.destroy();
        blocksElement.removeChild(child); // if (child.parentNode === blocksElement) {
        //   blocksElement.removeChild(child)
        // }
        // try {
        //   blocksElement.removeChild(child)
        // } catch (e) {
        //   console.log('err')
        // }
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
      let blockInstances = [];
      let modInstances = [];
      const blockPromises = [];
      const preModPromises = [];
      const modPromises = [];
      sceneConfig.contextType = 'scene';
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
          } else {
            for (const ks in projectConfig.modules[k]) {
              if (sceneConfig.modules[k] && !sceneConfig.modules[k][ks]) sceneConfig.modules[k][ks] = projectConfig.modules[k][ks];
            }
          }
        }
      }
      /*
      Create the wrapper template
      */


      let currentStep = 0;
      sceneConfig._steps = [];
      const steps = sceneConfig._steps;
      const child = utils.div(`<div 
      class="s ${css$1.sceneContainer}">
      <div class="sceneObject ${css$1.scene}">
        <div class="sceneWrapper ${css$1.wrapper}">
            <div class="${css$1.content}">
                <div class="layout blocksContainer ${css$1.viewport}"></div>
            </div>
        </div>
      </div>
    </div>`);
      cont.appendChild(child);
      sceneConfig._el = child;
      sceneConfig._rootElement = rootElement;
      sceneConfig._mode = projectConfig.mode;
      sceneConfig._projectConfig = projectConfig;
      /**
      Init blocks if any
      */

      const initBlocks = () => {
        const cblocks = sceneConfig.blocks;
        cblocks.forEach((blockConfig, i) => {
          blockConfig._index = i;
          blockConfig._portrait = projectConfig._orientation === 'portrait';
          blockConfig._mode = projectConfig.mode;
          blockConfig._rootElement = rootElement;
          blockConfig._sceneConfig = sceneConfig;
          const blocksContainer = child.querySelector('.blocksContainer');
          blockPromises.push(new Block(blocksContainer, blockConfig));
        });
      };

      const initModules = runBefore => {
        if (sceneConfig.modules) {
          for (const k in sceneConfig.modules) {
            const modConfig = sceneConfig.modules[k];
            const Mod = modules[k];
            if (!Mod) console.log(`Module "${k}" not found. Maybe you forgot to include it.`);

            if (Mod) {
              if (modConfig) {
                if (Mod.runBefore === true && runBefore) {
                  preModPromises.push(new Mod(child, modConfig, sceneConfig));
                } else if (!Mod.runBefore && !runBefore) {
                  const mod = new Mod(child, modConfig, sceneConfig);
                  modPromises.push(mod);
                }
              }
            }
          }
        }
      };

      const initTransition = () => {
        const wrap = child.querySelector('.sceneObject');
        const dir = sceneConfig._presentatransdir === 'backward' ? 'to-left' : 'to-right';
        Transition(wrap).init(dir);
      };

      const startTransition = () => {
        const wrap = child.querySelector('.sceneObject');
        Transition(wrap).start();
        setTimeout(() => {
          Transition(wrap).swap();
        }, projectConfig._transitionDestroyDelay);
      };
      /*
      Public method called by the container to init the destroy phase
      */


      that.destroyAfter = _t => {
        const wrap = child.querySelector('.sceneObject');
        const odir = sceneConfig._presentatransdir === 'backward' ? 'to-right' : 'to-left';
        const ndir = sceneConfig._presentatransdir === 'backward' ? 'to-left' : 'to-right';
        Transition(wrap).clear(odir).end(ndir);
        const t = _t || 0;
        modInstances.forEach(mod => {
          if (mod.beforeDestroy) mod.beforeDestroy();
        });
        blockInstances.forEach(block => {
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
          blockInstances.forEach(block => {
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
        blockInstances.forEach(block => {
          if (block.destroy) block.destroy();
        });
      };

      that.updateBlock = (index, blockConfig) => {
        blockInstances[index].destroy();
        blockConfig._index = index;
        const blocksContainer = child.querySelector('.blocksContainer');
        const prom = new Block(blocksContainer, blockConfig);
        Promise.all([prom]).then(data => {
          blockInstances[index] = data[0];
          sceneConfig.blocks[index] = blockConfig;
        });
      };

      that.sceneConfig = sceneConfig;
      initTransition();
      initModules(true);
      Promise.all(preModPromises).then(data => {
        initBlocks();
        Promise.all(blockPromises).then(data => {
          blockInstances = data;
          initModules(false);
          Promise.all(modPromises).then(data => {
            modInstances = data;
            startTransition();
            child.classList.add('presentaSceneMounted');
            resolve(that);
          });
        });
      });
    });
  };

  const Container = function (rootElement, projectConfig) {
    const that = this;
    return new Promise((resolve, reject) => {
      rootElement.classList.add('presenta');
      const child = utils.div(`<div class="${css$3.mainwrapper}"></div>`);
      child.setAttribute('tabindex', '0');
      rootElement.appendChild(child);
      const supercont = utils.div(`<div class="b ${css$3.superContainer}"></div>`);
      const cont = utils.div(`<div class="a ${css$3.container}"></div>`);
      child.appendChild(supercont);
      supercont.appendChild(cont);
      const scenes = projectConfig.scenes;
      scenes.forEach((s, i) => s.index = i);
      var currentScenes = [];

      const swapScenes = (index, dir) => {
        const sceneProms = [];
        const idx = index;

        if (idx < scenes.length) {
          const sceneConfig = scenes[idx];
          sceneConfig._presentatransdir = dir;
          sceneConfig._router = router;
          sceneProms.push(new Scene(cont, sceneConfig, projectConfig, child));
        }

        Promise.all(sceneProms).then(data => {
          currentScenes.forEach(s => {
            if (s.destroyAfter) {
              s.sceneConfig._presentatransdir = dir;
              s.destroyAfter(projectConfig._transitionDestroyDelay);
            }
          });
          currentScenes = data; // if first run
          // check if it creates issue
          // added because Countainer wasn't under promise

          resolve(that);
        });
      };

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
      } // u.fit(cont, projectConfig, rootElement)


      that.destroy = () => {
        currentScenes.forEach(s => {
          if (s.destroy) s.destroy();
        });
        router.destroy();
      };

      that.updateBlock = (index, blockConfig) => {
        currentScenes[0].updateBlock(index, blockConfig);
      };

      that.router = router;
      that.config = projectConfig;
    });
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

  var defaults = (config => {
    const defaultConfig = {
      aspect: 1.6,
      adapt: false,
      mode: 'present',
      controllers: {},
      modules: {},
      plugins: [],
      _transitionDestroyDelay: 1000
    };

    for (const k in defaultConfig) {
      if (!config.hasOwnProperty(k)) {
        config[k] = defaultConfig[k];
      } // else {
      //   if (typeof defaultConfig[k] === 'object') {
      //     for (const h in defaultConfig[k]) {
      //       if (config[k] && !config[k].hasOwnProperty(h)) {
      //         config[k][h] = defaultConfig[k][h]
      //       }
      //     }
      //   }
      // }

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
    if (!el || !config) {
      return new Promise((resolve, reject) => {
        reject({
          message: 'Missing required parameters, wrapper or config.'
        });
      });
    }

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

  Presenta.version = version;
  Presenta.addBlock = add;
  Presenta.addController = add$2;
  Presenta.addModule = add$1;
  Presenta.installed = {
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

}));
