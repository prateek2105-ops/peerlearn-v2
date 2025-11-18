# 🚀 PeerLearn Deployment Guide

Complete step-by-step guide to deploy PeerLearn to production.

## 📋 Prerequisites

Before you begin, make sure you have:
- [ ] GitHub account
- [ ] Supabase account (free)
- [ ] Vercel account (free)

---

## Step 1: Set Up Supabase Database (5 minutes)

### 1.1 Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Click **"New Project"**
3. Fill in:
   - **Name**: peerlearn
   - **Database Password**: (generate strong password - save it!)
   - **Region**: Choose closest to your users
4. Click **"Create new project"**
5. Wait ~2 minutes for setup

### 1.2 Run Database Schema

1. In Supabase dashboard, go to **SQL Editor** (left sidebar)
2. Click **"New Query"**
3. Open `supabase/schema.sql` from this repository
4. Copy ALL the content (Ctrl+A, Ctrl+C)
5. Paste into SQL Editor
6. Click **"Run"** (bottom right)
7. You should see: ✅ "Success. No rows returned"

### 1.3 Get Your API Keys

1. Go to **Settings** → **API** (left sidebar)
2. Copy these THREE values:

   **Project URL:**
   ```
   https://xxxxx.supabase.co
   ```

   **anon public key:**
   ```
   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```

   **service_role key:** (click "Reveal" first)
   ```
   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```

3. **Save these in a text file** - you'll need them next!

---

## Step 2: Deploy to Vercel (3 minutes)

### Option A: One-Click Deploy (Easiest)

1. **Click this button:**
   
   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/prateek2105-ops/peerlearn-v2)

2. **Sign in to Vercel** with GitHub

3. **Configure Project:**
   - Repository Name: `peerlearn` (or your choice)
   - Click **"Create"**

4. **Add Environment Variables:**
   
   Click "Environment Variables" and add these THREE:

   ```
   Name: NEXT_PUBLIC_SUPABASE_URL
   Value: [Your Supabase Project URL]
   
   Name: NEXT_PUBLIC_SUPABASE_ANON_KEY
   Value: [Your Supabase anon key]
   
   Name: SUPABASE_SERVICE_ROLE_KEY
   Value: [Your Supabase service_role key]
   ```

5. **Click "Deploy"**

6. **Wait 2-3 minutes** for deployment

7. **Your app is live!** 🎉

### Option B: Manual Deploy

1. Go to [vercel.com](https://vercel.com)
2. Click **"Add New"** → **"Project"**
3. Import: `prateek2105-ops/peerlearn-v2`
4. Add environment variables (same as Option A)
5. Click **"Deploy"**

---

## Step 3: Configure Supabase Redirect URLs (1 minute)

After deployment, tell Supabase about your Vercel URL:

1. **Get your Vercel URL** (e.g., `https://peerlearn-xxx.vercel.app`)

2. **Go to Supabase Dashboard**

3. **Navigate to:** Authentication → URL Configuration

4. **Add these URLs:**
   
   **Site URL:**
   ```
   https://your-vercel-url.vercel.app
   ```

   **Redirect URLs:** (click "Add URL" for each)
   ```
   https://your-vercel-url.vercel.app/auth/callback
   http://localhost:3000/auth/callback
   ```

5. **Click "Save"**

---

## Step 4: Test Your App (2 minutes)

1. **Visit your Vercel URL**

2. **Click "Get Started"**

3. **Create an account:**
   - Enter your email
   - Choose a password
   - Fill in your name

4. **You should see the dashboard!** ✅

5. **Test features:**
   - View your profile
   - Check the dashboard
   - Everything should work!

---

## 🎉 Success! Your App is Live!

Your PeerLearn platform is now running at:
**https://your-app.vercel.app**

---

## 🔧 Optional: Custom Domain

### Add Your Own Domain

1. **Go to Vercel Dashboard** → Your Project
2. **Click "Settings"** → **"Domains"**
3. **Add your domain** (e.g., `peerlearn.com`)
4. **Follow DNS instructions**
5. **Update Supabase redirect URLs** with your custom domain

---

## 📊 Monitoring

### Check Your App Health

**Vercel Dashboard:**
- Monitor deployments
- View error logs
- Check analytics

**Supabase Dashboard:**
- Monitor database usage
- Check API requests
- View logs

---

## 🐛 Troubleshooting

### Issue: "Invalid API key"

**Solution:**
1. Go to Vercel → Settings → Environment Variables
2. Verify all 3 variables are correct
3. Go to Deployments → Redeploy

### Issue: "Database error"

**Solution:**
1. Go to Supabase → SQL Editor
2. Run the schema.sql again
3. Check for any errors

### Issue: "Can't login"

**Solution:**
1. Check Supabase → Authentication → URL Configuration
2. Make sure redirect URLs are correct
3. Try signing up with a new account

### Issue: "Build failed"

**Solution:**
1. Check Vercel build logs
2. Make sure all environment variables are set
3. Try redeploying

---

## 🔐 Security Checklist

Before going live:

- [ ] All environment variables are set
- [ ] Database RLS policies are enabled
- [ ] Redirect URLs are configured
- [ ] Test user registration
- [ ] Test user login
- [ ] Test all features

---

## 📈 Next Steps

1. **Invite users** to test your platform
2. **Gather feedback** and iterate
3. **Add more features** from the roadmap
4. **Monitor usage** and performance
5. **Scale as needed**

---

## 🆘 Need Help?

- 📖 Check the [README.md](README.md)
- 🐛 Open an issue on GitHub
- 💬 Check Supabase/Vercel documentation

---

**Congratulations! You've successfully deployed PeerLearn!** 🎓🚀
