# [14.0.0](https://github.com/americanexpress/eslint-config-amex/compare/v13.1.0...v14.0.0) (2021-03-03)


### Features

* fix the peer dep test; update all deps to latest ([51d1864](https://github.com/americanexpress/eslint-config-amex/commit/51d18646c8eb49cb4752233dbea8ac41beac75f8))
* move optional tools and plugins to optional peerDependencies ([4aebd5e](https://github.com/americanexpress/eslint-config-amex/commit/4aebd5eb8260e7eaf7adf5eb000f29f8c3e72654))


### BREAKING CHANGES

* Moved TypeScript and Prettier dependencies to peer
dependencies and made them optional. Consumers of this package must
install them separately. Moved ESLint plugins required by `amex/test`
and `amex/prettier/*` to become optional peer dependencies.
* - Several ESLint plugins received major updates.
- ESLint versions below v7.15.0 are no longer supported.
* - Several ESLint plugins received major updates.
- ESLint versions below v7.15.0 are no longer supported.

# [13.1.0](https://github.com/americanexpress/eslint-config-amex/compare/v13.0.0...v13.1.0) (2020-08-18)


### Features

* **unicorn/prefer-includes:** disable ([#50](https://github.com/americanexpress/eslint-config-amex/issues/50)) ([d526530](https://github.com/americanexpress/eslint-config-amex/commit/d526530ba525d8174f7fab4f3d274f38d423d0de))

# [13.0.0](https://github.com/americanexpress/eslint-config-amex/compare/v12.2.0...v13.0.0) (2020-07-16)


### Bug Fixes

* **eslint:** disable prevent abbreviations ([#33](https://github.com/americanexpress/eslint-config-amex/issues/33)) ([6647bef](https://github.com/americanexpress/eslint-config-amex/commit/6647bef8268ad912102757bf428f63167fc3464e))


### Features

* **eslint:** configuration ([#30](https://github.com/americanexpress/eslint-config-amex/issues/30)) ([6229d4a](https://github.com/americanexpress/eslint-config-amex/commit/6229d4ac96badf1d4b487b7e5a5b6b58341e8567))
* **eslint:** disable function scoping ([#35](https://github.com/americanexpress/eslint-config-amex/issues/35)) ([0a0c5bb](https://github.com/americanexpress/eslint-config-amex/commit/0a0c5bbccd87b615367093baa9cc70b26588609a))
* **eslint:** disable prefer default export ([#26](https://github.com/americanexpress/eslint-config-amex/issues/26)) ([45b88d3](https://github.com/americanexpress/eslint-config-amex/commit/45b88d38a86c456080c116c52d6989e68a2051cf))
* **eslint:** enable jest rules ([#29](https://github.com/americanexpress/eslint-config-amex/issues/29)) ([846bbf7](https://github.com/americanexpress/eslint-config-amex/commit/846bbf74a961db89dc8fc01a26091b4ad4845279))
* **eslint:** react/jsx quality of life rules ([#24](https://github.com/americanexpress/eslint-config-amex/issues/24)) ([facff92](https://github.com/americanexpress/eslint-config-amex/commit/facff92f00dca9a448ecec4c4769b1276ff73c55))
* **js:** additional js rules ([58df834](https://github.com/americanexpress/eslint-config-amex/commit/58df83406d01a391ae0b8e3f3ba98b99df68e9d9))
* **prettier:** add ([#45](https://github.com/americanexpress/eslint-config-amex/issues/45)) ([00cecaf](https://github.com/americanexpress/eslint-config-amex/commit/00cecafde5421f14db228f95eab7a9fb6985ba23))
* **unicorn:** update and seperate rules ([#43](https://github.com/americanexpress/eslint-config-amex/issues/43)) ([940eb66](https://github.com/americanexpress/eslint-config-amex/commit/940eb66bbf6d0e08d40a09b6c735f3c21c086f35))
* **unicorn/consistent-function-scoping:** disable ([#42](https://github.com/americanexpress/eslint-config-amex/issues/42)) ([54dd5a3](https://github.com/americanexpress/eslint-config-amex/commit/54dd5a3f8bb818db044b46cf5a43e6bbb1513b7c))


### BREAKING CHANGES

* **unicorn:** major update to unicorn
* **js:** no-lonely-if errors
* **js:** no-return-assign, errors
* **js:** prefer-object-spread, errors
* **js:** no-bitwise, errors

# [12.2.0](https://github.com/americanexpress/eslint-config-amex/compare/v12.1.0...v12.2.0) (2020-06-06)


### Features

* **eslint:** array includes is acceptable ([#34](https://github.com/americanexpress/eslint-config-amex/issues/34)) ([bdf92f1](https://github.com/americanexpress/eslint-config-amex/commit/bdf92f189a85521dd4a9d2eb869fed73ace37542))

# [12.1.0](https://github.com/americanexpress/eslint-config-amex/compare/v12.0.3...v12.1.0) (2020-06-05)


### Features

* **eslint:** spaced comment warn instead of error ([#37](https://github.com/americanexpress/eslint-config-amex/issues/37)) ([51c539d](https://github.com/americanexpress/eslint-config-amex/commit/51c539d56c23360ba5349fd56ad00fcb33ccb4ad))

## [12.0.3](https://github.com/americanexpress/eslint-config-amex/compare/v12.0.2...v12.0.3) (2020-06-02)


### Bug Fixes

* **eslint:** disable airbnb default props rules ([#27](https://github.com/americanexpress/eslint-config-amex/issues/27)) ([70936b8](https://github.com/americanexpress/eslint-config-amex/commit/70936b839e0c5779719e4436e4c1f431d1d01a48))

## [12.0.2](https://github.com/americanexpress/eslint-config-amex/compare/v12.0.1...v12.0.2) (2020-05-11)


### Bug Fixes

* **eslint:** react requires use of null ([#32](https://github.com/americanexpress/eslint-config-amex/issues/32)) ([bdf6800](https://github.com/americanexpress/eslint-config-amex/commit/bdf680074530eb4f1ae451f9ff57f1517adab44b))

## [12.0.1](https://github.com/americanexpress/eslint-config-amex/compare/v12.0.0...v12.0.1) (2020-05-07)


### Bug Fixes

* **eslint:** boolean prop naming ([#23](https://github.com/americanexpress/eslint-config-amex/issues/23)) ([a1f672c](https://github.com/americanexpress/eslint-config-amex/commit/a1f672cfc71c91385efcf88783f63f1d5a272a2e))

# [12.0.0](https://github.com/americanexpress/eslint-config-amex/compare/v11.2.0...v12.0.0) (2020-03-30)


### Features

* **deps:** update dependencies to latest version ([#16](https://github.com/americanexpress/eslint-config-amex/issues/16)) ([27ad145](https://github.com/americanexpress/eslint-config-amex/commit/27ad145bfbe85006c4a9742a3d9123e77894db0a))


### BREAKING CHANGES

* **deps:** Updates deps major versions

# [11.2.0](https://github.com/americanexpress/eslint-config-amex/compare/v11.1.0...v11.2.0) (2020-02-07)


### Features

* **index:** disable jsx-one-expression-per-line ([#8](https://github.com/americanexpress/eslint-config-amex/issues/8)) ([68e6d48](https://github.com/americanexpress/eslint-config-amex/commit/68e6d483b7c776cdd391584fceb16db2bf152579))
* **rules:** no-extra-parens ([#9](https://github.com/americanexpress/eslint-config-amex/issues/9)) ([a3afc72](https://github.com/americanexpress/eslint-config-amex/commit/a3afc72be9662aba04bda7a1854fd0a9268a658e))
