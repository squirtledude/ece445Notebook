# Ryan Worklog

[[_TOC_]]

# 2024-10-03 - Discussion with Team and Scope of Project and Completion of Design Review

The team met to discuss what we should include in our project and design document. We finalized a design of a golf swing tracker that would attach to an existing golf club and include positional sensor data from an MPU9250 and grip strength data from our force sensors and send that data to a custom webapp for data analysis. We have a few stretch goals involving using ML to cross reference the data collected

# 2024-10-10 - Parts Updates

I chose some different parts to use over our original design review. I first chose the FSR UX400 over the FlexiForce A201 because the A201 is prohibitively expensive and the FSR has the necessary force range of 150N which would fit well with the range of how hard people grip the golf club.

![image](https://github.com/user-attachments/assets/01bb4d79-72b2-4da4-a6ce-3547d145b258)

[link](https://buyinterlinkelectronics.com/collections/x-ux-force-sensors/products/fsr-model-ux-400)

This is the FSR above, it has a good form factor to attach to the golf club grip, has a good force sensing range of 0-150N, and meets our cost guidelines.

![image](https://github.com/user-attachments/assets/0b5b378d-f946-4679-b85e-b5e3cf2fb3b9)

[link](https://learn.adafruit.com/adafruit-tdk-invensense-icm-20948-9-dof-imu/overview)

For the IMU above, I chose to go with the ICM-20948 for the simple reason that our original choice of MPU9250 was difficult to find not seated on a breakout board, plus the ICM is newer and has updated documentation. They function similarly using SPI protocol so the switch was easy.

![](battery.png)

[link](https://www.batteryspace.com/custom-nimh-battery-pack-4-8v-2200mah-10-56wh-4s-s-mh-4-5a2200.aspx)

We also orignally wanted to use a Li-Ion battery due to its superior charge density and goes well in mobile electronics, but we were concerned that due to the flex of the golf club shaft and the consistent vibrations it would be too much of a physical challenge and danger to use Li-Ion. For this reason I decided to switch to a NiMH battery pack. Also, the 3.7V supplied from Li-Ion was too low for our linear regulator's dropout voltage of 1.4, using the equation Vdo = Vin - Vo. The 4.8 supplied from the NiMH exceeds the 1.4 dropout voltage when our Vo is 3.3V.

# 2024-10-8 - Began Work on PCB Schematic

This session was to prepare some work for the design review, worked on only the linear regulators, battery charger circuit, and programming circuit. Involved building the USBC processing circuitry and simple linear regulator circuitry with decoupling capacitors.

![](firstschematic.png)
![image](https://github.com/user-attachments/assets/25e383b7-8c59-40d8-b1ce-f4ccb681adf8)

# 2024-10-13 - First Draft of PCB Schematic

This session finalized the schematic for the first round of PCB orders we have planned. Implemented auto-programming circuit as well as the sensor inputs to the microcontroller.
![image](https://github.com/user-attachments/assets/fe6c9238-56d7-447c-ab93-86d12264bd52)
The force sensors work as a voltage divider. Connect it in series with a constant resistor and the voltage in between the two will be variable depending on force pressing on the force sensor.  So Vo = Vin * (Rforce/(Rforce+Rconstant)).

# 2024-10-22 - First Draft of PCB Finalized
The schematic is unchanged from the first draft as above, except for some footprint and decoupling capacitor changes. The designed PCB is below.

![image](https://github.com/user-attachments/assets/463719fc-3533-4975-803d-7df8a6a562ac)

This PCB will have to be designed later as it reaches the maximum dimensions for PCBway and I do not have proper places for mounting holes. 

# 2024-10-29 - Round 3 PCB Revisions

Round 3 was a full redesign in order to fit mounting holes and meet dimensions for our desired enclosure. The programming circuit was also adjusted slightly to match the description on the course website, namely adding pullup and pulldown resistors for consistency.
![image](https://github.com/user-attachments/assets/ccfe43b7-5c30-4fde-ba91-0273db647a09)
For the PCB, the full redesign included shrinking the dimensions, making routing more efficient, and decreasing the amount of vias required.
![image](https://github.com/user-attachments/assets/82426962-7dd1-4b74-af3d-cefe2beee73c)

-Addendum: There is a design flaw here regarding UART into the MCU. I connected TXD to TXD and RXD to RXD when the connections should be crossed. Caused 
# 2024-11-4 - Round 4 PCB Revisions
Round 4 simply involved building the auxiliary PCB for the IMU that will go on the end of the golf club. Fairly simple design, plugs in the 5 pin socket on the main PCB. SPI communication so only requires power, SCL, and SDA.
![image](https://github.com/user-attachments/assets/61684763-1766-4744-b82f-768127e2028b)
![image](https://github.com/user-attachments/assets/463505c5-a692-4a19-9287-5af5e099ec2a)

-Addendum: There is a design flaw here as the interrupt pin on the IMU should be pulled down and the design has it floating. This was a critical mistake and caused the IMU to not function

# 2024-11-15 - Solder Bakeout of Round 4 PCB

This session involved laying down solder paste on the PCB and laying down all of our components. This was both the main PCB and the IMU PCB. Unfortunately don't have pictures 

# 2024-11-21 - Touch up solder connections

This session was removing bridging between all of the components and laying down more solder on parts if necessary.

# 2024-11-23 - Debugging PCB

This session in the lab was short and my team members did not join me. This was just a quick 2 hours to debug the microcontroller and get it to program before fall break.

# 2024-12-1

This was the day after break and we all met to get most of the software ready onto the MCU and communication with the webapp. I was secondary mostly in this process and got the wire harness and physical design ready for our golf club.

# 2024-12-2

The critical UART design error was discovered here so I spent most of the day trying to manually program the MCU and got very close but ran into connectivity issues with the Arduino IDE and had to scrap that to help with our ESP32 devboard and IMU instead due to time constrants.
![image](https://github.com/user-attachments/assets/20a6418b-e211-4321-b3ab-58c563522240)
This is my jerry rigged PCB to try to program. The battery charger IC was also sheared off as one of the pins was making contact with Vin and GND which caused the entire PCB to not function properly. In an effort to bend the pins the chip was destroyed.

# 2024-12-3

This was the day of our demo and mostly involved getting the golf club ready. Everything was connected to the breadboard to communicate with our ESP32 devboard and the IMU and force sensors were mounted onto the golf club. We also used an IMU breakout board due to the floating interrupt pin issue.

![image](https://github.com/user-attachments/assets/acc836c6-f55d-4de6-b686-58aee06ea9ed)





