<template>
  <div>
    <!--사이드메뉴-->
    <div class="relative top-0 flex text-center justify-center py-10">
      <router-link :to="route.path" :class="`transition-all ease-in-out hover:text-primary hover:bg-blue-50 dark:hover:bg-gray-800 px-4 py-2 rounded-full  cursor-pointer dark:text-gray-300 ${router.currentRoute.value.name == route.name ? 'text-primary dark:text-primary'  : ''}`" v-for="route in routes" :key="route">
        <div v-if="route.meta.isMenu" class="flex">
            <i :class="route.icon"></i>
            <span class="text-base font-light lg:inline-block">{{route.title}}</span>
        </div>
      </router-link>          
    </div>
    <!--메인섹션-->
    <div class="flex w-full justify-center text-center">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { ref,onBeforeMount,onMounted, computed, onBeforeUnmount } from 'vue'
import { useStore, mapGetters } from 'vuex'
import router from '../router'

export default {

  setup(){
    const routes = ref([])
    onBeforeMount(()=>{
      //routes.value = router.options.routes
      routes.value = router.options.routes.filter((route) => route.meta.isMenu == true)
    });
    return {
      router,
      routes
    }
  }
}
</script>

<style>

</style>