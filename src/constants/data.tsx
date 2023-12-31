const questions = [
  {
    question: "What is StreamVibe?",
    answer:
      "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
  },
  {
    question: "How much does StreamVibe cost?",
    answer:
      "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
  },
  {
    question: "What content is available on StreamVibe?",
    answer:
      "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
  },
  {
    question: "How can I watch StreamVibe?",
    answer:
      "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
  },
  {
    question: "How do I sign up for StreamVibe?",
    answer:
      "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
  },
  {
    question: "What is the StreamVibe free trial?",
    answer:
      "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
  },
  {
    question: "How do I contact StreamVibe customer support?",
    answer:
      "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
  },
  {
    question: "What are the StreamVibe payment methods?",
    answer:
      "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
  },
];

const yearly = [
  {
    name: "Basic Plan",
    description:
      "Enjoy an extensive library of movies and shows, featuring a ran",
    price: 9.99 * 12,
    feature: "Basic",
    devices: "Watch on one device simultaneously",
    trail: "7 Days",
    cancel: "Yes",
    hdr: "No",
    dolby: "No",
    ad: "No",
    offline: "No",
    sharing: "No",
  },
  {
    name: "Standard Plan",
    description:
      "Access to a wider selection of movies and shows, including most new releases and exclusive content",
    price: 12.99 * 12,
    feature: "Standard",
    devices: "Watch on Two device simultaneously",
    trail: "7 Days",
    cancel: "Yes",
    hdr: "Yes",
    dolby: "Yes",
    ad: "Yes",
    offline: "Yes, for select titles.",
    sharing: "Yes, up to 5 family members.",
  },
  {
    name: "Premium Plan",
    description:
      "Access to a widest selection of movies and shows, including all new releases and Offline Viewing",
    price: 14.99 * 12,
    feature: "Premium",
    devices: "Watch on Four device simultaneously",
    trail: "7 Days",
    cancel: "Yes",
    hdr: "No",
    dolby: "No",
    ad: "No",
    offline: "Yes, for all titles.",
    sharing: "Yes, for all titles.",
  },
];

const monthly = [
  {
    name: "Basic Plan",
    description:
      "Enjoy an extensive library of movies and shows, featuring a ran",
    price: 9.99,
    feature: "Basic",
    devices: "Watch on one device simultaneously",
    trail: "7 Days",
    cancel: "Yes",
    hdr: "No",
    dolby: "No",
    ad: "No",
    offline: "No",
    sharing: "No",
  },
  {
    name: "Standard Plan",
    description:
      "Access to a wider selection of movies and shows, including most new releases and exclusive content",
    price: 12.99,
    feature: "Standard",
    devices: "Watch on Two device simultaneously",
    trail: "7 Days",
    cancel: "Yes",
    hdr: "Yes",
    dolby: "Yes",
    ad: "Yes",
    offline: "Yes, for select titles.",
    sharing: "Yes, up to 5 family members.",
  },
  {
    name: "Premium Plan",
    description:
      "Access to a widest selection of movies and shows, including all new releases and Offline Viewing",
    price: 14.99,
    feature: "Premium",
    devices: "Watch on Four device simultaneously",
    trail: "7 Days",
    cancel: "Yes",
    hdr: "No",
    dolby: "No",
    ad: "No",
    offline: "Yes, for all titles.",
    sharing: "Yes, for all titles.",
  },
];

export default { questions, monthly, yearly };
