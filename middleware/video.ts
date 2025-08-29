export default defineNuxtRouteMiddleware((to, from) => {
    const valueParam = +to.params.id;
    if(isNaN(valueParam) || valueParam < 0) {
        return navigateTo('/videos')
    }
});