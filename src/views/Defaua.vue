<template>
  <div class="home">
    <div id="container" style="height: 500px; max-width: 800px; margin: 0 auto"></div>
  </div>
</template>

<script>
// @ is an alias to /src
// import data from './data.json';
// import data from './new2.json';

export default {
    mounted() {
        // const obj = Object.keys(data.bdList[0]);
        // const series = obj.map(v => {
        //     const data1 = data.bdList.map((s, j) => [j, Number(s[v])]);
        //     return ({
        //         data: data1,
        //         lineWidth: 0.1,
        //     });
        // });
        axios.get('https://uj-test.oss-cn-zhangjiakou.aliyuncs.com/temp200_cpx.json')
            .then(res => {
                console.log(res, 12);
                const { dbList } = res;
                let series = [];
                dbList.forEach((v) => {
                    series.push({
                        animation: false,
                        lineWidth: 0.5,
                        data: v.map((s, j) => ([j, Number(s.ai2val)])),
                    });
                });
                Highcharts.chart('container', {
                    chart: {
                        zoomType: 'x',
                    },
                    boost: {
                        useGPUTranslations: true,
                    },
                    title: {
                        text: 'Highcharts drawing points',
                    },
                    subtitle: {
                        text: 'Using the Boost module',
                    },
                    tooltip: {
                        valueDecimals: 2,
                    },
                    series,
                });
            });
        // axios({
        //     method: 'GET',
        //     url: 'https://uj-test.oss-cn-zhangjiakou.aliyuncs.com/temp200_cpx.json',
        //     proxy: {
        //         host: 'http://localhost',
        //         port: 8000,
        //     },
        // }).then(c => {
        //     console.log(c, 6);
        //     return c.data;
        // }).then(d => {
        //     const { dbList } = d;
        //     let series = [];
        //     dbList.forEach((v) => {
        //         series.push({
        //             animation: false,
        //             lineWidth: 0.5,
        //             data: v.map((s, j) => ([j, Number(s.ai2val)])),
        //         });
        //     });
        //     Highcharts.chart('container', {
        //         chart: {
        //             zoomType: 'x',
        //         },
        //         boost: {
        //             useGPUTranslations: true,
        //         },
        //         title: {
        //             text: 'Highcharts drawing points',
        //         },
        //         subtitle: {
        //             text: 'Using the Boost module',
        //         },
        //         tooltip: {
        //             valueDecimals: 2,
        //         },
        //         series,
        //     });
        // });
    },
    methods: {
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
};
</script>


<style lang="less">
</style>
