import axios from 'axios';
// import { message } from 'antd';
// import { createBrowserHistory } from 'history';

// const history = createBrowserHistory({
//     forceRefresh: true,
// });
// http request 拦截器
/* eslint no-param-reassign: 0 */
/* eslint no-shadow: 0 */
/* eslint arrow-body-style: 0 */
axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers = {
                Authorization: `Bearer ${token}`,
            };
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    },
);
// 添加响应拦截器
axios.interceptors.response.use(response => {
    console.log(response, 77);
    return response;
},
(error) => {
    const { status } = error.response;
    console.log(status, 88);
    switch (status) {
    case 401:
        // localStorage.removeItem('activeKey');
        // localStorage.removeItem('openKeys');
        // localStorage.removeItem('token');
        // message.error('token失效，请先登录');
        // setTimeout(() => {
        //     return history.replace('/login');
        // }, 2000);
        return false;
    // case 504:
    //     return message.error('服务器超时');
    default:
        return Promise.reject(error);
    }
});
/* 检查http返回的status状态 */
const checkStatus = (response) => {
    const state = response.status;
    if (state === 200 || state === 304) {
        console.log(response.data, 66);
        return response.data;
    }
    return message.error('请求失败');
};

/* 检查response.data.code的状态码 */
const checkCode = (data) => {
    return data;
    // if (data.rc === 0 || data.rc === 1 || data.rc === 500) {
    //     return data;
    // }
    // if (data.rc === 401) {
    //     return console.error(data.err);
    // }
    // return false;
};
/*
 * get: get请求
 * put: put请求get形式
 * putJSON: put请求post形式
 * post: post请求
 * postfile: 文件上传
 */
export default {
    async get(url) {
        return axios({
            url,
            method: 'get',
            timeout: 5000,
            headers: {
                // Authorization: `Bearer ${token}`,
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                'X-Requested-With': 'XMLHttpRequest',
            },
        })
            .then(checkStatus)
            .then(checkCode);
    },
    async post({ url, data }) {
        return axios({
            url,
            method: 'post',
            data,
            timeout: 5000,
            headers: {
                // Authorization: `Bearer ${token}`,
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json; charset=UTF-8',
            },
        })
            .then(checkStatus)
            .then(checkCode);
    },
    async put({ url, data }) {
        return axios({
            url,
            method: 'put',
            data,
            timeout: 5000,
            headers: {
                // Authorization: `Bearer ${token}`,
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json; charset=UTF-8',
            },
        })
            .then(checkStatus)
            .then(checkCode);
    },
    async postfile({ url, data }) {
        return axios({
            url,
            method: 'post',
            data,
            timeout: 5000,
            headers: {
                // Authorization: `Bearer ${token}`,
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'multipart/form-data;',
            },
        })
            .then(checkStatus)
            .then(checkCode);
    },
    async postStream({ url, data = {} }) {
        return axios({
            url,
            method: 'get',
            data,
            timeout: 5000,
            headers: {
                // Authorization: `Bearer ${token}`,
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/octet-stream;',
                // 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            },
            responseType: 'arraybuffer',
        })
            .then(checkStatus)
            .then(checkCode);
    },
};
