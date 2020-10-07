import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
  @tracked clusterSize;
  @tracked clusterPosition;
  @tracked clusterVerticalAlign;
  @tracked clusterFullWidthOnMobile;
  @tracked clusterNoWrap;
  @tracked verticalStackSize;
  @tracked verticalStackWithSeparator;
  @tracked centerHorizontal;
  @tracked centerVertical;

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

  gridCode = `<Layout::Grid as |Item|>
  <Item>First item</Item>
  <Item>Second item</Item>
  <Item>Third item</Item>
</Layout::Grid>`;
}
