<template>
  <div id="app">
		<Header/>
		<!-- <header class="nav">
			<div class="header--logo">
				<router-link to="/">
					<img src="./assets/logo.png" alt="Logo" />
				</router-link>
			</div>
			<div class="header--menu">
				<router-link to="/">Home</router-link>
				<router-link to="/products">Produtos</router-link>
			</div>
		</header>-->
    <router-view/>
  </div>
</template>

<script>
import './styles/global.css'
import Header from './components/Header'
export default {
  components: {
		Header,
  },
}
</script>
