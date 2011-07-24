#jCache# - Fast and functional cache for jQuery object
##DISCLAIMER##
WARNING! jCache is still under development! Use it at your own risc!
##Examples##
jQuery plugin
`(function($, $c, undefined) {
    $.fn.foo = function() {
      $c('a').css('color', '#f00');
    };
 });`
Global Scope
`jQuery(document).ready(function() {
  jCache('a').css('color', '#f00');
});`
