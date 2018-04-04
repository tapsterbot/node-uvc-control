var UVCControl = require('./index');


// var camera = new UVCControl(0x46d,0x853);
var camera = new UVCControl(0x46d,0x82d);
//
// camera.range("relativePanTilt",(err,data)=>{
//   console.log(err,data);
// })

// camera.range("brightness",(err,data)=>{
//   console.log(err,data);
// })
//

camera.get("absoluteZoom").then(console.log).catch(console.error)

camera.range("relativeZoom").then(console.log).catch(console.error)

camera.set("absoluteZoom",100).then(console.log)


// camera.set("absoluteZoom",100,(err,data)=>{
//   console.log(err,data);
// })

// camera.range("relativePanTilt",(error,data)=>{
//   console.log(error,data);
// })


// var pan = 0;
// var tilt = -1;
// var buffer = new Buffer(4);
// buffer.writeIntLE(pan, 0,2);
// buffer.writeIntLE(tilt, 2,2);
// camera.setRaw('relativePanTilt', buffer, function(error) {
//     if (error) return console.log(error);
//     console.log('Saturation set!');
//
//     setTimeout(()=>{
//       var pan = 0;
//       var tilt = 0;
//       var buffer = new Buffer(4);
//       buffer.writeIntLE(pan, 0,2);
//       buffer.writeIntLE(tilt, 2,2);
//       camera.setRaw('relativePanTilt', buffer, function(error) {
//         if (error) return console.log(error);
//         console.log('Saturation set!');
//       });
//
//     },600)
// });
