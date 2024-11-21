function mascaraTelefone(event) {
    let campo = event.target;
    let valor = campo.value.replace(/\D/g, ''); // Remove qualquer caractere não numérico

    if (valor.length <= 10) {
      valor = valor.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3"); // Máscara para 10 dígitos
    } else {
      valor = valor.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3"); // Máscara para 11 dígitos
    }

    campo.value = valor;
  }

function mascaraData(event) {
    let campo = event.target;
    let valor = campo.value.replace(/\D/g, ''); // Remove qualquer caractere não numérico

    // Limitar a 8 caracteres no máximo (ddmmyyyy)
    if (valor.length > 8) {
      valor = valor.substring(0, 8);
    }

    // Formatação para dd/mm/aaaa
    if (valor.length <= 2) {
      valor = valor.replace(/(\d{2})/, "$1/"); // Máscara para o dia
    } else if (valor.length <= 4) {
      valor = valor.replace(/(\d{2})(\d{2})/, "$1/$2/"); // Máscara para o mês
    } else {
      valor = valor.replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3"); // Máscara para o ano
    }

    campo.value = valor;
  }

  // alterar display de preferências
  function mostraPreferencia(){
    const possuiPreferencia = document.getElementById('check-possui');
    const naoPossuiPreferencia = document.getElementById('check-nao-possui');
    const preferenciaDiv = document.getElementById('usuario-preferencias');

    function togglePreferencia() {
        if (possuiPreferencia.checked) {
            preferenciaDiv.style.display = 'flex';
        }else {
            preferenciaDiv.style.display = 'none';
        }
    }

    possuiPreferencia.addEventListener('change', togglePreferencia);
    naoPossuiPreferencia.addEventListener('change', togglePreferencia);

    togglePreferencia();
}

document.addEventListener('DOMContentLoaded', mostraPreferencia);