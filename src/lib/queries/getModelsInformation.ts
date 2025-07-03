import { query } from "../strapi";
import { remoteImageUrlMaker } from "../helpers/remoteImageUrlMaker";

const getModelsInformationQuery = `
query allModels {
  models (sort: ["createdAt:asc"] ) {
    name
    shortDescription
    Banner {
      alternativeText
      url
      height
      width
    }
    bedrooms
    bathrooms
    area
  }
}
`;

interface Model {
  name: string;
  shortDescription: string;
  Banner: {
    alternativeText: string;
    url: string;
    height: number;
    width: number;
  };
  bedrooms: number;
  bathrooms: number;
  area: number;
}

export const getModelsInfo = async (): Promise<Model[]> => {
  const { models }: { models: [Model] } = await query(
    getModelsInformationQuery,
  );

  console.log(models);
  const modelsWithRemoteUrls = models.map((model) => {
    const remoteUrl = remoteImageUrlMaker(model.Banner.url);
    return {
      ...model,
      Banner: {
        ...model.Banner,
        url: remoteUrl,
      },
    };
  });

  console.log(modelsWithRemoteUrls);
  return modelsWithRemoteUrls;
};
