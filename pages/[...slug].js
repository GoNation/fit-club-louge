import React from 'react';
import WithLayout from 'components/layout/WithLayout';
import { useEffect, useState } from 'react';
import componentFactory from 'components/ComponentFactory';
import client from 'tina/__generated__/client';
import { fetchPageData } from 'helpers/fetchPageData';
import { allLayouts } from 'layouts/index';

const DynamicPage = ({ pageData, pageContent, siteConfig, layout }) => {
  if (!pageData) {
    return <div>Page not found!</div>;
  }

  return (
    <div>
      {layout ? (
        layout.map((component, index) => (
          <React.Fragment key={index}>
            {componentFactory(component, pageContent, siteConfig)}
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

// export async function getStaticProps({ params }) {
//   const path =
//     params.slug && params.slug.length > 0 ? `/${params.slug.join('/')}` : '/';
//   return fetchPageData(path);
// }
export async function getStaticProps({ params }) {
  const path =
    params.slug && params.slug.length > 0 ? `/${params.slug.join('/')}` : '/';
  const data = await fetchPageData(path);

  return {
    ...data,
  };
}
