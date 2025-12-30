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
        docker run --rm --network=host -v $(pwd):/app -w /app node:20-bullseye-slim npx prisma migrate dev
    }

    echo "use 'prisma-docker: '"
    echo "  prisma generate"
    echo "  prisma migrate dev"
  '';
}
