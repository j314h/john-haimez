/**
 * interface for profile
 */
export interface Iprofile {
  '@id': string
  '@type': string
  id: number
  title: string
  subTitle: string
  description: string
  address: string
  tel: string
}

/**
 * interface response api for all profiles
 */
export interface IprofilesResponse {
  '@context': string
  '@id': string
  '@type': string
  'hydra:member': Iprofile[]
  'hydra:totalItems': number
}

export interface IprofileStore {
  profiles: Iprofile[]
  profile: Iprofile
}
