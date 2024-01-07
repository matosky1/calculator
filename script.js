
document.querySelector("#addpro").addEventListener('click', () =>{
  let addedpro = document.getElementById("product");
  let addpro = addedpro.value;
  addedpro.value= ' ';
  let product = addpro;
  let adminDrop = document.getElementById("admindrop");
let opt =document.createElement('option');
opt.value = product;
opt.innerHTML = product;
adminDrop.setAttribute("value", "product")
adminDrop.appendChild(opt);
})
 
// TO ADD PRICE AND DISPLAY ON DROPDOWN IN CHECKOUT
function addPrice(){
    let perprice = document.getElementById("addpr");
    let price = perprice.value;
    perprice.value = ' ';
   let selectedProduct = document.querySelector('select').value;  
    let prpr = selectedProduct + " $ " + price + "/unit";    
    let perUnit = document.getElementById("perunit");
    let opt2 = document.createElement('option');
    opt2.value = prpr;  
    opt2.innerHTML = prpr;
    perUnit.setAttribute("value", "prpr")
    perUnit.appendChild(opt2);
}
 
// to display number on my unit text box
display = document.getElementById("unit")
 
 //  for my receipt
let sum = 0;
let due = 0;
 
 document.getElementById("addtocart").addEventListener('click', () => {
 let p = document.getElementById("perunit").value;
  let table = document.querySelector('table');  
  let row = table.insertRow(2);
  let column1 = row.insertCell(0);
  let column2 = row.insertCell(1);
  let column3 = row.insertCell(2);
  let column4 = row.insertCell(3);
  column1.innerHTML = p.slice(0,  p.indexOf("$"));
  column2.innerHTML = p.slice(p.indexOf("$"), p.indexOf("/")  );
  column3.innerHTML = display.value;
  let number = parseFloat(column2.innerHTML.match(/[\d\.]+/));
  column4.innerHTML = (number * column3.innerHTML).toFixed(2);
  let total = document.getElementById("total");
 sum += parseFloat(column4.innerHTML);
  total.innerHTML = "Total Price: $" + sum;
  let tax = document.getElementById('tax');
  let point5Percent = ((5 / 100) * sum);
  point5Percent = point5Percent.toFixed(2)
  tax.innerHTML = "Taxes: $" + point5Percent;
  let amountDue = document.getElementById('due');
  due = (parseFloat(sum) + parseFloat(point5Percent)).toFixed(2);
  amountDue.innerHTML = "Amount Due: $" + due;
 
   // function to start new transaction
   document.getElementById('new').addEventListener('click', () =>{
    column1.remove();
    column2.remove();
    column3.remove();
    column4.remove();
    total.innerHTML = "Total Price: ";
    tax.innerHTML = "Taxes: ";
    amountDue.innerHTML = "Amount Due: ";
    sum = 0;
    point5Percent = 0;
    due = 0;
 
  })
 
   
  })
 
 
 
 
  // FUNCTION TO DISPLAY THANKING MESSAGE
 
    let pay = document.getElementById('pay');
    pay.addEventListener('click', () =>{
      alert("Thank you for your purchase ." + '\n' + "See you Next time." )
      location.reload();
    })
 
 
 
 
// display my date and time in receipt
  let dateTime = document.getElementById('date');
  const d = new Date();
  dateTime.innerHTML = "Date: " + d.toDateString() + "<br>" + "Time: " + d.toLocaleTimeString();
 
 