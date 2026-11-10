const { createApp } = Vue;

createApp({
  data() {
    return {
      produtos: [
        { id: 1, nome: 'Caderno', preco: 15.00, imagem: './imagens/caderno.png' },
        { id: 2, nome: 'Apontador', preco: 1.20, imagem: './imagens/apontador.png' },
        { id: 3, nome: 'Estojo', preco: 8.50, imagem: './imagens/estojo.png' }
      ],
      carrinho: [],
      contador: 0,
      menuAberto: false
    };
  },
  methods: {
    adicionarCarrinho(p) {
      this.carrinho.push(p);
    },
    removerCarrinho(idx) {
      this.carrinho.splice(idx, 1);
    }
  }
}).mount('#app');
