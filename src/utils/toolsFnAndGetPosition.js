import { LETTERS } from './cityListTools.js'

const config = {
  key: "WPEBZ-BPM6O-RH2WA-S2MWT-LQ6JJ-OYBZH"
}

// API
const getLocationUrl = (latitude, longitude) => (`https://apis.map.qq.com/ws/geocoder/v1/?location=${latitude},${longitude}&key=${config.key}`)

/**
 * 安全地在深层嵌套对象中取值
 * get deeply nested data from an object safely, return null if not found
 * @param {Array} keyList an Array of keys
 * @param {Object} obj 
 */
const safeGet = (keyList, obj) => keyList.reduce((preValue, curKey) => ((preValue && preValue[curKey]) ? preValue[curKey] : null), obj)

const isNotEmpty = array => (Array.isArray(array) && array.length > 0)

const isChinese = str => (/^[\u4e00-\u9fa5]+$/.test(str))

const getSlicedName = (cityObj, key, sliceLen) => (cityObj[key] && cityObj[key].slice(0, sliceLen))

const onFail = (err) => { console.log(err) } // add your logic here e.g. show a toast

export default {
  getLocationUrl,
  safeGet,
  isNotEmpty,
  isChinese,
  getSlicedName,
  onFail,
}
