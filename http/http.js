
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    timeout: 5000, // request timeout
});
// service.interceptors.request.use(
//     config => {
//         config.headers['Access-Control-Allow-Origin'] = 'https://uj-test.oss-cn-zhangjiakou.aliyuncs.com/temp200_cpx.json';
//         return config;
//     },
//     error => Promise.reject(error),
// );
// response interceptor 响应拦截器
service.interceptors.response.use(
    response => {
        const res = response.data;
        if (res.code !== 0) {
            if (res.code === 4002) {
                localStorage.removeItem('Flag');
            }
            return Promise.reject(res.resultMsg || 'error');
        }
        return res;
    },
    error => Promise.reject(error),
);

export default service;
