<template>
  <view class="search_card_item" @click="enterDetail">
    <view class="item_label">
      <view class="posName">{{ information.posName }}</view>
      <view class="posSalary">
        <span class="num">{{ information.posSalary }}</span>
        <span class="unit">/月</span>
      </view>
    </view>

    <view class="item_content">
      <image class="company_logo" src="../../../static/logo.svg"></image>
      <view class="comName">{{ information.comName }}</view>
    </view>

    <view class="item_address">
      <view class="comAddress">{{ information.comAddress }}</view>
	  <image class="danger_img" src="../../../static/img/common/danger.svg"></image>
	  <view class="danger_text">各数据均来源于网络，仅供参考</view>
    </view>
	

    <view class="item_more">
      <view class="item_more_left">
        <view class="more_item">可信度:</view>
        <view class="more_item_text">{{ information.credibility }}</view>
      </view>
      <view class="item_more_left">
        <view class="more_item">点赞量:</view>
        <view class="more_item_text">{{ information.quantity }}</view>
      </view>
      <view class="item_more_left">
        <view class="more_item">发布时间:</view>
        <view class="more_item_text">{{ information.releaseTime }}</view>
      </view>
    </view>
  </view>
</template>

<script>
import { reactive } from "vue";
export default {
  props: {
    detail: Object,
    type: Number,
  },
  setup(props) {
    const information = reactive({
      comName: props.detail.company,
      comAddress: props.detail.city.cityName,
      posName: props.detail.post,
      posSalary: props.detail.salaryStr,
      credibility: props.detail.credibility,
      quantity: props.detail.likeCount,
      releaseTime: props.detail.createTime,
    });
    //查看详情
    const enterDetail = () => {
      uni.navigateTo({
        url:
          "/pages/Professional/professionalDetail/professionalDetail?type=" +
          props.type +
          "&id=" +
          props.detail.id,
      });
    };
    return {
      enterDetail,
      information,
    };
  },
};
</script>

<style lang="scss" scoped>
.search_card_item {
  box-sizing: border-box;
  width: 100%;
  padding: 20rpx;
  border: 1rpx solid transparent;
  border-radius: 30rpx;
  box-shadow: 0px 0px 15rpx rgba(0, 0, 0, 0.2);

  .item_label {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .posName {
      font-family: "Microsoft YaHei";
      font-style: normal;
      font-weight: 400;
      font-size: 34rpx;
      line-height: 135.48%;
      letter-spacing: 0.02em;
      color: #3a3b3d;
    }

    .posSalary {
      .num {
        font-family: "Microsoft YaHei";
        font-style: normal;
        font-weight: 400;
        font-size: 34rpx;
        line-height: 135.48%;
        letter-spacing: 0.02em;
        color: #f87933;
      }

      .unit {
        font-family: "Microsoft YaHei";
        font-style: normal;
        font-weight: 400;
        font-size: 34rpx;
        line-height: 135.48%;
        letter-spacing: 0.02em;
        color: #f87933;
      }
    }
  }

  .item_address {
	  display: flex;
    .comAddress {
	  width: 130rpx;
	  height: 29rpx;
	  background: #f4f6f9;
	  border-radius: 10rpx;
      font-family: "Microsoft YaHei";
      font-style: normal;
      font-weight: 400;
      font-size: 16rpx;
      line-height: 135.48%;
      letter-spacing: 0.02em;
      color: #767575;
      text-align: center;
      margin-top: 5rpx;
      padding-top: 5rpx;
    }
	
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
	  color: #B5B5B7;
	  margin-left: 5rpx;
	
	}
  }

  .item_content {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 15rpx 10rpx;
    font-size: 38rpx;

    .comName {
      font-family: "Microsoft YaHei";
      font-style: normal;
      font-weight: 400;
      font-size: 26rpx;
      line-height: 135.48%;
      letter-spacing: 0.02em;
      color: #b8b8b8;
      margin-left: 20rpx;
    }

    .company_logo {
      width: 38rpx;
      height: 38rpx;
      border-radius: 12rpx;
    }
  }

  .item_more {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10rpx;

    .item_more_left {
      display: flex;
      align-items: center;
      width: 400rpx;
      font-family: "Microsoft YaHei";
      font-style: normal;
      font-weight: 400;
      font-size: 16rpx;
      line-height: 135.48%;
      letter-spacing: 0.02em;
      color: #c5c5c5;

      .more_item {
        margin-right: 15rpx;
      }
    }
  }
}
</style>
