<template>
  <div>
    <input type="text" v-model="insert" @keyup.enter="actionKey" placeholder="seacrh something">
    <div>
      {{insert}}
    </div>
  </div>
</template>

<script>
  import { ref,onBeforeMount,onMounted, computed, onBeforeUnmount } from 'vue'
  import { useStore, mapGetters } from 'vuex'
export default {

  components:{
      
  },
  setup(){
    let insert = ref()
    const actionKey = () => {
      alert('2')
      insert.value = ''
    }
    return{
      insert,
      actionKey
    }
  },
  // methods:{
  //   actionKey(){
  //     alert(1)
  //   }
  // }
}
</script>

<style scope>

</style>