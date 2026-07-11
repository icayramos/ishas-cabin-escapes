HOW TO APPLY THIS FIX (complete version - photos + video + logo)
==================================================================

1. Unzip into the ROOT of your local ishas-cabin-escapes repo,
   overwriting when prompted. It will:
   - replace src/routes/index.tsx
   - add src/assets/photos/p01.png ... p10.png
   - add src/assets/hero-video.mp4
   - add src/assets/logo.jpg

2. Delete these old, now-unused files from your repo if still present:
     src/assets/photos/p01.asset.json ... p10.asset.json
     src/assets/hero-video.asset.json
     src/assets/logo.asset.json
     src/assets/hero-poster.asset.json (unused, safe to delete)
     src/assets/gallery-*.jpg (unused leftover files, safe to delete
       if nothing else in the code references them)

3. Commit and push:
     git add .
     git commit -m "Replace Lovable asset pointers with real committed files"
     git push

4. Vercel auto-redeploys. Everything - photos, hero video, logo - will
   now be self-contained in the repo and work with zero dependency on
   Lovable's servers.

Tested: full production build (npm run build) passes cleanly with
these changes, all assets resolve and bundle correctly.
