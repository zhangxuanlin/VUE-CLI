<template>
    <div class="_scan">
        <i class="iconfont iconscan" @click="scanShow = true"></i>
        <div v-show="scanShow" class="scanbg">
            <i class="iconfont iconback" @click="scanShow = false"></i>
            <div id="loadingMessage">
                🎥无法访问视频流（请确保已启用网络摄像机）</div>
            <div class="window">
                <canvas id="canvas" hidden></canvas>
            </div>
            <div id="output" hidden>
                <div id="outputMessage">未检测到二维码.</div>
                <div hidden><b>Data:</b> <span id="outputData"></span></div>
            </div>
        </div>
    </div>
</template>

<script>

import jsQR from 'jsqr';

let video = null;
let canvasElement = null;
let canvas = null;
let loadingMessage = null;
let outputContainer = null;
let outputMessage = null;
let outputData = null;

export default {
    data() {
        return {
            scanShow: false,
        };
    },
    mounted() {
        video = document.createElement('video');
        canvasElement = document.getElementById('canvas');
        canvas = canvasElement.getContext('2d');
        loadingMessage = document.getElementById('loadingMessage');
        outputContainer = document.getElementById('output');
        outputMessage = document.getElementById('outputMessage');
        outputData = document.getElementById('outputData');
        if (navigator.mediaDevices === undefined) {
            navigator.mediaDevices = {};
        }
        if (navigator.mediaDevices.getUserMedia === undefined) {
            navigator.mediaDevices.getUserMedia = constraints => {
                // 首先，如果有getUserMedia的话，就获得它
                const getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
                // 一些浏览器根本没实现它 - 那么就返回一个error到promise的reject来保持一个统一的接口
                if (!getUserMedia) {
                    return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
                }
                // 否则，为老的navigator.getUserMedia方法包裹一个Promise
                return new Promise((resolve, reject) => {
                    getUserMedia.call(navigator, constraints, resolve, reject);
                });
            };
        }
    },
    watch: {
        'scanShow'(newData) {
            if (newData) {
                navigator.mediaDevices.getUserMedia({
                    video: {
                        width: { min: 720, ideal: 1080, max: 2160 },
                        height: { min: 720, ideal: 1080, max: 2160 },
                        facingMode: { exact: 'environment' },
                    },
                })
                    .then(stream => {
                        console.log(stream);
                        video.setAttribute('playsinline', true); // required to tell iOS safari we don't want fullscreen
                        if ('srcObject' in video) {
                            video.srcObject = stream;
                        } else {
                            // Avoid using this in new browsers, as it is going away.
                            video.src = window.URL.createObjectURL(stream);
                        }
                        video.onloadedmetadata = () => {
                            video.play();
                        };
                        requestAnimationFrame(this.tick);
                    });
            } else {
                this.$router.go(0);
            }
        },
    },
    methods: {
        drawLine(begin, end, color) {
            canvas.beginPath();
            canvas.moveTo(begin.x, begin.y);
            canvas.lineTo(end.x, end.y);
            canvas.lineWidth = 4;
            canvas.strokeStyle = color;
            canvas.stroke();
        },
        tick() {
            loadingMessage.innerText = '⌛ Loading video...';
            if (video.readyState === video.HAVE_ENOUGH_DATA) {
                loadingMessage.hidden = true;
                canvasElement.hidden = false;
                outputContainer.hidden = false;
                canvasElement.height = video.videoHeight;
                canvasElement.width = video.videoWidth;
                canvas.drawImage(
                    video,
                    0,
                    0,
                    canvasElement.width,
                    canvasElement.height,
                );
                let imageData = canvas.getImageData(
                    0,
                    0,
                    canvasElement.width,
                    canvasElement.height,
                );
                let code = jsQR(imageData.data, imageData.width, imageData.height, {
                    inversionAttempts: 'dontInvert',
                });
                if (code) {
                    this.drawLine(
                        code.location.topLeftCorner,
                        code.location.topRightCorner,
                        '#FF3B58',
                    );
                    this.drawLine(
                        code.location.topRightCorner,
                        code.location.bottomRightCorner,
                        '#FF3B58',
                    );
                    this.drawLine(
                        code.location.bottomRightCorner,
                        code.location.bottomLeftCorner,
                        '#FF3B58',
                    );
                    this.drawLine(
                        code.location.bottomLeftCorner,
                        code.location.topLeftCorner,
                        '#FF3B58',
                    );
                    outputMessage.hidden = true;
                    outputData.parentElement.hidden = false;
                    outputData.innerText = code.data;
                } else {
                    outputMessage.hidden = false;
                    outputData.parentElement.hidden = true;
                }
            }
            requestAnimationFrame(this.tick);
        },
    },
};
</script>

<style lang="less" scoped>
    ._scan {
        margin: 10px;
        padding: 10px;
        .iconscan, .iconback {
            font-size: 32px;
            cursor: pointer;
            transition: all 0.3s;
            &:hover {
                color: #999;
            }
        }
        .iconback {
            color: #fff;
            position: absolute;
            top: 10px;
            left: 10px;
        }
        .scanbg {
            position: fixed;
            top: 0;
            left: 0;
            /* right: 0; */
            /* bottom: 0; */
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            #githubLink {
                position: absolute;
                right: 0;
                top: 12px;
                color: #2D99FF;
            }
            #loadingMessage {
                text-align: center;
                padding: 20px;
                background-color: #eee;
                margin: 20px;
            }
            .window {
                padding: 50px;
                #canvas {
                    width: 100%;
                    border: 1px solid #0586e2;
                    box-shadow: 0 0 10px 3px #0586e2;
                }
            }
            #output {
                margin-top: 20px;
                background: #eee;
                padding: 10px;
                padding-bottom: 0;
                div {
                    padding-bottom: 10px;
                    word-wrap: break-word;
                }
                #noQRFound {
                    text-align: center;
                }
            }
        }
    }
</style>
