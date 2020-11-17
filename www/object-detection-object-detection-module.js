(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["object-detection-object-detection-module"],{

/***/ "./node_modules/@tensorflow-models/coco-ssd/dist/classes.js":
/*!******************************************************************!*\
  !*** ./node_modules/@tensorflow-models/coco-ssd/dist/classes.js ***!
  \******************************************************************/
/*! exports provided: CLASSES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASSES", function() { return CLASSES; });
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const CLASSES = {
    1: {
        name: '/m/01g317',
        id: 1,
        displayName: 'person',
    },
    2: {
        name: '/m/0199g',
        id: 2,
        displayName: 'bicycle',
    },
    3: {
        name: '/m/0k4j',
        id: 3,
        displayName: 'car',
    },
    4: {
        name: '/m/04_sv',
        id: 4,
        displayName: 'motorcycle',
    },
    5: {
        name: '/m/05czz6l',
        id: 5,
        displayName: 'airplane',
    },
    6: {
        name: '/m/01bjv',
        id: 6,
        displayName: 'bus',
    },
    7: {
        name: '/m/07jdr',
        id: 7,
        displayName: 'train',
    },
    8: {
        name: '/m/07r04',
        id: 8,
        displayName: 'truck',
    },
    9: {
        name: '/m/019jd',
        id: 9,
        displayName: 'boat',
    },
    10: {
        name: '/m/015qff',
        id: 10,
        displayName: 'traffic light',
    },
    11: {
        name: '/m/01pns0',
        id: 11,
        displayName: 'fire hydrant',
    },
    13: {
        name: '/m/02pv19',
        id: 13,
        displayName: 'stop sign',
    },
    14: {
        name: '/m/015qbp',
        id: 14,
        displayName: 'parking meter',
    },
    15: {
        name: '/m/0cvnqh',
        id: 15,
        displayName: 'bench',
    },
    16: {
        name: '/m/015p6',
        id: 16,
        displayName: 'bird',
    },
    17: {
        name: '/m/01yrx',
        id: 17,
        displayName: 'cat',
    },
    18: {
        name: '/m/0bt9lr',
        id: 18,
        displayName: 'dog',
    },
    19: {
        name: '/m/03k3r',
        id: 19,
        displayName: 'horse',
    },
    20: {
        name: '/m/07bgp',
        id: 20,
        displayName: 'sheep',
    },
    21: {
        name: '/m/01xq0k1',
        id: 21,
        displayName: 'cow',
    },
    22: {
        name: '/m/0bwd_0j',
        id: 22,
        displayName: 'elephant',
    },
    23: {
        name: '/m/01dws',
        id: 23,
        displayName: 'bear',
    },
    24: {
        name: '/m/0898b',
        id: 24,
        displayName: 'zebra',
    },
    25: {
        name: '/m/03bk1',
        id: 25,
        displayName: 'giraffe',
    },
    27: {
        name: '/m/01940j',
        id: 27,
        displayName: 'backpack',
    },
    28: {
        name: '/m/0hnnb',
        id: 28,
        displayName: 'umbrella',
    },
    31: {
        name: '/m/080hkjn',
        id: 31,
        displayName: 'handbag',
    },
    32: {
        name: '/m/01rkbr',
        id: 32,
        displayName: 'tie',
    },
    33: {
        name: '/m/01s55n',
        id: 33,
        displayName: 'suitcase',
    },
    34: {
        name: '/m/02wmf',
        id: 34,
        displayName: 'frisbee',
    },
    35: {
        name: '/m/071p9',
        id: 35,
        displayName: 'skis',
    },
    36: {
        name: '/m/06__v',
        id: 36,
        displayName: 'snowboard',
    },
    37: {
        name: '/m/018xm',
        id: 37,
        displayName: 'sports ball',
    },
    38: {
        name: '/m/02zt3',
        id: 38,
        displayName: 'kite',
    },
    39: {
        name: '/m/03g8mr',
        id: 39,
        displayName: 'baseball bat',
    },
    40: {
        name: '/m/03grzl',
        id: 40,
        displayName: 'baseball glove',
    },
    41: {
        name: '/m/06_fw',
        id: 41,
        displayName: 'skateboard',
    },
    42: {
        name: '/m/019w40',
        id: 42,
        displayName: 'surfboard',
    },
    43: {
        name: '/m/0dv9c',
        id: 43,
        displayName: 'tennis racket',
    },
    44: {
        name: '/m/04dr76w',
        id: 44,
        displayName: 'bottle',
    },
    46: {
        name: '/m/09tvcd',
        id: 46,
        displayName: 'wine glass',
    },
    47: {
        name: '/m/08gqpm',
        id: 47,
        displayName: 'cup',
    },
    48: {
        name: '/m/0dt3t',
        id: 48,
        displayName: 'fork',
    },
    49: {
        name: '/m/04ctx',
        id: 49,
        displayName: 'knife',
    },
    50: {
        name: '/m/0cmx8',
        id: 50,
        displayName: 'spoon',
    },
    51: {
        name: '/m/04kkgm',
        id: 51,
        displayName: 'bowl',
    },
    52: {
        name: '/m/09qck',
        id: 52,
        displayName: 'banana',
    },
    53: {
        name: '/m/014j1m',
        id: 53,
        displayName: 'apple',
    },
    54: {
        name: '/m/0l515',
        id: 54,
        displayName: 'sandwich',
    },
    55: {
        name: '/m/0cyhj_',
        id: 55,
        displayName: 'orange',
    },
    56: {
        name: '/m/0hkxq',
        id: 56,
        displayName: 'broccoli',
    },
    57: {
        name: '/m/0fj52s',
        id: 57,
        displayName: 'carrot',
    },
    58: {
        name: '/m/01b9xk',
        id: 58,
        displayName: 'hot dog',
    },
    59: {
        name: '/m/0663v',
        id: 59,
        displayName: 'pizza',
    },
    60: {
        name: '/m/0jy4k',
        id: 60,
        displayName: 'donut',
    },
    61: {
        name: '/m/0fszt',
        id: 61,
        displayName: 'cake',
    },
    62: {
        name: '/m/01mzpv',
        id: 62,
        displayName: 'chair',
    },
    63: {
        name: '/m/02crq1',
        id: 63,
        displayName: 'couch',
    },
    64: {
        name: '/m/03fp41',
        id: 64,
        displayName: 'potted plant',
    },
    65: {
        name: '/m/03ssj5',
        id: 65,
        displayName: 'bed',
    },
    67: {
        name: '/m/04bcr3',
        id: 67,
        displayName: 'dining table',
    },
    70: {
        name: '/m/09g1w',
        id: 70,
        displayName: 'toilet',
    },
    72: {
        name: '/m/07c52',
        id: 72,
        displayName: 'tv',
    },
    73: {
        name: '/m/01c648',
        id: 73,
        displayName: 'laptop',
    },
    74: {
        name: '/m/020lf',
        id: 74,
        displayName: 'mouse',
    },
    75: {
        name: '/m/0qjjc',
        id: 75,
        displayName: 'remote',
    },
    76: {
        name: '/m/01m2v',
        id: 76,
        displayName: 'keyboard',
    },
    77: {
        name: '/m/050k8',
        id: 77,
        displayName: 'cell phone',
    },
    78: {
        name: '/m/0fx9l',
        id: 78,
        displayName: 'microwave',
    },
    79: {
        name: '/m/029bxz',
        id: 79,
        displayName: 'oven',
    },
    80: {
        name: '/m/01k6s3',
        id: 80,
        displayName: 'toaster',
    },
    81: {
        name: '/m/0130jx',
        id: 81,
        displayName: 'sink',
    },
    82: {
        name: '/m/040b_t',
        id: 82,
        displayName: 'refrigerator',
    },
    84: {
        name: '/m/0bt_c3',
        id: 84,
        displayName: 'book',
    },
    85: {
        name: '/m/01x3z',
        id: 85,
        displayName: 'clock',
    },
    86: {
        name: '/m/02s195',
        id: 86,
        displayName: 'vase',
    },
    87: {
        name: '/m/01lsmm',
        id: 87,
        displayName: 'scissors',
    },
    88: {
        name: '/m/0kmg4',
        id: 88,
        displayName: 'teddy bear',
    },
    89: {
        name: '/m/03wvsk',
        id: 89,
        displayName: 'hair drier',
    },
    90: {
        name: '/m/012xff',
        id: 90,
        displayName: 'toothbrush',
    }
};
//# sourceMappingURL=classes.js.map

/***/ }),

/***/ "./node_modules/@tensorflow-models/coco-ssd/dist/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@tensorflow-models/coco-ssd/dist/index.js ***!
  \****************************************************************/
/*! exports provided: version, load, ObjectDetection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return load; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectDetection", function() { return ObjectDetection; });
/* harmony import */ var _tensorflow_tfjs_converter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-converter */ "./node_modules/@tensorflow/tfjs-converter/dist/index.js");
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes */ "./node_modules/@tensorflow-models/coco-ssd/dist/classes.js");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./version */ "./node_modules/@tensorflow-models/coco-ssd/dist/version.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "version", function() { return _version__WEBPACK_IMPORTED_MODULE_3__["version"]; });

/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */



const BASE_PATH = 'https://storage.googleapis.com/tfjs-models/savedmodel/';

async function load(config = {}) {
    if (_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__ == null) {
        throw new Error(`Cannot find TensorFlow.js. If you are using a <script> tag, please ` +
            `also include @tensorflow/tfjs on the page before using this model.`);
    }
    const base = config.base || 'lite_mobilenet_v2';
    const modelUrl = config.modelUrl;
    if (['mobilenet_v1', 'mobilenet_v2', 'lite_mobilenet_v2'].indexOf(base) ===
        -1) {
        throw new Error(`ObjectDetection constructed with invalid base model ` +
            `${base}. Valid names are 'mobilenet_v1',` +
            ` 'mobilenet_v2' and 'lite_mobilenet_v2'.`);
    }
    const objectDetection = new ObjectDetection(base, modelUrl);
    await objectDetection.load();
    return objectDetection;
}
class ObjectDetection {
    constructor(base, modelUrl) {
        this.modelPath =
            modelUrl || `${BASE_PATH}${this.getPrefix(base)}/model.json`;
    }
    getPrefix(base) {
        return base === 'lite_mobilenet_v2' ? `ssd${base}` : `ssd_${base}`;
    }
    async load() {
        this.model = await _tensorflow_tfjs_converter__WEBPACK_IMPORTED_MODULE_0__["loadGraphModel"](this.modelPath);
        const zeroTensor = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["zeros"]([1, 300, 300, 3], 'int32');
        // Warmup the model.
        const result = await this.model.executeAsync(zeroTensor);
        await Promise.all(result.map(t => t.data()));
        result.map(t => t.dispose());
        zeroTensor.dispose();
    }
    /**
     * Infers through the model.
     *
     * @param img The image to classify. Can be a tensor or a DOM element image,
     * video, or canvas.
     * @param maxNumBoxes The maximum number of bounding boxes of detected
     * objects. There can be multiple objects of the same class, but at different
     * locations. Defaults to 20.
     * @param minScore The minimum score of the returned bounding boxes
     * of detected objects. Value between 0 and 1. Defaults to 0.5.
     */
    async infer(img, maxNumBoxes, minScore) {
        const batched = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["tidy"](() => {
            if (!(img instanceof _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["Tensor"])) {
                img = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["browser"].fromPixels(img);
            }
            // Reshape to a single-element batch so we can pass it to executeAsync.
            return img.expandDims(0);
        });
        const height = batched.shape[1];
        const width = batched.shape[2];
        // model returns two tensors:
        // 1. box classification score with shape of [1, 1917, 90]
        // 2. box location with shape of [1, 1917, 1, 4]
        // where 1917 is the number of box detectors, 90 is the number of classes.
        // and 4 is the four coordinates of the box.
        const result = await this.model.executeAsync(batched);
        const scores = result[0].dataSync();
        const boxes = result[1].dataSync();
        // clean the webgl tensors
        batched.dispose();
        _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["dispose"](result);
        const [maxScores, classes] = this.calculateMaxScores(scores, result[0].shape[1], result[0].shape[2]);
        const prevBackend = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["getBackend"]();
        // run post process in cpu
        _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["setBackend"]('cpu');
        const indexTensor = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["tidy"](() => {
            const boxes2 = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["tensor2d"](boxes, [result[1].shape[1], result[1].shape[3]]);
            return _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["image"].nonMaxSuppression(boxes2, maxScores, maxNumBoxes, minScore, minScore);
        });
        const indexes = indexTensor.dataSync();
        indexTensor.dispose();
        // restore previous backend
        _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["setBackend"](prevBackend);
        return this.buildDetectedObjects(width, height, boxes, maxScores, indexes, classes);
    }
    buildDetectedObjects(width, height, boxes, scores, indexes, classes) {
        const count = indexes.length;
        const objects = [];
        for (let i = 0; i < count; i++) {
            const bbox = [];
            for (let j = 0; j < 4; j++) {
                bbox[j] = boxes[indexes[i] * 4 + j];
            }
            const minY = bbox[0] * height;
            const minX = bbox[1] * width;
            const maxY = bbox[2] * height;
            const maxX = bbox[3] * width;
            bbox[0] = minX;
            bbox[1] = minY;
            bbox[2] = maxX - minX;
            bbox[3] = maxY - minY;
            objects.push({
                bbox: bbox,
                class: _classes__WEBPACK_IMPORTED_MODULE_2__["CLASSES"][classes[indexes[i]] + 1].displayName,
                score: scores[indexes[i]]
            });
        }
        return objects;
    }
    calculateMaxScores(scores, numBoxes, numClasses) {
        const maxes = [];
        const classes = [];
        for (let i = 0; i < numBoxes; i++) {
            let max = Number.MIN_VALUE;
            let index = -1;
            for (let j = 0; j < numClasses; j++) {
                if (scores[i * numClasses + j] > max) {
                    max = scores[i * numClasses + j];
                    index = j;
                }
            }
            maxes[i] = max;
            classes[i] = index;
        }
        return [maxes, classes];
    }
    /**
     * Detect objects for an image returning a list of bounding boxes with
     * assocated class and score.
     *
     * @param img The image to detect objects from. Can be a tensor or a DOM
     *     element image, video, or canvas.
     * @param maxNumBoxes The maximum number of bounding boxes of detected
     * objects. There can be multiple objects of the same class, but at different
     * locations. Defaults to 20.
     * @param minScore The minimum score of the returned bounding boxes
     * of detected objects. Value between 0 and 1. Defaults to 0.5.
     */
    async detect(img, maxNumBoxes = 20, minScore = 0.5) {
        return this.infer(img, maxNumBoxes, minScore);
    }
    /**
     * Dispose the tensors allocated by the model. You should call this when you
     * are done with the model.
     */
    dispose() {
        if (this.model != null) {
            this.model.dispose();
        }
    }
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@tensorflow-models/coco-ssd/dist/version.js":
/*!******************************************************************!*\
  !*** ./node_modules/@tensorflow-models/coco-ssd/dist/version.js ***!
  \******************************************************************/
/*! exports provided: version */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/** @license See the LICENSE file. */
// This code is auto-generated, do not modify this file!
const version = '2.1.0';

//# sourceMappingURL=version.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/cpu_util.js":
/*!********************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-cpu/dist/cpu_util.js ***!
  \********************************************************************/
/*! exports provided: assertNotComplex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertNotComplex", function() { return assertNotComplex; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

function assertNotComplex(tensor, opName) {
    if (!Array.isArray(tensor)) {
        tensor = [tensor];
    }
    tensor.forEach(t => {
        if (t != null) {
            _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].assert(t.dtype !== 'complex64', () => `${opName} does not support complex64 tensors in the CPU backend.`);
        }
    });
}
//# sourceMappingURL=cpu_util.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Abs.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Abs.js ***!
  \***********************************************************************/
/*! exports provided: simpleAbsImpl, abs, absConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simpleAbsImpl", function() { return simpleAbsImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "abs", function() { return abs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "absConfig", function() { return absConfig; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

function simpleAbsImpl(vals) {
    const resultValues = new Float32Array(vals.length);
    for (let i = 0; i < vals.length; ++i) {
        resultValues[i] = Math.abs(vals[i]);
    }
    return resultValues;
}
const abs = (args) => {
    const { x } = args.inputs;
    const cpuBackend = args.backend;
    let resultValues = new Float32Array(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].sizeFromShape(x.shape));
    if (x.dtype !== 'complex64') {
        const values = cpuBackend.data.get(x.dataId).values;
        resultValues = simpleAbsImpl(values);
    }
    else {
        const complexVals = cpuBackend.data.get(x.dataId);
        const real = complexVals.complexTensorInfos.real;
        const imag = complexVals.complexTensorInfos.imag;
        const realVals = cpuBackend.data.get(real.dataId).values;
        const imagVals = cpuBackend.data.get(imag.dataId).values;
        for (let i = 0; i < realVals.length; i++) {
            const real = realVals[i];
            const imag = imagVals[i];
            resultValues[i] = Math.hypot(real, imag);
        }
    }
    return cpuBackend.makeOutput(resultValues, x.shape, 'float32');
};
const absConfig = {
    kernelName: _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["Abs"],
    backendName: 'cpu',
    kernelFunc: abs,
};
//# sourceMappingURL=Abs.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Add.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Add.js ***!
  \***********************************************************************/
/*! exports provided: addImpl, addComplexImpl, add, addConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addImpl", function() { return addImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComplexImpl", function() { return addComplexImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addConfig", function() { return addConfig; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _utils_binary_impl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/binary_impl */ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/utils/binary_impl.js");
/* harmony import */ var _utils_kernel_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/kernel_utils */ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/utils/kernel_utils.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */



const addImpl = Object(_utils_binary_impl__WEBPACK_IMPORTED_MODULE_1__["createSimpleBinaryKernelImpl"])(((a, b) => a + b));
const addComplexImpl = Object(_utils_kernel_utils__WEBPACK_IMPORTED_MODULE_2__["createComplexBinaryKernelImpl"])(((aReal, aImag, bReal, bImag) => {
    return { real: aReal + bReal, imag: aImag + bImag };
}));
const add = Object(_utils_kernel_utils__WEBPACK_IMPORTED_MODULE_2__["binaryKernelFunc"])(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["Add"], addImpl, addComplexImpl);
const addConfig = {
    kernelName: _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["Add"],
    backendName: 'cpu',
    kernelFunc: add
};
//# sourceMappingURL=Add.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Cast.js":
/*!************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Cast.js ***!
  \************************************************************************/
/*! exports provided: cast, castConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cast", function() { return cast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "castConfig", function() { return castConfig; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _utils_binary_impl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/binary_impl */ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/utils/binary_impl.js");
/* harmony import */ var _Complex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Complex */ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Complex.js");
/* harmony import */ var _Identity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Identity */ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Identity.js");
/* harmony import */ var _Real__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Real */ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Real.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */






function cast(args) {
    const { inputs, backend, attrs } = args;
    const { x } = inputs;
    const { dtype } = attrs;
    // Casting to complex64.
    if (dtype === 'complex64') {
        if (x.dtype === 'complex64') {
            return Object(_Identity__WEBPACK_IMPORTED_MODULE_3__["identity"])({ inputs: { x }, backend });
        }
        // TODO(lina128): Import kernel function once zeros is modularized.
        const zerosTensor = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["zeros"](x.shape);
        const floatX = cast({ inputs: { x }, backend, attrs: { dtype: 'float32' } });
        const result = Object(_Complex__WEBPACK_IMPORTED_MODULE_2__["complex"])({ inputs: { real: floatX, imag: zerosTensor }, backend });
        zerosTensor.dispose();
        backend.disposeIntermediateTensorInfo(floatX);
        return result;
    }
    // Casting from complex64
    if (x.dtype === 'complex64') {
        const realPart = Object(_Real__WEBPACK_IMPORTED_MODULE_4__["real"])({ inputs: { input: x }, backend });
        const result = cast({ inputs: { x: realPart }, backend, attrs: { dtype } });
        backend.disposeIntermediateTensorInfo(realPart);
        return result;
    }
    if (!_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].hasEncodingLoss(x.dtype, dtype)) {
        // We don't change the underlying data, since we cast to higher
        // precision.
        const result = Object(_Identity__WEBPACK_IMPORTED_MODULE_3__["identity"])({ inputs: { x }, backend });
        return { dataId: result.dataId, shape: result.shape, dtype };
    }
    if (dtype === 'int32') {
        const values = backend.data.get(x.dataId).values;
        const resultValues = Int32Array.from(values);
        return backend.makeTensorInfo(x.shape, 'int32', resultValues);
    }
    if (dtype === 'bool') {
        // This is essentially the result of notEqual(x, 0). We avoid using
        // kernel notEqual to avoid circular dependency, i.e. binary_utils ->
        // cast -> notEqual -> binary_utils.
        const xVals = backend.data.get(x.dataId).values;
        const zero = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].toTypedArray([0], x.dtype);
        const [resultData, resultShape] = Object(_utils_binary_impl__WEBPACK_IMPORTED_MODULE_1__["createSimpleBinaryKernelImpl"])((a, b) => (a !== b) ? 1 : 0)(x.shape, [], xVals, zero, 'bool');
        return backend.makeTensorInfo(resultShape, 'bool', resultData);
    }
    throw new Error(`Error in Cast: failed to cast ${x.dtype} to ${dtype}`);
}
const castConfig = {
    kernelName: _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["Cast"],
    backendName: 'cpu',
    kernelFunc: cast
};
//# sourceMappingURL=Cast.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Ceil.js":
/*!************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Ceil.js ***!
  \************************************************************************/
/*! exports provided: ceilImpl, ceil, ceilConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ceilImpl", function() { return ceilImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ceil", function() { return ceil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ceilConfig", function() { return ceilConfig; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _utils_unary_impl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/unary_impl */ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/utils/unary_impl.js");
/* harmony import */ var _utils_unary_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/unary_utils */ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/utils/unary_utils.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */



const ceilImpl = Object(_utils_unary_impl__WEBPACK_IMPORTED_MODULE_1__["createSimpleUnaryImpl"])((xi) => Math.ceil(xi));
const ceil = Object(_utils_unary_utils__WEBPACK_IMPORTED_MODULE_2__["unaryKernelFuncFromImpl"])(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["Ceil"], ceilImpl);
const ceilConfig = {
    kernelName: _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["Ceil"],
    backendName: 'cpu',
    kernelFunc: ceil,
};
//# sourceMappingURL=Ceil.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Complex.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Complex.js ***!
  \***************************************************************************/
/*! exports provided: complex, complexConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "complex", function() { return complex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "complexConfig", function() { return complexConfig; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

function complex(args) {
    const { inputs, backend } = args;
    const { real, imag } = inputs;
    const realVals = backend.data.get(real.dataId).values;
    const imagVals = backend.data.get(imag.dataId).values;
    const complexInfo = backend.makeTensorInfo(real.shape, 'complex64');
    const complex = backend.data.get(complexInfo.dataId);
    // The complex tensor owns the underlying real and imag tensorInfos, only the
    // complex tensor tracks refCount, when complexData is disposed the
    // underlying tensorData will be disposed.
    complex.complexTensorInfos = {
        real: backend.makeTensorInfo(real.shape, 'float32', realVals),
        imag: backend.makeTensorInfo(imag.shape, 'float32', imagVals)
    };
    return complexInfo;
}
const complexConfig = {
    kernelName: _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["Complex"],
    backendName: 'cpu',
    kernelFunc: complex
};
//# sourceMappingURL=Complex.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Exp.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Exp.js ***!
  \***********************************************************************/
/*! exports provided: expImpl, exp, expConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expImpl", function() { return expImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exp", function() { return exp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expConfig", function() { return expConfig; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _utils_unary_impl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/unary_impl */ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/utils/unary_impl.js");
/* harmony import */ var _utils_unary_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/unary_utils */ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/utils/unary_utils.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */



const expImpl = Object(_utils_unary_impl__WEBPACK_IMPORTED_MODULE_1__["createSimpleUnaryImpl"])((xi) => Math.exp(xi));
const exp = Object(_utils_unary_utils__WEBPACK_IMPORTED_MODULE_2__["unaryKernelFuncFromImpl"])(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["Exp"], expImpl);
const expConfig = {
    kernelName: _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["Exp"],
    backendName: 'cpu',
    kernelFunc: exp,
};
//# sourceMappingURL=Exp.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Expm1.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Expm1.js ***!
  \*************************************************************************/
/*! exports provided: expm1Impl, expm1, expm1Config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expm1Impl", function() { return expm1Impl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expm1", function() { return expm1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expm1Config", function() { return expm1Config; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _utils_unary_impl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/unary_impl */ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/utils/unary_impl.js");
/* harmony import */ var _utils_unary_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/unary_utils */ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/utils/unary_utils.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */



const expm1Impl = Object(_utils_unary_impl__WEBPACK_IMPORTED_MODULE_1__["createSimpleUnaryImpl"])((xi) => Math.expm1(xi));
const expm1 = Object(_utils_unary_utils__WEBPACK_IMPORTED_MODULE_2__["unaryKernelFuncFromImpl"])(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["Expm1"], expm1Impl);
const expm1Config = {
    kernelName: _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["Expm1"],
    backendName: 'cpu',
    kernelFunc: expm1,
};
//# sourceMappingURL=Expm1.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Floor.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Floor.js ***!
  \*************************************************************************/
/*! exports provided: floorImpl, floor, floorConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floorImpl", function() { return floorImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floor", function() { return floor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floorConfig", function() { return floorConfig; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _utils_unary_impl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/unary_impl */ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/utils/unary_impl.js");
/* harmony import */ var _utils_unary_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/unary_utils */ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/utils/unary_utils.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */



const floorImpl = Object(_utils_unary_impl__WEBPACK_IMPORTED_MODULE_1__["createSimpleUnaryImpl"])((xi) => Math.floor(xi));
const floor = Object(_utils_unary_utils__WEBPACK_IMPORTED_MODULE_2__["unaryKernelFuncFromImpl"])(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["Floor"], floorImpl);
const floorConfig = {
    kernelName: _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["Floor"],
    backendName: 'cpu',
    kernelFunc: floor,
};
//# sourceMappingURL=Floor.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Identity.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Identity.js ***!
  \****************************************************************************/
/*! exports provided: identity, identityConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identityConfig", function() { return identityConfig; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

function identity(args) {
    const { inputs, backend } = args;
    const { x } = inputs;
    backend.incRef(x.dataId);
    return { dataId: x.dataId, shape: x.shape, dtype: x.dtype };
}
const identityConfig = {
    kernelName: _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["Identity"],
    backendName: 'cpu',
    kernelFunc: identity
};
//# sourceMappingURL=Identity.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Log.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Log.js ***!
  \***********************************************************************/
/*! exports provided: logImpl, log, logConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logImpl", function() { return logImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logConfig", function() { return logConfig; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _utils_unary_impl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/unary_impl */ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/utils/unary_impl.js");
/* harmony import */ var _utils_unary_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/unary_utils */ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/utils/unary_utils.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */



const logImpl = Object(_utils_unary_impl__WEBPACK_IMPORTED_MODULE_1__["createSimpleUnaryImpl"])((xi) => Math.log(xi));
const log = Object(_utils_unary_utils__WEBPACK_IMPORTED_MODULE_2__["unaryKernelFuncFromImpl"])(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["Log"], logImpl);
const logConfig = {
    kernelName: _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["Log"],
    backendName: 'cpu',
    kernelFunc: log,
};
//# sourceMappingURL=Log.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Max_impl.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Max_impl.js ***!
  \****************************************************************************/
/*! exports provided: maxImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxImpl", function() { return maxImpl; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

function maxImpl(aVals, reduceSize, outShape, dtype) {
    const vals = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].getTypedArrayFromDType(dtype, _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].sizeFromShape(outShape));
    for (let i = 0; i < vals.length; ++i) {
        const offset = i * reduceSize;
        let max = aVals[offset];
        for (let j = 0; j < reduceSize; ++j) {
            const value = aVals[offset + j];
            if (value > max) {
                max = value;
            }
        }
        vals[i] = max;
    }
    return vals;
}
//# sourceMappingURL=Max_impl.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Multiply.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Multiply.js ***!
  \****************************************************************************/
/*! exports provided: multiplyImpl, multiplyComplexImpl, multiply, multiplyConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyImpl", function() { return multiplyImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyComplexImpl", function() { return multiplyComplexImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyConfig", function() { return multiplyConfig; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _utils_binary_impl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/binary_impl */ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/utils/binary_impl.js");
/* harmony import */ var _utils_kernel_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/kernel_utils */ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/utils/kernel_utils.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */



const multiplyImpl = Object(_utils_binary_impl__WEBPACK_IMPORTED_MODULE_1__["createSimpleBinaryKernelImpl"])(((aValue, bValue) => aValue * bValue));
const multiplyComplexImpl = Object(_utils_kernel_utils__WEBPACK_IMPORTED_MODULE_2__["createComplexBinaryKernelImpl"])(((aReal, aImag, bReal, bImag) => {
    return {
        real: aReal * bReal - aImag * bImag,
        imag: aReal * bImag + aImag * bReal
    };
}));
const multiply = Object(_utils_kernel_utils__WEBPACK_IMPORTED_MODULE_2__["binaryKernelFunc"])(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["Multiply"], multiplyImpl, multiplyComplexImpl);
const multiplyConfig = {
    kernelName: _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["Multiply"],
    backendName: 'cpu',
    kernelFunc: multiply
};
//# sourceMappingURL=Multiply.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/NotEqual.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/NotEqual.js ***!
  \****************************************************************************/
/*! exports provided: notEqualImpl, notEqual, notEqualConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notEqualImpl", function() { return notEqualImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notEqual", function() { return notEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notEqualConfig", function() { return notEqualConfig; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _utils_binary_impl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/binary_impl */ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/utils/binary_impl.js");
/* harmony import */ var _utils_kernel_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/kernel_utils */ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/utils/kernel_utils.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */



const notEqualImpl = Object(_utils_binary_impl__WEBPACK_IMPORTED_MODULE_1__["createSimpleBinaryKernelImpl"])(((a, b) => (a !== b) ? 1 : 0));
const notEqual = Object(_utils_kernel_utils__WEBPACK_IMPORTED_MODULE_2__["binaryKernelFunc"])(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["NotEqual"], notEqualImpl, null /* complexOp */, 'bool');
const notEqualConfig = {
    kernelName: _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["NotEqual"],
    backendName: 'cpu',
    kernelFunc: notEqual
};
//# sourceMappingURL=NotEqual.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Real.js":
/*!************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Real.js ***!
  \************************************************************************/
/*! exports provided: real, realConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "real", function() { return real; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "realConfig", function() { return realConfig; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

function real(args) {
    const { inputs, backend } = args;
    const { input } = inputs;
    const real = backend.data.get(input.dataId).complexTensorInfos.real;
    const realVal = backend.data.get(real.dataId).values;
    // When complex tensor is disposed, its underlying parts will be disposed too.
    // Make new tensor out of the real value of the complex. This makes sure the
    // value is still accessible even if complex tensor is disposed.
    return backend.makeTensorInfo(real.shape, real.dtype, realVal);
}
const realConfig = {
    kernelName: _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["Real"],
    backendName: 'cpu',
    kernelFunc: real
};
//# sourceMappingURL=Real.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Rsqrt.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Rsqrt.js ***!
  \*************************************************************************/
/*! exports provided: rsqrtImpl, rsqrt, rsqrtConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rsqrtImpl", function() { return rsqrtImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rsqrt", function() { return rsqrt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rsqrtConfig", function() { return rsqrtConfig; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _utils_unary_impl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/unary_impl */ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/utils/unary_impl.js");
/* harmony import */ var _utils_unary_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/unary_utils */ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/utils/unary_utils.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */



const rsqrtImpl = Object(_utils_unary_impl__WEBPACK_IMPORTED_MODULE_1__["createSimpleUnaryImpl"])((xi) => 1 / Math.sqrt(xi));
const rsqrt = Object(_utils_unary_utils__WEBPACK_IMPORTED_MODULE_2__["unaryKernelFuncFromImpl"])(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["Rsqrt"], rsqrtImpl);
const rsqrtConfig = {
    kernelName: _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["Rsqrt"],
    backendName: 'cpu',
    kernelFunc: rsqrt,
};
//# sourceMappingURL=Rsqrt.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Slice.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Slice.js ***!
  \*************************************************************************/
/*! exports provided: sliceImpl, slice, sliceConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sliceImpl", function() { return sliceImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return slice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sliceConfig", function() { return sliceConfig; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _cpu_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cpu_util */ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/cpu_util.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */


function sliceImpl(vals, begin, size, shape, dtype) {
    const isContinous = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["slice_util"].isSliceContinous(shape, begin, size);
    const length = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].sizeFromShape(size);
    const xStrides = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].computeStrides(shape);
    if (isContinous) {
        const flatOffset = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["slice_util"].computeFlatOffset(begin, xStrides);
        return vals.subarray(flatOffset, flatOffset + length);
    }
    const outVals = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].getTypedArrayFromDType(dtype, length);
    for (let i = 0; i < length; ++i) {
        const rank = size.length;
        const strides = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].computeStrides(size);
        const loc = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].indexToLoc(i, rank, strides);
        const xLoc = loc.map((idx, j) => idx + begin[j]);
        const xIndex = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].locToIndex(xLoc, shape.length, xStrides);
        outVals[i] = vals[xIndex];
    }
    return outVals;
}
function slice(args) {
    const { inputs, backend, attrs } = args;
    const { x } = inputs;
    const { begin, size } = attrs;
    Object(_cpu_util__WEBPACK_IMPORTED_MODULE_1__["assertNotComplex"])(x, 'slice');
    const [$begin, $size] = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["slice_util"].parseSliceParams(x, begin, size);
    _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["slice_util"].assertParamsValid(x, $begin, $size);
    const vals = backend.data.get(x.dataId).values;
    const outVals = sliceImpl(vals, $begin, $size, x.shape, x.dtype);
    return backend.makeTensorInfo($size, x.dtype, outVals);
}
const sliceConfig = {
    kernelName: _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["Slice"],
    backendName: 'cpu',
    kernelFunc: slice
};
//# sourceMappingURL=Slice.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/SquaredDifference.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/SquaredDifference.js ***!
  \*************************************************************************************/
/*! exports provided: squaredDifferenceImpl, squaredDifference, squaredDifferenceConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredDifferenceImpl", function() { return squaredDifferenceImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredDifference", function() { return squaredDifference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredDifferenceConfig", function() { return squaredDifferenceConfig; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _utils_binary_impl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/binary_impl */ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/utils/binary_impl.js");
/* harmony import */ var _utils_kernel_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/kernel_utils */ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/utils/kernel_utils.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */



const squaredDifferenceImpl = Object(_utils_binary_impl__WEBPACK_IMPORTED_MODULE_1__["createSimpleBinaryKernelImpl"])(((a, b) => {
    const diff = a - b;
    return diff * diff;
}));
const squaredDifference = Object(_utils_kernel_utils__WEBPACK_IMPORTED_MODULE_2__["binaryKernelFunc"])(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["SquaredDifference"], squaredDifferenceImpl);
const squaredDifferenceConfig = {
    kernelName: _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["SquaredDifference"],
    backendName: 'cpu',
    kernelFunc: squaredDifference
};
//# sourceMappingURL=SquaredDifference.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Sub.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Sub.js ***!
  \***********************************************************************/
/*! exports provided: subImpl, subComplexImpl, sub, subConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subImpl", function() { return subImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subComplexImpl", function() { return subComplexImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subConfig", function() { return subConfig; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _utils_binary_impl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/binary_impl */ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/utils/binary_impl.js");
/* harmony import */ var _utils_kernel_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/kernel_utils */ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/utils/kernel_utils.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */



const subImpl = Object(_utils_binary_impl__WEBPACK_IMPORTED_MODULE_1__["createSimpleBinaryKernelImpl"])(((aValue, bValue) => aValue - bValue));
const subComplexImpl = Object(_utils_kernel_utils__WEBPACK_IMPORTED_MODULE_2__["createComplexBinaryKernelImpl"])(((aReal, aImag, bReal, bImag) => {
    return { real: aReal - bReal, imag: aImag - bImag };
}));
const sub = Object(_utils_kernel_utils__WEBPACK_IMPORTED_MODULE_2__["binaryKernelFunc"])(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["Sub"], subImpl, subComplexImpl);
const subConfig = {
    kernelName: _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["Sub"],
    backendName: 'cpu',
    kernelFunc: sub
};
//# sourceMappingURL=Sub.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Transpose_impl.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Transpose_impl.js ***!
  \**********************************************************************************/
/*! exports provided: transposeImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transposeImpl", function() { return transposeImpl; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

function transposeImpl(xVals, xShape, dtype, perm, newShape) {
    const xRank = xShape.length;
    const xSize = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].sizeFromShape(xShape);
    const xStrides = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].computeStrides(xShape);
    const newStrides = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].computeStrides(newShape);
    const result = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].getTypedArrayFromDType(dtype, _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].sizeFromShape(newShape));
    for (let i = 0; i < xSize; ++i) {
        const loc = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].indexToLoc(i, xRank, xStrides);
        // Permute location.
        const newLoc = new Array(loc.length);
        for (let i = 0; i < newLoc.length; i++) {
            newLoc[i] = loc[perm[i]];
        }
        const newIndex = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].locToIndex(newLoc, xRank, newStrides);
        result[newIndex] = xVals[i];
    }
    return result;
}
//# sourceMappingURL=Transpose_impl.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Unique_impl.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Unique_impl.js ***!
  \*******************************************************************************/
/*! exports provided: uniqueImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueImpl", function() { return uniqueImpl; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

function uniqueImpl(values, axis, shape, dtype) {
    // Normalize and validate axis.
    const $axis = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].parseAxisParam(axis, shape)[0];
    // Calculate the new shape that is suitable for extracting data along the
    // given axis.
    //
    // The rank is 3.
    // The size of the 1st dimension is the size of all the axes < the given axis.
    // The size of the 2nd dimension is the same as the size of the given axis.
    // The size of the 3rd dimension is the size of all the axes > the given axis.
    //
    // For example, for a 4D tensor with shape=[2, 3, 5, 4] and axis=2, the
    // newShape would be: [2*3, 5, 4].
    //
    // Note that this is not the final output shape. This will be the shape for an
    // intermediate TensorBuffer (see inputBuffer below) to allow us to extract
    // values along the given axis. To demonstrate how it works, consider the
    // following example:
    //
    // Input: a 3D tensor, with shape [1, 2, 3]
    // [
    //   [
    //      [1,2,3],
    //      [4,5,6]
    //   ]
    // ]
    // Axis: 2 (the last axis).
    // Along axis 2, we expect to extract 3 tensors: [1,4], [2,5], [3,6].
    //
    // For this example, newShape would be: [2, 3, 1], where 2 is calculated from
    // 1*2. The re-shaped data would look like:
    //
    // [
    //   [
    //     [1], [2], [3]
    //   ],
    //   [
    //     [4], [5], [6]
    //   ]
    // ]
    //
    // Then, we can construct a 3-level nested loop by the following dimension
    // order to extract the values along the axis (dimension1):
    // i: dimension1       // 0,1,2 (newShape[1])
    //   m: dimension0     // 0,1   (newShape[0])
    //     n: dimension2   // 0     (newShape[2])
    //
    //                       m, i, n
    //                      ---------
    // Iteration 0: data at [0, 0, 0] => "1"
    // Iteration 1: data at [1, 0, 0] => "4"
    // We got [1,4].
    // Iteration 2: data at [0, 1, 0] => "2"
    // Iteration 3: data at [1, 1, 0] => "5"
    // We got [2,5].
    // Iteration 4: data at [0, 2, 0] => "3"
    // Iteration 5: data at [1, 2, 0] => "6"
    // We got [3,6].
    const newShape = [1, shape[0], 1];
    for (let i = 0; i < $axis; i++) {
        newShape[0] *= shape[i];
    }
    newShape[1] = shape[$axis];
    for (let i = $axis + 1; i < shape.length; i++) {
        newShape[2] *= shape[i];
    }
    // A map from unique elements (their string representations) to their values
    // in "indices" (below).
    const uniqueElements = {};
    // The indices of each unique element in the original tensor along the given
    // axis. It is 1D and has the same size as the given axis.
    const indices = new Int32Array(shape[$axis]);
    // Create a buffer so we can easily extract value at a given location.
    const inputBuffer = new _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["TensorBuffer"](newShape, dtype, values);
    // The indices along the given axis that have unique elements. This is a
    // de-duped version of "indices" above.
    const uniqueIndices = [];
    const is1DTensor = newShape[0] === 1 && newShape[2] === 1;
    for (let i = 0; i < shape[$axis]; i++) {
        // Extract values along the axis.
        let element;
        if (is1DTensor) {
            // Fast path for 1D tensor input.
            element = values[i].toString();
        }
        else {
            const axisValues = [];
            for (let m = 0; m < newShape[0]; m++) {
                for (let n = 0; n < newShape[2]; n++) {
                    axisValues.push(inputBuffer.get(m, i, n));
                }
            }
            element = axisValues.join(',');
        }
        // Dedup and update various indices.
        if (uniqueElements[element] !== undefined) {
            indices[i] = uniqueElements[element];
        }
        else {
            const uniqueIndex = Object.keys(uniqueElements).length;
            uniqueElements[element] = uniqueIndex;
            indices[i] = uniqueIndex;
            uniqueIndices.push(i);
        }
    }
    // Now we know where each of the unique elements are located along the axis
    // (uniqueIndices). Extract them from input buffer and store them in the
    // output buffer.
    const outputTmpShape = newShape.slice();
    outputTmpShape[1] = Object.keys(uniqueElements).length;
    const outputBuffer = new _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["TensorBuffer"](outputTmpShape, dtype);
    uniqueIndices.forEach((uniqueElementIndex, i) => {
        for (let m = 0; m < newShape[0]; m++) {
            for (let n = 0; n < newShape[2]; n++) {
                outputBuffer.set(inputBuffer.get(m, uniqueElementIndex, n), m, i, n);
            }
        }
    });
    // The output shape can be calculated from the input shape with the size of
    // the given axis replaced by the number of unique elements along that axis.
    const outputShape = shape.slice();
    outputShape[$axis] = outputTmpShape[1];
    return {
        outputValues: outputBuffer.values,
        outputShape,
        indices,
    };
}
//# sourceMappingURL=Unique_impl.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/shared.js":
/*!******************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-cpu/dist/shared.js ***!
  \******************************************************************/
/*! exports provided: simpleAbsImpl, addImpl, ceilImpl, expImpl, expm1Impl, floorImpl, logImpl, maxImpl, multiplyImpl, notEqualImpl, rsqrtImpl, sliceImpl, squaredDifferenceImpl, subImpl, transposeImpl, uniqueImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _kernels_Abs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kernels/Abs */ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Abs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "simpleAbsImpl", function() { return _kernels_Abs__WEBPACK_IMPORTED_MODULE_0__["simpleAbsImpl"]; });

/* harmony import */ var _kernels_Add__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kernels/Add */ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Add.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addImpl", function() { return _kernels_Add__WEBPACK_IMPORTED_MODULE_1__["addImpl"]; });

/* harmony import */ var _kernels_Ceil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./kernels/Ceil */ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Ceil.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ceilImpl", function() { return _kernels_Ceil__WEBPACK_IMPORTED_MODULE_2__["ceilImpl"]; });

/* harmony import */ var _kernels_Exp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kernels/Exp */ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Exp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "expImpl", function() { return _kernels_Exp__WEBPACK_IMPORTED_MODULE_3__["expImpl"]; });

/* harmony import */ var _kernels_Expm1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./kernels/Expm1 */ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Expm1.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "expm1Impl", function() { return _kernels_Expm1__WEBPACK_IMPORTED_MODULE_4__["expm1Impl"]; });

/* harmony import */ var _kernels_Floor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./kernels/Floor */ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Floor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "floorImpl", function() { return _kernels_Floor__WEBPACK_IMPORTED_MODULE_5__["floorImpl"]; });

/* harmony import */ var _kernels_Log__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./kernels/Log */ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Log.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "logImpl", function() { return _kernels_Log__WEBPACK_IMPORTED_MODULE_6__["logImpl"]; });

/* harmony import */ var _kernels_Max_impl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./kernels/Max_impl */ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Max_impl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "maxImpl", function() { return _kernels_Max_impl__WEBPACK_IMPORTED_MODULE_7__["maxImpl"]; });

/* harmony import */ var _kernels_Multiply__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./kernels/Multiply */ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Multiply.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "multiplyImpl", function() { return _kernels_Multiply__WEBPACK_IMPORTED_MODULE_8__["multiplyImpl"]; });

/* harmony import */ var _kernels_NotEqual__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./kernels/NotEqual */ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/NotEqual.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notEqualImpl", function() { return _kernels_NotEqual__WEBPACK_IMPORTED_MODULE_9__["notEqualImpl"]; });

/* harmony import */ var _kernels_Rsqrt__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./kernels/Rsqrt */ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Rsqrt.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rsqrtImpl", function() { return _kernels_Rsqrt__WEBPACK_IMPORTED_MODULE_10__["rsqrtImpl"]; });

/* harmony import */ var _kernels_Slice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./kernels/Slice */ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Slice.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sliceImpl", function() { return _kernels_Slice__WEBPACK_IMPORTED_MODULE_11__["sliceImpl"]; });

/* harmony import */ var _kernels_SquaredDifference__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./kernels/SquaredDifference */ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/SquaredDifference.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "squaredDifferenceImpl", function() { return _kernels_SquaredDifference__WEBPACK_IMPORTED_MODULE_12__["squaredDifferenceImpl"]; });

/* harmony import */ var _kernels_Sub__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./kernels/Sub */ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Sub.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "subImpl", function() { return _kernels_Sub__WEBPACK_IMPORTED_MODULE_13__["subImpl"]; });

/* harmony import */ var _kernels_Transpose_impl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./kernels/Transpose_impl */ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Transpose_impl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transposeImpl", function() { return _kernels_Transpose_impl__WEBPACK_IMPORTED_MODULE_14__["transposeImpl"]; });

/* harmony import */ var _kernels_Unique_impl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./kernels/Unique_impl */ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Unique_impl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uniqueImpl", function() { return _kernels_Unique_impl__WEBPACK_IMPORTED_MODULE_15__["uniqueImpl"]; });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
// Shared functionality among backends.
















//# sourceMappingURL=shared.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/utils/binary_impl.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-cpu/dist/utils/binary_impl.js ***!
  \*****************************************************************************/
/*! exports provided: createSimpleBinaryKernelImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSimpleBinaryKernelImpl", function() { return createSimpleBinaryKernelImpl; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

/**
 * Template that creates implementation for binary ops. Supports broadcast.
 */
function createSimpleBinaryKernelImpl(op) {
    return (aShape, bShape, aVals, bVals, dtype) => {
        const newShape = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["backend_util"].assertAndGetBroadcastShape(aShape, bShape);
        const resultRank = newShape.length;
        const resultStrides = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].computeStrides(newShape);
        const resultSize = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].sizeFromShape(newShape);
        const result = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].getTypedArrayFromDType(dtype, resultSize);
        const aRank = aShape.length;
        const bRank = bShape.length;
        const aStrides = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].computeStrides(aShape);
        const bStrides = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].computeStrides(bShape);
        const aBroadcastDims = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["backend_util"].getBroadcastDims(aShape, newShape);
        const bBroadcastDims = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["backend_util"].getBroadcastDims(bShape, newShape);
        if (aBroadcastDims.length + bBroadcastDims.length === 0) {
            for (let i = 0; i < result.length; ++i) {
                result[i] = op(aVals[i % aVals.length], bVals[i % bVals.length]);
            }
        }
        else {
            for (let i = 0; i < result.length; ++i) {
                const loc = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].indexToLoc(i, resultRank, resultStrides);
                const aLoc = loc.slice(-aRank);
                aBroadcastDims.forEach(d => aLoc[d] = 0);
                const aIndex = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].locToIndex(aLoc, aRank, aStrides);
                const bLoc = loc.slice(-bRank);
                bBroadcastDims.forEach(d => bLoc[d] = 0);
                const bIndex = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].locToIndex(bLoc, bRank, bStrides);
                result[i] = op(aVals[aIndex], bVals[bIndex]);
            }
        }
        return [result, newShape];
    };
}
//# sourceMappingURL=binary_impl.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/utils/kernel_utils.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-cpu/dist/utils/kernel_utils.js ***!
  \******************************************************************************/
/*! exports provided: binaryKernelFunc, createComplexBinaryKernelImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "binaryKernelFunc", function() { return binaryKernelFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createComplexBinaryKernelImpl", function() { return createComplexBinaryKernelImpl; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _cpu_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cpu_util */ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/cpu_util.js");
/* harmony import */ var _kernels_Cast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../kernels/Cast */ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Cast.js");
/* harmony import */ var _kernels_Complex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../kernels/Complex */ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Complex.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */




/**
 * Template that creates a `KernelFunc` for binary ops.
 * @param name Kernel name.
 * @param binaryKernelImpl A `SimpleBinaryKernelImpl` for the kernel.
 * @param binaryKernelComplexImpl Optional. If exists, represents a
 *     `ComplexBinaryKernelImpl` for the kernel, will be used when input dtype
 *     is `complex64`.
 * @param dtype Optional. If set, the result has this dtype. Otherwise, the
 *     result has the same dtype as the first input. This is mainly used in
 *     comparison kernels, such as Equal, Less, Greater, etc.
 */
function binaryKernelFunc(name, simpleImpl, complexImpl, dtype) {
    if (complexImpl == null) {
        return ({ inputs, backend }) => {
            const { a, b } = inputs;
            const cpuBackend = backend;
            Object(_cpu_util__WEBPACK_IMPORTED_MODULE_1__["assertNotComplex"])([a, b], name);
            const aVals = cpuBackend.data.get(a.dataId).values;
            const bVals = cpuBackend.data.get(b.dataId).values;
            const $dtype = dtype || a.dtype;
            const [resultData, resultShape] = simpleImpl(a.shape, b.shape, aVals, bVals, $dtype);
            return cpuBackend.makeTensorInfo(resultShape, $dtype, resultData);
        };
    }
    return ({ inputs, backend }) => {
        const { a, b } = inputs;
        const cpuBackend = backend;
        if (a.dtype === 'complex64' || b.dtype === 'complex64') {
            const $aComplex = Object(_kernels_Cast__WEBPACK_IMPORTED_MODULE_2__["cast"])({ inputs: { x: a }, backend: cpuBackend, attrs: { dtype: 'complex64' } });
            const $aComplexVals = cpuBackend.data.get($aComplex.dataId);
            const aReal = $aComplexVals.complexTensorInfos.real;
            const aImag = $aComplexVals.complexTensorInfos.imag;
            const aRealVals = cpuBackend.data.get(aReal.dataId).values;
            const aImagVals = cpuBackend.data.get(aImag.dataId).values;
            const $bComplex = Object(_kernels_Cast__WEBPACK_IMPORTED_MODULE_2__["cast"])({ inputs: { x: b }, backend: cpuBackend, attrs: { dtype: 'complex64' } });
            const $bComplexVals = cpuBackend.data.get($bComplex.dataId);
            const bReal = $bComplexVals.complexTensorInfos.real;
            const bImag = $bComplexVals.complexTensorInfos.imag;
            const bRealVals = cpuBackend.data.get(bReal.dataId).values;
            const bImagVals = cpuBackend.data.get(bImag.dataId).values;
            const [resultRealData, resultImagData, resultShape] = complexImpl(a.shape, b.shape, aRealVals, aImagVals, bRealVals, bImagVals);
            const resultReal = cpuBackend.makeTensorInfo(resultShape, 'float32', resultRealData);
            const resultImag = cpuBackend.makeTensorInfo(resultShape, 'float32', resultImagData);
            const result = Object(_kernels_Complex__WEBPACK_IMPORTED_MODULE_3__["complex"])({ inputs: { real: resultReal, imag: resultImag }, backend: cpuBackend });
            cpuBackend.disposeIntermediateTensorInfo($aComplex);
            cpuBackend.disposeIntermediateTensorInfo($bComplex);
            cpuBackend.disposeIntermediateTensorInfo(resultReal);
            cpuBackend.disposeIntermediateTensorInfo(resultImag);
            return result;
        }
        else {
            const aVals = cpuBackend.data.get(a.dataId).values;
            const bVals = cpuBackend.data.get(b.dataId).values;
            const $dtype = dtype || a.dtype;
            const [resultData, resultShape] = simpleImpl(a.shape, b.shape, aVals, bVals, $dtype);
            return cpuBackend.makeTensorInfo(resultShape, $dtype, resultData);
        }
    };
}
/**
 * Template that creates the complex type implementation for binary ops.
 * Supports broadcast.
 */
function createComplexBinaryKernelImpl(op) {
    return (aShape, bShape, aRealVals, aImagVals, bRealVals, bImagVals) => {
        const resultShape = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["backend_util"].assertAndGetBroadcastShape(aShape, bShape);
        const resultSize = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].sizeFromShape(resultShape);
        const resultRank = resultShape.length;
        const resultStrides = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].computeStrides(resultShape);
        const resultRealVals = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].getTypedArrayFromDType('float32', resultSize);
        const resultImagVals = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].getTypedArrayFromDType('float32', resultSize);
        const aBroadcastDims = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["backend_util"].getBroadcastDims(aShape, resultShape);
        const bBroadcastDims = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["backend_util"].getBroadcastDims(bShape, resultShape);
        const aVals = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["backend_util"].mergeRealAndImagArrays(aRealVals, aImagVals);
        const bVals = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["backend_util"].mergeRealAndImagArrays(bRealVals, bImagVals);
        const aRank = aShape.length;
        const aStrides = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].computeStrides(aShape);
        const bRank = bShape.length;
        const bStrides = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].computeStrides(bShape);
        if (aBroadcastDims.length + bBroadcastDims.length === 0) {
            for (let i = 0; i < resultRealVals.length; i++) {
                const aIdx = i % aVals.length;
                const bIdx = i % bVals.length;
                const result = op(aVals[aIdx * 2], aVals[aIdx * 2 + 1], bVals[bIdx * 2], bVals[bIdx * 2 + 1]);
                resultRealVals[i] = result.real;
                resultImagVals[i] = result.imag;
            }
        }
        else {
            for (let i = 0; i < resultRealVals.length; i++) {
                const loc = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].indexToLoc(i, resultRank, resultStrides);
                const aLoc = loc.slice(-aRank);
                aBroadcastDims.forEach(d => aLoc[d] = 0);
                const aIndex = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].locToIndex(aLoc, aRank, aStrides);
                const bLoc = loc.slice(-bRank);
                bBroadcastDims.forEach(d => bLoc[d] = 0);
                const bIndex = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].locToIndex(bLoc, bRank, bStrides);
                const opResult = op(aVals[aIndex * 2], aVals[aIndex * 2 + 1], bVals[bIndex * 2], bVals[bIndex * 2 + 1]);
                resultRealVals[i] = opResult.real;
                resultImagVals[i] = opResult.imag;
            }
        }
        return [resultRealVals, resultImagVals, resultShape];
    };
}
//# sourceMappingURL=kernel_utils.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/utils/unary_impl.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-cpu/dist/utils/unary_impl.js ***!
  \****************************************************************************/
/*! exports provided: createSimpleUnaryImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSimpleUnaryImpl", function() { return createSimpleUnaryImpl; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

/**
 * Template that creates implementation for unary op.
 */
function createSimpleUnaryImpl(op) {
    return (values, dtype, attrs) => {
        const newValues = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].getTypedArrayFromDType(dtype, values.length);
        for (let i = 0; i < values.length; ++i) {
            newValues[i] = op(values[i], attrs);
        }
        return newValues;
    };
}
//# sourceMappingURL=unary_impl.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/utils/unary_utils.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-cpu/dist/utils/unary_utils.js ***!
  \*****************************************************************************/
/*! exports provided: unaryKernelFunc, unaryKernelFuncFromImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unaryKernelFunc", function() { return unaryKernelFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unaryKernelFuncFromImpl", function() { return unaryKernelFuncFromImpl; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _cpu_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cpu_util */ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/cpu_util.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */


/**
 * Template that creates a `KernelFunc` for unary ops.
 * @param name Kernel name.
 * @param op A `SimpleUnaryOperation` for the kernel.
 * @param dtype Optional. If set, the result has this dtype. Otherwise, the
 *     result has the same dtype as the input. This is mainly used in certain
 *     kernels that return bool type, such as isFinite, isInf, etc.
 */
function unaryKernelFunc(name, op, dtype) {
    return ({ inputs, attrs, backend }) => {
        const { x } = inputs;
        Object(_cpu_util__WEBPACK_IMPORTED_MODULE_1__["assertNotComplex"])(x, name);
        if (x.dtype === 'string' || dtype === 'string') {
            throw new Error('unaryKernelFunc does not support string input/output');
        }
        const cpuBackend = backend;
        const values = cpuBackend.data.get(x.dataId).values;
        const xSize = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].sizeFromShape(x.shape);
        const $dtype = dtype || x.dtype;
        const newValues = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].getArrayFromDType($dtype, xSize);
        for (let i = 0; i < xSize; ++i) {
            newValues[i] = op(values[i], attrs);
        }
        return cpuBackend.makeTensorInfo(x.shape, $dtype, newValues);
    };
}
/**
 * Template that creates a `KernelFunc` for unary ops from the given
 * `SimpleUnaryImpl`..
 * @param name Kernel name.
 * @param unaryImpl A `SimpleUnaryImpl` that implements the op.
 * @param dtype Optional. If set, the result has this dtype. Otherwise, the
 *     result has the same dtype as the input. This is mainly used in certain
 *     kernels that return bool type, such as isFinite, isInf, etc.
 */
function unaryKernelFuncFromImpl(name, unaryImpl, dtype) {
    return ({ inputs, attrs, backend }) => {
        const { x } = inputs;
        Object(_cpu_util__WEBPACK_IMPORTED_MODULE_1__["assertNotComplex"])(x, name);
        if (x.dtype === 'string' || dtype === 'string') {
            throw new Error('unaryKernelFunc does not support string input/output');
        }
        const cpuBackend = backend;
        const values = cpuBackend.data.get(x.dataId).values;
        const $dtype = dtype || x.dtype;
        const newValues = unaryImpl(values, $dtype, attrs);
        return cpuBackend.makeTensorInfo(x.shape, $dtype, newValues);
    };
}
//# sourceMappingURL=unary_utils.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/addn_gpu.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/addn_gpu.js ***!
  \**********************************************************************/
/*! exports provided: AddNProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNProgram", function() { return AddNProgram; });
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class AddNProgram {
    constructor(outputShape, shapes) {
        this.outputShape = [];
        this.outputShape = outputShape;
        this.variableNames = shapes.map((_, i) => `T${i}`);
        const snippets = [];
        // Get target elements from every input tensor.
        this.variableNames.forEach(variable => {
            snippets.push(`float v${variable} = get${variable}AtOutCoords();`);
        });
        // Calculate the sum of all elements.
        const operation = this.variableNames
            .map(variable => {
            return `v${variable}`;
        })
            .join(' + ');
        this.userCode = `
      void main() {
        ${snippets.join('\n        ')}

        float result = ${operation};
        setOutput(result);
      }
    `;
    }
}
//# sourceMappingURL=addn_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/addn_packed_gpu.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/addn_packed_gpu.js ***!
  \*****************************************************************************/
/*! exports provided: AddNPackedProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNPackedProgram", function() { return AddNPackedProgram; });
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class AddNPackedProgram {
    constructor(outputShape, shapes) {
        this.outputShape = [];
        this.packedInputs = true;
        this.packedOutput = true;
        this.outputShape = outputShape;
        this.variableNames = shapes.map((_, i) => `T${i}`);
        const snippets = [];
        // Get target elements from every input tensor.
        this.variableNames.forEach(variable => {
            snippets.push(`vec4 v${variable} = get${variable}AtOutCoords();`);
        });
        // Calculate the sum of all elements.
        const operation = this.variableNames
            .map(variable => {
            return `v${variable}`;
        })
            .join(' + ');
        this.userCode = `
      void main() {
        ${snippets.join('\n        ')}

        vec4 result = ${operation};
        setOutput(result);
      }
    `;
    }
}
//# sourceMappingURL=addn_packed_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/argminmax_gpu.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/argminmax_gpu.js ***!
  \***************************************************************************/
/*! exports provided: ArgMinMaxProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArgMinMaxProgram", function() { return ArgMinMaxProgram; });
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class ArgMinMaxProgram {
    constructor(reduceInfo, op, firstPass) {
        this.variableNames = ['A'];
        const { windowSize, batchSize, outSize } = reduceInfo;
        if (!firstPass) {
            this.variableNames.push('bestIndicesA');
        }
        this.outputShape = [batchSize, outSize];
        const compOp = (op === 'max') ? '>' : '<';
        const indexSnippet = firstPass ?
            'inOffset + i;' :
            'round(getBestIndicesA(batch, inOffset + i));';
        this.userCode = `
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${windowSize};

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < ${windowSize}; i++) {
          int inIdx = ${indexSnippet};
          float candidate = getA(batch, inIdx);
          if (candidate ${compOp} bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `;
    }
}
//# sourceMappingURL=argminmax_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/argminmax_packed_gpu.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/argminmax_packed_gpu.js ***!
  \**********************************************************************************/
/*! exports provided: ArgMinMaxPackedProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArgMinMaxPackedProgram", function() { return ArgMinMaxPackedProgram; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _packing_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./packing_util */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/packing_util.js");
/* harmony import */ var _shader_compiler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shader_compiler */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/shader_compiler.js");
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */



class ArgMinMaxPackedProgram {
    constructor(shape, windowSize, op, firstPass) {
        this.variableNames = ['A'];
        this.packedInputs = true;
        this.packedOutput = true;
        _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].assert(shape.length > 2, () => `Packed arg${op.charAt(0).toUpperCase() +
            op.slice(1)} supports only inputs with rank above 2.`);
        const inSize = shape[shape.length - 1];
        const outSize = Math.ceil(inSize / windowSize);
        this.outputShape = shape.slice(0, -1);
        if (outSize > 1) {
            this.outputShape.push(outSize);
        }
        if (!firstPass) {
            this.variableNames.push('bestIndicesA');
        }
        const outShape = this.outputShape;
        const rank = outShape.length;
        const dtype = Object(_shader_compiler__WEBPACK_IMPORTED_MODULE_2__["getCoordsDataType"])(rank);
        const coords = Object(_packing_util__WEBPACK_IMPORTED_MODULE_1__["getChannels"])('coords', rank);
        let sourceLocSetup;
        let sourceRank;
        if (outSize === 1) {
            sourceRank = rank + 1;
            const sourceLocDType = Object(_shader_compiler__WEBPACK_IMPORTED_MODULE_2__["getCoordsDataType"])(sourceRank);
            sourceLocSetup = `
        ${sourceLocDType} sourceLocR = ${sourceLocDType}(${coords.join()}, 0);
        ++${coords[rank - 1]};
        ${sourceLocDType} sourceLocG = ${sourceLocDType}(${coords.join()}, 0);
        ++${coords[rank - 2]};
        ${sourceLocDType} sourceLocA = ${sourceLocDType}(${coords.join()}, 0);
        --${coords[rank - 1]};
        ${sourceLocDType} sourceLocB = ${sourceLocDType}(${coords.join()}, 0);
        --${coords[rank - 2]};`;
        }
        else {
            sourceRank = rank;
            sourceLocSetup = `
        ${dtype} sourceLocR = coords;
        ++${coords[rank - 1]};
        ${dtype} sourceLocG = coords;
        ++${coords[rank - 2]};
        ${dtype} sourceLocA = coords;
        --${coords[rank - 1]};
        ${dtype} sourceLocB = coords;
        --${coords[rank - 2]};`;
        }
        const channels = ['x', 'y', 'z', 'w', 'u', 'v'].slice(0, sourceRank);
        const inChannel = '.' + channels[sourceRank - 1]; // e.g. ".b" for rank 3.
        const intChannels = channels.map(x => 'int ' + x);
        const srcRCoords = Object(_packing_util__WEBPACK_IMPORTED_MODULE_1__["getChannels"])('sourceLocR', sourceRank - 1).concat('inIdx.r');
        const srcGCoords = Object(_packing_util__WEBPACK_IMPORTED_MODULE_1__["getChannels"])('sourceLocG', sourceRank - 1).concat('inIdx.g');
        const srcBCoords = Object(_packing_util__WEBPACK_IMPORTED_MODULE_1__["getChannels"])('sourceLocB', sourceRank - 1).concat('inIdx.b');
        const srcACoords = Object(_packing_util__WEBPACK_IMPORTED_MODULE_1__["getChannels"])('sourceLocA', sourceRank - 1).concat('inIdx.a');
        const compOp = (op === 'max') ? 'greaterThan' : 'lessThan';
        const fetchCandidateIdx = firstPass ? '' : `
          inIdx = round(vec4(getBestIndicesAChannel(${srcRCoords.join()}),
                             getBestIndicesAChannel(${srcGCoords.join()}),
                             getBestIndicesAChannel(${srcBCoords.join()}),
                             getBestIndicesAChannel(${srcACoords.join()})));`;
        const fetchValue = `vec4(
            getAChannel(${srcRCoords.join()}),
            hasNextCol ? getAChannel(${srcGCoords.join()}) : 0.,
            hasNextRow ? getAChannel(${srcBCoords.join()}) : 0.,
            hasNextRow && hasNextCol ? getAChannel(${srcACoords.join()}) : 0.)`;
        const getBestIndicesAChannelSnippet = firstPass ? '' : `
      float getBestIndicesAChannel(${intChannels.join()}) {
        return getChannel(getBestIndicesA(${channels.join()}),
                                          vec2(${channels.slice(-2).join()}));
      }`;
        this.userCode = `
      float getAChannel(${intChannels.join()}) {
        return getChannel(getA(${channels.join()}),
                               vec2(${channels.slice(-2).join()}));
      }
      ${getBestIndicesAChannelSnippet}
      void main() {
        ${dtype} coords = getOutputCoords();
        bool hasNextCol = ${coords[rank - 1]} < ${outShape[rank - 1] - 1};
        bool hasNextRow = ${coords[rank - 2]} < ${outShape[rank - 2] - 1};
        ${sourceLocSetup}
        ivec4 srcIdx = ivec4(sourceLocR${inChannel}, sourceLocG${inChannel},
          sourceLocB${inChannel}, sourceLocA${inChannel}) * ${windowSize};
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = ${fetchValue};

        for (int i = 0; i < ${windowSize}; i++) {
          inIdx = srcIdx;
          ${fetchCandidateIdx}
          vec4 candidate = ${fetchValue};
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(${compOp}(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `;
    }
}
//# sourceMappingURL=argminmax_packed_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/avg_pool_backprop_gpu.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/avg_pool_backprop_gpu.js ***!
  \***********************************************************************************/
/*! exports provided: AvgPool2DBackpropProgram, AvgPool3DBackpropProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvgPool2DBackpropProgram", function() { return AvgPool2DBackpropProgram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvgPool3DBackpropProgram", function() { return AvgPool3DBackpropProgram; });
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class AvgPool2DBackpropProgram {
    constructor(convInfo) {
        this.variableNames = ['dy'];
        this.outputShape = convInfo.inShape;
        const filterHeight = convInfo.filterHeight;
        const filterWidth = convInfo.filterWidth;
        const strideHeight = convInfo.strideHeight;
        const strideWidth = convInfo.strideWidth;
        const dilationHeight = convInfo.dilationHeight;
        const dilationWidth = convInfo.dilationWidth;
        const effectiveFilterHeight = convInfo.effectiveFilterHeight;
        const effectiveFilterWidth = convInfo.effectiveFilterWidth;
        const padTop = effectiveFilterHeight - 1 - convInfo.padInfo.top;
        const padLeft = effectiveFilterWidth - 1 - convInfo.padInfo.left;
        const avgMultiplier = 1 / (filterHeight * filterWidth);
        this.userCode = `
      const ivec2 pads = ivec2(${padTop}, ${padLeft});
      const float avgMultiplier = float(${avgMultiplier});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${effectiveFilterHeight};
            wR += ${dilationHeight}) {
          float dyR = float(dyRCorner + wR) / ${strideHeight}.0;

          if (dyR < 0.0 || dyR >= ${convInfo.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${effectiveFilterWidth};
            wC+= ${dilationWidth}) {
            float dyC = float(dyCCorner + wC) / ${strideWidth}.0;

            if (dyC < 0.0 || dyC >= ${convInfo.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `;
    }
}
class AvgPool3DBackpropProgram {
    constructor(convInfo) {
        this.variableNames = ['dy'];
        this.outputShape = convInfo.inShape;
        const filterDepth = convInfo.filterDepth;
        const filterHeight = convInfo.filterHeight;
        const filterWidth = convInfo.filterWidth;
        const strideDepth = convInfo.strideDepth;
        const strideHeight = convInfo.strideHeight;
        const strideWidth = convInfo.strideWidth;
        const dilationDepth = convInfo.dilationDepth;
        const dilationHeight = convInfo.dilationHeight;
        const dilationWidth = convInfo.dilationWidth;
        const effectiveFilterDepth = convInfo.effectiveFilterDepth;
        const effectiveFilterHeight = convInfo.effectiveFilterHeight;
        const effectiveFilterWidth = convInfo.effectiveFilterWidth;
        const padFront = effectiveFilterDepth - 1 - convInfo.padInfo.front;
        const padTop = effectiveFilterHeight - 1 - convInfo.padInfo.top;
        const padLeft = effectiveFilterWidth - 1 - convInfo.padInfo.left;
        const avgMultiplier = 1 / (filterDepth * filterHeight * filterWidth);
        this.userCode = `
      const ivec3 pads = ivec3(${padFront}, ${padTop}, ${padLeft});
      const float avgMultiplier = float(${avgMultiplier});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${effectiveFilterDepth};
            wD += ${dilationDepth}) {
          float dyD = float(dyDCorner + wD) / ${strideDepth}.0;

          if (dyD < 0.0 || dyD >= ${convInfo.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${effectiveFilterHeight};
              wR += ${dilationHeight}) {
            float dyR = float(dyRCorner + wR) / ${strideHeight}.0;

            if (dyR < 0.0 || dyR >= ${convInfo.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${effectiveFilterWidth};
                wC += ${dilationWidth}) {
              float dyC = float(dyCCorner + wC) / ${strideWidth}.0;

              if (dyC < 0.0 || dyC >= ${convInfo.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `;
    }
}
//# sourceMappingURL=avg_pool_backprop_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/backend_webgl.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/backend_webgl.js ***!
  \***************************************************************************/
/*! exports provided: EPSILON_FLOAT32, EPSILON_FLOAT16, getBinaryCache, MATMUL_SHARED_DIM_THRESHOLD, MathBackendWebGL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EPSILON_FLOAT32", function() { return EPSILON_FLOAT32; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EPSILON_FLOAT16", function() { return EPSILON_FLOAT16; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBinaryCache", function() { return getBinaryCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MATMUL_SHARED_DIM_THRESHOLD", function() { return MATMUL_SHARED_DIM_THRESHOLD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MathBackendWebGL", function() { return MathBackendWebGL; });
/* harmony import */ var _flags_webgl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flags_webgl */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/flags_webgl.js");
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _kernel_utils_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./kernel_utils/shared */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernel_utils/shared.js");
/* harmony import */ var _addn_gpu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addn_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/addn_gpu.js");
/* harmony import */ var _addn_packed_gpu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addn_packed_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/addn_packed_gpu.js");
/* harmony import */ var _argminmax_gpu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./argminmax_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/argminmax_gpu.js");
/* harmony import */ var _argminmax_packed_gpu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./argminmax_packed_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/argminmax_packed_gpu.js");
/* harmony import */ var _avg_pool_backprop_gpu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./avg_pool_backprop_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/avg_pool_backprop_gpu.js");
/* harmony import */ var _binaryop_gpu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./binaryop_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/binaryop_gpu.js");
/* harmony import */ var _binaryop_packed_gpu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./binaryop_packed_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/binaryop_packed_gpu.js");
/* harmony import */ var _canvas_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./canvas_util */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/canvas_util.js");
/* harmony import */ var _clip_gpu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./clip_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/clip_gpu.js");
/* harmony import */ var _clip_packed_gpu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./clip_packed_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/clip_packed_gpu.js");
/* harmony import */ var _complex_abs_gpu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./complex_abs_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/complex_abs_gpu.js");
/* harmony import */ var _conv_backprop_gpu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./conv_backprop_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/conv_backprop_gpu.js");
/* harmony import */ var _conv_backprop_gpu_depthwise__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./conv_backprop_gpu_depthwise */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/conv_backprop_gpu_depthwise.js");
/* harmony import */ var _conv_gpu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./conv_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/conv_gpu.js");
/* harmony import */ var _conv_gpu_depthwise__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./conv_gpu_depthwise */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/conv_gpu_depthwise.js");
/* harmony import */ var _conv_packed_gpu_depthwise__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./conv_packed_gpu_depthwise */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/conv_packed_gpu_depthwise.js");
/* harmony import */ var _crop_and_resize_gpu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./crop_and_resize_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/crop_and_resize_gpu.js");
/* harmony import */ var _cumsum_gpu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./cumsum_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/cumsum_gpu.js");
/* harmony import */ var _decode_matrix_gpu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./decode_matrix_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/decode_matrix_gpu.js");
/* harmony import */ var _decode_matrix_packed_gpu__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./decode_matrix_packed_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/decode_matrix_packed_gpu.js");
/* harmony import */ var _depth_to_space_gpu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./depth_to_space_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/depth_to_space_gpu.js");
/* harmony import */ var _diag_gpu__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./diag_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/diag_gpu.js");
/* harmony import */ var _encode_float_gpu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./encode_float_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/encode_float_gpu.js");
/* harmony import */ var _encode_float_packed_gpu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./encode_float_packed_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/encode_float_packed_gpu.js");
/* harmony import */ var _encode_matrix_gpu__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./encode_matrix_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/encode_matrix_gpu.js");
/* harmony import */ var _encode_matrix_packed_gpu__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./encode_matrix_packed_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/encode_matrix_packed_gpu.js");
/* harmony import */ var _fill_gpu__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./fill_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/fill_gpu.js");
/* harmony import */ var _gather_gpu__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./gather_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/gather_gpu.js");
/* harmony import */ var _gather_nd_gpu__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./gather_nd_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/gather_nd_gpu.js");
/* harmony import */ var _gpgpu_context__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./gpgpu_context */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/gpgpu_context.js");
/* harmony import */ var _gpgpu_math__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./gpgpu_math */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/gpgpu_math.js");
/* harmony import */ var _im2col_packed_gpu__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./im2col_packed_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/im2col_packed_gpu.js");
/* harmony import */ var _lrn_gpu__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./lrn_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/lrn_gpu.js");
/* harmony import */ var _lrn_grad_gpu__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./lrn_grad_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/lrn_grad_gpu.js");
/* harmony import */ var _lrn_packed_gpu__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./lrn_packed_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/lrn_packed_gpu.js");
/* harmony import */ var _max_pool_backprop_gpu__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./max_pool_backprop_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/max_pool_backprop_gpu.js");
/* harmony import */ var _mulmat_packed_gpu__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./mulmat_packed_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/mulmat_packed_gpu.js");
/* harmony import */ var _multinomial_gpu__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./multinomial_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/multinomial_gpu.js");
/* harmony import */ var _onehot_gpu__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./onehot_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/onehot_gpu.js");
/* harmony import */ var _pack_gpu__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./pack_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/pack_gpu.js");
/* harmony import */ var _pad_gpu__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./pad_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/pad_gpu.js");
/* harmony import */ var _pad_packed_gpu__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./pad_packed_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/pad_packed_gpu.js");
/* harmony import */ var _pool_gpu__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./pool_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/pool_gpu.js");
/* harmony import */ var _reduce_gpu__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./reduce_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/reduce_gpu.js");
/* harmony import */ var _reshape_packed_gpu__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./reshape_packed_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/reshape_packed_gpu.js");
/* harmony import */ var _resize_bilinear_backprop_gpu__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./resize_bilinear_backprop_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/resize_bilinear_backprop_gpu.js");
/* harmony import */ var _resize_bilinear_gpu__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./resize_bilinear_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/resize_bilinear_gpu.js");
/* harmony import */ var _resize_bilinear_packed_gpu__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./resize_bilinear_packed_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/resize_bilinear_packed_gpu.js");
/* harmony import */ var _resize_nearest_neighbor_backprop_gpu__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./resize_nearest_neighbor_backprop_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/resize_nearest_neighbor_backprop_gpu.js");
/* harmony import */ var _resize_nearest_neighbor_gpu__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./resize_nearest_neighbor_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/resize_nearest_neighbor_gpu.js");
/* harmony import */ var _reverse_gpu__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./reverse_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/reverse_gpu.js");
/* harmony import */ var _reverse_packed_gpu__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./reverse_packed_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/reverse_packed_gpu.js");
/* harmony import */ var _scatter_gpu__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./scatter_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/scatter_gpu.js");
/* harmony import */ var _segment_gpu__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./segment_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/segment_gpu.js");
/* harmony import */ var _select_gpu__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./select_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/select_gpu.js");
/* harmony import */ var _slice_gpu__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./slice_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/slice_gpu.js");
/* harmony import */ var _slice_packed_gpu__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./slice_packed_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/slice_packed_gpu.js");
/* harmony import */ var _strided_slice_gpu__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./strided_slice_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/strided_slice_gpu.js");
/* harmony import */ var _tex_util__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./tex_util */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/tex_util.js");
/* harmony import */ var _texture_manager__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./texture_manager */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/texture_manager.js");
/* harmony import */ var _tile_gpu__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./tile_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/tile_gpu.js");
/* harmony import */ var _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./unaryop_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/unaryop_gpu.js");
/* harmony import */ var _unaryop_packed_gpu__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./unaryop_packed_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/unaryop_packed_gpu.js");
/* harmony import */ var _unpack_gpu__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./unpack_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/unpack_gpu.js");
/* harmony import */ var _webgl_util__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./webgl_util */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/webgl_util.js");
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
// Import webgl flags.






const { segment_util } = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["backend_util"];
const split = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["kernel_impls"].split;
const tile = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["kernel_impls"].tile;
const topkImpl = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["kernel_impls"].topkImpl;
const whereImpl = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["kernel_impls"].whereImpl;






































































const EPSILON_FLOAT32 = 1e-7;
const EPSILON_FLOAT16 = 1e-4;
const binaryCaches = {};
function getBinaryCache(webGLVersion) {
    if (webGLVersion in binaryCaches) {
        return binaryCaches[webGLVersion];
    }
    binaryCaches[webGLVersion] = {};
    return binaryCaches[webGLVersion];
}
function mapActivationToShaderProgram(activation, packed = false) {
    if (activation === 'linear') {
        if (packed) {
            return _unaryop_packed_gpu__WEBPACK_IMPORTED_MODULE_65__["LINEAR"];
        }
        return _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["LINEAR"];
    }
    else if (activation === 'relu') {
        if (packed) {
            return _unaryop_packed_gpu__WEBPACK_IMPORTED_MODULE_65__["RELU"];
        }
        return _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["RELU"];
    }
    else if (activation === 'elu') {
        if (packed) {
            return _unaryop_packed_gpu__WEBPACK_IMPORTED_MODULE_65__["ELU"];
        }
        return _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["ELU"];
    }
    else if (activation === 'relu6') {
        if (packed) {
            return _unaryop_packed_gpu__WEBPACK_IMPORTED_MODULE_65__["RELU6"];
        }
        return _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["RELU6"];
    }
    else if (activation === 'prelu') {
        if (packed) {
            return _binaryop_packed_gpu__WEBPACK_IMPORTED_MODULE_9__["PRELU"];
        }
        return _binaryop_gpu__WEBPACK_IMPORTED_MODULE_8__["PRELU"];
    }
    throw new Error(`Activation ${activation} has not been implemented for the WebGL backend.`);
}
// Empirically determined constant used to determine size threshold for handing
// off execution to the CPU.
const CPU_HANDOFF_SIZE_THRESHOLD = 128;
// Empirically determined constant used to decide the number of MB on GPU
// before we warn about high memory use. The MB are this constant * screen area
// * dpi / 1024 / 1024.
const BEFORE_PAGING_CONSTANT = 600;
function numMBBeforeWarning() {
    if (Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().global.screen == null) {
        return 1024; // 1 GB.
    }
    return (Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().global.screen.height * Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().global.screen.width *
        window.devicePixelRatio) *
        BEFORE_PAGING_CONSTANT / 1024 / 1024;
}
// Empirically determined minimal shared dimension in matmul before we forward
// to a.mul(b).sum() in order to take advantage of GPU parallelism. See
// https://github.com/tensorflow/tfjs-core/pull/1379 for benchmarks.
const MATMUL_SHARED_DIM_THRESHOLD = 1000;
class MathBackendWebGL extends _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["KernelBackend"] {
    constructor(gpgpu) {
        super();
        // Maps data ids that have a pending read operation, to list of subscribers.
        this.pendingRead = new WeakMap();
        // List of data ids that are scheduled for disposal, but are waiting on a
        // pending read operation.
        this.pendingDisposal = new WeakSet();
        // Used to count the number of 'shallow' sliced tensors that point to the
        // same data id.
        this.dataRefCount = new WeakMap();
        this.numBytesInGPU = 0;
        // Accumulated time spent (including blocking) in uploading data to webgl.
        this.uploadWaitMs = 0;
        // Accumulated time spent (including blocking in downloading data from webgl.
        this.downloadWaitMs = 0;
        this.warnedAboutMemory = false;
        this.warnedAboutCPUBackend = false;
        this.pendingDeletes = 0;
        this.disposed = false;
        if (!Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().getBool('HAS_WEBGL')) {
            throw new Error('WebGL is not supported on this device');
        }
        if (gpgpu == null) {
            const gl = Object(_canvas_util__WEBPACK_IMPORTED_MODULE_10__["getWebGLContext"])(Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().getNumber('WEBGL_VERSION'));
            this.binaryCache = getBinaryCache(Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().getNumber('WEBGL_VERSION'));
            this.gpgpu = new _gpgpu_context__WEBPACK_IMPORTED_MODULE_32__["GPGPUContext"](gl);
            this.canvas = gl.canvas;
            this.gpgpuCreatedLocally = true;
        }
        else {
            this.gpgpu = gpgpu;
            this.binaryCache = {};
            this.gpgpuCreatedLocally = false;
            this.canvas = gpgpu.gl.canvas;
        }
        this.textureManager = new _texture_manager__WEBPACK_IMPORTED_MODULE_62__["TextureManager"](this.gpgpu);
        this.numMBBeforeWarning = numMBBeforeWarning();
        this.texData = new _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["DataStorage"](this, Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["engine"])());
    }
    numDataIds() {
        return this.texData.numDataIds() +
            (this.cpuBackend ? this.cpuBackend.numDataIds() : 0) -
            this.pendingDeletes;
    }
    write(values, shape, dtype) {
        if (Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().getBool('WEBGL_CHECK_NUMERICAL_PROBLEMS') ||
            Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().getBool('DEBUG')) {
            this.checkNumericalProblems(values);
        }
        if (dtype === 'complex64' && values != null) {
            throw new Error(`Cannot write to a complex64 dtype. ` +
                `Please use tf.complex(real, imag).`);
        }
        const dataId = {};
        this.texData.set(dataId, {
            shape,
            dtype,
            values,
            usage: _tex_util__WEBPACK_IMPORTED_MODULE_61__["TextureUsage"].UPLOAD,
            refCount: 1,
            complexParentRefCount: 0
        });
        return dataId;
    }
    /** Increase refCount of a `TextureData`. */
    incRef(dataId) {
        const texData = this.texData.get(dataId);
        texData.refCount++;
    }
    /** Decrease refCount of a `TextureData`. */
    decRef(dataId) {
        if (this.texData.has(dataId)) {
            const texData = this.texData.get(dataId);
            texData.refCount--;
        }
    }
    move(dataId, values, shape, dtype) {
        if (Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().getBool('DEBUG')) {
            this.checkNumericalProblems(values);
        }
        if (dtype === 'complex64') {
            throw new Error(`Cannot write to a complex64 dtype. ` +
                `Please use tf.complex(real, imag).`);
        }
        this.texData.set(dataId, {
            shape,
            dtype,
            values,
            usage: _tex_util__WEBPACK_IMPORTED_MODULE_61__["TextureUsage"].UPLOAD,
            refCount: 1,
            complexParentRefCount: 0
        });
    }
    disposeIntermediateTensorInfo(tensorInfo) {
        const dataId = tensorInfo.dataId;
        if (this.texData.has(dataId)) {
            const textureData = this.texData.get(dataId);
            textureData.refCount--;
            if (textureData.refCount < 1) {
                this.disposeData(dataId);
            }
        }
    }
    readSync(dataId) {
        const texData = this.texData.get(dataId);
        const { values, dtype, complexTensorInfos, slice, shape, isPacked } = texData;
        // The presence of `slice` indicates this tensor is a shallow slice of a
        // different tensor, and is using that original tensor's texture. Run
        // `clone` in order to copy that texture and read from it.
        if (slice != null) {
            let program;
            if (isPacked) {
                program = new _unaryop_packed_gpu__WEBPACK_IMPORTED_MODULE_65__["UnaryOpPackedProgram"](shape, _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["CLONE"]);
            }
            else {
                program = new _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["UnaryOpProgram"](shape, _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["CLONE"]);
            }
            const res = this.runWebGLProgram(program, [{ dataId, shape, dtype }], dtype);
            const data = this.readSync(res.dataId);
            this.disposeIntermediateTensorInfo(res);
            return data;
        }
        if (values != null) {
            return this.convertAndCacheOnCPU(dataId);
        }
        if (dtype === 'string') {
            return values;
        }
        const shouldTimeProgram = this.activeTimers != null;
        let start;
        if (shouldTimeProgram) {
            start = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["util"].now();
        }
        let result;
        if (dtype === 'complex64') {
            const realValues = this.readSync(complexTensorInfos.real.dataId);
            const imagValues = this.readSync(complexTensorInfos.imag.dataId);
            result = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["backend_util"].mergeRealAndImagArrays(realValues, imagValues);
        }
        else {
            result = this.getValuesFromTexture(dataId);
        }
        if (shouldTimeProgram) {
            this.downloadWaitMs += _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["util"].now() - start;
        }
        return this.convertAndCacheOnCPU(dataId, result);
    }
    async read(dataId) {
        if (this.pendingRead.has(dataId)) {
            const subscribers = this.pendingRead.get(dataId);
            return new Promise(resolve => subscribers.push(resolve));
        }
        const texData = this.texData.get(dataId);
        const { values, shape, slice, dtype, complexTensorInfos, isPacked } = texData;
        // The presence of `slice` indicates this tensor is a shallow slice of a
        // different tensor, and is using that original tensor's texture. Run
        // `clone` in order to copy that texture and read from it.
        if (slice != null) {
            let program;
            if (isPacked) {
                program = new _unaryop_packed_gpu__WEBPACK_IMPORTED_MODULE_65__["UnaryOpPackedProgram"](shape, _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["CLONE"]);
            }
            else {
                program = new _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["UnaryOpProgram"](shape, _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["CLONE"]);
            }
            const res = this.runWebGLProgram(program, [{ dataId, shape, dtype }], dtype);
            const data = this.read(res.dataId);
            this.disposeIntermediateTensorInfo(res);
            return data;
        }
        if (values != null) {
            return this.convertAndCacheOnCPU(dataId);
        }
        if (!Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().getBool('WEBGL_DOWNLOAD_FLOAT_ENABLED') &&
            Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().getNumber('WEBGL_VERSION') === 2) {
            throw new Error(`tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and ` +
                `WEBGL_VERSION=2 not yet supported.`);
        }
        let buffer = null;
        let tmpDownloadTarget;
        if (dtype !== 'complex64' && Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().get('WEBGL_BUFFER_SUPPORTED')) {
            // Possibly copy the texture into a buffer before inserting a fence.
            tmpDownloadTarget = this.decode(dataId);
            const tmpData = this.texData.get(tmpDownloadTarget.dataId);
            buffer = this.gpgpu.createBufferFromTexture(tmpData.texture, ..._tex_util__WEBPACK_IMPORTED_MODULE_61__["getDenseTexShape"](shape));
        }
        this.pendingRead.set(dataId, []);
        if (dtype !== 'complex64') {
            // Create a fence and wait for it to resolve.
            await this.gpgpu.createAndWaitForFence();
        }
        // Download the values from the GPU.
        let vals;
        if (dtype === 'complex64') {
            const ps = await Promise.all([
                this.read(complexTensorInfos.real.dataId),
                this.read(complexTensorInfos.imag.dataId)
            ]);
            const realValues = ps[0];
            const imagValues = ps[1];
            vals = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["backend_util"].mergeRealAndImagArrays(realValues, imagValues);
        }
        else if (buffer == null) {
            vals = this.getValuesFromTexture(dataId);
        }
        else {
            const size = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["util"].sizeFromShape(shape);
            vals = this.gpgpu.downloadFloat32MatrixFromBuffer(buffer, size);
        }
        if (tmpDownloadTarget != null) {
            this.disposeIntermediateTensorInfo(tmpDownloadTarget);
        }
        const dTypeVals = this.convertAndCacheOnCPU(dataId, vals);
        const subscribers = this.pendingRead.get(dataId);
        this.pendingRead.delete(dataId);
        // Notify all pending reads.
        subscribers.forEach(resolve => resolve(dTypeVals));
        if (this.pendingDisposal.has(dataId)) {
            this.pendingDisposal.delete(dataId);
            this.disposeData(dataId);
            this.pendingDeletes--;
        }
        return dTypeVals;
    }
    checkNumericalProblems(values) {
        if (values == null) {
            return;
        }
        for (let i = 0; i < values.length; i++) {
            const num = values[i];
            if (!_webgl_util__WEBPACK_IMPORTED_MODULE_67__["canBeRepresented"](num)) {
                if (Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().getBool('WEBGL_RENDER_FLOAT32_CAPABLE')) {
                    throw Error(`The value ${num} cannot be represented with your ` +
                        `current settings. Consider enabling float32 rendering: ` +
                        `'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'`);
                }
                throw Error(`The value ${num} cannot be represented on this device.`);
            }
        }
    }
    getValuesFromTexture(dataId) {
        const { shape, dtype, isPacked } = this.texData.get(dataId);
        const size = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["util"].sizeFromShape(shape);
        if (Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().getBool('WEBGL_DOWNLOAD_FLOAT_ENABLED')) {
            const tmpTarget = this.decode(dataId);
            const tmpData = this.texData.get(tmpTarget.dataId);
            const vals = this.gpgpu
                .downloadMatrixFromPackedTexture(tmpData.texture, ..._tex_util__WEBPACK_IMPORTED_MODULE_61__["getDenseTexShape"](shape))
                .subarray(0, size);
            this.disposeIntermediateTensorInfo(tmpTarget);
            return vals;
        }
        const shouldUsePackedProgram = Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().getBool('WEBGL_PACK') && isPacked === true;
        const outputShape = shouldUsePackedProgram ? _webgl_util__WEBPACK_IMPORTED_MODULE_67__["getShapeAs3D"](shape) : shape;
        const program = shouldUsePackedProgram ?
            new _encode_float_packed_gpu__WEBPACK_IMPORTED_MODULE_26__["EncodeFloatPackedProgram"](outputShape) :
            new _encode_float_gpu__WEBPACK_IMPORTED_MODULE_25__["EncodeFloatProgram"](outputShape);
        const output = this.runWebGLProgram(program, [{ shape: outputShape, dtype, dataId }], 'float32');
        const tmpData = this.texData.get(output.dataId);
        const vals = this.gpgpu
            .downloadByteEncodedFloatMatrixFromOutputTexture(tmpData.texture, tmpData.texShape[0], tmpData.texShape[1])
            .subarray(0, size);
        this.disposeIntermediateTensorInfo(output);
        return vals;
    }
    async time(f) {
        const oldActiveTimers = this.activeTimers;
        const newActiveTimers = [];
        let outerMostTime = false;
        if (this.programTimersStack == null) {
            this.programTimersStack = newActiveTimers;
            outerMostTime = true;
        }
        else {
            this.activeTimers.push(newActiveTimers);
        }
        this.activeTimers = newActiveTimers;
        f();
        // needing to split these up because util.flatten only accepts certain types
        const flattenedActiveTimerQueries = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["util"].flatten(this.activeTimers.map((d) => d.query))
            .filter(d => d != null);
        const flattenedActiveTimerNames = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["util"].flatten(this.activeTimers.map((d) => d.name))
            .filter(d => d != null);
        this.activeTimers = oldActiveTimers;
        if (outerMostTime) {
            this.programTimersStack = null;
        }
        const res = {
            uploadWaitMs: this.uploadWaitMs,
            downloadWaitMs: this.downloadWaitMs,
            kernelMs: null,
            wallMs: null // will be filled by the engine
        };
        if (Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().getNumber('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE') > 0) {
            const kernelMs = await Promise.all(flattenedActiveTimerQueries);
            res['kernelMs'] = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["util"].sum(kernelMs);
            res['getExtraProfileInfo'] = () => kernelMs.map((d, i) => ({ name: flattenedActiveTimerNames[i], ms: d }))
                .map(d => `${d.name}: ${d.ms}`)
                .join(', ');
        }
        else {
            res['kernelMs'] = {
                error: 'WebGL query timers are not supported in this environment.'
            };
        }
        this.uploadWaitMs = 0;
        this.downloadWaitMs = 0;
        return res;
    }
    memory() {
        return {
            unreliable: false,
            numBytesInGPU: this.numBytesInGPU,
            numBytesInGPUAllocated: this.textureManager.numBytesAllocated,
            numBytesInGPUFree: this.textureManager.numBytesFree
        };
    }
    startTimer() {
        if (Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().getNumber('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE') > 0) {
            return this.gpgpu.beginQuery();
        }
        return { startMs: _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["util"].now(), endMs: null };
    }
    endTimer(query) {
        if (Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().getNumber('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE') > 0) {
            this.gpgpu.endQuery();
            return query;
        }
        query.endMs = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["util"].now();
        return query;
    }
    async getQueryTime(query) {
        if (Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().getNumber('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE') > 0) {
            return this.gpgpu.waitForQueryAndGetTime(query);
        }
        const timerQuery = query;
        return timerQuery.endMs - timerQuery.startMs;
    }
    disposeData(dataId) {
        if (this.pendingDisposal.has(dataId)) {
            return;
        }
        if (this.pendingRead.has(dataId)) {
            this.pendingDisposal.add(dataId);
            this.pendingDeletes++;
            return;
        }
        // No-op if already disposed.
        if (!this.texData.has(dataId)) {
            return;
        }
        // Trying to dispose a textureData that has a 'kept' refCount, e.g. trying
        // to dispose a tensor whose data bucket is shared with a complex tensor. In
        // this case we are removing a reference to the textureData, but we
        // shouldn't actually dispose the texture.
        if (this.texData.get(dataId).complexParentRefCount > 0) {
            this.texData.get(dataId).refCount--;
            return;
        }
        this.releaseGPUData(dataId);
        const { complexTensorInfos } = this.texData.get(dataId);
        if (complexTensorInfos != null) {
            this.texData.get(complexTensorInfos.real.dataId).complexParentRefCount--;
            this.disposeIntermediateTensorInfo(complexTensorInfos.real);
            this.texData.get(complexTensorInfos.imag.dataId).complexParentRefCount--;
            this.disposeIntermediateTensorInfo(complexTensorInfos.imag);
        }
        this.texData.delete(dataId);
    }
    releaseGPUData(dataId) {
        const { texture, dtype, texShape, usage, isPacked, slice } = this.texData.get(dataId);
        const key = slice && slice.origDataId || dataId;
        const refCount = this.dataRefCount.get(key);
        if (refCount > 1) {
            this.dataRefCount.set(key, refCount - 1);
        }
        else {
            this.dataRefCount.delete(key);
            if (texture != null) {
                this.numBytesInGPU -= this.computeBytes(texShape, dtype);
                this.textureManager.releaseTexture(texture, texShape, usage, isPacked);
            }
        }
        const texData = this.texData.get(dataId);
        texData.texture = null;
        texData.texShape = null;
        texData.isPacked = false;
        texData.slice = null;
    }
    getTexture(dataId) {
        this.uploadToGPU(dataId);
        return this.texData.get(dataId).texture;
    }
    /**
     * Returns internal information for the specific data bucket. Used in unit
     * tests.
     */
    getDataInfo(dataId) {
        return this.texData.get(dataId);
    }
    getCPUBackend() {
        if (!Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().getBool('WEBGL_CPU_FORWARD')) {
            return null;
        }
        if (this.cpuBackend == null) {
            this.cpuBackend = Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["engine"])().findBackend('cpu');
        }
        return this.cpuBackend;
    }
    /*
    Tests whether all the inputs to an op are small and on the CPU. This heuristic
    determines when it would be faster to execute a kernel on the CPU. WebGL
    kernels opt into running this check and forwarding when appropriate.
    TODO(https://github.com/tensorflow/tfjs/issues/872): Develop a more
    sustainable strategy for optimizing backend execution of ops.
     */
    shouldExecuteOnCPU(inputs, sizeThreshold = CPU_HANDOFF_SIZE_THRESHOLD) {
        const cpuBackend = this.getCPUBackend();
        if (!this.warnedAboutCPUBackend && cpuBackend == null) {
            console.warn('Your application contains ops that are small enough to be ' +
                'executed on the CPU backend, however the CPU backend cannot ' +
                'be found. Consider importing the CPU backend ' +
                '(@tensorflow/tfjs-backend-cpu) for better performance.');
            this.warnedAboutCPUBackend = true;
        }
        return cpuBackend != null &&
            inputs.every(input => this.texData.get(input.dataId).texture == null &&
                _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["util"].sizeFromShape(input.shape) < sizeThreshold);
    }
    getGPGPUContext() {
        return this.gpgpu;
    }
    slice(x, begin, size) {
        if (this.shouldExecuteOnCPU([x])) {
            const outValues = Object(_kernel_utils_shared__WEBPACK_IMPORTED_MODULE_2__["sliceImplCPU"])(this.texData.get(x.dataId).values, begin, size, x.shape, x.dtype);
            return this.makeOutput(size, x.dtype, outValues);
        }
        // Short-circuit computation if the slice is zero-sized.
        if (_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["util"].sizeFromShape(size) === 0) {
            return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["tensor"])([], size, x.dtype);
        }
        const { isPacked } = this.texData.get(x.dataId);
        const isContinous = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["slice_util"].isSliceContinous(x.shape, begin, size);
        if (isPacked || !isContinous) {
            const program = Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().getBool('WEBGL_PACK_ARRAY_OPERATIONS') ?
                new _slice_packed_gpu__WEBPACK_IMPORTED_MODULE_59__["SlicePackedProgram"](size) :
                new _slice_gpu__WEBPACK_IMPORTED_MODULE_58__["SliceProgram"](size);
            const customSetup = program.getCustomSetupFunc(begin);
            return this.compileAndRun(program, [x], null, customSetup);
        }
        this.uploadToGPU(x.dataId);
        return this.shallowSlice(x, begin, size);
    }
    shallowSlice(x, begin, size) {
        const xTexData = this.texData.get(x.dataId);
        const t = this.makeOutput(size, x.dtype);
        const newTexData = this.texData.get(t.dataId);
        // Copy texture data from the original tensor.
        Object.assign(newTexData, xTexData);
        newTexData.shape = size;
        newTexData.dtype = x.dtype;
        let flatOffset = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["slice_util"].computeFlatOffset(begin, x.strides);
        if (xTexData.slice) {
            // We are slicing an already sliced tensor, so we have to accumulate
            // the offset.
            flatOffset += xTexData.slice.flatOffset;
        }
        newTexData.slice = {
            flatOffset,
            // Point to the original dataId, which is used to do ref counting.
            origDataId: xTexData.slice && xTexData.slice.origDataId || x.dataId
        };
        // Increase the ref count for that data bucket.
        const refCount = this.dataRefCount.get(newTexData.slice.origDataId) || 1;
        this.dataRefCount.set(newTexData.slice.origDataId, refCount + 1);
        return t;
    }
    stridedSlice(x, begin, end, strides) {
        const cpuRes = this.tryRunOnCpuOrThrow([x], () => this.cpuBackend.stridedSlice(x, begin, end, strides));
        if (cpuRes) {
            return cpuRes;
        }
        const outShape = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["slice_util"].computeOutShape(begin, end, strides);
        if (outShape.some(axis => axis === 0)) {
            return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["tensor"])([], outShape);
        }
        const program = new _strided_slice_gpu__WEBPACK_IMPORTED_MODULE_60__["StridedSliceProgram"](begin, strides, outShape);
        return this.compileAndRun(program, [x]);
    }
    reverse(x, axis) {
        const program = Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().getBool('WEBGL_PACK_ARRAY_OPERATIONS') ?
            new _reverse_packed_gpu__WEBPACK_IMPORTED_MODULE_54__["ReversePackedProgram"](x.shape, axis) :
            new _reverse_gpu__WEBPACK_IMPORTED_MODULE_53__["ReverseProgram"](x.shape, axis);
        return this.compileAndRun(program, [x]);
    }
    neg(x) {
        const cpuRes = this.tryRunOnCpuOrThrow([x], () => this.cpuBackend.neg(x));
        if (cpuRes) {
            return cpuRes;
        }
        if (Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().getBool('WEBGL_PACK_UNARY_OPERATIONS')) {
            return this.packedUnaryOp(x, _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["NEG"], x.dtype);
        }
        const program = new _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["UnaryOpProgram"](x.shape, _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["NEG"]);
        return this.compileAndRun(program, [x]);
    }
    batchMatMul(a, b, transposeA, transposeB) {
        const outerShapeA = transposeA ? a.shape[2] : a.shape[1];
        const outerShapeB = transposeB ? b.shape[1] : b.shape[2];
        const sharedDim = transposeA ? a.shape[1] : a.shape[2];
        const batch = Math.max(a.shape[0], b.shape[0]);
        // Since the matrices are vectors, it is faster to call mul().sum()
        // because sum() is O(sqrt(N)) due to divide-and-conquer.
        if ((outerShapeA === 1 || outerShapeB === 1) &&
            sharedDim > MATMUL_SHARED_DIM_THRESHOLD) {
            if (transposeA) {
                a = Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["transpose"])(a, [0, 2, 1]);
            }
            if (transposeB) {
                b = Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["transpose"])(b, [0, 2, 1]);
            }
            const a3D = outerShapeB === 1 ? a : a.as3D(batch, sharedDim, 1);
            const axis = outerShapeB === 1 ? 2 : 1;
            const b3D = outerShapeB === 1 ? b.as3D(batch, 1, sharedDim) : b;
            // TODO(annxingyuan): Call multiply directly as part of batchMatMul
            // modularization.
            const product = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["mul"](a3D, b3D);
            return product.sum(axis, true /* keepDims */);
        }
        const dtype = Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["upcastType"])(a.dtype, b.dtype);
        const program = new _mulmat_packed_gpu__WEBPACK_IMPORTED_MODULE_39__["MatMulPackedProgram"](a.shape, b.shape, [batch, outerShapeA, outerShapeB], transposeA, transposeB);
        return this.compileAndRun(program, [a, b], dtype);
    }
    fusedBatchMatMul({ a, b, transposeA, transposeB, bias, activation, preluActivationWeights }) {
        const outerShapeA = transposeA ? a.shape[2] : a.shape[1];
        const outerShapeB = transposeB ? b.shape[1] : b.shape[2];
        const batch = Math.max(a.shape[0], b.shape[0]);
        const dtype = Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["upcastType"])(a.dtype, b.dtype);
        const hasBias = bias != null;
        const hasPreluActivationWeights = preluActivationWeights != null;
        const fusedActivation = activation ? mapActivationToShaderProgram(activation, true) : null;
        const program = new _mulmat_packed_gpu__WEBPACK_IMPORTED_MODULE_39__["MatMulPackedProgram"](a.shape, b.shape, [batch, outerShapeA, outerShapeB], transposeA, transposeB, hasBias, fusedActivation, hasPreluActivationWeights);
        const inputs = [a, b];
        if (bias) {
            inputs.push(bias);
        }
        if (preluActivationWeights) {
            inputs.push(preluActivationWeights);
        }
        return this.compileAndRun(program, inputs, dtype);
    }
    localResponseNormalization4D(x, radius, bias, alpha, beta) {
        const program = Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().getBool('WEBGL_PACK_NORMALIZATION') ?
            new _lrn_packed_gpu__WEBPACK_IMPORTED_MODULE_37__["LRNPackedProgram"](x.shape, radius, bias, alpha, beta) :
            new _lrn_gpu__WEBPACK_IMPORTED_MODULE_35__["LRNProgram"](x.shape, radius, bias, alpha, beta);
        return this.compileAndRun(program, [x]);
    }
    LRNGrad(dy, inputImage, outputImage, depthRadius, bias, alpha, beta) {
        const program = new _lrn_grad_gpu__WEBPACK_IMPORTED_MODULE_36__["LRNGradProgram"](inputImage.shape, depthRadius, bias, alpha, beta);
        return this.compileAndRun(program, [inputImage, outputImage, dy]);
    }
    tile(x, reps) {
        if (x.dtype === 'string') {
            const data = this.readSync(x.dataId);
            const decodedData = data.map(d => _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["util"].decodeString(d));
            const buf = Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["buffer"])(x.shape, x.dtype, decodedData);
            return tile(buf, reps);
        }
        const program = new _tile_gpu__WEBPACK_IMPORTED_MODULE_63__["TileProgram"](x.shape, reps);
        return this.compileAndRun(program, [x]);
    }
    pad(x, paddings, constantValue) {
        const program = Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().getBool('WEBGL_PACK_ARRAY_OPERATIONS') ?
            new _pad_packed_gpu__WEBPACK_IMPORTED_MODULE_44__["PadPackedProgram"](x.shape, paddings, constantValue) :
            new _pad_gpu__WEBPACK_IMPORTED_MODULE_43__["PadProgram"](x.shape, paddings, constantValue);
        return this.compileAndRun(program, [x]);
    }
    gather(x, indices, axis) {
        const cpuRes = this.tryRunOnCpuOrThrow([x, indices], () => this.cpuBackend.gather(x, indices, axis));
        if (cpuRes) {
            return cpuRes;
        }
        const program = new _gather_gpu__WEBPACK_IMPORTED_MODULE_30__["GatherProgram"](x.shape, indices.size, axis);
        return this.compileAndRun(program, [x, indices]);
    }
    batchToSpaceND(x, blockShape, crops) {
        _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["util"].assert(x.rank <= 4, () => 'batchToSpaceND for rank > 4 with a WebGL backend not ' +
            'implemented yet');
        const prod = blockShape.reduce((a, b) => a * b);
        const reshaped = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["backend_util"].getReshaped(x.shape, blockShape, prod);
        const permuted = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["backend_util"].getPermuted(reshaped.length, blockShape.length);
        const reshapedPermuted = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["backend_util"].getReshapedPermuted(x.shape, blockShape, prod);
        const sliceBeginCoords = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["backend_util"].getSliceBeginCoords(crops, blockShape.length);
        const sliceSize = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["backend_util"].getSliceSize(reshapedPermuted, crops, blockShape.length);
        return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["transpose"])(x.reshape(reshaped), permuted)
            .reshape(reshapedPermuted)
            .slice(sliceBeginCoords, sliceSize);
    }
    spaceToBatchND(x, blockShape, paddings) {
        _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["util"].assert(x.rank <= 4, () => 'spaceToBatchND for rank > 4 with a WebGL backend not ' +
            'implemented yet');
        const prod = blockShape.reduce((a, b) => a * b);
        const completePaddings = [[0, 0]];
        completePaddings.push(...paddings);
        for (let i = 1 + blockShape.length; i < x.shape.length; ++i) {
            completePaddings.push([0, 0]);
        }
        const paddedX = x.pad(completePaddings);
        const reshapedPaddedShape = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["backend_util"].getReshaped(paddedX.shape, blockShape, prod, false);
        const permutedReshapedPaddedPermutation = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["backend_util"].getPermuted(reshapedPaddedShape.length, blockShape.length, false);
        const flattenShape = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["backend_util"].getReshapedPermuted(paddedX.shape, blockShape, prod, false);
        const paddedXT = Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["transpose"])(paddedX.reshape(reshapedPaddedShape), permutedReshapedPaddedPermutation);
        return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["reshape"])(paddedXT, flattenShape);
    }
    reduce(x, reduceType, dtype) {
        const batchSize = x.shape[0];
        const inSize = x.shape[1];
        const windowSize = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["backend_util"].computeOptimalWindowSize(inSize);
        const outSize = Math.ceil(inSize / windowSize);
        const reduceInfo = { windowSize, inSize, batchSize, outSize };
        const program = new _reduce_gpu__WEBPACK_IMPORTED_MODULE_46__["ReduceProgram"](reduceInfo, reduceType);
        const output = this.compileAndRun(program, [x], dtype);
        // No need to run another GPGPU program.
        if (output.shape[1] === 1) {
            return output;
        }
        return this.reduce(output, reduceType, dtype);
    }
    argReduce(x, reduceType, bestIndicesA = null) {
        let batchSize = x.shape[0];
        let inSize = x.shape[1];
        if (bestIndicesA != null) {
            batchSize = bestIndicesA.shape[0];
            inSize = bestIndicesA.shape[1];
        }
        const windowSize = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["backend_util"].computeOptimalWindowSize(inSize);
        const reduceInfo = {
            windowSize,
            inSize,
            batchSize,
            outSize: Math.ceil(inSize / windowSize)
        };
        const program = new _argminmax_gpu__WEBPACK_IMPORTED_MODULE_5__["ArgMinMaxProgram"](reduceInfo, reduceType, bestIndicesA == null);
        const inputs = [x];
        if (bestIndicesA != null) {
            inputs.push(bestIndicesA);
        }
        const output = this.compileAndRun(program, inputs, 'int32');
        // No need to run another GPGPU program.
        if (output.shape[1] === 1) {
            return output;
        }
        return this.argReduce(x, reduceType, output);
    }
    argReducePacked(x, reduceType, bestIndicesA = null) {
        const inShape = bestIndicesA != null ? bestIndicesA.shape : x.shape;
        const inSize = inShape[inShape.length - 1];
        const windowSize = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["backend_util"].computeOptimalWindowSize(inSize);
        const program = new _argminmax_packed_gpu__WEBPACK_IMPORTED_MODULE_6__["ArgMinMaxPackedProgram"](inShape, windowSize, reduceType, bestIndicesA == null);
        const inputs = bestIndicesA == null ? [x] : [x, bestIndicesA];
        const output = this.compileAndRun(program, inputs, 'int32');
        if (output.rank === x.rank) {
            return this.argReducePacked(x, reduceType, output);
        }
        return output;
    }
    sum(x, axes) {
        _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["backend_util"].assertAxesAreInnerMostDims('sum', axes, x.rank);
        const [outShape, reduceShape] = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["backend_util"].computeOutAndReduceShapes(x.shape, axes);
        const inSize = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["util"].sizeFromShape(reduceShape);
        const a2D = x.as2D(-1, inSize);
        const outputDType = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["sumOutType"](x.dtype);
        return this.reduce(a2D, 'sum', outputDType).reshape(outShape);
    }
    prod(x, axes) {
        const cpuRes = this.tryRunOnCpuOrThrow([x], () => this.cpuBackend.prod(x, axes));
        if (cpuRes) {
            return cpuRes;
        }
        const [outShape, reduceShape] = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["backend_util"].computeOutAndReduceShapes(x.shape, axes);
        const inSize = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["util"].sizeFromShape(reduceShape);
        const a2D = x.as2D(-1, inSize);
        const outputDType = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["sumOutType"](x.dtype);
        return this.reduce(a2D, 'prod', outputDType).reshape(outShape);
    }
    unsortedSegmentSum(x, segmentIds, numSegments) {
        let axis = 0;
        const permutation = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["backend_util"].getAxesPermutation([axis], x.rank);
        let permutedX = x;
        if (permutation != null) {
            permutedX = Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["transpose"])(x, permutation);
            axis = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["backend_util"].getInnerMostAxes(1, x.rank)[0];
        }
        const outShape = segment_util.computeOutShape(permutedX.shape, axis, numSegments);
        const inSize = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["util"].sizeFromShape([permutedX.shape[axis]]);
        const a2D = permutedX.as2D(-1, inSize);
        const outputDType = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["sumOutType"](x.dtype);
        let result = this.segOpCompute(a2D, 'unsortedSegmentSum', segmentIds, outputDType, numSegments)
            .reshape(outShape);
        if (permutation != null) {
            result =
                Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["transpose"])(result, _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["backend_util"].getUndoAxesPermutation(permutation));
        }
        return result;
    }
    segOpCompute(x, segOpType, segmentIds, dtype, numSegments) {
        const batchSize = x.shape[0];
        const inSize = x.shape[1];
        const windowSize = segment_util.segOpComputeOptimalWindowSize(inSize, numSegments);
        const segOpInfo = { windowSize, inSize, batchSize, numSegments };
        const program = new _segment_gpu__WEBPACK_IMPORTED_MODULE_56__["SegmentOpProgram"](segOpInfo, segOpType);
        const output = this.compileAndRun(program, [x, segmentIds], dtype);
        // No need to run another GPGPU program.
        if (output.shape[1] === numSegments) {
            return output;
        }
        segmentIds = Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["range"])(0, numSegments).tile([inSize / windowSize]);
        return this.segOpCompute(output, segOpType, segmentIds, dtype, numSegments);
    }
    argMinMaxReduce(x, axis, reduceType) {
        const axes = [axis];
        _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["backend_util"].assertAxesAreInnerMostDims('arg' + reduceType.charAt(0).toUpperCase() + reduceType.slice(1), axes, x.rank);
        if (!Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().getBool('WEBGL_PACK_REDUCE') || x.rank <= 2) {
            const [outShape, reduceShape] = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["backend_util"].computeOutAndReduceShapes(x.shape, axes);
            const inSize = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["util"].sizeFromShape(reduceShape);
            const a2D = x.as2D(-1, inSize);
            return this.argReduce(a2D, reduceType).reshape(outShape);
        }
        return this.argReducePacked(x, reduceType);
    }
    argMin(x, axis) {
        return this.argMinMaxReduce(x, axis, 'min');
    }
    argMax(x, axis) {
        return this.argMinMaxReduce(x, axis, 'max');
    }
    cumsum(x, axis, exclusive, reverse) {
        if (axis !== x.rank - 1) {
            throw new Error(`WebGL cumsum shader expects an inner-most axis=${x.rank - 1} ` +
                `but got axis=${axis}`);
        }
        const size = x.shape[axis];
        let result = x;
        // Use cumsum parallel algorithm, ref:
        // https://developer.nvidia.com/gpugems/gpugems3/part-vi-gpu-computing/chapter-39-parallel-prefix-sum-scan-cuda
        for (let i = 0; i <= Math.ceil(Math.log2(size)) - 1; i++) {
            const program = new _cumsum_gpu__WEBPACK_IMPORTED_MODULE_20__["CumSumProgram"](x.shape, false, reverse);
            const customSetup = program.getCustomSetupFunc(i);
            const prevResult = result;
            result = this.compileAndRun(program, [result], result.dtype, customSetup);
            prevResult.dispose();
        }
        // For exclusive cumsum, shift the end result in the direction of sum and
        // add 0 to the front index.
        if (exclusive) {
            const program = new _cumsum_gpu__WEBPACK_IMPORTED_MODULE_20__["CumSumProgram"](x.shape, exclusive, reverse);
            const prevResult = result;
            result = this.compileAndRun(program, [result]);
            prevResult.dispose();
        }
        return result;
    }
    equal(a, b) {
        if (Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().getBool('WEBGL_PACK_BINARY_OPERATIONS')) {
            return this.packedBinaryOp(a, b, _binaryop_packed_gpu__WEBPACK_IMPORTED_MODULE_9__["EQUAL"], 'bool');
        }
        const program = new _binaryop_gpu__WEBPACK_IMPORTED_MODULE_8__["BinaryOpProgram"](_binaryop_gpu__WEBPACK_IMPORTED_MODULE_8__["EQUAL"], a.shape, b.shape);
        return this.compileAndRun(program, [a, b], 'bool');
    }
    less(a, b) {
        const cpuRes = this.tryRunOnCpuOrThrow([a, b], () => this.cpuBackend.less(a, b));
        if (cpuRes) {
            return cpuRes;
        }
        if (Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().getBool('WEBGL_PACK_BINARY_OPERATIONS')) {
            return this.packedBinaryOp(a, b, _binaryop_packed_gpu__WEBPACK_IMPORTED_MODULE_9__["LESS"], 'bool');
        }
        const program = new _binaryop_gpu__WEBPACK_IMPORTED_MODULE_8__["BinaryOpProgram"](_binaryop_gpu__WEBPACK_IMPORTED_MODULE_8__["LESS"], a.shape, b.shape);
        return this.compileAndRun(program, [a, b], 'bool');
    }
    lessEqual(a, b) {
        if (Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().getBool('WEBGL_PACK_BINARY_OPERATIONS')) {
            return this.packedBinaryOp(a, b, _binaryop_packed_gpu__WEBPACK_IMPORTED_MODULE_9__["LESS_EQUAL"], 'bool');
        }
        const program = new _binaryop_gpu__WEBPACK_IMPORTED_MODULE_8__["BinaryOpProgram"](_binaryop_gpu__WEBPACK_IMPORTED_MODULE_8__["LESS_EQUAL"], a.shape, b.shape);
        return this.compileAndRun(program, [a, b], 'bool');
    }
    greater(a, b) {
        const cpuRes = this.tryRunOnCpuOrThrow([a, b], () => this.cpuBackend.greater(a, b));
        if (cpuRes) {
            return cpuRes;
        }
        if (Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().getBool('WEBGL_PACK_BINARY_OPERATIONS')) {
            return this.packedBinaryOp(a, b, _binaryop_packed_gpu__WEBPACK_IMPORTED_MODULE_9__["GREATER"], 'bool');
        }
        const program = new _binaryop_gpu__WEBPACK_IMPORTED_MODULE_8__["BinaryOpProgram"](_binaryop_gpu__WEBPACK_IMPORTED_MODULE_8__["GREATER"], a.shape, b.shape);
        return this.compileAndRun(program, [a, b], 'bool');
    }
    greaterEqual(a, b) {
        if (Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().getBool('WEBGL_PACK_BINARY_OPERATIONS')) {
            return this.packedBinaryOp(a, b, _binaryop_packed_gpu__WEBPACK_IMPORTED_MODULE_9__["GREATER_EQUAL"], 'bool');
        }
        const program = new _binaryop_gpu__WEBPACK_IMPORTED_MODULE_8__["BinaryOpProgram"](_binaryop_gpu__WEBPACK_IMPORTED_MODULE_8__["GREATER_EQUAL"], a.shape, b.shape);
        return this.compileAndRun(program, [a, b], 'bool');
    }
    logicalNot(x) {
        const program = new _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["UnaryOpProgram"](x.shape, _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["LOGICAL_NOT"]);
        return this.compileAndRun(program, [x]);
    }
    logicalAnd(a, b) {
        if (Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().getBool('WEBGL_PACK_BINARY_OPERATIONS')) {
            return this.packedBinaryOp(a, b, _binaryop_packed_gpu__WEBPACK_IMPORTED_MODULE_9__["LOGICAL_AND"], 'bool');
        }
        const program = new _binaryop_gpu__WEBPACK_IMPORTED_MODULE_8__["BinaryOpProgram"](_binaryop_gpu__WEBPACK_IMPORTED_MODULE_8__["LOGICAL_AND"], a.shape, b.shape);
        return this.compileAndRun(program, [a, b], 'bool');
    }
    logicalOr(a, b) {
        if (Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().getBool('WEBGL_PACK_BINARY_OPERATIONS')) {
            return this.packedBinaryOp(a, b, _binaryop_packed_gpu__WEBPACK_IMPORTED_MODULE_9__["LOGICAL_OR"], 'bool');
        }
        const program = new _binaryop_gpu__WEBPACK_IMPORTED_MODULE_8__["BinaryOpProgram"](_binaryop_gpu__WEBPACK_IMPORTED_MODULE_8__["LOGICAL_OR"], a.shape, b.shape);
        return this.compileAndRun(program, [a, b], 'bool');
    }
    select(condition, a, b) {
        const program = new _select_gpu__WEBPACK_IMPORTED_MODULE_57__["SelectProgram"](condition.rank, a.shape, a.rank);
        return this.compileAndRun(program, [condition, a, b], Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["upcastType"])(a.dtype, b.dtype));
    }
    where(condition) {
        _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["backend_util"].warn('tf.where() in webgl locks the UI thread. ' +
            'Call tf.whereAsync() instead');
        const condVals = condition.dataSync();
        return whereImpl(condition.shape, condVals);
    }
    topk(x, k, sorted) {
        const xVals = x.dataSync();
        return topkImpl(xVals, x.shape, x.dtype, k, sorted);
    }
    min(x, axes) {
        _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["backend_util"].assertAxesAreInnerMostDims('min', axes, x.rank);
        const [outShape, reduceShape] = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["backend_util"].computeOutAndReduceShapes(x.shape, axes);
        const inSize = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["util"].sizeFromShape(reduceShape);
        const a2D = x.as2D(-1, inSize);
        return this.reduce(a2D, 'min', a2D.dtype).reshape(outShape);
    }
    minimum(a, b) {
        const cpuRes = this.tryRunOnCpuOrThrow([a, b], () => this.cpuBackend.minimum(a, b));
        if (cpuRes) {
            return cpuRes;
        }
        const program = Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().getBool('WEBGL_PACK_BINARY_OPERATIONS') ?
            new _binaryop_packed_gpu__WEBPACK_IMPORTED_MODULE_9__["BinaryOpPackedProgram"](_binaryop_packed_gpu__WEBPACK_IMPORTED_MODULE_9__["MIN"], a.shape, b.shape) :
            new _binaryop_gpu__WEBPACK_IMPORTED_MODULE_8__["BinaryOpProgram"](_binaryop_gpu__WEBPACK_IMPORTED_MODULE_8__["MIN"], a.shape, b.shape);
        return this.compileAndRun(program, [a, b]);
    }
    mod(a, b) {
        const program = Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().getBool('WEBGL_PACK_BINARY_OPERATIONS') ?
            new _binaryop_packed_gpu__WEBPACK_IMPORTED_MODULE_9__["BinaryOpPackedProgram"](_binaryop_packed_gpu__WEBPACK_IMPORTED_MODULE_9__["MOD"], a.shape, b.shape) :
            new _binaryop_gpu__WEBPACK_IMPORTED_MODULE_8__["BinaryOpProgram"](_binaryop_gpu__WEBPACK_IMPORTED_MODULE_8__["MOD"], a.shape, b.shape);
        return this.compileAndRun(program, [a, b]);
    }
    maximum(a, b) {
        const cpuRes = this.tryRunOnCpuOrThrow([a, b], () => this.cpuBackend.maximum(a, b));
        if (cpuRes) {
            return cpuRes;
        }
        const program = Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().getBool('WEBGL_PACK_BINARY_OPERATIONS') ?
            new _binaryop_packed_gpu__WEBPACK_IMPORTED_MODULE_9__["BinaryOpPackedProgram"](_binaryop_packed_gpu__WEBPACK_IMPORTED_MODULE_9__["MAX"], a.shape, b.shape) :
            new _binaryop_gpu__WEBPACK_IMPORTED_MODULE_8__["BinaryOpProgram"](_binaryop_gpu__WEBPACK_IMPORTED_MODULE_8__["MAX"], a.shape, b.shape);
        return this.compileAndRun(program, [a, b]);
    }
    all(x, axes) {
        _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["backend_util"].assertAxesAreInnerMostDims('all', axes, x.rank);
        const [outShape, reduceShape] = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["backend_util"].computeOutAndReduceShapes(x.shape, axes);
        const inSize = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["util"].sizeFromShape(reduceShape);
        const a2D = x.as2D(-1, inSize);
        return this.reduce(a2D, 'all', a2D.dtype).reshape(outShape);
    }
    any(x, axes) {
        _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["backend_util"].assertAxesAreInnerMostDims('any', axes, x.rank);
        const [outShape, reduceShape] = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["backend_util"].computeOutAndReduceShapes(x.shape, axes);
        const inSize = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["util"].sizeFromShape(reduceShape);
        const a2D = x.as2D(-1, inSize);
        return this.reduce(a2D, 'any', a2D.dtype).reshape(outShape);
    }
    floorDiv(a, b) {
        const op = _binaryop_gpu__WEBPACK_IMPORTED_MODULE_8__["INT_DIV"];
        const outputDtype = 'int32';
        if (Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().getBool('WEBGL_PACK_BINARY_OPERATIONS')) {
            return this.packedBinaryOp(a, b, _binaryop_packed_gpu__WEBPACK_IMPORTED_MODULE_9__["INT_DIV"], outputDtype);
        }
        const program = new _binaryop_gpu__WEBPACK_IMPORTED_MODULE_8__["BinaryOpProgram"](op, a.shape, b.shape);
        return this.compileAndRun(program, [a, b], outputDtype);
    }
    packedUnaryOp(x, op, dtype) {
        const program = new _unaryop_packed_gpu__WEBPACK_IMPORTED_MODULE_65__["UnaryOpPackedProgram"](x.shape, op);
        return this.compileAndRun(program, [x], dtype);
    }
    packedBinaryOp(a, b, op, dtype, checkOutOfBounds = false) {
        const program = new _binaryop_packed_gpu__WEBPACK_IMPORTED_MODULE_9__["BinaryOpPackedProgram"](op, a.shape, b.shape, checkOutOfBounds);
        return this.compileAndRun(program, [a, b], dtype);
    }
    // Returns a TensorInfo with the complex shape and the dataId of the
    // underlying part. We need to do this because a reshaped complex tensor is
    // not reflected in its parts.
    makeComplexComponentTensorInfo(complexTensor, complexPart) {
        return {
            dataId: complexPart.dataId,
            dtype: complexPart.dtype,
            shape: complexTensor.shape
        };
    }
    addN(tensors) {
        if (tensors.length === 1) {
            return tensors[0];
        }
        // Limit the number of uploaded textures for optimization.
        if (tensors.length > Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().get('WEBGL_MAX_TEXTURES_IN_SHADER')) {
            const midIndex = Math.floor(tensors.length / 2);
            const leftSide = this.addN(tensors.slice(0, midIndex));
            const rightSide = this.addN(tensors.slice(midIndex));
            return this.addN([leftSide, rightSide]);
        }
        const dtype = tensors.map(t => t.dtype).reduce((d1, d2) => Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["upcastType"])(d1, d2));
        const shapes = tensors.map(t => t.shape);
        // We can make sure shapes are identical in op level.
        const usePackedOp = Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().getBool('WEBGL_PACK');
        const program = usePackedOp ?
            new _addn_packed_gpu__WEBPACK_IMPORTED_MODULE_4__["AddNPackedProgram"](tensors[0].shape, shapes) :
            new _addn_gpu__WEBPACK_IMPORTED_MODULE_3__["AddNProgram"](tensors[0].shape, shapes);
        return this.compileAndRun(program, tensors, dtype);
    }
    pow(a, b) {
        const usePackedOp = Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().getBool('WEBGL_PACK_BINARY_OPERATIONS');
        const program = usePackedOp ?
            new _binaryop_packed_gpu__WEBPACK_IMPORTED_MODULE_9__["BinaryOpPackedProgram"](_binaryop_packed_gpu__WEBPACK_IMPORTED_MODULE_9__["POW"], a.shape, b.shape) :
            new _binaryop_gpu__WEBPACK_IMPORTED_MODULE_8__["BinaryOpProgram"](_binaryop_gpu__WEBPACK_IMPORTED_MODULE_8__["POW"], a.shape, b.shape);
        const dtype = Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["upcastType"])(a.dtype, b.dtype);
        return this.compileAndRun(program, [a, b], dtype);
    }
    ceil(x) {
        if (this.shouldExecuteOnCPU([x])) {
            const outValues = Object(_kernel_utils_shared__WEBPACK_IMPORTED_MODULE_2__["ceilImplCPU"])(this.texData.get(x.dataId).values, x.dtype);
            return this.makeOutput(x.shape, x.dtype, outValues);
        }
        if (Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().getBool('WEBGL_PACK_UNARY_OPERATIONS')) {
            return this.packedUnaryOp(x, _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["CEIL"], x.dtype);
        }
        const program = new _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["UnaryOpProgram"](x.shape, _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["CEIL"]);
        return this.compileAndRun(program, [x]);
    }
    floor(x) {
        if (this.shouldExecuteOnCPU([x])) {
            const outValues = Object(_kernel_utils_shared__WEBPACK_IMPORTED_MODULE_2__["floorImplCPU"])(this.texData.get(x.dataId).values, x.dtype);
            return this.makeOutput(x.shape, x.dtype, outValues);
        }
        if (Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().getBool('WEBGL_PACK_UNARY_OPERATIONS')) {
            return this.packedUnaryOp(x, _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["FLOOR"], x.dtype);
        }
        const program = new _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["UnaryOpProgram"](x.shape, _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["FLOOR"]);
        return this.compileAndRun(program, [x]);
    }
    sign(x) {
        const program = new _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["UnaryOpProgram"](x.shape, _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["SIGN"]);
        return this.compileAndRun(program, [x]);
    }
    isNaN(x) {
        const program = new _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["UnaryOpProgram"](x.shape, _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["IS_NAN"]);
        return this.compileAndRun(program, [x], 'bool');
    }
    isInf(x) {
        const program = new _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["UnaryOpProgram"](x.shape, _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["IS_INF"]);
        return this.compileAndRun(program, [x], 'bool');
    }
    isFinite(x) {
        const program = new _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["UnaryOpProgram"](x.shape, _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["IS_FINITE"]);
        return this.compileAndRun(program, [x], 'bool');
    }
    round(x) {
        const program = new _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["UnaryOpProgram"](x.shape, _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["ROUND"]);
        return this.compileAndRun(program, [x]);
    }
    exp(x) {
        if (this.shouldExecuteOnCPU([x])) {
            const outValues = Object(_kernel_utils_shared__WEBPACK_IMPORTED_MODULE_2__["expImplCPU"])(this.texData.get(x.dataId).values, x.dtype);
            return this.makeOutput(x.shape, x.dtype, outValues);
        }
        if (Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().getBool('WEBGL_PACK_UNARY_OPERATIONS')) {
            return this.packedUnaryOp(x, _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["EXP"], x.dtype);
        }
        const program = new _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["UnaryOpProgram"](x.shape, _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["EXP"]);
        return this.compileAndRun(program, [x]);
    }
    expm1(x) {
        if (this.shouldExecuteOnCPU([x])) {
            const outValues = Object(_kernel_utils_shared__WEBPACK_IMPORTED_MODULE_2__["expm1ImplCPU"])(this.texData.get(x.dataId).values, x.dtype);
            return this.makeOutput(x.shape, x.dtype, outValues);
        }
        if (Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().getBool('WEBGL_PACK_UNARY_OPERATIONS')) {
            return this.packedUnaryOp(x, _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["EXPM1"], x.dtype);
        }
        const program = new _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["UnaryOpProgram"](x.shape, _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["EXPM1"]);
        return this.compileAndRun(program, [x]);
    }
    softmax(logits, dim) {
        const axes = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["util"].parseAxisParam([dim], logits.shape);
        // TODO(annxingyuan): Call maxImpl rather than op as part of softmax kernel
        // modularization.
        const maxLogit = Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["max"])(logits, axes);
        const expandedShape = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["backend_util"].expandShapeToKeepDim(maxLogit.shape, axes);
        // TODO(annxingyuan): Call sub directly as part of softmax kernel
        // modularization.
        const a = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["sub"](logits, maxLogit.reshape(expandedShape));
        const b = this.exp(a);
        const sumExp = this.sum(b, axes).reshape(expandedShape);
        // TODO(annxingyuan): Call divImpl rather than op as part of softmax kernel
        // modularization.
        return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["div"])(b, sumExp);
    }
    log(x) {
        if (this.shouldExecuteOnCPU([x])) {
            const outValues = Object(_kernel_utils_shared__WEBPACK_IMPORTED_MODULE_2__["logImplCPU"])(this.texData.get(x.dataId).values, x.dtype);
            return this.makeOutput(x.shape, x.dtype, outValues);
        }
        if (Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().getBool('WEBGL_PACK_UNARY_OPERATIONS')) {
            return this.packedUnaryOp(x, _unaryop_packed_gpu__WEBPACK_IMPORTED_MODULE_65__["LOG"], x.dtype);
        }
        const program = new _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["UnaryOpProgram"](x.shape, _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["LOG"]);
        return this.compileAndRun(program, [x]);
    }
    log1p(x) {
        const program = new _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["UnaryOpProgram"](x.shape, _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["LOG1P"]);
        return this.compileAndRun(program, [x]);
    }
    sqrt(x) {
        const program = new _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["UnaryOpProgram"](x.shape, _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["SQRT"]);
        return this.compileAndRun(program, [x]);
    }
    rsqrt(x) {
        if (this.shouldExecuteOnCPU([x])) {
            const outValues = Object(_kernel_utils_shared__WEBPACK_IMPORTED_MODULE_2__["rsqrtImplCPU"])(this.texData.get(x.dataId).values, x.dtype);
            return this.makeOutput(x.shape, x.dtype, outValues);
        }
        const program = new _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["UnaryOpProgram"](x.shape, _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["RSQRT"]);
        return this.compileAndRun(program, [x]);
    }
    reciprocal(x) {
        const program = new _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["UnaryOpProgram"](x.shape, _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["RECIPROCAL"]);
        return this.compileAndRun(program, [x]);
    }
    relu(x) {
        let program;
        if (Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().getBool('WEBGL_PACK')) {
            program = new _unaryop_packed_gpu__WEBPACK_IMPORTED_MODULE_65__["UnaryOpPackedProgram"](x.shape, _unaryop_packed_gpu__WEBPACK_IMPORTED_MODULE_65__["RELU"]);
        }
        else {
            program = new _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["UnaryOpProgram"](x.shape, _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["RELU"]);
        }
        return this.compileAndRun(program, [x]);
    }
    relu6(x) {
        let program;
        if (Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().getBool('WEBGL_PACK')) {
            program = new _unaryop_packed_gpu__WEBPACK_IMPORTED_MODULE_65__["UnaryOpPackedProgram"](x.shape, _unaryop_packed_gpu__WEBPACK_IMPORTED_MODULE_65__["RELU6"]);
        }
        else {
            program = new _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["UnaryOpProgram"](x.shape, _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["RELU6"]);
        }
        return this.compileAndRun(program, [x]);
    }
    prelu(x, alpha) {
        const program = Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().getBool('WEBGL_PACK_BINARY_OPERATIONS') ?
            new _binaryop_packed_gpu__WEBPACK_IMPORTED_MODULE_9__["BinaryOpPackedProgram"](_binaryop_packed_gpu__WEBPACK_IMPORTED_MODULE_9__["PRELU"], x.shape, alpha.shape) :
            new _binaryop_gpu__WEBPACK_IMPORTED_MODULE_8__["BinaryOpProgram"](_binaryop_gpu__WEBPACK_IMPORTED_MODULE_8__["PRELU"], x.shape, alpha.shape);
        return this.compileAndRun(program, [x, alpha]);
    }
    elu(x) {
        if (Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().getBool('WEBGL_PACK_UNARY_OPERATIONS')) {
            return this.packedUnaryOp(x, _unaryop_packed_gpu__WEBPACK_IMPORTED_MODULE_65__["ELU"], x.dtype);
        }
        const program = new _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["UnaryOpProgram"](x.shape, _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["ELU"]);
        return this.compileAndRun(program, [x]);
    }
    eluDer(dy, y) {
        const program = Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().getBool('WEBGL_PACK_BINARY_OPERATIONS') ?
            new _binaryop_packed_gpu__WEBPACK_IMPORTED_MODULE_9__["BinaryOpPackedProgram"](_binaryop_packed_gpu__WEBPACK_IMPORTED_MODULE_9__["ELU_DER"], dy.shape, y.shape) :
            new _binaryop_gpu__WEBPACK_IMPORTED_MODULE_8__["BinaryOpProgram"](_binaryop_gpu__WEBPACK_IMPORTED_MODULE_8__["ELU_DER"], dy.shape, y.shape);
        return this.compileAndRun(program, [dy, y]);
    }
    selu(x) {
        const program = new _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["UnaryOpProgram"](x.shape, _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["SELU"]);
        return this.compileAndRun(program, [x]);
    }
    clip(x, min, max) {
        let program;
        if (Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().getBool('WEBGL_PACK_CLIP')) {
            program = new _clip_packed_gpu__WEBPACK_IMPORTED_MODULE_12__["ClipPackedProgram"](x.shape);
        }
        else {
            program = new _clip_gpu__WEBPACK_IMPORTED_MODULE_11__["ClipProgram"](x.shape);
        }
        const customSetup = program.getCustomSetupFunc(min, max);
        return this.compileAndRun(program, [x], null, customSetup);
    }
    abs(x) {
        // TODO: handle cases when x is complex.
        if (this.shouldExecuteOnCPU([x]) && x.dtype !== 'complex64') {
            const outValues = Object(_kernel_utils_shared__WEBPACK_IMPORTED_MODULE_2__["simpleAbsImplCPU"])(this.texData.get(x.dataId).values);
            return this.makeOutput(x.shape, x.dtype, outValues);
        }
        if (Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().getBool('WEBGL_PACK_UNARY_OPERATIONS')) {
            return this.packedUnaryOp(x, _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["ABS"], x.dtype);
        }
        const program = new _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["UnaryOpProgram"](x.shape, _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["ABS"]);
        return this.compileAndRun(program, [x]);
    }
    complexAbs(x) {
        const xData = this.texData.get(x.dataId);
        const program = new _complex_abs_gpu__WEBPACK_IMPORTED_MODULE_13__["ComplexAbsProgram"](x.shape);
        const inputs = [
            this.makeComplexComponentTensorInfo(x, xData.complexTensorInfos.real),
            this.makeComplexComponentTensorInfo(x, xData.complexTensorInfos.imag),
        ];
        return this.compileAndRun(program, inputs);
    }
    sigmoid(x) {
        const program = new _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["UnaryOpProgram"](x.shape, _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["SIGMOID"]);
        return this.compileAndRun(program, [x]);
    }
    softplus(x) {
        const program = new _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["UnaryOpProgram"](x.shape, _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["SOFTPLUS"]);
        return this.compileAndRun(program, [x]);
    }
    asin(x) {
        const program = new _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["UnaryOpProgram"](x.shape, _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["ASIN"]);
        return this.compileAndRun(program, [x]);
    }
    acos(x) {
        const program = new _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["UnaryOpProgram"](x.shape, _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["ACOS"]);
        return this.compileAndRun(program, [x]);
    }
    atan(x) {
        const program = new _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["UnaryOpProgram"](x.shape, _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["ATAN"]);
        return this.compileAndRun(program, [x]);
    }
    sinh(x) {
        const program = new _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["UnaryOpProgram"](x.shape, _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["SINH"]);
        return this.compileAndRun(program, [x]);
    }
    cosh(x) {
        const program = new _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["UnaryOpProgram"](x.shape, _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["COSH"]);
        return this.compileAndRun(program, [x]);
    }
    tanh(x) {
        const program = new _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["UnaryOpProgram"](x.shape, _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["TANH"]);
        return this.compileAndRun(program, [x]);
    }
    asinh(x) {
        const program = new _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["UnaryOpProgram"](x.shape, _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["ASINH"]);
        return this.compileAndRun(program, [x]);
    }
    acosh(x) {
        const program = new _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["UnaryOpProgram"](x.shape, _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["ACOSH"]);
        return this.compileAndRun(program, [x]);
    }
    atanh(x) {
        const program = new _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["UnaryOpProgram"](x.shape, _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["ATANH"]);
        return this.compileAndRun(program, [x]);
    }
    erf(x) {
        const program = new _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["UnaryOpProgram"](x.shape, _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["ERF"]);
        return this.compileAndRun(program, [x]);
    }
    step(x, alpha) {
        const program = new _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["UnaryOpProgram"](x.shape, _unaryop_gpu__WEBPACK_IMPORTED_MODULE_64__["STEP"](alpha));
        return this.compileAndRun(program, [x]);
    }
    conv2dByMatMul(x, filter, convInfo, bias, activation, preluActivationWeights) {
        // Reshapes conv2D input to 2D tensors, uses matMul and then reshape the
        // result from 2D to 4D.
        const xShape = x.shape;
        const xTexData = this.texData.get(x.dataId);
        const sharedMatMulDim = convInfo.inChannels;
        const outerShapeX = xShape[0] * xShape[1] * xShape[2];
        const outerShapeFilter = convInfo.outChannels;
        const isChannelsLast = convInfo.dataFormat === 'channelsLast';
        const transposeA = false;
        const transposeB = false;
        // TODO: Once reduction ops are packed, batchMatMul will always be packed
        // and we can remove this condition.
        const batchMatMulWillBeUnpacked = (outerShapeX === 1 || outerShapeFilter === 1) &&
            sharedMatMulDim > MATMUL_SHARED_DIM_THRESHOLD;
        const reshapeWillBeExpensive = xShape[2] % 2 !== 0 && !!xTexData.isPacked;
        if (batchMatMulWillBeUnpacked || !Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().getBool('WEBGL_LAZILY_UNPACK') ||
            !Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().getBool('WEBGL_PACK_BINARY_OPERATIONS') ||
            !reshapeWillBeExpensive) {
            const targetShape = isChannelsLast ? xShape[0] * xShape[1] * xShape[2] :
                xShape[0] * xShape[2] * xShape[3];
            const xReshaped = Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["reshape"])(x, [1, targetShape, convInfo.inChannels]);
            const filterReshaped = Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["reshape"])(filter, [1, convInfo.inChannels, convInfo.outChannels]);
            const result = this.fusedBatchMatMul({
                a: xReshaped,
                b: filterReshaped,
                transposeA,
                transposeB,
                bias,
                activation,
                preluActivationWeights
            });
            return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["reshape"])(result, convInfo.outShape);
        }
        // Following optimization is specific to packed |x| with odd row count
        // (For example, in channelLast mode, 'row count' refers to x.shape[2]):
        // we avoid expensive packed 2x2 reshape by padding row count to next,
        // even number. When x.shape[2] is odd, the result of packed batchMatMul is
        // the same (has the same texture layout and and values in the texture) as
        // it is for even x.shape[2] + 1. We make the odd-rows tensor to look like
        // even-rows tensor before the operation and, after the batchMatMul,
        // fix the even-rows result to have odd number of rows.
        const targetShape = isChannelsLast ?
            xShape[0] * xShape[1] * (xShape[2] + 1) :
            xShape[0] * xShape[2] * (xShape[3] + 1);
        const xReshaped = {
            dataId: x.dataId,
            shape: [1, targetShape, convInfo.inChannels],
            dtype: x.dtype
        };
        // xTexData.shape gets referenced from GPGPUBinary.inShapeInfos.
        // Decrementing row count, after batchMatMul->...->compileProgram leads to
        // invalid row count within the reference in GPGPUBinary.inShapeInfos.
        // Alternative fix would be to provide a copy to GPGPUBinary.inShapeInfos
        // in compileProgram method, but that would affect compilation of all
        // programs - instead, provide a copy here, with even row count, before
        // calling batchMatMul->...->compileProgram and after that, the original
        // xTexData.shape is restored.
        const originalXTexDataShape = xTexData.shape;
        xTexData.shape = xTexData.shape.slice();
        xTexData.shape[xTexData.shape.length - 2]++;
        _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["util"].assert(_webgl_util__WEBPACK_IMPORTED_MODULE_67__["isReshapeFree"](xTexData.shape, xReshaped.shape), () => `packed reshape ${xTexData.shape} to ${xReshaped.shape} isn't free`);
        const filterReshaped = Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["reshape"])(filter, [1, convInfo.inChannels, convInfo.outChannels]);
        const pointwiseConv = this.fusedBatchMatMul({
            a: xReshaped,
            b: filterReshaped,
            transposeA,
            transposeB,
            bias,
            activation,
            preluActivationWeights
        });
        const pointwiseConvTexData = this.texData.get(pointwiseConv.dataId);
        _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["util"].assert(pointwiseConvTexData.isPacked, () => 'batchMatMul result is expected to be packed');
        // Restore the input shape to original.
        xTexData.shape = originalXTexDataShape;
        // Set the output shape - there is no need for expensive reshape as data
        // layout is already correct.
        pointwiseConvTexData.shape = convInfo.outShape;
        return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["engine"])().makeTensorFromDataId(pointwiseConv.dataId, convInfo.outShape, pointwiseConv.dtype);
    }
    conv2dWithIm2Row(x, filter, convInfo, bias, activation, preluActivationWeights) {
        // Rearranges conv2d input so each block to be convolved over forms the
        // column of a new matrix with shape [filterWidth * filterHeight *
        // inChannels, outHeight * outWidth]. The filter is also rearranged so each
        // output channel forms a row of a new matrix with shape [outChannels,
        // filterWidth * filterHeight * inChannels]. The convolution is then
        // computed by multiplying these matrices and reshaping the result.
        const { filterWidth, filterHeight, inChannels, outWidth, outHeight, dataFormat } = convInfo;
        const isChannelsLast = dataFormat === 'channelsLast';
        const sharedDim = filterWidth * filterHeight * inChannels;
        const numCols = outHeight * outWidth;
        const x2ColShape = [sharedDim, numCols];
        const transposeA = true;
        const transposeB = false;
        const xSqueezed = x.squeeze([0]);
        const w2Row = filter.reshape([1, sharedDim, -1]);
        const im2ColProgram = new _im2col_packed_gpu__WEBPACK_IMPORTED_MODULE_34__["Im2ColPackedProgram"](x2ColShape, xSqueezed.shape, convInfo);
        const im2Col = this.compileAndRun(im2ColProgram, [xSqueezed]).reshape([
            1, x2ColShape[0], x2ColShape[1]
        ]);
        const hasBias = bias != null;
        const hasPreluActivationWeights = preluActivationWeights != null;
        const fusedActivation = activation ? mapActivationToShaderProgram(activation, true) : null;
        const matmulProgram = new _mulmat_packed_gpu__WEBPACK_IMPORTED_MODULE_39__["MatMulPackedProgram"](im2Col.shape, w2Row.shape, [1, numCols, convInfo.outChannels], transposeA, transposeB, hasBias, fusedActivation, hasPreluActivationWeights);
        const inputs = [im2Col, w2Row];
        if (bias) {
            inputs.push(bias);
        }
        if (hasPreluActivationWeights) {
            inputs.push(preluActivationWeights);
        }
        const product = this.compileAndRun(matmulProgram, inputs);
        if (isChannelsLast) {
            return product.reshape([1, outHeight, outWidth, convInfo.outChannels]);
        }
        else {
            return product.reshape([1, convInfo.outChannels, outHeight, outWidth]);
        }
    }
    fusedConv2d({ input, filter, convInfo, bias, activation, preluActivationWeights }) {
        if (convInfo.filterHeight === 1 && convInfo.filterWidth === 1 &&
            convInfo.dilationHeight === 1 && convInfo.dilationWidth === 1 &&
            convInfo.strideHeight === 1 && convInfo.strideWidth === 1 &&
            (convInfo.padInfo.type === 'SAME' ||
                convInfo.padInfo.type === 'VALID')) {
            return this.conv2dByMatMul(input, filter, convInfo, bias, activation, preluActivationWeights);
        }
        if (Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().getBool('WEBGL_CONV_IM2COL') && input.shape[0] === 1) {
            return this.conv2dWithIm2Row(input, filter, convInfo, bias, activation, preluActivationWeights);
        }
        const hasBias = bias != null;
        const hasPreluActivationWeights = preluActivationWeights != null;
        const fusedActivation = activation ? mapActivationToShaderProgram(activation, false) : null;
        const program = new _conv_gpu__WEBPACK_IMPORTED_MODULE_16__["Conv2DProgram"](convInfo, hasBias, fusedActivation, hasPreluActivationWeights);
        const inputs = [input, filter];
        if (bias) {
            inputs.push(bias);
        }
        if (preluActivationWeights) {
            inputs.push(preluActivationWeights);
        }
        return this.compileAndRun(program, inputs);
    }
    conv2d(x, filter, convInfo) {
        if (convInfo.filterHeight === 1 && convInfo.filterWidth === 1 &&
            convInfo.dilationHeight === 1 && convInfo.dilationWidth === 1 &&
            convInfo.strideHeight === 1 && convInfo.strideWidth === 1 &&
            (convInfo.padInfo.type === 'SAME' ||
                convInfo.padInfo.type === 'VALID')) {
            return this.conv2dByMatMul(x, filter, convInfo);
        }
        if (Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().getBool('WEBGL_CONV_IM2COL') && x.shape[0] === 1) {
            return this.conv2dWithIm2Row(x, filter, convInfo);
        }
        const program = new _conv_gpu__WEBPACK_IMPORTED_MODULE_16__["Conv2DProgram"](convInfo);
        return this.compileAndRun(program, [x, filter]);
    }
    conv2dDerInput(dy, filter, convInfo) {
        const program = new _conv_backprop_gpu__WEBPACK_IMPORTED_MODULE_14__["Conv2DDerInputProgram"](convInfo);
        return this.compileAndRun(program, [dy, filter]);
    }
    conv2dDerFilter(x, dy, convInfo) {
        const program = new _conv_backprop_gpu__WEBPACK_IMPORTED_MODULE_14__["Conv2DDerFilterProgram"](convInfo);
        return this.compileAndRun(program, [x, dy]);
    }
    fusedDepthwiseConv2D({ input, filter, convInfo, bias, activation, preluActivationWeights }) {
        const shouldPackDepthwiseConv = Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().getBool('WEBGL_PACK_DEPTHWISECONV') &&
            convInfo.strideWidth <= 2 &&
            convInfo.outChannels / convInfo.inChannels === 1;
        const fusedActivation = activation ?
            mapActivationToShaderProgram(activation, shouldPackDepthwiseConv) :
            null;
        const inputs = [input, filter];
        const hasBias = bias != null;
        const hasPreluActivationWeights = preluActivationWeights != null;
        if (hasBias) {
            inputs.push(bias);
        }
        if (hasPreluActivationWeights) {
            inputs.push(preluActivationWeights);
        }
        let program;
        if (shouldPackDepthwiseConv) {
            program = new _conv_packed_gpu_depthwise__WEBPACK_IMPORTED_MODULE_18__["DepthwiseConvPacked2DProgram"](convInfo, hasBias, fusedActivation, hasPreluActivationWeights);
            return this.compileAndRun(program, inputs);
        }
        program = new _conv_gpu_depthwise__WEBPACK_IMPORTED_MODULE_17__["DepthwiseConv2DProgram"](convInfo, hasBias, fusedActivation, hasPreluActivationWeights);
        return this.compileAndRun(program, inputs);
    }
    depthwiseConv2D(x, filter, convInfo) {
        let program;
        if (Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().getBool('WEBGL_PACK_DEPTHWISECONV') &&
            convInfo.strideWidth <= 2 &&
            convInfo.outChannels / convInfo.inChannels === 1) {
            program = new _conv_packed_gpu_depthwise__WEBPACK_IMPORTED_MODULE_18__["DepthwiseConvPacked2DProgram"](convInfo);
            return this.compileAndRun(program, [x, filter]);
        }
        program = new _conv_gpu_depthwise__WEBPACK_IMPORTED_MODULE_17__["DepthwiseConv2DProgram"](convInfo);
        return this.compileAndRun(program, [x, filter]);
    }
    depthwiseConv2DDerInput(dy, filter, convInfo) {
        const program = new _conv_backprop_gpu_depthwise__WEBPACK_IMPORTED_MODULE_15__["DepthwiseConv2DDerInputProgram"](convInfo);
        return this.compileAndRun(program, [dy, filter]);
    }
    depthwiseConv2DDerFilter(x, dy, convInfo) {
        const program = new _conv_backprop_gpu_depthwise__WEBPACK_IMPORTED_MODULE_15__["DepthwiseConv2DDerFilterProgram"](convInfo);
        return this.compileAndRun(program, [x, dy]);
    }
    conv3d(x, filter, convInfo) {
        const program = new _conv_gpu__WEBPACK_IMPORTED_MODULE_16__["Conv3DProgram"](convInfo);
        return this.compileAndRun(program, [x, filter]);
    }
    conv3dDerInput(dy, filter, convInfo) {
        const program = new _conv_backprop_gpu__WEBPACK_IMPORTED_MODULE_14__["Conv3DDerInputProgram"](convInfo);
        return this.compileAndRun(program, [dy, filter]);
    }
    conv3dDerFilter(x, dy, convInfo) {
        const program = new _conv_backprop_gpu__WEBPACK_IMPORTED_MODULE_14__["Conv3DDerFilterProgram"](convInfo);
        return this.compileAndRun(program, [x, dy]);
    }
    unstack(x, axis) {
        const num = x.shape[axis];
        const outShape = new Array(x.rank - 1);
        let outIndex = 0;
        for (let i = 0; i < x.rank; i++) {
            if (i !== axis) {
                outShape[outIndex++] = x.shape[i];
            }
        }
        const begin = new Array(x.rank).fill(0);
        const size = x.shape.slice();
        size[axis] = 1;
        const res = new Array(num);
        for (let i = 0; i < res.length; i++) {
            begin[axis] = i;
            res[i] = this.slice(x, begin, size).reshape(outShape);
        }
        return res;
    }
    avgPool3d(x, convInfo) {
        const program = new _pool_gpu__WEBPACK_IMPORTED_MODULE_45__["Pool3DProgram"](convInfo, 'avg', false);
        return this.compileAndRun(program, [x], 'float32');
    }
    avgPool3dBackprop(dy, x, convInfo) {
        const avgPool3dBackpropProgram = new _avg_pool_backprop_gpu__WEBPACK_IMPORTED_MODULE_7__["AvgPool3DBackpropProgram"](convInfo);
        return this.compileAndRun(avgPool3dBackpropProgram, [dy], x.dtype);
    }
    maxPool3d(x, convInfo) {
        const program = new _pool_gpu__WEBPACK_IMPORTED_MODULE_45__["Pool3DProgram"](convInfo, 'max', false);
        return this.compileAndRun(program, [x], 'float32');
    }
    maxPool3dBackprop(dy, x, y, convInfo) {
        const getPositions = true;
        const maxPool3dPositionsProgram = new _pool_gpu__WEBPACK_IMPORTED_MODULE_45__["Pool3DProgram"](convInfo, 'max', getPositions);
        const maxPool3dPositions = this.compileAndRun(maxPool3dPositionsProgram, [x]);
        const maxPool3dBackPropProgram = new _max_pool_backprop_gpu__WEBPACK_IMPORTED_MODULE_38__["MaxPool3DBackpropProgram"](convInfo);
        const result = this.compileAndRun(maxPool3dBackPropProgram, [dy, maxPool3dPositions], x.dtype);
        maxPool3dPositions.dispose();
        return result;
    }
    resizeBilinear(x, newHeight, newWidth, alignCorners) {
        const program = Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().getBool('WEBGL_PACK_IMAGE_OPERATIONS') ?
            new _resize_bilinear_packed_gpu__WEBPACK_IMPORTED_MODULE_50__["ResizeBilinearPackedProgram"](x.shape, newHeight, newWidth, alignCorners) :
            new _resize_bilinear_gpu__WEBPACK_IMPORTED_MODULE_49__["ResizeBilinearProgram"](x.shape, newHeight, newWidth, alignCorners);
        return this.compileAndRun(program, [x], 'float32');
    }
    resizeBilinearBackprop(dy, x, alignCorners) {
        const program = new _resize_bilinear_backprop_gpu__WEBPACK_IMPORTED_MODULE_48__["ResizeBilinearBackpropProgram"](dy, x, alignCorners);
        return this.compileAndRun(program, [dy]);
    }
    resizeNearestNeighbor(x, newHeight, newWidth, alignCorners) {
        const program = new _resize_nearest_neighbor_gpu__WEBPACK_IMPORTED_MODULE_52__["ResizeNearestNeighborProgram"](x.shape, newHeight, newWidth, alignCorners);
        return this.compileAndRun(program, [x]);
    }
    resizeNearestNeighborBackprop(dy, x, alignCorners) {
        const program = new _resize_nearest_neighbor_backprop_gpu__WEBPACK_IMPORTED_MODULE_51__["ResizeNearestNeigborBackpropProgram"](dy, x, alignCorners);
        return this.compileAndRun(program, [dy]);
    }
    multinomial(logits, normalized, numSamples, seed) {
        const probs = normalized ? logits : Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["softmax"])(logits);
        const batchSize = probs.shape[0];
        const numOutcomes = probs.shape[1];
        const program = new _multinomial_gpu__WEBPACK_IMPORTED_MODULE_40__["MultinomialProgram"](batchSize, numOutcomes, numSamples);
        const customSetup = program.getCustomSetupFunc(seed);
        return this.compileAndRun(program, [probs], 'int32', customSetup);
    }
    oneHot(indices, depth, onValue, offValue) {
        const program = new _onehot_gpu__WEBPACK_IMPORTED_MODULE_41__["OneHotProgram"](indices.size, depth, onValue, offValue);
        return this.compileAndRun(program, [indices]);
    }
    diag(x) {
        const program = new _diag_gpu__WEBPACK_IMPORTED_MODULE_24__["DiagProgram"](x.size);
        return this.compileAndRun(program, [x]);
    }
    cropAndResize(image, boxes, boxIndex, cropSize, method, extrapolationValue) {
        const program = new _crop_and_resize_gpu__WEBPACK_IMPORTED_MODULE_19__["CropAndResizeProgram"](image.shape, boxes.shape, cropSize, method, extrapolationValue);
        return this.compileAndRun(program, [image, boxes, boxIndex], 'float32');
    }
    depthToSpace(x, blockSize, dataFormat) {
        _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["util"].assert(blockSize > 1, () => `blockSize should be > 1 for depthToSpace, but was: ${blockSize}`);
        const batchSize = x.shape[0];
        const inputHeight = (dataFormat === 'NHWC') ? x.shape[1] : x.shape[2];
        const inputWidth = (dataFormat === 'NHWC') ? x.shape[2] : x.shape[3];
        const inputDepth = (dataFormat === 'NHWC') ? x.shape[3] : x.shape[1];
        const outputHeight = inputHeight * blockSize;
        const outputWidth = inputWidth * blockSize;
        const outputDepth = inputDepth / (blockSize * blockSize);
        const outputShape = (dataFormat === 'NHWC') ?
            [batchSize, outputHeight, outputWidth, outputDepth] :
            [batchSize, outputDepth, outputHeight, outputWidth];
        const program = new _depth_to_space_gpu__WEBPACK_IMPORTED_MODULE_23__["DepthToSpaceProgram"](outputShape, blockSize, dataFormat);
        return this.compileAndRun(program, [x]);
    }
    split(x, sizeSplits, axis) {
        return split(x, sizeSplits, axis);
    }
    scatterND(indices, updates, shape) {
        const { sliceRank, numUpdates, sliceSize, strides, outputSize } = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["backend_util"].calculateShapes(updates, indices, shape);
        const flattenShape = [outputSize / sliceSize, sliceSize];
        const flattenIndices = indices.reshape([numUpdates, sliceRank]);
        const flattenX = updates.reshape([numUpdates, sliceSize]);
        if (outputSize === 0) {
            return _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["backend_util"].reshapeTensor(Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["tensor"])([]), shape);
        }
        const defaultValue = Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["scalar"])(0);
        const program = new _scatter_gpu__WEBPACK_IMPORTED_MODULE_55__["ScatterProgram"](numUpdates, sliceRank, flattenIndices.rank, flattenX.rank, strides, flattenShape);
        const res = this.compileAndRun(program, [flattenX, flattenIndices, defaultValue]);
        return res.reshape(shape);
    }
    sparseToDense(sparseIndices, sparseValues, outputShape, defaultValue) {
        const { sliceRank, numUpdates, strides, outputSize } = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["backend_util"].calculateShapes(sparseValues, sparseIndices, outputShape);
        const sumDupeIndices = false;
        const program = new _scatter_gpu__WEBPACK_IMPORTED_MODULE_55__["ScatterProgram"](numUpdates, sliceRank, sparseIndices.rank, sparseValues.rank, strides, [outputSize, 1], sumDupeIndices);
        const res = this.compileAndRun(program, [sparseValues, sparseIndices, defaultValue]);
        return res.reshape(outputShape);
    }
    gatherND(x, indices) {
        const indicesShape = indices.shape;
        const sliceRank = indicesShape[indicesShape.length - 1];
        const [resultShape, numSlices, sliceSize, strides] = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["backend_util"].prepareAndValidate(x, indices);
        const flattenIndices = indices.reshape([numSlices, sliceRank]);
        const flattenX = x.reshape([x.size / sliceSize, sliceSize]);
        const program = new _gather_nd_gpu__WEBPACK_IMPORTED_MODULE_31__["GatherNDProgram"](sliceRank, strides, [numSlices, sliceSize]);
        const res = this.compileAndRun(program, [flattenX, flattenIndices]);
        return res.reshape(resultShape);
    }
    fill(shape, value, dtype) {
        dtype = dtype || _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["util"].inferDtype(value);
        if (dtype === 'string') {
            // String type should be handled in CPU memory.
            const values = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["util"].getArrayFromDType(dtype, _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["util"].sizeFromShape(shape));
            values.fill(value);
            return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["engine"])().makeTensor(values, shape, dtype, this);
        }
        else {
            const program = new _fill_gpu__WEBPACK_IMPORTED_MODULE_29__["FillProgram"](shape, value);
            const customSetup = program.getCustomSetupFunc(value);
            return this.compileAndRun(program, [], dtype, customSetup);
        }
    }
    onesLike(x) {
        if (x.dtype === 'string') {
            throw new Error('onesLike is not supported under string dtype');
        }
        else {
            // TODO(cais, smilkov): Add WebGL shader for onesLike:
            //   https://github.com/tensorflow/tfjs/issues/1293
            return this.fill(x.shape, 1, x.dtype);
        }
    }
    zerosLike(x) {
        return this.fill(x.shape, x.dtype === 'string' ? '' : 0, x.dtype);
    }
    linspace(start, stop, num) {
        // TODO: Use CPU implementation due to the precision problem in Safari.
        return _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["backend_util"].linspaceImpl(start, stop, num);
    }
    makeTensorInfo(shape, dtype, values) {
        const dataId = this.write(values, shape, dtype);
        this.texData.get(dataId).usage = null;
        return { dataId, shape, dtype };
    }
    makeOutput(shape, dtype, values) {
        const { dataId } = this.makeTensorInfo(shape, dtype, values);
        return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["engine"])().makeTensorFromDataId(dataId, shape, dtype, this);
    }
    unpackTensor(input) {
        const program = new _unpack_gpu__WEBPACK_IMPORTED_MODULE_66__["UnpackProgram"](input.shape);
        return this.runWebGLProgram(program, [input], input.dtype);
    }
    packTensor(input) {
        const program = new _pack_gpu__WEBPACK_IMPORTED_MODULE_42__["PackProgram"](input.shape);
        const preventEagerUnpackingOutput = true;
        return this.runWebGLProgram(program, [input], input.dtype, null /* customSetup */, preventEagerUnpackingOutput);
    }
    packedReshape(input, afterShape) {
        const input3DShape = [
            _webgl_util__WEBPACK_IMPORTED_MODULE_67__["getBatchDim"](input.shape),
            ..._webgl_util__WEBPACK_IMPORTED_MODULE_67__["getRowsCols"](input.shape)
        ];
        const input3D = {
            dtype: input.dtype,
            shape: input3DShape,
            dataId: input.dataId
        };
        const afterShapeAs3D = [
            _webgl_util__WEBPACK_IMPORTED_MODULE_67__["getBatchDim"](afterShape), ..._webgl_util__WEBPACK_IMPORTED_MODULE_67__["getRowsCols"](afterShape)
        ];
        const program = new _reshape_packed_gpu__WEBPACK_IMPORTED_MODULE_47__["ReshapePackedProgram"](afterShapeAs3D, input3DShape);
        const preventEagerUnpackingOfOutput = true;
        const output = this.runWebGLProgram(program, [input3D], input.dtype, null /* customSetup */, preventEagerUnpackingOfOutput);
        return { dataId: output.dataId, shape: afterShape, dtype: output.dtype };
    }
    decode(dataId) {
        const texData = this.texData.get(dataId);
        const { isPacked, shape, dtype } = texData;
        const shapeAs3D = _webgl_util__WEBPACK_IMPORTED_MODULE_67__["getShapeAs3D"](shape);
        let program;
        if (isPacked) {
            program = new _decode_matrix_packed_gpu__WEBPACK_IMPORTED_MODULE_22__["DecodeMatrixPackedProgram"](shapeAs3D);
        }
        else {
            program = new _decode_matrix_gpu__WEBPACK_IMPORTED_MODULE_21__["DecodeMatrixProgram"](shapeAs3D);
        }
        const preventEagerUnpackingOfOutput = true;
        const out = this.runWebGLProgram(program, [{ shape: shapeAs3D, dtype, dataId }], dtype, null /* customSetup */, preventEagerUnpackingOfOutput);
        return { dtype, shape, dataId: out.dataId };
    }
    runWebGLProgram(program, inputs, outputDtype, customSetup, preventEagerUnpackingOfOutput = false) {
        const output = this.makeTensorInfo(program.outputShape, outputDtype);
        const outData = this.texData.get(output.dataId);
        if (program.packedOutput) {
            outData.isPacked = true;
        }
        if (program.outPackingScheme === _tex_util__WEBPACK_IMPORTED_MODULE_61__["PackingScheme"].DENSE) {
            const texelShape = _tex_util__WEBPACK_IMPORTED_MODULE_61__["getDenseTexShape"](program.outputShape);
            // For a densely packed output, we explicitly set texShape
            // so it doesn't get assigned later according to our typical packing
            // scheme wherein a single texel can only contain values from adjacent
            // rows/cols.
            outData.texShape = texelShape.map(d => d * 2);
        }
        if (program.outTexUsage != null) {
            outData.usage = program.outTexUsage;
        }
        if (_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["util"].sizeFromShape(output.shape) === 0) {
            // Short-circuit the computation since the result is empty (has 0 in its
            // shape).
            outData.values =
                _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["util"].getTypedArrayFromDType(output.dtype, 0);
            return output;
        }
        const dataToDispose = [];
        const inputsData = inputs.map(input => {
            if (input.dtype === 'complex64') {
                throw new Error(`GPGPUProgram does not support complex64 input. For complex64 ` +
                    `dtypes, please separate the program into real and imaginary ` +
                    `parts.`);
            }
            let texData = this.texData.get(input.dataId);
            if (texData.texture == null) {
                if (!program.packedInputs &&
                    _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["util"].sizeFromShape(input.shape) <=
                        Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().getNumber('WEBGL_SIZE_UPLOAD_UNIFORM')) {
                    // Upload small tensors that live on the CPU as uniforms, not as
                    // textures. Do this only when the environment supports 32bit floats
                    // due to problems when comparing 16bit floats with 32bit floats.
                    // TODO(https://github.com/tensorflow/tfjs/issues/821): Make it
                    // possible for packed shaders to sample from uniforms.
                    return {
                        shape: input.shape,
                        texData: null,
                        isUniform: true,
                        uniformValues: texData.values
                    };
                }
                // This ensures that if a packed program's inputs have not yet been
                // uploaded to the GPU, they get uploaded as packed right off the bat.
                if (program.packedInputs) {
                    texData.isPacked = true;
                    texData.shape = input.shape;
                }
            }
            else if (!!texData.isPacked !== !!program.packedInputs) {
                input = texData.isPacked ? this.unpackTensor(input) :
                    this.packTensor(input);
                dataToDispose.push(input);
                texData = this.texData.get(input.dataId);
            }
            else if (texData.isPacked &&
                !_webgl_util__WEBPACK_IMPORTED_MODULE_67__["isReshapeFree"](texData.shape, input.shape)) {
                // This is a special case where a texture exists for a tensor
                // but the shapes are incompatible (due to packing constraints) because
                // the tensor did not have a chance to go through the packed reshape
                // shader. This only happens when we reshape the *same* tensor to form
                // *distinct* inputs to an op, e.g. dotting a vector with itself. This
                // case will disappear once packed uploading is the default.
                const savedInput = input;
                const targetShape = input.shape;
                input.shape = texData.shape;
                input = this.packedReshape(input, targetShape);
                dataToDispose.push(input);
                texData = this.texData.get(input.dataId);
                savedInput.shape = targetShape;
            }
            this.uploadToGPU(input.dataId);
            return { shape: input.shape, texData, isUniform: false };
        });
        this.uploadToGPU(output.dataId);
        const outputData = { shape: output.shape, texData: outData, isUniform: false };
        const key = _gpgpu_math__WEBPACK_IMPORTED_MODULE_33__["makeShaderKey"](program, inputsData, outputData);
        const binary = this.getAndSaveBinary(key, () => {
            return _gpgpu_math__WEBPACK_IMPORTED_MODULE_33__["compileProgram"](this.gpgpu, program, inputsData, outputData);
        });
        const shouldTimeProgram = this.activeTimers != null;
        let query;
        if (shouldTimeProgram) {
            query = this.startTimer();
        }
        _gpgpu_math__WEBPACK_IMPORTED_MODULE_33__["runProgram"](this.gpgpu, binary, inputsData, outputData, customSetup);
        dataToDispose.forEach(info => this.disposeIntermediateTensorInfo(info));
        if (shouldTimeProgram) {
            query = this.endTimer(query);
            this.activeTimers.push({ name: program.constructor.name, query: this.getQueryTime(query) });
        }
        if (!Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().getBool('WEBGL_LAZILY_UNPACK') && outData.isPacked &&
            preventEagerUnpackingOfOutput === false) {
            const unpacked = this.unpackTensor(output);
            this.disposeIntermediateTensorInfo(output);
            return unpacked;
        }
        return output;
    }
    compileAndRun(program, inputs, outputDtype, customSetup, preventEagerUnpackingOfOutput = false) {
        outputDtype = outputDtype || inputs[0].dtype;
        const outInfo = this.runWebGLProgram(program, inputs, outputDtype, customSetup, preventEagerUnpackingOfOutput);
        return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["engine"])().makeTensorFromDataId(outInfo.dataId, outInfo.shape, outInfo.dtype);
    }
    getAndSaveBinary(key, getBinary) {
        if (!(key in this.binaryCache)) {
            this.binaryCache[key] = getBinary();
        }
        return this.binaryCache[key];
    }
    getTextureManager() {
        return this.textureManager;
    }
    dispose() {
        if (this.disposed) {
            return;
        }
        // Avoid disposing the compiled webgl programs during unit testing because
        // it slows down test execution.
        if (!Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().getBool('IS_TEST')) {
            const allKeys = Object.keys(this.binaryCache);
            allKeys.forEach(key => {
                this.gpgpu.deleteProgram(this.binaryCache[key].webGLProgram);
                delete this.binaryCache[key];
            });
        }
        this.textureManager.dispose();
        if (this.canvas != null &&
            (typeof (HTMLCanvasElement) !== 'undefined' &&
                this.canvas instanceof HTMLCanvasElement)) {
            this.canvas.remove();
        }
        else {
            this.canvas = null;
        }
        if (this.gpgpuCreatedLocally) {
            this.gpgpu.program = null;
            this.gpgpu.dispose();
        }
        this.disposed = true;
    }
    floatPrecision() {
        if (this.floatPrecisionValue == null) {
            this.floatPrecisionValue = Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["tidy"])(() => {
                if (!Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().get('WEBGL_RENDER_FLOAT32_ENABLED')) {
                    // Momentarily switching DEBUG flag to false so we don't throw an
                    // error trying to upload a small value.
                    const debugFlag = Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().getBool('DEBUG');
                    Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().set('DEBUG', false);
                    const underflowCheckValue = this.abs(Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["scalar"])(1e-8)).dataSync()[0];
                    Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().set('DEBUG', debugFlag);
                    if (underflowCheckValue > 0) {
                        return 32;
                    }
                }
                return 16;
            });
        }
        return this.floatPrecisionValue;
    }
    /** Returns the smallest representable number.  */
    epsilon() {
        return this.floatPrecision() === 32 ? EPSILON_FLOAT32 : EPSILON_FLOAT16;
    }
    uploadToGPU(dataId) {
        const texData = this.texData.get(dataId);
        const { shape, dtype, values, texture, usage, isPacked } = texData;
        if (texture != null) {
            // Array is already on GPU. No-op.
            return;
        }
        const shouldTimeProgram = this.activeTimers != null;
        let start;
        if (shouldTimeProgram) {
            start = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["util"].now();
        }
        let texShape = texData.texShape;
        if (texShape == null) {
            texShape = _webgl_util__WEBPACK_IMPORTED_MODULE_67__["getTextureShapeFromLogicalShape"](shape, isPacked);
            texData.texShape = texShape;
        }
        if (values != null) {
            const shapeAs3D = _webgl_util__WEBPACK_IMPORTED_MODULE_67__["getShapeAs3D"](shape);
            let program;
            let width = texShape[1], height = texShape[0];
            const isByteArray = values instanceof Uint8Array;
            if (isPacked) {
                [width, height] = _tex_util__WEBPACK_IMPORTED_MODULE_61__["getPackedMatrixTextureShapeWidthHeight"](texShape[0], texShape[1]);
                program = new _encode_matrix_packed_gpu__WEBPACK_IMPORTED_MODULE_28__["EncodeMatrixPackedProgram"](shapeAs3D, [height, width], isByteArray);
            }
            else {
                program =
                    new _encode_matrix_gpu__WEBPACK_IMPORTED_MODULE_27__["EncodeMatrixProgram"](shapeAs3D, [height, width], isByteArray);
            }
            const tempDenseInputHandle = this.makeTensorInfo([height, width], dtype);
            if (isByteArray) {
                this.texData.get(tempDenseInputHandle.dataId).usage =
                    _tex_util__WEBPACK_IMPORTED_MODULE_61__["TextureUsage"].PIXELS;
            }
            else {
                this.texData.get(tempDenseInputHandle.dataId).usage =
                    _tex_util__WEBPACK_IMPORTED_MODULE_61__["TextureUsage"].UPLOAD;
            }
            this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(tempDenseInputHandle.dataId), width, height, values);
            // We want the output to remain packed regardless of the value of
            // WEBGL_PACK.
            const preventEagerUnpacking = true;
            const encodedOutputTarget = this.runWebGLProgram(program, [tempDenseInputHandle], dtype, null, preventEagerUnpacking);
            // Have the original texture assume the identity of the encoded output.
            const outputTexData = this.texData.get(encodedOutputTarget.dataId);
            texData.texture = outputTexData.texture;
            texData.texShape = outputTexData.texShape;
            texData.isPacked = outputTexData.isPacked;
            texData.usage = outputTexData.usage;
            this.disposeIntermediateTensorInfo(tempDenseInputHandle);
            this.texData.delete(encodedOutputTarget.dataId);
            // Once uploaded, don't store the values on cpu.
            texData.values = null;
            if (shouldTimeProgram) {
                this.uploadWaitMs += _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["util"].now() - start;
            }
        }
        else {
            const newTexture = this.acquireTexture(texShape, usage, dtype, isPacked);
            texData.texture = newTexture;
        }
    }
    convertAndCacheOnCPU(dataId, float32Values) {
        const texData = this.texData.get(dataId);
        const { dtype } = texData;
        this.releaseGPUData(dataId);
        if (float32Values != null) {
            texData.values = float32ToTypedArray(float32Values, dtype);
        }
        return texData.values;
    }
    acquireTexture(texShape, texType, dtype, isPacked) {
        this.numBytesInGPU += this.computeBytes(texShape, dtype);
        if (!this.warnedAboutMemory &&
            this.numBytesInGPU > this.numMBBeforeWarning * 1024 * 1024) {
            const mb = (this.numBytesInGPU / 1024 / 1024).toFixed(2);
            this.warnedAboutMemory = true;
            console.warn(`High memory usage in GPU: ${mb} MB, ` +
                `most likely due to a memory leak`);
        }
        return this.textureManager.acquireTexture(texShape, texType, isPacked);
    }
    computeBytes(shape, dtype) {
        return shape[0] * shape[1] * _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["util"].bytesPerElement(dtype);
    }
    tryRunOnCpuOrThrow(inputs, fn) {
        if (this.shouldExecuteOnCPU(inputs)) {
            try {
                return fn();
            }
            catch (e) {
                if (Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__["env"])().getBool('IS_TEST')) {
                    throw new Error('CPU forwarding failed');
                }
            }
        }
        return null;
    }
}
function float32ToTypedArray(a, dtype) {
    if (dtype === 'float32' || dtype === 'complex64') {
        return a;
    }
    else if (dtype === 'int32' || dtype === 'bool') {
        const result = (dtype === 'int32') ? new Int32Array(a.length) :
            new Uint8Array(a.length);
        for (let i = 0; i < result.length; ++i) {
            result[i] = Math.round(a[i]);
        }
        return result;
    }
    else {
        throw new Error(`Unknown dtype ${dtype}`);
    }
}
//# sourceMappingURL=backend_webgl.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/base.js":
/*!******************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/base.js ***!
  \******************************************************************/
/*! exports provided: version_webgl, MathBackendWebGL, setWebGLContext, GPGPUContext, gpgpu_util, webgl_util, forceHalfFloat, webgl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webgl", function() { return webgl; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _backend_webgl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backend_webgl */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/backend_webgl.js");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./version */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/version.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "version_webgl", function() { return _version__WEBPACK_IMPORTED_MODULE_2__["version"]; });

/* harmony import */ var _webgl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./webgl */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/webgl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MathBackendWebGL", function() { return _webgl__WEBPACK_IMPORTED_MODULE_3__["MathBackendWebGL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setWebGLContext", function() { return _webgl__WEBPACK_IMPORTED_MODULE_3__["setWebGLContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GPGPUContext", function() { return _webgl__WEBPACK_IMPORTED_MODULE_3__["GPGPUContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gpgpu_util", function() { return _webgl__WEBPACK_IMPORTED_MODULE_3__["gpgpu_util"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webgl_util", function() { return _webgl__WEBPACK_IMPORTED_MODULE_3__["webgl_util"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forceHalfFloat", function() { return _webgl__WEBPACK_IMPORTED_MODULE_3__["forceHalfFloat"]; });

/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
// base.ts is the webgl backend without auto kernel registration.



if (_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["device_util"].isBrowser()) {
    Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["registerBackend"])('webgl', () => new _backend_webgl__WEBPACK_IMPORTED_MODULE_1__["MathBackendWebGL"](), 2 /* priority */);
}
// Export webgl utilities

// Export forceHalfFlost under webgl namespace for the union bundle.

const webgl = { forceHalfFloat: _webgl__WEBPACK_IMPORTED_MODULE_3__["forceHalfFloat"] };
//# sourceMappingURL=base.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/batchnorm_gpu.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/batchnorm_gpu.js ***!
  \***************************************************************************/
/*! exports provided: BatchNormProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatchNormProgram", function() { return BatchNormProgram; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

class BatchNormProgram {
    constructor(xShape, meanShape, varianceShape, offsetShape, scaleShape, varianceEpsilon) {
        this.outputShape = [];
        this.variableNames = ['x', 'mean', 'variance'];
        _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["backend_util"].assertAndGetBroadcastShape(xShape, meanShape);
        _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["backend_util"].assertAndGetBroadcastShape(xShape, varianceShape);
        let offsetSnippet = '0.0';
        if (offsetShape != null) {
            _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["backend_util"].assertAndGetBroadcastShape(xShape, offsetShape);
            this.variableNames.push('offset');
            offsetSnippet = 'getOffsetAtOutCoords()';
        }
        let scaleSnippet = '1.0';
        if (scaleShape != null) {
            _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["backend_util"].assertAndGetBroadcastShape(xShape, scaleShape);
            this.variableNames.push('scale');
            scaleSnippet = 'getScaleAtOutCoords()';
        }
        this.outputShape = xShape;
        this.userCode = `
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = ${offsetSnippet};
        float scale = ${scaleSnippet};
        float inv = scale * inversesqrt(variance + float(${varianceEpsilon}));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `;
    }
}
//# sourceMappingURL=batchnorm_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/batchnorm_packed_gpu.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/batchnorm_packed_gpu.js ***!
  \**********************************************************************************/
/*! exports provided: BatchNormPackedProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatchNormPackedProgram", function() { return BatchNormPackedProgram; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

class BatchNormPackedProgram {
    constructor(xShape, meanShape, varianceShape, offsetShape, scaleShape, varianceEpsilon) {
        this.packedInputs = true;
        this.packedOutput = true;
        this.variableNames = ['x', 'mean', 'variance'];
        _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["backend_util"].assertAndGetBroadcastShape(xShape, meanShape);
        _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["backend_util"].assertAndGetBroadcastShape(xShape, varianceShape);
        let offsetSnippet = 'vec4(0.0)';
        if (offsetShape != null) {
            _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["backend_util"].assertAndGetBroadcastShape(xShape, offsetShape);
            this.variableNames.push('offset');
            offsetSnippet = 'getOffsetAtOutCoords()';
        }
        let scaleSnippet = 'vec4(1.0)';
        if (scaleShape != null) {
            _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["backend_util"].assertAndGetBroadcastShape(xShape, scaleShape);
            this.variableNames.push('scale');
            scaleSnippet = 'getScaleAtOutCoords()';
        }
        this.outputShape = xShape;
        this.userCode = `
      void main() {
        vec4 offset = ${offsetSnippet};
        vec4 scale = ${scaleSnippet};

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(${varianceEpsilon}));

        setOutput((x - mean) * inv + offset);
      }
    `;
    }
}
//# sourceMappingURL=batchnorm_packed_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/binaryop_complex_gpu.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/binaryop_complex_gpu.js ***!
  \**********************************************************************************/
/*! exports provided: COMPLEX_MULTIPLY, BinaryOpComplexProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPLEX_MULTIPLY", function() { return COMPLEX_MULTIPLY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BinaryOpComplexProgram", function() { return BinaryOpComplexProgram; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

// (Ar + Ai)(Br + Bi) =
// ArBr + ArBi + AiBr + AiBi = ArBr - AB + ArBi + AiBr
// Yr = ArBr - AB
// Yi = ArBi + AiBr
const COMPLEX_MULTIPLY = {
    REAL: 'return areal * breal - aimag * bimag;',
    IMAG: 'return areal * bimag + aimag * breal;'
};
class BinaryOpComplexProgram {
    constructor(op, aShape, bShape) {
        this.variableNames = ['AReal', 'AImag', 'BReal', 'BImag'];
        this.outputShape = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["backend_util"].assertAndGetBroadcastShape(aShape, bShape);
        this.userCode = `
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        ${op}
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `;
    }
}
//# sourceMappingURL=binaryop_complex_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/binaryop_gpu.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/binaryop_gpu.js ***!
  \**************************************************************************/
/*! exports provided: INT_DIV, POW, SQUARED_DIFFERENCE, EQUAL, LESS, LESS_EQUAL, GREATER, GREATER_EQUAL, LOGICAL_AND, LOGICAL_OR, MAX, MIN, MOD, ELU_DER, PRELU, BinaryOpProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INT_DIV", function() { return INT_DIV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POW", function() { return POW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SQUARED_DIFFERENCE", function() { return SQUARED_DIFFERENCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EQUAL", function() { return EQUAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LESS", function() { return LESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LESS_EQUAL", function() { return LESS_EQUAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GREATER", function() { return GREATER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GREATER_EQUAL", function() { return GREATER_EQUAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGICAL_AND", function() { return LOGICAL_AND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGICAL_OR", function() { return LOGICAL_OR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX", function() { return MAX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN", function() { return MIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOD", function() { return MOD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ELU_DER", function() { return ELU_DER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRELU", function() { return PRELU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BinaryOpProgram", function() { return BinaryOpProgram; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

const CHECK_NAN_SNIPPET = `
  if (isnan(a)) return a;
  if (isnan(b)) return b;
`;
// We use native integer division to deal with floating point imprecision. Since
// we implement floor division and glsl implements truncated division, we
// correct for this by subtracting 1 from result when the result is negative and
// there is a remainder.
const INT_DIV = `
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`;
const POW = `
if(a < 0.0 && floor(b) < b){
  return NAN;
}
if (b == 0.0) {
  return 1.0;
}
return (round(mod(b, 2.0)) != 1) ?
    pow(abs(a), b) : sign(a) * pow(abs(a), b);
`;
const SQUARED_DIFFERENCE = 'return (a - b) * (a - b);';
const EQUAL = `return float(a == b);`;
const LESS = `return float(a < b);`;
const LESS_EQUAL = `return float(a <= b);`;
const GREATER = `return float(a > b);`;
const GREATER_EQUAL = `return float(a >= b);`;
const LOGICAL_AND = `return float(a >= 1.0 && b >= 1.0);`;
const LOGICAL_OR = `return float(a >= 1.0 || b >= 1.0);`;
const MAX = CHECK_NAN_SNIPPET + `
  return max(a, b);
`;
const MIN = CHECK_NAN_SNIPPET + `
  return min(a, b);
`;
const MOD = `if (b == 0.0) return NAN;
  return mod(a, b);`;
const ELU_DER = `return (b >= 1.0) ? a : a * (b + 1.0);`;
const PRELU = `return (a < 0.) ? b * a : a;`;
class BinaryOpProgram {
    constructor(op, aShape, bShape) {
        this.variableNames = ['A', 'B'];
        this.outputShape = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["backend_util"].assertAndGetBroadcastShape(aShape, bShape);
        this.userCode = `
      float binaryOperation(float a, float b) {
        ${op}
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `;
    }
}
//# sourceMappingURL=binaryop_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/binaryop_packed_gpu.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/binaryop_packed_gpu.js ***!
  \*********************************************************************************/
/*! exports provided: INT_DIV, POW, PRELU, ELU_DER, EQUAL, NOT_EQUAL, LESS, LESS_EQUAL, GREATER, GREATER_EQUAL, LOGICAL_AND, LOGICAL_OR, MAX, MIN, MOD, BinaryOpPackedProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INT_DIV", function() { return INT_DIV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POW", function() { return POW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRELU", function() { return PRELU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ELU_DER", function() { return ELU_DER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EQUAL", function() { return EQUAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOT_EQUAL", function() { return NOT_EQUAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LESS", function() { return LESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LESS_EQUAL", function() { return LESS_EQUAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GREATER", function() { return GREATER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GREATER_EQUAL", function() { return GREATER_EQUAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGICAL_AND", function() { return LOGICAL_AND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGICAL_OR", function() { return LOGICAL_OR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX", function() { return MAX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN", function() { return MIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOD", function() { return MOD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BinaryOpPackedProgram", function() { return BinaryOpPackedProgram; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _packing_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./packing_util */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/packing_util.js");
/* harmony import */ var _shader_compiler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shader_compiler */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/shader_compiler.js");
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */



const CHECK_NAN_SNIPPET = `
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;
`;
const INT_DIV = `
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`;
const POW = `
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  vec4 isNaN = vec4(lessThan(a, vec4(0.0))) * vec4(lessThan(floor(b), b));
  ` +
    CHECK_NAN_SNIPPET + `
  return result;
`;
const PRELU = `
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;
const ELU_DER = `
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`;
const EQUAL = `
  return vec4(equal(a, b));
`;
const NOT_EQUAL = `
  return vec4(notEqual(a, b));
`;
const LESS = `
  return vec4(lessThan(a, b));
`;
const LESS_EQUAL = `
  return vec4(lessThanEqual(a, b));
`;
const GREATER = `
  return vec4(greaterThan(a, b));
`;
const GREATER_EQUAL = `
  return vec4(greaterThanEqual(a, b));
`;
const LOGICAL_AND = `
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`;
const LOGICAL_OR = `
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`;
const MAX = `
  vec4 result = vec4(max(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  ` +
    CHECK_NAN_SNIPPET + `
  return result;
`;
const MIN = `
  vec4 result = vec4(min(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  ` +
    CHECK_NAN_SNIPPET + `
  return result;
`;
const MOD = `
  vec4 result = mod(a, b);
  vec4 isNaN = vec4(equal(b, vec4(0.0)));
  ` +
    CHECK_NAN_SNIPPET + `
  return result;
`;
class BinaryOpPackedProgram {
    constructor(op, aShape, bShape, checkOutOfBounds = false) {
        this.variableNames = ['A', 'B'];
        this.supportsBroadcasting = true;
        this.packedInputs = true;
        this.packedOutput = true;
        this.outputShape = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["backend_util"].assertAndGetBroadcastShape(aShape, bShape);
        const rank = this.outputShape.length;
        let checkOutOfBoundsString = '';
        if (checkOutOfBounds) {
            if (rank === 0 || _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].sizeFromShape(this.outputShape) === 1) {
                checkOutOfBoundsString = `
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;
            }
            else {
                const dtype = Object(_shader_compiler__WEBPACK_IMPORTED_MODULE_2__["getCoordsDataType"])(rank);
                checkOutOfBoundsString = `
          ${dtype} coords = getOutputCoords();
        `;
                if (rank === 1) {
                    checkOutOfBoundsString += `
            result.y = (coords + 1) >= ${this.outputShape[0]} ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;
                }
                else {
                    const channels = Object(_packing_util__WEBPACK_IMPORTED_MODULE_1__["getChannels"])('coords', rank);
                    checkOutOfBoundsString += `
            bool nextRowOutOfBounds =
              (${channels[rank - 2]} + 1) >= ${this.outputShape[rank - 2]};
            bool nextColOutOfBounds =
              (${channels[rank - 1]} + 1) >= ${this.outputShape[rank - 1]};
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `;
                }
            }
        }
        this.userCode = `
      vec4 binaryOperation(vec4 a, vec4 b) {
        ${op}
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        ${checkOutOfBoundsString}

        setOutput(result);
      }
    `;
    }
}
//# sourceMappingURL=binaryop_packed_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/canvas_util.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/canvas_util.js ***!
  \*************************************************************************/
/*! exports provided: clearWebGLContext, setWebGLContext, getWebGLContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearWebGLContext", function() { return clearWebGLContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setWebGLContext", function() { return setWebGLContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWebGLContext", function() { return getWebGLContext; });
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const contexts = {};
const WEBGL_ATTRIBUTES = {
    alpha: false,
    antialias: false,
    premultipliedAlpha: false,
    preserveDrawingBuffer: false,
    depth: false,
    stencil: false,
    failIfMajorPerformanceCaveat: true
};
function clearWebGLContext(webGLVersion) {
    delete contexts[webGLVersion];
}
function setWebGLContext(webGLVersion, gl) {
    contexts[webGLVersion] = gl;
}
function getWebGLContext(webGLVersion) {
    if (!(webGLVersion in contexts)) {
        const newCtx = getWebGLRenderingContext(webGLVersion);
        if (newCtx !== null) {
            contexts[webGLVersion] = newCtx;
        }
        else {
            console.log('Could not get context for WebGL version', webGLVersion);
            return null;
        }
    }
    const gl = contexts[webGLVersion];
    if (gl.isContextLost()) {
        delete contexts[webGLVersion];
        return getWebGLContext(webGLVersion);
    }
    gl.disable(gl.DEPTH_TEST);
    gl.disable(gl.STENCIL_TEST);
    gl.disable(gl.BLEND);
    gl.disable(gl.DITHER);
    gl.disable(gl.POLYGON_OFFSET_FILL);
    gl.disable(gl.SAMPLE_COVERAGE);
    gl.enable(gl.SCISSOR_TEST);
    gl.enable(gl.CULL_FACE);
    gl.cullFace(gl.BACK);
    return contexts[webGLVersion];
}
function createCanvas(webGLVersion) {
    if (typeof OffscreenCanvas !== 'undefined' && webGLVersion === 2) {
        return new OffscreenCanvas(300, 150);
    }
    else if (typeof document !== 'undefined') {
        return document.createElement('canvas');
    }
    else {
        throw new Error('Cannot create a canvas in this context');
    }
}
function getWebGLRenderingContext(webGLVersion) {
    if (webGLVersion !== 1 && webGLVersion !== 2) {
        throw new Error('Cannot get WebGL rendering context, WebGL is disabled.');
    }
    const canvas = createCanvas(webGLVersion);
    canvas.addEventListener('webglcontextlost', (ev) => {
        ev.preventDefault();
        delete contexts[webGLVersion];
    }, false);
    if (webGLVersion === 1) {
        return (canvas.getContext('webgl', WEBGL_ATTRIBUTES) ||
            canvas.getContext('experimental-webgl', WEBGL_ATTRIBUTES));
    }
    return canvas.getContext('webgl2', WEBGL_ATTRIBUTES);
}
//# sourceMappingURL=canvas_util.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/clip_gpu.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/clip_gpu.js ***!
  \**********************************************************************/
/*! exports provided: ClipProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipProgram", function() { return ClipProgram; });
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class ClipProgram {
    constructor(aShape) {
        this.variableNames = ['A'];
        this.outputShape = aShape;
        this.userCode = `
      uniform float minVal;
      uniform float maxVal;

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `;
    }
    getCustomSetupFunc(min, max) {
        return (gpgpu, webGLProgram) => {
            if (this.minLoc == null) {
                this.minLoc = gpgpu.getUniformLocationNoThrow(webGLProgram, 'minVal');
                this.maxLoc = gpgpu.getUniformLocationNoThrow(webGLProgram, 'maxVal');
            }
            gpgpu.gl.uniform1f(this.minLoc, min);
            gpgpu.gl.uniform1f(this.maxLoc, max);
        };
    }
}
//# sourceMappingURL=clip_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/clip_packed_gpu.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/clip_packed_gpu.js ***!
  \*****************************************************************************/
/*! exports provided: ClipPackedProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipPackedProgram", function() { return ClipPackedProgram; });
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class ClipPackedProgram {
    constructor(aShape) {
        this.variableNames = ['A'];
        this.packedInputs = true;
        this.packedOutput = true;
        this.outputShape = aShape;
        this.userCode = `
      uniform float minVal;
      uniform float maxVal;

      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `;
    }
    getCustomSetupFunc(min, max) {
        return (gpgpu, webGLProgram) => {
            if (this.minLoc == null) {
                this.minLoc = gpgpu.getUniformLocationNoThrow(webGLProgram, 'minVal');
                this.maxLoc = gpgpu.getUniformLocationNoThrow(webGLProgram, 'maxVal');
            }
            gpgpu.gl.uniform1f(this.minLoc, min);
            gpgpu.gl.uniform1f(this.maxLoc, max);
        };
    }
}
//# sourceMappingURL=clip_packed_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/complex_abs_gpu.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/complex_abs_gpu.js ***!
  \*****************************************************************************/
/*! exports provided: ComplexAbsProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplexAbsProgram", function() { return ComplexAbsProgram; });
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class ComplexAbsProgram {
    constructor(shape) {
        this.variableNames = ['real', 'imag'];
        this.outputShape = shape;
        this.userCode = `
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `;
    }
}
//# sourceMappingURL=complex_abs_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/concat_gpu.js":
/*!************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/concat_gpu.js ***!
  \************************************************************************/
/*! exports provided: ConcatProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConcatProgram", function() { return ConcatProgram; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

class ConcatProgram {
    // Concats 2d tensors along axis=1. See comments in MathBackendWebGL.concat().
    constructor(shapes) {
        this.outputShape = [];
        this.outputShape = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["backend_util"].computeOutShape(shapes, 1 /* axis */);
        this.variableNames = shapes.map((_, i) => `T${i}`);
        const offsets = new Array(shapes.length - 1);
        offsets[0] = shapes[0][1];
        for (let i = 1; i < offsets.length; i++) {
            offsets[i] = offsets[i - 1] + shapes[i][1];
        }
        const snippets = [`if (yC < ${offsets[0]}) setOutput(getT0(yR, yC));`];
        for (let i = 1; i < offsets.length; i++) {
            const shift = offsets[i - 1];
            snippets.push(`else if (yC < ${offsets[i]}) ` +
                `setOutput(getT${i}(yR, yC-${shift}));`);
        }
        const lastIndex = offsets.length;
        const lastShift = offsets[offsets.length - 1];
        snippets.push(`else setOutput(getT${lastIndex}(yR, yC-${lastShift}));`);
        this.userCode = `
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        ${snippets.join('\n        ')}
      }
    `;
    }
}
//# sourceMappingURL=concat_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/concat_packed_gpu.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/concat_packed_gpu.js ***!
  \*******************************************************************************/
/*! exports provided: ConcatPackedProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConcatPackedProgram", function() { return ConcatPackedProgram; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _packing_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./packing_util */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/packing_util.js");
/* harmony import */ var _shader_compiler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shader_compiler */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/shader_compiler.js");
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */



class ConcatPackedProgram {
    constructor(shapes, axis) {
        this.packedInputs = true;
        this.packedOutput = true;
        this.outputShape = [];
        this.outputShape = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["backend_util"].computeOutShape(shapes, axis);
        const shape = this.outputShape;
        const rank = shape.length;
        const dtype = Object(_shader_compiler__WEBPACK_IMPORTED_MODULE_2__["getCoordsDataType"])(rank);
        const coords = Object(_packing_util__WEBPACK_IMPORTED_MODULE_1__["getChannels"])('coords', rank);
        const channels = ['x', 'y', 'z', 'w', 'u', 'v'].slice(0, rank);
        this.variableNames = shapes.map((_, i) => `T${i}`);
        const offsets = new Array(shapes.length - 1);
        offsets[0] = shapes[0][axis];
        for (let i = 1; i < offsets.length; i++) {
            offsets[i] = offsets[i - 1] + shapes[i][axis];
        }
        const channel = channels[axis];
        const lastChannels = channels.slice(-2);
        const allChannels = channels.join();
        let getValueSnippet = `if (${channel} < ${offsets[0]}) {
        return getChannel(
            getT0(${allChannels}), vec2(${lastChannels.join()}));
        }`;
        for (let i = 1; i < offsets.length; i++) {
            const shift = offsets[i - 1];
            // Note: the >= comparison below may seem unnecessary given the check
            // above but is needed to workaround branch execution issues on some
            // devices. It makes all the conditions exclusive without relying on
            // execution order.
            getValueSnippet += `
        if (${channel} < ${offsets[i]}  && ${channel} >= ${offsets[i - 1]}) {
          return getChannel(
            getT${i}(${shiftedChannels(channels, channel, shift)}),
            vec2(${shiftedChannels(lastChannels, channel, shift)}));
        }`;
        }
        const lastIndex = offsets.length;
        const shift = offsets[offsets.length - 1];
        getValueSnippet += `
        return getChannel(
          getT${lastIndex}(${shiftedChannels(channels, channel, shift)}),
          vec2(${shiftedChannels(lastChannels, channel, shift)}));`;
        this.userCode = `
      float getValue(${channels.map(x => 'int ' + x)}) {
        ${getValueSnippet}
      }

      void main() {
        ${dtype} coords = getOutputCoords();
        vec4 result = vec4(getValue(${coords}), 0., 0., 0.);

        ${coords[rank - 1]} = ${coords[rank - 1]} + 1;
        if (${coords[rank - 1]} < ${shape[rank - 1]}) {
          result.g = getValue(${coords});
        }

        ${coords[rank - 2]} = ${coords[rank - 2]} + 1;
        if (${coords[rank - 2]} < ${shape[rank - 2]}) {
          result.a = getValue(${coords});
        }

        ${coords[rank - 1]} = ${coords[rank - 1]} - 1;
        if (${coords[rank - 2]} < ${shape[rank - 2]} &&
            ${coords[rank - 1]} < ${shape[rank - 1]}) {
          result.b = getValue(${coords});
        }
        setOutput(result);
      }
    `;
    }
}
/**
 * Return an expression for coordinates into a vector where a given channel
 * will be offset by [shift].
 *
 * @param channels the channels to consider
 * @param channel the channel we want shifted
 * @param shift  the amount to subtract from the channel.
 *
 * @returns a string of the form 'x, y-[shift], z' where any one channel can
 * have the shift applied.
 */
function shiftedChannels(channels, channel, shift) {
    const channelIdx = channels.indexOf(channel);
    const res = channels.map((c, idx) => {
        if (idx === channelIdx) {
            return `${c} - ${shift}`;
        }
        else {
            return c;
        }
    });
    return res.join();
}
//# sourceMappingURL=concat_packed_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/conv_backprop_gpu.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/conv_backprop_gpu.js ***!
  \*******************************************************************************/
/*! exports provided: Conv2DDerFilterProgram, Conv2DDerInputProgram, Conv3DDerFilterProgram, Conv3DDerInputProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Conv2DDerFilterProgram", function() { return Conv2DDerFilterProgram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Conv2DDerInputProgram", function() { return Conv2DDerInputProgram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Conv3DDerFilterProgram", function() { return Conv3DDerFilterProgram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Conv3DDerInputProgram", function() { return Conv3DDerInputProgram; });
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Conv2DDerFilterProgram {
    constructor(convInfo) {
        this.variableNames = ['x', 'dy'];
        this.outputShape = convInfo.filterShape;
        const strideHeight = convInfo.strideHeight;
        const strideWidth = convInfo.strideWidth;
        const padTop = convInfo.padInfo.top;
        const padLeft = convInfo.padInfo.left;
        const isChannelsLast = convInfo.dataFormat === 'channelsLast';
        this.userCode = `
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < ${convInfo.batchSize}; b++) {
          for (int yR = 0; yR < ${convInfo.outHeight}; yR++) {
            int xR = wR + yR * ${strideHeight} - ${padTop};

            if (xR < 0 || xR >= ${convInfo.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${convInfo.outWidth}; yC++) {
              int xC = wC + yC * ${strideWidth} - ${padLeft};

              if (xC < 0 || xC >= ${convInfo.inWidth}) {
                continue;
              }

              if (${isChannelsLast}) {
                float dyValue = getDy(b, yR, yC, d2);
                float xValue = getX(b, xR, xC, d1);
                dotProd += (xValue * dyValue);
              } else {
                float dyValue = getDy(b, d2, yR, yC);
                float xValue = getX(b, d1, xR, xC);
                dotProd += (xValue * dyValue);
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `;
    }
}
class Conv2DDerInputProgram {
    constructor(convInfo) {
        this.variableNames = ['dy', 'W'];
        this.outputShape = convInfo.inShape;
        const filterHeight = convInfo.filterHeight;
        const filterWidth = convInfo.filterWidth;
        const strideHeight = convInfo.strideHeight;
        const strideWidth = convInfo.strideWidth;
        const isChannelsLast = convInfo.dataFormat === 'channelsLast';
        const padTop = filterHeight - 1 - convInfo.padInfo.top;
        const padLeft = filterWidth - 1 - convInfo.padInfo.left;
        const rowDim = isChannelsLast ? 1 : 2;
        const colDim = isChannelsLast ? 2 : 3;
        const channelDim = isChannelsLast ? 3 : 1;
        this.userCode = `
      const ivec2 pads = ivec2(${padTop}, ${padLeft});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[${channelDim}];

        ivec2 dyCorner = ivec2(coords[${rowDim}], coords[${colDim}]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${filterHeight}; wR++) {
          float dyR = float(dyRCorner + wR) / ${strideHeight}.0;

          if (dyR < 0.0 || dyR >= ${convInfo.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${filterHeight} - 1 - wR;

          for (int wC = 0; wC < ${filterWidth}; wC++) {
            float dyC = float(dyCCorner + wC) / ${strideWidth}.0;

            if (dyC < 0.0 || dyC >= ${convInfo.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${filterWidth} - 1 - wC;

            for (int d2 = 0; d2 < ${convInfo.outChannels}; d2++) {

              if (${isChannelsLast}) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `;
    }
}
class Conv3DDerFilterProgram {
    constructor(convInfo) {
        this.variableNames = ['x', 'dy'];
        this.outputShape = convInfo.filterShape;
        const strideDepth = convInfo.strideDepth;
        const strideHeight = convInfo.strideHeight;
        const strideWidth = convInfo.strideWidth;
        const padFront = convInfo.padInfo.front;
        const padTop = convInfo.padInfo.top;
        const padLeft = convInfo.padInfo.left;
        this.userCode = `
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < ${convInfo.batchSize}; b++) {
          for (int yF = 0; yF < ${convInfo.outDepth}; yF++) {
            int xF = wF + yF * ${strideDepth} - ${padFront};

            if (xF < 0 || xF >= ${convInfo.inDepth}) {
              continue;
            }

            for (int yR = 0; yR < ${convInfo.outHeight}; yR++) {
              int xR = wR + yR * ${strideHeight} - ${padTop};

              if (xR < 0 || xR >= ${convInfo.inHeight}) {
                continue;
              }

              for (int yC = 0; yC < ${convInfo.outWidth}; yC++) {
                int xC = wC + yC * ${strideWidth} - ${padLeft};

                if (xC < 0 || xC >= ${convInfo.inWidth}) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `;
    }
}
class Conv3DDerInputProgram {
    constructor(convInfo) {
        this.variableNames = ['dy', 'W'];
        this.outputShape = convInfo.inShape;
        const filterDepth = convInfo.filterDepth;
        const filterHeight = convInfo.filterHeight;
        const filterWidth = convInfo.filterWidth;
        const strideDepth = convInfo.strideDepth;
        const strideHeight = convInfo.strideHeight;
        const strideWidth = convInfo.strideWidth;
        const padFront = filterDepth - 1 - convInfo.padInfo.front;
        const padTop = filterHeight - 1 - convInfo.padInfo.top;
        const padLeft = filterWidth - 1 - convInfo.padInfo.left;
        this.userCode = `
      const ivec3 pads = ivec3(${padFront}, ${padTop}, ${padLeft});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < ${filterDepth}; wF++) {
          float dyF = float(dyFCorner + wF) / ${strideDepth}.0;

          if (dyF < 0.0 || dyF >= ${convInfo.outDepth}.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = ${filterDepth} - 1 - wF;

          for (int wR = 0; wR < ${filterHeight}; wR++) {
            float dyR = float(dyRCorner + wR) / ${strideHeight}.0;

            if (dyR < 0.0 || dyR >= ${convInfo.outHeight}.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = ${filterHeight} - 1 - wR;

            for (int wC = 0; wC < ${filterWidth}; wC++) {
              float dyC = float(dyCCorner + wC) / ${strideWidth}.0;

              if (dyC < 0.0 || dyC >= ${convInfo.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = ${filterWidth} - 1 - wC;

              for (int d2 = 0; d2 < ${convInfo.outChannels}; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `;
    }
}
//# sourceMappingURL=conv_backprop_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/conv_backprop_gpu_depthwise.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/conv_backprop_gpu_depthwise.js ***!
  \*****************************************************************************************/
/*! exports provided: DepthwiseConv2DDerFilterProgram, DepthwiseConv2DDerInputProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepthwiseConv2DDerFilterProgram", function() { return DepthwiseConv2DDerFilterProgram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepthwiseConv2DDerInputProgram", function() { return DepthwiseConv2DDerInputProgram; });
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class DepthwiseConv2DDerFilterProgram {
    constructor(convInfo) {
        this.variableNames = ['x', 'dy'];
        this.outputShape = convInfo.filterShape;
        const strideHeight = convInfo.strideHeight;
        const strideWidth = convInfo.strideWidth;
        const padTop = convInfo.padInfo.top;
        const padLeft = convInfo.padInfo.left;
        const channelMul = convInfo.outChannels / convInfo.inChannels;
        this.userCode = `
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * ${channelMul} + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < ${convInfo.batchSize}; b++) {
          for (int yR = 0; yR < ${convInfo.outHeight}; yR++) {
            int xR = wR + yR * ${strideHeight} - ${padTop};

            if (xR < 0 || xR >= ${convInfo.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${convInfo.outWidth}; yC++) {
              int xC = wC + yC * ${strideWidth} - ${padLeft};

              if (xC < 0 || xC >= ${convInfo.inWidth}) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `;
    }
}
class DepthwiseConv2DDerInputProgram {
    constructor(convInfo) {
        this.variableNames = ['dy', 'W'];
        this.outputShape = convInfo.inShape;
        const filterHeight = convInfo.filterHeight;
        const filterWidth = convInfo.filterWidth;
        const strideHeight = convInfo.strideHeight;
        const strideWidth = convInfo.strideWidth;
        const padTop = filterHeight - 1 - convInfo.padInfo.top;
        const padLeft = filterWidth - 1 - convInfo.padInfo.left;
        const channelMul = convInfo.outChannels / convInfo.inChannels;
        this.userCode = `
      const ivec2 pads = ivec2(${padTop}, ${padLeft});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < ${filterHeight}; wR++) {
          float dyR = float(dyRCorner + wR) / ${strideHeight}.0;

          if (dyR < 0.0 || dyR >= ${convInfo.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${filterHeight} - 1 - wR;

          for (int wC = 0; wC < ${filterWidth}; wC++) {
            float dyC = float(dyCCorner + wC) / ${strideWidth}.0;

            if (dyC < 0.0 || dyC >= ${convInfo.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${filterWidth} - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < ${channelMul}; dm++) {
              int d2 = d1 * ${channelMul} + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `;
    }
}
//# sourceMappingURL=conv_backprop_gpu_depthwise.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/conv_gpu.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/conv_gpu.js ***!
  \**********************************************************************/
/*! exports provided: Conv2DProgram, Conv3DProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Conv2DProgram", function() { return Conv2DProgram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Conv3DProgram", function() { return Conv3DProgram; });
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Conv2DProgram {
    constructor(convInfo, addBias = false, activation = null, hasPreluActivationWeights = false) {
        this.variableNames = ['x', 'W'];
        this.outputShape = convInfo.outShape;
        const padTop = convInfo.padInfo.top;
        const padLeft = convInfo.padInfo.left;
        const strideHeight = convInfo.strideHeight;
        const strideWidth = convInfo.strideWidth;
        const dilationHeight = convInfo.dilationHeight;
        const dilationWidth = convInfo.dilationWidth;
        const filterHeight = convInfo.filterHeight;
        const filterWidth = convInfo.filterWidth;
        const inputDepthNearestVec4 = Math.floor(convInfo.inChannels / 4) * 4;
        const inputDepthVec4Remainder = convInfo.inChannels % 4;
        const isChannelsLast = convInfo.dataFormat === 'channelsLast';
        const rowDim = isChannelsLast ? 1 : 2;
        const colDim = isChannelsLast ? 2 : 3;
        const channelDim = isChannelsLast ? 3 : 1;
        let activationSnippet = '', applyActivationSnippet = '';
        if (activation) {
            if (hasPreluActivationWeights) {
                activationSnippet = `float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${activation}
        }`;
            }
            else {
                activationSnippet = `
          float activation(float x) {
            ${activation}
          }
        `;
            }
            applyActivationSnippet = `result = activation(result);`;
        }
        const addBiasSnippet = addBias ? 'result += getBiasAtOutCoords();' : '';
        if (addBias) {
            this.variableNames.push('bias');
        }
        if (hasPreluActivationWeights) {
            this.variableNames.push('preluActivationWeights');
        }
        this.userCode = `
      ${activationSnippet}

      const ivec2 strides = ivec2(${strideHeight}, ${strideWidth});
      const ivec2 pads = ivec2(${padTop}, ${padLeft});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[${channelDim}];

        ivec2 xRCCorner =
            ivec2(coords[${rowDim}], coords[${colDim}]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${filterHeight}; wR++) {
          int xR = xRCorner + wR * ${dilationHeight};

          if (xR < 0 || xR >= ${convInfo.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${filterWidth}; wC++) {
            int xC = xCCorner + wC * ${dilationWidth};

            if (xC < 0 || xC >= ${convInfo.inWidth}) {
              continue;
            }

            for (int d1 = 0; d1 < ${inputDepthNearestVec4}; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (${isChannelsLast}) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (${inputDepthVec4Remainder === 1}) {

              if (${isChannelsLast}) {
                dotProd +=
                    getX(batch, xR, xC, ${inputDepthNearestVec4}) *
                    getW(wR, wC, ${inputDepthNearestVec4}, d2);
              } else {
                dotProd +=
                    getX(batch, ${inputDepthNearestVec4}, xR, xC) *
                    getW(wR, wC, ${inputDepthNearestVec4}, d2);
              }

            } else if (${inputDepthVec4Remainder === 2}) {
              vec2 wValues = vec2(
                getW(wR, wC, ${inputDepthNearestVec4}, d2),
                getW(wR, wC, ${inputDepthNearestVec4} + 1, d2)
              );

              if (${isChannelsLast}) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, ${inputDepthNearestVec4}),
                  getX(batch, xR, xC, ${inputDepthNearestVec4} + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, ${inputDepthNearestVec4}, xR, xC),
                  getX(batch, ${inputDepthNearestVec4} + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (${inputDepthVec4Remainder === 3}) {
              vec3 wValues = vec3(
                getW(wR, wC, ${inputDepthNearestVec4}, d2),
                getW(wR, wC, ${inputDepthNearestVec4} + 1, d2),
                getW(wR, wC, ${inputDepthNearestVec4} + 2, d2)
              );

              if (${isChannelsLast}) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, ${inputDepthNearestVec4}),
                  getX(batch, xR, xC, ${inputDepthNearestVec4} + 1),
                  getX(batch, xR, xC, ${inputDepthNearestVec4} + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, ${inputDepthNearestVec4}, xR, xC),
                  getX(batch, ${inputDepthNearestVec4} + 1, xR, xC),
                  getX(batch, ${inputDepthNearestVec4} + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        ${addBiasSnippet}
        ${applyActivationSnippet}
        setOutput(result);
      }
    `;
    }
}
class Conv3DProgram {
    constructor(convInfo) {
        this.variableNames = ['x', 'W'];
        this.outputShape = convInfo.outShape;
        const padFront = convInfo.padInfo.front;
        const padTop = convInfo.padInfo.top;
        const padLeft = convInfo.padInfo.left;
        const strideDepth = convInfo.strideDepth;
        const strideHeight = convInfo.strideHeight;
        const strideWidth = convInfo.strideWidth;
        const dilationDepth = convInfo.dilationDepth;
        const dilationHeight = convInfo.dilationHeight;
        const dilationWidth = convInfo.dilationWidth;
        const filterDepth = convInfo.filterDepth;
        const filterHeight = convInfo.filterHeight;
        const filterWidth = convInfo.filterWidth;
        const inputDepthNearestVec4 = Math.floor(convInfo.inChannels / 4) * 4;
        const inputDepthVec4Remainder = convInfo.inChannels % 4;
        this.userCode = `
      const ivec3 strides = ivec3(${strideDepth}, ${strideHeight}, ${strideWidth});
      const ivec3 pads = ivec3(${padFront}, ${padTop}, ${padLeft});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < ${filterDepth}; wF++) {
          int xF = xFCorner + wF * ${dilationDepth};

          if (xF < 0 || xF >= ${convInfo.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${filterHeight}; wR++) {
            int xR = xRCorner + wR * ${dilationHeight};

            if (xR < 0 || xR >= ${convInfo.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${filterWidth}; wC++) {
              int xC = xCCorner + wC * ${dilationWidth};

              if (xC < 0 || xC >= ${convInfo.inWidth}) {
                continue;
              }

              for (int d1 = 0; d1 < ${inputDepthNearestVec4}; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (${inputDepthVec4Remainder === 1}) {
                dotProd +=
                  getX(batch, xF, xR, xC, ${inputDepthNearestVec4}) *
                  getW(wF, wR, wC, ${inputDepthNearestVec4}, d2);
              } else if (${inputDepthVec4Remainder === 2}) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, ${inputDepthNearestVec4}),
                  getX(batch, xF, xR, xC, ${inputDepthNearestVec4} + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, ${inputDepthNearestVec4}, d2),
                  getW(wF, wR, wC, ${inputDepthNearestVec4} + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (${inputDepthVec4Remainder === 3}) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, ${inputDepthNearestVec4}),
                  getX(batch, xF, xR, xC, ${inputDepthNearestVec4} + 1),
                  getX(batch, xF, xR, xC, ${inputDepthNearestVec4} + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, ${inputDepthNearestVec4}, d2),
                  getW(wF, wR, wC, ${inputDepthNearestVec4} + 1, d2),
                  getW(wF, wR, wC, ${inputDepthNearestVec4} + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `;
    }
}
//# sourceMappingURL=conv_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/conv_gpu_depthwise.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/conv_gpu_depthwise.js ***!
  \********************************************************************************/
/*! exports provided: DepthwiseConv2DProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepthwiseConv2DProgram", function() { return DepthwiseConv2DProgram; });
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class DepthwiseConv2DProgram {
    constructor(convInfo, addBias = false, activation = null, hasPreluActivation = false) {
        this.variableNames = ['x', 'W'];
        this.outputShape = convInfo.outShape;
        const xNumRows = convInfo.inHeight;
        const xNumCols = convInfo.inWidth;
        const padTop = convInfo.padInfo.top;
        const padLeft = convInfo.padInfo.left;
        const strideHeight = convInfo.strideHeight;
        const strideWidth = convInfo.strideWidth;
        const dilationHeight = convInfo.dilationHeight;
        const dilationWidth = convInfo.dilationWidth;
        const filterHeight = convInfo.filterHeight;
        const filterWidth = convInfo.filterWidth;
        const channelMul = convInfo.outChannels / convInfo.inChannels;
        let activationSnippet = '', applyActivationSnippet = '';
        if (activation) {
            if (hasPreluActivation) {
                activationSnippet = `float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${activation}
        }`;
            }
            else {
                activationSnippet = `
          float activation(float x) {
            ${activation}
          }
        `;
            }
            applyActivationSnippet = `result = activation(result);`;
        }
        const addBiasSnippet = addBias ? 'result += getBiasAtOutCoords();' : '';
        if (addBias) {
            this.variableNames.push('bias');
        }
        if (hasPreluActivation) {
            this.variableNames.push('preluActivationWeights');
        }
        this.userCode = `
      ${activationSnippet}

      const ivec2 strides = ivec2(${strideHeight}, ${strideWidth});
      const ivec2 pads = ivec2(${padTop}, ${padLeft});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${channelMul};
        int q = d2 - d1 * ${channelMul};

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < ${filterHeight}; wR++) {
          int xR = xRCorner + wR * ${dilationHeight};

          if (xR < 0 || xR >= ${xNumRows}) {
            continue;
          }

          for (int wC = 0; wC < ${filterWidth}; wC++) {
            int xC = xCCorner + wC * ${dilationWidth};

            if (xC < 0 || xC >= ${xNumCols}) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        ${addBiasSnippet}
        ${applyActivationSnippet}
        setOutput(result);
      }
    `;
    }
}
//# sourceMappingURL=conv_gpu_depthwise.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/conv_packed_gpu_depthwise.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/conv_packed_gpu_depthwise.js ***!
  \***************************************************************************************/
/*! exports provided: DepthwiseConvPacked2DProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepthwiseConvPacked2DProgram", function() { return DepthwiseConvPacked2DProgram; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

class DepthwiseConvPacked2DProgram {
    constructor(convInfo, addBias = false, activation = null, hasPreluActivation = false) {
        this.variableNames = ['x', 'W'];
        this.packedInputs = true;
        this.packedOutput = true;
        this.outputShape = convInfo.outShape;
        const xNumRows = convInfo.inHeight;
        const xNumCols = convInfo.inWidth;
        const padTop = convInfo.padInfo.top;
        const padLeft = convInfo.padInfo.left;
        const strideHeight = convInfo.strideHeight;
        const strideWidth = convInfo.strideWidth;
        const dilationHeight = convInfo.dilationHeight;
        const dilationWidth = convInfo.dilationWidth;
        const filterHeight = convInfo.filterHeight;
        const filterWidth = convInfo.filterWidth;
        const texelsAcross = filterWidth;
        let mainLoop = `int xR; int xC; int xCOffset;`;
        for (let r = 0; r < filterHeight; r++) {
            for (let c = 0; c < filterWidth; c++) {
                mainLoop += `
          vec4 xTexelR${r}C${c * 2} = vec4(0.);
          vec4 wR${r}C${c} = vec4(0.);
          vec4 xR${r}C${c} = vec4(0.);`;
            }
        }
        /**
         * This vectorized implementation works by gathering the values needed for
         * each output channel's dot product into vec4's and then multiplying them
         * all together (this happens in the final double for-loop below). Most of
         * the main loop consists of constructing these vec4's with the minimum
         * number of texture2D calls, which means making use of all four returned
         * values from a texture2D call at once.
         */
        for (let r = 0; r < filterHeight; r++) {
            for (let texelC = 0; texelC < texelsAcross; texelC++) {
                const c = texelC * 2;
                mainLoop += `
          xR = xRCorner + ${r * dilationHeight};
          xC = xCCorner + ${c * dilationWidth};
        `;
                if (strideWidth === 1) {
                    if (c < filterWidth) {
                        // If padding is odd, the outer texels have to be composed.
                        if (padLeft % 2 === 1) {
                            // TODO: Ensure vec4 previous does not result in redundant sample,
                            // and avoid setting xTexelRC's that exceed the boundary in the
                            // first place rather than resetting them to vec4(0)).
                            // To compute xCOffset:
                            // - If padding is odd, we must add 1 to ensure we ask for an
                            // even-numbered row.
                            // - We subtract 2 to access the previous texel.
                            mainLoop += `
                xCOffset = xC + 1;
                if(xR >= 0 && xR < ${xNumRows} && xCOffset >= 0 && xCOffset < ${xNumCols}) {
                  xTexelR${r}C${c} = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= ${xNumCols}) {
                    xTexelR${r}C${c}.zw = vec2(0.);
                  }
                } else {
                  xTexelR${r}C${c} = vec4(0.);
                }

                xCOffset = xC + 1 - 2;
                if(xR >= 0 && xR < ${xNumRows} && xCOffset >= 0 && xCOffset < ${xNumCols}) {
                  vec4 previous = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= ${xNumCols}) {
                    previous.zw = vec2(0.);
                  }

                  xR${r}C${c} = vec4(previous.zw, xTexelR${r}C${c}.xy);
                } else {
                  xR${r}C${c} = vec4(0, 0, xTexelR${r}C${c}.xy);
                }
              `;
                        }
                        else {
                            // Padding is even, so xRC corresponds to a single texel.
                            mainLoop += `
                if(xR >= 0 && xR < ${xNumRows} && xC >= 0 && xC < ${xNumCols}) {
                  xTexelR${r}C${c} = getX(batch, xR, xC, d1);
                } else {
                  xTexelR${r}C${c} = vec4(0.);
                }

                xR${r}C${c} = xTexelR${r}C${c};
              `;
                        }
                        if (c + 1 < filterWidth) {
                            // If dilation is even, the second entry should match the first
                            // (either both are composed or both are single samples). But if
                            // dilation is odd, then the second entry should be the opposite
                            // of the first (if the first is composed, the second is a single
                            // sample, and vice versa.)
                            const nextTexelOffset = padLeft % 2 === 0 ?
                                _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].nearestLargerEven(dilationWidth) :
                                dilationWidth;
                            if ((dilationWidth % 2 === 0 && padLeft % 2 === 1) ||
                                (dilationWidth % 2 !== 0 && padLeft % 2 !== 1)) {
                                mainLoop += `
                  xCOffset = xC + ${padLeft % 2} + ${nextTexelOffset};

                  if(xR >= 0 && xR < ${xNumRows} &&
                    xCOffset >= 0 && xCOffset < ${xNumCols}) {
                    xTexelR${r}C${c + 2} = getX(batch, xR, xCOffset, d1);
                  }
                `;
                                // If dilation > 1 then the xRC's will not be able to share any
                                // values, so each xRC will require two unique calls to getX.
                                if (dilationWidth > 1) {
                                    mainLoop += `
                    xCOffset -= 2;
                    if(xR >= 0 && xR < ${xNumRows} &&
                      xCOffset >= 0 && xCOffset < ${xNumCols}) {
                      xTexelR${r}C${c} = getX(batch, xR, xCOffset, d1);
                    } else {
                      xTexelR${r}C${c} = vec4(0.);
                    }
                  `;
                                }
                                mainLoop += `
                  xR${r}C${c + 1} = vec4(
                    xTexelR${r}C${c}.zw, xTexelR${r}C${c + 2}.xy);
                `;
                            }
                            else {
                                mainLoop += `
                  xCOffset = xC + ${nextTexelOffset};

                  if(xR >= 0 && xR < ${xNumRows} &&
                    xCOffset >= 0 && xCOffset < ${xNumCols}) {
                    xTexelR${r}C${c + 2} = getX(batch, xR, xCOffset, d1);
                  }

                  xR${r}C${c + 1} = xTexelR${r}C${c + 2};
                `;
                            }
                        }
                    }
                }
                else { // stride > 1
                    if (c < filterWidth) {
                        mainLoop += `
              if(xR >= 0 && xR < ${xNumRows}) {
            `;
                        // Depending on whether padLeft is even or odd, we want either the
                        // xy or zw channels from X texels for xR${r}C${c}. If padLeft is
                        // even, xR${r}C${c + 1} is simply the zw channels of texels we've
                        // already sampled. But if padLeft is odd, xR${r}C{$c + 1}.zw will
                        // need to come from the xy channels of a new texel, hence the `vec4
                        // final` initialized below.
                        if (padLeft % 2 === 1) {
                            mainLoop += `
                xCOffset = xC + 1 - ${strideWidth};
                if(xCOffset >= 0 && xCOffset < ${xNumCols}) {
                  xTexelR${r}C${c} = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR${r}C${c} = vec4(0.);
                }

                if(xC + 1 >= 0 && xC + 1 < ${xNumCols}) {
                  xTexelR${r}C${c + 2} = getX(batch, xR, xC + 1, d1);
                } else {
                  xTexelR${r}C${c + 2} = vec4(0.);
                }

                xR${r}C${c} = vec4(
                  xTexelR${r}C${c}.zw, xTexelR${r}C${c + 2}.zw);
              `;
                            if (c + 1 < filterWidth) {
                                mainLoop += `
                  vec4 final = vec4(0.);
                  xCOffset = xC + 1 + ${strideWidth};
                  if(xCOffset >= 0 && xCOffset < ${xNumCols}) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xR${r}C${c + 1} = vec4(xTexelR${r}C${c + 2}.xy, final.xy);
                `;
                            }
                        }
                        else {
                            mainLoop += `
                if(xC >= 0 && xC < ${xNumCols}) {
                  xTexelR${r}C${c} = getX(batch, xR, xC, d1);
                } else {
                  xTexelR${r}C${c} = vec4(0.);
                }

                xCOffset = xC + ${strideWidth};
                if(xCOffset >= 0 && xCOffset < ${xNumCols}) {
                  xTexelR${r}C${c + 2} = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR${r}C${c + 2} = vec4(0.);
                }

                xR${r}C${c} = vec4(
                  xTexelR${r}C${c}.xy, xTexelR${r}C${c + 2}.xy);
              `;
                            if (c + 1 < filterWidth) {
                                mainLoop += `
                  xR${r}C${c + 1} = vec4(
                    xTexelR${r}C${c}.zw, xTexelR${r}C${c + 2}.zw);
                `;
                            }
                        }
                        mainLoop += `}`;
                    }
                }
                if (c < filterWidth) {
                    mainLoop += `
            vec4 wTexelR${r}C${c} = getW(${r}, ${c}, d1, q);
            wR${r}C${c} = vec4(wTexelR${r}C${c}.xz, wTexelR${r}C${c}.xz);
          `;
                    if (c + 1 < filterWidth) {
                        mainLoop += `
              vec4 wTexelR${r}C${c + 1} = getW(${r}, ${c + 1}, d1, q);
              wR${r}C${c + 1} =
                vec4(wTexelR${r}C${c + 1}.xz, wTexelR${r}C${c + 1}.xz);`;
                    }
                }
            }
        }
        for (let r = 0; r < filterHeight; r++) {
            for (let c = 0; c < filterWidth; c++) {
                mainLoop += `dotProd += xR${r}C${c} * wR${r}C${c};`;
            }
        }
        let activationSnippet = '', applyActivationSnippet = '';
        if (activation) {
            if (hasPreluActivation) {
                activationSnippet = `vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${activation}
        }`;
            }
            else {
                activationSnippet = `vec4 activation(vec4 x) {
          ${activation}
        }`;
            }
            applyActivationSnippet = `result = activation(result);`;
        }
        const addBiasSnippet = addBias ? 'result += getBiasAtOutCoords();' : '';
        if (addBias) {
            this.variableNames.push('bias');
        }
        if (hasPreluActivation) {
            this.variableNames.push('preluActivationWeights');
        }
        this.userCode = `
      ${activationSnippet}

      const ivec2 strides = ivec2(${strideHeight}, ${strideWidth});
      const ivec2 pads = ivec2(${padTop}, ${padLeft});

      void main() {

        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2;
        int q = 0;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        vec4 dotProd = vec4(0.);

        ${mainLoop}

        vec4 result = dotProd;
        ${addBiasSnippet}
        ${applyActivationSnippet}
        setOutput(result);
      }
    `;
    }
}
//# sourceMappingURL=conv_packed_gpu_depthwise.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/crop_and_resize_gpu.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/crop_and_resize_gpu.js ***!
  \*********************************************************************************/
/*! exports provided: CropAndResizeProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CropAndResizeProgram", function() { return CropAndResizeProgram; });
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class CropAndResizeProgram {
    constructor(imageShape, boxShape, cropSize, method, extrapolationValue) {
        this.variableNames = ['Image', 'Boxes', 'BoxInd'];
        this.outputShape = [];
        const [batch, imageHeight, imageWidth, depth] = imageShape;
        const [numBoxes,] = boxShape;
        const [cropHeight, cropWidth] = cropSize;
        this.outputShape = [numBoxes, cropHeight, cropWidth, depth];
        const methodId = method === 'bilinear' ? 1 : 0;
        const [inputHeightFloat, inputWidthFloat] = [`${imageHeight - 1}.0`, `${imageWidth - 1}.0`];
        const [heightRatio, heightScale, inY] = cropHeight > 1 ?
            [
                `${(imageHeight - 1) / (cropHeight - 1)}`,
                '(y2-y1) * height_ratio',
                `y1*${inputHeightFloat} + float(y)*(height_scale)`,
            ] :
            [
                '0.0',
                '0.0',
                `0.5 * (y1+y2) * ${inputHeightFloat}`,
            ];
        const [widthRatio, widthScale, inX] = cropWidth > 1 ?
            [
                `${(imageWidth - 1) / (cropWidth - 1)}`,
                '(x2-x1) * width_ratio',
                `x1*${inputWidthFloat} + float(x)*(width_scale)`,
            ] :
            [
                '0.0',
                '0.0',
                `0.5 * (x1+x2) * ${inputWidthFloat}`,
            ];
        // Reference implementation
        // tslint:disable-next-line:max-line-length
        // https://github.com/tensorflow/tensorflow/blob/master/tensorflow/core/kernels/crop_and_resize_op_gpu.cu.cc
        this.userCode = `
      const float height_ratio = float(${heightRatio});
      const float width_ratio = float(${widthRatio});
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= ${batch}) {
          return;
        }

        float height_scale = ${heightScale};
        float width_scale = ${widthScale};

        float in_y = ${inY};
        if( in_y < 0.0 || in_y > ${inputHeightFloat} ) {
          setOutput(float(${extrapolationValue}));
          return;
        }
        float in_x = ${inX};
        if( in_x < 0.0 || in_x > ${inputWidthFloat} ) {
          setOutput(float(${extrapolationValue}));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(${methodId} == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `;
    }
}
//# sourceMappingURL=crop_and_resize_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/cumsum_gpu.js":
/*!************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/cumsum_gpu.js ***!
  \************************************************************************/
/*! exports provided: CumSumProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CumSumProgram", function() { return CumSumProgram; });
/* harmony import */ var _shader_compiler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shader_compiler */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/shader_compiler.js");

class CumSumProgram {
    constructor(shape, exclusive, reverse) {
        this.variableNames = ['x'];
        this.outputShape = shape;
        const rank = shape.length;
        const val = exclusive ? '0.0' : `getX(${getCoords(rank, 'coords')})`;
        const length = shape[shape.length - 1];
        let condition = '';
        let idxString = '';
        // When exclusive is set, the cumsum op becomes roll op that copies the
        // value from the previous index based on the direction specified by the
        // reverse flag.
        if (exclusive) {
            condition = reverse ? `end != ${length - 1}` : 'end != 0';
            idxString = reverse ? 'end + 1' : 'end - 1';
        }
        else {
            condition = reverse ? `end + pow2 < ${length}` : 'end >= pow2';
            idxString = (reverse ? 'end + pow2' : 'end - pow2');
        }
        this.userCode = `
      uniform float index;
      void main() {
        ${Object(_shader_compiler__WEBPACK_IMPORTED_MODULE_0__["getCoordsDataType"])(rank)} coords = getOutputCoords();
        int end = ${getFinalCoord(rank, 'coords')};
        float val = ${val};
        int pow2 = int(pow(2.0, index));
        if (${condition}) {
          int idx = ${idxString};
          ${getFinalCoord(rank, 'coords')} = idx;
          val += getX(${getCoords(rank, 'coords')});
        }
        setOutput(val);
      }
    `;
    }
    getCustomSetupFunc(index) {
        return (gpgpu, webGLProgram) => {
            if (this.index == null) {
                this.index = gpgpu.getUniformLocation(webGLProgram, 'index');
            }
            gpgpu.gl.uniform1f(this.index, index);
        };
    }
}
function getCoords(rank, name) {
    if (rank === 1) {
        return `${name}`;
    }
    else if (rank === 2) {
        return `${name}.x, ${name}.y`;
    }
    else if (rank === 3) {
        return `${name}.x, ${name}.y, ${name}.z`;
    }
    else if (rank === 4) {
        return `${name}.x, ${name}.y, ${name}.z, ${name}.w`;
    }
    else {
        throw Error(`Cumulative sum for rank ${rank} is not yet supported`);
    }
}
function getFinalCoord(rank, name) {
    if (rank === 1) {
        return `${name}`;
    }
    else if (rank === 2) {
        return `${name}.y`;
    }
    else if (rank === 3) {
        return `${name}.z`;
    }
    else if (rank === 4) {
        return `${name}.w`;
    }
    else {
        throw Error(`Cumulative sum for rank ${rank} is not yet supported`);
    }
}
//# sourceMappingURL=cumsum_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/decode_matrix_gpu.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/decode_matrix_gpu.js ***!
  \*******************************************************************************/
/*! exports provided: DecodeMatrixProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecodeMatrixProgram", function() { return DecodeMatrixProgram; });
/* harmony import */ var _glsl_version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glsl_version */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/glsl_version.js");
/* harmony import */ var _shader_compiler_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shader_compiler_util */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/shader_compiler_util.js");
/* harmony import */ var _tex_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tex_util */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/tex_util.js");
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */



class DecodeMatrixProgram {
    constructor(outputShape) {
        this.variableNames = ['A'];
        this.packedInputs = false;
        this.packedOutput = true;
        this.outPackingScheme = _tex_util__WEBPACK_IMPORTED_MODULE_2__["PackingScheme"].DENSE;
        const texShape = Object(_tex_util__WEBPACK_IMPORTED_MODULE_2__["getDenseTexShape"])(outputShape);
        const glsl = Object(_glsl_version__WEBPACK_IMPORTED_MODULE_0__["getGlslDifferences"])();
        this.outputShape = outputShape;
        this.userCode = `
      ivec3 outCoordsFromFlatIndex(int index) {
        ${_shader_compiler_util__WEBPACK_IMPORTED_MODULE_1__["getLogicalCoordinatesFromFlatIndex"](['r', 'c', 'd'], outputShape)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(${texShape[0]}, ${texShape[1]}));
        int index = 4 * (resTexRC.x * ${texShape[1]} + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        ${glsl.output} = result;
      }
    `;
    }
}
//# sourceMappingURL=decode_matrix_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/decode_matrix_packed_gpu.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/decode_matrix_packed_gpu.js ***!
  \**************************************************************************************/
/*! exports provided: DecodeMatrixPackedProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecodeMatrixPackedProgram", function() { return DecodeMatrixPackedProgram; });
/* harmony import */ var _glsl_version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glsl_version */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/glsl_version.js");
/* harmony import */ var _shader_compiler_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shader_compiler_util */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/shader_compiler_util.js");
/* harmony import */ var _tex_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tex_util */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/tex_util.js");
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */



class DecodeMatrixPackedProgram {
    constructor(outputShape) {
        this.variableNames = ['A'];
        this.packedInputs = true;
        this.packedOutput = true;
        this.outPackingScheme = _tex_util__WEBPACK_IMPORTED_MODULE_2__["PackingScheme"].DENSE;
        const texShape = Object(_tex_util__WEBPACK_IMPORTED_MODULE_2__["getDenseTexShape"])(outputShape);
        const glsl = Object(_glsl_version__WEBPACK_IMPORTED_MODULE_0__["getGlslDifferences"])();
        this.outputShape = outputShape;
        this.userCode = `
      ivec3 outCoordsFromFlatIndex(int index) {
        ${_shader_compiler_util__WEBPACK_IMPORTED_MODULE_1__["getLogicalCoordinatesFromFlatIndex"](['r', 'c', 'd'], outputShape)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(${texShape[0]}, ${texShape[1]}));
        int index = 4 * (resTexRC.x * ${texShape[1]} + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        ${glsl.output} = result;
      }
    `;
    }
}
//# sourceMappingURL=decode_matrix_packed_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/depth_to_space_gpu.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/depth_to_space_gpu.js ***!
  \********************************************************************************/
/*! exports provided: DepthToSpaceProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepthToSpaceProgram", function() { return DepthToSpaceProgram; });
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class DepthToSpaceProgram {
    constructor(outputShape, blockSize, dataFormat) {
        this.variableNames = ['x'];
        this.outputShape = [];
        this.outputShape = outputShape;
        this.blockSize = blockSize;
        this.dataFormat = dataFormat;
        this.userCode = `
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = ${this.getHeightCoordString()};
      int w = ${this.getWidthCoordString()};
      int d = ${this.getDepthCoordString()};

      int in_h = h / ${blockSize};
      int offset_h = imod(h, ${blockSize});
      int in_w = w / ${blockSize};
      int offset_w = imod(w, ${blockSize});
      int offset_d = (offset_h * ${blockSize} + offset_w) *
        ${this.getOutputDepthSize()};
      int in_d = d + offset_d;

      float result = ${this.getInputSamplingString()};
      setOutput(result);
    }
  `;
    }
    getHeightCoordString() {
        if (this.dataFormat === 'NHWC') {
            return `coords[1]`;
        }
        else {
            return `coords[2]`;
        }
    }
    getWidthCoordString() {
        if (this.dataFormat === 'NHWC') {
            return `coords[2]`;
        }
        else {
            return `coords[3]`;
        }
    }
    getDepthCoordString() {
        if (this.dataFormat === 'NHWC') {
            return `coords[3]`;
        }
        else {
            return `coords[1]`;
        }
    }
    getOutputDepthSize() {
        if (this.dataFormat === 'NHWC') {
            return this.outputShape[3];
        }
        else {
            return this.outputShape[1];
        }
    }
    getInputSamplingString() {
        if (this.dataFormat === 'NHWC') {
            return `getX(b, in_h, in_w, in_d)`;
        }
        else {
            return `getX(b, in_d, in_h, in_w)`;
        }
    }
}
//# sourceMappingURL=depth_to_space_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/diag_gpu.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/diag_gpu.js ***!
  \**********************************************************************/
/*! exports provided: DiagProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagProgram", function() { return DiagProgram; });
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class DiagProgram {
    constructor(size) {
        this.variableNames = ['X'];
        this.outputShape = [size, size];
        this.userCode = `
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `;
    }
}
//# sourceMappingURL=diag_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/encode_float_gpu.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/encode_float_gpu.js ***!
  \******************************************************************************/
/*! exports provided: EncodeFloatProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncodeFloatProgram", function() { return EncodeFloatProgram; });
/* harmony import */ var _glsl_version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glsl_version */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/glsl_version.js");
/* harmony import */ var _shader_compiler_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shader_compiler_util */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/shader_compiler_util.js");
/* harmony import */ var _tex_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tex_util */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/tex_util.js");
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */



class EncodeFloatProgram {
    constructor(outputShape) {
        this.variableNames = ['A'];
        this.outTexUsage = _tex_util__WEBPACK_IMPORTED_MODULE_2__["TextureUsage"].DOWNLOAD;
        const glsl = Object(_glsl_version__WEBPACK_IMPORTED_MODULE_0__["getGlslDifferences"])();
        this.outputShape = outputShape;
        this.userCode = `
      ${_shader_compiler_util__WEBPACK_IMPORTED_MODULE_1__["ENCODE_FLOAT_SNIPPET"]}

      void main() {
        float x = getAAtOutCoords();
        ${glsl.output} = encode_float(x);
      }
    `;
    }
}
//# sourceMappingURL=encode_float_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/encode_float_packed_gpu.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/encode_float_packed_gpu.js ***!
  \*************************************************************************************/
/*! exports provided: EncodeFloatPackedProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncodeFloatPackedProgram", function() { return EncodeFloatPackedProgram; });
/* harmony import */ var _glsl_version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glsl_version */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/glsl_version.js");
/* harmony import */ var _shader_compiler_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shader_compiler_util */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/shader_compiler_util.js");
/* harmony import */ var _tex_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tex_util */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/tex_util.js");
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */



class EncodeFloatPackedProgram {
    constructor(outputShape) {
        this.variableNames = ['A'];
        this.packedInputs = true;
        this.packedOutput = false;
        this.outTexUsage = _tex_util__WEBPACK_IMPORTED_MODULE_2__["TextureUsage"].DOWNLOAD;
        const glsl = Object(_glsl_version__WEBPACK_IMPORTED_MODULE_0__["getGlslDifferences"])();
        this.outputShape = outputShape;
        this.userCode = `
      ${_shader_compiler_util__WEBPACK_IMPORTED_MODULE_1__["ENCODE_FLOAT_SNIPPET"]}

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        ${glsl.output} = encode_float(x);
      }
    `;
    }
}
//# sourceMappingURL=encode_float_packed_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/encode_matrix_gpu.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/encode_matrix_gpu.js ***!
  \*******************************************************************************/
/*! exports provided: EncodeMatrixProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncodeMatrixProgram", function() { return EncodeMatrixProgram; });
/* harmony import */ var _glsl_version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glsl_version */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/glsl_version.js");
/* harmony import */ var _shader_compiler_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shader_compiler_util */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/shader_compiler_util.js");
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */


class EncodeMatrixProgram {
    constructor(outputShape, texShape, inputIsUnsignedByte = false) {
        this.variableNames = ['A'];
        const glsl = Object(_glsl_version__WEBPACK_IMPORTED_MODULE_0__["getGlslDifferences"])();
        const [height, width] = texShape;
        this.outputShape = outputShape;
        let output = `result`;
        if (inputIsUnsignedByte) {
            output = `floor(result * 255. + 0.5)`;
        }
        this.userCode = `
      ${_shader_compiler_util__WEBPACK_IMPORTED_MODULE_1__["getFlatIndexFrom3D"](outputShape)}

      void main() {
        ivec3 coords = getOutputCoords();

        int flatIndex = getFlatIndex(coords);
        int offset = imod(flatIndex, 4);

        flatIndex = idiv(flatIndex, 4, 1.);

        int r = flatIndex / ${width};
        int c = imod(flatIndex, ${width});
        vec2 uv = (vec2(c, r) + halfCR) / vec2(${width}.0, ${height}.0);
        vec4 values = ${glsl.texture2D}(A, uv);

        float result;

        if(offset == 0) {
          result = values[0];
        } else if(offset == 1) {
          result = values[1];
        } else if(offset == 2) {
          result = values[2];
        } else {
          result = values[3];
        }

        ${glsl.output} = vec4(${output}, 0., 0., 0.);
      }
    `;
    }
}
//# sourceMappingURL=encode_matrix_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/encode_matrix_packed_gpu.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/encode_matrix_packed_gpu.js ***!
  \**************************************************************************************/
/*! exports provided: EncodeMatrixPackedProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncodeMatrixPackedProgram", function() { return EncodeMatrixPackedProgram; });
/* harmony import */ var _glsl_version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glsl_version */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/glsl_version.js");
/* harmony import */ var _shader_compiler_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shader_compiler_util */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/shader_compiler_util.js");
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */


/*
This is how the shader encodes a tensor with shape = [2, 3, 5]
(indices are [batch, row, col]).

000|001   002|003   004|xxx   020|021   022|023   024|xxx
-------   -------   -------   -------   -------   -------
010|011   012|013   014|xxx   xxx|xxx   xxx|xxx   xxx|xxx

100|101   102|103   104|xxx   120|121   122|123   124|xxx
-------   -------   -------   -------   -------   -------
110|111   112|113   114|xxx   xxx|xxx   xxx|xxx   xxx|xxx

Single texels contain only values from the same batch, and from adjacent rows
and columns.
 */
class EncodeMatrixPackedProgram {
    constructor(outputShape, texShape, inputIsUnsignedByte = false) {
        this.variableNames = ['A'];
        this.packedInputs = false;
        this.packedOutput = true;
        const glsl = Object(_glsl_version__WEBPACK_IMPORTED_MODULE_0__["getGlslDifferences"])();
        const [height, width] = texShape;
        this.outputShape = outputShape;
        let mainLoop = '';
        let output = 'result';
        if (inputIsUnsignedByte) {
            output = 'floor(result * 255. + 0.5)';
        }
        for (let row = 0; row <= 1; row++) {
            for (let col = 0; col <= 1; col++) {
                const channel = row * 2 + col;
                mainLoop += `
          localCoords = coords;
          if(localCoords[2] + ${col} < ${outputShape[2]}) {
            localCoords[2] += ${col};
            if(localCoords[1] + ${row} < ${outputShape[1]}) {
              localCoords[1] += ${row};

              flatIndex = getFlatIndex(localCoords);
              offset = imod(flatIndex, 4);

              flatIndex = idiv(flatIndex, 4, 1.);

              r = flatIndex / ${width};
              c = imod(flatIndex, ${width});
              uv = (vec2(c, r) + halfCR) / vec2(${width}.0, ${height}.0);
              values = ${glsl.texture2D}(A, uv);

              if(offset == 0) {
                result[${channel}] = values[0];
              } else if(offset == 1) {
                result[${channel}] = values[1];
              } else if(offset == 2) {
                result[${channel}] = values[2];
              } else {
                result[${channel}] = values[3];
              }
            }
          }
        `;
            }
        }
        this.userCode = `
      ${_shader_compiler_util__WEBPACK_IMPORTED_MODULE_1__["getFlatIndexFrom3D"](outputShape)}

      void main() {
        ivec3 coords = getOutputCoords();

        vec4 result = vec4(0.);
        int flatIndex, r, c, offset;
        ivec3 localCoords;
        vec2 uv;
        vec4 values;

        ${mainLoop}

        ${glsl.output} = ${output};
      }
    `;
    }
}
//# sourceMappingURL=encode_matrix_packed_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/fft_gpu.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/fft_gpu.js ***!
  \*********************************************************************/
/*! exports provided: FFTProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FFTProgram", function() { return FFTProgram; });
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class FFTProgram {
    constructor(component, inputShape, inverse) {
        this.variableNames = ['real', 'imag'];
        const innerDim = inputShape[1];
        this.outputShape = inputShape;
        const exponentMultiplierSnippet = inverse ? `2.0 * ${Math.PI}` : `-2.0 * ${Math.PI}`;
        const resultDenominator = inverse ? `${innerDim}.0` : '1.0';
        let opString;
        if (component === 'real') {
            opString = 'return real * expR - imag * expI;';
        }
        else if (component === 'imag') {
            opString = 'return real * expI + imag * expR;';
        }
        else {
            throw new Error(`FFT component must be either "real" or "imag", got ${component}.`);
        }
        this.userCode = `
      const float exponentMultiplier = ${exponentMultiplierSnippet};

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        ${opString}
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(${innerDim});
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < ${innerDim}; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / ${resultDenominator};
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `;
    }
}
//# sourceMappingURL=fft_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/fill_gpu.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/fill_gpu.js ***!
  \**********************************************************************/
/*! exports provided: FillProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FillProgram", function() { return FillProgram; });
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class FillProgram {
    constructor(shape, value) {
        this.outputShape = [];
        this.variableNames = ['x'];
        this.outputShape = shape;
        this.userCode = `
      uniform float value;
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `;
    }
    getCustomSetupFunc(value) {
        return (gpgpu, webGLProgram) => {
            if (this.valueLoc == null) {
                this.valueLoc = gpgpu.getUniformLocationNoThrow(webGLProgram, 'value');
            }
            gpgpu.gl.uniform1f(this.valueLoc, value);
        };
    }
}
//# sourceMappingURL=fill_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/flags_webgl.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/flags_webgl.js ***!
  \*************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _webgl_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webgl_util */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/webgl_util.js");
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */


const ENV = Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["env"])();
/**
 * This file contains WebGL-specific flag registrations.
 */
/**
 * True if WebGL is supported.
 */
ENV.registerFlag('HAS_WEBGL', () => ENV.getNumber('WEBGL_VERSION') > 0);
/** 0: No WebGL, 1: WebGL 1.0, 2: WebGL 2.0. */
ENV.registerFlag('WEBGL_VERSION', () => {
    if (Object(_webgl_util__WEBPACK_IMPORTED_MODULE_1__["isWebGLVersionEnabled"])(2)) {
        return 2;
    }
    else if (Object(_webgl_util__WEBPACK_IMPORTED_MODULE_1__["isWebGLVersionEnabled"])(1)) {
        return 1;
    }
    return 0;
});
/** Whether to check for numerical representation problems. */
ENV.registerFlag('WEBGL_CHECK_NUMERICAL_PROBLEMS', () => false);
ENV.registerFlag('WEBGL_BUFFER_SUPPORTED', () => ENV.get('WEBGL_VERSION') === 2);
/** Whether the WebGL backend will sometimes forward ops to the CPU. */
ENV.registerFlag('WEBGL_CPU_FORWARD', () => true);
/** Whether the WebGL backend will always use f16 textures for rendering. */
ENV.registerFlag('WEBGL_FORCE_F16_TEXTURES', () => false);
/** Whether to turn all packing related flags on. */
ENV.registerFlag('WEBGL_PACK', () => ENV.getBool('HAS_WEBGL'));
/** Whether we will pack the batchnormalization op. */
ENV.registerFlag('WEBGL_PACK_NORMALIZATION', () => ENV.getBool('WEBGL_PACK'));
/** Whether we will pack the clip op. */
ENV.registerFlag('WEBGL_PACK_CLIP', () => ENV.getBool('WEBGL_PACK'));
/** Whether we will pack the depthwise conv op. */
// TODO: https://github.com/tensorflow/tfjs/issues/1679
ENV.registerFlag('WEBGL_PACK_DEPTHWISECONV', () => false);
/** Whether we will pack binary ops. */
ENV.registerFlag('WEBGL_PACK_BINARY_OPERATIONS', () => ENV.getBool('WEBGL_PACK'));
/** Whether we will pack unary ops. */
ENV.registerFlag('WEBGL_PACK_UNARY_OPERATIONS', () => ENV.getBool('WEBGL_PACK'));
/** Whether we will pack array ops. */
ENV.registerFlag('WEBGL_PACK_ARRAY_OPERATIONS', () => ENV.getBool('WEBGL_PACK'));
/** Whether we will pack image ops. */
ENV.registerFlag('WEBGL_PACK_IMAGE_OPERATIONS', () => ENV.getBool('WEBGL_PACK'));
/** Whether we will pack reduce ops. */
ENV.registerFlag('WEBGL_PACK_REDUCE', () => ENV.getBool('WEBGL_PACK'));
/** Whether packed WebGL kernels lazily unpack their outputs. */
ENV.registerFlag('WEBGL_LAZILY_UNPACK', () => ENV.getBool('WEBGL_PACK'));
/** Whether we will use the im2col algorithm to speed up convolutions. */
ENV.registerFlag('WEBGL_CONV_IM2COL', () => ENV.getBool('WEBGL_PACK'));
/** The maximum texture dimension. */
ENV.registerFlag('WEBGL_MAX_TEXTURE_SIZE', () => Object(_webgl_util__WEBPACK_IMPORTED_MODULE_1__["getWebGLMaxTextureSize"])(ENV.getNumber('WEBGL_VERSION')));
/** The maximum texture dimension. */
ENV.registerFlag('WEBGL_MAX_TEXTURES_IN_SHADER', () => Object(_webgl_util__WEBPACK_IMPORTED_MODULE_1__["getMaxTexturesInShader"])(ENV.getNumber('WEBGL_VERSION')));
/**
 * The disjoint_query_timer extension version.
 * 0: disabled, 1: EXT_disjoint_timer_query, 2:
 * EXT_disjoint_timer_query_webgl2.
 * In Firefox with WebGL 2.0,
 * EXT_disjoint_timer_query_webgl2 is not available, so we must use the
 * WebGL 1.0 extension.
 */
ENV.registerFlag('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION', () => {
    const webGLVersion = ENV.getNumber('WEBGL_VERSION');
    if (webGLVersion === 0) {
        return 0;
    }
    return Object(_webgl_util__WEBPACK_IMPORTED_MODULE_1__["getWebGLDisjointQueryTimerVersion"])(webGLVersion);
});
/**
 * Whether the timer object from the disjoint_query_timer extension gives
 * timing information that is reliable.
 */
ENV.registerFlag('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE', () => ENV.getNumber('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION') > 0 &&
    !_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["device_util"].isMobile());
/**
 * Whether the device is physically capable of rendering to float32 textures.
 */
ENV.registerFlag('WEBGL_RENDER_FLOAT32_CAPABLE', () => Object(_webgl_util__WEBPACK_IMPORTED_MODULE_1__["isCapableOfRenderingToFloatTexture"])(ENV.getNumber('WEBGL_VERSION')));
/**
 * Whether rendering to float32 textures is enabled. If disabled, renders to
 * float16 textures.
 */
ENV.registerFlag('WEBGL_RENDER_FLOAT32_ENABLED', () => {
    return ENV.getBool('WEBGL_FORCE_F16_TEXTURES') ?
        false :
        ENV.getBool('WEBGL_RENDER_FLOAT32_CAPABLE');
});
/**
 * Whether downloading float textures is enabled (16 or 32 bit). If disabled,
 * uses IEEE 754 encoding of the float32 values to 4 uint8 when downloading.
 */
ENV.registerFlag('WEBGL_DOWNLOAD_FLOAT_ENABLED', () => Object(_webgl_util__WEBPACK_IMPORTED_MODULE_1__["isDownloadFloatTextureEnabled"])(ENV.getNumber('WEBGL_VERSION')));
/** Whether the fence API is available. */
ENV.registerFlag('WEBGL_FENCE_API_ENABLED', () => Object(_webgl_util__WEBPACK_IMPORTED_MODULE_1__["isWebGLFenceEnabled"])(ENV.getNumber('WEBGL_VERSION')));
/**
 * Tensors with size <= than this will be uploaded as uniforms, not textures.
 */
ENV.registerFlag('WEBGL_SIZE_UPLOAD_UNIFORM', () => {
    // Use uniform uploads only when 32bit floats are supported. In
    // 16bit
    // environments there are problems with comparing a 16bit texture value
    // with a 32bit uniform value.
    const useUniforms = ENV.getBool('WEBGL_RENDER_FLOAT32_ENABLED');
    return useUniforms ? 4 : 0;
});
/**
 * If the total number of bytes allocated on the GPU is greater than this
 * number, we will aggressively delete textures upon disposal with
 * gl.deleteMatrixTexture, rather than making them available for reuse.
 *
 * Default value -1 indicates that we will never aggressively delete textures.
 */
ENV.registerFlag('WEBGL_DELETE_TEXTURE_THRESHOLD', () => {
    return -1;
}, threshold => {
    if (threshold < 0 && threshold !== -1) {
        throw new Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be -1 (indicating never ` +
            `delete) or at least 0, but got ${threshold}.`);
    }
});
//# sourceMappingURL=flags_webgl.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/flip_left_right_gpu.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/flip_left_right_gpu.js ***!
  \*********************************************************************************/
/*! exports provided: FlipLeftRightProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlipLeftRightProgram", function() { return FlipLeftRightProgram; });
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class FlipLeftRightProgram {
    constructor(imageShape) {
        this.variableNames = ['Image'];
        this.outputShape = [];
        const imageWidth = imageShape[2];
        this.outputShape = imageShape;
        this.userCode = `
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];

          int coordX = ${imageWidth} - x;
          float outputValue;
          if(coordX >= 0 && coordX < ${imageWidth}) {
            outputValue = getImage(coords[0], coords[1], coordX, coords[3]);
          } else {
            outputValue = getImage(coords[0], coords[1], coords[2], coords[3]);
          }
          setOutput(outputValue);
        }
    `;
    }
}
//# sourceMappingURL=flip_left_right_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/gather_gpu.js":
/*!************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/gather_gpu.js ***!
  \************************************************************************/
/*! exports provided: GatherProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GatherProgram", function() { return GatherProgram; });
/* harmony import */ var _shader_compiler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shader_compiler */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/shader_compiler.js");
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

class GatherProgram {
    constructor(aShape, indicesLength, axis) {
        this.variableNames = ['A', 'indices'];
        const outputShape = aShape.slice();
        outputShape[axis] = indicesLength;
        this.outputShape = outputShape;
        this.rank = outputShape.length;
        const dtype = Object(_shader_compiler__WEBPACK_IMPORTED_MODULE_0__["getCoordsDataType"])(this.rank);
        const sourceCoords = getSourceCoords(aShape, axis);
        this.userCode = `
      void main() {
        ${dtype} resRC = getOutputCoords();
        setOutput(getA(${sourceCoords}));
      }
    `;
    }
}
function getSourceCoords(aShape, axis) {
    const rank = aShape.length;
    if (rank > 4) {
        throw Error(`Gather for rank ${rank} is not yet supported`);
    }
    if (rank === 1) {
        return `int(getIndices(resRC))`;
    }
    const currentCoords = ['resRC.x', 'resRC.y', 'resRC.z', 'resRC.w'];
    const sourceCoords = [];
    for (let i = 0; i < aShape.length; i++) {
        if (i === axis) {
            sourceCoords.push(`int(getIndices(${currentCoords[i]}))`);
        }
        else {
            sourceCoords.push(`${currentCoords[i]}`);
        }
    }
    return sourceCoords.join();
}
//# sourceMappingURL=gather_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/gather_nd_gpu.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/gather_nd_gpu.js ***!
  \***************************************************************************/
/*! exports provided: GatherNDProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GatherNDProgram", function() { return GatherNDProgram; });
/* harmony import */ var _shader_compiler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shader_compiler */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/shader_compiler.js");

class GatherNDProgram {
    constructor(sliceDim, strides, shape) {
        this.sliceDim = sliceDim;
        this.strides = strides;
        this.variableNames = ['x', 'indices'];
        this.outputShape = shape;
        const stridesType = Object(_shader_compiler__WEBPACK_IMPORTED_MODULE_0__["getCoordsDataType"])(strides.length);
        const dtype = Object(_shader_compiler__WEBPACK_IMPORTED_MODULE_0__["getCoordsDataType"])(shape.length);
        const strideString = this.sliceDim > 1 ? 'strides[j]' : 'strides';
        this.userCode = `
        ${stridesType} strides = ${stridesType}(${this.strides});
         void main() {
          ${dtype} coords = getOutputCoords();
          int flattenIndex = 0;
          for (int j = 0; j < ${this.sliceDim}; j++) {
            int index = round(getIndices(coords[0], j));
            flattenIndex += index * ${strideString};
          }
          setOutput(getX(flattenIndex, coords[1]));
        }
      `;
    }
}
//# sourceMappingURL=gather_nd_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/glsl_version.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/glsl_version.js ***!
  \**************************************************************************/
/*! exports provided: getGlslDifferences */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGlslDifferences", function() { return getGlslDifferences; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

function getGlslDifferences() {
    let version;
    let attribute;
    let varyingVs;
    let varyingFs;
    let texture2D;
    let output;
    let defineOutput;
    let defineSpecialNaN;
    let defineSpecialInf;
    let defineRound;
    if (Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["env"])().getNumber('WEBGL_VERSION') === 2) {
        version = '#version 300 es';
        attribute = 'in';
        varyingVs = 'out';
        varyingFs = 'in';
        texture2D = 'texture';
        output = 'outputColor';
        defineOutput = 'out vec4 outputColor;';
        // Use custom isnan definition to work across differences between
        // implementations on various platforms. While this should happen in ANGLE
        // we still see differences between android and windows (on chrome) when
        // using isnan directly.
        defineSpecialNaN = `
      bool isnan_custom(float val) {
        return (val > 0.0 || val < 0.0) ? false : val != 0.0;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `;
        // In webgl 2 we do not need to specify a custom isinf so there is no
        // need for a special INFINITY constant.
        defineSpecialInf = ``;
        defineRound = `
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `;
    }
    else {
        version = '';
        attribute = 'attribute';
        varyingVs = 'varying';
        varyingFs = 'varying';
        texture2D = 'texture2D';
        output = 'gl_FragColor';
        defineOutput = '';
        // WebGL1 has no built in isnan so we define one here.
        defineSpecialNaN = `
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `;
        defineSpecialInf = `
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `;
        defineRound = `
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `;
    }
    return {
        version,
        attribute,
        varyingVs,
        varyingFs,
        texture2D,
        output,
        defineOutput,
        defineSpecialNaN,
        defineSpecialInf,
        defineRound
    };
}
//# sourceMappingURL=glsl_version.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/gpgpu_context.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/gpgpu_context.js ***!
  \***************************************************************************/
/*! exports provided: GPGPUContext, linearSearchLastTrue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GPGPUContext", function() { return GPGPUContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linearSearchLastTrue", function() { return linearSearchLastTrue; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _canvas_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvas_util */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/canvas_util.js");
/* harmony import */ var _gpgpu_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gpgpu_util */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/gpgpu_util.js");
/* harmony import */ var _tex_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tex_util */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/tex_util.js");
/* harmony import */ var _webgl_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./webgl_util */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/webgl_util.js");
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */





class GPGPUContext {
    constructor(gl) {
        this.outputTexture = null;
        this.program = null;
        this.disposed = false;
        this.vertexAttrsAreBound = false;
        this.itemsToPoll = [];
        const glVersion = Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["env"])().getNumber('WEBGL_VERSION');
        if (gl != null) {
            this.gl = gl;
            Object(_canvas_util__WEBPACK_IMPORTED_MODULE_1__["setWebGLContext"])(glVersion, gl);
        }
        else {
            this.gl = Object(_canvas_util__WEBPACK_IMPORTED_MODULE_1__["getWebGLContext"])(glVersion);
        }
        // WebGL 2.0 enables texture floats without an extension.
        let COLOR_BUFFER_FLOAT = 'WEBGL_color_buffer_float';
        const COLOR_BUFFER_HALF_FLOAT = 'EXT_color_buffer_half_float';
        if (Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["env"])().getNumber('WEBGL_VERSION') === 1) {
            const TEXTURE_FLOAT = 'OES_texture_float';
            const TEXTURE_HALF_FLOAT = 'OES_texture_half_float';
            this.textureFloatExtension =
                _webgl_util__WEBPACK_IMPORTED_MODULE_4__["getExtensionOrThrow"](this.gl, TEXTURE_FLOAT);
            if (_webgl_util__WEBPACK_IMPORTED_MODULE_4__["hasExtension"](this.gl, TEXTURE_HALF_FLOAT)) {
                this.textureHalfFloatExtension =
                    _webgl_util__WEBPACK_IMPORTED_MODULE_4__["getExtensionOrThrow"](this.gl, TEXTURE_HALF_FLOAT);
            }
            else if (Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["env"])().get('WEBGL_FORCE_F16_TEXTURES')) {
                throw new Error('GL context does not support half float textures, yet the ' +
                    'environment flag WEBGL_FORCE_F16_TEXTURES is set to true.');
            }
            this.colorBufferFloatExtension = this.gl.getExtension(COLOR_BUFFER_FLOAT);
            if (_webgl_util__WEBPACK_IMPORTED_MODULE_4__["hasExtension"](this.gl, COLOR_BUFFER_HALF_FLOAT)) {
                this.colorBufferHalfFloatExtension =
                    _webgl_util__WEBPACK_IMPORTED_MODULE_4__["getExtensionOrThrow"](this.gl, COLOR_BUFFER_HALF_FLOAT);
            }
            else if (Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["env"])().get('WEBGL_FORCE_F16_TEXTURES')) {
                throw new Error('GL context does not support color renderable half floats, yet ' +
                    'the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.');
            }
        }
        else {
            COLOR_BUFFER_FLOAT = 'EXT_color_buffer_float';
            if (_webgl_util__WEBPACK_IMPORTED_MODULE_4__["hasExtension"](this.gl, COLOR_BUFFER_FLOAT)) {
                this.colorBufferFloatExtension =
                    this.gl.getExtension(COLOR_BUFFER_FLOAT);
            }
            else if (_webgl_util__WEBPACK_IMPORTED_MODULE_4__["hasExtension"](this.gl, COLOR_BUFFER_HALF_FLOAT)) {
                this.colorBufferHalfFloatExtension =
                    this.gl.getExtension(COLOR_BUFFER_HALF_FLOAT);
            }
            else {
                throw new Error('GL context does not support color renderable floats');
            }
        }
        this.vertexBuffer = _gpgpu_util__WEBPACK_IMPORTED_MODULE_2__["createVertexBuffer"](this.gl);
        this.indexBuffer = _gpgpu_util__WEBPACK_IMPORTED_MODULE_2__["createIndexBuffer"](this.gl);
        this.framebuffer = _webgl_util__WEBPACK_IMPORTED_MODULE_4__["createFramebuffer"](this.gl);
        this.textureConfig =
            _tex_util__WEBPACK_IMPORTED_MODULE_3__["getTextureConfig"](this.gl, this.textureHalfFloatExtension);
    }
    get debug() {
        return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["env"])().getBool('DEBUG');
    }
    dispose() {
        if (this.disposed) {
            return;
        }
        if (this.program != null) {
            console.warn('Disposing a GPGPUContext that still has a bound WebGLProgram.' +
                ' This is probably a resource leak, delete the program with ' +
                'GPGPUContext.deleteProgram before disposing.');
        }
        if (this.outputTexture != null) {
            console.warn('Disposing a GPGPUContext that still has a bound output matrix ' +
                'texture.  This is probably a resource leak, delete the output ' +
                'matrix texture with GPGPUContext.deleteMatrixTexture before ' +
                'disposing.');
        }
        const gl = this.gl;
        _webgl_util__WEBPACK_IMPORTED_MODULE_4__["callAndCheck"](gl, () => gl.finish());
        _webgl_util__WEBPACK_IMPORTED_MODULE_4__["callAndCheck"](gl, () => gl.bindFramebuffer(gl.FRAMEBUFFER, null));
        _webgl_util__WEBPACK_IMPORTED_MODULE_4__["callAndCheck"](gl, () => gl.deleteFramebuffer(this.framebuffer));
        _webgl_util__WEBPACK_IMPORTED_MODULE_4__["callAndCheck"](gl, () => gl.bindBuffer(gl.ARRAY_BUFFER, null));
        _webgl_util__WEBPACK_IMPORTED_MODULE_4__["callAndCheck"](gl, () => gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null));
        _webgl_util__WEBPACK_IMPORTED_MODULE_4__["callAndCheck"](gl, () => gl.deleteBuffer(this.indexBuffer));
        this.disposed = true;
    }
    createFloat32MatrixTexture(rows, columns) {
        this.throwIfDisposed();
        return _gpgpu_util__WEBPACK_IMPORTED_MODULE_2__["createFloat32MatrixTexture"](this.gl, rows, columns, this.textureConfig);
    }
    createFloat16MatrixTexture(rows, columns) {
        this.throwIfDisposed();
        return _gpgpu_util__WEBPACK_IMPORTED_MODULE_2__["createFloat16MatrixTexture"](this.gl, rows, columns, this.textureConfig);
    }
    createUnsignedBytesMatrixTexture(rows, columns) {
        this.throwIfDisposed();
        return _gpgpu_util__WEBPACK_IMPORTED_MODULE_2__["createUnsignedBytesMatrixTexture"](this.gl, rows, columns, this.textureConfig);
    }
    uploadPixelDataToTexture(texture, pixels) {
        this.throwIfDisposed();
        _gpgpu_util__WEBPACK_IMPORTED_MODULE_2__["uploadPixelDataToTexture"](this.gl, texture, pixels);
    }
    uploadDenseMatrixToTexture(texture, width, height, data) {
        this.throwIfDisposed();
        _gpgpu_util__WEBPACK_IMPORTED_MODULE_2__["uploadDenseMatrixToTexture"](this.gl, texture, width, height, data, this.textureConfig);
    }
    createFloat16PackedMatrixTexture(rows, columns) {
        this.throwIfDisposed();
        return _gpgpu_util__WEBPACK_IMPORTED_MODULE_2__["createFloat16PackedMatrixTexture"](this.gl, rows, columns, this.textureConfig);
    }
    createPackedMatrixTexture(rows, columns) {
        this.throwIfDisposed();
        return _gpgpu_util__WEBPACK_IMPORTED_MODULE_2__["createPackedMatrixTexture"](this.gl, rows, columns, this.textureConfig);
    }
    deleteMatrixTexture(texture) {
        this.throwIfDisposed();
        if (this.outputTexture === texture) {
            _webgl_util__WEBPACK_IMPORTED_MODULE_4__["unbindColorTextureFromFramebuffer"](this.gl, this.framebuffer);
            this.outputTexture = null;
        }
        _webgl_util__WEBPACK_IMPORTED_MODULE_4__["callAndCheck"](this.gl, () => this.gl.deleteTexture(texture));
    }
    downloadByteEncodedFloatMatrixFromOutputTexture(texture, rows, columns) {
        return this.downloadMatrixDriver(texture, () => _gpgpu_util__WEBPACK_IMPORTED_MODULE_2__["downloadByteEncodedFloatMatrixFromOutputTexture"](this.gl, rows, columns, this.textureConfig));
    }
    downloadPackedMatrixFromBuffer(buffer, batch, rows, columns, physicalRows, physicalCols) {
        return _gpgpu_util__WEBPACK_IMPORTED_MODULE_2__["downloadPackedMatrixFromBuffer"](this.gl, buffer, batch, rows, columns, physicalRows, physicalCols, this.textureConfig);
    }
    downloadFloat32MatrixFromBuffer(buffer, size) {
        return _gpgpu_util__WEBPACK_IMPORTED_MODULE_2__["downloadFloat32MatrixFromBuffer"](this.gl, buffer, size);
    }
    createBufferFromTexture(texture, rows, columns) {
        this.bindTextureToFrameBuffer(texture);
        const result = _gpgpu_util__WEBPACK_IMPORTED_MODULE_2__["createBufferFromOutputTexture"](this.gl, rows, columns, this.textureConfig);
        this.unbindTextureToFrameBuffer();
        return result;
    }
    createAndWaitForFence() {
        const fenceContext = this.createFence(this.gl);
        return this.pollFence(fenceContext);
    }
    createFence(gl) {
        let query;
        let isFencePassed;
        if (Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["env"])().getBool('WEBGL_FENCE_API_ENABLED')) {
            const gl2 = gl;
            const sync = gl2.fenceSync(gl2.SYNC_GPU_COMMANDS_COMPLETE, 0);
            gl.flush();
            isFencePassed = () => {
                const status = gl2.clientWaitSync(sync, 0, 0);
                return status === gl2.ALREADY_SIGNALED ||
                    status === gl2.CONDITION_SATISFIED;
            };
            query = sync;
        }
        else if (Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["env"])().getNumber('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION') > 0) {
            query = this.beginQuery();
            this.endQuery();
            isFencePassed = () => this.isQueryAvailable(query, Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["env"])().getNumber('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION'));
        }
        else {
            // If we have no way to fence, return true immediately. This will fire in
            // WebGL 1.0 when there is no disjoint query timer. In this case, because
            // the fence passes immediately, we'll immediately ask for a download of
            // the texture, which will cause the UI thread to hang.
            isFencePassed = () => true;
        }
        return { query, isFencePassed };
    }
    downloadMatrixFromPackedTexture(texture, physicalRows, physicalCols) {
        return this.downloadMatrixDriver(texture, () => _gpgpu_util__WEBPACK_IMPORTED_MODULE_2__["downloadMatrixFromPackedOutputTexture"](this.gl, physicalRows, physicalCols));
    }
    createProgram(fragmentShaderSource) {
        this.throwIfDisposed();
        const gl = this.gl;
        const fragmentShader = _webgl_util__WEBPACK_IMPORTED_MODULE_4__["createFragmentShader"](gl, fragmentShaderSource);
        const vertexShader = _gpgpu_util__WEBPACK_IMPORTED_MODULE_2__["createVertexShader"](gl);
        const program = _webgl_util__WEBPACK_IMPORTED_MODULE_4__["createProgram"](gl);
        _webgl_util__WEBPACK_IMPORTED_MODULE_4__["callAndCheck"](gl, () => gl.attachShader(program, vertexShader));
        _webgl_util__WEBPACK_IMPORTED_MODULE_4__["callAndCheck"](gl, () => gl.attachShader(program, fragmentShader));
        _webgl_util__WEBPACK_IMPORTED_MODULE_4__["linkProgram"](gl, program);
        if (this.debug) {
            _webgl_util__WEBPACK_IMPORTED_MODULE_4__["validateProgram"](gl, program);
        }
        if (!this.vertexAttrsAreBound) {
            this.setProgram(program);
            this.vertexAttrsAreBound = _gpgpu_util__WEBPACK_IMPORTED_MODULE_2__["bindVertexProgramAttributeStreams"](gl, this.program, this.vertexBuffer);
        }
        return program;
    }
    deleteProgram(program) {
        this.throwIfDisposed();
        if (program === this.program) {
            this.program = null;
        }
        if (program != null) {
            _webgl_util__WEBPACK_IMPORTED_MODULE_4__["callAndCheck"](this.gl, () => this.gl.deleteProgram(program));
        }
    }
    setProgram(program) {
        this.throwIfDisposed();
        this.program = program;
        if ((this.program != null) && this.debug) {
            _webgl_util__WEBPACK_IMPORTED_MODULE_4__["validateProgram"](this.gl, this.program);
        }
        _webgl_util__WEBPACK_IMPORTED_MODULE_4__["callAndCheck"](this.gl, () => this.gl.useProgram(program));
    }
    getUniformLocation(program, uniformName, shouldThrow = true) {
        this.throwIfDisposed();
        if (shouldThrow) {
            return _webgl_util__WEBPACK_IMPORTED_MODULE_4__["getProgramUniformLocationOrThrow"](this.gl, program, uniformName);
        }
        else {
            return _webgl_util__WEBPACK_IMPORTED_MODULE_4__["getProgramUniformLocation"](this.gl, program, uniformName);
        }
    }
    getAttributeLocation(program, attribute) {
        this.throwIfDisposed();
        return _webgl_util__WEBPACK_IMPORTED_MODULE_4__["callAndCheck"](this.gl, () => this.gl.getAttribLocation(program, attribute));
    }
    getUniformLocationNoThrow(program, uniformName) {
        this.throwIfDisposed();
        return this.gl.getUniformLocation(program, uniformName);
    }
    setInputMatrixTexture(inputMatrixTexture, uniformLocation, textureUnit) {
        this.throwIfDisposed();
        this.throwIfNoProgram();
        _webgl_util__WEBPACK_IMPORTED_MODULE_4__["bindTextureToProgramUniformSampler"](this.gl, inputMatrixTexture, uniformLocation, textureUnit);
    }
    setOutputMatrixTexture(outputMatrixTexture, rows, columns) {
        this.setOutputMatrixTextureDriver(outputMatrixTexture, columns, rows);
    }
    setOutputPackedMatrixTexture(outputPackedMatrixTexture, rows, columns) {
        this.throwIfDisposed();
        const [width, height] = _tex_util__WEBPACK_IMPORTED_MODULE_3__["getPackedMatrixTextureShapeWidthHeight"](rows, columns);
        this.setOutputMatrixTextureDriver(outputPackedMatrixTexture, width, height);
    }
    setOutputMatrixWriteRegion(startRow, numRows, startColumn, numColumns) {
        this.setOutputMatrixWriteRegionDriver(startColumn, startRow, numColumns, numRows);
    }
    setOutputPackedMatrixWriteRegion(startRow, numRows, startColumn, numColumns) {
        throw new Error('setOutputPackedMatrixWriteRegion not implemented.');
    }
    debugValidate() {
        if (this.program != null) {
            _webgl_util__WEBPACK_IMPORTED_MODULE_4__["validateProgram"](this.gl, this.program);
        }
        _webgl_util__WEBPACK_IMPORTED_MODULE_4__["validateFramebuffer"](this.gl);
    }
    executeProgram() {
        this.throwIfDisposed();
        this.throwIfNoProgram();
        const gl = this.gl;
        if (this.debug) {
            this.debugValidate();
        }
        _webgl_util__WEBPACK_IMPORTED_MODULE_4__["callAndCheck"](gl, () => gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0));
    }
    blockUntilAllProgramsCompleted() {
        this.throwIfDisposed();
        _webgl_util__WEBPACK_IMPORTED_MODULE_4__["callAndCheck"](this.gl, () => this.gl.finish());
    }
    getQueryTimerExtension() {
        if (this.disjointQueryTimerExtension == null) {
            this.disjointQueryTimerExtension =
                _webgl_util__WEBPACK_IMPORTED_MODULE_4__["getExtensionOrThrow"](this.gl, Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["env"])().getNumber('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION') === 2 ?
                    'EXT_disjoint_timer_query_webgl2' :
                    'EXT_disjoint_timer_query');
        }
        return this.disjointQueryTimerExtension;
    }
    getQueryTimerExtensionWebGL2() {
        return this.getQueryTimerExtension();
    }
    getQueryTimerExtensionWebGL1() {
        return this.getQueryTimerExtension();
    }
    beginQuery() {
        if (Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["env"])().getNumber('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION') === 2) {
            const gl2 = this.gl;
            const ext = this.getQueryTimerExtensionWebGL2();
            const query = gl2.createQuery();
            gl2.beginQuery(ext.TIME_ELAPSED_EXT, query);
            return query;
        }
        const ext = this.getQueryTimerExtensionWebGL1();
        const query = ext.createQueryEXT();
        ext.beginQueryEXT(ext.TIME_ELAPSED_EXT, query);
        return query;
    }
    endQuery() {
        if (Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["env"])().getNumber('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION') === 2) {
            const gl2 = this.gl;
            const ext = this.getQueryTimerExtensionWebGL2();
            gl2.endQuery(ext.TIME_ELAPSED_EXT);
            return;
        }
        const ext = this.getQueryTimerExtensionWebGL1();
        ext.endQueryEXT(ext.TIME_ELAPSED_EXT);
    }
    async waitForQueryAndGetTime(query) {
        await _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].repeatedTry(() => this.disposed || // while testing contexts are created / disposed
            // in rapid succession, so without this check we
            // may poll for the query timer indefinitely
            this.isQueryAvailable(query, Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["env"])().getNumber('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION')));
        return this.getQueryTime(query, Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["env"])().getNumber('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION'));
    }
    getQueryTime(query, queryTimerVersion) {
        if (queryTimerVersion === 0) {
            return null;
        }
        if (queryTimerVersion === 2) {
            const gl2 = this.gl;
            const timeElapsedNanos = gl2.getQueryParameter(query, gl2.QUERY_RESULT);
            // Return milliseconds.
            return timeElapsedNanos / 1000000;
        }
        else {
            const ext = this.getQueryTimerExtensionWebGL1();
            const timeElapsedNanos = ext.getQueryObjectEXT(query, ext.QUERY_RESULT_EXT);
            // Return milliseconds.
            return timeElapsedNanos / 1000000;
        }
    }
    isQueryAvailable(query, queryTimerVersion) {
        if (queryTimerVersion === 0) {
            return true;
        }
        if (queryTimerVersion === 2) {
            const gl2 = this.gl;
            const ext = this.getQueryTimerExtensionWebGL2();
            const available = gl2.getQueryParameter(query, gl2.QUERY_RESULT_AVAILABLE);
            if (this.disjoint == null) {
                this.disjoint = this.gl.getParameter(ext.GPU_DISJOINT_EXT);
            }
            return available && !this.disjoint;
        }
        else {
            const ext = this.getQueryTimerExtensionWebGL1();
            const available = ext.getQueryObjectEXT(query, ext.QUERY_RESULT_AVAILABLE_EXT);
            if (this.disjoint == null) {
                this.disjoint = this.gl.getParameter(ext.GPU_DISJOINT_EXT);
            }
            return available && !this.disjoint;
        }
    }
    pollFence(fenceContext) {
        return new Promise(resolve => {
            this.addItemToPoll(() => fenceContext.isFencePassed(), () => resolve());
        });
    }
    pollItems() {
        // Find the last query that has finished.
        const index = linearSearchLastTrue(this.itemsToPoll.map(x => x.isDoneFn));
        for (let i = 0; i <= index; ++i) {
            const { resolveFn } = this.itemsToPoll[i];
            resolveFn();
        }
        this.itemsToPoll = this.itemsToPoll.slice(index + 1);
    }
    addItemToPoll(isDoneFn, resolveFn) {
        this.itemsToPoll.push({ isDoneFn, resolveFn });
        if (this.itemsToPoll.length > 1) {
            // We already have a running loop that polls.
            return;
        }
        // Start a new loop that polls.
        _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].repeatedTry(() => {
            this.pollItems();
            // End the loop if no more items to poll.
            return this.itemsToPoll.length === 0;
        });
    }
    bindTextureToFrameBuffer(texture) {
        this.throwIfDisposed();
        _webgl_util__WEBPACK_IMPORTED_MODULE_4__["bindColorTextureToFramebuffer"](this.gl, texture, this.framebuffer);
        if (this.debug) {
            _webgl_util__WEBPACK_IMPORTED_MODULE_4__["validateFramebuffer"](this.gl);
        }
    }
    unbindTextureToFrameBuffer() {
        if (this.outputTexture != null) {
            _webgl_util__WEBPACK_IMPORTED_MODULE_4__["bindColorTextureToFramebuffer"](this.gl, this.outputTexture, this.framebuffer);
            if (this.debug) {
                _webgl_util__WEBPACK_IMPORTED_MODULE_4__["validateFramebuffer"](this.gl);
            }
        }
        else {
            _webgl_util__WEBPACK_IMPORTED_MODULE_4__["unbindColorTextureFromFramebuffer"](this.gl, this.framebuffer);
        }
    }
    downloadMatrixDriver(texture, downloadAndDecode) {
        this.bindTextureToFrameBuffer(texture);
        const result = downloadAndDecode();
        this.unbindTextureToFrameBuffer();
        return result;
    }
    setOutputMatrixTextureDriver(outputMatrixTextureMaybePacked, width, height) {
        this.throwIfDisposed();
        const gl = this.gl;
        _webgl_util__WEBPACK_IMPORTED_MODULE_4__["bindColorTextureToFramebuffer"](gl, outputMatrixTextureMaybePacked, this.framebuffer);
        if (this.debug) {
            _webgl_util__WEBPACK_IMPORTED_MODULE_4__["validateFramebuffer"](gl);
        }
        this.outputTexture = outputMatrixTextureMaybePacked;
        _webgl_util__WEBPACK_IMPORTED_MODULE_4__["callAndCheck"](gl, () => gl.viewport(0, 0, width, height));
        _webgl_util__WEBPACK_IMPORTED_MODULE_4__["callAndCheck"](gl, () => gl.scissor(0, 0, width, height));
    }
    setOutputMatrixWriteRegionDriver(x, y, width, height) {
        this.throwIfDisposed();
        _webgl_util__WEBPACK_IMPORTED_MODULE_4__["callAndCheck"](this.gl, () => this.gl.scissor(x, y, width, height));
    }
    throwIfDisposed() {
        if (this.disposed) {
            throw new Error('Attempted to use disposed GPGPUContext.');
        }
    }
    throwIfNoProgram() {
        if (this.program == null) {
            throw new Error('No GPU program is currently set.');
        }
    }
}
/**
 * Finds the index of the last true element using linear search.
 * Note: We can't do binary search because Chrome expects us to explicitly
 * test all fences before download:
 * https://github.com/tensorflow/tfjs/issues/1145
 */
function linearSearchLastTrue(arr) {
    let i = 0;
    for (; i < arr.length; ++i) {
        const isDone = arr[i]();
        if (!isDone) {
            break;
        }
    }
    return i - 1;
}
//# sourceMappingURL=gpgpu_context.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/gpgpu_math.js":
/*!************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/gpgpu_math.js ***!
  \************************************************************************/
/*! exports provided: compileProgram, runProgram, makeShaderKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compileProgram", function() { return compileProgram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runProgram", function() { return runProgram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeShaderKey", function() { return makeShaderKey; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _shader_compiler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shader_compiler */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/shader_compiler.js");
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */


function compileProgram(gpgpu, program, inputs, output) {
    const userCode = program.userCode;
    const inputInfos = inputs.map((input, i) => {
        const shapeInfo = {
            logicalShape: input.shape,
            texShape: input.isUniform ? null : input.texData.texShape,
            isUniform: input.isUniform,
            isPacked: input.isUniform ? false : input.texData.isPacked,
            flatOffset: null
        };
        if (input.texData != null && input.texData.slice != null &&
            input.texData.slice.flatOffset > 0) {
            shapeInfo.flatOffset = input.texData.slice.flatOffset;
        }
        return { name: program.variableNames[i], shapeInfo };
    });
    const inShapeInfos = inputInfos.map(x => x.shapeInfo);
    const outShapeInfo = {
        logicalShape: output.shape,
        texShape: output.texData.texShape,
        isUniform: false,
        isPacked: output.texData.isPacked,
        flatOffset: null
    };
    const source = _shader_compiler__WEBPACK_IMPORTED_MODULE_1__["makeShader"](inputInfos, outShapeInfo, userCode, program.packedInputs);
    const webGLProgram = gpgpu.createProgram(source);
    // Add special uniforms (NAN, INFINITY)
    let infLoc = null;
    const nanLoc = gpgpu.getUniformLocation(webGLProgram, 'NAN', false);
    if (Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["env"])().getNumber('WEBGL_VERSION') === 1) {
        infLoc = gpgpu.getUniformLocation(webGLProgram, 'INFINITY', false);
    }
    // Add user-defined uniforms
    const uniformLocations = {};
    for (let i = 0; i < program.variableNames.length; i++) {
        const varName = program.variableNames[i];
        const shouldThrow = false;
        uniformLocations[varName] =
            gpgpu.getUniformLocation(webGLProgram, varName, shouldThrow);
        uniformLocations[`offset${varName}`] =
            gpgpu.getUniformLocation(webGLProgram, `offset${varName}`, shouldThrow);
    }
    return {
        program,
        source,
        webGLProgram,
        uniformLocations,
        inShapeInfos,
        outShapeInfo,
        infLoc,
        nanLoc,
    };
}
function validateBinaryAndProgram(shapeInfos, inputs) {
    if (shapeInfos.length !== inputs.length) {
        throw Error(`Binary was compiled with ${shapeInfos.length} inputs, but ` +
            `was executed with ${inputs.length} inputs`);
    }
    shapeInfos.forEach((s, i) => {
        const shapeA = s.logicalShape;
        const input = inputs[i];
        const shapeB = input.shape;
        if (!_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].arraysEqual(shapeA, shapeB)) {
            throw Error(`Binary was compiled with different shapes than ` +
                `the current args. Shapes ${shapeA} and ${shapeB} must match`);
        }
        // The input is uploaded as uniform.
        if (s.isUniform && input.isUniform) {
            return;
        }
        const texShapeA = s.texShape;
        const texShapeB = input.isUniform ? null : input.texData.texShape;
        if (!_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].arraysEqual(texShapeA, texShapeB)) {
            throw Error(`Binary was compiled with different texture shapes than the` +
                ` current args. Shape ${texShapeA} and ${texShapeB} must match`);
        }
    });
}
function runProgram(gpgpu, binary, inputs, output, customSetup) {
    validateBinaryAndProgram(binary.inShapeInfos, inputs);
    validateBinaryAndProgram([binary.outShapeInfo], [output]);
    const outTex = output.texData.texture;
    const outTexShape = output.texData.texShape;
    if (output.texData.isPacked) {
        gpgpu.setOutputPackedMatrixTexture(outTex, outTexShape[0], outTexShape[1]);
    }
    else {
        gpgpu.setOutputMatrixTexture(outTex, outTexShape[0], outTexShape[1]);
    }
    gpgpu.setProgram(binary.webGLProgram);
    // Set special uniforms (NAN, INFINITY)
    if (Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["env"])().getNumber('WEBGL_VERSION') === 1) {
        if (binary.infLoc !== null) {
            gpgpu.gl.uniform1f(binary.infLoc, Infinity);
        }
    }
    if (binary.nanLoc !== null) {
        gpgpu.gl.uniform1f(binary.nanLoc, NaN);
    }
    // Set user-defined inputs
    inputs.forEach((input, i) => {
        const varName = binary.program.variableNames[i];
        const varLoc = binary.uniformLocations[varName];
        const varOffsetLoc = binary.uniformLocations[`offset${varName}`];
        if (varLoc == null) {
            // The compiler inferred that this variable is not used in this shader.
            return;
        }
        if (input.isUniform) {
            // Upload the values of the tensor as uniform.
            if (_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].sizeFromShape(input.shape) < 2) {
                gpgpu.gl.uniform1f(varLoc, input.uniformValues[0]);
            }
            else {
                let vals = input.uniformValues;
                if (!(vals instanceof Float32Array)) {
                    vals = new Float32Array(vals);
                }
                gpgpu.gl.uniform1fv(varLoc, vals);
            }
            return;
        }
        // If the input was sliced, upload the flat offset index.
        if (input.texData.slice != null && varOffsetLoc != null) {
            gpgpu.gl.uniform1i(varOffsetLoc, input.texData.slice.flatOffset);
        }
        gpgpu.setInputMatrixTexture(input.texData.texture, varLoc, i);
    });
    if (customSetup != null) {
        customSetup(gpgpu, binary.webGLProgram);
    }
    gpgpu.executeProgram();
}
function makeShaderKey(program, inputs, output) {
    let keyInputs = '';
    inputs.concat(output).forEach(x => {
        const hasOffset = x.texData != null && x.texData.slice != null &&
            x.texData.slice.flatOffset > 0;
        const texShape = x.isUniform ? 'uniform' : x.texData.texShape;
        keyInputs += `${x.shape}_${texShape}_${hasOffset}`;
    });
    const keyUserCode = program.userCode;
    let key = program.constructor.name;
    // Fast string concat. See https://jsperf.com/string-concatenation/14.
    key += '_' + keyInputs + '_' + keyUserCode;
    return key;
}
//# sourceMappingURL=gpgpu_math.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/gpgpu_util.js":
/*!************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/gpgpu_util.js ***!
  \************************************************************************/
/*! exports provided: createVertexShader, createVertexBuffer, createIndexBuffer, getInternalFormatForFloat32MatrixTexture, createFloat32MatrixTexture, getInternalFormatForFloat16MatrixTexture, createFloat16MatrixTexture, getInternalFormatForUnsignedBytesMatrixTexture, createUnsignedBytesMatrixTexture, getInternalFormatForPackedMatrixTexture, createPackedMatrixTexture, getInternalFormatForFloat16PackedMatrixTexture, createFloat16PackedMatrixTexture, bindVertexProgramAttributeStreams, uploadDenseMatrixToTexture, uploadPixelDataToTexture, createBufferFromOutputTexture, downloadFloat32MatrixFromBuffer, downloadByteEncodedFloatMatrixFromOutputTexture, downloadPackedMatrixFromBuffer, downloadMatrixFromPackedOutputTexture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createVertexShader", function() { return createVertexShader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createVertexBuffer", function() { return createVertexBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createIndexBuffer", function() { return createIndexBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInternalFormatForFloat32MatrixTexture", function() { return getInternalFormatForFloat32MatrixTexture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFloat32MatrixTexture", function() { return createFloat32MatrixTexture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInternalFormatForFloat16MatrixTexture", function() { return getInternalFormatForFloat16MatrixTexture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFloat16MatrixTexture", function() { return createFloat16MatrixTexture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInternalFormatForUnsignedBytesMatrixTexture", function() { return getInternalFormatForUnsignedBytesMatrixTexture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUnsignedBytesMatrixTexture", function() { return createUnsignedBytesMatrixTexture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInternalFormatForPackedMatrixTexture", function() { return getInternalFormatForPackedMatrixTexture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPackedMatrixTexture", function() { return createPackedMatrixTexture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInternalFormatForFloat16PackedMatrixTexture", function() { return getInternalFormatForFloat16PackedMatrixTexture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFloat16PackedMatrixTexture", function() { return createFloat16PackedMatrixTexture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindVertexProgramAttributeStreams", function() { return bindVertexProgramAttributeStreams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadDenseMatrixToTexture", function() { return uploadDenseMatrixToTexture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadPixelDataToTexture", function() { return uploadPixelDataToTexture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBufferFromOutputTexture", function() { return createBufferFromOutputTexture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadFloat32MatrixFromBuffer", function() { return downloadFloat32MatrixFromBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadByteEncodedFloatMatrixFromOutputTexture", function() { return downloadByteEncodedFloatMatrixFromOutputTexture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadPackedMatrixFromBuffer", function() { return downloadPackedMatrixFromBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadMatrixFromPackedOutputTexture", function() { return downloadMatrixFromPackedOutputTexture; });
/* harmony import */ var _glsl_version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glsl_version */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/glsl_version.js");
/* harmony import */ var _tex_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tex_util */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/tex_util.js");
/* harmony import */ var _webgl_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./webgl_util */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/webgl_util.js");
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */



function createVertexShader(gl) {
    const glsl = Object(_glsl_version__WEBPACK_IMPORTED_MODULE_0__["getGlslDifferences"])();
    const vertexShaderSource = `${glsl.version}
    precision highp float;
    ${glsl.attribute} vec3 clipSpacePos;
    ${glsl.attribute} vec2 uv;
    ${glsl.varyingVs} vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`;
    return _webgl_util__WEBPACK_IMPORTED_MODULE_2__["createVertexShader"](gl, vertexShaderSource);
}
function createVertexBuffer(gl) {
    // [x y z u v] * [upper-left, lower-left, upper-right, lower-right]
    const vertexArray = new Float32Array([-1, 1, 0, 0, 1, -1, -1, 0, 0, 0, 1, 1, 0, 1, 1, 1, -1, 0, 1, 0]);
    return _webgl_util__WEBPACK_IMPORTED_MODULE_2__["createStaticVertexBuffer"](gl, vertexArray);
}
function createIndexBuffer(gl) {
    // OpenGL (and WebGL) have "CCW == front" winding
    const triangleVertexIndices = new Uint16Array([0, 1, 2, 2, 1, 3]);
    return _webgl_util__WEBPACK_IMPORTED_MODULE_2__["createStaticIndexBuffer"](gl, triangleVertexIndices);
}
function createAndConfigureTexture(gl, width, height, internalFormat, textureFormat, textureType) {
    _webgl_util__WEBPACK_IMPORTED_MODULE_2__["validateTextureSize"](width, height);
    const texture = _webgl_util__WEBPACK_IMPORTED_MODULE_2__["createTexture"](gl);
    const tex2d = gl.TEXTURE_2D;
    _webgl_util__WEBPACK_IMPORTED_MODULE_2__["callAndCheck"](gl, () => gl.bindTexture(tex2d, texture));
    _webgl_util__WEBPACK_IMPORTED_MODULE_2__["callAndCheck"](gl, () => gl.texParameteri(tex2d, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE));
    _webgl_util__WEBPACK_IMPORTED_MODULE_2__["callAndCheck"](gl, () => gl.texParameteri(tex2d, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE));
    _webgl_util__WEBPACK_IMPORTED_MODULE_2__["callAndCheck"](gl, () => gl.texParameteri(tex2d, gl.TEXTURE_MIN_FILTER, gl.NEAREST));
    _webgl_util__WEBPACK_IMPORTED_MODULE_2__["callAndCheck"](gl, () => gl.texParameteri(tex2d, gl.TEXTURE_MAG_FILTER, gl.NEAREST));
    _webgl_util__WEBPACK_IMPORTED_MODULE_2__["callAndCheck"](gl, () => gl.texImage2D(tex2d, 0, internalFormat, width, height, 0, textureFormat, textureType, null));
    _webgl_util__WEBPACK_IMPORTED_MODULE_2__["callAndCheck"](gl, () => gl.bindTexture(gl.TEXTURE_2D, null));
    return texture;
}
function getInternalFormatForFloat32MatrixTexture(textureConfig) {
    return textureConfig.internalFormatFloat;
}
function createFloat32MatrixTexture(gl, rows, columns, textureConfig) {
    const [width, height] = _tex_util__WEBPACK_IMPORTED_MODULE_1__["getUnpackedMatrixTextureShapeWidthHeight"](rows, columns);
    return createAndConfigureTexture(gl, width, height, getInternalFormatForFloat32MatrixTexture(textureConfig), textureConfig.textureFormatFloat, gl.FLOAT);
}
function getInternalFormatForFloat16MatrixTexture(textureConfig) {
    return textureConfig.internalFormatHalfFloat;
}
function createFloat16MatrixTexture(gl, rows, columns, textureConfig) {
    const [width, height] = _tex_util__WEBPACK_IMPORTED_MODULE_1__["getUnpackedMatrixTextureShapeWidthHeight"](rows, columns);
    return createAndConfigureTexture(gl, width, height, getInternalFormatForFloat16MatrixTexture(textureConfig), textureConfig.textureFormatFloat, textureConfig.textureTypeHalfFloat);
}
function getInternalFormatForUnsignedBytesMatrixTexture(textureConfig) {
    return textureConfig.downloadTextureFormat;
}
function createUnsignedBytesMatrixTexture(gl, rows, columns, textureConfig) {
    const [width, height] = _tex_util__WEBPACK_IMPORTED_MODULE_1__["getUnpackedMatrixTextureShapeWidthHeight"](rows, columns);
    return createAndConfigureTexture(gl, width, height, getInternalFormatForUnsignedBytesMatrixTexture(textureConfig), gl.RGBA, gl.UNSIGNED_BYTE);
}
function getInternalFormatForPackedMatrixTexture(textureConfig) {
    return textureConfig.internalFormatPackedFloat;
}
function createPackedMatrixTexture(gl, rows, columns, textureConfig) {
    const [width, height] = _tex_util__WEBPACK_IMPORTED_MODULE_1__["getPackedMatrixTextureShapeWidthHeight"](rows, columns);
    return createAndConfigureTexture(gl, width, height, getInternalFormatForPackedMatrixTexture(textureConfig), gl.RGBA, gl.FLOAT);
}
function getInternalFormatForFloat16PackedMatrixTexture(textureConfig) {
    return textureConfig.internalFormatPackedHalfFloat;
}
function createFloat16PackedMatrixTexture(gl, rows, columns, textureConfig) {
    const [width, height] = _tex_util__WEBPACK_IMPORTED_MODULE_1__["getPackedMatrixTextureShapeWidthHeight"](rows, columns);
    return createAndConfigureTexture(gl, width, height, getInternalFormatForFloat16PackedMatrixTexture(textureConfig), gl.RGBA, textureConfig.textureTypeHalfFloat);
}
function bindVertexProgramAttributeStreams(gl, program, vertexBuffer) {
    const posOffset = 0; // x is the first buffer element
    const uvOffset = 3 * 4; // uv comes after [x y z]
    const stride = (3 * 4) + (2 * 4); // xyz + uv, each entry is 4-byte float.
    _webgl_util__WEBPACK_IMPORTED_MODULE_2__["callAndCheck"](gl, () => gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer));
    const success = _webgl_util__WEBPACK_IMPORTED_MODULE_2__["bindVertexBufferToProgramAttribute"](gl, program, 'clipSpacePos', vertexBuffer, 3, stride, posOffset);
    return success &&
        _webgl_util__WEBPACK_IMPORTED_MODULE_2__["bindVertexBufferToProgramAttribute"](gl, program, 'uv', vertexBuffer, 2, stride, uvOffset);
}
function uploadDenseMatrixToTexture(gl, texture, width, height, data, textureConfig) {
    _webgl_util__WEBPACK_IMPORTED_MODULE_2__["callAndCheck"](gl, () => gl.bindTexture(gl.TEXTURE_2D, texture));
    let dataForUpload, texelDataType, internalFormat;
    if (data instanceof Uint8Array) {
        dataForUpload = new Uint8Array(width * height * 4);
        texelDataType = gl.UNSIGNED_BYTE;
        internalFormat = gl.RGBA;
    }
    else {
        dataForUpload = new Float32Array(width * height * 4);
        texelDataType = gl.FLOAT;
        internalFormat = textureConfig.internalFormatPackedFloat;
    }
    dataForUpload.set(data);
    _webgl_util__WEBPACK_IMPORTED_MODULE_2__["callAndCheck"](gl, () => gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, width, height, 0, gl.RGBA, texelDataType, dataForUpload));
    _webgl_util__WEBPACK_IMPORTED_MODULE_2__["callAndCheck"](gl, () => gl.bindTexture(gl.TEXTURE_2D, null));
}
function uploadPixelDataToTexture(gl, texture, pixels) {
    _webgl_util__WEBPACK_IMPORTED_MODULE_2__["callAndCheck"](gl, () => gl.bindTexture(gl.TEXTURE_2D, texture));
    if (pixels.data instanceof Uint8Array) {
        _webgl_util__WEBPACK_IMPORTED_MODULE_2__["callAndCheck"](gl, () => gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, pixels.width, pixels.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, pixels.data));
    }
    else {
        _webgl_util__WEBPACK_IMPORTED_MODULE_2__["callAndCheck"](gl, () => gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, pixels));
    }
    _webgl_util__WEBPACK_IMPORTED_MODULE_2__["callAndCheck"](gl, () => gl.bindTexture(gl.TEXTURE_2D, null));
}
function createBufferFromOutputTexture(gl2, rows, columns, textureConfig) {
    // Create and bind the buffer.
    const buffer = gl2.createBuffer();
    _webgl_util__WEBPACK_IMPORTED_MODULE_2__["callAndCheck"](gl2, () => gl2.bindBuffer(gl2.PIXEL_PACK_BUFFER, buffer));
    // Initialize the buffer to the size of the texture in bytes.
    const bytesPerFloat = 4;
    const valuesPerTexel = 4;
    const bufferSizeBytes = bytesPerFloat * valuesPerTexel * rows * columns;
    _webgl_util__WEBPACK_IMPORTED_MODULE_2__["callAndCheck"](gl2, () => gl2.bufferData(gl2.PIXEL_PACK_BUFFER, bufferSizeBytes, gl2.STREAM_READ));
    // Enqueue a command on the GPU command queue to copy of texture into the
    // buffer.
    _webgl_util__WEBPACK_IMPORTED_MODULE_2__["callAndCheck"](gl2, () => gl2.readPixels(0, 0, columns, rows, gl2.RGBA, gl2.FLOAT, 0));
    _webgl_util__WEBPACK_IMPORTED_MODULE_2__["callAndCheck"](gl2, () => gl2.bindBuffer(gl2.PIXEL_PACK_BUFFER, null));
    return buffer;
}
function downloadFloat32MatrixFromBuffer(gl, buffer, size) {
    const gl2 = gl;
    const downloadTarget = new Float32Array(size);
    gl2.bindBuffer(gl2.PIXEL_PACK_BUFFER, buffer);
    gl2.getBufferSubData(gl2.PIXEL_PACK_BUFFER, 0, downloadTarget);
    gl2.bindBuffer(gl2.PIXEL_PACK_BUFFER, null);
    return downloadTarget;
}
function downloadByteEncodedFloatMatrixFromOutputTexture(gl, rows, columns, textureConfig) {
    const [w, h] = _tex_util__WEBPACK_IMPORTED_MODULE_1__["getUnpackedMatrixTextureShapeWidthHeight"](rows, columns);
    const numChannels = 4;
    const downloadTarget = new Uint8Array(_tex_util__WEBPACK_IMPORTED_MODULE_1__["getUnpackedArraySizeFromMatrixSize"](rows * columns, numChannels));
    _webgl_util__WEBPACK_IMPORTED_MODULE_2__["callAndCheck"](gl, () => gl.readPixels(0, 0, w, h, textureConfig.downloadTextureFormat, gl.UNSIGNED_BYTE, downloadTarget));
    // By wrapping the buffer in a Float32Array, we use native browser IEEE 754
    // decoding of the 4 bytes that back each 32 bit float.
    return new Float32Array(downloadTarget.buffer);
}
function downloadPackedMatrixFromBuffer(gl, buffer, batch, rows, cols, physicalRows, physicalCols, textureConfig) {
    const gl2 = gl;
    const downloadTarget = new Float32Array(_tex_util__WEBPACK_IMPORTED_MODULE_1__["getPackedRGBAArraySizeFromMatrixShape"](physicalRows, physicalCols));
    gl2.bindBuffer(gl2.PIXEL_PACK_BUFFER, buffer);
    gl2.getBufferSubData(gl2.PIXEL_PACK_BUFFER, 0, downloadTarget);
    gl2.bindBuffer(gl2.PIXEL_PACK_BUFFER, null);
    return downloadTarget;
}
function downloadMatrixFromPackedOutputTexture(gl, physicalRows, physicalCols) {
    const packedRGBA = new Float32Array(physicalRows * physicalCols * 4);
    _webgl_util__WEBPACK_IMPORTED_MODULE_2__["callAndCheck"](gl, () => gl.readPixels(0, 0, physicalCols, physicalRows, gl.RGBA, gl.FLOAT, packedRGBA));
    return packedRGBA;
}
//# sourceMappingURL=gpgpu_util.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/im2col_packed_gpu.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/im2col_packed_gpu.js ***!
  \*******************************************************************************/
/*! exports provided: Im2ColPackedProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Im2ColPackedProgram", function() { return Im2ColPackedProgram; });
/* harmony import */ var _glsl_version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glsl_version */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/glsl_version.js");
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

class Im2ColPackedProgram {
    constructor(outputShape, inputShape, convInfo) {
        this.variableNames = ['A'];
        this.packedInputs = true;
        this.packedOutput = true;
        this.outputShape = outputShape;
        const { filterWidth, inChannels, strideWidth, strideHeight, padInfo, outWidth, dilationWidth, dilationHeight, dataFormat } = convInfo;
        const { left, top } = padInfo;
        const itemsPerBlockRow = inChannels * filterWidth;
        const glsl = Object(_glsl_version__WEBPACK_IMPORTED_MODULE_0__["getGlslDifferences"])();
        const isChannelsLast = dataFormat === 'channelsLast';
        const rowDim = isChannelsLast ? 0 : 1;
        const colDim = isChannelsLast ? 1 : 2;
        let unrolled = ``;
        for (let row = 0; row <= 1; row++) {
            for (let col = 0; col <= 1; col++) {
                unrolled += `
          blockIndex = rc.y + ${col};
          pos = rc.x + ${row};

          if(blockIndex < ${outputShape[1]} && pos < ${outputShape[0]}) {
            offsetY = int(blockIndex / (${outWidth})) * ${strideHeight} - ${top};
            d0 = offsetY + ${dilationHeight} * (pos / ${itemsPerBlockRow});

            if(d0 < ${inputShape[rowDim]} && d0 >= 0) {

              offsetX = int(mod(float(blockIndex), ${outWidth}.) * ${strideWidth}. - ${left}.);
              d1 = offsetX + ${dilationWidth} * (int(mod(float(pos), ${itemsPerBlockRow}.) / ${inChannels}.));

              if(d1 < ${inputShape[colDim]} && d1 >= 0) {

                ch = int(mod(float(pos), ${inChannels}.));

                if (${isChannelsLast}) {
                  innerDims = vec2(d1, ch);
                  result[${row * 2 + col}] = getChannel(
                    getA(d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[${row * 2 + col}] = getChannel(
                    getA(ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;
            }
        }
        this.userCode = `
      void main() {
        ivec2 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        ${unrolled}

        ${glsl.output} = result;
      }
    `;
    }
}
//# sourceMappingURL=im2col_packed_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/index.js ***!
  \*******************************************************************/
/*! exports provided: version_webgl, MathBackendWebGL, setWebGLContext, GPGPUContext, gpgpu_util, webgl_util, forceHalfFloat, webgl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/base.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "version_webgl", function() { return _base__WEBPACK_IMPORTED_MODULE_0__["version_webgl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MathBackendWebGL", function() { return _base__WEBPACK_IMPORTED_MODULE_0__["MathBackendWebGL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setWebGLContext", function() { return _base__WEBPACK_IMPORTED_MODULE_0__["setWebGLContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GPGPUContext", function() { return _base__WEBPACK_IMPORTED_MODULE_0__["GPGPUContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gpgpu_util", function() { return _base__WEBPACK_IMPORTED_MODULE_0__["gpgpu_util"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webgl_util", function() { return _base__WEBPACK_IMPORTED_MODULE_0__["webgl_util"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forceHalfFloat", function() { return _base__WEBPACK_IMPORTED_MODULE_0__["forceHalfFloat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webgl", function() { return _base__WEBPACK_IMPORTED_MODULE_0__["webgl"]; });

/* harmony import */ var _register_all_kernels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register_all_kernels */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/register_all_kernels.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
// All exports from this package should be in base.


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernel_utils/int.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernel_utils/int.js ***!
  \******************************************************************************/
/*! exports provided: int */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "int", function() { return int; });
/* harmony import */ var _unaryop_gpu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../unaryop_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/unaryop_gpu.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

const TO_INT = `return float(int(x));`;
function int(input, backend) {
    const program = new _unaryop_gpu__WEBPACK_IMPORTED_MODULE_0__["UnaryOpProgram"](input.shape, TO_INT);
    const output = backend.runWebGLProgram(program, [input], 'int32');
    return { dataId: output.dataId, shape: output.shape, dtype: output.dtype };
}
//# sourceMappingURL=int.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernel_utils/kernel_funcs_utils.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernel_utils/kernel_funcs_utils.js ***!
  \*********************************************************************************************/
/*! exports provided: CHECK_NAN_SNIPPET_UNARY, CHECK_NAN_SNIPPET_BINARY, CHECK_NAN_SNIPPET_BINARY_PACKED, unaryKernelFunc, binaryKernelFunc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_NAN_SNIPPET_UNARY", function() { return CHECK_NAN_SNIPPET_UNARY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_NAN_SNIPPET_BINARY", function() { return CHECK_NAN_SNIPPET_BINARY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_NAN_SNIPPET_BINARY_PACKED", function() { return CHECK_NAN_SNIPPET_BINARY_PACKED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unaryKernelFunc", function() { return unaryKernelFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "binaryKernelFunc", function() { return binaryKernelFunc; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _binaryop_gpu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../binaryop_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/binaryop_gpu.js");
/* harmony import */ var _binaryop_packed_gpu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../binaryop_packed_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/binaryop_packed_gpu.js");
/* harmony import */ var _kernels_Complex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../kernels/Complex */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Complex.js");
/* harmony import */ var _unaryop_gpu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../unaryop_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/unaryop_gpu.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */





const CHECK_NAN_SNIPPET_UNARY = `if (isnan(x)) return x;`;
const CHECK_NAN_SNIPPET_BINARY = `
  if (isnan(a)) return a;
  if (isnan(b)) return b;
`;
const CHECK_NAN_SNIPPET_BINARY_PACKED = `
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;
`;
/**
 * Template that creates a `KernelFunc` for unary ops.
 * @param opSnippets Op snippet to create `UnaryOpProgram`.
 */
function unaryKernelFunc(opSnippet) {
    return ({ inputs, backend }) => {
        const { x } = inputs;
        const webglBackend = backend;
        const program = new _unaryop_gpu__WEBPACK_IMPORTED_MODULE_4__["UnaryOpProgram"](x.shape, opSnippet);
        return webglBackend.runWebGLProgram(program, [x], x.dtype);
    };
}
/**
 * Template that creates a `KernelFunc` for binary ops.
 * @param opSnippet Op snippet to create `BinaryOpProgram`.
 * @param packedOpSnippet Op snippet to create `BinaryOpPackedProgram`.
 * @param checkOutOfBoundsForPackedProgram Whether to set checkOutOfBounds=true
 *     when creating BinaryOpPackedProgram.
 * @param dtype Optional. If set, the result has this dtype. Otherwise, the
 *     result has the same dtype as the first input. This is mainly used in
 *     comparison kernels, such as Equal, Less, Greater, etc.
 */
function binaryKernelFunc({ opSnippet, packedOpSnippet, checkOutOfBounds = false, supportsComplex = false, cpuKernelImpl, dtype }) {
    return ({ inputs, backend }) => {
        const { a, b } = inputs;
        const webglBackend = backend;
        if (supportsComplex && a.dtype === 'complex64') {
            const aData = webglBackend.texData.get(a.dataId);
            const bData = webglBackend.texData.get(b.dataId);
            const [real, imag] = [
                [aData.complexTensorInfos.real, bData.complexTensorInfos.real],
                [aData.complexTensorInfos.imag, bData.complexTensorInfos.imag]
            ].map(complexParts => {
                const [aPart, bPart] = complexParts;
                const aHandle = {
                    dataId: aPart.dataId,
                    dtype: aPart.dtype,
                    shape: a.shape
                };
                const bHandle = {
                    dataId: bPart.dataId,
                    dtype: bPart.dtype,
                    shape: b.shape
                };
                const program = new _binaryop_gpu__WEBPACK_IMPORTED_MODULE_1__["BinaryOpProgram"](opSnippet, a.shape, b.shape);
                return webglBackend.runWebGLProgram(program, [aHandle, bHandle], Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["upcastType"])(aPart.dtype, bPart.dtype));
            });
            const complexOutput = Object(_kernels_Complex__WEBPACK_IMPORTED_MODULE_3__["complex"])({ inputs: { real, imag }, backend: webglBackend });
            webglBackend.disposeIntermediateTensorInfo(real);
            webglBackend.disposeIntermediateTensorInfo(imag);
            // TODO(annxingyuan): Implement CPU forwarding for complex inputs.
            return complexOutput;
        }
        const $dtype = dtype || Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["upcastType"])(a.dtype, b.dtype);
        if (webglBackend.shouldExecuteOnCPU([a, b]) && cpuKernelImpl != null) {
            const aData = webglBackend.texData.get(a.dataId);
            const bData = webglBackend.texData.get(b.dataId);
            const [outValues, outShape] = cpuKernelImpl(a.shape, b.shape, aData.values, bData.values, $dtype);
            const out = webglBackend.makeTensorInfo(outShape, $dtype);
            const outData = webglBackend.texData.get(out.dataId);
            outData.values = outValues;
            return out;
        }
        const shouldUsePackedProgram = Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["env"])().getBool('WEBGL_PACK_BINARY_OPERATIONS') &&
            packedOpSnippet != null;
        let program;
        if (shouldUsePackedProgram) {
            program = new _binaryop_packed_gpu__WEBPACK_IMPORTED_MODULE_2__["BinaryOpPackedProgram"](packedOpSnippet, a.shape, b.shape, checkOutOfBounds);
        }
        else {
            program = new _binaryop_gpu__WEBPACK_IMPORTED_MODULE_1__["BinaryOpProgram"](opSnippet, a.shape, b.shape);
        }
        return webglBackend.runWebGLProgram(program, [a, b], $dtype);
    };
}
//# sourceMappingURL=kernel_funcs_utils.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernel_utils/reduce.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernel_utils/reduce.js ***!
  \*********************************************************************************/
/*! exports provided: reduce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return reduce; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _mean_gpu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mean_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/mean_gpu.js");
/* harmony import */ var _reduce_gpu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reduce_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/reduce_gpu.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */



// Returns an array of configuration objects that describe each stage of the
// reduction.
function getReductionStages(inShape) {
    const stages = [];
    while (stages.length === 0 || stages[stages.length - 1].outSize !== 1) {
        const outSize = stages.length ? stages[stages.length - 1].outSize : inShape[1];
        const windowSize = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["backend_util"].computeOptimalWindowSize(outSize);
        stages.push({
            inSize: outSize,
            windowSize,
            outSize: Math.ceil(outSize / windowSize)
        });
    }
    return stages;
}
function reduce(x, dtype, reductionType, backend) {
    const reductionStages = getReductionStages(x.shape);
    let result = x;
    for (let i = 0; i < reductionStages.length; i++) {
        const { inSize, windowSize, outSize } = reductionStages[i];
        let program;
        let previousResult;
        if (reductionType === 'mean') {
            program = i === 0 ?
                new _mean_gpu__WEBPACK_IMPORTED_MODULE_1__["MeanProgram"]({ windowSize, inSize, batchSize: x.shape[0], outSize }, inSize) :
                new _mean_gpu__WEBPACK_IMPORTED_MODULE_1__["MeanProgram"]({ windowSize, inSize, batchSize: x.shape[0], outSize });
        }
        else {
            program = new _reduce_gpu__WEBPACK_IMPORTED_MODULE_2__["ReduceProgram"]({ windowSize, inSize, batchSize: x.shape[0], outSize }, reductionType);
        }
        previousResult = result;
        result = backend.runWebGLProgram(program, [result], dtype);
        if (previousResult.dataId !== x.dataId) {
            backend.disposeIntermediateTensorInfo(previousResult);
        }
    }
    return result;
}
//# sourceMappingURL=reduce.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernel_utils/reshape.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernel_utils/reshape.js ***!
  \**********************************************************************************/
/*! exports provided: packedReshape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "packedReshape", function() { return packedReshape; });
/* harmony import */ var _reshape_packed_gpu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reshape_packed_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/reshape_packed_gpu.js");
/* harmony import */ var _webgl_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../webgl_util */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/webgl_util.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */


function packedReshape(input, afterShape, backend) {
    const input3DShape = [Object(_webgl_util__WEBPACK_IMPORTED_MODULE_1__["getBatchDim"])(input.shape),
        ...Object(_webgl_util__WEBPACK_IMPORTED_MODULE_1__["getRowsCols"])(input.shape)];
    const input3D = {
        dtype: input.dtype,
        shape: input3DShape,
        dataId: input.dataId
    };
    const afterShapeAs3D = [Object(_webgl_util__WEBPACK_IMPORTED_MODULE_1__["getBatchDim"])(afterShape),
        ...Object(_webgl_util__WEBPACK_IMPORTED_MODULE_1__["getRowsCols"])(afterShape)];
    const program = new _reshape_packed_gpu__WEBPACK_IMPORTED_MODULE_0__["ReshapePackedProgram"](afterShapeAs3D, input3DShape);
    const preventEagerUnpackingOfOutput = true;
    const output = backend.runWebGLProgram(program, [input3D], input.dtype, null /* customSetup */, preventEagerUnpackingOfOutput);
    return { dataId: output.dataId, shape: afterShape, dtype: output.dtype };
}
//# sourceMappingURL=reshape.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernel_utils/shared.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernel_utils/shared.js ***!
  \*********************************************************************************/
/*! exports provided: simpleAbsImplCPU, addImplCPU, ceilImplCPU, expImplCPU, expm1ImplCPU, logImplCPU, multiplyImplCPU, sliceImplCPU, subImplCPU, floorImplCPU, maxImplCPU, rsqrtImplCPU, transposeImplCPU, uniqueImplCPU */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simpleAbsImplCPU", function() { return simpleAbsImplCPU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addImplCPU", function() { return addImplCPU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ceilImplCPU", function() { return ceilImplCPU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expImplCPU", function() { return expImplCPU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expm1ImplCPU", function() { return expm1ImplCPU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logImplCPU", function() { return logImplCPU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyImplCPU", function() { return multiplyImplCPU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sliceImplCPU", function() { return sliceImplCPU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subImplCPU", function() { return subImplCPU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floorImplCPU", function() { return floorImplCPU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxImplCPU", function() { return maxImplCPU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rsqrtImplCPU", function() { return rsqrtImplCPU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transposeImplCPU", function() { return transposeImplCPU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueImplCPU", function() { return uniqueImplCPU; });
/* harmony import */ var _tensorflow_tfjs_backend_cpu_dist_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-backend-cpu/dist/shared */ "./node_modules/@tensorflow/tfjs-backend-cpu/dist/shared.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
// Import shared functionality from tfjs-backend-cpu without triggering
// side effects.
// tslint:disable-next-line: no-imports-from-dist

const { simpleAbsImpl: simpleAbsImplCPU, addImpl: addImplCPU, ceilImpl: ceilImplCPU, expImpl: expImplCPU, expm1Impl: expm1ImplCPU, floorImpl: floorImplCPU, logImpl: logImplCPU, maxImpl: maxImplCPU, multiplyImpl: multiplyImplCPU, rsqrtImpl: rsqrtImplCPU, sliceImpl: sliceImplCPU, subImpl: subImplCPU, transposeImpl: transposeImplCPU, uniqueImpl: uniqueImplCPU, } = _tensorflow_tfjs_backend_cpu_dist_shared__WEBPACK_IMPORTED_MODULE_0__;

//# sourceMappingURL=shared.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Add.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Add.js ***!
  \*************************************************************************/
/*! exports provided: addKernelFunc, addConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addKernelFunc", function() { return addKernelFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addConfig", function() { return addConfig; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _kernel_utils_kernel_funcs_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../kernel_utils/kernel_funcs_utils */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernel_utils/kernel_funcs_utils.js");
/* harmony import */ var _kernel_utils_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../kernel_utils/shared */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernel_utils/shared.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */



const ADD = 'return a + b;';
const addKernelFunc = Object(_kernel_utils_kernel_funcs_utils__WEBPACK_IMPORTED_MODULE_1__["binaryKernelFunc"])({
    opSnippet: ADD,
    packedOpSnippet: ADD,
    supportsComplex: true,
    cpuKernelImpl: _kernel_utils_shared__WEBPACK_IMPORTED_MODULE_2__["addImplCPU"]
});
const addConfig = {
    kernelName: _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["Add"],
    backendName: 'webgl',
    kernelFunc: addKernelFunc
};
//# sourceMappingURL=Add.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Atan2.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Atan2.js ***!
  \***************************************************************************/
/*! exports provided: atan2, atan2Config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "atan2", function() { return atan2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "atan2Config", function() { return atan2Config; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _kernel_utils_kernel_funcs_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../kernel_utils/kernel_funcs_utils */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernel_utils/kernel_funcs_utils.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */


const ATAN2 = _kernel_utils_kernel_funcs_utils__WEBPACK_IMPORTED_MODULE_1__["CHECK_NAN_SNIPPET_BINARY"] + `
  return atan(a, b);
`;
const ATAN2_PACKED = `
  vec4 result = atan(a, b);
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  ` +
    _kernel_utils_kernel_funcs_utils__WEBPACK_IMPORTED_MODULE_1__["CHECK_NAN_SNIPPET_BINARY_PACKED"] + `
  return result;
`;
const atan2 = Object(_kernel_utils_kernel_funcs_utils__WEBPACK_IMPORTED_MODULE_1__["binaryKernelFunc"])({ opSnippet: ATAN2, packedOpSnippet: ATAN2_PACKED });
const atan2Config = {
    kernelName: _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["Atan2"],
    backendName: 'webgl',
    kernelFunc: atan2,
};
//# sourceMappingURL=Atan2.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/AvgPool.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/AvgPool.js ***!
  \*****************************************************************************/
/*! exports provided: avgPool, avgPoolConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "avgPool", function() { return avgPool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "avgPoolConfig", function() { return avgPoolConfig; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _pool_gpu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pool_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/pool_gpu.js");
/* harmony import */ var _webgl_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../webgl_util */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/webgl_util.js");
/* harmony import */ var _Identity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Identity */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Identity.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */




function avgPool(args) {
    const { inputs, backend, attrs } = args;
    const { x } = inputs;
    Object(_webgl_util__WEBPACK_IMPORTED_MODULE_2__["assertNotComplex"])(x, 'avgPool');
    const { filterSize, strides, pad, dimRoundingMode } = attrs;
    const dilations = 1;
    _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].assert(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["backend_util"].eitherStridesOrDilationsAreOne(strides, dilations), () => 'Error in avgPool: Either strides or dilations must be 1. ' +
        `Got strides ${strides} and dilations '${dilations}'`);
    const convInfo = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["backend_util"].computePool2DInfo(x.shape, filterSize, strides, dilations, pad, dimRoundingMode);
    if (convInfo.filterWidth === 1 && convInfo.filterHeight === 1 &&
        _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].arraysEqual(convInfo.inShape, convInfo.outShape)) {
        return Object(_Identity__WEBPACK_IMPORTED_MODULE_3__["identity"])({ inputs: { x }, backend });
    }
    const avgPoolProgram = new _pool_gpu__WEBPACK_IMPORTED_MODULE_1__["Pool2DProgram"](convInfo, 'avg', false);
    return backend.runWebGLProgram(avgPoolProgram, [x], 'float32');
}
const avgPoolConfig = {
    kernelName: _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["AvgPool"],
    backendName: 'webgl',
    kernelFunc: avgPool
};
//# sourceMappingURL=AvgPool.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/AvgPoolBackprop.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/AvgPoolBackprop.js ***!
  \*************************************************************************************/
/*! exports provided: avgPoolBackprop, avgPoolBackpropConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "avgPoolBackprop", function() { return avgPoolBackprop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "avgPoolBackpropConfig", function() { return avgPoolBackpropConfig; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _avg_pool_backprop_gpu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../avg_pool_backprop_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/avg_pool_backprop_gpu.js");
/* harmony import */ var _webgl_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../webgl_util */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/webgl_util.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */



function avgPoolBackprop(args) {
    const { inputs, backend, attrs } = args;
    const { dy, input } = inputs;
    const x = input;
    Object(_webgl_util__WEBPACK_IMPORTED_MODULE_2__["assertNotComplex"])([dy, input], 'avgPoolBackprop');
    const { filterSize, strides, pad } = attrs;
    const convInfo = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["backend_util"].computePool2DInfo(x.shape, filterSize, strides, 1 /* dilations */, pad);
    const avgPoolBackpropProgram = new _avg_pool_backprop_gpu__WEBPACK_IMPORTED_MODULE_1__["AvgPool2DBackpropProgram"](convInfo);
    return backend.runWebGLProgram(avgPoolBackpropProgram, [dy], x.dtype);
}
const avgPoolBackpropConfig = {
    kernelName: _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["AvgPoolBackprop"],
    backendName: 'webgl',
    kernelFunc: avgPoolBackprop
};
//# sourceMappingURL=AvgPoolBackprop.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/BatchNorm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/BatchNorm.js ***!
  \*******************************************************************************/
/*! exports provided: batchNorm, batchNormConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "batchNorm", function() { return batchNorm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "batchNormConfig", function() { return batchNormConfig; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _batchnorm_gpu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../batchnorm_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/batchnorm_gpu.js");
/* harmony import */ var _batchnorm_packed_gpu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../batchnorm_packed_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/batchnorm_packed_gpu.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */



const batchNorm = ({ inputs, backend, attrs }) => {
    const { x, mean, variance, offset, scale } = inputs;
    _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].assert(mean.shape.length === variance.shape.length, () => 'Batch normalization gradient requires mean and variance to have ' +
        'equal ranks.');
    _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].assert(offset == null || mean.shape.length === offset.shape.length, () => 'Batch normalization gradient requires mean and offset to have ' +
        'equal ranks.');
    _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].assert(scale == null || mean.shape.length === scale.shape.length, () => 'Batch normalization gradient requires mean and scale to have ' +
        'equal ranks.');
    let { varianceEpsilon } = attrs;
    if (varianceEpsilon == null) {
        varianceEpsilon = 0.001;
    }
    const finalInputs = [x, mean, variance];
    let offsetShape = null;
    if (offset != null) {
        offsetShape = offset.shape;
        finalInputs.push(offset);
    }
    let scaleShape = null;
    if (scale != null) {
        scaleShape = scale.shape;
        finalInputs.push(scale);
    }
    const program = Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["env"])().getBool('WEBGL_PACK_NORMALIZATION') ?
        new _batchnorm_packed_gpu__WEBPACK_IMPORTED_MODULE_2__["BatchNormPackedProgram"](x.shape, mean.shape, variance.shape, offsetShape, scaleShape, varianceEpsilon) :
        new _batchnorm_gpu__WEBPACK_IMPORTED_MODULE_1__["BatchNormProgram"](x.shape, mean.shape, variance.shape, offsetShape, scaleShape, varianceEpsilon);
    const output = backend.runWebGLProgram(program, finalInputs, finalInputs[0].dtype);
    return output;
};
const batchNormConfig = {
    kernelName: _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["FusedBatchNorm"],
    backendName: 'webgl',
    kernelFunc: batchNorm,
};
//# sourceMappingURL=BatchNorm.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Cast.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Cast.js ***!
  \**************************************************************************/
/*! exports provided: cast, castConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cast", function() { return cast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "castConfig", function() { return castConfig; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _Complex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Complex */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Complex.js");
/* harmony import */ var _Identity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Identity */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Identity.js");
/* harmony import */ var _NotEqual__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NotEqual */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/NotEqual.js");
/* harmony import */ var _Real__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Real */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Real.js");
/* harmony import */ var _kernel_utils_int__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../kernel_utils/int */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernel_utils/int.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */







function cast(args) {
    const { inputs, backend, attrs } = args;
    const { x } = inputs;
    const { dtype } = attrs;
    // Casting to complex64.
    if (dtype === 'complex64') {
        if (x.dtype === 'complex64') {
            return Object(_Identity__WEBPACK_IMPORTED_MODULE_2__["identity"])({ inputs: { x }, backend });
        }
        // TODO(annxingyuan): Import kernel function once zeros is modularized.
        const zerosTensor = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["zeros"](x.shape);
        const floatX = cast({ inputs: { x }, backend, attrs: { dtype: 'float32' } });
        const result = Object(_Complex__WEBPACK_IMPORTED_MODULE_1__["complex"])({ inputs: { real: floatX, imag: zerosTensor }, backend });
        zerosTensor.dispose();
        backend.disposeIntermediateTensorInfo(floatX);
        return result;
    }
    // Casting from complex64
    if (x.dtype === 'complex64') {
        const realPart = Object(_Real__WEBPACK_IMPORTED_MODULE_4__["real"])({ inputs: { input: x }, backend });
        const result = cast({ inputs: { x: realPart }, backend, attrs: { dtype } });
        backend.disposeIntermediateTensorInfo(realPart);
        return result;
    }
    if (!_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].hasEncodingLoss(x.dtype, dtype)) {
        // We don't change the underlying data, since we cast to higher
        // precision.
        const result = Object(_Identity__WEBPACK_IMPORTED_MODULE_2__["identity"])({ inputs: { x }, backend });
        return { dataId: result.dataId, shape: result.shape, dtype };
    }
    if (dtype === 'int32') {
        return Object(_kernel_utils_int__WEBPACK_IMPORTED_MODULE_5__["int"])(x, backend);
    }
    if (dtype === 'bool') {
        const zerosTensorInfo = backend.makeTensorInfo([], 'bool', _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].getTypedArrayFromDType('bool', 1));
        const binaryInputs = { a: x, b: zerosTensorInfo };
        const result = Object(_NotEqual__WEBPACK_IMPORTED_MODULE_3__["notEqual"])({ inputs: binaryInputs, backend });
        backend.disposeIntermediateTensorInfo(zerosTensorInfo);
        return result;
    }
    throw new Error(`Error in Cast: failed to cast ${x.dtype} to ${dtype}`);
}
const castConfig = {
    kernelName: _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["Cast"],
    backendName: 'webgl',
    kernelFunc: cast
};
//# sourceMappingURL=Cast.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Complex.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Complex.js ***!
  \*****************************************************************************/
/*! exports provided: complex, complexConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "complex", function() { return complex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "complexConfig", function() { return complexConfig; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _Identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Identity */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Identity.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */


/**
 * In WebGL data is stored in GPU textures which can't be efficiently copied, so
 * complex tensors share data with their real and imaginary components. Complex
 * tensors increment the `complexParentRefCount` properties of the underlying
 * data buckets to prevent them from being disposed, as the engine's disposal
 * logic does not account for data sharing by complex tensors.
 *
 * When a complex tensor is disposed, it will explicitly decrease the
 * `complexParentRefCount` properties of its underlying components.
 */
function complex(args) {
    const { inputs, backend } = args;
    const { real, imag } = inputs;
    const complexInfo = backend.makeTensorInfo(real.shape, 'complex64');
    const complex = backend.texData.get(complexInfo.dataId);
    const realTensorInfo = Object(_Identity__WEBPACK_IMPORTED_MODULE_1__["identity"])({ inputs: { x: real }, backend });
    const realData = backend.texData.get(realTensorInfo.dataId);
    realData.complexParentRefCount++;
    const imagTensorInfo = Object(_Identity__WEBPACK_IMPORTED_MODULE_1__["identity"])({ inputs: { x: imag }, backend });
    const imagData = backend.texData.get(imagTensorInfo.dataId);
    imagData.complexParentRefCount++;
    complex.complexTensorInfos = { real: realTensorInfo, imag: imagTensorInfo };
    return complexInfo;
}
const complexConfig = {
    kernelName: _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["Complex"],
    backendName: 'webgl',
    kernelFunc: complex
};
//# sourceMappingURL=Complex.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Concat.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Concat.js ***!
  \****************************************************************************/
/*! exports provided: concat, concatConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return concat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concatConfig", function() { return concatConfig; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _Concat_impl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Concat_impl */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Concat_impl.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */


function concat(args) {
    const { inputs, backend, attrs } = args;
    const { axis } = attrs;
    const $axis = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].parseAxisParam(axis, inputs[0].shape)[0];
    const outShape = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["backend_util"].computeOutShape(inputs.map(t => t.shape), $axis);
    if (_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].sizeFromShape(outShape) === 0) {
        return backend.makeTensorInfo(outShape, inputs[0].dtype, []);
    }
    // Keep only non-empty tensors (ignore tensors with 0 in their shape).
    const $inputs = inputs.filter(t => _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].sizeFromShape(t.shape) > 0);
    if ($inputs.length === 1) {
        return $inputs[0];
    }
    const shapes = $inputs.map(t => t.shape);
    _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["backend_util"].assertParamsConsistent(shapes, $axis);
    return Object(_Concat_impl__WEBPACK_IMPORTED_MODULE_1__["concatImpl"])($inputs, $axis, backend);
}
const concatConfig = {
    kernelName: _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["Concat"],
    backendName: 'webgl',
    kernelFunc: concat
};
//# sourceMappingURL=Concat.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Concat_impl.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Concat_impl.js ***!
  \*********************************************************************************/
/*! exports provided: concatImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concatImpl", function() { return concatImpl; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _concat_gpu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../concat_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/concat_gpu.js");
/* harmony import */ var _concat_packed_gpu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../concat_packed_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/concat_packed_gpu.js");
/* harmony import */ var _Complex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Complex */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Complex.js");
/* harmony import */ var _Imag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Imag */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Imag.js");
/* harmony import */ var _Real__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Real */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Real.js");
/* harmony import */ var _Reshape__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Reshape */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Reshape.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */







function concatImpl(inputs, axis, backend) {
    const dtype = inputs[0].dtype;
    if (dtype === 'complex64') {
        const reals = inputs.map((t) => Object(_Real__WEBPACK_IMPORTED_MODULE_5__["real"])({ inputs: { input: t }, backend }));
        const imags = inputs.map((t) => Object(_Imag__WEBPACK_IMPORTED_MODULE_4__["imag"])({ inputs: { input: t }, backend }));
        const realConcated = concatImpl(reals, axis, backend);
        const imagConcated = concatImpl(imags, axis, backend);
        const result = Object(_Complex__WEBPACK_IMPORTED_MODULE_3__["complex"])({ inputs: { real: realConcated, imag: imagConcated }, backend });
        reals.forEach(r => backend.disposeIntermediateTensorInfo(r));
        imags.forEach(i => backend.disposeIntermediateTensorInfo(i));
        backend.disposeIntermediateTensorInfo(realConcated);
        backend.disposeIntermediateTensorInfo(imagConcated);
        return result;
    }
    if (inputs.length > Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["env"])().getNumber('WEBGL_MAX_TEXTURES_IN_SHADER')) {
        const midIndex = Math.floor(inputs.length / 2);
        const leftSide = concatImpl(inputs.slice(0, midIndex), axis, backend);
        const rightSide = concatImpl(inputs.slice(midIndex), axis, backend);
        const result = concatImpl([leftSide, rightSide], axis, backend);
        backend.disposeIntermediateTensorInfo(leftSide);
        backend.disposeIntermediateTensorInfo(rightSide);
        return result;
    }
    if (Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["env"])().getBool('WEBGL_PACK_ARRAY_OPERATIONS') &&
        inputs[0].shape.length > 1) {
        const program = new _concat_packed_gpu__WEBPACK_IMPORTED_MODULE_2__["ConcatPackedProgram"](inputs.map(t => t.shape), axis);
        return backend.runWebGLProgram(program, inputs, dtype);
    }
    // Any concat of n-dimensional tensors across any axis can be reduced to
    // a concatenation of two-dimensional tensors across the axis 1 by first
    // partitioning the axes of the original tensors into those less than the
    // axis to be concatenated and the rest. Then reshape the tensors
    // into a two-dimensional tensor by collapsing these two sets of axes and
    // concatenate the resulting matrices across the axis 1, finally reshaping
    // the result to have the proper shape.
    const outShape = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["backend_util"].computeOutShape(inputs.map(t => t.shape), axis);
    const tensors2D = inputs.map(x => Object(_Reshape__WEBPACK_IMPORTED_MODULE_6__["reshape"])({
        inputs: { x },
        attrs: { shape: [-1, _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].sizeFromShape(x.shape.slice(axis))] },
        backend
    }));
    const program = new _concat_gpu__WEBPACK_IMPORTED_MODULE_1__["ConcatProgram"](tensors2D.map(t => t.shape));
    const result = backend.runWebGLProgram(program, tensors2D, dtype);
    tensors2D.forEach(r => backend.disposeIntermediateTensorInfo(r));
    const reshapedResult = Object(_Reshape__WEBPACK_IMPORTED_MODULE_6__["reshape"])({ inputs: { x: result }, attrs: { shape: outShape }, backend });
    backend.disposeIntermediateTensorInfo(result);
    return reshapedResult;
}
//# sourceMappingURL=Concat_impl.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Cos.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Cos.js ***!
  \*************************************************************************/
/*! exports provided: cos, cosConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cos", function() { return cos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cosConfig", function() { return cosConfig; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _kernel_utils_kernel_funcs_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../kernel_utils/kernel_funcs_utils */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernel_utils/kernel_funcs_utils.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */


const COS = _kernel_utils_kernel_funcs_utils__WEBPACK_IMPORTED_MODULE_1__["CHECK_NAN_SNIPPET_UNARY"] + `
  return cos(x);
`;
const cos = Object(_kernel_utils_kernel_funcs_utils__WEBPACK_IMPORTED_MODULE_1__["unaryKernelFunc"])(COS);
const cosConfig = {
    kernelName: _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["Cos"],
    backendName: 'webgl',
    kernelFunc: cos,
};
//# sourceMappingURL=Cos.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Div.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Div.js ***!
  \*************************************************************************/
/*! exports provided: div, divConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "div", function() { return div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divConfig", function() { return divConfig; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _kernel_utils_kernel_funcs_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../kernel_utils/kernel_funcs_utils */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernel_utils/kernel_funcs_utils.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */


// Without the equality check div produces 0.9999 for a = b, which when
// floored can cause errors.
const DIV = `
if (a == b) {
  return 1.0;
};
return a / b;`;
// We do the same as in ./binaryop_gpu, with vec4 and ivec4.
// On Linux, the vectorized implementation produces NaNs when a and b are 0.
const DIV_PACKED = `
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`;
const div = Object(_kernel_utils_kernel_funcs_utils__WEBPACK_IMPORTED_MODULE_1__["binaryKernelFunc"])({ opSnippet: DIV, packedOpSnippet: DIV_PACKED, checkOutOfBounds: true });
const divConfig = {
    kernelName: _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["Div"],
    backendName: 'webgl',
    kernelFunc: div,
};
//# sourceMappingURL=Div.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/FFT.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/FFT.js ***!
  \*************************************************************************/
/*! exports provided: fft, fftConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fft", function() { return fft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fftConfig", function() { return fftConfig; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _FFT_impl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FFT_impl */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/FFT_impl.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */


function fft(args) {
    const { inputs, backend } = args;
    const { input } = inputs;
    return Object(_FFT_impl__WEBPACK_IMPORTED_MODULE_1__["fftImpl"])(input, false /* inverse */, backend);
}
const fftConfig = {
    kernelName: _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["FFT"],
    backendName: 'webgl',
    kernelFunc: fft
};
//# sourceMappingURL=FFT.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/FFT_impl.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/FFT_impl.js ***!
  \******************************************************************************/
/*! exports provided: fftImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fftImpl", function() { return fftImpl; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _fft_gpu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fft_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/fft_gpu.js");
/* harmony import */ var _Complex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Complex */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Complex.js");
/* harmony import */ var _Reshape__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Reshape */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Reshape.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */




function fftImpl(x, inverse, backend) {
    const xData = backend.texData.get(x.dataId);
    const inputSize = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].sizeFromShape(x.shape);
    // Collapse all outer dimensions to a single batch dimension.
    const innerDimensionSize = x.shape[x.shape.length - 1];
    const batch = inputSize / innerDimensionSize;
    const input2D = Object(_Reshape__WEBPACK_IMPORTED_MODULE_3__["reshape"])({ inputs: { x }, backend, attrs: { shape: [batch, innerDimensionSize] } });
    const xShape = input2D.shape;
    const realProgram = new _fft_gpu__WEBPACK_IMPORTED_MODULE_1__["FFTProgram"]('real', xShape, inverse);
    const imagProgram = new _fft_gpu__WEBPACK_IMPORTED_MODULE_1__["FFTProgram"]('imag', xShape, inverse);
    const inputs = [
        {
            dataId: xData.complexTensorInfos.real.dataId,
            dtype: xData.complexTensorInfos.real.dtype,
            shape: xShape
        },
        {
            dataId: xData.complexTensorInfos.imag.dataId,
            dtype: xData.complexTensorInfos.imag.dtype,
            shape: xShape
        }
    ];
    const realPart = backend.runWebGLProgram(realProgram, inputs, 'float32');
    const imagPart = backend.runWebGLProgram(imagProgram, inputs, 'float32');
    const complexOutput = Object(_Complex__WEBPACK_IMPORTED_MODULE_2__["complex"])({ inputs: { real: realPart, imag: imagPart }, backend });
    backend.disposeIntermediateTensorInfo(realPart);
    backend.disposeIntermediateTensorInfo(imagPart);
    const complexOutputReshaped = Object(_Reshape__WEBPACK_IMPORTED_MODULE_3__["reshape"])({ inputs: { x: complexOutput }, backend, attrs: { shape: x.shape } });
    backend.disposeIntermediateTensorInfo(complexOutputReshaped);
    return complexOutputReshaped;
}
//# sourceMappingURL=FFT_impl.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/FlipLeftRight.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/FlipLeftRight.js ***!
  \***********************************************************************************/
/*! exports provided: flipLeftRightConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flipLeftRightConfig", function() { return flipLeftRightConfig; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _flip_left_right_gpu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../flip_left_right_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/flip_left_right_gpu.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */


const flipLeftRightConfig = {
    kernelName: _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["FlipLeftRight"],
    backendName: 'webgl',
    kernelFunc: ({ inputs, backend }) => {
        const { image } = inputs;
        const webglBackend = backend;
        const program = new _flip_left_right_gpu__WEBPACK_IMPORTED_MODULE_1__["FlipLeftRightProgram"](image.shape);
        const output = webglBackend.runWebGLProgram(program, [image], image.dtype);
        return output;
    }
};
//# sourceMappingURL=FlipLeftRight.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/FromPixels.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/FromPixels.js ***!
  \********************************************************************************/
/*! exports provided: fromPixelsConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromPixelsConfig", function() { return fromPixelsConfig; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _tex_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tex_util */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/tex_util.js");
/* harmony import */ var _FromPixels_utils_from_pixels_gpu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FromPixels_utils/from_pixels_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/FromPixels_utils/from_pixels_gpu.js");
/* harmony import */ var _FromPixels_utils_from_pixels_packed_gpu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FromPixels_utils/from_pixels_packed_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/FromPixels_utils/from_pixels_packed_gpu.js");
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */





const fromPixelsConfig = {
    kernelName: _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["FromPixels"],
    backendName: 'webgl',
    kernelFunc: fromPixels,
};
let fromPixels2DContext;
function fromPixels(args) {
    const { inputs, backend, attrs } = args;
    let { pixels } = inputs;
    const { numChannels } = attrs;
    const isVideo = typeof (HTMLVideoElement) !== 'undefined' &&
        pixels instanceof HTMLVideoElement;
    const isImage = typeof (HTMLImageElement) !== 'undefined' &&
        pixels instanceof HTMLImageElement;
    const [width, height] = isVideo ?
        [
            pixels.videoWidth,
            pixels.videoHeight
        ] :
        [pixels.width, pixels.height];
    const texShape = [height, width];
    const outShape = [height, width, numChannels];
    if (isImage || isVideo) {
        if (fromPixels2DContext == null) {
            fromPixels2DContext = document.createElement('canvas').getContext('2d');
        }
        fromPixels2DContext.canvas.width = width;
        fromPixels2DContext.canvas.height = height;
        fromPixels2DContext.drawImage(pixels, 0, 0, width, height);
        pixels = fromPixels2DContext.canvas;
    }
    const tempPixelHandle = backend.makeTensorInfo(texShape, 'int32');
    // This is a byte texture with pixels.
    backend.texData.get(tempPixelHandle.dataId).usage = _tex_util__WEBPACK_IMPORTED_MODULE_1__["TextureUsage"].PIXELS;
    backend.gpgpu.uploadPixelDataToTexture(backend.getTexture(tempPixelHandle.dataId), pixels);
    const program = Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["env"])().getBool('WEBGL_PACK') ?
        new _FromPixels_utils_from_pixels_packed_gpu__WEBPACK_IMPORTED_MODULE_3__["FromPixelsPackedProgram"](outShape) :
        new _FromPixels_utils_from_pixels_gpu__WEBPACK_IMPORTED_MODULE_2__["FromPixelsProgram"](outShape);
    const res = backend.runWebGLProgram(program, [tempPixelHandle], 'int32');
    backend.disposeData(tempPixelHandle.dataId);
    return res;
}
//# sourceMappingURL=FromPixels.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/FromPixels_utils/from_pixels_gpu.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/FromPixels_utils/from_pixels_gpu.js ***!
  \******************************************************************************************************/
/*! exports provided: FromPixelsProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FromPixelsProgram", function() { return FromPixelsProgram; });
/* harmony import */ var _glsl_version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../glsl_version */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/glsl_version.js");
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

class FromPixelsProgram {
    constructor(outputShape) {
        this.variableNames = ['A'];
        const glsl = Object(_glsl_version__WEBPACK_IMPORTED_MODULE_0__["getGlslDifferences"])();
        const [height, width,] = outputShape;
        this.outputShape = outputShape;
        this.userCode = `
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${width}.0, ${height}.0);

        vec4 values = ${glsl.texture2D}(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `;
    }
}
//# sourceMappingURL=from_pixels_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/FromPixels_utils/from_pixels_packed_gpu.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/FromPixels_utils/from_pixels_packed_gpu.js ***!
  \*************************************************************************************************************/
/*! exports provided: FromPixelsPackedProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FromPixelsPackedProgram", function() { return FromPixelsPackedProgram; });
/* harmony import */ var _glsl_version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../glsl_version */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/glsl_version.js");
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

class FromPixelsPackedProgram {
    constructor(outputShape) {
        this.variableNames = ['A'];
        this.packedInputs = false;
        this.packedOutput = true;
        const glsl = Object(_glsl_version__WEBPACK_IMPORTED_MODULE_0__["getGlslDifferences"])();
        const [height, width,] = outputShape;
        this.outputShape = outputShape;
        this.userCode = `
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(${width}.0, ${height}.0);
            vec4 values = ${glsl.texture2D}(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        ${glsl.output} = result;
      }
    `;
    }
}
//# sourceMappingURL=from_pixels_packed_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/IFFT.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/IFFT.js ***!
  \**************************************************************************/
/*! exports provided: ifft, ifftConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ifft", function() { return ifft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ifftConfig", function() { return ifftConfig; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _FFT_impl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FFT_impl */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/FFT_impl.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */


function ifft(args) {
    const { inputs, backend } = args;
    const { input } = inputs;
    return Object(_FFT_impl__WEBPACK_IMPORTED_MODULE_1__["fftImpl"])(input, true /* inverse */, backend);
}
const ifftConfig = {
    kernelName: _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["IFFT"],
    backendName: 'webgl',
    kernelFunc: ifft
};
//# sourceMappingURL=IFFT.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Identity.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Identity.js ***!
  \******************************************************************************/
/*! exports provided: identity, identityConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identityConfig", function() { return identityConfig; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

function identity(args) {
    const { inputs, backend } = args;
    const { x } = inputs;
    backend.incRef(x.dataId);
    return { dataId: x.dataId, shape: x.shape, dtype: x.dtype };
}
const identityConfig = {
    kernelName: _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["Identity"],
    backendName: 'webgl',
    kernelFunc: identity
};
//# sourceMappingURL=Identity.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Imag.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Imag.js ***!
  \**************************************************************************/
/*! exports provided: imag, imagConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imag", function() { return imag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imagConfig", function() { return imagConfig; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _Identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Identity */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Identity.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */


function imag(args) {
    const { inputs, backend } = args;
    const { input } = inputs;
    const inputData = backend.texData.get(input.dataId);
    return Object(_Identity__WEBPACK_IMPORTED_MODULE_1__["identity"])({ inputs: { x: inputData.complexTensorInfos.imag }, backend });
}
const imagConfig = {
    kernelName: _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["Imag"],
    backendName: 'webgl',
    kernelFunc: imag
};
//# sourceMappingURL=Imag.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Max.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Max.js ***!
  \*************************************************************************/
/*! exports provided: maxConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxConfig", function() { return maxConfig; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _kernel_utils_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../kernel_utils/shared */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernel_utils/shared.js");
/* harmony import */ var _Max_impl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Max_impl */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Max_impl.js");
/* harmony import */ var _Transpose_impl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Transpose_impl */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Transpose_impl.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */





const maxConfig = {
    kernelName: _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["Max"],
    backendName: 'webgl',
    kernelFunc: ({ inputs, attrs, backend }) => {
        const { x } = inputs;
        const { reductionIndices, keepDims } = attrs;
        const webglBackend = backend;
        const xRank = x.shape.length;
        const origAxes = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].parseAxisParam(reductionIndices, x.shape);
        let axes = origAxes;
        const permutedAxes = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["backend_util"].getAxesPermutation(axes, xRank);
        const maxInputIsTransposed = permutedAxes != null;
        const shouldExecuteOnCPU = webglBackend.shouldExecuteOnCPU([x]);
        let maxInput = x;
        if (maxInputIsTransposed) {
            if (shouldExecuteOnCPU) {
                const xTexData = webglBackend.texData.get(maxInput.dataId);
                const values = xTexData.values;
                const newShape = new Array(xRank);
                for (let i = 0; i < newShape.length; i++) {
                    newShape[i] = x.shape[permutedAxes[i]];
                }
                const maxInputValues = Object(_Transpose_impl__WEBPACK_IMPORTED_MODULE_3__["transposeImplCPU"])(values, x.shape, x.dtype, permutedAxes, newShape);
                maxInput = webglBackend.makeTensorInfo(newShape, x.dtype);
                const maxInputData = webglBackend.texData.get(maxInput.dataId);
                maxInputData.values = maxInputValues;
            }
            else {
                maxInput = Object(_Transpose_impl__WEBPACK_IMPORTED_MODULE_3__["transposeImpl"])(x, permutedAxes, webglBackend);
            }
            axes = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["backend_util"].getInnerMostAxes(axes.length, xRank);
        }
        _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["backend_util"].assertAxesAreInnerMostDims('max', axes, xRank);
        const [maxOutShape, reduceShape] = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["backend_util"].computeOutAndReduceShapes(maxInput.shape, axes);
        let outShape = maxOutShape;
        if (keepDims) {
            // rather than reshape at the end, set the target shape here.
            outShape = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["backend_util"].expandShapeToKeepDim(maxOutShape, origAxes);
        }
        let out;
        if (shouldExecuteOnCPU) {
            const xTexData = webglBackend.texData.get(maxInput.dataId);
            const values = xTexData.values;
            const outValues = Object(_kernel_utils_shared__WEBPACK_IMPORTED_MODULE_1__["maxImplCPU"])(values, _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].sizeFromShape(reduceShape), outShape, x.dtype);
            out = webglBackend.makeTensorInfo(outShape, x.dtype);
            const outData = webglBackend.texData.get(out.dataId);
            outData.values = outValues;
        }
        else {
            out = Object(_Max_impl__WEBPACK_IMPORTED_MODULE_2__["maxImpl"])(maxInput, reduceShape, outShape, webglBackend);
        }
        if (maxInputIsTransposed) {
            webglBackend.disposeIntermediateTensorInfo(maxInput);
        }
        return out;
    }
};
//# sourceMappingURL=Max.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/MaxPool.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/MaxPool.js ***!
  \*****************************************************************************/
/*! exports provided: maxPool, maxPoolConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxPool", function() { return maxPool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxPoolConfig", function() { return maxPoolConfig; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _pool_gpu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pool_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/pool_gpu.js");
/* harmony import */ var _webgl_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../webgl_util */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/webgl_util.js");
/* harmony import */ var _Identity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Identity */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Identity.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */




function maxPool(args) {
    const { inputs, backend, attrs } = args;
    const { x } = inputs;
    Object(_webgl_util__WEBPACK_IMPORTED_MODULE_2__["assertNotComplex"])(x, 'maxPool');
    const { filterSize, strides, pad, dimRoundingMode } = attrs;
    const dilations = 1;
    _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].assert(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["backend_util"].eitherStridesOrDilationsAreOne(strides, dilations), () => 'Error in maxPool: Either strides or dilations must be 1. ' +
        `Got strides ${strides} and dilations '${dilations}'`);
    const convInfo = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["backend_util"].computePool2DInfo(x.shape, filterSize, strides, dilations, pad, dimRoundingMode);
    if (convInfo.filterWidth === 1 && convInfo.filterHeight === 1 &&
        _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].arraysEqual(convInfo.inShape, convInfo.outShape)) {
        return Object(_Identity__WEBPACK_IMPORTED_MODULE_3__["identity"])({ inputs: { x }, backend });
    }
    const maxPoolProgram = new _pool_gpu__WEBPACK_IMPORTED_MODULE_1__["Pool2DProgram"](convInfo, 'max', false);
    return backend.runWebGLProgram(maxPoolProgram, [x], x.dtype);
}
const maxPoolConfig = {
    kernelName: _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["MaxPool"],
    backendName: 'webgl',
    kernelFunc: maxPool
};
//# sourceMappingURL=MaxPool.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/MaxPoolBackprop.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/MaxPoolBackprop.js ***!
  \*************************************************************************************/
/*! exports provided: maxPoolBackprop, maxPoolBackpropConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxPoolBackprop", function() { return maxPoolBackprop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxPoolBackpropConfig", function() { return maxPoolBackpropConfig; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _max_pool_backprop_gpu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../max_pool_backprop_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/max_pool_backprop_gpu.js");
/* harmony import */ var _pool_gpu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pool_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/pool_gpu.js");
/* harmony import */ var _webgl_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../webgl_util */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/webgl_util.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */




function maxPoolBackprop(args) {
    const { inputs, backend, attrs } = args;
    const { dy, input, output } = inputs;
    const x = input;
    Object(_webgl_util__WEBPACK_IMPORTED_MODULE_3__["assertNotComplex"])([input, output], 'maxPoolBackprop');
    const { filterSize, strides, pad, dimRoundingMode } = attrs;
    const convInfo = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["backend_util"].computePool2DInfo(x.shape, filterSize, strides, 1 /* dilations */, pad, dimRoundingMode);
    const getPositions = true;
    const maxPoolPositionsProgram = new _pool_gpu__WEBPACK_IMPORTED_MODULE_2__["Pool2DProgram"](convInfo, 'max', getPositions);
    const maxPoolPositions = backend.runWebGLProgram(maxPoolPositionsProgram, [x], x.dtype);
    const maxPoolBackPropProgram = new _max_pool_backprop_gpu__WEBPACK_IMPORTED_MODULE_1__["MaxPool2DBackpropProgram"](convInfo);
    const result = backend.runWebGLProgram(maxPoolBackPropProgram, [dy, maxPoolPositions], x.dtype);
    backend.disposeIntermediateTensorInfo(maxPoolPositions);
    return result;
}
const maxPoolBackpropConfig = {
    kernelName: _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["MaxPoolBackprop"],
    backendName: 'webgl',
    kernelFunc: maxPoolBackprop
};
//# sourceMappingURL=MaxPoolBackprop.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/MaxPoolWithArgmax.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/MaxPoolWithArgmax.js ***!
  \***************************************************************************************/
/*! exports provided: maxPoolWithArgmaxConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxPoolWithArgmaxConfig", function() { return maxPoolWithArgmaxConfig; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _MaxPoolWithArgmax_impl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MaxPoolWithArgmax_impl */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/MaxPoolWithArgmax_impl.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */



const maxPoolWithArgmaxConfig = {
    kernelName: _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["MaxPoolWithArgmax"],
    backendName: 'webgl',
    kernelFunc: ({ inputs, attrs, backend }) => {
        const { x } = inputs;
        const { filterSize, strides, pad, includeBatchInIndex } = attrs;
        const webglBackend = backend;
        _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].assert(x.shape.length === 4, () => `Error in maxPool: input must be rank 4 but got rank ${x.shape.length}.`);
        const dilations = [1, 1];
        _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].assert(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["backend_util"].eitherStridesOrDilationsAreOne(strides, dilations), () => 'Error in maxPool: Either strides or dilations must be 1. ' +
            `Got strides ${strides} and dilations '${dilations}'`);
        const convInfo = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["backend_util"].computePool2DInfo(x.shape, filterSize, strides, dilations, pad);
        const [result, indexes] = Object(_MaxPoolWithArgmax_impl__WEBPACK_IMPORTED_MODULE_1__["maxPoolWithArgmaxImpl"])(x, includeBatchInIndex, convInfo, webglBackend);
        return [result, indexes];
    }
};
//# sourceMappingURL=MaxPoolWithArgmax.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/MaxPoolWithArgmax_impl.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/MaxPoolWithArgmax_impl.js ***!
  \********************************************************************************************/
/*! exports provided: maxPoolWithArgmaxImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxPoolWithArgmaxImpl", function() { return maxPoolWithArgmaxImpl; });
/* harmony import */ var _pool_gpu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pool_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/pool_gpu.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

function maxPoolWithArgmaxImpl(x, includeBatchInIndex, convInfo, backend) {
    let program = new _pool_gpu__WEBPACK_IMPORTED_MODULE_0__["Pool2DProgram"](convInfo, 'max', false);
    const poolOutput = backend.runWebGLProgram(program, [x], 'float32');
    program = new _pool_gpu__WEBPACK_IMPORTED_MODULE_0__["Pool2DProgram"](convInfo, 'max', true, true, includeBatchInIndex);
    const indexOutput = backend.runWebGLProgram(program, [x], 'float32');
    return [poolOutput, indexOutput];
}
//# sourceMappingURL=MaxPoolWithArgmax_impl.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Max_impl.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Max_impl.js ***!
  \******************************************************************************/
/*! exports provided: maxImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxImpl", function() { return maxImpl; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _kernel_utils_reduce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../kernel_utils/reduce */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernel_utils/reduce.js");
/* harmony import */ var _kernels_Reshape__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../kernels/Reshape */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Reshape.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */



function maxImpl(x, reduceShape, outShape, backend) {
    const inSize = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].sizeFromShape(reduceShape);
    const xSize = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].sizeFromShape(x.shape);
    const batchSize = xSize / inSize;
    const reshapedInput = Object(_kernels_Reshape__WEBPACK_IMPORTED_MODULE_2__["reshape"])({ inputs: { x }, attrs: { shape: [batchSize, inSize] }, backend });
    const reduced = Object(_kernel_utils_reduce__WEBPACK_IMPORTED_MODULE_1__["reduce"])(reshapedInput, x.dtype, 'max', backend);
    const reshapedOutput = Object(_kernels_Reshape__WEBPACK_IMPORTED_MODULE_2__["reshape"])({ inputs: { x: reduced }, attrs: { shape: outShape }, backend });
    backend.disposeIntermediateTensorInfo(reshapedInput);
    backend.disposeIntermediateTensorInfo(reduced);
    return reshapedOutput;
}
//# sourceMappingURL=Max_impl.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Mean.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Mean.js ***!
  \**************************************************************************/
/*! exports provided: meanConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meanConfig", function() { return meanConfig; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _Mean_impl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Mean_impl */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Mean_impl.js");
/* harmony import */ var _Transpose_impl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Transpose_impl */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Transpose_impl.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */



const meanConfig = {
    kernelName: _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["Mean"],
    backendName: 'webgl',
    kernelFunc: ({ inputs, attrs, backend }) => {
        const { x } = inputs;
        const { keepDims, axis } = attrs;
        const webglBackend = backend;
        const xRank = x.shape.length;
        const origAxes = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].parseAxisParam(axis, x.shape);
        let axes = origAxes;
        const permutedAxes = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["backend_util"].getAxesPermutation(axes, xRank);
        const meanInputIsTransposed = permutedAxes != null;
        const shouldExecuteOnCPU = webglBackend.shouldExecuteOnCPU([x]);
        const intermediates = [];
        let meanInput = x;
        if (meanInputIsTransposed) {
            if (shouldExecuteOnCPU) {
                const xTexData = webglBackend.texData.get(meanInput.dataId);
                const values = xTexData.values;
                const newShape = new Array(xRank);
                for (let i = 0; i < newShape.length; i++) {
                    newShape[i] = x.shape[permutedAxes[i]];
                }
                const meanInputValues = Object(_Transpose_impl__WEBPACK_IMPORTED_MODULE_2__["transposeImplCPU"])(values, x.shape, x.dtype, permutedAxes, newShape);
                meanInput = webglBackend.makeTensorInfo(newShape, x.dtype);
                const meanInputData = webglBackend.texData.get(meanInput.dataId);
                meanInputData.values = meanInputValues;
            }
            else {
                meanInput = Object(_Transpose_impl__WEBPACK_IMPORTED_MODULE_2__["transposeImpl"])(x, permutedAxes, webglBackend);
            }
            intermediates.push(meanInput);
            axes = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["backend_util"].getInnerMostAxes(axes.length, xRank);
        }
        _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["backend_util"].assertAxesAreInnerMostDims('sum', axes, xRank);
        const [meanOutShape, reduceShape] = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["backend_util"].computeOutAndReduceShapes(meanInput.shape, axes);
        let outShape = meanOutShape;
        if (keepDims) {
            // rather than reshape at the end, set the target shape here.
            outShape = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["backend_util"].expandShapeToKeepDim(meanOutShape, origAxes);
        }
        const out = Object(_Mean_impl__WEBPACK_IMPORTED_MODULE_1__["meanImpl"])(meanInput, reduceShape, outShape, webglBackend);
        for (const i of intermediates) {
            webglBackend.disposeIntermediateTensorInfo(i);
        }
        return out;
    }
};
//# sourceMappingURL=Mean.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Mean_impl.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Mean_impl.js ***!
  \*******************************************************************************/
/*! exports provided: meanImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meanImpl", function() { return meanImpl; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _kernel_utils_reduce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../kernel_utils/reduce */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernel_utils/reduce.js");
/* harmony import */ var _kernels_Reshape__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../kernels/Reshape */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Reshape.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */



function meanImpl(x, reduceShape, outShape, backend) {
    const inSize = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].sizeFromShape(reduceShape);
    const xSize = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].sizeFromShape(x.shape);
    const batchSize = xSize / inSize;
    const reshapedInput = Object(_kernels_Reshape__WEBPACK_IMPORTED_MODULE_2__["reshape"])({ inputs: { x }, attrs: { shape: [batchSize, inSize] }, backend });
    const reduced = Object(_kernel_utils_reduce__WEBPACK_IMPORTED_MODULE_1__["reduce"])(reshapedInput, 'float32', 'mean', backend);
    const reshapedOutput = Object(_kernels_Reshape__WEBPACK_IMPORTED_MODULE_2__["reshape"])({ inputs: { x: reduced }, attrs: { shape: outShape }, backend });
    backend.disposeIntermediateTensorInfo(reshapedInput);
    backend.disposeIntermediateTensorInfo(reduced);
    return reshapedOutput;
}
//# sourceMappingURL=Mean_impl.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/MirrorPad.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/MirrorPad.js ***!
  \*******************************************************************************/
/*! exports provided: mirrorPadKernelFunc, mirrorPadConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mirrorPadKernelFunc", function() { return mirrorPadKernelFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mirrorPadConfig", function() { return mirrorPadConfig; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _mirror_pad_gpu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mirror_pad_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/mirror_pad_gpu.js");
/* harmony import */ var _mirror_pad_packed_gpu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mirror_pad_packed_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/mirror_pad_packed_gpu.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */



const mirrorPadKernelFunc = ({ inputs, backend, attrs }) => {
    const { x } = inputs;
    const { paddings, mode } = attrs;
    const program = Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["env"])().getBool('WEBGL_PACK_ARRAY_OPERATIONS') ?
        new _mirror_pad_packed_gpu__WEBPACK_IMPORTED_MODULE_2__["MirrorPadPackedProgram"](x.shape, paddings, mode) :
        new _mirror_pad_gpu__WEBPACK_IMPORTED_MODULE_1__["MirrorPadProgram"](x.shape, paddings, mode);
    const output = backend.runWebGLProgram(program, [x], x.dtype);
    return output;
};
const mirrorPadConfig = {
    kernelName: _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["MirrorPad"],
    backendName: 'webgl',
    kernelFunc: mirrorPadKernelFunc,
};
//# sourceMappingURL=MirrorPad.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Multiply.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Multiply.js ***!
  \******************************************************************************/
/*! exports provided: multiply, multiplyConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyConfig", function() { return multiplyConfig; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _binaryop_complex_gpu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../binaryop_complex_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/binaryop_complex_gpu.js");
/* harmony import */ var _binaryop_gpu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../binaryop_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/binaryop_gpu.js");
/* harmony import */ var _binaryop_packed_gpu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../binaryop_packed_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/binaryop_packed_gpu.js");
/* harmony import */ var _kernel_utils_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../kernel_utils/shared */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernel_utils/shared.js");
/* harmony import */ var _Complex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Complex */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Complex.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */







const MUL = 'return a * b;';
function multiply(args) {
    const { inputs, backend } = args;
    const { a, b } = inputs;
    const dtype = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["backend_util"].upcastType(a.dtype, b.dtype);
    if (a.dtype === 'complex64') {
        const aData = backend.texData.get(a.dataId);
        const bData = backend.texData.get(b.dataId);
        const realProgram = new _binaryop_complex_gpu__WEBPACK_IMPORTED_MODULE_1__["BinaryOpComplexProgram"](_binaryop_complex_gpu__WEBPACK_IMPORTED_MODULE_1__["COMPLEX_MULTIPLY"].REAL, a.shape, b.shape);
        const imagProgram = new _binaryop_complex_gpu__WEBPACK_IMPORTED_MODULE_1__["BinaryOpComplexProgram"](_binaryop_complex_gpu__WEBPACK_IMPORTED_MODULE_1__["COMPLEX_MULTIPLY"].IMAG, a.shape, b.shape);
        const inputs = [
            {
                dataId: aData.complexTensorInfos.real.dataId,
                dtype: aData.complexTensorInfos.real.dtype,
                shape: a.shape
            },
            {
                dataId: aData.complexTensorInfos.imag.dataId,
                dtype: aData.complexTensorInfos.imag.dtype,
                shape: a.shape
            },
            {
                dataId: bData.complexTensorInfos.real.dataId,
                dtype: bData.complexTensorInfos.real.dtype,
                shape: b.shape
            },
            {
                dataId: bData.complexTensorInfos.imag.dataId,
                dtype: bData.complexTensorInfos.imag.dtype,
                shape: b.shape
            }
        ];
        const realPart = backend.runWebGLProgram(realProgram, inputs, 'float32');
        const imagPart = backend.runWebGLProgram(imagProgram, inputs, 'float32');
        const complexOutput = Object(_Complex__WEBPACK_IMPORTED_MODULE_5__["complex"])({ inputs: { real: realPart, imag: imagPart }, backend });
        backend.disposeIntermediateTensorInfo(realPart);
        backend.disposeIntermediateTensorInfo(imagPart);
        // TODO(annxingyuan): CPU forwarding for complex inputs.
        return complexOutput;
    }
    if (backend.shouldExecuteOnCPU([a, b])) {
        const aData = backend.texData.get(a.dataId);
        const bData = backend.texData.get(b.dataId);
        const [outValues, outShape] = Object(_kernel_utils_shared__WEBPACK_IMPORTED_MODULE_4__["multiplyImplCPU"])(a.shape, b.shape, aData.values, bData.values, dtype);
        const out = backend.makeTensorInfo(outShape, dtype);
        const outData = backend.texData.get(out.dataId);
        outData.values = outValues;
        return out;
    }
    let program;
    if (Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["env"])().getBool('WEBGL_PACK_BINARY_OPERATIONS')) {
        program = new _binaryop_packed_gpu__WEBPACK_IMPORTED_MODULE_3__["BinaryOpPackedProgram"](MUL, a.shape, b.shape);
    }
    else {
        program = new _binaryop_gpu__WEBPACK_IMPORTED_MODULE_2__["BinaryOpProgram"](MUL, a.shape, b.shape);
    }
    return backend.runWebGLProgram(program, [a, b], dtype);
}
const multiplyConfig = {
    kernelName: _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["Multiply"],
    backendName: 'webgl',
    kernelFunc: multiply
};
//# sourceMappingURL=Multiply.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/NonMaxSuppressionV3.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/NonMaxSuppressionV3.js ***!
  \*****************************************************************************************/
/*! exports provided: nonMaxSuppressionV3Config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nonMaxSuppressionV3Config", function() { return nonMaxSuppressionV3Config; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

const nonMaxSuppressionV3Config = {
    kernelName: _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["NonMaxSuppressionV3"],
    backendName: 'webgl',
    kernelFunc: ({ inputs, backend, attrs }) => {
        _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["backend_util"].warn('tf.nonMaxSuppression() in webgl locks the UI thread. ' +
            'Call tf.nonMaxSuppressionAsync() instead');
        const { boxes, scores } = inputs;
        const { maxOutputSize, iouThreshold, scoreThreshold } = attrs;
        const gpuBackend = backend;
        const boxesVals = gpuBackend.readSync(boxes.dataId);
        const scoresVals = gpuBackend.readSync(scores.dataId);
        const maxOutputSizeVal = maxOutputSize;
        const iouThresholdVal = iouThreshold;
        const scoreThresholdVal = scoreThreshold;
        return _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["kernel_impls"].nonMaxSuppressionV3Impl(boxesVals, scoresVals, maxOutputSizeVal, iouThresholdVal, scoreThresholdVal);
    }
};
//# sourceMappingURL=NonMaxSuppressionV3.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/NonMaxSuppressionV4.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/NonMaxSuppressionV4.js ***!
  \*****************************************************************************************/
/*! exports provided: nonMaxSuppressionV4Config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nonMaxSuppressionV4Config", function() { return nonMaxSuppressionV4Config; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

const nonMaxSuppressionV4Impl = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["kernel_impls"].nonMaxSuppressionV4Impl;
const nonMaxSuppressionV4Config = {
    kernelName: _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["NonMaxSuppressionV4"],
    backendName: 'webgl',
    kernelFunc: ({ inputs, backend, attrs }) => {
        _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["backend_util"].warn('tf.nonMaxSuppression() in webgl locks the UI thread. ' +
            'Call tf.nonMaxSuppressionAsync() instead');
        const { boxes, scores } = inputs;
        const { maxOutputSize, iouThreshold, scoreThreshold, padToMaxOutputSize } = attrs;
        const gpuBackend = backend;
        const boxesVals = gpuBackend.readSync(boxes.dataId);
        const scoresVals = gpuBackend.readSync(scores.dataId);
        const { selectedIndices, validOutputs } = nonMaxSuppressionV4Impl(boxesVals, scoresVals, maxOutputSize, iouThreshold, scoreThreshold, padToMaxOutputSize);
        return [selectedIndices, validOutputs];
    }
};
//# sourceMappingURL=NonMaxSuppressionV4.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/NonMaxSuppressionV5.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/NonMaxSuppressionV5.js ***!
  \*****************************************************************************************/
/*! exports provided: nonMaxSuppressionV5Config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nonMaxSuppressionV5Config", function() { return nonMaxSuppressionV5Config; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */


const nonMaxSuppressionV5Impl = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["kernel_impls"].nonMaxSuppressionV5Impl;
const nonMaxSuppressionV5Config = {
    kernelName: _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["NonMaxSuppressionV5"],
    backendName: 'webgl',
    kernelFunc: ({ inputs, backend, attrs }) => {
        _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["backend_util"].warn('tf.nonMaxSuppression() in webgl locks the UI thread. ' +
            'Call tf.nonMaxSuppressionAsync() instead');
        const { boxes, scores } = inputs;
        const { maxOutputSize, iouThreshold, scoreThreshold, softNmsSigma } = attrs;
        const gpuBackend = backend;
        const boxesVals = gpuBackend.readSync(boxes.dataId);
        const scoresVals = gpuBackend.readSync(scores.dataId);
        const maxOutputSizeVal = maxOutputSize;
        const iouThresholdVal = iouThreshold;
        const scoreThresholdVal = scoreThreshold;
        const softNmsSigmaVal = softNmsSigma;
        const { selectedIndices, selectedScores } = nonMaxSuppressionV5Impl(boxesVals, scoresVals, maxOutputSizeVal, iouThresholdVal, scoreThresholdVal, softNmsSigmaVal);
        return [selectedIndices, selectedScores];
    }
};
//# sourceMappingURL=NonMaxSuppressionV5.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/NotEqual.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/NotEqual.js ***!
  \******************************************************************************/
/*! exports provided: notEqual, notEqualConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notEqual", function() { return notEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notEqualConfig", function() { return notEqualConfig; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _kernel_utils_kernel_funcs_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../kernel_utils/kernel_funcs_utils */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernel_utils/kernel_funcs_utils.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */


const NOT_EQUAL = `return float(a != b);`;
const notEqual = Object(_kernel_utils_kernel_funcs_utils__WEBPACK_IMPORTED_MODULE_1__["binaryKernelFunc"])({ opSnippet: NOT_EQUAL, dtype: 'bool' });
const notEqualConfig = {
    kernelName: _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["NotEqual"],
    backendName: 'webgl',
    kernelFunc: notEqual,
};
//# sourceMappingURL=NotEqual.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Real.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Real.js ***!
  \**************************************************************************/
/*! exports provided: real, realConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "real", function() { return real; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "realConfig", function() { return realConfig; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _Identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Identity */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Identity.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */


function real(args) {
    const { inputs, backend } = args;
    const { input } = inputs;
    const inputData = backend.texData.get(input.dataId);
    return Object(_Identity__WEBPACK_IMPORTED_MODULE_1__["identity"])({ inputs: { x: inputData.complexTensorInfos.real }, backend });
}
const realConfig = {
    kernelName: _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["Real"],
    backendName: 'webgl',
    kernelFunc: real
};
//# sourceMappingURL=Real.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Reshape.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Reshape.js ***!
  \*****************************************************************************/
/*! exports provided: reshape, reshapeConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reshape", function() { return reshape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reshapeConfig", function() { return reshapeConfig; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _kernel_utils_reshape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../kernel_utils/reshape */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernel_utils/reshape.js");
/* harmony import */ var _webgl_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../webgl_util */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/webgl_util.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */



function reshape(args) {
    const { inputs, backend, attrs } = args;
    const { x } = inputs;
    const { shape } = attrs;
    const webglBackend = backend;
    const xSize = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].sizeFromShape(x.shape);
    const $shape = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].inferFromImplicitShape(shape, xSize);
    const $xSize = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].sizeFromShape($shape);
    _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].assert(xSize === $xSize, () => `The new shape (${$shape}) has ${$xSize} elements and the old ` +
        `shape (${x.shape}) has ${xSize} elements. The new shape and old ` +
        `shape must have the same number of elements.`);
    const xTexData = webglBackend.texData.get(x.dataId);
    if (xTexData.isPacked && !Object(_webgl_util__WEBPACK_IMPORTED_MODULE_2__["isReshapeFree"])(x.shape, $shape) &&
        !(xTexData.texture !== null && Object(_webgl_util__WEBPACK_IMPORTED_MODULE_2__["isReshapeFree"])(xTexData.shape, $shape))) {
        return Object(_kernel_utils_reshape__WEBPACK_IMPORTED_MODULE_1__["packedReshape"])(x, $shape, webglBackend);
    }
    webglBackend.incRef(x.dataId);
    return { dataId: x.dataId, shape: $shape, dtype: x.dtype };
}
const reshapeConfig = {
    kernelName: _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["Reshape"],
    backendName: 'webgl',
    kernelFunc: reshape
};
//# sourceMappingURL=Reshape.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/RotateWithOffset.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/RotateWithOffset.js ***!
  \**************************************************************************************/
/*! exports provided: rotateWithOffsetConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateWithOffsetConfig", function() { return rotateWithOffsetConfig; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _rotate_gpu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rotate_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/rotate_gpu.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */


const rotateWithOffsetConfig = {
    kernelName: _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["RotateWithOffset"],
    backendName: 'webgl',
    kernelFunc: ({ inputs, attrs, backend }) => {
        const { image } = inputs;
        const { radians, fillValue, center } = attrs;
        const webglBackend = backend;
        const program = new _rotate_gpu__WEBPACK_IMPORTED_MODULE_1__["RotateProgram"](image.shape, radians, fillValue, center);
        const output = webglBackend.runWebGLProgram(program, [image], image.dtype);
        return output;
    }
};
//# sourceMappingURL=RotateWithOffset.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Sin.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Sin.js ***!
  \*************************************************************************/
/*! exports provided: sin, sinConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sin", function() { return sin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sinConfig", function() { return sinConfig; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _kernel_utils_kernel_funcs_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../kernel_utils/kernel_funcs_utils */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernel_utils/kernel_funcs_utils.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */


const SIN = _kernel_utils_kernel_funcs_utils__WEBPACK_IMPORTED_MODULE_1__["CHECK_NAN_SNIPPET_UNARY"] + `
  return sin(x);
`;
const sin = Object(_kernel_utils_kernel_funcs_utils__WEBPACK_IMPORTED_MODULE_1__["unaryKernelFunc"])(SIN);
const sinConfig = {
    kernelName: _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["Sin"],
    backendName: 'webgl',
    kernelFunc: sin,
};
//# sourceMappingURL=Sin.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Square.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Square.js ***!
  \****************************************************************************/
/*! exports provided: square, squareConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "square", function() { return square; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squareConfig", function() { return squareConfig; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _kernel_utils_kernel_funcs_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../kernel_utils/kernel_funcs_utils */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernel_utils/kernel_funcs_utils.js");
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */


const SQUARE = `return x * x;`;
const square = Object(_kernel_utils_kernel_funcs_utils__WEBPACK_IMPORTED_MODULE_1__["unaryKernelFunc"])(SQUARE);
const squareConfig = {
    kernelName: _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["Square"],
    backendName: 'webgl',
    kernelFunc: square,
};
//# sourceMappingURL=Square.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/SquaredDifference.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/SquaredDifference.js ***!
  \***************************************************************************************/
/*! exports provided: squaredDifference, squaredDifferenceConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredDifference", function() { return squaredDifference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredDifferenceConfig", function() { return squaredDifferenceConfig; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _kernel_utils_kernel_funcs_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../kernel_utils/kernel_funcs_utils */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernel_utils/kernel_funcs_utils.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */


const SQUARED_DIFFERENCE = 'return (a - b) * (a - b);';
const squaredDifference = Object(_kernel_utils_kernel_funcs_utils__WEBPACK_IMPORTED_MODULE_1__["binaryKernelFunc"])({ opSnippet: SQUARED_DIFFERENCE, packedOpSnippet: SQUARED_DIFFERENCE });
const squaredDifferenceConfig = {
    kernelName: _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["SquaredDifference"],
    backendName: 'webgl',
    kernelFunc: squaredDifference,
};
//# sourceMappingURL=SquaredDifference.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Sub.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Sub.js ***!
  \*************************************************************************/
/*! exports provided: subKernelFunc, subConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subKernelFunc", function() { return subKernelFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subConfig", function() { return subConfig; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _kernel_utils_kernel_funcs_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../kernel_utils/kernel_funcs_utils */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernel_utils/kernel_funcs_utils.js");
/* harmony import */ var _kernel_utils_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../kernel_utils/shared */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernel_utils/shared.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */



const SUB = 'return a - b;';
const subKernelFunc = Object(_kernel_utils_kernel_funcs_utils__WEBPACK_IMPORTED_MODULE_1__["binaryKernelFunc"])({
    opSnippet: SUB,
    packedOpSnippet: SUB,
    supportsComplex: true,
    cpuKernelImpl: _kernel_utils_shared__WEBPACK_IMPORTED_MODULE_2__["subImplCPU"]
});
const subConfig = {
    kernelName: _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["Sub"],
    backendName: 'webgl',
    kernelFunc: subKernelFunc
};
//# sourceMappingURL=Sub.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Tan.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Tan.js ***!
  \*************************************************************************/
/*! exports provided: tan, tanConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tan", function() { return tan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tanConfig", function() { return tanConfig; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _kernel_utils_kernel_funcs_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../kernel_utils/kernel_funcs_utils */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernel_utils/kernel_funcs_utils.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */


const TAN = `return tan(x);`;
const tan = Object(_kernel_utils_kernel_funcs_utils__WEBPACK_IMPORTED_MODULE_1__["unaryKernelFunc"])(TAN);
const tanConfig = {
    kernelName: _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["Tan"],
    backendName: 'webgl',
    kernelFunc: tan,
};
//# sourceMappingURL=Tan.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Transpose.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Transpose.js ***!
  \*******************************************************************************/
/*! exports provided: transposeConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transposeConfig", function() { return transposeConfig; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _Transpose_impl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Transpose_impl */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Transpose_impl.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */



const transposeConfig = {
    kernelName: _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["Transpose"],
    backendName: 'webgl',
    kernelFunc: ({ inputs, attrs, backend }) => {
        const { x } = inputs;
        const { perm } = attrs;
        const webglBackend = backend;
        const xRank = x.shape.length;
        const newShape = new Array(xRank);
        for (let i = 0; i < newShape.length; i++) {
            newShape[i] = x.shape[perm[i]];
        }
        let out;
        if (webglBackend.shouldExecuteOnCPU([x])) {
            const xTexData = webglBackend.texData.get(x.dataId);
            const values = xTexData.values;
            const outValues = Object(_Transpose_impl__WEBPACK_IMPORTED_MODULE_1__["transposeImplCPU"])(values, x.shape, x.dtype, perm, newShape);
            out = webglBackend.makeTensorInfo(newShape, x.dtype);
            const outData = webglBackend.texData.get(out.dataId);
            outData.values = outValues;
        }
        else {
            out = Object(_Transpose_impl__WEBPACK_IMPORTED_MODULE_1__["transposeImpl"])(x, perm, webglBackend);
        }
        return out;
    }
};
//# sourceMappingURL=Transpose.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Transpose_impl.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Transpose_impl.js ***!
  \************************************************************************************/
/*! exports provided: transposeImpl, transposeImplCPU */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transposeImpl", function() { return transposeImpl; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _kernel_utils_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../kernel_utils/shared */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernel_utils/shared.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transposeImplCPU", function() { return _kernel_utils_shared__WEBPACK_IMPORTED_MODULE_1__["transposeImplCPU"]; });

/* harmony import */ var _transpose_gpu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../transpose_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/transpose_gpu.js");
/* harmony import */ var _transpose_packed_gpu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../transpose_packed_gpu */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/transpose_packed_gpu.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */




function transposeImpl(x, perm, backend) {
    const program = Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["env"])().getBool('WEBGL_PACK_ARRAY_OPERATIONS') ?
        new _transpose_packed_gpu__WEBPACK_IMPORTED_MODULE_3__["TransposePackedProgram"](x.shape, perm) :
        new _transpose_gpu__WEBPACK_IMPORTED_MODULE_2__["TransposeProgram"](x.shape, perm);
    return backend.runWebGLProgram(program, [x], x.dtype);
}

//# sourceMappingURL=Transpose_impl.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Unique.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Unique.js ***!
  \****************************************************************************/
/*! exports provided: unique, uniqueConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unique", function() { return unique; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueConfig", function() { return uniqueConfig; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _kernel_utils_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../kernel_utils/shared */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernel_utils/shared.js");
/* harmony import */ var _webgl_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../webgl_util */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/webgl_util.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */



function unique(args) {
    const { inputs, attrs, backend } = args;
    const { axis } = attrs;
    const { x } = inputs;
    Object(_webgl_util__WEBPACK_IMPORTED_MODULE_2__["assertNotComplex"])(x, 'unique');
    // For now, always forward calculation to the CPU backend.
    console.warn('WARNING: ', 'UI might be locked temporarily as data is being downloaded');
    const values = backend.readSync(x.dataId);
    const { outputValues, outputShape, indices } = Object(_kernel_utils_shared__WEBPACK_IMPORTED_MODULE_1__["uniqueImplCPU"])(values, axis, x.shape, x.dtype);
    return [
        backend.makeTensorInfo(outputShape, x.dtype, outputValues),
        backend.makeTensorInfo([indices.length], 'int32', indices),
    ];
}
const uniqueConfig = {
    kernelName: _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["Unique"],
    backendName: 'webgl',
    kernelFunc: unique,
};
//# sourceMappingURL=Unique.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/lrn_gpu.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/lrn_gpu.js ***!
  \*********************************************************************/
/*! exports provided: LRNProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LRNProgram", function() { return LRNProgram; });
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class LRNProgram {
    constructor(xShape, radius, bias, alpha, beta) {
        this.variableNames = ['x'];
        this.outputShape = [];
        const rad = radius;
        const maxD = xShape[3] - 1;
        this.outputShape = xShape;
        // optimize pow(bias + alpha * sum, -beta)
        // src: https://github.com/tensorflow/tensorflow/..
        // blob/26033a1644a9c4a5fbe3170ab2e864b6a4ccd4ca/..
        // tensorflow/core/kernels/mkl_lrn_op.cc#L320
        let powOperator;
        const basis = `float(${bias}) + float(${alpha}) * sum`;
        if (beta === 0.5) {
            powOperator = `inversesqrt(${basis})`;
        }
        else if (beta === 1.0) {
            powOperator = `1.0/(${basis})`;
        }
        else {
            powOperator = `exp(log(${basis}) * float(-${beta}));`;
        }
        this.userCode = `
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -${rad}; j <= ${rad}; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  ${maxD}) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * ${powOperator};
        setOutput(val);
      }
    `;
    }
}
//# sourceMappingURL=lrn_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/lrn_grad_gpu.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/lrn_grad_gpu.js ***!
  \**************************************************************************/
/*! exports provided: LRNGradProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LRNGradProgram", function() { return LRNGradProgram; });
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class LRNGradProgram {
    constructor(inputShape, depthRadius, bias, alpha, beta) {
        this.variableNames = ['inputImage', 'outputImage', 'dy'];
        this.outputShape = [];
        this.outputShape = inputShape;
        this.depth = inputShape[3];
        this.depthRadius = depthRadius;
        this.bias = bias;
        this.alpha = alpha;
        this.beta = beta;
        this.userCode = `
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < ${this.depth}; ++d) {
          int depthBegin = int(max(0.0, float(d - ${depthRadius})));
          int depthEnd = int(min(float(${this.depth}),
              float(d + ${depthRadius} + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = ${this.depth};

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(${alpha}) * norm + float(${bias});

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(${alpha})
                * float(${beta})
                * getInputImage(b ,r ,c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * ${beta});
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `;
    }
}
//# sourceMappingURL=lrn_grad_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/lrn_packed_gpu.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/lrn_packed_gpu.js ***!
  \****************************************************************************/
/*! exports provided: LRNPackedProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LRNPackedProgram", function() { return LRNPackedProgram; });
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class LRNPackedProgram {
    constructor(xShape, radius, bias, alpha, beta) {
        this.variableNames = ['x'];
        this.outputShape = [];
        this.packedInputs = true;
        this.packedOutput = true;
        const rad = radius;
        const maxD = xShape[3] - 1;
        this.outputShape = xShape;
        // optimize pow(bias + alpha * sum, -beta)
        // src: https://github.com/tensorflow/tensorflow/..
        // blob/26033a1644a9c4a5fbe3170ab2e864b6a4ccd4ca/..
        // tensorflow/core/kernels/mkl_lrn_op.cc#L320
        let powOperator;
        const basis = `float(${bias}) + float(${alpha}) * sum`;
        if (beta === 0.5) {
            powOperator = `inversesqrt(${basis})`;
        }
        else if (beta === 1.0) {
            powOperator = `1.0/(${basis})`;
        }
        else {
            powOperator = `exp(log(${basis}) * float(-${beta}));`;
        }
        this.userCode = `
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < ${this.outputShape[3]};
        bool hasNextRow = c < ${this.outputShape[2]};

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - ${rad};
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - ${rad}; j <= ${rad}; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(${maxD}));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * ${powOperator};
        setOutput(result);
      }
    `;
    }
}
//# sourceMappingURL=lrn_packed_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/max_pool_backprop_gpu.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/max_pool_backprop_gpu.js ***!
  \***********************************************************************************/
/*! exports provided: MaxPool2DBackpropProgram, MaxPool3DBackpropProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaxPool2DBackpropProgram", function() { return MaxPool2DBackpropProgram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaxPool3DBackpropProgram", function() { return MaxPool3DBackpropProgram; });
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class MaxPool2DBackpropProgram {
    constructor(convInfo) {
        this.variableNames = ['dy', 'maxPos'];
        this.outputShape = convInfo.inShape;
        const strideHeight = convInfo.strideHeight;
        const strideWidth = convInfo.strideWidth;
        const dilationHeight = convInfo.dilationHeight;
        const effectiveFilterHeight = convInfo.effectiveFilterHeight;
        const effectiveFilterWidth = convInfo.effectiveFilterWidth;
        const padTop = effectiveFilterHeight - 1 - convInfo.padInfo.top;
        const padLeft = effectiveFilterWidth - 1 - convInfo.padInfo.left;
        const lastIndex = effectiveFilterHeight * effectiveFilterWidth - 1;
        this.userCode = `
      const ivec2 pads = ivec2(${padTop}, ${padLeft});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${effectiveFilterHeight};
          wR += ${dilationHeight}) {
          float dyR = float(dyRCorner + wR) / ${strideHeight}.0;

          if (dyR < 0.0 || dyR >= ${convInfo.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${effectiveFilterWidth}; wC++) {
            float dyC = float(dyCCorner + wC) / ${strideWidth}.0;

            if (dyC < 0.0 || dyC >= ${convInfo.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = ${lastIndex} - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * ${effectiveFilterWidth} + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `;
    }
}
class MaxPool3DBackpropProgram {
    constructor(convInfo) {
        this.variableNames = ['dy', 'maxPos'];
        this.outputShape = convInfo.inShape;
        const strideDepth = convInfo.strideDepth;
        const strideHeight = convInfo.strideHeight;
        const strideWidth = convInfo.strideWidth;
        const dilationDepth = convInfo.dilationDepth;
        const dilationHeight = convInfo.dilationHeight;
        const dilationWidth = convInfo.dilationWidth;
        const effectiveFilterDepth = convInfo.effectiveFilterDepth;
        const effectiveFilterHeight = convInfo.effectiveFilterHeight;
        const effectiveFilterWidth = convInfo.effectiveFilterWidth;
        const padFront = effectiveFilterDepth - 1 - convInfo.padInfo.front;
        const padTop = effectiveFilterHeight - 1 - convInfo.padInfo.top;
        const padLeft = effectiveFilterWidth - 1 - convInfo.padInfo.left;
        const lastIndex = effectiveFilterDepth * effectiveFilterHeight * effectiveFilterWidth - 1;
        this.userCode = `
      const ivec3 pads = ivec3(${padFront}, ${padTop}, ${padLeft});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${effectiveFilterDepth};
           wD += ${dilationDepth}) {
          float dyD = float(dyDCorner + wD) / ${strideDepth}.0;

          if (dyD < 0.0 || dyD >= ${convInfo.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${effectiveFilterHeight};
              wR += ${dilationHeight}) {
            float dyR = float(dyRCorner + wR) / ${strideHeight}.0;

            if (dyR < 0.0 || dyR >= ${convInfo.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${effectiveFilterWidth};
                wC += ${dilationWidth}) {
              float dyC = float(dyCCorner + wC) / ${strideWidth}.0;

              if (dyC < 0.0 || dyC >= ${convInfo.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = ${lastIndex} -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * ${effectiveFilterHeight} * ${effectiveFilterWidth} +
                  wR * ${effectiveFilterWidth} + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `;
    }
}
//# sourceMappingURL=max_pool_backprop_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/mean_gpu.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/mean_gpu.js ***!
  \**********************************************************************/
/*! exports provided: MeanProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeanProgram", function() { return MeanProgram; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

class MeanProgram {
    constructor(reduceInfo, divisor) {
        this.variableNames = ['x'];
        const { windowSize, batchSize, inSize, outSize } = reduceInfo;
        this.outputShape = [batchSize, outSize];
        const windowSizeNearestVec4 = Math.floor(windowSize / 4) * 4;
        const windowSizeVec4Remainder = windowSize % 4;
        let updateSnippet = `sumValue += dot(values, ones);`;
        if (divisor != null) {
            const denominator = 1 / divisor;
            updateSnippet = `sumValue += dot(values * ${_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].isInt(denominator) ? denominator.toPrecision(2) :
                denominator}, ones);`;
        }
        let checkOutOfBounds = '';
        if (inSize % windowSize > 0) {
            checkOutOfBounds = `
        if (inIdx < 0 || inIdx >= ${inSize}) {
          return 0.0;
        }
      `;
        }
        this.userCode = `
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${checkOutOfBounds}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${windowSize};

        float sumValue = 0.0;

        for (int i = 0; i < ${windowSizeNearestVec4}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${updateSnippet}
        }

        int inIdx = inOffset + ${windowSizeNearestVec4};
        if (${windowSizeVec4Remainder === 1}) {
          vec4 values = vec4(getValue(batch, inIdx), 0.0, 0.0, 0.0);

          ${updateSnippet}
        } else if (${windowSizeVec4Remainder === 2}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1), 0.0, 0.0);

          ${updateSnippet}
        } else if (${windowSizeVec4Remainder === 3}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2), 0.0);

          ${updateSnippet}
        }
        setOutput(sumValue);
      }
    `;
    }
}
//# sourceMappingURL=mean_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/mirror_pad_gpu.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/mirror_pad_gpu.js ***!
  \****************************************************************************/
/*! exports provided: MirrorPadProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MirrorPadProgram", function() { return MirrorPadProgram; });
/* harmony import */ var _shader_compiler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shader_compiler */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/shader_compiler.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

class MirrorPadProgram {
    constructor(xShape, paddings, mode) {
        this.variableNames = ['x'];
        this.outputShape = paddings.map((p, i) => p[0] /* beforePad */ + xShape[i] + p[1] /* afterPad */);
        const rank = xShape.length;
        const dtype = Object(_shader_compiler__WEBPACK_IMPORTED_MODULE_0__["getCoordsDataType"])(rank);
        const start = paddings.map(p => p[0]).join(',');
        const end = paddings.map((p, i) => p[0] + xShape[i]).join(',');
        const unpackedCoords = ['coords[0]', 'coords[1]', 'coords[2]', 'coords[3]'].slice(0, rank);
        const offset = mode === 'reflect' ? 0 : 1;
        if (rank === 1) {
            this.userCode = `
        int start = ${start};
        int end = ${end};

        void main() {
          int outC = getOutputCoords();
          if (outC < start) {
            outC = start * 2 - outC - ${offset};
          } else if(outC >= end) {
            outC = (end - 1) * 2 - outC + ${offset};
          }
          setOutput(getX(outC - start));
        }
      `;
            return;
        }
        this.userCode = `
      ${dtype} start = ${dtype}(${start});
      ${dtype} end = ${dtype}(${end});

      void main() {
        ${dtype} outC = getOutputCoords();
        for (int i = 0; i < ${rank}; i++) {
          if (outC[i] < start[i]) {
            outC[i] = start[i] * 2 - outC[i] - ${offset};
          } else if(outC[i] >= end[i]) {
            outC[i] = (end[i] - 1) * 2 - outC[i] + ${offset};
          }
        }
        ${dtype} coords = outC - start;
        setOutput(getX(${unpackedCoords}));
      }
    `;
    }
}
//# sourceMappingURL=mirror_pad_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/mirror_pad_packed_gpu.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/mirror_pad_packed_gpu.js ***!
  \***********************************************************************************/
/*! exports provided: MirrorPadPackedProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MirrorPadPackedProgram", function() { return MirrorPadPackedProgram; });
/* harmony import */ var _packing_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./packing_util */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/packing_util.js");
/* harmony import */ var _shader_compiler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shader_compiler */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/shader_compiler.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */


/**
 * Example shader code for
 * `mirrorPad(tf.tensor1d([1, 2, 3], 'int32'), [[2, 2]], 'reflect')`
 * ```
 *    const int start = int(2);
 *    const int end = int(5);
 *
 *    void main() {
 *       int outputLoc = getOutputCoords();
 *       vec4 result = vec4(0.);
 *
 *       int rc = outputLoc;
 *
 *       int source = rc;
 *       if (source < start) {
 *         source = start * 2 - source - 0;
 *       } else if (source >= end) {
 *         source = (end - 1) * 2 - source + 0;
 *       }
 *       source -= start;
 *
 *       result[0] = getChannel(getX(source), source);
 *       rc += 1;
 *       if(rc < 6) {
 *          int source = rc;
 *          if (source < start) {
 *            source = start * 2 - source - 0;
 *          } else if (source >= end) {
 *            source = (end - 1) * 2 - source + 0;
 *          }
 *          source -= start;
 *
 *         result[1] = getChannel(getX(source), source);
 *       }
 *
 *       setOutput(result);
 *     }
 * ```
 */
class MirrorPadPackedProgram {
    constructor(xShape, paddings, mode) {
        this.variableNames = ['x'];
        this.packedInputs = true;
        this.packedOutput = true;
        this.outputShape = paddings.map((p, i) => p[0] /* beforePad */ + xShape[i] + p[1] /* afterPad */);
        const rank = xShape.length;
        const dtype = Object(_shader_compiler__WEBPACK_IMPORTED_MODULE_1__["getCoordsDataType"])(rank);
        const start = paddings.map(p => p[0]).join(',');
        const end = paddings.map((p, i) => p[0] + xShape[i]).join(',');
        const coords = Object(_packing_util__WEBPACK_IMPORTED_MODULE_0__["getChannels"])('rc', rank);
        const source = Object(_packing_util__WEBPACK_IMPORTED_MODULE_0__["getChannels"])('source', rank);
        const cLimit = `${coords[rank - 1]} < ${this.outputShape[rank - 1]}`;
        const innerDims = rank === 1 ? 'source' : `vec2(${source.slice(-2).join()})`;
        const offset = mode === 'reflect' ? 0 : 1;
        let mainLoop = '';
        if (rank === 1) {
            const padSetup = `
        ${dtype} source = rc;
        if (source < start) {
          source = start * 2 - source - ${offset};
        } else if (source >= end) {
          source = (end - 1) * 2 - source + ${offset};
        }
        source -= start;
      `;
            mainLoop = `
        ${dtype} rc = outputLoc;
        ${padSetup}
        result[0] = getChannel(getX(${source.join()}), ${innerDims});
        ${coords[rank - 1]} += 1;
        if(${cLimit}) {
          ${padSetup}
          result[1] = getChannel(getX(${source.join()}), ${innerDims});
        }
      `;
        }
        else {
            const padSetup = `
        ${dtype} source = rc;
        ${dtype} lt = ${dtype}(lessThan(source, start));
        ${dtype} gte = ${dtype}(greaterThanEqual(source, end));
        ${dtype} orig = 1 - (lt + gte);
        source = orig * source +
                lt * (start * 2 - source - ${offset}) +
                gte * ((end - 1) * 2 - source + ${offset});
        source -= start;
      `;
            mainLoop = `
        ${dtype} rc = outputLoc;
        ${padSetup}
        result[0] = getChannel(getX(${source.join()}), ${innerDims});
        ${coords[rank - 1]} += 1;
        if(${cLimit}) {
          ${padSetup}
          result[1] = getChannel(getX(${source.join()}), ${innerDims});
        }
        rc = outputLoc;
        ${coords[rank - 2]} += 1;
        if(${coords[rank - 2]} < ${this.outputShape[rank - 2]}) {
          ${padSetup}
          result[2] = getChannel(getX(${source.join()}), ${innerDims});
          ${coords[rank - 1]} += 1;
          if(${cLimit}) {
            ${padSetup}
            result[3] = getChannel(getX(${source.join()}), ${innerDims});
          }
        }
      `;
        }
        this.userCode = `
      const ${dtype} start = ${dtype}(${start});
      const ${dtype} end = ${dtype}(${end});

      void main() {
        ${dtype} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${mainLoop}
        setOutput(result);
      }
    `;
    }
}
//# sourceMappingURL=mirror_pad_packed_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/mulmat_packed_gpu.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/mulmat_packed_gpu.js ***!
  \*******************************************************************************/
/*! exports provided: MatMulPackedProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatMulPackedProgram", function() { return MatMulPackedProgram; });
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class MatMulPackedProgram {
    constructor(aShape, bShape, outputShape, transposeA = false, transposeB = false, addBias = false, activation = null, hasPreluActivation = false) {
        this.variableNames = ['matrixA', 'matrixB'];
        this.packedInputs = true;
        this.packedOutput = true;
        this.outputShape = outputShape;
        const sharedDim = transposeA ? aShape[1] : aShape[2];
        const sharedDimensionPacked = Math.ceil(sharedDim / 2);
        const aSample = transposeA ? 'i * 2, rc.y' : 'rc.y, i * 2';
        const bSample = transposeB ? 'rc.z, i * 2' : 'i * 2, rc.z';
        const aSwizzle = transposeA ? ['a.xxyy', 'a.zzww'] : ['a.xxzz', 'a.yyww'];
        const bSwizzle = transposeB ? ['b.xzxz', 'b.ywyw'] : ['b.xyxy', 'b.zwzw'];
        let activationSnippet = '', applyActivationSnippet = '';
        if (activation) {
            if (hasPreluActivation) {
                activationSnippet = `vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${activation}
        }`;
            }
            else {
                activationSnippet = `vec4 activation(vec4 x) {
          ${activation}
        }`;
            }
            applyActivationSnippet = `result = activation(result);`;
        }
        const addBiasSnippet = addBias ? 'result += getBiasAtOutCoords();' : '';
        if (addBias) {
            this.variableNames.push('bias');
        }
        if (hasPreluActivation) {
            this.variableNames.push('preluActivationWeights');
        }
        let batchASnippet = 'rc.x';
        let batchBSnippet = 'rc.x';
        if (aShape[0] < bShape[0]) {
            batchASnippet = `int(min(float(rc.x), ${aShape[0] - 1}.))`;
        }
        else if (bShape[0] < aShape[0]) {
            batchBSnippet = `int(min(float(rc.x), ${bShape[0] - 1}.))`;
        }
        this.userCode = `
      ${activationSnippet}

      const float sharedDimension = ${sharedDimensionPacked}.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        for (int i = 0; i < ${sharedDimensionPacked}; i++) {
          int batchA = ${batchASnippet};
          int batchB = ${batchBSnippet};
          vec4 a = getMatrixA(batchA, ${aSample});
          vec4 b = getMatrixB(batchB, ${bSample});

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (${aSwizzle[0]} * ${bSwizzle[0]});
          result += (${aSwizzle[1]} * ${bSwizzle[1]});
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        ${addBiasSnippet}

        ${applyActivationSnippet}

        setOutput(result);
      }
    `;
    }
}
//# sourceMappingURL=mulmat_packed_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/multinomial_gpu.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/multinomial_gpu.js ***!
  \*****************************************************************************/
/*! exports provided: MultinomialProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultinomialProgram", function() { return MultinomialProgram; });
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class MultinomialProgram {
    constructor(batchSize, numOutcomes, numSamples) {
        this.variableNames = ['probs'];
        this.outputShape = [batchSize, numSamples];
        this.userCode = `
      uniform float seed;

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < ${numOutcomes - 1}; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(${numOutcomes - 1}));
      }
    `;
    }
    getCustomSetupFunc(seed) {
        return (gpgpu, webGLProgram) => {
            if (this.seedLoc == null) {
                this.seedLoc = gpgpu.getUniformLocation(webGLProgram, 'seed');
            }
            gpgpu.gl.uniform1f(this.seedLoc, seed);
        };
    }
}
//# sourceMappingURL=multinomial_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/onehot_gpu.js":
/*!************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/onehot_gpu.js ***!
  \************************************************************************/
/*! exports provided: OneHotProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneHotProgram", function() { return OneHotProgram; });
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class OneHotProgram {
    constructor(numIndices, depth, onValue, offValue) {
        this.variableNames = ['indices'];
        this.outputShape = [numIndices, depth];
        this.userCode = `
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(${offValue}), float(${onValue}),
                      float(index == coords.y)));
      }
    `;
    }
}
//# sourceMappingURL=onehot_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/pack_gpu.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/pack_gpu.js ***!
  \**********************************************************************/
/*! exports provided: PackProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackProgram", function() { return PackProgram; });
/* harmony import */ var _packing_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./packing_util */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/packing_util.js");
/* harmony import */ var _shader_compiler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shader_compiler */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/shader_compiler.js");
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */


class PackProgram {
    constructor(outputShape) {
        this.variableNames = ['A'];
        this.packedInputs = false;
        this.packedOutput = true;
        // Only input / output 3D tensors.
        this.outputShape = outputShape;
        const rank = outputShape.length;
        if (rank === 0) {
            this.userCode = `
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;
        }
        else {
            const channels = Object(_packing_util__WEBPACK_IMPORTED_MODULE_0__["getChannels"])('rc', rank);
            const dtype = Object(_shader_compiler__WEBPACK_IMPORTED_MODULE_1__["getCoordsDataType"])(rank);
            const outOfBoundsCondition = getOutOfBoundsCondition(rank, outputShape, channels);
            const setup = getSetup(rank, outputShape[outputShape.length - 1], outputShape[outputShape.length - 2], channels);
            const output = getOutput(outputShape, channels);
            this.userCode = `
        void main() {
          ${dtype} rc = getOutputCoords();

          if(${outOfBoundsCondition}) {
            setOutput(vec4(0));
          } else {
            ${setup}

            setOutput(vec4(${output}));
          }
        }
      `;
        }
    }
}
function getSourceCoordsArr(rank, dims) {
    const coords = [];
    for (let row = 0; row <= 1; row++) {
        for (let col = 0; col <= 1; col++) {
            let coord = `${row === 0 ? 'r' : 'rp1'}, ${col === 0 ? 'c' : 'cp1'}`;
            for (let d = 2; d < rank; d++) {
                coord = `${dims[dims.length - 1 - d]},` + coord;
            }
            coords.push(coord);
        }
    }
    return coords;
}
function getOutOfBoundsCondition(rank, shape, dims) {
    if (rank === 1) {
        return `rc > ${shape[0]}`;
    }
    let cond = '';
    for (let i = rank - 2; i < rank; i++) {
        cond += `${dims[i]} >= ${shape[i]}`;
        if (i < rank - 1) {
            cond += '||';
        }
    }
    return cond;
}
function getSetup(rank, cols, rows, dims) {
    if (rank === 1) {
        return '';
    }
    const innerDims = dims.slice(-2);
    return `
    int r = ${innerDims[0]};
    int c = ${innerDims[1]};
    int rp1 = r + 1;
    int cp1 = c + 1;

    bool cEdge = cp1 >= ${cols};
    bool rEdge = rp1 >= ${rows};
  `;
}
function getOutput(shape, dims) {
    const rank = shape.length;
    const sourceCoords = getSourceCoordsArr(rank, dims);
    if (rank === 1) {
        return `getA(rc),
            rc + 1 >= ${shape[0]} ? 0. : getA(rc + 1),
            0, 0`;
    }
    return `getA(${sourceCoords[0]}),
          cEdge ? 0. : getA(${sourceCoords[1]}),
          rEdge ? 0. : getA(${sourceCoords[2]}),
          rEdge || cEdge ? 0. : getA(${sourceCoords[3]})`;
}
//# sourceMappingURL=pack_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/packing_util.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/packing_util.js ***!
  \**************************************************************************/
/*! exports provided: getVecChannels, getChannels, getSourceCoords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVecChannels", function() { return getVecChannels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChannels", function() { return getChannels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSourceCoords", function() { return getSourceCoords; });
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function getVecChannels(name, rank) {
    return ['x', 'y', 'z', 'w', 'u', 'v'].slice(0, rank).map(d => `${name}.${d}`);
}
function getChannels(name, rank) {
    if (rank === 1) {
        return [name];
    }
    return getVecChannels(name, rank);
}
function getSourceCoords(rank, dims) {
    if (rank === 1) {
        return 'rc';
    }
    let coords = '';
    for (let i = 0; i < rank; i++) {
        coords += dims[i];
        if (i < rank - 1) {
            coords += ',';
        }
    }
    return coords;
}
//# sourceMappingURL=packing_util.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/pad_gpu.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/pad_gpu.js ***!
  \*********************************************************************/
/*! exports provided: PadProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PadProgram", function() { return PadProgram; });
/* harmony import */ var _shader_compiler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shader_compiler */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/shader_compiler.js");
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

class PadProgram {
    constructor(xShape, paddings, constantValue) {
        this.variableNames = ['x'];
        this.outputShape = paddings.map((p, i) => p[0] /* beforePad */ + xShape[i] + p[1] /* afterPad */);
        const rank = xShape.length;
        const type = Object(_shader_compiler__WEBPACK_IMPORTED_MODULE_0__["getCoordsDataType"])(rank);
        const start = paddings.map(p => p[0]).join(',');
        const end = paddings.map((p, i) => p[0] + xShape[i]).join(',');
        const unpackedCoords = ['coords[0]', 'coords[1]', 'coords[2]', 'coords[3]'].slice(0, rank);
        if (rank === 1) {
            this.userCode = `
        int start = ${start};
        int end = ${end};

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(float(${constantValue}));
          } else {
            setOutput(getX(outC - start));
          }
        }
      `;
            return;
        }
        this.userCode = `
      ${type} start = ${type}(${start});
      ${type} end = ${type}(${end});

      void main() {
        ${type} outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(float(${constantValue}));
        } else {
          ${type} coords = outC - start;
          setOutput(getX(${unpackedCoords}));
        }
      }
    `;
    }
}
//# sourceMappingURL=pad_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/pad_packed_gpu.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/pad_packed_gpu.js ***!
  \****************************************************************************/
/*! exports provided: PadPackedProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PadPackedProgram", function() { return PadPackedProgram; });
/* harmony import */ var _packing_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./packing_util */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/packing_util.js");
/* harmony import */ var _shader_compiler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shader_compiler */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/shader_compiler.js");
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */


class PadPackedProgram {
    constructor(xShape, paddings, constantValue) {
        this.variableNames = ['x'];
        this.packedInputs = true;
        this.packedOutput = true;
        this.outputShape = paddings.map((p, i) => p[0] /* beforePad */ + xShape[i] + p[1] /* afterPad */);
        const rank = xShape.length;
        const dtype = Object(_shader_compiler__WEBPACK_IMPORTED_MODULE_1__["getCoordsDataType"])(rank);
        const start = paddings.map(p => p[0]).join(',');
        const end = paddings.map((p, i) => p[0] + xShape[i]).join(',');
        const coords = Object(_packing_util__WEBPACK_IMPORTED_MODULE_0__["getChannels"])('rc', rank);
        const source = Object(_packing_util__WEBPACK_IMPORTED_MODULE_0__["getChannels"])('source', rank);
        const cLimit = `${coords[rank - 1]} < ${this.outputShape[rank - 1]}`;
        const innerDims = rank === 1 ? 'source' : `vec2(${source.slice(-2).join()})`;
        const componentSetup = [
            `${dtype} rc = outputLoc;`, `${coords[rank - 1]} += 1;
       if(${cLimit}) {
      `,
            rank === 1 ? '' : `}
       rc = outputLoc;
       ${coords[rank - 2]} += 1;
       if(${coords[rank - 2]} < ${this.outputShape[rank - 2]}) {`,
            rank === 1 ? '' : `  ${coords[rank - 1]} += 1;
         if(${cLimit}) {`
        ];
        const paddingArea = rank === 1 ?
            'rc < start || rc >= end' :
            'any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))';
        let mainLoop = '';
        for (let i = 0, j = rank === 1 ? 2 : 4; i < j; i++) {
            mainLoop += `
        ${componentSetup[i]}
        if (${paddingArea}) {
          result[${i}] = float(${constantValue});
        } else {
          ${dtype} source = rc - start;
          result[${i}] = getChannel(getX(${source.join()}), ${innerDims});
        }
      `;
        }
        mainLoop += (rank === 1 ? `} ` : `}}`);
        this.userCode = `
      const ${dtype} start = ${dtype}(${start});
      const ${dtype} end = ${dtype}(${end});

      void main() {
        ${dtype} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${mainLoop}
        setOutput(result);
      }
    `;
    }
}
//# sourceMappingURL=pad_packed_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/pool_gpu.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/pool_gpu.js ***!
  \**********************************************************************/
/*! exports provided: Pool2DProgram, Pool3DProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pool2DProgram", function() { return Pool2DProgram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pool3DProgram", function() { return Pool3DProgram; });
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Pool2DProgram {
    constructor(convInfo, poolType, computePositions, flattenPositions = false, includeBatchInIndex = false) {
        this.variableNames = ['x'];
        if (poolType === 'avg' && computePositions) {
            throw new Error('Cannot compute positions for average pool.');
        }
        const filterWidth = convInfo.filterWidth;
        const strideHeight = convInfo.strideHeight;
        const strideWidth = convInfo.strideWidth;
        const dilationHeight = convInfo.dilationHeight;
        const dilationWidth = convInfo.dilationWidth;
        const effectiveFilterHeight = convInfo.effectiveFilterHeight;
        const effectiveFilterWidth = convInfo.effectiveFilterWidth;
        const padTop = convInfo.padInfo.top;
        const padLeft = convInfo.padInfo.left;
        this.outputShape = convInfo.outShape;
        const isAvgPool = poolType === 'avg';
        const batchFlattenPositionStr = `((batch  * ${convInfo.inHeight} + xR) * ${convInfo.inWidth} + xC) * ${convInfo.inChannels} + d`;
        const flattenPositionStr = `(xR * ${convInfo.inWidth} + xC) * ${convInfo.inChannels} + d`;
        let initializationValue = '0.0';
        if (!isAvgPool) {
            // WebGL on Firefox Linux can't compile 1/0 so we do 1/eps.
            initializationValue = '-1.0 / 1e-20';
        }
        if (computePositions) {
            const compareOp = '>=';
            this.userCode = `
        const ivec2 strides = ivec2(${strideHeight}, ${strideWidth});
        const ivec2 pads = ivec2(${padTop}, ${padLeft});

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < ${effectiveFilterHeight};
              wR += ${dilationHeight}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${convInfo.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${effectiveFilterWidth};
                wC += ${dilationWidth}) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= ${convInfo.inWidth}) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value ${compareOp} currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = ${flattenPositions ? (includeBatchInIndex ? batchFlattenPositionStr :
                flattenPositionStr) :
                `wR * ${effectiveFilterWidth} + wC`};
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;
            return;
        }
        const compareOp = 'max';
        let returnValue = `${poolType}(${poolType}(${poolType}(` +
            'minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])';
        if (poolType === 'avg') {
            returnValue = `avgValue / count`;
        }
        const filterWidthNearestVec4 = Math.floor(filterWidth / 4) * 4;
        const filterWidthVec4Remainder = filterWidth % 4;
        const updateSnippet = `
      if (${isAvgPool}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = ${compareOp}(values, minMaxValue);
      }
    `;
        this.userCode = `
      const ivec2 strides = ivec2(${strideHeight}, ${strideWidth});
      const ivec2 pads = ivec2(${padTop}, ${padLeft});
      const float initializationValue = ${initializationValue};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= ${convInfo.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(${initializationValue});
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < ${effectiveFilterHeight};
            wR += ${dilationHeight}) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= ${convInfo.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${filterWidthNearestVec4}; wC += 4) {
            int xC = xCCorner + wC * ${dilationWidth};

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${dilationWidth}, d),
              getValue(batch, xR, xC + 2 * ${dilationWidth}, d),
              getValue(batch, xR, xC + 3 * ${dilationWidth}, d)
            );

            ${updateSnippet}
          }

          int xC = xCCorner + ${filterWidthNearestVec4};
          if (${filterWidthVec4Remainder === 1}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            ${updateSnippet}
          } else if (${filterWidthVec4Remainder === 2}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${dilationWidth}, d),
              initializationValue,
              initializationValue
            );

            ${updateSnippet}
          } else if (${filterWidthVec4Remainder === 3}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${dilationWidth}, d),
              getValue(batch, xR, xC + 2 * ${dilationWidth}, d),
              initializationValue
            );

            ${updateSnippet}
          }
        }
        setOutput(${returnValue});
      }
    `;
    }
}
class Pool3DProgram {
    constructor(convInfo, poolType, computePositions, flattenPositions = false, includeBatchInIndex = false) {
        this.variableNames = ['x'];
        if (poolType === 'avg' && computePositions) {
            throw new Error('Cannot compute positions for average pool.');
        }
        const filterWidth = convInfo.filterWidth;
        const strideDepth = convInfo.strideDepth;
        const strideHeight = convInfo.strideHeight;
        const strideWidth = convInfo.strideWidth;
        const dilationDepth = convInfo.dilationDepth;
        const dilationHeight = convInfo.dilationHeight;
        const dilationWidth = convInfo.dilationWidth;
        const effectiveFilterDepth = convInfo.effectiveFilterDepth;
        const effectiveFilterHeight = convInfo.effectiveFilterHeight;
        const effectiveFilterWidth = convInfo.effectiveFilterWidth;
        const padFront = convInfo.padInfo.front;
        const padTop = convInfo.padInfo.top;
        const padLeft = convInfo.padInfo.left;
        this.outputShape = convInfo.outShape;
        const isAvgPool = poolType === 'avg';
        let initializationValue = '0.0';
        if (!isAvgPool) {
            // WebGL on Firefox Linux can't compile 1/0 so we do 1/eps.
            initializationValue = '-1.0 / 1e-20';
        }
        if (computePositions) {
            const compareOp = '>=';
            this.userCode = `
        const ivec3 strides =
            ivec3(${strideDepth}, ${strideHeight}, ${strideWidth});
        const ivec3 pads = ivec3(${padFront}, ${padTop}, ${padLeft});

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < ${effectiveFilterDepth};
              wD += ${dilationDepth}) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= ${convInfo.inDepth}) {
              continue;
            }

            for (int wR = 0; wR < ${effectiveFilterHeight};
                wR += ${dilationHeight}) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= ${convInfo.inHeight}) {
                continue;
              }

              for (int wC = 0; wC < ${effectiveFilterWidth};
                  wC += ${dilationWidth}) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= ${convInfo.inWidth}) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value ${compareOp} currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition = ${flattenPositions ?
                (includeBatchInIndex ?
                    `(((batch * ${convInfo.inDepth} + xD) * ${convInfo.inHeight} + xR) * ${convInfo.inWidth} + xC) * ${convInfo.inChannels} + ch` :
                    `((xD * ${convInfo.inHeight} + xR) * ${convInfo.inWidth} + xC) * ${convInfo.inChannels} + ch`) :
                `wD * ${effectiveFilterHeight} * ${effectiveFilterWidth} +
                      wR * ${effectiveFilterWidth} + wC`};
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;
            return;
        }
        const compareOp = 'max';
        let returnValue = `${poolType}(${poolType}(${poolType}(` +
            'minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])';
        if (poolType === 'avg') {
            returnValue = `avgValue / count`;
        }
        const filterWidthNearestVec4 = Math.floor(filterWidth / 4) * 4;
        const filterWidthVec4Remainder = filterWidth % 4;
        const updateSnippet = `
      if (${isAvgPool}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = ${compareOp}(values, minMaxValue);
      }
    `;
        this.userCode = `
      const ivec3 strides =
        ivec3(${strideDepth}, ${strideHeight}, ${strideWidth});
      const ivec3 pads = ivec3(${padFront}, ${padTop}, ${padLeft});
      const float initializationValue = ${initializationValue};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= ${convInfo.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(${initializationValue});
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < ${effectiveFilterDepth};
            wD += ${dilationDepth}) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= ${convInfo.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${effectiveFilterHeight};
            wR += ${dilationHeight}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${convInfo.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${filterWidthNearestVec4}; wC += 4) {
              int xC = xCCorner + wC * ${dilationWidth};

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${dilationWidth}, ch),
                getValue(batch, xD, xR, xC + 2 * ${dilationWidth}, ch),
                getValue(batch, xD, xR, xC + 3 * ${dilationWidth}, ch)
              );

              ${updateSnippet}
            }

            int xC = xCCorner + ${filterWidthNearestVec4};
            if (${filterWidthVec4Remainder === 1}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              ${updateSnippet}
            } else if (${filterWidthVec4Remainder === 2}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${dilationWidth}, ch),
                initializationValue,
                initializationValue
              );

              ${updateSnippet}
            } else if (${filterWidthVec4Remainder === 3}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${dilationWidth}, ch),
                getValue(batch, xD, xR, xC + 2 * ${dilationWidth}, ch),
                initializationValue
              );

              ${updateSnippet}
            }
          }
          setOutput(${returnValue});
        }
      }
    `;
    }
}
//# sourceMappingURL=pool_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/reduce_gpu.js":
/*!************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/reduce_gpu.js ***!
  \************************************************************************/
/*! exports provided: ReduceProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReduceProgram", function() { return ReduceProgram; });
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class ReduceProgram {
    constructor(reduceInfo, reduceType) {
        this.variableNames = ['x'];
        const { windowSize, batchSize, inSize, outSize } = reduceInfo;
        this.outputShape = [batchSize, outSize];
        let initializationValue = '0.0';
        let compareOp = ``;
        if (reduceType === 'prod') {
            initializationValue = '1.0';
        }
        else if (reduceType === 'min') {
            // WebGL on Firefox Linux can't compile 1/0 so we do 1/eps.
            initializationValue = '1.0 / 1e-20';
            compareOp = `min`;
        }
        else if (reduceType === 'max') {
            // WebGL on Firefox Linux can't compile 1/0 so we do 1/eps.
            initializationValue = '-1.0 / 1e-20';
            compareOp = `max`;
        }
        let returnValue = `${reduceType}(${reduceType}(${reduceType}(` +
            'minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])';
        if (reduceType === 'sum') {
            returnValue = `sumValue`;
        }
        else if (reduceType === 'prod') {
            returnValue = `prodValue`;
        }
        else if (reduceType === 'all') {
            returnValue = `allValue`;
        }
        else if (reduceType === 'any') {
            returnValue = `anyValue`;
        }
        const windowSizeNearestVec4 = Math.floor(windowSize / 4) * 4;
        const windowSizeVec4Remainder = windowSize % 4;
        let updateSnippet = `
      if (${reduceType === 'sum'}) {
        sumValue += dot(values, ones);
      } else if (${reduceType === 'prod'}) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = ${compareOp}(values, minMaxValue);
      }
    `;
        let vecType = `vec4`;
        if (reduceType === 'all') {
            initializationValue = '1.0';
            updateSnippet = `
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `;
            vecType = `bvec4`;
        }
        else if (reduceType === 'any') {
            initializationValue = '0.0';
            updateSnippet = `
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `;
            vecType = `bvec4`;
        }
        let checkOutOfBounds = '';
        if (inSize % windowSize > 0) {
            checkOutOfBounds = `
        if (inIdx < 0 || inIdx >= ${inSize}) {
          return initializationValue;
        }
      `;
        }
        this.userCode = `
      const float initializationValue = ${initializationValue};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${checkOutOfBounds}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${windowSize};

        vec4 minMaxValue = vec4(${initializationValue});
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < ${windowSizeNearestVec4}; i += 4) {
          int inIdx = inOffset + i;
          ${vecType} values = ${vecType}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${updateSnippet}
        }

        int inIdx = inOffset + ${windowSizeNearestVec4};
        if (${windowSizeVec4Remainder === 1}) {
          ${vecType} values = ${vecType}(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          ${updateSnippet}
        } else if (${windowSizeVec4Remainder === 2}) {
          ${vecType} values = ${vecType}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          ${updateSnippet}
        } else if (${windowSizeVec4Remainder === 3}) {
          ${vecType} values = ${vecType}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          ${updateSnippet}
        }
        setOutput(${returnValue});
      }
    `;
    }
}
//# sourceMappingURL=reduce_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/register_all_kernels.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/register_all_kernels.js ***!
  \**********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _kernels_Add__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kernels/Add */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Add.js");
/* harmony import */ var _kernels_Atan2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./kernels/Atan2 */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Atan2.js");
/* harmony import */ var _kernels_AvgPool__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kernels/AvgPool */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/AvgPool.js");
/* harmony import */ var _kernels_AvgPoolBackprop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./kernels/AvgPoolBackprop */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/AvgPoolBackprop.js");
/* harmony import */ var _kernels_BatchNorm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./kernels/BatchNorm */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/BatchNorm.js");
/* harmony import */ var _kernels_Cast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./kernels/Cast */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Cast.js");
/* harmony import */ var _kernels_Complex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./kernels/Complex */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Complex.js");
/* harmony import */ var _kernels_Concat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./kernels/Concat */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Concat.js");
/* harmony import */ var _kernels_Cos__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./kernels/Cos */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Cos.js");
/* harmony import */ var _kernels_Div__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./kernels/Div */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Div.js");
/* harmony import */ var _kernels_FFT__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./kernels/FFT */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/FFT.js");
/* harmony import */ var _kernels_FlipLeftRight__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./kernels/FlipLeftRight */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/FlipLeftRight.js");
/* harmony import */ var _kernels_FromPixels__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./kernels/FromPixels */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/FromPixels.js");
/* harmony import */ var _kernels_Identity__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./kernels/Identity */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Identity.js");
/* harmony import */ var _kernels_IFFT__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./kernels/IFFT */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/IFFT.js");
/* harmony import */ var _kernels_Imag__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./kernels/Imag */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Imag.js");
/* harmony import */ var _kernels_Max__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./kernels/Max */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Max.js");
/* harmony import */ var _kernels_MaxPool__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./kernels/MaxPool */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/MaxPool.js");
/* harmony import */ var _kernels_MaxPoolBackprop__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./kernels/MaxPoolBackprop */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/MaxPoolBackprop.js");
/* harmony import */ var _kernels_MaxPoolWithArgmax__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./kernels/MaxPoolWithArgmax */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/MaxPoolWithArgmax.js");
/* harmony import */ var _kernels_Mean__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./kernels/Mean */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Mean.js");
/* harmony import */ var _kernels_MirrorPad__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./kernels/MirrorPad */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/MirrorPad.js");
/* harmony import */ var _kernels_Multiply__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./kernels/Multiply */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Multiply.js");
/* harmony import */ var _kernels_NonMaxSuppressionV3__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./kernels/NonMaxSuppressionV3 */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/NonMaxSuppressionV3.js");
/* harmony import */ var _kernels_NonMaxSuppressionV4__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./kernels/NonMaxSuppressionV4 */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/NonMaxSuppressionV4.js");
/* harmony import */ var _kernels_NonMaxSuppressionV5__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./kernels/NonMaxSuppressionV5 */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/NonMaxSuppressionV5.js");
/* harmony import */ var _kernels_NotEqual__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./kernels/NotEqual */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/NotEqual.js");
/* harmony import */ var _kernels_Real__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./kernels/Real */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Real.js");
/* harmony import */ var _kernels_Reshape__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./kernels/Reshape */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Reshape.js");
/* harmony import */ var _kernels_RotateWithOffset__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./kernels/RotateWithOffset */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/RotateWithOffset.js");
/* harmony import */ var _kernels_Sin__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./kernels/Sin */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Sin.js");
/* harmony import */ var _kernels_Square__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./kernels/Square */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Square.js");
/* harmony import */ var _kernels_SquaredDifference__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./kernels/SquaredDifference */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/SquaredDifference.js");
/* harmony import */ var _kernels_Sub__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./kernels/Sub */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Sub.js");
/* harmony import */ var _kernels_Tan__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./kernels/Tan */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Tan.js");
/* harmony import */ var _kernels_Transpose__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./kernels/Transpose */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Transpose.js");
/* harmony import */ var _kernels_Unique__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./kernels/Unique */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Unique.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */






































// List all kernel configs here
const kernelConfigs = [
    _kernels_Add__WEBPACK_IMPORTED_MODULE_1__["addConfig"],
    _kernels_Atan2__WEBPACK_IMPORTED_MODULE_2__["atan2Config"],
    _kernels_AvgPool__WEBPACK_IMPORTED_MODULE_3__["avgPoolConfig"],
    _kernels_AvgPoolBackprop__WEBPACK_IMPORTED_MODULE_4__["avgPoolBackpropConfig"],
    _kernels_BatchNorm__WEBPACK_IMPORTED_MODULE_5__["batchNormConfig"],
    _kernels_Cast__WEBPACK_IMPORTED_MODULE_6__["castConfig"],
    _kernels_Complex__WEBPACK_IMPORTED_MODULE_7__["complexConfig"],
    _kernels_Concat__WEBPACK_IMPORTED_MODULE_8__["concatConfig"],
    _kernels_Cos__WEBPACK_IMPORTED_MODULE_9__["cosConfig"],
    _kernels_Div__WEBPACK_IMPORTED_MODULE_10__["divConfig"],
    _kernels_FFT__WEBPACK_IMPORTED_MODULE_11__["fftConfig"],
    _kernels_FlipLeftRight__WEBPACK_IMPORTED_MODULE_12__["flipLeftRightConfig"],
    _kernels_FromPixels__WEBPACK_IMPORTED_MODULE_13__["fromPixelsConfig"],
    _kernels_Identity__WEBPACK_IMPORTED_MODULE_14__["identityConfig"],
    _kernels_IFFT__WEBPACK_IMPORTED_MODULE_15__["ifftConfig"],
    _kernels_Imag__WEBPACK_IMPORTED_MODULE_16__["imagConfig"],
    _kernels_Max__WEBPACK_IMPORTED_MODULE_17__["maxConfig"],
    _kernels_MaxPool__WEBPACK_IMPORTED_MODULE_18__["maxPoolConfig"],
    _kernels_MaxPoolBackprop__WEBPACK_IMPORTED_MODULE_19__["maxPoolBackpropConfig"],
    _kernels_MaxPoolWithArgmax__WEBPACK_IMPORTED_MODULE_20__["maxPoolWithArgmaxConfig"],
    _kernels_Mean__WEBPACK_IMPORTED_MODULE_21__["meanConfig"],
    _kernels_MirrorPad__WEBPACK_IMPORTED_MODULE_22__["mirrorPadConfig"],
    _kernels_Multiply__WEBPACK_IMPORTED_MODULE_23__["multiplyConfig"],
    _kernels_NonMaxSuppressionV3__WEBPACK_IMPORTED_MODULE_24__["nonMaxSuppressionV3Config"],
    _kernels_NonMaxSuppressionV4__WEBPACK_IMPORTED_MODULE_25__["nonMaxSuppressionV4Config"],
    _kernels_NonMaxSuppressionV5__WEBPACK_IMPORTED_MODULE_26__["nonMaxSuppressionV5Config"],
    _kernels_NotEqual__WEBPACK_IMPORTED_MODULE_27__["notEqualConfig"],
    _kernels_Real__WEBPACK_IMPORTED_MODULE_28__["realConfig"],
    _kernels_Reshape__WEBPACK_IMPORTED_MODULE_29__["reshapeConfig"],
    _kernels_RotateWithOffset__WEBPACK_IMPORTED_MODULE_30__["rotateWithOffsetConfig"],
    _kernels_Sin__WEBPACK_IMPORTED_MODULE_31__["sinConfig"],
    _kernels_Square__WEBPACK_IMPORTED_MODULE_32__["squareConfig"],
    _kernels_Sub__WEBPACK_IMPORTED_MODULE_34__["subConfig"],
    _kernels_SquaredDifference__WEBPACK_IMPORTED_MODULE_33__["squaredDifferenceConfig"],
    _kernels_Tan__WEBPACK_IMPORTED_MODULE_35__["tanConfig"],
    _kernels_Transpose__WEBPACK_IMPORTED_MODULE_36__["transposeConfig"],
    _kernels_Unique__WEBPACK_IMPORTED_MODULE_37__["uniqueConfig"],
];
for (const kernelConfig of kernelConfigs) {
    Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["registerKernel"])(kernelConfig);
}
//# sourceMappingURL=register_all_kernels.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/reshape_packed_gpu.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/reshape_packed_gpu.js ***!
  \********************************************************************************/
/*! exports provided: ReshapePackedProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReshapePackedProgram", function() { return ReshapePackedProgram; });
/* harmony import */ var _shader_compiler_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shader_compiler_util */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/shader_compiler_util.js");
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

class ReshapePackedProgram {
    constructor(outputShape, inputShape) {
        this.variableNames = ['A'];
        this.packedInputs = true;
        this.packedOutput = true;
        this.outputShape = outputShape;
        let mainLoop = ``;
        for (let i = 0; i < 4; i++) {
            let thisRC = `thisRC = rc;`;
            if (i % 2 === 1) {
                thisRC += `thisRC.z += 1;`;
            }
            if (i > 1) {
                thisRC += `thisRC.y += 1;`;
            }
            mainLoop += `
        ${thisRC}
        ${i > 0 ? `if(thisRC.y < rows && thisRC.z < cols){` : ''}
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[${i}] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        ${i > 0 ? '}' : ''}
      `;
        }
        this.userCode = `
      ${getReshapedInputCoords(inputShape)}
      ${_shader_compiler_util__WEBPACK_IMPORTED_MODULE_0__["getFlatIndexFrom3D"](outputShape)}

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = ${outputShape[1]};
        int cols = ${outputShape[2]};

        ${mainLoop}

        setOutput(result);
      }
    `;
    }
}
function getReshapedInputCoords(shape) {
    const coordsFromIndexSnippet = _shader_compiler_util__WEBPACK_IMPORTED_MODULE_0__["getLogicalCoordinatesFromFlatIndex"](['r', 'c', 'd'], shape);
    return `
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      ${coordsFromIndexSnippet}
      return ivec3(r, c, d);
    }
  `;
}
//# sourceMappingURL=reshape_packed_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/resize_bilinear_backprop_gpu.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/resize_bilinear_backprop_gpu.js ***!
  \******************************************************************************************/
/*! exports provided: ResizeBilinearBackpropProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizeBilinearBackpropProgram", function() { return ResizeBilinearBackpropProgram; });
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class ResizeBilinearBackpropProgram {
    constructor(dy, x, alignCorners) {
        this.variableNames = ['dy'];
        this.outputShape = [];
        this.outputShape = x.shape;
        const [, xHeight, xWidth,] = x.shape;
        const [, yHeight, yWidth] = dy.shape;
        // In the backwards pass, we want to find the pixels that were generated for
        // each pixel in the input image the forward pass and add the corresponding
        // coefficient from dy to the gradient (with some interpolation).
        const effectiveXSize = [
            (alignCorners && yHeight > 1) ? xHeight - 1 : xHeight,
            (alignCorners && yWidth > 1) ? xWidth - 1 : xWidth
        ];
        const effectiveYSize = [
            (alignCorners && yHeight > 1) ? yHeight - 1 : yHeight,
            (alignCorners && yWidth > 1) ? yWidth - 1 : yWidth
        ];
        const heightScale = effectiveXSize[0] / effectiveYSize[0];
        const widthScale = effectiveXSize[1] / effectiveYSize[1];
        const invHeightScale = 1 / heightScale;
        const invWidthScale = 1 / widthScale;
        // This defines the size of the window of values around a particular
        // index in dy that we want to search for contributions to dx.
        const winHeight = (Math.ceil(invHeightScale) * 2) + 2;
        const winWidth = (Math.ceil(invWidthScale) * 2) + 2;
        this.userCode = `
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${heightScale});
        const float widthScale = float(${widthScale});

        const float invHeightScale = float(${invHeightScale});
        const float invWidthScale = float(${invWidthScale});

        const int winHeight = int(${winHeight});
        const int winWidth = int(${winWidth});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${yHeight}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${yWidth}) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), ${xHeight - 1}.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), ${xWidth - 1}.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `;
    }
}
//# sourceMappingURL=resize_bilinear_backprop_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/resize_bilinear_gpu.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/resize_bilinear_gpu.js ***!
  \*********************************************************************************/
/*! exports provided: ResizeBilinearProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizeBilinearProgram", function() { return ResizeBilinearProgram; });
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class ResizeBilinearProgram {
    constructor(inputShape, newHeight, newWidth, alignCorners) {
        this.variableNames = ['A'];
        this.outputShape = [];
        const [batch, oldHeight, oldWidth, depth] = inputShape;
        this.outputShape = [batch, newHeight, newWidth, depth];
        const effectiveInSize = [
            (alignCorners && newHeight > 1) ? oldHeight - 1 : oldHeight,
            (alignCorners && newWidth > 1) ? oldWidth - 1 : oldWidth
        ];
        const effectiveOutSize = [
            (alignCorners && newHeight > 1) ? newHeight - 1 : newHeight,
            (alignCorners && newWidth > 1) ? newWidth - 1 : newWidth
        ];
        this.userCode = `
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${effectiveInSize[0] / effectiveOutSize[0]},
          ${effectiveInSize[1] / effectiveOutSize[1]});
      const vec2 inputShapeRC = vec2(${oldHeight}.0, ${oldWidth}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(sourceFracIndexRC);
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `;
    }
}
//# sourceMappingURL=resize_bilinear_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/resize_bilinear_packed_gpu.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/resize_bilinear_packed_gpu.js ***!
  \****************************************************************************************/
/*! exports provided: ResizeBilinearPackedProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizeBilinearPackedProgram", function() { return ResizeBilinearPackedProgram; });
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class ResizeBilinearPackedProgram {
    constructor(inputShape, newHeight, newWidth, alignCorners) {
        this.variableNames = ['A'];
        this.packedInputs = true;
        this.packedOutput = true;
        this.outputShape = [];
        const [batch, oldHeight, oldWidth, depth] = inputShape;
        this.outputShape = [batch, newHeight, newWidth, depth];
        const effectiveInSize = [
            (alignCorners && newHeight > 1) ? oldHeight - 1 : oldHeight,
            (alignCorners && newWidth > 1) ? oldWidth - 1 : oldWidth
        ];
        const effectiveOutSize = [
            (alignCorners && newHeight > 1) ? newHeight - 1 : newHeight,
            (alignCorners && newWidth > 1) ? newWidth - 1 : newWidth
        ];
        this.userCode = `
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${effectiveInSize[0] / effectiveOutSize[0]},
          ${effectiveInSize[1] / effectiveOutSize[1]},
          ${effectiveInSize[1] / effectiveOutSize[1]});
      const vec3 inputShapeRC = vec3(${oldHeight}.0, ${oldWidth}.0,
                                     ${oldWidth}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = vec3(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(sourceFracIndexRC);
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${depth - 1};
        bool hasNextRow = coords.z < ${newWidth - 1};

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `;
    }
}
//# sourceMappingURL=resize_bilinear_packed_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/resize_nearest_neighbor_backprop_gpu.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/resize_nearest_neighbor_backprop_gpu.js ***!
  \**************************************************************************************************/
/*! exports provided: ResizeNearestNeigborBackpropProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizeNearestNeigborBackpropProgram", function() { return ResizeNearestNeigborBackpropProgram; });
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class ResizeNearestNeigborBackpropProgram {
    constructor(dy, x, alignCorners) {
        this.variableNames = ['dy'];
        this.outputShape = [];
        this.outputShape = x.shape;
        const [, xHeight, xWidth,] = x.shape;
        const [, yHeight, yWidth] = dy.shape;
        // In the backwards pass, we want to find the pixels that were generated for
        // each pixel in the input image the forward pass and add the corresponding
        // coefficient from dy to the gradient (with some interpolation).
        const effectiveXSize = [
            (alignCorners && yHeight > 1) ? xHeight - 1 : xHeight,
            (alignCorners && yWidth > 1) ? xWidth - 1 : xWidth
        ];
        const effectiveYSize = [
            (alignCorners && yHeight > 1) ? yHeight - 1 : yHeight,
            (alignCorners && yWidth > 1) ? yWidth - 1 : yWidth
        ];
        const heightScale = effectiveXSize[0] / effectiveYSize[0];
        const widthScale = effectiveXSize[1] / effectiveYSize[1];
        const invHeightScale = 1 / heightScale;
        const invWidthScale = 1 / widthScale;
        // This defines the size of the window of values around a particular
        // index in dy that we want to search for contributions to dx.
        const winHeight = (Math.ceil(invHeightScale) * 2) + 2;
        const winWidth = (Math.ceil(invWidthScale) * 2) + 2;
        this.userCode = `
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${heightScale});
        const float widthScale = float(${widthScale});

        const float invHeightScale = float(${invHeightScale});
        const float invWidthScale = float(${invWidthScale});

        const int winHeight = int(${winHeight});
        const int winWidth = int(${winWidth});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${yHeight}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${yWidth}) {
              continue;
            }

            float sourceFracRow =
              float(${effectiveXSize[0]}) *
                (float(dyR) / float(${effectiveYSize[0]}));

            float sourceFracCol =
                float(${effectiveXSize[1]}) *
                  (float(dyC) / float(${effectiveYSize[1]}));

            int sourceNearestRow = int(min(
                float(int(${xHeight}) - 1),
                ${alignCorners} ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(${xWidth}) - 1),
                ${alignCorners} ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `;
    }
}
//# sourceMappingURL=resize_nearest_neighbor_backprop_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/resize_nearest_neighbor_gpu.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/resize_nearest_neighbor_gpu.js ***!
  \*****************************************************************************************/
/*! exports provided: ResizeNearestNeighborProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizeNearestNeighborProgram", function() { return ResizeNearestNeighborProgram; });
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class ResizeNearestNeighborProgram {
    constructor(inputShape, newHeight, newWidth, alignCorners) {
        this.variableNames = ['A'];
        this.outputShape = [];
        const [batch, oldHeight, oldWidth, depth] = inputShape;
        this.outputShape = [batch, newHeight, newWidth, depth];
        const effectiveInSize = [
            (alignCorners && newHeight > 1) ? oldHeight - 1 : oldHeight,
            (alignCorners && newWidth > 1) ? oldWidth - 1 : oldWidth
        ];
        const effectiveOutSize = [
            (alignCorners && newHeight > 1) ? newHeight - 1 : newHeight,
            (alignCorners && newWidth > 1) ? newWidth - 1 : newWidth
        ];
        // When align corners is false, we rounds the value with floor.
        const roundBase = alignCorners ? '0.5' : '0.0';
        this.userCode = `
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${effectiveInSize[0] / effectiveOutSize[0]},
          ${effectiveInSize[1] / effectiveOutSize[1]});
      const vec2 inputShapeRC = vec2(${oldHeight}.0, ${oldWidth}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${roundBase})));

        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `;
    }
}
//# sourceMappingURL=resize_nearest_neighbor_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/reverse_gpu.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/reverse_gpu.js ***!
  \*************************************************************************/
/*! exports provided: ReverseProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReverseProgram", function() { return ReverseProgram; });
/* harmony import */ var _shader_compiler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shader_compiler */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/shader_compiler.js");
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

class ReverseProgram {
    constructor(xShape, axis) {
        this.variableNames = ['x'];
        const rank = xShape.length;
        if (rank > 4) {
            throw new Error(`WebGL backend: Reverse of rank-${rank} tensor is not yet supported`);
        }
        this.outputShape = xShape;
        if (rank === 1) {
            this.userCode = `
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(${xShape[0]} - coord - 1));
        }
      `;
            return;
        }
        const getInCoord = (i) => {
            if (axis.indexOf(i) !== -1 && xShape[i] !== 1) {
                return `${xShape[i]} - coords[${i}] - 1`;
            }
            return `coords[${i}]`;
        };
        const inCoords = xShape.map((_, i) => getInCoord(i)).join(',');
        const type = Object(_shader_compiler__WEBPACK_IMPORTED_MODULE_0__["getCoordsDataType"])(rank);
        this.userCode = `
      void main() {
        ${type} coords = getOutputCoords();
        setOutput(getX(${inCoords}));
      }
    `;
    }
}
//# sourceMappingURL=reverse_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/reverse_packed_gpu.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/reverse_packed_gpu.js ***!
  \********************************************************************************/
/*! exports provided: ReversePackedProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReversePackedProgram", function() { return ReversePackedProgram; });
/* harmony import */ var _packing_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./packing_util */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/packing_util.js");
/* harmony import */ var _shader_compiler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shader_compiler */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/shader_compiler.js");
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */


class ReversePackedProgram {
    constructor(xShape, axis) {
        this.variableNames = ['x'];
        this.packedInputs = true;
        this.packedOutput = true;
        const rank = xShape.length;
        if (rank > 4) {
            throw new Error(`WebGL backend: Reverse of rank-${rank} tensor is not yet supported`);
        }
        this.outputShape = xShape;
        const channels = Object(_packing_util__WEBPACK_IMPORTED_MODULE_0__["getChannels"])('rc', rank);
        const nextColumn = `${channels[rank - 1]} + 1 < ${this.outputShape[rank - 1]}`;
        const nextRow = `${channels[rank - 2]} + 1 < ${this.outputShape[rank - 2]}`;
        const type = Object(_shader_compiler__WEBPACK_IMPORTED_MODULE_1__["getCoordsDataType"])(rank);
        if (rank === 1) {
            this.userCode = `
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(${xShape[0]} - rc - 1),
            ${xShape[0]} - rc - 1);
          if(${nextColumn}){
              result.g = getChannel(getX(${xShape[0]} - (rc  + 1) - 1),
                ${xShape[0]} - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `;
        }
        else {
            this.userCode = `
        void main() {
          ${type} rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = ${getR(channels.slice())};
          if(${nextColumn}){
            result.g = ${getG(channels.slice())};
          }
          if(${nextRow}) {
            result.b = ${getB(channels.slice())};
            if(${nextColumn}) {
              result.a = ${getA(channels.slice())};
            }
          }
          setOutput(result);
        }
    `;
        }
        function getR(channels) {
            return getChannel(channels);
        }
        function getG(channels) {
            channels[rank - 1] = '(' + channels[rank - 1] + ` + 1)`;
            return getChannel(channels);
        }
        function getB(channels) {
            channels[rank - 2] = '(' + channels[rank - 2] + ` + 1)`;
            return getChannel(channels);
        }
        function getA(channels) {
            channels[rank - 1] = '(' + channels[rank - 1] + ` + 1)`;
            channels[rank - 2] = '(' + channels[rank - 2] + ` + 1)`;
            return getChannel(channels);
        }
        function getChannel(channels) {
            const inCoordsArray = xShape.map((_, i) => getInCoord(i, channels));
            const inCoords = inCoordsArray.join(',');
            const innerDims = inCoordsArray.slice(-2).join(',');
            return `getChannel(getX(${inCoords}), vec2(${innerDims}))`;
        }
        function getInCoord(i, channels1) {
            if (axis.indexOf(i) !== -1 && xShape[i] !== 1) {
                return `${xShape[i]} - ${channels1[i]} - 1`;
            }
            else {
                return `${channels1[i]}`;
            }
        }
    }
}
//# sourceMappingURL=reverse_packed_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/rotate_gpu.js":
/*!************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/rotate_gpu.js ***!
  \************************************************************************/
/*! exports provided: RotateProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RotateProgram", function() { return RotateProgram; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

class RotateProgram {
    constructor(imageShape, radians, fillValue, center) {
        this.variableNames = ['Image'];
        this.outputShape = [];
        const imageHeight = imageShape[1];
        const imageWidth = imageShape[2];
        const sinFactor = Math.sin(radians).toFixed(3);
        const cosFactor = Math.cos(radians).toFixed(3);
        this.outputShape = imageShape;
        const [centerX, centerY] = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["backend_util"].getImageCenter(center, imageHeight, imageWidth);
        const centerXString = centerX.toFixed(3);
        const centerYString = centerY.toFixed(3);
        let fillSnippet = '';
        if (typeof fillValue === 'number') {
            fillSnippet = `float outputValue = ${fillValue.toFixed(2)};`;
        }
        else {
            fillSnippet = `
        vec3 fill = vec3(${fillValue.join(',')});
        float outputValue = fill[coords[3]];`;
        }
        this.userCode = `
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];
          int y = coords[1];
          float coordXFloat = (float(x) - ${centerXString}) * ${cosFactor} - (float(y) - ${centerYString}) * ${sinFactor};
          float coordYFloat = (float(x) - ${centerXString}) * ${sinFactor} + (float(y) - ${centerYString}) * ${cosFactor};
          int coordX = int(round(coordXFloat + ${centerXString}));
          int coordY = int(round(coordYFloat + ${centerYString}));
          ${fillSnippet}
          if(coordX >= 0 && coordX < ${imageWidth} && coordY >= 0 && coordY < ${imageHeight}) {
            outputValue = getImage(coords[0], coordY, coordX, coords[3]);
          }
          setOutput(outputValue);
        }
    `;
    }
}
//# sourceMappingURL=rotate_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/scatter_gpu.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/scatter_gpu.js ***!
  \*************************************************************************/
/*! exports provided: ScatterProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScatterProgram", function() { return ScatterProgram; });
/* harmony import */ var _shader_compiler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shader_compiler */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/shader_compiler.js");
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

class ScatterProgram {
    constructor(updateSize, sliceDim, indicesRank, updatesRank, strides, shape, summingDupeIndex = true) {
        this.variableNames = ['updates', 'indices', 'defaultValue'];
        this.outputShape = shape;
        const stridesType = Object(_shader_compiler__WEBPACK_IMPORTED_MODULE_0__["getCoordsDataType"])(strides.length);
        const dtype = Object(_shader_compiler__WEBPACK_IMPORTED_MODULE_0__["getCoordsDataType"])(shape.length);
        let indicesString = '';
        if (indicesRank === 1) {
            indicesString = 'i';
        }
        else if (indicesRank === 2) {
            indicesString = 'i, j';
        }
        const indicesSnippet = `getIndices(${indicesString})`;
        let updatesString = '';
        if (updatesRank === 1) {
            updatesString = 'i';
        }
        else if (updatesRank === 2) {
            updatesString = 'i, coords[1]';
        }
        const updatesSnippet = `getUpdates(${updatesString})`;
        const strideString = sliceDim > 1 ? 'strides[j]' : 'strides';
        this.userCode = `
        ${stridesType} strides = ${stridesType}(${strides});

        void main() {
          ${dtype} coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < ${updateSize}; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < ${sliceDim}; j++) {
              int index = round(${indicesSnippet});
              flattenedIndex += index * ${strideString};
            }
            if (flattenedIndex == coords[0]) {
              sum += ${updatesSnippet};
              found = true;
            }
          }
          setOutput(mix(getDefaultValue(), sum, float(found)));
        }
      `;
    }
}
//# sourceMappingURL=scatter_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/segment_gpu.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/segment_gpu.js ***!
  \*************************************************************************/
/*! exports provided: SegmentOpProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegmentOpProgram", function() { return SegmentOpProgram; });
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class SegmentOpProgram {
    constructor(segOpInfo, segOpType) {
        this.variableNames = ['x', 'segmentIds'];
        const windowSize = segOpInfo.windowSize;
        const batchSize = segOpInfo.batchSize;
        const inSize = segOpInfo.inSize;
        const numSegments = segOpInfo.numSegments;
        const outSize = numSegments * Math.ceil(inSize / windowSize);
        this.outputShape = [batchSize, outSize];
        const initializationValue = '0.0';
        const returnValue = `sumValue`;
        const windowSizeNearestVec4 = Math.floor(windowSize / 4) * 4;
        const windowSizeVec4Remainder = windowSize % 4;
        const updateSnippet = `
        sumValue += dot(values, segFilter);
    `;
        let checkValueOutOfBounds = '';
        if (inSize % windowSize > 0) {
            checkValueOutOfBounds = `
        if (inIdx < 0 || inIdx >= ${inSize}) {
          return initializationValue;
        }
      `;
        }
        let checkSegmentIdOutOfBounds = '';
        if (inSize % windowSize > 0) {
            checkSegmentIdOutOfBounds = `
        if (inIdx < 0 || inIdx >= ${inSize}) {
          return -1.0;
        }
      `;
        }
        this.userCode = `
      const float initializationValue = ${initializationValue};

      float getValue(int batch, int inIdx) {
        ${checkValueOutOfBounds}
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        ${checkSegmentIdOutOfBounds}
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          ${numSegments})) * float(${windowSize}));
        int currentSeg = int(mod(float(outIdx), float(${numSegments})));

        float sumValue = 0.0;

        for (int i = 0; i < ${windowSizeNearestVec4}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          ${updateSnippet}
        }

        int inIdx = inOffset + ${windowSizeNearestVec4};
        if (${windowSizeVec4Remainder === 1}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          ${updateSnippet}
        } else if (${windowSizeVec4Remainder === 2}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          ${updateSnippet}
        } else if (${windowSizeVec4Remainder === 3}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          ${updateSnippet}
        }
        setOutput(${returnValue});
      }
    `;
    }
}
//# sourceMappingURL=segment_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/select_gpu.js":
/*!************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/select_gpu.js ***!
  \************************************************************************/
/*! exports provided: SelectProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectProgram", function() { return SelectProgram; });
/* harmony import */ var _shader_compiler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shader_compiler */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/shader_compiler.js");
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

class SelectProgram {
    constructor(cRank, shape, rank) {
        this.variableNames = ['c', 'a', 'b'];
        this.outputShape = shape;
        let cCoords;
        let abCoords;
        if (rank > 4) {
            throw Error(`Where for rank ${rank} is not yet supported`);
        }
        if (rank === 1) {
            abCoords = `resRC`;
            cCoords = `resRC`;
        }
        else {
            const currentCoords = ['resRC.x', 'resRC.y', 'resRC.z', 'resRC.w'];
            const cCoordVars = [];
            const abCoordVars = [];
            for (let i = 0; i < shape.length; i++) {
                abCoordVars.push(`${currentCoords[i]}`);
                if (i < cRank) {
                    cCoordVars.push(`${currentCoords[i]}`);
                }
            }
            cCoords = cCoordVars.join();
            abCoords = abCoordVars.join();
        }
        const dtype = Object(_shader_compiler__WEBPACK_IMPORTED_MODULE_0__["getCoordsDataType"])(rank);
        this.userCode = `
      void main() {
        ${dtype} resRC = getOutputCoords();
        float cVal = getC(${cCoords});
        if (cVal >= 1.0) {
          setOutput(getA(${abCoords}));
        } else {
          setOutput(getB(${abCoords}));
        }
      }
    `;
    }
}
//# sourceMappingURL=select_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/shader_compiler.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/shader_compiler.js ***!
  \*****************************************************************************/
/*! exports provided: makeShader, getCoordsDataType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeShader", function() { return makeShader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCoordsDataType", function() { return getCoordsDataType; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _glsl_version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glsl_version */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/glsl_version.js");
/* harmony import */ var _shader_compiler_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shader_compiler_util */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/shader_compiler_util.js");
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

const { getBroadcastDims } = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["backend_util"];


function makeShader(inputsInfo, outputShape, userCode, usesPackedTextures) {
    const prefixSnippets = [];
    inputsInfo.forEach(x => {
        const size = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].sizeFromShape(x.shapeInfo.logicalShape);
        // Snippet when we decided to upload the values as uniform.
        if (x.shapeInfo.isUniform) {
            prefixSnippets.push(`uniform float ${x.name}${size > 1 ? `[${size}]` : ''};`);
        }
        else {
            prefixSnippets.push(`uniform sampler2D ${x.name};`);
            prefixSnippets.push(`uniform int offset${x.name};`);
        }
    });
    const inputPrefixSnippet = prefixSnippets.join('\n');
    const inputSamplingSnippet = inputsInfo
        .map(x => getInputSamplingSnippet(x, outputShape, usesPackedTextures))
        .join('\n');
    const outTexShape = outputShape.texShape;
    const glsl = Object(_glsl_version__WEBPACK_IMPORTED_MODULE_1__["getGlslDifferences"])();
    const floatTextureSampleSnippet = getFloatTextureSampleSnippet(glsl);
    let outputSamplingSnippet;
    let floatTextureSetOutputSnippet;
    let shaderPrefix = getShaderPrefix(glsl);
    if (outputShape.isPacked) {
        outputSamplingSnippet =
            getPackedOutputSamplingSnippet(outputShape.logicalShape, outTexShape);
        floatTextureSetOutputSnippet = getFloatTextureSetRGBASnippet(glsl);
    }
    else {
        outputSamplingSnippet =
            getOutputSamplingSnippet(outputShape.logicalShape, outTexShape);
        floatTextureSetOutputSnippet = getFloatTextureSetRSnippet(glsl);
    }
    if (usesPackedTextures) {
        shaderPrefix += SHADER_PACKED_PREFIX;
    }
    const source = [
        shaderPrefix, floatTextureSampleSnippet, floatTextureSetOutputSnippet,
        inputPrefixSnippet, outputSamplingSnippet, inputSamplingSnippet, userCode
    ].join('\n');
    return source;
}
function getSamplerFromInInfo(inInfo) {
    const shape = inInfo.shapeInfo.logicalShape;
    switch (shape.length) {
        case 0:
            return getSamplerScalar(inInfo);
        case 1:
            return getSampler1D(inInfo);
        case 2:
            return getSampler2D(inInfo);
        case 3:
            return getSampler3D(inInfo);
        case 4:
            return getSampler4D(inInfo);
        case 5:
            return getSampler5D(inInfo);
        case 6:
            return getSampler6D(inInfo);
        default:
            throw new Error(`${shape.length}-D input sampling` +
                ` is not yet supported`);
    }
}
function getPackedSamplerFromInInfo(inInfo) {
    const shape = inInfo.shapeInfo.logicalShape;
    switch (shape.length) {
        case 0:
            return getPackedSamplerScalar(inInfo);
        case 1:
            return getPackedSampler1D(inInfo);
        case 2:
            return getPackedSampler2D(inInfo);
        case 3:
            return getPackedSampler3D(inInfo);
        default:
            return getPackedSamplerND(inInfo);
    }
}
function getInputSamplingSnippet(inInfo, outShapeInfo, usesPackedTextures = false) {
    let res = '';
    if (usesPackedTextures) {
        res += getPackedSamplerFromInInfo(inInfo);
    }
    else {
        res += getSamplerFromInInfo(inInfo);
    }
    const inShape = inInfo.shapeInfo.logicalShape;
    const outShape = outShapeInfo.logicalShape;
    if (inShape.length <= outShape.length) {
        if (usesPackedTextures) {
            res += getPackedSamplerAtOutputCoords(inInfo, outShapeInfo);
        }
        else {
            res += getSamplerAtOutputCoords(inInfo, outShapeInfo);
        }
    }
    return res;
}
function getPackedOutputSamplingSnippet(outShape, outTexShape) {
    switch (outShape.length) {
        case 0:
            return getOutputScalarCoords();
        case 1:
            return getOutputPacked1DCoords(outShape, outTexShape);
        case 2:
            return getOutputPacked2DCoords(outShape, outTexShape);
        case 3:
            return getOutputPacked3DCoords(outShape, outTexShape);
        default:
            return getOutputPackedNDCoords(outShape, outTexShape);
    }
}
function getOutputSamplingSnippet(outShape, outTexShape) {
    switch (outShape.length) {
        case 0:
            return getOutputScalarCoords();
        case 1:
            return getOutput1DCoords(outShape, outTexShape);
        case 2:
            return getOutput2DCoords(outShape, outTexShape);
        case 3:
            return getOutput3DCoords(outShape, outTexShape);
        case 4:
            return getOutput4DCoords(outShape, outTexShape);
        case 5:
            return getOutput5DCoords(outShape, outTexShape);
        case 6:
            return getOutput6DCoords(outShape, outTexShape);
        default:
            throw new Error(`${outShape.length}-D output sampling is not yet supported`);
    }
}
function getFloatTextureSampleSnippet(glsl) {
    return `
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return ${glsl.texture2D}(textureSampler, uv).r;
    }
  `;
}
function getFloatTextureSetRSnippet(glsl) {
    return `
    void setOutput(float val) {
      ${glsl.output} = vec4(val, 0, 0, 0);
    }
  `;
}
function getFloatTextureSetRGBASnippet(glsl) {
    return `
    void setOutput(vec4 val) {
      ${glsl.output} = val;
    }
  `;
}
function getShaderPrefix(glsl) {
    const SHADER_PREFIX = `${glsl.version}
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    ${glsl.varyingFs} vec2 resultUV;
    ${glsl.defineOutput}
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    ${glsl.defineSpecialNaN}
    ${glsl.defineSpecialInf}
    ${glsl.defineRound}

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    ${SAMPLE_1D_SNIPPET}
    ${SAMPLE_2D_SNIPPET}
    ${SAMPLE_3D_SNIPPET}
  `;
    return SHADER_PREFIX;
}
const SAMPLE_1D_SNIPPET = `
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`;
const SAMPLE_2D_SNIPPET = `
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`;
const SAMPLE_3D_SNIPPET = `
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`;
const SHADER_PACKED_PREFIX = `
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`;
function getOutputScalarCoords() {
    return `
    int getOutputCoords() {
      return 0;
    }
  `;
}
function getOutputPacked1DCoords(shape, texShape) {
    const packedTexShape = [Math.ceil(texShape[0] / 2), Math.ceil(texShape[1] / 2)];
    if (packedTexShape[0] === 1) {
        return `
      int getOutputCoords() {
        return 2 * int(resultUV.x * ${packedTexShape[1]}.0);
      }
    `;
    }
    if (packedTexShape[1] === 1) {
        return `
      int getOutputCoords() {
        return 2 * int(resultUV.y * ${packedTexShape[0]}.0);
      }
    `;
    }
    return `
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${packedTexShape[0]}, ${packedTexShape[1]}));
      return 2 * (resTexRC.x * ${packedTexShape[1]} + resTexRC.y);
    }
  `;
}
function getOutput1DCoords(shape, texShape) {
    if (texShape[0] === 1) {
        return `
      int getOutputCoords() {
        return int(resultUV.x * ${texShape[1]}.0);
      }
    `;
    }
    if (texShape[1] === 1) {
        return `
      int getOutputCoords() {
        return int(resultUV.y * ${texShape[0]}.0);
      }
    `;
    }
    return `
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${texShape[0]}, ${texShape[1]}));
      return resTexRC.x * ${texShape[1]} + resTexRC.y;
    }
  `;
}
function getOutputPacked3DCoords(shape, texShape) {
    const packedTexShape = [Math.ceil(texShape[0] / 2), Math.ceil(texShape[1] / 2)];
    const texelsInLogicalRow = Math.ceil(shape[2] / 2);
    const texelsInBatch = texelsInLogicalRow * Math.ceil(shape[1] / 2);
    return `
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${packedTexShape[0]}, ${packedTexShape[1]}));
      int index = resTexRC.x * ${packedTexShape[1]} + resTexRC.y;

      int b = index / ${texelsInBatch};
      index -= b * ${texelsInBatch};

      int r = 2 * (index / ${texelsInLogicalRow});
      int c = imod(index, ${texelsInLogicalRow}) * 2;

      return ivec3(b, r, c);
    }
  `;
}
function getOutput3DCoords(shape, texShape) {
    const coordsFromIndexSnippet = _shader_compiler_util__WEBPACK_IMPORTED_MODULE_2__["getLogicalCoordinatesFromFlatIndex"](['r', 'c', 'd'], shape);
    return `
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${texShape[0]}, ${texShape[1]}));
      int index = resTexRC.x * ${texShape[1]} + resTexRC.y;
      ${coordsFromIndexSnippet}
      return ivec3(r, c, d);
    }
  `;
}
function getOutputPackedNDCoords(shape, texShape) {
    const packedTexShape = [Math.ceil(texShape[0] / 2), Math.ceil(texShape[1] / 2)];
    const texelsInLogicalRow = Math.ceil(shape[shape.length - 1] / 2);
    const texelsInBatch = texelsInLogicalRow * Math.ceil(shape[shape.length - 2] / 2);
    let texelsInBatchN = texelsInBatch;
    let batches = ``;
    let coords = 'b, r, c';
    for (let b = 2; b < shape.length - 1; b++) {
        texelsInBatchN *= shape[shape.length - b - 1];
        batches = `
      int b${b} = index / ${texelsInBatchN};
      index -= b${b} * ${texelsInBatchN};
    ` + batches;
        coords = `b${b}, ` + coords;
    }
    return `
    ivec${shape.length} getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${packedTexShape[0]}, ${packedTexShape[1]}));
      int index = resTexRC.x * ${packedTexShape[1]} + resTexRC.y;

      ${batches}

      int b = index / ${texelsInBatch};
      index -= b * ${texelsInBatch};

      int r = 2 * (index / ${texelsInLogicalRow});
      int c = imod(index, ${texelsInLogicalRow}) * 2;

      return ivec${shape.length}(${coords});
    }
  `;
}
function getOutput4DCoords(shape, texShape) {
    const coordsFromIndexSnippet = _shader_compiler_util__WEBPACK_IMPORTED_MODULE_2__["getLogicalCoordinatesFromFlatIndex"](['r', 'c', 'd', 'd2'], shape);
    return `
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${texShape[0]}, ${texShape[1]}));
      int index = resTexRC.x * ${texShape[1]} + resTexRC.y;
      ${coordsFromIndexSnippet}
      return ivec4(r, c, d, d2);
    }
  `;
}
function getOutput5DCoords(shape, texShape) {
    const coordsFromIndexSnippet = _shader_compiler_util__WEBPACK_IMPORTED_MODULE_2__["getLogicalCoordinatesFromFlatIndex"](['r', 'c', 'd', 'd2', 'd3'], shape);
    return `
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(${texShape[0]},
                             ${texShape[1]}));

      int index = resTexRC.x * ${texShape[1]} + resTexRC.y;

      ${coordsFromIndexSnippet}

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `;
}
function getOutput6DCoords(shape, texShape) {
    const coordsFromIndexSnippet = _shader_compiler_util__WEBPACK_IMPORTED_MODULE_2__["getLogicalCoordinatesFromFlatIndex"](['r', 'c', 'd', 'd2', 'd3', 'd4'], shape);
    return `
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${texShape[0]}, ${texShape[1]}));
      int index = resTexRC.x * ${texShape[1]} + resTexRC.y;

      ${coordsFromIndexSnippet}

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `;
}
function getOutputPacked2DCoords(shape, texShape) {
    const packedTexShape = [Math.ceil(texShape[0] / 2), Math.ceil(texShape[1] / 2)];
    if (_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].arraysEqual(shape, texShape)) {
        return `
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(${packedTexShape[0]}, ${packedTexShape[1]}));
      }
    `;
    }
    // texels needed to accommodate a logical row
    const texelsInLogicalRow = Math.ceil(shape[1] / 2);
    /**
     * getOutputCoords
     *
     * resTexRC: The rows and columns of the texels. If you move over one
     * texel to the right in the packed texture, you are moving over one column
     * (not two).
     *
     * index: The texel index
     */
    return `
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${packedTexShape[0]}, ${packedTexShape[1]}));

      int index = resTexRC.x * ${packedTexShape[1]} + resTexRC.y;
      int r = 2 * (index / ${texelsInLogicalRow});
      int c = imod(index, ${texelsInLogicalRow}) * 2;

      return ivec2(r, c);
    }
  `;
}
function getOutput2DCoords(shape, texShape) {
    if (_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].arraysEqual(shape, texShape)) {
        return `
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(${texShape[0]}, ${texShape[1]}));
      }
    `;
    }
    if (shape[1] === 1) {
        return `
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${texShape[0]}, ${texShape[1]}));
        int index = resTexRC.x * ${texShape[1]} + resTexRC.y;
        return ivec2(index, 0);
      }
    `;
    }
    if (shape[0] === 1) {
        return `
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${texShape[0]}, ${texShape[1]}));
        int index = resTexRC.x * ${texShape[1]} + resTexRC.y;
        return ivec2(0, index);
      }
    `;
    }
    return `
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${texShape[0]}, ${texShape[1]}));
      int index = resTexRC.x * ${texShape[1]} + resTexRC.y;
      int r = index / ${shape[1]};
      int c = index - r * ${shape[1]};
      return ivec2(r, c);
    }
  `;
}
function getFlatOffsetUniformName(texName) {
    return `offset${texName}`;
}
function getPackedSamplerScalar(inputInfo) {
    const texName = inputInfo.name;
    const funcName = 'get' + texName.charAt(0).toUpperCase() + texName.slice(1);
    const glsl = Object(_glsl_version__WEBPACK_IMPORTED_MODULE_1__["getGlslDifferences"])();
    return `
    vec4 ${funcName}() {
      return ${glsl.texture2D}(${texName}, halfCR);
    }
  `;
}
function getSamplerScalar(inputInfo) {
    const texName = inputInfo.name;
    const funcName = 'get' + texName.charAt(0).toUpperCase() + texName.slice(1);
    if (inputInfo.shapeInfo.isUniform) {
        return `float ${funcName}() {return ${texName};}`;
    }
    const [texNumR, texNumC] = inputInfo.shapeInfo.texShape;
    if (texNumR === 1 && texNumC === 1) {
        return `
      float ${funcName}() {
        return sampleTexture(${texName}, halfCR);
      }
    `;
    }
    const [tNumR, tNumC] = inputInfo.shapeInfo.texShape;
    const offset = getFlatOffsetUniformName(texName);
    return `
    float ${funcName}() {
      vec2 uv = uvFromFlat(${tNumR}, ${tNumC}, ${offset});
      return sampleTexture(${texName}, uv);
    }
  `;
}
function getPackedSampler1D(inputInfo) {
    const texName = inputInfo.name;
    const funcName = 'get' + texName.charAt(0).toUpperCase() + texName.slice(1);
    const texShape = inputInfo.shapeInfo.texShape;
    const packedTexShape = [Math.ceil(texShape[0] / 2), Math.ceil(texShape[1] / 2)];
    const glsl = Object(_glsl_version__WEBPACK_IMPORTED_MODULE_1__["getGlslDifferences"])();
    return `
    vec4 ${funcName}(int index) {
      vec2 uv = packedUVfrom1D(
        ${packedTexShape[0]}, ${packedTexShape[1]}, index);
      return ${glsl.texture2D}(${texName}, uv);
    }
  `;
}
function getSampler1D(inputInfo) {
    const texName = inputInfo.name;
    const funcName = 'get' + texName.charAt(0).toUpperCase() + texName.slice(1);
    if (inputInfo.shapeInfo.isUniform) {
        // Uniform arrays will be less than 65505 (no risk of float16 overflow).
        return `
      float ${funcName}(int index) {
        ${getUniformSampler(inputInfo)}
      }
    `;
    }
    const texShape = inputInfo.shapeInfo.texShape;
    const tNumR = texShape[0];
    const tNumC = texShape[1];
    if (tNumC === 1 && tNumR === 1) {
        return `
      float ${funcName}(int index) {
        return sampleTexture(${texName}, halfCR);
      }
    `;
    }
    const offset = getFlatOffsetUniformName(texName);
    if (tNumC === 1) {
        return `
      float ${funcName}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${offset}) + 0.5) / ${tNumR}.0);
        return sampleTexture(${texName}, uv);
      }
    `;
    }
    if (tNumR === 1) {
        return `
      float ${funcName}(int index) {
        vec2 uv = vec2((float(index + ${offset}) + 0.5) / ${tNumC}.0, 0.5);
        return sampleTexture(${texName}, uv);
      }
    `;
    }
    return `
    float ${funcName}(int index) {
      vec2 uv = uvFromFlat(${tNumR}, ${tNumC}, index + ${offset});
      return sampleTexture(${texName}, uv);
    }
  `;
}
function getPackedSampler2D(inputInfo) {
    const shape = inputInfo.shapeInfo.logicalShape;
    const texName = inputInfo.name;
    const funcName = 'get' + texName.charAt(0).toUpperCase() + texName.slice(1);
    const texShape = inputInfo.shapeInfo.texShape;
    const texNumR = texShape[0];
    const texNumC = texShape[1];
    const glsl = Object(_glsl_version__WEBPACK_IMPORTED_MODULE_1__["getGlslDifferences"])();
    if (texShape != null && _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].arraysEqual(shape, texShape)) {
        return `
      vec4 ${funcName}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${texNumC}.0, ${texNumR}.0);

        return ${glsl.texture2D}(${texName}, uv);
      }
    `;
    }
    const packedTexShape = [Math.ceil(texShape[0] / 2), Math.ceil(texShape[1] / 2)];
    const valuesPerRow = Math.ceil(shape[1] / 2);
    return `
    vec4 ${funcName}(int row, int col) {
      vec2 uv = packedUVfrom2D(${valuesPerRow}, ${packedTexShape[0]}, ${packedTexShape[1]}, row, col);
      return ${glsl.texture2D}(${texName}, uv);
    }
  `;
}
function getSampler2D(inputInfo) {
    const shape = inputInfo.shapeInfo.logicalShape;
    const texName = inputInfo.name;
    const funcName = 'get' + texName.charAt(0).toUpperCase() + texName.slice(1);
    const texShape = inputInfo.shapeInfo.texShape;
    if (texShape != null && _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].arraysEqual(shape, texShape)) {
        const texNumR = texShape[0];
        const texNumC = texShape[1];
        return `
    float ${funcName}(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(${texNumC}.0, ${texNumR}.0);
      return sampleTexture(${texName}, uv);
    }
  `;
    }
    const { newShape, keptDims } = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].squeezeShape(shape);
    const squeezedShape = newShape;
    if (squeezedShape.length < shape.length) {
        const newInputInfo = squeezeInputInfo(inputInfo, squeezedShape);
        const params = ['row', 'col'];
        return `
      ${getSamplerFromInInfo(newInputInfo)}
      float ${funcName}(int row, int col) {
        return ${funcName}(${getSqueezedParams(params, keptDims)});
      }
    `;
    }
    if (inputInfo.shapeInfo.isUniform) {
        // Uniform arrays will be less than 65505 (no risk of float16 overflow).
        return `
      float ${funcName}(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(${shape[1]}, 1)));
        ${getUniformSampler(inputInfo)}
      }
    `;
    }
    const texNumR = texShape[0];
    const texNumC = texShape[1];
    const offset = getFlatOffsetUniformName(texName);
    if (texNumC === 1) {
        // index is used directly as physical (no risk of float16 overflow).
        return `
    float ${funcName}(int row, int col) {
      float index = dot(vec3(row, col, ${offset}), vec3(${shape[1]}, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / ${texNumR}.0);
      return sampleTexture(${texName}, uv);
    }
  `;
    }
    if (texNumR === 1) {
        // index is used directly as physical (no risk of float16 overflow).
        return `
    float ${funcName}(int row, int col) {
      float index = dot(vec3(row, col, ${offset}), vec3(${shape[1]}, 1, 1));
      vec2 uv = vec2((index + 0.5) / ${texNumC}.0, 0.5);
      return sampleTexture(${texName}, uv);
    }
  `;
    }
    return `
  float ${funcName}(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * ${shape[1]} + col + ${offset};
    vec2 uv = uvFromFlat(${texNumR}, ${texNumC}, index);
    return sampleTexture(${texName}, uv);
  }
`;
}
function getPackedSampler3D(inputInfo) {
    const shape = inputInfo.shapeInfo.logicalShape;
    const texName = inputInfo.name;
    const funcName = 'get' + texName.charAt(0).toUpperCase() + texName.slice(1);
    const texShape = inputInfo.shapeInfo.texShape;
    const packedTexShape = [Math.ceil(texShape[0] / 2), Math.ceil(texShape[1] / 2)];
    if (shape[0] === 1) {
        const squeezedShape = shape.slice(1);
        const keptDims = [1, 2];
        const newInputInfo = squeezeInputInfo(inputInfo, squeezedShape);
        const params = ['b', 'row', 'col'];
        return `
        ${getPackedSamplerFromInInfo(newInputInfo)}
        vec4 ${funcName}(int b, int row, int col) {
          return ${funcName}(${getSqueezedParams(params, keptDims)});
        }
      `;
    }
    const texNumR = packedTexShape[0];
    const texNumC = packedTexShape[1];
    const valuesPerRow = Math.ceil(shape[2] / 2);
    const texelsInBatch = valuesPerRow * Math.ceil(shape[1] / 2);
    const glsl = Object(_glsl_version__WEBPACK_IMPORTED_MODULE_1__["getGlslDifferences"])();
    return `
    vec4 ${funcName}(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        ${texNumR}, ${texNumC}, ${texelsInBatch}, ${valuesPerRow}, b, row, col);
      return ${glsl.texture2D}(${texName}, uv);
    }
  `;
}
function getSampler3D(inputInfo) {
    const shape = inputInfo.shapeInfo.logicalShape;
    const texName = inputInfo.name;
    const funcName = 'get' + texName.charAt(0).toUpperCase() + texName.slice(1);
    const stride0 = shape[1] * shape[2];
    const stride1 = shape[2];
    const { newShape, keptDims } = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].squeezeShape(shape);
    const squeezedShape = newShape;
    if (squeezedShape.length < shape.length) {
        const newInputInfo = squeezeInputInfo(inputInfo, squeezedShape);
        const params = ['row', 'col', 'depth'];
        return `
        ${getSamplerFromInInfo(newInputInfo)}
        float ${funcName}(int row, int col, int depth) {
          return ${funcName}(${getSqueezedParams(params, keptDims)});
        }
      `;
    }
    if (inputInfo.shapeInfo.isUniform) {
        // Uniform arrays will be less than 65505 (no risk of float16 overflow).
        return `
      float ${funcName}(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(${stride0}, ${stride1}, 1)));
        ${getUniformSampler(inputInfo)}
      }
    `;
    }
    const texShape = inputInfo.shapeInfo.texShape;
    const texNumR = texShape[0];
    const texNumC = texShape[1];
    const flatOffset = inputInfo.shapeInfo.flatOffset;
    if (texNumC === stride0 && flatOffset == null) {
        // texC is used directly as physical (no risk of float16 overflow).
        return `
        float ${funcName}(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(${stride1}, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(${texNumC}.0, ${texNumR}.0);
          return sampleTexture(${texName}, uv);
        }
      `;
    }
    if (texNumC === stride1 && flatOffset == null) {
        // texR is used directly as physical (no risk of float16 overflow).
        return `
    float ${funcName}(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(${shape[1]}, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${texNumC}.0, ${texNumR}.0);
      return sampleTexture(${texName}, uv);
    }
  `;
    }
    const offset = getFlatOffsetUniformName(texName);
    return `
      float ${funcName}(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${stride0} + col * ${stride1} + depth + ${offset};
        vec2 uv = uvFromFlat(${texNumR}, ${texNumC}, index);
        return sampleTexture(${texName}, uv);
      }
  `;
}
function getPackedSamplerND(inputInfo) {
    const shape = inputInfo.shapeInfo.logicalShape;
    const rank = shape.length;
    const texName = inputInfo.name;
    const funcName = 'get' + texName.charAt(0).toUpperCase() + texName.slice(1);
    const texShape = inputInfo.shapeInfo.texShape;
    const packedTexShape = [Math.ceil(texShape[0] / 2), Math.ceil(texShape[1] / 2)];
    const texNumR = packedTexShape[0];
    const texNumC = packedTexShape[1];
    const valuesPerRow = Math.ceil(shape[rank - 1] / 2);
    let texelsInBatch = valuesPerRow * Math.ceil(shape[rank - 2] / 2);
    let params = `int b, int row, int col`;
    let index = `b * ${texelsInBatch} + (row / 2) * ${valuesPerRow} + (col / 2)`;
    for (let b = 2; b < rank - 1; b++) {
        params = `int b${b}, ` + params;
        texelsInBatch *= shape[rank - b - 1];
        index = `b${b} * ${texelsInBatch} + ` + index;
    }
    const glsl = Object(_glsl_version__WEBPACK_IMPORTED_MODULE_1__["getGlslDifferences"])();
    return `
    vec4 ${funcName}(${params}) {
      int index = ${index};
      int texR = index / ${texNumC};
      int texC = index - texR * ${texNumC};
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${texNumC}, ${texNumR});
      return ${glsl.texture2D}(${texName}, uv);
    }
  `;
}
function getSampler4D(inputInfo) {
    const shape = inputInfo.shapeInfo.logicalShape;
    const texName = inputInfo.name;
    const funcName = 'get' + texName.charAt(0).toUpperCase() + texName.slice(1);
    const stride2 = shape[3];
    const stride1 = shape[2] * stride2;
    const stride0 = shape[1] * stride1;
    const { newShape, keptDims } = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].squeezeShape(shape);
    if (newShape.length < shape.length) {
        const newInputInfo = squeezeInputInfo(inputInfo, newShape);
        const params = ['row', 'col', 'depth', 'depth2'];
        return `
      ${getSamplerFromInInfo(newInputInfo)}
      float ${funcName}(int row, int col, int depth, int depth2) {
        return ${funcName}(${getSqueezedParams(params, keptDims)});
      }
    `;
    }
    if (inputInfo.shapeInfo.isUniform) {
        // Uniform arrays will be less than 65505 (no risk of float16 overflow).
        return `
      float ${funcName}(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(${stride0}, ${stride1}, ${stride2}, 1)));
        ${getUniformSampler(inputInfo)}
      }
    `;
    }
    const flatOffset = inputInfo.shapeInfo.flatOffset;
    const texShape = inputInfo.shapeInfo.texShape;
    const texNumR = texShape[0];
    const texNumC = texShape[1];
    if (texNumC === stride0 && flatOffset == null) {
        // texC is used directly as physical (no risk of float16 overflow).
        return `
      float ${funcName}(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(${stride1}, ${stride2}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${texNumC}.0, ${texNumR}.0);
        return sampleTexture(${texName}, uv);
      }
    `;
    }
    if (texNumC === stride2 && flatOffset == null) {
        // texR is used directly as physical (no risk of float16 overflow).
        return `
      float ${funcName}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${shape[1] * shape[2]}, ${shape[2]}, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${texNumC}.0, ${texNumR}.0);
        return sampleTexture(${texName}, uv);
      }
    `;
    }
    const offset = getFlatOffsetUniformName(texName);
    return `
    float ${funcName}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${stride0} + col * ${stride1} +
          depth * ${stride2} + depth2;
      vec2 uv = uvFromFlat(${texNumR}, ${texNumC}, index + ${offset});
      return sampleTexture(${texName}, uv);
    }
  `;
}
function getSampler5D(inputInfo) {
    const shape = inputInfo.shapeInfo.logicalShape;
    const texName = inputInfo.name;
    const funcName = 'get' + texName.charAt(0).toUpperCase() + texName.slice(1);
    const stride3 = shape[4];
    const stride2 = shape[3] * stride3;
    const stride1 = shape[2] * stride2;
    const stride0 = shape[1] * stride1;
    const { newShape, keptDims } = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].squeezeShape(shape);
    if (newShape.length < shape.length) {
        const newInputInfo = squeezeInputInfo(inputInfo, newShape);
        const params = ['row', 'col', 'depth', 'depth2', 'depth3'];
        return `
      ${getSamplerFromInInfo(newInputInfo)}
      float ${funcName}(int row, int col, int depth, int depth2, int depth3) {
        return ${funcName}(${getSqueezedParams(params, keptDims)});
      }
    `;
    }
    if (inputInfo.shapeInfo.isUniform) {
        // Uniform arrays will be less than 65505 (no risk of float16 overflow).
        return `
      float ${funcName}(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(${stride0}, ${stride1}, ${stride2}, ${stride3})) +
          depth3;
        ${getUniformSampler(inputInfo)}
      }
    `;
    }
    const flatOffset = inputInfo.shapeInfo.flatOffset;
    const texShape = inputInfo.shapeInfo.texShape;
    const texNumR = texShape[0];
    const texNumC = texShape[1];
    if (texNumC === stride0 && flatOffset == null) {
        // texC is used directly as physical (no risk of float16 overflow).
        return `
      float ${funcName}(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(${stride1}, ${stride2}, ${stride3}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${texNumC}.0, ${texNumR}.0);
        return sampleTexture(${texName}, uv);
      }
    `;
    }
    if (texNumC === stride3 && flatOffset == null) {
        // texR is used directly as physical (no risk of float16 overflow).
        return `
      float ${funcName}(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(${shape[1] * shape[2] * shape[3]},
               ${shape[2] * shape[3]}, ${shape[3]}, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${texNumC}.0, ${texNumR}.0);
        return sampleTexture(${texName}, uv);
      }
    `;
    }
    const offset = getFlatOffsetUniformName(texName);
    return `
    float ${funcName}(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${stride0} + col * ${stride1} + depth * ${stride2} +
          depth2 * ${stride3} + depth3 + ${offset};
      vec2 uv = uvFromFlat(${texNumR}, ${texNumC}, index);
      return sampleTexture(${texName}, uv);
    }
  `;
}
function getSampler6D(inputInfo) {
    const shape = inputInfo.shapeInfo.logicalShape;
    const texName = inputInfo.name;
    const funcName = 'get' + texName.charAt(0).toUpperCase() + texName.slice(1);
    const { newShape, keptDims } = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].squeezeShape(shape);
    if (newShape.length < shape.length) {
        const newInputInfo = squeezeInputInfo(inputInfo, newShape);
        const params = ['row', 'col', 'depth', 'depth2', 'depth3', 'depth4'];
        return `
      ${getSamplerFromInInfo(newInputInfo)}
      float ${funcName}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return ${funcName}(${getSqueezedParams(params, keptDims)});
      }
    `;
    }
    const stride4 = shape[5];
    const stride3 = shape[4] * stride4;
    const stride2 = shape[3] * stride3;
    const stride1 = shape[2] * stride2;
    const stride0 = shape[1] * stride1;
    if (inputInfo.shapeInfo.isUniform) {
        // Uniform arrays will be less than 65505 (no risk of float16 overflow).
        return `
      float ${funcName}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(${stride0}, ${stride1}, ${stride2}, ${stride3})) +
          dot(
            vec2(depth3, depth4),
            vec2(${stride4}, 1)));
        ${getUniformSampler(inputInfo)}
      }
    `;
    }
    const flatOffset = inputInfo.shapeInfo.flatOffset;
    const texShape = inputInfo.shapeInfo.texShape;
    const texNumR = texShape[0];
    const texNumC = texShape[1];
    if (texNumC === stride0 && flatOffset == null) {
        // texC is used directly as physical (no risk of float16 overflow).
        return `
      float ${funcName}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(${stride1}, ${stride2}, ${stride3}, ${stride4})) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${texNumC}.0, ${texNumR}.0);
        return sampleTexture(${texName}, uv);
      }
    `;
    }
    if (texNumC === stride4 && flatOffset == null) {
        // texR is used directly as physical (no risk of float16 overflow).
        return `
      float ${funcName}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(${shape[1] * shape[2] * shape[3] * shape[4]},
               ${shape[2] * shape[3] * shape[4]},
               ${shape[3] * shape[4]},
               ${shape[4]})) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${texNumC}.0, ${texNumR}.0);
        return sampleTexture(${texName}, uv);
      }
    `;
    }
    const offset = getFlatOffsetUniformName(texName);
    return `
    float ${funcName}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${stride0} + col * ${stride1} + depth * ${stride2} +
          depth2 * ${stride3} + depth3 * ${stride4} + depth4 + ${offset};
      vec2 uv = uvFromFlat(${texNumR}, ${texNumC}, index);
      return sampleTexture(${texName}, uv);
    }
  `;
}
function getUniformSampler(inputInfo) {
    const texName = inputInfo.name;
    const inSize = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].sizeFromShape(inputInfo.shapeInfo.logicalShape);
    if (inSize < 2) {
        return `return ${texName};`;
    }
    return `
    for (int i = 0; i < ${inSize}; i++) {
      if (i == index) {
        return ${texName}[i];
      }
    }
  `;
}
function getPackedSamplerAtOutputCoords(inputInfo, outShapeInfo) {
    const texName = inputInfo.name;
    const texFuncSnippet = texName.charAt(0).toUpperCase() + texName.slice(1);
    const funcName = 'get' + texFuncSnippet + 'AtOutCoords';
    const inRank = inputInfo.shapeInfo.logicalShape.length;
    const outRank = outShapeInfo.logicalShape.length;
    const broadcastDims = getBroadcastDims(inputInfo.shapeInfo.logicalShape, outShapeInfo.logicalShape);
    const type = getCoordsDataType(outRank);
    const rankDiff = outRank - inRank;
    let coordsSnippet;
    const fields = ['x', 'y', 'z', 'w', 'u', 'v'];
    if (inRank === 0) {
        coordsSnippet = '';
    }
    else if (outRank < 2 && broadcastDims.length >= 1) {
        coordsSnippet = 'coords = 0;';
    }
    else {
        coordsSnippet =
            broadcastDims.map(d => `coords.${fields[d + rankDiff]} = 0;`)
                .join('\n');
    }
    let unpackedCoordsSnippet = '';
    if (outRank < 2 && inRank > 0) {
        unpackedCoordsSnippet = 'coords';
    }
    else {
        unpackedCoordsSnippet = inputInfo.shapeInfo.logicalShape
            .map((s, i) => `coords.${fields[i + rankDiff]}`)
            .join(', ');
    }
    let output = `return outputValue;`;
    const inSize = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].sizeFromShape(inputInfo.shapeInfo.logicalShape);
    const isInputScalar = inSize === 1;
    const outSize = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].sizeFromShape(outShapeInfo.logicalShape);
    const isOutputScalar = outSize === 1;
    if (inRank === 1 && !isInputScalar && !isOutputScalar) {
        output = `
      return vec4(outputValue.xy, outputValue.xy);
    `;
    }
    else if (isInputScalar && !isOutputScalar) {
        if (outRank === 1) {
            output = `
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `;
        }
        else {
            output = `
        return vec4(outputValue.x);
      `;
        }
    }
    else if (broadcastDims.length) {
        const rows = inRank - 2;
        const cols = inRank - 1;
        if (broadcastDims.indexOf(rows) > -1 && broadcastDims.indexOf(cols) > -1) {
            output = `return vec4(outputValue.x);`;
        }
        else if (broadcastDims.indexOf(rows) > -1) {
            output = `return vec4(outputValue.x, outputValue.y, ` +
                `outputValue.x, outputValue.y);`;
        }
        else if (broadcastDims.indexOf(cols) > -1) {
            output = `return vec4(outputValue.xx, outputValue.zz);`;
        }
    }
    return `
    vec4 ${funcName}() {
      ${type} coords = getOutputCoords();
      ${coordsSnippet}
      vec4 outputValue = get${texFuncSnippet}(${unpackedCoordsSnippet});
      ${output}
    }
  `;
}
function getSamplerAtOutputCoords(inputInfo, outShapeInfo) {
    const texName = inputInfo.name;
    const texFuncSnippet = texName.charAt(0).toUpperCase() + texName.slice(1);
    const funcName = 'get' + texFuncSnippet + 'AtOutCoords';
    const outTexShape = outShapeInfo.texShape;
    const inTexShape = inputInfo.shapeInfo.texShape;
    const inRank = inputInfo.shapeInfo.logicalShape.length;
    const outRank = outShapeInfo.logicalShape.length;
    if (!inputInfo.shapeInfo.isUniform && inRank === outRank &&
        inputInfo.shapeInfo.flatOffset == null &&
        _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].arraysEqual(inTexShape, outTexShape)) {
        return `
      float ${funcName}() {
        return sampleTexture(${texName}, resultUV);
      }
    `;
    }
    const type = getCoordsDataType(outRank);
    const broadcastDims = getBroadcastDims(inputInfo.shapeInfo.logicalShape, outShapeInfo.logicalShape);
    const rankDiff = outRank - inRank;
    let coordsSnippet;
    const fields = ['x', 'y', 'z', 'w', 'u', 'v'];
    if (inRank === 0) {
        coordsSnippet = '';
    }
    else if (outRank < 2 && broadcastDims.length >= 1) {
        coordsSnippet = 'coords = 0;';
    }
    else {
        coordsSnippet =
            broadcastDims.map(d => `coords.${fields[d + rankDiff]} = 0;`)
                .join('\n');
    }
    let unpackedCoordsSnippet = '';
    if (outRank < 2 && inRank > 0) {
        unpackedCoordsSnippet = 'coords';
    }
    else {
        unpackedCoordsSnippet = inputInfo.shapeInfo.logicalShape
            .map((s, i) => `coords.${fields[i + rankDiff]}`)
            .join(', ');
    }
    return `
    float ${funcName}() {
      ${type} coords = getOutputCoords();
      ${coordsSnippet}
      return get${texFuncSnippet}(${unpackedCoordsSnippet});
    }
  `;
}
function getCoordsDataType(rank) {
    if (rank <= 1) {
        return 'int';
    }
    else if (rank === 2) {
        return 'ivec2';
    }
    else if (rank === 3) {
        return 'ivec3';
    }
    else if (rank === 4) {
        return 'ivec4';
    }
    else if (rank === 5) {
        return 'ivec5';
    }
    else if (rank === 6) {
        return 'ivec6';
    }
    else {
        throw Error(`GPU for rank ${rank} is not yet supported`);
    }
}
/** Returns a new input info (a copy) that has a squeezed logical shape. */
function squeezeInputInfo(inInfo, squeezedShape) {
    // Deep copy.
    const newInputInfo = JSON.parse(JSON.stringify(inInfo));
    newInputInfo.shapeInfo.logicalShape = squeezedShape;
    return newInputInfo;
}
function getSqueezedParams(params, keptDims) {
    return keptDims.map(d => params[d]).join(', ');
}
//# sourceMappingURL=shader_compiler.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/shader_compiler_util.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/shader_compiler_util.js ***!
  \**********************************************************************************/
/*! exports provided: getLogicalCoordinatesFromFlatIndex, dotify, getFlatIndexFrom3D, ENCODE_FLOAT_SNIPPET */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLogicalCoordinatesFromFlatIndex", function() { return getLogicalCoordinatesFromFlatIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dotify", function() { return dotify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFlatIndexFrom3D", function() { return getFlatIndexFrom3D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENCODE_FLOAT_SNIPPET", function() { return ENCODE_FLOAT_SNIPPET; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

/**
 * Produces GLSL code that derives logical coordinates from a flat
 * index. The code performs integer division with each stride and decrements
 * the index until the index equals the final dimension coordinate.
 */
function getLogicalCoordinatesFromFlatIndex(coords, shape, index = 'index') {
    const strides = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].computeStrides(shape);
    return strides
        .map((stride, i) => {
        const line1 = `int ${coords[i]} = ${index} / ${stride}`;
        const line2 = i === strides.length - 1 ?
            `int ${coords[i + 1]} = ${index} - ${coords[i]} * ${stride}` :
            `index -= ${coords[i]} * ${stride}`;
        return `${line1}; ${line2};`;
    })
        .join('');
}
function buildVec(x) {
    if (x.length === 1) {
        return `${x[0]}`;
    }
    return `vec${x.length}(${x.join(',')})`;
}
/**
 * Produces GLSL code that computes the dot product of the input x and y
 * vectors. Handles splitting inputs into increments of vec4s when necessary.
 */
function dotify(x, y) {
    if (x.length !== y.length) {
        throw new Error(`Vectors to be dotted must be of the same length -` +
            `got ${x.length} and ${y.length}`);
    }
    const slices = [];
    const nearestVec4 = Math.floor(x.length / 4);
    const nearestVec4Remainder = x.length % 4;
    for (let i = 0; i < nearestVec4; i++) {
        const xSlice = x.slice(i * 4, i * 4 + 4);
        const ySlice = y.slice(i * 4, i * 4 + 4);
        slices.push(`${buildVec(xSlice)}, ${buildVec(ySlice)}`);
    }
    if (nearestVec4Remainder !== 0) {
        let xSlice = x.slice(nearestVec4 * 4);
        let ySlice = y.slice(nearestVec4 * 4);
        if (xSlice.length === 1) {
            xSlice = xSlice.map(d => `float(${d})`);
            ySlice = ySlice.map(d => `float(${d})`);
        }
        slices.push(`${buildVec(xSlice)}, ${buildVec(ySlice)}`);
    }
    return slices.map((d, i) => `dot(${d})`).join('+');
}
/**
 * Produces GLSL that computes the flat index from 3D coordinates.
 */
function getFlatIndexFrom3D(shape) {
    const strides = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].computeStrides(shape).map(d => d.toString());
    return `
  int getFlatIndex(ivec3 coords) {
    return coords.x * ${strides[0]} + coords.y * ${strides[1]} + coords.z;
  }
`;
}
const ENCODE_FLOAT_SNIPPET = `
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`;
//# sourceMappingURL=shader_compiler_util.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/slice_gpu.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/slice_gpu.js ***!
  \***********************************************************************/
/*! exports provided: SliceProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliceProgram", function() { return SliceProgram; });
/* harmony import */ var _shader_compiler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shader_compiler */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/shader_compiler.js");
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

class SliceProgram {
    constructor(destSize) {
        this.variableNames = ['source'];
        this.outputShape = destSize;
        this.rank = destSize.length;
        const dtype = Object(_shader_compiler__WEBPACK_IMPORTED_MODULE_0__["getCoordsDataType"])(this.rank);
        const uniformPart = `uniform int start[${this.rank}];`;
        const sourceCoords = getCoords(this.rank);
        let body;
        const coordSum = destSize.map((_, i) => {
            return `sourceLoc.${coords[i]} = start[${i}] + coords.${coords[i]};`;
        });
        body = `
        ${dtype} sourceLoc;
        ${dtype} coords = getOutputCoords();
        ${coordSum.join('\n')}
      `;
        this.userCode = `
      ${uniformPart}
      void main() {
        ${body}
        setOutput(getSource(${sourceCoords}));
      }
    `;
    }
    getCustomSetupFunc(start) {
        if (start.length !== this.rank) {
            throw Error(`The rank (${this.rank}) of the program must match the ` +
                `length of start (${start.length})`);
        }
        return (gpgpu, webGLProgram) => {
            if (this.startLoc == null) {
                this.startLoc = gpgpu.getUniformLocationNoThrow(webGLProgram, 'start');
                if (this.startLoc == null) {
                    // This means the compiler has optimized and realized it doesn't need
                    // the uniform.
                    return;
                }
            }
            gpgpu.gl.uniform1iv(this.startLoc, start);
        };
    }
}
const coords = ['x', 'y', 'z', 'w', 'u', 'v'];
function getCoords(rank) {
    if (rank === 1) {
        return 'sourceLoc';
    }
    else if (rank <= 6) {
        return coords.slice(0, rank).map(x => 'sourceLoc.' + x).join(',');
    }
    else {
        throw Error(`Slicing for rank ${rank} is not yet supported`);
    }
}
//# sourceMappingURL=slice_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/slice_packed_gpu.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/slice_packed_gpu.js ***!
  \******************************************************************************/
/*! exports provided: SlicePackedProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlicePackedProgram", function() { return SlicePackedProgram; });
/* harmony import */ var _packing_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./packing_util */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/packing_util.js");
/* harmony import */ var _shader_compiler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shader_compiler */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/shader_compiler.js");
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */


class SlicePackedProgram {
    constructor(destSize) {
        this.variableNames = ['source'];
        this.packedInputs = true;
        this.packedOutput = true;
        this.outputShape = destSize;
        this.rank = destSize.length;
        const dtype = Object(_shader_compiler__WEBPACK_IMPORTED_MODULE_1__["getCoordsDataType"])(this.rank);
        const coords = Object(_packing_util__WEBPACK_IMPORTED_MODULE_0__["getChannels"])('coords', this.rank);
        const sourceLoc = Object(_packing_util__WEBPACK_IMPORTED_MODULE_0__["getChannels"])('sourceLoc', this.rank);
        const innerDims = this.rank === 1 ? 'sourceLoc' : `vec2(${sourceLoc.slice(-2).join()})`;
        const getChannel = `getChannel(getSource(${sourceLoc.join()}), ${innerDims})`;
        const upperRow = `
      result.x = ${getChannel};
      if (++${coords[this.rank - 1]} < ${destSize[this.rank - 1]}) {
        ++${sourceLoc[this.rank - 1]};
        result.y = ${getChannel};
        --${sourceLoc[this.rank - 1]};
      }
    `;
        const lowerRow = this.rank === 1 ? '' : `
      --${coords[this.rank - 1]};
      if (++${coords[this.rank - 2]} < ${destSize[this.rank - 2]}) {
        ++${sourceLoc[this.rank - 2]};
        result.z = ${getChannel};
        if (++${coords[this.rank - 1]} < ${destSize[this.rank - 1]}) {
          ++${sourceLoc[this.rank - 1]};
          result.w = ${getChannel};
        }
      }
    `;
        const sourceLocSetup = this.rank <= 4 ?
            `sourceLoc = coords +
            ${dtype}(${destSize.map((_, i) => `start[${i}]`).join()});` :
            destSize.map((_, i) => `${sourceLoc[i]} = ${coords[i]} + start[${i}];`)
                .join('\n');
        this.userCode = `
      uniform int start[${this.rank}];
      void main() {
        ${dtype} coords = getOutputCoords();
        ${dtype} sourceLoc;
        ${sourceLocSetup}
        vec4 result = vec4(0.);
        ${upperRow}
        ${lowerRow}
        setOutput(result);
      }
    `;
    }
    getCustomSetupFunc(start) {
        if (start.length !== this.rank) {
            throw Error(`The rank (${this.rank}) of the program must match the ` +
                `length of start (${start.length})`);
        }
        return (gpgpu, webGLProgram) => {
            if (this.startLoc == null) {
                this.startLoc = gpgpu.getUniformLocationNoThrow(webGLProgram, 'start');
                if (this.startLoc == null) {
                    // This means the compiler has optimized and realized it doesn't need
                    // the uniform.
                    return;
                }
            }
            gpgpu.gl.uniform1iv(this.startLoc, start);
        };
    }
}
//# sourceMappingURL=slice_packed_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/strided_slice_gpu.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/strided_slice_gpu.js ***!
  \*******************************************************************************/
/*! exports provided: StridedSliceProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StridedSliceProgram", function() { return StridedSliceProgram; });
/* harmony import */ var _shader_compiler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shader_compiler */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/shader_compiler.js");
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

class StridedSliceProgram {
    constructor(begin, strides, size) {
        this.variableNames = ['x'];
        this.outputShape = size;
        const rank = size.length;
        const inputDtype = Object(_shader_compiler__WEBPACK_IMPORTED_MODULE_0__["getCoordsDataType"])(size.length);
        const dtype = Object(_shader_compiler__WEBPACK_IMPORTED_MODULE_0__["getCoordsDataType"])(size.length);
        let newCoords = '';
        if (rank === 1) {
            newCoords = 'coords * strides + begin';
        }
        else {
            let outputAxis = 0;
            newCoords =
                size.map((_, i) => {
                    outputAxis++;
                    return size.length === 1 ?
                        `coords * strides[${i}] + begin[${i}]` :
                        `coords[${outputAxis - 1}] * strides[${i}] + begin[${i}]`;
                })
                    .join(',');
        }
        this.userCode = `
      ${inputDtype} begin = ${inputDtype}(${begin});
      ${inputDtype} strides = ${inputDtype}(${strides});

      void main() {
        ${dtype} coords = getOutputCoords();
        setOutput(getX(${newCoords}));
      }
    `;
    }
}
//# sourceMappingURL=strided_slice_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/tex_util.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/tex_util.js ***!
  \**********************************************************************/
/*! exports provided: PackingScheme, TextureUsage, PhysicalTextureType, getUnpackedMatrixTextureShapeWidthHeight, getUnpackedArraySizeFromMatrixSize, getColorMatrixTextureShapeWidthHeight, getDenseTexShape, getMatrixSizeFromUnpackedArraySize, decodeMatrixFromUnpackedColorRGBAArray, getPackedMatrixTextureShapeWidthHeight, getPackedRGBAArraySizeFromMatrixShape, getTextureConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackingScheme", function() { return PackingScheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextureUsage", function() { return TextureUsage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhysicalTextureType", function() { return PhysicalTextureType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUnpackedMatrixTextureShapeWidthHeight", function() { return getUnpackedMatrixTextureShapeWidthHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUnpackedArraySizeFromMatrixSize", function() { return getUnpackedArraySizeFromMatrixSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getColorMatrixTextureShapeWidthHeight", function() { return getColorMatrixTextureShapeWidthHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDenseTexShape", function() { return getDenseTexShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatrixSizeFromUnpackedArraySize", function() { return getMatrixSizeFromUnpackedArraySize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodeMatrixFromUnpackedColorRGBAArray", function() { return decodeMatrixFromUnpackedColorRGBAArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPackedMatrixTextureShapeWidthHeight", function() { return getPackedMatrixTextureShapeWidthHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPackedRGBAArraySizeFromMatrixShape", function() { return getPackedRGBAArraySizeFromMatrixShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTextureConfig", function() { return getTextureConfig; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

var PackingScheme;
(function (PackingScheme) {
    /**
     * All values in a single texel are densely packed without any constraints.
     *
     * This is how the shader encodes a tensor with shape = [2, 3, 4]
     * (indices are [batch, row, col]).
     *
     * 000|001   010|011   020|021
     * -------   -------   -------
     * 002|003   012|013   022|023
     *
     * 100|101   110|111   120|121
     * -------   -------   -------
     * 102|103   112|113   122|123
     *
     */
    PackingScheme[PackingScheme["DENSE"] = 0] = "DENSE";
    /**
     * Single texels contain only values from the same batch, and from adjacent
     * rows and columns.
     *
     * This is how the shader encodes a tensor with shape = [2, 3, 5]
     * (indices are [batch, row, col]).
     *
     * 000|001   002|003   004|xxx   020|021   022|023   024|xxx
     * -------   -------   -------   -------   -------   -------
     * 010|011   012|013   014|xxx   xxx|xxx   xxx|xxx   xxx|xxx
     *
     * 100|101   102|103   104|xxx   120|121   122|123   124|xxx
     * -------   -------   -------   -------   -------   -------
     * 110|111   112|113   114|xxx   xxx|xxx   xxx|xxx   xxx|xxx
     *
     */
    PackingScheme[PackingScheme["SHARED_BATCH"] = 1] = "SHARED_BATCH";
})(PackingScheme || (PackingScheme = {}));
var TextureUsage;
(function (TextureUsage) {
    TextureUsage[TextureUsage["RENDER"] = 0] = "RENDER";
    TextureUsage[TextureUsage["UPLOAD"] = 1] = "UPLOAD";
    TextureUsage[TextureUsage["PIXELS"] = 2] = "PIXELS";
    TextureUsage[TextureUsage["DOWNLOAD"] = 3] = "DOWNLOAD";
})(TextureUsage || (TextureUsage = {}));
var PhysicalTextureType;
(function (PhysicalTextureType) {
    PhysicalTextureType[PhysicalTextureType["UNPACKED_FLOAT16"] = 0] = "UNPACKED_FLOAT16";
    PhysicalTextureType[PhysicalTextureType["UNPACKED_FLOAT32"] = 1] = "UNPACKED_FLOAT32";
    PhysicalTextureType[PhysicalTextureType["PACKED_4X1_UNSIGNED_BYTE"] = 2] = "PACKED_4X1_UNSIGNED_BYTE";
    PhysicalTextureType[PhysicalTextureType["PACKED_2X2_FLOAT32"] = 3] = "PACKED_2X2_FLOAT32";
    PhysicalTextureType[PhysicalTextureType["PACKED_2X2_FLOAT16"] = 4] = "PACKED_2X2_FLOAT16";
})(PhysicalTextureType || (PhysicalTextureType = {}));
function getUnpackedMatrixTextureShapeWidthHeight(rows, columns) {
    return [columns, rows];
}
function getUnpackedArraySizeFromMatrixSize(matrixSize, channelsPerTexture) {
    return matrixSize * channelsPerTexture;
}
function getColorMatrixTextureShapeWidthHeight(rows, columns) {
    return [columns * 4, rows];
}
/**
 * Get shape for densely packed RGBA texture.
 */
function getDenseTexShape(shape) {
    const size = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].sizeFromShape(shape);
    const texelsNeeded = Math.ceil(size / 4);
    return _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].sizeToSquarishShape(texelsNeeded);
}
function getMatrixSizeFromUnpackedArraySize(unpackedSize, channelsPerTexture) {
    if (unpackedSize % channelsPerTexture !== 0) {
        throw new Error(`unpackedSize (${unpackedSize}) must be a multiple of ` +
            `${channelsPerTexture}`);
    }
    return unpackedSize / channelsPerTexture;
}
function decodeMatrixFromUnpackedColorRGBAArray(unpackedArray, matrix, channels) {
    const requiredSize = unpackedArray.length * channels / 4;
    if (matrix.length < requiredSize) {
        throw new Error(`matrix length (${matrix.length}) must be >= ${requiredSize}`);
    }
    let dst = 0;
    for (let src = 0; src < unpackedArray.length; src += 4) {
        for (let c = 0; c < channels; c++) {
            matrix[dst++] = unpackedArray[src + c];
        }
    }
}
function getPackedMatrixTextureShapeWidthHeight(rows, columns) {
    return [
        Math.max(1, Math.ceil(columns / 2)), Math.max(1, Math.ceil(rows / 2))
    ];
}
function getPackedRGBAArraySizeFromMatrixShape(rows, columns) {
    const [w, h] = getPackedMatrixTextureShapeWidthHeight(rows, columns);
    return w * h * 4;
}
function getTextureConfig(
// tslint:disable-next-line:no-any
gl, textureHalfFloatExtension) {
    // tslint:disable-next-line:no-any
    const glany = gl;
    let internalFormatFloat;
    let internalFormatHalfFloat;
    let internalFormatPackedHalfFloat;
    let internalFormatPackedFloat;
    let textureFormatFloat;
    let downloadTextureFormat;
    let downloadUnpackNumChannels;
    let defaultNumChannels;
    let textureTypeHalfFloat;
    let textureTypeFloat;
    if (Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["env"])().getNumber('WEBGL_VERSION') === 2) {
        internalFormatFloat = glany.R32F;
        internalFormatHalfFloat = glany.R16F;
        internalFormatPackedHalfFloat = glany.RGBA16F;
        internalFormatPackedFloat = glany.RGBA32F;
        textureFormatFloat = glany.RED;
        downloadUnpackNumChannels = 4;
        defaultNumChannels = 1;
        textureTypeHalfFloat = glany.HALF_FLOAT;
        textureTypeFloat = glany.FLOAT;
    }
    else {
        internalFormatFloat = gl.RGBA;
        internalFormatHalfFloat = gl.RGBA;
        internalFormatPackedHalfFloat = gl.RGBA;
        internalFormatPackedFloat = glany.RGBA;
        textureFormatFloat = gl.RGBA;
        downloadUnpackNumChannels = 4;
        defaultNumChannels = 4;
        textureTypeHalfFloat = textureHalfFloatExtension != null ?
            textureHalfFloatExtension.HALF_FLOAT_OES :
            null;
        textureTypeFloat = gl.FLOAT;
    }
    downloadTextureFormat = gl.RGBA;
    return {
        internalFormatFloat,
        internalFormatHalfFloat,
        internalFormatPackedHalfFloat,
        internalFormatPackedFloat,
        textureFormatFloat,
        downloadTextureFormat,
        downloadUnpackNumChannels,
        defaultNumChannels,
        textureTypeHalfFloat,
        textureTypeFloat
    };
}
//# sourceMappingURL=tex_util.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/texture_manager.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/texture_manager.js ***!
  \*****************************************************************************/
/*! exports provided: TextureManager, computeBytes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextureManager", function() { return TextureManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeBytes", function() { return computeBytes; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _gpgpu_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gpgpu_util */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/gpgpu_util.js");
/* harmony import */ var _tex_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tex_util */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/tex_util.js");
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */



class TextureManager {
    constructor(gpgpu) {
        this.gpgpu = gpgpu;
        this.numUsedTextures = 0;
        this.numFreeTextures = 0;
        this._numBytesAllocated = 0;
        this._numBytesFree = 0; // How many bytes that have been allocated
        // are available for reuse.
        this.freeTextures = {};
        this.logEnabled = false;
        this.usedTextures = {};
    }
    acquireTexture(shapeRC, usage, isPacked) {
        const physicalTexType = getPhysicalFromLogicalTextureType(usage, isPacked);
        const shapeKey = getKeyFromTextureShape(shapeRC, physicalTexType, isPacked);
        if (!(shapeKey in this.freeTextures)) {
            this.freeTextures[shapeKey] = [];
        }
        if (!(shapeKey in this.usedTextures)) {
            this.usedTextures[shapeKey] = [];
        }
        const texBytes = computeBytes(shapeRC, physicalTexType, this.gpgpu.gl, this.gpgpu.textureConfig, isPacked);
        if (this.freeTextures[shapeKey].length > 0) {
            this.numFreeTextures--;
            this.numUsedTextures++;
            this._numBytesFree -= texBytes;
            this.log();
            const newTexture = this.freeTextures[shapeKey].shift();
            this.usedTextures[shapeKey].push(newTexture);
            return newTexture;
        }
        let newTexture;
        if (physicalTexType === _tex_util__WEBPACK_IMPORTED_MODULE_2__["PhysicalTextureType"].PACKED_2X2_FLOAT32) {
            newTexture = this.gpgpu.createPackedMatrixTexture(shapeRC[0], shapeRC[1]);
        }
        else if (physicalTexType === _tex_util__WEBPACK_IMPORTED_MODULE_2__["PhysicalTextureType"].PACKED_2X2_FLOAT16) {
            newTexture =
                this.gpgpu.createFloat16PackedMatrixTexture(shapeRC[0], shapeRC[1]);
        }
        else if (physicalTexType === _tex_util__WEBPACK_IMPORTED_MODULE_2__["PhysicalTextureType"].UNPACKED_FLOAT32) {
            newTexture =
                this.gpgpu.createFloat32MatrixTexture(shapeRC[0], shapeRC[1]);
        }
        else if (physicalTexType === _tex_util__WEBPACK_IMPORTED_MODULE_2__["PhysicalTextureType"].UNPACKED_FLOAT16) {
            newTexture =
                this.gpgpu.createFloat16MatrixTexture(shapeRC[0], shapeRC[1]);
        }
        else if (physicalTexType === _tex_util__WEBPACK_IMPORTED_MODULE_2__["PhysicalTextureType"].PACKED_4X1_UNSIGNED_BYTE) {
            newTexture =
                this.gpgpu.createUnsignedBytesMatrixTexture(shapeRC[0], shapeRC[1]);
        }
        this.usedTextures[shapeKey].push(newTexture);
        this.numUsedTextures++;
        this._numBytesAllocated += texBytes;
        this.log();
        return newTexture;
    }
    releaseTexture(texture, shape, logicalTexType, isPacked) {
        if (this.freeTextures == null) {
            // Already disposed.
            return;
        }
        const physicalTexType = getPhysicalFromLogicalTextureType(logicalTexType, isPacked);
        const shapeKey = getKeyFromTextureShape(shape, physicalTexType, isPacked);
        if (!(shapeKey in this.freeTextures)) {
            this.freeTextures[shapeKey] = [];
        }
        const texBytes = computeBytes(shape, physicalTexType, this.gpgpu.gl, this.gpgpu.textureConfig, isPacked);
        const deleteTexThreshold = Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["env"])().get('WEBGL_DELETE_TEXTURE_THRESHOLD');
        if (deleteTexThreshold !== -1 &&
            this._numBytesAllocated > deleteTexThreshold) {
            this.gpgpu.deleteMatrixTexture(texture);
            this._numBytesAllocated -= texBytes;
        }
        else {
            this.freeTextures[shapeKey].push(texture);
            this.numFreeTextures++;
            this._numBytesFree += texBytes;
        }
        this.numUsedTextures--;
        const texList = this.usedTextures[shapeKey];
        const texIndex = texList.indexOf(texture);
        if (texIndex < 0) {
            throw new Error('Cannot release a texture that was never provided by this ' +
                'texture manager');
        }
        texList.splice(texIndex, 1);
        this.log();
    }
    log() {
        if (!this.logEnabled) {
            return;
        }
        const total = this.numFreeTextures + this.numUsedTextures;
        console.log('Free/Used', `${this.numFreeTextures} / ${this.numUsedTextures}`, `(${total})`);
        const freeRatio = this._numBytesFree / this._numBytesAllocated;
        console.log(`Bytes allocated: ${this._numBytesAllocated}`);
        console.log(`Bytes unused: ${this._numBytesFree} (${Math.round(100 * freeRatio)}%)`);
    }
    get numBytesAllocated() {
        return this._numBytesAllocated;
    }
    get numBytesFree() {
        return this._numBytesFree;
    }
    getNumUsedTextures() {
        return this.numUsedTextures;
    }
    getNumFreeTextures() {
        return this.numFreeTextures;
    }
    dispose() {
        if (this.freeTextures == null) {
            // Already disposed.
            return;
        }
        for (const texShape in this.freeTextures) {
            this.freeTextures[texShape].forEach(tex => {
                this.gpgpu.deleteMatrixTexture(tex);
            });
        }
        for (const texShape in this.usedTextures) {
            this.usedTextures[texShape].forEach(tex => {
                this.gpgpu.deleteMatrixTexture(tex);
            });
        }
        this.freeTextures = null;
        this.usedTextures = null;
        this.numUsedTextures = 0;
        this.numFreeTextures = 0;
        this._numBytesAllocated = 0;
        this._numBytesFree = 0;
    }
}
function numBytesForInternalFormat(gl, internalFormat) {
    // tslint:disable-next-line:no-any
    const glany = gl;
    if (internalFormat === glany.R32F) {
        return 4;
    }
    else if (internalFormat === glany.R16F) {
        return 2;
    }
    else if (internalFormat === glany.RGBA32F) {
        return 16;
    }
    else if (internalFormat === gl.RGBA) {
        return 16;
    }
    else if (internalFormat === glany.RGBA16F) {
        return 8;
    }
    throw new Error(`Unknown internal format ${internalFormat}`);
}
function computeBytes(shape, physicalTexType, gl, textureConfig, isPacked) {
    // It is not possible to infer packed status from the texture type because
    // depending on the textureConfig, different  texture types may resolve to the
    // same internal format (e.g. in WebGL1, the internal format for
    // UNPACKED_FLOAT16 textures is gl.RGBA). Therefore we pass in `isPacked`
    // explicitly.
    const internalFormat = internalFormatForPhysicalTexType(physicalTexType, textureConfig);
    let numElements;
    if (isPacked) {
        const [packedWidth, packedHeight] = Object(_tex_util__WEBPACK_IMPORTED_MODULE_2__["getPackedMatrixTextureShapeWidthHeight"])(shape[0], shape[1]);
        numElements = packedWidth * packedHeight;
    }
    else {
        const [width, height] = Object(_tex_util__WEBPACK_IMPORTED_MODULE_2__["getUnpackedMatrixTextureShapeWidthHeight"])(shape[0], shape[1]);
        numElements = width * height;
    }
    const bytesPerElement = numBytesForInternalFormat(gl, internalFormat);
    return numElements * bytesPerElement;
}
function internalFormatForPhysicalTexType(physicalTexType, textureConfig) {
    switch (physicalTexType) {
        case _tex_util__WEBPACK_IMPORTED_MODULE_2__["PhysicalTextureType"].PACKED_2X2_FLOAT32:
            return Object(_gpgpu_util__WEBPACK_IMPORTED_MODULE_1__["getInternalFormatForPackedMatrixTexture"])(textureConfig);
        case _tex_util__WEBPACK_IMPORTED_MODULE_2__["PhysicalTextureType"].PACKED_2X2_FLOAT16:
            return Object(_gpgpu_util__WEBPACK_IMPORTED_MODULE_1__["getInternalFormatForFloat16PackedMatrixTexture"])(textureConfig);
        case _tex_util__WEBPACK_IMPORTED_MODULE_2__["PhysicalTextureType"].UNPACKED_FLOAT32:
            return Object(_gpgpu_util__WEBPACK_IMPORTED_MODULE_1__["getInternalFormatForFloat32MatrixTexture"])(textureConfig);
        case _tex_util__WEBPACK_IMPORTED_MODULE_2__["PhysicalTextureType"].UNPACKED_FLOAT16:
            return Object(_gpgpu_util__WEBPACK_IMPORTED_MODULE_1__["getInternalFormatForFloat16MatrixTexture"])(textureConfig);
        case _tex_util__WEBPACK_IMPORTED_MODULE_2__["PhysicalTextureType"].PACKED_4X1_UNSIGNED_BYTE:
            return Object(_gpgpu_util__WEBPACK_IMPORTED_MODULE_1__["getInternalFormatForUnsignedBytesMatrixTexture"])(textureConfig);
        default:
            throw new Error(`Unknown physical texture type ${physicalTexType}`);
    }
}
function getPhysicalTextureForRendering(isPacked) {
    if (Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["env"])().getBool('WEBGL_RENDER_FLOAT32_ENABLED')) {
        if (isPacked) {
            return _tex_util__WEBPACK_IMPORTED_MODULE_2__["PhysicalTextureType"].PACKED_2X2_FLOAT32;
        }
        return _tex_util__WEBPACK_IMPORTED_MODULE_2__["PhysicalTextureType"].UNPACKED_FLOAT32;
    }
    if (isPacked) {
        return _tex_util__WEBPACK_IMPORTED_MODULE_2__["PhysicalTextureType"].PACKED_2X2_FLOAT16;
    }
    return _tex_util__WEBPACK_IMPORTED_MODULE_2__["PhysicalTextureType"].UNPACKED_FLOAT16;
}
function getPhysicalFromLogicalTextureType(logicalTexType, isPacked) {
    if (logicalTexType === _tex_util__WEBPACK_IMPORTED_MODULE_2__["TextureUsage"].UPLOAD) {
        return _tex_util__WEBPACK_IMPORTED_MODULE_2__["PhysicalTextureType"].PACKED_2X2_FLOAT32;
    }
    else if (logicalTexType === _tex_util__WEBPACK_IMPORTED_MODULE_2__["TextureUsage"].RENDER || logicalTexType == null) {
        return getPhysicalTextureForRendering(isPacked);
    }
    else if (logicalTexType === _tex_util__WEBPACK_IMPORTED_MODULE_2__["TextureUsage"].DOWNLOAD ||
        logicalTexType === _tex_util__WEBPACK_IMPORTED_MODULE_2__["TextureUsage"].PIXELS) {
        return _tex_util__WEBPACK_IMPORTED_MODULE_2__["PhysicalTextureType"].PACKED_4X1_UNSIGNED_BYTE;
    }
    throw new Error(`Unknown logical texture type ${logicalTexType}`);
}
function getKeyFromTextureShape(shapeRowsCol, physicalTexType, isPacked) {
    return `${shapeRowsCol[0]}_${shapeRowsCol[1]}_${physicalTexType}_${isPacked}`;
}
//# sourceMappingURL=texture_manager.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/tile_gpu.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/tile_gpu.js ***!
  \**********************************************************************/
/*! exports provided: TileProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileProgram", function() { return TileProgram; });
/* harmony import */ var _shader_compiler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shader_compiler */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/shader_compiler.js");
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

class TileProgram {
    constructor(aShape, reps) {
        this.variableNames = ['A'];
        const outputShape = new Array(aShape.length);
        for (let i = 0; i < outputShape.length; i++) {
            outputShape[i] = aShape[i] * reps[i];
        }
        this.outputShape = outputShape;
        this.rank = outputShape.length;
        const dtype = Object(_shader_compiler__WEBPACK_IMPORTED_MODULE_0__["getCoordsDataType"])(this.rank);
        const sourceCoords = getSourceCoords(aShape);
        this.userCode = `
      void main() {
        ${dtype} resRC = getOutputCoords();
        setOutput(getA(${sourceCoords}));
      }
    `;
    }
}
function getSourceCoords(aShape) {
    const rank = aShape.length;
    if (rank > 5) {
        throw Error(`Tile for rank ${rank} is not yet supported`);
    }
    if (rank === 1) {
        return `imod(resRC, ${aShape[0]})`;
    }
    const currentCoords = ['resRC.x', 'resRC.y', 'resRC.z', 'resRC.w', 'resRC.u'];
    const sourceCoords = [];
    for (let i = 0; i < aShape.length; i++) {
        sourceCoords.push(`imod(${currentCoords[i]}, ${aShape[i]})`);
    }
    return sourceCoords.join();
}
//# sourceMappingURL=tile_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/transpose_gpu.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/transpose_gpu.js ***!
  \***************************************************************************/
/*! exports provided: TransposeProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransposeProgram", function() { return TransposeProgram; });
/* harmony import */ var _shader_compiler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shader_compiler */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/shader_compiler.js");
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

class TransposeProgram {
    constructor(aShape, newDim) {
        this.variableNames = ['A'];
        const outputShape = new Array(aShape.length);
        for (let i = 0; i < outputShape.length; i++) {
            outputShape[i] = aShape[newDim[i]];
        }
        this.outputShape = outputShape;
        this.rank = outputShape.length;
        const dtype = Object(_shader_compiler__WEBPACK_IMPORTED_MODULE_0__["getCoordsDataType"])(this.rank);
        const switched = getSwitchedCoords(newDim);
        this.userCode = `
    void main() {
      ${dtype} resRC = getOutputCoords();
      setOutput(getA(${switched}));
    }
    `;
    }
}
function getSwitchedCoords(newDim) {
    const rank = newDim.length;
    if (rank > 6) {
        throw Error(`Transpose for rank ${rank} is not yet supported`);
    }
    const originalOrder = ['resRC.x', 'resRC.y', 'resRC.z', 'resRC.w', 'resRC.u', 'resRC.v'];
    const switchedCoords = new Array(rank);
    for (let i = 0; i < newDim.length; i++) {
        switchedCoords[newDim[i]] = originalOrder[i];
    }
    return switchedCoords.join();
}
//# sourceMappingURL=transpose_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/transpose_packed_gpu.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/transpose_packed_gpu.js ***!
  \**********************************************************************************/
/*! exports provided: TransposePackedProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransposePackedProgram", function() { return TransposePackedProgram; });
/* harmony import */ var _packing_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./packing_util */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/packing_util.js");
/* harmony import */ var _shader_compiler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shader_compiler */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/shader_compiler.js");
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */


class TransposePackedProgram {
    constructor(aShape, newDim) {
        this.variableNames = ['A'];
        this.packedInputs = true;
        this.packedOutput = true;
        const outputShape = new Array(aShape.length);
        for (let i = 0; i < outputShape.length; i++) {
            outputShape[i] = aShape[newDim[i]];
        }
        this.outputShape = outputShape;
        this.rank = outputShape.length;
        if (this.rank > 6) {
            throw Error(`Packed transpose for rank ${this.rank} is not yet supported.`);
        }
        const dtype = Object(_shader_compiler__WEBPACK_IMPORTED_MODULE_1__["getCoordsDataType"])(this.rank);
        const outputOrder = Object(_packing_util__WEBPACK_IMPORTED_MODULE_0__["getVecChannels"])('rc', this.rank);
        const switchedOrder = new Array(this.rank);
        for (let i = 0; i < newDim.length; i++) {
            switchedOrder[newDim[i]] = outputOrder[i];
        }
        const innerDims = `vec2(${switchedOrder.slice(-2).join()})`;
        const nextColumn = `++${outputOrder[this.rank - 1]} < ${outputShape[this.rank - 1]}`;
        const getc = `getChannel(getA(${switchedOrder.join()}), ${innerDims})`;
        this.userCode = `
    void main() {
      ${dtype} rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = ${getc};
      if(${nextColumn}) {
        result[1] = ${getc};
      }
      --${outputOrder[this.rank - 1]};
      if(++${outputOrder[this.rank - 2]} < ${outputShape[this.rank - 2]}) {
        result[2] = ${getc};
        if(${nextColumn}) {
          result[3] = ${getc};
        }
      }
      setOutput(result);
    }
    `;
    }
}
//# sourceMappingURL=transpose_packed_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/unaryop_gpu.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/unaryop_gpu.js ***!
  \*************************************************************************/
/*! exports provided: UnaryOpProgram, LINEAR, ABS, RELU, RELU6, ELU, SELU, STEP, NEG, CEIL, FLOOR, SIGN, IS_NAN, IS_INF, IS_FINITE, ROUND, EXP, EXPM1, LOG, LOG1P, SQRT, RSQRT, SIGMOID, SOFTPLUS, ASIN, ACOS, ATAN, SINH, COSH, TANH, ASINH, ACOSH, ATANH, ERF, RECIPROCAL, LOGICAL_NOT, CLONE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnaryOpProgram", function() { return UnaryOpProgram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LINEAR", function() { return LINEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ABS", function() { return ABS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RELU", function() { return RELU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RELU6", function() { return RELU6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ELU", function() { return ELU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELU", function() { return SELU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEP", function() { return STEP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEG", function() { return NEG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CEIL", function() { return CEIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLOOR", function() { return FLOOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN", function() { return SIGN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_NAN", function() { return IS_NAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_INF", function() { return IS_INF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_FINITE", function() { return IS_FINITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUND", function() { return ROUND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXP", function() { return EXP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXPM1", function() { return EXPM1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG", function() { return LOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG1P", function() { return LOG1P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SQRT", function() { return SQRT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RSQRT", function() { return RSQRT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGMOID", function() { return SIGMOID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOFTPLUS", function() { return SOFTPLUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASIN", function() { return ASIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACOS", function() { return ACOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATAN", function() { return ATAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SINH", function() { return SINH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COSH", function() { return COSH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TANH", function() { return TANH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASINH", function() { return ASINH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACOSH", function() { return ACOSH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATANH", function() { return ATANH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERF", function() { return ERF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECIPROCAL", function() { return RECIPROCAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGICAL_NOT", function() { return LOGICAL_NOT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLONE", function() { return CLONE; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

class UnaryOpProgram {
    constructor(aShape, opSnippet) {
        this.variableNames = ['A'];
        this.outputShape = aShape;
        this.userCode = `
      float unaryOperation(float x) {
        ${opSnippet}
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `;
    }
}
const CHECK_NAN_SNIPPET = `if (isnan(x)) return x;`;
const LINEAR = `return x;`;
const ABS = `return abs(x);`;
const RELU = CHECK_NAN_SNIPPET + `
  return (x < 0.0) ? 0.0 : x;
`;
const RELU6 = CHECK_NAN_SNIPPET + `
  return (x < 0.0) ? 0.0 : min(6.0, x);
`;
const ELU = `return (x >= 0.0) ? x : (exp(x) - 1.0);`;
const SELU = `
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = ${_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["backend_util"].SELU_SCALEALPHA};
  float scale = ${_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["backend_util"].SELU_SCALE};
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`;
function STEP(alpha = 0.0) {
    return CHECK_NAN_SNIPPET + `
    return x > 0.0 ? 1.0 : float(${alpha});
  `;
}
const NEG = `return -x;`;
const CEIL = `return ceil(x);`;
const FLOOR = `return floor(x);`;
const SIGN = `
  if (isnan(x)) { return 0.0; }
  return sign(x);
`;
const IS_NAN = `return float(isnan(x));`;
const IS_INF = `return float(isinf(x));`;
const IS_FINITE = `return float(!isnan(x) && !isinf(x));`;
const ROUND = `
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`;
const EXP = `return exp(x);`;
const EXPM1 = `return exp(x) - 1.0;`;
const LOG = `if (x < 0.0) return NAN;
  return log(x);`;
const LOG1P = `return log(1.0 + x);`;
const SQRT = `return sqrt(x);`;
const RSQRT = `return inversesqrt(x);`;
const SIGMOID = `return 1.0 / (1.0 + exp(-1.0 * x));`;
/**
 * mirrors the implementation of tf.nn.softplus: https://goo.gl/vkcvwX
 *
 * epsilon is the difference between 1.0 and the next representable
 * float. For a single precision 32 bit float this should be 2^-23, see:
 * https://math.byu.edu/~schow/work/IEEEFloatingPoint.htm
 *
 * too_large = (x > -threshold) is value above which exp(x) may overflow
 * but softplus(x) == x is within machine epsilon
 *
 * too_small = (x < threshold) is value below which exp(x) may underflow,
 * but softplus(x) == exp(x) is within machine epsilon.
 */
const SOFTPLUS = `
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`;
const ASIN = CHECK_NAN_SNIPPET + `
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`;
const ACOS = CHECK_NAN_SNIPPET + `
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`;
const ATAN = CHECK_NAN_SNIPPET + `
  return atan(x);
`;
const SINH = `
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`;
const COSH = `
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`;
const TANH = `
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`;
const ASINH = CHECK_NAN_SNIPPET + `return log(x + sqrt(x * x + 1.0));`;
const ACOSH = CHECK_NAN_SNIPPET + `
  if (x < 1.0) return NAN;
  return log(x + sqrt(x * x - 1.0));`;
const ATANH = CHECK_NAN_SNIPPET + `
  if ((x < -1.0) || (x > 1.0)) return NAN;
  return (log(1.0 + x) - log(1.0 - x)) / 2.0;`;
const ERF = `
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = ${_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["backend_util"].ERF_P};
  float a1 = ${_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["backend_util"].ERF_A1};
  float a2 = ${_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["backend_util"].ERF_A2};
  float a3 = ${_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["backend_util"].ERF_A3};
  float a4 = ${_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["backend_util"].ERF_A4};
  float a5 = ${_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["backend_util"].ERF_A5};

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`;
const RECIPROCAL = `return 1.0 / x;`;
const LOGICAL_NOT = `return float(!(x >= 1.0));`;
const CLONE = 'return x;';
//# sourceMappingURL=unaryop_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/unaryop_packed_gpu.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/unaryop_packed_gpu.js ***!
  \********************************************************************************/
/*! exports provided: LINEAR, LOG, RELU, RELU6, ELU, UnaryOpPackedProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LINEAR", function() { return LINEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG", function() { return LOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RELU", function() { return RELU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RELU6", function() { return RELU6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ELU", function() { return ELU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnaryOpPackedProgram", function() { return UnaryOpPackedProgram; });
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const LINEAR = `return x;`;
const LOG = `
  vec4 result = log(x);
  vec4 isNaN = vec4(lessThan(x, vec4(0.0)));
  result.r = isNaN.r == 1.0 ? NAN : result.r;
  result.g = isNaN.g == 1.0 ? NAN : result.g;
  result.b = isNaN.b == 1.0 ? NAN : result.b;
  result.a = isNaN.a == 1.0 ? NAN : result.a;

  return result;
`;
const RELU = `
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`;
const RELU6 = `
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`;
const ELU = `
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`;
class UnaryOpPackedProgram {
    constructor(aShape, opSnippet) {
        this.variableNames = ['A'];
        this.packedInputs = true;
        this.packedOutput = true;
        this.outputShape = aShape;
        this.userCode = `
      vec4 unaryOperation(vec4 x) {
        ${opSnippet}
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `;
    }
}
//# sourceMappingURL=unaryop_packed_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/unpack_gpu.js":
/*!************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/unpack_gpu.js ***!
  \************************************************************************/
/*! exports provided: UnpackProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnpackProgram", function() { return UnpackProgram; });
/* harmony import */ var _packing_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./packing_util */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/packing_util.js");
/* harmony import */ var _shader_compiler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shader_compiler */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/shader_compiler.js");
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */


class UnpackProgram {
    constructor(outputShape) {
        this.variableNames = ['A'];
        this.packedInputs = true;
        this.packedOutput = false;
        this.outputShape = outputShape;
        const rank = outputShape.length;
        const channels = Object(_packing_util__WEBPACK_IMPORTED_MODULE_0__["getChannels"])('rc', rank);
        const dtype = Object(_shader_compiler__WEBPACK_IMPORTED_MODULE_1__["getCoordsDataType"])(rank);
        const sourceCoords = Object(_packing_util__WEBPACK_IMPORTED_MODULE_0__["getSourceCoords"])(rank, channels);
        const innerDims = channels.slice(-2);
        const coords = rank <= 1 ? 'rc' : `vec2(${innerDims.join(',')})`;
        this.userCode = `
      void main() {
        ${dtype} rc = getOutputCoords();
        vec4 packedInput = getA(${sourceCoords});

        setOutput(getChannel(packedInput, ${coords}));
      }
    `;
    }
}
//# sourceMappingURL=unpack_gpu.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/version.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/version.js ***!
  \*********************************************************************/
/*! exports provided: version */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/** @license See the LICENSE file. */
// This code is auto-generated, do not modify this file!
const version = '2.7.0';

//# sourceMappingURL=version.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/webgl.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/webgl.js ***!
  \*******************************************************************/
/*! exports provided: MathBackendWebGL, setWebGLContext, GPGPUContext, gpgpu_util, webgl_util, forceHalfFloat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forceHalfFloat", function() { return forceHalfFloat; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _gpgpu_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gpgpu_util */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/gpgpu_util.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "gpgpu_util", function() { return _gpgpu_util__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _webgl_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./webgl_util */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/webgl_util.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "webgl_util", function() { return _webgl_util__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _backend_webgl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./backend_webgl */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/backend_webgl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MathBackendWebGL", function() { return _backend_webgl__WEBPACK_IMPORTED_MODULE_3__["MathBackendWebGL"]; });

/* harmony import */ var _canvas_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./canvas_util */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/canvas_util.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setWebGLContext", function() { return _canvas_util__WEBPACK_IMPORTED_MODULE_4__["setWebGLContext"]; });

/* harmony import */ var _gpgpu_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gpgpu_context */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/gpgpu_context.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GPGPUContext", function() { return _gpgpu_context__WEBPACK_IMPORTED_MODULE_5__["GPGPUContext"]; });

/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */






// WebGL specific utils.

/**
 * Enforce use of half precision textures if available on the platform.
 *
 * @doc {heading: 'Environment', namespace: 'webgl'}
 */
function forceHalfFloat() {
    Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["env"])().set('WEBGL_FORCE_F16_TEXTURES', true);
}
//# sourceMappingURL=webgl.js.map

/***/ }),

/***/ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/webgl_util.js":
/*!************************************************************************!*\
  !*** ./node_modules/@tensorflow/tfjs-backend-webgl/dist/webgl_util.js ***!
  \************************************************************************/
/*! exports provided: callAndCheck, canBeRepresented, getWebGLErrorMessage, getExtensionOrThrow, createVertexShader, createFragmentShader, createProgram, linkProgram, validateProgram, createStaticVertexBuffer, createStaticIndexBuffer, getNumChannels, createTexture, validateTextureSize, createFramebuffer, bindVertexBufferToProgramAttribute, bindTextureUnit, unbindTextureUnit, getProgramUniformLocationOrThrow, getProgramUniformLocation, bindTextureToProgramUniformSampler, bindCanvasToFramebuffer, bindColorTextureToFramebuffer, unbindColorTextureFromFramebuffer, validateFramebuffer, getFramebufferErrorMessage, getBatchDim, getRowsCols, getShapeAs3D, getTextureShapeFromLogicalShape, isReshapeFree, getWebGLMaxTextureSize, resetMaxTextureSize, resetMaxTexturesInShader, getMaxTexturesInShader, getWebGLDisjointQueryTimerVersion, hasExtension, isWebGLVersionEnabled, isCapableOfRenderingToFloatTexture, isDownloadFloatTextureEnabled, isWebGLFenceEnabled, assertNotComplex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callAndCheck", function() { return callAndCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canBeRepresented", function() { return canBeRepresented; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWebGLErrorMessage", function() { return getWebGLErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExtensionOrThrow", function() { return getExtensionOrThrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createVertexShader", function() { return createVertexShader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFragmentShader", function() { return createFragmentShader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProgram", function() { return createProgram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linkProgram", function() { return linkProgram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateProgram", function() { return validateProgram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStaticVertexBuffer", function() { return createStaticVertexBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStaticIndexBuffer", function() { return createStaticIndexBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNumChannels", function() { return getNumChannels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTexture", function() { return createTexture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateTextureSize", function() { return validateTextureSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFramebuffer", function() { return createFramebuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindVertexBufferToProgramAttribute", function() { return bindVertexBufferToProgramAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindTextureUnit", function() { return bindTextureUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unbindTextureUnit", function() { return unbindTextureUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProgramUniformLocationOrThrow", function() { return getProgramUniformLocationOrThrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProgramUniformLocation", function() { return getProgramUniformLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindTextureToProgramUniformSampler", function() { return bindTextureToProgramUniformSampler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindCanvasToFramebuffer", function() { return bindCanvasToFramebuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindColorTextureToFramebuffer", function() { return bindColorTextureToFramebuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unbindColorTextureFromFramebuffer", function() { return unbindColorTextureFromFramebuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateFramebuffer", function() { return validateFramebuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFramebufferErrorMessage", function() { return getFramebufferErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBatchDim", function() { return getBatchDim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRowsCols", function() { return getRowsCols; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShapeAs3D", function() { return getShapeAs3D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTextureShapeFromLogicalShape", function() { return getTextureShapeFromLogicalShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isReshapeFree", function() { return isReshapeFree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWebGLMaxTextureSize", function() { return getWebGLMaxTextureSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetMaxTextureSize", function() { return resetMaxTextureSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetMaxTexturesInShader", function() { return resetMaxTexturesInShader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMaxTexturesInShader", function() { return getMaxTexturesInShader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWebGLDisjointQueryTimerVersion", function() { return getWebGLDisjointQueryTimerVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasExtension", function() { return hasExtension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWebGLVersionEnabled", function() { return isWebGLVersionEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCapableOfRenderingToFloatTexture", function() { return isCapableOfRenderingToFloatTexture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDownloadFloatTextureEnabled", function() { return isDownloadFloatTextureEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWebGLFenceEnabled", function() { return isWebGLFenceEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertNotComplex", function() { return assertNotComplex; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _canvas_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvas_util */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/canvas_util.js");
/* harmony import */ var _tex_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tex_util */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/tex_util.js");
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */



function callAndCheck(gl, func) {
    const returnValue = func();
    if (Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["env"])().getBool('DEBUG')) {
        checkWebGLError(gl);
    }
    return returnValue;
}
function checkWebGLError(gl) {
    const error = gl.getError();
    if (error !== gl.NO_ERROR) {
        throw new Error('WebGL Error: ' + getWebGLErrorMessage(gl, error));
    }
}
// https://en.wikipedia.org/wiki/Half-precision_floating-point_format
const MIN_FLOAT16 = 5.96e-8;
const MAX_FLOAT16 = 65504;
function canBeRepresented(num) {
    if (Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["env"])().getBool('WEBGL_RENDER_FLOAT32_ENABLED') || num === 0 ||
        (MIN_FLOAT16 < Math.abs(num) && Math.abs(num) < MAX_FLOAT16)) {
        return true;
    }
    return false;
}
function getWebGLErrorMessage(gl, status) {
    switch (status) {
        case gl.NO_ERROR:
            return 'NO_ERROR';
        case gl.INVALID_ENUM:
            return 'INVALID_ENUM';
        case gl.INVALID_VALUE:
            return 'INVALID_VALUE';
        case gl.INVALID_OPERATION:
            return 'INVALID_OPERATION';
        case gl.INVALID_FRAMEBUFFER_OPERATION:
            return 'INVALID_FRAMEBUFFER_OPERATION';
        case gl.OUT_OF_MEMORY:
            return 'OUT_OF_MEMORY';
        case gl.CONTEXT_LOST_WEBGL:
            return 'CONTEXT_LOST_WEBGL';
        default:
            return `Unknown error code ${status}`;
    }
}
function getExtensionOrThrow(gl, extensionName) {
    return throwIfNull(gl, () => gl.getExtension(extensionName), 'Extension "' + extensionName + '" not supported on this browser.');
}
function createVertexShader(gl, vertexShaderSource) {
    const vertexShader = throwIfNull(gl, () => gl.createShader(gl.VERTEX_SHADER), 'Unable to create vertex WebGLShader.');
    callAndCheck(gl, () => gl.shaderSource(vertexShader, vertexShaderSource));
    callAndCheck(gl, () => gl.compileShader(vertexShader));
    if (gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS) === false) {
        console.log(gl.getShaderInfoLog(vertexShader));
        throw new Error('Failed to compile vertex shader.');
    }
    return vertexShader;
}
function createFragmentShader(gl, fragmentShaderSource) {
    const fragmentShader = throwIfNull(gl, () => gl.createShader(gl.FRAGMENT_SHADER), 'Unable to create fragment WebGLShader.');
    callAndCheck(gl, () => gl.shaderSource(fragmentShader, fragmentShaderSource));
    callAndCheck(gl, () => gl.compileShader(fragmentShader));
    if (gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS) === false) {
        logShaderSourceAndInfoLog(fragmentShaderSource, gl.getShaderInfoLog(fragmentShader));
        throw new Error('Failed to compile fragment shader.');
    }
    return fragmentShader;
}
const lineNumberRegex = /ERROR: [0-9]+:([0-9]+):/g;
function logShaderSourceAndInfoLog(shaderSource, shaderInfoLog) {
    const lineNumberRegexResult = lineNumberRegex.exec(shaderInfoLog);
    if (lineNumberRegexResult == null) {
        console.log(`Couldn't parse line number in error: ${shaderInfoLog}`);
        console.log(shaderSource);
        return;
    }
    const lineNumber = +lineNumberRegexResult[1];
    const shaderLines = shaderSource.split('\n');
    const pad = shaderLines.length.toString().length + 2;
    const linesWithLineNumbers = shaderLines.map((line, lineNumber) => _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].rightPad((lineNumber + 1).toString(), pad) + line);
    let maxLineLength = 0;
    for (let i = 0; i < linesWithLineNumbers.length; i++) {
        maxLineLength = Math.max(linesWithLineNumbers[i].length, maxLineLength);
    }
    const beforeErrorLines = linesWithLineNumbers.slice(0, lineNumber - 1);
    const errorLine = linesWithLineNumbers.slice(lineNumber - 1, lineNumber);
    const afterErrorLines = linesWithLineNumbers.slice(lineNumber);
    console.log(beforeErrorLines.join('\n'));
    console.log(shaderInfoLog.split('\n')[0]);
    console.log(`%c ${_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].rightPad(errorLine[0], maxLineLength)}`, 'border:1px solid red; background-color:#e3d2d2; color:#a61717');
    console.log(afterErrorLines.join('\n'));
}
function createProgram(gl) {
    return throwIfNull(gl, () => gl.createProgram(), 'Unable to create WebGLProgram.');
}
function linkProgram(gl, program) {
    callAndCheck(gl, () => gl.linkProgram(program));
    if (gl.getProgramParameter(program, gl.LINK_STATUS) === false) {
        console.log(gl.getProgramInfoLog(program));
        throw new Error('Failed to link vertex and fragment shaders.');
    }
}
function validateProgram(gl, program) {
    callAndCheck(gl, () => gl.validateProgram(program));
    if (gl.getProgramParameter(program, gl.VALIDATE_STATUS) === false) {
        console.log(gl.getProgramInfoLog(program));
        throw new Error('Shader program validation failed.');
    }
}
function createStaticVertexBuffer(gl, data) {
    const buffer = throwIfNull(gl, () => gl.createBuffer(), 'Unable to create WebGLBuffer');
    callAndCheck(gl, () => gl.bindBuffer(gl.ARRAY_BUFFER, buffer));
    callAndCheck(gl, () => gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW));
    return buffer;
}
function createStaticIndexBuffer(gl, data) {
    const buffer = throwIfNull(gl, () => gl.createBuffer(), 'Unable to create WebGLBuffer');
    callAndCheck(gl, () => gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffer));
    callAndCheck(gl, () => gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, data, gl.STATIC_DRAW));
    return buffer;
}
function getNumChannels() {
    if (Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["env"])().getNumber('WEBGL_VERSION') === 2) {
        return 1;
    }
    return 4;
}
function createTexture(gl) {
    return throwIfNull(gl, () => gl.createTexture(), 'Unable to create WebGLTexture.');
}
function validateTextureSize(width, height) {
    const maxTextureSize = Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["env"])().getNumber('WEBGL_MAX_TEXTURE_SIZE');
    if ((width <= 0) || (height <= 0)) {
        const requested = `[${width}x${height}]`;
        throw new Error('Requested texture size ' + requested + ' is invalid.');
    }
    if ((width > maxTextureSize) || (height > maxTextureSize)) {
        const requested = `[${width}x${height}]`;
        const max = `[${maxTextureSize}x${maxTextureSize}]`;
        throw new Error('Requested texture size ' + requested +
            ' greater than WebGL maximum on this browser / GPU ' + max + '.');
    }
}
function createFramebuffer(gl) {
    return throwIfNull(gl, () => gl.createFramebuffer(), 'Unable to create WebGLFramebuffer.');
}
function bindVertexBufferToProgramAttribute(gl, program, attribute, buffer, arrayEntriesPerItem, itemStrideInBytes, itemOffsetInBytes) {
    const loc = gl.getAttribLocation(program, attribute);
    if (loc === -1) {
        // The GPU compiler decided to strip out this attribute because it's unused,
        // thus no need to bind.
        return false;
    }
    callAndCheck(gl, () => gl.bindBuffer(gl.ARRAY_BUFFER, buffer));
    callAndCheck(gl, () => gl.vertexAttribPointer(loc, arrayEntriesPerItem, gl.FLOAT, false, itemStrideInBytes, itemOffsetInBytes));
    callAndCheck(gl, () => gl.enableVertexAttribArray(loc));
    return true;
}
function bindTextureUnit(gl, texture, textureUnit) {
    validateTextureUnit(gl, textureUnit);
    callAndCheck(gl, () => gl.activeTexture(gl.TEXTURE0 + textureUnit));
    callAndCheck(gl, () => gl.bindTexture(gl.TEXTURE_2D, texture));
}
function unbindTextureUnit(gl, textureUnit) {
    validateTextureUnit(gl, textureUnit);
    callAndCheck(gl, () => gl.activeTexture(gl.TEXTURE0 + textureUnit));
    callAndCheck(gl, () => gl.bindTexture(gl.TEXTURE_2D, null));
}
function getProgramUniformLocationOrThrow(gl, program, uniformName) {
    return throwIfNull(gl, () => gl.getUniformLocation(program, uniformName), 'uniform "' + uniformName + '" not present in program.');
}
function getProgramUniformLocation(gl, program, uniformName) {
    return gl.getUniformLocation(program, uniformName);
}
function bindTextureToProgramUniformSampler(gl, texture, uniformSamplerLocation, textureUnit) {
    callAndCheck(gl, () => bindTextureUnit(gl, texture, textureUnit));
    callAndCheck(gl, () => gl.uniform1i(uniformSamplerLocation, textureUnit));
}
function bindCanvasToFramebuffer(gl) {
    callAndCheck(gl, () => gl.bindFramebuffer(gl.FRAMEBUFFER, null));
    callAndCheck(gl, () => gl.viewport(0, 0, gl.canvas.width, gl.canvas.height));
    callAndCheck(gl, () => gl.scissor(0, 0, gl.canvas.width, gl.canvas.height));
}
function bindColorTextureToFramebuffer(gl, texture, framebuffer) {
    callAndCheck(gl, () => gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer));
    callAndCheck(gl, () => gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0));
}
function unbindColorTextureFromFramebuffer(gl, framebuffer) {
    callAndCheck(gl, () => gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer));
    callAndCheck(gl, () => gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, null, 0));
}
function validateFramebuffer(gl) {
    const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
    if (status !== gl.FRAMEBUFFER_COMPLETE) {
        throw new Error('Error binding framebuffer: ' + getFramebufferErrorMessage(gl, status));
    }
}
function getFramebufferErrorMessage(gl, status) {
    switch (status) {
        case gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
            return 'FRAMEBUFFER_INCOMPLETE_ATTACHMENT';
        case gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
            return 'FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT';
        case gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
            return 'FRAMEBUFFER_INCOMPLETE_DIMENSIONS';
        case gl.FRAMEBUFFER_UNSUPPORTED:
            return 'FRAMEBUFFER_UNSUPPORTED';
        default:
            return `unknown error ${status}`;
    }
}
function throwIfNull(gl, returnTOrNull, failureMessage) {
    const tOrNull = callAndCheck(gl, () => returnTOrNull());
    if (tOrNull == null) {
        throw new Error(failureMessage);
    }
    return tOrNull;
}
function validateTextureUnit(gl, textureUnit) {
    const maxTextureUnit = gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS - 1;
    const glTextureUnit = textureUnit + gl.TEXTURE0;
    if (glTextureUnit < gl.TEXTURE0 || glTextureUnit > maxTextureUnit) {
        const textureUnitRange = `[gl.TEXTURE0, gl.TEXTURE${maxTextureUnit}]`;
        throw new Error(`textureUnit must be in ${textureUnitRange}.`);
    }
}
function getBatchDim(shape, dimsToSkip = 2) {
    return _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].sizeFromShape(shape.slice(0, shape.length - dimsToSkip));
}
function getRowsCols(shape) {
    if (shape.length === 0) {
        throw Error('Cannot get rows and columns of an empty shape array.');
    }
    return [
        shape.length > 1 ? shape[shape.length - 2] : 1, shape[shape.length - 1]
    ];
}
function getShapeAs3D(shape) {
    let shapeAs3D = [1, 1, 1];
    const isScalar = shape.length === 0 || (shape.length === 1 && shape[0] === 1);
    if (!isScalar) {
        shapeAs3D =
            [getBatchDim(shape), ...getRowsCols(shape)];
    }
    return shapeAs3D;
}
function getTextureShapeFromLogicalShape(logShape, isPacked = false) {
    let maxTexSize = Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["env"])().getNumber('WEBGL_MAX_TEXTURE_SIZE');
    if (isPacked) {
        maxTexSize = maxTexSize * 2;
        // This logic ensures we accurately count the number of packed texels needed
        // to accommodate the tensor. We can only pack values in the same texel if
        // they are from adjacent pairs of rows/cols within the same batch. So if a
        // tensor has 3 rows, we pretend it has 4 rows in order to account for the
        // fact that the texels containing the third row are half empty.
        logShape = logShape.map((d, i) => i >= logShape.length - 2 ?
            _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].nearestLargerEven(logShape[i]) :
            logShape[i]);
        // Packed texture height is at least 2 (the channel height of a single
        // texel).
        if (logShape.length === 1) {
            logShape = [2, logShape[0]];
        }
    }
    // If logical shape is 2, we don't squeeze, since we want to match physical.
    if (logShape.length !== 2) {
        const squeezeResult = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].squeezeShape(logShape);
        logShape = squeezeResult.newShape;
    }
    let size = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].sizeFromShape(logShape);
    if (logShape.length <= 1 && size <= maxTexSize) {
        return [1, size];
    }
    else if (logShape.length === 2 && logShape[0] <= maxTexSize &&
        logShape[1] <= maxTexSize) {
        return logShape;
    }
    else if (logShape.length === 3 && logShape[0] * logShape[1] <= maxTexSize &&
        logShape[2] <= maxTexSize) {
        return [logShape[0] * logShape[1], logShape[2]];
    }
    else if (logShape.length === 3 && logShape[0] <= maxTexSize &&
        logShape[1] * logShape[2] <= maxTexSize) {
        return [logShape[0], logShape[1] * logShape[2]];
    }
    else if (logShape.length === 4 &&
        logShape[0] * logShape[1] * logShape[2] <= maxTexSize &&
        logShape[3] <= maxTexSize) {
        return [logShape[0] * logShape[1] * logShape[2], logShape[3]];
    }
    else if (logShape.length === 4 && logShape[0] <= maxTexSize &&
        logShape[1] * logShape[2] * logShape[3] <= maxTexSize) {
        return [logShape[0], logShape[1] * logShape[2] * logShape[3]];
    }
    else {
        if (isPacked) {
            // For packed textures size equals the number of channels required to
            // accommodate the texture data. However in order to squarify such that
            // inner dimensions stay even, we rewrite size to equal the number of
            // texels. Then in the return statement we rehydrate the squarified
            // dimensions to channel units.
            const batchDim = getBatchDim(logShape);
            let rows = 2, cols = 2;
            if (logShape.length) {
                [rows, cols] = getRowsCols(logShape);
            }
            size = batchDim * (rows / 2) * (cols / 2);
            return _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].sizeToSquarishShape(size).map(d => d * 2);
        }
        return _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].sizeToSquarishShape(size);
    }
}
function isEven(n) {
    return n % 2 === 0;
}
/**
 * This determines whether reshaping a packed texture requires rearranging
 * the data within the texture, assuming 2x2 packing.
 */
function isReshapeFree(shape1, shape2) {
    shape1 = shape1.slice(-2);
    shape2 = shape2.slice(-2);
    if (_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].arraysEqual(shape1, shape2)) {
        return true;
    }
    if (!shape1.length || !shape2.length) { // One of the shapes is a scalar.
        return true;
    }
    if (shape1[0] === 0 || shape1[1] === 0 || shape2[0] === 0 ||
        shape2[1] === 0) {
        return true;
    }
    if (shape1.length !== shape2.length) { // One of the shapes is a vector.
        const shape1Cols = shape1.slice(-1)[0];
        const shape2Cols = shape2.slice(-1)[0];
        if (shape1Cols === shape2Cols) {
            return true;
        }
        if (isEven(shape1Cols) && isEven(shape2Cols) &&
            (shape1[0] === 1 || shape2[0] === 1)) {
            return true;
        }
    }
    return shape1[1] === shape2[1] && isEven(shape1[0]) && isEven(shape2[0]);
}
// We cache webgl params because the environment gets reset between
// unit tests and we don't want to constantly query the WebGLContext for
// MAX_TEXTURE_SIZE.
let MAX_TEXTURE_SIZE;
let MAX_TEXTURES_IN_SHADER;
function getWebGLMaxTextureSize(webGLVersion) {
    if (MAX_TEXTURE_SIZE == null) {
        const gl = Object(_canvas_util__WEBPACK_IMPORTED_MODULE_1__["getWebGLContext"])(webGLVersion);
        MAX_TEXTURE_SIZE = gl.getParameter(gl.MAX_TEXTURE_SIZE);
    }
    return MAX_TEXTURE_SIZE;
}
function resetMaxTextureSize() {
    MAX_TEXTURE_SIZE = null;
}
function resetMaxTexturesInShader() {
    MAX_TEXTURES_IN_SHADER = null;
}
function getMaxTexturesInShader(webGLVersion) {
    if (MAX_TEXTURES_IN_SHADER == null) {
        const gl = Object(_canvas_util__WEBPACK_IMPORTED_MODULE_1__["getWebGLContext"])(webGLVersion);
        MAX_TEXTURES_IN_SHADER = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);
    }
    // We cap at 16 to avoid spurious runtime "memory exhausted" error.
    return Math.min(16, MAX_TEXTURES_IN_SHADER);
}
function getWebGLDisjointQueryTimerVersion(webGLVersion) {
    if (webGLVersion === 0) {
        return 0;
    }
    let queryTimerVersion;
    const gl = Object(_canvas_util__WEBPACK_IMPORTED_MODULE_1__["getWebGLContext"])(webGLVersion);
    if (hasExtension(gl, 'EXT_disjoint_timer_query_webgl2') &&
        webGLVersion === 2) {
        queryTimerVersion = 2;
    }
    else if (hasExtension(gl, 'EXT_disjoint_timer_query')) {
        queryTimerVersion = 1;
    }
    else {
        queryTimerVersion = 0;
    }
    return queryTimerVersion;
}
function hasExtension(gl, extensionName) {
    const ext = gl.getExtension(extensionName);
    return ext != null;
}
function isWebGLVersionEnabled(webGLVersion) {
    try {
        const gl = Object(_canvas_util__WEBPACK_IMPORTED_MODULE_1__["getWebGLContext"])(webGLVersion);
        if (gl != null) {
            return true;
        }
    }
    catch (e) {
        console.log('Error when getting WebGL context: ', e);
        return false;
    }
    return false;
}
function isCapableOfRenderingToFloatTexture(webGLVersion) {
    if (webGLVersion === 0) {
        return false;
    }
    const gl = Object(_canvas_util__WEBPACK_IMPORTED_MODULE_1__["getWebGLContext"])(webGLVersion);
    if (webGLVersion === 1) {
        if (!hasExtension(gl, 'OES_texture_float')) {
            return false;
        }
    }
    else {
        if (!hasExtension(gl, 'EXT_color_buffer_float')) {
            return false;
        }
    }
    const isFrameBufferComplete = createFloatTextureAndBindToFramebuffer(gl);
    return isFrameBufferComplete;
}
/**
 * Check if we can download values from a float/half-float texture.
 *
 * Note that for performance reasons we use binding a texture to a framebuffer
 * as a proxy for ability to download float values later using readPixels. The
 * texture params of this texture will not match those in readPixels exactly
 * but if we are unable to bind some kind of float texture to the frameBuffer
 * then we definitely will not be able to read float values from it.
 */
function isDownloadFloatTextureEnabled(webGLVersion) {
    if (webGLVersion === 0) {
        return false;
    }
    const gl = Object(_canvas_util__WEBPACK_IMPORTED_MODULE_1__["getWebGLContext"])(webGLVersion);
    if (webGLVersion === 1) {
        if (!hasExtension(gl, 'OES_texture_float')) {
            return false;
        }
        if (!hasExtension(gl, 'WEBGL_color_buffer_float')) {
            return false;
        }
    }
    else {
        if (hasExtension(gl, 'EXT_color_buffer_float')) {
            return createFloatTextureAndBindToFramebuffer(gl);
        }
        const COLOR_BUFFER_HALF_FLOAT = 'EXT_color_buffer_half_float';
        if (hasExtension(gl, COLOR_BUFFER_HALF_FLOAT)) {
            const textureHalfFloatExtension = gl.getExtension(COLOR_BUFFER_HALF_FLOAT);
            return createHalfFloatTextureAndBindToFramebuffer(gl, textureHalfFloatExtension);
        }
        return false;
    }
    const isFrameBufferComplete = createFloatTextureAndBindToFramebuffer(gl);
    return isFrameBufferComplete;
}
function createFloatTextureAndBindToFramebuffer(gl) {
    const texConfig = Object(_tex_util__WEBPACK_IMPORTED_MODULE_2__["getTextureConfig"])(gl);
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    const width = 1;
    const height = 1;
    gl.texImage2D(gl.TEXTURE_2D, 0, texConfig.internalFormatFloat, width, height, 0, texConfig.textureFormatFloat, texConfig.textureTypeFloat, null);
    const frameBuffer = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
    const isFrameBufferComplete = gl.checkFramebufferStatus(gl.FRAMEBUFFER) === gl.FRAMEBUFFER_COMPLETE;
    gl.bindTexture(gl.TEXTURE_2D, null);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.deleteTexture(texture);
    gl.deleteFramebuffer(frameBuffer);
    return isFrameBufferComplete;
}
function createHalfFloatTextureAndBindToFramebuffer(
// tslint:disable-next-line:no-any
gl, textureHalfFloatExtension) {
    const texConfig = Object(_tex_util__WEBPACK_IMPORTED_MODULE_2__["getTextureConfig"])(gl, textureHalfFloatExtension);
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    const width = 1;
    const height = 1;
    gl.texImage2D(gl.TEXTURE_2D, 0, texConfig.internalFormatHalfFloat, width, height, 0, texConfig.textureFormatFloat, texConfig.textureTypeHalfFloat, null);
    const frameBuffer = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
    const isFrameBufferComplete = gl.checkFramebufferStatus(gl.FRAMEBUFFER) === gl.FRAMEBUFFER_COMPLETE;
    gl.bindTexture(gl.TEXTURE_2D, null);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.deleteTexture(texture);
    gl.deleteFramebuffer(frameBuffer);
    return isFrameBufferComplete;
}
function isWebGLFenceEnabled(webGLVersion) {
    if (webGLVersion !== 2) {
        return false;
    }
    const gl = Object(_canvas_util__WEBPACK_IMPORTED_MODULE_1__["getWebGLContext"])(webGLVersion);
    // tslint:disable-next-line:no-any
    const isEnabled = gl.fenceSync != null;
    return isEnabled;
}
function assertNotComplex(tensor, opName) {
    if (!Array.isArray(tensor)) {
        tensor = [tensor];
    }
    tensor.forEach(t => {
        if (t != null) {
            _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].assert(t.dtype !== 'complex64', () => `${opName} does not support complex64 tensors ` +
                'in the WebGL backend.');
        }
    });
}
//# sourceMappingURL=webgl_util.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/object-detection/object-detection.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/object-detection/object-detection.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Object Detection\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content #content>\n  <ion-item>\n    <ion-label position=\"stacked\">Base Model</ion-label>\n    <ion-select (ionChange)=\"baseModelChange($event)\" name=\"baseModel\" value=\"lite_mobilenet_v2\">\n      <ion-select-option value=\"lite_mobilenet_v2\">Lite Mobilenet V2</ion-select-option>\n      <ion-select-option value=\"mobilenet_v2\">Mobilenet v2</ion-select-option>\n      <ion-select-option value=\"mobilenet_v1\">Mobilenet v1</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <div #canvasContainer class=\"ion-text-center canvasContainer\">\n    <canvas #canvas></canvas>\n  </div>\n</ion-content>\n\n<ion-footer class=\"ion-text-center\">\n  <input #fileSelector (change)=\"onFileChange($event)\" accept=\"image/*\" style=\"display: none;\"\n         type=\"file\">\n  <ion-button (click)=\"clickFileSelector()\" class=\"ion-text-center\">Select File ...</ion-button>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/object-detection/object-detection.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/object-detection/object-detection.module.ts ***!
  \*************************************************************/
/*! exports provided: ObjectDetectionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectDetectionPageModule", function() { return ObjectDetectionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _object_detection_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./object-detection.page */ "./src/app/object-detection/object-detection.page.ts");







const routes = [
    {
        path: '',
        component: _object_detection_page__WEBPACK_IMPORTED_MODULE_6__["ObjectDetectionPage"]
    }
];
let ObjectDetectionPageModule = class ObjectDetectionPageModule {
};
ObjectDetectionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_object_detection_page__WEBPACK_IMPORTED_MODULE_6__["ObjectDetectionPage"]]
    })
], ObjectDetectionPageModule);



/***/ }),

/***/ "./src/app/object-detection/object-detection.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/object-detection/object-detection.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-footer {\n  padding: 3px;\n}\n\n.canvasContainer {\n  width: 100%;\n  height: 60vh;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb2JqZWN0LWRldGVjdGlvbi9vYmplY3QtZGV0ZWN0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL29iamVjdC1kZXRlY3Rpb24vb2JqZWN0LWRldGVjdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZm9vdGVyIHtcbiAgcGFkZGluZzogM3B4O1xufVxuXG4uY2FudmFzQ29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjB2aDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/object-detection/object-detection.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/object-detection/object-detection.page.ts ***!
  \***********************************************************/
/*! exports provided: ObjectDetectionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectDetectionPage", function() { return ObjectDetectionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tensorflow_models_coco_ssd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tensorflow-models/coco-ssd */ "./node_modules/@tensorflow-models/coco-ssd/dist/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _tensorflow_tfjs_backend_webgl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tensorflow/tfjs-backend-webgl */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/index.js");





let ObjectDetectionPage = class ObjectDetectionPage {
    constructor(loadingController) {
        this.loadingController = loadingController;
        this.baseModel = 'lite_mobilenet_v2';
        this.ratio = null;
        this.url = null;
        this.modelPromise = Object(_tensorflow_models_coco_ssd__WEBPACK_IMPORTED_MODULE_2__["load"])({ base: this.baseModel });
    }
    ngOnInit() {
        this.ctx = this.canvas.nativeElement.getContext('2d');
    }
    baseModelChange(event) {
        this.baseModel = event.detail.value;
        this.modelPromise = Object(_tensorflow_models_coco_ssd__WEBPACK_IMPORTED_MODULE_2__["load"])({ base: this.baseModel });
        if (this.url) {
            this.detect(this.url);
        }
    }
    onFileChange(event) {
        // @ts-ignore
        this.url = URL.createObjectURL(event.target.files[0]);
        this.detect(this.url);
    }
    detect(url) {
        const img = new Image();
        img.onload = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.drawImageScaled(img);
            const loading = yield this.loadingController.create({
                message: 'Detecting...'
            });
            yield loading.present();
            const model = yield this.modelPromise;
            const predictions = yield model.detect(img);
            console.log(predictions);
            if (this.ratio === null) {
                throw new Error('ratio not set');
            }
            for (const prediction of predictions) {
                const [x, y, width, height] = prediction.bbox;
                this.ctx.beginPath();
                this.ctx.moveTo(x * this.ratio, y * this.ratio);
                this.ctx.lineTo((x + width) * this.ratio, y * this.ratio);
                this.ctx.lineTo((x + width) * this.ratio, (y + height) * this.ratio);
                this.ctx.lineTo(x * this.ratio, (y + height) * this.ratio);
                this.ctx.closePath();
                this.ctx.strokeStyle = '#bada55';
                this.ctx.lineWidth = 3;
                this.ctx.stroke();
                this.ctx.font = '10px Arial';
                this.ctx.fillStyle = 'yellow';
                this.ctx.fillText(prediction.class, (x + 4) * this.ratio, (y + 15) * this.ratio);
            }
            loading.dismiss();
        });
        img.src = url;
    }
    clickFileSelector() {
        this.fileInput.nativeElement.click();
    }
    // tslint:disable-next-line:no-any
    drawImageScaled(img) {
        const width = this.canvasContainer.nativeElement.clientWidth;
        const height = this.canvasContainer.nativeElement.clientHeight;
        const hRatio = width / img.width;
        const vRatio = height / img.height;
        this.ratio = Math.min(hRatio, vRatio);
        if (this.ratio > 1) {
            this.ratio = 1;
        }
        this.canvas.nativeElement.width = img.width * this.ratio;
        this.canvas.nativeElement.height = img.height * this.ratio;
        this.ctx.clearRect(0, 0, width, height);
        this.ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, img.width * this.ratio, img.height * this.ratio);
    }
};
ObjectDetectionPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
];
ObjectDetectionPage.propDecorators = {
    fileInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['fileSelector',] }],
    canvas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['canvas', { static: true },] }],
    canvasContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['canvasContainer',] }]
};
ObjectDetectionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-object-detection',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./object-detection.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/object-detection/object-detection.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./object-detection.page.scss */ "./src/app/object-detection/object-detection.page.scss")).default]
    })
], ObjectDetectionPage);



/***/ })

}]);
//# sourceMappingURL=object-detection-object-detection-module.js.map