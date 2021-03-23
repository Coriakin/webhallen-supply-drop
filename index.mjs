import fetch from 'node-fetch'
import { getAuthCookie, openSupplyDrop } from './io/webhallen.mjs'
import { hasSetupPushover } from './io/pushover.mjs'
import logger from './io/log.mjs'

(async () => {
  await openSupplyDrop(await getAuthCookie())
})()
