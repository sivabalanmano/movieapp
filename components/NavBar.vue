import type { NuxtLink } from '#build/components';
<template>
    <div class="flex justify-between h-[60px] w-full bg-gray-900 shadow-xl p-2 shadow-white">
        <div class="flex border-white border rounded-xl text-white  justify-center items-center font-bold p-2
        transition-[3s]  cursor-pointer">DD Movies</div>
        <div class="text-white justify-center items-center flex">
            <input v-model="name" 
            class="rounded-xl items-center text-black text-justify max-w-[150px] p-1 " type="serch" placeholder="Search...." >
            <p v-if="name == 'leo'" :class="isColor ? ' text-green-500' : ' text-red-500' " >We Have Movie</p>
            <p v-else-if="name == 'veeran'" :class="isColor ? ' text-green-500' : ' text-red-500' "  >We Have Movie</p>
            <p v-else-if="name == 'parking'" :class="isColor ? ' text-green-500' : ' text-red-500' "  >We Have Movie</p>
            <p v-else-if="name == ''" :class="isColor ? ' text-green-500' : ' text-red-500' "  ></p>
            <p v-else :class="isColor1 ? ' text-green-500' : ' text-red-500' "  >We Dont have Movie</p>

            <div v-for="(pages,index) in pagesList" :key="index" >
           <NuxtLink :to="pages.route"><i class="fa-solid fa-magnifying-glass p-1"></i></NuxtLink>
            <NuxtLink :to="pages.route2"><i class="fa-solid fa-home p-1"></i></NuxtLink>
        </div>
        
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            isColor:true,
            isColor1:false,
            name:"",
            pagesList:[
                {
                    route:"/allmovies",
                    route2:"/topmovies"
                },
            ]
        }
    }
}
</script>