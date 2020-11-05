<template>
  <div class="view-todos container">
    <h1>View Todos</h1>
      <div v-if="todos.length==0"><h2>Congratulations, you have no todos!</h2></div>
      <div v-else>
        <table class="table">
      <thead>
        <th scope="col">Title</th>
        <th scope="col">Due Date</th>
        <th scope="col">Completed</th>
        <th scope="col">delete Todo</th>
      </thead>
      <tbody v-bind:key="todo.id" v-for="todo in todos">
       
          <SingleTodo v-bind:todo="todo" v-on:del-todo="$emit('del-todo', todo.id)"
          v-on:toggle-complete="$emit('toggle-complete', todo.id)"/>

      </tbody>
      
    </table>
      </div>    
  </div>
</template>

<script>
import SingleTodo from '../components/SingleTodo'

export default {
  name: 'ViewTodos',
  components: {
    SingleTodo
  },
  props: ["todos"]
}

</script>


<style >

</style>
