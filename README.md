# Hasib Digital Agency — Digital Marketing Portfolio Website

A modern, high-converting, premium agency-style digital marketing portfolio website built for **Hasib Mia** (Digital Marketing Specialist & Growth Strategist).

Designed with a sleek **Dark Navy & Electric Blue** aesthetic, interactive case study breakdowns, a live marketing dashboard mockup, an interactive ROI estimation tool, and seamless client inquiry funnels.

---

## 🚀 Live Preview & Development

1. Open your terminal in this project directory:
   ```bash
   cd C:\Users\USSL\.gemini\antigravity\scratch\hasib-digital-portfolio
   ```

2. Start the local development server:
   ```bash
   npm run dev
   ```

3. Open your browser at the URL shown in the terminal (typically `http://localhost:5173`).

4. To build for production:
   ```bash
   npm run build
   ```

---

## 📁 Project Architecture & Easy Customization

All personal brand details, services, skills, case studies, testimonials, and FAQs are centralized inside **one single file**:

👉 `src/data/portfolioData.ts`

### 1. Updating Personal Information
Edit `PERSONAL_INFO` in `src/data/portfolioData.ts`:
- `name`: Your full name
- `title`: Professional title
- `brandName`: Brand / Agency name
- `email`: Direct email (`hasibmia56k@gmail.com`)
- `phone` / `whatsappNumber`: WhatsApp number in international format
- `socialLinks`: Your LinkedIn, Facebook, and custom URLs

### 2. Updating Services
Edit `SERVICES` array:
- Add, edit, or remove services
- Customize the `businessValue` and `deliverables` for each offering

### 3. Updating Case Studies / Portfolio Projects
Edit `PORTFOLIO_PROJECTS` array:
- Replace sample case studies with your real client campaigns as you complete them
- Add real ROAS, CPA, conversion rates, and client niche details
- Update images with your actual ad creatives or campaign screenshots

### 4. Updating Testimonials
Edit `TESTIMONIALS` array:
- When clients provide feedback, paste their exact words, name, company, and achieved metrics.

---

## 📬 Connecting the Contact Form to Receive Inquiries

The contact form in `src/components/Contact.tsx` already has complete client-side validation and fallback links to WhatsApp and email. To receive form submissions directly into your inbox for free, you can connect either:

### Option A: Formspree (Recommended — 2 minutes setup)
1. Sign up for free at [formspree.io](https://formspree.io).
2. Create a new form and copy your Form ID (e.g., `https://formspree.io/f/mqkenvba`).
3. In `src/components/Contact.tsx`, change the form `<form>` tag:
   ```tsx
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" ...>
   ```

### Option B: EmailJS
1. Sign up at [emailjs.com](https://emailjs.com).
2. Install SDK: `npm install @emailjs/browser`.
3. Call `emailjs.send(...)` inside the `handleSubmit` function in `Contact.tsx`.

---

## 🌐 Free 1-Click Deployment Options

### Deploy to Vercel (Recommended):
1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset will auto-detect **Vite**.
5. Click **Deploy**. Your site will be live on `https://hasibmia.com` or a free `.vercel.app` domain in 30 seconds!

### Deploy to Netlify:
1. Connect your repository at [netlify.com](https://netlify.com).
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Click Deploy.

---

## 🎨 Tech Stack
- **Framework**: React 19 + TypeScript
- **Styling**: Tailwind CSS 3.4
- **Icons**: Lucide React + Custom SVG Brand Icons
- **Bundler**: Vite 8
- **SEO & Schema**: JSON-LD Person & ProfessionalService Schema + Open Graph Meta
