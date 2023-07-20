function generateQRCode() {
  // Get the user input from the text field
  var userInput = document.getElementById("inputText").value;

  // Create a new QRCode instance
  var qrCode = new QRCode("qrcode");

  // Generate the QR code using the user input
  qrCode.makeCode(userInput);
}
