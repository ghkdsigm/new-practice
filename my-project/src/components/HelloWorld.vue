<script>
import { reactive, ref, onMounted } from 'vue'

export default {
  setup() {
    let ss = ref(0)   
    const zz = ref(null)
    const el = ref()

    let count = function(){
      this.ss++
      
      if(this.ss == 20){
        alert('20됏음')
      }
      if(this.ss%2 == 1){
        this.zz.style.color = 'red';
      } else {
        this.zz.style.color = '#fff';
      }      
    }

    onMounted(()=>{
      el.value.style.color = 'blue';
    })
    
    return {
      count,
      ss,
      zz,
      el
    }
  },
}
</script>

<template>
  <div class="card">
    <button type="button" @click="count">count is</button>
    <p>
      곱하기 {{ ss }}
    </p>
    <p ref="zz">
      shoot
    </p>
    <p ref="el">
      shoots
    </p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
