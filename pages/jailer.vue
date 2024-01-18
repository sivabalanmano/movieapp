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
                   Moviename:"Jailer",
                   Director:"Nelson",
                   Gernre:"Action",
                   RunTime:"2h 30m ",
                   Plot:"Muthuvel Pandian, a stern yet compassionate jailer, sets out to stop a gang when they try to flee their leader from prison."
                },
            ]
        }
    },
}

</script>