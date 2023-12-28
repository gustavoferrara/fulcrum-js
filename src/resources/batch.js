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
}

List.includeInto(Batch);
Find.includeInto(Batch);
