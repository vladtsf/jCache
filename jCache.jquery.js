(function($, undefined) {  
  //TODO: Solve problem with context!!!!
  //TODO: Fix bug with element list in context
  var
    jCache = function(selector, context) {
      var 
        $this = $(this),
        se     = selector || false,
        co     = context  || false;
      if(selector) {
        return jCache.get(se, co);
      }
      return this;
    };


  $.extend(jCache, {
    'get'               : function(selector, context) {
      if(typeof(selector) == 'string') {
        if(context) {
          var _context = jCache.get(context);
          if(jCache.objectsCollection[context][selector] === undefined) {
            for(var i in _context) {
              //BUG WITH NodeList
              jCache.objectsCollection[context][selector] = jCache.query(selector, _context[0]);
            }
          }
          return jCache.objectsCollection[context][selector];
        } else {
          if(jCache.objectsCollection[selector] === undefined) {
            jCache.objectsCollection[selector] = {};
            if(jCache.objectsCollection[selector]['_object'] === undefined) {
              jCache.objectsCollection[selector]['_object'] = jCache.query(selector);
            }
          }
          return jCache.objectsCollection[selector]['_object'];
        }
      }
      return selector
    },
    'clear'             : function(object) {

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