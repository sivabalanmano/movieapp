<template>
    <div><NavBar /></div>
       <div  class="flex justify-center items-center p-5 text-[80px] font-bold text-shadow-xl">
        Movies
       </div>
       <div class=" flex   text-center gap-2 sm:grid grid-cols-1 justify-center items-center">
       <div class="items-center justify-center md:grid grid-cols-4 gap-3 pl-2">
        <div class="h-[200px] w-[200px] text-[25px] bg-yellow-500 font-bold rounded-xl border-black border pt-10 shadow-xl shadow-black" v-for="(movie,index) in movieList" :key="index">
            {{ movie.movieName }} <br> 
            <div class="bg-green-500  items-center justify-center">
                {{ movie.rating }}/10 </div>
                <div @click="correct()" class="flex justify-center items-center p-5 ">
                    <NuxtLink :to="'/'+ movie.movieId"  ><div  class="bg-red-500 p-2 rounded-2xl text-[10px] cursor-pointer border-black border  shadow-black shadow-xl hover:bg-green-500"
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
            movieList:[]
        }
    },
    methods:{
        allMovieapi(){
           this.$http.$get("/movie/allmovies").then((res)=>{
            this.movieList =res.movie;
           })
        },
                
                 correct(){
                    alert("You want to see The Movie Detail")
                    
        }
    },
    mounted(){
        this.allMovieapi()
    }
}
</script>