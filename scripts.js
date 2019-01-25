var txt
var str = prompt("Please enter your name:", "Bugs Bunny");
var pos = str.indexOf(" ");
var fname = str.slice(0,pos);
var lname = str.slice(pos+1,);

//txt = pos + '\n' + fname + "\n" + lname;
//alert(txt);

document.getElementById("demo").innerHTML = pos + "<br />" + "First name = " + fname + "<br />" + "Last name = " +lname;
