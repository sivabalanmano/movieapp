<template>
    <div>
        hi {{name}}
    </div>
</template>
<script>

export default{
    props :{
       name:{
        type:String,
        default:"",
       }
    },
}
</script>