import Image from "next/image";
import Link from "next/link";


export default function CategoryList() {
  return (
    <div className='px-4 overflow-x-scroll'>
      <div className='flex gap-4 md:gap-8'>
        <Link href='/list?cat=test'>
          <div className="relative bg-slate-100">
            <Image />
          </div>
        </Link>
      </div>
    </div>
  )
}