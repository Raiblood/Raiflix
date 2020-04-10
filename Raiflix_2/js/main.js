$(document).ready(function() {
 console.log('works!!');
	 $('a').on('click', function(e) {
        e.preventDefault();
        alert('eooo-a');
	});
	$('.menu > ul > li a').on('click', function(e) {
    
        e.preventDefault();
        
       
	});


    
	$('ul li:has(ul)').hover(function(e) {
        $(this).find('ul').css({display: "block"});
        $(this).addClass("active");

    },
    function(e) {
        $(this).find('ul').css({display: "none"});
    });
    

});