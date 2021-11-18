import {Inject, Injectable} from '@nestjs/common';
import {Status} from './status.model';
import {STATUS_REPOSITORY} from "./constants";
import {statusDto} from "./status.dto";

@Injectable()
export class StatusService {

    constructor(@Inject(STATUS_REPOSITORY) private readonly statusRepository: typeof Status) {}

    async findAll(): Promise<Status[]> {
        return await this.statusRepository.findAll<Status>();
    }

    // TODO want something more verbose to be sent back than the weird object coming out of update()
    async update(rowId: number, setStatus: statusDto) {
        return await this.statusRepository.update({...setStatus}, {where: {id: rowId}});
    }
}
