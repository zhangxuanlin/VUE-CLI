<template>
  <div class="home">
    <List />
    <div>{{ count }}</div>
    <button @click="increment({
        type: 'increment',
        n: 5,
    })">累加</button>
    <button @click="asyncIncrement({
        type: 'asyncIncrement',
    })">异步累加</button>
    <ul>
        <li
            v-for="todo in todosDone"
            :key="todo.id"
        >{{ todo.id }}:{{ todo.text }}</li>
    </ul>
    <div class="drawing">
        <div class="drawingLeft"></div>
        <LineCharts :chartOption="chartOption" height="300px" :index="index" />
        <div class="drawingRight">
            <select name="" id="" @change="changeFeatures">
                <option
                    v-for="item in Features"
                    :key="item"
                    :value="item"
                >{{ item }}</option>
            </select>
            <div>
                <p v-if="analysisMapObj && analysisMapObj.isValid">
                    配置是否有效:{{ analysisMapObj && analysisMapObj.isValid === 1 && '配置有效' }}
                </p>
                <p v-if="analysisMapObj && analysisMapObj.curLearnCount">
                    学习:{{ analysisMapObj && String(analysisMapObj.curLearnCount) &&
                    analysisMapObj.curLearnCount / analysisMapObj.learnCountCfg }}
                </p>
                <p v-if="analysisMapObj && analysisMapObj.rtAbnStatus">
                    实时对比状态：{{ analysisMapObj && analysisMapObj.rtAbnStatus !== 0 &&
                    analysisMapObj.rtAbnStatus }}</p>
                <p v-if="analysisMapObj && String(analysisMapObj.alarmEnable)">
                    报警开关状态:{{ analysisMapObj && analysisMapObj.alarmEnable === 0 && '报警关' }}</p>
                <p v-if="analysisMapObj && analysisMapObj.eventStartTime">
                    超限时间:{{ analysisMapObj && analysisMapObj.eventStartTime }}</p>
                <p v-if="analysisMapObj && analysisMapObj.monDuraTime">
                    提升前的加工时间：{{ analysisMapObj && analysisMapObj.monDuraTime &&
                    analysisMapObj.monDuraTime / 1000 }}</p>
                <p v-if="analysisMapObj && analysisMapObj.timeEnd">
                    提升后的加工时间:{{ analysisMapObj && analysisMapObj.timeEnd &&
                    analysisMapObj.timeEnd - analysisMapObj.timeStart }}</p>
                <p v-if="analysisMapObj && analysisMapObj.procTimeRatio">
                    提升比例：{{ analysisMapObj && analysisMapObj.procTimeRatio }}</p>
            </div>
        </div>
    </div>
    <button
        v-for="item in buttonGroup"
        :key="item"
        @click="changeLine(item)"
    >
        {{ item }}
    </button>
  </div>
</template>

<script>
// @ is an alias to /src
import {
    mapState,
    mapGetters,
    mapMutations,
    // mapActions,
} from 'vuex';
import LineCharts from '@c/echarts/LineCharts.vue';
import List from '@c/List.vue';
import dd from './QS2.json';

export default {
    name: 'Home',
    data() {
        return {
            chartOption: null,
            buttonGroup: null,
            Features: null,
            featureTypeLists: null,
            analysisMapObj: {},
            index: 0,
            timer: null,
        };
    },
    components: {
        LineCharts,
        List,
    },
    computed: {
        ...mapState({
            count: state => state.count,
        }),
        ...mapGetters([
            'todosDone',
        ]),
    },
    mounted() {
        // console.log('1');
        // setTimeout(() => {
        //     console.log('2');
        //     process.nextTick(() => {
        //         console.log('3');
        //     });
        //     new Promise((resolve) => {
        //         console.log('4');
        //         resolve();
        //     }).then(() => {
        //         console.log('5');
        //     });
        // });
        // process.nextTick(() => {
        //     console.log('6');
        // });
        // new Promise((resolve) => {
        //     console.log('7');
        //     resolve();
        // }).then(() => {
        //     console.log('8');
        // });

        // setTimeout(() => {
        //     console.log('9');
        //     process.nextTick(() => {
        //         console.log('10');
        //     });
        //     new Promise((resolve) => {
        //         console.log('11');
        //         resolve();
        //     }).then(() => {
        //         console.log('12');
        //     });
        // });
        // const message = new this.awesome.DemoProto();
        // const points = new this.awesome.DemoProto.Points();
        // const point = new this.awesome.DemoProto.Point();
        // point.setTagsample(111);
        // point.setAi2val(96);
        // point.setProcessstatus(122211);

        // points.addPoints(point);
        // message.addDblist(points);

        // const bytes = message.serializeBinary();
        // message.bdList[0] = points;
        // console.log(message, points, point);
        // const message2 = this.awesome.DemoProto.deserializeBinary(bytes);
        // console.log(bytes, 1);
        // console.log('xxx-', message2);
        // axios.postStream({
        //     url: 'http://localhost:8000/static/12345',
        // }).then(res => {
        //     const des = this.AOriginal.GraphOriginalProto.deserializeBinary(new Uint8Array(res));
        //     const data = des.toObject();
        //     console.log(des.toObject(), res, 123);
        //     const line = data.original.data.dataList;
        //     let index = [];
        //     const currentTime = new Date().getTime();
        //     let i = 0;
        //     let len = line.length;
        //     let series = [{
        //         name: '原始值',
        //         type: 'line',
        //         symbolSize: 0,
        //         smooth: true,
        //         showSymbol: false,
        //         lineStyle: {
        //             // color: '#F48874',
        //             width: 0.5,
        //         },
        //         // itemStyle: {
        //         //     color: '#F48874',
        //         // },
        //         data: line,
        //     }];
        //     for (i; i < len; i += 1) {
        //         index.push(moment(currentTime + i * data.frequency).format('YYYY-MM-DD HH:mm:ss:SS'));
        //     }
        //     this.timer = setInterval(() => {
        //         series.push({
        //             name: new Date().getTime(),
        //             type: 'line',
        //             symbolSize: 0,
        //             smooth: true,
        //             showSymbol: false,
        //             lineStyle: {
        //                 // color: '#F48874',
        //                 width: 0.5,
        //             },
        //             // itemStyle: {
        //             //     color: '#F48874',
        //             // },
        //             data: new Array(200).fill(0).map(() => parseInt((Math.random() * 100), 10)),
        //         });
        //         console.log(series.length, 33333333333);
        //         if (series.length > 199) {
        //             clearInterval(this.timer);
        //         }
        //     }, 5000);
        //     this.chartOption = {
        //         legend: ['上边界', '下边界', '均值', '原始值'],
        //         xAxis: index,
        //         formatter: params => `<div>
        //             <p><span class="label">事件序号: </span><span class="value">${params[0].axisValue}</span></p>
        //             <p><span class="label">均值: </span><span class="value">${params[2].data.value}</span></p>
        //             <p><span class="label">均值上限: </span><span class="value">${params[0].data}</span></p>
        //             <p><span class="label">均值下限: </span><span class="value">${params[1].data}</span></p>
        //             <p>${moment(params[3].data.tagSample).format('YYYY-MM-DD HH:mm:ss.SSS')}</p>
        //         </div>`,
        //         series,
        //     };
        //     // const message3 = this.awesome.DemoProto.deserializeBinary(new Uint8Array(res));
        //     // const message4 = this.awesome.DemoProto.Point.deserializeBinary(new Uint8Array(res));
        //     // const message5 = this.awesome.DemoProto.Points.deserializeBinary(new Uint8Array(res));
        //     // const x = message3.toObject();
        //     // console.log(x, message4.toObject(), message5.toObject());
        // }).catch(error => {
        //     console.log(error, 22);
        // });
        // //  message.bdList[]
        // // 调用Person对象  实例化
        // // console.log(message2);
        // // this.test();
        // const { xh } = dd;
        // this.buttonGroup = xh.map(v => (v.signalCodeText.indexOf('-') > -1 ? v.signalCodeText.slice(0, v.signalCodeText.indexOf('-')) : v.signalCodeText));
    },
    destroyed() {
        clearInterval(this.timer);
    },
    methods: {
        ...mapMutations([
            'increment',
        ]),
        asyncIncrement() {
            this.$store.dispatch('asyncIncrement');
        },
        byteToString(arr) {
            if (typeof arr === 'string') {
                return arr;
            }
            let str = '';
            let arra = arr;
            for (let i = 0; i < arra.length; i += 1) {
                const one = arra[i].toString(2);
                const v = one.match(/^1+?(?=0)/);
                if (v && one.length === 8) {
                    const bytesLength = v[0].length;
                    let store = arra[i].toString(2).slice(7 - bytesLength);
                    for (let st = 1; st < bytesLength; st += 1) {
                        store += arra[st + i].toString(2).slice(2);
                    }
                    str += String.fromCharCode(parseInt(store, 2));
                    i += bytesLength - 1;
                } else {
                    str += String.fromCharCode(arra[i]);
                }
            }
            return str;
        },
        test() {
            axios.postStream({
                url: 'http://localhost:8000/static/demo.proto',
            }).then(res => {
                console.log(this.byteToString(new Uint8Array(res)), 9);
                const tmpUint8Array = new Uint8Array(res);
                let dataString = '';
                for (let i = 0; i < tmpUint8Array.length; i += 1) {
                    dataString += String.fromCharCode(tmpUint8Array[i]);
                }
                console.log(tmpUint8Array, dataString);
            }).catch(error => {
                console.log(error, 22);
            });
        },
        // ...mapActions([
        //     'asyncIncrement',
        // ]),
        changeFeatures(e) {
            this.analysisMapObj = this.featureTypeLists.analysisMap[`F${e.target.value}`];
            console.log(e.target.value, this.featureTypeLists.analysisMap[`F${e.target.value}`]);
        },
        changeLine(v) {
            const { xh, ds } = dd;
            this.analysisMapObj = {};
            const XHobj = xh.find(s => s.signalCodeText.includes(v));
            const XHDATA = ds[v];
            XHobj.featureTypeList.unshift(3);
            this.featureTypeLists = XHobj;
            this.Features = [...new Set(XHobj.featureTypeList)];
            this.renderLine(Object.assign({}, XHobj, XHDATA));
        },
        renderLine(data) {
            const sbj = data.modelMap['8'] ? data.modelMap['8'].modelDataList.slice(0, data.modelMap['8'].modelDataList.length / 2) : [];
            const xbj = data.modelMap['8'] ? data.modelMap['8'].modelDataList.slice(data.modelMap['8'].modelDataList.length / 2, data.modelMap['8'].modelDataList.length) : [];
            const jz = data.lostLimitValue;
            const jzArr = [];
            const line = [];
            const index = [];
            data.bdList.forEach((v, i) => {
                if (jz) {
                    jzArr.push({
                        value: v.PROCESSSTATUS === '1.0' ? jz : null,
                    });
                }
                line.push({
                    ...v,
                    value: v.PROCESSSTATUS === '1.0' ? v[data.signalCodeView] - data.monproNlval : null,
                });
                index.push(i + 1);
            });
            this.chartOption = {
                legend: ['上边界', '下边界', '均值', '原始值'],
                xAxis: index,
                formatter: params => `<div>
                    <p><span class="label">事件序号: </span><span class="value">${params[0].axisValue}</span></p>
                    <p><span class="label">均值: </span><span class="value">${params[2].data.value}</span></p>
                    <p><span class="label">均值上限: </span><span class="value">${params[0].data}</span></p>
                    <p><span class="label">均值下限: </span><span class="value">${params[1].data}</span></p>
                    <p>${moment(params[3].data.tagSample).format('YYYY-MM-DD HH:mm:ss.SSS')}</p>
                </div>`,
                series: [{
                    name: '上边界',
                    type: 'line',
                    symbolSize: 0,
                    smooth: true,
                    showSymbol: false,
                    lineStyle: {
                        color: '#FFA738',
                        // width: 1,
                    },
                    itemStyle: {
                        color: '#FFA738',
                    },
                    data: sbj,
                }, {
                    name: '下边界',
                    type: 'line',
                    symbolSize: 0,
                    smooth: true,
                    showSymbol: false,
                    lineStyle: {
                        color: '#FFA738',
                        // width: 1,
                    },
                    itemStyle: {
                        color: '#FFA738',
                    },
                    data: xbj,
                }, {
                    name: '均值',
                    type: 'line',
                    symbolSize: 0,
                    smooth: true,
                    showSymbol: false,
                    lineStyle: {
                        color: '#696EFE',
                        // width: 1,
                    },
                    itemStyle: {
                        color: '#696EFE',
                    },
                    data: jzArr,
                }, {
                    name: '原始值',
                    type: 'line',
                    symbolSize: 0,
                    smooth: true,
                    showSymbol: false,
                    lineStyle: {
                        color: '#F48874',
                        // width: 1,
                    },
                    itemStyle: {
                        color: '#F48874',
                    },
                    data: line,
                }],
            };
        },
        getData(n) {
            let arr = [];
            let i;
            let a;
            let b;
            let c;
            let spike;
            for (i = 0; i < n; i += 1) {
                if (i % 100 === 0) {
                    a = 2 * Math.random();
                }
                if (i % 1000 === 0) {
                    b = 2 * Math.random();
                }
                if (i % 10000 === 0) {
                    c = 2 * Math.random();
                }
                if (i % 50000 === 0) {
                    spike = 10;
                } else {
                    spike = 0;
                }
                arr.push([
                    i,
                    2 * Math.sin(i / 100) + a + b + c + spike + Math.random(),
                ]);
            }
            return arr;
        },
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
