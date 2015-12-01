define(['jquery'],function($){
	//构造函数
	function ScrollTo(opts){
		this.opts = $.extend({},ScrollTo.DEFAULTS,opts); 
		this.$el = $('html,body');
	};	
	
	ScrollTo.prototype.move = function(){
		var opts = this.opts;
	 	if($(window).scrollTop()!= this.opts.dest){ //目的地
	 		if(!this.$el.is(':animated')){ // 判断是否运动中
	 			this.$el.animate({scrollTop:opts.dest},opts.speed);
	 		}
		}
	};
		 
	ScrollTo.prototype.go = function(){
	 	if($(window).scrollTop()!= this.opts.dest){ //目的地
	 		this.$el.scrollTop(this.opts.dest);	
		}
	};
	
	ScrollTo.DEFAULTS = {
		dest:0,
		speed:800
	};
	
	return{
		ScrollTo:ScrollTo
	}
});