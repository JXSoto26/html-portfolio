function randomPassword() {
    let displayPassword = document.getElementById('display-password');
    let passwordLength = document.getElementById('password-length').value;
    let error = document.getElementById('error-info');
    let password = '';
    let characters ='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';

    //If user not selected length
    parseInt(passwordLength);
    if (passwordLength ==0) {
        error.innerHTML = 'Please select password length';
        error.style.padding = '10px 15px';
        setTimeout(() => {
            error.style.visibility = 'hidden';
            window.location.reload()
        },2000);
    }

    //Random Password Generator
    for(let i = 0; i < passwordLength;i++) {
        password += characters[Math.floor(Math.random() * characters.length)];
    }
    displayPassword.value = password;
}

VANTA.NET({
    el: "#your-element-selector",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x3fe8ff,
    points: 11.00,
    maxDistance: 23.00
  })