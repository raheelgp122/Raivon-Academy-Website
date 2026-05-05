import { useState } from 'react';
import { GlassCard } from '../components/GlassCard';
import { Button } from '../components/Button';
import { LevelBadge } from '../components/LevelBadge';
import { courses } from '../data/courses';
import { BookOpen, Brain, Code, Award, Users, Zap, Clock } from 'lucide-react';

export function LandingPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Computer Science', 'Artificial Intelligence', 'Software Engineering'];

  const filteredCourses = selectedCategory === 'All'
    ? courses
    : courses.filter(c => c.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <nav className="px-8 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#B85C38] flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-[#F5ECD7]" />
          </div>
          <h1 className="text-3xl" style={{ fontFamily: 'var(--font-heading)' }}>Raivon</h1>
        </div>
      </nav>

      <section className="px-8 py-20 flex items-center justify-center">
        <GlassCard className="max-w-3xl p-16 text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#B85C38] flex items-center justify-center">
            <BookOpen className="w-8 h-8 text-[#F5ECD7]" />
          </div>
          <h1 className="text-5xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Raivon Academy
          </h1>
          <p className="text-xl text-[#a89880] mb-8 max-w-2xl mx-auto">
            Free world-class education in Computer Science, AI, and Software Engineering.
            Learn at your own pace with expert-crafted curriculum.
          </p>
          <div className="flex gap-4 justify-center">
            <Button onClick={() => document.getElementById('courses-section')?.scrollIntoView({ behavior: 'smooth' })}>
              Start Learning Free
            </Button>
          </div>
        </GlassCard>
      </section>

      <section className="px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl text-center mb-12" style={{ fontFamily: 'var(--font-heading)' }}>
            Explore by Category
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <GlassCard hover className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[rgba(76,175,80,0.15)] flex items-center justify-center">
                <Code className="w-8 h-8 text-[#4CAF50]" />
              </div>
              <h3 className="text-2xl mb-2">Computer Science</h3>
              <p className="text-[#a89880]">
                Foundational programming, data structures, and algorithms
              </p>
            </GlassCard>
            <GlassCard hover className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[rgba(255,193,7,0.15)] flex items-center justify-center">
                <Brain className="w-8 h-8 text-[#FFC107]" />
              </div>
              <h3 className="text-2xl mb-2">Artificial Intelligence</h3>
              <p className="text-[#a89880]">
                Machine learning, deep learning, and AI applications
              </p>
            </GlassCard>
            <GlassCard hover className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[rgba(184,92,56,0.15)] flex items-center justify-center">
                <Zap className="w-8 h-8 text-[#B85C38]" />
              </div>
              <h3 className="text-2xl mb-2">Software Engineering</h3>
              <p className="text-[#a89880]">
                Full-stack development, DevOps, and best practices
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      <section id="courses-section" className="px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl text-center mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
            All Courses
          </h2>

          <div className="flex gap-3 mb-8 justify-center flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-[#B85C38] text-[#F5ECD7]'
                    : 'bg-[rgba(255,255,255,0.06)] text-[#a89880] hover:bg-[rgba(255,255,255,0.1)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <GlassCard key={course.id} hover className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{course.icon}</div>
                  <LevelBadge level={course.level} />
                </div>
                <h3 className="text-xl mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  {course.title}
                </h3>
                <p className="text-[#a89880] text-sm mb-4 line-clamp-2">
                  {course.description}
                </p>
                <div className="flex items-center gap-4 text-sm text-[#a89880] mb-4">
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    {course.lessons} lessons
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </span>
                </div>
                <Button to={`/course/${course.id}`} className="w-full">View Course</Button>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl text-center mb-12" style={{ fontFamily: 'var(--font-heading)' }}>
            Why Choose Raivon Academy
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <GlassCard className="p-6 text-center">
              <Award className="w-12 h-12 mx-auto mb-4 text-[#C9A84C]" />
              <h3 className="text-lg mb-2">Free Forever</h3>
              <p className="text-sm text-[#a89880]">
                Quality education accessible to everyone, everywhere
              </p>
            </GlassCard>
            <GlassCard className="p-6 text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-[#C9A84C]" />
              <h3 className="text-lg mb-2">Expert Instructors</h3>
              <p className="text-sm text-[#a89880]">
                Learn from industry professionals and academics
              </p>
            </GlassCard>
            <GlassCard className="p-6 text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-[#C9A84C]" />
              <h3 className="text-lg mb-2">Self-Paced Learning</h3>
              <p className="text-sm text-[#a89880]">
                Study anytime, anywhere at your own schedule
              </p>
            </GlassCard>
            <GlassCard className="p-6 text-center">
              <Award className="w-12 h-12 mx-auto mb-4 text-[#C9A84C]" />
              <h3 className="text-lg mb-2">Certificates</h3>
              <p className="text-sm text-[#a89880]">
                Earn recognition for your achievements
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      <footer className="px-8 py-12 border-t border-[rgba(255,255,255,0.15)]">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-[#B85C38] flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-[#F5ECD7]" />
            </div>
            <h3 className="text-2xl" style={{ fontFamily: 'var(--font-heading)' }}>Raivon Academy</h3>
          </div>
          <p className="text-[#a89880] text-sm">
            © 2026 Raivon Academy. Empowering the next generation of technologists.
          </p>
        </div>
      </footer>
    </div>
  );
}
