;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-chajian" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M801.792 491.52q31.744 0 60.416 12.288t50.176 33.792 33.792 50.176 12.288 60.416q0 32.768-12.288 60.928t-33.792 49.664-50.176 33.792-60.416 12.288q-29.696 0-55.808-10.752t-46.592-28.16l0 128q0 27.648-19.456 47.104t-47.104 19.456l-504.832 0q-27.648 0-47.616-19.456t-19.968-47.104l0-113.664q5.12-21.504 18.432-31.744t38.912 5.12q12.288 7.168 18.432 8.192 26.624 13.312 54.272 13.312t51.712-10.24 41.984-28.16 28.16-41.472 10.24-51.2-10.24-51.712-28.16-41.984-41.984-28.16-51.712-10.24q-26.624 0-52.224 11.264-6.144 2.048-10.24 4.096-12.288 6.144-24.064 11.264t-20.992 4.096-15.36-10.24-7.168-30.72l0-107.52q0-27.648 19.968-47.616t47.616-19.968l159.744 0q-16.384-20.48-26.112-45.568t-9.728-53.76q0-33.792 12.8-62.976t34.304-50.688 50.688-34.304 61.952-12.8 61.952 12.8 50.688 34.304 34.304 50.688 12.8 62.976q0 57.344-35.84 99.328l97.28 0q27.648 0 47.104 19.968t19.456 47.616l0 136.192q20.48-17.408 46.592-28.16t55.808-10.752z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-kaifangwendang" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M690.208 471.68c-60.672-28.64-137.984-34.432-194.848 6.048 69.152-6.592 144.96 4.832 195.104 57.12 48-55.072 124.128-65.408 192.96-59.744-57.472-38.144-133.216-33.024-193.216-3.424zM665.664 605.76c-68.384-1.568-134.432 23.168-191.104 60.096-107.168-45.6-242.72-37.12-334.016 38.976 26.336-0.928 52-7.456 78.048-10.784 95.168-9.472 196.576 14.144 268.512 79.808 29.76-43.552 71.648-78.24 119.648-99.936 63.072-30.528 134.144-33.696 202.816-34.528-41.696-28.64-94.624-33.952-143.936-33.664zM903.424 199.424l-142.88-142.848c-31.104-31.104-92.576-56.576-136.576-56.576l-480 0c-44 0-80 36-80 80l0 864c0 44 36 80 80 80l736 0c44 0 80-36 80-80l0-608c0-44-25.472-105.472-56.576-136.576zM858.176 244.672c3.136 3.136 6.24 6.976 9.28 11.328l-163.456 0 0-163.456c4.352 3.04 8.192 6.144 11.328 9.28l142.88 142.848zM896 944c0 8.672-7.328 16-16 16l-736 0c-8.672 0-16-7.328-16-16l0-864c0-8.672 7.328-16 16-16l480 0c4.832 0 10.24 0.608 16 1.696l0 254.304 254.304 0c1.088 5.76 1.696 11.168 1.696 16l0 608z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-gongju" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M313.856 472.86272c0.21504 0.210944 0.392192 0.443392 0.612352 0.662528l90.725376 89.387008 31.640576-31.179776-34.156544-33.64352-15.444992-15.239168 79.16544-77.997056 10.440704 1.143808c2.664448 0.303104 5.383168 0.443392 8.09472 0.443392 5.464064 0 10.817536-0.662528 16.028672-1.80224l-58.285056-57.442304c-1.1776-1.16224-2.44736-2.185216-3.674112-3.272704 17.96608-63.627264 1.609728-134.688768-49.173504-184.715264-50.39616-49.672192-121.82528-65.901568-186.04032-48.827392L312.582144 217.572352l-28.560384 105.008128L177.441792 350.733312 68.641792 243.536896c-17.33632 63.276032-0.83968 133.669888 49.55648 183.323648C171.127808 479.021056 247.26016 494.31552 313.856 472.86272L313.856 472.86272zM635.32032 537.023488c-1.767424 7.693312-2.24768 15.72352-1.335296 23.815168l1.160192 10.28096-7.435264 7.320576-56.2688 55.46496-15.45728 15.218688-49.605632-48.88064-31.65184 31.187968L761.91232 914.414592c17.707008 17.4336 40.904704 26.15296 64.11264 26.15296 23.195648 0 46.395392-8.71936 64.095232-26.15296 35.408896-34.8928 35.408896-91.451392 0-126.332928L635.32032 537.023488 635.32032 537.023488zM857.0624 885.087232l-45.549568 12.02176-36.959232-36.416512 12.205056-44.877824 45.553664-12.030976 36.950016 36.416512L857.0624 885.087232 857.0624 885.087232zM506.708992 570.120192l49.622016 48.891904 56.281088-55.456768c-3.050496-27.056128 5.886976-55.171072 26.939392-75.901952 21.03808-20.734976 49.569792-29.535232 77.02528-26.54208l246.094848-242.4832L824.82176 82.809856l-246.094848 242.4832c3.049472 27.052032-5.894144 55.158784-26.934272 75.902976-21.044224 20.738048-49.574912 29.535232-77.033472 26.532864l-56.276992 55.461888 49.593344 48.869376L224.900096 771.670016l-8.894464-8.768512-46.683136 37.04832L90.805248 922.125312l20.043776 19.759104 124.0064-77.364224 37.588992-45.99808-8.927232-8.781824L506.708992 570.120192 506.708992 570.120192zM506.708992 570.120192"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-xiala" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M783.52 370.752 512 642.272 240.48 370.752 195.232 416 512 732.768 828.768 416Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-svn" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M942.831 285.229c-37.273-61.13-115.434-81.058-182.254-42.479-93.88 54.195-36.308 199.067-114.628 258.022-0.307-56.092-18.599-107.419-50.262-147.311-40.281-50.749-102.203-82.99-176.264-82.99-75.164 0-134.378 39.775-172.862 99.248-29.242 45.19-46.515 101.753-49.722 160.88C142.363 547.801 94.866 509.522 67.1 468.849c-26.252 161.418 122.164 155.59 146.504 158.085 21.155 2.175-41.255 136.898-5.067 160.589 28.921 18.93 121.396 17.054 140.401-0.22 23.316-21.195 7.238-85.528-3.753-143.396 72.098 3.014 95.344 4.211 167.082-3.123-7.835 76.268-35.281 128.517-0.269 148.544 23.784 13.602 122.163 12.364 146.733-12.573 24.122-24.478-31.578-134.305-4.52-155.23 111.152-85.967 109.719-150.201 155.126-176.495 31.15-18.042 98.986 5.329 134.896-40.673C968.367 373.441 962.294 317.151 942.831 285.229z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-qita" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M341.314 60.187h-135.546c-74.869 0-146.838 49.386-146.838 124.245v135.546c0 74.869 71.975 146.838 146.838 146.838h135.546c136.995 0 124.245-4.199 124.245-146.838v-135.546c0-74.869-49.386-124.245-124.245-124.245M420.382 304.91c0 110.962 12.4 116.726-94.135 116.726h-105.408c-58.238 0-116.726-58.494-116.726-116.726v-105.428c0-58.218 58.494-94.117 116.726-94.117h105.408c58.238 0 94.135 35.898 94.135 94.135v105.408z"  ></path>'+
      ''+
      '<path d="M341.314 557.187h-135.546c-74.869 0-146.838 49.398-146.838 124.245v135.546c0 74.845 71.975 146.838 146.838 146.838h135.546c74.869 0 124.245-71.994 124.245-146.838v-135.546c0-131.325 7.095-124.245-124.245-124.245M420.382 801.907c0 58.218-35.898 116.726-94.135 116.726h-105.408c-58.238 0-116.726-58.511-116.726-116.726v-105.428c0-58.218 58.494-94.117 116.726-94.117h105.408c102.156 0 94.135-7.995 94.135 94.117v105.428z"  ></path>'+
      ''+
      '<path d="M838.308 60.187h-135.546c-74.869 0-146.838 49.398-146.838 124.245v135.546c0 136.995 9.851 146.838 146.838 146.838h135.546c74.869 0 124.245-71.975 124.245-146.838v-135.546c0-74.845-49.386-124.245-124.245-124.245M917.381 304.938c0 58.218-35.898 116.688-94.135 116.688h-105.408c-106.558 0.005-116.726-10.121-116.726-116.688v-105.428c0-58.218 58.494-94.164 116.726-94.164h105.408c58.238 0 94.135 35.94 94.135 94.164v105.428z"  ></path>'+
      ''+
      '<path d="M838.308 557.187h-135.546c-136.995 0-146.838-12.72-146.838 124.245v135.546c0 74.845 71.975 146.838 146.838 146.838h135.546c74.869 0 124.245-71.994 124.245-146.838v-135.546c0-74.845-49.386-124.245-124.245-124.245M917.381 801.907c0 58.218-35.898 116.726-94.135 116.726h-105.408c-58.238 0-116.726-58.511-116.726-116.726v-105.428c0-106.541 10.162-94.117 116.726-94.117h105.408c58.238 0 94.135 35.898 94.135 94.117v105.428z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-peiziiconfont05" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M263.112 64c-82.4752 0-149.3328 66.8576-149.3328 149.3328l0 597.3328c0 1.264 0.3392 2.4336 0.3712 3.6896-0.032 1.2896-0.3712 2.4864-0.3712 3.784 0 78.2208 63.6384 141.8592 141.8592 141.8592l7.4736 0 647.1104 0 0-37.3328L891.5552 922.6656l-18.6672 0-609.7776 0c-60.9056 0-110.3888-48.9296-111.7488-109.512 1.3584-56.4672 47.4864-102.0384 104.2752-102.0384l617.2512 0 18.6672 0 18.6672 0 0-37.3328L910.2224 64 263.112 64zM255.6384 673.784c-41.5152 0-78.5616 18.256-104.5264 47.1472l0-507.5984c0-61.7584 50.2416-112 112-112l609.7776 0 0 572.4512L255.6384 673.784z"  ></path>'+
      ''+
      '<path d="M359.4784 589.5024c-10.3168 0-18.6672-8.3488-18.6672-18.6672l0-149.3328c0-10.3184 8.3488-18.6672 18.6672-18.6672s18.6672 8.3488 18.6672 18.6672l0 149.3328C378.1456 581.1536 369.7952 589.5024 359.4784 589.5024z"  ></path>'+
      ''+
      '<path d="M459.0272 589.5024c-10.3184 0-18.6672-8.3488-18.6672-18.6672l0-199.0992c0-10.3184 8.3488-18.6672 18.6672-18.6672 10.3168 0 18.6672 8.3488 18.6672 18.6672l0 199.0992C477.6944 581.1536 469.3456 589.5024 459.0272 589.5024z"  ></path>'+
      ''+
      '<path d="M558.5776 589.5024c-10.3168 0-18.6672-8.3488-18.6672-18.6672l0-149.3328c0-10.3184 8.3488-18.6672 18.6672-18.6672 10.3184 0 18.6672 8.3488 18.6672 18.6672l0 149.3328C577.2432 581.1536 568.8944 589.5024 558.5776 589.5024z"  ></path>'+
      ''+
      '<path d="M658.1456 589.5024c-10.3184 0-18.6672-8.3488-18.6672-18.6672l0-199.0992c0-10.3184 8.3488-18.6672 18.6672-18.6672 10.3168 0 18.6672 8.3488 18.6672 18.6672l0 199.0992C676.8112 581.1536 668.4624 589.5024 658.1456 589.5024z"  ></path>'+
      ''+
      '<path d="M558.5776 358.9936c-4.9392 0-9.6608-1.9504-13.1616-5.432l-90.2528-89.8144-82.5056 82.304c-7.2912 7.256-19.104 7.2912-26.3952-0.0368-7.2736-7.2912-7.2736-19.1216 0.0368-26.3952l95.6672-95.4304c7.2736-7.2368 19.0672-7.2912 26.3408-0.0176l90.016 89.5776 86.4064-89.3232c7.1824-7.4192 18.976-7.584 26.3952-0.4368 7.4016 7.1648 7.6016 18.9952 0.4368 26.3952l-99.568 102.9216c-3.4816 3.5904-8.24 5.6336-13.2336 5.688C558.704 358.9936 558.632 358.9936 558.5776 358.9936z"  ></path>'+
      ''+
      '<path d="M867.1968 829.3248l-601.1072 0c-10.3184 0-18.6672-8.3488-18.6672-18.6672 0-10.3184 8.3488-18.6672 18.6672-18.6672l601.1072 0c10.3168 0 18.6672 8.3488 18.6672 18.6672C885.864 820.976 877.5152 829.3248 867.1968 829.3248z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-rili" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M877.129978 959.335235 166.199253 959.335235c-33.728172 0-61.070914-27.343765-61.070914-61.078077L105.128339 210.511481c0-33.730219 27.343765-61.07603 61.070914-61.07603l69.534679 1.410116 0 29.172413c0 50.595328 41.016159 99.655697 91.609441 99.655697 50.597375 0 91.614557-53.286624 91.614557-103.879905l0-26.358321 221.277686 0 0 26.358321c0 50.592258 41.016159 103.879905 91.609441 103.879905 50.595328 0 91.609441-53.286624 91.609441-103.879905l0-26.358321 53.676503 0c33.732266 0 61.070914 23.163559 61.070914 56.890708l0 691.930999C938.200892 931.992493 910.862243 959.335235 877.129978 959.335235zM864.390839 345.787444 178.369434 345.787444l0 540.464285L864.390839 886.251729 864.390839 345.787444zM349.638145 517.024433l-98.101295 0 0-97.662297 98.101295 0L349.638145 517.024433zM349.638145 664.122653l-98.101295 0 0-96.764857 98.101295 0L349.638145 664.122653zM349.638145 811.381531l-98.101295 0 0-97.54257 98.101295 0L349.638145 811.381531zM496.529657 517.024433l-97.42182 0 0-97.662297 97.42182 0L496.529657 517.024433zM496.529657 664.122653l-97.42182 0 0-96.764857 97.42182 0L496.529657 664.122653zM496.529657 811.381531l-97.42182 0 0-97.54257 97.42182 0L496.529657 811.381531zM644.562155 517.024433l-98.912777 0 0-97.662297 98.912777 0L644.562155 517.024433zM644.562155 664.122653l-98.912777 0 0-96.764857 98.912777 0L644.562155 664.122653zM644.562155 811.381531l-98.912777 0 0-97.54257 98.912777 0L644.562155 811.381531zM791.632745 517.024433l-98.30698 0 0-97.662297 98.30698 0L791.632745 517.024433zM791.632745 664.122653l-98.30698 0 0-96.764857 98.30698 0L791.632745 664.122653zM791.632745 811.381531l-98.30698 0 0-97.54257 98.30698 0L791.632745 811.381531zM730.892359 237.065254c-33.203216 0-60.122309-26.919093-60.122309-60.122309l0-50.909483c0-33.203216 26.919093-60.120262 60.122309-60.120262 33.200146 0 60.117193 26.917046 60.117193 60.120262l0 50.909483C791.010575 210.146161 764.093529 237.065254 730.892359 237.065254zM326.388629 237.065254c-33.200146 0-60.117193-26.919093-60.117193-60.122309l0-50.909483c0-33.203216 26.917046-60.120262 60.117193-60.120262 33.205263 0 60.120262 26.917046 60.120262 60.120262l0 50.909483C386.508891 210.146161 359.593891 237.065254 326.388629 237.065254z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-weibiaoti1" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M511.468 1.8C229.799 1.8 1.46 230.138 1.46 511.807s228.338 510.008 510.008 510.008 510.008-228.338 510.008-510.008S793.137 1.8 511.468 1.8zM849.47 849.81c-43.91 43.91-95.033 78.38-151.95 102.454-58.91 24.917-121.507 37.551-186.052 37.551s-127.142-12.634-186.052-37.551c-56.917-24.074-108.04-58.544-151.95-102.454s-78.38-95.033-102.454-151.95C46.094 638.949 33.46 576.352 33.46 511.807s12.634-127.142 37.551-186.052c24.074-56.917 58.544-108.04 102.454-151.95s95.033-78.38 151.95-102.454C384.326 46.434 446.923 33.8 511.468 33.8S638.61 46.434 697.52 71.351c56.917 24.074 108.04 58.544 151.95 102.454s78.38 95.033 102.454 151.95c24.917 58.91 37.551 121.507 37.551 186.052s-12.634 127.142-37.551 186.052C927.851 754.777 893.38 805.9 849.47 849.81z"  ></path>'+
      ''+
      '<path d="M544 257 480 257 480 512 480 575 480 576 832.333 576 832.333 512 544 512Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-xiala1" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M508.029906 18.062301c42.696871 0 77.336751 34.627839 77.336751 77.33916 0 42.707708-34.639881 77.336751-77.336751 77.336751-42.710117 0-77.337956-34.627839-77.337956-77.336751C430.691951 52.69014 465.31979 18.062301 508.029906 18.062301z"  ></path>'+
      ''+
      '<path d="M392.024177 250.073759l232.012662 0c21.348435 0 38.666569 17.308501 38.666569 38.668978l0 25.778516c0 21.361681-17.318134 38.668978-38.666569 38.668978L392.024177 353.19023c-21.361681 0-38.670182-17.307297-38.670182-38.668978l0-25.778516C353.353995 267.381056 370.662496 250.073759 392.024177 250.073759z"  ></path>'+
      ''+
      '<path d="M340.465942 430.52939l335.129134 0c21.348435 0 38.666569 17.307297 38.666569 38.668978l0 25.778516c0 21.360477-17.318134 38.667774-38.666569 38.667774L340.465942 533.644657c-21.361681 0-38.670182-17.307297-38.670182-38.667774L301.79576 469.198368C301.79576 447.836687 319.10426 430.52939 340.465942 430.52939z"  ></path>'+
      ''+
      '<path d="M381.649192 879.019932c-104.435019-118.572984-234.528139-268.039728-234.528139-268.039728s232.20051 0 433.208631 0c153.393488 0 288.609076 0 288.609076 0s-128.746876 147.123461-232.441341 265.645871C465.206599 1072.385291 543.729442 1062.997712 381.649192 879.019932z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-lunbozutu" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M1002.069333 751.616 1002.069333 284.309333c0-24.213333-16.917333-49.578667-42.069333-49.578667l-64 0 1.152-6.4c0-31.338667-26.005333-57.6-58.538667-57.6L186.432 170.730667c-31.936 0-58.410667 31.957333-58.410667 64l-0.213333-0.96L67.178667 233.770667c-25.152 0-45.226667 20.288-45.226667 44.501333l0 467.328L21.354667 745.6c0 24.789333 20.629333 44.693333 45.312 44.693333L127.786667 790.293333l0 5.184C127.786667 826.965333 153.792 853.333333 186.432 853.333333l652.842667 0c31.658667 0 56.277333-10.901333 56.725333-42.602667l64 0c24.661333 0 42.666667-34.325333 42.666667-59.114667L1002.069333 751.616zM128 746.730667 64 746.730667l0-469.333333 64 0L128 746.730667zM853.333333 789.397333c0 6.421333-14.848 21.333333-21.333333 21.333333l-640 0c-6.485333 0-21.333333-14.848-21.333333-21.333333l0-554.666667c0-6.378667 9.258667-18.56 15.744-18.56l5.589333-2.773333 640 0c6.442667 0 21.333333 14.954667 21.333333 21.333333L853.333333 789.397333zM960 768.064l-64 0 0-490.666667 60.842667-1.984c4.970667 0 3.157333-2.944 3.157333 1.984l0 469.333333C960 751.701333 965.013333 768.064 960 768.064zM412.458667 496.170667c43.925333 0 79.637333-34.773333 79.637333-77.482667 0-42.752-35.712-77.482667-79.637333-77.482667-43.925333 0-79.637333 34.730667-79.637333 77.482667C332.8 461.397333 368.533333 496.170667 412.458667 496.170667zM412.458667 379.946667c21.952 0 39.829333 17.365333 39.829333 38.741333 0 21.333333-17.877333 38.741333-39.829333 38.741333-21.952 0-39.829333-17.408-39.829333-38.741333C372.629333 397.290667 390.506667 379.946667 412.458667 379.946667zM785.92 438.613333c-95.914667 23.338667-137.728 87.765333-168.256 134.805333-24.213333 37.269333-39.082667 58.346667-65.109333 58.346667l-0.042667 0c-35.456 0-57.109333-14.272-80.042667-28.16-24.362667-14.741333-49.536-29.952-88.64-29.952-75.648 0-156.906667 93.269333-165.930667 103.893333L213.333333 728.618667c0 10.709333 8.917333 18.112 19.925333 18.112l557.504 0c10.986667 0 19.904-7.402667 19.904-18.112L810.666667 457.429333c0-5.973333-2.837333-11.626667-7.658667-15.296C798.186667 438.464 791.872 437.141333 785.92 438.613333zM770.858667 707.477333 253.162667 707.477333c24.874667-27.733333 85.290667-95.082667 130.666667-95.082667 27.733333 0 46.229333 11.157333 67.605333 24.128 25.152 15.168 53.632 32.426667 99.712 33.941333l2.944 0.064c47.637333 0 71.722667-37.12 97.237333-76.416 26.645333-41.088 56.469333-79.104 119.530667-102.485333L770.858667 707.477333z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-icontuozhuai" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M960 480 768 256 768 448 640 448 576 448 512 448 512 192 448 192 448 448 192 448 192 256 0 480 192 704 192 512 448 512 448 576 448 576 448 768 256 768 480 960 704 768 512 768 512 576 512 576 512 512 576 512 640 512 768 512 768 704Z"  ></path>'+
      ''+
      '<path d="M480 0 256 192 704 192Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-chuangkou" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M64.303027 363.436406l678.57583 0 0 509.943155-678.57583 0 0-509.943155Z"  ></path>'+
      ''+
      '<path d="M281.119097 150.619416 281.119097 226.89359 887.430066 226.89359 887.430066 660.563594 959.69595 660.563594 959.69595 150.619416Z"  ></path>'+
      ''+
      '<path d="M176.710143 259.027451 176.710143 335.300602 783.020088 335.300602 783.020088 768.971629 855.288019 768.971629 855.288019 259.027451Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-yanzheng" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M890.914803 191.809729c-11.351547-9.657974-26.318438-14.989404-41.765261-14.989404-1.419327 0-2.815118 0.046049-4.234445 0.137123-0.869811 0.045026-10.686397 0.595565-26.089218 0.595565-25.517189 0-75.316435-1.578963-122.460198-12.12926-60.920549-13.639662-131.224825-76.826836-151.683806-89.276392-10.298564-6.270827-22.176091-9.40624-34.053618-9.40624-11.832501 0-23.709005 3.135413-34.007569 9.360191-2.471287 1.533938-76.070612 73.210469-148.068462 89.322441-47.143764 10.550297-97.903895 12.12926-123.375035 12.12926-15.401797 0-25.242943-0.549516-26.203828-0.595565-1.327229-0.091074-2.676972-0.137123-4.027737-0.137123-15.493895 0-30.506835 5.354967-41.903407 15.058989-12.380994 10.527785-19.429534 25.265455-19.429534 40.690788l0 139.418446c0 515.426544 370.46996 581.81667 386.192052 584.402567 3.592832 0.595565 7.209199 0.869811 10.824544 0.869811s7.277761-0.274246 10.824544-0.869811c15.722092-2.585897 388.938609-68.976023 388.938609-584.402567L910.392432 232.569079C910.390386 217.09872 903.319333 202.360026 890.914803 191.809729L890.914803 191.809729zM849.148518 371.987524c0 474.735756-338.522308 529.523625-338.522308 529.523625s-335.775752-54.787869-335.775752-529.523625L174.850458 232.569079c0 0 11.579745 0.731665 30.323663 0.731665 32.108311 0 86.163491-2.128479 137.954093-13.730736 84.813749-18.949603 167.499019-97.080133 167.499019-97.080133s86.369176 78.131553 171.091851 97.080133c51.85814 11.603281 104.974948 13.730736 137.105771 13.730736 18.696846 0 30.323663-0.731665 30.323663-0.731665L849.148518 371.987524 849.148518 371.987524zM701.056521 343.105701l-237.276292 215.993548-117.654748-107.149476c-14.624083-13.296854-38.333088-13.296854-52.934659 0-14.624083 13.319367-14.624083 34.87738 0 48.174234l137.267454 124.977534c1.601476 2.539849 3.593855 4.921084 5.973044 7.094589 7.529495 6.865368 17.48525 10.183953 27.348909 9.955756 9.886171 0.229221 19.841927-3.090388 27.370398-9.955756 2.403749-2.173505 4.370545-4.553717 5.974068-7.094589l256.842949-233.820583c14.624083-13.296854 14.624083-34.87738 0-48.174234C739.367096 329.786335 715.680604 329.786335 701.056521 343.105701L701.056521 343.105701zM701.056521 343.105701"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-chakan" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M511.317966 169.344896c-307.48714 0-465.35668 309.888839-465.35668 309.888839s119.130238 309.928748 465.35668 309.928748c313.542042 0 465.336214-308.72227 465.336214-308.72227S823.649438 169.344896 511.317966 169.344896L511.317966 169.344896zM512.018931 672.932296c-112.428605 0-193.697537-84.750219-193.697537-193.703677 0-108.964714 81.274048-193.689351 193.697537-193.689351 112.418372 0 193.689351 84.71952 193.689351 193.689351C705.709305 588.181053 624.438327 672.932296 512.018931 672.932296L512.018931 672.932296zM512.018931 363.003548c-64.255443 0.143263-116.218932 53.968146-116.218932 116.225071 0 62.22418 51.962465 116.224048 116.218932 116.224048 64.25135 0 116.209722-53.999868 116.209722-116.224048C628.229676 416.95225 576.270281 362.880751 512.018931 363.003548L512.018931 363.003548zM512.018931 363.003548"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-daima" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M984.752 532.72 790.432 726.8C778.432 738.768 758.976 738.768 746.976 726.8 734.992 714.816 734.992 695.408 746.976 683.44L919.616 511.04 746.976 338.656C734.992 326.672 734.992 307.264 746.976 295.296 758.976 283.312 778.432 283.312 790.432 295.296L984.752 489.36C996.752 501.344 996.752 520.752 984.752 532.72ZM347.776 911.568C338.944 926.992 319.376 932.288 304.064 923.376 288.752 914.48 283.52 894.752 292.352 879.328L676.352 112.432C685.184 96.992 704.752 91.712 720.064 100.624 735.376 109.52 740.608 129.248 731.776 144.672L347.776 911.568ZM277.152 726.8C265.152 738.768 245.696 738.768 233.696 726.8L39.36 532.72C27.376 520.752 27.376 501.344 39.36 489.36L233.696 295.296C245.696 283.312 265.152 283.312 277.152 295.296 289.136 307.264 289.136 326.672 277.152 338.656L104.528 511.04 277.152 683.44C289.136 695.408 289.136 714.816 277.152 726.8Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-danchuangguanbi" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M959.981453 108.907409 915.19134 64.049758 511.999488 467.301985 108.807636 64.049758 64.017524 108.907409 467.240075 512.068562 64.017524 915.351488 108.807636 959.950242 511.999488 556.820811 915.19134 959.950242 959.981453 915.351488 556.758901 512.068562Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-quxian" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M979.479893 209.646933c-121.74336 6.068907-118.818133 242.51392-148.302507 327.185067-38.05184 109.387093-132.696747 202.827093-260.078933 165.106347-108.516693-32.09216-179.848533-241.759573-312.111787-162.18112-90.627413 54.528-136.052053 173.666987-158.061227 272.96768-0.218453 0.979627-0.651947 1.846613-0.863573 2.720427l0 102.454613 845.602133 0c18.64704 0 33.819307 15.172267 33.819307 33.819307 0 18.640213-15.172267 33.81248-33.819307 33.81248L66.23232 985.531733c-18.64704 0-33.826133-15.172267-33.826133-33.81248L32.406187 72.290987c0-18.64704 15.17568-33.826133 33.826133-33.826133 18.643627 0 33.826133 15.17568 33.826133 33.826133l0 547.689813c24.39168-44.3392 54.6304-84.893013 92.357973-116.432213 114.814293-95.726933 234.28096-27.968853 313.965227 69.60128 50.408107 61.794987 149.060267 102.447787 213.777067 30.027093 50.090667-55.94112 61.58336-138.007893 76.21632-209.012053 22.224213-107.871573 49.431893-245.548373 182.99904-252.166827C1023.061333 139.830613 1022.846293 207.476053 979.479893 209.646933L979.479893 209.646933zM979.479893 209.646933"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-bk-tab" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M480 224l480 0 0 112-480 0 0-112Z"  ></path>'+
      ''+
      '<path d="M480 464l480 0 0 112-480 0 0-112Z"  ></path>'+
      ''+
      '<path d="M480 688l480 0 0 112-480 0 0-112Z"  ></path>'+
      ''+
      '<path d="M61.2112 262.8336l56.076782-57.03659 125.5056 123.3936-56.076782 57.03659-125.5056-123.3936Z"  ></path>'+
      ''+
      '<path d="M300.978094 160.074507l55.68744 56.648664-125.51701 123.387216-55.68744-56.648664 125.51701-123.387216Z"  ></path>'+
      ''+
      '<path d="M61.184 502.8272l56.08-57.048 125.51701 123.387216-56.08 57.048-125.51701-123.387216Z"  ></path>'+
      ''+
      '<path d="M300.973069 400.090531l55.68744 56.656608-125.534611 123.387216-55.68744-56.656608 125.534611-123.387216Z"  ></path>'+
      ''+
      '<path d="M61.176 742.8208l56.08-57.048 125.51701 123.387216-56.08 57.048-125.51701-123.387216Z"  ></path>'+
      ''+
      '<path d="M300.968269 640.095331l55.68744 56.656608-125.534611 123.387216-55.68744-56.656608 125.534611-123.387216Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-dingbu-copy-copy-copy" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M10.24 821.881l501.76-622.923 501.76 622.923-501.759-293.242-501.759 293.242z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-mulutiaozhuan" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M483.555556 816 571.708228 889.943854C622.37337 932.442573 682.523728 916.594199 705.739406 854.278434L981.964294 112.832678C1005.136191 50.634434 973.125621 17.069694 910.368887 38.126229L56.742224 324.540438C-6.205133 345.660933-15.701111 397.215625 35.106587 439.833925L219.966306 594.897175 254.702432 545.353353 73.549265 393.399216 73.549265 393.399216C58.810568 381.036164 57.511915 387.996225 75.731506 381.883073L929.358171 95.468864C937.198279 92.8383 942.712832 92.051047 945.296555 92.311912 943.135966 92.093768 939.025163 90.250988 935.140324 86.191217 931.257714 82.133778 929.583792 77.935148 929.447504 75.755261 929.610012 78.354581 928.628008 83.852647 925.738308 91.609217L649.513421 833.05497C640.848361 856.313816 629.12405 859.424119 610.150906 843.509146L483.555556 737.318969 483.555556 816Z"  ></path>'+
      ''+
      '<path d="M924.613934 48.61929C918.460774 53.832854 912.134263 60.623565 905.750574 69.023256L467.134393 646.156783C426.984232 698.986581 435.508661 776.51415 486.316359 819.13245L543.604939 867.187012 543.604939 788.505981 524.759037 772.697742 524.759037 772.697742C498.721472 750.857023 494.204705 710.019339 514.828534 682.882395L928.724207 138.276247 924.613934 48.61929Z"  ></path>'+
      ''+
      '<path d="M960.144981 118.46018C954.803396 125.639508 947.341643 133.115768 937.706509 140.707271L368.31579 589.329015C316.194758 630.395068 238.530224 623.22498 195.031699 573.168812L161.768728 534.891265 242.432142 535.738195C265.043946 559.742883 304.635758 562.868996 330.763391 542.283089L874.888342 113.56819 872.272414 113.418089 906.412923 116.207262C915.472436 116.947398 921.321928 118.392652 923.406557 119.45833 922.048908 118.764288 920.532616 117.645288 919.013712 116.100085L960.144981 118.46018Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-xuanze" viewBox="0 0 1032 1024">'+
      ''+
      '<path d="M90.128 576.272c0-108.352-0.007-216.704 0.006-325.053 0.002-22.642 9.452-32.018 32.316-32.020 216.704-0.012 433.404-0.012 650.108 0 22.702 0.002 32.246 9.537 32.248 32.224 0.014 216.704 0.014 433.404 0 650.108-0.002 22.848-9.409 32.337-32.010 32.338-216.996 0.008-433.993 0.008-650.991 0-22.218-0.002-31.667-9.452-31.671-31.658-0.014-108.647-0.006-217.291-0.006-325.938zM447.521 271.267c-97.733 0-195.465-0.004-293.197 0.006-12.11 0.002-12.145 0.033-12.145 12.219-0.007 195.17-0.007 390.341-0.002 585.511 0 12.75 0.026 12.78 12.517 12.78 195.17 0.007 390.341 0.007 585.511 0 12.485 0 12.506-0.026 12.506-12.709 0.004-195.17 0.006-390.341 0-585.511 0-12.259-0.026-12.291-11.992-12.293-97.732-0.007-195.465-0.004-293.197-0.004zM582.91 90.183c108.055 0 216.112-0.007 324.166 0.006 23.615 0.004 33.282 9.476 33.287 33.239 0.054 216.112 0.057 432.22-0.004 648.333-0.007 23.84-9.543 33.126-33.261 33.146-16.192 0.014-32.388 0.106-48.58-0.037-16.233-0.143-27.973-10.977-28.024-25.563-0.051-14.827 11.25-25.828 27.426-26.402 7.645-0.272 15.315-0.284 22.96-0.030 5.777 0.191 8.11-2.279 7.638-7.898-0.173-2.046-0.018-4.12-0.018-6.181 0-194.323 0-388.645-0.002-582.968 0-13.508-0.007-13.519-13.384-13.519-194.913-0.002-389.823-0.002-584.736 0-13.578 0-13.575 0.010-13.589 13.293-0.006 4.417 0.106 8.839-0.065 13.248-0.484 12.455-10.134 22.908-22.48 24.503-12.139 1.568-25.478-6.337-27.46-18.54-3.548-21.839-3.468-44.026-0.002-65.89 1.694-10.692 11.676-17.62 23.132-18.572 3.512-0.292 7.061-0.159 10.595-0.159 107.47-0.007 214.937-0.006 322.402-0.006zM406.873 746.623c-6.146-0.022-11.568-2.038-16.087-6.187-11.048-10.139-22.098-20.28-33.019-30.553-34.492-32.45-68.959-64.926-103.351-97.484-6.902-6.534-9.881-14.559-6.963-24.019 2.868-9.298 9.33-14.79 18.808-16.585 8.228-1.556 14.918 1.717 20.806 7.189 14.432 13.418 28.944 26.745 43.307 40.236 22.726 21.344 45.541 42.602 67.894 64.334 5.377 5.227 8.261 4.243 12.497-0.811 48.167-57.474 96.446-114.858 144.728-172.238 23.101-27.455 46.175-54.929 69.457-82.229 9.12-10.694 22.795-12.205 33.156-4.293 10.255 7.829 12.45 21.773 3.496 33.008-17.407 21.839-35.672 42.997-53.649 64.378-48.826 58.073-97.672 116.132-146.552 174.162-11.935 14.169-24.022 28.216-36.055 42.3-4.843 5.665-10.876 8.888-18.475 8.791z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-dengdai2" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M60.014 542.385c0-37.982 30.385-68.367 68.367-68.367 45.578 0 75.964 30.385 75.964 68.367 0 45.578-30.385 75.964-75.964 75.964-37.982 0-68.367-30.385-68.367-75.964zM151.171 276.512v0c0-53.175 37.982-98.753 91.157-98.753s98.753 45.578 98.753 98.753v0c0 53.175-45.578 91.157-98.753 91.157s-91.157-37.982-91.157-91.157v0zM189.153 815.856v0c0-30.385 22.789-53.175 53.175-53.175s53.175 22.789 53.175 53.175v0c0 30.385-22.789 53.175-53.175 53.175s-53.175-22.789-53.175-53.175zM455.027 929.802v0c0-37.982 22.789-60.772 60.772-60.772s60.772 22.789 60.772 60.772v0c0 37.982-22.789 60.772-60.772 60.772-37.982 0-60.772-22.789-60.772-60.772zM751.287 815.856c0-22.789 15.193-37.982 37.982-37.982s37.982 15.193 37.982 37.982c0 22.789-15.193 37.982-37.982 37.982-22.789 0-37.982-15.193-37.982-37.982zM834.847 542.385c0-30.385 30.385-60.772 68.367-60.772 30.385 0 60.772 30.385 60.772 60.772 0 37.982-30.385 68.367-60.772 68.367-37.982 0-68.367-30.385-68.367-68.367zM660.13 276.512c0-75.964 60.772-129.139 129.139-129.139s129.139 53.175 129.139 129.139c0 68.367-60.772 129.139-129.139 129.139-68.367 0-129.139-60.772-129.139-129.139zM386.66 162.566c0-68.367 60.772-129.139 129.139-129.139s129.139 60.772 129.139 129.139c0 68.367-60.772 129.139-129.139 129.139-68.367 0-129.139-60.772-129.139-129.139z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-biaoti" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M981.873319 0c0 0-409.638476 4.012382-447.792429 42.167357L29.841896 546.405328c-37.734397 37.734397-37.734397 98.913751 0 136.648148l312.644447 312.64547c37.734397 37.734397 98.913751 37.734397 136.648148 0l504.238994-504.238994c38.153953-38.153953 40.60477-449.558654 40.60477-449.558654C1023.091049 19.059068 1004.719642 0.776689 981.873319 0zM757.75914 367.602102 757.75914 367.602102c-27.564785 27.564785-72.255615 27.564785-99.8204 0l0 0c-27.564785-27.564785-27.564785-72.255615 0-99.8204l0 0c27.564785-27.564785 72.255615-27.564785 99.8204 0l0 0C785.323926 295.346487 785.323926 340.037317 757.75914 367.602102z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-daima2" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M690.688 0.576 178.56 0.576c-62.016 0-109.632 54.336-109.632 116.992L68.928 913.92c0 62.72 47.168 109.888 109.824 109.888l682.752 0c62.528 0 116.928-47.424 116.928-110.272L978.432 288.384 690.688 0.576 690.688 0.576zM894.464 284.8l-203.328 0c-0.64 0 3.072 3.712 3.072 3.072L694.208 84.544 894.464 284.8 894.464 284.8zM861.504 966.976 178.752 966.976c-31.296 0-52.992-21.76-52.992-53.056L125.76 117.568c0-31.104 22.016-60.16 52.8-60.16l458.816 0 0 230.464c0 32.32 22.144 53.76 53.76 53.76L921.6 341.632l0 571.84C921.6 945.024 892.672 966.976 861.504 966.976L861.504 966.976zM430.08 754.816 309.504 634.24l0 40.192L430.08 553.856c11.072-11.072 11.072-29.12 0-40.192-11.072-11.072-29.12-11.072-40.192 0L269.312 634.24c-11.072 11.072-11.072 29.12 0 40.192l120.576 120.576c11.072 11.072 29.12 11.072 40.192 0C441.152 783.936 441.152 765.888 430.08 754.816zM617.28 553.856l120.576 120.576L737.856 634.24l-120.576 120.576c-11.072 11.072-11.072 29.12 0 40.192 11.072 11.072 29.12 11.072 40.192 0l120.576-120.576c11.072-11.072 11.072-29.12 0-40.192l-120.576-120.576c-11.072-11.072-29.12-11.072-40.192 0C606.144 524.736 606.144 542.72 617.28 553.856z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)