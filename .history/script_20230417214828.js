

var total=document.getElementById("total-bill").value;
var final_total=0;

document.getElementById("five").addEventListener("click", ()=>{
  
  return final_total=Number(total)+Number(total*0.05);
  
});
