const div_tipo_veiculo = document.getElementById('div_tipo_veiculo');
const div_pagamento = document.getElementById('div_pagamento');

function botaoConfirmar() {
    div_tipo_veiculo.classList.add('hidden');
    div_pagamento.classList.remove('hidden');
}

function botaoVoltarTipo() {
    div_tipo_veiculo.classList.remove('hidden');
    div_pagamento.classList.add('hidden');
}

function botaoVoltarInicial() {
    window.location.href = 'confirmar.html';
}