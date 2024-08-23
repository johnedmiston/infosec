
export type LinkCategory = {
  name: string
  links: Link[]
  categories: LinkCategory[]
}

export type Link = {
  name: string
  url: string
  description?: string
}
