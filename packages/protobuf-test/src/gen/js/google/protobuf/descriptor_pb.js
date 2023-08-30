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

// Author: kenton@google.com (Kenton Varda)
//  Based on original Protocol Buffers design by
//  Sanjay Ghemawat, Jeff Dean, and others.
//
// The messages in this file describe the definitions found in .proto files.
// A valid .proto file can be translated directly to a FileDescriptorProto
// without any other information (e.g. without reading its imports).

// @generated by protoc-gen-es v1.3.1 with parameter "ts_nocheck=false,target=js+dts"
// @generated from file google/protobuf/descriptor.proto (package google.protobuf, syntax proto2)
/* eslint-disable */

import { proto2 } from "@bufbuild/protobuf";

/**
 * The protocol compiler can output a FileDescriptorSet containing the .proto
 * files it parses.
 *
 * @generated from message google.protobuf.FileDescriptorSet
 */
export const FileDescriptorSet = proto2.makeMessageType(
  "google.protobuf.FileDescriptorSet",
  () => [
    { no: 1, name: "file", kind: "message", T: FileDescriptorProto, repeated: true },
  ],
);

/**
 * Describes a complete .proto file.
 *
 * @generated from message google.protobuf.FileDescriptorProto
 */
export const FileDescriptorProto = proto2.makeMessageType(
  "google.protobuf.FileDescriptorProto",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "package", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "dependency", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 10, name: "public_dependency", kind: "scalar", T: 5 /* ScalarType.INT32 */, repeated: true },
    { no: 11, name: "weak_dependency", kind: "scalar", T: 5 /* ScalarType.INT32 */, repeated: true },
    { no: 4, name: "message_type", kind: "message", T: DescriptorProto, repeated: true },
    { no: 5, name: "enum_type", kind: "message", T: EnumDescriptorProto, repeated: true },
    { no: 6, name: "service", kind: "message", T: ServiceDescriptorProto, repeated: true },
    { no: 7, name: "extension", kind: "message", T: FieldDescriptorProto, repeated: true },
    { no: 8, name: "options", kind: "message", T: FileOptions, opt: true },
    { no: 9, name: "source_code_info", kind: "message", T: SourceCodeInfo, opt: true },
    { no: 12, name: "syntax", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 13, name: "edition", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * Describes a message type.
 *
 * @generated from message google.protobuf.DescriptorProto
 */
export const DescriptorProto = proto2.makeMessageType(
  "google.protobuf.DescriptorProto",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "field", kind: "message", T: FieldDescriptorProto, repeated: true },
    { no: 6, name: "extension", kind: "message", T: FieldDescriptorProto, repeated: true },
    { no: 3, name: "nested_type", kind: "message", T: DescriptorProto, repeated: true },
    { no: 4, name: "enum_type", kind: "message", T: EnumDescriptorProto, repeated: true },
    { no: 5, name: "extension_range", kind: "message", T: DescriptorProto_ExtensionRange, repeated: true },
    { no: 8, name: "oneof_decl", kind: "message", T: OneofDescriptorProto, repeated: true },
    { no: 7, name: "options", kind: "message", T: MessageOptions, opt: true },
    { no: 9, name: "reserved_range", kind: "message", T: DescriptorProto_ReservedRange, repeated: true },
    { no: 10, name: "reserved_name", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message google.protobuf.DescriptorProto.ExtensionRange
 */
export const DescriptorProto_ExtensionRange = proto2.makeMessageType(
  "google.protobuf.DescriptorProto.ExtensionRange",
  () => [
    { no: 1, name: "start", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 2, name: "end", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 3, name: "options", kind: "message", T: ExtensionRangeOptions, opt: true },
  ],
  {localName: "DescriptorProto_ExtensionRange"},
);

/**
 * Range of reserved tag numbers. Reserved tag numbers may not be used by
 * fields or extension ranges in the same message. Reserved ranges may
 * not overlap.
 *
 * @generated from message google.protobuf.DescriptorProto.ReservedRange
 */
export const DescriptorProto_ReservedRange = proto2.makeMessageType(
  "google.protobuf.DescriptorProto.ReservedRange",
  () => [
    { no: 1, name: "start", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 2, name: "end", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
  ],
  {localName: "DescriptorProto_ReservedRange"},
);

/**
 * @generated from message google.protobuf.ExtensionRangeOptions
 */
export const ExtensionRangeOptions = proto2.makeMessageType(
  "google.protobuf.ExtensionRangeOptions",
  () => [
    { no: 999, name: "uninterpreted_option", kind: "message", T: UninterpretedOption, repeated: true },
    { no: 2, name: "declaration", kind: "message", T: ExtensionRangeOptions_Declaration, repeated: true },
    { no: 3, name: "verification", kind: "enum", T: proto2.getEnumType(ExtensionRangeOptions_VerificationState), opt: true, default: ExtensionRangeOptions_VerificationState.UNVERIFIED },
  ],
);

/**
 * The verification state of the extension range.
 *
 * @generated from enum google.protobuf.ExtensionRangeOptions.VerificationState
 */
export const ExtensionRangeOptions_VerificationState = proto2.makeEnum(
  "google.protobuf.ExtensionRangeOptions.VerificationState",
  [
    {no: 0, name: "DECLARATION"},
    {no: 1, name: "UNVERIFIED"},
  ],
);

/**
 * @generated from message google.protobuf.ExtensionRangeOptions.Declaration
 */
export const ExtensionRangeOptions_Declaration = proto2.makeMessageType(
  "google.protobuf.ExtensionRangeOptions.Declaration",
  () => [
    { no: 1, name: "number", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 2, name: "full_name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 4, name: "is_repeated", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
    { no: 5, name: "reserved", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
    { no: 6, name: "repeated", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
  ],
  {localName: "ExtensionRangeOptions_Declaration"},
);

/**
 * Describes a field within a message.
 *
 * @generated from message google.protobuf.FieldDescriptorProto
 */
export const FieldDescriptorProto = proto2.makeMessageType(
  "google.protobuf.FieldDescriptorProto",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "number", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 4, name: "label", kind: "enum", T: proto2.getEnumType(FieldDescriptorProto_Label), opt: true },
    { no: 5, name: "type", kind: "enum", T: proto2.getEnumType(FieldDescriptorProto_Type), opt: true },
    { no: 6, name: "type_name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "extendee", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 7, name: "default_value", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 9, name: "oneof_index", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 10, name: "json_name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 8, name: "options", kind: "message", T: FieldOptions, opt: true },
    { no: 17, name: "proto3_optional", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
  ],
);

/**
 * @generated from enum google.protobuf.FieldDescriptorProto.Type
 */
export const FieldDescriptorProto_Type = proto2.makeEnum(
  "google.protobuf.FieldDescriptorProto.Type",
  [
    {no: 1, name: "TYPE_DOUBLE", localName: "DOUBLE"},
    {no: 2, name: "TYPE_FLOAT", localName: "FLOAT"},
    {no: 3, name: "TYPE_INT64", localName: "INT64"},
    {no: 4, name: "TYPE_UINT64", localName: "UINT64"},
    {no: 5, name: "TYPE_INT32", localName: "INT32"},
    {no: 6, name: "TYPE_FIXED64", localName: "FIXED64"},
    {no: 7, name: "TYPE_FIXED32", localName: "FIXED32"},
    {no: 8, name: "TYPE_BOOL", localName: "BOOL"},
    {no: 9, name: "TYPE_STRING", localName: "STRING"},
    {no: 10, name: "TYPE_GROUP", localName: "GROUP"},
    {no: 11, name: "TYPE_MESSAGE", localName: "MESSAGE"},
    {no: 12, name: "TYPE_BYTES", localName: "BYTES"},
    {no: 13, name: "TYPE_UINT32", localName: "UINT32"},
    {no: 14, name: "TYPE_ENUM", localName: "ENUM"},
    {no: 15, name: "TYPE_SFIXED32", localName: "SFIXED32"},
    {no: 16, name: "TYPE_SFIXED64", localName: "SFIXED64"},
    {no: 17, name: "TYPE_SINT32", localName: "SINT32"},
    {no: 18, name: "TYPE_SINT64", localName: "SINT64"},
  ],
);

/**
 * @generated from enum google.protobuf.FieldDescriptorProto.Label
 */
export const FieldDescriptorProto_Label = proto2.makeEnum(
  "google.protobuf.FieldDescriptorProto.Label",
  [
    {no: 1, name: "LABEL_OPTIONAL", localName: "OPTIONAL"},
    {no: 2, name: "LABEL_REQUIRED", localName: "REQUIRED"},
    {no: 3, name: "LABEL_REPEATED", localName: "REPEATED"},
  ],
);

/**
 * Describes a oneof.
 *
 * @generated from message google.protobuf.OneofDescriptorProto
 */
export const OneofDescriptorProto = proto2.makeMessageType(
  "google.protobuf.OneofDescriptorProto",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "options", kind: "message", T: OneofOptions, opt: true },
  ],
);

/**
 * Describes an enum type.
 *
 * @generated from message google.protobuf.EnumDescriptorProto
 */
export const EnumDescriptorProto = proto2.makeMessageType(
  "google.protobuf.EnumDescriptorProto",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "value", kind: "message", T: EnumValueDescriptorProto, repeated: true },
    { no: 3, name: "options", kind: "message", T: EnumOptions, opt: true },
    { no: 4, name: "reserved_range", kind: "message", T: EnumDescriptorProto_EnumReservedRange, repeated: true },
    { no: 5, name: "reserved_name", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * Range of reserved numeric values. Reserved values may not be used by
 * entries in the same enum. Reserved ranges may not overlap.
 *
 * Note that this is distinct from DescriptorProto.ReservedRange in that it
 * is inclusive such that it can appropriately represent the entire int32
 * domain.
 *
 * @generated from message google.protobuf.EnumDescriptorProto.EnumReservedRange
 */
export const EnumDescriptorProto_EnumReservedRange = proto2.makeMessageType(
  "google.protobuf.EnumDescriptorProto.EnumReservedRange",
  () => [
    { no: 1, name: "start", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 2, name: "end", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
  ],
  {localName: "EnumDescriptorProto_EnumReservedRange"},
);

/**
 * Describes a value within an enum.
 *
 * @generated from message google.protobuf.EnumValueDescriptorProto
 */
export const EnumValueDescriptorProto = proto2.makeMessageType(
  "google.protobuf.EnumValueDescriptorProto",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "number", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 3, name: "options", kind: "message", T: EnumValueOptions, opt: true },
  ],
);

/**
 * Describes a service.
 *
 * @generated from message google.protobuf.ServiceDescriptorProto
 */
export const ServiceDescriptorProto = proto2.makeMessageType(
  "google.protobuf.ServiceDescriptorProto",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "method", kind: "message", T: MethodDescriptorProto, repeated: true },
    { no: 3, name: "options", kind: "message", T: ServiceOptions, opt: true },
  ],
);

/**
 * Describes a method of a service.
 *
 * @generated from message google.protobuf.MethodDescriptorProto
 */
export const MethodDescriptorProto = proto2.makeMessageType(
  "google.protobuf.MethodDescriptorProto",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "input_type", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "output_type", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 4, name: "options", kind: "message", T: MethodOptions, opt: true },
    { no: 5, name: "client_streaming", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true, default: false },
    { no: 6, name: "server_streaming", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true, default: false },
  ],
);

/**
 * @generated from message google.protobuf.FileOptions
 */
export const FileOptions = proto2.makeMessageType(
  "google.protobuf.FileOptions",
  () => [
    { no: 1, name: "java_package", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 8, name: "java_outer_classname", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 10, name: "java_multiple_files", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true, default: false },
    { no: 20, name: "java_generate_equals_and_hash", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
    { no: 27, name: "java_string_check_utf8", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true, default: false },
    { no: 9, name: "optimize_for", kind: "enum", T: proto2.getEnumType(FileOptions_OptimizeMode), opt: true, default: FileOptions_OptimizeMode.SPEED },
    { no: 11, name: "go_package", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 16, name: "cc_generic_services", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true, default: false },
    { no: 17, name: "java_generic_services", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true, default: false },
    { no: 18, name: "py_generic_services", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true, default: false },
    { no: 42, name: "php_generic_services", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true, default: false },
    { no: 23, name: "deprecated", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true, default: false },
    { no: 31, name: "cc_enable_arenas", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true, default: true },
    { no: 36, name: "objc_class_prefix", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 37, name: "csharp_namespace", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 39, name: "swift_prefix", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 40, name: "php_class_prefix", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 41, name: "php_namespace", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 44, name: "php_metadata_namespace", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 45, name: "ruby_package", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 999, name: "uninterpreted_option", kind: "message", T: UninterpretedOption, repeated: true },
  ],
);

/**
 * Generated classes can be optimized for speed or code size.
 *
 * @generated from enum google.protobuf.FileOptions.OptimizeMode
 */
export const FileOptions_OptimizeMode = proto2.makeEnum(
  "google.protobuf.FileOptions.OptimizeMode",
  [
    {no: 1, name: "SPEED"},
    {no: 2, name: "CODE_SIZE"},
    {no: 3, name: "LITE_RUNTIME"},
  ],
);

/**
 * @generated from message google.protobuf.MessageOptions
 */
export const MessageOptions = proto2.makeMessageType(
  "google.protobuf.MessageOptions",
  () => [
    { no: 1, name: "message_set_wire_format", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true, default: false },
    { no: 2, name: "no_standard_descriptor_accessor", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true, default: false },
    { no: 3, name: "deprecated", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true, default: false },
    { no: 7, name: "map_entry", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
    { no: 11, name: "deprecated_legacy_json_field_conflicts", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
    { no: 999, name: "uninterpreted_option", kind: "message", T: UninterpretedOption, repeated: true },
  ],
);

/**
 * @generated from message google.protobuf.FieldOptions
 */
export const FieldOptions = proto2.makeMessageType(
  "google.protobuf.FieldOptions",
  () => [
    { no: 1, name: "ctype", kind: "enum", T: proto2.getEnumType(FieldOptions_CType), opt: true, default: FieldOptions_CType.STRING },
    { no: 2, name: "packed", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
    { no: 6, name: "jstype", kind: "enum", T: proto2.getEnumType(FieldOptions_JSType), opt: true, default: FieldOptions_JSType.JS_NORMAL },
    { no: 5, name: "lazy", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true, default: false },
    { no: 15, name: "unverified_lazy", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true, default: false },
    { no: 3, name: "deprecated", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true, default: false },
    { no: 10, name: "weak", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true, default: false },
    { no: 16, name: "debug_redact", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true, default: false },
    { no: 17, name: "retention", kind: "enum", T: proto2.getEnumType(FieldOptions_OptionRetention), opt: true },
    { no: 18, name: "target", kind: "enum", T: proto2.getEnumType(FieldOptions_OptionTargetType), opt: true },
    { no: 19, name: "targets", kind: "enum", T: proto2.getEnumType(FieldOptions_OptionTargetType), repeated: true },
    { no: 999, name: "uninterpreted_option", kind: "message", T: UninterpretedOption, repeated: true },
  ],
);

/**
 * @generated from enum google.protobuf.FieldOptions.CType
 */
export const FieldOptions_CType = proto2.makeEnum(
  "google.protobuf.FieldOptions.CType",
  [
    {no: 0, name: "STRING"},
    {no: 1, name: "CORD"},
    {no: 2, name: "STRING_PIECE"},
  ],
);

/**
 * @generated from enum google.protobuf.FieldOptions.JSType
 */
export const FieldOptions_JSType = proto2.makeEnum(
  "google.protobuf.FieldOptions.JSType",
  [
    {no: 0, name: "JS_NORMAL"},
    {no: 1, name: "JS_STRING"},
    {no: 2, name: "JS_NUMBER"},
  ],
);

/**
 * If set to RETENTION_SOURCE, the option will be omitted from the binary.
 * Note: as of January 2023, support for this is in progress and does not yet
 * have an effect (b/264593489).
 *
 * @generated from enum google.protobuf.FieldOptions.OptionRetention
 */
export const FieldOptions_OptionRetention = proto2.makeEnum(
  "google.protobuf.FieldOptions.OptionRetention",
  [
    {no: 0, name: "RETENTION_UNKNOWN"},
    {no: 1, name: "RETENTION_RUNTIME"},
    {no: 2, name: "RETENTION_SOURCE"},
  ],
);

/**
 * This indicates the types of entities that the field may apply to when used
 * as an option. If it is unset, then the field may be freely used as an
 * option on any kind of entity. Note: as of January 2023, support for this is
 * in progress and does not yet have an effect (b/264593489).
 *
 * @generated from enum google.protobuf.FieldOptions.OptionTargetType
 */
export const FieldOptions_OptionTargetType = proto2.makeEnum(
  "google.protobuf.FieldOptions.OptionTargetType",
  [
    {no: 0, name: "TARGET_TYPE_UNKNOWN"},
    {no: 1, name: "TARGET_TYPE_FILE"},
    {no: 2, name: "TARGET_TYPE_EXTENSION_RANGE"},
    {no: 3, name: "TARGET_TYPE_MESSAGE"},
    {no: 4, name: "TARGET_TYPE_FIELD"},
    {no: 5, name: "TARGET_TYPE_ONEOF"},
    {no: 6, name: "TARGET_TYPE_ENUM"},
    {no: 7, name: "TARGET_TYPE_ENUM_ENTRY"},
    {no: 8, name: "TARGET_TYPE_SERVICE"},
    {no: 9, name: "TARGET_TYPE_METHOD"},
  ],
);

/**
 * @generated from message google.protobuf.OneofOptions
 */
export const OneofOptions = proto2.makeMessageType(
  "google.protobuf.OneofOptions",
  () => [
    { no: 999, name: "uninterpreted_option", kind: "message", T: UninterpretedOption, repeated: true },
  ],
);

/**
 * @generated from message google.protobuf.EnumOptions
 */
export const EnumOptions = proto2.makeMessageType(
  "google.protobuf.EnumOptions",
  () => [
    { no: 2, name: "allow_alias", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
    { no: 3, name: "deprecated", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true, default: false },
    { no: 6, name: "deprecated_legacy_json_field_conflicts", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
    { no: 999, name: "uninterpreted_option", kind: "message", T: UninterpretedOption, repeated: true },
  ],
);

/**
 * @generated from message google.protobuf.EnumValueOptions
 */
export const EnumValueOptions = proto2.makeMessageType(
  "google.protobuf.EnumValueOptions",
  () => [
    { no: 1, name: "deprecated", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true, default: false },
    { no: 999, name: "uninterpreted_option", kind: "message", T: UninterpretedOption, repeated: true },
  ],
);

/**
 * @generated from message google.protobuf.ServiceOptions
 */
export const ServiceOptions = proto2.makeMessageType(
  "google.protobuf.ServiceOptions",
  () => [
    { no: 33, name: "deprecated", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true, default: false },
    { no: 999, name: "uninterpreted_option", kind: "message", T: UninterpretedOption, repeated: true },
  ],
);

/**
 * @generated from message google.protobuf.MethodOptions
 */
export const MethodOptions = proto2.makeMessageType(
  "google.protobuf.MethodOptions",
  () => [
    { no: 33, name: "deprecated", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true, default: false },
    { no: 34, name: "idempotency_level", kind: "enum", T: proto2.getEnumType(MethodOptions_IdempotencyLevel), opt: true, default: MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN },
    { no: 999, name: "uninterpreted_option", kind: "message", T: UninterpretedOption, repeated: true },
  ],
);

/**
 * Is this method side-effect-free (or safe in HTTP parlance), or idempotent,
 * or neither? HTTP based RPC implementation may choose GET verb for safe
 * methods, and PUT verb for idempotent methods instead of the default POST.
 *
 * @generated from enum google.protobuf.MethodOptions.IdempotencyLevel
 */
export const MethodOptions_IdempotencyLevel = proto2.makeEnum(
  "google.protobuf.MethodOptions.IdempotencyLevel",
  [
    {no: 0, name: "IDEMPOTENCY_UNKNOWN"},
    {no: 1, name: "NO_SIDE_EFFECTS"},
    {no: 2, name: "IDEMPOTENT"},
  ],
);

/**
 * A message representing a option the parser does not recognize. This only
 * appears in options protos created by the compiler::Parser class.
 * DescriptorPool resolves these when building Descriptor objects. Therefore,
 * options protos in descriptor objects (e.g. returned by Descriptor::options(),
 * or produced by Descriptor::CopyTo()) will never have UninterpretedOptions
 * in them.
 *
 * @generated from message google.protobuf.UninterpretedOption
 */
export const UninterpretedOption = proto2.makeMessageType(
  "google.protobuf.UninterpretedOption",
  () => [
    { no: 2, name: "name", kind: "message", T: UninterpretedOption_NamePart, repeated: true },
    { no: 3, name: "identifier_value", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 4, name: "positive_int_value", kind: "scalar", T: 4 /* ScalarType.UINT64 */, opt: true },
    { no: 5, name: "negative_int_value", kind: "scalar", T: 3 /* ScalarType.INT64 */, opt: true },
    { no: 6, name: "double_value", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, opt: true },
    { no: 7, name: "string_value", kind: "scalar", T: 12 /* ScalarType.BYTES */, opt: true },
    { no: 8, name: "aggregate_value", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * The name of the uninterpreted option.  Each string represents a segment in
 * a dot-separated name.  is_extension is true iff a segment represents an
 * extension (denoted with parentheses in options specs in .proto files).
 * E.g.,{ ["foo", false], ["bar.baz", true], ["moo", false] } represents
 * "foo.(bar.baz).moo".
 *
 * @generated from message google.protobuf.UninterpretedOption.NamePart
 */
export const UninterpretedOption_NamePart = proto2.makeMessageType(
  "google.protobuf.UninterpretedOption.NamePart",
  () => [
    { no: 1, name: "name_part", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "is_extension", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
  {localName: "UninterpretedOption_NamePart"},
);

/**
 * Encapsulates information about the original source file from which a
 * FileDescriptorProto was generated.
 *
 * @generated from message google.protobuf.SourceCodeInfo
 */
export const SourceCodeInfo = proto2.makeMessageType(
  "google.protobuf.SourceCodeInfo",
  () => [
    { no: 1, name: "location", kind: "message", T: SourceCodeInfo_Location, repeated: true },
  ],
);

/**
 * @generated from message google.protobuf.SourceCodeInfo.Location
 */
export const SourceCodeInfo_Location = proto2.makeMessageType(
  "google.protobuf.SourceCodeInfo.Location",
  () => [
    { no: 1, name: "path", kind: "scalar", T: 5 /* ScalarType.INT32 */, repeated: true, packed: true },
    { no: 2, name: "span", kind: "scalar", T: 5 /* ScalarType.INT32 */, repeated: true, packed: true },
    { no: 3, name: "leading_comments", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 4, name: "trailing_comments", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 6, name: "leading_detached_comments", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
  {localName: "SourceCodeInfo_Location"},
);

/**
 * Describes the relationship between generated code and its original source
 * file. A GeneratedCodeInfo message is associated with only one generated
 * source file, but may contain references to different source .proto files.
 *
 * @generated from message google.protobuf.GeneratedCodeInfo
 */
export const GeneratedCodeInfo = proto2.makeMessageType(
  "google.protobuf.GeneratedCodeInfo",
  () => [
    { no: 1, name: "annotation", kind: "message", T: GeneratedCodeInfo_Annotation, repeated: true },
  ],
);

/**
 * @generated from message google.protobuf.GeneratedCodeInfo.Annotation
 */
export const GeneratedCodeInfo_Annotation = proto2.makeMessageType(
  "google.protobuf.GeneratedCodeInfo.Annotation",
  () => [
    { no: 1, name: "path", kind: "scalar", T: 5 /* ScalarType.INT32 */, repeated: true, packed: true },
    { no: 2, name: "source_file", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "begin", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 4, name: "end", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 5, name: "semantic", kind: "enum", T: proto2.getEnumType(GeneratedCodeInfo_Annotation_Semantic), opt: true },
  ],
  {localName: "GeneratedCodeInfo_Annotation"},
);

/**
 * Represents the identified object's effect on the element in the original
 * .proto file.
 *
 * @generated from enum google.protobuf.GeneratedCodeInfo.Annotation.Semantic
 */
export const GeneratedCodeInfo_Annotation_Semantic = proto2.makeEnum(
  "google.protobuf.GeneratedCodeInfo.Annotation.Semantic",
  [
    {no: 0, name: "NONE"},
    {no: 1, name: "SET"},
    {no: 2, name: "ALIAS"},
  ],
);

