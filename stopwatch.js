var hr=0;
var min=0;
var sec=0;
var count=0;
var timer=false;



function start(){
timer=true;
stopwatch();

}
function stop()
{
	timer=false;

}
function reset()
{
	timer=false;
	hr=0;
	sec=0;
	min=0;
	count=0;
	document.getElementById("hr").innerHTML="00";
	document.getElementById("min").innerHTML="00";
	document.getElementById("sec").innerHTML="00";
	document.getElementById("count").innerHTML="00";

}
function stopwatch()
{ 
	if (timer == true) {
		count=count+1;
		if(count==100)
		{
			sec=sec+1;
			count=0;

		}
		if(sec==60)
		{

			min=min+1;
			sec=0;
		}
		if(min==60)
		{
			hr=hr+1;
			min=0;
		}
		document.getElementById('count').innerText=count;
		document.getElementById('sec').innerText=sec;
		document.getElementById('min').innerText=min;
		document.getElementById('hr').innerText=hr;
		setTimeout("stopwatch()",10);
	}

}
