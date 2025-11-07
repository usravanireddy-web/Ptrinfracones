import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

import Index from "./pages/Index";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ComparePackages from "./pages/ComparePackages";
import ComparePackageDetails from "./pages/ConstructionPackages";
import Enquire from "./pages/EnquireNow";
import Hyderabad from "./components/Hyderbad";
import Bangalore from "./components/Bengalore";
import HyderabadConstruction from "./components/Hyderbad";
import BangaloreConstruction from "./components/Bengalore";
import HowItWorks from "./pages/Howitworks";
import CommercialPage from "./pages/CommercialPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/compare" element={<ComparePackages />} />
          <Route path="/compare/:id" element={<ComparePackageDetails />} />
          <Route path="/enquire" element={<Enquire />} />
          <Route path="/Hyderabad" element={<HyderabadConstruction />} />
          <Route path="/Bangalore" element={<BangaloreConstruction />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/commercialPage" element={<CommercialPage />} />

          {/* NotFound should always be the LAST route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
