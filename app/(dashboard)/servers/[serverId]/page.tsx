type Props = {
  params: Promise<{ serverId: string }>
}

export default async function Page({ params }: Props) {
  const { serverId } = await params

  return <div>Page {serverId}</div>
}
