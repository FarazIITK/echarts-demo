import ReactEcharts from 'echarts-for-react';
import { wineData } from '../assets/wineData';
import { getRoundOffValue } from '../utils/getRoundOffValue';

type EChartsOption = echarts.EChartOption;

const BarChart = () => {
  // constants for plot
  const chartLabels = {
    xAxis: 'Alcohol Category',
    yAxis: 'Average Malic Acid Value'
  };

  //   x-axis values: unique alcohol categories
  let uniqueAlcoholCategory: number[] = [];
  //   y-axis values: average malic acid per category
  let avgMalicAcidValues: number[] = [];

  // Logic to find the unique alcohol catgories from sample data
  wineData.forEach((individualWineData) => {
    // Destructuring the useful properties
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

  //   Logic to calculate the average value of malic acid per alcohol category
  uniqueAlcoholCategory.forEach((alcoholCategory) => {
    //   Initialize the count-per-category and total-malic-acid value as zero
    let countPerCategory: number = 0;
    let totalMalicAcidValuePerCategory: number = 0;

    wineData.forEach((individualWineData) => {
      // Destructuring the useful properties
      const { alcohol, malicAcid } = individualWineData;
      if (alcohol === alcoholCategory) {
        countPerCategory++;
        totalMalicAcidValuePerCategory += malicAcid;
      }

      // Find the average of malic acid and rount it off
      const averageMalicAcidPerCategory =
        totalMalicAcidValuePerCategory / countPerCategory;

      const roundedAverageMalicAcidPerCategory =
        getRoundOffValue(averageMalicAcidPerCategory);

      avgMalicAcidValues.push(
        roundedAverageMalicAcidPerCategory
      );
    });
  });

  const options: EChartsOption = {
    xAxis: {
      name: chartLabels.xAxis,
      nameLocation: 'middle',
      nameGap: 30,
      nameTextStyle: {
        fontWeight: 'bold',
        fontSize: 16
      },
      type: 'category',
      data: uniqueAlcoholCategory
    },
    yAxis: {
      name: chartLabels.yAxis,
      nameLocation: 'middle',
      nameGap: 40,
      nameTextStyle: {
        fontWeight: 'bold',
        fontSize: 16
      },
      type: 'value',
      scale: true
    },
    series: [
      {
        data: avgMalicAcidValues,
        type: 'bar',
        barMaxWidth: 70,
        showEffectOn: 'emphasis'
      }
    ],
    color: ['#81d6d9 '],
    tooltip: {}
  };

  const barChartHeading =
    'Average Malic-Acid value per alcohol category';

  return (
    <div className="graph blue-border">
      <h1>{barChartHeading}</h1>
      <ReactEcharts
        option={options}
        style={{ width: '800px', height: '400px' }}
      />
    </div>
  );
};

export default BarChart;
