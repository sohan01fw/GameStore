"use client"
import { useMutation } from '@tanstack/react-query';
import { signIn } from 'next-auth/react';

export function AuthBtn() {
  const {isPending,mutate} = useMutation({mutationFn:() =>
    signIn('google', {
      callbackUrl: '/',
    })}
  );
  return (
    <button
      className="btn btn-ghost"
      onClick={()=>{mutate()}}
      disabled={isPending}
    >
      {isPending ? <span className="loading loading-dots loading-lg"></span> : 'Sign with Google'}
    </button>
  );
}

