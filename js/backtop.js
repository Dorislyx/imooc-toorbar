define(['jquery','scrollto'],function($,scrollto){
	//参数：
	//1：按钮参数
	//2:可选参数
	function BackTop(el,opts){
		
		this.opts = $.extend({},BackTop.DEFAULTS, opts);//用户传递进来的参数代替默认参数保存到空对象并返回给属性opts
		this.$el = $(el);//js对象转化为jquery对象
		
		this.scroll = new scrollto.ScrollTo({
			dest:0,
			speed:this.opts.speed
		});
		
		this._checkPosition();
		
		this.$el.on('click',$.proxy(this._move,this));//改变指向,为实例
		$(window).on('scroll',$.proxy(this._checkPosition,this));//改变指向,为实例
		
	};
	
	//默认参数
	BackTop.DEFAULTS = {
		mode:'move',//运动的方式:
		pos:$(window).height(),//初始位置:可视区域
		speed:800// 速度：800
	}
	
	BackTop.prototype._move = function(){
		this.scroll.move();
	}
	
	BackTop.prototype._go = function(){
		this.scroll.go();
	}
	
	BackTop.prototype._checkPosition = function(){
		if ($(window).scrollTop() > this.opts.pos) {
			this.$el.fadeIn(); // 淡入已隐藏的元素。
		} else{
			this.$el.fadeOut(); //淡出可见元素
		}
	}
	
	//define()定义模块在此模块内的方法和变量外部是无法访问的，只有通过return返回才行.
	return{
		BackTop:BackTop
	}
	
});