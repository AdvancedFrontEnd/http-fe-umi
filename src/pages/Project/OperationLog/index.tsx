import LogList from "./Components/LogList";
import OperationDetail from "./Components/OpertationDetail";
import styles from "./index.less"
import VersionManage from "@/pages/Project/Interface/Components/VersionManage";
const OperationLog = () => {



    return (<div className={styles['log-container']}>
    <div className={styles['list-container']}>
        <LogList/>
    </div>
    <div className={styles['detail-container']}>
        <VersionManage/>
    </div>
</div>)
}
export default OperationLog;