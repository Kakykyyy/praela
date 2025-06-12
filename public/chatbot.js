// Chatbot simples, mostrando opções de perguntas e respostas com link especial

// Respostas simples e românticas
function botReply(msg) {
    msg = msg.toLowerCase();
    if (msg.includes('oi') || msg.includes('olá')) return "Oi, amor! 💖";
    if (msg.includes('te amo')) return "Eu te amo mais ainda! 😍";
    if (msg.includes('namorados')) return "Feliz Dia dos Namorados! Que nosso amor dure para sempre! 💑";
    if (msg.includes('presente')) return "Meu maior presente é ter você comigo! 🎁";
    if (msg.includes('musica') || msg.includes('música')) return `Nossa trilha sonora é o amor! <a href="https://open.spotify.com/intl-pt/track/1Y3LN4zO1Edc2EluIoSPJN?si=ae69adf30d0a47ff" target="_blank" style="color:#d72660;text-decoration:underline;">Ouça aqui</a> 🎶`;
    if (msg.includes('foto')) return `Cada foto nossa é uma lembrança linda! <a href="https://imgur.com/a/N8JIciG" target="_blank" style="color:#d72660;text-decoration:underline;">Veja nossa galeria</a> 📸`;
    if (msg.includes('obrigado') || msg.includes('obrigada')) return "Eu que agradeço por tudo, meu amor! 💕";
    if (msg.includes('sorriso')) return "Seu sorriso ilumina meus dias! 😁";
    if (msg.includes('abraço')) return "Vem cá, me dá um abraço bem apertado! 🤗";
    if (msg.includes('anos') || msg.includes('tempo')) return "Já são quase 3 anos juntos! Que venham muitos mais!";
    return "Que mensagem linda! Conta mais, amor! 💌";
}

// Opções de perguntas sugeridas
const chatOptions = [
    "Oi",
    "Te amo",
    "Feliz dia dos namorados",
    "Qual o melhor presente?",
    "Qual nossa música?",
    "Me mostra uma foto",
    "Obrigado",
    "Fale sobre sorriso",
    "Quero um abraço",
    "Quantos anos juntos?"
];

// Cria a interface do chat
if (!document.getElementById('chatbox')) {
    const chatBox = document.createElement('div');
    chatBox.id = 'chatbox';
    chatBox.style.position = 'fixed';
    chatBox.style.bottom = '24px';
    chatBox.style.right = '24px';
    chatBox.style.width = '340px';
    chatBox.style.background = '#fff0f6';
    chatBox.style.border = '2px solid #ff69b4';
    chatBox.style.borderRadius = '18px';
    chatBox.style.boxShadow = '0 4px 24px #ffb6c1a0';
    chatBox.style.zIndex = '9999';
    chatBox.style.display = 'flex';
    chatBox.style.flexDirection = 'column';
    chatBox.style.overflow = 'hidden';

    chatBox.innerHTML = `
      <div style="background:#ff69b4;color:#fff;padding:10px 0;text-align:center;font-weight:bold;">
        💬 Chat do Amor
        <button id="closeChat" style="float:right;margin-right:10px;background:none;border:none;color:#fff;font-size:1.2em;cursor:pointer;">✖</button>
      </div>
      <div id="chat-messages" style="flex:1;min-height:120px;max-height:200px;overflow-y:auto;padding:10px;font-size:1em;"></div>
      <div id="chat-options" style="padding:8px 10px 0 10px;display:flex;flex-wrap:wrap;gap:6px 6px;"></div>
      <form id="chat-form" style="display:flex;border-top:1px solid #ffb6c1;">
        <input id="chat-input" type="text" placeholder="Diga algo..." style="flex:1;padding:8px;border:none;border-radius:0 0 0 12px;outline:none;">
        <button type="submit" style="background:#ff69b4;color:#fff;border:none;padding:0 18px;font-size:1.1em;border-radius:0 0 12px 0;cursor:pointer;">➤</button>
      </form>
    `;

    document.body.appendChild(chatBox);

    const chatMessages = document.getElementById('chat-messages');
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const closeChat = document.getElementById('closeChat');
    const chatOptionsDiv = document.getElementById('chat-options');

    // Mostra as opções de perguntas
    chatOptions.forEach(opt => {
        const btn = document.createElement('button');
        btn.textContent = opt;
        btn.type = 'button';
        btn.style.background = '#fff';
        btn.style.color = '#d72660';
        btn.style.border = '1px solid #ffb6c1';
        btn.style.borderRadius = '12px';
        btn.style.padding = '5px 12px';
        btn.style.margin = '2px 0';
        btn.style.cursor = 'pointer';
        btn.onclick = () => {
            addMessage(opt, 'user');
            setTimeout(() => {
                addMessage(botReply(opt), 'bot');
            }, 500);
        };
        chatOptionsDiv.appendChild(btn);
    });

    // Função para exibir mensagens (permite HTML para links)
    function addMessage(text, from = 'user') {
        const msgDiv = document.createElement('div');
        msgDiv.style.margin = '6px 0';
        msgDiv.style.textAlign = from === 'user' ? 'right' : 'left';
        msgDiv.innerHTML = `<span style="background:${from==='user'?'#ffb6c1':'#fff'};color:#d72660;padding:6px 12px;border-radius:12px;display:inline-block;max-width:80%;">${text}</span>`;
        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Evento de envio
    chatForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const userMsg = chatInput.value.trim();
        if (!userMsg) return;
        addMessage(userMsg, 'user');
        chatInput.value = '';
        setTimeout(() => {
            addMessage(botReply(userMsg), 'bot');
        }, 500);
    });

    // Fechar o chat
    closeChat.addEventListener('click', () => {
        chatBox.style.display = 'none';
        // Cria botão flutuante para reabrir o chat
        if (!document.getElementById('openChatBtn')) {
            const openBtn = document.createElement('button');
            openBtn.id = 'openChatBtn';
            openBtn.innerHTML = '💬';
            openBtn.title = 'Abrir chat';
            openBtn.style.position = 'fixed';
            openBtn.style.bottom = '28px';
            openBtn.style.right = '28px';
            openBtn.style.width = '54px';
            openBtn.style.height = '54px';
            openBtn.style.background = 'linear-gradient(135deg, #a18cd1 60%, #f9d423 100%)';
            openBtn.style.color = '#fff';
            openBtn.style.border = 'none';
            openBtn.style.borderRadius = '50%';
            openBtn.style.boxShadow = '0 4px 16px #a18cd180';
            openBtn.style.fontSize = '2em';
            openBtn.style.cursor = 'pointer';
            openBtn.style.zIndex = '10000';
            openBtn.style.display = 'flex';
            openBtn.style.alignItems = 'center';
            openBtn.style.justifyContent = 'center';
            openBtn.style.transition = 'background 0.2s, transform 0.2s';
            openBtn.onmouseenter = () => openBtn.style.transform = 'scale(1.12)';
            openBtn.onmouseleave = () => openBtn.style.transform = 'scale(1)';
            openBtn.onclick = () => {
                chatBox.style.display = 'flex';
                openBtn.remove();
                chatInput.focus();
            };
            document.body.appendChild(openBtn);
        }
    });

    // Atalho: abrir chat com Ctrl+Shift+C
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'c') {
            chatBox.style.display = 'flex';
            const openBtn = document.getElementById('openChatBtn');
            if (openBtn) openBtn.remove();
            chatInput.focus();
        }
    });
}
