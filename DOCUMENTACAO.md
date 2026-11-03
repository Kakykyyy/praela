# Praela

Cartão digital romântico em HTML, CSS e JavaScript, servido por um pequeno servidor Express. O chatbot executa no navegador e seleciona respostas por palavras-chave e opções predefinidas.

## Instalação e execução

Use Node.js compatível com Express 5 (18 ou superior; prefira uma versão LTS suportada).

```sh
git clone https://github.com/Kakykyyy/praela.git
cd praela
npm install
npm start
```

Abra http://localhost:3000. A variável de ambiente `PORT` substitui a porta padrão. O texto impresso pelo servidor não representa a URL local real; a aplicação escuta na porta configurada.

## Estrutura

- `server.js`: Express, CORS e distribuição estática de `public/`.
- `public/index.html`: entrada do site.
- `public/páginadois.html`: página complementar.
- `public/chatbot.js`: interação e respostas do chatbot.
- `public/style.css`: estilos.
- `package.json`: dependências e comando `start`.

## Personalização

Edite textos e links nas páginas HTML, cores e layout no CSS, e respostas em `public/chatbot.js`. Preserve os caminhos relativos dos recursos e a acentuação dos nomes dos arquivos.

Embora `openai` e `dotenv` estejam declarados como dependências, o servidor analisado apenas serve arquivos estáticos. Não há endpoint de IA implementado, e o chatbot atual não exige chave da OpenAI. O servidor também não carrega automaticamente um arquivo `.env`.

## Publicação

O conteúdo de `public/` pode ser servido por hospedagem estática. Para executar o servidor Node, configure a plataforma para instalar as dependências e iniciar com `npm start`, informando `PORT` quando necessário. Não há banco de dados.

## Verificação manual

Abra a página inicial, navegue para a página complementar e teste saudações, opções e links do chatbot. Confira imagens e estilos. O comando `npm test` é um placeholder que encerra com erro; não existe suíte automatizada.

## Licença

O `package.json` declara ISC, mas não há arquivo LICENSE na árvore analisada.

---
Documentação baseada na leitura da branch principal em 2 de novembro de 2026. Os procedimentos não foram executados nesta revisão documental.
