import sendPostRequest from "./sendPostRequest.js"
import router from "./route.js"

//新建职业
const createProfession = () => {

	// const userCode = {
	// 	code : '',
	// 	from:"WEI_XIN"
	// }
	// uni.login({
	//   provider: 'weixin',
	//   onlyAuthorize:true,
	//   success: function (loginRes) {
	//     console.log("loginRes.code",loginRes.code);
	// 	userCode.code = loginRes.code
	// 	const user = {
	// 		userName:"wudingxuan",
	// 		phone:15123301497,
	// 		code:userCode.code 
	// 	}
	// 	sendPostRequest(router.createUser,user,{
	// 		success(res) {
	// 			console.log('resUser',res)
	// 		},
	// 		fail() {}
	// 	},true)

	// 	sendPostRequest(router.getUserOpenId,userCode,{
	// 		success(res) {
	// 			console.log("resOpenID",res)
	// 			if(res.message === "success"){
	// 				console.log("openID",res)
	// 			}
	// 			else{}
	// 		},
	// 		fail() {}
	// 	},true)
	//   }
	// });

	// 职业接口
	// const profInfo = {
	// 	professionName : "市场｜销售",
	// 	type : "NORMAL"
	// }
	// sendPostRequest(router.createProfession,profInfo,{
	// 	success(res) {
	// 		console.log('res',res)
	// 	},
	// 	fail() {}
	// },true)

	//用户创造接口
	// const user = {
	// 	userName:"wangdz",
	// 	phone:15123301497,
	// 	code:userCode.code 
	// }
	// sendPostRequest(router.createUser,user,{
	// 	success(res) {
	// 		console.log('resUser',res)
	// 	},
	// 	fail() {}
	// },true)
}

//获取
const getAllProfession = () => {

	// 职业获取接口
	// const data = {
	// 	type:"NORMAL"
	// }
	// sendPostRequest(router.getAllProfession,data,{
	// 	success(res) {
	// 		console.log("resProfession",res)
	// 		if(res.message === "success"){
	// 			console.log("Profession",res)
	// 		}
	// 		else{}
	// 	},
	// 	fail() {}
	// },true)

	// openId获取接口
	// const userInfo = {
	// 	code:"wudingxuan",
	// 	from:"WEI_XIN"
	// }
	// sendPostRequest(router.getUserOpenId,userInfo,{
	// 	success(res) {
	// 		console.log("resOpenID",res)
	// 		if(res.message === "success"){
	// 			console.log("openID",res)
	// 		}
	// 		else{}
	// 	},
	// 	fail() {}
	// },true)

	//职业类型获取接口
	// sendPostRequest(router.getAllType,{},{
	// 	success(res) {
	// 		console.log("resType",res)
	// 		if(res.message === "success"){
	// 			console.log("Type",res)
	// 		}
	// 		else{}
	// 	},
	// 	fail() {}
	// },true)

	//学历获取接口
	// sendPostRequest(router.getAllDegere,{},{
	// 	success(res) {
	// 		console.log("resDegere",res)
	// 		if(res.message === "success"){
	// 			console.log("Degere",res)
	// 		}
	// 		else{}
	// 	},
	// 	fail() {}
	// },true)

	//有序列表接口-普通职业
	// const para = {
	// 	information:"测试",
	// 	cityIds:[440303]
	// }
	// sendPostRequest(router.ordinaryGetActicleList,para,{
	// 	success(res) {
	// 		console.log("resOrderNormal",res)
	// 		if(res.message === "success"){
	// 			console.log("OrderNormal",res)
	// 		}
	// 		else{}
	// 	},
	// 	fail() {}
	// },true)

	//有序列表接口-灵活职业
	// const para1 = {
	// 	information:"测试新兴"
	// }
	// sendPostRequest(router.emergingGetActicleList,para1,{
	// 	success(res) {
	// 		console.log("resOrderEmerging",res)
	// 		if(res.message === "success"){
	// 			console.log("OrderEmerging",res)
	// 		}
	// 		else{}
	// 	},
	// 	fail() {}
	// },true)

	//详情-普通职业
	// const workID = 	{
	// 	normalWork:11
	// }
	// sendPostRequest(router.ordinaryGetDetail,workID,{
	// 	success(res) {
	// 		console.log("resDetailNormal",res)
	// 		if(res.message === "success"){
	// 			console.log("DetailNormal",res)
	// 		}
	// 		else{}
	// 	},
	// 	fail() {}
	// },true)

	//详情-灵活职业
	// const workId = 	{
	// 	newWork:8
	// }
	// sendPostRequest(router.emergingGetDetail,workId,{
	// 	success(res) {
	// 		console.log("resDetailEmerging",res)
	// 		if(res.message === "success"){
	// 			console.log("DetailEmerging",res)
	// 		}
	// 		else{}
	// 	},
	// 	fail() {}
	// },true)

	//管理-获取全部普通职业状态
	// const allNormalWork = {
	// 	currentPage:1,
	// 	pageSize:5
	// }
	// sendPostRequest(router.ordinaryGetAllWork,allNormalWork,{
	// 	success(res) {
	// 		console.log("resAllNormalWork",res)
	// 		if(res.message === "success"){
	// 			console.log("allNormalWork",res)
	// 		}
	// 		else{}
	// 	},
	// 	fail() {}
	// },true)

	//管理-获取全部灵活职业状态
	// const allNewlWork = {
	// 	currentPage:1,
	// 	pageSize:5
	// }
	// sendPostRequest(router.emergingGetAllWork,allNewlWork,{
	// 	success(res) {
	// 		console.log("resAllNewlWork",res)
	// 		if(res.message === "success"){
	// 			console.log("allNewlWork",res)
	// 		}
	// 		else{}
	// 	},
	// 	fail() {}
	// },true)

	//点赞接口
	// const like = {
	// 	workId:8,
	// 	likeType:"LIKE",
	// 	workType:"NEW"
	// }
	// sendPostRequest(router.updateLikeNum,like,{
	// 	success(res) {
	// 		console.log("resLike",res)
	// 		if(res.message === "success"){
	// 			console.log("LIke",res)
	// 		}
	// 		else{}
	// 	},
	// 	fail() {}
	// },true)

	//可信度接口
	// const credibility = {
	// 	workId:7,
	// 	credibilityType:"BELIEVE",
	// 	workType:"NORMAL"
	// }

	// sendPostRequest(router.credibilityOprater,credibility,{
	// 	success(res) {
	// 		if(res.message === "success"){
	// 			console.log("credibility",res)
	// 		}
	// 		else{}
	// 	},
	// 	fail() {}
	// },true)

	//获取所有省份
	// sendPostRequest(router.getAllProvince,{},{
	// 	success(res) {
	// 		console.log("resAllProvince",res)
	// 		if(res.message === "success"){
	// 			console.log("AllProvince",res)
	// 		}
	// 		else{}
	// 	},
	// 	fail() {}
	// },true)

	//获取所有城市根据省
	// const province = {
	// 	province:440300
	// }
	// sendPostRequest(router.getAllCityByProvince,province,{
	// 	success(res) {
	// 		console.log("resAllCityByProvince",res)
	// 		if(res.message === "success"){
	// 			console.log("AllCityByProvince",res)
	// 		}
	// 		else{}
	// 	},
	// 	fail() {}
	// },true)

	//获取所有区县根据城市
	// const cityCode = {
	// 	city:440303
	// }
	// sendPostRequest(router.getAllDistrictByCity,cityCode,{
	// 	success(res) {
	// 		console.log("resAllDistrictByCity",res)
	// 		if(res.message === "success"){
	// 			console.log("AllDistrictByCity",res)
	// 		}
	// 		else{}
	// 	},
	// 	fail() {}
	// },true)
}


export {
	createProfession,
	getAllProfession
};