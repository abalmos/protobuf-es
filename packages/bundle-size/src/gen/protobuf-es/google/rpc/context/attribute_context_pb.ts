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
// @generated from file google/rpc/context/attribute_context.proto (package google.rpc.context, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Any, Duration, Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_any, file_google_protobuf_duration, file_google_protobuf_struct, file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { JsonObject, Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/rpc/context/attribute_context.proto.
 */
export const file_google_rpc_context_attribute_context: GenFile = /*@__PURE__*/
  fileDesc("Cipnb29nbGUvcnBjL2NvbnRleHQvYXR0cmlidXRlX2NvbnRleHQucHJvdG8SEmdvb2dsZS5ycGMuY29udGV4dCKDEAoQQXR0cmlidXRlQ29udGV4dBI5CgZvcmlnaW4YByABKAsyKS5nb29nbGUucnBjLmNvbnRleHQuQXR0cmlidXRlQ29udGV4dC5QZWVyEjkKBnNvdXJjZRgBIAEoCzIpLmdvb2dsZS5ycGMuY29udGV4dC5BdHRyaWJ1dGVDb250ZXh0LlBlZXISPgoLZGVzdGluYXRpb24YAiABKAsyKS5nb29nbGUucnBjLmNvbnRleHQuQXR0cmlidXRlQ29udGV4dC5QZWVyEj0KB3JlcXVlc3QYAyABKAsyLC5nb29nbGUucnBjLmNvbnRleHQuQXR0cmlidXRlQ29udGV4dC5SZXF1ZXN0Ej8KCHJlc3BvbnNlGAQgASgLMi0uZ29vZ2xlLnJwYy5jb250ZXh0LkF0dHJpYnV0ZUNvbnRleHQuUmVzcG9uc2USPwoIcmVzb3VyY2UYBSABKAsyLS5nb29nbGUucnBjLmNvbnRleHQuQXR0cmlidXRlQ29udGV4dC5SZXNvdXJjZRI1CgNhcGkYBiABKAsyKC5nb29nbGUucnBjLmNvbnRleHQuQXR0cmlidXRlQ29udGV4dC5BcGkSKAoKZXh0ZW5zaW9ucxgIIAMoCzIULmdvb2dsZS5wcm90b2J1Zi5BbnkavgEKBFBlZXISCgoCaXAYASABKAkSDAoEcG9ydBgCIAEoAxJFCgZsYWJlbHMYBiADKAsyNS5nb29nbGUucnBjLmNvbnRleHQuQXR0cmlidXRlQ29udGV4dC5QZWVyLkxhYmVsc0VudHJ5EhEKCXByaW5jaXBhbBgHIAEoCRITCgtyZWdpb25fY29kZRgIIAEoCRotCgtMYWJlbHNFbnRyeRILCgNrZXkYASABKAkSDQoFdmFsdWUYAiABKAk6AjgBGkwKA0FwaRIPCgdzZXJ2aWNlGAEgASgJEhEKCW9wZXJhdGlvbhgCIAEoCRIQCghwcm90b2NvbBgDIAEoCRIPCgd2ZXJzaW9uGAQgASgJGn8KBEF1dGgSEQoJcHJpbmNpcGFsGAEgASgJEhEKCWF1ZGllbmNlcxgCIAMoCRIRCglwcmVzZW50ZXIYAyABKAkSJwoGY2xhaW1zGAQgASgLMhcuZ29vZ2xlLnByb3RvYnVmLlN0cnVjdBIVCg1hY2Nlc3NfbGV2ZWxzGAUgAygJGu8CCgdSZXF1ZXN0EgoKAmlkGAEgASgJEg4KBm1ldGhvZBgCIAEoCRJKCgdoZWFkZXJzGAMgAygLMjkuZ29vZ2xlLnJwYy5jb250ZXh0LkF0dHJpYnV0ZUNvbnRleHQuUmVxdWVzdC5IZWFkZXJzRW50cnkSDAoEcGF0aBgEIAEoCRIMCgRob3N0GAUgASgJEg4KBnNjaGVtZRgGIAEoCRINCgVxdWVyeRgHIAEoCRIoCgR0aW1lGAkgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcBIMCgRzaXplGAogASgDEhAKCHByb3RvY29sGAsgASgJEg4KBnJlYXNvbhgMIAEoCRI3CgRhdXRoGA0gASgLMikuZ29vZ2xlLnJwYy5jb250ZXh0LkF0dHJpYnV0ZUNvbnRleHQuQXV0aBouCgxIZWFkZXJzRW50cnkSCwoDa2V5GAEgASgJEg0KBXZhbHVlGAIgASgJOgI4ARqBAgoIUmVzcG9uc2USDAoEY29kZRgBIAEoAxIMCgRzaXplGAIgASgDEksKB2hlYWRlcnMYAyADKAsyOi5nb29nbGUucnBjLmNvbnRleHQuQXR0cmlidXRlQ29udGV4dC5SZXNwb25zZS5IZWFkZXJzRW50cnkSKAoEdGltZRgEIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXASMgoPYmFja2VuZF9sYXRlbmN5GAUgASgLMhkuZ29vZ2xlLnByb3RvYnVmLkR1cmF0aW9uGi4KDEhlYWRlcnNFbnRyeRILCgNrZXkYASABKAkSDQoFdmFsdWUYAiABKAk6AjgBGpAECghSZXNvdXJjZRIPCgdzZXJ2aWNlGAEgASgJEgwKBG5hbWUYAiABKAkSDAoEdHlwZRgDIAEoCRJJCgZsYWJlbHMYBCADKAsyOS5nb29nbGUucnBjLmNvbnRleHQuQXR0cmlidXRlQ29udGV4dC5SZXNvdXJjZS5MYWJlbHNFbnRyeRILCgN1aWQYBSABKAkSUwoLYW5ub3RhdGlvbnMYBiADKAsyPi5nb29nbGUucnBjLmNvbnRleHQuQXR0cmlidXRlQ29udGV4dC5SZXNvdXJjZS5Bbm5vdGF0aW9uc0VudHJ5EhQKDGRpc3BsYXlfbmFtZRgHIAEoCRIvCgtjcmVhdGVfdGltZRgIIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXASLwoLdXBkYXRlX3RpbWUYCSABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wEi8KC2RlbGV0ZV90aW1lGAogASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcBIMCgRldGFnGAsgASgJEhAKCGxvY2F0aW9uGAwgASgJGi0KC0xhYmVsc0VudHJ5EgsKA2tleRgBIAEoCRINCgV2YWx1ZRgCIAEoCToCOAEaMgoQQW5ub3RhdGlvbnNFbnRyeRILCgNrZXkYASABKAkSDQoFdmFsdWUYAiABKAk6AjgBQosBChZjb20uZ29vZ2xlLnJwYy5jb250ZXh0QhVBdHRyaWJ1dGVDb250ZXh0UHJvdG9QAVpVZ29vZ2xlLmdvbGFuZy5vcmcvZ2VucHJvdG8vZ29vZ2xlYXBpcy9ycGMvY29udGV4dC9hdHRyaWJ1dGVfY29udGV4dDthdHRyaWJ1dGVfY29udGV4dPgBAWIGcHJvdG8z", [file_google_protobuf_any, file_google_protobuf_duration, file_google_protobuf_struct, file_google_protobuf_timestamp]);

/**
 * This message defines the standard attribute vocabulary for Google APIs.
 *
 * An attribute is a piece of metadata that describes an activity on a network
 * service. For example, the size of an HTTP request, or the status code of
 * an HTTP response.
 *
 * Each attribute has a type and a name, which is logically defined as
 * a proto message field in `AttributeContext`. The field type becomes the
 * attribute type, and the field path becomes the attribute name. For example,
 * the attribute `source.ip` maps to field `AttributeContext.source.ip`.
 *
 * This message definition is guaranteed not to have any wire breaking change.
 * So you can use it directly for passing attributes across different systems.
 *
 * NOTE: Different system may generate different subset of attributes. Please
 * verify the system specification before relying on an attribute generated
 * a system.
 *
 * @generated from message google.rpc.context.AttributeContext
 */
export type AttributeContext = Message<"google.rpc.context.AttributeContext"> & {
  /**
   * The origin of a network activity. In a multi hop network activity,
   * the origin represents the sender of the first hop. For the first hop,
   * the `source` and the `origin` must have the same content.
   *
   * @generated from field: google.rpc.context.AttributeContext.Peer origin = 7;
   */
  origin?: AttributeContext_Peer;

  /**
   * The source of a network activity, such as starting a TCP connection.
   * In a multi hop network activity, the source represents the sender of the
   * last hop.
   *
   * @generated from field: google.rpc.context.AttributeContext.Peer source = 1;
   */
  source?: AttributeContext_Peer;

  /**
   * The destination of a network activity, such as accepting a TCP connection.
   * In a multi hop network activity, the destination represents the receiver of
   * the last hop.
   *
   * @generated from field: google.rpc.context.AttributeContext.Peer destination = 2;
   */
  destination?: AttributeContext_Peer;

  /**
   * Represents a network request, such as an HTTP request.
   *
   * @generated from field: google.rpc.context.AttributeContext.Request request = 3;
   */
  request?: AttributeContext_Request;

  /**
   * Represents a network response, such as an HTTP response.
   *
   * @generated from field: google.rpc.context.AttributeContext.Response response = 4;
   */
  response?: AttributeContext_Response;

  /**
   * Represents a target resource that is involved with a network activity.
   * If multiple resources are involved with an activity, this must be the
   * primary one.
   *
   * @generated from field: google.rpc.context.AttributeContext.Resource resource = 5;
   */
  resource?: AttributeContext_Resource;

  /**
   * Represents an API operation that is involved to a network activity.
   *
   * @generated from field: google.rpc.context.AttributeContext.Api api = 6;
   */
  api?: AttributeContext_Api;

  /**
   * Supports extensions for advanced use cases, such as logs and metrics.
   *
   * @generated from field: repeated google.protobuf.Any extensions = 8;
   */
  extensions: Any[];
};

/**
 * Describes the message google.rpc.context.AttributeContext.
 * Use `create(AttributeContextSchema)` to create a new message.
 */
export const AttributeContextSchema: GenMessage<AttributeContext> = /*@__PURE__*/
  messageDesc(file_google_rpc_context_attribute_context, 0);

/**
 * This message defines attributes for a node that handles a network request.
 * The node can be either a service or an application that sends, forwards,
 * or receives the request. Service peers should fill in
 * `principal` and `labels` as appropriate.
 *
 * @generated from message google.rpc.context.AttributeContext.Peer
 */
export type AttributeContext_Peer = Message<"google.rpc.context.AttributeContext.Peer"> & {
  /**
   * The IP address of the peer.
   *
   * @generated from field: string ip = 1;
   */
  ip: string;

  /**
   * The network port of the peer.
   *
   * @generated from field: int64 port = 2;
   */
  port: bigint;

  /**
   * The labels associated with the peer.
   *
   * @generated from field: map<string, string> labels = 6;
   */
  labels: { [key: string]: string };

  /**
   * The identity of this peer. Similar to `Request.auth.principal`, but
   * relative to the peer instead of the request. For example, the
   * identity associated with a load balancer that forwarded the request.
   *
   * @generated from field: string principal = 7;
   */
  principal: string;

  /**
   * The CLDR country/region code associated with the above IP address.
   * If the IP address is private, the `region_code` should reflect the
   * physical location where this peer is running.
   *
   * @generated from field: string region_code = 8;
   */
  regionCode: string;
};

/**
 * Describes the message google.rpc.context.AttributeContext.Peer.
 * Use `create(AttributeContext_PeerSchema)` to create a new message.
 */
export const AttributeContext_PeerSchema: GenMessage<AttributeContext_Peer> = /*@__PURE__*/
  messageDesc(file_google_rpc_context_attribute_context, 0, 0);

/**
 * This message defines attributes associated with API operations, such as
 * a network API request. The terminology is based on the conventions used
 * by Google APIs, Istio, and OpenAPI.
 *
 * @generated from message google.rpc.context.AttributeContext.Api
 */
export type AttributeContext_Api = Message<"google.rpc.context.AttributeContext.Api"> & {
  /**
   * The API service name. It is a logical identifier for a networked API,
   * such as "pubsub.googleapis.com". The naming syntax depends on the
   * API management system being used for handling the request.
   *
   * @generated from field: string service = 1;
   */
  service: string;

  /**
   * The API operation name. For gRPC requests, it is the fully qualified API
   * method name, such as "google.pubsub.v1.Publisher.Publish". For OpenAPI
   * requests, it is the `operationId`, such as "getPet".
   *
   * @generated from field: string operation = 2;
   */
  operation: string;

  /**
   * The API protocol used for sending the request, such as "http", "https",
   * "grpc", or "internal".
   *
   * @generated from field: string protocol = 3;
   */
  protocol: string;

  /**
   * The API version associated with the API operation above, such as "v1" or
   * "v1alpha1".
   *
   * @generated from field: string version = 4;
   */
  version: string;
};

/**
 * Describes the message google.rpc.context.AttributeContext.Api.
 * Use `create(AttributeContext_ApiSchema)` to create a new message.
 */
export const AttributeContext_ApiSchema: GenMessage<AttributeContext_Api> = /*@__PURE__*/
  messageDesc(file_google_rpc_context_attribute_context, 0, 1);

/**
 * This message defines request authentication attributes. Terminology is
 * based on the JSON Web Token (JWT) standard, but the terms also
 * correlate to concepts in other standards.
 *
 * @generated from message google.rpc.context.AttributeContext.Auth
 */
export type AttributeContext_Auth = Message<"google.rpc.context.AttributeContext.Auth"> & {
  /**
   * The authenticated principal. Reflects the issuer (`iss`) and subject
   * (`sub`) claims within a JWT. The issuer and subject should be `/`
   * delimited, with `/` percent-encoded within the subject fragment. For
   * Google accounts, the principal format is:
   * "https://accounts.google.com/{id}"
   *
   * @generated from field: string principal = 1;
   */
  principal: string;

  /**
   * The intended audience(s) for this authentication information. Reflects
   * the audience (`aud`) claim within a JWT. The audience
   * value(s) depends on the `issuer`, but typically include one or more of
   * the following pieces of information:
   *
   * *  The services intended to receive the credential. For example,
   *    ["https://pubsub.googleapis.com/", "https://storage.googleapis.com/"].
   * *  A set of service-based scopes. For example,
   *    ["https://www.googleapis.com/auth/cloud-platform"].
   * *  The client id of an app, such as the Firebase project id for JWTs
   *    from Firebase Auth.
   *
   * Consult the documentation for the credential issuer to determine the
   * information provided.
   *
   * @generated from field: repeated string audiences = 2;
   */
  audiences: string[];

  /**
   * The authorized presenter of the credential. Reflects the optional
   * Authorized Presenter (`azp`) claim within a JWT or the
   * OAuth client id. For example, a Google Cloud Platform client id looks
   * as follows: "123456789012.apps.googleusercontent.com".
   *
   * @generated from field: string presenter = 3;
   */
  presenter: string;

  /**
   * Structured claims presented with the credential. JWTs include
   * `{key: value}` pairs for standard and private claims. The following
   * is a subset of the standard required and optional claims that would
   * typically be presented for a Google-based JWT:
   *
   *    {'iss': 'accounts.google.com',
   *     'sub': '113289723416554971153',
   *     'aud': ['123456789012', 'pubsub.googleapis.com'],
   *     'azp': '123456789012.apps.googleusercontent.com',
   *     'email': 'jsmith@example.com',
   *     'iat': 1353601026,
   *     'exp': 1353604926}
   *
   * SAML assertions are similarly specified, but with an identity provider
   * dependent structure.
   *
   * @generated from field: google.protobuf.Struct claims = 4;
   */
  claims?: JsonObject;

  /**
   * A list of access level resource names that allow resources to be
   * accessed by authenticated requester. It is part of Secure GCP processing
   * for the incoming request. An access level string has the format:
   * "//{api_service_name}/accessPolicies/{policy_id}/accessLevels/{short_name}"
   *
   * Example:
   * "//accesscontextmanager.googleapis.com/accessPolicies/MY_POLICY_ID/accessLevels/MY_LEVEL"
   *
   * @generated from field: repeated string access_levels = 5;
   */
  accessLevels: string[];
};

/**
 * Describes the message google.rpc.context.AttributeContext.Auth.
 * Use `create(AttributeContext_AuthSchema)` to create a new message.
 */
export const AttributeContext_AuthSchema: GenMessage<AttributeContext_Auth> = /*@__PURE__*/
  messageDesc(file_google_rpc_context_attribute_context, 0, 2);

/**
 * This message defines attributes for an HTTP request. If the actual
 * request is not an HTTP request, the runtime system should try to map
 * the actual request to an equivalent HTTP request.
 *
 * @generated from message google.rpc.context.AttributeContext.Request
 */
export type AttributeContext_Request = Message<"google.rpc.context.AttributeContext.Request"> & {
  /**
   * The unique ID for a request, which can be propagated to downstream
   * systems. The ID should have low probability of collision
   * within a single day for a specific service.
   *
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * The HTTP request method, such as `GET`, `POST`.
   *
   * @generated from field: string method = 2;
   */
  method: string;

  /**
   * The HTTP request headers. If multiple headers share the same key, they
   * must be merged according to the HTTP spec. All header keys must be
   * lowercased, because HTTP header keys are case-insensitive.
   *
   * @generated from field: map<string, string> headers = 3;
   */
  headers: { [key: string]: string };

  /**
   * The HTTP URL path, excluding the query parameters.
   *
   * @generated from field: string path = 4;
   */
  path: string;

  /**
   * The HTTP request `Host` header value.
   *
   * @generated from field: string host = 5;
   */
  host: string;

  /**
   * The HTTP URL scheme, such as `http` and `https`.
   *
   * @generated from field: string scheme = 6;
   */
  scheme: string;

  /**
   * The HTTP URL query in the format of `name1=value1&name2=value2`, as it
   * appears in the first line of the HTTP request. No decoding is performed.
   *
   * @generated from field: string query = 7;
   */
  query: string;

  /**
   * The timestamp when the `destination` service receives the last byte of
   * the request.
   *
   * @generated from field: google.protobuf.Timestamp time = 9;
   */
  time?: Timestamp;

  /**
   * The HTTP request size in bytes. If unknown, it must be -1.
   *
   * @generated from field: int64 size = 10;
   */
  size: bigint;

  /**
   * The network protocol used with the request, such as "http/1.1",
   * "spdy/3", "h2", "h2c", "webrtc", "tcp", "udp", "quic". See
   * https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids
   * for details.
   *
   * @generated from field: string protocol = 11;
   */
  protocol: string;

  /**
   * A special parameter for request reason. It is used by security systems
   * to associate auditing information with a request.
   *
   * @generated from field: string reason = 12;
   */
  reason: string;

  /**
   * The request authentication. May be absent for unauthenticated requests.
   * Derived from the HTTP request `Authorization` header or equivalent.
   *
   * @generated from field: google.rpc.context.AttributeContext.Auth auth = 13;
   */
  auth?: AttributeContext_Auth;
};

/**
 * Describes the message google.rpc.context.AttributeContext.Request.
 * Use `create(AttributeContext_RequestSchema)` to create a new message.
 */
export const AttributeContext_RequestSchema: GenMessage<AttributeContext_Request> = /*@__PURE__*/
  messageDesc(file_google_rpc_context_attribute_context, 0, 3);

/**
 * This message defines attributes for a typical network response. It
 * generally models semantics of an HTTP response.
 *
 * @generated from message google.rpc.context.AttributeContext.Response
 */
export type AttributeContext_Response = Message<"google.rpc.context.AttributeContext.Response"> & {
  /**
   * The HTTP response status code, such as `200` and `404`.
   *
   * @generated from field: int64 code = 1;
   */
  code: bigint;

  /**
   * The HTTP response size in bytes. If unknown, it must be -1.
   *
   * @generated from field: int64 size = 2;
   */
  size: bigint;

  /**
   * The HTTP response headers. If multiple headers share the same key, they
   * must be merged according to HTTP spec. All header keys must be
   * lowercased, because HTTP header keys are case-insensitive.
   *
   * @generated from field: map<string, string> headers = 3;
   */
  headers: { [key: string]: string };

  /**
   * The timestamp when the `destination` service sends the last byte of
   * the response.
   *
   * @generated from field: google.protobuf.Timestamp time = 4;
   */
  time?: Timestamp;

  /**
   * The amount of time it takes the backend service to fully respond to a
   * request. Measured from when the destination service starts to send the
   * request to the backend until when the destination service receives the
   * complete response from the backend.
   *
   * @generated from field: google.protobuf.Duration backend_latency = 5;
   */
  backendLatency?: Duration;
};

/**
 * Describes the message google.rpc.context.AttributeContext.Response.
 * Use `create(AttributeContext_ResponseSchema)` to create a new message.
 */
export const AttributeContext_ResponseSchema: GenMessage<AttributeContext_Response> = /*@__PURE__*/
  messageDesc(file_google_rpc_context_attribute_context, 0, 4);

/**
 * This message defines core attributes for a resource. A resource is an
 * addressable (named) entity provided by the destination service. For
 * example, a file stored on a network storage service.
 *
 * @generated from message google.rpc.context.AttributeContext.Resource
 */
export type AttributeContext_Resource = Message<"google.rpc.context.AttributeContext.Resource"> & {
  /**
   * The name of the service that this resource belongs to, such as
   * `pubsub.googleapis.com`. The service may be different from the DNS
   * hostname that actually serves the request.
   *
   * @generated from field: string service = 1;
   */
  service: string;

  /**
   * The stable identifier (name) of a resource on the `service`. A resource
   * can be logically identified as "//{resource.service}/{resource.name}".
   * The differences between a resource name and a URI are:
   *
   * *   Resource name is a logical identifier, independent of network
   *     protocol and API version. For example,
   *     `//pubsub.googleapis.com/projects/123/topics/news-feed`.
   * *   URI often includes protocol and version information, so it can
   *     be used directly by applications. For example,
   *     `https://pubsub.googleapis.com/v1/projects/123/topics/news-feed`.
   *
   * See https://cloud.google.com/apis/design/resource_names for details.
   *
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * The type of the resource. The syntax is platform-specific because
   * different platforms define their resources differently.
   *
   * For Google APIs, the type format must be "{service}/{kind}", such as
   * "pubsub.googleapis.com/Topic".
   *
   * @generated from field: string type = 3;
   */
  type: string;

  /**
   * The labels or tags on the resource, such as AWS resource tags and
   * Kubernetes resource labels.
   *
   * @generated from field: map<string, string> labels = 4;
   */
  labels: { [key: string]: string };

  /**
   * The unique identifier of the resource. UID is unique in the time
   * and space for this resource within the scope of the service. It is
   * typically generated by the server on successful creation of a resource
   * and must not be changed. UID is used to uniquely identify resources
   * with resource name reuses. This should be a UUID4.
   *
   * @generated from field: string uid = 5;
   */
  uid: string;

  /**
   * Annotations is an unstructured key-value map stored with a resource that
   * may be set by external tools to store and retrieve arbitrary metadata.
   * They are not queryable and should be preserved when modifying objects.
   *
   * More info: https://kubernetes.io/docs/user-guide/annotations
   *
   * @generated from field: map<string, string> annotations = 6;
   */
  annotations: { [key: string]: string };

  /**
   * Mutable. The display name set by clients. Must be <= 63 characters.
   *
   * @generated from field: string display_name = 7;
   */
  displayName: string;

  /**
   * Output only. The timestamp when the resource was created. This may
   * be either the time creation was initiated or when it was completed.
   *
   * @generated from field: google.protobuf.Timestamp create_time = 8;
   */
  createTime?: Timestamp;

  /**
   * Output only. The timestamp when the resource was last updated. Any
   * change to the resource made by users must refresh this value.
   * Changes to a resource made by the service should refresh this value.
   *
   * @generated from field: google.protobuf.Timestamp update_time = 9;
   */
  updateTime?: Timestamp;

  /**
   * Output only. The timestamp when the resource was deleted.
   * If the resource is not deleted, this must be empty.
   *
   * @generated from field: google.protobuf.Timestamp delete_time = 10;
   */
  deleteTime?: Timestamp;

  /**
   * Output only. An opaque value that uniquely identifies a version or
   * generation of a resource. It can be used to confirm that the client
   * and server agree on the ordering of a resource being written.
   *
   * @generated from field: string etag = 11;
   */
  etag: string;

  /**
   * Immutable. The location of the resource. The location encoding is
   * specific to the service provider, and new encoding may be introduced
   * as the service evolves.
   *
   * For Google Cloud products, the encoding is what is used by Google Cloud
   * APIs, such as `us-east1`, `aws-us-east-1`, and `azure-eastus2`. The
   * semantics of `location` is identical to the
   * `cloud.googleapis.com/location` label used by some Google Cloud APIs.
   *
   * @generated from field: string location = 12;
   */
  location: string;
};

/**
 * Describes the message google.rpc.context.AttributeContext.Resource.
 * Use `create(AttributeContext_ResourceSchema)` to create a new message.
 */
export const AttributeContext_ResourceSchema: GenMessage<AttributeContext_Resource> = /*@__PURE__*/
  messageDesc(file_google_rpc_context_attribute_context, 0, 5);

