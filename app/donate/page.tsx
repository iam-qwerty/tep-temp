"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, Users, Target, Lightbulb, CheckCircle, CreditCard, Smartphone, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState("50000")
  const [customAmount, setCustomAmount] = useState("")
  const [donationType, setDonationType] = useState("one-time")
  const [paymentMethod, setPaymentMethod] = useState("card")

  const presetAmounts = [
    { value: "10000", label: "₦10,000", impact: "Workshop materials for 5 participants" },
    { value: "25000", label: "₦25,000", impact: "Career mentorship for 2 young people" },
    { value: "50000", label: "₦50,000", impact: "Full TEPA program for 1 participant" },
    { value: "100000", label: "₦100,000", impact: "TEPYCC program for 4 participants" },
    { value: "250000", label: "₦250,000", impact: "Policy research project funding" },
    { value: "500000", label: "₦500,000", impact: "Complete program cohort support" },
  ]

  const impactAreas = [
    {
      icon: Target,
      title: "Leadership Development",
      description: "TEPA programs that build self-awareness and values-based leadership",
      percentage: 35,
      color: "text-primary",
    },
    {
      icon: Users,
      title: "Career Support",
      description: "TEPYCC mentorship and job placement assistance",
      percentage: 30,
      color: "text-secondary",
    },
    {
      icon: Lightbulb,
      title: "Policy Research",
      description: "TEPPF fellowships driving systemic change",
      percentage: 20,
      color: "text-primary",
    },
    {
      icon: Heart,
      title: "Community Building",
      description: "TEPNH networking and wellness programs",
      percentage: 15,
      color: "text-secondary",
    },
  ]

  const handleAmountSelect = (amount: string) => {
    setSelectedAmount(amount)
    setCustomAmount("")
  }

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value)
    setSelectedAmount("")
  }

  const getCurrentAmount = () => {
    return customAmount || selectedAmount
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-secondary" />
              <Badge variant="secondary" className="text-lg px-4 py-2">
                Make a Difference
              </Badge>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground">Support Our Mission</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Your donation directly transforms lives by empowering young Nigerians with the skills, clarity, and
              confidence they need to become purpose-driven leaders. Every contribution creates ripples of positive
              change across communities.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Story */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Why Your Donation Matters</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Nigeria faces a youth crisis: 65% of the unemployed are aged 15-34, and 40% of young professionals
                    experience burnout. These aren&apos;t just statistics—they represent dreams deferred and potential
                    unrealized.
                  </p>
                  <p>
                    At The Emergence Porch, we believe no young person should navigate purpose alone. Your support
                    creates safe spaces for growth, provides expert mentorship, and equips young leaders with practical
                    skills for meaningful careers and social impact.
                  </p>
                  <blockquote className="border-l-4 border-primary pl-4 italic text-lg">
                    &quot;Because when one young person rises whole, the ripple reaches families, communities, and systems.
                    That is the quiet power of what we do.&quot;
                  </blockquote>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Mentorship session in progress"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Impact Areas */}
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground">Where Your Money Goes</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  We&apos;re committed to transparency. Here&apos;s exactly how your donation creates impact across our programs.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {impactAreas.map((area, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <area.icon className={`h-6 w-6 ${area.color}`} />
                      </div>
                      <CardTitle className="text-lg">{area.title}</CardTitle>
                      <div className="text-2xl font-bold text-primary">{area.percentage}%</div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground text-center">{area.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-20 bg-muted">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Make Your Donation</h2>
              <p className="text-xl text-muted-foreground">
                Choose your contribution amount and help us empower the next generation of Nigerian leaders.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Donation Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Donation Details</CardTitle>
                    <CardDescription>Select your donation amount and frequency</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Donation Type */}
                    <div className="space-y-3">
                      <Label className="text-base font-medium">Donation Type</Label>
                      <RadioGroup value={donationType} onValueChange={setDonationType} className="flex space-x-6">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="one-time" id="one-time" />
                          <Label htmlFor="one-time">One-time</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="monthly" id="monthly" />
                          <Label htmlFor="monthly">Monthly</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Preset Amounts */}
                    <div className="space-y-3">
                      <Label className="text-base font-medium">Select Amount</Label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {presetAmounts.map((amount) => (
                          <button
                            key={amount.value}
                            onClick={() => handleAmountSelect(amount.value)}
                            className={`p-4 rounded-lg border-2 text-left transition-all hover:shadow-md ${
                              selectedAmount === amount.value
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-primary/50"
                            }`}
                          >
                            <div className="font-semibold text-foreground">{amount.label}</div>
                            <div className="text-xs text-muted-foreground mt-1">{amount.impact}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Custom Amount */}
                    <div className="space-y-3">
                      <Label htmlFor="custom-amount" className="text-base font-medium">
                        Or Enter Custom Amount
                      </Label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                          ₦
                        </span>
                        <Input
                          id="custom-amount"
                          type="number"
                          placeholder="Enter amount"
                          value={customAmount}
                          onChange={(e) => handleCustomAmountChange(e.target.value)}
                          className="pl-8"
                        />
                      </div>
                    </div>

                    {/* Payment Method */}
                    <div className="space-y-3">
                      <Label className="text-base font-medium">Payment Method</Label>
                      <Tabs value={paymentMethod} onValueChange={setPaymentMethod}>
                        <TabsList className="grid w-full grid-cols-3">
                          <TabsTrigger value="card" className="flex items-center space-x-2">
                            <CreditCard className="h-4 w-4" />
                            <span>Card</span>
                          </TabsTrigger>
                          <TabsTrigger value="transfer" className="flex items-center space-x-2">
                            <Building className="h-4 w-4" />
                            <span>Transfer</span>
                          </TabsTrigger>
                          <TabsTrigger value="mobile" className="flex items-center space-x-2">
                            <Smartphone className="h-4 w-4" />
                            <span>Mobile</span>
                          </TabsTrigger>
                        </TabsList>

                        <TabsContent value="card" className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="first-name">First Name</Label>
                              <Input id="first-name" placeholder="John" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="last-name">Last Name</Label>
                              <Input id="last-name" placeholder="Doe" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" type="email" placeholder="john@example.com" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input id="phone" placeholder="+234 xxx xxx xxxx" />
                          </div>
                        </TabsContent>

                        <TabsContent value="transfer" className="space-y-4">
                          <div className="p-4 bg-primary/5 rounded-lg">
                            <h4 className="font-medium text-foreground mb-2">Bank Transfer Details</h4>
                            <div className="space-y-1 text-sm">
                              <p>
                                <strong>Account Name:</strong> The Emergence Porch
                              </p>
                              <p>
                                <strong>Account Number:</strong> 1234567890
                              </p>
                              <p>
                                <strong>Bank:</strong> First Bank Nigeria
                              </p>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="transfer-email">Email for Receipt</Label>
                            <Input id="transfer-email" type="email" placeholder="your@email.com" />
                          </div>
                        </TabsContent>

                        <TabsContent value="mobile" className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="mobile-number">Mobile Number</Label>
                            <Input id="mobile-number" placeholder="+234 xxx xxx xxxx" />
                          </div>
                          <div className="space-y-2">
                            <Label>Mobile Payment Provider</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select provider" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="paystack">Paystack</SelectItem>
                                <SelectItem value="flutterwave">Flutterwave</SelectItem>
                                <SelectItem value="opay">OPay</SelectItem>
                                <SelectItem value="palmpay">PalmPay</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </div>

                    {/* Additional Options */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="anonymous" />
                        <Label htmlFor="anonymous" className="text-sm">
                          Make this donation anonymous
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="newsletter" />
                        <Label htmlFor="newsletter" className="text-sm">
                          Subscribe to our newsletter for impact updates
                        </Label>
                      </div>
                    </div>

                    {/* Donate Button */}
                    <Button size="lg" className="w-full">
                      <Heart className="mr-2 h-4 w-4" />
                      Donate ₦{getCurrentAmount() ? Number(getCurrentAmount()).toLocaleString() : "0"}
                      {donationType === "monthly" && "/month"}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Your donation is secure and encrypted. You will receive a receipt via email.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Donation Summary */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Impact</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">
                        ₦{getCurrentAmount() ? Number(getCurrentAmount()).toLocaleString() : "0"}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {donationType === "monthly" ? "Monthly donation" : "One-time donation"}
                      </p>
                    </div>

                    {getCurrentAmount() && (
                      <div className="space-y-3">
                        <div className="border-t pt-3">
                          <h4 className="font-medium text-foreground mb-2">This donation will help:</h4>
                          <div className="space-y-2">
                            {Number(getCurrentAmount()) >= 50000 && (
                              <div className="flex items-center space-x-2 text-sm">
                                <CheckCircle className="h-4 w-4 text-green-500" />
                                <span>Fund complete TEPA program for 1 participant</span>
                              </div>
                            )}
                            {Number(getCurrentAmount()) >= 25000 && (
                              <div className="flex items-center space-x-2 text-sm">
                                <CheckCircle className="h-4 w-4 text-green-500" />
                                <span>Provide career mentorship for 2 young people</span>
                              </div>
                            )}
                            {Number(getCurrentAmount()) >= 10000 && (
                              <div className="flex items-center space-x-2 text-sm">
                                <CheckCircle className="h-4 w-4 text-green-500" />
                                <span>Supply workshop materials for 5 participants</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Other Ways to Help</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                      <Users className="mr-2 h-4 w-4" />
                      Become a Mentor
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                      <Heart className="mr-2 h-4 w-4" />
                      Volunteer Your Time
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                      <Target className="mr-2 h-4 w-4" />
                      Partner With Us
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Security */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold text-foreground">Your Trust Matters</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold">Secure Payments</h3>
                <p className="text-sm text-muted-foreground">
                  All transactions are encrypted and processed through secure payment gateways.
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold">Direct Impact</h3>
                <p className="text-sm text-muted-foreground">
                  95% of donations go directly to programs. We maintain low overhead costs.
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto">
                  <Heart className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold">Regular Updates</h3>
                <p className="text-sm text-muted-foreground">
                  Receive quarterly impact reports showing exactly how your donation helped.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
