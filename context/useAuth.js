import React, { useState, useEffect, createContext, useContext } from 'react'
import liff from '@line/liff';
const AuthContext = createContext();


// export default useAuth
export const AuthProvider = ({ children }) => {
  const liffId = process.env.NEXT_PUBLIC_LIFF_ID;
  const [profile, setProfile] = useState();
  async function authLIFF() {
    const liff = (await import('@line/liff')).default
    await liff.init({ liffId: liffId }).catch(err => { throw err });
    if (liff.isLoggedIn()) {
      let getProfile = await liff.getProfile();
      setProfile(getProfile);
      console.log(getProfile)

    } else {
      liff.login();
    }
  }
  useEffect(() => {
    authLIFF();
  }, []);
  return (
    <AuthContext.Provider value={profile}>
      {children}
    </AuthContext.Provider>
  )
}
export function useAuth() {
  return useContext(AuthContext);
}