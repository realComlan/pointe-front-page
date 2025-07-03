"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { languages, type translations } from "@/lib/i18n"

interface LanguageSelectorProps {
  currentLang: keyof typeof translations
  onLanguageChange: (lang: keyof typeof translations) => void
}

export function LanguageSelector({ currentLang, onLanguageChange }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white">
        <Globe className="h-4 w-4 mr-2" />
        {languages[currentLang]}
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-slate-800 border border-slate-700 rounded-md shadow-lg z-50">
          {Object.entries(languages).map(([code, name]) => (
            <button
              key={code}
              onClick={() => {
                onLanguageChange(code as keyof typeof translations)
                setIsOpen(false)
              }}
              className="block w-full text-left px-3 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white first:rounded-t-md last:rounded-b-md"
            >
              {name}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
