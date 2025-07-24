import  startTracking  from './core'
import type { Config } from './types'
export * from './types'
export  function initInspector(config: Config) {
  startTracking(config)
  

}
