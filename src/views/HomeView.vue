<template>
  <div class="home">
    <index/>
  </div>
</template>

<script>
// @ is an alias to /src
import index from '@/components/index.vue'

export default {
  name: 'HomeView',
  components: {
    index
  }
}
</script>
