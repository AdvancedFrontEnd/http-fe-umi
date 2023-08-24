import { Table, Tag } from 'antd';
import styles from './index.css';

const ProjectConfig = () => {
  const dataSource = [
    {
      key: '1',
      username: 'fy',
      permission: '项目经理',
      modify: '3天前',
    },
    {
      key: '2',
      username: 'ht',
      permission: '平台用户',
      modify: '1天前',
    },
    {
      key: '3',
      username: 'yzh',
      permission: '平台用户',
      modify: '2天前',
    },
  ];

  const columns = [
    {
      title: '用户名',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: '团队权限',
      dataIndex: 'permission',
      key: 'permission',
      render: (_, { permission }) => (
        <Tag color="green" key={permission}>
          {permission}
        </Tag>
      ),
    },
    {
      title: '最近修改',
      dataIndex: 'modify',
      key: 'modify',
    },
  ];
  return (
    <div className={styles.container}>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default ProjectConfig;
