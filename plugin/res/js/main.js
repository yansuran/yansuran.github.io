
   var yJsPlugin ={
           yJsMenu:function(){
               var _yJsMenu = $('.yJs_menu'),
                   _yJsUl = _yJsMenu.children('.ym_item'),
                   _yJsList = _yJsMenu.children('.ym_list'),
                   _yJsMain = $('.yJs_main');

               _yJsUl.children('li').on('mouseover' , function(){
                   var _this = $(this),
                       _tips = _this.attr('data-tip');
                   _this.addClass('cur').siblings().removeClass('cur');
                   if( _tips !== undefined){
                       _yJsList.show().find('li[data-tip='+_tips+']').fadeIn().siblings().hide();
                       _yJsMain.addClass('blur');
                   }else{
                       _yJsMain.removeClass('blur');
                       _yJsList.hide().find('li').hide();
                   }
               });
               _yJsMenu.on('mouseleave' , hideMenu);
               _yJsList.find('a').on('click' , hideMenu );
               function hideMenu() {
                   _yJsUl.children('li').removeClass('cur');
                   _yJsList.hide().find('li').hide();
                   _yJsMain.removeClass('blur');
               };

           },
           yJsfix:function(){
               if($('.fly_top').length<=0){
                   $('body').append('<div class="iconfont fly_top">&#xe615;</div>');
               };
               var  _yJsMenu = $('.yJs_menu'),
                   Htop = _yJsMenu.offset().top ,
                   gotop = $('.fly_top');
               $(window).on('scroll' , function(){
                   var Wscr = $(this).scrollTop();
                   Wscr>=Htop ? _yJsMenu.addClass('fix') :  _yJsMenu.removeClass('fix') ;
                   Wscr>0?gotop.show():gotop.hide();
               });
               gotop.click(function(){
                   $('html,body').animate({'scrollTop':0},100);
               });

          },
         init:function(){
              this.yJsMenu();
              this.yJsfix()
         }
   };

   yJsPlugin.init();











