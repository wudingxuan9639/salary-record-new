<template>
  <view class="professionDetail">
    <view class="header_card">
      <view class="header_card_after">
        <view class="header_salary">
          <view class="symbol">¥</view>
          <view class="salary">{{ detailData.posSalary }}</view>
          <view class="month">/月</view>
        </view>
        <view class="header_card_line"></view>
        <view class="header_card_text">
          <view class="header_card_text_p">{{ detailData.comAddress }}</view>
          <view class="header_card_text_indus">{{
            detailData.profession
          }}</view>
        </view>
      </view>
    </view>

    <view class="info_card">
      <view class="info_card_item" @click="searchUpper(detailData.comAddress)">
        <view class="image_text">
          <image
            class="image_text_image_1"
            src="../../../static/img/professionalDetail/Union.svg"
          ></image>
          <view class="image_text_text">渠道</view>
        </view>
        <view class="info_arrow">
          <view class="info_arrow_text">{{ detailData.comAddress }}</view>
          <view class="info_arrow_arrow"></view>
        </view>
      </view>

      <view class="info_card_underline"></view>

      <view class="info_card_item" @click="searchUpper(detailData.posName)">
        <view class="image_text">
          <image
            class="image_text_image_2"
            src="../../../static/img/professionalDetail/Vector8.svg"
          ></image>
          <view class="image_text_text">岗位</view>
        </view>
        <view class="info_arrow">
          <view class="info_arrow_text">{{ detailData.posName }}</view>
          <view class="info_arrow_arrow"></view>
        </view>
      </view>

      <view class="info_card_underline"></view>

      <view class="info_card_item" @click="searchUpper(detailData.comName)">
        <view class="image_text">
          <image
            class="image_text_image_3"
            src="../../../static/img/professionalDetail/Group25.svg"
          ></image>
          <view class="image_text_text">公司</view>
        </view>
        <view class="info_arrow">
          <view class="info_arrow_text">{{ detailData.comName }}</view>
          <view class="info_arrow_arrow"></view>
        </view>
      </view>

      <view class="info_card_underline"></view>

      <view class="info_card_item">
        <view class="image_text">
          <image
            class="image_text_image_4"
            src="../../../static/img/professionalDetail/Group26.svg"
          ></image>
          <view class="image_text_text">学历</view>
        </view>
        <view class="info_arrow">
          <view class="info_arrow_text">{{ detailData.education }}</view>
          <view class="info_arrow_arrow"></view>
        </view>
      </view>

      <view class="info_card_underline"></view>

      <view class="info_card_bottom">
        <view class="info_card_bottom_date"
          >发布时间：{{ detailData.releaseTime }}</view
        >
        <view class="info_card_bottom_lookcount"
          >浏览量：{{ detailData.pageView }}</view
        >
      </view>
    </view>
	
	<view class="danger_box">
		<image class="danger_img" src="../../../static/img/common/danger.svg"></image>
		<view class="danger_text">各数据均来源于网络，仅供参考</view>
	</view>

    <view class="menmory_card">备注：</view>

    <view class="ad_card">广告区</view>

    <view class="comments_card">评论区</view>

    <view class="capsule">
      <view class="capsule_upper" @click="believeOprater(changeTide.believe)">
        <image
          class="capsule_upper_image"
          src="../../../static/img/professionalDetail/Vector15.svg"
        ></image>
        <view class="capsule_upper_text">真实可信</view>
      </view>

      <view
        class="capsule_lower"
        @click="believeOprater(changeTide.disbelieve)"
      >
        <image
          class="capsule_lower_image"
          src="../../../static/img/professionalDetail/Vector16.svg"
        ></image>
        <view class="capsule_lower_text">不真实</view>
      </view>
    </view>

    <view class="comments_box">
      <view class="input_box">
        <view class="input_box_shadow">
          <view class="pen_icon">
            <image
              class="vector_1"
              src="../../../static/img/professionalDetail/Vector6.svg"
            ></image>
            <image
              class="vector_2"
              src="../../../static/img/professionalDetail/Vector7.svg"
            ></image>
          </view>
          <view class="input_box_text">
            <input class="input" placeholder="我也要留言..." />
          </view>
        </view>
      </view>
      <view class="quantity">
        <view class="image">
          <image
            class="subtract"
            src="../../../static/img/professionalDetail/Subtract.svg"
            @click="likeCount"
          ></image>
        </view>
        <view class="quantity_num">{{ detailData.quantity }}</view>
      </view>
    </view>
  </view>
</template>

<script>
import { ref, reactive, onMounted } from "vue";
import sendPostRequest from "../../../utils/sendPostRequest.js";
import router from "../../../utils/route.js";

//测试变量导入
import { ENV } from "../../../config/MAKRDATA.js";
import {
  EMERGING_DETAIL,
  ORDINARY_DETAIL,
} from "../../../config/professionalDetailMock.js";

export default {
  props: {
    type: Number,
    id: Number,
  },
  setup(props) {
    onMounted(() => {
      search();
    });

    const type = ref(props.type);
    const id = ref(props.id);

    function search() {
      const data = {
        workId: id.value,
      };
      if (ENV !== "self") {
        sendPostRequest(
          type.value === 1
            ? router.ordinaryGetDetail
            : router.emergingGetDetail,
          data,
          {
            success(res) {
              if (res.message === "success") {
                operateData(res.data);
              }
            },
            fail() {},
          },
          true
        );
      } else {
        type.value === 1
          ? operateData(ORDINARY_DETAIL.data)
          : operateData(EMERGING_DETAIL.data);
      }
	  
	  // if(data.workId === id.value){
		 //  data.workId = 
	  // }
    }

    function operateData(data) {
      detailData.posName = data.post; //岗位
      detailData.posSalary = data.salaryStr; //字符串薪资
      detailData.comAddress = data.city?.cityName; //城市
      detailData.education = data.degree?.degreeName; //学历
      detailData.profession = data.profession?.professionName; //行业
      detailData.comName = data.company; //公司
      detailData.releaseTime = data.createTime; //发布时间
      detailData.explain = data.explain; //福利待遇
      detailData.pageView = data.lookCount; //浏览量
      detailData.quantity = data.likeCount; //点赞量
    }
    const detailData = reactive({
      posName: null,
      posSalary: null,
      comAddress: null,
      education: null,
      posType: null,
      comName: null,
      releaseTime: null,
      explain: null,
    });

    //跳转路由
    const routeOfPage = {
      ordinary: "../searchDetail/Ordinary/ordinary",
      emerging: "../searchDetail/Emerging/Emerging",
    };

    const searchUpper = (value) => {
		console.log("type",type.value)
      uni.redirectTo({
        url:
		  routeOfPage.ordinary +
          "?inputValue=" +
          value +
		  "&typeId=" +
		  type.value,
      });
    };

    //点赞
    const likeCount = () => {
      const like = {
        workId: id.value,
        likeType: "LIKE",
        workType: type.value === 1 ? "NORMAL" : "NEW",
      };
      sendPostRequest(
        router.updateLikeNum,
        like,
        {
          success(res) {
            console.log("resLike", res);
            if (res.message === "success") {
              console.log("LIke", res);
            } else {
            }
          },
          fail() {},
        },
        true
      );
    };

    //可信度
    const changeTide = {
      believe: "BELIEVE",
      disbelieve: "DISBELIEVE",
    };

    const believeOprater = (believe) => {
      const credibility = {
        workId: id.value,
        credibilityType: believe,
        workType: type.value === 1 ? "NORMAL" : "NEW",
      };

      sendPostRequest(
        router.credibilityOprater,
        credibility,
        {
          success(res) {
            if (res.message === "success") {
              console.log("credibility", res);
            } else {
            }
          },
          fail() {},
        },
        true
      );
    };

    return {
      changeTide,
      believeOprater,
      likeCount,
      searchUpper,
      type,
      id,
      operateData,
      detailData,
    };
  },
};
</script>

<style lang="scss">
.professionDetail {
  background: linear-gradient(
    180deg,
    #467eeb -19.26%,
    rgba(255, 255, 255, 0) 131.53%
  );
  box-sizing: border-box;
  width: 100vw;
  min-height: 100vh;
  padding: 20rpx 40rpx;

  .header_card {
    width: 678rpx;
    height: 222rpx;
    background: linear-gradient(
      90deg,
      rgba(31, 104, 248, 0.794338) 19.83%,
      rgba(110, 170, 251, 0.794338) 75.57%,
      rgba(155, 207, 253, 0.794338) 107.5%
    );
    border-radius: 36rpx;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    .header_card_after {
      width: 678rpx;
      height: 222rpx;
      background-image: url("~@/static/img/professionalDetail/Group24.svg");
      border-radius: 36rpx;

      .header_salary {
        display: flex;
        width: 500rpx;
        height: 135rpx;
        line-height: 130.48%;
        letter-spacing: 0.02em;
        color: #ffffff;
        margin-left: 30rpx;
        align-items: flex-end;

        .symbol {
          font-size: 40rpx;
          margin-bottom: 10rpx;
        }

        .salary {
          font-size: 60rpx;
          margin-bottom: 20rpx;
          margin-left: 20rpx;
        }

        .month {
          font-size: 40rpx;
          margin-bottom: 10rpx;
        }
      }

      .header_card_line {
        width: 540rpx;
        height: 0px;
        border: 1rpx solid #e2e5e9;
        margin-left: 30rpx;
      }

      .header_card_text {
        display: flex;
        color: white;
        margin-left: 30rpx;
        margin-top: 20rpx;
        font-size: 24rpx;

        .header_card_text_p {
        }

        .header_card_text_indus {
          margin-left: 20rpx;
        }
      }
    }
  }

  .info_card {
    width: 676rpx;
    height: 408rpx;
    background: #ffffff;
    box-shadow: 0px 8rpx 8rpx rgba(0, 0, 0, 0.25);
    border-radius: 20rpx;
    margin-top: 30rpx;

    .info_card_underline {
      width: 616rpx;
      height: 0px;
      border: 2rpx solid #d1d5da;
      margin-left: 30rpx;
    }

    .info_card_item {
      display: flex;
      height: 75rpx;
      width: 676rpx;
      align-items: flex-end;
      margin-bottom: 5rpx;

      .image_text {
        display: flex;
        justify-content: space-between;
        width: 110rpx;
        margin-left: 30rpx;
        .image_text_image_1 {
          width: 32rpx;
          height: 42rpx;
        }
        .image_text_image_2 {
          width: 22rpx;
          height: 46rpx;
          margin-left: 5rpx;
        }
        .image_text_image_3 {
          width: 34rpx;
          height: 40rpx;
        }
        .image_text_image_4 {
          width: 38rpx;
          height: 30rpx;
        }

        .image_text_text {
          width: 60rpx;
          font-family: "Microsoft YaHei";
          font-style: normal;
          font-weight: 400;
          font-size: 28rpx;
          line-height: 130.48%;
          letter-spacing: 0.02em;
          color: #6d6868;
        }
      }

      .info_arrow {
        display: flex;
        justify-content: space-between;
        width: 490rpx;
        margin-left: 20rpx;
        .info_arrow_text {
          font-family: "Microsoft YaHei";
          font-style: normal;
          font-weight: 400;
          font-size: 28rpx;
          line-height: 130.48%;
          letter-spacing: 0.02em;
          color: #4581ea;
        }
        .info_arrow_arrow {
          width: 20rpx;
          height: 20rpx;
          border: 2rpx solid #767575;
          transform: rotate(45deg);
          border-left: none;
          border-bottom: none;
        }
      }
    }
  }

  .info_card_bottom {
    display: flex;
    width: 616rpx;
    justify-content: space-between;

    .info_card_bottom_date {
      width: 308rpx;
      font-family: "Microsoft YaHei";
      font-style: normal;
      font-weight: 400;
      font-size: 24rpx;
      line-height: 130.48%;
      letter-spacing: 0.02em;
      color: #aeaeae;
      margin-left: 30rpx;
      margin-top: 20rpx;
    }

    .info_card_bottom_lookcount {
      font-family: "Microsoft YaHei";
      font-style: normal;
      font-weight: 400;
      font-size: 24rpx;
      line-height: 130.48%;
      letter-spacing: 0.02em;
      color: #aeaeae;
      margin-right: 40rpx;
      margin-top: 20rpx;
    }
  }
  .danger_box{
	display: flex;
	margin-top: 10rpx;
	margin-bottom: 10rpx;
	.danger_img{
	  width: 30rpx;
	  height: 30rpx;
	  margin-left: 20rpx;
	}
	
	.danger_text{
	  height: 20rpx;
	  left: 238rpx;
	  font-family: 'Microsoft YaHei';
	  font-style: normal;
	  font-weight: 400;
	  font-size: 20rpx;
	  letter-spacing: 0.02em;
	  color:white;
	  margin-left: 5rpx;
	
	}  
  }
  

  .menmory_card {
    width: 676rpx;
    height: 170rpx;
    background: #ffffff;
    box-shadow: 0px 8rpx 8rpx rgba(0, 0, 0, 0.25);
    border-radius: 20rpx;
    color: #767575;
  }

  .ad_card {
    width: 678rpx;
    height: 230rpx;
    background: #d9d9d9;
    box-shadow: 0px 8rpx 8rpx rgba(0, 0, 0, 0.25);
    border-radius: 20rpx;
    margin-top: 30rpx;
  }

  .comments_card {
    width: 676rpx;
    height: 506rpx;
    background: #ffffff;
    box-shadow: 0px 8rpx 8rpx rgba(0, 0, 0, 0.25);
    border-radius: 20rpx;
    margin-top: 30rpx;
  }

  .capsule {
    display: flex;
    width: 375rpx;
    justify-content: space-between;
    margin-top: 30rpx;
    margin-left: 296rpx;

    .capsule_upper {
      display: flex;
      width: 186rpx;
      height: 72rpx;
      background: #609bfc;
      box-shadow: 0px 2rpx 8rpx rgba(0, 0, 0, 0.25);
      border-radius: 36rpx;
      justify-content: space-evenly;
      align-items: center;

      .capsule_upper_image {
        width: 40rpx;
        height: 40rpx;
      }
      .capsule_upper_text {
        color: white;
        font-size: 24rpx;
      }
    }
    .capsule_lower {
      display: flex;
      width: 166rpx;
      height: 72rpx;
      background: #ff5959;
      box-shadow: 0px 2rpx 8rpx rgba(0, 0, 0, 0.25);
      border-radius: 36rpx;
      justify-content: space-evenly;
      align-items: center;
      .capsule_lower_image {
        width: 40rpx;
        height: 40rpx;
      }
      .capsule_lower_text {
        color: white;
        font-size: 24rpx;
      }
    }
  }

  .comments_box {
    display: flex;
    box-sizing: border-box;
    width: 750rpx;
    height: 104rpx;
    background: #ffffff;
    border-top: 2rpx solid #b4b4b4;
    margin-top: 30rpx;
    margin-left: -42rpx;
    margin-bottom: -20rpx;

    .input_box {
      display: flex;
      width: 600rpx;
      height: 104rpx;
      justify-content: center;
      align-items: center;

      .input_box_shadow {
        display: flex;
        width: 568rpx;
        height: 66rpx;
        background: rgba(234, 234, 234, 0.794338);
        border-radius: 44rpx;

        .pen_icon {
          display: flex;
          width: 70rpx;
          height: 66rpx;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          .vector_1 {
            width: 30rpx;
            height: 30rpx;
          }
          .vector_2 {
            width: 30rpx;
            height: 1rpx;
            margin-top: 5rpx;
          }
        }

        .input_box_text {
          width: 500rpx;
          height: 66rpx;

          .input {
            width: 500rpx;
            height: 66rpx;
          }
        }
      }
    }

    .quantity {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 150rpx;
      height: 104rpx;

      .image {
        width: 75rpx;

        .subtract {
          width: 50rpx;
          height: 46rpx;
        }
      }
      .quantity_num {
        width: 75rpx;
        color: #575757;
      }
    }
  }
}
</style>
