import sendPostRequest from "./sendPostRequest";
import router from './route.js';
import { VERSION } from '../config/configData.js';
import CITY_DATA from '../config/allCityData.js';
import { ENV } from '../config/MAKRDATA.js'

//城市检索的首字母
const LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z"]

//获取城市数据
const getCityList = () => {
	return new Promise(resolve => {
		if (ENV !== 'self') {
			sendPostRequest(router.getCityListByName, {}, {
				success(res) {
					if (res.message === "success") {
						resolve(res)
					}
					else {
					}
				},
				fail() {
				}
			}, true)
		}
		else {
			resolve(CITY_DATA)
		}
	})
}

//缓存数据以及版本号
const finalUsedCityList = () => {
	const version = uni.getStorageSync('VERSION')
	const allCityList = uni.getStorageSync('allCityList')
	if (version && allCityList) {
		if (version === VERSION) {
			return uni.getStorageSync('allCityList');
			console.log("gg".cityList)
		} else {
			let cityList;
			getCityList().then(res => {
				cityList = res.data;
				console.log("gg",cityList)
			})
			uni.clearStorageSync();
			uni.setStorageSync('allCityList', cityList);
			uni.setStorageSync('VERSION', VERSION);
			return cityList
		}
	} else {
		let cityList;
		uni.setStorageSync('VERSION', VERSION);
		getCityList().then(res => {
			cityList = res.data;
			uni.setStorageSync('allCityList', cityList);
		})
		return cityList;
	}
}

// 城市名按首字母分组
const getCityListSortedByInitialLetter = () => {
	const CITY_LIST = uni.getStorageSync('allCityList');
	const cityListSortedByInitialLetter = LETTERS.map(
		letter => ({
			initial: letter,
			cityInfo: Array.isArray(CITY_LIST[letter]) && CITY_LIST[letter].length && CITY_LIST[letter].map(item => {
				const resCityList = {};
				resCityList.city = item.cityName;
				resCityList.cityCode = item.id;
				return resCityList
			})
		})
	)
	return cityListSortedByInitialLetter;
}

//用于搜索的城市数据格式
const editCityDataUsedForSerach = () => {
	const allCityList = uni.getStorageSync('allCityList');
	const CITY_LIST = []
	for (let letter in allCityList) {
		if (allCityList[letter].length > 0) {
			allCityList[letter].map(cityData => {
				CITY_LIST.push({
					city: cityData.cityName,
					cityCode: cityData.id
				})
			})
		}
	}
	return CITY_LIST
}

//通过城市名称查询城市信息
const getCityInfoByName = (cityName) => {
	const searchCityList = getCityListSortedByInitialLetter();
	let resCity;
	searchCityList.forEach(item => {
		let list = Array.isArray(item.cityInfo) && item.cityInfo.filter(info => info.city === cityName)
		if (list.length) resCity = list
	})
	return resCity;
}

//生成城市数据包含的数组
const addHotCity = (cityArray) => {
	const HOT_CITY_LIST = []
	Array.isArray(cityArray) && cityArray.forEach(item => {
		const hotCity = getCityInfoByName(item)
		if (hotCity) {
			HOT_CITY_LIST.push(hotCity[0])
		}
	})
	return HOT_CITY_LIST
}

//popup城市数据结构
const getPopCityList = () => {
	const cityList = getCityListSortedByInitialLetter();
	const useList = cityList.map(item => ({
		letter: item.initial,
		data: item.cityInfo.map(item => item.city)
	}))
	return useList;
}

export {
	getCityList,
	getCityInfoByName,
	getCityListSortedByInitialLetter,
	finalUsedCityList,
	editCityDataUsedForSerach,
	addHotCity,
	LETTERS,
	getPopCityList
};

