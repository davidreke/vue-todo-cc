<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
       <div class="container">
            <a href="#" class="navbar-brand">Todo List</a>
            <div class="collapse navbar-collapse text-right">
                <ul class="navbar-nav ml-auto navbar-right">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">View Todos</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/AddTodo" class="nav-link">Add Todo</router-link>
                    </li>
                </ul>
            </div>
       </div>
    </nav>
</template>


<script>
import AddTodo from '../views/AddTodo'
// import ViewTodos from'../views/ViewTodos'
export default {
    name: AddTodo
}
</script>


<style scoped>

</style>