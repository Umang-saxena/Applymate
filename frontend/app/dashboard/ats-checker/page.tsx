import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Upload, 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  TrendingUp,
  Download,
  Zap
} from "lucide-react";

const ATSChecker = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">ATS Checker</h1>
        <p className="text-muted-foreground">
          Upload your resume and job description to get instant ATS compatibility analysis and AI-powered suggestions.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Upload Section */}
        <div className="space-y-6">
          <Card className="border-0 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Upload className="h-5 w-5" />
                <span>Upload Documents</span>
              </CardTitle>
              <CardDescription>
                Upload your resume and the job description you're applying for
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="resume">Resume (PDF, DOC, DOCX)</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                  <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-sm text-muted-foreground mb-2">
                    Drag and drop your resume here, or click to browse
                  </p>
                  <Input type="file" id="resume" className="hidden" accept=".pdf,.doc,.docx" />
                  <Button variant="outline" size="sm">
                    Choose File
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="job-description">Job Description</Label>
                <Textarea 
                  id="job-description"
                  placeholder="Paste the job description here..."
                  className="min-h-[150px]"
                />
              </div>

              <Button variant="hero" className="w-full" size="lg">
                <Zap className="mr-2 h-5 w-5" />
                Analyze ATS Compatibility
              </Button>
            </CardContent>
          </Card>

          {/* Previous Analyses */}
          <Card className="border-0 shadow-card">
            <CardHeader>
              <CardTitle>Recent Analyses</CardTitle>
              <CardDescription>Your previously analyzed resumes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Software Engineer Resume</p>
                    <p className="text-xs text-muted-foreground">Analyzed 2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary" className="bg-success/10 text-success">92% ATS</Badge>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Frontend Developer Resume</p>
                    <p className="text-xs text-muted-foreground">Analyzed yesterday</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary" className="bg-warning/10 text-warning">78% ATS</Badge>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          <Card className="border-0 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5" />
                <span>ATS Analysis Results</span>
              </CardTitle>
              <CardDescription>
                Comprehensive analysis of your resume's ATS compatibility
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Overall Score */}
              <div className="text-center space-y-4">
                <div className="relative inline-flex items-center justify-center w-32 h-32">
                  <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-muted"
                      strokeDasharray="100,100"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      className="text-success"
                      strokeDasharray="85,100"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold">85%</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Good ATS Score</h3>
                  <p className="text-sm text-muted-foreground">
                    Your resume is likely to pass through most ATS systems
                  </p>
                </div>
              </div>

              {/* Detailed Scores */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="flex items-center space-x-2">
                      <CheckCircle2 className="h-4 w-4 text-success" />
                      <span>Format Compatibility</span>
                    </span>
                    <span className="font-medium">95%</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="flex items-center space-x-2">
                      <CheckCircle2 className="h-4 w-4 text-success" />
                      <span>Keyword Matching</span>
                    </span>
                    <span className="font-medium">82%</span>
                  </div>
                  <Progress value={82} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="flex items-center space-x-2">
                      <AlertCircle className="h-4 w-4 text-warning" />
                      <span>Section Organization</span>
                    </span>
                    <span className="font-medium">73%</span>
                  </div>
                  <Progress value={73} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="flex items-center space-x-2">
                      <CheckCircle2 className="h-4 w-4 text-success" />
                      <span>File Readability</span>
                    </span>
                    <span className="font-medium">90%</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* AI Suggestions */}
          <Card className="border-0 shadow-card">
            <CardHeader>
              <CardTitle>AI-Powered Suggestions</CardTitle>
              <CardDescription>
                Recommendations to improve your ATS score
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3 p-3 border rounded-lg bg-success/5">
                <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Add More Keywords</p>
                  <p className="text-xs text-muted-foreground">
                    Include "React", "TypeScript", and "Node.js" to better match the job description
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 border rounded-lg bg-warning/5">
                <AlertCircle className="h-5 w-5 text-warning mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Improve Section Headers</p>
                  <p className="text-xs text-muted-foreground">
                    Use standard headers like "Work Experience" instead of "Professional Journey"
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 border rounded-lg bg-primary/5">
                <TrendingUp className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Quantify Achievements</p>
                  <p className="text-xs text-muted-foreground">
                    Add numbers and percentages to make your accomplishments more measurable
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ATSChecker;