type Server = {
  id: string
  name: string
  os: 'macos' | 'ubuntu' | 'windows'
  ip: string
  parent: string | null
}

export const SERVERS: Server[] = [
  {
    id: 'server-1',
    name: 'Server 1',
    os: 'macos',
    ip: '192.168.1.1',
    parent: null,
  },
  {
    id: 'server-2',
    name: 'Server 2',
    os: 'ubuntu',
    ip: '192.168.1.2',
    parent: null,
  },
  {
    id: 'server-3',
    name: 'Server 3',
    os: 'windows',
    ip: '192.168.1.3',
    parent: null,
  },
]

export const FOLDERS = [
  {
    id: 'root',
    name: 'Root',
    parent: null,
  },
  {
    id: 'folder-1',
    name: 'Folder 1',
    parent: 'root',
  },
  {
    id: 'folder-2',
    name: 'Folder 2',
    parent: 'root',
  },
  {
    id: 'folder-3',
    name: 'Folder 3',
    parent: 'folder-1',
  },
]
