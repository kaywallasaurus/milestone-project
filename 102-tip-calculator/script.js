var button = document.getElementById('calculate');

var calculate = function() {
  var bill = document.getElementById('bill').value;
  var billAmount = parseInt(bill);
  var tip = document.getElementById('tip-percent').value;
  //calculate tip and total bill
  var tipAmount = (bill * tip / 100);
  var totalBill = (tipAmount + billAmount);
  //display tip amount
  var tipOutput = document.getElementById('tip-amount');
  var displayTip = "$" + tipAmount.toFixed(2);
  tipOutput.innerHTML = displayTip;
  //display total bill
  var totalOutput = document.getElementById('total-bill');
  var displayTotal = "$" + totalBill.toFixed(2);
  totalOutput.innerHTML = displayTotal;
};

button.addEventListener('click',calculate);
