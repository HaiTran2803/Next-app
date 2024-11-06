"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import "./styles.css"
import { useState } from "react"

const navLink = [
  {name: "Register", href:"/register"},
  {name: "Login", href:"/login"},
  {name: "Forgot Password", href:"/forgot-password"}
]

export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    const pathname = usePathname()
    const [input, setInput] = useState("")
    return (
      <div style={{background:"lightgray"}}>
        <div>
          <input value={input} onChange={e => setInput(e.target.value)}/>
          {/* change template.tsx(the value change) or layout.tsx(the value nochange) to setup this input */}
          {/* layout include template, whenever render, layout do first */}
        </div>
        {navLink.map((link) => { 
          const isActive = pathname.startsWith(link.href)
          return(<Link className={isActive ? "font-bold text-blue-600 mr-4" : "text-blue-500 mr-4"} style={{margin:"10px", position:"relative", top:"0px"}} 
             href={link.href} key={link.name}>{link.name}</Link>)
        })}
          {children}
          <h2>Inner layout</h2>
      </div>
    )
  }