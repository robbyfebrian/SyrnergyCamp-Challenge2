$(".owl-carousel").owlCarousel({
  stagePadding: 400,
  margin: 50,
  center: true,
  loop: true,
  autoplay:true,
  autoplayTimeout:2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 1,
    },
  },
});

$('.bi .bi-chevron-right').click(function() {
  owl.trigger('next.owl.carousel');
})

$('.bi .bi-chevron-left').click(function() {
  owl.trigger('prev.owl.carousel');
})