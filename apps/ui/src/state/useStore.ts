// import { create } from 'zustand';
import { IAppState } from './IAppState';
// import produce from 'immer';
import { nanoid } from 'nanoid';
// import { AlertType, UIAlert } from '@e2e/ui/model';

// export const useStore = create<IAppState>((set) => ({
//   alerts: [],
//   addAlert: (
//     message: string,
//     options?: {
//       sticky?: boolean;
//       type?: AlertType;
//       timeout?: number;
//     }
//   ) =>
//     set(
//       produce((draft) => {
//         const alert = {
//           id: nanoid(),
//           message,
//           type: options?.type,
//           timeout: options?.timeout || 5000,
//           sticky: options?.sticky || false,
//         };

//         draft.alerts.push(alert);
//       })
//     ),
//   removeAlert: (id: number) =>
//     set(
//       produce((draft) => {
//         const index = draft.alerts.findIndex((n: UIAlert) => n.id === id);
//         draft.alerts.splice(index, 1);
//       })
//     ),
// }));
