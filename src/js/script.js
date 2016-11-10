$(document).ready(function() {

	//  Менюшка
	$('.nav__burger').on('click', function () {
		var nav = $('.nav__list');

		nav.show('slow');
	});

	//  Вкладки
	(function($){				
	    jQuery.fn.lightTabs = function(options){
	        
	        var createTabs = function(){
	            tabs = this;
	            i = 0;
	            
	            showPage = function(i){
	                $(tabs).children(".tabs__content").hide();
	                $(tabs).children(".tabs__content").eq(i).show();
	                $(tabs).children(".tabs__list").children(".tabs__item").removeClass("active");
	                $(tabs).children(".tabs__list").children(".tabs__item").eq(i).addClass("active");
	            }
	            
	            showPage(0);				
	            
	            $(tabs).children(".tabs__list").children(".tabs__item").each(function(index, element){
	                $(element).attr("data-page", i);
	                i++;                     
	            });
	            
	            $(tabs).children(".tabs__list").children(".tabs__item").click(function(){
	                showPage(parseInt($(this).attr("data-page")));
	            });				
	        };		
	        return this.each(createTabs);
	    };	
	})(jQuery);

	$(".tabs").lightTabs();
});