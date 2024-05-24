// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-es v1.9.0 with parameter "ts_nocheck=false,target=ts"
// @generated from file extra/extensions-proto3.proto (package proto3ext, syntax proto3)
/* eslint-disable */

import { FileOptions, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from extension: uint32 uint32_ext = 7001;
 */
export const uint32_ext = proto3.makeExtension<FileOptions, number>(
  "proto3ext.uint32_ext", 
  FileOptions, 
  { no: 7001, kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
);

/**
 * @generated from extension: optional uint32 optional_uint32_ext = 7002;
 */
export const optional_uint32_ext = proto3.makeExtension<FileOptions, number>(
  "proto3ext.optional_uint32_ext", 
  FileOptions, 
  { no: 7002, kind: "scalar", T: 13 /* ScalarType.UINT32 */, opt: true },
);

/**
 * @generated from extension: repeated uint32 packed_uint32_ext = 7003;
 */
export const packed_uint32_ext = proto3.makeExtension<FileOptions, number[]>(
  "proto3ext.packed_uint32_ext", 
  FileOptions, 
  { no: 7003, kind: "scalar", T: 13 /* ScalarType.UINT32 */, repeated: true },
);

/**
 * @generated from extension: repeated uint32 unpacked_uint32_ext = 7004 [packed = false];
 */
export const unpacked_uint32_ext = proto3.makeExtension<FileOptions, number[]>(
  "proto3ext.unpacked_uint32_ext", 
  FileOptions, 
  { no: 7004, kind: "scalar", T: 13 /* ScalarType.UINT32 */, repeated: true, packed: false },
);

