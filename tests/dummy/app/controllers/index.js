import Controller from '@ember/controller';

export default class IndexController extends Controller {
  helperCode = `<Layout::Grid 
  style={{layout-css-var layout-grid-width='20rem' layout-grid-gap='1rem'}} 
  as |Item|
>
</Layout::Grid>`;
}
