import { useRef, useEffect, useState } from "react";

import * as echarts from "echarts";

interface DataItem {
  name: string;
  value: [string, number];
}

const oneDay = 24 * 3600 * 1000;
let now = new Date(Date.now());
let value = 10000 + Math.random() * 1000;

function randomData(): DataItem {
  now = new Date(+now + oneDay);
  value = value + Math.random() * 2100 - 1000;
  return {
    name: now.toString(),
    value: [
      [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/"),
      Math.round(value),
    ],
  };
}

interface Iprops {
  days: number;
  chartcss?: string;
  showx?: boolean;
  showy?: boolean;
}

function generateOptions(
  data: DataItem[],
  showx: boolean = true,
  showy: boolean = true
) {
  const options: echarts.EChartsOption = {
    tooltip: {
      trigger: "axis",
      formatter: function (params: any) {
        params = params[0];
        var date = new Date(params.name).toDateString().split(" ");
        return `$${params.value[1]} | ${date[2]} ${date[1]}`;
      },
      axisPointer: {
        animation: false,
      },
    },
    xAxis: {
      type: "time",
      show: showx,
      splitLine: {
        show: false,
      },
    },
    yAxis: {
      type: "value",
      show: showy,
      scale: true,
      axisLabel: {
        formatter: function (value: number) {
          return `$${value}`;
        },
      },
      splitLine: {
        show: false,
      },
    },
    series: [
      {
        name: "Trend Data",
        type: "line",
        showSymbol: false,
        data: data,
      },
    ],
  };
  return options;
}

export default function RecentTrendChart(props: Iprops) {
  const chartRef = useRef() as React.MutableRefObject<HTMLInputElement>; //拿到DOM容器
  const chart = useRef<echarts.ECharts>(); //echarts实例
  const [data, setData] = useState<DataItem[]>([]);

  // 初始化echart
  useEffect(() => {
    const tmp = [];
    for (let i = 0; i < props.days; i++) {
      tmp.push(randomData());
    }
    setData(tmp);

    chart.current = echarts.init(chartRef.current); //echart初始化容器

    chart.current.setOption(generateOptions(data, props.showx, props.showy));

    window.onresize = () => {
      chart.current?.resize();
    };

    const timer = window.setInterval(() => {
      setData((prevCount) => {
        return [...prevCount.slice(1), randomData()];
      });
    }, 5000);

    return () => {
      chart.current?.clear();
      chart.current?.dispose();
      clearInterval(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.days]);

  // 每当props改变的时候就会实时重新渲染
  useEffect(() => {
    chart.current?.setOption<echarts.EChartsOption>(
      generateOptions(data, props.showx, props.showy)
    );
  }, [data, props.showx, props.showy]);

  return <div ref={chartRef} className={`${props.chartcss}`}></div>;
}
