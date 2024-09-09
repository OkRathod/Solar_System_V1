import './style.css';

import * as THREE from 'three';

import { OrbitControls } from './node_modules/three/examples/jsm/Addons.js';
import { gsap } from 'gsap/gsap-core';



const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg')
})

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.set(-20, 0, 0);
const suntexture = new THREE.TextureLoader().load('./Textures/8k_sun.jpg');
const sun = new THREE.Mesh(
  new THREE.SphereGeometry(10, 100, 100),
  new THREE.MeshBasicMaterial({ map: suntexture })
)
const pointLight = new THREE.PointLight(0xffffff, 1000, 10000);
pointLight.position.set(0, 0, 0);
const pointLightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(1000, 100);
const ambientLight = new THREE.AmbientLight({ color: 0xffffff });
scene.add(sun, ambientLight);

const textureearth = new THREE.TextureLoader().load('./Textures/8k_earth_daymap.jpg')
// const normalmapearth=new THREE.TextureLoader().load('./Textures/8k_earth_normal_map.tif')
// const specularMapearth=new THREE.TextureLoader().load('./Textures/8k_earth_specular_map.tif')
const earthMaterial = new THREE.MeshStandardMaterial({
  map: textureearth
  // specularMap:specularMapearth,
  // normalMap:normalmapearth,
  // normalScale: new THREE.Vector2( 0.85, - 0.85 )
})
// earthMaterial.map.colorSpace=THREE.SRGBColorSpace;
const earth = new THREE.Mesh(
  new THREE.SphereGeometry(10, 100, 100),
  earthMaterial
)

const cloudsTexture=new THREE.TextureLoader().load('./Textures/8k_earth_clouds.jpg');
const cloudMaterial=  new THREE.MeshLambertMaterial({
  map:cloudsTexture,
  transparent:true,
  opacity:0.4
})
cloudMaterial.map.colorSpace=THREE.SRGBColorSpace;
const clouds=new THREE.Mesh(
  new THREE.SphereGeometry(10,100,100),
  cloudMaterial
)
clouds.position.set(-90, 0, 0);
scene.add(clouds);




// const radius = 8;
// const tilt = 0.41;
// const rotationSpeed = 0.02;

// const cloudsScale = 1.005;
// const moonScale = 0.23;

// const materialNormalMap = new THREE.MeshPhongMaterial( {

//   specular: 0x7c7c7c,
//   shininess: 15,
//   map:new THREE.TextureLoader().load( './Textures/8k_earth_daymap.jpg' ),
//   specularMap:new THREE.TextureLoader().load( './Textures/8k_earth_specular_map.tif' ),
//   normalMap:new THREE.TextureLoader().load( './Textures/8k_earth_normal_map.tif' ),

//   // y scale is negated to compensate for normal map handedness.
//   normalScale: new THREE.Vector2( 0.85, - 0.85 )

// } );
// materialNormalMap.map.colorSpace = THREE.SRGBColorSpace;

// // planet

// const geometry = new THREE.SphereGeometry( radius, 100, 50 );

// const meshPlanet = new THREE.Mesh( geometry, materialNormalMap );
// meshPlanet.rotation.y = 0;
// meshPlanet.rotation.z = tilt;
// scene.add( meshPlanet );

// // clouds

// const materialClouds = new THREE.MeshLambertMaterial( {

//   map:new THREE.TextureLoader().load(  './Textures/8k_earth_clouds.jpg' ),
//   transparent: true

// } );
// materialClouds.map.colorSpace = THREE.SRGBColorSpace;

// const meshClouds = new THREE.Mesh( geometry, materialClouds );
// meshClouds.scale.set( cloudsScale, cloudsScale, cloudsScale );
// meshClouds.rotation.z = tilt;
// scene.add( meshClouds );


















//Planets

const MercuryTexture = new THREE.TextureLoader().load('./Textures/8k_mercury.jpg');
const VenusTexture = new THREE.TextureLoader().load('./Textures/4k_venus_atmosphere.jpg');
const MarsTexture = new THREE.TextureLoader().load('./Textures/8k_mars.jpg');
const JupiterTexture = new THREE.TextureLoader().load('./Textures/8k_jupiter.jpg');
const SaturnTexture = new THREE.TextureLoader().load('./Textures/8k_saturn.jpg');
const SaturnRingTexture = new THREE.TextureLoader().load('./Textures/8k_saturn_ring_alpha.png');

// const mercury=new THREE.Mesh(
//   new THREE.SphereGeometry(0.002439,100,100),
//   new THREE.MeshBasicMaterial({map:MercuryTexture})
// )

// const venus=new THREE.Mesh(
//   new THREE.SphereGeometry(0.00651,100,100),
//   new THREE.MeshBasicMaterial({map:VenusTexture})
// )

// const mars=new THREE.Mesh(
//   new THREE.SphereGeometry(0.003389,100,100),
//   new THREE.MeshBasicMaterial({map:MarsTexture})
// )

// const jupiter=new THREE.Mesh(
//   new THREE.SphereGeometry(0.069911,100,100),
//   new THREE.MeshBasicMaterial({map:JupiterTexture})
// )

// const saturn=new THREE.Mesh(
//   new THREE.SphereGeometry(0.060268,100,100),
//   new THREE.MeshBasicMaterial({map:SaturnTexture})
// )

const mercury = new THREE.Mesh(
  new THREE.SphereGeometry(10, 100, 100),
  new THREE.MeshStandardMaterial({ map: MercuryTexture })
)

const venus = new THREE.Mesh(
  new THREE.SphereGeometry(10, 100, 100),
  new THREE.MeshStandardMaterial({ map: VenusTexture })
)

const mars = new THREE.Mesh(
  new THREE.SphereGeometry(10, 100, 100),
  new THREE.MeshStandardMaterial({ map: MarsTexture })
)

const jupiter = new THREE.Mesh(
  new THREE.SphereGeometry(10, 100, 100),
  new THREE.MeshStandardMaterial({ map: JupiterTexture })
)

const saturn = new THREE.Mesh(
  new THREE.SphereGeometry(10, 100, 100),
  new THREE.MeshStandardMaterial({ map: SaturnTexture })
)

const saturnObj = new THREE.Object3D();
saturnObj.add(saturn);


const saturnRing = new THREE.Mesh(
  new THREE.RingGeometry(12, 16, 64),
  new THREE.MeshBasicMaterial({ map: SaturnRingTexture, side: THREE.DoubleSide })
)
saturnRing.rotation.x = -0.5 * Math.PI;
saturnObj.add(saturnRing);

// mercury.position.set(59.184,0,0);
// venus.position.set(107.49,0,0);
// earth.position.set(152.1,0,0);
// mars.position.set(228,0,0);
// jupiter.position.set(778,0,0);
// saturn.position.set(1400,0,0);

mercury.position.set(-30, 0, 0);
venus.position.set(-60, 0, 0);
earth.position.set(-90, 0, 0);
mars.position.set(-120, 0, 0);
jupiter.position.set(-150, 0, 0);
saturnObj.position.set(-180, 0, 0);



scene.add(mercury, venus, mars, earth, jupiter, saturnObj);

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 20, 20);
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(1000));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(1000).fill().forEach(addStar);

const spaceTexture = new THREE.TextureLoader().load('./Textures/8k_stars.jpg');


scene.add(spaceTexture)
var x = 1;

function Fetching() {
  fetch('./public/info.json').then(
    response => response.json()
  ).then(
    data => {
      if(x<=6){
        document.querySelector('.next').innerHTML = data.data[x].Planet;
      document.querySelector('.info').innerHTML = data.data[x - 1].Description;
      document.querySelector('.title').innerHTML = data.data[x - 1].Planet;
      }
      else{
      document.querySelector('.next').innerHTML = data.data[0].Planet;
      document.querySelector('.info').innerHTML = data.data[x - 1].Description;
      document.querySelector('.title').innerHTML = data.data[x - 1].Planet;
      }

      // switch (x) {
      //   case 1:
      //     document.querySelector('.next').innerHTML=data.data[1].Planet;
      //     document.querySelector('.info').innerHTML=data.data[0].Description;
      //     document.querySelector('.title').innerHTML=data.data[0].Planet;
      //     break;
      //   case 2:
      //     document.querySelector('.next').innerHTML=data.data[2].Planet;
      //     document.querySelector('.info').innerHTML=data.data[1].Description;
      //     document.querySelector('.title').innerHTML=data.data[1].Planet;
      //     break;
      //   case 3:
      //     document.querySelector('.next').innerHTML=data.data[1].Planet;
      //     document.querySelector('.info').innerHTML=data.data[0].Description;
      //     document.querySelector('.title').innerHTML=data.data[0].Planet;
      //     break;
      //   case 4:
      //     document.querySelector('.next').innerHTML=data.data[1].Planet;
      //     document.querySelector('.info').innerHTML=data.data[0].Description;
      //     document.querySelector('.title').innerHTML=data.data[0].Planet;
      //     break;
      //   case 5:
      //     document.querySelector('.next').innerHTML=data.data[1].Planet;
      //     document.querySelector('.info').innerHTML=data.data[0].Description;
      //     document.querySelector('.title').innerHTML=data.data[0].Planet;
      //     break;
      // }
    }
  )
  return;
}
// Fetching();

function moveCamera() {
  // const t=document.body.getBoundingClientRect().top;  
  Fetching();
  switch (x) {
    case 1:
      gsap.to(camera.position, { duration: 2, x: -50, y: 0, z: 0 });
      // camera.position.set(-50,0,0);
      x++;
      break;
    case 2:
      gsap.to(camera.position, { duration: 2, x: -80, y: 0, z: 0 });
      // camera.position.set(-80,0,0);
      x++;
      break;
    case 3:
      gsap.to(camera.position, { duration: 2, x: -110, y: 0, z: 0 })
      // camera.position.set(-110,0,0);
      x++;
      break;
    case 4:
      gsap.to(camera.position, { duration: 2, x: -140, y: 0, z: 0 })
      // camera.position.set(-140,0,0);
      x++;
      break;
    case 5:
      gsap.to(camera.position, { duration: 2, x: -170, y: 0, z: 0 })
      // camera.position.set(-170,0,0);
      x++;
      break;
    case 6:
      gsap.to(camera.position, { duration: 2, x: -210, y: 10, z: 0 })
      // camera.position.set(-200,0,0);
      x++;
      break;
    default:
      gsap.to(camera.position, { duration: 2, x: -20, y: 0, z: 0 })
      // camera.position.set(-20,0,0);
      x = 1;
      break;
  }

}
Fetching();
document.querySelector('.next').onclick = moveCamera;

const controls = new OrbitControls(camera, renderer.domElement);


function animate() {
  requestAnimationFrame(animate);

  sun.rotation.y += 0.0005;
  earth.rotation.y += 0.0005
  clouds.rotation.y+=0.0005;
  mercury.rotation.y += 0.0005
  venus.rotation.y += 0.0005
  mars.rotation.y += 0.0005
  jupiter.rotation.y += 0.0005
  saturn.rotation.y += 0.0005

  controls.update();

  renderer.render(scene, camera);
}

animate();
