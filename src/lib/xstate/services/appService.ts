import { useMachine } from '@xstate/svelte';
import { createMachine } from 'xstate';

const appMachine = createMachine({
  id: 'app',
  context: {
    copyrightText: `Copyright © ${new Date().getFullYear()} DaKeRR. All rights reserved.`,
  },
});

export const appService = useMachine(appMachine);
