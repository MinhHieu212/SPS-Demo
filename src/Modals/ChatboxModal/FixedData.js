export const mnembers = [
  {
    avatar:
      "https://media.istockphoto.com/id/1410847427/vi/anh/%C4%91%C3%A0n-%C3%B4ng-%C4%91ang-nghe-nh%E1%BA%A1c-b%E1%BA%B1ng-tai-nghe-m%E1%BB%99t-c%C3%A1ch-tho%E1%BA%A3i-m%C3%A1i-v%C3%A0-vui-v%E1%BA%BB-3d-render.jpg?s=2048x2048&w=is&k=20&c=_8duVf0uul7mznJL4ACyevZA9KMvcJSNCD3R5TROK3E=",
    name: "Trang Anh",
    id: 2,
    conversation: [
      { id: 1, message: "Hello Minh Hieu" },
      { id: 2, message: "Hello Hung Truong" },
      { id: 2, message: "Ban Oke chu, chuc ban sinh nhat vui ve" },
      { id: 1, message: "Hello em iu" },
    ],
  },
  {
    avatar:
      "https://media.istockphoto.com/id/1410847427/vi/anh/%C4%91%C3%A0n-%C3%B4ng-%C4%91ang-nghe-nh%E1%BA%A1c-b%E1%BA%B1ng-tai-nghe-m%E1%BB%99t-c%C3%A1ch-tho%E1%BA%A3i-m%C3%A1i-v%C3%A0-vui-v%E1%BA%BB-3d-render.jpg?s=2048x2048&w=is&k=20&c=_8duVf0uul7mznJL4ACyevZA9KMvcJSNCD3R5TROK3E=",
    name: "Trang Anh",
    id: 1,
    conversation: [
      { id: 1, message: "Hello Minh Hieu" },
      { id: 2, message: "Hello Hung Truong" },
      { id: 2, message: "Ban Oke chu, chuc ban sinh nhat vui ve" },
      { id: 1, message: "Hello em iu" },
    ],
  },
];

export const fetch_list_friend = {
  data: [
    {
      location: {
        facility: null,
        department: null,
        room: null,
      },
      email: "spso1@example.com",
      firstName: "Tung",
      lastName: "Tran",
      role: "spso",
      receiver_id: "6555985dddab67d1ccad2cff",
    },
    {
      location: {
        facility: null,
        department: null,
        room: null,
      },
      email: "spso2@example.com",
      firstName: "Liem",
      lastName: "Nguyen",
      role: "spso",
      receiver_id: "6555986cddab67d1ccad2d02",
    },
    {
      location: {
        facility: null,
        department: null,
        room: null,
      },
      email: "spso1@gmail.com",
      firstName: "Truong",
      lastName: "Nguyen",
      role: "spso",
      receiver_id: "6555aeb1a641fa5f5b10202f",
    },
    {
      location: {
        facility: "CS1",
        department: "H1",
        room: "109",
      },
      email: "staff11@gmail.com",
      firstName: "fname",
      lastName: "lname",
      role: "staff",
      receiver_id: "655cd7b348c0d75f911a6370",
    },
  ],
};

export const get_conversationId_data = {
  data: [
    {
      members: ["6555ae96a641fa5f5b10202c", "6555985dddab67d1ccad2cff"],
      createdAt: "2023-12-02T14:08:59.030Z",
      updatedAt: "2023-12-02T14:08:59.030Z",
      conversationId: "656b3a7bc54e5c0dbb202be1",
    },
  ],
};

export const conversation_data = {
  data: [
    {
      _id: "656b3dd48b7eb36a3bf02abe",
      conversationId: "656b3a7bc54e5c0dbb202be1",
      senderId: "6555ae96a641fa5f5b10202c",
      text: "hello hieu ngu",
      createdAt: "2023-12-02T14:23:16.246Z",
    },
    {
      _id: "656b3a89c54e5c0dbb202be4",
      conversationId: "656b3a7bc54e5c0dbb202be1",
      senderId: "6555ae96a641fa5f5b10202c",
      text: "hello",
      createdAt: "2023-12-02T14:09:13.514Z",
    },
  ],
};
