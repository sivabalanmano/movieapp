<template>
    <div><NavBar /></div>
    <h1 class="flex justify-center items-center text-[25px] font-bold pt-8">Movie Details</h1>
    <div class="flex justify-center items-center">
        <div class="justify-center items-center p-8  bg-sky-400  border-black border">
            Movie Name : {{movieData.movieName}}<br>
            Director   : {{movieData.directorName}} <br>
            Gernre     : {{movieData.gernre}}<br>
            RunTime    : {{movieData.runTime}} <br>
            Plot       : {{ movieData.plot }}

        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            movieData:{},
            movieId:this.$route.params.movieId
        }
    },
    methods:{
        getApi(){
           this.$http.$get("/movie/detail/" + this.movieId).then((res)=>{
            this.movieData = res.movie;
           })
        },
    },
    mounted(){
        this.getApi()
    },
}

</script>