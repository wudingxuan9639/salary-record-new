<template>
  <view class="releaseProfessional">
    <view class="header">
      <image class="image" src="../../static/logo.svg"></image>
    </view>

    <view class="header_list">
      <view
        class="header_tab"
        :class="{ header_tab_line: tabStatus === 1 }"
        @click="changeTab(1)"
        >普通职业
      </view>
      <view
        class="header_tab"
        :class="{ header_tab_line: tabStatus === 2 }"
        @click="changeTab(2)"
        >灵活职业
      </view>
    </view>

    <view class="input_square">
      <view class="info_item_class1">
        <view v-if="tabStatus === 2" class="label">公司</view>
        <view v-if="tabStatus === 1" class="label"
          >公司<span class="required_label">*</span></view
        >
        <view class="inp">
          <uni-easyinput
            v-model="company"
            :placeholder="
              tabStatus === 1 ? '请输入公司名称' : '快递公司/美团/抖音'
            "
            :styles="styles"
          >
          </uni-easyinput>
          <view class="input_underline"></view>
        </view>
      </view>

      <view class="info_item_class1">
        <view class="label">岗位<span class="required_label">*</span></view>
        <view class="inp">
          <uni-easyinput
            v-model="job"
            :placeholder="
              tabStatus === 1 ? '输入岗位名称' : '外卖/快递/直播/网约车'
            "
            :styles="styles"
          >
          </uni-easyinput>
          <view class="input_underline"></view>
          <view class="fill_button" v-if="tabStatus === 2">
            <view
              class="item_button"
              v-for="item in buttonList"
              :key="item.id"
              @click="quickFill(item.id)"
              >{{ item.value }}</view
            >
          </view>
        </view>
      </view>

      <view class="info_item_class1">
        <view class="label">薪资描述<span class="required_label">*</span></view>
        <view class="inp">
          <uni-easyinput
            v-model="salary"
            placeholder="如:28W或者14*13"
            :styles="styles"
          >
          </uni-easyinput>
          <view class="input_underline"></view>
        </view>
      </view>

      <view class="info_item_class3" v-if="tabStatus === 1">
        <view class="label">类型<span class="required_label">*</span></view>
        <view class="inp">
          <view class="type_list">
            <view
              class="type_item"
              v-for="item in typelist"
              :key="item.id"
              :class="{ sel_item: selType.id === item.id }"
              @click="changeSelType(item.id)"
            >
              {{ item.name }}
            </view>
          </view>
        </view>
      </view>

      <view class="info_item_class4" v-if="tabStatus === 1">
        <view class="label">学历</view>
        <picker
          @change="changeEducation"
          value="3"
          :range="eduList"
          range-key="degreeName"
        >
          <view class="inp_class4">
            <view class="sel_education">
              {{ selEducation.name }}
            </view>
            <view class="arrow_area"></view>
          </view>
        </picker>
        <view class="input_underline"></view>
      </view>

      <view class="info_item_class4" v-if="tabStatus === 1">
        <view class="label">行业</view>
        <picker
          @change="changeIndustry"
          :range="induList"
          range-key="professionName"
        >
          <view class="inp_class4">
            <view class="sel_education">
              {{ selIndustry.name }}
            </view>
            <view class="arrow_area"></view>
          </view>
        </picker>
        <view class="input_underline"></view>
      </view>

      <view class="info_item_class4">
        <view class="label">城市<span class="required_label">*</span></view>
        <navigator url="../Professional/common/switchCity/switchCity">
          <view class="inp_class4">
            <view type="default" class="label">{{
              storeCity.defaultCity
            }}</view>
            <view class="arrow_area"></view>
          </view>
        </navigator>
        <view class="input_underline"></view>
      </view>

      <view class="info_item_class5">
        <view class="label">备注</view>
        <view class="inp_class5">
          <uni-easyinput
            type="textarea"
            v-model="job_note"
            placeholder="可填写工作详细信息,如福利补贴,福利待遇等"
            :styles="styles"
          >
          </uni-easyinput>
        </view>
      </view>

      <view class="info_item_class6">
        <view class="detailTitle">
          <view class="instructions_label">说明</view>
          <icon type="info" color="red" size="30rpx" @click="showDetail"></icon>
        </view>
        <view class="instructions_text"> 严禁发布不良信息，违法必究 </view>
      </view>

      <view class="release_botton" @click="submit">点击发布</view>

      <view class="bottom"></view>
    </view>
  </view>
</template>

<script>
import { ref, reactive, onMounted } from "vue";
import sendPostRequest from "../../utils/sendPostRequest.js";
import { EDU_LIST, INDU_LIST, BUTTON_LIST } from "./constants.js";
import TYPE_LIST from "../../config/typeData.js";
import router from "../../utils/route.js";
import store from "../../store/index.js";

//环境控制变量
import { ENV } from "../../config/MAKRDATA.js";

export default {
  setup() {
    //清空页面信息
    const clearPage = () => {
      company.value = "";
      job.value = "";
      store.commit("clearCity");
      salary.value = null;
      dSalary.value = "";
      hSalary.value = "";
      selIndustry.name = "请选择行业";
      job_note.value = "";
    };
    //切换tab
    const tabStatus = ref(1);
    const changeTab = (data) => {
      if (
        company.value !== "" ||
        job.value !== "" ||
        job_note.value !== "" ||
        dSalary.value !== "" ||
        hSalary.value !== "" ||
        selIndustry.name !== "请选择行业" ||
        salary.value !== null ||
        storeCity.defaultCity !== "北京市"
      ) {
        uni.showModal({
          content: "此操作会清空已输入信息，确定吗？",
          success(res) {
            if (res.confirm) {
              clearPage();
              tabStatus.value = data;
            }
          },
        });
      } else {
        clearPage();
        tabStatus.value = data;
      }
    };

    //样式变量
    const styles = {
      borderColor: "white",
    };

    //公司
    const company = ref("");

    //岗位
    const job = ref("");

    //填充按钮
    const buttonList = reactive(BUTTON_LIST);
    const quickFill = (ID) => {
      job.value = buttonList[ID - 1].value;
    };

    //城市
    const storeCity = store.state.city;

    //薪资
    const salary = ref(null);

    //薪资范围
    const dSalary = ref("");
    const hSalary = ref("");

    //类型
    const typelist = TYPE_LIST;
    const selType = reactive({
      id: 1,
      name: "",
    });
    const changeSelType = (data) => {
      selType.id = data;
    };

    //学历
    const selEducation = reactive({
      id: 0,
      name: "请选择学历",
    });
    let eduList = reactive([]);
    if (ENV !== "self") {
      sendPostRequest(
        router.getAllDegere,
        {},
        {
          success(res) {
            if (res.message === "success") {
              res.data.forEach((item) => {
                eduList.push(item);
              });
            } else {
            }
          },
          fail() {},
        },
        true
      );
    } else {
      eduList = EDU_LIST;
    }

    function changeEducation(e) {
      selEducation.name = eduList[e.detail.value].degreeName;
      selEducation.id = eduList[e.detail.value].id;
    }

    //行业
    const selIndustry = reactive({
      id: 0,
      name: "请选择行业",
    });
    let induList = reactive([]);
    if (ENV !== "self") {
      const data = {
        type: tabStatus.value === 1 ? "NORMAL" : "NEW",
      };
      sendPostRequest(
        router.getAllProfession,
        data,
        {
          success(res) {
            if (res.message === "success") {
              res.data.forEach((item) => {
                induList.push(item);
              });
            } else {
            }
          },
          fail() {},
        },
        true
      );
    } else {
      induList =
        tabStatus.value === 1 ? INDU_LIST.ordinary : INDU_LIST.emerging;
    }
    function changeIndustry(e) {
      selIndustry.name = induList[e.detail.value].professionName;
      selIndustry.id = induList[e.detail.value].id;
    }

    //待遇
    const job_note = ref("");

    //
    function showDetail() {
      uni.showModal({
        content:
          "严禁发布不良信息，违法必究\r\r\n所有数据未经允许不得盗用，侵权必究\r\n信息均为用户自愿共享发布\r\n希望大家能自觉遵守声明",
        showCancel: false,
      });
    }

    //发布
    function submit() {
      if (company.value === "" || salary.value === "") {
        uni.showModal({
          content: "请填完带*的选项",
          showCancel: false,
        });
        return;
      }

      //进行提交操作
      if (tabStatus.value === 1) {
        uni.showModal({
          content: "你确定要提交吗？",
          success(res) {
            if (res.confirm) {
              let sendInformation = {
                company: company.value,
                post: job.value,
                city: storeCity.defaultCityID,
                salaryNUm: parseInt(salary.value),
                salaryStr: salary.value,
                salaryRange: dSalary.value + hSalary.value,
                type: tabStatus.value === 1 ? selType.id : 0, //0为选择灵活职业时的类型代码
                degree: selEducation.id,
                profession: selIndustry.id,
                openid: "53de05c8582341ad9a8a967f4baf00bc",
                from: "WEI_XIN",
                explain: job_note.value,
              };
              sendPostRequest(
                router.ordinaryPublish,
                sendInformation,
                {
                  success() {
                    uni.showModal({
                      content: "提交成功！",
                      showCancel: false,
                    });
                  },
                  fail() {},
                },
                true
              );
            } else if (res.cancel) {
              return;
            }
          },
        });
      } else {
        uni.showModal({
          content: "你确定要提交吗？",
          success(res) {
            if (res.confirm) {
              let sendInformation = {
                company: company.value,
                post: job.value,
                city: storeCity.defaultCityID,
                salaryNUm: parseInt(salary.value),
                salaryStr: salary.value,
                salaryRange: dSalary.value + hSalary.value,
                profession: selIndustry.id,
                openid: "53de05c8582341ad9a8a967f4baf00bc",
                from: "WEI_XIN",
                explain: job_note.value,
              };
              sendPostRequest(
                router.emergingPublish,
                sendInformation,
                {
                  success() {
                    uni.showModal({
                      content: "提交成功！",
                      showCancel: false,
                    });
                  },
                  fail() {},
                },
                true
              );
            } else if (res.cancel) {
              return;
            }
          },
        });
      }
    }

    onMounted(() => {
      //getIndexedList()
    });
    return {
      quickFill,
      buttonList,
      styles,
      dSalary,
      hSalary,
      storeCity,
      salary,
      company,
      job,
      tabStatus,
      changeTab,
      typelist,
      job_note,
      selType,
      changeSelType,
      selEducation,
      selIndustry,
      changeEducation,
      changeIndustry,
      submit,
      showDetail,
      eduList,
      induList,
    };
  },
};
</script>

<style lang="scss" scoped>
.releaseProfessional {
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  padding: 20rpx;
  background: linear-gradient(
    81.13deg,
    #457dea 18.47%,
    rgba(93, 178, 248, 0.794338) 96.22%,
    rgba(197, 216, 248, 0.7) 125.81%
  );

  .header {
    display: flex;
    width: 190rpx;
    height: 190rpx;
    margin: 0 auto;
    border-radius: 50%;

    .image {
      width: 190rpx;
      height: 190rpx;
    }
  }

  .header_list {
    font-size: 24rpx;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 auto;
    color: #fff;
    width: 363rpx;

    .header_tab {
      margin: 0 40rpx;
      box-sizing: border-box;
      padding: 20rpx 0;
    }

    .header_tab_line {
      border-bottom: 4rpx solid #fff;
      border-radius: 5%;
    }
  }

  .input_square {
    background: #ffffff;
    border-radius: 76rpx 76rpx 0px 0px;
    margin-bottom: -20rpx;

    .label {
      font-size: 30rpx;
      margin: 10rpx;
      color: gray;
      padding-left: 15rpx;
    }

    .required_label {
      color: red;
      margin-right: 5rpx;
    }

    .input_underline {
      width: 600rpx;
      border: 2rpx solid #d1d5da;
      margin-left: 20rpx;
    }

    .fill_button {
      display: flex;

      .item_button {
        flex-shrink: 0;
        width: 100rpx;
        text-align: center;
        padding: 10rpx;
        border: 1rpx solid #5e95ee;
        color: #5e95ee;
        border-radius: 20rpx;
        margin-top: 10rpx;
        margin-left: 20rpx;
      }
    }

    .info_item_class1 {
      margin-bottom: 30rpx;
      margin-top: 30rpx;
      padding: 20rpx;

      .inp {
      }
    }

    .info_item_class2 {
      margin-bottom: 30rpx;
      margin-top: 30rpx;
      padding: 20rpx;
      .inp {
        .box_sort {
          display: flex;
          justify-content: space-around;
          .inputbox {
            width: 250rpx;
            border: 2rpx solid #d1d5da;
            border-radius: 12rpx;
          }
          .dashed_line {
            height: 0rpx;
            width: 80rpx;
            border: 2rpx dashed #d1d5da;
            align-self: center;
          }
        }
      }
    }

    .info_item_class3 {
      margin-bottom: 30rpx;
      margin-top: 30rpx;
      padding: 20rpx;

      .type_list {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 20rpx auto;

        .type_item {
          margin: 0 10rpx;
          flex: 1;
          display: flex;
          justify-content: center;
          font-size: 22rpx;
          padding: 15rpx 0;
          border: 1rpx solid rgba(0, 0, 0, 0.1);
          border-radius: 10rpx;
          color: gray;
        }

        .sel_item {
          border-color: #5e95ee;
          color: #5e95ee;
        }
      }
    }

    .info_item_class4 {
      margin-bottom: 30rpx;
      margin-top: 30rpx;
      padding: 20rpx;

      .inp_class4 {
        display: flex;
        justify-content: space-between;

        .sel_education {
          background: #fff;
          color: gray;
          font-size: 28rpx;
          padding: 0 20rpx;
          margin-top: 20rpx;
          margin-bottom: 10rpx;
          margin-left: 2rpx;
        }

        .arrow_area {
          width: 20rpx;
          height: 20rpx;
          border-top: 2rpx solid #d0d0d0;
          border-right: 2rpx solid #d0d0d0;
          transform: rotate(45deg);
          margin-right: 54rpx;
          margin-top: 28rpx;
        }
      }
    }

    .info_item_class5 {
      margin-bottom: 30rpx;
      margin-top: 30rpx;
      padding: 20rpx;

      .inp_class5 {
        width: 600rpx;
        height: 200rpx;
        border: 2rpx solid #d1d5da;
        border-radius: 12rpx;
        margin-top: 20rpx;
        margin-left: 20rpx;
      }
    }

    .info_item_class6 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 600rpx;
      height: 168rpx;
      margin-bottom: 30rpx;
      margin-top: 30rpx;
      margin-left: 40rpx;
      padding-top: 10rpx;
      border: 2rpx solid #d1d5da;
      box-shadow: 0px 10rpx 16rpx #e0e4ea;
      border-radius: 12rpx;

      .detailTitle {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: baseline;
        background: #fcfcfc;

        .instructions_label {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 40rpx;
          color: gray;
          margin: 10rpx 0;
          margin-right: 20rpx;
        }
      }

      .instructions_text {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30rpx;
        color: gray;
        margin: 30rpx 0;
      }
    }

    .release_botton {
      width: 600rpx;
      height: 96rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 40rpx;
      color: #fff;
      border: 2rpx solid #fff;
      background: #4581ea;
      border-radius: 12rpx;
      margin-left: 40rpx;
    }

    .bottom {
      height: 30rpx;
    }
  }
}
</style>
