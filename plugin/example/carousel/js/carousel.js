
;(function($){
	
	$.extend($,{
		BCacheLoadPic:function(options){//缓存图片
			var defaults={
				src:null,
				param:null,
				callback:function(){}
			};
			var options  = $.extend(true,defaults,options);
			var img = new Image();
			$(img).load(function() {
				options.callback(options.src,this.width,this.height,options.param);
			}).attr("src",options.src);	
		}			
	});
	
	$.extend($.fn,{
		BsliderBox:function(options){
			var defaults={
				time:4000,
				auto:true,
				className:'current',
				callback:function(){}
			};
			var options  = $.extend(true,defaults,options);
			this.each(function(){
				var self=this,
					B=$(self).attr('data-pic').split('|'),
					A=$(self).attr('data-links').split('|'),
					$container=$(self).children(),
					index=0,
					n=B.length,
					w=$(self).width(),
					catchImgs=new Array(),
					adTimer;
				var S={
					init:function(){
						
						//console.log(B);
						//console.log(A);
						
						var sp='';
						for(var i=0;i<n;i++){
							sp+='<li></li>';
						};
						$container.html('<ul>'+sp+'</ul>');
						$.BCacheLoadPic({
							src:B[index], //image src
							param:A[index], //link
							callback:function(src,w,h,param){
								catchImgs[index]=true;
								$('li',$container).eq(index).html('<a href="'+param+'"><img src="'+src+'" width="'+w+'" height="'+h+'"></a>').fadeIn(function(){
									if(n>1){
										var str='';
										for(var i=0;i<n;i++){
											i==0?str+='<span class="ui-ico-bg ui-banner-number-btn '+options.className+'"></span>':str+='<span class="ui-ico-bg ui-banner-number-btn"></span>';
										};
										$(self).append('<div style="bottom:20px;left:50%;margin-left:-50px;" class="ui-banner-number">'+str+'</div>');
										$('.ui-banner-number-btn',self).unbind('mouseover').bind('mouseover',S.mouseoverOnSlide);
										if(options.auto){
											$(self).bind({
												'mouseover':S.clearSlideTime,
												'mouseout':S.autoSlideTime
											})/*.trigger('mouseleave')*/;
											S.autoSlideTime() 
										};
									};		
								});
							}	
						});
					},
					mouseoverOnSlide: function() {
						var $target=$(this);
						index=$target.index();
						if(!$target.hasClass(options.className)) {
							S.showSlideImage();
						};
					},
					showSlideImage:function(){
						if(catchImgs[index]==undefined){
							$.BCacheLoadPic({
								src:B[index],
								param:A[index],
								callback:function(src,w,h,param){
									catchImgs[index]=true;
									$('li',$container).eq(index).html('<a href="'+param+'"><img src="'+src+'" width="'+w+'" height="'+h+'"></a>');
									$('li',$container).stop(true,true).fadeOut(1200).eq(index).fadeIn(600,function(){
										options.callback();	
									});
								}	
							});
						}else{
							$('li',$container).stop(true,true).fadeOut(1200).eq(index).fadeIn(600,function(){
								options.callback();		
							});
						};
						$('.ui-banner-number-btn',self).removeClass(options.className).eq(index).addClass(options.className);
					},
					autoSlideTime:function(){
						adTimer=setInterval(function(){
							index++;
							if(index==n){
								index=0;
							};
							S.showSlideImage();
						},
						options.time);
					},
					clearSlideTime: function() {
						clearInterval(adTimer)
					}
				};
				S.init();	
			});
			return this;	
		}
	});
})(jQuery); 





