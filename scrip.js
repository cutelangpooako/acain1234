function showMessage() {
  alert("Thank you for visiting my portfolio!");
}

function handleSubmit(event) {
  event.preventDefault();
  alert("Message sent! (Demo form — connect with EmailJS/Backend to receive messages.)");
  event.target.reset();
  return false;
}
