import React, { useState, useEffect } from 'react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { Progress } from './components/ui/progress'
import { 
  Code2, 
  Sparkles, 
  GitBranch, 
  Users, 
  Smartphone, 
  Zap, 
  Database, 
  Shield,
  Play,
  ArrowRight,
  Github,
  Chrome,
  Terminal,
  Layers,
  Palette,
  Globe,
  X,
  Menu,
  Activity,
  TrendingUp,
  Server,
  CheckCircle,
  Clock
} from 'lucide-react'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [buildProgress, setBuildProgress] = useState(0)
  const [activeProject, setActiveProject] = useState('e-commerce')

  // Simulate build progress
  useEffect(() => {
    const interval = setInterval(() => {
      setBuildProgress(prev => {
        if (prev >= 100) return 0
        return prev + Math.random() * 10
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Navigation Header */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-gray-900">Firebase Studio</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('features')} 
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('workspace')} 
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Workspace
              </button>
              <button 
                onClick={() => scrollToSection('dashboard')} 
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Dashboard
              </button>
              <button 
                onClick={() => scrollToSection('integrations')} 
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Integrations
              </button>
              <Button variant="outline" size="sm">Sign In</Button>
              <Button size="sm">Get Started</Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t bg-white/95 backdrop-blur-sm">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button 
                  onClick={() => scrollToSection('features')}
                  className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors w-full text-left"
                >
                  Features
                </button>
                <button 
                  onClick={() => scrollToSection('workspace')}
                  className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors w-full text-left"
                >
                  Workspace
                </button>
                <button 
                  onClick={() => scrollToSection('dashboard')}
                  className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors w-full text-left"
                >
                  Dashboard
                </button>
                <button 
                  onClick={() => scrollToSection('integrations')}
                  className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors w-full text-left"
                >
                  Integrations
                </button>
                <div className="px-3 py-2 space-y-2">
                  <Button variant="outline" size="sm" className="w-full">Sign In</Button>
                  <Button size="sm" className="w-full">Get Started</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              <Sparkles className="w-4 h-4 mr-1" />
              AI-Powered Development
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Build with{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                AI-powered
              </span>
              <br />
              Firebase Studio
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              The next-generation development platform that combines Firebase's power with AI assistance, 
              real-time collaboration, and seamless deployment workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-3">
                <Play className="w-5 h-5 mr-2" />
                Start Building
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                <Github className="w-5 h-5 mr-2" />
                View on GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Workspace Preview */}
      <section id="workspace" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              AI-Powered Development Workspace
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of development with our integrated AI assistant, 
              code editor, and live preview environment.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-96">
              {/* Gemini AI Panel */}
              <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-5 h-5 text-purple-600" />
                    <CardTitle className="text-lg">Gemini AI</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="bg-white/60 rounded-lg p-3 text-sm">
                    <strong>You:</strong> Create a user authentication component
                  </div>
                  <div className="bg-purple-100/60 rounded-lg p-3 text-sm">
                    <strong>AI:</strong> I'll create a secure authentication component with Firebase Auth integration...
                  </div>
                  <div className="flex items-center text-xs text-purple-600">
                    <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse mr-2"></div>
                    Generating code...
                  </div>
                </CardContent>
              </Card>

              {/* Code Editor Panel */}
              <Card className="bg-gradient-to-br from-gray-50 to-slate-50 border-gray-200">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <Code2 className="w-5 h-5 text-gray-600" />
                    <CardTitle className="text-lg">Code Editor</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-900 rounded-lg p-4 text-sm font-mono text-green-400 h-48 overflow-hidden">
                    <div className="text-blue-400">import</div>
                    <div className="text-yellow-400">&#123; useState &#125;</div>
                    <div className="text-blue-400">from</div>
                    <div className="text-green-400">'react'</div>
                    <br />
                    <div className="text-purple-400">const</div>
                    <div className="text-blue-300">AuthComponent</div>
                    <div className="text-white">=</div>
                    <div className="text-yellow-400">() =&gt; &#123;</div>
                    <div className="ml-4 text-gray-400">// AI-generated code</div>
                    <div className="ml-4 text-purple-400">const</div>
                    <div className="ml-4 text-blue-300">[user, setUser]</div>
                    <div className="text-white">=</div>
                    <div className="text-yellow-400">useState</div>
                    <div className="text-white">(null)</div>
                  </div>
                </CardContent>
              </Card>

              {/* Preview Panel */}
              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <Chrome className="w-5 h-5 text-green-600" />
                    <CardTitle className="text-lg">Live Preview</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-white rounded-lg p-4 border-2 border-dashed border-green-200 h-48 flex flex-col justify-center items-center">
                    <div className="w-full max-w-xs space-y-3">
                      <div className="h-8 bg-gray-100 rounded animate-pulse"></div>
                      <div className="h-8 bg-gray-100 rounded animate-pulse"></div>
                      <div className="h-10 bg-primary/20 rounded flex items-center justify-center">
                        <span className="text-primary font-medium">Sign In</span>
                      </div>
                    </div>
                    <div className="mt-4 text-xs text-green-600 flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      Live updating...
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything you need to build faster
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful features designed to accelerate your development workflow
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-0 bg-gradient-to-br from-white to-blue-50/30">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary/20 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300">
                  <Sparkles className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="group-hover:text-primary transition-colors duration-300">AI-Powered Development</CardTitle>
                <CardDescription>
                  Get intelligent code suggestions, automated testing, and instant debugging with Gemini AI integration.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-0 bg-gradient-to-br from-white to-green-50/30">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 group-hover:bg-accent/20 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300">
                  <Users className="w-6 h-6 text-accent group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="group-hover:text-accent transition-colors duration-300">Real-time Collaboration</CardTitle>
                <CardDescription>
                  Work together seamlessly with live editing, comments, and shared workspaces for your entire team.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-0 bg-gradient-to-br from-white to-blue-50/30">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-500/10 group-hover:bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300">
                  <GitBranch className="w-6 h-6 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="group-hover:text-blue-500 transition-colors duration-300">GitHub/GitLab Integration</CardTitle>
                <CardDescription>
                  Seamlessly connect with your repositories, manage branches, and deploy directly from your workspace.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-0 bg-gradient-to-br from-white to-purple-50/30">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-500/10 group-hover:bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300">
                  <Smartphone className="w-6 h-6 text-purple-500 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="group-hover:text-purple-500 transition-colors duration-300">Built-in Emulators</CardTitle>
                <CardDescription>
                  Test your apps instantly with integrated web previews and Android emulators - no setup required.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-0 bg-gradient-to-br from-white to-orange-50/30">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-500/10 group-hover:bg-orange-500/20 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300">
                  <Zap className="w-6 h-6 text-orange-500 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="group-hover:text-orange-500 transition-colors duration-300">Firebase App Hosting</CardTitle>
                <CardDescription>
                  Deploy your applications instantly with Firebase's global CDN and automatic SSL certificates.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-0 bg-gradient-to-br from-white to-red-50/30">
              <CardHeader>
                <div className="w-12 h-12 bg-red-500/10 group-hover:bg-red-500/20 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300">
                  <Layers className="w-6 h-6 text-red-500 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="group-hover:text-red-500 transition-colors duration-300">Extension Marketplace</CardTitle>
                <CardDescription>
                  Extend functionality with a rich ecosystem of extensions for frameworks, tools, and integrations.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Interactive Dashboard Section */}
      <section id="dashboard" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Interactive Project Dashboard
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Monitor your projects in real-time with comprehensive analytics and deployment tracking
            </p>
          </div>
          
          {/* Dashboard Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Active Projects</p>
                    <p className="text-3xl font-bold text-gray-900">12</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Activity className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-green-600">+2 this week</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Deployments</p>
                    <p className="text-3xl font-bold text-gray-900">47</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Server className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-green-600">+8 today</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Success Rate</p>
                    <p className="text-3xl font-bold text-gray-900">98.5%</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-green-600">+0.3% improvement</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Build Time</p>
                    <p className="text-3xl font-bold text-gray-900">2.4m</p>
                  </div>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-green-600">-15s faster</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Project Cards with Interactive Elements */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className={`border-l-4 border-l-green-500 hover:shadow-xl transition-all duration-300 cursor-pointer ${activeProject === 'e-commerce' ? 'ring-2 ring-green-200' : ''}`}
                  onClick={() => setActiveProject('e-commerce')}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-green-700">E-commerce App</CardTitle>
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Deployed
                  </Badge>
                </div>
                <CardDescription>
                  React + Firebase • Last updated 2 hours ago
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Build Status</span>
                    <span className="text-green-600 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Success
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Performance</span>
                    <span className="text-green-600">98/100</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Active Users</span>
                    <span className="font-medium">1,234</span>
                  </div>
                  <div className="pt-2">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>Uptime</span>
                      <span>99.9%</span>
                    </div>
                    <Progress value={99.9} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className={`border-l-4 border-l-yellow-500 hover:shadow-xl transition-all duration-300 cursor-pointer ${activeProject === 'blog' ? 'ring-2 ring-yellow-200' : ''}`}
                  onClick={() => setActiveProject('blog')}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-yellow-700">Blog Platform</CardTitle>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">
                    <Clock className="w-3 h-3 mr-1" />
                    Building
                  </Badge>
                </div>
                <CardDescription>
                  Next.js + Firestore • Building for 3 minutes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Build Status</span>
                    <span className="text-yellow-600 flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      In Progress
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span className="text-yellow-600">{Math.round(buildProgress)}%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>ETA</span>
                    <span className="font-medium">2 minutes</span>
                  </div>
                  <div className="pt-2">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>Build Progress</span>
                      <span>{Math.round(buildProgress)}%</span>
                    </div>
                    <Progress value={buildProgress} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className={`border-l-4 border-l-blue-500 hover:shadow-xl transition-all duration-300 cursor-pointer ${activeProject === 'mobile' ? 'ring-2 ring-blue-200' : ''}`}
                  onClick={() => setActiveProject('mobile')}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-blue-700">Mobile App</CardTitle>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    <Code2 className="w-3 h-3 mr-1" />
                    Development
                  </Badge>
                </div>
                <CardDescription>
                  React Native + Firebase • Last commit 1 hour ago
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Build Status</span>
                    <span className="text-blue-600 flex items-center">
                      <Code2 className="w-4 h-4 mr-1" />
                      Development
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tests Passing</span>
                    <span className="text-green-600">24/24</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Coverage</span>
                    <span className="font-medium">87%</span>
                  </div>
                  <div className="pt-2">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>Test Coverage</span>
                      <span>87%</span>
                    </div>
                    <Progress value={87} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="mt-12 text-center">
            <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
              <Button variant="ghost" size="sm" className="rounded-md">
                <Play className="w-4 h-4 mr-2" />
                Deploy All
              </Button>
              <Button variant="ghost" size="sm" className="rounded-md">
                <GitBranch className="w-4 h-4 mr-2" />
                Create Branch
              </Button>
              <Button variant="ghost" size="sm" className="rounded-md">
                <Terminal className="w-4 h-4 mr-2" />
                Open Terminal
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section id="integrations" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful Integrations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with your favorite tools and services
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: 'GitHub', icon: Github },
              { name: 'Firebase', icon: Database },
              { name: 'Chrome', icon: Chrome },
              { name: 'Terminal', icon: Terminal },
              { name: 'Security', icon: Shield },
              { name: 'Design', icon: Palette }
            ].map((integration, index) => (
              <div key={index} className="flex flex-col items-center p-6 bg-white rounded-lg hover:shadow-md transition-shadow">
                <integration.icon className="w-8 h-8 text-gray-600 mb-3" />
                <span className="text-sm font-medium text-gray-900">{integration.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to build the future?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who are already building amazing applications with Firebase Studio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              <Play className="w-5 h-5 mr-2" />
              Start Building Now
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary">
              <Globe className="w-5 h-5 mr-2" />
              View Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-semibold">Firebase Studio</span>
              </div>
              <p className="text-gray-400 mb-4">
                The next-generation development platform for modern web applications.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 Firebase Studio. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App