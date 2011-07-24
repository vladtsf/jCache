(function($, undefined) {
  $(document).ready(function() {
    test('jCache', function() {
      
      deepEqual($().jCache('div').get(), $('div').get(), 'Simple selector test');
      deepEqual($().jCache('.test-data div').get(), $('.test-data div').get(), 'Deep');
      deepEqual($().jCache('div', '#div').get(), $('div', '#div').get(), 'Element name & context');
      deepEqual($().jCache('div', '#div, #div2').get(), $('div', '#div, #div2').get(), 'If context is multitude');

    });
  });
})(jQuery);
