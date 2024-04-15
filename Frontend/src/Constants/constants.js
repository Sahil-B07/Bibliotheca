const featureContent = [
  {
    id: "Publish with Ease",
    desc: "Publish your writings effortlessly, whether you're an established author or an aspiring writer. Our user-friendly platform allows you to format and share your work hassle-free, reaching readers worldwide.",
  },
  {
    id: "Personalized Reading Experience",
    desc: "Tailor your reading journey with personalized book recommendations. Our platform understands your literary tastes, ensuring you find your next captivating read effortlessly.",
  },
  {
    id: "Empowering Writing Tools",
    desc: "Elevate your writing skills with our suite of editing and formatting tools. Enhance your work with spell check, grammar suggestions, and much more.",
  },
];

const quiz = {
  questions: [
    {
      topic:'genre',
      question: 'What genres do you enjoy the most?',
      choices: ['Mystery', 'Science Fiction', 'Thriller', ''],
      type: 'MCQs',
    },
    {
      topic:'author',
      question: 'Who is your favorite author?',
      choices: ['J.K. Rowling', 'Stephen King', 'Stan lee', ''],
      type: 'MCQs',
    },
    {
      topic:'book',
      question:
        'What is your all-time favorite book?',
      choices: ['Harry Potter and the Sorcerer\'s Stone', 'The Lord of the Rings', 'The Alchemist', ''],
      type: 'MCQs',
    },
    {
      topic:'duration',
      question: 'What is your preferred length for audio books?',
      choices: ['Short (up to 5 hours)', 'Medium (5 to 10 hours)', 'Long (10 to 20 hours)', 'Epic (20+ hours)'],
      type: 'MCQs',
    },
  ],
}


export {featureContent ,quiz};