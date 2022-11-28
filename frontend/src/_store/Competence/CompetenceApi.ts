import { AppService, CompetenceStore } from '..'
import { AxiosService } from '../../shared/AxiosService'
import { EcompetenceCallApi } from '../../types'

export const CompetenceApi = {
  /**
   * get all
   */
  gets: async () =>
    AxiosService.findAll(
      EcompetenceCallApi.CALL_ALL,
      CompetenceStore.competences$,
    ),
}
