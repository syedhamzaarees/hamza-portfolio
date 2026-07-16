import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="section-eyebrow mb-4">404</p>
      <h1 className="font-display text-4xl font-bold sm:text-5xl">
        <span className="gradient-text">Route not found</span>
      </h1>
      <p className="mt-4 max-w-md text-muted">
        This path doesn&apos;t exist on this server — unlike everything else
        here, which is fully provisioned.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Back to home
      </Link>
    </main>
  );
}
