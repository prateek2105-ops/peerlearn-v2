import Link from 'next/link';
import { BookOpen, Users, Video, MessageSquare, Award, Upload } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-primary-600" />
              <span className="text-2xl font-bold text-gray-900">PeerLearn</span>
            </div>
            <div className="flex space-x-4">
              <Link
                href="/auth/login"
                className="px-4 py-2 text-gray-700 hover:text-primary-600 font-medium"
              >
                Login
              </Link>
              <Link
                href="/auth/signup"
                className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-medium"
              >
                Get Started
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Learn Together, Grow Together
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with peers, join study rooms, share knowledge, and excel in your academic journey
          </p>
          <Link
            href="/auth/signup"
            className="inline-block px-8 py-4 bg-primary-600 text-white text-lg rounded-lg hover:bg-primary-700 font-semibold shadow-lg"
          >
            Start Learning Now
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          <FeatureCard
            icon={<Users className="h-12 w-12 text-primary-600" />}
            title="Study Rooms"
            description="Join or create study rooms for collaborative learning with peers"
          />
          <FeatureCard
            icon={<Video className="h-12 w-12 text-primary-600" />}
            title="Video Sessions"
            description="Connect face-to-face with video calls for personalized tutoring"
          />
          <FeatureCard
            icon={<MessageSquare className="h-12 w-12 text-primary-600" />}
            title="Real-time Chat"
            description="Instant messaging to discuss topics and solve problems together"
          />
          <FeatureCard
            icon={<Upload className="h-12 w-12 text-primary-600" />}
            title="Share Materials"
            description="Upload and download study materials, notes, and resources"
          />
          <FeatureCard
            icon={<Award className="h-12 w-12 text-primary-600" />}
            title="Earn Rewards"
            description="Get points and badges for helping others and active participation"
          />
          <FeatureCard
            icon={<BookOpen className="h-12 w-12 text-primary-600" />}
            title="Track Progress"
            description="Monitor your learning journey with detailed analytics and insights"
          />
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-white rounded-2xl shadow-xl p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Learning?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of students already learning together on PeerLearn
          </p>
          <Link
            href="/auth/signup"
            className="inline-block px-8 py-4 bg-primary-600 text-white text-lg rounded-lg hover:bg-primary-700 font-semibold"
          >
            Create Free Account
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2024 PeerLearn. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: any) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
