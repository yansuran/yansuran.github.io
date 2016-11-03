;(function(){
	$.extend($.fn,{
		BSelect:function(options){//城市行业选择
			var defaults = {
				id:'ui-pop-'+new Date().getTime(),
				path:PATH,
				url:null,
				param:null,
				nameClass:'ui-name-select-container',
				codeClass:'ui-code-select-container',
				label:null,
				maxSelectNumber:null,//最多可选数量
				addAllSelect:true,
				separator:',',
				loadingHeight:200,
				group:[
					{width:600,columns:3},
					{width:300,columns:2},
					{width:300,columns:2},
					{width:150,columns:1},
					{width:150,columns:1},
					{width:150,columns:1},
					{width:150,columns:1},
					{width:150,columns:1}
				],
				imgbox:{
					icoBackground:'images/trade_ico.png',
					alphaBackground:'images/piel_master_1.png'
				},
				callback:function(){}
			};
			var options=$.extend(true,defaults,options); 
			this.each(function(){
				var self=this,
					$name=$('.'+options.nameClass,self),
					$code=$('.'+options.codeClass,self);
				var S={
					init:function(){
						$name.unbind('click').bind('click',this.getSelectContainer);//获取容器
					},
					getSelectContainer:function(e){
						e.stopPropagation();
						S.removeSelectContainer();	
						var $target=$(this);
						$.ajax({
							url:options.url,
							data:options.param,
							type:"get",
							dataType:"json",
							
							beforeSend:function(){//beforeSend
								if($('#'+options.id).length<=0){
									var str='';
									if(options.maxSelectNumber!=null){//case限制选择个数
										var sp='';
										if($target.val()!=''){
											var nameArr=$target.val().split(options.separator),//添加分隔符
												codeArr=$code.val().split(options.separator);//添加分隔符
											if(nameArr.length>0){
												for(var i=0;i<nameArr.length;i++){
													sp+='<div class="ui-pop-selected-box" id="ui-'+codeArr[i]+'" data-value="'+nameArr[i]+'" data-code="'+codeArr[i]+'">'+nameArr[i]+'<span class="ui-pop-selected-close"><em class="ui-ico-bg"></em></span></div>'
												};
											};	
										};
										str='<div class="ui-pop-selected"><div class="ui-pop-selected-label">'+options.label+'</div><div class="ui-pop-selected-main">'+sp+'</div></div>';
									};
									$('body').append('<div class="ui-pop-container"id="'+options.id+'"><div class="ui-pop-content"style="width:'+(options.group[0].width+20)+'px;">'+str+'<div style="width:'+options.group[0].width+'px;"class="ui-pop-main"><div class="ui-pop-loading"style="position:relative; height:'+options.loadingHeight+'px; width:100%; background:#fff;"><img src="'+options.path+'images/load.gif"width="27"height="10"style="position:absolute;left:50%;top:50%;margin:-5px 0px 0px -12px;"/></div></div></div></div>');
									var $obj=$('#'+options.id); 
									S.changeContainerPosition($obj,$target); //定位
									$obj.show().unbind('click').bind('click',function(e){
										e.stopPropagation();	
									});	
									$('.ui-pop-selected-close',$obj).unbind('click').bind('click',{obj:$obj},S.deleteSelectContainer);//删除已选
									$(document).unbind('click',S.removeSelectContainer).bind('click',S.removeSelectContainer);
								};	
							},
							
							
							success:function(data){ //success
								var $obj=$('#'+options.id); 
								if(data.length>0){
									function getData(d,n){
										var str='',
											W=options.group[n].width, //options.宽度
											w=W/options.group[n].columns;   //options.列数
										for(var i=0;i<d.length;i++){
											var c=d[i].status?'':' ui-pop-type-default',
												sp='';
											if(d[i].list.length>0){
												sp='<div class="ui-pop-menu"><div class="ui-pop-menu-ico" style="background:url('+options.imgbox.icoBackground+') no-repeat;"></div><div class="ui-pop-menu-content"style="width:'+options.group[n+1].width+'px;">'+getData(d[i].list,n+1)+'</div></div>'								
											};
											str+='<div class="ui-pop-list" data-index="'+n+'" style="width:'+w+'px;"><div id="'+d[i].code+'" class="ui-pop-type'+c+'" data-parentCode="'+d[i].parentCode+'" data-code="'+d[i].code+'">'+d[i].name+'</div>'+sp+'</div>';
											if(i==d.length-1){
												str+='<div class="clear"></div>';
											};
										};
										return str;
									};
									$('.ui-pop-main',$obj).html(getData(data,0));
									S.changeContainerPosition($obj,$target);
									$('.ui-pop-selected-box',$obj).each(function(){
										$('#'+$(this).attr('data-code')).parent().addClass('ui-pop-list-error');	
									});
									$('.ui-pop-list',$obj).hover(function(){
										if(!$(this).hasClass('ui-pop-list-error')){
											$(this).addClass('ui-pop-hover').find('.ui-pop-menu:first').show();
										};
									},function(){
										$(this).removeClass('ui-pop-hover').find('.ui-pop-menu').hide();
									});
									$('.ui-pop-type',$obj).unbind('click').bind('click',{obj:$obj},S.changeSelectContainer);
								}else{
									$('.ui-pop-main',$obj).html('<div style="height:'+options.loadingHeight+'px;display:none;position:relative;"><div style="position:absolute;left:0px;top:50%;margin-top:-20px;width:100%;height:40px;font-size:24px;color:#666;line-height:40px; text-align:center;">没有数据！</div></div>').children().fadeIn(400);			
								};		
							},
							error: function(){ //error
								$('#'+options.id).find('.ui-pop-main').html('<div style="height:200px;display:none;position:relative;"><div style="position:absolute;left:0px;top:50%;margin-top:-20px;width:100%;height:40px;font-size:24px;color:#666;line-height:40px; text-align:center;">服务器连接失败！</div></div>').children().fadeIn(400);		
							}
						});
					},
					changeContainerPosition:function(obj,target){
						var W=$(window).width(),
							H=$('body').height(),
							w=target.outerWidth(true),
							h=target.outerHeight(true),
							l=target.offset().left,
							t=target.offset().top,
							Ow=obj.outerWidth(true),
							Oh=obj.outerHeight(true);
						obj.css({
							'z-index':new Date().getTime(),
							'background':'url('+options.path+options.imgbox.alphaBackground+') repeat',
							'left':W-l>=Ow?l+2:l+w-Ow+2,
							'top':t+Oh+h+2<H?t+h+4:t-Oh-2
						});
					},
					changeSelectContainer:function(e){//选择具体行业
						var $target=$(this),
							$obj=e.data.obj,
							value=$target.text(),
							code=$target.attr('data-code');
						if(!$target.hasClass('ui-pop-type-default')){
							if(options.maxSelectNumber==null){
								if(options.addAllSelect){
									var $parent=$target.parents('.ui-pop-main'),
										$panel=$('.ui-pop-hover',$parent),
										index=parseInt($target.parent().attr('data-index')),
										A='',
										str='';
									for(var i=0;i<=index;i++){
										var o=$panel.eq(i).find('.ui-pop-type:first');
										str+=o.text();
										A+=o.attr('data-code')+options.separator;	
									};
									$name.val(str);
									$code.val(A.substring(0,A.length-1));		
								}else{
									$name.val(value);
									$code.val(code);			
								};
								S.removeSelectContainer();
								options.callback($name);
							}else{
								if($('#ui-'+code).length<=0){
									$target.next().find('.ui-pop-type').each(function(){
										var _this=$(this),
											v=_this.text(),
											c=_this.attr('data-code');
										if($('#ui-'+c).length>0){
											_this.parent().removeClass('ui-pop-list-error');
											$('#ui-'+c).remove();
										};	
									});
									var $label=$('.ui-pop-selected-box',$obj),
										l=$label.length;
									if(l<options.maxSelectNumber){
										$target.parent().addClass('ui-pop-list-error').find('.ui-pop-menu').hide();
										$('.ui-pop-selected-main',$obj).append('<div id="ui-'+code+'" data-code="'+code+'" data-value="'+value+'" class="ui-pop-selected-box">'+value+'<span class="ui-pop-selected-close"><em class="ui-ico-bg"></em></span></div>');
										S.addSelectContainer($obj);
										$('.ui-pop-selected-close',$obj).unbind('click').bind('click',{obj:$obj},S.deleteSelectContainer);//删除已选
									}else{
                                        alert('最多只能选择'+options.maxSelectNumber+'个！');

									};
								};
							};	
						};
					},
					deleteSelectContainer:function(e){//删除已选
						var $target=$(this).parent(),
							$obj=e.data.obj,
							code=$target.attr('data-code');
						$target.remove();
						$('#'+code).parent().removeClass('ui-pop-list-error');
						S.addSelectContainer($obj);
					},
					addSelectContainer:function(obj){
						var A='',B='';
						$('.ui-pop-selected-box',obj).each(function(){
							A+=$(this).attr('data-value')+options.separator;	
							B+=$(this).attr('data-code')+options.separator;	
						});
						$name.val(A.substring(0,A.length-1));
						$code.val(B.substring(0,B.length-1));	
						options.callback($name);
					},
					removeSelectContainer:function(){
						$('.JQ-calendar-item,.ui-pop-container').remove();		
					}
				};
				S.init();	
			});
			return this;	
		}	
	});	
})(jQuery);
