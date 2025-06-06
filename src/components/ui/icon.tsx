import React from "react";
import {
  Scissors,
  Phone,
  Calendar,
  Play,
  Heart,
  Droplets,
  Sparkles,
  Star,
  MapPin,
  Clock,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  CircleAlert,
} from "lucide-react";

const iconMap = {
  Scissors,
  Phone,
  Calendar,
  Play,
  Heart,
  Droplets,
  Sparkles,
  Star,
  MapPin,
  Clock,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  CircleAlert,
};

interface IconProps {
  name: keyof typeof iconMap;
  size?: number;
  className?: string;
  fallback?: keyof typeof iconMap;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  className = "",
  fallback = "CircleAlert",
}) => {
  const IconComponent = iconMap[name] || iconMap[fallback];

  return <IconComponent size={size} className={className} />;
};

export default Icon;
