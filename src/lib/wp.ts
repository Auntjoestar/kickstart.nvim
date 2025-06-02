import { getHeroInformationQuery } from "./queries/getHeroInformation.ts"

const domain = import.meta.env.WP_DOMAIN;
const user = import.meta.env.WP_USER;
const password = import.meta.env.WP_PASSWORD;
const graphApiURL = `${domain}/graphql`;

const encodeBase64 = (str: string) =>
    typeof window === 'undefined'
        ? Buffer.from(str).toString('base64') // Node
        : btoa(str);                         // Browser


export const getHeroInformation = async () => {
    console.log(user)
    console.log(password)
    console.log(graphApiURL)
    const response = await fetch(graphApiURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Basic ${encodeBase64(`${user}:${password}`)}`
        },
        body: JSON.stringify({
            query: getHeroInformationQuery,
        })
    })


    if (!response.ok) throw new Error(`Failed to fetch hero information: ${response.status}`);

    const { data } = await response.json();
    if (data.errors) {
        console.error("GraphQL Errors:", data.errors);
        throw new Error("GraphQL returned errors");
    }

    console.log(JSON.stringify(data, null, 2));


    const {
        headline,
        subheading,
        image: {
            node: {
                filePath,
                altText,
                mediaDetails: {
                    height,
                    width,
                },
            },
        },
        cta_button_text,
        cta_link,
    } = data.page.hero;

    const sourceUrl = `${domain}${filePath}`

    const hero = {
        headline,
        subheading,
        sourceUrl,
        height,
        width,
        altText,
        cta_button_text,
        cta_link,
    }


    return hero;
}
