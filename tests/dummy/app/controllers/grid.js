import Controller from '@ember/controller';

export default class GridController extends Controller {
  gridCode = `<Layout::Grid as |Item|>
  <Item>First item</Item>
  <Item>Second item</Item>
  <Item>Third item</Item>
</Layout::Grid>`;
}
