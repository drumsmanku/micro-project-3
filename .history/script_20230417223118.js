

var total=document.getElementById("total-bill").value;
var final_total=0;
var val1;

function get_value_of_people(){
   val1=Number(document.getElementById("main-people").innerHTML);
}
function update_add(){
  get_value_of_people();
  var fin_val1=val1+Number(1);
  document.getElementById("main-people").innerHTML=fin_val1;
}
function update_sub(){
  get_value_of_people();
  var fin_val2=val1-Number(1);
  document.getElementById("main-people").innerHTML=fin_val2;
}

document.getElementById("five").addEventListener("click", ()=>{
  
  return final_total=Number(total)+Number(total*0.05);
  
});
