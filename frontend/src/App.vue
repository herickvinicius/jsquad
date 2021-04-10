<template>
  <div id="app">
		<header class="nav">
			<div class="header--logo">
				<router-link to="/">
					<img src="./assets/logo.png" alt="Logo" />
				</router-link>
			</div>
			<div class="header--menu">
				<router-link to="/">Home</router-link>
				<router-link to="/products">Produtos</router-link>
			</div>
		</header>
    <router-view/>
  </div>
</template>

<script>

export default {

}
</script>

<style>
* {
    box-sizing: border-box;
}

body {
		font-family: Roboto, Helvetica, Arial, sans-serif;
    background-color: #fff;
    margin: 0;
    font-family: 'Roboto', sans-serif;
		text-align: center;
}


.nav {
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

.menu--flutuante a {
  font-weight: bold;
  color: #2c3e50;
}
.header--logo {
    height: 2.5rem;
}
.header--logo img {
    height: 100%;
}
.header--menu a {
  font-weight: bold;
  color: #fff;

}


.nav a.router-link-exact-active {
  color: #F9732C;
}

</style>
