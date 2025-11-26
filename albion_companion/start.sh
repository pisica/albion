docker run --rm -d \
  -p 5001:5001 \
  -v "$(pwd)":/app \
  -v /app/node_modules \
  -e HOST=0.0.0.0 \
  -e PORT=5001 \
  --name albion-companion \
  albion-companion
