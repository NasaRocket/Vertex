const { execSync } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');

module.exports = function (source) {
    const callback = this.async();

    // 生成一个临时文件名
    const wasmInputFile = path.join(__dirname, `input-${Date.now()}.wasm`);
    const wasmOutputFile = path.join(__dirname, `output-${Date.now()}.wasm`);

    // 将 WebAssembly 模块写入临时文件
    fs.writeFileSync(wasmInputFile, source);

    // 运行 wasm-opt
    execSync(`wasm-opt -O3 ${wasmInputFile} -o ${wasmOutputFile}`);

    // 读取优化后的 WebAssembly 模块
    const optimizedSource = fs.readFileSync(wasmOutputFile);

    // 删除临时文件
    fs.unlinkSync(wasmInputFile);
    fs.unlinkSync(wasmOutputFile);

    // 将优化后的 WebAssembly 模块返回给 Webpack
    callback(null, optimizedSource);
};