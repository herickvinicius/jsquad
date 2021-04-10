<template>
	<div class="all">
			<div class="texto-chamativo">
				<p class="texto-laranja">VOCÊ</p>
				<p class="texto-amarelo">JÁ DEVE</p>
				<p class="texto-laranja">TER OUVIDO</p>
				<p class="texto-amarelo">FALAR DE</p>
				<p class="texto-laranja">NÓS</p>
			<div class="background-texto-chamativo"></div>
		</div>
		<div class="imagem-logo">
			<img src="../assets/jubileus_squad.png" alt="Foto do mascote da jubileus com o nome da marca">
		</div>
	</div>

</template>

<script>
export default {

}
</script>

<style>

	.all{
		height: 100vh;
		width: 100vw;
		display: grid;
		background-color: #181525;

	}
	.texto-chamativo{
		position: absolute;
		width: 26.875rem;
		height: 19.313rem;
		left: calc(50% - 430px/2 - 331px);
		top: 81px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;

	}
	.texto-chamativo p {
		text-align: left;
		font-family: Rambla;
		font-style: normal;
		font-weight: normal;
		font-size: 75px;
		line-height: 92px;
		color:var(--color-laranja);
	}
	.texto-amarelo{
		color: var(--color-caramelo);
	}


	.imagem-logo img {
		position: absolute;
		width: 31.875rem;
		height: 31.875rem;
		margin-top: 3rem;
	}
</style>
