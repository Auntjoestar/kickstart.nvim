import { defineCollection, z } from "astro:content";

import { glob, file } from "astro/loaders";

const tebas = defineCollection({
	loader: glob({ pattern: "**/*.toml", base: "src/content/tebas" }),
	schema: ({ image }) => z.object({
		name: z.string(),
		shortDescription: z.string(),
		banner: image(),
		bannerAlt: z.string(),
		bannerWidth: z.number(),
		bannerHeight: z.number(),
		bedrooms: z.number(),
		bathrooms: z.number(),
		area: z.number(),
	},
	),
},
);

const blokon = defineCollection({
	loader: glob({ pattern: "**/*.toml", base: "src/content/blokon" }),
	schema: ({ image }) => z.object({
		name: z.string(),
		shortDescription: z.string(),
		banner: image(),
		bannerAlt: z.string(),
		bannerWidth: z.number(),
		bannerHeight: z.number(),
		bedrooms: z.number(),
		bathrooms: z.number(),
		area: z.number(),
	},
	),
})

const services = defineCollection({
	loader: glob({ pattern: "**/*.toml", base: "src/content/servicios" }),
	schema: ({ image }) => z.object({
		image: image(),
		title: z.string(),
		description: z.string(),
	})
})

export const collections = { tebas, blokon, services };
