import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton,UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
    
    <div className="m-10">
       {/* <SignedOut>
            <SignInButton />
        </SignedOut>

        <SignedIn>
            <UserButton />
        </SignedIn> */}
         <SignInButton>
          <Button>
          Sign in
          </Button>
          </SignInButton>
    </div>
  );
}
