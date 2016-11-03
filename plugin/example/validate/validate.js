;(function(){
	$.extend($.fn,{
		Bvalidate:function(options){//表单验证
			var defaults = {
				noEmptyReg:/^\S*$/,  //非空
				acsiiReg:/^[\x00-\xFF]+$/,//仅ACSII字符
				numberReg:/^([+-]?)\d*\.?\d+$/,  //纯数字，不能包含任何非数字
				integerReg:/^-?[1-9]\d*$/,  //正负整数
				negativeIntReg:/^-[1-9]\d*$/,  //负整数
				positiveIntReg:/^[0-9]\d*$/,  //正整数
				floatReg:/^-?(([1-9]\d+|\d)(\.\d{1,})?)$/,  //正负浮点数
				negativeFloatReg:/^-(([1-9]\d+|\d)(\.\d{1,})?)$/,  //负浮点数
				positiveFloatReg:/^([1-9]\d+|\d)(\.\d{1,})?$/,  //正浮点数
				alphabetReg:/^[A-Za-z]+$/,//大小写字母
				LETTERReg:/^[A-Z]+$/,//大写字母
				letterReg:/^[a-z]+$/,//小写字母
				chineseReg:/^[\u4e00-\u9fa5]+$/,//中文
				colorReg:/^#[a-fA-F0-9]{6}$/,//16进制色值
				dateReg:/^\d{4}(\-|\/|.)\d{1,2}\1\d{1,2}$/,//日期
				usernameReg:/^[A-Za-z0-9_\-\u4e00-\u9fa5]+$/,//用户名
				passwordReg:/(?!^\\d+$)(?!^[a-zA-Z]+$)(?!^[_#@]+$).{6,18}/,//密码
				trueNameReg:/^[A-Za-z0-9\u4e00-\u9fa5]+$/,//真实姓名
				tellphoneReg:/^1[3|4|5|8][0-9]\d{8}$/,//手机号码
				phoneNumberReg:/^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/,//包括验证国内区号
				emailReg:/\w+((-w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+/,//邮箱
				qqReg:/^[1-9]*[1-9][0-9]*$/,//QQ
				IDcardReg_a:/^(\d{6})()?(\d{2})(\d{2})(\d{2})(\d{3})$/,//验证身份证15位
				IDcardReg_b:/^(\d{6})()?(\d{4})(\d{2})(\d{2})(\d{3})([0-9xX])$/,//验证身份证18位
				IPReg:/((?:(?:25[0-5]|2[0-4]\d|[01]?\d?\d)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d?\d))/,//IP地址
				postCodeReg:/^[1-9][0-9]{5}$/,//邮政编码
				imgReg:/(.*)\.(jpg|bmp|gif|ico|pcx|jpeg|tif|png|raw|tga)$/,//判断图片
				fileReg:/(.*)\.(rar|zip|7zip|tgz)$/,//判断压缩文件
				siteReg:/[a-zA-z]+:\/\/[^\s]+/,//网址,
				ftpReg:/ftp\:\/\/[^:]*:@([^\/]*)/, //FTP地址
				passportReg:/^[0-9]{9}$/,//验证护照号码
				driverReg:/\d{15}$/,//驾驶证
				ccvReg:/^[0-9]{3}$/,//验证CCV
				creditCardReg:/^(4\\d{12}(?:\\d{3})?)$/,//验证信用卡
				creditCardUSAReg:/^[3-6]\d{14,15}$/,//验证美国信用卡
				postCodeUSAReg:/^\d{5}$|^\d{9}$/,//验证美国邮政编码
				area:{ 11: "北京", 12: "天津", 13: "河北", 14: "山西",15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江", 31: "上海",32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西",37: "山东", 41: "河南", 42: "湖北", 43: "湖南", 44: "广东",45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州",53: "云南", 54: "西藏", 61: "陕西", 62: "甘肃", 63: "青海",64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门",91: "国外"},
				success:function(o){
					o.removeClass('error').addClass('true');	
				},
				error:function(o,text){
					o.removeClass('true').addClass('error');		
				}
			};
			var options  = $.extend(true,defaults,options);	
			var self=this,
				value=$(self).val(),
				l=value.length,
				need=$(self).attr('valNeedCache'),
				type=$(self).attr('valtype').split('|');
			var S={
				init:function(){
					var flag=false,arr=[];
					for(var i=0;i<type.length;i++){
						arr.push(S.getReg(type[i]));
					};
					for(var i=0;i<arr.length;i++){
						flag=arr[i]==true?true:flag||false;	
					};
					flag?options.success($(self)):options.error($(self));
					return flag;
				},
				getReg:function(type){
					switch(type){
						case  'required'        : return S.noEmpty();break;//非空
						case  'ACSII'           : return S.needTest(options.acsiiReg);break;//仅ACSII字符
						case  'number'          : return S.needTest(options.numberReg);break;//纯数字，不能包含任何非数字
						case  'integer'         : return S.needTest(options.integerReg);break;//正负整数
						case  'negativeInteger' : return S.needTest(options.negativeIntReg);break;//负整数
						case  'positiveInteger' : return S.needTest(options.positiveIntReg);break;//正整数
						case  'float'           : return S.needTest(options.floatReg);break;//正负浮点数
						case  'negativeFloat'   : return S.needTest(options.negativeFloatReg);break;//负浮点数
						case  'positiveFloat'   : return S.needTest(options.positiveFloatReg);break;//正浮点数
						case  'alphabet'        : return S.needTest(options.alphabetReg);break;//大小写字母
						case  'LETTER'          : return S.needTest(options.LETTERReg);break;//大写字母
						case  'letter'          : return S.needTest(options.letterReg);break;//小写字母
						case  'chinese'         : return S.needTest(options.chineseReg);break;//中文
						case  'color'           : return S.needTest(options.colorReg);break;//16进制色值
						case  'date'            : return S.needTest(options.dateReg);break;//日期
						case  'username'        : return S.needTest(options.usernameReg);break;//用户名
						case  'password'        : return S.needTest(options.passwordReg);break;//密码
						case  'trueName'        : return S.needTest(options.trueNameReg);break;//真实姓名
						case  'tellphone'       : return S.needTest(options.tellphoneReg);break;//手机号码
						case  'phoneNumber'     : return S.needTest(options.phoneNumberReg);break;//包括验证国内区号,国际区号,分机号
						case  'email'           : return S.needTest(options.emailReg);break;//邮箱
						case  'QQ'              : return S.needTest(options.qqReg);break;//QQ
						case  'IDcard'          : return S.needTest();break;//身份证
						case  'IP'              : return S.needTest(options.IPReg);break;//IP地址
						case  'postCode'        : return S.needTest(options.postCodeReg);break;//邮政编码
						case  'img'             : return S.needTest(options.imgReg);break;//判断图片
						case  'file'            : return S.needTest(options.fileReg);break;//判断压缩文件
						case  'site'            : return S.needTest(options.siteReg);break;//网址
						case  'ftp'             : return S.needTest(options.ftpReg);break;//ftp地址
						case  'passport'        : return S.needTest(options.passportReg);break;//护照号码
						case  'driver'          : return S.needTest(options.driverReg);break;//驾驶证
						case  'ccv'             : return S.needTest(options.ccvReg);break;//验证CCV
						case  'creditCard'      : return S.needTest(options.creditCardReg);break;//验证信用卡
						case  'usaCreditCard'   : return S.needTest(options.creditCardUSAReg);break;//验证美国信用卡
						case  'usaPostCard'     : return S.needTest(options.postCodeUSAReg);break;//验证美国邮政编码
						default                 : break;	
					};		
				},
				needTest:function(reg){
					if(reg==undefined){
						return typeof(need)=='undefined'?S.checkIDCard(options.IDcardReg_a,options.IDcardReg_b):value==''?true:S.checkIDCard(options.IDcardReg_a,options.IDcardReg_b);	
					}else{
						return typeof(need)=='undefined'?S.regTest(reg):value==''?true:S.regTest(reg);		
					};
				},
				noEmpty:function(){
					return value!=''?true:false;
				},
				regTest:function(reg){
					return reg.test(value)?true:false;
				},
				checkIDCard:function(_a,_b){//验证中国居民身份证
					 var re;
					 if (l!=15&&l!=18){
						 options.error($(self),'身份证号码位数不对');
						 return false;
					 }else if (l==15){
						 re = new RegExp(_a);
					 }else{
						 re = new RegExp(_b);
					 };
					 var idcard_array = new Array();
					 idcard_array = value.split("");
					 if(options.area[parseInt(value.substr(0, 2))] == null) { //地区检验
						 options.error($(self),'身份证号码位数不对');
						 return false;
					 };
					 var a=value.match(re);
					 if (a!=null){//出生日期正确性检验
						 if(l==15){
							 var DD=new Date("19" + a[3] + "/" + a[4] + "/" + a[5]),flag=DD.getYear() == a[3] && (DD.getMonth() + 1) == a[4] && DD.getDate() == a[5];
						 }else if (l==18) {
							 var DD=new Date(a[3] + "/" + a[4] + "/" + a[5]),flag=DD.getFullYear() == a[3] && (DD.getMonth() + 1) == a[4] && DD.getDate() == a[5];
						 };
						 if(!flag){
							 options.error($(self),'身份证出生日期不对');
							 return false; 
						 };
						 if(l==18){
							 S = (parseInt(idcard_array[0]) + parseInt(idcard_array[10])) * 7+ (parseInt(idcard_array[1]) + parseInt(idcard_array[11])) * 9+ (parseInt(idcard_array[2]) + parseInt(idcard_array[12])) * 10+ (parseInt(idcard_array[3]) + parseInt(idcard_array[13])) * 5+ (parseInt(idcard_array[4]) + parseInt(idcard_array[14])) * 8+ (parseInt(idcard_array[5]) + parseInt(idcard_array[15])) * 4+ (parseInt(idcard_array[6]) + parseInt(idcard_array[16])) * 2+ parseInt(idcard_array[7]) * 1+ parseInt(idcard_array[8]) * 6+ parseInt(idcard_array[9]) * 3;
							 Y = S % 11;
							 M = "F";
							 JYM = "10X98765432";
							 M = JYM.substr(Y, 1); //判断校验位
							 if (M == idcard_array[17]) {
								 options.success($(self));
								 return true;
							 }else{
								 options.error($(self),'身份证号码校验错误');
								 return false;
							 };
						 };
					 }else{
						 options.error($(self),'身份证含有非法字符');
						 return false;
					 };
				}	
			};	
			return S.init();
		}
	});	
})(jQuery);