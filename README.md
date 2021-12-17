# 인터스텔라 웹사이트

`react-three-fiber` `react-three/drei` `react-three/postprocessing` `react-bootstrap` `framer-motion`

## 프로젝트 구조

`App.js` `Model.js` `Loading.js` `Header.js` 으로 구성이 되어있습니다.
```javascript
const [state, setState] = useState(0);
```
`App.js`의 `state` 값에 따라 각 컴포넌트에 `props` 로 전달하여 3d 모델과 애니메이션을 제어하는 구조입니다.

## App.js

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

![제목 없음](https://user-images.githubusercontent.com/37141223/146590606-14c217b9-d8a3-4526-9a1c-6dc0a33d2a55.png)

![제목 없음](https://user-images.githubusercontent.com/37141223/146594542-f282959d-91f3-42b5-9603-dfac012d2a88.png)

메인화면에서 마우스를 누르면 화면이 조금 확대되며 헤더가 사라진 후 가르강튀아의 설명이 나오도록 하였습니다.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
