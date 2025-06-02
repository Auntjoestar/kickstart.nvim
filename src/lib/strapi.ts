const API_TOKEN = import.meta.env.STRAPI_API_TOKEN
const domain = import.meta.env.STRAPI_DOMAIN
const url = `${domain}/graphql`

export const query = async (query: string) => {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_TOKEN}`
        },
        body: JSON.stringify({
            query: query,
        })
    })

    if (!response.ok) throw new Error("Failed to fetch url.")

    const { data } = await response.json();

    console.log(JSON.stringify(data, null, 2));

    if (data.errors) {
        console.error("GraphQL Errors:", data.errors);
        throw new Error("GraphQL returned errors");
    }

    return data;
}