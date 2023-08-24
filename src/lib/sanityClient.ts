import { createClient } from "next-sanity";

import { dataset, apiVersion, useCdn, projectId } from "../../sanity/env";

export const client = createClient({
    apiVersion: '2023-08-21',
    dataset: 'production',
    projectId: 'h2gvvr68',
    token: 'sktp55P8DF2T1dLG1Z9l83TRXmX6gLqBT1VxyJ0SmeDpBN91o6wUTbyaO74XQbxD0gjR4M58mUiLD2P3USbi3SOyrVl8vdwfTSVH5KJyywvs0fUrRcbOq0yTS4cY0FXV6EyvWOPjJKCPKKO8QlEhzE9J19S6wEiDNUGvqe1T9jKvHJ08rYaS',
    useCdn: true,
})