// Estrutura de dados com as perguntas e alternativas
const perguntas = [
    {
      enunciado: "Qual a capital do Brasil?",
      alternativas: [
        { texto: "Brasília", correta: true },
        { texto: "São Paulo", correta: false },
        { texto: "Rio de Janeiro", correta: false },
        { texto: "Salvador", correta: false }
      ]
    },
    {
      enunciado: "Quem descobriu o Brasil?",
      alternativas: [
        { texto: "Pedro Álvares Cabral", correta: true },
        { texto: "Cristóvão Colombo", correta: false },
        { texto: "Dom Pedro I", correta: false },
        { texto: "Marquês de Pombal", correta: false }
      ]
    },
    {
      enunciado: "Qual é o maior planeta do sistema solar?",
      alternativas: [
        { texto: "Júpiter", correta: true },
        { texto: "Saturno", correta: false },
        { texto: "Terra", correta: false },
        { texto: "Netuno", correta: false }
      ]
    },
    {
      enunciado: "Quem escreveu 'Dom Casmurro'?",
      alternativas: [
        { texto: "Machado de Assis", correta: true },
        { texto: "Clarice Lispector", correta: false },
        { texto: "José de Alencar", correta: false },
        { texto: "Érico Veríssimo", correta: false }
      ]
    },
    {
      enunciado: "Qual é a fórmula da água?",
      alternativas: [
        { texto: "H2O", correta: true },
        { texto: "CO2", correta: false },
        { texto: "O2", correta: false },
        { texto: "CH4", correta: false }
      ]
    }
  ];
  
  // Função para exibir as perguntas e alternativas
  function mostraPergunta(index) {
    const pergunta = perguntas[index];
    const container = document.getElementById("quiz");
  
    // Cria a div para exibir o enunciado da pergunta
    const divPergunta = document.createElement("div");
    divPergunta.classList.add("question");
    divPergunta.innerHTML = pergunta.enunciado;
    container.appendChild(divPergunta);
  
    // Chama a função que exibe as alternativas
    mostraAlternativas(index);
  }
  
  // Função para exibir as alternativas
  function mostraAlternativas(index) {
    const pergunta = perguntas[index];
    const container = document.getElementById("quiz");
  
    // Cria a div para as alternativas
    const divAlternativas = document.createElement("div");
    divAlternativas.classList.add("alternatives");
  
    // Para cada alternativa, cria um radio button
    pergunta.alternativas.forEach((alternativa, i) => {
      const input = document.createElement("input");
      input.type = "radio";
      input.name = "pergunta" + index;
      input.value = alternativa.texto;
      input.id = "pergunta" + index + "_alternativa" + i;
  
      const label = document.createElement("label");
      label.setAttribute("for", input.id);// Estrutura de dados com as perguntas e alternativas
      const perguntas = [
        {
          enunciado: "Qual a capital do Brasil?",
          alternativas: [
            { texto: "Brasília", correta: true },
            { texto: "São Paulo", correta: false },
            { texto: "Rio de Janeiro", correta: false },
            { texto: "Salvador", correta: false }
          ]
        },
        {
          enunciado: "Quem descobriu o Brasil?",
          alternativas: [
            { texto: "Pedro Álvares Cabral", correta: true },
            { texto: "Cristóvão Colombo", correta: false },
            { texto: "Dom Pedro I", correta: false },
            { texto: "Marquês de Pombal", correta: false }
          ]
        },
        {
          enunciado: "Qual é o maior planeta do sistema solar?",
          alternativas: [
            { texto: "Júpiter", correta: true },
            { texto: "Saturno", correta: false },
            { texto: "Terra", correta: false },
            { texto: "Netuno", correta: false }
          ]
        },
        {
          enunciado: "Quem escreveu 'Dom Casmurro'?",
          alternativas: [
            { texto: "Machado de Assis", correta: true },
            { texto: "Clarice Lispector", correta: false },
            { texto: "José de Alencar", correta: false },
            { texto: "Érico Veríssimo", correta: false }
          ]
        },
        {
          enunciado: "Qual é a fórmula da água?",
          alternativas: [
            { texto: "H2O", correta: true },
            { texto: "CO2", correta: false },
            { texto: "O2", correta: false },
            { texto: "CH4", correta: false }
          ]
        }
      ];
      
      // Função para exibir as perguntas e alternativas
      function mostraPergunta(index) {
        const pergunta = perguntas[index];
        const container = document.getElementById("quiz");
      
        // Cria a div para exibir o enunciado da pergunta
        const divPergunta = document.createElement("div");
        divPergunta.classList.add("question");
        divPergunta.innerHTML = pergunta.enunciado;
        container.appendChild(divPergunta);
      
        // Chama a função que exibe as alternativas
        mostraAlternativas(index);
      }
      
      // Função para exibir as alternativas
      function mostraAlternativas(index) {
        const pergunta = perguntas[index];
        const container = document.getElementById("quiz");
      
        // Cria a div para as alternativas
        const divAlternativas = document.createElement("div");
        divAlternativas.classList.add("alternatives");
      
        // Para cada alternativa, cria um radio button
        pergunta.alternativas.forEach((alternativa, i) => {
          const input = document.createElement("input");
          input.type = "radio";
          input.name = "pergunta" + index;
          input.value = alternativa.texto;
          input.id = "pergunta" + index + "_alternativa" + i;
      
          const label = document.createElement("label");
          label.setAttribute("for", input.id);
          label.textContent = alternativa.texto;
      
          divAlternativas.appendChild(input);
          divAlternativas.appendChild(label);
        });
      
        container.appendChild(divAlternativas);
      }
      
      // Função que exibe o resultado ao enviar a avaliação
      function enviarAvaliacao() {
        let pontos = 0;
      
        perguntas.forEach((pergunta, index) => {
          const alternativas = document.getElementsByName("pergunta" + index);
          alternativas.forEach((alternativa) => {
            if (alternativa.checked && pergunta.alternativas.find(a => a.texto === alternativa.value).correta) {
              pontos++;
            }
          });
        });
      
        // Exibe a pontuação final
        const resultado = document.getElementById("resultado");
        resultado.innerHTML = `Você acertou ${pontos} de ${perguntas.length} questões.`;
      
        // Mensagem final
        if (pontos === perguntas.length) {
          resultado.innerHTML += "<br>Parabéns! Você acertou tudo!";
        } else if (pontos >= perguntas.length / 2) {
          resultado.innerHTML += "<br>Bom trabalho! Você acertou mais da metade.";
        } else {
          resultado.innerHTML += "<br>Precisa estudar mais, tente novamente.";
        }
      }
      
      // Inicializa a exibição das perguntas
      window.onload = () => {
        perguntas.forEach((pergunta, index) => {
          mostraPergunta(index);
        });
      };
      
      label.textContent = alternativa.texto;
  
      divAlternativas.appendChild(input);
      divAlternativas.appendChild(label);
    });
  
    container.appendChild(divAlternativas);
  }
  
  // Função que exibe o resultado ao enviar a avaliação
  function enviarAvaliacao() {
    let pontos = 0;
  
    perguntas.forEach((pergunta, index) => {
      const alternativas = document.getElementsByName("pergunta" + index);
      alternativas.forEach((alternativa) => {
        if (alternativa.checked && pergunta.alternativas.find(a => a.texto === alternativa.value).correta) {
          pontos++;
        }
      });
    });
  
    // Exibe a pontuação final
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Você acertou ${pontos} de ${perguntas.length} questões.`;
  
    // Mensagem final
    if (pontos === perguntas.length) {
      resultado.innerHTML += "<br>Parabéns! Você acertou tudo!";
    } else if (pontos >= perguntas.length / 2) {
      resultado.innerHTML += "<br>Bom trabalho! Você acertou mais da metade.";
    } else {
      resultado.innerHTML += "<br>Precisa estudar mais, tente novamente.";
    }
  }
  
  // Inicializa a exibição das perguntas
  window.onload = () => {
    perguntas.forEach((pergunta, index) => {
      mostraPergunta(index);
    });
  };
  