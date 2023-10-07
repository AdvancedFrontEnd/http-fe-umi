import styles from '@/layouts/index.less';
import { history } from '@umijs/max';
import type { MenuProps } from 'antd';
import { Button, Dropdown } from 'antd';
import React from 'react';

const Headers: React.FC = () => {
  const logout = () => {
    localStorage.removeItem('token');
    history.push({
      pathname: `/login`,
    });
  };

  const handleLogout = () => {
    // 执行登出逻辑...
    logout();
  };
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: '退出登录',
      onClick: handleLogout,
    },
  ];

  return (
    <div className={styles.girdBox}>
      <div className={styles.girdItem}>
        <Dropdown
          menu={{
            items,
          }}
          placement={'bottom'}
        >
          <Button className={styles.logoutLink}>user</Button>
        </Dropdown>
      </div>
    </div>
  );
};

export default Headers;
