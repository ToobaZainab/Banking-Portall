// $(function(){
//     $('#sidebarCollapse').on('click',function(){
//         $('#sidebar').toggleClass('active');
//     });
// });
// Assume the initial balance is 0
let balance = 0;

// Function to update the balance on the webpage
function updateBalance() {
  const balanceElement = document.getElementById('balance');
  balanceElement.textContent = balance;
}
// Function to handle cash-in
function cashIn() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (!isNaN(amount) && amount > 0) {
      balance += amount;
      updateBalance();
      alert(`Successfully cashed in $${amount}`);
    } else {
      alert('Invalid amount');
    }
  }
  
  // Function to handle cash-out
  function cashOut() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (!isNaN(amount) && amount > 0 && amount <= balance) {
      balance -= amount;
      updateBalance();
      alert(`Successfully cashed out $${amount}`);
    } else {
      alert('Invalid amount or insufficient balance');
    }
  }
  
 
  
  
  
  
  
  










