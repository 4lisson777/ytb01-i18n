import React, { ReactElement } from "react";
import styles from "./styles.module.scss"

const Thing = (): ReactElement => {
    return (
        <div className={styles.thingContainer}>
            <div className={styles.js}>
                <svg width="40" height="40">
                    <use xlinkHref="#js"></use>
                </svg>
            </div>
            <div className={styles.html}>
                <svg width="40" height="40">
                    <use xlinkHref="#html"></use>
                </svg>
            </div>
            <div className={styles.css}>
                <svg width="40" height="40">
                    <use xlinkHref="#css"></use>
                </svg>
            </div>
            <div className={styles.sass}>
                <svg width="40" height="40">
                    <use xlinkHref="#sass"></use>
                </svg>
            </div>
            <div className={styles.tailwind}>
                <svg width="40" height="40">
                    <use xlinkHref="#tailwind"></use>
                </svg>
            </div>
            <div className={styles.gulp}>
                <svg width="40" height="40">
                    <use xlinkHref="#gulp"></use>
                </svg>
            </div>
            <div className={styles.react}>
                <svg width="60" height="60">
                    <use xlinkHref="#react"></use>
                </svg>
            </div>
            <div className={styles.next}>
                <svg width="60" height="60">
                    <use xlinkHref="#nextjs"></use>
                </svg>
            </div>
        </div>
    )
}

export default Thing;