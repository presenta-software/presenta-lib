// https://www.presenta.cc v0.0.0 Copyright 2020 Fabio Franchino
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Presenta = factory());
}(this, (function () { 'use strict';

  var version = "0.0.0";

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

  var css_248z = ".presenta * {\n  box-sizing: border-box;\n}\n\n\n.presenta {\n  position: relative;\n  /* width: 100%;\n    height: 100%; */\n  --fontHeading: Georgia, \"Times New Roman\", Times, serif;\n  --fontText: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\n    \"Lucida Sans\", Arial, sans-serif;\n\n  --pw: 960;\n  --w: 960px;\n  --h: 540px;\n  --vp: 960;\n  --fz: 1;\n  --p: calc(var(--pw) / var(--vp));\n  /* --sw: calc(var(--w) / var(--p) / var(--fz));\n  --sh: calc(var(--h) / var(--p) / var(--fz));\n  --scal: calc(var(--pw) / var(--p) / var(--pw) / var(--fz)); */\n\n  /* PUBLIC VARS */\n  --slidepadding: 0;\n  --blockweight: 1;\n  --blockpadding: 0;\n}\n\n.presenta,\n.presenta .colorvar__a {\n  --backcolor: #fff;\n  --forecolor: #000;\n  --accentcolor: #444;\n  --otheraccentcolor: #ddd;\n  --overlaycolor: var(--backcolor);\n}\n.presenta .colorvar__b {\n  --backcolor: #000;\n  --forecolor: #fff;\n  --accentcolor: #999;\n  --otheraccentcolor: #ccc;\n  --overlaycolor: var(--backcolor);\n}\n.presenta .colorvar__c {\n  --backcolor: #444;\n  --forecolor: #ffffff;\n  --accentcolor: #fff;\n  --otheraccentcolor: #ccc;\n  --overlaycolor: var(--backcolor);\n}\n\n\n\n\n\n.layout__block .blocksContainer {\n  display: block;\n}\n.layout__block .blocksContainer > div {\n  height: initial;\n}\n\n.layout__rows .blocksContainer {\n  display: flex;\n  flex-direction: column;\n}\n.layout__rows .blocksContainer > div {\n  width: 100%;\n}\n\n.layout__stacked .blocksContainer {\n  position: relative;\n}\n.layout__stacked .blocksContainer > div {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n\n\n";
  styleInject(css_248z);

  var css_248z$1 = "@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Roboto+Mono:ital,wght@0,400;0,700;1,400&display=swap');\n.theme__original{\n  --fontHeading: 'Roboto Mono', monospace;\n  --fontText: 'Montserrat', sans-serif;\n}\n\n.theme__original,\n.theme__original.colorvar__a,\n.theme__original .colorvar__a {\n  --backcolor: #ebded1;\n  --forecolor: #0a47d1;\n  --accentcolor: #fb4138;\n  --otheraccentcolor: #ffffff;\n}\n.theme__original.colorvar__b,\n.theme__original .colorvar__b {\n  --backcolor: #0a47d1;\n  --forecolor: #ebded1;\n  --accentcolor: #ffffff;\n  --otheraccentcolor: #fb4138;\n}\n.theme__original.colorvar__c,\n.theme__original .colorvar__c {\n  --backcolor: #fb4138;\n  --forecolor: #ffffff;\n  --accentcolor: #ebded1;\n  --otheraccentcolor: #0a47d1;\n}\n  ";
  styleInject(css_248z$1);

  var css_248z$2 = "@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Work+Sans&display=swap');\n.theme__vibrant{\n  --fontHeading: 'Work Sans', sans-serif;\n  --fontText: 'Playfair Display', serif;\n}\n\n\n.theme__vibrant,\n.theme__vibrant.colorvar__a,\n.theme__vibrant .colorvar__a {\n  --backcolor: #ffe600;\n  --forecolor: #000;\n  --accentcolor: #ff6400;\n  --otheraccentcolor: #fff;\n}\n.theme__vibrant.colorvar__b,\n.theme__vibrant .colorvar__b {\n  --backcolor: #000;\n  --forecolor: rgb(255, 230, 0);\n  --accentcolor: #fff;\n  --otheraccentcolor: rgb(255, 100, 0);\n}\n.theme__vibrant.colorvar__c,\n.theme__vibrant .colorvar__c {\n  --backcolor: rgb(255, 100, 0);\n  --forecolor: #fff;\n  --accentcolor: rgb(255, 230, 0);\n  --otheraccentcolor: #000;\n}\n";
  styleInject(css_248z$2);

  var css_248z$3 = ":root {\n  --textsize:1.5rem;\n  --textpadding: 1rem;\n  --textalign: center; }\n\n.p-scene-enter-transition .textContent > * {\n  transition: opacity .5s ease-in-out;\n  transition-delay: .25s; }\n\n.p-scene-enter-start .textContent > * {\n  opacity: 0; }\n\n.p-scene-enter-end .textContent > * {\n  opacity: 1; }\n\n.p-scene-leave-transition .textContent > * {\n  transition: opacity .25s; }\n\n.p-scene-leave-start .textContent > * {\n  opacity: 1; }\n\n.p-scene-leave-end .textContent > * {\n  opacity: 0; }\n\n.p.textposition__topleft .pretext,\n.p.textposition__tl .pretext {\n  align-items: flex-start;\n  justify-content: flex-start; }\n\n.p.textposition__topcenter .pretext,\n.p.textposition__tc .pretext {\n  align-items: flex-start;\n  justify-content: center; }\n\n.p.textposition__topright .pretext,\n.p.textposition__tr .pretext {\n  align-items: flex-start;\n  justify-content: flex-end; }\n\n.p.textposition__centerleft .pretext,\n.p.textposition__cl .pretext {\n  align-items: center;\n  justify-content: flex-start; }\n\n.p.textposition__center .pretext,\n.p.textposition__cc .pretext {\n  align-items: center;\n  justify-content: center; }\n\n.p.textposition__centerright .pretext,\n.p.textposition__cr .pretext {\n  align-items: center;\n  justify-content: flex-end; }\n\n.p.textposition__bottomleft .pretext,\n.p.textposition__bl .pretext {\n  align-items: flex-end;\n  justify-content: flex-start; }\n\n.p.textposition__bottomcenter .pretext,\n.p.textposition__bc .pretext {\n  align-items: flex-end;\n  justify-content: center; }\n\n.p.textposition__bottomright .pretext,\n.p.textposition__br .pretext {\n  align-items: flex-end;\n  justify-content: flex-end; }\n\n.s.textposition__topleft .pretext,\n.s.textposition__tl .pretext {\n  align-items: flex-start;\n  justify-content: flex-start; }\n\n.s.textposition__topcenter .pretext,\n.s.textposition__tc .pretext {\n  align-items: flex-start;\n  justify-content: center; }\n\n.s.textposition__topright .pretext,\n.s.textposition__tr .pretext {\n  align-items: flex-start;\n  justify-content: flex-end; }\n\n.s.textposition__centerleft .pretext,\n.s.textposition__cl .pretext {\n  align-items: center;\n  justify-content: flex-start; }\n\n.s.textposition__center .pretext,\n.s.textposition__cc .pretext {\n  align-items: center;\n  justify-content: center; }\n\n.s.textposition__centerright .pretext,\n.s.textposition__cr .pretext {\n  align-items: center;\n  justify-content: flex-end; }\n\n.s.textposition__bottomleft .pretext,\n.s.textposition__bl .pretext {\n  align-items: flex-end;\n  justify-content: flex-start; }\n\n.s.textposition__bottomcenter .pretext,\n.s.textposition__bc .pretext {\n  align-items: flex-end;\n  justify-content: center; }\n\n.s.textposition__bottomright .pretext,\n.s.textposition__br .pretext {\n  align-items: flex-end;\n  justify-content: flex-end; }\n\n.b.textposition__topleft .pretext,\n.b.textposition__tl .pretext {\n  align-items: flex-start;\n  justify-content: flex-start; }\n\n.b.textposition__topcenter .pretext,\n.b.textposition__tc .pretext {\n  align-items: flex-start;\n  justify-content: center; }\n\n.b.textposition__topright .pretext,\n.b.textposition__tr .pretext {\n  align-items: flex-start;\n  justify-content: flex-end; }\n\n.b.textposition__centerleft .pretext,\n.b.textposition__cl .pretext {\n  align-items: center;\n  justify-content: flex-start; }\n\n.b.textposition__center .pretext,\n.b.textposition__cc .pretext {\n  align-items: center;\n  justify-content: center; }\n\n.b.textposition__centerright .pretext,\n.b.textposition__cr .pretext {\n  align-items: center;\n  justify-content: flex-end; }\n\n.b.textposition__bottomleft .pretext,\n.b.textposition__bl .pretext {\n  align-items: flex-end;\n  justify-content: flex-start; }\n\n.b.textposition__bottomcenter .pretext,\n.b.textposition__bc .pretext {\n  align-items: flex-end;\n  justify-content: center; }\n\n.b.textposition__bottomright .pretext,\n.b.textposition__br .pretext {\n  align-items: flex-end;\n  justify-content: flex-end; }\n\n.g.textposition__topleft .pretext,\n.g.textposition__tl .pretext {\n  align-items: flex-start;\n  justify-content: flex-start; }\n\n.g.textposition__topcenter .pretext,\n.g.textposition__tc .pretext {\n  align-items: flex-start;\n  justify-content: center; }\n\n.g.textposition__topright .pretext,\n.g.textposition__tr .pretext {\n  align-items: flex-start;\n  justify-content: flex-end; }\n\n.g.textposition__centerleft .pretext,\n.g.textposition__cl .pretext {\n  align-items: center;\n  justify-content: flex-start; }\n\n.g.textposition__center .pretext,\n.g.textposition__cc .pretext {\n  align-items: center;\n  justify-content: center; }\n\n.g.textposition__centerright .pretext,\n.g.textposition__cr .pretext {\n  align-items: center;\n  justify-content: flex-end; }\n\n.g.textposition__bottomleft .pretext,\n.g.textposition__bl .pretext {\n  align-items: flex-end;\n  justify-content: flex-start; }\n\n.g.textposition__bottomcenter .pretext,\n.g.textposition__bc .pretext {\n  align-items: flex-end;\n  justify-content: center; }\n\n.g.textposition__bottomright .pretext,\n.g.textposition__br .pretext {\n  align-items: flex-end;\n  justify-content: flex-end; }\n";
  styleInject(css_248z$3);

  var css_248z$4 = ".style_text__3T1cl{\n    width: 100%;\n    height: 100%;\n    background-position: center;\n    background-size: cover;\n    background-color: var(--backcolor);\n    position: relative;\n    \n}\n\n.style_inner__11UJC{\n    position: relative;\n    width: 100%;\n    height: 100%;\n}\n\n.style_pretext__cLjqD{\n    display: flex;\n    width: 100%;\n    height: 100%;\n    align-items: center;\n    justify-content: center;\n}\n\n.style_textbox__1Vb-V{\n    padding: var(--textboxpadding);\n    text-align: var(--textalign);\n    /*overflow: hidden; */ /* removed for shadow, maybe neccessary */\n    font-size: var(--textsize);\n    color: var(--forecolor);\n    --backmark: var(--accentcolor);\n    --foremark: var(--backcolor);\n    --textaccentcolor: var(--accentcolor);\n    font-family: var(--fontHeading);\n}\n\n.style_itext__jz90o{\n    border: var(--textborder) solid var(--forecolor);\n    padding: var(--textpadding);\n    border-radius: var(--textboxradius);\n    box-shadow: var(--textboxshadow);\n    background-color: var(--textboxbackcolor);\n}\n\n.style_itext__jz90o img{\n    object-fit: contain;\n    height: 4em;\n    vertical-align: middle;\n}\n\n\n.style_itext__jz90o mark {\n  background-color: var(--backmark);\n  color: var(--foremark);\n  padding: 0 0.5rem;\n}\n.style_itext__jz90o high {\n  color: var(--textaccentcolor);\n}\n.style_itext__jz90o bord {\n  border: 8px solid var(--backmark);\n  padding: 0 0.5rem;\n}\n.style_itext__jz90o a {\n  color: var(--textaccentcolor);\n}\n\n.style_itext__jz90o blockquote {\n  font-size: 2em;\n  font-weight: 400;\n  font-style: italic;\n}\n\n.style_itext__jz90o h1,\n.style_itext__jz90o h2,\n.style_itext__jz90o h3,\n.style_itext__jz90o h4,\n.style_itext__jz90o h5,\n.style_itext__jz90o h6,\n.style_itext__jz90o p,\n.style_itext__jz90o ul,\n.style_itext__jz90o blockquote {\n  margin: 0;\n}\n\n.style_itext__jz90o ul,\n.style_itext__jz90o ol {\n  font-size: 1.5em;\n  line-height: 1.1em;\n  text-align: left;\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n  counter-reset: li;\n  padding: 0.5rem 0;\n}\n\n.style_itext__jz90o li{\n  padding: 0.25rem 0;\n  list-style-position:inside;\n  margin-bottom: 2px;\n  padding: .25em;\n  padding-left: 0.8em;\n}\n.style_itext__jz90o ul li::before {\n  content: \"\\2013\"; \n  display: inline-block; \n  width: 0.8em;\n  margin-left: -0.8em;\n}\n.style_itext__jz90o ol li::before {\n  counter-increment: li;  \n  content:  \".\" counter(li); \n  display: inline-block; \n  width: 1.1em; \n  margin-left: -1.3em;\n  margin-right: 0.2em; \n  text-align: right; \n  direction: rtl;\n}\n\n.style_itext__jz90o li p{\n  display: inline;\n}\n\n\n.style_itext__jz90o h1,\n.style_itext__jz90o h2,\n.style_itext__jz90o h3,\n.style_itext__jz90o h4,\n.style_itext__jz90o h5,\n.style_itext__jz90o h6 {\n  font-family: var(--fontText);\n  padding: .5rem 0;\n}\n\n.style_itext__jz90o h1{\n  font-size: 2em;\n}\n.style_itext__jz90o h2{\n  font-size: 1.5em;\n}\n.style_itext__jz90o h3{\n  font-size: 1.17em;\n}\n.style_itext__jz90o h4{\n  font-size: 1em;\n}\n.style_itext__jz90o h5{\n  font-size: 0.83em;\n}\n.style_itext__jz90o h6{\n  font-size: 0.67em;\n}\n\n.style_itext__jz90o p{\n  padding: .5rem 0;\n}\n\n.style_itext__jz90o hr{\n  border: 1px solid var(--foremark);\n  margin: .5rem 0;\n}\n\n.style_itext__jz90o h1:first-child,\n.style_itext__jz90o h2:first-child,\n.style_itext__jz90o h3:first-child,\n.style_itext__jz90o h1:last-child,\n.style_itext__jz90o h2:last-child,\n.style_itext__jz90o h3:last-child{\n    padding: 0;\n}\n\n.style_itext__jz90o table{\n    width: 100%;\n}\n.style_itext__jz90o tr{\n    padding: 0;\n}\n\n.style_itext__jz90o td, .style_itext__jz90o th{\n    padding:.5rem;\n    border-bottom:1px solid var(--forecolor);\n}\n\n";
  var css = {"text":"style_text__3T1cl","inner":"style_inner__11UJC","pretext":"style_pretext__cLjqD","textbox":"style_textbox__1Vb-V","itext":"style_itext__jz90o"};
  styleInject(css_248z$4);

  // import md5 from 'md5'
  const md5 = s => s.split('').reduce((a, b) => {
    a = (a << 5) - a + b.charCodeAt(0);
    return a & a;
  }, 0);

  const uid = chunk => {
    return 'uid' + md5(JSON.stringify(chunk));
  };

  const select = selector => {
    return typeof selector === 'string' ? document.querySelector(selector) : selector;
  };

  const props = (p, _namespace) => {
    const namespace = _namespace ? _namespace + '__' : '';
    const res = {
      classes: '',
      styles: ''
    };
    if (!p) return res;

    for (const k in p) {
      const v = p[k] + '';
      const isclass = v.substr(0, 1) === '.';

      if (isclass) {
        const classname = v.substr(1);
        res.classes += namespace + k + '__' + classname + ' ';
      }
    }

    for (const k in p) {
      const v = p[k] + '';
      const isclass = v.substr(0, 1) === '.';
      if (!isclass) res.styles += '--' + namespace + k + ':' + p[k] + ';';
    }

    return res;
  };

  const div = str => new DOMParser().parseFromString(str, 'text/html').body.childNodes[0];

  const fit = (el, config, par) => {
    const columns = config.columns || 1;
    const padding = config.padding || 0;
    const bbox = getComputedStyle(el);
    const cw = +bbox.width.split('px')[0];
    const ch = +bbox.height.split('px')[0];
    let aspect = config.aspect || 1.6;

    if (config.adapt) {
      const currAspect = cw / ch;
      aspect = currAspect;
    }

    par.style.setProperty('--h', parseInt(960 / aspect) + 'px');
    const pad = padding * columns;
    const w = 960;
    const h = 960 / aspect;
    const scaleW = (w + pad) * 100 / cw;
    const scaleH = (h + pad) * 100 / ch;
    let scale = Math.max(scaleW, scaleH);
    if (columns > 1) scale = (w + pad) * 100 / cw;
    par.style.setProperty('--fz', 1 / (100 / scale) * columns);
  };

  const event = (name, detail) => {
    const prop = {
      bubbles: true,
      detail
    };
    return new CustomEvent(name, prop);
  };

  var u = {
    uid,
    select,
    props,
    div,
    fit,
    event
  };

  const text = function (_el, _config) {
    const el = u.select(_el);
    const html = _config.text || '';
    let fsize = _config.scale || 2;
    const child = u.div(`<div class="c ${css.text}">
    <div class="${css.inner}">
      <div class="pretext ${css.pretext}">
        <div class="${css.textbox}">
          <div class="textContent ${css.itext} ${css.fadein}">
            ${html}
          </div>
        </div>
      </div>
    </div>
  </div>`);

    this.beforeDestroy = () => {};

    this.stepForward = () => {
      console.log('stepForward');
    };

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
      child.style.setProperty('--textsize', `${fsize}rem`);
      const mel = child.querySelector('.' + css.inner);
      const mbox = mel.getBoundingClientRect();
      const el = child.querySelector('.' + css.textbox);
      const bbox = el.getBoundingClientRect();

      if (parseInt(mbox.width) < parseInt(bbox.width) || parseInt(mbox.height) < parseInt(bbox.height)) {
        fsize -= 0.1;
        return compute();
      } else {
        setTimeout(() => {
          child.querySelector('.' + css.inner).style.visibility = 'visible';
        });
      }
    };

    child.querySelector('.' + css.inner).style.visibility = 'hidden';
    setTimeout(compute);
  };

  var css_248z$5 = ".presenta{\n    --embedpadding: 0;\n    --embedbackcolor: none;\n}";
  styleInject(css_248z$5);

  var css_248z$6 = ".style_embed__2Pre2{\n    background-color: var(--backcolor);\n}\n\n.style_inner__3WOWs{\n    padding: var(--embedpadding);\n    position: relative;\n}\n\n.style_frame__28PUh{\n    background-color: var(--embedbackcolor);\n    position: relative;\n}\n\n.style_embed__2Pre2, .style_inner__3WOWs, .style_frame__28PUh{\n    width: 100%;\n    height: 100%;\n}\n\niframe{\n    width: 100%;\n    height: 100%;\n    border: none;\n}\n\n.style_loading__1w7wc{\n    position: absolute;\n    top:0;\n    left:0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color:var(--forecolor);\n    font-family: var(--fontText);\n    background-color: var(--backcolor);\n}\n\n.style_blockmouse__3bXSl{\n    position: absolute;\n    top:0;\n    left:0;\n    width: 100%;\n    height: 100%;\n}";
  var css$1 = {"embed":"style_embed__2Pre2","inner":"style_inner__3WOWs","frame":"style_frame__28PUh","loading":"style_loading__1w7wc","blockmouse":"style_blockmouse__3bXSl"};
  styleInject(css_248z$6);

  const iframePrimaryDomain = str => {
    if (!str) return '';
    const reg = new RegExp('src="(.*)', 'gim');
    const url = reg.exec(str);
    const dom = url[1].match(/http(s?):\/\/([\w]+\.){1}([\w]+\.?)+/gim);
    return dom.length > 0 ? dom[0] : null;
  };

  const embed = function (_el, _config) {
    const el = u.select(_el);
    let iframe = null;

    if (_config.url) {
      iframe = `<iframe src="${_config.url}"></iframe>`;
    }

    if (_config.code) {
      iframe = _config.code;
    }

    const name = iframePrimaryDomain(iframe);
    const child = u.div(`<div class="c ${css$1.embed}">
    <div class="${css$1.inner}">
        <div class="${css$1.frame}">${iframe}</div>
        <div class="cover ${css$1.loading}">
            <h1>Loading from <mark>${name}</mark></h1>
        </div>
        <div class="${css$1.blockmouse}"></div>
    </div>
  </div>`);

    this.beforeDestroy = () => {};

    el.appendChild(child);

    if (iframe) {
      const frame = child.querySelector('iframe');
      frame.addEventListener('load', () => {
        child.querySelector('.cover').style.display = 'none';
      });
    }
  };

  var css_248z$7 = ".style_images__26AtP{\n    width: 100%;\n    height: 100%;\n}\n\n.style_inner__181qE{\n    display: flex;\n    width: 100%;\n    height: 100%;\n}\n\n.style_preimg__2_wv2{\n    overflow: hidden;\n    flex:1;\n}\n.style_preimg__2_wv2 img{\n    width: 100%;\n    height:100%;\n    object-fit: cover;\n}";
  var css$2 = {"images":"style_images__26AtP","inner":"style_inner__181qE","preimg":"style_preimg__2_wv2"};
  styleInject(css_248z$7);

  const images = function (_el, _config) {
    const el = u.select(_el);
    let imageschunk = '';

    _config.images.forEach(img => {
      imageschunk += `<div class="${css$2.preimg}"><img src="${img.url}" /></div>`;
    });

    const child = u.div(`<div class="${css$2.images}">
    <div class="imagesContainer ${css$2.inner}">
        ${imageschunk}
    </div>
  </div>`);

    this.beforeDestroy = () => {};

    this.stepForward = step => {};

    el.appendChild(child);
  };

  var css_248z$8 = ".style_debug__1-XHT{\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}";
  var css$3 = {"debug":"style_debug__1-XHT"};
  styleInject(css_248z$8);

  const debug = function (_el, _config) {
    const el = u.select(_el);
    const child = u.div(`<div class="${css$3.debug}">
    <h1>DEBUG <div class="step">0</div></h1> 
  </div>`);

    this.beforeDestroy = () => {};

    this.stepForward = step => {
      child.querySelector('.step').innerHTML = step;
    };

    el.appendChild(child); // setTimeout(() => {
    //   el.dispatchEvent(new CustomEvent('testevent', { bubbles: true, detail: { some: 'data' } }))
    // }, 1000)
  };

  var css_248z$9 = "\n.block_block__BWbaZ {\n  width: 100%;\n  height: 100%;\n  flex: 1;\n  flex: var(--blockweight);\n  overflow: hidden;\n}\n\n.block_inner__3LS6s {\n  width: 100%;\n  height: 100%;\n  padding: var(--blockpadding);\n}\n";
  var css$4 = {"block":"block_block__BWbaZ","inner":"block_inner__3LS6s"};
  styleInject(css_248z$9);

  const blocks = {
    debug,
    text,
    embed,
    images
  }; // {type: 'other', module: other}

  const add = (type, module) => {
    if (blocks[type]) {
      return console.warn(`module type ${type} already defined`);
    }

    blocks[type] = module;
  };

  const Block = function (sceneElement, blockConfig) {
    this.uid = u.uid(blockConfig);
    this.type = blockConfig.type;
    this.index = blockConfig.index;
    this.block = null;

    if (!this.type) {
      return console.warn('No `type` field found in block ' + this.index);
    }

    let step = 0;
    const props = u.props(blockConfig.props);
    const child = u.div(`<div class="${css$4.block} b b${this.index} ${props.classes}" style="${props.styles}">
    <div class="blockContainer ${css$4.inner}"></div>
  </div>`);
    const blockContainer = child.querySelector('.blockContainer');

    if (!blocks[this.type]) {
      console.log(`block "${this.type}" not found`);
    } else {
      this.block = new blocks[this.type](blockContainer, blockConfig);
    }

    this.beforeDestroy = () => {
      if (this.block.beforeDestroy) this.block.beforeDestroy();
    };

    this.stepForward = () => {
      step++;

      if (this.block.stepForward) {
        this.block.stepForward(step);
      } else {
        console.warn(`The block "${this.type}" doesn't implement the method "stepForward" but this scene tried to use it`);
      }
    };

    sceneElement.appendChild(child);
  };

  var css_248z$a = ".scene_sceneContainer__IgSpB, .scene_test__3LYpD{\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n}\n.scene_scene__3uvTl{\n    --sw: calc(var(--w) / var(--p) / var(--fz));\n    --sh: calc(var(--h) / var(--p) / var(--fz));\n    --scal: calc(var(--pw) / var(--p) / var(--pw) / var(--fz));\n    \n    width: var(--sw);\n    height: var(--sh);\n    font-family: serif;\n    user-select: none;\n}\n\n.scene_wrapper__3yr1k{\n    width: var(--w);\n    height: var(--h);\n    transform: scale(1);\n    transform: scale(var(--scal));\n    transform-origin: top left;\n    overflow: hidden;\n\n    padding: var(--slidepadding);\n    /* background-color: var(--backcolor); */\n}\n.scene_content__1rJf0{\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n}\n\n.scene_bcontainer__3MFBK,\n.scene_fcontainer__1E_0g{\n    top:0;\n    left:0;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n}\n\n\n.scene_viewport__3uNLS{\n    width: 100%;\n    height: 100%;\n    position: relative;\n    flex:1;\n    overflow: hidden;\n    \n    display: flex;\n    flex-direction: row;\n}\n.scene_viewport__3uNLS > div{\n    height: 100%;\n}\n\n\n";
  var css$5 = {"sceneContainer":"scene_sceneContainer__IgSpB","test":"scene_test__3LYpD","scene":"scene_scene__3uvTl","wrapper":"scene_wrapper__3yr1k","content":"scene_content__1rJf0","bcontainer":"scene_bcontainer__3MFBK","fcontainer":"scene_fcontainer__1E_0g","viewport":"scene_viewport__3uNLS"};
  styleInject(css_248z$a);

  var css_248z$b = ".presenta{\n    --pagenumber__padding:.5rem; \n    --pagenumber__textalign:right; \n}\n\n.pagenumberContent{\n    color:var(--forecolor);\n    font-family: var(--fontText);\n}\n\n.pagenumber__style__inverted .pagenumberContent{\n    background-color: var(--forecolor);\n    color:var(--backcolor);\n}";
  styleInject(css_248z$b);

  var css_248z$c = ".style_pagenumber__2BX53{\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: flex-end;   \n}\n\n.style_pagenumber__2BX53 > div{\n    width: 100%;\n    text-align: var(--pagenumber__textalign);\n    padding: var(--pagenumber__padding);\n}\n";
  var css$6 = {"pagenumber":"style_pagenumber__2BX53"};
  styleInject(css_248z$c);

  const pagenumber = function (sceneElement, modConfig, sceneConfig, projectConfig) {
    const cPage = sceneConfig.index + 1;
    const tPage = projectConfig.scenes.length;
    let str = `${cPage} / ${tPage}`;

    if (modConfig.template) {
      const template = modConfig.template;
      str = template.replace(/%s/mg, cPage).replace(/%S/mg, tPage);
    }

    const child = u.div(`<div class="${css$6.pagenumber}">
    <div class="pagenumberContent">${str}</div> 
  </div>`);
    sceneElement.appendChild(child);
  }; // pagenumber.BACK = true

  const modules = {
    pagenumber
  };

  const add$1 = (type, module) => {
    if (modules[type]) {
      return console.warn(`module type ${type} already defined`);
    }

    modules[type] = module;
  };

  var css_248z$d = ".horizontalSlide .p-scene-enter-transition {\n  transition: transform 1s cubic-bezier(0.2, 0.8, 0.05, 0.95); }\n\n.horizontalSlide .to-right.p-scene-enter-start {\n  transform: translateX(100%); }\n\n.horizontalSlide .to-right.p-scene-enter-end {\n  transform: translateX(0); }\n\n.horizontalSlide .to-left.p-scene-enter-start {\n  transform: translateX(-100%); }\n\n.horizontalSlide .to-left.p-scene-enter-end {\n  transform: translateX(0); }\n\n.horizontalSlide .p-scene-leave-transition {\n  transition: transform 1s cubic-bezier(0.2, 0.8, 0.05, 0.95); }\n\n.horizontalSlide .to-right.p-scene-leave-start {\n  transform: translateX(0); }\n\n.horizontalSlide .to-right.p-scene-leave-end {\n  transform: translateX(-100%); }\n\n.horizontalSlide .to-left.p-scene-leave-start {\n  transform: translateX(0); }\n\n.horizontalSlide .to-left.p-scene-leave-end {\n  transform: translateX(100%); }\n";
  styleInject(css_248z$d);

  var css_248z$e = ".verticalIn .p-scene-enter-transition {\n  transition: all 1s cubic-bezier(0.95, 0.05, 0.05, 0.95); }\n\n.verticalIn .p-scene-enter-start {\n  transform: translateY(150%); }\n\n.verticalIn .p-scene-enter-end {\n  transform: translateY(0); }\n\n.verticalIn .p-scene-leave-transition {\n  transition: all 1s cubic-bezier(0.95, 0.05, 0.05, 0.95); }\n\n.verticalIn .p-scene-leave-start {\n  transform: scale(1); }\n\n.verticalIn .p-scene-leave-end {\n  transform: scale(0.5); }\n";
  styleInject(css_248z$e);

  const transition = wrapper => {
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

  const Scene = function (containerElement, sceneConfig, projectConfig) {
    this.blocks = [];
    /*
      Let's notify the user about missing fields
    */

    if (!sceneConfig.blocks) {
      return console.warn('No `blocks` array found in scene ' + sceneConfig.index);
    }

    if (sceneConfig.blocks.length === 0) {
      return console.warn('`blocks` is empty in scene ' + sceneConfig.index);
    }
    /*
      Check if transition has been defined at project level or scene level
    */


    const hasTransition = projectConfig ? projectConfig.transition || sceneConfig.transition : sceneConfig.transition;
    /*
      Prepare scene props if defined
    */

    const props = u.props(sceneConfig.props);
    /*
      Prepare modules props if defined
    */

    const modprops = {
      classes: '',
      styles: ''
    };

    if (sceneConfig.modules) {
      for (const k in sceneConfig.modules) {
        const cmod = sceneConfig.modules[k];

        if (cmod.props) {
          const mp = u.props(cmod.props, k);
          modprops.classes += mp.classes;
          modprops.styles += mp.styles;
        }
      }
    }
    /*
      Create the wrapper template
    */


    let currentStep = 0;
    const steps = sceneConfig.steps || [];
    const child = u.div(`<div 
      class="s ${css$5.sceneContainer} ${props.classes}"
      style="${props.styles}">
      <div class="sceneObject ${css$5.scene}">
        <div class="${css$5.wrapper}">
            <div class="${css$5.content} ${modprops.classes}" style="${modprops.styles}">
                <div class="backContainer ${css$5.bcontainer}"></div>
                <div class="blocksContainer ${css$5.viewport}"></div>
                <div class="frontContainer ${css$5.fcontainer}"></div>
            </div>
        </div>
      </div>
  </div>`);
    containerElement.appendChild(child);
    this.el = child;
    /*
      Init modules if any
    */

    if (sceneConfig.modules) {
      const back = child.querySelector('.backContainer');
      const front = child.querySelector('.frontContainer');

      for (const k in sceneConfig.modules) {
        const modConfig = sceneConfig.modules[k];
        const Mod = modules[k];
        const cont = Mod.BACK ? back : front;
        const mod = new Mod(cont, modConfig, sceneConfig, projectConfig);
      }
    }
    /*
      Init blocks if any
    */


    const blocks = sceneConfig.blocks;
    blocks.forEach((blockConfig, i) => {
      blockConfig.index = i;
      const block = new Block(child.querySelector('.blocksContainer'), blockConfig);
      this.blocks.push(block);
    });
    /*
      Activate the transition system at scene level if requested
    */

    if (sceneConfig.transition) {
      this.el.classList.add(sceneConfig.transition);
    }
    /*
      Activate the theme at scene level if requested
    */


    if (sceneConfig.theme) {
      this.el.classList.add('theme__' + sceneConfig.theme);
    }
    /*
      Run the entering transition
    */


    if (hasTransition) {
      const wrap = this.el.querySelector('.sceneObject');
      transition(wrap).start('to-right');
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
        transition(wrap).clear('to-left').end('to-right');
      }

      const t = _t || 0;
      this.blocks.forEach(block => block.beforeDestroy());
      setTimeout(() => {
        containerElement.removeChild(child);
      }, t);
    };
    /*
      Public method called by the container move forward the step progress
    */


    this.stepForward = () => {
      if (currentStep < steps.length) {
        const idx = steps[currentStep];
        this.blocks[idx].stepForward();
        currentStep++;
      }
    };

    this.uid = u.uid(sceneConfig);
  };

  var css_248z$f = ".style_grid__1AGYU {\n  display: flex;\n  flex-wrap: wrap;\n  overflow-y: auto;\n  height: 100%;\n}\n.style_grid__1AGYU > div {\n  height: initial;\n  margin-bottom: 0.5rem;\n}\n.style_col1__2sfnY > div {\n  width: 100%;\n}\n.style_col2__3yP-h > div {\n  width: 50%;\n}\n.style_col3__32U3b > div {\n  width: 33.3333333333%;\n}\n.style_col4__1vNJ5 > div {\n  width: 25%;\n}\n";
  var css$7 = {"grid":"style_grid__1AGYU","col1":"style_col1__2sfnY","col2":"style_col2__3yP-h","col3":"style_col3__32U3b","col4":"style_col4__1vNJ5"};
  styleInject(css_248z$f);

  const grid = function (rootElement, projectConfig) {
    const columns = projectConfig.columns || 1;
    const child = u.div(`<div class="a ${css$7.grid} ${css$7['col' + columns]}"></div>`);
    const scenes = projectConfig.scenes;
    scenes.forEach((b, i) => {
      const scene = new Scene(child, b, projectConfig);
    });
    rootElement.appendChild(child);
    u.fit(child, projectConfig, rootElement);
  };

  var css_248z$g = ".style_show__keV71 {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  overflow: hidden;\n}\n\n.style_show__keV71 > div{\n  position: absolute;\n  top:0;\n  left:0;\n  width: 100%;\n}\n\n.style_focused__lSH54{\n  outline: 3px solid green;\n}";
  var css$8 = {"show":"style_show__keV71","focused":"style_focused__lSH54"};
  styleInject(css_248z$g);

  const autoplay = function (rootElement, router, config) {
    let timer = null;
    const loop = !config.noloop;
    const defdelay = config.delay || 2000;
    let lastdelay = 0;

    const runTime = delay => {
      lastdelay = delay;
      clearTimeout(timer);
      timer = setTimeout(() => {
        router.next();
      }, delay);
    };

    runTime(defdelay);
    router.on('end', evt => {
      if (loop) {
        router.goto(0);
        router.notify('nextIndex');
      }
    });
    router.on('indexChanged', evt => {
      const cScene = router.projectConfig.scenes[evt.currentIndex];
      const delay = cScene.duration || defdelay;
      runTime(delay);
    });

    this.pause = () => {
      clearTimeout(timer);
    };

    this.resume = () => {
      runTime(lastdelay);
    };
  };

  const keyboard = function (rootElement, router, config) {
    const setKeyListener = e => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        router.next();
      }

      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        router.prev();
      }
    };

    rootElement.addEventListener('keyup', setKeyListener);
  };

  var css_248z$h = ".style_arrows__2HgOY{\n    position: absolute;\n    top:0;\n    left:0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    transition: opacity .35s;\n}\n\n.style_left__3_kwS, .style_right__RERAa{\n    width: 50px;\n    height: 50px;\n    background-color: var(--forecolor);\n    transition: background-color .3s;\n    cursor: pointer;\n}\n\n\n.style_arrows__2HgOY.style_hide__3B8Al{\n    opacity: 0;\n}";
  var css$9 = {"arrows":"style_arrows__2HgOY","left":"style_left__3_kwS","right":"style_right__RERAa","hide":"style_hide__3B8Al"};
  styleInject(css_248z$h);

  const arrows = function (rootElement, router, config) {
    let timer = null;
    const child = u.div(`<div class="${css$9.arrows}">
    <div class="handleL ${css$9.left}"></div>
    <div class="handleR ${css$9.right}"></div>
  </div>`);
    rootElement.appendChild(child);
    child.querySelector('.handleL').addEventListener('click', e => {
      router.prev();
      scheduleForHide();
    });
    child.querySelector('.handleR').addEventListener('click', e => {
      router.next();
      scheduleForHide();
    });
    child.addEventListener('mousemove', e => {
      scheduleForHide();
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

  var css_248z$i = ".style_black__27h0m{\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top:0;\n    left:0;\n\n    background-color: black;\n    opacity: 0;\n    pointer-events: none;\n    transition: opacity .5s cubic-bezier(0.8, 0.2, 0.2, 0.8);\n}";
  var css$a = {"black":"style_black__27h0m"};
  styleInject(css_248z$i);

  const black = function (rootElement, router, config) {
    let visible = false;
    const child = u.div(`<div class="${css$a.black}"></div>`);
    rootElement.appendChild(child);

    const setKeyListener = e => {
      if (e.key === 'b') {
        visible = !visible;
        child.style.opacity = visible ? 1 : 0;
      }
    };

    rootElement.addEventListener('keyup', setKeyListener);
  };

  const io = {
    autoplay,
    keyboard,
    arrows,
    black
  };

  const add$2 = (type, module) => {
    if (io[type]) {
      return console.warn(`router io ${type} already defined`);
    }

    io[type] = module;
  };

  var css_248z$j = ".router_router__2R2qw{\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top:0;\n    left:0;\n}";
  var css$b = {"router":"router_router__2R2qw"};
  styleInject(css_248z$j);

  const Router = function (rootElement, projectConfig) {
    const child = u.div(`<div class="${css$b.router}"></div>`);
    rootElement.appendChild(child);
    child.setAttribute('tabindex', '0');
    this.projectConfig = projectConfig;
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
      this.notify('indexChanged');
    };

    this.notify = evt => {
      const sceneConfig = scenes[currentIndex];
      const props = u.props(sceneConfig.props);
      child.classList.remove(...child.classList);
      child.classList.add(css$b.router);

      if (props.classes) {
        const cls = props.classes.split(' ');
        cls.forEach(c => {
          const cc = c.trim();
          if (cc) child.classList.add(cc);
        });
      }

      if (listeners[evt]) {
        listeners[evt].forEach(clb => {
          clb({
            currentIndex,
            currentStep
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

    this.totalScenes = () => numScenes;

    this.totalSteps = () => numSteps;

    this.currentIndex = () => currentIndex;

    this.currentStep = () => currentStep;

    if (projectConfig.router) {
      for (const k in projectConfig.router) {
        const modConfig = projectConfig.router[k];
        if (modConfig) registeredIO[k] = new io[k](child, this, modConfig);
      }
    }
  };

  const show = function (rootElement, projectConfig) {
    const child = u.div(`<div class="a ${css$8.show}"></div>`);
    const scenes = projectConfig.scenes;
    var currentScene = new Scene(child, scenes[0], projectConfig);
    rootElement.appendChild(child);
    this.router = new Router(rootElement, projectConfig);
    this.router.on('nextIndex', evt => {
      if (currentScene) {
        currentScene.destroyAfter(1000);
      }

      currentScene = new Scene(child, scenes[evt.currentIndex], projectConfig);
    });
    this.router.on('prevIndex', evt => {
      if (currentScene) {
        currentScene.destroyAfter(1000);
      }

      currentScene = new Scene(child, scenes[evt.currentIndex], projectConfig);
    });
    this.router.on('stepChanged', evt => {
      currentScene.stepForward();
    });

    this.currentScene = () => {
      return currentScene;
    };

    projectConfig.columns = 1; // override in case it's set

    u.fit(child, projectConfig, rootElement);
    const resizeObserver = new ResizeObserver(entries => {
      u.fit(child, projectConfig, rootElement);
    });
    resizeObserver.observe(child);
  };

  const containers = {
    grid,
    show
  };

  const Container = function (rootElement, projectConfig) {
    this.el = u.select(rootElement);
    this.config = projectConfig;
    /*
        Let's check and fix the wrapper size
    */

    const size = getComputedStyle(this.el);
    const w = +size.width.split('px')[0];
    const h = +size.height.split('px')[0];
    if (w <= 0) this.el.style.width = '360px';
    if (h <= 0) this.el.style.height = '200px';
    /*
      Let's notify the user about mandatory fields
    */

    if (!projectConfig.scenes) {
      return console.warn('No `scenes` array found');
    }

    if (projectConfig.scenes.length === 0) {
      return console.warn('`scenes` is empty');
    }
    /*
      Distribuite the module config across scenes
    */


    if (projectConfig.modules) {
      for (const k in projectConfig.modules) {
        projectConfig.scenes.forEach(scene => {
          if (!scene.hasOwnProperty('modules')) scene.modules = {};
          if (!scene.modules.hasOwnProperty(k)) scene.modules[k] = projectConfig.modules[k];
        });
      }
    }
    /*
      Activate the transition system if requested
    */


    if (projectConfig.transition) {
      this.el.classList.add(projectConfig.transition);
    }
    /*
      Activate the theme if requested
    */


    if (projectConfig.theme) {
      this.el.classList.add('theme__' + projectConfig.theme);
    }
    /*
      Decorate the incoming data structure
    */


    projectConfig.scenes.forEach((sceneConfig, i) => {
      sceneConfig.index = i;
      sceneConfig.blocks.forEach((blockConfig, j) => {
        blockConfig.index = j;
      });
    });
    /*
      Time to init the container
    */

    const contType = projectConfig.container || 'show';

    if (!containers[contType]) {
      console.warn(`container "${contType}" not found`);
    } else {
      this.el.classList.add('presenta');
      this.container = new containers[contType](this.el, projectConfig);
      this.uid = u.uid(projectConfig);
    }
  };

  var mergeDefaults = (config => {
    const defaultConfig = {
      adapt: true,
      router: {
        keyboard: true,
        arrows: true,
        black: true
      },
      modules: {
        pagenumber: true
      },
      theme: 'original',
      transition: 'horizontalSlide'
    };

    for (const k in defaultConfig) {
      if (!config.hasOwnProperty(k)) {
        config[k] = defaultConfig[k];
      } else {
        if (typeof defaultConfig[k] === 'object') {
          for (const h in defaultConfig[k]) {
            if (!config[k].hasOwnProperty(h)) {
              config[k][h] = defaultConfig[k][h];
            }
          }
        }
      }
    }

    return config;
  });

  const Presenta = function (el, config) {
    mergeDefaults(config);
    return new Container(el, config);
  };

  Presenta.version = version; // final blocks

  Presenta.Text = text;
  Presenta.Embed = embed;
  Presenta.Images = images;
  Presenta.Debug = debug; // containers

  Presenta.Show = show;
  Presenta.Grid = grid; // core/internals

  Presenta.Block = Block;
  Presenta.Scene = Scene;
  Presenta.Container = Container; // helpers

  Presenta.addBlock = add;
  Presenta.addRouterController = add$2;
  Presenta.addModule = add$1;

  return Presenta;

})));
