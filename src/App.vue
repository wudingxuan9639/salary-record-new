<script>
import {finalUsedCityList} from "../src/utils/cityListTools"
export default {
  onLaunch: function () {
    finalUsedCityList()
  },
  onShow: function () {
    wx.hideHomeButton();
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
}
</script>

<style>
/*每个页面公共css */
</style>
