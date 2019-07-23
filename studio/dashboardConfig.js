export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5d36d52decfdf25136bc9b84',
                  title: 'Sanity Studio',
                  name: 'sand-sanity-nextjs-studio',
                  apiId: '7ce160d7-7678-4c04-85c2-eef7a465ee0c'
                },
                {
                  buildHookId: '5d36d52da802ba450640c698',
                  title: 'Landing pages Website',
                  name: 'sand-sanity-nextjs',
                  apiId: 'c3cf16de-12fb-47fb-b386-272be3d0fb8b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pierissimo/sand-sanity-nextjs',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sand-sanity-nextjs.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
