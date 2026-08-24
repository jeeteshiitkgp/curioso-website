import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex-grow flex items-center justify-center py-20 bg-space">
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
    </div>
  );
}
