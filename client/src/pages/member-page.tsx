import { useAuth } from "@/hooks/use-auth";

export default function MemberPage() {
  const { user } = useAuth();

  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-6">Member Area</h1>
      <p className="text-lg text-muted-foreground mb-4">
        Welcome back, {user?.username}! This is a protected page that only
        authenticated users can access.
      </p>
    </div>
  );
}
