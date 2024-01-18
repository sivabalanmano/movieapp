<template>
    <div><NavBar /></div>
       <div  class="flex justify-center items-center p-5 text-[80px] font-bold text-shadow-xl">
        Top 10 Movies of 2023
       </div>
       <div class=" flex   text-center gap-2 sm:grid grid-cols-1 justify-center items-center">
       <div class="items-center justify-center md:grid grid-cols-4 gap-3">
        <div class="h-[200px] w-[200px] text-[25px] bg-yellow-500 font-bold rounded-xl border-black border pt-10 shadow-xl shadow-black" v-for="(movie,index) in movieList" :key="index">
            {{ movie.moviename }} <br> 
            <div class="bg-green-500  items-center justify-center">
                {{ movie.rating }}  </div>
                <div class="flex justify-center items-center p-5 ">
                    <NuxtLink to="/allmovies"><div @click="correct()" class="bg-red-500 p-2 rounded-2xl text-[10px] cursor-pointer border-black border  shadow-black shadow-xl hover:bg-gray-500"
                    >ReadMore</div></NuxtLink>
                </div>
        </div>
        </div>
    </div>
</template>
<script>
  export default{
    data(){
        return{
            movieList:[
                {
                    moviename:"leo",
                    rating:"Rating :7/10",
                    
                },
                {
                    moviename:"Parking",
                    rating:"Rating :6/10",
                },
                {
                    moviename:"Joe",
                    rating:"Rating :7/10",
                },
                {
                    moviename:"Ayothi",
                    rating:"Rating :8/10",
                },
                {
                    moviename:"Maaveeran",
                    rating:"Rating :5/10",
                },
                {
                    moviename:"12th Fail",
                    rating:"Rating :9/10",
                },
                {
                    moviename:"Ayali",
                    rating:"Rating :7/10",
                },
                {
                    moviename:"Porthozil",
                    rating:"Rating :7/10",
                },
                {
                    moviename:"Dada",
                    rating:"Rating :5/10",
                },
                {
                    moviename:"Chiththa",
                    rating:"Rating :6/10",
                },
            ],
    }
        },
    }

</script>