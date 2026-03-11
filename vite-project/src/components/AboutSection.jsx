const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative z-30 min-h-[800px] flex items-center overflow-hidden">
      {/* Background Image & Soft Theme Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-[url('/images/DJI_20250925150150_0153_D.png')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#800000]/60 to-[#4d0000]/80" />
      </div>

      <div className="w-full px-4 md:px-8 xl:px-12 relative z-10">
        
        {/* 3-Column Modern Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          
          {/* Pillar 1: ABOUT US */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-100 min-h-[750px] flex flex-col">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-red-50 text-[#800000] rounded-xl flex items-center justify-center shadow-[inset_0_2px_4px_rgba(128,0,0,0.1)]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold text-[#800000] font-[var(--font-heading)] uppercase tracking-wide">
                About Us
              </h2>
            </div>

            <div className="space-y-8 flex-grow">
              <div className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-[#800000] mt-1 shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                </svg>
                <p className="text-gray-900 text-[20px] leading-relaxed">
                  Established in 1886 as Bihar School of Engineering, NIT Patna is the 18th National Institute of Technology recognized by MHRD, Govt. of India.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-[#800000]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                  <h3 className="text-xl font-bold text-navy-900 leading-none">Vision</h3>
                </div>
                <p className="text-gray-900 text-[20px] leading-relaxed">
                  To contribute to India and the World through excellence in scientific and technical education and research; to serve as a valuable resource for industry and society; and to remain a source of pride for all Indians.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-[#800000]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.671zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
                  </svg>
                  <h3 className="text-xl font-bold text-navy-900 leading-none">Mission</h3>
                </div>
                <p className="text-gray-900 text-[22px] leading-relaxed">
                  To nurture innovation through cutting-edge research and offer world-class undergraduate, postgraduate and doctoral programs.
                </p>
              </div>
            </div>

            <button className="bg-[#811919] text-white mt-auto w-full py-4 hover:bg-[#811919] text-white font-bold rounded-lg text-lg border border-gray-200 transition-colors flex justify-center items-center gap-2">
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
            </button>
          </div>

          {/* Pillar 2: DIRECTOR PROFILE */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-100 min-h-[750px] flex flex-col items-center justify-center text-center">
            
            <div className="relative mb-6">
              {/* Profile Image with outline effect */}
              <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] ring-2 ring-gray-100">
                <img
                  src="/images/VIS07257.png"
                  alt="Prof. Pradip K. Jain"
                  className="w-full h-full object-cover object-[center_20%]"
                />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#800000] text-white px-8 py-2 rounded-full text-base font-bold tracking-wider shadow-lg border-2 border-white">
                Director
              </div>
            </div>

            <h2 className="text-4xl font-bold text-[#800000] font-[var(--font-heading)] mb-7 mt-8">
              Prof. Pradip K. Jain
            </h2>
            
            <div className="flex items-center gap-1 text-black text-xl font-bold mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-black shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              Director, NIT Patna
            </div>

            <div className="flex items-center gap-1 text-black text-xl font-bold mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-black shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
               </svg>
              director@nitp.ac.in
            </div>

            <div className="w-full grid grid-cols-2 gap-4 mt-auto">
              <button className="py-3 border border-gray-200 hover:border-gray-300 text-navy-900 rounded-lg text-lg font-bold transition-colors flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                Email
              </button>
              <button className="py-3 border border-gray-200 hover:border-gray-300 text-navy-900 rounded-lg text-lg font-bold transition-colors flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                Profile
              </button>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-100 w-full flex items-center justify-center text-sm text-gray-400 gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>
              Professor since 2001
            </div>

          </div>

          {/* Pillar 3: KNOW US */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-100 min-h-[750px] flex flex-col">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-red-50 text-[#800000] rounded-xl flex items-center justify-center shadow-[inset_0_2px_4px_rgba(128,0,0,0.1)]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold text-[#800000] font-[var(--font-heading)] uppercase tracking-wide">
                Know Us
              </h2>
            </div>

            <div className="space-y-8 flex-grow">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-[#800000]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                  <h3 className="text-xl font-bold text-navy-900 leading-none">About Director</h3>
                </div>
                <p className="text-gray-600 text-[17px] leading-relaxed pl-8">
                  Prof. P.K. Jain joined as Lecturer at IIT-BHU in 1981 and became Professor in 2001. He has made significant contributions in high power microwave tubes and gyrotron devices.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-[#800000]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                  </svg>
                  <h3 className="text-xl font-bold text-navy-900 leading-none">Director's Message</h3>
                </div>
                <p className="text-gray-600 text-[17px] leading-relaxed pl-8">
                  "It gives me immense pleasure to lead one of North India's oldest technical institutes, with roots tracing back to 1886. We continue our legacy of excellence in engineering education."
                </p>
              </div>

              <div className="bg-red-50/50 rounded-xl p-4 flex gap-4 mt-6 border border-[#800000]/10">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#800000]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                </div>
                <p className="text-[17px] text-navy-900 leading-snug">
                  NIT Patna offers 10 UG, 21 PG, and PhD programs across 11 departments with 230+ faculty members.
                </p>
              </div>
            </div>

            <button className="bg-[#811919] text-white mt-auto w-full py-4 hover:bg-[#811919] text-white font-bold rounded-lg text-lg border border-gray-200 transition-colors flex justify-center items-center gap-2">
              Explore More
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
