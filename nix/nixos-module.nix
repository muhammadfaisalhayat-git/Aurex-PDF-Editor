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

    openFirewall = lib.mkOption {
      type = lib.types.bool;
      default = false;
      description = "Whether to open the firewall port.";
    };
  };

  config = lib.mkIf cfg.enable {
    nixpkgs.overlays = [
      (final: prev: {
        sajeda-pdf = final.callPackage ./package.nix { };
      })
    ];

    systemd.services.sajeda-pdf = {
      description = "Sajeda PDF PDF Tools";
      after = [ "network.target" ];
      wantedBy = [ "multi-user.target" ];

      environment = {
        SAJEDA_PDF_PORT = toString cfg.port;
      };

      serviceConfig = {
        ExecStart = "${cfg.package}/bin/sajeda-pdf";
        Restart = "on-failure";
        DynamicUser = true;
        RuntimeDirectory = "sajeda-pdf";
        StateDirectory = "sajeda-pdf";

        # Hardening
        NoNewPrivileges = true;
        ProtectSystem = "strict";
        ProtectHome = true;
        PrivateTmp = true;
        PrivateDevices = true;
        ProtectKernelTunables = true;
        ProtectKernelModules = true;
        ProtectControlGroups = true;
        RestrictSUIDSGID = true;
        MemoryDenyWriteExecute = false;
      };
    };

    networking.firewall.allowedTCPPorts = lib.mkIf cfg.openFirewall [ cfg.port ];
  };
}
