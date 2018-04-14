import nunjucks from 'nunjucks'
const fs = require('fs')
const path = require('path')
// const defaultsDeep = require('lodash/defaultsDeep')
// const env = require('./nunjucks/env')
// const AutoEscapeExtension = require('./nunjucks/extensions/autoescape')
// const mapKeysToSnakeCase = require('zan-utils/string/mapKeysToSnakeCase')

let env = nunjucks.configure('server/views', {
  autoescape: true,
    // throwOnUndefined: !(NODE_ENV === 'production' || NODE_ENV === 'prod'),
    // throwOnUndefined: !(NODE_ENV === 'production' || NODE_ENV === 'prod'),
  throwOnUndefined: false,
  noCache: true
})

module.exports = () => {
  const config = {
    VERSION_MAP: '324234',
    NODE_ENV: 'development'
  }

  const loadCss = function (key, vendor = false, media = 'screen') {
    const keys = key.split('.')
    const realKey = vendor ? key : keys.length > 1 ? keys[1] : keys[0]
    const VERSION_MAP = config.VERSION_MAP
    const realVersionCss = (keys.length > 1 ? VERSION_MAP[keys[0]] : VERSION_MAP['version_css']) || {}
    const src = config.NODE_ENV === 'development' && !vendor ? `/${realKey}.css` : vendor ? `${config.CDN_PATH}/${realKey}` : `${config.CDN_PATH}/${realVersionCss[realKey]}`
    const linkStr = `<link rel="stylesheet" href="${src}" media="${media}">`

    return linkStr
  }

  const loadJs = function (key, vendor = false, crossorigin = false, ifAsync = false) {
    const keys = key.split('.')
    const realKey = vendor ? key : keys.length > 1 ? keys[1] : keys[0]
    const VERSION_MAP = config.VERSION_MAP
    const realVersionJs = keys.length > 1 ? VERSION_MAP[keys[0]] : VERSION_MAP['version_js']
    const src = config.NODE_ENV === 'development' && !vendor ? `/${realKey}.js` : vendor ? `${config.CDN_PATH}/${realKey}` : `${config.CDN_PATH}/${realVersionJs[realKey]}`
    let scriptStr = `<script onerror="_cdnFallback(this)" src="${src}" charset="utf-8"`
    scriptStr += ifAsync ? ' async ' : ''
    scriptStr += crossorigin ? ' crossorigin="anonymous" ' : ''
    scriptStr += '></script>'

    return scriptStr
  }

// const inlineJs = function (key) {
//   let result = '<script>'
//   const SERVER_ROOT = config.SERVER_ROOT
//   result += fs.readFileSync(path.resolve(SERVER_ROOT, `../${key}`), 'utf-8')
//   result += '</script>'
//   return result
// }
// const inlineCss = function (key) {
//   let result = '<style>'
//   result += fs.readFileSync(path.resolve(config.SERVER_ROOT, `../${key}`), 'utf-8')
//   result += '</style>'
//   return result
// }
  env.addGlobal('loadCss', loadCss)
// env.addGlobal('loadStyle', loadCss)
  env.addGlobal('loadJs', loadJs)
// env.addGlobal('loadScript', loadJs)
// env.addGlobal('inlineJs', inlineJs)
// env.addGlobal('inlineCss', inlineCss)

  return env
}
