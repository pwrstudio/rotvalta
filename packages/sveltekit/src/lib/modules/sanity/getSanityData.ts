import type { Homepage, Page, ArchivalNote, FieldNote, Conversation } from "@sanity-types"
import type { Labels } from "$lib/types"
import { loadData } from "./index";
import { queries } from "$lib/groq";

export async function getSanityData() {
    const homepage: Homepage = await loadData(queries.homepage, {});
    const pageList= await loadData(queries.pageList, {});
    const archivalNoteList= await loadData(queries.archivalNoteList, {});
    const fieldNoteList = await loadData(queries.fieldNoteList, {});
    const conversationList = await loadData(queries.conversationList, {});

    const pages = pageList.list as Page[];
    const archivalNotes = archivalNoteList.list as ArchivalNote[];
    const fieldNotes = fieldNoteList.list as FieldNote[];
    const conversations = conversationList.showConversations ? conversationList.list as Conversation[] : [];

    const labels: Labels = {
        archivalNotes: {
            se: archivalNoteList.label_se ?? "",
            en: archivalNoteList.label_en ?? "",
        },
        fieldNotes: {
            se: fieldNoteList.label_se ?? "",
            en: fieldNoteList.label_en ?? "",
        },
        conversations: {
            se: conversationList.label_se ?? "",
            en: conversationList.label_en ?? "",
        }
    };

    return { homepage, pages, archivalNotes, fieldNotes, conversations, labels };
}