/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-unused-vars */
const index = require('../dist/index.js');
const Client = index.Client;

const apiToken = 'de94b1ea96762ba650ad40da1d0f378c9254e46cc8643d5ed546b197bb71a7f33132490de31c51aa';

const client = new Client(apiToken);


// * List
client.workflows.all()
  .then((page) => {
    console.log(page.objects);
    console.log(`I got you ${page.objects.length} workflows.`);
  })
  .catch((error) => {
    console.log('Error getting your forms.', error.message);
  });

// # Find
// client.workflows.find('6b67753f-aa71-4d73-aaf4-210497803e87')
//   .then((page) => {
//     // console.log(page);
//     // console.log(page.steps[0].arguments);
//     // console.log(page.steps[0].next_steps);
//     console.log(page.steps.forEach(step => console.log(step, 'step arguments > ', step.arguments, 'NEXT 000')));
//   })
//   .catch((error) => {
//     console.log('Error getting your forms.', error.message);
//   });

// ! Create
// Use https://www.uuidgenerator.net/version4 to generate a new uuid for next_steps

// const createPayload = {
//   name: 'Workflow fulcrum-js test',
//   description: 'Created via the REST API',
//   object_type: 'form',
//   object_resource_id: 'afd504a9-d3bc-4d8b-8496-08b07c24c18c',
//   active: true,
//   steps: [ {
//     name: null,
//     description: null,
//     step_type: 'filter',
//     arguments: {
//       expression: [ {
//         field: '_updated_by_email',
//         value: 'gustavoferraradev@gmail.com',
//         operator: 'equal',
//         combinator: ''
//       } ]
//     },
//     next_steps: [ '64a4f9a0-1f03-44a9-a3b4-0e68489adc6d' ],
//     initial: true,
//     id: 'b3b6c59a-8a25-4b63-9792-17728d117bcc'
//   }, {
//     name: null,
//     description: null,
//     step_type: 'email',
//     arguments: {
//       to: 'gustavoferraradev@gmail.com',
//       subject: 'Workflow fulcrum-js test',
//       html_body: '{{_title}} at {{_status}} has been updated at {{_updated_at}}',
//       text_body: '{{_title}} at {{_status}} has been updated at {{_updated_at}}',
//       report_ids: []
//     },
//     next_steps: [],
//     initial: false,
//     id: '64a4f9a0-1f03-44a9-a3b4-0e68489adc6d'
//   } ],
//   event_type: 'record_created'
// };

// client.workflows.create(createPayload).then((page) => {
//   console.log(page);
// }).catch((error) => {
//   console.log('Error getting your forms.', error);
// });

// ? Update
// Use https://www.uuidgenerator.net/version4 to generate a new uuid for next_steps

// const updatePayload = {
//   name: 'UPDATED Workflow fulcrum-js test',
//   description: 'Created via the REST API',
//   object_type: 'form',
//   object_resource_id: 'afd504a9-d3bc-4d8b-8496-08b07c24c18c',
//   active: true,
//   steps: [
//     {
//       name: null,
//       description: null,
//       step_type: 'filter',
//       arguments: {
//         expression: [
//           {
//             field: '_updated_by_email',
//             value: 'gustavoferraradev@gmail.com',
//             operator: 'equal',
//             combinator: ''
//           }
//         ]
//       },
//       next_steps: [
//         '64a4f9a0-1f03-44a9-a3b4-0e68489adc6d'
//       ],
//       initial: true,
//       id: 'b3b6c59a-8a25-4b63-9792-17728d117bcc'
//     },
//     {
//       name: null,
//       description: null,
//       step_type: 'email',
//       arguments: {
//         to: 'gustavoferraradev@gmail.com',
//         subject: 'Workflow fulcrum-js test',
//         html_body: '{{_title}} at {{_status}} has been updated at {{_updated_at}}',
//         text_body: '{{_title}} at {{_status}} has been updated at {{_updated_at}}',
//         report_ids: []
//       },
//       next_steps: [],
//       initial: false,
//       id: '64a4f9a0-1f03-44a9-a3b4-0e68489adc6d'
//     }
//   ],
//   event_type: 'record_created'
// };

// client.workflows.update('961ff5f5-4d79-4cdd-a834-bb7a85b1dc5d', updatePayload)
//   .then((page) => {
//     console.log(page);
//   })
//   .catch((error) => {
//     console.log('Error getting your forms.', error);
//   });

// * Delete

// client.workflows.delete('961ff5f5-4d79-4cdd-a834-bb7a85b1dc5d').then((page) => {
//   console.log(page);
// }).catch((error) => {
//   console.log('Error getting your forms.', error);
// });

