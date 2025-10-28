import React, { useState } from 'react'

export default function App() {
  const [photo, setPhoto] = useState(null);

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPhoto(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-10">
      <header className="text-center mb-10">
        <div className="relative inline-block">
          <div className="w-32 h-32 rounded-full bg-gray-200 overflow-hidden mx-auto shadow-lg">
            {photo ? (
              <img src={photo} alt="Profile" className="object-cover w-full h-full" />
            ) : (
              <div className="flex items-center justify-center h-full text-gray-500">Upload Photo</div>
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoUpload}
            className="absolute inset-0 opacity-0 cursor-pointer"
            title="Upload Profile Photo"
          />
        </div>
        <h1 className="text-3xl font-bold mt-4">Tanner Muturi</h1>
        <p className="text-gray-600 text-sm">PhD Candidate — Civil Engineering | AI-Driven Pavement Systems</p>
      </header>

      <main className="w-full max-w-3xl space-y-8">
        <section className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-semibold mb-2">Research Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            My research explores the integration of AI, edge computing, and computer vision into pavement management and autonomous inspection systems. I focus on multi-sensor data fusion, point cloud completion, and LLM-driven analysis frameworks for transportation infrastructure.
          </p>
        </section>

        <section className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-semibold mb-2">Publications</h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li><strong>Muturi, T.</strong> et al. (2025). <em>Integrating LLMs for Autonomous Pavement Analysis</em>. Journal of AI in Infrastructure.</li>
            <li><strong>Muturi, T.</strong> et al. (2024). <em>Point Cloud Completion for Surface Evaluation</em>. IEEE ICCV Workshop.</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-semibold mb-2">Projects</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold">Autonomous Pavement Inspection Robot</h3>
              <p className="text-sm text-gray-700 mt-1">ROS2-based robot integrating LiDAR, camera, and AI for real-time defect detection.</p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold">Edge-AI Condition Monitoring</h3>
              <p className="text-sm text-gray-700 mt-1">Edge computing system for on-site defect inference and repair prioritization.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-semibold mb-2">Achievements</h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>2025 TRB Annual Meeting Presenter — Ethics and Equity in AI</li>
            <li>NVIDIA Research Fellowship Applicant</li>
            <li>Graduate Research Award, Mizzou Civil Engineering Department</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow p-6 text-center">
          <h2 className="text-xl font-semibold mb-2">Contact</h2>
          <p className="text-gray-700">Email: <a href="mailto:youremail@university.edu" className="underline">youremail@university.edu</a></p>
          <p className="text-gray-700">LinkedIn: <a href="https://linkedin.com/in/yourprofile" className="underline">linkedin.com/in/yourprofile</a></p>
          <p className="text-gray-700">Google Scholar: <a href="https://scholar.google.com/citations?user=yourid" className="underline">Scholar Profile</a></p>
        </section>
      </main>

      <footer className="mt-10 text-sm text-gray-500">© 2025 Tanner Muturi — Built with React & Tailwind CSS</footer>
    </div>
  );
}
