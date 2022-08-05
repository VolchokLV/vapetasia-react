import React from 'react'
import styles from './warning.css';
// import Typekit from 'react-typekit';

const Warning = () => {
  return (
      <div className={styles.warning_container}>
        <div className={styles.warning}>
            <b>WARNING: This product contains nicotine. Nicotine is an addictive chemical</b>
        </div>
      </div>
  )
}

export default Warning