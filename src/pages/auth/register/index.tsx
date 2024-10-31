import InputField from "@/components/atoms/form/input-field";
import RememberMe from "@/components/molecules/auth/remember-me";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Form } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const RootScreen = () => {
  const form = useForm();
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col gap-6 justify-center items-center h-full ">
        <div className="flex justify-center items-center flex-col gap-2">
          <h2 className="text-3xl font-bold">Sign Up</h2>
          <span className="text-sm text-stone-400">
            Welcome back! Please enter your details
          </span>
        </div>

        <Form {...form}>
          <form className="space-y-4 w-full  min-w-[300px]">
            <InputField
              label="Username"
              name="userName"
              placeholder="Enter your username"
            />

            <InputField
              type="email"
              label="Email"
              name="email"
              placeholder="Enter your email"
            />

            <InputField
              type="password"
              label="Password"
              name="password"
              placeholder="Enter your password"
            />

            <Button type="submit" className="w-full">
              Register
            </Button>
          </form>
        </Form>

        <div className="flex space-x-2">
          <span className="text-stone-400 text-sm">
            Alreay have an account ?
          </span>
          <Link
            href="/auth/login"
            className="text-sm text-blue-500 underline underline-offset-2"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RootScreen;
