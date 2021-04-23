<template>
<div class="Patrocinadores">  
<Header />

<div class="containerPatrocinio">
    <div class="titulo-com-barraPatrocinadores">
        <div class="container--tituloPatrocinio">
            <div class="barra--laranja--titulo">
                <h1 class="titulo">PATROCINADORES</h1>
            </div>
        </div>
    </div>
	<div class="container">
	<div class="imagensPatrocinadores">
		<div class="row justify-content-md-center">
		<div class="col-10">
		<div class="row row-cols-6 row-cols-md-6 justify-content-md-center">
  <div class="col">
    <div class="card">
      <img src="@/assets/Jubileus-squad-fumdo.png" class="card-img-top" alt="@/assets/Jubileus-squad-fumdo.png">
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="@/assets/Jubileus-squad-fumdo.png" class="card-img-top" alt="@/assets/Jubileus-squad-fumdo.png">
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="@/assets/Jubileus-squad-fumdo.png" class="card-img-top" alt="@/assets/Jubileus-squad-fumdo.png">
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="@/assets/Jubileus-squad-fumdo.png" class="card-img-top" alt="@/assets/Jubileus-squad-fumdo.png">
      </div>
    </div>
       <div class="col">
    <div class="card">
      <img src="@/assets/Jubileus-squad-fumdo.png" class="card-img-top" alt="@/assets/Jubileus-squad-fumdo.png">
      </div>
    </div>
       <div class="col">
    <div class="card">
      <img src="@/assets/Jubileus-squad-fumdo.png" class="card-img-top" alt="@/assets/Jubileus-squad-fumdo.png">
      </div>
    </div>
  </div>
	</div>
	</div>
		</div>
		</div>
   
	<div class="rodape">
    <div class= "logorodape">
        <img 
        src="@/assets/jubileus_squad2.png">
    </div>
	<div class="insta">
		<img src="@/assets/iconmonstr-instagram-13.svg" 
    alt="" style="width: 35px;height: 45px;margin-left: 4.5px;">
  </div>
	<div class="face">
		<img src="@/assets/facebook.svg" 
		alt="" style="width: 35px;height: 45px;margin-left: 3px;">
	</div>
	<div class="whats">
		<img src="@/assets/iconmonstr-whatsapp-3.svg" 
		alt="" style="width: 35px;height: 45px;margin-left: 4.5px;">
	</div>
	<div class="youtube">
		<img src="@/assets/iconmonstr-youtube-3.svg"
		alt="" style="width: 35px;height: 45px;margin-left: 3px;">
	</div>
  <div><p class="arearestrita">Area restrita</p></div>
	</div>
	</div>
</div>  
 
</template>


<script>
import Header from '@/components/Header.vue'

export default {
	name: 'Patrocinadores',
	components:{
		Header
	}
}
</script>

<style>
h1.titulo {
  width: 380px;
  margin-left: 18px;
  font-family: Rambla;
  font-style: normal;
  font-weight: normal;
  font-size: 50px;
  line-height: 61px;
  color: black;
}

.titulo-com-barraPatrocinadores{
 align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  height: 220px;
}

.container--tituloPatrocinio {
	width: 200px;
	margin-top: 100px;
  
}

.barra--laranja--titulo {
	margin-top: -8vh;
	width: 10px;
	height: 58px;
	border-left: 5px solid #f9732c;
}
.imagensPatrocinadores{
	margin-top: 100px;
	margin-bottom: 300px;
	margin-top:200px;
}
</style>