import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const Myaddedcars = async() => {
    const session = await auth.api.getSession({
        headers: await headers(),
      });
    
      const user = session?.user;
     
    
      if (!user) {
        return (
          <div className="min-h-screen bg-[#eae0d5] flex items-center justify-center">
            <h1 className="text-2xl font-bold text-[#0a0908]">
              Please login to see your Added Cars.
            </h1>
          </div>
        );
      }
    
      const res = await fetch(`http://localhost:5000/myadded/${user.id}`, {
        cache: "no-store",
      });

    return (
        <div>
            
        </div>
    );
};

export default Myaddedcars;