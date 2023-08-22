/* eslint-disable */
// 该文件由 OneAPI 自动生成，请勿手动修改！

import { InterfaceProps } from '@/models/interfaceModel';

declare namespace API {
  interface BasicResponse {
    code: number;
    msg: string;
    data: Record<string, any>;
  }

  interface loginParams {
    userAccount: string;
    userPassword: number;
  }
  interface registerParams {
    userAccount: string;
    userPassword: number;
    userName: string;
  }
  interface loginRespnse extends BasicResponse {}

  interface projectList {
    id: number;
    projectName: string;
    projectDesc: string;
    projectCreator?: string;
    createdAt?: string;
    joinedAt?: string;
  }

  interface projectListResponse {
    data: ProjectList[];
  }

  type projectType = 0 | 1;

  interface createProjectParams {
    projectName: string;
    projectDesc: string;
  }

  interface createProjectResponse {
    code: number;
    msg: string;
    data: Record<string, any>;
  }

  interface InterfaceInfo extends BasicResponse {
    data: InterfaceInfoData;
  }

  interface InterfaceListItem {
    title: string;
    key: number;
    children?: InterfaceListItem[];
    isLeaf?: boolean;
  }

  interface InterfaceList extends BasicResponse {
    data: InterfaceListItem[];
    // data: Record<string, any>;
  }

  interface InterfaceInfo {
    code: number;
    msg: string;
    data: InterfaceProps | null;
  }
}
