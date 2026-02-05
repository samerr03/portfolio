import Link from "next/link";
import { Github, Linkedin, Instagram } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-card border-t border-border py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold mb-2">Sameer Patel</h3>
                        <p className="text-muted-foreground text-sm max-w-xs">
                            Building digital experiences with code and creativity. Open to new opportunities.
                        </p>
                    </div>

                    <div className="flex gap-6">
                        <Link href="https://github.com" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                            <Github className="w-5 h-5" />
                            <span className="sr-only">GitHub</span>
                        </Link>
                        <Link href="https://linkedin.com" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                            <Linkedin className="w-5 h-5" />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link href="https://instagram.com" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                            <Instagram className="w-5 h-5" />
                            <span className="sr-only">Instagram</span>
                        </Link>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Sameer Patel. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
