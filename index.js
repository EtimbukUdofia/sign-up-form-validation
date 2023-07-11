const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');
const toast = document.querySelector('.toast');

form.addEventListener('submit', e => {
    e.preventDefault();
    if (validated()) {
        form.submit();
        // toast.style.display = "block";
    }
})

const setError = (element, message) => {
    element.classList.add('error');
    element.classList.remove('success');
    const inputField = element.parentElement;
    inputField.classList.add('show');
    const error = inputField.querySelector('.error-message');
    error.innerText = message;
}

const setSuccess = element => {
    element.classList.remove("error");
    element.classList.add("success");
    const inputField = element.parentElement;
    inputField.classList.remove('show');
    const error = inputField.querySelector(".error-message");
    error.innerText = '';
}



const validated = () => {
    valid = true;
    if (firstName.value === '') {
        setError(firstName, 'First Name cannot be empty');
        valid = false;
    } else {
        setSuccess(firstName);
    }

    if (lastName.value === '') {
        setError(lastName, 'Last Name cannot be empty');
        valid = false;
    } else {
        setSuccess(lastName);
    }

    if (email.value === '') {
        setError(email, 'Email cannot be empty');
        valid = false;
    } else if (!validEmail(email.value)) {
        setError(email, 'Looks like this is not an email')
        valid = false;
    } else {
        setSuccess(email);
    }

    if (password.value === '') {
        setError(password, 'Password cannot be empty')
        valid = false;
    } else if (password.value.length < 8) {
        setError(password, 'Password cannot be less than 8 characters')
    } else {
        setSuccess(password);
    }

    return valid;
}

const validEmail = email => {
    emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}