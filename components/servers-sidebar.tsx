'use client'

import AppleIcon from '@/components/icons/apple-icon'
import UbuntuIcon from '@/components/icons/ubuntu-icon'
import WindowsIcon from '@/components/icons/windows-icon'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { SERVERS } from '@/lib/constants'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

export default function ServersSidebar() {
  const segment = useSelectedLayoutSegment()

  const rootServers = SERVERS.filter((server) => server.parent === null)

  return (
    <aside className='flex w-64 max-w-64 min-w-64 flex-col border-r p-4'>
      <Input placeholder='Search...' />
      <Separator className='my-4' />
      <ul className='space-y-1'>
        {rootServers.map((server) => (
          <ServerItem
            key={server.id}
            {...server}
            isActive={segment === server.id}
          />
        ))}
      </ul>
    </aside>
  )
}

type ServerItemProps = {
  id: string
  name: string
  os: 'macos' | 'ubuntu' | 'windows'
  ip: string
  parent: string | null
  isActive: boolean
}

function ServerItem(server: ServerItemProps) {
  const Icon = {
    macos: AppleIcon,
    ubuntu: UbuntuIcon,
    windows: WindowsIcon,
  }[server.os]

  return (
    <Link
      href={`/servers/${server.id}`}
      className={cn(
        'flex h-8 items-center gap-2 rounded-md px-2 transition-colors',
        server.isActive
          ? 'bg-muted text-foreground'
          : 'hover:bg-muted text-muted-foreground bg-transparent',
      )}
    >
      <Icon className='size-4' />
      <span className='text-sm'>{server.name}</span>
    </Link>
  )
}
