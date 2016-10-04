
(function(){
	

  var $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    // Do something else, like open/close menu
		$('.test').toggleClass('active');
  });
$('.about-arrow').on('click', function(){
	$('.about-li').toggleClass('show-li');
});
$('.coaching-arrow').on('click', function(){
	$('.coach-li').toggleClass('show-li');
});
	
})();