;(function(){
	$.extend($.fn,{
		dragDialogBox:function(options){//拖拽控件
			var defaults={
				dragClassName:null,
				dragContent:null,
				callback:function(){}
			};
			var options  = $.extend(true,defaults,options);
			this.each(function(){
				var self=this,
					$drag=$('.'+options.dragClassName,self);
				var S={
					init:function(){
						$drag.css('cursor','move');
						this.left=null;
						this.top=null;
						this.startX=null;
						this.startY=null;
						$drag.unbind('mousedown').bind('mousedown',this.mousedownDialogBox).find('img').mousedown(function(){
							return false;	
						});			
					},
					mousedownDialogBox:function(e){
						e.stopPropagation();
						$('body',self).css({'-moz-user-select':'none','-o-user-select':'none','user-select':'none'});
						S.left=parseFloat(options.dragContent.css('margin-left'));
						S.top=parseFloat(options.dragContent.css('margin-top'));
						S.startX=e.pageX;
						S.startY=e.pageY;
						$(document).bind({
							'mousemove':S.mousemoveDialogBox,
							'mouseup':S.mouseupDialogBox,
							'selectstart':S.selectstartDialogBox,
							'selectable':'on'
						});
					},
					mousemoveDialogBox:function(e){
						e.stopPropagation();
						var left=S.left+e.pageX-S.startX,
							top=S.top+e.pageY-S.startY;
						options.dragContent.css({'margin-left':left,'margin-top':top});	
						options.callback();
					},
					mouseupDialogBox:function(){
						$('body',self).css({'-moz-user-select':'text','-o-user-select':'text','user-select':'text'});
						$(document).bind('selectable','off').unbind({
							'mousemove':S.mousemoveDialogBox,
							'selectstart':S.selectstartDialogBox
						});	
					},
					selectstartDialogBox:function(){
						return false;	
					}
				};
				S.init();	
			});
			return this;	
		}	
	});	
})(jQuery);