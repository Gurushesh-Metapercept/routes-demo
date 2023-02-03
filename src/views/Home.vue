<template>
    <div>
        <h1>Home</h1>
        <button v-on:click="clickHandle">Click me!</button>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name : 'Home',
    data()  {
        return {
            firstName : "Hello",
            lastName : "welcome"
        }
    },
    methods : {
        clickHandle(){
            console.log("clicked", this.firstName + " "+ this.lastName);
        }
    }
}
</script>