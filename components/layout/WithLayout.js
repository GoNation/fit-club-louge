// React and Next imports
import React from 'react';
import { useRouter } from 'next/router';

// Component imports
import Navigation from './navigation';
import Footer from './footer';
import PageHero from 'components/heros/PageHero';
import PageHead from './PageHead';
import CallDirections from 'components/ui/CallDirections';

// Utility and helper imports
import buildAvatar from 'helpers/general/buildAvatar';
import { retrievePageHeroImage } from 'helpers';
import RioFooter from './RioFooter';
import ShoutModal from 'components/ui/ShoutModal';
import { ModalProvider } from 'hooks/useModal';
const WithLayout = Component => {
  return function WrappedComponent(props) {
    const { pathname, asPath } = useRouter();

    // Data destructuring
    const { poweredImagesData = null, aboutData } = props.pageData || {};

    // Page specific data
    const pageData = props.pageConfig;

    const pageTitle = `${pageData?.name} | ${aboutData?.name}` || pathname;
    const seoPageTitle = pageData?.seoPageTitle || pageTitle;
    const pageDescription = pageData?.pageDescription || aboutData?.desc;
    const customPageHero = pageData?.customPageHero || null;
    const hidePageHero = pageData?.hidePageHero || false;
    const pageHeroTitle = pageData?.customPageHeroTitle || pageData?.name || '';
    const visiblePageDescription = pageData?.visiblePageDescription;

    const retrievedPoweredImage =
      customPageHero &&
      retrievePageHeroImage(pathname, customPageHero, poweredImagesData);
    const cloudinaryId = retrievedPoweredImage?.cloudinaryId || null;
    return (
      <ModalProvider>
        <PageHead
          title={seoPageTitle || pageTitle}
          description={pageDescription}
          avatar={buildAvatar(aboutData)}
          image={`https://res.cloudinary.com/gonation/w_400/q_auto/f_auto/${cloudinaryId}`}
          domain={pageData?.domain || null}
        />
        <Navigation
          business={aboutData}
          navLayout={
            props?.siteConfig?.navigationSettings?.navLayout || 'stacked'
          }
          navPosition={
            props?.siteConfig?.navigationSettings?.navPosition || 'fixed'
          }
          key={pathname}
          routes={props?.routes || []}
          navigationSettings={props?.siteConfig?.navigationSettings || {}}
        />
        {/* <CallDirections business={aboutData} /> */}
        {!hidePageHero && (
          <PageHero
            key={asPath}
            img={retrievePageHeroImage(
              pathname,
              customPageHero,
              poweredImagesData
            )}
            pageTitle={pageHeroTitle}
            description={visiblePageDescription}
          />
        )}

        <main className={pageData?.name}>
          <Component {...props} pageData={pageData} />
        </main>
        <RioFooter business={aboutData} />
        <ShoutModal />
      </ModalProvider>
    );
  };
};

export default WithLayout;
