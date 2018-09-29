var x = 0;
var y =0;
var xpow =0;
var ypow =0;
var final=0;
var array = graph();

function graph()
{
 array[x] = document.getElementById("1").value;
 array[xpow] = document.getElementById("2").value;
 
 array[y] = document.getElementById("3").value;
 array[ypow] = document.getElementById("4").value;
 
 array[final] = document.getElementById("5").value;
 
 
 alert("X coordinate are : " + array[x] + "X Power coordinate are : " + array[xpow] + "Y coordinate are : " + array[y] + "Y power coordinate are : " + array[xpow] + "Equals to : " + array[final] );
 
 
}