// import { CredentialsProvider, GithubProvider, GoogleProvider } from "@/auth/providers";
import { CredentialsProvider,  GoogleProvider } from "@/auth/providers";
import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  // providers: [CredentialsProvider, GithubProvider, GoogleProvider],
  providers: [CredentialsProvider, GoogleProvider],
} satisfies NextAuthConfig;