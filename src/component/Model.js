import * as THREE from 'three'
import { useRef, useEffect, useState, useMemo } from "react"
import { useGLTF, CameraShake, OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { useFrame, extend, useThree } from "@react-three/fiber";
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'

extend({ EffectComposer, RenderPass, UnrealBloomPass, ShaderPass })

export default function Model(props) {
    const blackhole = useGLTF('/blackhole.glb')
    const endurance = useGLTF('/endurance.glb')
    const model = useRef()
    const enduranceModel = useRef()
    const modelWrapper = useRef()
    const myCamera = useRef()
    const [state, setState] = useState(0)
    const [frequncy, setFrequncy] = useState(0)
    const [targetZ, setTargetZ] = useState(0)
    const num = 0
    const config = {
        maxYaw: state,
        maxPitch: state,
        maxRoll: state,
        yawFrequency: frequncy,
        pitchFrequency: frequncy,
        rollFrequency: frequncy,
    }
    const composer = useRef()
    const { scene, gl, size, camera } = useThree()
    const aspect = useMemo(() => new THREE.Vector2(size.width, size.height), [size])
    useEffect(() => void composer.current.setSize(size.width, size.height), [size])
    useFrame(() => composer.current.render(), 1)
    useFrame(() => {
        if(props.state === 0){
            modelWrapper.current.scale.x = THREE.MathUtils.lerp(modelWrapper.current.scale.x, .5, .05)
            modelWrapper.current.scale.y = THREE.MathUtils.lerp(modelWrapper.current.scale.y, .5, .05)
            modelWrapper.current.scale.z = THREE.MathUtils.lerp(modelWrapper.current.scale.z, .5, .05)
            model.current.rotation.y = model.current.rotation.y + .002
            setState(0)
            setFrequncy(0)
            modelWrapper.current.position.y = THREE.MathUtils.lerp(modelWrapper.current.position.y, 0, .05)
            myCamera.current.target.z = THREE.MathUtils.lerp(myCamera.current.target.z, 0, .1)
            enduranceModel.current.scale.x = THREE.MathUtils.lerp(enduranceModel.current.scale.x, 0, .05)
            enduranceModel.current.scale.y = THREE.MathUtils.lerp(enduranceModel.current.scale.y, 0, .05)
            enduranceModel.current.scale.z = THREE.MathUtils.lerp(enduranceModel.current.scale.z, 0, .05)
        }
        if(props.state === 1){
            modelWrapper.current.scale.x = THREE.MathUtils.lerp(modelWrapper.current.scale.x, 1, .05)
            modelWrapper.current.scale.y = THREE.MathUtils.lerp(modelWrapper.current.scale.y, 1, .05)
            modelWrapper.current.scale.z = THREE.MathUtils.lerp(modelWrapper.current.scale.z, 1, .05)
            model.current.rotation.y = model.current.rotation.y + .02
            setState(0.001)
            setFrequncy(5)
            modelWrapper.current.position.y = THREE.MathUtils.lerp(modelWrapper.current.position.y, 0, .05)
            myCamera.current.target.z = THREE.MathUtils.lerp(myCamera.current.target.z, 0, .1)
            enduranceModel.current.scale.x = THREE.MathUtils.lerp(enduranceModel.current.scale.x, 0, .05)
            enduranceModel.current.scale.y = THREE.MathUtils.lerp(enduranceModel.current.scale.y, 0, .05)
            enduranceModel.current.scale.z = THREE.MathUtils.lerp(enduranceModel.current.scale.z, 0, .05)
        }
        if(props.state === 2 || props.state === 3){
            modelWrapper.current.scale.x = THREE.MathUtils.lerp(modelWrapper.current.scale.x, 1.2, .01)
            modelWrapper.current.scale.y = THREE.MathUtils.lerp(modelWrapper.current.scale.y, 1.2, .01)
            modelWrapper.current.scale.z = THREE.MathUtils.lerp(modelWrapper.current.scale.z, 1.2, .01)
            modelWrapper.current.scale.x = THREE.MathUtils.lerp(modelWrapper.current.scale.x, 1.2, .01)
            model.current.rotation.y = model.current.rotation.y + .02
            modelWrapper.current.position.y = THREE.MathUtils.lerp(modelWrapper.current.position.y, .7, .05)
            myCamera.current.target.z = THREE.MathUtils.lerp(myCamera.current.target.z, -15, .015)
            setState(0.003)
            setFrequncy(8)
            enduranceModel.current.rotation.x = enduranceModel.current.rotation.x + .05
            enduranceModel.current.scale.x = THREE.MathUtils.lerp(enduranceModel.current.scale.x, .005, .01)
            enduranceModel.current.scale.y = THREE.MathUtils.lerp(enduranceModel.current.scale.y, .005, .01)
            enduranceModel.current.scale.z = THREE.MathUtils.lerp(enduranceModel.current.scale.z, .005, .01)
        }
    })
    return (
        <>
            <mesh ref={modelWrapper} position={[0, 0, 0]} rotation={[-.05,0,-.2]} scale={.5}>
                <primitive object={blackhole.scene} ref={model} position={[0, 0, 0]}/>
                <primitive object={endurance.scene} ref={enduranceModel} rotation={[0,0,1.6]} position={[0, .1, -12.5]} scale={0}/>
            </mesh>
            <OrbitControls ref={myCamera} makeDefault enableZoom={false} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2.1} maxAzimuthAngle={3.14} minAzimuthAngle={2.5} />
            <CameraShake {...config} />
            <effectComposer ref={composer} args={[gl]}>
                <renderPass attachArray="passes" scene={scene} camera={camera} />
                <unrealBloomPass attachArray="passes" args={[aspect, .2, 10, 0]} />
            </effectComposer>
        </>
    )
  }
