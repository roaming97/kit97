import { awesomePugPre, awesomePugPost } from 'svelte-awesome-pug'
import preprocess from 'svelte-preprocess'
import auto from '@sveltejs/adapter-auto'

/** @type {import('@sveltejs/kit').Config} */
export default {
	extensions: ['.svelte'],
	preprocess: [awesomePugPre, preprocess(), awesomePugPost],
	kit: {
		adapter: auto()
	}
}
