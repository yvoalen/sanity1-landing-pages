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
                  buildHookId: '6194d312d6e409e93b4199f1',
                  title: 'Sanity Studio',
                  name: 'sanity-1-landing-pages-studio',
                  apiId: '4b6aa612-985e-4ee3-823c-38fc2e9008c1'
                },
                {
                  buildHookId: '6194d312d6e409eb08419db7',
                  title: 'Landing pages Website',
                  name: 'sanity-1-landing-pages',
                  apiId: '52e6e9e9-0e3e-4cc7-bcc6-ad8d4f9a56bf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/yvoalen/sanity1-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-1-landing-pages.netlify.app', category: 'apps'}
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
