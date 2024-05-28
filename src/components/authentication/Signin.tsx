"use client";

import Floatinglabel from "ui/Inputs/Floatinglabel";
import { FormikProvider, useFormik } from "formik";
import Button from "../ui/Buttons/Button";
import Link from "next/link";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Signin = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values: { email: string; password: string }) => {
      const res = await signIn<"credentials">("credentials", {
        redirect: false, // CHANGED TO FALSE FOR MANUAL REDIRECTION
        email: values.email,
        password: values.password,
      });

      if (res?.error) {
        toast.error("Signin failed. Try checking your credentials.");
        return;
      }
      toast.success("Successfully Logged In");

      router.push(`/`);
    },
  });

  return (
    <div className="w-full h-full pt-20">
      <div className="w-full h-full flex">
        <div className="flex-1 bg-white flex items-center justify-center">
          <div className="w-[70%] h-full flex justify-center px-0 md:px-14 mt-36">
            <div className="card max-w-[450px] md:max-w-[500px] w-full h-full px-5 md:px-6 ">
              <h1 className="font-semibold text-center text-3xl py-2">Login</h1>
              <FormikProvider value={formik}>
                <form onSubmit={formik.handleSubmit}>
                  <div className="w-full mt-4">
                    <Floatinglabel
                      label="Email"
                      type="email"
                      id="floating_email"
                      name="email"
                      required={true}
                    />

                    <Floatinglabel
                      label="Password"
                      type="password"
                      id="floating_password"
                      name="password"
                      required={true}
                      containerClass="!mb-2"
                    />
                    <div className="flex items-center mb-4">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 accent-purple text-blue-600  bg-purple border-gray-300 rounded focus:ring-purple focus:ring-2 "
                      />
                      <label
                        htmlFor="default-checkbox"
                        className="ms-2 text-sm text-gray-900 dark:text-gray-300 "
                      >
                        Remember Me
                      </label>
                    </div>
                    <Button
                      text="Login"
                      type="submit"
                      className="text-white w-full font-semibold mb-3"
                    />

                    <div className="text-sm ">
                      Don&apos;t have an account?{" "}
                      <Link href={"/auth/signup"} className="text-purple">
                        Create a account
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

export default Signin;
