<template>
    <div>
        <!-- Você esta no video numero {{ $route.params.id }} -->
        Você esta no video numero {{ idParams }}
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'exibicao',
    middleware: 'video'
})

const route = useRoute();

const idParams = computed(() => route.params.id)
</script>

<style lang="scss" scoped>

</style>