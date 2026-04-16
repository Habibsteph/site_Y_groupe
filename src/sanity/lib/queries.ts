import { groq } from "next-sanity";

export const PROJECTS_QUERY = groq`
  *[_type == "project"] | order(year desc){
    _id,
    title,
    "slug": slug.current,
    category,
    summary,
    client,
    year,
    poles,
    services,
    heroTitle,
    challenge,
    solution,
    result,

    coverImage{
      ...,
      asset->
    },

    gallery[]{
      ...,
      asset->
    },

    stats,

    videos[]{
      source,
      format,
      url,
      caption,
      poster{
        ...,
        asset->
      },
      file{
        asset->{
          _id,
          url,
          originalFilename,
          mimeType
        }
      }
    }
  }
`;

export const PROJECT_BY_SLUG_QUERY = groq`
  *[_type == "project" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    category,
    summary,
    client,
    year,
    poles,
    services,
    heroTitle,
    description,
    challenge,
    solution,
    result,

    coverImage{
      ...,
      asset->
    },

    gallery[]{
      ...,
      asset->
    },

    stats,

    videos[]{
      source,
      format,
      url,
      caption,
      poster{
        ...,
        asset->
      },
      file{
        asset->{
          _id,
          url,
          originalFilename,
          mimeType
        }
      }
    }
  }
`;