export default {
	//普通-灵活职业发布、有序列表、详情
	ordinaryPublish: "/publish/auditNormalWorkJSON",
	ordinaryGetDetail: "/showDetail/getNormalWorkJSON",
	ordinaryGetActicleList: "/showOrder/orderGetNormalWorkJSON",
	ordinaryGetAllWork:"/admin/work/getAllNormalWorkJSON",
	
	emergingPublish: "/publish/auditNewWorkJSON",
	emergingGetDetail: "/showDetail/getNewWorkJSON",
	emergingGetActicleList: "/showOrder/orderGetNewWorkJSON",
	emergingGetAllWork:"/admin/work/getAllNewWorkJSON",
	
	//审核
	adminNormalView : "/admin/work/publishNormalWorkJSON",
	adminEmergingView : "/admin/work/publishNewWorkJSON",

	//城市
	getAllProvince:"/universal/city/getAllProvinceJSON",
	getAllCityByProvince:"/universal/city/getAllCityByProvinceJSON",
	getAllDistrictByCity:"/universal/city/getAllDistrictByCityJSON",
	getCityListByName:"/universal/city/getAllCityOrderByNameJSON",
	
	//职业、学历、类型
	createProfession:"/test/profession/createProfessionJSON",
	getAllProfession:"/test/profession/getAllProfessionJSON",
	getAllDegere:"/test/degree/getAllDegreeJSON",
	getAllType:"/test/type/getAllTypeJSON",
	
	//用户
	createUser:"/universal/user/createUserJSON",
	getUserOpenId :"/universal/user/getUserOpenIdJSON",
	
	//点赞更新接口
	updateLikeNum : "/update/updateWorkLikeNumJSON",
	
	//可信度
	credibilityOprater:"/update/updateWorkCredibilityJSON",
	
	//获取热门数据
	getHotWork:"/update/getHeatProfessionJSON",
	getHotCity:"/update/getHeatCityJSON"
}
