import React, { useEffect, useRef } from 'react';
import ROSLIB from 'roslib';
import * as ROS3D from 'ros3d';

const RosMapViewer = () => {
  const viewerRef = useRef(null);

  useEffect(() => {
    const ros = new ROSLIB.Ros({
      url: 'ws://192.168.149.1:9090', // 🧠 Replace with your actual Jetson IP if different
    });

    ros.on('connection', () => console.log('✅ Connected to ROSBridge'));
    ros.on('error', (err) => console.error('❌ ROSBridge Error:', err));
    ros.on('close', () => console.log('🔌 Disconnected from ROSBridge'));

    const viewer = new ROS3D.Viewer({
      divID: 'mapViewer',
      width: 800,
      height: 600,
      antialias: true,
      background: '#000000',
    });

    viewerRef.current = viewer;

    const tfClient = new ROSLIB.TFClient({
      ros: ros,
      fixedFrame: 'rospider/map',
      angularThres: 0.01,
      transThres: 0.01,
      rate: 10.0,
    });

    // 🔲 Grid for reference
    viewer.addObject(new ROS3D.Grid({
      color: '#555555',
      cellSize: 0.5,
      num_cells: 40,
    }));

    // 🛰️ Odometry visualization
    new ROS3D.Odometry({
      ros: ros,
      tfClient: tfClient,
      rootObject: viewer.scene,
      topic: '/rospider/odom/filtered',
    });

    // 🔦 LaserScan
    new ROS3D.LaserScan({
      ros: ros,
      tfClient: tfClient,
      rootObject: viewer.scene,
      topic: '/rospider/scan_filtered',
      material: {
        size: 0.05,
        color: 0x00ffcc,
      },
    });

    // 🗺️ Optional: map view from SLAM
    new ROS3D.OccupancyGridClient({
      ros: ros,
      rootObject: viewer.scene,
      tfClient: tfClient,
      continuous: true,
      topic: '/rospider/map',
    });

    return () => {
      ros.close();
    };
  }, []);

  return (
    <div>
      <h2 style={{ color: '#00ffcc' }}>📡 ROS3D Live Map Viewer</h2>
      <div id="mapViewer" style={{ width: '100%', height: '600px' }}></div>
    </div>
  );
};

export default RosMapViewer;
