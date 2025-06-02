import type { RemoteImageUrl } from "./remoteImageUrlMakerTypes"

export const remoteImageUrlMaker: RemoteImageUrl = (imageUrl) => {
    const remoteUrl = import.meta.env.STRAPI_DOMAIN
    return `${remoteUrl}${imageUrl}`
}