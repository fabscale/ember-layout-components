# [0.12.0](https://github.com/fabscale/ember-layout-components/compare/0.11.2...0.12.0) (2021-04-06)


* feat!: Rename VerticalStack to Stack ([0a10be8](https://github.com/fabscale/ember-layout-components/commit/0a10be85533e91ae2fd2cb4d20813e62c78288df))


### BREAKING CHANGES

* Rename VerticalStack to Stack

## [0.11.2](https://github.com/fabscale/ember-layout-components/compare/0.11.1...0.11.2) (2021-04-06)


### Reverts

* Revert "feat!: Rename VerticalStack to Stack" ([4bf29c9](https://github.com/fabscale/ember-layout-components/commit/4bf29c9d05a81da64942106b2a7481d4343b3734))

## [0.11.1](https://github.com/fabscale/ember-layout-components/compare/0.11.0...0.11.1) (2021-04-01)

### Features

* Rename `<Layout::VerticalStack>` to `<Layout::Stack>`

### Bug Fixes

* Update layout-join-classes test ([845b1f2](https://github.com/fabscale/ember-layout-components/commit/845b1f26ca97556ac7a588e5ac7f6ad06252f9a4))

# [0.11.0](https://github.com/fabscale/ember-layout-components/compare/0.10.1...0.11.0) (2021-03-02)

## [0.10.1](https://github.com/fabscale/ember-layout-components/compare/0.9.2...0.10.1) (2021-03-02)


### Features

* Import from `@ember/template` instead of `@ember/string` ([de97ee4](https://github.com/fabscale/ember-layout-components/commit/de97ee4537bb03a2bba2af825864346ca87abbfa))

## [0.9.2](https://github.com/fabscale/ember-layout-components/compare/0.9.1...0.9.2) (2020-11-26)


### Bug Fixes

* Remove incorrect re-export of layoutDeprecate helper ([764dc00](https://github.com/fabscale/ember-layout-components/commit/764dc0086aaaef32fc4eaf6935a045fb59585144))

## [0.9.1](https://github.com/fabscale/ember-layout-components/compare/0.9.0...0.9.1) (2020-11-10)


### Features

* Allow to specify `[@wrapper](https://github.com/wrapper)Classes` for cluster ([bb02748](https://github.com/fabscale/ember-layout-components/commit/bb02748813326bc1584cecc7c1b3e2b4ca217890))

# [0.9.0](https://github.com/fabscale/ember-layout-components/compare/0.8.0...0.9.0) (2020-10-27)


### Bug Fixes

* Ensure full-width-on-mobile cluster always wraps ([c558d25](https://github.com/fabscale/ember-layout-components/commit/c558d2542dce7654d4fd553e1b8dc258c33dd5b8))
* Introduce wrapper element for cluster to avoid scrollbars ([6c4d66b](https://github.com/fabscale/ember-layout-components/commit/6c4d66b916a6bd5e0c05d7ff02f8d36ce32fb203))


### Features

* Add `[@vertical](https://github.com/vertical)Align='stretch'` option to cluster ([183a535](https://github.com/fabscale/ember-layout-components/commit/183a53573a9e89083eadea008036f8d5748794c0))
* Allow to specify `[@gap](https://github.com/gap)Vertical` for cluster ([fad827e](https://github.com/fabscale/ember-layout-components/commit/fad827e67fe09ed92521646726c21c8e612f26fd))
* Replace `[@size](https://github.com/size)` with `[@gap](https://github.com/gap)` for `<Layout::Cluster>` ([73d6df2](https://github.com/fabscale/ember-layout-components/commit/73d6df22b95add0a2a4a5ee56c8e445a75065fee))
* Replace `[@size](https://github.com/size)` with `[@gap](https://github.com/gap)` for `<Layout::VerticalStack>` ([84c11b8](https://github.com/fabscale/ember-layout-components/commit/84c11b8f028e0288caf07ee83938e8e6957707f2))

# [0.8.0](https://github.com/fabscale/ember-layout-components/compare/0.7.0...0.8.0) (2020-10-07)


### Features

* Allow to specify `[@grow](https://github.com/grow)={{true}}` on cluster items ([3ce28cc](https://github.com/fabscale/ember-layout-components/commit/3ce28cc7a8a5482dfa1ab87ad6d45a411d514de4))
* Allow to specify `[@no](https://github.com/no)Wrap` for <Layout::Cluster> ([2e568e5](https://github.com/fabscale/ember-layout-components/commit/2e568e5e610bbd969631e701c448921a154cf179))
* Allow to specify `[@vertical](https://github.com/vertical)Align="top"|"bottom"` for <Layout::Cluster> ([b08bc7b](https://github.com/fabscale/ember-layout-components/commit/b08bc7bddbbdbbc5f52cf746997d779077e949fb))

# [0.7.0](https://github.com/fabscale/ember-layout-components/compare/0.6.0...0.7.0) (2020-09-07)


### Features

* Allow to specify [@vertical](https://github.com/vertical) & [@horizontal](https://github.com/horizontal) for <Layout::Center> ([64a54e6](https://github.com/fabscale/ember-layout-components/commit/64a54e61f42727c0fc45d3a1da0a16c8e85822e8))

# [0.6.0](https://github.com/fabscale/ember-layout-components/compare/0.5.2...0.6.0) (2020-08-05)


### Bug Fixes

* Ensure vertical spacing is correct for cluster items ([feb406e](https://github.com/fabscale/ember-layout-components/commit/feb406e935ed5d9580d0be65605c8bbba86d93e4))

## [0.5.2](https://github.com/fabscale/ember-layout-components/compare/0.5.1...0.5.2) (2020-06-30)


### Features

* Add xlarge size to <Layout::Cluster> ([5935254](https://github.com/fabscale/ember-layout-components/commit/59352547af72524a49ad1cd3c0f32d79af839416))

## [0.5.1](https://github.com/fabscale/ember-layout-components/compare/0.5.0...0.5.1) (2020-06-24)


### Bug Fixes

* Fix grid width typo ([bf2ab9d](https://github.com/fabscale/ember-layout-components/commit/bf2ab9d7aa5286feb8aae84d9f35a4ff599aa063))

# [0.5.0](https://github.com/fabscale/ember-layout-components/compare/0.4.0...0.5.0) (2020-06-23)


### Bug Fixes

* Avoid collision of CSS variable names ([86eb6f6](https://github.com/fabscale/ember-layout-components/commit/86eb6f69f701fb7b67c71e972651d803721a03ec))

# [0.4.0](https://github.com/fabscale/ember-layout-components/compare/0.2.0...0.4.0) (2020-06-16)


### Features

* Add 'xlarge' size option to vertical stack ([18deae9](https://github.com/fabscale/ember-layout-components/commit/18deae9900bb9e61bea1e2e0ac99785602e2b1d6))
* Allow to specify custom size for <Layout::Grid> ([1d2f4c0](https://github.com/fabscale/ember-layout-components/commit/1d2f4c0f2d8c8491a08b2f97343041196365a627))

# [0.3.0](https://github.com/fabscale/ember-layout-components/compare/0.2.0...0.3.0) (2020-05-28)


### Features

* Allow to specify custom size for <Layout::Grid> ([1d2f4c0](https://github.com/fabscale/ember-layout-components/commit/1d2f4c0f2d8c8491a08b2f97343041196365a627))

# [0.2.0](https://github.com/fabscale/ember-layout-components/compare/0.1.2...0.2.0) (2020-05-12)

## [0.1.2](https://github.com/fabscale/ember-layout-components/compare/0.1.1...0.1.2) (2020-03-18)

## [0.1.1](https://github.com/fabscale/ember-layout-components/compare/0.1.0...0.1.1) (2020-03-18)

# 0.1.0 (2020-03-18)


### Bug Fixes

* Fix CI test ([bc00ece](https://github.com/fabscale/ember-layout-components/commit/bc00ece68105fe0c5203773038b3ebc564335f16))
* Fix deploy config ([ec814db](https://github.com/fabscale/ember-layout-components/commit/ec814db65efb4064ba7cf25c75015b5cc4241cd4))
* Run prettier on all app re-exports ([8dc3bc8](https://github.com/fabscale/ember-layout-components/commit/8dc3bc87844e7f9ef03b01b93ca98d9bb254bff7))


### Features

* Add floating options to cluster items ([b193511](https://github.com/fabscale/ember-layout-components/commit/b193511ce214a41a723040a2eb490019519e5d0b))
* Add withSeparator option to vertical stack ([5069a4c](https://github.com/fabscale/ember-layout-components/commit/5069a4cb2a5f55f732c804c572d91c3c5f652553))
* Initial setup ([0502361](https://github.com/fabscale/ember-layout-components/commit/0502361d4d9ed712760fe5bd4d4f878e64526a52))

