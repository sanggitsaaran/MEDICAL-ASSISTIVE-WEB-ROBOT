const ROSLIB = require('roslib');

const ros = new ROSLIB.Ros({
    url: 'ws://192.168.149.1:9090' // Replace with Jetson Nano’s IP
});

ros.on('connection', function() {
    console.log('Connected to ROSBridge WebSocket server');
});

ros.on('error', function(error) {
    console.log('Error connecting to ROS: ', error);
});

ros.on('close', function() {
    console.log('Connection to ROSBridge closed');
});