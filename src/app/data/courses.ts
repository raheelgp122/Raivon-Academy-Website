export interface Lesson {
  id: string;
  title: string;
  type: 'Video' | 'Quiz' | 'Article';
  duration: string;
  completed?: boolean;
  videoUrl?: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  category: 'Computer Science' | 'Artificial Intelligence' | 'Software Engineering';
  level: 'Basics' | 'Intermediate' | 'Advanced';
  icon: string;
  lessons: number;
  duration: string;
  progress?: number;
  lessons_list: Lesson[];
}

export const courses: Course[] = [
  {
    id: 'python-basics',
    title: 'Python Programming Fundamentals',
    description: 'Master the foundations of Python programming with hands-on projects and real-world applications.',
    category: 'Computer Science',
    level: 'Basics',
    icon: '🐍',
    lessons: 24,
    duration: '8 weeks',
    progress: 0,
    lessons_list: [
      { id: '1', title: 'Every Python Concept Explained in 12 Minutes', type: 'Video', duration: '12 min', videoUrl: 'https://www.youtube.com/watch?v=wfL4o73swZI' },
      { id: '2', title: 'Python Tutorial for Beginners #3 - Integers & Floats', type: 'Video', duration: '18 min', videoUrl: 'https://www.youtube.com/watch?v=khKv-8q7YmY' },
      { id: '3', title: 'Python Tutorial #6 - Conditionals (if/else)', type: 'Video', duration: '22 min', videoUrl: 'https://www.youtube.com/watch?v=DZwmZ8Usvnk' },
      { id: '4', title: 'Practice Quiz: Basics', type: 'Quiz', duration: '15 min' },
      { id: '5', title: 'Python Tutorial #8 - Functions', type: 'Video', duration: '25 min', videoUrl: 'https://www.youtube.com/watch?v=9Os0o3wzS_I' },
    ],
  },
  {
    id: 'ml-intro',
    title: 'Introduction to Machine Learning',
    description: 'Explore supervised and unsupervised learning algorithms with Python and scikit-learn.',
    category: 'Artificial Intelligence',
    level: 'Intermediate',
    icon: '🤖',
    lessons: 32,
    duration: '10 weeks',
    progress: 45,
    lessons_list: [
      { id: '1', title: 'What Is Machine Learning for Beginners?', type: 'Video', duration: '15 min', completed: true, videoUrl: 'https://www.youtube.com/watch?v=i_LwzRVP7bg' },
      { id: '2', title: 'Linear Regression Explained', type: 'Video', duration: '28 min', completed: true, videoUrl: 'https://www.youtube.com/watch?v=nk2CQITm_eo' },
      { id: '3', title: 'Classification Algorithms Explained', type: 'Video', duration: '32 min', videoUrl: 'https://www.youtube.com/watch?v=J4Wdy0Wc_xQ' },
      { id: '4', title: 'Model Evaluation', type: 'Article', duration: '20 min' },
    ],
  },
  {
    id: 'web-dev',
    title: 'Full-Stack Web Development',
    description: 'Build modern web applications with React, Node.js, and MongoDB from scratch.',
    category: 'Software Engineering',
    level: 'Intermediate',
    icon: '🌐',
    lessons: 40,
    duration: '12 weeks',
    progress: 0,
    lessons_list: [
      { id: '1', title: 'HTML & CSS Crash Course', type: 'Video', duration: '20 min', videoUrl: 'https://www.youtube.com/watch?v=UB1O30fR-EE' },
      { id: '2', title: 'JavaScript ES6 Features', type: 'Video', duration: '35 min', videoUrl: 'https://www.youtube.com/watch?v=NCwa_xi0Uuc' },
      { id: '3', title: 'React JS Crash Course', type: 'Video', duration: '30 min', videoUrl: 'https://www.youtube.com/watch?v=w7ejDZ8SWv8' },
    ],
  },
  {
    id: 'data-structures',
    title: 'Data Structures & Algorithms',
    description: 'Master essential data structures and algorithms for coding interviews and competitive programming.',
    category: 'Computer Science',
    level: 'Advanced',
    icon: '🔍',
    lessons: 36,
    duration: '10 weeks',
    progress: 100,
    lessons_list: [
      { id: '1', title: 'Arrays & Strings Interview Questions', type: 'Video', duration: '25 min', completed: true, videoUrl: 'https://www.youtube.com/watch?v=QJNwK2uJyGs' },
      { id: '2', title: 'Linked Lists Explained', type: 'Video', duration: '30 min', completed: true, videoUrl: 'https://www.youtube.com/watch?v=njTh_OwMljA' },
      { id: '3', title: 'Graph & Tree Data Structures Explained', type: 'Video', duration: '40 min', completed: true, videoUrl: 'https://www.youtube.com/watch?v=09_LlHjoEiY' },
    ],
  },
  {
    id: 'deep-learning',
    title: 'Deep Learning with PyTorch',
    description: 'Build neural networks and deep learning models using PyTorch framework.',
    category: 'Artificial Intelligence',
    level: 'Advanced',
    icon: '🧠',
    lessons: 28,
    duration: '8 weeks',
    progress: 0,
    lessons_list: [
      { id: '1', title: 'Neural Networks Explained', type: 'Video', duration: '22 min', videoUrl: 'https://www.youtube.com/watch?v=aircAruvnKk' },
      { id: '2', title: 'PyTorch Tensors Explained', type: 'Video', duration: '18 min', videoUrl: 'https://www.youtube.com/watch?v=GIsg-ZUy0MY' },
    ],
  },
  {
    id: 'git-basics',
    title: 'Git & Version Control',
    description: 'Learn version control fundamentals with Git and collaborate effectively on team projects.',
    category: 'Software Engineering',
    level: 'Basics',
    icon: '📦',
    lessons: 16,
    duration: '4 weeks',
    progress: 0,
    lessons_list: [
      { id: '1', title: 'Git Explained in 100 Seconds', type: 'Video', duration: '10 min', videoUrl: 'https://www.youtube.com/watch?v=hwP7WQkmECE' },
      { id: '2', title: 'Git & GitHub Crash Course', type: 'Video', duration: '15 min', videoUrl: 'https://www.youtube.com/watch?v=SWYqp7iY_Tc' },
    ],
  },
];

export function getCourseById(id: string): Course | undefined {
  return courses.find((course) => course.id === id);
}
