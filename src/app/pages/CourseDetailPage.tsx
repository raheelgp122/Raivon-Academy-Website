import { useParams, useNavigate } from 'react-router-dom';
import { GlassCard } from '../components/GlassCard';
import { Button } from '../components/Button';
import { LevelBadge } from '../components/LevelBadge';
import { getCourseById } from '../data/courses';
import { BookOpen, Clock, Award, Play, FileText, CheckCircle2 } from 'lucide-react';

export function CourseDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const course = id ? getCourseById(id) : undefined;

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <GlassCard className="p-12 text-center">
          <h2 className="text-2xl mb-4">Course not found</h2>
          <Button to="/">Back to Home</Button>
        </GlassCard>
      </div>
    );
  }

  const isEnrolled = course.progress !== undefined && course.progress >= 0;

  const handleEnroll = () => {
    navigate(`/course/${course.id}/lesson/1`);
  };

  const getLessonIcon = (type: string) => {
    switch (type) {
      case 'Video':
        return <Play className="w-4 h-4" />;
      case 'Quiz':
        return <CheckCircle2 className="w-4 h-4" />;
      case 'Article':
        return <FileText className="w-4 h-4" />;
      default:
        return <BookOpen className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen">
      <nav className="px-8 py-6 flex items-center justify-between border-b border-[rgba(255,255,255,0.15)]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#B85C38] flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-[#F5ECD7]" />
          </div>
          <h1 className="text-3xl" style={{ fontFamily: 'var(--font-heading)' }}>Raivon</h1>
        </div>
        <Button variant="ghost" to="/">Home</Button>
      </nav>

      <div className="max-w-5xl mx-auto px-8 py-12">
        <GlassCard className="p-10 mb-8">
          <div className="flex items-start gap-6">
            <div className="text-6xl">{course.icon}</div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <LevelBadge level={course.level} />
                <span className="px-3 py-1 rounded-full bg-[rgba(76,175,80,0.2)] text-[#4CAF50] text-xs uppercase tracking-wide">
                  Free
                </span>
              </div>
              <h1 className="text-4xl mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                {course.title}
              </h1>
              <p className="text-[#a89880] text-lg mb-6">
                {course.description}
              </p>
              <div className="flex items-center gap-6 text-sm text-[#a89880] mb-6">
                <span className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  {course.lessons} lessons
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  {course.duration}
                </span>
                <span className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#C9A84C]" />
                  Certificate
                </span>
              </div>

              {isEnrolled && course.progress !== undefined && course.progress > 0 ? (
                <div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-[#a89880]">Progress</span>
                    <span className="text-[#F5ECD7]">{course.progress}%</span>
                  </div>
                  <div className="h-2 bg-[rgba(255,255,255,0.1)] rounded-full overflow-hidden mb-4">
                    <div
                      className="h-full bg-[#B85C38] transition-all duration-500"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                  <Button onClick={handleEnroll}>Continue Learning</Button>
                </div>
              ) : (
                <Button onClick={handleEnroll}>
                  {isEnrolled ? 'Start Course' : 'Enroll Now - Free'}
                </Button>
              )}
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-10">
          <h2 className="text-2xl mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            Curriculum
          </h2>
          <div className="space-y-3">
            {course.lessons_list.map((lesson, index) => (
              <div
                key={lesson.id}
                className="flex items-center gap-4 p-4 rounded-2xl bg-[rgba(0,0,0,0.2)] hover:bg-[rgba(0,0,0,0.3)] transition-colors cursor-pointer border border-transparent hover:border-[rgba(255,255,255,0.1)]"
                onClick={() => navigate(`/course/${course.id}/lesson/${lesson.id}`)}
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[rgba(255,255,255,0.08)] text-sm">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    {lesson.completed && (
                      <CheckCircle2 className="w-4 h-4 text-[#4CAF50]" />
                    )}
                    <h3 className="text-[#F5ECD7]">{lesson.title}</h3>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#a89880]">
                    <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[rgba(255,255,255,0.06)]">
                      {getLessonIcon(lesson.type)}
                      {lesson.type}
                    </span>
                    <span>{lesson.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
