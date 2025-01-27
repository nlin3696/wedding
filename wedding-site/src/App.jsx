import * as THREE from 'three'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { useGLTF, Environment, Float, Text, PivotControls } from '@react-three/drei'
import { EffectComposer, DepthOfField, ToneMapping } from '@react-three/postprocessing'
import Overlay from './layout/Overlay.jsx'
import TitleText from './TitleText.jsx'

function Flower({ z }) {
  const ref = useRef()
  const { nodes, materials } = useGLTF('/flower-3mb-transformed.glb')
  const { viewport, camera } = useThree()
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, z])
  const [data] = useState({
    x: THREE.MathUtils.randFloatSpread(2), // -3 to 3
    y: THREE.MathUtils.randFloatSpread(height),
    rX: Math.random() * Math.PI,
    rY: Math.random() * Math.PI,
    rZ: Math.random() * Math.PI,
  })

  useFrame((state) => {
    ref.current.rotation.set(data.rX += 0.001, data.rY += 0.0018, data.rZ += 0.0005)
    ref.current.position.set(data.x * width, (data.y -= 0.01), z)
    if (data.y < -height / 1.5) {
      data.y = height / 1.5
    }
  })

  const sScale = 5
  const pScale = 100 / sScale

  return (
    <group ref={ref} dispose={null}>
      <group position={[0.539 / pScale, 19.36 / pScale, 0.044 / pScale]} rotation={[-Math.PI / 2, 0, -2.627]} scale={sScale}>
        <mesh geometry={nodes.Petal_002_Petals2_0_2.geometry} material={materials.Petals1} />
        <mesh geometry={nodes.Petal_002_Petals2_0_1.geometry} material={materials.Petals2} />
        <mesh geometry={nodes.Petal_002_Petals2_0_3.geometry} material={materials.Petals3} />
        <mesh geometry={nodes.Petal_002_Petals2_0_4.geometry} material={materials.Petals4} />
        <mesh geometry={nodes.Petal_002_Petals2_0_5.geometry} material={materials.Petals5} />
        <mesh geometry={nodes.Petal_002_Petals2_0_6.geometry} material={materials.Petals6} />
        <mesh geometry={nodes.Petal_002_Petals2_0_7.geometry} material={materials.Petals7} />
        <mesh geometry={nodes.Petal_002_Petals2_0_8.geometry} material={materials.Petals8} />
        <mesh geometry={nodes.Petal_002_Petals2_0_9.geometry} material={materials.Petals9} />
        <mesh geometry={nodes.Petal_002_Petals2_0_10.geometry} material={materials.Petals10} />
        <mesh geometry={nodes.Petal_002_Petals2_0_11.geometry} material={materials.Petals11} />
        <mesh geometry={nodes.Petal_002_Petals2_0_12.geometry} material={materials.Petals12} />
        <mesh geometry={nodes.Petal_002_Petals2_0_13.geometry} material={materials.Petals14} />
      </group>
      <mesh geometry={nodes.Stems_Stems_0.geometry} material={materials.Stems} position={[-0.459 / pScale, -4.503 / pScale, 0.735 / pScale]} rotation={[-Math.PI / 2, 0, -2.627]} scale={sScale} />
      <group position={[-0.769 / pScale, 5.571 / pScale, 1.131 / pScale]} rotation={[-Math.PI / 2, 0, 0]} scale={sScale}>
        <mesh geometry={nodes.Leaves_001_Leaves1_0_1.geometry} material={materials.Leaves1} />
        <mesh geometry={nodes.Leaves_001_Leaves1_0_2.geometry} material={materials.Leaves6} />
      </group>
      <mesh geometry={nodes.Ribbons_001_Ribbons1_0.geometry} material={materials.Ribbons1} position={[0.379 / pScale, -9.88 / pScale, 0.971 / pScale]} rotation={[-Math.PI / 2, 0, 0]} scale={sScale} />
      <group position={[-0.667 / pScale, 5.969 / pScale, 3.621 / pScale]} rotation={[-Math.PI / 2, 0, 0]} scale={sScale}>
        <mesh geometry={nodes.SmallPlants_001_SmallPlants3_0_1.geometry} material={materials.SmallPlants3} />
        <mesh geometry={nodes.SmallPlants_001_SmallPlants3_0_2.geometry} material={materials.SmallPlants1} />
        <mesh geometry={nodes.SmallPlants_001_SmallPlants3_0_3.geometry} material={materials.SmallPlants2} />
      </group>
    </group>
  )

}

export default function App({ count = 100, depth = 80 }) {

  // console.log(width)
  return <><Canvas gl={{ alpha: false }} camera={{ near: 0.01, far: 110, fov: 30 }}>
    <color attach='background' args={['#6b94ed']} />
    {/* <ambientLight intensity={0.2} /> */}
    <spotLight position={[10, 10, 10]} intensity={1} />
    <Environment preset='sunset' />

    {Array.from({ length: count}, (_, i) => (<Flower key={i} z={-(i / count) * depth - 20} />))}
    <EffectComposer>
      <DepthOfField target={[0, 0, depth / 2]} focalLength={0.5} bokehScale={4} height={700} />
      <ToneMapping />
    </EffectComposer>
      {/* <TitleText /> */}
  </Canvas>
  <Overlay />
  </>
}


