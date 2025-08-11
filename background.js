



let vertexShader = `
uniform float time;
uniform vec2 resolution;
varying vec3 vNormal;
varying float displacement;

void main() {
    displacement = sin(time);
    vNormal = normal;
    vec3 pos = position;
    pos.z = pos.z + sin(pos.z * 10.0) * sin(time * 10.0) * 5.0;
    pos.x = pos.x + cos(pos.x * 5.0) * sin(time * 5.0) * 5.0 + 10.0;
    pos.y = pos.y + sin(pos.y * 2.0) * sin(time * 5.0) * 5.0;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`
let fragmentShader = `
            uniform vec2 resolution;
            varying vec3 vNormal;
            varying float displacement;

            void main() {
            vec2 st = gl_FragCoord.xy / resolution.xy;
            vec3 light1 = vec3(1.5, 1.2, 1.0);
            // light1 = normalize(light1);
            // float dProd = max(0.0, dot(vNormal, light1));

            // vec3 light2 = vec3(1.0, 0.7, 0.2);
            // light2 = normalize(light2);
            // float dProd2 = max(0.0, dot(dProd, light2));

            light1 = mix(light1, vec3(1.0, 1.0, 0.8), st.x);
            vec3 dProd3 = vNormal * light1;
            // dProd3 = max(dProd3, vec3(0.2, 0.0, 1)) ;
            dProd3 = mix(dProd3, vec3(1.0, 0.2, 1.0), st.x);
            // dProd3 = light1 * (vNormal.x) * (2.0 + displacement);
            // vec3 dProd3 = vec3(st.x);
            gl_FragColor = vec4(dProd3,
                                  1.0);  // A

                // gl_FragColor = vec4(1.0,  0.0, 1.0, 1.0);
            }
        `


    var container,
        renderer,
        scene,
        camera,
        mesh,
        fov = 250;

    function init() {
        container = document.getElementById('BackGround');

        scene = new THREE.Scene();

        camera = new THREE.PerspectiveCamera(
            fov,
            window.innerWidth / window.innerHeight,
            1,
            100
        );
        camera.position.z = 30;
        camera.target = new THREE.Vector3(0, 0, 0);

        scene.add(camera);

        var ambientLight = new THREE.AmbientLight(0xffffff);
        scene.add(ambientLight);

        material = new THREE.ShaderMaterial({
            uniforms: {
                time: { type: 'f', value: 0 },
                resolution: {
                    type: 'v2',
                    value: new THREE.Vector2(
                        Math.max(window.innerWidth, 1500),
                        Math.max(window.innerHeight, 600)
                    ),
                },
            },
            vertexShader,
            fragmentShader,
        });

        mesh = new THREE.Mesh(
            new THREE.IcosahedronGeometry(20, 4),
            material
        );
        mesh.rotation.set(3.3, 1.3, 1);
        scene.add(mesh);

        renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.autoClear = false;

        renderer.domElement.id="backgroundCanvas"
        container.appendChild(renderer.domElement);

        // var controls = new THREE.OrbitControls(camera, renderer.domElement);

        window.addEventListener('resize', onWindowResize, false);

        render();

        // $animateButton.click(function() {
        // 	isAnimating = !isAnimating;
        //
        // 	if (isAnimating) {
        // 		$animateButtonText.text('Stop');
        // 	} else {
        // 		$animateButtonText.text('Animate');
        // 	}
        //
        // 	$animateButton.toggleClass('active');
        // });
        // $('.loading').fadeOut();
    }

    function onWindowResize() {
        renderer.setSize(container.clientWidth, container.clientHeight);
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
    }

    var time = 0.02;
    function render() {
        // if (isAnimating) {
        time += 0.0002;
        material.uniforms['time'].value = time;
        // }

        renderer.render(scene, camera);
        requestAnimationFrame(render);
    }

    init();



async function AnimateLoadingScreen () {
let TitleContainer = document.getElementById("TitleContainer");
let BodyContainer = document.getElementById("BodyContainer");

TitleContainer.style.transform = "translateX(0)";
await sleep(2e3)
TitleContainer.style.transform = "translateX(-100%)";
await sleep(100)
BodyContainer.style.transform = "translateX(-50%)";
await sleep(1e3)
BodyContainer.style.transform = "translateX(0%)";
}
AnimateLoadingScreen()