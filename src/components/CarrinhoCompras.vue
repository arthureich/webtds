<template>
  <!-- Componente do carrinho de compras -->
  <div class="cart">
    <!-- Título do carrinho de compras -->
    <h2>Carrinho de Compras</h2>
    <p v-if="compraSucesso" class="success-message">{{ mensagemSucesso }}</p>
    <!-- Se não houver produtos no carrinho, mostra uma mensagem -->
    <div v-if="produtos.length === 0 && !compraSucesso">
      <p>O carrinho está vazio.</p>
    </div>
    <!-- Se houver produtos no carrinho, mostra os produtos -->
    <div v-else>
      <!-- Lista de produtos no carrinho -->
      <div v-for="(produto, index) in produtos" :key="index" class="cart-item">
        <!-- Imagem do produto -->
        <img :src="produto.imagem" alt="Imagem do produto" class="cart-item-image">
        <!-- Informações do produto -->
        <div class="cart-item-info">
          <!-- Nome do produto -->
          <h3 class="cart-item-name">{{ produto.nome }}</h3>
          <!-- Quantidade do produto -->
          <p class="cart-item-quantity">Quantidade: {{ produto.quantidade }}</p>
          <!-- Preço total do produto (preço * quantidade) -->
          <p class="cart-item-price">Preço: R$ {{ produto.preco * produto.quantidade }}</p>
          <!-- Ações do produto (aumentar quantidade, diminuir quantidade, remover do carrinho) -->
          <div class="cart-item-actions">
            <button @click="aumentarQuantidade(index)">+</button>
            <button @click="diminuirQuantidade(index)">-</button>
            <button @click="removerProduto(index)">Remover</button>
          </div>
        </div>
      </div>
      <!-- Total do carrinho -->
      <div v-if= "!compraSucesso">
      <p class="cart-total">Total: R$ {{ total }}</p>
      <button @click="comprar" class="comprar-btn">Comprar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // Propriedades do componente
  props: {
    produtos: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      carrinho: [], // Local data to hold cart items
      compraSucesso: false,
      mensagemSucesso: "",
    };
  },

  computed: {
    // Calcula o total do carrinho
    total() {
      return this.produtos.reduce((acc, produto) => acc + produto.preco * produto.quantidade, 0);
    }
  },
  methods: {
    // Método para aumentar a quantidade de um produto
    aumentarQuantidade(index) {
      const produtosCopy = [...this.produtos];
      produtosCopy[index].quantidade++;
      this.$emit('update:produtos', produtosCopy);
    },
    // Método para diminuir a quantidade de um produto
    diminuirQuantidade(index) {
      if (this.produtos[index].quantidade > 1) {
        const produtosCopy = [...this.produtos];
        produtosCopy[index].quantidade--;
        this.$emit('update:produtos', produtosCopy);
      }
    },
    // Método para remover um produto do carrinho
    removerProduto(index) {
      const updatedProds = [...this.produtos];
      updatedProds.splice(index, 1);
      this.$emit('update:produtos', updatedProds);
    },
    comprar() {
      // Comprar produtos do carrinho
      this.carrinho = [];
      this.compraSucesso = true;
      this.mensagemSucesso =
        this.produtos.length === 1
          ? "Produto comprado com sucesso!"
          : "Produtos comprados com sucesso!";
      this.$emit('update:produtos', this.carrinho);
      setTimeout(() => {
        this.compraSucesso = false;
        this.mensagemSucesso = "";
      }, 3000);
    },
  }
}
</script>

<style>
.cart {
  border: 1px solid #ccc;
  min-width: 300px;
  padding: 23px;
}

.cart h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.cart-item-image {
  max-width: 100px;
  margin-right: 10px;
}

.cart-item-name {
  font-size: 18px;
  margin-bottom: 5px;
}

.cart-item-quantity,
.cart-item-price {
  margin-bottom: 5px;
}

.cart-item-actions button {
  background-color: #f8f9fa;
  border: 1px solid #ccc;
  padding: 5px 10px;
  cursor: pointer;
  margin-right: 5px;
}

.cart-total {
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
}

.comprar-btn {
  background-color: #4caf50;
  color: rgb(0, 0, 0);
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
}

.success-message {
  margin-top: 10px;
  color: #4caf50;
  font-weight: bold;
}
</style>

