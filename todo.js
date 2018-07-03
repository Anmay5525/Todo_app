var input = document.getElementById("input");
var button = document.getElementById("button");
var ul = document.querySelector("ul");

//var list = document.querySelector("li");

/*function eventComplete()
{

	list.classList.toggle("done");
}
*/

function addItemOnClick()
{
	if(input.value.length > 0)
	{
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value + " "));
		ul.appendChild(li);
		input.value = "";
		//li.addEventListener("click", function(){
		//	li.classList.toggle("done");
		//});
		var img = document.createElement("img");
		img.src = "a.png";
		img.align = "middle";
		img.className = "img1";
		li.appendChild(img);
		img.addEventListener("click", function(){
			li.classList.toggle("class_btn");
		});
		
	}	
}

function addItemOnKeypress(event)
{	
	if(input.value.length > 0 && event.keyCode === 13)
	{
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value + "  "));
		ul.appendChild(li);
		input.value = "";
		//li.addEventListener("click", function(){
		//	li.classList.toggle("done");
		//});
		var img = document.createElement("img");
		img.src = "a.png";
		img.align = "middle";
		img.className = "img1";
		li.appendChild(img);
		img.addEventListener("click", function(){
			li.classList.toggle("class_btn");
		});
		
	}		
}


button.addEventListener("click", addItemOnClick);

input.addEventListener("keypress", addItemOnKeypress);
//list.addEventListener("click", eventComplete);