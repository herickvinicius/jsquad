<template>
	<div  id="sobre" class="all--sobre">
		<div class="titulocolumns">
			<h1 class="columns">Sobre Nós</h1>
			<div class="barra--laranja--titulo columns"></div>
		</div>

		<div>
			<img src="" alt="">
			<p></p>
		</div>

	</div>
</template>

<script>
export default {

}
</script>

<style>
.all--sobre{
	height: 100vh;
}
.titulo{
	display: flex;
	align-items: center;
	justify-content: center;
}
.barra--laranja--titulo{
	position: relative;
	width: 40px;
	height: 0px;
	top: 5px;

	border: 5px solid #F9732C;
	transform: rotate(90deg);
	}
</style>
