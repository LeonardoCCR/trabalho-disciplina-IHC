function proximoPasso() {
    let cadastro1 = document.getElementById("cadastro_1");
    let cadastro2 = document.getElementById("cadastro_2");
    let circulo1 = document.getElementById("circulo_1");
    let circulo2 = document.getElementById("circulo_2");

    // Adiciona a animação de slide-out para o primeiro passo
    cadastro1.classList.add("animate-slide-out");

    setTimeout(() => {
        // Oculta o primeiro passo após a animação de saída
        cadastro1.classList.add("hidden");
        cadastro1.classList.remove("animate-slide-out");

        // Exibe o segundo passo com animação de slide-in
        cadastro2.classList.remove("hidden");
        cadastro2.classList.add("animate-slide-in");

        // Atualiza os círculos de progresso
        circulo1.classList.remove("bg-black");
        circulo1.classList.add("bg-gray-400");
        circulo2.classList.remove("bg-gray-400");
        circulo2.classList.add("bg-black");
    }, 500); // Tempo da animação (deve coincidir com o tempo do slide-out)
}

function cadastroSucesso(event) {
    event.preventDefault(); // Evita o envio do formulário

    let cadastro2 = document.getElementById("cadastro_2");
    let cadastroSucesso = document.getElementById("cadastro_sucesso");
    let progresso = document.getElementById("progresso");

    // Animação de saída do segundo passo
    cadastro2.classList.add("animate-slide-out");
    setTimeout(() => {
        cadastro2.classList.add("hidden");
        cadastro2.classList.remove("animate-slide-out");
        progresso.classList.add("hidden");

        // Exibe a tela de sucesso com animação de entrada
        cadastroSucesso.classList.remove("hidden");
        cadastroSucesso.classList.add("animate-slide-in");
    }, 300);
}

function entrarComAnimacao(event) {
    event.preventDefault();
    let cadastroSucesso = document.getElementById("cadastro_sucesso");

    // Animação de saída ao clicar em "Entrar"
    cadastroSucesso.classList.add("animate-slide-out");
    setTimeout(() => {
        window.location.href = "login.html"; // Redireciona após a animação
    }, 300);
}

// Adiciona evento ao botão "Entrar"
document.addEventListener("DOMContentLoaded", () => {
    let botaoEntrar = document.querySelector("#cadastro_sucesso a");
    if (botaoEntrar) {
        botaoEntrar.addEventListener("click", entrarComAnimacao);
    }
})

function configurarFormularioSenha() {
    document.querySelector("#formulario_senha").addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio real do formulário

        // Anima os círculos de progresso
        document.querySelector("#circulo_1").classList.replace("bg-black", "bg-gray-400");
        document.querySelector("#circulo_2").classList.replace("bg-gray-400", "bg-black");

        // Faz a transição entre os formulários
        document.querySelector("#formulario_senha").classList.add("animate-fade-out");
        setTimeout(() => {
            document.querySelector("#formulario_senha").classList.add("hidden");
            document.querySelector("#formulario_senha_sucesso").classList.remove("hidden");
            document.querySelector("#formulario_senha_sucesso").classList.add("animate-slide-in");
        }, 500);
    });
}

// Espera o carregamento do DOM para executar a função
document.addEventListener("DOMContentLoaded", configurarFormularioSenha);

document.getElementById('contatos_emergencia').addEventListener('input', function(event) {
    formatPhone(event.target);
});

document.getElementById('contatos_emergencia').addEventListener('keydown', function(event) {
    if (event.key === 'Backspace') {
        handleBackspace(event.target, event);
    }
});

function formatPhone(input) {
    let rawValues = input.value.split(',')
        .map(v => v.replace(/\D/g, '').trim()) // Remove tudo que não seja número
        .filter(v => v);

    let formattedValues = rawValues.map(value => {
        if (value.length <= 10) {
            return value.replace(/(\d{2})(\d{0,4})(\d{0,4})/, '($1) $2-$3');
        } else {
            return value.replace(/(\d{2})(\d{0,5})(\d{0,4})/, '($1) $2-$3');
        }
    });

    if (input.value.endsWith(',')) {
        input.value = formattedValues.join(', ') + ', ';
    } else {
        input.value = formattedValues.join(', ');
    }
}

function handleBackspace(input, event) {
    let cursorPos = input.selectionStart;
    let value = input.value;

    // Verifica se o caractere antes do cursor é um caractere especial
    if (/[()\-\s]/.test(value.charAt(cursorPos - 1))) {
        event.preventDefault();

        // Remove o caractere especial
        input.value = value.substring(0, cursorPos - 1) + value.substring(cursorPos);

        // Ajusta a posição do cursor
        input.setSelectionRange(cursorPos - 1, cursorPos - 1);

        // Reaplica a formatação
        formatPhone(input);
    }
}

// Impede a inserção de caracteres não numéricos, exceto vírgula
document.getElementById('contatos_emergencia').addEventListener('keypress', function(event) {
    if (event.key === ',' || event.key === 'Backspace') {
        return;
    }
    if (/\D/.test(event.key)) {
        event.preventDefault();
    }
});