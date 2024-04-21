import { Box } from '@mantine/core';
import RegisterForm from '@/features/auth/components/RegisterForm';
import { register } from '@/features/auth/actions/registerAction';

export default function LoginPage() {
  return (
    <Box
      display="flex"
      h="100vh"
      w="100vw"
      style={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <RegisterForm onRegister={register} />
    </Box>
  );
}
