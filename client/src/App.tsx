import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/hooks/use-auth";
import { Switch, Route } from "wouter";
import { ProtectedRoute } from "@/lib/protected-route";
import { SiteHeader } from "@/components/site-header";

import HomePage from "@/pages/home-page";
import AuthPage from "@/pages/auth-page";
import MemberPage from "@/pages/member-page";
import ProfilePage from "@/pages/profile-page";
import AccountPage from "@/pages/account-page";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/auth" component={AuthPage} />
          <ProtectedRoute path="/member" component={MemberPage} />
          <ProtectedRoute path="/profile" component={ProfilePage} />
          <ProtectedRoute path="/account" component={AccountPage} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router />
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
