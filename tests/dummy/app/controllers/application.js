import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
  @tracked clusterSize;
  @tracked clusterPosition;
  @tracked clusterFullWidthOnMobile;
  @tracked verticalStackSize;

  @action
  updateProperty(property, value) {
    this[property] = value;
  }
}
