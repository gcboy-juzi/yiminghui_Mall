<template>

<div class="ll" >
  <div class="pi1"><img src="@/assets/yyt.png" width="210" height="120"></div>
<div class="pi">

   <span>
  <el-steps :active="active" finish-status="success"  >

  <el-step title="查看购物车"></el-step>
  <el-step title="拍下商品"></el-step>
  <el-step title="付款到支付宝"></el-step>
  <el-step title="确认收货"></el-step>
  <el-step title="评价"></el-step>
</el-steps></span></div>
   <div class="ko">
     <h3 class="ff">
       选择收货地址
     </h3>
     <div style="margin-left: 190px;">
       <div style="word-warp:break-word;word-break:break-all;width:1172px;">
     <el-radio-group v-model="notice.address" v-for="item in admin" :key="item.goodId" @click="toggleTab(item.goodId)"  >
    <el-radio-button  :label="item.goodName" class="jiaf" style="margin-left: 8px;">
    </el-radio-button>
     </el-radio-group>
     </div>
     </div>
     <div class="qe" style="word-warp:break-word;word-break:break-all;width:1172px;">
      <h3 class="fr" style="margin-left: 198px;">
       收货人
     </h3>
     <div class="pio">
       <el-radio-group v-model="notice.shippingUser" v-for="item in admin" :key="item.goodId" @click="toggleTab(item.goodId)">
    <el-radio-button :label="item.goodDescribe" style="margin-left: 8px;"></el-radio-button>
      </el-radio-group>
</div>

     </div>
     <div class="qe" style="word-warp:break-word;word-break:break-all;width:1172px;">
      <h3 class="fr" style="margin-left: 198px;">
       收货人电话
     </h3>
     <div class="pio">
       <el-radio-group v-model="notice.productPhones" v-for="item in admin" :key="item.goodId" @click="toggleTab(item.goodId)">
    <el-radio-button :label="item.goodPhone" style="margin-left: 8px;"></el-radio-button>
</el-radio-group>

     </div>


</div>
 <div class="hh">

   <el-button type="text" @click="dialogFormVisible = true">使用新地址</el-button>

<el-dialog title="收货地址" :visible.sync="dialogFormVisible">
  <el-form :model="good" ref="fruitRule"
    :rules="rules">
   <el-form-item label="收货地址" prop="goodName">
    <el-input v-model="good.goodName"></el-input>
  </el-form-item>
  <el-form-item label="收货人" prop="goodDescribe">
    <el-input v-model="good.goodDescribe"></el-input>
  </el-form-item>
  <el-form-item label="收货人电话" prop="goodPhone">
    <el-input v-model="good.goodPhone"></el-input>
  </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="onSubmits('fruitRule');"
        >立即创建</el-button
      >
  </div>
</el-dialog>
   <!-- <el-popover

  placement="right"
  width="800"

  trigger="click">
  <el-form  label-width="80px" :model="good"  ref="fruitRule"
    :rules="rules">
  <el-form-item label="收货地址" prop="goodName">
    <el-input v-model="good.goodName"></el-input>
  </el-form-item>
  <el-form-item label="收货人" prop="goodDescribe">
    <el-input v-model="good.goodDescribe"></el-input>
  </el-form-item>
  <el-form-item label="收货人电话" prop="goodPhone">
    <el-input v-model="good.goodPhone"></el-input>
  </el-form-item>
</el-form>
   <el-button type="primary" @click="onSubmits('fruitRule')"
        >立即创建</el-button
      >
      <el-button slot="reference">click 激活</el-button>
   </el-popover> -->
   </div>
 <router-link to="/home/myAddress"><div class="bb">管理收货地址</div></router-link>

     </div>


<div class="tt1">
 <div class="tt"

 >
<div class="v1"></div>
<div class="vv">

  菜鸟驿站代收服务
  <button style="background: rgb(238, 94, 94);border: none;width:30px;margin-top: 2px;color: seashell;">免费</button>
  </div>
</div>
</div>

<div class="tableTitle">


</div>
<div class="gu"><h3>确认订单信息</h3></div>
<div class="vv1">
  <span class="qq">商品图片</span>
  <span class="n1">商品名称</span>
  <span>颜色</span>
  <span>价格</span>
  <span>数量</span>
  <span>优惠方式</span>
  <span>订单金额</span>
  </div>
   <div class="lj"></div>

   <div class="vv2" >
     <!-- <div class="gg" :data=""> -->
       <router-link v-bind:to="'/goodsDetail/'+notice.productId" style="color: #495060;">
       <div class="m1" @click="onSubmitss(notice)">
  <span class="qq">
    <img :src="notice.productImage" width="70px" height="70px">
    </span>
    </div>
       </router-link>
  <div class="m2" ><span style="word-warp:break-word;word-break:break-all;width:120px;margin-left: 50px;">{{notice.productName.substring(0, 32)}}...
    <img src="@/assets/bv2.png">
  </span>

  <span style="word-warp:break-word;word-break:break-all;width:50px;margin-left: 99px;">{{notice.productColor}}</span>
  <span style="word-warp:break-word;word-break:break-all;width:50px;margin-left: 162px;">{{notice.productPrice}}</span>

  <span style="word-warp:break-word;word-break:break-all;width:50px;margin-left: 108px;"><el-input-number v-model="notice.productNum" @change="handleChange" :min="1" :max="notice.productMnum" size="mini" style="width:105px" ></el-input-number></span>
  <span style="word-warp:break-word;word-break:break-all;width:120px;margin-left: 172px;">省205:超值优惠</span>
  <span style="fontSize:16px;font-weight:bold;width:20px;margin-left: 132px;" class="font-weight-black"  v-rainbow  >{{notice.productNum * notice.productPrice}}.00</span>
  <!-- </div> --></div>
  </div>

  <div class="lj1"></div>
  <div class="p1"><span>赠送随机礼物满1件送1件礼物 </span><span class="rr">无其他赠品可换</span></div>

  <div class="q0">

    <div class="g4"  v-rainbow><span style="margin-left: 127px;fontSize:16px;font-weight:bold;">- 0.00</span>
<div class="g8" style="margin-left: 97px;fontSize:14px;font-weight:bold;">{{gender}}</div>

<div class="g8" style="margin-left: 138px;fontSize:14px;font-weight:bold;">0.00</div>
<div class="fu1" >
  <span style="color: black;">店铺合计(含运费)</span>
  <span style="color: rgba(19, 18, 18, 0.575);fontSize:14px;"></span>
  <span style="margin-right: 150px;fontSize:17px;font-weight:bold;">￥{{notice.productNum * notice.productPrice + notice.shippingMoney}}.00</span>

  </div>
    </div>

    <div class="g5">

      <span style="margin-left: 495px;">店铺优惠 :</span><span style="margin-left: 25px;">赠送随机礼物</span>

      </div>

  <div class="ee">

    <div class="pan0">

       <h3 class="pan">选择快递</h3>
       <div class="pan1">

      <el-radio-group v-model="notice.shippingCompName" size="medium">
      <el-radio-button border label="天天快递" ></el-radio-button>
      <el-radio-button border label="顺丰快递"></el-radio-button>
      <el-radio-button border label="申通快递"></el-radio-button>

    </el-radio-group>

    </div>

    </div>

    <div class="jia">
<div class="v4" style="margin-left: 720px; width:600px" >运费险：<img  src="@/assets/bg6.png" height="17px">卖家赠送，退换货可赔</div>
    <span>订单备注：</span>

    <el-input
  class="p8"
  type="textarea"
  :rows="2"
  width="200px"
  placeholder="请输入内容"
  v-model="notice.productMessage">
</el-input>
<div class="gl"></div>
</div>

</div>
<div class="gl"></div>
  </div>

<div class="fj"></div>
<div class="wan">
  <el-radio-group v-model="notice.paymentMethod" size="medium">
      <el-radio  label="朋友代付" ></el-radio>
      <el-radio label="匿名付款"></el-radio>
      <el-radio  label="花呗分期"></el-radio>
    </el-radio-group>
    </div>
<el-divider class="jg"></el-divider>
<div class="fuu">
  <div class="fuu1">
<span class="fuu2" style="fontSize:14px;font-weight:bold;">实付款：</span>
<span style="fontSize:27px;font-weight:bold;color: darkgray;">￥</span>
<span style="word-warp:break-word;word-break:break-all;width:400px;fontSize:28px;font-weight:bold;color: red;">{{notice.productNum * notice.productPrice + notice.shippingMoney}}.00</span>
</div >
<div class="fm1" style="word-warp:break-word;word-break:break-all;width:300px;">


<span style="fontSize:14px;font-weight:bold;margin-left: 83px;">寄送至:</span>
<span style="word-warp:break-word;word-break:break-all;width:250px;">{{notice.address}}</span>

</div>
<div class="fm2" style="word-warp:break-word;word-break:break-all;width:300px;">
  <span style="fontSize:14px;font-weight:bold;margin-left: 83px;">收货人：</span>

  <span style="word-warp:break-word;word-break:break-all;width:250px;">{{notice.shippingUser}} {{notice.productPhones}}</span>

</div>
</div>

<!-- <el-button type="text" @click="dialogFormVisible = true">使用新地址</el-button> -->

<el-dialog title="二维码支付" :visible.sync="dialogFormVisibles" width="1200px">
  <div class="pay-container">
     <div style="margin-bottom:10px;margin-left:720px;">
    <img @click="shows = !shows;show = !show;buy(notice.productId)" src="@/assets/zfb.png" width="150px" height="70px" />
    <img src="@/assets/wx.png" width="90px" height="70px"  />
    </div>
      <Alert show-icon>
        微信扫码支付
        <Icon type="qr-scanner" slot="icon"></Icon>
        <template slot="desc">请扫描右边微信二维码进行支付</template>
      </Alert>
      <div class="pay-box">
        <div class="pay-demo">
          <img src="static/img/pay/pay-demo.png">
        </div>
        <div class="pay-qr-scan">
          <img :src="notice.productErm" width="300px" height="300px">
          <div class="pay-tips">
            <p>微信扫一扫我, 完成支付</p>
          </div>
        </div>
      </div>
    </div>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisibles = false">取 消</el-button>
   <el-button style="background: red;color: seashell;fontSize:17px;width:190px;" v-show="shows"
        >请完成支付</el-button
      >
    <el-button style="background: red;color: seashell;fontSize:17px;width:190px;
" v-show="show" @click="del();onSubmit()"
        >已完成购买</el-button
      >
  </div>
</el-dialog>

<div class="cc"><router-link to="/notice"><span style="margin-right:43px;color: #0e30f0;fontSize:13px;font-weight:bold;">返回购物车</span></router-link>
  <el-button style="background: red;color: seashell;fontSize:17px;width:190px;" @click="dialogFormVisibles = true;next"
        >立即支付</el-button
      >
</div>
<el-row>
<el-popover
  placement="right"
  width="400"
  trigger="click">
  <el-form
    ref="fruitRules"
    :model="notice"

    :rules="rules"
    label-width="300px"
    class="demo-ruleForm"
    style="width: 600px"
  >
  <el-form-item
      label="商品图片"
      prop="adminImage"
    >
      <el-img v-model="notice.productImage" :src="notice.productImage" width="300" height="100"></el-img>
    </el-form-item>

     <el-form-item
      label="订单ID"
      prop="orderDetailId"
    >
      <el-input v-model="notice.orderDetailId">{{notice.orderDetailId}}</el-input>
    </el-form-item>

    <el-form-item
      label="商品ID"
      prop="productId"
    >
      <el-input v-model="notice.productId">{{notice.productId}}</el-input>
    </el-form-item>


    <el-form-item
      label="商品名称"
      prop="productName"
    >
      <el-input v-model="notice.productName">{{notice.productName}}</el-input>
    </el-form-item>
    <el-form-item
      label="收货人"
      prop="shippingUser"
    >
      <el-radio-group v-model="notice.shippingUser" v-for="item in admin" :key="item.goodId" @click="toggleTab(item.goodId)">
    <el-radio-button :label="item.goodDescribe"></el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item
      label="地址"
      prop="address"
    >
     <el-radio-group v-model="notice.address" v-for="item in admin" :key="item.goodId" @click="toggleTab(item.goodId)">
    <el-radio-button :label="item.goodName"></el-radio-button>
</el-radio-group>
    </el-form-item>
<el-form-item
      label="电话号码"
      prop="productPhones"
    >
     <el-radio-group v-model="notice.productPhones" v-for="item in admin" :key="item.goodId" @click="toggleTab(item.goodId)">
    <el-radio-button :label="item.goodPhone"></el-radio-button>
</el-radio-group>
    </el-form-item>
    <el-form-item
      label="颜色"
      prop="productColor"
    >
      <el-input v-model="notice.productColor"></el-input>
    </el-form-item>
 <el-form-item
      label="数量"
      prop="productNum"
    >
      <el-input v-model="notice.productNum"></el-input>
    </el-form-item>
    <el-form-item
      label="价格"
      prop="productPrice"
    >
      <el-input v-model="notice.productPrice"></el-input>
    </el-form-item>
<el-form-item
      label="付款方式"
      prop="paymentMethod"
    >
      <el-radio-group v-model="notice.paymentMethod" size="medium">
      <el-radio  label="朋友代付"></el-radio>
      <el-radio label="匿名付款"></el-radio>
      <el-radio  label="花呗分期"></el-radio>
    </el-radio-group>
    </el-form-item>
 <el-form-item
      label="商品总数量"
      prop="productMnum"
    >
      <el-input v-model="notice.productMnum">{{notice.productMnum}}</el-input>
    </el-form-item>
<el-form-item
      label="快递公司"
      prop="shippingCompName"
    >
      <el-radio-group v-model="notice.shippingCompName" size="medium">
      <el-radio-button border label="天天快递" v-model="gender"></el-radio-button>
      <el-radio-button border label="顺丰快递" v-model="gender"></el-radio-button>
      <el-radio-button border label="申通快递" v-model="gender"></el-radio-button>

    </el-radio-group>

    </el-form-item>

<el-form-item
      label="快递费用"
      prop="shippingMoney"
    >
     <el-input v-model="notice.shippingMoney"></el-input>
    </el-form-item>

    <el-form-item
      label="订单备注"
      prop="productMessage"
    >
      <el-input v-model="notice.productMessage"></el-input>
    </el-form-item>

    <el-form-item
      label="订单金额"
      prop="orderMoney"
    >
      <el-input v-model="notice.orderMoney">{{notice.productNum * notice.productPrice}}</el-input>
    </el-form-item>

    <el-form-item
      label="支付金额"
      prop="shippingMoney"
    >
      <el-input v-model="notice.shippingMoney">{{notice.productNum * notice.productPrice + notice.shippingMoney}}</el-input>
    </el-form-item>

    <el-form-item>

      <el-button type="danger" @click="del();onSubmit('fruitRules')"
        >立即创建</el-button
      >
      <el-button>取消</el-button>

    </el-form-item>
  </el-form>
 <!-- <el-button slot="reference">click 激活</el-button> -->
</el-popover>
  <!-- <el-form
 ref="fruitRules"

    :data="admin"
    :rules="rules"
    label-width="300px"
    class="demo-ruleForm"
    style="width: 600px"
  >
    <el-form-item

    label="地址"
    prop="gooodName"
    >
<el-radio-group v-model="admin.goodName"  v-for="item in admin" :key="item.goodId" :data="admin" size="medium">
      <radio border :label="item.goodName"></radio>
      <radio border label="蓝色"></radio>
    </el-radio-group>

    </el-form-item>
  </el-form> -->
  </el-row>
</div>

</template>

<script>
import store from '@/store/index';
import { mapState, mapActions } from 'vuex';
export default {
  name: "order",
   created() {

       const  _this = this
    this.$axios.get('http://localhost:8888/good/finds/' + this.ids).then(function (resp) {
        _this.admin = resp.data.data.records

        console.log(resp);
      })

            let orderDetailId = this.$route.query.orderDetailId

            axios.get('http://localhost:8888/shopping/find/'+ orderDetailId).then(function (response) {
                _this.notice = response.data
            })
        },
  data() {
    return {
      ids:this.$store.state.userInfo.id,
       show: false,
      shows:true,
     product:[],
       active: 0,
        dialogTableVisibles: false,
        dialogFormVisibles: false,
      gender:'',
      notice: {
        name: "",
        sale: "",
        icon: "",

      },
      good:{},
      admin:[],
          rules: {
          goodName: [
            { required: true, message: "收货人地址为空", trigger: "blur" },
          ],
          goodDescribe: [
            { required: true, message: "收货人名称为空", trigger: "blur" },
          ],
          goodPhone: [
            { required: true, message: "收货人电话不能为空", trigger: "blur" },
          ],

        },
        dialogTableVisible: false,
        dialogFormVisible: false,
    };
  },
   methods: {

     onSubmitss(admin) {
     admin.customerId=this.ids
      this.product=admin;


          let _this = this;
          axios
            .post("http://localhost:8888/img/add", this.product)
            .then(function (response) {
              console.log(this.product)
            });

      },
 next() {
        if (this.active++ > 2) this.active = 0;
      },

     onSubmits(formName) {
       this.good.customerId=this.ids
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let _this = this;
          axios
            .post("http://localhost:8888/good/add", this.good)
            .then(function (response) {
              if (response.data) {
                _this.$alert(_this.good.goodName+ "添加成功！", "添加数据", {
                  confirmButtonText: "确定",
                  callback: (action) => {
                    //跳转到/table
                    location.reload();
                  },
                });
              }
            });
        }
      });
    },

      del() {
      let _this = this;
      this.
          axios
            .delete("http://localhost:8888/shopping/delete/" + this.notice.orderDetailId)
            .then(function (response) {
              if (response.data) {
                _this.$alert(notice.productName + "删除成功!", "删除数据", {
                  confirmButtonText: "确定",
                  callback: (action) => {
                    //跳转到 /table
                    location.reload();
                  },
                });
              }
            })

        .catch(() => {});
    },

   buy(productId) {
        axios.get("http://localhost:8888/master/buy/" + productId).then(res => {
          // 请求成功跳转沙箱支付的页面
          window.open(res.data.data)
        })
      },

   onSubmit() {
        let _this = this;
        axios
          .post("http://localhost:8888/master/add", this.notice)
          .then(function (response) {
            if (response.data) {
              _this.$alert("请等待商家发货！", "购买商品", {
                confirmButtonText: "确定",
                callback: (action) => {
                  //跳转到/table
                  _this.$router.push('/payDone');

                },
              });
            }

          });
      },

   decreases(notice){
     notice.shippingMoney="60";
   },
  },
  computed:{
    ...mapState(['userInfo', 'shoppingCart']),
  },
  store
};
</script>

<style scoped>
.pi{
  height: 200px;
}
.ll{

  height: 100%;
  border:  2px solid #ffffff;

}
.ko{

  margin:30px ;
    position:absolute;left:10%;width:500px;margin-left:-75px;
}



.ss{

  height: 100%;
}
.jj{
  width: 1000px;
  margin-left: 200px;


}


.mm{
  margin-top: 500px;
}
.hh{
   margin-top: 40px;
  margin-left: 200px;
  float: left;
}
.bb{

  margin-top: 50px;
  width: 100px;
  margin-left: 1400px;
}
.tableTitle {
    position: relative;
    margin-left: 450px;
    width: 1160px;
    height: 1px;
    background-color: #d4d4d4;
    text-align: center;
    font-size: 16px;
    color: rgba(101, 101, 101, 1);
  }
 .midText {
   margin-top: 220px;
    position: absolute;
    left: 50%;
    background-color: #ffffff;
    padding: 0 15px;
    transform: translateX(-50%) translateY(-50%);
  }

.tt{


  margin-top: 350px;
}
.vv{
  width: 150px;
  font-size: 8px;
  margin-left: 310px;

}
.v1{
   width: 150px;
   border:  1px solid #fa0202;
   margin-left: 310px;


}
.ff{
  margin-left: 200px;
  margin-bottom: 5px;

}
.fr{
  margin-top: 12px;
  margin-bottom: 5px;
}
.gu{

  height: 20px;
  margin-top: 30px;
  margin-left: 310px;

}
.vv1 {

  margin-left: 250px;
   margin-top: 50px;


}
.vv1 .qq{

  margin-left: 59px;

}
.vv1 .n1{
  margin-left: 63px;
}
.vv1 span{

  margin-left: 172px;
  font-size: 13px;
  color: #969494;
}
.lj{
  width: 1300px;
  height: 3px;
  margin: 2px auto;
  margin-left: 310px;
  background: #73ddf8;

}

.vv2 {

  margin-left: 250px;
   margin-top: 25px;

}
.vv2 .qq{

  margin-left: 59px;

}
.vv2 span{




  float: left;
  margin-left: 120px;
  font-size: 13px;
  color: #969494;
}
.ee{
  margin-top: 58px;
  width: 430px;
  margin-left: 310px;


}
.cc{
 margin-top: 185px;
 margin-left: 1285px;
}

.lj1{
  width: 1300px;
  height: 2px;
  margin-top: 120px;
  margin-left: 310px;
  background: #a2e0f0;


}
.p1{
  width: 600px;
  margin-top: 20px;
  margin-left: 310px;
  float: left;
}
.p8{
  margin-top: 8px;
}
.rr{
  color: #969494;
}
.q1{
  color: #fa0202;
}

.t1{
  font-size: 15;
}
.m1{
  float: left;
}
.m2{
  margin-top: 20px;


}
.m2 span{
  color: rgba(19, 18, 18, 0.575);
}
.g5{
  margin-top: 3px;
  float: right;
margin-right: 205px;
}
.q0{
  width: 100%;
  height: 100%;
}
.g4{

 float: right;
 margin-right: 104px;
}
.g9{
   margin-top: 35px;
  margin-right: 45px;
}
.pan1{
  margin-top: 18px;
}
.g8{
  margin-top: 70px;

  margin-right: 50px;
}
.jia{
  margin-top: 20px;
}
.fu1{
  margin-top: 58px;
  margin-right: 100px;
}
.gl{
  height: 14px;
}
.fj{
  width: 1300px;
  height: 1px;
  background: #a2e0f0;
  margin-left: 310px;
}
.wan{
  margin-top: 20px;
  float: right;
  margin-right: 350px;
}
.jg{
  margin-top: 50px;
  background: #73ddf8;
  width: 1300px;
  margin-left: 310px;
}
.jiaf{
   border:  1px solid #ffff;
}

.fuu{
  width: 300px;
  height: 135px;
  border:  1px solid #fa0202;
  margin-top: 10px;
  float: right;
  margin-right: 320px;
}
.fuu1{
  margin-top: 10px;
padding-right: 55px;
  float: right;
}
.fm1{
  width: 400px;
  margin-top: 10px;
  float: right;

}

.fm2{
   margin-top: 10px;
   margin-left: 175px;
   float: right;
padding-right: 55px;
}
.hh .el-popover{
  height: 700px;
}
.pio{
  margin-left: 190px;
}
.pay-container {
  margin: 15px auto;
  width: 80%;
  min-width: 1000px;
}
.pay-box {
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.pay-demo {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pay-demo img{
  height: 80%;
}
.pay-qr-scan {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.pay-tips {
  width: 50%;
  text-align: center;
  font-size: 14px;
  line-height: 30px;
}
.pay-tips a {
  color: #999999;
}
.pi{
  width: 670px;
  padding-top: 60px;
  margin-left: 950px;

}
.pi1{
  margin-top: 30px;
  float: left;
  margin-left: 297px;

}
</style>
