HOW TO APPLY THIS FIX (link preview image for Messenger/Facebook/etc)
=======================================================================

Problem: og:image meta tag pointed to Lovable's own storage bucket
instead of your site, so link previews (Messenger, FB, etc.) had
nothing reliable to load.

Fix: added public/og-image.jpg (uses your cabin exterior photo) and
updated src/routes/__root.tsx to point og:image/twitter:image at
your own domain: https://ishas-cabin-escapes-xxt2.vercel.app/og-image.jpg

TO APPLY:
1. Unzip into your repo root, overwrite when prompted
2. git add .
3. git commit -m "Fix og:image to use self-hosted preview image"
4. git push

NOTE: Once Vercel redeploys, old cached previews on Messenger/Facebook
may take a while to refresh (they cache scraped previews). If it still
doesn't show up right away after deploying, you can force Facebook to
re-scrape using: https://developers.facebook.com/tools/debug/
(paste your site URL and click "Scrape Again")
