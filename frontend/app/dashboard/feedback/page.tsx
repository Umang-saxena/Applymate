import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { Star, MessageSquare, ThumbsUp, Bug, Lightbulb, Heart } from "lucide-react";

const Feedback = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Feedback & Support</h1>
        <p className="text-muted-foreground">
          Help us improve Applymate by sharing your thoughts, reporting issues, or suggesting new features.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Feedback Form */}
        <div className="space-y-6">
          <Card className="border-0 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageSquare className="h-5 w-5" />
                <span>Share Your Feedback</span>
              </CardTitle>
              <CardDescription>
                Tell us about your experience with Applymate
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <Label>What type of feedback would you like to share?</Label>
                <RadioGroup defaultValue="general" className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="general" id="general" />
                    <Label htmlFor="general" className="flex items-center space-x-2">
                      <MessageSquare className="h-4 w-4" />
                      <span>General Feedback</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="bug" id="bug" />
                    <Label htmlFor="bug" className="flex items-center space-x-2">
                      <Bug className="h-4 w-4" />
                      <span>Bug Report</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="feature" id="feature" />
                    <Label htmlFor="feature" className="flex items-center space-x-2">
                      <Lightbulb className="h-4 w-4" />
                      <span>Feature Request</span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label>How would you rate your overall experience?</Label>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      className="h-6 w-6 text-warning cursor-pointer hover:fill-current transition-colors" 
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input 
                  id="subject" 
                  placeholder="Brief description of your feedback"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message"
                  placeholder="Tell us more about your experience, issue, or suggestion..."
                  className="min-h-[120px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email (optional)</Label>
                <Input 
                  id="email" 
                  type="email"
                  placeholder="your.email@example.com"
                />
                <p className="text-xs text-muted-foreground">
                  We'll only use this to follow up on your feedback if needed
                </p>
              </div>

              <Button variant="hero" className="w-full" size="lg">
                <Heart className="mr-2 h-4 w-4" />
                Send Feedback
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Support & FAQ */}
        <div className="space-y-6">
          <Card className="border-0 shadow-card">
            <CardHeader>
              <CardTitle>Quick Support</CardTitle>
              <CardDescription>
                Need immediate help? Check these resources
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full justify-start" size="lg">
                <MessageSquare className="mr-3 h-4 w-4" />
                <div className="text-left">
                  <div className="font-medium">Help Center</div>
                  <div className="text-xs text-muted-foreground">Browse our knowledge base</div>
                </div>
              </Button>

              <Button variant="outline" className="w-full justify-start" size="lg">
                <MessageSquare className="mr-3 h-4 w-4" />
                <div className="text-left">
                  <div className="font-medium">Live Chat</div>
                  <div className="text-xs text-muted-foreground">Chat with our support team</div>
                </div>
              </Button>

              <Button variant="outline" className="w-full justify-start" size="lg">
                <MessageSquare className="mr-3 h-4 w-4" />
                <div className="text-left">
                  <div className="font-medium">Video Tutorials</div>
                  <div className="text-xs text-muted-foreground">Learn how to use Applymate</div>
                </div>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-card">
            <CardHeader>
              <CardTitle>Recent Feedback</CardTitle>
              <CardDescription>
                See what others are saying about Applymate
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="p-3 border rounded-lg bg-success/5">
                  <div className="flex items-center space-x-2 mb-2">
                    <ThumbsUp className="h-4 w-4 text-success" />
                    <Badge variant="secondary" className="bg-success/10 text-success">
                      Feature Request
                    </Badge>
                  </div>
                  <p className="text-sm">
                    "Love the ATS checker! Could you add support for more file formats?"
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">Sarah K. • 2 days ago</p>
                </div>

                <div className="p-3 border rounded-lg bg-primary/5">
                  <div className="flex items-center space-x-2 mb-2">
                    <Star className="h-4 w-4 text-warning fill-current" />
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      General Feedback
                    </Badge>
                  </div>
                  <p className="text-sm">
                    "The keyword research tool saved me hours of work. Amazing!"
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">Mike R. • 3 days ago</p>
                </div>

                <div className="p-3 border rounded-lg bg-warning/5">
                  <div className="flex items-center space-x-2 mb-2">
                    <Bug className="h-4 w-4 text-warning" />
                    <Badge variant="secondary" className="bg-warning/10 text-warning">
                      Bug Report
                    </Badge>
                  </div>
                  <p className="text-sm">
                    "Fixed! The upload issue on mobile has been resolved."
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">Alex T. • 5 days ago</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-card bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-white">Love Applymate?</CardTitle>
              <CardDescription className="text-white/80">
                Help us spread the word!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button variant="glass" className="w-full">
                  <Star className="mr-2 h-4 w-4" />
                  Rate us on Product Hunt
                </Button>
                <Button variant="glass" className="w-full">
                  <Heart className="mr-2 h-4 w-4" />
                  Share with friends
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Feedback;