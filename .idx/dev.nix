{ pkgs, ... }:
{
  # Which nixpkgs channel to use.
  channel = "stable-23.11"; # Or "unstable"
  # Use https://search.nixos.org/packages to find packages
  packages = [
    pkgs.nodejs_22
  ];
  # Sets environment variables in the workspace
  env = {};
  # Search for the extensions you want on https://open-vsx.org/ and use "publisher.id" format
  extensions = [
    "dbaeumer.vscode-eslint"
  ];
  # Enable previews and customize configuration
  previews = {
    enable = true;
    previews = [
      {
        # The name that shows up in the UI
        id = "web";
        # Command to start your dev server
        command = ["npm", "run", "dev", "--", "--port", "$PORT", "--host", "0.0.0.0"];
        # The port your server will be running on
        port = 3000;
        # The type of preview. E.g. "web", "desktop"
        type = "web";
      }
    ];
  };
  # Defines the commands that should be executed when the workspace is started
  startup = {
    # This will run `npm install` in the background
    install = {
      command = ["npm", "install"];
      # This is a one-time command that will not be executed on subsequent workspace starts
      runOnce = false;
    };
    # This will run `npm run dev` and is the main command that starts your dev server
    # dev = {
    #   command = ["npm", "run", "dev"];
    # };
  };
  # The following attributes are used to configure the Nix language server
  # and shouldn't be changed.
  nix = {
    # The package that contains the Nix language server
    languageServer = {
      # The path to the language server executable. It's a relative path to the
      # `pkgs.nixd` derivation.
      path = "/bin/nixd";
      # The package that contains the Nix language server
      package = pkgs.nixd;
    };
    # The package that contains the Nix formatter
    formatter = {
      # The path to the formatter executable. It's a relative path to the
      # `pkgs.alejandra` derivation.
      path = "/bin/alejandra";
      # The package that contains the formatter
      package = pkgs.alejandra;
    };
  };
}
