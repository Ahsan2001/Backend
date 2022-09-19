import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import styles from './loader.module.css'

const Loader = () => {
  return (
      <div className={styles.loader_main}>
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
     </div>
  )
}

export default Loader