import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex-grow flex items-center justify-center py-20 bg-space">
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
    </div>
  );
}
