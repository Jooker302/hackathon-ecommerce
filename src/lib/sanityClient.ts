import { createClient } from "next-sanity";

import { dataset, apiVersion, useCdn, projectId } from "../../sanity/env";

export const client = createClient({
    apiVersion: '2023-08-21',
    dataset: 'production',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    token: process.env.SANITY_ACCESS_TOKEN,
    useCdn: true,
})