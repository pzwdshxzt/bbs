<template id="child-map">
  <div id="allmap" :style="style">
    <div id="c">
    </div>
    <div  id="d">
    <input v-model:value="startLocal" />
    <input v-model:value="endingLocal"/>
    <button name="提交" />
    <input/>  
  </div>
  </div>
</template>

<script>
export default {
  props: ["m"],
  data:{
      map:null,
      startLocal:'',
      endingLocal:''
  },
  mounted() {
    this.map = new BMap.Map("allmap");
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 18); // 初始化地图,设置中心点坐标和地图级别
    //添加地图类型控件
    // map.addControl(
    //   new BMap.MapTypeControl({
    //     mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
    //   })
    // );
    // map.setCurrentCity("北京"); // 设置地图显示的城市 此项是必须设置的
    // map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
    var map = new BMap.Map("allmap");
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 14);
    map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
    map.addControl(new BMap.NavigationControl());
    map.addControl(new BMap.ScaleControl());
    map.addControl(new BMap.OverviewMapControl());

    var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function(r) {
      if (this.getStatus() == BMAP_STATUS_SUCCESS) {
        var mk = new BMap.Marker(r.point);
        map.addOverlay(mk);
        map.panTo(r.point);
      } else {
        console.log("failed" + this.getStatus());
      }
    });

    // 全景控件
    // var stCtrl = new BMap.PanoramaControl();
    // stCtrl.setOffset(new BMap.Size(20, 20));
    // map.addControl(stCtrl);

    
  },
  methods: {
    driving(){
    var driving = new BMap.DrivingRoute(this.map, {
      renderOptions: {
        map: this.map,
        autoViewport: true
      }
    });
    driving.search(this.startLocal, this.endingLocal);
    }
  }
};
</script>

<style type="text/css">
body,
html,
#c {
  width: 100%;
  height: 1320px;
  overflow: hidden;
  margin: 0;
  font-family: "微软雅黑";
}
</style>