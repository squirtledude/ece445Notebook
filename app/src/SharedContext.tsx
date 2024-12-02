import React, { createContext, useState, useContext, ReactNode } from "react";


interface SensorData {
  timestamp?: string;
  swingSpeed?: number;
  angle?: number;
  force?: number;
}

interface SensorDataContextProps {
  data: SensorData[];
  addData: (newData: SensorData) => void;
}

const SensorDataContext = createContext<SensorDataContextProps | undefined>(
  undefined
);

export const SensorDataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<SensorData[]>([]);

  const addData = (newData: SensorData) => {
    setData((prevData) => [...prevData, newData]);
  };

  return (
    <SensorDataContext.Provider value={{ data, addData }}>
      {children}
    </SensorDataContext.Provider>
  );
};

export const useSensorData = () => {
  const context = useContext(SensorDataContext);
  if (!context) {
    throw new Error("useSensorData must be used within a SensorDataProvider");
  }
  return context;
};

export default SensorDataProvider;