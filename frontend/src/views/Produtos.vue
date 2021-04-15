<template>
  <div class="products">
		<Header />
    <h1>Página de Produtos</h1>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
	name: 'Produtos',
	components:{
		Header
	}
}
</script>

<style>
	h1{
		margin-top: 40px;
	}
</style>
