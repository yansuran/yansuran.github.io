/*
 *@Description:
 *@Modify: yankaipan
*/
;(function($){
	$.fn.extend({
		"PopupDialog" : function(options){
			var defaults = {
				popupClass:'',
				maskLayer:true,
				delayClose:null, //设置延时自动关闭时间(取值为自然数)
                callback : function(){} //callback 自动关后
			};
            var options  = $.extend(true,defaults,options);

            this.each(function(){
                var _this = $(this),
                    _popupWidth = $(options.popupClass).outerWidth(),
                    _popupHeight = $(options.popupClass).outerHeight(),
                    _winScrollTop = $(window).scrollTop(),
                    _winHeight = $(window).height(),
                    _docHeight = $(document).height(),
                    _InterValObj ;

                var S={
                    init:function(){
                        var caclTop = (_winHeight-_popupHeight)/2+_winScrollTop ,
                            _tops = caclTop  <_winScrollTop ? _winScrollTop : caclTop ;
                        $(options.popupClass).css({
                            marginLeft:-(_popupWidth/2),
                            top:_tops,
                            display:"block"
						});
						$(".pop_close",options.popupClass).unbind("click").bind("click" , S.layerClose );
                        if(options.maskLayer){ S.maskModel(); };
                        if(options.delayClose!=null){ S.delayModel(); };
                    },
                    maskModel:function(){
                        $(options.popupClass).after("<div class='popup_mask'></div>");
                        $(".popup_mask").css("height",_docHeight);
                        if (/msie\s+[5-6]\./i.test(window.navigator.userAgent)){
                            $(".popup_mask").after("<iframe class='popup_iframe' frameborder='0'></iframe>");
                            $(".popup_iframe").css("height",_docHeight);
                        }
                    },
                    layerClose:function(){
                        window.clearInterval(_InterValObj);
                        $(options.popupClass).hide();
                        $(".popup_mask").remove();
                        $(".popup_iframe").remove();
                    },

                    delayModel:function(){
                        $('.delayClose' , options.popupClass).text(options.delayClose);
                        var curCount = options.delayClose;
                         _InterValObj = setInterval(function(){
                            if(curCount==1){
                                window.clearInterval(_InterValObj);
                                S.layerClose();
                                options.callback();
                            }else{
                                curCount-- ;
                                $('.delayClose' , options.popupClass).text(curCount);
                            }
                        } ,1000);
                    }

                };
                S.init();

            });
            return this;
		}
	});
})(jQuery);
