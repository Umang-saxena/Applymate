import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { 
  Upload,
  Bell,
  Shield,
  CreditCard,
  Download
} from "lucide-react";

const Profile = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Profile Settings</h1>
        <p className="text-muted-foreground">
          Manage your account settings and preferences.
        </p>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card className="border-0 shadow-card">
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>
                    Update your personal details and profile information
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-6">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src="/placeholder-avatar.jpg" />
                      <AvatarFallback className="text-lg">JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <Button variant="outline" size="sm">
                        <Upload className="mr-2 h-4 w-4" />
                        Upload Photo
                      </Button>
                      <p className="text-xs text-muted-foreground mt-2">
                        JPG, PNG up to 2MB
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" defaultValue="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" defaultValue="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="john@example.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" defaultValue="San Francisco, CA" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea 
                      id="bio" 
                      placeholder="Tell us about yourself..."
                      defaultValue="Passionate software developer with 5+ years of experience in React and Node.js."
                    />
                  </div>

                  <Button variant="hero">Save Changes</Button>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-0 shadow-card">
                <CardHeader>
                  <CardTitle>Account Statistics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Member since</span>
                    <span className="text-sm font-medium">Jan 2024</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Resumes analyzed</span>
                    <span className="text-sm font-medium">12</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Keywords researched</span>
                    <span className="text-sm font-medium">247</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Trends bookmarked</span>
                    <span className="text-sm font-medium">8</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-card">
                <CardHeader>
                  <CardTitle>Current Plan</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-success/10 text-success">
                      Pro Plan
                    </Badge>
                    <span className="text-sm font-medium">$19/month</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Next billing: Feb 15, 2024
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Manage Subscription
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card className="border-0 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bell className="h-5 w-5" />
                <span>Notification Preferences</span>
              </CardTitle>
              <CardDescription>
                Configure how and when you want to receive notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base">Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications via email
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base">Weekly Tech Trends</Label>
                    <p className="text-sm text-muted-foreground">
                      Get weekly updates on trending technologies
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base">ATS Analysis Complete</Label>
                    <p className="text-sm text-muted-foreground">
                      Notify when resume analysis is finished
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base">Marketing Updates</Label>
                    <p className="text-sm text-muted-foreground">
                      Product updates and promotional content
                    </p>
                  </div>
                  <Switch />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base">Security Alerts</Label>
                    <p className="text-sm text-muted-foreground">
                      Important security notifications
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>

              <Button variant="hero">Save Preferences</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card className="border-0 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span>Security Settings</span>
              </CardTitle>
              <CardDescription>
                Manage your account security and privacy
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label className="text-base">Change Password</Label>
                  <p className="text-sm text-muted-foreground mb-4">
                    Update your password to keep your account secure
                  </p>
                  <div className="space-y-3">
                    <Input type="password" placeholder="Current password" />
                    <Input type="password" placeholder="New password" />
                    <Input type="password" placeholder="Confirm new password" />
                  </div>
                  <Button variant="outline" className="mt-3">Update Password</Button>
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base">Two-Factor Authentication</Label>
                    <p className="text-sm text-muted-foreground">
                      Add an extra layer of security to your account
                    </p>
                  </div>
                  <Button variant="outline" size="sm">Enable 2FA</Button>
                </div>

                <Separator />

                <div>
                  <Label className="text-base">Data Export</Label>
                  <p className="text-sm text-muted-foreground mb-4">
                    Download a copy of your data
                  </p>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Export Data
                  </Button>
                </div>

                <Separator />

                <div>
                  <Label className="text-base text-destructive">Delete Account</Label>
                  <p className="text-sm text-muted-foreground mb-4">
                    Permanently delete your account and all data
                  </p>
                  <Button variant="destructive" size="sm">Delete Account</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="billing" className="space-y-6">
          <Card className="border-0 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CreditCard className="h-5 w-5" />
                <span>Billing & Subscription</span>
              </CardTitle>
              <CardDescription>
                Manage your subscription and billing information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label className="text-base">Current Plan</Label>
                    <div className="mt-2 p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">Pro Plan</span>
                        <Badge variant="secondary" className="bg-success/10 text-success">
                          Active
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        $19/month • Next billing: Feb 15, 2024
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button variant="outline" className="w-full">Upgrade Plan</Button>
                    <Button variant="ghost" className="w-full">Cancel Subscription</Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label className="text-base">Payment Method</Label>
                    <div className="mt-2 p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="h-8 w-12 bg-gradient-primary rounded flex items-center justify-center text-white text-xs font-bold">
                          VISA
                        </div>
                        <div>
                          <p className="text-sm font-medium">•••• •••• •••• 4242</p>
                          <p className="text-xs text-muted-foreground">Expires 12/25</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">Update Payment Method</Button>
                </div>
              </div>

              <Separator />

              <div>
                <Label className="text-base">Billing History</Label>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="text-sm font-medium">Pro Plan - January 2024</p>
                      <p className="text-xs text-muted-foreground">Jan 15, 2024</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-medium">$19.00</span>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="text-sm font-medium">Pro Plan - December 2023</p>
                      <p className="text-xs text-muted-foreground">Dec 15, 2023</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-medium">$19.00</span>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Profile;