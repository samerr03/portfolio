import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: {
        default: "Sameer Patel Portfolio",
        template: "%s | Sameer Patel"
    },
    description: "Portfolio of a Computer Science Engineering Student and Software Developer specializing in Full Stack Web Development.",
    keywords: ["Software Developer", "Portfolio", "React", "Next.js", "Web Development", "Computer Science Student"],
    authors: [{ name: "Sameer Patel" }],
    creator: "Sameer Patel",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://sameerpatel.dev",
        title: "Sameer Patel | Software Developer Portfolio",
        description: "Professional portfolio showcasing projects and skills in web development.",
        siteName: "Sameer Patel Portfolio",
    },
    twitter: {
        card: "summary_large_image",
        title: "Sameer Patel | Software Developer Portfolio",
        description: "Professional portfolio showcasing projects and skills in web development.",
        creator: "@sameerpatel",
    },
    icons: {
        icon: "/icon.png",
        apple: "/icon.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
            <body className={`${inter.variable} font-sans antialiased bg-background text-foreground min-h-screen selection:bg-primary/20`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Navbar />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html >
    );
}
