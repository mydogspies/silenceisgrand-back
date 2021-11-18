import { Status } from './status.model';
import { STATUS_REPOSITORY } from './constants';

export const statusProviders = [{
    provide: STATUS_REPOSITORY,
    useValue: Status,
}];
