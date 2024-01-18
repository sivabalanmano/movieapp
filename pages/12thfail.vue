<template>
    <div><NavBar /></div>
    <h1 class="flex justify-center items-center text-[25px] font-bold pt-8">Movie Details</h1>
    <div class="flex justify-center items-center">
        <div class="justify-center items-center p-8  bg-sky-400  border-black border"
         v-for="(movie,index) in movieData" :key="index">
            Movie Name : {{movie.Moviename}}<br>
            Director   : {{movie.Director}} <br>
            Gernre     : {{movie.Gernre}}<br>
            RunTime    : {{movie.RunTime}} <br>
            Plot       : {{ movie.Plot }}

        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            movieData:[
                {
                   Moviename:"12thFail",
                   Director:" Vidhu Vinod Chopra",
                   Gernre:"Romance/Drama",
                   RunTime:"2h 26m ",
                   Plot:"IPS officer Manoj Kumar Sharma fearlessly embraces the idea of restarting his academic journey and reclaiming his destiny at a place where millions of students attempt the world's toughest competitive exam: UPSC."
                },
            ]
        }
    },
}

</script>