<script lang="ts">
	import { pageTitle } from '$lib/utils'
	import { page } from '$app/stores'

	$: title = pageTitle($page.url.pathname)
</script>

<template lang="pug">
    svelte:head
        title {title}
</template>
