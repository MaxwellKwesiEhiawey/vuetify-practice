<template>
  <v-app id="inspire">
      <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Vuetify Practice
          </v-list-item-title>
          <v-list-item-subtitle>
          Revising
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link :to="item.title"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
     <v-app-bar app
    
      color="primary"
      dark
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
    
    > <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>


      <v-toolbar-title>Vuetify Practice</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-menu
        bottom
        left
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            color="yellow"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <template v-slot:extension>
        <v-tabs class="pt=10" align-with-title>
          <router-link to ="/Todo"><v-tab>Todo</v-tab></router-link>
           <router-link to ="/Photos"><v-tab>Photos</v-tab></router-link>
           <router-link to ="/About"><v-tab>About</v-tab></router-link>
          <!-- <v-tab>Tab 2</v-tab>
          <v-tab>Tab 3</v-tab> -->
        </v-tabs>
      </template>
    </v-app-bar>
    <v-main>
  <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ 
      drawer: null,
    items: [
          { title: 'Todo', icon: 'mdi-format-list-checks', to:'/Todo'},
          { title: 'Photos', icon: 'mdi-image', to: '/' },
          { title: 'About', icon: 'mdi-help-box', to: '/about' },
        ],
    }),
  }
</script>