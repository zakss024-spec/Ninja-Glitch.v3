/* NINJA GLITCH - animation.js : shared animation helpers */
(function () {
  var NG = window.NG = window.NG || {};

  NG.applySettings = function () {
    var s = NG.settings.get();
    document.body.classList.toggle('no-anim', !s.animation);
    document.body.classList.toggle('no-fx', !s.effects);
  };

  var ac;
  NG.beep = function (freq, dur) {
    try {
      if (!NG.settings.get().sound) return;
      ac = ac || new (window.AudioContext || window.webkitAudioContext)();
      var o = ac.createOscillator(), g = ac.createGain();
      o.type = 'square'; o.frequency.value = freq || 660; g.gain.value = 0.03;
      o.connect(g); g.connect(ac.destination); o.start(); o.stop(ac.currentTime + (dur || 0.07));
    } catch (e) {}
  };

  NG.stamp = function () { return new Date().toTimeString().slice(0, 8); };

  NG.logLine = function (box, text, cls) {
    if (!box) return;
    var d = document.createElement('div');
    d.className = 'ln ' + (cls || '');
    d.textContent = '[' + NG.stamp() + '] ' + text;
    box.appendChild(d);
    while (box.children.length > 60) box.removeChild(box.firstChild);
    box.scrollTop = box.scrollHeight;
  };

  /* progress({bar,label,duration,onTick(pct),onDone()}) -> {cancel()} */
  NG.progress = function (o) {
    var t0 = Date.now(), done = false;
    var id = setInterval(function () {
      var p = Math.min(1, (Date.now() - t0) / o.duration);
      var pct = Math.round(p * 100);
      if (o.bar) o.bar.style.width = pct + '%';
      if (o.label) o.label.textContent = pct + '%';
      if (o.onTick) o.onTick(pct);
      if (p >= 1 && !done) { done = true; clearInterval(id); if (o.onDone) o.onDone(); }
    }, 80);
    return { cancel: function () { done = true; clearInterval(id); } };
  };

  NG.glitchBurst = function (el, ms) {
    if (!el || !NG.settings.get().effects) return;
    el.classList.add('glitching');
    setTimeout(function () { el.classList.remove('glitching'); }, ms || 600);
  };

  NG.toast = function (msg) {
    var t = document.createElement('div');
    t.className = 'toast mono'; t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(function () { t.remove(); }, 2200);
  };

  /* canvas helper: sizes canvas to its CSS box, returns {ctx,w,h} */
  NG.sizeCanvas = function (c) {
    var dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    var w = c.clientWidth || 300, h = c.clientHeight || 200;
    c.width = w * dpr; c.height = h * dpr;
    var ctx = c.getContext('2d'); ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { ctx: ctx, w: w, h: h };
  };

  /* scanline sweep element for the cyber look */
  NG.addSweep = function () {
    if (document.querySelector('.scan-sweep')) return;
    var d = document.createElement('div'); d.className = 'scan-sweep scanlines-layer';
    document.body.appendChild(d);
  };
})();
