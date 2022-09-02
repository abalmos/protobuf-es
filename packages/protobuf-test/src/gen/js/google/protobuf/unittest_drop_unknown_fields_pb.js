// Protocol Buffers - Google's data interchange format
// Copyright 2008 Google Inc.  All rights reserved.
// https://developers.google.com/protocol-buffers/
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//     * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//     * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

// @generated by protoc-gen-es v0.1.1 with parameter "ts_nocheck=false,target=js+dts"
// @generated from file google/protobuf/unittest_drop_unknown_fields.proto (package unittest_drop_unknown_fields, syntax proto3)
/* eslint-disable */

import {proto3} from "@bufbuild/protobuf";

/**
 * @generated from message unittest_drop_unknown_fields.Foo
 */
export const Foo = proto3.makeMessageType(
  "unittest_drop_unknown_fields.Foo",
  () => [
    { no: 1, name: "int32_value", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "enum_value", kind: "enum", T: proto3.getEnumType(Foo_NestedEnum) },
  ],
);

/**
 * @generated from enum unittest_drop_unknown_fields.Foo.NestedEnum
 */
export const Foo_NestedEnum = proto3.makeEnum(
  "unittest_drop_unknown_fields.Foo.NestedEnum",
  [
    {no: 0, name: "FOO"},
    {no: 1, name: "BAR"},
    {no: 2, name: "BAZ"},
  ],
);

/**
 * @generated from message unittest_drop_unknown_fields.FooWithExtraFields
 */
export const FooWithExtraFields = proto3.makeMessageType(
  "unittest_drop_unknown_fields.FooWithExtraFields",
  () => [
    { no: 1, name: "int32_value", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "enum_value", kind: "enum", T: proto3.getEnumType(FooWithExtraFields_NestedEnum) },
    { no: 3, name: "extra_int32_value", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from enum unittest_drop_unknown_fields.FooWithExtraFields.NestedEnum
 */
export const FooWithExtraFields_NestedEnum = proto3.makeEnum(
  "unittest_drop_unknown_fields.FooWithExtraFields.NestedEnum",
  [
    {no: 0, name: "FOO"},
    {no: 1, name: "BAR"},
    {no: 2, name: "BAZ"},
    {no: 3, name: "MOO"},
  ],
);

