import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ClusterController extends Controller {
  @tracked clusterSize;
  @tracked clusterPosition;
  @tracked clusterVerticalAlign;
  @tracked clusterFullWidthOnMobile;
  @tracked clusterNoWrap;

  @action
  updateProperty(property, value) {
    this[property] = value;
  }

  clusterCode = `<Layout::Cluster as |Item|>
  <Item>First item</Item>
  <Item>Second item</Item>
  <Item>Third item</Item>
</Layout::Cluster>`;

  clusterCodeLeft = `<Layout::Cluster as |Item|>
  <Item>First item</Item>
  <Item @float="left">Second item</Item>
  <Item>Third item</Item>
  <Item>Fourth item</Item>
</Layout::Cluster>`;

  clusterCodeRight = `<Layout::Cluster as |Item|>
  <Item>First item</Item>
  <Item>Second item</Item>
  <Item>Third item</Item>
  <Item @float="right">Fourth item</Item>
</Layout::Cluster>`;

  clusterCodeGrow = `<Layout::Cluster as |Item|>
<Item @grow={{true}}>First item</Item>
<Item>Second item</Item>
<Item>Third item</Item>
<Item>Fourth item</Item>
</Layout::Cluster>`;
}
