import type { Homepage, Page, ArchivalNote, FieldNote, Conversation } from "@sanity-types"
import type { PageLoad } from './$types';
import { loadData } from "$lib/modules/sanity"
import { queries } from "$lib/groq"

/** @type {import('./$types').PageLoad} */
export const load = (async () => {
    const homepage: Homepage = await loadData(queries.homepage, {});
    const pageList= await loadData(queries.pageList, {});
    const archivalNoteList= await loadData(queries.archivalNoteList, {});
    const fieldNoteList = await loadData(queries.fieldNoteList, {});
    const conversationList = await loadData(queries.conversationList, {});

    const pages = pageList.list as Page[];
    const archivalNotes = archivalNoteList.list as ArchivalNote[];
    const fieldNotes = fieldNoteList.list as FieldNote[];
    const conversations = conversationList.list as Conversation[];

    return { homepage, pages, archivalNotes, fieldNotes, conversations };
}) satisfies PageLoad;
