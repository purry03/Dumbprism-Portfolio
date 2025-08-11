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
  { href: 'https://gitlab.com/sharmarohan', label: 'Gitlab' },
  { href: 'https://www.linkedin.com/in/roh9n', label: 'LinkedIn' },
  { href: 'rohan.sharma@mail.de', label: 'Email' },
  
]
