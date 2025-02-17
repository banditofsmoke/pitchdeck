"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { Moon, Sun } from "lucide-react"

export default function SletcherSystems() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto p-4">
        <header className="text-center mb-8 relative">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-500 to-red-500 bg-clip-text text-transparent">
            🚀 Sletcher Systems
          </h1>
          <p className="text-xl mt-2">Advanced Business & Multi-Agent Intelligence Platform</p>
          <Button variant="outline" size="icon" className="absolute right-0 top-0" onClick={toggleDarkMode}>
            {darkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </header>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-2">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="roi">ROI</TabsTrigger>
          </TabsList>
          <TabsList className="grid w-full grid-cols-3 mb-2">
            <TabsTrigger value="investment">Investment</TabsTrigger>
            <TabsTrigger value="research">Web Research</TabsTrigger>
            <TabsTrigger value="report">Report Generator</TabsTrigger>
          </TabsList>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="planning">Project Planning</TabsTrigger>
            <TabsTrigger value="weather">Weather Monitor</TabsTrigger>
            <TabsTrigger value="pitch">Personal Pitch</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>Welcome to Sletcher Systems</CardTitle>
                <CardDescription>Explore our comprehensive suite of tools</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">🎯 Our Vision</h3>
                    <p>
                      Transform Sletcher Systems into a leading tech solutions provider by integrating cutting-edge AI,
                      immersive game development, and data-driven insights.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">💪 Core Competencies</h3>
                    <ul className="list-disc list-inside">
                      <li>🤖 Advanced AI Solutions</li>
                      <li>🎮 Next-Gen Game Development</li>
                      <li>📊 In-Depth Data Analytics</li>
                      <li>💻 Custom Software & Multi-Agent Systems</li>
                    </ul>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="aspect-video bg-muted rounded-lg overflow-hidden">
                      <iframe
                        src={`https://huggingface.co/spaces/placeholder-${i}/embed`}
                        width="100%"
                        height="100%"
                        style={{ border: "none" }}
                        title={`Hugging Face Gradio App ${i}`}
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="performance">
            <Card>
              <CardHeader>
                <CardTitle>Performance Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted aspect-video flex items-center justify-center">
                  <p className="text-muted-foreground">Performance comparison chart placeholder</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="roi">
            <Card>
              <CardHeader>
                <CardTitle>ROI Projection</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted aspect-video flex items-center justify-center">
                  <p className="text-muted-foreground">ROI projection chart placeholder</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="investment">
            <Card>
              <CardHeader>
                <CardTitle>Investment Calculator</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <Input type="number" placeholder="Investment Amount ($)" />
                  <Slider defaultValue={[5]} max={10} step={0.5} />
                  <Button>Calculate Repayment Schedule</Button>
                  <Textarea placeholder="Detailed Repayment Schedule" rows={5} />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="research">
            <Card>
              <CardHeader>
                <CardTitle>Web Research</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <Input placeholder="Enter URL for Analysis" />
                  <Input placeholder="Research Query" />
                  <div className="grid grid-cols-2 gap-4">
                    <Button>🔍 Scrape Website</Button>
                    <Button>🔎 Research Topic</Button>
                  </div>
                  <Textarea placeholder="Results will appear here" rows={5} />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="report">
            <Card>
              <CardHeader>
                <CardTitle>Report Generator</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <Textarea placeholder="Enter Content for Summary" rows={5} />
                  <Button>📝 Generate Report</Button>
                  <Textarea placeholder="Generated Summary" rows={3} />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="planning">
            <Card>
              <CardHeader>
                <CardTitle>Project Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <Input placeholder="Enter Project Goal" />
                  <Button>🎯 Generate Plan</Button>
                  <Textarea placeholder="Action Plan" rows={5} />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="weather">
            <Card>
              <CardHeader>
                <CardTitle>Weather Monitor</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <Input placeholder="Enter City Name" />
                  <Button>🌡️ Get Weather</Button>
                  <Textarea placeholder="Weather Report" rows={3} />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pitch">
            <Card>
              <CardHeader>
                <CardTitle>Personal Pitch</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold">About Me</h3>
                    <p>
                      Hi, I'm a seasoned educator with over a decade of experience teaching English across multiple
                      cultures. My passion for technology has driven me to transition into software development
                      full-time. I'm currently on a mission to become a tech founder—skilled in LLM DevOps,
                      cybersecurity, automation, and creating independent AI systems.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">My Goals</h3>
                    <ul className="list-disc list-inside">
                      <li>
                        <strong>Master Advanced Technologies:</strong> Develop expertise in AI, network architectures,
                        and automation.
                      </li>
                      <li>
                        <strong>Innovate:</strong> Build scalable, real-time solutions and multi-agent systems that
                        drive business success.
                      </li>
                      <li>
                        <strong>Transform:</strong> Leverage cutting-edge GPU technology to accelerate my projects and
                        push the boundaries of innovation.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">The Ask</h3>
                    <p>
                      I am seeking funding for a high-performance GPU that will serve as a catalyst for building
                      transformative applications. Your support will not only empower my projects but also pave the way
                      for profitable, real-world solutions.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Support My Journey</h3>
                    <p>
                      If you appreciate a hands-on, developer-to-developer approach and want to help fuel the future of
                      innovation, please consider supporting me on Ko-fi:
                    </p>
                    <a
                      href="https://ko-fi.com/waynesletcher"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      care to buy me a coffee? :)
                    </a>
                  </div>
                  <p className="font-semibold">
                    Thank you for believing in my vision and joining me on this transformative journey!
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

