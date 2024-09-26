import type { PageLoad } from './$types';
import { loadData } from '$lib/modules/sanity';
import { queries } from '$lib/groq';
import type { ArchivalNote, FieldNote } from '@sanity-types';

/** @type {import('./$types').PageLoad} */
export const load = (async ({params}) => {
    const note: (FieldNote | ArchivalNote) = await loadData(queries.singleNote, {slug: params.slug});
    return { note }
}) satisfies PageLoad;
