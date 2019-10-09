<template>
    <section class="mainTitle">
        <div class="container">
            <div class="main-title">
                {{name}}
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data () {
        return {
            name: this.$store.getters.getName
        }
    }
}
</script>

<style lang="sass" scoped> 

    @import '../sass/mainTitle.sass'
    
</style>