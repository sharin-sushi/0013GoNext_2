import Link from 'next/link';
export default function namesList() {
    return (
      <div>
        <ul>
          <li>
            <Link href={'/'} >
              About
            </Link>
          </li>
        </ul>
        <h1>Hello Next.js</h1>
      </div>
    );
  }