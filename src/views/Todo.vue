<template>
  <div class="Todo" >
      <v-text-field
      
      v-model="newTaskTitle"
      @click:append="addTask"
      @keyup.enter="addTask"
      class="pt=5"
            outlined
            label="Add Task"
            append-outer-icon="mdi-plus-circle"
            hide-details clearable
          ></v-text-field>
  <v-list v-if="tasks.length"  class="pt=0" flat >

    <div v-for= "task in tasks" :key="task.id">
<v-list-item @click='doneTask(task.id)' :class="{ 'purple lighten-5': task.done }">
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox
                :input-value="task.done"
                color="primary"
              ></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
           <v-list-item-title :class= "{'text-decoration-line-through' : task.done}">{{task.title}}!</v-list-item-title>
            </v-list-item-content>
         <v-list-item-action>
          <v-btn @click.stop= "deleteTask(task.id)" icon>
            <v-icon color="red lighten-4">mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action> 
        </template>
          
        </v-list-item>
        <v-divider></v-divider>
    </div>
    </v-list>
    <div id="no-task" class="text-h6  primary--text"
        v-else  ><v-icon size= "100" color="primary">mdi-check</v-icon>No tasks Available. Add Task!</div>
  </div>
</template>

<script>


export default {
  name: 'Todo',
 data() {
   return {
     newTaskTitle:'',
     tasks: [
       {
         id: 1,
         title: 'Wake up',
         done: false
       },
       {
         id: 2,
         title: 'Freshen Up',
         done: false
       },
       {
         id: 3,
         title: 'Take breakfast',
         done: false
       }
     ]
   }
 },
 methods: {
   addTask(){
     let newTask ={
       id:Date.now(),
       title: this.newTaskTitle,
       done: false
     } 
     this.tasks.push(newTask)
     this.newTaskTitle = '' //clears the field text added previously
   },
   doneTask(id){
   let task = this.tasks.filter(task => task.id === id)[0]
   task.done = !task.done
   },
   deleteTask(id){
     this.tasks = this.tasks.filter(task=> task.id !==id)
   }
 },

}
</script>


<style lang="scss" scoped>
#no-task{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  opacity: 0.3;
  }
  
</style>
   