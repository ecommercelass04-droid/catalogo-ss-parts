// ======================================
// ⚠️ CONFIGURE SEU WHATSAPP AQUI! ⚠️
// ======================================
const NUMERO_WHATSAPP = '5511999999999'; // Altere para: 55 + DDD + número


// ======================================
// ARRAY DE PRODUTOS
// ======================================
const produtos = [
    {
        id: 1,
        titulo: "Transpalet Manual",
        categoria: "transpalet",
        imagem: "🛒",
        descricao: "Transpalet manual de alta qualidade para movimentação de cargas em ambientes internos. Ideal para pequenas e médias empresas que precisam de eficiência e confiabilidade.",
        especificacoes: [
            "Capacidade: 2.500 kg",
            "Altura de elevação: 200 mm",
            "Rodas de poliuretano de alta durabilidade",
            "Estrutura em aço carbono resistente",
            "Dimensões: 1.150 x 800 mm",
            "Peso: 150 kg"
        ]
    },
    {
        id: 2,
        titulo: "Transpalet Elétrico",
        categoria: "transpalet",
        imagem: "⚡",
        descricao: "Transpalet elétrico com tecnologia avançada para maior eficiência operacional. Reduz significativamente a fadiga do operador e aumenta a produtividade.",
        especificacoes: [
            "Capacidade: 2.500 kg",
            "Motor elétrico 48V de alta performance",
            "Bateria com autonomia de 8 horas",
            "Altura de elevação: 200 mm",
            "Velocidade: 5 km/h",
            "Carregamento: 2-3 horas"
        ]
    },
    {
        id: 3,
        titulo: "Empilhadeira Patolada Manual",
        categoria: "empilhadeira",
        imagem: "📦",
        descricao: "Empilhadeira patolada manual com chassi robusto e sistema de elevação eficiente. Perfeita para empilhamento de cargas até 5 metros de altura.",
        especificacoes: [
            "Capacidade: 1.500 kg",
            "Altura máxima: 5.000 mm",
            "Garfo ajustável e resistente",
            "Estrutura em aço carbono",
            "Dimensões: 2.000 x 1.000 mm",
            "Sistema de freio manual seguro"
        ]
    },
    {
        id: 4,
        titulo: "Empilhadeira Patolada Elétrica",
        categoria: "empilhadeira",
        imagem: "🚀",
        descricao: "Empilhadeira patolada com motor elétrico para operação mais rápida e silenciosa. Ideal para ambientes internos e operações contínuas.",
        especificacoes: [
            "Capacidade: 1.500 kg",
            "Motor elétrico 48V com sistema hidráulico",
            "Altura máxima: 5.000 mm",
            "Bateria recarregável de longa duração",
            "Velocidade de elevação: 0,5 m/s",
            "Sistema de segurança integrado"
        ]
    },
    {
        id: 5,
        titulo: "Empilhadeira de Coluna Manual",
        categoria: "empilhadeira",
        imagem: "🏗️",
        descricao: "Empilhadeira de coluna manual com design inovador e compacto. Ideal para espaços reduzidos e operações de precisão em áreas apertadas.",
        especificacoes: [
            "Capacidade: 1.000 kg",
            "Altura máxima: 6.000 mm",
            "Sistema de coluna dupla para estabilidade",
            "Garfo retrátil inteligente",
            "Dimensões compactas para manobra",
            "Estrutura em aço de alta resistência"
        ]
    },
    {
        id: 6,
        titulo: "Pneu Pneumático",
        categoria: "pneus",
        imagem: "🛞",
        descricao: "Pneus pneumáticos de alta qualidade para empilhadeiras. Oferece maior conforto de operação e melhor aderência em diversos pisos.",
        especificacoes: [
            "Tamanho: 6.50 x 10 polegadas",
            "Pressão recomendada: 28 PSI",
            "Anel de aço interno para resistência",
            "Câmara de ar de borracha butílica incluída",
            "Longa durabilidade e excelente grip",
            "Compatível com empilhadeiras padrão"
        ]
    },
    {
        id: 7,
        titulo: "Pneu Maciço",
        categoria: "pneus",
        imagem: "⭕",
        descricao: "Pneus maciços resistentes para ambientes com alto risco de furos. Sem necessidade de manutenção frequente e vida útil estendida.",
        especificacoes: [
            "Tamanho: 6.50 x 10 polegadas",
            "Material: Borracha sintética reforçada",
            "Sem câmara de ar - sem risco de furos",
            "Altamente resistente a objetos perfurantes",
            "Vida útil: 2.000+ horas de operação",
            "Ideal para ambientes com entulho"
        ]
    },
    {
        id: 8,
        titulo: "Esteira Mini Escavadeira",
        categoria: "esteiras",
        imagem: "🐛",
        descricao: "Esteiras de reposição de alta qualidade para mini escavadeiras. Compatível com as principais marcas do mercado com excelente durabilidade.",
        especificacoes: [
            "Altura do passo: 72 mm",
            "Largura: 400 mm",
            "Material: Borracha reforçada com lona",
            "Compatibilidade: Múltiplas marcas conhecidas",
            "Durabilidade: 2.000+ horas de operação",
            "Fácil instalação e manutenção"
        ]
    }
];

let produtoAtual = null;
let filtroAtual = 'todos';


// ======================================
// INICIALIZAR PÁGINA
// ======================================
document.addEventListener('DOMContentLoaded', () => {
    renderizarProdutos(produtos);
    setupForm();
    console.log('✅ Catálogo SS PARTS BRASIL carregado com sucesso!');
});


// ======================================
// RENDERIZAR PRODUTOS NO GRID
// ======================================
function renderizarProdutos(listaFiltrada) {
    const grid = document.getElementById('produtosGrid');
    if (!grid) return;

    grid.innerHTML = '';

    if (listaFiltrada.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #999;">Nenhum produto encontrado.</p>';
        return;
    }

    listaFiltrada.forEach((produto, index) => {
        const card = document.createElement('div');
        card.className = 'produto-card';
        card.style.animationDelay = `${index * 0.1}s`;
        card.innerHTML = `
            <div class="produto-imagem">${produto.imagem}</div>
            <div class="produto-info">
                <div class="produto-categoria">${produto.categoria}</div>
                <div class="produto-titulo">${produto.titulo}</div>
                <div class="produto-descricao">${produto.descricao.substring(0, 70)}...</div>
                <button class="btn-detalhes" onclick="abrirModal(${produto.id})">Ver Detalhes</button>
            </div>
        `;
        grid.appendChild(card);
    });
}


// ======================================
// FILTRAR PRODUTOS POR CATEGORIA
// ======================================
function filtrarProdutos(categoria) {
    filtroAtual = categoria;

    // Atualizar botões ativos
    document.querySelectorAll('.filtro-btn').forEach(btn => {
        btn.classList.remove('ativo');
    });
    event.target.classList.add('ativo');

    // Filtrar produtos
    let filtrados = produtos;
    if (categoria !== 'todos') {
        filtrados = produtos.filter(p => p.categoria === categoria);
    }

    renderizarProdutos(filtrados);
}


// ======================================
// ABRIR MODAL COM DETALHES DO PRODUTO
// ======================================
function abrirModal(id) {
    produtoAtual = produtos.find(p => p.id === id);

    if (!produtoAtual) return;

    // Preencher modal
    document.getElementById('modalTitulo').textContent = produtoAtual.titulo;
    document.getElementById('modalDescricao').textContent = produtoAtual.descricao;

    const modalImg = document.getElementById('modalImg');
    modalImg.textContent = produtoAtual.imagem;
    modalImg.style.fontSize = '80px';

    // Preencher especificações
    const listaEspec = document.getElementById('modalEspecificacoes');
    listaEspec.innerHTML = '';
    produtoAtual.especificacoes.forEach(espec => {
        const li = document.createElement('li');
        li.textContent = espec;
        listaEspec.appendChild(li);
    });

    // Mostrar modal
    document.getElementById('produtoModal').classList.add('show');
    document.body.style.overflow = 'hidden'; // Desabilitar scroll
}


// ======================================
// FECHAR MODAL
// ======================================
function fecharModal() {
    document.getElementById('produtoModal').classList.remove('show');
    document.body.style.overflow = 'auto'; // Reabilitar scroll
}


// ======================================
// FECHAR MODAL AO CLICAR FORA
// ======================================
document.addEventListener('click', (e) => {
    const modal = document.getElementById('produtoModal');
    if (e.target === modal) {
        fecharModal();
    }
});


// ======================================
// FECHAR MODAL COM ESC
// ======================================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        fecharModal();
    }
});


// ======================================
// ENVIAR WHATSAPP DO MODAL
// ======================================
function enviarWhatsApp() {
    if (!produtoAtual) return;

    const mensagem = `Olá! 🇧🇷 Estou interessado em conhecer mais sobre o produto *${produtoAtual.titulo}* da SS PARTS BRASIL. Gostaria de receber um orçamento completo. Obrigado!`;

    const url = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}


// ======================================
// ABRIR WHATSAPP DIRETO (CONTATO)
// ======================================
function abrirWhatsApp() {
    const mensagem = `Olá! 🇧🇷 Gostaria de conhecer mais sobre os equipamentos de movimentação e transporte da SS PARTS BRASIL. Pode me enviar um catálogo completo? Obrigado!`;

    const url = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}


// ======================================
// SETUP DO FORMULÁRIO DE CONTATO
// ======================================
function setupForm() {
    const form = document.getElementById('formularioContato');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Obter valores
        const nome = document.getElementById('nomeForm')?.value || '';
        const email = document.getElementById('emailForm')?.value || '';
        const empresa = document.getElementById('empresaForm')?.value || '';
        const mensagem = document.getElementById('mensagemForm')?.value || '';

        // Validação básica
        if (!nome || !email || !empresa || !mensagem) {
            alert('Por favor, preencha todos os campos!');
            return;
        }

        // Montar mensagem
        const textoFinal = `*FORMULÁRIO DE CONTATO - SS PARTS BRASIL* 📧\n\n*Nome:* ${nome}\n*Email:* ${email}\n*Empresa:* ${empresa}\n\n*Mensagem:*\n${mensagem}`;

        // Enviar via WhatsApp
        const url = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(textoFinal)}`;
        window.open(url, '_blank');

        // Limpar formulário
        form.reset();
        alert('Sua mensagem foi enviada! Você será redirecionado para o WhatsApp.');
    });
}


// ======================================
// FUNÇÕES AUXILIARES
// ======================================

// Função para buscar produto por ID
function buscarProduto(id) {
    return produtos.find(p => p.id === id);
}

// Função para contar produtos por categoria
function contarPorCategoria(categoria) {
    return produtos.filter(p => p.categoria === categoria).length;
}

// Log de informações
console.log('🇧🇷 SS PARTS BRASIL - Catálogo de Produtos');
console.log('Total de produtos:', produtos.length);
console.log('Categorias:', [...new Set(produtos.map(p => p.categoria))]);
