<template>
  <div class="home">
    <div id="container" style="height: 400px; max-width: 800px; margin: 0 auto"></div>
  </div>
</template>

<script>
// @ is an alias to /src
// import data from './data.json';
// import data from './new2.json';

export default {
    mounted() {
        console.log(this.$route.query);
        // const obj = Object.keys(data.bdList[0]);
        // const series = obj.map(v => {
        //     const data1 = data.bdList.map((s, j) => [j, Number(s[v])]);
        //     return ({
        //         data: data1,
        //         lineWidth: 0.1,
        //     });
        // });
        let series = [];
        const n = 2000;
        for (let i = 0; i < 200; i += 1) {
            series.push({
                data: this.getData(n),
                animation: false,
                lineWidth: 0.5,
            });
        }
        console.log(series, 9);
        // const ds2 = this.getData(n);
        // const ds3 = this.getData(n);
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
