<template>
  <div id="app">
    <Navbar />
    <router-view v-bind:todos="todos" v-on:del-todo="deleteTodo" v-on:add-todo="addTodo" v-on:toggle-complete="toggleComplete" />
  </div>
  
</template>

<script>
import Navbar from './components/Navbar'
// import AddTodo from './views/AddTodo'
// import ViewTodos from './views/ViewTodos'

export default {
    name: 'App',
    components:{
      Navbar
      // AddTodo,
      // ViewTodos
    },
    data: function() {
      return {
        todos: [
          
        ]
      }
    },
    methods: {
      deleteTodo: function (id) {
          this.todos = this.todos.filter(todo => todo.id !== id)
          
      },
      addTodo: function (newTodo) {
        this.todos = [...this.todos, newTodo]
        this.todos = this.todos.sort((a,b) => a.dueDate - b.dueDate)
      },
      toggleComplete: function (id){
        var foundIndex = this.todos.findIndex(x => x.id ==id)
        this.todos[foundIndex].completed = !this.todos[foundIndex].completed;
        console.log(this.todos[id].completed)
      }

    },
  created: function() {
    this.todos = [{
          id: Math.random(),
          title: 'Learn HTML',
          completed: false,
          dueDate: new Date(2020, 0, 1)
          },
          {
          id: Math.random(),
          title: '??????',
          completed: false,
          dueDate: new Date(2020, 0, 2)},
          {
          id: Math.random(),
          title: 'Profit',
          completed: false,
          dueDate: new Date(2020, 0, 3)}
        ];

        this.todos = this.todos.sort((a,b) => a.dueDate - b.dueDate);
  }

}
</script>


<style>

</style>
