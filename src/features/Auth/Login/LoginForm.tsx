import { Button, Input, message, Tooltip } from "antd";
import { useFormik } from "formik";
import { emailValidator, tokenValidator } from "./loginValidator";

interface LoginFormProps {
  activeTab: string;
}
export default function LoginForm({ activeTab }: LoginFormProps) {
  const isEmailTab = activeTab === "Email";

  const formik = useFormik({
    initialValues: { identifier: "" },
    validationSchema: isEmailTab ? emailValidator : tokenValidator,
    validateOnChange: true,
    validateOnBlur: true,
    enableReinitialize: true,
    onSubmit: (values, { setSubmitting }) => {
      try {
        console.log("Login submitted with:", values);
        console.log("Active Tab:", activeTab);

        if (activeTab === "Email") {
          message.warning(
            "We cannot login with Email/Phone yet. Please use Token method.",
          );
        } else if (activeTab === "Token") {
          message.info("Token login will be implemented soon");
        }

        // اگر لاگین موفق بود:
        // navigate("/dashboard", { replace: true });
      } catch (error: any) {
        console.error("Login error:", error);
        message.error(error?.message || "Login failed. Please try again.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  const hasError = !!(formik.touched.identifier && formik.errors.identifier);
  return (
    <form onSubmit={formik.handleSubmit} className="space-y-6">
      {activeTab === "Email" && (
        <Tooltip
          title={formik.errors.identifier}
          open={hasError}
          color="red"
          placement="topLeft"
        >
          <Input
            id="identifier"
            name="identifier"
            size="large"
            value={formik.values.identifier}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Email / Phone Number"
            className="mt-5 w-full bg-transparent py-3"
            status={hasError ? "error" : ""}
            allowClear
          />
        </Tooltip>
      )}
      {activeTab === "Token" && (
        <Input
          id="identifier"
          name="identifier"
          size="large"
          value={formik.values.identifier}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Insert Your ompfinex token"
          className="mt-5 w-full bg-transparent py-3"
          status={hasError ? "error" : ""}
          allowClear
        />
      )}
      <Button
        loading={formik.isSubmitting}
        disabled={formik.isSubmitting && hasError}
        htmlType="submit"
        type="default"
        shape="round"
        size="large"
        color="default"
        variant="solid"
        className="h-12 font-bold"
        block
      >
        Next
      </Button>
    </form>
  );
}
