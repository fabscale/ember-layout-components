import Controller from '@ember/controller';

export default class IndexController extends Controller {
  helperCode = `<Layout::Grid 
  style={{layout-css-var layout-grid-width='20rem' layout-grid-gap='1rem'}} 
  as |Item|
>
</Layout::Grid>`;

  styleCode = `:root {
  --layout-wrapper-width: 60rem;
  --layout-wrapper-spacing: 2rem;
  --layout-stack-gap: 1rem;
  --layout-stack-separator-color: grey;
  --layout-cluster-gap: 1rem;
  --layout-grid-gap: 2rem;
  --layout-grid-width: 20rem;
}`;
}
