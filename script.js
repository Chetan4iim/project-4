var h,m,s,d;

function init(){
	d = new Date();
	h = d.getHours();
	m = d.getMinutes();
	s = d.getSeconds();
	clock();
	
}


function clock(){
	s=s+1;
	if(s==60){
		s=0;
		m=m+1;
		if(m==60){
			m=0;
			h=h+1;
			if(h==24){
				h=0;
			}
			
		}
	}
	change('hour',h);
	change('min',m);
	change('sec',s);
	change('mode',h);

	setTimeout(clock,1000);
}

function change(id,val){
	if(val<10){
		val='0'+val;
	}
	if(id=='mode'){
		if(val<12){
		val='AM';
		}
			else{
			val='PM';
			}
			
		}
	if(id=='hour'){
		if(val<13){
			val=val;
		}
	else{
		val=val-12;
	}
	if(val<10){
	val='0'+val;
	}
	}
	
	
	document.getElementById(id).innerHTML= val; 
	
}
window.onload= init;
