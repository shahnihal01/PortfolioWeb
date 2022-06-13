import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useFrame, Canvas } from '@react-three/fiber';
import { angleToRadians } from '../../utils/angle';
import { useRef, Suspense } from 'react';
import * as THREE from 'three';
import Shuttle from './shuttle';
import { GrannyKnot } from '../../../node_modules/three/examples/jsm/curves/CurveExtras';
import Satellite from './satellite';
import Batgal from './batgal';
import Asteroid from './aster';
import Earth from './earth';
import Ship from './ship';
import { AnimatePresence } from 'framer-motion';
import {motion} from 'framer-motion-3d';
import '../../index.css';

export default function Three(){
    const curve = new GrannyKnot();

    const orbitControlsRef = useRef(null);
    const tubeRef = useRef(null);
    const camRef = useRef(null);
    const shuttleRef = useRef(null);
    const asterRef = useRef(null);
    const satRef = useRef(null);
    const shipRef = useRef(null);
    const sunRef = useRef(null);
    const merRef = useRef(null);
    const venRef = useRef(null);
    const marRef = useRef(null);
    const jupRef = useRef(null);
    const sattRef = useRef(null);
    const urRef = useRef(null);
    const nepRef = useRef(null);
    const earRef = useRef(null);

    const moonText = new THREE.TextureLoader().load('./assets/moontexture/moon.jpg');
    const moonNormal = new THREE.TextureLoader().load('./assets/moontexture/normal.jpg');

    const sunText = new THREE.TextureLoader().load('./assets/planets/sun.jpg');
    const mercText = new THREE.TextureLoader().load('./assets/planets/mercury.jpg');
    const venText = new THREE.TextureLoader().load('./assets/planets/venus.jpg');
    const marText = new THREE.TextureLoader().load('./assets/planets/mars.jpg');
    const jupText = new THREE.TextureLoader().load('./assets/planets/jupiter.jpg');
    const satText = new THREE.TextureLoader().load('./assets/planets/saturn.jpg');
    const satRing = new THREE.TextureLoader().load('./assets/planets/saturn ring.png');
    const urText = new THREE.TextureLoader().load('./assets/planets/uranus.jpg');
    const urRing = new THREE.TextureLoader().load('./assets/planets/uranus ring.png');
    const nepText = new THREE.TextureLoader().load('./assets/planets/neptune.jpg');


    //Camera movement
    const AnimateFrame = (props)=>{
        useFrame(({clock})=>{
            const time = clock.getElapsedTime();
            const looptime = 40;
            const t = (time % looptime) / looptime;
            const t2 = ((time + 0.1) % looptime) / looptime;
            const t3 = ((time + 0.5) % looptime) / looptime;
          
            const pos = props.tube.current.geometry.parameters.path.getPointAt(t);
            const pos2 = props.tube.current.geometry.parameters.path.getPointAt(t2);
            const pos3 = props.tube.current.geometry.parameters.path.getPointAt(t3);
          
            props.cam.current.position.copy(pos);
            props.cam.current.lookAt(pos2);

            props.ship.current.position.copy(pos2);
            props.ship.current.lookAt(pos3);
        });
        return null;
    }

    const Revolution = (props)=>{
        useFrame(()=>{
            props.aster.current.rotation.x -= 0.005;
            props.shuttle.current.rotation.x += 0.01;
            props.sattelite.current.rotation.x += 0.01;
            props.sun.current.rotation.y += 0.01;
            props.mer.current.rotation.y -= 0.01;
            props.ven.current.rotation.y += 0.01;
            props.ear.current.rotation.y += 0.01;
            props.mar.current.rotation.y -= 0.01;
            props.jup.current.rotation.y += 0.01;
            props.satt.current.rotation.y -= 0.01;
            props.urr.current.rotation.y += 0.01;
            props.nep.current.rotation.y -= 0.01;
        });
        return null;
    }

    return(
        <>
        <AnimatePresence>
        <Canvas shadows="true" frameloop='demand'>
            <Suspense fallback={null}>
            <PerspectiveCamera makeDefault position={[0,4,57]} ref={camRef}/>
            <OrbitControls ref={orbitControlsRef} enableZoom={false}/>

            <Environment 
                background={true}
                files={['corona_ft.png','corona_bk.png','corona_up.png','corona_dn.png','corona_rt.png','corona_lf.png']}
                path={'/assets/spacetexture/'}
                preset={null}
                scene={undefined}
            />
            
            {/*Moon*/}
            <mesh position={[20,0,0]}>
                <sphereGeometry args={[3,32,32]}/>
                <meshStandardMaterial map={moonText} normalMap={moonNormal}/>
            </mesh>

            {/*Sun*/}
            <mesh position={[-400,0,0]} ref={sunRef}>
                <sphereGeometry args={[50,32,32]} />
                <meshBasicMaterial map={sunText} />
            </mesh>
            <pointLight args={[0xffffff,1]} position={[-400,0,0]}/>
            

            {/*Mercury*/}
            <mesh position={[-250,0,-40]} ref={merRef}>
                <sphereGeometry args={[5,32,32]} />
                <meshStandardMaterial map={mercText} />
            </mesh>

            {/*Venus*/}
            <mesh position={[-150,30,-100]} ref={venRef}>
                <sphereGeometry args={[13,32,32]} />
                <meshStandardMaterial map={venText} />
            </mesh>

            {/*Mars*/}
            <mesh position={[100,30,-20]} ref={marRef}>
                <sphereGeometry args={[10,32,32]} />
                <meshStandardMaterial map={marText} />
            </mesh>

            {/*Jupiter*/}
            <mesh position={[250,0,150]} ref={jupRef}>
                <sphereGeometry args={[35,32,32]} />
                <meshStandardMaterial map={jupText} />
            </mesh>

            {/*Saturn*/}
            <mesh position={[10,-100,300]} ref={sattRef}>
                <sphereGeometry args={[25,32,32]} />
                <meshStandardMaterial map={satText} />
            </mesh>

            <mesh position={[10,-100,300]} rotation={[-angleToRadians(90),0,0]}>
                <ringGeometry args={[50,30,32]}/>
                <meshStandardMaterial map={satRing} side={THREE.DoubleSide}/>
            </mesh>

            {/*Uranus*/}
            <mesh position={[-200,100,400]} ref={urRef}>
                <sphereGeometry args={[20,32,32]} />
                <meshStandardMaterial map={urText} />
            </mesh>

            <mesh position={[-200,100,400]} rotation={[-angleToRadians(90),0,0]}>
                <ringGeometry args={[50,30,32]}/>
                <meshStandardMaterial map={urRing} side={THREE.DoubleSide}/>
            </mesh>

            {/*Neptune*/}
            <mesh position={[200,100,-300]} ref={nepRef}>
                <sphereGeometry args={[18,32,32]} />
                <meshStandardMaterial map={nepText} />
            </mesh>

            <mesh position={[-20,0,0]} ref={earRef}>
                <Earth/>
            </mesh>
            
            <mesh ref={shuttleRef}>
                <Shuttle />
            </mesh>
            
            <mesh ref={satRef}>
                <Satellite/>
            </mesh>

            <Batgal/>

            <motion.mesh whileHover={{scale: 1.2}} whileTap={{scale:1.5}} transition={{type:"spring"}} ref={shipRef}>
                <Ship />
            </motion.mesh>
            
            <mesh ref={asterRef}>
                <Asteroid/>
            </mesh>

            <mesh ref={tubeRef}>
                <tubeBufferGeometry args={[curve, 100, 2, 10, true]}/>
                <meshBasicMaterial color={0xffffff} wireframe={false} side={THREE.DoubleSide} transparent={true} opacity={0}/>
            </mesh>

            <AnimateFrame tube={tubeRef} orb={orbitControlsRef} cam={camRef} ship={shipRef}/>
            <Revolution aster={asterRef} shuttle={shuttleRef} sattelite={satRef} sun={sunRef} mer={merRef} ven={venRef} ear={earRef} mar={marRef} jup={jupRef} satt={sattRef} urr={urRef} nep={nepRef}/>

            <ambientLight args={[0xffffff,0.03]}/>
            </Suspense>
        </Canvas>
        </AnimatePresence>
        </>
    )
}