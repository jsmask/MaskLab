<template>
    <div class="page">

        <Head />
        <div class="content">

            <div class="form-flex">
                <div class="form-item"><label>Delay:</label><input type="number" class="m-input" v-model="options.delay" /></div>
                <div class="form-item"><label>Quality:</label><input type="number" class="m-input" v-model.num="options.quality" /></div>
            </div>

            <div class="btns">
                <button @click="handleCreate" class="m-btn" :disabled="(list.length < 2)">Create</button>
                <button @click="handleClear" class="m-btn">Clear</button>
            </div>

            <div class="result" v-if="result">
                <h3>Result:</h3>
                <img :src="result" alt="" srcset="">
                <div class="form-item">
                    <label>FileName:</label><input class="m-input" v-model="options.fileName" /><span>.gif</span>
                    <button @click="handleDownLoad" class="m-btn">DownLoad</button>
                </div>
                
            </div>

            <ul class="upload-list">
                <li class="img-item" v-for="(item,index) in list" :key="(index+item)">
                    <img :src="item" alt="" srcset="">
                    <span  @click="handleDelItem(index)" class="item-del"></span>
                    <p>{{index}}</p>
                </li>
                <li class="m-upload">
                    <input type="file" ref="fileRef" accept="image/*,.jpeg" multiple @change="changeFile">
                </li>
            </ul>



        </div>
    </div>
</template>

<script setup>
import "@/libs/gif/gif.js";
// import "@/libs/gif/gif.worker.js";

import { ref, onMounted, reactive } from "vue"
import Head from "@/components/Head.vue";
import { saveAs } from 'file-saver';

// import { ElMessage } from 'element-plus'
// import { ElUpload } from 'element-plus'

const fileRef = ref(null)
const list = ref([]);
const options = reactive({
    repeat: 0,
    quality: 10,
    background: "#fff",
    delay: 16,
    fileName:""
})
let result = ref("")
let gif;
let loading;

onMounted(() => {

})

function initOptions() {
    const GIF = window.GIF;
    gif = new GIF({
        ...options
    });
}

function handleDelItem(index){
    list.value.splice(index,1)
}


async function changeFile(e) {
    if(!options.fileName){
        let names = e.target.files[0].name.split(".");
        options.fileName = names[0]
    }
    showLoading();
    for (let i = 0; i < e.target.files.length; i++) {
        await loadMyFile(e.target.files[i])
    }
    loading.close()
    fileRef.value.value = ""
}


function loadMyFile(file) {
    return new Promise((resolve,reject)=>{
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            list.value.push(reader.result);
            resolve()
        }
    })
}


async function handleCreate() {
    // let imgList = []
    initOptions();
    for (let i = 0; i < list.value.length; i++) {
        let img = new Image();
        img.src = list.value[i];
        // imgList.push(img)
        await gif.addFrame(img, {
            delay: options.delay
        })
    }

    gif.render();

    showLoading();

    gif.on('finished', (blob) => {
        // console.log()
        result.value = URL.createObjectURL(blob)
        loading.close()
    });
}

function showLoading(){
    loading = ElLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)',
    })
}

function handleClear() {
    list.value.length = 0;
    result.value = "";
    options.fileName = "";
    fileRef.value.value = ""
}

function handleDownLoad() {
    saveAs(result.value, `${options.fileName}.gif`);
}

</script>

<style lang="scss" scoped>
.upload-list {
    display: flex;
    flex-wrap: wrap;
}

.img-item {
    width: 120px;
    height: 120px;
    border-radius: 12px;
    overflow: hidden;
    margin-right: 10px;
    margin-bottom: 10px;
    position: relative;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover{
        .item-del{
            display: block;
        }
    }

    .item-del{
        display: none;
        width: 18px;
        height: 18px;
        background: url("@/assets/image/close.svg") no-repeat;
        background-size: 100% 100%;
        cursor: pointer;
        position: absolute;
        z-index: 9;
        right: 5px;
        top: 5px;
        transition: all .2s;
        &:hover{
            transform: scale(1.2);
        }
    }

    &>p{
        height: 24px;
        position: absolute;
        background-color:rgba(0,0,0,.6);
        text-align: center;
        color: #ff6d00;
        left: 0;
        right: 0;
        bottom: 0;
        font-size: 22px;
        padding-top: 5px;
        font-family: "Lunacy", sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

.form-flex{
    display: flex;
    align-items: center;
    &>div{
        margin-right: 10px;
    }
}

.form-item{
    .m-btn{
        margin-left: 15px;
    }
}

.btns {
    margin-top: 15px;
    margin-bottom: 15px;
    display: flex;

    .m-btn {
        margin-right: 10px;
    }
}

.result {
    margin-bottom: 15px;

    h3 {
        font-size: 28px;
        font-family: "Lunacy", sans-serif;
        color: #ff6d00;
        position: relative;
        top: 3px;
        margin-bottom: 3px;
    }

    img {
        max-width: 350px;
        height: auto;
        margin-bottom: 15px;
    }
}
</style>