window.addEventListener("load",init)
var ans = 0;
function init(){
	a = document.getElementById("box_1");
	b = document.getElementById("box_2");
	result = document.getElementById("result");
	buttons = document.getElementsByTagName("button");
	for(var i = 0;i<buttons.length;i++)
		{
			buttons[i].addEventListener("click",do_opr);
		}
	/*document.getElementById("add").addEventListener("click",add);
	document.getElementById("sub").addEventListener("click",sub);
	document.getElementById("mul").addEventListener("click",mul);
	document.getElementById("div").addEventListener("click",div);
}*/
}
/*function add(){
	ans = parseInt(a.value) + parseInt(b.value);
	result.innerHTML = ans;
}
function sub(){
	ans = parseInt(a.value) - parseInt(b.value);
	result.innerHTML = ans;
}
function mul(){
	ans = parseInt(a.value) * parseInt(b.value);
	result.innerHTML = ans;
}
function div(){
	ans = parseInt(a.value) / parseInt(b.value);
	result.innerHTML = ans;
}*/
function do_opr(){
	opr = event.srcElement.innerHTML;
	result.innerHTML = eval(a.value+opr+b.value);
}