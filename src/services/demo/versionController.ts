import { request } from '@umijs/max';
import { API } from './typings';

// 获取这个接口的所有版本信息
export async function getInterfaceVersion(id: string) {
    return request<API.InterfaceInfo>(`/interfaceVersion/getAll?interfaceId=${id}`, {
        method: 'GET',
    });
}

// 回退到某个版本的接口
export async function rollBackVersion(interfaceId: string, userId: string, ProjectId: string, version: string){
    return request<API.InterfaceInfo>(`/interfaceVersion/back`,{
        method: 'POST',
        data: {
            interfaceId: id,
            userId: userId,
            ProjectId: ProjectId,
            version: version,
        },
    });
}
