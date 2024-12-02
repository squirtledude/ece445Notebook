// connections.tsx
// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, ScrollView } from 'react-native';
// import { Button } from 'react-native-paper';
// import Graphs from './Graphs';

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

// const Connections: React.FC = () => {
//   const [connected, setConnected] = useState(false);
//   const [ws, setWs] = useState<WebSocket | null>(null);
//   const [sensorData, setSensorData] = useState<SensorData[]>([]);

//   const connectToServer = () => {
//     const socket = new WebSocket('ws://10.195.87.1:8080/ws'); // Update with your IP and port
//     setWs(socket);

//     socket.onopen = () => {
//       console.log('Connected');
//       setConnected(true);
//     };

//     socket.onmessage = (event: MessageEvent) => {
//       try {
//         const data: SensorData = JSON.parse(event.data);

//         // Ensure data parsing is correct
//         const parsedData: SensorData = {
//           ...data,
//           accelerometer: {
//             x: parseFloat(data.accelerometer.x.toString()),
//             y: parseFloat(data.accelerometer.y.toString()),
//             z: parseFloat(data.accelerometer.z.toString()),
//           },
//           gyroscope: {
//             x: parseFloat(data.gyroscope.x.toString()),
//             y: parseFloat(data.gyroscope.y.toString()),
//             z: parseFloat(data.gyroscope.z.toString()),
//           },
//           magnetometer: {
//             x: parseFloat(data.magnetometer.x.toString()),
//             y: parseFloat(data.magnetometer.y.toString()),
//             z: parseFloat(data.magnetometer.z.toString()),
//           },
//           force: {
//             leftHand: parseFloat(data.force.leftHand.toString()),
//             rightHand: parseFloat(data.force.rightHand.toString()),
//           },
//         };

//         // Add the new data to the sensor data array
//         setSensorData((prevData) => [...prevData, parsedData]);
//       } catch (error) {
//         console.error('Failed to parse WebSocket message:', error);
//       }
//     };

//     socket.onclose = () => {
//       console.log('Disconnected');
//       setConnected(false);
//       setWs(null);
//     };

//     socket.onerror = (error) => {
//       console.error('WebSocket error:', error);
//     };
//   };

//   const disconnectFromServer = () => {
//     if (ws) {
//       ws.close();
//     }
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.title}>Connections</Text>
//       <Text style={styles.status}>{connected ? 'Connected' : 'Disconnected'}</Text>
//       <View style={styles.buttonContainer}>
//         {connected ? (
//           <Button mode="contained" onPress={disconnectFromServer} style={styles.button}>
//             Disconnect
//           </Button>
//         ) : (
//           <Button mode="contained" onPress={connectToServer} style={styles.button}>
//             Connect
//           </Button>
//         )}
//       </View>
//       {connected && (
//         <View style={styles.graphsContainer}>
//           <Graphs sensorData={sensorData} />
//         </View>
//       )}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#f5f5f5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//     textAlign: 'center',
//   },
//   status: {
//     fontSize: 18,
//     marginBottom: 16,
//     textAlign: 'center',
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginBottom: 20,
//   },
//   button: {
//     marginHorizontal: 8,
//   },
//   graphsContainer: {
//     marginTop: 20,
//   },
// });

// export default Connections;



// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, ScrollView } from 'react-native';
// import { Button } from 'react-native-paper';
// import Graphs from './Graphs';

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

// const Connections: React.FC = () => {
//   const [connected, setConnected] = useState(false);
//   const [ws, setWs] = useState<WebSocket | null>(null);
//   const [sensorData, setSensorData] = useState<SensorData[]>([]);
//   const [dataHistory, setDataHistory] = useState<SensorData[][]>([]);

//   const connectToServer = () => {
//     const socket = new WebSocket('ws://10.195.87.1:8080/ws'); // Replace with your actual WebSocket address
//     setWs(socket);

//     socket.onopen = () => {
//       console.log('Connected');
//       setConnected(true);
//       setSensorData([]); // Start fresh for this session
//     };

//     socket.onmessage = (event: MessageEvent) => {
//       try {
//         const data: SensorData = JSON.parse(event.data);

//         // Ensure data parsing is correct
//         const parsedData: SensorData = {
//           ...data,
//           accelerometer: {
//             x: parseFloat(data.accelerometer.x.toString()),
//             y: parseFloat(data.accelerometer.y.toString()),
//             z: parseFloat(data.accelerometer.z.toString()),
//           },
//           gyroscope: {
//             x: parseFloat(data.gyroscope.x.toString()),
//             y: parseFloat(data.gyroscope.y.toString()),
//             z: parseFloat(data.gyroscope.z.toString()),
//           },
//           magnetometer: {
//             x: parseFloat(data.magnetometer.x.toString()),
//             y: parseFloat(data.magnetometer.y.toString()),
//             z: parseFloat(data.magnetometer.z.toString()),
//           },
//           force: {
//             leftHand: parseFloat(data.force.leftHand.toString()),
//             rightHand: parseFloat(data.force.rightHand.toString()),
//           },
//         };

//         // Add new data to the current session
//         setSensorData((prevData) => [...prevData, parsedData]);
//       } catch (error) {
//         console.error('Failed to parse WebSocket message:', error);
//       }
//     };

//     socket.onclose = () => {
//       console.log('Disconnected');
//       setConnected(false);

//       // Save the current session data to the history and limit to the last 3 sessions
//       setDataHistory((prevHistory) => {
//         const updatedHistory = [...prevHistory, sensorData];
//         return updatedHistory.slice(-3); // Keep only the last 3 sessions
//       });
//       setWs(null);
//     };

//     socket.onerror = (error) => {
//       console.error('WebSocket error:', error);
//     };
//   };

//   const disconnectFromServer = () => {
//     if (ws) {
//       ws.close();
//     }
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.title}>Connections</Text>
//       <Text style={styles.status}>{connected ? 'Connected' : 'Disconnected'}</Text>
//       <View style={styles.buttonContainer}>
//         {connected ? (
//           <Button mode="contained" onPress={disconnectFromServer} style={styles.button}>
//             Disconnect
//           </Button>
//         ) : (
//           <Button mode="contained" onPress={connectToServer} style={styles.button}>
//             Connect
//           </Button>
//         )}
//       </View>

//       {/* Display Up to 5 Sessions */}
//       <View style={styles.graphsContainer}>
//         {dataHistory.map((sessionData, index) => (
//           <View key={index} style={styles.sessionContainer}>
//             {/* dataHistory.length -  */}
//             <Text style={styles.sessionTitle}>Session {index}</Text>
//             <Graphs sensorData={sessionData} />
//           </View>
//         ))}

//         {/* Display Current Session */}
//         {connected && (
//           <View style={styles.sessionContainer}>
//             <Text style={styles.sessionTitle}>Current Session</Text>
//             <Graphs sensorData={sensorData} />
//           </View>
//         )}
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#f5f5f5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//     textAlign: 'center',
//   },
//   status: {
//     fontSize: 18,
//     marginBottom: 16,
//     textAlign: 'center',
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginBottom: 20,
//   },
//   button: {
//     marginHorizontal: 8,
//   },
//   graphsContainer: {
//     marginTop: 20,
//   },
//   sessionContainer: {
//     marginBottom: 20,
//     backgroundColor: '#fff',
//     padding: 10,
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   sessionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     textAlign: 'center',
//   },
// });

// export default Connections;



import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import { WebGLView } from 'expo-three';
import * as THREE from 'three';

interface SensorData {
  timestamp: string;
  accelerometer: { x: number; y: number; z: number };
  gyroscope: { x: number; y: number; z: number };
  magnetometer: { x: number; y: number; z: number };
  force: { leftHand: number; rightHand: number };
}

const ConnectionsWith3DGraph: React.FC = () => {
  const [connected, setConnected] = useState(false);
  const [ws, setWs] = useState<WebSocket | null>(null);
  const [sensorData, setSensorData] = useState<SensorData[]>([]);
  const [positions, setPositions] = useState<{ x: number; y: number; z: number }[]>([]);
  const [dataHistory, setDataHistory] = useState<{ x: number; y: number; z: number }[][]>([]);

  const connectToServer = () => {
    const socket = new WebSocket('ws://10.195.87.1:8080/ws'); // Replace with your actual WebSocket address
    setWs(socket);

    socket.onopen = () => {
      console.log('Connected');
      setConnected(true);
      setSensorData([]);
      setPositions([]);
    };

    socket.onmessage = (event: MessageEvent) => {
      try {
        const data: SensorData = JSON.parse(event.data);

        // Parse and add accelerometer data for position calculation
        const parsedData = {
          x: parseFloat(data.accelerometer.x.toString()),
          y: parseFloat(data.accelerometer.y.toString()),
          z: parseFloat(data.accelerometer.z.toString()),
        };

        // Calculate positions using simple integration
        setPositions((prevPositions) => {
          const lastPosition = prevPositions[prevPositions.length - 1] || { x: 0, y: 0, z: 0 };
          const newPosition = {
            x: lastPosition.x + parsedData.x * 0.01,
            y: lastPosition.y + parsedData.y * 0.01,
            z: lastPosition.z + parsedData.z * 0.01,
          };
          return [...prevPositions, newPosition];
        });

        setSensorData((prevData) => [...prevData, data]);
      } catch (error) {
        console.error('Failed to parse WebSocket message:', error);
      }
    };

    socket.onclose = () => {
      console.log('Disconnected');
      setConnected(false);
      setDataHistory((prevHistory) => {
        const updatedHistory = [...prevHistory, positions];
        return updatedHistory.slice(-3); // Keep only the last 3 sessions
      });
      setWs(null);
    };

    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
  };

  const disconnectFromServer = () => {
    if (ws) {
      ws.close();
    }
  };

  const create3DScene = (gl: WebGLRenderingContext) => {
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, gl.drawingBufferWidth / gl.drawingBufferHeight, 0.1, 1000);
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ canvas: gl });
    renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

    // Draw the path
    const points = positions.map((pos) => new THREE.Vector3(pos.x, pos.y, pos.z));
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({ color: 0xff0000 });
    const line = new THREE.Line(geometry, material);
    scene.add(line);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Connections</Text>
      <Text style={styles.status}>{connected ? 'Connected' : 'Disconnected'}</Text>
      <View style={styles.buttonContainer}>
        {connected ? (
          <Button title="Disconnect" onPress={disconnectFromServer} />
        ) : (
          <Button title="Connect" onPress={connectToServer} />
        )}
      </View>

      <View style={styles.graphsContainer}>
        <View style={styles.sessionContainer}>
          <Text style={styles.sessionTitle}>Current Session (3D Motion)</Text>
          <WebGLView style={styles.webGLView} onContextCreate={create3DScene} />
        </View>

        {/* Display historical sessions */}
        {dataHistory.map((sessionPositions, index) => (
          <View key={index} style={styles.sessionContainer}>
            <Text style={styles.sessionTitle}>Session {index + 1} (3D Motion)</Text>
            <WebGLView
              style={styles.webGLView}
              onContextCreate={(gl) => {
                const scene = new THREE.Scene();
                const camera = new THREE.PerspectiveCamera(
                  75,
                  gl.drawingBufferWidth / gl.drawingBufferHeight,
                  0.1,
                  1000
                );
                camera.position.z = 5;
                const renderer = new THREE.WebGLRenderer({ canvas: gl });
                renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);
                const points = sessionPositions.map((pos) => new THREE.Vector3(pos.x, pos.y, pos.z));
                const geometry = new THREE.BufferGeometry().setFromPoints(points);
                const material = new THREE.LineBasicMaterial({ color: 0x00ff00 });
                const line = new THREE.Line(geometry, material);
                scene.add(line);
                const animate = () => {
                  requestAnimationFrame(animate);
                  renderer.render(scene, camera);
                };
                animate();
              }}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  status: {
    fontSize: 18,
    marginBottom: 16,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  graphsContainer: {
    marginTop: 20,
  },
  sessionContainer: {
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  sessionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  webGLView: {
    height: 300,
    width: '100%',
  },
});

export default ConnectionsWith3DGraph;

