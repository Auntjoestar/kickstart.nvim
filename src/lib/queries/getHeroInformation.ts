import { query } from "../strapi";
import { remoteImageUrlMaker } from "../helpers/remoteImageUrlMaker";

const getHeroInformationQuery = `
query GetHero {
  home {
    hero {
      heading
      subheading
      background {
        url
        width
        height
      }
      callToAction
      callToAction2
      reason1,
      reason2,
      reason3
    }
  }
}
`;

export const getHeroInfo = async () => {
  const {
    home: { hero },
  } = await query(getHeroInformationQuery);

  console.log(hero);

  const {
    heading,
    subheading,
    background: { url, width, height },
    callToAction,
    callToAction2,
    reason1,
    reason2,
    reason3,
  } = hero;

  const remoteUrl = remoteImageUrlMaker(url);

  return {
    heading,
    subheading,
    remoteUrl,
    width,
    height,
    callToAction,
    callToAction2,
    reason1,
    reason2,
    reason3,
  };
};
