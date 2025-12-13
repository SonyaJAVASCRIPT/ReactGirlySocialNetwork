FROM oven/bun:latest
WORKDIR /app

COPY . .
RUN bun install
COPY prisma ./prisma
RUN bunx prisma generate

COPY . .
EXPOSE 6969

CMD ["sh", "-c", "bunx prisma migrate deploy && bun src/app.ts"]
