<template>
  <div class="home">
    <LineCharts :chartOption="chartOption" height="300px" />
  </div>
</template>

<script>
import axios from 'axios';
import LineCharts from '@c/echarts/LineCharts.vue';
// import data from './new2.json';

export default {
    name: 'Home',
    data() {
        return {
            chartOption: null,
            buttonGroup: null,
            Features: null,
            featureTypeLists: null,
            analysisMapObj: {},
        };
    },
    components: {
        LineCharts,
    },
    computed: {
    },
    mounted() {
        const lineConfig = {
            name: '',
            type: 'line',
            symbolSize: 0,
            smooth: true,
            showSymbol: false,
            animation: false,
            lineStyle: {
                color: '',
                width: 1,
            },
            itemStyle: {
                color: '',
            },
            data: [],
        };
        // 模拟加工监控数据
        const data = {
            max: 80, // 最大值
            min: 10, // 最小值
            average: { // 均值
                color: '#f00',
                lineType: 'dashed',
                topData: [66, 67, 68, 67, 66],
                bottomData: [16, 47, 48, 47, 46],
            },
            maximum: { // 最大值
                color: '#f0f',
                lineType: 'solid',
                data: 98,
            },
            boundary: { // 范围边界
                color: '#00f',
                lineType: 'solid',
                topData: [99, 99, 99, 99, 99],
                bottomData: [11, 11, 11, 11, 11],
            },
            original: {
                color: '#f0f',
                lineType: 'solid',
                data: [
                    [22, 23, 25, 53, 56],
                    [23, 28, 45, 63, 75],
                    [26, 56, 45, 32, 39],
                    [36, 46, 49, 69, 64],
                ],
            },
        };
        const maximum = new Array(5).fill(data.maximum.data);
        const original = data.original.data;
        const len = original.length;
        let series = [];
        let index = [];
        // 原始值
        console.time('aa');
        for (let i = 0; i < len; i += 1) {
            console.log(maximum, len, original[i]);
            index.push(i);
            series.push({
                ...lineConfig,
                name: '原始值',
                lineStyle: {
                    color: data.original.color,
                },
                itemStyle: {
                    color: data.original.color,
                },
                data: original[i],
            });
        }
        console.timeEnd('aa');
        // 均值
        series.push({
            ...lineConfig,
            name: '均值',
            lineStyle: {
                color: data.average.color,
            },
            itemStyle: {
                color: data.average.color,
            },
            data: data.average.topData,
        }, {
            ...lineConfig,
            name: '均值',
            lineStyle: {
                color: data.average.color,
            },
            itemStyle: {
                color: data.average.color,
            },
            data: data.average.bottomData,
        }, {
            ...lineConfig,
            name: '最大值',
            lineStyle: {
                color: data.maximum.color,
            },
            itemStyle: {
                color: data.maximum.color,
            },
            data: new Array(5).fill(data.maximum.data),
        }, {
            ...lineConfig,
            name: '范围边界',
            lineStyle: {
                color: data.boundary.color,
            },
            itemStyle: {
                color: data.boundary.color,
            },
            data: data.boundary.topData,
        }, {
            ...lineConfig,
            name: '范围边界',
            lineStyle: {
                color: data.boundary.color,
            },
            itemStyle: {
                color: data.boundary.color,
            },
            data: data.boundary.bottomData,
        });
        // console.timeEnd('aa');
        // 均值
        // series.push({
        //     ...lineConfig,
        //     lineStyle: {
        //         color: data.average.color,
        //     },
        //     data: data.average.bottomData,
        // });
        console.log(series);
        this.renderLine({
            index,
            series,
            max: data.max,
            min: data.min,
        });
        axios({
            method: 'GET',
            url: 'https://uj-test.oss-cn-zhangjiakou.aliyuncs.com/temp200_cpx.json',
            proxy: {
                host: 'http://localhost',
                port: 8000,
            },
        }).then(c => {
            console.log(c, 6);
            return c.data;
        }).then(d => {
            const { dbList } = d;
            let ii = 0;
            let seriess = [];
            const lens = dbList.length;
            console.time('jj');
            for (ii; ii < lens; ii += 1) {
                seriess.push({
                    name: '均值',
                    type: 'line',
                    symbolSize: 0,
                    smooth: true,
                    showSymbol: false,
                    animation: false,
                    lineStyle: {
                        color: '#696EFE',
                        width: 1,
                    },
                    itemStyle: {
                        color: '#696EFE',
                    },
                    data: dbList[ii].map(s => s.ai2val),
                });
            }
            console.timeEnd('jj');
            // let series = [];
            // dbList.forEach((v) => {
            //     series.push({
            //         name: '均值',
            //         type: 'line',
            //         symbolSize: 0,
            //         smooth: true,
            //         showSymbol: false,
            //         animation: false,
            //         lineStyle: {
            //             color: '#696EFE',
            //             width: 1,
            //         },
            //         itemStyle: {
            //             color: '#696EFE',
            //         },
            //         data: v.map(s => s.ai2val),
            //     });
            // });
            // const index = series[0].data.map((v, i) => i);
            // this.renderLine({ index, series });
        });
        // this.getLine();
    },
    methods: {
        renderLine({
            index,
            series,
            max,
            min,
        }) {
            this.chartOption = {
                max,
                min,
                legend: ['上边界', '下边界', '均值', '原始值'],
                xAxis: index,
                formatter: params => `<div>
                    <p><span class="label">事件序号: </span><span class="value">${params[0].axisValue}</span></p>
                    <p><span class="label">均值: </span><span class="value">${params[2].data.value}</span></p>
                    <p><span class="label">均值上限: </span><span class="value">${params[0].data}</span></p>
                    <p><span class="label">均值下限: </span><span class="value">${params[1].data}</span></p>
                    <p>${moment(params[3].data.tagSample).format('YYYY-MM-DD HH:mm:ss.SSS')}</p>
                </div>`,
                series,
            };
        },
        // getData(n) {
        //     let arr = [];
        //     let i;
        //     let a;
        //     let b;
        //     let c;
        //     let spike;
        //     for (i = 0; i < n; i += 1) {
        //         if (i % 100 === 0) {
        //             a = 2 * Math.random();
        //         }
        //         if (i % 1000 === 0) {
        //             b = 2 * Math.random();
        //         }
        //         if (i % 10000 === 0) {
        //             c = 2 * Math.random();
        //         }
        //         if (i % 50000 === 0) {
        //             spike = 10;
        //         } else {
        //             spike = 0;
        //         }
        //         arr.push([
        //             i,
        //             2 * Math.sin(i / 100) + a + b + c + spike + Math.random(),
        //         ]);
        //     }
        //     return arr;
        // },
    },
    // beforeRouteLeave(to, from, next) {
    //     const answer = window.confirm('Do you really want to leave? you have unsaved changes!');
    //     if (answer) {
    //         next();
    //     } else {
    //         next(false);
    //     }
    // },
};
</script>


<style lang="less">
    .drawing {
        display: flex;
        .drawingLeft {
            flex: 0 0 100px;
        }
        .drawingRight {
            flex: 0 0 200px;
        }
    }
    .timeaxis {
        p {
            margin: 2px;
            display: flex;
            border-bottom: 1px solid #8689ff;
            .label {
                display: inline-block;
                width: 60px;
                padding: 2px 5px;
                text-align: right;
            }
            .value {
                display: inline-block;
                padding: 2px 5px;
                color: #ffc457;
            }
        }
    }
</style>
