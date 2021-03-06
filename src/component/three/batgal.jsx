/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Batgal() {
  const group = useRef()
  const { nodes, materials } = useGLTF('/batgal.glb')
  return (
    <group ref={group} dispose={null} position={[-10,10,-40]} scale={0.15}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-19.33, 2.42, -8.36]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[1, 1, 1.26]}>
          <mesh geometry={nodes.Colonial_Shipyard_0.geometry} material={materials.Hull} />
        </group>
        <group position={[-19.33, 2.42, -8.36]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[1, 1, 1.26]}>
          <mesh geometry={nodes['Mercury-class_0'].geometry} material={materials.Battlestar} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/batgal.glb')
