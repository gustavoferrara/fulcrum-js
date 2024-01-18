/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-unused-vars */


const index = require('../dist/index.js');
const Client = index.Client;
const apiToken = 'e24820f7fe0e235cb4bed6506767762d1dea1a5df2110ff83c3497274888c51430b0b6d02de8f7e2';

const client = new Client(apiToken);

// async function fetchData() {
//   const url = 'https://api.fulcrumapp.com/api/v2/batch?per_page=1000';

//   const options = {
//     method: 'GET',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//       'User-Agent': 'fulcrum-js version 2.7.0',
//       'X-ApiToken': 'f1a8d0a8816b6c2e7ef30b2bbaae44f3dcc5aae3f24ade4af80d6168bd5394520b4cb0ea27ee3ad1'
//     }
//   };

//   try {
//     const response = await fetch(url, options);


//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     return console.error('Error fetching data:', error.message);
//   }
// }

// // Example usage:
// fetchData().then(data => {
//   console.log('Fetched data:', data);
// });


// * List

// client.batch.all() // https://api.fulcrumapp.com/api/v2/batch?per_page=1000
//   .then((page) => {
//     console.log(page);
//     // console.log(`I got you ${page.objects.length} workflows.`);
//   })
//   .catch((error) => {
//     console.log('Error getting your forms.', error.message);
//   });

// # Find
// client.batch.find('ff8246ca-681a-4d3e-805d-72bc59667528') // https://api.fulcrumapp.com/api/v2/batch/6b67753f-aa71-4d73-aaf4-210497803e87
//   .then((page) => {
//     console.log(page);
//   })
//   .catch((error) => {
//     console.log('Error getting your forms.', error.message);
//   });

// ! Create

// https://api.fulcrumapp.com/api/v2/batch
// body: '{"batch":{"name":"Workflow fulcrum-js test"}}'

// const createPayload = {
//   start: false,
//   operations: [
//     {
//       action: 'delete',
//       resource: 'record',
//       form_id: '76206a18-581a-46e4-b4ff-f326567aa3f4',
//       query: 'SELECT _record_id AS id FROM "batch api test" WHERE batch=\'3\''
//     }
//   ]
// };


// client.batch.create(createPayload)
//   .then((page) => {
//     console.log(page);
//   })
//   .catch((error) => {
//     console.log('Error getting your forms.', error);
//   });

// ? Operations

// const operationsPayload = [
//   {
//     action: 'delete',
//     resource: 'record',
//     // eslint-disable-next-line no-useless-escape
//     query: "select \_record_id as id from \"{{formId}}\" where \_status = 'Approved'"
//   }
// ]
// ;

// // https://api.fulcrumapp.com/api/v2/batch/uuid-test/operations
// // body: '{"operations":[{"name":"Workflow fulcrum-js test"}]}'

// client.batch.operations('14f23423-5329-4d8f-9985-bc31db64cc32', operationsPayload)
//   .then((page) => {
//     console.log(page);
//   })
//   .catch((error) => {
//     console.log('Error getting your forms.', error);
//   });

// * Start


// https://api.fulcrumapp.com/api/v2/batch/uuid-test/start
// method: 'POST'
// no body

client.batch.start('14f23423-5329-4d8f-9985-bc31db64cc32')
  .then((page) => {
    console.log(page);
  })
  .catch((error) => {
    console.log('Error getting your forms.', error.message);
  });

