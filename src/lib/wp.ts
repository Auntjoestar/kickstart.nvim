import { getHeroInformationQuery } from "./queries/getHeroInformation.ts"

const domain = import.meta.env.WP_DOMAIN;
const graphApiURL = `${domain}/graphql`;

export const getHeroInformation = async () => {
    console.log(graphApiURL)
    const response = await fetch(graphApiURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            query: getHeroInformationQuery,
        })
    });

    if (!response.ok) throw new Error("Failed to fetch hero information.");

    const data = await response.json();

    console.log(data);

    return data;
}
