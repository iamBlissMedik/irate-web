"use client"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Lock } from "lucide-react";
import InputField from '@/components/ui/inputField';
import PasswordField from '@/components/ui/passwordField';
import { LoginFormData, loginSchema } from '@/lib/validation/auth';

const Signin = () => {

    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: LoginFormData) => {
    console.log(data);
  };
  return (
    <Card className="w-[600px] mx-auto">
      <CardHeader >
        <CardTitle >
          Welcome Back
        </CardTitle>
        <CardDescription>
          Sign in to your affiliate marketer account
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <InputField
            id="email"
            label="Email Address"
            type="text"
            placeholder="john@example.com"
            icon={Mail}
            register={register}
            error={errors.email}
          />
          <PasswordField
            id="password"
            label="Password"
            placeholder="Enter your password"
            icon={Lock}
            register={register}
            error={errors.password}
          />

          <div className="flex items-center justify-between">
            <Link
              href="/affiliate/forgot-password"
              className="text-sm text-[var(--abstractCyan)] hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <Button
            type="submit"
            size="sm"
            className=""
          >
            Sign In
          </Button>
        </form>

        <div className="text-center pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link
              href="/affiliate/auth/signup"
              className="font-semibold text-[var(--abstractCyan)] hover:underline"
            >
              Sign up here
            </Link>
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

export default Signin
