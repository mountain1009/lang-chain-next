'use server'

export async function create(formData: FormData) {
  console.log(formData.get('message'))
  console.log('create')
}

export async function getData() {
  console.log('getData')

  return { name: 'hogeho' }
}
