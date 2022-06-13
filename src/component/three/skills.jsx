import * as THREE from 'three'
import { useRef, useState, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, TrackballControls } from '@react-three/drei'

function Word({ children, ...props }) {
  const color = new THREE.Color()
  const fontProps = { fontSize: 2.5, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false }
  const ref = useRef()
  const [hovered, setHovered] = useState(false)
  const over = (e) => (e.stopPropagation(), setHovered(true))
  const out = () => setHovered(false)
  useEffect(() => {
    if (hovered) document.body.style.cursor = 'pointer'
    return () => (document.body.style.cursor = 'auto')
  }, [hovered])
  useFrame(({ camera }) => {
    ref.current.quaternion.copy(camera.quaternion)
    ref.current.material.color.lerp(color.set(hovered ? '#fa2720' : 'white'), 0.1)
  })
  return <Text ref={ref} onPointerOver={over} onPointerOut={out} {...props} {...fontProps} children={children} />
}

function Cloud({ count = 4, radius = 20 }) {
  const words = useMemo(() => {
    let skills = ['abc','xyz','123', 'C++','JavaScript', 'HTML', 'CSS','Angular','Tailwindcss',' ThreeJS', 'Github','Bootstrap','C','SQL','Data Science','NodeJS','NoSQL','Git','React','Python','Java'];
    function wordFromMyList(i, j) {
        return skills[i * 4 + j];
    }    
    const temp = []
    const spherical = new THREE.Spherical()
    const phiSpan = Math.PI / (count + 1)
    const thetaSpan = (Math.PI * 2) / count
    for (let i = 1; i < count + 1; i++)
      for (let j = 0; j < count; j++) temp.push([new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)), wordFromMyList(i,j)])
    return temp
  }, [count, radius])
  return words.map(([pos, word], index) => <Word key={index} position={pos} children={word} />)
}

export default function Skills() {
  return (
    <Canvas frameloop='demand' dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
      <fog attach="fog" args={['#202025', 0, 80]} />
      <Cloud count={4} radius={20} />
      <TrackballControls noZoom={true}/>
    </Canvas>
  )
}
