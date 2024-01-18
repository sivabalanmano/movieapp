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
                   Moviename:"Joe",
                   Director:" S. Hariharan Ram",
                   Gernre:"Romance/Drama",
                   RunTime:"2h 27m ",
                   Plot:"Joe is a 2023 Indian Tamil-language romantic drama film written and directed by Hariharan Ram S. in his directorial debut and produced by Dr. D. Arulanandhu and Mathewo Arulanandhu under the banner of Vision Cinema House. The film stars Rio Raj, Malavika Manoj and Bhavya Trikha in the lead roles."
                },
            ]
        }
    },
}

</script>