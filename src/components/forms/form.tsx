import { FC, useRef } from "react";
import Register from "./form-options/register"

interface formProps {
  formType: string;
}

const Form: FC<formProps> = ({ formType }) => {
  //const swiperRef = useRef<SwiperCore | null>(null);

  switch (formType) {
    case 'registerForm':
      return (
        <Register/>
      );
    default:
      return (
        <div className="slider-default">
          ssdsdsdsd
        </div>
      );
  }
};

export default Form;