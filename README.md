# ember-layout-components

Generic & reusable layout components for your Ember app.

This addon provides easy to use and flexible layout components.
By using these components, your layout will automatically be flexible and consistent.
Instead of defining exactly how something should look like at a given viewport, let the intrinsic size of
content and CSS calcualte the best possible layout, based on the basic rules these layout components define.

Based on [every-layout.dev](https://every-layout.dev/).

![Test & Lint](https://github.com/fabscale/ember-layout-components/workflows/Test%20&%20Lint/badge.svg)

## Compatibility

* Ember.js v3.24 or above
* Ember CLI v3.24 or above
* Node.js v14 or above

This addon makes use of some modern CSS features, which means that browser support might be limited:

- It makes heavy use of runtime CSS Variables, which means it will not work in IE11
- The Cluster uses [flex gap](https://caniuse.com/flexbox-gap), which is supported in all modern browsers (Safari 14.1+). There is an included fallback behavior for browsers that do not support it.

## Installation

```
ember install ember-layout-components
```

## Usage

```hbs
<Layout::Wrapper>
  <Layout::Stack @gap='large' as |Section|>
    <Section>
      First section goes here.
    </Section>

    <Section>
      Second section goes here.
    </Section>
  </Layout::Stack>
</Layout::Wrapper>
```

For more details, see the [documentation](https://fabscale.github.io/ember-layout-components/).

## Available layout components

- `<Layout::Wrapper>`
- `<Layout::Center>`
- `<Layout::Stack>`
- `<Layout::Cluster>`
- `<Layout::Grid>`

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).
