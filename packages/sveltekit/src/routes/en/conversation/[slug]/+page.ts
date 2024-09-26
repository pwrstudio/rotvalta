import type { PageLoad } from './$types';
import { loadData } from '$lib/modules/sanity';
import { queries } from '$lib/groq';
import type { Conversation } from '@sanity-types';

/** @type {import('./$types').PageLoad} */
export const load = (async ({params}) => {
    const conversation: Conversation = await loadData(queries.singleConversation, {slug: params.slug});
    return { conversation }
}) satisfies PageLoad;
