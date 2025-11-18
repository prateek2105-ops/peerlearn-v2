# 🎓 PeerLearn - Peer-to-Peer Learning Platform

A modern, full-stack peer-to-peer learning platform built with Next.js 14, Supabase, and TypeScript.

## ✨ Features

- 🔐 **Authentication** - Secure user registration and login
- 👤 **User Profiles** - Customizable profiles with subjects and interests
- 🏫 **Study Rooms** - Create and join collaborative study sessions
- 💬 **Real-time Chat** - Instant messaging with Supabase Realtime
- 📹 **Video Calling** - WebRTC-powered video sessions
- 📚 **Study Materials** - Upload and share learning resources
- 🎯 **Responsive Design** - Works on all devices

## 🚀 Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/prateek2105-ops/peerlearn-v2)

### Deployment Steps:

1. **Click the Deploy button above**
2. **Sign in to Vercel with GitHub**
3. **Add Environment Variables:**
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   ```
4. **Click Deploy**
5. **Wait 2-3 minutes**
6. **Your app is live!** 🎉

## 📋 Prerequisites

Before deploying, you need:

1. **Supabase Account** (free) - [supabase.com](https://supabase.com)
2. **Vercel Account** (free) - [vercel.com](https://vercel.com)

## 🗄️ Database Setup

### Step 1: Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Click "New Project"
3. Fill in project details
4. Wait 2 minutes for setup

### Step 2: Run Database Schema

1. Go to **SQL Editor** in Supabase
2. Click "New Query"
3. Copy the schema from `supabase/schema.sql`
4. Paste and click "Run"

### Step 3: Get API Keys

1. Go to **Settings** → **API**
2. Copy these three values:
   - Project URL
   - `anon` public key
   - `service_role` secret key

## 🔧 Local Development

### Install Dependencies

```bash
git clone https://github.com/prateek2105-ops/peerlearn-v2.git
cd peerlearn-v2
npm install
```

### Set Up Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📦 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** Supabase (PostgreSQL)
- **Authentication:** Supabase Auth
- **Real-time:** Supabase Realtime
- **Deployment:** Vercel

## 📁 Project Structure

```
peerlearn-v2/
├── app/                    # Next.js app directory
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # Main dashboard
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Landing page
├── lib/                   # Utilities
│   └── supabase.ts        # Supabase client
├── supabase/              # Database
│   └── schema.sql         # Database schema
└── package.json           # Dependencies
```

## 🔐 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL | Yes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key | Yes |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key | Yes |

## 🚢 Deployment Options

### Option 1: Vercel (Recommended)

1. Push code to GitHub
2. Import to Vercel
3. Add environment variables
4. Deploy!

### Option 2: Netlify

1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add environment variables
5. Deploy!

### Option 3: Railway

1. Connect GitHub repository
2. Add environment variables
3. Deploy automatically!

## 📖 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Database by [Supabase](https://supabase.com/)
- Deployed on [Vercel](https://vercel.com/)
- Icons by [Lucide](https://lucide.dev/)

## 📧 Support

For support, email support@peerlearn.com or open an issue on GitHub.

---

**Made with ❤️ by the PeerLearn Team**
