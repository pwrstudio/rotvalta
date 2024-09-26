import { LANGUAGE } from '$lib/enums'
import type { Writable } from 'svelte/store'
import { writable } from 'svelte/store'

export const languageStore: Writable<LANGUAGE> = writable(LANGUAGE.SWEDISH)