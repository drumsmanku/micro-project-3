

var total=document.getElementById("total-bill").value;
var final_total=0;

document.getElementById("five").addEventListener("click", ()=>{
  var total=document.getElementById("total-bill").value;
  final_total=Number(total)+Number(total*0.05);
  console.log(final_total);
})