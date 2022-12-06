import AuthStatus from "@/components/auth-status";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const AuthStatusDiv = await AuthStatus();

  return (
    <div>
      {AuthStatusDiv}
      {children}
    </div>
  );
}
