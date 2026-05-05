import { useParams, useLocation, Navigate } from 'react-router-dom';
import { GlassCard } from '../components/GlassCard';
import { Button } from '../components/Button';
import { LevelBadge } from '../components/LevelBadge';
import { getCourseById } from '../data/courses';
import { Award, Download, Share2 } from 'lucide-react';

export function CertificatePage() {
  const { courseId } = useParams<{ courseId: string }>();
  const location = useLocation();
  const course = courseId ? getCourseById(courseId) : undefined;
  const studentName = location.state?.studentName;

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Course not found</p>
      </div>
    );
  }

  if (!studentName) {
    return <Navigate to={`/course/${courseId}`} replace />;
  }

  const issueDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="min-h-screen px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
            Congratulations!
          </h1>
          <p className="text-[#a89880]">You have successfully completed the course</p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#C9A84C] via-[#B85C38] to-[#C9A84C] rounded-[24px] blur-xl opacity-30" />
          <GlassCard className="relative p-16 border-2 border-[#C9A84C]">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#C9A84C] to-[#B85C38] flex items-center justify-center">
                <Award className="w-10 h-10 text-[#F5ECD7]" />
              </div>

              <p className="text-[#C9A84C] uppercase tracking-widest text-sm mb-4">
                Certificate of Completion
              </p>

              <h2 className="text-5xl mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
                {studentName}
              </h2>

              <p className="text-[#a89880] mb-3">has successfully completed</p>

              <h3 className="text-3xl mb-4 text-[#C9A84C]" style={{ fontFamily: 'var(--font-heading)' }}>
                {course.title}
              </h3>

              <div className="flex items-center justify-center gap-3 mb-8">
                <LevelBadge level={course.level} />
                <span className="text-[#a89880]">•</span>
                <span className="text-[#a89880]">{course.lessons} lessons completed</span>
              </div>

              <div className="border-t border-[rgba(255,255,255,0.15)] pt-6 mb-6">
                <p className="text-[#a89880] text-sm mb-2">Issued by</p>
                <p className="text-xl" style={{ fontFamily: 'var(--font-heading)' }}>
                  Raivon Academy
                </p>
              </div>

              <p className="text-[#a89880] text-sm">Issue Date: {issueDate}</p>
            </div>
          </GlassCard>
        </div>

        <div className="flex gap-4 justify-center mt-8">
          <Button>
            <Download className="w-5 h-5 mr-2" />
            Download PDF
          </Button>
          <Button variant="ghost">
            <Share2 className="w-5 h-5 mr-2" />
            Share
          </Button>
          <Button variant="ghost" to="/">Back to Home</Button>
        </div>
      </div>
    </div>
  );
}
