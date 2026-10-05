This repository contains the source code for the KARYA*STUDIO website, an independent design studio based in Jakarta. The site showcases the studio's portfolio, services, and productized design packages with a unique, vibrant aesthetic designed to "make it pop."

Features
Distinctive Visual Identity: A custom, high-energy color palette (orange, pink, lime) and typography (Syne, Space Grotesk, Playfair Display) create a memorable brand experience.
Interactive Homepage: A single-page layout featuring a dynamic hero section, selected work portfolio, service offerings, and contact information.
Product Catalog: A filterable gallery showcasing design products like stream banners, thumbnails, and branding kits, allowing users to browse offerings by category.
Product Detail Pages: Dedicated pages for each product with detailed descriptions, pricing, and direct calls-to-action to order via WhatsApp or chat on Discord.
Responsive Design: Fully responsive layout with a mobile-friendly navigation menu for a seamless experience on all devices.
Tech Stack
Framework: Next.js (App Router)
Styling: Tailwind CSS
UI Components: shadcn/ui
Language: TypeScript
Getting Started
To run the project locally, follow these steps:

Clone the repository:

git clone https://github.com/dimaspryga/ziko-danang-store.git
Navigate to the project directory:

cd ziko-danang-store
Install dependencies: The project uses pnpm. If you don't have it, install it first (npm install -g pnpm).

pnpm install
Run the development server:

pnpm dev
Open your browser: Navigate to http://localhost:3000 to see the application running.

Project Structure
app/: Contains all the routes, including the main landing page (page.tsx), the product catalog (/product/page.tsx), and dynamic product detail pages (/product/[id]/page.tsx).
components/ui/: A comprehensive library of reusable UI components built with Radix UI and Tailwind CSS, following the shadcn/ui pattern.
lib/: Contains core logic and static data.
products.ts: An array of objects defining the design products displayed in the catalog.
utils.ts: Utility functions, primarily the cn helper for merging Tailwind CSS classes.
app/globals.css: Defines the unique visual theme, including the custom color palette, fonts, and global styles that establish the KARYA*STUDIO brand identity.
