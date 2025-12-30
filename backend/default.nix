{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  name = "prisma-shell";

  buildInputs = [
    pkgs.docker
    pkgs.nodejs
    pkgs.yarn
  ];

  shellHook = ''
    function prisma() {
      cmd=$1
      shift

      case "$cmd" in
        "generate")
          docker run --rm -it -v $(pwd):/app -w /app node:20-bullseye-slim npx prisma generate "$@"
          ;;
        "migrate-dev")
          # Создать и применить миграцию dev
          docker run --rm -it --network=host -v $(pwd):/app -w /app node:20-bullseye-slim \
            npx prisma migrate dev "$@"
          ;;
        "migrate-create")
          # Создать миграцию без применения
          docker run --rm -it --network=host -v $(pwd):/app -w /app node:20-bullseye-slim \
            npx prisma migrate dev --create-only "$@"
          ;;
        "migrate-deploy")
          # Применить все созданные миграции
          docker run --rm -it --network=host -v $(pwd):/app -w /app node:20-bullseye-slim \
            npx prisma migrate deploy "$@"
          ;;
        *)
          echo "Usage: prisma <generate|migrate-dev|migrate-create|migrate-deploy> [args]"
          ;;
      esac
    }

    echo "Prisma commands available via 'prisma':"
    echo "  prisma generate            # generate client"
    echo "  prisma migrate-dev         # dev migration (create + apply)"
    echo "  prisma migrate-create      # create migration without applying"
    echo "  prisma migrate-deploy      # apply all migrations"
  '';
}
