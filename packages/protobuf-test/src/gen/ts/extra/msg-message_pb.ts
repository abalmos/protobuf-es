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

// @generated by protoc-gen-es v2.0.0 with parameter "target=ts,import_extension=js"
// @generated from file extra/msg-message.proto (package spec, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file extra/msg-message.proto.
 */
export const file_extra_msg_message: GenFile = /*@__PURE__*/
  fileDesc("ChdleHRyYS9tc2ctbWVzc2FnZS5wcm90bxIEc3BlYyK3AQoTTWVzc2FnZUZpZWxkTWVzc2FnZRI8Cg1tZXNzYWdlX2ZpZWxkGAEgASgLMiUuc3BlYy5NZXNzYWdlRmllbGRNZXNzYWdlLlRlc3RNZXNzYWdlEkUKFnJlcGVhdGVkX21lc3NhZ2VfZmllbGQYAiADKAsyJS5zcGVjLk1lc3NhZ2VGaWVsZE1lc3NhZ2UuVGVzdE1lc3NhZ2UaGwoLVGVzdE1lc3NhZ2USDAoEbmFtZRgBIAEoCWIGcHJvdG8z");

/**
 * @generated from message spec.MessageFieldMessage
 */
export type MessageFieldMessage = Message<"spec.MessageFieldMessage"> & {
  /**
   * @generated from field: spec.MessageFieldMessage.TestMessage message_field = 1;
   */
  messageField?: MessageFieldMessage_TestMessage;

  /**
   * @generated from field: repeated spec.MessageFieldMessage.TestMessage repeated_message_field = 2;
   */
  repeatedMessageField: MessageFieldMessage_TestMessage[];
};

/**
 * Describes the message spec.MessageFieldMessage.
 * Use `create(MessageFieldMessageSchema)` to create a new message.
 */
export const MessageFieldMessageSchema: GenMessage<MessageFieldMessage> = /*@__PURE__*/
  messageDesc(file_extra_msg_message, 0);

/**
 * @generated from message spec.MessageFieldMessage.TestMessage
 */
export type MessageFieldMessage_TestMessage = Message<"spec.MessageFieldMessage.TestMessage"> & {
  /**
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message spec.MessageFieldMessage.TestMessage.
 * Use `create(MessageFieldMessage_TestMessageSchema)` to create a new message.
 */
export const MessageFieldMessage_TestMessageSchema: GenMessage<MessageFieldMessage_TestMessage> = /*@__PURE__*/
  messageDesc(file_extra_msg_message, 0, 0);

