import { GlobalConfig } from 'ngx-toastr';

export const toastrConfig: Partial<GlobalConfig> = {
    maxOpened: 5,
    autoDismiss: true,
    timeOut: 3000,
    closeButton: false,
    tapToDismiss: true,
};
