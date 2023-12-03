'use server'

import { Button } from '@/components/ui/button'
import { create } from './_actions/serverAction'
import { getData } from './_actions/serverAction'
import { Textarea } from '@/components/ui/textarea'

export default async function Page() {
  const res = await getData()

  return (
    <div className='flex'>
      <div className='w-full'>
        {res.name}
        <form action={create} className='flex items-center gap-4'>
          <Textarea className='w-full' rows={1} name='message'></Textarea>
          <Button>送信</Button>
        </form>
      </div>
    </div>
  )
}
