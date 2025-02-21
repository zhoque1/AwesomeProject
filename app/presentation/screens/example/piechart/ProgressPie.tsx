import React from 'react';
import {View, Text} from 'react-native';
import {PieChart} from '../../chart/PieChart';

const ProgressPie = () => {
  const pieData = [
    {value: 70, color: '#177AD5'},
    {value: 30, color: 'lightgray'},
  ];
  return (
    <View style={{borderWidth:1}}>
      <PieChart
        donut
        innerRadius={80}
        data={pieData}
        centerLabelComponent={() => {
          return <Text style={{fontSize: 30}}>70%</Text>;
        }}
      />
    </View>
  );
};

export default ProgressPie;
