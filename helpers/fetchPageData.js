import client from 'tina/__generated__/client';
import fetchGoNationData from './fetchers/fetchGoNationData';

const fetchDataFlags = async (pageConfig, businessId, poweredId) => {
  let dataFlags = {};
  Object.keys(pageConfig.dataTypes).forEach(type => {
    dataFlags[type] = pageConfig.dataTypes[type];
  });

  // TODO: Adjust 'menuPL' value as needed or fetch it from CMS
  // We must include the businessId and/or the poweredId (if necessary) as params for
  return fetchGoNationData({ ...dataFlags, menuPL: 1, businessId, poweredId });
};

export const fetchPageData = async path => {
  const pagesToBeRendered = await client.queries.siteConfig({
    relativePath: 'config.json',
  });

  const { businessId, poweredId } = pagesToBeRendered?.data?.siteConfig;
  const cmsRoutes = pagesToBeRendered?.data?.siteConfig?.routes;

  // Ensure the path is in the correct format
  const pageConfig = cmsRoutes.find(route => route.path === path);

  if (!pageConfig) return { notFound: true }; // Return not found if pageConfig is not found

  let pageData = {};
  if (pageConfig.fetchingStrategy === 'static') {
    pageData = await fetchDataFlags(pageConfig, businessId, poweredId);
  }

  return {
    props: {
      pageData,
      pageConfig,
      pageContent: pageData,
      routes: cmsRoutes,
      siteConfig: pagesToBeRendered?.data?.siteConfig,
    },
  };
};
