import React from 'react';
import WithLayout from 'components/layout/WithLayout';
import { useEffect, useState } from 'react';
import componentFactory from 'components/ComponentFactory';
import client from 'tina/__generated__/client';
import { fetchPageData } from 'helpers/fetchPageData';

const DynamicPage = ({ pageData, pageContent }) => {
  const [layout, setLayout] = useState(null);

  useEffect(() => {
    if (pageData) {
      const attemptToImportConfigFile = layout => {
        try {
          return require(`layouts/index`)[layout];
        } catch (e) {
          console.error(e);
          return null;
        }
      };

      const layoutConfig =
        pageData.layout && attemptToImportConfigFile(pageData.layout);
      setLayout(layoutConfig);
    }
  }, [pageData]);

  if (!pageData) {
    return <div>Page not found!</div>;
  }

  return (
    <div>
      {layout ? (
        layout.map((component, index) => (
          <React.Fragment key={index}>
            {componentFactory(component, pageContent)}
          </React.Fragment>
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default WithLayout(DynamicPage);

export const getStaticPaths = async () => {
  const pagesListResponse = await client.queries.siteConfig({
    relativePath: 'config.json',
  });

  const paths = pagesListResponse.data.siteConfig.routes
    .filter(route => route.path !== '/')
    .map(page => ({
      params: {
        slug: page.path.split('/').filter(Boolean),
      },
    }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export async function getStaticProps({ params }) {
  const path =
    params.slug && params.slug.length > 0 ? `/${params.slug.join('/')}` : '/';
  return fetchPageData(path);
}
