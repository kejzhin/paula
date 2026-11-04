import React from 'react';

interface ToolIconProps {
  id: string;
  className?: string;
}

export const ToolIcon: React.FC<ToolIconProps> = ({ id, className = "w-7 h-7" }) => {
  switch (id) {
    case 'podio':
      // Citrix Podio official P icon
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="10" fill="#0082CA" />
          <path
            d="M17 12H27C32.5228 12 37 16.4772 37 22C37 27.5228 32.5228 32 27 32H23V36H17V12Z"
            fill="white"
          />
          <circle cx="26.5" cy="22" r="5" fill="#0082CA" />
        </svg>
      );

    case 'dialpad':
      // Dialpad official violet spiral sound loop
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="10" fill="#2E0854" />
          <path
            d="M24 10C16.268 10 10 16.268 10 24C10 31.732 16.268 38 24 38C31.732 38 38 31.732 38 24C38 16.268 31.732 10 24 10ZM24 15C28.9706 15 33 19.0294 33 24C33 28.9706 28.9706 33 24 33C19.0294 33 15 28.9706 15 24C15 19.0294 19.0294 15 24 15Z"
            fill="#C026D3"
          />
          <circle cx="24" cy="24" r="5" fill="#F43F5E" />
          <circle cx="31" cy="17" r="2.5" fill="#E879F9" />
          <circle cx="17" cy="31" r="2.5" fill="#E879F9" />
        </svg>
      );

    case 'rei-automator':
      // REI Automator real estate property & analytics roofline
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="10" fill="#1E293B" />
          <path d="M24 10L10 22H15V36H21V28H27V36H33V22H38L24 10Z" fill="#EF4444" />
          <path d="M21 21H27V25H21V21Z" fill="white" />
          <circle cx="34" cy="32" r="6" fill="#F59E0B" />
          <path d="M34 29V35M31 32H37" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case 'mls':
      // Multiple Listing Service official blue & red emblem
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="10" fill="#0F2850" />
          <path d="M12 21L24 11L36 21V37H12V21Z" fill="#1E40AF" />
          <path d="M24 11L36 21H12L24 11Z" fill="#DC2626" />
          <text
            x="24"
            y="32"
            fill="white"
            fontSize="10"
            fontWeight="900"
            fontFamily="Arial, sans-serif"
            textAnchor="middle"
            letterSpacing="0.5"
          >
            MLS
          </text>
        </svg>
      );

    case 'callrail':
      // CallRail signature orange phone with audio signal waves
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="10" fill="#F95738" />
          <path
            d="M19 14C17.8954 14 17 14.8954 17 16V20C17 26.6274 22.3726 32 29 32H33C34.1046 32 35 31.1046 35 30V26.5C35 25.6716 34.3284 25 33.5 25C32.3 25 31.1 24.8 30 24.4C29.6 24.2 29.1 24.3 28.8 24.6L26.5 26.9C23.6 25.4 21.6 23.4 20.1 20.5L22.4 18.2C22.7 17.9 22.8 17.4 22.6 17C22.2 15.9 22 14.7 22 13.5C22 12.6716 21.3284 12 20.5 12H19V14Z"
            fill="white"
          />
          <path d="M26 15C29 16 32 19 33 22" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M28 11C33 13 36 17 38 21" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case 'dotloop':
      // DotLoop official teal loop with center dot (Zillow)
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="10" fill="#00A389" />
          <circle cx="24" cy="24" r="12" stroke="white" strokeWidth="4" fill="none" strokeDasharray="60 15" />
          <circle cx="24" cy="24" r="4.5" fill="white" />
        </svg>
      );

    case 'docusign':
      // DocuSign official yellow chevron document with black checkmark
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="10" fill="#111827" />
          <path d="M12 11H30L37 18V37H12V11Z" fill="#FFF000" />
          <path d="M30 11V18H37" fill="#EAB308" />
          <path
            d="M18 25L23 30L31 20"
            stroke="#111827"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'unreal-estate':
      // Unreal Estate geometric modern purple/indigo isometric home
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="10" fill="#6366F1" />
          <path d="M24 10L36 18V34L24 40L12 34V18L24 10Z" fill="#4F46E5" />
          <path d="M24 10L36 18L24 26L12 18L24 10Z" fill="#818CF8" />
          <path d="M24 26V40L36 34V18L24 26Z" fill="#A5B4FC" />
          <path d="M24 26V40L12 34V18L24 26Z" fill="#6366F1" />
          <path d="M21 21L24 19L27 21V26L24 28L21 26V21Z" fill="white" />
        </svg>
      );

    case 'congress-realty':
      // Congress Realty US Capitol building crest
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="10" fill="#1B365D" />
          <path d="M24 10V13M21 13H27M24 13C20 13 18 16 18 19H30C30 16 28 13 24 13Z" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" />
          <path d="M15 19H33V22H15V19Z" fill="#FBBF24" />
          <path d="M16 22V32M20 22V32M24 22V32M28 22V32M32 22V32" stroke="white" strokeWidth="2" />
          <path d="M12 32H36V36H12V32Z" fill="#DC2626" />
        </svg>
      );

    case 'investorbootz':
      // InvestorBootz gold/amber investor boot stride silhouette
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="10" fill="#18181B" />
          <path
            d="M17 12H26V23C26 24 27 25 28 25H33C35 25 36 27 35.5 29L34 35H14L15 20C15 18 17 12 17 12Z"
            fill="#F59E0B"
          />
          <path d="M13 35H36V38H13V35Z" fill="#FBBF24" />
          <path d="M23 15L29 20M21 19L27 24" stroke="#18181B" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case 'simplifile':
      // Simplifile e-recording ICE document with checkmark swoosh
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="10" fill="#00A3E0" />
          <path d="M14 11H28L34 17V37H14V11Z" fill="white" />
          <path d="M28 11V17H34" fill="#78BE20" />
          <path
            d="M19 26L23 30L31 20"
            stroke="#78BE20"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'deeds-com':
      // Deeds.com official certificate with legal gold seal & ribbon
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="10" fill="#1E3A8A" />
          <path d="M13 10H35V38H13V10Z" fill="#F8FAFC" rx="2" />
          <path d="M17 15H31M17 19H31M17 23H25" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
          <circle cx="28" cy="28" r="5" fill="#D97706" />
          <path d="M26 32L28 36L30 32" fill="#B45309" />
          <circle cx="28" cy="28" r="3" fill="#F59E0B" />
        </svg>
      );

    case 'microsoft-365':
      // Official Microsoft 4 colored tiles
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="10" fill="#F8FAFC" />
          <rect x="12" y="12" width="11" height="11" fill="#F25022" />
          <rect x="25" y="12" width="11" height="11" fill="#7FBA00" />
          <rect x="12" y="25" width="11" height="11" fill="#00A4EF" />
          <rect x="25" y="25" width="11" height="11" fill="#FFB900" />
        </svg>
      );

    case 'google-workspace':
      // Official Google Workspace 4-color multi-segment ring
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="10" fill="#FFFFFF" />
          <path d="M24 12C17.3726 12 12 17.3726 12 24C12 26.5 12.8 28.8 14.1 30.7L18.4 26.4C18.1 25.7 18 24.9 18 24C18 20.7 20.7 18 24 18V12Z" fill="#EA4335" />
          <path d="M24 12V18C27.3 18 30 20.7 30 24C30 24.9 29.9 25.7 29.6 26.4L33.9 30.7C35.2 28.8 36 26.5 36 24C36 17.3726 30.6274 12 24 12Z" fill="#4285F4" />
          <path d="M14.1 30.7C15.9 33.3 18.7 35.1 22 35.8V29.7C20.8 29.2 19.8 28.3 18.4 26.4L14.1 30.7Z" fill="#FBBC05" />
          <path d="M33.9 30.7L29.6 26.4C28.2 28.3 27.2 29.2 26 29.7V35.8C29.3 35.1 32.1 33.3 33.9 30.7Z" fill="#34A853" />
        </svg>
      );

    case 'zoom':
      // Official Zoom blue camera icon
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="10" fill="#2D8CFF" />
          <path
            d="M13 18C13 16.3431 14.3431 15 16 15H26C27.6569 15 29 16.3431 29 18V30C29 31.6569 27.6569 33 26 33H16C14.3431 33 13 31.6569 13 30V18Z"
            fill="white"
          />
          <path d="M30 20.5L35 17V31L30 27.5V20.5Z" fill="white" />
        </svg>
      );

    case 'slack':
      // Official Slack 4-color octothorpe
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="10" fill="#FFFFFF" />
          {/* Blue */}
          <path d="M16 26C14.3431 26 13 24.6569 13 23C13 21.3431 14.3431 20 16 20C17.6569 20 19 21.3431 19 23V26H16Z" fill="#36C5F0" />
          <path d="M21 20C21 18.3431 22.3431 17 24 17C25.6569 17 27 18.3431 27 20V27C27 28.6569 25.6569 30 24 30C22.3431 30 21 28.6569 21 27V20Z" fill="#36C5F0" />
          {/* Green */}
          <path d="M22 16C22 14.3431 23.3431 13 25 13C26.6569 13 28 14.3431 28 16C28 17.6569 26.6569 19 25 19H22V16Z" fill="#2EB67D" />
          <path d="M28 21C29.6569 21 31 22.3431 31 24C31 25.6569 29.6569 27 28 27H21C19.3431 27 18 25.6569 18 24C18 22.3431 19.3431 21 21 21H28Z" fill="#2EB67D" />
          {/* Yellow */}
          <path d="M32 22C33.6569 22 35 23.3431 35 25C35 26.6569 33.6569 28 32 28C30.3431 28 29 26.6569 29 25V22H32Z" fill="#ECB22E" />
          <path d="M27 28C27 29.6569 25.6569 31 24 31C22.3431 31 21 29.6569 21 28V21C21 19.3431 22.3431 18 24 18C25.6569 18 27 19.3431 27 21V28Z" fill="#ECB22E" />
          {/* Red */}
          <path d="M26 32C26 33.6569 24.6569 35 23 35C21.3431 35 20 33.6569 20 32C20 30.3431 21.3431 29 23 29H26V32Z" fill="#E01E5A" />
          <path d="M20 27C18.3431 27 17 25.6569 17 24C17 22.3431 18.3431 21 20 21H27C28.6569 21 30 22.3431 30 24C30 25.6569 28.6569 27 27 27H20Z" fill="#E01E5A" />
        </svg>
      );

    case 'discord':
      // Official Discord "Clyde" gamepad
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="10" fill="#5865F2" />
          <path
            d="M32.5 15.5C30.3 14.5 28 13.8 25.5 13.5C25.2 14 24.9 14.7 24.7 15.2C22.2 14.8 19.8 14.8 17.3 15.2C17.1 14.7 16.8 14 16.5 13.5C14 13.8 11.7 14.5 9.5 15.5C5 22.2 3.8 28.8 4.4 35.2C7.4 37.4 10.3 38.8 13.1 39.7C13.8 38.7 14.4 37.7 15 36.6C14 36.2 13 35.7 12 35.1C12.2 34.9 12.5 34.7 12.7 34.5C18.3 37.1 24.3 37.1 29.8 34.5C30 34.7 30.3 34.9 30.5 35.1C29.5 35.7 28.5 36.2 27.5 36.6C28.1 37.7 28.7 38.7 29.4 39.7C32.2 38.8 35.1 37.4 38.1 35.2C38.8 27.8 36.8 21.3 32.5 15.5ZM16.2 30.7C14.5 30.7 13.2 29.1 13.2 27.2C13.2 25.3 14.5 23.7 16.2 23.7C17.9 23.7 19.3 25.3 19.2 27.2C19.2 29.1 17.9 30.7 16.2 30.7ZM26.3 30.7C24.6 30.7 23.3 29.1 23.3 27.2C23.3 25.3 24.6 23.7 26.3 23.7C28 23.7 29.4 25.3 29.3 27.2C29.3 29.1 28 30.7 26.3 30.7Z"
            fill="white"
          />
        </svg>
      );

    case 'linkedin-sales-nav':
      // Official LinkedIn blue with orange Sales Navigator compass target
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="10" fill="#0A66C2" />
          <path
            d="M13 19H17V33H13V19ZM15 13C13.6 13 12.5 14.1 12.5 15.5C12.5 16.9 13.6 18 15 18C16.4 18 17.5 16.9 17.5 15.5C17.5 14.1 16.4 13 15 13ZM20 19H23.8V20.9H23.9C24.4 19.9 25.7 18.8 27.7 18.8C31.7 18.8 32.5 21.4 32.5 24.9V33H28.5V25.7C28.5 23.9 28.5 21.6 26.1 21.6C23.6 21.6 23.2 23.5 23.2 25.5V33H19.2V19H20Z"
            fill="white"
          />
          {/* Sales Navigator compass dot */}
          <circle cx="34" cy="14" r="5" fill="#F97316" />
          <path d="M34 11V17M31 14H37" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );

    case 'apollo-io':
      // Official Apollo.io chevron spacecraft delta wing in bright golden yellow
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="10" fill="#0F172A" />
          <path
            d="M24 10L36 34L24 28L12 34L24 10Z"
            fill="#F59E0B"
          />
          <path
            d="M24 10L30 31L24 28L18 31L24 10Z"
            fill="#FCD34D"
          />
        </svg>
      );

    case 'canva':
      // Official Canva gradient circle with cursive white "C"
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="canva-grad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00C4CC" />
              <stop offset="1" stopColor="#7D2AE8" />
            </linearGradient>
          </defs>
          <rect width="48" height="48" rx="10" fill="url(#canva-grad)" />
          <path
            d="M28.5 17C26 17 23.5 18.5 22 20.8C20.5 23.1 19.8 25.8 20 28.5C20.2 31.2 21.8 33 24.5 33C27.5 33 29.5 30.5 30.5 28L28.2 27C27.5 28.5 26.2 29.5 24.8 29.5C23.5 29.5 22.8 28.5 22.6 27C23.5 27 25.5 26.5 27 25.2C28.5 23.8 29.5 21.8 29.5 20C29.5 18 28.5 17 28.5 17ZM26.5 20C26.5 21.2 25.8 22.5 24.8 23.2C23.8 23.8 23 24 22.5 24C22.6 22.5 23.2 21 24.2 20.2C25 19.5 25.8 19.2 26.5 20Z"
            fill="white"
          />
        </svg>
      );

    default:
      return null;
  }
};
