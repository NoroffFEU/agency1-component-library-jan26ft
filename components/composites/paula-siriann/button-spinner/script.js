const fromName = document.getElementById('fromName');
const toName = document.getElementById('toName');
const toEmail = document.getElementById('toEmail');
const message = document.getElementById('message');
const sendBtn = document.querySelector('.send-btn');

function updateButtonState() {
    const allFilled = 
    fromName.value.trim() !== '' &&
    toName.value.trim() !== '' &&
    toEmail.value.trim() !== '' &&
    message.value.trim() !== '';

    sendBtn.disabled = !allFilled;
}

fromName.addEventListener('input', updateButtonState);
toName.addEventListener('input', updateButtonState);
toEmail.addEventListener('input', updateButtonState);
message.addEventListener('input', updateButtonState);

updateButtonState();