<template>
<div class="container">
	<div class="titulo-com-barraModalidades">
        <div class="container--tituloModalidades">
            <div class="barra--laranja--titulo">
                <h1 class="titulo">MODALIDADES</h1>
            </div>
        </div>
    </div>
    
<div class="fundoModalidades">
    <div class="leaguefoto">
        <div>
            <img 
                src="../assets/League-of-Legends-Logo.png"
                alt="Foto da logo de jogos em modalidades(LOL)"
            />
        </div>
    </div>
    <div class="csfoto">
        <div>
            <img 
                src="../assets/CSGO-LOGO.png"
                alt="Foto da logo de jogos em modalidades(CSGO)"
            />
        </div>
    </div>
    <div class="valorantfoto">
        <div>
            <img 
                src="../assets/valorant-logo.png"
                alt="Foto da logo de jogos em modalidades(VALORANT)"
            />
        </div>
    </div>
    <div class="fffoto">
        <div>
            <img 
                src="../assets/freefire.png"
                alt="Foto da logo de jogos em modalidades(FREE FIRE)"
            />
        </div>
    </div>
</div>
</div>
  
</template>

<style>
h1.titulo {
  width: 236px;
  margin-left: 18px;
  font-family: Rambla;
  font-style: normal;
  font-weight: normal;
  color: black;
}
.titulo-com-barraModalidades {
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 87px;
  padding: 0px, 0px, 100px, 0px;
}
.fundoModalidades{
    position: absolute;
    width: 1366px;
    height: 700px;
    left: calc(50% - 1366px/2);
    top: 200px;

    background: linear-gradient(180deg, #F9732C 0%, rgba(214, 155, 21, 0) 100%);
}
.container--tituloModalidades {
  width: 200px;

  
}
.leaguefoto{
    position: absolute;
    width: 288px;
    height: 110px;
    left: 137px;
    top: 245px;
}
.csfoto{
    /* counter-strike-global-offensive-2 1 */
    position: absolute;
    width: 348px;
    height: 145px;
    left: 930px;
    top: 193px;
}
.valorantfoto{
    position: absolute;
    width: 354px;
    height: 51px;
    left: 606px;
    top: 98px;
}
.fffoto{
    position: absolute;
    width: 239px;
    height: 67px;
    left: 98px;
    top: 98px;
}
.barra--laranja--titulo {
  margin-top: 100px;
  width: 10px;
  height: 58px;
  border-left: 5px solid #f9732c;
}
/* Css do titulo com a barra */
</style>