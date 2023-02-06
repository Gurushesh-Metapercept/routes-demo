<template>
    <div>
        <h1>About</h1>
        <Card :post="post" />
    </div>
</template>

<script>
import Card from '@/components/Card.vue';
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name : 'About',
    components : {
        Card
    },
    data(){
        return {
            post: [
                {
                    title : "Post title",
                    desc : "this is post body and here you can write any thing about post",
                    link : "http://google.com"
                }
            ]
        }
    }
}
</script>