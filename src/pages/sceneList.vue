  <template>
  <q-layout view="lHh Lpr lFf">
  <div>Hello</div>
  <p>Poop</p>
  <!--<div>{{Object.keys(this.scenesVisited).size}}</div> -->
  <ul>
  <li v-for="scene in Object.keys(this.scenesVisited)" style = "justify-content: center" >
  <div>{{scene}}</div>
  </li>
  </ul>
  </q-layout>
</template>

<script>
export default {
data(){
    return{
    //scenesVisited: {1: true},
    }
},
props:['scenesVisted'],
created: function() {
  this.scenesVisited = this.$q.localStorage.get.item('scenesVisited');
  console.log(this.$q.localStorage.get.item('scenesVisited'));
  console.log(this.scenesVisted);
}
};
</script>