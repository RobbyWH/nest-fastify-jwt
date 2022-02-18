import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';
import { generateMockData } from '../utils/mockData';
import { ConfigService } from '@nestjs/config';

const mockData = generateMockData({
  fileName: 'generateJWTToken',
  interfaces: ['GenerateJWTToken'],
});
const jwtToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjIzMTMxMjMxMjMxMiJ9.eyJlbWFpbCI6Ik15cm9uX09sc29uMzlAaG90bWFpbC5jb20iLCJuYW1lIjoiTmF0YXNoYSBKYWNvYnMiLCJzY29wZSI6InVzZXIiLCJleHRlcm5hbF9pZCI6ImJmYzhjYjYyLWM2Y2UtNDE5NC1hMmE1LTQ5OTMyMGI4MzdlYiIsImlhdCI6MTY0NTE2NDk0OX0.KqKqrzZtfisBHUWAIRIe83Q79W1TPugTVW7jm5R868Y';

describe('app Service', () => {
  let appService: AppService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [
        AppService,
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn((key: string) => {
              if (key === 'SECRET_KEY') {
                return 'asdasdasdasdasdsa';
              } else if (key === 'KEY_ID') {
                return '231312312312';
              }
              return null;
            }),
          },
        },
      ],
    }).compile();

    appService = await moduleRef.get<AppService>(AppService);
  });

  afterAll(async () => {
    jest.clearAllMocks();
  });

  afterEach(async () => {
    jest.clearAllMocks();
  });

  it('defined', () => {
    expect(appService).toBeDefined();
  });

  describe('generateJWTToken', () => {
    console.log('mockData', mockData);
    it('success', () => {
      const body = mockData.GenerateJWTToken;
      const token = appService.generateJWTToken(body);
      console.log('TOKEN', token);
      expect(typeof token).toBe('string');
    });
  });
});
