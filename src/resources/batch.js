import Resource from './base';

const DEFAULT_PER_PAGE = 1000;

export default class Batch extends Resource {
  get resourceName() {
    return 'operations';
  }

  get resourcesName() {
    return 'batch';
  }

  get defaultListParams() {
    return { per_page: DEFAULT_PER_PAGE };
  }

  async all(params) {
    const options = {
      qs: params || this.defaultListParams
    };

    const body = await this.client.api.get(this.collectionPath(), options);
    return body;
  }

  async find(id) {
    const body = await this.client.api.get(this.memberPath(id));

    return body[this.resourcesName];
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

