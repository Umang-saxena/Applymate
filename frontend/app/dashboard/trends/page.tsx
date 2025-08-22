import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { 
  TrendingUp, 
  Bookmark, 
  Search, 
  Mail,
  Calendar,
  ExternalLink,
  Star,
  Filter
} from "lucide-react";

const TechTrends = () => {
  const trends = [
    {
      id: 1,
      title: "AI Integration in Web Development",
      category: "Artificial Intelligence",
      description: "How AI tools are revolutionizing the way developers build web applications, from code generation to automated testing.",
      readTime: "5 min read",
      date: "2024-01-15",
      trending: "up",
      popularity: 95,
      bookmarked: true,
      tags: ["AI", "Web Development", "Automation"]
    },
    {
      id: 2,
      title: "Serverless Architecture Best Practices",
      category: "Cloud Computing",
      description: "Latest patterns and practices for building scalable serverless applications with AWS Lambda, Vercel, and Netlify.",
      readTime: "8 min read",
      date: "2024-01-14",
      trending: "up",
      popularity: 87,
      bookmarked: false,
      tags: ["Serverless", "AWS", "Cloud"]
    },
    {
      id: 3,
      title: "React 19 New Features and Migration Guide",
      category: "Frontend",
      description: "Exploring the latest React features including concurrent rendering improvements and new hooks.",
      readTime: "6 min read",
      date: "2024-01-13",
      trending: "up",
      popularity: 92,
      bookmarked: true,
      tags: ["React", "JavaScript", "Frontend"]
    },
    {
      id: 4,
      title: "Kubernetes Security Best Practices 2024",
      category: "DevOps",
      description: "Essential security measures and configurations for production Kubernetes clusters.",
      readTime: "10 min read",
      date: "2024-01-12",
      trending: "stable",
      popularity: 78,
      bookmarked: false,
      tags: ["Kubernetes", "Security", "DevOps"]
    },
    {
      id: 5,
      title: "Edge Computing and CDN Optimization",
      category: "Performance",
      description: "How edge computing is transforming web performance and user experience globally.",
      readTime: "7 min read",
      date: "2024-01-11",
      trending: "up",
      popularity: 84,
      bookmarked: true,
      tags: ["Edge Computing", "CDN", "Performance"]
    }
  ];

  const categories = ["All", "Frontend", "Backend", "DevOps", "AI/ML", "Cloud", "Security"];

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Tech Trends</h1>
        <p className="text-muted-foreground">
          Stay updated with the latest technology trends and insights. Bookmark your favorites and subscribe to weekly updates.
        </p>
      </div>

      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search trends..." 
              className="pl-10 w-full sm:w-80"
            />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
        </div>
        
        <Card className="border-0 shadow-sm bg-muted/50 p-4">
          <div className="flex items-center space-x-3">
            <Mail className="h-4 w-4 text-primary" />
            <div className="flex items-center space-x-2">
              <Label htmlFor="email-notifications" className="text-sm">Weekly email updates</Label>
              <Switch id="email-notifications" />
            </div>
          </div>
        </Card>
      </div>

      <Tabs defaultValue="trending" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="trending">Trending Now</TabsTrigger>
          <TabsTrigger value="bookmarked">Bookmarked</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
        </TabsList>

        <TabsContent value="trending" className="space-y-6">
          <div className="grid gap-6">
            {trends.map((trend) => (
              <Card key={trend.id} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="text-xs">
                          {trend.category}
                        </Badge>
                        <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(trend.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                          <span>{trend.readTime}</span>
                        </div>
                      </div>
                      <CardTitle className="text-xl leading-tight">{trend.title}</CardTitle>
                      <CardDescription className="text-base">
                        {trend.description}
                      </CardDescription>
                    </div>
                    <div className="flex items-center space-x-2">
                      {trend.trending === "up" && (
                        <TrendingUp className="h-4 w-4 text-success" />
                      )}
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className={trend.bookmarked ? "text-warning" : ""}
                      >
                        {trend.bookmarked ? (
                          <Star className="h-4 w-4 fill-current" />
                        ) : (
                          <Bookmark className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {trend.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <TrendingUp className="h-3 w-3" />
                        <span>{trend.popularity}% popular</span>
                      </div>
                      <Button variant="outline" size="sm">
                        Read More
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="bookmarked" className="space-y-6">
          <div className="grid gap-6">
            {trends.filter(trend => trend.bookmarked).map((trend) => (
              <Card key={trend.id} className="border-0 shadow-card">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="text-xs">
                          {trend.category}
                        </Badge>
                        <Star className="h-4 w-4 text-warning fill-current" />
                      </div>
                      <CardTitle className="text-xl">{trend.title}</CardTitle>
                      <CardDescription>
                        {trend.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1">
                    {trend.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="categories" className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.slice(1).map((category) => (
              <Card key={category} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300 cursor-pointer">
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">{category}</CardTitle>
                  <CardDescription>
                    Latest trends in {category.toLowerCase()}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {Math.floor(Math.random() * 50) + 10}
                  </div>
                  <p className="text-sm text-muted-foreground">Active trends</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TechTrends;