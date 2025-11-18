# ⚡ Quick Start Guide

Get PeerLearn running in 10 minutes!

## 🎯 What You'll Do

1. Set up Supabase database (5 min)
2. Deploy to Vercel (3 min)
3. Test your app (2 min)

---

## Step 1: Supabase Setup

### Create Project

1. Go to [supabase.com](https://supabase.com) → **New Project**
2. Name: `peerlearn`
3. Generate password → **Save it!**
4. Wait 2 minutes

### Run Schema

1. **SQL Editor** → **New Query**
2. Copy from `supabase/schema.sql`
3. Paste → **Run**
4. See "Success" ✅

### Get Keys

1. **Settings** → **API**
2. Copy:
   - Project URL
   - anon key
   - service_role key (click Reveal)

---

## Step 2: Deploy to Vercel

### One-Click Deploy

1. Click: [![Deploy](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/prateek2105-ops/peerlearn-v2)

2. Sign in with GitHub

3. Add environment variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL = [your URL]
   NEXT_PUBLIC_SUPABASE_ANON_KEY = [your anon key]
   SUPABASE_SERVICE_ROLE_KEY = [your service key]
   ```

4. **Deploy** → Wait 2-3 minutes

---

## Step 3: Configure & Test

### Add Redirect URLs

1. Copy your Vercel URL
2. Supabase → **Authentication** → **URL Configuration**
3. Add:
   - Site URL: `https://your-app.vercel.app`
   - Redirect: `https://your-app.vercel.app/auth/callback`

### Test It!

1. Visit your Vercel URL
2. Click **"Get Started"**
3. Create account
4. See dashboard ✅

---

## 🎉 Done!

Your app is live at: **https://your-app.vercel.app**

---

## 🆘 Issues?

### "Invalid API key"
→ Check environment variables in Vercel

### "Database error"
→ Re-run schema.sql in Supabase

### "Can't login"
→ Check redirect URLs in Supabase

---

## 📚 Next Steps

- Read [DEPLOYMENT.md](DEPLOYMENT.md) for details
- Check [README.md](README.md) for features
- Start inviting users!

---

**Need help?** Open an issue on GitHub!
