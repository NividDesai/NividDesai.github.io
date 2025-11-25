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
              <a href="https://github.com/NividDesai" target="_blank" rel="noreferrer" className="p-2">
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
                  <Image src="/new.png" alt="Nivid Desai" fill className="object-cover grayscale" priority />
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
                  <CardTitle>AI Developer</CardTitle>
                  <CardDescription>FPT Software | 10/2025 - Present · Remote (Paris, Île-de-France)</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Developing an automated AI interview platform with dynamic question generation</li>
                    <li>Implementing multimodal sentiment and content scoring for candidate responses</li>
                    <li>Building reporting pipelines that deliver actionable insights for hiring teams</li>
                    <li>Designing LLM workflows and optimizing backend latency by roughly 15–20%</li>
                    <li>Leveraging Generative AI, Node.js, and additional supporting tooling</li>
                  </ul>
                </CardContent>
              </Card>
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
                      bots, autonomous AI agents with CrewAI, and LLM fine-tuning pipelines
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
                    <FileCode className="h-5 w-5 text-primary" />
                    <CardTitle className="text-xl">AI Sales Enablement Suite</CardTitle>
                  </div>
                  <CardDescription>Express · TypeScript · OpenAI · Automation</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground">
                    Automated CV parsing, lead intelligence, tailored B2B outreach generation, and an avatar-style chatbot
                    in one unified workflow spanning AI, backend, and automation layers.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex gap-2">
                    <Badge variant="outline">Express</Badge>
                    <Badge variant="outline">TypeScript</Badge>
                    <Badge variant="outline">OpenAI</Badge>
                  </div>
                  <Button variant="default" size="sm" className="gap-2" asChild>
                    <a href="https://github.com/NividDesai/AI-Sales-Enablement-Suite" target="_blank" rel="noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <BrainCircuit className="h-5 w-5 text-primary" />
                    <CardTitle className="text-xl">Sports Video Analyzer</CardTitle>
                  </div>
                  <CardDescription>Next.js · Node/Express · ffmpeg · Whisper/GPT</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground">
                    AI-enabled analysis of uploaded match footage with event detection, audio transcription, tactical insight
                    generation, and real-time narration support for accessibility.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex gap-2">
                    <Badge variant="outline">ffmpeg</Badge>
                    <Badge variant="outline">Whisper</Badge>
                    <Badge variant="outline">Next.js</Badge>
                  </div>
                  <Button variant="default" size="sm" className="gap-2" asChild>
                    <a href="https://github.com/NividDesai/Sports-Video-Analyzer" target="_blank" rel="noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </CardFooter>
              </Card>
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
                  <Button variant="default" size="sm" className="gap-2" asChild>
                    <a href="https://github.com/NividDesai/YouTube-Analytics-AI" target="_blank" rel="noreferrer">
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
                    <CardTitle className="text-xl">Ethics Game</CardTitle>
                  </div>
                  <CardDescription>Interactive AI Ethics Simulation</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground">
                    A browser-based role-play that challenges players with AI-driven dilemmas to practice responsible
                    decision making.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex gap-2">
                    <Badge variant="outline">Next.js</Badge>
                    <Badge variant="outline">Gamification</Badge>
                    <Badge variant="outline">Ethics</Badge>
                  </div>
                  <Button variant="default" size="sm" className="gap-2" asChild>
                    <a href="https://v0-ethics-game-cdvnoiykw3x-hy2uhptiy.vercel.app/" target="_blank" rel="noreferrer">
                      <Code className="h-4 w-4 mr-2" />
                      Live
                    </a>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <BrainCircuit className="h-5 w-5 text-primary" />
                    <CardTitle className="text-xl">Sentiment Analysis with BERT</CardTitle>
                  </div>
                  <CardDescription>Production-Ready NLP Pipeline</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground">
                    End-to-end MLOps system for binary app-review sentiment classification: BERT fine-tuning, automated
                    testing with 100% coverage, CI/CD, evaluation dashboards, and inference scripts ready for deployment.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex gap-2">
                    <Badge variant="outline">BERT</Badge>
                    <Badge variant="outline">PyTorch</Badge>
                    <Badge variant="outline">CI/CD</Badge>
                  </div>
                  <Button variant="default" size="sm" className="gap-2" asChild>
                    <a href="https://github.com/NividDesai/sentiment-bert-collab" target="_blank" rel="noreferrer">
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
                    <CardTitle className="text-xl">3D AI Avatar ChatBot</CardTitle>
                  </div>
                  <CardDescription>FastAPI · RAG · Three.js</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground">
                    Full-stack conversational assistant with persona-aware LLM responses, retrieval-augmented context,
                    lip-synced Ready Player Me avatars, and a Vite/React frontend streaming WebSockets from a FastAPI backend.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex gap-2">
                    <Badge variant="outline">FastAPI</Badge>
                    <Badge variant="outline">RAG</Badge>
                    <Badge variant="outline">Three.js</Badge>
                  </div>
                  <Button variant="default" size="sm" className="gap-2" asChild>
                    <a href="https://github.com/NividDesai/3D_Ai-Avatar-ChatBot" target="_blank" rel="noreferrer">
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
                    <CardTitle className="text-xl">3D Lead Gen Frontend</CardTitle>
                  </div>
                  <CardDescription>Vite · React · Three.js</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground">
                    Immersive marketing site template for the AI Sales Enablement Suite featuring an animated hero,
                    lead capture flows, and CTA sections tailored for B2B automation products.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex gap-2">
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">Three.js</Badge>
                    <Badge variant="outline">Tailwind</Badge>
                  </div>
                  <Button variant="default" size="sm" className="gap-2" asChild>
                    <a href="https://ai-sales-enablement-suite-frontend.vercel.app/" target="_blank" rel="noreferrer">
                      <Code className="h-4 w-4 mr-2" />
                      Live
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
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge className="px-3 py-1 text-sm">LLMs</Badge>
              <Badge className="px-3 py-1 text-sm">RAG</Badge>
              <Badge className="px-3 py-1 text-sm">Transformers</Badge>
              <Badge className="px-3 py-1 text-sm">NLP</Badge>
              <Badge className="px-3 py-1 text-sm">Deep Learning</Badge>
              <Badge className="px-3 py-1 text-sm">TensorFlow</Badge>
              <Badge className="px-3 py-1 text-sm">PyTorch</Badge>
              <Badge className="px-3 py-1 text-sm">Scikit-Learn</Badge>
              <Badge className="px-3 py-1 text-sm">OCR</Badge>
              <Badge className="px-3 py-1 text-sm">MLOps</Badge>
              <Badge className="px-3 py-1 text-sm">Power BI</Badge>
              <Badge className="px-3 py-1 text-sm">Excel</Badge>
              <Badge className="px-3 py-1 text-sm">Data Acquisition</Badge>
              <Badge className="px-3 py-1 text-sm">Data Processing</Badge>
              <Badge className="px-3 py-1 text-sm">Matplotlib</Badge>
              <Badge className="px-3 py-1 text-sm">Seaborn</Badge>
              <Badge className="px-3 py-1 text-sm">SQL</Badge>
              <Badge className="px-3 py-1 text-sm">SQLite</Badge>
              <Badge className="px-3 py-1 text-sm">Python</Badge>
              <Badge className="px-3 py-1 text-sm">R</Badge>
              <Badge className="px-3 py-1 text-sm">Java</Badge>
              <Badge className="px-3 py-1 text-sm">FastAPI</Badge>
              <Badge className="px-3 py-1 text-sm">Flask</Badge>
              <Badge className="px-3 py-1 text-sm">HTML/CSS/JS</Badge>
              <Badge className="px-3 py-1 text-sm">Web Design</Badge>
              <Badge className="px-3 py-1 text-sm">Node/Express</Badge>
              <Badge className="px-3 py-1 text-sm">TypeScript</Badge>
              <Badge className="px-3 py-1 text-sm">AWS</Badge>
              <Badge className="px-3 py-1 text-sm">Azure</Badge>
              <Badge className="px-3 py-1 text-sm">Cloud</Badge>
              <Badge className="px-3 py-1 text-sm">Docker</Badge>
              <Badge className="px-3 py-1 text-sm">Systems Architecture</Badge>
              <Badge className="px-3 py-1 text-sm">OS Management</Badge>
            </div>
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
                      <li>Development of AI</li>
                      <li>Deep Learning</li>
                      <li>Machine Learning</li>
                      <li>Data Science</li>
                      <li>Data Processing</li>
                      <li>Data Modeling</li>
                      <li>Data Acquisition</li>
                      <li>Information and Data Security</li>
                      <li>Systems Architecture</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Cybersecurity</li>
                      <li>Internet of Things</li>
                      <li>OS Management</li>
                      <li>Python, R, Algorithms</li>
                      <li>AI Law, AI Ethics</li>
                      <li>DevOps</li>
                      <li>Data Visualization</li>
                      <li>Business Intelligence</li>
                      <li>Cloud Tools</li>
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
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {/* Oracle */}
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">OCI 2025 Certified AI Foundations Associate</CardTitle>
                  <CardDescription>Oracle</CardDescription>
                </CardHeader>
                <CardFooter className="pt-0">
                  <Button variant="link" className="px-0" asChild>
                    <a
                      href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=CC51884B11D49A9B8ECF1DE6677EF10E92DBC859B95358A5F5548EB86E604978"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Show credential
                    </a>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Oracle Fusion AI Agent Studio Certified Associate</CardTitle>
                  <CardDescription>Oracle</CardDescription>
                </CardHeader>
                <CardFooter className="pt-0">
                  <Button variant="link" className="px-0" asChild>
                    <a
                      href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=BBFF60F5F26EE00D0015ADD880CC821FFDF6EBE90EA3C391894B0775E94DD54D"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Show credential
                    </a>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">OCI 2025 Certified Generative AI Professional</CardTitle>
                  <CardDescription>Oracle</CardDescription>
                </CardHeader>
                <CardFooter className="pt-0">
                  <Button variant="link" className="px-0" asChild>
                    <a
                      href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=B7FEDDCE5880140A93B8155B5078479AE099E68879580B477A4895F263F25678"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Show credential
                    </a>
                  </Button>
                </CardFooter>
              </Card>

              {/* Google */}
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Ads Management and Creation</CardTitle>
                  <CardDescription>Google</CardDescription>
                </CardHeader>
                <CardFooter className="pt-0">
                  <Button variant="link" className="px-0" asChild>
                    <a href="#" aria-disabled="true">
                      Show credential
                    </a>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Data Analytics</CardTitle>
                  <CardDescription>Google</CardDescription>
                </CardHeader>
                <CardFooter className="pt-0">
                  <Button variant="link" className="px-0" asChild>
                    <a href="#" aria-disabled="true">
                      Show credential
                    </a>
                  </Button>
                </CardFooter>
              </Card>

              {/* LinkedIn */}
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Cybersecurity Foundations</CardTitle>
                  <CardDescription>LinkedIn</CardDescription>
                </CardHeader>
                <CardFooter className="pt-0">
                  <Button variant="link" className="px-0" asChild>
                    <a
                      href="https://www.linkedin.com/learning/certificates/99d0bf1002f9a56eaad6b0f9ff63d7495ddafa288f67fda71676941e91915beb?u=91406298&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BzIogcOqsSxKXEdrkKL7tdQ%3D%3D"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Show credential
                    </a>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">HR Foundations: Core Human Resources</CardTitle>
                  <CardDescription>LinkedIn</CardDescription>
                </CardHeader>
                <CardFooter className="pt-0">
                  <Button variant="link" className="px-0" asChild>
                    <a
                      href="https://www.linkedin.com/learning/certificates/517dafcb80802489c0a8d6143c570fc5d03b2f82f0c1be752a8f4d91f37942ae?u=91406298&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BzIogcOqsSxKXEdrkKL7tdQ%3D%3D"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Show credential
                    </a>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Python for Time Series Forecasting</CardTitle>
                  <CardDescription>LinkedIn</CardDescription>
                </CardHeader>
                <CardFooter className="pt-0">
                  <Button variant="link" className="px-0" asChild>
                    <a
                      href="https://www.linkedin.com/learning/certificates/e0fba17d9ebe4f36d6f0a3707be1d58393d05337320ab0aa1e715de39df63d7a?u=91406298&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BzIogcOqsSxKXEdrkKL7tdQ%3D%3D"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Show credential
                    </a>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Business Analysis Foundations</CardTitle>
                  <CardDescription>LinkedIn</CardDescription>
                </CardHeader>
                <CardFooter className="pt-0">
                  <Button variant="link" className="px-0" asChild>
                    <a
                      href="https://www.linkedin.com/learning/certificates/8367a680a61512953a45a087392e0a57f26c019cf63ba5c6b4327d539931208b?u=91406298"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Show credential
                    </a>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">What Is Business Analysis?</CardTitle>
                  <CardDescription>LinkedIn</CardDescription>
                </CardHeader>
                <CardFooter className="pt-0">
                  <Button variant="link" className="px-0" asChild>
                    <a
                      href="https://www.linkedin.com/learning/certificates/a9469a2bb4fae9d092441b427378eed9038e3b2136fd77df5736ed2100bf2244?u=91406298"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Show credential
                    </a>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Programming Foundations: Algorithms</CardTitle>
                  <CardDescription>LinkedIn</CardDescription>
                </CardHeader>
                <CardFooter className="pt-0">
                  <Button variant="link" className="px-0" asChild>
                    <a
                      href="https://www.linkedin.com/learning/certificates/6aceb3607b428cadf9faa6f6099cc8fe91e41f605120383cc38e3a342eecafc6?u=91406298"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Show credential
                    </a>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Python for Students</CardTitle>
                  <CardDescription>LinkedIn</CardDescription>
                </CardHeader>
                <CardFooter className="pt-0">
                  <Button variant="link" className="px-0" asChild>
                    <a
                      href="https://www.linkedin.com/learning/certificates/998f6da457f9b8092bd8784862731d6bceb6a6e309f26a73302abdf6017c1b0b?u=91406298"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Show credential
                    </a>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Statistics Foundations 1: The Basics</CardTitle>
                  <CardDescription>LinkedIn</CardDescription>
                </CardHeader>
                <CardFooter className="pt-0">
                  <Button variant="link" className="px-0" asChild>
                    <a
                      href="https://www.linkedin.com/learning/certificates/2928f2f8aae2b2204725f5f97981bf668df3011ef03b186c0e5cce1dd4c00d20?u=91406298"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Show credential
                    </a>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Artificial Intelligence for Students</CardTitle>
                  <CardDescription>LinkedIn</CardDescription>
                </CardHeader>
                <CardFooter className="pt-0">
                  <Button variant="link" className="px-0" asChild>
                    <a
                      href="https://www.linkedin.com/learning/certificates/834bebf6a14665fd9e2bcde35fbd20abf353d007083907f2c978ddeaad57ab63?u=91406298"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Show credential
                    </a>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">IoT Foundations: Fundamentals</CardTitle>
                  <CardDescription>LinkedIn</CardDescription>
                </CardHeader>
                <CardFooter className="pt-0">
                  <Button variant="link" className="px-0" asChild>
                    <a
                      href="https://www.linkedin.com/learning/certificates/1bb236c4bcc69fdc494bd88a1be8a946f8daf6c8a8cf7b2f443f80980ae51e33?u=91406298"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Show credential
                    </a>
                  </Button>
                </CardFooter>
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
                        href="https://github.com/NividDesai"
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary hover:underline"
                      >
                        github.com/NividDesai
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
