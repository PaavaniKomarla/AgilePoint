var n1 = "This apple is my apple".lastIndexOf("apple"); // returns value of 17
document.write("<br>" + n1);
var n2 = "This apple is my apple".lastIndexOf("apple", 12); // returns value of 5
document.write("<br>" + n2);
var n3 = "This apple is my apple".lastIndexOf("apple", 3);
document.write("<br>" + n3 + "<br>");

var testValue = "This is the Cookbook's test string";
var subsValue = "Cookbook";
var iValue = testValue.indexOf(subsValue); // returns value of 12, index of substring
if (iValue != -1) document.write("true<br>");

var fruit1 = "apple";
var fruit2 = "grape";
var i = fruit1.localeCompare(fruit2);
document.write(i);

document.write("<br>Hello world");
/*var name = prompt("enter your name"," ");
if(name=="Sia")
{
  alert("Very well");
}
else
{
  alert("So sad")
}*/
