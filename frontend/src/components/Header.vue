<template>
  <div id="header">
		<router-link to="/">
			<img class="logoHeader" :src="image" />
		</router-link>
    <nav role="navigation">
      <ul>
        <li ><router-link to="/">HOME</router-link></li>
        <li ><router-link to="/sobre">SOBRE NÓS</router-link></li>
        <li ><router-link to="/membros">MEMBROS</router-link></li>
        <li ><router-link to="/parceiros">PARCEIROS</router-link></li>
        <li ><router-link to="/patrocinadores">PATROCINADORES</router-link></li>
				<li ><router-link to="/produtos">PRODUTOS</router-link></li>
				<li ><router-link to="/produtos/contato">CONTATO</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
import image from "../assets/logo.png";

export default {
  name: "Header",
  data() {
    return {
      image: image,
    };
  },
};
</script>

<style>
#header {
	position: fixed;
	z-index: 999;
	top: 0;
	left: 0;
	right: 0;
	height: 40px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 30px;
	background: linear-gradient(180deg, #181525 70%, rgba(24, 21, 37, 0) 100%);
}
.logoHeader {
	width: 2rem;
  margin-left: 30px;
	height: 2rem;
}
.logoHeader:hover {
  cursor: pointer;
}
nav {
  color: white;
  align-items: center;
}
ul {
  list-style: none;
  margin: 0;
  padding-left: 0;
}
li {
  float: left;
  padding: 1rem;
  text-decoration: none;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 13.5px;
}


ul li ul {
  visibility: hidden;
  opacity: 0;
  min-width: 5rem;
  position: absolute;
  transition: all 0.5s ease;
  margin-top: 1rem;
  left: 0;
  display: none;
}
ul li ul li {
  clear: both;
  width: 100%;
}
.dropdown {
  background: #141414c7;
}
#navigate {
  opacity: 0;
  height: 0;
}

#options {
  font-size: 14px;
  color: #e5e5e5;
  cursor: pointer;
  width: 60%;
}
#eachOptions {
  list-style: none;
  display: flex;
  justify-content: space-around;
  width: 50%;
}
@media only screen and (max-width: 906px) {
  nav {
    width: 80vw;
  }
}
@media only screen and (max-width: 900px) {
  ul li:hover > ul,
  ul li:focus-within > ul,
  ul li ul:hover {
    visibility: visible;
    opacity: 1;
    display: block;
    font-size: 15px;
    position: absolute;
    z-index: 9999;
  }
  li :hover {
    color: #ccc;
  }
  #navigate {
    color: #fff;
    opacity: 10;
    height: auto;
    margin-left: -10px;
  }
  .items {
    opacity: 0;
    height: 0;
    font-size: 0;
  }
  li a {
    cursor: pointer;
  }
  nav {
    width: 30%;
    height: 30px;
    padding-top: 3px;
  }
  #textForm {
    width: 30%;
  }
  #icons {
    width: 20%;
  }
}
@media only screen and (max-width: 626px) {
  #selections {
    padding-top: 30px;
  }
}
@media only screen and (max-width: 541px) {
  #selections {
    padding-top: 50px;
  }
}
@media only screen and (max-width: 500px) {
  nav {
    width: 30%;
    padding-top: 40px;
  }
  #selections {
    padding-top: 50px;
  }
}

</style>
