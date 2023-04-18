

var total;
var final_total;
var val1;
var tip;
var total_per_person;
var tip_per_person;

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

function five(){
  total=document.getElementById("total-bill").value;
  tip=Number(total*0.05)
  final_total=Number(total)+ tip;
  get_value_of_people();
  if(val1===0){
    document.getElementById("total-per-person").innerHTML=`₹${final_total}.00`;
    document.getElementById("tip-per-person").innerHTML=`₹${tip}.00`;
    
  }
  else{
    total_per_person=`₹${final_total/val1}.00`;
    tip_per_person=`₹${tip/val1}.00`;
  }

}

