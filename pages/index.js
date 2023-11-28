import React from 'react';
import WithLayout from 'components/layout/WithLayout';
import { homepageLayout } from 'layouts';
import componentFactory from 'components/ComponentFactory';
import { fetchPageData } from 'helpers/fetchPageData';

const HomePage = ({ pageContent, pageConfig }) => {
  return (
    <>
      {homepageLayout.map((componentConfig, index) => (
        <React.Fragment key={index}>
          {componentFactory(componentConfig, pageContent)}
        </React.Fragment>
      ))}
    </>
  );
};

export default WithLayout(HomePage);

export async function getStaticProps() {
  const path = '/';
  const data = await fetchPageData(path);
  return { props: { ...data.props } }; // Or just return data if fetchPageData returns the right format
}
