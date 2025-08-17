import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Upload, Search, TrendingUp, ArrowRight } from "lucide-react";
// import { Link } from "react-router-dom";
import { SignInButton } from "@clerk/nextjs";
import Link from "next/link";
// import heroImage from "@/assets/hero-image.jpg";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur px-4 py-2 lg:px-8 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-gradient-primary rounded-lg"></div>
            <span className="text-xl font-bold">Applymate</span>
          </div>
          <div className="flex items-center space-x-4">
            {/* <Link href="/signin">
              <Button variant="ghost">Sign In</Button>
            </Link> */}
            <SignInButton/>
            <Link href="/signup">
              <Button variant="hero" size="lg">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative p-8 lg:py-32 overflow-hidden ">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit text-white text-md font-medium px-4 py-2 rounded-full">
                  AI-Powered Job Application Helper
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                  Land Your Dream Job with Applymate
                  {/* <span className="bg-gradient-hero bg-clip-text text-transparent">
                    Applymate
                  </span> */}
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg py-4">
                  Optimize your resumes, discover trending keywords, and stay ahead of tech trends. 
                  Your AI companion for successful job applications.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-10">
                <Link href="/signup">
                  <Button variant="hero" size="xl" className="w-full sm:w-auto text-md font-bold">
                    Start Free Trial <ArrowRight className="ml-3 h-8 w-8" />
                  </Button>
                </Link>
                {/* <Button variant="outline" size="xl" className="w-full sm:w-auto">
                  Watch Demo
                </Button> */}
              </div>
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success text-green-500" />
                  <span className="text-[18px] font-normal" >Free 7-day trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success text-green-500" />
                  <span className="text-[18px] font-normal" >No credit card required</span>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* <Image 
                src={heroImage} 
                alt="Applymate Dashboard" 
                className="rounded-2xl shadow-elegant"
              /> */}
              <div className="absolute inset-0 bg-gradient-hero/10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="p-20 bg-muted/50">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">How Applymate Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three powerful tools to accelerate your job search and application process
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="relative border-0 shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="mx-auto h-16 w-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4">
                  <Upload className="h-8 w-8 text-white" />
                </div>
                <CardTitle>ATS Checker</CardTitle>
                <CardDescription>
                  Upload your resume and job description to get instant ATS compatibility scores
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Instant ATS score analysis</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>AI-powered improvement suggestions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Format optimization tips</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative border-0 shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="mx-auto h-16 w-16 bg-gradient-secondary rounded-2xl flex items-center justify-center mb-4">
                  <Search className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Keywords Research</CardTitle>
                <CardDescription>
                  Discover the most relevant keywords to optimize your resume for specific roles
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Industry-specific keywords</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Trending skill requirements</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Competitive analysis</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative border-0 shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="mx-auto h-16 w-16 bg-gradient-hero rounded-2xl flex items-center justify-center mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Tech Trends</CardTitle>
                <CardDescription>
                  Stay updated with the latest technology trends and bookmark your favorites
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Weekly trend reports</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Email notifications</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Personalized bookmarks</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="p-10">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about Applymate
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6">
                <AccordionTrigger>How accurate is the ATS checker?</AccordionTrigger>
                <AccordionContent>
                  Our ATS checker uses advanced algorithms trained on thousands of successful applications. 
                  It provides 95%+ accuracy in identifying potential issues that could prevent your resume 
                  from passing through applicant tracking systems.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border rounded-lg px-6">
                <AccordionTrigger>Is my data secure?</AccordionTrigger>
                <AccordionContent>
                  Absolutely. We use enterprise-grade encryption and follow strict data protection protocols. 
                  Your resumes and personal information are never shared with third parties and are 
                  automatically deleted after 30 days unless you choose to save them.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border rounded-lg px-6">
                <AccordionTrigger>Can I cancel my subscription anytime?</AccordionTrigger>
                <AccordionContent>
                  Yes, you can cancel your subscription at any time. There are no long-term commitments, 
                  and you'll continue to have access to all features until the end of your current billing period.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border rounded-lg px-6">
                <AccordionTrigger>Do you offer refunds?</AccordionTrigger>
                <AccordionContent>
                  We offer a 30-day money-back guarantee. If you're not completely satisfied with Applymate 
                  within the first 30 days, we'll provide a full refund, no questions asked.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50 p-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 bg-gradient-primary rounded-lg"></div>
                <span className="text-xl font-bold">Applymate</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your AI-powered companion for successful job applications and career growth.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">ATS Checker</a></li>
                <li><a href="#" className="hover:text-foreground">Keywords Research</a></li>
                <li><a href="#" className="hover:text-foreground">Tech Trends</a></li>
                <li><a href="#" className="hover:text-foreground">Pricing</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">About</a></li>
                <li><a href="#" className="hover:text-foreground">Blog</a></li>
                <li><a href="#" className="hover:text-foreground">Careers</a></li>
                <li><a href="#" className="hover:text-foreground">Contact</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Help Center</a></li>
                <li><a href="#" className="hover:text-foreground">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-foreground">Terms of Service</a></li>
                <li><a href="#" className="hover:text-foreground">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Applymate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;