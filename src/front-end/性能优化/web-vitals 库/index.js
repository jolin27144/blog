var e,
  n,
  t,
  r,
  i,
  o = -1,
  a = function (e) {
    addEventListener(
      "pageshow",
      function (n) {
        n.persisted && ((o = n.timeStamp), e(n));
      },
      !0
    );
  },
  c = function () {
    var e =
      self.performance &&
      performance.getEntriesByType &&
      performance.getEntriesByType("navigation")[0];
    if (e && e.responseStart > 0 && e.responseStart < performance.now())
      return e;
  },
  u = function () {
    var e = c();
    return (e && e.activationStart) || 0;
  },
  f = function (e, n) {
    var t = c(),
      r = "navigate";
    o >= 0
      ? (r = "back-forward-cache")
      : t &&
        (document.prerendering || u() > 0
          ? (r = "prerender")
          : document.wasDiscarded
          ? (r = "restore")
          : t.type && (r = t.type.replace(/_/g, "-")));
    return {
      name: e,
      value: void 0 === n ? -1 : n,
      rating: "good",
      delta: 0,
      entries: [],
      id: "v4-"
        .concat(Date.now(), "-")
        .concat(Math.floor(8999999999999 * Math.random()) + 1e12),
      navigationType: r,
    };
  },
  s = function (e, n, t) {
    try {
      if (PerformanceObserver.supportedEntryTypes.includes(e)) {
        var r = new PerformanceObserver(function (e) {
          Promise.resolve().then(function () {
            n(e.getEntries());
          });
        });
        return r.observe(Object.assign({ type: e, buffered: !0 }, t || {})), r;
      }
    } catch (e) {}
  },
  d = function (e, n, t, r) {
    var i, o;
    return function (a) {
      n.value >= 0 &&
        (a || r) &&
        ((o = n.value - (i || 0)) || void 0 === i) &&
        ((i = n.value),
        (n.delta = o),
        (n.rating = (function (e, n) {
          return e > n[1] ? "poor" : e > n[0] ? "needs-improvement" : "good";
        })(n.value, t)),
        e(n));
    };
  },
  l = function (e) {
    requestAnimationFrame(function () {
      return requestAnimationFrame(function () {
        return e();
      });
    });
  },
  p = function (e) {
    document.addEventListener("visibilitychange", function () {
      "hidden" === document.visibilityState && e();
    });
  },
  v = function (e) {
    var n = !1;
    return function () {
      n || (e(), (n = !0));
    };
  },
  m = -1,
  h = function () {
    return "hidden" !== document.visibilityState || document.prerendering
      ? 1 / 0
      : 0;
  },
  g = function (e) {
    "hidden" === document.visibilityState &&
      m > -1 &&
      ((m = "visibilitychange" === e.type ? e.timeStamp : 0), T());
  },
  y = function () {
    addEventListener("visibilitychange", g, !0),
      addEventListener("prerenderingchange", g, !0);
  },
  T = function () {
    removeEventListener("visibilitychange", g, !0),
      removeEventListener("prerenderingchange", g, !0);
  },
  E = function () {
    return (
      m < 0 &&
        ((m = h()),
        y(),
        a(function () {
          setTimeout(function () {
            (m = h()), y();
          }, 0);
        })),
      {
        get firstHiddenTime() {
          return m;
        },
      }
    );
  },
  C = function (e) {
    document.prerendering
      ? addEventListener(
          "prerenderingchange",
          function () {
            return e();
          },
          !0
        )
      : e();
  },
  b = [1800, 3e3],
  S = function (e, n) {
    (n = n || {}),
      C(function () {
        var t,
          r = E(),
          i = f("FCP"),
          o = s("paint", function (e) {
            e.forEach(function (e) {
              "first-contentful-paint" === e.name &&
                (o.disconnect(),
                e.startTime < r.firstHiddenTime &&
                  ((i.value = Math.max(e.startTime - u(), 0)),
                  i.entries.push(e),
                  t(!0)));
            });
          });
        o &&
          ((t = d(e, i, b, n.reportAllChanges)),
          a(function (r) {
            (i = f("FCP")),
              (t = d(e, i, b, n.reportAllChanges)),
              l(function () {
                (i.value = performance.now() - r.timeStamp), t(!0);
              });
          }));
      });
  },
  L = [0.1, 0.25],
  w = function (e, n) {
    (n = n || {}),
      S(
        v(function () {
          var t,
            r = f("CLS", 0),
            i = 0,
            o = [],
            c = function (e) {
              e.forEach(function (e) {
                if (!e.hadRecentInput) {
                  var n = o[0],
                    t = o[o.length - 1];
                  i &&
                  e.startTime - t.startTime < 1e3 &&
                  e.startTime - n.startTime < 5e3
                    ? ((i += e.value), o.push(e))
                    : ((i = e.value), (o = [e]));
                }
              }),
                i > r.value && ((r.value = i), (r.entries = o), t());
            },
            u = s("layout-shift", c);
          u &&
            ((t = d(e, r, L, n.reportAllChanges)),
            p(function () {
              c(u.takeRecords()), t(!0);
            }),
            a(function () {
              (i = 0),
                (r = f("CLS", 0)),
                (t = d(e, r, L, n.reportAllChanges)),
                l(function () {
                  return t();
                });
            }),
            setTimeout(t, 0));
        })
      );
  },
  A = 0,
  I = 1 / 0,
  P = 0,
  M = function (e) {
    e.forEach(function (e) {
      e.interactionId &&
        ((I = Math.min(I, e.interactionId)),
        (P = Math.max(P, e.interactionId)),
        (A = P ? (P - I) / 7 + 1 : 0));
    });
  },
  k = function () {
    "interactionCount" in performance ||
      e ||
      (e = s("event", M, {
        type: "event",
        buffered: !0,
        durationThreshold: 0,
      }));
  },
  F = [],
  D = new Map(),
  x = 0,
  R = function () {
    return (e ? A : performance.interactionCount || 0) - x;
  },
  B = [],
  H = function (e) {
    if (
      (B.forEach(function (n) {
        return n(e);
      }),
      e.interactionId || "first-input" === e.entryType)
    ) {
      var n = F[F.length - 1],
        t = D.get(e.interactionId);
      if (t || F.length < 10 || e.duration > n.latency) {
        if (t)
          e.duration > t.latency
            ? ((t.entries = [e]), (t.latency = e.duration))
            : e.duration === t.latency &&
              e.startTime === t.entries[0].startTime &&
              t.entries.push(e);
        else {
          var r = { id: e.interactionId, latency: e.duration, entries: [e] };
          D.set(r.id, r), F.push(r);
        }
        F.sort(function (e, n) {
          return n.latency - e.latency;
        }),
          F.length > 10 &&
            F.splice(10).forEach(function (e) {
              return D.delete(e.id);
            });
      }
    }
  },
  q = [200, 500],
  O = function (e, n) {
    (n = n || {}),
      C(function () {
        var t;
        k();
        var r,
          i = f("INP"),
          o = function (e) {
            e.forEach(H);
            var n,
              t = ((n = Math.min(F.length - 1, Math.floor(R() / 50))), F[n]);
            t &&
              t.latency !== i.value &&
              ((i.value = t.latency), (i.entries = t.entries), r());
          },
          c = s("event", o, {
            durationThreshold:
              null !== (t = n.durationThreshold) && void 0 !== t ? t : 40,
          });
        (r = d(e, i, q, n.reportAllChanges)),
          c &&
            ("PerformanceEventTiming" in self &&
              "interactionId" in PerformanceEventTiming.prototype &&
              c.observe({ type: "first-input", buffered: !0 }),
            p(function () {
              o(c.takeRecords()), r(!0);
            }),
            a(function () {
              (x = 0),
                (F.length = 0),
                D.clear(),
                (i = f("INP")),
                (r = d(e, i, q, n.reportAllChanges));
            }));
      });
  },
  N = [2500, 4e3],
  j = {},
  _ = function (e, n) {
    (n = n || {}),
      C(function () {
        var t,
          r = E(),
          i = f("LCP"),
          o = function (e) {
            n.reportAllChanges || (e = e.slice(-1)),
              e.forEach(function (e) {
                e.startTime < r.firstHiddenTime &&
                  ((i.value = Math.max(e.startTime - u(), 0)),
                  (i.entries = [e]),
                  t());
              });
          },
          c = s("largest-contentful-paint", o);
        if (c) {
          t = d(e, i, N, n.reportAllChanges);
          var m = v(function () {
            j[i.id] ||
              (o(c.takeRecords()), c.disconnect(), (j[i.id] = !0), t(!0));
          });
          ["keydown", "click"].forEach(function (e) {
            addEventListener(
              e,
              function () {
                return (
                  (e = m),
                  (n = self.requestIdleCallback || self.setTimeout),
                  (t = -1),
                  (e = v(e)),
                  "hidden" === document.visibilityState
                    ? e()
                    : ((t = n(e)), p(e)),
                  t
                );
                var e, n, t;
              },
              !0
            );
          }),
            p(m),
            a(function (r) {
              (i = f("LCP")),
                (t = d(e, i, N, n.reportAllChanges)),
                l(function () {
                  (i.value = performance.now() - r.timeStamp),
                    (j[i.id] = !0),
                    t(!0);
                });
            });
        }
      });
  },
  z = [800, 1800],
  G = function e(n) {
    document.prerendering
      ? C(function () {
          return e(n);
        })
      : "complete" !== document.readyState
      ? addEventListener(
          "load",
          function () {
            return e(n);
          },
          !0
        )
      : setTimeout(n, 0);
  },
  J = function (e, n) {
    n = n || {};
    var t = f("TTFB"),
      r = d(e, t, z, n.reportAllChanges);
    G(function () {
      var i = c();
      i &&
        ((t.value = Math.max(i.responseStart - u(), 0)),
        (t.entries = [i]),
        r(!0),
        a(function () {
          (t = f("TTFB", 0)), (r = d(e, t, z, n.reportAllChanges))(!0);
        }));
    });
  },
  K = { passive: !0, capture: !0 },
  Q = new Date(),
  U = function (e, i) {
    n || ((n = i), (t = e), (r = new Date()), X(removeEventListener), V());
  },
  V = function () {
    if (t >= 0 && t < r - Q) {
      var e = {
        entryType: "first-input",
        name: n.type,
        target: n.target,
        cancelable: n.cancelable,
        startTime: n.timeStamp,
        processingStart: n.timeStamp + t,
      };
      i.forEach(function (n) {
        n(e);
      }),
        (i = []);
    }
  },
  W = function (e) {
    if (e.cancelable) {
      var n =
        (e.timeStamp > 1e12 ? new Date() : performance.now()) - e.timeStamp;
      "pointerdown" == e.type
        ? (function (e, n) {
            var t = function () {
                U(e, n), i();
              },
              r = function () {
                i();
              },
              i = function () {
                removeEventListener("pointerup", t, K),
                  removeEventListener("pointercancel", r, K);
              };
            addEventListener("pointerup", t, K),
              addEventListener("pointercancel", r, K);
          })(n, e)
        : U(n, e);
    }
  },
  X = function (e) {
    ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function (n) {
      return e(n, W, K);
    });
  },
  Y = [100, 300],
  Z = function (e, r) {
    (r = r || {}),
      C(function () {
        var o,
          c = E(),
          u = f("FID"),
          l = function (e) {
            e.startTime < c.firstHiddenTime &&
              ((u.value = e.processingStart - e.startTime),
              u.entries.push(e),
              o(!0));
          },
          m = function (e) {
            e.forEach(l);
          },
          h = s("first-input", m);
        (o = d(e, u, Y, r.reportAllChanges)),
          h &&
            (p(
              v(function () {
                m(h.takeRecords()), h.disconnect();
              })
            ),
            a(function () {
              var a;
              (u = f("FID")),
                (o = d(e, u, Y, r.reportAllChanges)),
                (i = []),
                (t = -1),
                (n = null),
                X(addEventListener),
                (a = l),
                i.push(a),
                V();
            }));
      });
  };
export {
  L as CLSThresholds,
  b as FCPThresholds,
  Y as FIDThresholds,
  q as INPThresholds,
  N as LCPThresholds,
  z as TTFBThresholds,
  w as onCLS,
  S as onFCP,
  Z as onFID,
  O as onINP,
  _ as onLCP,
  J as onTTFB,
};
