import Floatinglabel from "../ui/Inputs/Floatinglabel";
import { FormikProvider, useFormik } from "formik";
import Button from "../ui/Buttons/Button";
import { Link } from "react-router-dom";
import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import logo from "../../images/logos/dmt_web.svg";
import { resetPasswordRequest } from "../../redux/actions/auth";
const ForgotPass = () => {
  const dispatch: AppDispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      const { email } = values;
      dispatch(resetPasswordRequest(email));
      // alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="w-full h-full pt-20">
      <div className="w-full h-full ">
        <div className="flex-1 bg-white flex items-center justify-center">
          <div className="w-full h-[60%] flex flex-col justify-center items-center px-0 md:px-14 mt-36">
            <img src={logo} className="w-[200px]" alt="dmt_logo" />
            <div className="card max-w-[450px] md:max-w-[500px] w-full h-full px-5 md:px-6 ">
              <h1 className="font-semibold text-center text-3xl py-2">Forgot Password</h1>
              <FormikProvider value={formik}>
                <form onSubmit={formik.handleSubmit}>
                  <div className="w-full mt-4">
                    <Floatinglabel
                      label="Email"
                      type="email"
                      id="floating_email"
                      name="email"
                      required={true}
                      containerClass="!mb-2"
                    />

                    <Button
                      text="Send Request"
                      type="submit"
                      className="text-white w-full font-semibold mb-3"
                    />

                    <div className="text-sm ">
                      Remember your password now?{" "}
                      <Link to={"/auth/login"} className="text-purple">
                        Signin
                      </Link>{" "}
                    </div>
                  </div>
                </form>
              </FormikProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
