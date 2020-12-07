export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fce8116f52afc00dca4b2e4',
                  title: 'Sanity Studio',
                  name: 'georgebutler-github-io-studio',
                  apiId: '91716848-3ba7-4a2b-b721-e8060f8a44dd'
                },
                {
                  buildHookId: '5fce811671884d01281c8d29',
                  title: 'Blog Website',
                  name: 'georgebutler-github-io',
                  apiId: 'a529b902-63bf-4e5e-a4bf-1c31060133a4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/georgebutler/georgebutler.github.io',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://georgebutler-github-io.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
