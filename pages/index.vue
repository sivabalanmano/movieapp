<template>
    <div>
        <NavBar />
        <Test v-for="n in 10" :key="n" :name="'sivabalan'+n" />
        <h1>hello</h1>
    </div>
</template>