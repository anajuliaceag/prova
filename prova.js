function inscricao() {
    let mostraHTML = document.getElementById("mostraHTML");
    let time = prompt("Digite o nome do seu time: ");

    let jogador1 = prompt("Escreva o nome do primeiro jogador: ");
    let idade1 = Number(window.prompt("Digite sua idade:"));

    let jogador2 = prompt("Escreva o nome do segundo jogador: ");
    let idade2 = Number(window.prompt("Digite sua idade:"));

    let jogador3 = prompt("Escreva o nome do terceiro jogador: ");
    let idade3 = Number(window.prompt("Digite sua idade"));

    let media;

    mostraHTML.innerHTML = `<p>${time}</p>`
    mostraHTML.innerHTML = `<p>Primeiro jogador: ${jogador1}. ${idade1}. 
    Segundo jogador: ${jogador2}. ${idade2}. 
    Terceiro jogador: ${jogador3}. ${idade3}</p>`
   
  

    media = (idade1 + idade2 + idade3) / 3;
    if(media > 15)  
         alert("O time não poderá jogar o campeonato")
   




}