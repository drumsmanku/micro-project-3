

var total;
var final_total;
var val1;
var tip;
var total_per_person;
var tip_per_person;
var counter;

function get_value_of_people(){
   val1=Number(document.getElementById("main-people").innerHTML);
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
    document.getElementById("total-per-person").innerHTML=`₹${final_total/val1}.00`;
    document.getElementById("tip-per-person").innerHTML=`₹${(tip/val1).toFixed(2)}`;
  }

}
function ten(){
  total=document.getElementById("total-bill").value;
  tip=Number(total*0.10)
  final_total=Number(total)+ tip;
  get_value_of_people();
  if(val1===0){
    document.getElementById("total-per-person").innerHTML=`₹${final_total}.00`;
    document.getElementById("tip-per-person").innerHTML=`₹${tip}.00`;
    
  }
  else{
    document.getElementById("total-per-person").innerHTML=`₹${final_total/val1}.00`;
    document.getElementById("tip-per-person").innerHTML=`₹${tip/val1}.00`;
  }

}
function fifteen(){
  total=document.getElementById("total-bill").value;
  tip=Number(total*0.15)
  final_total=Number(total)+ tip;
  get_value_of_people();
  if(val1===0){
    document.getElementById("total-per-person").innerHTML=`₹${final_total}.00`;
    document.getElementById("tip-per-person").innerHTML=`₹${tip}.00`;
    
  }
  else{
    document.getElementById("total-per-person").innerHTML=`₹${final_total/val1}.00`;
    document.getElementById("tip-per-person").innerHTML=`₹${tip/val1}.00`;
  }

}
function fifty(){
  total=document.getElementById("total-bill").value;
  tip=Number(total*0.50)
  final_total=Number(total)+ tip;
  get_value_of_people();
  if(val1===0){
    document.getElementById("total-per-person").innerHTML=`₹${final_total}.00`;
    document.getElementById("tip-per-person").innerHTML=`₹${tip}.00`;
    
  }
  else{
    document.getElementById("total-per-person").innerHTML=`₹${final_total/val1}.00`;
    document.getElementById("tip-per-person").innerHTML=`₹${tip/val1}.00`;
  }

}
function twentyfive(){
  total=document.getElementById("total-bill").value;
  tip=Number(total*0.25)
  final_total=Number(total)+ tip;
  get_value_of_people();
  if(val1===0){
    document.getElementById("total-per-person").innerHTML=`₹${final_total}.00`;
    document.getElementById("tip-per-person").innerHTML=`₹${tip}.00`;
    
  }
  else{
    document.getElementById("total-per-person").innerHTML=`₹${final_total/val1}.00`;
    document.getElementById("tip-per-person").innerHTML=`₹${tip/val1}.00`;
  }

}
function seventyfive(){
  total=document.getElementById("total-bill").value;
  tip=Number(total*0.75)
  final_total=Number(total)+ tip;
  get_value_of_people();
  if(val1===0){
    document.getElementById("total-per-person").innerHTML=`₹${final_total}.00`;
    document.getElementById("tip-per-person").innerHTML=`₹${tip}.00`;
    
  }
  else{
    document.getElementById("total-per-person").innerHTML=`₹${final_total/val1}.00`;
    document.getElementById("tip-per-person").innerHTML=`₹${tip/val1}.00`;
  }

}

function update_add(){
  get_value_of_people();
  var fin_val1=val1+Number(1);
  document.getElementById("main-people").innerHTML=fin_val1;  
  // var text1=document.getElementById("tip-per-person").innerHTML.replace("₹", "");
  // var value1=parseFloat(text1);
  // var text2 = document.getElementById("total-per-person").innerText.replace("₹", "");
  // var value2=parseFloat(text2);
  if(fin_val1!=0 && document.getElementById("total-per-person").innerHTML!="₹0.00" && document.getElementById("tip-per-person").innerHTML!="₹0.00"){
    var value2=final_total/fin_val1; 
    var value1=tip/fin_val1;
    document.getElementById("total-per-person").innerText=`₹${value2.toFixed(2)}`;
    document.getElementById("tip-per-person").innerHTML=`₹${value1.toFixed(2)}`; 
  }
  else{
    bill_value_new=document.getElementById("total-bill").value
    value2=bill_value_new/fin_val1;
    document.getElementById("total-per-person").innerText=`₹${value2.toFixed(2)}`

  }
}
function update_sub(){
  get_value_of_people();
  var fin_val2=val1-Number(1);
  document.getElementById("main-people").innerHTML=fin_val2;
  // var text1=document.getElementById("tip-per-person").innerHTML.replace("₹", "");
  // var value1=parseFloat(text1);
  // var text2 = document.getElementById("total-per-person").innerText.replace("₹", "");
  // var value2=parseFloat(text2);
  if(fin_val2!=0 && document.getElementById("total-per-person").innerHTML!="₹0.00" && document.getElementById("tip-per-person").innerHTML!="₹0.00"){
    value2=final_total*(fin_val2+1); 
    value1=tip*(fin_val2+1);
    document.getElementById("total-per-person").innerText=`₹${value2.toFixed(2)}`;
    document.getElementById("tip-per-person").innerHTML=`₹${value1.toFixed(2)}`; 
  }
  else{
    bill_value_new=document.getElementById("total-bill").value
    value2=bill_value_new*(fin_val2);
    document.getElementById("total-per-person").innerText=`₹${value2.toFixed(2)}`
  }
}

function reset(){
  document.getElementById("total-per-person").innerHTML="₹0.00";
  document.getElementById("tip-per-person").innerHTML="₹0.00";
  document.getElementById("total-bill").value="₹";
  document.getElementById("main-people").innerHTML="0";
}

