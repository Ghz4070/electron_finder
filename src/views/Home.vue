<template>
  <div class="home">
    <b-container>
    <MenuBar />
    </b-container>
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
