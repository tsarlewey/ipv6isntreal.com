import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const announcements = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/announcements" }),
  schema: z.object({
    title: z.string(),
    source: z.string(),
    url: z.string().url(),
    announcedAt: z.date(),
    severity: z.enum(['low', 'medium', 'high', 'critical']),
  }),
});

export const collections = { announcements };
