Search.setIndex({docnames:["datasets","documents","index","installing","models","transforms","utils"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["datasets.rst","documents.rst","index.rst","installing.rst","models.rst","transforms.rst","utils.rst"],objects:{"":{doctr:[2,0,0,"-"]},"doctr.datasets":{CORD:[0,1,1,""],FUNSD:[0,1,1,""],SROIE:[0,1,1,""],encode_sequences:[0,2,1,""]},"doctr.datasets.core":{VisionDataset:[0,1,1,""]},"doctr.datasets.loader":{DataLoader:[0,1,1,""]},"doctr.documents":{Artefact:[1,1,1,""],Block:[1,1,1,""],Document:[1,1,1,""],DocumentFile:[1,1,1,""],Line:[1,1,1,""],PDF:[1,1,1,""],Page:[1,1,1,""],Word:[1,1,1,""],read_html:[1,2,1,""],read_img:[1,2,1,""],read_pdf:[1,2,1,""]},"doctr.documents.DocumentFile":{from_images:[1,3,1,""],from_pdf:[1,3,1,""],from_url:[1,3,1,""]},"doctr.documents.PDF":{as_images:[1,3,1,""],get_artefacts:[1,3,1,""],get_words:[1,3,1,""]},"doctr.models.detection":{db_resnet50:[4,2,1,""],detection_predictor:[4,2,1,""],linknet:[4,2,1,""]},"doctr.models.export":{convert_to_fp16:[4,2,1,""],convert_to_tflite:[4,2,1,""],quantize_model:[4,2,1,""]},"doctr.models.recognition":{crnn_vgg16_bn:[4,2,1,""],recognition_predictor:[4,2,1,""],sar_resnet31:[4,2,1,""],sar_vgg16_bn:[4,2,1,""]},"doctr.models.zoo":{ocr_predictor:[4,2,1,""]},"doctr.transforms":{ColorInversion:[5,1,1,""],Compose:[5,1,1,""],LambdaTransformation:[5,1,1,""],Normalize:[5,1,1,""],OneOf:[5,1,1,""],RandomApply:[5,1,1,""],RandomBrightness:[5,1,1,""],RandomContrast:[5,1,1,""],RandomGamma:[5,1,1,""],RandomHue:[5,1,1,""],RandomJpegQuality:[5,1,1,""],RandomSaturation:[5,1,1,""],Resize:[5,1,1,""],ToGray:[5,1,1,""]},"doctr.utils.metrics":{ExactMatch:[6,1,1,""],LocalizationConfusion:[6,1,1,""],OCRMetric:[6,1,1,""]},"doctr.utils.visualization":{visualize_page:[6,2,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","function","Python function"],"3":["py","method","Python method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:function","3":"py:method"},terms:{"0123456789":0,"0123456789abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz":0,"02562":[],"0361328125":[],"06640625":[],"0966796875":[],"100":[4,5,6],"1000":4,"1024":4,"108":[],"110":6,"116":[],"123":[],"126":[],"128":4,"131":[],"1357421875":[],"1396484375":[],"1420":[],"150":6,"154":0,"1552":[],"160":[],"1630859375":[],"1684":[],"16bn":[],"1778":[],"1782":[],"185546875":[],"1900":[],"1910":[],"199":4,"1999":[],"200":6,"2003":[],"2012":[],"2013":[],"2015":[],"2019":[],"224":[4,5],"225":5,"229":5,"2504":[],"255":[4,5,6],"256":4,"2710":[],"30595":4,"3232421875":[],"340":[],"3456":[],"3515625":[],"406":5,"456":5,"485":5,"51171875":[],"512":[],"529":[],"533":4,"540":[],"5478515625":[],"580":[],"5810546875":[],"583":[],"595":4,"597":[],"600":[4,6],"611":4,"625":4,"629":4,"630":4,"640":4,"641":[],"652":[],"653":[],"660":4,"664":4,"665":[],"666":4,"672":4,"689":4,"700":4,"701":4,"702":4,"713":4,"721":[],"733":4,"735":[],"745":4,"753":4,"775":[],"780":4,"781":4,"783":4,"789":4,"800":[4,6],"817":4,"8275l":4,"830":4,"856":[],"8564453125":[],"857":[],"860":4,"8603515625":[],"862":4,"863":4,"875":4,"913":4,"914085328578949":[],"917":4,"921":4,"9578408598899841":[],"9949972033500671":[],"\u00e0\u00e2\u00e9\u00e8\u00ea\u00eb\u00ee\u00ef\u00f4\u00f9\u00fb\u00e7\u00e0\u00e2\u00e9\u00e8\u00eb\u00ee\u00ef\u00f4\u00f9\u00fb\u00e7":0,"\u00e0\u00e2\u00e9\u00e8\u00ea\u00eb\u00ee\u00ef\u00f4\u00f9\u00fb\u00fc\u00e7\u00e0\u00e2\u00e9\u00e8\u00ea\u00eb\u00ee\u00ef\u00f4\u00f9\u00fb\u00fc\u00e7":[],"\u00e1\u00e0\u00e2\u00e3\u00e9\u00ea\u00eb\u00ed\u00ef\u00f3\u00f4\u00f5\u00fa\u00fc\u00e7\u00e1\u00e0\u00e2\u00e3\u00e9\u00eb\u00ed\u00ef\u00f3\u00f4\u00f5\u00fa\u00fc\u00e7":[],"\u00e1\u00e9\u00ed\u00f3\u00fa\u00fc\u00f1\u00e1\u00e9\u00ed\u00f3\u00fa\u00fc\u00f1":[],"\u00e4\u00f6\u00fc\u00df\u00e4\u00f6\u00fc\u00df":[],"abstract":0,"boolean":[],"byte":[1,4],"case":6,"class":[0,1,5,6],"default":[1,4],"export":[1,6],"final":[],"float":[1,5,6],"function":[4,5,6],"import":[0,1,4,5,6],"int":[0,1,4,5,6],"new":[],"public":2,"return":[0,1,4],"static":[],"true":[0,1,4,5,6],"while":[],AWS:[2,4],And:4,EOS:[],FPS:4,For:4,IDs:[],Its:[2,4],The:[0,1,4,6],Then:4,abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz:0,abdef:[],abl:[],about:4,abov:4,accent:6,access:[0,1,2],account:[],accuraci:6,achiev:[],activ:[],add:5,add_label:6,adding:5,addition:4,address:1,adjust:5,after:[],again:[],aggreg:[0,6],align:1,all:[0,1,2,4,5,6],along:[],also:[],analysi:[1,4],angl:1,ani:[0,1,2,4,6],annot:1,anoth:[0,4],anyon:2,api:[],appli:[0,5],applic:[2,4],appropri:[],arch:4,architectur:[2,4],archiv:0,arg:[],argument:[0,1],around:4,arrai:6,art:2,artefact:[],artefact_typ:1,arxiv:[],as_imag:1,asarrai:6,ascii_lett:0,aspect:5,assess:6,assign:6,associ:1,assum:[],assume_straight_pag:[],astyp:[4,6],attend:[2,4],autoclass:0,autom:2,avail:[4,5],averag:[4,5],avoid:[],aws:4,b_j:6,backbon:4,backend:4,base:[2,4],baselin:[2,4],batch:[0,4,5],batch_siz:0,bbox:[],been:[4,6],befor:0,begin:6,being:[4,6],belong:[],below:[],benchmark:[],better:[],between:[5,6],bgr:1,bilinear:[4,5],binar:[2,4],binari:[1,4],blank:[],block:[4,6],block_1_1:[],blue:[],bmvc:[],bodi:[],bool:[0,1,4,5,6],both:[2,4,5],bottom:[],bound:[1,4,5,6],box:[1,4,6],brew:[],bright:5,broadcast:[],browser:[],build:[],c_j:[],cach:[],cache_sampl:[],cairo:[],callabl:[0,5],can:[0,4],capabl:4,cfg:[],challeng:[],challenge2_test_task12_imag:[],challenge2_test_task1_gt:[],challenge2_training_task12_imag:[],challenge2_training_task1_gt:[],channel:[1,4,5],charact:[0,1,2,4,6],charactergener:[],charg:4,charset:[],chart:1,check:[],classif:4,classmethod:1,clone:3,code:[1,2],collate_fn:[],collect:1,color:5,colorinvers:5,column:1,com:[1,3],combin:4,common:[5,6],compar:2,comparison:[],competit:0,compil:[],complementari:6,compon:4,compos:[0,2,4],comprehens:[],comput:[4,6],conda:[],confid:1,confus:6,consecut:[4,5],consid:[1,6],consist:[],consolid:[0,2],constant:5,constraint:[],consum:[],contain:[],content:[0,1],contrast:5,contrast_factor:5,conv_sequ:4,convers:1,convert:[1,4,5],convert_page_to_numpi:1,convert_to_fp16:4,convert_to_tflit:4,convolut:2,coordin:1,cord:[0,2,4],core:[0,4,6],corner:[],correct:5,correspond:4,counterpart:[],cpu:[2,4],crnn:[2,4],crnn_mobilenet_v3_larg:[],crnn_mobilenet_v3_smal:[],crnn_resnet31:4,crnn_vgg16_bn:4,crnn_vgg16_bn_predictor:[],crop:4,currenc:0,current:[],daili:2,data:[1,2,4,5],dataload:0,dataset:4,date:[],db_crnn_resnet:4,db_crnn_vgg:4,db_mobilenet_v3_larg:[],db_resnet50:4,db_resnet50_predictor:[],db_sar_resnet:4,db_sar_vgg:4,dbnet:4,decod:1,decode_img_as_tensor:[],deep:4,def:[],defer:0,defin:6,deform:4,degre:[],degress:1,delimit:[],delta:5,demo:[],depend:2,deploy:[],describ:4,descript:[],design:5,desir:[],det_arch:4,detail:[],detect:[],detection_predictor:4,detectionmetr:[],detectionpredictor:4,develop:[],developp:3,deviat:5,dict:[1,6],dictionari:1,differenti:[2,4],differentiable_binar:4,digit:0,dimens:[1,4,6],dimension:5,direct:[],directli:4,disclaim:4,disk:0,displai:6,display_artefact:[],distanc:6,distribut:5,div:[],divid:[],doc:[1,4],docartefact:[],doctr:3,document:[0,4,6],documentfil:1,don:[],done:[],download:0,downsiz:[],draw:5,draw_proba:[],drop:0,drop_last:0,dtype:4,dummy_img:[],dynam:[],dynamic_seq_length:[],each:[0,1,2,4,5],easi:[2,6],easier:4,easili:[1,2,4,6],effici:[0,2,4],either:4,element:[0,1,4],enabl:1,enclos:1,encod:[0,2,4],encode_sequ:0,end:[0,2,6],engin:4,english:[],enhanc:[],enough:4,entir:1,entri:[],eos:0,equiv:[],error:6,etc:1,evalu:[0,4],everyth:[],exact:6,exactmatch:6,exampl:[0,1,4,5,6],exclud:4,expand:[],expect:[0,1,4,5],experi:4,explan:4,exploit:[2,4],export_as_straight_box:[],export_as_xml:[],express:5,extens:1,extra:[],extract:[0,2],extract_arch:0,extractor:4,f_a:6,factor:5,fallback:[],fals:[0,4,5,6],famili:[],fast:[0,2],favorit:[],featur:[4,6],feed:4,few:[],figsiz:6,figur:6,file:0,file_hash:0,file_nam:0,file_path:[],find:[],fine:2,firsthand:[],fit:[],fitz:1,flag:[],float16:[],float32:4,focus:[],folder:4,follow:[4,5,6],font:[],font_famili:[],font_siz:[],foral:6,form:[0,2],format:[1,4],forpost:[0,2],fp16:4,frac:6,frame:4,framework:[0,5],french:[0,4],friendli:2,from:[0,1,2,4,5,6],from_imag:1,from_keras_model:[],from_pdf:1,from_url:1,full:[0,4,6],fulli:2,funsd:[0,2,4],futur:[],g_x:6,gamma:5,gaussian:5,gdk:[],gener:[],geometri:1,geq:6,german:[],get:1,get_artefact:1,get_word:1,gettextword:1,git:2,github:3,given:[0,4,6],good:[],googl:[],googlevis:2,gpu:2,graph:1,grayscal:5,ground:6,groung:[],gt_box:[],gt_label:[],gtk:[],gts:[],gvision:4,half:4,handl:0,has:[0,6],hat:6,have:[0,4,6],head:[],height:1,hello:6,help:[],here:[0,5],high:1,higher:[],hocr:[],homebrew:[],horizont:1,hsv:5,html:[],http:[1,3],hue:5,ic03:[],ic13:[],icdar2019:0,icdar:[],identifi:[2,4],ignor:6,ignore_acc:6,ignore_cas:6,iiit5k:[],iiit:[],imag:[0,1,2,4,5,6],imagenet:[],img:[0,5],img_cont:[],img_fold:[],img_path:[],implement:[0,1,4,5,6],includ:4,increas:5,index:1,indic:6,infer:5,inference_input_typ:[],inference_output_typ:[],inform:[0,2,4],inherit:[0,4],input:[1,4,5],input_pag:[4,6],input_shap:4,input_t:4,input_tensor:4,inspir:5,instal:2,instanc:4,instanti:4,instead:1,int64:[],int8:[],integ:6,integr:[],interact:6,interpol:[4,5],interpret:[0,1],intersect:6,invert:5,invoic:[],involv:4,iou:6,iou_thresh:6,irregular:[2,4],isn:0,iter:0,its:[0,1],jpeg:5,jpegqual:5,jpg:1,json:[],json_output:[],just:4,kera:4,kernel_s:4,keyword:[0,1],kwarg:[0,1,4,6],l_j:6,label:[],label_fil:[],label_fold:[],lambda:5,lambdatransform:5,lang:[],languag:[1,2],larg:[],largest:6,last:[0,3,4],latest:[],latin:0,layout:[],learn:4,least:[],left:6,legacy_french:[],length:0,let:4,letter:6,level:[4,6],levenshtein:6,leverag:[],libffi:[],librari:3,light:2,limits_:6,line:[2,6],line_1_1:[],linknet16:[],linknet:[2,4],linux:[],list:[0,1,5],load:[2,4],loader:0,local:[2,4,6],localis:[],localizationconfus:6,locat:[],logo:1,look:[],lower:5,maco:[],made:2,mai:[],main:[],maintain:2,make:[4,6],mani:[],map:[0,4],mask_shap:[],master:[],match:[2,6],mathcal:6,matplotlib:6,max:6,max_angl:[],max_area:[],max_delta:5,max_dist:6,max_gain:5,max_gamma:5,max_qual:5,max_ratio:[],maximum:[0,6],maxval:[4,5],mbox:6,mean:[5,6],meaniou:6,meant:1,measur:4,memori:[],meta:[],method:5,metric:[4,6],might:4,min_area:[],min_gain:5,min_gamma:5,min_qual:5,min_ratio:[],min_val:5,minde:3,minim:[],minimum:6,minval:5,miss:[],mix:2,mobilenet:[],mobilenet_v3_larg:[],mobilenet_v3_large_r:[],mobilenet_v3_smal:[],mobilenet_v3_small_r:[],mobilenetv3:[],mobilenetv3_larg:[],mobilenetv3_smal:[],mode:3,model:[0,6],modifi:[],modul:[1,4,5,6],moment:[],more:[],most:4,multi:[],multipl:[0,1,5],multipli:5,name:[0,4],natur:2,ndarrai:[0,1,6],necessari:[],need:6,neg:5,nest:[],nestedobject:5,network:[2,4],neural:[2,4],newer:3,next:0,noisi:[0,2],non:[1,5,6],none:[0,1],normal:[4,5],note:[],num_sampl:[],number:[0,5,6],numpi:[0,1,4,6],object:0,obtain:[],ocr:[0,2,6],ocr_carea:[],ocr_db_crnn:6,ocr_db_crnn_vgg:[],ocr_db_sar_resnet:[],ocr_db_sar_vgg:[],ocr_lin:[],ocr_pag:[],ocr_par:[],ocr_predictor:4,ocrdataset:0,ocrmetr:6,ocrpredictor:4,ocrx_word:[],offset:5,onc:[0,4],one:[0,4,5],oneof:5,ones:[],onli:[5,6],oper:[],ops:[0,5],opsset:[],optic:[2,4],optim:2,option:[0,1],order:[0,1,4],org:[],organ:1,orient:1,otherwis:6,our:[2,4],out:[4,5,6],outpout:[],output:[1,5],output_s:[1,5],over:6,overlai:[],overwrit:0,own:2,packag:[2,6],pad:[0,4,5],page1:1,page2:1,page:[4,6],page_1:[],page_idx:1,pair:6,pango:[],paper:[],par_1_1:[],param:[4,5],paramet:[0,1,4,5,6],pars:[0,2],part:5,parti:[],pass:[0,4],path:[1,4],pathlib:1,pdf:1,per:[4,5],perform:[1,2,4,5,6],phase:[],physic:1,pick:5,pictur:1,pip:3,pixbuf:[],pixel:[1,5],platinum:4,plot:[],plt:6,png:1,polygon:[],pool:[],portugues:[],posit:6,possibl:6,post:[],postprocessor:4,potenti:4,power:2,ppageno:[],pre:[],precis:[4,6],pred:[],pred_box:[],pred_label:[],predefin:0,predict:[1,6],predictor:[],prefer:0,preprocessor:4,present:0,preserv:5,preserve_aspect_ratio:5,pretrain:[2,4,6],print:[],prior:[],privat:[],probabl:5,procedur:5,process:[1,2],processor:[],produc:4,product:[],properli:0,properti:4,provid:[2,4],publicli:[],punctuat:0,purpos:4,pyplot:6,python:[0,2,5],pytorch:[],qualiti:5,quantiz:4,quantize_model:4,quickli:2,quicktour:[],rand:[4,6],random:[4,5,6],randomappli:5,randombright:5,randomcontrast:5,randomcrop:[],randomgamma:5,randomhu:5,randomjpegqu:5,randomli:5,randomrot:[],randomsatur:5,rang:5,ratio:5,raw:1,read:[2,4],read_html:1,read_img:1,read_img_as_numpi:[],read_img_as_tensor:[],read_pdf:1,reader:1,readi:[],real:[2,4,5],recal:[4,6],receipt:[0,2],reco_arch:4,recognit:6,recognition_predictor:4,recognitionpredictor:4,rectangular:[],recurr:2,red:[],reduc:5,refer:[],regroup:6,rel:1,relat:[],releas:3,relu:4,repositori:2,repr:5,repres:[1,4],represent:[2,4],representative_dataset:[],requir:[3,5],research:2,resiz:[4,5],resnet31:[],resnet:4,resolv:1,resourc:[],respons:[],rest:[5,6],result:1,resum:[],reusabl:4,rgb:[1,5],rgb_output:1,right:[4,6],rnn:[],road:[],robust:2,root:[],rotat:1,rotated_bbox:[],run:[],same:[1,6],sampl:0,sample_transform:0,sar:[2,4],sar_resnet31:4,sar_resnet31_predictor:[],sar_vgg16_bn:4,sar_vgg16_bn_predictor:[],satur:5,save:[0,4],saved_model:4,scale:6,scan:[0,2],scene:[2,4],scheme:4,score:[],scratch:2,seamless:2,seamlessli:[],search:[],searchabl:[],second:4,section:[],seemlessli:2,seen:4,segment:[2,4],semant:[2,4],sens:6,sensit:[],separ:4,sequenc:[0,1,2,4,6],sequenti:[4,5],serial:4,serialized_model:4,set:[0,4,6],sever:[1,5],sha256:0,shape:[1,4,5,6],share:[],shift:5,should:[0,1,6],show:[2,4,6],shuffl:0,side:6,signatur:1,signific:0,simpl:[2,4],sinc:0,size:[0,1,4,5],small:2,smallest:1,some:[],sos:[],sourc:[0,1,4,5,6],span:[],spanish:[],spatial:1,special:2,specif:[0,6],specifi:1,speed:[2,4],sroie:0,stabl:3,stage:2,standard:5,start:[],state:2,statist:4,std:5,str:[0,1,4,5,6],straight:[],stream:1,street:[],strictli:6,string:[0,1,4],strive:[],strong:[2,4],structur:4,subset:[0,4],sum:6,summari:6,support:4,supported_op:[],supported_typ:[],svt:[],symbol:4,symmetr:[],symmetric_pad:[],synthes:[],synthesize_pag:[],synthet:[],synthtext:[],system:[],take:[],target:[0,1,4,5],target_s:0,target_spec:[],task2:[],task:[0,2,4],tax:[],templat:1,tensor:[0,4,5],tensorflow:[0,2,4,5],test_set:[],text:1,textmatch:[],textract:[2,4],textual:[0,1,2],tf_model:4,tflite:4,tflite_builtins_int8:[],tfliteconvert:[],than:6,thei:[],them:0,thi:[2,3,4,6],thing:[],third:[],those:[1,4],through:[0,5],time:[0,2,4,6],titl:1,togeth:[1,4],tograi:5,top:[],torch:[],torchvis:5,toward:[],train:[0,4,5],train_it:0,train_load:0,train_set:0,trainabl:[2,4],tranform:5,transcrib:[],transfo:5,transform:[0,2],truth:6,tune:2,tupl:[1,4,5],turn:4,two:1,type:[1,4],typic:[],ucsd:[],uint8:[4,6],underli:0,underneath:1,understand:[0,2],unfortun:[],unidecod:[],uniform:[4,5],uniformli:[],uninterrupt:1,union:[1,6],updat:6,upper:5,url:[0,1],usabl:4,usag:4,use:[0,4,6],use_broadcast:[],useabl:[],used:4,user:[1,2],uses:[],using:[0,3,4],utf:[],util:[2,4,5],valu:[1,5],valuabl:2,varieti:[],variou:[],veri:2,verifi:0,version:4,vgg16:4,vgg16_bn:[],vgg:4,via:2,view:[],vision:[],visiondataset:0,visualize_pag:6,vocab:4,vocabulari:[],wai:[0,2,4],want:[],warm:4,warmup:[],web:1,websit:[],well:[],were:1,when:6,where:[1,6],whether:[0,1,6],which:4,whichev:[],width:1,window:6,wish:[],without:4,word:[2,4,6],word_1_1:[],word_1_2:[],word_1_3:[],words_onli:6,worker:0,world:6,wrap:[],wrapper:[0,5],written:1,www:1,x12larg:4,x_ascend:[],x_descend:[],x_i:6,x_size:[],x_wconf:[],xeon:4,xhtml:[],xmax:1,xmin:1,xml:[],xml_bytes_str:[],xml_element:[],xml_output:[],xmln:[],y_i:6,y_j:6,yield:[],ymax:1,ymin:1,you:4,your:[0,1,4,6],yoursit:1,zero:[4,5]},titles:["doctr.datasets","doctr.documents","DocTR: Document Text Recognition","Installation","doctr.models","doctr.transforms","doctr.utils"],titleterms:{"2021":[],"export":4,Using:4,approach:4,architectur:[],artefact:1,avail:0,backbon:[],block:1,build:2,changelog:[],choos:[],compos:5,compress:4,conda:[],content:2,data:0,dataset:[0,2],detect:[2,4],doctr:[0,1,2,4,5,6],document:[1,2],end:4,evalu:6,featur:2,file:1,get:2,git:3,half:[],implement:2,infer:[],instal:3,integr:2,line:1,lite:[],load:0,main:[],model:[2,4],notebook:[],ocr:4,output:4,packag:3,page:1,post:4,pre:4,precis:[],predictor:[2,4],prepar:[],prerequisit:[],process:4,python:3,quantiz:[],read:1,recognit:[2,4],right:[],savedmodel:4,should:[],stage:4,start:2,structur:1,support:[0,5],task:6,tensorflow:[],text:[2,4],train:2,transform:5,two:4,util:6,via:3,visual:6,vocab:0,what:[],word:1,your:2,zoo:4}})