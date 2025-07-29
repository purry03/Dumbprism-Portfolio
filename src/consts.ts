export type Site = {
  TITLE: string
  DESCRIPTION: string
  EMAIL: string
  NUM_POSTS_ON_HOMEPAGE: number
  POSTS_PER_PAGE: number
  SITEURL: string
}

export type Link = {
  href: string
  label: string
}

export const SITE: Site = {
  TITLE: 'rohan-sharma.de',
  DESCRIPTION:
    'a work in (parallel) progress',
  EMAIL: 'rohan.sharma@mail.de',
  NUM_POSTS_ON_HOMEPAGE: 1,
  POSTS_PER_PAGE: 4,
  SITEURL: 'https://rohan-sharma.de/',
}

export const NAV_LINKS: Link[] = [
  { href: '/', label: 'home' },
  { href: '/blog', label: 'blog' },
]

export const SOCIAL_LINKS: Link[] = [
  { href: 'https://github.com/purry03', label: 'GitHub' },
  { href: 'https://twitter.com/dumbprism', label: 'Twitter' },
  { href: 'rohan.sharma@mail.de', label: 'Email' },
  
]
