// const WebSocket = require("ws");

// const PORT = 8080; // Port for the WebSocket server
// const wss = new WebSocket.Server({ port: PORT });

// wss.on("connection", (ws) => {
//   console.log("Client connected");

//   // Function to generate mock sensor data
//   const generateMockData = () => {
//     return JSON.stringify({
//       timestamp: new Date().toISOString(), // Add timestamp for each message
//       swingSpeed: (Math.random() * 50 + 80).toFixed(2), // Random speed between 80 and 130
//       angle: (Math.random() * 20 + 40).toFixed(2), // Random angle between 40 and 60 degrees
//       force: (Math.random() * 20 + 20).toFixed(2), // Random force between 20 and 40
//       magnetometer: {
//         x: (Math.random() * 10 - 5).toFixed(2), // Random x between -5 and 5
//         y: (Math.random() * 10 - 5).toFixed(2), // Random y between -5 and 5
//         z: (Math.random() * 10 - 5).toFixed(2), // Random z between -5 and 5
//       },
//       accelerometer: {
//         x: (Math.random() * 10 - 5).toFixed(2), // Random x between -5 and 5
//         y: (Math.random() * 10 - 5).toFixed(2), // Random y between -5 and 5
//         z: (Math.random() * 10 - 5).toFixed(2), // Random z between -5 and 5
//       },
//       gyroscope: {
//         x: (Math.random() * 10 - 5).toFixed(2), // Random x between -5 and 5
//         y: (Math.random() * 10 - 5).toFixed(2), // Random y between -5 and 5
//         z: (Math.random() * 10 - 5).toFixed(2), // Random z between -5 and 5
//       },
//     });
//   };

//   // Send mock data every second
//   const interval = setInterval(() => {
//     const mockData = generateMockData();
//     ws.send(mockData);
//     console.log(`Sent: ${mockData}`);
//   }, 1000);

//   // Handle client disconnection
//   ws.on("close", () => {
//     console.log("Client disconnected");
//     clearInterval(interval);
//   });
// });

// console.log(`WebSocket server running on port ${PORT}`);

const WebSocket = require("ws");

const PORT = 8080; // Port for the WebSocket server
const wss = new WebSocket.Server({ port: PORT });

wss.on("connection", (ws) => {
  console.log("Client connected");

  // Function to generate mock sensor data
  const generateMockData = () => {
    return JSON.stringify({
      timestamp: new Date().toISOString(), // Timestamp for each message
      accelerometer: {
        x: (Math.random() * 2 - 1).toFixed(3), // Acceleration in g's (-1 to 1 g)
        y: (Math.random() * 2 - 1).toFixed(3),
        z: (Math.random() * 2 - 1).toFixed(3),
      },
      gyroscope: {
        x: (Math.random() * 500 - 250).toFixed(2), // Angular velocity in degrees/sec (-250 to 250)
        y: (Math.random() * 500 - 250).toFixed(2),
        z: (Math.random() * 500 - 250).toFixed(2),
      },
      magnetometer: {
        x: (Math.random() * 100 - 50).toFixed(2), // Magnetic field in microteslas (-50 to 50)
        y: (Math.random() * 100 - 50).toFixed(2),
        z: (Math.random() * 100 - 50).toFixed(2),
      },
      force: {
        leftHand: (Math.random() * 50 + 50).toFixed(2), // Force in Newtons (50 to 100 N)
        rightHand: (Math.random() * 50 + 50).toFixed(2),
      },
    });
  };

  // Send mock data every 100 milliseconds to simulate real sensor sampling rate
  const interval = setInterval(() => {
    const mockData = generateMockData();
    ws.send(mockData);
    // Uncomment the next line to see the data being sent in the console
    // console.log(`Sent: ${mockData}`);
  }, 100); // 100 ms interval

  // Handle client disconnection
  ws.on("close", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
});

console.log(`WebSocket server running on port ${PORT}`);

  
