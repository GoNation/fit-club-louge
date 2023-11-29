import { Hero } from 'components/heros/Hero';
import ExpandableShout from 'components/shout/ExpandableShout';
import LargeContentContainer from 'components/story-components/LargeContentContainer';

import findMultipleStoriesByNames from 'helpers/findMultipleStoriesByNames';
import findStoryByName from 'helpers/findStoryByName';
import SideBySideImage from './story-components/SideBySideImage';
import ParallaxContentContainer from './ParallaxContentContainer';
import ClickableBoxes from './story-components/ClickableBoxes';
import GridBoxes from './ui/GridBoxes';
import CustomModal from './ui/CustomModal';
import Menu from './menu/Menu';
import Masonry from './gallery/Masonry';
import findStoriesByTag from 'helpers/general/findStoriesByTag';
import CustomForm from './ui/common/CustomForm';
import SimpleGrid from './story-components/SimpleGrid';
import ContactPageLayout from './ui/ContactPageLayout';
import InstagramWidget from './InstagramWidget';
import NFTShowcase from './story-components/NFTShowcase';
import CTAGrid from './story-components/CTAGrid';
import Events from './events/Events';
import MultiStoryHero from './story-components/MultiStoryHero';
import AlbumGallery from './AlbumGallery';
import HeroComponent from './HeroComponent';
import Sponsors from './Sponsors';
import BasicAbout from './BasicAbout';

const findEventById = (id, events) => {
  if (!events) return null;
  const allEvents = events.recurringEventsData.events.concat(
    events.specialEventsData.events
  );
  const foundItems = allEvents.find(event => event.id === id);
  return foundItems;
};

// componentConfig is the object with type, storyName, storyTags etc. commonData is the actual GN data
const componentFactory = (componentConfig, commonData, siteConfig) => {
  switch (componentConfig.type) {
    case 'Hero':
      return (
        <>
          <HeroComponent
            story={findStoryByName(
              componentConfig.storyName,
              commonData.storiesData.general
            )}
            event={
              componentConfig.eventId
                ? findEventById(componentConfig.id, commonData.eventsData)
                : null
            }
            showLogo={componentConfig.showLogo}
            business={commonData.aboutData}
            shout={commonData.shoutData?.shout}
            config={componentConfig.config}
            {...componentConfig}
          />
        </>
      );
    case 'ExpandableShout':
      return (
        <ExpandableShout
          shout={commonData.shoutData.shout}
          bg={componentConfig.bgFunction(commonData.aboutData)}
          {...componentConfig}
        />
      );
    case 'SideBySideImage':
      return (
        <SideBySideImage
          story={findStoryByName(
            componentConfig.storyName,
            commonData.storiesData.general
          )}
          //   todo replace data with story as this component should be able to take any data
          data={commonData.shoutData}
          config={componentConfig.config}
        />
      );
    case 'LargeContentContainer':
      return (
        <LargeContentContainer
          isMultiStoryCompatable={componentConfig.tagName}
          story={
            componentConfig.tagName
              ? findStoriesByTag(
                  componentConfig.tagName,
                  commonData.storiesData.general
                )
              : findStoryByName(
                  componentConfig.storyName,
                  commonData.storiesData.general
                )
          }
          config={componentConfig.config}
        />
      );
    case 'ParallaxContentContainer':
      return (
        <ParallaxContentContainer
          story={findStoryByName(
            componentConfig.storyName,
            commonData.storiesData.general
          )}
          config={componentConfig.config}
        />
      );
    case 'ClickableBoxes':
      return (
        <ClickableBoxes
          stories={findMultipleStoriesByNames(
            componentConfig.storyName,
            commonData.storiesData.general
          )}
        />
      );
    case 'GridBoxes':
      return (
        <GridBoxes
          stories={findMultipleStoriesByNames(
            componentConfig.storyName,
            commonData.storiesData.general
          )}
        />
      );
    case 'PressGrid':
      return (
        <SimpleGrid
          stories={findStoriesByTag(
            componentConfig.tagName,
            commonData.storiesData.general
          )}
        />
      );
    case 'CustomModal':
      return (
        <CustomModal
          story={findStoryByName(
            componentConfig.storyName,
            commonData.storiesData.general
          )}
          config={componentConfig.config}
        />
      );
    case 'menu':
      return (
        <>
          <Menu
            menuData={commonData.menuInventoryData[0]}
            mode={commonData?.menuInventoryData[0]?.mode}
          />
        </>
      );
    case 'Gallery':
      return (
        <Masonry
          data={commonData.galleryData}
          config={componentConfig.config}
        />
      );
    case 'CustomForm':
      return (
        <CustomForm
          title={componentConfig?.config?.title}
          fields={[
            { type: 'text', name: 'Name', placeholder: 'Name' },
            { type: 'tel', name: 'Phone', placeholder: 'Phone' },
            { type: 'email', name: 'Email', placeholder: 'Email' },
            { type: 'textarea', name: 'Message', placeholder: 'Your Message' },
            { type: 'file', name: 'Resume', placeholder: 'Upload Resume' },
          ]}
        />
      );
    case 'ContactPageLayout':
      return (
        <ContactPageLayout
          fields={componentConfig.config.fields}
          aboutData={commonData.aboutData}
          iframe={siteConfig?.iframeURL}
        />
      );
    case 'Instagram':
      return <InstagramWidget {...componentConfig.config} />;
    case 'NFTShowcase':
      return (
        <NFTShowcase
          {...componentConfig.config}
          data={
            // loop through componentConfig.config.pills and get the stories for each pill and pass it to the NFTShowcase component
            componentConfig.config.pills
              .map(pill => {
                return findStoriesByTag(pill, commonData.storiesData.general);
              })
              .flat()
          }
        />
      );
    case 'CTAGrid':
      return (
        <CTAGrid
          story={findStoryByName(
            componentConfig.storyName,
            commonData.storiesData.general
          )}
        />
      );
    case 'Events':
      return (
        <Events
          businessData={commonData.aboutData}
          singleEvents={commonData?.eventsData?.specialEventsData?.events}
          recurringEvents={commonData?.eventsData?.recurringEventsData?.events}
        />
      );
    case 'MultiStoryHero':
      return (
        <MultiStoryHero
          stories={findMultipleStoriesByNames(
            componentConfig.storyName,
            commonData.storiesData.general
          )}
          slideDuration={8000}
        />
      );
    case 'AlbumGallery':
      return (
        <AlbumGallery
          galleryData={commonData.galleryData}
          filteredOutAlbums={siteConfig?.filteredOutGalleryImages}
          {...componentConfig.config}
        />
      );
    case 'Sponsors':
      return <Sponsors />;
    case 'BasicAbout':
      return <BasicAbout business={commonData.aboutData} />;

    default:
      return null;
  }
};

export default componentFactory;
// commit
