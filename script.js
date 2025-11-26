
        // DADOS COM CAMINHOS LOCAIS (Assegure que as imagens estejam na pasta /assets)
  
        const produtos = [
            { id: 1, nome: "Marmita Executiva (Bife)", desc: "Arroz, feijão, farofa, salada e bife acebolado.", preco: 22.00, img: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=400&q=80", tipo: "marmita" },
            { id: 2, nome: "Marmita Frango Grelhado", desc: "Leve e saudável. Acompanha mix de folhas.", preco: 20.00, img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80", tipo: "marmita" },
            { id: 3, nome: "Feijoada Completa", desc: "Disponível quartas e sábados. Acompanha couve.", preco: 28.00, img: "./assets/Feijoada.jpg", tipo: "marmita" },
            { id: 4, nome: "Refrigerante 2L", desc: "Para a família toda.", preco: 14.00, img: "./assets/Coca-Cola 2L.png", tipo: "bebida" },
            { id: 5, nome: "Refrigerante Lata 350ml", desc: "O sabor original do Brasil.", preco: 6.00, img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=400&q=80", tipo: "bebida" },
            { id: 6, nome: "Suco de Laranja (Natural)", desc: "Feito na hora. Copo 500ml.", preco: 9.00, img: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=400&q=80", tipo: "bebida" },
            { id: 7, nome: "Heineken Long Neck", desc: "Estupidamente gelada (Só para maiores de 18).", preco: 12.00, img: "./assets/Heineken Long Neck.png", tipo: "bebida" },
            { id: 8, nome: "Água Mineral", desc: "500ml - Com ou sem gás.", preco: 4.00, img: "https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=400&q=80", tipo: "bebida" },
            { id: 9, nome: "Suco de Uva Integral", desc: "Garrafinha 300ml, sem açúcar.", preco: 10.00, img: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?auto=format&fit=crop&w=400&q=80", tipo: "bebida" }
        ];

        let carrinho = [];
        let subtotal = 0;
        let taxaEntrega = 0;
        let totalFinal = 0;

        window.onload = () => { renderMenu(); };

        function renderMenu() {
            const gridMarmitas = document.getElementById('marmitas-grid');
            const gridBebidas = document.getElementById('bebidas-grid');
            produtos.forEach(p => {
                const card = `
                    <div class="card">
                        <img src="${p.img}" class="card-img" alt="${p.nome}">
                        <div class="card-body">
                            <div class="card-title">${p.nome}</div>
                            <div class="card-desc">${p.desc}</div>
                            <div class="card-actions">
                                <div class="card-price">R$ ${p.preco.toFixed(2)}</div>
                                <button class="btn-add" onclick="addCart(${p.id})">Adicionar</button>
                            </div>
                        </div>
                    </div>`;
                if(p.tipo === 'marmita') gridMarmitas.innerHTML += card;
                else gridBebidas.innerHTML += card;
            });
        }

        function addCart(id) {
            carrinho.push(produtos.find(p => p.id === id));
            updateTotal();
            const badge = document.getElementById('cart-count');
            badge.style.transform = "scale(1.5)";
            setTimeout(() => badge.style.transform = "scale(1)", 200);
        }

        function removeFromCart(index) {
            carrinho.splice(index, 1);
            updateTotal();
        }

        function updateTotal() {
            document.getElementById('cart-count').innerText = carrinho.length;
            const cartItemsDiv = document.getElementById('cart-items');
            
            subtotal = 0;
            let html = '';
            
            if (carrinho.length === 0) {
                cartItemsDiv.innerHTML = '<p style="text-align: center; color: #888; padding: 20px;">Seu carrinho está vazio.</p>';
            } else {
                carrinho.forEach((item, index) => {
                    subtotal += item.preco;
                    html += `
                        <div class="cart-item">
                            <div><strong>${item.nome}</strong><br><small>R$ ${item.preco.toFixed(2)}</small></div>
                            <button onclick="removeFromCart(${index})" style="border:none; background:none; color:red; cursor:pointer;"><i class="fas fa-trash"></i></button>
                        </div>`;
                });
                cartItemsDiv.innerHTML = html;
            }

            taxaEntrega = parseFloat(document.getElementById('delivery-zone').value);
            totalFinal = subtotal + taxaEntrega;

            document.getElementById('cart-subtotal').innerText = "R$ " + subtotal.toFixed(2);
            document.getElementById('delivery-fee-display').innerText = "R$ " + taxaEntrega.toFixed(2);
            document.getElementById('cart-total').innerText = "R$ " + totalFinal.toFixed(2);
        }

        function toggleCart() {
            const modal = document.getElementById('cart-modal');
            modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
            if(modal.style.display === 'flex') updateTotal();
        }

        function checkout() {
            if(carrinho.length === 0) return alert("Carrinho vazio!");
            
            const nome = document.getElementById('client-name').value;
            const fone = document.getElementById('client-phone').value;
            const end = document.getElementById('client-address').value;
            const pag = document.getElementById('payment-method').value;
            const obs = document.getElementById('obs').value;
            const zona = document.getElementById('delivery-zone');
            const zonaNome = zona.options[zona.selectedIndex].text;

            if(!nome || !fone || !end) return alert("Preencha Nome, WhatsApp e Endereço!");

            let msg = `*PEDIDO KR MARMITARIA* 🍱\n\n👤 *Cliente:* ${nome}\n📞 *Zap:* ${fone}\n📍 *Local:* ${end}\n🚚 *Zona:* ${zonaNome}\n\n*ITENS:*\n`;
            carrinho.forEach(i => msg += `✅ ${i.nome}\n`);
            
            msg += `\n💰 *Subtotal:* R$ ${subtotal.toFixed(2)}`;
            msg += `\n🛵 *Taxa:* R$ ${taxaEntrega.toFixed(2)}`;
            msg += `\n💵 *TOTAL: R$ ${totalFinal.toFixed(2)}*`;
            msg += `\n💳 *Pag:* ${pag}`;
            if(obs) msg += `\n📝 *Obs:* ${obs}`;
            msg += `\n\nAguardo confirmação!`;

            // >>>> COLOQUE O NUMERO AQUI (55 + DDD + NUMERO) <<<<
            const numDestino = "5541985220838"; 
            
            window.open(`https://wa.me/${numDestino}?text=${encodeURIComponent(msg)}`, '_blank');
        }

        // --- SISTEMA ADMIN ---
        function openAdmin() {
            const pass = prompt("Senha Administrativa:");
            if(pass === '1234') document.getElementById('admin-modal').style.display = 'flex';
            else if(pass) alert("Senha Incorreta!");
        }

        function closeAdmin() { document.getElementById('admin-modal').style.display = 'none'; }

        function switchTab(tab) {
            document.querySelectorAll('.admin-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.admin-section').forEach(s => s.classList.remove('active-section'));
            event.currentTarget.classList.add('active');
            document.getElementById(`tab-${tab}`).classList.add('active-section');
        }

        function simulateScan() {
            const display = document.getElementById('pos-display');
            const item = produtos[Math.floor(Math.random() * produtos.length)];
            const hora = new Date().toLocaleTimeString();
            display.innerHTML += `\n[${hora}] > LIDO: ${item.nome.substring(0,15)}... R$ ${item.preco.toFixed(2)}`;
            display.scrollTop = display.scrollHeight;
        }

        window.onclick = function(ev) {
            if (ev.target.classList.contains('modal')) ev.target.style.display = "none";
        }

   

