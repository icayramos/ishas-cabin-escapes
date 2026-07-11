HOW TO APPLY THIS FIX (v2 - proper landscape og:image for Messenger)
=======================================================================

Problem: previous og-image.jpg was a tall portrait photo (573x1018).
Facebook's web Sharing Debugger tolerated it, but Messenger's app
likely rejected/ignored it because it's far outside the recommended
1.91:1 landscape ratio.

Fix: replaced public/og-image.jpg with a proper 1200x630 landscape
version (sharp centered photo + blurred background fill), and added
og:image:width / height / type / secure_url meta tags in __root.tsx.

TO APPLY:
1. Unzip into your repo root, overwrite when prompted
2. git add .
3. git commit -m "Fix og:image to proper landscape format for Messenger"
4. git push
5. After Vercel redeploys, go to
   https://developers.facebook.com/tools/debug/ again, paste your URL,
   click "Scrape Again" to force-refresh the cache
6. Try sending the link in Messenger again (may take a few minutes
   for Messenger's own cache to catch up even after Facebook rescrapes)
