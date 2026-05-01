import { useAppDispatch } from "@/app/Redux/hooks";
import { fetchUserInfo } from "@/features/User/user.slice";
import { Button, Input, message, Tooltip } from "antd";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { emailValidator, tokenValidator } from "./loginValidator";

interface LoginFormProps {
  activeTab: string;
}
export default function LoginForm({ activeTab }: LoginFormProps) {
  // const user = useAppSelector(userSelector);
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const isEmailTab = activeTab === "Email";

  const formik = useFormik({
    initialValues: { identifier: "" },
    validationSchema: isEmailTab ? emailValidator : tokenValidator,
    validateOnChange: true,
    validateOnBlur: true,
    enableReinitialize: true,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        if (activeTab === "Email") {
          message.warning("Please use Token method.");
          return;
        }

        if (activeTab === "Token") {
          const result = await dispatch(fetchUserInfo(values.identifier));

          if (fetchUserInfo.fulfilled.match(result)) {
            message.success("Login successful!");
            localStorage.setItem("token", values.identifier);
            navigate("/account/dashboard");
          } else {
            message.error(result.payload || "Login failed");
          }
        }
      } catch (error: any) {
        message.error(error?.message || "Login failed");
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
