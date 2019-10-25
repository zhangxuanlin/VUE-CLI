<template>
    <div class="timeaxis" ref="chart" :style="{ height: height }" >暂无数据</div>
</template>

<script>
let myChart = null;

export default {
    data() {
        return {
            myChart: null,
            timer: null,
        };
    },
    props: {
        chartOption: {
            type: null,
            required: true,
        },
        height: {
            type: String,
            default: '80px',
        },
    },
    computed: {
        series() {
            return this.chartOption.series;
        },
    },
    created() {
        // this.renderChart(this.data);
    },
    mounted() {
        this.renderChart();
    },
    destroyed() {
        myChart.dispose();
        myChart = null;
        clearInterval(this.timer);
    },
    methods: {
        // 渲染柱状图
        renderChart() {
            myChart = echarts.init(this.$refs.chart, null, { renderer: 'canvas' });
            this.$nextTick(() => {
                const { chartOption } = this;
                if (chartOption) {
                    const option = {
                        legend: {
                            left: 'center',
                            itemWidth: 10,
                            itemHeight: 10,
                            borderRadius: 10,
                            data: chartOption.legend,
                        },
                        tooltip: {
                            trigger: 'axis',
                            backgroundColor: 'rgba(105, 110, 254, 0.7)',
                            borderColor: '#474eff',
                            extraCssText: 'box-shadow: 0 0 8px rgba(105, 110, 254, 0.87)',
                            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                                type: 'line', // 默认为直线，可选为：'line' | 'shadow'
                            },
                            formatter: params => chartOption.formatter(params),
                        },
                        grid: {
                            top: '50px',
                            left: '30px',
                            right: '30px',
                            bottom: '10px',
                            containLabel: true,
                        },
                        dataZoom: [
                            {
                                show: false,
                                realtime: true,
                                start: 0,
                                end: 100,
                            },
                            {
                                type: 'inside',
                                realtime: true,
                                start: 0,
                                end: 100,
                            },
                        ],
                        xAxis: {
                            type: 'category',
                            boundaryGap: false,
                            axisLine: {
                                lineStyle: {
                                    color: '#D7DCE1',
                                },
                            },
                            axisLabel: {
                                color: '#3C464E',
                            },
                            data: chartOption.xAxis,
                        },
                        yAxis: {
                            type: 'value',
                            // minInterval: 5,
                            axisLine: {
                                lineStyle: {
                                    color: '#D7DCE1',
                                },
                            },
                            axisLabel: {
                                color: '#3C464E',
                            },
                            splitLine: {
                                lineStyle: {
                                    color: '#D7DCE1',
                                },
                            },
                        },
                        series: chartOption.series,
                    };
                    this.timer = setInterval(() => {
                        myChart.setOption(option);
                        if (chartOption.series.length > 199) {
                            clearInterval(this.timer);
                        }
                    }, 1000);
                    window.addEventListener('resize', () => {
                        myChart.resize();
                    });
                    // const that = this;
                    // myChart.on('click', (params) => {
                    //     that.$emit('getChart', params);
                    // });
                }
            });
        },
    },
    watch: {
        // chartOption: {
        //     handler() {
        //         this.renderChart();
        //     },
        //     deep: true,
        // },
        chartOption() {
            this.renderChart();
        },
    },
};
</script>

<style lang="scss" scoped>
    .timeaxis {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        color: #ccc;
        p {
            margin: 0;
        }
    }
</style>
