const mockResponse = {
  data: [
    {
      id: 1,
      attributes: {
        status: 'uncompleted',
        title: 'Task 1',
        description: 'Lorem Ipsum',
      },
    },
    {
      id: 2,
      attributes: {
        status: 'completed',
        title: 'Task 2',
        description: 'Lorem Ipsum',
      },
    },
  ],
};

global.fetch = vi.fn().mockResolvedValue({
  json: () => Promise.resolve(mockResponse),
});
