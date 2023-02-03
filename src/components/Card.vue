<template>
    <div class="card">
        <h3>Card Title</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quasi doloribus blanditiis asperiores similique aliquam.</p>
        <button>View</button>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name : 'Card'
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