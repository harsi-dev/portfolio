"use client";
import React, { useState } from "react";

import { CheckIcon, ClipboardIcon } from "@heroicons/react/24/solid";

const DiscordTooltip: React.FC = () => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [tooltipVisible, setTooltipVisible] = useState<boolean>(false);
  const discordUsername: string = "harsimran_d";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(discordUsername);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div>
      <button
        className="flex items-center justify-center"
        aria-label="Discord"
        onMouseOver={() => {
          // show tooltip
          setTooltipVisible(true);
          setTimeout(() => {
            setTooltipVisible(false);
          }, 3000);
        }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="group/discord h-8 w-8 text-white hover:text-blue-500"
        >
          <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561 19.916 19.916 0 005.9932 3.0285.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057 13.1265 13.1265 0 01-1.8829-.9025.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1907.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.1007.246.198.3728.2924a.077.077 0 01-.0066.1276 12.9546 12.9546 0 01-1.8829.9015.0766.0766 0 00-.0416.1067c.3609.698.7724 1.3628 1.225 1.9932a.076.076 0 00.0842.0286 19.8916 19.8916 0 005.9942-3.0285.077.0777 0 00.0312-.0561c.5004-5.177-.8382-9.6739-3.5485-13.6607a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
        </svg>
      </button>

      {tooltipVisible ? (
        <div
          onMouseLeave={() => {
            setTooltipVisible(false);
          }}
          className="absolute mt-2 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition-opacity"
        >
          <div className="px-2 py-2">
            <div className="flex justify-between">
              <div className="pr-2 text-sm font-medium">
                <span className="font-bold text-black">{discordUsername}</span>
              </div>
              <button
                onClick={copyToClipboard}
                className="flex items-center space-x-2 text-sm text-blue-500 hover:text-blue-600"
                aria-label="Copy Discord Username"
              >
                {isCopied ? (
                  <>
                    <CheckIcon className="h-5 w-5" />
                    <span className="text-blue">Copied!</span>
                  </>
                ) : (
                  <>
                    <ClipboardIcon className="h-5 w-5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default DiscordTooltip;
