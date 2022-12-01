<template>
  <view class="professionPage">
    <view class="header">
      <image class="header_logo" src="../../../../static/logo.svg"></image>
    </view>

    <view class="header_list">
      <view
        class="headerTab"
        :class="{ headerTabLine: tabStatus === state.Normal }"
        @click="changePage(state.Normal)"
        >普通职业</view
      >
      <view
        class="headerTab"
        :class="{ headerTabLine: tabStatus === state.Emerging }"
        @click="changePage(state.Emerging)"
        >灵活职业</view
      >
    </view>

    <view class="content_search">
      <uni-easyinput
        v-model="sendInformation.information"
        placeholder="请输入公司名称/城市/岗位"
        @iconClick="search()"
        prefixIcon="search"
      ></uni-easyinput>
    </view>

    <view class="content_more">
      <view class="more_list" v-if="tabStatus === state.Normal">
        <view class="label">类型</view>
        <view class="label_underline"></view>
        <view class="list_scroll">
          <view class="sel_list">
            <view
              class="sel_item"
              :class="{ active: type.id === item.id ? true : false }"
              v-for="item in typeList"
              :key="item.id"
              @click="chooseType(item)"
              >{{ item.name }}</view
            >
          </view>
        </view>
      </view>

      <view class="more_list">
        <view class="label">城市</view>
        <view class="label_underline"></view>
        <view class="list_scroll">
          <view class="sel_list">
            <view
              class="sel_item"
              :class="{
                active: cityClassID.id === item.cityCode ? true : false,
              }"
              v-for="item in cityList"
              :key="item.cityCode"
              @click="chooseCity(item.cityCode)"
              >{{ item.city }}</view
            >
          </view>
        </view>
      </view>

      <view class="more_list" v-if="tabStatus === state.Emerging">
        <view class="label">月收入区间</view>
        <view class="label_underline"></view>
        <view class="input_salary">
          <view class="input_salary_prefix">
            <uni-easyinput
              type="number"
              class="input"
              v-model="sendInformation.dSalary"
              placeholder="最低工资"
            ></uni-easyinput>
            <view class="middle_dashed_line"></view>
            <uni-easyinput
              type="number"
              class="input"
              v-model="sendInformation.hSalary"
              placeholder="最高工资"
            ></uni-easyinput>
          </view>
        </view>
      </view>

      <view class="list_scroll" v-if="tabStatus === state.Emerging">
        <view class="sel_list_salary">
          <view
            class="sel_item_salary"
            :class="item.active"
            v-for="item in salaryList.data"
            :key="item.id"
            @click="chooseSalary(item.id)"
            >{{ item.name }}
          </view>
        </view>
      </view>

      <view class="more_list" v-if="tabStatus === state.Normal">
        <view class="label">行业</view>
        <view class="label_underline"></view>
        <view class="list_scroll">
          <view class="sel_list">
            <view
              class="sel_item"
              :class="{ active: jobClassID.id === item.id ? true : false }"
              v-for="item in jobList.data"
              :key="item.id"
              @click="chooseJob(item.id)"
              >{{ item.name }}</view
            >
          </view>
        </view>
      </view>

      <view class="content_table">
        <view class="label_underline"></view>
        <view class="table_sel_list">
          <view
            v-for="item in selSortTypeItem"
            :key="item.order"
            class="sel_item"
            :class="{ seled_item: tabTarget.order === item.order }"
            @click="changeTabTarget(item.order)"
            >{{ item.sortType }}</view
          >
        </view>
        <view v-for="item in detail.data" :key="item.id" class="searchItem">
          <searchItem :detail="item" :type="1"></searchItem>
        </view>
      </view>

      <view class="back_to_top" @click="backToTop" v-if="flag.visible === true">
        <image
          class="back_to_top_icon"
          src="../../../../static/img/ordinary/icon.svg"
        ></image>
      </view>
    </view>
  </view>
</template>

<script>
import { ref, reactive, toRaw, onMounted } from "vue";
import { onPageScroll } from "@dcloudio/uni-app";
import searchItem from "../common/searchItem.vue";
import TYPE_LIST from "../../../config/typeData.js";
import { SCREEN_CITY } from "../../../config/configData.js";
import { addHotCity } from "../../../utils/cityListTools.js";
import { JOB_LIST, selSortType, SALARY_LIST } from "./constants.js";
import sendPostRequest from "../../../utils/sendPostRequest.js";
import router from "../../../utils/route.js";
// import { getPopCityList } from "../../../utils/cityListTools.js";

//测试导入
import { ORDINARY, ENV } from "../../../config/MAKRDATA.js";

export default {
  components: {
    searchItem
  },
  props: {
    inputValue: String,
    target: String,
    typeId: String
  },
  setup(props) {
    onMounted(() => {
      // search();
      changePage(props.target || props.typeId);
    });
    //页面切换
    const state = reactive({
      Normal: "normal",
      Emerging: "emerging",
    });
    const tabStatus = ref(props.target);
    const changePage = (value) => {
      tabStatus.value = value;
      search();
    };

    const detail = reactive({
      data: [],
    });
    const selSortTypeItem = selSortType;
    const tabTarget = reactive({
      order: "",
    });

    //发送信息对象
    console.log("inputAccie", props.inputValue);
    const sendInformation = reactive({
      information: props.inputValue,
      cityIds: [],
      typeIds: [],
      professionIds: [],
      order: "",
      dSalary: null,
      hSalary: null,
    });

    //薪资
    const chooseSalary = (salaryId) => {
      switch (salaryId) {
        case 1:
          sendInformation.dSalary = 0;
          sendInformation.hSalary = 5000;
          break;
        case 2:
          sendInformation.dSalary = 5000;
          sendInformation.hSalary = 10000;
          break;
        case 3:
          sendInformation.dSalary = 10000;
          sendInformation.hSalary = 15000;
          break;
        case 4:
          sendInformation.dSalary = 15000;
          sendInformation.hSalary = null;
          break;
      }
    };

    //排序
    const changeTabTarget = (target = "") => {
      if (tabTarget.order === target) return;
      tabTarget.order = target;
      sendInformation.order = target;
      search();
    };

    //筛选
    function chooseType(typeInfo) {
      if (type.id !== typeInfo.id) {
        if (sendInformation.typeIds.length === 1) {
          sendInformation.typeIds = [];
        }
        sendInformation.typeIds.push(typeInfo.id);
        type.id = typeInfo.id;
        search();
      } else {
        type.id = 0;
        sendInformation.typeIds = [];
        search();
      }
    }

    function chooseCity(cityCode) {
      if (cityClassID.id !== cityCode) {
        if (sendInformation.cityIds.length === 1) {
          sendInformation.cityIds = [];
        }
        sendInformation.cityIds.push(cityCode);
        cityClassID.id = cityCode;
        search();
      } else {
        cityClassID.id = 0;
        sendInformation.cityIds = [];
        search();
      }
    }

    function chooseJob(jobId) {
      if (jobClassID.id !== jobId) {
        if (sendInformation.professionIds.length === 1) {
          sendInformation.professionIds = [];
        }
        sendInformation.professionIds.push(jobId);
        jobClassID.id = jobId;
        search();
      } else {
        jobClassID.id = 0;
        sendInformation.professionIds = [];
        search();
      }
    }

    const type = reactive({ id: 0 });
    const typeList = reactive(TYPE_LIST);

    const cityClassID = reactive({ id: 0 });
    const cityList = reactive(addHotCity(SCREEN_CITY));

    const jobClassID = reactive({ id: 0 });
    const jobList = reactive(JOB_LIST);

    const salaryList = reactive(SALARY_LIST);

    //搜索操作
    const data = {
      currentPage: 1,
      pageSize: 500,
    };
    function search() {
      uni.showLoading({
        title: "加载中",
      });

      detail.data = [];
      if (sendInformation.information) {
        data.information = sendInformation.information;
      } else {
        data.information = "";
      }
      if (tabTarget.order) data.order = sendInformation.order;
      if (sendInformation.cityIds.length !== 0) {
        data.cityIds = sendInformation.cityIds;
      } else {
        delete data.cityIds;
      }
      if (sendInformation.typeIds.length !== 0) {
        data.typeIds = sendInformation.typeIds;
      } else {
        delete data.typeIds;
      }
      //  if(sendInformation.dSalary !== null && sendInformation.hSalary !== null)
      //    data.hSalary = sendInformation.hSalary;
      // data.dSalary = sendInformation.dSalary;
      if (sendInformation.professionIds.length !== 0) {
        data.professionIds = sendInformation.professionIds;
      } else {
        delete data.professionIds;
      }

      if (ENV !== "self") {
        sendPostRequest(
          tabStatus.value === state.Normal
            ? router.ordinaryGetActicleList
            : router.emergingGetActicleList,
          data,
          {
            success(res) {
              if (res.message === "success") {
                uni.hideLoading();
                operateData(res.data.data);
              } else {
                uni.hideLoading();
                uni.showModal({
                  content: "未找到数据，请重试！",
                  showCancel: false,
                });
                console.log(11111111)
              }
            },
            fail() {
              if (ENV !== "self") {
                uni.hideLoading();
                operateData(ORDINARY.data.data);
              }
            },
          },
          true
        );
      } else {
        uni.hideLoading();
        operateData(ORDINARY.data.data);
      }
    }

    function operateData(info) {
      detail.data = [];
      Array.isArray(info) &&
        info.forEach((item) => {
          detail.data.push(item);
        });
    }

    //回到顶部按钮
    const backToTop = () => {
      uni.pageScrollTo({
        scrollTop: 0,
        duration: 100,
      });
    };
    const flag = reactive({
      visible: false,
    });
    onPageScroll((e) => {
      if (e.scrollTop > 200) {
        flag.visible = true;
      } else {
        flag.visible = false;
      }
    });

    return {
      search,
      salaryList,
      chooseSalary,
      tabStatus,
      flag,
      type,
      cityClassID,
      jobClassID,
      changePage,
      selSortTypeItem,
      sendInformation,
      detail,
      chooseType,
      chooseCity,
      chooseJob,
      typeList,
      cityList,
      jobList,
      tabTarget,
      changeTabTarget,
      backToTop,
      state,
    };
  },
};
</script>

<style scoped lang="scss">
.professionPage {
  box-sizing: border-box;
  background: linear-gradient(
    90.57deg,
    #457dea 15.49%,
    rgba(93, 178, 248, 0.794338) 88.26%,
    rgba(197, 216, 248, 0.7) 119.2%
  );
  width: 100%;
  min-height: 100vh;
  padding: 20rpx;

  .header {
    display: flex;
    width: 190rpx;
    height: 190rpx;
    margin: 0 auto;
    border-radius: 50%;
    margin-bottom: 20rpx;

    .header_logo {
      width: 190rpx;
      height: 190rpx;
    }
  }

  .header_list {
    font-size: 30rpx;
    display: flex;
    align-items: center;
    margin: 0 auto;
    color: #fff;
    width: 400rpx;
    margin-bottom: 20rpx;

    .headerTab {
      margin: 0 40rpx;
      box-sizing: border-box;
      padding: 20rpx 0;
    }

    .headerTabLine {
      border-bottom: 4rpx solid #fff;
      border-radius: 5%;
    }
  }

  .content_search {
    border-radius: 34rpx;
    background-color: #fff;
    overflow: hidden;
    margin-bottom: 20rpx;
  }

  .content_more {
    box-sizing: border-box;
    width: 100%;
    padding: 20rpx;
    padding-bottom: 5rpx;
    border-radius: 10rpx;
    box-shadow: 0px 0px 60rpx rgba(0, 0, 0, 0.2);
    background-color: #fff;

    .more_list {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      margin-top: 15rpx;
      overflow: scroll;

      .label {
        margin-left: 15rpx;
        font-size: 24rpx;
        color: gray;
        margin: 10rpx;
      }

      .label_underline {
        width: 630rpx;
        height: 0px;
        border: 2rpx solid #e2e5e9;
        margin-left: 10rpx;
        margin-bottom: 10rpx;
      }

      .input_salary {
        display: flex;
        align-items: center;
        margin-left: 10rpx;

        .input_salary_prefix {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 500rpx;
        }
        .input_salary_suffix {
          display: flex;
          width: 134rpx;
          line-height: 60rpx;
          border: 1rpx solid #5e95ee;
          border-radius: 42rpx;
          color: #5e95ee;
          text-align: center;
          margin-left: 20rpx;
          align-items: center;
        }
        .input {
          width: 206rpx;
          height: 72rpx;
        }

        .middle_dashed_line {
          width: 32rpx;
          height: 0px;
          border: 2rpx solid #c4c4c4;
        }

        .year-month {
          width: 100rpx;
          height: 60rpx;
        }

        .suffix_image {
          width: 24rpx;
          height: 24rpx;
        }
      }
    }

    .list_scroll {
      width: 100%;
      box-sizing: border-box;
      overflow-x: scroll;

      .sel_list_salary {
        display: flex;
        margin-top: 20rpx;
        align-items: center;
        font-size: 28rpx;
        justify-content: space-around;

        .sel_item_salary {
          flex-shrink: 0;
          width: 120rpx;
          text-align: center;
          padding: 10rpx;
          border: 1rpx solid #5e95ee;
          border-radius: 38rpx;
          margin-right: 10rpx;
          background: linear-gradient(
            90deg,
            #4581ea -43.1%,
            rgba(93, 178, 248, 0.794338) 191.38%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-emphasis-color: transparent;
        }
      }

      .sel_list {
        display: flex;
        margin-top: 10rpx;
        align-items: center;
        font-size: 28rpx;

        .sel_item {
          flex-shrink: 0;
          width: 100rpx;
          text-align: center;
          padding: 10rpx;
          border: 1rpx solid #5e95ee;
          color: #5e95ee;
          border-radius: 20rpx;
          margin-right: 30rpx;
          margin-left: 10rpx;
        }

        .active {
          color: white;
          background-color: #5e95ee;
        }
      }
    }

    .list_scroll::-webkit-scrollbar {
      display: none;
    }

    .more_line {
      margin-top: 20rpx;
      border: 2rpx solid rgba(0, 0, 0, 0.06);
      border-radius: 10%;
    }

    .content_table {
      .label_underline {
        width: 630rpx;
        height: 0px;
        border: 2rpx solid #e2e5e9;
        margin-left: 10rpx;
        margin-top: 20rpx;
        margin-bottom: 10rpx;
      }

      .table_sel_list {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 40rpx;

        .sel_item {
          width: 170rpx;
          height: 42rpx;
          padding: 10rpx 0;
          margin: 0 20rpx;
          font-size: 28rpx;
          color: #d1d5da;
        }

        .seled_item {
          padding: 10rpx 0;
          margin: 0 20rpx;
          color: #6a758b;
          width: 217rpx;
          height: 42rpx;
          background: #eef4fa;
          border-radius: 50px;
          text-align: center;
        }
      }

      .searchItem {
        margin: 20rpx 0;
      }
    }
  }

  .back_to_top {
    position: fixed;
    width: 60rpx;
    height: 60rpx;
    border-radius: 50%;
    right: 40rpx;
    font-size: 23rpx;
    text-align: center;
    bottom: 80rpx;
    background: cornflowerblue;

    .back_to_top_icon {
      width: 60rpx;
      height: 30rpx;
      margin-top: 16rpx;
    }
  }
}
</style>
