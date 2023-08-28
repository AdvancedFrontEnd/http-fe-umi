import React, { PureComponent,useState } from 'react';
import ReactDiffViewer from 'react-diff-viewer';
import type { MenuProps } from 'antd';
import { Button, Modal, Dropdown, Space } from 'antd';
import styles from './index.less'
import { DownOutlined, RedoOutlined } from "@ant-design/icons";

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                apicat &nbsp; 2023-08-24 19:42:00 (最新)
            </a>
        ),
        disabled: true,
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                apicat &nbsp; 2023-08-23 19:42:00
            </a>
        ),
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                apicat &nbsp; 2023-08-22 19:42:00
            </a>
        ),
    },
];

const oldCode1 = `
- "参数名 [name]": petId
  "说明 [description]": 宠物 ID
  "必需 [required]": true
  "示例值 [example]": "1"
`;
const newCode1 = `
- "参数名 [name]": petId
  "说明 [description]": 宠物 ID
  "必需 [required]": true
  "示例值 [example]": "1"
  enable: true
`;

const oldCode2 = `
"ID [id]": 247789438
"名称 [name]": 成功
"HTTP 状态码 [code]": 200
"数据结构 [jsonSchema]":
    type: object
    properties:
        code:
            type: integer
            minimum: 0
            maximum: 0
            description: 状态码
        data:
            $ref: "#/definitions/54677073"
            description: 宠物信息
    required:
        - code
        - data
    x-apifox-orders:
        - code
        - data
"内容格式 [contentType]": json
"新增接口时默认添加 [defaultEnable]": true
"排序 [ordering]": 1
`;
const newCode2 = `
"ID [id]": 247789438
"名称 [name]": 成功
"HTTP 状态码 [code]": 200
"数据结构 [jsonSchema]":
    type: object
    properties:
        code:
            type: integer
            minimum: 0
            maximum: 0
            description: 状态码
        data:
            $ref: "#/definitions/54677073"
            description: 宠物信息
        id:
            type: string
            description: id
    required:
        - code
        - data
        - id
    x-apifox-orders:
        - code
        - data
        - id
"内容格式 [contentType]": json
"新增接口时默认添加 [defaultEnable]": true
"排序 [ordering]": 1
`;

const VersionManage : React.FC = () => {

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

    return (
        <>
            {/*<Button type="primary" onClick={showModal}>*/}
            {/*    Open Modal*/}
            {/*</Button>*/}
            {/*<Modal*/}
            {/*    className={styles['modal-container']}*/}
            {/*    title="差异对比"*/}
            {/*    open={isModalOpen}*/}
            {/*    onOk={handleOk}*/}
            {/*    onCancel={handleCancel}*/}
            {/*    width={1000}*/}
            {/*>*/}

            {/*</Modal>*/}
            <div className={styles['diff-viewer-container']}>
                <div className={styles['version-container']}>
                    <div className={styles['version-wrapper']+" "+styles['last']}>
                        <div className={styles['version-tag']}>前一个版本</div>
                        <Dropdown menu={{ items }}>
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    apicat 2023-08-24 19:42:00
                                    <DownOutlined />
                                </Space>
                            </a>
                        </Dropdown>
                        <button>
                            <RedoOutlined />
                            <span>还原此版本</span>
                        </button>
                    </div>
                    <div className={styles['version-wrapper']+" "+styles['current']}>
                        <div className={styles['version-tag']}>最新版本</div>
                        <Dropdown menu={{ items }}>
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    apicat 2023-08-24 19:42:00
                                    <DownOutlined />
                                </Space>
                            </a>
                        </Dropdown>
                    </div>
                </div>
                <div className={styles['diff-container']}>
                    <h3>请求参数/Path参数</h3>
                    <div className={styles['code-container']}>
                        <ReactDiffViewer oldValue={oldCode1} newValue={newCode1} splitView={true} />
                    </div>
                </div>
                <div className={styles['diff-container']}>
                    <h3>返回响应</h3>
                    <div className={styles['code-container']}>
                        <ReactDiffViewer oldValue={oldCode2} newValue={newCode2} splitView={true} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default VersionManage