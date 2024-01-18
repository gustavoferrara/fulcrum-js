import assert from 'assert';
import nock from 'nock';
import path from 'path';
import client from './client';

describe('Batch', () => {
  describe('#create()', () => {
    it('should create a batch.', async () => {
      const batchToPost = {
        batch: {
          start: false,
          operations: [
            {
              action: 'delete',
              resource: 'record',
              form_id: '76206a18-581a-46e4-b4ff-f326567aa3f4',
              query: "SELECT _record_id AS id FROM \"batch api test\" WHERE batch='3'"
            }
          ]
        }};

      nock('https://api.fulcrumapp.com')
        .post('/api/v2/batch')
        .replyWithFile(201,
                       path.join(__dirname, 'objects/batch.json'),
                       {'Content-Type': 'application/json'});

      const batch = await client.batch.create(batchToPost);

      assert.equal(batch.id,
                   'c1ff9a4b-bc1d-4cd0-a151-80b03309613d',
                   'batch.id is incorrect.');
    });
  });
});
