const budget={
    amount:0
}
var spent=0

function add() {
var time=new Date()
console.log(time);
    const income=document.getElementById("Type").value
const amount=Number(document.getElementById("amount").value)

if(income==""||amount==""){
    alert("Insufficient Data")
}

else{


if(amount<0){
    alert("enter amount")
}
else{


budget.amount=budget.amount+amount

html_data=`
${budget.amount}
`
showtot.innerHTML=html_data



html_data2=`

  
    <tr>
      <th scope="row">${income}</th>
      <td class="text-success">${amount}</td>
      <td>${budget.amount}</td>
      <td>${time}</td>
    </tr>
   
`
bill.innerHTML+=html_data2
}
document.getElementById("form1").reset()


}

}
function sub() {

    
    var time=new Date()
    const expence=document.getElementById("Type1").value
    const amount1=Number(document.getElementById("amount1").value)

    if(expence==""||amount1==""){
        alert("Insufficient Data")

    }

    else{

    
   if(budget.amount<amount1){
    alert("Insufficient  balance")
   }

   else{

   
spent=spent+amount1
    budget.amount=budget.amount-amount1
    
    html_data=`
    ${budget.amount}
    `
    showtot.innerHTML=html_data
   
    html_data1=`
    ${spent}
    `
    showexp.innerHTML=html_data1

    html_data2=`

  
    <tr>
      <th scope="row">${expence}</th>
      <td class="text-danger">${amount1}</td>
      <td>${budget.amount}</td>
      <td>${time}</td>
    </tr>
   
`
bill.innerHTML+=html_data2
    
   }

   document.getElementById("form2 ").reset()}
}
function logout() {
    window.location="/login.html"
}