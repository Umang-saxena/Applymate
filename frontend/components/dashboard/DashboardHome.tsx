import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
    CheckCircle,
    Search,
    TrendingUp,
    Upload,
    ArrowRight,
    BarChart3,
    Calendar,
    Star
} from "lucide-react";
import Link from "next/link";
const DashboardHome = () => {
    return (
        <div className="space-y-8">
            {/* Welcome Section */}
            <div className="space-y-2">
                <h1 className="text-3xl font-bold">Welcome back, John!</h1>
                <p className="text-muted-foreground">
                    Ready to optimize your job applications? Let's get started with your career goals.
                </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card className="border-0 shadow-card">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Resumes Analyzed</CardTitle>
                        <CheckCircle className="h-4 w-4 text-success" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">12</div>
                        <p className="text-xs text-muted-foreground">
                            +2 this week
                        </p>
                    </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Keywords Found</CardTitle>
                        <Search className="h-4 w-4 text-primary" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">247</div>
                        <p className="text-xs text-muted-foreground">
                            Across all searches
                        </p>
                    </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Trends Bookmarked</CardTitle>
                        <TrendingUp className="h-4 w-4 text-secondary" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">8</div>
                        <p className="text-xs text-muted-foreground">
                            This month
                        </p>
                    </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Avg ATS Score</CardTitle>
                        <BarChart3 className="h-4 w-4 text-warning" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">85%</div>
                        <p className="text-xs text-muted-foreground">
                            +12% improvement
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Quick Actions */}
            <div className="grid lg:grid-cols-3 gap-6">
                <Card className="border-0 shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1">
                    <CardHeader>
                        <div className="flex items-center space-x-3">
                            <div className="h-12 w-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                                <Upload className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <CardTitle>ATS Checker</CardTitle>
                                <CardDescription>Upload and analyze your resume</CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                            Get instant feedback on your resume's ATS compatibility and receive AI-powered suggestions.
                        </p>
                        <Link href="/dashboard/ats-checker">
                            <Button variant="hero" className="w-full">
                                Start Analysis <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </CardContent>
                </Card>

                <Card className="border-0 shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1">
                    <CardHeader>
                        <div className="flex items-center space-x-3">
                            <div className="h-12 w-12 bg-gradient-secondary rounded-xl flex items-center justify-center">
                                <Search className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <CardTitle>Keywords Research</CardTitle>
                                <CardDescription>Find the perfect keywords</CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                            Discover trending keywords and optimize your resume for specific job descriptions.
                        </p>
                        <Link href="/dashboard/keywords">
                            <Button variant="premium" className="w-full">
                                Research Keywords <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </CardContent>
                </Card>

                <Card className="border-0 shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1">
                    <CardHeader>
                        <div className="flex items-center space-x-3">
                            <div className="h-12 w-12 bg-gradient-hero rounded-xl flex items-center justify-center">
                                <TrendingUp className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <CardTitle>Tech Trends</CardTitle>
                                <CardDescription>Stay ahead of the curve</CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                            Explore the latest technology trends and bookmark what matters to your career.
                        </p>
                        <Link href="/dashboard/trends">
                            <Button variant="outline" className="w-full">
                                Explore Trends <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>

            {/* Recent Activity & Progress */}
            <div className="grid lg:grid-cols-2 gap-6">
                <Card className="border-0 shadow-card">
                    <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                            <Calendar className="h-5 w-5" />
                            <span>Recent Activity</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <div className="h-2 w-2 bg-success rounded-full"></div>
                            <div className="flex-1">
                                <p className="text-sm font-medium">Resume analyzed</p>
                                <p className="text-xs text-muted-foreground">Software Engineer position - 2 hours ago</p>
                            </div>
                            <Badge variant="secondary" className="text-xs">92% ATS</Badge>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="h-2 w-2 bg-primary rounded-full"></div>
                            <div className="flex-1">
                                <p className="text-sm font-medium">Keywords researched</p>
                                <p className="text-xs text-muted-foreground">React Developer role - 5 hours ago</p>
                            </div>
                            <Badge variant="outline" className="text-xs">15 keywords</Badge>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="h-2 w-2 bg-secondary rounded-full"></div>
                            <div className="flex-1">
                                <p className="text-sm font-medium">Tech trend bookmarked</p>
                                <p className="text-xs text-muted-foreground">AI in Web Development - Yesterday</p>
                            </div>
                            <Star className="h-4 w-4 text-warning" />
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                    <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                            <BarChart3 className="h-5 w-5" />
                            <span>Your Progress</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                                <span>Resume Optimization</span>
                                <span className="font-medium">85%</span>
                            </div>
                            <Progress value={85} className="h-2" />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                                <span>Keyword Integration</span>
                                <span className="font-medium">72%</span>
                            </div>
                            <Progress value={72} className="h-2" />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                                <span>Industry Knowledge</span>
                                <span className="font-medium">91%</span>
                            </div>
                            <Progress value={91} className="h-2" />
                        </div>
                        <div className="mt-4 p-4 bg-muted rounded-lg">
                            <p className="text-sm text-muted-foreground">
                                🎉 Great progress! You're in the top 20% of users for resume optimization.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default DashboardHome;