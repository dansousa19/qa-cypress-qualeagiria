# QA Cypress Automation — Qual é a Gíria

Este projeto contém uma automação simples utilizando **Cypress** para validar funcionalidades básicas da página inicial do site:

https://qualeagiria.com.br/

O objetivo é demonstrar conhecimentos em **automação de testes E2E**, validação de elementos da interface e boas práticas de automação aplicadas em um cenário real.

---

# Objetivo do Projeto

Este teste foi desenvolvido como parte de um **desafio técnico para Analista de Qualidade**.

A automação tem como objetivo validar alguns comportamentos essenciais da aplicação, garantindo que os principais elementos da interface estejam funcionando corretamente.

---

# Tecnologias Utilizadas

- Node.js
- JavaScript
- Cypress

---

# Pré-requisitos

Para executar este projeto é necessário ter instalado:

- Node.js (versão 18 ou superior recomendada)
- npm (instalado junto com Node.js)

## Como instalar o Node.js

Acesse o site oficial:

https://nodejs.org/

Baixe e instale a versão **LTS (Long Term Support)**.

Após a instalação, valide no terminal:

```
node -v
npm -v
```

Se ambos retornarem uma versão, a instalação foi concluída com sucesso.

---

# Estrutura do Projeto

qa-cypress-qualeagiria  
│  
├── cypress  
│   ├── e2e  
│   │   └── home_smoke.cy.js  
│   │  
│   ├── fixtures  
│   │  
│   └── support  
│       ├── commands.js  
│       └── e2e.js  
│  
├── cypress.config.js  
├── package.json  
├── package-lock.json  
└── README.md  

---

# Cenários Automatizados

Os seguintes cenários foram implementados:

### 1 — Carregamento da página inicial
Valida se a Home do site é carregada corretamente e se os elementos principais estão visíveis.

### 2 — Seção "Gíria do dia"
Valida a existência da seção responsável por apresentar a gíria destacada do dia.

### 3 — Navegação pelo menu principal

O teste realiza navegação pelos seguintes itens do menu:

- Inserir Gíria
- Home
- Login
- Novas Gírias
- As Mais Famosas
- Dicionário A-Z
- Hashtags
- Blog
- FAQ
- Galera

Após cada navegação, o teste retorna para a página inicial.

### 4 — Links essenciais do rodapé

Validação dos seguintes links:

- Contato
- Quem Somos
- Privacidade
- Termos de Uso

---

# Estratégia de Seleção de Elementos

Durante a automação foi priorizado o uso de seletores baseados em **texto visível utilizando `cy.contains()`**.

O site utiliza **Svelte**, framework que pode gerar classes dinâmicas como:

svelte-xxxx

Essas classes podem mudar a cada build da aplicação, o que pode tornar testes frágeis caso sejam utilizadas diretamente como seletores.

Por esse motivo, a automação prioriza elementos identificados pelo **texto visível ao usuário**, tornando os testes mais estáveis e alinhados ao comportamento real de navegação.

Em um cenário de produção, seria recomendado adicionar **atributos `data-testid`** para melhorar ainda mais a estabilidade da automação.

---

# Como Executar o Projeto

### 1 — Clonar o repositório

```
git clone https://github.com/dansousa19/qa-cypress-qualeagiria.git
```

### 2 — Acessar a pasta do projeto

```
cd qa-cypress-qualeagiria
```

### 3 — Instalar dependências

```
npm install
```

Este comando instalará todas as dependências do projeto e criará automaticamente a pasta **node_modules**, que não é versionada no repositório.

### 4 — Abrir o Cypress

```
npx cypress open
```

### 5 — Executar testes via terminal

```
npx cypress run
```

---

# Considerações

Este projeto foi desenvolvido com foco em:

- Clareza dos testes
- Simplicidade de manutenção
- Seletores mais estáveis
- Representação fiel da navegação do usuário

A automação demonstra uma abordagem básica de **Smoke Test**, validando elementos essenciais da interface e fluxos de navegação principais.

---

# Autor

Danilo Sousa  
Analista de Testes / QA