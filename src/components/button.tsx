import { FC, MouseEventHandler } from "react";
import Button, { ButtonProps } from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface BtnProps {
  text: string;
  bgColor: string;
  hoverBgColor: string;
  color: string;
  space: string;
  handleClick?: () => void; //MouseEventHandler<HTMLButtonElement>;
}

const Btn: FC<BtnProps> = ({ text, handleClick, ...props }) => {
  const buttonStyles = {
    padding: props.space,
    color: props.color,
    backgroundColor: props.bgColor,
    '&:hover': {
      backgroundColor: props.hoverBgColor,
    },
  };

  return (
    <Button sx={buttonStyles} className="title" onClick={handleClick}>
      <Typography variant="button" component="span" sx={{ fontFamily: "Montserrat, sans-serif", textTransform: "none" }}>{text}</Typography>
    </Button>
  );
};

export default Btn;