//全局配置变量为self时使用MOCK数据，反之为接口数据（'prod'）
export const ENV = 'sel'

export const ORDINARY = {
    "code": 200,
    "message": "success",
    "data": {
        "totalCount": 3,
        "totalPage": 1,
        "currentPage": 1,
        "pageSize": 5,
        "data": [
            {
                "id": 1,
                "company": "字节跳动",
                "post": "数据产品实习",
                "city": {
                    "id": 110100,
                    "cityName": "北京",
                    "cityPreId": null,
                    "UpdateTime": null,
                    "cityTotalNum": null,
                    "updateTime": null
                },
                "salaryNum": 0,
                "salaryStr": "3.6k",
                "salaryRange": "3.6k",
                "type": {
                    "id": 2,
                    "typeName": "实习"
                },
                "degree": {
                    "id": 4,
                    "degreeName": "本科"
                },
                "profession": {
                    "id": 2,
                    "professionName": "计算机",
                    "status": 1
                },
                "user": {
                    "id": 1,
                    "userName": "wzd",
                    "openId": null,
                    "phone": 1222,
                    "openidWx": null
                },
                "explain": null,
                "status": null,
                "from": null,
                "createTime": null,
                "lookCount": 1,
                "likeCount": 1,
                "credibility": null
            },
            {
                "id": 2,
                "company": "网易互娱",
                "post": "游戏策划",
                "city": {
                    "id": 610100,
                    "cityName": "杭州",
                    "cityPreId": null,
                    "UpdateTime": null,
                    "cityTotalNum": null,
                    "updateTime": null
                },
                "salaryNum": 0,
                "salaryStr": "20.5k",
                "salaryRange": "122",
                "type": {
                    "id": 3,
                    "typeName": "校招"
                },
                "degree": {
                    "id": 4,
                    "degreeName": "硕士及以上"
                },
                "profession": null,
                "user": {
                    "id": 1115,
                    "userName": "wangdz",
                    "openId": null,
                    "phone": 15123301497,
                    "openidWx": null
                },
                "explain": "16薪+房补1.5k+各种福利",
                "status": null,
                "from": null,
                "createTime": null,
                "lookCount": 16,
                "likeCount": 0,
                "credibility": null
            },
            {
                "id": 3,
                "company": "腾讯CSIG智慧出行",
                "post": "后台开发实习生",
                "city": {
                    "id": 610100,
                    "cityName": "北京市",
                    "cityPreId": null,
                    "UpdateTime": null,
                    "cityTotalNum": null,
                    "updateTime": null
                },
                "salaryNum": 0,
                "salaryStr": "7k",
                "salaryRange": "14115",
                "type": {
                    "id": 2,
                    "typeName": "实习"
                },
                "degree": {
                    "id": 5,
                    "degreeName": "硕士及以上"
                },
                "profession": null,
                "user": {
                    "id": 1115,
                    "userName": "wangdz",
                    "openId": null,
                    "phone": 15123301497,
                    "openidWx": null
                },
                "explain": "加油包5k一次性发放，外地交通补贴2k 住房补贴2k",
                "status": null,
                "from": null,
                "createTime": null,
                "lookCount": 0,
                "likeCount": 8,
                "credibility": null
            },{
                "id": 4,
                "company": "腾讯",
                "post": "产品运营实习生",
                "city": {
                    "id": 610100,
                    "cityName": "深圳市",
                    "cityPreId": null,
                    "UpdateTime": null,
                    "cityTotalNum": null,
                    "updateTime": null
                },
                "salaryNum": 0,
                "salaryStr": "5k",
                "salaryRange": "14115",
                "type": {
                    "id": 2,
                    "typeName": "实习"
                },
                "degree": {
                    "id": 5,
                    "degreeName": "硕士及以上"
                },
                "profession": null,
                "user": {
                    "id": 1115,
                    "userName": "wangdz",
                    "openId": null,
                    "phone": 15123301497,
                    "openidWx": null
                },
                "explain": "第一个页中转酒店+交通补贴+住房补贴2k，加油包5k随第二个月工资发放",
                "status": null,
                "from": null,
                "createTime": null,
                "lookCount": 0,
                "likeCount": 8,
                "credibility": null
            },
			{
			    "id": 5,
			    "company": "深信服",
			    "post": "go语言开发",
			    "city": {
			        "id": 610100,
			        "cityName": "深圳市",
			        "cityPreId": null,
			        "UpdateTime": null,
			        "cityTotalNum": null,
			        "updateTime": null
			    },
			    "salaryNum": 0,
			    "salaryStr": "13k",
			    "salaryRange": "14115",
			    "type": {
			        "id": 3,
			        "typeName": "校招"
			    },
			    "degree": {
			        "id": 5,
			        "degreeName": "硕士及以上"
			    },
			    "profession": null,
			    "user": {
			        "id": 1115,
			        "userName": "wangdz",
			        "openId": null,
			        "phone": 15123301497,
			        "openidWx": null
			    },
			    "explain": "",
			    "status": null,
			    "from": null,
			    "createTime": null,
			    "lookCount": 0,
			    "likeCount": 8,
			    "credibility": null
			},
			{
			    "id": 6,
			    "company": "中国移动杭州研发中心",
			    "post": "开发岗",
			    "city": {
			        "id": 610100,
			        "cityName": "杭州市",
			        "cityPreId": null,
			        "UpdateTime": null,
			        "cityTotalNum": null,
			        "updateTime": null
			    },
			    "salaryNum": 0,
			    "salaryStr": "15k",
			    "salaryRange": "14115",
			    "type": {
			        "id": 3,
			        "typeName": "校招"
			    },
			    "degree": {
			        "id": 5,
			        "degreeName": "硕士及以上"
			    },
			    "profession": null,
			    "user": {
			        "id": 1115,
			        "userName": "wangdz",
			        "openId": null,
			        "phone": 15123301497,
			        "openidWx": null
			    },
			    "explain": "",
			    "status": null,
			    "from": null,
			    "createTime": null,
			    "lookCount": 0,
			    "likeCount": 8,
			    "credibility": null
			},
			{
			    "id": 7,
			    "company": "大疆",
			    "post": "嵌入式工程师",
			    "city": {
			        "id": 610100,
			        "cityName": "深圳",
			        "cityPreId": null,
			        "UpdateTime": null,
			        "cityTotalNum": null,
			        "updateTime": null
			    },
			    "salaryNum": 0,
			    "salaryStr": "30k",
			    "salaryRange": "14115",
			    "type": {
			        "id": 3,
			        "typeName": "校招"
			    },
			    "degree": {
			        "id": 5,
			        "degreeName": "硕士及以上"
			    },
			    "profession": null,
			    "user": {
			        "id": 1115,
			        "userName": "wangdz",
			        "openId": null,
			        "phone": 15123301497,
			        "openidWx": null
			    },
			    "explain": "15薪",
			    "status": null,
			    "from": null,
			    "createTime": null,
			    "lookCount": 0,
			    "likeCount": 8,
			    "credibility": null
			},
			{
			    "id": 8,
			    "company": "大疆创新",
			    "post": "力学工程师",
			    "city": {
			        "id": 610100,
			        "cityName": "深圳市",
			        "cityPreId": null,
			        "UpdateTime": null,
			        "cityTotalNum": null,
			        "updateTime": null
			    },
			    "salaryNum": 0,
			    "salaryStr": "26k",
			    "salaryRange": "14115",
			    "type": {
			        "id": 3,
			        "typeName": "校招"
			    },
			    "degree": {
			        "id": 5,
			        "degreeName": "硕士及以上"
			    },
			    "profession": null,
			    "user": {
			        "id": 1115,
			        "userName": "wangdz",
			        "openId": null,
			        "phone": 15123301497,
			        "openidWx": null
			    },
			    "explain": "15薪",
			    "status": null,
			    "from": null,
			    "createTime": null,
			    "lookCount": 0,
			    "likeCount": 8,
			    "credibility": null
			},
			{
			    "id": 9,
			    "company": "字节跳动",
			    "post": "hr招聘",
			    "city": {
			        "id": 610100,
			        "cityName": "北京市",
			        "cityPreId": null,
			        "UpdateTime": null,
			        "cityTotalNum": null,
			        "updateTime": null
			    },
			    "salaryNum": 0,
			    "salaryStr": "12.5k",
			    "salaryRange": "14115",
			    "type": {
			        "id": 3,
			        "typeName": "校招"
			    },
			    "degree": {
			        "id": 5,
			        "degreeName": "硕士及以上"
			    },
			    "profession": null,
			    "user": {
			        "id": 1115,
			        "userName": "wangdz",
			        "openId": null,
			        "phone": 15123301497,
			        "openidWx": null
			    },
			    "explain": "15薪+房补1500",
			    "status": null,
			    "from": null,
			    "createTime": null,
			    "lookCount": 0,
			    "likeCount": 8,
			    "credibility": null
			},
			{
			    "id": 10,
			    "company": "字节跳动",
			    "post": "后台开发",
			    "city": {
			        "id": 610100,
			        "cityName": "成都市",
			        "cityPreId": null,
			        "UpdateTime": null,
			        "cityTotalNum": null,
			        "updateTime": null
			    },
			    "salaryNum": 0,
			    "salaryStr": "9.8k",
			    "salaryRange": "14115",
			    "type": {
			        "id": 3,
			        "typeName": "校招"
			    },
			    "degree": {
			        "id": 4,
			        "degreeName": "本科"
			    },
			    "profession": null,
			    "user": {
			        "id": 1115,
			        "userName": "wangdz",
			        "openId": null,
			        "phone": 15123301497,
			        "openidWx": null
			    },
			    "explain": "包三餐+租房有500房补",
			    "status": null,
			    "from": null,
			    "createTime": null,
			    "lookCount": 110,
			    "likeCount": 8,
			    "credibility": null
			},
			{
			    "id": 11,
			    "company": "字节跳动",
			    "post": "数据分析实习",
			    "city": {
			        "id": 610100,
			        "cityName": "北京市",
			        "cityPreId": null,
			        "UpdateTime": null,
			        "cityTotalNum": null,
			        "updateTime": null
			    },
			    "salaryNum": 0,
			    "salaryStr": "6k",
			    "salaryRange": "14115",
			    "type": {
			        "id": 2,
			        "typeName": "实习"
			    },
			    "degree": {
			        "id": 5,
			        "degreeName": "硕士及以上"
			    },
			    "profession": null,
			    "user": {
			        "id": 1115,
			        "userName": "wangdz",
			        "openId": null,
			        "phone": 15123301497,
			        "openidWx": null
			    },
			    "explain": "",
			    "status": null,
			    "from": null,
			    "createTime": null,
			    "lookCount": 0,
			    "likeCount": 18,
			    "credibility": null
			},
			{
			    "id": 12,
			    "company": "华为",
			    "post": "客户经理",
			    "city": {
			        "id": 610100,
			        "cityName": "北京市",
			        "cityPreId": null,
			        "UpdateTime": null,
			        "cityTotalNum": null,
			        "updateTime": null
			    },
			    "salaryNum": 0,
			    "salaryStr": "16.5k",
			    "salaryRange": "14115",
			    "type": {
			        "id": 3,
			        "typeName": "校招"
			    },
			    "degree": {
			        "id": 4,
			        "degreeName": "本科"
			    },
			    "profession": null,
			    "user": {
			        "id": 1115,
			        "userName": "wangdz",
			        "openId": null,
			        "phone": 15123301497,
			        "openidWx": null
			    },
			    "explain": "14～16薪+8*12+年终",
			    "status": null,
			    "from": null,
			    "createTime": null,
			    "lookCount": 0,
			    "likeCount": 8,
			    "credibility": null
			},
			{
			    "id": 13,
			    "company": "华为（成都研究所）",
			    "post": "软件验证",
			    "city": {
			        "id": 610100,
			        "cityName": "成都市",
			        "cityPreId": null,
			        "UpdateTime": null,
			        "cityTotalNum": null,
			        "updateTime": null
			    },
			    "salaryNum": 0,
			    "salaryStr": "10k",
			    "salaryRange": "14115",
			    "type": {
			        "id": 3,
			        "typeName": "校招"
			    },
			    "degree": {
			        "id": 4,
			        "degreeName": "本科"
			    },
			    "profession": null,
			    "user": {
			        "id": 1115,
			        "userName": "wangdz",
			        "openId": null,
			        "phone": 15123301497,
			        "openidWx": null
			    },
			    "explain": "16薪",
			    "status": null,
			    "from": null,
			    "createTime": null,
			    "lookCount": 0,
			    "likeCount": 8,
			    "credibility": null
			},
			{
			    "id": 14,
			    "company": "华为财经",
			    "post": "财经专员",
			    "city": {
			        "id": 610100,
			        "cityName": "深圳市",
			        "cityPreId": null,
			        "UpdateTime": null,
			        "cityTotalNum": null,
			        "updateTime": null
			    },
			    "salaryNum": 0,
			    "salaryStr": "21k",
			    "salaryRange": "14115",
			    "type": {
			        "id": 3,
			        "typeName": "校招"
			    },
			    "degree": {
			        "id": 5,
			        "degreeName": "硕士及以上"
			    },
			    "profession": null,
			    "user": {
			        "id": 1115,
			        "userName": "wangdz",
			        "openId": null,
			        "phone": 15123301497,
			        "openidWx": null
			    },
			    "explain": "14～16薪",
			    "status": null,
			    "from": null,
			    "createTime": null,
			    "lookCount": 0,
			    "likeCount": 8,
			    "credibility": null
			},
			{
			    "id": 15,
			    "company": "长安汽车",
			    "post": "物流技术",
			    "city": {
			        "id": 610100,
			        "cityName": "重庆市",
			        "cityPreId": null,
			        "UpdateTime": null,
			        "cityTotalNum": null,
			        "updateTime": null
			    },
			    "salaryNum": 0,
			    "salaryStr": "6.5k",
			    "salaryRange": "14115",
			    "type": {
			        "id": 3,
			        "typeName": "校招"
			    },
			    "degree": {
			        "id": 4,
			        "degreeName": "本科"
			    },
			    "profession": null,
			    "user": {
			        "id": 1115,
			        "userName": "wangdz",
			        "openId": null,
			        "phone": 15123301497,
			        "openidWx": null
			    },
			    "explain": "12+薪，房补600",
			    "status": null,
			    "from": null,
			    "createTime": null,
			    "lookCount": 0,
			    "likeCount": 8,
			    "credibility": null
			},
			{
			    "id": 16,
			    "company": "长安福特",
			    "post": "整车产品研发",
			    "city": {
			        "id": 610100,
			        "cityName": "重庆市",
			        "cityPreId": null,
			        "UpdateTime": null,
			        "cityTotalNum": null,
			        "updateTime": null
			    },
			    "salaryNum": 0,
			    "salaryStr": "9.5k",
			    "salaryRange": "14115",
			    "type": {
			        "id": 3,
			        "typeName": "校招"
			    },
			    "degree": {
			        "id": 5,
			        "degreeName": "硕士及以上"
			    },
			    "profession": null,
			    "user": {
			        "id": 1115,
			        "userName": "wangdz",
			        "openId": null,
			        "phone": 15123301497,
			        "openidWx": null
			    },
			    "explain": "13薪",
			    "status": null,
			    "from": null,
			    "createTime": null,
			    "lookCount": 0,
			    "likeCount": 8,
			    "credibility": null
			},
			{
			    "id": 17,
			    "company": "软通动力",
			    "post": "前端开发",
			    "city": {
			        "id": 610100,
			        "cityName": "杭州市",
			        "cityPreId": null,
			        "UpdateTime": null,
			        "cityTotalNum": null,
			        "updateTime": null
			    },
			    "salaryNum": 0,
			    "salaryStr": "10k",
			    "salaryRange": "14115",
			    "type": {
			        "id": 3,
			        "typeName": "校招"
			    },
			    "degree": {
			        "id": 4,
			        "degreeName": "本科"
			    },
			    "profession": null,
			    "user": {
			        "id": 1115,
			        "userName": "wangdz",
			        "openId": null,
			        "phone": 15123301497,
			        "openidWx": null
			    },
			    "explain": "",
			    "status": null,
			    "from": null,
			    "createTime": null,
			    "lookCount": 0,
			    "likeCount": 8,
			    "credibility": null
			},
			{
			    "id": 18,
			    "company": "软通动力",
			    "post": "JAVA开发",
			    "city": {
			        "id": 610100,
			        "cityName": "武汉市",
			        "cityPreId": null,
			        "UpdateTime": null,
			        "cityTotalNum": null,
			        "updateTime": null
			    },
			    "salaryNum": 0,
			    "salaryStr": "5.5k-7k",
			    "salaryRange": "14115",
			    "type": {
			        "id": 3,
			        "typeName": "校招"
			    },
			    "degree": {
			        "id": 4,
			        "degreeName": "本科"
			    },
			    "profession": null,
			    "user": {
			        "id": 1115,
			        "userName": "wangdz",
			        "openId": null,
			        "phone": 15123301497,
			        "openidWx": null
			    },
			    "explain": "",
			    "status": null,
			    "from": null,
			    "createTime": null,
			    "lookCount": 0,
			    "likeCount": 8,
			    "credibility": null
			},
			{
			    "id": 19,
			    "company": "锐捷网络股份有限公司",
			    "post": "java后端实习",
			    "city": {
			        "id": 610100,
			        "cityName": "福州",
			        "cityPreId": null,
			        "UpdateTime": null,
			        "cityTotalNum": null,
			        "updateTime": null
			    },
			    "salaryNum": 0,
			    "salaryStr": "4k",
			    "salaryRange": "14115",
			    "type": {
			        "id": 2,
			        "typeName": "实习"
			    },
			    "degree": {
			        "id": 4,
			        "degreeName": "本科"
			    },
			    "profession": null,
			    "user": {
			        "id": 1115,
			        "userName": "wangdz",
			        "openId": null,
			        "phone": 15123301497,
			        "openidWx": null
			    },
			    "explain": "",
			    "status": null,
			    "from": null,
			    "createTime": null,
			    "lookCount": 0,
			    "likeCount": 8,
			    "credibility": null
			},
			{
			    "id": 20,
			    "company": "锐捷网络",
			    "post": "C/C++开发工程师",
			    "city": {
			        "id": 610100,
			        "cityName": "成都市",
			        "cityPreId": null,
			        "UpdateTime": null,
			        "cityTotalNum": null,
			        "updateTime": null
			    },
			    "salaryNum": 0,
			    "salaryStr": "8k",
			    "salaryRange": "14115",
			    "type": {
			        "id": 3,
			        "typeName": "校招"
			    },
			    "degree": {
			        "id": 4,
			        "degreeName": "本科"
			    },
			    "profession": null,
			    "user": {
			        "id": 1115,
			        "userName": "wangdz",
			        "openId": null,
			        "phone": 15123301497,
			        "openidWx": null
			    },
			    "explain": "年终1-3个月+公积金12%+房补2k",
			    "status": null,
			    "from": null,
			    "createTime": null,
			    "lookCount": 0,
			    "likeCount": 8,
			    "credibility": null
			},
			{
			    "id": 21,
			    "company": "星网锐捷",
			    "post": "软件开发",
			    "city": {
			        "id": 610100,
			        "cityName": "福州市",
			        "cityPreId": null,
			        "UpdateTime": null,
			        "cityTotalNum": null,
			        "updateTime": null
			    },
			    "salaryNum": 0,
			    "salaryStr": "7.5k",
			    "salaryRange": "14115",
			    "type": {
			        "id": 3,
			        "typeName": "校招"
			    },
			    "degree": {
			        "id": 4,
			        "degreeName": "本科"
			    },
			    "profession": null,
			    "user": {
			        "id": 1115,
			        "userName": "wangdz",
			        "openId": null,
			        "phone": 15123301497,
			        "openidWx": null
			    },
			    "explain": "星网视易，15薪",
			    "status": null,
			    "from": null,
			    "createTime": null,
			    "lookCount": 0,
			    "likeCount": 8,
			    "credibility": null
			},
			{
			    "id": 22,
			    "company": "锐捷网络",
			    "post": "国际销售经理",
			    "city": {
			        "id": 610100,
			        "cityName": "广州市",
			        "cityPreId": null,
			        "UpdateTime": null,
			        "cityTotalNum": null,
			        "updateTime": null
			    },
			    "salaryNum": 0,
			    "salaryStr": "15k",
			    "salaryRange": "14115",
			    "type": {
			        "id": 3,
			        "typeName": "校招"
			    },
			    "degree": {
			        "id": 4,
			        "degreeName": "本科"
			    },
			    "profession": null,
			    "user": {
			        "id": 1115,
			        "userName": "wangdz",
			        "openId": null,
			        "phone": 15123301497,
			        "openidWx": null
			    },
			    "explain": "第一年一个月年终，使用期过后年薪制",
			    "status": null,
			    "from": null,
			    "createTime": null,
			    "lookCount": 0,
			    "likeCount": 8,
			    "credibility": null
			},
			{
			    "id": 23,
			    "company": "联通数科",
			    "post": "云平台交付技术研究员",
			    "city": {
			        "id": 610100,
			        "cityName": "北京市",
			        "cityPreId": null,
			        "UpdateTime": null,
			        "cityTotalNum": null,
			        "updateTime": null
			    },
			    "salaryNum": 0,
			    "salaryStr": "20k",
			    "salaryRange": "14115",
			    "type": {
			        "id": 3,
			        "typeName": "校招"
			    },
			    "degree": {
			        "id": 5,
			        "degreeName": "硕士及以上"
			    },
			    "profession": null,
			    "user": {
			        "id": 1115,
			        "userName": "wangdz",
			        "openId": null,
			        "phone": 15123301497,
			        "openidWx": null
			    },
			    "explain": "总包24w",
			    "status": null,
			    "from": null,
			    "createTime": null,
			    "lookCount": 0,
			    "likeCount": 8,
			    "credibility": null
			},
			{
			    "id": 24,
			    "company": "广西联通区公司",
			    "post": "软件开发",
			    "city": {
			        "id": 610100,
			        "cityName": "南宁",
			        "cityPreId": null,
			        "UpdateTime": null,
			        "cityTotalNum": null,
			        "updateTime": null
			    },
			    "salaryNum": 0,
			    "salaryStr": "6k",
			    "salaryRange": "14115",
			    "type": {
			        "id": 3,
			        "typeName": "校招"
			    },
			    "degree": {
			        "id": 5,
			        "degreeName": "硕士及以上"
			    },
			    "profession": null,
			    "user": {
			        "id": 1115,
			        "userName": "wangdz",
			        "openId": null,
			        "phone": 15123301497,
			        "openidWx": null
			    },
			    "explain": "",
			    "status": null,
			    "from": null,
			    "createTime": null,
			    "lookCount": 0,
			    "likeCount": 8,
			    "credibility": null
			},
			{
			    "id": 25,
			    "company": "广州电信",
			    "post": "云网安工程师",
			    "city": {
			        "id": 610100,
			        "cityName": "广州市",
			        "cityPreId": null,
			        "UpdateTime": null,
			        "cityTotalNum": null,
			        "updateTime": null
			    },
			    "salaryNum": 0,
			    "salaryStr": "10k",
			    "salaryRange": "14115",
			    "type": {
			        "id": 3,
			        "typeName": "校招"
			    },
			    "degree": {
			        "id": 5,
			        "degreeName": "硕士及以上"
			    },
			    "profession": null,
			    "user": {
			        "id": 1115,
			        "userName": "wangdz",
			        "openId": null,
			        "phone": 15123301497,
			        "openidWx": null
			    },
			    "explain": "使用期本科5k，研究生5.5k，转正后平均年薪12w",
			    "status": null,
			    "from": null,
			    "createTime": null,
			    "lookCount": 0,
			    "likeCount": 8,
			    "credibility": null
			},
			{
			    "id": 26,
			    "company": "河北电信",
			    "post": "维护与服务支持",
			    "city": {
			        "id": 610100,
			        "cityName": "石家庄市",
			        "cityPreId": null,
			        "UpdateTime": null,
			        "cityTotalNum": null,
			        "updateTime": null
			    },
			    "salaryNum": 0,
			    "salaryStr": "11k",
			    "salaryRange": "14115",
			    "type": {
			        "id": 3,
			        "typeName": "校招"
			    },
			    "degree": {
			        "id": 5,
			        "degreeName": "硕士及以上"
			    },
			    "profession": null,
			    "user": {
			        "id": 1115,
			        "userName": "wangdz",
			        "openId": null,
			        "phone": 15123301497,
			        "openidWx": null
			    },
			    "explain": "",
			    "status": null,
			    "from": null,
			    "createTime": null,
			    "lookCount": 0,
			    "likeCount": 8,
			    "credibility": null
			},
			{
			    "id": 27,
			    "company": "深圳电信",
			    "post": "软件开发",
			    "city": {
			        "id": 610100,
			        "cityName": "深圳市",
			        "cityPreId": null,
			        "UpdateTime": null,
			        "cityTotalNum": null,
			        "updateTime": null
			    },
			    "salaryNum": 0,
			    "salaryStr": "14k",
			    "salaryRange": "14115",
			    "type": {
			        "id": 3,
			        "typeName": "校招"
			    },
			    "degree": {
			        "id": 5,
			        "degreeName": "硕士及以上"
			    },
			    "profession": null,
			    "user": {
			        "id": 1115,
			        "userName": "wangdz",
			        "openId": null,
			        "phone": 15123301497,
			        "openidWx": null
			    },
			    "explain": "",
			    "status": null,
			    "from": null,
			    "createTime": null,
			    "lookCount": 0,
			    "likeCount": 8,
			    "credibility": null
			},
			{
			    "id": 28,
			    "company": "苏州电信",
			    "post": "运维",
			    "city": {
			        "id": 610100,
			        "cityName": "苏州市",
			        "cityPreId": null,
			        "UpdateTime": null,
			        "cityTotalNum": null,
			        "updateTime": null
			    },
			    "salaryNum": 0,
			    "salaryStr": "6k+",
			    "salaryRange": "14115",
			    "type": {
			        "id": 3,
			        "typeName": "校招"
			    },
			    "degree": {
			        "id": 5,
			        "degreeName": "硕士及以上"
			    },
			    "profession": null,
			    "user": {
			        "id": 1115,
			        "userName": "wangdz",
			        "openId": null,
			        "phone": 15123301497,
			        "openidWx": null
			    },
			    "explain": "",
			    "status": null,
			    "from": null,
			    "createTime": null,
			    "lookCount": 0,
			    "likeCount": 8,
			    "credibility": null
			},
			{
			    "id": 29,
			    "company": "美团",
			    "post": "测试开发",
			    "city": {
			        "id": 610100,
			        "cityName": "北京市",
			        "cityPreId": null,
			        "UpdateTime": null,
			        "cityTotalNum": null,
			        "updateTime": null
			    },
			    "salaryNum": 0,
			    "salaryStr": "9k",
			    "salaryRange": "14115",
			    "type": {
			        "id": 3,
			        "typeName": "校招"
			    },
			    "degree": {
			        "id": 5,
			        "degreeName": "硕士及以上"
			    },
			    "profession": null,
			    "user": {
			        "id": 1115,
			        "userName": "wangdz",
			        "openId": null,
			        "phone": 15123301497,
			        "openidWx": null
			    },
			    "explain": "1500房补",
			    "status": null,
			    "from": null,
			    "createTime": null,
			    "lookCount": 0,
			    "likeCount": 8,
			    "credibility": null
			},
			{
			    "id": 30,
			    "company": "美团优选",
			    "post": "数据挖掘工程师",
			    "city": {
			        "id": 610100,
			        "cityName": "上海市",
			        "cityPreId": null,
			        "UpdateTime": null,
			        "cityTotalNum": null,
			        "updateTime": null
			    },
			    "salaryNum": 0,
			    "salaryStr": "45k",
			    "salaryRange": "14115",
			    "type": {
			        "id": 3,
			        "typeName": "校招"
			    },
			    "degree": {
			        "id": 5,
			        "degreeName": "硕士及以上"
			    },
			    "profession": null,
			    "user": {
			        "id": 1115,
			        "userName": "wangdz",
			        "openId": null,
			        "phone": 15123301497,
			        "openidWx": null
			    },
			    "explain": "50w美团股票（四年）",
			    "status": null,
			    "from": null,
			    "createTime": null,
			    "lookCount": 0,
			    "likeCount": 8,
			    "credibility": null
			}
        ]
    }
}

export const EMERGING = {
    "code": 200,
    "message": "success",
    "data": {
        "totalCount": 2,
        "totalPage": 1,
        "currentPage": 1,
        "pageSize": 5,
        "data": [
            {
                "id": 1,
                "company": "美团",
                "post": "外卖员",
                "city": {
                    "id": 110100,
                    "cityName": "重庆",
                    "cityPreId": null,
                    "UpdateTime": null,
                    "cityTotalNum": null,
                    "updateTime": null
                },
                "salaryNum": 0,
                "salaryStr": "6k",
                "salaryRange": "8k",
                "profession": {
                    "id": 2,
                    "professionName": "计算机",
                    "status": 1
                },
                "user": {
                    "id": 1,
                    "userName": "wzd",
                    "openId": null,
                    "phone": 1222,
                    "openidWx": null
                },
                "explain": "1111",
                "status": null,
                "from": null,
                "createTime": "2022-04-16",
                "lookCount": 6,
                "likeCount": 0,
                "credibility": null
            },
            {
                "id": 2,
                "company": "星艺传媒",
                "post": "新媒体主播",
                "city": {
                    "id": 420100,
                    "cityName": "西安市",
                    "cityPreId": null,
                    "UpdateTime": null,
                    "cityTotalNum": null,
                    "updateTime": null
                },
                "salaryNum": 0,
                "salaryStr": "20k",
                "salaryRange": "6k",
                "profession": null,
                "user": {
                    "id": 1115,
                    "userName": "wangdz",
                    "openId": null,
                    "phone": 15123301497,
                    "openidWx": null
                },
                "explain": "新媒体主播，工作时间自由，工时制，福利多多。",
                "status": null,
                "from": null,
                "createTime": "2022-05-06",
                "lookCount": null,
                "likeCount": null,
                "credibility": null
            },
			{
			    "id": 3,
			    "company": "曹操出行",
			    "post": "网约车司机",
			    "city": {
			        "id": 110100,
			        "cityName": "重庆",
			        "cityPreId": null,
			        "UpdateTime": null,
			        "cityTotalNum": null,
			        "updateTime": null
			    },
			    "salaryNum": 0,
			    "salaryStr": "6.5k",
			    "salaryRange": "9k",
			    "profession": {
			        "id": 2,
			        "professionName": "计算机",
			        "status": 1
			    },
			    "user": {
			        "id": 1,
			        "userName": "wzd",
			        "openId": null,
			        "phone": 1222,
			        "openidWx": null
			    },
			    "explain": "1111",
			    "status": null,
			    "from": null,
			    "createTime": "2022-04-30",
			    "lookCount": 6,
			    "likeCount": 0,
			    "credibility": null
			},
			{
			    "id": 4,
			    "company": "T3出行",
			    "post": "网约车司机",
			    "city": {
			        "id": 110100,
			        "cityName": "四川",
			        "cityPreId": null,
			        "UpdateTime": null,
			        "cityTotalNum": null,
			        "updateTime": null
			    },
			    "salaryNum": 0,
			    "salaryStr": "7k",
			    "salaryRange": "9k",
			    "profession": {
			        "id": 2,
			        "professionName": "计算机",
			        "status": 1
			    },
			    "user": {
			        "id": 1,
			        "userName": "wzd",
			        "openId": null,
			        "phone": 1222,
			        "openidWx": null
			    },
			    "explain": "工作时间自由，福利好，单子多",
			    "status": null,
			    "from": null,
			    "createTime": "2022-04-30",
			    "lookCount": 6,
			    "likeCount": 0,
			    "credibility": null
			},
			{
			    "id": 5,
			    "company": "创米",
			    "post": "带货主播",
			    "city": {
			        "id": 110100,
			        "cityName": "重庆市",
			        "cityPreId": null,
			        "UpdateTime": null,
			        "cityTotalNum": null,
			        "updateTime": null
			    },
			    "salaryNum": 0,
			    "salaryStr": "10-15k",
			    "salaryRange": "9k",
			    "profession": {
			        "id": 2,
			        "professionName": "计算机",
			        "status": 1
			    },
			    "user": {
			        "id": 1,
			        "userName": "wzd",
			        "openId": null,
			        "phone": 1222,
			        "openidWx": null
			    },
			    "explain": "销售提成%1，综合10-30k",
			    "status": null,
			    "from": null,
			    "createTime": "2022-04-30",
			    "lookCount": 6,
			    "likeCount": 0,
			    "credibility": null
			},
			{
			    "id": 6,
			    "company": "巴拉巴拉服装经营部",
			    "post": "服装带货主播",
			    "city": {
			        "id": 110100,
			        "cityName": "重庆市",
			        "cityPreId": null,
			        "UpdateTime": null,
			        "cityTotalNum": null,
			        "updateTime": null
			    },
			    "salaryNum": 0,
			    "salaryStr": "7-12k",
			    "salaryRange": "9k",
			    "profession": {
			        "id": 2,
			        "professionName": "计算机",
			        "status": 1
			    },
			    "user": {
			        "id": 1,
			        "userName": "wzd",
			        "openId": null,
			        "phone": 1222,
			        "openidWx": null
			    },
			    "explain": "无责底薪3.5-7k，节假日三薪，直播销售额2%提成",
			    "status": null,
			    "from": null,
			    "createTime": "2022-04-30",
			    "lookCount": 6,
			    "likeCount": 0,
			    "credibility": null
			},
			{
			    "id": 7,
			    "company": "音豪文化传媒有限公司",
			    "post": "淘宝模特",
			    "city": {
			        "id": 110100,
			        "cityName": "重庆市",
			        "cityPreId": null,
			        "UpdateTime": null,
			        "cityTotalNum": null,
			        "updateTime": null
			    },
			    "salaryNum": 0,
			    "salaryStr": "6-10k",
			    "salaryRange": "9k",
			    "profession": {
			        "id": 2,
			        "professionName": "计算机",
			        "status": 1
			    },
			    "user": {
			        "id": 1,
			        "userName": "wzd",
			        "openId": null,
			        "phone": 1222,
			        "openidWx": null
			    },
			    "explain": "工作时间自由，福利好",
			    "status": null,
			    "from": null,
			    "createTime": "2022-04-30",
			    "lookCount": 6,
			    "likeCount": 0,
			    "credibility": null
			},
			{
			    "id": 8,
			    "company": "一梦千一传媒",
			    "post": "电商模特",
			    "city": {
			        "id": 110100,
			        "cityName": "重庆市",
			        "cityPreId": null,
			        "UpdateTime": null,
			        "cityTotalNum": null,
			        "updateTime": null
			    },
			    "salaryNum": 0,
			    "salaryStr": "15-20k",
			    "salaryRange": "9k",
			    "profession": {
			        "id": 2,
			        "professionName": "计算机",
			        "status": 1
			    },
			    "user": {
			        "id": 1,
			        "userName": "wzd",
			        "openId": null,
			        "phone": 1222,
			        "openidWx": null
			    },
			    "explain": "",
			    "status": null,
			    "from": null,
			    "createTime": "2022-04-30",
			    "lookCount": 6,
			    "likeCount": 0,
			    "credibility": null
			},
			{
			    "id": 9,
			    "company": "君洛文化传媒",
			    "post": "王者/吃鸡/LOL游戏主播",
			    "city": {
			        "id": 110100,
			        "cityName": "重庆市",
			        "cityPreId": null,
			        "UpdateTime": null,
			        "cityTotalNum": null,
			        "updateTime": null
			    },
			    "salaryNum": 0,
			    "salaryStr": "8-13k",
			    "salaryRange": "9k",
			    "profession": {
			        "id": 2,
			        "professionName": "计算机",
			        "status": 1
			    },
			    "user": {
			        "id": 1,
			        "userName": "wzd",
			        "openId": null,
			        "phone": 1222,
			        "openidWx": null
			    },
			    "explain": "13薪+奖金绩效",
			    "status": null,
			    "from": null,
			    "createTime": "2022-04-30",
			    "lookCount": 6,
			    "likeCount": 0,
			    "credibility": null
			},
			{
			    "id": 10,
			    "company": "一梦千一传媒",
			    "post": "电商模特",
			    "city": {
			        "id": 110100,
			        "cityName": "重庆市",
			        "cityPreId": null,
			        "UpdateTime": null,
			        "cityTotalNum": null,
			        "updateTime": null
			    },
			    "salaryNum": 0,
			    "salaryStr": "15-20k",
			    "salaryRange": "9k",
			    "profession": {
			        "id": 2,
			        "professionName": "计算机",
			        "status": 1
			    },
			    "user": {
			        "id": 1,
			        "userName": "wzd",
			        "openId": null,
			        "phone": 1222,
			        "openidWx": null
			    },
			    "explain": "",
			    "status": null,
			    "from": null,
			    "createTime": "2022-04-30",
			    "lookCount": 6,
			    "likeCount": 0,
			    "credibility": null
			},
			{
			    "id": 11,
			    "company": "网约车司机",
			    "post": "滴滴出行",
			    "city": {
			        "id": 110100,
			        "cityName": "西安市",
			        "cityPreId": null,
			        "UpdateTime": null,
			        "cityTotalNum": null,
			        "updateTime": null
			    },
			    "salaryNum": 0,
			    "salaryStr": "15-20k",
			    "salaryRange": "9k",
			    "profession": {
			        "id": 2,
			        "professionName": "计算机",
			        "status": 1
			    },
			    "user": {
			        "id": 1,
			        "userName": "wzd",
			        "openId": null,
			        "phone": 1222,
			        "openidWx": null
			    },
			    "explain": "",
			    "status": null,
			    "from": null,
			    "createTime": "2022-04-30",
			    "lookCount": 6,
			    "likeCount": 0,
			    "credibility": null
			},
			{
			    "id": 12,
			    "company": "青橘柠檬汽车",
			    "post": "网约车司机",
			    "city": {
			        "id": 110100,
			        "cityName": "西安市",
			        "cityPreId": null,
			        "UpdateTime": null,
			        "cityTotalNum": null,
			        "updateTime": null
			    },
			    "salaryNum": 0,
			    "salaryStr": "8-13k",
			    "salaryRange": "9k",
			    "profession": {
			        "id": 2,
			        "professionName": "计算机",
			        "status": 1
			    },
			    "user": {
			        "id": 1,
			        "userName": "wzd",
			        "openId": null,
			        "phone": 1222,
			        "openidWx": null
			    },
			    "explain": "",
			    "status": null,
			    "from": null,
			    "createTime": "2022-04-30",
			    "lookCount": 6,
			    "likeCount": 0,
			    "credibility": null
			},
			{
			    "id": 13,
			    "company": "西安战狼客运",
			    "post": "网约车司机",
			    "city": {
			        "id": 110100,
			        "cityName": "西安市",
			        "cityPreId": null,
			        "UpdateTime": null,
			        "cityTotalNum": null,
			        "updateTime": null
			    },
			    "salaryNum": 0,
			    "salaryStr": "7-12k",
			    "salaryRange": "9k",
			    "profession": {
			        "id": 2,
			        "professionName": "计算机",
			        "status": 1
			    },
			    "user": {
			        "id": 1,
			        "userName": "wzd",
			        "openId": null,
			        "phone": 1222,
			        "openidWx": null
			    },
			    "explain": "",
			    "status": null,
			    "from": null,
			    "createTime": "2022-04-30",
			    "lookCount": 6,
			    "likeCount": 0,
			    "credibility": null
			},
			{
			    "id": 14,
			    "company": "小贝饿了文化传媒工作室",
			    "post": "直播助理",
			    "city": {
			        "id": 110100,
			        "cityName": "西安市",
			        "cityPreId": null,
			        "UpdateTime": null,
			        "cityTotalNum": null,
			        "updateTime": null
			    },
			    "salaryNum": 0,
			    "salaryStr": "6-11k",
			    "salaryRange": "9k",
			    "profession": {
			        "id": 2,
			        "professionName": "计算机",
			        "status": 1
			    },
			    "user": {
			        "id": 1,
			        "userName": "wzd",
			        "openId": null,
			        "phone": 1222,
			        "openidWx": null
			    },
			    "explain": "",
			    "status": null,
			    "from": null,
			    "createTime": "2022-04-30",
			    "lookCount": 6,
			    "likeCount": 0,
			    "credibility": null
			},
			{
			    "id": 15,
			    "company": "余香教育",
			    "post": "收纳整理培训师",
			    "city": {
			        "id": 110100,
			        "cityName": "武汉市",
			        "cityPreId": null,
			        "UpdateTime": null,
			        "cityTotalNum": null,
			        "updateTime": null
			    },
			    "salaryNum": 0,
			    "salaryStr": "5-6k",
			    "salaryRange": "9k",
			    "profession": {
			        "id": 2,
			        "professionName": "计算机",
			        "status": 1
			    },
			    "user": {
			        "id": 1,
			        "userName": "wzd",
			        "openId": null,
			        "phone": 1222,
			        "openidWx": null
			    },
			    "explain": "",
			    "status": null,
			    "from": null,
			    "createTime": "2022-04-30",
			    "lookCount": 6,
			    "likeCount": 0,
			    "credibility": null
			},
			{
			    "id": 16,
			    "company": "寻宠科技有限公司",
			    "post": "动物救援",
			    "city": {
			        "id": 110100,
			        "cityName": "武汉市",
			        "cityPreId": null,
			        "UpdateTime": null,
			        "cityTotalNum": null,
			        "updateTime": null
			    },
			    "salaryNum": 0,
			    "salaryStr": "5-10k",
			    "salaryRange": "9k",
			    "profession": {
			        "id": 2,
			        "professionName": "计算机",
			        "status": 1
			    },
			    "user": {
			        "id": 1,
			        "userName": "wzd",
			        "openId": null,
			        "phone": 1222,
			        "openidWx": null
			    },
			    "explain": "",
			    "status": null,
			    "from": null,
			    "createTime": "2022-04-30",
			    "lookCount": 6,
			    "likeCount": 0,
			    "credibility": null
			},
			{
			    "id": 17,
			    "company": "众行远",
			    "post": "垃圾分类项目经理",
			    "city": {
			        "id": 110100,
			        "cityName": "武汉市",
			        "cityPreId": null,
			        "UpdateTime": null,
			        "cityTotalNum": null,
			        "updateTime": null
			    },
			    "salaryNum": 0,
			    "salaryStr": "6-7k",
			    "salaryRange": "9k",
			    "profession": {
			        "id": 2,
			        "professionName": "计算机",
			        "status": 1
			    },
			    "user": {
			        "id": 1,
			        "userName": "wzd",
			        "openId": null,
			        "phone": 1222,
			        "openidWx": null
			    },
			    "explain": "",
			    "status": null,
			    "from": null,
			    "createTime": "2022-04-30",
			    "lookCount": 6,
			    "likeCount": 0,
			    "credibility": null
			},
			{
			    "id": 18,
			    "company": "京宠",
			    "post": "宠物喂养员",
			    "city": {
			        "id": 110100,
			        "cityName": "北京市",
			        "cityPreId": null,
			        "UpdateTime": null,
			        "cityTotalNum": null,
			        "updateTime": null
			    },
			    "salaryNum": 0,
			    "salaryStr": "5-6k",
			    "salaryRange": "9k",
			    "profession": {
			        "id": 2,
			        "professionName": "计算机",
			        "status": 1
			    },
			    "user": {
			        "id": 1,
			        "userName": "wzd",
			        "openId": null,
			        "phone": 1222,
			        "openidWx": null
			    },
			    "explain": "",
			    "status": null,
			    "from": null,
			    "createTime": "2022-04-30",
			    "lookCount": 6,
			    "likeCount": 0,
			    "credibility": null
			},
			{
			    "id": 19,
			    "company": "善使",
			    "post": "宠物殡葬师",
			    "city": {
			        "id": 110100,
			        "cityName": "北京市",
			        "cityPreId": null,
			        "UpdateTime": null,
			        "cityTotalNum": null,
			        "updateTime": null
			    },
			    "salaryNum": 0,
			    "salaryStr": "7-10k",
			    "salaryRange": "9k",
			    "profession": {
			        "id": 2,
			        "professionName": "计算机",
			        "status": 1
			    },
			    "user": {
			        "id": 1,
			        "userName": "wzd",
			        "openId": null,
			        "phone": 1222,
			        "openidWx": null
			    },
			    "explain": "",
			    "status": null,
			    "from": null,
			    "createTime": "2022-04-30",
			    "lookCount": 6,
			    "likeCount": 0,
			    "credibility": null
			},
			{
			    "id": 20,
			    "company": "PUPPYWALKER",
			    "post": "宠物陪护师",
			    "city": {
			        "id": 110100,
			        "cityName": "北京市",
			        "cityPreId": null,
			        "UpdateTime": null,
			        "cityTotalNum": null,
			        "updateTime": null
			    },
			    "salaryNum": 0,
			    "salaryStr": "3-6k",
			    "salaryRange": "9k",
			    "profession": {
			        "id": 2,
			        "professionName": "计算机",
			        "status": 1
			    },
			    "user": {
			        "id": 1,
			        "userName": "wzd",
			        "openId": null,
			        "phone": 1222,
			        "openidWx": null
			    },
			    "explain": "",
			    "status": null,
			    "from": null,
			    "createTime": "2022-04-30",
			    "lookCount": 6,
			    "likeCount": 0,
			    "credibility": null
			},
			{
			    "id": 21,
			    "company": "牛角监",
			    "post": "验房师",
			    "city": {
			        "id": 110100,
			        "cityName": "杭州市",
			        "cityPreId": null,
			        "UpdateTime": null,
			        "cityTotalNum": null,
			        "updateTime": null
			    },
			    "salaryNum": 0,
			    "salaryStr": "3-8k",
			    "salaryRange": "9k",
			    "profession": {
			        "id": 2,
			        "professionName": "计算机",
			        "status": 1
			    },
			    "user": {
			        "id": 1,
			        "userName": "wzd",
			        "openId": null,
			        "phone": 1222,
			        "openidWx": null
			    },
			    "explain": "",
			    "status": null,
			    "from": null,
			    "createTime": "2022-04-30",
			    "lookCount": 6,
			    "likeCount": 0,
			    "credibility": null
			},
			{
			    "id": 22,
			    "company": "无锡润居",
			    "post": "验房工程师",
			    "city": {
			        "id": 110100,
			        "cityName": "杭州市",
			        "cityPreId": null,
			        "UpdateTime": null,
			        "cityTotalNum": null,
			        "updateTime": null
			    },
			    "salaryNum": 0,
			    "salaryStr": "4-8k",
			    "salaryRange": "9k",
			    "profession": {
			        "id": 2,
			        "professionName": "计算机",
			        "status": 1
			    },
			    "user": {
			        "id": 1,
			        "userName": "wzd",
			        "openId": null,
			        "phone": 1222,
			        "openidWx": null
			    },
			    "explain": "",
			    "status": null,
			    "from": null,
			    "createTime": "2022-04-30",
			    "lookCount": 6,
			    "likeCount": 0,
			    "credibility": null
			},
			{
			    "id": 23,
			    "company": "塞维时代",
			    "post": "服装买手",
			    "city": {
			        "id": 110100,
			        "cityName": "深圳市",
			        "cityPreId": null,
			        "UpdateTime": null,
			        "cityTotalNum": null,
			        "updateTime": null
			    },
			    "salaryNum": 0,
			    "salaryStr": "7-12k",
			    "salaryRange": "9k",
			    "profession": {
			        "id": 2,
			        "professionName": "计算机",
			        "status": 1
			    },
			    "user": {
			        "id": 1,
			        "userName": "wzd",
			        "openId": null,
			        "phone": 1222,
			        "openidWx": null
			    },
			    "explain": "",
			    "status": null,
			    "from": null,
			    "createTime": "2022-04-30",
			    "lookCount": 6,
			    "likeCount": 0,
			    "credibility": null
			},
			{
			    "id": 24,
			    "company": "51收纳管家",
			    "post": "整理收纳师",
			    "city": {
			        "id": 110100,
			        "cityName": "深圳市",
			        "cityPreId": null,
			        "UpdateTime": null,
			        "cityTotalNum": null,
			        "updateTime": null
			    },
			    "salaryNum": 0,
			    "salaryStr": "6-8k",
			    "salaryRange": "9k",
			    "profession": {
			        "id": 2,
			        "professionName": "计算机",
			        "status": 1
			    },
			    "user": {
			        "id": 1,
			        "userName": "wzd",
			        "openId": null,
			        "phone": 1222,
			        "openidWx": null
			    },
			    "explain": "",
			    "status": null,
			    "from": null,
			    "createTime": "2022-04-30",
			    "lookCount": 6,
			    "likeCount": 0,
			    "credibility": null
			},
			{
			    "id": 25,
			    "company": "小味仙",
			    "post": "试吃员",
			    "city": {
			        "id": 110100,
			        "cityName": "深圳市",
			        "cityPreId": null,
			        "UpdateTime": null,
			        "cityTotalNum": null,
			        "updateTime": null
			    },
			    "salaryNum": 0,
			    "salaryStr": "1-2k",
			    "salaryRange": "9k",
			    "profession": {
			        "id": 2,
			        "professionName": "计算机",
			        "status": 1
			    },
			    "user": {
			        "id": 1,
			        "userName": "wzd",
			        "openId": null,
			        "phone": 1222,
			        "openidWx": null
			    },
			    "explain": "",
			    "status": null,
			    "from": null,
			    "createTime": "2022-04-30",
			    "lookCount": 6,
			    "likeCount": 0,
			    "credibility": null
			},
			{
			    "id": 26,
			    "company": "天美娱乐传媒",
			    "post": "探店达人",
			    "city": {
			        "id": 110100,
			        "cityName": "深圳市",
			        "cityPreId": null,
			        "UpdateTime": null,
			        "cityTotalNum": null,
			        "updateTime": null
			    },
			    "salaryNum": 0,
			    "salaryStr": "10-15k",
			    "salaryRange": "9k",
			    "profession": {
			        "id": 2,
			        "professionName": "计算机",
			        "status": 1
			    },
			    "user": {
			        "id": 1,
			        "userName": "wzd",
			        "openId": null,
			        "phone": 1222,
			        "openidWx": null
			    },
			    "explain": "",
			    "status": null,
			    "from": null,
			    "createTime": "2022-04-30",
			    "lookCount": 6,
			    "likeCount": 0,
			    "credibility": null
			},
			{
			    "id": 27,
			    "company": "星灵致动文化传媒",
			    "post": "小红书种草博主",
			    "city": {
			        "id": 110100,
			        "cityName": "深圳市",
			        "cityPreId": null,
			        "UpdateTime": null,
			        "cityTotalNum": null,
			        "updateTime": null
			    },
			    "salaryNum": 0,
			    "salaryStr": "4-9k",
			    "salaryRange": "9k",
			    "profession": {
			        "id": 2,
			        "professionName": "计算机",
			        "status": 1
			    },
			    "user": {
			        "id": 1,
			        "userName": "wzd",
			        "openId": null,
			        "phone": 1222,
			        "openidWx": null
			    },
			    "explain": "",
			    "status": null,
			    "from": null,
			    "createTime": "2022-04-30",
			    "lookCount": 6,
			    "likeCount": 0,
			    "credibility": null
			}
        ]
    }
}