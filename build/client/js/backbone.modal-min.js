(function () {
  var a = function (a, b) {
    return function () {
      return a.apply(b, arguments)
    }
  }, b = {}.hasOwnProperty, c = function (a, c) {
    function d() {
      this.constructor = a
    }

    for (var e in c) b.call(c, e) && (a[e] = c[e]);
    return d.prototype = c.prototype, a.prototype = new d, a.__super__ = c.prototype, a
  }, d = [].indexOf || function (a) {
    for (var b = 0, c = this.length; c > b; b++)if (b in this && this[b] === a) return b;
    return -1
  };
  !function (a) {
    return "function" == typeof define && define.amd ? define(["underscore", "backbone", "exports"], a) : "object" == typeof exports ? a(require("underscore"), require("backbone"), exports) : a(_, Backbone, {})
  }(function (b, e, f) {
    return f = function (f) {
      function g() {
        this.triggerCancel = a(this.triggerCancel, this), this.triggerSubmit = a(this.triggerSubmit, this), this.triggerView = a(this.triggerView, this), this.clickOutsideElement = a(this.clickOutsideElement, this), this.clickOutside = a(this.clickOutside, this), this.checkKey = a(this.checkKey, this), this.rendererCompleted = a(this.rendererCompleted, this), this.args = Array.prototype.slice.apply(arguments), e.View.prototype.constructor.apply(this, this.args), this.setUIElements()
      }

      return c(g, f), g.prototype.prefix = "bbm", g.prototype.animate = !0, g.prototype.keyControl = !0, g.prototype.showViewOnRender = !0, g.prototype.render = function (a) {
        var c, d;
        return c = this.serializeData(), (!a || b.isEmpty(a)) && (a = 0), this.$el.addClass("" + this.prefix + "-wrapper"), this.modalEl = e.$("<div />").addClass("" + this.prefix + "-modal"), this.template && this.modalEl.html(this.buildTemplate(this.template, c)), this.$el.html(this.modalEl), this.viewContainer ? (this.viewContainerEl = this.modalEl.find(this.viewContainer), this.viewContainerEl.addClass("" + this.prefix + "-modal__views")) : this.viewContainerEl = this.modalEl, e.$(":focus").blur(), (null != (d = this.views) ? d.length : void 0) > 0 && this.showViewOnRender && this.openAt(a), "function" == typeof this.onRender && this.onRender(), this.delegateModalEvents(), this.$el.fadeIn && this.animate ? (this.modalEl.css({ opacity: 0 }), this.$el.fadeIn({
          duration: 100,
          complete: this.rendererCompleted
        })) : this.rendererCompleted(), this
      }, g.prototype.rendererCompleted = function () {
        var a;
        return this.keyControl && (e.$("body").on("keyup.bbm", this.checkKey), this.$el.on("mouseup.bbm", this.clickOutsideElement), this.$el.on("click.bbm", this.clickOutside)), this.modalEl.css({ opacity: 1 }).addClass("" + this.prefix + "-modal--open"), "function" == typeof this.onShow && this.onShow(), null != (a = this.currentView) && "function" == typeof a.onShow ? a.onShow() : void 0
      }, g.prototype.setUIElements = function () {
        var a;
        if (this.template = this.getOption("template"), this.views = this.getOption("views"), null != (a = this.views) && (a.length = b.size(this.views)), this.viewContainer = this.getOption("viewContainer"), this.animate = this.getOption("animate"), b.isUndefined(this.template) && b.isUndefined(this.views)) throw new Error("No template or views defined for Backbone.Modal");
        if (this.template && this.views && b.isUndefined(this.viewContainer)) throw new Error("No viewContainer defined for Backbone.Modal")
      }, g.prototype.getOption = function (a) {
        return a ? this.options && d.call(this.options, a) >= 0 && null != this.options[a] ? this.options[a] : this[a] : void 0
      }, g.prototype.serializeData = function () {
        var a;
        return a = {}, this.model && (a = b.extend(a, this.model.toJSON())), this.collection && (a = b.extend(a, { items: this.collection.toJSON() })), a
      }, g.prototype.delegateModalEvents = function () {
        var a, c, d, e, f, g, h;
        this.active = !0, a = this.getOption("cancelEl"), f = this.getOption("submitEl"), f && this.$el.on("click", f, this.triggerSubmit), a && this.$el.on("click", a, this.triggerCancel), h = [];
        for (c in this.views) b.isString(c) && "length" !== c ? (d = c.match(/^(\S+)\s*(.*)$/), g = d[1], e = d[2], h.push(this.$el.on(g, e, this.views[c], this.triggerView))) : h.push(void 0);
        return h
      }, g.prototype.undelegateModalEvents = function () {
        var a, c, d, e, f, g, h;
        this.active = !1, a = this.getOption("cancelEl"), f = this.getOption("submitEl"), f && this.$el.off("click", f, this.triggerSubmit), a && this.$el.off("click", a, this.triggerCancel), h = [];
        for (c in this.views) b.isString(c) && "length" !== c ? (d = c.match(/^(\S+)\s*(.*)$/), g = d[1], e = d[2], h.push(this.$el.off(g, e, this.views[c], this.triggerView))) : h.push(void 0);
        return h
      }, g.prototype.checkKey = function (a) {
        if (this.active) switch (a.keyCode) {
          case 27:
            return this.triggerCancel(a);
          case 13:
            return this.triggerSubmit(a)
        }
      }, g.prototype.clickOutside = function () {
        var a;
        return (null != (a = this.outsideElement) ? a.hasClass("" + this.prefix + "-wrapper") : void 0) && this.active ? this.triggerCancel() : void 0
      }, g.prototype.clickOutsideElement = function (a) {
        return this.outsideElement = e.$(a.target)
      }, g.prototype.buildTemplate = function (a, c) {
        var d;
        return (d = "function" == typeof a ? a : b.template(e.$(a).html()))(c)
      }, g.prototype.buildView = function (a, c) {
        var d;
        if (a) return c && b.isFunction(c) && (c = c()), b.isFunction(a) ? (d = new a(c || this.args[0]), d instanceof e.View ? {
          el: d.render().$el,
          view: d
        } : { el: a(c || this.args[0]) }) : { view: a, el: a.$el }
      }, g.prototype.triggerView = function (a) {
        var c, d, e, f, g, h, i;
        if (null != a && "function" == typeof a.preventDefault && a.preventDefault(), f = a.data, d = this.buildView(f.view, f.viewOptions), this.currentView && (this.previousView = this.currentView, !(null != (i = f.openOptions) ? i.skipSubmit : void 0))) {
          if (("function" == typeof (g = this.previousView).beforeSubmit ? g.beforeSubmit(a) : void 0) === !1) return;
          "function" == typeof (h = this.previousView).submit && h.submit()
        }
        this.currentView = d.view || d.el, c = 0;
        for (e in this.views) f.view === this.views[e].view && (this.currentIndex = c), c++;
        return f.onActive && (b.isFunction(f.onActive) ? f.onActive(this) : b.isString(f.onActive) && this[f.onActive].call(this, f)), this.shouldAnimate ? this.animateToView(d.el) : (this.shouldAnimate = !0, this.$(this.viewContainerEl).html(d.el))
      }, g.prototype.animateToView = function (a) {
        var b, c, d, f, g, h, i;
        return f = {
          position: "relative",
          top: -9999,
          left: -9999
        }, g = e.$("<tester/>").css(f), g.html(this.$el.clone().css(f)), 0 !== e.$("tester").length ? e.$("tester").replaceWith(g) : e.$("body").append(g), b = g.find(this.viewContainer ? this.viewContainer : "." + this.prefix + "-modal"), b.removeAttr("style"), d = b.outerHeight(), b.html(a), c = b.outerHeight(), d === c ? (this.$(this.viewContainerEl).html(a), "function" == typeof (h = this.currentView).onShow && h.onShow(), null != (i = this.previousView) && "function" == typeof i.destroy ? i.destroy() : void 0) : this.animate ? (this.$(this.viewContainerEl).css({ opacity: 0 }), this.$(this.viewContainerEl).animate({ height: c }, 100, function (b) {
          return function () {
            var c, d;
            return b.$(b.viewContainerEl).css({ opacity: 1 }).removeAttr("style"), b.$(b.viewContainerEl).html(a), "function" == typeof (c = b.currentView).onShow && c.onShow(), null != (d = b.previousView) && "function" == typeof d.destroy ? d.destroy() : void 0
          }
        }(this))) : this.$(this.viewContainerEl).css({ height: c }).html(a)
      }, g.prototype.triggerSubmit = function (a) {
        var b, c;
        return null != a && a.preventDefault(), e.$(a.target).is("textarea") || this.beforeSubmit && this.beforeSubmit(a) === !1 || this.currentView && this.currentView.beforeSubmit && this.currentView.beforeSubmit(a) === !1 ? void 0 : this.submit || (null != (b = this.currentView) ? b.submit : void 0) || this.getOption("submitEl") ? (null != (c = this.currentView) && "function" == typeof c.submit && c.submit(), "function" == typeof this.submit && this.submit(), this.regionEnabled ? this.trigger("modal:destroy") : this.destroy()) : this.triggerCancel()
      }, g.prototype.triggerCancel = function (a) {
        return null != a && a.preventDefault(), this.beforeCancel && this.beforeCancel() === !1 ? void 0 : ("function" == typeof this.cancel && this.cancel(), this.regionEnabled ? this.trigger("modal:destroy") : this.destroy())
      }, g.prototype.destroy = function () {
        var a;
        return e.$("body").off("keyup.bbm", this.checkKey), this.$el.off("mouseup.bbm", this.clickOutsideElement), this.$el.off("click.bbm", this.clickOutside), e.$("tester").remove(), "function" == typeof this.onDestroy && this.onDestroy(), this.shouldAnimate = !1, this.modalEl.addClass("" + this.prefix + "-modal--destroy"), a = function (a) {
          return function () {
            var b;
            return null != (b = a.currentView) && "function" == typeof b.remove && b.remove(), a.remove()
          }
        }(this), this.$el.fadeOut && this.animate ? (this.$el.fadeOut({ duration: 200 }), b.delay(function () {
          return a()
        }, 200)) : a()
      }, g.prototype.openAt = function (a) {
        var c, d, e, f, g;
        b.isNumber(a) ? c = a : b.isNumber(a._index) && (c = a._index), e = 0;
        for (f in this.views) if ("length" !== f) if (b.isNumber(c)) e === c && (g = this.views[f]), e++;
        else if (b.isObject(a)) for (d in this.views[f]) a[d] === this.views[f][d] && (g = this.views[f]);
        return g && (this.currentIndex = b.indexOf(this.views, g), this.triggerView({ data: b.extend(g, { openOptions: a }) })), this
      }, g.prototype.next = function (a) {
        return null == a && (a = {}), this.currentIndex + 1 < this.views.length ? this.openAt(b.extend(a, { _index: this.currentIndex + 1 })) : void 0
      }, g.prototype.previous = function (a) {
        return null == a && (a = {}), this.currentIndex - 1 < this.views.length - 1 ? this.openAt(b.extend(a, { _index: this.currentIndex - 1 })) : void 0
      }, g
    }(e.View), e.Modal = f, e.Modal
  })
}).call(this);