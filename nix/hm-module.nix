{ config, lib, pkgs, ... }:

let
  cfg = config.services.sajeda-pdf;
in
{
  options.services.sajeda-pdf = {
    enable = lib.mkEnableOption "Sajeda PDF - Professional PDF Tools";

    package = lib.mkOption {
      type = lib.types.package;
      default = pkgs.sajeda-pdf;
      defaultText = lib.literalExpression "pkgs.sajeda-pdf";
      description = "The Sajeda PDF package to use.";
    };

    port = lib.mkOption {
      type = lib.types.port;
      default = 3000;
      description = "Port to listen on.";
    };
  };

  config = lib.mkIf cfg.enable {
    nixpkgs.overlays = [
      (final: prev: {
        sajeda-pdf = final.callPackage ./package.nix { };
      })
    ];

    systemd.user.services.sajeda-pdf = {
      Unit = {
        Description = "Sajeda PDF PDF Tools";
        After = [ "network.target" ];
      };

      Service = {
        ExecStart = "${cfg.package}/bin/sajeda-pdf";
        Restart = "on-failure";
        Environment = [
          "SAJEDA_PDF_PORT=${toString cfg.port}"
        ];
      };

      Install = {
        WantedBy = [ "default.target" ];
      };
    };
  };
}
