import urllib.request, re

with open("page.html") as f:
    html = f.read()

scripts = re.findall(r"/_next/static/chunks/[^\"]+\.js", html)
print(f"Total scripts: {len(scripts)}")

api_patterns = set()
for s in scripts:
    url = f"https://motionvid.ai{s}"
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        content = urllib.request.urlopen(req, timeout=5).read().decode("utf-8")
        matches = re.findall(r"[\"'\`](/(?:api|trpc)/[a-zA-Z0-9_\-\./\$\{\}]+)[\"'\`]", content)
        if matches:
            print(f"In {s}: {matches[:5]}")
            api_patterns.update(matches)
    except Exception as e:
        pass

print("All API routes:", api_patterns)
