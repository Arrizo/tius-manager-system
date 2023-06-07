import { createPinia } from 'pinia'
import useUserStore from './modules/user'
import useAppStore from './modules/app'
import useTestStore from './modules/test'
const pinia = createPinia()
export { useUserStore,useAppStore,useTestStore }
export default pinia