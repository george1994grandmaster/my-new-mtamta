import { FC, useState } from "react";
import { Link } from "react-router-dom";

interface NavigationLinkProps {
  url: string;
	text: string;
  bgColor: string;
  border: string;
  color: string;
	hoveredBackground: string,
	hoveredColor: string
}

const NavigationLink: FC<NavigationLinkProps> = ({ url, text, ...props }) => {
  const [isHovered, setIsHovered] = useState(false);

  const navLinkStyles = {
    display: "inline-block",
    padding: "10px 30px",
    border: props.border,
    color: isHovered ? props.hoveredColor : props.color,
    backgroundColor: isHovered ? props.hoveredBackground : props.bgColor,
    textDecoration: "none",
    transition: "all 0.3s ease-in-out",
  };

  return (
    <>
      <Link
        to={url}
        className="transparent-link-navigation text"
        style={navLinkStyles}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {text}
      </Link>
    </>
  );
};

export default NavigationLink;

