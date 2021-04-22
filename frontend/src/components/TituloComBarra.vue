<template>
  <div class="titulo-com-barra">
    <div class="container--titulo">
      <div class="barra--laranja--titulo">
        <h1 class="titulo">{{this.titulo}}</h1>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		props: {
			titulo: {
				type: String,
				default: ''
			},
		},
		data(){
			return{
			}
		},

	}
</script>

<style>
	/* Css do titulo com a barra */
h1.titulo {
  width: 236px;
  margin-left: 18px;
  font-family: Rambla;
  font-style: normal;
  font-weight: normal;
  font-size: 50px;
  line-height: 61px;
  color: black;
}
.titulo-com-barra {
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 97px;
}
.container--titulo {
  width: 200px;
}

.barra--laranja--titulo {
  margin-top: 205px;
  width: 10px;
  height: 58px;
  border-left: 5px solid #f9732c;
}
/* Css do titulo com a barra */
</style>
