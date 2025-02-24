"use client"

import type React from "react"

import { createContext, useContext, useState } from "react"

type DialogContextType = {
  isDialogOpen: boolean
  setIsDialogOpen: (open: boolean) => void
}

const DialogContext = createContext<DialogContextType | null>(null)

export function DialogProvider({ children }: { children: React.ReactNode }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return <DialogContext.Provider value={{ isDialogOpen, setIsDialogOpen }}>{children}</DialogContext.Provider>
}

export function useDialog() {
  const context = useContext(DialogContext)
  if (!context) {
    throw new Error("useDialog must be used within a DialogProvider")
  }
  return context
}

