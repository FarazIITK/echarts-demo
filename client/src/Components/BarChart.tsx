import ReactEcharts from 'echarts-for-react';
import { wineData } from '../assets/wineData';

const BarChart = () => {
  let uniqueAlcoholCategory: number[] = [];

  wineData.forEach((individualWineData) => {
    const { alcohol: currentAlcoholCategory } =
      individualWineData;
    if (
      uniqueAlcoholCategory.indexOf(
        currentAlcoholCategory
      ) === -1
    ) {
      uniqueAlcoholCategory.push(currentAlcoholCategory);
    }
  });

  let avgMalicAcidValues: number[] = [];

  uniqueAlcoholCategory.forEach((alcoholCategory) => {
    let count: number = 0;
    let malicAcidValue: number = 0;

    wineData.forEach((individualWineData) => {
      const { alcohol, malicAcid } = individualWineData;
      if (alcohol === alcoholCategory) {
        count++;
        malicAcidValue += malicAcid;
      }
      avgMalicAcidValues.push(malicAcidValue / count);
    });
  });

  const options = {
    grid: { top: 20, right: 40, bottom: 20, left: 40 },
    xAxis: {
      type: 'category',
      data: uniqueAlcoholCategory
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: avgMalicAcidValues,
        type: 'bar',
        smooth: true
      }
    ],
    tooltip: {
      trigger: 'axis'
    }
  };
  return (
    <div className="graph blue-border">
      <h1>Bar Chart</h1>
      <ReactEcharts
        option={options}
        style={{ width: '600px', height: '300px' }}
      />
    </div>
  );
};

export default BarChart;
