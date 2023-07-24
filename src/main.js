import { createApp } from 'vue';
import App from './App.vue';
import HeaderHtml from './components/HeaderHtml.vue';
import ProdutoInfo from './components/ProdutoInfo.vue';
import CarrinhoCompras from './components/CarrinhoCompras.vue';
import FooterHtml from './components/FooterHtml.vue';

const app = createApp(App);

app.component('HeaderHtml', HeaderHtml);
app.component('ProdutoInfo', ProdutoInfo);
app.component('CarrinhoCompras', CarrinhoCompras);
app.component('FooterHtml', FooterHtml);

app.mount('#app');

