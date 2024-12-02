// graphs.tsx
// import React from 'react';
// import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
// import { LineChart } from 'react-native-chart-kit';

// interface SensorData {
//   timestamp: string;
//   accelerometer: {
//     x: number;
//     y: number;
//     z: number;
//   };
//   gyroscope: {
//     x: number;
//     y: number;
//     z: number;
//   };
//   magnetometer: {
//     x: number;
//     y: number;
//     z: number;
//   };
//   force: {
//     leftHand: number;
//     rightHand: number;
//   };
// }

// interface GraphsProps {
//   sensorData?: SensorData[]; // Make sensorData optional
// }

// const Graphs: React.FC<GraphsProps> = ({ sensorData = [] }) => {
//   const screenWidth = Dimensions.get('window').width;

//   // Error check for sensor data
//   if (!Array.isArray(sensorData) || sensorData.length === 0) {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.errorText}>No data available to display charts.</Text>
//       </View>
//     );
//   }

//   // Safely prepare chart data for accelerometer
//   const prepareAccelerometerData = (axis: 'x' | 'y' | 'z') => ({
//     labels: sensorData.map((data) => data.timestamp.slice(11, 19) || 'N/A'),
//     datasets: [
//       {
//         data: sensorData.map((data) => data.accelerometer?.[axis] || 0), // Safe access with fallback
//         color: () => '#8884d8', // Line color
//         strokeWidth: 2, // Optional stroke width
//       },
//     ],
//   });

//   const chartConfig = {
//     backgroundGradientFrom: '#ffffff',
//     backgroundGradientTo: '#f5f5f5',
//     color: (opacity = 1) => `rgba(134, 132, 216, ${opacity})`,
//     labelColor: (opacity = 1) => `rgba(51, 51, 51, ${opacity})`,
//     style: {
//       borderRadius: 8,
//     },
//     propsForDots: {
//       r: '4',
//       strokeWidth: '2',
//       stroke: '#ffa726',
//     },
//   };

//   return (
//     <ScrollView style={styles.container}>
//       {/* Accelerometer Charts */}
//       <View>
//         <Text style={styles.chartTitle}>Accelerometer X</Text>
//         <LineChart
//           data={prepareAccelerometerData('x')}
//           width={screenWidth - 20}
//           height={220}
//           chartConfig={chartConfig}
//           bezier
//           style={styles.chart}
//         />
//       </View>

//       <View>
//         <Text style={styles.chartTitle}>Accelerometer Y</Text>
//         <LineChart
//           data={prepareAccelerometerData('y')}
//           width={screenWidth - 20}
//           height={220}
//           chartConfig={chartConfig}
//           bezier
//           style={styles.chart}
//         />
//       </View>

//       <View>
//         <Text style={styles.chartTitle}>Accelerometer Z</Text>
//         <LineChart
//           data={prepareAccelerometerData('z')}
//           width={screenWidth - 20}
//           height={220}
//           chartConfig={chartConfig}
//           bezier
//           style={styles.chart}
//         />
//       </View>

//       {/* Add more charts for gyroscope, magnetometer, etc. */}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: '#f5f5f5',
//   },
//   chartTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 20,
//     textAlign: 'center',
//     color: '#333',
//   },
//   chart: {
//     marginVertical: 8,
//     borderRadius: 8,
//   },
//   errorText: {
//     fontSize: 16,
//     color: '#ff0000',
//     textAlign: 'center',
//     marginTop: 20,
//   },
// });

// export default Graphs;