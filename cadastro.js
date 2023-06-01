function validaForm(){

var cpf = document.getElementById("cpf").value;
var senhaInput = document.getElementById("senha");
var confirmSenha = document.getElementById("confirmarSenha");
var errorSpan = document.getElementById("errorSenha");
var cpfErro = document.getElementById("cpfValidationMessage");

if (!verificarCPF(cpf) || senhaInput.value != confirmSenha.value ){
    
  if (!verificarCPF(cpf)){
    cpfErro.textContent = "CPF INVÁLIDO!";
  }
  else{
    cpfErro.textContent = "";
  }

if (senhaInput.value != confirmSenha.value ){
  errorSpan.textContent = "As senhas não coincidem";
}
else{
  errorSpan.textContent ="";
}
return false;

}
else{
  
  return true;
}

}


function numeros(input){
input.value = input.value.replace(/\D/g, '')

}

function verificarCPF(cpf) {
    
  
    // Verifica se o CPF tem 11 dígitos
    if (cpf.length !== 11) {
      return false;
    }
  
    // Verifica se todos os dígitos são iguais (CPF inválido)
    if (/^(\d)\1*$/.test(cpf)) {
      return false;
    }
  
    // Calcula o primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = soma % 11;
    let digitoVerificador1 = resto < 2 ? 0 : 11 - resto;
  
    // Verifica se o primeiro dígito verificador está correto
    if (parseInt(cpf.charAt(9)) !== digitoVerificador1) {
      return false;
    }
  
    // Calcula o segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = soma % 11;
    let digitoVerificador2 = resto < 2 ? 0 : 11 - resto;
  
    // Verifica se o segundo dígito verificador está correto
    if (parseInt(cpf.charAt(10)) !== digitoVerificador2) {
      return false;
    }
  
    // CPF válido
    return true;
  }