import Link from "next/link";

const LinkBtn = ({ href, children }) => {
  return <Link href={`${href}`}>{children}</Link>;
};

export default LinkBtn;
