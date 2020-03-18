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

  centerCode = `<Layout::Center>center stuff inside</Layout::Center>`;

  wrapperCode = `<Layout::Wrapper>Wrap this content nicely...</Layout::Wrapper>`;

  verticalStackCode = `<Layout::VerticalStack as |Item|>
  <Item>First item</Item>
  <Item>Second item</Item>
  <Item>Third item</Item>
</Layout::VerticalStack>`;

  clusterCode = `<Layout::Cluster as |Item|>
  <Item>First item</Item>
  <Item>Second item</Item>
  <Item>Third item</Item>
</Layout::Cluster>`;

  gridCode = `<Layout::Grid as |Item|>
  <Item>First item</Item>
  <Item>Second item</Item>
  <Item>Third item</Item>
</Layout::Grid>`;
}
