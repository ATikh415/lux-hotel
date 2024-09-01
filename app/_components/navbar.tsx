"use client"

import { Separator } from '@/components/ui/separator'
import { Bell, ChevronDown, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className=' bg-white h-20 w-screen flex items-center justify-between px-32 '>
        <div>
            <div className='flex items-center text-2xl font-bold'>Okool<p className=' text-orange-500'>Trip</p></div>
        </div>
        <nav className=' flex items-center gap-10 font-light text-xl text-slate-500'>
            <Link href={"#"}>Hebergement</Link>
            <Link href={"#"}>Circuit</Link>
            <Link href={"#"}>Où Partir</Link>
            <Link href={"#"}>Guide de Doyage</Link>
        </nav>
        <div className=' flex items-center gap-4'>
            <button type="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center text-orange-500 ">
            <Bell className='w-7 h-7' />
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-md -top-2 -end-2 ">20</div>
            </button>
            <ChevronDown className=' text-primary' />
             <Separator  orientation='vertical' className=' border-[1px] h-10 border-neutral-600' />
             
            <button type="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center text-orange-500 ">
            <User className='w-8 h-8' />
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs text-neutral-400 top-2 -end-8 ">
                Bonjour!
            </div>
            </button>
            <ChevronDown className=' text-primary ml-12' />
        </div>

    </div>
  )
}

export default Navbar