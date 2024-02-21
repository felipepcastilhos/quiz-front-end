const perguntas = [
    {
      pergunta: "Qual linguagem é fundamental para o desenvolvimento front-end?",
      respostas: [
        "JavaScript",
        "Python",
        "Java",
      ],
      correta: 0
    },
    {
      pergunta: "Qual desses frameworks é amplamente utilizado para criar interfaces de usuário?",
      respostas: [
        "React",
        "Django",
        "Spring",
      ],
      correta: 0
    },
    {
      pergunta: "O que é responsável pelo estilo e aparência de um site?",
      respostas: [
        "HTML",
        "CSS",
        "Ruby",
      ],
      correta: 1
    },
    {
      pergunta: "Qual destas ferramentas é usada para gerenciar dependências de um projeto front-end?",
      respostas: [
        "npm",
        "Git",
        "MySQL",
      ],
      correta: 0
    },
    {
      pergunta: "Qual das seguintes opções é uma linguagem de marcação usada para estruturar o conteúdo de uma página web?",
      respostas: [
        "Java",
        "CSS",
        "HTML",
      ],
      correta: 2
    },
    {
      pergunta: "Qual destes conceitos é usado para tornar um site responsivo em diferentes dispositivos?",
      respostas: [
        "Bootstrap",
        "jQuery",
        "Node.js",
      ],
      correta: 0
    },
    {
      pergunta: "Qual destes não é um pré-processador CSS?",
      respostas: [
        "Sass",
        "Less",
        "React",
      ],
      correta: 2
    },
    {
      pergunta: "Qual destas ferramentas é usada para compilar código JavaScript moderno para uma versão compatível com navegadores mais antigos?",
      respostas: [
        "Babel",
        "Webpack",
        "Angular",
      ],
      correta: 0
    },
    {
      pergunta: "Qual destas opções é uma técnica usada para fazer requisições assíncronas em JavaScript?",
      respostas: [
        "AJAX",
        "GraphQL",
        "Express",
      ],
      correta: 0
    },
    {
      pergunta: "Qual dessas bibliotecas JavaScript é amplamente utilizada para manipulação de documentos HTML/DOM?",
      respostas: [
        "jQuery",
        "Lodash",
        "Vue.js",
      ],
      correta: 0
    },    
  ];
  
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  const corretas = new Set()
  const totaldePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totaldePerguntas
  
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for (let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
  
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
  
        const estaCorreta = event.target.value == item.correta
        
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totaldePerguntas
      }
      
      quizItem.querySelector('dl').appendChild(dt)
    }
    quizItem.querySelector('dl dt').remove()
    quiz.appendChild(quizItem)
  }