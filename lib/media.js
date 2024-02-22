import {getStrapiURL} from "@/lib/api";

export function getStrapiMedia(media) {
    const { url } = media.data.attributes;
    return url.startsWith("/") ? getStrapiURL(url) : url;
}