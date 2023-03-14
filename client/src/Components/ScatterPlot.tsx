import { wineData } from '../assets/wineData';
import ReactEcharts from 'echarts-for-react';

type EChartsOption = echarts.EChartOption;

const ScatterPlot = () => {
  // constants for plot
  const symbolSize = 10;

  // Logic to get the data for scatter plot
  const scatterPlotData: [number, number][] = wineData.map(
    (individualWineData) => {
      const { colorIntensity, hue } = individualWineData;
      // x-axis: colorInternsity
      // y-sxis: hue
      return [colorIntensity, hue];
    }
  );

  const scatterPlotOptions: EChartsOption = {
    grid: { top: 20, right: 40, bottom: 20, left: 40 },
    xAxis: {
      name: 'Color Intensity'
    },
    yAxis: {
      name: 'Hue'
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
        style={{ width: '600px', height: '300px' }}
      />
    </div>
  );
};

export default ScatterPlot;
