import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>

      <p>
        Start here each week. Use the links below to jump to a specific week’s
        work.
      </p>

      <ul>
        <li>
          <Link href="/week-2">Week 2</Link>
        </li>
      </ul>

      <hr />

      <p>
        Repo:&nbsp;
        <Link href="https://github.com/YOUR-GITHUB-USERNAME/cprg306-assignments">
          github.com/YOUR-GITHUB-USERNAME/cprg306-assignments
        </Link>
      </p>
    </main>
  );
}
