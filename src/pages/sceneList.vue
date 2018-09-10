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
          <div slot="subtitle" {{ $q.version }}</div>
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
          <router-link :to="{ name: 'index'}">Navigate to story </router-link>
        </q-item>
      </q-list>
    </q-layout-drawer>
  <!--<div>{{Object.keys(this.scenesVisited).size}}</div> -->
<q-page-container>
<q-list highlight  >
  <q-item  v-for="scene in Object.keys(this.scenesVisited)" style = "justify-content: left" >
  <div> Scene Number {{scene}}
      <div> Have vistited {{scenesVisited[scene]}}</div>
      <div>Scene Name {{scenes.all[scene].name}}</div>
  </div>
 
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

export default {
data(){
    return{
        leftDrawerOpen: this.$q.platform.is.desktop,
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