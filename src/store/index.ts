import type { App } from 'vue'
import { createPinia } from 'pinia'
// import { useUserStores } from './modules/user'
import { useTestStores } from './modules/test'

import piniaPersist from 'pinia-plugin-persist'

const store = createPinia()

const usePinia = () => ({
  // user: useUserStores(),
  test: useTestStores(),
})
export default usePinia

export function setupPinia(app: App<Element>) {
  store.use(piniaPersist)
  app.use(store)
}
export { store }
