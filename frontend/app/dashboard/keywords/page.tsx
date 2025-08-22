import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Search,
    TrendingUp,
    Copy,
    Download,
    Filter,
    BarChart3,
    Target
} from "lucide-react";

const KeywordsResearch = () => {
    const keywords = [
        { term: "React", frequency: 89, competition: "High", trend: "up" },
        { term: "JavaScript", frequency: 92, competition: "High", trend: "stable" },
        { term: "TypeScript", frequency: 76, competition: "Medium", trend: "up" },
        { term: "Node.js", frequency: 68, competition: "Medium", trend: "up" },
        { term: "AWS", frequency: 54, competition: "High", trend: "up" },
        { term: "Docker", frequency: 43, competition: "Medium", trend: "up" },
        { term: "Kubernetes", frequency: 38, competition: "Low", trend: "up" },
        { term: "GraphQL", frequency: 34, competition: "Low", trend: "up" },
    ];

    const jobTrends = [
        { role: "Frontend Developer", keywords: ["React", "Vue.js", "TypeScript", "CSS"], growth: "+15%" },
        { role: "Backend Developer", keywords: ["Node.js", "Python", "PostgreSQL", "AWS"], growth: "+12%" },
        { role: "Full Stack Developer", keywords: ["React", "Node.js", "MongoDB", "Docker"], growth: "+18%" },
        { role: "DevOps Engineer", keywords: ["AWS", "Docker", "Kubernetes", "Terraform"], growth: "+22%" },
    ];

    return (
        <div className="space-y-8">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold">Keywords Research</h1>
                <p className="text-muted-foreground">
                    Discover trending keywords and optimize your resume for specific job descriptions and roles.
                </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Input Section */}
                <div className="lg:col-span-1 space-y-6">
                    <Card className="border-0 shadow-card">
                        <CardHeader>
                            <CardTitle className="flex items-center space-x-2">
                                <Search className="h-5 w-5" />
                                <span>Research Keywords</span>
                            </CardTitle>
                            <CardDescription>
                                Enter job details to find relevant keywords
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="job-title">Job Title</Label>
                                <Input
                                    id="job-title"
                                    placeholder="e.g., Frontend Developer"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="industry">Industry</Label>
                                <Input
                                    id="industry"
                                    placeholder="e.g., Technology, Finance"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="job-description">Job Description (Optional)</Label>
                                <Textarea
                                    id="job-description"
                                    placeholder="Paste job description for better results..."
                                    className="min-h-[100px]"
                                />
                            </div>

                            <Button variant="hero" className="w-full">
                                <Search className="mr-2 h-4 w-4" />
                                Find Keywords
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-card">
                        <CardHeader>
                            <CardTitle className="flex items-center space-x-2">
                                <Filter className="h-5 w-5" />
                                <span>Filters</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label>Competition Level</Label>
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="outline" className="cursor-pointer">High</Badge>
                                    <Badge variant="outline" className="cursor-pointer">Medium</Badge>
                                    <Badge variant="outline" className="cursor-pointer">Low</Badge>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label>Trending</Label>
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="outline" className="cursor-pointer">Trending Up</Badge>
                                    <Badge variant="outline" className="cursor-pointer">Stable</Badge>
                                    <Badge variant="outline" className="cursor-pointer">All</Badge>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Results Section */}
                <div className="lg:col-span-2 space-y-6">
                    <Tabs defaultValue="keywords" className="space-y-6">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="keywords">Keywords Analysis</TabsTrigger>
                            <TabsTrigger value="trends">Job Market Trends</TabsTrigger>
                        </TabsList>

                        <TabsContent value="keywords" className="space-y-6">
                            <Card className="border-0 shadow-card">
                                <CardHeader>
                                    <CardTitle className="flex items-center justify-between">
                                        <span className="flex items-center space-x-2">
                                            <Target className="h-5 w-5" />
                                            <span>Recommended Keywords</span>
                                        </span>
                                        <Button variant="outline" size="sm">
                                            <Download className="mr-2 h-4 w-4" />
                                            Export
                                        </Button>
                                    </CardTitle>
                                    <CardDescription>
                                        Keywords ranked by relevance and market demand
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {keywords.map((keyword, index) => (
                                            <div key={keyword.term} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                                                <div className="flex items-center space-x-4">
                                                    <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full text-sm font-medium">
                                                        {index + 1}
                                                    </div>
                                                    <div>
                                                        <p className="font-medium">{keyword.term}</p>
                                                        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                                                            <span>Frequency: {keyword.frequency}%</span>
                                                            <span>•</span>
                                                            <span>Competition: {keyword.competition}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    {keyword.trend === "up" && (
                                                        <TrendingUp className="h-4 w-4 text-success" />
                                                    )}
                                                    <Button variant="ghost" size="sm">
                                                        <Copy className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="trends" className="space-y-6">
                            <Card className="border-0 shadow-card">
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2">
                                        <BarChart3 className="h-5 w-5" />
                                        <span>Job Market Trends</span>
                                    </CardTitle>
                                    <CardDescription>
                                        Current trends in job requirements and skill demands
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {jobTrends.map((trend, index) => (
                                            <div key={trend.role} className="p-4 border rounded-lg">
                                                <div className="flex items-center justify-between mb-3">
                                                    <h3 className="font-medium">{trend.role}</h3>
                                                    <Badge variant="secondary" className="bg-success/10 text-success">
                                                        {trend.growth}
                                                    </Badge>
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    {trend.keywords.map((keyword) => (
                                                        <Badge key={keyword} variant="outline" className="text-xs">
                                                            {keyword}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default KeywordsResearch;