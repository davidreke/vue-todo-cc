<template>
  <div class="AddTodo container p-5">
    <h2>Add a Todo</h2>
    <form @submit="addTodo" >
      <div class="form-group">
        <label for="title">Todo Title</label>
        <br>
        <input type="text" v-model="title" name="title"  placeholder="Todo Title">
        <br>
        <div class="p-field ">
          <label for="icon">Due Date</label>
          <br>
          <Calendar id="icon" v-model="date3" name="dueDate" :showIcon="true" />
        </div>
        <br>
        <button class="btn btn-success" type="submt">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import Calendar from 'primevue/calendar';

export default {
  name: 'AddTodo',
  data () {
    return {
      date3: null
    }
  },
  components: {
    Calendar
  },
  methods: {
    addTodo:function(e) {
      e.preventDefault()

      let newTodo = {
        title:this.title,
        completed: false,
        dueDate: new Date(this.date3)
      }

      console.log(newTodo)

      this.$emit('add-todo', newTodo)
    
      // this.$router.push({ name: '/',})
    }
  }
  
}
</script>

<style scoped>
  /* .AddTodo{
    padding: 10px;
    width: 35%;
    height: 50%;
    margin-top: 5%;
    margin-left: auto;
    margin-right: auto;
    border: 3px solid black;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  } */

</style>
