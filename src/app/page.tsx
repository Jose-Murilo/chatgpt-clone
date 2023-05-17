"use client"

import { Sidebar } from "@/components/Sidebar";
import { useState } from "react";

export default function Home() {
  const [sidebarOpened, setSidebarOpened] = useState(false)

  function closeSidebar() {
    setSidebarOpened(false)
  }

  function handleClearConversations() {

  }

  function handleNewChat() {

  }

  return (
    <main className="flex min-h-screen bg-gpt-gray">
      <Sidebar 
        open={sidebarOpened}
        onClose={closeSidebar}
        onClear={handleClearConversations}
        onNewChat={handleNewChat}
      >
        
      </Sidebar>
      
      <section className="flex flex-col w-full">
        <button onClick={() => setSidebarOpened(true)}>Abrir Sidebar</button>
      </section>

    </main>
  )
}