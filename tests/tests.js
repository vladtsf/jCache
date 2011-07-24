(function($, undefined) {
  $(document).ready(function() {
    test('jCache', function() {
      
      deepEqual($().jCache('div').get(), $('div').get(), 'Simple selector test');
      deepEqual($().jCache('.test-data div').get(), $('.test-data div').get(), 'Deep');
      deepEqual($().jCache('div', '#div').get(), $('div', '#div').get(), 'Element name & context');
      deepEqual($().jCache('div', '#div, #div2').get(), $('div', '#div, #div2').get(), 'If context is multitude');
      
      console.time('Average speed with cache');
        for(var i = 0; i < 1000; i++) {
          $().jCache('div');
        }
      console.timeEnd('Average speed with cache');
      console.time('Average speed without cache');
        for(var j = 0; j < 1000; j++) {
          $('div');
        }
      console.timeEnd('Average speed without cache');

    });
  });
})(jQuery);
