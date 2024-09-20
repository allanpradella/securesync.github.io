<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Captura os dados do formulário
    $nome = htmlspecialchars(trim($_POST['nome']));
    $email = htmlspecialchars(trim($_POST['email']));

    // Validação simples
    if (empty($nome) || empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Dados inválidos. Por favor, preencha todos os campos corretamente.";
        exit;
    }

    // Aqui você pode armazenar os dados em um banco de dados ou enviar por e-mail
    // Exemplo de armazenamento em um arquivo (apenas para fins de demonstração)
    $file = 'leads.txt';
    $data = "Nome: $nome, Email: $email\n";
    file_put_contents($file, $data, FILE_APPEND | LOCK_EX);

    // Mensagem de sucesso
    echo "Obrigado por se inscrever, $nome! Você receberá novidades em seu e-mail.";
} else {
    echo "Método de requisição inválido.";
}
?>
