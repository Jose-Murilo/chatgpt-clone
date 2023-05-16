"use client"

import { Sidebar } from "@/components/Sidebar";
import { useState } from "react";

export default function Home() {
  const [sidebarOpened, setSidebarOpened] = useState(false)

  function closeSidebar() {
    
  }

  return (
    <main className="flex min-h-screen bg-gpt-gray">
      <Sidebar 
        open={sidebarOpened}
        onClose={closeSidebar}
      >
        
      </Sidebar>
      
      <section className="flex flex-col w-full">
        ...
      </section>

    </main>
  )
}