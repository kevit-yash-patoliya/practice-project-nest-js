import { Test, TestingModule } from '@nestjs/testing';
import { SubtaskController } from './subtask.controller';
import { SubtaskService } from './subtask.service';

const mockSubtaskService = {};

describe('SubtaskController', () => {
    let controller: SubtaskController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [SubtaskController],
            providers: [
                {
                    provide: SubtaskService,
                    useValue: mockSubtaskService,
                },
            ],
        }).compile();

        controller = module.get<SubtaskController>(SubtaskController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
