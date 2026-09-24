"""Fill the site template: cases, client logos, brand marks."""
import os as _os
ROOT = _os.path.dirname(_os.path.dirname(_os.path.abspath(__file__)))
def _p(*parts): return _os.path.join(ROOT, *parts)
import json, io

SP = _p("data")
TEMPLATE = _p("src", "lfc-website.template.html")
OUT = _p("site", "lfc-website.html")

cases = json.load(open(_os.path.join(SP, "cases_v12_anon.json"), encoding="utf-8"))
logos = json.load(open(_os.path.join(SP, "logos.json"), encoding="utf-8"))
cfimgs = json.load(open(_os.path.join(SP, "cfimgs.json"), encoding="utf-8"))

def jsblob(obj):
    return json.dumps(obj, ensure_ascii=False, separators=(",", ":")).replace("</script>", "<\\/script>")

html = io.open(TEMPLATE, encoding="utf-8").read()
html = html.replace("__PREMIUM_CSS__", io.open(_p("src", "editorial.css"), encoding="utf-8").read() + "\n" + io.open(_p("src", "atelier.css"), encoding="utf-8").read() + "\n" + io.open(_p("src", "colour-v4.css"), encoding="utf-8").read() + "\n" + io.open(_p("src", "home-v5.css"), encoding="utf-8").read() + "\n" + io.open(_p("src", "home-v6.css"), encoding="utf-8").read())
html = html.replace("__HOME_JS__", io.open(_p("src", "connectfacts-ai-v27.js"), encoding="utf-8").read() + "\n" +  io.open(_p("src", "home-v4.js"), encoding="utf-8").read().split("  PAGES['']")[0] + "\n" + io.open(_p("src", "home-v6.js"), encoding="utf-8").read() + "\n" + io.open(_p("src", "services-v23.js"), encoding="utf-8").read())
html = html.replace("__INTERACTIONS_JS__", io.open(_p("src", "interactions-v4.js"), encoding="utf-8").read() + "\n" + io.open(_p("src", "interactions-v5-extra.js"), encoding="utf-8").read() + "\n" + io.open(_p("src", "motion-v6.js"), encoding="utf-8").read())
html = html.replace("__CLIENT_MARKS__", jsblob(json.load(open(_p("data", "client-logos-v5.json"), encoding="utf-8")))).replace("__LEADERS__", jsblob([{k:l[k] for k in ("slug","name","role","linkedin") if k in l} for l in json.load(open(_p("data", "leaders.json"), encoding="utf-8"))]))
for key in ("__CASES__", "__LOGOS__", "__LFC_LOGO__", "__CF_SVG__"):
    assert html.count(key) >= 1, "placeholder missing: " + key

clients = json.load(open(_p("data", "about-client-logos.json"), encoding="utf-8"))
cf_svg = logos["brand"]["cf_svg"].replace('<svg ', '<svg aria-hidden="true" focusable="false" ', 1)

html = (html.replace("__CASES__", jsblob(cases))
            .replace("__LOGOS__", jsblob(clients))
            .replace("__LFC_LOGO__", logos["brand"]["lfc"])
            .replace("__CF_SVG__", cf_svg)
            .replace("__CF_DESK__", cfimgs["desk"]["src"])
            .replace("__CF_SUP__", cfimgs["sup"]["src"])
            .replace("__CF_TAB__", cfimgs["tab"]["src"])
            .replace("__CF_MOB__", cfimgs["mob"]["src"]))
style_head, style_tail = html.rsplit("</style>", 1)
html = style_head + "\n" + io.open(_p("src", "image-framing-v24.css"), encoding="utf-8").read() + "\n" + io.open(_p("src", "connectfacts-ai-v27.css"), encoding="utf-8").read() + "\n</style>" + style_tail
html = html.replace("↗", "").replace("→", " to ").replace("←", "")
io.open(OUT, "w", encoding="utf-8").write(html)
io.open(_p("site", "index.html"), "w", encoding="utf-8").write(html)
print("cases", len(cases), "| logos", len(clients), "| file KB", round(len(html) / 1024))
for bad in ("Welspun", "Tata", "Britannia", "Rajratan", "TVS", "Godrej", "CUMI", "Schneider"):
    n = html.lower().count(bad.lower())
    print("  '%s' occurrences (expected only in logo alt text): %d" % (bad, n))
