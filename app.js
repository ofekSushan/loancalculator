document.getElementById('loan-form').addEventListener('submit', re);

function re(e) {
  e.preventDefault();
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  var monthlyPayment = document.getElementById('monthly-payment');
  var totalPayment = document.getElementById('total-payment');
  let totalInterest = document.getElementById('total-interest');

  let principal = parseFloat(amount.value);
  let $interest = parseFloat(interest.value) / 100 / 12;
  const $years = parseFloat(years.value) * 12;

  const x = Math.pow(1 + $interest, $years);
  const monthly = (principal * x * $interest) / (x - 1);

  monthlyPayment.value = amount.value * 2;
  totalPayment.value = amount;
  totalInterest.value = (monthly * $years - principal).toFixed(2);
}
if (monthlyPayment == 0) {
  showError('wtf dude');
}

function showError(x) {
  const errorDiv = document.createElement('div');
  errorDiv.className = 'alert alert-danger';
  errorDiv.appendChild(document.createTextNode(x));
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');
  card.insertBefore(errorDiv, heading);
}
