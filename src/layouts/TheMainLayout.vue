<template>
  <div class="r">
    
  </div>
  <select name="standarts">
    <option v-for="standart in pipes_gosts" :key="standart.name">
      <b>{{standart.name}}</b>  {{` "${standart.title}"`}}
    </option>
  </select>
  <select name="diameters">
    <option v-for="(diameter, index) in diameters" :key="index">
      <em>DN</em>
      {{diameter}}
    </option>
  </select>
  <input type="number" value="1,0" min="0" max="300" step="0.1" inputmode="numeric" size="7" />
  <pipe />
</template>

<script lang="ts">
import pipes_gosts from "../gosts/pipes_standarts";
import {diameters} from "../gosts/diameters";
import Pipe from "../gosts/Pipe.vue";
export default {
  data() {
    return { 
      count: 4,
      pipes_gosts,
      diameters,
    }
  },
  components: {
    Pipe,
  },
}
</script>

<style lang="scss">
.r{
  background-color: bisque;
}
 .i {
    font-style: italic;
}
em {
    color:red;
    font: bold 14px Arial, sans-serif; 
}
</style>