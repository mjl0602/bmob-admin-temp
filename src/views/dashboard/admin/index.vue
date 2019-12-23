<template>
  <div class="dashboard-editor-container">
    <!-- <github-corner style="position: absolute; top: 0px; border: 0; right: 0;"/> -->

    <panel-group @handleSetLineChartData="handleSetLineChartData" />
    <el-row style="padding:2px 2px;margin-bottom:12px;">
      <div style="fontWeight:bolder;color:#606266;">单次发货数量(近30次)</div>
    </el-row>
    <el-row style="background:#fff;padding:12px 12px 0;margin-bottom:32px;">
      <line-chart :chart-data="sendChartData" />
    </el-row>
    <el-row style="padding:2px 2px;margin-bottom:12px;">
      <div style="fontWeight:bolder;color:#606266;">收款额(近两周)</div>
    </el-row>
    <el-row style="background:#fff;padding:12px 12px 0;margin-bottom:32px;">
      <line-chart :chart-data="priceChartData" />
    </el-row>

    <!-- <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <raddar-chart/>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <pie-chart/>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <bar-chart/>
        </div>
      </el-col>
    </el-row>-->

    <!-- <el-row :gutter="8">
      <el-col
        :xs="{span: 24}"
        :sm="{span: 24}"
        :md="{span: 24}"
        :lg="{span: 12}"
        :xl="{span: 12}"
        style="padding-right:8px;margin-bottom:30px;"
      >
        <transaction-table/>
      </el-col>
      <el-col
        :xs="{span: 24}"
        :sm="{span: 12}"
        :md="{span: 12}"
        :lg="{span: 6}"
        :xl="{span: 6}"
        style="margin-bottom:30px;"
      >
        <transaction-table/>
      </el-col>
      <el-col
        :xs="{span: 24}"
        :sm="{span: 12}"
        :md="{span: 12}"
        :lg="{span: 6}"
        :xl="{span: 6}"
        style="margin-bottom:30px;"
      >
        <transaction-table/>
      </el-col>
    </el-row>-->
  </div>
</template>

<script>
import GithubCorner from "@/components/GithubCorner";
import PanelGroup from "./components/PanelGroup";
import LineChart from "./components/LineChart";
import RaddarChart from "./components/RaddarChart";
import PieChart from "./components/PieChart";
import BarChart from "./components/BarChart";
import TransactionTable from "./components/TransactionTable.vue";
import TodoList from "./components/TodoList";
import BoxCard from "./components/BoxCard";

const lineChartData = {
  // newVisitis: {
  //   expectedData: [100, 120, 161, 134, 105, 160, 165],
  //   actualData: [120, 82, 91, 154, 162, 140, 145]
  // },
  // messages: {
  //   expectedData: [200, 192, 120, 144, 160, 130, 140],
  //   actualData: [180, 160, 151, 106, 145, 150, 130]
  // },
  // purchases: {
  //   expectedData: [80, 100, 121, 104, 105, 90, 100],
  //   actualData: [120, 90, 100, 138, 142, 130, 130]
  // },
  // shoppings: {
  //   expectedData: [130, 140, 141, 142, 145, 150, 160],
  //   actualData: [120, 82, 91, 154, 162, 140, 130]
  // }
};

export default {
  name: "DashboardAdmin",
  components: {
    GithubCorner,
    PanelGroup,
    LineChart,
    RaddarChart,
    PieChart,
    BarChart,
    TransactionTable,
    TodoList,
    BoxCard
  },
  data() {
    return {
      priceChartData: {
        actualName: "收款",
        expectedName: "平均",
        actualData: [],
        expectedData: [],
        xAxisData: []
      },
      sendChartData: {
        actualName: "发货",
        expectedName: "平均",
        actualData: [],
        expectedData: [],
        xAxisData: []
      }
    };
  },

  created() {
    let query = Bmob.Query("smartorder");
    query.statTo("sum", "receivables");
    query.statTo("groupby", "createdAt");
    query.statTo("order", "-createdAt");
    query.find().then(list => {
      let targetData = {
        actualName: "收款",
        expectedName: "平均",
        actualData: [],
        expectedData: [],
        xAxisData: []
      };
      let total = 0;
      let count = 0;
      for (let index = 0; index < list.length; index++) {
        const data = list[index];
        total += data._sumReceivables;
        count++;
        if (index >= 13) break;
      }
      for (let index = 0; index < count; index++) {
        const data = list[index];
        targetData.actualData.push(data._sumReceivables);

        let date = new Date(data.createdAt);
        let weekday = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"][
          date.getDay()
        ];
        targetData.expectedData.push(parseInt(total / count));
        targetData.xAxisData.push(
          `${date.getMonth() + 1}-${date.getDate()}(${weekday})`
        );
      }

      // targetData.expectedName = `平均${parseInt(total / count)}元`;

      targetData.actualData.reverse();
      targetData.xAxisData.reverse();
      targetData.actualData.push(null);
      targetData.xAxisData.push("");
      this.priceChartData = targetData;
    });

    // 统计发货数量
    query = Bmob.Query("deliver_index");
    query.limit(30);
    query.statTo("order", "-createdAt");
    query.find().then(list => {
      let targetData = {
        actualName: "发货",
        expectedName: "3日平均",
        actualData: [],
        expectedData: [],
        xAxisData: []
      };
      // 前一天
      let num0 = null;
      // 前两天
      let num1 = null;
      for (let index = list.length - 1; index > 0; index--) {
        const data = list[index];
        let num = parseInt(data.count);
        targetData.actualData.push(num);
        targetData.xAxisData.push(data.title.replace("【发货单】美孕", ""));
        if (num0 && num1) {
          // num0 = num;
          num = parseInt((num0 + num1 + num) / 3);
          console.log(num0, num1, num);
          num1 = num0;
          num0 = num;
        } else {
          num1 = num0;
          num0 = num;
          num = null;
        }
        targetData.expectedData.push(num);
        // if (index >= 29) break;
      }
      // targetData.actualData.reverse();
      // targetData.expectedData.reverse();
      // targetData.xAxisData.reverse();
      targetData.actualData.push(null);
      targetData.expectedData.push(null);
      targetData.xAxisData.push("");
      this.sendChartData = targetData;
    });
  },
  methods: {
    handleSetLineChartData(type) {
      this.priceChartData = lineChartData[type];
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}
</style>
