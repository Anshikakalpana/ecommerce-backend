const mockRedis = {
  sAdd: jest.fn(),
  sRem: jest.fn(),
  sIsMember: jest.fn(),
  expire: jest.fn(),
  del: jest.fn(),
  connect: jest.fn(),
  on: jest.fn(),
  isOpen: true,
};

export const connectRedis = jest.fn();

export default mockRedis;
