import { AppService, CompetenceStore } from '..'
import { AxiosService } from '../../shared/AxiosService'
import { EcompetenceCallApi } from '../../types'

export const CompetenceApi = {
  /**
   * get all
   */
  gets: async () => {
    const res = await AxiosService.findAll(
      EcompetenceCallApi.CALL_ALL,
      CompetenceStore.competences$,
    )
    return res
  },
}
