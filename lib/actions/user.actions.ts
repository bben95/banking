'use server';

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";
import { console } from "inspector";
console.log('User Actions Loaded');
export const signIn= async() => {
    try{
         // mutation / Database
    }catch(error){
        console.log('Error',error)
    }    
}
export const signUp= async(userData:SignUpParams) => {
    console.log('User Data',userData)
    const { email, password, firstName,lastName } = userData;
    try{
        const { account } = await createAdminClient();

      const newUserAccount=  await account.create(
        ID.unique(),
        email, 
        password, 
        `${firstName} ${lastName}`);
        const session = await account.createEmailPasswordSession(email, password);
      
        const cookieStore = await cookies();
        cookieStore.set("appwrite-session", session.secret, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: true,
        });
        console.log('New User Account',newUserAccount)
        return parseStringify(newUserAccount);
    }catch(error){
        console.log('Error',error)
    }    

}

export async function getLoggedInUser() {
    try {
      const { account } = await createSessionClient();
      return await account.get();
    } catch (error) {
      return null;
    }
  }

  

