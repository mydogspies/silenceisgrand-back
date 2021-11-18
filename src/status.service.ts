import { Injectable, Inject } from '@nestjs/common';
import { Status } from './status.model';
import {STATUS_REPOSITORY} from "./constants";

@Injectable()
export class StatusService {

    constructor(@Inject(STATUS_REPOSITORY) private readonly statusRepository: typeof Status) {}

    async findAll(): Promise<Status[]> {
        return await this.statusRepository.findAll<Status>();
    }

    async update(id, setStatus) {
        const [numberOfAffectedRows] = await this.statusRepository.update({ ...setStatus }, { where: { id: id}, returning: true });
        return {numberOfAffectedRows};
    }
}
