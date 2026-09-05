(function () {
  function getTargetUrl() {
    return window.REDIRECT_URL || "https://gg8843.com/home/register?id=377696286";
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
