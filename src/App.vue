<template>
  <div class="app">
    <!-- Cabeçalho do site -->
    <HeaderHtml />
    <div class="content">
    <!-- Lista de produtos -->
      <div class="products">
        <ProdutoInfo
          nome="Serrinha Starret 24 Dentes"
          descricao="Lâmina de serra manual rígida de aço rápido, ideal para trabalhos em bancada."
          preco="10.00"
          imagem="https://img.lojadomecanico.com.br/IMAGENS/2/562/14593/Serrinha-12-Pol-24-Dentes-Safe-Flex-Bi-M-starrett-bs12241.JPG"
          @adicionar="adicionarProduto"
        />
        <ProdutoInfo
          nome="Disco Diamantado Irwin"
          descricao="Indicado para corte de materiais mais robustos, como concreto, tijolo, telha e alvenaria."
          preco="20.00"
          imagem="https://casadosoldador.com.br/files/products_images/17429/Disco-Diamantado-Segmentado-110-x-20mm-13892-IRWIN-Casa-do-Soldador.webp"
          @adicionar="adicionarProduto"
        />
      </div>
      <!-- Carrinho de compras -->
      <CarrinhoCompras :produtos="produtosNoCarrinho"
      @update:produtos="produtosNoCarrinho = $event"
      />
    </div>
    <FooterHtml />
  </div>
</template>

<script>
import HeaderHtml from './components/HeaderHtml.vue';
import ProdutoInfo from './components/ProdutoInfo.vue';
import CarrinhoCompras from './components/CarrinhoCompras.vue';

export default {
  components: {
    HeaderHtml,
    ProdutoInfo,
    CarrinhoCompras
  },
  data() {
    return {
      // Lista de produtos no carrinho
      produtosNoCarrinho: []
    };
  },
  methods: {
    adicionarProduto(produto) {
      // Método para adicionar um produto ao carrinho
      const updatedProds = [...this.produtosNoCarrinho];
      const index = updatedProds.findIndex(p => p.nome === produto.nome);
    
      if (index > -1) {
        updatedProds[index].quantidade+=produto.quantidade;
      } else {
        updatedProds.push({
          ...produto,
          quantidade: 1
        });
      }
      
      this.produtosNoCarrinho = updatedProds;
    }
  }

};
</script>

<style>
.app {
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.content {
  display: flex;
  justify-content: space-between;
}

.products {
  flex: 1;
  margin-right: 20px;
}
</style>

