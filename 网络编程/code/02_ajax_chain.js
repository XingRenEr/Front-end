var artical = '';
$.get('./p1.txt', function(p1) {
  artical += p1 + '<br />';
  $.get('./p2.txt', function(p2) {
    artical += p2 + '<br />';
    $.get('./p3.txt', function(p3) {
      artical += p3 + '<br />';
      $.get('./p4.txt', function(p4) {
        artical += p4 + '<br />';
        $('p').html(artical);
      })
    })
  })
})