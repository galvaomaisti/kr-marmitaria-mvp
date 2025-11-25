# kr-marmitaria-mvp
MVP de Sistema de Gestão e Delivery para Marmitaria (KR). Cardápio digital interativo, cálculo de frete automático, checkout via WhatsApp e Painel Administrativo com simulação de PDV. 🍱🚀

# 🍱 KR Marmitaria - Sistema de Delivery & Gestão (MVP)

> **O Verdadeiro Tempero agora com Tecnologia.**

Este projeto é um **MVP (Minimum Viable Product)** de uma solução web completa para marmitarias. O sistema resolve dois problemas principais: a **automação do atendimento** via WhatsApp para o cliente e a **gestão simplificada** (Frente de Caixa/PDV) para o estabelecimento.

---

## 🚀 Funcionalidades Principais

### 📱 Para o Cliente (App Web)
* **Cardápio Visual:** Interface limpa com imagens reais dos pratos e bebidas.
* **Carrinho Inteligente:** Adição e remoção de itens em tempo real.
* **Cálculo de Frete:** Seletor de bairros que atualiza o valor total automaticamente com base na taxa de entrega.
* **Checkout via WhatsApp:** Gera um pedido formatado e detalhado (Nome, Endereço, Itens, Pagamento) e envia diretamente para o WhatsApp do restaurante.

### 🖥️ Para o Administrador (Painel de Gestão)
* **Dashboard Visual:** Acesso protegido por senha (Demo: `1234`).
* **Simulação de PDV (Frente de Caixa):** Interface imersiva que simula a leitura de códigos de barras com log de sistema em tempo real ("tela preta").
* **Fila de Pedidos (Cozinha):** Visualização de pedidos em preparação e prontos.
* **Controle Financeiro:** Resumo de vendas do dia e contas a pagar.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi desenvolvido focado em **performance** e **portabilidade**, rodando inteiramente no navegador sem necessidade de instalação complexa para demonstração.

* **HTML5 Semântico:** Estrutura sólida e acessível.
* **CSS3 Moderno:** Variáveis CSS (`:root`), Flexbox e Grid Layout para responsividade total (Mobile First).
* **JavaScript (ES6+):** Lógica de carrinho, manipulação de DOM, cálculos financeiros e integração com API do WhatsApp.
* **FontAwesome:** Ícones para interface intuitiva.

---

## 📸 Como Testar

Você pode acessar a versão online agora mesmo através do GitHub Pages:

🔗 **[CLIQUE AQUI PARA ACESSAR O SISTEMA](SEU_LINK_DO_GITHUB_PAGES_AQUI)**

### Passo a Passo da Demo:
1.  **Faça um Pedido:** Adicione itens, escolha o bairro e clique em "Enviar no Zap".
2.  **Acesse o Admin:** Clique em "Login Func/Admin" no topo.
3.  **Senha de Acesso:** Digite `1234`.
4.  **Simule o Caixa:** Vá na aba "Caixa (PDV)" e clique em "Simular Leitura" para ver o sistema operando.

---

## 🔜 Próximos Passos (Roadmap)

Para a versão 2.0 (Produção), o sistema será escalado para uma arquitetura full-stack:

- [ ] **Backend:** Migração para Node.js (Express) para gerenciar requisições.
- [ ] **Banco de Dados:** Integração com MongoDB para persistência de histórico de pedidos e estoque.
- [ ] **Impressão Térmica:** Implementação da biblioteca `escpos` para impressão automática de comandas na cozinha via USB/Rede.
- [ ] **Autenticação:** Sistema de login seguro com JWT.

---

Made with 🧡 by [Seu Nome Aqui]
