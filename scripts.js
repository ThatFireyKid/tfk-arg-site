// Handle Discount Code Submission
document.getElementById('submit-code').addEventListener('click', function() {
  const code = document.getElementById('discount-code').value;
  
  // Replace 'secretcode' with whatever code you want to check for
  if (code === 'secretcode') {
    alert('Discount code accepted!');
    // You can trigger actions here, like showing a discount or new content
  } else {
    alert('Invalid code!');
  }
});

