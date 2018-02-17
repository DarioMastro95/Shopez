$(document).ready(function() {
  $(this).scrollTop(0);
  $('#logonav').mouseenter(function() {
    var me = this;
    this.style.webkitAnimation = 'none';
    setTimeout(function() {
      me.style.webkitAnimation = '';
    }, 10);
  });
  $('#basso').mouseenter(function() {
    $('#basso').addClass('animated pulse');
    var me = this;
    this.style.webkitAnimation = 'none';
    setTimeout(function() {
      me.style.webkitAnimation = '';
    }, 10);
  });
  $('#medio').mouseenter(function() {
    $('#medio').addClass('animated pulse');
    var me = this;
    this.style.webkitAnimation = 'none';
    setTimeout(function() {
      me.style.webkitAnimation = '';
    }, 10);
  });
  $('#top').mouseenter(function() {
    $('#top').addClass('animated pulse');
    var me = this;
    this.style.webkitAnimation = 'none';
    setTimeout(function() {
      me.style.webkitAnimation = '';
    }, 10);
  });
  $('#smart').mouseenter(function() {
    $('#smart').addClass('animated pulse');
    var me = this;
    this.style.webkitAnimation = 'none';
    setTimeout(function() {
      me.style.webkitAnimation = '';
    }, 10);
  });
  $('#pc').mouseenter(function() {
    $('#pc').addClass('animated pulse');
    var me = this;
    this.style.webkitAnimation = 'none';
    setTimeout(function() {
      me.style.webkitAnimation = '';
    }, 10);
  });
  $('#camera').mouseenter(function() {
    $('#camera').addClass('animated pulse');
    var me = this;
    this.style.webkitAnimation = 'none';
    setTimeout(function() {
      me.style.webkitAnimation = '';
    }, 10);
  });
  $('#cripto').mouseenter(function() {
    $('#cripto').addClass('animated pulse');
    var me = this;
    this.style.webkitAnimation = 'none';
    setTimeout(function() {
      me.style.webkitAnimation = '';
    }, 10);
  });
  $('#hard').mouseenter(function() {
    $('#hard').addClass('animated pulse');
    var me = this;
    this.style.webkitAnimation = 'none';
    setTimeout(function() {
      me.style.webkitAnimation = '';
    }, 10);
  });
  $('#droni').mouseenter(function() {
    $('#droni').addClass('animated pulse');
    var me = this;
    this.style.webkitAnimation = 'none';
    setTimeout(function() {
      me.style.webkitAnimation = '';
    }, 10);
  });
  $('.picture').mouseenter(function() {
    $('.picture').addClass('animated pulse');
    var me = this;
    this.style.webkitAnimation = 'none';
    setTimeout(function() {
      me.style.webkitAnimation = '';
    }, 10);
  });
  $('#logonav').addClass('animated pulse');

});

var cls = document.getElementsByClassName('caratteristica');
Array.from(cls).forEach(function(v) {
  v.addEventListener("mouseenter", function() {
    this.style.background = "#8eff82";
  });
  v.addEventListener("mouseleave", function() {
    this.style.background = "inherit";
  });
});

/// affix Bootstrap

+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)

    this.$target = $(this.options.target)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      = null
    this.unpin        = null
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.VERSION  = '3.3.6'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  }

  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
    var scrollTop    = this.$target.scrollTop()
    var position     = this.$element.offset()
    var targetHeight = this.$target.height()

    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

    if (this.affixed == 'bottom') {
      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
    }

    var initializing   = this.affixed == null
    var colliderTop    = initializing ? scrollTop : position.top
    var colliderHeight = initializing ? targetHeight : height

    if (offsetTop != null && scrollTop <= offsetTop) return 'top'
    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

    return false
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$target.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var height       = this.$element.height()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom
    var scrollHeight = Math.max($(document).height(), $(document.body).height())

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

    if (this.affixed != affix) {
      if (this.unpin != null) this.$element.css('top', '')

      var affixType = 'affix' + (affix ? '-' + affix : '')
      var e         = $.Event(affixType + '.bs.affix')

      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      this.affixed = affix
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

      this.$element
        .removeClass(Affix.RESET)
        .addClass(affixType)
        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
    }

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - height - offsetBottom
      })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.affix

  $.fn.affix             = Plugin
  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }

  $(window).on('scroll', function() {
    //art1
    var poswind = $(window).scrollTop();
    var posrow = $('#primariga').offset().top;
    var heightrow = $('#primariga').height();
    var rowbottom = $('#primariga').offset().top + heightrow;
    var fixdivbottom = $('.fixdiv').offset().top + $('.fixdiv').height();
    //art2
    var poswind1 = $(window).scrollTop()+ $('#secondariga').height();
    var posrow1 = $('#secondariga').offset().top+posrow;
    var heightrow1 = $('#secondariga').height();
    var rowbottom1 = $('#secondariga').offset().top + heightrow;
    var fixdivbottom1 = $('.fixdiv1').offset().top + $('.fixdiv1').height();
    if((poswind>posrow)&&(fixdivbottom<=rowbottom)){
      console.log('work1');
      $('.fixdiv').css('position','fixed');
      $('.fixdiv').each(function() {
        var $spy = $(this)
        var data = $spy.data()

        data.offset = data.offset || {}

        if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
        if (data.offsetTop != null) data.offset.top = data.offsetTop

        Plugin.call($spy, data)
      })
    }
    else{
      $('.fixdiv').css('position','sticky');
      //console.log('stop1');
    }
    if((poswind>posrow1)&&(fixdivbottom1<=rowbottom1)){
      console.log('work2');
      $('.fixdiv1').css('position','fixed');
      $('.fixdiv1').each(function() {
        var $spy = $(this)
        var data = $spy.data()

        data.offset = data.offset || {}

        if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
        if (data.offsetTop != null) data.offset.top = data.offsetTop

        Plugin.call($spy, data)
      })
    }
    else{
      $('.fixdiv1').css('position','sticky');
      console.log('stop2');
    }
  })

  }(jQuery);

  $('[data-spy="affix"]').on('affixed.bs.affix', function () {
             // from http://stackoverflow.com/questions/6551429/adjust-a-width-based-on-parent-w-jquery
             $(".affix").css("width",$(".affix").parent().css("width").replace('px','') - 30);
         })
