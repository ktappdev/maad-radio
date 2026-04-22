import '../globals.css';

export const metadata = {
  title: 'MAAD 97.5 FM | Listen Live',
  description: 'Listen to MAAD 97.5 FM live stream',
};

export default function PlayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
