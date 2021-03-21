import NextLink from "next/link";
import { useRouter } from "next/router";

export function Link({ href, children, ...props }) {
  const router = useRouter();
  let className = props.className || "s-link ";
  if (router.pathname === href) {
    className = `${className} border-gray-700`;
  }
  return (
    <NextLink href={href}>
      <a className={className}>{children}</a>
    </NextLink>
  );
}
