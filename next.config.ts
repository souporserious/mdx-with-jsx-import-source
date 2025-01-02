import createMDXPlugin from '@next/mdx'

const withMDX = createMDXPlugin({
  options: {
    jsxImportSource: 'restyle',
  },
})

export default withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
})
