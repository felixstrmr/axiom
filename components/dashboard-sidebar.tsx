'use client'

import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import { LucideIcon, Server, Settings } from 'lucide-react'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

export default function DashboardSidebar() {
  const segment = useSelectedLayoutSegment()

  const items = [
    {
      name: 'Servers',
      href: '/',
      icon: Server,
      isActive: segment === '(servers)',
    },
    {
      name: 'Settings',
      href: '/settings',
      icon: Settings,
      isActive: segment === 'settings',
    },
  ]

  return (
    <aside className='flex flex-col border-r p-4'>
      <div className='bg-primary size-8 rounded-md' />
      <Separator className='my-4' />
      <div className='space-y-1'>
        {items.map((item) => (
          <SidebarItem key={item.name} {...item} />
        ))}
      </div>
    </aside>
  )
}

type SidebarItemProps = {
  name: string
  href: string
  icon: LucideIcon
  isActive: boolean
}

function SidebarItem(item: SidebarItemProps) {
  return (
    <Link
      href={item.href}
      className={cn(
        'flex size-8 items-center justify-center rounded-md transition-colors',
        item.isActive
          ? 'text-foreground bg-muted'
          : 'text-muted-foreground hover:bg-muted bg-transparent',
      )}
    >
      <item.icon className='size-4' />
    </Link>
  )
}
