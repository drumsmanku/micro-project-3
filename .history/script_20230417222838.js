

var total=document.getElementById("total-bill").value;
var final_total=0;

function get_value_of_people(){
  var val1=Number(document.getElementById("main-people").innerHTML);
}
function update(){
  get_value_of_people();
  var fin_val=val1+Number(1);
  document.getElementById("main-people").innerHTML=fin_val;
}

document.getElementById("five").addEventListener("click", ()=>{
  
  return final_total=Number(total)+Number(total*0.05);
  
});
