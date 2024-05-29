import type { Metadata } from "next";
import { GeistMono as geistMono } from "geist/font/mono";
import { GeistSans as geistSans } from "geist/font/sans";

import "~/styles/globals.css";
import { cn } from "~/lib/utils";

export const metadata: Metadata = {
	title: {
		absolute: "AI Jereko",
		template: "%s | AI Jereko",
	},
	description:
		"AI Jereko - A simple WebUI for interfacing with Ollama's AI models",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark">
			<body className={cn(geistSans.variable, geistMono.variable)}>
				{children}
			</body>
		</html>
	);
}
