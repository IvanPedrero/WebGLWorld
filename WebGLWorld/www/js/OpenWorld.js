let scene, camera, renderer;

function createWorld(option) {  

  //Check if the scene is already created.
  if (scene != null) {
    //The memory will not be free and will start to stash... So remove the elements created.
    scene.remove(skyboxGeo);
    scene.remove(skybox);
    scene.remove(camera);
    scene.remove(renderer);
    scene.remove(controls);
    
    //Remove the canvas form the HTML.
    document.body.removeChild(renderer.domElement);
  }

  //Create a new scene, camera and renderer.
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(55,window.innerWidth/window.innerHeight,45,90000);
  camera.position.set(-900,-200,-900);
  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setSize(window.innerWidth,window.innerHeight);

  //Add it to the HTML.
  document.body.appendChild(renderer.domElement);

  //Create a new orbit controller.
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.addEventListener('change', renderer);
  //Set min and max distance to zoom without breaking the illusion.
  controls.minDistance = 200;
  controls.maxDistance = 3500;
              
  //Create the materials in an array.
  let materialArray = [];
  var front, back, up, down, right, left;

  //Depending on the option received, change the skybox textures.
  switch(option){
    case 1:
      //Load the textures in order: ft, bk, up, dw,rt, lf.
      front = new THREE.TextureLoader().load('img/valley_ft.jpg');
      back = new THREE.TextureLoader().load('img/valley_bk.jpg');
      up = new THREE.TextureLoader().load('img/valley_up.jpg');
      down = new THREE.TextureLoader().load('img/valley_dn.jpg');
      right = new THREE.TextureLoader().load('img/valley_rt.jpg');
      left = new THREE.TextureLoader().load('img/valley_lf.jpg');   
      break;
    case 2:
      front = new THREE.TextureLoader().load('img/arid_ft.jpg');
      back = new THREE.TextureLoader().load('img/arid_bk.jpg');
      up = new THREE.TextureLoader().load('img/arid_up.jpg');
      down = new THREE.TextureLoader().load('img/arid_dn.jpg');
      right = new THREE.TextureLoader().load('img/arid_rt.jpg');
      left = new THREE.TextureLoader().load('img/arid_lf.jpg');
      break;
    case 3:
      front = new THREE.TextureLoader().load('img/blizzard_ft.jpg');
      back = new THREE.TextureLoader().load('img/blizzard_bk.jpg');
      up = new THREE.TextureLoader().load('img/blizzard_up.jpg');
      down = new THREE.TextureLoader().load('img/blizzard_dn.jpg');
      right = new THREE.TextureLoader().load('img/blizzard_rt.jpg');
      left = new THREE.TextureLoader().load('img/blizzard_lf.jpg');
      break;
    case 4:
      front = new THREE.TextureLoader().load('img/dusk_ft.jpg');
      back = new THREE.TextureLoader().load('img/dusk_bk.jpg');
      up = new THREE.TextureLoader().load('img/dusk_up.jpg');
      down = new THREE.TextureLoader().load('img/dusk_dn.jpg');
      right = new THREE.TextureLoader().load('img/dusk_rt.jpg');
      left = new THREE.TextureLoader().load('img/dusk_lf.jpg');
      break;
    case 5:
      front = new THREE.TextureLoader().load('img/kenon_star_ft.jpg');
      back = new THREE.TextureLoader().load('img/kenon_star_bk.jpg');
      up = new THREE.TextureLoader().load('img/kenon_star_up.jpg');
      down = new THREE.TextureLoader().load('img/kenon_star_dn.jpg');
      right = new THREE.TextureLoader().load('img/kenon_star_rt.jpg');
      left = new THREE.TextureLoader().load('img/kenon_star_lf.jpg');
      break;
    default:
      break;
  }
  
  //Push the textures in order to the array: ft, bk, up, dw,rt, lf.     
  materialArray.push(new THREE.MeshBasicMaterial( { map: front }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: back }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: up }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: down }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: right }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: left }));

  //We assigned the material to the outside part of the cube, so invert the textures.
  for (let i = 0; i < 6; i++){
    materialArray[i].side = THREE.BackSide;
  }
           
  //Create a geometry for the skybox and put it together with a mesh.
  skyboxGeo = new THREE.BoxGeometry( 10000, 10000, 10000);
  skybox = new THREE.Mesh( skyboxGeo, materialArray );
  //Add it to the scene and start the animations.
  scene.add( skybox );  
  animate();
}

function animate() {
  //Start rendering and playing the game.
  renderer.render(scene,camera);
  requestAnimationFrame(animate);
}

//Fix the rezising.
window.addEventListener( 'resize', onWindowResize, false );
function onWindowResize(){
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}

//Create the first world.
createWorld(1);