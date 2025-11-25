docker run -it \
  -p 5001:5001 \
  -v "$(pwd)":/app \
  -v /app/node_modules \
  albion-companion
