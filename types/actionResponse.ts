export type ActionResponse = { success: boolean; error?: string };

export const succeededAction = (): ActionResponse => ({
  success: true,
});

export const failedAction = (error?: string): ActionResponse => ({
  success: false,
  error,
});
