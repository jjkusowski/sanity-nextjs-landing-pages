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
                  buildHookId: '5f987e464eb4b7012b629cef',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-g86gg4cf',
                  apiId: '1490d891-24d9-4480-ad2a-b91113381b3e'
                },
                {
                  buildHookId: '5f987e46b8755e00815b8750',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-u2mn8qw2',
                  apiId: 'e847ed43-4c3c-4e7b-af9b-33b1ff617088'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jjkusowski/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-u2mn8qw2.netlify.app', category: 'apps'}
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
