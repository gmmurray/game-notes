import { Box } from '@mantine/core';
import LoginForm from '@/features/auth/components/LoginForm';
import { login } from '@/features/auth/actions/loginAction';

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
      <LoginForm onLogin={login} />
    </Box>
  );
}
