<template>
    <tr class="singleTodo">
        <td v-bind:class="{'is-complete':todo.completed}">{{todo.title}}</td>
        <td v-bind:class="{'is-complete':todo.completed}">{{this.month}}/{{this.date}}/{{this.year}}</td>
        <td>
            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"  v-on:change="$emit('toggle-complete', todo.id)">
        </td>
        <td><button class="btn btn-danger"  @click="$emit('del-todo', todo.id)">delete todo</button></td>
            
    </tr>
</template>


<script>
export default {
    name: "SingleTodo",
    props:["todo"],
    data: function () {
        return {
            year: null,
            month: null,
            date: null
        }
    },
    beforeMount: function (){
        // console.log(this.todo.dueDate)
        this.year = this.todo.dueDate.getFullYear()
        this.month = this.todo.dueDate.getMonth()+1
        this.date = this.todo.dueDate.getDate()

        console.log(this.year, this.month, this.date)
    }
}
</script>


<style scoped>
    .is-complete {
    text-decoration: line-through;
  }
</style>