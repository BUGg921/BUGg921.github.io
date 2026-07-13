#!/usr/bin/env bash
set -euo pipefail

server="${DEPLOY_SERVER:-server}"
remote_root="${DEPLOY_ROOT:-/var/www/personalsite}"
release="$(date -u +%Y%m%d%H%M%S)-$(git rev-parse --short HEAD)"
remote_release="$remote_root/releases/$release"

npm run deploy:build

ssh "$server" "mkdir -p '$remote_release'"
rsync -az --delete static-dist/ "$server:$remote_release/"
scp deploy/nginx.conf "$server:/tmp/personalsite.nginx.conf"

ssh "$server" "
  install -m 0644 /tmp/personalsite.nginx.conf /etc/nginx/sites-available/personalsite &&
  ln -sfn /etc/nginx/sites-available/personalsite /etc/nginx/sites-enabled/personalsite &&
  rm -f /etc/nginx/sites-enabled/default &&
  ln -sfn '$remote_release' '$remote_root/current' &&
  nginx -t &&
  systemctl reload nginx
"

printf 'Deployed release %s to %s\n' "$release" "$server"
