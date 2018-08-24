<template>
  <q-layout>
    <q-item-main class="middle-row">
        <img :src="scenes.all[selectedSceneIndex].src" class="responsive" title="sceneImage"/> 
      </q-item-main>
      <q-item-separator />
  
      <q-item multiline >
        <span title="selectedText"> {{scenes.all[selectedSceneIndex].text}} </span>
      </q-item > 
    
      <q-list highlight  >
       <q-item v-for="option in scenes.all[selectedSceneIndex].options" style = "justify-content: center"  >
         <q-btn square color="secondary" style="height:30px;width:200px;align-items: center;justify-content: center;" @click="getSceneNumber(option.optionIndex)" >{{option.optionText}}</q-btn>
         </q-item>
         <q-item  v-if="scenes.all[selectedSceneIndex].id >0" style="justify-content: center" >
         <q-btn square color="secondary" style="height:30px;width:200px;align-items: center;justify-content: center;"  @click="goToNewScene(0)" >Go Home</q-btn> 
         </q-item>
      </q-list>
  </q-layout>
</template>


<style>

.center-cropped {
  width: 100px;
  height: 100px;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>

<script>
import scenes from '../data/scenes';

export default {
  name: 'PageIndex',
  data(){
    return {
    scenes,   
    selectedSceneIndex: 0,
    scenesVistited: {},
  };
},

methods:{
    setSceneHash() {
    // var scene;
    console.log('Setting scene hash ');
    console.log(this.scenes);
      for(var scene in this.scenes.all)
      { 
        console.log(scene);
        this.scenesVistited[scene] = false;
      }
    },
    goToNewScene(newSceneIndex)
  {
    this.selectedSceneIndex = newSceneIndex;
    this.setScenesExplored(newSceneIndex);

  },
  setScenesExplored (sceneNumber)
  {
    this.scenesVistited[sceneNumber] =true;
    this.$q.localStorage.set('scenesVisited', this.scenesVistited);
  },
  exitFromApp()
  {
    navigator.app.exitApp();
  },
  getScenesExplored()
  {
     var scenesVistited = this.$q.localStorage.get.item('scenesVisited');
     return scenesVistited;
  },
  saveScenesExplored()
  {
    let item = this.$q.localStorage.get.item('scenesVisited');
  },
  getSceneNumber(sceneArray)
  {
    console.log(this.getScenesExplored());
    var rand = sceneArray[Math.floor(Math.random() * sceneArray.length)];
    this.goToNewScene(rand);
  },

},
mounted: function() {
  this.setSceneHash();
},
  props: {
    msg: String,
  },
};
</script>
