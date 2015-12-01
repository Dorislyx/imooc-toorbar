
requirejs.config({	
    paths: {
        jquery: 'jquery-1.11.0.min',
 
    }   
});


requirejs(['jquery','scrollto'],function($,scrollto){
	var scroll = new scrollto.ScrollTo({});	
	$('#backTop').on('click',$.proxy(scroll.move,scroll));
	
	$(window).on('scroll',function(){
		checkPosition($(window).height());
	});	
	checkPosition($(window).height());
	function checkPosition(pos){ //返回顶部按钮显示隐藏
		if ($(window).scrollTop() > pos) {
			$('#backTop').fadeIn(); // 淡入已隐藏的元素。
		} else{
			$('#backTop').fadeOut(); //淡出可见元素
		}
	};

});