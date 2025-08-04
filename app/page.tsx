import Image from "next/image"
import { Github, Linkedin, Mail, MapPin, Code, FileCode, BrainCircuit } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ModeToggle } from "@/components/mode-toggle"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <a href="#" className="mr-6 flex items-center space-x-2">
              <span className="font-bold">Nivid Desai</span>
            </a>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a href="#about" className="transition-colors hover:text-foreground/80">
                About
              </a>
              <a href="#experience" className="transition-colors hover:text-foreground/80">
                Experience
              </a>
              <a href="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </a>
              <a href="#skills" className="transition-colors hover:text-foreground/80">
                Skills
              </a>
              <a href="#education" className="transition-colors hover:text-foreground/80">
                Education
              </a>
              <a href="#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </a>
              <a 
                href="https://nivid-desai-portfolio.vercel.app/" 
                target="_blank" 
                rel="noreferrer"
                className="transition-colors hover:text-foreground/80 flex items-center gap-1"
              >
                <Code className="h-4 w-4" />
                Vercel
              </a>
            </nav>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <a href="#" className="flex items-center">
              <span className="font-bold">ND</span>
            </a>
          </div>

          <div className="flex flex-1 items-center justify-end space-x-2">
            <nav className="flex items-center space-x-1">
              <ModeToggle />
              <a href="https://github.com/nivid-desai" target="_blank" rel="noreferrer" className="p-2">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://linkedin.com/in/nivid-desai-" target="_blank" rel="noreferrer" className="p-2">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className="container py-10">
        {/* Hero Section */}
        <section className="py-12 md:py-24 lg:py-32 xl:py-36">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Nivid Desai</h1>
                  <p className="text-xl text-muted-foreground">AI Engineer</p>
                </div>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  A dedicated and driven AI professional with expertise in machine learning, NLP, and data
                  visualization. Seeking opportunities to apply knowledge and gain practical experience in a challenging
                  and dynamic environment.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild>
                    <a href="#contact">Contact Me</a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="#projects">View Projects</a>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[300px] w-[300px] overflow-hidden rounded-full border-4 border-primary shadow-xl">
                  <Image src="/profile.png" alt="Nivid Desai" fill className="object-cover grayscale" priority />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Links Section */}
        <section className="py-8 md:py-12 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-6 text-center">
              <h2 className="text-2xl font-bold leading-[1.1] sm:text-3xl md:text-4xl">View My Portfolios</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                I maintain multiple portfolio versions to showcase my work in different contexts and technologies.
              </p>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="flex items-center space-x-2">
                        <Github className="h-6 w-6 text-primary" />
                        <h3 className="text-lg font-semibold">GitHub Pages Portfolio</h3>
                      </div>
                      <p className="text-sm text-muted-foreground text-center">
                        This portfolio built with Next.js and deployed on GitHub Pages
                      </p>
                      <Button variant="outline" asChild>
                        <a href="https://nividdesai.github.io" target="_blank" rel="noreferrer">
                          View GitHub Portfolio
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="flex items-center space-x-2">
                        <Code className="h-6 w-6 text-primary" />
                        <h3 className="text-lg font-semibold">Vercel Portfolio</h3>
                      </div>
                      <p className="text-sm text-muted-foreground text-center">
                        My main portfolio deployed on Vercel with enhanced features
                      </p>
                      <Button variant="outline" asChild>
                        <a href="https://nivid-desai-portfolio.vercel.app/" target="_blank" rel="noreferrer">
                          View Vercel Portfolio
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">About Me</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                I'm an AI Engineer with a passion for developing intelligent systems that solve real-world problems.
                Currently pursuing a Master's degree at Aivancity, La Grande Ecole De L'intelligence Artificielle Et De
                La Data in Paris, I specialize in machine learning, NLP, and data visualization.
              </p>
              <div className="flex items-center gap-2 mt-4">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <span>Paris, France</span>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl text-center mb-16">
              Professional Experience
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>LLM & RAG Engineer (Compliance Tech)</CardTitle>
                  <CardDescription>Pangea Summit | 01/2025 - Present</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Spearheaded development of an AI-powered Compliance Automation System using Retrieval-Augmented
                      Generation (RAG) for precise and regulation-aligned document analysis
                    </li>
                    <li>
                      Integrated OpenAI and Mistral models with Pinecone Vector Search to reduce hallucinations and
                      improve semantic retrieval accuracy
                    </li>
                    <li>
                      Designed and deployed a No-Code Compliance Flow Builder, enabling users to generate
                      domain-specific regulatory workflows without technical knowledge
                    </li>
                    <li>
                      Built a Real-Time Compliance Scoring Dashboard that applies AI-driven risk assessments and
                      predictive analytics to ensure proactive governance
                    </li>
                    <li>
                      Developed an Audit & Explainability Layer, offering transparent and legally defensible compliance
                      insights using natural language justifications
                    </li>
                    <li>
                      Independently created a suite of AI automation tools, including multi-platform scrapers, custom
                      Instagram bots, autonomous AI agents with CrewAI, and LLM fine-tuning pipelines
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>AI Systems Engineer</CardTitle>
                  <CardDescription>CMI-Stratégies | 10/2024 - 12/2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Developed an AI-driven YouTube analytics system using NLP, sentiment analysis and metadata
                      processing
                    </li>
                    <li>
                      Built scalable Python pipelines for video content analysis, topic modeling and engagement
                      prediction
                    </li>
                    <li>Created dashboards and automated reports for video performance metrics</li>
                    <li>Integrated YouTube API with custom ML model for content analysis & tracking</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>NLP Engineer</CardTitle>
                  <CardDescription>X & Y CORP (AI Clinic) | 01/2024 - 03/2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Created an extraction algorithm which extracts text, image, links and table from a pdf in python
                    </li>
                    <li>Tokenized and created a pipeline for the ML model</li>
                    <li>Configured the pre-defined BERT model & Scraped Raw Data in Excel</li>
                    <li>Created a real time Dashboard using HTML</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>Data Visualization Engineer</CardTitle>
                  <CardDescription>SUBSTRATE AI | 10/2023 - 12/2023</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Visualized data using Power BI</li>
                    <li>Collected and extracted raw data in Excel</li>
                    <li>Data analysis with the pre-defined data</li>
                    <li>Project presentation</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>Full Stack Developer</CardTitle>
                  <CardDescription>NAD NAVIGATOR (Start-up) | 05/2022 - 08/2022</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Design and Development of Website with publishment of Ads campaign</li>
                    <li>Monitored the trends in the campaign & Managed the campaign</li>
                    <li>Strategized new approach for the campaign according to the analysis</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl text-center mb-16">AI Projects</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <BrainCircuit className="h-5 w-5 text-primary" />
                    <CardTitle className="text-xl">YouTube Analytics AI</CardTitle>
                  </div>
                  <CardDescription>NLP & Sentiment Analysis</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground">
                    An AI-driven system that analyzes YouTube video content, comments, and metadata to provide insights
                    on audience engagement and content performance.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex gap-2">
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">NLP</Badge>
                    <Badge variant="outline">ML</Badge>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <a href="https://github.com/nivid-desai" target="_blank" rel="noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <FileCode className="h-5 w-5 text-primary" />
                    <CardTitle className="text-xl">PDF Data Extractor</CardTitle>
                  </div>
                  <CardDescription>Document Processing & Analysis</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground">
                    A tool that extracts text, images, links, and tables from PDF documents using advanced NLP
                    techniques and BERT models.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex gap-2">
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">BERT</Badge>
                    <Badge variant="outline">OCR</Badge>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <a href="https://github.com/nivid-desai" target="_blank" rel="noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Code className="h-5 w-5 text-primary" />
                    <CardTitle className="text-xl">Data Visualization Dashboard</CardTitle>
                  </div>
                  <CardDescription>Business Intelligence</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground">
                    An interactive dashboard built with Power BI that visualizes complex datasets and provides
                    actionable insights for business decision-making.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex gap-2">
                    <Badge variant="outline">Power BI</Badge>
                    <Badge variant="outline">Excel</Badge>
                    <Badge variant="outline">SQL</Badge>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <a href="https://github.com/nivid-desai" target="_blank" rel="noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl text-center mb-16">Skills</h2>
            <Tabs defaultValue="ai" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="ai">AI & ML</TabsTrigger>
                <TabsTrigger value="data">Data</TabsTrigger>
                <TabsTrigger value="programming">Programming</TabsTrigger>
                <TabsTrigger value="other">Other</TabsTrigger>
              </TabsList>
              <TabsContent value="ai" className="mt-6">
                <div className="flex flex-wrap gap-2">
                  <Badge className="px-3 py-1 text-sm">Artificial Intelligence</Badge>
                  <Badge className="px-3 py-1 text-sm">Machine Learning</Badge>
                  <Badge className="px-3 py-1 text-sm">Deep Learning</Badge>
                  <Badge className="px-3 py-1 text-sm">NLP</Badge>
                  <Badge className="px-3 py-1 text-sm">TensorFlow</Badge>
                  <Badge className="px-3 py-1 text-sm">PyTorch</Badge>
                  <Badge className="px-3 py-1 text-sm">Scikit-Learn</Badge>
                  <Badge className="px-3 py-1 text-sm">Generative AI</Badge>
                  <Badge className="px-3 py-1 text-sm">LLM</Badge>
                </div>
              </TabsContent>
              <TabsContent value="data" className="mt-6">
                <div className="flex flex-wrap gap-2">
                  <Badge className="px-3 py-1 text-sm">Data Visualization</Badge>
                  <Badge className="px-3 py-1 text-sm">Tableau</Badge>
                  <Badge className="px-3 py-1 text-sm">Power BI</Badge>
                  <Badge className="px-3 py-1 text-sm">Excel</Badge>
                  <Badge className="px-3 py-1 text-sm">Matplotlib</Badge>
                  <Badge className="px-3 py-1 text-sm">Seaborn</Badge>
                  <Badge className="px-3 py-1 text-sm">Statistics</Badge>
                  <Badge className="px-3 py-1 text-sm">SQL</Badge>
                  <Badge className="px-3 py-1 text-sm">DBMS</Badge>
                  <Badge className="px-3 py-1 text-sm">SQL Lite</Badge>
                </div>
              </TabsContent>
              <TabsContent value="programming" className="mt-6">
                <div className="flex flex-wrap gap-2">
                  <Badge className="px-3 py-1 text-sm">Python</Badge>
                  <Badge className="px-3 py-1 text-sm">R</Badge>
                  <Badge className="px-3 py-1 text-sm">HTML</Badge>
                  <Badge className="px-3 py-1 text-sm">Flask</Badge>
                  <Badge className="px-3 py-1 text-sm">Cloud</Badge>
                </div>
              </TabsContent>
              <TabsContent value="other" className="mt-6">
                <div className="flex flex-wrap gap-2">
                  <Badge className="px-3 py-1 text-sm">Web Design</Badge>
                  <Badge className="px-3 py-1 text-sm">Ads Management</Badge>
                  <Badge className="px-3 py-1 text-sm">Project Presentation</Badge>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl text-center mb-16">Education</h2>
            <Card className="mx-auto max-w-3xl hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Master's Degree (5-Year course)</CardTitle>
                <CardDescription>
                  Aivancity, La Grande Ecole De L'intelligence Artificielle Et De La Data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">09/2023 - Present, Paris, France</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Data modeling</li>
                      <li>Data processing</li>
                      <li>Data Science</li>
                      <li>Development of Artificial Intelligence</li>
                      <li>Machine Learning</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>OS Management</li>
                      <li>Data Visualization</li>
                      <li>Python, R</li>
                      <li>Business Intelligence</li>
                      <li>AI Law, AI Ethics</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl text-center mb-16">
              Certifications
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Artificial Intelligence for Students</CardTitle>
                  <CardDescription>LinkedIn</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">IoT Foundations</CardTitle>
                  <CardDescription>LinkedIn</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Statistics Foundations</CardTitle>
                  <CardDescription>LinkedIn</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Data Analytics</CardTitle>
                  <CardDescription>Google</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Programming Foundations</CardTitle>
                  <CardDescription>LinkedIn</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Python for Students</CardTitle>
                  <CardDescription>LinkedIn</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Excel Essential Training</CardTitle>
                  <CardDescription>LinkedIn</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Ads Management and Creation</CardTitle>
                  <CardDescription>Google</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Languages Section */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-4xl text-center mb-8">Languages</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 max-w-3xl mx-auto">
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">English</CardTitle>
                  <CardDescription>Native or Bilingual Proficiency</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">French</CardTitle>
                  <CardDescription>Limited Working Proficiency</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Gujarati</CardTitle>
                  <CardDescription>Native or Bilingual Proficiency</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Hindi</CardTitle>
                  <CardDescription>Native or Bilingual Proficiency</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl text-center mb-16">Contact Me</h2>
            <div className="mx-auto grid max-w-lg gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="flex items-center space-x-4">
                      <Mail className="h-6 w-6 text-primary" />
                      <a href="mailto:desainivid05@gmail.com" className="text-primary hover:underline">
                        desainivid05@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Linkedin className="h-6 w-6 text-primary" />
                      <a
                        href="https://linkedin.com/in/nivid-desai-"
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary hover:underline"
                      >
                        linkedin.com/in/nivid-desai-
                      </a>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Github className="h-6 w-6 text-primary" />
                      <a
                        href="https://github.com/nivid-desai"
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary hover:underline"
                      >
                        github.com/nivid-desai
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Nivid Desai. All rights reserved.
          </p>
          <div className="flex items-center space-x-1">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Home
            </a>
            <span className="text-muted-foreground">•</span>
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground">
              About
            </a>
            <span className="text-muted-foreground">•</span>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </a>
            <span className="text-muted-foreground">•</span>
            <a 
              href="https://nivid-desai-portfolio.vercel.app/" 
              target="_blank" 
              rel="noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Vercel Portfolio
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
