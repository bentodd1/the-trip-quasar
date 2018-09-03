  <template>
  <q-layout view="lHh Lpr lFf">
  <div>Scenes Vistied</div>
  
  <!--<div>{{Object.keys(this.scenesVisited).size}}</div> -->
  <ul>
  <li v-for="scene in Object.keys(this.scenesVisited)" style = "justify-content: center" >
  <div> Scene Number {{scene}}
      <div> Have vistited {{scenesVisited[scene]}}</div>
      <div>Scene Name {{scenes.all[scene].name}}</div>
  </div>
 
  </li>
  </ul> 
  </q-layout>
</template>

<script>
import scenes from '../data/scenes';

export default {
data(){
    return{
        scenesVisited: {},
        scenes, 
    }
},
methods: {

    getSceneData(scene) {
        console.log(this.scenesVisited[1]);
        return this.scenesVisited[1];
    }, 
},
//props:['scenesVisited'],
mounted: function() {
  this.scenesVisited = this.$q.localStorage.get.item('scenesVisited');
  console.log(this.scenes);
  console.log(this.$q.localStorage.get.item('scenesVisited'));
  console.log(this.scenesVisited);
  console.log( this.scenesVisited[1]);
}
};
</script>