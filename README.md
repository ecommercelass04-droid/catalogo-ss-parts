# 🇧🇷 SS PARTS BRASIL - Catálogo de Produtos

Catálogo digital profissional e responsivo para equipamentos de movimentação e transporte da **SS PARTS BRASIL**.

## ✨ Características

✅ **Design Moderno e Profissional**
- Cores da marca: Branco (#ffffff), Azul (#2596be), Verde e Amarelo (Brasil)
- Animações suaves e efeitos visuais atraentes
- Layout 100% responsivo (mobile, tablet, desktop)

✅ **Catálogo Completo com 8 Produtos**
- Transpaletes (Manual e Elétrico)
- Empilhadeiras (Patoladas e de Coluna)
- Pneus (Pneumáticos e Maciços)
- Esteiras para Mini Escavadeira

✅ **Funcionalidades Interativas**
- 🔍 Filtro de produtos por categoria
- 📱 Modal detalhado com especificações técnicas completas
- 💬 Integração com WhatsApp para orçamentos
- 📧 Formulário de contato
- 🎨 Animações suaves em todos os elementos

## 🗂️ Estrutura dos Arquivos

```
catalogo-ss-parts/
├── index.html      # Página principal (estrutura HTML)
├── styles.css      # Estilos CSS e animações (500+ linhas)
├── script.js       # Lógica JavaScript e funcionalidades
└── README.md       # Este arquivo
```

## 🚀 Começando Rápido

### 1. **Configure seu Número de WhatsApp** (IMPORTANTE!)

Abra o arquivo `script.js` e localize a **linha 2**:

```javascript
const NUMERO_WHATSAPP = '5511999999999'; // ⚠️ ALTERE AQUI SEU NÚMERO!
```

**Altere para seu número no formato:**
- **Código do país**: 55 (Brasil)
- **DDD**: Seus 2 dígitos (ex: 11, 21, 85)
- **Número**: Seus 8-9 dígitos

**Exemplos:**
- Para (11) 9 9999-9999 → `5511999999999`
- Para (21) 9 8888-8888 → `5521988888888`
- Para (85) 9 7777-7777 → `5585977777777`

### 2. **Teste Localmente**

```bash
# Simplesmente abra o arquivo index.html no seu navegador
# Não é necessário servidor, funciona totalmente offline!
```

### 3. **Deploy no GitHub Pages** (Grátis!)

1. Vá para o repositório no GitHub
2. Clique em **⚙️ Settings**
3. Vá para **Pages** (no menu lateral esquerdo)
4. Em **Source**, selecione **Deploy from a branch**
5. Escolha a branch **main** e clique **Save**
6. Seu site estará disponível em: `https://seu-usuario.github.io/catalogo-ss-parts`

> 💡 Pode levar alguns minutos para ativar (normalmente menos de 1 minuto)

## 📝 Como Personalizar

### Adicionar ou Editar Produtos

No arquivo `script.js`, procure pela seção `// ARRAY DE PRODUTOS` e adicione um novo objeto:

```javascript
{
    id: 9,                              // ID único
    titulo: "Seu Produto",              // Nome do produto
    categoria: "transpalet",            // Categoria: transpalet, empilhadeira, pneus, esteiras
    imagem: "🏗️",                        // Emoji representativo
    descricao: "Descrição completa...", // Descrição do produto
    especificacoes: [                   // Lista de especificações
        "Especificação 1",
        "Especificação 2",
        "Especificação 3"
    ]
}
```

### Editar Cores da Marca

No arquivo `styles.css`, localize a seção `:root` e altere as variáveis CSS:

```css
:root {
    --branco: #ffffff;       /* Branco principal */
    --azul: #2596be;         /* Azul secundário */
    --verde: #228B22;        /* Verde Brasil */
    --amarelo: #FFD700;      /* Amarelo Brasil */
    /* ... outras cores ... */
}
```

### Editar Textos Principais

**Header e navegação** (no `index.html`):
```html
<h1>🇧🇷 SS PARTS BRASIL</h1>
```

**Seção Hero** (no `index.html`):
```html
<h2>Equipamentos de Movimentação e Transporte</h2>
<p>Soluções profissionais para sua empresa</p>
```

## 🎨 Cores da Marca

| Cor | Código | Uso |
|-----|--------|-----|
| Branco | `#ffffff` | Fundo principal |
| Azul | `#2596be` | Headers, buttons, destaques |
| Verde Brasil | `#228B22` | Check-marks, acentos |
| Amarelo Brasil | `#FFD700` | Call-to-action, hover effects |

## 💡 Dicas Importantes

✨ **Para melhor performance:**
- Comprima as imagens antes de adicionar (use [TinyPNG](https://tinypng.com/))
- Use formatos modernos como WebP quando possível
- Mantenha a pasta `/images` bem organizada

✨ **Para melhor conversão:**
- Preencha as especificações técnicas corretamente
- Use descrições claras e objetivas
- Facilite o contato via WhatsApp

✨ **Para melhor SEO:**
- Atualize as meta tags em `index.html`
- Adicione descrições detalhadas nos produtos
- Mantenha o conteúdo atualizado regularmente

## 📱 Responsividade

O site foi otimizado para:
- 📱 Smartphones (320px e acima)
- 📱 Tablets (768px e acima)
- 💻 Desktops (1200px e acima)

Todos os elementos se adaptam automaticamente ao tamanho da tela.

## 🔧 Funcionalidades Técnicas

### Filtros de Produtos
- Filtra por categoria em tempo real
- Animação suave na transição
- Botão ativo indica filtro selecionado

### Modal Interativo
- Abre com animação suave
- Exibe descrição completa e especificações
- Botão integrado para WhatsApp
- Fecha ao clicar no X, fora da modal ou pressionar ESC

### Integração WhatsApp
- Botão direto no modal de produto
- Botão de contato na seção contato
- Formulário com envio automático para WhatsApp
- Mensagens pré-formatadas profissionais

### Formulário de Contato
- Valida campos obrigatórios
- Envia dados via WhatsApp
- Limpa automaticamente após envio
- Feedback visual ao usuário

## 📊 Conteúdo Incluído

### 8 Produtos Completos

**Transpaletes (2 produtos)**
- Manual: 2.500 kg, 200mm elevação
- Elétrico: Motor 48V, 8h autonomia

**Empilhadeiras (3 produtos)**
- Patolada Manual: até 5m altura
- Patolada Elétrica: Motor 48V, 5m altura
- De Coluna Manual: 6m altura, espaços reduzidos

**Pneus (2 produtos)**
- Pneumático: Com câmara de ar
- Maciço: Resistente a furos, 2000h+ vida útil

**Esteiras (1 produto)**
- Mini Escavadeira: 2000h+ durabilidade

## 🌐 Links Úteis

- **Seu catálogo em produção**: `https://seu-usuario.github.io/catalogo-ss-parts`
- **GitHub do repositório**: `https://github.com/seu-usuario/catalogo-ss-parts`
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [WhatsApp Web API](https://www.whatsapp.com/business/api)

## 📋 Checklist de Configuração

- [ ] Número de WhatsApp configurado em `script.js`
- [ ] Catálogo visualizado localmente
- [ ] Todos os links funcionando
- [ ] GitHub Pages ativado
- [ ] URL funcional verificada
- [ ] Catálogo compartilhado com clientes

## 🎯 Próximos Passos

1. ✅ Configure seu WhatsApp (PRIORITÁRIO)
2. 📸 Adicione imagens reais dos produtos (opcional)
3. 🎨 Personalize as cores se desejar
4. 📝 Revise as descrições dos produtos
5. 🌐 Deploy no GitHub Pages
6. 📊 Compartilhe seu catálogo
7. 📈 Monitore o tráfego e feedback

## 📧 Suporte

Para dúvidas ou alterações no catálogo, entre em contato com:

**Consultor Comercial**: ecommercelass04-droidChat  
**Empresa**: SS PARTS BRASIL  
**Especialidade**: Equipamentos de Movimentação e Transporte

---

## 📄 Informações do Projeto

- **Criado em**: 04/05/2026
- **Status**: ✅ Pronto para produção
- **Versão**: 1.0
- **Responsável**: ecommercelass04-droidChat
- **Empresa**: SS PARTS BRASIL 🇧🇷
- **Repositório ID**: 1228855252

---

**Obrigado por usar o Catálogo SS PARTS BRASIL!** 🚀💼
