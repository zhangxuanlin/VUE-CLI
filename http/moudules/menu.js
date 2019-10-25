require '../index.js'


// 查找菜单树
export const findMenuTree = (url, params) => {
   let params = {
        resourcesParent: 0,
        roleId: 100,
        orgId: 2}
    return UJ.GET('/oauth/oauth-rest/saas-resource-tree-list', params)
}