import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { ComponentMeta } from "@storybook/react";

import { meta } from "../stories/mockData.js";

import { BaseNodeAttributes, NodeAttributes } from "./NodeAttributes.js";

export default {
  title: "Components/NodeAttributes",
  // component: BaseNodeAttributes,
  // args: {},
} as ComponentMeta<typeof NodeAttributes>;

export const Base = () => {
  return (
    <div className="max-w-lg">
      <BaseNodeAttributes
        attributes={[
          {
            key: "ID",
            value: "Custom::S3AutoDeleteObjectsCustomResourceProvider",
          },
          {
            key: "Path",
            value:
              "App/construct-hub-dev/Custom::S3AutoDeleteObjectsCustomResourceProvider",
          },
          {
            key: "Type",
            value: "wingsdk.cloud.Endpoint",
            render: () => (
              <div className="truncate cursor-auto select-none">
                <div className="inline-flex items-center gap-1 px-1 bg-slate-100 border border-slate-200 rounded max-w-full truncate">
                  <GlobeAltIcon
                    className="w-3.5 h-3.5 text-violet-500"
                    aria-hidden="true"
                  />
                  <div className="truncate">cloud.Function</div>
                </div>
              </div>
            ),
          },
          {
            key: "Source File",
            value: "/Users/Wing/Code/wing-demo/src/demo.w",
            render: () => (
              <button className="font-medium text-sky-600 hover:text-sky-500">
                {meta.source.fileName} ({meta.source.line}:{meta.source.column})
              </button>
            ),
          },
          {
            key: "URL",
            value: "http://localhost:3012",
            render: () => (
              <button className="font-medium text-sky-600 hover:text-sky-500">
                http://localhost:3012
              </button>
            ),
          },
        ]}
      />
    </div>
  );
};

export const ConstructAttributes = () => {
  return (
    <div className="max-w-lg">
      <NodeAttributes
        node={{
          path: "App/construct-hub-dev/Custom::S3AutoDeleteObjectsCustomResourceProvider",
          type: "constructs.Construct",
          attrs: { handle: "" },
          props: {},
        }}
      />
    </div>
  );
};

export const BucketAttributes = () => {
  return (
    <div className="max-w-lg">
      <NodeAttributes
        node={{
          path: "App/construct-hub-dev/Images",
          type: "wingsdk.cloud.Bucket",
          attrs: { handle: "" },
          props: {},
        }}
      />
    </div>
  );
};

export const EndpointAttributes = () => {
  return (
    <div className="max-w-lg">
      <NodeAttributes
        node={{
          path: "App/construct-hub-dev/ScrapeImagesEndpoint",
          type: "wingsdk.cloud.Endpoint",
          attrs: { handle: "" },
          props: {
            requestMethod: "POST",
            requestPath: "/",
            targetId: "ScrapeImages",
          },
        }}
      />
    </div>
  );
};
