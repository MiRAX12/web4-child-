import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import App from "./App";

const queryClient = new QueryClient();


export default function Root(props) {
  return (
      <StrictMode>
      <QueryClientProvider client={queryClient}>
          <App />
      </QueryClientProvider>
    </StrictMode>
  );
}
