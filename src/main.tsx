import React, { Suspense } from "react"; // 1. Add Suspense to imports
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Toaster } from "@/components/ui/toaster";
import './i18n/_index.ts';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* 2. Wrap your app in Suspense with a fallback */}
    <Suspense fallback={<div className="flex h-screen items-center justify-center">Loading...</div>}>
      <Toaster />
      <App />
    </Suspense>
  </React.StrictMode>
);
