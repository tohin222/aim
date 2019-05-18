$(function () {

  
    
	//    start of mininity part
	$('.minnty_footer').slick({
//		dots: true,
//		arrows: false,

		infinite: true,
        autoplay: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		speed: 1200,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
    },
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
    },
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
    }
     ]
	}); 
            
            
    });