import type { Homepage } from "@sanity-types"
import type { PageLoad } from './$types';
import { loadData } from "$lib/modules/sanity"
import { queries } from "$lib/groq"

/** @type {import('./$types').PageLoad} */
export const load = (async () => {
    const homepage: Homepage = await loadData(queries.homepage, {});
    return { homepage };
}) satisfies PageLoad;
