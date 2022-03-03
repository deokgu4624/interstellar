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
React와 WebGL을 사용해서 인터스텔라에 나오는 가르강튀아를 구현한 프로젝트입니다. 
```javascript
const [state, setState] = useState(0);
```
`App.js`의 `state` 값에 따라 각 컴포넌트에 `props` 로 전달하여 3d 모델과 애니메이션을 제어하는 구조입니다.

![제목 없음](https://user-images.githubusercontent.com/37141223/146590606-14c217b9-d8a3-4526-9a1c-6dc0a33d2a55.png)
![제목 없음](https://user-images.githubusercontent.com/37141223/146594542-f282959d-91f3-42b5-9603-dfac012d2a88.png)
![제목 없음](https://user-images.githubusercontent.com/37141223/146599635-84af71f9-6fea-40c1-8c58-4cff861a6056.png)

## 과정
### webgl 불러오기
`App.js` 에는 크게 `<Canvas />`, 클릭에 따라서 `state` 값이 변경된는 `<div />`, 'state' 값에 따라 상태가 전환되는 각각의 `<motion.div />` 들로 만들어져있습니다. 

```javascript
{state === 0 || state === 1 ? <motion.div className={'hold'}
  onMouseDown={()=>{setState(1)}}
  onMouseUp={()=>{setState(0)}}
  onTouchStart={()=>{setState(1)}}
  onTouchEnd={()=>{setState(0)}}
/>:null}
```
마우스를 누르면 `state`가 1이 되고 떼면 0이 되는 `<div />` 를 만들어서 사용자가 `state`를 변경할 수 있게 하였습니다.

```javascript
<motion.div className={'card-text'}
  initial={{opacity:0}}
  animate={{opacity: state===1 ? 1 : 0}}
  transition={{delay: state===1 ? .3 : .1}}
>
  GARGANTUA
</motion.div>
```
애니메이션은 `framer-motion`을 사용하였는데 설정에 조건을 달아서 `state` 값에 따라 다른 값을 가지도록 하였습니다.



메인화면에서 마우스를 눌러서 `state` 값이 1이 되면 `props`로 전달된 값에 따라 `Model.js`의 오브젝트는 확대되며 `Header.js`의 요소들도 사라진 후 가르강튀아의 간단한 개요가 나오도록 하였습니다.

```javascript
<motion.div className={'sideNavWrapper'}
  initial={{opacity:.5}}
  animate={{opacity: state===1 || state===2 ? 0 : .5}}
  transition={{duration:.3, delay: state===1 ? 0 : .3}}
  whileHover={{opacity: state===0 || state===1 ?.8 : 0}}
  onClick={()=>{
    setState(2)
  }}
>
  <div className={'pointLine'} />
  <span className={'endurance'}>ENDURANCE</span>
</motion.div>
```
메인화면에 있는 ENDURANCE 버튼입니다. 클릭하면 `state` 값이 2가 되고 그에 따라 `Model.js`의 오브젝트가 확대되고 인듀어런스호 를 조명하여 `Orbitcontrol`이 되게 하였습니다

### webgl 애니메이션 넣기
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
`useFrame`을 사용해서 `state` 값에 따라 상태가 변하도록 조건문으로 분류하였습니다. 변경되는 부분은 `scale`과 `rotation`이 있고 `setState`와 `setFrequncy`는 `<CameraShake />`의 흔들림 정도, 빈도를 변경하는 `useState`입니다.

```javascript
modelWrapper.current.scale.x = THREE.MathUtils.lerp(modelWrapper.current.scale.x, .5, .05)
```
`scale`은 `THREE.MathUtils.lerp`를 사용해 부드러운 움직임을 주었습니다.
### 기타 애니메이션
### 로딩 화면 만들기
`useProgress`를 사용하여 로딩의 숫자를 표시했고 `Math.floor`를 사용하여 소수점 이하를 버렸습니다.

```javascript
<div className={styles.progress}>
    <div>{Math.floor(progress)}% loading</div>
</div>
```

```
<motion.div className={styles.Wrapper}
  initial={{display:'block'}}
  animate={{display:progress === 100 ? 'none' : 'block'}}
  transition={{delay:.5}}
>
```

이런식으로 조건문을 달아 `progress` 가 100이 되면 로딩화면이 사라지게 하였습니다.

## 사용한 라이브러리
`react` `react-three-fiber` `react-three/drei` `react-three/postprocessing` `react-bootstrap` `framer-motion`
