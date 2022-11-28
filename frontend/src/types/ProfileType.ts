import { Imedia, ImodelType } from '.'

/**
 * interface for model profile
 */
export interface Iprofile extends ImodelType<never> {
  title?: string
  subTitle?: string
  description?: string
  address?: string
  tel?: string
  media?: Imedia
}

/**
 * interface response for call api for getall
 */
export interface IprofilesResponseAxios extends ImodelType<Iprofile> {}

/**
 * enum for url of endpoint for call
 */
export enum EprofileCallApi {
  CALL_ALL = 'profiles',
  CALL_MEDIA_POST = 'media/profile',
  CALL_MEDIA_DELETE = 'media/delete/profile',
}

/**
 * type component for profile public
 */
export type TprofileDisplayPublic = {}
