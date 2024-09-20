function handleSubmit(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    const form = event.target;

    // Enviar dados via Fetch API
    fetch(form.action, {
        method: form.method,
        body: new URLSearchParams(new FormData(form)),
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            form.reset(); // Reseta o formulário após o envio
            form.style.display = 'none'; // Oculta o formulário
            document.getElementById('thank-you-message').style.display = 'block'; // Mostra a mensagem de agradecimento
        } else {
            alert('Ocorreu um erro. Tente novamente.');
        }
    })
    .catch(error => {
        alert('Ocorreu um erro. Tente novamente.');
    });
}
