import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/json-display">
        <div>View JSON Data</div>
      </Link>
    </div>
  );
}
