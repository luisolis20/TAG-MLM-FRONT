<template>
  <div class="about">
    <about/>
  </div>
</template>
<script>
// @ is an alias to /src
import about from '@/components/about.vue'

export default {
  name: 'AboutView',
  components: {
    about
  }
}
</script>
