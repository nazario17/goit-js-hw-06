const form = document.querySelector(".login-form");

form.addEventListener("submit", function(event) { 
    event.preventDefault();

    const email = this.elements.email;
    const password = this.elements.password;


    if (!email.value || !password.value) {
       return alert("Error, всі поля повинні бути заповнені");
    }

    const objectForm = {
        email: email.value,
        password: password.value,
    }

    console.log(objectForm);

    this.reset();
})