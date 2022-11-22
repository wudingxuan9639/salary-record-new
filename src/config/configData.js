//定义数据版本号
const VERSION = '0.0.1_20220407'

//热门城市列表--城市插件
const SET_HOT_LIST = ['北京市', '上海市', '广州市', '深圳市', '杭州市', '南京市', '武汉市', '天津市', '西安市']

//用于筛选页的城市数据
const SCREEN_CITY = ['北京市', '上海市', '广州市', '深圳市', '杭州市', '南京市', '武汉市', '天津市', '西安市']

//热搜词库--新兴
const HOT_EMERGING = {
	"data": [
		{
			"id": 1,
			"name": "抖音"
		},
		{
			"id": 2,
			"name": "快手"
		},
		{
			"id": 3,
			"name": "美团"
		},
		{
			"id": 4,
			"name": "B站"
		},
		{
			"id": 5,
			"name": "滴滴"
		},
		{
			"id": 6,
			"name": "饿了么"
		}
	]
}

//热搜词库--普通
const HOT_ORDINARY = {
	"data": [
		{
			"id": 1,
			"name": "腾讯"
		},
		{
			"id": 2,
			"name": "百度"
		},
		{
			"id": 3,
			"name": "美团"
		},
		{
			"id": 4,
			"name": "华为"
		},
		{
			"id": 5,
			"name": "字节跳动"
		},
		{
			"id": 6,
			"name": "阿里巴巴"
		},
		{
			"id": 7,
			"name": "科大讯飞"
		}
	]
}





export {
	SET_HOT_LIST,
	SCREEN_CITY,
	VERSION,
	HOT_EMERGING,
	HOT_ORDINARY
}