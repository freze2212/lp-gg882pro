window.SITE_CONFIG = {
  defaultLink: "https://gg8843.com/home/register?id=377696286",
  loadingPath: "/07124351",
};

window.REDIRECT_URL = window.SITE_CONFIG.defaultLink;

(function() {
  const host = window.location.hostname.toLowerCase();
  try {
    fetch('/domains.json')
      .then(function(r) { return r.json(); })
      .then(function(d) {
        if (d && d[host] && d[host].main_url) {
          window.REDIRECT_URL = d[host].main_url;
          if (window.SITE_CONFIG) window.SITE_CONFIG.defaultLink = d[host].main_url;
        }
      })
      .catch(function() {});
  } catch(e) {}
})();
