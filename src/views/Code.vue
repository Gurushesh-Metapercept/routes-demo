<template>
    <div class="basic">
        <div class="counter">
            <button @click="descrement">-</button>
            <p>{{ age }}</p>
            <button @click="increment">+</button>
        </div>

        <div class="boxx">
           
            <label for="userName">userName :</label>
            <input type="text" name="userName" v-on:input="nameInput('evemt is triggerd', $event)">
           
            <label for="password">Password :</label>
            <input type="password" name="password" @keyup.enter="keyPressHandler">

            <label for="age">age</label>
            <input type="text" v-model.number.lazy.trim="age">
            <span>
                {{ userName }}
            </span>

            <span>
                {{ password }}
            </span>
        </div>
    </div>
</template>

<script>
console.log("in code");
export default {

    // eslint-disable-next-line vue/multi-word-component-names
    name : 'Code',
    data() {
        return {
            age: 0,
            userName : "",
            password : ""
        }
    },
    methods : {
        descrement() {
            this.age = this.age - 1
        },
        increment() {
            this.age = this.age + 1;
        },

        nameInput(msg, e){
            
            console.log(msg);
            console.log(e.target.value);
            this.userName = e.target.value
        },
        keyPressHandler(e){
            this.password = e.target.value
            console.log(e.target.value);
        }
    }
}
</script>

<style scoped>
.counter {
    margin-top: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
button {
    padding: 5px 1rem;
}
p {
    margin: 0 1rem;
}
.boxx {
    margin-top: 3rem;
}

span , input{
    display: block;
    margin: 0 auto;
}

</style>