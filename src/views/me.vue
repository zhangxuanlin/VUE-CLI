<template>
    <div class="home">
        me
    </div>
</template>

<script>
// @ is an alias to /src
// import { getStudentList } from '@/api/student';

export default {
    mounted() {
        // const req = {
        //     limit: 20,
        //     offset: 0,
        // };
        axios.postStream({
            url: 'http://localhost:8001/static/xx.txt',
        }).then(res => {
            const data = this.AOriginal.GraphOriginalProto.deserializeBinary(new Uint8Array(res));
            const data1 = this.AOriginal.GraphOriginalProto.Original.deserializeBinary(new Uint8Array(res));
            console.log(data.toObject(), data1.toObject(), 8);
            console.log(this.AOriginal.GraphOriginalProto.deserializeBinary(new Uint8Array(res)).toObject());
            // const b = res.serializeBinary();
            // console.log(new Uint8Array(res), 95);
            // const message3 = this.awesome.DemoProto.deserializeBinary(new Uint8Array(res));
            // console.log(message3);
            // const x = message3.toObject();
            // console.log(JSON.stringify(x));
        }).catch(error => {
            console.log(error, 22);
        });
        // getStudentList(req)
        //     .then((res) => {
        //         console.log(res);
        //     }).catch((res) => {
        //         console.error(res);
        //     });
    },
    methods: {
    },
};
</script>


<style lang="less">
</style>
