# mdx-with-jsx-import-source

Reproduction of a bug with [mdx-analyzer](https://github.com/mdx-js/mdx-analyzer) not recognizing [`jsxImportSource` configuration](/tsconfig.json) in MDX files.

See [page.mdx](/app/page.mdx) in [site](/site) which showcases the bug where the `css` prop is not recognized by the MDX VS Code extension.

## Development

```bash
npm install
npm run dev
```
