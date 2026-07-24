# Dax documentation

The documentation site for **[Dax](https://getdax.app)** — a macOS menu-bar app
with fourteen small tools, each a keystroke away.

Built with [Mintlify](https://mintlify.com) (`willow` theme).

## Structure

- `docs.json` — site config: theme, colors, navigation, logos
- `index.mdx`, `quickstart.mdx`, `shortcuts.mdx` — getting started
- `tools/` — one page per tool
- `logo/`, `favicon.svg` — brand assets

## Develop

Install the [Mintlify CLI](https://www.npmjs.com/package/mint):

```bash
npm i -g mint
```

Then, from the repo root (where `docs.json` lives):

```bash
mint dev            # preview at http://localhost:3000
mint broken-links   # check internal links
```

## Publish

Changes deploy automatically when pushed to the default branch, via the
[Mintlify GitHub app](https://dashboard.mintlify.com/settings/organization/github-app).

## Troubleshooting

- Dev server won't start: run `mint update` to get the latest CLI.
- A page 404s: make sure you're running from the folder that contains `docs.json`.
