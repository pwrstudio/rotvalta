import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'
import deskStructure from './deskStructure'

export default defineConfig({
  name: 'default',
  title: 'rotvalta',
  
  projectId: '4bkz3reu',
  dataset: 'production',

  plugins: [ structureTool({ structure: deskStructure }) ],

  document: {
    newDocumentOptions: (prev, { creationContext }) => {
      const { type } = creationContext;
      const DISABLED_TYPES = [
        'homepage',
        'pageList',
        'fieldNoteList',
        'archivalNoteList',
        'conversationList'
      ];
      if (type === 'global') {
        return prev.filter((template) => !DISABLED_TYPES.includes(template.templateId));
      }
      return prev;
    },
  },

  schema: {
    types: schemaTypes,
  },
})
