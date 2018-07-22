<template>
  <q-layout>
    <q-item-main class="middle-row">
        
        <img :src="scenes.all[selectedSceneIndex].src" class="responsive" title="sceneImage"/> 
      </q-item-main>
      <q-item-separator />
      <q-layout-footer>
      <q-item multiline >
        <span title="selectedText"> {{scenes.all[selectedSceneIndex].text}} </span>
      </q-item > 
    
      <q-list highlight>
       <q-item v-for="option in scenes.all[selectedSceneIndex].options">
         <q-btn square color="secondary" style="height:30px;width:200px" @click="getSceneNumber(option.optionIndex)" >{{option.optionText}}</q-btn>
         </q-item>
         <q-item>
         <q-btn square color="secondary" style="height:30px;width:200px" @click="goToNewScene(0)" >Go Home</q-btn> 
         </q-item>
      </q-list>       

  </q-layout-footer>
  </q-layout>
</template>


<style>
</style>

<script>
import scenes from '../data/scenes';
import { SearchBox } from 'horizon-vue-common';

export default {
  name: 'PageIndex',
  data(){
    return {
    scenes,   
    selectedSceneIndex: 0,
  };
},
methods:{
    goToNewScene(newSceneIndex)
  {
    this.selectedSceneIndex = newSceneIndex;
  },
  getSceneNumber(sceneArray)
  {
    var rand = sceneArray[Math.floor(Math.random() * sceneArray.length)];
    this.goToNewScene(rand);
  },

},
components: {
      'search-box': SearchBox,
},

  props: {
    msg: String,
  },
};
</script>
