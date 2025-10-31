import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ComparePackages from "./pages/ComparePackages";
import ComparePackageDetails from "./pages/ConstructionPackages";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import Enquire from "./pages/EnquireNow";
import Hyderabad from "./components/Hyderbad";
import Bangalore from "./components/Bengalore"
import HyderabadConstruction from "./components/Hyderbad";
import BangaloreConstruction from "./components/Bengalore";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/compare" element={<ComparePackages />} />
          <Route path="/compare/:id" element={<ComparePackageDetails />} />
          <Route path="/enquire" element={<Enquire />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/Hyderabad" element={<HyderabadConstruction />} />
          <Route path="/Bangalore" element={<BangaloreConstruction />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
