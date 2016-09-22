/** HTML5 Gallery - jQuery Image and Video Gallery Plugin
 * Copyright 2014 Magic Hills Pty Ltd All Rights Reserved
 * Website: http://html5box.com
 * Version 4.7
 */
(function () {
    for (var n = document.getElementsByTagName("script"), p = "", l = 0; l < n.length; l++) n[l].src && n[l].src.match(/html5gallery\.js/i) && (p = n[l].src.substr(0, n[l].src.lastIndexOf("/") + 1));
    n = !1;
    if ("undefined" == typeof jQuery) n = !0;
    else if (l = jQuery.fn.jquery.split("."), 1 > l[0] || 1 == l[0] && 6 > l[1]) n = !0;
    if (n) {
        var n = document.getElementsByTagName("head")[0],
            r = document.createElement("script");
        r.setAttribute("type", "text/javascript");
        r.readyState ? r.onreadystatechange = function () {
            if ("loaded" == r.readyState || "complete" ==
                r.readyState) r.onreadystatechange = null, loadHtml5Gallery(p)
        } : r.onload = function () {
            loadHtml5Gallery(p)
        };
        r.setAttribute("src", p + "jquery.js");
        n.appendChild(r)
    } else loadHtml5Gallery(p)
})();

function loadHtml5Gallery(n) {
    jQuery.easing.jswing = jQuery.easing.swing;
    jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function (c, e, a, d, b) {
            return jQuery.easing[jQuery.easing.def](c, e, a, d, b)
        },
        easeInQuad: function (c, e, a, d, b) {
            return d * (e /= b) * e + a
        },
        easeOutQuad: function (c, e, a, d, b) {
            return -d * (e /= b) * (e - 2) + a
        },
        easeInOutQuad: function (c, e, a, d, b) {
            return 1 > (e /= b / 2) ? d / 2 * e * e + a : -d / 2 * (--e * (e - 2) - 1) + a
        },
        easeInCubic: function (c, e, a, d, b) {
            return d * (e /= b) * e * e + a
        },
        easeOutCubic: function (c, e, a, d, b) {
            return d * ((e = e / b - 1) * e * e + 1) +
                a
        },
        easeInOutCubic: function (c, e, a, d, b) {
            return 1 > (e /= b / 2) ? d / 2 * e * e * e + a : d / 2 * ((e -= 2) * e * e + 2) + a
        },
        easeInQuart: function (c, e, a, d, b) {
            return d * (e /= b) * e * e * e + a
        },
        easeOutQuart: function (c, e, a, d, b) {
            return -d * ((e = e / b - 1) * e * e * e - 1) + a
        },
        easeInOutQuart: function (c, e, a, d, b) {
            return 1 > (e /= b / 2) ? d / 2 * e * e * e * e + a : -d / 2 * ((e -= 2) * e * e * e - 2) + a
        },
        easeInQuint: function (c, e, a, d, b) {
            return d * (e /= b) * e * e * e * e + a
        },
        easeOutQuint: function (c, e, a, d, b) {
            return d * ((e = e / b - 1) * e * e * e * e + 1) + a
        },
        easeInOutQuint: function (c, e, a, d, b) {
            return 1 > (e /= b / 2) ? d / 2 * e * e * e * e * e + a : d /
                2 * ((e -= 2) * e * e * e * e + 2) + a
        },
        easeInSine: function (c, e, a, d, b) {
            return -d * Math.cos(e / b * (Math.PI / 2)) + d + a
        },
        easeOutSine: function (c, e, a, d, b) {
            return d * Math.sin(e / b * (Math.PI / 2)) + a
        },
        easeInOutSine: function (c, e, a, d, b) {
            return -d / 2 * (Math.cos(Math.PI * e / b) - 1) + a
        },
        easeInExpo: function (c, e, a, d, b) {
            return 0 == e ? a : d * Math.pow(2, 10 * (e / b - 1)) + a
        },
        easeOutExpo: function (c, e, a, d, b) {
            return e == b ? a + d : d * (-Math.pow(2, -10 * e / b) + 1) + a
        },
        easeInOutExpo: function (c, e, a, d, b) {
            return 0 == e ? a : e == b ? a + d : 1 > (e /= b / 2) ? d / 2 * Math.pow(2, 10 * (e - 1)) + a : d / 2 * (-Math.pow(2, -10 * --e) + 2) + a
        },
        easeInCirc: function (c, e, a, d, b) {
            return -d * (Math.sqrt(1 - (e /= b) * e) - 1) + a
        },
        easeOutCirc: function (c, e, a, d, b) {
            return d * Math.sqrt(1 - (e = e / b - 1) * e) + a
        },
        easeInOutCirc: function (c, e, a, d, b) {
            return 1 > (e /= b / 2) ? -d / 2 * (Math.sqrt(1 - e * e) - 1) + a : d / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + a
        },
        easeInElastic: function (c, e, a, d, b) {
            c = 1.70158;
            var m = 0,
                g = d;
            if (0 == e) return a;
            if (1 == (e /= b)) return a + d;
            m || (m = 0.3 * b);
            g < Math.abs(d) ? (g = d, c = m / 4) : c = m / (2 * Math.PI) * Math.asin(d / g);
            return -(g * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * b - c) * 2 * Math.PI / m)) + a
        },
        easeOutElastic: function (c,
            e, a, d, b) {
            c = 1.70158;
            var m = 0,
                g = d;
            if (0 == e) return a;
            if (1 == (e /= b)) return a + d;
            m || (m = 0.3 * b);
            g < Math.abs(d) ? (g = d, c = m / 4) : c = m / (2 * Math.PI) * Math.asin(d / g);
            return g * Math.pow(2, -10 * e) * Math.sin((e * b - c) * 2 * Math.PI / m) + d + a
        },
        easeInOutElastic: function (c, e, a, d, b) {
            c = 1.70158;
            var m = 0,
                g = d;
            if (0 == e) return a;
            if (2 == (e /= b / 2)) return a + d;
            m || (m = b * 0.3 * 1.5);
            g < Math.abs(d) ? (g = d, c = m / 4) : c = m / (2 * Math.PI) * Math.asin(d / g);
            return 1 > e ? -0.5 * g * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * b - c) * 2 * Math.PI / m) + a : 0.5 * g * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * b - c) * 2 * Math.PI /
                m) + d + a
        },
        easeInBack: function (c, e, a, d, b, m) {
            void 0 == m && (m = 1.70158);
            return d * (e /= b) * e * ((m + 1) * e - m) + a
        },
        easeOutBack: function (c, e, a, d, b, m) {
            void 0 == m && (m = 1.70158);
            return d * ((e = e / b - 1) * e * ((m + 1) * e + m) + 1) + a
        },
        easeInOutBack: function (c, e, a, d, b, m) {
            void 0 == m && (m = 1.70158);
            return 1 > (e /= b / 2) ? d / 2 * e * e * (((m *= 1.525) + 1) * e - m) + a : d / 2 * ((e -= 2) * e * (((m *= 1.525) + 1) * e + m) + 2) + a
        },
        easeInBounce: function (c, e, a, d, b) {
            return d - jQuery.easing.easeOutBounce(c, b - e, 0, d, b) + a
        },
        easeOutBounce: function (c, e, a, d, b) {
            return (e /= b) < 1 / 2.75 ? d * 7.5625 * e * e + a : e < 2 /
                2.75 ? d * (7.5625 * (e -= 1.5 / 2.75) * e + 0.75) + a : e < 2.5 / 2.75 ? d * (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375) + a : d * (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375) + a
        },
        easeInOutBounce: function (c, e, a, d, b) {
            return e < b / 2 ? 0.5 * jQuery.easing.easeInBounce(c, 2 * e, 0, d, b) + a : 0.5 * jQuery.easing.easeOutBounce(c, 2 * e - b, 0, d, b) + 0.5 * d + a
        }
    });
    var p = jQuery;
    p.fn.touchSwipe = function (c) {
        var e = {
            preventWebBrowser: !1,
            swipeLeft: null,
            swipeRight: null,
            swipeTop: null,
            swipeBottom: null
        };
        c && p.extend(e, c);
        return this.each(function () {
            function a(a) {
                var b = a.originalEvent;
                1 <= b.targetTouches.length ?
                    (g = b.targetTouches[0].pageX, q = b.targetTouches[0].pageY) : c(a)
            }

            function d(a) {
                e.preventWebBrowser && a.preventDefault();
                var b = a.originalEvent;
                1 <= b.targetTouches.length ? (f = b.targetTouches[0].pageX, x = b.targetTouches[0].pageY) : c(a)
            }

            function b(a) {
                if (0 < f || 0 < x) 100 < Math.abs(f - g) && (f > g ? e.swipeRight && e.swipeRight.call() : e.swipeLeft && e.swipeLeft.call()), 100 < Math.abs(x - q) && (x > q ? e.swipeBottom && e.swipeBottom.call() : e.swipeTop && e.swipeTop.call());
                c(a)
            }

            function c() {
                x = f = q = g = -1
            }
            var g = -1,
                q = -1,
                f = -1,
                x = -1;
            try {
                p(this).bind("touchstart",
                    a), p(this).bind("touchmove", d), p(this).bind("touchend", b), p(this).bind("touchcancel", c)
            } catch (h) {}
        })
    };
    var l = jQuery;
    l.fn.drag = function (c, e, a) {
        var d = "string" == typeof c ? c : "",
            b = l.isFunction(c) ? c : l.isFunction(e) ? e : null;
        0 !== d.indexOf("drag") && (d = "drag" + d);
        a = (c == b ? e : a) || {};
        return b ? this.bind(d, a, b) : this.trigger(d)
    };
    var r = l.event,
        u = r.special,
        j = null,
        j = u.drag = {
            defaults: {
                which: 1,
                distance: 0,
                not: ":input",
                handle: null,
                relative: !1,
                drop: !0,
                click: !1
            },
            datakey: "dragdata",
            livekey: "livedrag",
            add: function (c) {
                var e = l.data(this,
                    j.datakey),
                    a = c.data || {};
                e.related += 1;
                !e.live && c.selector && (e.live = !0, r.add(this, "draginit." + j.livekey, j.delegate));
                l.each(j.defaults, function (d) {
                    void 0 !== a[d] && (e[d] = a[d])
                })
            },
            remove: function () {
                l.data(this, j.datakey).related -= 1
            },
            setup: function () {
                if (!l.data(this, j.datakey)) {
                    var c = l.extend({
                        related: 0
                    }, j.defaults);
                    l.data(this, j.datakey, c);
                    r.add(this, "mousedown", j.init, c);
                    this.attachEvent && this.attachEvent("ondragstart", j.dontstart)
                }
            },
            teardown: function () {
                l.data(this, j.datakey).related || (l.removeData(this,
                    j.datakey), r.remove(this, "mousedown", j.init), r.remove(this, "draginit", j.delegate), j.textselect(!0), this.detachEvent && this.detachEvent("ondragstart", j.dontstart))
            },
            init: function (c) {
                var e = c.data,
                    a;
                if (!(0 < e.which && c.which != e.which) && !l(c.target).is(e.not) && (!e.handle || l(c.target).closest(e.handle, c.currentTarget).length))
                    if (e.propagates = 1, e.interactions = [j.interaction(this, e)], e.target = c.target, e.pageX = c.pageX, e.pageY = c.pageY, e.dragging = null, a = j.hijack(c, "draginit", e), e.propagates) {
                        if ((a = j.flatten(a)) &&
                            a.length) e.interactions = [], l.each(a, function () {
                            e.interactions.push(j.interaction(this, e))
                        });
                        e.propagates = e.interactions.length;
                        !1 !== e.drop && u.drop && u.drop.handler(c, e);
                        j.textselect(!1);
                        r.add(document, "mousemove mouseup", j.handler, e);
                        return !1
                    }
            },
            interaction: function (c, e) {
                return {
                    drag: c,
                    callback: new j.callback,
                    droppable: [],
                    offset: l(c)[e.relative ? "position" : "offset"]() || {
                        top: 0,
                        left: 0
                    }
                }
            },
            handler: function (c) {
                var e = c.data;
                switch (c.type) {
                case !e.dragging && "mousemove":
                    if (Math.pow(c.pageX - e.pageX, 2) + Math.pow(c.pageY -
                        e.pageY, 2) < Math.pow(e.distance, 2)) break;
                    c.target = e.target;
                    j.hijack(c, "dragstart", e);
                    e.propagates && (e.dragging = !0);
                case "mousemove":
                    if (e.dragging) {
                        j.hijack(c, "drag", e);
                        if (e.propagates) {
                            !1 !== e.drop && u.drop && u.drop.handler(c, e);
                            break
                        }
                        c.type = "mouseup"
                    }
                case "mouseup":
                    r.remove(document, "mousemove mouseup", j.handler), e.dragging && (!1 !== e.drop && u.drop && u.drop.handler(c, e), j.hijack(c, "dragend", e)), j.textselect(!0), !1 === e.click && e.dragging && (jQuery.event.triggered = !0, setTimeout(function () {
                        jQuery.event.triggered = !1
                    }, 20), e.dragging = !1)
                }
            },
            delegate: function (c) {
                var e = [],
                    a, d = l.data(this, "events") || {};
                l.each(d.live || [], function (b, d) {
                    if (0 === d.preType.indexOf("drag") && (a = l(c.target).closest(d.selector, c.currentTarget)[0])) r.add(a, d.origType + "." + j.livekey, d.origHandler, d.data), 0 > l.inArray(a, e) && e.push(a)
                });
                return !e.length ? !1 : l(e).bind("dragend." + j.livekey, function () {
                    r.remove(this, "." + j.livekey)
                })
            },
            hijack: function (c, e, a, d, b) {
                if (a) {
                    var m = c.originalEvent,
                        g = c.type,
                        q = e.indexOf("drop") ? "drag" : "drop",
                        f, h = d || 0,
                        s, C;
                    d = !isNaN(d) ?
                        d : a.interactions.length;
                    c.type = e;
                    c.originalEvent = null;
                    a.results = [];
                    do
                        if ((s = a.interactions[h]) && !("dragend" !== e && s.cancelled)) C = j.properties(c, a, s), s.results = [], l(b || s[q] || a.droppable).each(function (b, d) {
                            f = (C.target = d) ? r.handle.call(d, c, C) : null;
                            !1 === f ? ("drag" == q && (s.cancelled = !0, a.propagates -= 1), "drop" == e && (s[q][b] = null)) : "dropinit" == e && s.droppable.push(j.element(f) || d);
                            "dragstart" == e && (s.proxy = l(j.element(f) || s.drag)[0]);
                            s.results.push(f);
                            delete c.result;
                            if ("dropinit" !== e) return f
                        }), a.results[h] =
                            j.flatten(s.results), "dropinit" == e && (s.droppable = j.flatten(s.droppable)), "dragstart" == e && !s.cancelled && C.update(); while (++h < d);
                    c.type = g;
                    c.originalEvent = m;
                    return j.flatten(a.results)
                }
            },
            properties: function (c, e, a) {
                var d = a.callback;
                d.drag = a.drag;
                d.proxy = a.proxy || a.drag;
                d.startX = e.pageX;
                d.startY = e.pageY;
                d.deltaX = c.pageX - e.pageX;
                d.deltaY = c.pageY - e.pageY;
                d.originalX = a.offset.left;
                d.originalY = a.offset.top;
                d.offsetX = c.pageX - (e.pageX - d.originalX);
                d.offsetY = c.pageY - (e.pageY - d.originalY);
                d.drop = j.flatten((a.drop || []).slice());
                d.available = j.flatten((a.droppable || []).slice());
                return d
            },
            element: function (c) {
                if (c && (c.jquery || 1 == c.nodeType)) return c
            },
            flatten: function (c) {
                return l.map(c, function (c) {
                    return c && c.jquery ? l.makeArray(c) : c && c.length ? j.flatten(c) : c
                })
            },
            textselect: function (c) {
                l(document)[c ? "unbind" : "bind"]("selectstart", j.dontstart).attr("unselectable", c ? "off" : "on").css("MozUserSelect", c ? "" : "none")
            },
            dontstart: function () {
                return !1
            },
            callback: function () {}
        };
    j.callback.prototype = {
        update: function () {
            u.drop && this.available.length &&
                l.each(this.available, function (c) {
                    u.drop.locate(this, c)
                })
        }
    };
    u.draginit = u.dragstart = u.dragend = j;
    var y = jQuery;
    y.fn.html5boxTransition = function (c, e, a, d, b) {
        $parent = this;
        c = d.effect;
        var m = d.easing,
            g = d.duration,
            q = d.direction,
            f = null;
        c && (c = c.split(","), f = c[Math.floor(Math.random() * c.length)], f = y.trim(f.toLowerCase()));
        f && d[f] && (d[f].duration && (g = d[f].duration), d[f].easing && (m = d[f].easing));
        "fade" == f ? (a.show(), e.fadeOut(g, m, function () {
            e.remove();
            b()
        })) : "crossfade" == f || "fadeout" == f ? (a.hide(), e.fadeOut(g / 2, m,
            function () {
                a.fadeIn(g / 2, m, function () {
                    e.remove();
                    b()
                })
            })) : "slide" == f ? ($parent.css({
            overflow: "hidden"
        }), q ? (a.css({
            left: "100%"
        }), a.animate({
            left: "0%"
        }, g, m), e.animate({
            left: "-100%"
        }, g, m, function () {
            e.remove();
            b()
        })) : (a.css({
            left: "-100%"
        }), a.animate({
            left: "0%"
        }, g, m), e.animate({
            left: "100%"
        }, g, m, function () {
            e.remove();
            b()
        }))) : (a.show(), e.remove(), b())
    };
    var h = jQuery;
    h.fn.addHTML5VideoControls = function (c, e) {
        var a = "ontouchstart" in window,
            d = a ? "touchstart" : "mousedown",
            b = a ? "touchmove" : "mousemove",
            m = a ? "touchcancel" :
                "mouseup",
            g = a ? "touchstart" : "click",
            q = a ? 48 : 36,
            f = null,
            G = null,
            s = !1,
            j = !0,
            l = null != navigator.userAgent.match(/iPod/i) || null != navigator.userAgent.match(/iPhone/i),
            n = h(this).data("ishd"),
            r = h(this).data("hd"),
            p = h(this).data("src"),
            k = h(this);
        k.get(0).removeAttribute("controls");
        if (l) {
            var u = k.height() - q;
            k.css({
                height: u
            })
        }
        var D = h("<div class='html5boxVideoPlay'></div>");
        l || (k.after(D), D.css({
            position: "absolute",
            top: "50%",
            left: "50%",
            display: "block",
            cursor: "pointer",
            width: 64,
            height: 64,
            "margin-left": -32,
            "margin-top": -32,
            "background-image": "url('" + c + "html5boxplayer_playvideo.png')",
            "background-position": "center center",
            "background-repeat": "no-repeat"
        }).bind(g, function () {
            k.get(0).play()
        }));
        var H = h("<div class='html5boxVideoFullscreenBg'></div>"),
            t = h("<div class='html5boxVideoControls'><div class='html5boxVideoControlsBg'></div><div class='html5boxPlayPause'><div class='html5boxPlay'></div><div class='html5boxPause'></div></div><div class='html5boxTimeCurrent'>--:--</div><div class='html5boxFullscreen'></div><div class='html5boxHD'></div><div class='html5boxVolume'><div class='html5boxVolumeButton'></div><div class='html5boxVolumeBar'><div class='html5boxVolumeBarBg'><div class='html5boxVolumeBarActive'></div></div></div></div><div class='html5boxTimeTotal'>--:--</div><div class='html5boxSeeker'><div class='html5boxSeekerBuffer'></div><div class='html5boxSeekerPlay'></div><div class='html5boxSeekerHandler'></div></div><div style='clear:both;'></div></div>");
        k.after(t);
        k.after(H);
        H.css({
            display: "none",
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
            right: 0,
            "z-index": 2147483647
        });
        t.css({
            display: "block",
            position: "absolute",
            width: "100%",
            height: q,
            left: 0,
            bottom: 0
        });
        var y = function () {
            j = !0
        };
        k.bind(g, function () {
            j = !0
        }).hover(function () {
            j = !0
        }, function () {
            j = !1
        });
        setInterval(function () {
            j && (t.show(), j = !1, clearTimeout(f), f = setTimeout(function () {
                k.get(0).paused || t.fadeOut()
            }, 5E3))
        }, 250);
        h(".html5boxVideoControlsBg", t).css({
            display: "block",
            position: "absolute",
            width: "100%",
            height: "100%",
            left: 0,
            top: 0,
            "background-color": "#000000",
            opacity: 0.7,
            filter: "alpha(opacity=70)"
        });
        h(".html5boxPlayPause", t).css({
            display: "block",
            position: "relative",
            width: "32px",
            height: "32px",
            margin: Math.floor((q - 32) / 2),
            "float": "left"
        });
        var I = h(".html5boxPlay", t),
            J = h(".html5boxPause", t);
        I.css({
            display: "block",
            position: "absolute",
            top: 0,
            left: 0,
            width: "32px",
            height: "32px",
            cursor: "pointer",
            "background-image": "url('" + c + "html5boxplayer_playpause.png')",
            "background-position": "top left"
        }).hover(function () {
                h(this).css({
                    "background-position": "bottom left"
                })
            },
            function () {
                h(this).css({
                    "background-position": "top left"
                })
            }).bind(g, function () {
            k.get(0).play()
        });
        J.css({
            display: "none",
            position: "absolute",
            top: 0,
            left: 0,
            width: "32px",
            height: "32px",
            cursor: "pointer",
            "background-image": "url('" + c + "html5boxplayer_playpause.png')",
            "background-position": "top right"
        }).hover(function () {
            h(this).css({
                "background-position": "bottom right"
            })
        }, function () {
            h(this).css({
                "background-position": "top right"
            })
        }).bind(g, function () {
            k.get(0).pause()
        });
        var B = h(".html5boxTimeCurrent", t),
            M = h(".html5boxTimeTotal",
                t),
            v = h(".html5boxSeeker", t),
            E = h(".html5boxSeekerPlay", t),
            N = h(".html5boxSeekerBuffer", t),
            P = h(".html5boxSeekerHandler", t);
        B.css({
            display: "block",
            position: "relative",
            "float": "left",
            "line-height": q + "px",
            "font-weight": "normal",
            "font-size": "12px",
            margin: "0 8px",
            "font-family": "Arial, Helvetica, sans-serif",
            color: "#fff"
        });
        M.css({
            display: "block",
            position: "relative",
            "float": "right",
            "line-height": q + "px",
            "font-weight": "normal",
            "font-size": "12px",
            margin: "0 8px",
            "font-family": "Arial, Helvetica, sans-serif",
            color: "#fff"
        });
        v.css({
            display: "block",
            cursor: "pointer",
            overflow: "hidden",
            position: "relative",
            height: "10px",
            "background-color": "#222",
            margin: Math.floor((q - 10) / 2) + "px 4px"
        }).bind(d, function (c) {
            c = (a ? c.originalEvent.touches[0] : c).pageX - v.offset().left;
            E.css({
                width: c
            });
            k.get(0).currentTime = c * k.get(0).duration / v.width();
            v.bind(b, function (b) {
                b = (a ? b.originalEvent.touches[0] : b).pageX - v.offset().left;
                E.css({
                    width: b
                });
                k.get(0).currentTime = b * k.get(0).duration / v.width()
            })
        }).bind(m, function () {
            v.unbind(b)
        });
        N.css({
            display: "block",
            position: "absolute",
            left: 0,
            top: 0,
            height: "100%",
            "background-color": "#444"
        });
        E.css({
            display: "block",
            position: "absolute",
            left: 0,
            top: 0,
            height: "100%",
            "background-color": "#fcc500"
        });
        if (!l && (k.get(0).requestFullscreen || k.get(0).webkitRequestFullScreen || k.get(0).mozRequestFullScreen || k.get(0).webkitEnterFullScreen || k.get(0).msRequestFullscreen)) {
            var K = function (a) {
                t.css({
                    position: a ? "fixed" : "absolute"
                });
                var b = z.css("background-position") ? z.css("background-position").split(" ")[1] : z.css("background-position-y");
                z.css({
                    "background-position": (a ? "right" : "left") + " " + b
                });
                H.css({
                    display: a ? "block" : "none"
                });
                a ? (h(document).bind("mousemove", y), t.css({
                    "z-index": 2147483647
                })) : (h(document).unbind("mousemove", y), t.css({
                    "z-index": ""
                }))
            };
            document.addEventListener("fullscreenchange", function () {
                s = document.fullscreen;
                K(document.fullscreen)
            }, !1);
            document.addEventListener("mozfullscreenchange", function () {
                s = document.mozFullScreen;
                K(document.mozFullScreen)
            }, !1);
            document.addEventListener("webkitfullscreenchange", function () {
                s = document.webkitIsFullScreen;
                K(document.webkitIsFullScreen)
            }, !1);
            k.get(0).addEventListener("webkitbeginfullscreen", function () {
                s = !0
            }, !1);
            k.get(0).addEventListener("webkitendfullscreen", function () {
                s = !1
            }, !1);
            h("head").append("<style type='text/css'>video::-webkit-media-controls { display:none !important; }</style>");
            var z = h(".html5boxFullscreen", t);
            z.css({
                display: "block",
                position: "relative",
                "float": "right",
                width: "32px",
                height: "32px",
                margin: Math.floor((q - 32) / 2),
                cursor: "pointer",
                "background-image": "url('" + c + "html5boxplayer_fullscreen.png')",
                "background-position": "left top"
            }).hover(function () {
                var a = h(this).css("background-position") ? h(this).css("background-position").split(" ")[0] : h(this).css("background-position-x");
                h(this).css({
                    "background-position": a + " bottom"
                })
            }, function () {
                var a = h(this).css("background-position") ? h(this).css("background-position").split(" ")[0] : h(this).css("background-position-x");
                h(this).css({
                    "background-position": a + " top"
                })
            }).bind(g, function () {
                (s = !s) ? (k.get(0).requestFullscreen ? k.get(0).requestFullscreen() : k.get(0).webkitRequestFullScreen ?
                    k.get(0).webkitRequestFullScreen() : k.get(0).mozRequestFullScreen ? k.get(0).mozRequestFullScreen() : k.get(0).webkitEnterFullScreen && k.get(0).webkitEnterFullScreen(), k.get(0).msRequestFullscreen && k.get(0).msRequestFullscreen()) : document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen()
            })
        }
        r &&
            h(".html5boxHD", t).css({
                display: "block",
                position: "relative",
                "float": "right",
                width: "32px",
                height: "32px",
                margin: Math.floor((q - 32) / 2),
                cursor: "pointer",
                "background-image": "url('" + c + "html5boxplayer_hd.png')",
                "background-position": (n ? "right" : "left") + " center"
            }).bind(g, function () {
                n = !n;
                h(this).css({
                    "background-position": (n ? "right" : "left") + " center"
                });
                e.isHd = n;
                var a = k.get(0).isPaused;
                k.get(0).setAttribute("src", (n ? r : p) + "#t=" + k.get(0).currentTime);
                a ? l || k.get(0).pause() : k.get(0).play()
            });
        u = k.get(0).volume;
        k.get(0).volume =
            u / 2 + 0.1;
        if (k.get(0).volume === u / 2 + 0.1) {
            k.get(0).volume = u;
            var u = h(".html5boxVolume", t),
                F = h(".html5boxVolumeButton", t),
                L = h(".html5boxVolumeBar", t),
                w = h(".html5boxVolumeBarBg", t),
                A = h(".html5boxVolumeBarActive", t);
            u.css({
                display: "block",
                position: "relative",
                "float": "right",
                width: "32px",
                height: "32px",
                margin: Math.floor((q - 32) / 2)
            }).hover(function () {
                clearTimeout(G);
                var a = k.get(0).volume;
                A.css({
                    height: Math.round(100 * a) + "%"
                });
                L.show()
            }, function () {
                clearTimeout(G);
                G = setTimeout(function () {
                    L.hide()
                }, 1E3)
            });
            F.css({
                display: "block",
                position: "absolute",
                top: 0,
                left: 0,
                width: "32px",
                height: "32px",
                cursor: "pointer",
                "background-image": "url('" + c + "html5boxplayer_volume.png')",
                "background-position": "top left"
            }).hover(function () {
                var a = h(this).css("background-position") ? h(this).css("background-position").split(" ")[0] : h(this).css("background-position-x");
                h(this).css({
                    "background-position": a + " bottom"
                })
            }, function () {
                var a = h(this).css("background-position") ? h(this).css("background-position").split(" ")[0] : h(this).css("background-position-x");
                h(this).css({
                    "background-position": a + " top"
                })
            }).bind(g, function () {
                var a = k.get(0).volume;
                0 < a ? (volumeSaved = a, a = 0) : a = volumeSaved;
                var b = h(this).css("background-position") ? h(this).css("background-position").split(" ")[1] : h(this).css("background-position-y");
                F.css({
                    "background-position": (0 < a ? "left" : "right") + " " + b
                });
                k.get(0).volume = a;
                A.css({
                    height: Math.round(100 * a) + "%"
                })
            });
            L.css({
                display: "none",
                position: "absolute",
                left: 4,
                bottom: "100%",
                width: 24,
                height: 80,
                "margin-bottom": Math.floor((q - 32) / 2),
                "background-color": "#000000",
                opacity: 0.7,
                filter: "alpha(opacity=70)"
            });
            w.css({
                display: "block",
                position: "relative",
                width: 10,
                height: 68,
                margin: 7,
                cursor: "pointer",
                "background-color": "#222"
            });
            A.css({
                display: "block",
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "100%",
                "background-color": "#fcc500"
            });
            w.bind(d, function (c) {
                c = 1 - ((a ? c.originalEvent.touches[0] : c).pageY - w.offset().top) / w.height();
                c = 1 < c ? 1 : 0 > c ? 0 : c;
                A.css({
                    height: Math.round(100 * c) + "%"
                });
                F.css({
                    "background-position": "left " + (0 < c ? "top" : "bottom")
                });
                k.get(0).volume = c;
                w.bind(b,
                    function (b) {
                        b = 1 - ((a ? b.originalEvent.touches[0] : b).pageY - w.offset().top) / w.height();
                        b = 1 < b ? 1 : 0 > b ? 0 : b;
                        A.css({
                            height: Math.round(100 * b) + "%"
                        });
                        F.css({
                            "background-position": "left " + (0 < b ? "top" : "bottom")
                        });
                        k.get(0).volume = b
                    })
            }).bind(m, function () {
                w.unbind(b)
            })
        }
        var O = function (a) {
            var b = Math.floor(a / 3600),
                c = Math.floor((a - 60 * b) / 60);
            a = Math.floor(a - (3600 * b + 60 * c));
            c = (10 > c ? "0" + c : c) + ":" + (10 > a ? "0" + a : a);
            0 < b && (c = (10 > b ? "0" + b : b) + ":" + c);
            return c
        }, d = function () {
                t.show();
                clearTimeout(f);
                D.show();
                I.show();
                J.hide()
            }, m = function () {
                var a =
                    k.get(0).currentTime;
                if (a) {
                    B.text(O(a));
                    var b = k.get(0).duration;
                    if (b) {
                        M.text(O(b));
                        var c = v.width(),
                            a = Math.round(c * a / b);
                        E.css({
                            width: a
                        });
                        P.css({
                            left: a
                        })
                    }
                }
            }, g = function () {
                if (k.get(0).buffered && 0 < k.get(0).buffered.length && !isNaN(k.get(0).buffered.end(0)) && !isNaN(k.get(0).duration)) {
                    var a = v.width();
                    N.css({
                        width: Math.round(a * k.get(0).buffered.end(0) / k.get(0).duration)
                    })
                }
            };
        try {
            k.bind("play", function () {
                D.hide();
                I.hide();
                J.show()
            }), k.bind("pause", d), k.bind("ended", d), k.bind("timeupdate", m), k.bind("progress",
                g)
        } catch (Q) {}
    };
    var c = jQuery,
        B = 0;
    c.fn.html5gallery = function (h) {
        var e = function (a, c, b) {
            this.container = a;
            this.options = c;
            this.id = b;
            this.options.googlefonts && 0 < this.options.googlefonts.length && (a = ("https:" == document.location.protocol ? "https" : "http") + "://fonts.googleapis.com/css?family=" + this.options.googlefonts, c = document.createElement("link"), c.setAttribute("rel", "stylesheet"), c.setAttribute("type", "text/css"), c.setAttribute("href", a), document.getElementsByTagName("head")[0].appendChild(c));
            this.options.flashInstalled = !1;
            try {
                new ActiveXObject("ShockwaveFlash.ShockwaveFlash") && (this.options.flashInstalled = !0)
            } catch (e) {
                navigator.mimeTypes["application/x-shockwave-flash"] && (this.options.flashInstalled = !0)
            }
            this.options.html5VideoSupported = !! document.createElement("video").canPlayType;
            this.options.isChrome = null != navigator.userAgent.match(/Chrome/i);
            this.options.isFirefox = null != navigator.userAgent.match(/Firefox/i);
            this.options.isOpera = null != navigator.userAgent.match(/Opera/i) || null != navigator.userAgent.match(/OPR\//i);
            this.options.isSafari = null != navigator.userAgent.match(/Safari/i);
            this.options.isIE11 = null != navigator.userAgent.match(/Trident\/7/) && null != navigator.userAgent.match(/rv:11/);
            this.options.isIE = null != navigator.userAgent.match(/MSIE/i) && !this.options.isOpera;
            this.options.isIE10 = null != navigator.userAgent.match(/MSIE 10/i) && !this.options.isOpera;
            this.options.isIE9 = null != navigator.userAgent.match(/MSIE 9/i) && !this.options.isOpera;
            this.options.isIE8 = null != navigator.userAgent.match(/MSIE 8/i) && !this.options.isOpera;
            this.options.isIE7 = null != navigator.userAgent.match(/MSIE 7/i) && !this.options.isOpera;
            this.options.isIE6 = null != navigator.userAgent.match(/MSIE 6/i) && !this.options.isOpera;
            this.options.isIE678 = this.options.isIE6 || this.options.isIE7 || this.options.isIE8;
            this.options.isIE6789 = this.options.isIE6 || this.options.isIE7 || this.options.isIE8 || this.options.isIE9;
            this.options.isAndroid = null != navigator.userAgent.match(/Android/i);
            this.options.isIPad = null != navigator.userAgent.match(/iPad/i);
            this.options.isIPhone =
                null != navigator.userAgent.match(/iPod/i) || null != navigator.userAgent.match(/iPhone/i);
            this.options.isIOS = this.options.isIPad || this.options.isIPhone;
            this.options.isMobile = this.options.isAndroid || this.options.isIPad || this.options.isIPhone;
            this.options.isIOSLess5 = this.options.isIPad && this.options.isIPhone && (null != navigator.userAgent.match(/OS 4/i) || null != navigator.userAgent.match(/OS 3/i));
            this.options.supportCSSPositionFixed = !this.options.isIE6 && !this.options.isIOSLess5;
            this.eStart = (this.isTouch = "ontouchstart" in
                window) ? "touchstart" : "mousedown";
            this.eMove = this.isTouch ? "touchmove" : "mousemove";
            this.eCancel = this.isTouch ? "touchcancel" : "mouseup";
            this.eClick = this.isTouch ? "touchstart" : "click";
            this.slideTimer = this.slideshowTimeout = null;
            this.looptimes = this.slideTimerCount = 0;
            this.updateCarouselTimeout = null;
            this.disableupdatecarousel = !1;
            this.isHd = this.options.hddefault;
            this.isHTML5 = !1;
            this.elemArray = [];
            this.container.children().hide();
            this.container.css({
                display: "block",
                position: "relative"
            });
            this.initData(this.init)
        };
        e.prototype = {
            getParams: function () {
                for (var a = {}, c = window.location.search.substring(1).split("&"), b = 0; b < c.length; b++) {
                    var e = c[b].split("=");
                    e && 2 == e.length && (a[e[0].toLowerCase()] = unescape(e[1]))
                }
                return a
            },
            init: function (a) {
                if (a.options.random)
                    for (var d = a.elemArray.length - 1; 0 < d; d--) {
                        var b = Math.floor(Math.random() * d),
                            e = a.elemArray[d];
                        a.elemArray[d] = a.elemArray[b];
                        a.elemArray[b] = e
                    }
                a.initYoutubeApi();
                a.options.showcarousel = 1 < a.elemArray.length && a.options.showcarousel;
                a.options.watermarkcode = a.options.fv ?
                    "<a style='text-decoration:none;' target='_blank' href='" + a.options.freelink + "' >" : "";
                a.options.watermarkcode += "<div style='" + (a.options.fv ? "display:none;position:absolute;top:10px;left:10px;width:120px;height:18px;line-height:18px;text-align:center;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;background-color:#fff;color:#333;font-size:12px;font-family:Armata,sans-serif,Arial;" : 0 < a.options.watermark.length ? "display:block;position:absolute;top:0px;left:0px;" : "display:none;") +
                    "' >";
                a.options.fv ? a.options.watermarkcode += a.options.fvm : 0 < a.options.watermark.length && (a.options.watermarkcode += "<img src='" + a.options.watermark + "' />");
                a.options.watermarkcode += "</div>";
                a.options.watermarkcode += a.options.fv ? "</a>" : "";
                a.createStyle();
                a.createMarkup();
                a.createImageToolbox();
                0 >= a.elemArray.length || (a.createEvents(), a.loadCarousel(), a.savedElem = -1, a.curElem = -1, a.nextElem = -1, a.prevElem = -1, a.isPaused = !a.options.autoslide, a.isFullscreen = !1, a.showingPoster = !1, a.disableTouchSwipe = !1, d =
                    a.getParams(), a.slideRun(d.html5galleryid && d.html5galleryid in a.elemArray ? d.html5galleryid : 0), a.options.responsive && (a.resizeGallery(), c(window).resize(function () {
                        a.resizeGallery()
                    })))
            },
            resizeGallery: function () {
                switch (this.options.skin) {
                case "vertical":
                case "showcase":
                    this.resizeStyleVertical();
                    break;
                default:
                    this.resizeStyleDefault()
                }
                this.resizeImageToolbox()
            },
            initData: function (a) {
                this.elemArray = [];
                if (this.options.src && 0 < this.options.src.length) {
                    var d = this.options.mediatype ? this.options.mediatype :
                        this.checkType(this.options.src);
                    this.elemArray.push([0, "", this.options.src, this.options.webm, this.options.ogg, "", "", this.options.title ? this.options.title : "", this.options.title ? this.options.title : "", d, this.options.width, this.options.height, this.options.poster, this.options.hd, this.options.hdogg, this.options.hdwebm]);
                    this.readTags();
                    a(this)
                } else if (this.options.xml && 0 < this.options.xml.length) {
                    this.options.xmlnocache && (this.options.xml += 0 > this.options.xml.indexOf("?") ? "?" : "&", this.options.xml += Math.random());
                    var b = this;
                    c.ajax({
                        type: "GET",
                        url: this.options.xml,
                        dataType: "xml",
                        success: function (d) {
                            c(d).find("slide").each(function (a) {
                                var d = c(this).find("title").text(),
                                    e = c(this).find("description").text() ? c(this).find("description").text() : c(this).find("information").text();
                                d || (d = "");
                                e || (e = "");
                                var m = c(this).find("mediatype").text() ? c(this).find("mediatype").text() : b.checkType(c(this).find("file").text());
                                b.elemArray.push([c(this).find("id").length ? c(this).find("id").text() : a, c(this).find("thumbnail").text(),
                                    c(this).find("file").text(), c(this).find("file-ogg").text(), c(this).find("file-webm").text(), c(this).find("link").text(), c(this).find("linktarget").text(), d, e, m, c(this).find("width").length && !isNaN(parseInt(c(this).find("width").text())) ? parseInt(c(this).find("width").text()) : b.options.width, c(this).find("height").length && !isNaN(parseInt(c(this).find("height").text())) ? parseInt(c(this).find("height").text()) : b.options.height, c(this).find("poster").text(), c(this).find("hd").text(), c(this).find("hdogg").text(),
                                    c(this).find("hdwebm").text()
                                ])
                            });
                            b.readTags();
                            a(b)
                        }
                    })
                } else this.options.remote && 0 < this.options.remote.length ? (b = this, c.getJSON(this.options.remote, function (c) {
                    for (var d = 0; d < c.length; d++) {
                        var e = c[d].mediatype ? c[d].mediatype : b.checkType(c[d].file);
                        b.elemArray.push([d, c[d].thumbnail, c[d].file, c[d].fileogg, c[d].filewebm, c[d].link, c[d].linktarget, c[d].title, c[d].description, e, c[d].width && !isNaN(parseInt(c[d].width)) ? parseInt(c[d].width) : b.options.width, c[d].height && !isNaN(parseInt(c[d].height)) ? parseInt(c[d].height) :
                            b.options.height, c[d].poster, c[d].hd, c[d].hdogg, c[d].hdwebm
                        ])
                    }
                    b.readTags();
                    a(b)
                })) : this.options.youtubechannel ? (d = {
                        alt: "json",
                        v: 2,
                        orderby: this.options.youtubechannel.orderby ? this.options.youtubechannel.orderby : "published",
                        "start-index": this.options.youtubechannel["start-index"] ? this.options.youtubechannel["start-index"] : 1,
                        "max-results": this.options.youtubechannel["max-results"] ? this.options.youtubechannel["max-results"] : 10
                    }, this.options.youtubechannel.author ? d.author = this.options.youtubechannel.author :
                    this.options.youtubechannel.q && (d.q = this.options.youtubechannel.q), d = "https://gdata.youtube.com/feeds/api/videos?" + c.param(d), b = this, c.getJSON(d, function (c) {
                        if (c && c.feed && c.feed.entry)
                            for (var d = 0; d < c.feed.entry.length; d++) b.elemArray.push([d, "http://img.youtube.com/vi/" + c.feed.entry[d].media$group.yt$videoid.$t + "/0.jpg", c.feed.entry[d].media$group.media$player.url, null, null, null, null, c.feed.entry[d].media$group.media$title.$t, c.feed.entry[d].media$group.media$description.$t, 9, 640, 480, "http://img.youtube.com/vi/" +
                                c.feed.entry[d].media$group.yt$videoid.$t + "/0.jpg", null, null, null
                            ]);
                        b.readTags();
                        a(b)
                    })) : (this.readTags(), a(this))
            },
            readTags: function () {
                var a = this;
                c("img", this.container).each(function () {
                    var d = c(this).attr("src"),
                        b = c(this).attr("alt"),
                        e = c(this).data("description") ? c(this).data("description") : c(this).data("information");
                    b || (b = "");
                    e || (e = "");
                    var g = a.options.width,
                        q = a.options.height,
                        f = null,
                        h = null,
                        j = null,
                        l = null,
                        n = null,
                        r = null,
                        p = null,
                        u = null;
                    c(this).parent().is("a") && (d = c(this).parent().attr("href"), f = c(this).parent().data("ogg"),
                        h = c(this).parent().data("webm"), j = c(this).parent().data("link"), l = c(this).parent().data("linktarget"), n = c(this).parent().data("poster"), isNaN(c(this).parent().data("width")) || (g = c(this).parent().data("width")), isNaN(c(this).parent().data("height")) || (q = c(this).parent().data("height")), r = c(this).parent().data("hd"), p = c(this).parent().data("hdogg"), u = c(this).parent().data("hdwebm"));
                    var k = c(this).parent().data("mediatype") ? c(this).parent().data("mediatype") : a.checkType(d);
                    a.elemArray.push([a.elemArray.length,
                        c(this).attr("src"), d, f, h, j, l, b, e, k, g, q, n, r, p, u
                    ])
                })
            },
            createMarkup: function () {
                this.$gallery = jQuery("<div class='html5gallery-container-" + this.id + "'><div class='html5gallery-box-" + this.id + "'><div class='html5gallery-elem-" + this.id + "'></div><div class='html5gallery-title-" + this.id + "'></div><div class='html5gallery-timer-" + this.id + "'></div><div class='html5gallery-viral-" + this.id + "'></div><div class='html5gallery-toolbox-" + this.id + "'><div class='html5gallery-toolbox-bg-" + this.id + "'></div><div class='html5gallery-toolbox-buttons-" +
                    this.id + "'><div class='html5gallery-play-" + this.id + "'></div><div class='html5gallery-pause-" + this.id + "'></div><div class='html5gallery-left-" + this.id + "'></div><div class='html5gallery-right-" + this.id + "'></div><div class='html5gallery-lightbox-" + this.id + "'></div></div></div></div><div class='html5gallery-car-" + this.id + "'><div class='html5gallery-car-list-" + this.id + "'><div class='html5gallery-car-mask-" + this.id + "'><div class='html5gallery-thumbs-" + this.id + "'></div></div><div class='html5gallery-car-slider-bar-" +
                    this.id + "'><div class='html5gallery-car-slider-bar-top-" + this.id + "'></div><div class='html5gallery-car-slider-bar-middle-" + this.id + "'></div><div class='html5gallery-car-slider-bar-bottom-" + this.id + "'></div></div><div class='html5gallery-car-left-" + this.id + "'></div><div class='html5gallery-car-right-" + this.id + "'></div><div class='html5gallery-car-slider-" + this.id + "'></div></div></div></div>");
                this.$gallery.appendTo(this.container);
                this.options.socialurlforeach || this.createSocialMedia();
                this.options.googleanalyticsaccount && !window._gaq && (window._gaq = window._gaq || [], window._gaq.push(["_setAccount", this.options.googleanalyticsaccount]), window._gaq.push(["_trackPageview"]), c.getScript(("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js"))
            },
            createSocialMedia: function () {
                c(".html5gallery-viral-" + this.id, this.$gallery).empty();
                var a = window.location.href;
                this.options.socialurlforeach && (a += (0 > window.location.href.indexOf("?") ? "?" : "&") + "html5galleryid=" + this.elemArray[this.curElem][0]);
                if (this.options.showsocialmedia && this.options.showfacebooklike) {
                    var d = "<div style='display:block; float:left; width:110px; height:21px;'><iframe src='http://www.facebook.com/plugins/like.php?href=",
                        d = this.options.facebooklikeurl && 0 < this.options.facebooklikeurl.length ? d + encodeURIComponent(this.options.facebooklikeurl) : d + a;
                    c(".html5gallery-viral-" + this.id, this.$gallery).append(d + "&amp;send=false&amp;layout=button_count&amp;width=450&amp;show_faces=false&amp;action=like&amp;colorscheme=light&amp;font&amp;height=21' scrolling='no' frameborder='0' style='border:none;;overflow:hidden; width:110px; height:21px;' allowTransparency='true'></iframe></div>")
                }
                this.options.showsocialmedia &&
                    this.options.showtwitter && (d = "<div style='display:block; float:left; width:110px; height:21px;'><a href='https://twitter.com/share' class='twitter-share-button'", d = this.options.twitterurl && 0 < this.options.twitterurl.length ? d + (" data-url='" + this.options.twitterurl + "'") : d + (" data-url='" + a + "'"), this.options.twitterusername && 0 < this.options.twitterusername.length && (d += " data-via='" + this.options.twittervia + "' data-related='" + this.options.twitterusername + "'"), c(".html5gallery-viral-" + this.id, this.$gallery).append(d +
                        ">Tweet</a></div>"), c.getScript("http://platform.twitter.com/widgets.js"));
                this.options.showsocialmedia && this.options.showgoogleplus && (d = "<div style='display:block; float:left; width:100px; height:21px;'><div class='g-plusone' data-size='medium'", d = this.options.googleplusurl && 0 < this.options.googleplusurl.length ? d + (" data-href='" + this.options.googleplusurl + "'") : d + (" data-href='" + a + "'"), c(".html5gallery-viral-" + this.id, this.$gallery).append(d + "></div></div>"), c.getScript("https://apis.google.com/js/plusone.js"))
            },
            playGallery: function () {
                var a = this;
                c(".html5gallery-play-" + a.id, a.$gallery).hide();
                c(".html5gallery-pause-" + a.id, a.$gallery).show();
                a.isPaused = !1;
                a.slideshowTimeout = setTimeout(function () {
                    a.slideRun(-1)
                }, a.options.slideshowinterval);
                c(".html5gallery-timer-" + a.id, a.$gallery).css({
                    width: 0
                });
                a.slideTimerCount = 0;
                a.options.showtimer && (a.slideTimer = setInterval(function () {
                    a.showSlideTimer()
                }, 50))
            },
            pauseGallery: function () {
                c(".html5gallery-play-" + this.id, this.$gallery).show();
                c(".html5gallery-pause-" + this.id,
                    this.$gallery).hide();
                this.isPaused = !0;
                clearTimeout(this.slideshowTimeout);
                c(".html5gallery-timer-" + this.id, this.$gallery).css({
                    width: 0
                });
                clearInterval(this.slideTimer);
                this.slideTimerCount = 0
            },
            createEvents: function () {
                var a = this;
                c(".html5gallery-play-" + this.id, this.$gallery).click(function () {
                    a.playGallery()
                });
                c(".html5gallery-pause-" + this.id, this.$gallery).click(function () {
                    a.pauseGallery()
                });
                c(".html5gallery-lightbox-" + this.id, this.$gallery).click(function () {
                    a.goFullscreen()
                });
                c(".html5gallery-left-" +
                    this.id, this.$gallery).click(function () {
                    a.slideRun(-2, !0)
                });
                c(".html5gallery-right-" + this.id, this.$gallery).click(function () {
                    a.slideRun(-1, !0)
                });
                if (a.options.enabletouchswipe) {
                    var d = a.options.isAndroid && a.options.enabletouchswipeonandroid ? !0 : !1;
                    c(".html5gallery-box-" + this.id, this.$gallery).touchSwipe({
                        preventWebBrowser: d,
                        swipeLeft: function () {
                            a.disableTouchSwipe || a.slideRun(-1, !0)
                        },
                        swipeRight: function () {
                            a.disableTouchSwipe || a.slideRun(-2, !0)
                        }
                    })
                }
                c(".html5gallery-box-" + this.id, this.$gallery).hover(function () {
                    a.onSlideshowOver();
                    if ("mouseover" == a.options.imagetoolboxmode) {
                        var b = a.elemArray[a.curElem][9];
                        ("always" == a.options.showimagetoolbox || "image" == a.options.showimagetoolbox && 1 == b) && a.showimagetoolbox(b)
                    }
                }, function () {
                    "mouseover" == a.options.imagetoolboxmode && a.hideimagetoolbox()
                });
                c(".html5gallery-container-" + this.id).hover(function () {
                    a.options.titleoverlay && a.options.titleautohide && c(".html5gallery-title-" + a.id, a.$gallery).fadeIn()
                }, function () {
                    a.options.titleoverlay && a.options.titleautohide && c(".html5gallery-title-" + a.id,
                        a.$gallery).fadeOut()
                });
                c(".html5gallery-car-left-" + this.id, this.$gallery).css({
                    "background-position": "-64px 0px",
                    cursor: ""
                });
                c(".html5gallery-car-left-" + this.id, this.$gallery).data("disabled", !0);
                c(".html5gallery-car-right-" + this.id, this.$gallery).css({
                    "background-position": "0px 0px"
                });
                c(".html5gallery-car-left-" + this.id, this.$gallery).click(function () {
                    c(this).data("disabled") || (a.disableupdatecarousel = !0, a.updateCarouselTimeout = setTimeout(function () {
                            a.enableUpdateCarousel()
                        }, a.options.updatecarouselinterval),
                        a.carouselPrev())
                });
                c(".html5gallery-car-right-" + this.id, this.$gallery).click(function () {
                    c(this).data("disabled") || (a.disableupdatecarousel = !0, a.updateCarouselTimeout = setTimeout(function () {
                        a.enableUpdateCarousel()
                    }, a.options.updatecarouselinterval), a.carouselNext())
                });
                c(".html5gallery-car-slider-" + this.id, this.$gallery).bind("drag", function (b, c) {
                    a.disableupdatecarousel = !0;
                    a.updateCarouselTimeout = setTimeout(function () {
                        a.enableUpdateCarousel()
                    }, a.options.updatecarouselinterval);
                    a.carouselSliderDrag(b,
                        c)
                });
                c(".html5gallery-car-slider-bar-" + this.id, this.$gallery).click(function (c) {
                    a.disableupdatecarousel = !0;
                    a.updateCarouselTimeout = setTimeout(function () {
                        a.enableUpdateCarousel()
                    }, a.options.updatecarouselinterval);
                    a.carouselBarClicked(c)
                });
                c(".html5gallery-car-left-" + this.id, this.$gallery).hover(function () {
                    c(this).data("disabled") || c(this).css({
                        "background-position": "-32px 0px"
                    })
                }, function () {
                    c(this).data("disabled") || c(this).css({
                        "background-position": "0px 0px"
                    })
                });
                c(".html5gallery-car-right-" + this.id,

                    this.$gallery).hover(function () {
                    c(this).data("disabled") || c(this).css({
                        "background-position": "-32px 0px"
                    })
                }, function () {
                    c(this).data("disabled") || c(this).css({
                        "background-position": "0px 0px"
                    })
                })
            },
            createStyle: function () {
                switch (this.options.skin) {
                case "vertical":
                case "showcase":
                    this.createStyleVertical();
                    break;
                default:
                    this.createStyleDefault()
                }
            },
            resizeStyleVertical: function () {
                if (this.container.parent() && this.container.parent().width()) {
                    this.options.containerWidth = this.container.parent().width();
                    this.options.totalWidth =
                        this.options.containerWidth;
                    "bottom" == this.options.carouselposition ? this.options.width = this.options.totalWidth - 2 * this.options.padding : (this.options.width = this.options.totalWidth - 2 * this.options.padding, 0 < this.options.carouselWidth + this.options.carouselmargin && (this.options.width -= this.options.carouselWidth + this.options.carouselmargin));
                    this.options.responsivefullscreen && 0 < this.container.parent().height() ? (this.options.containerHeight = this.container.parent().height(), this.options.totalHeight = this.options.containerHeight,
                        this.options.height = "bottom" == this.options.carouselposition ? this.options.totalHeight - (this.options.headerHeight + 2 * this.options.padding + this.options.carouselheight) : this.options.totalHeight - (this.options.headerHeight + 2 * this.options.padding)) : (this.options.height = Math.round(this.options.width * this.options.originalHeight / this.options.originalWidth), this.options.totalHeight = "bottom" == this.options.carouselposition ? this.options.height + this.options.headerHeight + 2 * this.options.padding + this.options.carouselmargin +
                        this.options.carouselHeight : this.options.height + this.options.headerHeight + 2 * this.options.padding, this.options.containerHeight = this.options.totalHeight);
                    this.container.css({
                        width: this.options.containerWidth,
                        height: this.options.containerHeight
                    });
                    this.options.boxWidth = this.options.width;
                    this.options.boxHeight = this.options.height + this.options.headerHeight;
                    if (this.options.showcarousel)
                        if ("bottom" == this.options.carouselposition) {
                            this.options.carouselWidth = this.options.width;
                            this.options.carouselHeight =
                                this.options.carouselheight;
                            this.options.carouselLeft = this.options.padding;
                            this.options.carouselTop = this.options.height + this.options.headerHeight + 2 * this.options.padding;
                            this.options.carAreaLength = this.options.carouselHeight;
                            this.options.carouselSlider = Math.floor(this.options.carAreaLength / (this.options.thumbheight + this.options.thumbgap)) < this.elemArray.length;
                            this.options.thumbwidth = this.options.width;
                            this.options.carouselSlider && (this.options.thumbwidth -= 20);
                            c(".html5gallery-car-mask-" + this.id).css({
                                width: this.options.thumbwidth +
                                    "px"
                            });
                            c(".html5gallery-tn-" + this.id).css({
                                width: this.options.thumbwidth + "px"
                            });
                            c(".html5gallery-tn-selected-" + this.id).css({
                                width: this.options.thumbwidth + "px"
                            });
                            c(".html5gallery-car-slider-bar-" + this.id).css({
                                left: String(this.options.thumbwidth + 6) + "px"
                            });
                            this.options.isMobile ? (c(".html5gallery-car-left-" + this.id).css({
                                left: String(this.options.thumbwidth + 5) + "px"
                            }), c(".html5gallery-car-right-" + this.id).css({
                                left: String(this.options.thumbwidth + 5) + "px"
                            })) : c(".html5gallery-car-slider-" + this.id).css({
                                left: String(this.options.thumbwidth +
                                    5) + "px"
                            });
                            var a = this.options.thumbwidth - 3 * this.options.thumbmargin;
                            this.options.thumbshowimage && (a -= this.options.thumbimagewidth + 2 * this.options.thumbimageborder);
                            this.options.thumbshowtitle && c("head").append("<style type='text/css' data-creator='html5gallery'>.html5gallery-tn-title-" + this.id + " {width: " + a + "px;}</style>")
                        } else this.options.carouselWidth = this.options.thumbwidth, this.options.carouselHeight = this.options.height + this.options.headerHeight, this.options.carTop = 0, this.options.carBottom = 0, this.options.carAreaLength =
                            this.options.carouselHeight - this.options.carTop - this.options.carBottom, this.options.carouselSlider = Math.floor(this.options.carAreaLength / (this.options.thumbheight + this.options.thumbgap)) < this.elemArray.length, this.options.carouselSlider && (this.options.carouselWidth += 20), "left" == this.options.carouselposition ? (this.options.boxLeft = this.options.padding + this.options.carouselWidth + this.options.carouselmargin, this.options.carouselLeft = this.options.padding) : this.options.carouselLeft = this.options.padding +
                            this.options.width + this.options.carouselmargin, this.options.carouselTop = this.options.padding;
                    c(".html5gallery-container-" + this.id).css({
                        width: this.options.totalWidth + "px",
                        height: this.options.totalHeight + "px"
                    });
                    c(".html5gallery-box-" + this.id).css({
                        width: this.options.boxWidth + "px",
                        height: this.options.boxHeight + "px"
                    });
                    a = this.elemArray[this.curElem][9];
                    if (1 == a || this.showingPoster) {
                        var d = this.elemArray[this.curElem][10],
                            a = this.elemArray[this.curElem][11],
                            b;
                        this.isFullscreen ? (b = Math.min(this.fullscreenWidth /
                            d, this.fullscreenHeight / a), b = 1 < b ? 1 : b) : b = "fill" == this.options.resizemode ? Math.max(this.options.width / d, this.options.height / a) : Math.min(this.options.width / d, this.options.height / a);
                        var d = Math.round(b * d),
                            e = Math.round(b * a),
                            a = this.isFullscreen ? d : this.options.width;
                        b = this.isFullscreen ? e : this.options.height;
                        var g = Math.round(a / 2 - d / 2),
                            q = Math.round(b / 2 - e / 2);
                        this.isFullscreen && this.adjustFullscreen(a, b, !0);
                        c(".html5gallery-elem-" + this.id).css({
                            width: a + "px",
                            height: b + "px"
                        });
                        c(".html5gallery-elem-img-" + this.id).css({
                            width: a +
                                "px",
                            height: b + "px"
                        });
                        c(".html5gallery-elem-image-" + this.id).css({
                            width: d + "px",
                            height: e + "px",
                            top: q + "px",
                            left: g + "px"
                        })
                    } else if (5 == a || 6 == a || 7 == a || 8 == a || 9 == a || 10 == a) a = this.elemArray[this.curElem][10], d = this.elemArray[this.curElem][11], this.isFullscreen ? (b = Math.min(this.fullscreenWidth / a, this.fullscreenHeight / d), b = 1 < b ? 1 : b, a = Math.round(b * a), b = Math.round(b * d), this.adjustFullscreen(a, b, !0)) : (a = this.options.width, b = this.options.height), c(".html5gallery-elem-" + this.id).css({
                        width: a + "px",
                        height: b + "px"
                    }), c(".html5gallery-elem-video-" +
                        this.id).css({
                        width: a + "px",
                        height: b + "px"
                    }), c(".html5gallery-elem-video-container-" + this.id).css({
                        width: a + "px",
                        height: b + "px"
                    }), d = this.options.isIPhone ? b - 48 : b, c(".html5gallery-elem-video-container-" + this.id).find("video").css({
                        width: a + "px",
                        height: d + "px"
                    }), c("#html5gallery-elem-video-" + this.id).css({
                        width: a + "px",
                        height: b + "px"
                    });
                    d = a = 0;
                    "bottom" == this.options.headerpos && (a = this.options.titleoverlay ? this.options.height - this.options.titleheight : this.options.height, d = this.options.titleoverlay ? this.options.height :
                        this.options.height + this.options.titleheight);
                    c(".html5gallery-title-" + this.id).css({
                        width: this.options.boxWidth + "px"
                    });
                    this.options.titleoverlay || c(".html5gallery-title-" + this.id).css({
                        top: a + "px"
                    });
                    c(".html5gallery-viral-" + this.id).css({
                        top: d + "px"
                    });
                    c(".html5gallery-timer-" + this.id).css({
                        top: String(this.options.elemTop + this.options.height - 2) + "px"
                    });
                    this.options.showcarousel && (c(".html5gallery-car-" + this.id).css({
                            width: this.options.carouselWidth + "px",
                            height: this.options.carouselHeight + "px",
                            top: this.options.carouselTop +
                                "px",
                            left: this.options.carouselLeft + "px",
                            top: this.options.carouselTop + "px"
                        }), c(".html5gallery-car-list-" + this.id).css({
                            top: this.options.carTop + "px",
                            height: String(this.options.carAreaLength) + "px",
                            width: this.options.carouselWidth + "px"
                        }), this.options.thumbShowNum = Math.floor(this.options.carAreaLength / (this.options.thumbheight + this.options.thumbgap)), this.options.thumbMaskHeight = this.options.thumbShowNum * this.options.thumbheight + (this.options.thumbShowNum - 1) * this.options.thumbgap, this.options.thumbTotalHeight =
                        this.elemArray.length * this.options.thumbheight + (this.elemArray.length - 1) * this.options.thumbgap, this.options.carouselSlider && (this.options.carouselSliderMin = 0, this.options.carouselSliderMax = this.options.thumbMaskHeight - 54, c(".html5gallery-car-slider-bar-" + this.id).css({
                            height: this.options.thumbMaskHeight + "px"
                        }), c(".html5gallery-car-slider-bar-middle-" + this.id).css({
                            height: String(this.options.thumbMaskHeight - 32) + "px"
                        }), this.options.isMobile && c(".html5gallery-car-right-" + this.id).css({
                            top: String(this.options.thumbMaskHeight -
                                35) + "px"
                        }), c(".html5gallery-car-slider-bar-" + this.id).css({
                            display: "block"
                        }), c(".html5gallery-car-left-" + this.id).css({
                            display: "block"
                        }), c(".html5gallery-car-right-" + this.id).css({
                            display: "block"
                        }), c(".html5gallery-car-slider-" + this.id).css({
                            display: "block"
                        })), a = 0, this.options.carouselNavButton && (a = Math.round(this.options.carAreaLength / 2 - this.options.thumbMaskHeight / 2)), c(".html5gallery-car-mask-" + this.id).css({
                            top: a + "px",
                            height: this.options.thumbMaskHeight + "px"
                        }), this.carouselHighlight(this.curElem))
                }
            },
            createStyleVertical: function () {
                this.options.thumbimagewidth = this.options.thumbshowtitle ? this.options.thumbheight - 2 * this.options.thumbimageborder - 4 : this.options.thumbwidth - 2 * this.options.thumbimageborder - 4;
                this.options.thumbimageheight = this.options.thumbheight - 2 * this.options.thumbimageborder - 4;
                this.options.showtitle || (this.options.titleheight = 0);
                if (!this.options.showsocialmedia || !this.options.showfacebooklike && !this.options.showtwitter && !this.options.showgoogleplus) this.options.socialheight = 0;
                this.options.headerHeight =
                    this.options.titleoverlay ? this.options.socialheight : this.options.titleheight + this.options.socialheight;
                this.options.boxWidth = this.options.width;
                this.options.boxHeight = this.options.height + this.options.headerHeight;
                this.options.boxLeft = this.options.padding;
                this.options.boxTop = this.options.padding;
                this.options.showcarousel ? "bottom" == this.options.carouselposition ? (this.options.carouselWidth = this.options.width, this.options.carouselHeight = this.options.carouselheight, this.options.carouselLeft = this.options.padding,
                    this.options.carouselTop = this.options.height + this.options.headerHeight + 2 * this.options.padding, this.options.carAreaLength = this.options.carouselHeight, this.options.carouselSlider = Math.floor(this.options.carAreaLength / (this.options.thumbheight + this.options.thumbgap)) < this.elemArray.length, this.options.thumbwidth = this.options.width, this.options.carouselSlider && (this.options.thumbwidth -= 20)) : (this.options.carouselWidth = this.options.thumbwidth, this.options.carouselHeight = this.options.height + this.options.headerHeight,
                    this.options.carTop = 0, this.options.carBottom = 0, this.options.carAreaLength = this.options.carouselHeight - this.options.carTop - this.options.carBottom, this.options.carouselSlider = Math.floor(this.options.carAreaLength / (this.options.thumbheight + this.options.thumbgap)) < this.elemArray.length, this.options.carouselSlider && (this.options.carouselWidth += 20), "left" == this.options.carouselposition ? (this.options.boxLeft = this.options.padding + this.options.carouselWidth + this.options.carouselmargin, this.options.carouselLeft =
                        this.options.padding) : this.options.carouselLeft = this.options.padding + this.options.width + this.options.carouselmargin, this.options.carouselTop = this.options.padding) : (this.options.carouselWidth = 0, this.options.carouselHeight = 0, this.options.carouselLeft = 0, this.options.carouselTop = 0, this.options.carouselmargin = 0);
                "bottom" == this.options.carouselposition ? (this.options.totalWidth = this.options.width + 2 * this.options.padding, this.options.totalHeight = this.options.height + this.options.headerHeight + 2 * this.options.padding +
                    this.options.carouselmargin + this.options.carouselHeight) : (this.options.totalWidth = this.options.width + this.options.carouselWidth + this.options.carouselmargin + 2 * this.options.padding, this.options.totalHeight = this.options.height + this.options.headerHeight + 2 * this.options.padding);
                this.options.containerWidth = this.options.totalWidth;
                this.options.containerHeight = this.options.totalHeight;
                this.options.responsive ? (this.options.originalWidth = this.options.width, this.options.originalHeight = this.options.height, this.container.css({
                    "max-width": "100%"
                })) :
                    this.container.css({
                        width: this.options.containerWidth,
                        height: this.options.containerHeight
                    });
                var a = 0,
                    d = 0;
                this.options.elemTop = 0;
                "top" == this.options.headerpos ? (d = 0, a = this.options.socialheight, this.options.elemTop = this.options.headerHeight) : "bottom" == this.options.headerpos && (this.options.elemTop = 0, a = this.options.titleoverlay ? this.options.height - this.options.titleheight : this.options.height, d = this.options.titleoverlay ? this.options.height : this.options.height + this.options.titleheight);
                var b = " .html5gallery-container-" +
                    this.id + " { display:block; position:absolute; left:0px; top:0px; width:" + this.options.totalWidth + "px; height:" + this.options.totalHeight + "px; background:url('" + this.options.skinfolder + this.options.bgimage + "') center top; background-color:" + this.options.bgcolor + ";}";
                this.options.galleryshadow && (b += " .html5gallery-container-" + this.id + " { -moz-box-shadow: 0px 2px 5px #aaa; -webkit-box-shadow: 0px 2px 5px #aaa; box-shadow: 0px 2px 5px #aaa;}");
                var b = b + (" .html5gallery-box-" + this.id + " {display:block; position:absolute; text-align:center; left:" +
                    this.options.boxLeft + "px; top:" + this.options.boxTop + "px; width:" + this.options.boxWidth + "px; height:" + this.options.boxHeight + "px; }"),
                    e = Math.round(this.options.socialheight / 2 - 12),
                    b = b + (" .html5gallery-title-text-" + this.id + " " + this.options.titlecss + " .html5gallery-title-text-" + this.id + " " + this.options.titlecsslink + " .html5gallery-error-" + this.id + " " + this.options.errorcss),
                    b = b + (" .html5gallery-description-text-" + this.id + " " + this.options.descriptioncss + " .html5gallery-description-text-" + this.id + " " + this.options.descriptioncsslink),
                    b = b + (" .html5gallery-fullscreen-title-" + this.id + "" + this.options.titlefullscreencss + " .html5gallery-fullscreen-title-" + this.id + "" + this.options.titlefullscreencsslink),
                    b = b + (" .html5gallery-viral-" + this.id + " {display:block; overflow:hidden; position:absolute; text-align:left; top:" + d + "px; left:0px; width:" + this.options.boxWidth + "px; height:" + this.options.socialheight + "px; padding-top:" + e + "px;}"),
                    b = b + (" .html5gallery-title-" + this.id + " {display:" + (this.options.titleoverlay && this.options.titleautohide ?
                        "none" : "block") + "; overflow:hidden; position:absolute; left:0px; width:" + this.options.boxWidth + "px; "),
                    b = this.options.titleoverlay ? "top" == this.options.headerpos ? b + "top:0px; height:auto; }" : b + "bottom:0px; height:auto; }" : b + ("top:" + a + "px; height:" + this.options.titleheight + "px; }"),
                    b = b + (" .html5gallery-timer-" + this.id + " {display:block; position:absolute; top:" + String(this.options.elemTop + this.options.height - 2) + "px; left:0px; width:0px; height:2px; background-color:#ccc; filter:alpha(opacity=60); opacity:0.6; }"),
                    b = b + (" .html5gallery-elem-" + this.id + " {display:block; overflow:hidden; position:absolute; top:" + this.options.elemTop + "px; left:0px; width:" + this.options.boxWidth + "px; height:" + this.options.height + "px;}");
                this.options.isIE7 || this.options.isIE6 ? (b += " .html5gallery-loading-" + this.id + " {display:none; }", b += " .html5gallery-loading-center-" + this.id + " {display:none; }") : (b += " .html5gallery-loading-" + this.id + " {display:block; position:absolute; top:4px; right:4px; width:100%; height:100%; background:url('" +
                    this.options.skinfolder + "loading.gif') no-repeat top right;}", b += " .html5gallery-loading-center-" + this.id + " {display:block; position:absolute; top:0px; left:0px; width:100%; height:100%; background:url('" + this.options.skinfolder + "loading_center.gif') no-repeat center center;}");
                0 < this.options.borderradius && (b += " .html5gallery-elem-" + this.id + " { overflow:hidden; border-radius:" + this.options.borderradius + "px; -moz-border-radius:" + this.options.borderradius + "px; -webkit-border-radius:" + this.options.borderradius +
                    "px;}");
                this.options.slideshadow && (b += " .html5gallery-title-" + this.id + " { padding:4px;}", b += " .html5gallery-timer-" + this.id + " { margin:4px;}", b += " .html5gallery-elem-" + this.id + " { overflow:hidden; padding:4px; -moz-box-shadow: 0px 2px 5px #aaa; -webkit-box-shadow: 0px 2px 5px #aaa; box-shadow: 0px 2px 5px #aaa;}");
                this.options.showcarousel ? (b += " .html5gallery-car-" + this.id + " { position:absolute; display:block; overflow:hidden; width:" + this.options.carouselWidth + "px; height:" + this.options.carouselHeight +
                    "px; left:" + this.options.carouselLeft + "px; top:" + this.options.carouselTop + "px; }", b += " .html5gallery-car-list-" + this.id + " { position:absolute; display:block; overflow:hidden; top:" + this.options.carTop + "px; height:" + String(this.options.carAreaLength) + "px; left:0px; width:" + this.options.carouselWidth + "px; }", b += ".html5gallery-thumbs-" + this.id + " {margin-top:0px; height:" + String(this.elemArray.length * (this.options.thumbheight + this.options.thumbgap)) + "px;}", this.options.thumbShowNum = Math.floor(this.options.carAreaLength /
                        (this.options.thumbheight + this.options.thumbgap)), this.options.thumbMaskHeight = this.options.thumbShowNum * this.options.thumbheight + (this.options.thumbShowNum - 1) * this.options.thumbgap, this.options.thumbTotalHeight = this.elemArray.length * this.options.thumbheight + (this.elemArray.length - 1) * this.options.thumbgap, this.options.carouselSliderMin = 0, this.options.carouselSliderMax = this.options.thumbMaskHeight - 54, b += " .html5gallery-car-slider-bar-" + this.id + " { position:absolute; display:" + (this.options.carouselSlider ?
                        "block" : "none") + "; overflow:hidden; top:0px; height:" + this.options.thumbMaskHeight + "px; left:" + String(this.options.thumbwidth + 6) + "px; width:14px;}", b += " .html5gallery-car-slider-bar-top-" + this.id + " { position:absolute; display:block; top:0px; left:0px; width:14px; height:16px; background:url('" + this.options.skinfolder + "bartop.png')}", b += " .html5gallery-car-slider-bar-middle-" + this.id + " { position:absolute; display:block; top:16px; left:0px; width:14px; height:" + String(this.options.thumbMaskHeight -
                        32) + "px; background:url('" + this.options.skinfolder + "bar.png')}", b += " .html5gallery-car-slider-bar-bottom-" + this.id + " { position:absolute; display:block; bottom:0px; left:0px; width:14px; height:16px; background:url('" + this.options.skinfolder + "barbottom.png')}", b = this.options.isMobile ? b + (" .html5gallery-car-left-" + this.id + " { position:absolute; display:" + (this.options.carouselSlider ? "block" : "none") + "; cursor:pointer; overflow:hidden; width:16px; height:35px; left:" + String(this.options.thumbwidth + 5) +
                        "px; top:0px; background:url('" + this.options.skinfolder + "slidertop.png')}  .html5gallery-car-right-" + this.id + " { position:absolute; display:" + (this.options.carouselSlider ? "block" : "none") + "; cursor:pointer; overflow:hidden; width:16px; height:35px; left:" + String(this.options.thumbwidth + 5) + "px; top:" + String(this.options.thumbMaskHeight - 35) + "px; background:url('" + this.options.skinfolder + "sliderbottom.png')} ") : b + (" .html5gallery-car-slider-" + this.id + " { position:absolute; display:" + (this.options.carouselSlider ?
                        "block" : "none") + "; overflow:hidden; cursor:pointer; top:0px; height:54px; left:" + String(this.options.thumbwidth + 5) + "px; width:16px; background:url('" + this.options.skinfolder + "slider.png');}"), a = 0, this.options.carouselNavButton && (a = Math.round(this.options.carAreaLength / 2 - this.options.thumbMaskHeight / 2)), b += " .html5gallery-car-mask-" + this.id + " { position:absolute; display:block; overflow:hidden; top:" + a + "px; height:" + this.options.thumbMaskHeight + "px; left:0px; width:" + this.options.thumbwidth + "px;} ",
                    a = this.options.thumbheight, this.options.isIE || (a = this.options.thumbheight - 2), b += " .html5gallery-tn-" + this.id + " { display:block; margin-bottom:" + this.options.thumbgap + "px; text-align:center; cursor:pointer; width:" + this.options.thumbwidth + "px;height:" + a + "px;overflow:hidden;", this.options.carouselbgtransparent ? b += "background-color:transparent;" : (this.options.isIE || (b += "border-top:1px solid " + this.options.carouseltopborder + "; border-bottom:1px solid " + this.options.carouselbottomborder + ";"), b += "background-color: " +
                        this.options.carouselbgcolorend + "; background: " + this.options.carouselbgcolorend + " -webkit-gradient(linear, left top, left bottom, from(" + this.options.carouselbgcolorstart + "), to(" + this.options.carouselbgcolorend + ")) no-repeat; background: " + this.options.carouselbgcolorend + " -moz-linear-gradient(top, " + this.options.carouselbgcolorstart + ", " + this.options.carouselbgcolorend + ") no-repeat; filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=" + this.options.carouselbgcolorstart + ", endColorstr=" +
                        this.options.carouselbgcolorend + ") no-repeat; -ms-filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr=" + this.options.carouselbgcolorstart + ", endColorstr=" + this.options.carouselbgcolorend + ")' no-repeat;"), this.options.carouselbgimage && (b += "background:url('" + this.options.skinfolder + this.options.carouselbgimage + "') center top;"), b = b + "}" + (" .html5gallery-tn-selected-" + this.id + " { display:block; margin-bottom:" + this.options.thumbgap + "px;text-align:center; cursor:pointer; width:" + this.options.thumbwidth +
                        "px;height:" + a + "px;overflow:hidden;"), this.options.carouselbgtransparent ? b += "background-color:transparent;" : (this.options.isIE || (b += "border-top:1px solid " + this.options.carouselhighlighttopborder + "; border-bottom:1px solid " + this.options.carouselhighlightbottomborder + ";"), b += "background-color: " + this.options.carouselhighlightbgcolorend + "; background: " + this.options.carouselhighlightbgcolorend + " -webkit-gradient(linear, left top, left bottom, from(" + this.options.carouselhighlightbgcolorstart + "), to(" +
                        this.options.carouselhighlightbgcolorend + ")) no-repeat; background: " + this.options.carouselhighlightbgcolorend + " -moz-linear-gradient(top, " + this.options.carouselhighlightbgcolorstart + ", " + this.options.carouselhighlightbgcolorend + ") no-repeat; filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=" + this.options.carouselhighlightbgcolorstart + ", endColorstr=" + this.options.carouselhighlightbgcolorend + ") no-repeat; -ms-filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr=" + this.options.carouselhighlightbgcolorstart +
                        ", endColorstr=" + this.options.carouselhighlightbgcolorend + ")' no-repeat;"), this.options.carouselbgimage && (b += "background:url('" + this.options.skinfolder + this.options.carouselbgimage + "') center top;"), b += "}", b += " .html5gallery-tn-selected-" + this.id + " .html5gallery-tn-img-" + this.id + " {background-color:" + this.options.thumbimagebordercolor + ";} .html5gallery-tn-" + this.id + " { filter:alpha(opacity=" + Math.round(100 * this.options.thumbopacity) + "); opacity:" + this.options.thumbopacity + "; }  .html5gallery-tn-selected-" +
                    this.id + " { filter:alpha(opacity=100); opacity:1; } ", a = this.options.thumbwidth - 3 * this.options.thumbmargin, this.options.thumbshowimage ? (a -= this.options.thumbimagewidth + 2 * this.options.thumbimageborder, d = this.options.thumbshowtitle ? this.options.thumbmargin : this.options.thumbwidth / 2 - (this.options.thumbimagewidth + 2 * this.options.thumbimageborder) / 2, e = Math.round((this.options.thumbheight - 2) / 2 - (this.options.thumbimageheight + 2 * this.options.thumbimageborder) / 2), b += " .html5gallery-tn-img-" + this.id + " {display:block; overflow:hidden; float:left; margin-top:" +
                        e + "px; margin-left:" + d + "px; width:" + String(this.options.thumbimagewidth + 2 * this.options.thumbimageborder) + "px;height:" + String(this.options.thumbimageheight + 2 * this.options.thumbimageborder) + "px;}") : b += " .html5gallery-tn-img-" + this.id + " {display:none;}", this.options.thumbshowtitle ? (b += " .html5gallery-tn-title-" + this.id + " {display:block; overflow:hidden; float:left; margin-top:0px; margin-left:" + this.options.thumbmargin + "px; width:" + a + "px;height:" + String(this.options.thumbheight - 2) + "px;" + (this.options.thumbshowdescription ?
                        "" : "line-height:" + String(this.options.thumbheight - 2) + "px;") + "}", b += " .html5gallery-tn-title-" + this.id + this.options.thumbtitlecss, b += " .html5gallery-tn-description-" + this.id + this.options.thumbdescriptioncss) : (b += " .html5gallery-tn-title-" + this.id + " {display:none;}", b += " .html5gallery-tn-description-" + this.id + " {display:none;}"), this.carouselHighlight = function (a) {
                        c("#html5gallery-tn-" + this.id + "-" + a, this.$gallery).removeClass("html5gallery-tn-" + this.id).addClass("html5gallery-tn-selected-" + this.id);
                        if (!(this.options.thumbShowNum >= this.elemArray.length)) {
                            a = Math.floor(a / this.options.thumbShowNum) * this.options.thumbShowNum * (this.options.thumbheight + this.options.thumbgap);
                            a >= this.options.thumbTotalHeight - this.options.thumbMaskHeight && (a = this.options.thumbTotalHeight - this.options.thumbMaskHeight);
                            var b = a / (this.elemArray.length * (this.options.thumbheight + this.options.thumbgap) - this.options.thumbMaskHeight),
                                b = b * (this.options.carouselSliderMax - this.options.carouselSliderMin);
                            c(".html5gallery-car-slider-" +
                                this.id, this.$gallery).stop(!0).animate({
                                top: b
                            }, 300);
                            c(".html5gallery-thumbs-" + this.id, this.$gallery).stop(!0).animate({
                                marginTop: -1 * a
                            }, 300);
                            this.updateCarouseButtons(-a)
                        }
                    }, this.carouselBarClicked = function (a) {
                        var b = c(".html5gallery-thumbs-" + this.id, this.$gallery);
                        a.pageY > c(".html5gallery-car-slider-" + this.id, this.$gallery).offset().top ? (a = -1 * parseInt(b.css("margin-top")) + this.options.thumbShowNum * (this.options.thumbheight + this.options.thumbgap), a >= this.options.thumbTotalHeight - this.options.thumbMaskHeight &&
                            (a = this.options.thumbTotalHeight - this.options.thumbMaskHeight)) : (a = -1 * parseInt(b.css("margin-top")) - this.options.thumbShowNum * (this.options.thumbheight + this.options.thumbgap), 0 > a && (a = 0));
                        b.stop(!0).animate({
                            marginTop: -a
                        }, 500);
                        this.updateCarouseButtons(-a);
                        a = a * (this.options.carouselSliderMax - this.options.carouselSliderMin) / (this.elemArray.length * (this.options.thumbheight + this.options.thumbgap) - this.options.thumbMaskHeight);
                        a < this.options.carouselSliderMin && (a = this.options.carouselSliderMin);
                        a > this.options.carouselSliderMax &&
                            (a = this.options.carouselSliderMax);
                        c(".html5gallery-car-slider-" + this.id, this.$gallery).stop(!0).animate({
                            top: a
                        }, 500)
                    }, this.carouselSliderDrag = function (a, b) {
                        var d = b.offsetY - c(".html5gallery-car-slider-bar-" + this.id, this.$gallery).offset().top;
                        d < this.options.carouselSliderMin && (d = this.options.carouselSliderMin);
                        d > this.options.carouselSliderMax && (d = this.options.carouselSliderMax);
                        c(".html5gallery-car-slider-" + this.id, this.$gallery).css({
                            top: d
                        });
                        var e = this.elemArray.length * (this.options.thumbheight +
                            this.options.thumbgap) - this.options.thumbMaskHeight,
                            e = e * d / (this.options.carouselSliderMax - this.options.carouselSliderMin),
                            e = Math.round(e / (this.options.thumbheight + this.options.thumbgap)),
                            e = -1 * e * (this.options.thumbheight + this.options.thumbgap);
                        c(".html5gallery-thumbs-" + this.id, this.$gallery).stop(!0).animate({
                            marginTop: e
                        }, 300)
                    }, this.carouselPrev = function () {
                        var a = c(".html5gallery-thumbs-" + this.id, this.$gallery);
                        if (0 != parseInt(a.css("margin-top"))) {
                            var b = -1 * parseInt(a.css("margin-top")) - this.options.thumbShowNum *
                                (this.options.thumbheight + this.options.thumbgap);
                            0 > b && (b = 0);
                            a.animate({
                                marginTop: -b
                            }, 500, this.options.carouseleasing);
                            this.updateCarouseButtons(-b)
                        }
                    }, this.carouselNext = function () {
                        var a = c(".html5gallery-thumbs-" + this.id, this.$gallery);
                        if (parseInt(a.css("margin-top")) != -(this.options.thumbTotalHeight - this.options.thumbMaskHeight)) {
                            var b = -1 * parseInt(a.css("margin-top")) + this.options.thumbShowNum * (this.options.thumbheight + this.options.thumbgap);
                            b >= this.options.thumbTotalHeight - this.options.thumbMaskHeight &&
                                (b = this.options.thumbTotalHeight - this.options.thumbMaskHeight);
                            a.animate({
                                marginTop: -b
                            }, 500, this.options.carouseleasing);
                            this.updateCarouseButtons(-b)
                        }
                    }, this.updateCarouseButtons = function (a) {
                        var b = c(".html5gallery-car-left-" + this.id, this.$gallery),
                            d = c(".html5gallery-car-right-" + this.id, this.$gallery),
                            e = -1 * (this.options.thumbTotalHeight - this.options.thumbMaskHeight);
                        0 == a ? (b.css({
                            "background-position": "-64px 0px",
                            cursor: ""
                        }), b.data("disabled", !0)) : b.data("disabled") && (b.css({
                            "background-position": "0px 0px",
                            cursor: "pointer"
                        }), b.data("disabled", !1));
                        a == e ? (d.css({
                            "background-position": "-64px 0px",
                            cursor: ""
                        }), d.data("disabled", !0)) : d.data("disabled") && (d.css({
                            "background-position": "0px 0px",
                            cursor: "pointer"
                        }), d.data("disabled", !1))
                    }) : b += " .html5gallery-car-" + this.id + " { display:none; }";
                b += ".html5gallery-container-" + this.id + " div {box-sizing:content-box;}";
                c("head").append("<style type='text/css' data-creator='html5gallery'>" + b + "</style>")
            },
            resizeImageToolbox: function () {
                if ("center" != this.options.imagetoolboxstyle) {
                    var a =
                        Math.round(("bottom" == this.options.headerpos ? 0 : this.options.headerHeight) + this.options.height / 2 - 24),
                        d = a + Math.round(this.options.height / 2) - 32,
                        b = this.options.width - 54,
                        e = this.options.showfullscreenbutton ? b - 48 : b;
                    c(".html5gallery-play-" + this.id).css({
                        top: d + "px",
                        left: e + "px"
                    });
                    c(".html5gallery-pause-" + this.id).css({
                        top: d + "px",
                        left: e + "px"
                    });
                    c(".html5gallery-left-" + this.id).css({
                        top: a + "px"
                    });
                    c(".html5gallery-right-" + this.id).css({
                        top: a + "px",
                        left: b + "px"
                    });
                    c(".html5gallery-lightbox-" + this.id).css({
                        top: d + "px",
                        left: b + "px"
                    })
                }
            },
            createImageToolbox: function () {
                1 >= this.elemArray.length && (this.options.showplaybutton = this.options.showprevbutton = this.options.shownextbutton = !1);
                if ("never" != this.options.showimagetoolbox) {
                    var a;
                    if ("center" == this.options.imagetoolboxstyle) a = " .html5gallery-toolbox-" + this.id + " {display:" + ("show" == this.options.imagetoolboxmode ? "block" : "none") + "; overflow:hidden; position:relative; margin:0px auto; text-align:center; height:40px;}", a += " .html5gallery-toolbox-bg-" + this.id + " {display:block; left:0px; top:0px; width:100%; height:100%; position:absolute; filter:alpha(opacity=60); opacity:0.6; background-color:#222222; }",
                    a += " .html5gallery-toolbox-buttons-" + this.id + " {display:block; margin:0px auto; height:100%;}", a += " .html5gallery-play-" + this.id + " { position:relative; float:left; display:" + ("show" == this.options.imagetoolboxmode ? "block" : "none") + "; cursor:pointer; overflow:hidden; width:32px; height:32px; margin-left:2px; margin-right:2px; margin-top:" + Math.round(4) + "px; background:url('" + this.options.skinfolder + "play.png') no-repeat top left; } ", a += " .html5gallery-pause-" + this.id + " { position:relative; float:left; display:" +
                        ("show" == this.options.imagetoolboxmode ? "block" : "none") + "; cursor:pointer; overflow:hidden; width:32px; height:32px; margin-left:2px; margin-right:2px; margin-top:" + Math.round(4) + "px; background:url('" + this.options.skinfolder + "pause.png') no-repeat top left; } ", a += " .html5gallery-left-" + this.id + " { position:relative; float:left; display:" + ("show" == this.options.imagetoolboxmode ? "block" : "none") + "; cursor:pointer; overflow:hidden; width:32px; height:32px; margin-left:2px; margin-right:2px; margin-top:" +
                        Math.round(4) + "px; background:url('" + this.options.skinfolder + "prev.png') no-repeat top left; } ", a += " .html5gallery-right-" + this.id + " { position:relative; float:left; display:" + ("show" == this.options.imagetoolboxmode ? "block" : "none") + "; cursor:pointer; overflow:hidden; width:32px; height:32px; margin-left:2px; margin-right:2px; margin-top:" + Math.round(4) + "px; background:url('" + this.options.skinfolder + "next.png') no-repeat top left; } ", a += " .html5gallery-lightbox-" + this.id + " {position:relative; float:left; display:" +
                        ("show" == this.options.imagetoolboxmode ? "block" : "none") + "; cursor:pointer; overflow:hidden; width:32px; height:32px; margin-left:2px; margin-right:2px; margin-top:" + Math.round(4) + "px; background:url('" + this.options.skinfolder + "lightbox.png') no-repeat top left; } ";
                    else {
                        var d = Math.round(("bottom" == this.options.headerpos ? 0 : this.options.headerHeight) + this.options.height / 2 - 24),
                            b = d + Math.round(this.options.height / 2) - 32,
                            e = this.options.width - 54,
                            g = this.options.showfullscreenbutton ? e - 48 : e;
                        a = " .html5gallery-toolbox-" +
                            this.id + " {display:" + ("show" == this.options.imagetoolboxmode ? "block" : "none") + ";}";
                        a += " .html5gallery-toolbox-bg-" + this.id + " {display:none;}";
                        a += " .html5gallery-toolbox-buttons-" + this.id + " {display:block;}";
                        a += " .html5gallery-play-" + this.id + " { position:absolute; display:" + ("show" == this.options.imagetoolboxmode ? "block" : "none") + "; cursor:pointer; top:" + b + "px; left:" + g + "px; width:48px; height:48px; background:url('" + this.options.skinfolder + "side_play.png') no-repeat top left;} ";
                        a += " .html5gallery-pause-" +
                            this.id + " { position:absolute; display:" + ("show" == this.options.imagetoolboxmode ? "block" : "none") + "; cursor:pointer; top:" + b + "px; left:" + g + "px; width:48px; height:48px; background:url('" + this.options.skinfolder + "side_pause.png') no-repeat top left;} ";
                        a += " .html5gallery-left-" + this.id + " { position:absolute; display:" + ("show" == this.options.imagetoolboxmode ? "block" : "none") + "; cursor:pointer; top:" + d + "px; left:0px; width:48px; height:48px; background:url('" + this.options.skinfolder + "side_prev.png') no-repeat center center;} ";
                        a += " .html5gallery-right-" + this.id + " { position:absolute; display:" + ("show" == this.options.imagetoolboxmode ? "block" : "none") + "; cursor:pointer; top:" + d + "px; left:" + e + "px; width:48px; height:48px; background:url('" + this.options.skinfolder + "side_next.png')  no-repeat center center;} ";
                        a += " .html5gallery-lightbox-" + this.id + " {position:absolute; display:" + ("show" == this.options.imagetoolboxmode ? "block" : "none") + "; cursor:pointer; top:" + b + "px; left:" + e + "px; width:48px; height:48px; background:url('" + this.options.skinfolder +
                            "side_lightbox.png') no-repeat top left;} "
                    }
                    c(".html5gallery-play-" + this.id, this.$gallery).hover(function () {
                        c(this).css({
                            "background-position": "right top"
                        })
                    }, function () {
                        c(this).css({
                            "background-position": "left top"
                        })
                    });
                    c(".html5gallery-pause-" + this.id, this.$gallery).hover(function () {
                        c(this).css({
                            "background-position": "right top"
                        })
                    }, function () {
                        c(this).css({
                            "background-position": "left top"
                        })
                    });
                    c(".html5gallery-left-" + this.id, this.$gallery).hover(function () {
                            c(this).css({
                                "background-position": "right top"
                            })
                        },
                        function () {
                            c(this).css({
                                "background-position": "left top"
                            })
                        });
                    c(".html5gallery-right-" + this.id, this.$gallery).hover(function () {
                        c(this).css({
                            "background-position": "right top"
                        })
                    }, function () {
                        c(this).css({
                            "background-position": "left top"
                        })
                    });
                    c(".html5gallery-lightbox-" + this.id, this.$gallery).hover(function () {
                        c(this).css({
                            "background-position": "right top"
                        })
                    }, function () {
                        c(this).css({
                            "background-position": "left top"
                        })
                    });
                    c("head").append("<style type='text/css' data-creator='html5gallery'>" + a + "</style>")
                }
                this.showimagetoolbox =
                    function (a) {
                        if (this.options.showplaybutton || this.options.showprevbutton || this.options.shownextbutton || this.options.showfullscreenbutton) {
                            if ("center" == this.options.imagetoolboxstyle) {
                                var b = Math.round(("bottom" == this.options.headerpos ? 0 : this.options.headerHeight) + this.options.height / 2);
                                if (6 == a || 7 == a || 8 == a || 9 == a || 10 == a) b += 45;
                                c(".html5gallery-toolbox-" + this.id, this.$gallery).css({
                                    top: b
                                });
                                b = 0;
                                this.options.showplaybutton && 1 == a ? (b += 36, this.isPaused ? (c(".html5gallery-play-" + this.id, this.$gallery).show(),
                                    c(".html5gallery-pause-" + this.id, this.$gallery).hide()) : (c(".html5gallery-play-" + this.id, this.$gallery).hide(), c(".html5gallery-pause-" + this.id, this.$gallery).show())) : (c(".html5gallery-play-" + this.id, this.$gallery).hide(), c(".html5gallery-pause-" + this.id, this.$gallery).hide());
                                this.options.showprevbutton ? (b += 36, c(".html5gallery-left-" + this.id, this.$gallery).show()) : c(".html5gallery-left-" + this.id, this.$gallery).hide();
                                this.options.shownextbutton ? (b += 36, c(".html5gallery-right-" + this.id, this.$gallery).show()) :
                                    c(".html5gallery-right-" + this.id, this.$gallery).hide();
                                this.options.showfullscreenbutton && 1 == a ? (b += 36, c(".html5gallery-lightbox-" + this.id, this.$gallery).show()) : c(".html5gallery-lightbox-" + this.id, this.$gallery).hide();
                                c(".html5gallery-toolbox-" + this.id, this.$gallery).css({
                                    width: b + 16
                                });
                                c(".html5gallery-toolbox-buttons-" + this.id, this.$gallery).css({
                                    width: b
                                })
                            } else this.options.showplaybutton && 1 == a ? this.isPaused ? (c(".html5gallery-play-" + this.id, this.$gallery).show(), c(".html5gallery-pause-" + this.id,
                                this.$gallery).hide()) : (c(".html5gallery-play-" + this.id, this.$gallery).hide(), c(".html5gallery-pause-" + this.id, this.$gallery).show()) : (c(".html5gallery-play-" + this.id, this.$gallery).hide(), c(".html5gallery-pause-" + this.id, this.$gallery).hide()), this.options.showprevbutton ? c(".html5gallery-left-" + this.id, this.$gallery).show() : c(".html5gallery-left-" + this.id, this.$gallery).hide(), this.options.shownextbutton ? c(".html5gallery-right-" + this.id, this.$gallery).show() : c(".html5gallery-right-" + this.id, this.$gallery).hide(),
                            this.options.showfullscreenbutton && 1 == a ? c(".html5gallery-lightbox-" + this.id, this.$gallery).show() : c(".html5gallery-lightbox-" + this.id, this.$gallery).hide();
                            this.options.isIE678 ? c(".html5gallery-toolbox-" + this.id, this.$gallery).show() : c(".html5gallery-toolbox-" + this.id, this.$gallery).fadeIn()
                        }
                };
                this.hideimagetoolbox = function () {
                    this.options.isIE678 ? c(".html5gallery-toolbox-" + this.id, this.$gallery).hide() : c(".html5gallery-toolbox-" + this.id, this.$gallery).fadeOut()
                }
            },
            resizeStyleDefault: function () {
                if (this.container.parent() &&
                    this.container.parent().width()) {
                    this.options.containerWidth = this.container.parent().width();
                    this.options.totalWidth = this.options.containerWidth;
                    this.options.width = this.options.totalWidth - 2 * this.options.padding;
                    this.options.showcarousel && (this.options.carouselHeight = this.options.thumbheight + 2 * this.options.thumbmargin, this.options.carouselmultirows && (this.options.carouselHeight = Math.ceil(this.elemArray.length / Math.floor(this.options.width / (this.options.thumbwidth + this.options.thumbgap))) * (this.options.thumbheight +
                        this.options.thumbrowgap)));
                    this.options.responsivefullscreen && 0 < this.container.parent().height() ? (this.options.containerHeight = this.container.parent().height(), this.options.totalHeight = this.options.containerHeight, this.options.height = this.options.totalHeight - (this.options.headerHeight + 2 * this.options.padding), 0 < this.options.carouselHeight + this.options.carouselmargin && (this.options.height -= this.options.carouselHeight + this.options.carouselmargin)) : (this.options.height = Math.round(this.options.width *
                        this.options.originalHeight / this.options.originalWidth), this.options.totalHeight = this.options.height + this.options.carouselHeight + this.options.carouselmargin + this.options.headerHeight + 2 * this.options.padding, this.options.containerHeight = this.options.totalHeight);
                    this.container.css({
                        width: this.options.containerWidth,
                        height: this.options.containerHeight
                    });
                    this.options.boxWidth = this.options.width;
                    this.options.boxHeight = this.options.height + this.options.headerHeight;
                    this.options.showcarousel && (this.options.carouselWidth =
                        this.options.width, this.options.carouselLeft = this.options.padding, this.options.carouselTop = this.options.padding + this.options.boxHeight + this.options.carouselmargin);
                    c(".html5gallery-container-" + this.id).css({
                        width: this.options.totalWidth + "px",
                        height: this.options.totalHeight + "px"
                    });
                    c(".html5gallery-box-" + this.id).css({
                        width: this.options.boxWidth + "px",
                        height: this.options.boxHeight + "px"
                    });
                    var a = this.elemArray[this.curElem][9];
                    if (1 == a || this.showingPoster) {
                        var d = this.elemArray[this.curElem][10],
                            a = this.elemArray[this.curElem][11],
                            b;
                        this.isFullscreen ? (b = Math.min(this.fullscreenWidth / d, this.fullscreenHeight / a), b = 1 < b ? 1 : b) : b = "fill" == this.options.resizemode ? Math.max(this.options.width / d, this.options.height / a) : Math.min(this.options.width / d, this.options.height / a);
                        var d = Math.round(b * d),
                            e = Math.round(b * a),
                            a = this.isFullscreen ? d : this.options.width;
                        b = this.isFullscreen ? e : this.options.height;
                        var g = Math.round(a / 2 - d / 2),
                            q = Math.round(b / 2 - e / 2);
                        this.isFullscreen && this.adjustFullscreen(a, b, !0);
                        c(".html5gallery-elem-" + this.id).css({
                            width: a + "px",
                            height: b + "px"
                        });
                        c(".html5gallery-elem-img-" + this.id).css({
                            width: a + "px",
                            height: b + "px"
                        });
                        c(".html5gallery-elem-image-" + this.id).css({
                            width: d + "px",
                            height: e + "px",
                            top: q + "px",
                            left: g + "px"
                        })
                    } else if (5 == a || 6 == a || 7 == a || 8 == a || 9 == a || 10 == a) a = this.elemArray[this.curElem][10], d = this.elemArray[this.curElem][11], this.isFullscreen ? (b = Math.min(this.fullscreenWidth / a, this.fullscreenHeight / d), b = 1 < b ? 1 : b, a = Math.round(b * a), b = Math.round(b * d), this.adjustFullscreen(a, b, !0)) : (a = this.options.width, b = this.options.height), c(".html5gallery-elem-" +
                        this.id).css({
                        width: a + "px",
                        height: b + "px"
                    }), c(".html5gallery-elem-video-" + this.id).css({
                        width: a + "px",
                        height: b + "px"
                    }), c(".html5gallery-elem-video-container-" + this.id).css({
                        width: a + "px",
                        height: b + "px"
                    }), d = this.options.isIPhone ? b - 48 : b, c(".html5gallery-elem-video-container-" + this.id).find("video").css({
                        width: a + "px",
                        height: d + "px"
                    }), c("#html5gallery-elem-video-" + this.id).css({
                        width: a + "px",
                        height: b + "px"
                    });
                    d = a = 0;
                    "bottom" == this.options.headerpos && (a = this.options.titleoverlay ? this.options.height - this.options.titleheight :
                        this.options.height, d = this.options.titleoverlay ? this.options.height : this.options.height + this.options.titleheight);
                    c(".html5gallery-title-" + this.id).css({
                        width: this.options.boxWidth + "px"
                    });
                    this.options.titleoverlay || c(".html5gallery-title-" + this.id).css({
                        top: a + "px"
                    });
                    c(".html5gallery-viral-" + this.id).css({
                        top: d + "px"
                    });
                    c(".html5gallery-timer-" + this.id).css({
                        top: String(this.options.elemTop + this.options.height - 2) + "px"
                    });
                    this.options.showcarousel && (c(".html5gallery-car-" + this.id).css({
                            width: this.options.width +
                                "px",
                            top: this.options.carouselTop + "px"
                        }), a = 4, this.options.slideshadow && (a += 12), c(".html5gallery-car-list-" + this.id).css({
                            width: String(this.options.width - a - 4) + "px"
                        }), d = 0, this.options.carouselNavButton && (d = 72), this.options.thumbShowNum = Math.floor((this.options.width - a - 4 - d) / (this.options.thumbwidth + this.options.thumbgap)), this.options.thumbMaskWidth = this.options.thumbShowNum * this.options.thumbwidth + this.options.thumbShowNum * this.options.thumbgap, this.options.thumbTotalWidth = this.elemArray.length * this.options.thumbwidth +
                        (this.elemArray.length - 1) * this.options.thumbgap, d = 0, this.options.carouselmultirows ? (d = Math.floor(this.options.width / (this.options.thumbwidth + this.options.thumbgap)), d = (this.options.width - d * this.options.thumbwidth - (d - 1) * this.options.thumbgap) / 2, c(".html5gallery-thumbs-" + this.id).css({
                            "margin-left": d + "px",
                            width: this.options.width + "px"
                        })) : (this.options.thumbMaskWidth > this.options.thumbTotalWidth && (d = this.options.thumbMaskWidth / 2 - this.options.thumbTotalWidth / 2 - this.options.thumbgap / 2), c(".html5gallery-thumbs-" +
                            this.id).css({
                            "margin-left": d + "px",
                            width: String(this.elemArray.length * (this.options.thumbwidth + this.options.thumbgap)) + "px"
                        })), a = Math.round((this.options.width - a - 4) / 2 - this.options.thumbMaskWidth / 2), c(".html5gallery-car-mask-" + this.id).css({
                            left: a + "px",
                            width: this.options.thumbMaskWidth + "px"
                        }), this.carouselHighlight(this.curElem, !0))
                }
            },
            createStyleDefault: function () {
                this.options.thumbimagewidth = this.options.thumbwidth - 2 * this.options.thumbimageborder;
                this.options.thumbimageheight = this.options.thumbheight -
                    2 * this.options.thumbimageborder;
                this.options.thumbshowtitle && (this.options.thumbheight += this.options.thumbtitleheight);
                this.options.showtitle || (this.options.titleheight = 0);
                if (!this.options.showsocialmedia || !this.options.showfacebooklike && !this.options.showtwitter && !this.options.showgoogleplus) this.options.socialheight = 0;
                this.options.headerHeight = this.options.titleoverlay ? this.options.socialheight : this.options.titleheight + this.options.socialheight;
                this.options.boxWidth = this.options.width;
                this.options.boxHeight =
                    this.options.height + this.options.headerHeight;
                this.options.boxLeft = this.options.padding;
                this.options.boxTop = this.options.padding;
                this.options.slideshadow && (this.options.boxLeft -= 4, this.options.boxTop -= 4);
                this.options.showcarousel ? (this.options.carouselWidth = this.options.width, this.options.carouselHeight = this.options.thumbheight + 2 * this.options.thumbmargin, this.options.carouselLeft = this.options.padding, this.options.carouselTop = this.options.padding + this.options.boxHeight + this.options.carouselmargin,
                    this.options.carouselmultirows && (this.options.carouselHeight = Math.ceil(this.options.width / (this.options.thumbwidth + this.options.thumbgap)) * (this.options.thumbheight + this.options.thumbrowgap))) : (this.options.carouselWidth = 0, this.options.carouselHeight = 0, this.options.carouselLeft = 0, this.options.carouselTop = 0, this.options.carouselmargin = 0);
                this.options.totalWidth = this.options.width + 2 * this.options.padding;
                this.options.totalHeight = this.options.height + this.options.carouselHeight + this.options.carouselmargin +
                    this.options.headerHeight + 2 * this.options.padding;
                this.options.containerWidth = this.options.totalWidth;
                this.options.containerHeight = this.options.totalHeight;
                this.options.responsive ? (this.options.originalWidth = this.options.width, this.options.originalHeight = this.options.height, this.container.css({
                    "max-width": "100%"
                })) : this.container.css({
                    width: this.options.containerWidth,
                    height: this.options.containerHeight
                });
                var a = 0,
                    d = 0;
                this.options.elemTop = 0;
                "top" == this.options.headerpos ? (d = 0, a = this.options.socialheight,
                    this.options.elemTop = this.options.headerHeight) : "bottom" == this.options.headerpos && (this.options.elemTop = 0, a = this.options.titleoverlay ? this.options.height - this.options.titleheight : this.options.height, d = this.options.titleoverlay ? this.options.height : this.options.height + this.options.titleheight);
                var b = " .html5gallery-container-" + this.id + " { display:block; position:absolute; left:0px; top:0px; width:" + this.options.totalWidth + "px; height:" + this.options.totalHeight + "px; background:url('" + this.options.skinfolder +
                    this.options.bgimage + "') center top; background-color:" + this.options.bgcolor + ";}";
                this.options.galleryshadow && (b += " .html5gallery-container-" + this.id + " { -moz-box-shadow: 0px 2px 5px #aaa; -webkit-box-shadow: 0px 2px 5px #aaa; box-shadow: 0px 2px 5px #aaa;}");
                var b = b + (" .html5gallery-box-" + this.id + " {display:block; position:absolute; text-align:center; left:" + this.options.boxLeft + "px; top:" + this.options.boxTop + "px; width:" + this.options.boxWidth + "px; height:" + this.options.boxHeight + "px;}"),
                    e = Math.round(this.options.socialheight /
                        2 - 12),
                    b = b + (" .html5gallery-title-text-" + this.id + " " + this.options.titlecss + " .html5gallery-title-text-" + this.id + " " + this.options.titlecsslink + " .html5gallery-error-" + this.id + " " + this.options.errorcss),
                    b = b + (" .html5gallery-description-text-" + this.id + " " + this.options.descriptioncss + " .html5gallery-description-text-" + this.id + " " + this.options.descriptioncsslink),
                    b = b + (" .html5gallery-fullscreen-title-" + this.id + "" + this.options.titlefullscreencss + " .html5gallery-fullscreen-title-" + this.id + "" + this.options.titlefullscreencsslink),
                    b = b + (" .html5gallery-viral-" + this.id + " {display:block; overflow:hidden; position:absolute; text-align:left; top:" + d + "px; left:0px; width:" + this.options.boxWidth + "px; height:" + this.options.socialheight + "px; padding-top:" + e + "px;}"),
                    b = b + (" .html5gallery-title-" + this.id + " {display:" + (this.options.titleoverlay && this.options.titleautohide ? "none" : "block") + "; overflow:hidden; position:absolute; left:0px; width:" + this.options.boxWidth + "px; "),
                    b = this.options.titleoverlay ? "top" == this.options.headerpos ? b + "top:0px; height:auto; }" :
                        b + "bottom:0px; height:auto; }" : b + ("top:" + a + "px; height:" + this.options.titleheight + "px; }"),
                    b = b + (" .html5gallery-timer-" + this.id + " {display:block; position:absolute; top:" + String(this.options.elemTop + this.options.height - 2) + "px; left:0px; width:0px; height:2px; background-color:#ccc; filter:alpha(opacity=60); opacity:0.6; }"),
                    b = b + (" .html5gallery-elem-" + this.id + " {display:block; overflow:hidden; position:absolute; top:" + this.options.elemTop + "px; left:0px; width:" + this.options.width + "px; height:" + this.options.height +
                        "px;}");
                this.options.isIE7 || this.options.isIE6 ? (b += " .html5gallery-loading-" + this.id + " {display:none; }", b += " .html5gallery-loading-center-" + this.id + " {display:none; }") : (b += " .html5gallery-loading-" + this.id + " {display:block; position:absolute; top:4px; right:4px; width:100%; height:100%; background:url('" + this.options.skinfolder + "loading.gif') no-repeat top right;}", b += " .html5gallery-loading-center-" + this.id + " {display:block; position:absolute; top:0px; left:0px; width:100%; height:100%; background:url('" +
                    this.options.skinfolder + "loading_center.gif') no-repeat center center;}");
                0 < this.options.borderradius && (b += " .html5gallery-elem-" + this.id + " {overflow:hidden; border-radius:" + this.options.borderradius + "px; -moz-border-radius:" + this.options.borderradius + "px; -webkit-border-radius:" + this.options.borderradius + "px;}");
                this.options.slideshadow && (b += " .html5gallery-title-" + this.id + " { padding:4px;}", b += " .html5gallery-timer-" + this.id + " { margin:4px;}", b += " .html5gallery-elem-" + this.id + " { overflow:hidden; padding:4px; -moz-box-shadow: 0px 2px 5px #aaa; -webkit-box-shadow: 0px 2px 5px #aaa; box-shadow: 0px 2px 5px #aaa;}");
                this.options.showcarousel && this.options.carouselmultirows ? (b += " .html5gallery-car-" + this.id + " { position:absolute; display:block; overflow:hidden; left:" + this.options.carouselLeft + "px; top:" + this.options.carouselTop + "px; width:" + this.options.width + "px;", b = this.options.carouselbgtransparent ? b + "background-color:transparent;" : b + ("border-top:1px solid " + this.options.carouseltopborder + ";border-bottom:1px solid " + this.options.carouselbottomborder + ";background-color: " + this.options.carouselbgcolorend + "; background: " +
                        this.options.carouselbgcolorend + " -webkit-gradient(linear, left top, left bottom, from(" + this.options.carouselbgcolorstart + "), to(" + this.options.carouselbgcolorend + ")) no-repeat; background: " + this.options.carouselbgcolorend + " -moz-linear-gradient(top, " + this.options.carouselbgcolorstart + ", " + this.options.carouselbgcolorend + ") no-repeat; filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=" + this.options.carouselbgcolorstart + ", endColorstr=" + this.options.carouselbgcolorend + ") no-repeat; -ms-filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr=" +
                        this.options.carouselbgcolorstart + ", endColorstr=" + this.options.carouselbgcolorend + ")' no-repeat;"), this.options.carouselbgimage && (b += "background:url('" + this.options.skinfolder + this.options.carouselbgimage + "') center top;"), a = Math.floor(this.options.width / (this.options.thumbwidth + this.options.thumbgap)), d = (this.options.width - a * this.options.thumbwidth - (a - 1) * this.options.thumbgap) / 2, b = b + "}" + (".html5gallery-thumbs-" + this.id + " { position:relative; display:block; margin-left:" + d + "px; width:" + this.options.width +
                        "px; top:0px; }"), b += " .html5gallery-tn-" + this.id + " { display:block; float:left; margin-left:0px; margin-right:" + this.options.thumbgap + "px; margin-bottom:" + this.options.thumbrowgap + "px; text-align:center; cursor:pointer; width:" + this.options.thumbwidth + "px;height:" + this.options.thumbheight + "px;overflow:hidden;}", this.options.thumbshadow && (b += " .html5gallery-tn-" + this.id + " { -moz-box-shadow: 0px 2px 5px #aaa; -webkit-box-shadow: 0px 2px 5px #aaa; box-shadow: 0px 2px 5px #aaa;}"), b += " .html5gallery-tn-selected-" +
                    this.id + " { display:block; float:left; margin-left:0px; margin-right:" + this.options.thumbgap + "px; margin-bottom:" + this.options.thumbrowgap + "px; text-align:center; cursor:pointer; width:" + this.options.thumbwidth + "px;height:" + this.options.thumbheight + "px;overflow:hidden;}", this.options.thumbshadow && (b += " .html5gallery-tn-selected-" + this.id + " { -moz-box-shadow: 0px 2px 5px #aaa; -webkit-box-shadow: 0px 2px 5px #aaa; box-shadow: 0px 2px 5px #aaa;}"), b += " .html5gallery-tn-" + this.id + " {background-color:" +
                    this.options.thumbimagebordercolor + ";} .html5gallery-tn-" + this.id + " { filter:alpha(opacity=" + Math.round(100 * this.options.thumbopacity) + "); opacity:" + this.options.thumbopacity + "; }  .html5gallery-tn-selected-" + this.id + " { filter:alpha(opacity=100); opacity:1; } ", b += " .html5gallery-tn-img-" + this.id + " {display:block; overflow:hidden; width:" + String(this.options.thumbimagewidth + 2 * this.options.thumbimageborder) + "px;height:" + String(this.options.thumbimageheight + 2 * this.options.thumbimageborder) + "px;}",
                    this.options.thumbunselectedimagebordercolor && (b += " .html5gallery-tn-selected-" + this.id + " {background-color:" + this.options.thumbunselectedimagebordercolor + ";}"), this.options.thumbshowtitle ? (b += " .html5gallery-tn-title-" + this.id + " {display:block; overflow:hidden; float:top; height:" + this.options.thumbtitleheight + "px;width:" + String(this.options.thumbwidth - 2) + "px;line-height:" + this.options.thumbtitleheight + "px;}", b += " .html5gallery-tn-title-" + this.id + this.options.thumbtitlecss) : b += " .html5gallery-tn-title-" +
                    this.id + " {display:none;}", this.carouselHighlight = function () {}) : this.options.showcarousel ? (b += " .html5gallery-car-" + this.id + " { position:absolute; display:block; overflow:hidden; left:" + this.options.carouselLeft + "px; top:" + this.options.carouselTop + "px; width:" + this.options.width + "px; height:" + this.options.carouselHeight + "px;", b = this.options.carouselbgtransparent ? b + "background-color:transparent;" : b + ("border-top:1px solid " + this.options.carouseltopborder + ";border-bottom:1px solid " + this.options.carouselbottomborder +
                        ";background-color: " + this.options.carouselbgcolorend + "; background: " + this.options.carouselbgcolorend + " -webkit-gradient(linear, left top, left bottom, from(" + this.options.carouselbgcolorstart + "), to(" + this.options.carouselbgcolorend + ")) no-repeat; background: " + this.options.carouselbgcolorend + " -moz-linear-gradient(top, " + this.options.carouselbgcolorstart + ", " + this.options.carouselbgcolorend + ") no-repeat; filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=" + this.options.carouselbgcolorstart +
                        ", endColorstr=" + this.options.carouselbgcolorend + ") no-repeat; -ms-filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr=" + this.options.carouselbgcolorstart + ", endColorstr=" + this.options.carouselbgcolorend + ")' no-repeat;"), this.options.carouselbgimage && (b += "background:url('" + this.options.skinfolder + this.options.carouselbgimage + "') center top;"), b += "}", a = 4, this.options.slideshadow && (a += 12), b += " .html5gallery-car-list-" + this.id + " { position:absolute; display:block; overflow:hidden; left:" +
                    a + "px; width:" + String(this.options.width - a - 4) + "px; top:0px; height:" + this.options.carouselHeight + "px; }", d = 0, this.options.carouselNavButton = !1, Math.floor((this.options.width - a - 4) / (this.options.thumbwidth + this.options.thumbgap)) < this.elemArray.length && (this.options.carouselNavButton = !0), this.options.carouselNavButton && (b += " .html5gallery-car-left-" + this.id + " { position:absolute; display:block; overflow:hidden; width:32px; height:32px; left:0px; top:" + String(this.options.carouselHeight / 2 - 16) + "px; background:url('" +
                        this.options.skinfolder + "carousel_left.png') no-repeat 0px 0px;}  .html5gallery-car-right-" + this.id + " { position:absolute; display:block; overflow:hidden; width:32px; height:32px; right:0px; top:" + String(this.options.carouselHeight / 2 - 16) + "px; background:url('" + this.options.skinfolder + "carousel_right.png') no-repeat 0px 0px;} ", d = 72), this.options.thumbShowNum = Math.floor((this.options.width - a - 4 - d) / (this.options.thumbwidth + this.options.thumbgap)), this.options.thumbMaskWidth = this.options.thumbShowNum *
                    this.options.thumbwidth + this.options.thumbShowNum * this.options.thumbgap, this.options.thumbTotalWidth = this.elemArray.length * this.options.thumbwidth + (this.elemArray.length - 1) * this.options.thumbgap, d = 0, this.options.thumbMaskWidth > this.options.thumbTotalWidth && (d = this.options.thumbMaskWidth / 2 - this.options.thumbTotalWidth / 2 - this.options.thumbgap / 2), b += ".html5gallery-thumbs-" + this.id + " { position:relative; display:block; margin-left:" + d + "px; width:" + String(this.elemArray.length * (this.options.thumbwidth +
                        this.options.thumbgap)) + "px; top:" + Math.round(this.options.carouselHeight / 2 - this.options.thumbheight / 2) + "px; }", a = Math.round((this.options.width - a - 4) / 2 - this.options.thumbMaskWidth / 2), b += " .html5gallery-car-mask-" + this.id + " { position:absolute; display:block; text-align:left; overflow:hidden; left:" + a + "px; width:" + this.options.thumbMaskWidth + "px; top:0px; height:" + this.options.carouselHeight + "px;} ", b += " .html5gallery-tn-" + this.id + " { display:block; float:left; margin-left:" + Math.round(this.options.thumbgap /
                        2) + "px; margin-right:" + Math.round(this.options.thumbgap / 2) + "px; text-align:center; cursor:pointer; width:" + this.options.thumbwidth + "px;height:" + this.options.thumbheight + "px;overflow:hidden;}", this.options.thumbshadow && (b += " .html5gallery-tn-" + this.id + " { -moz-box-shadow: 0px 2px 5px #aaa; -webkit-box-shadow: 0px 2px 5px #aaa; box-shadow: 0px 2px 5px #aaa;}"), b += " .html5gallery-tn-selected-" + this.id + " { display:block; float:left; margin-left:" + Math.round(this.options.thumbgap / 2) + "px; margin-right:" +
                    Math.round(this.options.thumbgap / 2) + "px;text-align:center; cursor:pointer; width:" + this.options.thumbwidth + "px;height:" + this.options.thumbheight + "px;overflow:hidden;}", this.options.thumbshadow && (b += " .html5gallery-tn-selected-" + this.id + " { -moz-box-shadow: 0px 2px 5px #aaa; -webkit-box-shadow: 0px 2px 5px #aaa; box-shadow: 0px 2px 5px #aaa;}"), b += " .html5gallery-tn-" + this.id + " {background-color:" + this.options.thumbimagebordercolor + ";} .html5gallery-tn-" + this.id + " { filter:alpha(opacity=" + Math.round(100 *
                        this.options.thumbopacity) + "); opacity:" + this.options.thumbopacity + "; }  .html5gallery-tn-selected-" + this.id + " { filter:alpha(opacity=100); opacity:1; } ", b += " .html5gallery-tn-img-" + this.id + " {display:block; overflow:hidden; width:" + String(this.options.thumbimagewidth + 2 * this.options.thumbimageborder) + "px;height:" + String(this.options.thumbimageheight + 2 * this.options.thumbimageborder) + "px;}", this.options.thumbunselectedimagebordercolor && (b += " .html5gallery-tn-selected-" + this.id + " {background-color:" +
                        this.options.thumbunselectedimagebordercolor + ";}"), this.options.thumbshowtitle ? (b += " .html5gallery-tn-title-" + this.id + " {display:block; overflow:hidden; float:top; height:" + this.options.thumbtitleheight + "px;width:" + String(this.options.thumbwidth - 2) + "px;line-height:" + this.options.thumbtitleheight + "px;}", b += " .html5gallery-tn-title-" + this.id + this.options.thumbtitlecss) : b += " .html5gallery-tn-title-" + this.id + " {display:none;}", this.carouselHighlight = function (a, b) {
                        c("#html5gallery-tn-" + this.id + "-" + a, this.$gallery).removeClass("html5gallery-tn-" +
                            this.id).addClass("html5gallery-tn-selected-" + this.id);
                        if (this.options.thumbShowNum >= this.elemArray.length) c(".html5gallery-car-left-" + this.id, this.$gallery).css({
                            "background-position": "-64px 0px",
                            cursor: ""
                        }), c(".html5gallery-car-left-" + this.id, this.$gallery).data("disabled", !0), c(".html5gallery-car-right-" + this.id, this.$gallery).css({
                            "background-position": "-64px 0px",
                            cursor: ""
                        }), c(".html5gallery-car-right-" + this.id, this.$gallery).data("disabled", !0);
                        else {
                            var d = Math.floor(a / this.options.thumbShowNum) *
                                this.options.thumbShowNum * (this.options.thumbwidth + this.options.thumbgap);
                            d >= this.options.thumbTotalWidth - this.options.thumbMaskWidth + this.options.thumbgap && (d = this.options.thumbTotalWidth - this.options.thumbMaskWidth + this.options.thumbgap);
                            d = -d;
                            b ? c(".html5gallery-thumbs-" + this.id, this.$gallery).css({
                                marginLeft: d
                            }) : c(".html5gallery-thumbs-" + this.id, this.$gallery).animate({
                                marginLeft: d
                            }, 500);
                            this.updateCarouseButtons(d)
                        }
                    }, this.carouselPrev = function () {
                        var a = c(".html5gallery-thumbs-" + this.id, this.$gallery);
                        if (0 != parseInt(a.css("margin-left"))) {
                            var b = -1 * parseInt(a.css("margin-left")) - this.options.thumbShowNum * (this.options.thumbwidth + this.options.thumbgap);
                            0 > b && (b = 0);
                            a.animate({
                                marginLeft: -b
                            }, 500, this.options.carouseleasing);
                            this.updateCarouseButtons(-b)
                        }
                    }, this.carouselNext = function () {
                        var a = c(".html5gallery-thumbs-" + this.id, this.$gallery);
                        if (parseInt(a.css("margin-left")) != -(this.options.thumbTotalWidth - this.options.thumbMaskWidth + this.options.thumbgap)) {
                            var b = -1 * parseInt(a.css("margin-left")) + this.options.thumbShowNum *
                                (this.options.thumbwidth + this.options.thumbgap);
                            b >= this.options.thumbTotalWidth - this.options.thumbMaskWidth + this.options.thumbgap && (b = this.options.thumbTotalWidth - this.options.thumbMaskWidth + this.options.thumbgap);
                            a.animate({
                                marginLeft: -b
                            }, 500, this.options.carouseleasing);
                            this.updateCarouseButtons(-b)
                        }
                    }, this.updateCarouseButtons = function (a) {
                        var b = c(".html5gallery-car-left-" + this.id, this.$gallery),
                            d = c(".html5gallery-car-right-" + this.id, this.$gallery),
                            e = -1 * (this.options.thumbTotalWidth - this.options.thumbMaskWidth +
                                this.options.thumbgap);
                        0 == a ? (b.css({
                            "background-position": "-64px 0px",
                            cursor: ""
                        }), b.data("disabled", !0)) : b.data("disabled") && (b.css({
                            "background-position": "0px 0px",
                            cursor: "pointer"
                        }), b.data("disabled", !1));
                        a == e ? (d.css({
                            "background-position": "-64px 0px",
                            cursor: ""
                        }), d.data("disabled", !0)) : d.data("disabled") && (d.css({
                            "background-position": "0px 0px",
                            cursor: "pointer"
                        }), d.data("disabled", !1))
                    }) : b += " .html5gallery-car-" + this.id + " { display:none; }";
                b += ".html5gallery-container-" + this.id + " div {box-sizing:content-box;}";
                c("head").append("<style type='text/css' data-creator='html5gallery'>" + b + "</style>")
            },
            loadCarousel: function () {
                var a = this,
                    d = c(".html5gallery-thumbs-" + this.id, this.$gallery);
                d.empty();
                for (var b = 0; b < this.elemArray.length; b++) {
                    var e = c("<div id='html5gallery-tn-" + this.id + "-" + b + "' class='html5gallery-tn-" + this.id + "' data-index=" + b + " ></div>");
                    e.appendTo(d);
                    e.unbind("click").click(function (b) {
                        a.slideRun(c(this).data("index"), !0, !0);
                        b.preventDefault()
                    });
                    e.hover(function () {
                        a.onThumbOver();
                        c(this).removeClass("html5gallery-tn-" +
                            a.id).addClass("html5gallery-tn-selected-" + a.id)
                    }, function () {
                        c(this).data("index") !== a.curElem && c(this).removeClass("html5gallery-tn-selected-" + a.id).addClass("html5gallery-tn-" + a.id)
                    });
                    e = new Image;
                    e.data = b;
                    c(e).load(function () {
                        var b = Math.max(a.options.thumbimagewidth / this.width, a.options.thumbimageheight / this.height),
                            e = Math.round(b * this.width),
                            b = Math.round(b * this.height),
                            f = a.options.thumbshowplayonvideo && 1 != a.elemArray[this.data][9] ? "<div class='html5gallery-tn-img-play-" + a.id + "' style='display:block; overflow:hidden; position:absolute; width:" +
                                a.options.thumbimagewidth + "px;height:" + a.options.thumbimageheight + "px; top:" + a.options.thumbimageborder + "px; left:" + a.options.thumbimageborder + 'px;background:url("' + a.options.skinfolder + "playvideo.png\") no-repeat center center;'></div>" : "";
                        c("#html5gallery-tn-" + a.id + "-" + this.data, d).append("<div class='html5gallery-tn-img-" + a.id + "' style='position:relative;'><div style='display:block; overflow:hidden; position:absolute; width:" + a.options.thumbimagewidth + "px;height:" + a.options.thumbimageheight + "px; top:" +
                            a.options.thumbimageborder + "px; left:" + a.options.thumbimageborder + "px;'><img class='html5gallery-tn-image-" + a.id + "' style='border:none !important; padding:0px !important; margin:0px !important; max-width:none !important; max-height:none !important; width:" + e + "px !important; height:" + b + "px !important;' src='" + a.elemArray[this.data][1] + "' /></div>" + f + "</div><div class='html5gallery-tn-title-" + a.id + "'>" + a.elemArray[this.data][7] + (a.options.thumbshowdescription ? "<br /><span class='html5gallery-tn-description-" +
                                a.id + "'>" + a.elemArray[this.data][8] + "</span>" : "") + "</div>")
                    });
                    e.src = this.elemArray[b][1]
                }
                this.options.carouselmultirows && d.append("<div style='clear:both;'></div>")
            },
            goNormal: function () {
                clearTimeout(this.slideshowTimeout);
                c(document).unbind("keyup.html5gallery");
                c(".html5gallery-timer-" + this.id, this.$gallery).css({
                    width: 0
                });
                clearInterval(this.slideTimer);
                this.slideTimerCount = 0;
                this.isFullscreen = !1;
                var a = c(".html5gallery-elem-" + this.id, this.$fullscreen).empty().css({
                    top: this.options.elemTop
                });
                c(".html5gallery-box-" +
                    this.id, this.$gallery).prepend(a);
                this.slideRun(this.curElem);
                this.$fullscreen.remove();
                "show" == this.options.imagetoolboxmode ? this.showimagetoolbox(this.elemArray[this.curElem][9]) : this.hideimagetoolbox()
            },
            goFullscreen: function () {
                this.hideimagetoolbox();
                clearTimeout(this.slideshowTimeout);
                c(".html5gallery-fullscreen-timer-" + this.id, this.$fullscreen).css({
                    width: 0
                });
                clearInterval(this.slideTimer);
                this.slideTimerCount = 0;
                this.isFullscreen = !0;
                this.fullscreenInitial = 20;
                this.fullscreenMargin = this.options.lightboxborder;
                this.fullscreenBarH = this.options.lightboxtextheight;
                this.fullscreenOutsideMargin = this.options.lightboxmargin;
                var a = this.options.isMobile ? Math.max(c(window).width(), c(document).width()) : c(window).width(),
                    d = this.elemArray[this.curElem][10],
                    b = this.elemArray[this.curElem][11];
                this.fullscreenWidth = a - 2 * this.fullscreenMargin - 2 * this.fullscreenOutsideMargin;
                var e = window.innerHeight ? window.innerHeight : c(window).height();
                this.fullscreenHeight = e - 2 * this.fullscreenMargin - this.fullscreenBarH - 2 * this.fullscreenOutsideMargin;
                var g = Math.max(e, c(document).height()),
                    h = Math.min(this.fullscreenWidth / d, this.fullscreenHeight / b);
                1 > h && (d *= h, b *= h);
                e = c(window).scrollTop() + Math.round((e - (b + 2 * this.fullscreenMargin + this.fullscreenBarH)) / 2);
                this.$fullscreen = c("<div class='html5gallery-fullscreen-" + this.id + "' style='position:absolute;top:0px;left:0px;width:" + a + "px;height:" + g + "px;text-align:center;z-index:99999;'><div class='html5gallery-fullscreen-overlay-" + this.id + "' style='display:block;position:absolute;top:0px;left:0px;width:100%;height:100%;background-color:#000000;opacity:0.9;filter:alpha(opacity=80);'></div><div class='html5gallery-fullscreen-box-" +
                    this.id + "' style='display:block;overflow:hidden;position:relative;margin:0px auto;top:" + e + "px;width:" + this.fullscreenInitial + "px;height:" + this.fullscreenInitial + "px;background-color:" + this.options.lightboxbgcolor + ";'><div class='html5gallery-fullscreen-elem-" + this.id + "' style='display:block;position:absolute;overflow:hidden;width:" + d + "px;height:" + b + "px;left:" + this.fullscreenMargin + "px;top:" + this.fullscreenMargin + "px;'><div class='html5gallery-fullscreen-timer-" + this.id + "' style='display:block; position:absolute; top:" +
                    String(b - 4) + "px; left:0px; width:0px; height:4px; background-color:#666; filter:alpha(opacity=60); opacity:0.6;'></div></div><div class='html5gallery-fullscreen-bar-" + this.id + "' style='display:block;position:absolute;padding-top:8px;width:" + d + "px;height:" + this.fullscreenBarH + "px;left:" + this.fullscreenMargin + "px;top:" + String(b + this.fullscreenMargin) + "px;'><div class='html5gallery-fullscreen-close-" + this.id + "' style='display:block;position:relative;float:right;cursor:pointer;width:32px;height:32px;top:8px;background-image:url(\"" +
                    this.options.skinfolder + "lightbox_close.png\");'></div><div class='html5gallery-fullscreen-play-" + this.id + "' style='display:" + (this.isPaused && 1 < this.elemArray.length && 1 == this.elemArray[this.curElem][9] ? "block" : "none") + ';position:relative;float:right;cursor:pointer;width:32px;height:32px;top:8px;background-image:url("' + this.options.skinfolder + "lightbox_play.png\");'></div><div class='html5gallery-fullscreen-pause-" + this.id + "' style='display:" + (this.isPaused || 1 >= this.elemArray.length || 1 != this.elemArray[this.curElem][9] ?
                        "none" : "block") + ';position:relative;float:right;cursor:pointer;width:32px;height:32px;top:8px;background-image:url("' + this.options.skinfolder + "lightbox_pause.png\");'></div><div class='html5gallery-fullscreen-title-" + this.id + "' style='display:block;position:relative;float:left;width:" + String(d - 72) + "px;height:" + this.fullscreenBarH + "px;top:0px;left:0px;text-align:left;'></div></div><div class='html5gallery-fullscreen-next-" + this.id + "' style='display:none;position:absolute;cursor:pointer;width:48px;height:48px;right:" +
                    this.fullscreenMargin + "px;top:" + Math.round(b / 2) + 'px;background-image:url("' + this.options.skinfolder + "lightbox_next.png\");'></div><div class='html5gallery-fullscreen-prev-" + this.id + "' style='display:none;position:absolute;cursor:pointer;width:48px;height:48px;left:" + this.fullscreenMargin + "px;top:" + Math.round(b / 2) + 'px;background-image:url("' + this.options.skinfolder + "lightbox_prev.png\");'></div></div></div>");
                this.$fullscreen.appendTo("body");
                var f = this;
                c(window).scroll(function () {
                    var a = c(".html5gallery-fullscreen-box-" +
                        f.id, f.$fullscreen),
                        b = window.innerHeight ? window.innerHeight : c(window).height(),
                        b = c(window).scrollTop() + Math.round((b - a.height()) / 2);
                    a.css({
                        top: b
                    })
                });
                var j = c(".html5gallery-elem-" + this.id, this.$gallery).empty().css({
                    top: 0
                });
                c(".html5gallery-fullscreen-box-" + this.id, this.$fullscreen).animate({
                    height: b + 2 * this.fullscreenMargin
                }, "slow", function () {
                    c(this).animate({
                        width: d + 2 * f.fullscreenMargin
                    }, "slow", function () {
                        c(this).animate({
                            height: "+=" + f.fullscreenBarH
                        }, "slow", function () {
                            c(".html5gallery-fullscreen-elem-" +
                                f.id, f.$fullscreen).prepend(j);
                            f.slideRun(f.curElem)
                        })
                    })
                });
                c(".html5gallery-fullscreen-overlay-" + this.id, this.$fullscreen).click(function () {
                    f.goNormal()
                });
                c(".html5gallery-fullscreen-box-" + this.id, this.$fullscreen).hover(function () {
                    1 < f.elemArray.length && (c(".html5gallery-fullscreen-next-" + f.id, f.$fullscreen).fadeIn(), c(".html5gallery-fullscreen-prev-" + f.id, f.$fullscreen).fadeIn())
                }, function () {
                    c(".html5gallery-fullscreen-next-" + f.id, f.$fullscreen).fadeOut();
                    c(".html5gallery-fullscreen-prev-" + f.id,
                        f.$fullscreen).fadeOut()
                });
                c(".html5gallery-fullscreen-box-" + this.id, this.$fullscreen).touchSwipe({
                    preventWebBrowser: !0,
                    swipeLeft: function () {
                        f.disableTouchSwipe || f.slideRun(-1)
                    },
                    swipeRight: function () {
                        f.disableTouchSwipe || f.slideRun(-2)
                    }
                });
                c(".html5gallery-fullscreen-close-" + this.id, this.$fullscreen).click(function () {
                    f.goNormal()
                });
                c(".html5gallery-fullscreen-next-" + this.id, this.$fullscreen).click(function () {
                    f.slideRun(-1)
                });
                c(".html5gallery-fullscreen-prev-" + this.id, this.$fullscreen).click(function () {
                    f.slideRun(-2)
                });
                c(".html5gallery-fullscreen-play-" + this.id, this.$fullscreen).click(function () {
                    c(".html5gallery-fullscreen-play-" + f.id, f.$fullscreen).hide();
                    c(".html5gallery-fullscreen-pause-" + f.id, f.$fullscreen).show();
                    f.isPaused = !1;
                    f.slideshowTimeout = setTimeout(function () {
                        f.slideRun(-1)
                    }, f.options.slideshowinterval);
                    c(".html5gallery-fullscreen-timer-" + f.id, f.$fullscreen).css({
                        width: 0
                    });
                    f.slideTimerCount = 0;
                    f.options.showtimer && (f.slideTimer = setInterval(function () {
                        f.showSlideTimer()
                    }, 50))
                });
                c(".html5gallery-fullscreen-pause-" +
                    this.id, this.$fullscreen).click(function () {
                    c(".html5gallery-fullscreen-play-" + f.id, f.$fullscreen).show();
                    c(".html5gallery-fullscreen-pause-" + f.id, f.$fullscreen).hide();
                    f.isPaused = !0;
                    clearTimeout(f.slideshowTimeout);
                    c(".html5gallery-fullscreen-timer-" + f.id, f.$fullscreen).css({
                        width: 0
                    });
                    clearInterval(f.slideTimer);
                    f.slideTimerCount = 0
                });
                c(document).bind("keyup.html5gallery", function (a) {
                    27 == a.keyCode ? f.goNormal() : 39 == a.keyCode ? f.slideRun(-1) : 37 == a.keyCode && f.slideRun(-2)
                })
            },
            calcIndex: function (a) {
                this.savedElem =
                    this.curElem; - 2 == a ? (this.nextElem = this.curElem, this.curElem = this.prevElem, this.prevElem = 0 > this.curElem - 1 ? this.elemArray.length - 1 : this.curElem - 1) : -1 == a ? (this.prevElem = this.curElem, this.curElem = this.nextElem, this.nextElem = this.curElem + 1 >= this.elemArray.length ? 0 : this.curElem + 1) : 0 <= a && (this.curElem = a, this.prevElem = 0 > this.curElem - 1 ? this.elemArray.length - 1 : this.curElem - 1, this.nextElem = this.curElem + 1 >= this.elemArray.length ? 0 : this.curElem + 1)
            },
            showSlideTimer: function () {
                this.slideTimerCount++;
                this.isFullscreen ?
                    c(".html5gallery-fullscreen-timer-" + this.id, this.$fullscreen).width(Math.round(50 * c(".html5gallery-fullscreen-elem-" + this.id, this.$fullscreen).width() * (this.slideTimerCount + 1) / this.options.slideshowinterval)) : c(".html5gallery-timer-" + this.id, this.$gallery).width(Math.round(50 * this.options.boxWidth * (this.slideTimerCount + 1) / this.options.slideshowinterval))
            },
            setHd: function (a, c) {
                var b = this.elemArray[this.curElem][9],
                    b = this.isHd != a && c && (5 == b || 6 == b || 7 == b || 8 == b);
                this.isHd = a;
                b && this.slideRun(this.curElem, !1, !1, !0)
            },
            enableUpdateCarousel: function () {
                this.disableupdatecarousel = !1
            },
            slideRun: function (a, d, b, e) {
                clearTimeout(this.slideshowTimeout);
                this.isFullscreen ? c(".html5gallery-fullscreen-timer-" + this.id, this.$fullscreen).css({
                    width: 0
                }) : c(".html5gallery-timer-" + this.id, this.$gallery).css({
                    width: 0
                });
                clearInterval(this.slideTimer);
                this.slideTimerCount = 0;
                this.options.showcarousel && 0 <= this.curElem && c("#html5gallery-tn-" + this.id + "-" + this.curElem, this.$gallery).removeClass("html5gallery-tn-selected-" + this.id).addClass("html5gallery-tn-" +
                    this.id);
                this.calcIndex(a);
                this.options.socialurlforeach && this.createSocialMedia();
                !this.isFullscreen && this.options.showcarousel && (c("#html5gallery-tn-" + this.id + "-" + this.curElem, this.$gallery).removeClass("html5gallery-tn-" + this.id).addClass("html5gallery-tn-selected-" + this.id), !this.options.notupdatecarousel && !this.disableupdatecarousel && this.carouselHighlight(this.curElem));
                if (this.options.showtitle) {
                    var g = this.elemArray[this.curElem][7];
                    a = this.elemArray[this.curElem][8];
                    this.options.shownumbering &&
                        (g = this.options.numberingformat.replace("%NUM", this.curElem + 1).replace("%TOTAL", this.elemArray.length) + " " + g);
                    this.isFullscreen ? c(".html5gallery-fullscreen-title-" + this.id, this.$fullscreen).html(g) : (g = "<div class='html5gallery-title-text-" + this.id + "'>" + g + "</div>", this.options.showdescription && a && (g += "<div class='html5gallery-description-text-" + this.id + "'>" + a + "</div>"), c(".html5gallery-title-" + this.id, this.$gallery).html(g))
                }
                a = this.elemArray[this.curElem][9];
                if (!(0 > a)) {
                    !this.isFullscreen && d ? "always" ==
                        this.options.showimagetoolbox ? ("mouseover" == this.options.imagetoolboxmode || "show" == this.options.imagetoolboxmode) && this.showimagetoolbox(a) : "image" == this.options.showimagetoolbox && 1 != a && this.hideimagetoolbox() : "show" == this.options.imagetoolboxmode ? this.showimagetoolbox(a) : this.hideimagetoolbox();
                    this.onChange();
                    d = c(".html5gallery-elem-" + this.id, h);
                    d.find("iframe").each(function () {
                        c(this).attr("src", "")
                    });
                    d.find("video").each(function () {
                        c(this).attr("src", "")
                    });
                    this.disableTouchSwipe = !1;
                    b = this.options.autoplayvideo ||
                        this.options.playvideoonclick && b || e;
                    var h = this.isFullscreen ? this.$fullscreen : this.$gallery;
                    this.showingPoster = !1;
                    (5 == a || 6 == a || 7 == a || 8 == a || 9 == a || 10 == a) && !b && this.elemArray[this.curElem][12] ? (this.showingPoster = !0, this.showPoster()) : (c(".html5gallery-video-play-" + this.id, h).length && c(".html5gallery-video-play-" + this.id, h).remove(), 1 == a ? this.showImage() : 5 == a || 6 == a || 7 == a || 8 == a ? this.showVideo(b, e) : 9 == a ? this.showYoutube(b) : 10 == a ? this.showVimeo(b) : 2 == a && this.showSWF());
                    this.prevElem in this.elemArray && 1 ==
                        this.elemArray[this.prevElem][9] && ((new Image).src = this.elemArray[this.prevElem][2]);
                    this.nextElem in this.elemArray && 1 == this.elemArray[this.nextElem][9] && ((new Image).src = this.elemArray[this.nextElem][2]);
                    this.prevElem in this.elemArray && (!this.options.autoplayvideo && this.elemArray[this.prevElem][12]) && ((new Image).src = this.elemArray[this.prevElem][12]);
                    this.nextElem in this.elemArray && (!this.options.autoplayvideo && this.elemArray[this.nextElem][12]) && ((new Image).src = this.elemArray[this.nextElem][12]);
                    this.curElem == this.elemArray.length - 1 && this.looptimes++;
                    var f = this;
                    if ((1 == a || this.showingPoster) && !this.isPaused && 1 < this.elemArray.length && (!this.options.loop || this.looptimes < this.options.loop)) this.slideshowTimeout = setTimeout(function () {
                        f.slideRun(-1)
                    }, this.options.slideshowinterval), this.isFullscreen ? c(".html5gallery-fullscreen-timer-" + this.id, this.$fullscreen).css({
                        width: 0
                    }) : c(".html5gallery-timer-" + this.id, this.$gallery).css({
                        width: 0
                    }), this.slideTimerCount = 0, this.options.showtimer && (this.slideTimer =
                        setInterval(function () {
                            f.showSlideTimer()
                        }, 50));
                    this.options.loop && this.looptimes >= this.options.loop && (this.looptimes = 0, this.pauseGallery());
                    this.elemArray[this.curElem][5] ? (d.css({
                        cursor: "pointer"
                    }), d.unbind("click").bind("click", function () {
                        f.elemArray[f.curElem][6] ? window.open(f.elemArray[f.curElem][5], f.elemArray[f.curElem][6]) : window.open(f.elemArray[f.curElem][5])
                    })) : (d.css({
                        cursor: ""
                    }), d.unbind("click"))
                }
            },
            showImage: function () {
                var a = c(".html5gallery-elem-" + this.id, this.isFullscreen ? this.$fullscreen :
                    this.$gallery);
                $preloading = "" === a.html() ? c("<div class='html5gallery-loading-center-" + this.id + "'></div>").appendTo(a) : c("<div class='html5gallery-loading-" + this.id + "'></div>").appendTo(a);
                var d = this,
                    b = new Image;
                c(b).load(function () {
                    $preloading.remove();
                    d.elemArray[d.curElem][10] = this.width;
                    d.elemArray[d.curElem][11] = this.height;
                    var b;
                    d.isFullscreen ? (b = Math.min(d.fullscreenWidth / this.width, d.fullscreenHeight / this.height), b = 1 < b ? 1 : b) : b = "fill" == d.options.resizemode ? Math.max(d.options.width / this.width,
                        d.options.height / this.height) : Math.min(d.options.width / this.width, d.options.height / this.height);
                    var e = Math.round(b * this.width);
                    b = Math.round(b * this.height);
                    var h = d.isFullscreen ? e : d.options.width,
                        f = d.isFullscreen ? b : d.options.height,
                        j = Math.round(h / 2 - e / 2),
                        l = Math.round(f / 2 - b / 2);
                    d.isFullscreen && d.adjustFullscreen(h, f);
                    a.css({
                        width: h,
                        height: f
                    });
                    e = c("<div class='html5gallery-elem-img-" + d.id + "' style='display:block; position:absolute; overflow:hidden; width:" + h + "px; height:" + f + "px; left:0px; margin-left:" +
                        (d.options.slideshadow && !d.isFullscreen ? 4 : 0) + "px; top:0px; margin-top:" + (d.options.slideshadow && !d.isFullscreen ? 4 : 0) + "px;'><img class='html5gallery-elem-image-" + d.id + "' style='border:none; position:absolute; opacity:inherit; filter:inherit; padding:0px; margin:0px; left:" + j + "px; top:" + l + "px; max-width:none; max-height:none; width:" + e + "px; height:" + b + "px;' src='" + d.elemArray[d.curElem][2] + "' />" + d.options.watermarkcode + "</div>");
                    b = c(".html5gallery-elem-img-" + d.id, a);
                    b.length ? (a.prepend(e), a.html5boxTransition(d.id,
                        b, e, {
                            effect: d.options.effect,
                            easing: d.options.easing,
                            duration: d.options.duration,
                            direction: d.curElem >= d.savedElem,
                            slide: d.options.slide
                        }, function () {})) : a.html(e);
                    d.options.googleanalyticsaccount && window._gaq.push(["_trackEvent", "Image", "Play", d.elemArray[d.curElem][7]])
                });
                c(b).error(function () {
                    $preloading.remove();
                    d.isFullscreen && d.adjustFullscreen(d.options.width, d.options.height);
                    a.html("<div class='html5gallery-elem-error-" + d.id + "' style='display:block; position:absolute; overflow:hidden; text-align:center; width:" +
                        d.options.width + "px; left:0px; top:" + Math.round(d.options.height / 2 - 10) + "px; margin:4px;'><div class='html5gallery-error-" + d.id + "'>The requested content cannot be found</div>");
                    d.options.googleanalyticsaccount && window._gaq.push(["_trackEvent", "Image", "Error", d.elemArray[d.curElem][7]])
                });
                b.src = this.elemArray[this.curElem][2]
            },
            adjustFullscreen: function (a, d, b) {
                var e = this.options.isMobile ? Math.max(c(window).width(), c(document).width()) : c(window).width();
                this.fullscreenWidth = e - 2 * this.fullscreenMargin -
                    2 * this.fullscreenOutsideMargin;
                var g = window.innerHeight ? window.innerHeight : c(window).height();
                this.fullscreenHeight = g - 2 * this.fullscreenMargin - this.fullscreenBarH - 2 * this.fullscreenOutsideMargin;
                var h = Math.max(g, c(document).height()),
                    f = Math.min(this.fullscreenWidth / a, this.fullscreenHeight / d);
                1 > f && (a *= f, d *= f);
                g = c(window).scrollTop() + Math.round((g - (d + 2 * this.fullscreenMargin + this.fullscreenBarH)) / 2);
                c(".html5gallery-fullscreen-" + this.id).css({
                    width: e + "px",
                    height: h + "px"
                });
                c(".html5gallery-fullscreen-title-" +
                    this.id, this.$fullscreen).css({
                    width: a - 72
                });
                b ? (c(".html5gallery-fullscreen-box-" + this.id, this.$fullscreen).css({
                    width: a + 2 * this.fullscreenMargin,
                    height: d + 2 * this.fullscreenMargin + this.fullscreenBarH,
                    top: g
                }), c(".html5gallery-fullscreen-elem-" + this.id, this.$fullscreen).css({
                    width: a,
                    height: d
                }), c(".html5gallery-fullscreen-bar-" + this.id, this.$fullscreen).css({
                    width: a,
                    top: d + this.fullscreenMargin
                })) : (c(".html5gallery-fullscreen-box-" + this.id, this.$fullscreen).animate({
                    width: a + 2 * this.fullscreenMargin,
                    height: d +
                        2 * this.fullscreenMargin + this.fullscreenBarH,
                    top: g
                }, "slow"), c(".html5gallery-fullscreen-elem-" + this.id, this.$fullscreen).animate({
                    width: a,
                    height: d
                }, "slow"), c(".html5gallery-fullscreen-bar-" + this.id, this.$fullscreen).animate({
                    width: a,
                    top: d + this.fullscreenMargin
                }, "slow"));
                c(".html5gallery-fullscreen-next-" + this.id, this.$fullscreen).css({
                    top: Math.round(d / 2)
                });
                c(".html5gallery-fullscreen-prev-" + this.id, this.$fullscreen).css({
                    top: Math.round(d / 2)
                });
                c(".html5gallery-fullscreen-play-" + this.id, this.$fullscreen).css("display",
                    this.isPaused && 1 < this.elemArray.length && 1 == this.elemArray[this.curElem][9] ? "block" : "none");
                c(".html5gallery-fullscreen-pause-" + this.id, this.$fullscreen).css("display", this.isPaused || 1 >= this.elemArray.length || 1 != this.elemArray[this.curElem][9] ? "none" : "block");
                c(".html5gallery-elem-" + this.id, this.$fullscreen).css({
                    width: a,
                    height: d
                });
                c(".html5gallery-fullscreen-timer-" + this.id, this.$fullscreen).css({
                    top: String(d - 4) + "px"
                })
            },
            showPoster: function () {
                var a = this.isFullscreen ? this.$fullscreen : this.$gallery,
                    d = c(".html5gallery-elem-" + this.id, a);
                $preloading = "" === d.html() ? c("<div class='html5gallery-loading-center-" + this.id + "'></div>").appendTo(d) : c("<div class='html5gallery-loading-" + this.id + "'></div>").appendTo(d);
                var b = this,
                    e = this.elemArray[this.curElem][10],
                    g = this.elemArray[this.curElem][11],
                    h = new Image;
                c(h).load(function () {
                    $preloading.remove();
                    var f, h, j;
                    b.isFullscreen ? (f = Math.max(e / this.width, g / this.height), f = 1 < f ? 1 : f, h = e, j = g) : (f = "fill" == b.options.resizemode ? Math.max(b.options.width / this.width, b.options.height /
                        this.height) : Math.min(b.options.width / this.width, b.options.height / this.height), h = b.options.width, j = b.options.height);
                    var l = Math.round(f * this.width);
                    f = Math.round(f * this.height);
                    var q = Math.round(h / 2 - l / 2),
                        n = Math.round(j / 2 - f / 2);
                    b.isFullscreen && b.adjustFullscreen(h, j);
                    d.css({
                        width: h,
                        height: j
                    });
                    h = c("<div class='html5gallery-elem-img-" + b.id + "' style='display:block; position:absolute; overflow:hidden; width:" + h + "px; height:" + j + "px; left:0px; margin-left:" + (b.options.slideshadow && !b.isFullscreen ? 4 : 0) + "px; top:0px; margin-top:" +
                        (b.options.slideshadow && !b.isFullscreen ? 4 : 0) + "px;'><img class='html5gallery-elem-image-" + b.id + "' style='border:none; position:absolute; opacity:inherit; filter:inherit; padding:0px; margin:0px; left:" + q + "px; top:" + n + "px; max-width:none; max-height:none; width:" + l + "px; height:" + f + "px;' src='" + b.elemArray[b.curElem][12] + "' />" + b.options.watermarkcode + "</div>");
                    j = c(".html5gallery-elem-img-" + b.id, d);
                    j.length ? (d.prepend(h), d.html5boxTransition(b.id, j, h, {
                        effect: b.options.effect,
                        easing: b.options.easing,
                        duration: b.options.duration,
                        direction: b.curElem >= b.savedElem,
                        slide: b.options.slide
                    }, function () {})) : d.html(h);
                    c(".html5gallery-video-play-" + b.id, a).length || c("<div class='html5gallery-video-play-" + b.id + "' style='position:absolute;display:block;cursor:pointer;top:50%;left:50%;width:64px;height:64px;margin-left:-32px;margin-top:-32px;background:url(\"" + b.options.skinfolder + "playvideo_64.png\") no-repeat center center;'></div>").appendTo(d).unbind(b.eClick).bind(b.eClick, function () {
                        c(this).remove();
                        clearTimeout(b.slideshowTimeout);
                        c(".html5gallery-timer-" + b.id, b.$gallery).css({
                            width: 0
                        });
                        clearInterval(b.slideTimer);
                        b.slideTimerCount = 0;
                        var a = b.elemArray[b.curElem][9];
                        5 == a || 6 == a || 7 == a || 8 == a ? b.showVideo(!0) : 9 == a ? b.showYoutube(!0) : 10 == a && b.showVimeo(!0)
                    })
                });
                c(h).error(function () {
                    $preloading.remove();
                    b.isFullscreen && b.adjustFullscreen(b.options.width, b.options.height);
                    d.html("<div class='html5gallery-elem-error-" + b.id + "' style='display:block; position:absolute; overflow:hidden; text-align:center; width:" + b.options.width + "px; left:0px; top:" +
                        Math.round(b.options.height / 2 - 10) + "px; margin:4px;'><div class='html5gallery-error-" + b.id + "'>The requested content cannot be found</div>");
                    b.options.googleanalyticsaccount && window._gaq.push(["_trackEvent", "Image", "Error", b.elemArray[b.curElem][7]])
                });
                h.src = this.elemArray[this.curElem][12]
            },
            showVideo: function (a, d) {
                this.disableTouchSwipe = !0;
                var b = this.isFullscreen ? this.$fullscreen : this.$gallery,
                    e = this.elemArray[this.curElem][10],
                    g = this.elemArray[this.curElem][11];
                this.isFullscreen ? this.adjustFullscreen(e,
                    g) : (c(".html5gallery-elem-" + this.id, this.$gallery).css({
                    width: this.options.width,
                    height: this.options.height
                }), e = this.options.width, g = this.options.height);
                var h = -1;
                d && c(".html5gallery-elem-" + this.id, b).find("video").length && (h = c(".html5gallery-elem-" + this.id, b).find("video:first").get(0).currentTime);
                c(".html5gallery-elem-" + this.id, b).html("<div class='html5gallery-loading-center-" + this.id + "'></div><div class='html5gallery-elem-video-" + this.id + "' style='display:block;position:absolute;overflow:hidden;top:" +
                    (this.options.slideshadow && !this.isFullscreen ? 4 : 0) + "px;left:" + (this.options.slideshadow && !this.isFullscreen ? 4 : 0) + "px;width:" + e + "px;height:" + g + "px;'></div>" + this.options.watermarkcode);
                this.isHTML5 = !1;
                if (this.options.isIE678 || this.options.isIE9 && this.options.useflashonie9 || this.options.isIE10 && this.options.useflashonie10 || this.options.isIE11 && this.options.useflashonie11) this.isHTML5 = !1;
                else if (this.options.isMobile) this.isHTML5 = !0;
                else if ((this.options.html5player || !this.options.flashInstalled) && this.options.html5VideoSupported)
                    if (!this.options.isFirefox && !this.options.isOpera || (this.options.isFirefox || this.options.isOpera) && (this.elemArray[this.curElem][3] || this.elemArray[this.curElem][4])) this.isHTML5 = !0;
                if (this.isHTML5) {
                    var f = this.elemArray[this.curElem][2],
                        j = this.elemArray[this.curElem][13];
                    if (this.options.isFirefox || this.options.isOpera || !f) f = this.elemArray[this.curElem][4] ? this.elemArray[this.curElem][4] : this.elemArray[this.curElem][3], j = this.elemArray[this.curElem][15] ? this.elemArray[this.curElem][15] : this.elemArray[this.curElem][14];
                    this.embedHTML5Video(c(".html5gallery-elem-video-" +
                        this.id, b), e, g, f, j, a, h, d)
                } else h = this.elemArray[this.curElem][2], "/" != h.charAt(0) && ("http:" != h.substring(0, 5) && "https:" != h.substring(0, 6)) && (h = this.options.htmlfolder + h), f = "", this.elemArray[this.curElem][13] && (f = this.elemArray[this.curElem][13], "/" != f.charAt(0) && ("http:" != f.substring(0, 5) && "https:" != f.substring(0, 6)) && (f = this.options.htmlfolder + f)), this.embedFlash(c(".html5gallery-elem-video-" + this.id, b), "100%", "100%", this.options.jsfolder + "html5boxplayer.swf", "transparent", {
                    width: e,
                    height: g,
                    videofile: h,
                    hdfile: f,
                    ishd: this.isHd ? "1" : "0",
                    autoplay: a ? "1" : "0",
                    errorcss: ".html5box-error" + this.options.errorcss,
                    id: this.id
                });
                this.options.googleanalyticsaccount && window._gaq.push(["_trackEvent", "Video", "Play", this.elemArray[this.curElem][7]])
            },
            showSWF: function () {
                var a = this.isFullscreen ? this.$fullscreen : this.$gallery,
                    d = this.elemArray[this.curElem][10],
                    b = this.elemArray[this.curElem][11];
                this.isFullscreen ? this.adjustFullscreen(d, b) : c(".html5gallery-elem-" + this.id, this.$gallery).css({
                    width: this.options.width,
                    height: this.options.height
                });
                var e = this.isFullscreen ? 0 : Math.round((this.options.height - b) / 2) + (this.options.slideshadow ? 4 : 0),
                    g = this.isFullscreen ? 0 : Math.round((this.options.width - d) / 2) + (this.options.slideshadow ? 4 : 0);
                c(".html5gallery-elem-" + this.id, a).html("<div class='html5gallery-elem-flash-" + this.id + "' style='display:block;position:absolute;overflow:hidden;top:" + e + "px;left:" + g + "px;width:" + d + "px;height:" + b + "px;'></div>" + this.options.watermarkcode);
                this.embedFlash(c(".html5gallery-elem-flash-" + this.id, a), d, b, this.elemArray[this.curElem][2],
                    "window", {});
                this.options.googleanalyticsaccount && window._gaq.push(["_trackEvent", "Flash", "Play", this.elemArray[this.curElem][7]])
            },
            prepareYoutubeHref: function (a) {
                var c = "",
                    b = a.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/);
                b && (b[7] && 11 == b[7].length) && (c = b[7]);
                c = "http://www.youtube.com/embed/" + c;
                a = this.getYoutubeParams(a);
                var b = !0,
                    e;
                for (e in a) b ? (c += "?", b = !1) : c += "&", c += e + "=" + a[e];
                return c
            },
            getYoutubeParams: function (a) {
                var c = {};
                if (0 > a.indexOf("?")) return c;
                a = a.substring(a.indexOf("?") +
                    1).split("&");
                for (var b = 0; b < a.length; b++) {
                    var e = a[b].split("=");
                    e && (2 == e.length && "v" != e[0].toLowerCase()) && (c[e[0].toLowerCase()] = e[1])
                }
                return c
            },
            initYoutubeApi: function () {
                var a, c = !1;
                for (a = 0; a < this.elemArray.length; a++)
                    if (9 == this.elemArray[a][9]) {
                        c = !0;
                        break
                    }
                c && (a = document.createElement("script"), a.src = ("https:" == document.location.protocol ? "https" : "http") + "://www.youtube.com/iframe_api", c = document.getElementsByTagName("script")[0], c.parentNode.insertBefore(a, c))
            },
            showYoutube: function (a) {
                var d = this.isFullscreen ?
                    this.$fullscreen : this.$gallery,
                    b = this.elemArray[this.curElem][10],
                    e = this.elemArray[this.curElem][11];
                this.isFullscreen ? this.adjustFullscreen(b, e) : (c(".html5gallery-elem-" + this.id, this.$gallery).css({
                    width: this.options.width,
                    height: this.options.height
                }), b = this.options.width, e = this.options.height);
                var g = this.elemArray[this.curElem][2];
                c(".html5gallery-elem-" + this.id, d).html("<div class='html5gallery-loading-center-" + this.id + "'></div><div id='html5gallery-elem-video-" + this.id + "' style='display:block;position:absolute;overflow:hidden;top:" +
                    (this.options.slideshadow && !this.isFullscreen ? 4 : 0) + "px;left:" + (this.options.slideshadow && !this.isFullscreen ? 4 : 0) + "px;width:" + b + "px;height:" + e + "px;'></div>" + this.options.watermarkcode);
                var h = this;
                if (!ASYouTubeIframeAPIReady && (ASYouTubeTimeout += 100, 3E3 > ASYouTubeTimeout)) {
                    setTimeout(function () {
                        h.showYoutube(a)
                    }, 100);
                    return
                }
                if (ASYouTubeIframeAPIReady && !this.options.isIOS && !this.options.isIE6 && !this.options.isIE7) {
                    d = this.elemArray[this.curElem][2].match(/(\?v=|\/\d\/|\/embed\/|\/v\/|\.be\/)([a-zA-Z0-9\-\_]+)/)[2];
                    g = null;
                    a && (g = function (a) {
                        a.target.playVideo()
                    });
                    var f = this.getYoutubeParams(this.elemArray[this.curElem][2]),
                        f = c.extend({
                            autoplay: a ? 1 : 0,
                            rel: 0,
                            wmode: "transparent"
                        }, f);
                    new YT.Player("html5gallery-elem-video-" + this.id, {
                        width: b,
                        height: e,
                        videoId: d,
                        playerVars: f,
                        events: {
                            onReady: g,
                            onStateChange: function (a) {
                                a.data == YT.PlayerState.ENDED && (h.onVideoEnd(), h.isPaused || h.slideRun(-1))
                            }
                        }
                    })
                } else g = this.prepareYoutubeHref(g), a && (g = 0 > g.indexOf("?") ? g + "?autoplay=1" : g + "&autoplay=1"), g = 0 > g.indexOf("?") ? g + "?wmode=transparent&rel=0" :
                    g + "&wmode=transparent&rel=0", c("#html5gallery-elem-video-" + this.id, d).html("<iframe width='" + b + "' height='" + e + "' src='" + g + "' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>");
                this.options.googleanalyticsaccount && window._gaq.push(["_trackEvent", "Video", "Play", this.elemArray[this.curElem][7]])
            },
            showVimeo: function (a) {
                var d = this.isFullscreen ? this.$fullscreen : this.$gallery,
                    b = this.elemArray[this.curElem][10],
                    e = this.elemArray[this.curElem][11];
                this.isFullscreen ? this.adjustFullscreen(b,
                    e) : (c(".html5gallery-elem-" + this.id, this.$gallery).css({
                    width: this.options.width,
                    height: this.options.height
                }), b = this.options.width, e = this.options.height);
                var g = this.elemArray[this.curElem][2];
                a && (g = 0 > g.indexOf("?") ? g + "?autoplay=1" : g + "&autoplay=1");
                c(".html5gallery-elem-" + this.id, d).html("<div class='html5gallery-loading-center-" + this.id + "'></div><div class='html5gallery-elem-video-" + this.id + "' style='display:block;position:absolute;overflow:hidden;top:" + (this.options.slideshadow && !this.isFullscreen ?
                    4 : 0) + "px;left:" + (this.options.slideshadow && !this.isFullscreen ? 4 : 0) + "px;width:" + b + "px;height:" + e + "px;'></div>" + this.options.watermarkcode);
                c(".html5gallery-elem-video-" + this.id, d).html("<iframe width='" + b + "' height='" + e + "' src='" + g + "' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>");
                this.options.googleanalyticsaccount && window._gaq.push(["_trackEvent", "Video", "Play", this.elemArray[this.curElem][7]])
            },
            checkType: function (a) {
                return !a ? -1 : a.match(/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i) ?
                    1 : a.match(/[^\.]\.(swf)\s*$/i) ? 2 : a.match(/[^\.]\.(mp3)\s*$/i) ? 3 : a.match(/[^\.]\.(pdf)\s*$/i) ? 4 : a.match(/\.(flv)(.*)?$/i) ? 5 : a.match(/\.(mp4|m4v)(.*)?$/i) ? 6 : a.match(/\.(ogv|ogg)(.*)?$/i) ? 7 : a.match(/\.(webm)(.*)?$/i) ? 8 : a.match(/\:\/\/.*(youtube\.com)/i) || a.match(/\:\/\/.*(youtu\.be)/i) ? 9 : a.match(/\:\/\/.*(vimeo\.com)/i) ? 10 : 0
            },
            onChange: function () {
                if (this.options.onchange && window[this.options.onchange] && "function" == typeof window[this.options.onchange]) window[this.options.onchange](this.elemArray[this.curElem])
            },
            onSlideshowOver: function () {
                if (this.options.onslideshowover && window[this.options.onslideshowover] && "function" == typeof window[this.options.onslideshowover]) window[this.options.onslideshowover](this.elemArray[this.curElem])
            },
            onThumbOver: function () {
                if (this.options.onthumbover && window[this.options.onthumbover] && "function" == typeof window[this.options.onthumbover]) window[this.options.onthumbover](this.elemArray[this.curElem])
            },
            onVideoEnd: function () {
                if (this.options.onvideoend && window[this.options.onvideoend] &&
                    "function" == typeof window[this.options.onvideoend]) window[this.options.onvideoend](this.elemArray[this.curElem])
            },
            embedHTML5Video: function (a, d, b, e, g, h, f, j) {
                a.html("<div class='html5gallery-elem-video-container-" + this.id + "' style='position:relative;display:block;width:" + d + "px;height:" + b + "px;'><video width='" + d + "px' height='" + b + "px'" + (this.options.nativehtml5controls ? " controls" : "") + "></div>");
                c("video", a).get(0).setAttribute("src", (g && this.isHd ? g : e) + (0 < f ? "#t=" + f : ""));
                this.options.nativehtml5controls ||
                    (c("video", a).data("src", e), c("video", a).data("hd", g), c("video", a).data("ishd", this.isHd), c("video", a).addHTML5VideoControls(this.options.skinfolder, this));
                (h || j) && c("video", a).get(0).play();
                var l = this;
                c("video", a).unbind("ended").bind("ended", function () {
                    l.onVideoEnd();
                    l.isPaused || l.slideRun(-1)
                })
            },
            embedFlash: function (a, d, b, e, g, h) {
                if (this.options.flashInstalled) {
                    var f = {
                        pluginspage: "http://www.adobe.com/go/getflashplayer",
                        quality: "high",
                        allowFullScreen: "true",
                        allowScriptAccess: "always",
                        type: "application/x-shockwave-flash"
                    };
                    f.width = d;
                    f.height = b;
                    f.src = e;
                    f.wmode = g;
                    f.flashVars = c.param(h);
                    d = "";
                    for (var j in f) d += j + "=" + f[j] + " ";
                    a.html("<embed " + d + "/>")
                } else a.html("<div class='html5gallery-elem-error-" + this.id + "' style='display:block; position:absolute; text-align:center; width:" + this.options.width + "px; left:0px; top:" + Math.round(this.options.height / 2 - 10) + "px;'><div class='html5gallery-error-" + this.id + "'><div>The required Adobe Flash Player plugin is not installed</div><div style='display:block;position:relative;text-align:center;width:112px;height:33px;margin:0px auto;'><a href='http://www.adobe.com/go/getflashplayer'><img src='http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif' alt='Get Adobe Flash player' width='112' height='33'></img></a></div></div>")
            }
        };
        this.each(function () {
            var a = c(this);
            h = h || {};
            for (var d in h) d.toLowerCase() !== d && (h[d.toLowerCase()] = h[d], delete h[d]);
            this.options = c.extend({}, h);
            var b = this;
            c.each(a.data(), function (a, c) {
                b.options[a.toLowerCase()] = c
            });
            "skin" in this.options && (this.options.skin = this.options.skin.toLowerCase());
            d = {
                skinfolder: "skins/horizontal/",
                padding: 6,
                bgcolor: "#ffffff",
                bgimage: "",
                galleryshadow: !0,
                slideshadow: !1,
                showsocialmedia: !1,
                headerpos: "top",
                showdescription: !0,
                titleoverlay: !0,
                titleautohide: !0,
                titlecss: " {color:#ffffff; font-size:14px; font-family:Armata, sans-serif, Arial; overflow:hidden; text-align:left;padding:10px 0px 10px 10px; background:rgb(102, 102, 102) transparent; background: rgba(102, 102, 102, 0.6); filter:'progid:DXImageTransform.Microsoft.gradient(startColorstr=#99666666, endColorstr=#99666666)'; -ms-filter:'progid:DXImageTransform.Microsoft.gradient(startColorstr=#99666666, endColorstr=#99666666)'; }",
                titlecsslink: " a {color:#ffffff;}",
                descriptioncss: " {color:#ffffff; font-size:13px; font-family:Armata, sans-serif, Arial; overflow:hidden; text-align:left; padding:0px 0px 10px 10px; background:rgb(102, 102, 102) transparent; background: rgba(102, 102, 102, 0.6); filter:'progid:DXImageTransform.Microsoft.gradient(startColorstr=#99666666, endColorstr=#99666666)'; -ms-filter:'progid:DXImageTransform.Microsoft.gradient(startColorstr=#99666666, endColorstr=#99666666)'; }",
                descriptioncsslink: " a {color:#ffffff;}",
                showcarousel: !0,
                carouselmargin: 0,
                carouselbgtransparent: !1,
                carouselbgcolorstart: "#494f54",
                carouselbgcolorend: "#292c31",
                carouseltopborder: "#666666",
                carouselbottomborder: "#111111",
                thumbwidth: 64,
                thumbheight: 48,
                thumbgap: 4,
                thumbmargin: 6,
                thumbunselectedimagebordercolor: "",
                thumbimageborder: 1,
                thumbimagebordercolor: "#ffffff",
                thumbshowplayonvideo: !0,
                thumbshadow: !1,
                thumbopacity: 0.8
            };
            var j = {
                padding: 12,
                skinfolder: "skins/light/",
                bgcolor: "",
                bgimage: "",
                galleryshadow: !1,
                slideshadow: !0,
                showsocialmedia: !1,
                headerpos: "top",
                showdescription: !0,
                titleoverlay: !0,
                titleautohide: !0,
                titlecss: " {color:#ffffff; font-size:14px; font-family:Armata, sans-serif, Arial; overflow:hidden; white-space:normal;display; text-align:left; padding:10px 0px 10px 10px;  background:rgb(102, 102, 102) transparent; background: rgba(102, 102, 102, 0.6); filter:'progid:DXImageTransform.Microsoft.gradient(startColorstr=#99666666, endColorstr=#99666666)'; -ms-filter:'progid:DXImageTransform.Microsoft.gradient(startColorstr=#99666666, endColorstr=#99666666)'; }",
                titlecsslink: " a {color:#ffffff;}",
                descriptioncss: " {color:#ffffff; font-size:12px; font-family:Armata, sans-serif, Arial; overflow:hidden; white-space:normal; text-align:left; padding:0px 0px 10px 10px;  background:rgb(102, 102, 102) transparent; background: rgba(102, 102, 102, 0.6); filter:'progid:DXImageTransform.Microsoft.gradient(startColorstr=#99666666, endColorstr=#99666666)'; -ms-filter:'progid:DXImageTransform.Microsoft.gradient(startColorstr=#99666666, endColorstr=#99666666)'; }",
                descriptioncsslink: " a {color:#ffffff;}",
                showcarousel: !0,
                carouselmargin: 10,
                carouselbgtransparent: !0,
                thumbwidth: 48,
                thumbheight: 48,
                thumbgap: 8,
                thumbmargin: 12,
                thumbunselectedimagebordercolor: "#fff",
                thumbimageborder: 2,
                thumbimagebordercolor: "#fff",
                thumbshowplayonvideo: !0,
                thumbshadow: !0,
                thumbopacity: 0.8
            }, g = {
                    padding: 0,
                    skinfolder: "skins/mediapage/",
                    bgcolor: "",
                    bgimage: "",
                    galleryshadow: !1,
                    slideshadow: !1,
                    showsocialmedia: !1,
                    headerpos: "top",
                    showdescription: !0,
                    titleoverlay: !0,
                    titleautohide: !0,
                    titlecss: " {color:#ffffff; font-size:14px; font-family:Armata, sans-serif, Arial; overflow:hidden; white-space:normal; text-align:left; padding:10px 0px 10px 10px;  background:rgb(102, 102, 102) transparent; background: rgba(102, 102, 102, 0.6); filter:'progid:DXImageTransform.Microsoft.gradient(startColorstr=#99666666, endColorstr=#99666666)'; -ms-filter:'progid:DXImageTransform.Microsoft.gradient(startColorstr=#99666666, endColorstr=#99666666)'; }",
                    titlecsslink: " a {color:#ffffff;}",
                    descriptioncss: " {color:#ffffff; font-size:12px; font-family:Armata, sans-serif, Arial; overflow:hidden; white-space:normal; text-align:left; padding:0px 0px 10px 10px;  background:rgb(102, 102, 102) transparent; background: rgba(102, 102, 102, 0.6); filter:'progid:DXImageTransform.Microsoft.gradient(startColorstr=#99666666, endColorstr=#99666666)'; -ms-filter:'progid:DXImageTransform.Microsoft.gradient(startColorstr=#99666666, endColorstr=#99666666)'; }",
                    descriptioncsslink: " a {color:#ffffff;}",
                    showcarousel: !0,
                    carouselmargin: 24,
                    carouselmultirows: !0,
                    thumbrowgap: 16,
                    carouselbgtransparent: !0,
                    thumbwidth: 120,
                    thumbheight: 60,
                    thumbgap: 10,
                    thumbmargin: 12,
                    thumbunselectedimagebordercolor: "#fff",
                    thumbimageborder: 0,
                    thumbimagebordercolor: "#fff",
                    thumbshowplayonvideo: !0,
                    thumbshadow: !1,
                    thumbopacity: 0.8,
                    thumbshowtitle: !0,
                    thumbtitlecss: "{text-align:center; color:#000; font-size:12px; font-family:Armata,Arial,Helvetica,sans-serif; overflow:hidden;}",
                    thumbtitleheight: 24
                }, l = {
                    padding: 12,
                    skinfolder: "skins/gallery/",
                    bgcolor: "",
                    bgimage: "",
                    galleryshadow: !1,
                    slideshadow: !0,
                    showsocialmedia: !1,
                    headerpos: "top",
                    showdescription: !0,
                    titleoverlay: !0,
                    titleautohide: !0,
                    titlecss: " {color:#ffffff; font-size:14px;display:none; font-family:Armata, sans-serif, Arial; overflow:hidden; white-space:normal; text-align:left; padding:10px 0px 10px 10px;  background:rgb(102, 102, 102) transparent; background: rgba(102, 102, 102, 0.6); filter:'progid:DXImageTransform.Microsoft.gradient(startColorstr=#99666666, endColorstr=#99666666)'; -ms-filter:'progid:DXImageTransform.Microsoft.gradient(startColorstr=#99666666, endColorstr=#99666666)'; }",
                    titlecsslink: " a {color:#ffffff;}",
                    descriptioncss: " {color:#ffffff; font-size:12px; font-family:Armata, sans-serif, Arial; overflow:hidden; white-space:normal; text-align:left; padding:0px 0px 10px 10px;  background:rgb(102, 102, 102) transparent; background: rgba(102, 102, 102, 0.6); filter:'progid:DXImageTransform.Microsoft.gradient(startColorstr=#99666666, endColorstr=#99666666)'; -ms-filter:'progid:DXImageTransform.Microsoft.gradient(startColorstr=#99666666, endColorstr=#99666666)'; }",
                    descriptioncsslink: " a {color:#ffffff;}",
                    showcarousel: !0,
                    carouselmargin: 10,
                    carouselbgtransparent: !0,
                    thumbwidth: 120,
                    thumbheight: 60,
                    thumbgap: 8,
                    thumbmargin: 12,
                    thumbunselectedimagebordercolor: "#fff",
                    thumbimageborder: 2,
                    thumbimagebordercolor: "#fff",
                    thumbshowplayonvideo: !0,
                    thumbshadow: !0,
                    thumbopacity: 0.8,
                    thumbshowtitle: !0,
                    thumbtitlecss: "{text-align:center; color:#000; font-size:12px; font-family:Armata,Arial,Helvetica,sans-serif; overflow:hidden; white-space:nowrap;}",
                    thumbtitleheight: 18
                }, f = {
                    skinfolder: "skins/darkness/",
                    padding: 12,
                    bgcolor: "#444444",
                    bgimage: "background.jpg",
                    galleryshadow: !1,
                    slideshadow: !1,
                    headerpos: "bottom",
                    showdescription: !1,
                    titleoverlay: !1,
                    titleautohide: !1,
                    titlecss: " {color:#ffffff; font-size:16px; font-family:Armata, sans-serif, Arial; overflow:hidden; white-space:normal; text-align:left; padding:10px 0px;}",
                    titlecsslink: " a {color:#ffffff;}",
                    descriptioncss: " {color:#ffffff; font-size:12px; font-family:Armata, sans-serif, Arial; overflow:hidden; white-space:normal; text-align:left; padding:0px 0px 10px 0px;}",
                    descriptioncsslink: " a {color:#ffffff;}",
                    showcarousel: !0,
                    carouselmargin: 8,
                    carouselbgtransparent: !1,
                    carouselbgcolorstart: "#494f54",
                    carouselbgcolorend: "#292c31",
                    carouseltopborder: "#666666",
                    carouselbottomborder: "#111111",
                    thumbwidth: 64,
                    thumbheight: 48,
                    thumbgap: 4,
                    thumbmargin: 6,
                    thumbunselectedimagebordercolor: "",
                    thumbimageborder: 1,
                    thumbimagebordercolor: "#cccccc",
                    thumbshowplayonvideo: !0,
                    thumbshadow: !1,
                    thumbopacity: 0.8
                }, r = {
                    skinfolder: "skins/vertical/",
                    padding: 12,
                    bgcolor: "#444444",
                    bgimage: "background.jpg",
                    galleryshadow: !1,
                    slideshadow: !1,
                    headerpos: "bottom",
                    showdescription: !1,
                    titleoverlay: !1,
                    titleautohide: !1,
                    titlecss: " {color:#ffffff; font-size:16px; font-family:Armata, sans-serif, Arial; overflow:hidden; white-space:normal; text-align:left; padding:10px 0px;}",
                    titlecsslink: " a {color:#ffffff;}",
                    descriptioncss: " {color:#ffffff; font-size:12px; font-family:Armata, sans-serif, Arial; overflow:hidden; white-space:normal; text-align:left; padding:0px 0px 10px 0px;}",
                    descriptioncsslink: " a {color:#ffffff;}",
                    showcarousel: !0,
                    carouselmargin: 8,
                    carouselposition: "right",
                    carouselbgtransparent: !1,
                    carouselbgcolorstart: "#494f54",
                    carouselbgcolorend: "#292c31",
                    carouseltopborder: "#666666",
                    carouselbottomborder: "#111111",
                    carouselhighlightbgcolorstart: "#999999",
                    carouselhighlightbgcolorend: "#666666",
                    carouselhighlighttopborder: "#cccccc",
                    carouselhighlightbottomborder: "#444444",
                    carouselhighlightbgimage: "",
                    thumbwidth: 148,
                    thumbheight: 48,
                    thumbgap: 2,
                    thumbmargin: 6,
                    thumbunselectedimagebordercolor: "",
                    thumbimageborder: 1,
                    thumbimagebordercolor: "#cccccc",
                    thumbshowplayonvideo: !0,
                    thumbshadow: !1,
                    thumbopacity: 0.8,
                    thumbshowimage: !0,
                    thumbshowtitle: !0,
                    thumbtitlecss: "{text-align:center; color:#ffffff; font-size:12px; font-family:Armata, sans-serif, Arial; overflow:hidden; white-space:nowrap;}"
                }, s = {
                    skinfolder: "skins/showcase/",
                    padding: 12,
                    bgcolor: "#444444",
                    bgimage: "background.jpg",
                    galleryshadow: !1,
                    slideshadow: !1,
                    showsocialmedia: !1,
                    headerpos: "bottom",
                    showdescription: !1,
                    titleoverlay: !1,
                    titleautohide: !1,
                    titlecss: " {color:#ffffff; font-size:16px; font-family:Armata, sans-serif, Arial; overflow:hidden; white-space:normal; text-align:left; padding:10px 0px;}",
                    titlecsslink: " a {color:#ffffff;}",
                    descriptioncss: " {color:#ffffff; font-size:12px; font-family:Armata, sans-serif, Arial; overflow:hidden; white-space:normal; text-align:left; padding:0px 0px 10px 0px;}",
                    descriptioncsslink: " a {color:#ffffff;}",
                    showcarousel: !0,
                    carouselmargin: 8,
                    carouselposition: "bottom",
                    carouselheight: 200,
                    carouselbgtransparent: !1,
                    carouselbgcolorstart: "#494f54",
                    carouselbgcolorend: "#292c31",
                    carouseltopborder: "#666666",
                    carouselbottomborder: "#111111",
                    carouselhighlightbgcolorstart: "#999999",
                    carouselhighlightbgcolorend: "#666666",
                    carouselhighlighttopborder: "#cccccc",
                    carouselhighlightbottomborder: "#444444",
                    carouselhighlightbgimage: "",
                    thumbwidth: 148,
                    thumbheight: 60,
                    thumbgap: 2,
                    thumbmargin: 6,
                    thumbunselectedimagebordercolor: "",
                    thumbimageborder: 1,
                    thumbimagebordercolor: "#cccccc",
                    thumbshowplayonvideo: !0,
                    thumbshadow: !1,
                    thumbopacity: 0.8,
                    thumbshowimage: !0,
                    thumbshowtitle: !0,
                    thumbtitlecss: "{text-align:left; color:#ffffff; font-size:12px; font-family:Armata, sans-serif, Arial; overflow:hidden; padding: 6px 0;}",
                    thumbshowdescription: !0,
                    thumbdescriptioncss: "{font-size:10px;}"
                }, p = {
                    freelink: "http://html5box.com/html5gallery/watermark.php",
                    watermark: "",
                    skin: "horizontal",
                    googlefonts: "Armata",
                    enabletouchswipe: !0,
                    enabletouchswipeonandroid: !0,
                    responsive: !1,
                    responsivefullscreen: !1,
                    screenquery: {},
                    src: "",
                    xml: "",
                    xmlnocache: !0,
                    autoslide: !1,
                    slideshowinterval: 6E3,
                    random: !1,
                    borderradius: 0,
                    loop: 0,
                    notupdatecarousel: !1,
                    updatecarouselinterval: 6E4,
                    autoplayvideo: !1,
                    html5player: !0,
                    playvideoonclick: !0,
                    nativehtml5controls: !1,
                    hddefault: !1,
                    useflashonie9: !0,
                    useflashonie10: !1,
                    useflashonie11: !1,
                    lightboxborder: 8,
                    lightboxtextheight: 54,
                    lightboxmargin: 8,
                    lightboxbgcolor: "#fff",
                    effect: "fade",
                    easing: "easeOutCubic",
                    duration: 1500,
                    slide: {
                        duration: 1E3,
                        easing: "easeOutExpo"
                    },
                    width: 480,
                    height: 270,
                    showtimer: !0,
                    resizemode: "fit",
                    showtitle: !0,
                    titleheight: 45,
                    errorcss: " {text-align:center; color:#ff0000; font-size:14px; font-family:Arial, sans-serif;}",
                    titlefullscreencss: " {color:#333333; font-size:16px; font-family:Armata, sans-serif, Arial; overflow:hidden; white-space:normal; line-height:24px;}",
                    titlefullscreencsslink: " a {color:#333333;}",
                    shownumbering: !1,
                    numberingformat: "%NUM / %TOTAL",
                    googleanalyticsaccount: "",
                    showsocialmedia: !1,
                    socialheight: 30,
                    socialurlforeach: !1,
                    showfacebooklike: !0,
                    facebooklikeurl: "",
                    showtwitter: !0,
                    twitterurl: "",
                    twitterusername: "",
                    twittervia: "html5box",
                    showgoogleplus: !0,
                    googleplusurl: "",
                    showimagetoolbox: "always",
                    imagetoolboxstyle: "side",
                    imagetoolboxmode: "mouseover",
                    showplaybutton: !0,
                    showprevbutton: !0,
                    shownextbutton: !0,
                    showfullscreenbutton: !0,
                    carouselbgtransparent: !0,
                    carouselbgcolorstart: "#ffffff",
                    carouselbgcolorend: "#ffffff",
                    carouseltopborder: "#ffffff",
                    carouselbottomborder: "#ffffff",
                    carouselbgimage: "",
                    carouseleasing: "easeOutCirc",
                    carouselmultirows: !1,
                    thumbrowgap: 16,
                    version: "3.6",
                    fv: !0,
                    fm: "hmtamgli5cboxh.iclolms"
                }, p = "vertical" == this.options.skin ? c.extend(p, r) : "showcase" == this.options.skin ? c.extend(p, s) : "light" == this.options.skin ? c.extend(p, j) : "gallery" == this.options.skin ? c.extend(p, l) : "horizontal" == this.options.skin ? c.extend(p, d) : "darkness" == this.options.skin ?
                    c.extend(p, f) : "mediapage" == this.options.skin ? c.extend(p, g) : c.extend(p, d);
            this.options = c.extend(p, this.options);
            this.options.htmlfolder = window.location.href.substr(0, window.location.href.lastIndexOf("/") + 1);
            if (!this.options.jsfolder || !this.options.jsfolder.length) this.options.jsfolder = n;
            "/" != this.options.skinfolder.charAt(0) && ("http:" != this.options.skinfolder.substring(0, 5) && "https:" != this.options.skinfolder.substring(0, 6)) && (this.options.skinfolder = this.options.jsfolder + this.options.skinfolder);
            g =
                b.options.fm;
            for (d = 1; 5 >= d; d++) g = g.slice(0, d) + g.slice(d + 1);
            j = g.length;
            for (d = 0; 5 > d; d++) g = g.slice(0, j - 9 + d) + g.slice(j - 8 + d);
            this.options.fvm = g; - 1 != this.options.htmlfolder.indexOf(this.options.fvm) && (this.options.fv = !1);
            j = c(window).width();
            if (this.options.screenquery)
                for (d in this.options.screenquery) j <= this.options.screenquery[d].screenwidth && (this.options.screenquery[d].gallerywidth && (this.options.width = this.options.screenquery[d].gallerywidth), this.options.screenquery[d].galleryheight && (this.options.height =
                    this.options.screenquery[d].galleryheight), this.options.screenquery[d].thumbwidth && (this.options.thumbwidth = this.options.screenquery[d].thumbwidth), this.options.screenquery[d].thumbheight && (this.options.thumbheight = this.options.screenquery[d].thumbheight));
            "galleryid" in this.options ? d = this.options.galleryid : (d = B, B++);
            j = new e(a, this.options, d);
            a.data("html5galleryobject", j);
            a.data("html5galleryid", d);
            html5GalleryObjects.addObject(j)
        });
        return this
    };
    jQuery(document).ready(function () {
        jQuery(".html5gallery").html5gallery()
    })
}
var html5GalleryObjects = new function () {
        this.objects = [];
        this.addObject = function (n) {
            this.objects.push(n)
        };
        this.loadNext = function (n) {
            this.objects[n].onVideoEnd();
            this.objects[n].isPaused || this.objects[n].slideRun(-1)
        };
        this.setHd = function (n, p, l) {
            this.objects[n].setHd(p, l)
        };
        this.gotoSlide = function (n, p) {
            "undefined" === typeof p && (p = 0);
            this.objects[p] && this.objects[p].slideRun(n)
        }
    };
if ("undefined" === typeof ASYouTubeIframeAPIReady) var ASYouTubeIframeAPIReady = !1,
ASYouTubeTimeout = 0, onYouTubeIframeAPIReady = function () {
    ASYouTubeIframeAPIReady = !0
};
                                                                                                                    $(".html5-video-player .video-click-tracking, .html5-video-player .video-stream").css("top","30px !important");