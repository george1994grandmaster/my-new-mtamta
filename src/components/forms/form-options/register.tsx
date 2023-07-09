import {FC} from 'react';
import { InputBase } from '@mui/material';
import { styled } from '@mui/system';
import Btn from '../../button';

const CustomInputBase = styled(InputBase)`
  margin-bottom: 20px;
`;

const RegisterForm: FC = () => {
  
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <CustomInputBase
          inputProps={{ variant: 'outlined' }}
          placeholder="Full Name"
        />
        <CustomInputBase
          inputProps={{ variant: 'outlined' }}
          placeholder="Email Address"
        />
        <CustomInputBase
          inputProps={{ variant: 'outlined' }}
          placeholder="Phone Number"
        />
        <div className='register-form-btn'>
          <Btn text="register" /*bgColor="#003642"  hoverBgColor="#F05E47"*/ color="#fff" space="6px 20px" />
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;