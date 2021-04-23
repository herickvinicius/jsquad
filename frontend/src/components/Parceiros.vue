<template>
    
 <div class="container">
   <Header /> 
     <div class="fundoParceiros">
        <div class="titulo-com-barraParceiros">
            <div class="container--titulo">
                <div class="barra--laranja--tituloParceiros">
                    <h1 class="tituloParceiros">PARCEIROS</h1>
                </div>
            </div>        
        </div>
    </div>

<div id="multi-item-example" class="carousel slide carousel-multi-item" data-ride="carousel">
	<div class="tudoissoaqui">
  <div class="carousel-inner" role="listbox">
    <div class="carousel-item active">
      <div class="col-md-3" style="float:left">
       <div class="card mb-2">
          <img class="card-img-top"
            src="@/assets/Jubileus-squad-fumdo.png" alt="Card image cap">
          <div class="card-body">
            <p class="card-text">Nome do parceiro, {idade}</p>
          </div>
        </div>
      </div>
      <div class="col-md-3" style="float:left">
        <div class="card mb-2">
          <img class="card-img-top"
            src="@/assets/Jubileus-squad-fumdo.png" alt="Card image cap">
          <div class="card-body">
            <p class="card-text">Nome do parceiro, {idade}</p>
          </div>
        </div>
      </div>
      <div class="col-md-3" style="float:left">
            <div class="card mb-2">
          <img class="card-img-top"
            src="@/assets/Jubileus-squad-fumdo.png" alt="Card image cap">
          <div class="card-body">
            <p class="card-text">Nome do parceiro, {idade}</p>
          </div>
        </div>
        </div>
         <div class="col-md-3" style="float:left">
            <div class="card mb-2">
          <img class="card-img-top"
            src="@/assets/Jubileus-squad-fumdo.png" alt="Card image cap">
          <div class="card-body">
            <p class="card-text">Nome do parceiro, {idade}</p>
          </div>
        </div>
        </div>   
    </div>
    <div class="carousel-item">
      <div class="col-md-3" style="float:left">
        <div class="card mb-2">
          <img class="card-img-top"
            src="@/assets/Jubileus-squad-fumdo.png" alt="Card image cap">
          <div class="card-body">
            <p class="card-text">Nome do parceiro, {idade}</p>
          </div>
        </div>
      </div>
      <div class="col-md-3" style="float:left">
        <div class="card mb-2">
          <img class="card-img-top"
            src="@/assets/Jubileus-squad-fumdo.png" alt="Card image cap">
          <div class="card-body">
            <p class="card-text">Nome do parceiro, {idade}</p>
          </div>
        </div>
      </div>
      <div class="col-md-3" style="float:left">
        <div class="card mb-2">
          <img class="card-img-top"
            src="@/assets/Jubileus-squad-fumdo.png" alt="Card image cap">
          <div class="card-body">
            <p class="card-text">Nome do parceiro, {idade}</p>
          </div>
        </div>
      </div>
      <div class="col-md-3" style="float:left">
        <div class="card mb-2">
          <img class="card-img-top"
            src="@/assets/Jubileus-squad-fumdo.png" alt="Card image cap">
          <div class="card-body">
            <p class="card-text">Nome do parceiro, {idade}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  <button class="carousel-control-prev" type="button" data-bs-target="#multi-item-example" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#multi-item-example" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
	name: 'Parceiros',
	components:{
		Header
	}
}


</script>

<style>
h1.tituloParceiros {
  width: 236px;
  margin-left: 18px;
  font-family: Rambla;
  font-style: normal;
  font-weight: normal;
  font-size: 50px;
  line-height: 61px;
  color: rgb(255, 255, 255);
}
.fundoParceiros{
    position: absolute;
    width: 1366px;
    height: 417px;
    left: calc(50% - 1366px/2);
    top:-250px;
    background: linear-gradient(180deg, rgba(87, 77, 187, 0.88), rgba(249, 115, 44, 0.26));
}
.titulo-com-barraParceiros {
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  height: 220px;
}
.container--titulo {
  width: 200px;
  
}
.barra--laranja--tituloParceiros {
  margin-top: -8vh;
  width: 10px;
  height: 58px;
  border-left: 5px solid #f9732c;
}
.tudoissoaqui{
	margin-top: 950px;
}
</style>