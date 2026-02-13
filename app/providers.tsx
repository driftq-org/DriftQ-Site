import * as React from "react";

// Dark-only site: keep this file so layout stays clean and we can add
// providers later (analytics, MDX, etc.) without rewriting imports.
const Providers = ({ children }: { children: React.ReactNode }) => children;

export default Providers;
