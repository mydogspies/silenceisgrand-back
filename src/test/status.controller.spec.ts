import { Test, TestingModule } from '@nestjs/testing';
import {StatusService} from "../status.service";

class StatusServiceMock {
    findAll() {
        return ([
            {
                "id": 1,
                "online": 1,
                "createdAt": "2021-11-18T18:35:07.000Z",
                "updatedAt": "2021-11-19T12:17:21.000Z"
            }
        ])
    }
}

describe('StatusService', () => {
    let statusService: StatusService;

    beforeEach(async () => {

        const StatusServiceProvider = {
            provide: StatusService,
            useClass: StatusServiceMock
        };

        const module: TestingModule = await Test.createTestingModule({
            providers: [StatusService, StatusServiceProvider],
        }).compile();

        statusService = module.get<StatusService>(StatusService);
    });

    it('StatusService should be defined', () => {
    expect(statusService).toBeDefined()})
});
