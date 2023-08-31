import VersionManage from '@/pages/Project/OperationLog/Components/VersionManage';
import LogList from './Components/LogList';
import styles from './index.less';
const OperationLog = () => {
  return (
    <div className={styles['log-container']}>
      <div className={styles['list-container']}>
        <LogList />
      </div>
      <div className={styles['detail-container']}>
        <VersionManage />
      </div>
    </div>
  );
};
export default OperationLog;
