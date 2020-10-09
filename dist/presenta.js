// https://lib.presenta.cc v0.0.21 Copyright 2020 Fabio Franchino
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Presenta = factory());
}(this, (function () { 'use strict';

  var version = "0.0.21";

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

  var css_248z = ".presenta *{box-sizing:border-box}.presenta{position:relative;--pw:960;--w:960px;--h:540px;--vp:960;--fz:1;--p:calc(var(--pw)/var(--vp))}:root{--fontHeading:Georgia,\"Times New Roman\",Times,serif;--fontText:\"Trebuchet MS\",\"Lucida Sans Unicode\",\"Lucida Grande\",\"Lucida Sans\",Arial,sans-serif}.colorvar__a,:root{--backcolor:#fff;--forecolor:#000;--accentcolor:#444;--otheraccentcolor:#ddd;--overlaycolor:var(--backcolor)}.colorvar__b{--backcolor:#000;--accentcolor:#999}.colorvar__b,.colorvar__c{--forecolor:#fff;--otheraccentcolor:#ccc;--overlaycolor:var(--backcolor)}.colorvar__c{--backcolor:#444;--accentcolor:#fff}.layout__block .blocksContainer{display:block}.layout__block .blocksContainer>div{height:auto}.layout__rows .blocksContainer{display:flex;flex-direction:column}.layout__rows .blocksContainer>div{width:100%}.layout__stack .blocksContainer{position:relative}.layout__stack .blocksContainer>div{position:absolute;top:0;left:0;width:100%;height:100%}";
  styleInject(css_248z);

  var css_248z$1 = "@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Roboto+Mono:ital,wght@0,400;0,700;1,400&display=swap\");.fontkit__original{--fontHeading:\"Roboto Mono\",monospace;--fontText:\"Montserrat\",sans-serif}";
  styleInject(css_248z$1);

  var css_248z$2 = "@import url(\"https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Work+Sans&display=swap\");.fontkit__vibrant{--fontHeading:\"Work Sans\",sans-serif;--fontText:\"Playfair Display\",serif}";
  styleInject(css_248z$2);

  var css_248z$3 = ".scheme__original,.scheme__original.colorvar__a,.scheme__original .colorvar__a{--backcolor:#ebded1;--forecolor:#0a47d1;--accentcolor:#fb4138;--otheraccentcolor:#fff}.scheme__original.colorvar__b,.scheme__original .colorvar__b{--backcolor:#0a47d1;--forecolor:#ebded1;--accentcolor:#fff;--otheraccentcolor:#fb4138}.scheme__original.colorvar__c,.scheme__original .colorvar__c{--backcolor:#fb4138;--forecolor:#fff;--accentcolor:#ebded1;--otheraccentcolor:#0a47d1}";
  styleInject(css_248z$3);

  var css_248z$4 = ".scheme__vibrant,.scheme__vibrant.colorvar__a,.scheme__vibrant .colorvar__a{--backcolor:#ffe600;--forecolor:#000;--accentcolor:#ff6400;--otheraccentcolor:#fff}.scheme__vibrant.colorvar__b,.scheme__vibrant .colorvar__b{--backcolor:#000;--forecolor:#ffe600;--accentcolor:#fff;--otheraccentcolor:#ff6400}.scheme__vibrant.colorvar__c,.scheme__vibrant .colorvar__c{--backcolor:#ff6400;--forecolor:#fff;--accentcolor:#ffe600;--otheraccentcolor:#000}";
  styleInject(css_248z$4);

  var css_248z$5 = ".scheme__polite,.scheme__polite.colorvar__a,.scheme__polite .colorvar__a{--backcolor:#322067;--forecolor:#feb8ba;--accentcolor:#449eaf;--otheraccentcolor:#fff}.scheme__polite.colorvar__b,.scheme__polite .colorvar__b{--backcolor:#feb8ba;--forecolor:#322067;--accentcolor:#fff;--otheraccentcolor:#449eaf}.scheme__polite.colorvar__c,.scheme__polite .colorvar__c{--backcolor:#fff;--forecolor:#322067;--accentcolor:#449eaf;--otheraccentcolor:#feb8ba}";
  styleInject(css_248z$5);

  var css_248z$6 = ".scheme__breeze,.scheme__breeze.colorvar__a,.scheme__breeze .colorvar__a{--backcolor:#a9dbd5;--forecolor:#000;--accentcolor:#fff;--otheraccentcolor:#38999d}.scheme__breeze.colorvar__b,.scheme__breeze .colorvar__b{--backcolor:#000;--forecolor:#a9dbd5;--accentcolor:#fff;--otheraccentcolor:#38999d}.scheme__breeze.colorvar__c,.scheme__breeze .colorvar__c{--backcolor:#fff;--forecolor:#38999d;--accentcolor:#a9dbd5;--otheraccentcolor:#000}";
  styleInject(css_248z$6);

  var css_248z$7 = ".scheme__sunny,.scheme__sunny.colorvar__a,.scheme__sunny .colorvar__a{--backcolor:#f9ffb1;--forecolor:#072020;--accentcolor:#ec4225;--otheraccentcolor:#9eb0bb}.scheme__sunny.colorvar__b,.scheme__sunny .colorvar__b{--backcolor:#072020;--forecolor:#f9ffb1;--accentcolor:#ec4225;--otheraccentcolor:#9eb0bb}.scheme__sunny.colorvar__c,.scheme__sunny .colorvar__c{--backcolor:#ec4225;--forecolor:#f9ffb1;--accentcolor:#9eb0bb;--otheraccentcolor:#072020}";
  styleInject(css_248z$7);

  var css_248z$8 = ".scheme__acid,.scheme__acid.colorvar__a,.scheme__acid .colorvar__a{--backcolor:#000;--forecolor:#fff;--accentcolor:#eeff2e;--otheraccentcolor:#de1318}.scheme__acid.colorvar__b,.scheme__acid .colorvar__b{--backcolor:#eeff2e;--forecolor:#000;--accentcolor:#de1318;--otheraccentcolor:#fff}.scheme__acid.colorvar__c,.scheme__acid .colorvar__c{--backcolor:#de1318;--forecolor:#eeff2e;--accentcolor:#fff;--otheraccentcolor:#000}";
  styleInject(css_248z$8);

  var css_248z$9 = ".scheme__novel,.scheme__novel.colorvar__a,.scheme__novel .colorvar__a{--backcolor:#3b7bc3;--forecolor:#f9fb45;--accentcolor:#fff;--otheraccentcolor:#000}.scheme__novel.colorvar__b,.scheme__novel .colorvar__b{--backcolor:#000;--forecolor:#f9fb45;--accentcolor:#fff;--otheraccentcolor:#3b7bc3}.scheme__novel.colorvar__c,.scheme__novel .colorvar__c{--backcolor:#f9fb45;--forecolor:#000;--accentcolor:#3b7bc3;--otheraccentcolor:#fff}";
  styleInject(css_248z$9);

  var css_248z$a = ".scheme__doub,.scheme__doub.colorvar__a,.scheme__doub .colorvar__a{--backcolor:#e5ff9d;--forecolor:#1c003f;--accentcolor:#69567c;--otheraccentcolor:#fff}.scheme__doub.colorvar__b,.scheme__doub .colorvar__b{--backcolor:#1c003f;--forecolor:#fff;--accentcolor:#e5ff9d;--otheraccentcolor:#69567c}.scheme__doub.colorvar__c,.scheme__doub .colorvar__c{--backcolor:#69567c;--forecolor:#e5ff9d;--accentcolor:#fff;--otheraccentcolor:#1c003f}";
  styleInject(css_248z$a);

  var css_248z$b = ".scheme__mayb,.scheme__mayb.colorvar__a,.scheme__mayb .colorvar__a{--backcolor:#d0caa9;--forecolor:#30302f;--accentcolor:#ec4a25;--otheraccentcolor:#fff}.scheme__mayb.colorvar__b,.scheme__mayb .colorvar__b{--backcolor:#30302f;--forecolor:#d0caa9;--accentcolor:#ec4a25;--otheraccentcolor:#fff}.scheme__mayb.colorvar__c,.scheme__mayb .colorvar__c{--backcolor:#ec4a25;--forecolor:#fff;--accentcolor:#d0caa9;--otheraccentcolor:#30302f}";
  styleInject(css_248z$b);

  var css_248z$c = ":root{--scenePadding:0}.scene_sceneContainer__IgSpB{width:100%;height:100%;display:flex;align-items:center;justify-content:center;position:relative}.scene_scene__3uvTl{--sw:calc(var(--w)/var(--p)/var(--fz));--sh:calc(var(--h)/var(--p)/var(--fz));--scal:calc(var(--pw)/var(--p)/var(--pw)/var(--fz));width:var(--sw);height:var(--sh);font-family:serif;user-select:none}.scene_wrapper__3yr1k{width:var(--w);height:var(--h);transform:scale(1);transform:scale(var(--scal));transform-origin:top left;overflow:hidden;padding:var(--scenePadding)}.scene_content__1rJf0{width:100%;height:100%;display:flex;flex-direction:column;overflow:hidden}.scene_bcontainer__3MFBK,.scene_fcontainer__1E_0g{top:0;left:0;width:100%;height:100%;position:absolute}.scene_viewport__3uNLS{width:100%;height:100%;position:relative;flex:1;overflow:hidden;display:flex;flex-direction:row}.scene_viewport__3uNLS>div{height:100%}";
  var css = {"sceneContainer":"scene_sceneContainer__IgSpB","scene":"scene_scene__3uvTl","wrapper":"scene_wrapper__3yr1k","content":"scene_content__1rJf0","bcontainer":"scene_bcontainer__3MFBK","fcontainer":"scene_fcontainer__1E_0g","viewport":"scene_viewport__3uNLS"};
  styleInject(css_248z$c);

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
    const bbox = getComputedStyle(el);
    const cw = +bbox.width.split('px')[0];
    const ch = +bbox.height.split('px')[0];
    let aspect = config.aspect;

    if (config.adapt) {
      const currAspect = cw / ch;
      aspect = currAspect;
    }

    par.style.setProperty('--h', parseInt(960 / aspect) + 'px');
    const w = 960;
    const h = 960 / aspect;
    const scaleW = w * 100 / cw;
    const scaleH = h * 100 / ch;
    const scale = Math.max(scaleW, scaleH);
    par.style.setProperty('--fz', 1 / (100 / scale));
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
    div,
    fit,
    event
  };

  var css_248z$d = ":root{--blockWeight:1;--blockPadding:0;--blockOpacity:1;--blockBlend:unset}.block_block__BWbaZ{--blockBackColor:var(--backcolor);width:100%;height:100%;flex:1;flex:var(--blockWeight);overflow:hidden}.block_inner__3LS6s{width:100%;height:100%;background:var(--blockBackColor);padding:var(--blockPadding);opacity:var(--blockOpacity);mix-blend-mode:var(--blockBlend)}";
  var css$1 = {"block":"block_block__BWbaZ","inner":"block_inner__3LS6s"};
  styleInject(css_248z$d);

  var css_248z$e = ".style_debug__1-XHT{width:100%;height:100%;display:flex;align-items:center;justify-content:center}";
  var css$2 = {"debug":"style_debug__1-XHT"};
  styleInject(css_248z$e);

  const debug = function (_el, _config) {
    const el = utils.select(_el);
    const child = utils.div(`<div class="${css$2.debug}">
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

  var css_248z$f = ":root{--textsize:1.5rem;--textpadding:1rem;--textalign:center}.textbox__inverted{--textboxpadding:1rem;--textboxbackcolor:var(--forecolor);--textboxradius:0;--textboxborder:0;--textboxshadow:0 0 0 var(--accentcolor);--textboxcolor:var(--backcolor)}.p.textposition__tl .pretext,.p.textposition__topleft .pretext{align-items:flex-start;justify-content:flex-start}.p.textposition__tc .pretext,.p.textposition__topcenter .pretext{align-items:flex-start;justify-content:center}.p.textposition__topright .pretext,.p.textposition__tr .pretext{align-items:flex-start;justify-content:flex-end}.p.textposition__centerleft .pretext,.p.textposition__cl .pretext{align-items:center;justify-content:flex-start}.p.textposition__cc .pretext,.p.textposition__center .pretext{align-items:center;justify-content:center}.p.textposition__centerright .pretext,.p.textposition__cr .pretext{align-items:center;justify-content:flex-end}.p.textposition__bl .pretext,.p.textposition__bottomleft .pretext{align-items:flex-end;justify-content:flex-start}.p.textposition__bc .pretext,.p.textposition__bottomcenter .pretext{align-items:flex-end;justify-content:center}.p.textposition__bottomright .pretext,.p.textposition__br .pretext{align-items:flex-end;justify-content:flex-end}.s.textposition__tl .pretext,.s.textposition__topleft .pretext{align-items:flex-start;justify-content:flex-start}.s.textposition__tc .pretext,.s.textposition__topcenter .pretext{align-items:flex-start;justify-content:center}.s.textposition__topright .pretext,.s.textposition__tr .pretext{align-items:flex-start;justify-content:flex-end}.s.textposition__centerleft .pretext,.s.textposition__cl .pretext{align-items:center;justify-content:flex-start}.s.textposition__cc .pretext,.s.textposition__center .pretext{align-items:center;justify-content:center}.s.textposition__centerright .pretext,.s.textposition__cr .pretext{align-items:center;justify-content:flex-end}.s.textposition__bl .pretext,.s.textposition__bottomleft .pretext{align-items:flex-end;justify-content:flex-start}.s.textposition__bc .pretext,.s.textposition__bottomcenter .pretext{align-items:flex-end;justify-content:center}.s.textposition__bottomright .pretext,.s.textposition__br .pretext{align-items:flex-end;justify-content:flex-end}.b.textposition__tl .pretext,.b.textposition__topleft .pretext{align-items:flex-start;justify-content:flex-start}.b.textposition__tc .pretext,.b.textposition__topcenter .pretext{align-items:flex-start;justify-content:center}.b.textposition__topright .pretext,.b.textposition__tr .pretext{align-items:flex-start;justify-content:flex-end}.b.textposition__centerleft .pretext,.b.textposition__cl .pretext{align-items:center;justify-content:flex-start}.b.textposition__cc .pretext,.b.textposition__center .pretext{align-items:center;justify-content:center}.b.textposition__centerright .pretext,.b.textposition__cr .pretext{align-items:center;justify-content:flex-end}.b.textposition__bl .pretext,.b.textposition__bottomleft .pretext{align-items:flex-end;justify-content:flex-start}.b.textposition__bc .pretext,.b.textposition__bottomcenter .pretext{align-items:flex-end;justify-content:center}.b.textposition__bottomright .pretext,.b.textposition__br .pretext{align-items:flex-end;justify-content:flex-end}";
  styleInject(css_248z$f);

  var css_248z$g = ".style_text__3T1cl{color:var(--forecolor)}.style_inner__11UJC,.style_text__3T1cl{width:100%;height:100%;position:relative}.style_pretext__cLjqD{display:flex;width:100%;height:100%;align-items:center;justify-content:center}.style_textbox__1Vb-V{padding:var(--textboxpadding);text-align:var(--textalign);font-size:var(--textsize);color:var(--textboxcolor);--backmark:var(--accentcolor);--foremark:var(--backcolor);--textaccentcolor:var(--accentcolor);font-family:var(--fontText)}.style_itext__jz90o{border:var(--textboxborder) solid var(--accentcolor);padding:var(--textpadding);border-radius:var(--textboxradius);box-shadow:var(--textboxshadow);background-color:var(--textboxbackcolor)}.style_itext__jz90o img{object-fit:contain;height:4em;vertical-align:middle}.style_itext__jz90o mark{background-color:var(--backmark);color:var(--foremark);padding:0 .5rem}.style_itext__jz90o high{color:var(--textaccentcolor)}.style_itext__jz90o bord{border:8px solid var(--backmark);padding:0 .5rem}.style_itext__jz90o a{color:var(--textaccentcolor)}.style_itext__jz90o blockquote{font-size:2em;font-weight:400;font-style:italic}.style_itext__jz90o blockquote,.style_itext__jz90o h1,.style_itext__jz90o h2,.style_itext__jz90o h3,.style_itext__jz90o h4,.style_itext__jz90o h5,.style_itext__jz90o h6,.style_itext__jz90o p,.style_itext__jz90o ul{margin:0}.style_itext__jz90o ol,.style_itext__jz90o ul{font-size:1.5em;line-height:1.1em;text-align:left;margin:0;list-style-type:none;counter-reset:li;padding:.5rem 0}.style_itext__jz90o li{list-style-position:inside;margin-bottom:2px;padding:.25em .25em .25em .8em}.style_itext__jz90o ul li:before{content:\"\\2013\";display:inline-block;width:.8em;margin-left:-.8em}.style_itext__jz90o ol li:before{counter-increment:li;content:\".\" counter(li);display:inline-block;width:1.1em;margin-left:-1.3em;margin-right:.2em;text-align:right;direction:rtl}.style_itext__jz90o li p{display:inline}.style_itext__jz90o code,.style_itext__jz90o pre{text-align:left}.style_itext__jz90o h1,.style_itext__jz90o h2,.style_itext__jz90o h3,.style_itext__jz90o h4,.style_itext__jz90o h5,.style_itext__jz90o h6{font-family:var(--fontHeading);padding:.5rem 0}.style_itext__jz90o h1{font-size:2em}.style_itext__jz90o h2{font-size:1.5em}.style_itext__jz90o h3{font-size:1.17em}.style_itext__jz90o h4{font-size:1em}.style_itext__jz90o h5{font-size:.83em}.style_itext__jz90o h6{font-size:.67em}.style_itext__jz90o p{padding:.5rem 0}.style_itext__jz90o hr{border:1px solid var(--forecolor);margin:.5rem 0}.style_itext__jz90o h1:first-child,.style_itext__jz90o h1:last-child,.style_itext__jz90o h2:first-child,.style_itext__jz90o h2:last-child,.style_itext__jz90o h3:first-child,.style_itext__jz90o h3:last-child{padding:0}.style_itext__jz90o table{width:100%}.style_itext__jz90o tr{padding:0}.style_itext__jz90o td,.style_itext__jz90o th{padding:.5rem;border-bottom:1px solid var(--forecolor)}";
  var css$3 = {"text":"style_text__3T1cl","inner":"style_inner__11UJC","pretext":"style_pretext__cLjqD","textbox":"style_textbox__1Vb-V","itext":"style_itext__jz90o"};
  styleInject(css_248z$g);

  const text = function (el, config) {
    const html = config.text || '';
    let fsize = config.scale || 1;
    const child = utils.div(`<div class="c ${css$3.text}">
    <div class="${css$3.inner}">
      <div class="pretext ${css$3.pretext}">
        <div class="${css$3.textbox}">
          <div class="textContent ${css$3.itext} ${css$3.fadein}">
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
      const mel = child.querySelector('.' + css$3.inner);
      const mbox = mel.getBoundingClientRect();
      const el = child.querySelector('.' + css$3.textbox);
      const bbox = el.getBoundingClientRect();

      if (parseInt(mbox.width) < parseInt(bbox.width) || parseInt(mbox.height) < parseInt(bbox.height)) {
        fsize -= 0.1;
        return compute();
      } else {
        setTimeout(() => {
          child.querySelector('.' + css$3.inner).style.visibility = 'visible';
        });
      }
    };

    child.querySelector('.' + css$3.inner).style.visibility = 'hidden';
    setTimeout(compute);
  };

  var css_248z$h = ":root{--embedPadding:0;--embedBackcolor:none}.style_inner__3WOWs{padding:var(--embedPadding);position:relative}.style_frame__28PUh{background-color:var(--embedBackcolor);position:relative}.style_embed__2Pre2,.style_frame__28PUh,.style_inner__3WOWs,iframe{width:100%;height:100%}iframe{border:none}.style_loading__1w7wc{display:flex;align-items:center;justify-content:center;color:var(--forecolor);font-family:var(--fontText);background-color:var(--backcolor)}.style_blockmouse__3bXSl,.style_loading__1w7wc,.style_poster__1TOx3{position:absolute;top:0;left:0;width:100%;height:100%}.style_poster__1TOx3{background-color:var(--backcolor)}.style_poster__1TOx3 img{width:100%;height:100%}";
  var css$4 = {"inner":"style_inner__3WOWs","frame":"style_frame__28PUh","embed":"style_embed__2Pre2","loading":"style_loading__1w7wc","blockmouse":"style_blockmouse__3bXSl","poster":"style_poster__1TOx3"};
  styleInject(css_248z$h);

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
    const coverFrame = `<div class="cover ${css$4.loading}"><h1>Embed from <mark>${name}</mark></h1></div>`;
    const postersize = config.postersize || 'cover';
    const sizecmd = 'object-fit:' + postersize + ';';
    const posterFrame = config.poster ? `<div class="${css$4.poster}"><img style="${sizecmd}" src="${config.poster}" /></div>` : '';
    const child = utils.div(`<div class="c ${css$4.embed}">
    <div class="${css$4.inner}">
        <div class="${css$4.frame}">${iframe}</div>
        ${coverFrame}
        ${posterFrame}
        <div class="${css$4.blockmouse}"></div>
    </div>
  </div>`);
    el.appendChild(child);

    this.beforeDestroy = () => {};

    if (iframe && presentMode) {
      const frame = child.querySelector('iframe');
      frame.addEventListener('load', () => {
        child.querySelector('.' + css$4.loading).style.display = 'none';
        if (posterFrame) child.querySelector('.' + css$4.poster).style.display = 'none';
      });
    }
  };

  var css_248z$i = ":root{--imagePadding:0;--imageBorder:none;--imageShadow:none}.style_image__1fZIQ,.style_inner__3tyMU{width:100%;height:100%}.style_inner__3tyMU{display:flex}.style_preimg__2ypvx{overflow:hidden;flex:1;padding:var(--imagePadding)}.style_preimg__2ypvx img{width:100%;height:100%;border:var(--imageBorder);box-shadow:var(--imageShadow)}";
  var css$5 = {"image":"style_image__1fZIQ","inner":"style_inner__3tyMU","preimg":"style_preimg__2ypvx"};
  styleInject(css_248z$i);

  const image = function (el, config) {
    const size = config.size || 'cover';
    const url = config.url;
    const sizecmd = 'object-fit:' + size + ';';
    const imageschunk = `<div class="presentablock__image ${css$5.preimg}">
        <img style="${sizecmd}" src="${url}" />
      </div>`;
    const child = utils.div(`<div class="${css$5.image}">
    <div class="imagesContainer ${css$5.inner}">
        ${imageschunk}
    </div>
  </div>`);

    this.beforeDestroy = () => {};

    this.stepForward = step => {};

    el.appendChild(child);
  };

  var css_248z$j = ":root{--videoSize:cover;--videoPosition:center}.style_video__1qbdJ{width:100%;height:100%;display:flex;align-items:center;justify-content:center}.style_video__1qbdJ video{width:100%;height:100%;object-fit:var(--videoSize);object-position:var(--videoPosition)}";
  var css$6 = {"video":"style_video__1qbdJ"};
  styleInject(css_248z$j);

  const video = function (el, config, rootElement, projectConfig) {
    const previewMode = projectConfig.mode === 'preview';
    const presentMode = projectConfig.mode === 'present';
    const poster = config.poster ? `poster=${config.poster}` : '';
    const loop = config.loop ? 'loop' : '';
    const autoplay = config.autoplay && presentMode ? 'autoplay' : '';
    const src = config.url ? `src=${config.url}` : '';
    const child = utils.div(`<div class="${css$6.video}">
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

  var css_248z$k = ".style_solid__wiwvr{--solidColor:var(--backcolor);width:100%;height:100%;display:flex;align-items:center;justify-content:center;background-color:var(--solidColor)}";
  var css$7 = {"solid":"style_solid__wiwvr"};
  styleInject(css_248z$k);

  const solid = function (el, config) {
    const style = config.color ? `style="background:${config.color};"` : '';
    const child = utils.div(`<div ${style} class="${css$7.solid}"></div>`);

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

  const add = (type, module) => {
    if (blocks[type]) {
      return console.warn(`module type ${type} already defined`);
    }

    blocks[type] = module;
  };

  const Block = function (blocksElement, blockConfig, rootElement, projectConfig) {
    this.type = blockConfig.type;
    this.index = blockConfig.index;
    this.block = null;

    if (!this.type) {
      return console.warn('No `type` field found in block ' + this.index);
    }

    let step = 0;
    const props = utils.props(blockConfig.props);
    const child = utils.div(`<div class="block ${css$1.block} b b${this.index} ${props.classes}" style="${props.styles}">
    <div class="blockContainer ${css$1.inner}"></div>
  </div>`);
    this.el = child;
    const blockContainer = child.querySelector('.blockContainer');

    if (!blocks[this.type]) {
      console.log(`block "${this.type}" not found`);
    } else {
      this.block = new blocks[this.type](blockContainer, blockConfig, rootElement, projectConfig);
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

    this.destroy = () => {
      if (this.block.destroy) this.block.destroy();
    };

    blocksElement.appendChild(child);
  };

  const modules = {};

  const add$1 = (type, module) => {
    if (modules[type]) {
      return console.warn(`module type ${type} already defined`);
    } // if (module.init) module.init() // what's that???


    modules[type] = module;
  }; // add('pagenumber', pagenumber)

  var css_248z$l = ".transition__horizontalSlide .p-scene-enter-transition{transition:transform 1s cubic-bezier(1,0,0,1)}.transition__horizontalSlide .to-right.p-scene-enter-start{transform:translateX(100%)}.transition__horizontalSlide .to-right.p-scene-enter-end{transform:translateX(0)}.transition__horizontalSlide .to-left.p-scene-enter-start{transform:translateX(-100%)}.transition__horizontalSlide .to-left.p-scene-enter-end{transform:translateX(0)}.transition__horizontalSlide .p-scene-leave-transition{transition:transform 1s cubic-bezier(1,0,0,1)}.transition__horizontalSlide .to-right.p-scene-leave-start{transform:translateX(0)}.transition__horizontalSlide .to-right.p-scene-leave-end{transform:translateX(-100%)}.transition__horizontalSlide .to-left.p-scene-leave-start{transform:translateX(0)}.transition__horizontalSlide .to-left.p-scene-leave-end{transform:translateX(100%)}";
  styleInject(css_248z$l);

  var css_248z$m = ".transition__verticalIn .p-scene-enter-transition{transition:all .75s cubic-bezier(.2,.8,.05,.95)}.transition__verticalIn .p-scene-enter-start{transform:translateY(150%)}.transition__verticalIn .p-scene-enter-end{transform:translateY(0)}.transition__verticalIn .p-scene-leave-transition{transition:all .75s cubic-bezier(.2,.8,.05,.95)}.transition__verticalIn .p-scene-leave-start{transform:scale(1)}.transition__verticalIn .p-scene-leave-end{transform:scale(.5)}";
  styleInject(css_248z$m);

  var css_248z$n = ".transition__outIn .p-scene-enter-transition{opacity:0}.transition__outIn .p-scene-enter-ended{opacity:1}.transition__outIn .p-scene-enter-transition .textContent>*{transition:opacity 1s ease-out,transform 1s cubic-bezier(.2,.8,.05,.95)}.transition__outIn .p-scene-enter-transition .textContent>:first-child{transition-delay:1.15s}.transition__outIn .p-scene-enter-transition .textContent>:nth-child(2){transition-delay:1.3s}.transition__outIn .p-scene-enter-transition .textContent>:nth-child(3){transition-delay:1.45s}.transition__outIn .p-scene-enter-transition .textContent>:nth-child(4){transition-delay:1.6s}.transition__outIn .p-scene-enter-transition .textContent>:nth-child(5){transition-delay:1.75s}.transition__outIn .p-scene-enter-transition .textContent>:nth-child(6){transition-delay:1.9s}.transition__outIn .p-scene-enter-transition .textContent>:nth-child(7){transition-delay:2.05s}.transition__outIn .p-scene-enter-transition .textContent>:nth-child(8){transition-delay:2.2s}.transition__outIn .p-scene-enter-transition .textContent>:nth-child(9){transition-delay:2.35s}.transition__outIn .p-scene-enter-transition .textContent>:nth-child(10){transition-delay:2.5s}.transition__outIn .p-scene-enter-transition .textContent>:nth-child(11){transition-delay:2.65s}.transition__outIn .p-scene-enter-transition .textContent>:nth-child(12){transition-delay:2.8s}.transition__outIn .p-scene-enter-transition .textContent>:nth-child(13){transition-delay:2.95s}.transition__outIn .p-scene-enter-transition .textContent>:nth-child(14){transition-delay:3.1s}.transition__outIn .p-scene-enter-transition .textContent>:nth-child(15){transition-delay:3.25s}.transition__outIn .p-scene-enter-transition .textContent>:nth-child(16){transition-delay:3.4s}.transition__outIn .p-scene-enter-transition .textContent>:nth-child(17){transition-delay:3.55s}.transition__outIn .p-scene-enter-transition .textContent>:nth-child(18){transition-delay:3.7s}.transition__outIn .p-scene-enter-transition .textContent>:nth-child(19){transition-delay:3.85s}.transition__outIn .p-scene-enter-transition .textContent>:nth-child(20){transition-delay:4s}.transition__outIn .p-scene-enter-transition .blockContainer>div{transition:background-color 1s cubic-bezier(1,0,0,1);transition-delay:1s}.transition__outIn .p-scene-enter-start .blockContainer>div{background-color:transparent}.transition__outIn .p-scene-enter-start .textContent>*{opacity:0;transform:translateY(30px)}.transition__outIn .p-scene-enter-end .textContent>*{opacity:1;transform:translateY(0)}.transition__outIn .p-scene-leave-transition .textContent>*{transition:opacity .75s cubic-bezier(.165,.84,.44,1),transform .75s cubic-bezier(.165,.84,.44,1)}.transition__outIn .p-scene-leave-transition .textContent>:nth-child(0){transition-delay:0s}.transition__outIn .p-scene-leave-transition .textContent>:first-child{transition-delay:.1s}.transition__outIn .p-scene-leave-transition .textContent>:nth-child(2){transition-delay:.2s}.transition__outIn .p-scene-leave-transition .textContent>:nth-child(3){transition-delay:.3s}.transition__outIn .p-scene-leave-transition .textContent>:nth-child(4){transition-delay:.4s}.transition__outIn .p-scene-leave-transition .textContent>:nth-child(5){transition-delay:.5s}.transition__outIn .p-scene-leave-transition .textContent>:nth-child(6){transition-delay:.6s}.transition__outIn .p-scene-leave-transition .textContent>:nth-child(7){transition-delay:.7s}.transition__outIn .p-scene-leave-transition .textContent>:nth-child(8){transition-delay:.8s}.transition__outIn .p-scene-leave-transition .textContent>:nth-child(9){transition-delay:.9s}.transition__outIn .p-scene-leave-transition .textContent>:nth-child(10){transition-delay:1s}.transition__outIn .p-scene-leave-transition .textContent>:nth-child(11){transition-delay:1.1s}.transition__outIn .p-scene-leave-transition .textContent>:nth-child(12){transition-delay:1.2s}.transition__outIn .p-scene-leave-transition .textContent>:nth-child(13){transition-delay:1.3s}.transition__outIn .p-scene-leave-transition .textContent>:nth-child(14){transition-delay:1.4s}.transition__outIn .p-scene-leave-transition .textContent>:nth-child(15){transition-delay:1.5s}.transition__outIn .p-scene-leave-transition .textContent>:nth-child(16){transition-delay:1.6s}.transition__outIn .p-scene-leave-transition .textContent>:nth-child(17){transition-delay:1.7s}.transition__outIn .p-scene-leave-transition .textContent>:nth-child(18){transition-delay:1.8s}.transition__outIn .p-scene-leave-transition .textContent>:nth-child(19){transition-delay:1.9s}.transition__outIn .p-scene-leave-transition .textContent>:nth-child(20){transition-delay:2s}.transition__outIn .p-scene-leave-start .textContent>*{opacity:1;transform:scale(1)}.transition__outIn .p-scene-leave-end .textContent>*{opacity:0;transform:scale(.85)}";
  styleInject(css_248z$n);

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
    this.blocks = [];
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
      Prepare scene props if defined
    */

    const props = utils.props(sceneConfig.props);
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
          const mp = utils.props(cmod.props, k);
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
    const child = utils.div(`<div 
      class="s ${css.sceneContainer} ${props.classes}"
      style="${props.styles}">
      <div class="sceneObject ${css.scene}">
        <div class="${css.wrapper}">
            <div class="${css.content} ${modprops.classes}" style="${modprops.styles}">
                <div class="backContainer ${css.bcontainer}"></div>
                <div class="blocksContainer ${css.viewport}"></div>
                <div class="frontContainer ${css.fcontainer}"></div>
            </div>
        </div>
      </div>
  </div>`);
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
          const mod = new Mod(child.querySelector(`.${css.content}`), modConfig, sceneConfig, projectConfig);
        }
      }
    }
    /*
      Init blocks if any
    */


    const blocks = sceneConfig.blocks;
    blocks.forEach(blockConfig => {
      const blocksContainer = child.querySelector('.blocksContainer');
      const block = new Block(blocksContainer, blockConfig, rootElement, projectConfig);
      this.blocks.push(block);
    });
    /*
      Run the entering transition
    */

    if (hasTransition) {
      const wrap = this.el.querySelector('.sceneObject');
      const dir = sceneConfig._presentatransdir === 'backward' ? 'to-left' : 'to-right';
      transition(wrap).start(dir);
      setTimeout(() => {
        transition(wrap).swap();
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
        transition(wrap).clear(odir).end(ndir);
      }

      const t = _t || 0;
      this.blocks.forEach(block => block.beforeDestroy());
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
        this.blocks[idx].stepForward();
        currentStep++;
      }
    };
    /*
      Immediate destroy for garbage collection
    */


    this.destroy = () => {
      this.blocks.forEach(block => block.destroy());
    };

    this.sceneConfig = sceneConfig;
  };

  var css_248z$o = ".container_container__3kBNh{width:100%;height:100%;position:relative;overflow:hidden}.container_container__3kBNh>div{position:absolute;top:0;left:0;width:100%}";
  var css$8 = {"container":"container_container__3kBNh"};
  styleInject(css_248z$o);

  const autoplay = function (rootElement, router, config) {
    let timer = null;
    const loop = !config.noloop;
    const defdelay = config.delay || 4000;
    let lastdelay = 0;

    const runTime = delay => {
      lastdelay = delay;
      clearTimeout(timer);
      timer = setTimeout(() => {
        router.next();
      }, delay);
    };

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
        e.stopPropagation();
        e.preventDefault();
      }

      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        router.prev();
        e.stopPropagation();
        e.preventDefault();
      }
    };

    rootElement.addEventListener('keyup', setKeyListener);
  };

  var css_248z$p = ":root{--arrowsOpacity:1;--arrowsVerticalPosition:center;--arrowsHorizontalPosition:space-between;--arrowsPadding:10px}.style_arrows__2HgOY{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;transition:opacity .35s;justify-content:var(--arrowsHorizontalPosition);--arrowsColor:var(--forecolor)}.style_left__3_kwS,.style_right__RERAa{height:100%;display:flex;align-items:var(--arrowsVerticalPosition);justify-content:center;cursor:pointer;padding:var(--arrowsPadding)}.style_ui__1-Ik8{width:20px;height:20px;transition:background-color .3s ease-in-out;width:0;height:0;border-top:10px solid transparent;border-bottom:10px solid transparent;opacity:var(--arrowsOpacity)}.style_left__3_kwS .style_ui__1-Ik8{border-right:10px solid var(--arrowsColor)}.style_right__RERAa .style_ui__1-Ik8{border-left:10px solid var(--arrowsColor)}.style_arrows__2HgOY.style_hide__3B8Al{opacity:0}";
  var css$9 = {"arrows":"style_arrows__2HgOY","left":"style_left__3_kwS","right":"style_right__RERAa","ui":"style_ui__1-Ik8","hide":"style_hide__3B8Al"};
  styleInject(css_248z$p);

  const arrows = function (rootElement, router, config) {
    let timer = null;
    const child = utils.div(`<div class="${css$9.arrows}"></div></div>`);
    const left = utils.div(`<div class="${css$9.left}"><div class="${css$9.ui}"></div></div>`);
    child.appendChild(left);
    const right = utils.div(`<div class="${css$9.right}"><div class="${css$9.ui}"></div>`);
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
      timer = setTimeout(() => {// child.classList.add(css.hide)
      }, 1500);
    };

    scheduleForHide();
  };

  var css_248z$q = ".style_black__27h0m{width:100%;height:100%;position:absolute;top:0;left:0;background-color:#000;opacity:0;pointer-events:none;transition:opacity .5s cubic-bezier(.8,.2,.2,.8);z-index:999999}";
  var css$a = {"black":"style_black__27h0m"};
  styleInject(css_248z$q);

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

    rootElement.addEventListener('keyup', setKeyListener);
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
    const root = rootElement.parentNode;

    const setKeyListener = e => {
      if (e.key === key) {
        if (isAlreadyFullscreen()) {
          exitFullscreen();
        } else {
          makeFullscreen(root);
        }

        e.stopPropagation();
        e.preventDefault();
      }
    };

    rootElement.addEventListener('keyup', setKeyListener);
  };

  const focus = function (rootElement, router, config) {
    const clb = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) rootElement.focus({
          preventScroll: true
        });
      });
    };

    const observer = new IntersectionObserver(clb);
    observer.observe(rootElement);
  };

  var css_248z$r = ":root{--progressbarHeight:5px;--progressbarBottom:initial}.style_progressbar__2zEjZ{--progressbarColor:var(--forecolor);width:100%;height:100%;pointer-events:none}.style_bar__Vua_1{width:0;height:var(--progressbarHeight);position:absolute;bottom:var(--progressbarBottom);left:0;background-color:var(--progressbarColor);transition:width .5s cubic-bezier(.8,.2,.2,.8)}";
  var css$b = {"progressbar":"style_progressbar__2zEjZ","bar":"style_bar__Vua_1"};
  styleInject(css_248z$r);

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

  var css_248z$s = ":root{--pagenumTextAlign:right;--pagenumPadding:5px;--pagenumFontSize:10px;--pagenumBackColor:none;--pagenumFont:var(--fontText)}.style_pagenum__2YaWi{--pagenumColor:var(--forecolor);width:100%;height:100%;position:absolute;top:0;left:0;display:flex;align-items:flex-end;pointer-events:none}.style_content__171wW{width:100%;text-align:var(--pagenumTextAlign);padding:var(--pagenumPadding);font-size:var(--pagenumFontSize);color:var(--pagenumColor);font-family:var(--pagenumFont);background-color:var(--pagenumBackColor);transition:all .3s ease-in-out}";
  var css$c = {"pagenum":"style_pagenum__2YaWi","content":"style_content__171wW"};
  styleInject(css_248z$s);

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

  const io = {
    autoplay,
    keyboard,
    arrows,
    black,
    fullscreen,
    focus,
    progressbar,
    pagenum
  };

  const add$2 = (type, module) => {
    if (io[type]) {
      return console.warn(`router io ${type} already defined`);
    }

    io[type] = module;
  };

  var css_248z$t = ".router_router__2R2qw{width:100%;height:100%;position:absolute;top:0;left:0}";
  var css$d = {"router":"router_router__2R2qw"};
  styleInject(css_248z$t);

  const Router = function (rootElement, projectConfig) {
    const gprops = utils.props(projectConfig.router.props);
    const child = utils.div(`<div style="${gprops.styles}" class="controller ${css$d.router} ${gprops.classes}"></div>`);
    rootElement.appendChild(child);
    child.setAttribute('tabindex', '0');
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
      this.notify('nextIndex');
      this.notify('indexChanged');
    };

    this.notify = evt => {
      const sceneConfig = scenes[currentIndex];
      const props = utils.props(sceneConfig.props);
      child.classList.remove(...child.classList);
      child.classList.add('controller', css$d.router);

      if (props.classes) {
        let cls = props.classes.split(' ');
        cls = cls.filter(d => d !== '');
        child.classList.add(...cls); // cls.forEach(c => {
        //   const cc = c.trim()
        //   if (cc) child.classList.add(cc)
        // })
      }

      if (gprops.classes) {
        let cls = gprops.classes.split(' ');
        cls = cls.filter(d => d !== '');
        child.classList.add(...cls); // cls.forEach(c => {
        //   const cc = c.trim()
        //   if (cc) child.classList.add(cc)
        // })
      }

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

    if (projectConfig.router) {
      for (const k in projectConfig.router) {
        if (k !== 'props') {
          const modConfig = projectConfig.router[k];
          const Mod = io[k];
          if (!Mod) console.log(`Router module "${k}" not found. Maybe you forgot to include it.`);

          if (modConfig && Mod) {
            registeredIO[k] = new Mod(child, this, modConfig, projectConfig);
          }
        }
      }
    }

    this.notify('indexChanged');
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
      Global defaults
    */


    const globprop = ['transition', 'colorvar', 'scheme', 'fontkit', 'theme'];
    globprop.forEach(p => {
      if (projectConfig[p]) {
        const prp = projectConfig[p].substr(1);
        rootElement.classList.add(`${p}__${prp}`);
      }
    });
    /*
      Init the container
    */

    rootElement.classList.add('presenta');
    const child = utils.div(`<div class="a ${css$8.container}"></div>`);
    const scenes = projectConfig.scenes;
    var currentScene = new Scene(scenes[0], projectConfig, rootElement);
    child.appendChild(currentScene.el);
    rootElement.appendChild(child);

    const swapScene = (index, dir) => {
      if (currentScene) {
        currentScene.sceneConfig._presentatransdir = dir;
        currentScene.destroyAfter(projectConfig._transitionDestroyDelay);
      }

      const sceneConfig = scenes[index];
      sceneConfig._presentatransdir = dir;
      currentScene = new Scene(sceneConfig, projectConfig, rootElement);
      child.appendChild(currentScene.el);
    };

    this.router = new Router(rootElement, projectConfig);
    this.router.on('nextIndex', evt => {
      swapScene(evt.currentIndex, 'foreward');
    });
    this.router.on('prevIndex', evt => {
      swapScene(evt.currentIndex, 'backward');
    });
    this.router.on('stepChanged', evt => {
      currentScene.stepForward();
    });
    utils.fit(child, projectConfig, rootElement);
    const resizeObserver = new ResizeObserver(entries => {
      utils.fit(child, projectConfig, rootElement);
    });
    resizeObserver.observe(child);

    this.currentScene = () => {
      return currentScene;
    };

    this.destroy = () => {
      currentScene.destroy();
    };
  };

  var mergeDefaults = (config => {
    const defaultConfig = {
      aspect: 1.6,
      adapt: true,
      mode: 'present',
      router: {
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
    mergeDefaults(config);
    return new Container(utils.select(el), config);
  };

  Presenta.version = version;
  Presenta.utils = utils;
  Presenta.Scene = Scene;
  Presenta.addBlock = add;
  Presenta.addController = add$2;
  Presenta.addModule = add$1;

  Presenta.use = plugin => {
    plugin.install(Presenta);
  };

  return Presenta;

})));
