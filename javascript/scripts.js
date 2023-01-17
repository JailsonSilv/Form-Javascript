const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Validation
    if (nameInput.value === "") {
        alert("Por favor, digite seu nome!")
        return;
    }

    // Verificar se a senha está preenchida
    if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("Por favor, digite seu email.")
        return;
    }

    // Verificar se a situação foi selecionada
    if (!validatePassword(passwordInput.value, 8)) {
        alert("A senha precisa ter no mín 8 dígitos.")
        return;
    }

    // Verificar se a situação foi selecionada
    if (jobSelect.value === "") {
        alert("Por favor, selecione a sua situação.")
        return;
    }

    // Verifique se as mensagem está preenchida
    if (messageTextarea.value === "") {
        alert("Por favor, escreva uma mensagem.")
        return;
    }

    // Se tds os campos estiverem ok, envia.
    form.submit();
});


function isEmailValid(email) {
    // criando um regex para validar email
    const emailRegex = new RegExp (
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    if (emailRegex.test(email)) {
        return  true;
    };

    return false;
}

function validatePassword(password, minDigits) {
    if (password.length >= minDigits) {
        return true;
    };

    return false;
}