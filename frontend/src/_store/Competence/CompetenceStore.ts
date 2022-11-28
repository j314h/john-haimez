import { BehaviorSubject } from 'rxjs'
import { Icompetence } from '../../types'

export const CompetenceStore = {
  // list of competences
  competences$: new BehaviorSubject<Icompetence[]>([]),
}
