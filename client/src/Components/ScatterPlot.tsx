import { wineData } from '../assets/wineData';
import ReactEcharts from 'echarts-for-react';

type EChartsOption = echarts.EChartOption;

const ScatterPlot = () => {
  // constants for plot
  const symbolSize = 10;
  const chartLabels = {
    heading: 'Scatter plot of hue vs color-intensity',
    xAxis: 'Color Intensity',
    yAxis: 'Hue'
  };

  // Logic to get the data for scatter plot
  const scatterPlotData: [number, number][] = wineData.map(
    (individualWineData) => {
      const { colorIntensity, hue } = individualWineData;
      // x-axis: colorIntensity
      // y-axis: hue
      return [colorIntensity, hue];
    }
  );

  const scatterPlotOptions: EChartsOption = {
    xAxis: {
      name: chartLabels.xAxis,
      nameLocation: 'middle',
      nameGap: 30,
      nameTextStyle: {
        fontWeight: 'bold',
        fontSize: 16
      },
      type: 'value'
    },
    yAxis: {
      name: chartLabels.yAxis,
      nameLocation: 'middle',
      nameGap: 30,
      nameTextStyle: {
        fontWeight: 'bold',
        fontSize: 16
      },
      type: 'value'
    },
    series: [
      {
        symbolSize: symbolSize,
        data: scatterPlotData,
        type: 'scatter'
      }
    ]
  };

  return (
    <div className="graph red-border">
      <h1>Scatter Plot</h1>
      <ReactEcharts
        option={scatterPlotOptions}
        style={{ width: '800px', height: '400px' }}
      />
    </div>
  );
};

export default ScatterPlot;
