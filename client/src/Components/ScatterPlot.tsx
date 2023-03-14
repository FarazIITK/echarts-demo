import { wineData } from '../assets/wineData';
import ReactEcharts from 'echarts-for-react';

const ScatterPlot = () => {
  const scatterPlotData: [number, number][] = wineData.map(
    (individualWineData) => {
      const { colorIntensity, hue } = individualWineData;
      return [colorIntensity, hue];
    }
  );

  const scatterPlotOptions = {
    grid: { top: 20, right: 40, bottom: 20, left: 40 },
    xAxis: {
      name: 'Color Intensity'
    },
    yAxis: {
      name: 'Hue'
    },
    series: [
      {
        symbolSize: 10,
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
