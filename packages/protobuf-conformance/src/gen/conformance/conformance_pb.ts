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

// @generated by protoc-gen-es v2.0.0 with parameter "target=ts"
// @generated from file conformance/conformance.proto (package conformance, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file conformance/conformance.proto.
 */
export const file_conformance_conformance: GenFile = /*@__PURE__*/
  fileDesc("Ch1jb25mb3JtYW5jZS9jb25mb3JtYW5jZS5wcm90bxILY29uZm9ybWFuY2UiHQoKRmFpbHVyZVNldBIPCgdmYWlsdXJlGAEgAygJIuMCChJDb25mb3JtYW5jZVJlcXVlc3QSGgoQcHJvdG9idWZfcGF5bG9hZBgBIAEoDEgAEhYKDGpzb25fcGF5bG9hZBgCIAEoCUgAEhYKDGpzcGJfcGF5bG9hZBgHIAEoCUgAEhYKDHRleHRfcGF5bG9hZBgIIAEoCUgAEjgKF3JlcXVlc3RlZF9vdXRwdXRfZm9ybWF0GAMgASgOMhcuY29uZm9ybWFuY2UuV2lyZUZvcm1hdBIUCgxtZXNzYWdlX3R5cGUYBCABKAkSMAoNdGVzdF9jYXRlZ29yeRgFIAEoDjIZLmNvbmZvcm1hbmNlLlRlc3RDYXRlZ29yeRI+ChVqc3BiX2VuY29kaW5nX29wdGlvbnMYBiABKAsyHy5jb25mb3JtYW5jZS5Kc3BiRW5jb2RpbmdDb25maWcSHAoUcHJpbnRfdW5rbm93bl9maWVsZHMYCSABKAhCCQoHcGF5bG9hZCL6AQoTQ29uZm9ybWFuY2VSZXNwb25zZRIVCgtwYXJzZV9lcnJvchgBIAEoCUgAEhkKD3NlcmlhbGl6ZV9lcnJvchgGIAEoCUgAEhcKDXRpbWVvdXRfZXJyb3IYCSABKAlIABIXCg1ydW50aW1lX2Vycm9yGAIgASgJSAASGgoQcHJvdG9idWZfcGF5bG9hZBgDIAEoDEgAEhYKDGpzb25fcGF5bG9hZBgEIAEoCUgAEhEKB3NraXBwZWQYBSABKAlIABIWCgxqc3BiX3BheWxvYWQYByABKAlIABIWCgx0ZXh0X3BheWxvYWQYCCABKAlIAEIICgZyZXN1bHQiNwoSSnNwYkVuY29kaW5nQ29uZmlnEiEKGXVzZV9qc3BiX2FycmF5X2FueV9mb3JtYXQYASABKAgqUAoKV2lyZUZvcm1hdBIPCgtVTlNQRUNJRklFRBAAEgwKCFBST1RPQlVGEAESCAoESlNPThACEggKBEpTUEIQAxIPCgtURVhUX0ZPUk1BVBAEKo8BCgxUZXN0Q2F0ZWdvcnkSFAoQVU5TUEVDSUZJRURfVEVTVBAAEg8KC0JJTkFSWV9URVNUEAESDQoJSlNPTl9URVNUEAISJAogSlNPTl9JR05PUkVfVU5LTk9XTl9QQVJTSU5HX1RFU1QQAxINCglKU1BCX1RFU1QQBBIUChBURVhUX0ZPUk1BVF9URVNUEAVCLwofY29tLmdvb2dsZS5wcm90b2J1Zi5jb25mb3JtYW5jZaICC0NvbmZvcm1hbmNlYgZwcm90bzM");

/**
 * The conformance runner will request a list of failures as the first request.
 * This will be known by message_type == "conformance.FailureSet", a conformance
 * test should return a serialized FailureSet in protobuf_payload.
 *
 * @generated from message conformance.FailureSet
 */
export type FailureSet = Message<"conformance.FailureSet"> & {
  /**
   * @generated from field: repeated string failure = 1;
   */
  failure: string[];
};

/**
 * Describes the message conformance.FailureSet.
 * Use `create(FailureSetSchema)` to create a new message.
 */
export const FailureSetSchema: GenMessage<FailureSet> = /*@__PURE__*/
  messageDesc(file_conformance_conformance, 0);

/**
 * Represents a single test case's input.  The testee should:
 *
 *   1. parse this proto (which should always succeed)
 *   2. parse the protobuf or JSON payload in "payload" (which may fail)
 *   3. if the parse succeeded, serialize the message in the requested format.
 *
 * @generated from message conformance.ConformanceRequest
 */
export type ConformanceRequest = Message<"conformance.ConformanceRequest"> & {
  /**
   * The payload (whether protobuf of JSON) is always for a
   * protobuf_test_messages.proto3.TestAllTypes proto (as defined in
   * src/google/protobuf/proto3_test_messages.proto).
   *
   * @generated from oneof conformance.ConformanceRequest.payload
   */
  payload: {
    /**
     * @generated from field: bytes protobuf_payload = 1;
     */
    value: Uint8Array;
    case: "protobufPayload";
  } | {
    /**
     * @generated from field: string json_payload = 2;
     */
    value: string;
    case: "jsonPayload";
  } | {
    /**
     * Only used inside Google.  Opensource testees just skip it.
     *
     * @generated from field: string jspb_payload = 7;
     */
    value: string;
    case: "jspbPayload";
  } | {
    /**
     * @generated from field: string text_payload = 8;
     */
    value: string;
    case: "textPayload";
  } | { case: undefined; value?: undefined };

  /**
   * Which format should the testee serialize its message to?
   *
   * @generated from field: conformance.WireFormat requested_output_format = 3;
   */
  requestedOutputFormat: WireFormat;

  /**
   * The full name for the test message to use; for the moment, either:
   * protobuf_test_messages.proto3.TestAllTypesProto3 or
   * protobuf_test_messages.google.protobuf.TestAllTypesProto2.
   *
   * @generated from field: string message_type = 4;
   */
  messageType: string;

  /**
   * Each test is given a specific test category. Some category may need
   * specific support in testee programs. Refer to the definition of
   * TestCategory for more information.
   *
   * @generated from field: conformance.TestCategory test_category = 5;
   */
  testCategory: TestCategory;

  /**
   * Specify details for how to encode jspb.
   *
   * @generated from field: conformance.JspbEncodingConfig jspb_encoding_options = 6;
   */
  jspbEncodingOptions?: JspbEncodingConfig;

  /**
   * This can be used in json and text format. If true, testee should print
   * unknown fields instead of ignore. This feature is optional.
   *
   * @generated from field: bool print_unknown_fields = 9;
   */
  printUnknownFields: boolean;
};

/**
 * Describes the message conformance.ConformanceRequest.
 * Use `create(ConformanceRequestSchema)` to create a new message.
 */
export const ConformanceRequestSchema: GenMessage<ConformanceRequest> = /*@__PURE__*/
  messageDesc(file_conformance_conformance, 1);

/**
 * Represents a single test case's output.
 *
 * @generated from message conformance.ConformanceResponse
 */
export type ConformanceResponse = Message<"conformance.ConformanceResponse"> & {
  /**
   * @generated from oneof conformance.ConformanceResponse.result
   */
  result: {
    /**
     * This string should be set to indicate parsing failed.  The string can
     * provide more information about the parse error if it is available.
     *
     * Setting this string does not necessarily mean the testee failed the
     * test.  Some of the test cases are intentionally invalid input.
     *
     * @generated from field: string parse_error = 1;
     */
    value: string;
    case: "parseError";
  } | {
    /**
     * If the input was successfully parsed but errors occurred when
     * serializing it to the requested output format, set the error message in
     * this field.
     *
     * @generated from field: string serialize_error = 6;
     */
    value: string;
    case: "serializeError";
  } | {
    /**
     * This should be set if the test program timed out.  The string should
     * provide more information about what the child process was doing when it
     * was killed.
     *
     * @generated from field: string timeout_error = 9;
     */
    value: string;
    case: "timeoutError";
  } | {
    /**
     * This should be set if some other error occurred.  This will always
     * indicate that the test failed.  The string can provide more information
     * about the failure.
     *
     * @generated from field: string runtime_error = 2;
     */
    value: string;
    case: "runtimeError";
  } | {
    /**
     * If the input was successfully parsed and the requested output was
     * protobuf, serialize it to protobuf and set it in this field.
     *
     * @generated from field: bytes protobuf_payload = 3;
     */
    value: Uint8Array;
    case: "protobufPayload";
  } | {
    /**
     * If the input was successfully parsed and the requested output was JSON,
     * serialize to JSON and set it in this field.
     *
     * @generated from field: string json_payload = 4;
     */
    value: string;
    case: "jsonPayload";
  } | {
    /**
     * For when the testee skipped the test, likely because a certain feature
     * wasn't supported, like JSON input/output.
     *
     * @generated from field: string skipped = 5;
     */
    value: string;
    case: "skipped";
  } | {
    /**
     * If the input was successfully parsed and the requested output was JSPB,
     * serialize to JSPB and set it in this field. JSPB is only used inside
     * Google. Opensource testees can just skip it.
     *
     * @generated from field: string jspb_payload = 7;
     */
    value: string;
    case: "jspbPayload";
  } | {
    /**
     * If the input was successfully parsed and the requested output was
     * TEXT_FORMAT, serialize to TEXT_FORMAT and set it in this field.
     *
     * @generated from field: string text_payload = 8;
     */
    value: string;
    case: "textPayload";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message conformance.ConformanceResponse.
 * Use `create(ConformanceResponseSchema)` to create a new message.
 */
export const ConformanceResponseSchema: GenMessage<ConformanceResponse> = /*@__PURE__*/
  messageDesc(file_conformance_conformance, 2);

/**
 * Encoding options for jspb format.
 *
 * @generated from message conformance.JspbEncodingConfig
 */
export type JspbEncodingConfig = Message<"conformance.JspbEncodingConfig"> & {
  /**
   * Encode the value field of Any as jspb array if true, otherwise binary.
   *
   * @generated from field: bool use_jspb_array_any_format = 1;
   */
  useJspbArrayAnyFormat: boolean;
};

/**
 * Describes the message conformance.JspbEncodingConfig.
 * Use `create(JspbEncodingConfigSchema)` to create a new message.
 */
export const JspbEncodingConfigSchema: GenMessage<JspbEncodingConfig> = /*@__PURE__*/
  messageDesc(file_conformance_conformance, 3);

/**
 * @generated from enum conformance.WireFormat
 */
export enum WireFormat {
  /**
   * @generated from enum value: UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: PROTOBUF = 1;
   */
  PROTOBUF = 1,

  /**
   * @generated from enum value: JSON = 2;
   */
  JSON = 2,

  /**
   * Only used inside Google. Opensource testees just skip it.
   *
   * @generated from enum value: JSPB = 3;
   */
  JSPB = 3,

  /**
   * @generated from enum value: TEXT_FORMAT = 4;
   */
  TEXT_FORMAT = 4,
}

/**
 * Describes the enum conformance.WireFormat.
 */
export const WireFormatSchema: GenEnum<WireFormat> = /*@__PURE__*/
  enumDesc(file_conformance_conformance, 0);

/**
 * @generated from enum conformance.TestCategory
 */
export enum TestCategory {
  /**
   * @generated from enum value: UNSPECIFIED_TEST = 0;
   */
  UNSPECIFIED_TEST = 0,

  /**
   * Test binary wire format.
   *
   * @generated from enum value: BINARY_TEST = 1;
   */
  BINARY_TEST = 1,

  /**
   * Test json wire format.
   *
   * @generated from enum value: JSON_TEST = 2;
   */
  JSON_TEST = 2,

  /**
   * Similar to JSON_TEST. However, during parsing json, testee should ignore
   * unknown fields. This feature is optional. Each implementation can decide
   * whether to support it.  See
   * https://developers.google.com/protocol-buffers/docs/proto3#json_options
   * for more detail.
   *
   * @generated from enum value: JSON_IGNORE_UNKNOWN_PARSING_TEST = 3;
   */
  JSON_IGNORE_UNKNOWN_PARSING_TEST = 3,

  /**
   * Test jspb wire format. Only used inside Google. Opensource testees just
   * skip it.
   *
   * @generated from enum value: JSPB_TEST = 4;
   */
  JSPB_TEST = 4,

  /**
   * Test text format. For cpp, java and python, testees can already deal with
   * this type. Testees of other languages can simply skip it.
   *
   * @generated from enum value: TEXT_FORMAT_TEST = 5;
   */
  TEXT_FORMAT_TEST = 5,
}

/**
 * Describes the enum conformance.TestCategory.
 */
export const TestCategorySchema: GenEnum<TestCategory> = /*@__PURE__*/
  enumDesc(file_conformance_conformance, 1);

