/*
 *  jCache - Simple and functional cache for jQuery objects
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
(function($, w, undefined) {
    
    /**
     * Creates instance of jCache
     * 
     * @constructor
     */
    var jCache = function() {
	if(this instanceof jCache) {
	    this.cache = new Object();
	    
	    var 
		proxy = $.proxy(this.get, this);
	    
	    proxy.remove = $.proxy(jCache.mixin.remove, this);
	    proxy.clear = $.proxy(jCache.mixin.clear, this);
	    
	    return proxy;
	}
	return new jCache();
    };
    
    /**
     * Converts arguments object to array
     */
    jCache.getArgs = function(args) {
	return Array.prototype.slice.call(args);
    };
    
    jCache.mixin = {
	/**
	 * Removes element from cache
	 * 
	 * @example
	 *	$c.remove('div');
	 */
	remove : function() {
	    var args = jCache.getArgs(arguments);
	    
	    if(this.cache[args]) {
		delete this.cache[args];
	    }
	    
	    return this;
	},
	
	/**
	 * Clear cache
	 * 
	 * @example
	 *	$c.clear();
	 */
	clear : function() {
	    this.cache = new Object();
	    return this;
	}
    };
	
    
    jCache.prototype = {
	
	get: function() {
	    var args = jCache.getArgs(arguments);
	    
	    if(!this.cache[args]) {
		this.cache[args] = $.apply(w, args);
	    }
	    
	    return this.cache[args];
	}
	
    };
    
    /**
     * Simple and functional jQuery objects cache
     * @name $.jCache
     * @example
     *	    var $c = new $.jCache();
     *	    $c('div').fadeToggle(500);
     */
    $.jCache = jCache;
    
})(jQuery, window);