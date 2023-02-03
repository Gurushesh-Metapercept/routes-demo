<template>
    <div class="form">
        {{ email }} {{ password }}
        <input type="text" placeholder="email" v-model="email">
        <input type="password" placeholder="password" v-model="password"> 
        <a v-bind:href="url">Google</a>
        <p v-if="password.length < 6">password length should be greater than or equal to 6</p>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name : 'Contact',
    data() {
        return {
            email : "",
            password : "",
            url : "http://www.google.com"
        }
    }
}
</script>

<style>
.form input {
    display: block;
    margin:  0 auto;
    margin-top: 1rem;
}
.form p{
    color: red;
}
</style>