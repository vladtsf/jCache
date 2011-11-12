#jCache - Simple and functional cache for jQuery objects#
##Examples##

	var $c = new $.jCache();
	var
	    $c1 = $c('.class1'),
	    $c2 = $c('.class2');
	$c
	    .remove('.class1')
	    .clear();
