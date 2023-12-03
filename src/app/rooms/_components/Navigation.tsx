import { Button } from '@/components/ui/button'

async function getData() {
  'use server'

  return [{ title: 'title1' }, { title: 'title2' }]
}

export const Navigation = async () => {
  const data = await getData()
  return (
    <div className='w-[200px] p-2'>
      <div className='border rounded-lg p-2 h-[calc(100vh-80px)]'>
        <ul className='space-y-2'>
          {data.map((d, i) => (
            <li key={i}>
              <Button className='w-full text-left' variant={'ghost'}>
                {d.title}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
