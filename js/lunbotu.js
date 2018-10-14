var timer= null,
	index=0,
	aSlide=document.getElementById("banner").getElementsByTagName("div"),
	size=aSlide.length,
	next=document.getElementById("next"),
	prev=document.getElementById("prev"),
    dots = document.getElementById("dots").getElementsByTagName("span");
	
function stopPlay(){
	if(timer){
       clearInterval(timer);
	}
}
function starPlay(){
	timer = setInterval(function(){
		index++;
		if (index>=size) {
			index=0;			
		}
		changeImg();
	},1000);
	
}
function changeImg(){
	for (var i=0;i<size;i++) {
       	dots[i].className = "";
		aSlide[i].style.display="none";
	}
   		dots[index].className = "active";//className属性会重写类的名称
		aSlide[index].style.display="block";
}
function slideImg(){
	 var oB=document.getElementById("banner");
	oB.onmouseout=function(){
		starPlay();
	}
	oB.onmouseover=function(){
		stopPlay();
	}
	next.onclick=function(){
		index++;
       if(index>=size) index=0;
       changeImg();
	}
	prev.onclick=function(){
		index--;
		if (index<=0) index=size-1;
		changeImg();
	}
	oB.onmouseout();
	for(var i=0;i<size;i++){
       dots[i].id = i;
       dots[i].onclick = function(){
           index = this.id;
           changeImg();
       }
    }
}
slideImg();
