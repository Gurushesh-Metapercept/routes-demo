<template>
    <div class="card">
        <div v-for="p in post" :key="p">
            <h3>{{ p.title }}</h3>
            <p>{{ p.desc }}</p>
            <button>
                <a :href="p.link">View</a>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name : 'Card',
    props : {
        post : Array
    }
}
</script>

<style scoped>
.card {
    background: rgb(247, 247, 247);
    padding: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.171);
    text-align: center;
    max-width: 300px;
    margin: 0 auto;
    margin-top: 2rem;
}

button {
    padding: 5px 10px;
    background: #fff;
    border: 1px solid rgba(0, 0, 0, 0.082);
    margin-top: 1rem;
}
p {
    margin-top: 1rem;
}
</style>