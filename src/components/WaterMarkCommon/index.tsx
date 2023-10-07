import { Watermark } from 'antd';
import React, { ReactNode } from 'react';
import styles from './index.less';

const WaterMarkBox: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <div className={styles.waterMarkBox}>
        <Watermark
          content={['user', '2023.09.28']}
          font={{ color: '#e6e6e6', fontSize: 18 }}
          zIndex={0}
          gap={[90, 90]}
        >
          {children}
        </Watermark>
      </div>
    </>
  );
};

export default WaterMarkBox;
