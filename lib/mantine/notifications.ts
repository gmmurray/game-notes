import { notifications } from '@mantine/notifications';

export const sendSuccessNotification = (message: string) =>
  notifications.show({
    title: 'success',
    message,
  });

export const sendErrorNotification = (message: string) =>
  notifications.show({
    title: 'error',
    color: 'red',
    message,
  });
