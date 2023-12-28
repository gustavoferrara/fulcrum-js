import List from '../actions/list';
import Find from '../actions/find';
import Resource from './base';

export default class Batch extends Resource {
  get resourceName() {
    return 'operations';
  }

  get resourcesName() {
    return 'batch';
  }

  async create(object) {
    const attributesForObject = () => {
      const attributes = {};
      // resourcesName instead of resourceName
      attributes[this.resourcesName] = object;
      return attributes;
    };

    const options = {
      body: attributesForObject(object)
    };

    const body = await this.client.api.post(this.resourcesName, options);

    return body[this.resourcesName];
  }

  async operations(id, object) {
    const options = {
      body: this.attributesForObject(object)
    };

    const body = await this.client.api.post(`${this.memberPath(id)}/operations`, options);

    return body[this.resourceName];
  }

  async start(id) {
    const body = await this.client.api.post(`${this.memberPath(id)}/start`);

    return body[this.resourcesName];
  }
}

List.includeInto(Batch);
Find.includeInto(Batch);
