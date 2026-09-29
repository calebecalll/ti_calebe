// ex1
let visto = false;

// ex2
// 5 === 5    -> true (mesmo tipo e mesmo valor)
// "5" === 5  -> false (tipos diferentes: string vs number)
// "5" == 5   -> true (o == converte a string em número antes de comparar)
// true === false -> false (valores booleanos diferentes)

// ex3
// Motivo: A variável `apoiado` foi criada fora do evento do botão como uma variável global única.
// Ao clicar em qualquer cartão, todos passam a usar o mesmo estado da variável `apoiado`.
// Correção: Mover a variável `let apoiado = false;` para dentro da função de callback do clique,
// criando um escopo de controle individual para cada botão.

document.querySelectorAll(".apoiar").forEach(function(botao) {
  let apoiado = false;
  botao.addEventListener("click", function() {
    // código do clique...
  });
});

// ex4
if (apoiado === false) {
  botao.textContent = "Apoiado";
} else {
  botao.textContent = "Apoiar";
}

// ex5
// Alteração feita no index.html:
// Dentro da div ou seção do Radar, foi duplicada a estrutura de um cartão existente e alterado o conteúdo para o novo problema:
/*
<div class="cartao">
  <h3>Problema da Escola</h3>
  <p>Falta de sabonete nos banheiros do bloco B.</p>
  <button class="apoiar">Apoiar</button>
</div>
*/

// ex6
// Para o cartão nascer apoiado, o ideal é guardar o estado no próprio elemento HTML (usando atributo de dados, como data-apoiado="true")
// ou definir a variável local desse cartão específico como `true` de início.
// A solução de mudar a variável inicial `let apoiado = true;` no JavaScript não serve para os outros cartões porque faria 
// com que todos os botões da página começassem como apoiados, alterando o comportamento padronizado dos demais cartões que iniciam desapoiados.
