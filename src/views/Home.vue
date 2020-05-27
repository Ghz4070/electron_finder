<template>
  <div class="home">
    <MenuBar />
  </div>
</template>

<script>
// @ is an alias to /src
import MenuBar from '@/components/MenuBar.vue';

export default {
  name: 'Home',
  components: {
    MenuBar
  },
}
</script>
