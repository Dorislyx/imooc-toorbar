
//requirejs通过define()定义模块,在此模块内的方法和变量外部是无法访问的，只有通过return返回才行.
define(['jquery'],function($){
	
	//oop面向对象：构造函数+原型=混合模式
	/*
	   function 构造函数(){
		this.属性
       }
                构造函数.原型.方法 = function(){};
	  var 对象1 = new 构造函数();
	      对象1.方法();
	 */
	function ScrollTo(opts){
		this.opts = $.extend({},ScrollTo.DEFAULTS,opts); 
		this.$el = $('html,body');
	};	
	
	//父类:运动返回
	ScrollTo.prototype.move = function(){
		var opts = this.opts;
	 	if($(window).scrollTop()!= this.opts.dest){ //目的地
	 		if(!this.$el.is(':animated')){ // 判断是否运动中
	 			this.$el.animate({scrollTop:opts.dest},opts.speed);
	 		}
		}
	};
	
	//父类：直接返回
	ScrollTo.prototype.go = function(){
	 	if($(window).scrollTop()!= this.opts.dest){ //目的地
	 		this.$el.scrollTop(this.opts.dest);	
		}
	};
	
	//默认参数
	ScrollTo.DEFAULTS = {
		dest:0,//目的地
		speed:800//运动的速度
	};
	
	//define()定义模块在此模块内的方法和变量外部是无法访问的，只有通过return返回才行.
	return{
		ScrollTo:ScrollTo
	};
	
});