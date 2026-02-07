{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = with pkgs; [
    nodejs_22
  ];

  shellHook = ''
    echo "IPv6 Isn't Real - Astro Dev Environment"
    echo "Run: npm install && npm run dev"
  '';
}
