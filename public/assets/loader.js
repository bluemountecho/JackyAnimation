$(document).ready(function () {
  var camera, scene, renderer, geometry, material, mesh;

  function randomSign() {
    return Math.floor(Math.random() * 1000) % 2 == 0 ? -1 : 1
  }
  
  window.loader = {}
  window.loader.init = () => {
    started = true
    stats = new Stats();
    document.body.appendChild(stats.domElement);

    clock = new THREE.Clock();

    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.z = 1000;
    scene.add( camera );

    geometry = new THREE.CubeGeometry( 200, 200, 200 );
    material = new THREE.MeshLambertMaterial( { color: 0xaa6666, wireframe: false } );
    mesh = new THREE.Mesh( geometry, material );
    //scene.add( mesh );
    cubeSineDriver = 0;

    light = new THREE.DirectionalLight(0xffffff, 3);
    light.position.set(-1,0,1);
    scene.add(light);
  
    smokeTexture = THREE.ImageUtils.loadTexture('/images/Smoke-Element.png');
    smokeMaterial = new THREE.MeshLambertMaterial({color: 0x00dddd, map: smokeTexture, transparent: true});
    smokeGeo = new THREE.PlaneGeometry(300,300);
    smokeParticles = [];


    for (p = 1; p <= 105; p++) {
      var particle = new THREE.Mesh(smokeGeo, new THREE.MeshLambertMaterial({color: Math.floor(Math.random() * 0xffffff), map: smokeTexture, transparent: true}));
      particle.position.set(randomSign() * (Math.random() * 110 + 50), randomSign() * (Math.random() * 110 + 50), (Math.random() - 0.5) * 100 + Math.floor(p / 15) * 100 + 200);
      particle.rotation.z = Math.random() * 360;
      scene.add(particle);
      smokeParticles.push(particle);
    }

    document.body.appendChild( renderer.domElement );

    setTimeout(() => {
      $('body > canvas').remove()
      started = false
      destroy()
    }, 1500)
  }
  
  window.loader.animate = () => {
    if (stats == null) return

    // note: three.js includes requestAnimationFrame shim
    stats.begin();
    delta = clock.getDelta();
    if (started == true)
      requestAnimationFrame( window.loader.animate );
    evolveSmoke();
    render();
    stats.end();
  }

  function destroy() {
    stats = null
    clock = null
    renderer = null
    camera = null
    geometry = null
    material = null
    mesh = null
    light = null
    smokeMaterial = null
    smokeGeo = null
    smokeParticles = null
  }
  
  function evolveSmoke() {
    var sp = smokeParticles.length;
    while(sp--) {
      smokeParticles[sp].rotation.z += (delta * 3);
      smokeParticles[sp].position.z += 14;

      var x = smokeParticles[sp].position.x
      var y = smokeParticles[sp].position.y
      var r = Math.sqrt(x * x + y * y)
      var ang = Math.atan2(y, x) + delta * 3

      smokeParticles[sp].position.x = r * Math.cos(ang);
      smokeParticles[sp].position.y = r * Math.sin(ang);
    }
  }

  function render() {
    mesh.rotation.x += 0.005;
    mesh.rotation.y += 0.01;
    cubeSineDriver += .01;
    mesh.position.z = 100 + (Math.sin(cubeSineDriver) * 500);
    renderer.render( scene, camera );  
  }

  window.loader.setUpCharacters = () => {
    var $sentences = $('.sentence'); 
    //run for each sentence
    $sentences.each(function(){
      
      var $sentence = $(this);
      var newContent = '';
      
      //go through all characters of the sentence
      for(i = 0; i < $sentence.text().length; i++){
        var substring = $sentence.text().substr(i, 1);
        //if we have a character, wrap it
        if(substring != " "){
          newContent += '<span>' + substring + '</span>';
        }else{
          newContent += substring;
        } 
      }
      //replace content
      $sentence.html(newContent); 
    }); 
  }  
  
  //go through a sentence and trigger activate state
  window.loader.triggerCharacters = () => {
    
    var sentenceCounter = 0;
    var sentenceDelay = 500;
    $('.sentence').each(function(){
      
      var $sentence = $(this);
      //trigger for each sentence
      setTimeout(function(){
        
        var $spans = $sentence.find('span');
  
        var spanCounter = 0;
        var spanDelay = 20;
  
        //loop through all spans and activate
        $spans.each(function(){
  
          var $span = $(this);
          //trigger a timeout so each span is offset
          setTimeout(function(){
            $span.toggleClass('active');
          }, (spanCounter * spanDelay));
  
          spanCounter++; 
        }); 
        
      }, (sentenceCounter * sentenceDelay));
      
      sentenceCounter++;
    });
  
  }
})