<template>
    <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
       <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          The Hallucination
          <div slot="subtitle">{{ $q.version }}</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header>Menu</q-list-header>
        <q-item>
          <router-link :to="{ name: 'scenes'}">Progress</router-link>
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
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
    </q-page-container>
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
import { openURL } from 'quasar';
import sceneList from './sceneList';

export default {

  name: 'PageIndex',
  data(){
    return {
     leftDrawerOpen: this.$q.platform.is.desktop,
    scenes,   
    selectedSceneIndex: 0,
    scenesVisited: {},
    
  };
},
 components: {
    sceneList,
 }, 
methods:{
  openURL,
    setSceneHash() {
    // var scene;
    console.log('Setting scene hash');
    //console.log(this.scenesVisited);
    //console.log('Setting scene hash ');
    //console.log(this.scenesVisited);
    if(Object.keys(this.scenesVisited).length === 0)
      for(var scene in this.scenes.all)
      { 
        console.log(scene);
        this.scenesVisited[scene] = false;
      }
    else{
        this.scenesVisited = this.getScenesExplored();
    }
    },
    goToNewScene(newSceneIndex)
  {
    this.selectedSceneIndex = newSceneIndex;
    this.setScenesExplored(newSceneIndex);

  },
  setScenesExplored (sceneNumber)
  {
    this.scenesVisited[sceneNumber] =true;
    console.log(this.scenesVisited);
    this.$q.localStorage.set('scenesVisited', this.scenesVisited);
  },
  exitFromApp()
  {
    navigator.app.exitApp();
  },
  getScenesExplored()
  {
     var scenesVisited = this.$q.localStorage.get.item('scenesVisited');
     return scenesVisited;
  },
  saveScenesExplored()
  {
    let item = this.$q.localStorage.get.item('scenesVisited');
  },
  getSceneNumber(sceneArray)
  {
   //console.log(this.getScenesExplored());
    var rand = sceneArray[Math.floor(Math.random() * sceneArray.length)];
    this.goToNewScene(rand);
  },

},
/*mounted: function() {
  console.log('Mounted');
  console.log(this.getScenesExplored());
  this.scenesVisited = this.getScenesExplored();
},*/
beforeMount: function() {
  console.log('Before Mount');
  this.setSceneHash();
},
};
</script>
