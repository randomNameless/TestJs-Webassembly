const __universalAtob = function (b64Encoded) {
    try {
        let binary_string = atob(b64Encoded), len = binary_string.length, bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
            bytes[i] = binary_string.charCodeAt(i);
        }
        return bytes;
    } catch (err) {
        return new Uint8Array(global.Buffer.from(b64Encoded, 'base64'));
    }
};
const __callWasmBuffer = 'AGFzbQEAAAABhICAgAABYAAAAo+AgIAAAQNlbnYHaW1wRnVuYwAAA4KAgIAAAQAEhICAgAABcAAABYOAgIAAAQABB5GAgIAAAgZtZW1vcnkCAARkYXRhAAEKioCAgAABhICAgAAAEAAL';
const __callWasmModule = new WebAssembly.Module((() => {
    try {
        let binary_string = atob(__callWasmBuffer), len = binary_string.length, bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
            bytes[i] = binary_string.charCodeAt(i);
        }
        return bytes;
    } catch (err) {
        return new Uint8Array(global.Buffer.from(__callWasmBuffer, 'base64'));
    }
})());
const __wasmStringModules = ['AGFzbQEAAAAFg4CAgAABAAEGoYCAgAAGfwBBAQt/AEEOC38AQSgLfwBBLAt/AEHMAAt/AEHWAAsHuoCAgAAHBm1lbW9yeQIABWRhdGEwAwAFZGF0YTEDAQVkYXRhMgMCBWRhdGEzAwMFZGF0YTQDBAVkYXRhNQMFC46BgIAABgBBAQsMbWFpbi1oZWFkZXIAAEEOCxhkb2N1bWVudC5nZXRFbGVtZW50QnlJZAAAQSgLAnAAAEEsCx5kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZQAAQcwACwlteS1jbGFzcwAAQdYACyBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lAA=='].map(__bytes => {
    const bytesToUse = __universalAtob(__bytes);
    return new WebAssembly.Instance(new WebAssembly.Module(bytesToUse));
});
const lS = (wI, pos, iWC) => {
    let __str = '';
    if (!Array.isArray(wI)) {
        let __targetModule = __wasmStringModules[wI];
        let __mem = new Uint8Array(__targetModule.exports.memory.buffer);
        const __stringKey = `data${ pos }`;
        let __start = __targetModule.exports[__stringKey] - 1;
        let __str = '';
        let i = __start;
        let __c = __mem[i++];
        while (!(parseInt(__c) & 128) && __mem[i]) {
            __str += __c;
            __c = String.fromCharCode(__mem[i++]);
        }
        __str += __c;
        __str = decodeURIComponent(__str.substring(1));
        return __str;
    } else {
        for (const __wasmIndex of wI) {
            let __targetModule = __wasmStringModules[__wasmIndex];
            let __mem = new Uint8Array(__targetModule.exports.memory.buffer);
            const __stringKey = `data${ pos }`;
            let __start = __targetModule.exports[__stringKey] - 1;
            let i = __start;
            let __c = __mem[i++];
            while (!(parseInt(__c) & 128) && __mem[i]) {
                __str += __c;
                __c = String.fromCharCode(__mem[i++]);
            }
            __str += __c;
        }
        __str = decodeURIComponent(__str.substring(1));
        return __str;
    }
};
window.entries = [];
function logApiCall(apiName) {
    const timestamp = new Date().getTime();
    (() => {
        const __callInstance3 = new WebAssembly.Instance(__callWasmModule, {
            env: {
                impFunc: () => {
                    window.entries.push([
                        apiName,
                        1
                    ]);
                }
            }
        });
        const __exports = __callInstance3.exports;
        return __exports.data();
    })();
}
const header = document.getElementById(lS(0, 0));
(() => {
    const __callInstance2 = new WebAssembly.Instance(__callWasmModule, {
        env: {
            impFunc: () => {
                logApiCall(lS(0, 1));
            }
        }
    });
    const __exports = __callInstance2.exports;
    return __exports.data();
})();
const paragraphs = document.getElementsByTagName(lS(0, 2));
(() => {
    const __callInstance1 = new WebAssembly.Instance(__callWasmModule, {
        env: {
            impFunc: () => {
                logApiCall(lS(0, 3));
            }
        }
    });
    const __exports = __callInstance1.exports;
    return __exports.data();
})();
const classElements = document.getElementsByClassName(lS(0, 4));
(() => {
    const __callInstance0 = new WebAssembly.Instance(__callWasmModule, {
        env: {
            impFunc: () => {
                logApiCall(lS(0, 5));
            }
        }
    });
    const __exports = __callInstance0.exports;
    return __exports.data();
})();