import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import SmaklyLanding from "./pages/SmaklyLanding";
import SmaklyPrivacy from "./pages/SmaklyPrivacy";
import SmaklyCookies from "./pages/SmaklyCookies";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={SmaklyLanding} />
      <Route path={"/privacy"} component={SmaklyPrivacy} />
      <Route path={"/cookies"} component={SmaklyCookies} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <TooltipProvider>
        <Router />
        <Toaster />
      </TooltipProvider>
    </ErrorBoundary>
  );
}

export default App;
