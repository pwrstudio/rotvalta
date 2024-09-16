import type { PageLoad } from './$types';
import { getSanityData } from "$lib/modules/sanity/getSanityData"

/** @type {import('./$types').PageLoad} */
export const load = (async () => {
    return await getSanityData();
}) satisfies PageLoad;
