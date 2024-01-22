<template>
    <div><NavBar /></div>
    <div class="flex justify-center items-center p-5">
    <div >
   <div class=" border-black border shadow-xl rounded-xl shadow-black p-11 gap-4">
    <h1  class="flex justify-center items-center p-3 text-white bg-slate-500 rounded-xl">ADD A NEW Movie</h1>
    
   Movie Name <br> <input  v-model="movieName" class="border-black border rounded-md" type="text" placeholder="Enter Movie Name"><br>
    Director Name <br><input v-model="directorName" class="border-black border rounded-md" type="text"  placeholder="Director Name"><br>
    Gernre <br><input v-model="gernre" class="border-black border rounded-md" type="text" placeholder="Gernre"><br>
    Runtime <br><input v-model="runTime" class="border-black border rounded-md" type="text" placeholder="RunTime"><br>
    Ratinng <br><input v-model="rating" class="border-black border rounded-md" type="text" placeholder="Rating"><br>
    Plot <br><input  v-model="plot"  class="border-black border rounded-md" type="message" placeholder="Plot"><br>
    <div class="p-2">
    <div @click="postMovie(index)" class="flex justify-center items-center bg-slate-500 rounded-xl text-white cursor-pointer hover:bg-green-500">ADD</div>
</div>
   </div>
</div>

</div>
</template>
<script>
export default {
    data(){
        return{
            movieName:"",
            directorName:"",
            gernre:"",
            runTime:"",
            rating:"",
            plot:"",
        }
    },
    methods:{
        postMovie(){
        this.$http.$post("/movie/postmovie/",{
            body:{
                movieName:this.movieName,
                directorName:this.directorName,
                gernre:this.gernre,
                runTime:this.runTime,
                rating:this.rating,
                plot:this.plot,
            }
        })}
    }
}

</script>