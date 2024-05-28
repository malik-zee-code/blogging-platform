"use client";
import Floatinglabel from "ui/Inputs/Floatinglabel";
import { FormikProvider, useFormik } from "formik";
import Button from "ui/Buttons/Button";
import zxcvbn from "zxcvbn";
import { useState } from "react";
import Link from "next/link";
import axios, { AxiosResponse } from "axios";
import toast from "react-hot-toast";
import type { SignupI } from "@/types/signup";
import { redirect, useRouter } from "next/navigation";

const Signup = () => {
  const [passwordScore, setPasswordScore] = useState<number>(0);
  const router = useRouter();

  const validatePassword = () => {
    checkStrength();
  };
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
    },
    onSubmit: async (values: SignupI) => {
      // Perform your desired action here
      // For example, make an API call to submit the form data
      try {
        const res: AxiosResponse = await axios.post("/api/signup", values);
        toast.success(res.data.msg);
        // Reset the form after successfull submission
        formik.resetForm();
        router.push("/auth/signin");
      } catch (error: any) {
        console.log(error);

        toast.error(error.response.data.msg);
      }
    },
  });

  const checkStrength = () => {
    if (!formik.values.password) return setPasswordScore(0);
    setPasswordScore(zxcvbn(formik.values.password).score + 1);
  };

  return (
    <div className="w-full h-full pt-20">
      <div className="w-full h-full flex">
        <div className="flex-1 bg-white flex items-center justify-center">
          <div className="w-full h-full flex justify-center px-0  md:px-14 mt-18">
            <div className="card max-w-[450px] md:max-w-[500px] w-full h-full px-4 md:px-6 ">
              <h1 className="font-semibold text-center text-3xl py-2">Signup</h1>
              <FormikProvider value={formik}>
                <form onSubmit={formik.handleSubmit}>
                  <div className="w-full mt-4">
                    <Floatinglabel
                      label="Full Name"
                      type="text"
                      id="floating_fullName"
                      name="fullName"
                      value={formik.values.fullName}
                      required={true}
                    />
                    <Floatinglabel
                      label="Email"
                      type="email"
                      id="floating_email"
                      name="email"
                      value={formik.values.email}
                      required={true}
                    />
                    <Floatinglabel
                      label="Password"
                      type="password"
                      id="floating_password"
                      name="password"
                      value={formik.values.password}
                      validate={validatePassword}
                    />

                    <div className="flex flex-col w-full -mx-1 mt-4 mb-10">
                      <span className="text-sm mb-2 px-1 font-medium">Password Strength</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <div className="w-1/5 px-1" key={i}>
                            <div
                              className={`h-2 rounded-xl bg-slate-300 transition-colors ${
                                i < passwordScore
                                  ? passwordScore <= 2
                                    ? "!bg-red-400"
                                    : passwordScore <= 4
                                    ? "!bg-yellow-400"
                                    : "!bg-green-500"
                                  : "bg-gray-200"
                              }`}
                            ></div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center mb-4">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 accent-purple text-blue-600  bg-purple border-gray-300 rounded focus:ring-purple focus:ring-2 "
                      />
                      <label htmlFor="default-checkbox" className="ms-2 text-sm text-gray-900 ">
                        By creating an account, you agree to our{" "}
                        <Link href={"#"} className="text-purple font-semibold">
                          {" "}
                          Term and Conditions
                        </Link>
                      </label>
                    </div>
                    <Button
                      text="Signup"
                      type="submit"
                      className="text-white w-full font-semibold mb-3"
                    />
                    <span className="text-sm ">
                      Already have an account?{" "}
                      <Link href={"/auth/signin"} className="text-purple">
                        Login
                      </Link>{" "}
                    </span>
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

export default Signup;
