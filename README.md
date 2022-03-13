# 인터스텔라 웹사이트

## 목차
1. [개요](#개요)  
2. [과정](#과정)  
  2.1. [webgl 불러오기](#webgl-불러오기)  
  2.2. [webgl 애니메이션 넣기](#webgl-애니메이션-넣기)  
  2.3. [기타 애니메이션](#기타-애니메이션)  
  2.4. [로딩 화면 만들기](#로딩-화면-만들기)  
3. [사용한 라이브러리](#사용한-라이브러리)  

## 개요
React와 WebGL을 사용해서 인터스텔라에 나오는 가르강튀아를 구현한 프로젝트입니다. 애니메이션은 `useState`의 `state`값에 따라 다르게 실행됩니다.

기본화면입니다. `state`=0
![제목 없음](https://user-images.githubusercontent.com/37141223/146590606-14c217b9-d8a3-4526-9a1c-6dc0a33d2a55.png)
왼쪽마우스를 누르고 있을 때 나오는 화면입니다. `state`= 1
![제목 없음](https://user-images.githubusercontent.com/37141223/146594542-f282959d-91f3-42b5-9603-dfac012d2a88.png)
좌측에 Endurance버튼을 눌렀을 때 나오는 화면입니다. 왼쪽 마우스 클릭으로 카메라를 돌려볼 수 있습니다. `state`= 2
![제목 없음](https://user-images.githubusercontent.com/37141223/146599635-84af71f9-6fea-40c1-8c58-4cff861a6056.png)

## 과정
### webgl 불러오기
`useGLTF`로 glb 파일을 불러왔습니다.
```javascript
<mesh ref={modelWrapper} position={[0, 0, 0]} rotation={[-.05,0,-.2]} scale={.5} opacity={0} transparent>
    <primitive object={blackhole.scene} ref={model} position={[0, 0, 0]} />
    <primitive object={endurance.scene} ref={enduranceModel} rotation={[0,0,1.6]} position={[0, .1, -12.5]} scale={0}/>
</mesh>
```
### webgl 애니메이션 넣기
`useFrame`은 애니메이션을 실행합니다. `state` 값에 따라 애니메이션이 동작되도록 조건문으로 분류하였습니다. 부드러운 움직임을 위해 `MathUtils.lerp`가 . 변경되는 부분은 3 `scale`, `rotation`입니다. `setState`, `setFrequncy`는 카메라 흔들림 정도입니다.
```javascript
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
```
### 기타 애니메이션
기타 ui 애니메이션입니다. `state`값에 따라 `opacity`가 변경됩니다.
```javascript
<motion.div className={styles.nav}
  onClick={()=>{
      setState(true)
  }}
  initial={{opacity:.5, y: 0, pointerEvents:'all'}}
  animate={{opacity: props.state===1 || props.state ===2 ? 0 : .5, y: props.state===1 || props.state ===2 ? 10 : 0, pointerEvents: props.state===1 || props.state ===2 ? 'none' : 'all'}}
  whileHover={{opacity:.8}}
  transition={{duration:.5, delay: props.state===1 || props.state ===2 ? 0 : .4 ,type:'spring'}}
>
  ABOUT
</motion.div>
```
### 로딩 화면 만들기
`useProgress`로 진행도를 넘겨받아 `progress`가 100이 되면 로딩화면이 사라집니다. 3d모델이 2개이기 때문에 `total`값으로 퍼센티지가 표시됩니다.

```javascript
const { progress, total } = useProgress();

return(
    <motion.div className={styles.Wrapper}
        initial={{display:'block'}}
        animate={{display:progress === 100 ? 'none' : 'block'}}
        transition={{delay:.5}}
    >
        <motion.div className='w-100 h-100' style={{backgroundColor:'black'}}
            initial={{opacity:1}}
            animate={{opacity:progress === 100 ? 0 : 1}}
            transition={{delay:0, duration:.3}}
        >
            <Row className="justify-content-md-center h-100">
                <Col xl={6} className='h-100'>
                <Card className={styles.card}>
                    <Card.Body >
                            <div className={styles.progress}>
                                <div>{total*10}% loading</div>
                            </div>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </motion.div>
    </motion.div>
```

## 사용한 라이브러리
`react` `react-three-fiber` `react-three/drei` `react-three/postprocessing` `react-bootstrap` `framer-motion`
