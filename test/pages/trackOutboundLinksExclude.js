import PlausibleProvider from '../../dist'

export default function Home() {
  return (
    <PlausibleProvider domain="example.com" trackOutboundLinks exclude="page" />
  )
}
