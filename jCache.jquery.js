(function($, undefined) {  
  //TODO: Solve problem with context!!!!
  var
    jCache = function(selector, context) {
      var 
        $this = $(this),
        se     = selector || false,
        co     = context  || false;
      if(jCache.isObjectPassed($this)) {
        jCache.set($this, $this);
      } else {
        if(selector) {
          return jCache.get(se, co);
        }
      }
      return this;
    };


  $.extend(jCache, {
    'get'               : function(selector, context) {
      if(selector in jCache.objectsCollection) {
        return jCache.objectsCollection[selector];
      }
      var iks = [selector,context];
      return jCache.set(selector, jCache.query(selector, context));
    },
    'clear'             : function(object) {

    },
    'set'               : function(key, value) {
      return jCache.objectsCollection[key] = value;
    },
    'query'             : function(object, context, incontext) {
      var 
        o = object  || false,
        c = context || false;
      if(o) {
        if(jCache.QSA) {
          if(typeof(o) == 'string') {
            var cont = document;
            if(c) {
              cont = jCache.query(c, false, true);
              if(cont.length === 0) {
                return [];
              }
            }
            if(! incontext) {
              return cont.querySelectorAll(o);
            }
            return cont.querySelector(o);
          } else {
            return o;
          }
        } else {
          return $(object, context).get();
        }
      }
      return [];
    },
    'isObjectPassed'    : function(who) {
      if(who.selector == '' & who.length == 0) {
        return false;
      }
      return true;
    },
    'objectsCollection' : new Object(),
    'QSA'               : 'querySelectorAll' in document

  });


  jCache.objectsCollection = {};
  $.fn.jCache = jCache;
})(jQuery);