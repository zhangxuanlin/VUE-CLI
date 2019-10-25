import request from '../../axios/request';

// params是object类型的请求参数
// school.PBStudentListReq 是定义好的请求体model
// school.PBStudentListRsp 是定义好的响应model
// getStudentList 是接口名称
// eslint-disable-next-line import/prefer-default-export
export function getStudentList(params) {
    const req = request.create('PBStudentListReq', params);
    return request('getStudentList', req, 'school.PBStudentListRsp');
}
