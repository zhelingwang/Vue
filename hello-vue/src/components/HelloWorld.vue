<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
        <router-link to="/hello">Go To helloComponent</router-link>
    </p>
    <div class="text">
      <h2>state content</h2>
      <p>input your new name:
        <input type="text" v-model="cname" />
      </p>
      <p>current name: {{$store.state.moduleA.name}}</p>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex"

export default {
  name: 'HelloWorld',
  data(){
    return {
      msg:"hello world"
    }
  },
  methods: {
    ...mapActions('moduleA',['changeName']),
    btnClick:function(name){
        this.changeName({name:"Guan"});
    }
  },
  computed: {
    cname:{
      get(){return this.$store.state.moduleA.name},
      set(value){this.changeName({name:value})}
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  text-align: center
}
button{
  display: inline-block;
  padding: 10px;
  margin: 15px;
}
</style>
