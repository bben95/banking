import React, { useCallback, useEffect } from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation';
import { PlaidLinkOnSuccess, PlaidLinkOptions, usePlaidLink } from 'react-plaid-link';
import { createLinkToken, exchangePublicToken } from '@/lib/actions/user.actions';

const PlaidLink = ({user, variant}:PlaidLinkProps) => {
    const router = useRouter();
    const [token,setToken]= React.useState<string | null>('')

    useEffect(()=>{
        const getLinkToken= async () => {
            const data= await createLinkToken(user);
            setToken(data?.linkToken);
        }
        getLinkToken();
    },[user])

    const onSuccess= useCallback<PlaidLinkOnSuccess>(async(public_token:string)=>{
       await exchangePublicToken({
            publicToken:public_token,
            user,
       })
     router.push('/');
    },[user])

    const config:PlaidLinkOptions={
        token,
        onSuccess
    }
    const {open,ready}= usePlaidLink(config);
  return (
    <>{
        variant === 'primary' ? (
            <Button className='plaidlink-primary'
            disabled={!ready}
            onClick={() => open()}>
            Connect Bank
            </Button>
        ) : variant==='ghost' ?(
            <Button className='plaidlink-button ghost'>
            Connect Bank
            </Button>
        ) : (
            <Button className='plaidlink-button'>
            Connect Bank
            </Button>
        )
    }</>
  )
}

export default PlaidLink