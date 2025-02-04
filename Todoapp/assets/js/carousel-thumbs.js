/*! owl.carousel2.thumbs - v0.1.8 | (c) 2016 @gijsroge | MIT license | https://github.com/gijsroge/OwlCarousel2-Thumbs */
!function(a, b, c, d) {
    "use strict";
    var e = function(b) {
        this.owl = b,
        this._thumbcontent = [],
        this._identifier = 0,
        this.owl_currentitem = this.owl.options.startPosition,
        this.$element = this.owl.$element,
        this._handlers = {
            "prepared.owl.carousel": a.proxy(function(b) {
                if (!b.namespace || !this.owl.options.thumbs || this.owl.options.thumbImage || this.owl.options.thumbsPrerendered || this.owl.options.thumbImage) {
                    if (b.namespace && this.owl.options.thumbs && this.owl.options.thumbImage) {
                        var c = a(b.content).find("img");
                        this._thumbcontent.push(c)
                    }
                } else
                    a(b.content).find("[data-thumb]").attr("data-thumb") !== d && this._thumbcontent.push(a(b.content).find("[data-thumb]").attr("data-thumb"))
            }, this),
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && this.owl.options.thumbs && (this.render(),
                this.listen(),
                this._identifier = this.owl.$element.data("slider-id"),
                this.setActive())
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && "position" === a.property.name && this.owl.options.thumbs && (this._identifier = this.owl.$element.data("slider-id"),
                this.setActive())
            }, this)
        },
        this.owl.options = a.extend({}, e.Defaults, this.owl.options),
        this.owl.$element.on(this._handlers)
    };
    e.Defaults = {
        thumbs: !0,
        thumbImage: !1,
        thumbContainerClass: "owl-thumbs",
        thumbItemClass: "owl-thumb-item",
        moveThumbsInside: !1
    },
    e.prototype.listen = function() {
        var b = this.owl.options;
        b.thumbsPrerendered && (this._thumbcontent._thumbcontainer = a("." + b.thumbContainerClass)),
        a(this._thumbcontent._thumbcontainer).on("click", this._thumbcontent._thumbcontainer.children(), a.proxy(function(c) {
            this._identifier = a(c.target).closest("." + b.thumbContainerClass).data("slider-id");
            var d = a(c.target).parent().is(this._thumbcontent._thumbcontainer) ? a(c.target).index() : a(c.target).closest("." + b.thumbItemClass).index();
            b.thumbsPrerendered ? a("[data-slider-id=" + this._identifier + "]").trigger("to.owl.carousel", [d, b.dotsSpeed, !0]) : this.owl.to(d, b.dotsSpeed),
            c.preventDefault()
        }, this))
    }
    ,
    e.prototype.render = function() {
        var b = this.owl.options;
        b.thumbsPrerendered ? (this._thumbcontent._thumbcontainer = a("." + b.thumbContainerClass),
        b.moveThumbsInside && this._thumbcontent._thumbcontainer.appendTo(this.$element)) : this._thumbcontent._thumbcontainer = a("<div>").addClass(b.thumbContainerClass).appendTo(this.$element);
        var c;
        if (b.thumbImage)
            for (c = 0; c < this._thumbcontent.length; ++c)
                this._thumbcontent._thumbcontainer.append("<button class=" + b.thumbItemClass + '><img src="' + this._thumbcontent[c].attr("src") + '" alt="' + this._thumbcontent[c].attr("alt") + '" /></button>');
        else
            for (c = 0; c < this._thumbcontent.length; ++c)
                this._thumbcontent._thumbcontainer.append("<button class=" + b.thumbItemClass + ">" + this._thumbcontent[c] + "</button>")
    }
    ,
    e.prototype.setActive = function() {
        this.owl_currentitem = this.owl._current - this.owl._clones.length / 2,
        this.owl_currentitem === this.owl._items.length && (this.owl_currentitem = 0);
        var b = this.owl.options
          , c = b.thumbsPrerendered ? a("." + b.thumbContainerClass + '[data-slider-id="' + this._identifier + '"]') : this._thumbcontent._thumbcontainer;
        c.children().filter(".active").removeClass("active"),
        c.children().eq(this.owl_currentitem).addClass("active")
    }
    ,
    e.prototype.destroy = function() {
        var a, b;
        for (a in this._handlers)
            this.owl.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
            "function" != typeof this[b] && (this[b] = null)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.Thumbs = e
}(window.Zepto || window.jQuery, window, document);
