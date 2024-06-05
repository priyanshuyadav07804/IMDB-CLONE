import Image from 'next/image'

const loading = () => {
  return (
    
    <div className='flex justify-center'>
      <Image src="spinner.svg" alt="Loading" width={500} height={300}></Image>
    </div>
  )
}

export default loading
