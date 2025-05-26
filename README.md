# MEDICAL-ASSISTIVE-WEB-ROBOT

## Team Members

* Sanggit Saaran K C S (CB.SC.U4AIE23247)
* Surya Ha (CB.SC.U4AIE23267)
* Vishal Seshadri B (CB.SC.U4AIE23260)
* Venkatram K S (CB.SC.U4AIE23236)

---

## Project Overview

This project presents a **medical assistive robot** designed to autonomously navigate hospital environments and assist healthcare staff. Built on the **Hiwonder JetHexa** hexapod robot and powered by **Jetson Nano** and **ROS1 Melodic**, the robot performs **real-time SLAM** and **autonomous navigation** using LiDAR and odometry.

A custom **web-based control interface** replaces traditional RViz interaction, allowing users to **set navigation goals remotely**. Additionally, a **voice-controlled system** provides basic directional commands like “forward” and “left” as an add-on for screen-free control.

---

## Objectives

* ✅ Implement real-time **LiDAR-based SLAM** using **RTAB-Map** for indoor autonomous navigation.
* ✅ Integrate the system on a **JetHexa hexapod robot** with Jetson Nano for mobile hospital use.
* ✅ Develop a **web-based GUI** for live map visualization and goal setting (without using RViz).

---

### Key Components:

* **Robot Platform**:

  * Hiwonder **JetHexa** with Jetson Nano
  * Equipped with **RPLIDAR S2L** (2D LiDAR) and onboard odometry

* **SLAM & Mapping**:

  * **RTAB-Map** (graph-based SLAM)
  * Builds 2D occupancy grid maps in real-time

* **Navigation Stack**:

  * ROS **move\_base** for autonomous navigation
  * **Dijkstra algorithm** (global planner)
  * **DWA (Dynamic Window Approach)** for local obstacle avoidance

* **Web Interface**:

  * Built with **ROSBridge** for real-time communication between ROS and web frontend
  * Allows healthcare staff to view the robot's location and send navigation goals via browser

* **Voice Control (Add-on)**:

  * Basic directional commands processed through a Python ROS node
  * Publishes velocity commands for manual control using voice input

---

## Features

* 🏥 Hospital room navigation via web interface
* 🌐 Real-time SLAM with 2D mapping
* 🗺️ Live position tracking & click-to-navigate
* 🔊 Voice-activated directional control
* ⚠️ Obstacle avoidance in dynamic indoor environments

---

## Result & Conclusion

The **Medical Assistive Web Robot** successfully integrates SLAM, autonomous navigation, and intuitive control interfaces to provide a practical solution for hospital automation. With its web-based control and optional voice interface, the system reduces staff workload, enhances patient support logistics, and sets a scalable foundation for future healthcare robotics applications.

---
## Web Interface

[SmartMed Delivery System](Proof/Web_Interface.mp4)
