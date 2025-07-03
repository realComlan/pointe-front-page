"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Bot, Zap, Target, Users, Lightbulb, TrendingUp, Code } from "lucide-react"
import Link from "next/link"
import { Analytics } from "@vercel/analytics/next"
import { LanguageSelector } from "@/components/language-selector"
import { translations, getBrowserLanguage } from "@/lib/i18n"

// URL-encoded SVG pattern
const BG_PATTERN =
  "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"

export default function HomePage() {
  const [currentLang, setCurrentLang] = useState<keyof typeof translations>("en")

  useEffect(() => {
    setCurrentLang(getBrowserLanguage())
  }, [])

  const t = translations[currentLang]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: BG_PATTERN }} aria-hidden />

      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bot className="h-8 w-8 text-emerald-400" />
              <span className="text-xl font-bold text-white">Pointe</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-slate-300 hover:text-white transition-colors">
                {t.nav.services}
              </a>
              <a href="#about" className="text-slate-300 hover:text-white transition-colors">
                {t.nav.about}
              </a>
              <a href="#contact" className="text-slate-300 hover:text-white transition-colors">
                {t.nav.contact}
              </a>
              <LanguageSelector currentLang={currentLang} onLanguageChange={setCurrentLang} />
            </nav>
            <div className="md:hidden">
              <LanguageSelector currentLang={currentLang} onLanguageChange={setCurrentLang} />
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <main className="container mx-auto px-4 py-20">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight">
                {t.hero.title}
                <br />
                <span className="text-emerald-400">{t.hero.subtitle}</span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                {t.hero.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
              <Link href="#contact">
                <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 text-lg">
                  <Bot className="h-5 w-5 mr-2" />
                  {t.hero.cta}
                </Button>
              </Link>
              <Link href="#services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3 text-lg bg-transparent"
                >
                  {t.hero.learnMore}
                </Button>
              </Link>
            </div>
          </div>
        </main>

        {/* Services Section */}
        <section id="services" className="container mx-auto px-4 py-20">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white">{t.services.title}</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">{t.services.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-colors">
              <CardContent className="p-6 text-center">
                <Bot className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{t.services.aiIntegration.title}</h3>
                <p className="text-slate-400">{t.services.aiIntegration.description}</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-colors">
              <CardContent className="p-6 text-center">
                <Zap className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{t.services.automation.title}</h3>
                <p className="text-slate-400">{t.services.automation.description}</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-colors">
              <CardContent className="p-6 text-center">
                <Lightbulb className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{t.services.consulting.title}</h3>
                <p className="text-slate-400">{t.services.consulting.description}</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-colors">
              <CardContent className="p-6 text-center">
                <Code className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{t.services.development.title}</h3>
                <p className="text-slate-400">{t.services.development.description}</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white">{t.about.title}</h2>
              <p className="text-xl text-emerald-400">{t.about.subtitle}</p>
              <p className="text-lg text-slate-300 leading-relaxed">{t.about.description}</p>
            </div>

            <div className="grid gap-6">
              <div className="flex items-center space-x-4">
                <Target className="h-8 w-8 text-emerald-400 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white">{t.about.experience}</h3>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <TrendingUp className="h-8 w-8 text-emerald-400 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white">{t.about.agile}</h3>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Users className="h-8 w-8 text-emerald-400 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white">{t.about.results}</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container mx-auto px-4 py-20">
          <div className="text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white">{t.contact.title}</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">{t.contact.subtitle}</p>

            <div className="space-y-4">
              <Link href="mailto:contact@pointe.dev?subject=AI Consultation Request">
                <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 text-lg">
                  <Mail className="h-5 w-5 mr-2" />
                  {t.contact.cta}
                </Button>
              </Link>

              <p className="text-sm text-slate-400">
                {t.contact.email}{" "}
                <Link href="mailto:contact@pointe.dev" className="text-emerald-400 hover:text-emerald-300 underline">
                  contact@pointe.dev
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-8 mt-20 border-t border-slate-800">
          <div className="text-center text-slate-400">
            <p>
              &copy; {new Date().getFullYear()} Pointe — {t.footer.tagline}
            </p>
            <p className="mt-2 text-sm">{t.footer.rights}</p>
          </div>
        </footer>
      </div>
      <Analytics />
    </div>
  )
}
