import {
  RuntimeModel,
  RuntimeObjectFields,
  RuntimeViewReference,
  RuntimeCompositeDefinition,
} from '@composedb/types';

const openBadgeModel: RuntimeModel = {
  name: 'OpenBadge',
  description: 'A model for representing and managing digital Open Badges',
  schema: {
    $schema: 'http://json-schema.org/draft-07/schema#',
    title: 'OpenBadge',
    type: 'object',
    properties: {
      name: { type: 'string', description: 'The name of the badge.' },
      description: {
        type: 'string',
        description: 'A brief description of what the badge represents.',
      },
      issuer: {
        type: 'string',
        description: 'The entity that issues the badge.',
      },
      recipient: { type: 'string', description: 'The recipient of the badge.' },
      issueDate: {
        type: 'string',
        format: 'date',
        description: 'The date on which the badge was awarded.',
      },
      evidence: {
        type: 'string',
        description:
          'A URL or description of evidence supporting the issuance of the badge.',
      },
    },
    required: ['name', 'issuer', 'recipient', 'issueDate'],
  },
};

const openBadgeComposite: RuntimeCompositeDefinition = {
  models: {
    OpenBadge: openBadgeModel,
  },
  objects: {}, // Define any shared objects here if needed
  enums: {}, // Define any enums here if needed
  accountData: {}, // Define any account-specific data here if needed
  query: {}, // Define any custom queries here if needed
};

export default openBadgeComposite;
