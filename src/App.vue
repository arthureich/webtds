<template>
  <div class="app">
    <!-- Cabeçalho do site -->
    <HeaderHtml />
    <div class="content">
      <div class="products">
        <!-- Wrapper para separar os produtos -->
        <div class="products-wrapper">
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
          <ProdutoInfo
            nome="Fechadura Aço Inox 40mm"
            descricao="Fechadura externa reforçada."
            preco="60.00"
            imagem="https://m.media-amazon.com/images/I/31KPmev1gPL._AC_SL1000_.jpg"
            @adicionar="adicionarProduto"
          />
          <ProdutoInfo
            nome="Chuveiro Maxi Ducha 220V"
            descricao="Com espalhador de grandes dimensões, a Maxi Ducha proporciona um banho relaxante, pois oferece uma vazão uniforme de água."
            preco="70.00"
            imagem="https://m.media-amazon.com/images/I/41atWDVC9BL._AC_SL1000_.jpg"
            @adicionar="adicionarProduto"
          />
        </div>
      </div>
      <div class="cart">
      <!-- Carrinho de compras -->
      <CarrinhoCompras :produtos="produtosNoCarrinho" @update:produtos="produtosNoCarrinho = $event" />
      </div>
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
  background-color: rgba(162, 173, 0, 0.699);
}

.content {
  display: flex;
  justify-content: space-between;
}

.products {
  flex: 1;
  margin-right: 20px;
}

.products-wrapper {
  display: flex;
  flex-wrap: wrap; 
  padding: 10px;
  gap: 10px; 
}

.cart {
  max-width: fit-content;
  background-color: rgba(0, 0, 139, 0.438);
}

</style>

