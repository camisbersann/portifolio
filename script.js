// ===== FORMULÁRIO DE CONTATO =====
// Executada ao clicar no botão "Enviar"
function enviarMensagem() {
  var email = document.getElementById("email");
  var telefone = document.getElementById("telefone");
  var mensagem = document.getElementById("mensagem");

  if (email.value === "" || telefone.value === "" || mensagem.value === "") {
    alert("Por favor, preencha todos os campos.");
  } else if (!emailValido(email.value)) {
    alert("E-mail inválido. Use o formato: nome@exemplo.com");
    email.focus();
  } else if (verificarCelular(telefone.value) !== "") {
    alert(verificarCelular(telefone.value));
    telefone.focus();
  } else {
    alert("Mensagem enviada com sucesso!");
    email.value = "";
    telefone.value = "";
    mensagem.value = "";
  }
}

// E-mail precisa ter: algo antes do @, algo depois do @, um ponto e algo depois do ponto
function emailValido(email) {
  var formato = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return formato.test(email);
}

// Lista de DDDs que existem no Brasil
var DDDS_VALIDOS = [
  "11", "12", "13", "14", "15", "16", "17", "18", "19",
  "21", "22", "24", "27", "28",
  "31", "32", "33", "34", "35", "37", "38",
  "41", "42", "43", "44", "45", "46", "47", "48", "49",
  "51", "53", "54", "55",
  "61", "62", "63", "64", "65", "66", "67", "68", "69",
  "71", "73", "74", "75", "77", "79",
  "81", "82", "83", "84", "85", "86", "87", "88", "89",
  "91", "92", "93", "94", "95", "96", "97", "98", "99"
];

// Verifica o celular. Retorna "" se estiver certo, ou a mensagem do erro.
function verificarCelular(telefone) {
  var numeros = telefone.replace(/\D/g, "");
  var ddd = numeros.substring(0, 2);
  var final = numeros.substring(3); 

  if (numeros.length !== 11) {
    return "Celular inválido: digite o DDD + 9 números. Ex: (11) 91234-5678";
  } else if (DDDS_VALIDOS.indexOf(ddd) === -1) {
    return "Celular inválido: o DDD (" + ddd + ") não existe.";
  } else if (numeros[2] !== "9") {
    return "Celular inválido: o número precisa começar com 9 depois do DDD.";
  } else if (final === final[0].repeat(8)) {
    return "Celular inválido: o número não pode ter todos os dígitos iguais.";
  } else {
    return "";
  }
}

// Formata o celular enquanto digita: (11) 91234-5678
function formatarTelefone(campo) {
  var n = campo.value.replace(/\D/g, "").substring(0, 11);

  if (n.length > 7) {
    campo.value = "(" + n.substring(0, 2) + ") " + n.substring(2, 7) + "-" + n.substring(7);
  } else if (n.length > 2) {
    campo.value = "(" + n.substring(0, 2) + ") " + n.substring(2);
  } else {
    campo.value = n;
  }
}

// ===== TEMA CLARO / ESCURO =====
function trocarTema() {
  var botao = document.getElementById("botaoTema");

  if (document.body.classList.contains("escuro")) {
    document.body.classList.remove("escuro");
    botao.textContent = "🌙";
  } else {
    document.body.classList.add("escuro");
    botao.textContent = "☀️";
  }
}

// ===== MENU NO CELULAR =====
function abrirMenu() {
  document.getElementById("menuLinks").classList.toggle("aberto");
}
