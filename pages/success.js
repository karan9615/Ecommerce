import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import {BsBagCheckFill} from "react-icons/bs"
import {useRouter} from "next/router"
import { useStateContext } from '../context/StateContext'
import { runFireWorks } from '../lib/utils'

const Success = () => {
    const {setCartItems,setTotalPrice,setTotalQuantities} = useStateContext();
    const [order, setOrder] = useState(null); 


        useEffect(()=>{
            localStorage.clear(); 
            setCartItems([]); 
            setTotalPrice(0); 
            setTotalQuantities(0);
            runFireWorks();
        },[]);

  return (
    <div className='success-wrapper'>
        <div className='success'>
            <p className='icon'>
               <BsBagCheckFill />
            </p>
            <h2>Thank You For Your Order!</h2>
            <p className='email-msg'>Check your email inbox for the receipt.</p>
            <p className='description'>
                If you have any queries, email to
                <a className='email' href='mailto: karangupta9615@gmail.com'>
                   karangupta9615@gmail.com
                </a>
            </p>
            <Link href="/">
                <button type='button' className='btn' width="300px">
                    Continue Shopping
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Success