<template>
  <div class="all--sobre">
		<TituloComBarra :titulo="titulo"/>
    <div class="conteudo columns is-multiline">
      <div class="column is-4 is-offset-0">
        <img
          class="img-conteudo"
          src="@/assets/Jubileus-squad-fumdo.png"
          alt="Logo do time"
        />
      </div>
      <div class="column is-8">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
          rhoncus mattis rhoncus urna. Ornare aenean euismod elementum nisi quis
          eleifend. Quis hendrerit dolor magna eget est. Odio pellentesque diam
          volutpat commodo sed egestas egestas fringilla phasellus. Eu consequat
          ac felis donec. Iaculis eu non diam phasellus.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div class="column is-full">
        <p>
          Missão: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in.
        </p>
      </div>
      <div class="column is-full is-offset-5">
        <div class="barra--horizontal--paragrafos"></div>
      </div>

      <div class="column is-full">
        <p>
          Visão: Ut enimad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Nisl rhoncus mattis rhoncus urna. Ornare aenean euismod
          elementum nisi quis.
        </p>
      </div>
      <div class="column is-full is-offset-5">
        <div class="barra--horizontal--paragrafos"></div>
      </div>

      <div class="column is-full">
        <p>
          Valores: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in.
        </p>
      </div>

    </div>
  </div>
</template>

<script>
	import TituloComBarra from './TituloComBarra.vue';
	export default {
		components: { TituloComBarra },
		data(){
			return{
				titulo: 'Sobre Nós',
			}
		}

	}
</script>

<style>
.all--sobre {
  /* position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center; */
	width: 100vw;
  height: 100vh;
  padding: 0px 150px 0px 150px;
}
.img-conteudo {
  width: 500px;
  height: 500px;
}

.barra--horizontal--paragrafos {
  margin-top: 80px;
  width: 250px;
  height: 0px;
  left: 361px;
  top: 596px;

  border-top: 3px solid #f9732c;
}

</style>
