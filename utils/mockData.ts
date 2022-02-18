import { mock } from 'intermock';
import * as fs from 'fs';

interface GenerateMockDataProps {
  fileName: string;
  interfaces: Array<string>;
}

const filePath = '__mocks__/interfaces/mock.interface.';

export const generateMockData = (props: GenerateMockDataProps): any => {
  const { fileName, interfaces } = props || {};
  const fullPath = `${filePath}${fileName}.ts`;
  const mockData = mock({
    files: [[fullPath, fs.readFileSync(fullPath, 'utf-8')]],
    interfaces,
    isFixedMode: true,
    output: 'object',
  });

  return mockData;
};
