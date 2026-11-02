<div align="center">

# Praela

**Uma homenagem em forma de experiência web**

![HTML](https://img.shields.io/badge/HTML-20232a?style=flat-square) ![CSS](https://img.shields.io/badge/CSS-20232a?style=flat-square) ![JavaScript](https://img.shields.io/badge/JavaScript-20232a?style=flat-square) ![Node.js](https://img.shields.io/badge/Node.js-20232a?style=flat-square) ![Express](https://img.shields.io/badge/Express-20232a?style=flat-square)

[Sobre](#sobre) · [Como executar](#como-executar) · [Documentação](DOCUMENTACAO.md)

</div>

---

## Sobre

Cartão digital romântico criado para reunir mensagens, imagens e interações em uma página personalizada. Um servidor Express distribui o site, enquanto o chatbot responde no navegador.

## Destaques

- Páginas com conteúdo e identidade visual personalizados.
- Chatbot com respostas por palavras-chave e opções.
- Links para músicas e lembranças.
- Servidor local simples com porta configurável.

## Como executar

Clone o repositório:

```sh
git clone https://github.com/Kakykyyy/praela.git
cd praela
```

Requer Node.js compatível com Express 5. O chatbot usa respostas predefinidas e não precisa de chave de IA.

```sh
npm install
npm start
```

Acesse [a aplicação local](http://localhost:3000).

## Organização

```text
public/
├── index.html       # Página inicial
├── páginadois.html  # Conteúdo complementar
├── chatbot.js       # Interações
└── style.css        # Identidade visual
server.js            # Servidor Express
```

## Deixe com a sua identidade

Personalize textos e links nos arquivos HTML, ajuste cores em `public/style.css` e edite as respostas em `public/chatbot.js`. A variável `PORT` permite escolher outra porta para o servidor.

## Documentação técnica

O [guia técnico](DOCUMENTACAO.md) reúne configuração, comportamento dos dados, limitações conhecidas e verificações manuais. As instruções foram elaboradas a partir da leitura do código; a execução dos projetos não foi validada nesta revisão.

## Autor

Desenvolvido por [Kayky Erick · @Kakykyyy](https://github.com/Kakykyyy).
