//----------DHTML Menu Created using AllWebMenus PRO ver 5.3-#882---------------
//F:\Internet\Websites\Coastal Interiors\site\menuwork.awm
var awmMenuName='menu';
var awmLibraryBuild=882;
var awmLibraryPath='/awmdata';
var awmImagesPath='/awmdata';
var awmSupported=(navigator.appName + navigator.appVersion.substring(0,1)=="Netscape5" || document.all || document.layers || navigator.userAgent.indexOf('Opera')>-1 || navigator.userAgent.indexOf('Konqueror')>-1)?1:0;
if (awmSupported){
var nua=navigator.userAgent,scriptNo=(nua.indexOf('Chrome')>-1)?2:((nua.indexOf('Safari')>-1)?2:(nua.indexOf('Gecko')>-1)?2:((nua.indexOf('Opera')>-1)?4:1));
var mpi=document.location,xt="";
var mpa=mpi.protocol+"//"+mpi.host;
var mpi=mpi.protocol+"//"+mpi.host+mpi.pathname;
if(scriptNo==1){oBC=document.all.tags("BASE");if(oBC && oBC.length) if(oBC[0].href) mpi=oBC[0].href;}
while (mpi.search(/\\/)>-1) mpi=mpi.replace("\\","/");
mpi=mpi.substring(0,mpi.lastIndexOf("/")+1);
var e=document.getElementsByTagName("SCRIPT");
for (var i=0;i<e.length;i++){if (e[i].src){if (e[i].src.indexOf(awmMenuName+".js")!=-1){xt=e[i].src.split("/");if (xt[xt.length-1]==awmMenuName+".js"){xt=e[i].src.substring(0,e[i].src.length-awmMenuName.length-3);if (e[i].src.indexOf("://")!=-1){mpi=xt;}else{if(xt.substring(0,1)=="/")mpi=mpa+xt; else mpi+=xt;}}}}}
while (mpi.search(/\/\.\//)>-1) {mpi=mpi.replace("/./","/");}
var awmMenuPath=mpi.substring(0,mpi.length-1);
while (awmMenuPath.search("'")>-1) {awmMenuPath=awmMenuPath.replace("'","%27");}
document.write("<SCRIPT SRC='"+awmMenuPath+awmLibraryPath+"/awmlib"+scriptNo+".js'><\/SCRIPT>");
var n=null;
awmzindex=1000;
}

var awmImageName='';
var awmPosID='';
var awmPosClass='';
var awmSubmenusFrame='';
var awmSubmenusFrameOffset;
var awmOptimize=0;
var awmHash='RVWVXJMQFMDOIQPSKUTWOD';
var awmNoMenuPrint=1;
var awmUseTrs=0;
var awmSepr=["0","","",""];
var awmMarg=[0,0,0,0];
function awmBuildMenu(){
if (awmSupported){
awmImagesColl=["floors-off.png",68,17,"floors-on.png",68,17,"wall-fabric-off.png",161,17,"wall-fabric-on.png",161,17,"kitchen-bath-off.png",152,17,"kitchen-bath-on.png",152,17,"tile-off.png",55,17,"tile-on.png",55,17,"lights-off.png",64,17,"lights-on.png",64,17];
awmCreateCSS(0,1,0,n,n,n,n,n,'none','0','#000000','0px 0px 0px 0',0,'0px / 0px',n);
awmCreateCSS(1,2,1,'#000000',n,n,'14px sans-serif',n,'none','0','#000000','0px 0px 0px 0',1,'0px / 0px',n);
awmCreateCSS(0,2,1,'#FFFFFF',n,n,'14px sans-serif',n,'none','0','#000000','0px 0px 0px 0',1,'0px / 0px',n);
var s0=awmCreateMenu(0,0,0,0,1,0,0,0,6,10,10,0,1,0,0,0,1,n,n,100,1,0,-500,0,0,-1,1,200,200,0,0,0,"0,0,0",n,n,n,n,n,n,n,n,0,0,0,0,1,0,0,0,1,0,0,1);
it=s0.addItemWithImages(1,2,2,"","","","",0,1,0,3,3,3,n,n,n,"floors.htm",n,n,n,"floors.htm",n,0,0,2,n,n,n,n,n,n,0,0,0,0,0,n,n,n,0,0,0,0,n);
it=s0.addItemWithImages(1,2,2,"","","","",2,3,2,3,3,3,n,n,n,"fabrics.htm",n,n,n,"fabrics.htm",n,0,0,2,n,n,n,n,n,n,0,0,0,0,0,n,n,n,0,0,0,1,n);
it=s0.addItemWithImages(1,2,2,"","","","",4,5,4,3,3,3,n,n,n,"kitchenbath.htm",n,n,n,"kitchenbath.htm",n,0,0,2,n,n,n,n,n,n,0,0,0,0,0,n,n,n,0,0,0,2,n);
it=s0.addItemWithImages(1,2,2,"","","","",6,7,6,3,3,3,n,n,n,"tile.htm",n,n,n,"tile.htm",n,0,0,2,n,n,n,n,n,n,0,0,0,0,0,n,n,n,0,0,0,3,n);
it=s0.addItemWithImages(1,2,2,"","","","",8,9,8,3,3,3,n,n,n,"lights.htm",n,n,n,"lights.htm",n,0,0,2,n,n,n,n,n,n,0,0,0,0,0,n,n,n,0,0,0,4,n);
s0.pm.buildMenu();
}}