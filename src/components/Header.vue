<template>
   <header>
    <span>Title</span>
    <menu>
        <ul>
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/about">About</router-link>
            </li>
            <li>
                <router-link to="/contact">Contact</router-link>
            </li>
            <li>
                <router-link to="/code">Code</router-link>
            </li>
            <li>
                <router-link to="/profile/">Profile</router-link>
            </li>
        </ul>
    </menu>
   </header>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name : 'Header'
}
</script>

<style scoped>
header {
    display: flex;
    color: #fff;
    background: rgb(49, 127, 216);
    justify-content: space-between;
    align-items: center;
    padding: 1rem 4rem;
}

menu ul {
    display: flex;
    align-content: center;
}

menu li {
    cursor: pointer;
}
menu  li + li {
    margin-left: 1rem;
}


</style>