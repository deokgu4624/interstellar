import styles from './Loading.module.css'
import { useProgress } from '@react-three/drei'
import { Card, Col, Row } from 'react-bootstrap'
import { motion } from 'framer-motion'

export default function Loading(){
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
    )
}