alert('Bem-vindo ao nosso site!');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute 
let tentativas = 1;
// enquato chute não for igual ao n.s
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
// se chute for igual ao número secreto
if (chute == numeroSecreto) {
    break;
} else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert (`O número secreto é maior que ${chute}`);
        }
        tentativas = tentativas +0;
        // tentativas = tentativas +1
        tentativas++
}
}
if (tentativas > 1) {
    alert (`Isso ai! Voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas`);

} else { alert (`Isso ai! Voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativa`);

}
