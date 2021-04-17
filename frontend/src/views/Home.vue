<template>
  <div class="home">
		<Header/>
		<Welcome />
		<SobreNos />

  </div>
</template>

<script>
// @ is an alias to /src

import Header from '@/components/Header.vue'
import Welcome from '@/components/Welcome.vue'
import SobreNos from '@/components/SobreNos.vue'

export default {
  name: 'Home',
  components: {
		Header,
		Welcome,
		SobreNos
  }
}
</script>
