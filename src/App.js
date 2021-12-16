import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Canvas } from '@react-three/fiber'
import Model from './component/Model'
import { Suspense, useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Header from './component/Header'
import Loading from './component/Loading'
import { Col, Card } from 'react-bootstrap'
import rotateImg from './rotate.svg'
import ReactAudioPlayer from 'react-audio-player'
import bgm from './bgm.mp3'

function App() {
  const [state, setState] = useState(0);
  const pleaseRotate = useRef();
  const Resize = () =>{
    if(window.innerWidth < window.innerHeight){
      pleaseRotate.current.style.display = 'flex'
    }else{
      pleaseRotate.current.style.display = 'none'
    }
  }
  useEffect(()=>{
    window.addEventListener('resize', Resize)
    return()=>{
      window.removeEventListener('resize', Resize)
    }
  }, [])

  return (
    <>
            <ReactAudioPlayer
              src={bgm}
              autoPlay
              volume={.05}
            />
            <Header state={state} />
            <div className={'canvas-wrapper'}>
            <Canvas dpr={[1, 2]} shadows camera={{position:[0,1,-20],fov:30, zoom:1.5}} style={{position:'absolute', width:'100%', height:'100%', top:0, left:0}}>
              <Suspense fallback={null}>
                <Model state={state} />
              </Suspense>
            </Canvas>
            </div>
              <div style={{position:'absolute', width: '100%', top:'10%', padding:'30px', pointerEvents:'none'}}>
                <Col>
                  <Card>
                    <Card.Body>
                    <motion.div className={'card-text'}
                      initial={{opacity:0}}
                      animate={{opacity: state===1 ? 1 : 0}}
                      transition={{delay: state===1 ? .3 : .1}}
                    >
                      GARGANTUA
                    </motion.div>
                    </Card.Body>
                  </Card>
                </Col>
              </div>
              <div style={{position:'absolute', width: '100%', top:'10%', padding:'30px', pointerEvents:'none'}}>
                <Col>
                  <Card>
                    <Card.Body>
                    <motion.div className={'card-text'}
                      initial={{opacity:0}}
                      animate={{opacity: state===2 ? 1 : 0}}
                      transition={{delay: state===2 ? .3 : .1}}
                    >
                      FINAL ADVENTURE OF ENDURANCE
                    </motion.div>
                    </Card.Body>
                  </Card>
                </Col>
              </div>
              <div className={'bottom'}>
                <Col xs={12}>
                  <Card>
                    <Card.Body style={{paddingBottom:0, marginBottom:'-20px'}}>
                      <motion.div className={'card-text'}
                        initial={{opacity:0}}
                        animate={{opacity: state===1 ? 1 : 0}}
                        transition={{delay: state===1 ? .5 : .1, duration: .3}}
                      >
                        <p className={'text'}>ORBIT</p>
                      </motion.div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={3}>
                  <Card>
                    <Card.Body>
                    <motion.div className={'card-text'}
                      initial={{opacity:0}}
                      animate={{opacity: state===1 ? 1 : 0}}
                      transition={{delay: state===1 ? .6 : .1, duration: .3}}
                    >
                      <p className={'text'}><span>MILLER</span><span>MANN</span></p>
                    </motion.div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={6}>
                  <Card>
                    <Card.Body>
                      &nbsp;<br />
                    <motion.div className={'line2'}
                      initial={{opacity:0}}
                      animate={{opacity: state===1 ? .5 : 0, width: state===1 ? '90%' : 0}}
                      transition={{delay: state===1 ? .6 : .1, duration:.3}}
                    />
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={3}>
                  <Card>
                    <Card.Body>
                    <motion.div className={'card-text'}
                      initial={{opacity:0, y: 10}}
                      animate={{opacity: state===1 ? 1 : 0, y: state===1 ? 0 : 10}}
                      transition={{delay: state===1 ? .5 : .1, duration:.3, type:'spring'}}
                    >
                      <p className={'text'} style={{textAlign:'right'}}><span>MASS</span><span>100 MILLION SOLAR</span></p>
                    </motion.div>
                    </Card.Body>
                  </Card>
                </Col>
              </div>
              <div className={'bottom'}>
                <Col xs={12}>
                  <Card>
                    <Card.Body style={{paddingBottom:0, marginBottom:'-20px'}}>
                      <motion.div className={'card-text'}
                        initial={{opacity:0}}
                        animate={{opacity: state===2 ? 1 : 0}}
                        transition={{delay: state===2 ? .5 : .1, duration: .3}}
                      >
                        <p className={'text'}>CREW</p>
                      </motion.div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={3}>
                  <Card>
                    <Card.Body>
                    <motion.div className={'card-text'}
                      initial={{opacity:0}}
                      animate={{opacity: state===2 ? 1 : 0}}
                      transition={{delay: state===2 ? .6 : .1, duration: .3}}
                    >
                      <p className={'text'}><span>COOPER</span><span>BRAND</span><span>ROMILLY</span><span>DOYLE</span></p>
                    </motion.div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={6}>
                  <Card>
                    <Card.Body>
                      &nbsp;<br />
                    <motion.div className={'line2'}
                      initial={{opacity:0}}
                      animate={{opacity: state===2 ? .5 : 0, width: state===2 ? '90%' : 0}}
                      transition={{delay: state===2 ? .6 : .1, duration:.3}}
                    />
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={3}>
                  <Card>
                    <Card.Body>
                    <motion.div className={'card-text'}
                      initial={{opacity:0, y: 10}}
                      animate={{opacity: state===2 ? 1 : 0, y: state===2 ? 0 : 10}}
                      transition={{delay: state===2 ? .5 : .1, duration:.3, type:'spring'}}
                    >
                      <p className={'text'} style={{textAlign:'right'}}><span style={{marginRight:'40px'}}>SUPPORT</span><span>C.A.S.E</span><span>T.A.R.S</span></p>
                    </motion.div>
                    </Card.Body>
                  </Card>
                </Col>
              </div>
            <motion.div className={'lineWrapper'}
              initial={{opacity:0}}
              animate={{opacity: state===1 || state===2 ? 1 : 0}}
            >
              <div className={'line'} />
              <div className={'line'} />
            </motion.div>
            {state === 0 || state === 1 ? <motion.div className={'hold'}
              onMouseDown={()=>{setState(1)}}
              onMouseUp={()=>{setState(0)}}
              onTouchStart={()=>{setState(1)}}
              onTouchEnd={()=>{setState(0)}}
            />:null}
            
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
            <motion.div className={'sideNavWrapper'} style={{right:0}}
              initial={{opacity:0}}
              animate={{opacity: state===0||state===1 ? 0 : .5}}
              transition={{duration:.3, delay: .3}}
              whileHover={{opacity: state===2 || state===3 ? .8 : 0}}
              onClick={()=>{
                setState(0)
              }}
            >
              <span className={'endurance'}>GARGANTUA</span>
              <div className={'pointLine'} style={{marginRight:0, marginLeft:'30px' , right: 0}} />
            </motion.div>
            <div ref={pleaseRotate} className={'rotate'}>
              <img src={rotateImg} className={'rotateImg'} alt='rotateImg' />
              <p className={'rotateText'}>PLEASE ROTATE YOUR DEVICE</p>
            </div>
            <Loading />
    </>
  )
}

export default App;
