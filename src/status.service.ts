import {Inject, Injectable, NotFoundException} from '@nestjs/common';
import {Status} from './status.model';
import {STATUS_REPOSITORY} from "./constants";
import {statusDto} from "./status.dto";

@Injectable()
export class StatusService {

    constructor(@Inject(STATUS_REPOSITORY) private readonly statusRepository: typeof Status) {}

    async findAll(): Promise<Status[]> {
        return await this.statusRepository.findAll<Status>();
    }

    async update(rowId: number, setStatus: statusDto) {
        const query= await this.statusRepository.update({...setStatus}, {where: {id: rowId}});
        let res: object = {};
        if (query[0]==0) {
            throw new NotFoundException('No such entry.');
        } else {
            res = {
                success: true,
                message: 'Site status updated'
            }
        }
        return res;
    }
}
