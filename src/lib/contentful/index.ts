import { appSettings } from '@/config/app'
import * as contentful from 'contentful'
import type * as Contentful from 'contentful'

export const contentfulClient = contentful.createClient({
  space: appSettings.contentful.space,
  accessToken: appSettings.contentful.token,
  host: appSettings.contentful.host,
})

export function getEntry <T extends Contentful.EntrySkeletonType>(entry: string, query?: contentful.EntryQueries<undefined>) {
  return contentfulClient.getEntry<T>(entry, {
    ...(query || {}),
    locale: 'pt-BR'
  }) as Promise<any>
}