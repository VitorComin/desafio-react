import React from "react";
import MyStatistics from "../statistics/MyStatistics";
import MyTables from "../tables/MyTables";
import styles from "./MyContent.module.css"

function MyContent() {
    return (
        <>
            <MyStatistics />
            <div className={styles.tabelas}>
                <MyTables />
            </div>
        </>
    )
}

export default MyContent