/*
 *  jCache - Fast and functional cache for jQuery objects
 *  Copyright (C) 2011  Vladimir Tsvang
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see http://www.gnu.org/licenses/.
 */
(function($, undefined) {  
  var 
  jCache = function(selector, context) {
    var 
      se     = selector || false,
      co     = context  || false;
    if(selector) {
      return jCache.get(se, co);
    }
    return jCache;
  };

  jCache['clear'] = function(selector, context) {
    if(selector == undefined) {
      jCache.objectsCollection = new Object();
      return;
    }
    if(context) {
      if(jCache.objectsCollection[context] !== undefined) {
        if(jCache.objectsCollection[context][selector] !== undefined) {
          jCache.objectsCollection[context][selector] = undefined;
        }
      }
    } else {
      jCache.objectsCollection[selector] = undefined;
    }
  };

  jCache['get'] = function(selector, context) {
    if(typeof(selector) == 'string') {
      if(context) {
        if(context.length == 0) {
          return $();
        }
        var _context = jCache.get(context);
        if(jCache.objectsCollection[context][selector] === undefined) {
          jCache.objectsCollection[context][selector] = $(selector, _context);
        }
        return jCache.objectsCollection[context][selector];
      } else {
        if(jCache.objectsCollection[selector] === undefined) {
          jCache.objectsCollection[selector] = new Object();
          if(selector instanceof jQuery) {
            return selector;
          }
          if(jCache.objectsCollection[selector]['_object'] === undefined) {
            jCache.objectsCollection[selector]['_object'] = $(selector);
          }
        }
        return jCache.objectsCollection[selector]['_object'];
      }
    }
    if(context) {
      return $(selector, context);
    } else {
      if(jCache.objectsCollection[selector] == undefined) {
        jCache.objectsCollection[selector] = new Object();
      }
      return jCache.objectsCollection[selector]['_object'] = $(selector);
    }
  };
    
  jCache['objectsCollection'] = new Object();
  
  window['jCache'] = jCache;
  
})(jQuery);