/*! For license information please see checkout.min.js.LICENSE.txt */
!(function (e, t) {
  if ("object" == typeof exports && "object" == typeof module)
    module.exports = t();
  else if ("function" == typeof define && define.amd) define([], t);
  else {
    var n = t();
    for (var r in n) ("object" == typeof exports ? exports : e)[r] = n[r];
  }
})(window, function () {
  return (function (e) {
    var t = {};
    function n(r) {
      if (t[r]) return t[r].exports;
      var o = (t[r] = { i: r, l: !1, exports: {} });
      return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
      }),
      (n.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (
          (n.r(r),
          Object.defineProperty(r, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var o in e)
            n.d(
              r,
              o,
              function (t) {
                return e[t];
              }.bind(null, o)
            );
        return r;
      }),
      (n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return n.d(t, "a", t), t;
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ""),
      n((n.s = 27))
    );
  })([
    function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return l;
      });
      var r = n(3);
      var o = n(7),
        i = n(8);
      var s = n(5),
        a = n(13);
      function c(e) {
        return 0 === e.length
          ? a.a
          : 1 === e.length
          ? e[0]
          : function (t) {
              return e.reduce(function (e, t) {
                return t(e);
              }, t);
            };
      }
      var u = n(4),
        l = (function () {
          function e(e) {
            (this._isScalar = !1), e && (this._subscribe = e);
          }
          return (
            (e.prototype.lift = function (t) {
              var n = new e();
              return (n.source = this), (n.operator = t), n;
            }),
            (e.prototype.subscribe = function (e, t, n) {
              var s = this.operator,
                a = (function (e, t, n) {
                  if (e) {
                    if (e instanceof r.a) return e;
                    if (e[o.a]) return e[o.a]();
                  }
                  return e || t || n ? new r.a(e, t, n) : new r.a(i.a);
                })(e, t, n);
              if (
                (s
                  ? a.add(s.call(a, this.source))
                  : a.add(
                      this.source ||
                        (u.a.useDeprecatedSynchronousErrorHandling &&
                          !a.syncErrorThrowable)
                        ? this._subscribe(a)
                        : this._trySubscribe(a)
                    ),
                u.a.useDeprecatedSynchronousErrorHandling &&
                  a.syncErrorThrowable &&
                  ((a.syncErrorThrowable = !1), a.syncErrorThrown))
              )
                throw a.syncErrorValue;
              return a;
            }),
            (e.prototype._trySubscribe = function (e) {
              try {
                return this._subscribe(e);
              } catch (t) {
                u.a.useDeprecatedSynchronousErrorHandling &&
                  ((e.syncErrorThrown = !0), (e.syncErrorValue = t)),
                  !(function (e) {
                    for (; e; ) {
                      var t = e,
                        n = t.closed,
                        o = t.destination,
                        i = t.isStopped;
                      if (n || i) return !1;
                      e = o && o instanceof r.a ? o : null;
                    }
                    return !0;
                  })(e)
                    ? console.warn(t)
                    : e.error(t);
              }
            }),
            (e.prototype.forEach = function (e, t) {
              var n = this;
              return new (t = d(t))(function (t, r) {
                var o;
                o = n.subscribe(
                  function (t) {
                    try {
                      e(t);
                    } catch (e) {
                      r(e), o && o.unsubscribe();
                    }
                  },
                  r,
                  t
                );
              });
            }),
            (e.prototype._subscribe = function (e) {
              var t = this.source;
              return t && t.subscribe(e);
            }),
            (e.prototype[s.a] = function () {
              return this;
            }),
            (e.prototype.pipe = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              return 0 === e.length ? this : c(e)(this);
            }),
            (e.prototype.toPromise = function (e) {
              var t = this;
              return new (e = d(e))(function (e, n) {
                var r;
                t.subscribe(
                  function (e) {
                    return (r = e);
                  },
                  function (e) {
                    return n(e);
                  },
                  function () {
                    return e(r);
                  }
                );
              });
            }),
            (e.create = function (t) {
              return new e(t);
            }),
            e
          );
        })();
      function d(e) {
        if ((e || (e = u.a.Promise || Promise), !e))
          throw new Error("no Promise impl found");
        return e;
      }
    },
    function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return o;
      });
      var r = function (e, t) {
        return (r =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
          })(e, t);
      };
      function o(e, t) {
        function n() {
          this.constructor = e;
        }
        r(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n()));
      }
    },
    function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var r = (function () {
          return (
            Array.isArray ||
            function (e) {
              return e && "number" == typeof e.length;
            }
          );
        })(),
        o = n(12),
        i = n(9),
        s = (function () {
          function e(e) {
            return (
              Error.call(this),
              (this.message = e
                ? e.length +
                  " errors occurred during unsubscription:\n" +
                  e
                    .map(function (e, t) {
                      return t + 1 + ") " + e.toString();
                    })
                    .join("\n  ")
                : ""),
              (this.name = "UnsubscriptionError"),
              (this.errors = e),
              this
            );
          }
          return (e.prototype = Object.create(Error.prototype)), e;
        })(),
        a = (function () {
          function e(e) {
            (this.closed = !1),
              (this._parentOrParents = null),
              (this._subscriptions = null),
              e && (this._unsubscribe = e);
          }
          var t;
          return (
            (e.prototype.unsubscribe = function () {
              var t;
              if (!this.closed) {
                var n = this,
                  a = n._parentOrParents,
                  u = n._unsubscribe,
                  l = n._subscriptions;
                if (
                  ((this.closed = !0),
                  (this._parentOrParents = null),
                  (this._subscriptions = null),
                  a instanceof e)
                )
                  a.remove(this);
                else if (null !== a)
                  for (var d = 0; d < a.length; ++d) {
                    a[d].remove(this);
                  }
                if (Object(i.a)(u))
                  try {
                    u.call(this);
                  } catch (e) {
                    t = e instanceof s ? c(e.errors) : [e];
                  }
                if (r(l)) {
                  d = -1;
                  for (var f = l.length; ++d < f; ) {
                    var h = l[d];
                    if (Object(o.a)(h))
                      try {
                        h.unsubscribe();
                      } catch (e) {
                        (t = t || []),
                          e instanceof s
                            ? (t = t.concat(c(e.errors)))
                            : t.push(e);
                      }
                  }
                }
                if (t) throw new s(t);
              }
            }),
            (e.prototype.add = function (t) {
              var n = t;
              if (!t) return e.EMPTY;
              switch (typeof t) {
                case "function":
                  n = new e(t);
                case "object":
                  if (
                    n === this ||
                    n.closed ||
                    "function" != typeof n.unsubscribe
                  )
                    return n;
                  if (this.closed) return n.unsubscribe(), n;
                  if (!(n instanceof e)) {
                    var r = n;
                    (n = new e())._subscriptions = [r];
                  }
                  break;
                default:
                  throw new Error(
                    "unrecognized teardown " + t + " added to Subscription."
                  );
              }
              var o = n._parentOrParents;
              if (null === o) n._parentOrParents = this;
              else if (o instanceof e) {
                if (o === this) return n;
                n._parentOrParents = [o, this];
              } else {
                if (-1 !== o.indexOf(this)) return n;
                o.push(this);
              }
              var i = this._subscriptions;
              return null === i ? (this._subscriptions = [n]) : i.push(n), n;
            }),
            (e.prototype.remove = function (e) {
              var t = this._subscriptions;
              if (t) {
                var n = t.indexOf(e);
                -1 !== n && t.splice(n, 1);
              }
            }),
            (e.EMPTY = (((t = new e()).closed = !0), t)),
            e
          );
        })();
      function c(e) {
        return e.reduce(function (e, t) {
          return e.concat(t instanceof s ? t.errors : t);
        }, []);
      }
    },
    function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return l;
      });
      var r = n(1),
        o = n(9),
        i = n(8),
        s = n(2),
        a = n(7),
        c = n(4),
        u = n(6),
        l = (function (e) {
          function t(n, r, o) {
            var s = e.call(this) || this;
            switch (
              ((s.syncErrorValue = null),
              (s.syncErrorThrown = !1),
              (s.syncErrorThrowable = !1),
              (s.isStopped = !1),
              arguments.length)
            ) {
              case 0:
                s.destination = i.a;
                break;
              case 1:
                if (!n) {
                  s.destination = i.a;
                  break;
                }
                if ("object" == typeof n) {
                  n instanceof t
                    ? ((s.syncErrorThrowable = n.syncErrorThrowable),
                      (s.destination = n),
                      n.add(s))
                    : ((s.syncErrorThrowable = !0),
                      (s.destination = new d(s, n)));
                  break;
                }
              default:
                (s.syncErrorThrowable = !0),
                  (s.destination = new d(s, n, r, o));
            }
            return s;
          }
          return (
            r.a(t, e),
            (t.prototype[a.a] = function () {
              return this;
            }),
            (t.create = function (e, n, r) {
              var o = new t(e, n, r);
              return (o.syncErrorThrowable = !1), o;
            }),
            (t.prototype.next = function (e) {
              this.isStopped || this._next(e);
            }),
            (t.prototype.error = function (e) {
              this.isStopped || ((this.isStopped = !0), this._error(e));
            }),
            (t.prototype.complete = function () {
              this.isStopped || ((this.isStopped = !0), this._complete());
            }),
            (t.prototype.unsubscribe = function () {
              this.closed ||
                ((this.isStopped = !0), e.prototype.unsubscribe.call(this));
            }),
            (t.prototype._next = function (e) {
              this.destination.next(e);
            }),
            (t.prototype._error = function (e) {
              this.destination.error(e), this.unsubscribe();
            }),
            (t.prototype._complete = function () {
              this.destination.complete(), this.unsubscribe();
            }),
            (t.prototype._unsubscribeAndRecycle = function () {
              var e = this._parentOrParents;
              return (
                (this._parentOrParents = null),
                this.unsubscribe(),
                (this.closed = !1),
                (this.isStopped = !1),
                (this._parentOrParents = e),
                this
              );
            }),
            t
          );
        })(s.a),
        d = (function (e) {
          function t(t, n, r, s) {
            var a,
              c = e.call(this) || this;
            c._parentSubscriber = t;
            var u = c;
            return (
              Object(o.a)(n)
                ? (a = n)
                : n &&
                  ((a = n.next),
                  (r = n.error),
                  (s = n.complete),
                  n !== i.a &&
                    ((u = Object.create(n)),
                    Object(o.a)(u.unsubscribe) && c.add(u.unsubscribe.bind(u)),
                    (u.unsubscribe = c.unsubscribe.bind(c)))),
              (c._context = u),
              (c._next = a),
              (c._error = r),
              (c._complete = s),
              c
            );
          }
          return (
            r.a(t, e),
            (t.prototype.next = function (e) {
              if (!this.isStopped && this._next) {
                var t = this._parentSubscriber;
                c.a.useDeprecatedSynchronousErrorHandling &&
                t.syncErrorThrowable
                  ? this.__tryOrSetError(t, this._next, e) && this.unsubscribe()
                  : this.__tryOrUnsub(this._next, e);
              }
            }),
            (t.prototype.error = function (e) {
              if (!this.isStopped) {
                var t = this._parentSubscriber,
                  n = c.a.useDeprecatedSynchronousErrorHandling;
                if (this._error)
                  n && t.syncErrorThrowable
                    ? (this.__tryOrSetError(t, this._error, e),
                      this.unsubscribe())
                    : (this.__tryOrUnsub(this._error, e), this.unsubscribe());
                else if (t.syncErrorThrowable)
                  n
                    ? ((t.syncErrorValue = e), (t.syncErrorThrown = !0))
                    : Object(u.a)(e),
                    this.unsubscribe();
                else {
                  if ((this.unsubscribe(), n)) throw e;
                  Object(u.a)(e);
                }
              }
            }),
            (t.prototype.complete = function () {
              var e = this;
              if (!this.isStopped) {
                var t = this._parentSubscriber;
                if (this._complete) {
                  var n = function () {
                    return e._complete.call(e._context);
                  };
                  c.a.useDeprecatedSynchronousErrorHandling &&
                  t.syncErrorThrowable
                    ? (this.__tryOrSetError(t, n), this.unsubscribe())
                    : (this.__tryOrUnsub(n), this.unsubscribe());
                } else this.unsubscribe();
              }
            }),
            (t.prototype.__tryOrUnsub = function (e, t) {
              try {
                e.call(this._context, t);
              } catch (e) {
                if (
                  (this.unsubscribe(),
                  c.a.useDeprecatedSynchronousErrorHandling)
                )
                  throw e;
                Object(u.a)(e);
              }
            }),
            (t.prototype.__tryOrSetError = function (e, t, n) {
              if (!c.a.useDeprecatedSynchronousErrorHandling)
                throw new Error("bad call");
              try {
                t.call(this._context, n);
              } catch (t) {
                return c.a.useDeprecatedSynchronousErrorHandling
                  ? ((e.syncErrorValue = t), (e.syncErrorThrown = !0), !0)
                  : (Object(u.a)(t), !0);
              }
              return !1;
            }),
            (t.prototype._unsubscribe = function () {
              var e = this._parentSubscriber;
              (this._context = null),
                (this._parentSubscriber = null),
                e.unsubscribe();
            }),
            t
          );
        })(l);
    },
    function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return o;
      });
      var r = !1,
        o = {
          Promise: void 0,
          set useDeprecatedSynchronousErrorHandling(e) {
            e && new Error().stack;
            r = e;
          },
          get useDeprecatedSynchronousErrorHandling() {
            return r;
          },
        };
    },
    function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return r;
      });
      var r = (function () {
        return (
          ("function" == typeof Symbol && Symbol.observable) || "@@observable"
        );
      })();
    },
    function (e, t, n) {
      "use strict";
      function r(e) {
        setTimeout(function () {
          throw e;
        }, 0);
      }
      n.d(t, "a", function () {
        return r;
      });
    },
    function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return r;
      });
      var r = (function () {
        return "function" == typeof Symbol
          ? Symbol("rxSubscriber")
          : "@@rxSubscriber_" + Math.random();
      })();
    },
    function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      });
      var r = n(4),
        o = n(6),
        i = {
          closed: !0,
          next: function (e) {},
          error: function (e) {
            if (r.a.useDeprecatedSynchronousErrorHandling) throw e;
            Object(o.a)(e);
          },
          complete: function () {},
        };
    },
    function (e, t, n) {
      "use strict";
      function r(e) {
        return "function" == typeof e;
      }
      n.d(t, "a", function () {
        return r;
      });
    },
    function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return l;
      }),
        n.d(t, "a", function () {
          return d;
        });
      var r = n(1),
        o = n(0),
        i = n(3),
        s = n(2),
        a = (function () {
          function e() {
            return (
              Error.call(this),
              (this.message = "object unsubscribed"),
              (this.name = "ObjectUnsubscribedError"),
              this
            );
          }
          return (e.prototype = Object.create(Error.prototype)), e;
        })(),
        c = (function (e) {
          function t(t, n) {
            var r = e.call(this) || this;
            return (r.subject = t), (r.subscriber = n), (r.closed = !1), r;
          }
          return (
            r.a(t, e),
            (t.prototype.unsubscribe = function () {
              if (!this.closed) {
                this.closed = !0;
                var e = this.subject,
                  t = e.observers;
                if (
                  ((this.subject = null),
                  t && 0 !== t.length && !e.isStopped && !e.closed)
                ) {
                  var n = t.indexOf(this.subscriber);
                  -1 !== n && t.splice(n, 1);
                }
              }
            }),
            t
          );
        })(s.a),
        u = n(7),
        l = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (n.destination = t), n;
          }
          return r.a(t, e), t;
        })(i.a),
        d = (function (e) {
          function t() {
            var t = e.call(this) || this;
            return (
              (t.observers = []),
              (t.closed = !1),
              (t.isStopped = !1),
              (t.hasError = !1),
              (t.thrownError = null),
              t
            );
          }
          return (
            r.a(t, e),
            (t.prototype[u.a] = function () {
              return new l(this);
            }),
            (t.prototype.lift = function (e) {
              var t = new f(this, this);
              return (t.operator = e), t;
            }),
            (t.prototype.next = function (e) {
              if (this.closed) throw new a();
              if (!this.isStopped)
                for (
                  var t = this.observers, n = t.length, r = t.slice(), o = 0;
                  o < n;
                  o++
                )
                  r[o].next(e);
            }),
            (t.prototype.error = function (e) {
              if (this.closed) throw new a();
              (this.hasError = !0),
                (this.thrownError = e),
                (this.isStopped = !0);
              for (
                var t = this.observers, n = t.length, r = t.slice(), o = 0;
                o < n;
                o++
              )
                r[o].error(e);
              this.observers.length = 0;
            }),
            (t.prototype.complete = function () {
              if (this.closed) throw new a();
              this.isStopped = !0;
              for (
                var e = this.observers, t = e.length, n = e.slice(), r = 0;
                r < t;
                r++
              )
                n[r].complete();
              this.observers.length = 0;
            }),
            (t.prototype.unsubscribe = function () {
              (this.isStopped = !0),
                (this.closed = !0),
                (this.observers = null);
            }),
            (t.prototype._trySubscribe = function (t) {
              if (this.closed) throw new a();
              return e.prototype._trySubscribe.call(this, t);
            }),
            (t.prototype._subscribe = function (e) {
              if (this.closed) throw new a();
              return this.hasError
                ? (e.error(this.thrownError), s.a.EMPTY)
                : this.isStopped
                ? (e.complete(), s.a.EMPTY)
                : (this.observers.push(e), new c(this, e));
            }),
            (t.prototype.asObservable = function () {
              var e = new o.a();
              return (e.source = this), e;
            }),
            (t.create = function (e, t) {
              return new f(e, t);
            }),
            t
          );
        })(o.a),
        f = (function (e) {
          function t(t, n) {
            var r = e.call(this) || this;
            return (r.destination = t), (r.source = n), r;
          }
          return (
            r.a(t, e),
            (t.prototype.next = function (e) {
              var t = this.destination;
              t && t.next && t.next(e);
            }),
            (t.prototype.error = function (e) {
              var t = this.destination;
              t && t.error && this.destination.error(e);
            }),
            (t.prototype.complete = function () {
              var e = this.destination;
              e && e.complete && this.destination.complete();
            }),
            (t.prototype._subscribe = function (e) {
              return this.source ? this.source.subscribe(e) : s.a.EMPTY;
            }),
            t
          );
        })(d);
    },
    function (e, t, n) {
      "use strict";
      (function (e) {
        var r = n(18),
          o = n(19),
          i = setTimeout;
        function s(e) {
          return Boolean(e && void 0 !== e.length);
        }
        function a() {}
        function c(e) {
          if (!(this instanceof c))
            throw new TypeError("Promises must be constructed via new");
          if ("function" != typeof e) throw new TypeError("not a function");
          (this._state = 0),
            (this._handled = !1),
            (this._value = void 0),
            (this._deferreds = []),
            p(e, this);
        }
        function u(e, t) {
          for (; 3 === e._state; ) e = e._value;
          0 !== e._state
            ? ((e._handled = !0),
              c._immediateFn(function () {
                var n = 1 === e._state ? t.onFulfilled : t.onRejected;
                if (null !== n) {
                  var r;
                  try {
                    r = n(e._value);
                  } catch (e) {
                    return void d(t.promise, e);
                  }
                  l(t.promise, r);
                } else (1 === e._state ? l : d)(t.promise, e._value);
              }))
            : e._deferreds.push(t);
        }
        function l(e, t) {
          try {
            if (t === e)
              throw new TypeError("A promise cannot be resolved with itself.");
            if (t && ("object" == typeof t || "function" == typeof t)) {
              var n = t.then;
              if (t instanceof c)
                return (e._state = 3), (e._value = t), void f(e);
              if ("function" == typeof n)
                return void p(
                  ((r = n),
                  (o = t),
                  function () {
                    r.apply(o, arguments);
                  }),
                  e
                );
            }
            (e._state = 1), (e._value = t), f(e);
          } catch (t) {
            d(e, t);
          }
          var r, o;
        }
        function d(e, t) {
          (e._state = 2), (e._value = t), f(e);
        }
        function f(e) {
          2 === e._state &&
            0 === e._deferreds.length &&
            c._immediateFn(function () {
              e._handled || c._unhandledRejectionFn(e._value);
            });
          for (var t = 0, n = e._deferreds.length; t < n; t++)
            u(e, e._deferreds[t]);
          e._deferreds = null;
        }
        function h(e, t, n) {
          (this.onFulfilled = "function" == typeof e ? e : null),
            (this.onRejected = "function" == typeof t ? t : null),
            (this.promise = n);
        }
        function p(e, t) {
          var n = !1;
          try {
            e(
              function (e) {
                n || ((n = !0), l(t, e));
              },
              function (e) {
                n || ((n = !0), d(t, e));
              }
            );
          } catch (e) {
            if (n) return;
            (n = !0), d(t, e);
          }
        }
        (c.prototype.catch = function (e) {
          return this.then(null, e);
        }),
          (c.prototype.then = function (e, t) {
            var n = new this.constructor(a);
            return u(this, new h(e, t, n)), n;
          }),
          (c.prototype.finally = r.a),
          (c.all = function (e) {
            return new c(function (t, n) {
              if (!s(e))
                return n(new TypeError("Promise.all accepts an array"));
              var r = Array.prototype.slice.call(e);
              if (0 === r.length) return t([]);
              var o = r.length;
              function i(e, s) {
                try {
                  if (s && ("object" == typeof s || "function" == typeof s)) {
                    var a = s.then;
                    if ("function" == typeof a)
                      return void a.call(
                        s,
                        function (t) {
                          i(e, t);
                        },
                        n
                      );
                  }
                  (r[e] = s), 0 == --o && t(r);
                } catch (e) {
                  n(e);
                }
              }
              for (var a = 0; a < r.length; a++) i(a, r[a]);
            });
          }),
          (c.allSettled = o.a),
          (c.resolve = function (e) {
            return e && "object" == typeof e && e.constructor === c
              ? e
              : new c(function (t) {
                  t(e);
                });
          }),
          (c.reject = function (e) {
            return new c(function (t, n) {
              n(e);
            });
          }),
          (c.race = function (e) {
            return new c(function (t, n) {
              if (!s(e))
                return n(new TypeError("Promise.race accepts an array"));
              for (var r = 0, o = e.length; r < o; r++)
                c.resolve(e[r]).then(t, n);
            });
          }),
          (c._immediateFn =
            ("function" == typeof e &&
              function (t) {
                e(t);
              }) ||
            function (e) {
              i(e, 0);
            }),
          (c._unhandledRejectionFn = function (e) {
            "undefined" != typeof console &&
              console &&
              console.warn("Possible Unhandled Promise Rejection:", e);
          }),
          (t.a = c);
      }.call(this, n(24).setImmediate));
    },
    function (e, t, n) {
      "use strict";
      function r(e) {
        return null !== e && "object" == typeof e;
      }
      n.d(t, "a", function () {
        return r;
      });
    },
    function (e, t, n) {
      "use strict";
      function r(e) {
        return e;
      }
      n.d(t, "a", function () {
        return r;
      });
    },
    function (e, t) {
      var n;
      n = (function () {
        return this;
      })();
      try {
        n = n || new Function("return this")();
      } catch (e) {
        "object" == typeof window && (n = window);
      }
      e.exports = n;
    },
    function (e, t, n) {
      "use strict";
      (function (e) {
        n.d(t, "a", function () {
          return gi;
        }),
          n.d(t, "b", function () {
            return M;
          });
        var r = n(10),
          o = n(2),
          i = n(0),
          s = n(28),
          a = n(29);
        function c(e) {
          for (let t in e) if (e[t] === c) return t;
          throw Error("Could not find renamed property on target object.");
        }
        function u(e) {
          if ("string" == typeof e) return e;
          if (Array.isArray(e)) return "[" + e.map(u).join(", ") + "]";
          if (null == e) return "" + e;
          if (e.overriddenName) return "" + e.overriddenName;
          if (e.name) return "" + e.name;
          const t = e.toString();
          if (null == t) return "" + t;
          const n = t.indexOf("\n");
          return -1 === n ? t : t.substring(0, n);
        }
        function l(e, t) {
          return null == e || "" === e
            ? null === t
              ? ""
              : t
            : null == t || "" === t
            ? e
            : e + " " + t;
        }
        const d = c({ __forward_ref__: c });
        function f(e) {
          return (
            (e.__forward_ref__ = f),
            (e.toString = function () {
              return u(this());
            }),
            e
          );
        }
        function h(e) {
          return p(e) ? e() : e;
        }
        function p(e) {
          return (
            "function" == typeof e &&
            e.hasOwnProperty(d) &&
            e.__forward_ref__ === f
          );
        }
        function g(e, t) {
          "number" != typeof e && E(t, typeof e, "number", "===");
        }
        function m(e, t) {
          "string" != typeof e &&
            E(t, null === e ? "null" : typeof e, "string", "===");
        }
        function v(e, t) {
          "function" != typeof e &&
            E(t, null === e ? "null" : typeof e, "function", "===");
        }
        function y(e, t, n) {
          e != t && E(n, e, t, "==");
        }
        function b(e, t, n) {
          e == t && E(n, e, t, "!=");
        }
        function w(e, t, n) {
          e !== t && E(n, e, t, "===");
        }
        function _(e, t, n) {
          e === t && E(n, e, t, "!==");
        }
        function x(e, t, n) {
          e < t || E(n, e, t, "<");
        }
        function T(e, t, n) {
          e > t || E(n, e, t, ">");
        }
        function k(e, t, n) {
          e >= t || E(n, e, t, ">=");
        }
        function C(e, t) {
          null == e && E(t, e, null, "!=");
        }
        function E(e, t, n, r) {
          throw new Error(
            "ASSERTION ERROR: " +
              e +
              (null == r ? "" : ` [Expected=> ${n} ${r} ${t} <=Actual]`)
          );
        }
        function S(e) {
          ("undefined" != typeof Node && e instanceof Node) ||
            ("object" == typeof e &&
              null != e &&
              "WebWorkerRenderNode" === e.constructor.name) ||
            E(
              "The provided value must be an instance of a DOM Node but got " +
                u(e)
            );
        }
        function I(e, t) {
          C(e, "Array must be defined.");
          const n = e.length;
          (t < 0 || t >= n) &&
            E(`Index expected to be less than ${n} but got ${t}`);
        }
        function M(e) {
          return {
            token: e.token,
            providedIn: e.providedIn || null,
            factory: e.factory,
            value: void 0,
          };
        }
        function D(e) {
          return {
            factory: e.factory,
            providers: e.providers || [],
            imports: e.imports || [],
          };
        }
        function A(e) {
          return N(e, O) || N(e, j);
        }
        function N(e, t) {
          return e.hasOwnProperty(t) ? e[t] : null;
        }
        const O = c({ Éµprov: c }),
          j = (c({ Éµinj: c }), c({ ngInjectableDef: c }));
        c({ ngInjectorDef: c });
        var P;
        let R;
        function H(e) {
          const t = R;
          return (R = e), t;
        }
        function F(e, t, n) {
          const r = A(e);
          if (r && "root" == r.providedIn)
            return void 0 === r.value ? (r.value = r.factory()) : r.value;
          if (n & P.Optional) return null;
          if (void 0 !== t) return t;
          throw new Error(`Injector: NOT_FOUND [${u(e)}]`);
        }
        function L(e) {
          return { toString: e }.toString();
        }
        var V, q, z;
        !(function (e) {
          (e[(e.Default = 0)] = "Default"),
            (e[(e.Host = 1)] = "Host"),
            (e[(e.Self = 2)] = "Self"),
            (e[(e.SkipSelf = 4)] = "SkipSelf"),
            (e[(e.Optional = 8)] = "Optional");
        })(P || (P = {})),
          (function (e) {
            (e[(e.OnPush = 0)] = "OnPush"), (e[(e.Default = 1)] = "Default");
          })(V || (V = {})),
          (function (e) {
            (e[(e.CheckOnce = 0)] = "CheckOnce"),
              (e[(e.Checked = 1)] = "Checked"),
              (e[(e.CheckAlways = 2)] = "CheckAlways"),
              (e[(e.Detached = 3)] = "Detached"),
              (e[(e.Errored = 4)] = "Errored"),
              (e[(e.Destroyed = 5)] = "Destroyed");
          })(q || (q = {})),
          (function (e) {
            (e[(e.Emulated = 0)] = "Emulated"),
              (e[(e.None = 2)] = "None"),
              (e[(e.ShadowDom = 3)] = "ShadowDom");
          })(z || (z = {}));
        const B = "undefined" != typeof globalThis && globalThis,
          W = "undefined" != typeof window && window,
          $ =
            "undefined" != typeof self &&
            "undefined" != typeof WorkerGlobalScope &&
            self instanceof WorkerGlobalScope &&
            self,
          U = B || (void 0 !== e && e) || W || $;
        function Z() {
          return (
            !("undefined" != typeof ngDevMode && !ngDevMode) &&
            ("object" != typeof ngDevMode &&
              (function () {
                const e =
                    "undefined" != typeof location ? location.toString() : "",
                  t = {
                    namedConstructors:
                      -1 != e.indexOf("ngDevMode=namedConstructors"),
                    firstCreatePass: 0,
                    tNode: 0,
                    tView: 0,
                    rendererCreateTextNode: 0,
                    rendererSetText: 0,
                    rendererCreateElement: 0,
                    rendererAddEventListener: 0,
                    rendererSetAttribute: 0,
                    rendererRemoveAttribute: 0,
                    rendererSetProperty: 0,
                    rendererSetClassName: 0,
                    rendererAddClass: 0,
                    rendererRemoveClass: 0,
                    rendererSetStyle: 0,
                    rendererRemoveStyle: 0,
                    rendererDestroy: 0,
                    rendererDestroyNode: 0,
                    rendererMoveNode: 0,
                    rendererRemoveNode: 0,
                    rendererAppendChild: 0,
                    rendererInsertBefore: 0,
                    rendererCreateComment: 0,
                  },
                  n = -1 === e.indexOf("ngDevMode=false");
                U.ngDevMode = n && t;
              })(),
            "undefined" != typeof ngDevMode && !!ngDevMode)
          );
        }
        const Q = {},
          K = [];
        ("undefined" == typeof ngDevMode || ngDevMode) &&
          Z() &&
          (Object.freeze(Q), Object.freeze(K));
        const X = c({ Éµcmp: c }),
          Y =
            (c({ Éµdir: c }),
            c({ Éµpipe: c }),
            c({ Éµmod: c }),
            c({ Éµloc: c }),
            c({ Éµfac: c })),
          G = c({ __NG_ELEMENT_ID__: c });
        function J(e) {
          return e[X] || null;
        }
        const ee = 20,
          te = ["Root", "Component", "Embedded"],
          ne = 10;
        function re(e) {
          return Array.isArray(e) && "object" == typeof e[1];
        }
        function oe(e) {
          return Array.isArray(e) && !0 === e[1];
        }
        function ie(e) {
          return 2 == (2 & e.flags);
        }
        function se(e) {
          return null !== e.template;
        }
        function ae(e, t) {
          ce(e, t[1]);
        }
        function ce(e, t) {
          ue(e),
            e.hasOwnProperty("tView_") &&
              y(e.tView_, t, "This TNode does not belong to this TView.");
        }
        function ue(e) {
          C(e, "TNode must be defined"),
            (e &&
              "object" == typeof e &&
              e.hasOwnProperty("directiveStylingLast")) ||
              E("Not of type TNode, got: " + e);
        }
        function le(
          e,
          t = "Type passed in is not ComponentType, it does not have 'Éµcmp' property."
        ) {
          J(e) || E(t);
        }
        function de(e) {
          C(e, "LContainer must be defined"),
            y(oe(e), !0, "Expecting LContainer");
        }
        function fe(e) {
          e && y(re(e), !0, "Expecting LView or undefined or null");
        }
        function he(e) {
          C(e, "LView must be defined"), y(re(e), !0, "Expecting LView");
        }
        function pe(e, t) {
          y(
            e.firstCreatePass,
            !0,
            t || "Should only be called in first create pass."
          );
        }
        function ge(e, t) {
          y(
            e.firstUpdatePass,
            !0,
            t || "Should only be called in first update pass."
          );
        }
        function me(e, t) {
          ve(e[1].expandoStartIndex, e.length, t);
        }
        function ve(e, t, n) {
          (e <= n && n < t) ||
            E(`Index out of range (expecting ${e} <= ${n} < ${t})`);
        }
        function ye(e, t) {
          me(e, t),
            me(e, t + 8),
            g(e[t + 0], "injectorIndex should point to a bloom filter"),
            g(e[t + 1], "injectorIndex should point to a bloom filter"),
            g(e[t + 2], "injectorIndex should point to a bloom filter"),
            g(e[t + 3], "injectorIndex should point to a bloom filter"),
            g(e[t + 4], "injectorIndex should point to a bloom filter"),
            g(e[t + 5], "injectorIndex should point to a bloom filter"),
            g(e[t + 6], "injectorIndex should point to a bloom filter"),
            g(e[t + 7], "injectorIndex should point to a bloom filter"),
            g(e[t + 8], "injectorIndex should point to parent injector");
        }
        function be(e, t) {
          const n = e.hasOwnProperty(Y);
          if (!n && !0 === t && ngDevMode)
            throw new Error(`Type ${u(e)} does not have 'Éµfac' property.`);
          return n ? e[Y] : null;
        }
        class we extends Error {
          constructor(e, t) {
            super(_e(e, t)), (this.code = e);
          }
        }
        function _e(e, t) {
          return `${e ? `NG0${e}: ` : ""}${t}`;
        }
        function xe(e) {
          return "string" == typeof e ? e : null == e ? "" : String(e);
        }
        function Te(e) {
          return "function" == typeof e
            ? e.name || e.toString()
            : "object" == typeof e && null != e && "function" == typeof e.type
            ? e.type.name || e.type.toString()
            : xe(e);
        }
        function ke(e, t) {
          const n = t ? `. Dependency path: ${t.join(" > ")} > ${e}` : "";
          throw new we(
            "200",
            `Circular dependency in DI detected for ${e}${n}`
          );
        }
        function Ce(e, t) {
          const n = t ? " in " + t : "";
          throw new we("201", `No provider for ${Te(e)} found${n}`);
        }
        class Ee {
          constructor(e, t, n) {
            (this.previousValue = e),
              (this.currentValue = t),
              (this.firstChange = n);
          }
          isFirstChange() {
            return this.firstChange;
          }
        }
        function Se() {
          return Ie;
        }
        function Ie(e) {
          return e.type.prototype.ngOnChanges && (e.setInput = De), Me;
        }
        function Me() {
          const e = Ae(this),
            t = null == e ? void 0 : e.current;
          if (t) {
            const n = e.previous;
            if (n === Q) e.previous = t;
            else for (let e in t) n[e] = t[e];
            (e.current = null), this.ngOnChanges(t);
          }
        }
        function De(e, t, n, r) {
          const o =
              Ae(e) ||
              (function (e, t) {
                return (e.__ngSimpleChanges__ = t);
              })(e, { previous: Q, current: null }),
            i = o.current || (o.current = {}),
            s = o.previous,
            a = this.declaredInputs[n],
            c = s[a];
          (i[a] = new Ee(c && c.currentValue, t, s === Q)), (e[r] = t);
        }
        Se.ngInherit = !0;
        function Ae(e) {
          return e.__ngSimpleChanges__ || null;
        }
        const Ne = "http://www.w3.org/2000/svg",
          Oe = "http://www.w3.org/1998/MathML/";
        let je = void 0;
        function Pe() {
          return void 0 !== je
            ? je
            : "undefined" != typeof document
            ? document
            : void 0;
        }
        var Re;
        function He(e) {
          return !!e.listen;
        }
        !(function (e) {
          (e[(e.Important = 1)] = "Important"),
            (e[(e.DashCase = 2)] = "DashCase");
        })(Re || (Re = {}));
        const Fe = { createRenderer: (e, t) => Pe() };
        function Le(e) {
          for (; Array.isArray(e); ) e = e[0];
          return e;
        }
        function Ve(e, t) {
          ngDevMode && ae(e, t), ngDevMode && I(t, e.index);
          const n = Le(t[e.index]);
          return ngDevMode && !He(t[11]) && S(n), n;
        }
        function qe(e, t) {
          ngDevMode && T(t, -1, "wrong index for TNode"),
            ngDevMode && x(t, e.data.length, "wrong index for TNode");
          const n = e.data[t];
          return ngDevMode && null !== n && ue(n), n;
        }
        function ze(e, t) {
          ngDevMode && I(t, e);
          const n = t[e];
          return re(n) ? n : n[0];
        }
        function Be(e) {
          return ngDevMode && C(e, "Target expected"), e.__ngContext__ || null;
        }
        function We(e) {
          const t = Be(e);
          return t ? (Array.isArray(t) ? t : t.lView) : null;
        }
        function $e(e) {
          return 4 == (4 & e[2]);
        }
        function Ue(e) {
          return 128 == (128 & e[2]);
        }
        function Ze(e) {
          e[18] = 0;
        }
        function Qe(e, t) {
          e[5] += t;
          let n = e,
            r = e[3];
          for (
            ;
            null !== r && ((1 === t && 1 === n[5]) || (-1 === t && 0 === n[5]));

          )
            (r[5] += t), (n = r), (r = r[3]);
        }
        const Ke = {
          lFrame: ht(null),
          bindingsEnabled: !0,
          isInCheckNoChangesMode: !1,
        };
        function Xe() {
          return Ke.lFrame.lView;
        }
        function Ye() {
          return Ke.lFrame.tView;
        }
        function Ge() {
          let e = Je();
          for (; null !== e && 64 === e.type; ) e = e.parent;
          return e;
        }
        function Je() {
          return Ke.lFrame.currentTNode;
        }
        function et() {
          const e = Ke.lFrame,
            t = e.currentTNode;
          return e.isParent ? t : t.parent;
        }
        function tt(e, t) {
          ngDevMode && e && ce(e, Ke.lFrame.tView);
          const n = Ke.lFrame;
          (n.currentTNode = e), (n.isParent = t);
        }
        function nt() {
          return Ke.lFrame.isParent;
        }
        function rt() {
          return Ke.isInCheckNoChangesMode;
        }
        function ot(e) {
          Ke.isInCheckNoChangesMode = e;
        }
        function it(e) {
          return (Ke.lFrame.bindingIndex = e);
        }
        function st(e, t) {
          const n = Ke.lFrame;
          (n.bindingIndex = n.bindingRootIndex = e), at(t);
        }
        function at(e) {
          Ke.lFrame.currentDirectiveIndex = e;
        }
        function ct(e) {
          Ke.lFrame.currentQueryIndex = e;
        }
        function ut(e) {
          const t = e[1];
          return 2 === t.type
            ? (ngDevMode &&
                C(
                  t.declTNode,
                  "Embedded TNodes should have declaration parents."
                ),
              t.declTNode)
            : 1 === t.type
            ? e[6]
            : null;
        }
        function lt(e, t, n) {
          if ((ngDevMode && fe(e), n & P.SkipSelf)) {
            ngDevMode && ce(t, e[1]);
            let r = t,
              o = e;
            for (
              ;
              !(ngDevMode && C(r, "Parent TNode should be defined"),
              (r = r.parent),
              null !== r ||
                n & P.Host ||
                ((r = ut(o)), null === r) ||
                (ngDevMode && C(o, "Parent LView should be defined"),
                (o = o[15]),
                10 & r.type));

            );
            if (null === r) return !1;
            (t = r), (e = o);
          }
          ngDevMode && ae(t, e);
          const r = (Ke.lFrame = ft());
          return (r.currentTNode = t), (r.lView = e), !0;
        }
        function dt(e) {
          ngDevMode && b(e[0], e[1], "????"), ngDevMode && fe(e);
          const t = ft();
          ngDevMode &&
            (y(t.isParent, !0, "Expected clean LFrame"),
            y(t.lView, null, "Expected clean LFrame"),
            y(t.tView, null, "Expected clean LFrame"),
            y(t.selectedIndex, -1, "Expected clean LFrame"),
            y(t.elementDepthCount, 0, "Expected clean LFrame"),
            y(t.currentDirectiveIndex, -1, "Expected clean LFrame"),
            y(t.currentNamespace, null, "Expected clean LFrame"),
            y(t.bindingRootIndex, -1, "Expected clean LFrame"),
            y(t.currentQueryIndex, 0, "Expected clean LFrame"));
          const n = e[1];
          (Ke.lFrame = t),
            ngDevMode && n.firstChild && ce(n.firstChild, n),
            (t.currentTNode = n.firstChild),
            (t.lView = e),
            (t.tView = n),
            (t.contextLView = e),
            (t.bindingIndex = n.bindingStartIndex),
            (t.inI18n = !1);
        }
        function ft() {
          const e = Ke.lFrame,
            t = null === e ? null : e.child;
          return null === t ? ht(e) : t;
        }
        function ht(e) {
          const t = {
            currentTNode: null,
            isParent: !0,
            lView: null,
            tView: null,
            selectedIndex: -1,
            contextLView: null,
            elementDepthCount: 0,
            currentNamespace: null,
            currentDirectiveIndex: -1,
            bindingRootIndex: -1,
            bindingIndex: -1,
            currentQueryIndex: 0,
            parent: e,
            child: null,
            inI18n: !1,
          };
          return null !== e && (e.child = t), t;
        }
        function pt() {
          const e = Ke.lFrame;
          return (
            (Ke.lFrame = e.parent), (e.currentTNode = null), (e.lView = null), e
          );
        }
        const gt = pt;
        function mt() {
          const e = pt();
          (e.isParent = !0),
            (e.tView = null),
            (e.selectedIndex = -1),
            (e.contextLView = null),
            (e.elementDepthCount = 0),
            (e.currentDirectiveIndex = -1),
            (e.currentNamespace = null),
            (e.bindingRootIndex = -1),
            (e.bindingIndex = -1),
            (e.currentQueryIndex = 0);
        }
        function vt() {
          return Ke.lFrame.selectedIndex;
        }
        function yt(e) {
          ngDevMode &&
            -1 !== e &&
            k(e, ee, "Index must be past HEADER_OFFSET (or -1)."),
            ngDevMode &&
              x(
                e,
                Ke.lFrame.lView.length,
                "Can't set index passed end of LView"
              ),
            (Ke.lFrame.selectedIndex = e);
        }
        function bt(e, t) {
          ngDevMode && pe(e);
          for (let n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
            const t = e.data[n];
            ngDevMode && C(t, "Expecting DirectiveDef");
            const r = t.type.prototype,
              {
                ngAfterContentInit: o,
                ngAfterContentChecked: i,
                ngAfterViewInit: s,
                ngAfterViewChecked: a,
                ngOnDestroy: c,
              } = r;
            o && (e.contentHooks || (e.contentHooks = [])).push(-n, o),
              i &&
                ((e.contentHooks || (e.contentHooks = [])).push(n, i),
                (e.contentCheckHooks || (e.contentCheckHooks = [])).push(n, i)),
              s && (e.viewHooks || (e.viewHooks = [])).push(-n, s),
              a &&
                ((e.viewHooks || (e.viewHooks = [])).push(n, a),
                (e.viewCheckHooks || (e.viewCheckHooks = [])).push(n, a)),
              null != c && (e.destroyHooks || (e.destroyHooks = [])).push(n, c);
          }
        }
        function wt(e, t, n) {
          Tt(e, t, 3, n);
        }
        function _t(e, t, n, r) {
          ngDevMode &&
            b(n, 3, "Init pre-order hooks should not be called more than once"),
            (3 & e[2]) === n && Tt(e, t, n, r);
        }
        function xt(e, t) {
          ngDevMode &&
            b(
              t,
              3,
              "Init hooks phase should not be incremented after all init hooks have been run."
            );
          let n = e[2];
          (3 & n) === t && ((n &= 2047), (n += 1), (e[2] = n));
        }
        function Tt(e, t, n, r) {
          ngDevMode &&
            y(
              rt(),
              !1,
              "Hooks should never be run when in check no changes mode."
            );
          const o = null != r ? r : -1;
          let i = 0;
          for (let s = void 0 !== r ? 65535 & e[18] : 0; s < t.length; s++) {
            if ("number" == typeof t[s + 1]) {
              if (((i = t[s]), null != r && i >= r)) break;
            } else {
              t[s] < 0 && (e[18] += 65536),
                (i < o || -1 == o) &&
                  (kt(e, n, t, s), (e[18] = (4294901760 & e[18]) + s + 2)),
                s++;
            }
          }
        }
        function kt(e, t, n, r) {
          const o = n[r] < 0,
            i = n[r + 1],
            s = e[o ? -n[r] : n[r]];
          if (o) {
            e[2] >> 11 < e[18] >> 16 &&
              (3 & e[2]) === t &&
              ((e[2] += 2048), i.call(s));
          } else i.call(s);
        }
        const Ct = -1;
        class Et {
          constructor(e, t, n) {
            (this.factory = e),
              (this.resolving = !1),
              ngDevMode && C(e, "Factory not specified"),
              ngDevMode &&
                y(typeof e, "function", "Expected factory function."),
              (this.canSeeViewProviders = t),
              (this.injectImpl = n);
          }
        }
        function St(e) {
          let t = "";
          return (
            1 & e && (t += "|Text"),
            2 & e && (t += "|Element"),
            4 & e && (t += "|Container"),
            8 & e && (t += "|ElementContainer"),
            16 & e && (t += "|Projection"),
            32 & e && (t += "|IcuContainer"),
            64 & e && (t += "|Placeholder"),
            t.length > 0 ? t.substring(1) : t
          );
        }
        function It(e, t, n) {
          C(e, "should be called with a TNode"),
            0 == (e.type & t) &&
              E(n || `Expected [${St(t)}] but got ${St(e.type)}.`);
        }
        function Mt(e, t, n) {
          const r = He(e);
          let o = 0;
          for (; o < n.length; ) {
            const i = n[o];
            if ("number" == typeof i) {
              if (0 !== i) break;
              o++;
              const s = n[o++],
                a = n[o++],
                c = n[o++];
              ngDevMode && ngDevMode.rendererSetAttribute++,
                r ? e.setAttribute(t, a, c, s) : t.setAttributeNS(s, a, c);
            } else {
              const s = i,
                a = n[++o];
              ngDevMode && ngDevMode.rendererSetAttribute++,
                Dt(s)
                  ? r && e.setProperty(t, s, a)
                  : r
                  ? e.setAttribute(t, s, a)
                  : t.setAttribute(s, a),
                o++;
            }
          }
          return o;
        }
        function Dt(e) {
          return 64 === e.charCodeAt(0);
        }
        function At(e) {
          return e !== Ct;
        }
        function Nt(e) {
          ngDevMode && g(e, "Number expected"),
            ngDevMode && b(e, -1, "Not a valid state.");
          return (
            ngDevMode &&
              T(
                32767 & e,
                ee,
                "Parent injector must be pointing past HEADER_OFFSET."
              ),
            32767 & e
          );
        }
        function Ot(e, t) {
          let n = e >> 16;
          let r = t;
          for (; n > 0; ) (r = r[15]), n--;
          return r;
        }
        let jt = !0;
        function Pt(e) {
          const t = jt;
          return (jt = e), t;
        }
        let Rt = 0;
        function Ht(e, t) {
          const n = Lt(e, t);
          if (-1 !== n) return n;
          const r = t[1];
          r.firstCreatePass &&
            ((e.injectorIndex = t.length),
            Ft(r.data, e),
            Ft(t, null),
            Ft(r.blueprint, null));
          const o = Vt(e, t),
            i = e.injectorIndex;
          if (At(o)) {
            const e = Nt(o),
              n = Ot(o, t),
              r = n[1].data;
            for (let o = 0; o < 8; o++) t[i + o] = n[e + o] | r[e + o];
          }
          return (t[i + 8] = o), i;
        }
        function Ft(e, t) {
          e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
        }
        function Lt(e, t) {
          return -1 === e.injectorIndex ||
            (e.parent && e.parent.injectorIndex === e.injectorIndex) ||
            null === t[e.injectorIndex + 8]
            ? -1
            : (ngDevMode && I(t, e.injectorIndex), e.injectorIndex);
        }
        function Vt(e, t) {
          if (e.parent && -1 !== e.parent.injectorIndex)
            return e.parent.injectorIndex;
          let n = 0,
            r = null,
            o = t;
          for (; null !== o; ) {
            const e = o[1],
              t = e.type;
            if (
              (2 === t
                ? (ngDevMode &&
                    C(
                      e.declTNode,
                      "Embedded TNodes should have declaration parents."
                    ),
                  (r = e.declTNode))
                : 1 === t
                ? (r = o[6])
                : (ngDevMode && y(e.type, 0, "Root type expected"), (r = null)),
              null === r)
            )
              return Ct;
            if (
              (ngDevMode && r && ae(r, o[15]),
              n++,
              (o = o[15]),
              -1 !== r.injectorIndex)
            )
              return r.injectorIndex | (n << 16);
          }
          return Ct;
        }
        function qt(e, t, n) {
          !(function (e, t, n) {
            let r;
            ngDevMode &&
              y(t.firstCreatePass, !0, "expected firstCreatePass to be true"),
              "string" == typeof n
                ? (r = n.charCodeAt(0) || 0)
                : n.hasOwnProperty(G) && (r = n[G]),
              null == r && (r = n[G] = Rt++);
            const o = 255 & r,
              i = 1 << o,
              s = 128 & o,
              a = 64 & o,
              c = 32 & o,
              u = t.data;
            s
              ? a
                ? c
                  ? (u[e + 7] |= i)
                  : (u[e + 6] |= i)
                : c
                ? (u[e + 5] |= i)
                : (u[e + 4] |= i)
              : a
              ? c
                ? (u[e + 3] |= i)
                : (u[e + 2] |= i)
              : c
              ? (u[e + 1] |= i)
              : (u[e] |= i);
          })(e, t, n);
        }
        function zt(e, t, n) {
          if (n & P.Optional) return e;
          Ce(t, "NodeInjector");
        }
        function Bt(e, t, n, r) {
          if (
            (n & P.Optional && void 0 === r && (r = null),
            0 == (n & (P.Self | P.Host)))
          ) {
            const o = e[9],
              i = H(void 0);
            try {
              return o ? o.get(t, r, n & P.Optional) : F(t, r, n & P.Optional);
            } finally {
              H(i);
            }
          }
          return zt(r, t, n);
        }
        function Wt(e, t, n, r = P.Default, o) {
          if (null !== e) {
            const i = (function (e) {
              if (
                (ngDevMode && C(e, "token must be defined"),
                "string" == typeof e)
              )
                return e.charCodeAt(0) || 0;
              const t = e.hasOwnProperty(G) ? e[G] : void 0;
              return "number" == typeof t
                ? t >= 0
                  ? 255 & t
                  : (ngDevMode &&
                      y(t, -1, "Expecting to get Special Injector Id"),
                    Ut)
                : t;
            })(n);
            if ("function" == typeof i) {
              if (!lt(t, e, r))
                return r & P.Host ? zt(o, n, r) : Bt(t, n, r, o);
              try {
                const e = i();
                if (null != e || r & P.Optional) return e;
                Ce(n);
              } finally {
                gt();
              }
            } else if ("number" == typeof i) {
              let o = null,
                s = Lt(e, t),
                a = Ct,
                c = r & P.Host ? t[16][6] : null;
              for (
                (-1 === s || r & P.SkipSelf) &&
                ((a = -1 === s ? Vt(e, t) : t[s + 8]),
                a !== Ct && Yt(r, !1)
                  ? ((o = t[1]), (s = Nt(a)), (t = Ot(a, t)))
                  : (s = -1));
                -1 !== s;

              ) {
                ngDevMode && ye(t, s);
                const e = t[1];
                if ((ngDevMode && ae(e.data[s + 8], t), Xt(i, s, e.data))) {
                  const e = Zt(s, t, n, o, r, c);
                  if (e !== $t) return e;
                }
                (a = t[s + 8]),
                  a !== Ct && Yt(r, t[1].data[s + 8] === c) && Xt(i, s, t)
                    ? ((o = e), (s = Nt(a)), (t = Ot(a, t)))
                    : (s = -1);
              }
            }
          }
          return Bt(t, n, r, o);
        }
        const $t = {};
        function Ut() {
          return new Gt(Ge(), Xe());
        }
        function Zt(e, t, n, r, o, i) {
          const s = t[1],
            a = s.data[e + 8],
            c = Qt(
              a,
              s,
              n,
              null == r ? ie(a) && jt : r != s && 0 != (3 & a.type),
              o & P.Host && i === a
            );
          return null !== c ? Kt(t, s, c, a) : $t;
        }
        function Qt(e, t, n, r, o) {
          const i = e.providerIndexes,
            s = t.data,
            a = 1048575 & i,
            c = e.directiveStart,
            u = e.directiveEnd,
            l = i >> 20,
            d = o ? a + l : u;
          for (let e = r ? a : a + l; e < d; e++) {
            const t = s[e];
            if ((e < c && n === t) || (e >= c && t.type === n)) return e;
          }
          if (o) {
            const e = s[c];
            if (e && se(e) && e.type === n) return c;
          }
          return null;
        }
        function Kt(e, t, n, r) {
          let o = e[n];
          const i = t.data;
          if (o instanceof Et) {
            const s = o;
            s.resolving && ke(Te(i[n]));
            const a = Pt(s.canSeeViewProviders);
            s.resolving = !0;
            const c = s.injectImpl ? H(s.injectImpl) : null,
              u = lt(e, r, P.Default);
            ngDevMode &&
              y(
                u,
                !0,
                "Because flags do not contain `SkipSelf' we expect this to always succeed."
              );
            try {
              (o = e[n] = s.factory(void 0, i, e, r)),
                t.firstCreatePass &&
                  n >= r.directiveStart &&
                  (ngDevMode &&
                    (function (e) {
                      (void 0 !== e.type &&
                        null != e.selectors &&
                        void 0 !== e.inputs) ||
                        E(
                          "Expected a DirectiveDef/ComponentDef and this object does not seem to have the expected shape."
                        );
                    })(i[n]),
                  (function (e, t, n) {
                    ngDevMode && pe(n);
                    const {
                      ngOnChanges: r,
                      ngOnInit: o,
                      ngDoCheck: i,
                    } = t.type.prototype;
                    if (r) {
                      const r = Ie(t);
                      (n.preOrderHooks || (n.preOrderHooks = [])).push(e, r),
                        (
                          n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                        ).push(e, r);
                    }
                    o &&
                      (n.preOrderHooks || (n.preOrderHooks = [])).push(
                        0 - e,
                        o
                      ),
                      i &&
                        ((n.preOrderHooks || (n.preOrderHooks = [])).push(e, i),
                        (
                          n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                        ).push(e, i));
                  })(n, i[n], t));
            } finally {
              null !== c && H(c), Pt(a), (s.resolving = !1), gt();
            }
          }
          return o;
        }
        function Xt(e, t, n) {
          const r = 1 << e,
            o = 64 & e,
            i = 32 & e;
          let s;
          return (
            (s =
              128 & e
                ? o
                  ? i
                    ? n[t + 7]
                    : n[t + 6]
                  : i
                  ? n[t + 5]
                  : n[t + 4]
                : o
                ? i
                  ? n[t + 3]
                  : n[t + 2]
                : i
                ? n[t + 1]
                : n[t]),
            !!(s & r)
          );
        }
        function Yt(e, t) {
          return !(e & P.Self || (e & P.Host && t));
        }
        class Gt {
          constructor(e, t) {
            (this._tNode = e), (this._lView = t);
          }
          get(e, t) {
            return Wt(this._tNode, this._lView, e, void 0, t);
          }
        }
        const Jt = "__annotations__",
          en = "__parameters__",
          tn = "__prop__metadata__";
        function nn(e, t, n, r, o) {
          return L(() => {
            const i = rn(t);
            function s(...e) {
              if (this instanceof s) return i.call(this, ...e), this;
              const t = new s(...e);
              return function (n) {
                o && o(n, ...e);
                return (
                  (n.hasOwnProperty(Jt)
                    ? n[Jt]
                    : Object.defineProperty(n, Jt, { value: [] })[Jt]
                  ).push(t),
                  r && r(n),
                  n
                );
              };
            }
            return (
              n && (s.prototype = Object.create(n.prototype)),
              (s.prototype.ngMetadataName = e),
              (s.annotationCls = s),
              s
            );
          });
        }
        function rn(e) {
          return function (...t) {
            if (e) {
              const n = e(...t);
              for (const e in n) this[e] = n[e];
            }
          };
        }
        function on(e, t, n) {
          return L(() => {
            const r = rn(t);
            function o(...e) {
              if (this instanceof o) return r.apply(this, e), this;
              const t = new o(...e);
              return (n.annotation = t), n;
              function n(e, n, r) {
                const o = e.hasOwnProperty(en)
                  ? e[en]
                  : Object.defineProperty(e, en, { value: [] })[en];
                for (; o.length <= r; ) o.push(null);
                return (o[r] = o[r] || []).push(t), e;
              }
            }
            return (
              n && (o.prototype = Object.create(n.prototype)),
              (o.prototype.ngMetadataName = e),
              (o.annotationCls = o),
              o
            );
          });
        }
        function sn(e, t, n, r) {
          return L(() => {
            const o = rn(t);
            function i(...e) {
              if (this instanceof i) return o.apply(this, e), this;
              const t = new i(...e);
              return function (n, o) {
                const i = n.constructor,
                  s = i.hasOwnProperty(tn)
                    ? i[tn]
                    : Object.defineProperty(i, tn, { value: {} })[tn];
                (s[o] = (s.hasOwnProperty(o) && s[o]) || []),
                  s[o].unshift(t),
                  r && r(n, o, ...e);
              };
            }
            return (
              n && (i.prototype = Object.create(n.prototype)),
              (i.prototype.ngMetadataName = e),
              (i.annotationCls = i),
              i
            );
          });
        }
        on("Attribute", (e) => ({ attributeName: e }));
        class an {
          constructor(e, t) {
            (this._desc = e),
              (this.ngMetadataName = "InjectionToken"),
              (this.Éµprov = void 0),
              "number" == typeof t
                ? (("undefined" == typeof ngDevMode || ngDevMode) &&
                    x(t, 0, "Only negative numbers are supported here"),
                  (this.__NG_ELEMENT_ID__ = t))
                : void 0 !== t &&
                  (this.Éµprov = M({
                    token: this,
                    providedIn: t.providedIn || "root",
                    factory: t.factory,
                  }));
          }
          toString() {
            return "InjectionToken " + this._desc;
          }
        }
        new an("AnalyzeForEntryComponents");
        class cn {}
        sn(
          "ContentChildren",
          (e, t = {}) =>
            Object.assign(
              { selector: e, first: !1, isViewQuery: !1, descendants: !1 },
              t
            ),
          cn
        ),
          sn(
            "ContentChild",
            (e, t = {}) =>
              Object.assign(
                { selector: e, first: !0, isViewQuery: !1, descendants: !0 },
                t
              ),
            cn
          ),
          sn(
            "ViewChildren",
            (e, t = {}) =>
              Object.assign(
                { selector: e, first: !1, isViewQuery: !0, descendants: !0 },
                t
              ),
            cn
          ),
          sn(
            "ViewChild",
            (e, t) =>
              Object.assign(
                { selector: e, first: !0, isViewQuery: !0, descendants: !0 },
                t
              ),
            cn
          );
        var un, ln, dn;
        !(function (e) {
          (e[(e.Token = 0)] = "Token"),
            (e[(e.Attribute = 1)] = "Attribute"),
            (e[(e.ChangeDetectorRef = 2)] = "ChangeDetectorRef"),
            (e[(e.Invalid = 3)] = "Invalid");
        })(un || (un = {})),
          (function (e) {
            (e[(e.Directive = 0)] = "Directive"),
              (e[(e.Component = 1)] = "Component"),
              (e[(e.Injectable = 2)] = "Injectable"),
              (e[(e.Pipe = 3)] = "Pipe"),
              (e[(e.NgModule = 4)] = "NgModule");
          })(ln || (ln = {})),
          (function (e) {
            (e[(e.Emulated = 0)] = "Emulated"),
              (e[(e.None = 2)] = "None"),
              (e[(e.ShadowDom = 3)] = "ShadowDom");
          })(dn || (dn = {}));
        const fn = Function;
        function hn(e) {
          return "function" == typeof e;
        }
        function pn(e, t) {
          const n = [];
          for (let r = 0; r < e; r++) n.push(t);
          return n;
        }
        const gn =
            /^function\s+\S+\(\)\s*{[\s\S]+\.apply\(this,\s*(arguments|[^()]+\(arguments\))\)/,
          mn = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{/,
          vn =
            /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(/,
          yn =
            /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(\)\s*{\s*super\(\.\.\.arguments\)/;
        class bn {
          constructor(e) {
            this._reflect = e || U.Reflect;
          }
          isReflectionEnabled() {
            return !0;
          }
          factory(e) {
            return (...t) => new e(...t);
          }
          _zipTypesAndAnnotations(e, t) {
            let n;
            n = pn(void 0 === e ? t.length : e.length);
            for (let r = 0; r < n.length; r++)
              void 0 === e
                ? (n[r] = [])
                : e[r] && e[r] != Object
                ? (n[r] = [e[r]])
                : (n[r] = []),
                t && null != t[r] && (n[r] = n[r].concat(t[r]));
            return n;
          }
          _ownParameters(e, t) {
            if (
              (function (e) {
                return gn.test(e) || yn.test(e) || (mn.test(e) && !vn.test(e));
              })(e.toString())
            )
              return null;
            if (e.parameters && e.parameters !== t.parameters)
              return e.parameters;
            const n = e.ctorParameters;
            if (n && n !== t.ctorParameters) {
              const e = "function" == typeof n ? n() : n,
                t = e.map((e) => e && e.type),
                r = e.map((e) => e && wn(e.decorators));
              return this._zipTypesAndAnnotations(t, r);
            }
            const r = e.hasOwnProperty(en) && e[en],
              o =
                this._reflect &&
                this._reflect.getOwnMetadata &&
                this._reflect.getOwnMetadata("design:paramtypes", e);
            return o || r ? this._zipTypesAndAnnotations(o, r) : pn(e.length);
          }
          parameters(e) {
            if (!hn(e)) return [];
            const t = _n(e);
            let n = this._ownParameters(e, t);
            return n || t === Object || (n = this.parameters(t)), n || [];
          }
          _ownAnnotations(e, t) {
            if (e.annotations && e.annotations !== t.annotations) {
              let t = e.annotations;
              return (
                "function" == typeof t && t.annotations && (t = t.annotations),
                t
              );
            }
            return e.decorators && e.decorators !== t.decorators
              ? wn(e.decorators)
              : e.hasOwnProperty(Jt)
              ? e[Jt]
              : null;
          }
          annotations(e) {
            if (!hn(e)) return [];
            const t = _n(e),
              n = this._ownAnnotations(e, t) || [];
            return (t !== Object ? this.annotations(t) : []).concat(n);
          }
          _ownPropMetadata(e, t) {
            if (e.propMetadata && e.propMetadata !== t.propMetadata) {
              let t = e.propMetadata;
              return (
                "function" == typeof t &&
                  t.propMetadata &&
                  (t = t.propMetadata),
                t
              );
            }
            if (e.propDecorators && e.propDecorators !== t.propDecorators) {
              const t = e.propDecorators,
                n = {};
              return (
                Object.keys(t).forEach((e) => {
                  n[e] = wn(t[e]);
                }),
                n
              );
            }
            return e.hasOwnProperty(tn) ? e[tn] : null;
          }
          propMetadata(e) {
            if (!hn(e)) return {};
            const t = _n(e),
              n = {};
            if (t !== Object) {
              const e = this.propMetadata(t);
              Object.keys(e).forEach((t) => {
                n[t] = e[t];
              });
            }
            const r = this._ownPropMetadata(e, t);
            return (
              r &&
                Object.keys(r).forEach((e) => {
                  const t = [];
                  n.hasOwnProperty(e) && t.push(...n[e]),
                    t.push(...r[e]),
                    (n[e] = t);
                }),
              n
            );
          }
          ownPropMetadata(e) {
            return (hn(e) && this._ownPropMetadata(e, _n(e))) || {};
          }
          hasLifecycleHook(e, t) {
            return e instanceof fn && t in e.prototype;
          }
          guards(e) {
            return {};
          }
          getter(e) {
            return new Function("o", "return o." + e + ";");
          }
          setter(e) {
            return new Function("o", "v", "return o." + e + " = v;");
          }
          method(e) {
            return new Function(
              "o",
              "args",
              `if (!o.${e}) throw new Error('"${e}" is undefined');\n        return o.${e}.apply(o, args);`
            );
          }
          importUri(e) {
            return "object" == typeof e && e.filePath
              ? e.filePath
              : "./" + u(e);
          }
          resourceUri(e) {
            return "./" + u(e);
          }
          resolveIdentifier(e, t, n, r) {
            return r;
          }
          resolveEnum(e, t) {
            return e[t];
          }
        }
        function wn(e) {
          return e
            ? e.map(
                (e) => new (0, e.type.annotationCls)(...(e.args ? e.args : []))
              )
            : [];
        }
        function _n(e) {
          const t = e.prototype ? Object.getPrototypeOf(e.prototype) : null;
          return (t ? t.constructor : null) || Object;
        }
        const xn = on("Inject", (e) => ({ token: e })),
          Tn = on("Optional"),
          kn = on("Self"),
          Cn = on("SkipSelf");
        on("Host");
        new Map();
        new Set();
        const En = {},
          Sn = /\n/gm,
          In = "__source",
          Mn = c({ provide: String, useValue: c });
        let Dn = void 0;
        function An(e) {
          const t = Dn;
          return (Dn = e), t;
        }
        function Nn(e, t = P.Default) {
          if (void 0 === Dn)
            throw new Error(
              "inject() must be called from an injection context"
            );
          return null === Dn
            ? F(e, void 0, t)
            : Dn.get(e, t & P.Optional ? null : void 0, t);
        }
        function On(e, t = P.Default) {
          return (R || Nn)(h(e), t);
        }
        function jn(e) {
          const t = [];
          for (let n = 0; n < e.length; n++) {
            const r = h(e[n]);
            if (Array.isArray(r)) {
              if (0 === r.length)
                throw new Error("Arguments array must have arguments.");
              let e = void 0,
                n = P.Default;
              for (let t = 0; t < r.length; t++) {
                const o = r[t];
                o instanceof Tn || "Optional" === o.ngMetadataName || o === Tn
                  ? (n |= P.Optional)
                  : o instanceof Cn ||
                    "SkipSelf" === o.ngMetadataName ||
                    o === Cn
                  ? (n |= P.SkipSelf)
                  : o instanceof kn || "Self" === o.ngMetadataName || o === kn
                  ? (n |= P.Self)
                  : (e = o instanceof xn || o === xn ? o.token : o);
              }
              t.push(On(e, n));
            } else t.push(On(r));
          }
          return t;
        }
        function Pn(e, t, n, r) {
          const o = e.ngTempTokenPath;
          throw (
            (t[In] && o.unshift(t[In]),
            (e.message = Rn("\n" + e.message, o, n, r)),
            (e.ngTokenPath = o),
            (e.ngTempTokenPath = null),
            e)
          );
        }
        function Rn(e, t, n, r = null) {
          e =
            e && "\n" === e.charAt(0) && "Éµ" == e.charAt(1) ? e.substr(2) : e;
          let o = u(t);
          if (Array.isArray(t)) o = t.map(u).join(" -> ");
          else if ("object" == typeof t) {
            let e = [];
            for (let n in t)
              if (t.hasOwnProperty(n)) {
                let r = t[n];
                e.push(
                  n + ":" + ("string" == typeof r ? JSON.stringify(r) : u(r))
                );
              }
            o = `{${e.join(", ")}}`;
          }
          return `${n}${r ? "(" + r + ")" : ""}[${o}]: ${e.replace(
            Sn,
            "\n  "
          )}`;
        }
        let Hn;
        function Fn() {
          if (void 0 === Hn && ((Hn = null), U.trustedTypes))
            try {
              Hn = U.trustedTypes.createPolicy("angular", {
                createHTML: (e) => e,
                createScript: (e) => e,
                createScriptURL: (e) => e,
              });
            } catch (e) {}
          return Hn;
        }
        function Ln(e) {
          var t;
          return (
            (null === (t = Fn()) || void 0 === t
              ? void 0
              : t.createScript(e)) || e
          );
        }
        function Vn(e) {
          const t = {};
          for (const n of e.split(",")) t[n] = !0;
          return t;
        }
        function qn(...e) {
          const t = {};
          for (const n of e)
            for (const e in n) n.hasOwnProperty(e) && (t[e] = !0);
          return t;
        }
        const zn = Vn("area,br,col,hr,img,wbr"),
          Bn = Vn("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
          Wn = Vn("rp,rt"),
          $n = qn(Wn, Bn),
          Un = qn(
            Bn,
            Vn(
              "address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul"
            )
          ),
          Zn = qn(
            Wn,
            Vn(
              "a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video"
            )
          ),
          Qn =
            (qn(zn, Un, Zn, $n),
            Vn("background,cite,href,itemtype,longdesc,poster,src,xlink:href")),
          Kn = Vn("srcset"),
          Xn = Vn(
            "abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"
          ),
          Yn = Vn(
            "aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"
          );
        qn(Qn, Kn, Xn, Yn), Vn("script,style,template");
        var Gn;
        !(function (e) {
          (e[(e.NONE = 0)] = "NONE"),
            (e[(e.HTML = 1)] = "HTML"),
            (e[(e.STYLE = 2)] = "STYLE"),
            (e[(e.SCRIPT = 3)] = "SCRIPT"),
            (e[(e.URL = 4)] = "URL"),
            (e[(e.RESOURCE_URL = 5)] = "RESOURCE_URL");
        })(Gn || (Gn = {}));
        function Jn(e) {
          return e.ngDebugContext;
        }
        function er(e) {
          return e.ngOriginalError;
        }
        function tr(e, ...t) {
          e.error(...t);
        }
        class nr {
          constructor() {
            this._console = console;
          }
          handleError(e) {
            const t = this._findOriginalError(e),
              n = this._findContext(e),
              r = (function (e) {
                return e.ngErrorLogger || tr;
              })(e);
            r(this._console, "ERROR", e),
              t && r(this._console, "ORIGINAL ERROR", t),
              n && r(this._console, "ERROR CONTEXT", n);
          }
          _findContext(e) {
            return e ? (Jn(e) ? Jn(e) : this._findContext(er(e))) : null;
          }
          _findOriginalError(e) {
            let t = er(e);
            for (; t && er(t); ) t = er(t);
            return t;
          }
        }
        function rr(e) {
          if (!ngDevMode)
            throw new Error(
              "Looks like we are in 'prod mode', but we are creating a named Array type, which is wrong! Check your code"
            );
          try {
            return (function (...e) {
              if ("undefined" == typeof ngDevMode)
                throw new Error(
                  "newTrustedFunctionForDev should never be called in production"
                );
              if (!U.trustedTypes) return new Function(...e);
              const t = `(function anonymous(${e
                  .slice(0, -1)
                  .join(",")}\n) { ${e.pop().toString()}\n})`,
                n = U.eval(Ln(t));
              return (n.toString = () => t), n.bind(U);
            })(
              "Array",
              `return class ${e} extends Array{}`
            )(Array);
          } catch (e) {
            return Array;
          }
        }
        function or(e, t) {
          e.__ngContext__ = t;
        }
        const ir = (
          ("undefined" != typeof requestAnimationFrame &&
            requestAnimationFrame) ||
          setTimeout
        ).bind(U);
        var sr;
        let ar;
        function cr(e, t) {
          return ar(e, t);
        }
        !(function (e) {
          (e[(e.Important = 1)] = "Important"),
            (e[(e.DashCase = 2)] = "DashCase");
        })(sr || (sr = {}));
        function ur(e) {
          ngDevMode && he(e);
          const t = e[3];
          return oe(t) ? t[3] : t;
        }
        function lr(e) {
          return fr(e[13]);
        }
        function dr(e) {
          return fr(e[4]);
        }
        function fr(e) {
          for (; null !== e && !oe(e); ) e = e[4];
          return e;
        }
        function hr(e, t, n, r, o) {
          if (null != r) {
            let i,
              s = !1;
            oe(r)
              ? (i = r)
              : re(r) &&
                ((s = !0),
                ngDevMode &&
                  C(r[0], "HOST must be defined for a component LView"),
                (r = r[0]));
            const a = Le(r);
            ngDevMode && !He(t) && S(a),
              0 === e && null !== n
                ? null == o
                  ? br(t, n, a)
                  : yr(t, n, a, o || null, !0)
                : 1 === e && null !== n
                ? yr(t, n, a, o || null, !0)
                : 2 === e
                ? _r(t, a, s)
                : 3 === e &&
                  (ngDevMode && ngDevMode.rendererDestroyNode++,
                  t.destroyNode(a)),
              null != i &&
                (function (e, t, n, r, o) {
                  ngDevMode && de(n);
                  const i = n[7],
                    s = Le(n);
                  i !== s && hr(t, e, r, i, o);
                  for (let o = ne; o < n.length; o++) {
                    const s = n[o];
                    Tr(s[1], s, e, t, r, i);
                  }
                })(t, e, i, n, o);
          }
        }
        function pr(e, t, n) {
          return (
            ngDevMode && ngDevMode.rendererCreateElement++,
            He(e)
              ? e.createElement(t, n)
              : null === n
              ? e.createElement(t)
              : e.createElementNS(n, t)
          );
        }
        function gr(e, t) {
          ngDevMode && de(e),
            ngDevMode &&
              C(
                e[9],
                "A projected view should belong to a non-empty projected views collection"
              );
          const n = e[9],
            r = n.indexOf(t),
            o = t[3];
          ngDevMode && de(o),
            1024 & t[2] && ((t[2] &= -1025), Qe(o, -1)),
            n.splice(r, 1);
        }
        function mr(e, t) {
          if (!(256 & t[2])) {
            const n = t[11];
            He(n) && n.destroyNode && Tr(e, t, n, 3, null, null),
              (function (e) {
                let t = e[13];
                if (!t) return vr(e[1], e);
                for (; t; ) {
                  let n = null;
                  if (re(t)) n = t[13];
                  else {
                    ngDevMode && de(t);
                    const e = t[10];
                    e && (n = e);
                  }
                  if (!n) {
                    for (; t && !t[4] && t !== e; )
                      re(t) && vr(t[1], t), (t = t[3]);
                    null === t && (t = e),
                      re(t) && vr(t[1], t),
                      (n = t && t[4]);
                  }
                  t = n;
                }
              })(t);
          }
        }
        function vr(e, t) {
          if (!(256 & t[2])) {
            (t[2] &= -129),
              (t[2] |= 256),
              (function (e, t) {
                let n;
                if (null != e && null != (n = e.destroyHooks))
                  for (let e = 0; e < n.length; e += 2) {
                    const r = t[n[e]];
                    if (!(r instanceof Et)) {
                      const t = n[e + 1];
                      if (Array.isArray(t))
                        for (let e = 0; e < t.length; e += 2)
                          t[e + 1].call(r[t[e]]);
                      else t.call(r);
                    }
                  }
              })(e, t),
              (function (e, t) {
                const n = e.cleanup,
                  r = t[7];
                let o = -1;
                if (null !== n) {
                  for (let e = 0; e < n.length - 1; e += 2)
                    if ("string" == typeof n[e]) {
                      const i = n[e + 1],
                        s = "function" == typeof i ? i(t) : Le(t[i]),
                        a = r[(o = n[e + 2])],
                        c = n[e + 3];
                      "boolean" == typeof c
                        ? s.removeEventListener(n[e], a, c)
                        : c >= 0
                        ? r[(o = c)]()
                        : r[(o = -c)].unsubscribe(),
                        (e += 2);
                    } else {
                      const t = r[(o = n[e + 1])];
                      n[e].call(t);
                    }
                  if (null !== r)
                    for (let e = o + 1; e < r.length; e++) {
                      const t = r[e];
                      ngDevMode && v(t, "Expecting instance cleanup function."),
                        t();
                    }
                  t[7] = null;
                }
              })(e, t),
              1 === t[1].type &&
                He(t[11]) &&
                (ngDevMode && ngDevMode.rendererDestroy++, t[11].destroy());
            const n = t[17];
            if (null !== n && oe(t[3])) {
              n !== t[3] && gr(n, t);
              const r = t[19];
              null !== r && r.detachView(e);
            }
          }
        }
        function yr(e, t, n, r, o) {
          ngDevMode && ngDevMode.rendererInsertBefore++,
            He(e) ? e.insertBefore(t, n, r, o) : t.insertBefore(n, r, o);
        }
        function br(e, t, n) {
          ngDevMode && ngDevMode.rendererAppendChild++,
            ngDevMode && C(t, "parent node must be defined"),
            He(e) ? e.appendChild(t, n) : t.appendChild(n);
        }
        function wr(e, t) {
          return He(e) ? e.parentNode(t) : t.parentNode;
        }
        function _r(e, t, n) {
          ngDevMode && ngDevMode.rendererRemoveNode++;
          const r = wr(e, t);
          r &&
            (function (e, t, n, r) {
              He(e) ? e.removeChild(t, n, r) : t.removeChild(n);
            })(e, r, t, n);
        }
        function xr(e, t, n, r, o, i, s) {
          for (; null != n; ) {
            ngDevMode && ae(n, r), ngDevMode && It(n, 63);
            const a = r[n.index],
              c = n.type;
            if (
              (s && 0 === t && (a && or(Le(a), r), (n.flags |= 4)),
              64 != (64 & n.flags))
            )
              if (8 & c) xr(e, t, n.child, r, o, i, !1), hr(t, e, o, a, i);
              else if (32 & c) {
                const s = cr(n, r);
                let c;
                for (; (c = s()); ) hr(t, e, o, c, i);
                hr(t, e, o, a, i);
              } else
                16 & c
                  ? kr(e, t, r, n, o, i)
                  : (ngDevMode && It(n, 7), hr(t, e, o, a, i));
            n = s ? n.projectionNext : n.next;
          }
        }
        function Tr(e, t, n, r, o, i) {
          xr(n, r, e.firstChild, t, o, i, !1);
        }
        function kr(e, t, n, r, o, i) {
          const s = n[16],
            a = s[6];
          ngDevMode &&
            y(typeof r.projection, "number", "expecting projection index");
          const c = a.projection[r.projection];
          if (Array.isArray(c))
            for (let n = 0; n < c.length; n++) {
              hr(t, e, o, c[n], i);
            }
          else {
            xr(e, t, c, s[3], o, i, !0);
          }
        }
        function Cr(e, t, n) {
          ngDevMode && m(n, "'newValue' should be a string"),
            He(e) ? e.setAttribute(t, "style", n) : (t.style.cssText = n),
            ngDevMode && ngDevMode.rendererSetStyle++;
        }
        function Er(e, t, n) {
          ngDevMode && m(n, "'newValue' should be a string"),
            He(e)
              ? "" === n
                ? e.removeAttribute(t, "class")
                : e.setAttribute(t, "class", n)
              : (t.className = n),
            ngDevMode && ngDevMode.rendererSetClassName++;
        }
        function Sr(e) {
          return 0 == (1 & e);
        }
        function Ir(e, t) {
          return e ? ":not(" + t.trim() + ")" : t;
        }
        function Mr(e) {
          let t = e[0],
            n = 1,
            r = 2,
            o = "",
            i = !1;
          for (; n < e.length; ) {
            let s = e[n];
            if ("string" == typeof s)
              if (2 & r) {
                const t = e[++n];
                o += "[" + s + (t.length > 0 ? '="' + t + '"' : "") + "]";
              } else 8 & r ? (o += "." + s) : 4 & r && (o += " " + s);
            else
              "" === o || Sr(s) || ((t += Ir(i, o)), (o = "")),
                (r = s),
                (i = i || !Sr(r));
            n++;
          }
          return "" !== o && (t += Ir(i, o)), t;
        }
        const Dr =
          "undefined" == typeof ngDevMode || ngDevMode
            ? { __brand__: "NO_CHANGE" }
            : {};
        function Ar(e, t, n, r) {
          if (
            (ngDevMode &&
              (function (e, t) {
                const n = e[1];
                ve(ee, n.bindingStartIndex, t);
              })(t, n),
            !r)
          ) {
            if (3 == (3 & t[2])) {
              const r = e.preOrderCheckHooks;
              null !== r && wt(t, r, n);
            } else {
              const r = e.preOrderHooks;
              null !== r && _t(t, r, 0, n);
            }
          }
          yt(n);
        }
        function Nr(e) {
          return ngDevMode && g(e, "expected number"), (e >> 17) & 32767;
        }
        function Or(e) {
          return ngDevMode && g(e, "expected number"), 2 == (2 & e);
        }
        function jr(e) {
          return ngDevMode && g(e, "expected number"), (131068 & e) >> 2;
        }
        function Pr(e) {
          return ngDevMode && g(e, "expected number"), 1 == (1 & e);
        }
        function Rr(e, t) {
          if (!ngDevMode)
            throw new Error(
              "This method should be guarded with `ngDevMode` so that it can be tree shaken in production!"
            );
          Object.defineProperty(e, "debug", { value: t, enumerable: !1 });
        }
        const Hr = ("undefined" == typeof ngDevMode || !!ngDevMode) && Z();
        let Fr, Lr, Vr;
        function qr(e) {
          return (function (e, t) {
            switch (e) {
              case 0:
                return void 0 === Vr && (Vr = new (rr("LRootView"))()), Vr;
              case 1:
                void 0 === Fr && (Fr = new Map());
                let e = Fr.get(t);
                return (
                  void 0 === e &&
                    ((e = new (rr("LComponentView" + zr(t)))()), Fr.set(t, e)),
                  e
                );
              case 2:
                void 0 === Lr && (Lr = new Map());
                let n = Lr.get(t);
                return (
                  void 0 === n &&
                    ((n = new (rr("LEmbeddedView" + zr(t)))()), Lr.set(t, n)),
                  n
                );
            }
            throw new Error("unreachable code");
          })(e.type, e.template && e.template.name).concat(e.blueprint);
        }
        function zr(e) {
          if (null == e) return "";
          const t = e.lastIndexOf("_Template");
          return "_" + (-1 === t ? e : e.substr(0, t));
        }
        const Br = class {
          constructor(
            e,
            t,
            n,
            r,
            o,
            i,
            s,
            a,
            c,
            u,
            l,
            d,
            f,
            h,
            p,
            g,
            m,
            v,
            y,
            b,
            w,
            _,
            x,
            T,
            k,
            C,
            E,
            S,
            I,
            M,
            D,
            A
          ) {
            (this.tView_ = e),
              (this.type = t),
              (this.index = n),
              (this.insertBeforeIndex = r),
              (this.injectorIndex = o),
              (this.directiveStart = i),
              (this.directiveEnd = s),
              (this.directiveStylingLast = a),
              (this.propertyBindings = c),
              (this.flags = u),
              (this.providerIndexes = l),
              (this.value = d),
              (this.attrs = f),
              (this.mergedAttrs = h),
              (this.localNames = p),
              (this.initialInputs = g),
              (this.inputs = m),
              (this.outputs = v),
              (this.tViews = y),
              (this.next = b),
              (this.projectionNext = w),
              (this.child = _),
              (this.parent = x),
              (this.projection = T),
              (this.styles = k),
              (this.stylesWithoutHost = C),
              (this.residualStyles = E),
              (this.classes = S),
              (this.classesWithoutHost = I),
              (this.residualClasses = M),
              (this.classBindings = D),
              (this.styleBindings = A);
          }
          debugNodeInjectorPath(e) {
            const t = [];
            let n = Lt(this, e);
            for (ngDevMode && ye(e, n); -1 !== n; ) {
              const r = e[1].data[n + 8];
              t.push(oo(r, e));
              const o = e[n + 8];
              o === Ct ? (n = -1) : ((n = Nt(o)), (e = Ot(o, e)));
            }
            return t;
          }
          get type_() {
            return St(this.type) || `TNodeType.?${this.type}?`;
          }
          get flags_() {
            const e = [];
            return (
              16 & this.flags && e.push("TNodeFlags.hasClassInput"),
              8 & this.flags && e.push("TNodeFlags.hasContentQuery"),
              32 & this.flags && e.push("TNodeFlags.hasStyleInput"),
              128 & this.flags && e.push("TNodeFlags.hasHostBindings"),
              2 & this.flags && e.push("TNodeFlags.isComponentHost"),
              1 & this.flags && e.push("TNodeFlags.isDirectiveHost"),
              64 & this.flags && e.push("TNodeFlags.isDetached"),
              4 & this.flags && e.push("TNodeFlags.isProjected"),
              e.join("|")
            );
          }
          get template_() {
            if (1 & this.type) return this.value;
            const e = [],
              t = ("string" == typeof this.value && this.value) || this.type_;
            if (
              (e.push("<", t),
              this.flags && e.push(" ", this.flags_),
              this.attrs)
            )
              for (let t = 0; t < this.attrs.length; ) {
                const n = this.attrs[t++];
                if ("number" == typeof n) break;
                const r = this.attrs[t++];
                e.push(" ", n, '="', r, '"');
              }
            return (
              e.push(">"), $r(this.child, e), e.push("</", t, ">"), e.join("")
            );
          }
          get styleBindings_() {
            return Wr(this, !1);
          }
          get classBindings_() {
            return Wr(this, !0);
          }
          get providerIndexStart_() {
            return 1048575 & this.providerIndexes;
          }
          get providerIndexEnd_() {
            return this.providerIndexStart_ + (this.providerIndexes >>> 20);
          }
        };
        function Wr(e, t) {
          const n = e.tView_.data,
            r = [],
            o = t ? e.classBindings : e.styleBindings,
            i = Nr(o),
            s = jr(o);
          let a = 0 !== s,
            c = a ? s : i;
          for (; 0 !== c; ) {
            const e = n[c],
              t = n[c + 1];
            r.unshift({
              key: e,
              index: c,
              isTemplate: a,
              prevDuplicate: Or(t),
              nextDuplicate: Pr(t),
              nextIndex: jr(t),
              prevIndex: Nr(t),
            }),
              c === i && (a = !1),
              (c = Nr(t));
          }
          return r.push((t ? e.residualClasses : e.residualStyles) || null), r;
        }
        function $r(e, t) {
          for (; e; ) t.push(e.template_), (e = e.next);
        }
        const Ur = (Hr && rr("TViewData")) || null;
        let Zr;
        const Qr = (Hr && rr("LViewBlueprint")) || null,
          Kr =
            (Hr && rr("MatchesArray"), (Hr && rr("TViewComponents")) || null),
          Xr =
            (Hr && rr("TNodeLocalNames"),
            Hr && rr("TNodeInitialInputs"),
            Hr && rr("TNodeInitialData"),
            (Hr && rr("LCleanup")) || null),
          Yr = (Hr && rr("TCleanup")) || null;
        function Gr(e) {
          if (e) {
            const t = e.debug;
            return C(t, "Object does not have a debug representation."), t;
          }
          return e;
        }
        function Jr(e, t = !1) {
          const n = Le(e);
          if (n)
            switch (n.nodeType) {
              case Node.TEXT_NODE:
                return n.textContent;
              case Node.COMMENT_NODE:
                return `\x3c!--${n.textContent}--\x3e`;
              case Node.ELEMENT_NODE:
                const e = n.outerHTML;
                if (t) return e;
                {
                  const t = ">" + n.innerHTML + "<";
                  return e.split(t)[0] + ">";
                }
            }
          return null;
        }
        class eo {
          constructor(e) {
            this._raw_lView = e;
          }
          get flags() {
            const e = this._raw_lView[2];
            return {
              __raw__flags__: e,
              initPhaseState: 3 & e,
              creationMode: !!(4 & e),
              firstViewPass: !!(8 & e),
              checkAlways: !!(16 & e),
              dirty: !!(64 & e),
              attached: !!(128 & e),
              destroyed: !!(256 & e),
              isRoot: !!(512 & e),
              indexWithinInitPhase: e >> 11,
            };
          }
          get parent() {
            return Gr(this._raw_lView[3]);
          }
          get hostHTML() {
            return Jr(this._raw_lView[0], !0);
          }
          get html() {
            return (this.nodes || []).map(to).join("");
          }
          get context() {
            return this._raw_lView[8];
          }
          get nodes() {
            const e = this._raw_lView;
            return ro(e[1].firstChild, e);
          }
          get template() {
            return this.tView.template_;
          }
          get tView() {
            return this._raw_lView[1];
          }
          get cleanup() {
            return this._raw_lView[7];
          }
          get injector() {
            return this._raw_lView[9];
          }
          get rendererFactory() {
            return this._raw_lView[10];
          }
          get renderer() {
            return this._raw_lView[11];
          }
          get sanitizer() {
            return this._raw_lView[12];
          }
          get childHead() {
            return Gr(this._raw_lView[13]);
          }
          get next() {
            return Gr(this._raw_lView[4]);
          }
          get childTail() {
            return Gr(this._raw_lView[14]);
          }
          get declarationView() {
            return Gr(this._raw_lView[15]);
          }
          get queries() {
            return this._raw_lView[19];
          }
          get tHost() {
            return this._raw_lView[6];
          }
          get decls() {
            return no(
              this.tView,
              this._raw_lView,
              ee,
              this.tView.bindingStartIndex
            );
          }
          get vars() {
            return no(
              this.tView,
              this._raw_lView,
              this.tView.bindingStartIndex,
              this.tView.expandoStartIndex
            );
          }
          get expando() {
            return no(
              this.tView,
              this._raw_lView,
              this.tView.expandoStartIndex,
              this._raw_lView.length
            );
          }
          get childViews() {
            const e = [];
            let t = this.childHead;
            for (; t; ) e.push(t), (t = t.next);
            return e;
          }
        }
        function to(e) {
          if ("ElementContainer" === e.type)
            return (e.children || []).map(to).join("");
          if ("IcuContainer" === e.type) throw new Error("Not implemented");
          return Jr(e.native, !0) || "";
        }
        function no(e, t, n, r) {
          let o = [];
          for (let i = n; i < r; i++)
            o.push({ index: i, t: e.data[i], l: t[i] });
          return { start: n, end: r, length: r - n, content: o };
        }
        function ro(e, t) {
          if (e) {
            const n = [];
            let r = e;
            for (; r; ) n.push(oo(r, t)), (r = r.next);
            return n;
          }
          return [];
        }
        function oo(e, t) {
          const n = Le(t[e.index]),
            r = [],
            o = [],
            i = t[1];
          for (let n = e.directiveStart; n < e.directiveEnd; n++) {
            const e = i.data[n];
            r.push(e.type), o.push(t[n]);
          }
          return {
            html: Jr(n),
            type: St(e.type),
            native: n,
            children: ro(e.child, t),
            factories: r,
            instances: o,
            injector: io(e, i, t),
          };
        }
        function io(e, t, n) {
          const r = [];
          for (let n = e.providerIndexStart_; n < e.providerIndexEnd_; n++)
            r.push(t.data[n]);
          const o = [];
          for (let n = e.providerIndexEnd_; n < e.directiveEnd; n++)
            o.push(t.data[n]);
          return {
            bloom: ao(n, e.injectorIndex),
            cumulativeBloom: ao(t.data, e.injectorIndex),
            providers: o,
            viewProviders: r,
            parentInjectorIndex: n[e.providerIndexStart_ - 1],
          };
        }
        function so(e, t) {
          const n = e[t];
          if ("number" != typeof n) return "????????";
          const r = "00000000" + n.toString(2);
          return r.substring(r.length - 8);
        }
        function ao(e, t) {
          return `${so(e, t + 7)}_${so(e, t + 6)}_${so(e, t + 5)}_${so(
            e,
            t + 4
          )}_${so(e, t + 3)}_${so(e, t + 2)}_${so(e, t + 1)}_${so(e, t + 0)}`;
        }
        const co = Promise.resolve(null);
        function uo(e, t) {
          const n = e.contentQueries;
          if (null !== n)
            for (let r = 0; r < n.length; r += 2) {
              const o = n[r],
                i = n[r + 1];
              if (-1 !== i) {
                const n = e.data[i];
                ngDevMode && C(n, "DirectiveDef not found."),
                  ngDevMode &&
                    C(
                      n.contentQueries,
                      "contentQueries function should be defined"
                    ),
                  ct(o),
                  n.contentQueries(2, t[i], i);
              }
            }
        }
        function lo(e, t, n, r, o, i, s, a, c, u) {
          const l = ngDevMode ? qr(t) : t.blueprint.slice();
          return (
            (l[0] = o),
            (l[2] = 140 | r),
            Ze(l),
            ngDevMode && t.declTNode && e && ae(t.declTNode, e),
            (l[3] = l[15] = e),
            (l[8] = n),
            (l[10] = s || (e && e[10])),
            ngDevMode && C(l[10], "RendererFactory is required"),
            (l[11] = a || (e && e[11])),
            ngDevMode && C(l[11], "Renderer is required"),
            (l[12] = c || (e && e[12]) || null),
            (l[9] = u || (e && e[9]) || null),
            (l[6] = i),
            ngDevMode &&
              y(
                2 != t.type || null !== e,
                !0,
                "Embedded views must have parentLView"
              ),
            (l[16] = 2 == t.type ? e[16] : l),
            ngDevMode &&
              (function (e) {
                Rr(e, new eo(e));
              })(l),
            l
          );
        }
        function fo(e, t, n, r, o) {
          ngDevMode &&
            0 !== t &&
            k(t, ee, "TNodes can't be in the LView header."),
            ngDevMode &&
              (function (e) {
                2 !== e &&
                  1 !== e &&
                  4 !== e &&
                  8 !== e &&
                  32 !== e &&
                  16 !== e &&
                  64 !== e &&
                  E(
                    `Expected TNodeType to have only a single type selected, but got ${St(
                      e
                    )}.`
                  );
              })(n);
          let i = e.data[t];
          if (null === i)
            (i = ho(e, t, n, r, o)), Ke.lFrame.inI18n && (i.flags |= 64);
          else if (64 & i.type) {
            (i.type = n), (i.value = r), (i.attrs = o);
            const s = et();
            (i.injectorIndex = null === s ? -1 : s.injectorIndex),
              ngDevMode && ce(i, e),
              ngDevMode && y(t, i.index, "Expecting same index");
          }
          return tt(i, !0), i;
        }
        function ho(e, t, n, r, o) {
          const i = Je(),
            s = nt(),
            a = s ? i : i && i.parent,
            c = (e.data[t] = (function (e, t, n, r, o, i) {
              ngDevMode &&
                0 !== r &&
                k(r, ee, "TNodes can't be in the LView header."),
                ngDevMode &&
                  _(i, void 0, "'undefined' is not valid value for 'attrs'"),
                ngDevMode && ngDevMode.tNode++,
                ngDevMode && t && ce(t, e);
              let s = t ? t.injectorIndex : -1;
              const a = ngDevMode
                ? new Br(
                    e,
                    n,
                    r,
                    null,
                    s,
                    -1,
                    -1,
                    -1,
                    null,
                    0,
                    0,
                    o,
                    i,
                    null,
                    null,
                    void 0,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    t,
                    null,
                    null,
                    null,
                    void 0,
                    null,
                    null,
                    void 0,
                    0,
                    0
                  )
                : {
                    type: n,
                    index: r,
                    insertBeforeIndex: null,
                    injectorIndex: s,
                    directiveStart: -1,
                    directiveEnd: -1,
                    directiveStylingLast: -1,
                    propertyBindings: null,
                    flags: 0,
                    providerIndexes: 0,
                    value: o,
                    attrs: i,
                    mergedAttrs: null,
                    localNames: null,
                    initialInputs: void 0,
                    inputs: null,
                    outputs: null,
                    tViews: null,
                    next: null,
                    projectionNext: null,
                    child: null,
                    parent: t,
                    projection: null,
                    styles: null,
                    stylesWithoutHost: null,
                    residualStyles: void 0,
                    classes: null,
                    classesWithoutHost: null,
                    residualClasses: void 0,
                    classBindings: 0,
                    styleBindings: 0,
                  };
              ngDevMode && Object.seal(a);
              return a;
            })(e, a, n, t, r, o));
          return (
            null === e.firstChild && (e.firstChild = c),
            null !== i &&
              (s
                ? null == i.child && null !== c.parent && (i.child = c)
                : null === i.next && (i.next = c)),
            c
          );
        }
        function po(e, t, n, r) {
          if (0 === n) return -1;
          ngDevMode &&
            (pe(e),
            w(e, t[1], "`LView` must be associated with `TView`!"),
            y(
              e.data.length,
              t.length,
              "Expecting LView to be same size as TView"
            ),
            y(
              e.data.length,
              e.blueprint.length,
              "Expecting Blueprint to be same size as TView"
            ),
            ge(e));
          const o = t.length;
          for (let o = 0; o < n; o++)
            t.push(r), e.blueprint.push(r), e.data.push(null);
          return o;
        }
        function go(e, t, n) {
          ngDevMode && y($e(t), !0, "Should be run in creation mode"), dt(t);
          try {
            const r = e.viewQuery;
            null !== r && Ho(1, r, n);
            const o = e.template;
            null !== o && yo(e, t, o, 1, n),
              e.firstCreatePass && (e.firstCreatePass = !1),
              e.staticContentQueries && uo(e, t),
              e.staticViewQueries && Ho(2, e.viewQuery, n);
            const i = e.components;
            null !== i &&
              (function (e, t) {
                for (let n = 0; n < t.length; n++) Ao(e, t[n]);
              })(t, i);
          } catch (t) {
            throw (e.firstCreatePass && (e.incompleteFirstPass = !0), t);
          } finally {
            (t[2] &= -5), mt();
          }
        }
        function mo(e, t, n, r) {
          ngDevMode && y($e(t), !1, "Should be run in update mode");
          const o = t[2];
          if (256 == (256 & o)) return;
          dt(t);
          const i = rt();
          try {
            Ze(t), it(e.bindingStartIndex), null !== n && yo(e, t, n, 2, r);
            const s = 3 == (3 & o);
            if (!i)
              if (s) {
                const n = e.preOrderCheckHooks;
                null !== n && wt(t, n, null);
              } else {
                const n = e.preOrderHooks;
                null !== n && _t(t, n, 0, null), xt(t, 0);
              }
            if (
              ((function (e) {
                for (let t = lr(e); null !== t; t = dr(t)) {
                  if (!t[2]) continue;
                  const e = t[9];
                  ngDevMode &&
                    C(e, "Transplanted View flags set but missing MOVED_VIEWS");
                  for (let t = 0; t < e.length; t++) {
                    const n = e[t],
                      r = n[3];
                    ngDevMode && de(r),
                      0 == (1024 & n[2]) && Qe(r, 1),
                      (n[2] |= 1024);
                  }
                }
              })(t),
              (function (e) {
                for (let t = lr(e); null !== t; t = dr(t))
                  for (let e = ne; e < t.length; e++) {
                    const n = t[e],
                      r = n[1];
                    ngDevMode && C(r, "TView must be allocated"),
                      Ue(n) && mo(r, n, r.template, n[8]);
                  }
              })(t),
              null !== e.contentQueries && uo(e, t),
              !i)
            )
              if (s) {
                const n = e.contentCheckHooks;
                null !== n && wt(t, n);
              } else {
                const n = e.contentHooks;
                null !== n && _t(t, n, 1), xt(t, 1);
              }
            !(function (e, t) {
              const n = e.hostBindingOpCodes;
              if (null !== n)
                try {
                  for (let e = 0; e < n.length; e++) {
                    const r = n[e];
                    if (r < 0) yt(~r);
                    else {
                      const o = r,
                        i = n[++e],
                        s = n[++e];
                      st(i, o), s(2, t[o]);
                    }
                  }
                } finally {
                  yt(-1);
                }
            })(e, t);
            const a = e.components;
            null !== a &&
              (function (e, t) {
                for (let n = 0; n < t.length; n++) Mo(e, t[n]);
              })(t, a);
            const c = e.viewQuery;
            if ((null !== c && Ho(2, c, r), !i))
              if (s) {
                const n = e.viewCheckHooks;
                null !== n && wt(t, n);
              } else {
                const n = e.viewHooks;
                null !== n && _t(t, n, 2), xt(t, 2);
              }
            !0 === e.firstUpdatePass && (e.firstUpdatePass = !1),
              i || (t[2] &= -73),
              1024 & t[2] && ((t[2] &= -1025), Qe(t[3], -1));
          } finally {
            mt();
          }
        }
        function vo(e, t, n, r) {
          const o = t[10],
            i = !rt(),
            s = $e(t);
          try {
            i && !s && o.begin && o.begin(), s && go(e, t, r), mo(e, t, n, r);
          } finally {
            i && !s && o.end && o.end();
          }
        }
        function yo(e, t, n, r, o) {
          const i = vt();
          try {
            yt(-1), 2 & r && t.length > ee && Ar(e, t, ee, rt()), n(r, o);
          } finally {
            yt(i);
          }
        }
        function bo(e) {
          const t = e.tView;
          if (null === t || t.incompleteFirstPass) {
            const t = null;
            return (e.tView = wo(
              1,
              t,
              e.template,
              e.decls,
              e.vars,
              e.directiveDefs,
              e.pipeDefs,
              e.viewQuery,
              e.schemas,
              e.consts
            ));
          }
          return t;
        }
        function wo(e, t, n, r, o, i, s, a, c, u) {
          ngDevMode && ngDevMode.tView++;
          const l = ee + r,
            d = l + o,
            f = (function (e, t) {
              const n = ngDevMode ? new Qr() : [];
              for (let r = 0; r < t; r++) n.push(r < e ? null : Dr);
              return n;
            })(l, d),
            h = "function" == typeof u ? u() : u,
            p = (f[1] = ngDevMode
              ? new (class {
                  constructor(
                    e,
                    t,
                    n,
                    r,
                    o,
                    i,
                    s,
                    a,
                    c,
                    u,
                    l,
                    d,
                    f,
                    h,
                    p,
                    g,
                    m,
                    v,
                    y,
                    b,
                    w,
                    _,
                    x,
                    T,
                    k,
                    C,
                    E,
                    S,
                    I,
                    M,
                    D,
                    A
                  ) {
                    (this.type = e),
                      (this.blueprint = t),
                      (this.template = n),
                      (this.queries = r),
                      (this.viewQuery = o),
                      (this.declTNode = i),
                      (this.data = s),
                      (this.bindingStartIndex = a),
                      (this.expandoStartIndex = c),
                      (this.hostBindingOpCodes = u),
                      (this.firstCreatePass = l),
                      (this.firstUpdatePass = d),
                      (this.staticViewQueries = f),
                      (this.staticContentQueries = h),
                      (this.preOrderHooks = p),
                      (this.preOrderCheckHooks = g),
                      (this.contentHooks = m),
                      (this.contentCheckHooks = v),
                      (this.viewHooks = y),
                      (this.viewCheckHooks = b),
                      (this.destroyHooks = w),
                      (this.cleanup = _),
                      (this.contentQueries = x),
                      (this.components = T),
                      (this.directiveRegistry = k),
                      (this.pipeRegistry = C),
                      (this.firstChild = E),
                      (this.schemas = S),
                      (this.consts = I),
                      (this.incompleteFirstPass = M),
                      (this._decls = D),
                      (this._vars = A);
                  }
                  get template_() {
                    const e = [];
                    return $r(this.firstChild, e), e.join("");
                  }
                  get type_() {
                    return te[this.type] || `TViewType.?${this.type}?`;
                  }
                })(
                  e,
                  f,
                  n,
                  null,
                  a,
                  t,
                  ((g = f),
                  void 0 === Zr && (Zr = new Ur()),
                  Zr.concat(g)).fill(null, l),
                  l,
                  d,
                  null,
                  !0,
                  !0,
                  !1,
                  !1,
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  "function" == typeof i ? i() : i,
                  "function" == typeof s ? s() : s,
                  null,
                  c,
                  h,
                  !1,
                  r,
                  o
                )
              : {
                  type: e,
                  blueprint: f,
                  template: n,
                  queries: null,
                  viewQuery: a,
                  declTNode: t,
                  data: f.slice().fill(null, l),
                  bindingStartIndex: l,
                  expandoStartIndex: d,
                  hostBindingOpCodes: null,
                  firstCreatePass: !0,
                  firstUpdatePass: !0,
                  staticViewQueries: !1,
                  staticContentQueries: !1,
                  preOrderHooks: null,
                  preOrderCheckHooks: null,
                  contentHooks: null,
                  contentCheckHooks: null,
                  viewHooks: null,
                  viewCheckHooks: null,
                  destroyHooks: null,
                  cleanup: null,
                  contentQueries: null,
                  components: null,
                  directiveRegistry: "function" == typeof i ? i() : i,
                  pipeRegistry: "function" == typeof s ? s() : s,
                  firstChild: null,
                  schemas: c,
                  consts: h,
                  incompleteFirstPass: !1,
                });
          var g;
          return ngDevMode && Object.seal(p), p;
        }
        function _o(e, t) {
          return new Error(`Renderer: ${e} [${Te(t)}]`);
        }
        function xo(e, t, n) {
          if (He(e)) {
            const r = n === z.ShadowDom;
            return e.selectRootElement(t, r);
          }
          let r = "string" == typeof t ? e.querySelector(t) : t;
          return (
            ngDevMode &&
              (function (e, t) {
                if (!e)
                  throw _o(
                    "string" == typeof t
                      ? "Host node with selector not found:"
                      : "Host node is required:",
                    t
                  );
              })(r, t),
            (r.textContent = ""),
            r
          );
        }
        function To(e, t, n, r) {
          const o = Lo(t);
          null === n
            ? (ngDevMode && Object.freeze(Vo(e)), o.push(r))
            : (o.push(n), e.firstCreatePass && Vo(e).push(r, o.length - 1));
        }
        function ko(e, t, n, r, o, i) {
          ngDevMode && pe(e);
          const s = i.hostBindings;
          if (s) {
            let n = e.hostBindingOpCodes;
            null === n && (n = e.hostBindingOpCodes = []);
            const i = ~t.index;
            (function (e) {
              let t = e.length;
              for (; t > 0; ) {
                const n = e[--t];
                if ("number" == typeof n && n < 0) return n;
              }
              return 0;
            })(n) != i && n.push(i),
              n.push(r, o, s);
          }
        }
        function Co(e, t) {
          null !== e.hostBindings && e.hostBindings(1, t);
        }
        function Eo(e, t) {
          ngDevMode && pe(e),
            (t.flags |= 2),
            (e.components || (e.components = ngDevMode ? new Kr() : [])).push(
              t.index
            );
        }
        function So(e, t, n) {
          ngDevMode &&
            b(
              n,
              e.directiveEnd - e.directiveStart,
              "Reached the max number of directives"
            ),
            (e.flags |= 1),
            (e.directiveStart = t),
            (e.directiveEnd = t + n),
            (e.providerIndexes = t);
        }
        function Io(e, t, n, r, o) {
          ngDevMode && k(r, ee, "Must be in Expando section"), (e.data[r] = o);
          const i = o.factory || (o.factory = be(o.type, !0)),
            s = new Et(i, se(o), null);
          (e.blueprint[r] = s),
            (n[r] = s),
            ko(e, t, 0, r, po(e, n, o.hostVars, Dr), o);
        }
        ("undefined" == typeof ngDevMode || ngDevMode) &&
          Z() &&
          rr("LContainer");
        function Mo(e, t) {
          ngDevMode && y($e(e), !1, "Should be run in update mode");
          const n = ze(t, e);
          if (Ue(n)) {
            const e = n[1];
            80 & n[2] ? mo(e, n, e.template, n[8]) : n[5] > 0 && Do(n);
          }
        }
        function Do(e) {
          for (let t = lr(e); null !== t; t = dr(t))
            for (let e = ne; e < t.length; e++) {
              const n = t[e];
              if (1024 & n[2]) {
                const e = n[1];
                ngDevMode && C(e, "TView must be allocated"),
                  mo(e, n, e.template, n[8]);
              } else n[5] > 0 && Do(n);
            }
          const t = e[1].components;
          if (null !== t)
            for (let n = 0; n < t.length; n++) {
              const r = ze(t[n], e);
              Ue(r) && r[5] > 0 && Do(r);
            }
        }
        function Ao(e, t) {
          ngDevMode && y($e(e), !0, "Should be run in creation mode");
          const n = ze(t, e),
            r = n[1];
          !(function (e, t) {
            for (let n = t.length; n < e.blueprint.length; n++)
              t.push(e.blueprint[n]);
          })(r, n),
            go(r, n, n[8]);
        }
        function No(e, t) {
          return e[13] ? (e[14][4] = t) : (e[13] = t), (e[14] = t), t;
        }
        function Oo(e) {
          for (; e; ) {
            e[2] |= 64;
            const t = ur(e);
            if (0 != (512 & e[2]) && !t) return e;
            e = t;
          }
          return null;
        }
        function jo(e) {
          for (let t = 0; t < e.components.length; t++) {
            const n = e.components[t],
              r = We(n),
              o = r[1];
            vo(o, r, o.template, n);
          }
        }
        function Po(e, t, n) {
          const r = t[10];
          r.begin && r.begin();
          try {
            mo(e, t, e.template, n);
          } catch (e) {
            throw (qo(t, e), e);
          } finally {
            r.end && r.end();
          }
        }
        function Ro(e) {
          jo(e[8]);
        }
        function Ho(e, t, n) {
          ngDevMode &&
            C(t, "View queries function to execute must be defined."),
            ct(0),
            t(e, n);
        }
        const Fo = co;
        function Lo(e) {
          return e[7] || (e[7] = ngDevMode ? new Xr() : []);
        }
        function Vo(e) {
          return e.cleanup || (e.cleanup = ngDevMode ? new Yr() : []);
        }
        function qo(e, t) {
          const n = e[9],
            r = n ? n.get(nr, null) : null;
          r && r.handleError(t);
        }
        function zo(e, t, n) {
          ngDevMode &&
            pe(Ye(), "Expecting to be called in first template pass only");
          let r = n ? e.styles : null,
            o = n ? e.classes : null,
            i = 0;
          if (null !== t)
            for (let e = 0; e < t.length; e++) {
              const n = t[e];
              if ("number" == typeof n) i = n;
              else if (1 == i) o = l(o, n);
              else if (2 == i) {
                r = l(r, n + ": " + t[++e] + ";");
              }
            }
          n ? (e.styles = r) : (e.stylesWithoutHost = r),
            n ? (e.classes = o) : (e.classesWithoutHost = o);
        }
        const Bo = new an("INJECTOR", -1);
        class Wo {
          get(e, t = En) {
            if (t === En) {
              const t = new Error(
                `NullInjectorError: No provider for ${u(e)}!`
              );
              throw ((t.name = "NullInjectorError"), t);
            }
            return t;
          }
        }
        const $o = new an("Set Injector scope.");
        const Uo = function (e, t, n) {
          return new Go(e, t, n);
        };
        class Zo {
          static create(e, t) {
            return Array.isArray(e)
              ? Uo(e, t, "")
              : Uo(e.providers, e.parent, e.name || "");
          }
        }
        (Zo.THROW_IF_NOT_FOUND = En),
          (Zo.NULL = new Wo()),
          (Zo.Éµprov = M({
            token: Zo,
            providedIn: "any",
            factory: () => On(Bo),
          })),
          (Zo.__NG_ELEMENT_ID__ = -1);
        const Qo = function (e) {
            return e;
          },
          Ko = [],
          Xo = Qo,
          Yo = function () {
            return Array.prototype.slice.call(arguments);
          };
        class Go {
          constructor(e, t = Zo.NULL, n = null) {
            (this.parent = t), (this.source = n);
            const r = (this._records = new Map());
            r.set(Zo, { token: Zo, fn: Qo, deps: Ko, value: this, useNew: !1 }),
              r.set(Bo, {
                token: Bo,
                fn: Qo,
                deps: Ko,
                value: this,
                useNew: !1,
              }),
              (this.scope = ti(r, e));
          }
          get(e, t, n = P.Default) {
            const r = this._records;
            let o = r.get(e);
            if (void 0 === o) {
              const t = A(e);
              if (t) {
                const n = t && t.providedIn;
                ("any" === n || (null != n && n === this.scope)) &&
                  r.set(
                    e,
                    (o = Jo({ provide: e, useFactory: t.factory, deps: Ko }))
                  );
              }
              void 0 === o && r.set(e, null);
            }
            let i = An(this);
            try {
              return ni(e, o, r, this.parent, t, n);
            } catch (t) {
              return Pn(t, e, "StaticInjectorError", this.source);
            } finally {
              An(i);
            }
          }
          toString() {
            const e = [];
            return (
              this._records.forEach((t, n) => e.push(u(n))),
              `StaticInjector[${e.join(", ")}]`
            );
          }
        }
        function Jo(e) {
          const t = (function (e) {
            let t = Ko;
            const n = e.deps;
            if (n && n.length) {
              t = [];
              for (let e = 0; e < n.length; e++) {
                let r = 6,
                  o = h(n[e]);
                if (Array.isArray(o))
                  for (let e = 0, t = o; e < t.length; e++) {
                    const n = t[e];
                    n instanceof Tn || n == Tn
                      ? (r |= 1)
                      : n instanceof Cn || n == Cn
                      ? (r &= -3)
                      : n instanceof kn || n == kn
                      ? (r &= -5)
                      : (o = n instanceof xn ? n.token : h(n));
                  }
                t.push({ token: o, options: r });
              }
            } else if (e.useExisting) {
              t = [{ token: h(e.useExisting), options: 6 }];
            } else if (!n && !(Mn in e)) throw ri("'deps' required", e);
            return t;
          })(e);
          let n = Qo,
            r = Ko,
            o = !1,
            i = h(e.provide);
          if (Mn in e) r = e.useValue;
          else if (e.useFactory) n = e.useFactory;
          else if (e.useExisting);
          else if (e.useClass) (o = !0), (n = h(e.useClass));
          else {
            if ("function" != typeof i)
              throw ri(
                "StaticProvider does not have [useValue|useFactory|useExisting|useClass] or [provide] is not newable",
                e
              );
            (o = !0), (n = i);
          }
          return { deps: t, fn: n, useNew: o, value: r };
        }
        function ei(e) {
          return ri("Cannot mix multi providers and regular providers", e);
        }
        function ti(e, t) {
          let n = null;
          if (t)
            if (((t = h(t)), Array.isArray(t)))
              for (let r = 0; r < t.length; r++) n = ti(e, t[r]) || n;
            else {
              if ("function" == typeof t)
                throw ri("Function/Class not supported", t);
              if (!t || "object" != typeof t || !t.provide)
                throw ri("Unexpected provider", t);
              {
                let r = h(t.provide);
                const o = Jo(t);
                if (!0 === t.multi) {
                  let n = e.get(r);
                  if (n) {
                    if (n.fn !== Yo) throw ei(r);
                  } else
                    e.set(
                      r,
                      (n = {
                        token: t.provide,
                        deps: [],
                        useNew: !1,
                        fn: Yo,
                        value: Ko,
                      })
                    );
                  (r = t), n.deps.push({ token: r, options: 6 });
                }
                const i = e.get(r);
                if (i && i.fn == Yo) throw ei(r);
                r === $o && (n = o.value), e.set(r, o);
              }
            }
          return n;
        }
        function ni(e, t, n, r, o, i) {
          try {
            return (function (e, t, n, r, o, i) {
              let s;
              if (!t || i & P.SkipSelf)
                s =
                  i & P.Self
                    ? i & P.Optional
                      ? Zo.NULL.get(e, void 0 !== o ? o : null)
                      : Zo.NULL.get(e, o)
                    : r.get(e, o, P.Default);
              else {
                if (((s = t.value), s == Xo))
                  throw Error("ÉµCircular dependency");
                if (s === Ko) {
                  t.value = Xo;
                  let e = void 0,
                    o = t.useNew,
                    i = t.fn,
                    a = t.deps,
                    c = Ko;
                  if (a.length) {
                    c = [];
                    for (let e = 0; e < a.length; e++) {
                      const t = a[e],
                        o = t.options,
                        i = 2 & o ? n.get(t.token) : void 0;
                      c.push(
                        ni(
                          t.token,
                          i,
                          n,
                          i || 4 & o ? r : Zo.NULL,
                          1 & o ? null : Zo.THROW_IF_NOT_FOUND,
                          P.Default
                        )
                      );
                    }
                  }
                  t.value = s = o ? new i(...c) : i.apply(e, c);
                }
              }
              return s;
            })(e, t, n, r, o, i);
          } catch (n) {
            n instanceof Error || (n = new Error(n));
            throw (
              ((n.ngTempTokenPath = n.ngTempTokenPath || []).unshift(e),
              t && t.value == Xo && (t.value = Ko),
              n)
            );
          }
        }
        function ri(e, t) {
          return new Error(Rn(e, t, "StaticInjectorError"));
        }
        function oi(e, t, n, r, o, i) {
          const s = n[1];
          ngDevMode && I(n, 20), (n[20] = e);
          const a = fo(s, 20, 2, "#host", null),
            c = (a.mergedAttrs = t.hostAttrs);
          null !== c &&
            (zo(a, c, !0),
            null !== e &&
              (Mt(o, e, c),
              null !== a.classes && Er(o, e, a.classes),
              null !== a.styles && Cr(o, e, a.styles)));
          const u = r.createRenderer(e, t),
            l = lo(
              n,
              bo(t),
              null,
              t.onPush ? 64 : 16,
              n[20],
              a,
              r,
              u,
              i || null,
              null
            );
          return (
            s.firstCreatePass &&
              (qt(Ht(a, n), s, t.type), Eo(s, a), So(a, n.length, 1)),
            No(n, l),
            (n[20] = l)
          );
        }
        function ii(e, t, n, r, o) {
          const i = n[1],
            s = (function (e, t, n) {
              const r = Ge();
              if (e.firstCreatePass) {
                n.providersResolver && n.providersResolver(n);
                const o = po(e, t, 1, null);
                ngDevMode &&
                  y(
                    o,
                    r.directiveStart,
                    "Because this is a root component the allocated expando should match the TNode component."
                  ),
                  Io(e, r, t, o, n);
              }
              const o = Kt(t, e, r.directiveStart, r);
              or(o, t);
              const i = Ve(r, t);
              return i && or(i, t), o;
            })(i, n, t);
          if (
            (r.components.push(s),
            (e[8] = s),
            o && o.forEach((e) => e(s, t)),
            t.contentQueries)
          ) {
            const e = Ge();
            ngDevMode && C(e, "TNode expected"),
              t.contentQueries(1, s, e.directiveStart);
          }
          const a = Ge();
          if (
            (ngDevMode && C(a, "tNode should have been already created"),
            i.firstCreatePass &&
              (null !== t.hostBindings || null !== t.hostAttrs))
          ) {
            yt(a.index);
            ko(n[1], a, 0, a.directiveStart, a.directiveEnd, t), Co(t, s);
          }
          return s;
        }
        function si(e, t) {
          return {
            components: [],
            scheduler: e || ir,
            clean: Fo,
            playerHandler: t || null,
            flags: 0,
          };
        }
        function ai(e, t) {
          const n = We(e);
          ngDevMode && C(n, "LView is required");
          const r = n[1],
            o = Ge();
          ngDevMode && C(o, "TNode is required"), bt(r, o);
        }
        let ci = null;
        function ui() {
          if (!ci) {
            const e = U.Symbol;
            if (e && e.iterator) ci = e.iterator;
            else {
              const e = Object.getOwnPropertyNames(Map.prototype);
              for (let t = 0; t < e.length; ++t) {
                const n = e[t];
                "entries" !== n &&
                  "size" !== n &&
                  Map.prototype[n] === Map.prototype.entries &&
                  (ci = n);
              }
            }
          }
          return ci;
        }
        function li(e) {
          return (
            !!di(e) && (Array.isArray(e) || (!(e instanceof Map) && ui() in e))
          );
        }
        function di(e) {
          return null !== e && ("function" == typeof e || "object" == typeof e);
        }
        c({ provide: String, useValue: c });
        const fi = c({ provide: String, useValue: c }),
          hi = [];
        function pi(e, t) {
          if (!t) {
            const t = new bn().parameters(e);
            return () => new e(...jn(t));
          }
          if (fi in t) {
            const e = t;
            return () => e.useValue;
          }
          if (t.useExisting) {
            const e = t;
            return () => On(h(e.useExisting));
          }
          if (t.useFactory) {
            const e = t;
            return () => e.useFactory(...jn(e.deps || hi));
          }
          if (t.useClass) {
            const n = t;
            let r = t.deps;
            if (!r) {
              const t = new bn();
              r = t.parameters(e);
            }
            return () => new (h(n.useClass))(...jn(r));
          }
          {
            let n = t.deps;
            if (!n) {
              const t = new bn();
              n = t.parameters(e);
            }
            return () => new e(...jn(n));
          }
        }
        const gi = nn("Injectable", void 0, void 0, void 0, (e, t) => mi(e, t));
        const mi = function (e, t) {
          t &&
            void 0 !== t.providedIn &&
            !A(e) &&
            (e.Éµprov = M({
              token: e,
              providedIn: t.providedIn,
              factory: pi(e, t),
            }));
        };
        function vi(e) {
          if (e.length > 1) {
            return (
              " (" +
              (function (e) {
                const t = [];
                for (let n = 0; n < e.length; ++n) {
                  if (t.indexOf(e[n]) > -1) return t.push(e[n]), t;
                  t.push(e[n]);
                }
                return t;
              })(e.slice().reverse())
                .map((e) => u(e.token))
                .join(" -> ") +
              ")"
            );
          }
          return "";
        }
        function yi(e, t, n, r) {
          const o = [t],
            i = n(o),
            s = r
              ? (function (e, t) {
                  const n = `${e} caused by: ${
                      t instanceof Error ? t.message : t
                    }`,
                    r = Error(n);
                  return (r.ngOriginalError = t), r;
                })(i, r)
              : Error(i);
          return (
            (s.addKey = bi),
            (s.keys = o),
            (s.injectors = [e]),
            (s.constructResolvingMessage = n),
            (s.ngOriginalError = r),
            s
          );
        }
        function bi(e, t) {
          this.injectors.push(e),
            this.keys.push(t),
            (this.message = this.constructResolvingMessage(this.keys));
        }
        function wi(e, t) {
          const n = [];
          for (let e = 0, r = t.length; e < r; e++) {
            const r = t[e];
            r && 0 != r.length ? n.push(r.map(u).join(" ")) : n.push("?");
          }
          return Error(
            "Cannot resolve all parameters for '" +
              u(e) +
              "'(" +
              n.join(", ") +
              "). Make sure that all the parameters are decorated with Inject or have valid type annotations and that '" +
              u(e) +
              "' is decorated with Injectable."
          );
        }
        function _i(e, t) {
          return Error(
            `Cannot mix multi providers and regular providers, got: ${e} ${t}`
          );
        }
        class xi {
          constructor(e, t) {
            if (((this.token = e), (this.id = t), !e))
              throw new Error("Token must be defined!");
            this.displayName = u(this.token);
          }
          static get(e) {
            return Ti.get(h(e));
          }
          static get numberOfKeys() {
            return Ti.numberOfKeys;
          }
        }
        const Ti = new (class {
          constructor() {
            this._allKeys = new Map();
          }
          get(e) {
            if (e instanceof xi) return e;
            if (this._allKeys.has(e)) return this._allKeys.get(e);
            const t = new xi(e, xi.numberOfKeys);
            return this._allKeys.set(e, t), t;
          }
          get numberOfKeys() {
            return this._allKeys.size;
          }
        })();
        const ki = new (class {
          constructor(e) {
            this.reflectionCapabilities = e;
          }
          updateCapabilities(e) {
            this.reflectionCapabilities = e;
          }
          factory(e) {
            return this.reflectionCapabilities.factory(e);
          }
          parameters(e) {
            return this.reflectionCapabilities.parameters(e);
          }
          annotations(e) {
            return this.reflectionCapabilities.annotations(e);
          }
          propMetadata(e) {
            return this.reflectionCapabilities.propMetadata(e);
          }
          hasLifecycleHook(e, t) {
            return this.reflectionCapabilities.hasLifecycleHook(e, t);
          }
          getter(e) {
            return this.reflectionCapabilities.getter(e);
          }
          setter(e) {
            return this.reflectionCapabilities.setter(e);
          }
          method(e) {
            return this.reflectionCapabilities.method(e);
          }
          importUri(e) {
            return this.reflectionCapabilities.importUri(e);
          }
          resourceUri(e) {
            return this.reflectionCapabilities.resourceUri(e);
          }
          resolveIdentifier(e, t, n, r) {
            return this.reflectionCapabilities.resolveIdentifier(e, t, n, r);
          }
          resolveEnum(e, t) {
            return this.reflectionCapabilities.resolveEnum(e, t);
          }
        })(new bn());
        class Ci {
          constructor(e, t, n) {
            (this.key = e), (this.optional = t), (this.visibility = n);
          }
          static fromKey(e) {
            return new Ci(e, !1, null);
          }
        }
        const Ei = [];
        class Si {
          constructor(e, t, n) {
            (this.key = e),
              (this.resolvedFactories = t),
              (this.multiProvider = n),
              (this.resolvedFactory = this.resolvedFactories[0]);
          }
        }
        class Ii {
          constructor(e, t) {
            (this.factory = e), (this.dependencies = t);
          }
        }
        function Mi(e) {
          let t, n;
          if (e.useClass) {
            const r = h(e.useClass);
            (t = ki.factory(r)), (n = Oi(r));
          } else
            e.useExisting
              ? ((t = (e) => e), (n = [Ci.fromKey(xi.get(e.useExisting))]))
              : e.useFactory
              ? ((t = e.useFactory),
                (n = (function (e, t) {
                  if (t) {
                    const n = t.map((e) => [e]);
                    return t.map((t) => ji(e, t, n));
                  }
                  return Oi(e);
                })(e.useFactory, e.deps)))
              : ((t = () => e.useValue), (n = Ei));
          return new Ii(t, n);
        }
        function Di(e) {
          return new Si(xi.get(e.provide), [Mi(e)], e.multi || !1);
        }
        function Ai(e) {
          const t = (function (e, t) {
            for (let n = 0; n < e.length; n++) {
              const r = e[n],
                o = t.get(r.key.id);
              if (o) {
                if (r.multiProvider !== o.multiProvider) throw _i(o, r);
                if (r.multiProvider)
                  for (let e = 0; e < r.resolvedFactories.length; e++)
                    o.resolvedFactories.push(r.resolvedFactories[e]);
                else t.set(r.key.id, r);
              } else {
                let e;
                (e = r.multiProvider
                  ? new Si(r.key, r.resolvedFactories.slice(), r.multiProvider)
                  : r),
                  t.set(r.key.id, e);
              }
            }
            return t;
          })(Ni(e, []).map(Di), new Map());
          return Array.from(t.values());
        }
        function Ni(e, t) {
          return (
            e.forEach((e) => {
              if (e instanceof fn) t.push({ provide: e, useClass: e });
              else if (e && "object" == typeof e && void 0 !== e.provide)
                t.push(e);
              else {
                if (!Array.isArray(e))
                  throw Error(
                    "Invalid provider - only instances of Provider and Type are allowed, got: " +
                      e
                  );
                Ni(e, t);
              }
            }),
            t
          );
        }
        function Oi(e) {
          const t = ki.parameters(e);
          if (!t) return [];
          if (t.some((e) => null == e)) throw wi(e, t);
          return t.map((n) => ji(e, n, t));
        }
        function ji(e, t, n) {
          let r = null,
            o = !1;
          if (!Array.isArray(t))
            return Pi(t instanceof xn ? t.token : t, o, null);
          let i = null;
          for (let e = 0; e < t.length; ++e) {
            const n = t[e];
            n instanceof fn
              ? (r = n)
              : n instanceof xn
              ? (r = n.token)
              : n instanceof Tn
              ? (o = !0)
              : n instanceof kn || n instanceof Cn
              ? (i = n)
              : n instanceof an && (r = n);
          }
          if (((r = h(r)), null != r)) return Pi(r, o, i);
          throw wi(e, n);
        }
        function Pi(e, t, n) {
          return new Ci(xi.get(e), t, n);
        }
        const Ri = {};
        class Hi {
          static resolve(e) {
            return Ai(e);
          }
          static resolveAndCreate(e, t) {
            const n = Hi.resolve(e);
            return Hi.fromResolvedProviders(n, t);
          }
          static fromResolvedProviders(e, t) {
            return new Fi(e, t);
          }
        }
        class Fi {
          constructor(e, t) {
            (this._constructionCounter = 0),
              (this._providers = e),
              (this.parent = t || null);
            const n = e.length;
            (this.keyIds = []), (this.objs = []);
            for (let t = 0; t < n; t++)
              (this.keyIds[t] = e[t].key.id), (this.objs[t] = Ri);
          }
          get(e, t = En) {
            return this._getByKey(xi.get(e), null, t);
          }
          resolveAndCreateChild(e) {
            const t = Hi.resolve(e);
            return this.createChildFromResolved(t);
          }
          createChildFromResolved(e) {
            const t = new Fi(e);
            return (t.parent = this), t;
          }
          resolveAndInstantiate(e) {
            return this.instantiateResolved(Hi.resolve([e])[0]);
          }
          instantiateResolved(e) {
            return this._instantiateProvider(e);
          }
          getProviderAtIndex(e) {
            if (e < 0 || e >= this._providers.length)
              throw (function (e) {
                return Error(`Index ${e} is out-of-bounds.`);
              })(e);
            return this._providers[e];
          }
          _new(e) {
            if (this._constructionCounter++ > this._getMaxNumberOfObjects())
              throw (
                ((t = this),
                (n = e.key),
                yi(t, n, function (e) {
                  return "Cannot instantiate cyclic dependency!" + vi(e);
                }))
              );
            var t, n;
            return this._instantiateProvider(e);
          }
          _getMaxNumberOfObjects() {
            return this.objs.length;
          }
          _instantiateProvider(e) {
            if (e.multiProvider) {
              const t = [];
              for (let n = 0; n < e.resolvedFactories.length; ++n)
                t[n] = this._instantiate(e, e.resolvedFactories[n]);
              return t;
            }
            return this._instantiate(e, e.resolvedFactories[0]);
          }
          _instantiate(e, t) {
            const n = t.factory;
            let r, o;
            try {
              r = t.dependencies.map((e) => this._getByReflectiveDependency(e));
            } catch (t) {
              throw (t.addKey && t.addKey(this, e.key), t);
            }
            try {
              o = n(...r);
            } catch (t) {
              throw (
                ((i = this),
                (s = t),
                t.stack,
                (a = e.key),
                yi(
                  i,
                  a,
                  function (e) {
                    const t = u(e[0].token);
                    return `${
                      s.message
                    }: Error during instantiation of ${t}!${vi(e)}.`;
                  },
                  s
                ))
              );
            }
            var i, s, a;
            return o;
          }
          _getByReflectiveDependency(e) {
            return this._getByKey(e.key, e.visibility, e.optional ? null : En);
          }
          _getByKey(e, t, n) {
            return e === Fi.INJECTOR_KEY
              ? this
              : t instanceof kn
              ? this._getByKeySelf(e, n)
              : this._getByKeyDefault(e, n, t);
          }
          _getObjByKeyId(e) {
            for (let t = 0; t < this.keyIds.length; t++)
              if (this.keyIds[t] === e)
                return (
                  this.objs[t] === Ri &&
                    (this.objs[t] = this._new(this._providers[t])),
                  this.objs[t]
                );
            return Ri;
          }
          _throwOrNull(e, t) {
            if (t !== En) return t;
            throw (function (e, t) {
              return yi(e, t, function (e) {
                return `No provider for ${u(e[0].token)}!${vi(e)}`;
              });
            })(this, e);
          }
          _getByKeySelf(e, t) {
            const n = this._getObjByKeyId(e.id);
            return n !== Ri ? n : this._throwOrNull(e, t);
          }
          _getByKeyDefault(e, t, n) {
            let r;
            for (r = n instanceof Cn ? this.parent : this; r instanceof Fi; ) {
              const t = r,
                n = t._getObjByKeyId(e.id);
              if (n !== Ri) return n;
              r = t.parent;
            }
            return null !== r ? r.get(e.token, t) : this._throwOrNull(e, t);
          }
          get displayName() {
            return `ReflectiveInjector(providers: [${(function (e, t) {
              const n = [];
              for (let r = 0; r < e._providers.length; ++r)
                n[r] = t(e.getProviderAtIndex(r));
              return n;
            })(this, (e) => ' "' + e.key.displayName + '" ').join(", ")}])`;
          }
          toString() {
            return this.displayName;
          }
        }
        function Li(e) {
          return !!e && "function" == typeof e.then;
        }
        Fi.INJECTOR_KEY = xi.get(Zo);
        const Vi = {},
          qi = [];
        ("undefined" == typeof ngDevMode || ngDevMode) &&
          Z() &&
          (Object.freeze(Vi), Object.freeze(qi));
        "undefined" == typeof ngI18nClosureMode &&
          (U.ngI18nClosureMode =
            "undefined" != typeof goog && "function" == typeof goog.getMsg);
        var zi;
        !(function (e) {
          (e[(e.LocaleId = 0)] = "LocaleId"),
            (e[(e.DayPeriodsFormat = 1)] = "DayPeriodsFormat"),
            (e[(e.DayPeriodsStandalone = 2)] = "DayPeriodsStandalone"),
            (e[(e.DaysFormat = 3)] = "DaysFormat"),
            (e[(e.DaysStandalone = 4)] = "DaysStandalone"),
            (e[(e.MonthsFormat = 5)] = "MonthsFormat"),
            (e[(e.MonthsStandalone = 6)] = "MonthsStandalone"),
            (e[(e.Eras = 7)] = "Eras"),
            (e[(e.FirstDayOfWeek = 8)] = "FirstDayOfWeek"),
            (e[(e.WeekendRange = 9)] = "WeekendRange"),
            (e[(e.DateFormat = 10)] = "DateFormat"),
            (e[(e.TimeFormat = 11)] = "TimeFormat"),
            (e[(e.DateTimeFormat = 12)] = "DateTimeFormat"),
            (e[(e.NumberSymbols = 13)] = "NumberSymbols"),
            (e[(e.NumberFormats = 14)] = "NumberFormats"),
            (e[(e.CurrencyCode = 15)] = "CurrencyCode"),
            (e[(e.CurrencySymbol = 16)] = "CurrencySymbol"),
            (e[(e.CurrencyName = 17)] = "CurrencyName"),
            (e[(e.Currencies = 18)] = "Currencies"),
            (e[(e.Directionality = 19)] = "Directionality"),
            (e[(e.PluralCase = 20)] = "PluralCase"),
            (e[(e.ExtraData = 21)] = "ExtraData");
        })(zi || (zi = {}));
        const Bi = "en-US";
        var Wi;
        !(function (e) {
          (e[(e.SHIFT = 2)] = "SHIFT"),
            (e[(e.APPEND_EAGERLY = 1)] = "APPEND_EAGERLY"),
            (e[(e.COMMENT = 2)] = "COMMENT");
        })(Wi || (Wi = {}));
        class $i {}
        class Ui {}
        function Zi(e) {
          const t = Error(
            `No component factory found for ${u(
              e
            )}. Did you add it to @NgModule.entryComponents?`
          );
          return (t[Qi] = e), t;
        }
        const Qi = "ngComponent";
        class Ki {}
        Ki.NULL = new (class {
          resolveComponentFactory(e) {
            throw Zi(e);
          }
        })();
        class Xi extends Ui {
          constructor(e, t) {
            super(),
              (this.factory = e),
              (this.ngModule = t),
              (this.selector = e.selector),
              (this.componentType = e.componentType),
              (this.ngContentSelectors = e.ngContentSelectors),
              (this.inputs = e.inputs),
              (this.outputs = e.outputs);
          }
          create(e, t, n, r) {
            return this.factory.create(e, t, n, r || this.ngModule);
          }
        }
        function Yi(...e) {}
        function Gi(e, t) {
          return new es(Ve(e, t));
        }
        const Ji = Yi;
        class es {
          constructor(e) {
            this.nativeElement = e;
          }
        }
        es.__NG_ELEMENT_ID__ = Ji;
        new an("Renderer2Interceptor");
        class ts {}
        class ns {}
        ns.__NG_ELEMENT_ID__ = () => rs();
        const rs = Yi;
        class os {}
        os.Éµprov = M({ token: os, providedIn: "root", factory: () => null });
        const is = new (class {
          constructor(e) {
            (this.full = e),
              (this.major = e.split(".")[0]),
              (this.minor = e.split(".")[1]),
              (this.patch = e.split(".").slice(2).join("."));
          }
        })("11.0.4");
        class ss {
          constructor() {}
          supports(e) {
            return li(e);
          }
          create(e) {
            return new cs(e);
          }
        }
        const as = (e, t) => t;
        class cs {
          constructor(e) {
            (this.length = 0),
              (this._linkedRecords = null),
              (this._unlinkedRecords = null),
              (this._previousItHead = null),
              (this._itHead = null),
              (this._itTail = null),
              (this._additionsHead = null),
              (this._additionsTail = null),
              (this._movesHead = null),
              (this._movesTail = null),
              (this._removalsHead = null),
              (this._removalsTail = null),
              (this._identityChangesHead = null),
              (this._identityChangesTail = null),
              (this._trackByFn = e || as);
          }
          forEachItem(e) {
            let t;
            for (t = this._itHead; null !== t; t = t._next) e(t);
          }
          forEachOperation(e) {
            let t = this._itHead,
              n = this._removalsHead,
              r = 0,
              o = null;
            for (; t || n; ) {
              const i = !n || (t && t.currentIndex < fs(n, r, o)) ? t : n,
                s = fs(i, r, o),
                a = i.currentIndex;
              if (i === n) r--, (n = n._nextRemoved);
              else if (((t = t._next), null == i.previousIndex)) r++;
              else {
                o || (o = []);
                const e = s - r,
                  t = a - r;
                if (e != t) {
                  for (let n = 0; n < e; n++) {
                    const r = n < o.length ? o[n] : (o[n] = 0),
                      i = r + n;
                    t <= i && i < e && (o[n] = r + 1);
                  }
                  o[i.previousIndex] = t - e;
                }
              }
              s !== a && e(i, s, a);
            }
          }
          forEachPreviousItem(e) {
            let t;
            for (t = this._previousItHead; null !== t; t = t._nextPrevious)
              e(t);
          }
          forEachAddedItem(e) {
            let t;
            for (t = this._additionsHead; null !== t; t = t._nextAdded) e(t);
          }
          forEachMovedItem(e) {
            let t;
            for (t = this._movesHead; null !== t; t = t._nextMoved) e(t);
          }
          forEachRemovedItem(e) {
            let t;
            for (t = this._removalsHead; null !== t; t = t._nextRemoved) e(t);
          }
          forEachIdentityChange(e) {
            let t;
            for (
              t = this._identityChangesHead;
              null !== t;
              t = t._nextIdentityChange
            )
              e(t);
          }
          diff(e) {
            if ((null == e && (e = []), !li(e)))
              throw new Error(
                `Error trying to diff '${u(
                  e
                )}'. Only arrays and iterables are allowed`
              );
            return this.check(e) ? this : null;
          }
          onDestroy() {}
          check(e) {
            this._reset();
            let t,
              n,
              r,
              o = this._itHead,
              i = !1;
            if (Array.isArray(e)) {
              this.length = e.length;
              for (let t = 0; t < this.length; t++)
                (n = e[t]),
                  (r = this._trackByFn(t, n)),
                  null !== o && Object.is(o.trackById, r)
                    ? (i && (o = this._verifyReinsertion(o, n, r, t)),
                      Object.is(o.item, n) || this._addIdentityChange(o, n))
                    : ((o = this._mismatch(o, n, r, t)), (i = !0)),
                  (o = o._next);
            } else
              (t = 0),
                (function (e, t) {
                  if (Array.isArray(e))
                    for (let n = 0; n < e.length; n++) t(e[n]);
                  else {
                    const n = e[ui()]();
                    let r;
                    for (; !(r = n.next()).done; ) t(r.value);
                  }
                })(e, (e) => {
                  (r = this._trackByFn(t, e)),
                    null !== o && Object.is(o.trackById, r)
                      ? (i && (o = this._verifyReinsertion(o, e, r, t)),
                        Object.is(o.item, e) || this._addIdentityChange(o, e))
                      : ((o = this._mismatch(o, e, r, t)), (i = !0)),
                    (o = o._next),
                    t++;
                }),
                (this.length = t);
            return this._truncate(o), (this.collection = e), this.isDirty;
          }
          get isDirty() {
            return (
              null !== this._additionsHead ||
              null !== this._movesHead ||
              null !== this._removalsHead ||
              null !== this._identityChangesHead
            );
          }
          _reset() {
            if (this.isDirty) {
              let e;
              for (
                e = this._previousItHead = this._itHead;
                null !== e;
                e = e._next
              )
                e._nextPrevious = e._next;
              for (e = this._additionsHead; null !== e; e = e._nextAdded)
                e.previousIndex = e.currentIndex;
              for (
                this._additionsHead = this._additionsTail = null,
                  e = this._movesHead;
                null !== e;
                e = e._nextMoved
              )
                e.previousIndex = e.currentIndex;
              (this._movesHead = this._movesTail = null),
                (this._removalsHead = this._removalsTail = null),
                (this._identityChangesHead = this._identityChangesTail = null);
            }
          }
          _mismatch(e, t, n, r) {
            let o;
            return (
              null === e
                ? (o = this._itTail)
                : ((o = e._prev), this._remove(e)),
              null !==
              (e =
                null === this._linkedRecords
                  ? null
                  : this._linkedRecords.get(n, r))
                ? (Object.is(e.item, t) || this._addIdentityChange(e, t),
                  this._moveAfter(e, o, r))
                : null !==
                  (e =
                    null === this._unlinkedRecords
                      ? null
                      : this._unlinkedRecords.get(n, null))
                ? (Object.is(e.item, t) || this._addIdentityChange(e, t),
                  this._reinsertAfter(e, o, r))
                : (e = this._addAfter(new us(t, n), o, r)),
              e
            );
          }
          _verifyReinsertion(e, t, n, r) {
            let o =
              null === this._unlinkedRecords
                ? null
                : this._unlinkedRecords.get(n, null);
            return (
              null !== o
                ? (e = this._reinsertAfter(o, e._prev, r))
                : e.currentIndex != r &&
                  ((e.currentIndex = r), this._addToMoves(e, r)),
              e
            );
          }
          _truncate(e) {
            for (; null !== e; ) {
              const t = e._next;
              this._addToRemovals(this._unlink(e)), (e = t);
            }
            null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
              null !== this._additionsTail &&
                (this._additionsTail._nextAdded = null),
              null !== this._movesTail && (this._movesTail._nextMoved = null),
              null !== this._itTail && (this._itTail._next = null),
              null !== this._removalsTail &&
                (this._removalsTail._nextRemoved = null),
              null !== this._identityChangesTail &&
                (this._identityChangesTail._nextIdentityChange = null);
          }
          _reinsertAfter(e, t, n) {
            null !== this._unlinkedRecords && this._unlinkedRecords.remove(e);
            const r = e._prevRemoved,
              o = e._nextRemoved;
            return (
              null === r ? (this._removalsHead = o) : (r._nextRemoved = o),
              null === o ? (this._removalsTail = r) : (o._prevRemoved = r),
              this._insertAfter(e, t, n),
              this._addToMoves(e, n),
              e
            );
          }
          _moveAfter(e, t, n) {
            return (
              this._unlink(e),
              this._insertAfter(e, t, n),
              this._addToMoves(e, n),
              e
            );
          }
          _addAfter(e, t, n) {
            return (
              this._insertAfter(e, t, n),
              null === this._additionsTail
                ? (this._additionsTail = this._additionsHead = e)
                : (this._additionsTail = this._additionsTail._nextAdded = e),
              e
            );
          }
          _insertAfter(e, t, n) {
            const r = null === t ? this._itHead : t._next;
            return (
              (e._next = r),
              (e._prev = t),
              null === r ? (this._itTail = e) : (r._prev = e),
              null === t ? (this._itHead = e) : (t._next = e),
              null === this._linkedRecords && (this._linkedRecords = new ds()),
              this._linkedRecords.put(e),
              (e.currentIndex = n),
              e
            );
          }
          _remove(e) {
            return this._addToRemovals(this._unlink(e));
          }
          _unlink(e) {
            null !== this._linkedRecords && this._linkedRecords.remove(e);
            const t = e._prev,
              n = e._next;
            return (
              null === t ? (this._itHead = n) : (t._next = n),
              null === n ? (this._itTail = t) : (n._prev = t),
              e
            );
          }
          _addToMoves(e, t) {
            return (
              e.previousIndex === t ||
                (null === this._movesTail
                  ? (this._movesTail = this._movesHead = e)
                  : (this._movesTail = this._movesTail._nextMoved = e)),
              e
            );
          }
          _addToRemovals(e) {
            return (
              null === this._unlinkedRecords &&
                (this._unlinkedRecords = new ds()),
              this._unlinkedRecords.put(e),
              (e.currentIndex = null),
              (e._nextRemoved = null),
              null === this._removalsTail
                ? ((this._removalsTail = this._removalsHead = e),
                  (e._prevRemoved = null))
                : ((e._prevRemoved = this._removalsTail),
                  (this._removalsTail = this._removalsTail._nextRemoved = e)),
              e
            );
          }
          _addIdentityChange(e, t) {
            return (
              (e.item = t),
              null === this._identityChangesTail
                ? (this._identityChangesTail = this._identityChangesHead = e)
                : (this._identityChangesTail =
                    this._identityChangesTail._nextIdentityChange =
                      e),
              e
            );
          }
        }
        class us {
          constructor(e, t) {
            (this.item = e),
              (this.trackById = t),
              (this.currentIndex = null),
              (this.previousIndex = null),
              (this._nextPrevious = null),
              (this._prev = null),
              (this._next = null),
              (this._prevDup = null),
              (this._nextDup = null),
              (this._prevRemoved = null),
              (this._nextRemoved = null),
              (this._nextAdded = null),
              (this._nextMoved = null),
              (this._nextIdentityChange = null);
          }
        }
        class ls {
          constructor() {
            (this._head = null), (this._tail = null);
          }
          add(e) {
            null === this._head
              ? ((this._head = this._tail = e),
                (e._nextDup = null),
                (e._prevDup = null))
              : ((this._tail._nextDup = e),
                (e._prevDup = this._tail),
                (e._nextDup = null),
                (this._tail = e));
          }
          get(e, t) {
            let n;
            for (n = this._head; null !== n; n = n._nextDup)
              if (
                (null === t || t <= n.currentIndex) &&
                Object.is(n.trackById, e)
              )
                return n;
            return null;
          }
          remove(e) {
            const t = e._prevDup,
              n = e._nextDup;
            return (
              null === t ? (this._head = n) : (t._nextDup = n),
              null === n ? (this._tail = t) : (n._prevDup = t),
              null === this._head
            );
          }
        }
        class ds {
          constructor() {
            this.map = new Map();
          }
          put(e) {
            const t = e.trackById;
            let n = this.map.get(t);
            n || ((n = new ls()), this.map.set(t, n)), n.add(e);
          }
          get(e, t) {
            const n = e,
              r = this.map.get(n);
            return r ? r.get(e, t) : null;
          }
          remove(e) {
            const t = e.trackById;
            return this.map.get(t).remove(e) && this.map.delete(t), e;
          }
          get isEmpty() {
            return 0 === this.map.size;
          }
          clear() {
            this.map.clear();
          }
        }
        function fs(e, t, n) {
          const r = e.previousIndex;
          if (null === r) return r;
          let o = 0;
          return n && r < n.length && (o = n[r]), r + t + o;
        }
        class hs {
          constructor() {}
          supports(e) {
            return e instanceof Map || di(e);
          }
          create() {
            return new ps();
          }
        }
        class ps {
          constructor() {
            (this._records = new Map()),
              (this._mapHead = null),
              (this._appendAfter = null),
              (this._previousMapHead = null),
              (this._changesHead = null),
              (this._changesTail = null),
              (this._additionsHead = null),
              (this._additionsTail = null),
              (this._removalsHead = null),
              (this._removalsTail = null);
          }
          get isDirty() {
            return (
              null !== this._additionsHead ||
              null !== this._changesHead ||
              null !== this._removalsHead
            );
          }
          forEachItem(e) {
            let t;
            for (t = this._mapHead; null !== t; t = t._next) e(t);
          }
          forEachPreviousItem(e) {
            let t;
            for (t = this._previousMapHead; null !== t; t = t._nextPrevious)
              e(t);
          }
          forEachChangedItem(e) {
            let t;
            for (t = this._changesHead; null !== t; t = t._nextChanged) e(t);
          }
          forEachAddedItem(e) {
            let t;
            for (t = this._additionsHead; null !== t; t = t._nextAdded) e(t);
          }
          forEachRemovedItem(e) {
            let t;
            for (t = this._removalsHead; null !== t; t = t._nextRemoved) e(t);
          }
          diff(e) {
            if (e) {
              if (!(e instanceof Map || di(e)))
                throw new Error(
                  `Error trying to diff '${u(
                    e
                  )}'. Only maps and objects are allowed`
                );
            } else e = new Map();
            return this.check(e) ? this : null;
          }
          onDestroy() {}
          check(e) {
            this._reset();
            let t = this._mapHead;
            if (
              ((this._appendAfter = null),
              this._forEach(e, (e, n) => {
                if (t && t.key === n)
                  this._maybeAddToChanges(t, e),
                    (this._appendAfter = t),
                    (t = t._next);
                else {
                  const r = this._getOrCreateRecordForKey(n, e);
                  t = this._insertBeforeOrAppend(t, r);
                }
              }),
              t)
            ) {
              t._prev && (t._prev._next = null), (this._removalsHead = t);
              for (let e = t; null !== e; e = e._nextRemoved)
                e === this._mapHead && (this._mapHead = null),
                  this._records.delete(e.key),
                  (e._nextRemoved = e._next),
                  (e.previousValue = e.currentValue),
                  (e.currentValue = null),
                  (e._prev = null),
                  (e._next = null);
            }
            return (
              this._changesTail && (this._changesTail._nextChanged = null),
              this._additionsTail && (this._additionsTail._nextAdded = null),
              this.isDirty
            );
          }
          _insertBeforeOrAppend(e, t) {
            if (e) {
              const n = e._prev;
              return (
                (t._next = e),
                (t._prev = n),
                (e._prev = t),
                n && (n._next = t),
                e === this._mapHead && (this._mapHead = t),
                (this._appendAfter = e),
                e
              );
            }
            return (
              this._appendAfter
                ? ((this._appendAfter._next = t), (t._prev = this._appendAfter))
                : (this._mapHead = t),
              (this._appendAfter = t),
              null
            );
          }
          _getOrCreateRecordForKey(e, t) {
            if (this._records.has(e)) {
              const n = this._records.get(e);
              this._maybeAddToChanges(n, t);
              const r = n._prev,
                o = n._next;
              return (
                r && (r._next = o),
                o && (o._prev = r),
                (n._next = null),
                (n._prev = null),
                n
              );
            }
            const n = new gs(e);
            return (
              this._records.set(e, n),
              (n.currentValue = t),
              this._addToAdditions(n),
              n
            );
          }
          _reset() {
            if (this.isDirty) {
              let e;
              for (
                this._previousMapHead = this._mapHead,
                  e = this._previousMapHead;
                null !== e;
                e = e._next
              )
                e._nextPrevious = e._next;
              for (e = this._changesHead; null !== e; e = e._nextChanged)
                e.previousValue = e.currentValue;
              for (e = this._additionsHead; null != e; e = e._nextAdded)
                e.previousValue = e.currentValue;
              (this._changesHead = this._changesTail = null),
                (this._additionsHead = this._additionsTail = null),
                (this._removalsHead = null);
            }
          }
          _maybeAddToChanges(e, t) {
            Object.is(t, e.currentValue) ||
              ((e.previousValue = e.currentValue),
              (e.currentValue = t),
              this._addToChanges(e));
          }
          _addToAdditions(e) {
            null === this._additionsHead
              ? (this._additionsHead = this._additionsTail = e)
              : ((this._additionsTail._nextAdded = e),
                (this._additionsTail = e));
          }
          _addToChanges(e) {
            null === this._changesHead
              ? (this._changesHead = this._changesTail = e)
              : ((this._changesTail._nextChanged = e), (this._changesTail = e));
          }
          _forEach(e, t) {
            e instanceof Map
              ? e.forEach(t)
              : Object.keys(e).forEach((n) => t(e[n], n));
          }
        }
        class gs {
          constructor(e) {
            (this.key = e),
              (this.previousValue = null),
              (this.currentValue = null),
              (this._nextPrevious = null),
              (this._next = null),
              (this._prev = null),
              (this._nextAdded = null),
              (this._nextRemoved = null),
              (this._nextChanged = null);
          }
        }
        class ms {
          constructor(e) {
            this.factories = e;
          }
          static create(e, t) {
            if (null != t) {
              const n = t.factories.slice();
              e = e.concat(n);
            }
            return new ms(e);
          }
          static extend(e) {
            return {
              provide: ms,
              useFactory: (t) => {
                if (!t)
                  throw new Error(
                    "Cannot extend IterableDiffers without a parent injector"
                  );
                return ms.create(e, t);
              },
              deps: [[ms, new Cn(), new Tn()]],
            };
          }
          find(e) {
            const t = this.factories.find((t) => t.supports(e));
            if (null != t) return t;
            throw new Error(
              `Cannot find a differ supporting object '${e}' of type '${
                ((n = e), n.name || typeof n)
              }'`
            );
            var n;
          }
        }
        ms.Éµprov = M({
          token: ms,
          providedIn: "root",
          factory: () => new ms([new ss()]),
        });
        class vs {
          constructor(e) {
            this.factories = e;
          }
          static create(e, t) {
            if (t) {
              const n = t.factories.slice();
              e = e.concat(n);
            }
            return new vs(e);
          }
          static extend(e) {
            return {
              provide: vs,
              useFactory: (t) => {
                if (!t)
                  throw new Error(
                    "Cannot extend KeyValueDiffers without a parent injector"
                  );
                return vs.create(e, t);
              },
              deps: [[vs, new Cn(), new Tn()]],
            };
          }
          find(e) {
            const t = this.factories.find((t) => t.supports(e));
            if (t) return t;
            throw new Error(`Cannot find a differ supporting object '${e}'`);
          }
        }
        function ys(e, t, n, r, o = !1) {
          for (; null !== n; ) {
            ngDevMode && It(n, 63);
            const i = t[n.index];
            if ((null !== i && r.push(Le(i)), oe(i)))
              for (let e = ne; e < i.length; e++) {
                const t = i[e],
                  n = t[1].firstChild;
                null !== n && ys(t[1], t, n, r);
              }
            const s = n.type;
            if (8 & s) ys(e, t, n.child, r);
            else if (32 & s) {
              const e = cr(n, t);
              let o;
              for (; (o = e()); ) r.push(o);
            } else if (16 & s) {
              const e = t[16],
                o = e[6],
                i = n.projection;
              ngDevMode &&
                C(
                  o.projection,
                  "Components with projection nodes (<ng-content>) must have projection slots defined."
                );
              const s = o.projection[i];
              if (Array.isArray(s)) r.push(...s);
              else {
                const t = ur(e);
                ngDevMode &&
                  C(
                    t,
                    "Component views should always have a parent view (component's host view)"
                  ),
                  ys(t[1], t, s, r, !0);
              }
            }
            n = o ? n.projectionNext : n.next;
          }
          return r;
        }
        vs.Éµprov = M({
          token: vs,
          providedIn: "root",
          factory: () => new vs([new hs()]),
        });
        class bs {
          constructor(e, t) {
            (this._lView = e),
              (this._cdRefInjectingView = t),
              (this._appRef = null),
              (this._viewContainerRef = null);
          }
          get rootNodes() {
            const e = this._lView,
              t = e[1];
            return ys(t, e, t.firstChild, []);
          }
          get context() {
            return this._lView[8];
          }
          get destroyed() {
            return 256 == (256 & this._lView[2]);
          }
          destroy() {
            if (this._appRef) this._appRef.detachView(this);
            else if (this._viewContainerRef) {
              const e = this._viewContainerRef.indexOf(this);
              e > -1 && this._viewContainerRef.detach(e),
                (this._viewContainerRef = null);
            }
            mr(this._lView[1], this._lView);
          }
          onDestroy(e) {
            To(this._lView[1], this._lView, null, e);
          }
          markForCheck() {
            Oo(this._cdRefInjectingView || this._lView);
          }
          detach() {
            this._lView[2] &= -129;
          }
          reattach() {
            this._lView[2] |= 128;
          }
          detectChanges() {
            Po(this._lView[1], this._lView, this.context);
          }
          checkNoChanges() {
            !(function (e, t, n) {
              ot(!0);
              try {
                Po(e, t, n);
              } finally {
                ot(!1);
              }
            })(this._lView[1], this._lView, this.context);
          }
          attachToViewContainerRef(e) {
            if (this._appRef)
              throw new Error(
                "This view is already attached directly to the ApplicationRef!"
              );
            this._viewContainerRef = e;
          }
          detachFromAppRef() {
            var e, t;
            (this._appRef = null),
              (e = this._lView[1]),
              (t = this._lView),
              Tr(e, t, t[11], 2, null, null);
          }
          attachToAppRef(e) {
            if (this._viewContainerRef)
              throw new Error(
                "This view is already attached to a ViewContainer!"
              );
            this._appRef = e;
          }
        }
        class ws extends bs {
          constructor(e) {
            super(e), (this._view = e);
          }
          detectChanges() {
            Ro(this._view);
          }
          checkNoChanges() {
            !(function (e) {
              ot(!0);
              try {
                Ro(e);
              } finally {
                ot(!1);
              }
            })(this._view);
          }
          get context() {
            return null;
          }
        }
        const _s = Yi;
        class xs {}
        (xs.__NG_ELEMENT_ID__ = _s), (xs.__ChangeDetectorRef__ = !0);
        const Ts = [new hs()],
          ks = [new ss()],
          Cs = new ms(ks),
          Es = new vs(Ts),
          Ss = Yi;
        class Is {}
        Is.__NG_ELEMENT_ID__ = Ss;
        class Ms {}
        const Ds = Yi;
        class As {}
        As.__NG_ELEMENT_ID__ = Ds;
        const Ns = new Map();
        function Os(e) {
          let t = Ns.get(e);
          return t || ((t = u(e) + "_" + Ns.size), Ns.set(e, t)), t;
        }
        new WeakMap();
        Os(Zo), Os(Bo), Os(Ms);
        Os(ns), Os(es), Os(As), Os(Is), Os(xs), Os(Zo), Os(Bo);
        const js = {};
        class Ps extends Ki {
          constructor(e) {
            super(), (this.ngModule = e);
          }
          resolveComponentFactory(e) {
            ngDevMode && le(e);
            const t = J(e);
            return new Fs(t, this.ngModule);
          }
        }
        function Rs(e) {
          const t = [];
          for (let n in e)
            if (e.hasOwnProperty(n)) {
              const r = e[n];
              t.push({ propName: r, templateName: n });
            }
          return t;
        }
        const Hs = new an("SCHEDULER_TOKEN", {
          providedIn: "root",
          factory: () => ir,
        });
        class Fs extends Ui {
          constructor(e, t) {
            super(),
              (this.componentDef = e),
              (this.ngModule = t),
              (this.componentType = e.type),
              (this.selector = e.selectors.map(Mr).join(",")),
              (this.ngContentSelectors = e.ngContentSelectors
                ? e.ngContentSelectors
                : []),
              (this.isBoundToModule = !!t);
          }
          get inputs() {
            return Rs(this.componentDef.inputs);
          }
          get outputs() {
            return Rs(this.componentDef.outputs);
          }
          create(e, t, n, r) {
            const o = (r = r || this.ngModule)
                ? (function (e, t) {
                    return {
                      get: (n, r, o) => {
                        const i = e.get(n, js, o);
                        return i !== js || r === js ? i : t.get(n, r, o);
                      },
                    };
                  })(e, r.injector)
                : e,
              i = o.get(ts, Fe),
              s = o.get(os, null),
              a = i.createRenderer(null, this.componentDef),
              c = this.componentDef.selectors[0][0] || "div",
              u = n
                ? xo(a, n, this.componentDef.encapsulation)
                : pr(
                    i.createRenderer(null, this.componentDef),
                    c,
                    (function (e) {
                      const t = e.toLowerCase();
                      return "svg" === t ? Ne : "math" === t ? Oe : null;
                    })(c)
                  ),
              l = this.componentDef.onPush ? 576 : 528,
              d = si(),
              f = wo(0, null, null, 1, 0, null, null, null, null, null),
              h = lo(null, f, d, l, null, null, i, a, s, o);
            let p, g;
            dt(h);
            try {
              const e = oi(u, this.componentDef, h, i, a);
              if (u)
                if (n) Mt(a, u, ["ng-version", is.full]);
                else {
                  const { attrs: e, classes: t } = (function (e) {
                    const t = [],
                      n = [];
                    let r = 1,
                      o = 2;
                    for (; r < e.length; ) {
                      let i = e[r];
                      if ("string" == typeof i)
                        2 === o
                          ? "" !== i && t.push(i, e[++r])
                          : 8 === o && n.push(i);
                      else {
                        if (!Sr(o)) break;
                        o = i;
                      }
                      r++;
                    }
                    return { attrs: t, classes: n };
                  })(this.componentDef.selectors[0]);
                  e && Mt(a, u, e), t && t.length > 0 && Er(a, u, t.join(" "));
                }
              if (((g = qe(f, ee)), void 0 !== t)) {
                const e = (g.projection = []);
                for (let n = 0; n < this.ngContentSelectors.length; n++) {
                  const r = t[n];
                  e.push(null != r ? Array.from(r) : null);
                }
              }
              (p = ii(e, this.componentDef, h, d, [ai])), go(f, h, null);
            } finally {
              mt();
            }
            return new Ls(this.componentType, p, Gi(g, h), h, g);
          }
        }
        new Ps();
        class Ls extends $i {
          constructor(e, t, n, r, o) {
            super(),
              (this.location = n),
              (this._rootLView = r),
              (this._tNode = o),
              (this.instance = t),
              (this.hostView = this.changeDetectorRef = new ws(r)),
              (this.componentType = e);
          }
          get injector() {
            return new Gt(this._tNode, this._rootLView);
          }
          destroy() {
            this.hostView.destroy();
          }
          onDestroy(e) {
            this.hostView.onDestroy(e);
          }
        }
        new Map();
        class Vs extends r.a {
          constructor(e = !1) {
            super(), (this.__isAsync = e);
          }
          emit(e) {
            super.next(e);
          }
          subscribe(e, t, n) {
            let r,
              i = (e) => null,
              s = () => null;
            e && "object" == typeof e
              ? ((r = this.__isAsync
                  ? (t) => {
                      setTimeout(() => e.next(t));
                    }
                  : (t) => {
                      e.next(t);
                    }),
                e.error &&
                  (i = this.__isAsync
                    ? (t) => {
                        setTimeout(() => e.error(t));
                      }
                    : (t) => {
                        e.error(t);
                      }),
                e.complete &&
                  (s = this.__isAsync
                    ? () => {
                        setTimeout(() => e.complete());
                      }
                    : () => {
                        e.complete();
                      }))
              : ((r = this.__isAsync
                  ? (t) => {
                      setTimeout(() => e(t));
                    }
                  : (t) => {
                      e(t);
                    }),
                t &&
                  (i = this.__isAsync
                    ? (e) => {
                        setTimeout(() => t(e));
                      }
                    : (e) => {
                        t(e);
                      }),
                n &&
                  (s = this.__isAsync
                    ? () => {
                        setTimeout(() => n());
                      }
                    : () => {
                        n();
                      }));
            const a = super.subscribe(r, i, s);
            return e instanceof o.a && e.add(a), a;
          }
        }
        const qs = Vs;
        new Map(), new Map();
        const zs = nn(
            "Directive",
            (e = {}) => e,
            void 0,
            void 0,
            (e, t) => Ws(e, t)
          ),
          Bs =
            (nn(
              "Component",
              (e = {}) => Object.assign({ changeDetection: V.Default }, e),
              zs,
              void 0,
              (e, t) => Bs(e, t)
            ),
            nn(
              "Pipe",
              (e) => Object.assign({ pure: !0 }, e),
              void 0,
              void 0,
              (e, t) => $s(e, t)
            ),
            sn("Input", (e) => ({ bindingPropertyName: e })),
            sn("Output", (e) => ({ bindingPropertyName: e })),
            sn("HostBinding", (e) => ({ hostPropertyName: e })),
            sn("HostListener", (e, t) => ({ eventName: e, args: t })),
            Yi),
          Ws = Yi,
          $s = Yi,
          Us = nn(
            "NgModule",
            (e) => e,
            void 0,
            void 0,
            (e, t) => Zs(e, t)
          );
        const Zs = function (e, t) {
            let n = (t && t.imports) || [];
            t && t.exports && (n = [...n, t.exports]),
              (e.Éµinj = D({
                factory: pi(e, { useClass: e }),
                providers: t && t.providers,
                imports: n,
              }));
          },
          Qs = new an("Application Initializer");
        class Ks {
          constructor(e) {
            (this.appInits = e),
              (this.resolve = Yi),
              (this.reject = Yi),
              (this.initialized = !1),
              (this.done = !1),
              (this.donePromise = new Promise((e, t) => {
                (this.resolve = e), (this.reject = t);
              }));
          }
          runInitializers() {
            if (this.initialized) return;
            const e = [],
              t = () => {
                (this.done = !0), this.resolve();
              };
            if (this.appInits)
              for (let t = 0; t < this.appInits.length; t++) {
                const n = this.appInits[t]();
                Li(n) && e.push(n);
              }
            Promise.all(e)
              .then(() => {
                t();
              })
              .catch((e) => {
                this.reject(e);
              }),
              0 === e.length && t(),
              (this.initialized = !0);
          }
        }
        (Ks.decorators = [{ type: gi }]),
          (Ks.ctorParameters = () => [
            {
              type: Array,
              decorators: [{ type: xn, args: [Qs] }, { type: Tn }],
            },
          ]);
        const Xs = {
          provide: new an("AppId"),
          useFactory: function () {
            return `${Ys()}${Ys()}${Ys()}`;
          },
          deps: [],
        };
        function Ys() {
          return String.fromCharCode(97 + Math.floor(25 * Math.random()));
        }
        const Gs = new an("Platform Initializer"),
          Js = new an("Platform ID"),
          ea = new an("appBootstrapListener");
        new an("Application Packages Root URL");
        class ta {
          log(e) {
            console.log(e);
          }
          warn(e) {
            console.warn(e);
          }
        }
        ta.decorators = [{ type: gi }];
        const na = new an("LocaleId"),
          ra = new an("DefaultCurrencyCode");
        new an("Translations"), new an("TranslationsFormat");
        var oa;
        !(function (e) {
          (e[(e.Error = 0)] = "Error"),
            (e[(e.Warning = 1)] = "Warning"),
            (e[(e.Ignore = 2)] = "Ignore");
        })(oa || (oa = {}));
        function ia() {
          throw new Error("Runtime compiler is not loaded");
        }
        const sa = ia,
          aa = ia,
          ca = ia,
          ua = ia;
        class la {
          constructor() {
            (this.compileModuleSync = sa),
              (this.compileModuleAsync = aa),
              (this.compileModuleAndAllComponentsSync = ca),
              (this.compileModuleAndAllComponentsAsync = ua);
          }
          clearCache() {}
          clearCacheFor(e) {}
          getModuleId(e) {}
        }
        la.decorators = [{ type: gi }];
        new an("compilerOptions");
        class da {}
        const fa = Promise.resolve(0);
        function ha(e) {
          "undefined" == typeof Zone
            ? fa.then(() => {
                e && e.apply(null, null);
              })
            : Zone.current.scheduleMicroTask("scheduleMicrotask", e);
        }
        class pa {
          constructor({
            enableLongStackTrace: e = !1,
            shouldCoalesceEventChangeDetection: t = !1,
          }) {
            if (
              ((this.hasPendingMacrotasks = !1),
              (this.hasPendingMicrotasks = !1),
              (this.isStable = !0),
              (this.onUnstable = new qs(!1)),
              (this.onMicrotaskEmpty = new qs(!1)),
              (this.onStable = new qs(!1)),
              (this.onError = new qs(!1)),
              "undefined" == typeof Zone)
            )
              throw new Error("In this configuration Angular requires Zone.js");
            Zone.assertZonePatched();
            const n = this;
            (n._nesting = 0),
              (n._outer = n._inner = Zone.current),
              Zone.TaskTrackingZoneSpec &&
                (n._inner = n._inner.fork(new Zone.TaskTrackingZoneSpec())),
              e &&
                Zone.longStackTraceZoneSpec &&
                (n._inner = n._inner.fork(Zone.longStackTraceZoneSpec)),
              (n.shouldCoalesceEventChangeDetection = t),
              (n.lastRequestAnimationFrameId = -1),
              (n.nativeRequestAnimationFrame = (function () {
                let e = U.requestAnimationFrame,
                  t = U.cancelAnimationFrame;
                if ("undefined" != typeof Zone && e && t) {
                  const n = e[Zone.__symbol__("OriginalDelegate")];
                  n && (e = n);
                  const r = t[Zone.__symbol__("OriginalDelegate")];
                  r && (t = r);
                }
                return {
                  nativeRequestAnimationFrame: e,
                  nativeCancelAnimationFrame: t,
                };
              })().nativeRequestAnimationFrame),
              (function (e) {
                const t = () => {
                    !(function (e) {
                      if (-1 !== e.lastRequestAnimationFrameId) return;
                      (e.lastRequestAnimationFrameId =
                        e.nativeRequestAnimationFrame.call(U, () => {
                          e.fakeTopEventTask ||
                            (e.fakeTopEventTask = Zone.root.scheduleEventTask(
                              "fakeTopEventTask",
                              () => {
                                (e.lastRequestAnimationFrameId = -1),
                                  va(e),
                                  ma(e);
                              },
                              void 0,
                              () => {},
                              () => {}
                            )),
                            e.fakeTopEventTask.invoke();
                        })),
                        va(e);
                    })(e);
                  },
                  n =
                    !!e.shouldCoalesceEventChangeDetection &&
                    e.nativeRequestAnimationFrame &&
                    t;
                e._inner = e._inner.fork({
                  name: "angular",
                  properties: {
                    isAngularZone: !0,
                    maybeDelayChangeDetection: n,
                  },
                  onInvokeTask: (t, r, o, i, s, a) => {
                    try {
                      return ya(e), t.invokeTask(o, i, s, a);
                    } finally {
                      n && "eventTask" === i.type && n(), ba(e);
                    }
                  },
                  onInvoke: (t, n, r, o, i, s, a) => {
                    try {
                      return ya(e), t.invoke(r, o, i, s, a);
                    } finally {
                      ba(e);
                    }
                  },
                  onHasTask: (t, n, r, o) => {
                    t.hasTask(r, o),
                      n === r &&
                        ("microTask" == o.change
                          ? ((e._hasPendingMicrotasks = o.microTask),
                            va(e),
                            ma(e))
                          : "macroTask" == o.change &&
                            (e.hasPendingMacrotasks = o.macroTask));
                  },
                  onHandleError: (t, n, r, o) => (
                    t.handleError(r, o),
                    e.runOutsideAngular(() => e.onError.emit(o)),
                    !1
                  ),
                });
              })(n);
          }
          static isInAngularZone() {
            return !0 === Zone.current.get("isAngularZone");
          }
          static assertInAngularZone() {
            if (!pa.isInAngularZone())
              throw new Error("Expected to be in Angular Zone, but it is not!");
          }
          static assertNotInAngularZone() {
            if (pa.isInAngularZone())
              throw new Error("Expected to not be in Angular Zone, but it is!");
          }
          run(e, t, n) {
            return this._inner.run(e, t, n);
          }
          runTask(e, t, n, r) {
            const o = this._inner,
              i = o.scheduleEventTask("NgZoneEvent: " + r, e, ga, Yi, Yi);
            try {
              return o.runTask(i, t, n);
            } finally {
              o.cancelTask(i);
            }
          }
          runGuarded(e, t, n) {
            return this._inner.runGuarded(e, t, n);
          }
          runOutsideAngular(e) {
            return this._outer.run(e);
          }
        }
        const ga = {};
        function ma(e) {
          if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable)
            try {
              e._nesting++, e.onMicrotaskEmpty.emit(null);
            } finally {
              if ((e._nesting--, !e.hasPendingMicrotasks))
                try {
                  e.runOutsideAngular(() => e.onStable.emit(null));
                } finally {
                  e.isStable = !0;
                }
            }
        }
        function va(e) {
          e._hasPendingMicrotasks ||
          (e.shouldCoalesceEventChangeDetection &&
            -1 !== e.lastRequestAnimationFrameId)
            ? (e.hasPendingMicrotasks = !0)
            : (e.hasPendingMicrotasks = !1);
        }
        function ya(e) {
          e._nesting++,
            e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
        }
        function ba(e) {
          e._nesting--, ma(e);
        }
        class wa {
          constructor() {
            (this.hasPendingMicrotasks = !1),
              (this.hasPendingMacrotasks = !1),
              (this.isStable = !0),
              (this.onUnstable = new qs()),
              (this.onMicrotaskEmpty = new qs()),
              (this.onStable = new qs()),
              (this.onError = new qs());
          }
          run(e, t, n) {
            return e.apply(t, n);
          }
          runGuarded(e, t, n) {
            return e.apply(t, n);
          }
          runOutsideAngular(e) {
            return e();
          }
          runTask(e, t, n, r) {
            return e.apply(t, n);
          }
        }
        class _a {
          constructor(e) {
            (this._ngZone = e),
              (this._pendingCount = 0),
              (this._isZoneStable = !0),
              (this._didWork = !1),
              (this._callbacks = []),
              (this.taskTrackingZone = null),
              this._watchAngularEvents(),
              e.run(() => {
                this.taskTrackingZone =
                  "undefined" == typeof Zone
                    ? null
                    : Zone.current.get("TaskTrackingZone");
              });
          }
          _watchAngularEvents() {
            this._ngZone.onUnstable.subscribe({
              next: () => {
                (this._didWork = !0), (this._isZoneStable = !1);
              },
            }),
              this._ngZone.runOutsideAngular(() => {
                this._ngZone.onStable.subscribe({
                  next: () => {
                    pa.assertNotInAngularZone(),
                      ha(() => {
                        (this._isZoneStable = !0), this._runCallbacksIfReady();
                      });
                  },
                });
              });
          }
          increasePendingRequestCount() {
            return (
              (this._pendingCount += 1),
              (this._didWork = !0),
              this._pendingCount
            );
          }
          decreasePendingRequestCount() {
            if (((this._pendingCount -= 1), this._pendingCount < 0))
              throw new Error("pending async requests below zero");
            return this._runCallbacksIfReady(), this._pendingCount;
          }
          isStable() {
            return (
              this._isZoneStable &&
              0 === this._pendingCount &&
              !this._ngZone.hasPendingMacrotasks
            );
          }
          _runCallbacksIfReady() {
            if (this.isStable())
              ha(() => {
                for (; 0 !== this._callbacks.length; ) {
                  let e = this._callbacks.pop();
                  clearTimeout(e.timeoutId), e.doneCb(this._didWork);
                }
                this._didWork = !1;
              });
            else {
              let e = this.getPendingTasks();
              (this._callbacks = this._callbacks.filter(
                (t) =>
                  !t.updateCb ||
                  !t.updateCb(e) ||
                  (clearTimeout(t.timeoutId), !1)
              )),
                (this._didWork = !0);
            }
          }
          getPendingTasks() {
            return this.taskTrackingZone
              ? this.taskTrackingZone.macroTasks.map((e) => ({
                  source: e.source,
                  creationLocation: e.creationLocation,
                  data: e.data,
                }))
              : [];
          }
          addCallback(e, t, n) {
            let r = -1;
            t &&
              t > 0 &&
              (r = setTimeout(() => {
                (this._callbacks = this._callbacks.filter(
                  (e) => e.timeoutId !== r
                )),
                  e(this._didWork, this.getPendingTasks());
              }, t)),
              this._callbacks.push({ doneCb: e, timeoutId: r, updateCb: n });
          }
          whenStable(e, t, n) {
            if (n && !this.taskTrackingZone)
              throw new Error(
                'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?'
              );
            this.addCallback(e, t, n), this._runCallbacksIfReady();
          }
          getPendingRequestCount() {
            return this._pendingCount;
          }
          findProviders(e, t, n) {
            return [];
          }
        }
        (_a.decorators = [{ type: gi }]),
          (_a.ctorParameters = () => [{ type: pa }]);
        class xa {
          constructor() {
            (this._applications = new Map()), ka.addToWindow(this);
          }
          registerApplication(e, t) {
            this._applications.set(e, t);
          }
          unregisterApplication(e) {
            this._applications.delete(e);
          }
          unregisterAllApplications() {
            this._applications.clear();
          }
          getTestability(e) {
            return this._applications.get(e) || null;
          }
          getAllTestabilities() {
            return Array.from(this._applications.values());
          }
          getAllRootElements() {
            return Array.from(this._applications.keys());
          }
          findTestabilityInTree(e, t = !0) {
            return ka.findTestabilityInTree(this, e, t);
          }
        }
        (xa.decorators = [{ type: gi }]), (xa.ctorParameters = () => []);
        let Ta,
          ka = new (class {
            addToWindow(e) {}
            findTestabilityInTree(e, t, n) {
              return null;
            }
          })(),
          Ca = !0,
          Ea = !1;
        function Sa() {
          return (Ea = !0), Ca;
        }
        let Ia = function (e, t, n) {
          const r = e.get(da);
          return r.createCompiler([t]).compileModuleAsync(n);
        };
        let Ma = function () {},
          Da = function (e) {
            return e instanceof Xi;
          };
        const Aa = new an("AllowMultipleToken");
        function Na() {
          return Ta && !Ta.destroyed ? Ta : null;
        }
        class Oa {
          constructor(e) {
            (this._injector = e),
              (this._modules = []),
              (this._destroyListeners = []),
              (this._destroyed = !1);
          }
          bootstrapModuleFactory(e, t) {
            const n = (function (e, t) {
                let n;
                n =
                  "noop" === e
                    ? new wa()
                    : ("zone.js" === e ? void 0 : e) ||
                      new pa({
                        enableLongStackTrace: Sa(),
                        shouldCoalesceEventChangeDetection: t,
                      });
                return n;
              })(t ? t.ngZone : void 0, (t && t.ngZoneEventCoalescing) || !1),
              r = [{ provide: pa, useValue: n }];
            return n.run(() => {
              const t = Zo.create({
                  providers: r,
                  parent: this.injector,
                  name: e.moduleType.name,
                }),
                o = e.create(t),
                i = o.injector.get(nr, null);
              if (!i)
                throw new Error(
                  "No ErrorHandler. Is platform module (BrowserModule) included?"
                );
              return (
                n.runOutsideAngular(() => {
                  const e = n.onError.subscribe({
                    next: (e) => {
                      i.handleError(e);
                    },
                  });
                  o.onDestroy(() => {
                    Ra(this._modules, o), e.unsubscribe();
                  });
                }),
                (function (e, t, n) {
                  try {
                    const r = n();
                    return Li(r)
                      ? r.catch((n) => {
                          throw (
                            (t.runOutsideAngular(() => e.handleError(n)), n)
                          );
                        })
                      : r;
                  } catch (n) {
                    throw (t.runOutsideAngular(() => e.handleError(n)), n);
                  }
                })(i, n, () => {
                  const e = o.injector.get(Ks);
                  return (
                    e.runInitializers(),
                    e.donePromise.then(() => (this._moduleDoBootstrap(o), o))
                  );
                })
              );
            });
          }
          bootstrapModule(e, t = []) {
            const n = ja({}, t);
            return Ia(this.injector, n, e).then((e) =>
              this.bootstrapModuleFactory(e, n)
            );
          }
          _moduleDoBootstrap(e) {
            const t = e.injector.get(Pa);
            if (e._bootstrapComponents.length > 0)
              e._bootstrapComponents.forEach((e) => t.bootstrap(e));
            else {
              if (!e.instance.ngDoBootstrap)
                throw new Error(
                  `The module ${u(
                    e.instance.constructor
                  )} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.`
                );
              e.instance.ngDoBootstrap(t);
            }
            this._modules.push(e);
          }
          onDestroy(e) {
            this._destroyListeners.push(e);
          }
          get injector() {
            return this._injector;
          }
          destroy() {
            if (this._destroyed)
              throw new Error("The platform has already been destroyed!");
            this._modules.slice().forEach((e) => e.destroy()),
              this._destroyListeners.forEach((e) => e()),
              (this._destroyed = !0);
          }
          get destroyed() {
            return this._destroyed;
          }
        }
        function ja(e, t) {
          return (e = Array.isArray(t)
            ? t.reduce(ja, e)
            : Object.assign(Object.assign({}, e), t));
        }
        (Oa.decorators = [{ type: gi }]),
          (Oa.ctorParameters = () => [{ type: Zo }]);
        class Pa {
          constructor(e, t, n, r, o, c) {
            (this._zone = e),
              (this._console = t),
              (this._injector = n),
              (this._exceptionHandler = r),
              (this._componentFactoryResolver = o),
              (this._initStatus = c),
              (this._bootstrapListeners = []),
              (this._views = []),
              (this._runningTick = !1),
              (this._stable = !0),
              (this.componentTypes = []),
              (this.components = []),
              (this._onMicrotaskEmptySubscription =
                this._zone.onMicrotaskEmpty.subscribe({
                  next: () => {
                    this._zone.run(() => {
                      this.tick();
                    });
                  },
                }));
            const u = new i.a((e) => {
                (this._stable =
                  this._zone.isStable &&
                  !this._zone.hasPendingMacrotasks &&
                  !this._zone.hasPendingMicrotasks),
                  this._zone.runOutsideAngular(() => {
                    e.next(this._stable), e.complete();
                  });
              }),
              l = new i.a((e) => {
                let t;
                this._zone.runOutsideAngular(() => {
                  t = this._zone.onStable.subscribe(() => {
                    pa.assertNotInAngularZone(),
                      ha(() => {
                        this._stable ||
                          this._zone.hasPendingMacrotasks ||
                          this._zone.hasPendingMicrotasks ||
                          ((this._stable = !0), e.next(!0));
                      });
                  });
                });
                const n = this._zone.onUnstable.subscribe(() => {
                  pa.assertInAngularZone(),
                    this._stable &&
                      ((this._stable = !1),
                      this._zone.runOutsideAngular(() => {
                        e.next(!1);
                      }));
                });
                return () => {
                  t.unsubscribe(), n.unsubscribe();
                };
              });
            this.isStable = Object(s.a)(u, l.pipe(Object(a.a)()));
          }
          bootstrap(e, t) {
            if (!this._initStatus.done)
              throw new Error(
                "Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module."
              );
            let n;
            (n =
              e instanceof Ui
                ? e
                : this._componentFactoryResolver.resolveComponentFactory(e)),
              this.componentTypes.push(n.componentType);
            const r = Da(n) ? void 0 : this._injector.get(Ms),
              o = t || n.selector,
              i = n.create(Zo.NULL, [], o, r),
              s = i.location.nativeElement,
              a = i.injector.get(_a, null),
              c = a && i.injector.get(xa);
            return (
              a && c && c.registerApplication(s, a),
              i.onDestroy(() => {
                this.detachView(i.hostView),
                  Ra(this.components, i),
                  c && c.unregisterApplication(s);
              }),
              this._loadComponent(i),
              Sa() &&
                this._console.log(
                  "Angular is running in development mode. Call enableProdMode() to enable production mode."
                ),
              i
            );
          }
          tick() {
            if (this._runningTick)
              throw new Error("ApplicationRef.tick is called recursively");
            try {
              this._runningTick = !0;
              for (let e of this._views) e.detectChanges();
              if (("undefined" == typeof ngDevMode || ngDevMode) && Sa())
                for (let e of this._views) e.checkNoChanges();
            } catch (e) {
              this._zone.runOutsideAngular(() =>
                this._exceptionHandler.handleError(e)
              );
            } finally {
              this._runningTick = !1;
            }
          }
          attachView(e) {
            const t = e;
            this._views.push(t), t.attachToAppRef(this);
          }
          detachView(e) {
            const t = e;
            Ra(this._views, t), t.detachFromAppRef();
          }
          _loadComponent(e) {
            this.attachView(e.hostView), this.tick(), this.components.push(e);
            this._injector
              .get(ea, [])
              .concat(this._bootstrapListeners)
              .forEach((t) => t(e));
          }
          ngOnDestroy() {
            this._views.slice().forEach((e) => e.destroy()),
              this._onMicrotaskEmptySubscription.unsubscribe();
          }
          get viewCount() {
            return this._views.length;
          }
        }
        function Ra(e, t) {
          const n = e.indexOf(t);
          n > -1 && e.splice(n, 1);
        }
        (Pa.decorators = [{ type: gi }]),
          (Pa.ctorParameters = () => [
            { type: pa },
            { type: ta },
            { type: Zo },
            { type: nr },
            { type: Ki },
            { type: Ks },
          ]);
        class Ha {}
        const Fa = { factoryPathPrefix: "", factoryPathSuffix: ".ngfactory" };
        class La {
          constructor(e, t) {
            (this._compiler = e), (this._config = t || Fa);
          }
          load(e) {
            return this._compiler instanceof la
              ? this.loadFactory(e)
              : this.loadAndCompile(e);
          }
          loadAndCompile(e) {
            let [t, r] = e.split("#");
            return (
              void 0 === r && (r = "default"),
              n(16)(t)
                .then((e) => e[r])
                .then((e) => Va(e, t, r))
                .then((e) => this._compiler.compileModuleAsync(e))
            );
          }
          loadFactory(e) {
            let [t, r] = e.split("#"),
              o = "NgFactory";
            return (
              void 0 === r && ((r = "default"), (o = "")),
              n(16)(
                this._config.factoryPathPrefix +
                  t +
                  this._config.factoryPathSuffix
              )
                .then((e) => e[r + o])
                .then((e) => Va(e, t, r))
            );
          }
        }
        function Va(e, t, n) {
          if (!e) throw new Error(`Cannot find '${n}' in '${t}'`);
          return e;
        }
        (La.decorators = [{ type: gi }]),
          (La.ctorParameters = () => [
            { type: la },
            { type: Ha, decorators: [{ type: Tn }] },
          ]);
        new Map();
        !(function (e, t, n = []) {
          const r = "Platform: " + t,
            o = new an(r);
        })(null, "core", [
          { provide: Js, useValue: "unknown" },
          { provide: Oa, deps: [Zo] },
          { provide: xa, deps: [] },
          { provide: ta, deps: [] },
        ]);
        const qa = [
          { provide: Pa, useClass: Pa, deps: [pa, ta, Zo, nr, Ki, Ks] },
          {
            provide: Hs,
            deps: [pa],
            useFactory: function (e) {
              let t = [];
              return (
                e.onStable.subscribe(() => {
                  for (; t.length; ) t.pop()();
                }),
                function (e) {
                  t.push(e);
                }
              );
            },
          },
          { provide: Ks, useClass: Ks, deps: [[new Tn(), Qs]] },
          { provide: la, useClass: la, deps: [] },
          Xs,
          {
            provide: ms,
            useFactory: function () {
              return Cs;
            },
            deps: [],
          },
          {
            provide: vs,
            useFactory: function () {
              return Es;
            },
            deps: [],
          },
          {
            provide: na,
            useFactory: function (e) {
              return (e =
                e ||
                ("undefined" != typeof ngI18nClosureMode &&
                ngI18nClosureMode &&
                "undefined" != typeof goog &&
                "en" !== goog.LOCALE
                  ? goog.LOCALE
                  : Bi));
            },
            deps: [[new xn(na), new Tn(), new Cn()]],
          },
          { provide: ra, useValue: "USD" },
        ];
        class za {
          constructor(e) {}
        }
        var Ba;
        (za.decorators = [{ type: Us, args: [{ providers: qa }] }]),
          (za.ctorParameters = () => [{ type: Pa }]),
          (function (e) {
            (e[(e.CreateViewNodes = 0)] = "CreateViewNodes"),
              (e[(e.CheckNoChanges = 1)] = "CheckNoChanges"),
              (e[(e.CheckNoChangesProjectedViews = 2)] =
                "CheckNoChangesProjectedViews"),
              (e[(e.CheckAndUpdate = 3)] = "CheckAndUpdate"),
              (e[(e.CheckAndUpdateProjectedViews = 4)] =
                "CheckAndUpdateProjectedViews"),
              (e[(e.Destroy = 5)] = "Destroy");
          })(Ba || (Ba = {}));
        new Map(), new Map(), new Map();
        var Wa;
        !(function (e) {
          (e[(e.create = 0)] = "create"),
            (e[(e.detectChanges = 1)] = "detectChanges"),
            (e[(e.checkNoChanges = 2)] = "checkNoChanges"),
            (e[(e.destroy = 3)] = "destroy"),
            (e[(e.handleEvent = 4)] = "handleEvent");
        })(Wa || (Wa = {}));
        "undefined" != typeof ngDevMode &&
          ngDevMode &&
          (U.$localize =
            U.$localize ||
            function () {
              throw new Error(
                "It looks like your application or one of its dependencies is using i18n.\nAngular 9 introduced a global `$localize()` function that needs to be loaded.\nPlease run `ng add @angular/localize` from the Angular CLI.\n(For non-CLI projects, add `import '@angular/localize/init';` to your `polyfills.ts` file.\nFor server-side rendering applications add the import to your `main.server.ts` file.)"
              );
            });
      }.call(this, n(14)));
    },
    function (e, t) {
      function n(e) {
        return Promise.resolve().then(function () {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        });
      }
      (n.keys = function () {
        return [];
      }),
        (n.resolve = n),
        (e.exports = n),
        (n.id = 16);
    },
    function (e, t, n) {
      e.exports = n(20);
    },
    function (e, t, n) {
      "use strict";
      t.a = function (e) {
        var t = this.constructor;
        return this.then(
          function (n) {
            return t.resolve(e()).then(function () {
              return n;
            });
          },
          function (n) {
            return t.resolve(e()).then(function () {
              return t.reject(n);
            });
          }
        );
      };
    },
    function (e, t, n) {
      "use strict";
      t.a = function (e) {
        return new this(function (t, n) {
          if (!e || void 0 === e.length)
            return n(
              new TypeError(
                typeof e +
                  " " +
                  e +
                  " is not iterable(cannot read property Symbol(Symbol.iterator))"
              )
            );
          var r = Array.prototype.slice.call(e);
          if (0 === r.length) return t([]);
          var o = r.length;
          function i(e, n) {
            if (n && ("object" == typeof n || "function" == typeof n)) {
              var s = n.then;
              if ("function" == typeof s)
                return void s.call(
                  n,
                  function (t) {
                    i(e, t);
                  },
                  function (n) {
                    (r[e] = { status: "rejected", reason: n }),
                      0 == --o && t(r);
                  }
                );
            }
            (r[e] = { status: "fulfilled", value: n }), 0 == --o && t(r);
          }
          for (var s = 0; s < r.length; s++) i(s, r[s]);
        });
      };
    },
    function (e, t, n) {
      var r = n(21);
      (t.iframeResize = r),
        (t.iframeResizer = r),
        (t.iframeResizerContentWindow = n(22));
    },
    function (e, t, n) {
      var r, o, i;
      !(function (n) {
        if ("undefined" != typeof window) {
          var s,
            a = 0,
            c = !1,
            u = !1,
            l = "message".length,
            d = "[iFrameSizer]",
            f = d.length,
            h = null,
            p = window.requestAnimationFrame,
            g = { max: 1, scroll: 1, bodyScroll: 1, documentElementScroll: 1 },
            m = {},
            v = null,
            y = {
              autoResize: !0,
              bodyBackground: null,
              bodyMargin: null,
              bodyMarginV1: 8,
              bodyPadding: null,
              checkOrigin: !0,
              inPageLinks: !1,
              enablePublicMethods: !0,
              heightCalculationMethod: "bodyOffset",
              id: "iFrameResizer",
              interval: 32,
              log: !1,
              maxHeight: 1 / 0,
              maxWidth: 1 / 0,
              minHeight: 0,
              minWidth: 0,
              mouseEvents: !0,
              resizeFrom: "parent",
              scrolling: !1,
              sizeHeight: !0,
              sizeWidth: !1,
              warningTimeout: 5e3,
              tolerance: 0,
              widthCalculationMethod: "scroll",
              onClose: function () {
                return !0;
              },
              onClosed: function () {},
              onInit: function () {},
              onMessage: function () {
                S("onMessage function not defined");
              },
              onMouseEnter: function () {},
              onMouseLeave: function () {},
              onResized: function () {},
              onScroll: function () {
                return !0;
              },
            },
            b = {};
          window.jQuery &&
            ((s = window.jQuery).fn
              ? s.fn.iFrameResize ||
                (s.fn.iFrameResize = function (e) {
                  return this.filter("iframe")
                    .each(function (t, n) {
                      q(n, e);
                    })
                    .end();
                })
              : E("", "Unable to bind to jQuery, it is not fully loaded.")),
            (o = []),
            (i = "function" == typeof (r = U) ? r.apply(t, o) : r) === n ||
              (e.exports = i),
            (window.iFrameResize = window.iFrameResize || U());
        }
        function w() {
          return (
            window.MutationObserver ||
            window.WebKitMutationObserver ||
            window.MozMutationObserver
          );
        }
        function _(e, t, n) {
          e.addEventListener(t, n, !1);
        }
        function x(e, t, n) {
          e.removeEventListener(t, n, !1);
        }
        function T(e) {
          return (
            d +
            "[" +
            (function (e) {
              var t = "Host page: " + e;
              return (
                window.top !== window.self &&
                  (t =
                    window.parentIFrame && window.parentIFrame.getId
                      ? window.parentIFrame.getId() + ": " + e
                      : "Nested host page: " + e),
                t
              );
            })(e) +
            "]"
          );
        }
        function k(e) {
          return m[e] ? m[e].log : c;
        }
        function C(e, t) {
          I("log", e, t, k(e));
        }
        function E(e, t) {
          I("info", e, t, k(e));
        }
        function S(e, t) {
          I("warn", e, t, !0);
        }
        function I(e, t, n, r) {
          !0 === r && "object" == typeof window.console && console[e](T(t), n);
        }
        function M(e) {
          function t() {
            o("Height"),
              o("Width"),
              F(
                function () {
                  H(A), j(q), g("onResized", A);
                },
                A,
                "init"
              );
          }
          function n(e) {
            return "border-box" !== e.boxSizing
              ? 0
              : (e.paddingTop ? parseInt(e.paddingTop, 10) : 0) +
                  (e.paddingBottom ? parseInt(e.paddingBottom, 10) : 0);
          }
          function r(e) {
            return "border-box" !== e.boxSizing
              ? 0
              : (e.borderTopWidth ? parseInt(e.borderTopWidth, 10) : 0) +
                  (e.borderBottomWidth ? parseInt(e.borderBottomWidth, 10) : 0);
          }
          function o(e) {
            var t = Number(m[q]["max" + e]),
              n = Number(m[q]["min" + e]),
              r = e.toLowerCase(),
              o = Number(A[r]);
            C(q, "Checking " + r + " is in range " + n + "-" + t),
              o < n && ((o = n), C(q, "Set " + r + " to min value")),
              o > t && ((o = t), C(q, "Set " + r + " to max value")),
              (A[r] = "" + o);
          }
          function i(e) {
            return M.substr(M.indexOf(":") + l + e);
          }
          function s(e, t) {
            var n, r, o;
            (n = function () {
              var n, r;
              L(
                "Send Page Info",
                "pageInfo:" +
                  ((n = document.body.getBoundingClientRect()),
                  (r = A.iframe.getBoundingClientRect()),
                  JSON.stringify({
                    iframeHeight: r.height,
                    iframeWidth: r.width,
                    clientHeight: Math.max(
                      document.documentElement.clientHeight,
                      window.innerHeight || 0
                    ),
                    clientWidth: Math.max(
                      document.documentElement.clientWidth,
                      window.innerWidth || 0
                    ),
                    offsetTop: parseInt(r.top - n.top, 10),
                    offsetLeft: parseInt(r.left - n.left, 10),
                    scrollTop: window.pageYOffset,
                    scrollLeft: window.pageXOffset,
                    documentHeight: document.documentElement.clientHeight,
                    documentWidth: document.documentElement.clientWidth,
                    windowHeight: window.innerHeight,
                    windowWidth: window.innerWidth,
                  })),
                e,
                t
              );
            }),
              (r = 32),
              b[(o = t)] ||
                (b[o] = setTimeout(function () {
                  (b[o] = null), n();
                }, r));
          }
          function a(e) {
            var t = e.getBoundingClientRect();
            return (
              O(q),
              {
                x: Math.floor(Number(t.left) + Number(h.x)),
                y: Math.floor(Number(t.top) + Number(h.y)),
              }
            );
          }
          function c(e) {
            var t = e ? a(A.iframe) : { x: 0, y: 0 },
              n = { x: Number(A.width) + t.x, y: Number(A.height) + t.y };
            C(
              q,
              "Reposition requested from iFrame (offset x:" +
                t.x +
                " y:" +
                t.y +
                ")"
            ),
              window.top !== window.self
                ? window.parentIFrame
                  ? window.parentIFrame["scrollTo" + (e ? "Offset" : "")](
                      n.x,
                      n.y
                    )
                  : S(
                      q,
                      "Unable to scroll to requested position, window.parentIFrame not found"
                    )
                : ((h = n), u(), C(q, "--"));
          }
          function u() {
            !1 !== g("onScroll", h) ? j(q) : P();
          }
          function p(e) {
            var t = {};
            if (0 === Number(A.width) && 0 === Number(A.height)) {
              var n = i(9).split(":");
              t = { x: n[1], y: n[0] };
            } else t = { x: A.width, y: A.height };
            g(e, {
              iframe: A.iframe,
              screenX: Number(t.x),
              screenY: Number(t.y),
              type: A.type,
            });
          }
          function g(e, t) {
            return D(q, e, t);
          }
          var v,
            y,
            w,
            T,
            k,
            I,
            M = e.data,
            A = {},
            q = null;
          "[iFrameResizerChild]Ready" === M
            ? (function () {
                for (var e in m)
                  L("iFrame requested init", V(e), m[e].iframe, e);
              })()
            : d === ("" + M).substr(0, f) && M.substr(f).split(":")[0] in m
            ? ((w = M.substr(f).split(":")),
              (T = w[1] ? parseInt(w[1], 10) : 0),
              (k = m[w[0]] && m[w[0]].iframe),
              (I = getComputedStyle(k)),
              (A = {
                iframe: k,
                id: w[0],
                height: T + n(I) + r(I),
                width: w[2],
                type: w[3],
              }),
              (q = A.id),
              m[q] && (m[q].loaded = !0),
              (y = A.type in { true: 1, false: 1, undefined: 1 }) &&
                C(q, "Ignoring init message from meta parent page"),
              !y &&
                (function (e) {
                  var t = !0;
                  return (
                    m[e] ||
                      ((t = !1),
                      S(
                        A.type + " No settings for " + e + ". Message was: " + M
                      )),
                    t
                  );
                })(q) &&
                (C(q, "Received: " + M),
                (v = !0),
                null === A.iframe &&
                  (S(q, "IFrame (" + A.id + ") not found"), (v = !1)),
                v &&
                  (function () {
                    var t,
                      n = e.origin,
                      r = m[q] && m[q].checkOrigin;
                    if (
                      r &&
                      "" + n != "null" &&
                      !(r.constructor === Array
                        ? (function () {
                            var e = 0,
                              t = !1;
                            for (
                              C(
                                q,
                                "Checking connection is from allowed list of origins: " +
                                  r
                              );
                              e < r.length;
                              e++
                            )
                              if (r[e] === n) {
                                t = !0;
                                break;
                              }
                            return t;
                          })()
                        : ((t = m[q] && m[q].remoteHost),
                          C(q, "Checking connection is from: " + t),
                          n === t))
                    )
                      throw new Error(
                        "Unexpected message received from: " +
                          n +
                          " for " +
                          A.iframe.id +
                          ". Message was: " +
                          e.data +
                          ". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains."
                      );
                    return !0;
                  })() &&
                  (function () {
                    switch (
                      (m[q] && m[q].firstRun && m[q] && (m[q].firstRun = !1),
                      A.type)
                    ) {
                      case "close":
                        N(A.iframe);
                        break;
                      case "message":
                        (e = i(6)),
                          C(
                            q,
                            "onMessage passed: {iframe: " +
                              A.iframe.id +
                              ", message: " +
                              e +
                              "}"
                          ),
                          g("onMessage", {
                            iframe: A.iframe,
                            message: JSON.parse(e),
                          }),
                          C(q, "--");
                        break;
                      case "mouseenter":
                        p("onMouseEnter");
                        break;
                      case "mouseleave":
                        p("onMouseLeave");
                        break;
                      case "autoResize":
                        m[q].autoResize = JSON.parse(i(9));
                        break;
                      case "scrollTo":
                        c(!1);
                        break;
                      case "scrollToOffset":
                        c(!0);
                        break;
                      case "pageInfo":
                        s(m[q] && m[q].iframe, q),
                          (function () {
                            function e(e, r) {
                              function o() {
                                m[n] ? s(m[n].iframe, n) : t();
                              }
                              ["scroll", "resize"].forEach(function (t) {
                                C(n, e + t + " listener for sendPageInfo"),
                                  r(window, t, o);
                              });
                            }
                            function t() {
                              e("Remove ", x);
                            }
                            var n = q;
                            e("Add ", _), m[n] && (m[n].stopPageInfo = t);
                          })();
                        break;
                      case "pageInfoStop":
                        m[q] &&
                          m[q].stopPageInfo &&
                          (m[q].stopPageInfo(), delete m[q].stopPageInfo);
                        break;
                      case "inPageLink":
                        !(function (e) {
                          var t,
                            n = e.split("#")[1] || "",
                            r = decodeURIComponent(n),
                            o =
                              document.getElementById(r) ||
                              document.getElementsByName(r)[0];
                          o
                            ? ((t = a(o)),
                              C(
                                q,
                                "Moving to in page link (#" +
                                  n +
                                  ") at x: " +
                                  t.x +
                                  " y: " +
                                  t.y
                              ),
                              (h = { x: t.x, y: t.y }),
                              u(),
                              C(q, "--"))
                            : window.top !== window.self
                            ? window.parentIFrame
                              ? window.parentIFrame.moveToAnchor(n)
                              : C(
                                  q,
                                  "In page link #" +
                                    n +
                                    " not found and window.parentIFrame not found"
                                )
                            : C(q, "In page link #" + n + " not found");
                        })(i(9));
                        break;
                      case "reset":
                        R(A);
                        break;
                      case "init":
                        t(), g("onInit", A.iframe);
                        break;
                      default:
                        0 === Number(A.width) && 0 === Number(A.height)
                          ? S(
                              "Unsupported message received (" +
                                A.type +
                                "), this is likely due to the iframe containing a later version of iframe-resizer than the parent page"
                            )
                          : t();
                    }
                    var e;
                  })()))
            : E(q, "Ignored: " + M);
        }
        function D(e, t, n) {
          var r = null,
            o = null;
          if (m[e]) {
            if ("function" != typeof (r = m[e][t]))
              throw new TypeError(
                t + " on iFrame[" + e + "] is not a function"
              );
            o = r(n);
          }
          return o;
        }
        function A(e) {
          var t = e.id;
          delete m[t];
        }
        function N(e) {
          var t = e.id;
          if (!1 !== D(t, "onClose", t)) {
            C(t, "Removing iFrame: " + t);
            try {
              e.parentNode && e.parentNode.removeChild(e);
            } catch (e) {
              S(e);
            }
            D(t, "onClosed", t), C(t, "--"), A(e);
          } else C(t, "Close iframe cancelled by onClose event");
        }
        function O(e) {
          null === h &&
            C(
              e,
              "Get page position: " +
                (h = {
                  x:
                    window.pageXOffset !== n
                      ? window.pageXOffset
                      : document.documentElement.scrollLeft,
                  y:
                    window.pageYOffset !== n
                      ? window.pageYOffset
                      : document.documentElement.scrollTop,
                }).x +
                "," +
                h.y
            );
        }
        function j(e) {
          null !== h &&
            (window.scrollTo(h.x, h.y),
            C(e, "Set page position: " + h.x + "," + h.y),
            P());
        }
        function P() {
          h = null;
        }
        function R(e) {
          C(
            e.id,
            "Size reset requested by " +
              ("init" === e.type ? "host page" : "iFrame")
          ),
            O(e.id),
            F(
              function () {
                H(e), L("reset", "reset", e.iframe, e.id);
              },
              e,
              "reset"
            );
        }
        function H(e) {
          function t(t) {
            u ||
              "0" !== e[t] ||
              ((u = !0),
              C(r, "Hidden iFrame detected, creating visibility listener"),
              (function () {
                function e() {
                  function e(e) {
                    function t(t) {
                      return "0px" === (m[e] && m[e].iframe.style[t]);
                    }
                    function n(e) {
                      return null !== e.offsetParent;
                    }
                    m[e] &&
                      n(m[e].iframe) &&
                      (t("height") || t("width")) &&
                      L("Visibility change", "resize", m[e].iframe, e);
                  }
                  Object.keys(m).forEach(function (t) {
                    e(t);
                  });
                }
                function t(t) {
                  C(
                    "window",
                    "Mutation observed: " + t[0].target + " " + t[0].type
                  ),
                    z(e, 16);
                }
                function n() {
                  var e = document.querySelector("body"),
                    n = {
                      attributes: !0,
                      attributeOldValue: !1,
                      characterData: !0,
                      characterDataOldValue: !1,
                      childList: !0,
                      subtree: !0,
                    };
                  new r(t).observe(e, n);
                }
                var r = w();
                r && n();
              })());
          }
          function n(n) {
            !(function (t) {
              e.id
                ? ((e.iframe.style[t] = e[t] + "px"),
                  C(e.id, "IFrame (" + r + ") " + t + " set to " + e[t] + "px"))
                : C("undefined", "messageData id not set");
            })(n),
              t(n);
          }
          var r = e.iframe.id;
          m[r] &&
            (m[r].sizeHeight && n("height"), m[r].sizeWidth && n("width"));
        }
        function F(e, t, n) {
          n !== t.type && p && !window.jasmine
            ? (C(t.id, "Requesting animation frame"), p(e))
            : e();
        }
        function L(e, t, n, r, o) {
          var i,
            s = !1;
          (r = r || n.id),
            m[r] &&
              (n && "contentWindow" in n && null !== n.contentWindow
                ? ((i = m[r] && m[r].targetOrigin),
                  C(
                    r,
                    "[" +
                      e +
                      "] Sending msg to iframe[" +
                      r +
                      "] (" +
                      t +
                      ") targetOrigin: " +
                      i
                  ),
                  n.contentWindow.postMessage(d + t, i))
                : S(r, "[" + e + "] IFrame(" + r + ") not found"),
              o &&
                m[r] &&
                m[r].warningTimeout &&
                (m[r].msgTimeout = setTimeout(function () {
                  !m[r] ||
                    m[r].loaded ||
                    s ||
                    ((s = !0),
                    S(
                      r,
                      "IFrame has not responded within " +
                        m[r].warningTimeout / 1e3 +
                        " seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."
                    ));
                }, m[r].warningTimeout)));
        }
        function V(e) {
          return (
            e +
            ":" +
            m[e].bodyMarginV1 +
            ":" +
            m[e].sizeWidth +
            ":" +
            m[e].log +
            ":" +
            m[e].interval +
            ":" +
            m[e].enablePublicMethods +
            ":" +
            m[e].autoResize +
            ":" +
            m[e].bodyMargin +
            ":" +
            m[e].heightCalculationMethod +
            ":" +
            m[e].bodyBackground +
            ":" +
            m[e].bodyPadding +
            ":" +
            m[e].tolerance +
            ":" +
            m[e].inPageLinks +
            ":" +
            m[e].resizeFrom +
            ":" +
            m[e].widthCalculationMethod +
            ":" +
            m[e].mouseEvents
          );
        }
        function q(e, t) {
          function r(e) {
            var t = e.split("Callback");
            if (2 === t.length) {
              var n = "on" + t[0].charAt(0).toUpperCase() + t[0].slice(1);
              (this[n] = this[e]),
                delete this[e],
                S(
                  s,
                  "Deprecated: '" +
                    e +
                    "' has been renamed '" +
                    n +
                    "'. The old method will be removed in the next major version."
                );
            }
          }
          var o,
            i,
            s = (function (n) {
              var r;
              return (
                "" === n &&
                  ((e.id =
                    ((r = (t && t.id) || y.id + a++),
                    null !== document.getElementById(r) && (r += a++),
                    (n = r))),
                  (c = (t || {}).log),
                  C(n, "Added missing iframe ID: " + n + " (" + e.src + ")")),
                n
              );
            })(e.id);
          s in m && "iFrameResizer" in e
            ? S(s, "Ignored iFrame, already setup.")
            : (!(function (t) {
                var n;
                (t = t || {}),
                  (m[s] = {
                    firstRun: !0,
                    iframe: e,
                    remoteHost: e.src && e.src.split("/").slice(0, 3).join("/"),
                  }),
                  (function (e) {
                    if ("object" != typeof e)
                      throw new TypeError("Options is not an object");
                  })(t),
                  Object.keys(t).forEach(r, t),
                  (function (e) {
                    for (var t in y)
                      Object.prototype.hasOwnProperty.call(y, t) &&
                        (m[s][t] = Object.prototype.hasOwnProperty.call(e, t)
                          ? e[t]
                          : y[t]);
                  })(t),
                  m[s] &&
                    (m[s].targetOrigin =
                      !0 === m[s].checkOrigin
                        ? "" === (n = m[s].remoteHost) ||
                          null !==
                            n.match(/^(about:blank|javascript:|file:\/\/)/)
                          ? "*"
                          : n
                        : "*");
              })(t),
              (function () {
                switch (
                  (C(
                    s,
                    "IFrame scrolling " +
                      (m[s] && m[s].scrolling ? "enabled" : "disabled") +
                      " for " +
                      s
                  ),
                  (e.style.overflow =
                    !1 === (m[s] && m[s].scrolling) ? "hidden" : "auto"),
                  m[s] && m[s].scrolling)
                ) {
                  case "omit":
                    break;
                  case !0:
                    e.scrolling = "yes";
                    break;
                  case !1:
                    e.scrolling = "no";
                    break;
                  default:
                    e.scrolling = m[s] ? m[s].scrolling : "no";
                }
              })(),
              (function () {
                function t(t) {
                  var n = m[s][t];
                  1 / 0 !== n &&
                    0 !== n &&
                    ((e.style[t] = "number" == typeof n ? n + "px" : n),
                    C(s, "Set " + t + " = " + e.style[t]));
                }
                function n(e) {
                  if (m[s]["min" + e] > m[s]["max" + e])
                    throw new Error(
                      "Value for min" + e + " can not be greater than max" + e
                    );
                }
                n("Height"),
                  n("Width"),
                  t("maxHeight"),
                  t("minHeight"),
                  t("maxWidth"),
                  t("minWidth");
              })(),
              ("number" != typeof (m[s] && m[s].bodyMargin) &&
                "0" !== (m[s] && m[s].bodyMargin)) ||
                ((m[s].bodyMarginV1 = m[s].bodyMargin),
                (m[s].bodyMargin = m[s].bodyMargin + "px")),
              (o = V(s)),
              (i = w()) &&
                (function (t) {
                  e.parentNode &&
                    new t(function (t) {
                      t.forEach(function (t) {
                        Array.prototype.slice
                          .call(t.removedNodes)
                          .forEach(function (t) {
                            t === e && N(e);
                          });
                      });
                    }).observe(e.parentNode, { childList: !0 });
                })(i),
              _(e, "load", function () {
                var t, r;
                L("iFrame.onload", o, e, n, !0),
                  (t = m[s] && m[s].firstRun),
                  (r = m[s] && m[s].heightCalculationMethod in g),
                  !t &&
                    r &&
                    R({ iframe: e, height: 0, width: 0, type: "init" });
              }),
              L("init", o, e, n, !0),
              m[s] &&
                (m[s].iframe.iFrameResizer = {
                  close: N.bind(null, m[s].iframe),
                  removeListeners: A.bind(null, m[s].iframe),
                  resize: L.bind(null, "Window resize", "resize", m[s].iframe),
                  moveToAnchor: function (e) {
                    L("Move to anchor", "moveToAnchor:" + e, m[s].iframe, s);
                  },
                  sendMessage: function (e) {
                    L(
                      "Send Message",
                      "message:" + (e = JSON.stringify(e)),
                      m[s].iframe,
                      s
                    );
                  },
                }));
        }
        function z(e, t) {
          null === v &&
            (v = setTimeout(function () {
              (v = null), e();
            }, t));
        }
        function B() {
          "hidden" !== document.visibilityState &&
            (C("document", "Trigger event: Visiblity change"),
            z(function () {
              W("Tab Visable", "resize");
            }, 16));
        }
        function W(e, t) {
          Object.keys(m).forEach(function (n) {
            (function (e) {
              return (
                m[e] &&
                "parent" === m[e].resizeFrom &&
                m[e].autoResize &&
                !m[e].firstRun
              );
            })(n) && L(e, t, m[n].iframe, n);
          });
        }
        function $() {
          _(window, "message", M),
            _(window, "resize", function () {
              var e;
              C("window", "Trigger event: " + (e = "resize")),
                z(function () {
                  W("Window " + e, "resize");
                }, 16);
            }),
            _(document, "visibilitychange", B),
            _(document, "-webkit-visibilitychange", B);
        }
        function U() {
          function e(e, n) {
            n &&
              (!(function () {
                if (!n.tagName)
                  throw new TypeError("Object is not a valid DOM element");
                if ("IFRAME" !== n.tagName.toUpperCase())
                  throw new TypeError(
                    "Expected <IFRAME> tag, found <" + n.tagName + ">"
                  );
              })(),
              q(n, e),
              t.push(n));
          }
          var t;
          return (
            (function () {
              var e,
                t = ["moz", "webkit", "o", "ms"];
              for (e = 0; e < t.length && !p; e += 1)
                p = window[t[e] + "RequestAnimationFrame"];
              p
                ? (p = p.bind(window))
                : C("setup", "RequestAnimationFrame not supported");
            })(),
            $(),
            function (r, o) {
              switch (
                ((t = []),
                (function (e) {
                  e &&
                    e.enablePublicMethods &&
                    S(
                      "enablePublicMethods option has been removed, public methods are now always available in the iFrame"
                    );
                })(r),
                typeof o)
              ) {
                case "undefined":
                case "string":
                  Array.prototype.forEach.call(
                    document.querySelectorAll(o || "iframe"),
                    e.bind(n, r)
                  );
                  break;
                case "object":
                  e(r, o);
                  break;
                default:
                  throw new TypeError(
                    "Unexpected data type (" + typeof o + ")"
                  );
              }
              return t;
            }
          );
        }
      })();
    },
    function (e, t, n) {
      !(function (t) {
        if ("undefined" != typeof window) {
          var n = !0,
            r = "",
            o = 0,
            i = "",
            s = null,
            a = "",
            c = !1,
            u = { resize: 1, click: 1 },
            l = 128,
            d = !0,
            f = 1,
            h = "bodyOffset",
            p = h,
            g = !0,
            m = "",
            v = {},
            y = 32,
            b = null,
            w = !1,
            _ = !1,
            x = "[iFrameSizer]",
            T = x.length,
            k = "",
            C = { max: 1, min: 1, bodyScroll: 1, documentElementScroll: 1 },
            E = "child",
            S = window.parent,
            I = "*",
            M = 0,
            D = !1,
            A = null,
            N = 16,
            O = 1,
            j = "scroll",
            P = j,
            R = window,
            H = function () {
              ie("onMessage function not defined");
            },
            F = function () {},
            L = function () {},
            V = {
              height: function () {
                return (
                  ie("Custom height calculation function not defined"),
                  document.documentElement.offsetHeight
                );
              },
              width: function () {
                return (
                  ie("Custom width calculation function not defined"),
                  document.body.scrollWidth
                );
              },
            },
            q = {},
            z = !1;
          try {
            var B = Object.create(
              {},
              {
                passive: {
                  get: function () {
                    z = !0;
                  },
                },
              }
            );
            window.addEventListener("test", ee, B),
              window.removeEventListener("test", ee, B);
          } catch (e) {}
          var W,
            $,
            U,
            Z,
            Q,
            K,
            X,
            Y = {
              bodyOffset: function () {
                return (
                  document.body.offsetHeight +
                  me("marginTop") +
                  me("marginBottom")
                );
              },
              offset: function () {
                return Y.bodyOffset();
              },
              bodyScroll: function () {
                return document.body.scrollHeight;
              },
              custom: function () {
                return V.height();
              },
              documentElementOffset: function () {
                return document.documentElement.offsetHeight;
              },
              documentElementScroll: function () {
                return document.documentElement.scrollHeight;
              },
              max: function () {
                return Math.max.apply(null, ye(Y));
              },
              min: function () {
                return Math.min.apply(null, ye(Y));
              },
              grow: function () {
                return Y.max();
              },
              lowestElement: function () {
                return Math.max(
                  Y.bodyOffset() || Y.documentElementOffset(),
                  ve("bottom", we())
                );
              },
              taggedElement: function () {
                return be("bottom", "data-iframe-height");
              },
            },
            G = {
              bodyScroll: function () {
                return document.body.scrollWidth;
              },
              bodyOffset: function () {
                return document.body.offsetWidth;
              },
              custom: function () {
                return V.width();
              },
              documentElementScroll: function () {
                return document.documentElement.scrollWidth;
              },
              documentElementOffset: function () {
                return document.documentElement.offsetWidth;
              },
              scroll: function () {
                return Math.max(G.bodyScroll(), G.documentElementScroll());
              },
              max: function () {
                return Math.max.apply(null, ye(G));
              },
              min: function () {
                return Math.min.apply(null, ye(G));
              },
              rightMostElement: function () {
                return ve("right", we());
              },
              taggedElement: function () {
                return be("right", "data-iframe-width");
              },
            },
            J =
              ((W = _e),
              (Q = null),
              (K = 0),
              (X = function () {
                (K = Date.now()),
                  (Q = null),
                  (Z = W.apply($, U)),
                  Q || ($ = U = null);
              }),
              function () {
                var e = Date.now();
                K || (K = e);
                var t = N - (e - K);
                return (
                  ($ = this),
                  (U = arguments),
                  t <= 0 || t > N
                    ? (Q && (clearTimeout(Q), (Q = null)),
                      (K = e),
                      (Z = W.apply($, U)),
                      Q || ($ = U = null))
                    : Q || (Q = setTimeout(X, t)),
                  Z
                );
              });
          te(window, "message", function (t) {
            var n = {
              init: function () {
                (m = t.data),
                  (S = t.source),
                  se(),
                  (d = !1),
                  setTimeout(function () {
                    g = !1;
                  }, l);
              },
              reset: function () {
                g
                  ? oe("Page reset ignored by init")
                  : (oe("Page size reset by host page"), ke("resetPage"));
              },
              resize: function () {
                xe("resizeParent", "Parent window requested size check");
              },
              moveToAnchor: function () {
                v.findTarget(o());
              },
              inPageLink: function () {
                this.moveToAnchor();
              },
              pageInfo: function () {
                var e = o();
                oe("PageInfoFromParent called from parent: " + e),
                  L(JSON.parse(e)),
                  oe(" --");
              },
              message: function () {
                var e = o();
                oe("onMessage called from parent: " + e),
                  H(JSON.parse(e)),
                  oe(" --");
              },
            };
            function r() {
              return t.data.split("]")[1].split(":")[0];
            }
            function o() {
              return t.data.substr(t.data.indexOf(":") + 1);
            }
            function i() {
              return t.data.split(":")[2] in { true: 1, false: 1 };
            }
            function s() {
              var o = r();
              o in n
                ? n[o]()
                : (!e.exports && "iFrameResize" in window) ||
                  ("jQuery" in window &&
                    "iFrameResize" in window.jQuery.prototype) ||
                  i() ||
                  ie("Unexpected message (" + t.data + ")");
            }
            x === ("" + t.data).substr(0, T) &&
              (!1 === d
                ? s()
                : i()
                ? n.init()
                : oe(
                    'Ignored message of type "' +
                      r() +
                      '". Received before initialization.'
                  ));
          }),
            te(window, "readystatechange", Se),
            Se();
        }
        function ee() {}
        function te(e, t, n, r) {
          e.addEventListener(t, n, !!z && (r || {}));
        }
        function ne(e) {
          return e.charAt(0).toUpperCase() + e.slice(1);
        }
        function re(e) {
          return x + "[" + k + "] " + e;
        }
        function oe(e) {
          w && "object" == typeof window.console && console.log(re(e));
        }
        function ie(e) {
          "object" == typeof window.console && console.warn(re(e));
        }
        function se() {
          var e;
          !(function () {
            function e(e) {
              return "true" === e;
            }
            var s = m.substr(T).split(":");
            (k = s[0]),
              (o = t !== s[1] ? Number(s[1]) : o),
              (c = t !== s[2] ? e(s[2]) : c),
              (w = t !== s[3] ? e(s[3]) : w),
              (y = t !== s[4] ? Number(s[4]) : y),
              (n = t !== s[6] ? e(s[6]) : n),
              (i = s[7]),
              (p = t !== s[8] ? s[8] : p),
              (r = s[9]),
              (a = s[10]),
              (M = t !== s[11] ? Number(s[11]) : M),
              (v.enable = t !== s[12] && e(s[12])),
              (E = t !== s[13] ? s[13] : E),
              (P = t !== s[14] ? s[14] : P),
              (_ = t !== s[15] ? Boolean(s[15]) : _);
          })(),
            oe("Initialising iFrame (" + window.location.href + ")"),
            (function () {
              function e() {
                var e = window.iFrameResizer;
                oe("Reading data from page: " + JSON.stringify(e)),
                  Object.keys(e).forEach(ae, e),
                  (H = "onMessage" in e ? e.onMessage : H),
                  (F = "onReady" in e ? e.onReady : F),
                  (I = "targetOrigin" in e ? e.targetOrigin : I),
                  (p =
                    "heightCalculationMethod" in e
                      ? e.heightCalculationMethod
                      : p),
                  (P =
                    "widthCalculationMethod" in e
                      ? e.widthCalculationMethod
                      : P);
              }
              function t(e, t) {
                return (
                  "function" == typeof e &&
                    (oe("Setup custom " + t + "CalcMethod"),
                    (V[t] = e),
                    (e = "custom")),
                  e
                );
              }
              "iFrameResizer" in window &&
                Object === window.iFrameResizer.constructor &&
                (e(), (p = t(p, "height")), (P = t(P, "width")));
              oe("TargetOrigin for parent set to: " + I);
            })(),
            (function () {
              t === i && (i = o + "px");
              ce(
                "margin",
                (function (e, t) {
                  -1 !== t.indexOf("-") &&
                    (ie("Negative CSS value ignored for " + e), (t = ""));
                  return t;
                })("margin", i)
              );
            })(),
            ce("background", r),
            ce("padding", a),
            ((e = document.createElement("div")).style.clear = "both"),
            (e.style.display = "block"),
            (e.style.height = "0"),
            document.body.appendChild(e),
            fe(),
            he(),
            (document.documentElement.style.height = ""),
            (document.body.style.height = ""),
            oe('HTML & body height set to "auto"'),
            oe("Enable public methods"),
            (R.parentIFrame = {
              autoResize: function (e) {
                return (
                  !0 === e && !1 === n
                    ? ((n = !0), pe())
                    : !1 === e &&
                      !0 === n &&
                      ((n = !1),
                      le("remove"),
                      null !== s && s.disconnect(),
                      clearInterval(b)),
                  Ee(0, 0, "autoResize", JSON.stringify(n)),
                  n
                );
              },
              close: function () {
                Ee(0, 0, "close");
              },
              getId: function () {
                return k;
              },
              getPageInfo: function (e) {
                "function" == typeof e
                  ? ((L = e), Ee(0, 0, "pageInfo"))
                  : ((L = function () {}), Ee(0, 0, "pageInfoStop"));
              },
              moveToAnchor: function (e) {
                v.findTarget(e);
              },
              reset: function () {
                Ce("parentIFrame.reset");
              },
              scrollTo: function (e, t) {
                Ee(t, e, "scrollTo");
              },
              scrollToOffset: function (e, t) {
                Ee(t, e, "scrollToOffset");
              },
              sendMessage: function (e, t) {
                Ee(0, 0, "message", JSON.stringify(e), t);
              },
              setHeightCalculationMethod: function (e) {
                (p = e), fe();
              },
              setWidthCalculationMethod: function (e) {
                (P = e), he();
              },
              setTargetOrigin: function (e) {
                oe("Set targetOrigin: " + e), (I = e);
              },
              size: function (e, t) {
                xe(
                  "size",
                  "parentIFrame.size(" + (e || "") + (t ? "," + t : "") + ")",
                  e,
                  t
                );
              },
            }),
            (function () {
              if (!0 !== _) return;
              function e(e) {
                Ee(0, 0, e.type, e.screenY + ":" + e.screenX);
              }
              function t(t, n) {
                oe("Add event listener: " + n), te(window.document, t, e);
              }
              t("mouseenter", "Mouse Enter"), t("mouseleave", "Mouse Leave");
            })(),
            pe(),
            (v = (function () {
              function e() {
                return {
                  x:
                    window.pageXOffset !== t
                      ? window.pageXOffset
                      : document.documentElement.scrollLeft,
                  y:
                    window.pageYOffset !== t
                      ? window.pageYOffset
                      : document.documentElement.scrollTop,
                };
              }
              function n(t) {
                var n = t.getBoundingClientRect(),
                  r = e();
                return {
                  x: parseInt(n.left, 10) + parseInt(r.x, 10),
                  y: parseInt(n.top, 10) + parseInt(r.y, 10),
                };
              }
              function r(e) {
                function r(e) {
                  var t = n(e);
                  oe(
                    "Moving to in page link (#" +
                      o +
                      ") at x: " +
                      t.x +
                      " y: " +
                      t.y
                  ),
                    Ee(t.y, t.x, "scrollToOffset");
                }
                var o = e.split("#")[1] || e,
                  i = decodeURIComponent(o),
                  s =
                    document.getElementById(i) ||
                    document.getElementsByName(i)[0];
                t !== s
                  ? r(s)
                  : (oe(
                      "In page link (#" +
                        o +
                        ") not found in iFrame, so sending to parent"
                    ),
                    Ee(0, 0, "inPageLink", "#" + o));
              }
              function o() {
                var e = window.location.hash,
                  t = window.location.href;
                "" !== e && "#" !== e && r(t);
              }
              function i() {
                function e(e) {
                  function t(e) {
                    e.preventDefault(), r(this.getAttribute("href"));
                  }
                  "#" !== e.getAttribute("href") && te(e, "click", t);
                }
                Array.prototype.forEach.call(
                  document.querySelectorAll('a[href^="#"]'),
                  e
                );
              }
              function s() {
                te(window, "hashchange", o);
              }
              function a() {
                setTimeout(o, l);
              }
              function c() {
                Array.prototype.forEach && document.querySelectorAll
                  ? (oe("Setting up location.hash handlers"), i(), s(), a())
                  : ie(
                      "In page linking not fully supported in this browser! (See README.md for IE8 workaround)"
                    );
              }
              v.enable ? c() : oe("In page linking not enabled");
              return { findTarget: r };
            })()),
            xe("init", "Init message from host page"),
            F();
        }
        function ae(e) {
          var t = e.split("Callback");
          if (2 === t.length) {
            var n = "on" + t[0].charAt(0).toUpperCase() + t[0].slice(1);
            (this[n] = this[e]),
              delete this[e],
              ie(
                "Deprecated: '" +
                  e +
                  "' has been renamed '" +
                  n +
                  "'. The old method will be removed in the next major version."
              );
          }
        }
        function ce(e, n) {
          t !== n &&
            "" !== n &&
            "null" !== n &&
            ((document.body.style[e] = n),
            oe("Body " + e + ' set to "' + n + '"'));
        }
        function ue(e) {
          var t = {
            add: function (t) {
              function n() {
                xe(e.eventName, e.eventType);
              }
              (q[t] = n), te(window, t, n, { passive: !0 });
            },
            remove: function (e) {
              var t,
                n,
                r,
                o = q[e];
              delete q[e],
                (t = window),
                (n = e),
                (r = o),
                t.removeEventListener(n, r, !1);
            },
          };
          e.eventNames && Array.prototype.map
            ? ((e.eventName = e.eventNames[0]), e.eventNames.map(t[e.method]))
            : t[e.method](e.eventName),
            oe(ne(e.method) + " event listener: " + e.eventType);
        }
        function le(e) {
          ue({
            method: e,
            eventType: "Animation Start",
            eventNames: ["animationstart", "webkitAnimationStart"],
          }),
            ue({
              method: e,
              eventType: "Animation Iteration",
              eventNames: ["animationiteration", "webkitAnimationIteration"],
            }),
            ue({
              method: e,
              eventType: "Animation End",
              eventNames: ["animationend", "webkitAnimationEnd"],
            }),
            ue({ method: e, eventType: "Input", eventName: "input" }),
            ue({ method: e, eventType: "Mouse Up", eventName: "mouseup" }),
            ue({ method: e, eventType: "Mouse Down", eventName: "mousedown" }),
            ue({
              method: e,
              eventType: "Orientation Change",
              eventName: "orientationchange",
            }),
            ue({
              method: e,
              eventType: "Print",
              eventName: ["afterprint", "beforeprint"],
            }),
            ue({
              method: e,
              eventType: "Ready State Change",
              eventName: "readystatechange",
            }),
            ue({
              method: e,
              eventType: "Touch Start",
              eventName: "touchstart",
            }),
            ue({ method: e, eventType: "Touch End", eventName: "touchend" }),
            ue({
              method: e,
              eventType: "Touch Cancel",
              eventName: "touchcancel",
            }),
            ue({
              method: e,
              eventType: "Transition Start",
              eventNames: [
                "transitionstart",
                "webkitTransitionStart",
                "MSTransitionStart",
                "oTransitionStart",
                "otransitionstart",
              ],
            }),
            ue({
              method: e,
              eventType: "Transition Iteration",
              eventNames: [
                "transitioniteration",
                "webkitTransitionIteration",
                "MSTransitionIteration",
                "oTransitionIteration",
                "otransitioniteration",
              ],
            }),
            ue({
              method: e,
              eventType: "Transition End",
              eventNames: [
                "transitionend",
                "webkitTransitionEnd",
                "MSTransitionEnd",
                "oTransitionEnd",
                "otransitionend",
              ],
            }),
            "child" === E &&
              ue({
                method: e,
                eventType: "IFrame Resized",
                eventName: "resize",
              });
        }
        function de(e, t, n, r) {
          return (
            t !== e &&
              (e in n ||
                (ie(
                  e + " is not a valid option for " + r + "CalculationMethod."
                ),
                (e = t)),
              oe(r + ' calculation method set to "' + e + '"')),
            e
          );
        }
        function fe() {
          p = de(p, h, Y, "height");
        }
        function he() {
          P = de(P, j, G, "width");
        }
        function pe() {
          var e;
          !0 === n
            ? (le("add"),
              (e = 0 > y),
              window.MutationObserver || window.WebKitMutationObserver
                ? e
                  ? ge()
                  : (s = (function () {
                      function e(e) {
                        function t(e) {
                          !1 === e.complete &&
                            (oe("Attach listeners to " + e.src),
                            e.addEventListener("load", o, !1),
                            e.addEventListener("error", i, !1),
                            c.push(e));
                        }
                        "attributes" === e.type && "src" === e.attributeName
                          ? t(e.target)
                          : "childList" === e.type &&
                            Array.prototype.forEach.call(
                              e.target.querySelectorAll("img"),
                              t
                            );
                      }
                      function t(e) {
                        c.splice(c.indexOf(e), 1);
                      }
                      function n(e) {
                        oe("Remove listeners from " + e.src),
                          e.removeEventListener("load", o, !1),
                          e.removeEventListener("error", i, !1),
                          t(e);
                      }
                      function r(e, t, r) {
                        n(e.target), xe(t, r + ": " + e.target.src);
                      }
                      function o(e) {
                        r(e, "imageLoad", "Image loaded");
                      }
                      function i(e) {
                        r(e, "imageLoadFailed", "Image load failed");
                      }
                      function s(t) {
                        xe(
                          "mutationObserver",
                          "mutationObserver: " + t[0].target + " " + t[0].type
                        ),
                          t.forEach(e);
                      }
                      function a() {
                        var e = document.querySelector("body"),
                          t = {
                            attributes: !0,
                            attributeOldValue: !1,
                            characterData: !0,
                            characterDataOldValue: !1,
                            childList: !0,
                            subtree: !0,
                          };
                        return (
                          (l = new u(s)),
                          oe("Create body MutationObserver"),
                          l.observe(e, t),
                          l
                        );
                      }
                      var c = [],
                        u =
                          window.MutationObserver ||
                          window.WebKitMutationObserver,
                        l = a();
                      return {
                        disconnect: function () {
                          "disconnect" in l &&
                            (oe("Disconnect body MutationObserver"),
                            l.disconnect(),
                            c.forEach(n));
                        },
                      };
                    })())
                : (oe("MutationObserver not supported in this browser!"), ge()))
            : oe("Auto Resize disabled");
        }
        function ge() {
          0 !== y &&
            (oe("setInterval: " + y + "ms"),
            (b = setInterval(function () {
              xe("interval", "setInterval: " + y);
            }, Math.abs(y))));
        }
        function me(e, t) {
          var n = 0;
          return (
            (t = t || document.body),
            (n =
              null !== (n = document.defaultView.getComputedStyle(t, null))
                ? n[e]
                : 0),
            parseInt(n, 10)
          );
        }
        function ve(e, t) {
          for (
            var n = t.length, r = 0, o = 0, i = ne(e), s = Date.now(), a = 0;
            a < n;
            a++
          )
            (r = t[a].getBoundingClientRect()[e] + me("margin" + i, t[a])) >
              o && (o = r);
          return (
            (s = Date.now() - s),
            oe("Parsed " + n + " HTML elements"),
            oe("Element position calculated in " + s + "ms"),
            (function (e) {
              e > N / 2 &&
                oe("Event throttle increased to " + (N = 2 * e) + "ms");
            })(s),
            o
          );
        }
        function ye(e) {
          return [
            e.bodyOffset(),
            e.bodyScroll(),
            e.documentElementOffset(),
            e.documentElementScroll(),
          ];
        }
        function be(e, t) {
          var n = document.querySelectorAll("[" + t + "]");
          return (
            0 === n.length &&
              (ie("No tagged elements (" + t + ") found on page"),
              document.querySelectorAll("body *")),
            ve(e, n)
          );
        }
        function we() {
          return document.querySelectorAll("body *");
        }
        function _e(e, n, r, o) {
          var i, s;
          !(function () {
            function e(e, t) {
              return !(Math.abs(e - t) <= M);
            }
            return (
              (i = t !== r ? r : Y[p]()),
              (s = t !== o ? o : G[P]()),
              e(f, i) || (c && e(O, s))
            );
          })() && "init" !== e
            ? !(e in { init: 1, interval: 1, size: 1 }) &&
              (p in C || (c && P in C))
              ? Ce(n)
              : e in { interval: 1 } || oe("No change in size detected")
            : (Te(), Ee((f = i), (O = s), e));
        }
        function xe(e, t, n, r) {
          D && e in u
            ? oe("Trigger event cancelled: " + e)
            : (e in { reset: 1, resetPage: 1, init: 1 } ||
                oe("Trigger event: " + t),
              "init" === e ? _e(e, t, n, r) : J(e, t, n, r));
        }
        function Te() {
          D || ((D = !0), oe("Trigger event lock on")),
            clearTimeout(A),
            (A = setTimeout(function () {
              (D = !1), oe("Trigger event lock off"), oe("--");
            }, l));
        }
        function ke(e) {
          (f = Y[p]()), (O = G[P]()), Ee(f, O, e);
        }
        function Ce(e) {
          var t = p;
          (p = h), oe("Reset trigger event: " + e), Te(), ke("reset"), (p = t);
        }
        function Ee(e, n, r, o, i) {
          var s;
          t === i ? (i = I) : oe("Message targetOrigin: " + i),
            oe(
              "Sending message to host page (" +
                (s =
                  k + ":" + e + ":" + n + ":" + r + (t !== o ? ":" + o : "")) +
                ")"
            ),
            S.postMessage(x + s, i);
        }
        function Se() {
          "loading" !== document.readyState &&
            window.parent.postMessage("[iFrameResizerChild]Ready", "*");
        }
      })();
    },
    function (e, t, n) {
      var r;
      !(function (t, n) {
        "use strict";
        "object" == typeof e.exports
          ? (e.exports = t.document
              ? n(t, !0)
              : function (e) {
                  if (!e.document)
                    throw new Error("jQuery requires a window with a document");
                  return n(e);
                })
          : n(t);
      })("undefined" != typeof window ? window : this, function (n, o) {
        "use strict";
        var i = [],
          s = Object.getPrototypeOf,
          a = i.slice,
          c = i.flat
            ? function (e) {
                return i.flat.call(e);
              }
            : function (e) {
                return i.concat.apply([], e);
              },
          u = i.push,
          l = i.indexOf,
          d = {},
          f = d.toString,
          h = d.hasOwnProperty,
          p = h.toString,
          g = p.call(Object),
          m = {},
          v = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType;
          },
          y = function (e) {
            return null != e && e === e.window;
          },
          b = n.document,
          w = { type: !0, src: !0, nonce: !0, noModule: !0 };
        function _(e, t, n) {
          var r,
            o,
            i = (n = n || b).createElement("script");
          if (((i.text = e), t))
            for (r in w)
              (o = t[r] || (t.getAttribute && t.getAttribute(r))) &&
                i.setAttribute(r, o);
          n.head.appendChild(i).parentNode.removeChild(i);
        }
        function x(e) {
          return null == e
            ? e + ""
            : "object" == typeof e || "function" == typeof e
            ? d[f.call(e)] || "object"
            : typeof e;
        }
        var T = "3.5.1",
          k = function (e, t) {
            return new k.fn.init(e, t);
          };
        function C(e) {
          var t = !!e && "length" in e && e.length,
            n = x(e);
          return (
            !v(e) &&
            !y(e) &&
            ("array" === n ||
              0 === t ||
              ("number" == typeof t && t > 0 && t - 1 in e))
          );
        }
        (k.fn = k.prototype =
          {
            jquery: T,
            constructor: k,
            length: 0,
            toArray: function () {
              return a.call(this);
            },
            get: function (e) {
              return null == e
                ? a.call(this)
                : e < 0
                ? this[e + this.length]
                : this[e];
            },
            pushStack: function (e) {
              var t = k.merge(this.constructor(), e);
              return (t.prevObject = this), t;
            },
            each: function (e) {
              return k.each(this, e);
            },
            map: function (e) {
              return this.pushStack(
                k.map(this, function (t, n) {
                  return e.call(t, n, t);
                })
              );
            },
            slice: function () {
              return this.pushStack(a.apply(this, arguments));
            },
            first: function () {
              return this.eq(0);
            },
            last: function () {
              return this.eq(-1);
            },
            even: function () {
              return this.pushStack(
                k.grep(this, function (e, t) {
                  return (t + 1) % 2;
                })
              );
            },
            odd: function () {
              return this.pushStack(
                k.grep(this, function (e, t) {
                  return t % 2;
                })
              );
            },
            eq: function (e) {
              var t = this.length,
                n = +e + (e < 0 ? t : 0);
              return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
            },
            end: function () {
              return this.prevObject || this.constructor();
            },
            push: u,
            sort: i.sort,
            splice: i.splice,
          }),
          (k.extend = k.fn.extend =
            function () {
              var e,
                t,
                n,
                r,
                o,
                i,
                s = arguments[0] || {},
                a = 1,
                c = arguments.length,
                u = !1;
              for (
                "boolean" == typeof s &&
                  ((u = s), (s = arguments[a] || {}), a++),
                  "object" == typeof s || v(s) || (s = {}),
                  a === c && ((s = this), a--);
                a < c;
                a++
              )
                if (null != (e = arguments[a]))
                  for (t in e)
                    (r = e[t]),
                      "__proto__" !== t &&
                        s !== r &&
                        (u &&
                        r &&
                        (k.isPlainObject(r) || (o = Array.isArray(r)))
                          ? ((n = s[t]),
                            (i =
                              o && !Array.isArray(n)
                                ? []
                                : o || k.isPlainObject(n)
                                ? n
                                : {}),
                            (o = !1),
                            (s[t] = k.extend(u, i, r)))
                          : void 0 !== r && (s[t] = r));
              return s;
            }),
          k.extend({
            expando: "jQuery" + (T + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
              throw new Error(e);
            },
            noop: function () {},
            isPlainObject: function (e) {
              var t, n;
              return (
                !(!e || "[object Object]" !== f.call(e)) &&
                (!(t = s(e)) ||
                  ("function" ==
                    typeof (n = h.call(t, "constructor") && t.constructor) &&
                    p.call(n) === g))
              );
            },
            isEmptyObject: function (e) {
              var t;
              for (t in e) return !1;
              return !0;
            },
            globalEval: function (e, t, n) {
              _(e, { nonce: t && t.nonce }, n);
            },
            each: function (e, t) {
              var n,
                r = 0;
              if (C(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
              else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
              return e;
            },
            makeArray: function (e, t) {
              var n = t || [];
              return (
                null != e &&
                  (C(Object(e))
                    ? k.merge(n, "string" == typeof e ? [e] : e)
                    : u.call(n, e)),
                n
              );
            },
            inArray: function (e, t, n) {
              return null == t ? -1 : l.call(t, e, n);
            },
            merge: function (e, t) {
              for (var n = +t.length, r = 0, o = e.length; r < n; r++)
                e[o++] = t[r];
              return (e.length = o), e;
            },
            grep: function (e, t, n) {
              for (var r = [], o = 0, i = e.length, s = !n; o < i; o++)
                !t(e[o], o) !== s && r.push(e[o]);
              return r;
            },
            map: function (e, t, n) {
              var r,
                o,
                i = 0,
                s = [];
              if (C(e))
                for (r = e.length; i < r; i++)
                  null != (o = t(e[i], i, n)) && s.push(o);
              else for (i in e) null != (o = t(e[i], i, n)) && s.push(o);
              return c(s);
            },
            guid: 1,
            support: m,
          }),
          "function" == typeof Symbol &&
            (k.fn[Symbol.iterator] = i[Symbol.iterator]),
          k.each(
            "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
              " "
            ),
            function (e, t) {
              d["[object " + t + "]"] = t.toLowerCase();
            }
          );
        var E = (function (e) {
          var t,
            n,
            r,
            o,
            i,
            s,
            a,
            c,
            u,
            l,
            d,
            f,
            h,
            p,
            g,
            m,
            v,
            y,
            b,
            w = "sizzle" + 1 * new Date(),
            _ = e.document,
            x = 0,
            T = 0,
            k = ce(),
            C = ce(),
            E = ce(),
            S = ce(),
            I = function (e, t) {
              return e === t && (d = !0), 0;
            },
            M = {}.hasOwnProperty,
            D = [],
            A = D.pop,
            N = D.push,
            O = D.push,
            j = D.slice,
            P = function (e, t) {
              for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t) return n;
              return -1;
            },
            R =
              "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            H = "[\\x20\\t\\r\\n\\f]",
            F =
              "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            L =
              "\\[[\\x20\\t\\r\\n\\f]*(" +
              F +
              ")(?:" +
              H +
              "*([*^$|!~]?=)" +
              H +
              "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
              F +
              "))|)" +
              H +
              "*\\]",
            V =
              ":(" +
              F +
              ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
              L +
              ")*)|.*)\\)|)",
            q = new RegExp(H + "+", "g"),
            z = new RegExp(
              "^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$",
              "g"
            ),
            B = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),
            W = new RegExp(
              "^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"
            ),
            $ = new RegExp(H + "|>"),
            U = new RegExp(V),
            Z = new RegExp("^" + F + "$"),
            Q = {
              ID: new RegExp("^#(" + F + ")"),
              CLASS: new RegExp("^\\.(" + F + ")"),
              TAG: new RegExp("^(" + F + "|[*])"),
              ATTR: new RegExp("^" + L),
              PSEUDO: new RegExp("^" + V),
              CHILD: new RegExp(
                "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)",
                "i"
              ),
              bool: new RegExp("^(?:" + R + ")$", "i"),
              needsContext: new RegExp(
                "^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)",
                "i"
              ),
            },
            K = /HTML$/i,
            X = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            G = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp(
              "\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])",
              "g"
            ),
            ne = function (e, t) {
              var n = "0x" + e.slice(1) - 65536;
              return (
                t ||
                (n < 0
                  ? String.fromCharCode(n + 65536)
                  : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
              );
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            oe = function (e, t) {
              return t
                ? "\0" === e
                  ? "ï¿½"
                  : e.slice(0, -1) +
                    "\\" +
                    e.charCodeAt(e.length - 1).toString(16) +
                    " "
                : "\\" + e;
            },
            ie = function () {
              f();
            },
            se = we(
              function (e) {
                return (
                  !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                );
              },
              { dir: "parentNode", next: "legend" }
            );
          try {
            O.apply((D = j.call(_.childNodes)), _.childNodes),
              D[_.childNodes.length].nodeType;
          } catch (e) {
            O = {
              apply: D.length
                ? function (e, t) {
                    N.apply(e, j.call(t));
                  }
                : function (e, t) {
                    for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                    e.length = n - 1;
                  },
            };
          }
          function ae(e, t, r, o) {
            var i,
              a,
              u,
              l,
              d,
              p,
              v,
              y = t && t.ownerDocument,
              _ = t ? t.nodeType : 9;
            if (
              ((r = r || []),
              "string" != typeof e || !e || (1 !== _ && 9 !== _ && 11 !== _))
            )
              return r;
            if (!o && (f(t), (t = t || h), g)) {
              if (11 !== _ && (d = J.exec(e)))
                if ((i = d[1])) {
                  if (9 === _) {
                    if (!(u = t.getElementById(i))) return r;
                    if (u.id === i) return r.push(u), r;
                  } else if (
                    y &&
                    (u = y.getElementById(i)) &&
                    b(t, u) &&
                    u.id === i
                  )
                    return r.push(u), r;
                } else {
                  if (d[2]) return O.apply(r, t.getElementsByTagName(e)), r;
                  if (
                    (i = d[3]) &&
                    n.getElementsByClassName &&
                    t.getElementsByClassName
                  )
                    return O.apply(r, t.getElementsByClassName(i)), r;
                }
              if (
                n.qsa &&
                !S[e + " "] &&
                (!m || !m.test(e)) &&
                (1 !== _ || "object" !== t.nodeName.toLowerCase())
              ) {
                if (((v = e), (y = t), 1 === _ && ($.test(e) || W.test(e)))) {
                  for (
                    ((y = (ee.test(e) && ve(t.parentNode)) || t) === t &&
                      n.scope) ||
                      ((l = t.getAttribute("id"))
                        ? (l = l.replace(re, oe))
                        : t.setAttribute("id", (l = w))),
                      a = (p = s(e)).length;
                    a--;

                  )
                    p[a] = (l ? "#" + l : ":scope") + " " + be(p[a]);
                  v = p.join(",");
                }
                try {
                  return O.apply(r, y.querySelectorAll(v)), r;
                } catch (t) {
                  S(e, !0);
                } finally {
                  l === w && t.removeAttribute("id");
                }
              }
            }
            return c(e.replace(z, "$1"), t, r, o);
          }
          function ce() {
            var e = [];
            return function t(n, o) {
              return (
                e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                (t[n + " "] = o)
              );
            };
          }
          function ue(e) {
            return (e[w] = !0), e;
          }
          function le(e) {
            var t = h.createElement("fieldset");
            try {
              return !!e(t);
            } catch (e) {
              return !1;
            } finally {
              t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
          }
          function de(e, t) {
            for (var n = e.split("|"), o = n.length; o--; )
              r.attrHandle[n[o]] = t;
          }
          function fe(e, t) {
            var n = t && e,
              r =
                n &&
                1 === e.nodeType &&
                1 === t.nodeType &&
                e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
            return e ? 1 : -1;
          }
          function he(e) {
            return function (t) {
              return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
          }
          function pe(e) {
            return function (t) {
              var n = t.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && t.type === e;
            };
          }
          function ge(e) {
            return function (t) {
              return "form" in t
                ? t.parentNode && !1 === t.disabled
                  ? "label" in t
                    ? "label" in t.parentNode
                      ? t.parentNode.disabled === e
                      : t.disabled === e
                    : t.isDisabled === e || (t.isDisabled !== !e && se(t) === e)
                  : t.disabled === e
                : "label" in t && t.disabled === e;
            };
          }
          function me(e) {
            return ue(function (t) {
              return (
                (t = +t),
                ue(function (n, r) {
                  for (var o, i = e([], n.length, t), s = i.length; s--; )
                    n[(o = i[s])] && (n[o] = !(r[o] = n[o]));
                })
              );
            });
          }
          function ve(e) {
            return e && void 0 !== e.getElementsByTagName && e;
          }
          for (t in ((n = ae.support = {}),
          (i = ae.isXML =
            function (e) {
              var t = e.namespaceURI,
                n = (e.ownerDocument || e).documentElement;
              return !K.test(t || (n && n.nodeName) || "HTML");
            }),
          (f = ae.setDocument =
            function (e) {
              var t,
                o,
                s = e ? e.ownerDocument || e : _;
              return s != h && 9 === s.nodeType && s.documentElement
                ? ((p = (h = s).documentElement),
                  (g = !i(h)),
                  _ != h &&
                    (o = h.defaultView) &&
                    o.top !== o &&
                    (o.addEventListener
                      ? o.addEventListener("unload", ie, !1)
                      : o.attachEvent && o.attachEvent("onunload", ie)),
                  (n.scope = le(function (e) {
                    return (
                      p.appendChild(e).appendChild(h.createElement("div")),
                      void 0 !== e.querySelectorAll &&
                        !e.querySelectorAll(":scope fieldset div").length
                    );
                  })),
                  (n.attributes = le(function (e) {
                    return (e.className = "i"), !e.getAttribute("className");
                  })),
                  (n.getElementsByTagName = le(function (e) {
                    return (
                      e.appendChild(h.createComment("")),
                      !e.getElementsByTagName("*").length
                    );
                  })),
                  (n.getElementsByClassName = G.test(h.getElementsByClassName)),
                  (n.getById = le(function (e) {
                    return (
                      (p.appendChild(e).id = w),
                      !h.getElementsByName || !h.getElementsByName(w).length
                    );
                  })),
                  n.getById
                    ? ((r.filter.ID = function (e) {
                        var t = e.replace(te, ne);
                        return function (e) {
                          return e.getAttribute("id") === t;
                        };
                      }),
                      (r.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && g) {
                          var n = t.getElementById(e);
                          return n ? [n] : [];
                        }
                      }))
                    : ((r.filter.ID = function (e) {
                        var t = e.replace(te, ne);
                        return function (e) {
                          var n =
                            void 0 !== e.getAttributeNode &&
                            e.getAttributeNode("id");
                          return n && n.value === t;
                        };
                      }),
                      (r.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && g) {
                          var n,
                            r,
                            o,
                            i = t.getElementById(e);
                          if (i) {
                            if ((n = i.getAttributeNode("id")) && n.value === e)
                              return [i];
                            for (
                              o = t.getElementsByName(e), r = 0;
                              (i = o[r++]);

                            )
                              if (
                                (n = i.getAttributeNode("id")) &&
                                n.value === e
                              )
                                return [i];
                          }
                          return [];
                        }
                      })),
                  (r.find.TAG = n.getElementsByTagName
                    ? function (e, t) {
                        return void 0 !== t.getElementsByTagName
                          ? t.getElementsByTagName(e)
                          : n.qsa
                          ? t.querySelectorAll(e)
                          : void 0;
                      }
                    : function (e, t) {
                        var n,
                          r = [],
                          o = 0,
                          i = t.getElementsByTagName(e);
                        if ("*" === e) {
                          for (; (n = i[o++]); ) 1 === n.nodeType && r.push(n);
                          return r;
                        }
                        return i;
                      }),
                  (r.find.CLASS =
                    n.getElementsByClassName &&
                    function (e, t) {
                      if (void 0 !== t.getElementsByClassName && g)
                        return t.getElementsByClassName(e);
                    }),
                  (v = []),
                  (m = []),
                  (n.qsa = G.test(h.querySelectorAll)) &&
                    (le(function (e) {
                      var t;
                      (p.appendChild(e).innerHTML =
                        "<a id='" +
                        w +
                        "'></a><select id='" +
                        w +
                        "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                        e.querySelectorAll("[msallowcapture^='']").length &&
                          m.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
                        e.querySelectorAll("[selected]").length ||
                          m.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|" + R + ")"),
                        e.querySelectorAll("[id~=" + w + "-]").length ||
                          m.push("~="),
                        (t = h.createElement("input")).setAttribute("name", ""),
                        e.appendChild(t),
                        e.querySelectorAll("[name='']").length ||
                          m.push(
                            "\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"
                          ),
                        e.querySelectorAll(":checked").length ||
                          m.push(":checked"),
                        e.querySelectorAll("a#" + w + "+*").length ||
                          m.push(".#.+[+~]"),
                        e.querySelectorAll("\\\f"),
                        m.push("[\\r\\n\\f]");
                    }),
                    le(function (e) {
                      e.innerHTML =
                        "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                      var t = h.createElement("input");
                      t.setAttribute("type", "hidden"),
                        e.appendChild(t).setAttribute("name", "D"),
                        e.querySelectorAll("[name=d]").length &&
                          m.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="),
                        2 !== e.querySelectorAll(":enabled").length &&
                          m.push(":enabled", ":disabled"),
                        (p.appendChild(e).disabled = !0),
                        2 !== e.querySelectorAll(":disabled").length &&
                          m.push(":enabled", ":disabled"),
                        e.querySelectorAll("*,:x"),
                        m.push(",.*:");
                    })),
                  (n.matchesSelector = G.test(
                    (y =
                      p.matches ||
                      p.webkitMatchesSelector ||
                      p.mozMatchesSelector ||
                      p.oMatchesSelector ||
                      p.msMatchesSelector)
                  )) &&
                    le(function (e) {
                      (n.disconnectedMatch = y.call(e, "*")),
                        y.call(e, "[s!='']:x"),
                        v.push("!=", V);
                    }),
                  (m = m.length && new RegExp(m.join("|"))),
                  (v = v.length && new RegExp(v.join("|"))),
                  (t = G.test(p.compareDocumentPosition)),
                  (b =
                    t || G.test(p.contains)
                      ? function (e, t) {
                          var n = 9 === e.nodeType ? e.documentElement : e,
                            r = t && t.parentNode;
                          return (
                            e === r ||
                            !(
                              !r ||
                              1 !== r.nodeType ||
                              !(n.contains
                                ? n.contains(r)
                                : e.compareDocumentPosition &&
                                  16 & e.compareDocumentPosition(r))
                            )
                          );
                        }
                      : function (e, t) {
                          if (t)
                            for (; (t = t.parentNode); ) if (t === e) return !0;
                          return !1;
                        }),
                  (I = t
                    ? function (e, t) {
                        if (e === t) return (d = !0), 0;
                        var r =
                          !e.compareDocumentPosition -
                          !t.compareDocumentPosition;
                        return (
                          r ||
                          (1 &
                            (r =
                              (e.ownerDocument || e) == (t.ownerDocument || t)
                                ? e.compareDocumentPosition(t)
                                : 1) ||
                          (!n.sortDetached &&
                            t.compareDocumentPosition(e) === r)
                            ? e == h || (e.ownerDocument == _ && b(_, e))
                              ? -1
                              : t == h || (t.ownerDocument == _ && b(_, t))
                              ? 1
                              : l
                              ? P(l, e) - P(l, t)
                              : 0
                            : 4 & r
                            ? -1
                            : 1)
                        );
                      }
                    : function (e, t) {
                        if (e === t) return (d = !0), 0;
                        var n,
                          r = 0,
                          o = e.parentNode,
                          i = t.parentNode,
                          s = [e],
                          a = [t];
                        if (!o || !i)
                          return e == h
                            ? -1
                            : t == h
                            ? 1
                            : o
                            ? -1
                            : i
                            ? 1
                            : l
                            ? P(l, e) - P(l, t)
                            : 0;
                        if (o === i) return fe(e, t);
                        for (n = e; (n = n.parentNode); ) s.unshift(n);
                        for (n = t; (n = n.parentNode); ) a.unshift(n);
                        for (; s[r] === a[r]; ) r++;
                        return r
                          ? fe(s[r], a[r])
                          : s[r] == _
                          ? -1
                          : a[r] == _
                          ? 1
                          : 0;
                      }),
                  h)
                : h;
            }),
          (ae.matches = function (e, t) {
            return ae(e, null, null, t);
          }),
          (ae.matchesSelector = function (e, t) {
            if (
              (f(e),
              n.matchesSelector &&
                g &&
                !S[t + " "] &&
                (!v || !v.test(t)) &&
                (!m || !m.test(t)))
            )
              try {
                var r = y.call(e, t);
                if (
                  r ||
                  n.disconnectedMatch ||
                  (e.document && 11 !== e.document.nodeType)
                )
                  return r;
              } catch (e) {
                S(t, !0);
              }
            return ae(t, h, null, [e]).length > 0;
          }),
          (ae.contains = function (e, t) {
            return (e.ownerDocument || e) != h && f(e), b(e, t);
          }),
          (ae.attr = function (e, t) {
            (e.ownerDocument || e) != h && f(e);
            var o = r.attrHandle[t.toLowerCase()],
              i =
                o && M.call(r.attrHandle, t.toLowerCase())
                  ? o(e, t, !g)
                  : void 0;
            return void 0 !== i
              ? i
              : n.attributes || !g
              ? e.getAttribute(t)
              : (i = e.getAttributeNode(t)) && i.specified
              ? i.value
              : null;
          }),
          (ae.escape = function (e) {
            return (e + "").replace(re, oe);
          }),
          (ae.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
          }),
          (ae.uniqueSort = function (e) {
            var t,
              r = [],
              o = 0,
              i = 0;
            if (
              ((d = !n.detectDuplicates),
              (l = !n.sortStable && e.slice(0)),
              e.sort(I),
              d)
            ) {
              for (; (t = e[i++]); ) t === e[i] && (o = r.push(i));
              for (; o--; ) e.splice(r[o], 1);
            }
            return (l = null), e;
          }),
          (o = ae.getText =
            function (e) {
              var t,
                n = "",
                r = 0,
                i = e.nodeType;
              if (i) {
                if (1 === i || 9 === i || 11 === i) {
                  if ("string" == typeof e.textContent) return e.textContent;
                  for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
                } else if (3 === i || 4 === i) return e.nodeValue;
              } else for (; (t = e[r++]); ) n += o(t);
              return n;
            }),
          ((r = ae.selectors =
            {
              cacheLength: 50,
              createPseudo: ue,
              match: Q,
              attrHandle: {},
              find: {},
              relative: {
                ">": { dir: "parentNode", first: !0 },
                " ": { dir: "parentNode" },
                "+": { dir: "previousSibling", first: !0 },
                "~": { dir: "previousSibling" },
              },
              preFilter: {
                ATTR: function (e) {
                  return (
                    (e[1] = e[1].replace(te, ne)),
                    (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                  );
                },
                CHILD: function (e) {
                  return (
                    (e[1] = e[1].toLowerCase()),
                    "nth" === e[1].slice(0, 3)
                      ? (e[3] || ae.error(e[0]),
                        (e[4] = +(e[4]
                          ? e[5] + (e[6] || 1)
                          : 2 * ("even" === e[3] || "odd" === e[3]))),
                        (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                      : e[3] && ae.error(e[0]),
                    e
                  );
                },
                PSEUDO: function (e) {
                  var t,
                    n = !e[6] && e[2];
                  return Q.CHILD.test(e[0])
                    ? null
                    : (e[3]
                        ? (e[2] = e[4] || e[5] || "")
                        : n &&
                          U.test(n) &&
                          (t = s(n, !0)) &&
                          (t = n.indexOf(")", n.length - t) - n.length) &&
                          ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                      e.slice(0, 3));
                },
              },
              filter: {
                TAG: function (e) {
                  var t = e.replace(te, ne).toLowerCase();
                  return "*" === e
                    ? function () {
                        return !0;
                      }
                    : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                      };
                },
                CLASS: function (e) {
                  var t = k[e + " "];
                  return (
                    t ||
                    ((t = new RegExp(
                      "(^|[\\x20\\t\\r\\n\\f])" + e + "(" + H + "|$)"
                    )) &&
                      k(e, function (e) {
                        return t.test(
                          ("string" == typeof e.className && e.className) ||
                            (void 0 !== e.getAttribute &&
                              e.getAttribute("class")) ||
                            ""
                        );
                      }))
                  );
                },
                ATTR: function (e, t, n) {
                  return function (r) {
                    var o = ae.attr(r, e);
                    return null == o
                      ? "!=" === t
                      : !t ||
                          ((o += ""),
                          "=" === t
                            ? o === n
                            : "!=" === t
                            ? o !== n
                            : "^=" === t
                            ? n && 0 === o.indexOf(n)
                            : "*=" === t
                            ? n && o.indexOf(n) > -1
                            : "$=" === t
                            ? n && o.slice(-n.length) === n
                            : "~=" === t
                            ? (" " + o.replace(q, " ") + " ").indexOf(n) > -1
                            : "|=" === t &&
                              (o === n ||
                                o.slice(0, n.length + 1) === n + "-"));
                  };
                },
                CHILD: function (e, t, n, r, o) {
                  var i = "nth" !== e.slice(0, 3),
                    s = "last" !== e.slice(-4),
                    a = "of-type" === t;
                  return 1 === r && 0 === o
                    ? function (e) {
                        return !!e.parentNode;
                      }
                    : function (t, n, c) {
                        var u,
                          l,
                          d,
                          f,
                          h,
                          p,
                          g = i !== s ? "nextSibling" : "previousSibling",
                          m = t.parentNode,
                          v = a && t.nodeName.toLowerCase(),
                          y = !c && !a,
                          b = !1;
                        if (m) {
                          if (i) {
                            for (; g; ) {
                              for (f = t; (f = f[g]); )
                                if (
                                  a
                                    ? f.nodeName.toLowerCase() === v
                                    : 1 === f.nodeType
                                )
                                  return !1;
                              p = g = "only" === e && !p && "nextSibling";
                            }
                            return !0;
                          }
                          if (
                            ((p = [s ? m.firstChild : m.lastChild]), s && y)
                          ) {
                            for (
                              b =
                                (h =
                                  (u =
                                    (l =
                                      (d = (f = m)[w] || (f[w] = {}))[
                                        f.uniqueID
                                      ] || (d[f.uniqueID] = {}))[e] ||
                                    [])[0] === x && u[1]) && u[2],
                                f = h && m.childNodes[h];
                              (f =
                                (++h && f && f[g]) || (b = h = 0) || p.pop());

                            )
                              if (1 === f.nodeType && ++b && f === t) {
                                l[e] = [x, h, b];
                                break;
                              }
                          } else if (
                            (y &&
                              (b = h =
                                (u =
                                  (l =
                                    (d = (f = t)[w] || (f[w] = {}))[
                                      f.uniqueID
                                    ] || (d[f.uniqueID] = {}))[e] || [])[0] ===
                                  x && u[1]),
                            !1 === b)
                          )
                            for (
                              ;
                              (f =
                                (++h && f && f[g]) || (b = h = 0) || p.pop()) &&
                              ((a
                                ? f.nodeName.toLowerCase() !== v
                                : 1 !== f.nodeType) ||
                                !++b ||
                                (y &&
                                  ((l =
                                    (d = f[w] || (f[w] = {}))[f.uniqueID] ||
                                    (d[f.uniqueID] = {}))[e] = [x, b]),
                                f !== t));

                            );
                          return (b -= o) === r || (b % r == 0 && b / r >= 0);
                        }
                      };
                },
                PSEUDO: function (e, t) {
                  var n,
                    o =
                      r.pseudos[e] ||
                      r.setFilters[e.toLowerCase()] ||
                      ae.error("unsupported pseudo: " + e);
                  return o[w]
                    ? o(t)
                    : o.length > 1
                    ? ((n = [e, e, "", t]),
                      r.setFilters.hasOwnProperty(e.toLowerCase())
                        ? ue(function (e, n) {
                            for (var r, i = o(e, t), s = i.length; s--; )
                              e[(r = P(e, i[s]))] = !(n[r] = i[s]);
                          })
                        : function (e) {
                            return o(e, 0, n);
                          })
                    : o;
                },
              },
              pseudos: {
                not: ue(function (e) {
                  var t = [],
                    n = [],
                    r = a(e.replace(z, "$1"));
                  return r[w]
                    ? ue(function (e, t, n, o) {
                        for (var i, s = r(e, null, o, []), a = e.length; a--; )
                          (i = s[a]) && (e[a] = !(t[a] = i));
                      })
                    : function (e, o, i) {
                        return (
                          (t[0] = e), r(t, null, i, n), (t[0] = null), !n.pop()
                        );
                      };
                }),
                has: ue(function (e) {
                  return function (t) {
                    return ae(e, t).length > 0;
                  };
                }),
                contains: ue(function (e) {
                  return (
                    (e = e.replace(te, ne)),
                    function (t) {
                      return (t.textContent || o(t)).indexOf(e) > -1;
                    }
                  );
                }),
                lang: ue(function (e) {
                  return (
                    Z.test(e || "") || ae.error("unsupported lang: " + e),
                    (e = e.replace(te, ne).toLowerCase()),
                    function (t) {
                      var n;
                      do {
                        if (
                          (n = g
                            ? t.lang
                            : t.getAttribute("xml:lang") ||
                              t.getAttribute("lang"))
                        )
                          return (
                            (n = n.toLowerCase()) === e ||
                            0 === n.indexOf(e + "-")
                          );
                      } while ((t = t.parentNode) && 1 === t.nodeType);
                      return !1;
                    }
                  );
                }),
                target: function (t) {
                  var n = e.location && e.location.hash;
                  return n && n.slice(1) === t.id;
                },
                root: function (e) {
                  return e === p;
                },
                focus: function (e) {
                  return (
                    e === h.activeElement &&
                    (!h.hasFocus || h.hasFocus()) &&
                    !!(e.type || e.href || ~e.tabIndex)
                  );
                },
                enabled: ge(!1),
                disabled: ge(!0),
                checked: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return (
                    ("input" === t && !!e.checked) ||
                    ("option" === t && !!e.selected)
                  );
                },
                selected: function (e) {
                  return (
                    e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                  );
                },
                empty: function (e) {
                  for (e = e.firstChild; e; e = e.nextSibling)
                    if (e.nodeType < 6) return !1;
                  return !0;
                },
                parent: function (e) {
                  return !r.pseudos.empty(e);
                },
                header: function (e) {
                  return Y.test(e.nodeName);
                },
                input: function (e) {
                  return X.test(e.nodeName);
                },
                button: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return (
                    ("input" === t && "button" === e.type) || "button" === t
                  );
                },
                text: function (e) {
                  var t;
                  return (
                    "input" === e.nodeName.toLowerCase() &&
                    "text" === e.type &&
                    (null == (t = e.getAttribute("type")) ||
                      "text" === t.toLowerCase())
                  );
                },
                first: me(function () {
                  return [0];
                }),
                last: me(function (e, t) {
                  return [t - 1];
                }),
                eq: me(function (e, t, n) {
                  return [n < 0 ? n + t : n];
                }),
                even: me(function (e, t) {
                  for (var n = 0; n < t; n += 2) e.push(n);
                  return e;
                }),
                odd: me(function (e, t) {
                  for (var n = 1; n < t; n += 2) e.push(n);
                  return e;
                }),
                lt: me(function (e, t, n) {
                  for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; )
                    e.push(r);
                  return e;
                }),
                gt: me(function (e, t, n) {
                  for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                  return e;
                }),
              },
            }).pseudos.nth = r.pseudos.eq),
          { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            r.pseudos[t] = he(t);
          for (t in { submit: !0, reset: !0 }) r.pseudos[t] = pe(t);
          function ye() {}
          function be(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r;
          }
          function we(e, t, n) {
            var r = t.dir,
              o = t.next,
              i = o || r,
              s = n && "parentNode" === i,
              a = T++;
            return t.first
              ? function (t, n, o) {
                  for (; (t = t[r]); )
                    if (1 === t.nodeType || s) return e(t, n, o);
                  return !1;
                }
              : function (t, n, c) {
                  var u,
                    l,
                    d,
                    f = [x, a];
                  if (c) {
                    for (; (t = t[r]); )
                      if ((1 === t.nodeType || s) && e(t, n, c)) return !0;
                  } else
                    for (; (t = t[r]); )
                      if (1 === t.nodeType || s)
                        if (
                          ((l =
                            (d = t[w] || (t[w] = {}))[t.uniqueID] ||
                            (d[t.uniqueID] = {})),
                          o && o === t.nodeName.toLowerCase())
                        )
                          t = t[r] || t;
                        else {
                          if ((u = l[i]) && u[0] === x && u[1] === a)
                            return (f[2] = u[2]);
                          if (((l[i] = f), (f[2] = e(t, n, c)))) return !0;
                        }
                  return !1;
                };
          }
          function _e(e) {
            return e.length > 1
              ? function (t, n, r) {
                  for (var o = e.length; o--; ) if (!e[o](t, n, r)) return !1;
                  return !0;
                }
              : e[0];
          }
          function xe(e, t, n, r, o) {
            for (var i, s = [], a = 0, c = e.length, u = null != t; a < c; a++)
              (i = e[a]) && ((n && !n(i, r, o)) || (s.push(i), u && t.push(a)));
            return s;
          }
          function Te(e, t, n, r, o, i) {
            return (
              r && !r[w] && (r = Te(r)),
              o && !o[w] && (o = Te(o, i)),
              ue(function (i, s, a, c) {
                var u,
                  l,
                  d,
                  f = [],
                  h = [],
                  p = s.length,
                  g =
                    i ||
                    (function (e, t, n) {
                      for (var r = 0, o = t.length; r < o; r++) ae(e, t[r], n);
                      return n;
                    })(t || "*", a.nodeType ? [a] : a, []),
                  m = !e || (!i && t) ? g : xe(g, f, e, a, c),
                  v = n ? (o || (i ? e : p || r) ? [] : s) : m;
                if ((n && n(m, v, a, c), r))
                  for (u = xe(v, h), r(u, [], a, c), l = u.length; l--; )
                    (d = u[l]) && (v[h[l]] = !(m[h[l]] = d));
                if (i) {
                  if (o || e) {
                    if (o) {
                      for (u = [], l = v.length; l--; )
                        (d = v[l]) && u.push((m[l] = d));
                      o(null, (v = []), u, c);
                    }
                    for (l = v.length; l--; )
                      (d = v[l]) &&
                        (u = o ? P(i, d) : f[l]) > -1 &&
                        (i[u] = !(s[u] = d));
                  }
                } else (v = xe(v === s ? v.splice(p, v.length) : v)), o ? o(null, s, v, c) : O.apply(s, v);
              })
            );
          }
          function ke(e) {
            for (
              var t,
                n,
                o,
                i = e.length,
                s = r.relative[e[0].type],
                a = s || r.relative[" "],
                c = s ? 1 : 0,
                l = we(
                  function (e) {
                    return e === t;
                  },
                  a,
                  !0
                ),
                d = we(
                  function (e) {
                    return P(t, e) > -1;
                  },
                  a,
                  !0
                ),
                f = [
                  function (e, n, r) {
                    var o =
                      (!s && (r || n !== u)) ||
                      ((t = n).nodeType ? l(e, n, r) : d(e, n, r));
                    return (t = null), o;
                  },
                ];
              c < i;
              c++
            )
              if ((n = r.relative[e[c].type])) f = [we(_e(f), n)];
              else {
                if ((n = r.filter[e[c].type].apply(null, e[c].matches))[w]) {
                  for (o = ++c; o < i && !r.relative[e[o].type]; o++);
                  return Te(
                    c > 1 && _e(f),
                    c > 1 &&
                      be(
                        e
                          .slice(0, c - 1)
                          .concat({ value: " " === e[c - 2].type ? "*" : "" })
                      ).replace(z, "$1"),
                    n,
                    c < o && ke(e.slice(c, o)),
                    o < i && ke((e = e.slice(o))),
                    o < i && be(e)
                  );
                }
                f.push(n);
              }
            return _e(f);
          }
          return (
            (ye.prototype = r.filters = r.pseudos),
            (r.setFilters = new ye()),
            (s = ae.tokenize =
              function (e, t) {
                var n,
                  o,
                  i,
                  s,
                  a,
                  c,
                  u,
                  l = C[e + " "];
                if (l) return t ? 0 : l.slice(0);
                for (a = e, c = [], u = r.preFilter; a; ) {
                  for (s in ((n && !(o = B.exec(a))) ||
                    (o && (a = a.slice(o[0].length) || a), c.push((i = []))),
                  (n = !1),
                  (o = W.exec(a)) &&
                    ((n = o.shift()),
                    i.push({ value: n, type: o[0].replace(z, " ") }),
                    (a = a.slice(n.length))),
                  r.filter))
                    !(o = Q[s].exec(a)) ||
                      (u[s] && !(o = u[s](o))) ||
                      ((n = o.shift()),
                      i.push({ value: n, type: s, matches: o }),
                      (a = a.slice(n.length)));
                  if (!n) break;
                }
                return t ? a.length : a ? ae.error(e) : C(e, c).slice(0);
              }),
            (a = ae.compile =
              function (e, t) {
                var n,
                  o = [],
                  i = [],
                  a = E[e + " "];
                if (!a) {
                  for (t || (t = s(e)), n = t.length; n--; )
                    (a = ke(t[n]))[w] ? o.push(a) : i.push(a);
                  (a = E(
                    e,
                    (function (e, t) {
                      var n = t.length > 0,
                        o = e.length > 0,
                        i = function (i, s, a, c, l) {
                          var d,
                            p,
                            m,
                            v = 0,
                            y = "0",
                            b = i && [],
                            w = [],
                            _ = u,
                            T = i || (o && r.find.TAG("*", l)),
                            k = (x += null == _ ? 1 : Math.random() || 0.1),
                            C = T.length;
                          for (
                            l && (u = s == h || s || l);
                            y !== C && null != (d = T[y]);
                            y++
                          ) {
                            if (o && d) {
                              for (
                                p = 0,
                                  s || d.ownerDocument == h || (f(d), (a = !g));
                                (m = e[p++]);

                              )
                                if (m(d, s || h, a)) {
                                  c.push(d);
                                  break;
                                }
                              l && (x = k);
                            }
                            n && ((d = !m && d) && v--, i && b.push(d));
                          }
                          if (((v += y), n && y !== v)) {
                            for (p = 0; (m = t[p++]); ) m(b, w, s, a);
                            if (i) {
                              if (v > 0)
                                for (; y--; )
                                  b[y] || w[y] || (w[y] = A.call(c));
                              w = xe(w);
                            }
                            O.apply(c, w),
                              l &&
                                !i &&
                                w.length > 0 &&
                                v + t.length > 1 &&
                                ae.uniqueSort(c);
                          }
                          return l && ((x = k), (u = _)), b;
                        };
                      return n ? ue(i) : i;
                    })(i, o)
                  )).selector = e;
                }
                return a;
              }),
            (c = ae.select =
              function (e, t, n, o) {
                var i,
                  c,
                  u,
                  l,
                  d,
                  f = "function" == typeof e && e,
                  h = !o && s((e = f.selector || e));
                if (((n = n || []), 1 === h.length)) {
                  if (
                    (c = h[0] = h[0].slice(0)).length > 2 &&
                    "ID" === (u = c[0]).type &&
                    9 === t.nodeType &&
                    g &&
                    r.relative[c[1].type]
                  ) {
                    if (
                      !(t = (r.find.ID(u.matches[0].replace(te, ne), t) ||
                        [])[0])
                    )
                      return n;
                    f && (t = t.parentNode),
                      (e = e.slice(c.shift().value.length));
                  }
                  for (
                    i = Q.needsContext.test(e) ? 0 : c.length;
                    i-- && ((u = c[i]), !r.relative[(l = u.type)]);

                  )
                    if (
                      (d = r.find[l]) &&
                      (o = d(
                        u.matches[0].replace(te, ne),
                        (ee.test(c[0].type) && ve(t.parentNode)) || t
                      ))
                    ) {
                      if ((c.splice(i, 1), !(e = o.length && be(c))))
                        return O.apply(n, o), n;
                      break;
                    }
                }
                return (
                  (f || a(e, h))(
                    o,
                    t,
                    !g,
                    n,
                    !t || (ee.test(e) && ve(t.parentNode)) || t
                  ),
                  n
                );
              }),
            (n.sortStable = w.split("").sort(I).join("") === w),
            (n.detectDuplicates = !!d),
            f(),
            (n.sortDetached = le(function (e) {
              return 1 & e.compareDocumentPosition(h.createElement("fieldset"));
            })),
            le(function (e) {
              return (
                (e.innerHTML = "<a href='#'></a>"),
                "#" === e.firstChild.getAttribute("href")
              );
            }) ||
              de("type|href|height|width", function (e, t, n) {
                if (!n)
                  return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
              }),
            (n.attributes &&
              le(function (e) {
                return (
                  (e.innerHTML = "<input/>"),
                  e.firstChild.setAttribute("value", ""),
                  "" === e.firstChild.getAttribute("value")
                );
              })) ||
              de("value", function (e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase())
                  return e.defaultValue;
              }),
            le(function (e) {
              return null == e.getAttribute("disabled");
            }) ||
              de(R, function (e, t, n) {
                var r;
                if (!n)
                  return !0 === e[t]
                    ? t.toLowerCase()
                    : (r = e.getAttributeNode(t)) && r.specified
                    ? r.value
                    : null;
              }),
            ae
          );
        })(n);
        (k.find = E),
          (k.expr = E.selectors),
          (k.expr[":"] = k.expr.pseudos),
          (k.uniqueSort = k.unique = E.uniqueSort),
          (k.text = E.getText),
          (k.isXMLDoc = E.isXML),
          (k.contains = E.contains),
          (k.escapeSelector = E.escape);
        var S = function (e, t, n) {
            for (var r = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
              if (1 === e.nodeType) {
                if (o && k(e).is(n)) break;
                r.push(e);
              }
            return r;
          },
          I = function (e, t) {
            for (var n = []; e; e = e.nextSibling)
              1 === e.nodeType && e !== t && n.push(e);
            return n;
          },
          M = k.expr.match.needsContext;
        function D(e, t) {
          return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        }
        var A =
          /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function N(e, t, n) {
          return v(t)
            ? k.grep(e, function (e, r) {
                return !!t.call(e, r, e) !== n;
              })
            : t.nodeType
            ? k.grep(e, function (e) {
                return (e === t) !== n;
              })
            : "string" != typeof t
            ? k.grep(e, function (e) {
                return l.call(t, e) > -1 !== n;
              })
            : k.filter(t, e, n);
        }
        (k.filter = function (e, t, n) {
          var r = t[0];
          return (
            n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType
              ? k.find.matchesSelector(r, e)
                ? [r]
                : []
              : k.find.matches(
                  e,
                  k.grep(t, function (e) {
                    return 1 === e.nodeType;
                  })
                )
          );
        }),
          k.fn.extend({
            find: function (e) {
              var t,
                n,
                r = this.length,
                o = this;
              if ("string" != typeof e)
                return this.pushStack(
                  k(e).filter(function () {
                    for (t = 0; t < r; t++)
                      if (k.contains(o[t], this)) return !0;
                  })
                );
              for (n = this.pushStack([]), t = 0; t < r; t++)
                k.find(e, o[t], n);
              return r > 1 ? k.uniqueSort(n) : n;
            },
            filter: function (e) {
              return this.pushStack(N(this, e || [], !1));
            },
            not: function (e) {
              return this.pushStack(N(this, e || [], !0));
            },
            is: function (e) {
              return !!N(
                this,
                "string" == typeof e && M.test(e) ? k(e) : e || [],
                !1
              ).length;
            },
          });
        var O,
          j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        ((k.fn.init = function (e, t, n) {
          var r, o;
          if (!e) return this;
          if (((n = n || O), "string" == typeof e)) {
            if (
              !(r =
                "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                  ? [null, e, null]
                  : j.exec(e)) ||
              (!r[1] && t)
            )
              return !t || t.jquery
                ? (t || n).find(e)
                : this.constructor(t).find(e);
            if (r[1]) {
              if (
                ((t = t instanceof k ? t[0] : t),
                k.merge(
                  this,
                  k.parseHTML(
                    r[1],
                    t && t.nodeType ? t.ownerDocument || t : b,
                    !0
                  )
                ),
                A.test(r[1]) && k.isPlainObject(t))
              )
                for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
              return this;
            }
            return (
              (o = b.getElementById(r[2])) &&
                ((this[0] = o), (this.length = 1)),
              this
            );
          }
          return e.nodeType
            ? ((this[0] = e), (this.length = 1), this)
            : v(e)
            ? void 0 !== n.ready
              ? n.ready(e)
              : e(k)
            : k.makeArray(e, this);
        }).prototype = k.fn),
          (O = k(b));
        var P = /^(?:parents|prev(?:Until|All))/,
          R = { children: !0, contents: !0, next: !0, prev: !0 };
        function H(e, t) {
          for (; (e = e[t]) && 1 !== e.nodeType; );
          return e;
        }
        k.fn.extend({
          has: function (e) {
            var t = k(e, this),
              n = t.length;
            return this.filter(function () {
              for (var e = 0; e < n; e++) if (k.contains(this, t[e])) return !0;
            });
          },
          closest: function (e, t) {
            var n,
              r = 0,
              o = this.length,
              i = [],
              s = "string" != typeof e && k(e);
            if (!M.test(e))
              for (; r < o; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                  if (
                    n.nodeType < 11 &&
                    (s
                      ? s.index(n) > -1
                      : 1 === n.nodeType && k.find.matchesSelector(n, e))
                  ) {
                    i.push(n);
                    break;
                  }
            return this.pushStack(i.length > 1 ? k.uniqueSort(i) : i);
          },
          index: function (e) {
            return e
              ? "string" == typeof e
                ? l.call(k(e), this[0])
                : l.call(this, e.jquery ? e[0] : e)
              : this[0] && this[0].parentNode
              ? this.first().prevAll().length
              : -1;
          },
          add: function (e, t) {
            return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))));
          },
          addBack: function (e) {
            return this.add(
              null == e ? this.prevObject : this.prevObject.filter(e)
            );
          },
        }),
          k.each(
            {
              parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null;
              },
              parents: function (e) {
                return S(e, "parentNode");
              },
              parentsUntil: function (e, t, n) {
                return S(e, "parentNode", n);
              },
              next: function (e) {
                return H(e, "nextSibling");
              },
              prev: function (e) {
                return H(e, "previousSibling");
              },
              nextAll: function (e) {
                return S(e, "nextSibling");
              },
              prevAll: function (e) {
                return S(e, "previousSibling");
              },
              nextUntil: function (e, t, n) {
                return S(e, "nextSibling", n);
              },
              prevUntil: function (e, t, n) {
                return S(e, "previousSibling", n);
              },
              siblings: function (e) {
                return I((e.parentNode || {}).firstChild, e);
              },
              children: function (e) {
                return I(e.firstChild);
              },
              contents: function (e) {
                return null != e.contentDocument && s(e.contentDocument)
                  ? e.contentDocument
                  : (D(e, "template") && (e = e.content || e),
                    k.merge([], e.childNodes));
              },
            },
            function (e, t) {
              k.fn[e] = function (n, r) {
                var o = k.map(this, t, n);
                return (
                  "Until" !== e.slice(-5) && (r = n),
                  r && "string" == typeof r && (o = k.filter(r, o)),
                  this.length > 1 &&
                    (R[e] || k.uniqueSort(o), P.test(e) && o.reverse()),
                  this.pushStack(o)
                );
              };
            }
          );
        var F = /[^\x20\t\r\n\f]+/g;
        function L(e) {
          return e;
        }
        function V(e) {
          throw e;
        }
        function q(e, t, n, r) {
          var o;
          try {
            e && v((o = e.promise))
              ? o.call(e).done(t).fail(n)
              : e && v((o = e.then))
              ? o.call(e, t, n)
              : t.apply(void 0, [e].slice(r));
          } catch (e) {
            n.apply(void 0, [e]);
          }
        }
        (k.Callbacks = function (e) {
          e =
            "string" == typeof e
              ? (function (e) {
                  var t = {};
                  return (
                    k.each(e.match(F) || [], function (e, n) {
                      t[n] = !0;
                    }),
                    t
                  );
                })(e)
              : k.extend({}, e);
          var t,
            n,
            r,
            o,
            i = [],
            s = [],
            a = -1,
            c = function () {
              for (o = o || e.once, r = t = !0; s.length; a = -1)
                for (n = s.shift(); ++a < i.length; )
                  !1 === i[a].apply(n[0], n[1]) &&
                    e.stopOnFalse &&
                    ((a = i.length), (n = !1));
              e.memory || (n = !1), (t = !1), o && (i = n ? [] : "");
            },
            u = {
              add: function () {
                return (
                  i &&
                    (n && !t && ((a = i.length - 1), s.push(n)),
                    (function t(n) {
                      k.each(n, function (n, r) {
                        v(r)
                          ? (e.unique && u.has(r)) || i.push(r)
                          : r && r.length && "string" !== x(r) && t(r);
                      });
                    })(arguments),
                    n && !t && c()),
                  this
                );
              },
              remove: function () {
                return (
                  k.each(arguments, function (e, t) {
                    for (var n; (n = k.inArray(t, i, n)) > -1; )
                      i.splice(n, 1), n <= a && a--;
                  }),
                  this
                );
              },
              has: function (e) {
                return e ? k.inArray(e, i) > -1 : i.length > 0;
              },
              empty: function () {
                return i && (i = []), this;
              },
              disable: function () {
                return (o = s = []), (i = n = ""), this;
              },
              disabled: function () {
                return !i;
              },
              lock: function () {
                return (o = s = []), n || t || (i = n = ""), this;
              },
              locked: function () {
                return !!o;
              },
              fireWith: function (e, n) {
                return (
                  o ||
                    ((n = [e, (n = n || []).slice ? n.slice() : n]),
                    s.push(n),
                    t || c()),
                  this
                );
              },
              fire: function () {
                return u.fireWith(this, arguments), this;
              },
              fired: function () {
                return !!r;
              },
            };
          return u;
        }),
          k.extend({
            Deferred: function (e) {
              var t = [
                  [
                    "notify",
                    "progress",
                    k.Callbacks("memory"),
                    k.Callbacks("memory"),
                    2,
                  ],
                  [
                    "resolve",
                    "done",
                    k.Callbacks("once memory"),
                    k.Callbacks("once memory"),
                    0,
                    "resolved",
                  ],
                  [
                    "reject",
                    "fail",
                    k.Callbacks("once memory"),
                    k.Callbacks("once memory"),
                    1,
                    "rejected",
                  ],
                ],
                r = "pending",
                o = {
                  state: function () {
                    return r;
                  },
                  always: function () {
                    return i.done(arguments).fail(arguments), this;
                  },
                  catch: function (e) {
                    return o.then(null, e);
                  },
                  pipe: function () {
                    var e = arguments;
                    return k
                      .Deferred(function (n) {
                        k.each(t, function (t, r) {
                          var o = v(e[r[4]]) && e[r[4]];
                          i[r[1]](function () {
                            var e = o && o.apply(this, arguments);
                            e && v(e.promise)
                              ? e
                                  .promise()
                                  .progress(n.notify)
                                  .done(n.resolve)
                                  .fail(n.reject)
                              : n[r[0] + "With"](this, o ? [e] : arguments);
                          });
                        }),
                          (e = null);
                      })
                      .promise();
                  },
                  then: function (e, r, o) {
                    var i = 0;
                    function s(e, t, r, o) {
                      return function () {
                        var a = this,
                          c = arguments,
                          u = function () {
                            var n, u;
                            if (!(e < i)) {
                              if ((n = r.apply(a, c)) === t.promise())
                                throw new TypeError("Thenable self-resolution");
                              (u =
                                n &&
                                ("object" == typeof n ||
                                  "function" == typeof n) &&
                                n.then),
                                v(u)
                                  ? o
                                    ? u.call(n, s(i, t, L, o), s(i, t, V, o))
                                    : (i++,
                                      u.call(
                                        n,
                                        s(i, t, L, o),
                                        s(i, t, V, o),
                                        s(i, t, L, t.notifyWith)
                                      ))
                                  : (r !== L && ((a = void 0), (c = [n])),
                                    (o || t.resolveWith)(a, c));
                            }
                          },
                          l = o
                            ? u
                            : function () {
                                try {
                                  u();
                                } catch (n) {
                                  k.Deferred.exceptionHook &&
                                    k.Deferred.exceptionHook(n, l.stackTrace),
                                    e + 1 >= i &&
                                      (r !== V && ((a = void 0), (c = [n])),
                                      t.rejectWith(a, c));
                                }
                              };
                        e
                          ? l()
                          : (k.Deferred.getStackHook &&
                              (l.stackTrace = k.Deferred.getStackHook()),
                            n.setTimeout(l));
                      };
                    }
                    return k
                      .Deferred(function (n) {
                        t[0][3].add(s(0, n, v(o) ? o : L, n.notifyWith)),
                          t[1][3].add(s(0, n, v(e) ? e : L)),
                          t[2][3].add(s(0, n, v(r) ? r : V));
                      })
                      .promise();
                  },
                  promise: function (e) {
                    return null != e ? k.extend(e, o) : o;
                  },
                },
                i = {};
              return (
                k.each(t, function (e, n) {
                  var s = n[2],
                    a = n[5];
                  (o[n[1]] = s.add),
                    a &&
                      s.add(
                        function () {
                          r = a;
                        },
                        t[3 - e][2].disable,
                        t[3 - e][3].disable,
                        t[0][2].lock,
                        t[0][3].lock
                      ),
                    s.add(n[3].fire),
                    (i[n[0]] = function () {
                      return (
                        i[n[0] + "With"](this === i ? void 0 : this, arguments),
                        this
                      );
                    }),
                    (i[n[0] + "With"] = s.fireWith);
                }),
                o.promise(i),
                e && e.call(i, i),
                i
              );
            },
            when: function (e) {
              var t = arguments.length,
                n = t,
                r = Array(n),
                o = a.call(arguments),
                i = k.Deferred(),
                s = function (e) {
                  return function (n) {
                    (r[e] = this),
                      (o[e] = arguments.length > 1 ? a.call(arguments) : n),
                      --t || i.resolveWith(r, o);
                  };
                };
              if (
                t <= 1 &&
                (q(e, i.done(s(n)).resolve, i.reject, !t),
                "pending" === i.state() || v(o[n] && o[n].then))
              )
                return i.then();
              for (; n--; ) q(o[n], s(n), i.reject);
              return i.promise();
            },
          });
        var z = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        (k.Deferred.exceptionHook = function (e, t) {
          n.console &&
            n.console.warn &&
            e &&
            z.test(e.name) &&
            n.console.warn(
              "jQuery.Deferred exception: " + e.message,
              e.stack,
              t
            );
        }),
          (k.readyException = function (e) {
            n.setTimeout(function () {
              throw e;
            });
          });
        var B = k.Deferred();
        function W() {
          b.removeEventListener("DOMContentLoaded", W),
            n.removeEventListener("load", W),
            k.ready();
        }
        (k.fn.ready = function (e) {
          return (
            B.then(e).catch(function (e) {
              k.readyException(e);
            }),
            this
          );
        }),
          k.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
              (!0 === e ? --k.readyWait : k.isReady) ||
                ((k.isReady = !0),
                (!0 !== e && --k.readyWait > 0) || B.resolveWith(b, [k]));
            },
          }),
          (k.ready.then = B.then),
          "complete" === b.readyState ||
          ("loading" !== b.readyState && !b.documentElement.doScroll)
            ? n.setTimeout(k.ready)
            : (b.addEventListener("DOMContentLoaded", W),
              n.addEventListener("load", W));
        var $ = function (e, t, n, r, o, i, s) {
            var a = 0,
              c = e.length,
              u = null == n;
            if ("object" === x(n))
              for (a in ((o = !0), n)) $(e, t, a, n[a], !0, i, s);
            else if (
              void 0 !== r &&
              ((o = !0),
              v(r) || (s = !0),
              u &&
                (s
                  ? (t.call(e, r), (t = null))
                  : ((u = t),
                    (t = function (e, t, n) {
                      return u.call(k(e), n);
                    }))),
              t)
            )
              for (; a < c; a++)
                t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
            return o ? e : u ? t.call(e) : c ? t(e[0], n) : i;
          },
          U = /^-ms-/,
          Z = /-([a-z])/g;
        function Q(e, t) {
          return t.toUpperCase();
        }
        function K(e) {
          return e.replace(U, "ms-").replace(Z, Q);
        }
        var X = function (e) {
          return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
        };
        function Y() {
          this.expando = k.expando + Y.uid++;
        }
        (Y.uid = 1),
          (Y.prototype = {
            cache: function (e) {
              var t = e[this.expando];
              return (
                t ||
                  ((t = {}),
                  X(e) &&
                    (e.nodeType
                      ? (e[this.expando] = t)
                      : Object.defineProperty(e, this.expando, {
                          value: t,
                          configurable: !0,
                        }))),
                t
              );
            },
            set: function (e, t, n) {
              var r,
                o = this.cache(e);
              if ("string" == typeof t) o[K(t)] = n;
              else for (r in t) o[K(r)] = t[r];
              return o;
            },
            get: function (e, t) {
              return void 0 === t
                ? this.cache(e)
                : e[this.expando] && e[this.expando][K(t)];
            },
            access: function (e, t, n) {
              return void 0 === t || (t && "string" == typeof t && void 0 === n)
                ? this.get(e, t)
                : (this.set(e, t, n), void 0 !== n ? n : t);
            },
            remove: function (e, t) {
              var n,
                r = e[this.expando];
              if (void 0 !== r) {
                if (void 0 !== t) {
                  n = (t = Array.isArray(t)
                    ? t.map(K)
                    : (t = K(t)) in r
                    ? [t]
                    : t.match(F) || []).length;
                  for (; n--; ) delete r[t[n]];
                }
                (void 0 === t || k.isEmptyObject(r)) &&
                  (e.nodeType
                    ? (e[this.expando] = void 0)
                    : delete e[this.expando]);
              }
            },
            hasData: function (e) {
              var t = e[this.expando];
              return void 0 !== t && !k.isEmptyObject(t);
            },
          });
        var G = new Y(),
          J = new Y(),
          ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
          te = /[A-Z]/g;
        function ne(e, t, n) {
          var r;
          if (void 0 === n && 1 === e.nodeType)
            if (
              ((r = "data-" + t.replace(te, "-$&").toLowerCase()),
              "string" == typeof (n = e.getAttribute(r)))
            ) {
              try {
                n = (function (e) {
                  return (
                    "true" === e ||
                    ("false" !== e &&
                      ("null" === e
                        ? null
                        : e === +e + ""
                        ? +e
                        : ee.test(e)
                        ? JSON.parse(e)
                        : e))
                  );
                })(n);
              } catch (e) {}
              J.set(e, t, n);
            } else n = void 0;
          return n;
        }
        k.extend({
          hasData: function (e) {
            return J.hasData(e) || G.hasData(e);
          },
          data: function (e, t, n) {
            return J.access(e, t, n);
          },
          removeData: function (e, t) {
            J.remove(e, t);
          },
          _data: function (e, t, n) {
            return G.access(e, t, n);
          },
          _removeData: function (e, t) {
            G.remove(e, t);
          },
        }),
          k.fn.extend({
            data: function (e, t) {
              var n,
                r,
                o,
                i = this[0],
                s = i && i.attributes;
              if (void 0 === e) {
                if (
                  this.length &&
                  ((o = J.get(i)),
                  1 === i.nodeType && !G.get(i, "hasDataAttrs"))
                ) {
                  for (n = s.length; n--; )
                    s[n] &&
                      0 === (r = s[n].name).indexOf("data-") &&
                      ((r = K(r.slice(5))), ne(i, r, o[r]));
                  G.set(i, "hasDataAttrs", !0);
                }
                return o;
              }
              return "object" == typeof e
                ? this.each(function () {
                    J.set(this, e);
                  })
                : $(
                    this,
                    function (t) {
                      var n;
                      if (i && void 0 === t)
                        return void 0 !== (n = J.get(i, e)) ||
                          void 0 !== (n = ne(i, e))
                          ? n
                          : void 0;
                      this.each(function () {
                        J.set(this, e, t);
                      });
                    },
                    null,
                    t,
                    arguments.length > 1,
                    null,
                    !0
                  );
            },
            removeData: function (e) {
              return this.each(function () {
                J.remove(this, e);
              });
            },
          }),
          k.extend({
            queue: function (e, t, n) {
              var r;
              if (e)
                return (
                  (t = (t || "fx") + "queue"),
                  (r = G.get(e, t)),
                  n &&
                    (!r || Array.isArray(n)
                      ? (r = G.access(e, t, k.makeArray(n)))
                      : r.push(n)),
                  r || []
                );
            },
            dequeue: function (e, t) {
              t = t || "fx";
              var n = k.queue(e, t),
                r = n.length,
                o = n.shift(),
                i = k._queueHooks(e, t);
              "inprogress" === o && ((o = n.shift()), r--),
                o &&
                  ("fx" === t && n.unshift("inprogress"),
                  delete i.stop,
                  o.call(
                    e,
                    function () {
                      k.dequeue(e, t);
                    },
                    i
                  )),
                !r && i && i.empty.fire();
            },
            _queueHooks: function (e, t) {
              var n = t + "queueHooks";
              return (
                G.get(e, n) ||
                G.access(e, n, {
                  empty: k.Callbacks("once memory").add(function () {
                    G.remove(e, [t + "queue", n]);
                  }),
                })
              );
            },
          }),
          k.fn.extend({
            queue: function (e, t) {
              var n = 2;
              return (
                "string" != typeof e && ((t = e), (e = "fx"), n--),
                arguments.length < n
                  ? k.queue(this[0], e)
                  : void 0 === t
                  ? this
                  : this.each(function () {
                      var n = k.queue(this, e, t);
                      k._queueHooks(this, e),
                        "fx" === e &&
                          "inprogress" !== n[0] &&
                          k.dequeue(this, e);
                    })
              );
            },
            dequeue: function (e) {
              return this.each(function () {
                k.dequeue(this, e);
              });
            },
            clearQueue: function (e) {
              return this.queue(e || "fx", []);
            },
            promise: function (e, t) {
              var n,
                r = 1,
                o = k.Deferred(),
                i = this,
                s = this.length,
                a = function () {
                  --r || o.resolveWith(i, [i]);
                };
              for (
                "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
                s--;

              )
                (n = G.get(i[s], e + "queueHooks")) &&
                  n.empty &&
                  (r++, n.empty.add(a));
              return a(), o.promise(t);
            },
          });
        var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
          oe = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
          ie = ["Top", "Right", "Bottom", "Left"],
          se = b.documentElement,
          ae = function (e) {
            return k.contains(e.ownerDocument, e);
          },
          ce = { composed: !0 };
        se.getRootNode &&
          (ae = function (e) {
            return (
              k.contains(e.ownerDocument, e) ||
              e.getRootNode(ce) === e.ownerDocument
            );
          });
        var ue = function (e, t) {
          return (
            "none" === (e = t || e).style.display ||
            ("" === e.style.display && ae(e) && "none" === k.css(e, "display"))
          );
        };
        function le(e, t, n, r) {
          var o,
            i,
            s = 20,
            a = r
              ? function () {
                  return r.cur();
                }
              : function () {
                  return k.css(e, t, "");
                },
            c = a(),
            u = (n && n[3]) || (k.cssNumber[t] ? "" : "px"),
            l =
              e.nodeType &&
              (k.cssNumber[t] || ("px" !== u && +c)) &&
              oe.exec(k.css(e, t));
          if (l && l[3] !== u) {
            for (c /= 2, u = u || l[3], l = +c || 1; s--; )
              k.style(e, t, l + u),
                (1 - i) * (1 - (i = a() / c || 0.5)) <= 0 && (s = 0),
                (l /= i);
            (l *= 2), k.style(e, t, l + u), (n = n || []);
          }
          return (
            n &&
              ((l = +l || +c || 0),
              (o = n[1] ? l + (n[1] + 1) * n[2] : +n[2]),
              r && ((r.unit = u), (r.start = l), (r.end = o))),
            o
          );
        }
        var de = {};
        function fe(e) {
          var t,
            n = e.ownerDocument,
            r = e.nodeName,
            o = de[r];
          return (
            o ||
            ((t = n.body.appendChild(n.createElement(r))),
            (o = k.css(t, "display")),
            t.parentNode.removeChild(t),
            "none" === o && (o = "block"),
            (de[r] = o),
            o)
          );
        }
        function he(e, t) {
          for (var n, r, o = [], i = 0, s = e.length; i < s; i++)
            (r = e[i]).style &&
              ((n = r.style.display),
              t
                ? ("none" === n &&
                    ((o[i] = G.get(r, "display") || null),
                    o[i] || (r.style.display = "")),
                  "" === r.style.display && ue(r) && (o[i] = fe(r)))
                : "none" !== n && ((o[i] = "none"), G.set(r, "display", n)));
          for (i = 0; i < s; i++) null != o[i] && (e[i].style.display = o[i]);
          return e;
        }
        k.fn.extend({
          show: function () {
            return he(this, !0);
          },
          hide: function () {
            return he(this);
          },
          toggle: function (e) {
            return "boolean" == typeof e
              ? e
                ? this.show()
                : this.hide()
              : this.each(function () {
                  ue(this) ? k(this).show() : k(this).hide();
                });
          },
        });
        var pe,
          ge,
          me = /^(?:checkbox|radio)$/i,
          ve = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
          ye = /^$|^module$|\/(?:java|ecma)script/i;
        (pe = b.createDocumentFragment().appendChild(b.createElement("div"))),
          (ge = b.createElement("input")).setAttribute("type", "radio"),
          ge.setAttribute("checked", "checked"),
          ge.setAttribute("name", "t"),
          pe.appendChild(ge),
          (m.checkClone = pe.cloneNode(!0).cloneNode(!0).lastChild.checked),
          (pe.innerHTML = "<textarea>x</textarea>"),
          (m.noCloneChecked = !!pe.cloneNode(!0).lastChild.defaultValue),
          (pe.innerHTML = "<option></option>"),
          (m.option = !!pe.lastChild);
        var be = {
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""],
        };
        function we(e, t) {
          var n;
          return (
            (n =
              void 0 !== e.getElementsByTagName
                ? e.getElementsByTagName(t || "*")
                : void 0 !== e.querySelectorAll
                ? e.querySelectorAll(t || "*")
                : []),
            void 0 === t || (t && D(e, t)) ? k.merge([e], n) : n
          );
        }
        function _e(e, t) {
          for (var n = 0, r = e.length; n < r; n++)
            G.set(e[n], "globalEval", !t || G.get(t[n], "globalEval"));
        }
        (be.tbody = be.tfoot = be.colgroup = be.caption = be.thead),
          (be.th = be.td),
          m.option ||
            (be.optgroup = be.option =
              [1, "<select multiple='multiple'>", "</select>"]);
        var xe = /<|&#?\w+;/;
        function Te(e, t, n, r, o) {
          for (
            var i,
              s,
              a,
              c,
              u,
              l,
              d = t.createDocumentFragment(),
              f = [],
              h = 0,
              p = e.length;
            h < p;
            h++
          )
            if ((i = e[h]) || 0 === i)
              if ("object" === x(i)) k.merge(f, i.nodeType ? [i] : i);
              else if (xe.test(i)) {
                for (
                  s = s || d.appendChild(t.createElement("div")),
                    a = (ve.exec(i) || ["", ""])[1].toLowerCase(),
                    c = be[a] || be._default,
                    s.innerHTML = c[1] + k.htmlPrefilter(i) + c[2],
                    l = c[0];
                  l--;

                )
                  s = s.lastChild;
                k.merge(f, s.childNodes), ((s = d.firstChild).textContent = "");
              } else f.push(t.createTextNode(i));
          for (d.textContent = "", h = 0; (i = f[h++]); )
            if (r && k.inArray(i, r) > -1) o && o.push(i);
            else if (
              ((u = ae(i)), (s = we(d.appendChild(i), "script")), u && _e(s), n)
            )
              for (l = 0; (i = s[l++]); ) ye.test(i.type || "") && n.push(i);
          return d;
        }
        var ke = /^key/,
          Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
          Ee = /^([^.]*)(?:\.(.+)|)/;
        function Se() {
          return !0;
        }
        function Ie() {
          return !1;
        }
        function Me(e, t) {
          return (
            (e ===
              (function () {
                try {
                  return b.activeElement;
                } catch (e) {}
              })()) ==
            ("focus" === t)
          );
        }
        function De(e, t, n, r, o, i) {
          var s, a;
          if ("object" == typeof t) {
            for (a in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
              De(e, a, n, r, t[a], i);
            return e;
          }
          if (
            (null == r && null == o
              ? ((o = n), (r = n = void 0))
              : null == o &&
                ("string" == typeof n
                  ? ((o = r), (r = void 0))
                  : ((o = r), (r = n), (n = void 0))),
            !1 === o)
          )
            o = Ie;
          else if (!o) return e;
          return (
            1 === i &&
              ((s = o),
              ((o = function (e) {
                return k().off(e), s.apply(this, arguments);
              }).guid = s.guid || (s.guid = k.guid++))),
            e.each(function () {
              k.event.add(this, t, o, r, n);
            })
          );
        }
        function Ae(e, t, n) {
          n
            ? (G.set(e, t, !1),
              k.event.add(e, t, {
                namespace: !1,
                handler: function (e) {
                  var r,
                    o,
                    i = G.get(this, t);
                  if (1 & e.isTrigger && this[t]) {
                    if (i.length)
                      (k.event.special[t] || {}).delegateType &&
                        e.stopPropagation();
                    else if (
                      ((i = a.call(arguments)),
                      G.set(this, t, i),
                      (r = n(this, t)),
                      this[t](),
                      i !== (o = G.get(this, t)) || r
                        ? G.set(this, t, !1)
                        : (o = {}),
                      i !== o)
                    )
                      return (
                        e.stopImmediatePropagation(),
                        e.preventDefault(),
                        o.value
                      );
                  } else
                    i.length &&
                      (G.set(this, t, {
                        value: k.event.trigger(
                          k.extend(i[0], k.Event.prototype),
                          i.slice(1),
                          this
                        ),
                      }),
                      e.stopImmediatePropagation());
                },
              }))
            : void 0 === G.get(e, t) && k.event.add(e, t, Se);
        }
        (k.event = {
          global: {},
          add: function (e, t, n, r, o) {
            var i,
              s,
              a,
              c,
              u,
              l,
              d,
              f,
              h,
              p,
              g,
              m = G.get(e);
            if (X(e))
              for (
                n.handler && ((n = (i = n).handler), (o = i.selector)),
                  o && k.find.matchesSelector(se, o),
                  n.guid || (n.guid = k.guid++),
                  (c = m.events) || (c = m.events = Object.create(null)),
                  (s = m.handle) ||
                    (s = m.handle =
                      function (t) {
                        return void 0 !== k && k.event.triggered !== t.type
                          ? k.event.dispatch.apply(e, arguments)
                          : void 0;
                      }),
                  u = (t = (t || "").match(F) || [""]).length;
                u--;

              )
                (h = g = (a = Ee.exec(t[u]) || [])[1]),
                  (p = (a[2] || "").split(".").sort()),
                  h &&
                    ((d = k.event.special[h] || {}),
                    (h = (o ? d.delegateType : d.bindType) || h),
                    (d = k.event.special[h] || {}),
                    (l = k.extend(
                      {
                        type: h,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && k.expr.match.needsContext.test(o),
                        namespace: p.join("."),
                      },
                      i
                    )),
                    (f = c[h]) ||
                      (((f = c[h] = []).delegateCount = 0),
                      (d.setup && !1 !== d.setup.call(e, r, p, s)) ||
                        (e.addEventListener && e.addEventListener(h, s))),
                    d.add &&
                      (d.add.call(e, l),
                      l.handler.guid || (l.handler.guid = n.guid)),
                    o ? f.splice(f.delegateCount++, 0, l) : f.push(l),
                    (k.event.global[h] = !0));
          },
          remove: function (e, t, n, r, o) {
            var i,
              s,
              a,
              c,
              u,
              l,
              d,
              f,
              h,
              p,
              g,
              m = G.hasData(e) && G.get(e);
            if (m && (c = m.events)) {
              for (u = (t = (t || "").match(F) || [""]).length; u--; )
                if (
                  ((h = g = (a = Ee.exec(t[u]) || [])[1]),
                  (p = (a[2] || "").split(".").sort()),
                  h)
                ) {
                  for (
                    d = k.event.special[h] || {},
                      f = c[(h = (r ? d.delegateType : d.bindType) || h)] || [],
                      a =
                        a[2] &&
                        new RegExp(
                          "(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"
                        ),
                      s = i = f.length;
                    i--;

                  )
                    (l = f[i]),
                      (!o && g !== l.origType) ||
                        (n && n.guid !== l.guid) ||
                        (a && !a.test(l.namespace)) ||
                        (r &&
                          r !== l.selector &&
                          ("**" !== r || !l.selector)) ||
                        (f.splice(i, 1),
                        l.selector && f.delegateCount--,
                        d.remove && d.remove.call(e, l));
                  s &&
                    !f.length &&
                    ((d.teardown && !1 !== d.teardown.call(e, p, m.handle)) ||
                      k.removeEvent(e, h, m.handle),
                    delete c[h]);
                } else for (h in c) k.event.remove(e, h + t[u], n, r, !0);
              k.isEmptyObject(c) && G.remove(e, "handle events");
            }
          },
          dispatch: function (e) {
            var t,
              n,
              r,
              o,
              i,
              s,
              a = new Array(arguments.length),
              c = k.event.fix(e),
              u = (G.get(this, "events") || Object.create(null))[c.type] || [],
              l = k.event.special[c.type] || {};
            for (a[0] = c, t = 1; t < arguments.length; t++)
              a[t] = arguments[t];
            if (
              ((c.delegateTarget = this),
              !l.preDispatch || !1 !== l.preDispatch.call(this, c))
            ) {
              for (
                s = k.event.handlers.call(this, c, u), t = 0;
                (o = s[t++]) && !c.isPropagationStopped();

              )
                for (
                  c.currentTarget = o.elem, n = 0;
                  (i = o.handlers[n++]) && !c.isImmediatePropagationStopped();

                )
                  (c.rnamespace &&
                    !1 !== i.namespace &&
                    !c.rnamespace.test(i.namespace)) ||
                    ((c.handleObj = i),
                    (c.data = i.data),
                    void 0 !==
                      (r = (
                        (k.event.special[i.origType] || {}).handle || i.handler
                      ).apply(o.elem, a)) &&
                      !1 === (c.result = r) &&
                      (c.preventDefault(), c.stopPropagation()));
              return l.postDispatch && l.postDispatch.call(this, c), c.result;
            }
          },
          handlers: function (e, t) {
            var n,
              r,
              o,
              i,
              s,
              a = [],
              c = t.delegateCount,
              u = e.target;
            if (c && u.nodeType && !("click" === e.type && e.button >= 1))
              for (; u !== this; u = u.parentNode || this)
                if (
                  1 === u.nodeType &&
                  ("click" !== e.type || !0 !== u.disabled)
                ) {
                  for (i = [], s = {}, n = 0; n < c; n++)
                    void 0 === s[(o = (r = t[n]).selector + " ")] &&
                      (s[o] = r.needsContext
                        ? k(o, this).index(u) > -1
                        : k.find(o, this, null, [u]).length),
                      s[o] && i.push(r);
                  i.length && a.push({ elem: u, handlers: i });
                }
            return (
              (u = this),
              c < t.length && a.push({ elem: u, handlers: t.slice(c) }),
              a
            );
          },
          addProp: function (e, t) {
            Object.defineProperty(k.Event.prototype, e, {
              enumerable: !0,
              configurable: !0,
              get: v(t)
                ? function () {
                    if (this.originalEvent) return t(this.originalEvent);
                  }
                : function () {
                    if (this.originalEvent) return this.originalEvent[e];
                  },
              set: function (t) {
                Object.defineProperty(this, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: t,
                });
              },
            });
          },
          fix: function (e) {
            return e[k.expando] ? e : new k.Event(e);
          },
          special: {
            load: { noBubble: !0 },
            click: {
              setup: function (e) {
                var t = this || e;
                return (
                  me.test(t.type) &&
                    t.click &&
                    D(t, "input") &&
                    Ae(t, "click", Se),
                  !1
                );
              },
              trigger: function (e) {
                var t = this || e;
                return (
                  me.test(t.type) && t.click && D(t, "input") && Ae(t, "click"),
                  !0
                );
              },
              _default: function (e) {
                var t = e.target;
                return (
                  (me.test(t.type) &&
                    t.click &&
                    D(t, "input") &&
                    G.get(t, "click")) ||
                  D(t, "a")
                );
              },
            },
            beforeunload: {
              postDispatch: function (e) {
                void 0 !== e.result &&
                  e.originalEvent &&
                  (e.originalEvent.returnValue = e.result);
              },
            },
          },
        }),
          (k.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n);
          }),
          (k.Event = function (e, t) {
            if (!(this instanceof k.Event)) return new k.Event(e, t);
            e && e.type
              ? ((this.originalEvent = e),
                (this.type = e.type),
                (this.isDefaultPrevented =
                  e.defaultPrevented ||
                  (void 0 === e.defaultPrevented && !1 === e.returnValue)
                    ? Se
                    : Ie),
                (this.target =
                  e.target && 3 === e.target.nodeType
                    ? e.target.parentNode
                    : e.target),
                (this.currentTarget = e.currentTarget),
                (this.relatedTarget = e.relatedTarget))
              : (this.type = e),
              t && k.extend(this, t),
              (this.timeStamp = (e && e.timeStamp) || Date.now()),
              (this[k.expando] = !0);
          }),
          (k.Event.prototype = {
            constructor: k.Event,
            isDefaultPrevented: Ie,
            isPropagationStopped: Ie,
            isImmediatePropagationStopped: Ie,
            isSimulated: !1,
            preventDefault: function () {
              var e = this.originalEvent;
              (this.isDefaultPrevented = Se),
                e && !this.isSimulated && e.preventDefault();
            },
            stopPropagation: function () {
              var e = this.originalEvent;
              (this.isPropagationStopped = Se),
                e && !this.isSimulated && e.stopPropagation();
            },
            stopImmediatePropagation: function () {
              var e = this.originalEvent;
              (this.isImmediatePropagationStopped = Se),
                e && !this.isSimulated && e.stopImmediatePropagation(),
                this.stopPropagation();
            },
          }),
          k.each(
            {
              altKey: !0,
              bubbles: !0,
              cancelable: !0,
              changedTouches: !0,
              ctrlKey: !0,
              detail: !0,
              eventPhase: !0,
              metaKey: !0,
              pageX: !0,
              pageY: !0,
              shiftKey: !0,
              view: !0,
              char: !0,
              code: !0,
              charCode: !0,
              key: !0,
              keyCode: !0,
              button: !0,
              buttons: !0,
              clientX: !0,
              clientY: !0,
              offsetX: !0,
              offsetY: !0,
              pointerId: !0,
              pointerType: !0,
              screenX: !0,
              screenY: !0,
              targetTouches: !0,
              toElement: !0,
              touches: !0,
              which: function (e) {
                var t = e.button;
                return null == e.which && ke.test(e.type)
                  ? null != e.charCode
                    ? e.charCode
                    : e.keyCode
                  : !e.which && void 0 !== t && Ce.test(e.type)
                  ? 1 & t
                    ? 1
                    : 2 & t
                    ? 3
                    : 4 & t
                    ? 2
                    : 0
                  : e.which;
              },
            },
            k.event.addProp
          ),
          k.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            k.event.special[e] = {
              setup: function () {
                return Ae(this, e, Me), !1;
              },
              trigger: function () {
                return Ae(this, e), !0;
              },
              delegateType: t,
            };
          }),
          k.each(
            {
              mouseenter: "mouseover",
              mouseleave: "mouseout",
              pointerenter: "pointerover",
              pointerleave: "pointerout",
            },
            function (e, t) {
              k.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function (e) {
                  var n,
                    r = this,
                    o = e.relatedTarget,
                    i = e.handleObj;
                  return (
                    (o && (o === r || k.contains(r, o))) ||
                      ((e.type = i.origType),
                      (n = i.handler.apply(this, arguments)),
                      (e.type = t)),
                    n
                  );
                },
              };
            }
          ),
          k.fn.extend({
            on: function (e, t, n, r) {
              return De(this, e, t, n, r);
            },
            one: function (e, t, n, r) {
              return De(this, e, t, n, r, 1);
            },
            off: function (e, t, n) {
              var r, o;
              if (e && e.preventDefault && e.handleObj)
                return (
                  (r = e.handleObj),
                  k(e.delegateTarget).off(
                    r.namespace ? r.origType + "." + r.namespace : r.origType,
                    r.selector,
                    r.handler
                  ),
                  this
                );
              if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this;
              }
              return (
                (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                !1 === n && (n = Ie),
                this.each(function () {
                  k.event.remove(this, e, n, t);
                })
              );
            },
          });
        var Ne = /<script|<style|<link/i,
          Oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
          je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        function Pe(e, t) {
          return (
            (D(e, "table") &&
              D(11 !== t.nodeType ? t : t.firstChild, "tr") &&
              k(e).children("tbody")[0]) ||
            e
          );
        }
        function Re(e) {
          return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
        }
        function He(e) {
          return (
            "true/" === (e.type || "").slice(0, 5)
              ? (e.type = e.type.slice(5))
              : e.removeAttribute("type"),
            e
          );
        }
        function Fe(e, t) {
          var n, r, o, i, s, a;
          if (1 === t.nodeType) {
            if (G.hasData(e) && (a = G.get(e).events))
              for (o in (G.remove(t, "handle events"), a))
                for (n = 0, r = a[o].length; n < r; n++)
                  k.event.add(t, o, a[o][n]);
            J.hasData(e) &&
              ((i = J.access(e)), (s = k.extend({}, i)), J.set(t, s));
          }
        }
        function Le(e, t) {
          var n = t.nodeName.toLowerCase();
          "input" === n && me.test(e.type)
            ? (t.checked = e.checked)
            : ("input" !== n && "textarea" !== n) ||
              (t.defaultValue = e.defaultValue);
        }
        function Ve(e, t, n, r) {
          t = c(t);
          var o,
            i,
            s,
            a,
            u,
            l,
            d = 0,
            f = e.length,
            h = f - 1,
            p = t[0],
            g = v(p);
          if (
            g ||
            (f > 1 && "string" == typeof p && !m.checkClone && Oe.test(p))
          )
            return e.each(function (o) {
              var i = e.eq(o);
              g && (t[0] = p.call(this, o, i.html())), Ve(i, t, n, r);
            });
          if (
            f &&
            ((i = (o = Te(t, e[0].ownerDocument, !1, e, r)).firstChild),
            1 === o.childNodes.length && (o = i),
            i || r)
          ) {
            for (a = (s = k.map(we(o, "script"), Re)).length; d < f; d++)
              (u = o),
                d !== h &&
                  ((u = k.clone(u, !0, !0)), a && k.merge(s, we(u, "script"))),
                n.call(e[d], u, d);
            if (a)
              for (
                l = s[s.length - 1].ownerDocument, k.map(s, He), d = 0;
                d < a;
                d++
              )
                (u = s[d]),
                  ye.test(u.type || "") &&
                    !G.access(u, "globalEval") &&
                    k.contains(l, u) &&
                    (u.src && "module" !== (u.type || "").toLowerCase()
                      ? k._evalUrl &&
                        !u.noModule &&
                        k._evalUrl(
                          u.src,
                          { nonce: u.nonce || u.getAttribute("nonce") },
                          l
                        )
                      : _(u.textContent.replace(je, ""), u, l));
          }
          return e;
        }
        function qe(e, t, n) {
          for (
            var r, o = t ? k.filter(t, e) : e, i = 0;
            null != (r = o[i]);
            i++
          )
            n || 1 !== r.nodeType || k.cleanData(we(r)),
              r.parentNode &&
                (n && ae(r) && _e(we(r, "script")),
                r.parentNode.removeChild(r));
          return e;
        }
        k.extend({
          htmlPrefilter: function (e) {
            return e;
          },
          clone: function (e, t, n) {
            var r,
              o,
              i,
              s,
              a = e.cloneNode(!0),
              c = ae(e);
            if (
              !(
                m.noCloneChecked ||
                (1 !== e.nodeType && 11 !== e.nodeType) ||
                k.isXMLDoc(e)
              )
            )
              for (s = we(a), r = 0, o = (i = we(e)).length; r < o; r++)
                Le(i[r], s[r]);
            if (t)
              if (n)
                for (
                  i = i || we(e), s = s || we(a), r = 0, o = i.length;
                  r < o;
                  r++
                )
                  Fe(i[r], s[r]);
              else Fe(e, a);
            return (
              (s = we(a, "script")).length > 0 && _e(s, !c && we(e, "script")),
              a
            );
          },
          cleanData: function (e) {
            for (
              var t, n, r, o = k.event.special, i = 0;
              void 0 !== (n = e[i]);
              i++
            )
              if (X(n)) {
                if ((t = n[G.expando])) {
                  if (t.events)
                    for (r in t.events)
                      o[r]
                        ? k.event.remove(n, r)
                        : k.removeEvent(n, r, t.handle);
                  n[G.expando] = void 0;
                }
                n[J.expando] && (n[J.expando] = void 0);
              }
          },
        }),
          k.fn.extend({
            detach: function (e) {
              return qe(this, e, !0);
            },
            remove: function (e) {
              return qe(this, e);
            },
            text: function (e) {
              return $(
                this,
                function (e) {
                  return void 0 === e
                    ? k.text(this)
                    : this.empty().each(function () {
                        (1 !== this.nodeType &&
                          11 !== this.nodeType &&
                          9 !== this.nodeType) ||
                          (this.textContent = e);
                      });
                },
                null,
                e,
                arguments.length
              );
            },
            append: function () {
              return Ve(this, arguments, function (e) {
                (1 !== this.nodeType &&
                  11 !== this.nodeType &&
                  9 !== this.nodeType) ||
                  Pe(this, e).appendChild(e);
              });
            },
            prepend: function () {
              return Ve(this, arguments, function (e) {
                if (
                  1 === this.nodeType ||
                  11 === this.nodeType ||
                  9 === this.nodeType
                ) {
                  var t = Pe(this, e);
                  t.insertBefore(e, t.firstChild);
                }
              });
            },
            before: function () {
              return Ve(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
              });
            },
            after: function () {
              return Ve(this, arguments, function (e) {
                this.parentNode &&
                  this.parentNode.insertBefore(e, this.nextSibling);
              });
            },
            empty: function () {
              for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType &&
                  (k.cleanData(we(e, !1)), (e.textContent = ""));
              return this;
            },
            clone: function (e, t) {
              return (
                (e = null != e && e),
                (t = null == t ? e : t),
                this.map(function () {
                  return k.clone(this, e, t);
                })
              );
            },
            html: function (e) {
              return $(
                this,
                function (e) {
                  var t = this[0] || {},
                    n = 0,
                    r = this.length;
                  if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                  if (
                    "string" == typeof e &&
                    !Ne.test(e) &&
                    !be[(ve.exec(e) || ["", ""])[1].toLowerCase()]
                  ) {
                    e = k.htmlPrefilter(e);
                    try {
                      for (; n < r; n++)
                        1 === (t = this[n] || {}).nodeType &&
                          (k.cleanData(we(t, !1)), (t.innerHTML = e));
                      t = 0;
                    } catch (e) {}
                  }
                  t && this.empty().append(e);
                },
                null,
                e,
                arguments.length
              );
            },
            replaceWith: function () {
              var e = [];
              return Ve(
                this,
                arguments,
                function (t) {
                  var n = this.parentNode;
                  k.inArray(this, e) < 0 &&
                    (k.cleanData(we(this)), n && n.replaceChild(t, this));
                },
                e
              );
            },
          }),
          k.each(
            {
              appendTo: "append",
              prependTo: "prepend",
              insertBefore: "before",
              insertAfter: "after",
              replaceAll: "replaceWith",
            },
            function (e, t) {
              k.fn[e] = function (e) {
                for (
                  var n, r = [], o = k(e), i = o.length - 1, s = 0;
                  s <= i;
                  s++
                )
                  (n = s === i ? this : this.clone(!0)),
                    k(o[s])[t](n),
                    u.apply(r, n.get());
                return this.pushStack(r);
              };
            }
          );
        var ze = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
          Be = function (e) {
            var t = e.ownerDocument.defaultView;
            return (t && t.opener) || (t = n), t.getComputedStyle(e);
          },
          We = function (e, t, n) {
            var r,
              o,
              i = {};
            for (o in t) (i[o] = e.style[o]), (e.style[o] = t[o]);
            for (o in ((r = n.call(e)), t)) e.style[o] = i[o];
            return r;
          },
          $e = new RegExp(ie.join("|"), "i");
        function Ue(e, t, n) {
          var r,
            o,
            i,
            s,
            a = e.style;
          return (
            (n = n || Be(e)) &&
              ("" !== (s = n.getPropertyValue(t) || n[t]) ||
                ae(e) ||
                (s = k.style(e, t)),
              !m.pixelBoxStyles() &&
                ze.test(s) &&
                $e.test(t) &&
                ((r = a.width),
                (o = a.minWidth),
                (i = a.maxWidth),
                (a.minWidth = a.maxWidth = a.width = s),
                (s = n.width),
                (a.width = r),
                (a.minWidth = o),
                (a.maxWidth = i))),
            void 0 !== s ? s + "" : s
          );
        }
        function Ze(e, t) {
          return {
            get: function () {
              if (!e()) return (this.get = t).apply(this, arguments);
              delete this.get;
            },
          };
        }
        !(function () {
          function e() {
            if (l) {
              (u.style.cssText =
                "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                (l.style.cssText =
                  "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                se.appendChild(u).appendChild(l);
              var e = n.getComputedStyle(l);
              (r = "1%" !== e.top),
                (c = 12 === t(e.marginLeft)),
                (l.style.right = "60%"),
                (s = 36 === t(e.right)),
                (o = 36 === t(e.width)),
                (l.style.position = "absolute"),
                (i = 12 === t(l.offsetWidth / 3)),
                se.removeChild(u),
                (l = null);
            }
          }
          function t(e) {
            return Math.round(parseFloat(e));
          }
          var r,
            o,
            i,
            s,
            a,
            c,
            u = b.createElement("div"),
            l = b.createElement("div");
          l.style &&
            ((l.style.backgroundClip = "content-box"),
            (l.cloneNode(!0).style.backgroundClip = ""),
            (m.clearCloneStyle = "content-box" === l.style.backgroundClip),
            k.extend(m, {
              boxSizingReliable: function () {
                return e(), o;
              },
              pixelBoxStyles: function () {
                return e(), s;
              },
              pixelPosition: function () {
                return e(), r;
              },
              reliableMarginLeft: function () {
                return e(), c;
              },
              scrollboxSize: function () {
                return e(), i;
              },
              reliableTrDimensions: function () {
                var e, t, r, o;
                return (
                  null == a &&
                    ((e = b.createElement("table")),
                    (t = b.createElement("tr")),
                    (r = b.createElement("div")),
                    (e.style.cssText = "position:absolute;left:-11111px"),
                    (t.style.height = "1px"),
                    (r.style.height = "9px"),
                    se.appendChild(e).appendChild(t).appendChild(r),
                    (o = n.getComputedStyle(t)),
                    (a = parseInt(o.height) > 3),
                    se.removeChild(e)),
                  a
                );
              },
            }));
        })();
        var Qe = ["Webkit", "Moz", "ms"],
          Ke = b.createElement("div").style,
          Xe = {};
        function Ye(e) {
          var t = k.cssProps[e] || Xe[e];
          return (
            t ||
            (e in Ke
              ? e
              : (Xe[e] =
                  (function (e) {
                    for (
                      var t = e[0].toUpperCase() + e.slice(1), n = Qe.length;
                      n--;

                    )
                      if ((e = Qe[n] + t) in Ke) return e;
                  })(e) || e))
          );
        }
        var Ge = /^(none|table(?!-c[ea]).+)/,
          Je = /^--/,
          et = { position: "absolute", visibility: "hidden", display: "block" },
          tt = { letterSpacing: "0", fontWeight: "400" };
        function nt(e, t, n) {
          var r = oe.exec(t);
          return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
        }
        function rt(e, t, n, r, o, i) {
          var s = "width" === t ? 1 : 0,
            a = 0,
            c = 0;
          if (n === (r ? "border" : "content")) return 0;
          for (; s < 4; s += 2)
            "margin" === n && (c += k.css(e, n + ie[s], !0, o)),
              r
                ? ("content" === n && (c -= k.css(e, "padding" + ie[s], !0, o)),
                  "margin" !== n &&
                    (c -= k.css(e, "border" + ie[s] + "Width", !0, o)))
                : ((c += k.css(e, "padding" + ie[s], !0, o)),
                  "padding" !== n
                    ? (c += k.css(e, "border" + ie[s] + "Width", !0, o))
                    : (a += k.css(e, "border" + ie[s] + "Width", !0, o)));
          return (
            !r &&
              i >= 0 &&
              (c +=
                Math.max(
                  0,
                  Math.ceil(
                    e["offset" + t[0].toUpperCase() + t.slice(1)] -
                      i -
                      c -
                      a -
                      0.5
                  )
                ) || 0),
            c
          );
        }
        function ot(e, t, n) {
          var r = Be(e),
            o =
              (!m.boxSizingReliable() || n) &&
              "border-box" === k.css(e, "boxSizing", !1, r),
            i = o,
            s = Ue(e, t, r),
            a = "offset" + t[0].toUpperCase() + t.slice(1);
          if (ze.test(s)) {
            if (!n) return s;
            s = "auto";
          }
          return (
            ((!m.boxSizingReliable() && o) ||
              (!m.reliableTrDimensions() && D(e, "tr")) ||
              "auto" === s ||
              (!parseFloat(s) && "inline" === k.css(e, "display", !1, r))) &&
              e.getClientRects().length &&
              ((o = "border-box" === k.css(e, "boxSizing", !1, r)),
              (i = a in e) && (s = e[a])),
            (s = parseFloat(s) || 0) +
              rt(e, t, n || (o ? "border" : "content"), i, r, s) +
              "px"
          );
        }
        function it(e, t, n, r, o) {
          return new it.prototype.init(e, t, n, r, o);
        }
        k.extend({
          cssHooks: {
            opacity: {
              get: function (e, t) {
                if (t) {
                  var n = Ue(e, "opacity");
                  return "" === n ? "1" : n;
                }
              },
            },
          },
          cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
          },
          cssProps: {},
          style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
              var o,
                i,
                s,
                a = K(t),
                c = Je.test(t),
                u = e.style;
              if (
                (c || (t = Ye(a)),
                (s = k.cssHooks[t] || k.cssHooks[a]),
                void 0 === n)
              )
                return s && "get" in s && void 0 !== (o = s.get(e, !1, r))
                  ? o
                  : u[t];
              "string" === (i = typeof n) &&
                (o = oe.exec(n)) &&
                o[1] &&
                ((n = le(e, t, o)), (i = "number")),
                null != n &&
                  n == n &&
                  ("number" !== i ||
                    c ||
                    (n += (o && o[3]) || (k.cssNumber[a] ? "" : "px")),
                  m.clearCloneStyle ||
                    "" !== n ||
                    0 !== t.indexOf("background") ||
                    (u[t] = "inherit"),
                  (s && "set" in s && void 0 === (n = s.set(e, n, r))) ||
                    (c ? u.setProperty(t, n) : (u[t] = n)));
            }
          },
          css: function (e, t, n, r) {
            var o,
              i,
              s,
              a = K(t);
            return (
              Je.test(t) || (t = Ye(a)),
              (s = k.cssHooks[t] || k.cssHooks[a]) &&
                "get" in s &&
                (o = s.get(e, !0, n)),
              void 0 === o && (o = Ue(e, t, r)),
              "normal" === o && t in tt && (o = tt[t]),
              "" === n || n
                ? ((i = parseFloat(o)), !0 === n || isFinite(i) ? i || 0 : o)
                : o
            );
          },
        }),
          k.each(["height", "width"], function (e, t) {
            k.cssHooks[t] = {
              get: function (e, n, r) {
                if (n)
                  return !Ge.test(k.css(e, "display")) ||
                    (e.getClientRects().length &&
                      e.getBoundingClientRect().width)
                    ? ot(e, t, r)
                    : We(e, et, function () {
                        return ot(e, t, r);
                      });
              },
              set: function (e, n, r) {
                var o,
                  i = Be(e),
                  s = !m.scrollboxSize() && "absolute" === i.position,
                  a = (s || r) && "border-box" === k.css(e, "boxSizing", !1, i),
                  c = r ? rt(e, t, r, a, i) : 0;
                return (
                  a &&
                    s &&
                    (c -= Math.ceil(
                      e["offset" + t[0].toUpperCase() + t.slice(1)] -
                        parseFloat(i[t]) -
                        rt(e, t, "border", !1, i) -
                        0.5
                    )),
                  c &&
                    (o = oe.exec(n)) &&
                    "px" !== (o[3] || "px") &&
                    ((e.style[t] = n), (n = k.css(e, t))),
                  nt(0, n, c)
                );
              },
            };
          }),
          (k.cssHooks.marginLeft = Ze(m.reliableMarginLeft, function (e, t) {
            if (t)
              return (
                (parseFloat(Ue(e, "marginLeft")) ||
                  e.getBoundingClientRect().left -
                    We(e, { marginLeft: 0 }, function () {
                      return e.getBoundingClientRect().left;
                    })) + "px"
              );
          })),
          k.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
            (k.cssHooks[e + t] = {
              expand: function (n) {
                for (
                  var r = 0,
                    o = {},
                    i = "string" == typeof n ? n.split(" ") : [n];
                  r < 4;
                  r++
                )
                  o[e + ie[r] + t] = i[r] || i[r - 2] || i[0];
                return o;
              },
            }),
              "margin" !== e && (k.cssHooks[e + t].set = nt);
          }),
          k.fn.extend({
            css: function (e, t) {
              return $(
                this,
                function (e, t, n) {
                  var r,
                    o,
                    i = {},
                    s = 0;
                  if (Array.isArray(t)) {
                    for (r = Be(e), o = t.length; s < o; s++)
                      i[t[s]] = k.css(e, t[s], !1, r);
                    return i;
                  }
                  return void 0 !== n ? k.style(e, t, n) : k.css(e, t);
                },
                e,
                t,
                arguments.length > 1
              );
            },
          }),
          (k.Tween = it),
          (it.prototype = {
            constructor: it,
            init: function (e, t, n, r, o, i) {
              (this.elem = e),
                (this.prop = n),
                (this.easing = o || k.easing._default),
                (this.options = t),
                (this.start = this.now = this.cur()),
                (this.end = r),
                (this.unit = i || (k.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
              var e = it.propHooks[this.prop];
              return e && e.get ? e.get(this) : it.propHooks._default.get(this);
            },
            run: function (e) {
              var t,
                n = it.propHooks[this.prop];
              return (
                this.options.duration
                  ? (this.pos = t =
                      k.easing[this.easing](
                        e,
                        this.options.duration * e,
                        0,
                        1,
                        this.options.duration
                      ))
                  : (this.pos = t = e),
                (this.now = (this.end - this.start) * t + this.start),
                this.options.step &&
                  this.options.step.call(this.elem, this.now, this),
                n && n.set ? n.set(this) : it.propHooks._default.set(this),
                this
              );
            },
          }),
          (it.prototype.init.prototype = it.prototype),
          (it.propHooks = {
            _default: {
              get: function (e) {
                var t;
                return 1 !== e.elem.nodeType ||
                  (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                  ? e.elem[e.prop]
                  : (t = k.css(e.elem, e.prop, "")) && "auto" !== t
                  ? t
                  : 0;
              },
              set: function (e) {
                k.fx.step[e.prop]
                  ? k.fx.step[e.prop](e)
                  : 1 !== e.elem.nodeType ||
                    (!k.cssHooks[e.prop] && null == e.elem.style[Ye(e.prop)])
                  ? (e.elem[e.prop] = e.now)
                  : k.style(e.elem, e.prop, e.now + e.unit);
              },
            },
          }),
          (it.propHooks.scrollTop = it.propHooks.scrollLeft =
            {
              set: function (e) {
                e.elem.nodeType &&
                  e.elem.parentNode &&
                  (e.elem[e.prop] = e.now);
              },
            }),
          (k.easing = {
            linear: function (e) {
              return e;
            },
            swing: function (e) {
              return 0.5 - Math.cos(e * Math.PI) / 2;
            },
            _default: "swing",
          }),
          (k.fx = it.prototype.init),
          (k.fx.step = {});
        var st,
          at,
          ct = /^(?:toggle|show|hide)$/,
          ut = /queueHooks$/;
        function lt() {
          at &&
            (!1 === b.hidden && n.requestAnimationFrame
              ? n.requestAnimationFrame(lt)
              : n.setTimeout(lt, k.fx.interval),
            k.fx.tick());
        }
        function dt() {
          return (
            n.setTimeout(function () {
              st = void 0;
            }),
            (st = Date.now())
          );
        }
        function ft(e, t) {
          var n,
            r = 0,
            o = { height: e };
          for (t = t ? 1 : 0; r < 4; r += 2 - t)
            o["margin" + (n = ie[r])] = o["padding" + n] = e;
          return t && (o.opacity = o.width = e), o;
        }
        function ht(e, t, n) {
          for (
            var r,
              o = (pt.tweeners[t] || []).concat(pt.tweeners["*"]),
              i = 0,
              s = o.length;
            i < s;
            i++
          )
            if ((r = o[i].call(n, t, e))) return r;
        }
        function pt(e, t, n) {
          var r,
            o,
            i = 0,
            s = pt.prefilters.length,
            a = k.Deferred().always(function () {
              delete c.elem;
            }),
            c = function () {
              if (o) return !1;
              for (
                var t = st || dt(),
                  n = Math.max(0, u.startTime + u.duration - t),
                  r = 1 - (n / u.duration || 0),
                  i = 0,
                  s = u.tweens.length;
                i < s;
                i++
              )
                u.tweens[i].run(r);
              return (
                a.notifyWith(e, [u, r, n]),
                r < 1 && s
                  ? n
                  : (s || a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u]), !1)
              );
            },
            u = a.promise({
              elem: e,
              props: k.extend({}, t),
              opts: k.extend(
                !0,
                { specialEasing: {}, easing: k.easing._default },
                n
              ),
              originalProperties: t,
              originalOptions: n,
              startTime: st || dt(),
              duration: n.duration,
              tweens: [],
              createTween: function (t, n) {
                var r = k.Tween(
                  e,
                  u.opts,
                  t,
                  n,
                  u.opts.specialEasing[t] || u.opts.easing
                );
                return u.tweens.push(r), r;
              },
              stop: function (t) {
                var n = 0,
                  r = t ? u.tweens.length : 0;
                if (o) return this;
                for (o = !0; n < r; n++) u.tweens[n].run(1);
                return (
                  t
                    ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t]))
                    : a.rejectWith(e, [u, t]),
                  this
                );
              },
            }),
            l = u.props;
          for (
            !(function (e, t) {
              var n, r, o, i, s;
              for (n in e)
                if (
                  ((o = t[(r = K(n))]),
                  (i = e[n]),
                  Array.isArray(i) && ((o = i[1]), (i = e[n] = i[0])),
                  n !== r && ((e[r] = i), delete e[n]),
                  (s = k.cssHooks[r]) && ("expand" in s))
                )
                  for (n in ((i = s.expand(i)), delete e[r], i))
                    (n in e) || ((e[n] = i[n]), (t[n] = o));
                else t[r] = o;
            })(l, u.opts.specialEasing);
            i < s;
            i++
          )
            if ((r = pt.prefilters[i].call(u, e, l, u.opts)))
              return (
                v(r.stop) &&
                  (k._queueHooks(u.elem, u.opts.queue).stop = r.stop.bind(r)),
                r
              );
          return (
            k.map(l, ht, u),
            v(u.opts.start) && u.opts.start.call(e, u),
            u
              .progress(u.opts.progress)
              .done(u.opts.done, u.opts.complete)
              .fail(u.opts.fail)
              .always(u.opts.always),
            k.fx.timer(k.extend(c, { elem: e, anim: u, queue: u.opts.queue })),
            u
          );
        }
        (k.Animation = k.extend(pt, {
          tweeners: {
            "*": [
              function (e, t) {
                var n = this.createTween(e, t);
                return le(n.elem, e, oe.exec(t), n), n;
              },
            ],
          },
          tweener: function (e, t) {
            v(e) ? ((t = e), (e = ["*"])) : (e = e.match(F));
            for (var n, r = 0, o = e.length; r < o; r++)
              (n = e[r]),
                (pt.tweeners[n] = pt.tweeners[n] || []),
                pt.tweeners[n].unshift(t);
          },
          prefilters: [
            function (e, t, n) {
              var r,
                o,
                i,
                s,
                a,
                c,
                u,
                l,
                d = "width" in t || "height" in t,
                f = this,
                h = {},
                p = e.style,
                g = e.nodeType && ue(e),
                m = G.get(e, "fxshow");
              for (r in (n.queue ||
                (null == (s = k._queueHooks(e, "fx")).unqueued &&
                  ((s.unqueued = 0),
                  (a = s.empty.fire),
                  (s.empty.fire = function () {
                    s.unqueued || a();
                  })),
                s.unqueued++,
                f.always(function () {
                  f.always(function () {
                    s.unqueued--, k.queue(e, "fx").length || s.empty.fire();
                  });
                })),
              t))
                if (((o = t[r]), ct.test(o))) {
                  if (
                    (delete t[r],
                    (i = i || "toggle" === o),
                    o === (g ? "hide" : "show"))
                  ) {
                    if ("show" !== o || !m || void 0 === m[r]) continue;
                    g = !0;
                  }
                  h[r] = (m && m[r]) || k.style(e, r);
                }
              if ((c = !k.isEmptyObject(t)) || !k.isEmptyObject(h))
                for (r in (d &&
                  1 === e.nodeType &&
                  ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
                  null == (u = m && m.display) && (u = G.get(e, "display")),
                  "none" === (l = k.css(e, "display")) &&
                    (u
                      ? (l = u)
                      : (he([e], !0),
                        (u = e.style.display || u),
                        (l = k.css(e, "display")),
                        he([e]))),
                  ("inline" === l || ("inline-block" === l && null != u)) &&
                    "none" === k.css(e, "float") &&
                    (c ||
                      (f.done(function () {
                        p.display = u;
                      }),
                      null == u &&
                        ((l = p.display), (u = "none" === l ? "" : l))),
                    (p.display = "inline-block"))),
                n.overflow &&
                  ((p.overflow = "hidden"),
                  f.always(function () {
                    (p.overflow = n.overflow[0]),
                      (p.overflowX = n.overflow[1]),
                      (p.overflowY = n.overflow[2]);
                  })),
                (c = !1),
                h))
                  c ||
                    (m
                      ? "hidden" in m && (g = m.hidden)
                      : (m = G.access(e, "fxshow", { display: u })),
                    i && (m.hidden = !g),
                    g && he([e], !0),
                    f.done(function () {
                      for (r in (g || he([e]), G.remove(e, "fxshow"), h))
                        k.style(e, r, h[r]);
                    })),
                    (c = ht(g ? m[r] : 0, r, f)),
                    r in m ||
                      ((m[r] = c.start),
                      g && ((c.end = c.start), (c.start = 0)));
            },
          ],
          prefilter: function (e, t) {
            t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
          },
        })),
          (k.speed = function (e, t, n) {
            var r =
              e && "object" == typeof e
                ? k.extend({}, e)
                : {
                    complete: n || (!n && t) || (v(e) && e),
                    duration: e,
                    easing: (n && t) || (t && !v(t) && t),
                  };
            return (
              k.fx.off
                ? (r.duration = 0)
                : "number" != typeof r.duration &&
                  (r.duration in k.fx.speeds
                    ? (r.duration = k.fx.speeds[r.duration])
                    : (r.duration = k.fx.speeds._default)),
              (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
              (r.old = r.complete),
              (r.complete = function () {
                v(r.old) && r.old.call(this),
                  r.queue && k.dequeue(this, r.queue);
              }),
              r
            );
          }),
          k.fn.extend({
            fadeTo: function (e, t, n, r) {
              return this.filter(ue)
                .css("opacity", 0)
                .show()
                .end()
                .animate({ opacity: t }, e, n, r);
            },
            animate: function (e, t, n, r) {
              var o = k.isEmptyObject(e),
                i = k.speed(t, n, r),
                s = function () {
                  var t = pt(this, k.extend({}, e), i);
                  (o || G.get(this, "finish")) && t.stop(!0);
                };
              return (
                (s.finish = s),
                o || !1 === i.queue ? this.each(s) : this.queue(i.queue, s)
              );
            },
            stop: function (e, t, n) {
              var r = function (e) {
                var t = e.stop;
                delete e.stop, t(n);
              };
              return (
                "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                t && this.queue(e || "fx", []),
                this.each(function () {
                  var t = !0,
                    o = null != e && e + "queueHooks",
                    i = k.timers,
                    s = G.get(this);
                  if (o) s[o] && s[o].stop && r(s[o]);
                  else for (o in s) s[o] && s[o].stop && ut.test(o) && r(s[o]);
                  for (o = i.length; o--; )
                    i[o].elem !== this ||
                      (null != e && i[o].queue !== e) ||
                      (i[o].anim.stop(n), (t = !1), i.splice(o, 1));
                  (!t && n) || k.dequeue(this, e);
                })
              );
            },
            finish: function (e) {
              return (
                !1 !== e && (e = e || "fx"),
                this.each(function () {
                  var t,
                    n = G.get(this),
                    r = n[e + "queue"],
                    o = n[e + "queueHooks"],
                    i = k.timers,
                    s = r ? r.length : 0;
                  for (
                    n.finish = !0,
                      k.queue(this, e, []),
                      o && o.stop && o.stop.call(this, !0),
                      t = i.length;
                    t--;

                  )
                    i[t].elem === this &&
                      i[t].queue === e &&
                      (i[t].anim.stop(!0), i.splice(t, 1));
                  for (t = 0; t < s; t++)
                    r[t] && r[t].finish && r[t].finish.call(this);
                  delete n.finish;
                })
              );
            },
          }),
          k.each(["toggle", "show", "hide"], function (e, t) {
            var n = k.fn[t];
            k.fn[t] = function (e, r, o) {
              return null == e || "boolean" == typeof e
                ? n.apply(this, arguments)
                : this.animate(ft(t, !0), e, r, o);
            };
          }),
          k.each(
            {
              slideDown: ft("show"),
              slideUp: ft("hide"),
              slideToggle: ft("toggle"),
              fadeIn: { opacity: "show" },
              fadeOut: { opacity: "hide" },
              fadeToggle: { opacity: "toggle" },
            },
            function (e, t) {
              k.fn[e] = function (e, n, r) {
                return this.animate(t, e, n, r);
              };
            }
          ),
          (k.timers = []),
          (k.fx.tick = function () {
            var e,
              t = 0,
              n = k.timers;
            for (st = Date.now(); t < n.length; t++)
              (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || k.fx.stop(), (st = void 0);
          }),
          (k.fx.timer = function (e) {
            k.timers.push(e), k.fx.start();
          }),
          (k.fx.interval = 13),
          (k.fx.start = function () {
            at || ((at = !0), lt());
          }),
          (k.fx.stop = function () {
            at = null;
          }),
          (k.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
          (k.fn.delay = function (e, t) {
            return (
              (e = (k.fx && k.fx.speeds[e]) || e),
              (t = t || "fx"),
              this.queue(t, function (t, r) {
                var o = n.setTimeout(t, e);
                r.stop = function () {
                  n.clearTimeout(o);
                };
              })
            );
          }),
          (function () {
            var e = b.createElement("input"),
              t = b
                .createElement("select")
                .appendChild(b.createElement("option"));
            (e.type = "checkbox"),
              (m.checkOn = "" !== e.value),
              (m.optSelected = t.selected),
              ((e = b.createElement("input")).value = "t"),
              (e.type = "radio"),
              (m.radioValue = "t" === e.value);
          })();
        var gt,
          mt = k.expr.attrHandle;
        k.fn.extend({
          attr: function (e, t) {
            return $(this, k.attr, e, t, arguments.length > 1);
          },
          removeAttr: function (e) {
            return this.each(function () {
              k.removeAttr(this, e);
            });
          },
        }),
          k.extend({
            attr: function (e, t, n) {
              var r,
                o,
                i = e.nodeType;
              if (3 !== i && 8 !== i && 2 !== i)
                return void 0 === e.getAttribute
                  ? k.prop(e, t, n)
                  : ((1 === i && k.isXMLDoc(e)) ||
                      (o =
                        k.attrHooks[t.toLowerCase()] ||
                        (k.expr.match.bool.test(t) ? gt : void 0)),
                    void 0 !== n
                      ? null === n
                        ? void k.removeAttr(e, t)
                        : o && "set" in o && void 0 !== (r = o.set(e, n, t))
                        ? r
                        : (e.setAttribute(t, n + ""), n)
                      : o && "get" in o && null !== (r = o.get(e, t))
                      ? r
                      : null == (r = k.find.attr(e, t))
                      ? void 0
                      : r);
            },
            attrHooks: {
              type: {
                set: function (e, t) {
                  if (!m.radioValue && "radio" === t && D(e, "input")) {
                    var n = e.value;
                    return e.setAttribute("type", t), n && (e.value = n), t;
                  }
                },
              },
            },
            removeAttr: function (e, t) {
              var n,
                r = 0,
                o = t && t.match(F);
              if (o && 1 === e.nodeType)
                for (; (n = o[r++]); ) e.removeAttribute(n);
            },
          }),
          (gt = {
            set: function (e, t, n) {
              return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n;
            },
          }),
          k.each(k.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = mt[t] || k.find.attr;
            mt[t] = function (e, t, r) {
              var o,
                i,
                s = t.toLowerCase();
              return (
                r ||
                  ((i = mt[s]),
                  (mt[s] = o),
                  (o = null != n(e, t, r) ? s : null),
                  (mt[s] = i)),
                o
              );
            };
          });
        var vt = /^(?:input|select|textarea|button)$/i,
          yt = /^(?:a|area)$/i;
        function bt(e) {
          return (e.match(F) || []).join(" ");
        }
        function wt(e) {
          return (e.getAttribute && e.getAttribute("class")) || "";
        }
        function _t(e) {
          return Array.isArray(e)
            ? e
            : ("string" == typeof e && e.match(F)) || [];
        }
        k.fn.extend({
          prop: function (e, t) {
            return $(this, k.prop, e, t, arguments.length > 1);
          },
          removeProp: function (e) {
            return this.each(function () {
              delete this[k.propFix[e] || e];
            });
          },
        }),
          k.extend({
            prop: function (e, t, n) {
              var r,
                o,
                i = e.nodeType;
              if (3 !== i && 8 !== i && 2 !== i)
                return (
                  (1 === i && k.isXMLDoc(e)) ||
                    ((t = k.propFix[t] || t), (o = k.propHooks[t])),
                  void 0 !== n
                    ? o && "set" in o && void 0 !== (r = o.set(e, n, t))
                      ? r
                      : (e[t] = n)
                    : o && "get" in o && null !== (r = o.get(e, t))
                    ? r
                    : e[t]
                );
            },
            propHooks: {
              tabIndex: {
                get: function (e) {
                  var t = k.find.attr(e, "tabindex");
                  return t
                    ? parseInt(t, 10)
                    : vt.test(e.nodeName) || (yt.test(e.nodeName) && e.href)
                    ? 0
                    : -1;
                },
              },
            },
            propFix: { for: "htmlFor", class: "className" },
          }),
          m.optSelected ||
            (k.propHooks.selected = {
              get: function (e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null;
              },
              set: function (e) {
                var t = e.parentNode;
                t &&
                  (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
              },
            }),
          k.each(
            [
              "tabIndex",
              "readOnly",
              "maxLength",
              "cellSpacing",
              "cellPadding",
              "rowSpan",
              "colSpan",
              "useMap",
              "frameBorder",
              "contentEditable",
            ],
            function () {
              k.propFix[this.toLowerCase()] = this;
            }
          ),
          k.fn.extend({
            addClass: function (e) {
              var t,
                n,
                r,
                o,
                i,
                s,
                a,
                c = 0;
              if (v(e))
                return this.each(function (t) {
                  k(this).addClass(e.call(this, t, wt(this)));
                });
              if ((t = _t(e)).length)
                for (; (n = this[c++]); )
                  if (
                    ((o = wt(n)), (r = 1 === n.nodeType && " " + bt(o) + " "))
                  ) {
                    for (s = 0; (i = t[s++]); )
                      r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                    o !== (a = bt(r)) && n.setAttribute("class", a);
                  }
              return this;
            },
            removeClass: function (e) {
              var t,
                n,
                r,
                o,
                i,
                s,
                a,
                c = 0;
              if (v(e))
                return this.each(function (t) {
                  k(this).removeClass(e.call(this, t, wt(this)));
                });
              if (!arguments.length) return this.attr("class", "");
              if ((t = _t(e)).length)
                for (; (n = this[c++]); )
                  if (
                    ((o = wt(n)), (r = 1 === n.nodeType && " " + bt(o) + " "))
                  ) {
                    for (s = 0; (i = t[s++]); )
                      for (; r.indexOf(" " + i + " ") > -1; )
                        r = r.replace(" " + i + " ", " ");
                    o !== (a = bt(r)) && n.setAttribute("class", a);
                  }
              return this;
            },
            toggleClass: function (e, t) {
              var n = typeof e,
                r = "string" === n || Array.isArray(e);
              return "boolean" == typeof t && r
                ? t
                  ? this.addClass(e)
                  : this.removeClass(e)
                : v(e)
                ? this.each(function (n) {
                    k(this).toggleClass(e.call(this, n, wt(this), t), t);
                  })
                : this.each(function () {
                    var t, o, i, s;
                    if (r)
                      for (o = 0, i = k(this), s = _t(e); (t = s[o++]); )
                        i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                    else
                      (void 0 !== e && "boolean" !== n) ||
                        ((t = wt(this)) && G.set(this, "__className__", t),
                        this.setAttribute &&
                          this.setAttribute(
                            "class",
                            t || !1 === e
                              ? ""
                              : G.get(this, "__className__") || ""
                          ));
                  });
            },
            hasClass: function (e) {
              var t,
                n,
                r = 0;
              for (t = " " + e + " "; (n = this[r++]); )
                if (1 === n.nodeType && (" " + bt(wt(n)) + " ").indexOf(t) > -1)
                  return !0;
              return !1;
            },
          });
        var xt = /\r/g;
        k.fn.extend({
          val: function (e) {
            var t,
              n,
              r,
              o = this[0];
            return arguments.length
              ? ((r = v(e)),
                this.each(function (n) {
                  var o;
                  1 === this.nodeType &&
                    (null == (o = r ? e.call(this, n, k(this).val()) : e)
                      ? (o = "")
                      : "number" == typeof o
                      ? (o += "")
                      : Array.isArray(o) &&
                        (o = k.map(o, function (e) {
                          return null == e ? "" : e + "";
                        })),
                    ((t =
                      k.valHooks[this.type] ||
                      k.valHooks[this.nodeName.toLowerCase()]) &&
                      "set" in t &&
                      void 0 !== t.set(this, o, "value")) ||
                      (this.value = o));
                }))
              : o
              ? (t =
                  k.valHooks[o.type] || k.valHooks[o.nodeName.toLowerCase()]) &&
                "get" in t &&
                void 0 !== (n = t.get(o, "value"))
                ? n
                : "string" == typeof (n = o.value)
                ? n.replace(xt, "")
                : null == n
                ? ""
                : n
              : void 0;
          },
        }),
          k.extend({
            valHooks: {
              option: {
                get: function (e) {
                  var t = k.find.attr(e, "value");
                  return null != t ? t : bt(k.text(e));
                },
              },
              select: {
                get: function (e) {
                  var t,
                    n,
                    r,
                    o = e.options,
                    i = e.selectedIndex,
                    s = "select-one" === e.type,
                    a = s ? null : [],
                    c = s ? i + 1 : o.length;
                  for (r = i < 0 ? c : s ? i : 0; r < c; r++)
                    if (
                      ((n = o[r]).selected || r === i) &&
                      !n.disabled &&
                      (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))
                    ) {
                      if (((t = k(n).val()), s)) return t;
                      a.push(t);
                    }
                  return a;
                },
                set: function (e, t) {
                  for (
                    var n, r, o = e.options, i = k.makeArray(t), s = o.length;
                    s--;

                  )
                    ((r = o[s]).selected =
                      k.inArray(k.valHooks.option.get(r), i) > -1) && (n = !0);
                  return n || (e.selectedIndex = -1), i;
                },
              },
            },
          }),
          k.each(["radio", "checkbox"], function () {
            (k.valHooks[this] = {
              set: function (e, t) {
                if (Array.isArray(t))
                  return (e.checked = k.inArray(k(e).val(), t) > -1);
              },
            }),
              m.checkOn ||
                (k.valHooks[this].get = function (e) {
                  return null === e.getAttribute("value") ? "on" : e.value;
                });
          }),
          (m.focusin = "onfocusin" in n);
        var Tt = /^(?:focusinfocus|focusoutblur)$/,
          kt = function (e) {
            e.stopPropagation();
          };
        k.extend(k.event, {
          trigger: function (e, t, r, o) {
            var i,
              s,
              a,
              c,
              u,
              l,
              d,
              f,
              p = [r || b],
              g = h.call(e, "type") ? e.type : e,
              m = h.call(e, "namespace") ? e.namespace.split(".") : [];
            if (
              ((s = f = a = r = r || b),
              3 !== r.nodeType &&
                8 !== r.nodeType &&
                !Tt.test(g + k.event.triggered) &&
                (g.indexOf(".") > -1 &&
                  ((m = g.split(".")), (g = m.shift()), m.sort()),
                (u = g.indexOf(":") < 0 && "on" + g),
                ((e = e[k.expando]
                  ? e
                  : new k.Event(g, "object" == typeof e && e)).isTrigger = o
                  ? 2
                  : 3),
                (e.namespace = m.join(".")),
                (e.rnamespace = e.namespace
                  ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)")
                  : null),
                (e.result = void 0),
                e.target || (e.target = r),
                (t = null == t ? [e] : k.makeArray(t, [e])),
                (d = k.event.special[g] || {}),
                o || !d.trigger || !1 !== d.trigger.apply(r, t)))
            ) {
              if (!o && !d.noBubble && !y(r)) {
                for (
                  c = d.delegateType || g, Tt.test(c + g) || (s = s.parentNode);
                  s;
                  s = s.parentNode
                )
                  p.push(s), (a = s);
                a === (r.ownerDocument || b) &&
                  p.push(a.defaultView || a.parentWindow || n);
              }
              for (i = 0; (s = p[i++]) && !e.isPropagationStopped(); )
                (f = s),
                  (e.type = i > 1 ? c : d.bindType || g),
                  (l =
                    (G.get(s, "events") || Object.create(null))[e.type] &&
                    G.get(s, "handle")) && l.apply(s, t),
                  (l = u && s[u]) &&
                    l.apply &&
                    X(s) &&
                    ((e.result = l.apply(s, t)),
                    !1 === e.result && e.preventDefault());
              return (
                (e.type = g),
                o ||
                  e.isDefaultPrevented() ||
                  (d._default && !1 !== d._default.apply(p.pop(), t)) ||
                  !X(r) ||
                  (u &&
                    v(r[g]) &&
                    !y(r) &&
                    ((a = r[u]) && (r[u] = null),
                    (k.event.triggered = g),
                    e.isPropagationStopped() && f.addEventListener(g, kt),
                    r[g](),
                    e.isPropagationStopped() && f.removeEventListener(g, kt),
                    (k.event.triggered = void 0),
                    a && (r[u] = a))),
                e.result
              );
            }
          },
          simulate: function (e, t, n) {
            var r = k.extend(new k.Event(), n, { type: e, isSimulated: !0 });
            k.event.trigger(r, null, t);
          },
        }),
          k.fn.extend({
            trigger: function (e, t) {
              return this.each(function () {
                k.event.trigger(e, t, this);
              });
            },
            triggerHandler: function (e, t) {
              var n = this[0];
              if (n) return k.event.trigger(e, t, n, !0);
            },
          }),
          m.focusin ||
            k.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
              var n = function (e) {
                k.event.simulate(t, e.target, k.event.fix(e));
              };
              k.event.special[t] = {
                setup: function () {
                  var r = this.ownerDocument || this.document || this,
                    o = G.access(r, t);
                  o || r.addEventListener(e, n, !0),
                    G.access(r, t, (o || 0) + 1);
                },
                teardown: function () {
                  var r = this.ownerDocument || this.document || this,
                    o = G.access(r, t) - 1;
                  o
                    ? G.access(r, t, o)
                    : (r.removeEventListener(e, n, !0), G.remove(r, t));
                },
              };
            });
        var Ct = n.location,
          Et = { guid: Date.now() },
          St = /\?/;
        k.parseXML = function (e) {
          var t;
          if (!e || "string" != typeof e) return null;
          try {
            t = new n.DOMParser().parseFromString(e, "text/xml");
          } catch (e) {
            t = void 0;
          }
          return (
            (t && !t.getElementsByTagName("parsererror").length) ||
              k.error("Invalid XML: " + e),
            t
          );
        };
        var It = /\[\]$/,
          Mt = /\r?\n/g,
          Dt = /^(?:submit|button|image|reset|file)$/i,
          At = /^(?:input|select|textarea|keygen)/i;
        function Nt(e, t, n, r) {
          var o;
          if (Array.isArray(t))
            k.each(t, function (t, o) {
              n || It.test(e)
                ? r(e, o)
                : Nt(
                    e +
                      "[" +
                      ("object" == typeof o && null != o ? t : "") +
                      "]",
                    o,
                    n,
                    r
                  );
            });
          else if (n || "object" !== x(t)) r(e, t);
          else for (o in t) Nt(e + "[" + o + "]", t[o], n, r);
        }
        (k.param = function (e, t) {
          var n,
            r = [],
            o = function (e, t) {
              var n = v(t) ? t() : t;
              r[r.length] =
                encodeURIComponent(e) +
                "=" +
                encodeURIComponent(null == n ? "" : n);
            };
          if (null == e) return "";
          if (Array.isArray(e) || (e.jquery && !k.isPlainObject(e)))
            k.each(e, function () {
              o(this.name, this.value);
            });
          else for (n in e) Nt(n, e[n], t, o);
          return r.join("&");
        }),
          k.fn.extend({
            serialize: function () {
              return k.param(this.serializeArray());
            },
            serializeArray: function () {
              return this.map(function () {
                var e = k.prop(this, "elements");
                return e ? k.makeArray(e) : this;
              })
                .filter(function () {
                  var e = this.type;
                  return (
                    this.name &&
                    !k(this).is(":disabled") &&
                    At.test(this.nodeName) &&
                    !Dt.test(e) &&
                    (this.checked || !me.test(e))
                  );
                })
                .map(function (e, t) {
                  var n = k(this).val();
                  return null == n
                    ? null
                    : Array.isArray(n)
                    ? k.map(n, function (e) {
                        return { name: t.name, value: e.replace(Mt, "\r\n") };
                      })
                    : { name: t.name, value: n.replace(Mt, "\r\n") };
                })
                .get();
            },
          });
        var Ot = /%20/g,
          jt = /#.*$/,
          Pt = /([?&])_=[^&]*/,
          Rt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
          Ht = /^(?:GET|HEAD)$/,
          Ft = /^\/\//,
          Lt = {},
          Vt = {},
          qt = "*/".concat("*"),
          zt = b.createElement("a");
        function Bt(e) {
          return function (t, n) {
            "string" != typeof t && ((n = t), (t = "*"));
            var r,
              o = 0,
              i = t.toLowerCase().match(F) || [];
            if (v(n))
              for (; (r = i[o++]); )
                "+" === r[0]
                  ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
                  : (e[r] = e[r] || []).push(n);
          };
        }
        function Wt(e, t, n, r) {
          var o = {},
            i = e === Vt;
          function s(a) {
            var c;
            return (
              (o[a] = !0),
              k.each(e[a] || [], function (e, a) {
                var u = a(t, n, r);
                return "string" != typeof u || i || o[u]
                  ? i
                    ? !(c = u)
                    : void 0
                  : (t.dataTypes.unshift(u), s(u), !1);
              }),
              c
            );
          }
          return s(t.dataTypes[0]) || (!o["*"] && s("*"));
        }
        function $t(e, t) {
          var n,
            r,
            o = k.ajaxSettings.flatOptions || {};
          for (n in t)
            void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
          return r && k.extend(!0, e, r), e;
        }
        (zt.href = Ct.href),
          k.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
              url: Ct.href,
              type: "GET",
              isLocal:
                /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                  Ct.protocol
                ),
              global: !0,
              processData: !0,
              async: !0,
              contentType: "application/x-www-form-urlencoded; charset=UTF-8",
              accepts: {
                "*": qt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript",
              },
              contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
              responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON",
              },
              converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": k.parseXML,
              },
              flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (e, t) {
              return t ? $t($t(e, k.ajaxSettings), t) : $t(k.ajaxSettings, e);
            },
            ajaxPrefilter: Bt(Lt),
            ajaxTransport: Bt(Vt),
            ajax: function (e, t) {
              "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
              var r,
                o,
                i,
                s,
                a,
                c,
                u,
                l,
                d,
                f,
                h = k.ajaxSetup({}, t),
                p = h.context || h,
                g = h.context && (p.nodeType || p.jquery) ? k(p) : k.event,
                m = k.Deferred(),
                v = k.Callbacks("once memory"),
                y = h.statusCode || {},
                w = {},
                _ = {},
                x = "canceled",
                T = {
                  readyState: 0,
                  getResponseHeader: function (e) {
                    var t;
                    if (u) {
                      if (!s)
                        for (s = {}; (t = Rt.exec(i)); )
                          s[t[1].toLowerCase() + " "] = (
                            s[t[1].toLowerCase() + " "] || []
                          ).concat(t[2]);
                      t = s[e.toLowerCase() + " "];
                    }
                    return null == t ? null : t.join(", ");
                  },
                  getAllResponseHeaders: function () {
                    return u ? i : null;
                  },
                  setRequestHeader: function (e, t) {
                    return (
                      null == u &&
                        ((e = _[e.toLowerCase()] = _[e.toLowerCase()] || e),
                        (w[e] = t)),
                      this
                    );
                  },
                  overrideMimeType: function (e) {
                    return null == u && (h.mimeType = e), this;
                  },
                  statusCode: function (e) {
                    var t;
                    if (e)
                      if (u) T.always(e[T.status]);
                      else for (t in e) y[t] = [y[t], e[t]];
                    return this;
                  },
                  abort: function (e) {
                    var t = e || x;
                    return r && r.abort(t), C(0, t), this;
                  },
                };
              if (
                (m.promise(T),
                (h.url = ((e || h.url || Ct.href) + "").replace(
                  Ft,
                  Ct.protocol + "//"
                )),
                (h.type = t.method || t.type || h.method || h.type),
                (h.dataTypes = (h.dataType || "*").toLowerCase().match(F) || [
                  "",
                ]),
                null == h.crossDomain)
              ) {
                c = b.createElement("a");
                try {
                  (c.href = h.url),
                    (c.href = c.href),
                    (h.crossDomain =
                      zt.protocol + "//" + zt.host !=
                      c.protocol + "//" + c.host);
                } catch (e) {
                  h.crossDomain = !0;
                }
              }
              if (
                (h.data &&
                  h.processData &&
                  "string" != typeof h.data &&
                  (h.data = k.param(h.data, h.traditional)),
                Wt(Lt, h, t, T),
                u)
              )
                return T;
              for (d in ((l = k.event && h.global) &&
                0 == k.active++ &&
                k.event.trigger("ajaxStart"),
              (h.type = h.type.toUpperCase()),
              (h.hasContent = !Ht.test(h.type)),
              (o = h.url.replace(jt, "")),
              h.hasContent
                ? h.data &&
                  h.processData &&
                  0 ===
                    (h.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  (h.data = h.data.replace(Ot, "+"))
                : ((f = h.url.slice(o.length)),
                  h.data &&
                    (h.processData || "string" == typeof h.data) &&
                    ((o += (St.test(o) ? "&" : "?") + h.data), delete h.data),
                  !1 === h.cache &&
                    ((o = o.replace(Pt, "$1")),
                    (f = (St.test(o) ? "&" : "?") + "_=" + Et.guid++ + f)),
                  (h.url = o + f)),
              h.ifModified &&
                (k.lastModified[o] &&
                  T.setRequestHeader("If-Modified-Since", k.lastModified[o]),
                k.etag[o] && T.setRequestHeader("If-None-Match", k.etag[o])),
              ((h.data && h.hasContent && !1 !== h.contentType) ||
                t.contentType) &&
                T.setRequestHeader("Content-Type", h.contentType),
              T.setRequestHeader(
                "Accept",
                h.dataTypes[0] && h.accepts[h.dataTypes[0]]
                  ? h.accepts[h.dataTypes[0]] +
                      ("*" !== h.dataTypes[0] ? ", " + qt + "; q=0.01" : "")
                  : h.accepts["*"]
              ),
              h.headers))
                T.setRequestHeader(d, h.headers[d]);
              if (h.beforeSend && (!1 === h.beforeSend.call(p, T, h) || u))
                return T.abort();
              if (
                ((x = "abort"),
                v.add(h.complete),
                T.done(h.success),
                T.fail(h.error),
                (r = Wt(Vt, h, t, T)))
              ) {
                if (((T.readyState = 1), l && g.trigger("ajaxSend", [T, h]), u))
                  return T;
                h.async &&
                  h.timeout > 0 &&
                  (a = n.setTimeout(function () {
                    T.abort("timeout");
                  }, h.timeout));
                try {
                  (u = !1), r.send(w, C);
                } catch (e) {
                  if (u) throw e;
                  C(-1, e);
                }
              } else C(-1, "No Transport");
              function C(e, t, s, c) {
                var d,
                  f,
                  b,
                  w,
                  _,
                  x = t;
                u ||
                  ((u = !0),
                  a && n.clearTimeout(a),
                  (r = void 0),
                  (i = c || ""),
                  (T.readyState = e > 0 ? 4 : 0),
                  (d = (e >= 200 && e < 300) || 304 === e),
                  s &&
                    (w = (function (e, t, n) {
                      for (
                        var r, o, i, s, a = e.contents, c = e.dataTypes;
                        "*" === c[0];

                      )
                        c.shift(),
                          void 0 === r &&
                            (r =
                              e.mimeType ||
                              t.getResponseHeader("Content-Type"));
                      if (r)
                        for (o in a)
                          if (a[o] && a[o].test(r)) {
                            c.unshift(o);
                            break;
                          }
                      if (c[0] in n) i = c[0];
                      else {
                        for (o in n) {
                          if (!c[0] || e.converters[o + " " + c[0]]) {
                            i = o;
                            break;
                          }
                          s || (s = o);
                        }
                        i = i || s;
                      }
                      if (i) return i !== c[0] && c.unshift(i), n[i];
                    })(h, T, s)),
                  !d &&
                    k.inArray("script", h.dataTypes) > -1 &&
                    (h.converters["text script"] = function () {}),
                  (w = (function (e, t, n, r) {
                    var o,
                      i,
                      s,
                      a,
                      c,
                      u = {},
                      l = e.dataTypes.slice();
                    if (l[1])
                      for (s in e.converters)
                        u[s.toLowerCase()] = e.converters[s];
                    for (i = l.shift(); i; )
                      if (
                        (e.responseFields[i] && (n[e.responseFields[i]] = t),
                        !c &&
                          r &&
                          e.dataFilter &&
                          (t = e.dataFilter(t, e.dataType)),
                        (c = i),
                        (i = l.shift()))
                      )
                        if ("*" === i) i = c;
                        else if ("*" !== c && c !== i) {
                          if (!(s = u[c + " " + i] || u["* " + i]))
                            for (o in u)
                              if (
                                (a = o.split(" "))[1] === i &&
                                (s = u[c + " " + a[0]] || u["* " + a[0]])
                              ) {
                                !0 === s
                                  ? (s = u[o])
                                  : !0 !== u[o] &&
                                    ((i = a[0]), l.unshift(a[1]));
                                break;
                              }
                          if (!0 !== s)
                            if (s && e.throws) t = s(t);
                            else
                              try {
                                t = s(t);
                              } catch (e) {
                                return {
                                  state: "parsererror",
                                  error: s
                                    ? e
                                    : "No conversion from " + c + " to " + i,
                                };
                              }
                        }
                    return { state: "success", data: t };
                  })(h, w, T, d)),
                  d
                    ? (h.ifModified &&
                        ((_ = T.getResponseHeader("Last-Modified")) &&
                          (k.lastModified[o] = _),
                        (_ = T.getResponseHeader("etag")) && (k.etag[o] = _)),
                      204 === e || "HEAD" === h.type
                        ? (x = "nocontent")
                        : 304 === e
                        ? (x = "notmodified")
                        : ((x = w.state), (f = w.data), (d = !(b = w.error))))
                    : ((b = x), (!e && x) || ((x = "error"), e < 0 && (e = 0))),
                  (T.status = e),
                  (T.statusText = (t || x) + ""),
                  d ? m.resolveWith(p, [f, x, T]) : m.rejectWith(p, [T, x, b]),
                  T.statusCode(y),
                  (y = void 0),
                  l &&
                    g.trigger(d ? "ajaxSuccess" : "ajaxError", [
                      T,
                      h,
                      d ? f : b,
                    ]),
                  v.fireWith(p, [T, x]),
                  l &&
                    (g.trigger("ajaxComplete", [T, h]),
                    --k.active || k.event.trigger("ajaxStop")));
              }
              return T;
            },
            getJSON: function (e, t, n) {
              return k.get(e, t, n, "json");
            },
            getScript: function (e, t) {
              return k.get(e, void 0, t, "script");
            },
          }),
          k.each(["get", "post"], function (e, t) {
            k[t] = function (e, n, r, o) {
              return (
                v(n) && ((o = o || r), (r = n), (n = void 0)),
                k.ajax(
                  k.extend(
                    { url: e, type: t, dataType: o, data: n, success: r },
                    k.isPlainObject(e) && e
                  )
                )
              );
            };
          }),
          k.ajaxPrefilter(function (e) {
            var t;
            for (t in e.headers)
              "content-type" === t.toLowerCase() &&
                (e.contentType = e.headers[t] || "");
          }),
          (k._evalUrl = function (e, t, n) {
            return k.ajax({
              url: e,
              type: "GET",
              dataType: "script",
              cache: !0,
              async: !1,
              global: !1,
              converters: { "text script": function () {} },
              dataFilter: function (e) {
                k.globalEval(e, t, n);
              },
            });
          }),
          k.fn.extend({
            wrapAll: function (e) {
              var t;
              return (
                this[0] &&
                  (v(e) && (e = e.call(this[0])),
                  (t = k(e, this[0].ownerDocument).eq(0).clone(!0)),
                  this[0].parentNode && t.insertBefore(this[0]),
                  t
                    .map(function () {
                      for (var e = this; e.firstElementChild; )
                        e = e.firstElementChild;
                      return e;
                    })
                    .append(this)),
                this
              );
            },
            wrapInner: function (e) {
              return v(e)
                ? this.each(function (t) {
                    k(this).wrapInner(e.call(this, t));
                  })
                : this.each(function () {
                    var t = k(this),
                      n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e);
                  });
            },
            wrap: function (e) {
              var t = v(e);
              return this.each(function (n) {
                k(this).wrapAll(t ? e.call(this, n) : e);
              });
            },
            unwrap: function (e) {
              return (
                this.parent(e)
                  .not("body")
                  .each(function () {
                    k(this).replaceWith(this.childNodes);
                  }),
                this
              );
            },
          }),
          (k.expr.pseudos.hidden = function (e) {
            return !k.expr.pseudos.visible(e);
          }),
          (k.expr.pseudos.visible = function (e) {
            return !!(
              e.offsetWidth ||
              e.offsetHeight ||
              e.getClientRects().length
            );
          }),
          (k.ajaxSettings.xhr = function () {
            try {
              return new n.XMLHttpRequest();
            } catch (e) {}
          });
        var Ut = { 0: 200, 1223: 204 },
          Zt = k.ajaxSettings.xhr();
        (m.cors = !!Zt && "withCredentials" in Zt),
          (m.ajax = Zt = !!Zt),
          k.ajaxTransport(function (e) {
            var t, r;
            if (m.cors || (Zt && !e.crossDomain))
              return {
                send: function (o, i) {
                  var s,
                    a = e.xhr();
                  if (
                    (a.open(e.type, e.url, e.async, e.username, e.password),
                    e.xhrFields)
                  )
                    for (s in e.xhrFields) a[s] = e.xhrFields[s];
                  for (s in (e.mimeType &&
                    a.overrideMimeType &&
                    a.overrideMimeType(e.mimeType),
                  e.crossDomain ||
                    o["X-Requested-With"] ||
                    (o["X-Requested-With"] = "XMLHttpRequest"),
                  o))
                    a.setRequestHeader(s, o[s]);
                  (t = function (e) {
                    return function () {
                      t &&
                        ((t =
                          r =
                          a.onload =
                          a.onerror =
                          a.onabort =
                          a.ontimeout =
                          a.onreadystatechange =
                            null),
                        "abort" === e
                          ? a.abort()
                          : "error" === e
                          ? "number" != typeof a.status
                            ? i(0, "error")
                            : i(a.status, a.statusText)
                          : i(
                              Ut[a.status] || a.status,
                              a.statusText,
                              "text" !== (a.responseType || "text") ||
                                "string" != typeof a.responseText
                                ? { binary: a.response }
                                : { text: a.responseText },
                              a.getAllResponseHeaders()
                            ));
                    };
                  }),
                    (a.onload = t()),
                    (r = a.onerror = a.ontimeout = t("error")),
                    void 0 !== a.onabort
                      ? (a.onabort = r)
                      : (a.onreadystatechange = function () {
                          4 === a.readyState &&
                            n.setTimeout(function () {
                              t && r();
                            });
                        }),
                    (t = t("abort"));
                  try {
                    a.send((e.hasContent && e.data) || null);
                  } catch (e) {
                    if (t) throw e;
                  }
                },
                abort: function () {
                  t && t();
                },
              };
          }),
          k.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1);
          }),
          k.ajaxSetup({
            accepts: {
              script:
                "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
            },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
              "text script": function (e) {
                return k.globalEval(e), e;
              },
            },
          }),
          k.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1),
              e.crossDomain && (e.type = "GET");
          }),
          k.ajaxTransport("script", function (e) {
            var t, n;
            if (e.crossDomain || e.scriptAttrs)
              return {
                send: function (r, o) {
                  (t = k("<script>")
                    .attr(e.scriptAttrs || {})
                    .prop({ charset: e.scriptCharset, src: e.url })
                    .on(
                      "load error",
                      (n = function (e) {
                        t.remove(),
                          (n = null),
                          e && o("error" === e.type ? 404 : 200, e.type);
                      })
                    )),
                    b.head.appendChild(t[0]);
                },
                abort: function () {
                  n && n();
                },
              };
          });
        var Qt,
          Kt = [],
          Xt = /(=)\?(?=&|$)|\?\?/;
        k.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function () {
            var e = Kt.pop() || k.expando + "_" + Et.guid++;
            return (this[e] = !0), e;
          },
        }),
          k.ajaxPrefilter("json jsonp", function (e, t, r) {
            var o,
              i,
              s,
              a =
                !1 !== e.jsonp &&
                (Xt.test(e.url)
                  ? "url"
                  : "string" == typeof e.data &&
                    0 ===
                      (e.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                      ) &&
                    Xt.test(e.data) &&
                    "data");
            if (a || "jsonp" === e.dataTypes[0])
              return (
                (o = e.jsonpCallback =
                  v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                a
                  ? (e[a] = e[a].replace(Xt, "$1" + o))
                  : !1 !== e.jsonp &&
                    (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
                (e.converters["script json"] = function () {
                  return s || k.error(o + " was not called"), s[0];
                }),
                (e.dataTypes[0] = "json"),
                (i = n[o]),
                (n[o] = function () {
                  s = arguments;
                }),
                r.always(function () {
                  void 0 === i ? k(n).removeProp(o) : (n[o] = i),
                    e[o] && ((e.jsonpCallback = t.jsonpCallback), Kt.push(o)),
                    s && v(i) && i(s[0]),
                    (s = i = void 0);
                }),
                "script"
              );
          }),
          (m.createHTMLDocument =
            (((Qt = b.implementation.createHTMLDocument("").body).innerHTML =
              "<form></form><form></form>"),
            2 === Qt.childNodes.length)),
          (k.parseHTML = function (e, t, n) {
            return "string" != typeof e
              ? []
              : ("boolean" == typeof t && ((n = t), (t = !1)),
                t ||
                  (m.createHTMLDocument
                    ? (((r = (t =
                        b.implementation.createHTMLDocument("")).createElement(
                        "base"
                      )).href = b.location.href),
                      t.head.appendChild(r))
                    : (t = b)),
                (i = !n && []),
                (o = A.exec(e))
                  ? [t.createElement(o[1])]
                  : ((o = Te([e], t, i)),
                    i && i.length && k(i).remove(),
                    k.merge([], o.childNodes)));
            var r, o, i;
          }),
          (k.fn.load = function (e, t, n) {
            var r,
              o,
              i,
              s = this,
              a = e.indexOf(" ");
            return (
              a > -1 && ((r = bt(e.slice(a))), (e = e.slice(0, a))),
              v(t)
                ? ((n = t), (t = void 0))
                : t && "object" == typeof t && (o = "POST"),
              s.length > 0 &&
                k
                  .ajax({ url: e, type: o || "GET", dataType: "html", data: t })
                  .done(function (e) {
                    (i = arguments),
                      s.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e);
                  })
                  .always(
                    n &&
                      function (e, t) {
                        s.each(function () {
                          n.apply(this, i || [e.responseText, t, e]);
                        });
                      }
                  ),
              this
            );
          }),
          (k.expr.pseudos.animated = function (e) {
            return k.grep(k.timers, function (t) {
              return e === t.elem;
            }).length;
          }),
          (k.offset = {
            setOffset: function (e, t, n) {
              var r,
                o,
                i,
                s,
                a,
                c,
                u = k.css(e, "position"),
                l = k(e),
                d = {};
              "static" === u && (e.style.position = "relative"),
                (a = l.offset()),
                (i = k.css(e, "top")),
                (c = k.css(e, "left")),
                ("absolute" === u || "fixed" === u) &&
                (i + c).indexOf("auto") > -1
                  ? ((s = (r = l.position()).top), (o = r.left))
                  : ((s = parseFloat(i) || 0), (o = parseFloat(c) || 0)),
                v(t) && (t = t.call(e, n, k.extend({}, a))),
                null != t.top && (d.top = t.top - a.top + s),
                null != t.left && (d.left = t.left - a.left + o),
                "using" in t
                  ? t.using.call(e, d)
                  : ("number" == typeof d.top && (d.top += "px"),
                    "number" == typeof d.left && (d.left += "px"),
                    l.css(d));
            },
          }),
          k.fn.extend({
            offset: function (e) {
              if (arguments.length)
                return void 0 === e
                  ? this
                  : this.each(function (t) {
                      k.offset.setOffset(this, e, t);
                    });
              var t,
                n,
                r = this[0];
              return r
                ? r.getClientRects().length
                  ? ((t = r.getBoundingClientRect()),
                    (n = r.ownerDocument.defaultView),
                    {
                      top: t.top + n.pageYOffset,
                      left: t.left + n.pageXOffset,
                    })
                  : { top: 0, left: 0 }
                : void 0;
            },
            position: function () {
              if (this[0]) {
                var e,
                  t,
                  n,
                  r = this[0],
                  o = { top: 0, left: 0 };
                if ("fixed" === k.css(r, "position"))
                  t = r.getBoundingClientRect();
                else {
                  for (
                    t = this.offset(),
                      n = r.ownerDocument,
                      e = r.offsetParent || n.documentElement;
                    e &&
                    (e === n.body || e === n.documentElement) &&
                    "static" === k.css(e, "position");

                  )
                    e = e.parentNode;
                  e &&
                    e !== r &&
                    1 === e.nodeType &&
                    (((o = k(e).offset()).top += k.css(
                      e,
                      "borderTopWidth",
                      !0
                    )),
                    (o.left += k.css(e, "borderLeftWidth", !0)));
                }
                return {
                  top: t.top - o.top - k.css(r, "marginTop", !0),
                  left: t.left - o.left - k.css(r, "marginLeft", !0),
                };
              }
            },
            offsetParent: function () {
              return this.map(function () {
                for (
                  var e = this.offsetParent;
                  e && "static" === k.css(e, "position");

                )
                  e = e.offsetParent;
                return e || se;
              });
            },
          }),
          k.each(
            { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
            function (e, t) {
              var n = "pageYOffset" === t;
              k.fn[e] = function (r) {
                return $(
                  this,
                  function (e, r, o) {
                    var i;
                    if (
                      (y(e) ? (i = e) : 9 === e.nodeType && (i = e.defaultView),
                      void 0 === o)
                    )
                      return i ? i[t] : e[r];
                    i
                      ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset)
                      : (e[r] = o);
                  },
                  e,
                  r,
                  arguments.length
                );
              };
            }
          ),
          k.each(["top", "left"], function (e, t) {
            k.cssHooks[t] = Ze(m.pixelPosition, function (e, n) {
              if (n)
                return (
                  (n = Ue(e, t)), ze.test(n) ? k(e).position()[t] + "px" : n
                );
            });
          }),
          k.each({ Height: "height", Width: "width" }, function (e, t) {
            k.each(
              { padding: "inner" + e, content: t, "": "outer" + e },
              function (n, r) {
                k.fn[r] = function (o, i) {
                  var s = arguments.length && (n || "boolean" != typeof o),
                    a = n || (!0 === o || !0 === i ? "margin" : "border");
                  return $(
                    this,
                    function (t, n, o) {
                      var i;
                      return y(t)
                        ? 0 === r.indexOf("outer")
                          ? t["inner" + e]
                          : t.document.documentElement["client" + e]
                        : 9 === t.nodeType
                        ? ((i = t.documentElement),
                          Math.max(
                            t.body["scroll" + e],
                            i["scroll" + e],
                            t.body["offset" + e],
                            i["offset" + e],
                            i["client" + e]
                          ))
                        : void 0 === o
                        ? k.css(t, n, a)
                        : k.style(t, n, o, a);
                    },
                    t,
                    s ? o : void 0,
                    s
                  );
                };
              }
            );
          }),
          k.each(
            [
              "ajaxStart",
              "ajaxStop",
              "ajaxComplete",
              "ajaxError",
              "ajaxSuccess",
              "ajaxSend",
            ],
            function (e, t) {
              k.fn[t] = function (e) {
                return this.on(t, e);
              };
            }
          ),
          k.fn.extend({
            bind: function (e, t, n) {
              return this.on(e, null, t, n);
            },
            unbind: function (e, t) {
              return this.off(e, null, t);
            },
            delegate: function (e, t, n, r) {
              return this.on(t, e, n, r);
            },
            undelegate: function (e, t, n) {
              return 1 === arguments.length
                ? this.off(e, "**")
                : this.off(t, e || "**", n);
            },
            hover: function (e, t) {
              return this.mouseenter(e).mouseleave(t || e);
            },
          }),
          k.each(
            "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
              " "
            ),
            function (e, t) {
              k.fn[t] = function (e, n) {
                return arguments.length > 0
                  ? this.on(t, null, e, n)
                  : this.trigger(t);
              };
            }
          );
        var Yt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        (k.proxy = function (e, t) {
          var n, r, o;
          if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), v(e)))
            return (
              (r = a.call(arguments, 2)),
              ((o = function () {
                return e.apply(t || this, r.concat(a.call(arguments)));
              }).guid = e.guid =
                e.guid || k.guid++),
              o
            );
        }),
          (k.holdReady = function (e) {
            e ? k.readyWait++ : k.ready(!0);
          }),
          (k.isArray = Array.isArray),
          (k.parseJSON = JSON.parse),
          (k.nodeName = D),
          (k.isFunction = v),
          (k.isWindow = y),
          (k.camelCase = K),
          (k.type = x),
          (k.now = Date.now),
          (k.isNumeric = function (e) {
            var t = k.type(e);
            return (
              ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            );
          }),
          (k.trim = function (e) {
            return null == e ? "" : (e + "").replace(Yt, "");
          }),
          void 0 ===
            (r = function () {
              return k;
            }.apply(t, [])) || (e.exports = r);
        var Gt = n.jQuery,
          Jt = n.$;
        return (
          (k.noConflict = function (e) {
            return (
              n.$ === k && (n.$ = Jt), e && n.jQuery === k && (n.jQuery = Gt), k
            );
          }),
          void 0 === o && (n.jQuery = n.$ = k),
          k
        );
      });
    },
    function (e, t, n) {
      (function (e) {
        var r =
            (void 0 !== e && e) ||
            ("undefined" != typeof self && self) ||
            window,
          o = Function.prototype.apply;
        function i(e, t) {
          (this._id = e), (this._clearFn = t);
        }
        (t.setTimeout = function () {
          return new i(o.call(setTimeout, r, arguments), clearTimeout);
        }),
          (t.setInterval = function () {
            return new i(o.call(setInterval, r, arguments), clearInterval);
          }),
          (t.clearTimeout = t.clearInterval =
            function (e) {
              e && e.close();
            }),
          (i.prototype.unref = i.prototype.ref = function () {}),
          (i.prototype.close = function () {
            this._clearFn.call(r, this._id);
          }),
          (t.enroll = function (e, t) {
            clearTimeout(e._idleTimeoutId), (e._idleTimeout = t);
          }),
          (t.unenroll = function (e) {
            clearTimeout(e._idleTimeoutId), (e._idleTimeout = -1);
          }),
          (t._unrefActive = t.active =
            function (e) {
              clearTimeout(e._idleTimeoutId);
              var t = e._idleTimeout;
              t >= 0 &&
                (e._idleTimeoutId = setTimeout(function () {
                  e._onTimeout && e._onTimeout();
                }, t));
            }),
          n(25),
          (t.setImmediate =
            ("undefined" != typeof self && self.setImmediate) ||
            (void 0 !== e && e.setImmediate) ||
            (this && this.setImmediate)),
          (t.clearImmediate =
            ("undefined" != typeof self && self.clearImmediate) ||
            (void 0 !== e && e.clearImmediate) ||
            (this && this.clearImmediate));
      }.call(this, n(14)));
    },
    function (e, t, n) {
      (function (e, t) {
        !(function (e, n) {
          "use strict";
          if (!e.setImmediate) {
            var r,
              o,
              i,
              s,
              a,
              c = 1,
              u = {},
              l = !1,
              d = e.document,
              f = Object.getPrototypeOf && Object.getPrototypeOf(e);
            (f = f && f.setTimeout ? f : e),
              "[object process]" === {}.toString.call(e.process)
                ? (r = function (e) {
                    t.nextTick(function () {
                      p(e);
                    });
                  })
                : !(function () {
                    if (e.postMessage && !e.importScripts) {
                      var t = !0,
                        n = e.onmessage;
                      return (
                        (e.onmessage = function () {
                          t = !1;
                        }),
                        e.postMessage("", "*"),
                        (e.onmessage = n),
                        t
                      );
                    }
                  })()
                ? e.MessageChannel
                  ? (((i = new MessageChannel()).port1.onmessage = function (
                      e
                    ) {
                      p(e.data);
                    }),
                    (r = function (e) {
                      i.port2.postMessage(e);
                    }))
                  : d && "onreadystatechange" in d.createElement("script")
                  ? ((o = d.documentElement),
                    (r = function (e) {
                      var t = d.createElement("script");
                      (t.onreadystatechange = function () {
                        p(e),
                          (t.onreadystatechange = null),
                          o.removeChild(t),
                          (t = null);
                      }),
                        o.appendChild(t);
                    }))
                  : (r = function (e) {
                      setTimeout(p, 0, e);
                    })
                : ((s = "setImmediate$" + Math.random() + "$"),
                  (a = function (t) {
                    t.source === e &&
                      "string" == typeof t.data &&
                      0 === t.data.indexOf(s) &&
                      p(+t.data.slice(s.length));
                  }),
                  e.addEventListener
                    ? e.addEventListener("message", a, !1)
                    : e.attachEvent("onmessage", a),
                  (r = function (t) {
                    e.postMessage(s + t, "*");
                  })),
              (f.setImmediate = function (e) {
                "function" != typeof e && (e = new Function("" + e));
                for (
                  var t = new Array(arguments.length - 1), n = 0;
                  n < t.length;
                  n++
                )
                  t[n] = arguments[n + 1];
                var o = { callback: e, args: t };
                return (u[c] = o), r(c), c++;
              }),
              (f.clearImmediate = h);
          }
          function h(e) {
            delete u[e];
          }
          function p(e) {
            if (l) setTimeout(p, 0, e);
            else {
              var t = u[e];
              if (t) {
                l = !0;
                try {
                  !(function (e) {
                    var t = e.callback,
                      n = e.args;
                    switch (n.length) {
                      case 0:
                        t();
                        break;
                      case 1:
                        t(n[0]);
                        break;
                      case 2:
                        t(n[0], n[1]);
                        break;
                      case 3:
                        t(n[0], n[1], n[2]);
                        break;
                      default:
                        t.apply(void 0, n);
                    }
                  })(t);
                } finally {
                  h(e), (l = !1);
                }
              }
            }
          }
        })("undefined" == typeof self ? (void 0 === e ? this : e) : self);
      }.call(this, n(14), n(26)));
    },
    function (e, t) {
      var n,
        r,
        o = (e.exports = {});
      function i() {
        throw new Error("setTimeout has not been defined");
      }
      function s() {
        throw new Error("clearTimeout has not been defined");
      }
      function a(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === i || !n) && setTimeout)
          return (n = setTimeout), setTimeout(e, 0);
        try {
          return n(e, 0);
        } catch (t) {
          try {
            return n.call(null, e, 0);
          } catch (t) {
            return n.call(this, e, 0);
          }
        }
      }
      !(function () {
        try {
          n = "function" == typeof setTimeout ? setTimeout : i;
        } catch (e) {
          n = i;
        }
        try {
          r = "function" == typeof clearTimeout ? clearTimeout : s;
        } catch (e) {
          r = s;
        }
      })();
      var c,
        u = [],
        l = !1,
        d = -1;
      function f() {
        l &&
          c &&
          ((l = !1), c.length ? (u = c.concat(u)) : (d = -1), u.length && h());
      }
      function h() {
        if (!l) {
          var e = a(f);
          l = !0;
          for (var t = u.length; t; ) {
            for (c = u, u = []; ++d < t; ) c && c[d].run();
            (d = -1), (t = u.length);
          }
          (c = null),
            (l = !1),
            (function (e) {
              if (r === clearTimeout) return clearTimeout(e);
              if ((r === s || !r) && clearTimeout)
                return (r = clearTimeout), clearTimeout(e);
              try {
                r(e);
              } catch (t) {
                try {
                  return r.call(null, e);
                } catch (t) {
                  return r.call(this, e);
                }
              }
            })(e);
        }
      }
      function p(e, t) {
        (this.fun = e), (this.array = t);
      }
      function g() {}
      (o.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        u.push(new p(e, t)), 1 !== u.length || l || a(h);
      }),
        (p.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (o.title = "browser"),
        (o.browser = !0),
        (o.env = {}),
        (o.argv = []),
        (o.version = ""),
        (o.versions = {}),
        (o.on = g),
        (o.addListener = g),
        (o.once = g),
        (o.off = g),
        (o.removeListener = g),
        (o.removeAllListeners = g),
        (o.emit = g),
        (o.prependListener = g),
        (o.prependOnceListener = g),
        (o.listeners = function (e) {
          return [];
        }),
        (o.binding = function (e) {
          throw new Error("process.binding is not supported");
        }),
        (o.cwd = function () {
          return "/";
        }),
        (o.chdir = function (e) {
          throw new Error("process.chdir is not supported");
        }),
        (o.umask = function () {
          return 0;
        });
    },
    function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(15);
      class o {
        constructor() {
          (this.eventsToListenFor = []),
            window.addEventListener("message", (e) => {
              let {
                data: { eventName: t, val: n },
              } = e;
              this.getAllEventsToListenFor().forEach((e) => {
                e.eventName === t && e.callback(n);
              });
            });
        }
        postToParent(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          (t = this.executeFuncsInValToSend(t)),
            window.parent.postMessage({ eventName: e, val: t }, "*");
        }
        postToTop(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          (t = this.executeFuncsInValToSend(t)),
            window.top.postMessage({ eventName: e, val: t }, "*");
        }
        postToChild(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          (n = this.executeFuncsInValToSend(n)),
            e.contentWindow.postMessage({ eventName: t, val: n }, "*");
        }
        listAllEvents() {
          return this.eventsToListenFor.map((e) => e.eventName);
        }
        findEvent(e) {
          return this.eventsToListenFor.find((t) => t.eventName === e);
        }
        offEvent(e) {
          this.eventsToListenFor = this.eventsToListenFor.filter(
            (t) => t.eventName !== e
          );
        }
        onEvent(e, t) {
          const n = this.eventsToListenFor.find((t) => t.eventName === e);
          n
            ? (n.callback = t)
            : this.eventsToListenFor.push({ eventName: e, callback: t });
        }
        getAllEventsToListenFor() {
          return this.eventsToListenFor;
        }
        deepSearchForFunction(e, t, n) {
          return "object" == typeof e && null !== e
            ? (Object.keys(e).forEach((r) => {
                const o = this.deepSearchForFunction(e[r], `${t}.${r}`, n);
                "string" == typeof o && n.push(o);
              }),
              n)
            : "function" == typeof e
            ? String(t).substring(1)
            : void 0;
        }
        executeFuncsInValToSend(e) {
          const t = this.deepSearchForFunction(e, "", []);
          return (
            t &&
              "string" != typeof t &&
              t.forEach((t) => {
                const n = e[t];
                e[t] = n();
              }),
            e
          );
        }
      }
      (o.Éµprov = Object(r.b)({
        factory: function () {
          return new o();
        },
        token: o,
        providedIn: "root",
      })),
        (o.decorators = [{ type: r.a, args: [{ providedIn: "root" }] }]),
        (o.ctorParameters = () => []);
      var i = n(17);
      const s = "Embeddedpage",
        a = "Paymentpage";
      class c {
        constructor() {
          const e = document.createElement("div");
          return e.classList.add("card-skeleton"), e;
        }
        static skeletonStyle() {
          return [
            ".card-skeleton {\n        --skeleton-card-padding: 24px;\n        --skeleton-card-height: 323px;\n        --skeleton-card-skeleton: linear-gradient(#f6f6f6 var(--skeleton-card-height), transparent 0);\n        --title-height: 24px;\n        --title-1-width: 35%;\n        --title-2-width: 45%;\n        --title-3-width: 18%;\n        --title-4-width: 90px;\n        --gap-between-grps: 75px;\n        --gap-start-titles: 90px;\n        --gap-start-desc: 119px;\n        --title-1-position: var(--skeleton-card-padding) var(--gap-start-titles);\n        --title-2-position: var(--skeleton-card-padding) calc(var(--gap-start-titles) + var(--gap-between-grps));\n        --title-3-position: var(--skeleton-card-padding) calc(var(--gap-start-titles) + var(--gap-between-grps)*2);\n        --title-4-position: calc(50% + 70px) calc(var(--gap-start-titles) + var(--gap-between-grps)*2);\n        --title-skeleton: linear-gradient(white var(--title-height), transparent 0);\n        --desc-line-height: 31px;\n        --desc-line-skeleton: linear-gradient(white var(--desc-line-height), transparent 0);\n        --desc-line-1-width: calc(100% - 50px);\n        --desc-line-2-width: calc(50% - 50px);\n        --desc-line-1-position: var(--skeleton-card-padding) var(--gap-start-desc);\n        --desc-line-2-position: var(--skeleton-card-padding) calc(var(--gap-start-desc) + var(--gap-between-grps));\n        --desc-line-3-position: var(--skeleton-card-padding) calc(var(--gap-start-desc) + var(--gap-between-grps)*2);\n        --desc-line-4-position: calc(100% - var(--skeleton-card-padding)) calc(var(--gap-start-desc) + var(--gap-between-grps)*2);\n        --header-line-skeleton: linear-gradient(#f6f6f6 var(--desc-line-height), transparent 0);\n        --header-line-width: 50%;\n        --header-line-height: 18px;\n        --header-line-position: var(--skeleton-card-padding) 20px;\n        --header-height: 62px;\n        --header-position: 0 0;\n        --header-skeleton: linear-gradient(white var(--header-height), transparent 0);\n        --blur-width: 200px;\n        --blur-size: var(--blur-width) calc(var(--skeleton-card-height));\n        border: none;\n        width: 100%;\n        height: 0px;\n        position: relative;\n      }",
            '.card-skeleton:empty::after {\n        content: "";\n        display: block;\n        width: 100%;\n        height: var(--skeleton-card-height);\n        position: absolute;\n        border-radius: 0.25rem;\n        border: 1px solid #f2f2f2;\n        background-image: linear-gradient(90deg, rgba(246, 246, 246, 0) 0, rgba(246, 246, 246, 0.8) 50%, rgba(246, 246, 246, 0) 100%),\n        var(--title-skeleton),\n        var(--title-skeleton),\n        var(--title-skeleton),\n        var(--title-skeleton),\n        var(--desc-line-skeleton),\n        var(--desc-line-skeleton),\n        var(--desc-line-skeleton),\n        var(--desc-line-skeleton),\n        var(--header-line-skeleton),\n        var(--header-skeleton),\n        var(--skeleton-card-skeleton);\n        background-size: var(--blur-size),\n        var(--title-1-width) var(--title-height),\n        var(--title-2-width) var(--title-height),\n        var(--title-3-width) var(--title-height),\n        var(--title-4-width) var(--title-height),\n        var(--desc-line-1-width) var(--desc-line-height),\n        var(--desc-line-1-width) var(--desc-line-height),\n        var(--desc-line-2-width) var(--desc-line-height),\n        var(--desc-line-2-width) var(--desc-line-height),\n        var(--header-line-width) var(--header-line-height),\n        100% var(--header-height),\n        100% 100%;\n        background-position: -150% 0,\n        var(--title-1-position),\n        var(--title-2-position),\n        var(--title-3-position),\n        var(--title-4-position),\n        var(--desc-line-1-position),\n        var(--desc-line-2-position),\n        var(--desc-line-3-position),\n        var(--desc-line-4-position),\n        var(--header-line-position),\n        var(--header-position),\n        0 0;\n        background-repeat: no-repeat;\n        -webkit-animation: loading 2.5s infinite;\n        animation: loading 2.5s infinite;\n      }',
            "@keyframes spin {\n        100% { \n          transform: rotate(360deg); \n        }\n      }",
            "@keyframes loading {\n        to {\n          background-position: 350% 0,\n          var(--title-1-position),\n          var(--title-2-position),\n          var(--title-3-position),\n          var(--title-4-position),\n          var(--desc-line-1-position),\n          var(--desc-line-2-position),\n          var(--desc-line-3-position),\n          var(--desc-line-4-position),\n          var(--header-line-position),\n          var(--header-position),\n          0 0;\n        }\n      }",
            ".acs-takeover {\n        position: fixed !important;\n        left: 0px !important;\n        right: 0px !important;\n        top: 0px !important;\n        height: 100% !important;\n      }",
          ];
        }
      }
      const u = c.skeletonStyle();
      class l {
        constructor(e) {
          const t = document.createElement("div"),
            n = document.createElement("style"),
            r =
              e === s
                ? ""
                : "position: fixed; top: 0; right: 0; bottom: 0; left: 0;";
          (n.id = "hc-loader-styles"), document.head.appendChild(n);
          for (let e in u) n.sheet.insertRule(u[e]);
          t.setAttribute("id", "hc-loader-container"),
            (t.style.cssText =
              r +
              "\n      background: rgba(0,0,0,0.15);\n      height: 100%;\n      width: 100%;\n      z-index:99999!important;\n      display: none;");
          const o = document.createElement("div");
          return (
            (o.innerHTML = "<div class='spinner'></div>"),
            (o.style.cssText =
              r +
              "\n      width: 70px;\n      height: 70px;\n      margin: auto;\n      border-radius: 50%;\n      animation: spin .6s infinite linear;\n      border: 2px solid;\n      border-color: #555 #555 transparent transparent;"),
            t.appendChild(o),
            t
          );
        }
      }
      class d {
        constructor(e, t, n) {
          const r =
              t === s
                ? ""
                : "position: fixed; top: 0; right: 0; bottom: 0; left: 0;",
            o = document.createElement("iframe");
          return (
            o.setAttribute("id", n),
            (o.style.cssText =
              r +
              "\n        z-index: 9999;\n        display: block;\n        background-color: transparent;\n        border: 0px none transparent;\n        overflow: hidden auto;\n        visibility: visible;\n        margin: 0px;\n        padding: 0px;\n        height: 323px;\n        width: 100%;"),
            (o.src = e),
            o
          );
        }
      }
      n(23);
      function f(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null,
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : null;
        const r = n || {};
        for (const n in e)
          if (e.hasOwnProperty(n)) {
            const o = t ? t + "." + n : n,
              i = e[n];
            if ("object" == typeof i)
              if (i instanceof Array) {
                0 === i.length && (r[o] = "");
                for (let e = 0, t = i.length; e < t; e++)
                  "object" == typeof i[e]
                    ? f(i[e], o + "[" + e + "]", r)
                    : (r[o + "[" + e + "]"] = i[e]);
              } else f(i, o, r);
            else r[o] = i;
          }
        return r;
      }
      function h(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      class p {
        constructor() {
          h(this, "SESSION_ID_PARAM", "HostedCheckout_sessionId"),
            h(this, "EMBED_CONTAINER_PARAM", "HostedCheckout_embedContainer"),
            h(this, "MERCHANT_STATE_PARAM", "HostedCheckout_merchantState"),
            h(this, "SHOW_LIGHTBOX_FUNC", "HostedCheckout_showLightboxFunc"),
            h(this, "setSessionId", (e) => {
              sessionStorage.setItem(this.SESSION_ID_PARAM, e);
            }),
            h(this, "getSessionId", () =>
              sessionStorage.getItem(this.SESSION_ID_PARAM)
            ),
            h(this, "setMerchantState", (e) => {
              sessionStorage.setItem(
                this.MERCHANT_STATE_PARAM,
                JSON.stringify(e)
              );
            }),
            h(this, "getMerchantState", () =>
              sessionStorage.getItem(this.MERCHANT_STATE_PARAM)
            ),
            h(this, "setEmbedContainer", (e) => {
              sessionStorage.setItem(this.EMBED_CONTAINER_PARAM, e);
            }),
            h(this, "getEmbedContainer", () =>
              sessionStorage.getItem(this.EMBED_CONTAINER_PARAM)
            ),
            h(this, "setShowLightboxFunc", (e) => {
              sessionStorage.setItem(this.SHOW_LIGHTBOX_FUNC, e);
            }),
            h(this, "getShowLightboxFunc", () =>
              sessionStorage.getItem(this.SHOW_LIGHTBOX_FUNC)
            ),
            h(
              this,
              "hasShowLightboxFunc",
              () => !!sessionStorage.getItem(this.SHOW_LIGHTBOX_FUNC)
            ),
            h(this, "hasSavedData", () => this.hasSessionData()),
            h(this, "hasSavedMerchantData", () =>
              this.notNullOrUndefined(this.MERCHANT_STATE_PARAM)
            ),
            h(this, "removeSavedData", () => {
              sessionStorage.removeItem(this.MERCHANT_STATE_PARAM),
                sessionStorage.removeItem(this.EMBED_CONTAINER_PARAM),
                sessionStorage.removeItem(this.SESSION_ID_PARAM),
                sessionStorage.removeItem(this.SHOW_LIGHTBOX_FUNC);
            }),
            h(
              this,
              "hasSessionData",
              () =>
                this.notNullOrUndefined(this.SESSION_ID_PARAM) &&
                this.notNullOrUndefined(this.EMBED_CONTAINER_PARAM) &&
                this.notNullOrUndefined(this.MERCHANT_STATE_PARAM)
            ),
            h(
              this,
              "notNullOrUndefined",
              (e) =>
                sessionStorage.getItem(e) &&
                void 0 !== sessionStorage.getItem(e) &&
                void 0 !== sessionStorage.getItem(e)
            );
        }
      }
      function g(e, t, n) {
        m(e, t), t.set(e, n);
      }
      function m(e, t) {
        if (t.has(e))
          throw new TypeError(
            "Cannot initialize the same private elements twice on an object"
          );
      }
      function v(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function y(e, t) {
        return (function (e, t) {
          if (t.get) return t.get.call(e);
          return t.value;
        })(
          e,
          (function (e, t, n) {
            if (!t.has(e))
              throw new TypeError(
                "attempted to " + n + " private field on non-instance"
              );
            return t.get(e);
          })(e, t, "get")
        );
      }
      var b = new WeakSet(),
        w = new WeakMap(),
        _ = new WeakMap(),
        x = new WeakMap(),
        T = new WeakMap(),
        k = new WeakMap(),
        C = new WeakMap(),
        E = new WeakMap(),
        S = new WeakMap();
      class I {
        constructor(e) {
          var t, n;
          m((t = this), (n = b)),
            n.add(t),
            v(
              this,
              "callbackFlagRegex",
              /__hc-action-(complete|cancel|timeout)(?:-([^-]+)(?:-([^-]+))?(?:-([^-]+))?)?/
            ),
            v(this, "callbackTypes", [
              "complete",
              "error",
              "cancel",
              "afterRedirect",
              "beforeRedirect",
              "timeout",
            ]),
            v(this, "callbackList", []),
            v(this, "windowState", new p()),
            v(this, "getCallbacks", () => this.callbackList),
            v(this, "completeHandler", (e) => {
              e.issuerInstallmentOffer
                ? y(this, T).call(
                    this,
                    this.callbackList.complete,
                    [
                      e.resultIndicator,
                      e.sessionVersion,
                      e.issuerInstallmentOffer,
                    ],
                    [
                      "resultIndicator",
                      "sessionVersion",
                      "issuerInstallmentOffer",
                    ]
                  )
                : y(this, T).call(
                    this,
                    this.callbackList.complete,
                    [e.resultIndicator, e.sessionVersion],
                    ["resultIndicator", "sessionVersion"]
                  );
            }),
            v(this, "errorHandler", (e) => {
              this.callbackList.hasOwnProperty("error")
                ? y(this, T).call(this, this.callbackList.error, [e])
                : (y(this, S).call(this, "Failed to find error callback"),
                  y(this, S).call(this, JSON.stringify(e, null, 4)));
            }),
            v(this, "cancelHandler", () => {
              y(this, T).call(this, this.callbackList.cancel);
            }),
            v(this, "timeoutHandler", (e) => {
              e &&
              e.timeoutUrl &&
              e.timeoutUrl !== this.constructor.defaultTimeoutUrl
                ? this.redirect(e.timeoutUrl)
                : ["function", "string"].includes(
                    typeof this.callbackList.timeout
                  ) && y(this, T).call(this, this.callbackList.timeout);
            }),
            v(this, "beforeRedirectHandler", (e) => {
              this.windowState.setSessionId(e.sessionId),
                "function" == typeof this.callbackList.beforeRedirect
                  ? this.windowState.setMerchantState(
                      this.callbackList.beforeRedirect()
                    )
                  : this.windowState.setMerchantState(null);
            }),
            v(this, "afterRedirectHandler", () => {
              let e = this.windowState.getMerchantState();
              e &&
                (this.callbackList.hasOwnProperty("afterRedirect") &&
                  this.callbackList.afterRedirect(JSON.parse(e)),
                this.windowState.removeSavedData());
            }),
            v(this, "redirect", (e, t, n) => {
              t && (e = y(this, k).call(this, e, t, n)),
                (window.location.href = e);
            }),
            g(this, w, {
              writable: !0,
              value: (e) => {
                for (let t of this.callbackTypes) {
                  let n = "data-" + t,
                    r = y(this, x).call(this, e, n);
                  if (r && "" !== r) {
                    let e = y(this, _).call(this, r, window);
                    if (e) {
                      if ("function" != typeof e && "string" != typeof e)
                        throw (
                          "Callback defined as '" +
                          r +
                          "' in '" +
                          n +
                          "' is not a function or string"
                        );
                      this.callbackList[t] = e;
                    } else this.callbackList[t] = r;
                  }
                }
              },
            }),
            g(this, _, {
              writable: !0,
              value: (e, t) => {
                const n = e.split(".", 2);
                return 1 === n.length
                  ? t[n[0]]
                  : t[n[0]]
                  ? y(this, _).call(this, n[1], t[n[0]])
                  : void 0;
              },
            }),
            g(this, x, {
              writable: !0,
              value: (e, t) => {
                if (e[t]) return e[t];
                const n = e.attributes[t];
                return n ? n.value : void 0;
              },
            }),
            g(this, T, {
              writable: !0,
              value: (e, t, n) => {
                "string" == typeof e
                  ? this.redirect(e, t, n)
                  : ((t = t || []),
                    "function" == typeof e &&
                      (Array.isArray(t) && t.length > 1 && (t = [t.join()]),
                      e.apply(null, t)));
              },
            }),
            g(this, k, {
              writable: !0,
              value: (e, t, n) => {
                let r = new URL(e),
                  o = function (e, t) {
                    r.search =
                      r.search + ("" !== r.search ? "&" : "") + e + "=" + t;
                  };
                for (let e = 0; e < t.length; e++) {
                  let r = {};
                  n ? (r[n[e]] = t[e]) : (r = t[e]),
                    (r = f(r)),
                    y(this, C).call(this, r, o);
                }
                return r;
              },
            }),
            g(this, C, {
              writable: !0,
              value: (e, t) => {
                for (const n in e) e.hasOwnProperty(n) && t(n, e[n]);
              },
            }),
            g(this, E, {
              writable: !0,
              value: () => {
                history.pushState(
                  "",
                  document.title,
                  window.location.pathname + window.location.search
                );
              },
            }),
            g(this, S, {
              writable: !0,
              value: (e, t) => {
                if (window.console) {
                  if (t && console[t]) return void console[t](e);
                  console.log(e);
                }
              },
            }),
            v(this, "shouldResumeSession", () =>
              this.windowState.hasSavedData()
            ),
            y(this, w).call(this, e),
            (function (e, t, n) {
              if (!t.has(e))
                throw new TypeError(
                  "attempted to get private field on non-instance"
                );
              return n;
            })(this, b, M).call(this);
        }
      }
      function M() {
        let e = document.location.hash.match(this.callbackFlagRegex);
        if (e) {
          let t = {};
          switch (
            ((t.callbackType = e[1]),
            e[2] && (t.resultIndicator = e[2]),
            e[3] && (t.sessionVersion = e[3]),
            e[4] && (t.issuerInstallmentOffer = decodeURIComponent(e[4])),
            y(this, E).call(this),
            t.callbackType)
          ) {
            case "complete":
              this.completeHandler(t);
              break;
            case "cancel":
              this.cancelHandler();
              break;
            case "timeout":
              this.timeoutHandler();
          }
          t.callbackType &&
            this.windowState.hasSavedMerchantData() &&
            this.afterRedirectHandler();
        }
      }
      v(I, "defaultCancelUrl", "urn:hostedCheckout:defaultCancelUrl"),
        v(I, "defaultTimeoutUrl", "urn:hostedCheckout:defaultTimeoutUrl");
      var D = n(11);
      const A = "checkout.js",
        N = "/checkout/";
      (window.Checkout = () => {
        const e = (
            document.currentScript ||
            document.querySelector(`script[src*="${scriptFileName}"]`) ||
            document.querySelector(`script[src*="${minScriptFileName}"]`)
          ).src,
          t = e.indexOf(A) > -1 ? A : "checkout.min.js",
          n = e.substring(e.lastIndexOf(N) + N.length, e.lastIndexOf("/" + t)),
          r = new o();
        let u;
        const f = "hc-comms-layer-iframe";
        let h,
          g,
          m,
          v,
          y,
          b = new c();
        const w = (function (e) {
            let t;
            return (
              (t = e.indexOf("//") > -1 ? e.split("/")[2] : e.split("/")[0]),
              (t = t.split(":")[0]),
              (t = t.split("?")[0]),
              t
            );
          })(e),
          _ = w + "/form";
        let x,
          T,
          k = !1,
          C = !1,
          E = new p();
        const S = () =>
            new D.a((e, t) => {
              let n;
              const r = () => {
                k && (e(), clearInterval(n));
              };
              k
                ? e()
                : C
                ? (n = setInterval(r, 100))
                : t(new Error("Not configured"));
            }),
          M = (e) => ({
            error: {
              result: "ERROR",
              cause: "INVALID_REQUEST",
              explanation: e,
            },
          }),
          O = (e) =>
            e.version >= 32 &&
            !!e.hasOwnProperty("order") &&
            e.order.hasOwnProperty("subMerchant"),
          j = (e) => {
            if (e.version > 18) {
              return (e.session || {}).hasOwnProperty("id");
            }
            return e.hasOwnProperty("session");
          },
          P = (e, t) => {
            window.console && t && console[t] && console[t](e);
          },
          R = () => {
            const t = document.getElementsByTagName("script");
            for (let n = 0; n < t.length; n++) {
              const r = t[n].src;
              if (r && r === e) return t[n];
            }
            return null;
          },
          H = () => {
            new D.a((e) => {
              window && window.document && document && document.body
                ? ((g = document.body), e())
                : document.addEventListener("DOMContentLoaded", () => {
                    (g = document.body), e();
                  });
            }).then(() => {
              null == m &&
                ((m = new l(x)),
                document.body.appendChild(m),
                (k = !0),
                (C = !1));
            });
          },
          F = () => {
            x === a
              ? (m.style.display = "none")
              : b.parentNode && b.parentNode.removeChild(b);
          },
          L = () => {
            x === a ? (m.style.display = "inline-block") : g.appendChild(b),
              document.getElementById(f) ||
                ((h = new d(
                  `https://${w}/static/checkout/landing/index.html`,
                  x,
                  f
                )),
                (h.onload = function () {
                  T.shouldResumeSession() &&
                    r.postToChild(h, "resume", { sessionId: E.getSessionId() });
                }),
                g.appendChild(h));
          },
          V = () => {
            (x = s),
              (g = document.querySelector(y)),
              (g.style.maxHeight = "323px"),
              (g.style.overflow = "hidden"),
              (g.style.transition = "max-height 0.5s ease-out"),
              L();
          },
          q = () => {
            h = document.getElementById(f);
          };
        return (
          (window.onload = () => {
            (T = new I(R())),
              T.shouldResumeSession() &&
                setTimeout(
                  (e) => {
                    if (E.hasShowLightboxFunc()) {
                      const e = document.createElement("script"),
                        t =
                          Math.random().toString(36).substring(2, 15) +
                          Math.random().toString(36).substring(2, 15);
                      Object.assign(e, { id: t, type: "text/javascript" }),
                        (e.innerHTML = `\n            (${E.getShowLightboxFunc()})();\n            const target = document.querySelector('#${t}');\n            document.body.removeChild(target);\n          `),
                        document.body.appendChild(e);
                    }
                  },
                  1,
                  { id: E.getSessionId(), func: E.getShowLightboxFunc() }
                );
          }),
          {
            configure: (e) => {
              T || (T = new I(R())), (C = !0);
              (e.interaction = e.interaction || {}),
                H(),
                ((e) => {
                  const t = e.interaction;
                  if (t.hasOwnProperty("cancelUrl"))
                    throw M("Unexpected parameter interaction.cancelUrl");
                  if (t.hasOwnProperty("timeoutUrl"))
                    throw M("Unexpected parameter interaction.timeoutUrl");
                  e.interaction = e.interaction || {};
                  let n = T.getCallbacks();
                  if (
                    ("string" == typeof n.cancel
                      ? (e.interaction.cancelUrl = n.cancel)
                      : (e.interaction.cancelUrl = I.defaultCancelUrl),
                    "string" == typeof n.timeout
                      ? (e.interaction.timeoutUrl = n.timeout)
                      : (e.interaction.timeoutUrl = I.defaultTimeoutUrl),
                    e.merchant &&
                      (console.warn(
                        "merchantId is not allowed via configure(), deleting..."
                      ),
                      delete e.merchant),
                    e.order)
                  ) {
                    if (e.order.amount)
                      throw M("order.amount is not allowed via configure()");
                    if (e.order.currency)
                      throw M("order.currency is not allowed via configure()");
                    if (e.order.netAmount && e.order.amount)
                      throw M(
                        "Either order.amount or order.netAmount must be defined"
                      );
                    if (
                      e.order.netAmount &&
                      e.interaction &&
                      "NONE" === e.interaction.operation
                    )
                      throw M(
                        "order.netAmount must not be defined when interaction.operation is defined with a value of 'NONE'."
                      );
                    if (e.order.surchargeAmount)
                      throw M(
                        "The value order.surchargeAmount must not be defined, it will be calculated by the gateway"
                      );
                  }
                  if (!j(e) && O(e))
                    throw M(
                      "Session id required when configuring hosted checkout with sub-merchant details."
                    );
                })(e),
                T.shouldResumeSession()
                  ? (e.session.id = E.getSessionId())
                  : E.removeSavedData();
              const t = e.session && e.session.id ? e.session.id : "";
              if (!t) throw new Error("Session ID not provided.");
              if (((u = t), _)) {
                function o(e) {
                  OpenBanking.launchOpenBankingUI(e.launchRequest, (t) => {
                    t &&
                      ((e.errorData.status = t.status),
                      r.postToChild(h, "OpenBanking: retry", e.errorData));
                  });
                }
                (v = _),
                  r.onEvent("open:embedded", () => {
                    F(),
                      h.classList.remove("acs-takeover"),
                      Object(i.iframeResizer)(
                        {
                          heightCalculationMethod: "taggedElement",
                          widthCalculationMethod: "taggedElement",
                          onResized(e) {
                            let { iframe: t, height: n, width: r } = e;
                            g.style.maxHeight = n + "px";
                          },
                        },
                        "#hc-comms-layer-iframe"
                      );
                  }),
                  r.onEvent("app:resize", (e) => {
                    (h.style.minHeight = e + "px"),
                      (g.style.maxHeight = e + "px");
                  }),
                  r.onEvent("activate", () => {
                    q(),
                      (e.checkoutVersion = n),
                      (e.parentUrl = window.location.href),
                      (e.callbacks = {
                        complete: T.callbackList.hasOwnProperty("complete"),
                        error: T.callbackList.hasOwnProperty("error"),
                        cancel: T.callbackList.hasOwnProperty("cancel"),
                        timeout: T.callbackList.hasOwnProperty("timeout"),
                      }),
                      T.shouldResumeSession() ||
                        (x === s
                          ? r.postToChild(h, "configure", e)
                          : r.postToChild(h, "configurePage", e));
                  }),
                  r.onEvent("OpenBanking: LaunchUI", (e) => {
                    if (window.OpenBanking) o(e);
                    else {
                      let t = document.createElement("script");
                      t.setAttribute("src", e.url),
                        document.head.appendChild(t),
                        (t.onload = () => {
                          OpenBanking.configure(e.config, (t) => {
                            "SUCCESS" !== t.status
                              ? r.postToChild(h, "OpenBanking: configureError")
                              : o(e);
                          });
                        });
                    }
                  }),
                  r.onEvent("error", (e) => {
                    q(), T.errorHandler(e), h.parentNode.removeChild(h), F();
                  }),
                  r.onEvent("complete", (e) => {
                    T.completeHandler(e);
                  }),
                  r.onEvent("timeout", (e) => {
                    q(), T.timeoutHandler(e), h.parentNode.removeChild(h);
                  }),
                  r.onEvent("top:configuredCallbacks", () => {
                    q(),
                      r.postToChild(h, "app:configuredCallbacks", {
                        complete: T.callbackList.hasOwnProperty("complete"),
                        error: T.callbackList.hasOwnProperty("error"),
                        cancel: T.callbackList.hasOwnProperty("cancel"),
                        timeout: T.callbackList.hasOwnProperty("timeout"),
                      }),
                      r.postToChild(h, "app:returnUrl", {
                        returnUrl: window.location.href,
                      });
                  }),
                  r.onEvent("redirect", (e) => {
                    T.beforeRedirectHandler({ sessionId: u }),
                      (window.location.href = e.url);
                  }),
                  r.onEvent("redirectToExternal", (e) => {
                    T.beforeRedirectHandler({ sessionId: u });
                  }),
                  r.onEvent("make:acsiframe", () => {
                    h.classList.add("acs-takeover");
                  }),
                  r.onEvent("safeToDeleteData", () => {
                    E.removeSavedData();
                  }),
                  T.shouldResumeSession() &&
                    ((y = E.getEmbedContainer()),
                    S().then(() => V()),
                    T.callbackList.hasOwnProperty("afterRedirect") &&
                      T.afterRedirectHandler());
              } else
                (v = ""), P("Error: Missing hostedSessionBaseUrl", "error");
            },
            showEmbeddedPage: (e, t) => (
              t && E.setShowLightboxFunc(t),
              new D.a((t, n) => {
                var r;
                (r = e),
                  document.querySelector(r)
                    ? ((y = e),
                      E.setEmbedContainer(y),
                      S()
                        .then(() => {
                          V(), t();
                        })
                        .catch((e) => {
                          P(
                            "Checkout is not configured. Cause:" + e.message,
                            "error"
                          ),
                            n("Checkout is not configured. Cause:" + e.message);
                        }))
                    : (P(
                        'Error: please provide a valid container for embedded. ie "#some-div"',
                        "error"
                      ),
                      n(
                        'Error: please provide a valid container for embedded. ie "#some-div"'
                      ));
              })
            ),
            showPaymentPage: () =>
              new D.a((e, t) => {
                S()
                  .then(() => {
                    (x = a), L(), e();
                  })
                  .catch((e) => {
                    P(
                      "Checkout is not configured. Cause:" + e.message,
                      "error"
                    ),
                      t("Checkout is not configured. Cause:" + e.message);
                  });
              }),
            saveFormFields: () => {
              console.log("saveFormFields");
            },
            restoreFormFields: () => {
              console.log("restoreFormFields");
            },
          }
        );
      }),
        (window.Checkout = Checkout());
    },
    function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return M;
      });
      var r = n(0);
      function o(e) {
        return e && "function" == typeof e.schedule;
      }
      var i = n(1),
        s = n(3),
        a = (function (e) {
          function t(t, n, r) {
            var o = e.call(this) || this;
            return (
              (o.parent = t),
              (o.outerValue = n),
              (o.outerIndex = r),
              (o.index = 0),
              o
            );
          }
          return (
            i.a(t, e),
            (t.prototype._next = function (e) {
              this.parent.notifyNext(
                this.outerValue,
                e,
                this.outerIndex,
                this.index++,
                this
              );
            }),
            (t.prototype._error = function (e) {
              this.parent.notifyError(e, this), this.unsubscribe();
            }),
            (t.prototype._complete = function () {
              this.parent.notifyComplete(this), this.unsubscribe();
            }),
            t
          );
        })(s.a),
        c = function (e) {
          return function (t) {
            for (var n = 0, r = e.length; n < r && !t.closed; n++) t.next(e[n]);
            t.complete();
          };
        },
        u = n(6);
      function l() {
        return "function" == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : "@@iterator";
      }
      var d = l(),
        f = n(5),
        h = function (e) {
          return e && "number" == typeof e.length && "function" != typeof e;
        };
      function p(e) {
        return (
          !!e && "function" != typeof e.subscribe && "function" == typeof e.then
        );
      }
      var g = n(12),
        m = function (e) {
          if (e && "function" == typeof e[f.a])
            return (
              (r = e),
              function (e) {
                var t = r[f.a]();
                if ("function" != typeof t.subscribe)
                  throw new TypeError(
                    "Provided object does not correctly implement Symbol.observable"
                  );
                return t.subscribe(e);
              }
            );
          if (h(e)) return c(e);
          if (p(e))
            return (
              (n = e),
              function (e) {
                return (
                  n
                    .then(
                      function (t) {
                        e.closed || (e.next(t), e.complete());
                      },
                      function (t) {
                        return e.error(t);
                      }
                    )
                    .then(null, u.a),
                  e
                );
              }
            );
          if (e && "function" == typeof e[d])
            return (
              (t = e),
              function (e) {
                for (var n = t[d](); ; ) {
                  var r = n.next();
                  if (r.done) {
                    e.complete();
                    break;
                  }
                  if ((e.next(r.value), e.closed)) break;
                }
                return (
                  "function" == typeof n.return &&
                    e.add(function () {
                      n.return && n.return();
                    }),
                  e
                );
              }
            );
          var t,
            n,
            r,
            o = Object(g.a)(e) ? "an invalid object" : "'" + e + "'";
          throw new TypeError(
            "You provided " +
              o +
              " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable."
          );
        };
      var v = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          i.a(t, e),
          (t.prototype.notifyNext = function (e, t, n, r, o) {
            this.destination.next(t);
          }),
          (t.prototype.notifyError = function (e, t) {
            this.destination.error(e);
          }),
          (t.prototype.notifyComplete = function (e) {
            this.destination.complete();
          }),
          t
        );
      })(s.a);
      var y = (function () {
          function e(e, t) {
            (this.project = e), (this.thisArg = t);
          }
          return (
            (e.prototype.call = function (e, t) {
              return t.subscribe(new b(e, this.project, this.thisArg));
            }),
            e
          );
        })(),
        b = (function (e) {
          function t(t, n, r) {
            var o = e.call(this, t) || this;
            return (o.project = n), (o.count = 0), (o.thisArg = r || o), o;
          }
          return (
            i.a(t, e),
            (t.prototype._next = function (e) {
              var t;
              try {
                t = this.project.call(this.thisArg, e, this.count++);
              } catch (e) {
                return void this.destination.error(e);
              }
              this.destination.next(t);
            }),
            t
          );
        })(s.a),
        w = n(2);
      function _(e, t) {
        return new r.a(function (n) {
          var r = new w.a(),
            o = 0;
          return (
            r.add(
              t.schedule(function () {
                o !== e.length
                  ? (n.next(e[o++]), n.closed || r.add(this.schedule()))
                  : n.complete();
              })
            ),
            r
          );
        });
      }
      function x(e, t) {
        if (null != e) {
          if (
            (function (e) {
              return e && "function" == typeof e[f.a];
            })(e)
          )
            return (function (e, t) {
              return new r.a(function (n) {
                var r = new w.a();
                return (
                  r.add(
                    t.schedule(function () {
                      var o = e[f.a]();
                      r.add(
                        o.subscribe({
                          next: function (e) {
                            r.add(
                              t.schedule(function () {
                                return n.next(e);
                              })
                            );
                          },
                          error: function (e) {
                            r.add(
                              t.schedule(function () {
                                return n.error(e);
                              })
                            );
                          },
                          complete: function () {
                            r.add(
                              t.schedule(function () {
                                return n.complete();
                              })
                            );
                          },
                        })
                      );
                    })
                  ),
                  r
                );
              });
            })(e, t);
          if (p(e))
            return (function (e, t) {
              return new r.a(function (n) {
                var r = new w.a();
                return (
                  r.add(
                    t.schedule(function () {
                      return e.then(
                        function (e) {
                          r.add(
                            t.schedule(function () {
                              n.next(e),
                                r.add(
                                  t.schedule(function () {
                                    return n.complete();
                                  })
                                );
                            })
                          );
                        },
                        function (e) {
                          r.add(
                            t.schedule(function () {
                              return n.error(e);
                            })
                          );
                        }
                      );
                    })
                  ),
                  r
                );
              });
            })(e, t);
          if (h(e)) return _(e, t);
          if (
            (function (e) {
              return e && "function" == typeof e[d];
            })(e) ||
            "string" == typeof e
          )
            return (function (e, t) {
              if (!e) throw new Error("Iterable cannot be null");
              return new r.a(function (n) {
                var r,
                  o = new w.a();
                return (
                  o.add(function () {
                    r && "function" == typeof r.return && r.return();
                  }),
                  o.add(
                    t.schedule(function () {
                      (r = e[d]()),
                        o.add(
                          t.schedule(function () {
                            if (!n.closed) {
                              var e, t;
                              try {
                                var o = r.next();
                                (e = o.value), (t = o.done);
                              } catch (e) {
                                return void n.error(e);
                              }
                              t ? n.complete() : (n.next(e), this.schedule());
                            }
                          })
                        );
                    })
                  ),
                  o
                );
              });
            })(e, t);
        }
        throw new TypeError(
          ((null !== e && typeof e) || e) + " is not observable"
        );
      }
      function T(e, t, n) {
        return (
          void 0 === n && (n = Number.POSITIVE_INFINITY),
          "function" == typeof t
            ? function (o) {
                return o.pipe(
                  T(function (n, o) {
                    return ((i = e(n, o)),
                    s ? x(i, s) : i instanceof r.a ? i : new r.a(m(i))).pipe(
                      (function (e, t) {
                        return function (n) {
                          if ("function" != typeof e)
                            throw new TypeError(
                              "argument is not a function. Are you looking for `mapTo()`?"
                            );
                          return n.lift(new y(e, t));
                        };
                      })(function (e, r) {
                        return t(n, e, o, r);
                      })
                    );
                    var i, s;
                  }, n)
                );
              }
            : ("number" == typeof t && (n = t),
              function (t) {
                return t.lift(new k(e, n));
              })
        );
      }
      var k = (function () {
          function e(e, t) {
            void 0 === t && (t = Number.POSITIVE_INFINITY),
              (this.project = e),
              (this.concurrent = t);
          }
          return (
            (e.prototype.call = function (e, t) {
              return t.subscribe(new C(e, this.project, this.concurrent));
            }),
            e
          );
        })(),
        C = (function (e) {
          function t(t, n, r) {
            void 0 === r && (r = Number.POSITIVE_INFINITY);
            var o = e.call(this, t) || this;
            return (
              (o.project = n),
              (o.concurrent = r),
              (o.hasCompleted = !1),
              (o.buffer = []),
              (o.active = 0),
              (o.index = 0),
              o
            );
          }
          return (
            i.a(t, e),
            (t.prototype._next = function (e) {
              this.active < this.concurrent
                ? this._tryNext(e)
                : this.buffer.push(e);
            }),
            (t.prototype._tryNext = function (e) {
              var t,
                n = this.index++;
              try {
                t = this.project(e, n);
              } catch (e) {
                return void this.destination.error(e);
              }
              this.active++, this._innerSub(t, e, n);
            }),
            (t.prototype._innerSub = function (e, t, n) {
              var o = new a(this, t, n),
                i = this.destination;
              i.add(o);
              var s = (function (e, t, n, o, i) {
                if ((void 0 === i && (i = new a(e, n, o)), !i.closed))
                  return t instanceof r.a ? t.subscribe(i) : m(t)(i);
              })(this, e, void 0, void 0, o);
              s !== o && i.add(s);
            }),
            (t.prototype._complete = function () {
              (this.hasCompleted = !0),
                0 === this.active &&
                  0 === this.buffer.length &&
                  this.destination.complete(),
                this.unsubscribe();
            }),
            (t.prototype.notifyNext = function (e, t, n, r, o) {
              this.destination.next(t);
            }),
            (t.prototype.notifyComplete = function (e) {
              var t = this.buffer;
              this.remove(e),
                this.active--,
                t.length > 0
                  ? this._next(t.shift())
                  : 0 === this.active &&
                    this.hasCompleted &&
                    this.destination.complete();
            }),
            t
          );
        })(v),
        E = n(13);
      function S(e) {
        return void 0 === e && (e = Number.POSITIVE_INFINITY), T(E.a, e);
      }
      function I(e, t) {
        return t ? _(e, t) : new r.a(c(e));
      }
      function M() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var n = Number.POSITIVE_INFINITY,
          i = null,
          s = e[e.length - 1];
        return (
          o(s)
            ? ((i = e.pop()),
              e.length > 1 &&
                "number" == typeof e[e.length - 1] &&
                (n = e.pop()))
            : "number" == typeof s && (n = e.pop()),
          null === i && 1 === e.length && e[0] instanceof r.a
            ? e[0]
            : S(n)(I(e, i))
        );
      }
    },
    function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return m;
      });
      var r = n(1),
        o = n(10),
        i = n(0),
        s = n(3),
        a = n(2);
      function c() {
        return function (e) {
          return e.lift(new u(e));
        };
      }
      var u = (function () {
          function e(e) {
            this.connectable = e;
          }
          return (
            (e.prototype.call = function (e, t) {
              var n = this.connectable;
              n._refCount++;
              var r = new l(e, n),
                o = t.subscribe(r);
              return r.closed || (r.connection = n.connect()), o;
            }),
            e
          );
        })(),
        l = (function (e) {
          function t(t, n) {
            var r = e.call(this, t) || this;
            return (r.connectable = n), r;
          }
          return (
            r.a(t, e),
            (t.prototype._unsubscribe = function () {
              var e = this.connectable;
              if (e) {
                this.connectable = null;
                var t = e._refCount;
                if (t <= 0) this.connection = null;
                else if (((e._refCount = t - 1), t > 1)) this.connection = null;
                else {
                  var n = this.connection,
                    r = e._connection;
                  (this.connection = null),
                    !r || (n && r !== n) || r.unsubscribe();
                }
              } else this.connection = null;
            }),
            t
          );
        })(s.a),
        d = (function (e) {
          function t(t, n) {
            var r = e.call(this) || this;
            return (
              (r.source = t),
              (r.subjectFactory = n),
              (r._refCount = 0),
              (r._isComplete = !1),
              r
            );
          }
          return (
            r.a(t, e),
            (t.prototype._subscribe = function (e) {
              return this.getSubject().subscribe(e);
            }),
            (t.prototype.getSubject = function () {
              var e = this._subject;
              return (
                (e && !e.isStopped) || (this._subject = this.subjectFactory()),
                this._subject
              );
            }),
            (t.prototype.connect = function () {
              var e = this._connection;
              return (
                e ||
                  ((this._isComplete = !1),
                  (e = this._connection = new a.a()).add(
                    this.source.subscribe(new h(this.getSubject(), this))
                  ),
                  e.closed && ((this._connection = null), (e = a.a.EMPTY))),
                e
              );
            }),
            (t.prototype.refCount = function () {
              return c()(this);
            }),
            t
          );
        })(i.a),
        f = (function () {
          var e = d.prototype;
          return {
            operator: { value: null },
            _refCount: { value: 0, writable: !0 },
            _subject: { value: null, writable: !0 },
            _connection: { value: null, writable: !0 },
            _subscribe: { value: e._subscribe },
            _isComplete: { value: e._isComplete, writable: !0 },
            getSubject: { value: e.getSubject },
            connect: { value: e.connect },
            refCount: { value: e.refCount },
          };
        })(),
        h = (function (e) {
          function t(t, n) {
            var r = e.call(this, t) || this;
            return (r.connectable = n), r;
          }
          return (
            r.a(t, e),
            (t.prototype._error = function (t) {
              this._unsubscribe(), e.prototype._error.call(this, t);
            }),
            (t.prototype._complete = function () {
              (this.connectable._isComplete = !0),
                this._unsubscribe(),
                e.prototype._complete.call(this);
            }),
            (t.prototype._unsubscribe = function () {
              var e = this.connectable;
              if (e) {
                this.connectable = null;
                var t = e._connection;
                (e._refCount = 0),
                  (e._subject = null),
                  (e._connection = null),
                  t && t.unsubscribe();
              }
            }),
            t
          );
        })(o.b);
      s.a;
      var p = (function () {
        function e(e, t) {
          (this.subjectFactory = e), (this.selector = t);
        }
        return (
          (e.prototype.call = function (e, t) {
            var n = this.selector,
              r = this.subjectFactory(),
              o = n(r).subscribe(e);
            return o.add(t.subscribe(r)), o;
          }),
          e
        );
      })();
      function g() {
        return new o.a();
      }
      function m() {
        return function (e) {
          return c()(
            ((t = g),
            function (e) {
              var r;
              if (
                ((r =
                  "function" == typeof t
                    ? t
                    : function () {
                        return t;
                      }),
                "function" == typeof n)
              )
                return e.lift(new p(r, n));
              var o = Object.create(e, f);
              return (o.source = e), (o.subjectFactory = r), o;
            })(e)
          );
          var t, n;
        };
      }
    },
  ]);
});
