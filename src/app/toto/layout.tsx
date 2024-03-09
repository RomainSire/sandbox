
export default function TotoLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (<div style={{background: "lightcoral"}}>{children}</div>
    );
  }