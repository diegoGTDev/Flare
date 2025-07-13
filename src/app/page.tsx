import { createServerClient } from "@supabase/ssr";
import {cookies} from 'next/headers'
import Login from './auth/login';
import LoginPage from "./auth/loginPage";
export default function Home() {
  return (
    <div className="">
      <main className="">
        <LoginPage />
      </main>
    </div>
  );
}
