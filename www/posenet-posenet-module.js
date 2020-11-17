(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["posenet-posenet-module"],{

/***/ "./node_modules/@tensorflow-models/posenet/dist/posenet.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@tensorflow-models/posenet/dist/posenet.esm.js ***!
  \*********************************************************************/
/*! exports provided: decodeMultiplePoses, decodeSinglePose, MobileNet, partChannels, partIds, partNames, poseChain, load, PoseNet, getAdjacentKeyPoints, getBoundingBox, getBoundingBoxPoints, scaleAndFlipPoses, scalePose, version */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodeMultiplePoses", function() { return decodeMultiplePoses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodeSinglePose", function() { return decodeSinglePose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileNet", function() { return MobileNet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "partChannels", function() { return partChannels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "partIds", function() { return partIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "partNames", function() { return partNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "poseChain", function() { return poseChain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return load; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoseNet", function() { return PoseNet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAdjacentKeyPoints", function() { return getAdjacentKeyPoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBoundingBox", function() { return getBoundingBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBoundingBoxPoints", function() { return getBoundingBoxPoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleAndFlipPoses", function() { return scaleAndFlipPoses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scalePose", function() { return scalePose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* harmony import */ var _tensorflow_tfjs_converter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tensorflow/tfjs-converter */ "./node_modules/@tensorflow/tfjs-converter/dist/index.js");
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
var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function __extends(e,t){function n(){this.constructor=e}extendStatics(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var __assign=function(){return(__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function __awaiter(e,t,n,r){return new(n||(n=Promise))(function(o,i){function s(e){try{a(r.next(e))}catch(e){i(e)}}function u(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(s,u)}a((r=r.apply(e,t||[])).next())})}function __generator(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}var BaseModel=function(){function e(e,t){this.model=e,this.outputStride=t;var n=this.model.inputs[0].shape;_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].assert(-1===n[1]&&-1===n[2],function(){return"Input shape ["+n[1]+", "+n[2]+"] must both be equal to or -1"})}return e.prototype.predict=function(e){var t=this;return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["tidy"])(function(){var n=t.preprocessInput(e.toFloat()).expandDims(0),r=t.model.predict(n).map(function(e){return e.squeeze([0])}),o=t.nameOutputResults(r);return{heatmapScores:o.heatmap.sigmoid(),offsets:o.offsets,displacementFwd:o.displacementFwd,displacementBwd:o.displacementBwd}})},e.prototype.dispose=function(){this.model.dispose()},e}(),MobileNet=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.preprocessInput=function(e){return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["tidy"])(function(){return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["div"])(e,127.5).sub(1)})},t.prototype.nameOutputResults=function(e){return{offsets:e[0],heatmap:e[1],displacementFwd:e[2],displacementBwd:e[3]}},t}(BaseModel);function half(e){return Math.floor(e/2)}var MaxHeap=function(){function e(e,t){this.priorityQueue=new Array(e),this.numberOfElements=-1,this.getElementValue=t}return e.prototype.enqueue=function(e){this.priorityQueue[++this.numberOfElements]=e,this.swim(this.numberOfElements)},e.prototype.dequeue=function(){var e=this.priorityQueue[0];return this.exchange(0,this.numberOfElements--),this.sink(0),this.priorityQueue[this.numberOfElements+1]=null,e},e.prototype.empty=function(){return-1===this.numberOfElements},e.prototype.size=function(){return this.numberOfElements+1},e.prototype.all=function(){return this.priorityQueue.slice(0,this.numberOfElements+1)},e.prototype.max=function(){return this.priorityQueue[0]},e.prototype.swim=function(e){for(;e>0&&this.less(half(e),e);)this.exchange(e,half(e)),e=half(e)},e.prototype.sink=function(e){for(;2*e<=this.numberOfElements;){var t=2*e;if(t<this.numberOfElements&&this.less(t,t+1)&&t++,!this.less(e,t))break;this.exchange(e,t),e=t}},e.prototype.getValueAt=function(e){return this.getElementValue(this.priorityQueue[e])},e.prototype.less=function(e,t){return this.getValueAt(e)<this.getValueAt(t)},e.prototype.exchange=function(e,t){var n=this.priorityQueue[e];this.priorityQueue[e]=this.priorityQueue[t],this.priorityQueue[t]=n},e}();function scoreIsMaximumInLocalWindow(e,t,n,r,o,i){for(var s=i.shape,u=s[0],a=s[1],l=!0,p=Math.max(n-o,0),c=Math.min(n+o+1,u),f=p;f<c;++f){for(var d=Math.max(r-o,0),h=Math.min(r+o+1,a),m=d;m<h;++m)if(i.get(f,m,e)>t){l=!1;break}if(!l)break}return l}function buildPartWithScoreQueue(e,t,n){for(var r=n.shape,o=r[0],i=r[1],s=r[2],u=new MaxHeap(o*i*s,function(e){return e.score}),a=0;a<o;++a)for(var l=0;l<i;++l)for(var p=0;p<s;++p){var c=n.get(a,l,p);c<e||scoreIsMaximumInLocalWindow(p,c,a,l,t,n)&&u.enqueue({score:c,part:{heatmapY:a,heatmapX:l,id:p}})}return u}var partNames=["nose","leftEye","rightEye","leftEar","rightEar","leftShoulder","rightShoulder","leftElbow","rightElbow","leftWrist","rightWrist","leftHip","rightHip","leftKnee","rightKnee","leftAnkle","rightAnkle"],NUM_KEYPOINTS=partNames.length,partIds=partNames.reduce(function(e,t,n){return e[t]=n,e},{}),connectedPartNames=[["leftHip","leftShoulder"],["leftElbow","leftShoulder"],["leftElbow","leftWrist"],["leftHip","leftKnee"],["leftKnee","leftAnkle"],["rightHip","rightShoulder"],["rightElbow","rightShoulder"],["rightElbow","rightWrist"],["rightHip","rightKnee"],["rightKnee","rightAnkle"],["leftShoulder","rightShoulder"],["leftHip","rightHip"]],poseChain=[["nose","leftEye"],["leftEye","leftEar"],["nose","rightEye"],["rightEye","rightEar"],["nose","leftShoulder"],["leftShoulder","leftElbow"],["leftElbow","leftWrist"],["leftShoulder","leftHip"],["leftHip","leftKnee"],["leftKnee","leftAnkle"],["nose","rightShoulder"],["rightShoulder","rightElbow"],["rightElbow","rightWrist"],["rightShoulder","rightHip"],["rightHip","rightKnee"],["rightKnee","rightAnkle"]],connectedPartIndices=connectedPartNames.map(function(e){var t=e[0],n=e[1];return[partIds[t],partIds[n]]}),partChannels=["left_face","right_face","right_upper_leg_front","right_lower_leg_back","right_upper_leg_back","left_lower_leg_front","left_upper_leg_front","left_upper_leg_back","left_lower_leg_back","right_feet","right_lower_leg_front","left_feet","torso_front","torso_back","right_upper_arm_front","right_upper_arm_back","right_lower_arm_back","left_lower_arm_front","left_upper_arm_front","left_upper_arm_back","left_lower_arm_back","right_hand","right_lower_arm_front","left_hand"];function getOffsetPoint(e,t,n,r){return{y:r.get(e,t,n),x:r.get(e,t,n+NUM_KEYPOINTS)}}function getImageCoords(e,t,n){var r=getOffsetPoint(e.heatmapY,e.heatmapX,e.id,n),o=r.y,i=r.x;return{x:e.heatmapX*t+i,y:e.heatmapY*t+o}}function clamp(e,t,n){return e<t?t:e>n?n:e}function squaredDistance(e,t,n,r){var o=n-e,i=r-t;return o*o+i*i}function addVectors(e,t){return{x:e.x+t.x,y:e.y+t.y}}var parentChildrenTuples=poseChain.map(function(e){var t=e[0],n=e[1];return[partIds[t],partIds[n]]}),parentToChildEdges=parentChildrenTuples.map(function(e){return e[1]}),childToParentEdges=parentChildrenTuples.map(function(e){return e[0]});function getDisplacement(e,t,n){var r=n.shape[2]/2;return{y:n.get(t.y,t.x,e),x:n.get(t.y,t.x,r+e)}}function getStridedIndexNearPoint(e,t,n,r){return{y:clamp(Math.round(e.y/t),0,n-1),x:clamp(Math.round(e.x/t),0,r-1)}}function traverseToTargetKeypoint(e,t,n,r,o,i,s,u){void 0===u&&(u=2);for(var a=r.shape,l=a[0],p=a[1],c=getDisplacement(e,getStridedIndexNearPoint(t.position,i,l,p),s),f=addVectors(t.position,c),d=0;d<u;d++){var h=getStridedIndexNearPoint(f,i,l,p),m=getOffsetPoint(h.y,h.x,n,o);f=addVectors({x:h.x*i,y:h.y*i},{x:m.x,y:m.y})}var g=getStridedIndexNearPoint(f,i,l,p),_=r.get(g.y,g.x,n);return{position:f,part:partNames[n],score:_}}function decodePose(e,t,n,r,o,i){var s=t.shape[2],u=parentToChildEdges.length,a=new Array(s),l=e.part,p=e.score,c=getImageCoords(l,r,n);a[l.id]={score:p,part:partNames[l.id],position:c};for(var f=u-1;f>=0;--f){var d=parentToChildEdges[f],h=childToParentEdges[f];a[d]&&!a[h]&&(a[h]=traverseToTargetKeypoint(f,a[d],h,t,n,r,i))}for(f=0;f<u;++f){d=childToParentEdges[f],h=parentToChildEdges[f];a[d]&&!a[h]&&(a[h]=traverseToTargetKeypoint(f,a[d],h,t,n,r,o))}return a}function withinNmsRadiusOfCorrespondingPoint(e,t,n,r){var o=n.x,i=n.y;return e.some(function(e){var n=e.keypoints[r].position;return squaredDistance(i,o,n.y,n.x)<=t})}function getInstanceScore(e,t,n){return n.reduce(function(n,r,o){var i=r.position,s=r.score;return withinNmsRadiusOfCorrespondingPoint(e,t,i,o)||(n+=s),n},0)/n.length}var kLocalMaximumRadius=1;function decodeMultiplePoses(e,t,n,r,o,i,s,u){void 0===s&&(s=.5),void 0===u&&(u=20);for(var a=[],l=buildPartWithScoreQueue(s,kLocalMaximumRadius,e),p=u*u;a.length<i&&!l.empty();){var c=l.dequeue();if(!withinNmsRadiusOfCorrespondingPoint(a,p,getImageCoords(c.part,o,t),c.part.id)){var f=decodePose(c,e,t,o,n,r),d=getInstanceScore(a,p,f);a.push({keypoints:f,score:d})}}return a}function mod(e,t){return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["tidy"])(function(){var n=e.div(Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["scalar"])(t,"int32"));return e.sub(n.mul(Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["scalar"])(t,"int32")))})}function argmax2d(e){var t=e.shape,n=t[0],r=t[1],o=t[2];return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["tidy"])(function(){var t=e.reshape([n*r,o]).argMax(0),i=t.div(Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["scalar"])(r,"int32")).expandDims(1),s=mod(t,r).expandDims(1);return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["concat"])([i,s],1)})}function getPointsConfidence(e,t){for(var n=t.shape[0],r=new Float32Array(n),o=0;o<n;o++){var i=t.get(o,0),s=t.get(o,1);r[o]=e.get(i,s,o)}return r}function getOffsetPoint$1(e,t,n,r){return{y:r.get(e,t,n),x:r.get(e,t,n+NUM_KEYPOINTS)}}function getOffsetVectors(e,t){for(var n=[],r=0;r<NUM_KEYPOINTS;r++){var o=getOffsetPoint$1(e.get(r,0).valueOf(),e.get(r,1).valueOf(),r,t),i=o.x,s=o.y;n.push(s),n.push(i)}return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["tensor2d"])(n,[NUM_KEYPOINTS,2])}function getOffsetPoints(e,t,n){return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["tidy"])(function(){var r=getOffsetVectors(e,n);return e.toTensor().mul(Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["scalar"])(t,"int32")).toFloat().add(r)})}function decodeSinglePose(e,t,n){return __awaiter(this,void 0,void 0,function(){var r,o,i,s,u,a,l,p,c,f;return __generator(this,function(d){switch(d.label){case 0:return r=0,o=argmax2d(e),[4,Promise.all([e.buffer(),t.buffer(),o.buffer()])];case 1:return i=d.sent(),s=i[0],u=i[1],a=i[2],[4,(l=getOffsetPoints(a,n,u)).buffer()];case 2:return p=d.sent(),c=Array.from(getPointsConfidence(s,a)),f=c.map(function(e,t){return r+=e,{position:{y:p.get(t,0),x:p.get(t,1)},part:partNames[t],score:e}}),o.dispose(),l.dispose(),[2,{keypoints:f,score:r/f.length}]}})})}var MOBILENET_BASE_URL="https://storage.googleapis.com/tfjs-models/savedmodel/posenet/mobilenet/",RESNET50_BASE_URL="https://storage.googleapis.com/tfjs-models/savedmodel/posenet/resnet50/";function resNet50Checkpoint(e,t){var n="model-stride"+e+".json";return 4===t?RESNET50_BASE_URL+"float/"+n:RESNET50_BASE_URL+"quant"+t+"/"+n}function mobileNetCheckpoint(e,t,n){var r={1:"100",.75:"075",.5:"050"},o="model-stride"+e+".json";return 4===n?MOBILENET_BASE_URL+"float/"+r[t]+"/"+o:MOBILENET_BASE_URL+"quant"+n+"/"+r[t]+"/"+o}var imageNetMean=[-123.15,-115.9,-103.06],ResNet=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.preprocessInput=function(e){return e.add(imageNetMean)},t.prototype.nameOutputResults=function(e){var t=e[0],n=e[1];return{offsets:e[2],heatmap:e[3],displacementFwd:t,displacementBwd:n}},t}(BaseModel);function eitherPointDoesntMeetConfidence(e,t,n){return e<n||t<n}function getAdjacentKeyPoints(e,t){return connectedPartIndices.reduce(function(n,r){var o=r[0],i=r[1];return eitherPointDoesntMeetConfidence(e[o].score,e[i].score,t)?n:(n.push([e[o],e[i]]),n)},[])}var NEGATIVE_INFINITY=Number.NEGATIVE_INFINITY,POSITIVE_INFINITY=Number.POSITIVE_INFINITY;function getBoundingBox(e){return e.reduce(function(e,t){var n=e.maxX,r=e.maxY,o=e.minX,i=e.minY,s=t.position,u=s.x,a=s.y;return{maxX:Math.max(n,u),maxY:Math.max(r,a),minX:Math.min(o,u),minY:Math.min(i,a)}},{maxX:NEGATIVE_INFINITY,maxY:NEGATIVE_INFINITY,minX:POSITIVE_INFINITY,minY:POSITIVE_INFINITY})}function getBoundingBoxPoints(e){var t=getBoundingBox(e),n=t.minX,r=t.minY,o=t.maxX,i=t.maxY;return[{x:n,y:r},{x:o,y:r},{x:o,y:i},{x:n,y:i}]}function toTensorBuffers3D(e){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,Promise.all(e.map(function(e){return e.buffer()}))]})})}function scalePose(e,t,n,r,o){return void 0===r&&(r=0),void 0===o&&(o=0),{score:e.score,keypoints:e.keypoints.map(function(e){var i=e.score,s=e.part,u=e.position;return{score:i,part:s,position:{x:u.x*n+o,y:u.y*t+r}}})}}function scalePoses(e,t,n,r,o){return void 0===r&&(r=0),void 0===o&&(o=0),1===n&&1===t&&0===r&&0===o?e:e.map(function(e){return scalePose(e,t,n,r,o)})}function flipPoseHorizontal(e,t){return{score:e.score,keypoints:e.keypoints.map(function(e){var n=e.score,r=e.part,o=e.position;return{score:n,part:r,position:{x:t-1-o.x,y:o.y}}})}}function flipPosesHorizontal(e,t){return t<=0?e:e.map(function(e){return flipPoseHorizontal(e,t)})}function toValidInputResolution(e,t){return isValidInputResolution(e,t)?e:Math.floor(e/t)*t+1}function validateInputResolution(e){_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].assert("number"==typeof e||"object"==typeof e,function(){return"Invalid inputResolution "+e+". Should be a number or an object with width and height"}),"object"==typeof e&&(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].assert("number"==typeof e.width,function(){return"inputResolution.width has a value of "+e.width+" which is invalid; it must be a number"}),_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].assert("number"==typeof e.height,function(){return"inputResolution.height has a value of "+e.height+" which is invalid; it must be a number"}))}function getValidInputResolutionDimensions(e,t){return validateInputResolution(e),"object"==typeof e?[toValidInputResolution(e.height,t),toValidInputResolution(e.width,t)]:[toValidInputResolution(e,t),toValidInputResolution(e,t)]}var VALID_OUTPUT_STRIDES=[8,16,32];function assertValidOutputStride(e){_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].assert("number"==typeof e,function(){return"outputStride is not a number"}),_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].assert(VALID_OUTPUT_STRIDES.indexOf(e)>=0,function(){return"outputStride of "+e+" is invalid. It must be either 8, 16, or 32"})}function isValidInputResolution(e,t){return(e-1)%t==0}function assertValidResolution(e,t){_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].assert("number"==typeof e[0]&&"number"==typeof e[1],function(){return"both resolution values must be a number but had values "+e}),_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].assert(isValidInputResolution(e[0],t),function(){return"height of "+e[0]+" is invalid for output stride "+t+"."}),_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].assert(isValidInputResolution(e[1],t),function(){return"width of "+e[1]+" is invalid for output stride "+t+"."})}function getInputTensorDimensions(e){return e instanceof _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["Tensor"]?[e.shape[0],e.shape[1]]:[e.height,e.width]}function toInputTensor(e){return e instanceof _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["Tensor"]?e:_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["browser"].fromPixels(e)}function padAndResizeTo(e,t){var n=t[0],r=t[1],o=getInputTensorDimensions(e),i=o[0],s=o[1],u=r/n,a=[0,0,0,0],l=a[0],p=a[1],c=a[2],f=a[3];return s/i<u?(l=0,p=0,c=Math.round(.5*(u*i-s)),f=Math.round(.5*(u*i-s))):(l=Math.round(.5*(1/u*s-i)),p=Math.round(.5*(1/u*s-i)),c=0,f=0),{resized:Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["tidy"])(function(){var t=toInputTensor(e);return(t=Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["pad3d"])(t,[[l,p],[c,f],[0,0]])).resizeBilinear([n,r])}),padding:{top:l,left:c,right:f,bottom:p}}}function scaleAndFlipPoses(e,t,n,r,o){var i=t[0],s=t[1],u=n[0],a=n[1],l=scalePoses(e,(i+r.top+r.bottom)/u,(s+r.left+r.right)/a,-r.top,-r.left);return o?flipPosesHorizontal(l,s):l}var MOBILENET_V1_CONFIG={architecture:"MobileNetV1",outputStride:16,multiplier:.75,inputResolution:257},VALID_ARCHITECTURE=["MobileNetV1","ResNet50"],VALID_STRIDE={MobileNetV1:[8,16,32],ResNet50:[32,16]},VALID_MULTIPLIER={MobileNetV1:[.5,.75,1],ResNet50:[1]},VALID_QUANT_BYTES=[1,2,4];function validateModelConfig(e){if(null==(e=e||MOBILENET_V1_CONFIG).architecture&&(e.architecture="MobileNetV1"),VALID_ARCHITECTURE.indexOf(e.architecture)<0)throw new Error("Invalid architecture "+e.architecture+". Should be one of "+VALID_ARCHITECTURE);if(null==e.inputResolution&&(e.inputResolution=257),validateInputResolution(e.inputResolution),null==e.outputStride&&(e.outputStride=16),VALID_STRIDE[e.architecture].indexOf(e.outputStride)<0)throw new Error("Invalid outputStride "+e.outputStride+". Should be one of "+VALID_STRIDE[e.architecture]+" for architecutre "+e.architecture+".");if(null==e.multiplier&&(e.multiplier=1),VALID_MULTIPLIER[e.architecture].indexOf(e.multiplier)<0)throw new Error("Invalid multiplier "+e.multiplier+". Should be one of "+VALID_MULTIPLIER[e.architecture]+" for architecutre "+e.architecture+".");if(null==e.quantBytes&&(e.quantBytes=4),VALID_QUANT_BYTES.indexOf(e.quantBytes)<0)throw new Error("Invalid quantBytes "+e.quantBytes+". Should be one of "+VALID_QUANT_BYTES+" for architecutre "+e.architecture+".");return e}var SINGLE_PERSON_INFERENCE_CONFIG={flipHorizontal:!1},MULTI_PERSON_INFERENCE_CONFIG={flipHorizontal:!1,maxDetections:5,scoreThreshold:.5,nmsRadius:20};function validateMultiPersonInputConfig(e){var t=e.maxDetections,n=e.scoreThreshold,r=e.nmsRadius;if(t<=0)throw new Error("Invalid maxDetections "+t+". Should be > 0");if(n<0||n>1)throw new Error("Invalid scoreThreshold "+n+". Should be in range [0.0, 1.0]");if(r<=0)throw new Error("Invalid nmsRadius "+r+".")}var PoseNet=function(){function e(e,t){assertValidOutputStride(e.outputStride),assertValidResolution(t,e.outputStride),this.baseModel=e,this.inputResolution=t}return e.prototype.estimateMultiplePoses=function(e,t){return void 0===t&&(t=MULTI_PERSON_INFERENCE_CONFIG),__awaiter(this,void 0,void 0,function(){var n,r,o,i,s,u,a,l,p,c,f,d,h,m,g,_,I,v,y,E,b;return __generator(this,function(N){switch(N.label){case 0:return n=__assign({},MULTI_PERSON_INFERENCE_CONFIG,t),validateMultiPersonInputConfig(t),r=this.baseModel.outputStride,o=this.inputResolution,i=getInputTensorDimensions(e),s=i[0],u=i[1],a=padAndResizeTo(e,o),l=a.resized,p=a.padding,c=this.baseModel.predict(l),f=c.heatmapScores,d=c.offsets,h=c.displacementFwd,m=c.displacementBwd,[4,toTensorBuffers3D([f,d,h,m])];case 1:return g=N.sent(),_=g[0],I=g[1],v=g[2],y=g[3],[4,decodeMultiplePoses(_,I,v,y,r,n.maxDetections,n.scoreThreshold,n.nmsRadius)];case 2:return E=N.sent(),b=scaleAndFlipPoses(E,[s,u],o,p,n.flipHorizontal),f.dispose(),d.dispose(),h.dispose(),m.dispose(),l.dispose(),[2,b]}})})},e.prototype.estimateSinglePose=function(e,t){return void 0===t&&(t=SINGLE_PERSON_INFERENCE_CONFIG),__awaiter(this,void 0,void 0,function(){var n,r,o,i,s,u,a,l,p,c,f,d,h,m,g,_;return __generator(this,function(I){switch(I.label){case 0:return n=__assign({},SINGLE_PERSON_INFERENCE_CONFIG,t),r=this.baseModel.outputStride,o=this.inputResolution,i=getInputTensorDimensions(e),s=i[0],u=i[1],a=padAndResizeTo(e,o),l=a.resized,p=a.padding,c=this.baseModel.predict(l),f=c.heatmapScores,d=c.offsets,h=c.displacementFwd,m=c.displacementBwd,[4,decodeSinglePose(f,d,r)];case 1:return g=I.sent(),_=scaleAndFlipPoses([g],[s,u],o,p,n.flipHorizontal),f.dispose(),d.dispose(),h.dispose(),m.dispose(),l.dispose(),[2,_[0]]}})})},e.prototype.estimatePoses=function(e,t){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(n){switch(n.label){case 0:return"single-person"!==t.decodingMethod?[3,2]:[4,this.estimateSinglePose(e,t)];case 1:return[2,[n.sent()]];case 2:return[2,this.estimateMultiplePoses(e,t)]}})})},e.prototype.dispose=function(){this.baseModel.dispose()},e}();function loadMobileNet(e){return __awaiter(this,void 0,void 0,function(){var t,n,r,o,i,s,u;return __generator(this,function(a){switch(a.label){case 0:if(t=e.outputStride,n=e.quantBytes,r=e.multiplier,null==_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__)throw new Error("Cannot find TensorFlow.js. If you are using a <script> tag, please also include @tensorflow/tfjs on the page before using this\n        model.");return o=mobileNetCheckpoint(t,r,n),[4,Object(_tensorflow_tfjs_converter__WEBPACK_IMPORTED_MODULE_1__["loadGraphModel"])(e.modelUrl||o)];case 1:return i=a.sent(),s=new MobileNet(i,t),u=getValidInputResolutionDimensions(e.inputResolution,s.outputStride),[2,new PoseNet(s,u)]}})})}function loadResNet(e){return __awaiter(this,void 0,void 0,function(){var t,n,r,o,i,s;return __generator(this,function(u){switch(u.label){case 0:if(t=e.outputStride,n=e.quantBytes,null==_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__)throw new Error("Cannot find TensorFlow.js. If you are using a <script> tag, please also include @tensorflow/tfjs on the page before using this\n        model.");return r=resNet50Checkpoint(t,n),[4,Object(_tensorflow_tfjs_converter__WEBPACK_IMPORTED_MODULE_1__["loadGraphModel"])(e.modelUrl||r)];case 1:return o=u.sent(),i=new ResNet(o,t),s=getValidInputResolutionDimensions(e.inputResolution,i.outputStride),[2,new PoseNet(i,s)]}})})}function load(e){return void 0===e&&(e=MOBILENET_V1_CONFIG),__awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return"ResNet50"===(e=validateModelConfig(e)).architecture?[2,loadResNet(e)]:"MobileNetV1"===e.architecture?[2,loadMobileNet(e)]:[2,null]})})}var version="2.2.1";


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/posenet/posenet.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/posenet/posenet.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Pose Detection</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content #content>\n  <div #canvasContainer class=\"ion-text-center canvasContainer\">\n    <canvas #canvas></canvas>\n  </div>\n</ion-content>\n\n<ion-footer class=\"ion-text-center\">\n  <input #fileSelector (change)=\"onFileCange($event)\" accept=\"image/*\" style=\"display: none;\"\n         type=\"file\">\n  <ion-button (click)=\"clickFileSelector()\" class=\"ion-text-center\">Select File ...</ion-button>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/posenet/posenet.module.ts":
/*!*******************************************!*\
  !*** ./src/app/posenet/posenet.module.ts ***!
  \*******************************************/
/*! exports provided: PosenetPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PosenetPageModule", function() { return PosenetPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _posenet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./posenet.page */ "./src/app/posenet/posenet.page.ts");







const routes = [
    {
        path: '',
        component: _posenet_page__WEBPACK_IMPORTED_MODULE_6__["PosenetPage"]
    }
];
let PosenetPageModule = class PosenetPageModule {
};
PosenetPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_posenet_page__WEBPACK_IMPORTED_MODULE_6__["PosenetPage"]]
    })
], PosenetPageModule);



/***/ }),

/***/ "./src/app/posenet/posenet.page.scss":
/*!*******************************************!*\
  !*** ./src/app/posenet/posenet.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-footer {\n  padding: 3px;\n}\n\n.canvasContainer {\n  width: 100%;\n  height: 60vh;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zZW5ldC9wb3NlbmV0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Bvc2VuZXQvcG9zZW5ldC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZm9vdGVyIHtcbiAgcGFkZGluZzogM3B4O1xufVxuXG4uY2FudmFzQ29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjB2aDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/posenet/posenet.page.ts":
/*!*****************************************!*\
  !*** ./src/app/posenet/posenet.page.ts ***!
  \*****************************************/
/*! exports provided: PosenetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PosenetPage", function() { return PosenetPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tensorflow_models_posenet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tensorflow-models/posenet */ "./node_modules/@tensorflow-models/posenet/dist/posenet.esm.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




let PosenetPage = class PosenetPage {
    constructor(loadingController) {
        this.loadingController = loadingController;
        this.ratio = null;
        this.modelPromise = Object(_tensorflow_models_posenet__WEBPACK_IMPORTED_MODULE_2__["load"])();
    }
    ngOnInit() {
        this.ctx = this.canvas.nativeElement.getContext('2d');
    }
    onFileCange(event) {
        // @ts-ignore
        const url = URL.createObjectURL(event.target.files[0]);
        const img = new Image();
        img.onload = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.drawImageScaled(img);
            const loading = yield this.loadingController.create({
                message: 'Estimating...'
            });
            yield loading.present();
            yield this.estimate(img);
            yield loading.dismiss();
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
    // tslint:disable-next-line:no-any
    estimate(img) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const flipHorizontal = false;
            const model = yield this.modelPromise;
            const poses = yield model.estimatePoses(img, {
                flipHorizontal,
                decodingMethod: 'single-person'
            });
            const pose = poses && poses[0];
            if (pose && pose.keypoints && this.ratio) {
                for (const keypoint of pose.keypoints.filter(kp => kp.score >= 0.2)) {
                    const x = keypoint.position.x * this.ratio;
                    const y = keypoint.position.y * this.ratio;
                    this.ctx.beginPath();
                    this.ctx.arc(x, y, 5, 0, 2 * Math.PI, false);
                    this.ctx.lineWidth = 3;
                    this.ctx.strokeStyle = '#bada55';
                    this.ctx.stroke();
                }
                const adjacentKeyPoints = Object(_tensorflow_models_posenet__WEBPACK_IMPORTED_MODULE_2__["getAdjacentKeyPoints"])(pose.keypoints, 0.2);
                adjacentKeyPoints.forEach(keypoints => this.drawSegment(keypoints[0].position, keypoints[1].position));
            }
        });
    }
    drawSegment({ y: ay, x: ax }, { y: by, x: bx }) {
        if (this.ratio) {
            this.ctx.beginPath();
            this.ctx.moveTo(ax * this.ratio, ay * this.ratio);
            this.ctx.lineTo(bx * this.ratio, by * this.ratio);
            this.ctx.lineWidth = 2;
            this.ctx.strokeStyle = '#bada55';
            this.ctx.stroke();
        }
    }
};
PosenetPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
];
PosenetPage.propDecorators = {
    fileInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['fileSelector',] }],
    canvas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['canvas', { static: true },] }],
    canvasContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['canvasContainer',] }]
};
PosenetPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-posenet',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./posenet.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/posenet/posenet.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./posenet.page.scss */ "./src/app/posenet/posenet.page.scss")).default]
    })
], PosenetPage);



/***/ })

}]);
//# sourceMappingURL=posenet-posenet-module.js.map