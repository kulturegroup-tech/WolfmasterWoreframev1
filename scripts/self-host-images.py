#!/usr/bin/env python3
"""Download the Higgsfield images, compress them to WebP in public/assets/img/,
then rebuild so every page uses the local copies.

Usage:  python3 scripts/self-host-images.py
Needs:  Python 3, Node, and either `cwebp` or ImageMagick (`magick` / `convert`).
"""
import json, shutil, subprocess, sys, urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
manifest = json.loads((ROOT / "scripts/images.json").read_text())
base, images = manifest["base"], manifest["images"]
out = ROOT / "public/assets/img"
out.mkdir(parents=True, exist_ok=True)
tmp = ROOT / "scripts/.raw"
tmp.mkdir(exist_ok=True)

magick = shutil.which("magick") or shutil.which("convert")
cwebp = shutil.which("cwebp")
if not (magick or cwebp):
    sys.exit("Install ImageMagick or cwebp first (e.g. `brew install webp`).")

def to_webp(src, dst, width, quality):
    if cwebp:
        subprocess.run([cwebp, "-quiet", "-q", str(quality), "-resize", str(width), "0", str(src), "-o", str(dst)], check=True)
    else:
        subprocess.run([magick, str(src), "-resize", f"{width}x>", "-quality", str(quality), str(dst)], check=True)

for key, meta in images.items():
    raw = tmp / f"{key}.png"
    if not raw.exists():
        print(f"downloading {key}…")
        urllib.request.urlretrieve(base + meta["file"] + ".png", raw)
    to_webp(raw, out / f"{key}.webp", meta["width"], 80)
    to_webp(raw, out / f"{key}-sm.webp", 800, 74)
    print(f"  ✓ {key}")

shutil.rmtree(tmp)
subprocess.run(["node", str(ROOT / "build/build.mjs")], check=True)
print("Done. Pages now use public/assets/img/*.webp")
