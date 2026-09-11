#!/usr/bin/env python3
"""Tiny static server for the production build, with SPA fallback.

Netlify's `_redirects` rewrites unknown paths to index.html; python's plain
http.server does not, so /work and /about would 404 when previewing locally.
This mirrors the Netlify behaviour.

    python scripts/serve_build.py [port]
"""

import os
import sys
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

ROOT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "build")


class SPAHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def do_GET(self):
        path = self.translate_path(self.path)
        # Anything that isn't a real file and isn't an asset request -> index.html
        if not os.path.exists(path) and "." not in os.path.basename(self.path):
            self.path = "/index.html"
        return super().do_GET()

    def log_message(self, fmt, *args):
        pass  # keep the console quiet


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 4173
    print("Serving %s at http://localhost:%d" % (ROOT, port))
    ThreadingHTTPServer(("127.0.0.1", port), SPAHandler).serve_forever()
