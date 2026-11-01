import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/seo'

/**
 * robots.txt
 *
 * Everyone may crawl the site except /api/. AI search and answer crawlers
 * are also named explicitly so the intent is unambiguous. Under RFC 9309 a
 * named group replaces the `*` group for that bot, so each one repeats the
 * /api/ exclusion.
 *
 * Training crawlers (GPTBot, ClaudeBot, Google-Extended, …) are not named,
 * so they follow `*`. Blocking them is a business policy choice, not an SEO
 * fix: add a `disallow: ['/']` group here if that is ever decided.
 *
 * A robots rule cannot fix a CDN or firewall block. ChatGPT search also
 * needs the host to accept the IP ranges in openai.com/searchbot.json.
 */
const AI_SEARCH_AGENTS = [
  'OAI-SearchBot', // ChatGPT search
  'ChatGPT-User', // pages a ChatGPT user asks it to open
  'PerplexityBot', // Perplexity search
  'Claude-SearchBot', // Claude search
  'Claude-User', // pages a Claude user asks it to open
  'Amzn-SearchBot', // Alexa / Amazon search
  'Applebot', // Siri and Spotlight
  'MistralAI-Index', // Le Chat search
  'Meta-WebIndexer', // Meta AI search
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/api/'] },
      { userAgent: AI_SEARCH_AGENTS, allow: '/', disallow: ['/api/'] },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
