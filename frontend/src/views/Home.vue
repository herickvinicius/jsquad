<template>
  <div class="home">
		<Welcome />
    <SobreNos />
  </div>
</template>

<script>
// @ is an alias to /src
import SobreNos from '@/components/SobreNos.vue'
import Welcome from '@/components/Welcome.vue'

export default {
  name: 'Home',
  components: {
    SobreNos,
		Welcome
  }
}
</script>
