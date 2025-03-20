export default function HomePage() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to MyApp</h1>
      <p className="text-lg text-muted-foreground mb-4">
        This is the public homepage that anyone can access. The member section
        requires authentication.
      </p>
    </div>
  );
}
