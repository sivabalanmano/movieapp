<template>
    <div><NavBar /></div>
       <div  class="flex justify-center items-center p-5 text-[80px] font-bold text-shadow-xl">
        Movies
       </div>
       <div class=" flex   text-center gap-2 sm:grid grid-cols-1 justify-center items-center">
       <div class="items-center justify-center md:grid grid-cols-4 gap-3 pl-2">
        <div class="h-[200px] w-[200px] text-[25px] bg-yellow-500 font-bold rounded-xl border-black border pt-10 shadow-xl shadow-black" v-for="(movie,index) in movieList" :key="index">
            {{ movie.moviename }} <br> 
            <div class="bg-green-500  items-center justify-center">
                {{ movie.rating }}  </div>
                <div @click="correct()" class="flex justify-center items-center p-5 ">
                    <NuxtLink :to="movie.route" ><div  class="bg-red-500 p-2 rounded-2xl text-[10px] cursor-pointer border-black border  shadow-black shadow-xl hover:bg-green-500"
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
                    moviename:"Parking",
                    rating:"Rating :7/10",
                    route:"/leo"
                    
                },
                {
                    moviename:"leo",
                    rating:"Rating :6/10",
                    route:"/leo"
                },
                {
                    moviename:"Maaveeran",
                    rating:"Rating :7/10",
                    route:"/leo"
                },
                {
                    moviename:"Ayothi",
                    rating:"Rating :8/10",
                    route:"/leo"
                },
                {
                    moviename:"Joe",
                    rating:"Rating :5/10",
                    route:"/leo"
                },
                {
                    moviename:"12th Fail",
                    rating:"Rating :9/10",
                    route:"/leo"
                },
                {
                    moviename:"Dada",
                    rating:"Rating :7/10",
                    route:"/leo"
                },
                {
                    moviename:"Porthozil",
                    rating:"Rating :7/10",
                    route:"/leo"
                },
                {
                    moviename:"Ayali",
                    rating:"Rating :5/10",
                    route:"/leo"
                },
                {
                    moviename:"Chiththa",
                    rating:"Rating :6/10",
                    route:"/leo"
                },
                {
                    moviename:"Jailer",
                    rating:"Rating :4/10",
                    route:"/leo"
                },
                {
                    moviename:"Veeran",
                    rating:"Rating :6/10",
                    route:"/leo"
                },
                {
                    moviename:"DDReturns",
                    rating:"Rating :8/10",
                    route:"/leo"
                },
                {
                    moviename:"Pathu Thala",
                    rating:"Rating :7/10",
                    route:"/leo"
                },
                {
                    moviename:"Viduthalai",
                    rating:"Rating :8/10",
                    route:"/leo"
                },
                {
                    moviename:"Bakasuran",
                    rating:"Rating :6/10",
                    route:"/leo"
                },
                {
                    moviename:"Vaathi",
                    rating:"Rating :5/10",
                    route:"/leo"
                },
                {
                    moviename:"Bommai Nayagi",
                    rating:"Rating :7/10",
                    route:"/leo"
                },
                {
                    moviename:"Varisu",
                    rating:"Rating :6/10",
                    route:"/leo"
                },
                {
                    moviename:"Agilan",
                    rating:"Rating :3/10",
                    route:"/leo"
                },
            ]
        }
    },
    methods:{
                
                 correct(){
                    alert("You want to see The Movie Detail")
                    
        },

    }
}
</script>