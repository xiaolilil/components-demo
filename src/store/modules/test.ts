import { defineStore } from 'pinia'
// import { IUserState } from '../types'
import { store } from '../index'

// import { useMainrStores } from './main'

// id: 'user',作为仓库ID 以区分仓库
const useTestStore = defineStore({
  id: 'test',
  state: () => {
    return {
      search_id: '',
      input: '',
    }
  },
  getters: {},
  actions: {
    saveData(payload: any) {
      this.search_id = payload.search_id
      this.input = payload.ipt
    },
  },
})

export default useTestStore
export function useTestStores() {
  return useTestStore(store)
}
