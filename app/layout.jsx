export const metadata = {
  title: "UTM Cleaner",
  description: "Limpe nomes de campanhas para usar como utm_campaign",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}