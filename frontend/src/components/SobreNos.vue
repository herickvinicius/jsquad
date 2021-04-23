<template>
  <div id="sobre" class="all--sobre">
    <Header/>
    <div class="titulo-com-barra">
        <div class="container--titulo">
        <div class="barra--laranja--titulo">
          <h1 class="titulo">SOBRE NÓS</h1>
        </div>
      </div>
    </div>
    <div class="conteudo columns is-multiline ">
      <div class="column is-4 is-offset-0">
        <img
          class="img-conteudo img-responsive"
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
          <strong>Missão</strong>: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
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
          <strong>Visão</strong>: Ut enimad minim veniam, quis nostrud exercitation ullamco
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
          <strong>Valores</strong>: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in.
        </p>
      </div>

    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
	name: 'sobre',
	components:{
		Header
	}
}
</script>

<style>
.all--sobre {
  /* position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center; */
  height: 100vh;
  padding: 0px 150px 0px 150px;
}
img.img-conteudo {
  width: 368pxpx;
  height: 368pxpx;
}

.barra--horizontal--paragrafos {
  margin-top: 80px;
  width: 250px;
  height: 0px;
  left: 361px;
  top: 596px;

  border-top: 3px solid #f9732c;
}

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
  margin-bottom: 100px;
}
.container--titulo {
  width: 200px;
}

.barra--laranja--titulo {
  margin-top: 105px;
  width: 50px;
  height: 58px;
  border-left: 5px solid #f9732c;
}
/* Css do titulo com a barra */
</style>
