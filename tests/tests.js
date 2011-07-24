(function($, $c,undefined) {
  $(document).ready(function() {
    
    module('jCache');
    
    test('Text Selectors', function() {
      
      expect(5);
      deepEqual($c('div').get(), $('div').get(), 'Simple selector test');
      deepEqual($c('.test-data div').get(), $('.test-data div').get(), 'Deep');
      deepEqual($c('div', '#div').get(), $('div', '#div').get(), 'Element name & context');
      deepEqual($c('div', '#div, #div2').get(), $('div', '#div, #div2').get(), 'If context is multitude');
      deepEqual($c('div', 'table').get(), $('div', 'table').get(), 'Empty context');
      
    });
    
    test('Object Selectors', function() {
      
      expect(6);
      deepEqual($c($('div'), '#div, #div2').get(), $($('div'), '#div, #div2').get(), 'jQuery Object instead of selector');
      deepEqual($c('div', $('#div, #div2')).get(), $('div', $('#div, #div2')).get(), 'jQuery Object instead of context');
      deepEqual($c($('div'), $('#div, #div2')).get(), $($('div'), $('#div, #div2')).get(), 'jQuery Object instead of selector and context');
      deepEqual($c($('div').get(), $('#div, #div2')).get(), $($('div').get(), $('#div, #div2')).get(), 'NodeElement instead of selector');
      deepEqual($c($('div'), $('#div, #div2').get()).get(), $($('div'), $('#div, #div2').get()).get(), 'NodeElement instead of context');
      deepEqual($c($('div'), $('#div, #div2')).get(), $($('div'), $('#div, #div2')).get(), 'jQuery Object instead of selector and context');

    });
    
  });
})(jQuery, jCache);
