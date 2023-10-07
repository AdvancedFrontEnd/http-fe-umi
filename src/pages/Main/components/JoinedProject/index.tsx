import { queryProjectList } from '@/services/demo/ProjectsController';
import { ProTable } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { useEffect, useState } from 'react';
import { history } from 'umi';
import styles from './index.less';
export type DataSourceType = {
  id: number;
  projectName: string;
  projectDesc: string;
  projectCreator?: string;
  createdAt?: string;
  joinedAt?: string;
};

const columns = [
  {
    title: '项目名',
    dataIndex: 'projectName',
    readonly: true,
    width: '20%',
  },
  {
    title: '项目描述',
    dataIndex: 'projectDesc',
    readonly: true,
    width: '20%',
  },
  {
    title: '创建者',
    dataIndex: 'projectCreator',
    readonly: true,
    width: '20%',
  },
  {
    title: '加入时间',
    dataIndex: 'joinedAt',
    readonly: true,
    width: '20%',
  },
];

const JoinedProject = () => {
  const [dataSource, setDataSource] = useState<DataSourceType[]>([]);
  const { setSelectedProject } = useModel('projectModel', (model) => ({
    setSelectedProject: model.setSelectedProject,
  }));
  const fetchDataSource = async () => {
    const res = await queryProjectList(1);
    setDataSource(res.data);
  };
  useEffect(() => {
    fetchDataSource();
  }, []);

  return (
    <div className={styles.tableBox}>
      <ProTable<DataSourceType>
        dataSource={dataSource}
        rowKey="id"
        columns={columns}
        search={false}
        toolBarRender={false}
        onRow={(record) => {
          return {
            onClick: () => {
              setSelectedProject(record);
              history.push({
                pathname: `/project/${record.id}`,
              });
            },
          };
        }}
      />
    </div>
  );
};

export default JoinedProject;
