<template>
  <div id="header">
    <img class="logoHeader" :src="image" v-on:click="NavigateHome" />
    <nav role="navigation">
      <ul>
        <li class="items" v-on:click="NavigateHome">HOME</li>
        <li class="items" v-on:click="NavidatesSobreNos">SOBRE NÓS</li>
        <li class="items" v-on:click="NavidateMembros">MEMBROS</li>
        <li class="items" v-on:click="NavidateParceiros">PARCEIROS</li>
        <li class="items" v-on:click="NavidatePatrocinadores">PATROCINADORES</li>
				<li class="items" v-on:click="NavidateProdutos">PRODUTOS</li>
				<li class="items" v-on:click="NavidateContato">CONTATO</li>
        <li></li>
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
  methods: {
    NavigateHome() {
      this.$router.push({ name: "Home" });
    },
		NavidatesSobreNos() {
      this.$router.push({ name: "Sobre Nós" });
    },
		NavidateMembros() {
      this.$router.push({ name: "Membros" });
    },
		NavidateParceiros() {
      this.$router.push({ name: "Parceiros" });
    },
		NavidatePatrocinadores() {
      this.$router.push({ name: "Patrocinadores" });
    },
		NavidateProdutos() {
      this.$router.push({ name: "Produtos" });
    },
    NavidateContato() {
      this.$router.push({ name: "Contato" });
    },
  }
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
	background: transparent;
	background-color: #181525;
	transition: all ease 0.5s;
}
.logoHeader {
	width: 30px;
  margin-left: 30px;
	height: 2.5rem;
}
.logoHeader:hover {
  cursor: pointer;
}
nav {
  color: white;
  display: flex;
  align-items: center;
}
ul {
  list-style: none;
  margin: 0;
  padding-left: 0;
}
li {
  color: #fff;
  display: block;
  float: left;
  padding: 1rem;
  position: relative;
  text-decoration: none;
  transition-duration: 0.5s;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 13.5px;
}
li a {
  color: #fff;
  cursor: default;
}
li:hover {
  cursor: pointer;
}
.items:hover {
  color: #F9732C;
}
.items a.router-link-exact-active {
  color: #F9732C;
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
  .logoHeader {
    width: 80px;
  }
  nav {
    width: 30%;
    padding-top: 40px;
  }
  #selections {
    padding-top: 50px;
  }
}

</style>
