(() => {
  var n = {
      982: (n) => {
        n.exports = {
          createProjectSection: function (n) {
            const e = document.createElement("div");
            e.className = "project";
            const t = document.createElement("div");
            (t.className = "project-image"),
              (t.style.backgroundImage = `url(${n.imageSrc})`),
              (t.style.backgroundSize = "cover");
            const r = document.createElement("div");
            r.className = "project-body";
            const o = document.createElement("div");
            o.className = "project-header";
            const i = document.createElement("div");
            i.className = "project-icons";
            const a = document.createElement("i");
            a.className = "devicon-github-original colored";
            const c = document.createElement("i");
            (c.className = "fa-solid fa-arrow-up-right-from-square"),
              i.appendChild(a),
              i.appendChild(c);
            const s = document.createElement("div");
            (s.textContent = n.name), o.appendChild(s), o.appendChild(i);
            const l = document.createElement("div");
            return (
              (l.textContent = n.description),
              r.appendChild(o),
              r.appendChild(l),
              e.appendChild(t),
              e.appendChild(r),
              e
            );
          },
        };
      },
      208: (n, e, t) => {
        "use strict";
        t.d(e, { A: () => m });
        var r = t(601),
          o = t.n(r),
          i = t(314),
          a = t.n(i),
          c = t(417),
          s = t.n(c),
          l = new URL(t(299), t.b),
          d = a()(o()),
          p = s()(l);
        d.push([
          n.id,
          `:root {\n  --main-color: rgb(2, 152, 190);\n  font-size: 14px;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: sans-serif;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  max-width: 900px;\n  margin: auto;\n  min-width: 300px;\n}\n\n.footer {\n  background-color: var(--main-color);\n  color: white;\n  display: flex;\n  justify-content: space-between;\n  padding: 1.5rem 3rem;\n  gap: 1rem;\n}\n\n.contact-section-image {\n  width: 500px;\n  height: 350px;\n  background-image: url(${p});\n  background-size: cover;\n}\n\n.content-section-about {\n  max-width: 300px;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.contact-icons {\n  display: flex;\n  gap: 0.5rem;\n}\n\n.telephone img,\n.email img {\n  width: 1rem;\n}\n\n.telephone {\n  display: flex;\n  gap: 0.5rem;\n}\n\n.email a {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\n\nmain {\n  flex-grow: 1;\n  margin: 4rem 3rem;\n  display: flex;\n  flex-direction: column;\n}\n\n.header {\n  background-color: var(--main-color);\n  background: linear-gradient(170deg, var(--main-color) 70%, white 20%);\n  padding: 1.5rem 3rem;\n  position: relative;\n}\n\n.projects-section {\n  padding: 1rem 0rem;\n  display: grid;\n  max-width: 900px;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  gap: 1.5rem;\n}\n\n.title {\n  font-size: 2rem;\n}\n\n.project {\n  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);\n}\n\n.project-header {\n  display: flex;\n  justify-content: space-between;\n  font-size: 1.2rem;\n}\n\n.project-body {\n  padding: 1rem 1rem;\n  padding-bottom: 3rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.project-icons {\n  display: flex;\n  gap: 0.5rem;\n}\n\n.project-image {\n  height: 200px;\n}\n\n.portfolio-owner {\n  font-size: 3.2rem;\n  position: absolute;\n  bottom: 8px;\n  left: 21px;\n  color: white;\n}\n\n.image-holder {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n\n.image-holder img {\n  max-width: 350px;\n  float: left;\n}\n\n.image-holder div {\n  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);\n  background-color: white;\n  padding: 1rem 1rem;\n  line-height: 3.5ch;\n}\n\n.image-holder div p:first-child {\n  font-size: 2rem;\n  margin-bottom: 2rem;\n}\n\n.image-holder div p:nth-child(2) {\n  font-size: 1rem;\n  margin-bottom: 1rem;\n}\n\n.image-holder div p:last-child {\n  display: flex;\n  gap: 0.5rem;\n  justify-content: end;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\n@media (max-width: 900px) {\n  .projects-section {\n    grid-template-columns: repeat(2, minmax(250px, 1fr));\n  }\n\n  .header {\n    padding: 7rem 4rem;\n    padding-bottom: 0;\n    background: linear-gradient(170deg, var(--main-color) 48%, white 20%);\n  }\n\n  .image-holder {\n    display: block;\n  }\n\n  .image-holder img {\n    max-width: 300px;\n    float: left;\n    margin: -80px 15px 0 -40px;\n  }\n\n  .image-holder div {\n    padding: 2rem 1rem;\n  }\n\n  .image-holder div p:first-child {\n    font-size: 2rem;\n    margin-bottom: 2rem;\n  }\n\n  .image-holder div p:nth-child(2) {\n    font-size: 1rem;\n    margin-bottom: 1rem;\n  }\n\n  .image-holder div p:last-child {\n    text-align: end;\n  }\n\n  .portfolio-owner {\n    position: absolute;\n    top: -70px;\n    left: 200px;\n    width: 312px;\n  }\n\n  .content-section-about {\n    justify-content: center;\n  }\n}\n\n@media (max-width: 620px) {\n  .header {\n    display: flex;\n    flex-direction: column;\n    background: linear-gradient(170deg, var(--main-color) 40%, white 20%);\n    padding-top: 1rem;\n  }\n\n  .image-holder {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    margin-bottom: 3rem;\n  }\n\n  .image-holder div {\n    box-shadow: none;\n  }\n\n  .image-holder img {\n    max-width: 90vw;\n    min-width: 350px;\n    margin: 0px 0px 0px 0px;\n  }\n\n  .portfolio-owner {\n    position: absolute;\n    top: 280px;\n    left: auto;\n  }\n\n  main {\n    padding: 0;\n    margin: 0rem 1rem;\n    align-items: center;\n  }\n  .projects-section {\n    grid-template-columns: repeat(1, minmax(250px, 1fr));\n  }\n\n  .footer {\n    display: flex;\n    flex-direction: column;\n    padding: 0;\n  }\n\n  .content-section-about {\n    padding: 1rem 0.5rem;\n    align-self: center;\n  }\n\n  .title {\n    text-align: center;\n  }\n\n  .contact-icons {\n    align-self: center;\n  }\n\n  .contact-section-image {\n    width: 100vw;\n  }\n}\n`,
          "",
        ]);
        const m = d;
      },
      314: (n) => {
        "use strict";
        n.exports = function (n) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var t = "",
                  r = void 0 !== e[5];
                return (
                  e[4] && (t += "@supports (".concat(e[4], ") {")),
                  e[2] && (t += "@media ".concat(e[2], " {")),
                  r &&
                    (t += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {"
                    )),
                  (t += n(e)),
                  r && (t += "}"),
                  e[2] && (t += "}"),
                  e[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (e.i = function (n, t, r, o, i) {
              "string" == typeof n && (n = [[null, n, void 0]]);
              var a = {};
              if (r)
                for (var c = 0; c < this.length; c++) {
                  var s = this[c][0];
                  null != s && (a[s] = !0);
                }
              for (var l = 0; l < n.length; l++) {
                var d = [].concat(n[l]);
                (r && a[d[0]]) ||
                  (void 0 !== i &&
                    (void 0 === d[5] ||
                      (d[1] = "@layer"
                        .concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {")
                        .concat(d[1], "}")),
                    (d[5] = i)),
                  t &&
                    (d[2]
                      ? ((d[1] = "@media "
                          .concat(d[2], " {")
                          .concat(d[1], "}")),
                        (d[2] = t))
                      : (d[2] = t)),
                  o &&
                    (d[4]
                      ? ((d[1] = "@supports ("
                          .concat(d[4], ") {")
                          .concat(d[1], "}")),
                        (d[4] = o))
                      : (d[4] = "".concat(o))),
                  e.push(d));
              }
            }),
            e
          );
        };
      },
      417: (n) => {
        "use strict";
        n.exports = function (n, e) {
          return (
            e || (e = {}),
            n
              ? ((n = String(n.__esModule ? n.default : n)),
                /^['"].*['"]$/.test(n) && (n = n.slice(1, -1)),
                e.hash && (n += e.hash),
                /["'() \t\n]|(%20)/.test(n) || e.needQuotes
                  ? '"'.concat(
                      n.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
                      '"'
                    )
                  : n)
              : n
          );
        };
      },
      601: (n) => {
        "use strict";
        n.exports = function (n) {
          return n[1];
        };
      },
      72: (n) => {
        "use strict";
        var e = [];
        function t(n) {
          for (var t = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === n) {
              t = r;
              break;
            }
          return t;
        }
        function r(n, r) {
          for (var i = {}, a = [], c = 0; c < n.length; c++) {
            var s = n[c],
              l = r.base ? s[0] + r.base : s[0],
              d = i[l] || 0,
              p = "".concat(l, " ").concat(d);
            i[l] = d + 1;
            var m = t(p),
              u = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== m) e[m].references++, e[m].updater(u);
            else {
              var g = o(u, r);
              (r.byIndex = c),
                e.splice(c, 0, { identifier: p, updater: g, references: 1 });
            }
            a.push(p);
          }
          return a;
        }
        function o(n, e) {
          var t = e.domAPI(e);
          return (
            t.update(n),
            function (e) {
              if (e) {
                if (
                  e.css === n.css &&
                  e.media === n.media &&
                  e.sourceMap === n.sourceMap &&
                  e.supports === n.supports &&
                  e.layer === n.layer
                )
                  return;
                t.update((n = e));
              } else t.remove();
            }
          );
        }
        n.exports = function (n, o) {
          var i = r((n = n || []), (o = o || {}));
          return function (n) {
            n = n || [];
            for (var a = 0; a < i.length; a++) {
              var c = t(i[a]);
              e[c].references--;
            }
            for (var s = r(n, o), l = 0; l < i.length; l++) {
              var d = t(i[l]);
              0 === e[d].references && (e[d].updater(), e.splice(d, 1));
            }
            i = s;
          };
        };
      },
      659: (n) => {
        "use strict";
        var e = {};
        n.exports = function (n, t) {
          var r = (function (n) {
            if (void 0 === e[n]) {
              var t = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (n) {
                  t = null;
                }
              e[n] = t;
            }
            return e[n];
          })(n);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(t);
        };
      },
      540: (n) => {
        "use strict";
        n.exports = function (n) {
          var e = document.createElement("style");
          return n.setAttributes(e, n.attributes), n.insert(e, n.options), e;
        };
      },
      56: (n, e, t) => {
        "use strict";
        n.exports = function (n) {
          var e = t.nc;
          e && n.setAttribute("nonce", e);
        };
      },
      825: (n) => {
        "use strict";
        n.exports = function (n) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = n.insertStyleElement(n);
          return {
            update: function (t) {
              !(function (n, e, t) {
                var r = "";
                t.supports && (r += "@supports (".concat(t.supports, ") {")),
                  t.media && (r += "@media ".concat(t.media, " {"));
                var o = void 0 !== t.layer;
                o &&
                  (r += "@layer".concat(
                    t.layer.length > 0 ? " ".concat(t.layer) : "",
                    " {"
                  )),
                  (r += t.css),
                  o && (r += "}"),
                  t.media && (r += "}"),
                  t.supports && (r += "}");
                var i = t.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */"
                    )),
                  e.styleTagTransform(r, n, e.options);
              })(e, n, t);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(e);
            },
          };
        };
      },
      113: (n) => {
        "use strict";
        n.exports = function (n, e) {
          if (e.styleSheet) e.styleSheet.cssText = n;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n));
          }
        };
      },
      299: (n, e, t) => {
        "use strict";
        n.exports = t.p + "images/placeholder.png";
      },
    },
    e = {};
  function t(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var i = (e[r] = { id: r, exports: {} });
    return n[r](i, i.exports, t), i.exports;
  }
  (t.m = n),
    (t.n = (n) => {
      var e = n && n.__esModule ? () => n.default : () => n;
      return t.d(e, { a: e }), e;
    }),
    (t.d = (n, e) => {
      for (var r in e)
        t.o(e, r) &&
          !t.o(n, r) &&
          Object.defineProperty(n, r, { enumerable: !0, get: e[r] });
    }),
    (t.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (n) {
        if ("object" == typeof window) return window;
      }
    })()),
    (t.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e)),
    (() => {
      var n;
      t.g.importScripts && (n = t.g.location + "");
      var e = t.g.document;
      if (
        !n &&
        e &&
        (e.currentScript &&
          "SCRIPT" === e.currentScript.tagName.toUpperCase() &&
          (n = e.currentScript.src),
        !n)
      ) {
        var r = e.getElementsByTagName("script");
        if (r.length)
          for (var o = r.length - 1; o > -1 && (!n || !/^http(s?):/.test(n)); )
            n = r[o--].src;
      }
      if (!n)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (n = n
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (t.p = n);
    })(),
    (t.b = document.baseURI || self.location.href),
    (t.nc = void 0),
    (() => {
      "use strict";
      const n = JSON.parse(
        '[{"name":"Project One","description":"Short description of the project. Just a couple sentences will do","link":"#######","imageSrc":"./images/placeholder.png"},{"name":"Project Two","description":"Short description of the project. Just a couple sentences will do","link":"#######","imageSrc":"./images/placeholder.png"},{"name":"Project Three","description":"Short description of the project. Just a couple sentences will do","link":"#######","imageSrc":"./images/placeholder.png"},{"name":"Project Four","description":"Short description of the project. Just a couple sentences will do","link":"#######","imageSrc":"./images/placeholder.png"},{"name":"Project Five","description":"Short description of the project. Just a couple sentences will do","link":"#######","imageSrc":"./images/placeholder.png"},{"name":"Project Six","description":"Short description of the project. Just a couple sentences will do","link":"#######","imageSrc":"./images/placeholder.png"}]'
      );
      var e = t(72),
        r = t.n(e),
        o = t(825),
        i = t.n(o),
        a = t(659),
        c = t.n(a),
        s = t(56),
        l = t.n(s),
        d = t(540),
        p = t.n(d),
        m = t(113),
        u = t.n(m),
        g = t(208),
        f = {};
      (f.styleTagTransform = u()),
        (f.setAttributes = l()),
        (f.insert = c().bind(null, "head")),
        (f.domAPI = i()),
        (f.insertStyleElement = p()),
        r()(g.A, f),
        g.A && g.A.locals && g.A.locals;
      var h = t(982);
      const x = document.querySelector(".projects-section");
      n.forEach((n) => {
        const e = (0, h.createProjectSection)(n);
        x.appendChild(e);
      });
    })();
})();
