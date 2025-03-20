import { Link } from "wouter";

export function MainNav() {
  return (
    <nav className="flex items-center space-x-8">
      <Link href="/">
        <a className="text-lg font-medium transition-colors hover:text-primary">
          Home
        </a>
      </Link>
      <Link href="/member">
        <a className="text-lg font-medium transition-colors hover:text-primary">
          Member Area
        </a>
      </Link>
    </nav>
  );
}
