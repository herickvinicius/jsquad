<template>
  <div class="all columns ">
    <div class="column is-half texto-chamativo">
      <p>
        VOCÊ <br />
        <span class="texto-amarelo">JÁ DEVE</span> <br />
        TER OUVIDO<br />
        <span class="texto-amarelo">FALAR DE</span> <br />
        NÓS
      </p>
    </div>
    <div class="column imagem-logo">
      <img
        src="../assets/jubileus_squad.png"
        alt="Foto do mascote da jubileus com o nome da marca"
      />
    </div>

    
    
  </div>



</template>

<script>
export default {};
</script>

<style>
.all {
  height: 110vh;
  width: 100vw;
  background-color: #181525;
}
.texto-chamativo {
  display: flex;
	align-items: center;
	justify-content: center;

	align-self: center;

  height: 31.875rem;
  color: var(--color-laranja);
  margin-top: 50px;
}

.texto-chamativo p {
  font-family: Rambla;
  font-style: normal;
  font-weight: normal;
  font-size: 65px;
  line-height: 85px;
}
.texto-amarelo {
  color: #d69b15;
}

.imagem-logo {
	text-align: center;
	align-self: center;
  margin-top: 40px;
}

.imagem-logo img {
  height: 31.875rem;
}




</style>
