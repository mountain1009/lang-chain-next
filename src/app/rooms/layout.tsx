import { Navigation } from './_components/Navigation'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex'>
      <Navigation />
      <div className='p-2 flex-1'>
        <div className='border rounded-lg p-2 h-[calc(100vh-80px)]'>{children}</div>
      </div>
    </div>
  )
}
