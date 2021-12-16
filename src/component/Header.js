import { Navbar } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { useState } from 'react'
import styles from './Header.module.css'
import close from '../close.svg'

export default function Header(props){
    const [state, setState] = useState(false)
    return(
            <>
            <Navbar fixed="top" style={{padding:'30px', zIndex:1, pointerEvents:'none'}}>
                <Navbar.Brand className={styles.home} style={{color:'white'}}>
                    <motion.div
                        initial={{opacity:0, y: 0}}
                        animate={{opacity: props.state===1 || props.state===2 || state ? 0 : 1, y: props.state===1 || props.state===2 || state ? 10 : 0}}
                        transition={{duration:.5, delay: props.state===1 || props.state===2 || state ? 0 : .4 , type:'spring'}}
                    >
                    INTERSTELLAR
                    </motion.div>
                </Navbar.Brand>
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
            </Navbar>
            <motion.div className={styles.about}
                initial={{opacity:0, pointerEvents:'none'}}
                animate={{opacity: state? 1 : 0, pointerEvents: state? 'all' : 'none'}}
                transition={{duration:.3}}
            >
                <motion.div className={'lineWrapper'}
                initial={{opacity:0}}
                animate={{opacity: state ? 1 : 0}}
                >
                    <motion.div className={'line'} style={{opacity:.1}}
                        initial={{width:0}}
                        animate={{width: state? '100%':0}}
                        transition={{delay:.3, duration:2}}
                    />
                    <motion.div className={'line'} style={{opacity:.1}}
                        initial={{width:0}}
                        animate={{width: state? '100%':0}}
                        transition={{delay:.3, duration:2}}
                    />
                </motion.div>
                <motion.div className={styles.quote}
                    initial={{opacity:0}}
                    animate={{opacity: state?1:0}}
                    transition={{delay:1.3}}
                >
                    WE WILL FIND THE ANSWER WE ALWAYS HAVE.
                </motion.div>
                <div className={styles.titleWrapper}>
                <motion.div className={styles.title}
                    initial={{opacity:0}}
                    animate={{opacity: state?1:0}}
                    transition={{delay:1}}
                >
                    INTERSTELLAR
                </motion.div>
                <motion.div className={styles.subtitle}
                    initial={{opacity:0}}
                    animate={{opacity: state?1:0}}
                    transition={{delay:1}}
                >
                    A CHRISTOPHER NOLAN FILM
                </motion.div>
                </div>
                <div className={styles.castWrapper}>
                <motion.div className={styles.cast}
                    initial={{opacity:0}}
                    animate={{opacity: state?1:0}}
                    transition={{delay:1}}
                >
                    MATTHEW MCCONAUGHEY
                </motion.div>
                <motion.div className={styles.cast}
                    initial={{opacity:0}}
                    animate={{opacity: state?1:0}}
                    transition={{delay:1.1}}
                >
                    ANNE HATHAWAY
                </motion.div>
                <motion.div className={styles.cast}
                    initial={{opacity:0}}
                    animate={{opacity: state?1:0}}
                    transition={{delay:1.2}}
                >
                    JESSICA CHASTAIN
                </motion.div>
                <motion.div className={styles.cast} style={{marginRight:0}}
                    initial={{opacity:0}}
                    animate={{opacity: state?1:0}}
                    transition={{delay:1.3}}
                >
                    MICHAEL CAINE
                </motion.div>
                </div>
                <motion.div className={styles.closeWrapper} >
                    <img src={close} className={styles.close} onClick={()=>{setState(false)}}/>
                </motion.div>
                <motion.div className={'sideNavWrapper'} style={{right:0, pointerEvents:'all'}}
                    initial={{opacity:0, pointerEvents:'none'}}
                    animate={{opacity: state ? .5 : 0, pointerEvents: state?'all':'none'}}
                    transition={{duration:.3, delay: .3}}
                    whileHover={{opacity: .8}}
                    >
                    <a href='https://www.youtube.com/watch?v=zSWdZVtXT7E/' target='_blank' style={{color:'white'}}>
                        <span className={'endurance'}>TRAILER</span>
                    </a>
                    <div className={'pointLine'} style={{marginRight:0, marginLeft:'30px' , right: 0}} />
                </motion.div>
            </motion.div>
            </>
    )
}

