import React from 'react';
import {View} from 'react-native';
import {PieChart} from '../../chart/PieChart';


const ThreeDPie = () => {
  const pieData = [
    {value: 54, color: '#177AD5'},
    {value: 40, color: '#79D2DE'},
    {value: 20, color: '#ED6665'},
  ];

  return (
    <View style={{borderWidth:1}}>
      <PieChart
        donut
        shadow
        showText
        showValuesAsLabels
        innerCircleBorderWidth={6}
        innerCircleBorderColor="lightgray"
        shiftInnerCenterX={-10}
        shiftInnerCenterY={-15}
        textColor="black"
        radius={170}
        textSize={20}
        showTextBackground
        textBackgroundRadius={26}
        data={pieData}
      />
    </View>
  );
};

export default ThreeDPie;
