(function($, undefined) {  
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
          if(context.length == 0) {
            return $();
          }
          var _context = jCache.get(context);
          if(jCache.objectsCollection[context][selector] === undefined) {
              jCache.objectsCollection[context][selector] = jCache.query(selector, _context);
          }
          return jCache.objectsCollection[context][selector];
        } else {
          if(jCache.objectsCollection[selector] === undefined) {
            jCache.objectsCollection[selector] = {};
            if(selector instanceof jQuery) {
              return selector;
            }
            if(jCache.objectsCollection[selector]['_object'] === undefined) {
              jCache.objectsCollection[selector]['_object'] = jCache.query(selector);
            }
          }
          return jCache.objectsCollection[selector]['_object'];
        }
      }
      if(context) {
        return $(selector, context);
      } else {
        if(jCache.objectsCollection[selector] == undefined) {
          jCache.objectsCollection[selector] = {};
        }
        return jCache.objectsCollection[selector]['_object'] = $(selector);
      }
    },
    
    
    
    'clear'             : function(object) {

    },
    
    
    
    'query'             : function(object, context, incontext) {
      var 
        c = context || document;
      return $(object, c);
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