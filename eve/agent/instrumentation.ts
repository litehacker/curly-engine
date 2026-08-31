// agent/instrumentation.ts
import { defineInstrumentation } from "eve/instrumentation";
import { OTLPHttpProtoTraceExporter, registerOTel } from "@vercel/otel";

export default defineInstrumentation({
  setup: ({ agentName }) =>
    registerOTel({
      serviceName: agentName,
      attributes: { "openinference.project.name": agentName },
      traceExporter: new OTLPHttpProtoTraceExporter({
        url: "https://otlp.arize.com/v1/traces",
        headers: {
          space_id: process.env.ARIZE_SPACE_ID!,
          api_key: process.env.ARIZE_API_KEY!,
        },
      }),
    }),
});
