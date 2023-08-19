import { ProColumns, ProTable } from '@ant-design/pro-components';
import  { useEffect, useState } from 'react';
import { history } from 'umi';
import s from './index.less';
import { queryProjectList, updateProjectInfo } from '@/services/demo/ProjectsController';
import { Form, Input, Modal } from 'antd';
import { useModel } from 'umi';
import { DataSourceType } from '../JoinedProject';

const CreatedProject = () => {
  const [open, setOpen] = useState(false);
  const [initialValues, setInitialValues] = useState<DataSourceType>();
  const [dataSource, setDataSource] = useState<DataSourceType[]>([]);
  const columns: ProColumns<DataSourceType>[] = [
    {
      title: '项目名',
      dataIndex: 'projectName',
      width: '20%',
    },
    {
      title: '项目描述',
      dataIndex: 'projectDesc',
      width: '20%',
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
      width: '20%',
    },
    {
      title: '操作',
      valueType: 'option',
      width: '20%',
      render: (text, record) => [
        <a
          key="editable"
          onClick={(e)=>{
            e.stopPropagation() //阻止冒泡
            setInitialValues(record);
            setOpen(true);
          }}  
        >
          编辑
        </a>,
        <a
          key="invite"
          onClick={(e) => {
            e.stopPropagation() //阻止冒泡
          }}
        >
          邀请
        </a>,
  
        // <a
        //   key="delete"
        //   onClick={(e) => {
        //     e.stopPropagation() //阻止冒泡

        //   }}
        // >
        //   删除
        // </a>,
      ],
    },
  ];
  const {setSelectedProject} = useModel('projectModel', (model) => ({
    setSelectedProject: model.setSelectedProject
  }));
  const fetchDataSource = async () => {
    const res = await queryProjectList(0);
    console.log(res.data)
    setDataSource(res.data);
  }
  useEffect(()=>{
    fetchDataSource();
  },[]);
  const [form] = Form.useForm();
  
  const handleOk = () => {
    //修改信息
    form.validateFields()
      .then(async(values) => {
        const res = await updateProjectInfo();
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  }
  const handleCancel = () => {
    console.log("cancel");
    setOpen(false);
  }
  
  return (
    <div className={s.container}>
      <ProTable<DataSourceType>
        dataSource={dataSource}
        rowKey="id"
        columns={columns}
        search={false}
        toolBarRender={false}
        onRow ={(record) => {
          return {
            onClick: () => {
              setSelectedProject(record);
              history.push({
                pathname: `/project/${record.id}`,
              },
            );
            },
          };
        }}
      />
      <Modal
        title="编辑项目"
        open={open}
        okText="修改"
        cancelText="取消"
        onOk={handleOk}
        onCancel={handleCancel}
      >
      <Form
        form={form}
        layout="vertical"
        name="projectInfo"
        initialValues={initialValues}
      >
        <Form.Item
          name="projectName"
          label="项目名"
          rules={[{ required: true, message: '请输入项目名!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="projectDesc" label="项目描述">
          <Input type="textarea" />
        </Form.Item>
      </Form>
      </Modal>
    </div>
  );
};

export default CreatedProject;