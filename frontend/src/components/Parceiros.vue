<template>     
 <div class="container">
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
  <!--Controls-->
  <div class="controls-top">
    <a class="btn-floating" href="#multi-item-example" data-slide="prev"><i class="fas fa-chevron-left"></i></a>
    <a class="btn-floating" href="#multi-item-example" data-slide="next"><i
        class="fas fa-chevron-right"></i></a>
  </div>
  <!--/.Controls-->


  <div class="carousel-inner" role="listbox">
    <div class="carousel-item active">
      <div class="col-md-3" style="float:left">
       <div class="card mb-2">
          <img class="card-img-top"
            src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg" alt="Card image cap">
          <div class="card-body">
            <h4 class="card-title">Card title</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <a class="btn btn-primary">Button</a>
          </div>
        </div>
      </div>
      <div class="col-md-3" style="float:left">
        <div class="card mb-2">
          <img class="card-img-top"
            src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg" alt="Card image cap">
          <div class="card-body">
            <p class="card-text">Luiz Fernando, 20</p>
          </div>
        </div>
      </div>
    </div>
    <div class="carousel-item">

      <div class="col-md-3" style="float:left">
        <div class="card mb-2">
          <img class="card-img-top"
            src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg" alt="Card image cap">
          <div class="card-body">
            <h4 class="card-title">Card title</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <a class="btn btn-primary">Button</a>
          </div>
        </div>
      </div>

      <div class="col-md-3" style="float:left">
        <div class="card mb-2">
          <img class="card-img-top"
            src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(47).jpg" alt="Card image cap">
          <div class="card-body">
            <h4 class="card-title">Card title</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <a class="btn btn-primary">Button</a>
          </div>
        </div>
      </div>

      <div class="col-md-3" style="float:left">
        <div class="card mb-2">
          <img class="card-img-top"
            src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(48).jpg" alt="Card image cap">
          <div class="card-body">
            <h4 class="card-title">Card title</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <a class="btn btn-primary">Button</a>
          </div>
        </div>
      </div>
      
      <div class="col-md-3" style="float:left">
        <div class="card mb-2">
          <img class="card-img-top"
            src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(47).jpg" alt="Card image cap">
          <div class="card-body">
            <h4 class="card-title">Card title</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <a class="btn btn-primary">Button</a>
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
</template>

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
    top: 690px;
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
</style>