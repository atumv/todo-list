const mockResponse = {
  data: [
    {
      id: 1,
      attributes: {
        status: 'Не выполнена',
        title: 'Task 1',
        description: 'Lorem Ipsum',
        createdAt: '2025-03-04T12:27:38.922Z',
        updatedAt: '2025-03-04T12:27:38.922Z',
        publishedAt: '2025-03-04T12:27:38.920Z',
      },
    },
    {
      id: 2,
      attributes: {
        status: 'Выполнена',
        title: 'Task 2',
        description: 'Lorem Ipsum',
        createdAt: '2025-03-04T12:28:40.841Z',
        updatedAt: '2025-03-04T12:28:40.841Z',
        publishedAt: '2025-03-04T12:28:40.841Z',
      },
    },
  ],
  meta: {
    pagination: {
      page: 1,
      pageSize: 25,
      pageCount: 1,
      total: 2,
    },
  },
};

global.fetch = vi.fn().mockResolvedValue({
  json: () => Promise.resolve(mockResponse),
});
