import {
    createClient,
} from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'
// import { useCurrentUser } from "@sanity/base/hooks";


export const Config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'neje4eti',
    apiVersion: "2021-03-25",
    useCdn: process.env.NODE_ENV === "production"
}

export const sanityClient = createClient(Config);
export const urlFor = (source: any) => createImageUrlBuilder(Config).image(source);