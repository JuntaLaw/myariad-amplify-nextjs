// src/app/page.js
"use client";
import React from 'react'; 

import { WithAuthenticatorProps } from '@aws-amplify/ui-react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import ConfigureAmplifyClientSide from '@/config/ConfigureAmplify';

import Home from './home/page';

import { CustomAuthenticator } from "../ui-components/authenticator.override"; 

export function App({ signOut, user }) {
  return (
    <main>
      <div className='flex'> 
      <ConfigureAmplifyClientSide /> 
      <Home />
      <button className="btn btn-ghost glass m-4" onClick={signOut}>Sign out</button> 
      </div>
    </main>
  );
}

export default withAuthenticator(App); 