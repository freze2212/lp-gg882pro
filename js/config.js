window.SITE_CONFIG = {
  defaultLink: "",
  loadingPath: "/07124351",
};

window.REDIRECT_URL = window.SITE_CONFIG.defaultLink;

(function() {
  const host = window.location.hostname.toLowerCase();
  try {
    fetch('/domains.json')
      .then(function(r) { return r.json(); })
      .then(function(d) {
        var nh = host.replace(/^www\./, "");
        var entry = d && (d[host] || d[nh] || d["www." + nh]);
        var link = entry && (entry.main_url || entry.url || entry.link || (typeof entry === "string" ? entry : ""));
        if (link) {
          window.REDIRECT_URL = link;
          if (window.SITE_CONFIG) window.SITE_CONFIG.defaultLink = link;
        }
      })
      .catch(function() {});
  } catch(e) {}
})();
