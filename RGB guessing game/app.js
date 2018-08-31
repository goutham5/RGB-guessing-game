var colors=[];
var picked=undefined;
var a = document.getElementById("sq1");
var b = document.getElementById("sq2");
var c = document.getElementById("sq3");
var d = document.getElementById("sq4");
var e = document.getElementById("sq5");
var f = document.getElementById("sq6");
var g=document.getElementById("inn");
var h=document.getElementById("i1");
var i=document.getElementById("i2");
var j=document.getElementById("r");
var k=document.getElementsByClassName("container2");
var l=document.getElementById("res");
picked=Math.floor(Math.random()*6);
//validation logic
a.addEventListener("click",function(){
if(colors[picked]==colors[0]){
	l.textContent="correct!!!"
	a.style.background="#232323";
	b.style.background="#232323";
	c.style.background="#232323";
	d.style.background="#232323";
	e.style.background="#232323";
	f.style.background="#232323";
k[0].style.backgroundColor=colors[picked];
}else{
a.style.background="#232323"
}
});
b.addEventListener("click",function(){
 if(colors[picked]==colors[1]){
 	l.textContent="correct!!!"
a.style.background="#232323";
	b.style.background="#232323";
	c.style.background="#232323";
	d.style.background="#232323";
	e.style.background="#232323";
	f.style.background="#232323";
k[0].style.backgroundColor=colors[picked];
}else{
	b.style.background="#232323";

}
});
c.addEventListener("click",function(){
 if(colors[picked]==colors[2]){
 	a.style.background="#232323";
	b.style.background="#232323";
	c.style.background="#232323";
	d.style.background="#232323";
	e.style.background="#232323";
	f.style.background="#232323";
	l.textContent="correct!!!"
k[0].style.backgroundColor=colors[picked];
}else{
	c.style.background="#232323";

}
});
d.addEventListener("click",function(){
 if(colors[picked]==colors[3]){
 	a.style.background="#232323";
	b.style.background="#232323";
	c.style.background="#232323";
	d.style.background="#232323";
	e.style.background="#232323";
	f.style.background="#232323";
	l.textContent="correct!!!"
k[0].style.backgroundColor=colors[picked];
}else{
	d.style.background="#232323";

}
});
e.addEventListener("click",function(){
 if(colors[picked]==colors[4]){
 	a.style.background="#232323";
	b.style.background="#232323";
	c.style.background="#232323";
	d.style.background="#232323";
	e.style.background="#232323";
	f.style.background="#232323";
	l.textContent="correct!!!"
k[0].style.backgroundColor=colors[picked];
}else{
	e.style.background="#232323";


}
});
f.addEventListener("click",function(){
 if(colors[picked]==colors[5]){
 	a.style.background="#232323";
	b.style.background="#232323";
	c.style.background="#232323";
	d.style.background="#232323";
	e.style.background="#232323";
	f.style.background="#232323";
	l.textContent="correct!!!"
k[0].style.backgroundColor=colors[picked];
}else{
	f.style.background="#232323";
}
}); 
//refresh logic & restart logic
g.addEventListener("click",function(){
 alert("refresh");
});
for(var i=0;i<6;i++){
colors.push(random())
console.log(colors);
}
putcolor();
j.textContent=colors[picked];
g.addEventListener("mouseover",function(){
g.style.background="purple";
g.style.color="white";
});
g.addEventListener("mouseout",function(){
g.style.background="white";
g.style.color="black";
});
h.addEventListener("mouseover",function(){
h.style.background="purple";
h.style.color="white";
});
h.addEventListener("mouseout",function(){
h.style.background="white";
h.style.color="black";
});
i.addEventListener("mouseover",function(){
i.style.background="purple";
i.style.color="white";
});
i.addEventListener("mouseout",function(){
i.style.background="white";
i.style.color="black";
});


//random color generator logic
function random(){
    var r = Math.floor(Math.random() * 255);
    var g= Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "RGB("+r+","+g+","+b+")";
}
//applying the random color to the squares logic
function putcolor(){
	a.style.background=colors[0];
	b.style.background=colors[1];
	c.style.background=colors[2];
	d.style.background=colors[3];
	e.style.background=colors[4];
	f.style.background=colors[5];
}
