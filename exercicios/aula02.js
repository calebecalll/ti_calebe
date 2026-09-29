// ex1
// Reprovam na régua de 4,5:1 (baixo contraste):
// 1. #888888 no #FFFFFF
// 2. #CCCCCC no #FFFFFF
// (Os pares #FFFFFF no #1F4E79 [8,7:1] e #FFFFFF no #C00000 [6,5:1] passam no teste).

// ex2
// (a) alt="Fila da cantina dobrando o corredor durante o intervalo"
// (b) alt="Logotipo da Escola"
// (c) alt="" (vazio, pois é apenas decorativo e o leitor de tela deve pular)

// ex3
// Motivo: O código só muda a cor do botão pra verde. Pessoas com daltonismo (ou que usam leitores de tela) não saberão se o botão foi acionado.
// Correção:
botao.addEventListener("click", function() {
  botao.style.backgroundColor = "green";
  botao.innerText = "Apoiado";
});

// ex4
// 1. Adicionei o parágrafo <p>Aponte um problema da escola e apoie os que mais te atrapalham.</p> no <header> abaixo do <h1>.
// 2. Adicionei a regra CSS .apoiar:focus { outline: 3px solid #C00000; outline-offset: 2px; } para destacar o foco do teclado.
// 3. Atualizei o JS para alternar o texto do botão entre "Apoiar" e "Apoiado" e atualizar a contagem numérica de apoios.

// ex5
// Tabela de Auditoria preenchida:
// Item 1:Sim |Item 2:Sim |Item 3:Sim |Item 4:Sim
// Item 5:Sim |Item 6:Sim |Item 7:Sim |Item 8:Sim
//
// Melhorias em ordem de prioridade (Alto Impacto / Baixo Esforço primeiro):
// 1. Adicionar o atributo alt apropriado em todas as imagens da página (Acessibilidade - Alto impacto para leitores de tela, baixíssimo esforço).
// 2. Definir o CSS de focus customizado nos botões de apoio (Acessibilidade/UX - Melhora navegação por teclado rapidamente).
// 3. Adicionar um cabeçalho explicando o que a página faz (UX - Faz com uqe seja possível entender o site mais rápido).
// Motivo da ordem: Ajustei primeiro coisas relacionadas a acessibilidade e clareza textual porque fazem com que o uso para qualquer pessoa com o menor tempo disponível possa utilizar o site da melhor maneira..
