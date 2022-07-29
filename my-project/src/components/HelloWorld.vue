<script>
import { reactive, ref, onMounted, onBeforeUnmount } from 'vue'

export default {
  setup() {
    let ss = ref(0)   
    const zz = ref(null)
    const el = ref()
    const kkk = ref()
    const arr = ref(['aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa','aaa'])
    let scrollTopButton = ref()

    let count = function(){
      this.ss++
      
      if(this.ss == 5){
        alert('5됏음')
        this.kkk.classList.remove('text-5xl');
      } else if(this.ss >= 10){
        this.kkk.classList.add('text-5xl');
      }

      if(this.ss%2 == 1){
        this.zz.style.color = 'red';        
      } else {
        this.zz.style.color = '#fff';
      }      
    }

    let scrollTopbt = function(){
      window.scrollTo({ top: 0, behavior: "smooth" });
    } 
 

    // const kk = function(){
    //   this.kkk.value.classList.add('text-6xl');
    // }

    onMounted(()=>{
      el.value.style.color = 'blue';
      kkk.value.classList.add('text-5xl');
      console.log('aaaa')

      window.addEventListener("scroll",function(){
        if (window.scrollY > 0) {
            //console.log(1)
            scrollTopButton.value.classList.remove("invisible");
        } else {
            scrollTopButton.value.classList.add("invisible");
        }
      });
      
    })

    onBeforeUnmount(()=>{
      window.removeEventListener("scroll",function(){
        if (window.scrollY > 0) {
            console.log(1)
            //scrollTopButton.value.classList.remove("invisible");
        } else {
            //scrollTopButton.value.classList.add("invisible");
        }
      });
    })
    return {
      count,
      ss,
      zz,
      el,
      kkk,
      arr,
      scrollTopButton,
      scrollTopbt
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
    <p class=" font-bold " ref="kkk"> 
      <!-- text-2xl -->
      adsfasdf
    </p>
    <ul>
      <li v-for="(item,index) in arr" :key="index">
        {{item}}
      </li>
    </ul>
     <div
        ref="scrollTopButton"
        @click="scrollTopbt"
        class="invisible fixed bottom-0 right-0 flex justify-end pb-3 pr-5 transition duration-150 ease-out"
    >
        <div
            class="text-gray-400 hover:text-blue-400 transition"
        >
            <button type="button">
                Scroll to top
            </button>
        </div>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
</style>
