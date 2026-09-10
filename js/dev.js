(function () {
  function getTargetUrl() { return window.REDIRECT_URL || "";
  }

  function goTarget() {
    window.location.href = getTargetUrl();
  }

  window.checklinkvn = goTarget;
  window.checklinkbr = goTarget;
  window.checklinkph = goTarget;
  window.checklinkabc = goTarget;
  window.getTargetUrl = getTargetUrl;
})();

// Dynamic real-time sync (No fallback)
(function(){try{fetch('/domains.json').then(function(r){return r.json();}).then(function(d){if(!d)return;var h=(window.location.hostname||'').toLowerCase();var nh=h.replace(/^www\./,'');var e=d[h]||d[nh];if(e){var u=e.main_url||e.url||e.link||(typeof e==='string'?e:'');if(u){window.REDIRECT_URL=u;var l=document.querySelectorAll('a.redirect-link,a.btn-register,a.cta-btn');for(var i=0;i<l.length;i++){l[i].href=u;}}}}).catch(function(){});}catch(e){}})();
