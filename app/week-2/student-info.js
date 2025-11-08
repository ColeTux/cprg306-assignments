import Link from "next/link";

export default function StudentInfo() {
  return (
    <section>
      <p>Name: Cole Andrews</p>
      <p>
        GitHub:&nbsp;
        <Link href="https://github.com/ColeTux/cprg306-assignments">
          github.com/ColeTux/cprg306-assignments
        </Link>
      </p>
    </section>
  );
}
