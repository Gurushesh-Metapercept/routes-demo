<template>
    <div>
        <h1>Home</h1>
        <button v-on:click="clickHandle">Click me!</button>

        <div class="grp">
            <router-link :to="{ name: 'profile', params: { name: this.alex }}">Alex</router-link>
            <router-link :to="{ name: 'profile', params: { name: this.light }}">Light</router-link>
            
        </div>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name : 'Home',
    data()  {
        return {
            firstName : "Hello",
            lastName : "welcome",
            alex : "alex",
            light : "light"
        }
    },
   
    methods : {
        clickHandle(){
            console.log("clicked", this.firstName + " "+ this.lastName);
        }
    }
}
</script>