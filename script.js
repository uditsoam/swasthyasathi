
    function validateForm() {
    let valid = true;


    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => error.remove());

    
    const name = document.getElementById('name').value;
    const namePattern = /^[A-Za-z\s]+$/;
    if (name === '') {
        showError('name', 'Name is required.');
        valid = false;
    } else if (!namePattern.test(name)) {
        showError('name', 'Name must only contain letters and spaces.');
        valid = false;
    }


    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; 
    if (email === '') {
        showError('email', 'Email is required.');
        valid = false;
    } else if (!emailPattern.test(email)) {
        showError('email', 'Invalid email format.');
        valid = false;
    }

    
    const phone = document.getElementById('phone').value;
    const phonePattern = /^[0-9]{10}$/; 
    if (phone === '') {
        showError('phone', 'Phone number is required.');
        valid = false;
    } else if (!phonePattern.test(phone)) {
        showError('phone', 'Invalid phone number. Must be 10 digits.');
        valid = false;
    }

    
    const address = document.getElementById('address').value;
    if (address === '') {
        showError('address', 'Address is required.');
        valid = false;
    }

    
    const cardNumber = document.getElementById('cardNumber').value;
    if (cardNumber === '') {
        showError('cardNumber', 'Card number is required.');
        valid = false;
    } else if (cardNumber.length !== 16 || isNaN(cardNumber)) {
        showError('cardNumber', 'Invalid card number. Must be exactly 16 digits.');
        valid = false;
    }

    
    const expiry = document.getElementById('expiry').value;
    const expiryPattern = /^(0[1-9]|1[0-2])\/[0-9]{2}$/; 
    if (expiry === '') {
        showError('expiry', 'Expiry date is required.');
        valid = false;
    } else if (!expiryPattern.test(expiry)) {
        showError('expiry', 'Invalid expiry date format. Use MM/YY.');
        valid = false;
    }

    
    const cvc = document.getElementById('cvc').value;
    if (cvc === '') {
        showError('cvc', 'CVC is required.');
        valid = false;
    } else if (cvc.length !== 3 || isNaN(cvc)) {
        showError('cvc', 'Invalid CVC. Must be exactly 3 digits.');
        valid = false;
    }

    return valid;
}


function showError(fieldId, message) {
    const inputField = document.getElementById(fieldId);
    inputField.style.borderColor = 'red'; 


    const errorMessage = document.createElement('span');
    errorMessage.classList.add('error-message');
    errorMessage.style.color = 'red';
    errorMessage.style.marginLeft = '10px';
    errorMessage.textContent = message;

    
    inputField.parentNode.appendChild(errorMessage);
}


document.getElementById('expiry').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, ''); 
    if (value.length > 2) {
        value = value.slice(0, 2) + '/' + value.slice(2, 4); 
    }
    e.target.value = value;
});


document.getElementById('cvc').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, ''); 
    if (value.length > 3) {
        value = value.slice(0, 3); 
    }
    e.target.value = value;
});

