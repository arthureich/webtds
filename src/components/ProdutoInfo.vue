<template>
  <!-- Componente de informação do produto -->
  <div class="product">
    <!-- Imagem do produto -->
    <img :src="imagem" alt="Imagem do produto" class="product-image">
    <!-- Nome do produto -->
    <h2 class="product-name">{{ nome }}</h2>
    <!-- Descrição do produto -->
    <p class="product-description">{{ descricao }}</p>
    <!-- Preço do produto -->
    <p class="product-price">{{ preco }}</p>
    <!-- Quantidade do produto -->
    <div class="product-quantity">
      <!-- Botão para diminuir a quantidade -->
      <button @click="decreaseQuantity" class="quantity-button">-</button>
      <!-- Input para mostrar e alterar a quantidade -->
      <input type="number" v-model="quantidade" min="1" class="quantity-input">
      <!-- Botão para aumentar a quantidade -->
      <button @click="increaseQuantity" class="quantity-button">+</button>
    </div>
    <!-- Botão para adicionar o produto ao carrinho -->
    <button @click="adicionarAoCarrinho" class="btn btn-dark">Adicionar ao Carrinho</button>
  </div>
</template>

<script>
export default {
  // Propriedades do componente
  props: ['nome', 'descricao', 'preco', 'imagem'],
  data() {
    return {
      // Quantidade inicial do produto
      quantidade: 1
    }
  },
  methods: {
    // Método para adicionar o produto ao carrinho
    adicionarAoCarrinho() {
      // Cria um objeto com as informações do produto
      const produto = {
        nome: this.nome,
        descricao: this.descricao,
        preco: this.preco,
        imagem: this.imagem,
        quantidade: this.quantidade,
      };
      // Emite um evento com o produto para ser adicionado ao carrinho
      this.$emit("adicionar", produto);
    },
    // Método para aumentar a quantidade do produto
    increaseQuantity() {
      this.quantidade++;
    },
    // Método para diminuir a quantidade do produto
    decreaseQuantity() {
      if (this.quantidade > 1) {
        this.quantidade--;
      }
    }
  }
}
</script>

<style>
/* Estilos do produto */
.product {
  border: 1px solid #000000;
  padding: 10px;
  width: 230px;
  background-color: #969696;
  display: flex;
  flex-direction: column;
}

.product-image {
  width: 220px;
  height: 200px;
}

.product-info {
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
}

.product-name {
  font-size: 20px;
  margin-bottom: 5px;
}

.product-description {
  margin-bottom: 10px;
}

.product-price {
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.product-quantity {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.quantity-button {
  background-color: #f8f9fa;
  border: 1px solid #ccc;
  padding: 5px 10px;
  cursor: pointer;
}

.quantity-input {
  width: 50px;
  text-align: center;
  margin: 0 5px;
}

.add-to-cart-button {
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  bottom: 0;
  border: none;
  cursor: pointer;
  margin-top: auto;
}
</style>

