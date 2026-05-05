import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { GlassCard } from '../components/GlassCard';
import { Button } from '../components/Button';
import { getCourseById } from '../data/courses';
import { getYouTubeVideoId } from '../utils/youtube';
import { BookOpen, CheckCircle2, Award } from 'lucide-react';

export function VideoPlayerPage() {
  const { courseId, lessonId } = useParams<{ courseId: string; lessonId: string }>();
  const navigate = useNavigate();
  const course = courseId ? getCourseById(courseId) : undefined;
  const [completed, setCompleted] = useState(false);
  const [studentName, setStudentName] = useState('');

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Course not found</p>
      </div>
    );
  }

  const currentLessonIndex = course.lessons_list.findIndex(l => l.id === lessonId);
  const currentLesson = course.lessons_list[currentLessonIndex];
  const nextLesson = course.lessons_list[currentLessonIndex + 1];
  const isLastLesson = currentLessonIndex === course.lessons_list.length - 1;

  const videoId = currentLesson?.videoUrl ? getYouTubeVideoId(currentLesson.videoUrl) : null;

  const handleComplete = () => {
    setCompleted(true);
  };

  const handleNext = () => {
    if (nextLesson) {
      navigate(`/course/${courseId}/lesson/${nextLesson.id}`);
      setCompleted(false);
    }
  };

  const handleViewCertificate = () => {
    if (studentName.trim()) {
      navigate(`/certificate/${courseId}`, { state: { studentName: studentName.trim() } });
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
        <Button variant="ghost" to={`/course/${courseId}`}>Back to Course</Button>
      </nav>

      <div className="flex h-[calc(100vh-88px)]">
        <div className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
              {currentLesson?.title}
            </h1>
            <p className="text-[#a89880] mb-6">Lesson {currentLessonIndex + 1} of {course.lessons_list.length}</p>

            <GlassCard className="mb-6 overflow-hidden">
              <div className="aspect-video bg-[#050d08] flex items-center justify-center relative">
                {videoId && currentLesson?.type === 'Video' ? (
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}?rel=0`}
                    title={currentLesson.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : currentLesson?.type === 'Quiz' ? (
                  <div className="flex flex-col items-center justify-center p-8 text-center">
                    <CheckCircle2 className="w-16 h-16 text-[#C9A84C] mb-4" />
                    <h3 className="text-2xl mb-2">Practice Quiz</h3>
                    <p className="text-[#a89880]">Complete the quiz to test your knowledge</p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center p-8 text-center">
                    <BookOpen className="w-16 h-16 text-[#a89880] mb-4" />
                    <p className="text-[#a89880]">Content not available</p>
                  </div>
                )}
              </div>
            </GlassCard>

            {!completed ? (
              <GlassCard className="p-8 text-center">
                <p className="text-[#a89880] mb-4">Complete this lesson to continue</p>
                <Button onClick={handleComplete}>Mark as Complete</Button>
              </GlassCard>
            ) : (
              <GlassCard className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <CheckCircle2 className="w-8 h-8 text-[#4CAF50] flex-shrink-0" />
                  <div>
                    <h3 className="text-xl mb-2">Lesson Complete!</h3>
                    <p className="text-[#a89880]">
                      Great job completing this lesson. {isLastLesson ? "You've finished all lessons in this course!" : 'Ready for the next one?'}
                    </p>
                  </div>
                </div>

                {isLastLesson && (
                  <div className="mb-6 p-6 rounded-2xl bg-[rgba(201,168,76,0.1)] border border-[#C9A84C]">
                    <label className="block text-sm mb-3 text-[#F5ECD7]">
                      Enter Your Name for Certificate
                    </label>
                    <input
                      type="text"
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-2xl bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.15)] text-[#F5ECD7] placeholder-[#a89880] focus:outline-none focus:border-[#C9A84C] transition-colors"
                    />
                  </div>
                )}

                <div className="flex gap-3">
                  {!isLastLesson && nextLesson && (
                    <Button onClick={handleNext}>Next Lesson</Button>
                  )}
                  {isLastLesson && (
                    <Button
                      onClick={handleViewCertificate}
                      className={!studentName.trim() ? 'opacity-50 cursor-not-allowed' : ''}
                    >
                      <Award className="w-5 h-5 mr-2" />
                      View Certificate
                    </Button>
                  )}
                  <Button variant="ghost" to={`/course/${courseId}`}>Back to Course</Button>
                </div>
              </GlassCard>
            )}
          </div>
        </div>

        <div className="w-96 border-l border-[rgba(255,255,255,0.15)] overflow-y-auto">
          <div className="p-6">
            <h3 className="text-lg mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Course Content</h3>
            <div className="space-y-2">
              {course.lessons_list.map((lesson, index) => (
                <div
                  key={lesson.id}
                  onClick={() => navigate(`/course/${courseId}/lesson/${lesson.id}`)}
                  className={`p-3 rounded-xl cursor-pointer transition-colors ${
                    lesson.id === lessonId
                      ? 'bg-[rgba(184,92,56,0.15)] border border-[#B85C38]'
                      : 'bg-[rgba(0,0,0,0.2)] hover:bg-[rgba(0,0,0,0.3)]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[rgba(255,255,255,0.08)] text-xs flex-shrink-0">
                      {lesson.completed ? <CheckCircle2 className="w-4 h-4 text-[#4CAF50]" /> : index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm truncate">{lesson.title}</p>
                      <p className="text-xs text-[#a89880]">{lesson.duration}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
