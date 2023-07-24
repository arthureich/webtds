<template>
  <!-- Cabeçalho do site -->
  <header class="header">
    <!-- Logo do site -->
    <h1 class="logo">Ferragens São João</h1>
    <!-- Navegação do site -->
    <nav class="navbar">
      <!-- Lista de links de navegação -->
      <ul class="nav-list">
        <!-- Cada item da lista é um link para uma página do site -->
        <li class="nav-item"><a href="/">Início</a></li>
        <li class="nav-item"><a href="/produtos">Produtos</a></li>
        <li class="nav-item"><a href="/sobre">Sobre</a></li>
        <li class="nav-item"><a href="/contato">Contato</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  mounted() {
    // Quando o componente é montado, adiciona um evento de clique a cada item de navegação
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach(item => {
      item.addEventListener("click", this.navigateTo);
    });
  },
  methods: {
    navigateTo(event) {
      // Previne o comportamento padrão do link
      event.preventDefault();
      // Pega o href do link clicado
      const href = event.currentTarget.querySelector("a").getAttribute("href");
      // Navega para o href do link clicado
      window.location.href = href;
    }
  }
}
</script>

<style>
/* Estilos do cabeçalho */
.header {
  background-color: #333;
  padding: 20px;
  color: #fff;
}

.logo {
  font-size: 24px;
  margin: 0;
}

.navbar {
  margin-top: 10px;
}

.nav-list {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-between;
}

.nav-item {
  margin-right: 10px;
}

.nav-item a {
  color: #fff;
  text-decoration: none;
}

.nav-item a:hover {
  color: #ccc;
}
</style>


