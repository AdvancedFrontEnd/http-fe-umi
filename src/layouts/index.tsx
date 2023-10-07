import Headers from '@/layouts/headers';
import { Outlet } from 'umi';
import styles from './index.less';

export default function () {
  return (
    <>
      <Headers />
      <div className={styles.waterMarkBox}>
        {/* <Watermark
          content={['user', '2023.09.28']}
          font={{ color: '#e6e6e6', fontSize: 18 }}
          zIndex={0}
          gap={[90, 90]}
        > */}
        <Outlet />
        {/* </Watermark> */}
      </div>
    </>
  );
}
