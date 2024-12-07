# Ryan Worklog

[[_TOC_]]

# 2024-10-03 - Discussion with Team and Scope of Project and Completion of Design Review

The team met to discuss what we should include in our project and design document. We finalized a design of a golf swing tracker that would attach to an existing golf club and include positional sensor data from an MPU9250 and grip strength data from our force sensors and send that data to a custom webapp for data analysis. We have a few stretch goals involving using ML to cross reference the data collected

# 2024-10-10 - Parts Updates

I chose some different parts to use over our original design review. I first chose the FSR UX400 over the FlexiForce A201 because the A201 is prohibitively expensive and the FSR has the necessary force range of 150N which would fit well with the range of how hard people grip the golf club.

![](fsr.png)

[link](https://buyinterlinkelectronics.com/collections/x-ux-force-sensors/products/fsr-model-ux-400)

This is the FSR above, it has a good form factor to attach to the golf club grip

![](imu.png)

[link](https://massivestator.com/products/focbox-unity-dual-motor-controller)

For the IMU above, I chose to go with the ICM-20948 for the simple reason that our original choice of MPU9250 was difficult to find not seated on a breakout board, plus the ICM is newer and has updated documentation. They function similarly using SPI protocol so the switch was easy.

![](battery.png)

[link](https://www.batteryspace.com/custom-nimh-battery-pack-4-8v-2200mah-10-56wh-4s-s-mh-4-5a2200.aspx)

We also orignally wanted to use a Li-Ion battery due to its superior charge density and goes well in mobile electronics, but we were concerned that due to the flex of the golf club shaft and the consistent vibrations it would be too much of a physical challenge and danger to use Li-Ion. For this reason I decided to switch to a NiMH battery pack. Also, the 3.7V supplied from Li-Ion was too low for our linear regulator's dropout voltage of 1.4, using the equation Vdo = Vin - Vo. The 4.8 supplied from the NiMH exceeds the 1.4 dropout voltage when our Vo is 3.3V.

# 2024-10-13 - First Draft of PCB Schematic

# 2024-10-22 - First Draft of PCB Finalized

# 2024-10-29 - Round 3 PCB Revisions

# 2024-11-4 - Round 4 PCB Revisions
# 2024-11-15 - Solder Bakeout of Round 4 PCB

# 2024-11-21

# 2024-11-23

# 2024-12-1

# 2024-12-2

# 2024-12-3




