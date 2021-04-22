<template>

	<div class="all--membros">
		<TituloComBarra :titulo="titulo"/>
		<div class="conteudo columns is-multiline">
			<div class="column is-4 is-offset-0 moldura--quadro--membros"></div>
		</div>

	</div>


</template>

<script>
	import TituloComBarra from './TituloComBarra.vue';

	export default {
		components: { TituloComBarra },
		data(){
			return{
				titulo: 'MEMBROS',
			}
		},


	}
</script>

<style>
	/* .moldura--quadro--membros{

		width: 370px;
		height: 370px;
		left: 0px;
		top: 0px;

		background: #F9732C;
	} */
	.all--membros {

  height: 100vh;
  padding: 350px 150px 50px 150px;
}
</style>
