import { CheckCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";

export default function Onboarding() {
  return (
    <div className="flex-2/3">
      <div className="mt-10 rounded-2xl border border-(--kds-border) px-8 py-6">
        <div className="font-bold">Onboarding Tasks (0/3)</div>
        <div className="flex justify-between gap-5 pt-5">
          <div
            style={{
              background:
                "linear-gradient(117deg, rgba(1, 188, 141, .08), rgba(1, 188, 141, .03) 98.374%)",
              border: "solid 1px rgba(0, 180, 125, 0.08)",
            }}
            className="flex-2/4 rounded p-5"
          >
            <div className="mb-2.5 text-xs text-(--kds-text-secondary)">
              Step 1
            </div>
            <div className="mb-2.5">Verify Identity</div>
            <div className="text-xs text-(--kds-text-secondary)">
              Get verified in 1 minute to enable deposits and trading.
            </div>
            <div className="mt-7 flex items-center justify-between">
              <Button
                role="button"
                shape="round"
                type="default"
                color="default"
                variant="solid"
              >
                Verify
              </Button>
              <img
                width={64}
                src="https://assets.staticimg.com/ucenter-web-private-ssr/1.4.22/ssr/_next/static/media/get_started_1_dark.ec4f2c2e5613f9489a4cfd0e81e77a85.png"
                alt="vrify"
              />
            </div>
          </div>
          <div className="flex flex-1/4 flex-col justify-between rounded bg-(--kux-cover2) p-5">
            <div>
              <div className="mb-2.5 text-xs text-(--kds-text-secondary)">
                Step 2
              </div>
              <div className="mb-2.5">Done</div>
            </div>
            <div className="text-xs text-(--kds-text-secondary)">
              {" "}
              <span>
                <CheckCircleOutlined />
              </span>{" "}
              Done
            </div>
          </div>
          <div className="flex flex-1/4 flex-col justify-between rounded bg-(--kux-cover2) p-5">
            <div>
              <div className="mb-2.5 text-xs text-(--kds-text-secondary)">
                Step 2
              </div>
              <div className="mb-2.5">Done</div>
            </div>
            <div className="text-xs text-(--kds-text-secondary)">
              {" "}
              <span>
                <CheckCircleOutlined />
              </span>{" "}
              Done
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
