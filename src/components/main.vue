<template>
  <div class="bodysty">
	  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
	    <van-swipe-item class="lun1"></van-swipe-item>
	    <van-swipe-item class="lun2">2</van-swipe-item>
	    <van-swipe-item class="lun3">3</van-swipe-item>
	    <van-swipe-item class="lun4">4</van-swipe-item>
	  </van-swipe>
  </div>
</template>
<style>
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
  .bodysty{
	  height: 100%;
  }
  .my-swipe{
	  position: absolute;left: 0;top: 50;
	  width: 100%;
	  height: auto;
  }
  .lun2{
  	  width: 100%;
  	  height: auto;
  	  background-image: url(../assets/lunbo/img002.png);
  	  background-size: 100%;
  	  background-position: 0;
  }
  .lun3{
  	  width: 100%;
  	  height: auto;
  	  background-image: url(../assets/lunbo/img003.png);
  	  background-size: 100%;
  	  background-position: 0;
  }
  .lun4{
  	  width: 100%;
  	  height: auto;
  	  background-image: url(../assets/lunbo/img004.png);
  	  background-size: 100%;
  	  background-position: 0;
  }
  .lun1{
  	  width: 100%;
  	  height: auto;
  	  background-image: url(../assets/lunbo/img001.png);
  	  background-size: 100%;
  	  background-position: 0;
  }
</style>



