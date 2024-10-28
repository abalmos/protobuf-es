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

// @generated by protoc-gen-es v2.2.1 with parameter "target=ts,import_extension=js"
// @generated from file extra/edition2023-map-encoding.proto (package spec, edition 2023)
// option features.message_encoding = DELIMITED;
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file extra/edition2023-map-encoding.proto.
 */
export const file_extra_edition2023_map_encoding: GenFile = /*@__PURE__*/
  fileDesc("CiRleHRyYS9lZGl0aW9uMjAyMy1tYXAtZW5jb2RpbmcucHJvdG8SBHNwZWMiygIKHUVkaXRpb24yMDIzTWFwRW5jb2RpbmdNZXNzYWdlEkYKCnN0cmluZ19tYXAYTSADKAsyMi5zcGVjLkVkaXRpb24yMDIzTWFwRW5jb2RpbmdNZXNzYWdlLlN0cmluZ01hcEVudHJ5EkgKC21lc3NhZ2VfbWFwGFggAygLMjMuc3BlYy5FZGl0aW9uMjAyM01hcEVuY29kaW5nTWVzc2FnZS5NZXNzYWdlTWFwRW50cnkaMAoOU3RyaW5nTWFwRW50cnkSCwoDa2V5GAEgASgFEg0KBXZhbHVlGAIgASgJOgI4ARpcCg9NZXNzYWdlTWFwRW50cnkSCwoDa2V5GAEgASgFEjgKBXZhbHVlGAIgASgLMikuc3BlYy5FZGl0aW9uMjAyM01hcEVuY29kaW5nTWVzc2FnZS5DaGlsZDoCOAEaBwoFQ2hpbGRCBZIDAigCYghlZGl0aW9uc3DoBw");

/**
 * Map fields are syntactic sugar for a repeated message field with field 1 for
 * key and field 2 for value. Despite that, the file feature message_encoding =
 * DELIMITED should NOT apply to this "synthetic" message, and it should also
 * not apply to map message values.
 *
 * @generated from message spec.Edition2023MapEncodingMessage
 */
export type Edition2023MapEncodingMessage = Message<"spec.Edition2023MapEncodingMessage"> & {
  /**
   * @generated from field: map<int32, string> string_map = 77;
   */
  stringMap: { [key: number]: string };

  /**
   * @generated from field: map<int32, spec.Edition2023MapEncodingMessage.Child> message_map = 88;
   */
  messageMap: { [key: number]: Edition2023MapEncodingMessage_Child };
};

/**
 * Describes the message spec.Edition2023MapEncodingMessage.
 * Use `create(Edition2023MapEncodingMessageSchema)` to create a new message.
 */
export const Edition2023MapEncodingMessageSchema: GenMessage<Edition2023MapEncodingMessage> = /*@__PURE__*/
  messageDesc(file_extra_edition2023_map_encoding, 0);

/**
 * @generated from message spec.Edition2023MapEncodingMessage.Child
 */
export type Edition2023MapEncodingMessage_Child = Message<"spec.Edition2023MapEncodingMessage.Child"> & {
};

/**
 * Describes the message spec.Edition2023MapEncodingMessage.Child.
 * Use `create(Edition2023MapEncodingMessage_ChildSchema)` to create a new message.
 */
export const Edition2023MapEncodingMessage_ChildSchema: GenMessage<Edition2023MapEncodingMessage_Child> = /*@__PURE__*/
  messageDesc(file_extra_edition2023_map_encoding, 0, 0);

