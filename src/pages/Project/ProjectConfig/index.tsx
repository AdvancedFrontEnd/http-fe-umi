import { Button, Input, Modal, Select, Table, Tag, message } from 'antd';
import { useRef, useState } from 'react';
import styles from './index.css';

const ProjectConfig = () => {
  const inputRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const copyContent = async () => {
    if (inputRef.current) {
      try {
        await navigator.clipboard.writeText(inputRef.current.input.value);
        message.success('已复制');
      } catch (error) {
        console.error('Error copying text:', error);
      }
    }
  };

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
      <Button
        type="primary"
        className={styles['container-btn']}
        onClick={showModal}
      >
        邀请成员
      </Button>
      <Modal
        title="邀请加入个人空间"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Input
          ref={inputRef}
          className={styles['container-input']}
          defaultValue="http://localhost:8000/project/1/invite?token=sdgnslge"
          disabled
        />
        <div className={styles['container-font']}>邀请将在7天后过期</div>
        <span className={styles['container-authority']}>所有项目权限</span>
        <Select
          defaultValue="项目管理员"
          style={{ width: 300 }}
          options={[
            { value: '项目管理员', label: '项目管理员' },
            { value: '项目经理', label: '项目经理' },
            { value: '平台用户', label: '平台用户' },
          ]}
        />
        <Button
          className={styles['container-copy']}
          type="primary"
          onClick={copyContent}
        >
          复制链接
        </Button>
      </Modal>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default ProjectConfig;
