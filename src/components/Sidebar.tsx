import { ReactNode } from "react";

type SidebarProps = {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
};

export function Sidebar({ children, open, onClose }: SidebarProps) {
  return (
    <section className="fixed top-0 bottom-0 left-0 text-white">
        {children}
    </section>
  )
}