//require.config别名配置
requirejs.config({	
	//paths ：path映射那些不直接放置于baseUrl下的模块名。设置path时起始位置是相对于baseUrl的，
    paths: {
        jquery: 'jquery-1.11.0.min',
 
    }   
});


//require()函数接受两个参数。
//第一个参数是一个数组，表示所依赖的模块，上例就是['moduleA', 'moduleB', 'moduleC']，即主模块依赖这三个模块；
//第二个参数是一个回调函数，当前面指定的模块都加载成功后，它将被调用。加载的模块会以参数形式传入该函数，从而在回调函数内部就可以使用这些模块。
//require()异步加载moduleA，moduleB和moduleC，浏览器不会失去响应；它指定的回调函数，只有前面的模块都加载成功后，才会运行，解决了依赖性的问题
requirejs(['jquery','backtop'],function($,backtop){	
	
	new backtop.BackTop($('#backTop'),{
		mode:'move'
	});

});