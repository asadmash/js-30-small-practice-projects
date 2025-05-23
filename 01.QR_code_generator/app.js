// get the input text
const qrText = document.querySelector('#qrText');

// get the qr box dom
const qrBox = document.querySelector('#qrBox');

// get the qrImage dom
let qrImage = document.querySelector('#qrImage');

// button ref
const button = document.querySelector('#button');


// function to generate qr code
function generateQrCode(){
if(qrText.value.length > 0) {
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`;
    qrBox.classList.add('show-img');
} else {
    qrText.classList.add('error');
    setTimeout(() => {
qrText.classList.remove('error');
    }, 1000);
}
    console.log('function working');
    
}

// Event handler
button.onclick = generateQrCode;