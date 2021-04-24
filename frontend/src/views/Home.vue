<template>
  <div class="home">
		<Header/>
		<Welcome />
		<SobreNos />
		<Membros />
		<Modalidades />
		<Parceiros />
		<Patrocinadores />
  </div>
</template>

<script>
// @ is an alias to /src

import Header from '@/components/Header.vue'
import Welcome from '@/components/Welcome.vue'
import SobreNos from '@/components/SobreNos.vue'
import Membros from '@/components/Membros.vue'
import Modalidades from '@/components/Modalidades.vue'
import Parceiros from '@/components/Parceiros.vue'
import Patrocinadores from '@/components/Patrocinadores.vue'


export default {
  name: 'Home',
  components: {
		Header,
		Welcome,
		SobreNos,
		Membros,
		Modalidades,
		Parceiros,
		Patrocinadores,

  }
}
</script>