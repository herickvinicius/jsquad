<template>
  <div class="home">
		<Header />
		<Welcome />
		<SobreNos />
		<Membros />>

  </div>
</template>

<script>
// @ is an alias to /src

import Header from '@/components/Header.vue'
import Welcome from '@/components/Welcome.vue'
import SobreNos from '@/components/SobreNos.vue'
import Membros from '@/components/Membros.vue'

export default {
  name: 'Home',
  components: {
		Header,
		Welcome,
		SobreNos,
		Membros
  }
}
</script>
