import {
  storiesFetch,
  aboutFetch,
  poweredImagesFetch,
  shoutFetch,
  eventFetch,
  menuInventoryFetch,
  galleryFetch,
} from '.';
const fetchGoNationData = async params => {
  const {
    about,
    stories,
    events,
    menuInventory,
    shout,
    gallery,
    poweredImages,
    menuPL,
    multiBusiness,
    businessId,
    poweredId,
    useJSONP,
  } = params;

  let aboutData = {},
    storiesData = {},
    eventsData = {},
    menuInventoryData = {},
    shoutData = {},
    galleryData = {},
    poweredImagesData = {},
    multiBusinessData = {};

  if (stories) {
    try {
      storiesData = await storiesFetch(businessId);
    } catch (e) {
      storiesData = {
        error: e,
      };
    }
  }

  if (poweredImages) {
    try {
      poweredImagesData = await poweredImagesFetch(poweredId || businessId);
    } catch (e) {
      poweredImagesData = {
        error: e,
      };
    }
  }

  if (about) {
    try {
      aboutData = await aboutFetch(poweredId || businessId);
    } catch (e) {
      aboutData = {
        error: e,
      };
    }
  }

  if (shout) {
    try {
      shoutData = await shoutFetch(poweredId || businessId, useJSONP);
    } catch (e) {
      shoutData = {
        error: e,
      };
    }
  }

  if (events) {
    try {
      eventsData = await eventFetch(poweredId || businessId);
    } catch (e) {
      eventsData = {
        error: e,
      };
    }
  }

  if (menuInventory) {
    try {
      menuInventoryData = await menuInventoryFetch(
        poweredId || businessId,
        menuPL
      );
    } catch (e) {
      menuInventoryData = {
        error: e,
      };
    }
  }

  if (gallery) {
    try {
      galleryData = await galleryFetch(poweredId || businessId);
    } catch (e) {
      galleryData = {
        error: e,
      };
    }
  }

  if (multiBusiness) {
    try {
      const requests = multiBusiness.map(id => aboutFetch(id));
      multiBusinessData = await Promise.all(requests);
    } catch (e) {
      multiBusinessData = {
        error: e,
      };
    }
  }

  const filterStoriesData = stories => {
    // Iterate over each key in the stories object (team, press, general)
    const filteredStories = Object.keys(stories).reduce((acc, key) => {
      // Map through each story in the array and remove the business key
      acc[key] = stories[key].map(({ business, ...rest }) => rest);
      return acc;
    }, {});

    return filteredStories;
  };

  return {
    storiesData: filterStoriesData(storiesData),
    poweredImagesData,
    aboutData: {
      ...aboutData,
      businessId: businessId,
    },
    shoutData,
    eventsData,
    menuInventoryData,
    galleryData,
    multiBusinessData,
  };
};

export default fetchGoNationData;
