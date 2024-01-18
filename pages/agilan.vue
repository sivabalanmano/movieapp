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
                   Moviename:"Agilan",
                   Director:" N. Kalyanakrishnan",
                   Gernre:"Action/Thriller",
                   RunTime:"2h 11m ",
                   Plot:"A seedy crane operator in the ports of Chennai aims to gain control over the underworld. However, his violent ambitions mask his true intentions"
                },
            ]
        }
    },
}

</script>