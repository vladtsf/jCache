#jCache - Fast and functional cache for jQuery object#
##DISCLAIMER##
WARNING! jCache is still under development! Use it at your own risc!
##Examples##
###jQuery plugin###
`(function($, $c, undefined) {\n
    $.fn.foo = function() {\n
      $c('a').css('color', '#f00');\n
    };\n
 });`
###Global Scope###
`jQuery(document).ready(function() {\n
  jCache('a').css('color', '#f00');\n
});`
